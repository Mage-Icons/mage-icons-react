"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CaretDownIcon = _ref => {
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
    d: "M19.6964 8.71988C19.6618 8.95814 19.5575 9.18084 19.3965 9.35989L13.3065 16.1199C13.1462 16.3107 12.9488 16.4672 12.7264 16.5799C12.4988 16.6902 12.2494 16.7482 11.9965 16.7499C11.759 16.7537 11.5237 16.706 11.3065 16.6099C11.072 16.5163 10.8605 16.373 10.6865 16.1899L4.58643 9.35989C4.42472 9.18012 4.31731 8.95821 4.2765 8.71988C4.24315 8.47852 4.27776 8.23265 4.37647 8.00989C4.4723 7.78526 4.63228 7.59393 4.83643 7.4599C5.04044 7.33078 5.2752 7.25828 5.51649 7.24988H18.5165C18.758 7.25681 18.993 7.32943 19.1964 7.4599C19.4016 7.59548 19.5646 7.78607 19.6665 8.00989C19.7474 8.23822 19.7577 8.48554 19.6964 8.71988Z",
    fill: "currentColor"
  }));
};
var _default = CaretDownIcon;
exports.default = _default;