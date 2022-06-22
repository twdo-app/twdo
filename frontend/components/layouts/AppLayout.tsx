import { useTasks } from "../../store/useTasks";
import DnD from "../DnD";
import HeaderBar from "../HeaderBar";
import Pomodoro from "../Pomodoro";
import SideBar from "../SideBar";

export default function AppLayout({
  title,
  children,
  showTemperature,
}: {
  title: string;
  children: React.ReactNode;
  showTemperature?: boolean;
}) {
  const showPomodoro = useTasks((state) => state.isDraggingTask);

  return (
    <DnD>
      <main className="grid grid-cols-app-layout grid-rows-app-layout h-screen gap-4">
        <div className="col-start-2 row-start-1 w-full justify-self-center self-center">
          <HeaderBar title={title} showTemperature={showTemperature} />
        </div>

        <div className="max-w-sidebar row-start-2 col-start-1 w-full justify-self-end">
          <SideBar />
        </div>

        <div className="row-start-2 col-start-2 w-full justify-self-center">
          {children}
        </div>

        <div className="row-start-1 row-end-3 col-start-3 w-full justify-self-center">
          {showPomodoro ? <Pomodoro /> : null}
        </div>
      </main>
    </DnD>
  );
}
