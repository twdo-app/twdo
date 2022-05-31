import { Link } from "react-router-dom";

export default function Hyperlink({
  children,
  to,
}: {
  children: string;
  to: string;
}) {
  return (
    <Link className="text-blue-400 dark:text-pink-400 hover:underline" to={to}>
      {children}
    </Link>
  );
}
