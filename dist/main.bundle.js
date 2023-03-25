"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkMealDB"] = self["webpackChunkMealDB"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/patternpad.svg */ \"./src/img/patternpad.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header-background.png */ \"./src/img/header-background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/logo.png */ \"./src/img/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  background: #fafafa;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Comic Sans MS', 'Courier New', Courier, monospace;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  max-width: 60rem;\\r\\n  margin: 0 auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\\r\\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\\r\\n  gap: 0.125rem 0.0125rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. header .'\\r\\n    '. main .'\\r\\n    '. footer .';\\r\\n}\\r\\n\\r\\nheader {\\r\\n  grid-area: header;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-end;\\r\\n  border-bottom: 2px #dbdbdb solid;\\r\\n  padding: 5px;\\r\\n  padding-bottom: 1px;\\r\\n  color: #fff;\\r\\n  height: 170px;\\r\\n  background: no-repeat center/100% url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  grid-area: footer;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-top: 2px #dbdbdb solid;\\r\\n}\\r\\n\\r\\n.nav-bar-list {\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-left: 5rem;\\r\\n  cursor: pointer;\\r\\n  background-color: #595959;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  border-bottom: 2px solid #d6d6d6;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  font-weight: bold;\\r\\n  border-bottom: 2px solid #d6d6d6;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 200px;\\r\\n  background-size: contain;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  height: 150px;\\r\\n  border: 3px #f70324;\\r\\n}\\r\\n\\r\\n/** populate  **/\\r\\n\\r\\nmain {\\r\\n  margin: 1rem 0;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr;\\r\\n  gap: 0.7rem 0.7rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-area: main;\\r\\n}\\r\\n\\r\\n.card-food {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1.4fr 0.6fr;\\r\\n  grid-template-rows: 2fr 0.4fr 0.2fr;\\r\\n  gap: 0;\\r\\n  grid-template-areas:\\r\\n    'card-img card-img card-img'\\r\\n    'card-title card-title card-title'\\r\\n    'btn-recipe . btn-liked';\\r\\n  border: #a2f703 1px solid;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  overflow: hidden;\\r\\n  box-sizing: border-box;\\r\\n  grid-area: card-img;\\r\\n}\\r\\n\\r\\n.card-img :hover {\\r\\n  cursor: grab;\\r\\n}\\r\\n\\r\\n.img-food {\\r\\n  width: 100%;\\r\\n  min-height: 250px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  grid-area: card-title;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-recipe {\\r\\n  background: #568203;\\r\\n  border: none;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  padding: 0.1rem 0.4rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn-liked {\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: space-evenly;\\r\\n  background: white;\\r\\n  border: none;\\r\\n  color: #568203;\\r\\n  font-weight: bold;\\r\\n  font-size: 0.8em;\\r\\n  padding: 0.1rem 0.2rem;\\r\\n}\\r\\n\\r\\n.no-grid {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.hiden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.popuptext {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-grow: 1;\\r\\n  width: 100%;\\r\\n  background-color: #568203;\\r\\n  color: #fff;\\r\\n  border-radius: 6px;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n.popuptext button {\\r\\n  cursor: pointer;\\r\\n  align-self: flex-end;\\r\\n  margin: 10px 20px;\\r\\n  padding: 5px;\\r\\n  font-weight: bold;\\r\\n  background-color: #568203;\\r\\n  color: #333;\\r\\n  border: none;\\r\\n  font-size: xx-large;\\r\\n}\\r\\n\\r\\n.recipe {\\r\\n  height: 200px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.mesgFormContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.mesgContent {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.mesgContent input,\\r\\n.mesgContent textarea {\\r\\n  margin-bottom: 10px;\\r\\n  color: #333;\\r\\n  border-radius: 6px;\\r\\n  font-size: medium;\\r\\n}\\r\\n\\r\\n.mesgContent input[type='button'] {\\r\\n  background-color: #f6e0c0;\\r\\n  border: 1px solid #333;\\r\\n  font-weight: bold;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ntextarea:focus,\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.mesgContent div {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 767px) {\\r\\n  header {\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://MealDB/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://MealDB/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://MealDB/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://MealDB/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://MealDB/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://MealDB/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://MealDB/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://MealDB/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://MealDB/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://MealDB/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://MealDB/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMeals.js */ \"./src/modules/getMeals.js\");\n\n\n\nconst [liStarter, liVegan, livege] = document.querySelectorAll('li');\nlet menuSelected = liStarter;\n\nconst allStarter = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter';\nconst allvegan = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan';\nconst allvege = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';\n\nliStarter.addEventListener('click', () => {\n  menuSelected = liStarter;\n  liStarter.classList.add('selected');\n  liVegan.classList.remove('selected');\n  livege.classList.remove('selected');\n  menuSelected.textContent = 'Starter';\n  livege.textContent = 'Vegeterian';\n  liVegan.textContent = 'Vegan';\n  (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allStarter, menuSelected);\n});\n\nliVegan.addEventListener('click', () => {\n  menuSelected = liVegan;\n  liStarter.classList.remove('selected');\n  liVegan.classList.add('selected');\n  livege.classList.remove('selected');\n  menuSelected.textContent = 'Vegan';\n  liStarter.textContent = 'Starter';\n  livege.textContent = 'Vegeterian';\n  (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allvegan, menuSelected);\n});\n\nlivege.addEventListener('click', () => {\n  menuSelected = livege;\n  liStarter.classList.remove('selected');\n  liVegan.classList.remove('selected');\n  livege.classList.add('selected');\n  menuSelected.textContent = 'Vegeterian';\n  liStarter.textContent = 'Starter';\n  liVegan.textContent = 'Vegan';\n  (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allvege, menuSelected);\n});\n\n(0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allStarter, menuSelected);\n\n//# sourceURL=webpack://MealDB/./src/index.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countComment\": () => (/* binding */ countComment),\n/* harmony export */   \"displayComents\": () => (/* binding */ displayComents),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst countComment = (arr, title) => {\n  const counter = ` (${arr.length})`;\n  title.innerHTML += counter;\n};\n\nconst getComments = async (id) => {\n  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TlaDzXrnU0ZYjAKdWxNN/comments?item_id=';\n  const request = new Request(getMessagesLink + id);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n  return responseJson;\n};\n\nconst displayComents = (arr, container) => {\n  container.innerHTML = '';\n  const title = document.createElement('h3');\n  title.innerHTML = 'Comments';\n  container.appendChild(title);\n  const messageData = document.createElement('div');\n  messageData.classList.add('mesgContent');\n  if (!arr.error) {\n    countComment(arr, title);\n    if (arr.length > 0) {\n      arr.forEach((element) => {\n        const messItem = document.createElement('div');\n        messItem.innerHTML = `\n      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr/>`;\n        messageData.appendChild(messItem);\n      });\n    }\n  } else {\n    title.innerText += ' (0)';\n    messageData.innerHTML = '<span>Any Comments Yet</span><hr width=\"250px\">';\n  }\n  container.appendChild(messageData);\n};\n\n\n\n//# sourceURL=webpack://MealDB/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikeToItem\": () => (/* binding */ addLikeToItem),\n/* harmony export */   \"getLikesToItems\": () => (/* binding */ getLikesToItems)\n/* harmony export */ });\nconst likesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TlaDzXrnU0ZYjAKdWxNN/likes/';\n\nconst addLikeToItem = async (itemId) => {\n  const request = new Request(likesLink);\n  const response = await fetch(request, {\n    method: 'POST',\n    mode: 'cors',\n    body: JSON.stringify({ item_id: `${itemId}` }),\n    cache: 'no-cache',\n    credentials: 'same-origin',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  return response;\n};\n\nconst getLikesToItems = async () => {\n  const response = await fetch(likesLink);\n  const data = await response.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://MealDB/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getMealDetails.js":
/*!***************************************!*\
  !*** ./src/modules/getMealDetails.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMealDetails)\n/* harmony export */ });\n/* harmony import */ var _hideItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideItems.js */ \"./src/modules/hideItems.js\");\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComment.js */ \"./src/modules/getComment.js\");\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n\n\n\n\nconst mainCont = document.querySelector('.main-meals-list');\n\nconst closePopup = (elem) => {\n  mainCont.classList.toggle('no-grid');\n  (0,_hideItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  mainCont.removeChild(elem);\n};\n\nconst createPopup = (details, msgDat) => {\n  const myPopup = document.createElement('div');\n  const popupButon = document.createElement('button');\n  const itemdata = document.createElement('div');\n  itemdata.classList.add('mesgFormContainer');\n  const messageContainer = document.createElement('div');\n  messageContainer.id = 'mesgContainer';\n  messageContainer.classList.add('mesgFormContainer');\n  const newMessCont = document.createElement('div');\n  newMessCont.classList.add('mesgFormContainer');\n  (0,_getComment_js__WEBPACK_IMPORTED_MODULE_1__.displayComents)(msgDat, messageContainer);\n  (0,_postComment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newMessCont, details.idMeal);\n\n  itemdata.innerHTML = `<img src=\"${details.strMealThumb}\" width=\"250px\"><h2>${details.strMeal}</h2><h4>Ingredients:</h4><p>${details.strIngredient1}, ${details.strIngredient2}, ${details.strIngredient3}, ${details.strIngredient4}, ${details.strIngredient5}</p><h4>Recipe:</h4>\n  <p class=\"recipe\">${details.strInstructions}</p>`;\n  itemdata.id = details.idMeal;\n  myPopup.id = 'myPopup';\n  popupButon.innerHTML = 'X';\n  popupButon.addEventListener('click', () => closePopup(myPopup));\n  myPopup.classList.add('popuptext');\n  myPopup.classList.toggle('show');\n  mainCont.classList.toggle('no-grid');\n  myPopup.appendChild(popupButon);\n  myPopup.appendChild(itemdata);\n  myPopup.appendChild(messageContainer);\n  myPopup.appendChild(newMessCont);\n  mainCont.appendChild(myPopup);\n};\n\nconst getMealDetails = async (id) => {\n  const foodItemDataURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\n  const request = new Request(foodItemDataURL + id);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n  const responsInfo = responseJson.meals[0];\n\n  const messageData = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id);\n\n  createPopup(responsInfo, messageData);\n};\n\n\n\n//# sourceURL=webpack://MealDB/./src/modules/getMealDetails.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMeals),\n/* harmony export */   \"mealCounter\": () => (/* binding */ mealCounter)\n/* harmony export */ });\n/* harmony import */ var _getMealDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMealDetails.js */ \"./src/modules/getMealDetails.js\");\n/* harmony import */ var _hideItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideItems.js */ \"./src/modules/hideItems.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\n\n\n\nconst populateMeals = (list) => {\n  const board = document.querySelector('.main-meals-list');\n  board.innerHTML = '';\n  list.forEach((food) => {\n    const item = document.createElement('article');\n    item.id = food.idMeal;\n    item.classList.add('card-food');\n    item.innerHTML = `\n    <div class=\"card-title\">\n          <h5>${food.strMeal}</h5>\n        </div>        \n        <!--<button type=\"button\" class=\"btn-recipe\">Recipe</button>-->\n        <div>        \n        </div>\n        <div class=\"btn-liked\">\n          Like\n        </div>\n        <div class=\"card-img\">\n         <img src=\"${food.strMealThumb}\" class=\"img-food\">        \n        </div>     \n    `;\n\n    const btnRecipeElement = item.querySelector('.card-img');\n    const btnLikedElement = item.querySelector('.btn-liked');\n    const printLike = (data) => {\n      const likesReturned = data.find(\n        (element) => element.item_id === food.idMeal,\n      );\n\n      btnLikedElement.innerHTML = likesReturned !== undefined\n        ? `<i class=\"far fa-thumbs-up fa-lg\"></i> ${likesReturned.likes}`\n        : '<i class=\"far fa-thumbs-up fa-lg\"></i> 0';\n    };\n    (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()\n      .then(printLike)\n      .catch();\n\n    btnLikedElement.addEventListener('click', () => {\n      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.addLikeToItem)(food.idMeal);\n      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.getLikesToItems)()\n        .then(printLike)\n        .catch();\n    });\n\n    btnRecipeElement.addEventListener('click', () => {\n      (0,_getMealDetails_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(food.idMeal);\n      (0,_hideItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    board.appendChild(item);\n  });\n};\n\nconst mealCounter = (typeFoodSelected, count) => {\n  typeFoodSelected.innerHTML = `${typeFoodSelected.textContent} (${count})`;\n};\n\nconst getMeals = async (apiLink, menuSelected) => {\n  const request = new Request(apiLink);\n  const response = await fetch(request);\n  const replayJSON = await response.json();\n  const replayInfo = replayJSON.meals;\n  mealCounter(menuSelected, replayInfo.length);\n  populateMeals(replayInfo);\n};\n\n\n\n\n//# sourceURL=webpack://MealDB/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/hideItems.js":
