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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/todo_redux.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/todo_redux.jsx":
/*!*********************************!*\
  !*** ./frontend/todo_redux.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/frontend/todo_redux.jsx: Unexpected token (42:0)\n\n\u001b[0m \u001b[90m 40 | \u001b[39m\u001b[36mfunction\u001b[39m applyMiddlewares (store\u001b[33m,\u001b[39m middleWares) {\u001b[0m\n\u001b[0m \u001b[90m 41 | \u001b[39m  let \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 42 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m\u001b[0m\n    at _class.raise (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:3939:15)\n    at _class.unexpected (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:5248:16)\n    at _class.parseBindingAtom (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:5508:20)\n    at _class.parseVarHead (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7797:20)\n    at _class.parseVar (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7773:12)\n    at _class.parseVarStatement (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7606:10)\n    at _class.parseStatementContent (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7203:21)\n    at _class.parseStatement (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7707:23)\n    at _class.parseBlockBody (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7694:10)\n    at _class.parseBlock (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7683:10)\n    at _class.parseFunctionBody (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:6933:24)\n    at _class.parseFunctionBodyAndFinish (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:6913:10)\n    at _class.parseFunction (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7832:10)\n    at _class.parseFunctionStatement (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7487:17)\n    at _class.parseStatementContent (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7177:21)\n    at _class.parseStatement (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7707:23)\n    at _class.parseBlockBody (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7694:10)\n    at _class.parseTopLevel (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:7118:10)\n    at _class.parse (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:8521:17)\n    at parse (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/parser/lib/index.js:10513:38)\n    at parser (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/jerrik_shaw/Desktop/aA_homework/W7D2/solution_1/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map