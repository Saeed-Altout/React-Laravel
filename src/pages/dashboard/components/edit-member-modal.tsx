import { toast } from "sonner";
import { useState } from "react";
import { AxiosError } from "axios";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";

import axios from "@/lib/axios";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

interface EditMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  endpoint: string;
  messageSuccess?: string;
  messageError?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any;
}

export const EditMemberModal = ({
  endpoint,
  messageError,
  messageSuccess,
  isOpen,
  onClose,
  initialData,
}: EditMemberModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      phone: initialData?.phone || "",
    },
  });

  const onCancel = () => {
    onClose();
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = new FormData();
    data.append("id", initialData.id);
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("phone", values.phone);

    try {
      setIsLoading(true);
      await axios.post(`${endpoint}/edit`, data);
      toast.success(messageSuccess || "Success update member");
      onCancel();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data?.message ||
            messageError ||
            `Failed update ${endpoint}!`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title={`Edit ${endpoint}`}
      description={`Edit ${endpoint} to update information in your projects.`}
      loading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormInput
            name="name"
            label="Name"
            placeholder="name"
            isLoading={isLoading}
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="email"
            isLoading={isLoading}
          />
          <FormInput
            name="phone"
            label="Phone Number"
            placeholder="phone number"
            isLoading={isLoading}
          />

          <div className="pt-5 flex items-center justify-end gap-4 w-full">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Update
              {isLoading && <Spinner className="ml-2 text-muted-foreground" />}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
