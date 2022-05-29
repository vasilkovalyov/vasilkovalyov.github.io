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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9nc2FwLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvc2xpY2suanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIsIERyYWdnYWJsZSwgTW90aW9uUGF0aFBsdWdpbiB9IGZyb20gXCJnc2FwL2FsbFwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBEcmFnZ2FibGUsIE1vdGlvblBhdGhQbHVnaW4pO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5oZWFkZXInO1xyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIG92ZXJsYXk6IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLW92ZXJsYXlgLFxyXG4gICAgICAgIGxvZ286IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLWxvZ29gLFxyXG4gICAgICAgIG1lbnU6IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLW1lbnVgLFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBnc2FwLnRvKG9iai5vdmVybGF5LCB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSwgMSk7XHJcbiAgICBnc2FwLnRvKG9iai5sb2dvLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sIDEpO1xyXG4gICAgZ3NhcC50byhvYmoubWVudSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LCAxLjUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1pbnRybyc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1pbnRyby1oZWFkaW5nYCxcclxuICAgICAgICB0ZXh0OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24taW50cm8tdGV4dGBcclxuICAgIH1cclxuXHJcbiAgICBnc2FwLnRvKGNvbnRhaW5lciwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShvYmouaGVhZGluZywge1xyXG4gICAgICAgIHk6IC0xMDBcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKG9iai50ZXh0LCB7XHJcbiAgICAgICAgeTogMTAwXHJcbiAgICB9LCAwLjYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1hYm91dCc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGltYWdlOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtaW1hZ2VgLFxyXG4gICAgICAgIHRpdGxlRGVjb3I6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC10aXRsZS1kZWNvcmAsXHJcbiAgICAgICAgY29udGVudDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LWNvbnRlbnRgLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20ob2JqLmltYWdlLCB7IGhlaWdodDogXCIwXCIsIH0sIDAuMylcclxuICAgIC5mcm9tKG9iai50aXRsZURlY29yLCB7IHg6IFwiLTIwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjYpXHJcbiAgICAuZnJvbShvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjBcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiB0bFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1jb250YWN0JztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgdGl0bGVEZWNvcjogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtdGl0bGUtZGVjb3JgLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LWNvbnRlbnRgLFxyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LWhlYWRpbmdgLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20ob2JqLnRpdGxlRGVjb3IsIHsgeDogXCItMTAwXCIsIG9wYWNpdHk6IDAsIH0sIDAuMylcclxuICAgIC5mcm9tKG9iai5oZWFkaW5nLCB7IHk6IFwiLTEwMFwiIH0sIDAuNilcclxuICAgIC50byhvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjFcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlc1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3NhcC1zZWN0aW9uLXNlcnZpY2VzJylcclxuICAgIGlmICghY29udGFpbmVyKSByZXR1cm5cclxuXHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShjb250YWluZXIsIHsgeTogXCIxMDBcIiwgb3BhY2l0eTogMSwgfSwgMC4zKVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZWFtU2VjdGlvbkRlZmF1bHRDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tZGVmYXVsdC1jb250ZW50J1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tZGVmYXVsdC1jb250ZW50LWhlYWRpbmdgLFxyXG4gICAgICAgIHRleHQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1kZWZhdWx0LWNvbnRlbnQtdGV4dGAsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKG9iai5oZWFkaW5nLCB7IHk6IFwiMFwiICwgb3BhY2l0eTogXCIxXCIsfSwgMC4zKVxyXG4gICAgLnRvKG9iai50ZXh0LCB7IHk6IFwiMFwiLCBvcGFjaXR5OiBcIjFcIiwgfSwgMC41KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZWFtU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLXRlYW0nXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tdGVhbS1oZWFkaW5nYCxcclxuICAgICAgICBsaXN0OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tdGVhbS1saXN0YCxcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAudG8ob2JqLmhlYWRpbmcsIHsgeTogXCIwXCIsIG9wYWNpdHk6IFwiMVwiIH0sIDAuMSlcclxuICAgIC50byhvYmoubGlzdCwgeyBvcGFjaXR5OiBcIjFcIiwgfSwgMC42KVxyXG4gICAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3J0Zm9saW9TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tcG9ydGZvbGlvJ1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG4gICAgXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC50byhjb250YWluZXIsIHsgeTogXCIwXCIsIG9wYWNpdHk6IFwiMVwiIH0sIDAuMSlcclxuICAgIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB2aWRlb1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtdmlkZW8tYmxvY2snXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGNvbnRhaW5lciwgeyBvcGFjaXR5OiBcIjFcIiB9LCAwLjEpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcXVlc3Rpb25TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tcXVlc3Rpb24nXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGNvbnRhaW5lciwgeyBvcGFjaXR5OiBcIjFcIiB9LCAwLjEpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3NhcEluaXQoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50ID0gMTAyNDtcclxuXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludH1weClgKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgaGVhZGVyKCk7XHJcbiAgICAgICAgaW50cm9TZWN0aW9uKCk7XHJcbiAgICAgICAgYWJvdXRTZWN0aW9uKCk7XHJcbiAgICAgICAgY29udGFjdFNlY3Rpb24oKTtcclxuICAgICAgICBzZXJ2aWNlc1NlY3Rpb24oKTtcclxuICAgICAgICB0ZWFtU2VjdGlvbigpO1xyXG4gICAgICAgIHRlYW1TZWN0aW9uRGVmYXVsdENvbnRlbnQoKTtcclxuICAgICAgICBwb3J0Zm9saW9TZWN0aW9uKCk7XHJcbiAgICAgICAgdmlkZW9TZWN0aW9uKCk7XHJcbiAgICAgICAgcXVlc3Rpb25TZWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImZ1bmN0aW9uIGhlYWRlclRvZ2dsZXIoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgLm5hdmJhci10b2dnbGVyJyk7XHJcbiAgICBcclxuICAgIGlmICghdG9nZ2xlcikgcmV0dXJuXHJcblxyXG4gICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpZGVvKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXZpZGVvLWNvbnRhaW5lcicpXHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICBjb25zdCBidXR0b25QbGF5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy12aWRlby1wbGF5JylcclxuICAgIGNvbnN0IHZpZGVvUGxheWVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy12aWRlbycpXHJcblxyXG4gICAgYnV0dG9uUGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uUGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICAgIHZpZGVvUGxheWVyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCB0cnVlKVxyXG4gICAgICAgIHZpZGVvUGxheWVyLnBsYXkoKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWNjb3JkaW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjY29yZGlvbicpXHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICBjb25zdCB0b2dnbGVyQ2xzID0gJy5qcy1hY2NvcmRpb24tdG9nZ2xlcidcclxuICAgIGNvbnN0IHRvZ2dsZXJCb2R5ID0gJy5qcy1hY2NvcmRpb24tYm9keSdcclxuICAgIGNvbnN0IGFjdGl2ZUNscyA9ICdhY3RpdmUnXHJcblxyXG4gICAgY29udGFpbmVyLmZvckVhY2goKGFjY29yZGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZXIgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0b2dnbGVyQ2xzKVxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0b2dnbGVyQm9keSlcclxuXHJcbiAgICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYWNjb3JkaW9uLmNsYXNzTGlzdC50b2dnbGUoYWN0aXZlQ2xzKVxyXG4gICAgICAgICAgICBqUXVlcnkoYm9keSkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3J0Zm9saW9GaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLWNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBsaW5rcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZmlsdGVyLWxpbmsnKVxyXG4gICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWZpbHRlci1pdGVtJylcclxuICAgIGNvbnN0IGRhdGFmaWx0ZXIgPSAnZGF0YS1maWx0ZXInXHJcbiAgICBjb25zdCBoaWRkZUNscyA9ICdoaWRkZW4nXHJcbiAgICBjb25zdCBhY3RpdmVMaW5rQ2xzID0gJ2FjdGl2ZSdcclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZFdpdGhBcnJheShsaW5rcywgJ3JlbW92ZScsIGFjdGl2ZUxpbmtDbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpXHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUxpbmtDbHMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXRob2RXaXRoQXJyYXkoaXRlbXMsICdhZGQnLCBoaWRkZUNscylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJWYWx1ZSA9PT0gJ2FsbCcpIG1ldGhvZFdpdGhBcnJheShpdGVtcywgJ3JlbW92ZScsIGhpZGRlQ2xzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoZGF0YWZpbHRlcilcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW1WYWx1ZSA9PT0gZmlsdGVyVmFsdWUpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShoaWRkZUNscylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBtZXRob2RXaXRoQXJyYXkgPSAoZWxlbXMsIG1ldGhvZCwgY2xzKSA9PiB7XHJcbiAgICAgICAgZWxlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0W21ldGhvZF0oY2xzKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbW9uKCkge1xyXG4gICAgaGVhZGVyVG9nZ2xlcigpO1xyXG4gICAgdmlkZW8oKTtcclxuICAgIGFjY29yZGlvbigpO1xyXG4gICAgcG9ydGZvbGlvRmlsdGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XHJcblxyXG5mdW5jdGlvbiBpbnRyb0Nhcm91c2VsKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gJy5qcy1ob21lLWNhcm91c2VsJztcclxuICAgIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNvbnRhaW5lcik7XHJcbiAgICBpZiAoISRjb250YWluZXIpIHJldHVyblxyXG4gICAgJChzbGlkZXJDb250YWluZXIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjUwMCxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGFycm93cyA6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICBkb3RzQ2xhc3M6ICdob21lLWNhcm91c2VsLWRvdHMnXHJcbiAgICB9KTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGludHJvQ2Fyb3VzZWwoKVxyXG59IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2NzcydcblxuaW1wb3J0IGdzYXAgZnJvbSAnLi9tb2R1bGVzL2dzYXAnXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vbW9kdWxlcy9jb21tb24nXG5pbXBvcnQgc2xpY2sgZnJvbSAnLi9tb2R1bGVzL3NsaWNrJ1xuXG5mdW5jdGlvbiBsb2FkZXIoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByZWxvYWRlcicpXG4gICAgaWYgKCFsb2FkZXIpIHJldHVyblxuICAgIGNvbnN0IGhpZGRlbkNscyA9ICdvdmVyZmxvdy1oaWRkZW4nXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChoaWRkZW5DbHMpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5DbHMpXG4gICAgICAgIGxvYWRlci5pbm5lckhUTUwgPSAnJ1xuICAgIH0sIDQwMDApO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgbG9hZGVyKClcbiAgICBnc2FwKCk7XG4gICAgY29tbW9uKCk7XG4gICAgc2xpY2soKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYmFzZV9lbnZcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmFzZV9lbnZcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs0NDZdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3MTYpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJEcmFnZ2FibGUiLCJNb3Rpb25QYXRoUGx1Z2luIiwicmVnaXN0ZXJQbHVnaW4iLCJoZWFkZXIiLCJjb250YWluZXIiLCJvYmoiLCJvdmVybGF5IiwibG9nbyIsIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0byIsIndpZHRoIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiaW50cm9TZWN0aW9uIiwiaGVhZGluZyIsInRleHQiLCJmcm9tIiwieSIsImFib3V0U2VjdGlvbiIsImltYWdlIiwidGl0bGVEZWNvciIsImNvbnRlbnQiLCJ0bCIsInRpbWVsaW5lIiwiaGVpZ2h0IiwieCIsImNyZWF0ZSIsInRyaWdnZXIiLCJzdGFydCIsImFuaW1hdGlvbiIsImNvbnRhY3RTZWN0aW9uIiwiZW5kIiwic2VydmljZXNTZWN0aW9uIiwidGVhbVNlY3Rpb25EZWZhdWx0Q29udGVudCIsInRlYW1TZWN0aW9uIiwibGlzdCIsInBvcnRmb2xpb1NlY3Rpb24iLCJ2aWRlb1NlY3Rpb24iLCJxdWVzdGlvblNlY3Rpb24iLCJnc2FwSW5pdCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImhlYWRlclRvZ2dsZXIiLCJib2R5IiwidG9nZ2xlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ2aWRlbyIsImJ1dHRvblBsYXkiLCJ2aWRlb1BsYXllciIsImFkZCIsInNldEF0dHJpYnV0ZSIsInBsYXkiLCJhY2NvcmRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlckNscyIsInRvZ2dsZXJCb2R5IiwiYWN0aXZlQ2xzIiwiZm9yRWFjaCIsImpRdWVyeSIsInNsaWRlVG9nZ2xlIiwicG9ydGZvbGlvRmlsdGVyIiwibGlua3MiLCJpdGVtcyIsImRhdGFmaWx0ZXIiLCJoaWRkZUNscyIsImFjdGl2ZUxpbmtDbHMiLCJsaW5rIiwidGFyZ2V0IiwibWV0aG9kV2l0aEFycmF5IiwiZmlsdGVyVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJpdGVtIiwiaXRlbVZhbHVlIiwicmVtb3ZlIiwiZWxlbXMiLCJtZXRob2QiLCJjbHMiLCJjb21tb24iLCJpbnRyb0Nhcm91c2VsIiwic2xpZGVyQ29udGFpbmVyIiwiJGNvbnRhaW5lciIsIiQiLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImFycm93cyIsImNzc0Vhc2UiLCJsb2FkZXIiLCJoaWRkZW5DbHMiLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwicmVhZHkiXSwic291cmNlUm9vdCI6IiJ9