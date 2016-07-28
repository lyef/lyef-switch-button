import React, { PropTypes } from 'react';

const LabelLeft = ({ name, id }) => (
    <label className="label label-left" htmlFor={id}>
        {name}
    </label>
);

LabelLeft.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default LabelLeft;
