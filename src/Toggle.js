import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ id, isChecked, action, disabled }) => (
    <div className="toggle-container">
        <input
            id={id}
            className="input"
            type="checkbox"
            disabled={disabled}
            defaultChecked={isChecked}
            onChange={action}
        />
        <label className="toggle" htmlFor={id}></label>
    </div>
);

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    action: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Toggle;
