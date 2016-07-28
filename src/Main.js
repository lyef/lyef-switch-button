import React, { PropTypes } from 'react';
import LabelLeft from './LabelLeft';
import LabelRight from './LabelRight';
import Toggle from './Toggle';

class SwitchButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="switch-button">
                {this.props.labelLeft &&
                    <LabelLeft id={this.props.id} name={this.props.labelLeft} />
                }
                <Toggle id={this.props.id} />
                {this.props.labelRight &&
                    <LabelRight id={this.props.id} name={this.props.labelRight} />
                }
            </div>
        );
    }
}


SwitchButton.propTypes = {
    id: PropTypes.string.isRequired,
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string,
};

export default SwitchButton;
