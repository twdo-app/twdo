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
import { useEffect } from "react";
import { api } from "../services/api";

export default function SignIn({ code }: { code?: string }) {
  const showErrorMessage = useModal((state) => state.showErrorMessage);
  const signIn = useAuth((state) => state.signIn);
  const signInWithGitHub = useAuth((state) => state.signInWithGitHub);
  const { register, handleSubmit } = useForm();

  const onSignIn = async (data: SignInData | any) => {
    await signIn(data);
    const { "twdo.token": token } = parseCookies();
    if (!token) showErrorMessage("Invalid Credentials");
  };

  useEffect(() => {
    console.log(code);
    if (code) {
      api
        .post("users/auth/github", {
          code: code,
        })
        .then((res: any) => {
          console.log(res.data);
          signInWithGitHub(res.data.token);
        });
    }
  }, [code, signInWithGitHub]);

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

      <a
        className="w-full mb-8"
        href="https://github.com/login/oauth/authorize?scope=user:email&client_id=cfb74e83d2e2529dfd4f"
      >
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

export async function getServerSideProps(context: any) {
  return context.query["code"] === undefined
    ? { props: {} }
    : {
        props: { code: context.query["code"] },
      };
}
