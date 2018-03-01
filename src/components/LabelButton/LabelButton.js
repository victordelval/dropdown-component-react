import React from 'react';
import PropTypes from 'prop-types';


class LabelButton extends React.Component {

    static propTypes = {
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <label className="button"
                onClick={ this.props.onClick }
                data-code={ this.props.code }>
                    { this.props.name }
            </label>
        );
    }

}

export default LabelButton;