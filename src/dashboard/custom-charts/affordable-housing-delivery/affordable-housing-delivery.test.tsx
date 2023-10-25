import { describe, expect, it, vi } from "vitest";

import mockData from "../../../mock/fixtures/affordable_housing_delivery";
import { render, screen } from "../../../test/test.utils";

import AffordableHousingDelivery from "./affordable-housing-delivery";

const targets = {
  2018: 100,
  2019: 70,
  2020: 80,
  2021: 120,
  2022: 90,
};

let setDashboardSettings = vi.fn();

describe("<AfforableHousingDelivery />", () => {
  beforeEach(() => {
    setDashboardSettings = vi.fn();
  });

  describe("Affordable Housing Delivery chart", () => {
    it("shows the right title in the wrapper", () => {
      render(
        <AffordableHousingDelivery
          data={mockData}
          setDashboardSettings={setDashboardSettings}
          targets={targets}
        />
      );

      expect(
        screen.getByRole("heading", {
          name: `Affordable Housing Delivery (%)`,
        })
      ).toBeInTheDocument();
    });

    it("shows the right axis labels", () => {
      render(
        <AffordableHousingDelivery
          data={mockData}
          setDashboardSettings={setDashboardSettings}
          targets={targets}
        />
      );
      expect(
        screen.getByText("Affordable Housing Delivery (%)")
      ).toBeInTheDocument();
      expect(screen.getByText("Financial Year")).toBeInTheDocument();
    });
  });
});
