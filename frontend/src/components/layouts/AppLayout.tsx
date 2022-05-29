import { task } from "../../types";

import HeaderBar from "../widgets/HeaderBar";
import Sidebar from "../widgets/Sidebar";
import TaskView from "../widgets/TaskView";

export default function AppLayout(props: { title: string }) {
  return (
    <main className="grid grid-cols-app-layout grid-rows-app-layout h-full gap-4">
      <div className="col-start-2 row-start-1 w-full justify-self-center self-center">
        <HeaderBar title="Today" />
      </div>

      <div className="max-w-sidebar row-start-2 col-start-1 w-full justify-self-end">
        <Sidebar />
      </div>

      <div className="row-start-2 col-start-2 w-full justify-self-center">
        <TaskView />
      </div>
    </main>
  );
}
