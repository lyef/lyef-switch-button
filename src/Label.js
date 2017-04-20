import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ name, id }) => (
    <label className="label" htmlFor={id}>{name}</label>
);

Label.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Label;
