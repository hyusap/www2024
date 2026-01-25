export default function DataWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="relative my-0.5 mr-1 inline-flex max-w-full items-baseline gap-1 rounded-xl bg-dark px-2 py-1 text-light">
      <span className="truncate" suppressHydrationWarning>
        {children}
      </span>
      <span className="size-2 shrink-0 animate-pulse self-center rounded-full bg-red-500 lg:size-3"></span>
    </span>
  );
}
