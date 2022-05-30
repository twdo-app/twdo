export default function Title({ children }: { children: string }) {
  return <h1 className="text-3xl font-semibold">{children.toUpperCase()}</h1>;
}
