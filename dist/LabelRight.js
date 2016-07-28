Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LabelRight = function LabelRight(_ref) {
    var name = _ref.name;
    var id = _ref.id;
    return _react2["default"].createElement(
        "label",
        { className: "label label-right", htmlFor: id },
        name
    );
};

LabelRight.propTypes = {
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
};

exports["default"] = LabelRight;