webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/game/index.ts":
/*!**********************************!*\
  !*** ./components/game/index.ts ***!
  \**********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ \"./components/game/canvas/index.ts\");\n/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/divider */ \"./components/game/components/divider.ts\");\n/* harmony import */ var _components_opponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/opponents */ \"./components/game/components/opponents.ts\");\n/* harmony import */ var _components_mycar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mycar */ \"./components/game/components/mycar.ts\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/utils */ \"./components/game/components/utils.ts\");\n\n\n\n\n\n\n\n\nvar sound = new howler__WEBPACK_IMPORTED_MODULE_6__[\"Howl\"]({\n  src: \"/game.mp3\"\n});\nvar soundOnLoad = new Promise(function (resolve) {\n  sound.once(\"load\", resolve);\n});\nvar requestedAnimation;\nvar init = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(canvas, width, height, onChange) {\n    var targetVolume, targetSpeed, speedInterpolator, currentSpeed, currentVolume, volumeInterpolator, currentSoundRate, targetSoundRate, soundRateInterpolator, defaults, speedController, playground, dividers, opponents, myCar, score, tick;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tick = function _tick() {\n              dividers.tick(currentSpeed);\n              opponents.tick(currentSpeed);\n              var opponentLane = opponents.lastOpponent().lane;\n              myCar.move(opponentLane === \"left\" ? \"right\" : \"left\");\n              myCar.tick(currentSpeed);\n              playground.render();\n              requestedAnimation = requestAnimationFrame(tick);\n              score++;\n              currentSpeed = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSpeed, targetSpeed, speedInterpolator);\n              currentVolume = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentVolume, targetVolume, volumeInterpolator);\n              sound.volume(currentVolume);\n              currentSoundRate = Object(_components_utils__WEBPACK_IMPORTED_MODULE_7__[\"interpolate\"])(currentSoundRate, targetSoundRate, soundRateInterpolator);\n              sound.rate(currentSoundRate);\n              onChange({\n                score: score,\n                speed: currentSpeed,\n                volume: currentVolume,\n                soundRate: currentSoundRate\n              });\n            };\n\n            _context.next = 3;\n            return soundOnLoad;\n\n          case 3:\n            requestedAnimation && cancelAnimationFrame(requestedAnimation);\n            sound.volume(0);\n            sound.play();\n            targetVolume = 1;\n            targetSpeed = 15;\n            speedInterpolator = 0.1;\n            currentSpeed = 0;\n            currentVolume = 0;\n            volumeInterpolator = 0.01;\n            currentSoundRate = 1;\n            targetSoundRate = 1;\n            soundRateInterpolator = 0.01;\n\n            defaults = function defaults() {\n              targetVolume = 1;\n              targetSpeed = 15;\n              targetSoundRate = 1;\n              speedInterpolator = 0.1;\n              volumeInterpolator = 0.01;\n              soundRateInterpolator = 0.01;\n            };\n\n            speedController = function speedController(control) {\n              var minSoundRate = 0.8,\n                  maxSoundRate = 1;\n              var minSpeed = 2,\n                  maxSpeed = 15;\n              targetSoundRate = (maxSoundRate - minSoundRate) * control;\n              targetSpeed = (maxSpeed - minSpeed) * control;\n            };\n\n            playground = new _canvas__WEBPACK_IMPORTED_MODULE_2__[\"Canvas\"](canvas, {\n              width: width,\n              height: height\n            });\n            dividers = Object(_components_divider__WEBPACK_IMPORTED_MODULE_3__[\"initDividers\"])({\n              gap: 50,\n              color: \"#fff\",\n              height: 80,\n              width: 20,\n              baseSpeed: 1\n            }, playground.limitedConfig());\n            opponents = Object(_components_opponents__WEBPACK_IMPORTED_MODULE_4__[\"initOpponents\"])({\n              car: {\n                height: 100,\n                width: 50,\n                color: \"#ccc\",\n                baseSpeed: 2\n              },\n              gap: 200\n            }, playground.limitedConfig());\n            myCar = Object(_components_mycar__WEBPACK_IMPORTED_MODULE_5__[\"initMyCar\"])({\n              color: \"cyan\",\n              height: 100,\n              width: 50,\n              baseSpeed: 4\n            }, playground.limitedConfig());\n            window.addEventListener(\"keydown\", function (ev) {\n              if (ev.key === \"ArrowLeft\") myCar.move(\"left\");\n              if (ev.key === \"ArrowRight\") myCar.move(\"right\");\n\n              if (ev.key === \"r\") {\n                targetVolume = 1;\n                targetSpeed = 1;\n                targetSoundRate = 0.4;\n                speedInterpolator = 0.1;\n                soundRateInterpolator = 0.05;\n                setTimeout(function () {\n                  defaults();\n                }, 10000);\n              }\n            });\n            score = 0;\n            playground.render();\n            tick();\n\n          case 25:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function init(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvaW5kZXgudHM/MGE1NSJdLCJuYW1lcyI6WyJzb3VuZCIsIkhvd2wiLCJzcmMiLCJzb3VuZE9uTG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwib25jZSIsInJlcXVlc3RlZEFuaW1hdGlvbiIsImluaXQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwidGljayIsImRpdmlkZXJzIiwiY3VycmVudFNwZWVkIiwib3Bwb25lbnRzIiwib3Bwb25lbnRMYW5lIiwibGFzdE9wcG9uZW50IiwibGFuZSIsIm15Q2FyIiwibW92ZSIsInBsYXlncm91bmQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY29yZSIsImludGVycG9sYXRlIiwidGFyZ2V0U3BlZWQiLCJzcGVlZEludGVycG9sYXRvciIsImN1cnJlbnRWb2x1bWUiLCJ0YXJnZXRWb2x1bWUiLCJ2b2x1bWVJbnRlcnBvbGF0b3IiLCJ2b2x1bWUiLCJjdXJyZW50U291bmRSYXRlIiwidGFyZ2V0U291bmRSYXRlIiwic291bmRSYXRlSW50ZXJwb2xhdG9yIiwicmF0ZSIsInNwZWVkIiwic291bmRSYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5IiwiZGVmYXVsdHMiLCJzcGVlZENvbnRyb2xsZXIiLCJjb250cm9sIiwibWluU291bmRSYXRlIiwibWF4U291bmRSYXRlIiwibWluU3BlZWQiLCJtYXhTcGVlZCIsIkNhbnZhcyIsImluaXREaXZpZGVycyIsImdhcCIsImNvbG9yIiwiYmFzZVNwZWVkIiwibGltaXRlZENvbmZpZyIsImluaXRPcHBvbmVudHMiLCJjYXIiLCJpbml0TXlDYXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJrZXkiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUss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QkFBSXNDLEVBQUUsQ0FBQ0MsR0FBSCxLQUFXLFlBQWYsRUFBNkJ4QyxLQUFLLENBQUNDLElBQU4sQ0FBVyxPQUFYOztBQUM3QixrQkFBSXNDLEVBQUUsQ0FBQ0MsR0FBSCxLQUFXLEdBQWYsRUFBb0I7QUFDbEI5Qiw0QkFBWSxHQUFHLENBQWY7QUFDQUgsMkJBQVcsR0FBRyxDQUFkO0FBQ0FPLCtCQUFlLEdBQUcsR0FBbEI7QUFDQU4saUNBQWlCLEdBQUcsR0FBcEI7QUFDQU8scUNBQXFCLEdBQUcsSUFBeEI7QUFDQTBCLDBCQUFVLENBQUMsWUFBTTtBQUNmcEIsMEJBQVE7QUFDVCxpQkFGUyxFQUVQLEtBRk8sQ0FBVjtBQUdEO0FBQ0YsYUFiRDtBQWNJaEIsaUJBM0VjLEdBMkVOLENBM0VNO0FBeUdsQkgsc0JBQVUsQ0FBQ0MsTUFBWDtBQUNBVixnQkFBSTs7QUExR2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBSkwsSUFBSTtBQUFBO0FBQUE7QUFBQSxHQUFWIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9nYW1lL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBpbml0RGl2aWRlcnMgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpdmlkZXJcIjtcbmltcG9ydCB7IGluaXRPcHBvbmVudHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL29wcG9uZW50c1wiO1xuaW1wb3J0IHsgaW5pdE15Q2FyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9teWNhclwiO1xuaW1wb3J0IHsgSG93bCB9IGZyb20gXCJob3dsZXJcIjtcbmltcG9ydCB7IGludGVycG9sYXRlIH0gZnJvbSBcIi4vY29tcG9uZW50cy91dGlsc1wiO1xuXG5jb25zdCBzb3VuZCA9IG5ldyBIb3dsKHtcbiAgc3JjOiBcIi9nYW1lLm1wM1wiLFxufSk7XG5cbmNvbnN0IHNvdW5kT25Mb2FkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgc291bmQub25jZShcImxvYWRcIiwgcmVzb2x2ZSk7XG59KTtcblxubGV0IHJlcXVlc3RlZEFuaW1hdGlvbjtcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRzIHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgdm9sdW1lOiBudW1iZXI7XG4gIHNvdW5kUmF0ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBvbkNoYW5nZTogKHY6IElTdGF0cykgPT4gdm9pZFxuKSA9PiB7XG4gIGF3YWl0IHNvdW5kT25Mb2FkO1xuICByZXF1ZXN0ZWRBbmltYXRpb24gJiYgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdGVkQW5pbWF0aW9uKTtcbiAgc291bmQudm9sdW1lKDApO1xuICBzb3VuZC5wbGF5KCk7XG4gIHZhciB0YXJnZXRWb2x1bWUgPSAxO1xuICB2YXIgdGFyZ2V0U3BlZWQgPSAxNTtcbiAgdmFyIHNwZWVkSW50ZXJwb2xhdG9yID0gMC4xO1xuICB2YXIgY3VycmVudFNwZWVkID0gMDtcbiAgdmFyIGN1cnJlbnRWb2x1bWUgPSAwO1xuICB2YXIgdm9sdW1lSW50ZXJwb2xhdG9yID0gMC4wMTtcbiAgdmFyIGN1cnJlbnRTb3VuZFJhdGUgPSAxO1xuICB2YXIgdGFyZ2V0U291bmRSYXRlID0gMTtcbiAgdmFyIHNvdW5kUmF0ZUludGVycG9sYXRvciA9IDAuMDE7XG4gIGNvbnN0IGRlZmF1bHRzID0gKCkgPT4ge1xuICAgIHRhcmdldFZvbHVtZSA9IDE7XG4gICAgdGFyZ2V0U3BlZWQgPSAxNTtcbiAgICB0YXJnZXRTb3VuZFJhdGUgPSAxO1xuICAgIHNwZWVkSW50ZXJwb2xhdG9yID0gMC4xO1xuICAgIHZvbHVtZUludGVycG9sYXRvciA9IDAuMDE7XG4gICAgc291bmRSYXRlSW50ZXJwb2xhdG9yID0gMC4wMTtcbiAgfTtcbiAgY29uc3Qgc3BlZWRDb250cm9sbGVyID0gKGNvbnRyb2wpID0+IHtcbiAgICBjb25zdCBbbWluU291bmRSYXRlLCBtYXhTb3VuZFJhdGVdID0gWzAuOCwgMV07XG4gICAgY29uc3QgW21pblNwZWVkLCBtYXhTcGVlZF0gPSBbMiwgMTVdO1xuXG4gICAgdGFyZ2V0U291bmRSYXRlID0gKG1heFNvdW5kUmF0ZSAtIG1pblNvdW5kUmF0ZSkgKiBjb250cm9sO1xuICAgIHRhcmdldFNwZWVkID0gKG1heFNwZWVkIC0gbWluU3BlZWQpICogY29udHJvbDtcbiAgfTtcblxuICBjb25zdCBwbGF5Z3JvdW5kID0gbmV3IENhbnZhcyhjYW52YXMsIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH0pO1xuXG4gIGNvbnN0IGRpdmlkZXJzID0gaW5pdERpdmlkZXJzKFxuICAgIHtcbiAgICAgIGdhcDogNTAsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICBoZWlnaHQ6IDgwLFxuICAgICAgd2lkdGg6IDIwLFxuICAgICAgYmFzZVNwZWVkOiAxLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgY29uc3Qgb3Bwb25lbnRzID0gaW5pdE9wcG9uZW50cyhcbiAgICB7XG4gICAgICBjYXI6IHsgaGVpZ2h0OiAxMDAsIHdpZHRoOiA1MCwgY29sb3I6IFwiI2NjY1wiLCBiYXNlU3BlZWQ6IDIgfSxcbiAgICAgIGdhcDogMjAwLFxuICAgIH0sXG4gICAgcGxheWdyb3VuZC5saW1pdGVkQ29uZmlnKClcbiAgKTtcbiAgY29uc3QgbXlDYXIgPSBpbml0TXlDYXIoXG4gICAgeyBjb2xvcjogXCJjeWFuXCIsIGhlaWdodDogMTAwLCB3aWR0aDogNTAsIGJhc2VTcGVlZDogNCB9LFxuICAgIHBsYXlncm91bmQubGltaXRlZENvbmZpZygpXG4gICk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXYpID0+IHtcbiAgICBpZiAoZXYua2V5ID09PSBcIkFycm93TGVmdFwiKSBteUNhci5tb3ZlKFwibGVmdFwiKTtcbiAgICBpZiAoZXYua2V5ID09PSBcIkFycm93UmlnaHRcIikgbXlDYXIubW92ZShcInJpZ2h0XCIpO1xuICAgIGlmIChldi5rZXkgPT09IFwiclwiKSB7XG4gICAgICB0YXJnZXRWb2x1bWUgPSAxO1xuICAgICAgdGFyZ2V0U3BlZWQgPSAxO1xuICAgICAgdGFyZ2V0U291bmRSYXRlID0gMC40O1xuICAgICAgc3BlZWRJbnRlcnBvbGF0b3IgPSAwLjE7XG4gICAgICBzb3VuZFJhdGVJbnRlcnBvbGF0b3IgPSAwLjA1O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlZmF1bHRzKCk7XG4gICAgICB9LCAxMDAwMCk7XG4gICAgfVxuICB9KTtcbiAgbGV0IHNjb3JlID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkaXZpZGVycy50aWNrKGN1cnJlbnRTcGVlZCk7XG4gICAgb3Bwb25lbnRzLnRpY2soY3VycmVudFNwZWVkKTtcbiAgICBjb25zdCBvcHBvbmVudExhbmUgPSBvcHBvbmVudHMubGFzdE9wcG9uZW50KCkubGFuZTtcbiAgICBteUNhci5tb3ZlKG9wcG9uZW50TGFuZSA9PT0gXCJsZWZ0XCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIik7XG4gICAgbXlDYXIudGljayhjdXJyZW50U3BlZWQpO1xuICAgIHBsYXlncm91bmQucmVuZGVyKCk7XG4gICAgcmVxdWVzdGVkQW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIHNjb3JlKys7XG4gICAgY3VycmVudFNwZWVkID0gaW50ZXJwb2xhdGUoY3VycmVudFNwZWVkLCB0YXJnZXRTcGVlZCwgc3BlZWRJbnRlcnBvbGF0b3IpO1xuICAgIGN1cnJlbnRWb2x1bWUgPSBpbnRlcnBvbGF0ZShcbiAgICAgIGN1cnJlbnRWb2x1bWUsXG4gICAgICB0YXJnZXRWb2x1bWUsXG4gICAgICB2b2x1bWVJbnRlcnBvbGF0b3JcbiAgICApO1xuICAgIHNvdW5kLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICBjdXJyZW50U291bmRSYXRlID0gaW50ZXJwb2xhdGUoXG4gICAgICBjdXJyZW50U291bmRSYXRlLFxuICAgICAgdGFyZ2V0U291bmRSYXRlLFxuICAgICAgc291bmRSYXRlSW50ZXJwb2xhdG9yXG4gICAgKTtcbiAgICBzb3VuZC5yYXRlKGN1cnJlbnRTb3VuZFJhdGUpO1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIHNjb3JlLFxuICAgICAgc3BlZWQ6IGN1cnJlbnRTcGVlZCxcbiAgICAgIHZvbHVtZTogY3VycmVudFZvbHVtZSxcbiAgICAgIHNvdW5kUmF0ZTogY3VycmVudFNvdW5kUmF0ZSxcbiAgICB9KTtcbiAgfVxuICBwbGF5Z3JvdW5kLnJlbmRlcigpO1xuICB0aWNrKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/index.ts\n");

/***/ })

})