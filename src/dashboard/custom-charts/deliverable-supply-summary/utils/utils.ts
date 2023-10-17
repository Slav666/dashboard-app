import { DeliverableSupplySummaryData } from "../../../../mock/fixtures/deliverable_supply_summary";

// TODO: is this getting used anywhere?

export const getStackTotals = (data: DeliverableSupplySummaryData) =>
  data.map((datum) => {
    const total = Object.entries(datum).reduce(
      (acc, [key, value]) => (key === "startYear" ? acc : acc + value),
      0
    );

    return `Total: ${total}`;
  });
