/* global it, describe, expect, beforeEach */

import React from "react";
import { mount, shallow } from "enzyme";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import API from "./api";
import App from "./App";

describe("Table contributors without workplace", () => {
  let enzymeWrapper;

  beforeEach(() => {
    const initialState = {
      contributors: {
        unassigned: [{ first_name: "PEPE", id: 2, workroom: 1 }, { first_name: "ALEX", id: 3 }],
        site: {
          id: 1,
          buildings: [
            {
              id: 1,
              floors: [
                {
                  id: 1,
                  capacity: 6,
                  occupation: 5,
                },
              ],
            },
          ],
        },
      },
    };

    const mock = new MockAdapter(API);
    mock
      .onGet(`/contributors/unassigned.json?site_id=${process.env.REACT_APP_SITE_ID}`)
      .reply(200, {});

    mock.onGet(`/sites/${process.env.REACT_APP_SITE_ID}/full.json`).reply(200, {});

    const mockStore = configureStore();
    const store = mockStore(initialState);
    enzymeWrapper = mount(<Provider store={store}>
      <App />
                          </Provider>);
  });

  it("should render self and subcomponents", () => {
    expect(enzymeWrapper.find("Grid").prop("fluid")).toBe(true);

    expect(enzymeWrapper.find("Table").exists()).toBe(true);
  });

  it("Should check if contributor has workroom", () => {
    expect(enzymeWrapper.find(".unassigned").length).toEqual(1);
    expect(enzymeWrapper.find(".overocupation").length).toEqual(1);
  });
});
