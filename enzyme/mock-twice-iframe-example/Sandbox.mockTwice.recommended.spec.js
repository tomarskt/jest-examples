import React from "react";
import { mount } from "enzyme";
import SandBox from "./Sandbox";


jest.mock('../../helpers/dateTimeHelper', () => ({
  getTodayMoment: () => {
    const moment = require('moment');  // do your dynamic require here;
    return moment('2019-04-03');
  },
}));

// babel-plugin-jest-hoist: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
let mockComponent = <div>initial value</div>;
jest.mock("./displayloader", () => () => mockComponent); //// https://github.com/facebook/jest/issues/2567#issuecomment-272015844

describe("recommended: mock twice", () => {
  it("using version ONE", () => {
    mockComponent = <div>Version One</div>;
    const mounted = mount(<SandBox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });

  it("using version TWO", () => {
    mockComponent = <div>Version TWO</div>;
    const mounted = mount(<SandBox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });
});
