"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const StopIcon = _ref => {
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
    d: "M19.75 6.75V17.25C19.7474 17.9122 19.4832 18.5466 19.0149 19.0149C18.5466 19.4831 17.9122 19.7474 17.25 19.75H6.75C6.08777 19.7474 5.45338 19.4831 4.98511 19.0149C4.51684 18.5466 4.25263 17.9122 4.25 17.25V6.75C4.25 6.08696 4.51334 5.45108 4.98218 4.98224C5.45102 4.5134 6.08696 4.25 6.75 4.25H17.25C17.913 4.25 18.549 4.5134 19.0178 4.98224C19.4867 5.45108 19.75 6.08696 19.75 6.75Z",
    fill: "currentColor"
  }));
};
var _default = StopIcon;
exports.default = _default;