import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/react/cleanup-after-each";

import Display from "./Display";

describe("Display", () => {
  it("Matches snap", () => {
    const main = renderer.create(<Display />).toJSON();
    expect(main).toMatchSnapshot();
  });

  it("displays unlocked by default", () => {
    const { getByText } = render(<Display />);
    getByText("Unlocked");
  });

  it("displays open by default", () => {
    const { getByText } = render(<Display />);
    getByText("Open");
  });

  it("displays locked when locked", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText("Locked");
  });

  it("displays unlocked when unlocked", () => {
    const { getByText } = render(<Display locked={false} />);
    getByText("Unlocked");
  });

  it("displays open when open", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText("Open");
  });

  it("displays closed when closed", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText("Closed");
  });
});
