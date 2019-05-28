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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Body; });\n\nclass Body {\n\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.body = new Image();\n    // this.body.src = \"http://chittagongit.com//images/human-body-icon/human-body-icon-1.jpg\"\n    this.body.src = '../assets/images/body.png';\n    this.body.onload = () => {\n      this.ctx.drawImage(this.body, 200, 10, 240, 575)\n    }\n  }\n  draw() {\n    this.ctx.drawImage(this.body, 200, 10, 240, 575)\n  }\n}\n\n//# sourceURL=webpack:///./src/body.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameplay */ \"./src/gameplay.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\n\n\nclass Game{\n  constructor(organs, ctx, body) {\n    this.organs = organs;\n    this.dragging = false;\n    this.changeInX = 0;\n    this.changeInY = 0;\n    this.selection = null;\n    this.ctx = ctx;\n    this.body = body;\n    this.offsetX = 0;\n    this.offsetY = 0; \n\n    this.gameWonMessage = this.gameWonMessage.bind(this);\n    this.gameLostMessage = this.gameLostMessage.bind(this);\n    this.restartGame = this.restartGame.bind(this);\n    this.won = this.won.bind(this);\n    this.mouseMove = this.mouseMove.bind(this);\n    this.mouseUp = this.mouseUp.bind(this);\n    this.mouseDown = this.mouseDown.bind(this);\n    this.startGame = this.startGame.bind(this);\n    this.endGame = this.endGame.bind(this);\n    this.handleCanvasClick = this.handleCanvasClick.bind(this);\n    this.drawBorder = this.drawBorder.bind(this);\n    this.play = this.play.bind(this);\n    this.repaint = this.repaint.bind(this);\n\n    this.playGame = new _gameplay__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.modal = document.createElement('span');\n    document.body.appendChild(this.modal);\n    this.closeModal = this.closeModal.bind(this);\n    this.gameover = document.createElement('span');\n    document.body.appendChild(this.gameover);\n    this.gameover.className = \"close-modal\";\n    this.closeModal();\n    this.modalBackground = document.createElement('div');\n    this.modalBackground.className = \"close-modal\";\n    document.body.appendChild(this.modalBackground);\n\n    this.canvas = document.getElementById('canvas');\n    this.canvas.addEventListener('click', this.handleCanvasClick);\n    this.canvas.className = 'hover';\n    \n  } \n\n  // allow players to start the game by directly clicking on the canvas\n  handleCanvasClick(){\n    this.playGame.startTimer();\n    this.canvas.removeEventListener('click', this.handleCanvasClick)\n  }\n\n  // add click and drag functionality\n  startGame(){\n    this.canvas.addEventListener('mousedown', this.mouseDown);\n    this.canvas.addEventListener('mousemove', this.mouseMove);\n    this.canvas.addEventListener('mouseup', this.mouseUp);\n  }\n\n  mouseDown(e) {\n    let mouseX = e.layerX;\n    let mouseY = e.layerY;\n    // check to see if the player clicked on an organ\n    for (let i = 0; i < this.organs.length; i++) {\n      let organ = this.organs[i];\n      if (organ.placed) continue; // already placed organs aren't draggable\n      if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)\n        && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {\n        // if an organ was clicked, track it and make it draggable\n        this.selection = organ;\n        this.dragging = true;\n        this.offsetX = mouseX - organ.x;\n        this.offsetY = mouseY - organ.y;\n        return;\n      }\n    }\n  }\n\n  mouseUp(e) {\n    this.dragging = false;\n    // if an organ was correctly placed redraw the canvas and display modal\n    if (this.playGame.correctPlace(this.selection)) {\n      this.repaint();\n      this.feedback(this.selection);\n      this.selection = null;\n    } else {\n      // outline the body in red if the organ was misplaced\n      this.drawBorder();\n      window.setTimeout(this.repaint, 300);\n    }\n  }\n\n  mouseMove(e) {\n    let mouseX = e.layerX;\n    let mouseY = e.layerY;\n    if (this.dragging) {\n      // track an organ's position if it's being dragged\n      this.changeInX = mouseX - this.selection.x - this.offsetX;\n      this.changeInY = mouseY - this.selection.y - this.offsetY;\n      this.selection.setX(this.selection.x + this.changeInX);\n      this.selection.setY(this.selection.y + this.changeInY);\n      // redraw the canvas to display the moving organ\n      this.repaint();\n    }\n    else {\n      // only display a hover cursor over draggable objects\n      let hover = false;\n      for (let i = 0; i < this.organs.length; i++) {\n        let organ = this.organs[i];\n        if (organ.placed) {\n          continue;\n        }\n        if (mouseX >= organ.x && mouseX <= (organ.x + organ.width)\n        && mouseY >= organ.y && mouseY <= (organ.y + organ.height)) {\n          this.canvas.className = \"hover\"\n          hover = true;\n          break;\n        }\n      }\n      if (!hover) {\n        this.canvas.className = \"default\";\n      }\n    }\n  } \n  \n  drawBorder() {\n    //draw the body image offset by one in every direction for x and y coordinates\n    // see https://stackoverflow.com/questions/28207232/draw-border-around-nontransparent-part-of-image-on-canvas\n    const offsetCoords = [ -1,-1, 0,-1, 1,-1, -1,0, 1,0, -1,1, 0,1, 1,1] \n        const s = 2  // thickness scale\n        const x = 200  // original x and y positions\n        const y = 10  \n        const w = 240  // original width and height\n        const h = 575\n   \n    // draw images at each offset for an enlargened version of original\n    for(let i = 0; i < offsetCoords.length; i += 2){\n      this.ctx.drawImage(this.body.body, x + offsetCoords[i]*s, y + offsetCoords[i+1]*s, w, h);\n    }\n      this.ctx.globalCompositeOperation = \"source-in\";\n      this.ctx.fillStyle = \"red\";\n      this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);\n\n      // redraw original body outline and organs on top\n      this.ctx.globalCompositeOperation = \"source-over\";\n      this.body.draw();\n      this.organs.forEach( organ => {\n        organ.draw();\n      })\n  }\n\n  // remove all dynamically created elements and intitialize a new setup \n  restartGame(e){\n    e.preventDefault();\n    const score = document.getElementsByClassName(\"score\");\n    const OR = document.getElementsByClassName('operating-room')[0]\n    OR.removeChild(score[0]);\n    const rules = document.getElementsByClassName('instructions')[0]\n    document.body.removeChild(rules);\n    document.body.removeChild(this.gameover);\n    document.body.removeChild(this.modal);\n    document.body.removeChild(this.modalBackground);\n    this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n    new _setup__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n  }\n\n  //check every second to see if the player has won\n  play(){\n    this.intervalID = window.setInterval(this.won, 1000);\n  }\n\n  won() {\n    // player loses if patient's health bar is empty\n    if(this.playGame.lives === 0){\n      this.gameLostMessage();\n      return false;\n    }\n    // check to see if any organs aren't placed\n    for (let i = 0; i < this.organs.length; i++) {\n      if(!this.organs[i].placed){\n        return false;\n      }\n    }\n    // player wins if all of the organs are placed correctly\n    this.gameWonMessage();\n  }\n\n  endGame(){\n    // stop continuously checking to see if player has won\n    window.clearInterval(this.intervalID);\n    // stop the timer\n    window.clearInterval(this.playGame.clock)\n    // remove click and drag functionality\n    this.canvas.removeEventListener('mousedown', this.mouseDown);\n    this.canvas.removeEventListener('mousemove', this.mouseMove);\n    this.canvas.removeEventListener('mouseup', this.mouseUp);\n  }\n\n  feedback(organ){\n    let organName = organ.constructor.name;\n    this.openModal(organName);\n  }\n\n  // briefly show modal if organ is correctly placed\n  openModal(organName){\n    this.modal.innerText = `You got the ${organName}!`\n    this.modal.className = \"open-modal\";\n    window.setTimeout(this.closeModal, 1200)\n  }\n\n  closeModal(){\n    this.modal.className = \"close-modal\";\n  }\n\n  gameWonMessage(){\n    this.endGame();\n    const msg = document.createElement('div');\n    msg.innerText = \"Congratulations! You Saved a life.\";\n    msg.className = 'msg';\n    this.gameover.appendChild(msg);\n    const replay = document.createElement('button');\n    replay.className = \"replay\";\n    replay.innerText = \"Play Again\";\n    replay.onclick = this.restartGame;\n    this.gameover.appendChild(replay);\n    this.gameover.id = 'game-won';\n    this.gameover.className = \"gameover\";\n    this.modalBackground.className = \"modal-background\"\n  }\n\n  gameLostMessage(){\n    this.endGame();\n    const msg = document.createElement('div');\n    msg.innerText = \"You lost the patient!\";;\n    msg.className = 'msg';\n    this.gameover.appendChild(msg);\n    const replay = document.createElement('button');\n    replay.className = \"replay\";\n    replay.innerText = \"Try Again\";\n    replay.onclick = this.restartGame;\n    this.gameover.appendChild(replay);\n    this.gameover.id = 'game-lost';\n    this.gameover.className = \"gameover\";\n    this.modalBackground.className = \"modal-background\"\n  }\n\n  repaint() {\n    requestAnimationFrame(() => {\n      this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n      this.body.draw(this.ctx);\n      this.organs.forEach(organ => {\n        organ.draw();\n      })\n    })\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Gameplay {\n  constructor(game){\n    this.game = game;\n    this.closeEnough = {\n      \"Kidneys\": { x: [267, 280], y: [181, 199] }, \n      \"Stomach\": { x: [297, 320], y: [165, 190] }, \n      \"SmallIntestine\": { x: [268, 289], y: [193, 216] }, \n      \"Colon\": { x: [281, 296], y: [210, 233] }, \n      \"Liver\": { x: [269, 284], y: [158, 175] }, \n      \"Lungs\": { x: [255, 265], y: [102, 125] }, \n      \"Heart\": { x: [299, 312], y: [128, 149] }\n    }\n\n    this.bingo = {\n      \"Kidneys\": [273, 192],\n      \"Stomach\": [310, 174],\n      \"SmallIntestine\": [281, 209],\n      \"Colon\": [292, 226],\n      \"Liver\": [276, 165],\n      \"Lungs\": [259, 110],\n      \"Heart\": [310, 133]\n    }\n    this.situateOrgan = this.situateOrgan.bind(this);\n    this.correctPlace = this.correctPlace.bind(this);\n    this.isPositioned = this.isPositioned.bind(this);\n    this.setUpProgress = this.setUpProgress.bind(this);\n    this.setUpHealth = this.setUpHealth.bind(this);\n    this.startTimer = this.startTimer.bind(this);\n    this.setupTimer = this.setupTimer.bind(this);\n    this.incrementProgress = this.incrementProgress.bind(this);\n    this.organsPlaced = 0;\n    this.lives = 7;\n    const OR = document.getElementsByClassName('operating-room')[0];\n    const score = document.createElement('div');\n    this.time = 45;\n    score.className = 'score';\n    score.appendChild(this.setUpProgress());\n    score.appendChild(this.setUpHealth());\n    score.appendChild(this.setupTimer());\n    OR.append(score);\n  }\n\n  setupTimer() {\n    this.timerScreen = document.createElement('div');\n    this.timerScreen.className = 'screen';\n    this.timerScreen.id = 'timer'\n    let startButton = document.createElement('button')\n    startButton.className = 'startButton';\n    startButton.innerText = 'PLAY GAME'\n    startButton.onclick = this.startTimer;\n    this.timerScreen.appendChild(startButton);\n    return this.timerScreen;\n  }\n\n  startTimer(){\n    this.time = 45;\n    let that = this;\n    this.clock = setInterval(() => {\n      document.getElementById('timer').innerHTML='00:'+ that.time;\n      that.time--;\n      if (that.time < 0) { // if timer runs out, player loses\n        that.game.gameLostMessage();\n      }\n    }, 1000);\n    this.game.startGame();\n  }\n\n  setUpProgress(){\n    this.progressScreen = document.createElement('div');\n    this.progressScreen.className = 'screen';\n    this.progressScreen.innerText = \"Implant Progress\";\n    this.progress = document.createElement('div');\n    this.progress.className = \"tracker\";\n    this.progressScreen.appendChild(this.progress);\n    for(let i = 1; i < 8; i++){\n      let bar = document.createElement('div')\n      bar.id = `bar${i}`;\n      this.progress.appendChild(bar);\n    }\n    return this.progressScreen;\n  }\n\n  setUpHealth(){\n    this.healthScreen = document.createElement('div');\n    this.healthScreen.className = 'screen';\n    this.healthScreen.innerText = \"Patient Stability\";\n    this.health = document.createElement('div');\n    this.health.className = \"tracker\";\n    this.healthScreen.appendChild(this.health);\n    for(let i = 1; i < 8; i++){\n      let life = document.createElement('div')\n      life.id = `life${i}`;\n      life.style.backgroundColor = \"lawngreen\";\n      this.health.appendChild(life);\n    }\n    return this.healthScreen;\n  }\n\n  incrementProgress(){\n    let currBar = document.getElementById(`bar${this.organsPlaced}`);\n    currBar.style.backgroundColor = \"lawngreen\";\n  }\n\n  correctPlace(organ){\n    let organName = organ.constructor.name;\n      if(this.isPositioned(organ, organName)){\n        this.situateOrgan(organ, organName);\n        organ.lock();\n        this.organsPlaced += 1;\n        this.incrementProgress();\n        return true;\n      }\n      else {\n        // decrement patient's health if an organ is misplaced\n        let currLife = document.getElementById(`life${this.lives}`);\n        currLife.style.backgroundColor = \"black\";\n        this.lives -= 1;\n      }\n      return false;\n  }\n\n  // reposition organ to exact location if the player put it within range\n  situateOrgan(organ, organName){\n    let goal = this.bingo[organName];\n    organ.setX(goal[0]);\n    organ.setY(goal[1]);\n  }\n\n  isPositioned(organ, organName){\n    let x = organ.x;\n    let y = organ.y;\n    let aim = this.closeEnough[organName];\n    if(x >= aim.x[0] && x <= aim.x[1] && y >= aim.y[0] && y <= aim.y[1]){\n        return true;\n    }\n    return false;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gameplay);\n\n//# sourceURL=webpack:///./src/gameplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/table.js\");\n/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruments */ \"./src/instruments.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n\n\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  element.className = \"operating-room\"\n  return element;\n}\n\nconst OR = component();\ndocument.body.appendChild(OR);\nconst surgicalSite = document.createElement('div')\nsurgicalSite.className = 'surgicalSite';\nsurgicalSite.appendChild(Object(_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\nsurgicalSite.appendChild(Object(_instruments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\nOR.appendChild(surgicalSite);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  var canvas = document.createElement('canvas')\n  canvas.id = 'canvas'\n  canvas.width = 900;\n  canvas.height = 600;\n  surgicalSite.appendChild(canvas);\n  var context = canvas.getContext(\"2d\");\n  new _setup__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context);\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/instruments.js":
/*!****************************!*\
  !*** ./src/instruments.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getInstruments; });\nfunction getInstruments() {\n  let instruments = document.createElement('div');\n  instruments.className = 'instruments';\n  return instruments;\n}\n\n// document.body.appendChild(instruments());\n\n//# sourceURL=webpack:///./src/instruments.js?");

/***/ }),

