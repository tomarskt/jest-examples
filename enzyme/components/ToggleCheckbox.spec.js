import React from 'react';
import { shallow, mount } from 'enzyme';
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

  it.only('spy', () => {
    //arrange 
    const wrapper = mount(<ToggleCheckbox />); // when shallowed, jest blindly call the event handler (dom is not involved)
    const spy = jest.fn().mockImplementation(() => {
      console.log('hello');
    });
    wrapper.instance().onChange = spy
    wrapper.update();
    //act
    // wrapper.instance().onChange()
    const myBtn = wrapper.find('MyButton')
    expect(myBtn.length).toBe(1);
    myBtn.simulate('click');

    //assert
    expect(spy).toBeCalled();
  });



})
