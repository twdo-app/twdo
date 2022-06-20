import { useForm } from "react-hook-form";
import { parseCookies } from "nookies";

import { SignInData } from "../types/auth";

import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";
import { useModal } from "../store/useModal";
import { useAuth } from "../store/useAuth";
import { FiGithub } from "react-icons/fi";

export default function SignIn() {
  const showErrorMessage = useModal((state) => state.showErrorMessage);
  const signIn = useAuth((state) => state.signIn);
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

      <Button type="submit" className="w-full mb-4">
        login
      </Button>

      <a className="w-full mb-8" href="http://localhost:4001/users/auth/github">
        <Button
          type="button"
          icon={<FiGithub />}
          className="w-full bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-900"
        >
          login with github
        </Button>
      </a>

      <p>
        no account? <Hyperlink href="/sign-up">create one</Hyperlink>
      </p>
    </AuthLayout>
  );
}
