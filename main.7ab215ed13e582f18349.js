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
    heading: "".concat(container, " .gsap-section-intro-heading"),
    text: "".concat(container, " .gsap-section-intro-text")
  };
  gsap/* default.to */.ZP.to(container, {
    opacity: 1,
    duration: 2
  });
  gsap/* default.from */.ZP.from(obj.heading, {
    y: -100
  });
  gsap/* default.from */.ZP.from(obj.text, {
    y: 100
  }, 0.6);
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
    start: "top bottom",
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
  }, 0.6).to(obj.content, {
    opacity: "1"
  }, 0.9);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top top",
    animation: tl
  });
}

function servicesSection() {
  var container = document.querySelector('.gsap-section-services');
  if (!container) return;
  var tl = gsap/* default.timeline */.ZP.timeline().from(container, {
    y: "100",
    opacity: 0
  }, 0.3);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top top",
    animation: tl
  });
}

function teamSectionDefaultContent() {
  var container = '.gsap-section-default-content';
  if (!document.querySelector(container)) return;
  var obj = {
    heading: "".concat(container, " .gsap-section-default-content-heading"),
    text: "".concat(container, " .gsap-section-default-content-text")
  };
  var tl = gsap/* default.timeline */.ZP.timeline().from(obj.heading, {
    y: "100",
    opacity: "0"
  }, 0.3).from(obj.text, {
    y: "100",
    opacity: "0"
  }, 0.5);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top top",
    animation: tl
  });
}

function teamSection() {
  var container = '.gsap-section-team';
  if (!document.querySelector(container)) return;
  var obj = {
    heading: "".concat(container, " .gsap-section-team-heading"),
    list: "".concat(container, " .gsap-section-team-list")
  };
  var tl = gsap/* default.timeline */.ZP.timeline().from(obj.heading, {
    y: "-100"
  }, 0.3).from(obj.list, {
    opacity: "0"
  }, 1);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top center",
    end: "top center",
    animation: tl,
    markers: true
  });
}

