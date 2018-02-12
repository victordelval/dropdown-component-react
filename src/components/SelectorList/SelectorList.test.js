import React from 'react';
import { shallow } from 'enzyme';

import SelectorList from './SelectorList';
import SelectorItem from '../SelectorItem';


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

    it('Should render "p" element with "Loading..." message while requesting data', () => {
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

    it('Should render "span" element with "No match found" message when no filtered data but search term', () => {
        let data = [
            { code: "ES", name: "Spain" },
            { code: "PT", name: "Portugal" }
        ];

        const wrapper = shallow(<SelectorList
            onClick={ () => {} }
            data={ data }
            filtered={ [] }
            selected={ [] }
            loading={ false }
            expanded={ true }
            search={ 'foo' } />);

        expect(wrapper.find('ul').length).toBe(0);
        expect(wrapper.find('p').length).toBe(0);

        expect(wrapper.find('span').length).toBe(1);
        expect(wrapper.find('span').contains('No match found')).toEqual(true);
    });

    it('Should render "ul" element with "SelectorItem" component representing each item in data', () => {
        let data = [
            { code: "ES", name: "Spain" },
            { code: "PT", name: "Portugal" }
        ];

        const wrapper = shallow(<SelectorList
            onClick={ () => {} }
            data={ data }
            filtered={ [] }
            selected={ [] }
            loading={ false }
            expanded={ true }
            search={ '' } />);

        expect(wrapper.find('span').length).toBe(0);
        expect(wrapper.find('p').length).toBe(0);

        expect(wrapper.find('ul').length).toBe(1);
        expect(wrapper.find('SelectorItem').length).toBe(2);
    });

});