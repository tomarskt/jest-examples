import React from 'react'
import renderer from 'react-test-renderer'
import Form from './form'

/* jest mock modules

jest.mock(moduleName, factory, options)

1. modules that has default export
jest.mock('../Icon', () => 'Icon')
2. modules that doesn't have default exprot
jest.mock('../Icon', ()=>({ icon: 'Icon' }))


*/
jest.mock('redux-form', () => ({
  Field: 'Field', // > https://github.com/facebook/jest/issues/1557#issuecomment-272298590
  reduxForm: 
  (configuration) => (wrapped_component) => wrapped_component, 
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