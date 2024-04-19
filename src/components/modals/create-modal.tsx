import { toast } from "sonner";
import { AxiosError } from "axios";
import { ChangeEvent, useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FormImage } from "@/components/ui/form-image";
import { FormInput } from "@/components/ui/form-input";

import axios from "@/lib/axios";

const formSchema = z.object({
  name: z.string(),
  icon: z.string(),
});

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  endpoint: string;
  messageSuccess?: string;
  messageError?: string;
}

export const CreateModal = ({
  endpoint,
  messageError,
  messageSuccess,
  isOpen,
  onClose,
}: CreateModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      icon: "",
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files || []));
      if (!file.type.includes("image")) return;
      fileReader.onload = () => {
        const imageDataUrl = fileReader.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const onCancel = () => {
    onClose();
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = new FormData();

    data.append("icon", files[0]);
    data.append("name", values.name);

    try {
      setIsLoading(true);
      await axios.post(`${endpoint}/create`, data);
      toast.success(messageSuccess || `Success, ${values.name} added.`);
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
      title={`Create a new ${endpoint}`}
      description={`Add a new ${endpoint} to your projects.`}
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

          <FormImage
            name="icon"
            isLoading={isLoading}
            handleImage={handleImage}
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
