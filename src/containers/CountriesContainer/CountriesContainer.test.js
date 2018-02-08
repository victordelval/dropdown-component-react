import React from 'react';
import { shallow } from 'enzyme';

import CountriesContainer from './CountriesContainer';


describe('CountriesContainer', () => {

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

        // mount the component
        shallow(<CountriesContainer />);
    });

});
