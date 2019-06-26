import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("<Dashboard />", () => {
  it("Matches snap", () => {
    const { container } = render(<Dashboard />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders", () => {
    render(<Dashboard />);
  });

  it("Renders all children", () => {
    render(<Dashboard />);

    expect(document.querySelector(".controls")).toBeTruthy();
    expect(document.querySelector(".display")).toBeTruthy();
  });
});
