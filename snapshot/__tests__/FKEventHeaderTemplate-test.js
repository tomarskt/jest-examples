import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {FKEventHeaderTemplate} from '../FKEventHeaderTemplate'

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
