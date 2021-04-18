/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.dark.css":
/*!**********************************************!*\
  !*** ./node_modules/antd/dist/antd.dark.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/antd/dist/antd.dark.css?");

/***/ }),

/***/ "./src/config/globals.jsx":
/*!********************************!*\
  !*** ./src/config/globals.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  API_URL:  false ? undefined : 'http://localhost:3003'\n});\n\n//# sourceURL=webpack:///./src/config/globals.jsx?");

/***/ }),

/***/ "./src/config/reducers.jsx":
/*!*********************************!*\
  !*** ./src/config/reducers.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web_redux_app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/redux/app/reducer */ \"./src/shared/redux/app/reducer.jsx\");\n/* harmony import */ var _web_redux_postOffice_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web/redux/postOffice/reducer */ \"./src/shared/redux/postOffice/reducer.jsx\");\n/* harmony import */ var _web_redux_notifications_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web/redux/notifications/reducer */ \"./src/shared/redux/notifications/reducer.jsx\");\n\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  App: _web_redux_app_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  PostOffice: _web_redux_postOffice_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Notifications: _web_redux_notifications_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/config/reducers.jsx?");

/***/ }),

/***/ "./src/config/routes.jsx":
/*!*******************************!*\
  !*** ./src/config/routes.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web_components_homepage_Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web/components/homepage/Homepage */ \"./src/shared/components/homepage/Homepage.jsx\");\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _web_components_homepage_Homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/config/routes.jsx?");

/***/ }),

/***/ "./src/server/index.jsx":
/*!******************************!*\
  !*** ./src/server/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-promise */ \"redux-promise\");\n/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_multi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-multi */ \"redux-multi\");\n/* harmony import */ var redux_multi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_multi__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _web_shared_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @web/shared/App */ \"./src/shared/App.jsx\");\n/* harmony import */ var _web_config_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @web/config/reducers */ \"./src/config/reducers.jsx\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\n\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_9___default.a, redux_multi__WEBPACK_IMPORTED_MODULE_8___default.a, redux_promise__WEBPACK_IMPORTED_MODULE_7___default.a)(redux__WEBPACK_IMPORTED_MODULE_5__[\"createStore\"])(_web_config_reducers__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.get('*', function (req, res, next) {\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_web_shared_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))));\n  res.send(\"\\n    <!doctype html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <title>Post Office Consult</title>    \\n\\n    <link href=\\\"/app.js\\\" rel=\\\"preload\\\" as=\\\"script\\\">\\n    <link href=\\\"/app.css\\\" rel=\\\"preload\\\" as=\\\"style\\\">\\n\\n    <link href=\\\"/app.css\\\" rel=\\\"stylesheet\\\">\\n    <script src=\\\"/app.js\\\" defer></script>\\n</head>\\n\\n<body>\\n    <div id=\\\"app\\\">\".concat(markup, \"</div>    \\n</body>\\n</html>\\n\"));\n});\nvar port = process.env.PORT || 8081;\napp.listen(port, function () {\n  console.log('O servidor FRONTEND - Post Office Consult está rodando na porta ' + port + \".\");\n});\n\n//# sourceURL=webpack:///./src/server/index.jsx?");

/***/ }),

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_dist_antd_dark_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.dark.css */ \"./node_modules/antd/dist/antd.dark.css\");\n/* harmony import */ var antd_dist_antd_dark_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_dark_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web_config_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web/config/routes */ \"./src/config/routes.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web_shared_App_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web/shared/App.styles */ \"./src/shared/App.styles.jsx\");\n/* harmony import */ var _web_redux_app_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web/redux/app/actions */ \"./src/shared/redux/app/actions.jsx\");\n// CSS imports\n// import 'antd/dist/antd.css';\n\n\n\n\n\n\n\n\nvar App = function App() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var handleResize = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch(Object(_web_redux_app_actions__WEBPACK_IMPORTED_MODULE_6__[\"updateView\"])());\n  });\n\n  if (false) {}\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web_shared_App_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web_shared_App_styles__WEBPACK_IMPORTED_MODULE_5__[\"BodyWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, _web_config_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        Component = _ref.component;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n      key: path,\n      path: path,\n      exact: exact,\n      component: Component\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n    from: \"*\",\n    to: \"/\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.jsx?");

/***/ }),

/***/ "./src/shared/App.styles.jsx":
/*!***********************************!*\
  !*** ./src/shared/App.styles.jsx ***!
  \***********************************/
/*! exports provided: BodyWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BodyWrapper\", function() { return BodyWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 100%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 100vw;\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main(_templateObject());\nvar BodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppWrapper);\n\n//# sourceURL=webpack:///./src/shared/App.styles.jsx?");

/***/ }),

