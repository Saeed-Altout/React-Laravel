import { ChangeEvent, useState } from "react";

import { toast } from "sonner";
import { AxiosError } from "axios";
import { ImagePlus } from "lucide-react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

import axios from "@/lib/axios";

const formSchema = z.object({
  name: z.string(),
  icon: z.string(),
});

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  endpoint: string;
  messageSuccess?: string;
  messageError?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any;
}

export const EditModal = ({
  endpoint,
  messageError,
  messageSuccess,
  isOpen,
  onClose,
  initialData,
}: EditModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      icon: initialData?.icon || "",
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
    data.append("id", initialData.id);
    data.append("name", values.name);
    files[0] !== undefined && data.append("icon", files[0]);

    try {
      setIsLoading(true);
      await axios.post(`${endpoint}/edit`, data);
      toast.success(messageSuccess || "Success");
      onCancel();
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data?.message ||
            messageError ||
            `Failed edit ${endpoint}!`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title={`Edit ${endpoint}`}
      description={`Edit ${endpoint}`}
      loading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="cursor-pointer h-[250px] w-full border-dashed border rounded-md flex justify-center items-center overflow-hidden">
                  {field.value ? (
                    <div className="h-auto w-32 overflow-hidden">
                      <img
                        src={field.value}
                        alt="Icon"
                        className="object-contain"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ) : (
                    <ImagePlus
                      strokeWidth={0.5}
                      className="w-20 h-20 text-muted-foreground"
                    />
                  )}
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full h-full hidden"
                    type="file"
                    accept="image/*"
                    disabled={isLoading}
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
              Save changes
              {isLoading && <Spinner className="ml-2 text-muted-foreground" />}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
