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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/addentry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addentry.js":
/*!*************************!*\
  !*** ./src/addentry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById("addentryform").addEventListener("submit", function (e) {
  e.preventDefault();

  var data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value
  };
  console.log(data);

  var token = localStorage.getItem("token");
  _api2.default.post("/user/entries", data, token).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data.message);
    if (data.message === "Entry has been published") {
      var msg = data.message;
      document.getElementById("addentryform").innerHTML = msg;
      window.location.href = "./getEntries.html";
    } else {
      var _msg = Object.values(data);
      document.getElementById("addentryform").innerHTML = _msg;
    }
  });
});
// .catch(error => {
//     console.log(error);
//   };

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);

    this.baseUrl = "https://mydiary-v2-app.herokuapp.com/api/v1";
  }

  _createClass(Api, [{
    key: "get",
    value: function get(endpoint, token) {
      return fetch("" + this.baseUrl + endpoint, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      });
    }
  }, {
    key: "post",
    value: function post(endpoint, data) {
      var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return fetch("" + this.baseUrl + endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      });
    }
  }, {
    key: "update",
    value: function update(endpoint, token) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return fetch("" + this.baseUrl + endpoint, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(endpoint, token) {
      return fetch("" + this.baseUrl + endpoint, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      });
    }
  }]);

  return Api;
}();

var api = new Api();
exports.default = api;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZGVudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidGl0bGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzIiwianNvbiIsIm1lc3NhZ2UiLCJtc2ciLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJPYmplY3QiLCJ2YWx1ZXMiLCJBcGkiLCJiYXNlVXJsIiwiZW5kcG9pbnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxl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a0JBQ2ViLEciLCJmaWxlIjoiYWRkZW50cnkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWRkZW50cnkuanNcIik7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIuL2FwaVwiO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGVudHJ5Zm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWVcbiAgfTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICBhcGlcbiAgICAucG9zdChcIi91c2VyL2VudHJpZXNcIiwgZGF0YSwgdG9rZW4pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJFbnRyeSBoYXMgYmVlbiBwdWJsaXNoZWRcIikge1xuICAgICAgICBsZXQgbXNnID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGVudHJ5Zm9ybVwiKS5pbm5lckhUTUwgPSBtc2c7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuL2dldEVudHJpZXMuaHRtbFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG1zZyA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkZW50cnlmb3JtXCIpLmlubmVySFRNTCA9IG1zZztcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuLy8gLmNhdGNoKGVycm9yID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgIH07XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBcImh0dHBzOi8vbXlkaWFyeS12Mi1hcHAuaGVyb2t1YXBwLmNvbS9hcGkvdjFcIjtcbiAgfVxuXG4gIGdldChlbmRwb2ludCwgdG9rZW4pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfSR7ZW5kcG9pbnR9YCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBvc3QoZW5kcG9pbnQsIGRhdGEsIHRva2VuID0gbnVsbCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKGVuZHBvaW50LCB0b2tlbiwgZGF0YSA9IG51bGwpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfSR7ZW5kcG9pbnR9YCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKGVuZHBvaW50LCB0b2tlbikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iXSwic291cmNlUm9vdCI6IiJ9