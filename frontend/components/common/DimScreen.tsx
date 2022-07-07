import { useDimScreen } from "../../store/useDimScreen";
import { useTasks } from "../../store/useTasks";

export default function DimScreen() {
  const dimScreenStore = useDimScreen((state) => state);
  const tasksStore = useTasks((state) => state);

  return dimScreenStore.isDimScreenVisible ? (
    <div
      onClick={() => {
        dimScreenStore.disableDimScreen();
        tasksStore.stopEditingTask();
      }}
      className="absolute top-0 left-0 h-screen w-screen"
    />
  ) : null;
}
