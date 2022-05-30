export default function DimScreen({
  hidden,
  onClick,
}: {
  hidden: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      hidden={hidden}
      onClick={onClick}
      className="absolute z-10 top-0 left-0 h-screen w-screen"
    />
  );
}
