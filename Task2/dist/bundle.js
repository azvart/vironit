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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/String.js":
/*!***********************!*\
  !*** ./app/String.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

let str = "Каждый охотник желает знать, где сидит фазан.";

const firstIndexString = string => {
  const firstSymbol = (value, index, arr) => {
    if (index == 0) {
      return true;
    } else {
      return arr[index - 1] === ' ';
    }
  };

  return string.split('').filter(firstSymbol);
};

console.log(firstIndexString(str));

/***/ }),

/***/ "./app/changeArr.js":
/*!**************************!*\
  !*** ./app/changeArr.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

let array = [11, 22, 35, 48, 58, 66, 77, 88];

const changeArray = arr => {
  if (arr.length % 2 == 0) {
    const left = arr.splice(0, arr.length / 2);
    return [...arr, ...left];
  } else {
    const right = arr.reverse().splice(0, arr.length / 2).reverse();
    return [...right, ...arr];
  }
};

console.log(changeArray(array));

/***/ }),

/***/ "./app/coctailStorage.js":
/*!*******************************!*\
  !*** ./app/coctailStorage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coctailStorage; });
/* harmony import */ var _hasStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasStorage */ "./app/hasStorage.js");

class coctailStorage extends _hasStorage__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btn, view) {
    super();
    this.btn = Array.from(document.getElementsByClassName(btn));
    this.view = Array.from(document.getElementsByClassName(view))[0];
  }

  add() {
    let btn = Array.from(document.getElementsByClassName('add'))[0];
    btn.addEventListener('click', event => {
      event.preventDefault();
      this.addValue(form.name.value, {
        alc: form.alc.checked,
        composition: form.composition.value,
        recipe: form.recipe.value
      });
    });
  }

  anotherClicked() {
    this.btn.forEach(e => {
      e.addEventListener('click', () => {
        if (e.className == 'btn get') {
          let asked = prompt('Какой напиток желаете найти?');

          while (this.view.hasChildNodes()) {
            this.view.removeChild(this.view.lastChild);
          }

          console.log(this.getValue(asked));
          let div = document.createElement('div');
          div.innerHTML = `<h1>${asked}</h1 <p>${this.state[asked].alc ? ' (Алкогольный: Да)' : ' (Алкогольный: Нет)'}</p> <p>${this.state[asked].composition}</p><p>${this.state[asked].recipe}</p> `;
          this.view.appendChild(div);
        } else if (e.className == 'btn delete') {
          let del = prompt('Какой напиток хотите удалить?');
          let itemDel = Array.from(document.querySelectorAll('.view div  h1'));
          this.deleteValue(del);
          itemDel.forEach(e => {
            console.log(e.textContent);

            if (e.textContent == del) {
              e.parentNode.parentNode.removeChild(e.parentNode);
            }
          });
        } else if (e.className == 'btn all') {
          while (this.view.hasChildNodes()) {
            this.view.removeChild(this.view.lastChild);
          }

          let result = this.getKeys();

          for (let i = 0; i < result.length; i++) {
            let p = document.createElement('h1');
            p.textContent = result[i];
            this.view.append(p);
          }
        }
      });
    });
  }

}
let coct = new coctailStorage('btn', 'view');
coct.add();
coct.anotherClicked();
console.log(coct);

/***/ }),

/***/ "./app/currentSums.js":
/*!****************************!*\
  !*** ./app/currentSums.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

const currentSums = arr => {
  let result = [];

  const reducer = (acc, cur) => {
    result.push(`${acc}`);
    return `${acc} + ${cur}`;
  };

  arr.reduce(reducer);
  return result;
};

console.log(currentSums(numbers));

/***/ }),

/***/ "./app/hasStorage.js":
/*!***************************!*\
  !*** ./app/hasStorage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HashStorage; });
class HashStorage {
  constructor() {
    this.state = {};
  }

  addValue(key, value) {
    this.state[key] = value;
  }

  getValue(key) {
    return this.state[key];
  }

  deleteValue(key) {
    if (!(key in this.state)) {
      return false;
    }

    return delete this.state[key];
  }

  getKeys() {
    return Object.keys(this.state);
  }

}

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeArr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeArr.js */ "./app/changeArr.js");
/* harmony import */ var _changeArr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_changeArr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _currentSums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentSums.js */ "./app/currentSums.js");
/* harmony import */ var _currentSums_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_currentSums_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./String.js */ "./app/String.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_String_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coctailStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coctailStorage */ "./app/coctailStorage.js");








/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map