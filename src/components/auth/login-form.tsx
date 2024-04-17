import { toast } from "sonner";
import { useState } from "react";
import { AxiosError } from "axios";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { VerificationForm } from "@/components/auth/verification-form";
import axios from "@/lib/axios";

const loginSchema = z.object({
  user_name: z.string().min(1, {
    message: "Username is required 🙄",
  }),
  password: z.string().min(1, {
    message: "Password is required 🔑",
  }),
});

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user_name: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      await axios.post("auth/login", values);
      toast.success("Check your email");
      localStorage.setItem("user_name", values.user_name);
      setIsOpen(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || "Something went wrong!!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <VerificationForm
        title="Do you have code."
        description="Please, check your email."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Card className="max-w-sm w-full">
        <CardHeader className="text-center">
          <CardTitle>Login 🔐</CardTitle>
          <CardDescription>Sign in to Dashboard & Enjoy. </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="password"
                        placeholder="******"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="link"
                size="sm"
                onClick={() => setIsOpen(true)}
              >
                Do you have a code?
              </Button>
              <Button disabled={isLoading} type="submit" className="w-full">
                Login{" "}
                {isLoading && (
                  <Spinner className="ml-2 dark:text-primary-foreground" />
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
