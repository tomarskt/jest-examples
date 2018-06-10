import React from 'react';
import { shallow, mount } from 'enzyme';
import ToggleCheckbox from '../ToggleCheckbox';

describe('using enzyme', () => {

    it('shallow', () => {
        // because it's shallow rendered, its children won't be hydrated;
        // result snapshot has <ToggleCheckbox> <MyButton/></ToggleCheckbox> structure
        const shallowed = shallow(<ToggleCheckbox />);
        expect(shallowed).toMatchSnapshot();
    });
});