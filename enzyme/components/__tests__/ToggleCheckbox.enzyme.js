import React from "react";
import { shallow, mount } from "enzyme";
import ToggleCheckbox from "../ToggleCheckbox";

const spy = jest.spyOn(console, "error").mockImplementation(() => {
  /*mute console*/
});

describe("using enzyme", () => {
  it.only("shallow", () => {
    const wrapper = shallow(<ToggleCheckbox />);

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockClear(); // reset mock.calls and mock.instances, but keep the mock itself

    let checkbox = wrapper.find("label");
    expect(checkbox.text()).toEqual("Off");

    //click button defined in child component
    //const myBtn = wrapper.find('button')   // this will fail the test as we are just 'shallow' rendering the ToggleCheckbox
    const myBtn = wrapper.find("MyButton"); //we only render the fist level components
    expect(myBtn.length).toBe(1); //this is react component defined by `import MyButton from './mybutton'`
    myBtn.simulate("click");

    //check it again
    checkbox = wrapper.find("label");
    expect(checkbox.text()).toEqual("On");
  });

  it("mount", () => {
    const wrapper = mount(<ToggleCheckbox />);
    console.log(wrapper.html());
    //default to off
    let checkbox = wrapper.find("label");
    expect(checkbox.text()).toEqual("Off");

    //fire up a child event;
    const myBtn = wrapper.find("button");
    expect(myBtn.length).toBe(1);
    myBtn.simulate("click"); //this is exactly the same as you click the button in a real browser

    //check it again
    console.log(wrapper.html());
    checkbox = wrapper.find("label");
    expect(checkbox.text()).toEqual("On");
  });

  it.only("spyOn shallow", () => {
    // https://github.com/facebook/jest/issues/4696
    //https://github.com/airbnb/enzyme/issues/944
    // ********************************** jest.spyOn(Component.prototype, 'methodName') ***************************************************
    // Creates a mock function similar to jest.fn but also tracks calls to object[methodName]. Returns a Jest mock function.
    const spy = jest.spyOn(ToggleCheckbox.prototype, "onChange");
    // same as below
    // const spy = jest.fn();
    // ToggleCheckbox.prototype.onChange = spy;
    // **********************************************************************************************************************
    const wrapper = shallow(<ToggleCheckbox />); // see the next test to see the mount case;

    const myBtn = wrapper.find("myButton"); // ===> key difference
    expect(myBtn.length).toBe(1);
    myBtn.simulate("click");

    expect(spy).toBeCalled();
  });

  it.only("spyOn mount", () => {
    // https://github.com/facebook/jest/issues/4696
    //https://github.com/airbnb/enzyme/issues/944
    // ********************************** jest.spyOn(Component.prototype, 'methodName') ***************************************************
    // Creates a mock function similar to jest.fn but also tracks calls to object[methodName]. Returns a Jest mock function.
    //    const spy = jest.spyOn(ToggleCheckbox.prototype, 'onChange');
    // same as above
    const spy = jest.fn();
    ToggleCheckbox.prototype.onChange = spy;
    // **********************************************************************************************************************
    const wrapper = mount(<ToggleCheckbox />); // switch between `shallow` and `mount` to see the difference

    const myBtn = wrapper.find("button"); // key here! you must use button as myButton is already intepreted
    expect(myBtn.length).toBe(1);
    myBtn.simulate("click");
    //assert
    expect(spy).toBeCalled();
  });
});
