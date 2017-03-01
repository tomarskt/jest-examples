import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../Link'


jest.mock('frankel-uk/Icon', ()=>'Icon', {virtual: true}) //if you have this line, then you will have <Icon tpe='facebook' /> instead of <div><img src='../img.png'/></div> . i.e. Icon is mocked
// no need to call jest.genMockFromModule('fs') either ; 
// no need to create a 'module_name.js' under __mocks__ folder
describe('Link', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Link href="http://facebook.com/" icon="facebook">
        Facebook
      </Link>
    )

    expect(component.toJSON()).toMatchSnapshot()
   })

})