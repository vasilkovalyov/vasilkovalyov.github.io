/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 716:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(225);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var ScrollTrigger = __webpack_require__(964);
// EXTERNAL MODULE: ./node_modules/gsap/Draggable.js
var Draggable = __webpack_require__(739);
// EXTERNAL MODULE: ./node_modules/gsap/MotionPathPlugin.js + 1 modules
var MotionPathPlugin = __webpack_require__(591);
;// CONCATENATED MODULE: ./src/js/modules/gsap.js


gsap/* default.registerPlugin */.ZP.registerPlugin(ScrollTrigger/* ScrollTrigger */.i, Draggable/* Draggable */._, MotionPathPlugin/* MotionPathPlugin */.X);

function header() {
  var container = '.header';
  var obj = {
    overlay: "".concat(container, " .gsap-header-overlay"),
    logo: "".concat(container, " .gsap-header-logo"),
    menu: "".concat(container, " .gsap-header-menu")
  };
  if (!document.querySelector(container)) return;
  gsap/* default.to */.ZP.to(obj.overlay, {
    width: "100%",
    duration: 1
  }, 1);
  gsap/* default.to */.ZP.to(obj.logo, {
    opacity: 1
  }, 1);
  gsap/* default.to */.ZP.to(obj.menu, {
    opacity: 1
  }, 1.5);
}

function introSection() {
  var container = '.gsap-section-intro';
  if (!document.querySelector(container)) return;
  var obj = {
    heading: "".concat(container, " .gsap-section-intro-heading")
  };
  gsap/* default.to */.ZP.to(container, {
    opacity: 1,
    duration: 2
  });
  gsap/* default.from */.ZP.from(obj.heading, {
    y: -100
  });
}

function aboutSection() {
  var container = '.gsap-section-about';
  if (!document.querySelector(container)) return;
  var obj = {
    image: "".concat(container, " .gsap-section-about-image"),
    titleDecor: "".concat(container, " .gsap-section-about-title-decor"),
    content: "".concat(container, " .gsap-section-about-content")
  };
  var tl = gsap/* default.timeline */.ZP.timeline().from(obj.image, {
    height: "0"
  }, 0.3).from(obj.titleDecor, {
    x: "-200",
    opacity: 0
  }, 0.6).from(obj.content, {
    opacity: "0"
  }, 0.9);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top center",
    end: "top center",
    animation: tl
  });
}

function contactSection() {
  var container = '.gsap-section-contact';
  if (!document.querySelector(container)) return;
  var obj = {
    titleDecor: "".concat(container, " .gsap-section-contact-title-decor"),
    content: "".concat(container, " .gsap-section-contact-content"),
    heading: "".concat(container, " .gsap-section-contact-heading")
  };
  var tl = gsap/* default.timeline */.ZP.timeline().from(obj.titleDecor, {
    x: "-100",
    opacity: 0
  }, 0.3).from(obj.heading, {
    y: "-100"
  }, 0.6).from(obj.content, {
    opacity: "0"
  }, 0.9);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top top",
    animation: tl,
    markers: true
  });
}

function servicesSection() {// const container = '.gsap-section-services';
  // if (!document.querySelector(container)) return
  // const obj = {
  //     media: `${container} .service__media`,
  //     content: `${container} .service__body`,
  // }
  // let tl = gsap.timeline()
  // .from(obj.media, { x: "-100", opacity: 0, }, 0.3)
  // .from(obj.content, { y: "-100" }, 0.6)
  // ScrollTrigger.create({
  //     trigger: container,
  //     start: "top center",
  //     end: "top center",
  //     animation:tl
  // })
}

function gsapInit() {
  header();
  introSection();
  aboutSection();
  contactSection();
  servicesSection();
}
;// CONCATENATED MODULE: ./src/js/modules/common.js
function headerToggler() {
  var body = document.querySelector('body');
  var toggler = document.querySelector('.header .navbar-toggler');
  if (!toggler) return;
  toggler.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('nav-active');
  });
}

