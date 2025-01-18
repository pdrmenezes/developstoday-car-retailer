import type { Endpoint, EndpointParams, EndpointResponse, GetModelsForMakeIdAndYearParams } from "@/types/vehicles";

export async function getVehiclesData<T extends Endpoint>(
  endpoint: T,
  params?: EndpointParams<T>,
): Promise<EndpointResponse<T>> {
  if (!endpoint) throw new Error("Missing Endpint");

  let url = `${process.env.API_BASE_URL}/${endpoint}`;

  if (endpoint === "GetModelsForMakeIdYear") {
    const { makeId, year } = params as GetModelsForMakeIdAndYearParams;
    if (!makeId || !year) throw new Error("Missing params");

    url += `/makeId/${makeId}/modelyear/${year}`;
  } else if (endpoint === "GetMakesForVehicleType") {
    url += "/car";
  }

  url += "?format=json";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching content from: ${endpoint}`);
  }

  return response.json();
}
