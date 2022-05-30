import { FiSun, FiCalendar, FiPackage } from "react-icons/fi";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <nav className="flex flex-col items-end h-full w-full max-w-sidebar row-start-2 col-start-1 justify-self-end">
      <ul className="w-full">
        <li>
          <SideBarItem
            label="today"
            icon={<FiSun />}
            route="/today"
          ></SideBarItem>
        </li>
        <li>
          <SideBarItem
            label="upcoming"
            icon={<FiCalendar />}
            route="/upcoming"
          ></SideBarItem>
        </li>
        <li>
          <SideBarItem
            label="someday"
            icon={<FiPackage />}
            route="/someday"
          ></SideBarItem>
        </li>
      </ul>
    </nav>
  );
}
