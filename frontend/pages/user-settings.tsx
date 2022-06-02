import React, { useState } from "react";
import Router from "next/router";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import { destroyCookie, parseCookies } from "nookies";
import { FiCheck, FiX } from "react-icons/fi";

import { getAPIClient } from "../services/axios";
import { User } from "../types/user";
import { api } from "../services/api";

import Button from "../components/common/Button";
import TextInput from "../components/common/TextInput";
import AppLayout from "../components/layouts/AppLayout";
import Modal from "../components/common/Modal";
import FormSection from "../components/common/FormSection";
import FormLabel from "../components/common/FormLabel";

export default function UserSettings({ user }: { user: User }) {
  const { register, handleSubmit } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const signOut = () => {
    destroyCookie(null, "twdo.token");
    Router.push("/sign-in");
  };

  const onUpdateAccountDetails = (
    data: { name: string; email: string } | any
  ) => {
    api.patch("/users/change-info", {
      name: data.name === "" ? user.name : data.name,
      email: data.email === "" ? user.email : data.email,
    });

    setShowSuccessMessage(true);
  };

  const onUpdatePassword = (
    data:
      | {
          oldPassword: string;
          newPassword: string;
          passwordConfirmation: string;
        }
      | any
  ) => {
    if (
      data.newPassword === data.passwordConfirmation &&
      data.oldPassword !== "" &&
      data.newPassword !== ""
    ) {
      api
        .patch("/users/change-password", {
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        })
        .then(() => {
          setShowSuccessMessage(true);
        })
        .catch(() => {
          setShowErrorMessage(true);
        });
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <AppLayout title={`Hi, ${user.name}`}>
      <h3 className="text-lg mb-4 font-bold">Account Details</h3>
      <form onSubmit={handleSubmit(onUpdateAccountDetails)}>
        <FormSection>
          <FormLabel>Change Name:</FormLabel>
          <TextInput {...register("name")} defaultValue={user.name}></TextInput>
        </FormSection>
        <FormSection>
          <FormLabel>Change E-Mail:</FormLabel>
          <TextInput
            {...register("email")}
            defaultValue={user.email}
          ></TextInput>
        </FormSection>
        <div className="w-full flex justify-end">
          <Button type="submit" className="mb-4">
            Update Account Details
          </Button>
        </div>
      </form>

      <h3 className="text-lg mb-4 font-bold">Password</h3>
      <form onSubmit={handleSubmit(onUpdatePassword)}>
        <FormSection>
          <FormLabel>Confirm Your New Password:</FormLabel>
          <TextInput
            {...register("oldPassword")}
            type="password"
            placeholder="type your old password"
          ></TextInput>
        </FormSection>
        <FormSection>
          <FormLabel>New Password:</FormLabel>
          <TextInput
            {...register("newPassword")}
            type="password"
            placeholder="type your new password"
          ></TextInput>
        </FormSection>
        <FormSection>
          <FormLabel>Confirm Your New Password:</FormLabel>
          <TextInput
            {...register("passwordConfirmation")}
            type="password"
            placeholder="confirm your new password"
          ></TextInput>
        </FormSection>
        <div className="w-full flex justify-end">
          <Button type="submit" className="mb-4">
            update password
          </Button>
        </div>
      </form>
      <Button onClick={signOut}>sign out</Button>
      {showSuccessMessage && (
        <Modal
          onClick={() => {
            setShowSuccessMessage(false);
            Router.reload();
          }}
        >
          <p className="flex items-center">
            <FiCheck className="stroke-green-400 mr-2" />
            Data Updated!
          </p>
        </Modal>
      )}
      {showErrorMessage && (
        <Modal
          onClick={() => {
            setShowErrorMessage(false);
          }}
        >
          <p className="flex items-center">
            <FiX className="stroke-pink-400 mr-2" />
            Invalid Input!
          </p>
        </Modal>
      )}
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["twdo.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  } else {
    const api = getAPIClient(ctx);
    const user = (await api.get("users/me")).data.user;

    return {
      props: {
        user,
      },
    };
  }
};
