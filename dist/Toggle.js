Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toggle = function Toggle(_ref) {
    var id = _ref.id;
    var isChecked = _ref.isChecked;
    var action = _ref.action;
    return _react2["default"].createElement(
        "div",
        { className: "toggle-container" },
        _react2["default"].createElement("input", {
            id: id,
            className: "input",
            type: "checkbox",
            defaultChecked: isChecked,
            onChange: action
        }),
        _react2["default"].createElement("label", { className: "toggle", htmlFor: id })
    );
};

Toggle.propTypes = {
    id: _react.PropTypes.string.isRequired,
    isChecked: _react.PropTypes.bool.isRequired,
    action: _react.PropTypes.func
};

exports["default"] = Toggle;