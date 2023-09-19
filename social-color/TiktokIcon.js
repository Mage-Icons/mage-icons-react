"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TiktokIcon = _ref => {
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
    d: "M19.7745 6.32657C19.7697 6.19464 19.7166 6.06907 19.6252 5.97379C19.5338 5.87852 19.4106 5.82019 19.279 5.80992C18.4024 5.72824 17.5661 5.40321 16.8644 4.87152C16.3438 4.47689 15.9082 3.98115 15.5839 3.41404C15.2596 2.84693 15.0532 2.22015 14.9771 1.57131C14.9668 1.43969 14.9085 1.31644 14.8132 1.22505C14.7179 1.13367 14.5924 1.08052 14.4604 1.07574H12.3517C12.2829 1.07573 12.2149 1.08943 12.1515 1.11605C12.0881 1.14268 12.0307 1.18168 11.9826 1.23077C11.9344 1.27987 11.8966 1.33808 11.8713 1.40199C11.8459 1.46589 11.8336 1.53421 11.835 1.60294V14.1923C11.8291 14.7754 11.641 15.3421 11.2968 15.8129C10.9527 16.2837 10.4699 16.6351 9.91604 16.8177C9.57631 16.9292 9.21861 16.9757 8.86166 16.9547C8.41106 16.93 7.97322 16.7962 7.58586 16.5646C7.03091 16.2361 6.6056 15.7269 6.38105 15.1224C6.15649 14.5178 6.14632 13.8545 6.35223 13.2433C6.56342 12.6358 6.97482 12.1181 7.51892 11.7752C8.06302 11.4323 8.70751 11.2844 9.34668 11.356C9.41743 11.3634 9.48896 11.3558 9.55658 11.3337C9.62421 11.3116 9.68641 11.2755 9.73914 11.2278C9.79187 11.18 9.83394 11.1217 9.86261 11.0565C9.89127 10.9914 9.90589 10.921 9.9055 10.8499V8.38262C9.9055 8.38262 9.00927 8.31935 8.7035 8.31935C7.91938 8.3157 7.14431 8.48701 6.43477 8.8208C5.72523 9.1546 5.09909 9.64247 4.60196 10.2489C3.94086 10.9606 3.46949 11.8272 3.23126 12.7688C2.9868 13.7574 3.00408 14.7927 3.28141 15.7726C3.55874 16.7525 4.08654 17.6432 4.81283 18.3571C4.98684 18.5324 5.17363 18.6945 5.37165 18.8421C6.41359 19.6458 7.6934 20.0798 9.00928 20.0757C9.30914 20.0759 9.60864 20.0548 9.9055 20.0125C11.1571 19.8269 12.3169 19.247 13.2163 18.3571C13.7661 17.8176 14.2039 17.1747 14.5042 16.4653C14.8046 15.756 14.9617 14.9942 14.9665 14.2239V7.28606C16.1839 8.22553 17.6505 8.78651 19.1841 8.89926C19.2554 8.90366 19.3269 8.89319 19.394 8.86854C19.4611 8.84388 19.5224 8.80556 19.5739 8.75601C19.6255 8.70646 19.6661 8.64675 19.6934 8.58066C19.7207 8.51457 19.7339 8.44355 19.7323 8.37207V6.32657H19.7745Z",
    fill: "#74F0EF"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M21.4346 7.75082C21.4299 7.61889 21.3767 7.49333 21.2853 7.39805C21.1939 7.30277 21.0707 7.24445 20.9391 7.23418C20.0625 7.15249 19.2262 6.82747 18.5246 6.29578C18.0039 5.90115 17.5684 5.4054 17.244 4.8383C16.9197 4.27119 16.7133 3.64441 16.6372 2.99556C16.6269 2.86394 16.5686 2.7407 16.4733 2.64931C16.3781 2.55792 16.2525 2.50478 16.1206 2.5H14.0118C13.943 2.49999 13.875 2.51369 13.8116 2.54031C13.7482 2.56693 13.6908 2.60593 13.6427 2.65503C13.5946 2.70413 13.5567 2.76234 13.5314 2.82624C13.5061 2.89015 13.4937 2.95846 13.4951 3.02719V15.6165C13.4893 16.1997 13.3011 16.7663 12.957 17.2372C12.6128 17.708 12.13 18.0593 11.5762 18.2419C11.2364 18.3534 10.8787 18.3999 10.5218 18.379C10.0712 18.3543 9.63334 18.2204 9.24599 17.9889C8.69104 17.6603 8.26572 17.1512 8.04117 16.5466C7.81662 15.9421 7.80645 15.2787 8.01236 14.6676C8.22355 14.0601 8.63494 13.5424 9.17904 13.1995C9.72314 12.8565 10.3676 12.7087 11.0068 12.7802C11.0776 12.7876 11.1491 12.7801 11.2167 12.758C11.2843 12.7359 11.3465 12.6998 11.3993 12.652C11.452 12.6043 11.4941 12.5459 11.5227 12.4808C11.5514 12.4157 11.566 12.3453 11.5656 12.2741V9.80687C11.5656 9.80687 10.6694 9.74361 10.3636 9.74361C9.5795 9.73995 8.80444 9.91127 8.0949 10.2451C7.38536 10.5789 6.75921 11.0667 6.26208 11.6731C5.60099 12.3848 5.12961 13.2514 4.89139 14.1931C4.64692 15.1817 4.66421 16.2169 4.94153 17.1968C5.21886 18.1767 5.74667 19.0675 6.47296 19.7813C6.64697 19.9566 6.83375 20.1187 7.03178 20.2663C8.07371 21.07 9.35352 21.5041 10.6694 21.5C10.9693 21.5002 11.2688 21.479 11.5656 21.4367C12.8172 21.2512 13.977 20.6713 14.8764 19.7813C15.4263 19.2418 15.864 18.5989 16.1644 17.8896C16.4648 17.1802 16.6219 16.4185 16.6267 15.6482V8.71031C17.844 9.64979 19.3106 10.2108 20.8442 10.3235C20.9156 10.3279 20.987 10.3174 21.0541 10.2928C21.1213 10.2681 21.1825 10.2298 21.234 10.1803C21.2856 10.1307 21.3263 10.071 21.3535 10.0049C21.3808 9.93883 21.3941 9.8678 21.3925 9.79633V7.75082H21.4346Z",
    fill: "#ED515D"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.3573 7.75082C20.3526 7.61889 20.2994 7.49333 20.208 7.39805C20.1166 7.30277 19.9934 7.24445 19.8618 7.23418C18.9852 7.15249 18.1489 6.82747 17.4472 6.29578C16.9266 5.90115 16.4911 5.4054 16.1667 4.8383C15.8424 4.27119 15.636 3.64441 15.5599 2.99556C15.5496 2.86394 15.4913 2.7407 15.396 2.64931C15.3007 2.55792 15.1752 2.50478 15.0432 2.5H12.9345C12.8657 2.49999 12.7977 2.51369 12.7343 2.54031C12.6709 2.56693 12.6135 2.60593 12.5654 2.65503C12.5173 2.70413 12.4794 2.76234 12.4541 2.82624C12.4288 2.89015 12.4164 2.95846 12.4178 3.02719V15.6165C12.412 16.1997 12.2238 16.7663 11.8796 17.2372C11.5355 17.708 11.0527 18.0593 10.4989 18.2419C10.1591 18.3534 9.80142 18.3999 9.44447 18.379C8.99387 18.3543 8.55603 18.2204 8.16867 17.9889C7.61372 17.6603 7.18841 17.1512 6.96386 16.5466C6.7393 15.9421 6.72913 15.2787 6.93504 14.6676C7.14623 14.0601 7.55763 13.5424 8.10173 13.1995C8.64582 12.8565 9.29032 12.7087 9.92949 12.7802C10.0002 12.7876 10.0718 12.7801 10.1394 12.758C10.207 12.7359 10.2692 12.6998 10.322 12.652C10.3747 12.6043 10.4168 12.5459 10.4454 12.4808C10.4741 12.4157 10.4887 12.3453 10.4883 12.2741V9.80687C10.4883 9.80687 9.59208 9.74361 9.28631 9.74361C8.50219 9.73995 7.72712 9.91127 7.01758 10.2451C6.30804 10.5789 5.6819 11.0667 5.18477 11.6731C4.52367 12.3848 4.0523 13.2514 3.81407 14.1931C3.5696 15.1817 3.58689 16.2169 3.86422 17.1968C4.14155 18.1767 4.66935 19.0675 5.39564 19.7813C5.56965 19.9566 5.75644 20.1187 5.95446 20.2663C6.9964 21.07 8.27621 21.5041 9.59208 21.5C9.89195 21.5002 10.1914 21.479 10.4883 21.4367C11.7399 21.2512 12.8997 20.6713 13.7991 19.7813C14.3489 19.2418 14.7867 18.5989 15.087 17.8896C15.3874 17.1802 15.5446 16.4185 15.5493 15.6482V8.71031C16.7667 9.64979 18.2333 10.2108 19.7669 10.3235C19.8382 10.3279 19.9097 10.3174 19.9768 10.2928C20.0439 10.2681 20.1052 10.2298 20.1567 10.1803C20.2083 10.1307 20.249 10.071 20.2762 10.0049C20.3035 9.93883 20.3167 9.8678 20.3152 9.79633V7.75082H20.3573Z",
    fill: "black"
  }));
};
var _default = TiktokIcon;
exports.default = _default;