/***/ "./src/organs/colon.js":
/*!*****************************!*\
  !*** ./src/organs/colon.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Colon; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Colon extends Organ {\n  constructor(context) {\n    let imgUrl = '../assets/images/colon.png'\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 500, y: 470, w: 67, h: 77 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 500;\n    }\n    if (!this.y) {\n      this.y = 470;\n    }\n    this.ctx = context;\n    this.width = 67;\n    this.height = 77;\n  }\n\n  draw() {\n    super.draw();\n  }\n  \n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n \n}\n\n\n\n\n//# sourceURL=webpack:///./src/organs/colon.js?");

/***/ }),

/***/ "./src/organs/heart.js":
/*!*****************************!*\
  !*** ./src/organs/heart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heart; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Heart extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n\n  constructor(context){\n    let imgUrl = '../assets/images/heart.png'\n    let organSpecs = {ctx: context, imgUrl: imgUrl, x: 515, y: 215, w: 30, h: 45 }\n    super(organSpecs)\n    if(!this.x){\n      this.x = 515;\n    }\n    if(!this.y){\n      this.y = 215;\n    }\n    this.ctx = context;\n    this.width = 30;\n    this.height = 45;\n  }\n  \n  draw(){\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n\n  // lock(){\n  //   super()\n  // }\n\n}\n\n\n//# sourceURL=webpack:///./src/organs/heart.js?");

/***/ }),

