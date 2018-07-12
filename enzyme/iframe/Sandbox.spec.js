import React from 'react';
import {shallow, mount} from 'enzyme';

import Sandbox from './Sandbox';

jest.mock('./displayloader', ()=> 'MockDisplayLoader') ; //defualt export mock

describe('iframe',()=>{
    it('should render' , ()=>{
        const shallowed = shallow(<Sandbox url='http://unit-test.com' />);
        expect(shallowed).toMatchSnapshot();
    })
    it('should handle postMessage',()=>{


    })
});
