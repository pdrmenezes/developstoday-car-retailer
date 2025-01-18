import { VehicleCard } from "@/components/ui/vehicle-card";
import { YEARS } from "@/constants/years";
import { getMakesForVehicles, getModelsForMakeIdAndYear } from "@/data/vehicles";
import { titleCase } from "@/utils/title-case";
import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";

export async function generateStaticParams(): Promise<{ makeId: string; year: string }[]> {
  const vehicleMakes = (await getMakesForVehicles()) || [];

  const params = vehicleMakes.flatMap(({ MakeId: makeId }) => {
    return YEARS.map((year) => ({
      makeId: String(makeId),
      year: String(year),
    }));
  });

  return params;
}

export default async function ResultPage({ params }: { params: Promise<{ makeId: string; year: string }> }) {
  const { makeId, year } = await params;
  const results = await getModelsForMakeIdAndYear({ makeId, year });

  return (
    <div>
      {results?.Results?.[0].Make_Name && (
        <h2 className="mb-8 font-mono text-3xl font-bold">{titleCase(results?.Results?.[0].Make_Name)}</h2>
      )}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(25ch,1fr))] gap-4">
        <Suspense
          fallback={
            <div className="flex gap-2">
              <LoaderCircle className="animate-spin" />
              <p>...Loading content</p>
            </div>
          }
        >
          {results?.Results && results?.Results.length > 0 ? (
            results?.Results.map((vehicle) => (
              <VehicleCard
                key={vehicle.Model_ID || ""}
                make={vehicle.Make_Name || ""}
                model={vehicle.Model_Name || ""}
                year={year}
              />
            ))
          ) : (
            <p className="text-center text-lg">Sorry, there are no cars for this make and year</p>
          )}
        </Suspense>
      </section>
    </div>
  );
}
