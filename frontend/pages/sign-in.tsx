import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../contexts/AuthContext";
import { SignInData } from "../types/auth";

import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";
import Router from "next/router";

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSignIn = (data: SignInData | any) => {
    signIn(data);
  };

  return (
    <AuthLayout onSubmit={handleSubmit(onSignIn)}>
      <Title className="mb-8">login</Title>

      <TextInput
        {...register("email")}
        className="mb-4"
        placeholder="email address"
      />
      <TextInput
        {...register("password")}
        className="mb-4"
        placeholder="password"
        type="password"
      />

      <Button type="submit" className="w-full mb-8">
        login
      </Button>

      <p>
        no account? <Hyperlink href="/sign-up">create one</Hyperlink>
      </p>
    </AuthLayout>
  );
}
