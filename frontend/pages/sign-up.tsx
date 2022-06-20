import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";
import { useForm } from "react-hook-form";
import Router from "next/router";

type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUp({ code }: { code?: string }) {
  const { register, handleSubmit } = useForm();

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
        }),
      });
    }
  };

  return (
    <AuthLayout
      onSubmit={handleSubmit((data) => {
        handleSignUp(data);
        Router.push("/sign-in");
      })}
    >
      <Title className="mb-8">sign up</Title>

      <TextInput {...register("name")} className="mb-4" placeholder="name" />
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
      <TextInput
        {...register("passwordConfirmation")}
        className="mb-4"
        placeholder="confirm your password"
        type="password"
      />

      <Button type="submit" className="w-full mb-8">
        sign up
      </Button>

      <p>
        already have an account? <Hyperlink href="/sign-in">sign in</Hyperlink>
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
