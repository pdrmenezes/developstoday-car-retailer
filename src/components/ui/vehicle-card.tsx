type VehicleCardProps = {
  make: string;
  model: string;
  year: string;
};

export function VehicleCard({ make, model, year }: VehicleCardProps) {
  return (
    <article className="shadow-shape rounded-lg bg-neutral-900 p-4 text-left">
      <h4 className="text-xs font-extrabold text-neutral-500">{make}</h4>
      <h3 className="text-xl">{model}</h3>
      <p className="text-sm">{year}</p>
    </article>
  );
}
