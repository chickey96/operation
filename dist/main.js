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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Body; });\n\nclass Body {\n\n  draw(ctx) {\n    let body = new Image();\n    body.src = \"http://chittagongit.com//images/human-body-icon/human-body-icon-1.jpg\"\n    body.onload = function () {\n      ctx.drawImage(body, 185, 25, 275, 550)\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/body.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n\n\nclass Game{\n  constructor(organs, ctx) {\n    this.organs = organs;\n    this.dragging = false;\n    this.changeInX = 0;\n    this.changeInY = 0;\n    this.selection = null;\n    this.ctx = ctx;\n    \n    let canvas = document.getElementById('canvas');\n    canvas.addEventListener('mousedown', mouseDown.bind(this));\n    canvas.addEventListener('mousemove', mouseMove.bind(this));\n    canvas.addEventListener('mouseup', mouseUp.bind(this));\n   \n    function mouseDown(e) {\n      let mouseX = e.layerX;\n      let mouseY = e.layerY;\n      this.organs.forEach( organ => {\n        if (mouseX >= organ.x && mouseX <= (organ.x + organ.width) \n        && mouseY >= organ.y  && mouseY <= (organ.y + organ.height))\n        {\n          this.selection = organ;\n          this.dragging = true;\n          this.redrawn = false;\n          return;\n        } \n      })\n    }\n\n    function mouseMove(e) {\n      let mouseX = e.layerX;\n      let mouseY = e.layerY;\n      if(this.dragging){\n        this.changeInX = mouseX - this.selection.x;\n        this.changeInY = mouseY - this.selection.y;\n        this.selection.setX(this.selection.x + this.changeInX);\n        this.selection.setY(this.selection.y + this.changeInY);\n        let canvas = document.getElementById('canvas');\n        this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n        new _body__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().draw(this.ctx);\n        this.organs.forEach(organ => {\n          organ.draw(this.ctx);\n        })\n      }\n    } \n\n    function mouseUp (e) {\n      this.dragging = false;\n    }\n  } \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/table.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruments */ \"./src/instruments.js\");\n/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_instruments__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\n\n\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  element.className = \"operating-room\"\n  return element;\n}\n\ndocument.body.appendChild(component());\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.width = 900;\n  canvas.height = 600;\n  var context = canvas.getContext(\"2d\");\n\n  new _setup__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/instruments.js":
/*!****************************!*\
  !*** ./src/instruments.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function instruments() {\n  let instruments = document.createElement('div');\n  instruments.className = 'instruments';\n  return instruments;\n}\n\ndocument.body.appendChild(instruments());\n\n//# sourceURL=webpack:///./src/instruments.js?");

/***/ }),

/***/ "./src/organs/colon.js":
/*!*****************************!*\
  !*** ./src/organs/colon.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Colon; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Colon extends Organ {\n  constructor() {\n    super()\n    if (!this.x) {\n      this.x = 600;\n    }\n    if (!this.y) {\n      this.y = 100;\n    }\n    this.width = 60;\n    this.height = 70;\n  }\n\n  draw(ctx) {\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://marketplace.canva.com/MACzsJy7L9k/1/thumbnail_large/canva-human-organ-intestine-colon-MACzsJy7L9k.png\"\n    options.x = this.x;\n    options.y = this.y;\n    options.width = this.width;\n    options.height = this.height;\n    Organ.prototype.draw(options);\n  }\n\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n \n}\n\n\n\n\n//# sourceURL=webpack:///./src/organs/colon.js?");

/***/ }),

/***/ "./src/organs/heart.js":
/*!*****************************!*\
  !*** ./src/organs/heart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heart; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Heart extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n\n  constructor(){\n    super()\n    if(!this.x){\n      this.x = 500;\n    }\n    if(!this.y){\n      this.y = 300;\n    }\n    this.width = 40;\n    this.height = 50;\n  }\n  \n  draw(ctx){\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://openclipart.org/download/291180/Realistic-Red-Heart.svg\" \n    options.x = this.xPos();\n    options.y = this.yPos();\n    options.width = this.width;\n    options.height = this.height;\n    _organ__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.draw(options);\n  }\n\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/organs/heart.js?");

/***/ }),

/***/ "./src/organs/kidneys.js":
/*!*******************************!*\
  !*** ./src/organs/kidneys.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Kidneys; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Kidneys extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor() {\n    super()\n    if (!this.x) {\n      this.x = 475;\n    }\n    if (!this.y) {\n      this.y = 400;\n    }\n    this.width = 95;\n    this.height = 115;\n  }\n\n  draw(ctx) {\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://marketplace.canva.com/MAC1WBTdwQY/1/thumbnail_large/canva-bladder-and-kidney-it-is-color-icon-.-MAC1WBTdwQY.png\"\n    options.x = this.x;\n    options.y = this.y;\n    options.width = this.width;\n    options.height = this.height;\n    _organ__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.draw(options);\n  }\n\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n  \n} \n\n\n//# sourceURL=webpack:///./src/organs/kidneys.js?");

/***/ }),

/***/ "./src/organs/liver.js":
/*!*****************************!*\
  !*** ./src/organs/liver.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Liver; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Liver extends Organ {\n  constructor() {\n    super()\n    if (!this.x) {\n      this.x = 500;\n    }\n    if (!this.y) {\n      this.y = 100;\n    }\n    this.width = 35;\n    this.height = 45;\n  }\n\n  draw(ctx) {\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://openclipart.org/download/37315/liver.svg\"\n    options.x = this.x;\n    options.y = this.y;\n    options.width = this.width;\n    options.height = this.height;\n    Organ.prototype.draw(options);\n  }\n\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/organs/liver.js?");

/***/ }),

