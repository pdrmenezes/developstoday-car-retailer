import { getVehiclesData } from "@/lib/api";
import { GetModelsForMakeIdAndYearParams } from "@/types/vehicles";

export async function getMakesForVehicles() {
  try {
    return (await getVehiclesData("GetMakesForVehicleType")).Results;
  } catch (error) {
    console.error(error);
  }
}

export async function getModelsForMakeIdAndYear({ makeId, year }: GetModelsForMakeIdAndYearParams) {
  try {
    return await getVehiclesData("GetModelsForMakeIdYear", { makeId, year });
  } catch (error) {
    console.error(error);
  }
}
