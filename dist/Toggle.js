Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Toggle = function Toggle(_ref) {
    var id = _ref.id,
        isChecked = _ref.isChecked,
        action = _ref.action;
    return _react2['default'].createElement(
        'div',
        { className: 'toggle-container' },
        _react2['default'].createElement('input', {
            id: id,
            className: 'input',
            type: 'checkbox',
            defaultChecked: isChecked,
            onChange: action
        }),
        _react2['default'].createElement('label', { className: 'toggle', htmlFor: id })
    );
};

Toggle.propTypes = {
    id: _propTypes2['default'].string.isRequired,
    isChecked: _propTypes2['default'].bool,
    action: _propTypes2['default'].func
};

exports['default'] = Toggle;