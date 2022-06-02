export default function Title({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1 className={`${className} text-3xl font-semibold`}>
      {children.toUpperCase()}
    </h1>
  );
}
