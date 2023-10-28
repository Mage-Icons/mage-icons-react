"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PlaySquareIcon = _ref => {
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
    d: "M8.98975 7.9728V16.0248C8.99014 16.1899 9.03672 16.3516 9.1242 16.4916C9.21169 16.6316 9.33659 16.7443 9.4848 16.817C9.63301 16.8898 9.7986 16.9196 9.96287 16.9031C10.1271 16.8866 10.2835 16.8245 10.4143 16.7238L15.9888 12.3881C16.0992 12.302 16.1875 12.1909 16.2466 12.0639C16.3057 11.9369 16.3338 11.7978 16.3286 11.6578C16.3234 11.5179 16.2851 11.3812 16.2168 11.259C16.1485 11.1367 16.0522 11.0324 15.9357 10.9547L10.3612 7.23839C10.2282 7.15075 10.0739 7.10067 9.9147 7.09344C9.75552 7.08621 9.59734 7.1221 9.45687 7.19733C9.3164 7.27255 9.19884 7.38431 9.11662 7.5208C9.0344 7.65729 8.99057 7.81346 8.98975 7.9728Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "2.75",
    y: "2.75",
    width: "18.5",
    height: "18.5",
    rx: "6",
    stroke: "currentColor",
    "stroke-width": "1.5"
  }));
};
var _default = PlaySquareIcon;
exports.default = _default;