import React from 'react';
import { shallow } from 'enzyme';

import SelectorList from './SelectorList';


describe('<SelectorList />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(<SelectorList
            onClick={ () => {} }
            data={ [] }
            filtered={ [] }
            selected={ [] }
            loading={ false }
            expanded={ false } />);
    });

    it('Should render "p" element with "Loading..." message when requesting data', () => {
        const wrapper = shallow(<SelectorList
            onClick={ () => {} }
            data={ [] }
            filtered={ [] }
            selected={ [] }
            loading={ true }
            expanded={ true } />);

        expect(wrapper.find('ul').length).toBe(0);
        expect(wrapper.find('span').length).toBe(0);

        expect(wrapper.find('p').length).toBe(1);
        // const message = <p>Loading...</p>;
        // expect(wrapper.contains(message)).toEqual(true);
        expect(wrapper.find('p').contains('Loading...')).toEqual(true);
    });

    it('Should render "span" element with "No data available" message when no data', () => {
        const wrapper = shallow(<SelectorList
            onClick={ () => {} }
            data={ [] }
            filtered={ [] }
            selected={ [] }
            loading={ false }
            expanded={ true } />);

        expect(wrapper.find('ul').length).toBe(0);
        expect(wrapper.find('p').length).toBe(0);

        expect(wrapper.find('span').length).toBe(1);
        expect(wrapper.find('span').contains('No data available')).toEqual(true);
    });



});