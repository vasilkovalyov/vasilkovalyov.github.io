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
// EXTERNAL MODULE: ./node_modules/lightbox2/dist/js/lightbox.js
var lightbox = __webpack_require__(135);
var lightbox_default = /*#__PURE__*/__webpack_require__.n(lightbox);
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

function lightboxInit() {
  lightbox_default().option({
    'resizeDuration': 200,
    'wrapAround': true
  });
}

function common() {
  headerToggler();
  video();
  accordion();
  lightboxInit();
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [358], () => (__webpack_require__(716)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9nc2FwLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL2Jhc2UtZW52Ly4vc3JjL2pzL21vZHVsZXMvc2xpY2suanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIsIERyYWdnYWJsZSwgTW90aW9uUGF0aFBsdWdpbiB9IGZyb20gXCJnc2FwL2FsbFwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBEcmFnZ2FibGUsIE1vdGlvblBhdGhQbHVnaW4pO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5oZWFkZXInO1xyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIG92ZXJsYXk6IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLW92ZXJsYXlgLFxyXG4gICAgICAgIGxvZ286IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLWxvZ29gLFxyXG4gICAgICAgIG1lbnU6IGAke2NvbnRhaW5lcn0gLmdzYXAtaGVhZGVyLW1lbnVgLFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBnc2FwLnRvKG9iai5vdmVybGF5LCB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSwgMSk7XHJcbiAgICBnc2FwLnRvKG9iai5sb2dvLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sIDEpO1xyXG4gICAgZ3NhcC50byhvYmoubWVudSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LCAxLjUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRyb1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1pbnRybyc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1pbnRyby1oZWFkaW5nYCxcclxuICAgICAgICB0ZXh0OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24taW50cm8tdGV4dGBcclxuICAgIH1cclxuXHJcbiAgICBnc2FwLnRvKGNvbnRhaW5lciwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICB9KTtcclxuICAgIGdzYXAuZnJvbShvYmouaGVhZGluZywge1xyXG4gICAgICAgIHk6IC0xMDBcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKG9iai50ZXh0LCB7XHJcbiAgICAgICAgeTogMTAwXHJcbiAgICB9LCAwLjYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1hYm91dCc7XHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGltYWdlOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtaW1hZ2VgLFxyXG4gICAgICAgIHRpdGxlRGVjb3I6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC10aXRsZS1kZWNvcmAsXHJcbiAgICAgICAgY29udGVudDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LWNvbnRlbnRgLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20ob2JqLmltYWdlLCB7IGhlaWdodDogXCIwXCIsIH0sIDAuMylcclxuICAgIC5mcm9tKG9iai50aXRsZURlY29yLCB7IHg6IFwiLTIwMFwiLCBvcGFjaXR5OiAwLCB9LCAwLjYpXHJcbiAgICAuZnJvbShvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjBcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiB0bFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1jb250YWN0JztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgdGl0bGVEZWNvcjogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtdGl0bGUtZGVjb3JgLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LWNvbnRlbnRgLFxyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1jb250YWN0LWhlYWRpbmdgLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLmZyb20ob2JqLnRpdGxlRGVjb3IsIHsgeDogXCItMTAwXCIsIG9wYWNpdHk6IDAsIH0sIDAuMylcclxuICAgIC5mcm9tKG9iai5oZWFkaW5nLCB7IHk6IFwiLTEwMFwiIH0sIDAuNilcclxuICAgIC50byhvYmouY29udGVudCwgeyBvcGFjaXR5OiBcIjFcIiwgfSwgMC45KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlc1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3NhcC1zZWN0aW9uLXNlcnZpY2VzJylcclxuICAgIGlmICghY29udGFpbmVyKSByZXR1cm5cclxuXHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShjb250YWluZXIsIHsgeTogXCIxMDBcIiwgb3BhY2l0eTogMSwgfSwgMC4zKVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZWFtU2VjdGlvbkRlZmF1bHRDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tZGVmYXVsdC1jb250ZW50J1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tZGVmYXVsdC1jb250ZW50LWhlYWRpbmdgLFxyXG4gICAgICAgIHRleHQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1kZWZhdWx0LWNvbnRlbnQtdGV4dGAsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKG9iai5oZWFkaW5nLCB7IHk6IFwiMFwiICwgb3BhY2l0eTogXCIxXCIsfSwgMC4zKVxyXG4gICAgLnRvKG9iai50ZXh0LCB7IHk6IFwiMFwiLCBvcGFjaXR5OiBcIjFcIiwgfSwgMC41KVxyXG4gIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCB0b3BcIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZWFtU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLXRlYW0nXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICBoZWFkaW5nOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tdGVhbS1oZWFkaW5nYCxcclxuICAgICAgICBsaXN0OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tdGVhbS1saXN0YCxcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAudG8ob2JqLmhlYWRpbmcsIHsgeTogXCIwXCIsIG9wYWNpdHk6IFwiMVwiIH0sIDAuMSlcclxuICAgIC50byhvYmoubGlzdCwgeyBvcGFjaXR5OiBcIjFcIiwgfSwgMC42KVxyXG4gICAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3J0Zm9saW9TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tcG9ydGZvbGlvJ1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG4gICAgXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC50byhjb250YWluZXIsIHsgeTogXCIwXCIsIG9wYWNpdHk6IFwiMVwiIH0sIDAuMSlcclxuICAgIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB2aWRlb1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtdmlkZW8tYmxvY2snXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGNvbnRhaW5lciwgeyBvcGFjaXR5OiBcIjFcIiB9LCAwLjEpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcXVlc3Rpb25TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tcXVlc3Rpb24nXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGNvbnRhaW5lciwgeyBvcGFjaXR5OiBcIjFcIiB9LCAwLjEpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3NhcEluaXQoKSB7XHJcbiAgICBjb25zdCBicmVha3BvaW50ID0gMTAyNDtcclxuXHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludH1weClgKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgaGVhZGVyKCk7XHJcbiAgICAgICAgaW50cm9TZWN0aW9uKCk7XHJcbiAgICAgICAgYWJvdXRTZWN0aW9uKCk7XHJcbiAgICAgICAgY29udGFjdFNlY3Rpb24oKTtcclxuICAgICAgICBzZXJ2aWNlc1NlY3Rpb24oKTtcclxuICAgICAgICB0ZWFtU2VjdGlvbigpO1xyXG4gICAgICAgIHRlYW1TZWN0aW9uRGVmYXVsdENvbnRlbnQoKTtcclxuICAgICAgICBwb3J0Zm9saW9TZWN0aW9uKCk7XHJcbiAgICAgICAgdmlkZW9TZWN0aW9uKCk7XHJcbiAgICAgICAgcXVlc3Rpb25TZWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBsaWdodGJveCBmcm9tIFwibGlnaHRib3gyXCI7XHJcblxyXG5mdW5jdGlvbiBoZWFkZXJUb2dnbGVyKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5uYXZiYXItdG9nZ2xlcicpO1xyXG4gICAgXHJcbiAgICBpZiAoIXRvZ2dsZXIpIHJldHVyblxyXG5cclxuICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25hdi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2aWRlbygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy12aWRlby1jb250YWluZXInKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG4gICAgY29uc3QgYnV0dG9uUGxheSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtdmlkZW8tcGxheScpXHJcbiAgICBjb25zdCB2aWRlb1BsYXllciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuanMtdmlkZW8nKVxyXG5cclxuICAgIGJ1dHRvblBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGJ1dHRvblBsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICB2aWRlb1BsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgdHJ1ZSlcclxuICAgICAgICB2aWRlb1BsYXllci5wbGF5KClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjY29yZGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2NvcmRpb24nKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG4gICAgY29uc3QgdG9nZ2xlckNscyA9ICcuanMtYWNjb3JkaW9uLXRvZ2dsZXInXHJcbiAgICBjb25zdCB0b2dnbGVyQm9keSA9ICcuanMtYWNjb3JkaW9uLWJvZHknXHJcbiAgICBjb25zdCBhY3RpdmVDbHMgPSAnYWN0aXZlJ1xyXG5cclxuICAgIGNvbnRhaW5lci5mb3JFYWNoKChhY2NvcmRpb24pID0+IHtcclxuICAgICAgICBjb25zdCB0b2dnbGVyID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IodG9nZ2xlckNscylcclxuICAgICAgICBjb25zdCBib2R5ID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IodG9nZ2xlckJvZHkpXHJcblxyXG4gICAgICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjY29yZGlvbi5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNscylcclxuICAgICAgICAgICAgalF1ZXJ5KGJvZHkpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9ydGZvbGlvRmlsdGVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZpbHRlci1jb250YWluZXInKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG4gICAgY29uc3QgbGlua3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWZpbHRlci1saW5rJylcclxuICAgIGNvbnN0IGl0ZW1zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1maWx0ZXItaXRlbScpXHJcbiAgICBjb25zdCBkYXRhZmlsdGVyID0gJ2RhdGEtZmlsdGVyJ1xyXG4gICAgY29uc3QgaGlkZGVDbHMgPSAnaGlkZGVuJ1xyXG4gICAgY29uc3QgYWN0aXZlTGlua0NscyA9ICdhY3RpdmUnXHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcblxyXG4gICAgICAgICAgICBtZXRob2RXaXRoQXJyYXkobGlua3MsICdyZW1vdmUnLCBhY3RpdmVMaW5rQ2xzKVxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChhY3RpdmVMaW5rQ2xzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kV2l0aEFycmF5KGl0ZW1zLCAnYWRkJywgaGlkZGVDbHMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyVmFsdWUgPT09ICdhbGwnKSBtZXRob2RXaXRoQXJyYXkoaXRlbXMsICdyZW1vdmUnLCBoaWRkZUNscylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKGRhdGFmaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtVmFsdWUgPT09IGZpbHRlclZhbHVlKSBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVDbHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbWV0aG9kV2l0aEFycmF5ID0gKGVsZW1zLCBtZXRob2QsIGNscykgPT4ge1xyXG4gICAgICAgIGVsZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdFttZXRob2RdKGNscykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpZ2h0Ym94SW5pdCgpIHtcclxuICAgIGxpZ2h0Ym94Lm9wdGlvbih7XHJcbiAgICAgICAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwLFxyXG4gICAgICAgICd3cmFwQXJvdW5kJzogdHJ1ZVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbW9uKCkge1xyXG4gICAgaGVhZGVyVG9nZ2xlcigpO1xyXG4gICAgdmlkZW8oKTtcclxuICAgIGFjY29yZGlvbigpO1xyXG4gICAgbGlnaHRib3hJbml0KCk7XHJcbiAgICBwb3J0Zm9saW9GaWx0ZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcclxuXHJcbmZ1bmN0aW9uIGludHJvQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSAnLmpzLWhvbWUtY2Fyb3VzZWwnO1xyXG4gICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyQ29udGFpbmVyKTtcclxuICAgIGlmICghJGNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICAkKHNsaWRlckNvbnRhaW5lcikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyNTAwLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzIDogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgIGRvdHNDbGFzczogJ2hvbWUtY2Fyb3VzZWwtZG90cydcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgaW50cm9DYXJvdXNlbCgpXHJcbn0iLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgZ3NhcCBmcm9tICcuL21vZHVsZXMvZ3NhcCdcbmltcG9ydCBjb21tb24gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbidcbmltcG9ydCBzbGljayBmcm9tICcuL21vZHVsZXMvc2xpY2snXG5cbmZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJlbG9hZGVyJylcbiAgICBpZiAoIWxvYWRlcikgcmV0dXJuXG4gICAgY29uc3QgaGlkZGVuQ2xzID0gJ292ZXJmbG93LWhpZGRlbidcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKGhpZGRlbkNscylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJylcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkNscylcbiAgICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICcnXG4gICAgfSwgNDAwMCk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICBsb2FkZXIoKVxuICAgIGdzYXAoKTtcbiAgICBjb21tb24oKTtcbiAgICBzbGljaygpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Jhc2VfZW52XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Jhc2VfZW52XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbMzU4XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNzE2KSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiRHJhZ2dhYmxlIiwiTW90aW9uUGF0aFBsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwiaGVhZGVyIiwiY29udGFpbmVyIiwib2JqIiwib3ZlcmxheSIsImxvZ28iLCJtZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG8iLCJ3aWR0aCIsImR1cmF0aW9uIiwib3BhY2l0eSIsImludHJvU2VjdGlvbiIsImhlYWRpbmciLCJ0ZXh0IiwiZnJvbSIsInkiLCJhYm91dFNlY3Rpb24iLCJpbWFnZSIsInRpdGxlRGVjb3IiLCJjb250ZW50IiwidGwiLCJ0aW1lbGluZSIsImhlaWdodCIsIngiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwic3RhcnQiLCJhbmltYXRpb24iLCJjb250YWN0U2VjdGlvbiIsImVuZCIsInNlcnZpY2VzU2VjdGlvbiIsInRlYW1TZWN0aW9uRGVmYXVsdENvbnRlbnQiLCJ0ZWFtU2VjdGlvbiIsImxpc3QiLCJwb3J0Zm9saW9TZWN0aW9uIiwidmlkZW9TZWN0aW9uIiwicXVlc3Rpb25TZWN0aW9uIiwiZ3NhcEluaXQiLCJicmVha3BvaW50Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsaWdodGJveCIsImhlYWRlclRvZ2dsZXIiLCJib2R5IiwidG9nZ2xlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ2aWRlbyIsImJ1dHRvblBsYXkiLCJ2aWRlb1BsYXllciIsImFkZCIsInNldEF0dHJpYnV0ZSIsInBsYXkiLCJhY2NvcmRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlckNscyIsInRvZ2dsZXJCb2R5IiwiYWN0aXZlQ2xzIiwiZm9yRWFjaCIsImpRdWVyeSIsInNsaWRlVG9nZ2xlIiwicG9ydGZvbGlvRmlsdGVyIiwibGlua3MiLCJpdGVtcyIsImRhdGFmaWx0ZXIiLCJoaWRkZUNscyIsImFjdGl2ZUxpbmtDbHMiLCJsaW5rIiwidGFyZ2V0IiwibWV0aG9kV2l0aEFycmF5IiwiZmlsdGVyVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJpdGVtIiwiaXRlbVZhbHVlIiwicmVtb3ZlIiwiZWxlbXMiLCJtZXRob2QiLCJjbHMiLCJsaWdodGJveEluaXQiLCJvcHRpb24iLCJjb21tb24iLCJpbnRyb0Nhcm91c2VsIiwic2xpZGVyQ29udGFpbmVyIiwiJGNvbnRhaW5lciIsIiQiLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImFycm93cyIsImNzc0Vhc2UiLCJsb2FkZXIiLCJoaWRkZW5DbHMiLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwicmVhZHkiXSwic291cmNlUm9vdCI6IiJ9