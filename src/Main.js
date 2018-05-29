import React from 'react';
import Label from './Label';
import Toggle from './Toggle';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired,
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string,
    isChecked: PropTypes.bool,
    action: PropTypes.func,
    disabled: PropTypes.bool,
};

const defaultProps = {
    isChecked: false,
    disabled: false,
};

const SwitchButton = ({ id, labelLeft, labelRight, isChecked, action, disabled }) => (
    <div className={disabled ? 'switch-button disabled' : 'switch-button'}>
        {labelLeft &&
            <Label id={id} name={labelLeft} />
        }
        <Toggle id={id} isChecked={isChecked} action={action} disabled={disabled} />
        {labelRight &&
            <Label id={id} name={labelRight} />
        }
    </div>
);

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

export default SwitchButton;
