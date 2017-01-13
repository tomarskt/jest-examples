import React from 'react'
import renderer from 'react-test-renderer'
import Link from './Link'
import { shallow, mount } from 'enzyme'

//babel-plugin-jest-hoist: The second argument of `jest.mock` must be a function.
//jest.mock('./Icon', ()=>'Icon') //we don't need to use manual mock; mock a stateful component within  stateless function is good enough
// no need to call jest.genMockFromModule('fs') ; no need to create a 'module_name.js' under __mocks__ folder

import IconMock from './Icon'
describe('Link', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Link href="http://facebook.com/" icon="facebook">
        Facebook
      </Link>
    )

    expect(component.toJSON()).toMatchSnapshot()
    console.log(IconMock)


  })
  it.only('mount', () => {
    const wrapper = mount(<Link href= "http://facebook.com/" icon= "facebook" >
      Facebook
      </Link >
    )
    console.log(wrapper.html())
})
})