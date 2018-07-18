import React from "react";
import { mount } from "enzyme";
import SandBox from "./Sandbox";

let mockComponent = () => <div>initial value</div>;
jest.mock("./displayloader", () => mockComponent);  // Got undefined error

describe.skip("mock twice", () => {
  it.only("mock a module", () => {
    mockComponent = () => <div>Version One</div>;
    const mounted = mount(<SandBox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });

  it.only("mock a module", () => {
    mockComponent = () => <div>Version TWO</div>;
    const mounted = mount(<SandBox url="http://unit-test.com" />);
    expect(mounted).toMatchSnapshot();
  });
});
