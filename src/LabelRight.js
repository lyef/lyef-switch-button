import React, { PropTypes } from 'react';

const LabelRight = ({ name, id }) => (
    <label className="label label-right" htmlFor={id}>
        {name}
    </label>
);

LabelRight.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default LabelRight;
