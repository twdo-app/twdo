import { ReactElement } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="w-80 flex flex-col items-center justify-center pb-48">
        {children}
      </div>
    </div>
  );
}
