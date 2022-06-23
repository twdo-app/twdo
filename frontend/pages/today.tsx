import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import AppLayout from "../components/layouts/AppLayout";
import TaskView from "../components/TaskView";
import { useTasks } from "../store/useTasks";

export default function Today() {
  const taskStore = useTasks((state) => state);

  return (
    <AppLayout
      title="today"
      showTemperature
      showAddButton
      onAddButtonClick={async () => {
        await taskStore.addTask();
        console.log(taskStore.tasks);
      }}
    >
      <TaskView />
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["twdo.token"]: token } = parseCookies(ctx);

  useTasks.getState().updateTasks();

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
