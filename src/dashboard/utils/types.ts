import {
  AffordableHousingData,
  // HousingApprovalsData,
  // ProgressionOfUnitsData,
  TenureTypeHousingData,
  TotalHousingDeliveryData,
} from "../../mock/fixtures";

import { HousingApprovalsData } from "../../mock/fixtures/housing_approvals_over_time";

import { ProgressionOfUnitsData } from "../../mock/fixtures/progression_of_units";

export type HousingApprovalsObjectArray = HousingApprovalsData[number]["data"];

export type TransformedTargets = { x: string; y: number }[];

/** data is possibly filtered before passed to timeline fuction */
export type TimelineData =
  | Partial<TotalHousingDeliveryData>
  | Partial<TenureTypeHousingData>
  | Partial<ProgressionOfUnitsData>
  | Partial<AffordableHousingData>;
