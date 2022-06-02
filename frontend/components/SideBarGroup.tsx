import { ReactElement } from "react";

export default function SideBarGroup({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div className=" w-full flex flex-col p-2 mb-1 last-of-type:mb-0">
      {children}
    </div>
  );
}
