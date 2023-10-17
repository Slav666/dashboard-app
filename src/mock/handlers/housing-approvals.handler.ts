import { rest } from "msw";

import data from "../fixtures/housing_approvals_over_time";

const getHousingApprovalsData = rest.get(
  "*/housing_approvals_over_time/latest/",
  (_, res, ctx) => res(ctx.status(200), ctx.json(data))
);

export default getHousingApprovalsData;
