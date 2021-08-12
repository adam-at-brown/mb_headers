import React from "react";
import { render } from "@testing-library/react";
import data from "../../../../assets/data/header_nav";
import SubNav from "../sub_nav";

describe("Subnav", () => {
  it("Displays correct title and link by passed data for News group", () => {
    const { getByText } = render(
      <SubNav links={data[1].navListbottom[4]} show />
    );
    getByText("Featured Events");
    expect(getByText("Featured Events").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/news/featured-events"
    );
    getByText("For Journalists");
    expect(getByText("For Journalists").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/news/for-journalists"
    );
  });

  it("Displays correct title and link by passed data for Life at Brown group", () => {
    const { getByText } = render(
      <SubNav links={data[1].navListbottom[3]} show />
    );
    getByText("Athletics & Recreation");
    expect(getByText("Athletics & Recreation").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/athletics-recreation"
    );
    getByText("Community");
    expect(getByText("Community").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/community"
    );
    getByText("Health & Wellness");
    expect(getByText("Health & Wellness").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/health-wellness"
    );
    getByText("Housing & Dining");
    expect(getByText("Housing & Dining").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/housing-dining"
    );
    getByText("Life in Providence");
    expect(getByText("Life in Providence").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/life-providence"
    );
    getByText("Student Organizations");
    expect(getByText("Student Organizations").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/student-organizations"
    );
    getByText("University Events");
    expect(getByText("University Events").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/life-brown/university-events"
    );
  });

  it("Displays correct title and link by passed data for Research group", () => {
    const { getByText } = render(
      <SubNav links={data[1].navListbottom[2]} show />
    );
    getByText("Find a Researcher");
    expect(getByText("Find a Researcher").closest("a")).toHaveAttribute(
      "href",
      "https://vivo.brown.edu/"
    );
    getByText("Industry Engagement");
    expect(getByText("Industry Engagement").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/research/industry-engagement"
    );
    getByText("Conducting Research at Brown");
    expect(
      getByText("Conducting Research at Brown").closest("a")
    ).toHaveAttribute(
      "href",
      "https://www.brown.edu/research/conducting-research-brown"
    );
  });

  it("Displays correct title and link by passed data for Admission & Aid group", () => {
    const { getByText } = render(
      <SubNav links={data[1].navListbottom[1]} show />
    );
    getByText("Undergraduate Admission");
    expect(getByText("Undergraduate Admission").closest("a")).toHaveAttribute(
      "href",
      "https://admission.brown.edu/"
    );
    getByText("Graduate Admission");
    expect(getByText("Graduate Admission").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/admission/graduate"
    );
    getByText("Medical School Admission");
    expect(getByText("Medical School Admission").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/medical/admission/"
    );
    getByText("Executive & Professional Admission");
    expect(
      getByText("Executive & Professional Admission").closest("a")
    ).toHaveAttribute("href", "https://professional.brown.edu/admissions");
    getByText("Tuition & Aid");
    expect(getByText("Tuition & Aid").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/admission-aid/tuition-and-aid"
    );
  });

  it("Displays correct title and link by passed data for Academics group", () => {
    const { getByText } = render(
      <SubNav links={data[1].navListbottom[0]} show />
    );
    getByText("Undergraduate");
    expect(getByText("Undergraduate").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/current-students"
    );
    getByText("Graduate & Professional");
    expect(getByText("Graduate & Professional").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/graduate"
    );
    getByText("Schools & Colleges");
    expect(getByText("Schools & Colleges").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/schools-colleges"
    );
    getByText("Academic Departments");
    expect(getByText("Academic Departments").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/departments"
    );
    getByText("Centers & Institutes");
    expect(getByText("Centers & Institutes").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/centers-institutes"
    );
    getByText("Libraries & Collections");
    expect(getByText("Libraries & Collections").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/libraries"
    );
    getByText("Global Education");
    expect(getByText("Global Education").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/global"
    );
    getByText("Non-Degree Programs");
    expect(getByText("Non-Degree Programs").closest("a")).toHaveAttribute(
      "href",
      "https://www.brown.edu/academics/non-degree"
    );
  });
});
