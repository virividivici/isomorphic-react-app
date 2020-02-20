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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./iso-middleware/renderRoute.js":
/*!***************************************!*\
  !*** ./iso-middleware/renderRoute.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/routes */ \"./src/routes.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\n\n\nfunction renderRoute(req, res) {\n  /** \n  * const currentRoute =\n  Routes.find(route => matchPath(req.url, route)) || {};\n  let promise;\n  if (currentRoute.loadData) {\n  promise = currentRoute.loadData();\n  } else {\n  promise = Promise.resolve(null);\n  } \n  * In cases where multiple routes may be rendered at the same time,\n  *  matchPath won’t work because it’ll only match one route.\n  *  matchRoutes is an utility that helps match multiple possible routes.\n  That means that we can instead fill an array with promises for matching \n  routes and then call Promise.all on all matching routes to resolve the loadData promise of each matching route.\n  */\n  const matchingRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"matchRoutes\"])(_src_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"], req.url);\n  const locale = req.cookies.locale;\n  const messages = {};\n  ['en', 'de'].forEach(locale => {\n    messages[locale] = __webpack_require__(\"./public/translation sync recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`);\n  });\n  let promises = [];\n  matchingRoutes.forEach(route => {\n    if (route.loadData) {\n      promises.push(route.loadData());\n    }\n  });\n  Promise.all(promises).then(data => {\n    // Let's add the data to the context\n    const context = data.reduce((context, data) => Object.assign(context, data), {});\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__[\"IntlProvider\"], {\n      locale: locale,\n      messages: messages[locale]\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null))));\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./build/index.html');\n    fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(indexFile, 'utf8', (err, indexData) => {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n\n      if (context.status === 404) {\n        res.status(404);\n      }\n\n      if (context.url) {\n        return res.redirect(301, context.url);\n      }\n\n      return res.send(indexData.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`).replace('</body>', `<script>window.__ROUTE_DATA__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data)}</script></body>`));\n    });\n  });\n}\n\n//# sourceURL=webpack:///./iso-middleware/renderRoute.js?");

/***/ }),

/***/ "./public/translation sync recursive ^\\.\\/.*\\.json$":
/*!************************************************!*\
  !*** ./public/translation sync ^\.\/.*\.json$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./de.json\": \"./public/translation/de.json\",\n\t\"./en.json\": \"./public/translation/en.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./public/translation sync recursive ^\\\\.\\\\/.*\\\\.json$\";\n\n//# sourceURL=webpack:///./public/translation_sync_^\\.\\/.*\\.json$?");

/***/ }),

/***/ "./public/translation/de.json":
/*!************************************!*\
  !*** ./public/translation/de.json ***!
  \************************************/
/*! exports provided: app.hello_world, app.hello_world2, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"app.hello_world\\\":\\\"DE_Hello World!\\\",\\\"app.hello_world2\\\":\\\"DE_Hello World 2!\\\"}\");\n\n//# sourceURL=webpack:///./public/translation/de.json?");

/***/ }),

/***/ "./public/translation/en.json":
/*!************************************!*\
  !*** ./public/translation/en.json ***!
  \************************************/
/*! exports provided: app.hello_world, app.hello_world2, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"app.hello_world\\\":\\\"Hello World from translation file!\\\",\\\"app.hello_world2\\\":\\\"Hello World 2!\\\"}\");\n\n//# sourceURL=webpack:///./public/translation/en.json?");

/***/ }),

