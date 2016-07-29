import React, { PropTypes } from 'react';

const Label = ({ name, id }) => (
    <label className="label" htmlFor={id}>{name}</label>
);

Label.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Label;
