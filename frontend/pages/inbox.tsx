import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import AppLayout from "../components/layouts/AppLayout";
import TaskView from "../components/TaskView";
import { useTasks } from "../store/useTasks";

export default function Inbox() {
  const taskStore = useTasks((state) => state);

  return (
    <AppLayout
      title="Inbox"
      showTemperature
      showAddButton
      showEditButton={false}
      onAddButtonClick={async () => {
        await taskStore.addTask();
      }}
    >
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
