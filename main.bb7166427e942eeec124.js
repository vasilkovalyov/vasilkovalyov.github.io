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
    opacity: 1
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
  var tl = gsap/* default.timeline */.ZP.timeline().to(obj.heading, {
    y: "0",
    opacity: "1"
  }, 0.3).to(obj.text, {
    y: "0",
    opacity: "1"
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
  var tl = gsap/* default.timeline */.ZP.timeline().to(obj.heading, {
    y: "0",
    opacity: "1"
  }, 0.1).to(obj.list, {
    opacity: "1"
  }, 0.6);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top bottom",
    animation: tl // markers: true

  });
}

function portfolioSection() {
  var container = '.gsap-section-portfolio';
  if (!document.querySelector(container)) return;
  var tl = gsap/* default.timeline */.ZP.timeline().to(container, {
    y: "0",
    opacity: "1"
  }, 0.1);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top bottom",
    animation: tl
  });
}

function videoSection() {
  var container = '.gsap-video-block';
  if (!document.querySelector(container)) return;
  var tl = gsap/* default.timeline */.ZP.timeline().to(container, {
    opacity: "1"
  }, 0.1);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top bottom",
    animation: tl
  });
}

function questionSection() {
  var container = '.gsap-section-question';
  if (!document.querySelector(container)) return;
  var tl = gsap/* default.timeline */.ZP.timeline().to(container, {
    opacity: "1"
  }, 0.1);
  ScrollTrigger/* ScrollTrigger.create */.i.create({
    trigger: container,
    start: "top bottom",
    end: "top bottom",
    animation: tl
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
    portfolioSection();
    videoSection();
    questionSection();
  }
}
;// CONCATENATED MODULE: ./src/js/modules/common.js
/* provided dependency */ var jQuery = __webpack_require__(549);
function headerToggler() {
  var body = document.querySelector('body');
  var toggler = document.querySelector('.header .navbar-toggler');
  if (!toggler) return;
  toggler.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('nav-active');
  });
}

function video() {
  var container = document.querySelector('.js-video-container');
  if (!container) return;
  var buttonPlay = container.querySelector('.js-video-play');
  var videoPlayer = container.querySelector('.js-video');
  buttonPlay.addEventListener('click', function (e) {
    buttonPlay.classList.add('hidden');
    videoPlayer.setAttribute('controls', true);
    videoPlayer.play();
  });
}

function accordion() {
  var container = document.querySelectorAll('.js-accordion');
  if (!container) return;
  var togglerCls = '.js-accordion-toggler';
  var togglerBody = '.js-accordion-body';
  var activeCls = 'active';
  container.forEach(function (accordion) {
    var toggler = accordion.querySelector(togglerCls);
    var body = accordion.querySelector(togglerBody);
    toggler.addEventListener('click', function () {
      accordion.classList.toggle(activeCls);
      jQuery(body).slideToggle();
    });
  });
}

function portfolioFilter() {
  var container = document.querySelector('.js-filter-container');
  if (!container) return;
  var links = container.querySelectorAll('.js-filter-link');
  var items = container.querySelectorAll('.js-filter-item');
  var datafilter = 'data-filter';
  var hiddeCls = 'hidden';
  var activeLinkCls = 'active';
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target;
      methodWithArray(links, 'remove', activeLinkCls);
      var filterValue = target.getAttribute('href');
      target.classList.add(activeLinkCls);
      methodWithArray(items, 'add', hiddeCls);
      if (filterValue === 'all') methodWithArray(items, 'remove', hiddeCls);
      items.forEach(function (item) {
        var itemValue = item.getAttribute(datafilter);
        if (itemValue === filterValue) item.classList.remove(hiddeCls);
      });
    });
  });

  var methodWithArray = function methodWithArray(elems, method, cls) {
    elems.forEach(function (item) {
      return item.classList[method](cls);
    });
  };
}

