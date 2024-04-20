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

interface CreateMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  endpoint: string;
  messageSuccess?: string;
  messageError?: string;
}

export const CreateMemberModal = ({
  endpoint,
  messageError,
  messageSuccess,
  isOpen,
  onClose,
}: CreateMemberModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onCancel = () => {
    onClose();
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("phone", values.phone);

    try {
      setIsLoading(true);
      await axios.post(`${endpoint}/create`, data);
      toast.success(messageSuccess || "Success added member");
      onCancel();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data?.message ||
            messageError ||
            `Failed added ${endpoint}!`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title={`Added a new ${endpoint}`}
      description={`Added a new ${endpoint} to your projects.`}
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
              Create
              {isLoading && <Spinner className="ml-2 text-muted-foreground" />}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
