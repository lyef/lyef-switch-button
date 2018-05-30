import React from 'react';
import Label from './Label';
import Toggle from './Toggle';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired,
    labelLeft: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    labelRight: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
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
            ((typeof labelLeft === 'string') ? <Label id={id} name={labelLeft} /> : labelLeft)}
        <Toggle id={id} isChecked={isChecked} action={action} disabled={disabled} />
        {labelRight &&
            ((typeof labelRight === 'string') ? <Label id={id} name={labelRight} /> : labelRight)}
    </div>
);

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

export default SwitchButton;
