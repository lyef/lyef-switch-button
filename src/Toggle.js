import React, { PropTypes } from 'react';

const Toggle = ({ id }) => (
    <div className="toggle-container">
        <input id={id} className="input" type="checkbox" />
        <label className="toggle" htmlFor={id}></label>
    </div>
);

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Toggle;
