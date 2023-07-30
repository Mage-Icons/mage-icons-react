"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageRoundIcon = _ref => {
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
    d: "M21.99 12.0005C21.994 13.3151 21.7356 14.6172 21.23 15.8306C20.7329 17.0461 19.9948 18.1482 19.06 19.0706C18.1329 19.9995 17.032 20.7368 15.82 21.2405C14.6066 21.7461 13.3045 22.0045 11.99 22.0005C10.6562 22.0062 9.33542 21.7373 8.10999 21.2105L4.46003 21.7505C4.14743 21.802 3.82697 21.7761 3.52668 21.6751C3.22639 21.5742 2.95539 21.4012 2.73737 21.1714C2.51936 20.9415 2.36097 20.6618 2.27601 20.3566C2.19105 20.0514 2.18212 19.73 2.25001 19.4206L2.75001 15.7705C2.25077 14.5769 1.99903 13.2943 2.01002 12.0005C2.00603 10.6893 2.26444 9.39043 2.77003 8.18054C3.26962 6.96587 4.00356 5.86151 4.93 4.93054C5.86303 4.00411 6.9667 3.26722 8.18 2.76055C10.0077 2.00351 12.019 1.80559 13.9592 2.19186C15.8995 2.57813 17.6816 3.53121 19.08 4.93054C20.0172 5.85472 20.7556 6.96068 21.25 8.18054C21.7487 9.39184 22.0003 10.6906 21.99 12.0005Z",
    fill: "currentColor"
  }));
};
var _default = MessageRoundIcon;
exports.default = _default;