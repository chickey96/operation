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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Body; });\n\nclass Body {\n\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.body = new Image();\n    this.body.src = \"http://chittagongit.com//images/human-body-icon/human-body-icon-1.jpg\"\n    this.body.onload = () => {\n      this.ctx.drawImage(this.body, 185, 25, 275, 550)\n    }\n  }\n  draw() {\n    this.ctx.drawImage(this.body, 185, 25, 275, 550)\n  }\n}\n\n//# sourceURL=webpack:///./src/body.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ \"./src/gameplay.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\n\n\nclass Game{\n  constructor(organs, ctx, body) {\n    this.organs = organs;\n    this.dragging = false;\n    this.changeInX = 0;\n    this.changeInY = 0;\n    this.selection = null;\n    this.ctx = ctx;\n    this.body = body;\n    this.offsetX = 0;\n    this.offsetY = 0;\n\n    this.play = this.play.bind(this);\n    this.gameoverMessage = this.gameoverMessage.bind(this);\n    this.restartGame = this.restartGame.bind(this);\n    this.won = this.won.bind(this);\n    this.mouseMove = this.mouseMove.bind(this);\n    this.mouseUp = this.mouseUp.bind(this);\n    this.mouseDown = this.mouseDown.bind(this);\n\n    this.playGame = new _gameplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.modal = document.createElement('span');\n    document.body.appendChild(this.modal);\n    this.closeModal = this.closeModal.bind(this);\n    this.gameover = document.createElement('span');\n    document.body.appendChild(this.gameover);\n    this.gameover.className = \"close-modal\";\n    this.closeModal();\n\n    this.canvas = document.getElementById('canvas');\n    this.canvas.addEventListener('mousedown', this.mouseDown);\n    this.canvas.addEventListener('mousemove', this.mouseMove);\n    this.canvas.addEventListener('mouseup', this.mouseUp);\n  } \n\n  mouseDown(e) {\n    let mouseX = e.layerX;\n    let mouseY = e.layerY;\n    for (let i = 0; i < this.organs.length; i++) {\n      let organ = this.organs[i];\n      if (organ.placed) continue;\n      if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)\n        && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {\n        this.selection = organ;\n        this.dragging = true;\n        this.offsetX = mouseX - organ.x;\n        this.offsetY = mouseY - organ.y;\n        return;\n      }\n    }\n  }\n\n  mouseUp(e) {\n    this.dragging = false;\n    if (this.playGame.correctPlace(this.selection)) {\n      this.repaint()\n      window.setTimeout(this.feedback(this.selection), 1000);\n      this.selection = null;\n    }\n  }\n\n  mouseMove(e) {\n    let mouseX = e.layerX;\n    let mouseY = e.layerY;\n    if (this.dragging) {\n      this.changeInX = mouseX - this.selection.x - this.offsetX;\n      this.changeInY = mouseY - this.selection.y - this.offsetY;\n      this.selection.setX(this.selection.x + this.changeInX);\n      this.selection.setY(this.selection.y + this.changeInY);\n  \n      requestAnimationFrame(() => {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.body.draw();\n        this.organs.forEach(organ => {\n          organ.draw();\n        })\n      })\n    }\n    else {\n      let hover = false;\n      for (let i = 0; i < this.organs.length; i++) {\n        let organ = this.organs[i];\n        if (organ.placed) {\n          continue;\n        }\n        if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)\n          && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {\n          this.canvas.className = \"hover\"\n          hover = true;\n          break;\n        }\n      }\n      if (!hover) {\n        this.canvas.className = \"default\";\n      }\n    }\n  } \n\n  restartGame(e){\n    e.preventDefault();\n    const screen = document.getElementsByClassName(\"screen\");\n    document.body.removeChild(screen[0]);\n    document.body.removeChild(this.gameover);\n    document.body.removeChild(this.modal);\n    new _setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n  }\n\n  play(){\n    window.setInterval(this.won, 1000);\n  }\n\n  won() {\n    for (let i = 0; i < this.organs.length; i++) {\n      if(!this.organs[i].placed){\n        return false;\n      }\n    }\n    window.clearInterval();\n    this.canvas.removeEventListener('mousedown', this.mouseDown);\n    this.canvas.removeEventListener('mousemove', this.mouseMove);\n    this.canvas.removeEventListener('mouseup', this.mouseUp);\n    this.gameoverMessage();\n  }\n\n  feedback(organ){\n    let organName = organ.constructor.name;\n    this.openModal(organName);\n  }\n\n  openModal(organName){\n    this.modal.innerText = `You got the ${organName}!`\n    this.modal.className = \"open-modal\";\n    window.setTimeout(this.closeModal, 2000)\n  }\n\n  closeModal(){\n    this.modal.className = \"close-modal\";\n  }\n\n  gameoverMessage(){\n    this.gameover.innerText = \"Congratulations! You Saved a life. Would you like to play again?\";\n    this.replay = document.createElement('button');\n    this.replay.className = \"replay\";\n    this.replay.innerText = \"Replay\";\n    this.replay.onclick = this.restartGame;\n    this.gameover.appendChild(this.replay);\n    this.gameover.className = \"gameover\";\n  }\n\n  repaint() {\n    requestAnimationFrame(() => {\n      this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n      this.body.draw(this.ctx);\n      this.organs.forEach(organ => {\n        organ.draw();\n      })\n    })\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Gameplay {\n  constructor(){\n    this.closeEnough = {\n      \"Kidneys\": { x: [270, 285], y: [190, 210] }, \n      \"Stomach\": { x: [301, 321], y: [170, 190] }, \n      \"SmallIntestine\": { x: [275, 295], y: [197, 220] }, \n      \"Colon\": { x: [280, 300], y: [225, 245] }, \n      \"Liver\": { x: [275, 295], y: [175, 195] }, \n      \"Lungs\": { x: [275, 290], y: [110, 125] }, \n      \"Heart\": { x: [295, 315], y: [130, 145] }\n    }\n\n    this.bingo = {\n      \"Kidneys\": [273, 200],\n      \"Stomach\": [310, 174],\n      \"SmallIntestine\": [286, 214],\n      \"Colon\": [292, 226],\n      \"Liver\": [285, 176],\n      \"Lungs\": [284, 108],\n      \"Heart\": [307, 129]\n    }\n    this.situateOrgan = this.situateOrgan.bind(this);\n    this.correctPlace = this.correctPlace.bind(this);\n    this.isPositioned = this.isPositioned.bind(this);\n    this.setUpHealth = this.setUpHealth.bind(this);\n    this.incrementHealth = this.incrementHealth.bind(this);\n    this.organsPlaced = 0;\n    this.setUpHealth();\n  }\n\n  setUpHealth(){\n    this.screen = document.createElement('div');\n    this.screen.className = 'screen';\n    this.screen.innerText = \"HEALTH\";\n    this.health = document.createElement('div');\n    this.health.className = \"health\";\n    this.screen.appendChild(this.health);\n    document.body.appendChild(this.screen);\n    for(let i = 1; i < 8; i++){\n      let bar = document.createElement('div')\n      bar.id = `bar${i}`;\n      this.health.appendChild(bar);\n    }\n  }\n\n  incrementHealth(){\n    let currBar = document.getElementById(`bar${this.organsPlaced}`);\n    currBar.style.backgroundColor = \"lawngreen\";\n  }\n\n  correctPlace(organ){\n    let organName = organ.constructor.name;\n      if(this.isPositioned(organ, organName)){\n        this.situateOrgan(organ, organName);\n        organ.lock();\n        this.organsPlaced += 1;\n        this.incrementHealth();\n        return true;\n      }\n      return false;\n  }\n\n  situateOrgan(organ, organName){\n    let goal = this.bingo[organName];\n    organ.setX(goal[0]);\n    organ.setY(goal[1]);\n  }\n\n  isPositioned(organ, organName){\n    let x = organ.x;\n    let y = organ.y;\n    let aim = this.closeEnough[organName];\n    if(x >= aim.x[0] && x <= aim.x[1] && y >= aim.y[0] && y <= aim.y[1]){\n        return true;\n    }\n    return false;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gameplay);\n\n//# sourceURL=webpack:///./src/gameplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/table.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_table__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruments */ \"./src/instruments.js\");\n/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_instruments__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\n\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  element.className = \"operating-room\"\n  return element;\n}\n\ndocument.body.appendChild(component());\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.width = 900;\n  canvas.height = 600;\n  var context = canvas.getContext(\"2d\");\n  new _setup__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context);\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Colon; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Colon extends Organ {\n  constructor(context) {\n    let imgUrl = \"https://marketplace.canva.com/MACzsJy7L9k/1/thumbnail_large/canva-human-organ-intestine-colon-MACzsJy7L9k.png\"\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 100, w: 60, h: 70 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 600;\n    }\n    if (!this.y) {\n      this.y = 100;\n    }\n    this.ctx = context;\n    this.width = 60;\n    this.height = 70;\n  }\n\n  draw() {\n    super.draw();\n  }\n  \n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n \n}\n\n\n\n\n//# sourceURL=webpack:///./src/organs/colon.js?");

