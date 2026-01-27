/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/App.js"
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_MunDB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MunDB.js */ \"./app/components/MunDB.js\");\n/* harmony import */ var _Builder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builder.js */ \"./app/Builder.js\");\n\r\n\r\n\r\nclass App {\r\n    constructor(cms_block) {\r\n        new _Builder_js__WEBPACK_IMPORTED_MODULE_1__.Builder(cms_block, _components_MunDB_js__WEBPACK_IMPORTED_MODULE_0__.MunDB);\r\n    }\r\n}\n\n//# sourceURL=webpack://nav/./app/App.js?\n}");

/***/ },

/***/ "./app/Builder.js"
/*!************************!*\
  !*** ./app/Builder.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Builder: () => (/* binding */ Builder)\n/* harmony export */ });\nclass Builder {\r\n    constructor(parent, obj) {\r\n        this.parent = parent;\r\n        this.build(parent, obj);\r\n    }\r\n\r\n    #not_attributes = ['className', 'children', 'html', 'textContent'];\r\n    #handlers = {\r\n        html: (parent, value) => {\r\n            const element = document.createElement(value);\r\n            parent.appendChild(element);\r\n        },\r\n        className: (el, value) => el.className = value,\r\n    };\r\n\r\n    build(parent, obj) {\r\n        for (const key in obj) {\r\n            if (!this.#not_attributes.includes(key)) {\r\n                this.element.setAttribute(key, obj[key]);\r\n                continue; //skips the rest of the loop\r\n            }\r\n\r\n            switch (this.#not_attributes) {\r\n                case 'html': {\r\n                    this.#handlers.html(parent, obj[key]);\r\n                    break;\r\n                }\r\n                case 'className': {\r\n                    this.#handlers.className();\r\n                }\r\n            }\r\n        }\r\n        parent.appendChild(this.element);\r\n    }\r\n}\n\n//# sourceURL=webpack://nav/./app/Builder.js?\n}");

/***/ },

/***/ "./app/components/MunDB.js"
/*!*********************************!*\
  !*** ./app/components/MunDB.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MunDB: () => (/* binding */ MunDB)\n/* harmony export */ });\nfunction docRow(key, { title, info, href, type = \"DOC\", icon = \"\" }) {\r\n    return {\r\n        [key]: {\r\n            html: \"div\",\r\n            className: \"document-list__item document-list__item--row\",\r\n            children: {\r\n                link: {\r\n                    html: \"div\",\r\n                    className: \"document-list__item-link\",\r\n                    children: {\r\n                        a: {\r\n                            html: \"a\",\r\n                            className: \"btn btn-icon btn-white btn-br btn-sm\",\r\n                            href,\r\n                            target: href.startsWith(\"http\") ? \"_blank\" : undefined,\r\n                            rel: href.startsWith(\"http\") ? \"noopener noreferrer\" : undefined,\r\n                            children: {\r\n                                icon: { html: \"i\", className: \"material-icons\", textContent: icon },\r\n                                type: { html: \"text\", text: type },\r\n                            },\r\n                        },\r\n                    },\r\n                },\r\n                desc: {\r\n                    html: \"div\",\r\n                    className: \"document-list__item-desc\" + (href.startsWith(\"http\") ? \" align-self-center\" : \"\"),\r\n                    children: {\r\n                        title: { html: \"div\", className: \"document-list__item-title\", textContent: title },\r\n                        info: { html: \"div\", className: \"document-list__item-info\", textContent: info },\r\n                    },\r\n                },\r\n            },\r\n        },\r\n    };\r\n}\r\n\r\nconst MunDB = {\r\n    html: \"div\",\r\n    className: \"mun_db\",\r\n    children: {\r\n        title: { html: \"h2\", className: \"section_title\" },\r\n        attention: { html: \"div\", className: \"attention_block\" },\r\n        info_block: {\r\n            html: \"div\",\r\n            className: \"info_block\",\r\n            children: {\r\n                ...docRow(\"row1\", {\r\n                    title: \"Инструкция по работе с БД ПМО\",\r\n                    info: \"1.12 Мб, 04.10.2023\",\r\n                    href: \"/storage/mediabank/Инструкция по работе с БД ПМО - СО.doc\",\r\n                    type: \"DOC\",\r\n                }),\r\n                ...docRow(\"row2\", {\r\n                    title: \"Краткий методологический комментарий по показателям БД ПМО\",\r\n                    info: \"03.10.2023\",\r\n                    href: \"https://rosstat.gov.ru/storage/mediabank/met_bdpmo.htm\",\r\n                    type: \"WEB\",\r\n                    icon: \"call_made\",\r\n                }),\r\n                ...docRow(\"row3\", {\r\n                    title: \"БД ПМО\",\r\n                    info: \"25.12.2018\",\r\n                    href: \"https://rosstat.gov.ru/dbscripts/munst/munst65/DBInet.cgi\",\r\n                    type: \"WEB\",\r\n                    icon: \"call_made\",\r\n                }),\r\n                ...docRow(\"row4\", {\r\n                    title: \"Ввод в действие жилых домов на территории Свердловской области за 2023-2024 годы\",\r\n                    info: \"45.1 Кб, 28.03.2025\",\r\n                    href: \"/storage/mediabank/Ввод в действие жилых домов_2023-2024.docx\",\r\n                    type: \"DOCX\",\r\n                    icon: \"\",\r\n                }),\r\n            },\r\n        },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://nav/./app/components/MunDB.js?\n}");

/***/ },

/***/ "./app/index.js"
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./app/App.js\");\n/* harmony import */ var _utils_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/key.js */ \"./app/utils/key.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\r\n  const cms_block = document.getElementById(_utils_key_js__WEBPACK_IMPORTED_MODULE_1__.CMS_BLOCK_ID)?.parentElement;\r\n\r\n  if (cms_block) {\r\n    new _App_js__WEBPACK_IMPORTED_MODULE_0__.App(cms_block);\r\n  }\r\n});\r\n\r\nif (false) // removed by dead control flow\n{}\n\n//# sourceURL=webpack://nav/./app/index.js?\n}");

/***/ },

/***/ "./app/utils/key.js"
/*!**************************!*\
  !*** ./app/utils/key.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CMS_BLOCK_ID: () => (/* binding */ CMS_BLOCK_ID)\n/* harmony export */ });\nconst CMS_BLOCK_ID = '0d7427e8-f667-45b1-8ade-a2c60e950022';\r\n\n\n//# sourceURL=webpack://nav/./app/utils/key.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;