import React from 'react'
import renderer from 'react-test-renderer'
import Form from './form'

// below is an example of named import (compared with namespace import, default import)

// the key thing to answer when mock an component is : WHAT DOES THIS COMPONENT RETURN???
// and do NOT look at its implentation. always look at it from CONSUMER's point of view
// <Field component='MyComponent' /> => so Field is an react component, should be mocked as a string
// reduxForm({...options})(MyForm) => so reduxForm is an HOC function, should be mocked as a ()=>(component)=>component

jest.mock('redux-form', () => ({
  //Warning: Field(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
  Field: 'Field', //()=>()=>'Field' not working, because Field is NOT a HOC. an HOC always takes a component as an argment and returns a new , wrapped, component. Field does NOT take component as argment, and therefore it's not an HOC component
  reduxForm: () => (component) => component, // just pass through component without decorating it; reduxForm is a HOC so it should be mocked this way;
}))

describe('Form', () => {
  it('should render correctly', () => {
    const component = renderer.create(
        <Form />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})

/*

You can do require.requireActual to get the real module and create some mocks for it.

jest.mock('Form', () => {
  const RealModule = require.requireActual('Form');
  const MyModule = {
    RealThing: RealModule.RealThing,
    …add some mocks
  };
  return MyModule;
});
is that what you are looking for?
 */