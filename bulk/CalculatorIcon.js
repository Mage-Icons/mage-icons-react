"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CalculatorIcon = _ref => {
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
    d: "M16 2H8C6.74022 2 5.53203 2.50045 4.64124 3.39125C3.75044 4.28205 3.25 5.49022 3.25 6.75V17.25C3.25 18.5098 3.75044 19.718 4.64124 20.6088C5.53203 21.4996 6.74022 22 8 22H16C17.259 21.9974 18.4656 21.4961 19.3558 20.6059C20.2461 19.7156 20.7474 18.509 20.75 17.25V6.75C20.7474 5.49103 20.2461 4.28439 19.3558 3.39417C18.4656 2.50394 17.259 2.00264 16 2ZM8.5 18.75H7.5C7.30109 18.75 7.11032 18.671 6.96967 18.5303C6.82901 18.3897 6.75 18.1989 6.75 18C6.75 17.8011 6.82901 17.6103 6.96967 17.4697C7.11032 17.329 7.30109 17.25 7.5 17.25H8.5C8.69891 17.25 8.88968 17.329 9.03033 17.4697C9.17099 17.6103 9.25 17.8011 9.25 18C9.25 18.1989 9.17099 18.3897 9.03033 18.5303C8.88968 18.671 8.69891 18.75 8.5 18.75ZM8.5 16.25H7.5C7.30109 16.25 7.11032 16.171 6.96967 16.0303C6.82901 15.8897 6.75 15.6989 6.75 15.5C6.75 15.3011 6.82901 15.1103 6.96967 14.9697C7.11032 14.829 7.30109 14.75 7.5 14.75H8.5C8.69891 14.75 8.88968 14.829 9.03033 14.9697C9.17099 15.1103 9.25 15.3011 9.25 15.5C9.25 15.6989 9.17099 15.8897 9.03033 16.0303C8.88968 16.171 8.69891 16.25 8.5 16.25ZM8.5 13.75H7.5C7.30109 13.75 7.11032 13.671 6.96967 13.5303C6.82901 13.3897 6.75 13.1989 6.75 13C6.75 12.8011 6.82901 12.6103 6.96967 12.4697C7.11032 12.329 7.30109 12.25 7.5 12.25H8.5C8.69891 12.25 8.88968 12.329 9.03033 12.4697C9.17099 12.6103 9.25 12.8011 9.25 13C9.25 13.1989 9.17099 13.3897 9.03033 13.5303C8.88968 13.671 8.69891 13.75 8.5 13.75ZM12.5 18.75H11.5C11.3011 18.75 11.1103 18.671 10.9697 18.5303C10.829 18.3897 10.75 18.1989 10.75 18C10.75 17.8011 10.829 17.6103 10.9697 17.4697C11.1103 17.329 11.3011 17.25 11.5 17.25H12.5C12.6989 17.25 12.8897 17.329 13.0303 17.4697C13.171 17.6103 13.25 17.8011 13.25 18C13.25 18.1989 13.171 18.3897 13.0303 18.5303C12.8897 18.671 12.6989 18.75 12.5 18.75ZM12.5 16.25H11.5C11.3011 16.25 11.1103 16.171 10.9697 16.0303C10.829 15.8897 10.75 15.6989 10.75 15.5C10.75 15.3011 10.829 15.1103 10.9697 14.9697C11.1103 14.829 11.3011 14.75 11.5 14.75H12.5C12.6989 14.75 12.8897 14.829 13.0303 14.9697C13.171 15.1103 13.25 15.3011 13.25 15.5C13.25 15.6989 13.171 15.8897 13.0303 16.0303C12.8897 16.171 12.6989 16.25 12.5 16.25ZM12.5 13.75H11.5C11.3011 13.75 11.1103 13.671 10.9697 13.5303C10.829 13.3897 10.75 13.1989 10.75 13C10.75 12.8011 10.829 12.6103 10.9697 12.4697C11.1103 12.329 11.3011 12.25 11.5 12.25H12.5C12.6989 12.25 12.8897 12.329 13.0303 12.4697C13.171 12.6103 13.25 12.8011 13.25 13C13.25 13.1989 13.171 13.3897 13.0303 13.5303C12.8897 13.671 12.6989 13.75 12.5 13.75ZM16.5 18.75H15.5C15.3011 18.75 15.1103 18.671 14.9697 18.5303C14.829 18.3897 14.75 18.1989 14.75 18C14.75 17.8011 14.829 17.6103 14.9697 17.4697C15.1103 17.329 15.3011 17.25 15.5 17.25H16.5C16.6989 17.25 16.8897 17.329 17.0303 17.4697C17.171 17.6103 17.25 17.8011 17.25 18C17.25 18.1989 17.171 18.3897 17.0303 18.5303C16.8897 18.671 16.6989 18.75 16.5 18.75ZM16.5 16.25H15.5C15.3011 16.25 15.1103 16.171 14.9697 16.0303C14.829 15.8897 14.75 15.6989 14.75 15.5C14.75 15.3011 14.829 15.1103 14.9697 14.9697C15.1103 14.829 15.3011 14.75 15.5 14.75H16.5C16.6989 14.75 16.8897 14.829 17.0303 14.9697C17.171 15.1103 17.25 15.3011 17.25 15.5C17.25 15.6989 17.171 15.8897 17.0303 16.0303C16.8897 16.171 16.6989 16.25 16.5 16.25ZM16.5 13.75H15.5C15.3011 13.75 15.1103 13.671 14.9697 13.5303C14.829 13.3897 14.75 13.1989 14.75 13C14.75 12.8011 14.829 12.6103 14.9697 12.4697C15.1103 12.329 15.3011 12.25 15.5 12.25H16.5C16.6989 12.25 16.8897 12.329 17.0303 12.4697C17.171 12.6103 17.25 12.8011 17.25 13C17.25 13.1989 17.171 13.3897 17.0303 13.5303C16.8897 13.671 16.6989 13.75 16.5 13.75ZM17.75 8.39C17.7553 8.61458 17.7163 8.83801 17.6353 9.04752C17.5542 9.25702 17.4327 9.44849 17.2776 9.61101C17.1225 9.77352 16.9369 9.90389 16.7314 9.99466C16.526 10.0854 16.3046 10.1348 16.08 10.14H7.91003C7.6859 10.1348 7.46501 10.0854 7.26007 9.99448C7.05513 9.90359 6.87017 9.77307 6.71588 9.61041C6.56159 9.44776 6.44098 9.25619 6.36102 9.04674C6.28107 8.83729 6.24335 8.61409 6.25 8.39V6.39C6.23924 5.93813 6.40781 5.50039 6.71887 5.17245C7.02994 4.84452 7.45823 4.65309 7.91003 4.64H16.08C16.5327 4.65309 16.9619 4.84421 17.2746 5.17184C17.5873 5.49948 17.7581 5.93719 17.75 6.39V8.39Z",
    fill: "currentColor"
  }));
};
var _default = CalculatorIcon;
exports.default = _default;