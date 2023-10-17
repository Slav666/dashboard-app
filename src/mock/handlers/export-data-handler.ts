import { rest } from "msw";

import data from "../fixtures/export-data";

const getExportData = rest.get("*/export/", (_, res, ctx) =>
  res(ctx.status(200), ctx.json(data))
);

export default getExportData;
