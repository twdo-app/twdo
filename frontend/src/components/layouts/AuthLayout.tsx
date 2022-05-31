import { ReactElement } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="min-w-[20rem] flex flex-col items-center justify-center pb-20">
        {children}
      </div>
    </div>
  );
}
