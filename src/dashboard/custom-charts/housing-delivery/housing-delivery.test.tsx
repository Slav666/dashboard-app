import { describe, expect, it, vi } from "vitest";

import tenureData from "../../../mock/fixtures/tenure_type_housing_delivery";
import totalData from "../../../mock/fixtures/total_housing_delivery";

import { render, screen, userEvent, waitFor } from "../../../test/test.utils";

import HousingDelivery from "./housing-delivery.component";

const defaultData = {
  tenureHousingDeliveryChartData: tenureData,
  totalHousingDeliveryChartData: totalData,
  targets: {},
  settings: {},
};

let setDashboardSettings = null;

describe("HousingDelivery", () => {
  beforeEach(() => {
    setDashboardSettings = vi.fn();
  });

  it("sets default values if no saved settings", async () => {
    render(
      <HousingDelivery
        {...defaultData}
        setDashboardSettings={setDashboardSettings}
      />
    );

    await waitFor(() => {
      expect(setDashboardSettings).toHaveBeenCalledTimes(2);
    });

    expect(
      screen.getByRole("button", { name: "2018-2019 - 2022-2023" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "All Tenure Types" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Gross" })).toBeInTheDocument();
  });

  it("defaults to user`s saved settings if present", () => {
    const settings = {
      tenureYear: 2018,
      totalYear: 2019,
      tenureType: "sociallyRented",
      tenureDateType: "Net",
    };

    render(
      <HousingDelivery
        {...defaultData}
        setDashboardSettings={setDashboardSettings}
        settings={settings}
      />
    );

    expect(setDashboardSettings).not.toHaveBeenCalled();

    expect(
      screen.getByRole("button", { name: "2014-2015 - 2018-2019" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Social Rent" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Net" })).toBeInTheDocument();
  });

  it("resets to highest available year if year is invalid after switching tenure type", async () => {
    const targets = {
        marketHousing: { 2020: 123 },
      },
      settings = {
        tenureYear: 2020,
        tenureType: "marketHousing",
      };

    render(
      <HousingDelivery
        {...defaultData}
        setDashboardSettings={setDashboardSettings}
        settings={settings}
        targets={targets}
      />
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Market for sale" })
    );

    await userEvent.click(screen.getByRole("option", { name: "Social Rent" }));

    /** will update once as usual, then again to correct itself if invalid. */
    expect(setDashboardSettings).toHaveBeenCalledTimes(2);
    expect(screen.getByText("2019-2020 - 2023-2024")).toBeInTheDocument();
  });

  it("calls setDashboardSettings function when filters are changed", async () => {
    render(
      <HousingDelivery
        {...defaultData}
        setDashboardSettings={setDashboardSettings}
        settings={{ tenureYear: 2019 }}
      />
    );

    await userEvent.click(
      screen.getByRole("button", { name: "All Tenure Types" })
    );
    await userEvent.click(
      screen.getByRole("option", { name: "Market for sale" })
    );

    expect(setDashboardSettings).toHaveBeenCalledTimes(2);
  });
});
