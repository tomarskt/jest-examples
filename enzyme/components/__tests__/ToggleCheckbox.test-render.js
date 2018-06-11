import React from 'react';
import TestRenderer from 'react-test-renderer';

// https://facebook.github.io/jest/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
// unlike 'enzyme', 'react-test-render' doesn't care about Upper case dom element names, and will happily accept e.g. <SomeComponent>.
jest.mock('../Mybutton', ()=>'My-Fancy-Button' )

import ToggleCheckbox from '../ToggleCheckbox';


describe('using react-test-renderer', () => {
    it('testRenderer', () => {
        const testRenderer = TestRenderer.create(<ToggleCheckbox />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it(`can't re-mock, once it's done, it's done` , () => {
        jest.mock('../Mybutton', ()=>'Another-Button' ); // limitation: this won't work; you can't change an existing module
        const testRenderer = TestRenderer.create(<ToggleCheckbox />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    })
});