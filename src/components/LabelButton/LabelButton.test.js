import React from 'react';
import { shallow } from 'enzyme';

import LabelButton from './LabelButton';

describe('LabelButton', () => {

    it('Should render a label button', () => {
        const label = shallow(<LabelButton />);

        expect(label.text()).toEqual('Label');
        expect(label.find('label').length).toEqual(1);
    })
})