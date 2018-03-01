import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


describe('<App />', () => {

    describe('componentDidMount', () => {

        it('sets the state componentDidMount', async () => {
            window.fetch = jest.fn().mockImplementation(() => ({
                status: 200,
                json: () => new Promise((resolve, reject) => {
                    resolve({
                        countries: [
                            { code: "ES", name: "Spain" },
                            { code: "PT", name: "Portugal" }
                        ]
                    })
                })
            }))

            const renderedComponent = await shallow(<App
                url='http://localhost:9000'
                responseKey='countries' />)
            await renderedComponent.update()
            expect(renderedComponent.state('data').length).toEqual(2)
        })

        it('sets the state componentDidMount on error', async () => {
            window.fetch = jest.fn().mockImplementation(() => ({
                status: 500,
            }))

            const renderedComponent = await shallow(<App
                url='http://localhost:9000'
                responseKey='countries' />)
            await renderedComponent.update()
            expect(renderedComponent.state('errorStatus'))
                .toEqual('Error fetching the data from server')
        })
    });

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
        shallow(<App
            url='http://localhost:9000'
            responseKey='countries' />);
    });
});
