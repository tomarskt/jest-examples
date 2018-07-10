// jest.mock("react-router", ()=>({
//     withRouter: jest.fn().mockImplementation(()=>console.warn("hey!!!!!!!!!!!!!!!!!!!!!!!"))
// }));

debugger;
jest.mock('react-router');
const ReactRouter = require("react-router");


console.warn(ReactRouter.withRouter);
ReactRouter.withRouter.mockImplementation(()=>{
    debugger;
    return 1;
});
const val = ReactRouter.withRouter('hello');
import React from "react";
import renderer from "react-test-renderer";

import PageHeader from "./pageHeader"; // ========================> this is hoisted; all import statement are hoisted, so it's executed before your jock statement;

describe("PageHeader Test", () => {
  it("should match snapshot for simple PageHeader", () => {
   
   
    debugger;
    const wrapper = renderer.create(<PageHeader />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
