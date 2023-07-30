"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageIcon = _ref => {
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
    d: "M22.045 7.76952L21.995 14.07C21.9963 14.6913 21.874 15.3066 21.635 15.88C21.3993 16.4523 21.0526 16.9723 20.6149 17.4099C20.1773 17.8476 19.6573 18.1943 19.085 18.43C18.5116 18.669 17.8963 18.7914 17.275 18.7901H14.945L12.945 20.7901C12.8212 20.92 12.6712 21.0223 12.505 21.09C12.3323 21.1688 12.1448 21.2097 11.955 21.21C11.7663 21.2093 11.5795 21.1719 11.405 21.1C11.2307 21.0228 11.0741 20.9104 10.945 20.77L8.99501 18.83H6.66505C6.04568 18.83 5.4324 18.7079 4.8603 18.4706C4.28821 18.2332 3.7685 17.8854 3.331 17.447C2.89351 17.0085 2.54679 16.4881 2.31068 15.9155C2.07457 15.3429 1.95371 14.7294 1.95503 14.11V7.51002C1.95384 6.88986 2.07514 6.27557 2.31196 5.7024C2.54878 5.12924 2.89645 4.60848 3.33503 4.17002C4.22241 3.29308 5.41749 2.79786 6.66505 2.79005H17.325C17.9452 2.78873 18.5596 2.90991 19.1328 3.14665C19.7061 3.38338 20.2269 3.73101 20.6655 4.16957C21.104 4.60812 21.4517 5.12897 21.6884 5.70222C21.9252 6.27547 22.0463 6.88981 22.045 7.51002V7.76952Z",
    fill: "currentColor"
  }));
};
var _default = MessageIcon;
exports.default = _default;