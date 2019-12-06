import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

afterEach(rtl.cleanup);

describe("Renders Player Card", () => {
  const navbar = rtl.render(<NavBar/>);
  it("Should render Names", () => {
    expect(navbar.getByText(/womens world cup/i))
  });   
});