function common() {
  headerToggler();
}
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.js
var slick = __webpack_require__(259);
;// CONCATENATED MODULE: ./src/js/modules/slick.js
/* provided dependency */ var $ = __webpack_require__(549);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function introCarousel() {
  var _$$slick;

  var sliderContainer = '.js-home-carousel';
  var $container = document.querySelector(sliderContainer);
  if (!$container) return;
  $(sliderContainer).slick((_$$slick = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'linear'
  }, _defineProperty(_$$slick, "dots", true), _defineProperty(_$$slick, "draggable", false), _defineProperty(_$$slick, "dotsClass", 'home-carousel-dots'), _$$slick));
}

/* harmony default export */ function modules_slick() {
  introCarousel();
}
;// CONCATENATED MODULE: ./src/js/main.js
/* provided dependency */ var main_$ = __webpack_require__(549);




main_$(document).ready(function () {
  gsapInit();
  common();
  modules_slick();
});

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbase_env"] = self["webpackChunkbase_env"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [446], () => (__webpack_require__(716)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUVBRyxNQUFDLENBQUN2QyxRQUFELENBQUQsQ0FBWWtELEtBQVosQ0FBa0IsWUFBTTtBQUNwQjdELEVBQUFBLFFBQUk7QUFDSjhDLEVBQUFBLE1BQU07QUFDTkssRUFBQUEsYUFBSztBQUNSLENBSkQ7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9nc2FwLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvc2xpY2suanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIsIERyYWdnYWJsZSwgTW90aW9uUGF0aFBsdWdpbiB9IGZyb20gXCJnc2FwL2FsbFwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBEcmFnZ2FibGUsIE1vdGlvblBhdGhQbHVnaW4pO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5oZWFkZXInO1xyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIG92ZXJsYXk6IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLW92ZXJsYXlgLFxyXG4gICAgICAgIGxvZ286IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLWxvZ29gLFxyXG4gICAgICAgIG1lbnU6IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLW1lbnVgLFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBnc2FwLnRvKG9iai5vdmVybGF5LCB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSwgMSk7XHJcbiAgICBnc2FwLnRvKG9iai5sb2dvLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sIDEpO1xyXG4gICAgZ3NhcC50byhvYmoubWVudSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LCAxLjUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1pbnRybyc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1pbnRyby1oZWFkaW5nYCxcclxuICAgIH1cclxuXHJcbiAgICBnc2FwLnRvKGNvbnRhaW5lciwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShvYmouaGVhZGluZywge1xyXG4gICAgICAgIHk6IC0xMDBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1hYm91dCc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGltYWdlOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtaW1hZ2VgLFxyXG4gICAgICAgIHRpdGxlRGVjb3I6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC10aXRsZS1kZWNvcmAsXHJcbiAgICAgICAgY29udGVudDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LWNvbnRlbnRgLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20ob2JqLmltYWdlLCB7IGhlaWdodDogXCIwXCIsIH0sIDAuMylcclxuICAgIC5mcm9tKG9iai50aXRsZURlY29yLCB7IHg6IFwiLTIwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjYpXHJcbiAgICAuZnJvbShvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjBcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCBjZW50ZXJcIixcclxuICAgICAgICBhbmltYXRpb246dGxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tY29udGFjdCc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIHRpdGxlRGVjb3I6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LXRpdGxlLWRlY29yYCxcclxuICAgICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC1jb250ZW50YCxcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC1oZWFkaW5nYCxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKG9iai50aXRsZURlY29yLCB7IHg6IFwiLTEwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjMpXHJcbiAgICAuZnJvbShvYmouaGVhZGluZywgeyB5OiBcIi0xMDBcIiB9LCAwLjYpXHJcbiAgICAuZnJvbShvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjBcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICAgICAgbWFya2VyczogdHJ1ZSxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2VzU2VjdGlvbigpIHtcclxuICAgIC8vIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLXNlcnZpY2VzJztcclxuICAgIC8vIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICAvLyBjb25zdCBvYmogPSB7XHJcbiAgICAvLyAgICAgbWVkaWE6IGAke2NvbnRhaW5lcn0gLnNlcnZpY2VfX21lZGlhYCxcclxuICAgIC8vICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5zZXJ2aWNlX19ib2R5YCxcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC8vIC5mcm9tKG9iai5tZWRpYSwgeyB4OiBcIi0xMDBcIiwgb3BhY2l0eTogMCwgfSwgMC4zKVxyXG4gICAgLy8gLmZyb20ob2JqLmNvbnRlbnQsIHsgeTogXCItMTAwXCIgfSwgMC42KVxyXG4gIFxyXG4gICAgLy8gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgLy8gICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgIC8vICAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXHJcbiAgICAvLyAgICAgZW5kOiBcInRvcCBjZW50ZXJcIixcclxuICAgIC8vICAgICBhbmltYXRpb246dGxcclxuICAgIC8vIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdzYXBJbml0KCkge1xyXG4gICAgaGVhZGVyKCk7XHJcbiAgICBpbnRyb1NlY3Rpb24oKTtcclxuICAgIGFib3V0U2VjdGlvbigpO1xyXG4gICAgY29udGFjdFNlY3Rpb24oKTtcclxuICAgIHNlcnZpY2VzU2VjdGlvbigpO1xyXG59XHJcblxyXG4iLCJmdW5jdGlvbiBoZWFkZXJUb2dnbGVyKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5uYXZiYXItdG9nZ2xlcicpO1xyXG4gICAgXHJcbiAgICBpZiAoIXRvZ2dsZXIpIHJldHVyblxyXG5cclxuICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21tb24oKSB7XHJcbiAgICBoZWFkZXJUb2dnbGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XHJcblxyXG5mdW5jdGlvbiBpbnRyb0Nhcm91c2VsKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gJy5qcy1ob21lLWNhcm91c2VsJztcclxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNvbnRhaW5lcik7XHJcbiAgICBpZiAoISRjb250YWluZXIpIHJldHVyblxyXG4gICAgJChzbGlkZXJDb250YWluZXIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjUwMCxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGFycm93cyA6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICBkb3RzQ2xhc3M6ICdob21lLWNhcm91c2VsLWRvdHMnXHJcbiAgICB9KTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGludHJvQ2Fyb3VzZWwoKVxyXG59IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2NzcydcblxuaW1wb3J0IGdzYXAgZnJvbSAnLi9tb2R1bGVzL2dzYXAnXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vbW9kdWxlcy9jb21tb24nXG5pbXBvcnQgc2xpY2sgZnJvbSAnLi9tb2R1bGVzL3NsaWNrJ1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgZ3NhcCgpO1xuICAgIGNvbW1vbigpO1xuICAgIHNsaWNrKCk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Jhc2VfZW52XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Jhc2VfZW52XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNDQ2XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzE2KSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiRHJhZ2dhYmxlIiwiTW90aW9uUGF0aFBsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwiaGVhZGVyIiwiY29udGFpbmVyIiwib2JqIiwib3ZlcmxheSIsImxvZ28iLCJtZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG8iLCJ3aWR0aCIsImR1cmF0aW9uIiwib3BhY2l0eSIsImludHJvU2VjdGlvbiIsImhlYWRpbmciLCJmcm9tIiwieSIsImFib3V0U2VjdGlvbiIsImltYWdlIiwidGl0bGVEZWNvciIsImNvbnRlbnQiLCJ0bCIsInRpbWVsaW5lIiwiaGVpZ2h0IiwieCIsImNyZWF0ZSIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsImFuaW1hdGlvbiIsImNvbnRhY3RTZWN0aW9uIiwibWFya2VycyIsInNlcnZpY2VzU2VjdGlvbiIsImdzYXBJbml0IiwiaGVhZGVyVG9nZ2xlciIsImJvZHkiLCJ0b2dnbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbW1vbiIsImludHJvQ2Fyb3VzZWwiLCJzbGlkZXJDb250YWluZXIiLCIkY29udGFpbmVyIiwiJCIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiY3NzRWFzZSIsInJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==