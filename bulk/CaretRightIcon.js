"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CaretRightIcon = _ref => {
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
    d: "M16.7499 11.9888C16.7547 12.2425 16.707 12.4944 16.6098 12.7288C16.5114 12.9632 16.365 13.1744 16.1799 13.3488L9.35985 19.4488C9.17763 19.6127 8.95198 19.7204 8.70994 19.7588H8.51988C8.34152 19.7615 8.1645 19.7275 7.99986 19.6588C7.77724 19.5591 7.58936 19.3955 7.45994 19.1888C7.32222 18.9889 7.24886 18.7516 7.24986 18.5088V5.5088C7.24745 5.26271 7.32085 5.02183 7.45994 4.8188C7.58931 4.61205 7.77717 4.44842 7.99974 4.34871C8.22231 4.249 8.46955 4.2177 8.70994 4.2588C8.94981 4.29801 9.1744 4.40169 9.35985 4.55879L16.1199 10.6488C16.3103 10.811 16.4638 11.0122 16.5699 11.2388C16.684 11.4726 16.7454 11.7286 16.7499 11.9888Z",
    fill: "currentColor"
  }));
};
var _default = CaretRightIcon;
exports.default = _default;