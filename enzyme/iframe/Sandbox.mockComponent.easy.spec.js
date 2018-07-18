import React from "react";
import { shallow, mount } from "enzyme";

import Sandbox from "./Sandbox";
const dispatchMocked = require("./store").dispatch; // jest.mock will be hoisted, so it's fine to do require before jest.mock;

jest.mock("./displayloader", () => "MockDisplayLoader"); // mock straight-forward ver

jest.mock("./store", () => ({
  // named export mock
  dispatch: jest.fn()
}));

describe("iframe", () => {
  it("should shallow render correctly ", () => {
    const shallowed = shallow(<Sandbox url="http://unit-test.com" />);
    expect(shallowed).toMatchSnapshot();
  });
  it("should deep render correctly", () => {
    const mounted = mount(<Sandbox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });
  it("should handle postMessage correctly", () => {
    const mounted = mount(<Sandbox url="http://unit-test.com" />);
    const wrapped = mounted.find("GelXIframe");
    wrapped.instance().firePostMessage({
      data: {
        value: 100
      }
    });
    expect(dispatchMocked).toHaveBeenCalledTimes(1);
    expect(dispatchMocked).toBeCalledWith({
      value: 101
    });
  });
});
