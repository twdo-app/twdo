import { FiSun, FiCalendar, FiPackage } from "react-icons/fi";

import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <nav className="flex flex-col items-end h-full w-full max-w-sidebar row-start-2 col-start-1 justify-self-end">
      <ul className="w-full">
        <li>
          <SidebarButton
            label="today"
            icon={<FiSun />}
            route="/today"
          ></SidebarButton>
        </li>
        <li>
          <SidebarButton
            label="upcoming"
            icon={<FiCalendar />}
            route="/upcoming"
          ></SidebarButton>
        </li>
        <li>
          <SidebarButton
            label="someday"
            icon={<FiPackage />}
            route="/someday"
          ></SidebarButton>
        </li>
      </ul>
    </nav>
  );
}
