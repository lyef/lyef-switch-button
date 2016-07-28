import React, { PropTypes } from 'react';

const Component = ({ name }) => (
    <div className="switch-button">
        <label className="label label-left" htmlFor="switch-flat">Lorem</label>
        <input id="switch-flat" className="input" type="checkbox" />
        <label className="toggle" htmlFor="switch-flat"></label>
        <label className="label label-right" htmlFor="switch-flat">Lorem</label>
    </div>
);

Component.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Component;
