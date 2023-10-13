"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NoteIcon = _ref => {
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
    d: "M20.5694 3.42004C20.1187 2.96717 19.5825 2.60846 18.9919 2.36468C18.4014 2.1209 17.7683 1.99695 17.1294 2.00006H6.88937C5.60123 2.0027 4.3666 2.51559 3.45575 3.42645C2.54489 4.3373 2.032 5.5719 2.02936 6.86004V17.1301C2.03199 18.4191 2.54457 19.6548 3.45514 20.5673C4.36571 21.4797 5.60032 21.9948 6.88937 22.0001H13.2394C13.6102 21.9967 13.9768 21.922 14.3194 21.7801L14.4794 21.7001L14.5594 21.6501C14.8085 21.5296 15.0351 21.3672 15.2294 21.17L21.2294 15.17C21.433 14.9692 21.6019 14.7361 21.7294 14.48L21.8094 14.3101C21.8137 14.2702 21.8137 14.2299 21.8094 14.1901C21.9165 13.8952 21.9707 13.5838 21.9694 13.2701V6.93005C21.9845 6.28085 21.8683 5.63533 21.6277 5.03216C21.3871 4.429 21.0271 3.88062 20.5694 3.42004ZM14.5694 19.61L14.2294 16.86C14.1915 16.5227 14.229 16.1811 14.3394 15.86C14.4492 15.5238 14.6378 15.2186 14.8894 14.97C15.1412 14.7152 15.4495 14.5234 15.7894 14.41C16.1263 14.2932 16.4856 14.2555 16.8394 14.3L19.5894 14.6401L14.5694 19.61Z",
    fill: "currentColor"
  }));
};
var _default = NoteIcon;
exports.default = _default;