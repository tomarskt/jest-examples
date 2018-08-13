import React from "react";
import renderer from "react-test-renderer";
// jest.mock("react-router", ()=>({
//     withRouter: jest.fn().mockImplementation(()=>console.warn("hey!!!!!!!!!!!!!!!!!!!!!!!"))
// }));

jest.mock('react-router'); //=================================> this is hoisted by babel-plugin-jest-hoist, 
                          // to make sure it's executed before *anything else* (before your import *)
const ReactRouter = require("react-router");


ReactRouter.withRouter.mockImplementation(()=>{  //++++ this is NOT hoisted  +++ that's why this approach doesn't work 
    debugger;
    return 1;
});
const val = ReactRouter.withRouter('hello');

import PageHeader from "./pageHeader"; // ========================> this is hoisted by babel; 
                                      // all import statement are hoisted, so it's executed before your mock statement;

describe("PageHeader Test", () => {
  it("NOT WORKING: should match snapshot for simple PageHeader", () => {
    const wrapper = renderer.create(<PageHeader />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
