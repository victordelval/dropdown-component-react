import React from 'react';
import { shallow } from 'enzyme';

import SelectorItem from './SelectorItem';


describe('SelectorItem', () => {

    it('Should render a selector list item', () => {
        let item = {code: 'SP', name: 'Spain'};
        shallow(<SelectorItem
            onClick={ () => {} }
            item={ item }
            selected={ false } />);

        // expect(label.text()).toEqual('Label');
        // expect(label.find('label').length).toEqual(1);
    })
})