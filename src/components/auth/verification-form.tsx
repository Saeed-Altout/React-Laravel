import { toast } from "sonner";
import { useState } from "react";
import { AxiosError } from "axios";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";

import axios from "@/lib/axios";
import { useStateContext } from "@/hooks/useStateContext";

interface VerificationFormProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const codeSchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const VerificationForm = ({
  title,
  description,
  isOpen,
  onClose,
}: VerificationFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setToken, setUser } = useStateContext();
  const form = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof codeSchema>) => {
    const username = localStorage.getItem("user_name");
    try {
      setIsLoading(true);
      const res = await axios.post("auth/verify_code", {
        user_name: username,
        code: values.code,
      });
      setUser(res.data.data);
      setToken(res.data.data.token);
      localStorage.removeItem("user_name");
      toast.success("Success to verify code");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || "Something went wrong!!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
      loading={isLoading}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-5">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="text-center flex justify-center items-center flex-col">
                <FormLabel>Enter your code</FormLabel>
                <FormControl>
                  <Input placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-6 flex items-center justify-end gap-4 w-full">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Send{" "}
              {isLoading && <Spinner className="ml-2 text-muted-foreground" />}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
