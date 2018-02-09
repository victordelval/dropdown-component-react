import React from 'react';
import { shallow } from 'enzyme';

import SelectorLabelList from './SelectorLabelList';


describe('SelectorLabelList', () => {

    it('Should render without crashing', () => {
        shallow(<SelectorLabelList />);
    });

})