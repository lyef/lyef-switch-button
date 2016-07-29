Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
    id: _react.PropTypes.string.isRequired,
    labelLeft: _react.PropTypes.string,
    labelRight: _react.PropTypes.string,
    isChecked: _react.PropTypes.bool,
    action: _react.PropTypes.func
};

var defaultProps = {
    isChecked: false
};

var SwitchButton = function SwitchButton(_ref) {
    var id = _ref.id;
    var labelLeft = _ref.labelLeft;
    var labelRight = _ref.labelRight;
    var isChecked = _ref.isChecked;
    var action = _ref.action;
    return _react2['default'].createElement(
        'div',
        { className: 'switch-button' },
        labelLeft && _react2['default'].createElement(_Label2['default'], { className: 'label-left', id: id, name: labelLeft }),
        _react2['default'].createElement(_Toggle2['default'], { id: id, isChecked: isChecked, action: action }),
        labelRight && _react2['default'].createElement(_Label2['default'], { className: 'label-right', id: id, name: labelRight })
    );
};

SwitchButton.propTypes = propTypes;
SwitchButton.defaultProps = defaultProps;

exports['default'] = SwitchButton;