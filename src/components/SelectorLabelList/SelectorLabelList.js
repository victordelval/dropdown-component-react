import React from 'react';
import PropTypes from 'prop-types';

import LabelButton from '../LabelButton';


class SelectorLabelList extends React.Component {

    static propTypes = {
        onClickLabel: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object)
    }

    // onClick(e) {
    //     let item = e.target;

    //     let selectedItem = {
    //         code: item.getAttribute('data-code'),
    //         name: item.textContent
    //     }

    //     // this.props.dispatch(removeLabel(selectedItem));
    // }

    render() {
        return <span>
            { this.props.selected.map(item =>
                <LabelButton
                    key={`${item.code}-${item.name}`}
                    onClick={ this.props.onClickLabel }
                    code={item.code}
                    name={item.name} />
            )}
        </span>;
    }

}

export default SelectorLabelList;