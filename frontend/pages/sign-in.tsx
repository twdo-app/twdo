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

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [showInvalidCredentialsModal, setShowInvalidCredentialsModal] =
    useState(false);

  const onSignIn = async (data: SignInData | any) => {
    await signIn(data);
    const { "twdo.token": token } = parseCookies();
    if (!token) {
      setShowInvalidCredentialsModal(true);
    }
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

      {showInvalidCredentialsModal && (
        <Modal onClick={() => setShowInvalidCredentialsModal(false)}>
          <p className="flex items-center">
            <FiX className="stroke-pink-400 mr-2" />
            Invalid Credentials
          </p>
        </Modal>
      )}
    </AuthLayout>
  );
}
