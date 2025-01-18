type GetMakesForVehicleTypeParams = {};
export type GetModelsForMakeIdAndYearParams = {
  makeId: string;
  year: string;
};

export type GetMakesForVehicleTypeResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Array<{
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
  }>;
};

export type GetModelsForMakeIdAndYearResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: Array<{
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
  }>;
};

export type Endpoint = "GetMakesForVehicleType" | "GetModelsForMakeIdYear";

export type EndpointParams<T extends Endpoint> = T extends "GetMakesForVehicleType"
  ? GetMakesForVehicleTypeParams
  : T extends "GetModelsForMakeIdYear"
    ? GetModelsForMakeIdAndYearParams
    : any;

export type EndpointResponse<T extends Endpoint> = T extends "GetMakesForVehicleType"
  ? GetMakesForVehicleTypeResponse
  : T extends "GetModelsForMakeIdYear"
    ? GetModelsForMakeIdAndYearResponse
    : any;
