import { ReactElement } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import Clickable from "../common/Clickable";
import Icon from "../common/Icon";

export default function SidebarButton({
  label,
  icon,
  route,
}: {
  label: string;
  icon: ReactElement<IconType> | string;
  route: string;
}) {
  return (
    <Link to={`${route}`}>
      <Clickable className="w-full mb-1">
        <Icon icon={icon} className={"mr-2"} />
        <p className="font-bold">{label.toLowerCase()}</p>
      </Clickable>
    </Link>
  );
}
