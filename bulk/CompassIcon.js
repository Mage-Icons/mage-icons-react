"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CompassIcon = _ref => {
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
    d: "M12 1.72717C9.97277 1.72717 7.99106 2.32832 6.30545 3.45461C4.61985 4.58089 3.30598 6.18173 2.53019 8.05467C1.75439 9.92762 1.55143 11.9885 1.94693 13.9769C2.34243 15.9652 3.31862 17.7915 4.75211 19.225C6.1856 20.6585 8.01197 21.6347 10.0003 22.0302C11.9886 22.4257 14.0496 22.2227 15.9225 21.4469C17.7955 20.6711 19.3963 19.3574 20.5226 17.6718C21.6489 15.9862 22.25 14.0044 22.25 11.9772C22.2474 9.25952 21.1666 6.65393 19.2449 4.73225C17.3232 2.81058 14.7177 1.72982 12 1.72717ZM9.85001 10.1072C9.86863 10.0431 9.90298 9.9846 9.94998 9.93716C10.0007 9.88705 10.0623 9.84939 10.13 9.82716L16.13 7.82716L14.13 13.8872C14.1063 13.9429 14.0723 13.9938 14.0299 14.0372C13.9834 14.0853 13.9247 14.1198 13.86 14.1372L7.86002 16.1372L9.85001 10.1072Z",
    fill: "currentColor"
  }));
};
var _default = CompassIcon;
exports.default = _default;