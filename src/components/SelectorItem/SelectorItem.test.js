import React from 'react';
import { shallow } from 'enzyme';

import SelectorItem from './SelectorItem';


describe('SelectorItem', () => {

    it('Should render a selector list item', () => {
        let onClick = () => {

        };
        let item = {code: 'SP', name: 'Spain'};

        shallow(<SelectorItem onClick={ onClick } item={ item } />);

        // expect(label.text()).toEqual('Label');
        // expect(label.find('label').length).toEqual(1);
    })
})