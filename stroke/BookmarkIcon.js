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
    d: "M11.6044 17.1057L6.65329 21.0615C6.56286 21.1336 6.45454 21.1798 6.33991 21.1951C6.22528 21.2103 6.10864 21.1942 6.00248 21.1483C5.89632 21.1024 5.80463 21.0286 5.7372 20.9346C5.66977 20.8407 5.62915 20.7302 5.61967 20.6149V5.30213C5.61967 4.62526 5.88856 3.97612 6.36718 3.4975C6.84579 3.01888 7.49494 2.75 8.1718 2.75H15.8282C16.5051 2.75 17.1542 3.01888 17.6328 3.4975C18.1114 3.97612 18.3803 4.62526 18.3803 5.30213V20.6149C18.3798 20.7345 18.3456 20.8516 18.2817 20.9527C18.2179 21.0538 18.1268 21.1349 18.0191 21.1868C17.9113 21.2387 17.7911 21.2593 17.6722 21.2461C17.5534 21.233 17.4406 21.1867 17.3467 21.1126L12.3956 17.1568C12.2912 17.0559 12.1543 16.9953 12.0094 16.986C11.8645 16.9766 11.7209 17.0191 11.6044 17.1057Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
var _default = BookmarkIcon;
exports.default = _default;