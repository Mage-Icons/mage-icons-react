"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InboxIcon = _ref => {
  let {
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.75 12H6C6.53043 12 7.03914 12.2107 7.41421 12.5858C7.78929 12.9609 8 13.4696 8 14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 16.2107 12.9609 16.5858 12.5858C16.9609 12.2107 17.4696 12 18 12H21.25",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.25 2.75H8.75C5.43629 2.75 2.75 5.43629 2.75 8.75V15.25C2.75 18.5637 5.43629 21.25 8.75 21.25H15.25C18.5637 21.25 21.25 18.5637 21.25 15.25V8.75C21.25 5.43629 18.5637 2.75 15.25 2.75Z",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }));
};
var _default = InboxIcon;
exports.default = _default;