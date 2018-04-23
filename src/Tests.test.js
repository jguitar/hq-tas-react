/* global it, describe, expect */

import React from "react";
import { shallow } from "enzyme";
import Tests from "./Tests";

function setup() {
  const enzymeWrapper = shallow(<Tests />);

  return {
    enzymeWrapper,
  };
}

describe("Table contributors without workplace", () => {
  it("should render self and subcomponents", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div").exists()).toBe(true);

    /* const todoInputProps = enzymeWrapper.find("TodoTextInput").props();
    expect(todoInputProps.newTodo).toBe(true);
    expect(todoInputProps.placeholder).toEqual("What needs to be done?"); */
  });
});
