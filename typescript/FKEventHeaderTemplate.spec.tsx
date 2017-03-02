import * as React from 'react';
import * as renderer from 'react-test-renderer';


jest.mock('Frankel/components/RaceTimeStatus',
    () => ({ default: 'RaceTimeStatus' })  // 12 hours to get this line figured out
    , { virtual: true });
import { FKEventHeaderTemplate } from './FKEventHeaderTemplate'



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
