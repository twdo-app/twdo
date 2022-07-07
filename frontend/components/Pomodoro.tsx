import { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import {
  FiMaximize,
  FiMinimize,
  FiPause,
  FiPlay,
  FiSkipBack,
  FiSkipForward,
  FiX,
} from "react-icons/fi";
import { usePomodoro } from "../store/usePomodoro";
import Button from "./common/Button";
import Icon from "./common/Icon";

function msToTime(ms: number) {
  let minutes = Math.floor(ms / 60000);
  let seconds = parseInt(((ms % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export default function Pomodoro() {
  const pomoStore = usePomodoro((state) => state);

  useEffect(() => {
    if (!pomoStore.isPlaying) {
      return;
    } else if (pomoStore.timeRemaining === 0) {
      pomoStore.skipFoward();
      pomoStore.start();
    } else {
      setTimeout(() => {
        pomoStore.setTimeRemaining(pomoStore.timeRemaining - 1000);
      }, 1000);
    }
  }, [pomoStore]);

  return (
    <Droppable droppableId="pomodoro">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`flex flex-col items-center justify-center transition-all
          ${
            pomoStore.focusMode
              ? "absolute h-screen w-screen top-0 left-0 bg-card z-30"
              : "h-[95vh] w-full p-16"
          }`}
        >
          <div
            className={`relative flex flex-col justify-center items-center transition-all rounded-xl
            ${
              snapshot.isUsingPlaceholder
                ? "bg-primary-subtle border-primary-border border-2 border-dashed"
                : ""
            }
            ${
              pomoStore.isVisible || snapshot.isUsingPlaceholder
                ? "h-full w-full"
                : "h-3/4 w-3/4 border-transparent"
            }
            ${pomoStore.isVisible ? "bg-card border-card-border border-1" : ""}
            ${pomoStore.focusMode ? "border-none rounded-none" : ""}
              `}
          >
            <div
              className={`flex flex-col items-center justify-center w-full h-full rounded-xl transition-all gap-16
            opacity-${pomoStore.isVisible ? "1" : "0"}`}
            >
              <p className="text-lg font-bold">
                {pomoStore.pomodoroTaskDescription}
              </p>
              <p className="text-8xl">🍅</p>
              <p className="text-6xl">{msToTime(pomoStore.timeRemaining)}</p>
              <Button
                className="absolute left-8 top-8"
                onClick={() => {
                  pomoStore.setFocusMode(!pomoStore.focusMode);
                }}
                icon={
                  <Icon
                    icon={pomoStore.focusMode ? <FiMinimize /> : <FiMaximize />}
                  />
                }
                theme="text"
              />
              <Button
                className="absolute right-8 top-8"
                onClick={() => {
                  pomoStore.hide();
                  setTimeout(() => {
                    pomoStore.reset();
                  }, 300);
                }}
                icon={<Icon icon={<FiX />} />}
                theme="text"
              />
              <div className="flex gap-4 items-center justify-center transition-all">
                <Button
                  onClick={pomoStore.skipBack}
                  icon={<Icon icon={<FiSkipBack />} />}
                ></Button>
                <Button
                  onClick={
                    pomoStore.isPlaying ? pomoStore.stop : pomoStore.start
                  }
                  icon={
                    <Icon
                      icon={pomoStore.isPlaying ? <FiPause /> : <FiPlay />}
                    />
                  }
                ></Button>
                <Button
                  onClick={pomoStore.skipFoward}
                  icon={<Icon icon={<FiSkipForward />} />}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}