/***/ }),

/***/ "./src/organs/heart.js":
/*!*****************************!*\
  !*** ./src/organs/heart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heart; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Heart extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n\n  constructor(context){\n    let imgUrl = \"https://openclipart.org/download/291180/Realistic-Red-Heart.svg\" \n    let organSpecs = {ctx: context, imgUrl: imgUrl, x: 500, y: 300, w: 40, h: 50 }\n    super(organSpecs)\n    if(!this.x){\n      this.x = 500;\n    }\n    if(!this.y){\n      this.y = 300;\n    }\n    this.ctx = context;\n    this.width = 40;\n    this.height = 50;\n  }\n  \n  draw(){\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n\n  // lock(){\n  //   super()\n  // }\n\n}\n\n\n//# sourceURL=webpack:///./src/organs/heart.js?");

/***/ }),

/***/ "./src/organs/kidneys.js":
/*!*******************************!*\
  !*** ./src/organs/kidneys.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Kidneys; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Kidneys extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor(context) {\n    let imgUrl = \"https://marketplace.canva.com/MAC1WBTdwQY/1/thumbnail_large/canva-bladder-and-kidney-it-is-color-icon-.-MAC1WBTdwQY.png\"\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 475, y: 400, w: 95, h: 115 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 475;\n    }\n    if (!this.y) {\n      this.y = 400;\n    }\n    this.ctx = context;\n    this.width = 95;\n    this.height = 115;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  \n} \n\n\n//# sourceURL=webpack:///./src/organs/kidneys.js?");

/***/ }),

