Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
    id: _propTypes2['default'].string.isRequired,
    labelLeft: _propTypes2['default'].string,
    labelRight: _propTypes2['default'].string,
    isChecked: _propTypes2['default'].bool,
    action: _propTypes2['default'].func,
    disabled: _propTypes2['default'].bool
};

var defaultProps = {
    isChecked: false,
    disabled: false
};

var SwitchButton = function SwitchButton(_ref) {
    var id = _ref.id,
        labelLeft = _ref.labelLeft,
        labelRight = _ref.labelRight,
        isChecked = _ref.isChecked,
        action = _ref.action,
        disabled = _ref.disabled;
    return _react2['default'].createElement(
        'div',
        { className: disabled ? 'switch-button disabled' : 'switch-button' },
        labelLeft && _react2['default'].createElement(_Label2['default'], { id: id, name: labelLeft }),
        _react2['default'].createElement(_Toggle2['default'], { id: id, isChecked: isChecked, action: action, disabled: disabled }),
        labelRight && _react2['default'].createElement(_Label2['default'], { id: id, name: labelRight })
    );
};

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

exports['default'] = SwitchButton;