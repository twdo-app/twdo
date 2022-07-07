import { ReactElement } from "react";

export default function SideBarGroup({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div className="w-full flex flex-col mb-4 last-of-type:mb-0 bg-card rounded-xl overflow-hidden">
      {children}
    </div>
  );
}
