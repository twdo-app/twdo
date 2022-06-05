import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../contexts/AuthContext";
import { SignInData } from "../types/auth";

import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";
import Modal from "../components/common/Modal";
import { FiX } from "react-icons/fi";
import { parseCookies } from "nookies";
import { useModal } from "../store/useModal";

export default function SignIn() {
  const showErrorMessage = useModal((state) => state.showErrorMessage);
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSignIn = async (data: SignInData | any) => {
    await signIn(data);
    const { "twdo.token": token } = parseCookies();
    if (!token) showErrorMessage("Invalid Credentials");
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
