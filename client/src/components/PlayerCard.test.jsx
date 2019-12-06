import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerCard from "./PlayerCard";

afterEach(rtl.cleanup);

describe("Renders Player Card from props", () => {
  const playercard = rtl.render(<PlayerCard name={"Alex"} country={"United States"} search={20}/>);
  it("Should render Names", () => {
    expect(playercard.getByText(/alex/i))
  });   

  it("Should render Country", () => {
    expect(playercard.getByText(/united states/i))
  });   

  it("Should render Search", () => {
    expect(playercard.getByText("20"))
  });   
});
