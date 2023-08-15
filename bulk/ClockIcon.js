"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ClockIcon = _ref => {
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
    d: "M12 1.75C9.97276 1.75 7.99104 2.35115 6.30544 3.47743C4.61983 4.60372 3.30609 6.20456 2.53029 8.0775C1.75449 9.95044 1.55142 12.0114 1.94692 13.9997C2.34242 15.988 3.31873 17.8144 4.75221 19.2478C6.1857 20.6813 8.01208 21.6575 10.0004 22.053C11.9887 22.4485 14.0496 22.2456 15.9225 21.4698C17.7954 20.694 19.3963 19.3802 20.5226 17.6946C21.6489 16.009 22.25 14.0273 22.25 12C22.2474 9.28234 21.1666 6.67676 19.2449 4.75508C17.3232 2.83341 14.7177 1.75265 12 1.75ZM15.88 15.88C15.7874 15.9745 15.6769 16.0497 15.5551 16.1012C15.4332 16.1526 15.3024 16.1794 15.1701 16.18C14.9063 16.1762 14.6546 16.0684 14.47 15.88L11.01 12.42V5.67999C11.01 5.41478 11.1153 5.16042 11.3029 4.97289C11.4904 4.78535 11.7448 4.67999 12.01 4.67999C12.2752 4.67999 12.5296 4.78535 12.7172 4.97289C12.9047 5.16042 13.01 5.41478 13.01 5.67999V11.6L15.88 14.47C16.0663 14.6574 16.1708 14.9108 16.1708 15.175C16.1708 15.4392 16.0663 15.6926 15.88 15.88Z",
    fill: "currentColor"
  }));
};
var _default = ClockIcon;
exports.default = _default;