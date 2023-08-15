"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MapMarkerIcon = _ref => {
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
    d: "M12 12.7998C13.8502 12.7998 15.3499 11.3001 15.3499 9.4499C15.3499 7.59978 13.8502 6.09995 12 6.09995C10.1498 6.09995 8.65004 7.59978 8.65004 9.4499C8.65004 11.3001 10.1498 12.7998 12 12.7998Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 2.75C5.3001 2.75 4.18345 8.33325 5.3001 12.5654C6.28275 16.2726 9.23071 18.8074 11.1737 20.8844C11.2783 20.9995 11.4059 21.0915 11.5482 21.1545C11.6905 21.2175 11.8444 21.25 12 21.25C12.1556 21.25 12.3095 21.2175 12.4518 21.1545C12.594 21.0915 12.7217 20.9995 12.8263 20.8844C14.7693 18.8074 17.7172 16.2726 18.6999 12.5654C19.8165 8.33325 18.6999 2.75 12 2.75Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
  }));
};
var _default = MapMarkerIcon;
exports.default = _default;