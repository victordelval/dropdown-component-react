import React from 'react';
import { shallow } from 'enzyme';

import { connect } from 'react-redux';

import { MultiSearchDropdown } from './MultiSearchDropdown';
import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


describe('<MultiSearchDropdown />', () => {

    it('Should render without crashing', () => {

        // mock global fetch
        const mockResponse = (status, statusText, response) => {
            return new window.Response(response, {
                status: status,
                statusText: statusText,
                headers: { 'Content-type': 'application/json' }
            });
        };

        const mockedData = {
            countries: [
                { code: "ES", name: "Spain" },
                { code: "PT", name: "Portugal" }
            ]
        };

        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(200, null, JSON.stringify(mockedData))));


        const wrapper = shallow(<MultiSearchDropdown
            dispatch={ () => {} }
            loading={ true }
            expanded={ false }
            data={ [] }
            selected={ [] }
            filtered={ [] }
            url='http://localhost:9000' />);

        expect(wrapper.find('DropdownBox').length).toBe(1);
        expect(wrapper.find('DropdownList').length).toBe(1);
    });

});
