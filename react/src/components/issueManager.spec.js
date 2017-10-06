import React from 'react';
import renderer from 'react-test-renderer';
import IssueManager from './issueManager';


jest.mock('../common/fetch');
describe('Issue Manager', () => {
    it('renders correctly', async () => {
        Date.now = jest.genMockFunction().mockReturnValue(1507270330454) // 6/10/2017 5:12 pm;
        const component = renderer.create(<IssueManager />);
        /**
        › 1 snapshot written.
            console.log src\components\issueManager.js:71
                ********** render with loading=false (default) ************

            console.log src\components\issueManager.js:71
                ********** render with loading=true ************  //<---------------- if you don't create time gap, this would be the render result; jest won't wait fetch Promise to resolve

            console.log src\components\issueManager.js:71
                ********** render with loading=false (final, fetch promise resolved) ************ // <--------- this is what you really want

            Snapshot Summary
            › 1 snapshot written in 1 test suite.
         */
        //******************************************* */
        await Promise.resolve(); // must create a time gap for fetch to resolve;
        //******************************************* */
        expect(component.toJSON()).toMatchSnapshot();
    })
});