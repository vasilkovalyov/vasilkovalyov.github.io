/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 716:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var node_modules_gsap = __webpack_require__(225);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var gsap_ScrollTrigger = __webpack_require__(964);
// EXTERNAL MODULE: ./node_modules/gsap/Draggable.js
var Draggable = __webpack_require__(739);
// EXTERNAL MODULE: ./node_modules/gsap/MotionPathPlugin.js + 1 modules
var MotionPathPlugin = __webpack_require__(591);
;// CONCATENATED MODULE: ./src/js/modules/gsap.js


node_modules_gsap/* default.registerPlugin */.ZP.registerPlugin(gsap_ScrollTrigger/* ScrollTrigger */.i, Draggable/* Draggable */._, MotionPathPlugin/* MotionPathPlugin */.X);

function header() {
  var container = '.header';
  var obj = {
    overlay: "".concat(container, " .gsap-header-overlay"),
    logo: "".concat(container, " .gsap-header-logo"),
    menu: "".concat(container, " .gsap-header-menu")
  };
  if (!document.querySelector(container)) return;
  node_modules_gsap/* default.to */.ZP.to(obj.overlay, {
    width: "100%",
    duration: 1
  }, 1);
  node_modules_gsap/* default.to */.ZP.to(obj.logo, {
    opacity: 1
  }, 1);
  node_modules_gsap/* default.to */.ZP.to(obj.menu, {
    opacity: 1
  }, 1.5);
}

