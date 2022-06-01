import { MouseEventHandler, useEffect, useState } from "react";

export default function Modal(props: {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => setHidden(false), 100);
  }, [hidden]);

  const handleClick = () => {
    setHidden(true);
    setTimeout(props.onClick, 100);
  };

  return (
    <div
      className={`absolute bottom-0 left-0 w-screen h-screen flex items-center justify-center bg-slate-300/60 dark:bg-slate-900/80 ${
        !hidden ? "backdrop-blur-lg opacity-100" : "backdrop-blur-0 opacity-0"
      } transition-all`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center h-2 w-80 p-10 bg-slate-200 dark:bg-slate-800 rounded-md outline outline-1 outline-slate-300 dark:outline-slate-600">
        {props.children}
      </div>
    </div>
  );
}
