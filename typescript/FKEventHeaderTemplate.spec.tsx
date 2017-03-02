import * as React from 'react';
import * as renderer from 'react-test-renderer';


jest.mock('Frankel/components/RaceTimeStatus',
    () => ({ default: 'RaceTimeStatus' })  // 12 hours to get this line figured out
    , { virtual: true });
import { FKEventHeaderTemplate } from './FKEventHeaderTemplate'


/*  how is jest.mock different in typescript v.s babel-jest
 when executing using babel-jest , see example at ../snapshot/FKEventHeaderTemplate.spec.js
    1. defined jest.mock after ` import { FKEventHeaderTemplate } from`
    2. within jest.mock('Frankel/components/RaceTimeStatus',()=>'RaceTimeStatus') , which is default export and hence can only be recognized by es6 module system (babel-jest understand that)
 none of above code work with typescript. to make it work, we must 
    1. define your module mock BEFORE your import {FKEventHeaderTemplate}, otherwise `tsc` complains that module can't be found. This is becuase typescript is a strong
       typed language and tsc will check the integrity of modules being referenced
    2. within jest.mock, must explicitly return {default:'RaceTimeStatus'} because `tsc` compiles your code to commonJS but it doesn't compile your jest.mock returned `fake module code` 
       that explains that if you use default export, RaceTimeStatus is undefined (becuase there is no module.exports.default)
 */


describe('FKEventHeaderTemplate Component', () => {
    it('should render component correctly', () => {
        const props = {
            event: {
                id: '123'
            }
        }
        const component = renderer.create(<FKEventHeaderTemplate  {...props} />);
        expect(component.toJSON()).toMatchSnapshot()
    });
});