/***/ "./src/organs/lungs.js":
/*!*****************************!*\
  !*** ./src/organs/lungs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lungs; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Lungs extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor() {\n    super()\n    if (!this.x) {\n      this.x = 600;\n    }\n    if (!this.y) {\n      this.y = 250;\n    }\n    this.width = 65;\n    this.height = 70;\n  }\n\n  draw(ctx) {\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://openclipart.org/download/298630/lungs--publicdomainvectors-image.svg\"\n    options.x = this.x;\n    options.y = this.y;\n    options.width = this.width;\n    options.height = this.height;\n    _organ__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.draw(options);\n  }\n\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n\n  setX(newX){\n    this.x = newX;\n  }\n\n  setY(newY){\n    this.y = newY;\n  }\n\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/organs/lungs.js?");

/***/ }),

/***/ "./src/organs/organ.js":
/*!*****************************!*\
  !*** ./src/organs/organ.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Organ {\n  \n  draw(options){   \n    this.info = Object.assign({}, options);\n    let img = new Image();\n    img.src = options.imgUrl;\n    img.onload = function() {\n      options.ctx.drawImage(img, options.x, options.y, options.width, options.height)\n    }\n  }\n\n  xPos(){\n    return;\n  }\n\n  yPos(){\n    return;\n  }\n\n  width(){\n    return;\n  }\n\n  height(){\n    return;\n  }\n}\n\nmodule.exports = Organ;\n\n//# sourceURL=webpack:///./src/organs/organ.js?");

/***/ }),

/***/ "./src/organs/small_intestine.js":
/*!***************************************!*\
  !*** ./src/organs/small_intestine.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SmallIntestine; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass SmallIntestine extends Organ {\n  constructor() {\n    super()\n    if (!this.x) {\n      this.x = 500;\n    }\n    if (!this.y) {\n      this.y = 200;\n    }\n    this.width = 50;\n    this.height = 50;\n  }\n\n  draw(ctx) {\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://cdn1.iconfinder.com/data/icons/internal-organs-cartoon/512/g1847-512.png\"\n    options.x = this.x;\n    options.y = this.y;\n    options.width = this.width;\n    options.height = this.height;\n    Organ.prototype.draw(options);\n  }\n\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/small_intestine.js?");

/***/ }),

/***/ "./src/organs/stomach.js":
/*!*******************************!*\
  !*** ./src/organs/stomach.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stomach; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Stomach extends Organ {\n  constructor() {\n    super()\n    if (!this.x) {\n      this.x = 615;\n    }\n    if (!this.y) {\n      this.y = 400;\n    }\n    this.width = 45;\n    this.height = 55;\n  }\n\n  draw(ctx) {\n    let options = {};\n    options.ctx = ctx;\n    options.imgUrl = \"https://upload.wikimedia.org/wikipedia/commons/b/be/Stomach_icon.svg\"\n    options.x = this.x;\n    options.y = this.y;\n    options.width = this.width;\n    options.height = this.height;\n    Organ.prototype.draw(options);\n  }\n  xPos() {\n    return this.x;\n  }\n\n  yPos() {\n    return this.y;\n  }\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  width() {\n    return this.width;\n  }\n\n  height() {\n    return this.height;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/stomach.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _organs_heart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organs/heart */ \"./src/organs/heart.js\");\n/* harmony import */ var _organs_lungs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organs/lungs */ \"./src/organs/lungs.js\");\n/* harmony import */ var _organs_stomach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organs/stomach */ \"./src/organs/stomach.js\");\n/* harmony import */ var _organs_small_intestine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organs/small_intestine */ \"./src/organs/small_intestine.js\");\n/* harmony import */ var _organs_colon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organs/colon */ \"./src/organs/colon.js\");\n/* harmony import */ var _organs_kidneys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organs/kidneys */ \"./src/organs/kidneys.js\");\n/* harmony import */ var _organs_liver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organs/liver */ \"./src/organs/liver.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\n\n\n\n\nclass SetUp {\n  constructor(context){\n    this.context = context;\n    this.organs = [];\n    this.addOrgans();\n    this.drawOrgans();\n    new _body__WEBPACK_IMPORTED_MODULE_7__[\"default\"]().draw(context);\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.organs, this.context);\n    this.repaint = this.repaint.bind(this)\n  }\n\n  addOrgans(){\n    this.organs.push(new _organs_heart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    this.organs.push(new _organs_lungs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    this.organs.push(new _organs_stomach__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    this.organs.push(new _organs_small_intestine__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    this.organs.push(new _organs_colon__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this.organs.push(new _organs_kidneys__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.organs.push(new _organs_liver__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  }\n\n  drawOrgans(){\n   this.organs.forEach( organ => {\n     organ.draw(this.context);\n   })\n  }\n\n  repaint(){\n    let canvas = document.getElementById('canvas')\n    this.context.clearRect(0, 0, canvas.width , canvas.height );\n    this.addOrgans();\n    this.drawOrgans();\n    new _body__WEBPACK_IMPORTED_MODULE_7__[\"default\"]().draw(this.context);\n  }\n}\n /* harmony default export */ __webpack_exports__[\"default\"] = (SetUp);\n\n\n//# sourceURL=webpack:///./src/setup.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const bodyCavity = require('./body-cavity');\n\nfunction tableGen () {\n  let table = document.createElement('div');\n  table.className = 'table';\n  table.backgroundImage = '../assets/images/body.png';\n  return table;\n}\n\ndocument.body.appendChild(tableGen());\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ })

/******/ });