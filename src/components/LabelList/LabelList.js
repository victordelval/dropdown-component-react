import React from 'react';
import PropTypes from 'prop-types';

import LabelButton from '../LabelButton';


class LabelList extends React.Component {

    static propTypes = {
        onClickLabel: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        return (
            <span>
                { this.props.selected.map(item =>
                    <LabelButton
                        key={`${item.code}-${item.name}`}
                        onClick={ this.props.onClickLabel }
                        code={item.code}
                        name={item.name} />
                )}
            </span>
        );
    }

}

export default LabelList;


// let collection = [];
// this.props.selected.forEach((item) => {
//     collection.push(
//         <LabelButton
//             item={item}
//             key={item.code} />
//     );
// });
// return (
//     <span>
//         {collection}
//     </span>
// );