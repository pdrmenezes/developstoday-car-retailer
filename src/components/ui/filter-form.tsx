"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GetMakesForVehicleTypeResponse } from "@/types/vehicles";
import { useEffect, useState } from "react";
import { YEARS } from "@/constants/years";
import { titleCase } from "@/utils/title-case";

type FilterFormProps = {
  vehicleMakes: GetMakesForVehicleTypeResponse["Results"];
};

export function FilterForm({ vehicleMakes }: FilterFormProps) {
  const [makeId, setMakeId] = useState("default");
  const [year, setYear] = useState("default");
  const [isNextAvailable, setIsNextAvailable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (makeId === "default" || year === "default") setIsNextAvailable(false);

    if (makeId !== "default" && year !== "default") {
      setIsNextAvailable(true);
      setErrorMessage("");
    }
  }, [makeId, year]);

  return (
    <>
      <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-neutral-900 px-4">
        <div className="flex flex-1 items-center gap-2">
          <select
            className="h-10 w-full cursor-pointer bg-transparent text-lg hover:brightness-110"
            name="makes"
            value={makeId}
            onChange={(e) => setMakeId(e.target.value)}
            required
          >
            <option disabled hidden value="default" label="Choose a make" />
            {vehicleMakes.map((make) => (
              <option value={make.MakeId} label={titleCase(make.MakeName)} key={make.MakeId} />
            ))}
          </select>

          <select
            className="h-10 cursor-pointer bg-transparent text-lg hover:brightness-110"
            name="years"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option disabled hidden value="default" label="Pick a year" />
            {YEARS.map((year) => (
              <option value={year} label={String(year)} key={year} />
            ))}
          </select>
        </div>
        <div className="h-6 w-px bg-neutral-800"></div>
        <Link
          className={`inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400 ${!isNextAvailable && "cursor-not-allowed opacity-50"}`}
          href={`/result/${makeId}/${year}`}
          onClick={(e) => {
            if (!isNextAvailable) {
              e.preventDefault();
              !isNextAvailable && setErrorMessage("Please fill in both fields");
            }
          }}
        >
          Next
          <ArrowRight className="size-5" />
        </Link>
      </div>
      <p className="text-xs text-red-700">{errorMessage.length > 1 && errorMessage}</p>
    </>
  );
}
