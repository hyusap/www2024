interface EventProps {
  title: string;
  subtitle: string;
  date: string;
  children: React.ReactNode;
}

export function Event({ title, subtitle, date, children }: EventProps) {
  return (
    <div className="w-[80vw] flex-none rounded-xl bg-light p-4 text-dark shadow-xl md:w-[40vw]">
      <h3 className="font-display text-5xl lg:text-7xl">{title}</h3>
      <h4 className="text-xl font-bold lg:text-3xl">{subtitle}</h4>
      <h5 className="mb-3 text-xl font-light lg:text-3xl">{date}</h5>
      {children}
    </div>
  );
}

export function Connector() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="bg-light px-0.5 py-10 lg:px-20 lg:py-0.5" />
    </div>
  );
}