/***/ "./src/shared/components/common/Notification.jsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/common/Notification.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Notification = function Notification(type, title, text) {\n  return antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"][type]({\n    rtl: true,\n    placement: 'topRight',\n    message: title,\n    duration: 3,\n    top: 100,\n    description: text,\n    closeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaTimes\"], null),\n    icon: type === \"success\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaCheckCircle\"], {\n      style: {\n        color: \"#27ae60\"\n      }\n    }) : type === \"warning\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaExclamationTriangle\"], {\n      style: {\n        color: \"#f9ca24\"\n      }\n    }) : type === \"info\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaInfoCircle\"], {\n      style: {\n        color: \"#0984e3\"\n      }\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaTimesCircle\"], {\n      style: {\n        color: \"#c0392b\"\n      }\n    })\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\n\n//# sourceURL=webpack:///./src/shared/components/common/Notification.jsx?");

/***/ }),

/***/ "./src/shared/components/homepage/Homepage.jsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/homepage/Homepage.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_mask_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mask-input */ \"antd-mask-input\");\n/* harmony import */ var antd_mask_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mask_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _web_redux_postOffice_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web/redux/postOffice/actions */ \"./src/shared/redux/postOffice/actions.jsx\");\n/* harmony import */ var _web_redux_notifications_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web/redux/notifications/actions */ \"./src/shared/redux/notifications/actions.jsx\");\n/* harmony import */ var _web_components_common_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web/components/common/Notification */ \"./src/shared/components/common/Notification.jsx\");\n/* harmony import */ var _Homepage_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Homepage.styles */ \"./src/shared/components/homepage/Homepage.styles.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar Homepage = function Homepage() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.Notifications;\n  }),\n      notificationsQueue = _useSelector.notificationsQueue;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.PostOffice;\n  }),\n      postOfficeError = _useSelector2.postOfficeError,\n      postOfficeSuccess = _useSelector2.postOfficeSuccess;\n\n  var showNotification = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (notification) {\n    Object(_web_components_common_Notification__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(notification.type, notification.title, notification.text);\n    dispatch(Object(_web_redux_notifications_actions__WEBPACK_IMPORTED_MODULE_6__[\"popNotification\"])());\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (notificationsQueue.length > 0) showNotification(notificationsQueue[0]);\n    if (postOfficeError.status === true) handleError();\n    if (postOfficeSuccess.status === true) handleSuccess();\n  }, [dispatch, postOfficeError, postOfficeSuccess, notificationsQueue]);\n  var handleError = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(Object(_web_redux_notifications_actions__WEBPACK_IMPORTED_MODULE_6__[\"pushNotification\"])('error', postOfficeError.message, ''));\n    dispatch(Object(_web_redux_postOffice_actions__WEBPACK_IMPORTED_MODULE_5__[\"clearPostOfficeStatus\"])());\n  });\n  var handleSuccess = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(Object(_web_redux_notifications_actions__WEBPACK_IMPORTED_MODULE_6__[\"pushNotification\"])('success', postOfficeSuccess.message, ''));\n    dispatch(Object(_web_redux_postOffice_actions__WEBPACK_IMPORTED_MODULE_5__[\"clearPostOfficeStatus\"])());\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      parcelOptionsModal = _useState2[0],\n      setParcelOptionsModal = _useState2[1];\n\n  var fetchPrecoPrazoForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();\n\n  var handleChangeType = function handleChangeType(option) {\n    fetchPrecoPrazoForm.current.setFieldsValue({\n      nCdFormato: option.formato,\n      nVlAltura: option.altura,\n      nVlLargura: option.largura,\n      nVlComprimento: option.comprimento\n    });\n    setParcelOptionsModal(false);\n  };\n\n  var consultZipCode = function consultZipCode(values) {\n    console.log(values);\n  };\n\n  var orderTracking = function orderTracking(values) {\n    console.log(values);\n  };\n\n  var fetchPrecoPrazo = function fetchPrecoPrazo(values) {\n    console.log(values);\n  };\n\n  var parcelOptions = [{\n    url: \"http://www2.correios.com.br/sistemas/precosprazos/img/tipo_1.png\",\n    nome: \"Caixa de Encomenda Correios - Tipo 1\",\n    largura: \"18\",\n    comprimento: \"13.5\",\n    altura: \"9\",\n    formato: \"1\"\n  }, {\n    url: \"http://www2.correios.com.br/sistemas/precosprazos/img/tipo_2.png\",\n    nome: \"Caixa de Encomenda Correios - Tipo 2\",\n    largura: \"27\",\n    comprimento: \"18\",\n    altura: \"9\",\n    formato: \"1\"\n  }, {\n    url: \"http://www2.correios.com.br/sistemas/precosprazos/img/tipo_3.png\",\n    nome: \"Caixa de Encomenda Correios - Tipo 3\",\n    largura: \"36\",\n    comprimento: \"27\",\n    altura: \"18\",\n    formato: \"1\"\n  }, {\n    url: \"http://www2.correios.com.br/sistemas/precosprazos/img/tipo_5.png\",\n    nome: \"Caixa de Encomenda Correios - Tipo 5\",\n    largura: \"54\",\n    comprimento: \"36\",\n    altura: \"27\",\n    formato: \"1\"\n  }, {\n    url: \"http://www2.correios.com.br/sistemas/precosprazos/img/tipo_6.png\",\n    nome: \"Caixa de Encomenda Correios - Tipo 6\",\n    largura: \"36\",\n    comprimento: \"27\",\n    altura: \"27\",\n    formato: \"1\"\n  }, {\n    url: \"http://www2.correios.com.br/sistemas/precosprazos/img/tipo_7.png\",\n    nome: \"Caixa de Encomenda Correios - Tipo 7\",\n    largura: \"36\",\n    comprimento: \"28\",\n    altura: \"4\",\n    formato: \"1\"\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Homepage_styles__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"], {\n    defaultActiveKey: ['1'],\n    expandIcon: function expandIcon(_ref) {\n      var isActive = _ref.isActive;\n      return isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaAngleDown\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaAngleRight\"], null);\n    },\n    className: \"main-collapse\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"].Panel, {\n    header: \"Consultar CEP\",\n    key: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    align: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    name: \"consultZipCode\",\n    onFinish: consultZipCode\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"CEP\",\n    name: \"cep\",\n    rules: [{\n      required: true,\n      message: 'Por favor insira o CEP!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mask_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    mask: \"11111-111\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\"\n  }, \"Consultar\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"].Panel, {\n    header: \"Realizar o rastreio de encomenda\",\n    key: \"2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    align: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    name: \"orderTracking\",\n    onFinish: orderTracking\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"C\\xF3digo de rastreio\",\n    name: \"trackingCode\",\n    rules: [{\n      required: true,\n      message: 'Por favor insira o código de rastreio!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\"\n  }, \"Rastrear encomenda\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"].Panel, {\n    header: \"Calcular pre\\xE7o e prazo de determinada encomenda\",\n    key: \"3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    align: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    name: \"fetchPrecoPrazo\",\n    onFinish: fetchPrecoPrazo,\n    ref: fetchPrecoPrazoForm\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Remetente e Destinar\\xE1rio\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"CEP de origem\",\n    name: \"sCepOrigem\",\n    rules: [{\n      required: true,\n      message: 'Por favor insira o CEP de origem!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mask_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    mask: \"11111-111\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"CEP de destino\",\n    name: \"sCepDestino\",\n    rules: [{\n      required: true,\n      message: 'Por favor insira o CEP de destino!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mask_input__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    mask: \"11111-111\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Encomenda\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"dashed\",\n    onClick: function onClick() {\n      return setParcelOptionsModal(true);\n    }\n  }, \"Selecionar tipo de encomenda\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"Altura (cm)\",\n    name: \"nVlAltura\",\n    tooltip: {\n      title: \"Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0).\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInfoCircle\"], null)\n    },\n    rules: [{\n      required: true,\n      message: 'Por favor insira o altura (cm)!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"InputNumber\"], {\n    min: 0,\n    style: {\n      width: \"100%\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"Largura (cm)\",\n    name: \"nVlLargura\",\n    tooltip: {\n      title: \"Largura da encomenda (incluindo embalagem), em centímetros.\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInfoCircle\"], null)\n    },\n    rules: [{\n      required: true,\n      message: 'Por favor insira o largura (cm)!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"InputNumber\"], {\n    min: 0,\n    style: {\n      width: \"100%\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"Comprimento (cm)\",\n    name: \"nVlComprimento\",\n    tooltip: {\n      title: \"Comprimento da encomenda (incluindo embalagem), em centímetros.\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInfoCircle\"], null)\n    },\n    rules: [{\n      required: true,\n      message: 'Por favor insira o comprimento (cm)!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"InputNumber\"], {\n    min: 0,\n    style: {\n      width: \"100%\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"Peso estimado (kg)\",\n    name: \"nVlPeso\",\n    tooltip: {\n      title: \"Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg.\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInfoCircle\"], null)\n    },\n    rules: [{\n      required: true,\n      message: 'Por favor insira o peso estimado (kg)!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Select\"], {\n    required: true,\n    placeholder: \"Selecione o peso estimado (kg)\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"0.3\"\n  }, \"0.3 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"1\"\n  }, \"1 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"2\"\n  }, \"2 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"3\"\n  }, \"3 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"4\"\n  }, \"4 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"5\"\n  }, \"5 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"6\"\n  }, \"6 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"7\"\n  }, \"7 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"8\"\n  }, \"8 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"9\"\n  }, \"9 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"10\"\n  }, \"10 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"11\"\n  }, \"11 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"12\"\n  }, \"12 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"13\"\n  }, \"13 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"14\"\n  }, \"14 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"15\"\n  }, \"15 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"16\"\n  }, \"16 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"17\"\n  }, \"17 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"18\"\n  }, \"18 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"19\"\n  }, \"19 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"20\"\n  }, \"20 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"21\"\n  }, \"21 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"22\"\n  }, \"22 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"23\"\n  }, \"23 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"24\"\n  }, \"24 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"25\"\n  }, \"25 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"26\"\n  }, \"26 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"27\"\n  }, \"27 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"28\"\n  }, \"28 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"29\"\n  }, \"29 kg\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"30\"\n  }, \"30 kg\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    label: \"Formato\",\n    name: \"nCdFormato\",\n    tooltip: {\n      title: \"Formato da encomenda (incluindo embalagem).\",\n      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__[\"FaInfoCircle\"], null)\n    },\n    rules: [{\n      required: true,\n      message: 'Por favor insira o formato!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Select\"], {\n    required: true,\n    placeholder: \"Selecione o formato\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"1\"\n  }, \"Formato caixa/pacote\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"2\"\n  }, \"Formato rolo/prisma\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    value: \"3\"\n  }, \"Envelope\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\"\n  }, \"Calcular\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n    visible: parcelOptionsModal,\n    title: \"Selecionar tipo de encomenda\",\n    onCancel: function onCancel() {\n      return setParcelOptionsModal(false);\n    },\n    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"back\",\n      onClick: function onClick() {\n        return setParcelOptionsModal(false);\n      }\n    }, \"Voltar\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"submit\",\n      type: \"primary\",\n      onClick: function onClick() {\n        return setParcelOptionsModal(false);\n      }\n    }, \"Ok\")]\n  }, parcelOptions.map(function (option) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        margin: \"5px\",\n        border: \"1px dashed\",\n        backgroundColor: \"white\",\n        color: \"black\"\n      },\n      align: \"center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        display: \"inline-block\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: option.url,\n      style: {\n        width: \"auto\",\n        maxHeight: \"120px\"\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        display: \"inline-block\",\n        paddingLeft: \"25px\",\n        paddingTop: \"15px\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        display: \"block\"\n      }\n    }, option.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        display: \"block\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Dimens\\xF5es (LxCxA):\"), \" \", option.largura, \" x \", option.comprimento, \" x \", option.altura, \" cm\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      key: \"submit\",\n      type: \"primary\",\n      onClick: function onClick() {\n        return handleChangeType(option);\n      },\n      style: {\n        marginTop: \"10px\"\n      }\n    }, \"Selecionar esse tipo\")));\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\n\n//# sourceURL=webpack:///./src/shared/components/homepage/Homepage.jsx?");

/***/ }),

