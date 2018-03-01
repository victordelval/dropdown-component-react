import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './SearchBox';


describe('<SearchBox />', () => {

    it('Should render without crashing', () => {
        const wrapper = shallow(
            <SearchBox
                onChange={ () => {} } />
        );
    });

});