/* global it, describe, expect */

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Table contributors without workplace", () => {
  it("renders without crashing", () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  // it('renders only contributors without workplace', () =>{
  //   expect(shallow(<Table />).exists()).toBe(true)
  // })
});
