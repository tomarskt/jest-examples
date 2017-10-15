import React from 'react';
import { shallow, mount } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import ToggleCheckbox from './ToggleCheckbox';

describe('interaction', () => {

  it('shallow', () => {
    const wrapper = shallow(
      <ToggleCheckbox />
    )
    let checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('Off');

    //click button defined in child component
    //const myBtn = wrapper.find('button')   // this will fail the test as we are just 'shallow' rendering the ToggleCheckbox 
    const myBtn = wrapper.find('MyButton') //we only render the fist level components
    expect(myBtn.length).toBe(1) //this is react component defined by `import MyButton from './mybutton'`
    myBtn.simulate('click');

    //check it again
    checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('On');
  })

  it('mount', () => {
    const wrapper = mount(<ToggleCheckbox />)
    console.log(wrapper.html())
    //default to off
    let checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('Off');

    //fire up a child event;
    const myBtn = wrapper.find('button')
    expect(myBtn.length).toBe(1);
    myBtn.simulate('click');  //this is exactly the same as you click the button in a real browser

    //check it again
    console.log(wrapper.html())
    checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('On');
  })

  // https://github.com/facebook/jest/issues/4696
  it('spy', () => {
    //arrange
    const spy = jest.fn().mockImplementation(() => {
      console.log(`spy called`);
    })
    const wrapper = shallow(<ToggleCheckbox />); // switch between `shallow` and `mount` to see the difference
    // whether ToggleCheckbox#onChange is invoked

    wrapper.instance().onChange = spy
    wrapper.update(); //Forces a re-render.
    //act
    // wrapper.instance().onChange()
    const myBtn = wrapper.find('MyButton')
    expect(myBtn.length).toBe(1);
    myBtn.simulate('click');

    //assert
    expect(spy).toBeCalled();
  });
  // couldn't get it work 
  // https://reactjs.org/docs/test-renderer.html
  it.skip('spy2', () => {
      const testRenderer = TestRenderer.create( <ToggleCheckbox />);
      const root = testRenderer.root;
      const testInstance = testRenderer.getInstance();
      testInstance.findByType('MyButton');
  })
})
