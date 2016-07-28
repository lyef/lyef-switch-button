import React, { PropTypes } from 'react';
import LabelLeft from './LabelLeft';
import LabelRight from './LabelRight';
import Toggle from './Toggle';

const propTypes = {
    id: PropTypes.string.isRequired,
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string,
    isChecked: PropTypes.bool,
    action: PropTypes.func,
};

const defaultProps = {
    isChecked: false,
};

const SwitchButton = ({ id, labelLeft, labelRight, isChecked, action }) => (
    <div className="switch-button">
        {labelLeft &&
            <LabelLeft id={id} name={labelLeft} />
        }
        <Toggle id={id} isChecked={isChecked} action={action} />
        {labelRight &&
            <LabelRight id={id} name={labelRight} />
        }
    </div>
);

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

export default SwitchButton;
