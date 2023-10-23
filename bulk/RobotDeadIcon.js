"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RobotDeadIcon = _ref => {
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
    d: "M22.0776 8.34729C21.9404 8.20495 21.774 8.09406 21.5899 8.02221V4.64678C21.5899 4.45658 21.5144 4.27416 21.3799 4.13967C21.2454 4.00518 21.0629 3.92963 20.8727 3.92963C20.6825 3.92963 20.5002 4.00518 20.3657 4.13967C20.2312 4.27416 20.1556 4.45658 20.1556 4.64678V7.85004H19.9452C19.6094 6.71821 18.9169 5.72515 17.971 5.01872C17.025 4.31229 15.8763 3.9303 14.6957 3.92963H9.42698C8.24637 3.9303 7.09751 4.31229 6.15158 5.01872C5.20565 5.72515 4.51327 6.71821 4.17742 7.85004H3.90008V4.64678C3.90008 4.45658 3.82459 4.27416 3.6901 4.13967C3.5556 4.00518 3.37313 3.92963 3.18293 3.92963C2.99273 3.92963 2.81037 4.00518 2.67588 4.13967C2.54139 4.27416 2.46578 4.45658 2.46578 4.64678V8.03173C2.29104 8.10631 2.13205 8.21341 1.99725 8.34729C1.67997 8.66819 1.50139 9.10086 1.5 9.55212V14.4479C1.5 14.8993 1.67933 15.3322 1.99853 15.6514C2.31772 15.9706 2.75066 16.15 3.20207 16.15H4.15828C4.49412 17.2818 5.18662 18.2748 6.13255 18.9813C7.07848 19.6877 8.22723 20.0697 9.40784 20.0704H14.5905C15.7711 20.0697 16.9199 19.6877 17.8658 18.9813C18.8117 18.2748 19.5042 17.2818 19.8401 16.15H20.7963C21.2477 16.15 21.6806 15.9706 21.9998 15.6514C22.319 15.3322 22.4983 14.8993 22.4983 14.4479V9.55212C22.5177 9.11144 22.367 8.68015 22.0776 8.34729ZM3.99568 14.7156H3.24036C3.20501 14.7162 3.16988 14.7096 3.13706 14.6965C3.10423 14.6834 3.0743 14.6639 3.04905 14.6391C3.00075 14.5871 2.97354 14.5189 2.97259 14.4479V9.55212C2.97131 9.51821 2.97678 9.48437 2.98858 9.45255C3.00039 9.42074 3.01825 9.39157 3.04134 9.3667C3.06443 9.34183 3.0922 9.32177 3.12305 9.30764C3.1539 9.29351 3.1873 9.28559 3.22122 9.28435H3.99568C3.99094 9.32565 3.99094 9.36736 3.99568 9.40866V14.5913C3.99094 14.6326 3.99094 14.6743 3.99568 14.7156ZM8.61423 12.0765C8.45795 12.2245 8.25094 12.3069 8.03574 12.3069C7.82054 12.3069 7.61342 12.2245 7.45714 12.0765C7.30473 11.9225 7.21926 11.7146 7.21926 11.498C7.21926 11.2813 7.30473 11.0735 7.45714 10.9195L7.8875 10.4892L7.45714 10.0589C7.30532 9.90653 7.22019 9.70025 7.22019 9.48518C7.22019 9.2701 7.30532 9.06382 7.45714 8.91148C7.61111 8.75907 7.8191 8.67353 8.03574 8.67353C8.25238 8.67353 8.46026 8.75907 8.61423 8.91148L9.04447 9.34172L9.47484 8.91148C9.54841 8.82869 9.63804 8.76177 9.7384 8.71491C9.83876 8.66805 9.94774 8.64218 10.0585 8.63893C10.1692 8.63567 10.2793 8.65507 10.3822 8.69595C10.4852 8.73682 10.5787 8.79831 10.657 8.87663C10.7353 8.95495 10.7968 9.04846 10.8377 9.1514C10.8786 9.25435 10.898 9.3646 10.8948 9.47531C10.8915 9.58603 10.8657 9.69489 10.8188 9.79525C10.7719 9.89561 10.705 9.9853 10.6222 10.0589L10.192 10.4892L10.6222 10.9195C10.7355 11.0331 10.8126 11.1778 10.8438 11.3352C10.875 11.4926 10.8589 11.6557 10.7976 11.804C10.7362 11.9522 10.6323 12.079 10.499 12.1684C10.3657 12.2577 10.209 12.3056 10.0485 12.306C9.83454 12.308 9.62841 12.2256 9.47484 12.0765L9.04447 11.6462L8.61423 12.0765ZM13.969 16.7332H10.0485C9.83297 16.7332 9.62621 16.6476 9.47378 16.4952C9.32136 16.3427 9.23578 16.136 9.23578 15.9204C9.23578 15.7049 9.32136 15.4982 9.47378 15.3457C9.62621 15.1933 9.83297 15.1077 10.0485 15.1077H13.969C14.1845 15.1077 14.3913 15.1933 14.5437 15.3457C14.6961 15.4982 14.7817 15.7049 14.7817 15.9204C14.7817 16.136 14.6961 16.3427 14.5437 16.4952C14.3913 16.6476 14.1845 16.7332 13.969 16.7332ZM16.6559 10.9195C16.8084 11.0735 16.8938 11.2813 16.8938 11.498C16.8938 11.7146 16.8084 11.9225 16.6559 12.0765C16.4997 12.2245 16.2925 12.3069 16.0773 12.3069C15.8621 12.3069 15.6551 12.2245 15.4989 12.0765L15.0686 11.6462L14.6382 12.0765C14.4847 12.2256 14.2785 12.308 14.0646 12.306C13.9041 12.3056 13.7474 12.2577 13.6141 12.1684C13.4808 12.079 13.3769 11.9522 13.3155 11.804C13.2542 11.6557 13.2381 11.4926 13.2693 11.3352C13.3005 11.1778 13.3776 11.0331 13.4909 10.9195L13.9211 10.4892L13.4909 10.0589C13.4081 9.9853 13.3411 9.89561 13.2943 9.79525C13.2474 9.69489 13.2216 9.58603 13.2183 9.47531C13.215 9.3646 13.2345 9.25435 13.2754 9.1514C13.3163 9.04846 13.3777 8.95495 13.4561 8.87663C13.5344 8.79831 13.6279 8.73682 13.7308 8.69595C13.8338 8.65507 13.9439 8.63567 14.0546 8.63893C14.1653 8.64218 14.2743 8.66805 14.3747 8.71491C14.475 8.76177 14.5647 8.82869 14.6382 8.91148L15.0686 9.34172L15.4989 8.91148C15.6528 8.75907 15.8607 8.67353 16.0773 8.67353C16.294 8.67353 16.502 8.75907 16.6559 8.91148C16.8078 9.06382 16.8929 9.2701 16.8929 9.48518C16.8929 9.70025 16.8078 9.90653 16.6559 10.0589L16.2256 10.4892L16.6559 10.9195ZM21.1405 14.4479C21.1395 14.5189 21.1123 14.5871 21.064 14.6391C21.0388 14.6639 21.0089 14.6834 20.976 14.6965C20.9432 14.7096 20.9081 14.7162 20.8727 14.7156H20.1174C20.1221 14.6743 20.1221 14.6326 20.1174 14.5913V9.37044C20.1221 9.32914 20.1221 9.28743 20.1174 9.24613H20.8823C20.9162 9.24582 20.9498 9.25246 20.981 9.26562C21.0123 9.27877 21.0406 9.29817 21.064 9.32264C21.1123 9.37472 21.1395 9.44287 21.1405 9.51389V14.4479Z",
    fill: "currentColor"
  }));
};
var _default = RobotDeadIcon;
exports.default = _default;