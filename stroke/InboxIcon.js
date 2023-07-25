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
    d: "M21.25 13.0278L19.585 6.36778C19.4744 5.92042 19.2167 5.52319 18.8532 5.23988C18.4898 4.95657 18.0417 4.80361 17.5808 4.80556H6.41917C5.95834 4.80361 5.51023 4.95657 5.14677 5.23988C4.78331 5.52319 4.5256 5.92042 4.415 6.36778L2.75 13.0278",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.25 13.0278V17.1389C21.25 17.684 21.0334 18.2069 20.6479 18.5924C20.2625 18.9779 19.7396 19.1944 19.1944 19.1944H4.80556C4.26039 19.1944 3.73755 18.9779 3.35206 18.5924C2.96657 18.2069 2.75 17.684 2.75 17.1389V13.0278H8.91667L9.49222 14.4461C9.6284 14.719 9.83823 14.9483 10.098 15.1082C10.3577 15.268 10.657 15.352 10.9619 15.3505H13.0175C13.3225 15.352 13.6218 15.268 13.8815 15.1082C14.1412 14.9483 14.351 14.719 14.4872 14.4461L15.0833 13.0278H21.25Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = InboxIcon;
exports.default = _default;