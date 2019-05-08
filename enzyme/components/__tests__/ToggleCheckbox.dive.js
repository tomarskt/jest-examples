import React from "react";
import { shallow } from "enzyme";
import ToggleCheckbox from "../ToggleCheckbox";

describe("without dive", () => {
  it("should render correctly without dive()", () => {
    const shallowed = shallow(<ToggleCheckbox />);
    const label = shallowed.find("label");
    expect(label.text()).toBe("Off");
    expect(shallowed).toMatchSnapshot();

    const myButton = shallowed.find("MyButton");
    expect(myButton.length).toBe(1);
    myButton.simulate("click");


    // /opt/git/wdp-ui-coral/packages/dashboard-framework/src/components/QuickLinksMenu/QuickLinksMenu.test.jsx
    // simulate onChange event with event mocked;
    // const wrapper = shallow(withTheme(<QuickLinksMenu links={links} />)).dive();
    // const evt = {
    //   preventDefault: () => {},
    //   target: {
    //     value: '0',
    //   },
    // };
    // // wdp-ui-react-gel/packages/select/src/index.jsx line 5
    // // the Select component will wrapped with withAccessibleFocusStyle HOC by default;
    // wrapper.find('SubscribedComponent').simulate('change', evt);



    const label2 = shallowed.find("label");
    expect(label2.text()).toBe("On");

    const myCheckbox = shallowed.find('MyCheckbox');
    expect(myCheckbox.prop('isChecked')).toBe(true);
  });
});
describe("with dive", () => {
  const withHOC = Component => () => (
    <div>
      <h2>I'm just a dummy wrapper</h2>
      <Component />
    </div>
  );
  it("should render correctly", () => {
    const WithHOCWrapper = withHOC(ToggleCheckbox);

    const shallowed = shallow(<WithHOCWrapper />)
      .find("ToggleCheckbox")
      .dive();
    const label = shallowed.find("label");
    expect(label.text()).toBe("Off");
    expect(shallowed).toMatchSnapshot();

    const myButton = shallowed.find("MyButton");
    expect(myButton.length).toBe(1);
    myButton.simulate("click");

    const label2 = shallowed.find("label");
    expect(label2.text()).toBe("On");
  });
});
