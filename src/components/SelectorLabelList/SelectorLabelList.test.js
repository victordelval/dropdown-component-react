import React from 'react';
import { shallow } from 'enzyme';

import SelectorLabelList from './SelectorLabelList';


describe('SelectorLabelList', () => {

    it('Should render without crashing', () => {
        let selectedArr = [
            {code: 'SP', name: 'Spain'},
            {code: 'PT', name: 'Portugal'}
        ]
        shallow(<SelectorLabelList
            onClickLabel={ () => {} }
            selected={ selectedArr } />);
    });

})