/***/ "./src/shared/components/homepage/Homepage.styles.jsx":
/*!************************************************************!*\
  !*** ./src/shared/components/homepage/Homepage.styles.jsx ***!
  \************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 100%;\\n    height: 100vh;\\n    display: flex;    \\n    align-items: center;\\n    flex-direction: column;\\n    justify-content: center;\\n    \\n    \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n\n//# sourceURL=webpack:///./src/shared/components/homepage/Homepage.styles.jsx?");

/***/ }),

/***/ "./src/shared/redux/app/actions.jsx":
/*!******************************************!*\
  !*** ./src/shared/redux/app/actions.jsx ***!
  \******************************************/
/*! exports provided: getView, updateView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getView\", function() { return getView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateView\", function() { return updateView; });\nfunction getView(width) {\n  var newView = 'mobile';\n  if (width > 767) newView = 'desktop';\n  return newView;\n}\nfunction updateView() {\n  return function (dispatch) {\n    var newView = 'desktop';\n    if (false) {}\n    dispatch({\n      type: \"UPDATE_VIEW\",\n      payload: {\n        newView: newView\n      }\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/shared/redux/app/actions.jsx?");

/***/ }),

/***/ "./src/shared/redux/app/reducer.jsx":
/*!******************************************!*\
  !*** ./src/shared/redux/app/reducer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/shared/redux/app/actions.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar INITIAL_STATE = {\n  appView:  false ? undefined : 'desktop'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"UPDATE_VIEW\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        appView: action.payload.newView\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/shared/redux/app/reducer.jsx?");

/***/ }),