/***/ "./server/api/api1.js":
/*!****************************!*\
  !*** ./server/api/api1.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nconst quotes = ['The right to do something does not mean that doing it is right. ~ William Safire', 'It is the mark of an educated mind to be able to entertain a thought without accepting it. ~ Aristotle', 'Education is not the filing of a pail, but the lighting of a fire. ~ William Butler Yeats', 'You have to dream before your dream can come true. ~ Abdul Kalam', 'All life is an experiment. The more experiements you make the better. ~ Ralph Waldo Emerson', 'All the art of living lies in a fine mingling of letting go and holding on. ~ Henry Ellis', 'The price of anything is the amount of life you exchange for it. ~ Henry David Thoreau', 'Discipline is the bridge betwenn goal and accomplishment. ~ John Rohn', 'Life is the sum of your choices. ~ Albert Camus', 'Not life, but good ilfe, is to be chiefly valued. ~ Socrates', 'It is not in the stars to hold our destiny but in ourselves. ~ William Shakespeare', 'Experience is not what happens to you; It is what you do with what happens to you. ~ Aldous Huxley', 'Failure is only the opportunity to begin again, only this time more wisely.” ~ Henry Ford']; // a random index between 0 and quotes.length\n\nconst randomInd = rand => Math.floor(rand * quotes.length);\n\napi.get('/hello', (req, res) => {\n  res.send({\n    express: `You can choose from ${quotes.length} quotes`\n  });\n});\napi.get('/quote/:rand', (req, res) => {\n  const rand = parseFloat(req.params.rand);\n\n  if (Number.isNaN(rand)) {\n    res.send({\n      express: 'Bad request.'\n    });\n    return;\n  }\n\n  const randomQuote = quotes[randomInd(rand)];\n  res.send({\n    express: `${randomQuote}`\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n//# sourceURL=webpack:///./server/api/api1.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var accept_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! accept-language */ \"accept-language\");\n/* harmony import */ var accept_language__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(accept_language__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_api1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/api1 */ \"./server/api/api1.js\");\n/* harmony import */ var _iso_middleware_renderRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iso-middleware/renderRoute */ \"./iso-middleware/renderRoute.js\");\n\n\n\n\n\n\n\n // Configuration ===============================================================\n\naccept_language__WEBPACK_IMPORTED_MODULE_5___default.a.languages(['en', 'de']);\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst PORT = process.env.PORT || 3000;\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('short')); // We are using the accept-language package, which extracts locales from HTTP\n// headers and finds the most relevant among the ones supported by your website.\n// If none are found, then you’d fall back to the website’s default locale.\n// For returning users, we will check the cookie’s value instead.\n\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/public/translation', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public/translation'));\n\nfunction detectLocale(req) {\n  const cookieLocale = req.cookies.locale;\n  console.log('cookieLocale', cookieLocale);\n  console.log('req.headers[accept-language]', req.headers['accept-language']);\n  return accept_language__WEBPACK_IMPORTED_MODULE_5___default.a.get(cookieLocale || req.headers['accept-language']) || 'en';\n}\n\napp.use((req, res, next) => {\n  const locale = detectLocale(req);\n  console.log('locale ====>', locale);\n  res.cookie('locale', locale, {\n    maxAge: new Date() * 0.001 + 365 * 24 * 3600\n  });\n  next();\n}); // redirect Example\n\nconst targetBaseUrl = \"https://www.steelscout.com/en-GB\";\n\nfunction handleRedirect(req, res) {\n  const targetUrl = targetBaseUrl + req.originalUrl;\n  res.redirect(targetUrl);\n}\n\napp.get('/get-quote', handleRedirect); //app.use(express.static('./build'));\n\napp.use('/', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('./build'));\napp.use('/api', _api_api1__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('./build'));\napp.get('/*', _iso_middleware_renderRoute__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.listen(PORT, () => {\n  console.log(`😎 Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var _common_components_LocaleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/LocaleButton */ \"./src/common/components/LocaleButton.js\");\n\n\n\n\n\n\n\nfunction App() {\n  const {\n    messages,\n    locale\n  } = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"useIntl\"])();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav-wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\",\n    className: \"brand-logo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Isomorphic Prototype\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"nav-mobile\",\n    className: \"right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/about\"\n  }, \"about\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/posts\"\n  }, \"Posts\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/todos\"\n  }, \"Todos\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_LocaleButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    locale: locale\n  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, messages['app.hello_world2']), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/common/components/LocaleButton.js":
/*!***********************************************!*\
  !*** ./src/common/components/LocaleButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass LocaleButton extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('locale', this.props.locale === 'en' ? 'de' : 'en');\n    window.location.reload();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleClick\n    }, this.props.locale === 'en' ? 'English' : 'German');\n  }\n\n}\n\nLocaleButton.propTypes = {\n  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocaleButton);\n\n//# sourceURL=webpack:///./src/common/components/LocaleButton.js?");

/***/ }),

