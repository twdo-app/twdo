import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import TaskView from "../components/TaskView";
import { api } from "../services/api";

export default function Today() {
  return (
    <AppLayout title="today" showTemperature>
      <TaskView />
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
    return {
      props: {},
    };
  }
};
