"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TrophyUpIcon = _ref => {
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
    d: "M21.0429 4.54596C20.7869 4.3099 20.4867 4.12728 20.1598 4.00873C19.8329 3.89017 19.4858 3.83806 19.1386 3.8554H17.7128C17.5616 3.40812 17.297 3.00804 16.9451 2.69447C16.4196 2.2184 15.728 1.97018 15.021 2.00391H8.92927C8.57738 1.98477 8.22522 2.03598 7.89319 2.15452C7.56117 2.27306 7.25582 2.45658 6.99501 2.69447C6.64084 3.0041 6.37863 3.40582 6.23728 3.8554H4.83158C4.47965 3.83571 4.12725 3.88661 3.79515 4.00518C3.46304 4.12375 3.15783 4.30761 2.89733 4.54596C2.62795 4.7881 2.40971 5.08204 2.25558 5.41039C2.10145 5.73874 2.01453 6.09481 2 6.4575C2.01424 7.75038 2.35743 9.01814 2.99701 10.1404C3.64604 11.2863 4.55031 12.2659 5.6391 13.0027L6.48653 13.5732L7.12463 13.9635C7.65167 14.7868 8.36578 15.4728 9.20833 15.9651V17.7265H8.81961C8.10615 17.7293 7.42229 18.0133 6.91529 18.5172C6.66493 18.7679 6.46641 19.0659 6.33123 19.394C6.19606 19.722 6.12686 20.0737 6.12762 20.4287V20.7589C6.12629 20.9223 6.15736 21.0843 6.21902 21.2354C6.28068 21.3866 6.37171 21.5239 6.48677 21.6394C6.60184 21.7549 6.73866 21.8463 6.88925 21.9082C7.03984 21.9701 7.20118 22.0013 7.3639 22H16.6361C16.9632 21.9973 17.2761 21.8657 17.5074 21.6336C17.7387 21.4014 17.8698 21.0873 17.8724 20.7589V20.4287C17.8731 20.0737 17.8039 19.722 17.6688 19.394C17.5336 19.0659 17.3351 18.7679 17.0847 18.5172C16.5777 18.0133 15.894 17.7293 15.1805 17.7265H14.7917V15.9551C15.6372 15.4631 16.3546 14.7772 16.8854 13.9535L17.5434 13.5532L18.3509 13.0027C19.4452 12.2651 20.3533 11.2817 21.003 10.1304C21.6454 8.99477 21.9886 7.71336 22 6.40744C21.9379 5.68455 21.5939 5.01555 21.0429 4.54596ZM4.26322 9.41986C3.7686 8.53248 3.50457 7.53435 3.49551 6.51754C3.50419 6.35954 3.54391 6.20481 3.61235 6.06225C3.68079 5.9197 3.77662 5.79212 3.89434 5.68686C4.01524 5.57694 4.15707 5.49276 4.3113 5.43944C4.46553 5.38611 4.62897 5.36474 4.79167 5.37661H6.09768V10.7209C6.10567 11.0055 6.12903 11.2895 6.16754 11.5716C5.3868 10.9993 4.7374 10.2655 4.26322 9.41986ZM14.7817 9.15965C14.6415 9.30021 14.4514 9.37918 14.2532 9.37918C14.0551 9.37918 13.865 9.30021 13.7248 9.15965L12.7278 8.15884V11.5416C12.7278 11.7406 12.6491 11.9316 12.5088 12.0723C12.3686 12.2131 12.1784 12.2922 11.98 12.2922C11.7817 12.2922 11.5916 12.2131 11.4514 12.0723C11.3111 11.9316 11.2323 11.7406 11.2323 11.5416V8.15884L10.2353 9.15965C10.0951 9.30165 9.90451 9.38197 9.70538 9.38291C9.50625 9.38385 9.31499 9.30533 9.17353 9.16465C9.03206 9.02398 8.95199 8.83265 8.95105 8.63276C8.95012 8.43288 9.02839 8.2408 9.16854 8.0988L11.1625 6.09719C11.2785 5.98668 11.4137 5.89851 11.5614 5.837C11.7067 5.7765 11.8626 5.74584 12.02 5.7469C12.1771 5.74763 12.3327 5.77822 12.4785 5.837C12.6244 5.89628 12.7568 5.9848 12.8674 6.09719L14.8614 8.0988C14.9853 8.24876 15.0462 8.4412 15.0313 8.63542C15.0164 8.82964 14.9269 9.01045 14.7817 9.13964V9.15965ZM19.667 9.41986C19.1904 10.2607 18.5454 10.9933 17.7727 11.5716C17.8112 11.2828 17.8344 10.9922 17.8424 10.7009V5.37661H19.1784C19.4962 5.3661 19.8063 5.47697 20.0459 5.68686C20.273 5.88665 20.4155 6.16582 20.4446 6.46748C20.4387 7.50185 20.1712 8.51777 19.667 9.41986Z",
    fill: "currentColor"
  }));
};
var _default = TrophyUpIcon;
exports.default = _default;