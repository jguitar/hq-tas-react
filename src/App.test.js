/* global it, describe, expect, beforeEach */

import React from "react";
import { mount } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";

import App from "./App";

describe("Table contributors without workplace", () => {
  let enzymeWrapper;

  beforeEach(() => {
    const initialState = {
      contributors: {
        unassigned: [{ first_name: "PEPE", id: 2, workroom: 1 }, { first_name: "ALEX", id: 3 }],
      },
    };

    const mock = new MockAdapter(axios);
    mock.onGet("/contributors/unassigned.json").reply(200, {});

    const mockStore = configureStore();
    const store = mockStore(initialState);
    enzymeWrapper = mount(<App store={store} />);
  });

  it("should render self and subcomponents", () => {
    expect(enzymeWrapper.find("Grid").prop("fluid")).toBe(true);

    expect(enzymeWrapper.find("Row").hasClass("show-grid")).toBe(true);
    expect(enzymeWrapper.find("Table").exists()).toBe(true);
  });

  it("Should check if contributor has workroom", () => {
    expect(enzymeWrapper.find(".unassigned").length).toEqual(1);
    expect(enzymeWrapper.find(".overocupation").length).toEqual(1);
  });
});
