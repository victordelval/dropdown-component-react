import React from 'react';
import { shallow } from 'enzyme';

import SelectorItem from './SelectorItem';


describe('SelectorItem', () => {

    it('Should render a selector list item', () => {
        let item = {code: 'SP', name: 'Spain'};
        const wrapper = shallow(<SelectorItem
            onClick={ () => {} }
            item={ item }
            selected={ [] } />);

        expect(wrapper.find('li').length).toBe(1);
    });

    it('Should render in bold the string matching the search', () => {
        let item = {code: 'SP', name: 'Spain'};
        let search = 'sp';
        const wrapper = shallow(<SelectorItem
            onClick={ () => {} }
            item={ item }
            selected={ false }
            search={ search } />);

        // TODO - case insensitive
        expect(wrapper.find('b').contains('Sp')).toEqual(true);
    });

    // it('Should render selected item after click event', () => {
    //     let item = {code: 'SP', name: 'Spain'};
    //     const wrapper = shallow(<SelectorItem
    //         onClick={ () => {} }
    //         item={ item }
    //         selected={ false }
    //         search={ '' } />);

    //     expect(wrapper.find('b').contains('Sp')).toEqual(true);
    // });


});