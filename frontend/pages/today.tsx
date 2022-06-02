import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import AppLayout from "../components/layouts/AppLayout";
import TaskView from "../components/TaskView";

export default function Today() {
  return (
    <AppLayout title="today">
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
