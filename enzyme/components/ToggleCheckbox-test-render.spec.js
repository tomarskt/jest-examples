import React from 'react';
import TestRenderer from 'react-test-renderer';
import ToggleCheckbox from './ToggleCheckbox';


describe('using react-test-renderer', () => {
    it('testRenderer', () => {
        const testRenderer = TestRenderer.create(<ToggleCheckbox />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    })
});