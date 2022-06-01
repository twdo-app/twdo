import { FormEventHandler, ReactElement } from "react";

export default function AuthLayout({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <form
        onSubmit={onSubmit}
        className="min-w-[20rem] flex flex-col items-center justify-center pb-20"
      >
        {children}
      </form>
    </div>
  );
}
