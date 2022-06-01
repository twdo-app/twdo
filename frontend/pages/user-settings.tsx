import React from "react";
import Router from "next/router";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import { destroyCookie } from "nookies";

import { getAPIClient } from "../services/axios";
import { User } from "../types/user";
import { api } from "../services/api";

import Button from "../components/common/Button";
import TextInput from "../components/common/TextInput";
import AppLayout from "../components/layouts/AppLayout";

const FormSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between mb-4">{children}</div>
  );
};

const FormLabel = ({ children }: { children: React.ReactNode }) => {
  return <p className="flex-shrink mr-5">{children}</p>;
};

export default function UserSettings({ user }: { user: User }) {
  const { register, handleSubmit } = useForm();

  const signOut = () => {
    destroyCookie(null, "twdo.token");
    Router.push("/sign-in");
  };

  const onSave = (data: { name: string; email: string } | any) => {
    console.log(data.name);
    if (data.name !== "" && data.name !== user.name) {
      api.patch("/users/change-name", {
        name: data.name,
      });
    }
    if (data.email !== "" && data.email !== user.email) {
      api.patch("/users/change-email", {
        email: data.email,
      });
    }
  };

  return (
    <AppLayout title="User Settings">
      <form onSubmit={handleSubmit(onSave)}>
        <FormSection>
          <FormLabel>Change Name:</FormLabel>
          <TextInput
            className="flex-1"
            {...register("name")}
            defaultValue={user.name}
          ></TextInput>
        </FormSection>
        <FormSection>
          <FormLabel>Change E-Mail:</FormLabel>
          <TextInput
            className="flex-1"
            {...register("email")}
            defaultValue={user.email}
          ></TextInput>
        </FormSection>
        <Button type="submit" className="mb-4">
          Save
        </Button>
      </form>
      <Button onClick={signOut}>Sign out</Button>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const api = getAPIClient(ctx);
  const user = (await api.get("users/me")).data.user;

  return {
    props: {
      user,
    },
  };
};
