Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = function Label(_ref) {
    var name = _ref.name;
    var id = _ref.id;
    return _react2["default"].createElement(
        "label",
        { className: "label", htmlFor: id },
        name
    );
};

Label.propTypes = {
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
};

exports["default"] = Label;