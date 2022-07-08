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
        <Clickable className="w-full mb-1 last-of-type:mb-0 cursor-default flex flex-row rounded-md items-center px-3 py-5 border border-transparent h-8">
          <Icon icon={icon} className={"mr-2"} />
          <p>{label}</p>
        </Clickable>
      </Link>
    </li>
  );
}