function gsapInit() {
  var breakpoint = 1024;

  if (window.matchMedia("(min-width: ".concat(breakpoint, "px)")).matches) {
    header();
    introSection();
    aboutSection();
    contactSection();
    servicesSection();
    teamSection();
    teamSectionDefaultContent();
  }
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





function loader() {
  var loader = document.querySelector('.js-preloader');
  if (!loader) return;
  var hiddenCls = 'overflow-hidden';
  var body = document.querySelector('body');
  body.classList.add(hiddenCls);
  setTimeout(function () {
    loader.classList.add('inactive');
    body.classList.remove(hiddenCls);
    loader.innerHTML = '';
  }, 4000);
}

main_$(document).ready(function () {
  loader();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL2dzYXAuanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9zbGljay5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciwgRHJhZ2dhYmxlLCBNb3Rpb25QYXRoUGx1Z2luIH0gZnJvbSBcImdzYXAvYWxsXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIsIERyYWdnYWJsZSwgTW90aW9uUGF0aFBsdWdpbik7XHJcblxyXG5mdW5jdGlvbiBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmhlYWRlcic7XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgb3ZlcmxheTogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItb3ZlcmxheWAsXHJcbiAgICAgICAgbG9nbzogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItbG9nb2AsXHJcbiAgICAgICAgbWVudTogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItbWVudWAsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGdzYXAudG8ob2JqLm92ZXJsYXksIHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9LCAxKTtcclxuICAgIGdzYXAudG8ob2JqLmxvZ28sIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSwgMSk7XHJcbiAgICBnc2FwLnRvKG9iai5tZW51LCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sIDEuNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludHJvU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWludHJvJztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWludHJvLWhlYWRpbmdgLFxyXG4gICAgICAgIHRleHQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1pbnRyby10ZXh0YFxyXG4gICAgfVxyXG5cclxuICAgIGdzYXAudG8oY29udGFpbmVyLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKG9iai5oZWFkaW5nLCB7XHJcbiAgICAgICAgeTogLTEwMFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20ob2JqLnRleHQsIHtcclxuICAgICAgICB5OiAxMDBcclxuICAgIH0sIDAuNik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWFib3V0JztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaW1hZ2U6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC1pbWFnZWAsXHJcbiAgICAgICAgdGl0bGVEZWNvcjogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LXRpdGxlLWRlY29yYCxcclxuICAgICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtY29udGVudGAsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmouaW1hZ2UsIHsgaGVpZ2h0OiBcIjBcIiwgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLnRpdGxlRGVjb3IsIHsgeDogXCItMjAwXCIsIG9wYWNpdHk6IDAsIH0sIDAuNilcclxuICAgIC5mcm9tKG9iai5jb250ZW50LCB7IG9wYWNpdHk6IFwiMFwiLCB9LCAwLjkpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246IHRsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWNvbnRhY3QnO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICB0aXRsZURlY29yOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC10aXRsZS1kZWNvcmAsXHJcbiAgICAgICAgY29udGVudDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtY29udGVudGAsXHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtaGVhZGluZ2AsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmoudGl0bGVEZWNvciwgeyB4OiBcIi0xMDBcIiwgb3BhY2l0eTogMCwgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLmhlYWRpbmcsIHsgeTogXCItMTAwXCIgfSwgMC42KVxyXG4gICAgLnRvKG9iai5jb250ZW50LCB7IG9wYWNpdHk6IFwiMVwiLCB9LCAwLjkpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2VzU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nc2FwLXNlY3Rpb24tc2VydmljZXMnKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG5cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKGNvbnRhaW5lciwgeyB5OiBcIjEwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjMpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlYW1TZWN0aW9uRGVmYXVsdENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1kZWZhdWx0LWNvbnRlbnQnXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZ2AsXHJcbiAgICAgICAgdGV4dDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWRlZmF1bHQtY29udGVudC10ZXh0YCxcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmouaGVhZGluZywgeyB5OiBcIjEwMFwiICwgb3BhY2l0eTogXCIwXCIsfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLnRleHQsIHsgeTogXCIxMDBcIiwgb3BhY2l0eTogXCIwXCIsIH0sIDAuNSlcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGVhbVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi10ZWFtJ1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG4gICAgXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLXRlYW0taGVhZGluZ2AsXHJcbiAgICAgICAgbGlzdDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLXRlYW0tbGlzdGAsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20ob2JqLmhlYWRpbmcsIHsgeTogXCItMTAwXCIgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLmxpc3QsIHsgb3BhY2l0eTogXCIwXCIsIH0sIDEpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgY2VudGVyXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgICAgIG1hcmtlcnM6IHRydWVcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdzYXBJbml0KCkge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IDEwMjQ7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnR9cHgpYCkubWF0Y2hlcykge1xyXG4gICAgICAgIGhlYWRlcigpO1xyXG4gICAgICAgIGludHJvU2VjdGlvbigpO1xyXG4gICAgICAgIGFib3V0U2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnRhY3RTZWN0aW9uKCk7XHJcbiAgICAgICAgc2VydmljZXNTZWN0aW9uKCk7XHJcbiAgICAgICAgdGVhbVNlY3Rpb24oKTtcclxuICAgICAgICB0ZWFtU2VjdGlvbkRlZmF1bHRDb250ZW50KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImZ1bmN0aW9uIGhlYWRlclRvZ2dsZXIoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgLm5hdmJhci10b2dnbGVyJyk7XHJcbiAgICBcclxuICAgIGlmICghdG9nZ2xlcikgcmV0dXJuXHJcblxyXG4gICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbigpIHtcclxuICAgIGhlYWRlclRvZ2dsZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcclxuXHJcbmZ1bmN0aW9uIGludHJvQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSAnLmpzLWhvbWUtY2Fyb3VzZWwnO1xyXG4gICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyQ29udGFpbmVyKTtcclxuICAgIGlmICghJGNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICAkKHNsaWRlckNvbnRhaW5lcikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyNTAwLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzIDogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgIGRvdHNDbGFzczogJ2hvbWUtY2Fyb3VzZWwtZG90cydcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgaW50cm9DYXJvdXNlbCgpXHJcbn0iLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgZ3NhcCBmcm9tICcuL21vZHVsZXMvZ3NhcCdcbmltcG9ydCBjb21tb24gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbidcbmltcG9ydCBzbGljayBmcm9tICcuL21vZHVsZXMvc2xpY2snXG5cbmZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJlbG9hZGVyJylcbiAgICBpZiAoIWxvYWRlcikgcmV0dXJuXG4gICAgY29uc3QgaGlkZGVuQ2xzID0gJ292ZXJmbG93LWhpZGRlbidcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKGhpZGRlbkNscylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJylcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkNscylcbiAgICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICcnXG4gICAgfSwgNDAwMCk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBsb2FkZXIoKVxuICAgIGdzYXAoKTtcbiAgICBjb21tb24oKTtcbiAgICBzbGljaygpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXNlX2VudlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXNlX2VudlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzQ0Nl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDcxNikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkRyYWdnYWJsZSIsIk1vdGlvblBhdGhQbHVnaW4iLCJyZWdpc3RlclBsdWdpbiIsImhlYWRlciIsImNvbnRhaW5lciIsIm9iaiIsIm92ZXJsYXkiLCJsb2dvIiwibWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvIiwid2lkdGgiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJpbnRyb1NlY3Rpb24iLCJoZWFkaW5nIiwidGV4dCIsImZyb20iLCJ5IiwiYWJvdXRTZWN0aW9uIiwiaW1hZ2UiLCJ0aXRsZURlY29yIiwiY29udGVudCIsInRsIiwidGltZWxpbmUiLCJoZWlnaHQiLCJ4IiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwiYW5pbWF0aW9uIiwiY29udGFjdFNlY3Rpb24iLCJlbmQiLCJzZXJ2aWNlc1NlY3Rpb24iLCJ0ZWFtU2VjdGlvbkRlZmF1bHRDb250ZW50IiwidGVhbVNlY3Rpb24iLCJsaXN0IiwibWFya2VycyIsImdzYXBJbml0IiwiYnJlYWtwb2ludCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaGVhZGVyVG9nZ2xlciIsImJvZHkiLCJ0b2dnbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbW1vbiIsImludHJvQ2Fyb3VzZWwiLCJzbGlkZXJDb250YWluZXIiLCIkY29udGFpbmVyIiwiJCIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiY3NzRWFzZSIsImxvYWRlciIsImhpZGRlbkNscyIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJyZWFkeSJdLCJzb3VyY2VSb290IjoiIn0=