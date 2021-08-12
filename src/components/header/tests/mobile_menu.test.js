import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import data from "../../../assets/data/header_nav";
import MobileMenu from "../mobile_menu";

describe("Mobile Menu", () => {
  it("Has all expected links from passed data", () => {
    const { getByText } = render(<MobileMenu data={data} show />);
    expect(getByText("Give To Brown").closest("a")).toHaveAttribute(
      "href",
      "https://brunonia.brown.edu/giving"
    );
    expect(getByText("Current Students").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/current-students"
    );
    expect(getByText("Faculty").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/faculty"
    );
    expect(getByText("Staff").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/staff"
    );
    expect(getByText("Parents & Family").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/families"
    );
    expect(getByText("Alumni").closest("a")).toHaveAttribute(
      "href",
      "https://brunonia.brown.edu/alumni"
    );
    expect(getByText("Friends & Neighbors").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/friends-neighbors"
    );
  });
});
