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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/getEntries.js");
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

/***/ "./src/getEntries.js":
/*!***************************!*\
  !*** ./src/getEntries.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = localStorage.getItem("token");
_api2.default.get("/user/entries", token).then(function (res) {
  return res.json();
}).then(function (data) {
  console.log(data);
  var entries = data["entries"];
  for (var i in entries) {
    if (entries.hasOwnProperty(i)) {
      var entry = entries[i];
      console.log(entry.title);
      document.getElementById("posts").innerHTML += "<div>\n        <button class=\"titles\" onClick=\"getSingle(event)\" data-id=\"" + entry.id + "\">\n        <h3>" + entry.title + "</h3>\n        </button>\n        </div><hr/>";
    }
  }
}).catch(function (error) {
  console.log(error);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0RW50cmllcy5qcyJdLCJuYW1lcyI6WyJBcGkiLCJiYXNlVXJsIiwiZW5kcG9pbnQiLCJ0b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcGkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImVudHJ5IiwidGl0bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiaWQiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsRztBQUNKLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLDZDQUFmO0FBQ0Q7Ozs7d0JBRUdDLFEsRUFBVUMsSyxFQUFPO0FBQ25CLGFBQU9DLFdBQVMsS0FBS0gsT0FBZCxHQUF3QkMsUUFBeEIsRUFBb0M7QUFDekNHLGdCQUFRLEtBRGlDO0FBRXpDQyxpQkFBUztBQUNQQyxxQ0FBeUJKLEtBRGxCO0FBRVAsMEJBQWdCO0FBRlQ7QUFGZ0MsT0FBcEMsQ0FBUDtBQU9EOzs7eUJBRUlELFEsRUFBVU0sSSxFQUFvQjtBQUFBLFVBQWRMLEtBQWMsdUVBQU4sSUFBTTs7QUFDakMsYUFBT0MsV0FBUyxLQUFLSCxPQUFkLEdBQXdCQyxRQUF4QixFQUFvQztBQUN6Q0csZ0JBQVEsTUFEaUM7QUFFekNJLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZUgsSUFBZixDQUZtQztBQUd6Q0YsaUJBQVM7QUFDUEMscUNBQXlCSixLQURsQjtBQUVQLDBCQUFnQjtBQUZUO0FBSGdDLE9BQXBDLENBQVA7QUFRRDs7OzJCQUVNRCxRLEVBQVVDLEssRUFBb0I7QUFBQSxVQUFiSyxJQUFhLHVFQUFOLElBQU07O0FBQ25DLGFBQU9KLFdBQVMsS0FBS0gsT0FBZCxHQUF3QkMsUUFBeEIsRUFBb0M7QUFDekNHLGdCQUFRLEtBRGlDO0FBRXpDSSxjQUFNQyxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FGbUM7QUFHekNGLGlCQUFTO0FBQ1BDLHFDQUF5QkosS0FEbEI7QUFFUCwwQkFBZ0I7QUFGVDtBQUhnQyxPQUFwQyxDQUFQO0FBUUQ7Ozs0QkFFTUQsUSxFQUFVQyxLLEVBQU87QUFDdEIsYUFBT0MsV0FBUyxLQUFLSCxPQUFkLEdBQXdCQyxRQUF4QixFQUFvQztBQUN6Q0csZ0JBQVEsUUFEaUM7QUFFekNDLGlCQUFTO0FBQ1BDLHFDQUF5QkosS0FEbEI7QUFFUCwwQkFBZ0I7QUFGVDtBQUZnQyxPQUFwQyxDQUFQO0FBT0Q7Ozs7OztBQUVILElBQU1TLE1BQU0sSUFBSVosR0FBSixFQUFaO2tCQUNlWSxHOzs7Ozs7Ozs7Ozs7OztBQ2hEZjs7Ozs7O0FBRUEsSUFBTVQsUUFBUVUsYUFBYUMsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0FGLGNBQ0dHLEdBREgsQ0FDTyxlQURQLEVBQ3dCWixLQUR4QixFQUVHYSxJQUZILENBRVE7QUFBQSxTQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxDQUZSLEVBR0dGLElBSEgsQ0FHUSxnQkFBUTtBQUNaRyxVQUFRQyxHQUFSLENBQVlaLElBQVo7QUFDQSxNQUFJYSxVQUFVYixLQUFLLFNBQUwsQ0FBZDtBQUNBLE9BQUssSUFBSWMsQ0FBVCxJQUFjRCxPQUFkLEVBQXVCO0FBQ3JCLFFBQUlBLFFBQVFFLGNBQVIsQ0FBdUJELENBQXZCLENBQUosRUFBK0I7QUFDN0IsVUFBSUUsUUFBUUgsUUFBUUMsQ0FBUixDQUFaO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWUksTUFBTUMsS0FBbEI7QUFDQUMsZUFBU0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsU0FBakMsd0ZBQzZESixNQUFNSyxFQURuRSx5QkFFTUwsTUFBTUMsS0FGWjtBQUtEO0FBQ0Y7QUFDRixDQWpCSCxFQWtCR0ssS0FsQkgsQ0FrQlMsaUJBQVM7QUFDZFgsVUFBUUMsR0FBUixDQUFZVyxLQUFaO0FBQ0QsQ0FwQkgsRSIsImZpbGUiOiJnZXRFbnRyaWVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dldEVudHJpZXMuanNcIik7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBcImh0dHBzOi8vbXlkaWFyeS12Mi1hcHAuaGVyb2t1YXBwLmNvbS9hcGkvdjFcIjtcbiAgfVxuXG4gIGdldChlbmRwb2ludCwgdG9rZW4pIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfSR7ZW5kcG9pbnR9YCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBvc3QoZW5kcG9pbnQsIGRhdGEsIHRva2VuID0gbnVsbCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKGVuZHBvaW50LCB0b2tlbiwgZGF0YSA9IG51bGwpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlVXJsfSR7ZW5kcG9pbnR9YCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKGVuZHBvaW50LCB0b2tlbikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHtlbmRwb2ludH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIuL2FwaVwiO1xuXG5jb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5hcGlcbiAgLmdldChcIi91c2VyL2VudHJpZXNcIiwgdG9rZW4pXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsZXQgZW50cmllcyA9IGRhdGFbXCJlbnRyaWVzXCJdO1xuICAgIGZvciAobGV0IGkgaW4gZW50cmllcykge1xuICAgICAgaWYgKGVudHJpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gZW50cmllc1tpXTtcbiAgICAgICAgY29uc29sZS5sb2coZW50cnkudGl0bGUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3RzXCIpLmlubmVySFRNTCArPSBgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRpdGxlc1wiIG9uQ2xpY2s9XCJnZXRTaW5nbGUoZXZlbnQpXCIgZGF0YS1pZD1cIiR7ZW50cnkuaWR9XCI+XG4gICAgICAgIDxoMz4ke2VudHJ5LnRpdGxlfTwvaDM+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj48aHIvPmA7XG4gICAgICB9XG4gICAgfVxuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9