"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BookmarkIcon = _ref => {
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
    d: "M19.105 5.32486V20.6349C19.108 20.8935 19.035 21.1474 18.895 21.3649C18.7748 21.5669 18.6033 21.7336 18.3977 21.8478C18.1922 21.9619 17.9601 22.0196 17.725 22.0149H17.565C17.3095 21.9844 17.0672 21.884 16.865 21.7249L11.945 17.7949L7.10501 21.6649C6.9089 21.8206 6.67435 21.9205 6.42616 21.9539C6.17797 21.9874 5.92535 21.9531 5.69501 21.8549C5.46243 21.754 5.26186 21.5915 5.11501 21.3849C4.96909 21.1818 4.87941 20.9437 4.85501 20.6949V5.32486C4.85685 4.88778 4.9463 4.45551 5.11806 4.05359C5.28982 3.65167 5.5404 3.28828 5.85501 2.98486C6.46942 2.35732 7.30687 1.9979 8.18501 1.98486H15.845C16.7211 1.98751 17.5605 2.33741 18.1791 2.95787C18.7977 3.57833 19.145 4.41872 19.145 5.29486L19.105 5.32486Z",
    fill: "currentColor"
  }));
};
var _default = BookmarkIcon;
exports.default = _default;