/*!**********************************!*\
  !*** ./src/modules/hideItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hideItems)\n/* harmony export */ });\nconst hideItems = () => {\n  const items = document.querySelectorAll('.card-food');\n  items.forEach((e) => {\n    e.classList.toggle('hiden');\n  });\n};\n\n\n\n//# sourceURL=webpack://MealDB/./src/modules/hideItems.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newMessageForm)\n/* harmony export */ });\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComment.js */ \"./src/modules/getComment.js\");\n\n\n// function to post element\nconst postNewMessage = async (id, name, text) => {\n  const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TlaDzXrnU0ZYjAKdWxNN/comments';\n  const request = new Request(postMessageLink);\n  const data = {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username: name,\n      comment: text,\n    }),\n  };\n\n  await fetch(request, data);\n  const arr = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  const container = document.getElementById('mesgContainer');\n  (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__.displayComents)(arr, container);\n};\n\nconst newMessage = (id, user, message) => {\n  if (user.value !== '' && message.value !== '') {\n    postNewMessage(id, user.value, message.value);\n    user.value = '';\n    message.value = '';\n  }\n};\n\nconst newMessageForm = (container, itemId) => {\n  const formNewMessage = document.createElement('div');\n  formNewMessage.innerHTML = '<h3 class=\"aligCener\">Add a Comment</h3>';\n  formNewMessage.classList.add('mesgContent');\n  const userName = document.createElement('input');\n  userName.type = 'text';\n  userName.name = 'username';\n  userName.placeholder = 'Your name';\n  const textMessage = document.createElement('textarea');\n  textMessage.name = 'comment';\n  textMessage.rows = '4';\n  textMessage.cols = '30';\n  textMessage.placeholder = 'Your comment';\n  const button = document.createElement('input');\n  button.type = 'button';\n  button.value = 'Comment';\n  button.addEventListener('click', () => newMessage(itemId, userName, textMessage));\n  formNewMessage.appendChild(userName);\n  formNewMessage.appendChild(textMessage);\n  formNewMessage.appendChild(button);\n\n  container.appendChild(formNewMessage);\n};\n\n\n\n\n//# sourceURL=webpack://MealDB/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/img/header-background.png":
/*!***************************************!*\
  !*** ./src/img/header-background.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c28b4fa87b9bb534bbd.png\";\n\n//# sourceURL=webpack://MealDB/./src/img/header-background.png?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a44f53dd15917e6f122a.png\";\n\n//# sourceURL=webpack://MealDB/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/patternpad.svg":
/*!********************************!*\
  !*** ./src/img/patternpad.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89201b9d2b299dd694c2.svg\";\n\n//# sourceURL=webpack://MealDB/./src/img/patternpad.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);