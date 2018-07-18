import React from "react";
import { mount } from "enzyme";
import SandBox from "./Sandbox";


/*
  Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

    Check the render method of `Sandbox`.
*/
let mockComponent = () => <div>initial value</div>;  // ====================================> see Sandbox.mockTwice.spec.js
jest.mock("./displayloader", () => mockComponent); // Got undefined error

describe.skip("not working --- mock twice", () => {
  it("using version ONE", () => {
    mockComponent = () => <div>Version One</div>;
    const mounted = mount(<SandBox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });

  it("using version TWO", () => {
    mockComponent = () => <div>Version TWO</div>;
    const mounted = mount(<SandBox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });
});
