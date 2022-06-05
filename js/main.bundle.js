/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ (() => {

/*

  OKZoom by OKFocus v1.2
  http://okfoc.us // @okfocus
  Copyright 2012 OKFocus
  Licensed under the MIT License

*/
$(function (a) {
  var b = function (c) {
    c = c.toLowerCase();
    var d = /(chrome)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || c.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [],
        e = {
      browser: d[1] || "",
      version: d[2] || "0"
    };
    return b = {}, e.browser && (b[e.browser] = !0, b.version = e.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), window.$ && (a.browser = b), b;
  }(navigator.userAgent),
      c = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i),
      d = navigator.userAgent.match(/iPad/i),
      e = navigator.userAgent.match(/Android/i),
      f = c || d || e,
      g = b.safari ? "WebkitTransition" : "transition",
      h = b.safari ? "WebkitTransform" : "transform",
      i = b.safari ? "-webkit-transform" : "transform",
      j = b.safari ? "WebkitTransformOrigin" : "transformOrigin";

  a.fn.okzoom = function (b) {
    return b = a.extend({}, a.fn.okzoom.defaults, b), this.each(function () {
      var c = {},
          d = this;
      c.options = b, c.$el = a(d), c.el = d, c.listener = document.createElement("div"), c.$listener = a(c.listener).addClass("ok-listener").css({
        position: "absolute",
        zIndex: 1e4
      }), a("body").append(c.$listener);
      var e = document.createElement("div");

      if (e.id = "ok-loupe", e.style.position = "absolute", e.style.backgroundRepeat = "no-repeat", e.style.pointerEvents = "none", e.style.opacity = 0, e.style.zIndex = 7879, a("body").append(e), c.loupe = e, c.$el.data("okzoom", c), c.options = b, f ? (c.$el.bind("touchstart", function (b) {
        return function (c) {
          console.log("TS", c), c.preventDefault(), a.fn.okzoom.build(b, c.originalEvent.touches[0]);
        };
      }(c)), c.$el.bind("touchmove", function (b) {
        return function (c) {
          console.log("TM"), c.preventDefault(), a.fn.okzoom.mousemove(b, c.originalEvent.touches[0]);
        };
      }(c)), c.$el.bind("touchend", function (b) {
        return function (c) {
          console.log("TE"), c.preventDefault(), a.fn.okzoom.mouseout(b, c);
        };
      }(c))) : (a(c.el).bind("mouseover", function (b) {
        return function (c) {
          a.fn.okzoom.build(b, c);
        };
      }(c)), c.$listener.bind("mousemove", function (b) {
        return function (c) {
          a.fn.okzoom.mousemove(b, c);
        };
      }(c)), c.$listener.bind("mouseout", function (b) {
        return function (c) {
          a.fn.okzoom.mouseout(b, c);
        };
      }(c))), c.options.height = c.options.height || c.options.width, c.image_from_data = c.$el.data("okimage"), c.has_data_image = "undefined" != typeof c.image_from_data, c.timeout = null, c.has_data_image && (c.img = new Image(), c.img.src = c.image_from_data), c.msie = -1, "Microsoft Internet Explorer" == navigator.appName) {
        var g = navigator.userAgent,
            h = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        null != h.exec(g) && (c.msie = parseFloat(RegExp.$1));
      }
    });
  }, a.fn.okzoom.defaults = {
    width: 150,
    height: null,
    scaleWidth: null,
    round: !0,
    background: "#fff",
    backgroundRepeat: "no-repeat",
    shadow: "0 0 5px #000",
    inset: 0,
    border: 0,
    transform: f ? ["scale(0)", "scale(1)"] : null,
    transformOrigin: f ? "50% 100%" : "50% 50%",
    transitionTime: 200,
    transitionTimingFunction: "cubic-bezier(0,0,0,1)"
  }, a.fn.okzoom.build = function (b, c) {
    if (b.has_data_image ? b.image_from_data != b.$el.attr("data-okimage") && (b.image_from_data = b.$el.attr("data-okimage"), a(b.img).remove(), b.img = new Image(), b.img.src = b.image_from_data) : b.img = b.el, b.msie > -1 && b.msie < 9 && !b.img.naturalized) {
      var d = function d(a) {
        a = a || this;
        var b = new Image();
        b.el = a, b.src = a.src, a.naturalWidth = b.width, a.naturalHeight = b.height, a.naturalized = !0;
      };

      if (!b.img.complete) return;
      d(b.img);
    }

    b.offset = b.$el.offset(), b.width = b.$el.width(), b.height = b.$el.height(), b.$listener.css({
      display: "block",
      width: b.$el.outerWidth(),
      height: b.$el.outerHeight(),
      top: b.$el.offset().top,
      left: b.$el.offset().left
    }), b.options.scaleWidth ? (b.naturalWidth = b.options.scaleWidth, b.naturalHeight = Math.round(b.img.naturalHeight * b.options.scaleWidth / b.img.naturalWidth)) : (b.naturalWidth = b.img.naturalWidth, b.naturalHeight = b.img.naturalHeight), b.widthRatio = b.naturalWidth / b.width, b.heightRatio = b.naturalHeight / b.height, b.loupe.style.width = b.options.width + "px", b.loupe.style.height = b.options.height + "px", b.loupe.style.border = b.options.border, b.loupe.style.background = b.options.background + " url(" + b.img.src + ")", b.loupe.style.backgroundRepeat = b.options.backgroundRepeat, b.loupe.style.backgroundSize = b.options.scaleWidth ? b.naturalWidth + "px " + b.naturalHeight + "px" : "auto", b.loupe.style.borderRadius = b.loupe.style.MozBorderRadius = b.loupe.style.WebkitBorderRadius = b.options.round ? "50%" : 0, b.loupe.style.boxShadow = b.options.shadow, b.loupe.style.opacity = 0, b.options.transform && (b.loupe.style[h] = b.options.transform[0], b.loupe.style[j] = b.options.transformOrigin, b.loupe.style[g] = i + " " + b.options.transitionTime), b.initialized = !0, a.fn.okzoom.mousemove(b, c);
  }, a.fn.okzoom.mousemove = function (a, b) {
    if (a.initialized) {
      var c = a.options.width / 2,
          d = a.options.height / 2,
          e = f ? a.options.height : d,
          j = "undefined" != typeof b.pageX ? b.pageX : b.clientX + document.documentElement.scrollLeft,
          k = "undefined" != typeof b.pageY ? b.pageY : b.clientY + document.documentElement.scrollTop,
          l = -1 * Math.floor((j - a.offset.left) * a.widthRatio - c),
          m = -1 * Math.floor((k - a.offset.top) * a.heightRatio - d);
      document.body.style.cursor = "none", a.loupe.style.left = j - c + "px", a.loupe.style.top = k - e + "px", a.loupe.style.backgroundPosition = l + "px " + m + "px", a.loupe.style.opacity = 1, a.options.transform && (a.loupe.style[h] = a.options.transform[1], a.loupe.style[h] = a.options.transform[1], a.loupe.style[g] = i + " " + a.options.transitionTime + "ms " + a.options.transitionTimingFunction), clearTimeout(a.timeout);
    }
  }, a.fn.okzoom.mouseout = function (a) {
    a.options.transform ? (a.loupe.style[h] = a.options.transform[0], a.timeout = setTimeout(function () {
      a.loupe.style.opacity = 0;
    }, a.options.transitionTime)) : a.loupe.style.opacity = 0, a.loupe.style.background = "none", a.listener.style.display = "none", document.body.style.cursor = "auto";
  };
});

/***/ }),
/* 3 */
/***/ (() => {

/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function ($) {
  var defaults = {
    url: false,
    callback: false,
    target: false,
    duration: 120,
    on: 'mouseover',
    // other options: grab, click, toggle
    touch: true,
    // enables a touch fallback
    onZoomIn: false,
    onZoomOut: false,
    magnify: 1
  }; // Core Zoom Logic, independent of event listeners.

  $.zoom = function (target, source, img, magnify) {
    var targetHeight,
        targetWidth,
        sourceHeight,
        sourceWidth,
        xRatio,
        yRatio,
        offset,
        $target = $(target),
        position = $target.css('position'),
        $source = $(source); // The parent element needs positioning so that the zoomed element can be correctly positioned within.

    target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
    target.style.overflow = 'hidden';
    img.style.width = img.style.height = '';
    $(img).addClass('zoomImg').css({
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      width: img.width * magnify,
      height: img.height * magnify,
      border: 'none',
      maxWidth: 'none',
      maxHeight: 'none'
    }).appendTo(target);
    return {
      init: function () {
        targetWidth = $target.outerWidth();
        targetHeight = $target.outerHeight();

        if (source === target) {
          sourceWidth = targetWidth;
          sourceHeight = targetHeight;
        } else {
          sourceWidth = $source.outerWidth();
          sourceHeight = $source.outerHeight();
        }

        xRatio = (img.width - targetWidth) / sourceWidth;
        yRatio = (img.height - targetHeight) / sourceHeight;
        offset = $source.offset();
      },
      move: function (e) {
        var left = e.pageX - offset.left,
            top = e.pageY - offset.top;
        top = Math.max(Math.min(top, sourceHeight), 0);
        left = Math.max(Math.min(left, sourceWidth), 0);
        img.style.left = left * -xRatio + 'px';
        img.style.top = top * -yRatio + 'px';
      }
    };
  };

  $.fn.zoom = function (options) {
    return this.each(function () {
      var settings = $.extend({}, defaults, options || {}),
          //target will display the zoomed image
      target = settings.target && $(settings.target)[0] || this,
          //source will provide zoom location info (thumbnail)
      source = this,
          $source = $(source),
          img = document.createElement('img'),
          $img = $(img),
          mousemove = 'mousemove.zoom',
          clicked = false,
          touched = false; // If a url wasn't specified, look for an image element.

      if (!settings.url) {
        var srcElement = source.querySelector('img');

        if (srcElement) {
          settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
        }

        if (!settings.url) {
          return;
        }
      }

      $source.one('zoom.destroy', function (position, overflow) {
        $source.off(".zoom");
        target.style.position = position;
        target.style.overflow = overflow;
        img.onload = null;
        $img.remove();
      }.bind(this, target.style.position, target.style.overflow));

      img.onload = function () {
        var zoom = $.zoom(target, source, img, settings.magnify);

        function start(e) {
          zoom.init();
          zoom.move(e); // Skip the fade-in for IE8 and lower since it chokes on fading-in
          // and changing position based on mousemovement at the same time.

          $img.stop().fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
        }

        function stop() {
          $img.stop().fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
        } // Mouse events


        if (settings.on === 'grab') {
          $source.on('mousedown.zoom', function (e) {
            if (e.which === 1) {
              $(document).one('mouseup.zoom', function () {
                stop();
                $(document).off(mousemove, zoom.move);
              });
              start(e);
              $(document).on(mousemove, zoom.move);
              e.preventDefault();
            }
          });
        } else if (settings.on === 'click') {
          $source.on('click.zoom', function (e) {
            if (clicked) {
              // bubble the event up to the document to trigger the unbind.
              return;
            } else {
              clicked = true;
              start(e);
              $(document).on(mousemove, zoom.move);
              $(document).one('click.zoom', function () {
                stop();
                clicked = false;
                $(document).off(mousemove, zoom.move);
              });
              return false;
            }
          });
        } else if (settings.on === 'toggle') {
          $source.on('click.zoom', function (e) {
            if (clicked) {
              stop();
            } else {
              start(e);
            }

            clicked = !clicked;
          });
        } else if (settings.on === 'mouseover') {
          zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

          $source.on('mouseenter.zoom', start).on('mouseleave.zoom', stop).on(mousemove, zoom.move);
        } // Touch fallback


        if (settings.touch) {
          $source.on('touchstart.zoom', function (e) {
            e.preventDefault();

            if (touched) {
              touched = false;
              stop();
            } else {
              touched = true;
              start(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]);
            }
          }).on('touchmove.zoom', function (e) {
            e.preventDefault();
            zoom.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]);
          }).on('touchend.zoom', function (e) {
            e.preventDefault();

            if (touched) {
              touched = false;
              stop();
            }
          });
        }

        if ($.isFunction(settings.callback)) {
          settings.callback.call(img);
        }
      };

      img.setAttribute('role', 'presentation');
      img.alt = '';
      img.src = settings.url;
    });
  };

  $.fn.zoom.defaults = defaults;
})(window.jQuery);

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _okzoom_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _okzoom_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okzoom_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var jquery_zoom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_zoom__WEBPACK_IMPORTED_MODULE_2__);



$(document).ready(function () {
  $('#burger').click(function (e) {
    $('.mobile-nav__dropdown').toggleClass('mobile-nav__dropdown_show');
    $('.mobile-nav__burger_open').toggleClass('mobile-nav__burger_open-disactive');
    $('.mobile-nav__burger_close').toggleClass('mobile-nav__burger_close-disactive');
  }); // if (window.innerWidth > 1000) {
  //   $('.catalog__item').okzoom({
  //     scaleWidth: 1000,
  //     width: 250,
  //     height: 250,
  //     round: false,
  //     background: "#fff",
  //     backgroundRepeat: "no-repeat",
  //     shadow: "0 0 3px #000",
  //     border: "1px solid black"
  //   });
  // }

  var show = false;

  var init = function init() {
    $('.zm').zoom({
      magnify: 1.5
    });
  };

  $('.zm').click(function () {
    if (!show) {
      show = true;
      init();
    } else {
      show = false;
      $('.zm').trigger('zoom.destroy');
    }
  }); //   $('#example').zoom(); // add zoom
  // $('#example').trigger('zoom.destroy'); /
});
})();

/******/ })()
;