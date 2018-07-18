import React from "react";
import { shallow, mount } from "enzyme";

import Sandbox from "./Sandbox";
const dispatchMocked = require("./store").dispatch; // jest.mock will be hoisted, so it's fine to do require before jest.mock;

//******************************************************************************************** */
// babel-plugin-jest-hoist: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
const mockEscapeHatch = 'MockDisplayLoader'; // https://github.com/facebook/jest/issues/2567#issuecomment-272015844
jest.mock("./displayloader", () => mockEscapeHatch); //defualt export mock
//******************************************************************************************** */

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
