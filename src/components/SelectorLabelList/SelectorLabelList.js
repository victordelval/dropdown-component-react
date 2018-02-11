import React from 'react';
import PropTypes from 'prop-types';

import LabelButton from '../LabelButton';


class SelectorLabelList extends React.Component {

    static propTypes = {
        selected: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        return <span>
            { this.props.selected.map(item =>
                <LabelButton
                    key={`${item.code}-${item.name}`}
                    code={item.code}
                    name={item.name} />
            )}
        </span>;
    }

}

export default SelectorLabelList;