/***/ "./src/organs/liver.js":
/*!*****************************!*\
  !*** ./src/organs/liver.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Liver; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Liver extends Organ {\n  \n  constructor(context) {\n    let imgUrl = \"https://openclipart.org/download/37315/liver.svg\"\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 100, w: 30, h: 40 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 500;\n    }\n    if (!this.y) {\n      this.y = 100;\n    }\n    this.ctx = context;\n    this.width = 30;\n    this.height = 40;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/organs/liver.js?");

/***/ }),

/***/ "./src/organs/lungs.js":
/*!*****************************!*\
  !*** ./src/organs/lungs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lungs; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Lungs extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n  \n  constructor(context) {\n    let imgUrl = \"https://openclipart.org/download/298630/lungs--publicdomainvectors-image.svg\"\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 250, w: 75, h: 80 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 600;\n    }\n    if (!this.y) {\n      this.y = 250;\n    }\n    this.ctx = context;\n    this.width = 75;\n    this.height = 80;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX){\n    this.x = newX;\n  }\n\n  setY(newY){\n    this.y = newY;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/lungs.js?");

/***/ }),

/***/ "./src/organs/organ.js":
/*!*****************************!*\
  !*** ./src/organs/organ.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Organ {\n  constructor(organSpecs){\n    const {ctx, imgUrl, x, y, w, h} = organSpecs;\n    this.img = new Image();\n    this.img.src = imgUrl;\n    this.img.onload = () => {\n      ctx.drawImage(this.img, x, y, w, h)\n    }\n    this.placed = false;\n  }\n  \n  draw(){ \n    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)\n  }\n\n  lock(){\n    this.placed = true;\n  }\n\n}\n\nmodule.exports = Organ;\n\n//# sourceURL=webpack:///./src/organs/organ.js?");

/***/ }),

