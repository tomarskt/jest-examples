import React from 'react'
import renderer from 'react-test-renderer'
import Link from './Link'
import { shallow, mount } from 'enzyme'

//jest.mock('./Icon', ()=>'Icon') if you have this line, then you will have <Icon tpe='facebook' /> instead of <div><img src='../img.png'/></div> . i.e. Icon is mocked
// no need to call jest.genMockFromModule('fs') either ; 
// no need to create a 'module_name.js' under __mocks__ folder

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
  it('mount', () => {
    const wrapper = mount(<Link href= "http://facebook.com/" icon= "facebook" >
      Facebook
      </Link >
    )
    console.log(wrapper.html())
})
})