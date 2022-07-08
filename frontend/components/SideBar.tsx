import Router from "next/router";
import { useEffect } from "react";
import {
  FiSettings,
  FiUser,
  FiBox,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { useModal } from "../store/useModal";
import { useProjects } from "../store/useProjects";
import Button from "./common/Button";
import Clickable from "./common/Clickable";
import Icon from "./common/Icon";

import SideBarGroup from "./SideBarGroup";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const modal = useModal((state) => state);
  const projects = useProjects((state) => state.projects);
  const removeProject = useProjects((state) => state.removeProject);
  const loadProjects = useProjects((state) => state.loadProjects);

  useEffect(() => {
    loadProjects();
  }, []);

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
        {projects.length > 0
          ? projects.map((p) => (
              <div className="group relative" key={p.id}>
                <SideBarItem
                  label={p.name}
                  icon={p.emoji}
                  route={p.id.toString()}
                />
                <Button
                  className="group-hover:opacity-100 opacity-0 absolute right-0 top-1"
                  icon={<Icon icon={<FiX />} />}
                  theme="text"
                  onClick={() => {
                    Router.push("inbox");
                    removeProject(p.id);
                  }}
                />
              </div>
            ))
          : null}
        <li>
          <Clickable
            className="w-full mb-1 last-of-type:mb-0 cursor-default flex flex-row rounded-md items-center px-3 py-5 border border-transparent h-8"
            onClick={() => modal.showAddProjectModal(() => "test")}
          >
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