/***/ "./src/containers/Home.js":
/*!********************************!*\
  !*** ./src/containers/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this.callApi = async function (endpoint) {\n      const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(endpoint);\n      const body = await response.json();\n      if (response.status !== 200) throw Error(body.message);\n      return body;\n    };\n\n    this.state = {\n      resHello: 'Loading...',\n      resQuote: 'Loading...'\n    };\n  }\n\n  componentWillMount() {\n    // Get hello message\n    this.callApi('http://localhost:3000/api/hello').then(res => this.setState({\n      resHello: res.express\n    })).catch(err => console.log(err)); // Get random quote\n\n    const rand = Math.random();\n    this.callApi(`http://localhost:3000/api/quote/${rand}`).then(res => this.setState({\n      resQuote: res.express\n    })).catch(err => console.log(err));\n  }\n\n  render() {\n    console.log('rendering: Home');\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home page\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], {\n      id: \"app.hello_world\",\n      defaultMessage: \"Hello World!\",\n      description: \"Hello world header greeting\"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", null, `Static content from the server: ${this.state.resHello}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Isomorphic fetch content\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", null, this.state.resQuote)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/containers/Home.js?");

/***/ }),

/***/ "./src/containers/NotFound.js":
/*!************************************!*\
  !*** ./src/containers/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  staticContext = {}\n}) => {\n  staticContext.status = 404;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Oops, nothing here!\");\n});\n\n//# sourceURL=webpack:///./src/containers/NotFound.js?");

/***/ }),

/***/ "./src/containers/Posts.js":
/*!*********************************!*\
  !*** ./src/containers/Posts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_loadData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/loadData */ \"./src/helpers/loadData.js\");\n\n\n\nclass Posts extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    if (props.staticContext && props.staticContext.data) {\n      this.state = {\n        data: props.staticContext.data\n      };\n    } else {\n      this.state = {\n        data: []\n      };\n    }\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      if (window.__ROUTE_DATA__) {\n        this.setState({\n          data: window.__ROUTE_DATA__\n        });\n        delete window.__ROUTE_DATA__;\n      } else {\n        Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('posts').then(data => {\n          this.setState({\n            data\n          });\n        });\n      }\n    }, 0);\n  }\n\n  render() {\n    const {\n      data\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Latest Posts\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, data.map(post => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: post.id\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", null, post.title)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\n//# sourceURL=webpack:///./src/containers/Posts.js?");

/***/ }),

/***/ "./src/containers/Todos.js":
/*!*********************************!*\
  !*** ./src/containers/Todos.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_loadData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/loadData */ \"./src/helpers/loadData.js\");\n\n\n\nclass Todos extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    if (props.staticContext && props.staticContext.data) {\n      this.state = {\n        data: props.staticContext.data\n      };\n    } else {\n      this.state = {\n        data: []\n      };\n    }\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      if (window.__ROUTE_DATA__) {\n        this.setState({\n          data: window.__ROUTE_DATA__\n        });\n        delete window.__ROUTE_DATA__;\n      } else {\n        Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('todos').then(data => {\n          this.setState({\n            data\n          });\n        });\n      }\n    }, 0);\n  }\n\n  render() {\n    const {\n      data\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, data.map(todo => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: todo.id\n    }, todo.title)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\n//# sourceURL=webpack:///./src/containers/Todos.js?");

/***/ }),

/***/ "./src/helpers/loadData.js":
/*!*********************************!*\
  !*** ./src/helpers/loadData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resourceType => {\n  return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`).then(res => {\n    return res.json();\n  }).then(data => {\n    // only keep 10 first results\n    return data.filter((_, idx) => idx < 10);\n  });\n});\n\n//# sourceURL=webpack:///./src/helpers/loadData.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home.js\");\n/* harmony import */ var _containers_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Todos */ \"./src/containers/Todos.js\");\n/* harmony import */ var _containers_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Posts */ \"./src/containers/Posts.js\");\n/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound.js\");\n/* harmony import */ var _helpers_loadData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/loadData */ \"./src/helpers/loadData.js\");\n\n\n\n\n\n\n\nconst Routes = [{\n  path: '/',\n  exact: true,\n  component: _containers_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/about',\n  component: _containers_Todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  loadData: () => Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('about')\n}, {\n  path: '/posts',\n  component: _containers_Posts__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  loadData: () => Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('posts')\n}, {\n  path: '/todos',\n  component: _containers_Todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  loadData: () => Object(_helpers_loadData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('todos')\n}, {\n  component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "accept-language":
/*!**********************************!*\
  !*** external "accept-language" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"accept-language\");\n\n//# sourceURL=webpack:///external_%22accept-language%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");\n\n//# sourceURL=webpack:///external_%22js-cookie%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

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

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");\n\n//# sourceURL=webpack:///external_%22react-intl%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });