import AuthCard from "./AuthCard";
import SubmitButton from "@/components/SubmitButton";
import AuthFormFooter from "./AuthFormFooter";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type loginType } from "../schema/login-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import ShowFormPassword from "./ShowFormPassword";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showTwoFaCode, setShowTwoFaCode] = useState<boolean>(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      twoFaCode: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = (credentials: loginType) => {
    console.log(credentials);
  };

  const formElement = (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-3"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        {showTwoFaCode ? (
          <FormField
            name="twoFaCode"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vérification à deux facteurs</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Votre email"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder={"Votre email"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <ShowFormPassword text="Afficher le mot de passe" showPassword={showPassword} onClick={() => setShowPassword((prev) => !prev)} />
          </>
        )}

        <SubmitButton isDisabled={isSubmitting} textButton="Connexion" />
      </form>
    </Form>
  );

  return (
    <AuthCard
      title="Connexion"
      description="Connectez-vous avec vos identifiant"
      formElement={formElement}
      footElement={
        <AuthFormFooter
          href="inscription"
          hrefText="Inscription"
          text="Vous n'avez pas de compte ?"
        />
      }
    />
  );
};

export default LoginForm;
