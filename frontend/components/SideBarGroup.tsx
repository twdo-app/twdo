import { ReactElement } from "react";

export default function SideBarGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col mb-4 last-of-type:mb-0 bg-card rounded-md overflow-hidden">
      {children}
    </div>
  );
}
