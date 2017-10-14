import React from 'react';
import { shallow, mount } from 'enzyme';
import ToggleCheckbox from './ToggleCheckbox';


describe('shallow', () => {

  it('ToggleCheckbox changes the text after click child component button', () => {
    const wrapper = shallow(
      <ToggleCheckbox />
    )
    //default to off
    let checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('Off');

    //click button defined in child component
    //const myBtn = wrapper.find('button')   // this will fail the test as we are just 'shallow' rendering the ToggleCheckbox 
    const myBtn = wrapper.find('MyButton') //we only render the fist level components
    expect(myBtn.length).toBe(1) //this is react component defined by `import MyButton from './mybutton'`
    myBtn.simulate('click'); // MyButton.onClick won't invoked; it's generally a bad idea to fire up events in shallow rendering case
    // AND **  my_callback in <MyButton onClick={ my_callback } /> is blindly called  **
    // I have a code inside MyButton which comment out the line of `this.props.onClick()` and that will only impact `mount`
    // becuase in `shallow` case, callbacks are just **blindly** called
    // the other difference between `shallow` and `mount` is that React lifecycle events like DidMount won't fired for `shallow` (just like server side rendering)

    //check it again
    checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('On');
  }
  )

});


it('spy on prototype methods', () => {
//arrange 
  const onChangeSpy = jest.fn();
  ToggleCheckbox.prototype.onChange = onChangeSpy;  //must before shallow!!!

  const wrapper = shallow(
    <ToggleCheckbox />
  )
  

//act
  const myBtn = wrapper.find('MyButton') //we only render the fist level components
  expect(myBtn.length).toBe(1) //this is react component defined by `import MyButton from './mybutton'`
  myBtn.simulate('click');

//assert
  expect(onChangeSpy.mock.calls.length).toBe(1)
  expect(onChangeSpy).toBeCalled()

});


describe('mount', () => {
  it(' button click', async () => {
    const wrapper = mount(<ToggleCheckbox />)
    console.log(wrapper.html())
    //default to off
    let checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('Off');

    //fire up a child event;
    const myBtn = wrapper.find('button')
    expect(myBtn.length).toBe(1);
    myBtn.simulate('click');  //this is exactly the same as you click the button in a real browser

    await Promise.resolve();
    //check it again
    console.log(wrapper.html())
    checkbox = wrapper.find('label')
    expect(checkbox.text()).toEqual('On');
  })
})
