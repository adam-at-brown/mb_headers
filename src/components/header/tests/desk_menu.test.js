import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import data from "../../../assets/data/header_nav";
import DeskMenu from "../desk_menu";

describe("Desktop Menu", () => {
  it("Has all expected links from passed data", () => {
    const { getByText } = render(<DeskMenu data={data} show />);
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

  it("Has all expected hard coded links", () => {
    const { getByText, getByLabelText } = render(<DeskMenu data={data} show />);
    expect(getByText("About").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/about"
    );
    expect(getByText("Events").closest("a")).toHaveAttribute(
      "href",
      "https://events.brown.edu/"
    );
    expect(getByText("Give To Brown").closest("a")).toHaveAttribute(
      "href",
      "https://brunonia.brown.edu/giving"
    );
    getByLabelText("Search Page");
  });
});
