import React, { ReactElement, ReactNode, cloneElement } from "react";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../providers/AuthProvider";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password must be at least 8 char."),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

export type SignInProps = {
  handleSubmit: (values: SignInFormValues) => Promise<void>;
};

export const SignInForm = ({
  children: Children,
}: {
  children: (props: SignInProps) => ReactNode;
}): ReactElement | null => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const { login } = useAuth();

  const handleSubmit = async (values: SignInFormValues) => {
    const result = await login(values);
    if (result) {
      form.setError("root", { message: result.errors.root });
    }
  };

  return (
    <FormProvider {...form}>
      <Children handleSubmit={handleSubmit} />
    </FormProvider>
  );
};
