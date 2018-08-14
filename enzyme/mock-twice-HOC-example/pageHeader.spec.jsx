import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './pageHeader';

jest.mock('react-router', () => ({
  ...require.requireActual('react-router'), // leave the rest untouched... only mock what impact us
  withRouter: Component => props => (
    <Component location={{ pathname: '/' }} {...props} />
  ),
}));

describe('PageHeader Test', () => {
  it('should match snapshot for simple PageHeader', () => {
    const wrapper = renderer
      .create(
            <PageHeader />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
