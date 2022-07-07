import {
  FiSun,
  FiCalendar,
  FiPackage,
  FiSettings,
  FiUser,
  FiBox,
  FiPlus,
} from "react-icons/fi";
import { useModal } from "../store/useModal";
import Clickable from "./common/Clickable";
import Icon from "./common/Icon";

import SideBarGroup from "./SideBarGroup";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const showConfirmationModal = useModal(
    (state) => state.showConfirmationModal
  );

  return (
    <nav className="flex flex-col items-end h-full w-full max-w-sidebar row-start-2 col-start-1 justify-self-end">
      <SideBarGroup>
        <SideBarItem
          label="Inbox"
          icon={<FiBox />}
          route="/inbox"
        ></SideBarItem>
      </SideBarGroup>
      <SideBarGroup>
        <li>
          <Clickable className="w-full mb-1 last-of-type:mb-0 cursor-pointer flex flex-row group:first-of-type:rounded-t-xl group:last-of-type:rounded-b-xl items-center px-3 py-5 border border-transparent h-8">
            <Icon icon={<FiPlus />} className={"mr-2"} />
            <p>Add Project</p>
          </Clickable>
        </li>
      </SideBarGroup>
      <SideBarGroup>
        <SideBarItem
          label="Settings"
          icon={<FiSettings />}
          route="/settings"
        ></SideBarItem>
        <SideBarItem
          label="User Settings"
          icon={<FiUser />}
          route="/user-settings"
        ></SideBarItem>
      </SideBarGroup>
    </nav>
  );
}
