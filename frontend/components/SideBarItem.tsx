import Link from "next/link";
import { ReactElement } from "react";

import { IconType } from "react-icons";
import Clickable from "./common/Clickable";
import Icon from "./common/Icon";

export default function SideBarItem({
  label,
  icon,
  route,
}: {
  label: string;
  icon: ReactElement<IconType> | string;
  route: string;
}) {
  return (
    <li>
      <Link href={route}>
        <Clickable className="w-full mb-1 flex flex-row rounded-md cursor-default items-center px-2 py-1 border border-transparent transition-clickable h-8">
          <Icon icon={icon} className={"mr-2"} />
          <p className="font-bold">{label.toLowerCase()}</p>
        </Clickable>
      </Link>
    </li>
  );
}
