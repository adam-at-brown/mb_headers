import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Logo from "../logo";

describe("Logo Link", () => {
  it("Logo has link to homepage", () => {
    const { getByTestId } = render(<Logo show />);
    expect(getByTestId("header-logo-link").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("Has an image with alt attribute", () => {
    const { getByTestId } = render(<Logo show />);
    expect(getByTestId("header-logo")).toHaveAttribute(
      "alt",
      "Brown University Logo"
    );
  });

  it("Has small image size when show is true", () => {
    const tree = renderer.create(<Logo show />).toJSON();
    expect(tree.children[0]).toHaveStyleRule("width", "100px");
  });

  it("Has large image size when show is false", () => {
    const tree = renderer.create(<Logo show={false} />).toJSON();
    expect(tree.children[0]).toHaveStyleRule("width", "182px");
  });
});
