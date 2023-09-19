"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WeChatIcon = _ref => {
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
    d: "M16.2779 8.11927C15.7122 6.74801 14.7373 5.58461 13.4861 4.78772C12.235 3.99082 10.7685 3.59922 9.28666 3.66632C5.27134 3.66632 2 6.46719 2 9.91358C2.01593 10.8548 2.2578 11.7785 2.70525 12.6067C3.1527 13.435 3.79262 14.1436 4.57112 14.6729L3.70679 16.4015C3.67162 16.4826 3.6625 16.5726 3.6807 16.6591C3.69889 16.7456 3.74349 16.8244 3.80835 16.8844C3.87321 16.9445 3.95512 16.9829 4.04276 16.9944C4.1304 17.0059 4.21945 16.9899 4.2976 16.9486L6.48578 15.6904C7.08439 15.8985 7.7047 16.038 8.33479 16.1061C9.18818 16.1061 8.55361 15.012 8.65208 14.4978C8.65208 11.2812 11.8359 8.66632 15.7418 8.66632C15.8172 8.68718 15.8967 8.68748 15.9722 8.66717C16.0477 8.64687 16.1164 8.6067 16.1711 8.55086C16.2259 8.49502 16.2646 8.42553 16.2834 8.34963C16.3022 8.27373 16.3003 8.19419 16.2779 8.11927ZM6.55143 8.64443C6.22063 8.64443 5.90339 8.51303 5.66948 8.27912C5.43557 8.04521 5.30416 7.72796 5.30416 7.39717C5.3099 7.07018 5.44384 6.75853 5.67713 6.52933C5.91041 6.30013 6.22439 6.17174 6.55143 6.17179C6.88222 6.17179 7.19946 6.30319 7.43337 6.5371C7.66728 6.77101 7.79869 7.08826 7.79869 7.41905C7.79295 7.74604 7.65901 8.05769 7.42573 8.28689C7.19244 8.51608 6.87846 8.64448 6.55143 8.64443ZM11.5514 8.64443C11.2206 8.64443 10.9034 8.51303 10.6695 8.27912C10.4356 8.04521 10.3042 7.72796 10.3042 7.39717C10.3042 7.06637 10.4356 6.74913 10.6695 6.51522C10.9034 6.28131 11.2206 6.14991 11.5514 6.14991C11.8822 6.14991 12.1995 6.28131 12.4334 6.51522C12.6673 6.74913 12.7987 7.06637 12.7987 7.39717C12.7988 7.72236 12.6719 8.03473 12.4451 8.26771C12.2182 8.5007 11.9093 8.63588 11.5842 8.64443H11.5514Z",
    fill: "currentColor"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 14.4978C22 11.7407 19.1991 9.4978 15.7527 9.4978C12.3064 9.4978 9.49454 11.686 9.49454 14.4978C9.49454 17.3096 12.3064 19.4978 15.7527 19.4978C16.3986 19.5 17.0422 19.4192 17.6674 19.2571L19.7352 20.2965C19.8115 20.335 19.8977 20.349 19.9823 20.3367C20.0668 20.3245 20.1455 20.2865 20.2076 20.2279C20.2698 20.1693 20.3124 20.093 20.3297 20.0094C20.347 19.9257 20.338 19.8388 20.3042 19.7604L19.7462 18.349C20.4113 17.9438 20.9654 17.3798 21.3587 16.7076C21.7521 16.0354 21.9725 15.2761 22 14.4978ZM13.663 13.6663C13.5538 13.6663 13.4457 13.6448 13.3448 13.603C13.2439 13.5612 13.1523 13.5 13.0751 13.4228C12.9978 13.3455 12.9366 13.2539 12.8948 13.153C12.853 13.0521 12.8315 12.944 12.8315 12.8348C12.8315 12.7256 12.853 12.6175 12.8948 12.5166C12.9366 12.4157 12.9978 12.324 13.0751 12.2468C13.1523 12.1696 13.2439 12.1084 13.3448 12.0666C13.4457 12.0248 13.5538 12.0033 13.663 12.0033C13.8846 12.0033 14.0972 12.0905 14.2549 12.2461C14.4126 12.4018 14.5026 12.6133 14.5055 12.8348C14.5026 13.0563 14.4126 13.2678 14.2549 13.4234C14.0972 13.5791 13.8846 13.6663 13.663 13.6663ZM17.8315 13.6663C17.611 13.6663 17.3995 13.5787 17.2435 13.4228C17.0876 13.2668 17 13.0553 17 12.8348C17 12.6143 17.0876 12.4028 17.2435 12.2468C17.3995 12.0909 17.611 12.0033 17.8315 12.0033C18.052 12.0033 18.2635 12.0909 18.4195 12.2468C18.5754 12.4028 18.663 12.6143 18.663 12.8348C18.663 13.0553 18.5754 13.2668 18.4195 13.4228C18.2635 13.5787 18.052 13.6663 17.8315 13.6663Z",
    fill: "currentColor"
  }));
};
var _default = WeChatIcon;
exports.default = _default;