/***/ "./src/shared/redux/notifications/actions.jsx":
/*!****************************************************!*\
  !*** ./src/shared/redux/notifications/actions.jsx ***!
  \****************************************************/
/*! exports provided: pushNotification, popNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushNotification\", function() { return pushNotification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popNotification\", function() { return popNotification; });\nfunction pushNotification(type, title, text) {\n  return function (dispatch) {\n    dispatch({\n      type: \"PUSH_NOTIFICATION\",\n      payload: {\n        type: type,\n        title: title,\n        text: text\n      }\n    });\n  };\n}\nfunction popNotification() {\n  return function (dispatch) {\n    dispatch({\n      type: \"POP_NOTIFICATION\"\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/shared/redux/notifications/actions.jsx?");

/***/ }),

/***/ "./src/shared/redux/notifications/reducer.jsx":
/*!****************************************************!*\
  !*** ./src/shared/redux/notifications/reducer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar INITIAL_STATE = {\n  notificationsQueue: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var newStack;\n\n  switch (action.type) {\n    case \"PUSH_NOTIFICATION\":\n      newStack = state.notificationsQueue;\n      newStack.push({\n        type: action.payload.type,\n        title: action.payload.title,\n        text: action.payload.text\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notificationsQueue: newStack\n      });\n\n    case \"POP_NOTIFICATION\":\n      newStack = state.notificationsQueue;\n      newStack.shift();\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notificationsQueue: newStack\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/shared/redux/notifications/reducer.jsx?");

/***/ }),

