import React from 'react';
import { shallow } from 'enzyme';

import LabelButton from './LabelButton';

describe('LabelButton', () => {

    it('Should render a label button', () => {
        let item = {code: 'SP', name: 'Spain'};
        const label = shallow(<LabelButton code={item.code} name={item.name}/>);

        expect(label.text()).toEqual(item.name);
        expect(label.find('label').length).toEqual(1);
    })
})