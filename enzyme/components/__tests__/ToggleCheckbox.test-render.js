import React from 'react';
import TestRenderer from 'react-test-renderer';

// https://facebook.github.io/jest/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
// unlike 'enzyme', 'react-test-render' doesn't care about Upper case dom element names, and will happily accept e.g. <SomeComponent>.
jest.mock('../Mybutton', ()=>'MyFancyButton')

import ToggleCheckbox from '../ToggleCheckbox';


describe('using react-test-renderer', () => {
    it('testRenderer', () => {
        const testRenderer = TestRenderer.create(<ToggleCheckbox />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    })
});