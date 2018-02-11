import React from 'react';
import PropTypes from 'prop-types';


class LabelButton extends React.Component {

    static propTypes = {
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }

    render() {

        return <label className="button"
            data-code={ this.props.code }>{ this.props.name }</label>;
    }

}

export default LabelButton;