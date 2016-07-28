import React, { PropTypes } from 'react';
import LabelLeft from './LabelLeft';
import LabelRight from './LabelRight';
import Toggle from './Toggle';

const SwitchButton = ({ labelLeft, labelRight, id }) => (
    <div className="switch-button">
        {labelLeft &&
            <LabelLeft id={id} name={labelLeft} />
        }
        <Toggle id={id} />
        {labelRight &&
            <LabelRight id={id} name={labelRight} />
        }
    </div>
);

SwitchButton.propTypes = {
    id: PropTypes.string.isRequired,
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string,
};

export default SwitchButton;
