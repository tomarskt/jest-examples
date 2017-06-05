import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {FKEventHeaderTemplate} from '../FKEventHeaderTemplate'

// you must specify {virtual:true} becuase file 'Frankel/components/RaceTimeStatus' doesn't exist
// error :Cannot find module 'Frankel/components/RaceTimeStatus' from 'FKEventHeaderTemplate.spec.js'
jest.mock('Frankel/components/RaceTimeStatus', () => 'RaceTimeStatus', {virtual: true});

describe('FKEventHeaderTemplate Component', () => {
    it('should render component correctly',() => {
        const props={
            event:{
                id:'123'
            }
        }
        const component = renderer.create( <FKEventHeaderTemplate  {...props}/> );
        expect(component.toJSON()).toMatchSnapshot()
    });
});
