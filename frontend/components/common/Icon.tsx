import { ReactElement } from "react";
import { IconType } from "react-icons";

export default function Icon({
  icon,
  className,
}: {
  icon: ReactElement<IconType> | string;
  className?: string;
}) {
  return <span className={`flex items-center ${className}`}>{icon}</span>;
}
