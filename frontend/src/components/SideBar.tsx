import {
  FiSun,
  FiCalendar,
  FiPackage,
  FiSettings,
  FiUser,
} from "react-icons/fi";

import SideBarGroup from "./SideBarGroup";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <nav className="flex flex-col items-end h-full w-full max-w-sidebar row-start-2 col-start-1 justify-self-end">
      <SideBarGroup>
        <SideBarItem
          label="today"
          icon={<FiSun />}
          route="/today"
        ></SideBarItem>
        <SideBarItem
          label="upcoming"
          icon={<FiCalendar />}
          route="/upcoming"
        ></SideBarItem>
        <SideBarItem
          label="someday"
          icon={<FiPackage />}
          route="/someday"
        ></SideBarItem>
      </SideBarGroup>
      <SideBarGroup>
        <SideBarItem
          label="settings"
          icon={<FiSettings />}
          route="/settings"
        ></SideBarItem>
        <SideBarItem
          label="user settings"
          icon={<FiUser />}
          route="/upcoming"
        ></SideBarItem>
      </SideBarGroup>
    </nav>
  );
}
