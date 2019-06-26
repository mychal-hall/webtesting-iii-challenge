import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import "@testing-library/react/cleanup-after-each";

import Dashboard from "../dashboard/Dashboard";
import { isRegExp } from "util";

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const main = renderer.create(<Dashboard />).toJSON();
    expect(main).toMatchSnapshot();
  });

  it("renders the proper initial state", () => {
    const { getByText } = render(<Dashboard />);
    getByText("Close Gate");
    getByText("Lock Gate");
  });

  describe("properly toggles between open and close gate", () => {
    it("Closes properly", async () => {
      const { getByText } = render(<Dashboard />);
      const toggleButton = getByText("Close Gate");

      await fireEvent.click(toggleButton);

      getByText("Open Gate");
    });

    it("Opens properly", async () => {
      const { getByText } = render(<Dashboard />);
      const toggleButton = getByText("Close Gate");

      await fireEvent.click(toggleButton);
      await fireEvent.click(toggleButton);

      getByText("Close Gate");
    });
  });

  describe("properly toggles betwen lock and unlock gate", () => {
    it("Locks properly", async () => {
      const { getByText } = render(<Dashboard />);
      const toggleGate = getByText("Close Gate");
      const toggleLock = getByText("Lock Gate");

      await fireEvent.click(toggleGate);
      getByText("Open Gate");

      await fireEvent.click(toggleLock);
      getByText("Unlock Gate");
    });

    it("Unlocks properly", async () => {
      const { getByText } = render(<Dashboard />);
      const toggleGate = getByText("Close Gate");
      const toggleLock = getByText("Lock Gate");

      await fireEvent.click(toggleGate);
      getByText("Open Gate");

      await fireEvent.click(toggleLock);
      await fireEvent.click(toggleLock);
      getByText("Lock Gate");
    });
  });
});
