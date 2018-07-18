import React from "react";
import { shallow } from "enzyme";

describe("mock twice", () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it("mock a module", () => {
    jest.mock("./displayloader", () => "mocked-version-one"); //defualt export mock
    const SandBox = require("./Sandbox").default; // you must use dynamic require to reflect the updated module
    const shallowed = shallow(<SandBox />);

    expect(shallowed).toMatchSnapshot();
  });
  it("mock same module again", () => {
    jest.mock("./displayloader", () => "mocked-version-two"); // a different mock version
    const SandBox = require("./Sandbox").default; // you must use dynamic require to reflect the updated module
    const shallowed = shallow(<SandBox />);

    expect(shallowed).toMatchSnapshot();
  });
});
