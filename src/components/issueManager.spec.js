import React from 'react';
import renderer from 'react-test-renderer';
import IssueManager from './issueManager';

jest.mock('../common/fetch');
describe('Issue Manager', () => {
    it('renders correctly', () => {
        const component = renderer.create(<IssueManager />);
        /**
        › 1 snapshot written.
            console.log src\components\issueManager.js:71
                ********** render ************

            console.log src\components\issueManager.js:71
                ********** render ************

            console.log src\components\issueManager.js:71
                ********** render ************

            Snapshot Summary
            › 1 snapshot written in 1 test suite.

            we rendered 3 times with cdm called; data fetched (via __mock__/fetch); component re-rendered
            but for some reason, snapshot is the 2nd one (loading one)
         */
        expect(component.toJSON()).toMatchSnapshot();

    })
});