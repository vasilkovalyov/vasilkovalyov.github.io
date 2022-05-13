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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvZ3NhcC5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL3NsaWNrLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyLCBEcmFnZ2FibGUsIE1vdGlvblBhdGhQbHVnaW4gfSBmcm9tIFwiZ3NhcC9hbGxcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgRHJhZ2dhYmxlLCBNb3Rpb25QYXRoUGx1Z2luKTtcclxuXHJcbmZ1bmN0aW9uIGhlYWRlcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuaGVhZGVyJztcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBvdmVybGF5OiBgJHtjb250YWluZXJ9IC5nc2FwLWhlYWRlci1vdmVybGF5YCxcclxuICAgICAgICBsb2dvOiBgJHtjb250YWluZXJ9IC5nc2FwLWhlYWRlci1sb2dvYCxcclxuICAgICAgICBtZW51OiBgJHtjb250YWluZXJ9IC5nc2FwLWhlYWRlci1tZW51YCxcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgZ3NhcC50byhvYmoub3ZlcmxheSwge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgIH0sIDEpO1xyXG4gICAgZ3NhcC50byhvYmoubG9nbywge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LCAxKTtcclxuICAgIGdzYXAudG8ob2JqLm1lbnUsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSwgMS41KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50cm9TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24taW50cm8nO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24taW50cm8taGVhZGluZ2AsXHJcbiAgICB9XHJcblxyXG4gICAgZ3NhcC50byhjb250YWluZXIsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20ob2JqLmhlYWRpbmcsIHtcclxuICAgICAgICB5OiAtMTAwXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tYWJvdXQnO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBpbWFnZTogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LWltYWdlYCxcclxuICAgICAgICB0aXRsZURlY29yOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtdGl0bGUtZGVjb3JgLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC1jb250ZW50YCxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKG9iai5pbWFnZSwgeyBoZWlnaHQ6IFwiMFwiLCB9LCAwLjMpXHJcbiAgICAuZnJvbShvYmoudGl0bGVEZWNvciwgeyB4OiBcIi0yMDBcIiwgb3BhY2l0eTogMCwgfSwgMC42KVxyXG4gICAgLmZyb20ob2JqLmNvbnRlbnQsIHsgb3BhY2l0eTogXCIwXCIsIH0sIDAuOSlcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdGxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tY29udGFjdCc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIHRpdGxlRGVjb3I6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LXRpdGxlLWRlY29yYCxcclxuICAgICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC1jb250ZW50YCxcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC1oZWFkaW5nYCxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKG9iai50aXRsZURlY29yLCB7IHg6IFwiLTEwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjMpXHJcbiAgICAuZnJvbShvYmouaGVhZGluZywgeyB5OiBcIi0xMDBcIiB9LCAwLjYpXHJcbiAgICAuZnJvbShvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjBcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlc1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1zZXJ2aWNlcyc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgYmFzZUNhcmQgPSAnLmdzYXAtc2VydmljZSdcclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgbWVkaWE6IGAke2Jhc2VDYXJkfSAuZ3NhcC1zZXJ2aWNlLW1lZGlhYCxcclxuICAgICAgICBoZWFkaW5nOiBgJHtiYXNlQ2FyZH0gLmdzYXAtc2VydmljZS1oZWFkaW5nYCxcclxuICAgICAgICBjb250ZW50OiBgJHtiYXNlQ2FyZH0gLmdzYXAtc2VydmljZS10ZXh0YCxcclxuICAgIH1cclxuXHJcbiAgICBnc2FwLnNldChvYmoubWVkaWEsIHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgeTogNzUsXHJcbiAgICAgIHNjYWxlOiAwLjksXHJcbiAgICB9KTtcclxuICAgIGdzYXAuc2V0KG9iai5oZWFkaW5nLCB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHk6IDUwLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLnNldChvYmouY29udGVudCwge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB5OiA0MCxcclxuICAgIH0pO1xyXG5cclxuICAgIFNjcm9sbFRyaWdnZXIuYmF0Y2goYmFzZUNhcmQsIHtcclxuICAgICAgb25FbnRlcjogYmF0Y2ggPT4ge1xyXG4gICAgICAgIGJhdGNoLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGdzYXAudG8oY2FyZC5jaGlsZHJlbiwge29wYWNpdHk6IDEsIHk6IDAsIHNjYWxlOiAxLCBzdGFnZ2VyOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuM30pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb25jZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdzYXBJbml0KCkge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IDEwMjQ7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnR9cHgpYCkubWF0Y2hlcykge1xyXG4gICAgICAgIGhlYWRlcigpO1xyXG4gICAgICAgIGludHJvU2VjdGlvbigpO1xyXG4gICAgICAgIGFib3V0U2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnRhY3RTZWN0aW9uKCk7XHJcbiAgICAgICAgLy8gc2VydmljZXNTZWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImZ1bmN0aW9uIGhlYWRlclRvZ2dsZXIoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgLm5hdmJhci10b2dnbGVyJyk7XHJcbiAgICBcclxuICAgIGlmICghdG9nZ2xlcikgcmV0dXJuXHJcblxyXG4gICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbigpIHtcclxuICAgIGhlYWRlclRvZ2dsZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcclxuXHJcbmZ1bmN0aW9uIGludHJvQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSAnLmpzLWhvbWUtY2Fyb3VzZWwnO1xyXG4gICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyQ29udGFpbmVyKTtcclxuICAgIGlmICghJGNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICAkKHNsaWRlckNvbnRhaW5lcikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyNTAwLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzIDogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgIGRvdHNDbGFzczogJ2hvbWUtY2Fyb3VzZWwtZG90cydcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgaW50cm9DYXJvdXNlbCgpXHJcbn0iLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgZ3NhcCBmcm9tICcuL21vZHVsZXMvZ3NhcCdcbmltcG9ydCBjb21tb24gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbidcbmltcG9ydCBzbGljayBmcm9tICcuL21vZHVsZXMvc2xpY2snXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBnc2FwKCk7XG4gICAgY29tbW9uKCk7XG4gICAgc2xpY2soKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYmFzZV9lbnZcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmFzZV9lbnZcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs0NDZdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3MTYpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJEcmFnZ2FibGUiLCJNb3Rpb25QYXRoUGx1Z2luIiwicmVnaXN0ZXJQbHVnaW4iLCJoZWFkZXIiLCJjb250YWluZXIiLCJvYmoiLCJvdmVybGF5IiwibG9nbyIsIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0byIsIndpZHRoIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiaW50cm9TZWN0aW9uIiwiaGVhZGluZyIsImZyb20iLCJ5IiwiYWJvdXRTZWN0aW9uIiwiaW1hZ2UiLCJ0aXRsZURlY29yIiwiY29udGVudCIsInRsIiwidGltZWxpbmUiLCJoZWlnaHQiLCJ4IiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwiYW5pbWF0aW9uIiwiY29udGFjdFNlY3Rpb24iLCJlbmQiLCJzZXJ2aWNlc1NlY3Rpb24iLCJiYXNlQ2FyZCIsIm1lZGlhIiwic2V0Iiwic2NhbGUiLCJiYXRjaCIsIm9uRW50ZXIiLCJmb3JFYWNoIiwiY2FyZCIsImluZGV4IiwiY2hpbGRyZW4iLCJzdGFnZ2VyIiwiZGVsYXkiLCJvbmNlIiwiZ3NhcEluaXQiLCJicmVha3BvaW50Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJoZWFkZXJUb2dnbGVyIiwiYm9keSIsInRvZ2dsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29tbW9uIiwiaW50cm9DYXJvdXNlbCIsInNsaWRlckNvbnRhaW5lciIsIiRjb250YWluZXIiLCIkIiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsImZhZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJhcnJvd3MiLCJjc3NFYXNlIiwicmVhZHkiXSwic291cmNlUm9vdCI6IiJ9