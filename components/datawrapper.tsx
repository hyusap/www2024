export default function DataWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mr-1 inline-block rounded-xl bg-dark px-2 py-1 text-light">
      <span className="break-after-avoid" suppressHydrationWarning>
        {children}
      </span>
      <div className="my-1 ml-1 inline-block size-2 animate-pulse rounded-full bg-red-500 lg:my-1 lg:size-3"></div>
    </div>
  );
}
