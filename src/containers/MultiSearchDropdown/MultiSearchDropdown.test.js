import React from 'react';
import { shallow } from 'enzyme';

import { connect } from 'react-redux';

import { MultiSearchDropdown } from './MultiSearchDropdown';


describe('MultiSearchDropdown', () => {

    it('Should render without crashing', () => {

        const wrapper = shallow(<MultiSearchDropdown
            dispatch={ () => {} }
            loading={ true }
            expanded={ false }
            data={ [] }
            selected={ [] }
            url='http://localhost:9000' />);
    });

})
