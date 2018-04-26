/* global it, describe, expect, beforeEach */

import React from "react";
import { mount } from "enzyme";
import { I18n } from "react-redux-i18n";

import { NavBar } from "./NavBar";

describe("NavBar component", () => {
  let enzymeWrapper;

  beforeEach(() => {
    enzymeWrapper = mount(<NavBar />);
    I18n.setTranslations({
      en: {
        app: {
          title: "English",
        },
      },
      es: {
        app: {
          title: "Spanish",
        },
      },
    });

    I18n.setLocale("en");
  });

  it("should change language to english on select language dropdown", () => {
    const title = enzymeWrapper.findWhere(n => n.name() === "Translate" && n.prop("value") === "app.title");
    expect(title.text()).toEqual("English");

    I18n.setLocale("es");
    expect(title.text()).toEqual("Spanish");
  });
});