/***/ "./src/organs/small_intestine.js":
/*!***************************************!*\
  !*** ./src/organs/small_intestine.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SmallIntestine; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass SmallIntestine extends Organ {\n  \n  constructor(context) {\n    let imgUrl = \"https://cdn1.iconfinder.com/data/icons/internal-organs-cartoon/512/g1847-512.png\"\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 200, w: 70, h: 70 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 500;\n    }\n    if (!this.y) {\n      this.y = 200;\n    }\n    this.ctx = context;\n    this.width = 70;\n    this.height = 70;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/small_intestine.js?");

/***/ }),

/***/ "./src/organs/stomach.js":
/*!*******************************!*\
  !*** ./src/organs/stomach.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stomach; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Stomach extends Organ {\n \n  constructor(context) {\n    let imgUrl = \"https://upload.wikimedia.org/wikipedia/commons/b/be/Stomach_icon.svg\"\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 615, y: 400, w: 45, h: 55 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 615;\n    }\n    if (!this.y) {\n      this.y = 400;\n    }\n    this.ctx = context;\n    this.width = 45;\n    this.height = 55;\n  }\n\n  draw() {\n    super.draw();\n  }\n  \n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/stomach.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _organs_heart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organs/heart */ \"./src/organs/heart.js\");\n/* harmony import */ var _organs_lungs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organs/lungs */ \"./src/organs/lungs.js\");\n/* harmony import */ var _organs_stomach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organs/stomach */ \"./src/organs/stomach.js\");\n/* harmony import */ var _organs_small_intestine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organs/small_intestine */ \"./src/organs/small_intestine.js\");\n/* harmony import */ var _organs_colon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organs/colon */ \"./src/organs/colon.js\");\n/* harmony import */ var _organs_kidneys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organs/kidneys */ \"./src/organs/kidneys.js\");\n/* harmony import */ var _organs_liver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organs/liver */ \"./src/organs/liver.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass SetUp {\n  constructor(context){\n    this.context = context;\n    this.organs = [];\n    this.addOrgans();\n    this.drawOrgans();\n    let body = new _body__WEBPACK_IMPORTED_MODULE_7__[\"default\"](context);\n    body.draw();\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.organs, this.context, body);\n    this.game.play();\n    this.repaint = this.repaint.bind(this)\n  }\n\n  addOrgans(){\n    this.organs.push(new _organs_kidneys__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.context));\n    this.organs.push(new _organs_stomach__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.context));\n    this.organs.push(new _organs_small_intestine__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.context));\n    this.organs.push(new _organs_colon__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.context));\n    this.organs.push(new _organs_liver__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.context));\n    this.organs.push(new _organs_lungs__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.context));\n    this.organs.push(new _organs_heart__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.context));\n  }\n\n  drawOrgans(){\n   this.organs.forEach( organ => {\n     organ.draw();\n   })\n  }\n\n  repaint(){\n    let canvas = document.getElementById('canvas')\n    this.context.clearRect(0, 0, canvas.width , canvas.height );\n    this.addOrgans();\n    this.drawOrgans();\n    new _body__WEBPACK_IMPORTED_MODULE_7__[\"default\"]().draw();\n  }\n    \n}\n /* harmony default export */ __webpack_exports__[\"default\"] = (SetUp);\n\n\n//# sourceURL=webpack:///./src/setup.js?");

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