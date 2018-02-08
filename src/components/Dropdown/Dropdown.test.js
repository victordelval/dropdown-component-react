import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './Dropdown';


it('renders without crashing', () => {
    shallow(<Dropdown loading={true} data={[]} />);
});

it('renders "loading..." message', () => {
    const wrapper = shallow(<Dropdown loading={true} data={[]} />);
    const option = <option>Loading...</option>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    expect(wrapper.contains(option)).toEqual(true);
});

it('renders "no data available" message', () => {
    const wrapper = shallow(<Dropdown loading={false} data={[]} />);
    const option = <option>No data available</option>;
    expect(wrapper.contains(option)).toEqual(true);
});

it('renders first option', () => {
    let data = [
        {"code": "ES", "name": "Spain"},
        {"code": "PT", "name": "Portugal"}
    ]
    const wrapper = shallow(<Dropdown loading={false} data={ data } />);
    const option = <option value="ES">Spain</option>;
    expect(wrapper.contains(option)).toEqual(true);
});