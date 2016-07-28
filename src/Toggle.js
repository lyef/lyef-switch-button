import React, { PropTypes } from 'react';

const Toggle = ({ id, isChecked, action }) => (
    <div className="toggle-container">
        <input
            id={id}
            className="input"
            type="checkbox"
            defaultChecked={isChecked}
            onChange={action}
        />
        <label className="toggle" htmlFor={id}></label>
    </div>
);

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    action: PropTypes.func,
};

export default Toggle;
