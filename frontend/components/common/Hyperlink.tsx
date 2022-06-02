import Link from "next/link";

export default function Hyperlink({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <a className="text-blue-400 dark:text-pink-400 hover:underline">
        {children}
      </a>
    </Link>
  );
}