function common() {
  headerToggler();
  video();
  accordion();
  portfolioFilter();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvZ3NhcC5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL3NsaWNrLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyLCBEcmFnZ2FibGUsIE1vdGlvblBhdGhQbHVnaW4gfSBmcm9tIFwiZ3NhcC9hbGxcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgRHJhZ2dhYmxlLCBNb3Rpb25QYXRoUGx1Z2luKTtcclxuXHJcbmZ1bmN0aW9uIGhlYWRlcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuaGVhZGVyJztcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBvdmVybGF5OiBgJHtjb250YWluZXJ9IC5nc2FwLWhlYWRlci1vdmVybGF5YCxcclxuICAgICAgICBsb2dvOiBgJHtjb250YWluZXJ9IC5nc2FwLWhlYWRlci1sb2dvYCxcclxuICAgICAgICBtZW51OiBgJHtjb250YWluZXJ9IC5nc2FwLWhlYWRlci1tZW51YCxcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgZ3NhcC50byhvYmoub3ZlcmxheSwge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgIH0sIDEpO1xyXG4gICAgZ3NhcC50byhvYmoubG9nbywge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LCAxKTtcclxuICAgIGdzYXAudG8ob2JqLm1lbnUsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSwgMS41KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50cm9TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24taW50cm8nO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24taW50cm8taGVhZGluZ2AsXHJcbiAgICAgICAgdGV4dDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWludHJvLXRleHRgXHJcbiAgICB9XHJcblxyXG4gICAgZ3NhcC50byhjb250YWluZXIsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20ob2JqLmhlYWRpbmcsIHtcclxuICAgICAgICB5OiAtMTAwXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShvYmoudGV4dCwge1xyXG4gICAgICAgIHk6IDEwMFxyXG4gICAgfSwgMC42KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tYWJvdXQnO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBpbWFnZTogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LWltYWdlYCxcclxuICAgICAgICB0aXRsZURlY29yOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtdGl0bGUtZGVjb3JgLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC1jb250ZW50YCxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKG9iai5pbWFnZSwgeyBoZWlnaHQ6IFwiMFwiLCB9LCAwLjMpXHJcbiAgICAuZnJvbShvYmoudGl0bGVEZWNvciwgeyB4OiBcIi0yMDBcIiwgb3BhY2l0eTogMCwgfSwgMC42KVxyXG4gICAgLmZyb20ob2JqLmNvbnRlbnQsIHsgb3BhY2l0eTogXCIwXCIsIH0sIDAuOSlcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdGxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tY29udGFjdCc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIHRpdGxlRGVjb3I6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LXRpdGxlLWRlY29yYCxcclxuICAgICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC1jb250ZW50YCxcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC1oZWFkaW5nYCxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKG9iai50aXRsZURlY29yLCB7IHg6IFwiLTEwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjMpXHJcbiAgICAuZnJvbShvYmouaGVhZGluZywgeyB5OiBcIi0xMDBcIiB9LCAwLjYpXHJcbiAgICAudG8ob2JqLmNvbnRlbnQsIHsgb3BhY2l0eTogXCIxXCIsIH0sIDAuOSlcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZXNTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdzYXAtc2VjdGlvbi1zZXJ2aWNlcycpXHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXHJcblxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20oY29udGFpbmVyLCB7IHk6IFwiMTAwXCIsIG9wYWNpdHk6IDEsIH0sIDAuMylcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGVhbVNlY3Rpb25EZWZhdWx0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWRlZmF1bHQtY29udGVudCdcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWRlZmF1bHQtY29udGVudC1oZWFkaW5nYCxcclxuICAgICAgICB0ZXh0OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tZGVmYXVsdC1jb250ZW50LXRleHRgLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC50byhvYmouaGVhZGluZywgeyB5OiBcIjBcIiAsIG9wYWNpdHk6IFwiMVwiLH0sIDAuMylcclxuICAgIC50byhvYmoudGV4dCwgeyB5OiBcIjBcIiwgb3BhY2l0eTogXCIxXCIsIH0sIDAuNSlcclxuICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgdG9wXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGVhbVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi10ZWFtJ1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG4gICAgXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLXRlYW0taGVhZGluZ2AsXHJcbiAgICAgICAgbGlzdDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLXRlYW0tbGlzdGAsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKG9iai5oZWFkaW5nLCB7IHk6IFwiMFwiLCBvcGFjaXR5OiBcIjFcIiB9LCAwLjEpXHJcbiAgICAudG8ob2JqLmxpc3QsIHsgb3BhY2l0eTogXCIxXCIsIH0sIDAuNilcclxuICAgIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICAgICAgLy8gbWFya2VyczogdHJ1ZVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9ydGZvbGlvU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLXBvcnRmb2xpbydcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuICAgIFxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAudG8oY29udGFpbmVyLCB7IHk6IFwiMFwiLCBvcGFjaXR5OiBcIjFcIiB9LCAwLjEpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdmlkZW9TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXZpZGVvLWJsb2NrJ1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG4gICAgXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC50byhjb250YWluZXIsIHsgb3BhY2l0eTogXCIxXCIgfSwgMC4xKVxyXG4gICAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXN0aW9uU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLXF1ZXN0aW9uJ1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG4gICAgXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC50byhjb250YWluZXIsIHsgb3BhY2l0eTogXCIxXCIgfSwgMC4xKVxyXG4gICAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdzYXBJbml0KCkge1xyXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IDEwMjQ7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnR9cHgpYCkubWF0Y2hlcykge1xyXG4gICAgICAgIGhlYWRlcigpO1xyXG4gICAgICAgIGludHJvU2VjdGlvbigpO1xyXG4gICAgICAgIGFib3V0U2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnRhY3RTZWN0aW9uKCk7XHJcbiAgICAgICAgc2VydmljZXNTZWN0aW9uKCk7XHJcbiAgICAgICAgdGVhbVNlY3Rpb24oKTtcclxuICAgICAgICB0ZWFtU2VjdGlvbkRlZmF1bHRDb250ZW50KCk7XHJcbiAgICAgICAgcG9ydGZvbGlvU2VjdGlvbigpO1xyXG4gICAgICAgIHZpZGVvU2VjdGlvbigpO1xyXG4gICAgICAgIHF1ZXN0aW9uU2VjdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJmdW5jdGlvbiBoZWFkZXJUb2dnbGVyKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5uYXZiYXItdG9nZ2xlcicpO1xyXG4gICAgXHJcbiAgICBpZiAoIXRvZ2dsZXIpIHJldHVyblxyXG5cclxuICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2aWRlbygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy12aWRlby1jb250YWluZXInKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG4gICAgY29uc3QgYnV0dG9uUGxheSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtdmlkZW8tcGxheScpXHJcbiAgICBjb25zdCB2aWRlb1BsYXllciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtdmlkZW8nKVxyXG5cclxuICAgIGJ1dHRvblBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvblBsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICB2aWRlb1BsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgdHJ1ZSlcclxuICAgICAgICB2aWRlb1BsYXllci5wbGF5KClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjY29yZGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2NvcmRpb24nKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG4gICAgY29uc3QgdG9nZ2xlckNscyA9ICcuanMtYWNjb3JkaW9uLXRvZ2dsZXInXHJcbiAgICBjb25zdCB0b2dnbGVyQm9keSA9ICcuanMtYWNjb3JkaW9uLWJvZHknXHJcbiAgICBjb25zdCBhY3RpdmVDbHMgPSAnYWN0aXZlJ1xyXG5cclxuICAgIGNvbnRhaW5lci5mb3JFYWNoKChhY2NvcmRpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0b2dnbGVyID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IodG9nZ2xlckNscylcclxuICAgICAgICBjb25zdCBib2R5ID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IodG9nZ2xlckJvZHkpXHJcblxyXG4gICAgICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjY29yZGlvbi5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNscylcclxuICAgICAgICAgICAgalF1ZXJ5KGJvZHkpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9ydGZvbGlvRmlsdGVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1jb250YWluZXInKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG4gICAgY29uc3QgbGlua3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWZpbHRlci1saW5rJylcclxuICAgIGNvbnN0IGl0ZW1zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1maWx0ZXItaXRlbScpXHJcbiAgICBjb25zdCBkYXRhZmlsdGVyID0gJ2RhdGEtZmlsdGVyJ1xyXG4gICAgY29uc3QgaGlkZGVDbHMgPSAnaGlkZGVuJ1xyXG4gICAgY29uc3QgYWN0aXZlTGlua0NscyA9ICdhY3RpdmUnXHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcblxyXG4gICAgICAgICAgICBtZXRob2RXaXRoQXJyYXkobGlua3MsICdyZW1vdmUnLCBhY3RpdmVMaW5rQ2xzKVxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChhY3RpdmVMaW5rQ2xzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kV2l0aEFycmF5KGl0ZW1zLCAnYWRkJywgaGlkZGVDbHMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyVmFsdWUgPT09ICdhbGwnKSBtZXRob2RXaXRoQXJyYXkoaXRlbXMsICdyZW1vdmUnLCBoaWRkZUNscylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKGRhdGFmaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtVmFsdWUgPT09IGZpbHRlclZhbHVlKSBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVDbHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbWV0aG9kV2l0aEFycmF5ID0gKGVsZW1zLCBtZXRob2QsIGNscykgPT4ge1xyXG4gICAgICAgIGVsZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdFttZXRob2RdKGNscykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbigpIHtcclxuICAgIGhlYWRlclRvZ2dsZXIoKTtcclxuICAgIHZpZGVvKCk7XHJcbiAgICBhY2NvcmRpb24oKTtcclxuICAgIHBvcnRmb2xpb0ZpbHRlcigpO1xyXG59XHJcbiIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xyXG5cclxuZnVuY3Rpb24gaW50cm9DYXJvdXNlbCgpIHtcclxuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9ICcuanMtaG9tZS1jYXJvdXNlbCc7XHJcbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDb250YWluZXIpO1xyXG4gICAgaWYgKCEkY29udGFpbmVyKSByZXR1cm5cclxuICAgICQoc2xpZGVyQ29udGFpbmVyKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDI1MDAsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBhcnJvd3MgOiBmYWxzZSxcclxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZG90c0NsYXNzOiAnaG9tZS1jYXJvdXNlbC1kb3RzJ1xyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICBpbnRyb0Nhcm91c2VsKClcclxufSIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnXG5cbmltcG9ydCBnc2FwIGZyb20gJy4vbW9kdWxlcy9nc2FwJ1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuL21vZHVsZXMvY29tbW9uJ1xuaW1wb3J0IHNsaWNrIGZyb20gJy4vbW9kdWxlcy9zbGljaydcblxuZnVuY3Rpb24gbG9hZGVyKCkge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmVsb2FkZXInKVxuICAgIGlmICghbG9hZGVyKSByZXR1cm5cbiAgICBjb25zdCBoaWRkZW5DbHMgPSAnb3ZlcmZsb3ctaGlkZGVuJ1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoaGlkZGVuQ2xzKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKVxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuQ2xzKVxuICAgICAgICBsb2FkZXIuaW5uZXJIVE1MID0gJydcbiAgICB9LCA0MDAwKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgIGxvYWRlcigpXG4gICAgZ3NhcCgpO1xuICAgIGNvbW1vbigpO1xuICAgIHNsaWNrKCk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Jhc2VfZW52XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Jhc2VfZW52XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNDQ2XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzE2KSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiRHJhZ2dhYmxlIiwiTW90aW9uUGF0aFBsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwiaGVhZGVyIiwiY29udGFpbmVyIiwib2JqIiwib3ZlcmxheSIsImxvZ28iLCJtZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG8iLCJ3aWR0aCIsImR1cmF0aW9uIiwib3BhY2l0eSIsImludHJvU2VjdGlvbiIsImhlYWRpbmciLCJ0ZXh0IiwiZnJvbSIsInkiLCJhYm91dFNlY3Rpb24iLCJpbWFnZSIsInRpdGxlRGVjb3IiLCJjb250ZW50IiwidGwiLCJ0aW1lbGluZSIsImhlaWdodCIsIngiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJhbmltYXRpb24iLCJjb250YWN0U2VjdGlvbiIsImVuZCIsInNlcnZpY2VzU2VjdGlvbiIsInRlYW1TZWN0aW9uRGVmYXVsdENvbnRlbnQiLCJ0ZWFtU2VjdGlvbiIsImxpc3QiLCJwb3J0Zm9saW9TZWN0aW9uIiwidmlkZW9TZWN0aW9uIiwicXVlc3Rpb25TZWN0aW9uIiwiZ3NhcEluaXQiLCJicmVha3BvaW50Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJoZWFkZXJUb2dnbGVyIiwiYm9keSIsInRvZ2dsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidmlkZW8iLCJidXR0b25QbGF5IiwidmlkZW9QbGF5ZXIiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJwbGF5IiwiYWNjb3JkaW9uIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZXJDbHMiLCJ0b2dnbGVyQm9keSIsImFjdGl2ZUNscyIsImZvckVhY2giLCJqUXVlcnkiLCJzbGlkZVRvZ2dsZSIsInBvcnRmb2xpb0ZpbHRlciIsImxpbmtzIiwiaXRlbXMiLCJkYXRhZmlsdGVyIiwiaGlkZGVDbHMiLCJhY3RpdmVMaW5rQ2xzIiwibGluayIsInRhcmdldCIsIm1ldGhvZFdpdGhBcnJheSIsImZpbHRlclZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiaXRlbSIsIml0ZW1WYWx1ZSIsInJlbW92ZSIsImVsZW1zIiwibWV0aG9kIiwiY2xzIiwiY29tbW9uIiwiaW50cm9DYXJvdXNlbCIsInNsaWRlckNvbnRhaW5lciIsIiRjb250YWluZXIiLCIkIiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsImZhZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJhcnJvd3MiLCJjc3NFYXNlIiwibG9hZGVyIiwiaGlkZGVuQ2xzIiwic2V0VGltZW91dCIsImlubmVySFRNTCIsInJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==