import { MouseEventHandler, useState } from "react";
import { FiMusic, FiPlay } from "react-icons/fi";
import Button from "../common/Button";
import Icon from "../common/Icon";
import DnD from "../DnD";
import HeaderBar from "../HeaderBar";
import Pomodoro from "../Pomodoro";
import SideBar from "../SideBar";

export default function AppLayout({
  title,
  children,
  showTemperature,
  showEditButton,
  showAddButton,
  onAddButtonClick,
  onEditButtonClick,
}: {
  title: string;
  children: React.ReactNode;
  showTemperature?: boolean;
  showEditButton?: boolean;
  showAddButton?: boolean;
  onAddButtonClick?: MouseEventHandler<any>;
  onEditButtonClick?: MouseEventHandler<any>;
}) {
  return (
    <DnD>
      <main className="grid grid-cols-app-layout grid-rows-app-layout h-screen gap-4 overflow-x-hidden">
        <div className="col-start-2 row-start-1 w-full justify-self-center self-center">
          <HeaderBar
            title={title}
            showTemperature={showTemperature}
            showAddButton={showAddButton}
            showEditButton={showEditButton}
            onAddButtonClick={onAddButtonClick}
            onEditButtonClick={onEditButtonClick}
          />
        </div>

        <div className="max-w-sidebar row-start-2 col-start-1 w-full justify-self-end">
          <SideBar />
        </div>

        <div className="row-start-2 col-start-2 w-full justify-self-center">
          {children}
        </div>

        <div className="row-start-1 row-end-3 col-start-3 w-full justify-self-center flex flex-col items-center justify-center h-screen">
          <Pomodoro />
        </div>
      </main>
    </DnD>
  );
}
