import React from 'react';
import { shallow } from 'enzyme';

import LabelList from './LabelList';


describe('LabelList', () => {

    it('Should render without crashing', () => {
        let selectedArr = [
            {code: 'SP', name: 'Spain'},
            {code: 'PT', name: 'Portugal'}
        ]
        shallow(<LabelList
            onClickLabel={ () => {} }
            selected={ selectedArr } />);
    });

})