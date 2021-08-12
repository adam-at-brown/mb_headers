import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Header from "../index";

describe("Header", () => {
  it("Has all expected elements", () => {
    const { getAllByText, getByTestId, getByLabelText } = render(<Header />);
    getByTestId("header-logo-link");
    getAllByText("Academics");
    getAllByText("About");
    getAllByText("Events");
    getAllByText("For You");
    getAllByText("Admission & Aid");
    getAllByText("Research");
    getAllByText("Life at Brown");
    getAllByText("News");
    getByLabelText("Search Page");
  });
});
