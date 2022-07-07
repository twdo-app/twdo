import Link from "next/link";

export default function Hyperlink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <a className="flex items-center gap-2 text-link hover:underline underline-offset-1 decoration-2">
        {children}
      </a>
    </Link>
  );
}
