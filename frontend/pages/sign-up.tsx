import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { FiGithub } from "react-icons/fi";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";
import { api } from "../services/api";

type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUp({ code }: { code?: string }) {
  const { register, handleSubmit } = useForm();
  const signInWithGitHub = useAuth((state) => state.signInWithGitHub);

  const handleSignUp = async (data: SignUpFormType | any) => {
    if (data.password === data.passwordConfirmation) {
      await fetch("http://localhost:4001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          wasCreatedWithOAuth: false,
        }),
      });
    }
  };

  useEffect(() => {
    if (code) {
      api
        .post("users/auth/github", {
          code: code,
        })
        .then((res: any) => {
          signInWithGitHub(res.data.token);
        });
    }
  }, [code, signInWithGitHub]);

  return (
    <AuthLayout
      onSubmit={handleSubmit((data) => {
        handleSignUp(data);
        Router.push("/sign-in");
      })}
    >
      <Title className="mb-8">Sign Up</Title>

      <TextInput {...register("name")} className="mb-2" placeholder="name" />
      <TextInput
        {...register("email")}
        className="mb-2"
        placeholder="email address"
      />
      <TextInput
        {...register("password")}
        className="mb-2"
        placeholder="password"
        type="password"
      />
      <TextInput
        {...register("passwordConfirmation")}
        className="mb-4"
        placeholder="confirm your password"
        type="password"
      />

      <Button type="submit" className="w-full mb-2">
        Sign Up
      </Button>

      <a
        className="w-full mb-6"
        href="https://github.com/login/oauth/authorize?scope=user:email&client_id=cfb74e83d2e2529dfd4f"
      >
        <Button
          type="button"
          icon={<FiGithub />}
          className="w-full bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-900"
        >
          Sign Up With GitHub
        </Button>
      </a>

      <p className="flex flex-col items-center">
        Already Have An Account? <Hyperlink href="/sign-in">Sign In</Hyperlink>
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
