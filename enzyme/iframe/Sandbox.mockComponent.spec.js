import React from "react";
import { shallow, mount} from "enzyme";
import SandBox from "./Sandbox";

// CAVEAT: cannot use variable here;
jest.mock("./displayloader", ()=>()=><div>Hello</div>); //a non naive mock

describe("mock twice", () => {
  it.only("mock a module", () => {
    // with shallow, you won't be able to see Hello as it's ONLY SHALLOW RENDERED
    const mounted = mount(<SandBox url='http://unit-test.com'/>);
    expect(mounted).toMatchSnapshot();
  });

});
