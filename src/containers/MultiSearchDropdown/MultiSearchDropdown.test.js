import React from 'react';
import { shallow } from 'enzyme';

import MultiSearchDropdown from './MultiSearchDropdown';


describe('MultiSearchDropdown', () => {

    it('Should render without crashing', () => {
        shallow(<MultiSearchDropdown loading={true} data={[]} />);
    });

})
