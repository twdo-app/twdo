import HeaderBar from "../HeaderBar";
import SideBar from "../SideBar";
import TaskView from "../TaskView";

export default function AppLayout({ title }: { title: string }) {
  return (
    <main className="grid grid-cols-app-layout grid-rows-app-layout h-full gap-4">
      <div className="col-start-2 row-start-1 w-full justify-self-center self-center">
        <HeaderBar title={title} />
      </div>

      <div className="max-w-sidebar row-start-2 col-start-1 w-full justify-self-end">
        <SideBar />
      </div>

      <div className="row-start-2 col-start-2 w-full justify-self-center">
        <TaskView />
      </div>
    </main>
  );
}
