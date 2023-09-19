"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SnapchatIcon = _ref => {
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
    d: "M21.7401 5.45735C21.7551 5.27401 21.7551 5.08974 21.7401 4.9064C21.6341 4.15563 21.2555 3.47006 20.6765 2.98022C20.0974 2.49037 19.3584 2.23047 18.6001 2.24999H5.41959C5.11384 2.25801 4.81 2.30093 4.51399 2.37789C3.84817 2.56059 3.26304 2.96154 2.85249 3.51639C2.44194 4.07125 2.22976 4.74786 2.24998 5.43768C2.24998 7.62183 2.24998 9.80599 2.24998 11.9901V18.5131C2.24642 18.7809 2.27283 19.0482 2.32873 19.31C2.48291 20.0201 2.88183 20.6535 3.45579 21.0995C4.02975 21.5455 4.74226 21.7757 5.46881 21.75H18.5312C18.9196 21.7528 19.3057 21.6896 19.673 21.5631C20.2882 21.3569 20.821 20.959 21.1931 20.4277C21.5652 19.8964 21.7569 19.2598 21.7401 18.6115C21.75 14.194 21.7401 9.82567 21.7401 5.45735ZM18.4141 16.3711C18.0997 16.5502 17.8776 16.6103 17.537 16.7323C17.4665 16.7503 17.4012 16.7846 17.3465 16.8324C17.2918 16.8803 17.2491 16.9404 17.222 17.0078C17.1485 17.2114 17.0152 17.3879 16.8396 17.5144C16.6639 17.6408 16.454 17.7111 16.2376 17.7162L15.4206 17.7654C14.9739 17.8284 14.5487 17.997 14.1803 18.2573C13.643 18.6118 13.0251 18.8255 12.3835 18.8788C11.7419 18.9321 11.0972 18.8233 10.5087 18.5623C10.2826 18.4731 10.0678 18.3576 9.86886 18.2179C9.36779 17.8855 8.77709 17.7138 8.17578 17.726C7.99406 17.7292 7.81254 17.7127 7.63438 17.6768C7.45804 17.6492 7.29252 17.5742 7.15555 17.4599C7.01857 17.3455 6.91528 17.196 6.85674 17.0275C6.83279 16.95 6.78798 16.8805 6.72722 16.8268C6.66647 16.773 6.59209 16.7369 6.51222 16.7225C6.08953 16.6261 5.69726 16.4267 5.37037 16.142C5.24793 16.0486 5.15229 15.9246 5.09309 15.7825C5.0339 15.6403 5.01324 15.4851 5.03321 15.3325C5.05317 15.1798 5.11305 15.0351 5.20681 14.913C5.30057 14.7908 5.42489 14.6955 5.56724 14.6367C5.92161 14.4301 6.27598 14.2333 6.61066 13.9972C7.02115 13.7004 7.35792 13.3133 7.59501 12.8658C7.74266 12.5706 7.73282 12.5411 7.46704 12.364C7.20127 12.1869 6.90596 11.9901 6.65987 11.7737C6.47653 11.6226 6.34351 11.4193 6.27846 11.1909C6.21341 10.9625 6.21941 10.7196 6.29566 10.4947C6.3811 10.1959 6.57738 9.94099 6.84445 9.78192C7.11152 9.62285 7.42926 9.57164 7.73282 9.63874H7.91984C7.83308 8.99077 7.90212 8.33146 8.12125 7.71549C8.34037 7.09952 8.70326 6.54464 9.17981 6.09686C9.9659 5.43518 10.9677 5.08507 11.9951 5.113C12.5884 5.0935 13.1791 5.20104 13.7275 5.42843C14.2758 5.65581 14.7692 5.99777 15.1745 6.43137C15.5529 6.87989 15.8354 7.40107 16.0047 7.96281C16.174 8.52456 16.2264 9.11499 16.1589 9.69777C16.3815 9.67788 16.6055 9.67788 16.8282 9.69777C17.0614 9.72353 17.281 9.82045 17.4571 9.97537C17.6333 10.1303 17.7574 10.3357 17.8126 10.5636C17.8774 10.7857 17.8765 11.0218 17.8102 11.2435C17.7438 11.4652 17.6147 11.663 17.4385 11.8131C17.1689 12.0393 16.8863 12.2496 16.592 12.4427C16.3656 12.5903 16.3557 12.6198 16.4739 12.8658C16.8362 13.5345 17.3873 14.082 18.0587 14.4399L18.4918 14.6761C18.6473 14.7469 18.7796 14.8603 18.8734 15.0032C18.9672 15.1461 19.0186 15.3125 19.0217 15.4834C19.0248 15.6542 18.9794 15.8224 18.8909 15.9686C18.8023 16.1147 18.6742 16.2328 18.5213 16.3093L18.4141 16.3711Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.8323 15.3156C17.8323 15.3845 17.7338 15.4829 17.6551 15.5124C17.3401 15.6403 17.0251 15.7682 16.6707 15.8666C16.5445 15.8851 16.4289 15.9475 16.3442 16.0429C16.2596 16.1383 16.2114 16.2605 16.2081 16.388C16.2082 16.4285 16.1999 16.4685 16.1839 16.5057C16.1678 16.5429 16.1443 16.5763 16.1147 16.604C16.0852 16.6317 16.0503 16.653 16.0121 16.6666C15.974 16.6802 15.9335 16.6859 15.8931 16.6832L14.9087 16.752C14.4061 16.836 13.9286 17.0309 13.511 17.3227C13.0247 17.641 12.4539 17.8056 11.8728 17.7951C11.2916 17.7846 10.7271 17.5994 10.2528 17.2636C9.66505 16.8893 8.98089 16.6944 8.28405 16.7028H8.23483C7.85094 16.7028 7.80172 16.6438 7.74266 16.2699C7.73727 16.1953 7.71018 16.1239 7.66471 16.0645C7.61924 16.005 7.55737 15.9602 7.48673 15.9354C7.31939 15.8666 7.15205 15.8272 6.98471 15.7583C6.81737 15.6895 6.55159 15.6009 6.34488 15.5025C6.13817 15.4042 6.15785 15.3845 6.15785 15.3058C6.15785 15.2271 6.25629 15.1582 6.33504 15.1188C6.99503 14.8088 7.58205 14.3629 8.05765 13.8103C8.35729 13.4499 8.57854 13.0311 8.70732 12.5805C8.74851 12.4867 8.75424 12.3811 8.72347 12.2834C8.6927 12.1857 8.6275 12.1025 8.53998 12.0492C8.27421 11.8721 7.99859 11.695 7.74266 11.5081C7.60707 11.4131 7.48171 11.3043 7.3686 11.1834C7.32117 11.1156 7.29573 11.0349 7.29573 10.9522C7.29573 10.8695 7.32117 10.7888 7.3686 10.721C7.40401 10.6505 7.46198 10.5937 7.53332 10.5599C7.60465 10.526 7.68526 10.5169 7.76235 10.5341C7.96509 10.5761 8.16552 10.6286 8.3628 10.6915L8.49219 10.721L8.625 10.7774C8.90062 10.8757 8.89435 10.7407 8.88451 10.4554C8.84015 9.81663 8.84015 9.17559 8.88451 8.53685C8.95151 8.02616 9.16455 7.54564 9.49805 7.15298C9.83154 6.76031 10.2713 6.47219 10.7646 6.32318C11.6066 6.00608 12.5393 6.0308 13.3633 6.39205C13.8991 6.59573 14.3583 6.96075 14.6774 7.43663C14.9966 7.9125 15.16 8.47574 15.145 9.04845C15.145 9.32393 15.145 9.58957 15.145 9.86505C15.145 10.1209 15.145 10.3668 15.145 10.6226C15.145 10.8784 15.1942 10.9079 15.4206 10.8292L16.09 10.6029C16.1746 10.5881 16.2612 10.5881 16.3459 10.6029C16.4207 10.5956 16.496 10.6103 16.5625 10.6452C16.6289 10.6802 16.6837 10.7339 16.7199 10.7997C16.7686 10.8632 16.795 10.9411 16.795 11.0211C16.795 11.1011 16.7686 11.1789 16.7199 11.2424C16.6107 11.3665 16.4887 11.4787 16.3557 11.577C16.1293 11.7344 15.8931 11.8721 15.6568 12.0295C15.4206 12.187 15.2828 12.3739 15.4108 12.7576C15.6403 13.4651 16.084 14.0839 16.6806 14.5285C16.9956 14.7745 17.1866 14.8748 17.543 15.1172C17.6944 15.2202 17.8421 15.2467 17.8323 15.3156Z",
    fill: "currentColor"
  }));
};
var _default = SnapchatIcon;
exports.default = _default;