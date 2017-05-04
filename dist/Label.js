Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Label = function Label(_ref) {
    var name = _ref.name,
        id = _ref.id;
    return _react2['default'].createElement(
        'label',
        { className: 'label', htmlFor: id },
        name
    );
};

Label.propTypes = {
    id: _propTypes2['default'].string.isRequired,
    name: _propTypes2['default'].string.isRequired
};

exports['default'] = Label;