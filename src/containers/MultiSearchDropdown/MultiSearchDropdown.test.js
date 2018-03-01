import React from 'react';
import { shallow } from 'enzyme';

// import { connect } from 'react-redux';

import MultiSearchDropdown from './MultiSearchDropdown';
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
            loading={ true }
            data={ [] } />);

        expect(wrapper.find('DropdownBox').length).toBe(1);
        expect(wrapper.find('DropdownList').length).toBe(1);
    });
});


describe('<MultiSearchDropdown /> suite 2', () => {

    it('Should render without crashing', () => {
        const mockedData = {
            countries: [
                { code: "ES", name: "Spain" },
                { code: "PT", name: "Portugal" }
            ]
        };

        const wrapper = shallow(<MultiSearchDropdown
            // data={mockedData.countries} />);
            loading={ true }
            data={ [] }
            url='http://localhost:9000'
            responseKey='countries' />);

        expect(wrapper.find('DropdownBox').length).toBe(1);
        expect(wrapper.find('DropdownList').length).toBe(1);
    });

    // it('should handle state changes', () => {
    //     const mockCallBack = jest.fn();
    //     const mockedData = {
    //         countries: [
    //             { code: "ES", name: "Spain" },
    //             { code: "PT", name: "Portugal" }
    //         ]
    //     };

    //     const component = shallow(<MultiSearchDropdown
    //         // data={mockedData.countries} />);
    //         url='http://localhost:9000'
    //         responseKey='countries' />);

    //     const subComponent = shallow(<DropdownBox
    //         onClick={ mockCallBack }
    //         onClickLabel={ () => {} }
    //         onChangeSearch={ () => {} }
    //         // search={ '' }
    //         selected={ [] } />
    //     );

    //     // expect(component.state().expanded).toEqual(false);

    //     subComponent.find('div').first().simulate('click');

    //     // expect(component.state().expanded).toEqual(true);
    //     expect(mockCallBack.mock.calls.length).toEqual(1);
    // });

});
