import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import AppLayout from "../components/layouts/AppLayout";
import TaskView from "../components/TaskView";
import { useProjects } from "../store/useProjects";
import { useTasks } from "../store/useTasks";

export default function Project({ projectId }: { projectId: number }) {
  const taskStore = useTasks((state) => state);
  const projectStore = useProjects((state) => state);

  return (
    <AppLayout
      title={projectStore.projects.find((p) => p.id === projectId)?.name!}
      showTemperature
      showAddButton
      onAddButtonClick={async () => {
        await taskStore.addTask(projectId);
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
      props: { projectId: parseInt(ctx.query["project"]![0]) },
    };
  }
};