/***/ "./src/organs/kidneys.js":
/*!*******************************!*\
  !*** ./src/organs/kidneys.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Kidneys; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Kidneys extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor(context) {\n    let imgUrl = '../assets/images/kidneys.png'\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 495, y: 40, w: 95, h: 150 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 495;\n    }\n    if (!this.y) {\n      this.y = 40;\n    }\n    this.ctx = context;\n    this.width = 95;\n    this.height = 150;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  \n} \n\n\n//# sourceURL=webpack:///./src/organs/kidneys.js?");

/***/ }),

/***/ "./src/organs/liver.js":
/*!*****************************!*\
  !*** ./src/organs/liver.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Liver; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Liver extends Organ {\n  \n  constructor(context) {\n    let imgUrl = '../assets/images/liver.png'\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 400, w: 75, h: 51 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 600;\n    }\n    if (!this.y) {\n      this.y = 400;\n    }\n    this.ctx = context;\n    this.width = 75;\n    this.height = 51;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/organs/liver.js?");

/***/ }),

/***/ "./src/organs/lungs.js":
/*!*****************************!*\
  !*** ./src/organs/lungs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lungs; });\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n/* harmony import */ var _organ__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_organ__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Lungs extends _organ__WEBPACK_IMPORTED_MODULE_0___default.a {\n  \n  constructor(context) {\n    let imgUrl = '../assets/images/lungs.png'\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 575, y: 260, w: 125, h: 78 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 575;\n    }\n    if (!this.y) {\n      this.y = 260;\n    }\n    this.ctx = context;\n    this.width = 125;\n    this.height = 78;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX){\n    this.x = newX;\n  }\n\n  setY(newY){\n    this.y = newY;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/lungs.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SmallIntestine; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass SmallIntestine extends Organ {\n  \n  constructor(context) {\n    let imgUrl = '../assets/images/small_intestine.png'\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 600, y: 135, w: 80, h: 80 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 600;\n    }\n    if (!this.y) {\n      this.y = 135;\n    }\n    this.ctx = context;\n    this.width = 80;\n    this.height = 80;\n  }\n\n  draw() {\n    super.draw();\n  }\n\n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/small_intestine.js?");

/***/ }),