/***/ "./src/shared/redux/postOffice/actions.jsx":
/*!*************************************************!*\
  !*** ./src/shared/redux/postOffice/actions.jsx ***!
  \*************************************************/
/*! exports provided: clearPostOfficeStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPostOfficeStatus\", function() { return clearPostOfficeStatus; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web_config_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web/config/globals */ \"./src/config/globals.jsx\");\n\n\nfunction clearPostOfficeStatus() {\n  return function (dispatch) {\n    dispatch({\n      type: \"CLEAR_ERROR_STATUS\"\n    });\n  };\n}\n\nfunction reportError(message) {\n  return function (dispatch) {\n    dispatch({\n      type: \"REPORT_ERROR\",\n      payload: {\n        message: message\n      }\n    });\n  };\n}\n\nfunction reportSuccess(message) {\n  return function (dispatch) {\n    dispatch({\n      type: \"REPORT_SUCCESS\",\n      payload: {\n        message: message\n      }\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/shared/redux/postOffice/actions.jsx?");

/***/ }),

/***/ "./src/shared/redux/postOffice/reducer.jsx":
/*!*************************************************!*\
  !*** ./src/shared/redux/postOffice/reducer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar INITIAL_STATE = {\n  postOfficeSuccess: {\n    status: false,\n    message: \"\"\n  },\n  postOfficeError: {\n    status: false,\n    message: \"\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'REPORT_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        postOfficeError: {\n          status: false,\n          message: \"\"\n        },\n        postOfficeSuccess: {\n          status: true,\n          message: action.payload.message\n        }\n      });\n\n    case 'REPORT_ERROR':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        postOfficeSuccess: {\n          status: false,\n          message: \"\"\n        },\n        postOfficeError: {\n          status: true,\n          message: action.payload.message\n        }\n      });\n\n    case 'CLEAR_ERROR_STATUS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        postOfficeSuccess: {\n          status: false,\n          message: \"\"\n        },\n        postOfficeError: {\n          status: false,\n          message: \"\"\n        }\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/shared/redux/postOffice/reducer.jsx?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "antd-mask-input":
/*!**********************************!*\
  !*** external "antd-mask-input" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd-mask-input\");\n\n//# sourceURL=webpack:///external_%22antd-mask-input%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");\n\n//# sourceURL=webpack:///external_%22react-icons/fa%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-multi":
/*!******************************!*\
  !*** external "redux-multi" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-multi\");\n\n//# sourceURL=webpack:///external_%22redux-multi%22?");

/***/ }),

/***/ "redux-promise":
/*!********************************!*\
  !*** external "redux-promise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-promise\");\n\n//# sourceURL=webpack:///external_%22redux-promise%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });