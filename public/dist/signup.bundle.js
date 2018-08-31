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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/signup.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ }),

/***/ "./src/signup.js":
/*!***********************!*\
  !*** ./src/signup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementsByClassName("alert-danger")[0].style.visibility = "hidden";
document.getElementById("signupform").addEventListener("submit", function (e) {
  e.preventDefault();
  var password = document.getElementById("password").value;
  var password1 = document.getElementById("password1").value;
  var data = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: password,
    password1: password1
  };

  if (password === password1 && password.length >= 8) {
    console.log(data);

    _api2.default.post("/user/signup", data).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      if (res.message === "Successfully registered") {
        window.location.href = "./login.html";
      } else {
        var alertbox = document.getElementsByClassName("alert-danger")[0];
        alertbox.innerHTML = res.message;
        alertbox.style.visibility = "visible";
      }
    });
  } else {
    var alertbox = document.getElementsByClassName("alert-danger")[0];
    var message = "Ensure passwords match";
    alertbox.innerHTML = message;
    alertbox.style.visibility = "visible";
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkFwaSIsImJhc2VVcmwiLCJlbmRwb2ludCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFwaSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkIiwidmFsdWUiLCJwYXNzd29yZDEiLCJ1c2VybmFtZSIsImVtYWlsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwicmVzIiwianNvbiIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhbGVydGJveCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LE9BRkQsTUFFTztBQUNMLFlBQUlDLFdBQVd4QixTQUFTQyxzQkFBVCxDQUFnQyxjQUFoQyxFQUFnRCxDQUFoRCxDQUFmO0FBQ0F1QixpQkFBU0MsU0FBVCxHQUFxQlAsSUFBSUUsT0FBekI7QUFDQUksaUJBQVN0QixLQUFULENBQWVDLFVBQWYsR0FBNEIsU0FBNUI7QUFDRDtBQUNGLEtBWkg7QUFhRCxHQWhCRCxNQWdCTztBQUNMLFFBQUlxQixXQUFXeEIsU0FBU0Msc0JBQVQsQ0FBZ0MsY0FBaEMsRUFBZ0QsQ0FBaEQsQ0FBZjtBQUNBLFFBQUltQixVQUFVLHdCQUFkO0FBQ0FJLGFBQVNDLFNBQVQsR0FBcUJMLE9BQXJCO0FBQ0FJLGFBQVN0QixLQUFULENBQWVDLFVBQWYsR0FBNEIsU0FBNUI7QUFDRDtBQUNGLENBakNELEUiLCJmaWxlIjoic2lnbnVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NpZ251cC5qc1wiKTtcbiIsImNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZVVybCA9IFwiaHR0cHM6Ly9teWRpYXJ5LXYyLWFwcC5oZXJva3VhcHAuY29tL2FwaS92MVwiO1xuICB9XG5cbiAgZ2V0KGVuZHBvaW50LCB0b2tlbikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcG9zdChlbmRwb2ludCwgZGF0YSwgdG9rZW4gPSBudWxsKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0ke2VuZHBvaW50fWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoZW5kcG9pbnQsIHRva2VuLCBkYXRhID0gbnVsbCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoZW5kcG9pbnQsIHRva2VuKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZVVybH0ke2VuZHBvaW50fWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbmNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIi4vYXBpXCI7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGVydC1kYW5nZXJcIilbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cGZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKS52YWx1ZTtcbiAgbGV0IHBhc3N3b3JkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmQxXCIpLnZhbHVlO1xuICBjb25zdCBkYXRhID0ge1xuICAgIHVzZXJuYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpLnZhbHVlLFxuICAgIGVtYWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLnZhbHVlLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICBwYXNzd29yZDE6IHBhc3N3b3JkMVxuICB9O1xuXG4gIGlmIChwYXNzd29yZCA9PT0gcGFzc3dvcmQxICYmIHBhc3N3b3JkLmxlbmd0aCA+PSA4KSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBhcGlcbiAgICAgIC5wb3N0KFwiL3VzZXIvc2lnbnVwXCIsIGRhdGEpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmIChyZXMubWVzc2FnZSA9PT0gXCJTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4vbG9naW4uaHRtbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBhbGVydGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGVydC1kYW5nZXJcIilbMF07XG4gICAgICAgICAgYWxlcnRib3guaW5uZXJIVE1MID0gcmVzLm1lc3NhZ2U7XG4gICAgICAgICAgYWxlcnRib3guc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgYWxlcnRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxlcnQtZGFuZ2VyXCIpWzBdO1xuICAgIGxldCBtZXNzYWdlID0gXCJFbnN1cmUgcGFzc3dvcmRzIG1hdGNoXCI7XG4gICAgYWxlcnRib3guaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBhbGVydGJveC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==