/***/ "./src/organs/stomach.js":
/*!*******************************!*\
  !*** ./src/organs/stomach.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stomach; });\nconst Organ = __webpack_require__(/*! ./organ */ \"./src/organs/organ.js\");\n\nclass Stomach extends Organ {\n \n  constructor(context) {\n    let imgUrl = '../assets/images/Stomach_icon.svg'\n    let organSpecs = { ctx: context, imgUrl: imgUrl, x: 510, y: 350, w: 40, h: 50 }\n    super(organSpecs)\n    if (!this.x) {\n      this.x = 510;\n    }\n    if (!this.y) {\n      this.y = 350;\n    }\n    this.ctx = context;\n    this.width = 40;\n    this.height = 50;\n  }\n\n  draw() {\n    super.draw();\n  }\n  \n  setX(newX) {\n    this.x = newX;\n  }\n\n  setY(newY) {\n    this.y = newY;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/organs/stomach.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _organs_heart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organs/heart */ \"./src/organs/heart.js\");\n/* harmony import */ var _organs_lungs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organs/lungs */ \"./src/organs/lungs.js\");\n/* harmony import */ var _organs_stomach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organs/stomach */ \"./src/organs/stomach.js\");\n/* harmony import */ var _organs_small_intestine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organs/small_intestine */ \"./src/organs/small_intestine.js\");\n/* harmony import */ var _organs_colon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organs/colon */ \"./src/organs/colon.js\");\n/* harmony import */ var _organs_kidneys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organs/kidneys */ \"./src/organs/kidneys.js\");\n/* harmony import */ var _organs_liver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organs/liver */ \"./src/organs/liver.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass SetUp {\n  constructor(context){\n    this.context = context;\n    this.organs = [];\n    this.addOrgans();\n    this.drawOrgans();\n    this.displayRules();\n    let body = new _body__WEBPACK_IMPORTED_MODULE_7__[\"default\"](context);\n    body.draw();\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.organs, this.context, body);\n    this.game.play();\n  }\n\n  addOrgans(){\n    this.organs.push(new _organs_kidneys__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.context));\n    this.organs.push(new _organs_stomach__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.context));\n    this.organs.push(new _organs_small_intestine__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.context));\n    this.organs.push(new _organs_colon__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.context));\n    this.organs.push(new _organs_liver__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.context));\n    this.organs.push(new _organs_lungs__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.context));\n    this.organs.push(new _organs_heart__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.context));\n  }\n\n  drawOrgans(){\n   this.organs.forEach( organ => {\n     organ.draw();\n   })\n  }\n\n  displayRules() {\n    const instructions = document.createElement('div');\n    instructions.className = 'instructions';\n    const title = document.createElement('div');\n    title.className = 'title'\n    title.innerText = 'Play Operation!'\n    instructions.appendChild(title)\n    const rules = document.createElement('ul');\n    rules.className = 'rules'\n    const rule1 = document.createElement('li')\n    rule1.innerText = 'Drag organs into the body cavity'\n    rules.appendChild(rule1);\n    const rule2 = document.createElement('li')\n    rule2.innerText = \"Misplaced organs damage the patient\\'s health\"\n    rules.appendChild(rule2);\n    const rule3 = document.createElement('li')\n    rule3.innerText = 'Finish implanting before time runs out or the patient reaches critical condition!'\n    rules.appendChild(rule3);\n    instructions.appendChild(rules)  \n    document.body.appendChild(instructions)\n  }\n\n  // repaint(){\n  //   let canvas = document.getElementById('canvas')\n  //   this.context.clearRect(0, 0, canvas.width , canvas.height );\n  //   this.addOrgans();\n  //   this.drawOrgans();\n  //   new Body().draw();\n  // }\n    \n}\n /* harmony default export */ __webpack_exports__[\"default\"] = (SetUp);\n\n\n//# sourceURL=webpack:///./src/setup.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tableGen; });\n\nfunction tableGen () {\n  let table = document.createElement('div');\n  table.className = 'table';\n  table.backgroundImage = '../assets/images/body.png';\n  return table;\n}\n\n// document.body.appendChild(tableGen());\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ })

/******/ });