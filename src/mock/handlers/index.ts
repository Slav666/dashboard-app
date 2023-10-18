import getTenureTypeHousingDeliveryData from "./tenure-type-housing-delivery-handler";
import getAffordableHousingDeliveryData from "./affordable-housing-handler";
import getHousingApprovalsData from "./housing-approvals.handler";
import getProgressionOfUnitsData from "./progression-of-units-handler";
import getTotalHousingDeliveryData from "./total-housing-delivery-handler";
import getDeliverableSupplySummaryData from "./deliverable-supply-summary";
import getExportData from "./export-data-handler";

const handlers = [
  getTenureTypeHousingDeliveryData,
  getAffordableHousingDeliveryData,
  getHousingApprovalsData,
  getProgressionOfUnitsData,
  getTotalHousingDeliveryData,
  getDeliverableSupplySummaryData,
  getExportData,
];

export default handlers;
