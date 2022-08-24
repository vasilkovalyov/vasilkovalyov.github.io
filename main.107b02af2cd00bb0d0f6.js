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

function aboutImageCarousel() {
  var sliderContainer = '.js-about-images-carousel';
  var $container = document.querySelector(sliderContainer);
  if (!$container) return;
  $(sliderContainer).slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'linear',
    draggable: false
  });
}

/* harmony default export */ function modules_slick() {
  introCarousel();
  aboutImageCarousel();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNDQ1MDhhNjQ5YmMwNjdiMDEzOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQUEsa0RBQUEsQ0FBb0JDLGtDQUFwQixFQUFtQ0MsMEJBQW5DLEVBQThDQyx3Q0FBOUM7O0FBRUEsU0FBU0UsTUFBVCxHQUFrQjtBQUNkLE1BQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUNBLE1BQU1DLEdBQUcsR0FBRztBQUNSQyxJQUFBQSxPQUFPLFlBQUtGLFNBQUwsMEJBREM7QUFFUkcsSUFBQUEsSUFBSSxZQUFLSCxTQUFMLHVCQUZJO0FBR1JJLElBQUFBLElBQUksWUFBS0osU0FBTDtBQUhJLEdBQVo7QUFNQSxNQUFJLENBQUNLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qk4sU0FBdkIsQ0FBTCxFQUF3QztBQUV4Q04sRUFBQUEsMEJBQUEsQ0FBUU8sR0FBRyxDQUFDQyxPQUFaLEVBQXFCO0FBQ2pCTSxJQUFBQSxLQUFLLEVBQUUsTUFEVTtBQUVqQkMsSUFBQUEsUUFBUSxFQUFFO0FBRk8sR0FBckIsRUFHRyxDQUhIO0FBSUFmLEVBQUFBLDBCQUFBLENBQVFPLEdBQUcsQ0FBQ0UsSUFBWixFQUFrQjtBQUNkTyxJQUFBQSxPQUFPLEVBQUU7QUFESyxHQUFsQixFQUVHLENBRkg7QUFHQWhCLEVBQUFBLDBCQUFBLENBQVFPLEdBQUcsQ0FBQ0csSUFBWixFQUFrQjtBQUNkTSxJQUFBQSxPQUFPLEVBQUU7QUFESyxHQUFsQixFQUVHLEdBRkg7QUFHSDs7QUFFRCxTQUFTQyxZQUFULEdBQXdCO0FBQ3BCLE1BQU1YLFNBQVMsR0FBRyxxQkFBbEI7QUFDQSxNQUFJLENBQUNLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qk4sU0FBdkIsQ0FBTCxFQUF3QztBQUV4QyxNQUFNQyxHQUFHLEdBQUc7QUFDUlcsSUFBQUEsT0FBTyxZQUFLWixTQUFMLGlDQURDO0FBRVJhLElBQUFBLElBQUksWUFBS2IsU0FBTDtBQUZJLEdBQVo7QUFLQU4sRUFBQUEsMEJBQUEsQ0FBUU0sU0FBUixFQUFtQjtBQUNmVSxJQUFBQSxPQUFPLEVBQUUsQ0FETTtBQUVmRCxJQUFBQSxRQUFRLEVBQUU7QUFGSyxHQUFuQjtBQUlBZixFQUFBQSw4QkFBQSxDQUFVTyxHQUFHLENBQUNXLE9BQWQsRUFBdUI7QUFDbkJHLElBQUFBLENBQUMsRUFBRSxDQUFDO0FBRGUsR0FBdkI7QUFHQXJCLEVBQUFBLDhCQUFBLENBQVVPLEdBQUcsQ0FBQ1ksSUFBZCxFQUFvQjtBQUNoQkUsSUFBQUEsQ0FBQyxFQUFFO0FBRGEsR0FBcEIsRUFFRyxHQUZIO0FBR0g7O0FBRUQsU0FBU0MsWUFBVCxHQUF3QjtBQUNwQixNQUFNaEIsU0FBUyxHQUFHLHFCQUFsQjtBQUNBLE1BQUksQ0FBQ0ssUUFBUSxDQUFDQyxhQUFULENBQXVCTixTQUF2QixDQUFMLEVBQXdDO0FBRXhDLE1BQU1DLEdBQUcsR0FBRztBQUNSZ0IsSUFBQUEsS0FBSyxZQUFLakIsU0FBTCwrQkFERztBQUVSa0IsSUFBQUEsVUFBVSxZQUFLbEIsU0FBTCxxQ0FGRjtBQUdSbUIsSUFBQUEsT0FBTyxZQUFLbkIsU0FBTDtBQUhDLEdBQVo7QUFNQSxNQUFJb0IsRUFBRSxHQUFHMUIsc0NBQUEsR0FDUm9CLElBRFEsQ0FDSGIsR0FBRyxDQUFDZ0IsS0FERCxFQUNRO0FBQUVLLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBRFIsRUFDMEIsR0FEMUIsRUFFUlIsSUFGUSxDQUVIYixHQUFHLENBQUNpQixVQUZELEVBRWE7QUFBRUssSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYWIsSUFBQUEsT0FBTyxFQUFFO0FBQXRCLEdBRmIsRUFFeUMsR0FGekMsRUFHUkksSUFIUSxDQUdIYixHQUFHLENBQUNrQixPQUhELEVBR1U7QUFBRVQsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FIVixFQUc2QixHQUg3QixDQUFUO0FBS0FmLEVBQUFBLGdEQUFBLENBQXFCO0FBQ2pCOEIsSUFBQUEsT0FBTyxFQUFFekIsU0FEUTtBQUVqQjBCLElBQUFBLEtBQUssRUFBRSxZQUZVO0FBR2pCQyxJQUFBQSxTQUFTLEVBQUVQO0FBSE0sR0FBckI7QUFLSDs7QUFFRCxTQUFTUSxjQUFULEdBQTBCO0FBQ3RCLE1BQU01QixTQUFTLEdBQUcsdUJBQWxCO0FBQ0EsTUFBSSxDQUFDSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJOLFNBQXZCLENBQUwsRUFBd0M7QUFFeEMsTUFBTUMsR0FBRyxHQUFHO0FBQ1JpQixJQUFBQSxVQUFVLFlBQUtsQixTQUFMLHVDQURGO0FBRVJtQixJQUFBQSxPQUFPLFlBQUtuQixTQUFMLG1DQUZDO0FBR1JZLElBQUFBLE9BQU8sWUFBS1osU0FBTDtBQUhDLEdBQVo7QUFNQSxNQUFJb0IsRUFBRSxHQUFHMUIsc0NBQUEsR0FDUm9CLElBRFEsQ0FDSGIsR0FBRyxDQUFDaUIsVUFERCxFQUNhO0FBQUVLLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFiLElBQUFBLE9BQU8sRUFBRTtBQUF0QixHQURiLEVBQ3lDLEdBRHpDLEVBRVJJLElBRlEsQ0FFSGIsR0FBRyxDQUFDVyxPQUZELEVBRVU7QUFBRUcsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FGVixFQUV5QixHQUZ6QixFQUdSUixFQUhRLENBR0xOLEdBQUcsQ0FBQ2tCLE9BSEMsRUFHUTtBQUFFVCxJQUFBQSxPQUFPLEVBQUU7QUFBWCxHQUhSLEVBRzJCLEdBSDNCLENBQVQ7QUFLQWYsRUFBQUEsZ0RBQUEsQ0FBcUI7QUFDakI4QixJQUFBQSxPQUFPLEVBQUV6QixTQURRO0FBRWpCMEIsSUFBQUEsS0FBSyxFQUFFLFlBRlU7QUFHakJHLElBQUFBLEdBQUcsRUFBRSxTQUhZO0FBSWpCRixJQUFBQSxTQUFTLEVBQUNQO0FBSk8sR0FBckI7QUFNSDs7QUFFRCxTQUFTVSxlQUFULEdBQTJCO0FBQ3ZCLE1BQU05QixTQUFTLEdBQUdLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBbEI7QUFDQSxNQUFJLENBQUNOLFNBQUwsRUFBZ0I7QUFHaEIsTUFBSW9CLEVBQUUsR0FBRzFCLHNDQUFBLEdBQ1JvQixJQURRLENBQ0hkLFNBREcsRUFDUTtBQUFFZSxJQUFBQSxDQUFDLEVBQUUsS0FBTDtBQUFZTCxJQUFBQSxPQUFPLEVBQUU7QUFBckIsR0FEUixFQUNtQyxHQURuQyxDQUFUO0FBR0FmLEVBQUFBLGdEQUFBLENBQXFCO0FBQ2pCOEIsSUFBQUEsT0FBTyxFQUFFekIsU0FEUTtBQUVqQjBCLElBQUFBLEtBQUssRUFBRSxZQUZVO0FBR2pCRyxJQUFBQSxHQUFHLEVBQUUsU0FIWTtBQUlqQkYsSUFBQUEsU0FBUyxFQUFDUDtBQUpPLEdBQXJCO0FBTUg7O0FBRUQsU0FBU1cseUJBQVQsR0FBcUM7QUFDakMsTUFBTS9CLFNBQVMsR0FBRywrQkFBbEI7QUFDQSxNQUFJLENBQUNLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qk4sU0FBdkIsQ0FBTCxFQUF3QztBQUV4QyxNQUFNQyxHQUFHLEdBQUc7QUFDUlcsSUFBQUEsT0FBTyxZQUFLWixTQUFMLDJDQURDO0FBRVJhLElBQUFBLElBQUksWUFBS2IsU0FBTDtBQUZJLEdBQVo7QUFNQSxNQUFJb0IsRUFBRSxHQUFHMUIsc0NBQUEsR0FDUmEsRUFEUSxDQUNMTixHQUFHLENBQUNXLE9BREMsRUFDUTtBQUFFRyxJQUFBQSxDQUFDLEVBQUUsR0FBTDtBQUFXTCxJQUFBQSxPQUFPLEVBQUU7QUFBcEIsR0FEUixFQUNtQyxHQURuQyxFQUVSSCxFQUZRLENBRUxOLEdBQUcsQ0FBQ1ksSUFGQyxFQUVLO0FBQUVFLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVMLElBQUFBLE9BQU8sRUFBRTtBQUFuQixHQUZMLEVBRWdDLEdBRmhDLENBQVQ7QUFJQWYsRUFBQUEsZ0RBQUEsQ0FBcUI7QUFDakI4QixJQUFBQSxPQUFPLEVBQUV6QixTQURRO0FBRWpCMEIsSUFBQUEsS0FBSyxFQUFFLFlBRlU7QUFHakJHLElBQUFBLEdBQUcsRUFBRSxTQUhZO0FBSWpCRixJQUFBQSxTQUFTLEVBQUNQO0FBSk8sR0FBckI7QUFNSDs7QUFFRCxTQUFTWSxXQUFULEdBQXVCO0FBQ25CLE1BQU1oQyxTQUFTLEdBQUcsb0JBQWxCO0FBQ0EsTUFBSSxDQUFDSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJOLFNBQXZCLENBQUwsRUFBd0M7QUFFeEMsTUFBTUMsR0FBRyxHQUFHO0FBQ1JXLElBQUFBLE9BQU8sWUFBS1osU0FBTCxnQ0FEQztBQUVSaUMsSUFBQUEsSUFBSSxZQUFLakMsU0FBTDtBQUZJLEdBQVo7QUFLQSxNQUFJb0IsRUFBRSxHQUFHMUIsc0NBQUEsR0FDUmEsRUFEUSxDQUNMTixHQUFHLENBQUNXLE9BREMsRUFDUTtBQUFFRyxJQUFBQSxDQUFDLEVBQUUsR0FBTDtBQUFVTCxJQUFBQSxPQUFPLEVBQUU7QUFBbkIsR0FEUixFQUNrQyxHQURsQyxFQUVSSCxFQUZRLENBRUxOLEdBQUcsQ0FBQ2dDLElBRkMsRUFFSztBQUFFdkIsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FGTCxFQUV3QixHQUZ4QixDQUFUO0FBSUFmLEVBQUFBLGdEQUFBLENBQXFCO0FBQ2pCOEIsSUFBQUEsT0FBTyxFQUFFekIsU0FEUTtBQUVqQjBCLElBQUFBLEtBQUssRUFBRSxZQUZVO0FBR2pCRyxJQUFBQSxHQUFHLEVBQUUsWUFIWTtBQUlqQkYsSUFBQUEsU0FBUyxFQUFDUCxFQUpPLENBS2pCOztBQUxpQixHQUFyQjtBQU9IOztBQUVELFNBQVNjLGdCQUFULEdBQTRCO0FBQ3hCLE1BQU1sQyxTQUFTLEdBQUcseUJBQWxCO0FBQ0EsTUFBSSxDQUFDSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJOLFNBQXZCLENBQUwsRUFBd0M7QUFFeEMsTUFBSW9CLEVBQUUsR0FBRzFCLHNDQUFBLEdBQ1JhLEVBRFEsQ0FDTFAsU0FESyxFQUNNO0FBQUVlLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVMLElBQUFBLE9BQU8sRUFBRTtBQUFuQixHQUROLEVBQ2dDLEdBRGhDLENBQVQ7QUFHQWYsRUFBQUEsZ0RBQUEsQ0FBcUI7QUFDakI4QixJQUFBQSxPQUFPLEVBQUV6QixTQURRO0FBRWpCMEIsSUFBQUEsS0FBSyxFQUFFLFlBRlU7QUFHakJHLElBQUFBLEdBQUcsRUFBRSxZQUhZO0FBSWpCRixJQUFBQSxTQUFTLEVBQUNQO0FBSk8sR0FBckI7QUFNSDs7QUFFRCxTQUFTZSxZQUFULEdBQXdCO0FBQ3BCLE1BQU1uQyxTQUFTLEdBQUcsbUJBQWxCO0FBQ0EsTUFBSSxDQUFDSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJOLFNBQXZCLENBQUwsRUFBd0M7QUFFeEMsTUFBSW9CLEVBQUUsR0FBRzFCLHNDQUFBLEdBQ1JhLEVBRFEsQ0FDTFAsU0FESyxFQUNNO0FBQUVVLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBRE4sRUFDd0IsR0FEeEIsQ0FBVDtBQUdBZixFQUFBQSxnREFBQSxDQUFxQjtBQUNqQjhCLElBQUFBLE9BQU8sRUFBRXpCLFNBRFE7QUFFakIwQixJQUFBQSxLQUFLLEVBQUUsWUFGVTtBQUdqQkcsSUFBQUEsR0FBRyxFQUFFLFlBSFk7QUFJakJGLElBQUFBLFNBQVMsRUFBQ1A7QUFKTyxHQUFyQjtBQU1IOztBQUVELFNBQVNnQixlQUFULEdBQTJCO0FBQ3ZCLE1BQU1wQyxTQUFTLEdBQUcsd0JBQWxCO0FBQ0EsTUFBSSxDQUFDSyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJOLFNBQXZCLENBQUwsRUFBd0M7QUFFeEMsTUFBSW9CLEVBQUUsR0FBRzFCLHNDQUFBLEdBQ1JhLEVBRFEsQ0FDTFAsU0FESyxFQUNNO0FBQUVVLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBRE4sRUFDd0IsR0FEeEIsQ0FBVDtBQUdBZixFQUFBQSxnREFBQSxDQUFxQjtBQUNqQjhCLElBQUFBLE9BQU8sRUFBRXpCLFNBRFE7QUFFakIwQixJQUFBQSxLQUFLLEVBQUUsWUFGVTtBQUdqQkcsSUFBQUEsR0FBRyxFQUFFLFlBSFk7QUFJakJGLElBQUFBLFNBQVMsRUFBQ1A7QUFKTyxHQUFyQjtBQU1IOztBQUVjLFNBQVNpQixRQUFULEdBQW9CO0FBQy9CLE1BQU1DLFVBQVUsR0FBRyxJQUFuQjs7QUFFQSxNQUFJQyxNQUFNLENBQUNDLFVBQVAsdUJBQWlDRixVQUFqQyxVQUFrREcsT0FBdEQsRUFBK0Q7QUFDM0QxQyxJQUFBQSxNQUFNO0FBQ05ZLElBQUFBLFlBQVk7QUFDWkssSUFBQUEsWUFBWTtBQUNaWSxJQUFBQSxjQUFjO0FBQ2RFLElBQUFBLGVBQWU7QUFDZkUsSUFBQUEsV0FBVztBQUNYRCxJQUFBQSx5QkFBeUI7QUFDekJHLElBQUFBLGdCQUFnQjtBQUNoQkMsSUFBQUEsWUFBWTtBQUNaQyxJQUFBQSxlQUFlO0FBQ2xCO0FBQ0o7Ozs7OztBQ3JORDs7QUFFQSxTQUFTTyxhQUFULEdBQXlCO0FBQ3JCLE1BQU1DLElBQUksR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTXVDLE9BQU8sR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBaEI7QUFFQSxNQUFJLENBQUN1QyxPQUFMLEVBQWM7QUFFZEEsRUFBQUEsT0FBTyxDQUFDQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxDQUFWLEVBQWE7QUFDM0NBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBSixJQUFBQSxJQUFJLENBQUNLLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixZQUF0QjtBQUNILEdBSEQ7QUFJSDs7QUFFRCxTQUFTQyxLQUFULEdBQWlCO0FBQ2IsTUFBTW5ELFNBQVMsR0FBR0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUFsQjtBQUNBLE1BQUksQ0FBQ04sU0FBTCxFQUFnQjtBQUNoQixNQUFNb0QsVUFBVSxHQUFHcEQsU0FBUyxDQUFDTSxhQUFWLENBQXdCLGdCQUF4QixDQUFuQjtBQUNBLE1BQU0rQyxXQUFXLEdBQUdyRCxTQUFTLENBQUNNLGFBQVYsQ0FBd0IsV0FBeEIsQ0FBcEI7QUFFQThDLEVBQUFBLFVBQVUsQ0FBQ04sZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDSyxJQUFBQSxVQUFVLENBQUNILFNBQVgsQ0FBcUJLLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ0UsWUFBWixDQUF5QixVQUF6QixFQUFxQyxJQUFyQztBQUNBRixJQUFBQSxXQUFXLENBQUNHLElBQVo7QUFDSCxHQUpEO0FBS0g7O0FBRUQsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixNQUFNekQsU0FBUyxHQUFHSyxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixlQUExQixDQUFsQjtBQUNBLE1BQUksQ0FBQzFELFNBQUwsRUFBZ0I7QUFDaEIsTUFBTTJELFVBQVUsR0FBRyx1QkFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsb0JBQXBCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFFBQWxCO0FBRUE3RCxFQUFBQSxTQUFTLENBQUM4RCxPQUFWLENBQWtCLFVBQUNMLFNBQUQsRUFBZTtBQUM3QixRQUFNWixPQUFPLEdBQUdZLFNBQVMsQ0FBQ25ELGFBQVYsQ0FBd0JxRCxVQUF4QixDQUFoQjtBQUNBLFFBQU1mLElBQUksR0FBR2EsU0FBUyxDQUFDbkQsYUFBVixDQUF3QnNELFdBQXhCLENBQWI7QUFFQWYsSUFBQUEsT0FBTyxDQUFDQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3BDVyxNQUFBQSxTQUFTLENBQUNSLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCVyxTQUEzQjtBQUNBRSxNQUFBQSxNQUFNLENBQUNuQixJQUFELENBQU4sQ0FBYW9CLFdBQWI7QUFDSCxLQUhEO0FBSUgsR0FSRDtBQVNIOztBQUVELFNBQVNDLGVBQVQsR0FBMkI7QUFDdkIsTUFBTWpFLFNBQVMsR0FBR0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFsQjtBQUNBLE1BQUksQ0FBQ04sU0FBTCxFQUFnQjtBQUNoQixNQUFNa0UsS0FBSyxHQUFHbEUsU0FBUyxDQUFDMEQsZ0JBQVYsQ0FBMkIsaUJBQTNCLENBQWQ7QUFDQSxNQUFNUyxLQUFLLEdBQUduRSxTQUFTLENBQUMwRCxnQkFBVixDQUEyQixpQkFBM0IsQ0FBZDtBQUNBLE1BQU1VLFVBQVUsR0FBRyxhQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxRQUFqQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxRQUF0QjtBQUVBSixFQUFBQSxLQUFLLENBQUNKLE9BQU4sQ0FBYyxVQUFDUyxJQUFELEVBQVU7QUFDcEJBLElBQUFBLElBQUksQ0FBQ3pCLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNsQ0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTXdCLE1BQU0sR0FBR3pCLENBQUMsQ0FBQ3lCLE1BQWpCO0FBRUFDLE1BQUFBLGVBQWUsQ0FBQ1AsS0FBRCxFQUFRLFFBQVIsRUFBa0JJLGFBQWxCLENBQWY7QUFDQSxVQUFNSSxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0csWUFBUCxDQUFvQixNQUFwQixDQUFwQjtBQUNBSCxNQUFBQSxNQUFNLENBQUN2QixTQUFQLENBQWlCSyxHQUFqQixDQUFxQmdCLGFBQXJCO0FBRUFHLE1BQUFBLGVBQWUsQ0FBQ04sS0FBRCxFQUFRLEtBQVIsRUFBZUUsUUFBZixDQUFmO0FBRUEsVUFBSUssV0FBVyxLQUFLLEtBQXBCLEVBQTJCRCxlQUFlLENBQUNOLEtBQUQsRUFBUSxRQUFSLEVBQWtCRSxRQUFsQixDQUFmO0FBRTNCRixNQUFBQSxLQUFLLENBQUNMLE9BQU4sQ0FBYyxVQUFDYyxJQUFELEVBQVU7QUFDcEIsWUFBTUMsU0FBUyxHQUFHRCxJQUFJLENBQUNELFlBQUwsQ0FBa0JQLFVBQWxCLENBQWxCO0FBQ0EsWUFBR1MsU0FBUyxLQUFLSCxXQUFqQixFQUE4QkUsSUFBSSxDQUFDM0IsU0FBTCxDQUFlNkIsTUFBZixDQUFzQlQsUUFBdEI7QUFDakMsT0FIRDtBQUlILEtBaEJEO0FBaUJILEdBbEJEOztBQW9CQSxNQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNNLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsR0FBaEIsRUFBd0I7QUFDNUNGLElBQUFBLEtBQUssQ0FBQ2pCLE9BQU4sQ0FBYyxVQUFBYyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDM0IsU0FBTCxDQUFlK0IsTUFBZixFQUF1QkMsR0FBdkIsQ0FBSjtBQUFBLEtBQWxCO0FBQ0gsR0FGRDtBQUdIOztBQUVELFNBQVNDLFlBQVQsR0FBd0I7QUFDcEJ4QyxFQUFBQSx5QkFBQSxDQUFnQjtBQUNaLHNCQUFrQixHQUROO0FBRVosa0JBQWM7QUFGRixHQUFoQjtBQUlIOztBQUVjLFNBQVMwQyxNQUFULEdBQWtCO0FBQzdCekMsRUFBQUEsYUFBYTtBQUNiUSxFQUFBQSxLQUFLO0FBQ0xNLEVBQUFBLFNBQVM7QUFDVHlCLEVBQUFBLFlBQVk7QUFDWmpCLEVBQUFBLGVBQWU7QUFDbEI7Ozs7Ozs7QUM1RkQ7O0FBRUEsU0FBU29CLGFBQVQsR0FBeUI7QUFBQTs7QUFDckIsTUFBTUMsZUFBZSxHQUFHLG1CQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR2xGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QmdGLGVBQXZCLENBQW5CO0FBQ0EsTUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2pCQyxFQUFBQSxDQUFDLENBQUNGLGVBQUQsQ0FBRCxDQUFtQkcsS0FBbkI7QUFDSUMsSUFBQUEsSUFBSSxFQUFFLEtBRFY7QUFFSUMsSUFBQUEsUUFBUSxFQUFFLElBRmQ7QUFHSUMsSUFBQUEsS0FBSyxFQUFFLEdBSFg7QUFJSUMsSUFBQUEsSUFBSSxFQUFFLElBSlY7QUFLSUMsSUFBQUEsUUFBUSxFQUFFLElBTGQ7QUFNSUMsSUFBQUEsYUFBYSxFQUFFLElBTm5CO0FBT0lDLElBQUFBLFlBQVksRUFBRSxLQVBsQjtBQVFJQyxJQUFBQSxNQUFNLEVBQUcsS0FSYjtBQVNJQyxJQUFBQSxPQUFPLEVBQUU7QUFUYix1Q0FVVSxJQVZWLDBDQVdlLEtBWGYsMENBWWUsb0JBWmY7QUFlSDs7QUFFRCxTQUFTQyxrQkFBVCxHQUE4QjtBQUMxQixNQUFNYixlQUFlLEdBQUcsMkJBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHbEYsUUFBUSxDQUFDQyxhQUFULENBQXVCZ0YsZUFBdkIsQ0FBbkI7QUFDQSxNQUFJLENBQUNDLFVBQUwsRUFBaUI7QUFDakJDLEVBQUFBLENBQUMsQ0FBQ0YsZUFBRCxDQUFELENBQW1CRyxLQUFuQixDQUF5QjtBQUNyQkMsSUFBQUEsSUFBSSxFQUFFLEtBRGU7QUFFckJDLElBQUFBLFFBQVEsRUFBRSxJQUZXO0FBR3JCQyxJQUFBQSxLQUFLLEVBQUUsR0FIYztBQUlyQkMsSUFBQUEsSUFBSSxFQUFFLElBSmU7QUFLckJDLElBQUFBLFFBQVEsRUFBRSxJQUxXO0FBTXJCQyxJQUFBQSxhQUFhLEVBQUUsSUFOTTtBQU9yQkMsSUFBQUEsWUFBWSxFQUFFLEtBUE87QUFRckJDLElBQUFBLE1BQU0sRUFBRyxLQVJZO0FBU3JCQyxJQUFBQSxPQUFPLEVBQUUsUUFUWTtBQVVyQkUsSUFBQUEsU0FBUyxFQUFFO0FBVlUsR0FBekI7QUFhSDs7QUFFRCw2QkFBZSx5QkFBVztBQUN0QmYsRUFBQUEsYUFBYTtBQUNiYyxFQUFBQSxrQkFBa0I7QUFDckI7OztBQzdDRDtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxNQUFULEdBQWtCO0FBQ2QsTUFBTUEsTUFBTSxHQUFHaEcsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWY7QUFDQSxNQUFJLENBQUMrRixNQUFMLEVBQWE7QUFDYixNQUFNQyxTQUFTLEdBQUcsaUJBQWxCO0FBQ0EsTUFBTTFELElBQUksR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0FzQyxFQUFBQSxJQUFJLENBQUNLLFNBQUwsQ0FBZUssR0FBZixDQUFtQmdELFNBQW5CO0FBQ0FDLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2JGLElBQUFBLE1BQU0sQ0FBQ3BELFNBQVAsQ0FBaUJLLEdBQWpCLENBQXFCLFVBQXJCO0FBQ0FWLElBQUFBLElBQUksQ0FBQ0ssU0FBTCxDQUFlNkIsTUFBZixDQUFzQndCLFNBQXRCO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ0csU0FBUCxHQUFtQixFQUFuQjtBQUNILEdBSlMsRUFJUCxJQUpPLENBQVY7QUFLSDs7QUFFRGhCLE1BQUMsQ0FBQ25GLFFBQUQsQ0FBRCxDQUFZb0csS0FBWixDQUFrQixZQUFNO0FBQ3BCSixFQUFBQSxNQUFNO0FBQ04zRyxFQUFBQSxRQUFJO0FBQ0owRixFQUFBQSxNQUFNO0FBQ05LLEVBQUFBLGFBQUs7QUFDUixDQUxEOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tb2R1bGVzL2dzYXAuanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvLi9zcmMvanMvbW9kdWxlcy9zbGljay5qcyIsIndlYnBhY2s6Ly9iYXNlLWVudi8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZS1lbnYvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Jhc2UtZW52L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNlLWVudi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciwgRHJhZ2dhYmxlLCBNb3Rpb25QYXRoUGx1Z2luIH0gZnJvbSBcImdzYXAvYWxsXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIsIERyYWdnYWJsZSwgTW90aW9uUGF0aFBsdWdpbik7XHJcblxyXG5mdW5jdGlvbiBoZWFkZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmhlYWRlcic7XHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgb3ZlcmxheTogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItb3ZlcmxheWAsXHJcbiAgICAgICAgbG9nbzogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItbG9nb2AsXHJcbiAgICAgICAgbWVudTogYCR7Y29udGFpbmVyfSAuZ3NhcC1oZWFkZXItbWVudWAsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGdzYXAudG8ob2JqLm92ZXJsYXksIHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9LCAxKTtcclxuICAgIGdzYXAudG8ob2JqLmxvZ28sIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSwgMSk7XHJcbiAgICBnc2FwLnRvKG9iai5tZW51LCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sIDEuNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludHJvU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWludHJvJztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWludHJvLWhlYWRpbmdgLFxyXG4gICAgICAgIHRleHQ6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1pbnRyby10ZXh0YFxyXG4gICAgfVxyXG5cclxuICAgIGdzYXAudG8oY29udGFpbmVyLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgIH0pO1xyXG4gICAgZ3NhcC5mcm9tKG9iai5oZWFkaW5nLCB7XHJcbiAgICAgICAgeTogLTEwMFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLmZyb20ob2JqLnRleHQsIHtcclxuICAgICAgICB5OiAxMDBcclxuICAgIH0sIDAuNik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWFib3V0JztcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgaW1hZ2U6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1hYm91dC1pbWFnZWAsXHJcbiAgICAgICAgdGl0bGVEZWNvcjogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWFib3V0LXRpdGxlLWRlY29yYCxcclxuICAgICAgICBjb250ZW50OiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tYWJvdXQtY29udGVudGAsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmouaW1hZ2UsIHsgaGVpZ2h0OiBcIjBcIiwgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLnRpdGxlRGVjb3IsIHsgeDogXCItMjAwXCIsIG9wYWNpdHk6IDAsIH0sIDAuNilcclxuICAgIC5mcm9tKG9iai5jb250ZW50LCB7IG9wYWNpdHk6IFwiMFwiLCB9LCAwLjkpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246IHRsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC1zZWN0aW9uLWNvbnRhY3QnO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICB0aXRsZURlY29yOiBgJHtjb250YWluZXJ9IC5nc2FwLXNlY3Rpb24tY29udGFjdC10aXRsZS1kZWNvcmAsXHJcbiAgICAgICAgY29udGVudDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtY29udGVudGAsXHJcbiAgICAgICAgaGVhZGluZzogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWNvbnRhY3QtaGVhZGluZ2AsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAuZnJvbShvYmoudGl0bGVEZWNvciwgeyB4OiBcIi0xMDBcIiwgb3BhY2l0eTogMCwgfSwgMC4zKVxyXG4gICAgLmZyb20ob2JqLmhlYWRpbmcsIHsgeTogXCItMTAwXCIgfSwgMC42KVxyXG4gICAgLnRvKG9iai5jb250ZW50LCB7IG9wYWNpdHk6IFwiMVwiLCB9LCAwLjkpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2VzU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nc2FwLXNlY3Rpb24tc2VydmljZXMnKVxyXG4gICAgaWYgKCFjb250YWluZXIpIHJldHVyblxyXG5cclxuXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC5mcm9tKGNvbnRhaW5lciwgeyB5OiBcIjEwMFwiLCBvcGFjaXR5OiAxLCB9LCAwLjMpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlYW1TZWN0aW9uRGVmYXVsdENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1kZWZhdWx0LWNvbnRlbnQnXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcblxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZ2AsXHJcbiAgICAgICAgdGV4dDogYCR7Y29udGFpbmVyfSAuZ3NhcC1zZWN0aW9uLWRlZmF1bHQtY29udGVudC10ZXh0YCxcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAudG8ob2JqLmhlYWRpbmcsIHsgeTogXCIwXCIgLCBvcGFjaXR5OiBcIjFcIix9LCAwLjMpXHJcbiAgICAudG8ob2JqLnRleHQsIHsgeTogXCIwXCIsIG9wYWNpdHk6IFwiMVwiLCB9LCAwLjUpXHJcbiAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIHRvcFwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlYW1TZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gJy5nc2FwLXNlY3Rpb24tdGVhbSdcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuICAgIFxyXG4gICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgIGhlYWRpbmc6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi10ZWFtLWhlYWRpbmdgLFxyXG4gICAgICAgIGxpc3Q6IGAke2NvbnRhaW5lcn0gLmdzYXAtc2VjdGlvbi10ZWFtLWxpc3RgLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKClcclxuICAgIC50byhvYmouaGVhZGluZywgeyB5OiBcIjBcIiwgb3BhY2l0eTogXCIxXCIgfSwgMC4xKVxyXG4gICAgLnRvKG9iai5saXN0LCB7IG9wYWNpdHk6IFwiMVwiLCB9LCAwLjYpXHJcbiAgICBcclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIsXHJcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGVuZDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOnRsLFxyXG4gICAgICAgIC8vIG1hcmtlcnM6IHRydWVcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcnRmb2xpb1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1wb3J0Zm9saW8nXHJcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSkgcmV0dXJuXHJcbiAgICBcclxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGNvbnRhaW5lciwgeyB5OiBcIjBcIiwgb3BhY2l0eTogXCIxXCIgfSwgMC4xKVxyXG4gICAgXHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogY29udGFpbmVyLFxyXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBlbmQ6IFwidG9wIGJvdHRvbVwiLFxyXG4gICAgICAgIGFuaW1hdGlvbjp0bCxcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpZGVvU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9ICcuZ3NhcC12aWRlby1ibG9jaydcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuICAgIFxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAudG8oY29udGFpbmVyLCB7IG9wYWNpdHk6IFwiMVwiIH0sIDAuMSlcclxuICAgIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVzdGlvblNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSAnLmdzYXAtc2VjdGlvbi1xdWVzdGlvbidcclxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSByZXR1cm5cclxuICAgIFxyXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgICAudG8oY29udGFpbmVyLCB7IG9wYWNpdHk6IFwiMVwiIH0sIDAuMSlcclxuICAgIFxyXG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lcixcclxuICAgICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXHJcbiAgICAgICAgZW5kOiBcInRvcCBib3R0b21cIixcclxuICAgICAgICBhbmltYXRpb246dGwsXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnc2FwSW5pdCgpIHtcclxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSAxMDI0O1xyXG5cclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHticmVha3BvaW50fXB4KWApLm1hdGNoZXMpIHtcclxuICAgICAgICBoZWFkZXIoKTtcclxuICAgICAgICBpbnRyb1NlY3Rpb24oKTtcclxuICAgICAgICBhYm91dFNlY3Rpb24oKTtcclxuICAgICAgICBjb250YWN0U2VjdGlvbigpO1xyXG4gICAgICAgIHNlcnZpY2VzU2VjdGlvbigpO1xyXG4gICAgICAgIHRlYW1TZWN0aW9uKCk7XHJcbiAgICAgICAgdGVhbVNlY3Rpb25EZWZhdWx0Q29udGVudCgpO1xyXG4gICAgICAgIHBvcnRmb2xpb1NlY3Rpb24oKTtcclxuICAgICAgICB2aWRlb1NlY3Rpb24oKTtcclxuICAgICAgICBxdWVzdGlvblNlY3Rpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IGxpZ2h0Ym94IGZyb20gXCJsaWdodGJveDJcIjtcclxuXHJcbmZ1bmN0aW9uIGhlYWRlclRvZ2dsZXIoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3QgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgLm5hdmJhci10b2dnbGVyJyk7XHJcbiAgICBcclxuICAgIGlmICghdG9nZ2xlcikgcmV0dXJuXHJcblxyXG4gICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpZGVvKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXZpZGVvLWNvbnRhaW5lcicpXHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICBjb25zdCBidXR0b25QbGF5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy12aWRlby1wbGF5JylcclxuICAgIGNvbnN0IHZpZGVvUGxheWVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy12aWRlbycpXHJcblxyXG4gICAgYnV0dG9uUGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uUGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICAgIHZpZGVvUGxheWVyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCB0cnVlKVxyXG4gICAgICAgIHZpZGVvUGxheWVyLnBsYXkoKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWNjb3JkaW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjY29yZGlvbicpXHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICBjb25zdCB0b2dnbGVyQ2xzID0gJy5qcy1hY2NvcmRpb24tdG9nZ2xlcidcclxuICAgIGNvbnN0IHRvZ2dsZXJCb2R5ID0gJy5qcy1hY2NvcmRpb24tYm9keSdcclxuICAgIGNvbnN0IGFjdGl2ZUNscyA9ICdhY3RpdmUnXHJcblxyXG4gICAgY29udGFpbmVyLmZvckVhY2goKGFjY29yZGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZXIgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0b2dnbGVyQ2xzKVxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3Rvcih0b2dnbGVyQm9keSlcclxuXHJcbiAgICAgICAgdG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYWNjb3JkaW9uLmNsYXNzTGlzdC50b2dnbGUoYWN0aXZlQ2xzKVxyXG4gICAgICAgICAgICBqUXVlcnkoYm9keSkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3J0Zm9saW9GaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZmlsdGVyLWNvbnRhaW5lcicpXHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICBjb25zdCBsaW5rcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZmlsdGVyLWxpbmsnKVxyXG4gICAgY29uc3QgaXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWZpbHRlci1pdGVtJylcclxuICAgIGNvbnN0IGRhdGFmaWx0ZXIgPSAnZGF0YS1maWx0ZXInXHJcbiAgICBjb25zdCBoaWRkZUNscyA9ICdoaWRkZW4nXHJcbiAgICBjb25zdCBhY3RpdmVMaW5rQ2xzID0gJ2FjdGl2ZSdcclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZFdpdGhBcnJheShsaW5rcywgJ3JlbW92ZScsIGFjdGl2ZUxpbmtDbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpXHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUxpbmtDbHMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXRob2RXaXRoQXJyYXkoaXRlbXMsICdhZGQnLCBoaWRkZUNscylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJWYWx1ZSA9PT0gJ2FsbCcpIG1ldGhvZFdpdGhBcnJheShpdGVtcywgJ3JlbW92ZScsIGhpZGRlQ2xzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoZGF0YWZpbHRlcilcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW1WYWx1ZSA9PT0gZmlsdGVyVmFsdWUpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShoaWRkZUNscylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBtZXRob2RXaXRoQXJyYXkgPSAoZWxlbXMsIG1ldGhvZCwgY2xzKSA9PiB7XHJcbiAgICAgICAgZWxlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0W21ldGhvZF0oY2xzKSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlnaHRib3hJbml0KCkge1xyXG4gICAgbGlnaHRib3gub3B0aW9uKHtcclxuICAgICAgICAncmVzaXplRHVyYXRpb24nOiAyMDAsXHJcbiAgICAgICAgJ3dyYXBBcm91bmQnOiB0cnVlXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21tb24oKSB7XHJcbiAgICBoZWFkZXJUb2dnbGVyKCk7XHJcbiAgICB2aWRlbygpO1xyXG4gICAgYWNjb3JkaW9uKCk7XHJcbiAgICBsaWdodGJveEluaXQoKTtcclxuICAgIHBvcnRmb2xpb0ZpbHRlcigpO1xyXG59XHJcbiIsImltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xyXG5cclxuZnVuY3Rpb24gaW50cm9DYXJvdXNlbCgpIHtcclxuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9ICcuanMtaG9tZS1jYXJvdXNlbCc7XHJcbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDb250YWluZXIpO1xyXG4gICAgaWYgKCEkY29udGFpbmVyKSByZXR1cm5cclxuICAgICQoc2xpZGVyQ29udGFpbmVyKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDI1MDAsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBhcnJvd3MgOiBmYWxzZSxcclxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZG90c0NsYXNzOiAnaG9tZS1jYXJvdXNlbC1kb3RzJ1xyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRJbWFnZUNhcm91c2VsKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gJy5qcy1hYm91dC1pbWFnZXMtY2Fyb3VzZWwnO1xyXG4gICAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyQ29udGFpbmVyKTtcclxuICAgIGlmICghJGNvbnRhaW5lcikgcmV0dXJuXHJcbiAgICAkKHNsaWRlckNvbnRhaW5lcikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiAxNTAwLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzIDogZmFsc2UsXHJcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgaW50cm9DYXJvdXNlbCgpO1xyXG4gICAgYWJvdXRJbWFnZUNhcm91c2VsKCk7XHJcbn0iLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJ1xyXG5cclxuaW1wb3J0IGdzYXAgZnJvbSAnLi9tb2R1bGVzL2dzYXAnXHJcbmltcG9ydCBjb21tb24gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbidcclxuaW1wb3J0IHNsaWNrIGZyb20gJy4vbW9kdWxlcy9zbGljaydcclxuXHJcbmZ1bmN0aW9uIGxvYWRlcigpIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmVsb2FkZXInKVxyXG4gICAgaWYgKCFsb2FkZXIpIHJldHVyblxyXG4gICAgY29uc3QgaGlkZGVuQ2xzID0gJ292ZXJmbG93LWhpZGRlbidcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChoaWRkZW5DbHMpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKVxyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5DbHMpXHJcbiAgICAgICAgbG9hZGVyLmlubmVySFRNTCA9ICcnXHJcbiAgICB9LCA0MDAwKTtcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgbG9hZGVyKClcclxuICAgIGdzYXAoKTtcclxuICAgIGNvbW1vbigpO1xyXG4gICAgc2xpY2soKTtcclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYmFzZV9lbnZcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmFzZV9lbnZcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFszNThdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3MTYpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJEcmFnZ2FibGUiLCJNb3Rpb25QYXRoUGx1Z2luIiwicmVnaXN0ZXJQbHVnaW4iLCJoZWFkZXIiLCJjb250YWluZXIiLCJvYmoiLCJvdmVybGF5IiwibG9nbyIsIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0byIsIndpZHRoIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwiaW50cm9TZWN0aW9uIiwiaGVhZGluZyIsInRleHQiLCJmcm9tIiwieSIsImFib3V0U2VjdGlvbiIsImltYWdlIiwidGl0bGVEZWNvciIsImNvbnRlbnQiLCJ0bCIsInRpbWVsaW5lIiwiaGVpZ2h0IiwieCIsImNyZWF0ZSIsInRyaWdnZXIiLCJzdGFydCIsImFuaW1hdGlvbiIsImNvbnRhY3RTZWN0aW9uIiwiZW5kIiwic2VydmljZXNTZWN0aW9uIiwidGVhbVNlY3Rpb25EZWZhdWx0Q29udGVudCIsInRlYW1TZWN0aW9uIiwibGlzdCIsInBvcnRmb2xpb1NlY3Rpb24iLCJ2aWRlb1NlY3Rpb24iLCJxdWVzdGlvblNlY3Rpb24iLCJnc2FwSW5pdCIsImJyZWFrcG9pbnQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImxpZ2h0Ym94IiwiaGVhZGVyVG9nZ2xlciIsImJvZHkiLCJ0b2dnbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInZpZGVvIiwiYnV0dG9uUGxheSIsInZpZGVvUGxheWVyIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicGxheSIsImFjY29yZGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGVyQ2xzIiwidG9nZ2xlckJvZHkiLCJhY3RpdmVDbHMiLCJmb3JFYWNoIiwialF1ZXJ5Iiwic2xpZGVUb2dnbGUiLCJwb3J0Zm9saW9GaWx0ZXIiLCJsaW5rcyIsIml0ZW1zIiwiZGF0YWZpbHRlciIsImhpZGRlQ2xzIiwiYWN0aXZlTGlua0NscyIsImxpbmsiLCJ0YXJnZXQiLCJtZXRob2RXaXRoQXJyYXkiLCJmaWx0ZXJWYWx1ZSIsImdldEF0dHJpYnV0ZSIsIml0ZW0iLCJpdGVtVmFsdWUiLCJyZW1vdmUiLCJlbGVtcyIsIm1ldGhvZCIsImNscyIsImxpZ2h0Ym94SW5pdCIsIm9wdGlvbiIsImNvbW1vbiIsImludHJvQ2Fyb3VzZWwiLCJzbGlkZXJDb250YWluZXIiLCIkY29udGFpbmVyIiwiJCIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiY3NzRWFzZSIsImFib3V0SW1hZ2VDYXJvdXNlbCIsImRyYWdnYWJsZSIsImxvYWRlciIsImhpZGRlbkNscyIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJyZWFkeSJdLCJzb3VyY2VSb290IjoiIn0=