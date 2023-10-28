"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ScreencastIcon = _ref => {
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
    d: "M4.59739 21.071C4.49863 21.0723 4.40061 21.0539 4.3091 21.0167C4.21759 20.9795 4.13444 20.9243 4.0646 20.8545C3.99475 20.7846 3.93958 20.7015 3.9024 20.61C3.86523 20.5185 3.84679 20.4205 3.84814 20.3217C3.84553 20.0311 3.72891 19.753 3.52339 19.5475C3.31786 19.342 3.0399 19.2254 2.74925 19.2228C2.55054 19.2228 2.3599 19.1439 2.21939 19.0034C2.07887 18.8629 2 18.6723 2 18.4736C2 18.2748 2.07887 18.0843 2.21939 17.9438C2.3599 17.8032 2.55054 17.7243 2.74925 17.7243C3.43732 17.7269 4.09646 18.0014 4.583 18.4879C5.06954 18.9745 5.34401 19.6336 5.34665 20.3217C5.34665 20.5204 5.26765 20.711 5.12714 20.8515C4.98663 20.992 4.79611 21.071 4.59739 21.071Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.55441 21.0709C7.3557 21.0709 7.16518 20.992 7.02466 20.8515C6.88415 20.711 6.80516 20.5204 6.80516 20.3217C6.80252 19.2468 6.37439 18.2167 5.61432 17.4566C4.85425 16.6965 3.82415 16.2684 2.74925 16.2657C2.55054 16.2657 2.3599 16.1868 2.21939 16.0463C2.07887 15.9058 2 15.7152 2 15.5165C2 15.3178 2.07887 15.1272 2.21939 14.9867C2.3599 14.8461 2.55054 14.7672 2.74925 14.7672C3.47918 14.7664 4.20216 14.909 4.87714 15.1868C6.22814 15.7576 7.3033 16.8328 7.87416 18.1838C8.15199 18.8588 8.29447 19.5818 8.29367 20.3117C8.29634 20.4104 8.27925 20.5088 8.2433 20.6008C8.20735 20.6928 8.15332 20.7766 8.0844 20.8474C8.01549 20.9182 7.93299 20.9744 7.84197 21.0128C7.75095 21.0512 7.6532 21.071 7.55441 21.0709Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.6913 21.0709C10.5925 21.0723 10.4945 21.0538 10.403 21.0167C10.3115 20.9795 10.2284 20.9243 10.1585 20.8545C10.0887 20.7846 10.0335 20.7015 9.99632 20.61C9.95914 20.5185 9.94071 20.4204 9.94205 20.3217C9.94205 18.414 9.18418 16.5845 7.83526 15.2355C6.48634 13.8866 4.65692 13.1288 2.74925 13.1288C2.55054 13.1288 2.3599 13.0499 2.21939 12.9094C2.07887 12.7689 2 12.5783 2 12.3796C2 12.1808 2.07887 11.9903 2.21939 11.8498C2.3599 11.7092 2.55054 11.6303 2.74925 11.6303C5.05353 11.633 7.26258 12.5495 8.89195 14.1789C10.5213 15.8082 11.4379 18.0174 11.4406 20.3217C11.4406 20.5204 11.3617 20.711 11.2212 20.8515C11.0807 20.992 10.89 21.0709 10.6913 21.0709Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.9801 7.37454V16.6154C21.9775 17.7936 21.5082 18.9228 20.675 19.756C19.8419 20.5891 18.7127 21.0583 17.5345 21.0609H13.9081C13.802 21.0619 13.6969 21.04 13.6001 20.9968C13.5032 20.9536 13.4168 20.89 13.3466 20.8104C13.2765 20.7308 13.2243 20.637 13.1936 20.5355C13.1629 20.4339 13.1545 20.3269 13.1688 20.2218C13.2434 18.8034 13.0147 17.3853 12.4979 16.0623C11.9811 14.7393 11.1881 13.5417 10.1718 12.5494C9.26613 11.5548 8.13414 10.7931 6.87164 10.3288C5.60914 9.86451 4.25331 9.71126 2.91903 9.88206C2.81118 9.90559 2.69937 9.90436 2.59208 9.8784C2.48479 9.85244 2.38482 9.80247 2.29965 9.73225C2.21237 9.66299 2.14187 9.57484 2.09343 9.47451C2.04499 9.37417 2.01985 9.26422 2.0199 9.1528V7.37454C2.02254 6.19632 2.49186 5.06713 3.325 4.23399C4.15813 3.40086 5.28732 2.93165 6.46555 2.92902H17.5545C18.7319 2.93427 19.8597 3.40429 20.6922 4.23686C21.5248 5.06943 21.9948 6.19712 22 7.37454H21.9801Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.6913 21.0709C10.5925 21.0723 10.4945 21.0538 10.403 21.0167C10.3115 20.9795 10.2284 20.9243 10.1585 20.8545C10.0887 20.7846 10.0335 20.7015 9.99632 20.61C9.95914 20.5185 9.94071 20.4204 9.94205 20.3217C9.94205 18.414 9.18418 16.5845 7.83526 15.2355C6.48634 13.8866 4.65692 13.1288 2.74925 13.1288C2.55054 13.1288 2.3599 13.0499 2.21939 12.9094C2.07887 12.7689 2 12.5783 2 12.3796C2 12.1808 2.07887 11.9903 2.21939 11.8498C2.3599 11.7092 2.55054 11.6303 2.74925 11.6303C5.05353 11.633 7.26258 12.5495 8.89195 14.1789C10.5213 15.8082 11.4379 18.0174 11.4406 20.3217C11.4406 20.5204 11.3617 20.711 11.2212 20.8515C11.0807 20.992 10.89 21.0709 10.6913 21.0709Z",
    fill: "currentColor"
  }));
};
var _default = ScreencastIcon;
exports.default = _default;