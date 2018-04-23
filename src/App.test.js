/* global it, describe, expect,jest  */

import React from "react";
import { mount } from "enzyme";
import { App } from "./App";

function setup() {
  const props = {
    dispatch: jest.fn(),
    contributors: { unassigned: [{ first_name: "PEPE", id: 2 }] },
  };
  const enzymeWrapper = mount(<App {...props} />);

  return {
    enzymeWrapper,
  };
}

describe("Table contributors without workplace", () => {
  it("should render self and subcomponents", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find("Grid").prop("fluid")).toBe(true);

    expect(enzymeWrapper.find("Row").hasClass("show-grid")).toBe(true);
    expect(enzymeWrapper.find("Table").exists()).toBe(true);

    /* const todoInputProps = enzymeWrapper.find("TodoTextInput").props();
    expect(todoInputProps.newTodo).toBe(true);
    expect(todoInputProps.placeholder).toEqual("What needs to be done?"); */
  });

  // it('renders only contributors without workplace', () =>{
  //   expect(shallow(<Table />).exists()).toBe(true)
  // })
});
