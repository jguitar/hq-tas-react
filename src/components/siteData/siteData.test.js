/* global it, describe, expect, beforeEach */

import React from "react";
import { mount } from "enzyme";
import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";

import API from "../../api";

import SiteData from "./siteData";

describe("Site data test without overoccupation", () => {
  let enzymeWrapper;
  beforeEach(() => {
    const initialState = {
      contributors: {
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
    mock.onGet(`/sites/${process.env.REACT_APP_SITE_ID}/full.json`).reply(200, {});
    const mockStore = configureStore();
    const store = mockStore(initialState);
    enzymeWrapper = mount(<SiteData store={store} />);
  });

  it("should not exist element with class danger", () => {
    expect(enzymeWrapper.find(".danger").length).toEqual(0);
  });
});

describe("Site data test with overoccupation", () => {
  let enzymeWrapper;
  beforeEach(() => {
    const initialState = {
      contributors: {
        site: {
          id: 1,
          buildings: [
            {
              id: 1,
              floors: [
                {
                  id: 1,
                  capacity: 7,
                  occupation: 8,
                },
              ],
            },
          ],
        },
      },
    };
    const mock = new MockAdapter(API);
    mock.onGet(`/sites/${process.env.REACT_APP_SITE_ID}/full.json`).reply(200, {});
    const mockStore = configureStore();
    const store = mockStore(initialState);
    enzymeWrapper = mount(<SiteData store={store} />);
  });

  it("should exist one element with class danger", () => {
    expect(enzymeWrapper.find(".danger").length).toEqual(1);
  });
});