function introSection() {
  var container = '.gsap-section-intro';
  if (!document.querySelector(container)) return;
  var obj = {
    heading: "".concat(container, " .gsap-section-intro-heading")
  };
  node_modules_gsap/* default.to */.ZP.to(container, {
    opacity: 1,
    duration: 2
  });
  node_modules_gsap/* default.from */.ZP.from(obj.heading, {
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
  var tl = node_modules_gsap/* default.timeline */.ZP.timeline().from(obj.image, {
    height: "0"
  }, 0.3).from(obj.titleDecor, {
    x: "-200",
    opacity: 0
  }, 0.6).from(obj.content, {
    opacity: "0"
  }, 0.9);
  gsap_ScrollTrigger/* ScrollTrigger.create */.i.create({
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
  var tl = node_modules_gsap/* default.timeline */.ZP.timeline().from(obj.titleDecor, {
    x: "-100",
    opacity: 0
  }, 0.3).from(obj.heading, {
    y: "-100"
  }, 0.6).from(obj.content, {
    opacity: "0"
  }, 0.9);
  gsap_ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top top",
    animation: tl
  });
}

function servicesSection() {
  var container = '.gsap-section-services';
  if (!document.querySelector(container)) return;
  var baseCard = '.gsap-service';
  var obj = {
    media: "".concat(baseCard, " .gsap-service-media"),
    heading: "".concat(baseCard, " .gsap-service-heading"),
    content: "".concat(baseCard, " .gsap-service-text")
  };
  gsap.set(obj.media, {
    opacity: 0,
    y: 75,
    scale: 0.9
  });
  gsap.set(obj.heading, {
    opacity: 0,
    y: 50
  });
  gsap.set(obj.content, {
    opacity: 0,
    y: 40
  });
  ScrollTrigger.batch(baseCard, {
    onEnter: function onEnter(batch) {
      batch.forEach(function (card, index) {
        gsap.to(card.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.5,
          delay: index * 0.3
        });
      });
    },
    once: true
  });
}

function gsapInit() {
  var breakpoint = 1024;

  if (window.matchMedia("(min-width: ".concat(breakpoint, "px)")).matches) {
    header();
    introSection();
    aboutSection();
    contactSection(); // servicesSection();
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
  setTimeout(function () {
    loader.classList.add('inactive');
    loader.innerHTML = '';
  }, 5000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL2dzYXAuanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9zbGljay5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciwgRHJhZ2dhYmxlLCBNb3Rpb25QYXRoUGx1Z2luIH0gZnJvbSBcImdzYXAvYWxsXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIsIERyYWdnYWJsZSwgTW90aW9uUGF0aFBsdWdpbik7XHJcblxyXG5mdW5jdGlvbiBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmhlYWRlcic7XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgb3ZlcmxheTogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItb3ZlcmxheWAsXHJcbiAgICAgICAgbG9nbzogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItbG9nb2AsXHJcbiAgICAgICAgbWVudTogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItbWVudWAsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGdzYXAudG8ob2JqLm92ZXJsYXksIHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9LCAxKTtcclxuICAgIGdzYXAudG8ob2JqLmxvZ28sIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSwgMSk7XHJcbiAgICBnc2FwLnRvKG9iai5tZW51LCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sIDEuNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludHJvU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWludHJvJztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWludHJvLWhlYWRpbmdgLFxyXG4gICAgfVxyXG5cclxuICAgIGdzYXAudG8oY29udGFpbmVyLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKG9iai5oZWFkaW5nLCB7XHJcbiAgICAgICAgeTogLTEwMFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWFib3V0JztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaW1hZ2U6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC1pbWFnZWAsXHJcbiAgICAgICAgdGl0bGVEZWNvcjogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LXRpdGxlLWRlY29yYCxcclxuICAgICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtY29udGVudGAsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmouaW1hZ2UsIHsgaGVpZ2h0OiBcIjBcIiwgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLnRpdGxlRGVjb3IsIHsgeDogXCItMjAwXCIsIG9wYWNpdHk6IDAsIH0sIDAuNilcclxuICAgIC5mcm9tKG9iai5jb250ZW50LCB7IG9wYWNpdHk6IFwiMFwiLCB9LCAwLjkpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246IHRsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWNvbnRhY3QnO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICB0aXRsZURlY29yOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC10aXRsZS1kZWNvcmAsXHJcbiAgICAgICAgY29udGVudDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtY29udGVudGAsXHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtaGVhZGluZ2AsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmoudGl0bGVEZWNvciwgeyB4OiBcIi0xMDBcIiwgb3BhY2l0eTogMCwgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLmhlYWRpbmcsIHsgeTogXCItMTAwXCIgfSwgMC42KVxyXG4gICAgLmZyb20ob2JqLmNvbnRlbnQsIHsgb3BhY2l0eTogXCIwXCIsIH0sIDAuOSlcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZXNTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tc2VydmljZXMnO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGJhc2VDYXJkID0gJy5nc2FwLXNlcnZpY2UnXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIG1lZGlhOiBgJHtiYXNlQ2FyZH0gLmdzYXAtc2VydmljZS1tZWRpYWAsXHJcbiAgICAgICAgaGVhZGluZzogYCR7YmFzZUNhcmR9IC5nc2FwLXNlcnZpY2UtaGVhZGluZ2AsXHJcbiAgICAgICAgY29udGVudDogYCR7YmFzZUNhcmR9IC5nc2FwLXNlcnZpY2UtdGV4dGAsXHJcbiAgICB9XHJcblxyXG4gICAgZ3NhcC5zZXQob2JqLm1lZGlhLCB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHk6IDc1LFxyXG4gICAgICBzY2FsZTogMC45LFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLnNldChvYmouaGVhZGluZywge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB5OiA1MCxcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5zZXQob2JqLmNvbnRlbnQsIHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgeTogNDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmJhdGNoKGJhc2VDYXJkLCB7XHJcbiAgICAgIG9uRW50ZXI6IGJhdGNoID0+IHtcclxuICAgICAgICBiYXRjaC5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBnc2FwLnRvKGNhcmQuY2hpbGRyZW4sIHtvcGFjaXR5OiAxLCB5OiAwLCBzY2FsZTogMSwgc3RhZ2dlcjogMC41LCBkZWxheTogaW5kZXggKiAwLjN9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2U6IHRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnc2FwSW5pdCgpIHtcclxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSAxMDI0O1xyXG5cclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHticmVha3BvaW50fXB4KWApLm1hdGNoZXMpIHtcclxuICAgICAgICBoZWFkZXIoKTtcclxuICAgICAgICBpbnRyb1NlY3Rpb24oKTtcclxuICAgICAgICBhYm91dFNlY3Rpb24oKTtcclxuICAgICAgICBjb250YWN0U2VjdGlvbigpO1xyXG4gICAgICAgIC8vIHNlcnZpY2VzU2VjdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJmdW5jdGlvbiBoZWFkZXJUb2dnbGVyKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5uYXZiYXItdG9nZ2xlcicpO1xyXG4gICAgXHJcbiAgICBpZiAoIXRvZ2dsZXIpIHJldHVyblxyXG5cclxuICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21tb24oKSB7XHJcbiAgICBoZWFkZXJUb2dnbGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XHJcblxyXG5mdW5jdGlvbiBpbnRyb0Nhcm91c2VsKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gJy5qcy1ob21lLWNhcm91c2VsJztcclxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNvbnRhaW5lcik7XHJcbiAgICBpZiAoISRjb250YWluZXIpIHJldHVyblxyXG4gICAgJChzbGlkZXJDb250YWluZXIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjUwMCxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGFycm93cyA6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICBkb3RzQ2xhc3M6ICdob21lLWNhcm91c2VsLWRvdHMnXHJcbiAgICB9KTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGludHJvQ2Fyb3VzZWwoKVxyXG59IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2NzcydcblxuaW1wb3J0IGdzYXAgZnJvbSAnLi9tb2R1bGVzL2dzYXAnXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vbW9kdWxlcy9jb21tb24nXG5pbXBvcnQgc2xpY2sgZnJvbSAnLi9tb2R1bGVzL3NsaWNrJ1xuXG5mdW5jdGlvbiBsb2FkZXIoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByZWxvYWRlcicpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJylcbiAgICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICcnXG4gICAgfSwgNTAwMCk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBsb2FkZXIoKVxuICAgIGdzYXAoKTtcbiAgICBjb21tb24oKTtcbiAgICBzbGljaygpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXNlX2VudlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXNlX2VudlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgWzQ0Nl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDcxNikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIkRyYWdnYWJsZSIsIk1vdGlvblBhdGhQbHVnaW4iLCJyZWdpc3RlclBsdWdpbiIsImhlYWRlciIsImNvbnRhaW5lciIsIm9iaiIsIm92ZXJsYXkiLCJsb2dvIiwibWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvIiwid2lkdGgiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJpbnRyb1NlY3Rpb24iLCJoZWFkaW5nIiwiZnJvbSIsInkiLCJhYm91dFNlY3Rpb24iLCJpbWFnZSIsInRpdGxlRGVjb3IiLCJjb250ZW50IiwidGwiLCJ0aW1lbGluZSIsImhlaWdodCIsIngiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJhbmltYXRpb24iLCJjb250YWN0U2VjdGlvbiIsImVuZCIsInNlcnZpY2VzU2VjdGlvbiIsImJhc2VDYXJkIiwibWVkaWEiLCJzZXQiLCJzY2FsZSIsImJhdGNoIiwib25FbnRlciIsImZvckVhY2giLCJjYXJkIiwiaW5kZXgiLCJjaGlsZHJlbiIsInN0YWdnZXIiLCJkZWxheSIsIm9uY2UiLCJnc2FwSW5pdCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImhlYWRlclRvZ2dsZXIiLCJib2R5IiwidG9nZ2xlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb21tb24iLCJpbnRyb0Nhcm91c2VsIiwic2xpZGVyQ29udGFpbmVyIiwiJGNvbnRhaW5lciIsIiQiLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImFycm93cyIsImNzc0Vhc2UiLCJsb2FkZXIiLCJzZXRUaW1lb3V0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmVhZHkiXSwic291cmNlUm9vdCI6IiJ9