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
      <a className="text-link hover:underline underline-offset-1 decoration-2">
        {children}
      </a>
    </Link>
  );
}
