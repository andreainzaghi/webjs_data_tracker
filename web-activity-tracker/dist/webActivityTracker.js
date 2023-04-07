!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.WebActivityTracker = e())
    : (t.WebActivityTracker = e());
})(self, () =>
  (() => {
    "use strict";
    var t = {
        d: (e, n) => {
          for (var r in n)
            t.o(n, r) &&
              !t.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
      },
      e = {};
    function n(t) {
      return (
        (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        n(t)
      );
    }
    function r(t, e) {
      for (var r = 0; r < e.length; r++) {
        var o = e[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (i = (function (t, e) {
              if ("object" !== n(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var o = r.call(t, "string");
                if ("object" !== n(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(o.key)),
            "symbol" === n(i) ? i : String(i)),
            o
          );
      }
      var i;
    }
    t.r(e), t.d(e, { default: () => _ });
    const o = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.clickEvents = []),
          (this.handleClick = this.handleClick.bind(this));
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "init",
            value: function () {
              document.addEventListener("click", this.handleClick);
            },
          },
          {
            key: "destroy",
            value: function () {
              document.removeEventListener("click", this.handleClick);
            },
          },
          {
            key: "handleClick",
            value: function (t) {
              var e = t.target,
                n = t.clientX,
                r = t.clientY,
                o = t.timeStamp,
                i = {
                  elementType: e.tagName,
                  elementId: e.id,
                  elementClass: e.className,
                  x: n,
                  y: r,
                  timeStamp: o,
                };
              this.clickEvents.push(i);
            },
          },
          {
            key: "getClickData",
            value: function () {
              return this.clickEvents;
            },
          },
        ]) && r(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function i(t) {
      return (
        (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        i(t)
      );
    }
    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== i(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== i(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === i(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const c = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.scrollData = []),
          (this.lastScrollPosition = 0),
          (this.scrollThreshold = 50);
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "startTracking",
            value: function () {
              window.addEventListener("scroll", this.handleScroll.bind(this));
            },
          },
          {
            key: "stopTracking",
            value: function () {
              window.removeEventListener(
                "scroll",
                this.handleScroll.bind(this)
              );
            },
          },
          {
            key: "handleScroll",
            value: function () {
              var t = window.pageYOffset || document.documentElement.scrollTop,
                e = this.getScrollDirection(t);
              if (
                Math.abs(t - this.lastScrollPosition) >= this.scrollThreshold
              ) {
                var n = { position: t, direction: e, timestamp: new Date() };
                this.scrollData.push(n), (this.lastScrollPosition = t);
              }
            },
          },
          {
            key: "getScrollDirection",
            value: function (t) {
              return t >= this.lastScrollPosition ? "down" : "up";
            },
          },
          {
            key: "getScrollData",
            value: function () {
              return this.scrollData;
            },
          },
        ]) && a(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function u(t) {
      return (
        (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        u(t)
      );
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== u(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== u(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === u(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const s = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.startTime = null),
          (this.endTime = null);
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "startTracking",
            value: function () {
              this.startTime = new Date();
            },
          },
          {
            key: "stopTracking",
            value: function () {
              this.endTime = new Date();
            },
          },
          {
            key: "getVisitDuration",
            value: function () {
              if (!this.startTime || !this.endTime)
                throw new Error(
                  "Visit duration tracking not started or not stopped"
                );
              return this.endTime - this.startTime;
            },
          },
          {
            key: "resetTracking",
            value: function () {
              (this.startTime = null), (this.endTime = null);
            },
          },
        ]) && l(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function f(t) {
      return (
        (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        f(t)
      );
    }
    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== f(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== f(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === f(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const v = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.pageVisits = []),
          this.init();
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "init",
            value: function () {
              var t = this;
              window.addEventListener("load", function () {
                t.trackPageVisit();
              }),
                window.addEventListener("popstate", function () {
                  t.trackPageVisit();
                }),
                window.addEventListener("pushState", function () {
                  t.trackPageVisit();
                }),
                window.addEventListener("replaceState", function () {
                  t.trackPageVisit();
                });
            },
          },
          {
            key: "trackPageVisit",
            value: function () {
              var t = window.location.href,
                e = new Date();
              this.pageVisits.push({ url: t, timestamp: e });
            },
          },
          {
            key: "getPageVisits",
            value: function () {
              return this.pageVisits;
            },
          },
        ]) && y(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function p(t) {
      return (
        (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        p(t)
      );
    }
    function m(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== p(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== p(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === p(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const b = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.webActivityTracker = e),
          this.init();
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "init",
            value: function () {
              document.addEventListener(
                "focus",
                this.handleFocus.bind(this),
                !0
              ),
                document.addEventListener(
                  "blur",
                  this.handleBlur.bind(this),
                  !0
                ),
                document.addEventListener(
                  "change",
                  this.handleChange.bind(this),
                  !0
                );
            },
          },
          {
            key: "handleFocus",
            value: function (t) {
              var e = t.target;
              if (this.isFormElement(e)) {
                var n = this.extractEventData(e, "focus");
                this.webActivityTracker.track("form_input_focus", n);
              }
            },
          },
          {
            key: "handleBlur",
            value: function (t) {
              var e = t.target;
              if (this.isFormElement(e)) {
                var n = this.extractEventData(e, "blur");
                this.webActivityTracker.track("form_input_blur", n);
              }
            },
          },
          {
            key: "handleChange",
            value: function (t) {
              var e = t.target;
              if (this.isFormElement(e)) {
                var n = this.extractEventData(e, "change");
                this.webActivityTracker.track("form_input_change", n);
              }
            },
          },
          {
            key: "isFormElement",
            value: function (t) {
              return (
                "INPUT" === t.tagName ||
                "TEXTAREA" === t.tagName ||
                "SELECT" === t.tagName
              );
            },
          },
          {
            key: "extractEventData",
            value: function (t, e) {
              return {
                elementType: t.tagName,
                inputType: t.type || null,
                interactionType: e,
                value: t.value || null,
                name: t.name || null,
                id: t.id || null,
                className: t.className || null,
                timestamp: new Date(),
              };
            },
          },
        ]) && m(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function d(t) {
      return (
        (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        d(t)
      );
    }
    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== d(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== d(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === d(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const g = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.deviceInfo = {
            deviceType: null,
            os: null,
            browser: null,
            screenResolution: null,
          });
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "trackDeviceInfo",
            value: function () {
              (this.deviceInfo.deviceType = this.getDeviceType()),
                (this.deviceInfo.os = this.getOS()),
                (this.deviceInfo.browser = this.getBrowser()),
                (this.deviceInfo.screenResolution = this.getScreenResolution());
            },
          },
          {
            key: "getDeviceType",
            value: function () {
              var t = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
                  navigator.userAgent
                ),
                e = /Tablet|iPad/i.test(navigator.userAgent);
              return t ? "mobile" : e ? "tablet" : "desktop";
            },
          },
          {
            key: "getOS",
            value: function () {
              var t = navigator.userAgent,
                e = navigator.platform,
                n = null;
              return (
                -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(e)
                  ? (n = "Mac OS")
                  : -1 !== ["iPhone", "iPad", "iPod"].indexOf(e)
                  ? (n = "iOS")
                  : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(e)
                  ? (n = "Windows")
                  : /Android/.test(t)
                  ? (n = "Android")
                  : !n && /Linux/.test(e) && (n = "Linux"),
                n
              );
            },
          },
          {
            key: "getBrowser",
            value: function () {
              var t = navigator.userAgent;
              return t.indexOf("Firefox") > -1
                ? "Firefox"
                : t.indexOf("Opera") > -1 || t.indexOf("OPR/") > -1
                ? "Opera"
                : t.indexOf("Trident") > -1
                ? "Internet Explorer"
                : t.indexOf("Edge") > -1
                ? "Edge"
                : t.indexOf("Chrome") > -1
                ? "Chrome"
                : t.indexOf("Safari") > -1
                ? "Safari"
                : "Unknown";
            },
          },
          {
            key: "getScreenResolution",
            value: function () {
              return ""
                .concat(window.screen.width, "x")
                .concat(window.screen.height);
            },
          },
          {
            key: "getDeviceInfo",
            value: function () {
              return this.deviceInfo;
            },
          },
        ]) && h(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function w(t) {
      return (
        (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        w(t)
      );
    }
    function S(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function k(t, e, n) {
      return (
        (e = E(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function P(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, E(r.key), r);
      }
    }
    function E(t) {
      var e = (function (t, e) {
        if ("object" !== w(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, "string");
          if ("object" !== w(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" === w(e) ? e : String(e);
    }
    const O = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.options = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? S(Object(n), !0).forEach(function (e) {
                    k(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : S(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({ enableHighAccuracy: !0, timeout: 5e3, maximumAge: 0 }, e));
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "track",
            value: function () {
              navigator.geolocation &&
                navigator.geolocation.getCurrentPosition(
                  this.onPositionSuccess.bind(this),
                  this.onPositionError.bind(this),
                  this.options
                );
            },
          },
          {
            key: "onPositionSuccess",
            value: function (t) {
              var e = t.coords,
                n = e.latitude,
                r = e.longitude,
                o = e.accuracy,
                i = t.timestamp,
                a = { latitude: n, longitude: r, accuracy: o };
              this.emit("geolocation", a, i);
            },
          },
          {
            key: "onPositionError",
            value: function (t) {
              console.error("Geolocation error: ".concat(t.message));
            },
          },
        ]) && P(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function j(t) {
      return (
        (j =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        j(t)
      );
    }
    function T(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== j(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== j(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === j(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const D = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.eventEmitter = e),
          (this.mediaElements = []),
          (this.trackMediaInteractions =
            this.trackMediaInteractions.bind(this));
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "track",
            value: function () {
              var t = this;
              this.addMediaElementsToList(),
                this.mediaElements.forEach(function (e) {
                  e.addEventListener("play", t.trackMediaInteractions),
                    e.addEventListener("pause", t.trackMediaInteractions),
                    e.addEventListener(
                      "volumechange",
                      t.trackMediaInteractions
                    ),
                    e.addEventListener("mute", t.trackMediaInteractions);
                });
            },
          },
          {
            key: "addMediaElementsToList",
            value: function () {
              var t = this;
              document.querySelectorAll("video, audio").forEach(function (e) {
                t.mediaElements.includes(e) || t.mediaElements.push(e);
              });
            },
          },
          {
            key: "trackMediaInteractions",
            value: function (t) {
              var e = t.type,
                n = t.target,
                r = {
                  mediaType: n.tagName,
                  mediaSrc: n.src,
                  interactionType: e,
                  timestamp: new Date(),
                };
              this.eventEmitter.emit("mediaInteraction", r);
            },
          },
          {
            key: "stop",
            value: function () {
              var t = this;
              this.mediaElements.forEach(function (e) {
                e.removeEventListener("play", t.trackMediaInteractions),
                  e.removeEventListener("pause", t.trackMediaInteractions),
                  e.removeEventListener(
                    "volumechange",
                    t.trackMediaInteractions
                  ),
                  e.removeEventListener("mute", t.trackMediaInteractions);
              }),
                (this.mediaElements = []);
            },
          },
        ]) && T(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function C(t) {
      return (
        (C =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        C(t)
      );
    }
    function x(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(
            t,
            (void 0,
            (o = (function (t, e) {
              if ("object" !== C(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== C(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(r.key)),
            "symbol" === C(o) ? o : String(o)),
            r
          );
      }
      var o;
    }
    const I = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.errors = []),
          window.addEventListener("error", this.onError.bind(this));
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "onError",
            value: function (t) {
              var e = t.message,
                n = t.filename,
                r = t.lineno,
                o = t.colno,
                i = t.error,
                a = (null == i ? void 0 : i.stack) || "N/D",
                c = {
                  type: (null == i ? void 0 : i.name) || "N/D",
                  message: e,
                  stackTrace: a,
                  filename: n,
                  lineno: r,
                  colno: o,
                  timestamp: new Date(),
                };
              this.errors.push(c);
            },
          },
          {
            key: "sendToServer",
            value: function (t) {
              fetch(t, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.errors),
              })
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  return console.log(t);
                })
                .catch(function (t) {
                  return console.error(t);
                });
            },
          },
        ]) && x(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    function L(t) {
      return (
        (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        L(t)
      );
    }
    function M(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function A(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? M(Object(n), !0).forEach(function (e) {
              N(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : M(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function N(t, e, n) {
      return (
        (e = F(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function V(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, F(r.key), r);
      }
    }
    function F(t) {
      var e = (function (t, e) {
        if ("object" !== L(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(t, "string");
          if ("object" !== L(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" === L(e) ? e : String(e);
    }
    const _ = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.options = e),
          (this.trackers = [
            new o(),
            new c(),
            new s(),
            new v(),
            new b(),
            new g(),
            new O(),
            new D(),
            new I(),
          ]),
          this.init();
      }
      var e, n;
      return (
        (e = t),
        (n = [
          {
            key: "init",
            value: function () {
              var t = this;
              this.trackers.forEach(function (e) {
                "function" == typeof e.init && e.init(t.options);
              });
            },
          },
          {
            key: "sendToServer",
            value: function (t) {
              var e = this.trackers.reduce(function (t, e) {
                if ("function" == typeof e.getData) {
                  var n = e.getData();
                  t = A(A({}, t), n);
                }
                return t;
              }, {});
              fetch(t, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(e),
              })
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  return console.log("Data sent to server:", t);
                })
                .catch(function (t) {
                  return console.error("Error sending data to server:", t);
                });
            },
          },
        ]) && V(e.prototype, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t
      );
    })();
    return e;
  })()
);
