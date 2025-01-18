import { FilterForm } from "@/components/ui/filter-form";
import { getMakesForVehicles } from "@/data/vehicles";

export default async function Home() {
  const vehicleMakes = (await getMakesForVehicles()) || [];

  return (
    <>
      <div className="space-y-4">
        <FilterForm vehicleMakes={vehicleMakes} />
      </div>
      <p className="text-sm text-neutral-500">
        By utilizing <span className="font-bold">Car Retailer</span>&apos;s services you automatically agree
        <br />
        to our{" "}
        <a className="text-neutral-300 underline" href="">
          terms of use
        </a>{" "}
        and{" "}
        <a className="text-neutral-300 underline" href="">
          privacy policy
        </a>
      </p>
    </>
  );
}
