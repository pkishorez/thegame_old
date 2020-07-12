webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.ts\");\nvar _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"step1\"),\n      step = _useState[0],\n      setStep = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    score: 0,\n    speed: 0,\n    volume: 0\n  }),\n      stats = _useState2[0],\n      setStats = _useState2[1];\n\n  var width = 300,\n      height = 500;\n  return __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]])\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1045623052\"\n  }, \"html,body{margin:0;padding:0;height:100vh;width:100vw;}body{background-color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXNob3JlL2VnZ2hlYWQvdGhlZ2FtZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXlCLEFBSW9CLEFBTWMsU0FMYixVQUNHLElBS0EsU0FKRCxZQUNkLHFEQUlxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL1VzZXJzL2tpc2hvcmUvZWdnaGVhZC90aGVnYW1lL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdCwgSVN0YXRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZShcInN0ZXAxXCIpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPElTdGF0cz4oeyBzY29yZTogMCwgc3BlZWQ6IDAsIHZvbHVtZTogMCB9KTtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gWzMwMCwgNTAwXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIC5jYW52YXMge1xuICAgICAgICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cyB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cyBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3RlcDIgaDEge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCB3aGl0ZTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbiBcIiArIHN0ZXB9PlxuICAgICAgICA8aDFcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaW5pdChyZWYuY3VycmVudCwgd2lkdGgsIGhlaWdodCwgc2V0U3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RlcChcInN0ZXAyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR2FtZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5TY29yZToge3N0YXRzLnNjb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+Vm9sdW1lOiB7TWF0aC5yb3VuZChzdGF0cy52b2x1bWUgKiAxMDApfTwvZGl2PlxuICAgICAgICAgIDxkaXY+U3BlZWQ6IHtNYXRoLmNlaWwoc3RhdHMuc3BlZWQpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjYW52YXNcIlxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\\n/*@ sourceURL=/Users/kishore/egghead/thegame/pages/index.tsx */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"4102751312\",\n    dynamic: [height]\n  }, \".main.__jsx-style-dynamic-selector{width:500px;}h1.__jsx-style-dynamic-selector,.canvas.__jsx-style-dynamic-selector{-webkit-transition:1s all;transition:1s all;}h1.__jsx-style-dynamic-selector{font-size:50px;font-family:Arial;color:white;text-shadow:0px 0px 10px white;text-align:center;cursor:pointer;}.stats.__jsx-style-dynamic-selector{color:white;font-family:Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;cursor:pointer;}.stats.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{text-align:center;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;}.canvas.__jsx-style-dynamic-selector{background-color:#222;margin:auto;display:block;height:0px;}.step2.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:#333;text-shadow:0px 0px 2px white;pointer-events:none;cursor:none;}.step2.__jsx-style-dynamic-selector canvas.__jsx-style-dynamic-selector{height:\".concat(height, \"px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXNob3JlL2VnZ2hlYWQvdGhlZ2FtZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUd1QixBQUlNLEFBR0gsQUFRSCxBQU9NLEFBSUksQUFNWCxBQU0yQixXQUxSLENBaENoQyxBQWVvQixHQVJBLEdBZVAsSUFJQyxRQVZDLEdBUkQsQ0FtQkUsSUFXaEIsR0FMc0IsR0E3QnRCLENBS2lDLEdBbUJwQixXQUNiLEVBS2MsRUFYZCxVQVlBLEdBekJvQixrQkFDSCxVQU1GLEtBTGYsUUFNaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2tpc2hvcmUvZWdnaGVhZC90aGVnYW1lL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdCwgSVN0YXRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZShcInN0ZXAxXCIpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPElTdGF0cz4oeyBzY29yZTogMCwgc3BlZWQ6IDAsIHZvbHVtZTogMCB9KTtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gWzMwMCwgNTAwXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIC5jYW52YXMge1xuICAgICAgICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cyB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cyBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3RlcDIgaDEge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCB3aGl0ZTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbiBcIiArIHN0ZXB9PlxuICAgICAgICA8aDFcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaW5pdChyZWYuY3VycmVudCwgd2lkdGgsIGhlaWdodCwgc2V0U3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RlcChcInN0ZXAyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR2FtZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5TY29yZToge3N0YXRzLnNjb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+Vm9sdW1lOiB7TWF0aC5yb3VuZChzdGF0cy52b2x1bWUgKiAxMDApfTwvZGl2PlxuICAgICAgICAgIDxkaXY+U3BlZWQ6IHtNYXRoLmNlaWwoc3RhdHMuc3BlZWQpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjYW52YXNcIlxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\\n/*@ sourceURL=/Users/kishore/egghead/thegame/pages/index.tsx */\")), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]]) + \" \" + (\"main \" + step || false)\n  }, __jsx(\"h1\", {\n    onClick: function onClick(e) {\n      Object(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"init\"])(ref.current, width, height, setStats);\n      setStep(\"step2\");\n    },\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]])\n  }, \"The Game\"), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]]) + \" \" + \"stats\"\n  }, __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]]) + \" \" + \"flex-grow\"\n  }, \"Score: \", stats.score), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]])\n  }, \"Volume: \", Math.round(stats.volume * 100)), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]])\n  }, \"Speed: \", Math.ceil(stats.speed))), __jsx(\"canvas\", {\n    ref: ref,\n    width: width,\n    height: height,\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"4102751312\", [height]]]) + \" \" + \"canvas\"\n  })));\n}, \"mVffpQUBMKSDNYTFaNNu2SHToJw=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0ZXAiLCJzZXRTdGVwIiwic2NvcmUiLCJzcGVlZCIsInZvbHVtZSIsInN0YXRzIiwic2V0U3RhdHMiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJpbml0IiwiY3VycmVudCIsIk1hdGgiLCJyb3VuZCIsImNlaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLDhFQUFNO0FBQUE7O0FBQ25CLE1BQU1BLEdBQUcsR0FBR0Msb0RBQU0sQ0FBMkIsSUFBM0IsQ0FBbEI7O0FBRG1CLGtCQUVLQyxzREFBUSxDQUFDLE9BQUQsQ0FGYjtBQUFBLE1BRVpDLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUFBLG1CQUdPRixzREFBUSxDQUFTO0FBQUVHLFNBQUssRUFBRSxDQUFUO0FBQVlDLFNBQUssRUFBRSxDQUFuQjtBQUFzQkMsVUFBTSxFQUFFO0FBQTlCLEdBQVQsQ0FIZjtBQUFBLE1BR1pDLEtBSFk7QUFBQSxNQUdMQyxRQUhLOztBQUFBLE1BSVpDLEtBSlksR0FJTSxHQUpOO0FBQUEsTUFJTEMsTUFKSyxHQUlXLEdBSlg7QUFLbkIsU0FDRTtBQUFBLG9IQXdEZ0JBLE1BeERoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F3RGdCQSxNQXhEaEI7QUFBQSwyNkJBd0RnQkEsTUF4RGhCLDBzSEEyREU7QUFBQSxvSEFIY0EsTUFHZCxjQUFnQixVQUFVUixJQUExQjtBQUFBLEtBQ0U7QUFDRSxXQUFPLEVBQUUsaUJBQUNTLENBQUQsRUFBTztBQUNkQyxtRUFBSSxDQUFDYixHQUFHLENBQUNjLE9BQUwsRUFBY0osS0FBZCxFQUFxQkMsTUFBckIsRUFBNkJGLFFBQTdCLENBQUo7QUFDQUwsYUFBTyxDQUFDLE9BQUQsQ0FBUDtBQUNELEtBSkg7QUFBQSxvSEFKWU8sTUFJWjtBQUFBLGdCQURGLEVBU0U7QUFBQSxvSEFaWUEsTUFZWixhQUFlO0FBQWYsS0FDRTtBQUFBLG9IQWJVQSxNQWFWLGFBQWU7QUFBZixnQkFBbUNILEtBQUssQ0FBQ0gsS0FBekMsQ0FERixFQUVFO0FBQUEsb0hBZFVNLE1BY1Y7QUFBQSxpQkFBY0ksSUFBSSxDQUFDQyxLQUFMLENBQVdSLEtBQUssQ0FBQ0QsTUFBTixHQUFlLEdBQTFCLENBQWQsQ0FGRixFQUdFO0FBQUEsb0hBZlVJLE1BZVY7QUFBQSxnQkFBYUksSUFBSSxDQUFDRSxJQUFMLENBQVVULEtBQUssQ0FBQ0YsS0FBaEIsQ0FBYixDQUhGLENBVEYsRUFjRTtBQUNFLE9BQUcsRUFBRU4sR0FEUDtBQUVFLFNBQUssRUFBRVUsS0FGVDtBQUdFLFVBQU0sRUFBRUMsTUFIVjtBQUFBLG9IQWpCWUEsTUFpQlosYUFJWTtBQUpaLElBZEYsQ0EzREYsQ0FERjtBQW1GRCxDQXhGRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdCwgSVN0YXRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZShcInN0ZXAxXCIpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPElTdGF0cz4oeyBzY29yZTogMCwgc3BlZWQ6IDAsIHZvbHVtZTogMCB9KTtcbiAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gWzMwMCwgNTAwXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEsXG4gICAgICAgIC5jYW52YXMge1xuICAgICAgICAgIHRyYW5zaXRpb246IDFzIGFsbDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cyB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0cyBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc3RlcDIgaDEge1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCB3aGl0ZTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbiBcIiArIHN0ZXB9PlxuICAgICAgICA8aDFcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaW5pdChyZWYuY3VycmVudCwgd2lkdGgsIGhlaWdodCwgc2V0U3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RlcChcInN0ZXAyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR2FtZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5TY29yZToge3N0YXRzLnNjb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+Vm9sdW1lOiB7TWF0aC5yb3VuZChzdGF0cy52b2x1bWUgKiAxMDApfTwvZGl2PlxuICAgICAgICAgIDxkaXY+U3BlZWQ6IHtNYXRoLmNlaWwoc3RhdHMuc3BlZWQpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjYW52YXNcIlxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})