"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RobotHappyIcon = _ref => {
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
    d: "M21.7496 8.42833C21.6173 8.29859 21.4653 8.19053 21.2994 8.10817V4.87664C21.2994 4.67763 21.2203 4.48677 21.0796 4.34605C20.9389 4.20533 20.748 4.12628 20.549 4.12628C20.3517 4.12891 20.1635 4.20913 20.0249 4.34956C19.8863 4.49 19.8086 4.67935 19.8087 4.87664V7.92809H19.6386C19.2992 6.82867 18.617 5.86664 17.6918 5.18262C16.7665 4.49859 15.6468 4.12845 14.4961 4.12628H9.49377C8.34315 4.12845 7.22339 4.49859 6.29816 5.18262C5.37293 5.86664 4.69073 6.82867 4.35131 7.92809H4.19126V4.87664C4.19126 4.67763 4.11221 4.48677 3.97149 4.34605C3.83077 4.20533 3.63991 4.12628 3.4409 4.12628C3.2419 4.12628 3.05104 4.20533 2.91032 4.34605C2.7696 4.48677 2.69055 4.67763 2.69055 4.87664V8.09817C2.51897 8.17086 2.36531 8.28013 2.24032 8.41833C2.08272 8.57567 1.95819 8.76292 1.874 8.9691C1.78981 9.17527 1.74768 9.39621 1.7501 9.6189V14.3712C1.74877 14.5949 1.79186 14.8166 1.87687 15.0236C1.96187 15.2305 2.08713 15.4186 2.24533 15.5768C2.40353 15.735 2.5915 15.8602 2.79845 15.9452C3.0054 16.0302 3.22719 16.0733 3.45092 16.072H4.35131C4.69073 17.1714 5.37293 18.1334 6.29816 18.8174C7.22339 19.5015 8.34315 19.8716 9.49377 19.8738H14.4961C15.643 19.8736 16.76 19.5078 17.6847 18.8295C18.6095 18.1512 19.2939 17.1958 19.6386 16.102H20.549C20.9994 16.0998 21.4309 15.92 21.7496 15.6017C22.0688 15.2836 22.2487 14.8518 22.2498 14.4012V9.64891C22.2531 9.42224 22.2104 9.19725 22.1245 8.98749C22.0385 8.77773 21.911 8.58753 21.7496 8.42833ZM7.46283 11.7599C7.27649 11.5725 7.17186 11.3189 7.17186 11.0546C7.17186 10.7903 7.27649 10.5367 7.46283 10.3492L8.4133 9.39879C8.60075 9.21245 8.85428 9.10785 9.11859 9.10785C9.3829 9.10785 9.63649 9.21245 9.82394 9.39879L10.7744 10.3492C10.9115 10.4891 11.0045 10.6661 11.042 10.8583C11.0794 11.0505 11.0597 11.2495 10.9851 11.4306C10.9106 11.6117 10.7845 11.7669 10.6225 11.877C10.4606 11.9871 10.2699 12.0473 10.0741 12.05C9.94239 12.0508 9.81186 12.0256 9.68997 11.9758C9.56807 11.926 9.45719 11.8526 9.3637 11.7599L9.1236 11.5198L8.87348 11.7599C8.68603 11.9463 8.43244 12.0508 8.16813 12.0508C7.90381 12.0508 7.65029 11.9463 7.46283 11.7599ZM14.5962 15.7618C14.2542 16.1046 13.848 16.3765 13.4008 16.562C12.9536 16.7475 12.4741 16.843 11.9899 16.843C11.5058 16.843 11.0264 16.7475 10.5792 16.562C10.132 16.3765 9.72572 16.1046 9.38373 15.7618C9.19534 15.5747 9.089 15.3205 9.08806 15.055C9.08712 14.7895 9.19166 14.5345 9.37872 14.3461C9.56579 14.1577 9.82005 14.0514 10.0855 14.0504C10.351 14.0495 10.606 14.1541 10.7944 14.3411C11.1164 14.6488 11.5446 14.8204 11.9899 14.8204C12.4353 14.8204 12.8635 14.6488 13.1855 14.3411C13.3739 14.1541 13.6289 14.0495 13.8944 14.0504C14.1599 14.0514 14.4142 14.1577 14.6012 14.3461C14.7883 14.5345 14.8928 14.7895 14.8919 15.055C14.891 15.3205 14.7846 15.5747 14.5962 15.7618ZM16.4771 11.7599C16.2897 11.9463 16.0361 12.0508 15.7718 12.0508C15.5075 12.0508 15.2539 11.9463 15.0664 11.7599L14.8263 11.5198L14.5762 11.7599C14.3848 11.9238 14.1386 12.0095 13.8868 11.9997C13.6351 11.99 13.3962 11.8856 13.218 11.7074C13.0398 11.5293 12.9354 11.2904 12.9257 11.0386C12.916 10.7868 13.0017 10.5406 13.1656 10.3492L14.166 9.39879C14.3535 9.21245 14.607 9.10785 14.8713 9.10785C15.1356 9.10785 15.3892 9.21245 15.5767 9.39879L16.5772 10.3492C16.7508 10.5496 16.8378 10.8108 16.8191 11.0753C16.8003 11.3398 16.6773 11.586 16.4771 11.7599Z",
    fill: "currentColor"
  }));
};
var _default = RobotHappyIcon;
exports.default = _default;