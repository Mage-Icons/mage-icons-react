"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SlackIcon = _ref => {
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
    d: "M16.9233 16.5198C16.1226 16.5198 15.3328 16.5198 14.5321 16.5198C14.259 16.54 13.9848 16.5035 13.7264 16.4125C13.468 16.3215 13.2311 16.178 13.0305 15.9909C12.8299 15.8038 12.6699 15.5771 12.5605 15.3251C12.4511 15.0731 12.3946 14.8011 12.3946 14.5262C12.3946 14.2513 12.4511 13.9793 12.5605 13.7273C12.6699 13.4753 12.8299 13.2487 13.0305 13.0616C13.2311 12.8745 13.468 12.7309 13.7264 12.6399C13.9848 12.5489 14.259 12.5124 14.5321 12.5327H19.3902C19.8571 12.5275 20.3108 12.6883 20.6711 12.9865C21.0314 13.2846 21.2752 13.7011 21.3594 14.1623C21.4468 14.6017 21.3804 15.0579 21.1714 15.4538C20.9624 15.8497 20.6237 16.161 20.2125 16.3351C19.9351 16.4521 19.6369 16.5113 19.3361 16.5089C18.5354 16.5306 17.7348 16.5198 16.9233 16.5198Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.48831 17.0195C7.48831 16.1939 7.48831 15.3682 7.48831 14.5425C7.48528 14.0198 7.68634 13.5166 8.04837 13.1409C8.4104 12.7652 8.9046 12.5469 9.42505 12.5327C9.93985 12.515 10.4406 12.7029 10.8178 13.0552C11.195 13.4074 11.4178 13.8953 11.4375 14.4122C11.4808 16.1504 11.4808 17.8887 11.4375 19.6269C11.4294 19.8867 11.3692 20.1422 11.2606 20.378C11.1519 20.6139 10.997 20.8254 10.8051 20.9998C10.6132 21.1743 10.3883 21.3081 10.1437 21.3932C9.89916 21.4784 9.64002 21.5132 9.38177 21.4955C8.86614 21.4785 8.37802 21.2579 8.02349 20.8815C7.66895 20.5052 7.47663 20.0036 7.48831 19.4857C7.47749 18.6709 7.48831 17.8452 7.48831 17.0195Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.4255 7.05712C16.4255 7.87193 16.4255 8.67587 16.4255 9.49068C16.4456 9.7634 16.4095 10.0373 16.3194 10.2954C16.2293 10.5535 16.0871 10.7901 15.9018 10.9904C15.7165 11.1908 15.492 11.3507 15.2423 11.46C14.9927 11.5693 14.7233 11.6257 14.4509 11.6257C14.1786 11.6257 13.9092 11.5693 13.6595 11.46C13.4099 11.3507 13.1854 11.1908 13 10.9904C12.8147 10.7901 12.6725 10.5535 12.5824 10.2954C12.4923 10.0373 12.4562 9.7634 12.4763 9.49068C12.4763 7.80675 12.4763 6.13367 12.4763 4.4606C12.4805 4.20097 12.5361 3.94478 12.6399 3.70696C12.7437 3.46915 12.8937 3.25448 13.081 3.07548C13.2684 2.89647 13.4893 2.75673 13.731 2.66439C13.9727 2.57205 14.2303 2.52897 14.4888 2.53766C14.7474 2.5419 15.0026 2.59726 15.2399 2.70057C15.4772 2.80388 15.6919 2.95311 15.8718 3.13975C16.0516 3.32639 16.1931 3.54678 16.2881 3.78833C16.3831 4.02987 16.4298 4.28785 16.4255 4.54751C16.4364 5.38405 16.4255 6.22059 16.4255 7.05712Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.96927 11.5114H4.54563C4.28703 11.5114 4.03096 11.4603 3.79205 11.3609C3.55313 11.2615 3.33605 11.1159 3.15319 10.9323C2.97033 10.7487 2.82528 10.5307 2.72632 10.2908C2.62736 10.0509 2.57642 9.79381 2.57642 9.53415C2.57642 9.27449 2.62736 9.01738 2.72632 8.77748C2.82528 8.53759 2.97033 8.31962 3.15319 8.13601C3.33605 7.95241 3.55313 7.80676 3.79205 7.7074C4.03096 7.60803 4.28703 7.55688 4.54563 7.55688C6.17942 7.55688 7.79158 7.55688 9.46865 7.55688C9.72725 7.55688 9.98332 7.60803 10.2222 7.7074C10.4611 7.80676 10.6782 7.95241 10.8611 8.13601C11.0439 8.31962 11.189 8.53759 11.288 8.77748C11.3869 9.01738 11.4379 9.27449 11.4379 9.53415C11.4379 9.79381 11.3869 10.0509 11.288 10.2908C11.189 10.5307 11.0439 10.7487 10.8611 10.9323C10.6782 11.1159 10.4611 11.2615 10.2222 11.3609C9.98332 11.4603 9.72725 11.5114 9.46865 11.5114H6.96927Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.4484 5.34061C11.4484 5.71316 11.4484 5.85784 11.4484 6.24233C11.4484 6.42207 11.3873 6.50307 11.232 6.50307C10.4324 6.50307 10.1045 6.50307 9.16537 6.50307C8.66619 6.44047 8.21158 6.18315 7.89979 5.78674C7.58801 5.39033 7.44408 4.88666 7.49912 4.38457C7.52211 3.89278 7.72699 3.42729 8.0737 3.07915C8.42041 2.73101 8.884 2.52527 9.37379 2.50218C9.86357 2.47908 10.3443 2.64029 10.722 2.95427C11.0997 3.26825 11.3471 3.71242 11.4159 4.19988C11.4484 4.57812 11.4484 4.68597 11.4484 5.03125V5.24538L11.4484 5.34061Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.43883 12.5435C6.4987 13.3572 6.4987 14.1743 6.43883 14.988C6.34654 15.4638 6.07673 15.8862 5.68456 16.1689C5.29239 16.4516 4.80747 16.5733 4.32896 16.5089C3.83513 16.4684 3.37409 16.2444 3.03594 15.8808C2.69779 15.5172 2.50685 15.04 2.50041 14.5425C2.49024 14.0471 2.6678 13.5662 2.9972 13.1971C3.32659 12.8281 3.78325 12.5983 4.27486 12.5544C5.01061 12.4892 5.74636 12.5435 6.43883 12.5435Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.4426 11.5006C17.4426 10.7401 17.4426 10.0122 17.4426 9.32774C17.4947 8.81945 17.7418 8.35149 18.1316 8.02298C18.5214 7.69446 19.0232 7.53119 19.5308 7.56776C20.053 7.56776 20.5539 7.77608 20.9232 8.14689C21.2925 8.5177 21.5 9.02062 21.5 9.54502C21.5 10.0694 21.2925 10.5724 20.9232 10.9432C20.5539 11.314 20.053 11.5223 19.5308 11.5223C18.8599 11.5223 18.1675 11.5006 17.4426 11.5006Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.4763 17.5736C13.2761 17.519 14.0786 17.519 14.8783 17.5736C15.3656 17.6639 15.7987 17.9413 16.0856 18.347C16.3724 18.7527 16.4905 19.2547 16.4147 19.7464C16.3557 20.2369 16.1169 20.6878 15.7449 21.0112C15.3728 21.3345 14.8942 21.5072 14.4022 21.4955C13.9133 21.4937 13.4433 21.3052 13.0877 20.9683C12.732 20.6314 12.5173 20.1713 12.4871 19.6812C12.4438 18.9859 12.4763 18.2798 12.4763 17.5736Z",
    fill: "currentColor"
  }));
};
var _default = SlackIcon;
exports.default = _default;