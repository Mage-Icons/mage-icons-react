"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ThreadsIcon = _ref => {
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
    d: "M20.7418 8.18134L19.1119 8.61397C19.1078 8.57719 19.1078 8.54007 19.1119 8.50329C18.9289 7.84779 18.6617 7.21875 18.3171 6.63191C17.6193 5.46798 16.5267 4.59325 15.2384 4.16692C14.5552 3.94072 13.8443 3.80871 13.1255 3.77453C12.5968 3.72417 12.0645 3.72417 11.5358 3.77453C10.7144 3.85297 9.91362 4.07787 9.17145 4.43857C8.1926 4.92706 7.38294 5.69816 6.84732 6.65203C6.47671 7.30583 6.20544 8.01113 6.04242 8.74476C5.89474 9.329 5.79713 9.92477 5.75065 10.5256C5.71547 11.1053 5.71547 11.6865 5.75065 12.2662C5.77101 13.2883 5.92663 14.3033 6.21346 15.2845C6.4348 16.0283 6.77453 16.7315 7.21958 17.3672C7.84334 18.2442 8.71612 18.9137 9.72482 19.2889C10.3446 19.5268 10.995 19.6758 11.6566 19.7316C12.3022 19.7969 12.9528 19.7969 13.5984 19.7316C14.353 19.675 15.0902 19.477 15.7716 19.148C16.5495 18.7817 17.2135 18.2115 17.6933 17.498C17.9938 17.0743 18.192 16.5866 18.2723 16.0734C18.3526 15.5602 18.3128 15.0353 18.1561 14.54C17.9758 13.92 17.5843 13.3825 17.0494 13.0208L16.6972 12.7692C16.6972 12.9 16.6972 13.0107 16.6469 13.1214C16.5461 13.7426 16.3384 14.3417 16.0332 14.8922C15.7684 15.3935 15.3906 15.8264 14.9296 16.1565C14.4685 16.4865 13.937 16.7047 13.377 16.7937C12.6413 16.9387 11.8812 16.9007 11.1636 16.683C10.5815 16.5231 10.051 16.2145 9.62421 15.7876C9.14673 15.3095 8.85134 14.6796 8.78913 14.0068C8.71424 13.4341 8.80526 12.8519 9.05137 12.3293C9.29747 11.8068 9.68834 11.3659 10.1776 11.0588C10.6742 10.741 11.2277 10.5223 11.8075 10.4149C12.3927 10.3193 12.9855 10.2789 13.5783 10.2942C14.0332 10.3045 14.4869 10.3448 14.9365 10.4149H15.017C15.017 10.4149 15.017 10.4149 15.017 10.3546C14.9612 9.97414 14.8313 9.60838 14.6347 9.27801C14.4983 9.05098 14.3159 8.85495 14.0994 8.70249C13.8828 8.55002 13.6368 8.44448 13.377 8.39262C12.7671 8.20672 12.1156 8.20672 11.5056 8.39262C11.0616 8.53866 10.6769 8.82458 10.409 9.20758L10.3587 9.34843L8.98029 8.39262C9.00707 8.36152 9.03066 8.32782 9.05072 8.29201C9.63834 7.47614 10.5174 6.91772 11.5056 6.73252C12.3489 6.54237 13.2276 6.58057 14.0511 6.8432C14.5173 6.98259 14.9494 7.21734 15.3201 7.53256C15.6907 7.84778 15.9918 8.2366 16.2042 8.67433C16.4571 9.1726 16.6238 9.71009 16.6972 10.264C16.6972 10.4753 16.7475 10.6866 16.7677 10.8979V10.9783L17.1802 11.1796C17.829 11.5056 18.4042 11.961 18.8704 12.5177C19.3676 13.0946 19.7134 13.7861 19.8766 14.5299C19.9587 14.9709 19.9858 15.4204 19.9571 15.8681C19.8877 17.0253 19.4346 18.1264 18.6692 18.9971C17.704 20.1333 16.3928 20.9215 14.9365 21.2408C13.7082 21.5139 12.4418 21.5717 11.1938 21.4118C10.2359 21.3014 9.30376 21.0292 8.43699 20.6069C7.29395 20.0474 6.32389 19.1886 5.62991 18.1218C5.11735 17.3286 4.73362 16.4593 4.493 15.5461C4.30877 14.8869 4.17756 14.214 4.10061 13.5339C4.03573 12.9458 4.00215 12.3547 4 11.7631C4 11.1896 4 10.6061 4.10061 10.0225C4.17655 9.36439 4.29756 8.71223 4.46281 8.07066C4.67046 7.25002 4.98862 6.46139 5.40857 5.72641C6.28929 4.17189 7.7279 3.0102 9.43304 2.47664C10.0341 2.27507 10.6545 2.13681 11.2843 2.06413C12.0802 1.97862 12.883 1.97862 13.6789 2.06413C14.6183 2.16559 15.5355 2.41695 16.3954 2.80866C17.662 3.37263 18.7408 4.28732 19.5043 5.44469C20.0459 6.27087 20.4534 7.17752 20.7116 8.13103C20.717 8.15021 20.7274 8.16759 20.7418 8.18134ZM15.0774 12.2058H15.0069C14.6747 12.1385 14.3387 12.0914 14.0008 12.065C13.6456 12.0448 13.2895 12.0448 12.9343 12.065C12.5367 12.0677 12.141 12.1218 11.7572 12.2259C11.4051 12.3199 11.0852 12.5077 10.8315 12.7692C10.7007 12.8996 10.5989 13.0561 10.5329 13.2286C10.4669 13.4011 10.4382 13.5856 10.4487 13.77C10.4591 13.9544 10.5085 14.1345 10.5936 14.2984C10.6787 14.4624 10.7975 14.6064 10.9422 14.7211C11.1682 14.8996 11.4285 15.0297 11.7069 15.1034C12.1245 15.2088 12.559 15.2293 12.9846 15.1638C13.2764 15.1273 13.5593 15.0387 13.8197 14.9022C14.2087 14.6685 14.5121 14.3157 14.685 13.8961C14.9097 13.3552 15.0423 12.7804 15.0774 12.1958V12.2058Z",
    fill: "currentColor"
  }));
};
var _default = ThreadsIcon;
exports.default = _default;