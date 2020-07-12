webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.ts\");\nvar _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"step1\"),\n      step = _useState[0],\n      setStep = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    score: 0,\n    speed: 0,\n    volume: 0,\n    soundRate: 1\n  }),\n      stats = _useState2[0],\n      setStats = _useState2[1];\n\n  var width = 300,\n      height = 500;\n  return __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]])\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1045623052\"\n  }, \"html,body{margin:0;padding:0;height:100vh;width:100vw;}body{background-color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXNob3JlL2VnZ2hlYWQvdGhlZ2FtZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXlCLEFBSW9CLEFBTWMsU0FMYixVQUNHLElBS0EsU0FKRCxZQUNkLHFEQUlxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL1VzZXJzL2tpc2hvcmUvZWdnaGVhZC90aGVnYW1lL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdCwgSVN0YXRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZShcInN0ZXAxXCIpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPElTdGF0cz4oe1xuICAgIHNjb3JlOiAwLFxuICAgIHNwZWVkOiAwLFxuICAgIHZvbHVtZTogMCxcbiAgICBzb3VuZFJhdGU6IDEsXG4gIH0pO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBbMzAwLCA1MDBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbnZhcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGgxIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggd2hpdGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbiBcIiArIHN0ZXB9PlxuICAgICAgICA8aDFcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaW5pdChyZWYuY3VycmVudCwgd2lkdGgsIGhlaWdodCwgc2V0U3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RlcChcInN0ZXAyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR2FtZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5TY29yZToge3N0YXRzLnNjb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTb3VuZDoge01hdGgucm91bmQoc3RhdHMuc291bmRSYXRlICogMTAwKX0gL3tcIiBcIn1cbiAgICAgICAgICAgIHtNYXRoLnJvdW5kKHN0YXRzLnZvbHVtZSAqIDEwMCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5TcGVlZDoge01hdGgucm91bmQoKHN0YXRzLnNwZWVkICogMTAwKSAvIDEwMCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhbnZhc1wiXG4gICAgICAgID48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\\n/*@ sourceURL=/Users/kishore/egghead/thegame/pages/index.tsx */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"366155328\",\n    dynamic: [height]\n  }, \".main.__jsx-style-dynamic-selector{width:400px;box-sizing:border-box;}h1.__jsx-style-dynamic-selector,.canvas.__jsx-style-dynamic-selector{-webkit-transition:1s all;transition:1s all;}h1.__jsx-style-dynamic-selector{font-size:50px;font-family:Arial;color:white;text-shadow:0px 0px 10px white;text-align:center;cursor:pointer;-webkit-transform:scale(1.5,1.5);-ms-transform:scale(1.5,1.5);transform:scale(1.5,1.5);}.stats.__jsx-style-dynamic-selector{color:white;font-family:Arial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;padding-bottom:30px;cursor:pointer;}.stats.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{text-align:center;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;}.canvas.__jsx-style-dynamic-selector{background-color:#222;margin:auto;display:block;height:0px;}.step2.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:#333;text-shadow:0px 0px 2px white;pointer-events:none;cursor:none;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.step2.__jsx-style-dynamic-selector canvas.__jsx-style-dynamic-selector{height:\".concat(height, \"px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXNob3JlL2VnZ2hlYWQvdGhlZ2FtZS9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJrQixBQUd1QixBQUtNLEFBR0gsQUFTSCxBQVFNLEFBSUksQUFNWCxBQU8yQixXQU5SLENBbkNSLEFBaUJKLEdBVEEsR0FpQlAsSUFJQyxRQVhDLEdBVEQsQ0FSZCxBQTZCZ0IsSUFZaEIsR0FOc0IsR0EvQnRCLENBS2lDLEdBcUJwQixXQUNiLEVBS2MsRUFYZCxVQVl3QixHQTNCSixrQkFDSCxVQU9GLEtBTmEsUUFPTixvQkFDTCxXQWtCakIsSUFqQkEsNENBUkEiLCJmaWxlIjoiL1VzZXJzL2tpc2hvcmUvZWdnaGVhZC90aGVnYW1lL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdCwgSVN0YXRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZShcInN0ZXAxXCIpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPElTdGF0cz4oe1xuICAgIHNjb3JlOiAwLFxuICAgIHNwZWVkOiAwLFxuICAgIHZvbHVtZTogMCxcbiAgICBzb3VuZFJhdGU6IDEsXG4gIH0pO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBbMzAwLCA1MDBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbnZhcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGgxIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggd2hpdGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbiBcIiArIHN0ZXB9PlxuICAgICAgICA8aDFcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaW5pdChyZWYuY3VycmVudCwgd2lkdGgsIGhlaWdodCwgc2V0U3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RlcChcInN0ZXAyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR2FtZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5TY29yZToge3N0YXRzLnNjb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTb3VuZDoge01hdGgucm91bmQoc3RhdHMuc291bmRSYXRlICogMTAwKX0gL3tcIiBcIn1cbiAgICAgICAgICAgIHtNYXRoLnJvdW5kKHN0YXRzLnZvbHVtZSAqIDEwMCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5TcGVlZDoge01hdGgucm91bmQoKHN0YXRzLnNwZWVkICogMTAwKSAvIDEwMCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhbnZhc1wiXG4gICAgICAgID48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\\n/*@ sourceURL=/Users/kishore/egghead/thegame/pages/index.tsx */\")), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]]) + \" \" + (\"main \" + step || false)\n  }, __jsx(\"h1\", {\n    onClick: function onClick(e) {\n      Object(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"init\"])(ref.current, width, height, setStats);\n      setStep(\"step2\");\n    },\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]])\n  }, \"The Game\"), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]]) + \" \" + \"stats\"\n  }, __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]]) + \" \" + \"flex-grow\"\n  }, \"Score: \", stats.score), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]])\n  }, \"Sound: \", Math.round(stats.soundRate * 100), \" /\", \" \", Math.round(stats.volume * 100)), __jsx(\"div\", {\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]])\n  }, \"Speed: \", Math.round(stats.speed * 100 / 100))), __jsx(\"canvas\", {\n    ref: ref,\n    width: width,\n    height: height,\n    className: \"jsx-1045623052 \" + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"366155328\", [height]]]) + \" \" + \"canvas\"\n  })));\n}, \"xfNHUQi5rrA0uQKYS25Ul5bIvOQ=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0ZXAiLCJzZXRTdGVwIiwic2NvcmUiLCJzcGVlZCIsInZvbHVtZSIsInNvdW5kUmF0ZSIsInN0YXRzIiwic2V0U3RhdHMiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJpbml0IiwiY3VycmVudCIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsOEVBQU07QUFBQTs7QUFDbkIsTUFBTUEsR0FBRyxHQUFHQyxvREFBTSxDQUEyQixJQUEzQixDQUFsQjs7QUFEbUIsa0JBRUtDLHNEQUFRLENBQUMsT0FBRCxDQUZiO0FBQUEsTUFFWkMsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBQUEsbUJBR09GLHNEQUFRLENBQVM7QUFDekNHLFNBQUssRUFBRSxDQURrQztBQUV6Q0MsU0FBSyxFQUFFLENBRmtDO0FBR3pDQyxVQUFNLEVBQUUsQ0FIaUM7QUFJekNDLGFBQVMsRUFBRTtBQUo4QixHQUFULENBSGY7QUFBQSxNQUdaQyxLQUhZO0FBQUEsTUFHTEMsUUFISzs7QUFBQSxNQVNaQyxLQVRZLEdBU00sR0FUTjtBQUFBLE1BU0xDLE1BVEssR0FTVyxHQVRYO0FBVW5CLFNBQ0U7QUFBQSxtSEE0RGdCQSxNQTVEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNERnQkEsTUE1RGhCO0FBQUEsdW5DQTREZ0JBLE1BNURoQiw4bElBK0RFO0FBQUEsbUhBSGNBLE1BR2QsY0FBZ0IsVUFBVVQsSUFBMUI7QUFBQSxLQUNFO0FBQ0UsV0FBTyxFQUFFLGlCQUFDVSxDQUFELEVBQU87QUFDZEMsbUVBQUksQ0FBQ2QsR0FBRyxDQUFDZSxPQUFMLEVBQWNKLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTZCRixRQUE3QixDQUFKO0FBQ0FOLGFBQU8sQ0FBQyxPQUFELENBQVA7QUFDRCxLQUpIO0FBQUEsbUhBSllRLE1BSVo7QUFBQSxnQkFERixFQVNFO0FBQUEsbUhBWllBLE1BWVosYUFBZTtBQUFmLEtBQ0U7QUFBQSxtSEFiVUEsTUFhVixhQUFlO0FBQWYsZ0JBQW1DSCxLQUFLLENBQUNKLEtBQXpDLENBREYsRUFFRTtBQUFBLG1IQWRVTyxNQWNWO0FBQUEsZ0JBQ1VJLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixLQUFLLENBQUNELFNBQU4sR0FBa0IsR0FBN0IsQ0FEVixRQUMrQyxHQUQvQyxFQUVHUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsS0FBSyxDQUFDRixNQUFOLEdBQWUsR0FBMUIsQ0FGSCxDQUZGLEVBTUU7QUFBQSxtSEFsQlVLLE1Ba0JWO0FBQUEsZ0JBQWFJLElBQUksQ0FBQ0MsS0FBTCxDQUFZUixLQUFLLENBQUNILEtBQU4sR0FBYyxHQUFmLEdBQXNCLEdBQWpDLENBQWIsQ0FORixDQVRGLEVBaUJFO0FBQ0UsT0FBRyxFQUFFTixHQURQO0FBRUUsU0FBSyxFQUFFVyxLQUZUO0FBR0UsVUFBTSxFQUFFQyxNQUhWO0FBQUEsbUhBcEJZQSxNQW9CWixhQUlZO0FBSlosSUFqQkYsQ0EvREYsQ0FERjtBQTBGRCxDQXBHRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5pdCwgSVN0YXRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZShcInN0ZXAxXCIpO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPElTdGF0cz4oe1xuICAgIHNjb3JlOiAwLFxuICAgIHNwZWVkOiAwLFxuICAgIHZvbHVtZTogMCxcbiAgICBzb3VuZFJhdGU6IDEsXG4gIH0pO1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBbMzAwLCA1MDBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICAuY2FudmFzIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcyBhbGw7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbnZhcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGgxIHtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggd2hpdGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLnN0ZXAyIGNhbnZhcyB7XG4gICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpbiBcIiArIHN0ZXB9PlxuICAgICAgICA8aDFcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgaW5pdChyZWYuY3VycmVudCwgd2lkdGgsIGhlaWdodCwgc2V0U3RhdHMpO1xuICAgICAgICAgICAgc2V0U3RlcChcInN0ZXAyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGUgR2FtZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5TY29yZToge3N0YXRzLnNjb3JlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTb3VuZDoge01hdGgucm91bmQoc3RhdHMuc291bmRSYXRlICogMTAwKX0gL3tcIiBcIn1cbiAgICAgICAgICAgIHtNYXRoLnJvdW5kKHN0YXRzLnZvbHVtZSAqIDEwMCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5TcGVlZDoge01hdGgucm91bmQoKHN0YXRzLnNwZWVkICogMTAwKSAvIDEwMCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhbnZhc1wiXG4gICAgICAgID48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})