import { AffordableHousingData } from "../../../../mock/fixtures";
import { TargetCategory, Targets } from "../../../../types";

interface Args {
  apiData: AffordableHousingData;
  targets: Targets[TargetCategory];
  timeline: number[];
}

export const affordableHousingTransformer = ({
  apiData,
  targets,
  timeline,
}: Args): AffordableHousingData =>
  timeline.reduce((acc: AffordableHousingData, year: number) => {
    const match = apiData.find(({ startYear }) => startYear === year)!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      targetValue = targets?.[match.startYear]!;

    const percentage = Math.round(
      (match["Affordable Housing"] / targetValue) * 100
    );

    return [
      ...acc,
      {
        startYear: year,
        ["Affordable Housing"]: percentage,
      },
    ];
  }, []);
