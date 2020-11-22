webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Downloads/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      onDrag = _ref.onDrag,\n      zIndex = _ref.zIndex,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name,\n      testName = _ref.name;\n  console.log('render appUrl', testName);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(),\n      webampLib = _useState[0],\n      setWebampLib = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      closing = _useState2[0],\n      setClosing = _useState2[1];\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n  var dragContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webamp, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webamp = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              webamp.onWillClose(function () {\n                return setClosing(true);\n              });\n              if (onMinimize) webamp.onMinimize(onMinimize);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"closeEqualizer\"])(webamp);\n              _context.next = 11;\n              return webamp.renderWhenReady(containerElement);\n\n            case 11:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp());\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusResizableElementRef\"])(dragContainerRef);\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"loadTrackOrSkin\"])(webamp, url, name);\n              return _context.abrupt(\"return\", webamp);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var tryDispose = function tryDispose() {\n      try {\n        webampLib === null || webampLib === void 0 ? void 0 : webampLib.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      setWebampLib(loadedWebamp);\n    });\n    return tryDispose;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (closing) {\n      setClosing(false);\n      onClose();\n    }\n  }, [closing, onClose]); // useEffect(() => {\n  //   console.log('appUrl', appUrl);\n  //   if (appUrl && webampLib) {\n  //     loadTrackOrSkin(webampLib, appUrl, basename(appUrl));\n  //   }\n  // }, [appUrl, webampLib]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_7__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: onDrag,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex\n    },\n    ref: dragContainerRef,\n    tabIndex: -1,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"1EYgzKWTOcIunHjKpWARI60uakI=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJvbkRyYWciLCJ6SW5kZXgiLCJmaWxlIiwidXJsIiwibmFtZSIsInRlc3ROYW1lIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwid2ViYW1wTGliIiwic2V0V2ViYW1wTGliIiwiY2xvc2luZyIsInNldENsb3NpbmciLCJlbGVtZW50UmVmIiwidXNlUmVmIiwiZHJhZ0NvbnRhaW5lclJlZiIsImxvYWRXZWJhbXAiLCJXZWJhbXBDb25zdHJ1Y3RvciIsIndlYmFtcCIsIndlYmFtcE9wdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiY3VycmVudCIsIm9uV2lsbENsb3NlIiwiY2xvc2VFcXVhbGl6ZXIiLCJyZW5kZXJXaGVuUmVhZHkiLCJhcHBlbmRFbGVtZW50IiwiZm9jdXNSZXNpemFibGVFbGVtZW50UmVmIiwibG9hZFRyYWNrT3JTa2luIiwidXNlRWZmZWN0IiwidHJ5RGlzcG9zZSIsImRpc3Bvc2UiLCJfZXhjZXB0aW9uIiwidGhlbiIsImxvYWRlZFdlYmFtcCIsInN0eWxlcyIsIndpbmFtcCIsInRvdWNoQ29udHJvbHMiLCJvblRvdWNoRXZlbnRzT25seSIsImZvY3VzT25EcmFnIiwibG9hZGVyT3B0aW9ucyIsIndpbmRvd2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHO0FBQ3hCQyxRQUFNLEVBQUUsR0FEZ0I7QUFFeEJDLE9BQUssRUFBRTtBQUZpQixDQUExQjs7QUFLQSxJ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLGFBQVMsRUFBRXFDLDBFQUFNLENBQUNDLE1BRHBCO0FBRUUsVUFBTSxFQUFFQywyREFGVjtBQUdFLHVCQUFtQixFQUFDLFdBSHRCO0FBSUUsa0JBQWMsRUFBRSxLQUpsQjtBQUtFLHdCQUFvQixFQUFFLEtBTHhCO0FBTUUsVUFBTSxFQUFFeEMsTUFOVjtBQU9FLFVBQU0sRUFBRXlDLCtEQVBWO0FBUUUsZUFBVyxFQUFFQywyREFSZjtBQVNFLGNBQVUsRUFBRXRDLE1BVGQ7QUFVRSxXQUFPLEVBQUVELE9BVlg7QUFXRSxTQUFLLEVBQUU7QUFBRUUsWUFBTSxFQUFOQTtBQUFGLEtBWFQ7QUFZRSxPQUFHLEVBQUVjLGdCQVpQO0FBYUUsWUFBUSxFQUFFLENBQUMsQ0FiYjtBQUFBLDJCQWVFO0FBQVMsU0FBRyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FsRkQ7O0dBQU1sQixNOztLQUFBQSxNO0FBb0ZTQSxxRUFBZjtBQUVPLElBQU00QyxhQUFhO0FBQ3hCQyxVQUFRLEVBQUU7QUFEYyxHQUVyQm5ELGlCQUZxQixDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZ3JhbXMvV2luYW1wLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvUHJvZ3JhbXMvV2luYW1wLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgV2ViYW1wIGZyb20gJ3dlYmFtcCc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvZ3JhbXMnO1xuaW1wb3J0IHR5cGUgeyBXZWJhbXBTdG9yZSB9IGZyb20gJ0AvdHlwZXMvY29tcG9uZW50cy9Qcm9ncmFtcy93aW5hbXAnO1xuXG5pbXBvcnQge1xuICBhcHBlbmRFbGVtZW50LFxuICBmb2N1c09uRHJhZyxcbiAgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmXG59IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7XG4gIGNsb3NlRXF1YWxpemVyLFxuICBsb2FkVHJhY2tPclNraW4sXG4gIHRvdWNoQ29udHJvbHMsXG4gIHdlYmFtcE9wdGlvbnNcbn0gZnJvbSAnQC91dGlscy93aW5hbXAnO1xuaW1wb3J0IHsgb25Ub3VjaEV2ZW50c09ubHkgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0RGltZW5zaW9ucyA9IHtcbiAgaGVpZ2h0OiAyMzIsXG4gIHdpZHRoOiAyNzVcbn07XG5cbmNvbnN0IGdldFdlYmFtcCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJhbXAnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY29uc3QgV2luYW1wOiBSZWFjdC5GQzxBcHBDb21wb25lbnQ+ID0gKHtcbiAgb25CbHVyLFxuICBvbkNsb3NlLFxuICBvbk1pbmltaXplLFxuICBvbkZvY3VzLFxuICBvbkRyYWcsXG4gIHpJbmRleCxcbiAgZmlsZTogeyB1cmwgPSAnJywgbmFtZSA9ICcnIH0gPSB7fSxcbiAgbmFtZTogdGVzdE5hbWVcbn0pID0+IHtcbiAgY29uc29sZS5sb2coJ3JlbmRlciBhcHBVcmwnLCB0ZXN0TmFtZSlcbiAgY29uc3QgW3dlYmFtcExpYiwgc2V0V2ViYW1wTGliXSA9IHVzZVN0YXRlPFdlYmFtcCAmIFdlYmFtcFN0b3JlPigpO1xuICBjb25zdCBbY2xvc2luZywgc2V0Q2xvc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGVsZW1lbnRSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkcmFnQ29udGFpbmVyUmVmID0gdXNlUmVmPFJuZD4obnVsbCk7XG4gIGNvbnN0IGxvYWRXZWJhbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wQ29uc3RydWN0b3IgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyk7XG4gICAgY29uc3Qgd2ViYW1wID0gbmV3IFdlYmFtcENvbnN0cnVjdG9yKHdlYmFtcE9wdGlvbnMpIGFzIFdlYmFtcCAmIFdlYmFtcFN0b3JlO1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyRWxlbWVudCB9ID0gZWxlbWVudFJlZiBhcyB7XG4gICAgICBjdXJyZW50OiBIVE1MRWxlbWVudDtcbiAgICB9O1xuXG4gICAgd2ViYW1wLm9uV2lsbENsb3NlKCgpID0+IHNldENsb3NpbmcodHJ1ZSkpO1xuICAgIGlmIChvbk1pbmltaXplKSB3ZWJhbXAub25NaW5pbWl6ZShvbk1pbmltaXplKTtcbiAgICBjbG9zZUVxdWFsaXplcih3ZWJhbXApO1xuICAgIGF3YWl0IHdlYmFtcC5yZW5kZXJXaGVuUmVhZHkoY29udGFpbmVyRWxlbWVudCk7XG4gICAgYXBwZW5kRWxlbWVudChjb250YWluZXJFbGVtZW50LCBnZXRXZWJhbXAoKSk7XG4gICAgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmKGRyYWdDb250YWluZXJSZWYpO1xuICAgIGxvYWRUcmFja09yU2tpbih3ZWJhbXAsIHVybCwgbmFtZSk7XG5cbiAgICByZXR1cm4gd2ViYW1wO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJ5RGlzcG9zZSA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlYmFtcExpYj8uZGlzcG9zZSgpO1xuICAgICAgfSBjYXRjaCAoX2V4Y2VwdGlvbikge1xuICAgICAgICAvKiBlc2xpbnQgbm8tZW1wdHk6IG9mZiAqL1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkV2ViYW1wKCkudGhlbigobG9hZGVkV2ViYW1wKSA9PiB7XG4gICAgICBzZXRXZWJhbXBMaWIobG9hZGVkV2ViYW1wKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnlEaXNwb3NlO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2xvc2luZykge1xuICAgICAgc2V0Q2xvc2luZyhmYWxzZSk7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfVxuICB9LCBbY2xvc2luZywgb25DbG9zZV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ2FwcFVybCcsIGFwcFVybCk7XG4gIC8vICAgaWYgKGFwcFVybCAmJiB3ZWJhbXBMaWIpIHtcbiAgLy8gICAgIGxvYWRUcmFja09yU2tpbih3ZWJhbXBMaWIsIGFwcFVybCwgYmFzZW5hbWUoYXBwVXJsKSk7XG4gIC8vICAgfVxuICAvLyB9LCBbYXBwVXJsLCB3ZWJhbXBMaWJdKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmFtcH1cbiAgICAgIGNhbmNlbD17dG91Y2hDb250cm9sc31cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxuICAgICAgZW5hYmxlUmVzaXppbmc9e2ZhbHNlfVxuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbkRyYWc9e29uVG91Y2hFdmVudHNPbmx5fVxuICAgICAgb25EcmFnU3RhcnQ9e2ZvY3VzT25EcmFnfVxuICAgICAgb25EcmFnU3RvcD17b25EcmFnfVxuICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIHN0eWxlPXt7IHpJbmRleCB9fVxuICAgICAgcmVmPXtkcmFnQ29udGFpbmVyUmVmfVxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgID5cbiAgICAgIDxhcnRpY2xlIHJlZj17ZWxlbWVudFJlZn0gLz5cbiAgICA8L1JuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmFtcDtcblxuZXhwb3J0IGNvbnN0IGxvYWRlck9wdGlvbnMgPSB7XG4gIHdpbmRvd2VkOiBmYWxzZSxcbiAgLi4uZGVmYXVsdERpbWVuc2lvbnNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})