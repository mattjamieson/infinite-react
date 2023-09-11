const require = function(module) {
  if (module === module) {
    return { isatty: function() { return false; } };
  } else {
    return undefined;
  }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/tsup/assets/esm_shims.js
var init_esm_shims = __esm({
  "node_modules/tsup/assets/esm_shims.js"() {
  }
});

// ../node_modules/ms/index.js
var require_ms = __commonJS({
  "../node_modules/ms/index.js"(exports, module) {
    init_esm_shims();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../node_modules/debug/src/common.js
var require_common = __commonJS({
  "../node_modules/debug/src/common.js"(exports, module) {
    init_esm_shims();
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug5(...args) {
          if (!debug5.enabled) {
            return;
          }
          const self = debug5;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug5.namespace = namespace;
        debug5.useColors = createDebug.useColors();
        debug5.color = createDebug.selectColor(namespace);
        debug5.extend = extend;
        debug5.destroy = createDebug.destroy;
        Object.defineProperty(debug5, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug5);
        }
        return debug5;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../node_modules/debug/src/browser.js"(exports, module) {
    init_esm_shims();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error2) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error2) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error2) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error2) {
        return "[UnexpectedJSONParseError]: " + error2.message;
      }
    };
  }
});

// ../node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    module.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position2 = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position2 !== -1 && (terminatorPosition === -1 || position2 < terminatorPosition);
    };
  }
});

// ../node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    init_esm_shims();
    var os = __require("os");
    var tty = __require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// ../node_modules/debug/src/node.js
var require_node = __commonJS({
  "../node_modules/debug/src/node.js"(exports, module) {
    init_esm_shims();
    var tty = __require("tty");
    var util = __require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error2) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug5) {
      debug5.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug5.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// ../node_modules/debug/src/index.js
var require_src = __commonJS({
  "../node_modules/debug/src/index.js"(exports, module) {
    init_esm_shims();
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// ../node_modules/binary-search/index.js
var require_binary_search = __commonJS({
  "../node_modules/binary-search/index.js"(exports, module) {
    init_esm_shims();
    module.exports = function(haystack, needle, comparator, low, high) {
      var mid, cmp;
      if (low === void 0)
        low = 0;
      else {
        low = low | 0;
        if (low < 0 || low >= haystack.length)
          throw new RangeError("invalid lower bound");
      }
      if (high === void 0)
        high = haystack.length - 1;
      else {
        high = high | 0;
        if (high < low || high >= haystack.length)
          throw new RangeError("invalid upper bound");
      }
      while (low <= high) {
        mid = low + (high - low >>> 1);
        cmp = +comparator(haystack[mid], needle, mid, haystack);
        if (cmp < 0)
          low = mid + 1;
        else if (cmp > 0)
          high = mid - 1;
        else
          return mid;
      }
      return ~low;
    };
  }
});

// src/index.tsx
init_esm_shims();

// src/components/utils/debounce.ts
init_esm_shims();
function debounce(fn, { wait }) {
  let timeout = null;
  return function(...args) {
    const context = this;
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// src/components/InfiniteTable/index.tsx
init_esm_shims();
import * as React64 from "react";

// src/utils/join.ts
init_esm_shims();
var join = (...args) => args.filter((x) => !!`${x}`).join(" ");

// src/components/CSSNumericVariableWatch.tsx
init_esm_shims();
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// src/utils/debug.ts
init_esm_shims();
var debug = require_src();
var debugTable = debug(`InfiniteTable`);
var dbg = (channelName) => {
  const result = debugTable.extend(channelName);
  result.log = console.log.bind(console);
  return result;
};
var err = (channelName) => {
  const result = debugTable.extend(`${channelName}:error`);
  result.log = console.error.bind(console);
  return result;
};
var emptyLogFn = () => emptyLogFn;
emptyLogFn.extend = () => emptyLogFn;
var Logger = class {
  constructor(channelName) {
    this.debug = emptyLogFn;
    this.error = emptyLogFn;
    if (false) {
      this.debug = dbg(channelName);
      this.error = err(channelName);
    }
  }
};

// src/components/ResizeObserver/index.tsx
init_esm_shims();
import * as React from "react";
import {
  useMemo,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback
} from "react";
var setupResizeObserver = (node, callback, config = { debounce: 0 }) => {
  var _a;
  const debounceTime = (_a = config.debounce) != null ? _a : 0;
  const RO = window.ResizeObserver;
  const onResizeCallback = debounceTime ? debounce(callback, { wait: debounceTime }) : callback;
  const observer = new RO((entries) => {
    var _a2;
    const entry = entries[0];
    let { width, height } = entry.contentRect;
    if ((_a2 = entry.borderBoxSize) == null ? void 0 : _a2[0]) {
      height = entry.borderBoxSize[0].blockSize;
      width = entry.borderBoxSize[0].inlineSize;
    } else {
      const rect = node.getBoundingClientRect();
      height = rect.height;
      width = rect.width;
    }
    onResizeCallback({ width, height });
  });
  observer.observe(node);
  return () => {
    observer.disconnect();
  };
};
var useResizeObserver = (ref, callback, config = {
  earlyAttach: false,
  debounce: 0
}) => {
  const sizeRef = useRef({
    width: 0,
    height: 0
  });
  const effectFn = (callback2) => {
    let disconnect;
    if (ref.current) {
      disconnect = setupResizeObserver(
        ref.current,
        (size) => {
          size = {
            width: Math.round(size.width),
            height: Math.round(size.height)
          };
          const prevSize = sizeRef.current;
          if (prevSize.width !== size.width || prevSize.height !== size.height) {
            sizeRef.current = size;
            callback2(size);
          }
        },
        { debounce: config.debounce }
      );
    }
    return () => {
      if (disconnect) {
        disconnect();
      }
    };
  };
  useEffect(() => {
    if (!config.earlyAttach) {
      return effectFn(callback);
    }
    return () => {
    };
  }, [ref.current, callback, config.earlyAttach, config.debounce]);
  useLayoutEffect(() => {
    if (config.earlyAttach) {
      return effectFn(callback);
    }
    return () => {
    };
  }, [ref.current, callback, config.earlyAttach]);
};
var ReactResizeObserver = (props) => {
  const style2 = useMemo(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      boxSizing: "border-box"
    }),
    []
  );
  const { notifyOnMount, earlyAttach } = props;
  const firstTime = useRef(true);
  const ref = useRef(null);
  const onResize = useCallback(
    (size) => {
      if (firstTime.current && !notifyOnMount) {
        firstTime.current = false;
        return;
      }
      props.onResize(size);
    },
    [props.onResize]
  );
  useResizeObserver(ref, onResize, { earlyAttach: earlyAttach || false });
  return /* @__PURE__ */ React.createElement("div", { ref, style: style2 });
};
ReactResizeObserver.defaultProps = {
  notifyOnMount: true,
  earlyAttach: false
};

// src/components/CSSNumericVariableWatch.tsx
var error = err("CSSVariableWatch");
var debug2 = dbg("CSSVariableWatch");
var WRAPPER_STYLE = {
  position: "absolute",
  pointerEvents: "none",
  width: 0,
  height: 0,
  lineHeight: 0,
  fontSize: 0,
  overflow: "hidden"
};
var useCSSVariableWatch = (params) => {
  const lastValueRef = useRef2(0);
  const onResize = React2.useCallback(
    ({ height }) => {
      if (height != null && height !== lastValueRef.current) {
        lastValueRef.current = height;
        params.onChange(height);
      }
    },
    [params.onChange]
  );
  useResizeObserver(params.ref, onResize, { earlyAttach: true });
  React2.useLayoutEffect(() => {
    const value = params.ref.current.getBoundingClientRect().height;
    if (value) {
      lastValueRef.current = value;
      debug2(`Variable ${params.varName} found and equals ${value}.`);
      return params.onChange(value);
    } else {
      error(
        `Specified variable ${params.varName} not found or does not have a numeric value.`
      );
    }
  }, []);
};
var CSSNumericVariableWatch = (props) => {
  const domRef = useRef2(null);
  useCSSVariableWatch(__spreadProps(__spreadValues({}, props), {
    ref: domRef
  }));
  const height = props.varName.startsWith("var(") ? props.varName : `var(${props.varName})`;
  const { allowInts = false } = props;
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      "data-name": "css-variable-watcher",
      "data-var": props.varName,
      style: WRAPPER_STYLE
    },
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        ref: domRef,
        style: {
          height: allowInts ? `calc(1px * ${height})` : height
          // we do multiplication in order to support integer (without px) values as well
        }
      }
    )
  );
};

// src/components/DataSource/publicHooks/useDataSource.ts
init_esm_shims();
import * as React4 from "react";

// src/components/DataSource/DataSourceContext.ts
init_esm_shims();
import * as React3 from "react";
var DSContext;
function getDataSourceContext() {
  if (DSContext) {
    return DSContext;
  }
  return DSContext = React3.createContext({
    api: null,
    getState: () => null,
    componentState: null,
    componentActions: null
  });
}

// src/components/DataSource/publicHooks/useDataSource.ts
function useDataSource() {
  const DataSourceContext = getDataSourceContext();
  const contextValue = React4.useContext(DataSourceContext);
  return contextValue.componentState;
}
function useDataSourceContextValue() {
  const DataSourceContext = getDataSourceContext();
  const contextValue = React4.useContext(DataSourceContext);
  return contextValue;
}

// src/components/HeadlessTable/index.tsx
init_esm_shims();
import * as React12 from "react";
import {
  useCallback as useCallback4,
  useEffect as useEffect7,
  useRef as useRef7,
  useState as useState3
} from "react";

// src/components/VirtualList/SpacePlaceholder.tsx
init_esm_shims();
import * as React5 from "react";
function SpacePlaceholderFn(props) {
  const { height, width, count } = props;
  const style2 = {
    height,
    width,
    zIndex: -1,
    opacity: 0,
    pointerEvents: "none",
    contain: "strict"
  };
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      "data-count": count,
      "data-placeholder-width": false ? width : void 0,
      "data-placeholder-height": false ? height : void 0,
      "data-name": "SpacePlaceholder",
      style: style2
    }
  );
}
var SpacePlaceholder = React5.memo(SpacePlaceholderFn);

// src/components/VirtualList/VirtualList.css.ts
init_esm_shims();
var scrollTransformTargetCls = "VirtualList_scrollTransformTarget__mlx2t3";

// src/components/VirtualScrollContainer/index.tsx
init_esm_shims();
import * as React6 from "react";
import { useRef as useRef3 } from "react";

// src/components/hooks/useOnScroll.ts
init_esm_shims();
import { useEffect as useEffect2 } from "react";
var useOnScroll = (domRef, onScroll) => {
  useEffect2(() => {
    const domNode = domRef == null ? void 0 : domRef.current;
    const scrollFn = (event) => {
      const node = event.target;
      onScroll == null ? void 0 : onScroll({
        scrollTop: node.scrollTop,
        scrollLeft: node.scrollLeft
      });
    };
    const options = {
      passive: false
    };
    domNode == null ? void 0 : domNode.addEventListener("scroll", scrollFn, options);
    return () => {
      domNode == null ? void 0 : domNode.removeEventListener("scroll", scrollFn);
    };
  }, [onScroll, domRef == null ? void 0 : domRef.current]);
};

// src/components/VirtualScrollContainer/getScrollableClassName.ts
init_esm_shims();

// src/components/VirtualScrollContainer/VirtualScrollContainer.css.ts
init_esm_shims();
var ScrollableCls = { true: "VirtualScrollContainer_getOverflowFor_true__1ueijco1", false: "VirtualScrollContainer_getOverflowFor_false__1ueijco2", visible: "VirtualScrollContainer_getOverflowFor_visible__1ueijco3", auto: "VirtualScrollContainer_getOverflowFor_auto__1ueijco4", hidden: "VirtualScrollContainer_getOverflowFor_hidden__1ueijco5" };
var ScrollableHorizontalCls = { true: "VirtualScrollContainer_getOverflowFor_true__1ueijco6", false: "VirtualScrollContainer_getOverflowFor_false__1ueijco7", visible: "VirtualScrollContainer_getOverflowFor_visible__1ueijco8", auto: "VirtualScrollContainer_getOverflowFor_auto__1ueijco9", hidden: "VirtualScrollContainer_getOverflowFor_hidden__1ueijcoa" };
var ScrollableVerticalCls = { true: "VirtualScrollContainer_getOverflowFor_true__1ueijcob", false: "VirtualScrollContainer_getOverflowFor_false__1ueijcoc", visible: "VirtualScrollContainer_getOverflowFor_visible__1ueijcod", auto: "VirtualScrollContainer_getOverflowFor_auto__1ueijcoe", hidden: "VirtualScrollContainer_getOverflowFor_hidden__1ueijcof" };
var VirtualScrollContainerCls = "VirtualScrollContainer_VirtualScrollContainerCls__1ueijco0 utilities_boxSizingBorderBox__16lm1iw0";

// src/components/VirtualScrollContainer/getScrollableClassName.ts
var getScrollableClassName = (scrollable) => {
  let scrollableClassName = "";
  if (typeof scrollable === "boolean" || typeof scrollable === "string") {
    scrollableClassName = ScrollableCls[`${scrollable}`];
  } else {
    scrollableClassName = join(
      ScrollableHorizontalCls[`${scrollable.horizontal}`],
      ScrollableVerticalCls[`${scrollable.vertical}`]
    );
  }
  return scrollableClassName;
};

// src/components/VirtualScrollContainer/index.tsx
var rootClassName = "InfiniteVirtualScrollContainer";
var VirtualScrollContainer = React6.forwardRef(
  function VirtualScrollContainer2(props, ref) {
    const {
      children,
      scrollable = true,
      onContainerScroll,
      className,
      tabIndex,
      style: style2
    } = props;
    const domRef = ref != null ? ref : useRef3(null);
    useOnScroll(domRef, onContainerScroll);
    return /* @__PURE__ */ React6.createElement(
      "div",
      {
        ref: domRef,
        style: style2,
        tabIndex,
        className: join(
          className,
          rootClassName,
          VirtualScrollContainerCls,
          getScrollableClassName(scrollable)
        )
      },
      children
    );
  }
);

// src/components/HeadlessTable/RawTable.tsx
init_esm_shims();
import * as React9 from "react";
import { useEffect as useEffect4, useLayoutEffect as useLayoutEffect3, useMemo as useMemo2 } from "react";

// src/components/RawList/AvoidReactDiff.tsx
init_esm_shims();
import * as React7 from "react";
import { useEffect as useEffect3, useRef as useRef4, useState } from "react";
function AvoidReactDiffFn(props) {
  const [children, setChildren] = useState(props.updater.get);
  const rafId = useRef4(null);
  useEffect3(() => {
    function onChange(children2) {
      if (props.useraf) {
        if (rafId.current != null) {
          cancelAnimationFrame(rafId.current);
        }
        rafId.current = requestAnimationFrame(() => {
          setChildren(children2);
        });
      } else {
        setChildren(children2);
      }
    }
    const remove = props.updater.onChange(onChange);
    return () => {
      if (rafId.current != null) {
        cancelAnimationFrame(rafId.current);
      }
      remove();
    };
  }, [props.updater, props.useraf]);
  return children != null ? children : null;
}
var AvoidReactDiff = React7.memo(AvoidReactDiffFn);

// src/components/utils/buildSubscriptionCallback.tsx
init_esm_shims();
function buildSubscriptionCallback(withRaf = false) {
  let lastCallValue = null;
  let fns = [];
  let rafId = null;
  const updater = (items, callback) => {
    const results = [];
    if (withRaf) {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      requestAnimationFrame(() => {
        lastCallValue = items;
        rafId = null;
        for (let i = 0, len = fns.length; i < len; i++) {
          results.push(fns[i](items));
        }
        callback == null ? void 0 : callback(results);
      });
    } else {
      lastCallValue = items;
      for (let i = 0, len = fns.length; i < len; i++) {
        results.push(fns[i](items));
      }
      callback == null ? void 0 : callback(results);
    }
  };
  updater.get = () => lastCallValue;
  updater.onChange = (fn) => {
    fns.push(fn);
    return () => {
      fns = fns.filter((f) => f !== fn);
    };
  };
  updater.destroy = () => {
    updater(null);
    fns.length = 0;
  };
  updater.getListenersCount = () => fns.length;
  return updater;
}

// src/components/HeadlessTable/ReactHeadlessTableRenderer.tsx
init_esm_shims();
import * as React8 from "react";

// src/utils/mathIntersection.ts
init_esm_shims();
function arrayIntersection(...arrays) {
  if (!arrays.length) {
    return [];
  }
  const map2 = /* @__PURE__ */ new Map();
  arrays.forEach((arr) => {
    var _a;
    for (let i = 0, len2 = arr.length; i < len2; i++) {
      const item = arr[i];
      const count = (_a = map2.get(item)) != null ? _a : 0;
      map2.set(item, count + 1);
    }
    return map2;
  });
  const len = arrays.length;
  return arrays[0].filter((x) => {
    return map2.get(x) === len;
  });
}

// src/utils/raf.ts
init_esm_shims();

// src/utils/getGlobal.ts
init_esm_shims();
function getGlobal() {
  return globalThis;
}

// src/utils/raf.ts
var raf = getGlobal().requestAnimationFrame || ((fn) => {
  return setTimeout(fn, 16);
});
var cancelRaf = getGlobal().cancelAnimationFrame || ((timeoutId) => {
  return clearTimeout(timeoutId);
});

// src/utils/stripVar.ts
init_esm_shims();
function stripVar(cssVariableWithVarString) {
  return cssVariableWithVarString.slice(4, -1);
}

// src/components/InfiniteTable/theme.css.ts
init_esm_shims();
var InternalVars = { currentColumnWidth: "var(--currentColumnWidth__1slvgu90)", currentColumnTransformX: "var(--currentColumnTransformX__1slvgu91)", currentColumnTransformY: "var(--currentColumnTransformY__1slvgu92)", activeCellRowOffset: "var(--activeCellRowOffset__1slvgu93)", activeCellRowHeight: "var(--activeCellRowHeight__1slvgu94)", activeCellOffsetX: "var(--activeCellOffsetX__1slvgu95)", activeCellOffsetY: "var(--activeCellOffsetY__1slvgu96)", scrollTopForActiveRow: "var(--scrollTopForActiveRow__1slvgu97)", activeCellColWidth: "var(--activeCellColWidth__1slvgu98)", activeCellColOffset: "var(--activeCellColOffset__1slvgu99)", columnReorderEffectDurationAtIndex: "var(--columnReorderEffectDurationAtIndex__1slvgu9a)", columnWidthAtIndex: "var(--columnWidthAtIndex__1slvgu9b)", columnOffsetAtIndex: "var(--columnOffsetAtIndex__1slvgu9c)", columnOffsetAtIndexWhileReordering: "var(--columnOffsetAtIndexWhileReordering__1slvgu9d)", columnZIndexAtIndex: "var(--columnZIndexAtIndex__1slvgu9e)", pinnedStartWidth: "var(--pinnedStartWidth__1slvgu9f)", pinnedEndWidth: "var(--pinnedEndWidth__1slvgu9g)", pinnedEndOffset: "var(--pinnedEndOffset__1slvgu9h)", computedVisibleColumnsCount: "var(--computedVisibleColumnsCount__1slvgu9i)", baseZIndexForCells: "var(--baseZIndexForCells__1slvgu9j)", bodyWidth: "var(--bodyWidth__1slvgu9k)", bodyHeight: "var(--bodyHeight__1slvgu9l)", scrollbarWidthHorizontal: "var(--scrollbarWidthHorizontal__1slvgu9m)", scrollbarWidthVertical: "var(--scrollbarWidthVertical__1slvgu9n)", scrollLeft: "var(--scrollLeft__1slvgu9o)", scrollTop: "var(--scrollTop__1slvgu9p)" };
var ThemeVars = { color: { accent: "var(--infinite-accent-color)", error: "var(--infinite-error-color)", color: "var(--infinite-color)" }, spacing: { "0": "var(--infinite-space-0)", "1": "var(--infinite-space-1)", "2": "var(--infinite-space-2)", "3": "var(--infinite-space-3)", "4": "var(--infinite-space-4)", "5": "var(--infinite-space-5)", "6": "var(--infinite-space-6)", "7": "var(--infinite-space-7)", "8": "var(--infinite-space-8)", "9": "var(--infinite-space-9)", "10": "var(--infinite-space-10)" }, fontSize: { "0": "var(--infinite-font-size-0)", "1": "var(--infinite-font-size-1)", "2": "var(--infinite-font-size-2)", "3": "var(--infinite-font-size-3)", "4": "var(--infinite-font-size-4)", "5": "var(--infinite-font-size-5)", "6": "var(--infinite-font-size-6)", "7": "var(--infinite-font-size-7)" }, fontFamily: "var(--infinite-font-family)", minHeight: "var(--infinite-min-height)", borderRadius: "var(--infinite-border-radius)", background: "var(--infinite-background)", iconSize: "var(--infinite-icon-size)", components: { LoadMask: { padding: "var(--infinite-load-mask-padding)", color: "var(--infinite-load-mask-color)", textBackground: "var(--infinite-load-mask-text-background)", overlayBackground: "var(--infinite-load-mask-overlay-background)", overlayOpacity: "var(--infinite-load-mask-overlay-opacity)", borderRadius: "var(--infinite-load-mask-border-radius)" }, Header: { background: "var(--infinite-header-background)", color: "var(--infinite-header-color)", columnHeaderHeight: "var(--infinite-column-header-height)" }, HeaderCell: { background: "var(--infinite-header-cell-background)", hoverBackground: "var(--infinite-header-cell-hover-background)", padding: "var(--infinite-header-cell-padding)", paddingX: "var(--infinite-header-cell-padding-x)", paddingY: "var(--infinite-header-cell-padding-y)", iconSize: "var(--infinite-header-cell-icon-size)", menuIconLineWidth: "var(--infinite-header-cell-menu-icon-line-width)", sortIconMargin: "var(--infinite-header-cell-sort-icon-margin)", resizeHandleActiveAreaWidth: "var(--infinite-resize-handle-active-area-width)", resizeHandleWidth: "var(--infinite-resize-handle-width)", resizeHandleHoverBackground: "var(--infinite-resize-handle-hover-background)", resizeHandleConstrainedHoverBackground: "var(--infinite-resize-handle-constrained-hover-background)", filterOperatorPaddingX: "var(--infinite-filter-operator-padding-x)", filterEditorPaddingX: "var(--infinite-filter-editor-padding-x)", filterEditorMarginX: "var(--infinite-filter-editor-margin-x)", filterOperatorPaddingY: "var(--infinite-filter-operator-padding-y)", filterEditorPaddingY: "var(--infinite-filter-editor-padding-y)", filterEditorMarginY: "var(--infinite-filter-editor-margin-y)" }, Cell: { padding: "var(--infinite-cell-padding)", borderWidth: "var(--infinite-cell-border-width)", border: "var(--infinite-cell-border)", borderInvisible: "var(--infinite-cell-border-invisible)", borderRadius: "var(--infinite-cell-border-radius)", reorderEffectDuration: "var(--infinite-column-reorder-effect-duration)", pinnedBorder: "var(--infinite-pinned-cell-border)", color: "var(--infinite-cell-color)", activeBackgroundAlpha: "var(--infinite-active-cell-background-alpha)", activeBackgroundAlphaWhenTableUnfocused: "var(--infinite-active-cell-background-alpha--table-unfocused)", activeBackground: "var(--infinite-active-cell-background)", activeBorderColor: "var(--infinite-active-cell-border-color)", activeBorderWidth: "var(--infinite-active-cell-border-width)", activeBorderStyle: "var(--infinite-active-cell-border-style)", activeBorder: "var(--infinite-active-cell-border)" }, SelectionCheckBox: { marginInline: "var(--infinite-selection-checkbox-margin-inline)" }, Menu: { background: "var(--infinite-menu-background)", color: "var(--infinite-menu-color)", padding: "var(--infinite-menu-padding)", cellPaddingVertical: "var(--infinite-menu-cell-padding-vertical)", cellPaddingHorizontal: "var(--infinite-menu-cell-padding-horizontal)", cellMarginVertical: "var(--infinite-menu-cell-margin-vertical)", itemDisabledBackground: "var(--infinite-menu-item-disabled-background)", itemActiveBackground: "var(--infinite-menu-item-active-background)", itemActiveOpacity: "var(--infinite-menu-item-active-opacity)", itemPressedOpacity: "var(--infinite-menu-item-pressed-opacity)", itemPressedBackground: "var(--infinite-menu-item-pressed-background)", itemDisabledOpacity: "var(--infinite-menu-item-disabled-opacity)", borderRadius: "var(--infinite-menu-border-radius)", shadowColor: "var(--infinite-menu-shadow-color)" }, Row: { background: "var(--infinite-row-background)", oddBackground: "var(--infinite-row-odd-background)", selectedBackground: "var(--infinite-row-selected-background)", activeBackground: "var(--infinite-active-row-background)", activeBorderColor: "var(--infinite-active-row-border-color)", activeBorderWidth: "var(--infinite-active-row-border-width)", activeBorderStyle: "var(--infinite-active-row-border-style)", activeBorder: "var(--infinite-active-row-border)", activeBackgroundAlpha: "var(--infinite-active-row-background-alpha)", activeBackgroundAlphaWhenTableUnfocused: "var(--infinite-active-row-background-alpha--table-unfocused)", hoverBackground: "var(--infinite-row-hover-background)", selectedHoverBackground: "var(--infinite-row-selected-hover-background)", groupRowBackground: "var(--infinite-group-row-background)", groupRowColumnNesting: "var(--infinite-group-row-column-nesting)", groupNesting: "var(--infinite-dont-override-group-row-nesting-length)", pointerEventsWhileScrolling: "var(--infinite-row-pointer-events-while-scrolling)" }, ColumnCell: { background: "var(--infinite-column-cell-bg-dont-override)" } } };
var columnHeaderHeightName = "column-header-height";

// src/components/InfiniteTable/utils/infiniteDOMUtils.ts
init_esm_shims();

// src/utils/selectParent.ts
init_esm_shims();
function selectParent(el, selector2) {
  let node = el;
  if (!node) {
    return null;
  }
  if (node && node.matches(selector2)) {
    return node;
  }
  while (node = node.parentElement) {
    if (node.matches(selector2)) {
      return node;
    }
  }
  return null;
}
function selectParentUntil(el, selector2, root) {
  let node = el;
  if (!node) {
    return null;
  }
  if (node && node.matches(selector2)) {
    return node;
  }
  while (node = node.parentElement) {
    if (node.matches(selector2)) {
      return node;
    }
    if (node === root) {
      return null;
    }
  }
  return null;
}

// src/components/InfiniteTable/internalProps.ts
init_esm_shims();
var rootClassName2 = "Infinite";
var internalProps = {
  rootClassName: rootClassName2
};

// src/components/InfiniteTable/utils/infiniteDOMUtils.ts
var InfiniteSelector = `.${internalProps.rootClassName}`;
function getParentInfiniteNode(node) {
  return selectParent(node, InfiniteSelector);
}
var scrollLeft = stripVar(InternalVars.scrollLeft);
var scrollTop = stripVar(InternalVars.scrollTop);
var columnWidthAtIndex = stripVar(InternalVars.columnWidthAtIndex);
var columnOffsetAtIndex = stripVar(InternalVars.columnOffsetAtIndex);
var columnReorderEffectDurationAtIndex = stripVar(
  InternalVars.columnReorderEffectDurationAtIndex
);
var columnOffsetAtIndexWhileReordering = stripVar(
  InternalVars.columnOffsetAtIndexWhileReordering
);
var columnZIndexAtIndex = stripVar(InternalVars.columnZIndexAtIndex);
function setInfiniteVarOnRoot(varName, varValue, node) {
  const infinite = node ? getParentInfiniteNode(node) : document.querySelector(InfiniteSelector);
  setInfiniteVarOnNode(varName, varValue, infinite);
}
function setInfiniteVarOnNode(varName, varValue, node) {
  if (node) {
    const prop = InternalVars[varName] ? stripVar(InternalVars[varName]) : varName;
    node.style.setProperty(prop, `${varValue}`);
  }
}
function setInfiniteVarsOnNode(vars, node) {
  if (node) {
    for (var varName in vars) {
      node.style.setProperty(
        InternalVars[varName] ? stripVar(InternalVars[varName]) : varName,
        `${vars[varName]}`
      );
    }
  }
}
function setInfiniteColumnWidth(colIndex, colWidth, node) {
  setInfiniteVarOnRoot(
    `${columnWidthAtIndex}-${colIndex}`,
    typeof colWidth === "number" ? colWidth + "px" : colWidth,
    node
  );
}
function setInfiniteColumnOffset(colIndex, colOffset, node) {
  setInfiniteVarOnRoot(
    `${columnOffsetAtIndex}-${colIndex}`,
    typeof colOffset === "number" ? colOffset + "px" : colOffset,
    node
  );
}
function addToInfiniteColumnOffset(column, amountToAdd, node) {
  setInfiniteVarOnRoot(
    `${columnOffsetAtIndex}-${column.computedVisibleIndex}`,
    !column.computedPinned ? `${column.computedAbsoluteOffset + amountToAdd}px` : `calc( ${column.computedAbsoluteOffset + amountToAdd}px + var(${scrollLeft}))`,
    node
  );
}
function setInfiniteColumnZIndex(colIndex, colZIndex, node) {
  setInfiniteVarOnRoot(
    `${columnZIndexAtIndex}-${colIndex}`,
    `${colZIndex}`,
    node
  );
}
function setInfiniteColumnOffsetWhileReordering(colIndex, offset, node) {
  setInfiniteVarOnRoot(
    `${columnOffsetAtIndexWhileReordering}-${colIndex}`,
    typeof offset === "number" ? `calc( var(${columnOffsetAtIndex}-${colIndex}) + ${offset}px )` : offset,
    node
  );
}
function clearInfiniteColumnReorderDuration(colIndex, node, defaultValue) {
  setInfiniteVarOnRoot(
    `${columnReorderEffectDurationAtIndex}-${colIndex}`,
    defaultValue != null ? defaultValue : "",
    node
  );
}
function restoreInfiniteColumnReorderDuration(colIndex, node) {
  const varName = `${columnReorderEffectDurationAtIndex}-${colIndex}`;
  setInfiniteVarOnRoot(
    varName,
    ThemeVars.components.Cell.reorderEffectDuration,
    node
  );
}
function getCSSVarNameForColWidth(colIndex) {
  return `${columnWidthAtIndex}-${colIndex}`;
}
function getCSSVarNameForColOffset(colIndex) {
  return `${columnOffsetAtIndex}-${colIndex}`;
}
function setInfiniteScrollPosition(scrollPosition, node) {
  setInfiniteVarsOnNode(
    {
      [scrollLeft]: `${scrollPosition.scrollLeft}px`,
      [scrollTop]: `${scrollPosition.scrollTop}px`
    },
    node
  );
}

// src/components/VirtualBrain/MatrixBrain.ts
init_esm_shims();
var import_binary_search = __toESM(require_binary_search());
var getRenderRangeCellCount = (range) => {
  const { start, end } = range;
  const [startRow, startCol] = start;
  const [endRow, endCol] = end;
  const rowCount = endRow - startRow;
  const colCount = endCol - startCol;
  return rowCount * colCount;
};
var ALL_DIRECTIONS = { horizontal: true, vertical: true };
var SORT_ASC = (a, b) => a - b;
var raf2 = typeof window !== "undefined" ? requestAnimationFrame : (fn) => setTimeout(fn, 0);
var MatrixBrain = class extends Logger {
  constructor(name) {
    super(`MatrixBrain${name ? `:${name}` : ""}`);
    this.scrolling = false;
    this.width = 0;
    this.height = 0;
    this.cols = 0;
    this.rows = 0;
    this.rowHeight = 0;
    this.colWidth = 0;
    this.verticalTotalSize = 0;
    this.horizontalTotalSize = 0;
    this.horizontalRenderCount = void 0;
    this.verticalRenderCount = void 0;
    this.horizontalRenderRange = {
      startIndex: 0,
      endIndex: 0
    };
    this.verticalRenderRange = { startIndex: 0, endIndex: 0 };
    this.extraSpanCells = [];
    this.scrollPosition = { scrollLeft: 0, scrollTop: 0 };
    this.onScrollFns = [];
    // private onTotalSizeChangeFns: OnSizeChangeFn[] = [];
    this.onRenderRangeChangeFns = /* @__PURE__ */ new Set();
    this.onVerticalRenderRangeChangeFns = /* @__PURE__ */ new Set();
    this.onHorizontalRenderRangeChangeFns = /* @__PURE__ */ new Set();
    this.onDestroyFns = [];
    this.destroyed = false;
    this.onRenderCountChangeFns = /* @__PURE__ */ new Set();
    this.onAvailableSizeChangeFns = /* @__PURE__ */ new Set();
    this.onScrollStartFns = [];
    this.onScrollStopFns = [];
    this.scrollTimeoutId = 0;
    this.scrollStopDelay = 250;
    /**
     * Number of columns that are fixed at the start
     */
    this.fixedColsStart = 0;
    /**
     * Number of columns that are fixed at the end
     */
    this.fixedColsEnd = 0;
    /**
     * Number of rows that are fixed at the start
     */
    this.fixedRowsStart = 0;
    /**
     * Number of rows that are fixed at the end
     */
    this.fixedRowsEnd = 0;
    this.setScrollStopDelay = (scrollStopDelay) => {
      this.scrollStopDelay = scrollStopDelay;
    };
    this.getRowCount = () => {
      return this.rows;
    };
    this.getColCount = () => {
      return this.cols;
    };
    this.update = (options) => {
      const { rows, cols, rowHeight, colWidth, width, height } = options;
      const widthDefined = typeof width === "number";
      const heightDefined = typeof height === "number";
      const widthChanged = widthDefined && width !== this.width;
      const heightChanged = heightDefined && height !== this.height;
      this.setAvailableSize({ width, height }, { skipUpdateRenderCount: true });
      const rowsDefined = typeof rows === "number";
      const colsDefined = typeof cols === "number";
      const rowsChanged = rowsDefined && rows !== this.rows;
      const colsChanged = colsDefined && cols !== this.cols;
      if (rowsDefined) {
        this.rows = rows;
      }
      if (colsDefined) {
        this.cols = cols;
      }
      const rowHeightDefined = rowHeight != null;
      const colWidthDefined = colWidth != null;
      const rowHeightChanged = rowHeightDefined && rowHeight !== this.rowHeight;
      const colWidthChanged = colWidthDefined && colWidth !== this.colWidth;
      if (rowHeightDefined) {
        this.rowHeight = rowHeight;
      }
      if (colWidthDefined) {
        this.colWidth = colWidth;
      }
      if (false) {
        if (widthChanged) {
          this.debug(
            "New available width %d (size is %d,%d)",
            this.width,
            this.width,
            this.height
          );
        }
        if (heightChanged) {
          this.debug(
            "New available height %d (size is %d,%d)",
            this.height,
            this.width,
            this.height
          );
        }
        if (rowsChanged) {
          this.debug("New rows count: %d", this.rows);
        }
        if (colsChanged) {
          this.debug("New cols count: %d", this.cols);
        }
        if (rowHeightChanged) {
          this.debug("New row size", this.rowHeight);
        }
        if (colWidthChanged) {
          this.debug("New col size", this.colWidth);
        }
      }
      const rowspanDefined = options.rowspan != null;
      const colspanDefined = options.colspan != null;
      const rowspanChanged = rowspanDefined && options.rowspan != this.rowspan;
      const colspanChanged = colspanDefined && options.colspan != this.colspan;
      if (rowspanChanged) {
        this.rowspan = options.rowspan;
      }
      if (colspanChanged) {
        this.colspan = options.colspan;
      }
      const horizontalChange = colsChanged || colWidthChanged || widthChanged || colspanChanged;
      const verticalChange = rowsChanged || rowHeightChanged || heightChanged || rowspanChanged;
      if (horizontalChange || verticalChange) {
        this.updateRenderCount({
          horizontal: horizontalChange,
          vertical: verticalChange
        });
      }
    };
    this.setRowsAndCols = ({ rows, cols }) => {
      const rowsSame = rows === this.rows;
      const colsSame = cols === this.cols;
      this.rows = rows;
      this.cols = cols;
      this.updateRenderCount({
        horizontal: !colsSame,
        vertical: !rowsSame
      });
    };
    this.updateRenderCount = (which = ALL_DIRECTIONS) => {
      this.reset(which);
      this.doUpdateRenderCount(which);
    };
    this.doUpdateRenderCount = (which = ALL_DIRECTIONS) => {
      if (!this.width || !this.height) {
        this.setRenderCount({ horizontal: 0, vertical: 0 });
      }
      this.setRenderCount(this.computeRenderCount(which));
    };
    this.setScrolling = (scrolling) => {
      const prevScrolling = this.scrolling;
      this.scrolling = scrolling;
      if (scrolling) {
        if (this.scrollTimeoutId) {
          clearTimeout(this.scrollTimeoutId);
        }
        this.scrollTimeoutId = setTimeout(() => {
          this.setScrolling(false);
          this.scrollTimeoutId = 0;
        }, this.scrollStopDelay);
      }
      if (scrolling !== prevScrolling) {
        if (scrolling) {
          this.notifyScrollStart();
        } else {
          this.notifyScrollStop();
        }
      }
    };
    this.notifyScrollStart = () => {
      if (this.destroyed) {
        return;
      }
      const fns = this.onScrollStartFns;
      for (let i = 0, len = fns.length; i < len; i++) {
        fns[i]();
      }
    };
    this.notifyScrollStop = () => {
      if (this.destroyed) {
        return;
      }
      const fns = this.onScrollStopFns;
      const scrollPos = this.scrollPosition;
      const range = this.getRenderRange();
      for (let i = 0, len = fns.length; i < len; i++) {
        fns[i](scrollPos, range);
      }
    };
    this.setScrollPosition = (scrollPosition, callback) => {
      this.setScrolling(true);
      const changeHorizontal = scrollPosition.scrollLeft !== this.scrollPosition.scrollLeft;
      const changeVertical = scrollPosition.scrollTop !== this.scrollPosition.scrollTop;
      this.scrollPosition = scrollPosition;
      if (changeHorizontal || changeVertical) {
        callback == null ? void 0 : callback(scrollPosition);
        this.updateRenderRange({
          horizontal: changeHorizontal,
          vertical: changeVertical
        });
        this.notifyScrollChange();
      }
    };
    this.notifyAvailableSizeChange = () => {
      if (this.destroyed) {
        return;
      }
      const fns = this.onAvailableSizeChangeFns;
      const range = this.getAvailableSize();
      fns.forEach((fn) => {
        raf2(() => {
          if (this.destroyed) {
            return;
          }
          if (fns.has(fn)) {
            fn(range);
          }
        });
      });
    };
    this.notifyRenderRangeChange = () => {
      if (this.destroyed) {
        return;
      }
      const fns = this.onRenderRangeChangeFns;
      const range = this.getRenderRange();
      fns.forEach((fn) => {
        raf2(() => {
          if (this.destroyed) {
            return;
          }
          if (fns.has(fn)) {
            fn(range);
          }
        });
      });
    };
    this.notifyVerticalRenderRangeChange = () => {
      if (this.destroyed) {
        return;
      }
      const fns = this.onVerticalRenderRangeChangeFns;
      const range = this.verticalRenderRange;
      fns.forEach((fn) => {
        raf2(() => {
          if (this.destroyed) {
            return;
          }
          if (fns.has(fn)) {
            fn([range.startIndex, range.endIndex]);
          }
        });
      });
    };
    this.notifyHorizontalRenderRangeChange = () => {
      if (this.destroyed) {
        return;
      }
      const fns = this.onHorizontalRenderRangeChangeFns;
      const range = this.horizontalRenderRange;
      fns.forEach((fn) => {
        raf2(() => {
          if (this.destroyed) {
            return;
          }
          if (fns.has(fn)) {
            fn([range.startIndex, range.endIndex]);
          }
        });
      });
    };
    this.computeDirectionalRenderCount = (direction, itemSize, count, theSize) => {
      let renderCount = 0;
      let size = direction === "horizontal" ? theSize.width : theSize.height;
      size -= this.getFixedSize(direction);
      if (typeof itemSize === "function") {
        const sizes = [];
        for (let i = 0; i < count; i++) {
          sizes.push(this.getItemSize(i, direction));
        }
        sizes.sort(SORT_ASC);
        let sum2 = 0;
        for (let i = 0; i < count; i++) {
          sum2 += sizes[i];
          renderCount++;
          if (sum2 > size) {
            break;
          }
        }
        renderCount += 1;
      } else {
        renderCount = (itemSize ? Math.ceil(size / itemSize) : 0) + 1;
      }
      renderCount = Math.min(count, renderCount);
      return renderCount;
    };
    this.isColFixedEnd = (colIndex) => {
      if (!this.fixedColsEnd) {
        return false;
      }
      return colIndex >= this.cols - this.fixedColsEnd;
    };
    this.isColFixedStart = (colIndex) => {
      if (!this.fixedColsStart) {
        return false;
      }
      return colIndex < this.fixedColsStart;
    };
    this.isRowFixedEnd = (rowIndex) => {
      if (!this.fixedRowsEnd) {
        return false;
      }
      return rowIndex >= this.rows - this.fixedRowsEnd;
    };
    this.isRowFixedStart = (rowIndex) => {
      if (!this.fixedRowsStart) {
        return false;
      }
      return rowIndex < this.fixedRowsStart;
    };
    this.isColFixed = (colIndex) => {
      return this.isColFixedStart(colIndex) || this.isColFixedEnd(colIndex);
    };
    this.isRowFixed = (rowIndex) => {
      return this.isRowFixedStart(rowIndex) || this.isRowFixedEnd(rowIndex);
    };
    this.getFixedEndColsWidth = () => {
      if (!this.fixedColsEnd) {
        return 0;
      }
      let sum2 = 0;
      for (let i = this.cols - this.fixedColsEnd; i < this.cols; i++) {
        sum2 += this.getColWidth(i);
      }
      return sum2;
    };
    /**
     * Returns an array of offsets for all cols fixed at the end
     *
     * The order in the array is from leftmost col to the rightmost col
     * The reference for offset is the left side of the table.
     * The offsets take into account the scroll position and return the correct position.
     *
     * The indexes in the returned array are the absolute indexes of the cols, so the returned array is an array with holes
     *
     */
    this.getFixedEndColsOffsets = ({ skipScroll } = { skipScroll: false }) => {
      if (!this.fixedColsEnd) {
        return [];
      }
      const { scrollLeft: scrollLeft2 } = this.scrollPosition;
      const { width } = this.getAvailableSize();
      const offsets = [];
      const widths = [];
      let sum2 = 0;
      for (let colIndex = this.cols - this.fixedColsEnd; colIndex < this.cols; colIndex++) {
        const colWidth = this.getColWidth(colIndex);
        widths.push(colWidth);
        sum2 += colWidth;
      }
      const baseOffset = width - sum2 + (skipScroll ? 0 : scrollLeft2);
      sum2 = 0;
      let index = 0;
      for (let colIndex = this.cols - this.fixedColsEnd; colIndex < this.cols; colIndex++) {
        const offset = baseOffset + sum2;
        offsets[colIndex] = offset;
        sum2 += widths[index];
        index++;
      }
      return offsets;
    };
    /**
     * Returns an array of offsets for all rows fixed at the end
     *
     * The order in the array is from topmost row to the bottom-most row
     * The reference for offset is the top side of the table.
     * The offsets take into account the scroll position and return the correct position.
     *
     * The indexes in the returned array are the absolute indexes of the rows, so the returned array is an array with holes
     *
     */
    this.getFixedEndRowsOffsets = ({ skipScroll } = { skipScroll: false }) => {
      if (!this.fixedRowsEnd) {
        return [];
      }
      const { scrollTop: scrollTop2 } = this.scrollPosition;
      const { height } = this.getAvailableSize();
      const offsets = [];
      const heights = [];
      let sum2 = 0;
      for (let rowIndex = this.rows - this.fixedRowsEnd; rowIndex < this.rows; rowIndex++) {
        const rowHeight = this.getRowHeight(rowIndex);
        heights.push(rowHeight);
        sum2 += rowHeight;
      }
      const baseOffset = height - sum2 + (skipScroll ? 0 : scrollTop2);
      sum2 = 0;
      let index = 0;
      for (let rowIndex = this.rows - this.fixedRowsEnd; rowIndex < this.rows; rowIndex++) {
        const offset = baseOffset + sum2;
        offsets[rowIndex] = offset;
        sum2 += heights[index];
        index++;
      }
      return offsets;
    };
    this.getFixedStartColsWidth = () => {
      if (!this.fixedColsStart) {
        return 0;
      }
      let sum2 = 0;
      for (let i = 0; i < this.fixedColsStart; i++) {
        sum2 += this.getColWidth(i);
      }
      return sum2;
    };
    this.getFixedEndRowsHeight = () => {
      if (!this.fixedRowsEnd) {
        return 0;
      }
      let sum2 = 0;
      for (let i = this.rows - this.fixedRowsEnd; i < this.rows; i++) {
        sum2 += this.getRowHeight(i);
      }
      return sum2;
    };
    this.getFixedStartRowsHeight = () => {
      if (!this.fixedRowsStart) {
        return 0;
      }
      let sum2 = 0;
      for (let i = 0; i < this.fixedRowsStart; i++) {
        sum2 += this.getRowHeight(i);
      }
      return sum2;
    };
    this.computeRenderCount = (which = ALL_DIRECTIONS) => {
      const recomputeHorizontal = which.horizontal;
      const recomputeVertical = which.vertical;
      let horizontalRenderCount = this.horizontalRenderCount || 0;
      let verticalRenderCount = this.verticalRenderCount || 0;
      if (recomputeHorizontal) {
        horizontalRenderCount = this.computeDirectionalRenderCount(
          "horizontal",
          this.colWidth,
          this.cols,
          this.getAvailableSize()
        );
      }
      if (recomputeVertical) {
        verticalRenderCount = this.computeDirectionalRenderCount(
          "vertical",
          this.rowHeight,
          this.rows,
          this.getAvailableSize()
        );
      }
      const result = {
        horizontal: horizontalRenderCount,
        vertical: verticalRenderCount
      };
      return result;
    };
    this.setRenderCount = ({
      horizontal,
      vertical
    }) => {
      if (horizontal === void 0) {
        horizontal = this.horizontalRenderCount;
      }
      if (vertical === void 0) {
        vertical = this.verticalRenderCount;
      }
      const horizontalSame = horizontal === this.horizontalRenderCount;
      const verticalSame = vertical === this.verticalRenderCount;
      if (horizontalSame && verticalSame) {
        return;
      }
      this.horizontalRenderCount = horizontal;
      this.verticalRenderCount = vertical;
      this.updateRenderRange({
        horizontal: !horizontalSame,
        vertical: !verticalSame
      });
      this.notifyRenderCountChange();
    };
    this.updateFixedCells = (config) => {
      if (config.fixedColsStart != this.fixedColsStart) {
        this.fixedColsStart = config.fixedColsStart || 0;
      }
      if (config.fixedColsEnd != this.fixedColsEnd) {
        this.fixedColsEnd = config.fixedColsEnd || 0;
      }
      if (config.fixedRowsStart != this.fixedRowsStart) {
        this.fixedRowsStart = config.fixedRowsStart || 0;
      }
      if (config.fixedRowsEnd != this.fixedRowsEnd) {
        this.fixedRowsEnd = config.fixedRowsEnd || 0;
      }
    };
    this.getFixedCellInfo = () => {
      const { fixedRowsStart, fixedColsStart, fixedRowsEnd, fixedColsEnd } = this;
      return {
        fixedRowsStart,
        fixedColsStart,
        fixedRowsEnd,
        fixedColsEnd
      };
    };
    this.updateRenderRange = (which = ALL_DIRECTIONS) => {
      this.setRenderRange(this.computeRenderRange(which));
    };
    this.getExtraSpanCellsForRange = ({
      horizontal,
      vertical
    }) => {
      const { colspan, rowspan } = this;
      const extraCells = [];
      if (rowspan) {
        const rowStart = vertical.startIndex;
        const colStart = horizontal.startIndex;
        const colEnd = horizontal.endIndex;
        for (let colIndex = colStart; colIndex < colEnd; colIndex++) {
          this.computeItemSpanUpTo(rowStart, colIndex, "vertical");
          const rowspanParent = this.rowspanParent.get(colIndex);
          if (rowspanParent[rowStart] != rowStart) {
            let rowIndex = rowStart;
            while (rowspanParent[rowIndex] != rowIndex) {
              rowIndex--;
            }
            extraCells.push([rowIndex, colIndex]);
          }
        }
      }
      if (colspan) {
        const colStart = horizontal.startIndex;
        const rowStart = vertical.startIndex;
        const rowEnd = vertical.endIndex;
        for (let rowIndex = rowStart; rowIndex < rowEnd; rowIndex++) {
          this.computeItemSpanUpTo(rowIndex, colStart, "horizontal");
          const colspanParent = this.colspanParent.get(rowIndex);
          if (colspanParent[colStart] != colStart) {
            let colIndex = colStart;
            while (colspanParent[colIndex] != colIndex) {
              colIndex--;
            }
            extraCells.push([rowIndex, colIndex]);
          }
        }
      }
      return extraCells;
    };
    this.computeRenderRange = (which = ALL_DIRECTIONS) => {
      const horizontal = which.horizontal ? this.computeDirectionalRenderRange("horizontal") : this.horizontalRenderRange;
      const vertical = which.vertical ? this.computeDirectionalRenderRange("vertical") : this.verticalRenderRange;
      return {
        horizontal,
        vertical,
        extraCells: this.getExtraSpanCellsForRange({ horizontal, vertical })
      };
    };
    this.computeDirectionalRenderRange = (direction) => {
      const renderCount = direction === "horizontal" ? this.horizontalRenderCount : this.verticalRenderCount;
      const count = direction === "horizontal" ? this.cols : this.rows;
      if (!renderCount) {
        return {
          startIndex: 0,
          endIndex: 0
        };
      }
      const fixedStartIndex = (direction === "horizontal" ? this.fixedColsStart : this.fixedRowsStart) || 0;
      let scrollPositionForDirection = direction === "horizontal" ? this.scrollPosition.scrollLeft : this.scrollPosition.scrollTop;
      scrollPositionForDirection += this.getFixedStartSize(direction);
      let startIndex = this.getItemAt(scrollPositionForDirection, direction);
      let endIndex = startIndex + renderCount;
      const theEnd = Math.max(
        fixedStartIndex,
        count - (direction === "horizontal" ? this.fixedColsEnd : this.fixedRowsEnd)
      );
      if (endIndex > theEnd) {
        endIndex = theEnd;
        startIndex = Math.max(fixedStartIndex, endIndex - renderCount);
      }
      return {
        startIndex,
        endIndex
      };
    };
    this.getItemAt = (scrollPos, direction) => {
      const itemSize = direction === "horizontal" ? this.colWidth : this.rowHeight;
      const count = direction === "horizontal" ? this.cols : this.rows;
      if (typeof itemSize !== "function") {
        return Math.min(Math.max(0, Math.floor(scrollPos / itemSize)), count - 1);
      }
      const itemOffsetCache = direction === "horizontal" ? this.colOffsetCache : this.rowOffsetCache;
      const itemSizeCache = direction === "horizontal" ? this.colWidthCache : this.rowHeightCache;
      const lastOffsetIndex = itemOffsetCache.length - 1;
      let lastSizeIndex = itemSizeCache.length - 1;
      let lastOffset = itemOffsetCache[lastOffsetIndex];
      let _prev;
      while (lastOffset < scrollPos) {
        if (lastOffsetIndex >= count) {
          return count - 1;
        }
        lastSizeIndex += 1;
        this.computeCacheFor(lastSizeIndex, direction);
        _prev = lastOffset;
        lastOffset = itemOffsetCache[lastSizeIndex];
        if (_prev === lastOffset && _prev != 0) {
          return count - 1;
        }
      }
      const searchResult = (0, import_binary_search.default)(itemOffsetCache, scrollPos, SORT_ASC);
      if (searchResult >= 0) {
        return searchResult;
      }
      return ~searchResult - 1;
      return 0;
    };
    this.getCellOffset = (rowIndex, colIndex) => {
      return {
        x: this.getItemOffsetFor(colIndex, "horizontal"),
        y: this.getItemOffsetFor(rowIndex, "vertical")
      };
    };
    this.getItemOffsetFor = (itemIndex, direction) => {
      const itemSize = direction === "horizontal" ? this.colWidth : this.rowHeight;
      if (typeof itemSize !== "function") {
        return itemIndex * itemSize;
      }
      const itemOffsetCache = direction === "horizontal" ? this.colOffsetCache : this.rowOffsetCache;
      const itemSizeCache = direction === "horizontal" ? this.colWidthCache : this.rowHeightCache;
      let result = itemOffsetCache[itemIndex];
      if (result == null) {
        let lastSizeIndex = itemSizeCache.length - 1;
        while (lastSizeIndex < itemIndex) {
          lastSizeIndex += 1;
          this.computeCacheFor(lastSizeIndex, direction);
        }
        result = itemOffsetCache[itemIndex];
      }
      return result;
    };
    this.computeCacheFor = (itemIndex, direction) => {
      const itemSizeValueOrFn = direction === "horizontal" ? this.colWidth : this.rowHeight;
      const itemSizeCache = direction === "horizontal" ? this.colWidthCache : this.rowHeightCache;
      const itemOffsetCache = direction === "horizontal" ? this.colOffsetCache : this.rowOffsetCache;
      if (typeof itemSizeValueOrFn !== "function") {
        return;
      }
      const itemSize = itemSizeValueOrFn(itemIndex);
      itemSizeCache[itemIndex] = itemSize;
      if (itemIndex > 0) {
        const prevOffset = itemOffsetCache[itemIndex - 1];
        const prevSize = itemSizeCache[itemIndex - 1];
        if (prevOffset == null) {
          console.error(
            `Offset was not available for ${direction === "horizontal" ? "col" : "row"} ${itemIndex - 1}`
          );
        }
        if (prevSize == null) {
          console.error(
            `Size was not available for ${direction === "horizontal" ? "col" : "row"} ${itemIndex - 1}`
          );
        }
        const offset = prevOffset + prevSize;
        itemOffsetCache[itemIndex] = offset;
      }
    };
    this.computeItemSpanUpTo = (rowIndex, colIndex, direction) => {
      const itemIndex = direction === "horizontal" ? colIndex : rowIndex;
      const otherIndex = direction === "horizontal" ? rowIndex : colIndex;
      const count = direction === "horizontal" ? this.cols : this.rows;
      const itemSpan = direction === "horizontal" ? this.colspan : this.rowspan;
      if (!itemSpan) {
        return;
      }
      const directionCache = direction === "horizontal" ? this.colspanParent : this.rowspanParent;
      if (!directionCache.has(otherIndex)) {
        directionCache.set(otherIndex, []);
      }
      const directionSpanResult = direction === "horizontal" ? this.colspanValue : this.rowspanValue;
      if (!directionSpanResult.has(otherIndex)) {
        directionSpanResult.set(otherIndex, []);
      }
      const cache = directionCache.get(otherIndex);
      const spanResultArr = directionSpanResult.get(otherIndex);
      if (cache[itemIndex] === void 0) {
        let i = cache.length;
        const lastIndex = count ? Math.min(itemIndex, count - 1) : 0;
        const cell = { rowIndex, colIndex };
        for (; i <= lastIndex; i++) {
          if (cache[i] === void 0) {
            cell[direction === "horizontal" ? "colIndex" : "rowIndex"] = i;
            let spanValue = itemSpan(cell);
            if (false) {
              this.debug(
                `${direction === "horizontal" ? "colspan" : "rowspan"} cannot be less than 1 - got %d for index %d`,
                spanValue,
                i
              );
            }
            cache[i] = i;
            spanResultArr[i] = spanValue;
            let spannedItemIndex = i;
            while (spanValue > 1) {
              spannedItemIndex += 1;
              cache[spannedItemIndex] = i;
              spanResultArr[spannedItemIndex] = 0;
              spanValue -= 1;
            }
          }
        }
      }
    };
    this.getCellSpan = (rowIndex, colIndex, direction) => {
      const itemSpan = direction === "horizontal" ? this.colspan : this.rowspan;
      const itemIndex = direction === "horizontal" ? colIndex : rowIndex;
      const otherIndex = direction === "horizontal" ? rowIndex : colIndex;
      if (!itemSpan) {
        return 1;
      }
      const directionSpanValue = direction === "horizontal" ? this.colspanValue : this.rowspanValue;
      let itemSpanValue = directionSpanValue.get(otherIndex);
      if (!itemSpanValue || itemSpanValue[itemIndex] === void 0) {
        this.computeItemSpanUpTo(rowIndex, colIndex, direction);
      }
      if (!itemSpanValue) {
        itemSpanValue = directionSpanValue.get(otherIndex);
      }
      return itemSpanValue[itemIndex] || 1;
    };
    this.getRowspan = (rowIndex, colIndex) => {
      return this.getCellSpan(rowIndex, colIndex, "vertical");
    };
    this.getColspan = (rowIndex, colIndex) => {
      return this.getCellSpan(rowIndex, colIndex, "horizontal");
    };
    this.getRowspanParent = (rowIndex, colIndex) => {
      return this.getItemSpanParent(rowIndex, colIndex, "vertical");
    };
    this.getColspanParent = (rowIndex, colIndex) => {
      return this.getItemSpanParent(rowIndex, colIndex, "horizontal");
    };
    this.getItemSpanParent = (rowIndex, colIndex, direction) => {
      const itemSpan = direction == "horizontal" ? this.colspan : this.rowspan;
      const itemIndex = direction === "horizontal" ? colIndex : rowIndex;
      const otherIndex = direction === "horizontal" ? rowIndex : colIndex;
      if (!itemSpan) {
        return itemIndex;
      }
      const directionSpanParent = direction === "horizontal" ? this.colspanParent : this.rowspanParent;
      let itemSpanParent = directionSpanParent.get(otherIndex);
      if (!itemSpanParent || itemSpanParent[itemIndex] === void 0) {
        this.computeItemSpanUpTo(rowIndex, colIndex, direction);
      }
      if (!itemSpanParent) {
        itemSpanParent = directionSpanParent.get(otherIndex);
      }
      return itemSpanParent[itemIndex];
    };
    this.getRowHeightWithSpan = (rowIndex, colIndex, rowspan) => {
      return this.getItemSizeWithSpan(rowIndex, colIndex, rowspan, "vertical");
    };
    this.getColWidthWithSpan = (rowIndex, colIndex, colspan) => {
      return this.getItemSizeWithSpan(rowIndex, colIndex, colspan, "horizontal");
    };
    this.getItemSizeWithSpan = (rowIndex, colIndex, itemSpan, direction) => {
      let itemIndex = direction === "horizontal" ? colIndex : rowIndex;
      let itemSize = this.getItemSize(itemIndex, direction);
      while (itemSpan > 1) {
        itemIndex += 1;
        itemSpan -= 1;
        itemSize += this.getItemSize(itemIndex, direction);
      }
      return itemSize;
    };
    this.getRowHeight = (rowIndex) => {
      return this.getItemSize(rowIndex, "vertical");
    };
    this.getColWidth = (colIndex) => {
      return this.getItemSize(colIndex, "horizontal");
    };
    /**
     * For now, this doesn't take into account the row/colspan, and it's okay not to
     * @param itemIndex
     * @returns the size of the specified item
     */
    this.getItemSize = (itemIndex, direction) => {
      const count = direction === "horizontal" ? this.cols : this.rows;
      const itemSize = direction === "horizontal" ? this.colWidth : this.rowHeight;
      if (typeof itemSize !== "function") {
        return itemSize;
      }
      let cachedSize = this.getItemSizeCacheFor(itemIndex, direction);
      const itemSizeCache = direction === "horizontal" ? this.colWidthCache : this.rowHeightCache;
      if (cachedSize === void 0) {
        let i = itemSizeCache.length;
        const lastIndex = Math.min(itemIndex, count - 1);
        for (; i <= lastIndex; i++) {
          this.computeCacheFor(i, direction);
        }
        cachedSize = this.getItemSizeCacheFor(itemIndex, direction);
      }
      return cachedSize;
    };
    this.getTotalSize = () => {
      return {
        height: this.getTotalSizeFor("vertical"),
        width: this.getTotalSizeFor("horizontal")
      };
    };
    this.getTotalSizeFor = (direction) => {
      const count = direction === "horizontal" ? this.cols : this.rows;
      const itemSize = direction === "horizontal" ? this.colWidth : this.rowHeight;
      const totalSize = direction === "horizontal" ? this.horizontalTotalSize : this.verticalTotalSize;
      if (typeof itemSize !== "function") {
        return itemSize * count;
      }
      if (totalSize !== 0 && !isNaN(totalSize)) {
        return totalSize;
      }
      const itemOffsetCache = direction === "horizontal" ? this.colOffsetCache : this.rowOffsetCache;
      const lastItemSize = count ? this.getItemSize(count - 1, direction) : 0;
      const lastItemOffset = count ? itemOffsetCache[count - 1] : 0;
      const result = lastItemSize + lastItemOffset;
      if (direction === "horizontal") {
        this.horizontalTotalSize = result;
      } else {
        this.verticalTotalSize = result;
      }
      return result;
    };
    this.setRenderRange = ({
      horizontal,
      vertical,
      extraCells
    }) => {
      let horizontalChange = false;
      if (horizontal.startIndex !== this.horizontalRenderRange.startIndex || horizontal.endIndex !== this.horizontalRenderRange.endIndex) {
        this.horizontalRenderRange = horizontal;
        horizontalChange = true;
      }
      let verticalChange = false;
      if (vertical.startIndex !== this.verticalRenderRange.startIndex || vertical.endIndex !== this.verticalRenderRange.endIndex) {
        this.verticalRenderRange = vertical;
        verticalChange = true;
      }
      this.extraSpanCells = extraCells || [];
      if (horizontalChange || verticalChange) {
        this.notifyRenderRangeChange();
      }
      if (verticalChange) {
        this.notifyVerticalRenderRangeChange();
      }
      if (horizontalChange) {
        this.notifyHorizontalRenderRangeChange();
      }
    };
    this.getRenderRangeCellCount = getRenderRangeCellCount;
    this.getExtraCells = () => {
      return this.extraSpanCells;
    };
    this.getScrollPosition = () => {
      return this.scrollPosition;
    };
    this.getRenderRange = () => {
      return {
        start: [
          this.verticalRenderRange.startIndex,
          this.horizontalRenderRange.startIndex
        ],
        end: [
          this.verticalRenderRange.endIndex,
          this.horizontalRenderRange.endIndex
        ]
      };
    };
    this.onScroll = (fn) => {
      this.onScrollFns.push(fn);
      return () => {
        this.onScrollFns = this.onScrollFns.filter((f) => f !== fn);
      };
    };
    this.onScrollStart = (fn) => {
      this.onScrollStartFns.push(fn);
      return () => {
        this.onScrollStartFns = this.onScrollStartFns.filter((f) => f !== fn);
      };
    };
    this.onScrollStop = (fn) => {
      this.onScrollStopFns.push(fn);
      return () => {
        this.onScrollStopFns = this.onScrollStopFns.filter((f) => f !== fn);
      };
    };
    this.onRenderRangeChange = (fn) => {
      this.onRenderRangeChangeFns.add(fn);
      return () => {
        this.onRenderRangeChangeFns.delete(fn);
      };
    };
    this.onVerticalRenderRangeChange = (fn) => {
      this.onVerticalRenderRangeChangeFns.add(fn);
      return () => {
        this.onVerticalRenderRangeChangeFns.delete(fn);
      };
    };
    this.onHorizontalRenderRangeChange = (fn) => {
      this.onHorizontalRenderRangeChangeFns.add(fn);
      return () => {
        this.onHorizontalRenderRangeChangeFns.delete(fn);
      };
    };
    this.onRenderCountChange = (fn) => {
      this.onRenderCountChangeFns.add(fn);
      return () => {
        this.onRenderCountChangeFns.delete(fn);
      };
    };
    this.onAvailableSizeChange = (fn) => {
      this.onAvailableSizeChangeFns.add(fn);
      return () => {
        this.onAvailableSizeChangeFns.delete(fn);
      };
    };
    this.onDestroy = (fn) => {
      this.onDestroyFns.push(fn);
      return () => {
        this.onDestroyFns = this.onDestroyFns.filter((f) => f !== fn);
      };
    };
    this.getAvailableSize = () => {
      return {
        width: this.width,
        height: this.height
      };
    };
    this.destroy = () => {
      if (this.destroyed) {
        return;
      }
      this.notifyDestroy();
      this.reset();
      this.rowspanParent.clear();
      this.colspanParent.clear();
      this.destroyed = true;
      this.onDestroyFns = [];
      this.onScrollFns = [];
      this.onScrollStartFns = [];
      this.onScrollStopFns = [];
      this.onRenderCountChangeFns = /* @__PURE__ */ new Set();
      this.onRenderRangeChangeFns = /* @__PURE__ */ new Set();
      this.onVerticalRenderRangeChangeFns = /* @__PURE__ */ new Set();
      this.onHorizontalRenderRangeChangeFns = /* @__PURE__ */ new Set();
    };
    this.reset();
  }
  reset(which = ALL_DIRECTIONS) {
    if (which.vertical) {
      this.resetVertical();
    }
    if (which.horizontal) {
      this.resetHorizontal();
    }
    this.extraSpanCells = [];
  }
  resetVertical() {
    this.rowspanParent = /* @__PURE__ */ new Map();
    this.rowspanValue = /* @__PURE__ */ new Map();
    this.rowHeightCache = [];
    this.rowOffsetCache = [0];
    this.verticalRenderCount = void 0;
    this.verticalTotalSize = 0;
  }
  resetHorizontal() {
    this.colspanParent = /* @__PURE__ */ new Map();
    this.colspanValue = /* @__PURE__ */ new Map();
    this.colWidthCache = [];
    this.colOffsetCache = [0];
    this.horizontalRenderCount = void 0;
    this.horizontalTotalSize = 0;
  }
  setRowAndColumnSizes({
    rowHeight,
    colWidth
  }) {
    const horizontalSame = colWidth === this.colWidth;
    const verticalSame = rowHeight === this.rowHeight;
    this.rowHeight = rowHeight;
    this.colWidth = colWidth;
    this.updateRenderCount({
      horizontal: !horizontalSame,
      vertical: !verticalSame
    });
  }
  setAvailableSize(size, config) {
    let { width, height } = size;
    width = width != null ? width : this.width;
    height = height != null ? height : this.height;
    const widthSame = width === this.width;
    const heightSame = height === this.height;
    if (widthSame && heightSame) {
      return;
    }
    this.width = width;
    this.height = height;
    if (false) {
      this.debug(
        "New available size: width %d, height %d",
        this.width,
        this.height
      );
    }
    this.notifyAvailableSizeChange();
    if (config && config.skipUpdateRenderCount) {
      return;
    }
    this.updateRenderCount({ horizontal: !widthSame, vertical: !heightSame });
  }
  get scrollTopMax() {
    const totalSize = this.getTotalSize();
    return totalSize.height - this.height;
  }
  get scrollLeftMax() {
    const totalSize = this.getTotalSize();
    return totalSize.width - this.width;
  }
  notifyScrollChange() {
    if (this.destroyed) {
      return;
    }
    const { scrollPosition } = this;
    const fns = this.onScrollFns;
    for (let i = 0, len = fns.length; i < len; i++) {
      fns[i](scrollPosition);
    }
  }
  getFixedSize(direction) {
    return direction === "horizontal" ? this.getFixedStartColsWidth() + this.getFixedEndColsWidth() : this.getFixedStartRowsHeight() + this.getFixedEndRowsHeight();
  }
  getFixedStartSize(direction) {
    return direction === "horizontal" ? this.getFixedStartColsWidth() : this.getFixedStartRowsHeight();
  }
  getFixedEndSize(direction) {
    return direction === "horizontal" ? this.getFixedEndColsWidth() : this.getFixedEndRowsHeight();
  }
  notifyRenderCountChange() {
    if (this.destroyed) {
      return;
    }
    const { horizontalRenderCount, verticalRenderCount } = this;
    const renderCount = {
      horizontal: horizontalRenderCount,
      vertical: verticalRenderCount
    };
    const fns = this.onRenderCountChangeFns;
    fns.forEach((fn) => {
      raf2(() => {
        if (this.destroyed) {
          return;
        }
        if (fns.has(fn)) {
          fn(renderCount);
        }
      });
    });
  }
  getItemSizeCacheFor(itemIndex, direction) {
    return (direction === "horizontal" ? this.colWidthCache : this.rowHeightCache)[itemIndex];
  }
  notifyDestroy() {
    const fns = this.onDestroyFns;
    for (let i = 0, len = fns.length; i < len; i++) {
      fns[i]();
    }
  }
};

// src/components/HeadlessTable/MappedCells.ts
init_esm_shims();

// src/utils/DeepMap/index.ts
init_esm_shims();

// src/utils/DeepMap/once.ts
init_esm_shims();
function once(fn) {
  let called = false;
  let result = null;
  const onceFn = () => {
    if (called) {
      return result;
    }
    called = true;
    result = fn();
    return result;
  };
  return onceFn;
}

// src/utils/DeepMap/sortAscending.ts
init_esm_shims();
var sortAscending = (a, b) => a - b;

// src/utils/DeepMap/index.ts
var SORT_ASC_REVISION = (p1, p2) => sortAscending(p1.revision, p2.revision);
var DeepMap = class {
  constructor(initial) {
    this.map = /* @__PURE__ */ new Map();
    this.length = 0;
    this.revision = 0;
    this.emptyKey = Symbol("emptyKey");
    this.visit = (fn) => {
      this.map.forEach((_, k) => this.visitKey(k, this.map, [], fn));
    };
    this.visitDepthFirst = (fn) => {
      this.visitWithNext([], fn);
    };
    this.visitWithNext = (parentKeys, fn, currentMap = this.map, depthLimit, skipSelfValue) => {
      if (!currentMap) {
        return;
      }
      let i = 0;
      const hasEmptyKey = currentMap.has(this.emptyKey);
      let allowEmptyKey = skipSelfValue ? false : true;
      if (depthLimit !== void 0) {
        if (depthLimit < 0) {
          return;
        }
        depthLimit--;
      }
      const iterator = (_, key) => {
        const pair = currentMap.get(key);
        if (!pair) {
          return;
        }
        const { map: map2 } = pair;
        const isEmptyKey = key === this.emptyKey;
        if (isEmptyKey && !allowEmptyKey) {
          return;
        }
        const keys = isEmptyKey ? [] : [...parentKeys, key];
        let next = map2 ? () => this.visitWithNext(
          keys,
          fn,
          map2,
          depthLimit !== void 0 ? depthLimit - 1 : void 0
        ) : void 0;
        if (pair.hasOwnProperty("value")) {
          fn(pair.value, keys, i, next);
          i++;
        } else {
          next == null ? void 0 : next();
        }
      };
      if (hasEmptyKey) {
        iterator(void 0, this.emptyKey);
        allowEmptyKey = false;
        i = 0;
      }
      currentMap.forEach(iterator);
    };
    this.fill(initial);
  }
  static clone(map2) {
    const clone = new DeepMap();
    map2.visit((pair, keys) => {
      clone.set(keys, pair.value);
    });
    return clone;
  }
  fill(initial) {
    if (initial) {
      initial.forEach((entry) => {
        const [keys, value] = entry;
        this.set(keys, value);
      });
    }
  }
  getValuesStartingWith(keys, excludeSelf, depthLimit) {
    const result = [];
    this.getStartingWith(
      keys,
      (_keys, value) => {
        result.push(value);
      },
      excludeSelf,
      depthLimit
    );
    return result;
  }
  getKeysStartingWith(keys, excludeSelf, depthLimit) {
    const result = [];
    this.getStartingWith(
      keys,
      (keys2) => {
        result.push(keys2);
      },
      excludeSelf,
      depthLimit
    );
    return result;
  }
  getStartingWith(keys, fn, excludeSelf, depthLimit) {
    let currentMap = this.map;
    let pair;
    let stop = false;
    if (keys.length) {
      for (let i = 0, len = keys.length; i < len; i++) {
        const key = keys[i];
        pair = currentMap.get(key);
        if (!pair || !pair.map) {
          stop = true;
          if (i === len - 1) {
            stop = true;
            break;
          } else {
            return;
          }
        }
        currentMap = pair.map;
      }
    }
    if (pair && pair.value !== void 0) {
      if (!excludeSelf) {
        fn(keys, pair.value);
      }
    }
    if (stop) {
      return;
    }
    this.visitWithNext(
      keys,
      (value, keys2, _i, next) => {
        fn(keys2, value);
        next == null ? void 0 : next();
      },
      currentMap,
      depthLimit,
      excludeSelf
    );
  }
  getMapAt(keys) {
    let currentMap = this.map;
    let pair;
    if (!keys.length) {
      return this.map;
    }
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      pair = currentMap.get(key);
      if (!pair || !pair.map) {
        return void 0;
      }
      currentMap = pair.map;
    }
    return currentMap;
  }
  getAllChildrenSizeFor(keys) {
    let currentMap = this.map;
    let pair;
    if (!keys.length) {
      return this.length;
    }
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      pair = currentMap.get(key);
      if (!pair || !pair.map) {
        return 0;
      }
      currentMap = pair.map;
    }
    return pair.length;
  }
  getDirectChildrenSizeFor(keys) {
    var _a;
    let currentMap = this.map;
    if (!keys.length) {
      keys = [this.emptyKey];
    }
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const last = i === len - 1;
      const pair = currentMap.get(key);
      if (!pair || !pair.map) {
        return 0;
      }
      currentMap = pair.map;
      if (last) {
        return (_a = currentMap == null ? void 0 : currentMap.size) != null ? _a : 0;
      }
    }
    return 0;
  }
  set(keys, value) {
    let currentMap = this.map;
    if (!keys.length) {
      keys = [this.emptyKey];
    }
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const last = i === len - 1;
      const pair = currentMap.get(key) || {
        length: 0
      };
      if (last) {
        pair.revision = this.revision++;
        pair.value = value;
        currentMap.set(key, pair);
        this.length++;
      } else {
        if (!pair.map) {
          pair.map = /* @__PURE__ */ new Map();
          currentMap.set(key, pair);
        }
        pair.length++;
        currentMap = pair.map;
      }
    }
    return this;
  }
  get(keys) {
    let currentMap = this.map;
    if (!keys.length) {
      keys = [this.emptyKey];
    }
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const last = i === len - 1;
      const pair = currentMap.get(key);
      if (last) {
        return pair ? pair.value : void 0;
      } else {
        if (!pair || !pair.map) {
          return;
        }
        currentMap = pair.map;
      }
    }
    return;
  }
  get size() {
    return this.length;
  }
  clear() {
    const clearMap = (map2) => {
      map2.forEach((value, _key) => {
        const { map: map3 } = value;
        if (map3) {
          clearMap(map3);
        }
      });
      map2.clear();
    };
    clearMap(this.map);
    this.length = 0;
    this.revision = 0;
  }
  delete(keys) {
    let currentMap = this.map;
    if (!keys.length) {
      keys = [this.emptyKey];
    } else {
      keys = [...keys];
    }
    const maps = [currentMap];
    const pairs = [];
    let result = false;
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const last = i === len - 1;
      const pair = currentMap.get(key);
      if (last) {
        if (pair) {
          if (pair.hasOwnProperty("value")) {
            delete pair.value;
            delete pair.revision;
            result = true;
            pairs.forEach((pair2) => {
              pair2.length--;
            });
            this.length--;
          }
          if (pair.map && pair.map.size === 0) {
            delete pair.map;
          }
          if (!pair.map) {
            currentMap.delete(key);
          }
        }
        break;
      } else {
        if (!pair || !pair.map) {
          result = false;
          break;
        }
        pairs.push(pair);
        currentMap = pair.map;
        maps.push(currentMap);
      }
    }
    while (maps.length) {
      const map2 = maps.pop();
      const keysLen = keys.length;
      keys.pop();
      if (keysLen > 0 && (map2 == null ? void 0 : map2.size) === 0) {
        const parentMap = maps[maps.length - 1];
        const parentKey = keys[keys.length - 1];
        const pair = parentMap == null ? void 0 : parentMap.get(parentKey);
        if (pair) {
          delete pair.map;
          if (!pair.hasOwnProperty("value")) {
            parentMap.delete(parentKey);
          }
        }
      }
    }
    return result;
  }
  has(keys) {
    let currentMap = this.map;
    if (!keys.length) {
      keys = [this.emptyKey];
    }
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const last = i === len - 1;
      const pair = currentMap.get(key);
      if (last) {
        return pair ? pair.hasOwnProperty("value") : false;
      } else {
        if (!pair || !pair.map) {
          return false;
        }
        currentMap = pair.map;
      }
    }
    return false;
  }
  visitKey(key, currentMap, parentKeys, fn) {
    const pair = currentMap.get(key);
    if (!pair) {
      return;
    }
    const { map: map2 } = pair;
    const keys = key === this.emptyKey ? [] : [...parentKeys, key];
    const next = once(() => {
      if (map2) {
        map2.forEach((_, k) => {
          this.visitKey(k, map2, keys, fn);
        });
      }
    });
    if (pair.hasOwnProperty("value")) {
      fn(pair, keys, next);
    }
    next();
  }
  getArray(fn) {
    const result = [];
    this.visit((pair, keys) => {
      const res = fn(__spreadProps(__spreadValues({}, pair), { keys }));
      if (keys.length === 0) {
        result.splice(0, 0, res);
      } else {
        result.push(res);
      }
    });
    return result;
  }
  valuesAt(keys) {
    const map2 = this.getMapAt(keys);
    if (!map2) {
      return [];
    }
    const result = [];
    map2.forEach((bag) => {
      if (bag.value !== void 0) {
        result.push(bag.value);
      }
    });
    return result;
  }
  values() {
    return this.sortedIterator((pair) => pair.value);
  }
  keys() {
    const keys = this.sortedIterator((pair) => pair.keys);
    return keys;
  }
  entries() {
    return this.sortedIterator((pair) => [
      pair.keys,
      pair.value
    ]);
  }
  topDownEntries() {
    return this.getArray((pair) => [
      pair.keys,
      pair.value
    ]);
  }
  topDownKeys() {
    return this.getArray((pair) => pair.keys);
  }
  topDownValues() {
    return this.getArray((pair) => pair.value);
  }
  sortedIterator(fn) {
    const result = [];
    this.visit((pair, keys) => {
      result.push(__spreadProps(__spreadValues({}, pair), { keys }));
    });
    result.sort(SORT_ASC_REVISION);
    function* makeIterator() {
      for (let i = 0, len = result.length; i < len; i++) {
        yield fn(result[i]);
      }
    }
    return makeIterator();
  }
  // private iterator<ReturnType>(
  //   fn: (pair: Pair<KeyType, ValueType> & { keys: KeyType[] }) => ReturnType,
  // ) {
  //   const result: (Pair<KeyType, ValueType> & { keys: KeyType[] })[] = [];
  //   this.visit((pair, keys) => {
  //     result.push({ ...pair, keys });
  //   });
  //   function* makeIterator() {
  //     for (let i = 0, len = result.length; i < len; i++) {
  //       yield fn(result[i]);
  //     }
  //   }
  //   return makeIterator();
  // }
};

// src/components/HeadlessTable/MappedCells.ts
var MappedCells = class extends Logger {
  constructor() {
    super(`MappedCells`);
    this.getElementFromListForColumn = (elementsOutsideItemRange, colIndex) => {
      const { elementIndexToCell } = this;
      const last = elementsOutsideItemRange.length - 1;
      for (let i = last; i >= 0; i--) {
        const elementIndex = elementsOutsideItemRange[i];
        const cell = elementIndexToCell[elementIndex];
        if (cell && cell[1] === colIndex) {
          if (i === last) {
            return elementsOutsideItemRange.pop();
          }
          elementsOutsideItemRange.splice(i, 1);
          return elementIndex;
        }
      }
      return elementsOutsideItemRange.pop();
    };
    /**
     * Retrieves the elements that contain rendered cells that are outside
     * of the specified range
     *
     * @param start in [rowIndex, colIndex] format - represents the topmost-leftmost cell visible of the render range
     * @param end in [rowIndex, colIndex] format - represents the bottom-right corner of the visible range. The end is not inclusive,
     * so the last visible cell will be [rowIndex-1, colIndex-1]
     *
     * @returns an array of element indexes that are outside the specified range
     */
    this.getElementsOutsideRenderRange = (range) => {
      const { start, end } = range;
      const [startRow, startCol] = start;
      const [endRow, endCol] = end;
      const result = [];
      for (let elementIndex = 0, len = this.elementIndexToCell.length; elementIndex < len; elementIndex++) {
        const entry = this.elementIndexToCell[elementIndex];
        if (!entry) {
          continue;
        }
        const [rowIndex, colIndex] = entry;
        const rowBefore = rowIndex < startRow;
        const rowAfter = rowIndex >= endRow;
        const colBefore = colIndex < startCol;
        const colAfter = colIndex >= endCol;
        const outsideRenderRange = rowBefore || rowAfter || colBefore || colAfter;
        if (outsideRenderRange) {
          result.push(elementIndex);
        }
      }
      return result;
    };
    this.isCellRendered = (rowIndex, columnIndex) => {
      return this.cellToElementIndex.has([rowIndex, columnIndex]);
    };
    this.isElementRendered = (elementIndex) => {
      return !!this.elementIndexToCell[elementIndex];
    };
    this.getElementsForRowIndex = (rowIndex) => {
      return this.cellToElementIndex.getValuesStartingWith([rowIndex]);
    };
    this.getRenderedNodeAtElement = (elementIndex) => {
      return this.renderedElements[elementIndex] || null;
    };
    this.getRenderedCellAtElement = (elementIndex) => {
      const cell = this.elementIndexToCell[elementIndex];
      return cell || null;
    };
    this.getRenderedNodeForCell = (rowIndex, columnIndex) => {
      const elementIndex = this.cellToElementIndex.get([rowIndex, columnIndex]);
      return elementIndex != null ? this.renderedElements[elementIndex] || null : null;
    };
    this.getElementIndexForCell = (rowIndex, columnIndex) => {
      const elementIndex = this.cellToElementIndex.get([rowIndex, columnIndex]);
      return elementIndex != null ? elementIndex : null;
    };
    this.renderCellAtElement = (rowIndex, colIndex, elementIndex, renderNode) => {
      if (false) {
        this.debug(
          `Render cell ${rowIndex},${colIndex} at element ${elementIndex}`
        );
      }
      const key = [rowIndex, colIndex];
      const currentCell = this.elementIndexToCell[elementIndex];
      if (currentCell) {
        this.cellToElementIndex.delete([currentCell[0], currentCell[1]]);
      }
      if (renderNode) {
        this.renderedElements[elementIndex] = renderNode;
      }
      this.elementIndexToCell[elementIndex] = [rowIndex, colIndex];
      this.cellToElementIndex.set(key, elementIndex);
    };
    this.discardCell = (rowIndex, colIndex) => {
      const key = [rowIndex, colIndex];
      const elementIndex = this.cellToElementIndex.get(key);
      if (elementIndex != null) {
        this.renderedElements[elementIndex] = null;
        this.elementIndexToCell[elementIndex] = null;
        this.cellToElementIndex.delete(key);
      }
    };
    this.discardElement = (elementIndex) => {
      const cell = this.elementIndexToCell[elementIndex];
      if (cell) {
        const key = [cell[0], cell[1]];
        this.renderedElements[elementIndex] = null;
        this.elementIndexToCell[elementIndex] = null;
        this.cellToElementIndex.delete(key);
        return cell;
      }
      return null;
    };
    this.discardElementsStartingWith = (elIndex, callback) => {
      let discardedCell = null;
      let oneDiscarded = false;
      if (elIndex < this.elementIndexToCell.length) {
        for (let elementIndex = elIndex, len = this.elementIndexToCell.length; elementIndex < len; elementIndex++) {
          discardedCell = this.discardElement(elementIndex);
          if (discardedCell) {
            oneDiscarded = true;
          }
          if (callback) {
            callback(elementIndex, discardedCell);
          }
        }
        this.elementIndexToCell.length = elIndex;
        this.renderedElements.length = elIndex;
      }
      return oneDiscarded;
    };
    this.init();
  }
  init() {
    this.elementIndexToCell = [];
    this.cellToElementIndex = new DeepMap();
    this.renderedElements = [];
  }
  reset() {
    this.init();
  }
  destroy() {
    this.elementIndexToCell = [];
    this.cellToElementIndex.clear();
    this.renderedElements = [];
  }
};

// src/components/HeadlessTable/ReactHeadlessTableRenderer.tsx
var ITEM_POSITION_WITH_TRANSFORM = true;
var currentColumnTransformY = stripVar(InternalVars.currentColumnTransformY);
var scrollTopCSSVar = stripVar(InternalVars.scrollTop);
var columnOffsetAtIndex2 = stripVar(InternalVars.columnOffsetAtIndex);
var columnOffsetAtIndexWhileReordering2 = stripVar(
  InternalVars.columnOffsetAtIndexWhileReordering
);
var ReactHeadlessTableRenderer = class extends Logger {
  constructor(brain) {
    super("ReactHeadlessTableRenderer");
    this.destroyed = false;
    this.scrolling = false;
    this.cellHoverClassNames = [];
    this.name = "";
    this.itemDOMElements = [];
    this.itemDOMRefs = [];
    this.updaters = [];
    this.items = [];
    this.currentHoveredRow = -1;
    this.hoverRowUpdatesInProgress = /* @__PURE__ */ new Map();
    this.infiniteNode = null;
    this.setTransform = (element, _rowIndex, colIndex, {
      //@ts-ignore
      x,
      y,
      //@ts-ignore
      scrollLeft: scrollLeft2,
      scrollTop: scrollTop2
    }, zIndex2) => {
      const columnOffsetX = `${columnOffsetAtIndex2}-${colIndex}`;
      const columnOffsetXWhileReordering = `${columnOffsetAtIndexWhileReordering2}-${colIndex}`;
      element.style.setProperty(
        currentColumnTransformY,
        scrollTop2 ? `calc( ${y}px + var(${scrollTopCSSVar}) )` : `${y}px`
      );
      element.style.transform = `translate3d(var(${columnOffsetXWhileReordering}, var(${columnOffsetX})), ${InternalVars.currentColumnTransformY}, 0)`;
      if (zIndex2 != null) {
      }
    };
    this.getFullyVisibleRowsRange = () => {
      let {
        start: [startRow],
        end: [endRow]
      } = this.brain.getRenderRange();
      while (!this.isRowFullyVisible(startRow)) {
        startRow++;
        if (startRow === endRow) {
          return null;
        }
      }
      while (!this.isRowFullyVisible(endRow)) {
        endRow--;
        if (endRow === startRow) {
          return null;
        }
      }
      return { start: startRow, end: endRow };
    };
    this.getScrollPositionForScrollRowIntoView = (rowIndex, config = { offset: 0 }) => {
      if (this.destroyed) {
        return null;
      }
      const { brain } = this;
      const scrollPosition = brain.getScrollPosition();
      let { scrollAdjustPosition, offset = 0 } = config;
      if (this.isRowFullyVisible(rowIndex) && !scrollAdjustPosition) {
        return scrollPosition;
      }
      const rowOffset = brain.getItemOffsetFor(rowIndex, "vertical");
      const rowHeight = brain.getItemSize(rowIndex, "vertical");
      const fixedStartRowsHeight = brain.getFixedStartRowsHeight();
      const fixedEndRowsHeight = brain.getFixedEndRowsHeight();
      const top2 = scrollPosition.scrollTop;
      const availableSize = brain.getAvailableSize();
      if (!availableSize.height) {
        return null;
      }
      const bottom = top2 + availableSize.height;
      if (!scrollAdjustPosition) {
        scrollAdjustPosition = rowOffset > bottom - fixedEndRowsHeight ? "end" : rowOffset < top2 + fixedStartRowsHeight ? "start" : "end";
      }
      let scrollTop2 = scrollPosition.scrollTop;
      if (scrollAdjustPosition === "center") {
        scrollTop2 = rowOffset - Math.floor(
          (brain.getAvailableSize().height - fixedStartRowsHeight - fixedEndRowsHeight) / 2
        );
      } else if (scrollAdjustPosition === "start") {
        offset = -offset;
        scrollTop2 += rowOffset - top2 + offset - fixedStartRowsHeight;
      } else {
        offset += rowHeight;
        scrollTop2 += rowOffset - bottom + offset + fixedEndRowsHeight;
      }
      return __spreadProps(__spreadValues({}, scrollPosition), {
        scrollTop: scrollTop2
      });
    };
    this.getScrollPositionForScrollColumnIntoView = (colIndex, config = { offset: 0 }) => {
      if (this.destroyed) {
        return null;
      }
      const { brain } = this;
      const scrollPosition = brain.getScrollPosition();
      let { scrollAdjustPosition, offset = 0 } = config;
      if (this.isColumnFullyVisible(colIndex) && !scrollAdjustPosition) {
        return scrollPosition;
      }
      const colOffset = brain.getItemOffsetFor(colIndex, "horizontal");
      const colWidth = brain.getItemSize(colIndex, "horizontal");
      const fixedStartColsWidth = brain.getFixedStartColsWidth();
      const fixedEndColsWidth = brain.getFixedStartColsWidth();
      const left2 = scrollPosition.scrollLeft;
      const availableSize = brain.getAvailableSize();
      if (!availableSize.width) {
        return null;
      }
      const right = left2 + availableSize.width;
      if (!scrollAdjustPosition) {
        scrollAdjustPosition = colOffset > right - fixedEndColsWidth ? "end" : colOffset < left2 + fixedStartColsWidth ? "start" : "end";
      }
      let scrollLeft2 = scrollPosition.scrollLeft;
      if (scrollAdjustPosition === "center") {
        scrollLeft2 = colOffset - Math.floor(
          (brain.getAvailableSize().width - fixedStartColsWidth - fixedEndColsWidth) / 2
        );
      } else if (scrollAdjustPosition === "start") {
        offset = -offset;
        scrollLeft2 += colOffset - left2 + offset - fixedStartColsWidth;
      } else {
        offset += colWidth;
        scrollLeft2 += colOffset - right + offset + fixedEndColsWidth;
      }
      return __spreadProps(__spreadValues({}, scrollPosition), {
        scrollLeft: scrollLeft2
      });
    };
    this.getScrollPositionForScrollCellIntoView = (rowIndex, colIndex, config = { offsetLeft: 0, offsetTop: 0 }) => {
      if (this.destroyed) {
        return null;
      }
      const scrollPosForCol = this.getScrollPositionForScrollColumnIntoView(
        colIndex,
        {
          scrollAdjustPosition: config.colScrollAdjustPosition || config.scrollAdjustPosition,
          offset: config.offsetLeft
        }
      );
      const scrollPosForRow = this.getScrollPositionForScrollRowIntoView(
        rowIndex,
        {
          scrollAdjustPosition: config.rowScrollAdjustPosition || config.scrollAdjustPosition,
          offset: config.offsetTop
        }
      );
      if (!scrollPosForCol || !scrollPosForRow) {
        return null;
      }
      const { scrollLeft: scrollLeft2 } = scrollPosForCol;
      const { scrollTop: scrollTop2 } = scrollPosForRow;
      return { scrollLeft: scrollLeft2, scrollTop: scrollTop2 };
    };
    this.isRowFullyVisible = (rowIndex, offsetMargin = 2) => {
      return this.isRowVisible(
        rowIndex,
        this.brain.getRowHeight(rowIndex) - offsetMargin
      );
    };
    this.isRowVisible = (rowIndex, offsetMargin = 10) => {
      if (!this.isRowRendered(rowIndex)) {
        return false;
      }
      const { brain } = this;
      if (brain.isRowFixed(rowIndex)) {
        return true;
      }
      const {
        start: [startRow],
        end: [endRow]
      } = this.brain.getRenderRange();
      const midRow = Math.floor((startRow + endRow) / 2);
      if (rowIndex < startRow) {
        return false;
      }
      if (rowIndex >= endRow) {
        return false;
      }
      if (rowIndex >= midRow) {
        const lastVisibleRow = brain.getItemAt(
          brain.getAvailableSize().height + brain.getScrollPosition().scrollTop - offsetMargin,
          "vertical"
        );
        return rowIndex <= lastVisibleRow;
      }
      if (rowIndex < midRow) {
        const firstVisibleRow = brain.getItemAt(
          brain.getScrollPosition().scrollTop + offsetMargin,
          "vertical"
        );
        return rowIndex >= firstVisibleRow;
      }
      return true;
    };
    this.isRowRendered = (rowIndex) => {
      const elements = this.mappedCells.getElementsForRowIndex(rowIndex);
      return elements.length > 0;
    };
    this.isCellVisible = (rowIndex, colIndex) => {
      return this.isRowVisible(rowIndex) && this.isColumnVisible(colIndex);
    };
    this.isCellFullyVisible = (rowIndex, colIndex) => {
      return this.isRowFullyVisible(rowIndex) && this.isColumnVisible(colIndex);
    };
    this.isColumnFullyVisible = (colIndex, offsetMargin = 2) => {
      return this.isColumnVisible(
        colIndex,
        this.brain.getColWidth(colIndex) - offsetMargin
      );
    };
    this.isColumnVisible = (colIndex, offsetMargin = 10) => {
      if (!this.isColumnRendered(colIndex)) {
        return false;
      }
      const { brain } = this;
      if (brain.isColFixed(colIndex)) {
        return true;
      }
      const {
        start: [_, startCol],
        end: [__, endCol]
      } = brain.getRenderRange();
      if (colIndex < startCol) {
        return false;
      }
      if (colIndex >= endCol) {
        return false;
      }
      const midCol = Math.floor((startCol + endCol) / 2);
      if (colIndex >= midCol) {
        const lastVisibleCol = brain.getItemAt(
          brain.getAvailableSize().width + brain.getScrollPosition().scrollLeft - offsetMargin - brain.getFixedEndColsWidth(),
          "horizontal"
        );
        return colIndex <= lastVisibleCol;
      }
      if (colIndex < midCol) {
        const firstVisibleCol = brain.getItemAt(
          brain.getScrollPosition().scrollLeft + offsetMargin + brain.getFixedStartColsWidth(),
          "horizontal"
        );
        return colIndex >= firstVisibleCol;
      }
      return true;
    };
    this.isCellRendered = (rowIndex, colIndex) => {
      return this.isRowRendered(rowIndex) && this.isColumnRendered(colIndex);
    };
    this.isColumnRendered = (colIndex) => {
      const {
        start: [startRow]
      } = this.brain.getRenderRange();
      return this.mappedCells.getRenderedNodeForCell(startRow, colIndex) !== null;
    };
    this.getExtraSpanCellsForRange = (range) => {
      const { start, end } = range;
      const [startRow, startCol] = start;
      const [endRow, endCol] = end;
      return this.brain.getExtraSpanCellsForRange({
        horizontal: { startIndex: startCol, endIndex: endCol },
        vertical: { startIndex: startRow, endIndex: endRow }
      });
    };
    this.renderRange = (range, {
      renderCell,
      force,
      onRender
    }) => {
      if (this.destroyed) {
        return [];
      }
      const { start, end } = range;
      if (false) {
        this.debug(`Render range ${start}-${end}. Force ${force}`);
      }
      const { mappedCells } = this;
      const fixedRanges = this.getFixedRanges(range);
      const ranges = [range, ...fixedRanges];
      const extraCellsMap = /* @__PURE__ */ new Map();
      const extraCells = ranges.map(this.getExtraSpanCellsForRange).flat();
      if (extraCells) {
        extraCells.forEach(([rowIndex, colIndex]) => {
          extraCellsMap.set(`${rowIndex}:${colIndex}`, true);
        });
      }
      const renderCount = ranges.reduce(
        (sum2, range2) => sum2 + getRenderRangeCellCount(range2),
        0
      );
      if (this.itemDOMElements.length >= renderCount) {
        mappedCells.discardElementsStartingWith(renderCount, (elementIndex) => {
          if (this.updaters[elementIndex]) {
            this.updaters[elementIndex].destroy();
          }
          if (false) {
            this.debug(`Discard element ${elementIndex}`);
          }
        });
        this.itemDOMElements.length = Math.min(
          this.itemDOMElements.length,
          renderCount
        );
        this.itemDOMRefs.length = Math.min(this.itemDOMRefs.length, renderCount);
        this.updaters.length = Math.min(this.updaters.length, renderCount);
        this.items.length = Math.min(this.items.length, renderCount);
      }
      const elementsOutsideRanges = arrayIntersection(
        ...ranges.map(mappedCells.getElementsOutsideRenderRange)
      );
      const elementsOutsideItemRange = elementsOutsideRanges.filter(
        (elementIndex) => {
          const cell = this.mappedCells.getRenderedCellAtElement(elementIndex);
          if (cell && extraCellsMap.has(`${cell[0]}:${cell[1]}`)) {
            return false;
          }
          return true;
        }
      );
      if (this.items.length > renderCount) {
        this.items.length = renderCount;
      }
      for (let i = this.items.length; i < renderCount; i++) {
        this.renderElement(i);
        elementsOutsideItemRange.splice(0, 0, i);
      }
      const visitedCells = /* @__PURE__ */ new Map();
      ranges.forEach((range2) => {
        const { start: start2, end: end2 } = range2;
        const [startRow, startCol] = start2;
        const [endRow, endCol] = end2;
        for (let row = startRow; row < endRow; row++) {
          for (let col = startCol; col < endCol; col++) {
            const key = `${row}:${col}`;
            if (visitedCells.has(key)) {
              continue;
            }
            visitedCells.set(key, true);
            const cellRendered = mappedCells.isCellRendered(row, col);
            if (row === startRow || col === startCol) {
              const parentCell = this.isCellCovered(row, col);
              if (parentCell && extraCellsMap.has(`${parentCell[0]}:${parentCell[1]}`)) {
                const elIndexForCoveredCell = mappedCells.getElementIndexForCell(
                  row,
                  col
                );
                if (elIndexForCoveredCell != null) {
                  elementsOutsideItemRange.push(elIndexForCoveredCell);
                }
                continue;
              }
            }
            if (cellRendered && !force) {
              continue;
            }
            const elementIndex = cellRendered ? mappedCells.getElementIndexForCell(row, col) : mappedCells.getElementFromListForColumn(
              elementsOutsideItemRange,
              col
            );
            if (elementIndex == null) {
              if (false) {
                this.error(`Cannot find element to render cell ${row}:${col}`);
              }
              continue;
            }
            this.renderCellAtElement(row, col, elementIndex, renderCell);
          }
        }
      });
      extraCells.forEach(([rowIndex, colIndex]) => {
        if (mappedCells.isCellRendered(rowIndex, colIndex)) {
          if (force) {
            const elementIndex2 = mappedCells.getElementIndexForCell(
              rowIndex,
              colIndex
            );
            this.renderCellAtElement(
              rowIndex,
              colIndex,
              elementIndex2,
              renderCell
            );
          }
          return;
        }
        const elementIndex = elementsOutsideItemRange.pop();
        if (elementIndex == null) {
          if (false) {
            this.error(
              `Cannot find element to render cell ${rowIndex}-${colIndex}`
            );
          }
          return;
        }
        this.renderCellAtElement(rowIndex, colIndex, elementIndex, renderCell);
      });
      let result = this.items;
      result = [...this.items];
      this.adjustFixedElementsOnScroll();
      if (onRender) {
        onRender(result);
      }
      return result;
    };
    this.getFixedRanges = (currentRenderRange) => {
      const { fixedRowsStart, fixedRowsEnd, fixedColsStart, fixedColsEnd } = this.brain.getFixedCellInfo();
      if (!fixedRowsStart && !fixedColsStart && !fixedRowsEnd && !fixedColsEnd) {
        return [];
      }
      const colCount = this.brain.getColCount();
      const rowCount = this.brain.getRowCount();
      const { start, end } = currentRenderRange;
      const [startRow, startCol] = start;
      const [endRow, endCol] = end;
      const arr = [];
      if (fixedColsStart) {
        if (fixedRowsStart) {
          arr.push({
            rowFixed: "start",
            colFixed: "start",
            start: [0, 0],
            end: [fixedRowsStart, fixedColsStart]
          });
        }
        if (fixedRowsEnd) {
          arr.push({
            rowFixed: "end",
            colFixed: "start",
            start: [rowCount - fixedRowsEnd, 0],
            end: [rowCount, fixedColsStart]
          });
        }
        arr.push({
          rowFixed: false,
          colFixed: "start",
          start: [startRow, 0],
          end: [endRow, fixedColsStart]
        });
      }
      if (fixedColsEnd) {
        if (fixedRowsStart) {
          arr.push({
            colFixed: "end",
            rowFixed: "start",
            start: [0, colCount - fixedColsEnd],
            end: [fixedRowsStart, colCount]
          });
        }
        if (fixedRowsEnd) {
          arr.push({
            colFixed: "end",
            rowFixed: "end",
            start: [rowCount - fixedRowsEnd, colCount - fixedColsEnd],
            end: [rowCount, colCount]
          });
        }
        arr.push({
          colFixed: "end",
          rowFixed: false,
          start: [startRow, colCount - fixedColsEnd],
          end: [endRow, colCount]
        });
      }
      if (fixedRowsStart) {
        const fixedRowsStartRange = {
          start: [0, startCol],
          end: [fixedRowsStart, endCol],
          rowFixed: "start",
          colFixed: false
        };
        arr.push(fixedRowsStartRange);
      }
      if (fixedRowsEnd) {
        const fixedRowsEndRange = {
          rowFixed: "end",
          colFixed: false,
          start: [rowCount - fixedRowsEnd, startCol],
          end: [rowCount, endCol]
        };
        arr.push(fixedRowsEndRange);
      }
      return arr;
    };
    this.isCellFixed = (rowIndex, colIndex) => {
      const { fixedRowsStart, fixedRowsEnd, fixedColsStart, fixedColsEnd } = this.brain.getFixedCellInfo();
      const colCount = this.brain.getColCount();
      const rowCount = this.brain.getRowCount();
      let rowFixed = false;
      let colFixed = false;
      let pos = false;
      if (rowIndex < fixedRowsStart) {
        rowFixed = true;
        pos = "start";
      }
      if (fixedRowsEnd && !rowFixed) {
        const firstRowFixedEnd = rowCount - fixedRowsEnd;
        if (rowIndex >= firstRowFixedEnd) {
          rowFixed = true;
          pos = "end";
        }
      }
      if (colIndex < fixedColsStart) {
        colFixed = true;
        pos = "start";
      }
      if (fixedColsEnd && !colFixed) {
        const firstColFixedEnd = colCount - fixedColsEnd;
        if (colIndex >= firstColFixedEnd) {
          colFixed = true;
          pos = "end";
        }
      }
      return {
        row: rowFixed ? pos : false,
        col: colFixed ? pos : false
      };
    };
    this.isCellCovered = (rowIndex, colIndex) => {
      const rowspanParent = this.brain.getRowspanParent(rowIndex, colIndex);
      const colspanParent = this.brain.getColspanParent(rowIndex, colIndex);
      const coveredByAnotherRow = rowspanParent != rowIndex;
      const coveredByAnotherCol = colspanParent != colIndex;
      const covered = coveredByAnotherRow || coveredByAnotherCol;
      return covered ? [rowspanParent, colspanParent] : false;
    };
    this.onMouseEnter = (rowIndex) => {
      this.currentHoveredRow = rowIndex;
      if (this.scrolling) {
        return;
      }
      this.addHoverClass(rowIndex);
    };
    this.addHoverClass = (rowIndex) => {
      this.mappedCells.getElementsForRowIndex(rowIndex).forEach((elIndex) => {
        const node = this.itemDOMElements[elIndex];
        if (node) {
          this.cellHoverClassNames.forEach((cls) => {
            node.classList.add(cls);
          });
        }
      });
    };
    this.onMouseLeave = (rowIndex) => {
      if (this.currentHoveredRow != -1 && this.currentHoveredRow === rowIndex) {
        this.removeHoverClass(rowIndex);
      }
      this.currentHoveredRow = -1;
      if (this.scrolling) {
        return;
      }
      this.removeHoverClass(rowIndex);
    };
    this.removeHoverClass = (rowIndex) => {
      this.mappedCells.getElementsForRowIndex(rowIndex).forEach((elIndex) => {
        const node = this.itemDOMElements[elIndex];
        if (node) {
          this.cellHoverClassNames.forEach((cls) => {
            node.classList.remove(cls);
          });
        }
      });
    };
    this.updateHoverClassNamesForRow = (rowIndex) => {
      if (this.scrolling) {
        return;
      }
      if (false) {
        return;
      }
      if (this.hoverRowUpdatesInProgress.has(rowIndex)) {
        return;
      }
      this.hoverRowUpdatesInProgress.set(rowIndex, true);
      const checkHoverClass = () => {
        if (this.currentHoveredRow != -1 && !this.scrolling) {
          if (this.currentHoveredRow === rowIndex) {
            this.addHoverClass(rowIndex);
          } else {
            this.removeHoverClass(rowIndex);
          }
        }
      };
      raf(() => {
        if (this.destroyed) {
          return;
        }
        checkHoverClass();
        this.hoverRowUpdatesInProgress.delete(rowIndex);
      });
    };
    this.updateElementPosition = (elementIndex, options) => {
      if (this.destroyed) {
        return;
      }
      const itemElement = this.itemDOMElements[elementIndex];
      const cell = this.mappedCells.getRenderedCellAtElement(elementIndex);
      if (cell == null) {
        if (false) {
          this.error(`Cannot find item for element ${elementIndex}`);
        }
        return;
      }
      const [rowIndex, colIndex] = cell;
      const itemPosition = this.brain.getCellOffset(rowIndex, colIndex);
      if (itemPosition == null) {
        return;
      }
      const { x, y } = itemPosition;
      if (itemElement) {
        this.updateHoverClassNamesForRow(rowIndex);
        itemElement.dataset.rowIndex = rowIndex;
        itemElement.dataset.colIndex = colIndex;
        if (ITEM_POSITION_WITH_TRANSFORM) {
          this.setTransform(itemElement, rowIndex, colIndex, { x, y }, null);
          itemElement.style.willChange = "transform";
          itemElement.style.backfaceVisibility = "hidden";
          const hidden = options ? options.hidden : !!this.isCellCovered(rowIndex, colIndex);
          itemElement.style.zIndex = hidden ? "-1" : (
            // #updatezindex - we need to allow elements use their own zIndex, so we
            // resort to allowing them to have it as a data-z-index attribute
            itemElement.dataset.zIndex || "auto"
          );
        } else {
          itemElement.style.display = "";
          itemElement.style.left = `${x}px`;
          itemElement.style.top = `${y}px`;
        }
      }
    };
    this.onScrollStart = () => {
      this.scrolling = true;
    };
    this.onScrollStop = () => {
      this.scrolling = false;
      if (this.currentHoveredRow != -1) {
        this.addHoverClass(this.currentHoveredRow);
      }
    };
    this.adjustFixedElementsOnScroll = (scrollPosition = this.brain.getScrollPosition()) => {
      const { mappedCells, brain, itemDOMElements } = this;
      const cols = this.brain.getColCount();
      const rows = this.brain.getRowCount();
      const { fixedColsStart, fixedColsEnd, fixedRowsStart, fixedRowsEnd } = this.brain.getFixedCellInfo();
      if (!fixedColsStart && !fixedColsEnd && !fixedRowsStart && !fixedRowsEnd) {
        return;
      }
      if (itemDOMElements[0]) {
        setInfiniteScrollPosition(
          scrollPosition,
          this.getInfiniteNode(itemDOMElements[0])
        );
      }
      const fixedEndColsOffsets = this.brain.getFixedEndColsOffsets({
        skipScroll: true
      });
      const fixedEndRowsOffsets = this.brain.getFixedEndRowsOffsets({
        skipScroll: true
      });
      const { start, end } = this.brain.getRenderRange();
      const [startRow, startCol] = start;
      const [endRow, endCol] = end;
      function adjustElementPosition(rowIndex, colIndex, fn) {
        const elementIndex = mappedCells.getElementIndexForCell(
          rowIndex,
          colIndex
        );
        if (elementIndex === null) {
          return;
        }
        const itemPosition = brain.getCellOffset(rowIndex, colIndex);
        const node = itemDOMElements[elementIndex];
        if (elementIndex != null && node && itemPosition) {
          fn(rowIndex, colIndex, node, itemPosition);
        }
      }
      const adjustColStart = (_rowIndex, colIndex, node, { x, y }) => {
        this.setTransform(
          node,
          _rowIndex,
          colIndex,
          { x, y, scrollLeft: true },
          fixedColsStart - colIndex
        );
      };
      const adjustRowStart = (rowIndex, _colIndex, node, coords) => {
        this.setTransform(
          node,
          rowIndex,
          _colIndex,
          { x: coords.x, y: coords.y, scrollTop: true },
          fixedRowsStart - rowIndex
        );
      };
      const adjustColEnd = (_rowIndex, colIndex, node, { y }) => {
        const val = fixedEndColsOffsets[colIndex];
        this.setTransform(
          node,
          _rowIndex,
          colIndex,
          { x: val, y, scrollLeft: true },
          cols - colIndex
        );
      };
      const adjustRowEnd = (rowIndex, _colIndex, node, coords) => {
        this.setTransform(
          node,
          rowIndex,
          _colIndex,
          { x: coords.x, y: fixedEndRowsOffsets[rowIndex], scrollTop: true },
          rows - rowIndex
        );
      };
      const adjustColStartRowStart = (_rowIndex, _colIndex, node, { x, y }) => {
        this.setTransform(
          node,
          _rowIndex,
          _colIndex,
          { x, scrollLeft: true, y, scrollTop: true },
          1e5
        );
      };
      const adjustColStartRowEnd = (_rowIndex, _colIndex, node, { x }) => {
        this.setTransform(
          node,
          _rowIndex,
          _colIndex,
          {
            x,
            scrollLeft: true,
            y: fixedEndRowsOffsets[_rowIndex],
            scrollTop: true
          },
          2e5
        );
      };
      const adjustColEndRowStart = (_rowIndex, colIndex, node, coords) => {
        this.setTransform(
          node,
          _rowIndex,
          colIndex,
          {
            x: fixedEndColsOffsets[colIndex],
            y: coords.y,
            scrollLeft: true,
            scrollTop: true
          },
          3e5
        );
      };
      const adjustColEndRowEnd = (rowIndex, colIndex, node) => {
        this.setTransform(
          node,
          rowIndex,
          colIndex,
          {
            x: fixedEndColsOffsets[colIndex],
            y: fixedEndRowsOffsets[rowIndex],
            scrollLeft: true,
            scrollTop: true
          },
          4e5
        );
      };
      if (fixedColsStart || fixedColsEnd) {
        for (let rowIndex = startRow; rowIndex < endRow; rowIndex++) {
          for (let colIndex = 0; colIndex < fixedColsStart; colIndex++) {
            adjustElementPosition(rowIndex, colIndex, adjustColStart);
          }
          if (fixedColsEnd) {
            const firstColFixedEnd = cols - fixedColsEnd;
            for (let colIndex = firstColFixedEnd; colIndex < cols; colIndex++) {
              adjustElementPosition(rowIndex, colIndex, adjustColEnd);
            }
          }
        }
      }
      if (fixedRowsStart || fixedRowsEnd) {
        for (let colIndex = startCol; colIndex < endCol; colIndex++) {
          for (let rowIndex = 0; rowIndex < fixedRowsStart; rowIndex++) {
            adjustElementPosition(rowIndex, colIndex, adjustRowStart);
          }
          if (fixedRowsEnd) {
            const firstRowFixedEnd = rows - fixedRowsEnd;
            for (let rowIndex = firstRowFixedEnd; rowIndex < rows; rowIndex++) {
              adjustElementPosition(rowIndex, colIndex, adjustRowEnd);
            }
          }
        }
      }
      if (fixedColsStart && fixedRowsStart) {
        for (let rowIndex = 0; rowIndex < fixedRowsStart; rowIndex++) {
          for (let colIndex = 0; colIndex < fixedColsStart; colIndex++) {
            adjustElementPosition(rowIndex, colIndex, adjustColStartRowStart);
          }
        }
      }
      if (fixedColsStart && fixedRowsEnd) {
        const firstRowFixedEnd = rows - fixedRowsEnd;
        for (let rowIndex = firstRowFixedEnd; rowIndex < rows; rowIndex++) {
          for (let colIndex = 0; colIndex < fixedColsStart; colIndex++) {
            adjustElementPosition(rowIndex, colIndex, adjustColStartRowEnd);
          }
        }
      }
      if (fixedColsEnd && fixedRowsStart) {
        const firstColFixedEnd = cols - fixedColsEnd;
        for (let rowIndex = 0; rowIndex < fixedRowsStart; rowIndex++) {
          for (let colIndex = firstColFixedEnd; colIndex < cols; colIndex++) {
            adjustElementPosition(rowIndex, colIndex, adjustColEndRowStart);
          }
        }
      }
      if (fixedColsEnd && fixedRowsEnd) {
        const firstRowFixedEnd = rows - fixedRowsEnd;
        const firstColFixedEnd = cols - fixedColsEnd;
        for (let rowIndex = firstRowFixedEnd; rowIndex < rows; rowIndex++) {
          for (let colIndex = firstColFixedEnd; colIndex < cols; colIndex++) {
            adjustElementPosition(rowIndex, colIndex, adjustColEndRowEnd);
          }
        }
      }
    };
    this.destroy = () => {
      if (this.destroyed) {
        return;
      }
      this.destroyed = true;
      this.reset();
      this.onDestroy();
      this.hoverRowUpdatesInProgress.clear();
      this.hoverRowUpdatesInProgress = null;
      this.brain = null;
      this.mappedCells = null;
    };
    this.brain = brain;
    this.mappedCells = new MappedCells();
    const removeOnScroll = brain.onScroll(this.adjustFixedElementsOnScroll);
    const removeOnSizeChange = brain.onAvailableSizeChange(() => {
      this.adjustFixedElementsOnScroll();
      raf(() => {
        if (this.destroyed) {
          return;
        }
        this.adjustFixedElementsOnScroll();
      });
    });
    const removeOnScrollStart = brain.onScrollStart(this.onScrollStart);
    const removeOnScrollStop = brain.onScrollStop(this.onScrollStop);
    this.onDestroy = () => {
      removeOnScroll();
      removeOnSizeChange();
      removeOnScrollStart();
      removeOnScrollStop();
    };
  }
  getInfiniteNode(node) {
    if (!this.infiniteNode) {
      this.infiniteNode = getParentInfiniteNode(node);
    }
    return this.infiniteNode;
  }
  renderElement(elementIndex) {
    const domRef = (node) => {
      if (node) {
        this.itemDOMElements[elementIndex] = node;
        node.style.position = "absolute";
        node.style.left = "0px";
        node.style.top = "0px";
        this.updateElementPosition(elementIndex);
      }
    };
    this.itemDOMRefs[elementIndex] = domRef;
    this.updaters[elementIndex] = buildSubscriptionCallback();
    const item = /* @__PURE__ */ React8.createElement(
      AvoidReactDiff,
      {
        key: elementIndex,
        name: `${elementIndex}`,
        updater: this.updaters[elementIndex]
      }
    );
    this.items[elementIndex] = item;
    return item;
  }
  renderCellAtElement(rowIndex, colIndex, elementIndex, renderCell) {
    if (this.destroyed) {
      return;
    }
    const covered = this.isCellCovered(rowIndex, colIndex);
    const height = this.brain.getRowHeight(rowIndex);
    const width = this.brain.getColWidth(colIndex);
    const rowspan = this.brain.getRowspan(rowIndex, colIndex);
    const colspan = this.brain.getColspan(rowIndex, colIndex);
    const heightWithRowspan = rowspan === 1 ? height : this.brain.getRowHeightWithSpan(rowIndex, colIndex, rowspan);
    const widthWithColspan = colspan === 1 ? width : this.brain.getColWidthWithSpan(rowIndex, colIndex, colspan);
    const { row: rowFixed, col: colFixed } = this.isCellFixed(
      rowIndex,
      colIndex
    );
    const hidden = !!covered;
    const renderedNode = renderCell({
      rowIndex,
      colIndex,
      height,
      width,
      rowspan,
      colspan,
      rowFixed,
      colFixed,
      hidden,
      heightWithRowspan,
      widthWithColspan,
      onMouseEnter: this.onMouseEnter.bind(null, rowIndex),
      onMouseLeave: this.onMouseLeave.bind(null, rowIndex),
      domRef: this.itemDOMRefs[elementIndex]
    });
    const itemUpdater = this.updaters[elementIndex];
    if (!itemUpdater) {
      this.error(
        `Cannot find item updater for item ${rowIndex},${colIndex} at this time... sorry.`
      );
      return;
    }
    this.mappedCells.renderCellAtElement(
      rowIndex,
      colIndex,
      elementIndex,
      renderedNode
    );
    if (false) {
      this.debug(
        `Render cell ${rowIndex},${colIndex} at element ${elementIndex}`
      );
    }
    itemUpdater(renderedNode);
    this.updateElementPosition(elementIndex, { hidden, rowspan, colspan });
    return;
  }
  reset() {
    this.itemDOMElements = [];
    this.itemDOMRefs = [];
    this.updaters = [];
    this.items = [];
    this.mappedCells.reset();
  }
};

// src/components/HeadlessTable/RawTable.tsx
function createRenderer(brain) {
  const renderer = new ReactHeadlessTableRenderer(brain);
  const onRenderUpdater = buildSubscriptionCallback();
  brain.onDestroy(() => {
    renderer.destroy();
    onRenderUpdater.destroy();
  });
  return {
    renderer,
    onRenderUpdater
  };
}
function RawTableFn(props) {
  const { brain, renderCell } = props;
  const { renderer, onRenderUpdater } = useMemo2(() => {
    return props.onRenderUpdater && props.renderer ? {
      renderer: props.renderer,
      onRenderUpdater: props.onRenderUpdater
    } : createRenderer(brain);
  }, [brain, props.onRenderUpdater, props.renderer]);
  useEffect4(() => {
    renderer.cellHoverClassNames = props.cellHoverClassNames || [];
  }, [renderer, props.cellHoverClassNames]);
  useLayoutEffect3(() => {
    const renderRange = brain.getRenderRange();
    renderer.renderRange(renderRange, {
      onRender: onRenderUpdater,
      force: true,
      renderCell
    });
  }, [renderer, brain, renderCell, onRenderUpdater]);
  useEffect4(() => {
    const remove = brain.onRenderRangeChange((renderRange) => {
      renderer.renderRange(renderRange, {
        force: false,
        // TODO should be false
        onRender: (items) => {
          const currentItems = onRenderUpdater.get();
          if (currentItems && items && currentItems.length === items.length) {
            return;
          }
          onRenderUpdater(items);
        },
        renderCell
      });
    });
    return remove;
  }, [renderCell]);
  return /* @__PURE__ */ React9.createElement(AvoidReactDiff, { updater: onRenderUpdater });
}
var RawTable = React9.memo(RawTableFn);

// src/components/InfiniteTable/components/ActiveRowIndicator.tsx
init_esm_shims();
import * as React10 from "react";
import { useEffect as useEffect5, useLayoutEffect as useLayoutEffect4, useRef as useRef5 } from "react";

// src/components/hooks/useRerender.ts
init_esm_shims();
import { useCallback as useCallback3, useState as useState2 } from "react";
var useRerender = () => {
  const [state, setState] = useState2(0);
  return [
    state,
    useCallback3(() => {
      setState((state2) => state2 + 1);
    }, [setState])
  ];
};

// src/components/InfiniteTable/components/ActiveCellIndicator.css.ts
init_esm_shims();
var ActiveCellIndicatorCls = { visible: "ActiveCellIndicator_ActiveCellIndicatorCls_visible__nxbq1c2 ActiveCellIndicator_ActiveCellIndicator__nxbq1c1 utilities_pointerEvents_none__16lm1iwk utilities_position_sticky__16lm1iw4 utilities_left_0__16lm1iw1d utilities_top_0__16lm1iw1b", hidden: "ActiveCellIndicator_ActiveCellIndicatorCls_hidden__nxbq1c3 ActiveCellIndicator_ActiveCellIndicator__nxbq1c1 utilities_pointerEvents_none__16lm1iwk utilities_position_sticky__16lm1iw4 utilities_left_0__16lm1iw1d utilities_top_0__16lm1iw1b" };
var ActiveIndicatorWrapperCls = "utilities_pointerEvents_none__16lm1iwk utilities_position_sticky__16lm1iw4 utilities_left_0__16lm1iw1d utilities_top_0__16lm1iw1b utilities_height_0__16lm1iw17 utilities_zIndex_1000000__16lm1iwt";

// src/components/InfiniteTable/components/ActiveRowIndicator.css.ts
init_esm_shims();
var ActiveRowIndicatorCls = { visible: "ActiveRowIndicator_ActiveRowIndicatorCls_visible__j26lrx1 ActiveRowIndicator_ActiveRowIndicator__j26lrx0 utilities_pointerEvents_none__16lm1iwk utilities_position_sticky__16lm1iw4 utilities_width_100%__16lm1iw1a utilities_top_0__16lm1iw1b utilities_left_0__16lm1iw1d", hidden: "ActiveRowIndicator_ActiveRowIndicatorCls_hidden__j26lrx2 ActiveRowIndicator_ActiveRowIndicator__j26lrx0 utilities_pointerEvents_none__16lm1iwk utilities_position_sticky__16lm1iw4 utilities_width_100%__16lm1iw1a utilities_top_0__16lm1iw1b utilities_left_0__16lm1iw1d" };

// src/components/InfiniteTable/components/ActiveRowIndicator.tsx
var { rootClassName: rootClassName3 } = internalProps;
var baseCls = `${rootClassName3}-ActiveRowIndicator`;
var ActiveStyle = {
  [stripVar(InternalVars.activeCellOffsetY)]: InternalVars.activeCellRowOffset,
  transform: `translate3d(0px, calc( ${InternalVars.activeCellOffsetY} + var(${stripVar(InternalVars.scrollTopForActiveRow)}, 0px)), 0px)`,
  height: InternalVars.activeCellRowHeight
};
var ActiveRowIndicatorFn = (props) => {
  const { brain } = props;
  const domRef = useRef5(null);
  const active = props.activeRowIndex != null && brain.getRowCount() > props.activeRowIndex;
  const [_rerenderId, rerender] = useRerender();
  useLayoutEffect4(() => {
    if (props.activeRowIndex == null) {
      return;
    }
    const rowIndex = props.activeRowIndex;
    const activeCellRowHeight = brain.getRowHeight(rowIndex);
    const activeCellRowOffset = brain.getItemOffsetFor(rowIndex, "vertical");
    const node = domRef.current;
    const vars = {
      activeCellRowHeight: `${activeCellRowHeight}px`,
      activeCellRowOffset: `${activeCellRowOffset}px`
    };
    setInfiniteVarsOnNode(vars, node);
  }, [props.activeRowIndex]);
  useEffect5(() => {
    const removeOnScroll = brain.onScroll((scrollPosition) => {
      setInfiniteVarsOnNode(
        {
          scrollTopForActiveRow: `${-scrollPosition.scrollTop}px`
        },
        domRef.current
      );
    });
    const removeOnRenderCountChange = brain.onRenderCountChange(rerender);
    return () => {
      removeOnRenderCountChange();
      removeOnScroll();
    };
  }, [brain]);
  return (
    // #correct-scroll-size this wrapper is here in order to make the indicator not take up space in the scroll container - to reproduce: remove this and click on a row, you will see that if you scroll at the bottom, there is extra space
    /* @__PURE__ */ React10.createElement("div", { className: ActiveIndicatorWrapperCls, "data-name": "active-row" }, /* @__PURE__ */ React10.createElement(
      "div",
      {
        ref: domRef,
        "data-name": "active-row-indicator",
        className: `${baseCls} ${active ? ActiveRowIndicatorCls.visible : ActiveRowIndicatorCls.hidden}`,
        style: active ? ActiveStyle : void 0
      }
    ))
  );
};
var ActiveRowIndicator = React10.memo(
  ActiveRowIndicatorFn
);

// src/components/InfiniteTable/components/ActiveCellIndicator.tsx
init_esm_shims();
import * as React11 from "react";
import { useEffect as useEffect6, useLayoutEffect as useLayoutEffect5, useRef as useRef6 } from "react";
var { rootClassName: rootClassName4 } = internalProps;
var baseCls2 = `${rootClassName4}-ActiveCellIndicator`;
var columnZIndexAtIndex2 = stripVar(InternalVars.columnZIndexAtIndex);
var ActiveStyle2 = {
  [stripVar(InternalVars.activeCellOffsetX)]: InternalVars.activeCellColOffset,
  [stripVar(InternalVars.activeCellOffsetY)]: InternalVars.activeCellRowOffset,
  transform: `translate3d(${InternalVars.activeCellOffsetX}, ${InternalVars.activeCellOffsetY}, 0px)`,
  width: InternalVars.activeCellColWidth,
  height: InternalVars.activeCellRowHeight
};
var ActiveCellIndicatorFn = (props) => {
  const { brain } = props;
  const [_rerenderId, rerender] = useRerender();
  const domRef = useRef6(null);
  const active = props.activeCellIndex != null && brain.getRowCount() > props.activeCellIndex[0];
  useLayoutEffect5(() => {
    if (props.activeCellIndex == null) {
      return;
    }
    const rowIndex = props.activeCellIndex[0];
    const activeCellRowHeight = brain.getRowHeight(rowIndex);
    const activeCellRowOffset = brain.getItemOffsetFor(rowIndex, "vertical");
    const node = domRef.current;
    setInfiniteVarsOnNode(
      {
        activeCellRowHeight: `${activeCellRowHeight}px`,
        activeCellRowOffset: `${activeCellRowOffset}px`
      },
      node
    );
  }, [props.activeCellIndex]);
  useEffect6(() => {
    const removeOnRenderCountChange = brain.onRenderCountChange(() => {
      rerender();
    });
    return () => {
      removeOnRenderCountChange();
    };
  }, [brain]);
  return (
    // #correct-scroll-size this wrapper is here in order to make the indicator not take up space in the scroll container - to reproduce: remove this and click on a row, you will see that if you scroll at the bottom, there is extra space
    /* @__PURE__ */ React11.createElement(
      "div",
      {
        className: ActiveIndicatorWrapperCls,
        "data-name": "active-cell",
        style: active ? {
          zIndex: `var(${columnZIndexAtIndex2}-${props.activeCellIndex[1]})`
        } : void 0
      },
      /* @__PURE__ */ React11.createElement(
        "div",
        {
          ref: domRef,
          "data-name": "active-cell-indicator",
          className: `${baseCls2} ${active ? ActiveCellIndicatorCls.visible : ActiveCellIndicatorCls.hidden}`,
          style: active ? ActiveStyle2 : void 0
        }
      )
    )
  );
};
var ActiveCellIndicator = React11.memo(
  ActiveCellIndicatorFn
);

// src/components/HeadlessTable/index.tsx
function useMatrixBrain(brain, brainOptions, fixedCellsInfo) {
  if (fixedCellsInfo && (fixedCellsInfo.fixedColsStart || fixedCellsInfo.fixedColsEnd || fixedCellsInfo.fixedRowsStart || fixedCellsInfo.fixedRowsEnd)) {
    brain.updateFixedCells({
      fixedColsStart: fixedCellsInfo.fixedColsStart,
      fixedColsEnd: fixedCellsInfo.fixedColsEnd,
      fixedRowsStart: fixedCellsInfo.fixedRowsStart,
      fixedRowsEnd: fixedCellsInfo.fixedRowsEnd
    });
  }
  brain.update({
    height: brainOptions.height,
    width: brainOptions.width,
    cols: brainOptions.cols,
    rows: brainOptions.rows,
    colWidth: brainOptions.colWidth,
    rowHeight: brainOptions.rowHeight,
    rowspan: brainOptions.rowspan,
    colspan: brainOptions.colspan
  });
}
function HeadlessTable(props) {
  const _a = props, {
    brain,
    scrollerDOMRef,
    scrollStopDelay,
    renderCell,
    cellHoverClassNames,
    renderer,
    activeRowIndex,
    activeCellIndex,
    onRenderUpdater
  } = _a, domProps = __objRest(_a, [
    "brain",
    "scrollerDOMRef",
    "scrollStopDelay",
    "renderCell",
    "cellHoverClassNames",
    "renderer",
    "activeRowIndex",
    "activeCellIndex",
    "onRenderUpdater"
  ]);
  const domRef = useRef7(null);
  const [scrollSize, setTotalScrollSize] = useState3({
    width: 0,
    height: 0
  });
  useEffect7(() => {
    if (scrollStopDelay != null) {
      brain.setScrollStopDelay(scrollStopDelay);
    }
  }, [scrollStopDelay, brain]);
  useEffect7(() => {
    var _a2;
    const node = (_a2 = domRef.current) == null ? void 0 : _a2.parentNode;
    if (!node) {
      return;
    }
    const onResize = () => {
      const size = {
        height: node.clientHeight,
        width: node.clientWidth
      };
      brain.update(size);
    };
    const remove = setupResizeObserver(node, onResize, { debounce: 50 });
    return remove;
  }, []);
  const onContainerScroll = useCallback4(
    (scrollPos) => {
      brain.setScrollPosition(scrollPos, (scrollPos2) => {
        domRef.current.style.transform = `translate3d(${-scrollPos2.scrollLeft}px, ${-scrollPos2.scrollTop}px, 0px)`;
      });
    },
    [brain]
  );
  useEffect7(() => {
    const removeOnRenderCount = brain.onRenderCountChange(() => {
      setTotalScrollSize(brain.getTotalSize());
    });
    setTotalScrollSize(brain.getTotalSize());
    return removeOnRenderCount;
  }, [brain]);
  return /* @__PURE__ */ React12.createElement(
    VirtualScrollContainer,
    __spreadProps(__spreadValues({
      onContainerScroll
    }, domProps), {
      ref: scrollerDOMRef
    }),
    /* @__PURE__ */ React12.createElement(
      "div",
      {
        ref: domRef,
        className: scrollTransformTargetCls,
        "data-name": "scroll-transform-target"
      },
      /* @__PURE__ */ React12.createElement(
        RawTable,
        {
          renderer,
          onRenderUpdater,
          renderCell,
          brain,
          cellHoverClassNames
        }
      ),
      /* @__PURE__ */ React12.createElement(ActiveCellIndicator, { brain, activeCellIndex })
    ),
    /* @__PURE__ */ React12.createElement(ActiveRowIndicator, { brain, activeRowIndex }),
    /* @__PURE__ */ React12.createElement(
      SpacePlaceholder,
      {
        width: scrollSize.width,
        height: scrollSize.height
      }
    )
  );
}

// src/components/hooks/useComponentState/index.tsx
init_esm_shims();
import * as React13 from "react";
import {
  useReducer,
  createContext as createContext2,
  useMemo as useMemo3,
  useEffect as useEffect9,
  useState as useState4,
  useRef as useRef11,
  useLayoutEffect as useLayoutEffect7
} from "react";

// src/utils/proxyFnCall.ts
init_esm_shims();
function proxyFn(fn, config) {
  const propertyReads = /* @__PURE__ */ new Set();
  function proxiedFn(...params) {
    const paramToProxy = config ? config.getProxyTargetFromArgs(...params) : params[0];
    propertyReads.clear();
    const handler = {
      get: function(obj, prop) {
        propertyReads.add(prop);
        return obj[prop];
      }
    };
    const proxy = new Proxy(
      paramToProxy,
      handler
    );
    const newParams = config ? config.putProxyToArgs(proxy, ...params) : [proxy];
    return fn.apply(this, newParams);
  }
  return {
    fn: proxiedFn,
    propertyReads
  };
}

// src/utils/toUpperFirst.ts
init_esm_shims();
var toUpperFirst = (s) => {
  return s ? s.substr(0, 1).toUpperCase() + s.substr(1) : s;
};

// src/components/utils/isControlled.ts
init_esm_shims();

// src/components/utils/isControlledValue.ts
init_esm_shims();
function isControlledValue(value) {
  const controlled = value !== void 0;
  return controlled;
}

// src/components/utils/isControlled.ts
function isControlled(propName, props) {
  const propValue = props[propName];
  const controlled = isControlledValue(propValue);
  return controlled;
}

// src/components/hooks/useEffectOnceWithProperUnmount.ts
init_esm_shims();
import { useCallback as useCallback5, useEffect as useEffect8, useRef as useRef8 } from "react";
var useEffectOnce = (effectCallback) => {
  const effectFunction = useCallback5(effectCallback, []);
  const effectCalled = useRef8(false);
  const componentRendered = useRef8(false);
  const destroyFn = useRef8();
  const [_, rerender] = useRerender();
  if (effectCalled.current) {
    componentRendered.current = true;
  }
  useEffect8(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFunction;
      effectCalled.current = true;
    }
    rerender();
    return () => {
      if (!componentRendered.current) {
        return;
      }
      if (destroyFn.current) {
        destroyFn.current();
      }
    };
  }, []);
};

// src/components/hooks/useLatest.tsx
init_esm_shims();
import { useCallback as useCallback6, useRef as useRef9 } from "react";
function useLatest(value) {
  const ref = useRef9(value);
  ref.current = value;
  return useCallback6(() => ref.current, []);
}

// src/components/hooks/usePrevious.ts
init_esm_shims();
import { useRef as useRef10, useLayoutEffect as useLayoutEffect6 } from "react";
var usePrevious = (value, initialValue) => {
  const ref = useRef10(initialValue === void 0 ? value : initialValue);
  useLayoutEffect6(() => {
    ref.current = value;
  });
  return ref.current;
};

// src/components/hooks/useComponentState/index.tsx
var notifyChange = (props, callbackPropName, values) => {
  const callbackProp = props[callbackPropName];
  if (typeof callbackProp === "function") {
    callbackProp(...values);
  }
};
var debug3 = dbg("rerender");
var ComponentContext;
function getComponentStateContext() {
  if (ComponentContext) {
    return ComponentContext;
  }
  return ComponentContext = createContext2(null);
}
function getReducerGeneratedActions(dispatch, getState, getProps, propsToForward, allowedControlledPropOverrides, interceptedActions, mappedCallbacks) {
  const state = getState();
  return Object.keys(state).reduce((actions, stateKey) => {
    const key = stateKey;
    const setter = (value) => {
      const props = getProps();
      const state2 = getState();
      const currentValue = state2[key];
      if (currentValue === value) {
      }
      let notifyTheChange = true;
      if (interceptedActions && typeof interceptedActions[key] === "function") {
        if (interceptedActions[key](value, { actions, state: state2 }) === false) {
          notifyTheChange = false;
        }
      }
      if (notifyTheChange) {
        let callbackParams = [value];
        let callbackName = `on${toUpperFirst(stateKey)}Change`;
        if (mappedCallbacks && mappedCallbacks[key]) {
          const res = mappedCallbacks[key](value, state2);
          callbackName = res.callbackName || callbackName;
          callbackParams = res.callbackParams;
        }
        notifyChange(props, callbackName, callbackParams);
      }
      const forwardFn = propsToForward[key];
      if (typeof forwardFn === "function") {
        value = forwardFn(value);
      }
      const allowControlled = !!(allowedControlledPropOverrides == null ? void 0 : allowedControlledPropOverrides[key]);
      if (isControlled(stateKey, props) && !allowControlled) {
        return;
      }
      dispatch({
        payload: {
          updatedProps: null,
          mappedState: {
            [stateKey]: value
          }
        }
      });
    };
    Object.defineProperty(actions, stateKey, {
      set: setter
    });
    return actions;
  }, {});
}
function forwardProps(propsToForward, props, setupState) {
  const mappedState = {};
  for (let k in propsToForward)
    if (propsToForward.hasOwnProperty(k)) {
      const forwardFn = propsToForward[k];
      let propValue = isControlled(k, props) ? props[k] : props[`default${toUpperFirst(k)}`];
      if (typeof forwardFn === "function") {
        propValue = forwardFn(propValue, setupState);
      }
      mappedState[k] = propValue;
    }
  return mappedState;
}
function getComponentStateRoot(config) {
  return React13.memo(function ComponentStateRoot(props) {
    var _a, _b;
    const [initialSetupState] = useState4(() => {
      return config.initSetupState ? config.initSetupState() : {};
    });
    const propsToStateSetRef = useRef11(/* @__PURE__ */ new Set());
    const propsToForward = useMemo3(
      () => config.forwardProps ? config.forwardProps(initialSetupState) : {},
      [initialSetupState]
    );
    const parentState = (_b = (_a = config.getParentState) == null ? void 0 : _a.call(config)) != null ? _b : null;
    const getParentState = useLatest(parentState);
    function initStateOnce() {
      let mappedState = {};
      if (propsToForward) {
        mappedState = forwardProps(propsToForward, props, initialSetupState);
      }
      const state2 = __spreadValues(__spreadValues({}, initialSetupState), mappedState);
      if (config.mapPropsToState) {
        const { fn: mapPropsToState2, propertyReads } = proxyFn(
          config.mapPropsToState,
          {
            getProxyTargetFromArgs: (initialArg) => initialArg.props,
            putProxyToArgs: (props2, initialArg) => {
              return [__spreadProps(__spreadValues({}, initialArg), { props: props2 })];
            }
          }
        );
        const stateFromProps = mapPropsToState2({
          props,
          state: state2,
          oldState: null,
          parentState
          // getState: getComponentState,
        });
        propsToStateSetRef.current = /* @__PURE__ */ new Set([
          ...propsToStateSetRef.current,
          ...propertyReads
        ]);
        return __spreadValues(__spreadValues({}, state2), stateFromProps);
      }
      return state2;
    }
    const [wholeState] = useState4(initStateOnce);
    const getProps = useLatest(props);
    const theReducer = (previousState, action) => {
      var _a2;
      if (action.type === "REPLACE_STATE") {
        return action.payload;
      }
      const parentState2 = (_a2 = getParentState == null ? void 0 : getParentState()) != null ? _a2 : null;
      const mappedState = action.payload.mappedState;
      const updatedProps = action.payload.updatedPropsToState;
      const newState = Object.assign({}, previousState);
      if (mappedState) {
        Object.assign(newState, mappedState);
      }
      if (config.mapPropsToState) {
        const { fn: mapPropsToState2, propertyReads } = proxyFn(
          config.mapPropsToState,
          {
            getProxyTargetFromArgs: (initialArg) => initialArg.props,
            putProxyToArgs: (props2, initialArg) => {
              return [__spreadProps(__spreadValues({}, initialArg), { props: props2 })];
            }
          }
        );
        const stateFromProps = mapPropsToState2({
          props: getProps(),
          state: newState,
          oldState: previousState,
          parentState: parentState2
          // getState: getComponentState
        });
        propsToStateSetRef.current = /* @__PURE__ */ new Set([
          ...propsToStateSetRef.current,
          ...propertyReads
        ]);
        Object.assign(newState, stateFromProps);
      }
      const result = config.concludeReducer ? config.concludeReducer({
        previousState,
        state: newState,
        updatedProps,
        parentState: parentState2
      }) : newState;
      return result;
    };
    const [state, dispatch] = useReducer(
      theReducer,
      wholeState
    );
    const getComponentState = useLatest(state);
    const { allowedControlledPropOverrides } = config;
    const actions = useMemo3(() => {
      const generatedActions = getReducerGeneratedActions(
        dispatch,
        getComponentState,
        getProps,
        propsToForward,
        allowedControlledPropOverrides,
        config.interceptActions,
        config.mappedCallbacks
      );
      return generatedActions;
    }, [
      dispatch,
      propsToForward,
      allowedControlledPropOverrides
    ]);
    const Context = getComponentStateContext();
    const contextValue = useMemo3(
      () => ({
        componentState: state,
        componentActions: actions,
        getComponentState
      }),
      [state, actions, getComponentState]
    );
    const prevProps = usePrevious(props);
    const effectFn = config.layoutEffect ? useLayoutEffect7 : useEffect9;
    effectFn(() => {
      const currentProps = props;
      const newMappedState = {};
      let newMappedStateCount = 0;
      const updatedPropsToState = {};
      let updatedPropsToStateCount = 0;
      const rawUpdatedProps = {};
      let rawUpdatedPropsCount = 0;
      const allKeys = /* @__PURE__ */ new Set([
        ...Object.keys(currentProps),
        ...Object.keys(prevProps)
      ]);
      allKeys.forEach((k) => {
        const key = k;
        const oldValue = prevProps[key];
        const newValue = currentProps[key];
        if (key === "children") {
          return;
        }
        if (oldValue === newValue) {
          return;
        }
        rawUpdatedProps[key] = { newValue, oldValue };
        rawUpdatedPropsCount++;
        if (isControlled(key, props) || isControlled(key, prevProps)) {
          if (propsToForward.hasOwnProperty(k)) {
            let valueToSet = newValue;
            const forwardFn = propsToForward[k];
            if (typeof forwardFn === "function") {
              valueToSet = forwardFn(newValue);
            }
            if (state[key] !== valueToSet) {
              newMappedState[key] = valueToSet;
              newMappedStateCount++;
            }
          } else if (propsToStateSetRef.current.has(k)) {
            updatedPropsToState[key] = currentProps[key];
            updatedPropsToStateCount++;
          }
        }
      });
      if (updatedPropsToStateCount > 0 || newMappedStateCount > 0) {
        debug3(
          "Triggered by new values for the following props",
          ...[
            ...Object.keys(newMappedState != null ? newMappedState : {}),
            ...Object.keys(updatedPropsToState != null ? updatedPropsToState : {})
          ]
        );
        const action = {
          payload: {
            mappedState: newMappedStateCount ? newMappedState : null,
            updatedPropsToState: updatedPropsToStateCount ? updatedPropsToState : null
          }
        };
        dispatch(action);
        if (config.onPropChange) {
          for (var prop in rawUpdatedProps)
            if (rawUpdatedProps.hasOwnProperty(prop)) {
              const { newValue, oldValue } = rawUpdatedProps[prop];
              config.onPropChange(
                { name: prop, newValue, oldValue },
                props,
                actions,
                state
              );
            }
        }
        if (config.onPropsChange && rawUpdatedPropsCount) {
          config.onPropsChange(rawUpdatedProps, props, actions, state);
        }
      }
    });
    useEffectOnce(() => {
      return () => {
        var _a2;
        (_a2 = config.cleanup) == null ? void 0 : _a2.call(config, getComponentState());
      };
    });
    return /* @__PURE__ */ React13.createElement(Context.Provider, { value: contextValue }, props.children);
  });
}
function useComponentState() {
  const Context = getComponentStateContext();
  return React13.useContext(Context);
}

// src/components/InfiniteTable/components/InfiniteTableBody/index.tsx
init_esm_shims();

// src/components/InfiniteTable/components/InfiniteTableBody/InfiniteTableBody.tsx
init_esm_shims();
import * as React14 from "react";

// src/components/InfiniteTable/hooks/useInternalProps.ts
init_esm_shims();
var useInternalProps = () => {
  return internalProps;
};

// src/components/InfiniteTable/utilities.css.ts
init_esm_shims();
var absoluteCover = "utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_left_0__16lm1iw1d utilities_right_0__16lm1iw1i utilities_bottom_0__16lm1iw1g";
var alignItems = { center: "utilities_alignItems_center__16lm1iw1p", stretch: "utilities_alignItems_stretch__16lm1iw1q" };
var cssEllipsisClassName = "utilities_whiteSpace_nowrap__16lm1iw22 utilities_textOverflow_ellipsis__16lm1iw23 utilities_overflow_hidden__16lm1iw1w";
var cursor = { pointer: "utilities_cursor_pointer__16lm1iwh", "default": "utilities_cursor_default__16lm1iwi", colResize: "utilities_cursor_colResize__16lm1iwj" };
var display = { flex: "utilities_display_flex__16lm1iwy", contents: "utilities_display_contents__16lm1iwz", none: "utilities_display_none__16lm1iw10", block: "utilities_display_block__16lm1iw11", grid: "utilities_display_grid__16lm1iw12", inlineBlock: "utilities_display_inlineBlock__16lm1iw13", inlineFlex: "utilities_display_inlineFlex__16lm1iw14", inlineGrid: "utilities_display_inlineGrid__16lm1iw15" };
var flex = { "1": "utilities_flex_1__16lm1iwl", none: "utilities_flex_none__16lm1iwm" };
var flexFlow = { column: "utilities_flexFlow_column__16lm1iw1l", columnReverse: "utilities_flexFlow_columnReverse__16lm1iw1m", row: "utilities_flexFlow_row__16lm1iw1n", rowReverse: "utilities_flexFlow_rowReverse__16lm1iw1o" };
var justifyContent = { center: "utilities_justifyContent_center__16lm1iw1r", spaceBetween: "utilities_justifyContent_spaceBetween__16lm1iw1s", spaceAround: "utilities_justifyContent_spaceAround__16lm1iw1t", start: "utilities_justifyContent_start__16lm1iw1u", end: "utilities_justifyContent_end__16lm1iw1v" };
var left = { "0": "utilities_left_0__16lm1iw1d", "100%": "utilities_left_100%__16lm1iw1e", auto: "utilities_left_auto__16lm1iw1f" };
var outline = { none: "utilities_outline_none__16lm1iwc" };
var overflow = { hidden: "utilities_overflow_hidden__16lm1iw1w", auto: "utilities_overflow_auto__16lm1iw1x", visible: "utilities_overflow_visible__16lm1iw1y" };
var position = { relative: "utilities_position_relative__16lm1iw1", absolute: "utilities_position_absolute__16lm1iw2", "static": "utilities_position_static__16lm1iw3", sticky: "utilities_position_sticky__16lm1iw4", fixed: "utilities_position_fixed__16lm1iw5" };
var top = { "0": "utilities_top_0__16lm1iw1b", "100%": "utilities_top_100%__16lm1iw1c" };
var transformTranslateZero = "utilities_transformTranslateZero__16lm1iwd";
var userSelect = { none: "utilities_userSelect_none__16lm1iw16" };
var zIndex = { "1": "utilities_zIndex_1__16lm1iwn", "10": "utilities_zIndex_10__16lm1iwo", "100": "utilities_zIndex_100__16lm1iwp", "1000": "utilities_zIndex_1000__16lm1iwq", "10000": "utilities_zIndex_10000__16lm1iwr", "100000": "utilities_zIndex_100000__16lm1iws", "1000000": "utilities_zIndex_1000000__16lm1iwt", "10000000": "utilities_zIndex_10000000__16lm1iwu", "1k": "utilities_zIndex_1k__16lm1iwv", "10k": "utilities_zIndex_10k__16lm1iww", "100k": "utilities_zIndex_100k__16lm1iwx" };

// src/components/InfiniteTable/components/InfiniteTableBody/InfiniteTableBody.tsx
var InfiniteTableBody = React14.forwardRef(function InfiniteTableBody2(props, ref) {
  const { rootClassName: rootClassName12 } = useInternalProps();
  return /* @__PURE__ */ React14.createElement(
    "div",
    __spreadProps(__spreadValues({
      ref
    }, props), {
      className: join(
        `${rootClassName12}Body`,
        position.relative,
        flex["1"],
        transformTranslateZero,
        props.className
      )
    })
  );
});

// src/components/InfiniteTable/components/InfiniteTableFooter/index.tsx
init_esm_shims();

// src/components/InfiniteTable/components/InfiniteTableFooter/InfiniteTableFooter.tsx
init_esm_shims();
import * as React15 from "react";
var InfiniteTableFooter = React15.forwardRef(
  function InfiniteTableFooter2(props, ref) {
    const { rootClassName: rootClassName12 } = useInternalProps();
    return /* @__PURE__ */ React15.createElement(
      "div",
      __spreadProps(__spreadValues({
        ref
      }, props), {
        className: join(
          `${rootClassName12}Footer`,
          position.relative,
          display.flex,
          flexFlow.row,
          props.className
        )
      })
    );
  }
);

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeaderCell.tsx
init_esm_shims();
import * as React42 from "react";
import { useCallback as useCallback14, useContext as useContext6, useEffect as useEffect15, useRef as useRef16 } from "react";
import { createPortal } from "react-dom";

// src/utils/keyMirror.ts
init_esm_shims();
function keyMirror(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[key] = key;
  });
  return result;
}

// src/components/DataSource/defaultFilterTypes.ts
init_esm_shims();

// src/components/InfiniteTable/components/icons/IncludesOperatorIcon.tsx
init_esm_shims();

// src/components/InfiniteTable/components/icons/Icon.tsx
init_esm_shims();
import * as React16 from "react";
var Icon = (props) => {
  var _a;
  const size = (_a = props.size) != null ? _a : `var(--infinite-icon-size)`;
  const style2 = __spreadValues({
    flex: "none",
    width: size,
    height: size,
    fill: "currentColor"
  }, props.style);
  return (
    //@ts-ignore
    /* @__PURE__ */ React16.createElement("svg", __spreadProps(__spreadValues({ viewBox: "0 0 24 24" }, props), { style: style2 }), props.children)
  );
};

// src/components/InfiniteTable/components/icons/IncludesOperatorIcon.tsx
import * as React17 from "react";
var IncludesOperatorIcon = (props) => {
  return /* @__PURE__ */ React17.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React17.createElement("path", { d: "M5,4V7H10.5V19H13.5V7H19V4H5Z" }));
};

// src/components/InfiniteTable/components/icons/EndsWithOperatorIcon.tsx
init_esm_shims();
import * as React18 from "react";
var EndsWithOperatorIcon = (props) => {
  return /* @__PURE__ */ React18.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React18.createElement("path", { d: "M11.14 4L6.43 16H8.36L9.32 13.43H14.67L15.64 16H17.57L12.86 4M12 6.29L14.03 11.71H9.96M20 14V18H2V20H22V14Z" }));
};

// src/components/InfiniteTable/components/icons/EqualOperatorIcon.tsx
init_esm_shims();
import * as React19 from "react";
var EqualOperatorIcon = (props) => {
  return /* @__PURE__ */ React19.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React19.createElement("path", { d: "M19,10H5V8H19V10M19,16H5V14H19V16Z" }));
};

// src/components/InfiniteTable/components/icons/GTEOperatorIcon.tsx
init_esm_shims();
import * as React20 from "react";
var GTEOperatorIcon = (props) => {
  return /* @__PURE__ */ React20.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React20.createElement("path", { d: "M6.5,2.27L20,10.14L6.5,18L5.5,16.27L16.03,10.14L5.5,4L6.5,2.27M20,20V22H5V20H20Z" }));
};

// src/components/InfiniteTable/components/icons/GTOperatorIcon.tsx
init_esm_shims();
import * as React21 from "react";
var GTOperatorIcon = (props) => {
  return /* @__PURE__ */ React21.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React21.createElement("path", { d: "M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" }));
};

// src/components/InfiniteTable/components/icons/LTEOperatorIcon.tsx
init_esm_shims();
import * as React22 from "react";
var LTEOperatorIcon = (props) => {
  return /* @__PURE__ */ React22.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React22.createElement("path", { d: "M18.5,2.27L5,10.14L18.5,18L19.5,16.27L8.97,10.14L19.5,4L18.5,2.27M5,20V22H20V20H5Z" }));
};

// src/components/InfiniteTable/components/icons/LTOperatorIcon.tsx
init_esm_shims();
import * as React23 from "react";
var LTOperatorIcon = (props) => {
  return /* @__PURE__ */ React23.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React23.createElement("path", { d: "M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z" }));
};

// src/components/InfiniteTable/components/icons/NotEqualOperatorIcon.tsx
init_esm_shims();
import * as React24 from "react";
var NotEqualOperatorIcon = (props) => {
  return /* @__PURE__ */ React24.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React24.createElement("path", { d: "M21,10H9V8H21V10M21,16H9V14H21V16M4,5H6V16H4V5M6,18V20H4V18H6Z" }));
};

// src/components/InfiniteTable/components/icons/StartsWithOperatorIcon.tsx
init_esm_shims();
import * as React25 from "react";
var StartsWithOperatorIcon = (props) => {
  return /* @__PURE__ */ React25.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React25.createElement("path", { d: "M11.14 4L6.43 16H8.36L9.32 13.43H14.67L15.64 16H17.57L12.86 4M12 6.29L14.03 11.71H9.96M4 18V15H2V20H22V18Z" }));
};

// src/components/InfiniteTable/components/FilterEditors.tsx
init_esm_shims();
import * as React29 from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableColumnHeaderFilter.tsx
init_esm_shims();
import * as React28 from "react";
import { useEffect as useEffect11, useState as useState6 } from "react";

// src/components/InfiniteTable/hooks/useInfiniteTable.ts
init_esm_shims();
import { useContext as useContext3 } from "react";

// src/components/InfiniteTable/InfiniteTableContext.ts
init_esm_shims();
import { createContext as createContext3 } from "react";
var TableContext;
function getInfiniteTableContext() {
  if (TableContext) {
    return TableContext;
  }
  return TableContext = createContext3(
    null
  );
}

// src/components/InfiniteTable/hooks/useInfiniteTable.ts
var useInfiniteTable = () => {
  const TableContext2 = getInfiniteTableContext();
  return useContext3(TableContext2);
};

// src/components/InfiniteTable/components/icons/FilterIcon.tsx
init_esm_shims();
import * as React26 from "react";
import { useEffect as useEffect10, useLayoutEffect as useLayoutEffect8, useState as useState5 } from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/header.css.ts
init_esm_shims();

// ../node_modules/@vanilla-extract/recipes/createRuntimeFn/dist/vanilla-extract-recipes-createRuntimeFn.esm.js
init_esm_shims();
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
  for (var key of Object.keys(compoundCheck)) {
    var _selections$key;
    if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
      return false;
    }
  }
  return true;
};
var createRuntimeFn = (config) => (options) => {
  var className = config.defaultClassName;
  var selections = _objectSpread2(_objectSpread2({}, config.defaultVariants), options);
  for (var variantName in selections) {
    var _selections$variantNa;
    var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
    if (variantSelection != null) {
      var selection = variantSelection;
      if (typeof selection === "boolean") {
        selection = selection === true ? "true" : "false";
      }
      var selectionClassName = (
        // @ts-expect-error
        config.variantClassNames[variantName][selection]
      );
      if (selectionClassName) {
        className += " " + selectionClassName;
      }
    }
  }
  for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
    if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
      className += " " + compoundClassName;
    }
  }
  return className;
};

// src/components/InfiniteTable/components/InfiniteTableHeader/header.css.ts
var CellCls = "cell_CellCls__1eexc2a5 utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n utilities_alignItems_center__16lm1iw1p utilities_position_absolute__16lm1iw2 utilities_willChange_transform__16lm1iw21 utilities_whiteSpace_nowrap__16lm1iw22 utilities_userSelect_none__16lm1iw16";
var HeaderCellContentRecipe = createRuntimeFn({ defaultClassName: "header_HeaderCellContentRecipe__12zfob11v utilities_height_100%__16lm1iw18 utilities_width_100%__16lm1iw1a utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n utilities_alignItems_center__16lm1iw1p utilities_justifyContent_start__16lm1iw1u", variantClassNames: { filtered: { false: "header_HeaderCellContentRecipe_filtered_false__12zfob11w", true: "header_HeaderCellContentRecipe_filtered_true__12zfob11x" }, verticalAlign: { start: "header_HeaderCellContentRecipe_verticalAlign_start__12zfob11y", end: "header_HeaderCellContentRecipe_verticalAlign_end__12zfob11z", center: "header_HeaderCellContentRecipe_verticalAlign_center__12zfob120" }, align: { start: "header_HeaderCellContentRecipe_align_start__12zfob121", end: "header_HeaderCellContentRecipe_align_end__12zfob122", center: "header_HeaderCellContentRecipe_align_center__12zfob123" } }, defaultVariants: {}, compoundVariants: [] });
var HeaderCellProxy = "header_HeaderCellProxy__12zfob1m utilities_whiteSpace_nowrap__16lm1iw22 utilities_textOverflow_ellipsis__16lm1iw23 utilities_overflow_hidden__16lm1iw1w";
var HeaderCellRecipe = createRuntimeFn({ defaultClassName: "header_HeaderCellRecipe__12zfob1n utilities_display_block__16lm1iw11", variantClassNames: { rowActive: { false: "header_HeaderCellRecipe_rowActive_false__12zfob1o", true: "header_HeaderCellRecipe_rowActive_true__12zfob1p" }, rowSelected: { false: "header_HeaderCellRecipe_rowSelected_false__12zfob1q", true: "header_HeaderCellRecipe_rowSelected_true__12zfob1r", null: "header_HeaderCellRecipe_rowSelected_null__12zfob1s" }, groupRow: { false: "header_HeaderCellRecipe_groupRow_false__12zfob1t", true: "header_HeaderCellRecipe_groupRow_true__12zfob1u" }, groupCell: { false: "header_HeaderCellRecipe_groupCell_false__12zfob1v", true: "header_HeaderCellRecipe_groupCell_true__12zfob1w" }, align: { start: "header_HeaderCellRecipe_align_start__12zfob1x", end: "header_HeaderCellRecipe_align_end__12zfob1y", center: "header_HeaderCellRecipe_align_center__12zfob1z" }, verticalAlign: { start: "header_HeaderCellRecipe_verticalAlign_start__12zfob110", end: "header_HeaderCellRecipe_verticalAlign_end__12zfob111", center: "header_HeaderCellRecipe_verticalAlign_center__12zfob112" }, zebra: { false: "header_HeaderCellRecipe_zebra_false__12zfob113", even: "header_HeaderCellRecipe_zebra_even__12zfob114", odd: "header_HeaderCellRecipe_zebra_odd__12zfob115" }, dragging: { true: "header_HeaderCellRecipe_dragging_true__12zfob116", false: "header_HeaderCellRecipe_dragging_false__12zfob117" }, first: { true: "header_HeaderCellRecipe_first_true__12zfob118", false: "header_HeaderCellRecipe_first_false__12zfob119" }, last: { true: "header_HeaderCellRecipe_last_true__12zfob11a", false: "header_HeaderCellRecipe_last_false__12zfob11b" }, groupByField: { true: "header_HeaderCellRecipe_groupByField_true__12zfob11c", false: "header_HeaderCellRecipe_groupByField_false__12zfob11d" }, firstInCategory: { true: "header_HeaderCellRecipe_firstInCategory_true__12zfob11e", false: "header_HeaderCellRecipe_firstInCategory_false__12zfob11f" }, lastInCategory: { true: "header_HeaderCellRecipe_lastInCategory_true__12zfob11g", false: "header_HeaderCellRecipe_lastInCategory_false__12zfob11h" }, pinned: { start: "header_HeaderCellRecipe_pinned_start__12zfob11i", end: "header_HeaderCellRecipe_pinned_end__12zfob11j", false: "header_HeaderCellRecipe_pinned_false__12zfob11k" }, filtered: { true: "header_HeaderCellRecipe_filtered_true__12zfob11l", false: "header_HeaderCellRecipe_filtered_false__12zfob11m" } }, defaultVariants: {}, compoundVariants: [[{ pinned: "start", lastInCategory: true }, "header_HeaderCellRecipe_compound_0__12zfob11n"], [{ pinned: "end", firstInCategory: true }, "header_HeaderCellRecipe_compound_1__12zfob11o"], [{ pinned: false, lastInCategory: true }, "header_HeaderCellRecipe_compound_2__12zfob11p"]] });
var HeaderClsRecipe = createRuntimeFn({ defaultClassName: "header_HeaderClsRecipe__12zfob18 utilities_display_block__16lm1iw11 utilities_position_absolute__16lm1iw2", variantClassNames: { pinned: { start: "header_HeaderClsRecipe_pinned_start__12zfob19", end: "header_HeaderClsRecipe_pinned_end__12zfob1a", false: "header_HeaderClsRecipe_pinned_false__12zfob1b" }, firstInCategory: { true: "header_HeaderClsRecipe_firstInCategory_true__12zfob1c", false: "header_HeaderClsRecipe_firstInCategory_false__12zfob1d" }, lastInCategory: { true: "header_HeaderClsRecipe_lastInCategory_true__12zfob1e", false: "header_HeaderClsRecipe_lastInCategory_false__12zfob1f" }, overflow: { true: "header_HeaderClsRecipe_overflow_true__12zfob1g", false: "header_HeaderClsRecipe_overflow_false__12zfob1h" } }, defaultVariants: {}, compoundVariants: [[{ overflow: true, pinned: "start" }, "header_HeaderClsRecipe_compound_0__12zfob1i"], [{ pinned: "start", firstInCategory: true }, "header_HeaderClsRecipe_compound_1__12zfob1j"], [{ overflow: true, pinned: "end" }, "header_HeaderClsRecipe_compound_2__12zfob1k"], [{ pinned: "end", lastInCategory: true }, "header_HeaderClsRecipe_compound_3__12zfob1l"]] });
var HeaderFilterCls = "header_HeaderFilterCls__12zfob126 utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n utilities_alignItems_stretch__16lm1iw1q utilities_position_relative__16lm1iw1";
var HeaderFilterEditorCls = "header_HeaderFilterEditorCls__12zfob12b utilities_width_100%__16lm1iw1a utilities_height_100%__16lm1iw18";
var HeaderFilterIconIndexCls = "header_HeaderFilterIconIndexCls__12zfob16";
var HeaderFilterOperatorCls = "header_HeaderFilterOperatorCls__12zfob127 utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n utilities_alignItems_center__16lm1iw1p utilities_position_relative__16lm1iw1";
var HeaderFilterOperatorIconRecipe = createRuntimeFn({ defaultClassName: "header_HeaderFilterOperatorIconRecipe__12zfob128 utilities_position_relative__16lm1iw1 utilities_top_0__16lm1iw1b", variantClassNames: { disabled: { true: "header_HeaderFilterOperatorIconRecipe_disabled_true__12zfob129", false: "header_HeaderFilterOperatorIconRecipe_disabled_false__12zfob12a" } }, defaultVariants: {}, compoundVariants: [] });
var HeaderGroupCls = "header_HeaderGroupCls__12zfob125 utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n utilities_alignItems_center__16lm1iw1p";
var HeaderMenuIconCls = createRuntimeFn({ defaultClassName: "header_HeaderMenuIconCls__12zfob11q utilities_position_relative__16lm1iw1 utilities_display_flex__16lm1iwy utilities_flexFlow_column__16lm1iw1l utilities_justifyContent_spaceAround__16lm1iw1t utilities_visibility_hidden__16lm1iw20", variantClassNames: { menuVisible: { true: "header_HeaderMenuIconCls_menuVisible_true__12zfob11r" }, reserveSpaceWhenHidden: { true: "header_HeaderMenuIconCls_reserveSpaceWhenHidden_true__12zfob11s", false: "header_HeaderMenuIconCls_reserveSpaceWhenHidden_false__12zfob11t" } }, defaultVariants: {}, compoundVariants: [[{ menuVisible: true, reserveSpaceWhenHidden: false }, "header_HeaderMenuIconCls_compound_0__12zfob11u"]] });
var HeaderScrollbarPlaceholderCls = "header_HeaderScrollbarPlaceholderCls__12zfob17 utilities_position_absolute__16lm1iw2";
var HeaderSortIconCls = "utilities_position_relative__16lm1iw1";
var HeaderSortIconIndexCls = "header_HeaderSortIconIndexCls__12zfob15";
var HeaderSortIconRecipe = createRuntimeFn({ defaultClassName: "", variantClassNames: { align: { start: "header_HeaderSortIconRecipe_align_start__12zfob12", center: "header_HeaderSortIconRecipe_align_center__12zfob13", end: "header_HeaderSortIconRecipe_align_end__12zfob14" } }, defaultVariants: {}, compoundVariants: [] });
var HeaderWrapperCls = "header_HeaderWrapperCls__12zfob124 utilities_overflow_hidden__16lm1iw1w utilities_position_relative__16lm1iw1 utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n";

// src/components/InfiniteTable/components/icons/InfiniteTableIconClassName.ts
init_esm_shims();
var InfiniteTableIconClassName = "InfiniteTableIcon";

// src/components/InfiniteTable/components/icons/FilterIcon.css.ts
init_esm_shims();
var FilterIconCls = "FilterIcon_FilterIconCls__6aunoi0 utilities_display_flex__16lm1iwy utilities_flexFlow_column__16lm1iw1l utilities_position_relative__16lm1iw1 utilities_justifyContent_spaceAround__16lm1iw1t utilities_alignItems_center__16lm1iw1p";

// src/components/InfiniteTable/components/icons/FilterIcon.tsx
var defaultLineStyle = {
  // marginTop: 4,
  // marginBottom: 1,
  transition: `width 0.25s, opacity 0.25s`
};
function FilterIcon(props) {
  var _a;
  const [rendered, setRendered] = useState5(true);
  const [opacity, setOpacity] = useState5(0);
  const { lineWidth = 1, style: style2, className, index } = props;
  const showIndex = index != null && index > 0;
  const size = (_a = props.size) != null ? _a : 16;
  const part = Math.floor(size / 4);
  const sizes = [size - 1 * part, size - 2 * part, size - 3 * part];
  const lineStyle = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, defaultLineStyle), {
    borderTop: `${lineWidth}px solid currentColor`
  }), props.lineStyle), {
    opacity
  });
  useEffect10(() => {
    if (!rendered) {
      return;
    }
    const rafId = requestAnimationFrame(() => {
      setOpacity(1);
    });
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [rendered]);
  useLayoutEffect8(() => {
    setRendered(true);
  }, []);
  if (!rendered) {
    return null;
  }
  const indexStyle = {};
  return /* @__PURE__ */ React26.createElement(
    "div",
    {
      "data-name": "filter-icon",
      style: __spreadProps(__spreadValues({}, style2), { width: size }),
      className: join(
        className,
        InfiniteTableIconClassName,
        FilterIconCls,
        `${InfiniteTableIconClassName}-sort`
      )
    },
    showIndex ? /* @__PURE__ */ React26.createElement(
      "div",
      {
        "data-name": "index",
        style: indexStyle,
        className: HeaderFilterIconIndexCls
      },
      index
    ) : null,
    /* @__PURE__ */ React26.createElement("div", { style: __spreadValues({ width: sizes[0] }, lineStyle) }),
    /* @__PURE__ */ React26.createElement("div", { style: __spreadValues({ width: sizes[1] }, lineStyle) }),
    /* @__PURE__ */ React26.createElement("div", { style: __spreadValues({ width: sizes[2] }, lineStyle) })
  );
}

// src/components/InfiniteTable/components/InfiniteTableHeader/getColumnLabel.ts
init_esm_shims();

// src/components/InfiniteTable/api/getColumnApi.ts
init_esm_shims();

// src/components/InfiniteTable/utils/getComputedColumns.ts
init_esm_shims();

// src/components/flexbox/index.ts
init_esm_shims();
var computeFlex = (params) => {
  const {
    availableSize,
    items,
    minSize: defaultMinSize,
    maxSize: defaultMaxSize
  } = params;
  if (availableSize < 0) {
    throw "The provided availableSize cannot be negative!";
  }
  let totalFixedSize = 0;
  let totalFlex = 0;
  let totalFlexCount = 0;
  const minSizes = [];
  const maxSizes = [];
  items.forEach((item, i) => {
    var _a, _b, _c, _d, _e;
    let maxSize = (_b = (_a = item.maxSize) != null ? _a : defaultMaxSize) != null ? _b : void 0;
    let minSize = (_d = (_c = item.minSize) != null ? _c : defaultMinSize) != null ? _d : void 0;
    minSizes.push(minSize);
    maxSizes.push(maxSize);
    if (item.size != null) {
      if (maxSize != null && item.size > maxSize) {
        item.size = maxSize;
      }
      if (minSize != null && item.size < minSize) {
        item.size = minSize;
      }
    }
    const itemFlex = item.flex == 0 ? null : item.flex;
    if (item.size == null && itemFlex == null) {
      throw `Items must specify either a size or a flex property. Item at index ${i} doesn't have either of those.`;
    }
    if (itemFlex != null) {
      totalFlexCount += 1;
    }
    totalFlex += itemFlex != null ? itemFlex : 0;
    totalFixedSize += (_e = item.size) != null ? _e : 0;
  });
  let availableSizeForFlex = params.computeSpecialSpaceDistribution ? Math.max(availableSize, 0) : Math.max(availableSize - totalFixedSize, 0);
  let sizePerFlex = availableSizeForFlex / totalFlex;
  let maxxedFlexItems = {};
  let minnedFlexItems = {};
  let constrainedCount = 0;
  items.forEach((item, index) => {
    var _a, _b, _c, _d;
    if (item.flex != null) {
      const approxFlexSize = sizePerFlex * item.flex;
      let maxSize = (_b = (_a = item.maxSize) != null ? _a : defaultMaxSize) != null ? _b : void 0;
      let minSize = (_d = (_c = item.minSize) != null ? _c : defaultMinSize) != null ? _d : void 0;
      let constrained = false;
      let substractSize = 0;
      if (maxSize != null && approxFlexSize > maxSize) {
        maxxedFlexItems[index] = true;
        constrained = true;
        substractSize = maxSize;
      }
      if (minSize != null && approxFlexSize < minSize) {
        minnedFlexItems[index] = true;
        constrained = true;
        substractSize = minSize;
      }
      if (constrained) {
        constrainedCount += 1;
        totalFlexCount -= 1;
        totalFlex -= item.flex;
        availableSizeForFlex -= substractSize;
      }
    }
  });
  if (constrainedCount) {
    sizePerFlex = availableSizeForFlex / totalFlex;
  }
  let flexSizes = [];
  let currentFlexCount = 0;
  let remainingSizeForFlex = availableSizeForFlex;
  let remainingFlex = totalFlex;
  let totalTakenSize = 0;
  let flexSizeSum = 0;
  const computedSizes = [];
  const resultItems = items.map((item, index) => {
    var _a, _b, _c, _d, _e;
    const sizedItem = __spreadValues({}, item);
    let maxSize = (_b = (_a = item.maxSize) != null ? _a : defaultMaxSize) != null ? _b : void 0;
    let minSize = (_d = (_c = item.minSize) != null ? _c : defaultMinSize) != null ? _d : void 0;
    let flexSize = 0;
    const maxxed = maxxedFlexItems[index];
    const minned = minnedFlexItems[index];
    const constrained = maxxed || minned;
    let computedSize = (_e = item.size) != null ? _e : 0;
    if (item.flex != null) {
      if (constrained) {
        if (minned) {
          flexSize = minSize;
        }
        if (maxxed) {
          flexSize = maxSize;
        }
      } else {
        currentFlexCount += 1;
        const constrain = (size) => {
          if (maxSize != null && size > maxSize) {
            size = maxSize;
          }
          if (minSize != null && size < minSize) {
            size = minSize;
          }
          return size;
        };
        if (currentFlexCount === totalFlexCount) {
          flexSize = constrain(remainingSizeForFlex);
        } else {
          flexSize = constrain(Math.round(item.flex * sizePerFlex));
          flexSizeSum += flexSize;
          remainingSizeForFlex = availableSizeForFlex - flexSizeSum;
          remainingFlex -= item.flex;
          sizePerFlex = remainingSizeForFlex / remainingFlex;
        }
      }
      computedSize = flexSize;
      sizedItem.flexSize = flexSize;
    }
    flexSizes.push(flexSize);
    computedSizes.push(computedSize);
    sizedItem.computedSize = computedSize;
    totalTakenSize += computedSize;
    return sizedItem;
  });
  return {
    items: resultItems,
    flexSizes,
    minSizes,
    maxSizes,
    computedSizes,
    remainingSize: Math.round(availableSize - totalTakenSize)
  };
};
function resizeClamp(value, min, max, direction) {
  if (min != null && value <= min) {
    return { value: min, clamped: "min", diff: (value - min) * direction };
  }
  if (max != null && value >= max) {
    return { value: max, clamped: "max", diff: (max - value) * direction };
  }
  return { value, clamped: false, diff: 0 };
}
var computeResize = (params) => {
  const { availableSize, reservedWidth = 0 } = params;
  const columnSizing = Object.keys(
    params.columnSizing
  ).reduce((acc, key) => {
    acc[key] = __spreadValues({}, params.columnSizing[key]);
    return acc;
  }, {});
  if (availableSize < 0) {
    throw "The provided availableSize cannot be negative!";
  }
  let dragHandleOffset = params.dragHandleOffset;
  const firstIndex = params.dragHandlePositionAfter;
  const secondIndex = params.dragHandlePositionAfter + 1;
  const firstItem = params.items[firstIndex];
  const secondItem = params.items[secondIndex];
  const firstId = firstItem.id;
  const secondId = secondItem == null ? void 0 : secondItem.id;
  const firstSize = firstItem.computedWidth;
  const firstMinSize = firstItem.computedMinWidth;
  const firstMaxSize = firstItem.computedMaxWidth;
  const firstPropertyToAdjust = firstItem.computedFlex ? "flex" : "width";
  const secondSize = secondItem == null ? void 0 : secondItem.computedWidth;
  const secondMinSize = secondItem == null ? void 0 : secondItem.computedMinWidth;
  const secondMaxSize = secondItem == null ? void 0 : secondItem.computedMaxWidth;
  const secondPropertyToAdjust = (secondItem == null ? void 0 : secondItem.computedFlex) ? "flex" : "width";
  let maxReached = false;
  let minReached = false;
  const direction = dragHandleOffset > 0 ? 1 : -1;
  let {
    value: firstAdjustedSize,
    clamped: firstClamped,
    diff: firstDiff
  } = resizeClamp(
    firstSize + dragHandleOffset,
    firstMinSize,
    firstMaxSize,
    direction
  );
  if (params.shareSpaceOnResize) {
    if (secondItem == null) {
      columnSizing[firstId] = __spreadProps(__spreadValues({}, columnSizing[firstId]), {
        [firstPropertyToAdjust]: firstAdjustedSize
      });
      minReached = firstClamped === "min";
      maxReached = firstClamped === "max";
      const adjustedDiff2 = firstAdjustedSize - firstSize;
      return {
        adjustedDiff: adjustedDiff2,
        reservedWidth,
        columnSizing,
        minReached,
        maxReached,
        constrained: minReached || maxReached
      };
    }
    let {
      value: secondAdjustedSize,
      clamped: secondClamped,
      diff: secondDiff
    } = resizeClamp(
      secondSize - dragHandleOffset,
      secondMinSize,
      secondMaxSize,
      direction
    );
    if (firstClamped && secondClamped) {
      if (Math.abs(firstDiff) > Math.abs(secondDiff)) {
        secondClamped = false;
      } else {
        firstClamped = false;
      }
    }
    if (!firstClamped && !secondClamped) {
    } else if (firstClamped) {
      const clampResultForSecond = resizeClamp(
        secondSize - dragHandleOffset - firstDiff,
        secondMinSize,
        secondMaxSize,
        direction
      );
      secondAdjustedSize = clampResultForSecond.value;
      secondClamped = clampResultForSecond.clamped;
      secondDiff = clampResultForSecond.diff;
    } else if (secondClamped) {
      const clampResultForFirst = resizeClamp(
        firstSize + dragHandleOffset + secondDiff,
        firstMinSize,
        firstMaxSize,
        direction
      );
      firstAdjustedSize = clampResultForFirst.value;
      firstClamped = clampResultForFirst.clamped;
      firstDiff = clampResultForFirst.diff;
    }
    columnSizing[firstId] = __spreadProps(__spreadValues({}, columnSizing[firstId]), {
      [firstPropertyToAdjust]: firstAdjustedSize
    });
    columnSizing[secondId] = __spreadProps(__spreadValues({}, columnSizing[secondId]), {
      [secondPropertyToAdjust]: secondAdjustedSize
    });
    minReached = firstClamped === "min" || secondClamped === "min";
    maxReached = firstClamped === "max" || secondClamped === "max";
  } else {
    columnSizing[firstId] = __spreadProps(__spreadValues({}, columnSizing[firstId]), {
      [firstPropertyToAdjust]: firstAdjustedSize
    });
    minReached = firstClamped === "min";
    maxReached = firstClamped === "max";
  }
  const adjustedDiff = firstAdjustedSize - firstSize;
  return {
    adjustedDiff,
    reservedWidth: !params.shareSpaceOnResize ? reservedWidth - adjustedDiff : reservedWidth,
    columnSizing,
    minReached,
    maxReached,
    constrained: minReached || maxReached
  };
};
function sum(a, b) {
  return a + b;
}
function cloneColumnSizing(columnSizing) {
  const newColumnSizing = Object.keys(
    columnSizing
  ).reduce((acc, key) => {
    acc[key] = __spreadValues({}, columnSizing[key]);
    return acc;
  }, {});
  return newColumnSizing;
}
var computeGroupResize = (params) => {
  const { availableSize, reservedWidth = 0 } = params;
  const columnSizing = Object.keys(
    params.columnSizing
  ).reduce((acc, key) => {
    acc[key] = __spreadValues({}, params.columnSizing[key]);
    return acc;
  }, {});
  if (availableSize < 0) {
    throw "The provided availableSize cannot be negative!";
  }
  let dragHandleOffset = params.dragHandleOffset;
  const beforeIndexes = [...new Array(params.columnGroupSize)].map((_, index) => params.dragHandlePositionAfter - index).reverse();
  const beforeItems = beforeIndexes.map((i) => params.items[i]);
  const beforeSizes = beforeItems.map((item) => item.computedWidth);
  const beforePropertiesToAdjust = beforeItems.map(
    (item) => item.computedFlex ? "flex" : "width"
  );
  let unresizableWidth = 0;
  const { computedSizes } = computeFlex({
    items: beforeItems.map((item) => {
      if (item.resizable === false) {
        unresizableWidth += item.computedWidth;
      }
      return {
        maxSize: item.computedMaxWidth,
        minSize: item.computedMinWidth,
        flex: item.resizable ? item.computedWidth : null,
        size: 0
      };
    }),
    computeSpecialSpaceDistribution: true,
    availableSize: Math.max(
      beforeSizes.reduce(sum, 0) + dragHandleOffset - unresizableWidth,
      0
    )
  });
  const diffsForEachItem = beforeItems.map((item, index) => {
    return computedSizes[index] - item.computedWidth;
  });
  let groupMinReached = true;
  let groupMaxReached = true;
  let groupConstrained = true;
  const adjustedDiffs = [];
  diffsForEachItem.forEach((diff, i) => {
    const item = beforeItems[i];
    if (!item.resizable) {
      adjustedDiffs.push(0);
      return;
    }
    const propertyToAdjust = beforePropertiesToAdjust[i];
    const itemSize = beforeSizes[i];
    const currentColumnSizing = cloneColumnSizing(columnSizing);
    const { maxReached, minReached, constrained, adjustedDiff: adjustedDiff2 } = computeResize(
      {
        availableSize: params.availableSize,
        reservedWidth: params.reservedWidth,
        dragHandleOffset: diff,
        // doesn't matter for share space on resize: false
        dragHandlePositionAfter: beforeIndexes[i],
        shareSpaceOnResize: false,
        items: params.items,
        columnSizing: currentColumnSizing
      }
    );
    columnSizing[item.id] = __spreadProps(__spreadValues({}, currentColumnSizing[item.id]), {
      [propertyToAdjust]: itemSize + adjustedDiff2
    });
    adjustedDiffs.push(adjustedDiff2);
    if (!maxReached) {
      groupMaxReached = false;
    }
    if (!minReached) {
      groupMinReached = false;
    }
    if (!constrained) {
      groupConstrained = false;
    }
  });
  const adjustedDiff = adjustedDiffs.reduce(sum, 0);
  return {
    minReached: groupMinReached,
    maxReached: groupMaxReached,
    constrained: groupConstrained,
    adjustedDiffs,
    adjustedDiff,
    columnSizing,
    reservedWidth: reservedWidth - adjustedDiff
  };
};

// src/components/utils/getScrollbarWidth.ts
init_esm_shims();
var scrollbarWidth;
function getScrollbarWidth() {
  var _a, _b;
  if (scrollbarWidth != null) {
    return scrollbarWidth;
  }
  const doc = (_a = getGlobal().document) != null ? _a : null;
  if (!doc) {
    return 0;
  }
  const outer = doc.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  doc.body.appendChild(outer);
  const inner = doc.createElement("div");
  outer.appendChild(inner);
  scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  (_b = outer.parentNode) == null ? void 0 : _b.removeChild(outer);
  return scrollbarWidth;
}

// src/components/InfiniteTable/utils/adjustColumnOrderForPinning.ts
init_esm_shims();
var order = ["start", void 0, "end"];
var adjustColumnOrderForPinning = (columnOrder, columnPinning) => {
  if (columnPinning && Object.keys(columnPinning).length > 0) {
    columnOrder.sort((colId1, colId2) => {
      let p1 = columnPinning[colId1];
      let p2 = columnPinning[colId2];
      if (p1 === true) {
        p1 = "start";
      }
      if (p2 === true) {
        p2 = "start";
      }
      if (p1 == p2) {
        return 0;
      }
      return order.indexOf(p1) - order.indexOf(p2);
    });
  }
  return columnOrder;
};

// src/components/InfiniteTable/utils/assignFiltered.ts
init_esm_shims();
function assignFiltered(filterFn, target, ...rest) {
  const result = target;
  rest.forEach((obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && filterFn(obj[key], key)) {
        result[key] = obj[key];
      }
    }
  });
  return result;
}
function assignNonNull(target, ...rest) {
  return assignFiltered((value) => value != null, target, ...rest);
}
function assignExcept(exceptKeys, target, ...rest) {
  return assignFiltered((_value, key) => !(key in exceptKeys), target, ...rest);
}

// src/components/InfiniteTable/utils/getColumnComputedType.ts
init_esm_shims();
var emptyType = Object.freeze({});
var defaultFilterTypes = {
  string: emptyType,
  number: {}
};
function getColumnComputedType(column, columnTypes) {
  const defaultType = columnTypes["default"] || emptyType;
  if (column.type === void 0) {
    return defaultType;
  }
  if (column.type === null) {
    return emptyType;
  }
  if (typeof column.type === "string") {
    const type = columnTypes[column.type] || defaultFilterTypes[column.type] || emptyType;
    return type;
  }
  return column.type.reduce(
    (acc, columnType) => Object.assign(acc, columnTypes[columnType]),
    {}
  );
}

// src/components/InfiniteTable/utils/getComputedColumns.ts
var DEFAULT_SORTABLE = true;
var DEFAULT_RESIZABLE = true;
var DEFAULT_DRAGGABLE = true;
var DEFAULT_DATA_TYPE = "string";
var UNKNOWN_SORT_TYPE = "unknown";
var logError = err("getComputedVisibleColumns");
var isColumnVisible = (columnVisibility, _columnVisibilityAssumeVisible, colId) => {
  return columnVisibility[colId] !== false;
};
var getComputedPinned = (colId, columnPinning) => {
  if (!columnPinning) {
    return false;
  }
  const pinned = columnPinning[colId];
  const computedPinned = pinned === "start" || pinned === true ? "start" : pinned === "end" ? "end" : false;
  return computedPinned;
};
var getComputedColumns = ({
  columns,
  bodySize,
  columnMinWidth,
  columnMaxWidth,
  columnDefaultWidth,
  columnDefaultFlex,
  scrollbarWidth: scrollbarWidth2,
  columnCssEllipsis,
  columnHeaderCssEllipsis,
  pinnedStartMaxWidth,
  pinnedEndMaxWidth,
  filterValue,
  sortable,
  sortInfo,
  multiSort,
  filterTypes = defaultFilterTypes2,
  viewportReservedWidth,
  resizableColumns,
  draggableColumns,
  columnOrder,
  columnPinning,
  editable,
  columnDefaultEditable,
  columnDefaultFilterable,
  columnDefaultSortable,
  columnSizing,
  columnTypes,
  columnVisibility,
  columnVisibilityAssumeVisible
}) => {
  let computedOffset = 0;
  const filterValueRecord = (filterValue || []).reduce(
    (acc, filterValueItem) => {
      const { id, field } = filterValueItem;
      if (field) {
        acc[field] = filterValueItem;
      }
      if (id) {
        acc[id] = filterValueItem;
      }
      return acc;
    },
    {}
  );
  const normalizedColumnOrder = adjustColumnOrderForPinning(
    columnOrder === true ? [...columns.keys()] : columnOrder,
    columnPinning
  );
  const visibleColumnOrder = normalizedColumnOrder.filter((colId) => {
    const col = columns.get(colId);
    if (!col) {
      logError(
        `Column with id "${colId}" specified in columnOrder array cannot be found in the columns map.`
      );
      return false;
    }
    const result2 = isColumnVisible(
      columnVisibility,
      columnVisibilityAssumeVisible,
      colId
    );
    return result2;
  });
  const columnIdsToVisibleIndex = /* @__PURE__ */ new Map();
  const visibleColumnsArray = visibleColumnOrder.map(
    (columnId, index) => {
      const col = columns.get(columnId);
      columnIdsToVisibleIndex.set(columnId, index);
      return col;
    }
  );
  const sortedMap = (sortInfo != null ? sortInfo : []).reduce(
    (acc, info, index) => {
      if (info.id) {
        acc[info.id] = { sortInfo: info, index };
      } else if (info.field) {
        acc[info.field] = {
          sortInfo: info,
          index
        };
      }
      return acc;
    },
    {}
  );
  function getColSize(colId) {
    var _a, _b, _c, _d, _e, _f;
    const column = columns.get(colId);
    const colType = getColumnComputedType(column, columnTypes);
    const colTypeSizing = {
      minWidth: colType == null ? void 0 : colType.minWidth,
      maxWidth: colType == null ? void 0 : colType.maxWidth,
      width: colType == null ? void 0 : colType.defaultWidth,
      flex: colType == null ? void 0 : colType.defaultFlex
    };
    let colSizing = assignNonNull(
      {
        width: column == null ? void 0 : column.defaultWidth,
        flex: column == null ? void 0 : column.defaultFlex,
        minWidth: column == null ? void 0 : column.minWidth,
        maxWidth: column == null ? void 0 : column.maxWidth
      },
      columnSizing[colId]
    );
    if (colSizing.width != null) {
      delete colTypeSizing.flex;
    }
    if (colSizing.flex != null) {
      delete colTypeSizing.width;
    }
    colSizing = assignNonNull(colTypeSizing, colSizing);
    let colFlex = (_a = colSizing.flex) != null ? _a : void 0;
    const colMinWidth = (_c = (_b = colSizing.minWidth) != null ? _b : column == null ? void 0 : column.minWidth) != null ? _c : columnMinWidth;
    const colMaxWidth = (_e = (_d = colSizing.maxWidth) != null ? _d : column == null ? void 0 : column.maxWidth) != null ? _e : columnMaxWidth;
    let size = colFlex != void 0 ? void 0 : (_f = colSizing.width) != null ? _f : columnDefaultFlex ? void 0 : columnDefaultWidth;
    if (!size && colFlex == void 0) {
      if (columnDefaultFlex) {
        colFlex = columnDefaultFlex;
      } else {
        size = colMinWidth;
      }
    }
    return {
      size,
      flex: colFlex,
      minSize: colMinWidth,
      maxSize: colMaxWidth
    };
  }
  const flexResult = computeFlex({
    availableSize: Math.max(
      bodySize.width - (viewportReservedWidth != null ? viewportReservedWidth : 0) - // see #scrollbarverticaltag
      (scrollbarWidth2 != null ? scrollbarWidth2 : getScrollbarWidth()),
      0
    ),
    maxSize: columnMaxWidth,
    minSize: columnMinWidth,
    items: visibleColumnOrder.map(getColSize)
  });
  const { computedSizes, flexSizes, minSizes, maxSizes } = flexResult;
  const computedPinnedStartColumns = [];
  const computedPinnedEndColumns = [];
  const computedUnpinnedColumns = [];
  const computedVisibleColumns = [];
  computedVisibleColumns.length = visibleColumnOrder.length;
  const computedVisibleColumnsMap = /* @__PURE__ */ new Map();
  const computedColumnsMap = /* @__PURE__ */ new Map();
  let computedUnpinnedColumnsWidth = 0;
  let computedPinnedStartColumnsWidth = 0;
  let computedPinnedEndColumnsWidth = 0;
  let prevPinned = null;
  const computedPinnedArray = [];
  let totalPinnedStartWidth = 0;
  let totalUnpinnedWidth = 0;
  let totalPinnedEndWidth = 0;
  visibleColumnsArray.forEach((_c, i) => {
    const id = visibleColumnOrder[i];
    const computedWidth = computedSizes[i];
    const pinned = computedPinnedArray[i] = getComputedPinned(
      id,
      columnPinning
    );
    if (pinned === "start") {
      totalPinnedStartWidth += computedWidth;
    } else if (pinned === "end") {
      totalPinnedEndWidth += computedWidth;
    } else {
      totalUnpinnedWidth += computedWidth;
    }
  });
  const firstPinnedEndAbsoluteOffset = bodySize.width - totalPinnedEndWidth;
  const groupColumns = [];
  const orderedColumns = /* @__PURE__ */ new Map();
  visibleColumnOrder.forEach((id, index) => {
    const c = visibleColumnsArray[index];
    orderedColumns.set(id, c);
  });
  const columnIdsInitialColumnOrder = [];
  columns.forEach((c, key) => {
    columnIdsInitialColumnOrder.push(key);
    if (!orderedColumns.has(key)) {
      orderedColumns.set(key, c);
    }
  });
  const fieldsToColumn = /* @__PURE__ */ new Map();
  orderedColumns.forEach((c, id) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    let theComputedVisibleIndex = columnIdsToVisibleIndex.get(id);
    if (theComputedVisibleIndex == void 0) {
      theComputedVisibleIndex = -1;
    }
    const computedVisible = theComputedVisibleIndex != -1;
    const nextColumnId = visibleColumnOrder[theComputedVisibleIndex + 1];
    const colType = getColumnComputedType(c, columnTypes);
    const computedVisibleIndex = theComputedVisibleIndex;
    const sortingInfo = sortedMap[id] ? sortedMap[id] : c.field ? (_a = sortedMap[c.field]) != null ? _a : null : null;
    const computedSortInfo = (_b = sortingInfo == null ? void 0 : sortingInfo.sortInfo) != null ? _b : null;
    const computedSorted = !!computedSortInfo;
    const computedSortedAsc = computedSorted && computedSortInfo.dir === 1;
    const computedSortedDesc = computedSorted && !computedSortedAsc;
    const computedSortIndex = (_c = sortingInfo == null ? void 0 : sortingInfo.index) != null ? _c : -1;
    const colSizeForNonVisibleColumn = computedVisible ? {} : getColSize(id);
    const computedWidth = computedVisible ? computedSizes[theComputedVisibleIndex] : colSizeForNonVisibleColumn.size || 0;
    const computedFlex = computedVisible ? flexSizes[theComputedVisibleIndex] || null : null;
    const computedMinWidth = computedVisible ? minSizes[theComputedVisibleIndex] || 0 : colSizeForNonVisibleColumn.minSize || 0;
    const computedMaxWidth = computedVisible ? maxSizes[theComputedVisibleIndex] || 1e4 : colSizeForNonVisibleColumn.maxSize || 1e4;
    const computedPinned = computedVisible ? getComputedPinned(id, columnPinning) : false;
    const computedLast = computedVisible ? theComputedVisibleIndex === visibleColumnOrder.length - 1 : false;
    let computedVisibleIndexInCategory = computedVisibleIndex;
    const computedPinningOffset = computedVisible ? computedPinned === "start" ? computedPinnedStartColumnsWidth : computedPinned === "end" ? computedPinnedEndColumnsWidth : computedOffset - computedPinnedStartColumnsWidth : 0;
    if (computedPinned == "start") {
      computedVisibleIndexInCategory = computedVisible ? computedVisibleIndex : -1;
    } else if (computedPinned === "end") {
      computedVisibleIndexInCategory = computedVisible ? computedVisibleIndex - (computedPinnedStartColumns.length + computedUnpinnedColumns.length) : -1;
    } else {
      computedVisibleIndexInCategory = computedVisible ? computedVisibleIndex - computedPinnedStartColumns.length : -1;
    }
    const computedAbsoluteOffset = computedVisible ? computedPinned === "start" || computedPinned === false ? computedOffset : firstPinnedEndAbsoluteOffset + computedPinnedEndColumnsWidth : -1;
    const computedFirstInCategory = computedVisible ? computedPinned !== prevPinned : false;
    const computedLastInCategory = computedVisible ? computedLast || computedPinned !== getComputedPinned(nextColumnId, columnPinning) : false;
    const cssEllipsis = (_e = (_d = c.cssEllipsis) != null ? _d : colType.cssEllipsis) != null ? _e : columnCssEllipsis;
    const headerCssEllipsis = (_j = (_i = (_h = (_g = (_f = c.headerCssEllipsis) != null ? _f : colType.cssEllipsis) != null ? _g : c.cssEllipsis) != null ? _h : colType.headerCssEllipsis) != null ? _i : columnHeaderCssEllipsis) != null ? _j : cssEllipsis;
    const computedFilterValue = computedVisible ? filterValueRecord[id] || c.field || c.groupByForColumn ? filterValueRecord[id] || filterValueRecord[c.field || c.groupByForColumn] || null : null : null;
    const computedFilterable = (_m = (_l = (_k = c.defaultFilterable) != null ? _k : colType.defaultFilterable) != null ? _l : columnDefaultFilterable) != null ? _m : true;
    const computedEditable = (_p = (_o = (_n = editable != null ? editable : c.defaultEditable) != null ? _n : colType.defaultEditable) != null ? _o : columnDefaultEditable) != null ? _p : false;
    const computedDataType = c.dataType || colType.dataType || (Array.isArray(c.type) ? c.type[0] : c.type) || DEFAULT_DATA_TYPE;
    const computedSortType = c.sortType || colType.sortType || computedDataType;
    const computedFilterType = c.filterType || colType.filterType || computedDataType;
    let computedFiltered = false;
    if (computedFilterValue != null && !computedFilterValue.disabled) {
      const foundFilterType = filterTypes[computedFilterType];
      if (foundFilterType && (!foundFilterType.emptyValues || !foundFilterType.emptyValues.includes(
        computedFilterValue.filter.value
      ))) {
        computedFiltered = true;
      }
    }
    const field = (_q = c.field) != null ? _q : colType.field;
    const valueGetter = (_r = c.valueGetter) != null ? _r : colType.valueGetter;
    let sortableColumnOrType = (_s = c.defaultSortable) != null ? _s : colType.defaultSortable;
    if (sortableColumnOrType == null && !c.groupByForColumn) {
      if (field == null && valueGetter == null) {
        sortableColumnOrType = false;
      }
    }
    let computedSortable = (_u = (_t = sortable != null ? sortable : sortableColumnOrType) != null ? _t : columnDefaultSortable) != null ? _u : DEFAULT_SORTABLE;
    const computedResizable = (_x = (_w = (_v = c.resizable) != null ? _v : colType.resizable) != null ? _w : resizableColumns) != null ? _x : DEFAULT_RESIZABLE;
    const result2 = __spreadProps(__spreadValues({
      colType,
      align: colType.align,
      headerAlign: colType.headerAlign,
      computedVisible,
      verticalAlign: colType.verticalAlign,
      defaultHiddenWhenGroupedBy: colType.defaultHiddenWhenGroupedBy,
      valueGetter,
      valueFormatter: colType.valueFormatter,
      renderValue: colType.renderValue,
      render: colType.render,
      style: colType.style,
      contentFocusable: colType.contentFocusable,
      renderMenuIcon: colType.renderMenuIcon,
      renderSortIcon: colType.renderSortIcon,
      renderSelectionCheckBox: colType.renderSelectionCheckBox,
      renderHeaderSelectionCheckBox: colType.renderHeaderSelectionCheckBox,
      headerStyle: colType.headerStyle,
      headerClassName: colType.headerClassName,
      columnGroup: colType.columnGroup,
      getValueToEdit: colType.getValueToEdit,
      getValueToPersist: colType.getValueToPersist,
      shouldAcceptEdit: colType.shouldAcceptEdit,
      field
    }, c), {
      components: __spreadValues(__spreadValues({}, colType.components), c.components),
      computedResizable,
      computedMinWidth,
      computedMaxWidth,
      computedFlex,
      computedDataType,
      computedEditable,
      computedSortType,
      computedFilterType,
      cssEllipsis,
      headerCssEllipsis,
      computedFilterValue,
      computedFiltered,
      computedFilterable,
      computedWidth,
      computedAbsoluteOffset,
      computedPinningOffset,
      computedVisibleIndexInCategory,
      computedOffset,
      computedSortable,
      computedSortInfo,
      computedSortIndex,
      computedMultiSort: multiSort,
      computedSorted,
      computedSortedAsc,
      computedSortedDesc,
      computedVisibleIndex,
      computedPinned,
      computedDraggable: (_z = (_y = c.draggable) != null ? _y : draggableColumns) != null ? _z : DEFAULT_DRAGGABLE,
      computedFirstInCategory,
      computedLastInCategory,
      computedFirst: theComputedVisibleIndex === 0,
      computedLast,
      id,
      header: (_C = (_B = (_A = c.header) != null ? _A : colType.header) != null ? _B : c.name) != null ? _C : c.field
    });
    if (computedVisible) {
      computedOffset += computedWidth;
      computedVisibleColumnsMap.set(result2.id, result2);
      computedVisibleColumns[theComputedVisibleIndex] = result2;
      if (computedPinned === "start") {
        computedPinnedStartColumns.push(result2);
        computedPinnedStartColumnsWidth += result2.computedWidth;
      }
      if (computedPinned === "end") {
        computedPinnedEndColumns.push(result2);
        computedPinnedEndColumnsWidth += result2.computedWidth;
      }
      if (!computedPinned) {
        computedUnpinnedColumns.push(result2);
        computedUnpinnedColumnsWidth += result2.computedWidth;
      }
      prevPinned = computedPinned;
    }
    if (result2.groupByForColumn) {
      result2.computedSortType = c.sortType || colType.sortType || UNKNOWN_SORT_TYPE;
      groupColumns.push(result2);
    }
    computedColumnsMap.set(result2.id, result2);
    if (result2.field && // for now, do not include group columns
    !result2.groupByForColumn && !fieldsToColumn.has(result2.field)) {
      fieldsToColumn.set(result2.field, result2);
    }
  });
  groupColumns.forEach((col) => {
    col.computedSortable = isGroupColumnSortable(col, {
      fieldsToColumn,
      sortable,
      columnDefaultSortable
    });
  });
  const computedColumnsMapInInitialOrder = /* @__PURE__ */ new Map();
  columnIdsInitialColumnOrder.forEach((id) => {
    const col = computedColumnsMap.get(id);
    if (col) {
      computedColumnsMapInInitialOrder.set(id, col);
    }
  });
  computedColumnsMap.forEach((col) => {
    if (!computedColumnsMapInInitialOrder.has(col.id)) {
      computedColumnsMapInInitialOrder.set(col.id, col);
    }
  });
  const computedPinnedStartWidth = pinnedStartMaxWidth != null ? Math.min(pinnedStartMaxWidth, computedPinnedStartColumnsWidth) : computedPinnedStartColumnsWidth;
  const computedPinnedEndWidth = pinnedEndMaxWidth != null ? Math.min(pinnedEndMaxWidth, computedPinnedEndColumnsWidth) : computedPinnedEndColumnsWidth;
  const result = {
    computedRemainingSpace: bodySize.width - (totalPinnedStartWidth + totalPinnedEndWidth + totalUnpinnedWidth),
    computedPinnedStartColumnsWidth,
    computedPinnedEndColumnsWidth,
    computedUnpinnedColumnsWidth,
    computedColumnOrder: normalizedColumnOrder,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedUnpinnedOffset: computedPinnedStartColumnsWidth,
    computedPinnedEndOffset: computedPinnedStartColumnsWidth + computedUnpinnedColumnsWidth,
    computedUnpinnedColumns,
    computedVisibleColumns,
    computedColumnsMap,
    computedColumnsMapInInitialOrder,
    computedVisibleColumnsMap,
    computedPinnedEndWidth,
    computedPinnedStartWidth,
    renderSelectionCheckBox: computedVisibleColumns.reduce(
      (bool, c) => {
        return bool || !!c.renderSelectionCheckBox;
      },
      false
    ),
    fieldsToColumn
  };
  return result;
};

// src/components/InfiniteTable/api/getColumnApi.ts
function isGroupColumnSortable(column, options) {
  var _a;
  const { sortable, fieldsToColumn, columnDefaultSortable } = options;
  if (sortable) {
    return sortable;
  }
  let sortableColumnOrType = (_a = column.defaultSortable) != null ? _a : column.colType.defaultSortable;
  if (sortableColumnOrType != null) {
    return sortableColumnOrType;
  }
  const defaultSortable = columnDefaultSortable != null ? columnDefaultSortable : DEFAULT_SORTABLE;
  if (column.computedSortType !== UNKNOWN_SORT_TYPE && defaultSortable) {
    return true;
  }
  const isSortable = (params) => {
    const { column: column2, api } = params;
    let groupByForColumn = column2.groupByForColumn || [];
    if (groupByForColumn != null && !Array.isArray(groupByForColumn)) {
      groupByForColumn = [groupByForColumn];
    }
    return (groupByForColumn || []).reduce((acc, groupBy) => {
      var _a2;
      if (!acc) {
        return false;
      }
      const field = groupBy.field || groupBy.groupField;
      let colSortable = void 0;
      if (field) {
        const foundCol = fieldsToColumn.get(field);
        const foundColApi = foundCol ? api.getColumnApi(foundCol.id) : void 0;
        if (foundCol && foundColApi) {
          colSortable = foundColApi.isSortable();
        } else {
          colSortable = false;
        }
      }
      if (colSortable === void 0 && groupBy.valueGetter) {
        colSortable = true;
      }
      return (_a2 = colSortable != null ? colSortable : columnDefaultSortable) != null ? _a2 : DEFAULT_SORTABLE;
    }, true);
  };
  return isSortable;
}
function getColumnApiForColumn(colOrColId, param) {
  const { getComputed, getState, actions, api } = param;
  if (typeof colOrColId === "number") {
    colOrColId = getComputed().computedVisibleColumns[colOrColId];
  }
  const column = typeof colOrColId === "string" ? getComputed().computedColumnsMap.get(colOrColId) : colOrColId;
  if (!column) {
    return null;
  }
  const columnApi = {
    getCellValuesByPrimaryKey(id) {
      return param.api.getCellValues({
        columnId: column.id,
        primaryKey: id
      });
    },
    getCellValueByPrimaryKey(id) {
      var _a, _b;
      return (_b = (_a = columnApi.getCellValuesByPrimaryKey(id)) == null ? void 0 : _a.value) != null ? _b : null;
    },
    toggleContextMenu(target) {
      if (getState().columnMenuVisibleForColumnId === column.id) {
        this.hideContextMenu();
      } else {
        this.showContextMenu(target);
      }
    },
    toggleFilterOperatorMenu(target) {
      if (getState().filterOperatorMenuVisibleForColumnId === column.id) {
        this.hideFilterOperatorMenu();
      } else {
        this.showFilterOperatorMenu(target);
      }
    },
    showFilterOperatorMenu(target) {
      getState().onFilterOperatorMenuClick({ target, column });
    },
    hideFilterOperatorMenu() {
      actions.filterOperatorMenuVisibleForColumnId = null;
    },
    showContextMenu(target) {
      getState().onColumnMenuClick({ target, column });
    },
    hideContextMenu() {
      actions.columnMenuVisibleForColumnId = null;
    },
    isVisible() {
      return getComputed().computedVisibleColumnsMap.has(column.id);
    },
    toggleSort(params = {
      multiSortBehavior: "replace"
    }) {
      return api.toggleSortingForColumn(column.id, params);
    },
    isSortable() {
      const { computedColumnsMap } = getComputed();
      return typeof column.computedSortable === "function" ? column.computedSortable({
        api,
        columnApi,
        column,
        columns: computedColumnsMap
      }) : column.computedSortable;
    },
    getSortDir() {
      return api.getSortingForColumn(column.id);
    },
    setFilter(value) {
      return api.setColumnFilter(column.id, value);
    },
    clearFilter() {
      return api.clearColumnFilter(column.id);
    },
    getSortInfo() {
      return api.getSortInfoForColumn(column.id);
    },
    setSort(sort) {
      if (!sort) {
        api.setSortInfoForColumn(column.id, null);
      } else {
        api.setSortingForColumn(column.id, sort);
      }
    },
    clearSort() {
      this.setSort(null);
    }
  };
  return columnApi;
}

// src/components/InfiniteTable/components/InfiniteTableHeader/getColumnLabel.ts
function getColumnLabel(colIdOrCol, context) {
  var _a;
  const col = typeof colIdOrCol === "string" ? context.getComputed().computedColumnsMap.get(colIdOrCol) : colIdOrCol;
  const {
    api,
    getComputed,
    getDataSourceState,
    actions,
    dataSourceActions,
    dataSourceApi
  } = context;
  const dataSourceState = getDataSourceState();
  const { allRowsSelected, someRowsSelected, selectionMode } = dataSourceState;
  const computed = getComputed();
  let label = col.header && typeof col.header !== "function" ? col.header : col.name || col.id || "";
  if (typeof col.header === "function") {
    const columnApi = getColumnApiForColumn(col.id, __spreadProps(__spreadValues({}, context), {
      actions,
      dataSourceActions,
      dataSourceApi
    }));
    label = (_a = col.header({
      column: col,
      columnApi,
      insideColumnMenu: true,
      dragging: false,
      columnsMap: computed.computedColumnsMap,
      columnSortInfo: col.computedSortInfo,
      columnFilterValue: col.computedFilterValue,
      filtered: col.computedFiltered,
      allRowsSelected,
      someRowsSelected,
      selectionMode,
      api,
      renderBag: {
        header: label
      }
    })) != null ? _a : null;
  }
  return label;
}

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableColumnHeaderFilterContext.ts
init_esm_shims();
import React27 from "react";
var InfiniteTableColumnHeaderFilterClassName = `${rootClassName2}HeaderCell__filter`;
var InfiniteTableColumnHeaderFilterOperatorClassName = `${rootClassName2}HeaderCell__filterOperator`;
var InfiniteTableColumnHeaderFilterContext = React27.createContext(null);

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableColumnHeaderFilter.tsx
var stopPropagation = (e) => e.stopPropagation();
function InfiniteTableColumnHeaderFilter(props) {
  const FilterEditor = props.filterEditor;
  const FilterOperatorSwitch = props.filterOperatorSwitch;
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      onPointerUp: stopPropagation,
      onPointerDown: stopPropagation,
      className: `${InfiniteTableColumnHeaderFilterClassName} ${HeaderFilterCls}`,
      style: { height: props.columnHeaderHeight }
    },
    /* @__PURE__ */ React28.createElement(InfiniteTableColumnHeaderFilterContext.Provider, { value: props }, /* @__PURE__ */ React28.createElement(FilterOperatorSwitch, null), /* @__PURE__ */ React28.createElement(FilterEditor, null))
  );
}
function InfiniteTableFilterOperatorSwitch() {
  var _a, _b;
  const { columnApi, disabled, operator } = useInfiniteColumnFilterEditor();
  const Icon2 = (_b = (_a = operator == null ? void 0 : operator.components) == null ? void 0 : _a.Icon) != null ? _b : FilterIcon;
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      "data-name": "filter-operator",
      "data-disabled": disabled,
      onMouseDown: (event) => {
        event.stopPropagation();
        if (disabled) {
          return;
        }
        columnApi.toggleFilterOperatorMenu(event.target);
      },
      className: `${InfiniteTableColumnHeaderFilterOperatorClassName} ${HeaderFilterOperatorCls} ${disabled ? `${InfiniteTableColumnHeaderFilterOperatorClassName}--disabled` : ""}`
    },
    /* @__PURE__ */ React28.createElement(
      Icon2,
      {
        size: 20,
        className: `${HeaderFilterOperatorIconRecipe({
          disabled
        })}`
      }
    )
  );
}
function InfiniteTableColumnHeaderFilterEmpty() {
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      onPointerUp: stopPropagation,
      onPointerDown: stopPropagation,
      className: `${InfiniteTableColumnHeaderFilterClassName} ${HeaderFilterCls}`,
      style: { height: "100%" }
    }
  );
}
function useInfiniteColumnFilterEditor() {
  var _a;
  const context = useInfiniteTable();
  const { column, columnApi } = useInfiniteHeaderCell();
  const columnLabel = getColumnLabel(column, context);
  const filterContextValue = React28.useContext(
    InfiniteTableColumnHeaderFilterContext
  );
  const { columnFilterType, filterTypes, columnFilterValue } = filterContextValue;
  const filterType = filterTypes[columnFilterType];
  const [theValue, setTheValue] = useState6(
    (_a = columnFilterValue == null ? void 0 : columnFilterValue.filter.value) != null ? _a : ""
  );
  const onInputChange = React28.useCallback(
    (filterValue) => {
      setTheValue(filterValue);
      filterContextValue.onChange(filterValue);
    },
    [filterContextValue.onChange]
  );
  useEffect11(() => {
    if (columnFilterValue) {
      if (theValue !== columnFilterValue.filter.value) {
        setTheValue(columnFilterValue.filter.value);
      }
    } else {
      if (filterType) {
        const emptyValue = [...filterType.emptyValues][0];
        if (emptyValue !== theValue) {
          setTheValue(emptyValue);
        }
      }
    }
  }, [columnFilterValue == null ? void 0 : columnFilterValue.filter.value]);
  const operator = filterContextValue.operator;
  const operatorName = operator == null ? void 0 : operator.name;
  return {
    api: context.api,
    column,
    columnFilterValue,
    columnApi,
    operatorName,
    operator,
    value: theValue,
    disabled: columnFilterValue == null ? void 0 : columnFilterValue.disabled,
    filterType,
    filterTypes,
    filterTypeKey: columnFilterType,
    filtered: column.computedFiltered,
    setValue: onInputChange,
    ariaLabel: `Filter for ${columnLabel}`,
    className: HeaderFilterEditorCls
  };
}

// src/components/InfiniteTable/components/FilterEditors.tsx
function StringFilterEditor() {
  const { ariaLabel, value, setValue, className, disabled } = useInfiniteColumnFilterEditor();
  return /* @__PURE__ */ React29.createElement(
    "input",
    {
      "data-xxx": true,
      "aria-label": ariaLabel,
      type: "text",
      disabled,
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
      className
    }
  );
}
function NumberFilterEditor() {
  const { ariaLabel, value, setValue, className, disabled } = useInfiniteColumnFilterEditor();
  return /* @__PURE__ */ React29.createElement(
    "input",
    {
      "aria-label": ariaLabel,
      type: "number",
      "data-yyy": true,
      disabled,
      value,
      onChange: (event) => {
        let value2 = isNaN(event.target.valueAsNumber) ? event.target.value : event.target.valueAsNumber;
        setValue(value2);
      },
      className
    }
  );
}

// src/components/DataSource/defaultFilterTypes.ts
function getFilterTypes() {
  const result = {
    string: {
      label: "Text",
      emptyValues: [""],
      defaultOperator: "includes",
      components: {
        FilterEditor: StringFilterEditor
      },
      operators: [
        {
          name: "includes",
          components: { Icon: IncludesOperatorIcon },
          label: "Includes",
          fn: ({ currentValue, filterValue }) => {
            return typeof currentValue === "string" && typeof filterValue == "string" && currentValue.toLowerCase().includes(filterValue.toLowerCase());
          }
        },
        {
          label: "Equals",
          components: { Icon: EqualOperatorIcon },
          name: "eq",
          fn: ({ currentValue: value, filterValue }) => {
            return typeof value === "string" && value === filterValue;
          }
        },
        {
          name: "startsWith",
          components: { Icon: StartsWithOperatorIcon },
          label: "Starts With",
          fn: ({ currentValue: value, filterValue }) => {
            return value.startsWith(filterValue);
          }
        },
        {
          name: "endsWith",
          components: { Icon: EndsWithOperatorIcon },
          label: "Ends With",
          fn: ({ currentValue: value, filterValue }) => {
            return value.endsWith(filterValue);
          }
        }
      ]
    },
    number: {
      label: "Number",
      emptyValues: ["", null, void 0],
      defaultOperator: "eq",
      components: {
        FilterEditor: NumberFilterEditor
      },
      operators: [
        {
          label: "Equals",
          components: { Icon: EqualOperatorIcon },
          name: "eq",
          fn: ({ currentValue, filterValue }) => {
            return currentValue == filterValue;
          }
        },
        {
          label: "Not Equals",
          components: { Icon: NotEqualOperatorIcon },
          name: "neq",
          fn: ({ currentValue, filterValue }) => {
            return currentValue != filterValue;
          }
        },
        {
          name: "gt",
          label: "Greater Than",
          components: { Icon: GTOperatorIcon },
          fn: ({ currentValue, filterValue, emptyValues }) => {
            if (emptyValues.includes(currentValue)) {
              return true;
            }
            return currentValue > filterValue;
          }
        },
        {
          name: "gte",
          components: { Icon: GTEOperatorIcon },
          label: "Greater Than or Equal",
          fn: ({ currentValue, filterValue, emptyValues }) => {
            if (emptyValues.includes(currentValue)) {
              return true;
            }
            return currentValue >= filterValue;
          }
        },
        {
          name: "lt",
          components: { Icon: LTOperatorIcon },
          label: "Less Than",
          fn: ({ currentValue, filterValue, emptyValues }) => {
            if (emptyValues.includes(currentValue)) {
              return true;
            }
            return currentValue < filterValue;
          }
        },
        {
          name: "lte",
          components: { Icon: LTEOperatorIcon },
          label: "Less Than or Equal",
          fn: ({ currentValue, filterValue, emptyValues }) => {
            if (emptyValues.includes(currentValue)) {
              return true;
            }
            return currentValue <= filterValue;
          }
        }
        // {
        //   name: 'between',
        //   fn: ({ currentValue, filterValue, emptyValues }) => {
        //     if (emptyValues.has(currentValue) || emptyValues.has(filterValue)) {
        //       return true;
        //     }
        //     const [min, max] = filterValue;
        //     return currentValue >= min && currentValue <= max;
        //   },
        // },
      ]
    }
  };
  return result;
}
var defaultFilterTypes2 = getFilterTypes();

// src/components/InfiniteTable/hooks/useCellClassName.ts
init_esm_shims();
function useCellClassName(column, baseClasses, variants, extraFlags) {
  var _a;
  const result = [...baseClasses];
  const variantObject = {
    filtered: column.computedFiltered,
    first: column.computedFirst,
    last: column.computedLast,
    groupByField: !!column.groupByForColumn,
    firstInCategory: column.computedFirstInCategory,
    lastInCategory: column.computedLastInCategory,
    pinned: column.computedPinned || false,
    rowSelected: (_a = extraFlags.rowSelected) != null ? _a : "null",
    rowActive: extraFlags.rowActive,
    dragging: extraFlags.dragging,
    groupRow: extraFlags.groupRow,
    groupCell: extraFlags.groupCell,
    verticalAlign: extraFlags.verticalAlign,
    align: extraFlags.align,
    zebra: extraFlags.zebra
  };
  const theVariant = variants(variantObject);
  result.push(theVariant);
  if (column.computedFirst) {
    result.push(...baseClasses.map((c) => `${c}--first`));
  }
  if (column.groupByForColumn) {
    result.push(...baseClasses.map((c) => `${c}--group-column`));
  }
  if (column.computedLast) {
    result.push(...baseClasses.map((c) => `${c}--last`));
  }
  if (column.computedFirstInCategory) {
    result.push(...baseClasses.map((c) => `${c}--first-in-category`));
  }
  if (column.computedLastInCategory) {
    result.push(...baseClasses.map((c) => `${c}--last-in-category`));
  }
  if (extraFlags.rowSelected) {
    result.push(...baseClasses.map((c) => `${c}--row-selected`));
  }
  if (extraFlags.groupRow) {
    result.push(...baseClasses.map((c) => `${c}--group-row`));
    result.push(
      ...baseClasses.map(
        (c) => `${c}--${extraFlags.rowExpanded ? "group-row-expanded" : "group-row-collapsed"}`
      )
    );
  }
  if (column.computedPinned) {
    result.push(
      ...baseClasses.map((c) => `${c}--pinned-${column.computedPinned}`)
    );
  } else {
    result.push(...baseClasses.map((c) => `${c}--unpinned`));
  }
  return result.filter(Boolean).join(" ");
}

// src/components/InfiniteTable/hooks/useColumnPointerEvents.ts
init_esm_shims();
import { useCallback as useCallback8, useState as useState7 } from "react";

// src/components/InfiniteTable/InfiniteCls.css.ts
init_esm_shims();
var FooterCls = "utilities_position_relative__16lm1iw1";
var InfiniteCls = "InfiniteCls_InfiniteCls__1yeub2v0 utilities_position_relative__16lm1iw1 utilities_display_flex__16lm1iwy utilities_flexFlow_column__16lm1iw1l utilities_boxSizingBorderBox__16lm1iw0";
var InfiniteClsHasPinnedEnd = "InfiniteCls_InfiniteClsHasPinnedEnd__1yeub2vo";
var InfiniteClsHasPinnedStart = "InfiniteCls_InfiniteClsHasPinnedStart__1yeub2vn";
var InfiniteClsRecipe = createRuntimeFn({ defaultClassName: "", variantClassNames: { focused: { true: "InfiniteCls_InfiniteClsRecipe_focused_true__1yeub2v2", false: "InfiniteCls_InfiniteClsRecipe_focused_false__1yeub2v3" }, focusedWithin: { true: "InfiniteCls_InfiniteClsRecipe_focusedWithin_true__1yeub2v4", false: "InfiniteCls_InfiniteClsRecipe_focusedWithin_false__1yeub2v5" }, hasPinnedStart: { true: "InfiniteCls_InfiniteClsRecipe_hasPinnedStart_true__1yeub2v6", false: "InfiniteCls_InfiniteClsRecipe_hasPinnedStart_false__1yeub2v7" }, hasPinnedEnd: { true: "InfiniteCls_InfiniteClsRecipe_hasPinnedEnd_true__1yeub2v8", false: "InfiniteCls_InfiniteClsRecipe_hasPinnedEnd_false__1yeub2v9" }, hasPinnedStartOverflow: { true: "InfiniteCls_InfiniteClsRecipe_hasPinnedStartOverflow_true__1yeub2va", false: "InfiniteCls_InfiniteClsRecipe_hasPinnedStartOverflow_false__1yeub2vb" }, hasPinnedEndOverflow: { true: "InfiniteCls_InfiniteClsRecipe_hasPinnedEndOverflow_true__1yeub2vc", false: "InfiniteCls_InfiniteClsRecipe_hasPinnedEndOverflow_false__1yeub2vd" } }, defaultVariants: {}, compoundVariants: [[{ focused: false, focusedWithin: false }, "InfiniteCls_InfiniteClsRecipe_compound_0__1yeub2ve"]] });
var InfiniteClsShiftingColumns = "InfiniteCls_shiftingcols__1yeub2vl";
var PinnedEndIndicatorBorder = "InfiniteCls_PinnedEndIndicatorBorder__1yeub2vr InfiniteCls_PinnedIndicatorCls__1yeub2vp utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_cursor_colResize__16lm1iwj utilities_userSelect_none__16lm1iw16 utilities_width_0__16lm1iw19 utilities_visibility_hidden__16lm1iw20 utilities_pointerEvents_none__16lm1iwk utilities_zIndex_10000000__16lm1iwu";
var PinnedRowsContainerClsVariants = createRuntimeFn({ defaultClassName: "", variantClassNames: { pinned: { start: "InfiniteCls_PinnedRowsContainerClsVariants_pinned_start__1yeub2vi", end: "InfiniteCls_PinnedRowsContainerClsVariants_pinned_end__1yeub2vj", false: "InfiniteCls_PinnedRowsContainerClsVariants_pinned_false__1yeub2vk" } }, defaultVariants: {}, compoundVariants: [] });
var PinnedStartIndicatorBorder = "InfiniteCls_PinnedStartIndicatorBorder__1yeub2vq InfiniteCls_PinnedIndicatorCls__1yeub2vp utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_cursor_colResize__16lm1iwj utilities_userSelect_none__16lm1iw16 utilities_width_0__16lm1iw19 utilities_visibility_hidden__16lm1iw20 utilities_pointerEvents_none__16lm1iwk utilities_zIndex_10000000__16lm1iwu";

// src/components/InfiniteTable/hooks/useDOMProps.ts
init_esm_shims();

// src/components/InfiniteTable/utils/rafFn.ts
init_esm_shims();
var rafFn = (fn) => {
  let rafId = 0;
  return (...args) => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      fn(...args);
    });
  };
};

// src/components/InfiniteTable/hooks/useDOMProps.ts
var scrollbarWidthHorizontal = stripVar(
  InternalVars.scrollbarWidthHorizontal
);
var scrollbarWidthVertical = stripVar(InternalVars.scrollbarWidthVertical);
var columnWidthAtIndex2 = stripVar(InternalVars.columnWidthAtIndex);
var columnOffsetAtIndex3 = stripVar(InternalVars.columnOffsetAtIndex);
var columnZIndexAtIndex3 = stripVar(InternalVars.columnZIndexAtIndex);
var scrollLeftCSSVar = stripVar(InternalVars.scrollLeft);
var activeCellColWidth = stripVar(InternalVars.activeCellColWidth);
var activeCellColOffset = stripVar(InternalVars.activeCellColOffset);
var baseZIndexForCells = stripVar(InternalVars.baseZIndexForCells);
var pinnedStartWidthCSSVar = stripVar(InternalVars.pinnedStartWidth);
var bodyWidthCSSVar = stripVar(InternalVars.bodyWidth);
var bodyHeightCSSVar = stripVar(InternalVars.bodyHeight);
var pinnedEndOffsetCSSVar = stripVar(InternalVars.pinnedEndOffset);
var pinnedEndWidthCSSVar = stripVar(InternalVars.pinnedEndWidth);
var computedVisibleColumnsCountCSSVar = stripVar(
  InternalVars.computedVisibleColumnsCount
);
function getColumnZIndex(col, params) {
  let computedZIndex = "auto";
  const index = col.computedVisibleIndex;
  if (col.computedPinned) {
    if (col.computedPinned === "start") {
      computedZIndex = params.pinnedStartColsCount - col.computedVisibleIndexInCategory;
    } else if (col.computedPinned === "end") {
      computedZIndex = params.visibleColsCount + col.computedVisibleIndexInCategory;
    }
  } else {
    computedZIndex = -index * 10;
  }
  const zIndexValue = typeof computedZIndex === "number" ? `calc( var(${baseZIndexForCells}) ` + (computedZIndex < 0 ? "-" : "+") + ` ${Math.abs(computedZIndex)} )` : "auto";
  return zIndexValue;
}
function useDOMProps(initialDOMProps) {
  const scrollbarWidth2 = getScrollbarWidth();
  const { computed, state, actions, getState } = useInfiniteTable();
  const {
    focused,
    focusedWithin,
    domRef,
    scrollerDOMRef,
    onBlurWithin,
    onFocusWithin,
    onSelfFocus,
    onSelfBlur,
    bodySize,
    activeCellIndex
  } = state;
  const {
    computedPinnedStartColumnsWidth,
    computedPinnedEndColumnsWidth,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedVisibleColumns,
    scrollbars
  } = computed;
  const prevPinnedEndCols = [];
  const cssVars = computedVisibleColumns.reduce(
    (vars, col) => {
      const index = col.computedVisibleIndex;
      vars[`${columnWidthAtIndex2}-${index}`] = col.computedWidth + "px";
      vars[`${columnOffsetAtIndex3}-${index}`] = col.computedPinned === "start" ? `calc( ${col.computedOffset}px + var(${scrollLeftCSSVar}) )` : col.computedPinned === "end" ? (
        // see #startcoloffsets-pinnedend
        `calc( var(${pinnedEndOffsetCSSVar}) ${prevPinnedEndCols.length ? "+" : ""} ${prevPinnedEndCols.map(
          (c) => `var(${columnWidthAtIndex2}-${c.computedVisibleIndex})`
        ).join(" + ")} + var(${scrollLeftCSSVar}) )`
      ) : `${col.computedOffset}px`;
      const zIndexValue = getColumnZIndex(col, {
        pinnedStartColsCount: computedPinnedStartColumns.length,
        visibleColsCount: computedVisibleColumns.length
      });
      vars[`${columnZIndexAtIndex3}-${index}`] = `${zIndexValue}`;
      if (col.computedPinned === "end") {
        prevPinnedEndCols.push(col);
      }
      return vars;
    },
    {}
  );
  if (activeCellIndex != null) {
    cssVars[activeCellColWidth] = `var(${getCSSVarNameForColWidth(
      activeCellIndex[1]
    )})`;
    cssVars[activeCellColOffset] = `var(${getCSSVarNameForColOffset(
      activeCellIndex[1]
    )})`;
  }
  cssVars[computedVisibleColumnsCountCSSVar] = computedVisibleColumns.length;
  cssVars[scrollbarWidthHorizontal] = scrollbars.horizontal ? `${scrollbarWidth2}px` : "0px";
  cssVars[scrollbarWidthVertical] = scrollbars.vertical ? `${scrollbarWidth2}px` : "0px";
  cssVars[pinnedStartWidthCSSVar] = `calc( ` + computedPinnedStartColumns.map((c) => `var(${getCSSVarNameForColWidth(c.computedVisibleIndex)})`).join(" + ") + ")";
  cssVars[pinnedEndWidthCSSVar] = `calc( ` + computedPinnedEndColumns.map((c) => `var(${getCSSVarNameForColWidth(c.computedVisibleIndex)})`).join(" + ") + ")";
  cssVars[baseZIndexForCells] = computedVisibleColumns.length * 10;
  cssVars[pinnedEndOffsetCSSVar] = `calc( var(${bodyWidthCSSVar}) - var(${pinnedEndWidthCSSVar}) - var(${scrollbarWidthVertical}) )`;
  cssVars[bodyWidthCSSVar] = `${bodySize.width}px`;
  cssVars[bodyHeightCSSVar] = `${bodySize.height}px`;
  const setFocused = rafFn((focused2) => {
    actions.focused = focused2;
  });
  const setFocusedWithin = rafFn((focused2) => {
    actions.focusedWithin = focused2;
  });
  const onFocus = (event) => {
    var _a;
    (_a = initialDOMProps == null ? void 0 : initialDOMProps.onFocus) == null ? void 0 : _a.call(initialDOMProps, event);
    if (event.target === domRef.current || event.target === scrollerDOMRef.current) {
      if (getState().focused) {
        return;
      }
      setFocused(true);
      onSelfFocus == null ? void 0 : onSelfFocus(event);
      if (focusedWithin) {
        setFocusedWithin(false);
        onBlurWithin == null ? void 0 : onBlurWithin(event);
      }
      return;
    }
    if (!focusedWithin) {
      setFocusedWithin(true);
      onFocusWithin == null ? void 0 : onFocusWithin(event);
    }
  };
  const onBlur = (event) => {
    var _a, _b;
    (_a = initialDOMProps == null ? void 0 : initialDOMProps.onBlur) == null ? void 0 : _a.call(initialDOMProps, event);
    if (event.target === domRef.current || event.target === scrollerDOMRef.current) {
      if (!getState().focused) {
        return;
      }
      setFocused(false);
      onSelfBlur == null ? void 0 : onSelfBlur(event);
      if (focusedWithin) {
        setFocusedWithin(false);
        onBlurWithin == null ? void 0 : onBlurWithin(event);
      }
      return;
    }
    const contained = (_b = domRef.current) == null ? void 0 : _b.contains(event.relatedTarget);
    if (!contained) {
      setFocusedWithin(false);
      onBlurWithin == null ? void 0 : onBlurWithin(event);
    }
  };
  const domProps = __spreadProps(__spreadValues({}, initialDOMProps), {
    onFocus,
    onBlur
  });
  const className = join(
    InfiniteTableClassName,
    InfiniteCls,
    domProps == null ? void 0 : domProps.className,
    computedPinnedStartColumnsWidth ? `${InfiniteTableClassName}--has-pinned-start ${InfiniteClsHasPinnedStart}` : null,
    computedPinnedEndColumnsWidth ? `${InfiniteTableClassName}--has-pinned-end  ${InfiniteClsHasPinnedEnd}` : null,
    focused ? `${InfiniteTableClassName}--focused` : null,
    focusedWithin ? `${InfiniteTableClassName}--focused-within` : null,
    focused && state.focusedClassName ? state.focusedClassName : null,
    focusedWithin && state.focusedWithinClassName ? state.focusedWithinClassName : null,
    computed.computedPinnedStartOverflow ? `${InfiniteTableClassName}--has-pinned-start-overflow` : null,
    computed.computedPinnedEndOverflow ? `${InfiniteTableClassName}--has-pinned-end-overflow` : null,
    InfiniteClsRecipe({
      hasPinnedStart: !!computedPinnedStartColumnsWidth,
      hasPinnedEnd: !!computedPinnedEndColumnsWidth,
      // hasPinnedStartOverflow: !!computed.computedPinnedStartOverflow,
      // hasPinnedEndOverflow: !!computed.computedPinnedEndOverflow,
      focused,
      focusedWithin
    })
  );
  domProps.className = className;
  domProps.style = __spreadValues(__spreadValues({}, initialDOMProps == null ? void 0 : initialDOMProps.style), cssVars);
  if (focused) {
    if (state.focusedStyle) {
      Object.assign(domProps.style, state.focusedStyle);
    }
  }
  if (focusedWithin) {
    if (state.focusedWithinStyle) {
      Object.assign(domProps.style, state.focusedWithinStyle);
    }
  }
  return domProps;
}

// src/components/InfiniteTable/hooks/reorderColumnsOnDrag.ts
init_esm_shims();
var import_binary_search2 = __toESM(require_binary_search());

// src/components/InfiniteTable/utils/moveXatY.ts
init_esm_shims();
var moveXatY = (arr, dragIndex, dropIndex) => {
  arr = [...arr];
  if (dragIndex === dropIndex || arr[dragIndex] === void 0 || arr[dropIndex] === void 0) {
    return arr;
  }
  const dragItem = arr[dragIndex];
  if (dropIndex < dragIndex) {
    arr.splice(dragIndex, 1);
    arr.splice(dropIndex, 0, dragItem);
  } else {
    arr.splice(dragIndex, 1);
    arr.splice(dropIndex, 0, dragItem);
  }
  return arr;
};

// src/components/InfiniteTable/utils/progressiveSpeedScroller.ts
init_esm_shims();
var progressiveSpeedScroller = (staticOptions) => {
  let scrollLeftRafId = null;
  let scrollRightRafId = null;
  return {
    stop() {
      if (scrollLeftRafId !== null) {
        cancelRaf(scrollLeftRafId);
      }
      if (scrollRightRafId != null) {
        cancelRaf(scrollRightRafId);
      }
    },
    scroll(dynamicOptions) {
      if (scrollLeftRafId !== null) {
        cancelRaf(scrollLeftRafId);
      }
      if (scrollRightRafId != null) {
        cancelRaf(scrollRightRafId);
      }
      const opts = __spreadValues(__spreadValues({
        offset: 100,
        scrollAmountsPerRaf: [1, 1, 2, 4, 6, 8, 11, 15]
      }, staticOptions), dynamicOptions);
      const self = this;
      function scrollLeft2() {
        const marginDistance = opts.scrollOffsetStart + opts.offset - opts.mousePosition.clientX;
        const shouldScrollLeft = marginDistance > 0 && marginDistance <= opts.offset;
        if (!shouldScrollLeft) {
          return false;
        }
        const segmentCount = opts.scrollAmountsPerRaf.length;
        const segmentDistance = Math.round(opts.offset / segmentCount);
        let speed = 0;
        for (let i = 0; i < segmentCount; i++) {
          if (marginDistance > (i + 1) * segmentDistance) {
            speed = opts.scrollAmountsPerRaf[i];
          }
        }
        dynamicOptions.scrollLeft = dynamicOptions.scrollLeft - speed;
        scrollLeftRafId = raf(() => {
          self.scroll(dynamicOptions);
        });
        return true;
      }
      function scrollRight() {
        const marginDistance = opts.mousePosition.clientX - (opts.scrollOffsetEnd - opts.offset);
        const shouldScrollRight = marginDistance > 0 && marginDistance <= opts.offset;
        if (!shouldScrollRight) {
          return false;
        }
        const segmentCount = opts.scrollAmountsPerRaf.length;
        const segmentDistance = Math.round(opts.offset / segmentCount);
        let speed = 0;
        for (let i = 0; i < segmentCount; i++) {
          if (marginDistance > (i + 1) * segmentDistance) {
            speed = opts.scrollAmountsPerRaf[i];
          }
        }
        dynamicOptions.scrollLeft = dynamicOptions.scrollLeft + speed;
        scrollRightRafId = raf(() => {
          self.scroll(dynamicOptions);
        });
        return true;
      }
      if (scrollLeft2()) {
        return true;
      }
      if (scrollRight()) {
        return true;
      }
      return false;
    }
  };
};

// src/components/InfiniteTable/hooks/reorderColumnsOnDrag.ts
var PROXY_OFFSET = 10;
var pinnedStartWidthCSSVar2 = stripVar(InternalVars.pinnedStartWidth);
function reorderColumnsOnDrag(params) {
  const {
    columnOffsetAtIndexCSSVar,
    columnWidthAtIndexCSSVar,
    computedVisibleColumns,
    computedVisibleColumnsMap,
    computedPinnedEndColumns,
    computedPinnedStartColumns,
    dragColumnId,
    infiniteDOMNode,
    brain,
    dragColumnHeaderTargetRect,
    tableRect,
    setProxyPosition,
    api: imperativeApi
  } = params;
  function getCurrentPinnedWidth(pinned) {
    let currentWidth = pinned === "start" ? pinnedStartInitialWidth : pinnedEndInitialWidth;
    if (initialDragColumnPinned === currentDragColumnPinned) {
      return currentWidth;
    }
    if (currentDragColumnPinned === pinned) {
      return currentWidth + dragColumn.computedWidth;
    }
    if (initialDragColumnPinned === pinned) {
      return currentWidth - dragColumn.computedWidth;
    }
    return currentWidth;
  }
  function isColumnVisible2(b) {
    if (b.index === dragColumnIndex) {
      return true;
    }
    const col = computedVisibleColumns[b.index];
    if (col.computedPinned) {
      return true;
    }
    const scrollLeft2 = brain.getScrollPosition().scrollLeft;
    return col.computedOffset >= scrollLeft2 + getCurrentPinnedWidth("start") && col.computedOffset + col.computedWidth < scrollLeft2 + tableRect.width - getCurrentPinnedWidth("end");
  }
  const getBreakPoints = (columns) => {
    const breakpoints = [];
    columns.forEach((c) => {
      const b = {
        columnId: c.id,
        index: c.computedVisibleIndex,
        breakpoint: (
          // tableRect.left +
          c.computedOffset + Math.round(c.computedWidth / 2)
        )
      };
      if (isColumnVisible2(b)) {
        breakpoints.push(b);
      }
    });
    return breakpoints;
  };
  const initialPinnedStartCount = computedPinnedStartColumns.length;
  let currentPinnedStartCount = initialPinnedStartCount;
  const initialMousePosition = {
    clientX: Math.round(params.initialMousePosition.clientX),
    clientY: Math.round(params.initialMousePosition.clientY)
  };
  const initialProxyPosition = {
    left: initialMousePosition.clientX - tableRect.left - (initialMousePosition.clientX - dragColumnHeaderTargetRect.left) + PROXY_OFFSET,
    top: initialMousePosition.clientY - tableRect.top - (initialMousePosition.clientY - dragColumnHeaderTargetRect.top) + PROXY_OFFSET
  };
  const initialScrollPosition2 = brain.getScrollPosition();
  const initialIndexes = computedVisibleColumns.map(
    (c) => c.computedVisibleIndex
  );
  let currentIndexes = initialIndexes;
  const dragColumn = computedVisibleColumnsMap.get(dragColumnId);
  const dragColumnIndex = dragColumn.computedVisibleIndex;
  const initialDragColumnPinned = dragColumn == null ? void 0 : dragColumn.computedPinned;
  let currentDropIndex = dragColumnIndex;
  let currentDragColumnPinned = initialDragColumnPinned;
  const pinnedStartInitialWidth = brain.getFixedStartColsWidth();
  const pinnedEndInitialWidth = brain.getFixedEndColsWidth();
  let currentMousePosition = initialMousePosition;
  let currentDiff = {
    x: 0,
    y: 0
  };
  let dir = 1;
  let diffX = 0;
  function updatePositionAndDiff(mousePosition) {
    const clientX = Math.round(mousePosition.clientX);
    const clientY = Math.round(mousePosition.clientY);
    if (clientX === currentMousePosition.clientX && clientY === currentMousePosition.clientY) {
      return;
    }
    currentMousePosition = { clientX, clientY };
    const currentScrollLeft = brain.getScrollPosition().scrollLeft;
    const scrollLeftDiff = currentScrollLeft - initialScrollPosition2.scrollLeft;
    currentDiff.x = currentMousePosition.clientX - initialMousePosition.clientX;
    currentDiff.y = currentMousePosition.clientY - initialMousePosition.clientY;
    diffX = currentDiff.x + scrollLeftDiff;
    dir = diffX < 0 ? -1 : 1;
    setProxyPosition({
      left: initialProxyPosition.left + currentDiff.x,
      top: initialProxyPosition.top + currentDiff.y
    });
  }
  function updatePinnedStartCount(columnIndexes) {
    let pinnedStartCount = 0;
    if (!initialDragColumnPinned) {
      columnIndexes.forEach((colIndex, i) => {
        var _a;
        if (((_a = computedVisibleColumns[colIndex]) == null ? void 0 : _a.computedPinned) === "start") {
          pinnedStartCount = i + 1;
        }
      });
    } else if (initialDragColumnPinned === "start") {
      columnIndexes.forEach((colIndex, i) => {
        var _a;
        if (pinnedStartCount) {
          return;
        }
        if (((_a = computedVisibleColumns[colIndex]) == null ? void 0 : _a.computedPinned) !== "start") {
          pinnedStartCount = i;
        }
      });
    }
    currentPinnedStartCount = pinnedStartCount;
    updatePinningMarker("start", columnIndexes, pinnedStartCount);
  }
  function updatePinningMarker(where, columnIndexes, pinnedCount) {
    if (where === "start") {
      let width = 0;
      for (let i = 0; i < pinnedCount; i++) {
        const colIndex = columnIndexes[i];
        const col = computedVisibleColumns[colIndex];
        width += col.computedWidth;
      }
      setInfiniteVarOnRoot(
        pinnedStartWidthCSSVar2,
        `${width}px`,
        infiniteDOMNode
      );
    }
  }
  function updateDropIndex(newDropIndex) {
    if (newDropIndex === currentDropIndex) {
      return;
    }
    currentDropIndex = newDropIndex;
    const newColumnIndexes = moveXatY(
      initialIndexes,
      dragColumnIndex,
      currentDropIndex > dragColumnIndex ? currentDropIndex - 1 : currentDropIndex
    );
    let pinnedStartCount = 0;
    currentPinnedStartCount = pinnedStartCount;
    const indexesWithTransition = /* @__PURE__ */ new Set();
    newColumnIndexes.forEach((newIndex, i) => {
      const currentIndex = currentIndexes[i];
      if (newIndex !== currentIndex) {
        indexesWithTransition.add(newIndex);
      }
      updatePinnedStartCount(newColumnIndexes);
    });
    currentIndexes = newColumnIndexes;
    adjustAllOffsets(indexesWithTransition);
    return {
      newColumnIndexes,
      indexesWithTransition,
      pinnedStartCount: currentPinnedStartCount
    };
  }
  function adjustAllOffsets(indexesWithTransition) {
    computedVisibleColumns.forEach((col) => {
      const colIndex = col.computedVisibleIndex;
      if (indexesWithTransition.has(colIndex)) {
        restoreInfiniteColumnReorderDuration(colIndex, infiniteDOMNode);
      } else {
        clearInfiniteColumnReorderDuration(colIndex, infiniteDOMNode);
      }
      const isDragColumn = colIndex === dragColumnIndex;
      let isOutsideCol = dir === -1 ? colIndex < currentDropIndex || colIndex > dragColumnIndex : colIndex < dragColumnIndex || colIndex >= currentDropIndex;
      let newPosition = "";
      if (dir === -1) {
        newPosition = isDragColumn ? (
          // this is the column we're dragging to the left
          // so we place it exactly at the offset of the currentDropIndex
          `var(${columnOffsetAtIndexCSSVar}-${currentDropIndex})`
        ) : isOutsideCol ? (
          // this col should have the initial pos, so we're good
          `var(${columnOffsetAtIndexCSSVar}-${colIndex})`
        ) : (
          // place it at the default offset + the width of the drag column
          // as these are columns situated between the dragindex and the dropindex
          `calc( var(${columnOffsetAtIndexCSSVar}-${colIndex}) + var(${columnWidthAtIndexCSSVar}-${dragColumnIndex}) )`
        );
      } else {
        newPosition = isOutsideCol ? (
          // this is the default value for a column
          `var(${columnOffsetAtIndexCSSVar}-${colIndex})`
        ) : isDragColumn ? (
          // this is the column we're dragging to the right
          `calc( var(${columnOffsetAtIndexCSSVar}-${currentDropIndex - 1}) + var(${columnWidthAtIndexCSSVar}-${currentDropIndex - 1}) - var(${columnWidthAtIndexCSSVar}-${dragColumnIndex}) )`
        ) : `calc( var(${columnOffsetAtIndexCSSVar}-${colIndex}) - var(${columnWidthAtIndexCSSVar}-${dragColumnIndex}) )`;
      }
      setInfiniteColumnOffsetWhileReordering(
        colIndex,
        newPosition,
        infiniteDOMNode
      );
    });
  }
  const pinnedStartColsRight = tableRect.left + getCurrentPinnedWidth("start");
  const pinnedEndColsLeft = tableRect.right - getCurrentPinnedWidth("end");
  const speedScroller = progressiveSpeedScroller({
    scrollOffsetStart: pinnedStartColsRight,
    scrollOffsetEnd: pinnedEndColsLeft
  });
  updatePositionAndDiff(initialMousePosition);
  return {
    speedScroller,
    stop() {
      speedScroller.stop();
    },
    onMove(mousePosition) {
      updatePositionAndDiff(mousePosition);
      speedScroller.scroll({
        mousePosition: currentMousePosition,
        get scrollLeft() {
          return brain.getScrollPosition().scrollLeft;
        },
        set scrollLeft(value) {
          imperativeApi.scrollLeft = value;
        }
      });
      const breakpoints = getBreakPoints(computedVisibleColumns);
      let currentPos = dir === -1 ? dragColumn.computedOffset + diffX : dragColumn.computedOffset + dragColumn.computedWidth + diffX;
      let idx = (0, import_binary_search2.default)(
        breakpoints,
        currentPos,
        ({ breakpoint }, value) => {
          return breakpoint < value ? -1 : breakpoint > value ? 1 : 0;
        }
      );
      if (idx < 0) {
        idx = ~idx;
      }
      idx = breakpoints[idx] ? breakpoints[idx].index : breakpoints[breakpoints.length - 1].index + 1;
      if (idx != null && idx !== currentDropIndex) {
        if (dir === 1 && currentDropIndex === dragColumnIndex + 1) {
          idx = dragColumnIndex;
        }
        updateDropIndex(idx);
      }
      const columnPinning = {};
      computedPinnedEndColumns.forEach((col) => {
        columnPinning[col.id] = "end";
      });
      for (let i = 0; i < currentPinnedStartCount; i++) {
        const colIndex = currentIndexes[i];
        const col = computedVisibleColumns[colIndex];
        columnPinning[col.id] = "start";
      }
      const columnOrder = currentIndexes.map((colIndex) => {
        return computedVisibleColumns[colIndex].id;
      });
      return {
        columnPinning,
        columnOrder
      };
    }
  };
}

// src/utils/shallowEqualObjects.ts
init_esm_shims();
function shallowEqualObjects(objA, objB, ignoreKeys) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  if (ignoreKeys) {
    aKeys = aKeys.filter((key2) => !ignoreKeys.has(key2));
    bKeys = bKeys.filter((key2) => !ignoreKeys.has(key2));
  }
  var len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var key = aKeys[i];
    if (ignoreKeys) {
      if (ignoreKeys.has(key)) {
        continue;
      }
    }
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}

// src/components/InfiniteTable/hooks/adjustColumnOrderForAllColumns.ts
init_esm_shims();
function adjustColumnOrderForAllColumns(options) {
  const {
    newColumnOrder,
    visibleColumnOrder,
    existingColumnOrder,
    dragColumnId
  } = options;
  if (visibleColumnOrder.length !== newColumnOrder.length) {
    console.warn(
      "new column order cannot contain less columns than the visible column order"
    );
    return newColumnOrder;
  }
  const dragIndex = visibleColumnOrder.indexOf(dragColumnId);
  const dropIndex = newColumnOrder.indexOf(dragColumnId);
  if (dragIndex === dropIndex) {
    return existingColumnOrder;
  }
  if (dropIndex > dragIndex) {
    const indexInNewOrder = newColumnOrder.indexOf(dragColumnId);
    const prevColIdInNewOrder = newColumnOrder[indexInNewOrder - 1];
    const prevColIndexInExiting = existingColumnOrder.indexOf(prevColIdInNewOrder);
    const indexInExisting = existingColumnOrder.indexOf(dragColumnId);
    return moveXatY(
      existingColumnOrder,
      indexInExisting,
      prevColIndexInExiting
    );
  } else {
    const indexInNewOrder = newColumnOrder.indexOf(dragColumnId);
    const nextColIdInNewOrder = newColumnOrder[indexInNewOrder + 1];
    const nextColIndexInExiting = existingColumnOrder.indexOf(nextColIdInNewOrder);
    const indexInExisting = existingColumnOrder.indexOf(dragColumnId);
    return moveXatY(
      existingColumnOrder,
      indexInExisting,
      nextColIndexInExiting
    );
  }
  return newColumnOrder;
}

// src/components/InfiniteTable/hooks/useColumnPointerEvents.ts
var columnOffsetAtIndex4 = stripVar(InternalVars.columnOffsetAtIndex);
var columnWidthAtIndex3 = stripVar(InternalVars.columnWidthAtIndex);
var baseZIndexForCells2 = stripVar(InternalVars.baseZIndexForCells);
var equalPinning = (pinning1, pinning2) => {
  const empty1 = !pinning1 || Object.keys(pinning1).length === 0;
  const empty2 = !pinning2 || Object.keys(pinning2).length === 0;
  if (empty1 && empty2) {
    return true;
  }
  if (!!pinning1 != !!pinning2) {
    return false;
  }
  return shallowEqualObjects(pinning1, pinning2);
};
var useColumnPointerEvents = ({
  columnId,
  domRef
}) => {
  var _a;
  const [proxyPosition, setProxyPosition] = useState7(null);
  const {
    actions,
    computed,
    getComputed,
    getState,
    api,
    state: { domRef: rootRef }
  } = useInfiniteTable();
  const defaultPointerDown = useCallback8((e) => {
    const { multiSortBehavior } = getState();
    api.toggleSortingForColumn(columnId, {
      multiSortBehavior: multiSortBehavior === "replace" && (e.ctrlKey || e.metaKey) ? "append" : multiSortBehavior
    });
  }, []);
  const onPointerDown = useCallback8(
    (e) => {
      var _a2, _b;
      if (((_a2 = e.target) == null ? void 0 : _a2.tagName) === "INPUT") {
        return;
      }
      const { brain } = getState();
      const {
        computedVisibleColumns,
        computedVisibleColumnsMap,
        computedPinnedStartColumns,
        computedUnpinnedColumns,
        computedPinnedEndColumns
      } = getComputed();
      const dragColumn = computedVisibleColumnsMap.get(columnId);
      if (!dragColumn.computedDraggable) {
        defaultPointerDown(e);
        return;
      }
      const target = domRef.current;
      const targetRect = target.getBoundingClientRect();
      const tableRect = rootRef.current.getBoundingClientRect();
      const initialAvailableSize = brain.getAvailableSize();
      const dragColumnIndex = dragColumn.computedVisibleIndex;
      let initialCursor = (_b = target.style.cursor) != null ? _b : "auto";
      let didDragAtLeastOnce = false;
      const dragger = reorderColumnsOnDrag({
        brain,
        columnOffsetAtIndexCSSVar: columnOffsetAtIndex4,
        columnWidthAtIndexCSSVar: columnWidthAtIndex3,
        computedPinnedEndColumns,
        computedPinnedStartColumns,
        computedUnpinnedColumns,
        computedVisibleColumns,
        computedVisibleColumnsMap,
        dragColumnHeaderTargetRect: targetRect,
        dragColumnId: columnId,
        api,
        infiniteDOMNode: rootRef.current,
        setProxyPosition,
        tableRect,
        initialMousePosition: {
          clientX: e.clientX,
          clientY: e.clientY
        }
      });
      let reorderDragResult = null;
      function persistColumnOrder(reorderDragResult2) {
        const { columnPinning, columnOrder } = reorderDragResult2;
        if (!equalPinning(getState().columnPinning, columnPinning)) {
          actions.columnPinning = columnPinning;
        }
        const currentComputedColumnOrder = getComputed().computedColumnOrder;
        if (JSON.stringify(columnOrder, currentComputedColumnOrder)) {
          computedVisibleColumns.forEach((col) => {
            setInfiniteColumnOffsetWhileReordering(
              col.computedVisibleIndex,
              "",
              rootRef.current
            );
          });
          actions.columnOrder = adjustColumnOrderForAllColumns({
            newColumnOrder: columnOrder,
            visibleColumnOrder: getComputed().computedVisibleColumns.map(
              (c) => c.id
            ),
            existingColumnOrder: currentComputedColumnOrder,
            dragColumnId: columnId
          });
        }
      }
      const onPointerMove = (e2) => {
        var _a3;
        const { headerBrain, brain: brain2 } = getState();
        if (!didDragAtLeastOnce) {
          didDragAtLeastOnce = true;
          brain2.setRenderCount({
            horizontal: computedVisibleColumns.length,
            vertical: void 0
          });
          headerBrain.setRenderCount({
            horizontal: computedVisibleColumns.length,
            vertical: void 0
          });
          actions.columnReorderDragColumnId = dragColumn.id;
          setInfiniteColumnZIndex(
            dragColumnIndex,
            `calc( var(${baseZIndexForCells2}) + 10000 )`,
            rootRef.current
          );
          (_a3 = rootRef.current) == null ? void 0 : _a3.classList.add(InfiniteClsShiftingColumns);
          target.style.cursor = "grabbing";
        }
        reorderDragResult = dragger.onMove(e2);
      };
      const onPointerUp = (e2) => {
        var _a3, _b2, _c;
        const { multiSortBehavior } = getState();
        const target2 = domRef.current;
        (_a3 = rootRef.current) == null ? void 0 : _a3.classList.remove(InfiniteClsShiftingColumns);
        dragger.stop();
        brain.setAvailableSize(__spreadValues({}, initialAvailableSize));
        computedVisibleColumns.forEach((col) => {
          clearInfiniteColumnReorderDuration(
            col.computedVisibleIndex,
            rootRef.current
          );
          setInfiniteColumnOffsetWhileReordering(
            col.computedVisibleIndex,
            "",
            rootRef.current
          );
        });
        setInfiniteColumnZIndex(
          dragColumnIndex,
          getColumnZIndex(dragColumn, {
            pinnedStartColsCount: computedPinnedStartColumns.length,
            visibleColsCount: computedVisibleColumns.length
          }),
          rootRef.current
        );
        target2.style.cursor = initialCursor;
        target2.releasePointerCapture(e2.pointerId);
        target2.removeEventListener("pointermove", onPointerMove);
        target2.removeEventListener("pointerup", onPointerUp);
        setProxyPosition(null);
        const dragColumnSortable = (_c = (_b2 = api.getColumnApi(dragColumn.id)) == null ? void 0 : _b2.isSortable()) != null ? _c : false;
        if (!didDragAtLeastOnce && dragColumnSortable) {
          api.toggleSortingForColumn(dragColumn.id, {
            multiSortBehavior: multiSortBehavior === "replace" && (e2.ctrlKey || e2.metaKey) ? "append" : multiSortBehavior
          });
        }
        if (reorderDragResult) {
          persistColumnOrder(reorderDragResult);
        }
        actions.columnReorderDragColumnId = false;
      };
      target.addEventListener("pointermove", onPointerMove);
      target.addEventListener("pointerup", onPointerUp);
      target.setPointerCapture(e.pointerId);
    },
    [columnId]
  );
  return {
    onPointerDown: ((_a = computed.computedVisibleColumnsMap.get(columnId)) == null ? void 0 : _a.computedDraggable) ? onPointerDown : defaultPointerDown,
    proxyPosition
  };
};

// src/components/InfiniteTable/utils/RenderHookComponentForInfinite.tsx
init_esm_shims();
import * as React37 from "react";

// src/components/InfiniteTable/components/InfiniteTableRow/InfiniteTableColumnCell.tsx
init_esm_shims();
import * as React36 from "react";
import { useCallback as useCallback12, useContext as useContext5, useMemo as useMemo4 } from "react";

// src/components/InfiniteTable/utils/getColumnForGroupBy.tsx
init_esm_shims();
import * as React32 from "react";

// src/components/DataSource/state/rowInfoStatus.ts
init_esm_shims();
var showLoadingIcon = (rowInfo) => {
  if (rowInfo.dataSourceHasGrouping) {
    return rowInfo.isGroupRow ? rowInfo.childrenLoading || !rowInfo.selfLoaded : !rowInfo.selfLoaded;
  }
  return !rowInfo.selfLoaded;
};

// src/components/InfiniteTable/components/icons/ExpanderIcon.tsx
init_esm_shims();
import * as React30 from "react";
import { useState as useState8 } from "react";

// src/components/InfiniteTable/components/icons/ExpanderIcon.css.ts
init_esm_shims();
var ExpanderIconCls = "utilities_fill_accentColor__16lm1iw7 utilities_flex_none__16lm1iwm utilities_cursor_pointer__16lm1iwh";
var ExpanderIconClsVariants = createRuntimeFn({ defaultClassName: "", variantClassNames: { expanded: { true: "utilities_transform_rotate90__16lm1iwf", false: "ExpanderIcon_ExpanderIconClsVariants_expanded_false__198z9782" }, direction: { end: "ExpanderIcon_ExpanderIconClsVariants_direction_end__198z9783", start: "ExpanderIcon_ExpanderIconClsVariants_direction_start__198z9784" } }, defaultVariants: {}, compoundVariants: [[{ expanded: false, direction: "end" }, "utilities_transform_rotate180__16lm1iwg"]] });

// src/components/InfiniteTable/components/icons/ExpanderIcon.tsx
function ExpanderIcon(props) {
  var _a;
  const { size = 24, direction = "start" } = props;
  const [expanded, setExpanded] = useState8(
    (_a = props.expanded) != null ? _a : props.defaultExpanded
  );
  const onClick = () => {
    var _a2;
    (_a2 = props.onChange) == null ? void 0 : _a2.call(props, !expanded);
    if (!isControlled("expanded", props)) {
      setExpanded(!expanded);
    }
  };
  React30.useEffect(() => {
    if (isControlled("expanded", props)) {
      setExpanded(props.expanded);
    }
  }, [props.expanded]);
  return /* @__PURE__ */ React30.createElement(
    "svg",
    {
      "data-name": "expander-icon",
      xmlns: "http://www.w3.org/2000/svg",
      height: `${size}px`,
      viewBox: "0 0 24 24",
      width: `${size}px`,
      style: props.style,
      onClick,
      className: join(
        props.className,
        ExpanderIconCls,
        ExpanderIconClsVariants({
          direction: direction || "start",
          expanded
        }),
        `${InfiniteTableIconClassName}`,
        `${InfiniteTableIconClassName}-expander`,
        `InfiniteIcon-expander--${expanded ? "expanded" : "collapsed"}`,
        `InfiniteIcon-expander--${direction === "end" ? "end" : "start"}`
      )
    },
    /* @__PURE__ */ React30.createElement("path", { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" })
  );
}

// src/components/InfiniteTable/components/icons/LoadingIcon.tsx
init_esm_shims();
import * as React31 from "react";

// src/components/InfiniteTable/components/icons/LoadingIcon.css.ts
init_esm_shims();
var LoadingIconCls = "utilities_stroke_accentColor__16lm1iwa utilities_flex_none__16lm1iwm utilities_cursor_pointer__16lm1iwh";

// src/components/InfiniteTable/components/icons/LoadingIcon.tsx
var LoadingIcon = (props) => {
  return /* @__PURE__ */ React31.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        margin: "auto",
        display: "block",
        shapeRendering: "auto"
      },
      width: "24px",
      height: "24px",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      className: join(
        props.className,
        LoadingIconCls,
        "InfiniteIcon",
        "InfiniteIcon-loading"
      )
    },
    /* @__PURE__ */ React31.createElement(
      "circle",
      {
        cx: "50",
        cy: "50",
        fill: "none",
        strokeWidth: "10",
        r: "35",
        strokeDasharray: "164.93361431346415 56.97787143782138"
      },
      /* @__PURE__ */ React31.createElement(
        "animateTransform",
        {
          attributeName: "transform",
          type: "rotate",
          repeatCount: "indefinite",
          dur: "1s",
          values: "0 50 50;360 50 50",
          keyTimes: "0;1"
        }
      )
    )
  );
};

// src/components/InfiniteTable/components/InfiniteTableRow/row.css.ts
init_esm_shims();
var GroupRowExpanderCls = createRuntimeFn({ defaultClassName: "", variantClassNames: { align: { start: "row_GroupRowExpanderCls_align_start__7pupv0b", center: "row_GroupRowExpanderCls_align_center__7pupv0c", end: "row_GroupRowExpanderCls_align_end__7pupv0d" } }, defaultVariants: {}, compoundVariants: [] });
var RowClsRecipe = createRuntimeFn({ defaultClassName: "row_RowCls__7pupv00", variantClassNames: { zebra: { false: "row_RowClsRecipe_zebra_false__7pupv02", even: "row_RowClsRecipe_zebra_even__7pupv03", odd: "row_RowClsRecipe_zebra_odd__7pupv04" }, groupRow: { true: "row_RowClsRecipe_groupRow_true__7pupv05", false: "row_RowClsRecipe_groupRow_false__7pupv06" }, inlineGroupRow: { true: "row_RowClsRecipe_inlineGroupRow_true__7pupv07", false: "row_RowClsRecipe_inlineGroupRow_false__7pupv08" }, showHoverRows: { true: "row_RowClsRecipe_showHoverRows_true__7pupv09", false: "row_RowClsRecipe_showHoverRows_false__7pupv0a" } }, defaultVariants: {}, compoundVariants: [] });
var RowHoverCls = "row_RowHoverCls__7pupv01";

// src/components/InfiniteTable/utils/getColumnForGroupBy.tsx
function styleForGroupColumn({
  rowInfo
}) {
  return {
    [stripVar(ThemeVars.components.Row.groupNesting)]: rowInfo.dataSourceHasGrouping ? rowInfo.isGroupRow ? rowInfo.groupNesting - 1 : rowInfo.groupNesting : 0
  };
}
function getGroupColumnRender({
  groupIndexForColumn,
  groupRenderStrategy
}) {
  return (renderOptions) => {
    const { rowInfo, renderBag, column, align: align2 } = renderOptions;
    let { value: valueToRender, groupIcon, selectionCheckBox } = renderBag;
    const groupRowInfo = rowInfo;
    if (groupRenderStrategy === "multi-column") {
      if (groupIndexForColumn + 1 !== groupRowInfo.groupNesting && groupRowInfo.isGroupRow) {
        return null;
      }
    } else if (groupRenderStrategy === "single-column" && !groupRowInfo.isGroupRow) {
    }
    return /* @__PURE__ */ React32.createElement(
      "div",
      {
        className: join(
          display.flex,
          column.align === "end" ? flexFlow.rowReverse : flexFlow.row,
          alignItems.center,
          `${InfiniteTableColumnCellClassName}Expander`,
          groupRenderStrategy === "single-column" || groupRenderStrategy === "multi-column" && !rowInfo.isGroupRow ? GroupRowExpanderCls({ align: align2 }) : null
        )
      },
      groupIcon,
      selectionCheckBox,
      /* @__PURE__ */ React32.createElement("div", { className: cssEllipsisClassName }, valueToRender != null ? valueToRender : null)
    );
  };
}
function getGroupColumnRenderGroupIcon({
  groupIndexForColumn,
  groupRenderStrategy,
  toggleGroupRow,
  initialRenderGroupIcon
}) {
  return (renderOptions) => {
    var _a, _b, _c;
    const {
      rowInfo,
      value,
      rootGroupBy: groupBy,
      pivotBy,
      column
    } = renderOptions;
    const groupRowInfo = groupRenderStrategy !== "inline" ? rowInfo : (
      // while for inline, we need to still work on group rows, but the current row is a data item
      // so we go find the group row via the parents of enhanced data
      rowInfo.isGroupRow && ((_a = rowInfo.parents) == null ? void 0 : _a[groupIndexForColumn]) || rowInfo
    );
    if (!groupRowInfo) {
      return null;
    }
    const collapsed = groupRowInfo.collapsed;
    if (groupRenderStrategy === "inline") {
      if (groupRowInfo.groupCount === 1) {
        return value;
      }
      if (groupRowInfo.groupNesting === groupIndexForColumn && collapsed) {
        return null;
      }
    } else {
      if (!groupRowInfo.isGroupRow) {
        return null;
      }
      if (groupRenderStrategy === "multi-column") {
        if (groupIndexForColumn + 1 !== groupRowInfo.groupNesting) {
          return null;
        }
      }
    }
    const groupKeys = groupRowInfo.groupKeys;
    let icon = null;
    const showExpanderIcon = pivotBy ? (((_b = groupRowInfo.groupKeys) == null ? void 0 : _b.length) || 0) < (groupBy == null ? void 0 : groupBy.length) : (((_c = groupRowInfo.groupKeys) == null ? void 0 : _c.length) || 0) <= (groupBy == null ? void 0 : groupBy.length);
    const isLoading = showLoadingIcon(groupRowInfo);
    if (isLoading) {
      icon = /* @__PURE__ */ React32.createElement(LoadingIcon, null);
    } else if (showExpanderIcon) {
      const defaultIcon = /* @__PURE__ */ React32.createElement(
        ExpanderIcon,
        {
          expanded: !collapsed,
          direction: column.align === "end" ? "end" : "start",
          onChange: () => {
            toggleGroupRow(groupKeys);
          }
        }
      );
      icon = defaultIcon;
    }
    if (initialRenderGroupIcon) {
      renderOptions.renderBag.groupIcon = icon;
      icon = /* @__PURE__ */ React32.createElement(
        RenderCellHookComponent,
        {
          render: initialRenderGroupIcon,
          renderParam: renderOptions
        }
      );
    }
    return icon;
  };
}
function getColumnForGroupBy(options, toggleGroupRow, groupColumnFromProps) {
  const { groupByForColumn, groupIndexForColumn, groupRenderStrategy } = options;
  let userDefinedGroupColumn = groupByForColumn.column ? __spreadValues({}, groupByForColumn.column) : {};
  let generatedGroupColumn = __spreadProps(__spreadValues({
    header: `Group by ${groupByForColumn.field || groupByForColumn.groupField}`,
    groupByForColumn,
    render: getGroupColumnRender({
      groupIndexForColumn,
      groupRenderStrategy
    })
  }, userDefinedGroupColumn), {
    renderGroupIcon: getGroupColumnRenderGroupIcon({
      initialRenderGroupIcon: userDefinedGroupColumn == null ? void 0 : userDefinedGroupColumn.renderGroupIcon,
      groupIndexForColumn,
      toggleGroupRow,
      groupRenderStrategy
    })
  });
  if (groupColumnFromProps) {
    if (typeof groupColumnFromProps === "function") {
      generatedGroupColumn = __spreadValues(__spreadValues({}, generatedGroupColumn), groupColumnFromProps(options, toggleGroupRow));
    } else {
      generatedGroupColumn = __spreadValues(__spreadValues({}, generatedGroupColumn), groupColumnFromProps);
    }
  }
  return generatedGroupColumn;
}
function getSingleGroupColumn(options, toggleGroupRow, groupColumnFromProps) {
  const theGroupColumnFromProps = typeof groupColumnFromProps === "function" ? groupColumnFromProps(options, toggleGroupRow) : groupColumnFromProps;
  const base = {};
  if (options.sortable != void 0) {
    base.sortable = options.sortable;
  }
  let generatedGroupColumn = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, base), {
    header: `Group`,
    groupByForColumn: options.groupBy,
    renderSelectionCheckBox: options.selectionMode === "multi-row",
    render: getGroupColumnRender({
      groupIndexForColumn: 0,
      groupRenderStrategy: "single-column"
    })
  }), theGroupColumnFromProps), {
    renderGroupIcon: getGroupColumnRenderGroupIcon({
      initialRenderGroupIcon: theGroupColumnFromProps == null ? void 0 : theGroupColumnFromProps.renderGroupIcon,
      groupIndexForColumn: 0,
      toggleGroupRow,
      groupRenderStrategy: "single-column"
    })
  });
  return generatedGroupColumn;
}

// src/components/InfiniteTable/utils/objectValuesExcept.ts
init_esm_shims();
function objectValuesExcept(obj, exceptList) {
  const result = [];
  for (const k in obj)
    if (obj.hasOwnProperty(k) && !exceptList.hasOwnProperty(k)) {
      result.push(obj[k]);
    }
  return result;
}

// src/components/InfiniteTable/components/cell.css.ts
init_esm_shims();
var ColumnCellCls = "cell_ColumnCellCls__1eexc2a6 cell_CellCls__1eexc2a5 utilities_display_flex__16lm1iwy utilities_flexFlow_row__16lm1iw1n utilities_alignItems_center__16lm1iw1p utilities_position_absolute__16lm1iw2 utilities_willChange_transform__16lm1iw21 utilities_whiteSpace_nowrap__16lm1iw22 utilities_userSelect_none__16lm1iw16";
var ColumnCellRecipe = createRuntimeFn({ defaultClassName: "cell_ColumnCellRecipe__1eexc2a8", variantClassNames: { dragging: { false: "cell_ColumnCellRecipe_dragging_false__1eexc2a9", true: "cell_ColumnCellRecipe_dragging_true__1eexc2aa" }, align: { start: "cell_ColumnCellRecipe_align_start__1eexc2ab", end: "cell_ColumnCellRecipe_align_end__1eexc2ac", center: "cell_ColumnCellRecipe_align_center__1eexc2ad" }, verticalAlign: { start: "cell_ColumnCellRecipe_verticalAlign_start__1eexc2ae", end: "cell_ColumnCellRecipe_verticalAlign_end__1eexc2af", center: "cell_ColumnCellRecipe_verticalAlign_center__1eexc2ag" }, rowActive: { false: "cell_ColumnCellRecipe_rowActive_false__1eexc2ah", true: "cell_ColumnCellRecipe_rowActive_true__1eexc2ai" }, groupRow: { false: "cell_ColumnCellRecipe_groupRow_false__1eexc2aj", true: "cell_ColumnCellRecipe_groupRow_true__1eexc2ak" }, groupCell: { false: "cell_ColumnCellRecipe_groupCell_false__1eexc2al", true: "cell_ColumnCellRecipe_groupCell_true__1eexc2am" }, zebra: { false: "cell_ColumnCellRecipe_zebra_false__1eexc2an", even: "cell_ColumnCellRecipe_zebra_even__1eexc2ao", odd: "cell_ColumnCellRecipe_zebra_odd__1eexc2ap" }, rowSelected: { true: "cell_ColumnCellRecipe_rowSelected_true__1eexc2aq", false: "cell_ColumnCellRecipe_rowSelected_false__1eexc2ar", null: "cell_ColumnCellRecipe_rowSelected_null__1eexc2as" }, first: { true: "cell_ColumnCellRecipe_first_true__1eexc2at", false: "cell_ColumnCellRecipe_first_false__1eexc2au" }, last: { true: "cell_ColumnCellRecipe_last_true__1eexc2av", false: "cell_ColumnCellRecipe_last_false__1eexc2aw" }, groupByField: { true: "cell_ColumnCellRecipe_groupByField_true__1eexc2ax", false: "cell_ColumnCellRecipe_groupByField_false__1eexc2ay" }, firstInCategory: { true: "cell_ColumnCellRecipe_firstInCategory_true__1eexc2az", false: "cell_ColumnCellRecipe_firstInCategory_false__1eexc2a10" }, lastInCategory: { true: "cell_ColumnCellRecipe_lastInCategory_true__1eexc2a11", false: "cell_ColumnCellRecipe_lastInCategory_false__1eexc2a12" }, pinned: { start: "cell_ColumnCellRecipe_pinned_start__1eexc2a13", end: "cell_ColumnCellRecipe_pinned_end__1eexc2a14", false: "cell_ColumnCellRecipe_pinned_false__1eexc2a15" }, filtered: { true: "cell_ColumnCellRecipe_filtered_true__1eexc2a16", false: "cell_ColumnCellRecipe_filtered_false__1eexc2a17" } }, defaultVariants: {}, compoundVariants: [[{ pinned: "start", lastInCategory: true }, "cell_ColumnCellRecipe_compound_0__1eexc2a18"], [{ pinned: "start", firstInCategory: true }, "cell_ColumnCellRecipe_compound_1__1eexc2a19"], [{ pinned: "end", firstInCategory: true }, "cell_ColumnCellRecipe_compound_2__1eexc2a1a"], [{ pinned: "end", lastInCategory: true }, "cell_ColumnCellRecipe_compound_3__1eexc2a1b"], [{ align: "center", groupCell: false }, "cell_ColumnCellRecipe_compound_4__1eexc2a1c"]] });
var SelectionCheckboxCls = "cell_SelectionCheckboxCls__1eexc2a7";

// src/components/InfiniteTable/components/CheckBox.tsx
init_esm_shims();
import * as React33 from "react";
import { useEffect as useEffect13, useRef as useRef12 } from "react";

// src/components/InfiniteTable/components/CheckBox.css.ts
init_esm_shims();
var CheckBoxCls = "CheckBox_CheckBoxCls__qz8ht90 utilities_cursor_pointer__16lm1iwh";

// src/components/InfiniteTable/components/CheckBox.tsx
function forwardProps2() {
  return {
    checked: 1,
    disabled: (disabled) => disabled != null ? disabled : false,
    domProps: 1
  };
}
var InfiniteCheckBoxRoot = getComponentStateRoot({
  // @ts-ignore
  forwardProps: forwardProps2,
  // @ts-ignore
  // mapPropsToState,
  // @ts-ignore
  // cleanup: cleanupState,
  // @ts-ignore,
  mappedCallbacks: {
    checked: (checked) => {
      return {
        callbackName: "onChange",
        callbackParams: [checked]
      };
    }
  },
  debugName: "InfiniteCheckBox"
});
function InfiniteCheckBoxComponent() {
  const { componentState, componentActions } = useComponentState();
  const { checked, domProps, disabled } = componentState;
  const inputRef = useRef12(null);
  useEffect13(() => {
    inputRef.current.indeterminate = checked == null;
  }, [checked]);
  return /* @__PURE__ */ React33.createElement(
    "input",
    __spreadProps(__spreadValues({}, domProps), {
      className: join("InfiniteCheckBox", CheckBoxCls, domProps == null ? void 0 : domProps.className),
      type: "checkbox",
      ref: inputRef,
      checked: !!checked,
      disabled,
      onChange: () => {
        if (disabled) {
          return;
        }
        componentActions.checked = !checked;
      }
    })
  );
}
function InfiniteCheckBox(props) {
  return /* @__PURE__ */ React33.createElement(InfiniteCheckBoxRoot, __spreadValues({}, props), /* @__PURE__ */ React33.createElement(InfiniteCheckBoxComponent, null));
}

// src/components/InfiniteTable/components/InfiniteTableRow/columnRendering.tsx
init_esm_shims();
function isColumnWithField(c) {
  return typeof c.field === "string";
}
function getGroupByColumnReference(options) {
  const { column, rowInfo, fieldsToColumn } = options;
  let groupByColumn = void 0;
  if (column.groupByForColumn) {
    if (rowInfo.isGroupRow) {
      const rowGroupBy = rowInfo.groupBy[rowInfo.groupBy.length - 1];
      groupByColumn = rowGroupBy ? fieldsToColumn.get(
        rowGroupBy.field || rowGroupBy.groupField
      ) : void 0;
    }
    if (!groupByColumn && column.field) {
      groupByColumn = fieldsToColumn.get(column.field);
    }
  }
  return groupByColumn;
}
function getCellContext(context) {
  const {
    getComputed,
    getDataSourceState,
    getState,
    rowIndex,
    columnId,
    api,
    dataSourceApi
  } = context;
  const { dataArray } = getDataSourceState();
  const rowInfo = dataArray[rowIndex];
  const { isGroupRow } = rowInfo;
  const column = getComputed().computedColumnsMap.get(columnId);
  const { activeRowIndex, keyboardNavigation } = getState();
  const rowActive = rowIndex === activeRowIndex && keyboardNavigation === "row";
  const {
    formattedValue: value,
    formattedValueContext: { rawValue }
  } = getFormattedValueContextForCell({
    column,
    rowInfo,
    columnsMap: getComputed().computedColumnsMap,
    context
  });
  const columnApi = getColumnApiForColumn(column.id, context);
  return isGroupRow ? {
    api,
    dataSourceApi,
    column,
    columnApi,
    isGroupRow: true,
    data: rowInfo.data,
    rowActive,
    rowInfo,
    rowSelected: rowInfo.rowSelected,
    value,
    rawValue
  } : {
    api,
    dataSourceApi,
    columnApi,
    column,
    isGroupRow: false,
    data: rowInfo.data,
    rowActive,
    rowInfo,
    rowSelected: rowInfo.rowSelected,
    value,
    rawValue
  };
}
function getColumnValueToEdit(options) {
  return getRawValueForCell(options.column, options.rowInfo);
}
function getColumnRenderingParams(options) {
  var _a, _b;
  const { column, context, rowInfo } = options;
  const groupByColumnReference = getGroupByColumnReference({
    rowInfo,
    column,
    fieldsToColumn: options.fieldsToColumn,
    groupRenderStrategy: context.getState().groupRenderStrategy
  });
  const { getState } = context;
  const { editingCell } = getState();
  const formattedResult = getFormattedValueContextForCell(__spreadProps(__spreadValues({}, options), {
    // column: groupByColumnReference || column,
    column
  }));
  const { formattedValueContext } = formattedResult;
  const inEdit = context.api.isEditorVisibleForCell({
    columnId: column.id,
    rowIndex: rowInfo.indexInAll
  });
  const stylingParam = __spreadProps(__spreadValues({
    column: options.column,
    inEdit
  }, formattedValueContext), {
    editError: editingCell && editingCell.primaryKey === rowInfo.id && editingCell.columnId === column.id && !editingCell.active && editingCell.accepted instanceof Error ? editingCell.accepted : void 0
  });
  const align2 = typeof column.align === "function" ? column.align(__spreadValues({ isHeader: false }, stylingParam)) : (_a = column.align) != null ? _a : "start";
  const verticalAlign = typeof column.verticalAlign === "function" ? column.verticalAlign(__spreadValues({ isHeader: false }, stylingParam)) : (_b = column.verticalAlign) != null ? _b : "center";
  return {
    inEdit,
    stylingParam,
    formattedValueContext,
    renderFunctions: {
      renderGroupIcon: column.renderGroupIcon || (groupByColumnReference == null ? void 0 : groupByColumnReference.renderGroupIcon),
      renderSelectionCheckBox: column.renderSelectionCheckBox,
      renderValue: column.renderValue || (groupByColumnReference == null ? void 0 : groupByColumnReference.renderValue),
      renderGroupValue: column.renderGroupValue || (groupByColumnReference == null ? void 0 : groupByColumnReference.renderGroupValue),
      renderLeafValue: column.renderLeafValue || (groupByColumnReference == null ? void 0 : groupByColumnReference.renderLeafValue)
    },
    renderParams: getColumnRenderParam(__spreadProps(__spreadValues({}, options), {
      align: align2,
      verticalAlign,
      formattedValueContext
    })),
    groupByColumnReference
  };
}
function getColumnRenderParam(options) {
  const {
    column,
    context,
    rowInfo,
    align: align2,
    verticalAlign,
    columnsMap,
    fieldsToColumn,
    formattedValueContext
  } = options;
  const { value } = formattedValueContext;
  const { api: imperativeApi, getDataSourceState, getState } = context;
  const { editingCell } = getState();
  const { indexInAll: rowIndex } = rowInfo;
  const dataSourceState = getDataSourceState();
  const { selectionMode } = dataSourceState;
  const groupByColumn = getGroupByColumnReference({
    rowInfo,
    column,
    fieldsToColumn,
    groupRenderStrategy: context.getState().groupRenderStrategy
  });
  const toggleGroupRow = imperativeApi.toggleGroupRow;
  const renderParam = __spreadProps(__spreadValues({
    column,
    columnsMap,
    fieldsToColumn,
    align: align2,
    verticalAlign
  }, formattedValueContext), {
    editError: editingCell && editingCell.primaryKey === rowInfo.id && editingCell.columnId === column.id && !editingCell.active && editingCell.accepted instanceof Error ? editingCell.accepted : void 0,
    groupByColumn,
    selectionMode,
    api: imperativeApi,
    selectRow: imperativeApi.selectionApi.selectRow,
    deselectRow: imperativeApi.selectionApi.deselectRow,
    toggleRowSelection: imperativeApi.selectionApi.toggleRowSelection,
    toggleGroupRowSelection: imperativeApi.selectionApi.toggleGroupRowSelection,
    renderBag: {
      all: null,
      value: typeof value === "boolean" ? `${value}` : value,
      selectionCheckBox: null,
      groupIcon: null
    },
    selectCurrentRow: () => {
      return imperativeApi.selectionApi.selectRow(
        rowInfo.id,
        rowInfo.dataSourceHasGrouping ? rowInfo.groupKeys : void 0
      );
    },
    deselectCurrentRow: () => {
      return imperativeApi.selectionApi.deselectRow(
        rowInfo.id,
        rowInfo.dataSourceHasGrouping ? rowInfo.groupKeys : void 0
      );
    },
    rowIndex,
    toggleGroupRow,
    toggleCurrentGroupRow: () => {
      if (!rowInfo.isGroupRow) {
        return;
      }
      toggleGroupRow(rowInfo.groupKeys);
    },
    toggleCurrentRowSelection: () => {
      if (rowInfo.isGroupRow) {
        return;
      }
      return imperativeApi.selectionApi.toggleRowSelection(rowInfo.id);
    },
    toggleCurrentGroupRowSelection: () => {
      if (!rowInfo.isGroupRow) {
        return;
      }
      return imperativeApi.selectionApi.toggleGroupRowSelection(
        rowInfo.isGroupRow ? rowInfo.groupKeys : []
      );
    },
    rootGroupBy: dataSourceState.groupBy,
    pivotBy: dataSourceState.pivotBy
  });
  return renderParam;
}
function getRawValueForCell(column, rowInfo) {
  const { data, isGroupRow, dataSourceHasGrouping } = rowInfo;
  const groupBy = dataSourceHasGrouping ? rowInfo.groupBy : void 0;
  let value = isGroupRow && groupBy && column.groupByForColumn && // if this is a multi-group column we're good
  (Array.isArray(column.groupByForColumn) || // or it has to be a group column for the current group row
  column.groupByForColumn === groupBy[groupBy.length - 1]) ? rowInfo.value : isColumnWithField(column) ? data == null ? void 0 : data[column.field] : null;
  if (column.field && rowInfo.isGroupRow && rowInfo.reducerData && rowInfo.reducerData[column.field] != null) {
    value = rowInfo.reducerData[column.field];
  }
  if (column.valueGetter) {
    if (!rowInfo.isGroupRow && rowInfo.data) {
      value = column.valueGetter({ data: rowInfo.data, field: column.field });
    }
  }
  return value;
}
function getFormattedValueParamForCell(value, column, rowInfo, context) {
  const { rowSelected, indexInAll: rowIndex } = rowInfo;
  const { activeRowIndex, keyboardNavigation } = context.getState();
  const rowActive = rowIndex === activeRowIndex && keyboardNavigation === "row";
  return rowInfo.isGroupRow ? {
    rowInfo,
    isGroupRow: rowInfo.isGroupRow,
    data: rowInfo.data,
    rowSelected,
    rowActive,
    value,
    rawValue: value,
    field: column.field
  } : {
    rowInfo,
    isGroupRow: rowInfo.isGroupRow,
    data: rowInfo.data,
    rowSelected,
    rowActive,
    value,
    rawValue: value,
    field: column.field
  };
}
function getFormattedValueContextForCell(options) {
  const { column, rowInfo, context } = options;
  const rawValue = getRawValueForCell(column, rowInfo);
  const formattedValueContext = getFormattedValueParamForCell(
    rawValue,
    column,
    rowInfo,
    context
  );
  const formattedValue = column.valueFormatter ? column.valueFormatter(formattedValueContext) : rawValue;
  formattedValueContext.value = formattedValue;
  return {
    formattedValue,
    formattedValueContext
  };
}

// src/components/InfiniteTable/components/InfiniteTableRow/InfiniteTableCell.tsx
init_esm_shims();
import * as React34 from "react";
var { rootClassName: rootClassName5 } = internalProps;
var InfiniteTableCellClassName = `${rootClassName5}Cell`;
var InfiniteTableCellContentClassName = `${rootClassName5}Cell_content`;
var columnWidthAtIndex4 = stripVar(InternalVars.columnWidthAtIndex);
var columnReorderEffectDurationAtIndex2 = stripVar(
  InternalVars.columnReorderEffectDurationAtIndex
);
function InfiniteTableCellFn(props) {
  var _b, _c;
  const _a = props, {
    cssEllipsis = true,
    virtualized = true,
    skipColumnShifting = false,
    contentStyle,
    column,
    domRef,
    width,
    contentClassName,
    rowId,
    afterChildren,
    beforeChildren,
    cellType,
    cssPosition: _cssPosition,
    renderChildren
  } = _a, domProps = __objRest(_a, [
    "cssEllipsis",
    "virtualized",
    "skipColumnShifting",
    "contentStyle",
    "column",
    "domRef",
    "width",
    "contentClassName",
    "rowId",
    "afterChildren",
    "beforeChildren",
    "cellType",
    "cssPosition",
    "renderChildren"
  ]);
  const children = renderChildren();
  const style2 = __spreadValues({
    width: `var(${columnWidthAtIndex4}-${column.computedVisibleIndex})`,
    transition: `transform var(${columnReorderEffectDurationAtIndex2}-${column.computedVisibleIndex}, 0s)`
  }, domProps.style);
  const finalDOMProps = __spreadProps(__spreadValues({}, domProps), {
    style: style2,
    // do not remove this from here, as it's being used by auto sizing - the `useAutoSizeColumns` fn hook
    "data-column-id": column.id,
    "data-z-index": style2.zIndex,
    className: join(
      domProps.className,
      InfiniteTableCellClassName,
      ColumnCellCls
      // shifting
      //   ? `${InfiniteTableCellClassName}--shifting ${CellClsVariants.shifting}`
      //   : '',
    ),
    children: /* @__PURE__ */ React34.createElement(React34.Fragment, null, beforeChildren, /* @__PURE__ */ React34.createElement(
      "div",
      {
        className: join(
          InfiniteTableCellContentClassName,
          cssEllipsis ? cssEllipsisClassName : overflow.hidden,
          contentClassName
        ),
        style: contentStyle
      },
      children
    ), afterChildren)
  });
  if (rowId != null) {
    finalDOMProps["data-row-id"] = `${rowId}`;
  }
  const RenderComponent = cellType === "body" ? (_b = column.components) == null ? void 0 : _b.ColumnCell : (_c = column.components) == null ? void 0 : _c.HeaderCell;
  if (RenderComponent) {
    return /* @__PURE__ */ React34.createElement(RenderComponent, __spreadValues({}, finalDOMProps));
  }
  return /* @__PURE__ */ React34.createElement("div", __spreadProps(__spreadValues({}, finalDOMProps), { ref: domRef }));
}
var InfiniteTableCell = React34.memo(
  InfiniteTableCellFn
);

// src/components/InfiniteTable/components/InfiniteTableRow/InfiniteTableColumnEditor.tsx
init_esm_shims();
import * as React35 from "react";
import { useCallback as useCallback10, useRef as useRef13 } from "react";
function InfiniteTableColumnEditor() {
  const { initialValue, setValue, confirmEdit, cancelEdit, readOnly } = useInfiniteColumnEditor();
  const domRef = useRef13();
  const refCallback = React35.useCallback((node) => {
    domRef.current = node;
    if (node) {
      node.focus();
    }
  }, []);
  const onKeyDown2 = useCallback10((event) => {
    const { key } = event;
    if (key === "Enter" || key === "Tab") {
      confirmEdit();
    } else if (key === "Escape") {
      cancelEdit();
    } else {
      event.stopPropagation();
    }
  }, []);
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement(
    "input",
    {
      readOnly,
      ref: refCallback,
      onKeyDown: onKeyDown2,
      onBlur: () => confirmEdit(),
      className: join(absoluteCover, outline.none),
      type: "text",
      defaultValue: initialValue,
      onChange: useCallback10((event) => {
        setValue(event.target.value);
      }, [])
    }
  ));
}

// src/components/InfiniteTable/components/InfiniteTableRow/InfiniteTableColumnCell.tsx
var { rootClassName: rootClassName6 } = internalProps;
var columnZIndexAtIndex4 = stripVar(InternalVars.columnZIndexAtIndex);
var InfiniteTableColumnCellContext = React36.createContext(null);
var InfiniteTableColumnCellClassName = `${rootClassName6}ColumnCell`;
var defaultRenderSelectionCheckBox = (params) => {
  const {
    rowInfo,
    selectCurrentRow,
    deselectCurrentRow,
    toggleCurrentGroupRowSelection,
    column
  } = params;
  if (rowInfo.isGroupRow && !column.groupByForColumn) {
    return null;
  }
  return /* @__PURE__ */ React36.createElement(
    InfiniteCheckBox,
    {
      domProps: {
        className: SelectionCheckboxCls
      },
      onChange: (selected) => {
        if (rowInfo.isGroupRow) {
          toggleCurrentGroupRowSelection();
          return;
        }
        if (selected) {
          selectCurrentRow();
        } else {
          deselectCurrentRow();
        }
      },
      checked: rowInfo.rowSelected
    }
  );
};
function applyColumnClassName(columnClassName, param) {
  const colClassName = columnClassName ? typeof columnClassName === "function" ? columnClassName(param) : columnClassName : void 0;
  return colClassName;
}
function applyColumnStyle(existingStyle, columnStyle, param) {
  return typeof columnStyle === "function" ? __spreadValues(__spreadValues({}, existingStyle), columnStyle(param)) : __spreadValues(__spreadValues({}, existingStyle), columnStyle);
}
function InfiniteTableColumnCellFn(props) {
  var _a, _b, _c;
  const {
    rowInfo,
    rowStyle,
    rowClassName,
    // getData,
    width,
    column,
    onMouseLeave,
    onMouseEnter,
    // toggleGroupRow,
    rowIndex,
    rowHeight,
    columnsMap,
    fieldsToColumn,
    domRef,
    hidden,
    showZebraRows
  } = props;
  if (!column) {
    return /* @__PURE__ */ React36.createElement("div", { ref: domRef }, "no column");
  }
  const { rowSelected } = rowInfo;
  const {
    getState,
    actions: componentActions,
    api: imperativeApi
  } = useInfiniteTable();
  const {
    componentState: dataSourceState,
    getState: getDataSourceState,
    api: dataSourceApi,
    componentActions: dataSourceActions
  } = useDataSourceContextValue();
  const { activeRowIndex, keyboardNavigation } = getState();
  const rowActive = rowIndex === activeRowIndex && keyboardNavigation === "row";
  const renderingContext = {
    getState,
    getDataSourceState,
    actions: componentActions,
    dataSourceActions,
    api: imperativeApi,
    dataSourceApi
  };
  const colRenderingParams = getColumnRenderingParams({
    column,
    rowInfo,
    columnsMap,
    fieldsToColumn,
    context: renderingContext
  });
  const {
    stylingParam,
    renderParams,
    formattedValueContext,
    renderFunctions,
    groupByColumnReference,
    inEdit
  } = colRenderingParams;
  const { align: align2, verticalAlign } = renderParams;
  const renderParam = renderParams;
  const renderParamRef = React36.useRef(renderParam);
  const onClick = useCallback12(
    (event) => {
      const colIndex = column.computedVisibleIndex;
      getState().cellClick({
        rowIndex,
        colIndex,
        event
      });
    },
    [rowIndex, column.computedVisibleIndex, keyboardNavigation]
  );
  const onMouseDown = useCallback12(
    (event) => {
      const colIndex = column.computedVisibleIndex;
      getState().cellMouseDown({
        rowIndex,
        colIndex,
        event
      });
      if (keyboardNavigation === "row") {
        componentActions.activeRowIndex = rowIndex;
        return;
      }
      if (keyboardNavigation === "cell") {
        componentActions.activeCellIndex = [rowIndex, colIndex];
      }
    },
    [rowIndex, column.computedVisibleIndex, keyboardNavigation]
  );
  const { selectionMode } = dataSourceState;
  renderParam.domRef = domRef;
  renderParam.selectCurrentRow = useCallback12(renderParam.selectCurrentRow, [
    rowInfo
  ]);
  renderParam.deselectCurrentRow = useCallback12(renderParam.deselectCurrentRow, [
    rowInfo
  ]);
  renderParam.toggleCurrentGroupRow = useCallback12(
    renderParam.toggleCurrentGroupRow,
    [rowInfo]
  );
  renderParam.toggleCurrentRowSelection = useCallback12(
    renderParam.toggleCurrentRowSelection,
    [rowInfo]
  );
  renderParam.toggleCurrentGroupRowSelection = useCallback12(
    renderParam.toggleCurrentGroupRowSelection,
    [rowInfo]
  );
  const EditorComponent = (_b = (_a = column.components) == null ? void 0 : _a.Editor) != null ? _b : InfiniteTableColumnEditor;
  const editor = inEdit ? /* @__PURE__ */ React36.createElement(CellEditorContextComponent, { contextValue: renderParam }, /* @__PURE__ */ React36.createElement(EditorComponent, null)) : null;
  const renderChildren = useCallback12(() => {
    if (hidden) {
      return null;
    }
    if (inEdit) {
      return null;
    }
    if (renderFunctions.renderGroupIcon) {
      renderParam.renderBag.groupIcon = /* @__PURE__ */ React36.createElement(
        RenderCellHookComponent,
        {
          render: renderFunctions.renderGroupIcon,
          renderParam: __spreadProps(__spreadValues({}, renderParam), {
            renderBag: __spreadValues({}, renderParam.renderBag)
          })
        }
      );
    }
    if (renderFunctions.renderSelectionCheckBox && selectionMode == "multi-row") {
      renderParam.renderBag.selectionCheckBox = /* @__PURE__ */ React36.createElement(
        RenderCellHookComponent,
        {
          render: defaultRenderSelectionCheckBox,
          renderParam
        }
      );
      if (renderFunctions.renderSelectionCheckBox !== true) {
        renderParam.renderBag.selectionCheckBox = /* @__PURE__ */ React36.createElement(
          RenderCellHookComponent,
          {
            render: renderFunctions.renderSelectionCheckBox,
            renderParam: __spreadProps(__spreadValues({}, renderParam), {
              renderBag: __spreadValues({}, renderParam.renderBag)
            })
          }
        );
      }
    }
    if (renderFunctions.renderValue) {
      renderParam.renderBag.value = /* @__PURE__ */ React36.createElement(
        RenderCellHookComponent,
        {
          render: renderFunctions.renderValue,
          renderParam: __spreadProps(__spreadValues({}, renderParam), {
            renderBag: __spreadValues({}, renderParam.renderBag)
          })
        }
      );
    }
    if (rowInfo.isGroupRow && renderFunctions.renderGroupValue) {
      renderParam.renderBag.value = /* @__PURE__ */ React36.createElement(
        RenderCellHookComponent,
        {
          render: renderFunctions.renderGroupValue,
          renderParam: __spreadProps(__spreadValues({}, renderParam), {
            renderBag: __spreadValues({}, renderParam.renderBag)
          })
        }
      );
    }
    if (!rowInfo.isGroupRow && renderFunctions.renderLeafValue) {
      renderParam.renderBag.value = /* @__PURE__ */ React36.createElement(
        RenderCellHookComponent,
        {
          render: renderFunctions.renderLeafValue,
          renderParam: __spreadProps(__spreadValues({}, renderParam), {
            renderBag: __spreadValues({}, renderParam.renderBag)
          })
        }
      );
    }
    renderParamRef.current = renderParam;
    let valueToRender = renderParam.renderBag.value;
    if (valueToRender instanceof Date) {
      valueToRender = valueToRender.toLocaleDateString();
    }
    const all = /* @__PURE__ */ React36.createElement(React36.Fragment, null, align2 !== "end" ? renderParam.renderBag.groupIcon : null, align2 !== "end" ? renderParam.renderBag.selectionCheckBox : null, valueToRender, align2 === "end" ? renderParam.renderBag.selectionCheckBox : null, align2 === "end" ? renderParam.renderBag.groupIcon : null);
    if (column.render) {
      return /* @__PURE__ */ React36.createElement(
        RenderCellHookComponent,
        {
          render: column.render,
          renderParam: __spreadProps(__spreadValues({}, renderParam), {
            renderBag: __spreadProps(__spreadValues({}, renderParam.renderBag), { all })
          })
        }
      );
    }
    return all;
  }, [
    column,
    hidden,
    inEdit,
    ...objectValuesExcept(renderParam, {
      renderBag: true
    })
  ]);
  const rowPropsAndStyleArgs = __spreadProps(__spreadValues({}, formattedValueContext), {
    rowIndex
  });
  const rowComputedClassName = typeof rowClassName === "function" ? rowClassName(rowPropsAndStyleArgs) : rowClassName;
  let colClassName = void 0;
  if (groupByColumnReference == null ? void 0 : groupByColumnReference.className) {
    colClassName = applyColumnClassName(
      groupByColumnReference.className,
      stylingParam
    );
  }
  if (column.className) {
    colClassName = join(
      colClassName,
      applyColumnClassName(column.className, stylingParam)
    );
  }
  let style2;
  if (rowInfo.dataSourceHasGrouping && column.groupByForColumn) {
    style2 = styleForGroupColumn({ rowInfo });
  }
  if (rowStyle) {
    style2 = typeof rowStyle === "function" ? __spreadValues(__spreadValues({}, style2), rowStyle(rowPropsAndStyleArgs)) : __spreadValues(__spreadValues({}, style2), rowStyle);
  }
  if (groupByColumnReference == null ? void 0 : groupByColumnReference.style) {
    style2 = applyColumnStyle(style2, groupByColumnReference.style, stylingParam);
  }
  if (column.style) {
    style2 = applyColumnStyle(style2, column.style, stylingParam);
  }
  style2 = style2 || {};
  style2.height = rowHeight;
  style2.zIndex = `var(${columnZIndexAtIndex4}-${column.computedVisibleIndex})`;
  const memoizedStyle = useMemo4(
    () => style2,
    [!style2 ? null : JSON.stringify(style2)]
  );
  const odd = (rowInfo.indexInAll != null ? rowInfo.indexInAll : rowIndex) % 2 === 1;
  const zebra = showZebraRows ? odd ? "odd" : "even" : false;
  const cellProps = {
    domRef,
    cellType: "body",
    column,
    width,
    rowId: rowInfo.id,
    style: memoizedStyle,
    onMouseLeave,
    onMouseEnter,
    onClick,
    afterChildren: editor,
    onMouseDown,
    cssEllipsis: (_c = column.cssEllipsis) != null ? _c : true,
    className: join(
      useCellClassName(
        column,
        [InfiniteTableColumnCellClassName, InfiniteTableCellClassName],
        ColumnCellRecipe,
        {
          dragging: false,
          zebra,
          align: align2,
          verticalAlign,
          rowActive,
          rowSelected,
          groupRow: rowInfo.isGroupRow,
          groupCell: rowInfo.isGroupRow ? !!column.groupByForColumn : false,
          rowExpanded: rowInfo.isGroupRow ? !rowInfo.collapsed : false
        }
      ),
      colClassName,
      rowComputedClassName
    ),
    renderChildren
  };
  const ContextProvider = InfiniteTableColumnCellContext.Provider;
  return (
    // this context is here for supporting useInfiniteColumnCell to be used
    // with a custom column component, specified via column.components.ColumnCell
    /* @__PURE__ */ React36.createElement(
      ContextProvider,
      {
        value: renderParamRef.current
      },
      /* @__PURE__ */ React36.createElement(InfiniteTableCell, __spreadValues({}, cellProps))
    )
  );
}
var InfiniteTableColumnCell = React36.memo(
  InfiniteTableColumnCellFn
);
function useInfiniteColumnCell() {
  const result = useContext5(
    InfiniteTableColumnCellContext
  );
  return result;
}
function useInfiniteColumnEditor() {
  const {
    api,
    state: { editingValueRef, editingCell }
  } = useInfiniteTable();
  const { column, rowInfo } = useInfiniteColumnCell();
  const [initialValue] = React36.useState(() => editingCell == null ? void 0 : editingCell.value);
  const [currentValue, setCurrentValue] = React36.useState(initialValue);
  const readOnly = editingCell ? !editingCell.active && !!editingCell.waiting : false;
  const setValue = React36.useCallback((value) => {
    editingValueRef.current = value;
    setCurrentValue(value);
  }, []);
  React36.useLayoutEffect(() => {
    editingValueRef.current = initialValue;
  }, []);
  const confirmEdit = api.confirmEdit;
  const cancelEdit = api.cancelEdit;
  const rejectEdit = api.rejectEdit;
  return {
    api,
    initialValue,
    value: currentValue,
    readOnly,
    column,
    rowInfo,
    setValue,
    confirmEdit,
    cancelEdit,
    rejectEdit
  };
}

// src/components/RenderHookComponent.tsx
init_esm_shims();
function RenderHookComponent(props) {
  var _a;
  return (_a = props.render(props.renderParam)) != null ? _a : null;
}

// src/components/InfiniteTable/utils/RenderHookComponentForInfinite.tsx
function RenderCellHookComponent(props) {
  const ContextProvider = InfiniteTableColumnCellContext.Provider;
  return /* @__PURE__ */ React37.createElement(ContextProvider, { value: props.renderParam }, /* @__PURE__ */ React37.createElement(
    RenderHookComponent,
    {
      render: props.render,
      renderParam: props.renderParam
    }
  ));
}
function CellEditorContextComponent(props) {
  const ContextProvider = InfiniteTableColumnCellContext.Provider;
  return /* @__PURE__ */ React37.createElement(ContextProvider, { value: props.contextValue }, props.children);
}
function RenderHeaderCellHookComponent(props) {
  const ContextProvider = InfiniteTableHeaderCellContext.Provider;
  return /* @__PURE__ */ React37.createElement(ContextProvider, { value: props.renderParam }, /* @__PURE__ */ React37.createElement(
    RenderHookComponent,
    {
      render: props.render,
      renderParam: props.renderParam
    }
  ));
}

// src/components/InfiniteTable/components/icons/MenuIcon.tsx
init_esm_shims();
import * as React38 from "react";
var defaultLineStyle2 = {
  width: "100%",
  pointerEvents: "none"
};
var lineClassName = `${InfiniteTableIconClassName}-menu`;
var MenuIconDataAttributes = keyMirror({
  "data-name": ""
});
var MenuIconDataAttributesValues = {
  [MenuIconDataAttributes["data-name"]]: "menu-icon"
};
function MenuIcon(props) {
  const {
    style: style2,
    className,
    domProps,
    reserveSpaceWhenHidden,
    menuVisible,
    children
  } = props;
  const lineStyle = __spreadValues(__spreadProps(__spreadValues({}, defaultLineStyle2), {
    borderTop: `${ThemeVars.components.HeaderCell.menuIconLineWidth} solid currentColor`
  }), props.lineStyle);
  return /* @__PURE__ */ React38.createElement(
    "div",
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, domProps), {
      style: style2
    }), MenuIconDataAttributesValues), {
      onPointerDown: (e) => e.stopPropagation(),
      className: join(
        className,
        HeaderMenuIconCls({
          menuVisible,
          reserveSpaceWhenHidden
        }),
        InfiniteTableIconClassName,
        `${InfiniteTableIconClassName}-menu`
      )
    }),
    children != null ? children : /* @__PURE__ */ React38.createElement(React38.Fragment, null, /* @__PURE__ */ React38.createElement("div", { className: lineClassName, style: lineStyle }), /* @__PURE__ */ React38.createElement("div", { className: lineClassName, style: lineStyle }), /* @__PURE__ */ React38.createElement("div", { className: lineClassName, style: lineStyle }))
  );
}

// src/components/InfiniteTable/components/icons/SortIcon.tsx
init_esm_shims();
import * as React39 from "react";
import { useEffect as useEffect14, useState as useState10 } from "react";

// src/components/InfiniteTable/components/icons/SortIcon.css.ts
init_esm_shims();
var SortIconCls = "SortIcon_SortIconCls__1ek6mqy0 utilities_display_flex__16lm1iwy utilities_flexFlow_column__16lm1iw1l utilities_position_relative__16lm1iw1 utilities_justifyContent_spaceAround__16lm1iw1t";

// src/components/InfiniteTable/components/icons/SortIcon.tsx
var defaultLineStyle3 = {
  // marginTop: 4,
  // marginBottom: 1,
  transition: `width 0.25s, opacity 0.25s`
};
function SortIcon(props) {
  var _a;
  const [rendered, setRendered] = useState10(true);
  const [opacity, setOpacity] = useState10(0);
  const { direction, lineWidth = 1, style: style2, className, index } = props;
  const showIndex = index != null && index > 0;
  const size = (_a = props.size) != null ? _a : 16;
  const part = Math.floor(size / 4);
  const sizes = direction ? [size - 3 * part, size - 2 * part, size - part] : [0, 0, 0];
  if (direction === -1) {
    sizes.reverse();
  }
  const lineStyle = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, defaultLineStyle3), {
    borderTop: `${lineWidth}px solid currentColor`
  }), props.lineStyle), {
    opacity
  });
  useEffect14(() => {
    const newOpacity = direction != 0 ? 1 : 0;
    if (!rendered && newOpacity) {
      setRendered(true);
    }
    if (newOpacity !== opacity) {
      const rafId = requestAnimationFrame(() => {
        setOpacity(newOpacity);
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }
    return () => {
    };
  }, [direction, rendered]);
  const onTransitionEnd = () => {
    const hidden = opacity === 0 && direction === 0;
    const newRendered = !hidden;
    if (newRendered !== rendered) {
      setRendered(newRendered);
    }
  };
  if (!rendered) {
    return null;
  }
  const indexStyle = {};
  if (direction === -1) {
    indexStyle.top = "100%";
  }
  return /* @__PURE__ */ React39.createElement(
    "div",
    {
      "data-name": "sort-icon",
      style: __spreadProps(__spreadValues({}, style2), { width: size }),
      className: join(
        className,
        InfiniteTableIconClassName,
        SortIconCls,
        `${InfiniteTableIconClassName}-sort`
      )
    },
    showIndex ? /* @__PURE__ */ React39.createElement(
      "div",
      {
        "data-name": "index",
        style: indexStyle,
        className: HeaderSortIconIndexCls
      },
      index
    ) : null,
    /* @__PURE__ */ React39.createElement(
      "div",
      {
        style: __spreadValues({ width: sizes[0] }, lineStyle),
        onTransitionEnd
      }
    ),
    /* @__PURE__ */ React39.createElement("div", { style: __spreadValues({ width: sizes[1] }, lineStyle) }),
    /* @__PURE__ */ React39.createElement("div", { style: __spreadValues({ width: sizes[2] }, lineStyle) })
  );
}

// src/components/InfiniteTable/components/InfiniteTableHeader/useColumnResizeHandle.tsx
init_esm_shims();
import * as React41 from "react";
import { useCallback as useCallback13 } from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/ResizeHandle/index.tsx
init_esm_shims();
import { useRef as useRef15, useState as useState11 } from "react";
import * as React40 from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/ResizeHandle/columnResizer.ts
init_esm_shims();
function getColumnResizer(colIndex, {
  columns,
  shareSpaceOnResize,
  domRef
}) {
  const column = columns[colIndex];
  return {
    resize(diff) {
      setInfiniteColumnWidth(
        colIndex,
        column.computedWidth + diff,
        domRef.current
      );
      const nextColIndex = colIndex + 1;
      if (shareSpaceOnResize) {
        const nextColumn = columns[nextColIndex];
        if (!nextColumn) {
          return;
        }
        setInfiniteColumnWidth(
          nextColIndex,
          nextColumn.computedWidth - diff,
          domRef.current
        );
        if (nextColumn.computedPinned === "start") {
          addToInfiniteColumnOffset(nextColumn, diff, domRef.current);
        } else {
          setInfiniteColumnOffset(
            nextColIndex,
            nextColumn.computedOffset + diff,
            domRef.current
          );
        }
        return;
      }
      if (column.computedPinned === "end") {
        return;
      }
      if (column.computedPinned === "start") {
        for (let i = nextColIndex, len = columns.length; i < len; i++) {
          const col = columns[i];
          if (col.computedPinned === "start") {
            addToInfiniteColumnOffset(col, diff, domRef.current);
            continue;
          }
          if (col.computedPinned === "end") {
            continue;
          }
          setInfiniteColumnOffset(i, col.computedOffset + diff, domRef.current);
        }
        return;
      }
      for (let i = nextColIndex, len = columns.length; i < len; i++) {
        const col = columns[i];
        if (col.computedPinned) {
          continue;
        }
        setInfiniteColumnOffset(i, col.computedOffset + diff, domRef.current);
      }
    }
  };
}
function getColumnGroupResizer(colIndexes, config) {
  const lastColIndex = colIndexes[colIndexes.length - 1];
  return {
    /**
     * Performs real-time resizing of columns by updating the corresponding
     * CSS variables for the corresponding colIndexes.
     *
     * Note: this resize is transient - so after the resize handle is dropped,
     * the table needs to be re-rendered so that the actual widths end up in the component state as well.
     *
     * @param diffs an array of diffs, one for each column in the colIndexes
     */
    resize(diffs) {
      const { columns, domRef } = config;
      const firstCol = columns[colIndexes[0]];
      let offset = firstCol.computedOffset;
      let diffSum = 0;
      const node = domRef.current;
      diffs.forEach((diff, i) => {
        diffSum += diff;
        const colIndex = colIndexes[i];
        const column = columns[colIndex];
        const newWidth = column.computedWidth + diff;
        setInfiniteColumnWidth(colIndex, newWidth, node);
        if (column.computedPinned === "end") {
          return;
        }
        if (offset) {
          setInfiniteColumnOffset(colIndex, offset, node);
        }
        offset += newWidth;
      });
      if (firstCol.computedPinned === "end") {
        return;
      }
      for (let i = lastColIndex + 1; i < columns.length; i++) {
        const col = columns[i];
        if (col.computedPinned === "end") {
          continue;
        }
        setInfiniteColumnOffset(i, col.computedOffset + diffSum, node);
      }
    }
  };
}

// src/components/InfiniteTable/components/InfiniteTableHeader/ResizeHandle/ResizeHandle.css.ts
init_esm_shims();
var ResizeHandleCls = "ResizeHandle_ResizeHandleCls__zneyzh0 utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_right_0__16lm1iw1i utilities_bottom_0__16lm1iw1g utilities_cursor_colResize__16lm1iwj utilities_overflow_hidden__16lm1iw1w";
var ResizeHandleDraggerClsRecipe = createRuntimeFn({ defaultClassName: "ResizeHandle_ResizeHandleDraggerClsRecipe__zneyzhb utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_bottom_0__16lm1iw1g", variantClassNames: { constrained: { false: "ResizeHandle_ResizeHandleDraggerClsRecipe_constrained_false__zneyzhc", true: "ResizeHandle_ResizeHandleDraggerClsRecipe_constrained_true__zneyzhd" } }, defaultVariants: {}, compoundVariants: [] });
var ResizeHandleRecipeCls = createRuntimeFn({ defaultClassName: "", variantClassNames: { computedPinned: { start: "ResizeHandle_ResizeHandleRecipeCls_computedPinned_start__zneyzh1", end: "ResizeHandle_ResizeHandleRecipeCls_computedPinned_end__zneyzh2 utilities_left_0__16lm1iw1d utilities_right_auto__16lm1iw1k", false: "ResizeHandle_ResizeHandleRecipeCls_computedPinned_false__zneyzh3" }, computedFirstInCategory: { true: "ResizeHandle_ResizeHandleRecipeCls_computedFirstInCategory_true__zneyzh4", false: "ResizeHandle_ResizeHandleRecipeCls_computedFirstInCategory_false__zneyzh5" }, computedLastInCategory: { true: "ResizeHandle_ResizeHandleRecipeCls_computedLastInCategory_true__zneyzh6", false: "ResizeHandle_ResizeHandleRecipeCls_computedLastInCategory_false__zneyzh7" } }, defaultVariants: {}, compoundVariants: [[{ computedPinned: "end", computedLastInCategory: false, computedFirstInCategory: true }, "ResizeHandle_ResizeHandleRecipeCls_compound_0__zneyzh8"], [{ computedPinned: false, computedFirstInCategory: false, computedLastInCategory: true }, "ResizeHandle_ResizeHandleRecipeCls_compound_1__zneyzh9"], [{ computedPinned: "start", computedFirstInCategory: false, computedLastInCategory: true }, "ResizeHandle_ResizeHandleRecipeCls_compound_2__zneyzha"]] });

// src/components/InfiniteTable/components/InfiniteTableHeader/ResizeHandle/index.tsx
var { rootClassName: rootClassName7 } = internalProps;
var InfiniteTableHeaderCellResizeHandleCls = `${rootClassName7}HeaderCell_ResizeHandle`;
function ResizeHandleFn(props) {
  const domRef = useRef15(null);
  const [constrained, setConstrained] = useState11(false);
  const constrainedRef = useRef15(constrained);
  constrainedRef.current = constrained;
  const col = props.columns[props.columnIndex];
  if (!col) {
    return null;
  }
  const computedPinned = col.computedPinned;
  const computedFirstInCategory = col.computedFirstInCategory;
  const computedLastInCategory = col.computedLastInCategory;
  const onPointerDown = (e) => {
    e.stopPropagation();
    const shareSpaceOnResize = !!e.shiftKey;
    const pointerId = e.pointerId;
    const initialX = e.clientX;
    const target = e.target;
    target.setPointerCapture(pointerId);
    const resizer = getColumnResizer(props.columnIndex, {
      columns: props.columns,
      shareSpaceOnResize,
      domRef
    });
    const resizeDiff = (diff) => {
      if (computedPinned === "end") {
        diff *= -1;
      }
      const { adjustedDiff, constrained: constrained2 } = props.computeResize({
        diff,
        shareSpaceOnResize
      });
      if (constrainedRef.current !== constrained2) {
        setConstrained(constrained2);
      }
      resizer.resize(adjustedDiff);
      return adjustedDiff;
    };
    const onPointerMove = (e2) => {
      resizeDiff(Math.round(e2.clientX - initialX));
    };
    const onPointerUp = (e2) => {
      target.releasePointerCapture(pointerId);
      target.removeEventListener("pointermove", onPointerMove);
      target.removeEventListener("pointerup", onPointerUp);
      const diff = Math.round(e2.clientX - initialX);
      const adjustedDiff = resizeDiff(diff);
      props.onResize({ diff: adjustedDiff, shareSpaceOnResize });
    };
    target.addEventListener("pointermove", onPointerMove);
    target.addEventListener("pointerup", onPointerUp);
  };
  const style2 = (computedPinned === false || computedPinned === "start") && computedLastInCategory ? {
    right: computedPinned === "start" ? void 0 : 0
    //ThemeVars.components.HeaderCell.resizeHandleWidth,
  } : computedPinned === "end" && computedFirstInCategory ? { right: void 0 } : void 0;
  return /* @__PURE__ */ React40.createElement(
    "div",
    {
      ref: domRef,
      className: `${InfiniteTableHeaderCellResizeHandleCls} ${ResizeHandleCls} ${ResizeHandleRecipeCls(
        {
          computedPinned,
          computedFirstInCategory,
          computedLastInCategory
        }
      )}`,
      onPointerDown
    },
    /* @__PURE__ */ React40.createElement(
      "div",
      {
        style: style2,
        className: ResizeHandleDraggerClsRecipe({
          constrained
        })
      }
    )
  );
}
var ResizeHandle = React40.memo(ResizeHandleFn);

// src/components/InfiniteTable/components/InfiniteTableHeader/useColumnResizeHandle.tsx
function useColumnResizeHandle(column) {
  const {
    computed: { computedVisibleColumns },
    getState,
    getComputed,
    actions
  } = useInfiniteTable();
  const computeResizeForDiff = useCallback13(
    ({
      diff,
      shareSpaceOnResize
    }) => {
      const state = getState();
      const { columnSizing, viewportReservedWidth, bodySize } = state;
      const columns = getComputed().computedVisibleColumns;
      let atLeastOneFlex = false;
      const columnSizingWithFlex = columns.reduce((acc, col) => {
        if (col.computedFlex) {
          acc[col.id] = __spreadProps(__spreadValues({}, columnSizing[col.id]), { flex: col.computedWidth });
          atLeastOneFlex = true;
        }
        return acc;
      }, {});
      const columnSizingForResize = atLeastOneFlex ? __spreadValues(__spreadValues({}, columnSizing), columnSizingWithFlex) : columnSizing;
      const result = computeResize({
        shareSpaceOnResize,
        availableSize: bodySize.width,
        reservedWidth: viewportReservedWidth || 0,
        dragHandleOffset: diff,
        dragHandlePositionAfter: column.computedVisibleIndex,
        columnSizing: columnSizingForResize,
        items: columns.map((c) => {
          return {
            id: c.id,
            computedFlex: c.computedFlex,
            computedWidth: c.computedWidth,
            computedMinWidth: c.computedMinWidth,
            computedMaxWidth: c.computedMaxWidth
          };
        })
      });
      return result;
    },
    [column]
  );
  const onColumnResize = useCallback13(
    ({
      diff,
      shareSpaceOnResize
    }) => {
      const { columnSizing, reservedWidth } = computeResizeForDiff({
        diff,
        shareSpaceOnResize
      });
      if (!shareSpaceOnResize) {
        actions.viewportReservedWidth = reservedWidth;
      }
      actions.columnSizing = columnSizing;
    },
    [computeResizeForDiff]
  );
  const resizeHandle = column.computedResizable ? /* @__PURE__ */ React41.createElement(
    ResizeHandle,
    {
      columns: computedVisibleColumns,
      columnIndex: column.computedVisibleIndex,
      computeResize: computeResizeForDiff,
      onResize: onColumnResize
    }
  ) : null;
  return resizeHandle;
}

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeaderCell.tsx
var defaultRenderSelectionCheckBox2 = (params) => {
  const { allRowsSelected, someRowsSelected, api } = params;
  const selected = allRowsSelected ? true : someRowsSelected ? null : false;
  return /* @__PURE__ */ React42.createElement(
    InfiniteCheckBox,
    {
      domProps: {
        className: SelectionCheckboxCls
      },
      onChange: (selected2) => {
        if (selected2) {
          api.selectionApi.selectAll();
        } else {
          api.selectionApi.deselectAll();
        }
      },
      checked: selected
    }
  );
};
var InfiniteTableHeaderCellContext = React42.createContext(null);
var { rootClassName: rootClassName8 } = internalProps;
var InfiniteTableHeaderCellClassName = `${rootClassName8}HeaderCell`;
var columnZIndexAtIndex5 = stripVar(InternalVars.columnZIndexAtIndex);
var spacer = /* @__PURE__ */ React42.createElement("div", { className: flex["1"] });
var InfiniteHeaderCellDataAttributes = keyMirror({
  "data-name": ``,
  "data-field": ``,
  "data-header-align": "",
  "data-column-id": "",
  "data-sort": "",
  "data-sort-index": ""
});
function InfiniteTableHeaderCell(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const column = props.column;
  const {
    api,
    getComputed,
    getState,
    actions,
    state: {
      showColumnFilters,
      components: components2,
      portalDOMRef,
      columnHeaderHeight,
      columnReorderDragColumnId,
      columnMenuVisibleForColumnId
    }
  } = useInfiniteTable();
  const {
    api: dataSourceApi,
    componentActions: dataSourceActions,
    getState: getDataSourceState,
    componentState: { filterDelay, filterTypes }
  } = useDataSourceContextValue();
  const { allRowsSelected, someRowsSelected, selectionMode } = useDataSource();
  const dragging = columnReorderDragColumnId === column.id;
  const { onResize, height, width, headerOptions, columnsMap } = props;
  const sortInfo = column.computedSortInfo;
  let header = column.header;
  const ref = useCallback14(
    (node) => {
      var _a2;
      domRef.current = node;
      (_a2 = props.domRef) == null ? void 0 : _a2.call(props, node);
    },
    [props.domRef]
  );
  const alwaysShow = headerOptions.alwaysReserveSpaceForSortIcon;
  const alignFnOrValue = (_a = column.headerAlign) != null ? _a : column.align;
  const align2 = (_b = typeof alignFnOrValue === "function" ? alignFnOrValue({ isHeader: true, column }) : alignFnOrValue) != null ? _b : "start";
  const verticalAlign = (_c = typeof column.verticalAlign === "function" ? column.verticalAlign({ isHeader: true, column }) : column.verticalAlign) != null ? _c : "center";
  const columnApi = getColumnApiForColumn(column, {
    actions,
    api,
    dataSourceActions,
    dataSourceApi,
    getComputed,
    getDataSourceState,
    getState
  });
  const computedSortable = columnApi.isSortable();
  const sortIcon = computedSortable && (column.computedSorted || alwaysShow) ? /* @__PURE__ */ React42.createElement(
    SortIcon,
    {
      index: column.computedMultiSort ? column.computedSortIndex + 1 : void 0,
      style: {
        marginInlineStart: ThemeVars.spacing[2],
        marginInlineEnd: ThemeVars.spacing[2]
      },
      className: `${InfiniteTableHeaderCellClassName}__sort-icon ${HeaderSortIconCls} ${HeaderSortIconRecipe(
        {
          align: align2
        }
      )}`,
      direction: column.computedSorted ? column.computedSortedAsc ? 1 : -1 : 0
    }
  ) : null;
  const filtered = column.computedFilterable && column.computedFiltered;
  const filterIcon = filtered ? /* @__PURE__ */ React42.createElement(FilterIcon, null) : null;
  const headerCSSEllipsis = (_e = (_d = column.headerCssEllipsis) != null ? _d : column.cssEllipsis) != null ? _e : true;
  const menuIconProps = {
    reserveSpaceWhenHidden: align2 === "center",
    menuVisible: columnMenuVisibleForColumnId === column.id,
    style: align2 === "end" ? {
      marginInlineStart: `calc(${ThemeVars.components.HeaderCell.resizeHandleActiveAreaWidth} / 2)`,
      marginInlineEnd: ThemeVars.spacing[2]
    } : {
      marginInlineEnd: `calc(${ThemeVars.components.HeaderCell.resizeHandleActiveAreaWidth} / 2)`,
      marginInlineStart: ThemeVars.spacing[2]
    },
    domProps: {
      onMouseDown: (event) => {
        event.stopPropagation();
        columnApi.toggleContextMenu(event.target);
      }
    }
  };
  const MenuIconCmp = ((_f = column.components) == null ? void 0 : _f.MenuIcon) || (components2 == null ? void 0 : components2.MenuIcon) || MenuIcon;
  const menuIcon = /* @__PURE__ */ React42.createElement(MenuIconCmp, __spreadValues({}, menuIconProps));
  const initialRenderParam = {
    dragging,
    domRef: ref,
    insideColumnMenu: false,
    column,
    columnsMap,
    columnSortInfo: sortInfo,
    columnFilterValue: column.computedFilterValue,
    filtered: column.computedFiltered,
    someRowsSelected,
    allRowsSelected,
    selectionMode,
    api,
    columnApi,
    renderBag: {
      sortIcon,
      filterIcon,
      menuIcon,
      menuIconProps,
      selectionCheckBox: null,
      header: column.header && typeof column.header !== "function" ? column.header : column.name
    }
  };
  const renderParam = initialRenderParam;
  const renderChildren = () => {
    var _a2;
    const renderParam2 = __spreadProps(__spreadValues({}, initialRenderParam), {
      renderBag: __spreadValues({}, initialRenderParam.renderBag)
    });
    if (column.renderSortIcon) {
      renderParam2.renderBag.sortIcon = /* @__PURE__ */ React42.createElement(
        RenderHeaderCellHookComponent,
        {
          render: column.renderSortIcon,
          renderParam: __spreadProps(__spreadValues({}, renderParam2), {
            renderBag: __spreadValues({}, renderParam2.renderBag)
          })
        }
      );
    }
    if (column.renderFilterIcon) {
      renderParam2.renderBag.filterIcon = /* @__PURE__ */ React42.createElement(
        RenderHeaderCellHookComponent,
        {
          render: column.renderFilterIcon,
          renderParam: __spreadProps(__spreadValues({}, renderParam2), {
            renderBag: __spreadValues({}, renderParam2.renderBag)
          })
        }
      );
    }
    if (typeof column.renderMenuIcon === "function") {
      renderParam2.renderBag.menuIcon = /* @__PURE__ */ React42.createElement(
        RenderHeaderCellHookComponent,
        {
          render: (param) => {
            if (typeof column.renderMenuIcon !== "function") {
              return null;
            }
            const result = column.renderMenuIcon(param);
            if (result) {
              if (result.type === MenuIconCmp || result.type === MenuIcon) {
                return result;
              }
              return /* @__PURE__ */ React42.createElement(MenuIconCmp, __spreadValues({}, menuIconProps), result);
            }
            return null;
          },
          renderParam: __spreadProps(__spreadValues({}, renderParam2), {
            renderBag: __spreadValues({}, renderParam2.renderBag)
          })
        }
      );
    }
    if (column.renderSelectionCheckBox && selectionMode === "multi-row") {
      renderParam2.renderBag.selectionCheckBox = /* @__PURE__ */ React42.createElement(
        RenderHeaderCellHookComponent,
        {
          render: defaultRenderSelectionCheckBox2,
          renderParam: __spreadProps(__spreadValues({}, renderParam2), {
            renderBag: __spreadValues({}, renderParam2.renderBag)
          })
        }
      );
      const renderHeaderSelectionCheckBox = (_a2 = column.renderHeaderSelectionCheckBox) != null ? _a2 : column.renderSelectionCheckBox;
      if (renderHeaderSelectionCheckBox && renderHeaderSelectionCheckBox !== true) {
        renderParam2.renderBag.selectionCheckBox = /* @__PURE__ */ React42.createElement(
          RenderHeaderCellHookComponent,
          {
            render: renderHeaderSelectionCheckBox,
            renderParam: __spreadProps(__spreadValues({}, renderParam2), {
              renderBag: __spreadValues({}, renderParam2.renderBag)
            })
          }
        );
      }
    }
    if (header instanceof Function) {
      renderParam2.renderBag.header = /* @__PURE__ */ React42.createElement(
        RenderHeaderCellHookComponent,
        {
          render: header,
          renderParam: __spreadProps(__spreadValues({}, renderParam2), {
            renderBag: __spreadValues({}, renderParam2.renderBag)
          })
        }
      );
    }
    const theMenuIcon = column.renderMenuIcon === false ? null : renderParam2.renderBag.menuIcon;
    const headerContent = headerCSSEllipsis ? /* @__PURE__ */ React42.createElement("div", { className: cssEllipsisClassName }, renderParam2.renderBag.header) : renderParam2.renderBag.header;
    const all = /* @__PURE__ */ React42.createElement(React42.Fragment, null, align2 === "center" ? spacer : null, renderParam2.renderBag.selectionCheckBox, headerContent, renderParam2.renderBag.sortIcon, renderParam2.renderBag.filterIcon, align2 === "center" ? spacer : null, align2 !== "center" ? spacer : null, theMenuIcon);
    if (column.renderHeader) {
      return /* @__PURE__ */ React42.createElement(
        RenderHeaderCellHookComponent,
        {
          render: column.renderHeader,
          renderParam: __spreadProps(__spreadValues({}, renderParam2), {
            renderBag: __spreadProps(__spreadValues({}, renderParam2.renderBag), { all })
          })
        }
      );
    }
    return all;
  };
  const domRef = useRef16(null);
  useEffect15(() => {
    let clearOnResize = null;
    const node = domRef.current;
    if (onResize && node) {
      clearOnResize = setupResizeObserver(node, onResize);
    }
    return () => {
      clearOnResize == null ? void 0 : clearOnResize();
    };
  }, [domRef.current, props.onResize]);
  let style2 = {
    // height: column.computedFiltered? height*2: height,
    height
  };
  if (column.headerStyle) {
    style2 = typeof column.headerStyle === "function" ? __spreadValues(__spreadValues({}, style2), column.headerStyle(renderParam) || {}) : __spreadValues(__spreadValues({}, style2), column.headerStyle);
  }
  const headerClassName = typeof column.headerClassName === "function" ? column.headerClassName(renderParam) : column.headerClassName;
  const { onPointerDown, proxyPosition } = useColumnPointerEvents({
    columnId: column.id,
    domRef
  });
  let draggingProxy = null;
  if (dragging && proxyPosition) {
    draggingProxy = /* @__PURE__ */ React42.createElement(
      "div",
      {
        key: column.id,
        className: `${InfiniteTableHeaderCellClassName}Proxy ${HeaderCellProxy}`,
        style: {
          position: "absolute",
          height,
          width,
          left: (_g = proxyPosition.left) != null ? _g : 0,
          top: (_h = proxyPosition.top) != null ? _h : 0,
          zIndex: 1e9
        }
      },
      renderParam.renderBag.header
    );
    draggingProxy = createPortal(draggingProxy, portalDOMRef.current);
  }
  const ContextProvider = InfiniteTableHeaderCellContext.Provider;
  const contentRecipeVariants = {
    filtered: column.computedFiltered,
    verticalAlign,
    align: align2
  };
  const debouncedOnFilterValueChange = React42.useMemo(() => {
    const fn = (filterValue) => {
      api.setColumnFilter(column.id, filterValue);
    };
    if (filterDelay > 0) {
      return debounce(fn, { wait: filterDelay });
    }
    return fn;
  }, [filterDelay, column.id]);
  const filterTypeKey = column.computedFilterType;
  const filterType = filterTypes[filterTypeKey];
  const operatorName = column.computedFilterable ? (_j = (_i = column.computedFilterValue) == null ? void 0 : _i.filter.operator) != null ? _j : filterType == null ? void 0 : filterType.defaultOperator : void 0;
  const operator = column.computedFilterable && filterType ? filterType.operators.find((op) => op.name === operatorName) : void 0;
  const FilterEditor = ((_k = operator == null ? void 0 : operator.components) == null ? void 0 : _k.FilterEditor) || ((_l = filterType == null ? void 0 : filterType.components) == null ? void 0 : _l.FilterEditor) || ((_m = column.components) == null ? void 0 : _m.FilterEditor) || StringFilterEditor;
  const FilterOperatorSwitch = ((_n = filterType == null ? void 0 : filterType.components) == null ? void 0 : _n.FilterOperatorSwitch) || ((_o = column.components) == null ? void 0 : _o.FilterOperatorSwitch);
  const resizeHandle = useColumnResizeHandle(column);
  const zIndex2 = `var(${columnZIndexAtIndex5}-${column.computedVisibleIndex})`;
  style2.zIndex = zIndex2;
  const dataAttrs = {
    "data-field": `${column.field || ""}`,
    "data-column-id": column.id,
    "data-header-align": align2,
    "data-name": "HeaderCell",
    "data-sort": column.computedSortedAsc ? "asc" : column.computedSortedDesc ? "desc" : "none",
    "data-sort-index": `${(_p = column.computedSortIndex) != null ? _p : -1}`
  };
  return /* @__PURE__ */ React42.createElement(ContextProvider, { value: renderParam }, /* @__PURE__ */ React42.createElement(
    InfiniteTableCell,
    __spreadProps(__spreadValues({
      domRef: ref,
      cellType: "header",
      column
    }, dataAttrs), {
      "data-z-index": zIndex2,
      style: style2,
      width,
      onPointerDown,
      contentClassName: join(
        HeaderCellContentRecipe(contentRecipeVariants),
        justifyContent[align2]
      ),
      contentStyle: showColumnFilters ? { height: height / 2 } : void 0,
      className: join(
        InfiniteTableHeaderCellClassName,
        userSelect.none,
        computedSortable ? cursor.pointer : "",
        headerClassName,
        useCellClassName(
          column,
          [InfiniteTableHeaderCellClassName, InfiniteTableCellClassName],
          HeaderCellRecipe,
          {
            dragging,
            align: align2,
            verticalAlign,
            rowSelected: false,
            zebra: false,
            rowActive: false,
            groupCell: false,
            groupRow: false,
            rowExpanded: false
          }
        ),
        CellCls
      ),
      cssEllipsis: headerCSSEllipsis,
      afterChildren: /* @__PURE__ */ React42.createElement(React42.Fragment, null, showColumnFilters ? column.computedFilterable ? /* @__PURE__ */ React42.createElement(
        InfiniteTableColumnHeaderFilter,
        {
          filterEditor: FilterEditor,
          filterOperatorSwitch: FilterOperatorSwitch != null ? FilterOperatorSwitch : InfiniteTableFilterOperatorSwitch,
          operator,
          filterTypes,
          onChange: debouncedOnFilterValueChange,
          columnFilterType: filterTypeKey,
          columnLabel: column.field || column.name || column.id,
          columnFilterValue: column.computedFilterValue,
          columnHeaderHeight
        }
      ) : /* @__PURE__ */ React42.createElement(InfiniteTableColumnHeaderFilterEmpty, null) : null, resizeHandle),
      renderChildren
    })
  ), draggingProxy);
}
function useInfiniteHeaderCell() {
  const result = useContext6(
    InfiniteTableHeaderCellContext
  );
  return result;
}

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeaderWrapper.tsx
init_esm_shims();
import * as React47 from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/buildColumnAndGroupTree.ts
init_esm_shims();
function buildColumnAndGroupTree(columns, columnGroups, columnGroupsDepthsMap, columnGroupsMaxDepth) {
  const map2 = /* @__PURE__ */ new Map();
  const temporaryMap = /* @__PURE__ */ new Map();
  const mapOfAllParentGroupsForColumns = /* @__PURE__ */ new Map();
  columns.forEach((col, index) => {
    var _a, _b, _c, _d;
    const colId = col.id;
    const previousColumn = columns[index - 1];
    const previousColumnId = (_a = previousColumn == null ? void 0 : previousColumn.id) != null ? _a : "";
    const parentGroups = /* @__PURE__ */ new Set();
    const parentGroupsOfPreviousColumn = (previousColumn == null ? void 0 : previousColumn.computedPinned) !== col.computedPinned ? /* @__PURE__ */ new Set() : (_b = mapOfAllParentGroupsForColumns.get(previousColumnId)) != null ? _b : /* @__PURE__ */ new Set();
    mapOfAllParentGroupsForColumns.set(colId, parentGroups);
    const colItem = {
      type: "column",
      id: colId,
      ref: col,
      groupOffset: 0,
      computedPinned: col.computedPinned,
      computedWidth: col.computedWidth,
      depth: col.columnGroup ? ((_c = columnGroupsDepthsMap.get(col.columnGroup)) != null ? _c : 0) + 1 : 0
    };
    map2.set([colId], colItem);
    let groupId = col.columnGroup;
    let colGroupItem;
    let prevGroupItem = colItem;
    while (groupId) {
      const colGroup = columnGroups.get(groupId);
      if (colGroup) {
        parentGroups.add(groupId);
        const groupAbsoluteId = [colId, ...parentGroups];
        colGroupItem = parentGroupsOfPreviousColumn.has(groupId) ? temporaryMap.get(groupId) : void 0;
        if (!colGroupItem) {
          colGroupItem = {
            id: groupId,
            type: "group",
            ref: colGroup,
            columnItems: [],
            children: [],
            groupOffset: 0,
            uniqueGroupId: [groupId],
            computedWidth: 0,
            computedPinned: colItem.computedPinned,
            depth: (_d = columnGroupsDepthsMap.get(groupId)) != null ? _d : 0
          };
          map2.set(groupAbsoluteId, colGroupItem);
          temporaryMap.set(groupId, colGroupItem);
        }
        colGroupItem.columnItems.push(colItem);
        colGroupItem.uniqueGroupId.push(colItem.id);
        if (prevGroupItem && !parentGroupsOfPreviousColumn.has(prevGroupItem.id)) {
          colGroupItem.children.push(prevGroupItem);
        }
        prevGroupItem = colGroupItem;
        groupId = colGroup.columnGroup;
      } else {
        break;
      }
    }
  });
  const result = [];
  const pathsToCells = new DeepMap();
  let groupOffset = 0;
  map2.forEach((item) => {
    if (!item.ref.columnGroup) {
      const itemWidth = item.type === "column" ? item.ref.computedWidth : item.columnItems.reduce(
        (sum2, col) => sum2 + col.ref.computedWidth,
        0
      );
      item.groupOffset = groupOffset;
      item.computedWidth = itemWidth;
      if (item.type === "group") {
        assignGroupOffsetsAndComputedWidths(item.children);
      }
      result.push(item);
      groupOffset += itemWidth;
    }
    if (item.type === "group") {
      item.columnItems.forEach((colItem) => {
        pathsToCells.set([item.depth, colItem.ref.computedVisibleIndex], item);
      });
    } else {
      for (let i = item.depth; i <= columnGroupsMaxDepth + 1; i++) {
        pathsToCells.set([i, item.ref.computedVisibleIndex], item);
      }
    }
  });
  map2.clear();
  temporaryMap.clear();
  return { tree: result, pathsToCells };
}
function assignGroupOffsetsAndComputedWidths(items, groupOffset = 0) {
  items.forEach((item) => {
    const itemWidth = item.type === "column" ? item.ref.computedWidth : item.columnItems.reduce((sum2, col) => sum2 + col.ref.computedWidth, 0);
    item.computedWidth = itemWidth;
    item.groupOffset = groupOffset;
    if (item.type === "group") {
      assignGroupOffsetsAndComputedWidths(item.children);
    }
    groupOffset += itemWidth;
  });
}

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeader.tsx
init_esm_shims();
import * as React46 from "react";
import { useCallback as useCallback16, useEffect as useEffect16, useRef as useRef18 } from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeaderGroup.tsx
init_esm_shims();
import * as React45 from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/useColumnGroupResizeHandle.tsx
init_esm_shims();
import * as React44 from "react";
import { useCallback as useCallback15 } from "react";

// src/components/InfiniteTable/components/InfiniteTableHeader/ResizeHandle/GroupResizeHandle.tsx
init_esm_shims();
import { useRef as useRef17, useState as useState12 } from "react";
import * as React43 from "react";
var { rootClassName: rootClassName9 } = internalProps;
var InfiniteTableHeaderCellResizeHandleCls2 = `${rootClassName9}HeaderCell_ResizeHandle`;
function GroupResizeHandleFn(props) {
  const domRef = useRef17(null);
  const [constrained, setConstrained] = useState12(false);
  const constrainedRef = useRef17(constrained);
  constrainedRef.current = constrained;
  const col = props.groupColumns[0];
  if (!col) {
    return null;
  }
  const computedPinned = col.computedPinned;
  const computedFirstInCategory = col.computedFirstInCategory;
  const computedLastInCategory = col.computedLastInCategory;
  const onPointerDown = (e) => {
    e.stopPropagation();
    const pointerId = e.pointerId;
    const initialX = e.clientX;
    const target = e.target;
    target.setPointerCapture(pointerId);
    let initialMove = true;
    const resizer = getColumnGroupResizer(
      props.groupColumns.map((c) => c.computedVisibleIndex),
      {
        columns: props.columns,
        domRef
      }
    );
    const resizeDiff = (diff) => {
      if (computedPinned === "end") {
        diff *= -1;
      }
      const { constrained: constrained2, adjustedDiffs, adjustedDiff } = props.computeResize(diff);
      if (constrainedRef.current !== constrained2) {
        setConstrained(constrained2);
      }
      resizer.resize(adjustedDiffs);
      return adjustedDiff;
    };
    const onPointerMove = (e2) => {
      if (initialMove) {
        const maxDiff = props.groupColumns.reduce((diff, col2) => {
          return diff + col2.computedWidth - col2.computedMinWidth;
        }, 0);
        const currentSize = props.brain.getAvailableSize();
        const newSize = {
          width: currentSize.width + maxDiff,
          height: currentSize.height
        };
        props.brain.setAvailableSize(newSize);
        initialMove = false;
      }
      resizeDiff(Math.round(e2.clientX - initialX));
    };
    const onPointerUp = (e2) => {
      target.releasePointerCapture(pointerId);
      target.removeEventListener("pointermove", onPointerMove);
      target.removeEventListener("pointerup", onPointerUp);
      const diff = Math.round(e2.clientX - initialX);
      const adjustedDiffs = resizeDiff(diff);
      props.onResize(adjustedDiffs);
    };
    target.addEventListener("pointermove", onPointerMove);
    target.addEventListener("pointerup", onPointerUp);
  };
  const style2 = (computedPinned === false || computedPinned === "start") && computedLastInCategory ? {
    right: computedPinned === "start" ? void 0 : ThemeVars.components.HeaderCell.resizeHandleWidth
  } : computedPinned === "end" && computedFirstInCategory ? { right: void 0 } : void 0;
  return /* @__PURE__ */ React43.createElement(
    "div",
    {
      ref: domRef,
      className: `${InfiniteTableHeaderCellResizeHandleCls2} ${ResizeHandleCls} ${ResizeHandleRecipeCls(
        {
          computedPinned,
          computedFirstInCategory,
          computedLastInCategory
        }
      )}`,
      onPointerDown
    },
    /* @__PURE__ */ React43.createElement(
      "div",
      {
        style: __spreadValues(__spreadValues({}, style2), props.style),
        className: ResizeHandleDraggerClsRecipe({
          constrained
        })
      }
    )
  );
}
var GroupResizeHandle = React43.memo(
  GroupResizeHandleFn
);

// src/components/InfiniteTable/components/InfiniteTableHeader/useColumnGroupResizeHandle.tsx
function useColumnGroupResizeHandle(groupColumns, config) {
  const { bodyBrain, groupHeight, columnGroup, columnGroupsMaxDepth } = config;
  const {
    computed: { computedVisibleColumns },
    getState,
    getComputed,
    actions
  } = useInfiniteTable();
  const lastColumnInGroup = groupColumns[groupColumns.length - 1];
  const computeResizeForDiff = useCallback15(
    (diff) => {
      const state = getState();
      const { columnSizing, viewportReservedWidth, bodySize } = state;
      const columns = getComputed().computedVisibleColumns;
      let atLeastOneFlex = false;
      const columnSizingWithFlex = columns.reduce((acc, col) => {
        if (col.computedFlex) {
          acc[col.id] = __spreadProps(__spreadValues({}, columnSizing[col.id]), { flex: col.computedWidth });
          atLeastOneFlex = true;
        }
        return acc;
      }, {});
      const columnSizingForResize = atLeastOneFlex ? __spreadValues(__spreadValues({}, columnSizing), columnSizingWithFlex) : columnSizing;
      const result = computeGroupResize({
        availableSize: bodySize.width,
        reservedWidth: viewportReservedWidth || 0,
        dragHandleOffset: diff,
        dragHandlePositionAfter: lastColumnInGroup.computedVisibleIndex,
        columnSizing: columnSizingForResize,
        columnGroupSize: groupColumns.length,
        items: columns.map((c) => {
          return {
            id: c.id,
            resizable: c.computedResizable,
            computedFlex: c.computedFlex,
            computedWidth: c.computedWidth,
            computedMinWidth: c.computedMinWidth,
            computedMaxWidth: c.computedMaxWidth
          };
        })
      });
      return result;
    },
    [lastColumnInGroup]
  );
  const onColumnResize = useCallback15(
    (diff) => {
      const { columnSizing, reservedWidth } = computeResizeForDiff(diff);
      actions.viewportReservedWidth = reservedWidth;
      actions.columnSizing = columnSizing;
    },
    [computeResizeForDiff]
  );
  const groupResizable = groupColumns.some((c) => c.computedResizable);
  const resizeHandle = groupResizable ? /* @__PURE__ */ React44.createElement(
    GroupResizeHandle,
    {
      brain: bodyBrain,
      style: {
        // height: groupHeight * (columnGroupsMaxDepth - columnGroup.depth + 2),
        height: groupHeight * (columnGroupsMaxDepth - columnGroup.depth + 2)
      },
      columns: computedVisibleColumns,
      groupColumns,
      computeResize: computeResizeForDiff,
      onResize: onColumnResize
    }
  ) : null;
  return resizeHandle;
}

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeaderGroup.tsx
var TableHeaderGroupClassName = `${rootClassName2}HeaderGroup`;
var columnWidthAtIndex5 = stripVar(InternalVars.columnWidthAtIndex);
var columnZIndexAtIndex6 = stripVar(InternalVars.columnZIndexAtIndex);
function InfiniteTableHeaderGroup(props) {
  const { columnGroup, height, columns, bodyBrain, columnGroupsMaxDepth } = props;
  let { header } = columnGroup;
  if (header instanceof Function) {
    header = header({
      columnGroup
    });
  }
  const handle = useColumnGroupResizeHandle(columns, {
    bodyBrain,
    groupHeight: height,
    columnGroup,
    columnGroupsMaxDepth
  });
  const firstColumn = columns[0];
  const width = columns.length > 1 ? `calc( ` + columns.map(
    (col) => `var(${columnWidthAtIndex5}-${col.computedVisibleIndex})`
  ).join(" + ") + " )" : `var(${columnWidthAtIndex5}-${firstColumn.computedVisibleIndex})`;
  const zIndex2 = `calc(var(${columnZIndexAtIndex6}-${firstColumn.computedVisibleIndex}) + ${columnGroupsMaxDepth - columnGroup.depth})`;
  return /* @__PURE__ */ React45.createElement(
    "div",
    {
      ref: props.domRef,
      "data-group-id": columnGroup.uniqueGroupId,
      className: join(HeaderGroupCls, TableHeaderGroupClassName),
      style: { width, height },
      "data-z-index": zIndex2
    },
    /* @__PURE__ */ React45.createElement(
      "div",
      {
        className: join(
          `${TableHeaderGroupClassName}__header-content`,
          cssEllipsisClassName
        )
      },
      header
    ),
    handle
  );
}

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeader.tsx
var { rootClassName: rootClassName10 } = internalProps;
var TableHeaderClassName = `${rootClassName10}Header`;
function InfiniteTableHeaderFn(props) {
  const {
    bodyBrain,
    headerBrain: brain,
    columns,
    style: style2,
    className,
    columnHeaderHeight,
    columnAndGroupTreeInfo,
    columnGroupsMaxDepth
  } = props;
  const {
    computed,
    state: { headerBrain, headerOptions, showColumnFilters }
  } = useInfiniteTable();
  const { computedColumnsMap } = computed;
  useEffect16(() => {
    const onScroll = (scrollPosition) => {
      if (domRef.current) {
        domRef.current.style.transform = `translate3d(-${scrollPosition.scrollLeft}px, 0px, 0px)`;
      }
    };
    const removeOnScroll = brain.onScroll(onScroll);
    return removeOnScroll;
  }, [brain]);
  const domRef = useRef18(null);
  const headerCls = HeaderClsRecipe({
    overflow: false
  });
  const domProps = {
    ref: domRef,
    className: join(
      TableHeaderClassName,
      `${TableHeaderClassName}--virtualized`,
      className,
      headerCls
    ),
    style: __spreadProps(__spreadValues({}, style2), { height: columnHeaderHeight })
  };
  const renderCell = useCallback16(
    (params) => {
      const {
        rowIndex,
        colIndex,
        domRef: domRef2,
        height,
        widthWithColspan,
        heightWithRowspan,
        hidden
      } = params;
      const column = columns[colIndex];
      if (!column || hidden) {
        return null;
      }
      const colGroupItem = columnAndGroupTreeInfo ? columnAndGroupTreeInfo.pathsToCells.get([rowIndex, colIndex]) : null;
      if (colGroupItem && colGroupItem.type === "group") {
        const columns2 = colGroupItem.columnItems.map((item) => item.ref);
        const computedColumnGroup = __spreadProps(__spreadValues({}, colGroupItem.ref), {
          id: colGroupItem.id,
          uniqueGroupId: colGroupItem.uniqueGroupId,
          depth: colGroupItem.depth,
          columns: columns2.map((c) => c.id),
          computedWidth: colGroupItem.computedWidth,
          groupOffset: colGroupItem.groupOffset
        });
        return /* @__PURE__ */ React46.createElement(
          InfiniteTableHeaderGroup,
          {
            bodyBrain,
            columnGroupsMaxDepth,
            domRef: domRef2,
            columns: columns2,
            width: widthWithColspan,
            height,
            columnGroup: computedColumnGroup
          }
        );
      }
      return /* @__PURE__ */ React46.createElement(
        InfiniteTableHeaderCell,
        {
          domRef: domRef2,
          column,
          headerOptions,
          width: widthWithColspan,
          height: heightWithRowspan,
          columnsMap: computedColumnsMap
        }
      );
    },
    // leave columnHeaderHeight here, as it's needed even
    // since it can change - eg, when the corresponding CSS variable changes
    // do it needs to trigger a re-render
    [
      headerOptions,
      columns,
      columnHeaderHeight,
      columnAndGroupTreeInfo,
      columnGroupsMaxDepth,
      showColumnFilters
    ]
  );
  return /* @__PURE__ */ React46.createElement("div", __spreadValues({}, domProps), /* @__PURE__ */ React46.createElement(
    RawTable,
    {
      name: "header",
      renderCell,
      brain: headerBrain,
      cellHoverClassNames: []
    }
  ));
}
var InfiniteTableHeader = React46.memo(
  InfiniteTableHeaderFn
);

// src/components/InfiniteTable/components/InfiniteTableHeader/InfiniteTableHeaderWrapper.tsx
function TableHeaderWrapper(props) {
  const { headerBrain, bodyBrain, scrollbars } = props;
  const tableContextValue = useInfiniteTable();
  const {
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedVisibleColumns,
    columnSize
  } = tableContextValue.computed;
  const {
    state: {
      columnHeaderHeight,
      columnGroupsDepthsMap,
      columnGroupsMaxDepth,
      computedColumnGroups,
      showColumnFilters
    }
  } = tableContextValue;
  const rows = !computedColumnGroups || !computedColumnGroups.size ? 1 : columnGroupsMaxDepth + 2;
  const height = rows * columnHeaderHeight + (showColumnFilters ? columnHeaderHeight : 0);
  const columnAndGroupTreeInfo = React47.useMemo(() => {
    if (!computedColumnGroups || !computedColumnGroups.size) {
      return void 0;
    }
    return buildColumnAndGroupTree(
      computedVisibleColumns,
      computedColumnGroups,
      columnGroupsDepthsMap,
      columnGroupsMaxDepth
    );
  }, [computedVisibleColumns, computedColumnGroups, columnGroupsDepthsMap]);
  const cellspan = React47.useCallback(
    ({ rowIndex, colIndex }) => {
      const column = computedVisibleColumns[colIndex];
      const rowspan2 = 1;
      const colspan2 = 1;
      if (!column || !columnAndGroupTreeInfo) {
        return { rowspan: rowspan2, colspan: colspan2 };
      }
      const treeItem = columnAndGroupTreeInfo.pathsToCells.get([
        rowIndex,
        colIndex
      ]);
      if (!treeItem) {
        return { rowspan: rowspan2, colspan: colspan2 };
      }
      if (treeItem.type === "column") {
        return {
          colspan: colspan2,
          rowspan: rows - treeItem.depth
        };
      }
      const index = treeItem.columnItems.findIndex(
        (child) => child.id === column.id
      );
      return {
        rowspan: rowspan2,
        colspan: index === 0 ? treeItem.columnItems.length : 1
      };
    },
    [
      computedColumnGroups,
      columnGroupsMaxDepth,
      computedVisibleColumns,
      columnAndGroupTreeInfo,
      rows,
      columnGroupsDepthsMap
    ]
  );
  const rowspan = React47.useCallback(
    ({ rowIndex, colIndex }) => cellspan({ rowIndex, colIndex }).rowspan,
    [cellspan]
  );
  const colspan = React47.useCallback(
    ({ rowIndex, colIndex }) => cellspan({ rowIndex, colIndex }).colspan,
    [cellspan]
  );
  const rowHeight = React47.useCallback(
    (index) => {
      return showColumnFilters ? index < rows - 1 ? columnHeaderHeight : 2 * columnHeaderHeight : columnHeaderHeight;
    },
    [rows, showColumnFilters, columnHeaderHeight]
  );
  useMatrixBrain(
    headerBrain,
    {
      colWidth: columnSize,
      rowHeight,
      rows,
      cols: computedVisibleColumns.length,
      height,
      rowspan,
      colspan
    },
    {
      fixedColsEnd: computedPinnedEndColumns.length,
      fixedColsStart: computedPinnedStartColumns.length
    }
  );
  const header = /* @__PURE__ */ React47.createElement(
    InfiniteTableHeader,
    {
      columns: computedVisibleColumns,
      headerBrain,
      bodyBrain,
      columnHeaderHeight: height,
      columnGroupsMaxDepth,
      columnAndGroupTreeInfo
    }
  );
  const verticalScrollbarPlaceholder = scrollbars.vertical && getScrollbarWidth() ? /* @__PURE__ */ React47.createElement(
    "div",
    {
      className: HeaderScrollbarPlaceholderCls,
      style: {
        zIndex: 1e3,
        width: getScrollbarWidth()
      }
    }
  ) : null;
  return /* @__PURE__ */ React47.createElement(
    "div",
    {
      className: HeaderWrapperCls,
      style: {
        height
      }
    },
    header,
    verticalScrollbarPlaceholder
  );
}

// src/components/InfiniteTable/components/InfiniteTableLicenseFooter/index.tsx
init_esm_shims();
import * as React48 from "react";
import { useEffect as useEffect17 } from "react";

// src/components/utils/decamelize.ts
init_esm_shims();
function decamelize(str, options) {
  const { separator } = options != null ? options : { separator: "-" };
  return str.replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2").replace(
    new RegExp("(" + separator + "[A-Z])([A-Z])", "g"),
    "$1" + separator + "$2"
  ).toLowerCase();
}

// src/components/InfiniteTable/components/InfiniteTableLicenseFooter/index.tsx
var defaultStyle = {
  padding: ThemeVars.spacing[2],
  textAlign: "end",
  opacity: "1",
  visibility: "visible",
  display: "block",
  fontSize: "0.85rem",
  background: "white",
  color: "black"
};
var anchorStyle = {
  opacity: 1,
  visibility: "visible",
  display: "inline-block",
  pointerEvents: "all",
  color: "black",
  textDecoration: "underline"
};
var enforceStyle = (node, style2) => {
  if (!node) {
    return;
  }
  for (const [propertyName, propertyValue] of Object.entries(style2)) {
    node.style.setProperty(
      decamelize(propertyName),
      propertyValue,
      "important"
    );
  }
};
var InfiniteTableLicenseFooter = React48.forwardRef(
  function InfiniteTableLicenseFooter2(props, ref) {
    const { rootClassName: rootClassName12 } = useInternalProps();
    const domRef = React48.useRef(null);
    const domCallback = React48.useCallback((node) => {
      domRef.current = node;
      if (!ref) {
        return;
      }
      if (typeof ref === "function") {
        ref(node);
      } else {
        ref.current = node;
      }
    }, []);
    useEffect17(() => {
      const forceStyle = () => {
        raf(() => {
          var _a;
          enforceStyle(domRef.current, defaultStyle);
          enforceStyle(
            (_a = domRef.current) == null ? void 0 : _a.firstElementChild,
            anchorStyle
          );
        });
      };
      forceStyle();
      const intervalId = setInterval(forceStyle, 1e3);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return /* @__PURE__ */ React48.createElement(
      "div",
      __spreadProps(__spreadValues({
        ref: domCallback
      }, props), {
        className: join(
          `${rootClassName12}-Footer`,
          FooterCls,
          props.className
        ),
        style: defaultStyle
      }),
      "Powered by",
      " ",
      /* @__PURE__ */ React48.createElement(
        "a",
        {
          href: "https://infinite-table.com",
          rel: "noopener noreferrer",
          role: "link",
          target: "_blank"
        },
        "Infinite Table"
      )
    );
  }
);

// src/components/InfiniteTable/components/LoadMask.tsx
init_esm_shims();
import * as React49 from "react";

// src/components/InfiniteTable/components/LoadMask.css.ts
init_esm_shims();
var LoadMaskCls = { visible: "LoadMask_LoadMaskCls_visible__qy58ya1 LoadMask_LoadMaskBaseCls__qy58ya0 utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_left_0__16lm1iw1d utilities_right_0__16lm1iw1i utilities_bottom_0__16lm1iw1g", hidden: "LoadMask_LoadMaskCls_hidden__qy58ya2 LoadMask_LoadMaskBaseCls__qy58ya0 utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_left_0__16lm1iw1d utilities_right_0__16lm1iw1i utilities_bottom_0__16lm1iw1g" };
var LoadMaskOverlayCls = "LoadMask_LoadMaskOverlayCls__qy58ya3 utilities_position_absolute__16lm1iw2 utilities_top_0__16lm1iw1b utilities_left_0__16lm1iw1d utilities_right_0__16lm1iw1i utilities_bottom_0__16lm1iw1g";
var LoadMaskTextCls = "LoadMask_LoadMaskTextCls__qy58ya4";

// src/components/InfiniteTable/components/LoadMask.tsx
var { rootClassName: rootClassName11 } = internalProps;
var baseCls3 = `${rootClassName11}-LoadMask`;
function LoadMaskFn(props) {
  const { visible, children = "Loading" } = props;
  return /* @__PURE__ */ React49.createElement(
    "div",
    {
      className: `${LoadMaskCls[visible ? "visible" : "hidden"]} ${baseCls3}`
    },
    /* @__PURE__ */ React49.createElement("div", { className: `${LoadMaskOverlayCls} ${baseCls3}-Overlay` }),
    /* @__PURE__ */ React49.createElement("div", { className: `${LoadMaskTextCls} ${baseCls3}-Text` }, children)
  );
}
var LoadMask = React49.memo(LoadMaskFn);

// src/components/InfiniteTable/api/getImperativeApi.ts
init_esm_shims();

// src/utils/groupAndPivot/index.ts
init_esm_shims();

// src/utils/deepClone.ts
init_esm_shims();
function cloneArray(arr) {
  return arr.map(deepClone);
}
function deepClone(source) {
  if (getGlobal().structuredClone) {
    return getGlobal().structuredClone(source);
  }
  if (source === null || typeof source !== "object") {
    return source;
  }
  if (Array.isArray(source)) {
    return cloneArray(source);
  }
  if (source instanceof Date) {
    return new Date(source);
  }
  if (source instanceof Set) {
    return new Set(cloneArray(Array.from(source)));
  }
  if (source instanceof Map) {
    return new Map(cloneArray(Array.from(source)));
  }
  let target = {};
  for (let key in source)
    if (source.hasOwnProperty(key)) {
      target[key] = deepClone(source[key]);
    }
  return target;
}

// src/utils/groupAndPivot/defaultToKey.ts
init_esm_shims();
function DEFAULT_TO_KEY(value) {
  return value;
}

// src/utils/groupAndPivot/sharedValueGetterParamsFlyweightObject.ts
init_esm_shims();
var sharedValueGetterParamsFlyweightObject = Object.seal({
  data: null,
  field: null
});

// src/utils/groupAndPivot/index.ts
var LAZY_ROOT_KEY_FOR_GROUPS = "____root____";
var NOT_LOADED_YET_KEY_PREFIX = "____not_loaded_yet____";
function initReducers(reducers) {
  if (!reducers || !Object.keys(reducers).length) {
    return {};
  }
  const result = {};
  for (const key in reducers)
    if (reducers.hasOwnProperty(key)) {
      const initialValue = reducers[key].initialValue;
      result[key] = typeof initialValue === "function" ? initialValue() : initialValue;
    }
  return result;
}
function computeReducersFor(data, index, reducers, reducerResults, groupKeys) {
  var _a;
  if (!reducers || !Object.keys(reducers).length) {
    return;
  }
  for (const key in reducers)
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key];
      if (typeof reducer.reducer !== "function") {
        continue;
      }
      const currentValue = reducerResults[key];
      const value = reducer.getter ? (_a = reducer.getter(data)) != null ? _a : null : reducer.field ? data[reducer.field] : null;
      reducerResults[key] = reducer.reducer(
        currentValue,
        value,
        data,
        index,
        groupKeys
      );
    }
}
function lazyGroup(groupParams, rootData) {
  const {
    reducers = {},
    pivot,
    groupBy,
    indexer,
    toPrimaryKey,
    cache,
    mappings
  } = groupParams;
  const deepMap = new DeepMap();
  function traverseValues(pivotDeepMap, container, pivot2, pivotIndex = 0, currentPivotKeys2 = []) {
    const last = !pivot2.length || pivotIndex === pivot2.length - 1;
    const values = container[(mappings == null ? void 0 : mappings.values) || "values"] || {};
    for (const k in values)
      if (values.hasOwnProperty(k)) {
        const pivotKey = k;
        currentPivotKeys2.push(pivotKey);
        topLevelPivotColumns.set(currentPivotKeys2, true);
        pivotDeepMap.set(currentPivotKeys2, {
          reducerResults: values[k][(mappings == null ? void 0 : mappings.totals) || "totals"] || {},
          items: []
        });
        if (!last) {
          traverseValues(
            pivotDeepMap,
            values[k],
            pivot2,
            pivotIndex + 1,
            currentPivotKeys2
          );
        }
        currentPivotKeys2.pop();
      }
  }
  const topLevelPivotColumns = pivot ? new DeepMap() : void 0;
  const currentPivotKeys = [];
  const initialReducerValue = initReducers(reducers);
  const globalReducerResults = deepClone(initialReducerValue);
  rootData.visitDepthFirst(
    (lazyGroupRowInfo, keys, _index, next) => {
      const [_rootKey, ...currentGroupKeys] = keys;
      const dataArray = lazyGroupRowInfo.children;
      const current = deepMap.get(currentGroupKeys);
      if (current) {
        current.cache = lazyGroupRowInfo.cache;
        current.childrenLoading = lazyGroupRowInfo.childrenLoading;
        current.childrenAvailable = lazyGroupRowInfo.childrenAvailable;
        current.error = lazyGroupRowInfo.error;
      }
      if (currentGroupKeys.length == groupBy.length && groupBy.length) {
        if (current) {
          current.items = dataArray;
          for (let i = 0, len = currentGroupKeys.length; i < len; i++) {
            const currentKeys = currentGroupKeys.slice(0, i);
            const deepMapGroupValue = deepMap.get(
              currentKeys
            );
            if (deepMapGroupValue) {
              deepMapGroupValue.items = deepMapGroupValue.items || [];
              deepMapGroupValue.items = deepMapGroupValue.items.concat(
                dataArray
              );
            }
          }
          indexer.indexArray(dataArray, {
            toPrimaryKey,
            cache
          });
        }
        return next == null ? void 0 : next();
      }
      for (let i = 0, len = dataArray.length; i < len; i++) {
        if (!dataArray[i]) {
          const deepMapGroupValue2 = {
            items: [],
            reducerResults: {},
            cache: false,
            childrenLoading: false,
            childrenAvailable: false
          };
          deepMap.set(
            [
              ...currentGroupKeys,
              `${NOT_LOADED_YET_KEY_PREFIX}${i}`
            ],
            deepMapGroupValue2
          );
          continue;
        }
        const dataObject = dataArray[i].data;
        const dataKeys = dataArray[i].keys || [];
        if (dataKeys.length) {
          const key = dataKeys[dataKeys.length - 1];
          currentGroupKeys.push(key);
        }
        const deepMapGroupValue = {
          items: [],
          cache: false,
          childrenLoading: false,
          childrenAvailable: false,
          commonData: dataObject,
          totalChildrenCount: dataArray[i].totalChildrenCount,
          reducerResults: dataArray[i].aggregations || {}
        };
        deepMap.set(currentGroupKeys, deepMapGroupValue);
        if (pivot) {
          const pivotDeepMap = deepMapGroupValue.pivotDeepMap = new DeepMap();
          const pivotContainer = dataArray[i].pivot;
          traverseValues(
            pivotDeepMap,
            pivotContainer,
            pivot,
            0,
            currentPivotKeys
          );
        }
        if (dataKeys.length) {
          currentGroupKeys.pop();
        }
      }
      next == null ? void 0 : next();
    }
  );
  const result = {
    deepMap,
    groupParams,
    //@ts-ignore
    initialData: rootData,
    reducerResults: globalReducerResults
  };
  if (pivot) {
    result.topLevelPivotColumns = topLevelPivotColumns;
    result.pivot = pivot;
  }
  return result;
}
function processGroup(deepMap, currentGroupKeys, currentPivotKeys, item, itemIndex, pivot, reducers, topLevelPivotColumns, initialReducerValue, defaultToKey = DEFAULT_TO_KEY) {
  const {
    items: currentGroupItems,
    reducerResults,
    pivotDeepMap
  } = deepMap.get(currentGroupKeys);
  currentGroupItems.push(item);
  if (reducers) {
    computeReducersFor(
      item,
      itemIndex,
      reducers,
      reducerResults,
      currentGroupKeys
    );
  }
  if (pivot) {
    for (let pivotIndex = 0, pivotLength = pivot.length; pivotIndex < pivotLength; pivotIndex++) {
      const {
        field: pivotField,
        valueGetter: pivotValueGetter,
        toKey: pivotToKey
      } = pivot[pivotIndex];
      let pivotValue = pivotField ? item[pivotField] : null;
      if (pivotValueGetter) {
        sharedValueGetterParamsFlyweightObject.data = item;
        sharedValueGetterParamsFlyweightObject.field = pivotField;
        pivotValue = pivotValueGetter(sharedValueGetterParamsFlyweightObject);
      }
      const pivotKey = (pivotToKey || defaultToKey)(
        pivotValue,
        item
      );
      currentPivotKeys.push(pivotKey);
      if (!pivotDeepMap.has(currentPivotKeys)) {
        topLevelPivotColumns.set(currentPivotKeys, true);
        pivotDeepMap == null ? void 0 : pivotDeepMap.set(currentPivotKeys, {
          reducerResults: deepClone(initialReducerValue),
          items: []
        });
      }
      const { reducerResults: pivotReducerResults, items: pivotGroupItems } = pivotDeepMap.get(currentPivotKeys);
      pivotGroupItems.push(item);
      if (reducers) {
        computeReducersFor(
          item,
          itemIndex,
          reducers,
          pivotReducerResults,
          currentGroupKeys
        );
      }
    }
    currentPivotKeys.length = 0;
  }
}
function group(groupParams, data) {
  const {
    groupBy,
    defaultToKey = DEFAULT_TO_KEY,
    pivot,
    reducers
  } = groupParams;
  const groupByLength = groupBy.length;
  const topLevelPivotColumns = pivot ? new DeepMap() : void 0;
  const deepMap = new DeepMap();
  const currentGroupKeys = [];
  const currentPivotKeys = [];
  const initialReducerValue = initReducers(reducers);
  const globalReducerResults = deepClone(initialReducerValue);
  if (!groupByLength) {
    const deepMapGroupValue = {
      items: [],
      cache: false,
      childrenLoading: false,
      childrenAvailable: false,
      reducerResults: deepClone(initialReducerValue)
    };
    if (pivot) {
      deepMapGroupValue.pivotDeepMap = new DeepMap();
    }
    deepMap.set(currentGroupKeys, deepMapGroupValue);
  }
  for (let i = 0, len = data.length; i < len; i++) {
    const item = data[i];
    const commonData = {};
    for (let groupByIndex = 0; groupByIndex < groupByLength; groupByIndex++) {
      const {
        field: groupByProperty,
        groupField,
        valueGetter,
        toKey: groupToKey
      } = groupBy[groupByIndex];
      let value = groupByProperty ? item[groupByProperty] : null;
      if (valueGetter) {
        sharedValueGetterParamsFlyweightObject.data = item;
        sharedValueGetterParamsFlyweightObject.field = groupByProperty;
        value = valueGetter(sharedValueGetterParamsFlyweightObject);
      }
      const key = (groupToKey || defaultToKey)(
        value,
        item
      );
      commonData[groupByProperty || groupField] = key;
      currentGroupKeys.push(key);
      if (!deepMap.has(currentGroupKeys)) {
        const deepMapGroupValue = {
          items: [],
          cache: false,
          commonData: __spreadValues({}, commonData),
          childrenLoading: false,
          childrenAvailable: false,
          reducerResults: deepClone(initialReducerValue)
        };
        if (pivot) {
          deepMapGroupValue.pivotDeepMap = new DeepMap();
        }
        deepMap.set(currentGroupKeys, deepMapGroupValue);
      }
      processGroup(
        deepMap,
        currentGroupKeys,
        currentPivotKeys,
        item,
        i,
        pivot,
        reducers,
        topLevelPivotColumns,
        initialReducerValue,
        defaultToKey
      );
    }
    if (!groupByLength) {
      processGroup(
        deepMap,
        currentGroupKeys,
        currentPivotKeys,
        item,
        i,
        pivot,
        reducers,
        topLevelPivotColumns,
        initialReducerValue,
        defaultToKey
      );
    }
    if (reducers) {
      computeReducersFor(
        item,
        i,
        reducers,
        globalReducerResults,
        currentGroupKeys
      );
    }
    currentGroupKeys.length = 0;
  }
  if (reducers) {
    deepMap.visitDepthFirst(
      (deepMapValue, _keys, _indexInGroup, next) => {
        completeReducers(
          reducers,
          deepMapValue.reducerResults,
          deepMapValue.items
        );
        if (pivot) {
          deepMapValue.pivotDeepMap.visitDepthFirst(
            ({ items, reducerResults: pivotReducerResults }, _keys2, _indexInGroup2, next2) => {
              completeReducers(reducers, pivotReducerResults, items);
              next2 == null ? void 0 : next2();
            }
          );
        }
        next == null ? void 0 : next();
      }
    );
  }
  if (reducers) {
    completeReducers(reducers, globalReducerResults, data);
  }
  const result = {
    deepMap,
    groupParams,
    initialData: data,
    reducerResults: globalReducerResults
  };
  if (pivot) {
    result.topLevelPivotColumns = topLevelPivotColumns;
    result.pivot = pivot;
  }
  return result;
}
function flatten(groupResult) {
  const { groupParams, deepMap } = groupResult;
  const groupByLength = groupParams.groupBy.length;
  const result = [];
  deepMap.topDownKeys().reduce((acc, key) => {
    if (key.length === groupByLength) {
      const items = deepMap.get(key).items;
      acc.push(...items);
    }
    return acc;
  }, result);
  return result;
}
function getEnhancedGroupData(options, deepMapValue) {
  const { groupBy, groupKeys, parents, reducers, lazyLoad } = options;
  const groupNesting = groupKeys.length;
  const {
    items: groupItems,
    reducerResults,
    pivotDeepMap,
    commonData
  } = deepMapValue;
  let data = commonData != null ? commonData : null;
  let reducerData;
  if (Object.keys(reducerResults).length > 0) {
    data = __spreadValues({}, commonData);
    reducerData = {};
    for (const key in reducers)
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        const field = reducer.field;
        if (field) {
          reducerData[field] = reducerResults[key];
        }
        if (field && data[field] == null) {
          data[field] = reducerResults[key];
        }
      }
  }
  let selfLoaded = true;
  let defaultValue = groupKeys[groupKeys.length - 1];
  let theValue = defaultValue;
  if (data != null) {
    const currentGroupBy = groupBy[groupKeys.length - 1];
    if (currentGroupBy && currentGroupBy.field) {
      theValue = data[currentGroupBy.field];
    }
    if (currentGroupBy && currentGroupBy.toKey) {
      theValue = currentGroupBy.toKey(theValue, data);
    }
    theValue = theValue != null ? theValue : defaultValue;
  }
  if (typeof theValue === "string" && theValue.startsWith(NOT_LOADED_YET_KEY_PREFIX)) {
    selfLoaded = false;
    theValue = null;
  }
  const enhancedGroupData = {
    data,
    reducerData,
    groupCount: groupItems.length,
    groupData: groupItems,
    groupKeys,
    rowSelected: false,
    selectedChildredCount: 0,
    deselectedChildredCount: 0,
    id: `${groupKeys}`,
    //TODO improve this
    collapsed: false,
    dataSourceHasGrouping: true,
    selfLoaded,
    error: options.error,
    parents,
    deepRowInfoArray: [],
    collapsedChildrenCount: 0,
    collapsedGroupsCount: 0,
    totalChildrenCount: options.totalChildrenCount,
    // childrenAvailable: collapsed ? (!lazyLoad ? false : cacheExists) : true,
    childrenAvailable: lazyLoad ? options.childrenAvailable : true,
    childrenLoading: options.childrenLoading,
    indexInParentGroups: options.indexInParentGroups,
    indexInGroup: options.indexInGroup,
    indexInAll: options.indexInAll,
    directChildrenCount: options.directChildrenCount,
    directChildrenLoadedCount: lazyLoad ? options.directChildrenLoadedCount : options.directChildrenCount,
    value: theValue,
    // rootGroupBy: groupBy.map((g) => g.field),
    rootGroupBy: groupBy,
    groupBy: groupNesting === groupBy.length ? groupBy : groupBy.slice(0, groupNesting),
    // ).map((g) => g.field),
    isGroupRow: true,
    pivotValuesMap: pivotDeepMap,
    groupNesting,
    reducerResults
  };
  return enhancedGroupData;
}
function completeReducers(reducers, reducerResults, items) {
  if (reducers) {
    for (const key in reducers)
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        if (reducer.done) {
          reducerResults[key] = reducer.done(reducerResults[key], items);
        }
      }
  }
  return reducerResults;
}
function enhancedFlatten(param) {
  const {
    lazyLoad,
    groupResult,
    withRowInfo,
    toPrimaryKey,
    groupRowsState,
    isRowSelected,
    rowSelectionState,
    generateGroupRows,
    reducers = {}
  } = param;
  const { groupParams, deepMap, pivot } = groupResult;
  const { groupBy } = groupParams;
  const result = [];
  const groupRowsIndexes = [];
  const parents = [];
  const indexInParentGroups = [];
  deepMap.visitDepthFirst(
    (deepMapValue, groupKeys, indexInGroup, next) => {
      var _a, _b;
      const items = deepMapValue.items;
      const groupNesting = groupKeys.length;
      let collapsed = (_a = groupRowsState == null ? void 0 : groupRowsState.isGroupRowCollapsed(groupKeys)) != null ? _a : false;
      indexInParentGroups.push(indexInGroup);
      const enhancedGroupData = getEnhancedGroupData(
        {
          lazyLoad,
          // groupBy: groupByStrings,
          groupBy,
          parents: Array.from(parents),
          reducers,
          indexInGroup,
          indexInParentGroups: Array.from(indexInParentGroups),
          indexInAll: result.length,
          groupKeys,
          error: deepMapValue.error,
          totalChildrenCount: deepMapValue.totalChildrenCount,
          childrenLoading: (deepMapValue.childrenLoading || !collapsed && !deepMapValue.childrenAvailable) && lazyLoad,
          childrenAvailable: deepMapValue.childrenAvailable,
          directChildrenCount: groupKeys.length === groupBy.length ? deepMapValue.items.length : deepMap.getDirectChildrenSizeFor(groupKeys),
          directChildrenLoadedCount: 0
        },
        deepMapValue
      );
      if (isRowSelected) {
        enhancedGroupData.rowSelected = isRowSelected(enhancedGroupData);
        if (rowSelectionState) {
          const selectionCount = rowSelectionState.getSelectionCountFor(
            enhancedGroupData.groupKeys
          );
          enhancedGroupData.selectedChildredCount = selectionCount.selectedCount;
          enhancedGroupData.deselectedChildredCount = selectionCount.deselectedCount;
        }
      }
      const parent = parents[parents.length - 1];
      const parentCollapsed = (_b = parent == null ? void 0 : parent.collapsed) != null ? _b : false;
      if (parentCollapsed) {
        collapsed = true;
      }
      enhancedGroupData.collapsed = collapsed;
      let include = generateGroupRows || collapsed;
      if (parentCollapsed) {
        include = false;
      }
      if (include) {
        result.push(enhancedGroupData);
        groupRowsIndexes.push(result.length - 1);
      }
      enhancedGroupData.collapsedChildrenCount = 0;
      parents.forEach((parent2) => {
        parent2.deepRowInfoArray.push(enhancedGroupData);
        parent2.collapsedGroupsCount += collapsed ? 1 : 0;
      });
      if (parent && enhancedGroupData.selfLoaded && lazyLoad) {
        parent.directChildrenLoadedCount += 1;
      }
      if (withRowInfo) {
        withRowInfo(enhancedGroupData);
      }
      parents.push(enhancedGroupData);
      const continueWithChildren = true;
      if (continueWithChildren) {
        if (!next) {
          if (!pivot) {
            const startIndex = result.length;
            if (!collapsed) {
              result.length += items.length;
            }
            for (let index = 0, len = items.length; index < len; index++) {
              const item = items[index];
              const indexInAll = startIndex + index;
              const itemId = item ? toPrimaryKey(item, indexInAll) : `${groupKeys}-${index}`;
              const rowInfo = {
                id: itemId,
                data: item,
                dataSourceHasGrouping: true,
                isGroupRow: false,
                selfLoaded: !!item,
                rowSelected: false,
                rootGroupBy: groupBy,
                collapsed,
                groupKeys,
                parents: Array.from(parents),
                indexInParentGroups: [...indexInParentGroups, index],
                indexInGroup: index,
                indexInAll,
                groupBy,
                groupNesting: groupNesting + 1,
                groupCount: enhancedGroupData.groupCount
              };
              if (isRowSelected) {
                rowInfo.rowSelected = isRowSelected(rowInfo);
              }
              if (withRowInfo) {
                withRowInfo(rowInfo);
              }
              parents.forEach((parent2, i) => {
                const last = i === parents.length - 1;
                if (last && item) {
                  parent2.directChildrenLoadedCount += 1;
                }
                if (collapsed) {
                  parent2.collapsedChildrenCount += 1;
                }
                parent2.deepRowInfoArray.push(rowInfo);
              });
              if (!collapsed) {
                result[startIndex + index] = rowInfo;
              }
            }
          }
        } else {
          next();
        }
      }
      parents.pop();
      indexInParentGroups.pop();
    }
  );
  return {
    data: result,
    groupRowsIndexes
  };
}

// src/components/DataSource/index.tsx
init_esm_shims();
import * as React50 from "react";
import { useEffect as useEffect20 } from "react";

// src/utils/multisort/index.ts
init_esm_shims();

// src/utils/multisort/sortTypes.ts
init_esm_shims();
var numberComparator = function(first, second) {
  return first - second;
};
var stringComparator = function(first, second) {
  first = `${first}`;
  second = `${second}`;
  return first.localeCompare(second);
};
var dateComparator = function(first, second) {
  return first - second;
};
var defaultSortTypes = {
  number: numberComparator,
  string: stringComparator,
  date: dateComparator
};
var sortTypes_default = defaultSortTypes;

// src/utils/multisort/index.ts
var multisort = (sortInfo, array, get) => {
  const plainSortInfo = sortInfo.map((sortInfo2) => {
    if (Array.isArray(sortInfo2.field)) {
      return sortInfo2.field.map((field, index) => {
        var _a;
        let type = Array.isArray(sortInfo2.type) ? (_a = sortInfo2.type[index]) != null ? _a : sortInfo2.type[0] : sortInfo2.type;
        if (typeof field === "function") {
          const result2 = __spreadProps(__spreadValues({}, sortInfo2), {
            valueGetter: field,
            field: void 0,
            type
          });
          return result2;
        }
        const result = __spreadProps(__spreadValues({}, sortInfo2), { type, field });
        return result;
      });
    }
    return sortInfo2;
  }).flat();
  array.sort(getMultisortFunction(plainSortInfo, get));
  return array;
};
multisort.knownTypes = sortTypes_default;
var getSingleSortFunction = (info) => {
  if (!info) {
    return;
  }
  const field = info.field;
  const valueGetter = info.valueGetter;
  const dir = info.dir < 0 ? -1 : info.dir > 0 ? 1 : 0;
  if (!dir) {
    return;
  }
  let fn = info.fn;
  if (!fn && info.type) {
    const type = Array.isArray(info.type) ? info.type[0] : info.type;
    fn = multisort.knownTypes[type];
    if (!fn) {
      console.warn(
        `Unknown sort type "${info.type}" - please pass one of ${Object.keys(
          multisort.knownTypes
        ).join(", ")}`
      );
    }
  }
  if (!fn) {
    fn = sortTypes_default.string;
  }
  return (first, second) => {
    const a = valueGetter ? valueGetter(first) : field ? first[field] : first;
    const b = valueGetter ? valueGetter(second) : field ? second[field] : second;
    const result = fn(a, b);
    return result === 0 ? result : dir * result;
  };
};
var getSortFunctions = (sortInfo) => {
  return sortInfo.map(getSingleSortFunction).filter((fn) => fn instanceof Function);
};
var getMultisortFunction = (sortInfo, get) => {
  const fns = getSortFunctions(sortInfo);
  return (first, second) => {
    if (get) {
      first = get(first);
      second = get(second);
    }
    let result = 0;
    let i = 0;
    let fn;
    const len = fns.length;
    for (; i < len; i++) {
      fn = fns[i];
      if (!fn) {
        continue;
      }
      result = fn(first, second);
      if (result !== 0) {
        return result;
      }
    }
    return result;
  };
};

// src/components/DataSource/getDataSourceApi.ts
init_esm_shims();

// src/components/DataSource/DataSourceCache.ts
init_esm_shims();
var DataSourceCache = class {
  constructor() {
    this.affectedFields = /* @__PURE__ */ new Set();
    this.allFieldsAffected = false;
    this.primaryKeyToData = /* @__PURE__ */ new Map();
    this.getAffectedFields = () => {
      if (this.allFieldsAffected) {
        return true;
      }
      return this.affectedFields;
    };
    this.delete = (primaryKey, originalData, metadata) => {
      this.allFieldsAffected = true;
      const pk = `${primaryKey}`;
      const value = this.primaryKeyToData.get(pk) || [];
      value.push({
        type: "delete",
        primaryKey,
        originalData,
        metadata
      });
      this.primaryKeyToData.set(pk, value);
    };
    this.insert = (primaryKey, data, position2, metadata) => {
      const pk = `${primaryKey}`;
      const value = this.primaryKeyToData.get(pk) || [];
      this.allFieldsAffected = true;
      value.push({
        type: "insert",
        primaryKey,
        data,
        position: position2,
        originalData: null,
        metadata
      });
      this.primaryKeyToData.set(pk, value);
    };
    this.update = (primaryKey, data, originalData, metadata) => {
      if (!this.allFieldsAffected) {
        const keys = Object.keys(data);
        keys.forEach((key) => this.affectedFields.add(key));
      }
      const pk = `${primaryKey}`;
      const value = this.primaryKeyToData.get(pk) || [];
      value.push({
        type: "update",
        primaryKey,
        data,
        originalData,
        metadata
      });
      this.primaryKeyToData.set(`${primaryKey}`, value);
    };
    this.clear = () => {
      this.allFieldsAffected = false;
      this.affectedFields.clear();
      this.primaryKeyToData.clear();
    };
    this.isEmpty = () => {
      return this.primaryKeyToData.size === 0;
    };
    this.removeInfo = (primaryKey) => {
      this.primaryKeyToData.delete(`${primaryKey}`);
    };
    this.getMutationsForPrimaryKey = (primaryKey) => {
      const data = this.primaryKeyToData.get(`${primaryKey}`);
      return data;
    };
    this.getMutations = () => {
      return new Map(this.primaryKeyToData);
    };
  }
  static clone(cache, { light = false } = {}) {
    const clone = new DataSourceCache();
    clone.allFieldsAffected = cache.allFieldsAffected;
    clone.affectedFields = new Set(cache.affectedFields);
    clone.primaryKeyToData = light ? cache.primaryKeyToData : new Map(cache.primaryKeyToData);
    return clone;
  }
};

// src/components/DataSource/getDataSourceApi.ts
function getDataSourceApi(param) {
  return new DataSourceApiImpl(param);
}
var DataSourceApiImpl = class {
  constructor(param) {
    this.pendingOperations = [];
    this.pendingPromise = null;
    this.resolvePendingPromise = null;
    this.getOriginalDataArray = () => {
      return this.getState().originalDataArray;
    };
    this.getState = param.getState;
    this.actions = param.actions;
  }
  toPrimaryKey(data) {
    return this.getState().toPrimaryKey(data);
  }
  batchOperation(operation) {
    if (!this.pendingPromise) {
      this.pendingPromise = new Promise((resolve) => {
        this.resolvePendingPromise = resolve;
      });
      raf(() => {
        this.commit();
      });
    }
    this.pendingOperations.push(operation);
    return this.pendingPromise;
  }
  batchOperations(operations) {
    this.pendingOperations.push(...operations);
  }
  commitOperations(operations) {
    if (!operations.length) {
      return;
    }
    const currentCache = this.getState().cache;
    let cache = currentCache ? DataSourceCache.clone(currentCache, { light: true }) : new DataSourceCache();
    operations.forEach((operation) => {
      switch (operation.type) {
        case "update":
          operation.array.forEach((data, index) => {
            const key = operation.primaryKeys[index];
            const rowInfo = this.getRowInfoByPrimaryKey(key);
            if (rowInfo && !rowInfo.isGroupRow) {
              cache.update(
                operation.primaryKeys[index],
                data,
                rowInfo.data,
                operation.metadata
              );
            }
          });
          break;
        case "delete":
          operation.primaryKeys.forEach((key) => {
            const rowInfo = this.getRowInfoByPrimaryKey(key);
            if (rowInfo && !rowInfo.isGroupRow) {
              cache.delete(key, rowInfo.data, operation.metadata);
            }
          });
          break;
        case "insert":
          let pk = operation.primaryKey;
          let position2 = operation.position;
          operation.array.forEach((data) => {
            cache.insert(pk, data, position2, operation.metadata);
            pk = this.toPrimaryKey(data);
            position2 = "after";
          });
          break;
      }
    });
    this.actions.cache = cache;
  }
  commit() {
    this.commitOperations(this.pendingOperations);
    this.pendingOperations.length = 0;
    if (this.pendingPromise && this.resolvePendingPromise) {
      const resolve = this.resolvePendingPromise;
      requestAnimationFrame(() => {
        resolve(true);
      });
      this.pendingPromise = null;
      this.resolvePendingPromise = null;
    }
  }
  getRowInfoArray() {
    return this.getState().dataArray;
  }
  getRowInfoByIndex(index) {
    var _a;
    return (_a = this.getRowInfoArray()[index]) != null ? _a : null;
  }
  getRowInfoByPrimaryKey(id) {
    const index = this.getIndexByPrimaryKey(id);
    return this.getRowInfoByIndex(index);
  }
  getIndexByPrimaryKey(id) {
    var _a;
    const map2 = this.getState().idToIndexMap;
    return (_a = map2.get(id)) != null ? _a : -1;
  }
  getPrimaryKeyByIndex(index) {
    const rowInfo = this.getRowInfoByIndex(index);
    return rowInfo ? rowInfo.id : void 0;
  }
  getDataByPrimaryKey(id) {
    var _a;
    const { indexer } = this.getState();
    return (_a = indexer.getDataForPrimaryKey(id)) != null ? _a : null;
  }
  updateData(data, options) {
    return this.updateDataArray([data], options);
  }
  updateDataArray(data, options) {
    const result = this.batchOperation({
      type: "update",
      array: data,
      primaryKeys: data.map((d) => {
        return this.toPrimaryKey(d);
      }),
      metadata: options == null ? void 0 : options.metadata
    });
    if (options == null ? void 0 : options.flush) {
      this.commit();
    }
    return result;
  }
  removeDataByPrimaryKey(id, options) {
    const result = this.batchOperation({
      type: "delete",
      primaryKeys: [id],
      metadata: options == null ? void 0 : options.metadata
    });
    if (options == null ? void 0 : options.flush) {
      this.commit();
    }
    return result;
  }
  removeData(data, options) {
    const result = this.batchOperation({
      type: "delete",
      primaryKeys: [this.toPrimaryKey(data)],
      metadata: options == null ? void 0 : options.metadata
    });
    if (options == null ? void 0 : options.flush) {
      this.commit();
    }
    return result;
  }
  removeDataArrayByPrimaryKeys(ids, options) {
    const result = this.batchOperation({
      type: "delete",
      primaryKeys: ids,
      metadata: options == null ? void 0 : options.metadata
    });
    if (options == null ? void 0 : options.flush) {
      this.commit();
    }
    return result;
  }
  removeDataArray(data, options) {
    const result = this.batchOperation({
      type: "delete",
      primaryKeys: data.map(this.toPrimaryKey),
      metadata: options == null ? void 0 : options.metadata
    });
    if (options == null ? void 0 : options.flush) {
      this.commit();
    }
    return result;
  }
  addData(data, options) {
    return this.addDataArray([data], options);
  }
  addDataArray(data, options) {
    return this.insertDataArray(data, __spreadProps(__spreadValues({}, options), {
      position: "end"
    }));
  }
  insertData(data, options) {
    return this.insertDataArray([data], options);
  }
  insertDataArray(data, options) {
    let position2 = "before";
    let primaryKey = void 0;
    if (options.position === "before" || options.position === "after") {
      position2 = options.position;
      primaryKey = options.primaryKey;
    } else {
      const arr = this.getOriginalDataArray();
      if (options.position === "start") {
        position2 = "before";
        primaryKey = this.toPrimaryKey(arr[0]);
      } else {
        position2 = "after";
        primaryKey = this.toPrimaryKey(arr[arr.length - 1]);
      }
    }
    const result = this.batchOperation({
      type: "insert",
      array: data,
      position: position2,
      metadata: options == null ? void 0 : options.metadata,
      primaryKey
    });
    if (options == null ? void 0 : options.flush) {
      this.commit();
    }
    return result;
  }
  setSortInfo(sortInfo) {
    const multiSort = this.getState().multiSort;
    if (Array.isArray(sortInfo)) {
      this.actions.sortInfo = sortInfo.length ? multiSort ? sortInfo : sortInfo[0] : null;
      return;
    }
    this.actions.sortInfo = sortInfo;
    return;
  }
};
function getCacheAffectedParts(state) {
  const cache = state.cache;
  if (!cache) {
    return {
      sortInfo: false,
      groupBy: false,
      filterValue: false,
      aggregationReducers: false
    };
  }
  let sortInfoAffected = false;
  let groupByAffected = false;
  let filterAffected = false;
  let aggregationsAffected = false;
  const keys = cache.getAffectedFields();
  const { sortInfo, groupBy, filterValue, aggregationReducers } = state;
  if (sortInfo && sortInfo.length) {
    if (keys === true) {
      sortInfoAffected = true;
    } else {
      for (const sort of sortInfo) {
        let field = sort.field;
        if (field) {
          field = Array.isArray(field) ? field : [field];
          sortInfoAffected = field.reduce((result, f) => {
            return result || typeof f !== "function" ? keys.has(f) : false;
          }, false);
          if (sortInfoAffected) {
            break;
          }
        }
      }
    }
  }
  if (groupBy && groupBy.length) {
    if (keys === true) {
      groupByAffected = true;
    } else {
      for (const group2 of groupBy) {
        if (group2.field && keys.has(group2.field)) {
          groupByAffected = true;
          break;
        }
      }
    }
  }
  if (filterValue && filterValue.length) {
    if (keys === true) {
      filterAffected = true;
    } else {
      for (const filter of filterValue) {
        if (filter.id) {
          filterAffected = true;
          break;
        }
        if (filter.field && keys.has(filter.field)) {
          filterAffected = true;
          break;
        }
      }
    }
  }
  if (aggregationReducers && Object.keys(aggregationReducers).length) {
    if (keys === true) {
      aggregationsAffected = true;
    } else {
      for (const key in aggregationReducers)
        if (aggregationReducers.hasOwnProperty(key)) {
          const reducer = aggregationReducers[key];
          if (!reducer.field) {
            aggregationsAffected = true;
            break;
          } else {
            if (keys.has(reducer.field)) {
              aggregationsAffected = true;
              break;
            }
          }
        }
    }
  }
  return {
    sortInfo: sortInfoAffected,
    groupBy: groupByAffected,
    filterValue: filterAffected,
    aggregationReducers: aggregationsAffected
  };
}

// src/components/DataSource/GroupRowsState.ts
init_esm_shims();

// src/components/DataSource/BooleanDeepCollectionState.ts
init_esm_shims();
var BooleanDeepCollectionState = class {
  constructor(state) {
    const stateObject = state instanceof Object.getPrototypeOf(this).constructor ? (
      //@ts-ignore
      state.getState()
    ) : state;
    const positiveItems = this.getPositiveFromState(stateObject);
    const negativeItems = this.getNegativeFromState(stateObject);
    this.update({
      negativeItems,
      positiveItems
    });
  }
  getInitialState() {
    return this.initialState;
  }
  // protected getState(): BooleanDeepCollectionStateObject<KeyType> {
  //   return {
  //     positiveItems: this.allPositive
  //       ? true
  //       : this.positiveMap?.topDownKeys() ?? [],
  //     negativeItems: this.allNegative
  //       ? true
  //       : this.negativeMap?.topDownKeys() ?? [],
  //   };
  // }
  destroy() {
    var _a, _b;
    (_a = this.positiveMap) == null ? void 0 : _a.clear();
    (_b = this.negativeMap) == null ? void 0 : _b.clear();
    delete this.positiveMap;
    delete this.negativeMap;
  }
  update(state) {
    const { positiveItems, negativeItems } = state;
    this.allNegative = negativeItems === true;
    this.allPositive = positiveItems === true;
    if (this.allNegative && this.allPositive) {
      throw `Cannot have both negativeItems and positiveItems be true!`;
    }
    if (negativeItems !== true) {
      if (this.negativeMap) {
        this.negativeMap.clear();
        this.negativeMap.fill(negativeItems.map((keys) => [keys, true]));
      } else {
        this.negativeMap = new DeepMap(
          negativeItems.map((keys) => [keys, true])
        );
      }
      if (this.positiveMap) {
        this.positiveMap.clear();
      }
    }
    if (positiveItems !== true) {
      if (this.positiveMap) {
        this.positiveMap.clear();
        this.positiveMap.fill(positiveItems.map((keys) => [keys, true]));
      } else {
        this.positiveMap = new DeepMap(
          positiveItems.map((keys) => [keys, true])
        );
      }
      if (this.negativeMap) {
        this.negativeMap.clear();
      }
    }
  }
  areAllNegative() {
    return this.allNegative && (this.positiveMap ? this.positiveMap.size === 0 : true);
  }
  areAllPositive() {
    return this.allPositive && (this.negativeMap ? this.negativeMap.size === 0 : true);
  }
  makeAllNegative() {
    this.update({
      negativeItems: true,
      positiveItems: []
    });
  }
  makeAllPositive() {
    this.update({
      positiveItems: true,
      negativeItems: []
    });
  }
  isItemPositive(keys) {
    var _a, _b;
    if (this.allPositive === true) {
      if (this.allNegative === true) {
        throw 'Cannot have both positiveItems and negativeItems be "true"';
      }
      return !((_a = this.negativeMap) == null ? void 0 : _a.has(keys));
    }
    return (_b = this.positiveMap) == null ? void 0 : _b.has(keys);
  }
  isItemNegative(keys) {
    return !this.isItemPositive(keys);
  }
  setItemValue(keys, shouldMakePositive) {
    var _a;
    if (shouldMakePositive === this.isItemPositive(keys)) {
      return;
    }
    if (shouldMakePositive) {
      if (this.allNegative === true) {
        if (!this.positiveMap) {
          throw `No positiveMap found when trying to set item ${keys.join(
            ","
          )} be positive`;
        }
        this.positiveMap.set(keys, true);
      } else if (this.allPositive === true) {
        if (!this.negativeMap) {
          throw `No negativeMap found when trying to set item ${keys.join(
            ","
          )} be positive`;
        }
        this.negativeMap.delete(keys);
      }
    } else {
      if (this.allPositive === true) {
        if (!this.negativeMap) {
          throw `No negativeMap found when trying to set item ${keys.join(
            ","
          )} be negative`;
        }
        this.negativeMap.set(keys, true);
      } else if (this.allNegative === true) {
        if (!this.positiveMap) {
          throw `No positiveMap found when trying to set item ${keys.join(
            ","
          )} be negative`;
        }
        (_a = this.positiveMap) == null ? void 0 : _a.delete(keys);
      }
    }
  }
  makeItemNegative(keys) {
    this.setItemValue(keys, false);
  }
  makeItemPositive(keys) {
    this.setItemValue(keys, true);
  }
  toggleItem(keys) {
    this.setItemValue(keys, !this.isItemPositive(keys));
  }
};

// src/components/DataSource/GroupRowsState.ts
var GroupRowsState = class extends BooleanDeepCollectionState {
  constructor(state) {
    super(state);
  }
  getState() {
    var _a, _b, _c, _d;
    return {
      expandedRows: this.allPositive ? true : (_b = (_a = this.positiveMap) == null ? void 0 : _a.topDownKeys()) != null ? _b : [],
      collapsedRows: this.allNegative ? true : (_d = (_c = this.negativeMap) == null ? void 0 : _c.topDownKeys()) != null ? _d : []
    };
  }
  getPositiveFromState(state) {
    return state.expandedRows;
  }
  getNegativeFromState(state) {
    return state.collapsedRows;
  }
  areAllCollapsed() {
    return this.areAllNegative();
  }
  areAllExpanded() {
    return this.areAllPositive();
  }
  collapseAll() {
    this.makeAllNegative();
  }
  expandAll() {
    this.makeAllPositive();
  }
  isGroupRowExpanded(keys) {
    return this.isItemPositive(keys);
  }
  isGroupRowCollapsed(keys) {
    return !this.isGroupRowExpanded(keys);
  }
  setGroupRowExpanded(keys, shouldExpand) {
    return this.setItemValue(keys, shouldExpand);
  }
  collapseGroupRow(keys) {
    this.setGroupRowExpanded(keys, false);
  }
  expandGroupRow(keys) {
    this.setGroupRowExpanded(keys, true);
  }
  toggleGroupRow(keys) {
    this.toggleItem(keys);
  }
};

// src/components/DataSource/privateHooks/useLoadData.ts
init_esm_shims();
import { useEffect as useEffect19, useMemo as useMemo7, useRef as useRef21, useState as useState13 } from "react";

// src/components/hooks/useEffectWithChanges.ts
init_esm_shims();
import { useEffect as useEffect18, useRef as useRef20 } from "react";
function useEffectWithChanges(fn, deps) {
  const prevRef = useRef20({});
  const oldValuesRef = useRef20({});
  const oldValues = oldValuesRef.current;
  const changesRef = useRef20({});
  const changes = changesRef.current;
  const useEffectDeps = [];
  for (const k in deps) {
    if (deps.hasOwnProperty(k)) {
      if (deps[k] !== prevRef.current[k]) {
        changes[k] = deps[k];
        oldValues[k] = prevRef.current[k];
      }
      useEffectDeps.push(deps[k]);
    }
  }
  prevRef.current = deps;
  useEffect18(() => {
    const changes2 = changesRef.current;
    let result = void 0;
    if (Object.keys(changes2).length !== 0) {
      result = fn(changes2, oldValues);
    }
    changesRef.current = {};
    oldValuesRef.current = {};
    return result;
  }, useEffectDeps);
}

// src/components/DataSource/state/reducer.ts
init_esm_shims();

// src/utils/groupAndPivot/getPivotColumnsAndColumnGroups.ts
init_esm_shims();
function prepareColumn(column) {
  const { pivotByAtIndex: pivotByForColumn, pivotAggregator } = column;
  if (pivotByForColumn == null ? void 0 : pivotByForColumn.column) {
    if (typeof pivotByForColumn.column === "function") {
      Object.assign(column, pivotByForColumn.column({ column }));
    } else {
      Object.assign(column, pivotByForColumn.column);
    }
  }
  if (pivotAggregator == null ? void 0 : pivotAggregator.pivotColumn) {
    if (typeof pivotAggregator.pivotColumn === "function") {
      Object.assign(column, pivotAggregator.pivotColumn({ column }));
    } else {
      Object.assign(column, pivotAggregator.pivotColumn);
    }
  }
  return column;
}
function prepareColumnGroup(columnGroup) {
  const { pivotByAtIndex: pivotByForColumnGroup } = columnGroup;
  if (pivotByForColumnGroup == null ? void 0 : pivotByForColumnGroup.columnGroup) {
    if (typeof pivotByForColumnGroup.columnGroup === "function") {
      Object.assign(
        columnGroup,
        pivotByForColumnGroup.columnGroup({ columnGroup })
      );
    } else {
      Object.assign(columnGroup, pivotByForColumnGroup.columnGroup);
    }
  }
  return columnGroup;
}
function getPivotColumnsAndColumnGroups({
  deepMap,
  pivotBy,
  pivotTotalColumnPosition,
  pivotGrandTotalColumnPosition,
  reducers = {},
  showSeparatePivotColumnForSingleAggregation = false
}) {
  const pivotLength = pivotBy.length;
  const aggregationReducers = Object.keys(
    reducers
  ).map((key) => {
    return __spreadProps(__spreadValues({}, reducers[key]), { id: key });
  });
  if (!aggregationReducers.length) {
    showSeparatePivotColumnForSingleAggregation = true;
    pivotGrandTotalColumnPosition = false;
    pivotTotalColumnPosition = false;
    aggregationReducers.push({
      id: "__empty-aggregation-reducer__",
      name: "-",
      initialValue: null,
      reducer: () => null
    });
  }
  const columns = /* @__PURE__ */ new Map([
    // [
    //   'labels',
    //   {
    //     header: 'Row labels',
    //     pivotBy,
    //     valueGetter: (params) => {
    //       const { rowInfo } = params;
    //       if (!rowInfo.data) {
    //         // TODO replace with loading spinner
    //         return 'Loading ...';
    //       }
    //       return rowInfo.groupKeys
    //         ? rowInfo.groupKeys[rowInfo.groupKeys?.length - 1]
    //         : null;
    //     },
    //   },
    // ],
  ]);
  const columnGroups = /* @__PURE__ */ new Map();
  const addGrandTotalColumns = once(function() {
    aggregationReducers.forEach((reducer, index) => {
      columns.set(
        `total:${reducer.id}`,
        prepareColumn({
          header: `${reducer.name || reducer.id} total`,
          pivotBy,
          pivotColumn: true,
          pivotTotalColumn: true,
          pivotAggregator: reducer,
          pivotAggregatorIndex: index,
          pivotGroupKeys: [],
          pivotGroupKey: "",
          pivotIndex: -1,
          valueFormatter: ({ rowInfo }) => {
            var _a;
            return rowInfo.isGroupRow ? (_a = rowInfo.reducerResults) == null ? void 0 : _a[reducer.id] : null;
          }
        })
      );
    });
  });
  if (!pivotLength && pivotTotalColumnPosition === "start" || pivotGrandTotalColumnPosition === "start") {
    addGrandTotalColumns();
  }
  const isSingleAggregationColumn = !showSeparatePivotColumnForSingleAggregation && aggregationReducers.length === 1;
  deepMap.visitDepthFirst((_value, keys, _indexInGroup, next) => {
    keys = [...keys];
    if (pivotTotalColumnPosition === "end") {
      next == null ? void 0 : next();
    }
    if (keys.length === pivotLength) {
      const pivotByForColumn = pivotBy[keys.length - 1];
      const parentKeys = keys.slice(0, -1);
      let parentColumnGroupId = parentKeys.join("/");
      if (!isSingleAggregationColumn) {
        const columnGroupId = parentColumnGroupId;
        parentColumnGroupId = keys.join("/");
        const pivotGroupKey = keys[keys.length - 1];
        columnGroups.set(
          parentColumnGroupId,
          prepareColumnGroup({
            header: `${pivotGroupKey}`,
            columnGroup: columnGroupId,
            pivotBy,
            pivotGroupKeys: keys,
            pivotByAtIndex: pivotByForColumn,
            pivotIndex: keys.length - 1,
            pivotGroupKey
          })
        );
      }
      aggregationReducers.forEach((reducer, index) => {
        const header = isSingleAggregationColumn ? `${keys[keys.length - 1]}` : reducer.name || reducer.id;
        const computedPivotColumn = prepareColumn({
          pivotBy,
          pivotColumn: true,
          pivotTotalColumn: false,
          pivotAggregator: reducer,
          pivotAggregatorIndex: index,
          pivotGroupKeys: keys,
          pivotGroupKey: keys[keys.length - 1],
          pivotIndex: keys.length - 1,
          pivotByAtIndex: pivotByForColumn,
          defaultSortable: false,
          columnGroup: parentColumnGroupId,
          header,
          valueFormatter: ({ rowInfo }) => {
            var _a, _b;
            if (!rowInfo.isGroupRow) {
              return null;
            }
            return (_b = (_a = rowInfo.pivotValuesMap) == null ? void 0 : _a.get(keys)) == null ? void 0 : _b.reducerResults[reducer.id];
          }
        });
        const columnId = `${reducer.id}:${keys.join("/")}`;
        columns.set(columnId, computedPivotColumn);
      });
    } else {
      const colGroupId = keys.join("/");
      const parentKeys = keys.slice(0, -1);
      columnGroups.set(
        colGroupId,
        prepareColumnGroup({
          columnGroup: parentKeys.length ? parentKeys.join("/") : void 0,
          header: `${keys[keys.length - 1]}`,
          pivotBy,
          pivotGroupKeys: keys,
          pivotIndex: keys.length - 1,
          pivotByAtIndex: pivotBy[keys.length - 1],
          pivotGroupKey: keys[keys.length - 1]
        })
      );
      if (pivotTotalColumnPosition !== false) {
        const pivotByForColumn = pivotBy[keys.length - 1];
        let columnGroupId = parentKeys.length ? parentKeys.join("/") : void 0;
        if (!isSingleAggregationColumn) {
          const parentGroupForTotalsGroup = columnGroupId;
          columnGroupId = `total:${keys.join("/")}`;
          columnGroups.set(
            columnGroupId,
            prepareColumnGroup({
              header: `${keys[keys.length - 1]} total`,
              columnGroup: parentGroupForTotalsGroup,
              pivotBy,
              pivotTotalColumnGroup: true,
              pivotGroupKeys: keys,
              pivotIndex: keys.length - 1,
              pivotByAtIndex: pivotByForColumn,
              pivotGroupKey: keys[keys.length - 1]
            })
          );
        }
        aggregationReducers.forEach((reducer, index) => {
          const header = isSingleAggregationColumn ? `${keys[keys.length - 1]} total ` : `${reducer.name || reducer.id} total`;
          const computedPivotColumn = prepareColumn({
            columnGroup: columnGroupId,
            header,
            pivotAggregator: reducer,
            pivotAggregatorIndex: index,
            pivotColumn: true,
            pivotTotalColumn: true,
            pivotGroupKeys: keys,
            pivotGroupKey: keys[keys.length - 1],
            pivotByAtIndex: pivotByForColumn,
            pivotIndex: keys.length - 1,
            pivotBy,
            defaultSortable: false,
            valueFormatter: ({ rowInfo }) => {
              var _a, _b;
              if (!rowInfo.isGroupRow) {
                return null;
              }
              return (_b = (_a = rowInfo.pivotValuesMap) == null ? void 0 : _a.get(keys)) == null ? void 0 : _b.reducerResults[reducer.id];
            }
          });
          columns.set(
            `total:${reducer.id}:${keys.join("/")}`,
            computedPivotColumn
          );
        });
      }
    }
    if (pivotTotalColumnPosition === "start" || pivotTotalColumnPosition === false) {
      next == null ? void 0 : next();
    }
  });
  if (!pivotLength && pivotTotalColumnPosition === "end" || pivotGrandTotalColumnPosition === "end") {
    addGrandTotalColumns();
  }
  const result = {
    columns,
    columnGroups
  };
  return result;
}

// src/components/InfiniteTable/api/getSelectionApi.ts
init_esm_shims();

// src/utils/groupAndPivot/getGroupKeysForDataItem.ts
init_esm_shims();
function getGroupKeysForDataItem(data, groupBy) {
  return groupBy.reduce((groupKeys, groupBy2) => {
    const { field: groupByProperty, valueGetter, toKey: groupToKey } = groupBy2;
    const value = groupByProperty ? data[groupByProperty] : valueGetter == null ? void 0 : valueGetter({ data, field: groupByProperty });
    const key = (groupToKey || DEFAULT_TO_KEY)(
      value,
      data
    );
    groupKeys.push(key);
    return groupKeys;
  }, []);
}

// src/components/InfiniteTable/api/getSelectionApi.ts
function cloneRowSelection(rowSelection, stateOrGetDataSourceState) {
  return new RowSelectionState(
    rowSelection,
    rowSelectionStateConfigGetter(stateOrGetDataSourceState)
  );
}
function rowSelectionStateConfigGetter(stateOrStateGetter) {
  return () => {
    const state = typeof stateOrStateGetter === "function" ? stateOrStateGetter() : stateOrStateGetter;
    return {
      lazyLoad: !!state.lazyLoad,
      toPrimaryKey: state.toPrimaryKey,
      onlyUsePrimaryKeys: !state.useGroupKeysForMultiRowSelection,
      groupBy: state.groupBy,
      groupDeepMap: state.groupDeepMap,
      indexer: state.indexer,
      totalCount: state.unfilteredCount
    };
  };
}
function getSelectionApi(param) {
  const {
    // getComputed,
    // getState,
    getDataSourceState,
    // componentActions,
    dataSourceActions
  } = param;
  const selectionApi = {
    get allRowsSelected() {
      return getDataSourceState().allRowsSelected;
    },
    selectAll() {
      const { rowSelection, selectionMode } = getDataSourceState();
      if (selectionMode !== "multi-row") {
        throw "Selection mode is not multi-row";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      const rowSelectionState = new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(getDataSourceState)
      );
      rowSelectionState.selectAll();
      dataSourceActions.rowSelection = rowSelectionState;
    },
    deselectAll() {
      const { rowSelection, selectionMode } = getDataSourceState();
      if (selectionMode !== "multi-row") {
        throw "Selection mode is not multi-row";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      const rowSelectionState = new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(getDataSourceState)
      );
      rowSelectionState.deselectAll();
      dataSourceActions.rowSelection = rowSelectionState;
    },
    isRowSelected(pk, groupKeys) {
      const { rowSelection, selectionMode, indexer, groupBy } = getDataSourceState();
      if (selectionMode === "single-row") {
        return rowSelection === pk;
      }
      if (selectionMode !== "multi-row") {
        throw "Selection mode is not multi-row or single-row";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      if (!groupKeys) {
        const data = indexer.getDataForPrimaryKey(pk);
        groupKeys = data ? getGroupKeysForDataItem(data, groupBy) : [];
      }
      return rowSelection.isRowSelected(pk, groupKeys);
    },
    isRowDeselected(pk, groupKeys) {
      return !this.isRowSelected(pk, groupKeys);
    },
    selectRow(pk, groupKeys) {
      const { rowSelection, selectionMode, indexer, groupBy } = getDataSourceState();
      if (selectionMode === "single-row") {
        dataSourceActions.rowSelection = pk;
        return;
      }
      if (selectionMode !== "multi-row") {
        throw "Selection mode is not multi-row or single-row";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      if (!groupKeys) {
        const data = indexer.getDataForPrimaryKey(pk);
        groupKeys = data ? getGroupKeysForDataItem(data, groupBy) : [];
      }
      const rowSelectionState = new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(getDataSourceState)
      );
      rowSelectionState.selectRow(pk, groupKeys);
      dataSourceActions.rowSelection = rowSelectionState;
    },
    deselectRow(pk, groupKeys) {
      const { selectionMode, rowSelection, indexer, groupBy } = getDataSourceState();
      if (selectionMode === "single-row") {
        dataSourceActions.rowSelection = null;
        return;
      }
      if (selectionMode !== "multi-row") {
        throw "Selection mode is not multi-row or single-row";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      if (selectionMode === "multi-row") {
        if (!groupKeys) {
          const data = indexer.getDataForPrimaryKey(pk);
          groupKeys = data ? getGroupKeysForDataItem(data, groupBy) : [];
        }
        const rowSelectionState = new RowSelectionState(
          rowSelection,
          rowSelectionStateConfigGetter(getDataSourceState)
        );
        rowSelectionState.deselectRow(pk, groupKeys);
        dataSourceActions.rowSelection = rowSelectionState;
      }
    },
    toggleRowSelection(pk, groupKeys) {
      if (this.isRowSelected(pk, groupKeys)) {
        this.deselectRow(pk, groupKeys);
      } else {
        this.selectRow(pk, groupKeys);
      }
    },
    selectGroupRow(groupKeys) {
      const { selectionMode, rowSelection, groupBy } = getDataSourceState();
      if (selectionMode !== "multi-row") {
        throw 'Selection mode should be "multi-row"';
      }
      if (!groupBy) {
        throw "No grouping specified";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      const rowSelectionState = new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(getDataSourceState)
      );
      rowSelectionState.selectGroupRow(groupKeys);
      dataSourceActions.rowSelection = rowSelectionState;
    },
    deselectGroupRow(groupKeys) {
      const { selectionMode, rowSelection, groupBy } = getDataSourceState();
      if (selectionMode !== "multi-row") {
        throw 'Selection mode should be "multi-row"';
      }
      if (!groupBy) {
        throw "No grouping specified";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      const rowSelectionState = new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(getDataSourceState)
      );
      rowSelectionState.deselectGroupRow(groupKeys);
      dataSourceActions.rowSelection = rowSelectionState;
    },
    toggleGroupRowSelection(groupKeys) {
      const { selectionMode, rowSelection, groupBy } = getDataSourceState();
      if (selectionMode !== "multi-row") {
        throw 'Selection mode should be "multi-row"';
      }
      if (!groupBy) {
        throw "No grouping specified";
      }
      if (!(rowSelection instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      const rowSelectionState = new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(getDataSourceState)
      );
      rowSelectionState.toggleGroupRowSelection(groupKeys);
      dataSourceActions.rowSelection = rowSelectionState;
    },
    getGroupRowSelectionState(groupKeys, rowSelection) {
      const state = getDataSourceState();
      const { selectionMode, groupBy } = state;
      const rowSelectionState = rowSelection ? new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(state)
      ) : state.rowSelection;
      if (selectionMode !== "multi-row") {
        throw 'Selection mode should be "multi-row"';
      }
      if (!groupBy) {
        throw "No grouping specified";
      }
      if (!(rowSelectionState instanceof RowSelectionState)) {
        throw "Invalid row selection";
      }
      return rowSelectionState.getGroupRowSelectionState(groupKeys);
    },
    getSelectedPrimaryKeys: (rowSelection) => {
      const state = getDataSourceState();
      const rowSelectionState = rowSelection ? new RowSelectionState(
        rowSelection,
        rowSelectionStateConfigGetter(state)
      ) : state.rowSelection;
      const selected = [];
      if (state.lazyLoad) {
        console.error(
          `getSelectedPrimaryKeys  should not be called for lazy-loaded datasources as it wont return reliable results`
        );
      }
      state.originalDataArray.forEach((data) => {
        const id = state.toPrimaryKey(data);
        if (rowSelectionState.isRowSelected(id)) {
          selected.push(id);
        }
      });
      return selected;
    }
  };
  if (false) {
    globalThis.selectionApi = selectionApi;
  }
  return selectionApi;
}

// src/components/DataSource/RowSelectionState.ts
init_esm_shims();
var RowSelectionState = class {
  constructor(state, getConfig, _forTestingOnly) {
    this.selectedRows = null;
    this.deselectedRows = null;
    this.defaultSelection = false;
    this.selectedMap = new DeepMap();
    this.deselectedMap = new DeepMap();
    this.onlyUsePrimaryKeys = false;
    // TODO make it easy to share the cache with another instance
    this.selectionCache = new DeepMap();
    this.selectionCountCache = new DeepMap();
    this.mapSet = (name, key) => {
      if (!Array.isArray(key)) {
        if (this.onlyUsePrimaryKeys) {
          key = [key];
        } else {
          key = [...this.getGroupKeysForPrimaryKey(key), key];
        }
      }
      this.xcache();
      if (name === "selected") {
        this.selectedMap.set(key, true);
      } else {
        this.deselectedMap.set(key, true);
      }
    };
    this._selectedMapSet = (key) => {
      this.mapSet("selected", key);
    };
    this._deselectedMapSet = (key) => {
      this.mapSet("deselected", key);
    };
    const stateObject = state instanceof Object.getPrototypeOf(this).constructor ? (
      //@ts-ignore
      state.getState()
    ) : state;
    this.getConfig = getConfig;
    this.onlyUsePrimaryKeys = getConfig().onlyUsePrimaryKeys;
    if (_forTestingOnly) {
      Object.assign(this, _forTestingOnly);
    }
    this.update(stateObject);
  }
  getGroupKeysForPrimaryKey(pk) {
    const { indexer, groupBy } = this.getConfig();
    const data = indexer.getDataForPrimaryKey(pk);
    return data ? getGroupKeysForDataItem(data, groupBy) : [];
  }
  getGroupDeepMap() {
    return this.getConfig().groupDeepMap;
  }
  getGroupCount(groupKeys) {
    var _a;
    if (groupKeys.length == 0) {
      return this.getConfig().totalCount;
    }
    const groupDeepMap = this.getGroupDeepMap();
    const deepMapValue = groupDeepMap == null ? void 0 : groupDeepMap.get(groupKeys);
    if (!deepMapValue) {
      return 0;
    }
    return (_a = deepMapValue.totalChildrenCount) != null ? _a : deepMapValue.items.length || 0;
  }
  getGroupKeysDirectlyInsideGroup(groupKeys) {
    const { groupDeepMap } = this.getConfig();
    return (groupDeepMap == null ? void 0 : groupDeepMap.getKeysStartingWith(groupKeys, true, 1)) || [];
  }
  getAllPrimaryKeysInsideGroup(groupKeys) {
    const { groupDeepMap } = this.getConfig();
    if (!groupKeys.length) {
      const topLevelKeys = (groupDeepMap == null ? void 0 : groupDeepMap.getKeysStartingWith([], true, 1)) || [];
      return topLevelKeys.map((groupKeys2) => this.getAllPrimaryKeysInsideGroup(groupKeys2)).flat();
    }
    const group2 = groupDeepMap == null ? void 0 : groupDeepMap.get(groupKeys);
    return group2 ? group2.items.map(this.getConfig().toPrimaryKey) : [];
  }
  getGroupByLength() {
    return this.getConfig().groupBy.length;
  }
  static from(rowSeleStateObject, getConfig, overrides) {
    return new RowSelectionState(rowSeleStateObject, getConfig, overrides);
  }
  update(stateObject) {
    var _a, _b;
    this.selectedRows = stateObject.selectedRows || null;
    this.deselectedRows = stateObject.deselectedRows || null;
    this.selectedMap.clear();
    this.deselectedMap.clear();
    (_a = this.selectedRows) == null ? void 0 : _a.forEach(this._selectedMapSet);
    (_b = this.deselectedRows) == null ? void 0 : _b.forEach(this._deselectedMapSet);
    this.defaultSelection = stateObject.defaultSelection;
    this.xcache();
  }
  xcache() {
    this.selectionCache.clear();
    this.selectionCountCache.clear();
  }
  getState() {
    const normalize = (allKeys) => {
      const groupByLength = this.getGroupByLength();
      return allKeys.map((keys) => {
        if (this.onlyUsePrimaryKeys) {
          return keys[0];
        }
        return keys.length > groupByLength ? keys.pop() : keys;
      });
    };
    const selectedRows = normalize(this.selectedMap.topDownKeys());
    const deselectedRows = normalize(this.deselectedMap.topDownKeys());
    return {
      defaultSelection: this.defaultSelection,
      selectedRows,
      deselectedRows
    };
  }
  deselectAll() {
    this.update({
      defaultSelection: false,
      selectedRows: [],
      deselectedRows: []
    });
  }
  selectAll() {
    this.update({
      defaultSelection: true,
      deselectedRows: [],
      selectedRows: []
    });
  }
  isRowDefaultSelected() {
    return this.defaultSelection === true;
  }
  isRowDefaultDeselected() {
    return this.defaultSelection === false;
  }
  /**
   *
   * @param key the id of the row - if a row in a grouped datasource, this is the final row id, without the group keys
   * @param groupKeys the keys of row parents, in order
   * @returns Whether the row is selected or not.
   */
  isRowSelected(key, groupKeys) {
    if (this.onlyUsePrimaryKeys) {
      return this.defaultSelection ? !this.deselectedMap.has([key]) : this.selectedMap.has([key]);
    }
    groupKeys = groupKeys || this.getGroupKeysForPrimaryKey(key);
    const finalKey = [...groupKeys, key];
    const cachedResult = this.selectionCache.get(finalKey);
    if (cachedResult !== void 0) {
      return cachedResult;
    }
    const inSelected = this.selectedMap.has(finalKey);
    const inDeselected = this.deselectedMap.has(finalKey);
    if (inSelected) {
      this.selectionCache.set(finalKey, true);
      return true;
    }
    if (inDeselected) {
      this.selectionCache.set(finalKey, false);
      return false;
    }
    if (this.selectedMap.has(groupKeys)) {
      this.selectionCache.set(finalKey, true);
      return true;
    }
    if (this.deselectedMap.has(groupKeys)) {
      this.selectionCache.set(finalKey, false);
      return false;
    }
    groupKeys = [...groupKeys];
    while (groupKeys.length) {
      groupKeys.pop();
      const inSelected2 = this.selectedMap.has(groupKeys);
      const inDeselected2 = this.deselectedMap.has(groupKeys);
      if (inSelected2) {
        this.selectionCache.set(finalKey, true);
        return true;
      }
      if (inDeselected2) {
        this.selectionCache.set(finalKey, false);
        return false;
      }
    }
    this.selectionCache.set(finalKey, this.defaultSelection);
    return this.defaultSelection;
  }
  isRowDeselected(key, groupKeys) {
    return !this.isRowSelected(key, groupKeys);
  }
  setRowSelected(key, selected, groupKeys) {
    if (selected) {
      this.setRowAsSelected(key, groupKeys);
    } else {
      this.setRowAsDeselected(key, groupKeys);
    }
  }
  /**
   * Returns if the selection state ('full','partial','none') for the current group
   *
   * The selection state will be full (true) if either of those are true:
   *  * the group keys are specified as selected
   *  * all the children are specified as selected
   *
   * The selection state will be partial (null) if either of those are true:
   *  * the group keys are partially selected
   *  * some of the children are specified as selected
   *
   *
   * @param groupKeys the keys of the group row
   * @param children leaf children that belong to the group
   * @returns boolean
   */
  getGroupRowSelectionState(initialGroupKeys) {
    const cachedResult = this.selectionCache.get(initialGroupKeys);
    if (cachedResult !== void 0) {
      return cachedResult;
    }
    const { selectedCount, deselectedCount } = this.getSelectionCountFor(
      initialGroupKeys,
      this.onlyUsePrimaryKeys ? (
        // there is no need for the state from the parent group
        // when we are in this case, so don't do that
        void 0
      ) : this.getGroupRowBooleanSelectionStateFromParent(initialGroupKeys)
    );
    const result = selectedCount && deselectedCount ? null : selectedCount ? true : false;
    this.selectionCache.set(initialGroupKeys, result);
    return result;
  }
  getGroupRowBooleanSelectionStateFromParent(initialGroupKeys) {
    if (!initialGroupKeys.length) {
      return this.defaultSelection;
    }
    const groupKeys = [...initialGroupKeys];
    const selfDeselected = this.deselectedMap.has(groupKeys);
    const selfSelected = this.selectedMap.has(groupKeys);
    let selectionState = selfSelected && !selfDeselected ? true : selfDeselected && !selfSelected ? false : void 0;
    if (selectionState === void 0) {
      while (groupKeys.length) {
        groupKeys.pop();
        if (this.deselectedMap.has(groupKeys)) {
          selectionState = false;
          break;
        }
        if (this.selectedMap.has(groupKeys)) {
          selectionState = true;
          break;
        }
      }
    }
    if (selectionState === void 0) {
      selectionState = this.defaultSelection;
    }
    return selectionState;
  }
  isGroupRowPartlySelected(groupKeys) {
    return this.getGroupRowSelectionState(groupKeys) === null;
  }
  isGroupRowSelected(groupKeys) {
    return this.getGroupRowSelectionState(groupKeys) === true;
  }
  isGroupRowDeselected(groupKeys) {
    return this.getGroupRowSelectionState(groupKeys) === false;
  }
  selectGroupRow(groupKeys) {
    if (this.onlyUsePrimaryKeys) {
      const keys = this.getAllPrimaryKeysInsideGroup(groupKeys);
      keys.forEach((key) => {
        if (this.defaultSelection === true) {
          this.deselectedMap.delete([key]);
        } else {
          this._selectedMapSet(key);
        }
      });
      this.xcache();
      return;
    }
    const selectedKeys = this.selectedMap.getKeysStartingWith(groupKeys, true);
    selectedKeys.forEach((groupKeys2) => {
      this.selectedMap.delete(groupKeys2);
    });
    if (groupKeys.length === 1 && this.defaultSelection === true) {
    } else {
      this._selectedMapSet(groupKeys);
    }
    const deselectedKeys = this.deselectedMap.getKeysStartingWith(groupKeys);
    deselectedKeys.forEach((groupKeys2) => {
      this.deselectedMap.delete(groupKeys2);
    });
  }
  deselectGroupRow(groupKeys) {
    if (this.onlyUsePrimaryKeys) {
      const keys = this.getAllPrimaryKeysInsideGroup(groupKeys);
      keys.forEach((key) => {
        if (this.defaultSelection === false) {
          this.selectedMap.delete([key]);
        } else {
          this._deselectedMapSet(key);
        }
      });
      this.xcache();
      return;
    }
    const deselectedKeys = this.deselectedMap.getKeysStartingWith(
      groupKeys,
      true
    );
    deselectedKeys.forEach((groupKeys2) => {
      this.deselectedMap.delete(groupKeys2);
    });
    if (groupKeys.length === 1 && this.defaultSelection === false) {
    } else {
      this._deselectedMapSet(groupKeys);
    }
    const selectedKeys = this.selectedMap.getKeysStartingWith(groupKeys);
    selectedKeys.forEach((groupKeys2) => {
      this.selectedMap.delete(groupKeys2);
    });
  }
  setRowAsSelected(key, groupKeys) {
    if (this.onlyUsePrimaryKeys) {
      if (this.defaultSelection) {
        this.deselectedMap.delete([key]);
      } else {
        this._selectedMapSet(key);
      }
      this.xcache();
      return;
    }
    groupKeys = groupKeys || this.getGroupKeysForPrimaryKey(key);
    const finalKey = [...groupKeys, key];
    this.deselectedMap.delete(finalKey);
    this.xcache();
    if (this.getGroupRowSelectionState(groupKeys) !== true) {
      this._selectedMapSet(finalKey);
      if (this.getGroupRowSelectionState(groupKeys) === true) {
        this.selectGroupRow(groupKeys);
      }
    }
  }
  setRowAsDeselected(key, groupKeys) {
    if (this.onlyUsePrimaryKeys) {
      if (this.defaultSelection) {
        this._deselectedMapSet(key);
      } else {
        this.selectedMap.delete([key]);
      }
      this.xcache();
      return;
    }
    groupKeys = groupKeys || this.getGroupKeysForPrimaryKey(key);
    const finalKey = [...groupKeys, key];
    this.selectedMap.delete(finalKey);
    this.xcache();
    if (this.getGroupRowSelectionState(groupKeys) !== false) {
      this._deselectedMapSet(finalKey);
      if (this.getGroupRowSelectionState(groupKeys) === false) {
        this.deselectGroupRow(groupKeys);
      }
    }
  }
  deselectRow(key, groupKeys) {
    this.setRowSelected(key, false, groupKeys);
  }
  selectRow(key, groupKeys) {
    this.setRowSelected(key, true, groupKeys);
  }
  toggleGroupRowSelection(groupKeys) {
    const groupRowSelectionState = this.getGroupRowSelectionState(groupKeys);
    if (groupRowSelectionState === true) {
      this.deselectGroupRow(groupKeys);
    } else {
      this.selectGroupRow(groupKeys);
    }
  }
  toggleRowSelection(key, groupKeys) {
    if (this.isRowSelected(key, groupKeys)) {
      this.deselectRow(key, groupKeys);
    } else {
      this.selectRow(key, groupKeys);
    }
  }
  getSelectedCount() {
    return this.getSelectionCountFor([]).selectedCount;
  }
  getDeselectedCount() {
    return this.getSelectionCountFor([]).deselectedCount;
  }
  getSelectionCountFor(groupKeys = [], parentSelected) {
    var _a, _b;
    const cachedResult = this.selectionCountCache.get(groupKeys);
    if (cachedResult != null) {
      return cachedResult;
    }
    const groupByLength = this.getGroupByLength();
    if (groupKeys.length > groupByLength) {
      const result2 = this.isRowSelected(groupKeys) ? { selectedCount: 1, deselectedCount: 0 } : {
        selectedCount: 0,
        deselectedCount: 1
      };
      this.selectionCountCache.set(groupKeys, result2);
      return result2;
    }
    if (groupByLength && this.onlyUsePrimaryKeys) {
      const allKeys2 = this.getAllPrimaryKeysInsideGroup(groupKeys);
      let selectedCount2 = 0;
      let deselectedCount2 = 0;
      allKeys2.forEach((key) => {
        if (this.defaultSelection) {
          if (this.deselectedMap.has([key])) {
            deselectedCount2++;
            return;
          }
          selectedCount2++;
        } else {
          if (this.selectedMap.has([key])) {
            selectedCount2++;
            return;
          }
          deselectedCount2++;
        }
      });
      const result2 = {
        selectedCount: selectedCount2,
        deselectedCount: deselectedCount2
      };
      this.selectionCountCache.set(groupKeys, result2);
      return result2;
    }
    parentSelected = parentSelected != null ? parentSelected : this.getGroupRowBooleanSelectionStateFromParent(groupKeys);
    let allKeys = this.getGroupKeysDirectlyInsideGroup(groupKeys);
    if (groupKeys.length === this.getGroupByLength()) {
      const selectionState = this.selectedMap.has(groupKeys) ? true : this.deselectedMap.has(groupKeys) ? false : parentSelected;
      const totalCount = this.getGroupCount(groupKeys);
      let selectedCount2 = this.selectedMap.getKeysStartingWith(
        groupKeys,
        true,
        1
      ).length;
      let deselectedCount2 = this.deselectedMap.getKeysStartingWith(
        groupKeys,
        true,
        1
      ).length;
      const notSpecifiedCount = totalCount - (selectedCount2 + deselectedCount2);
      const result2 = {
        selectedCount: selectedCount2 + (selectionState ? notSpecifiedCount : 0),
        deselectedCount: deselectedCount2 + (selectionState ? 0 : notSpecifiedCount)
      };
      this.selectionCountCache.set(groupKeys, result2);
      return result2;
    }
    let selectedCount = 0;
    let deselectedCount = 0;
    if (this.getConfig().lazyLoad && !allKeys.length) {
      const totalChildrenCount = ((_b = (_a = this.getConfig().groupDeepMap) == null ? void 0 : _a.get(groupKeys)) == null ? void 0 : _b.totalChildrenCount) || 0;
      if (parentSelected) {
        selectedCount = totalChildrenCount;
        deselectedCount = this.deselectedMap.getAllChildrenSizeFor(groupKeys);
        if (deselectedCount === totalChildrenCount) {
          selectedCount = 0;
        }
      } else {
        deselectedCount = totalChildrenCount;
        selectedCount = this.selectedMap.getAllChildrenSizeFor(groupKeys);
        if (selectedCount === totalChildrenCount) {
          deselectedCount = 0;
        }
      }
    }
    allKeys.forEach((keys) => {
      let isSelected = this.selectedMap.get(keys);
      let isDeselected = this.deselectedMap.get(keys);
      const selected = isSelected ? true : isDeselected ? false : parentSelected;
      const { selectedCount: selCount, deselectedCount: deselCount } = this.getSelectionCountFor(keys, selected);
      selectedCount += selCount;
      deselectedCount += deselCount;
    });
    const result = {
      selectedCount,
      deselectedCount
    };
    this.selectionCountCache.set(groupKeys, result);
    return result;
  }
};

// src/components/DataSource/state/initRowInfoReducers.ts
init_esm_shims();
function initRowInfoReducers(reducers) {
  if (!reducers) {
    return void 0;
  }
  const keys = Object.keys(reducers);
  if (!keys.length) {
    return void 0;
  }
  const result = {};
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    const initialValue = reducers[key].initialValue;
    if (initialValue !== void 0) {
      result[key] = typeof initialValue === "function" ? initialValue() : initialValue;
    }
  }
  return result;
}
function computeRowInfoReducersFor(params) {
  const keys = params.reducerKeys;
  const reducers = params.reducers;
  const results = params.results;
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    const reducer = reducers[key].reducer;
    results[key] = reducer(results[key], params.rowInfo);
  }
}
function finishRowInfoReducersFor(params) {
  const keys = Object.keys(params.reducers || {});
  if (!keys.length || !params.results) {
    return params.results;
  }
  const reducers = params.reducers;
  const results = params.results;
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    const done = reducers[key].done;
    if (typeof done === "function") {
      results[key] = done(results[key], params.array);
    }
  }
  return results;
}

// src/components/DataSource/state/reducer.ts
function cleanupEmptyFilterValues(filterValue, filterTypes) {
  if (!filterValue) {
    return filterValue;
  }
  return filterValue.filter((filterValue2) => {
    const filterType = filterTypes[filterValue2.filter.type];
    if (!filterType) {
      return false;
    }
    if (filterType.emptyValues && filterType.emptyValues.includes(filterValue2.filter.value)) {
      return false;
    }
    return true;
  });
}
var haveDepsChanged = (state1, state2, deps) => {
  for (let i = 0, len = deps.length; i < len; i++) {
    const k = deps[i];
    const oldValue = state1[k];
    const newValue = state2[k];
    if (oldValue !== newValue) {
      return true;
    }
  }
  return false;
};
function toRowInfo(data, id, index, isRowSelected) {
  const rowInfo = {
    dataSourceHasGrouping: false,
    data,
    id,
    indexInAll: index,
    isGroupRow: false,
    selfLoaded: true,
    rowSelected: false
  };
  if (isRowSelected) {
    rowInfo.rowSelected = isRowSelected(rowInfo);
  }
  return rowInfo;
}
function filterDataSource(params) {
  const {
    filterTypes,
    operatorsByFilterType,
    filterFunction,
    toPrimaryKey
  } = params;
  let { dataArray } = params;
  if (filterFunction) {
    dataArray = dataArray.filter(
      (data, index, arr) => filterFunction({
        data,
        index,
        dataArray: arr,
        primaryKey: toPrimaryKey(data, index)
      })
    );
  }
  const filterValueArray = cleanupEmptyFilterValues(params.filterValue, filterTypes) || [];
  if (filterValueArray && filterValueArray.length) {
    return dataArray.filter((data, index, arr) => {
      var _a;
      const param = {
        data,
        index,
        dataArray: arr,
        primaryKey: toPrimaryKey(data, index),
        field: void 0
      };
      for (let i = 0, len = filterValueArray.length; i < len; i++) {
        const currentFilterValue = filterValueArray[i];
        const {
          disabled,
          field,
          valueGetter: filterValueGetter,
          filter: { type: filterTypeKey, value: filterValue, operator }
        } = currentFilterValue;
        const filterType = filterTypes[filterTypeKey];
        if (disabled || !filterType) {
          continue;
        }
        const currentOperator = (_a = operatorsByFilterType[filterTypeKey]) == null ? void 0 : _a[operator];
        if (!currentOperator) {
          continue;
        }
        const valueGetter = filterValueGetter || filterType.valueGetter;
        const getter = valueGetter || (({ data: data2, field: field2 }) => field2 ? data2[field2] : data2);
        param.field = field;
        const operatorFnParam = param;
        operatorFnParam.filterValue = filterValue;
        operatorFnParam.currentValue = getter(operatorFnParam);
        operatorFnParam.emptyValues = filterType.emptyValues;
        if (!currentOperator.fn(operatorFnParam)) {
          return false;
        }
      }
      return true;
    });
  }
  return dataArray;
}
function concludeReducer(params) {
  var _a, _b;
  const { state, previousState } = params;
  const cacheAffectedParts = getCacheAffectedParts(state);
  const sortInfo = state.sortInfo;
  const sortMode = state.sortMode;
  let shouldSort = !!(sortInfo == null ? void 0 : sortInfo.length) ? sortMode === "local" : false;
  if (state.lazyLoad || state.livePagination) {
    shouldSort = false;
  }
  let originalDataArrayChanged = haveDepsChanged(previousState, state, [
    "cache",
    "originalDataArray",
    "originalLazyGroupDataChangeDetect"
  ]);
  const dataSourceChange = previousState && state.data !== previousState.data;
  let lazyLoadGroupDataChange = state.lazyLoad && previousState && (previousState.groupBy !== state.groupBy || previousState.sortInfo !== state.sortInfo);
  if (dataSourceChange) {
    lazyLoadGroupDataChange = true;
  }
  if (lazyLoadGroupDataChange) {
    state.originalLazyGroupData = new DeepMap();
    originalDataArrayChanged = true;
  }
  const cache = state.cache ? DataSourceCache.clone(state.cache) : void 0;
  if (cache && !cache.isEmpty()) {
    originalDataArrayChanged = true;
  }
  const toPrimaryKey = state.toPrimaryKey;
  let mutations;
  const shouldIndex = originalDataArrayChanged;
  if (shouldIndex) {
    state.indexer.clear();
    if (!state.lazyLoad) {
      mutations = cache == null ? void 0 : cache.getMutations();
      state.originalDataArray = state.indexer.indexArray(
        state.originalDataArray,
        {
          toPrimaryKey,
          cache
        }
      );
    }
  }
  if (cache) {
    cache.clear();
    state.cache = cache;
  }
  const { filterFunction, filterValue, filterTypes, operatorsByFilterType } = state;
  const shouldFilter = !!filterFunction || Array.isArray(filterValue) && filterValue.length;
  const shouldFilterClientSide = shouldFilter && state.filterMode === "local";
  const filterDepsChanged = haveDepsChanged(previousState, state, [
    "filterFunction",
    "filterValue",
    "filterTypes"
  ]);
  const filterChanged = originalDataArrayChanged || filterDepsChanged;
  const sortInfoChanged = haveDepsChanged(previousState, state, ["sortInfo"]);
  const sortDepsChanged = originalDataArrayChanged || filterDepsChanged || sortInfoChanged;
  const shouldFilterAgain = state.filterMode === "local" && (filterChanged || !state.lastFilterDataArray);
  const shouldSortAgain = shouldSort && (sortDepsChanged || !state.lastSortDataArray || cacheAffectedParts.sortInfo);
  const groupBy = state.groupBy;
  const pivotBy = state.pivotBy;
  const shouldGroup = groupBy.length > 0 || !!pivotBy;
  const selectionDepsChanged = haveDepsChanged(previousState, state, [
    "rowSelection",
    "isRowSelected",
    "originalLazyGroupDataChangeDetect"
  ]);
  const groupsDepsChanged = originalDataArrayChanged || sortDepsChanged || haveDepsChanged(previousState, state, [
    "generateGroupRows",
    "originalLazyGroupData",
    "originalLazyGroupDataChangeDetect",
    "groupBy",
    "groupRowsState",
    "pivotBy",
    "aggregationReducers",
    "pivotTotalColumnPosition",
    "pivotGrandTotalColumnPosition",
    "showSeparatePivotColumnForSingleAggregation"
  ]);
  const rowInfoReducersChanged = haveDepsChanged(previousState, state, [
    "rowInfoReducers"
  ]);
  const shouldGroupAgain = shouldGroup && (groupsDepsChanged || !state.lastGroupDataArray || cacheAffectedParts.groupBy) || selectionDepsChanged || rowInfoReducersChanged;
  const now = Date.now();
  let dataArray = state.originalDataArray;
  if (!shouldFilter) {
    state.unfilteredCount = dataArray.length;
  }
  if (shouldFilterClientSide) {
    state.unfilteredCount = dataArray.length;
    dataArray = shouldFilterAgain ? filterDataSource({
      dataArray,
      toPrimaryKey,
      filterTypes,
      operatorsByFilterType,
      filterFunction,
      filterValue
    }) : state.lastFilterDataArray;
    state.lastFilterDataArray = dataArray;
    state.filteredAt = now;
  }
  state.filteredCount = dataArray.length;
  state.postFilterDataArray = dataArray;
  if (shouldSort) {
    const prevKnownTypes = multisort.knownTypes;
    multisort.knownTypes = __spreadValues(__spreadValues({}, prevKnownTypes), state.sortTypes);
    const sortFn = state.sortFunction || multisort;
    dataArray = shouldSortAgain ? sortFn(sortInfo, [...dataArray]) : state.lastSortDataArray;
    multisort.knownTypes = prevKnownTypes;
    state.lastSortDataArray = dataArray;
    state.sortedAt = now;
  }
  state.postSortDataArray = dataArray;
  let rowInfoDataArray = state.dataArray;
  const rowSelectionState = state.rowSelection instanceof RowSelectionState ? state.rowSelection : void 0;
  rowSelectionState == null ? void 0 : rowSelectionState.xcache();
  let isRowSelected = state.selectionMode === "single-row" ? (rowInfo) => {
    return rowInfo.id === state.rowSelection;
  } : state.selectionMode === "multi-row" ? (rowInfo) => {
    const rowSelection = rowSelectionState;
    return rowInfo.isGroupRow ? rowSelection.getGroupRowSelectionState(rowInfo.groupKeys) : rowSelection.isRowSelected(
      rowInfo.id,
      rowInfo.dataSourceHasGrouping ? rowInfo.groupKeys : void 0
    );
  } : void 0;
  if (state.isRowSelected && state.selectionMode === "multi-row") {
    isRowSelected = (rowInfo) => state.isRowSelected(
      rowInfo,
      rowSelectionState,
      state.selectionMode
    );
  }
  const rowInfoReducers = state.rowInfoReducers;
  if (shouldGroup) {
    if (shouldGroupAgain) {
      let aggregationReducers = state.aggregationReducers;
      const groupResult = state.lazyLoad ? lazyGroup(
        {
          groupBy,
          // groupByIndex: 0,
          // parentGroupKeys: [],
          pivot: pivotBy,
          mappings: state.pivotMappings,
          reducers: aggregationReducers,
          indexer: state.indexer,
          toPrimaryKey,
          cache
        },
        state.originalLazyGroupData
      ) : group(
        {
          groupBy,
          pivot: pivotBy,
          reducers: aggregationReducers
        },
        dataArray
      );
      state.groupDeepMap = groupResult.deepMap;
      if (rowSelectionState) {
        rowSelectionState.getConfig = rowSelectionStateConfigGetter(state);
      }
      const rowInfoReducerKeys = Object.keys(
        rowInfoReducers || {}
      );
      const rowInfoReducerResults = initRowInfoReducers(
        rowInfoReducers
      );
      const rowInfoReducersShape = {
        reducers: rowInfoReducers,
        results: rowInfoReducerResults,
        reducerKeys: rowInfoReducerKeys,
        rowInfo: {}
      };
      const flattenResult = enhancedFlatten({
        groupResult,
        lazyLoad: !!state.lazyLoad,
        reducers: aggregationReducers,
        toPrimaryKey,
        isRowSelected,
        rowSelectionState,
        withRowInfo: rowInfoReducerResults ? (rowInfo) => {
          rowInfoReducersShape.rowInfo = rowInfo;
          computeRowInfoReducersFor(rowInfoReducersShape);
        } : void 0,
        groupRowsState: state.groupRowsState,
        generateGroupRows: state.generateGroupRows
      });
      rowInfoDataArray = flattenResult.data;
      state.rowInfoReducerResults = finishRowInfoReducersFor({
        reducers: rowInfoReducers,
        results: rowInfoReducerResults,
        array: rowInfoDataArray
      });
      state.groupRowsIndexesInDataArray = flattenResult.groupRowsIndexes;
      state.reducerResults = groupResult.reducerResults;
      const pivotGroupsAndCols = pivotBy ? getPivotColumnsAndColumnGroups({
        deepMap: groupResult.topLevelPivotColumns,
        pivotBy,
        pivotTotalColumnPosition: (_a = state.pivotTotalColumnPosition) != null ? _a : "end",
        pivotGrandTotalColumnPosition: (_b = state.pivotGrandTotalColumnPosition) != null ? _b : false,
        reducers: state.aggregationReducers,
        showSeparatePivotColumnForSingleAggregation: state.showSeparatePivotColumnForSingleAggregation
      }) : void 0;
      state.pivotColumns = pivotGroupsAndCols == null ? void 0 : pivotGroupsAndCols.columns;
      state.pivotColumnGroups = pivotGroupsAndCols == null ? void 0 : pivotGroupsAndCols.columnGroups;
    } else {
      rowInfoDataArray = state.lastGroupDataArray;
    }
    state.lastGroupDataArray = rowInfoDataArray;
    state.groupedAt = now;
  } else {
    state.groupDeepMap = void 0;
    state.pivotColumns = void 0;
    state.groupRowsIndexesInDataArray = void 0;
    const arrayDifferentAfterSortStep = previousState.postSortDataArray != state.postSortDataArray;
    if (arrayDifferentAfterSortStep || groupsDepsChanged || selectionDepsChanged || rowInfoReducersChanged) {
      const rowInfoReducerKeys = Object.keys(
        rowInfoReducers || {}
      );
      const rowInfoReducerResults = initRowInfoReducers(
        rowInfoReducers
      );
      const rowInfoReducersShape = {
        reducers: rowInfoReducers,
        results: rowInfoReducerResults,
        reducerKeys: rowInfoReducerKeys,
        rowInfo: {}
      };
      rowInfoDataArray = dataArray.map((data, index) => {
        const rowInfo = toRowInfo(
          data,
          data ? toPrimaryKey(data) : index,
          index,
          isRowSelected
        );
        if (rowInfoReducerResults) {
          rowInfoReducersShape.rowInfo = rowInfo;
          computeRowInfoReducersFor(rowInfoReducersShape);
        }
        return rowInfo;
      });
      state.rowInfoReducerResults = finishRowInfoReducersFor({
        reducers: rowInfoReducers,
        results: rowInfoReducerResults,
        array: rowInfoDataArray
      });
    }
  }
  state.postGroupDataArray = rowInfoDataArray;
  if (rowInfoDataArray !== state.dataArray) {
    state.updatedAt = now;
  }
  state.dataArray = rowInfoDataArray;
  state.reducedAt = now;
  if (state.selectionMode === "multi-row") {
    if (shouldGroup && state.lazyLoad) {
      let allRowsSelected = true;
      let someRowsSelected = false;
      state.dataArray.forEach((rowInfo) => {
        if (rowInfo.isGroupRow && rowInfo.groupKeys.length === 1) {
          const { rowSelected } = rowInfo;
          if (rowSelected !== true) {
            allRowsSelected = false;
          }
          if (rowSelected === true || rowSelected === null) {
            someRowsSelected = true;
          }
        }
      });
      state.allRowsSelected = allRowsSelected;
      state.someRowsSelected = someRowsSelected;
    } else {
      const dataArrayCount = state.filteredCount;
      const selectedRowCount = state.rowSelection.getSelectedCount();
      state.allRowsSelected = dataArrayCount === selectedRowCount;
      state.someRowsSelected = selectedRowCount > 0;
    }
  }
  if (false) {
    globalThis.state = state;
  }
  state.originalDataArrayChanged = originalDataArrayChanged;
  if (originalDataArrayChanged) {
    state.originalDataArrayChangedInfo = {
      timestamp: now,
      mutations
    };
  }
  return state;
}

// src/components/DataSource/privateHooks/getChangeDetect.ts
init_esm_shims();
function getChangeDetect() {
  var _a;
  const perfNow = (_a = getGlobal().performance) == null ? void 0 : _a.now();
  return `${Date.now()}:${perfNow}`;
}

// src/components/DataSource/privateHooks/useLoadData.ts
var CACHE_DEFAULT = true;
var getRafPromise = () => new Promise((resolve) => {
  raf(resolve);
});
var SKIP_DATA_CHANGES_KEYS = {
  originalDataArray: true,
  changes: true
};
var DATA_CHANGES_COMPARE_FUNCTIONS = {
  filterValue: (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  },
  groupRowsState: (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  }
};
function buildDataSourceDataParams(componentState, overrides) {
  var _a, _b;
  const sortInfo = componentState.multiSort ? componentState.sortInfo : (_b = (_a = componentState.sortInfo) == null ? void 0 : _a[0]) != null ? _b : null;
  const dataSourceParams = {
    append: false,
    originalDataArray: componentState.originalDataArray,
    sortInfo,
    refetchKey: componentState.refetchKey,
    groupBy: componentState.groupBy,
    pivotBy: componentState.pivotBy,
    filterValue: componentState.filterValue,
    aggregationReducers: componentState.aggregationReducers
  };
  if (dataSourceParams.groupBy) {
    dataSourceParams.groupRowsState = componentState.groupRowsState.getState();
  }
  if (componentState.livePagination !== void 0) {
    dataSourceParams.livePaginationCursor = componentState.livePaginationCursor;
    dataSourceParams.__cursorId = componentState.cursorId;
  }
  if (componentState.lazyLoad) {
    if (componentState.lazyLoadBatchSize != null && componentState.lazyLoadBatchSize > 0) {
      dataSourceParams.lazyLoadBatchSize = componentState.lazyLoadBatchSize;
      dataSourceParams.lazyLoadStartIndex = 0;
    }
    dataSourceParams.groupKeys = [];
  }
  if (overrides) {
    Object.assign(dataSourceParams, overrides);
  }
  if (dataSourceParams.filterValue && dataSourceParams.filterValue.length) {
    const newFilterValue = computeFilterValueForRemote(
      dataSourceParams.filterValue,
      {
        filterMode: componentState.filterMode,
        filterTypes: componentState.filterTypes
      }
    );
    if (newFilterValue && newFilterValue.length) {
      dataSourceParams.filterValue = newFilterValue;
    }
  }
  const changes = {};
  const oldDataSourceParams = componentState.dataParams || {};
  for (const k in dataSourceParams) {
    if (dataSourceParams.hasOwnProperty(k) && !SKIP_DATA_CHANGES_KEYS[k]) {
      const key = k;
      const compareFn = DATA_CHANGES_COMPARE_FUNCTIONS[key];
      const a = dataSourceParams[key];
      const b = oldDataSourceParams[key];
      const equals = compareFn ? compareFn(a, b) : a === b;
      if (!equals) {
        changes[key] = true;
      }
    }
  }
  dataSourceParams.changes = changes;
  return dataSourceParams;
}
function loadData(data, componentState, actions, overrides) {
  const dataParams = buildDataSourceDataParams(componentState, overrides);
  const append = dataParams.append;
  if (componentState.lazyLoad) {
    const lazyGroupData = componentState.originalLazyGroupData;
    const key = [LAZY_ROOT_KEY_FOR_GROUPS, ...dataParams.groupKeys || []];
    const existingGroupRowInfo = lazyGroupData.get(key);
    if (!existingGroupRowInfo) {
      const groupCacheKeys = [
        ...dataParams.groupKeys || [],
        dataParams.lazyLoadStartIndex
      ];
      componentState.lazyLoadCacheOfLoadedBatches.set(groupCacheKeys, true);
    }
    if (existingGroupRowInfo && existingGroupRowInfo.cache && key.length > 1) {
      const items = existingGroupRowInfo.children;
      const len = items.length;
      let allLoaded = true;
      for (let i = 0; i < len; i++) {
        if (items[i] == null) {
          allLoaded = false;
          break;
        }
      }
      if (allLoaded) {
        return Promise.resolve(true);
      }
    }
    if (existingGroupRowInfo) {
      if (!existingGroupRowInfo.childrenLoading) {
        existingGroupRowInfo.childrenLoading = true;
      }
    } else {
      lazyGroupData.set(key, {
        error: void 0,
        children: [],
        childrenLoading: true,
        childrenAvailable: false,
        cache: CACHE_DEFAULT,
        totalCount: 0,
        totalCountUnfiltered: 0
      });
    }
    actions.originalLazyGroupDataChangeDetect = getChangeDetect();
  }
  if (typeof data === "function") {
    data = data(dataParams);
  }
  const dataIsPromise = (
    //@ts-ignore
    typeof data === "object" && typeof data.then === "function"
  );
  if (dataIsPromise && !componentState.lazyLoad) {
    actions.loading = true;
  }
  return Promise.resolve(data).then((dataParam) => {
    let dataArray = [];
    let skipAssign = false;
    if (Array.isArray(dataParam.data)) {
      const remoteData = dataParam;
      dataArray = remoteData.data;
      if (remoteData.livePaginationCursor !== void 0) {
        actions.livePaginationCursor = remoteData.livePaginationCursor;
      }
      if (remoteData.mappings) {
        actions.pivotMappings = remoteData.mappings;
      }
      if (remoteData.totalCountUnfiltered) {
        actions.unfilteredCount = remoteData.totalCountUnfiltered;
      }
      if (componentState.lazyLoad) {
        let resolveRemoteData2 = function(keys, remoteData2, parentKeys) {
          var _a, _b, _c, _d;
          const theKey = [LAZY_ROOT_KEY_FOR_GROUPS, ...keys];
          const dataArray2 = remoteData2.data;
          const newGroupRowInfo = {
            cache: !!remoteData2.cache,
            childrenLoading: false,
            childrenAvailable: true,
            totalCount: (_a = remoteData2.totalCount) != null ? _a : dataArray2.length,
            totalCountUnfiltered: (_b = remoteData2.totalCount) != null ? _b : dataArray2.length,
            children: dataArray2,
            error: remoteData2.error
          };
          const childDatasets = [];
          if (dataParams.lazyLoadBatchSize && !parentKeys) {
            const existingGroupRowInfo = lazyGroupData.get(theKey);
            const isGroupNew = !existingGroupRowInfo;
            const currentGroupRowInfo = assignExcept(
              {
                children: true
              },
              existingGroupRowInfo || {},
              newGroupRowInfo
            );
            if (isGroupNew) {
              currentGroupRowInfo.chidren = [];
            }
            currentGroupRowInfo.children.length = currentGroupRowInfo.totalCount;
            const start = (_c = dataParams.lazyLoadStartIndex) != null ? _c : 0;
            const end = Math.min(
              (_d = remoteData2.totalCount) != null ? _d : dataArray2.length,
              start + dataParams.lazyLoadBatchSize
            );
            for (let i = start; i < end; i++) {
              const it = newGroupRowInfo.children[i - start];
              if (!it) {
                throw `lazily loaded item not found at index ${i - start}`;
              }
              currentGroupRowInfo.children[i] = it;
              if (it.dataset) {
                childDatasets.push({
                  keys: it.keys,
                  dataset: it.dataset
                });
              }
            }
            if (isGroupNew) {
              lazyGroupData.set(theKey, currentGroupRowInfo);
            }
          } else {
            newGroupRowInfo.children.forEach((child) => {
              if (child && child.dataset) {
                childDatasets.push({
                  keys: child.keys,
                  dataset: child.dataset
                });
              }
            });
            newGroupRowInfo.children.length = newGroupRowInfo.totalCount;
            lazyGroupData.set(theKey, newGroupRowInfo);
          }
          let skipTriggerChangeAsAlreadyOriginalArrayWasUpdated = false;
          if (!keys || !keys.length) {
            const topLevelLazyGroupData = lazyGroupData.get([
              LAZY_ROOT_KEY_FOR_GROUPS
            ]);
            actions.originalDataArray = [...topLevelLazyGroupData.children];
            skipTriggerChangeAsAlreadyOriginalArrayWasUpdated = true;
          }
          if (!skipTriggerChangeAsAlreadyOriginalArrayWasUpdated) {
            actions.originalLazyGroupDataChangeDetect = getChangeDetect();
          }
          if (childDatasets.length) {
            const parentKeys2 = keys;
            childDatasets.forEach(({ keys: keys2, dataset }) => {
              resolveRemoteData2(keys2, dataset, parentKeys2);
            });
          }
        };
        var resolveRemoteData = resolveRemoteData2;
        const lazyGroupData = componentState.originalLazyGroupData;
        skipAssign = true;
        resolveRemoteData2(dataParams.groupKeys || [], remoteData);
      }
    } else {
      dataArray = dataParam;
    }
    if (!skipAssign) {
      actions.originalDataArray = append ? componentState.originalDataArray.concat(dataArray) : dataArray;
    }
    if (dataIsPromise && !componentState.lazyLoad) {
      actions.loading = false;
    }
  });
}
function computeFilterValueForRemote(filterValue, {
  filterTypes,
  filterMode
}) {
  if (filterMode === "local") {
    return filterValue;
  }
  return (cleanupEmptyFilterValues(filterValue, filterTypes) || []).map(
    (filterValue2) => {
      const value = __spreadValues({}, filterValue2);
      delete value.valueGetter;
      return value;
    }
  );
}
function useLoadData() {
  const {
    getComponentState,
    componentActions: actions,
    componentState
  } = useComponentState();
  const {
    data,
    dataArray,
    notifyScrollbarsChange,
    refetchKey,
    sortInfo,
    sortMode,
    groupBy,
    pivotBy,
    filterValue,
    filterMode,
    livePagination,
    livePaginationCursor,
    filterTypes,
    cursorId: stateCursorId
  } = componentState;
  const [scrollbars, setScrollbars] = useState13({
    vertical: false,
    horizontal: false
  });
  const scrollbarsRef = useRef21(scrollbars);
  useEffect19(() => {
    notifyScrollbarsChange.onChange((scrollbars2) => {
      if (!scrollbars2) {
        return;
      }
      scrollbarsRef.current = scrollbars2;
      setScrollbars(scrollbars2);
    });
    return () => notifyScrollbarsChange.destroy();
  }, [notifyScrollbarsChange]);
  useEffect19(() => {
    if (!livePagination) {
      return;
    }
    const frameId = requestAnimationFrame(() => {
      var _a;
      if (!((_a = scrollbarsRef.current) == null ? void 0 : _a.vertical)) {
        if (livePaginationCursor) {
          actions.cursorId = livePaginationCursor;
        }
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [livePaginationCursor]);
  useEffect19(() => {
    if (!livePagination || livePaginationCursor !== void 0) {
      return;
    }
    const frameId = requestAnimationFrame(() => {
      var _a;
      if (!((_a = scrollbarsRef.current) == null ? void 0 : _a.vertical)) {
        if (stateCursorId != null && dataArray.length) {
          actions.cursorId = dataArray.length;
        }
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [dataArray.length, livePaginationCursor]);
  useEffect19(() => {
    const state = getComponentState();
    const { livePaginationCursor: livePaginationCursor2, livePagination: livePagination2, dataArray: dataArray2 } = state;
    if (!scrollbars.vertical && livePagination2) {
      if (livePaginationCursor2) {
        actions.cursorId = livePaginationCursor2;
      } else if (livePaginationCursor2 === void 0 && dataArray2.length) {
        actions.cursorId = dataArray2.length;
      }
    }
  }, [scrollbars.vertical]);
  const computedFilterValue = useMemo7(() => {
    return computeFilterValueForRemote(filterValue, {
      filterTypes,
      filterMode
    });
  }, [filterValue, filterMode, filterTypes]);
  const depsObject = {
    sortInfo: sortMode === "remote" ? sortInfo : null,
    groupBy,
    pivotBy,
    refetchKey,
    filterValue: computedFilterValue,
    cursorId: livePagination ? stateCursorId : null
  };
  const initialRef = useRef21(true);
  useLazyLoadRange();
  useEffectWithChanges(
    () => {
      const componentState2 = getComponentState();
      if (typeof componentState2.data !== "function") {
        loadData(componentState2.data, componentState2, actions);
      }
    },
    { data }
  );
  useEffectWithChanges(
    (changes) => {
      const keys = Object.keys(changes);
      let appendWhenLivePagination = false;
      if (keys.length === 1) {
        appendWhenLivePagination = !!changes.cursorId;
        if (changes.filterValue && getComponentState().filterMode === "local") {
          return;
        }
      }
      const componentState2 = getComponentState();
      if (typeof componentState2.data === "function") {
        loadData(componentState2.data, componentState2, actions, {
          append: appendWhenLivePagination
        });
      }
    },
    __spreadProps(__spreadValues({}, depsObject), { data })
  );
  useEffectWithChanges(() => {
    const componentState2 = getComponentState();
    if (initialRef.current) {
      initialRef.current = false;
      const dataParams = buildDataSourceDataParams(componentState2);
      actions.dataParams = dataParams;
    }
  }, depsObject);
}
function useLazyLoadRange() {
  const {
    getComponentState,
    componentActions: actions,
    componentState
  } = useComponentState();
  useEffect19(() => {
    actions.lazyLoadCacheOfLoadedBatches = new DeepMap();
  }, [componentState.data, componentState.dataParams]);
  const {
    lazyLoadBatchSize,
    lazyLoad,
    originalLazyGroupDataChangeDetect,
    notifyRenderRangeChange,
    dataArray,
    groupRowsState,
    scrollStopDelayUpdatedByTable
  } = componentState;
  const latestRenderRangeRef = useRef21(null);
  const loadRange = (renderRange, cache = getComponentState().lazyLoadCacheOfLoadedBatches) => {
    const componentState2 = getComponentState();
    renderRange = renderRange || latestRenderRangeRef.current;
    if (!renderRange) {
      return;
    }
    const { renderStartIndex: startIndex, renderEndIndex: endIndex } = renderRange;
    const { lazyLoadBatchSize: lazyLoadBatchSize2, lazyLoad: lazyLoad2 } = componentState2;
    if (!lazyLoad2) {
      return;
    }
    if (!lazyLoadBatchSize2 || lazyLoadBatchSize2 <= 0) {
      if (!componentState2.groupBy || componentState2.groupBy.length === 0) {
        return;
      }
    }
    lazyLoadRange(
      {
        startIndex,
        endIndex,
        lazyLoadBatchSize: lazyLoadBatchSize2,
        componentState: componentState2,
        componentActions: actions
      },
      cache
    );
  };
  const debouncedLoadRange = useMemo7(
    () => debounce(loadRange, { wait: scrollStopDelayUpdatedByTable }),
    [scrollStopDelayUpdatedByTable]
  );
  useEffectWithChanges(
    (changes) => {
      if (lazyLoad) {
        if (changes.originalLazyGroupDataChangeDetect || changes.groupRowsState) {
          loadRange(notifyRenderRangeChange.get());
        }
        return notifyRenderRangeChange.onChange(
          (renderRange) => {
            latestRenderRangeRef.current = renderRange;
            loadRange(renderRange);
          }
        );
      }
      return;
    },
    {
      lazyLoadBatchSize,
      lazyLoad,
      originalLazyGroupDataChangeDetect,
      groupRowsState
    }
  );
  useEffect19(() => {
    if (lazyLoadBatchSize && lazyLoadBatchSize > 0) {
      debouncedLoadRange();
    }
  }, [dataArray]);
}
function lazyLoadRange(options, cache) {
  const {
    startIndex,
    endIndex,
    lazyLoadBatchSize,
    componentState,
    componentActions
  } = options;
  const { dataArray } = componentState;
  const isRowLoaded = (index) => {
    const rowInfo = dataArray[index];
    return rowInfo.data != null;
  };
  const perGroupFnCalls = new DeepMap();
  const rootGroupKeys = ["_______xxx______"];
  for (let i = startIndex; i <= endIndex; i++) {
    const rowInfo = dataArray[i];
    if (!rowInfo) {
      continue;
    }
    const rowLoaded = isRowLoaded(i);
    const theGroupKeys = rowInfo.dataSourceHasGrouping && rowInfo.groupKeys ? [...rowInfo.groupKeys] : [];
    if (rowInfo.isGroupRow && rowInfo.dataSourceHasGrouping && rowInfo.groupKeys) {
      theGroupKeys.pop();
    }
    const cacheKeys = theGroupKeys.length ? theGroupKeys : rootGroupKeys;
    const indexInGroup = rowInfo.dataSourceHasGrouping ? rowInfo.indexInGroup : rowInfo.indexInAll;
    if (rowInfo.isGroupRow && !rowInfo.collapsed && !rowInfo.childrenAvailable) {
      const currentFnCall = {
        lazyLoadStartIndex: 0,
        lazyLoadBatchSize,
        groupKeys: rowInfo.groupKeys
      };
      const cacheKeys2 = rowInfo.groupKeys;
      let cachedFnCalls = perGroupFnCalls.get(cacheKeys2);
      if (!(cachedFnCalls == null ? void 0 : cachedFnCalls[rowInfo.id])) {
        const shouldSetFnCalls = !cachedFnCalls;
        cachedFnCalls = cachedFnCalls || {};
        if (!cachedFnCalls[rowInfo.id]) {
          cachedFnCalls[rowInfo.id] = currentFnCall;
        }
        if (shouldSetFnCalls) {
          perGroupFnCalls.set(cacheKeys2, cachedFnCalls);
        }
      }
    }
    if (!rowLoaded && lazyLoadBatchSize != void 0) {
      let cachedFnCalls = perGroupFnCalls.get(cacheKeys);
      const batchStartIndexInGroup = Math.floor(indexInGroup / lazyLoadBatchSize) * lazyLoadBatchSize;
      const offset = indexInGroup - batchStartIndexInGroup;
      const absoluteIndexOfBatchStart = dataArray[rowInfo.indexInAll - offset].indexInAll;
      const batchStartRowLoaded = isRowLoaded(absoluteIndexOfBatchStart);
      const batchStartRowId = dataArray[absoluteIndexOfBatchStart].id;
      if (batchStartRowLoaded || (cachedFnCalls == null ? void 0 : cachedFnCalls[batchStartRowId])) {
        continue;
      }
      const shouldSetFnCalls = !cachedFnCalls;
      cachedFnCalls = cachedFnCalls || {};
      const currentFnCall = {
        lazyLoadStartIndex: batchStartIndexInGroup,
        lazyLoadBatchSize,
        groupKeys: theGroupKeys
      };
      if (!cachedFnCalls[batchStartRowId]) {
        cachedFnCalls[batchStartRowId] = currentFnCall;
      }
      if (shouldSetFnCalls) {
        perGroupFnCalls.set(cacheKeys, cachedFnCalls);
      }
    }
  }
  const initialPromise = Promise.resolve(true);
  const allFnCalls = [];
  perGroupFnCalls.topDownValues().forEach((record) => {
    allFnCalls.push(...Object.values(record));
  });
  allFnCalls.reduce((promise, fnCall) => {
    const cacheKey = [...fnCall.groupKeys, fnCall.lazyLoadStartIndex];
    if (cache && cache.has(cacheKey)) {
      return promise;
    }
    cache == null ? void 0 : cache.set(cacheKey, true);
    const args = [componentState.data, componentState, componentActions, fnCall];
    return promise.then(() => getRafPromise()).then(() => loadData(...args));
  }, initialPromise);
}

// src/components/DataSource/state/getInitialState.ts
init_esm_shims();

// src/components/utils/discardCallsWithEqualArg.ts
init_esm_shims();
var map = /* @__PURE__ */ new WeakMap();
var getCompareDefault = (a) => a;
function discardCallsWithEqualArg(fn, timeframe = 50, getCompareObject) {
  map.set(fn, {
    lastCallTime: 0,
    lastCallArg: null
  });
  const getCompare = getCompareObject != null ? getCompareObject : getCompareDefault;
  return (arg) => {
    const { lastCallTime, lastCallArg } = map.get(fn) || {
      lastCallTime: 0,
      lastCallArg: null
    };
    const now = Date.now();
    const diff = now - lastCallTime;
    const objectsEqual = shallowEqualObjects(
      getCompare(lastCallArg),
      getCompare(arg)
    );
    if (diff < timeframe && objectsEqual) {
      return;
    }
    map.set(fn, {
      lastCallTime: now,
      lastCallArg: arg
    });
    fn(arg);
  };
}

// src/components/DataSource/Indexer.ts
init_esm_shims();
var Indexer = class {
  constructor() {
    this.primaryKeyToData = /* @__PURE__ */ new Map();
    this.add = (primaryKey, data) => {
      this.primaryKeyToData.set(`${primaryKey}`, data);
    };
    this.clear = () => {
      this.primaryKeyToData.clear();
    };
    this.getDataForPrimaryKey = (primaryKey) => {
      return this.primaryKeyToData.get(`${primaryKey}`);
    };
    this.indexArray = (arr, options) => {
      const { cache, toPrimaryKey } = options;
      if (cache) {
        arr = arr.concat();
      }
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let deleted = false;
        if (item != null) {
          const pk = `${toPrimaryKey(item)}`;
          const cacheInfo = cache == null ? void 0 : cache.getMutationsForPrimaryKey(pk);
          if (cacheInfo && cacheInfo.length) {
            for (let cacheIndex = 0, cacheLength = cacheInfo.length; cacheIndex < cacheLength; cacheIndex++) {
              const info = cacheInfo[cacheIndex];
              if (info.type === "delete" && !deleted) {
                this.primaryKeyToData.delete(pk);
                deleted = true;
                arr.splice(i, 1);
              }
              if (info.type === "update" && !deleted) {
                item = __spreadValues(__spreadValues({}, item), info.data);
                arr[i] = item;
              }
              if (info.type === "insert") {
                const insertPK = `${toPrimaryKey(info.data)}`;
                this.add(insertPK, info.data);
                if (info.position === "before") {
                  arr.splice(i, 0, info.data);
                  i--;
                } else {
                  arr.splice(i + 1, 0, info.data);
                }
              }
            }
            cache == null ? void 0 : cache.removeInfo(pk);
          }
          if (!deleted) {
            this.add(pk, item);
          }
        }
      }
      return arr;
    };
  }
};

// src/components/DataSource/state/normalizeSortInfo.ts
init_esm_shims();
var EMPTY_ARRAY = Object.freeze(
  []
);
var normalizeSortInfo = (initialSortInfo, weakMap) => {
  const sortInfo = initialSortInfo != null ? initialSortInfo : EMPTY_ARRAY;
  const result = Array.isArray(sortInfo) ? sortInfo : [sortInfo];
  if (weakMap && weakMap.has(sortInfo)) {
    const prevResult = weakMap.get(sortInfo);
    if (prevResult && prevResult.length === result.length) {
      return prevResult;
    }
  }
  if (weakMap && sortInfo) {
    weakMap.set(sortInfo, result);
  }
  return result;
};

// src/components/DataSource/state/getInitialState.ts
var defaultCursorId = Symbol("cursorId");
function initSetupState() {
  const now = Date.now();
  const originalDataArray = [];
  const dataArray = [];
  const originalLazyGroupData = new DeepMap();
  return {
    // TODO cleanup indexer on unmount
    indexer: new Indexer(),
    idToIndexMap: /* @__PURE__ */ new Map(),
    // TODO: cleanup cache on unmount
    cache: void 0,
    originalDataArrayChanged: false,
    originalDataArrayChangedInfo: {
      timestamp: 0,
      mutations: void 0
    },
    lazyLoadCacheOfLoadedBatches: new DeepMap(),
    dataParams: void 0,
    notifyScrollbarsChange: buildSubscriptionCallback(),
    notifyScrollStop: buildSubscriptionCallback(),
    notifyRenderRangeChange: buildSubscriptionCallback(),
    pivotTotalColumnPosition: "end",
    pivotGrandTotalColumnPosition: false,
    scrollStopDelayUpdatedByTable: 100,
    originalLazyGroupData,
    originalLazyGroupDataChangeDetect: 0,
    originalDataArray,
    cursorId: defaultCursorId,
    showSeparatePivotColumnForSingleAggregation: false,
    propsCache: /* @__PURE__ */ new Map([
      ["sortInfo", /* @__PURE__ */ new WeakMap()]
    ]),
    rowInfoReducerResults: void 0,
    pivotMappings: void 0,
    pivotColumns: void 0,
    pivotColumnGroups: void 0,
    dataArray,
    unfilteredCount: dataArray.length,
    filteredCount: dataArray.length,
    updatedAt: now,
    groupedAt: 0,
    sortedAt: 0,
    filteredAt: 0,
    reducedAt: now,
    generateGroupRows: true,
    groupDeepMap: void 0,
    reducerResults: void 0,
    allRowsSelected: false,
    someRowsSelected: false,
    // selectedRowCount: 0,
    postSortDataArray: void 0,
    postGroupDataArray: void 0,
    lastSortDataArray: void 0,
    lastGroupDataArray: void 0
  };
}
function getCompareObjectForDataParams(dataParams) {
  const obj = __spreadValues({}, dataParams);
  delete obj.originalDataArray;
  return obj;
}
var forwardProps3 = (setupState) => {
  return {
    onDataParamsChange: (fn) => fn ? discardCallsWithEqualArg(fn, 100, getCompareObjectForDataParams) : void 0,
    lazyLoad: (lazyLoad) => !!lazyLoad,
    data: 1,
    pivotBy: 1,
    primaryKey: 1,
    livePagination: 1,
    refetchKey: (refetchKey) => refetchKey != null ? refetchKey : "",
    filterFunction: 1,
    filterValue: 1,
    useGroupKeysForMultiRowSelection: (useGroupKeysForMultiRowSelection) => useGroupKeysForMultiRowSelection != null ? useGroupKeysForMultiRowSelection : false,
    filterDelay: (filterDelay) => filterDelay != null ? filterDelay : 200,
    filterTypes: (filterTypes) => {
      return __spreadValues(__spreadValues({}, defaultFilterTypes2), filterTypes);
    },
    sortTypes: (sortTypes) => {
      return __spreadValues(__spreadValues({}, sortTypes_default), sortTypes);
    },
    sortFunction: 1,
    onReady: 1,
    rowInfoReducers: (reducers, state) => {
      const idToIndexReducer = {
        initialValue: () => {
          state.idToIndexMap.clear();
        },
        reducer: (_, rowInfo) => {
          state.idToIndexMap.set(rowInfo.id, rowInfo.indexInAll);
        }
      };
      return reducers ? __spreadProps(__spreadValues({}, reducers), {
        __idToIndex: idToIndexReducer
      }) : {
        __idToIndex: idToIndexReducer
      };
    },
    isRowSelected: 1,
    onDataArrayChange: 1,
    onDataMutations: 1,
    aggregationReducers: 1,
    collapseGroupRowsOnDataFunctionChange: (collapseGroupRowsOnDataFunctionChange) => collapseGroupRowsOnDataFunctionChange != null ? collapseGroupRowsOnDataFunctionChange : true,
    loading: (loading) => loading != null ? loading : false,
    sortInfo: (sortInfo) => normalizeSortInfo(sortInfo, setupState.propsCache.get("sortInfo")),
    groupBy: (groupBy) => groupBy != null ? groupBy : []
  };
};
function getLivePaginationCursorValue(livePaginationCursorProp, state) {
  const livePaginationCursor = typeof livePaginationCursorProp === "function" ? livePaginationCursorProp({
    array: state.originalDataArray,
    length: state.originalDataArray.length,
    lastItem: state.originalDataArray[state.originalDataArray.length - 1]
  }) : livePaginationCursorProp;
  return livePaginationCursor;
}
function deriveStateFromProps(params) {
  var _a, _b;
  const { props, state, oldState } = params;
  const controlledSort = isControlledValue(props.sortInfo);
  const controlledFilter = isControlledValue(props.filterValue);
  const { filterTypes } = state;
  const operatorsByFilterType = Object.keys(filterTypes).reduce((acc, key) => {
    const operators = filterTypes[key].operators;
    acc[key] = acc[key] || {};
    const currentFilterTypeOperators = acc[key];
    operators.forEach((operator) => {
      currentFilterTypeOperators[operator.name] = operator;
    });
    return acc;
  }, {});
  let selectionMode = props.selectionMode;
  if (selectionMode === void 0) {
    if (props.cellSelection !== void 0 || props.defaultCellSelection !== void 0) {
      selectionMode = "multi-cell";
    } else {
      const rowSelectionProp = props.rowSelection !== void 0 ? props.rowSelection : props.defaultRowSelection;
      if (rowSelectionProp !== void 0) {
        if (rowSelectionProp && typeof rowSelectionProp === "object") {
          selectionMode = "multi-row";
        } else {
          selectionMode = "single-row";
        }
      }
      selectionMode = selectionMode != null ? selectionMode : false;
    }
  }
  let rowSelectionState = null;
  let currentRowSelection = props.rowSelection !== void 0 ? props.rowSelection : state.rowSelection === void 0 ? props.defaultRowSelection !== void 0 ? props.defaultRowSelection : null : state.rowSelection;
  if (selectionMode !== false) {
    if (selectionMode === "single-row" || selectionMode === "multi-row") {
      if (currentRowSelection === null) {
        rowSelectionState = selectionMode === "single-row" ? null : new RowSelectionState(
          {
            selectedRows: [],
            deselectedRows: [],
            defaultSelection: false
          },
          rowSelectionStateConfigGetter(state)
        );
      } else {
        rowSelectionState = selectionMode === "single-row" ? currentRowSelection : currentRowSelection instanceof RowSelectionState ? currentRowSelection : new RowSelectionState(
          currentRowSelection,
          rowSelectionStateConfigGetter(state)
        );
      }
    }
  }
  const primaryKeyDescriptor = state.primaryKey;
  const toPrimaryKey = typeof primaryKeyDescriptor === "function" ? (data) => primaryKeyDescriptor(data) : (data) => data[primaryKeyDescriptor];
  let groupRowsState = props.groupRowsState || state.groupRowsState || props.defaultGroupRowsState;
  if (groupRowsState && !(groupRowsState instanceof GroupRowsState)) {
    groupRowsState = new GroupRowsState(groupRowsState);
  }
  groupRowsState = groupRowsState || new GroupRowsState(
    state.lazyLoad ? { expandedRows: [], collapsedRows: true } : {
      expandedRows: true,
      collapsedRows: []
    }
  );
  const result = {
    selectionMode,
    groupRowsState,
    // for whatever reason I had to do this cast to appease TS
    rowSelection: rowSelectionState,
    toPrimaryKey,
    operatorsByFilterType,
    controlledSort,
    controlledFilter,
    sortMode: props.sortFunction ? "local" : (_a = props.sortMode) != null ? _a : controlledSort ? "remote" : "local",
    filterMode: typeof props.filterFunction === "function" ? "local" : (_b = props.filterMode) != null ? _b : typeof props.data === "function" ? "remote" : "local",
    multiSort: Array.isArray(
      controlledSort ? props.sortInfo : props.defaultSortInfo
    ),
    lazyLoadBatchSize: typeof props.lazyLoad === "object" ? props.lazyLoad.batchSize : void 0
  };
  if (props.livePagination) {
    const dataArrayChanged = !oldState || oldState.originalDataArray !== state.originalDataArray;
    const livePaginationCursor = typeof props.livePaginationCursor === "function" ? dataArrayChanged ? getLivePaginationCursorValue(props.livePaginationCursor, state) : state.livePaginationCursor : props.livePaginationCursor;
    result.livePaginationCursor = livePaginationCursor;
  }
  return result;
}
var debugFullLazyLoad = dbg("DataSource:fullLazyLoad");
function onPropChange(params, props, actions) {
  const { name, newValue } = params;
  if (name === "data" && typeof newValue === "function" && !props.groupRowsState) {
    if (props.lazyLoad) {
      debugFullLazyLoad(`"data" function prop has changed`);
    }
    if (props.collapseGroupRowsOnDataFunctionChange !== false) {
      actions.groupRowsState = new GroupRowsState({
        collapsedRows: true,
        expandedRows: []
      });
    }
  }
}
var debugDataParams = dbg("DataSource:dataParams");
function getMappedCallbacks() {
  return {
    rowSelection: (rowSelection, state) => {
      if (state.selectionMode === "single-row") {
        return {
          callbackParams: [
            rowSelection,
            "single-row"
          ]
        };
      }
      return {
        callbackParams: [
          rowSelection.getState(),
          "multi-row"
        ]
      };
    }
  };
}
function getInterceptActions() {
  return {
    sortInfo: (sortInfo, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        sortInfo,
        livePaginationCursor: null
      });
      actions.dataParams = dataParams;
      if (state.livePagination) {
        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    groupBy: (groupBy, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        groupBy,
        livePaginationCursor: null
      });
      actions.dataParams = dataParams;
      if (state.livePagination) {
        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    pivotBy: (pivotBy, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        pivotBy,
        livePaginationCursor: null
      });
      actions.dataParams = dataParams;
      if (state.livePagination) {
        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    filterValue: (filterValue, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        filterValue,
        livePaginationCursor: null
      });
      actions.dataParams = dataParams;
      if (state.livePagination) {
        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    cursorId: (cursorId, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        __cursorId: cursorId
      });
      actions.dataParams = dataParams;
    },
    livePaginationCursor: (livePaginationCursor, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        livePaginationCursor
      });
      actions.dataParams = dataParams;
    },
    dataParams: (dataParams, { state }) => {
      if (shallowEqualObjects(
        dataParams,
        state.dataParams,
        /* @__PURE__ */ new Set([
          "changes",
          "originalDataArray"
        ])
      )) {
        return false;
      }
      debugDataParams(
        "onDataParamsChange triggered because the following values have changed",
        dataParams == null ? void 0 : dataParams.changes
      );
      return true;
    }
  };
}

// src/components/DataSource/types.ts
init_esm_shims();
var DataSourceActionType = /* @__PURE__ */ ((DataSourceActionType2) => {
  DataSourceActionType2["INIT"] = "INIT";
  return DataSourceActionType2;
})(DataSourceActionType || {});

// src/components/DataSource/index.tsx
function DataSourceWithContext(props) {
  let { children } = props;
  const { api, componentState } = useDataSourceContextValue();
  if (typeof children === "function") {
    children = children(componentState);
  }
  useEffect20(() => {
    var _a;
    (_a = componentState.onReady) == null ? void 0 : _a.call(componentState, api);
  }, []);
  return /* @__PURE__ */ React50.createElement(React50.Fragment, null, children);
}
var DataSourceRoot = getComponentStateRoot({
  //@ts-ignore
  initSetupState,
  //@ts-ignore
  forwardProps: forwardProps3,
  //@ts-ignore
  concludeReducer,
  //@ts-ignore
  mapPropsToState: deriveStateFromProps,
  //@ts-ignore
  onPropChange,
  //@ts-ignore
  interceptActions: getInterceptActions(),
  //@ts-ignore
  mappedCallbacks: getMappedCallbacks()
});
function DataSourceCmp({ children }) {
  const DataSourceContext = getDataSourceContext();
  const { componentState, componentActions } = useComponentState();
  const getState = useLatest(componentState);
  const [api] = React50.useState(() => {
    return getDataSourceApi({ getState, actions: componentActions });
  });
  const contextValue = {
    componentState,
    componentActions,
    getState,
    api
  };
  if (false) {
    globalThis.getDataSourceState = getState;
    globalThis.dataSourceActions = componentActions;
    globalThis.dataSourceApi = api;
  }
  useLoadData();
  useEffect20(() => {
    var _a;
    (_a = componentState.onDataArrayChange) == null ? void 0 : _a.call(
      componentState,
      componentState.originalDataArray,
      componentState.originalDataArrayChangedInfo
    );
    if (componentState.onDataMutations && componentState.originalDataArrayChangedInfo.mutations) {
      componentState.onDataMutations({
        primaryKeyField: typeof componentState.primaryKey === "string" ? componentState.primaryKey : void 0,
        dataArray: componentState.originalDataArray,
        mutations: componentState.originalDataArrayChangedInfo.mutations,
        timestamp: componentState.originalDataArrayChangedInfo.timestamp
      });
    }
  }, [componentState.originalDataArrayChangedInfo]);
  return /* @__PURE__ */ React50.createElement(DataSourceContext.Provider, { value: contextValue }, /* @__PURE__ */ React50.createElement(DataSourceWithContext, { children }));
}
function DataSource(props) {
  return /* @__PURE__ */ React50.createElement(DataSourceRoot, __spreadValues({}, props), /* @__PURE__ */ React50.createElement(DataSourceCmp, { children: props.children }));
}
function useRowInfoReducers() {
  const { rowInfoReducerResults } = useDataSource();
  return rowInfoReducerResults;
}

// src/components/InfiniteTable/api/realignColumnContextMenu.ts
init_esm_shims();
function realignColumnContextMenu(param) {
  const { getComputed, getState, actions } = param;
  const columnMenuVisibleForColumnId = getState().columnMenuVisibleForColumnId;
  if (!columnMenuVisibleForColumnId) {
    return;
  }
  const computed = getComputed();
  const visibleCols = computed.computedVisibleColumnsMap;
  const order2 = computed.computedColumnOrder;
  if (visibleCols.has(columnMenuVisibleForColumnId)) {
    actions.columnMenuVisibleKey = Date.now();
    return;
  }
  function tryCol(diff2, sign2) {
    const colId2 = order2[index + diff2 * sign2];
    const col = visibleCols.get(colId2);
    if (col && col.renderMenuIcon !== false) {
      return colId2;
    }
    return;
  }
  const index = order2.indexOf(columnMenuVisibleForColumnId);
  let diff = 0;
  let sign = -1;
  let colId;
  while (!colId && diff < order2.length) {
    diff++;
    colId = tryCol(diff, sign);
    if (!colId) {
      sign *= -1;
      colId = tryCol(diff, sign);
    }
    if (colId) {
      break;
    }
  }
  if (colId) {
    actions.columnMenuVisibleForColumnId = colId;
  }
  return colId;
}

// src/components/InfiniteTable/types/Utility.ts
init_esm_shims();
function notNullable(value) {
  if (value === null || value === void 0)
    return false;
  const testDummyForCompileError = value;
  return true;
}

// src/components/InfiniteTable/api/getImperativeApi.ts
function isSortInfoForColumn(sortInfo, col) {
  if (sortInfo.id) {
    if (sortInfo.id === col.id) {
      return true;
    }
    return false;
  }
  if (sortInfo.field) {
    if (sortInfo.field === col.field) {
      return true;
    }
  }
  return false;
}
var InfiniteTableApiImpl = class {
  constructor(context) {
    this.getColumnOrder = () => {
      return this.getComputed().computedColumnOrder;
    };
    this.getVisibleColumnOrder = () => {
      const order2 = this.getColumnOrder();
      const visibleColumns = this.getComputed().computedVisibleColumnsMap;
      return order2.filter((id) => visibleColumns.has(id));
    };
    this.persistEdit = (arg) => __async(this, null, function* () {
      var _a, _b;
      arg = arg != null ? arg : {};
      const { editingCell, editingValueRef } = this.getState();
      if (!editingCell) {
        return Promise.resolve(new Error("no edit in progress"));
      }
      yield new Promise((resolve) => requestAnimationFrame(resolve));
      const column = this.getComputed().computedColumnsMap.get(
        editingCell.columnId
      );
      const value = (_a = arg.value) != null ? _a : editingCell.value;
      if (!editingCell.active && editingCell.waiting !== "persist") {
        this.actions.editingCell = __spreadProps(__spreadValues({}, editingCell), {
          active: false,
          waiting: "persist"
        });
      }
      const params = __spreadProps(__spreadValues({}, getCellContext(__spreadProps(__spreadValues({
        rowIndex: editingCell.rowIndex,
        columnId: editingCell.columnId
      }, this.context), {
        api: this
      }))), {
        value,
        initialValue: editingCell.initialValue
      });
      let valueToPersist = value;
      editingValueRef.current = null;
      if (column.getValueToPersist) {
        valueToPersist = yield column.getValueToPersist(params);
      }
      params.value = valueToPersist;
      editingCell.value = valueToPersist;
      const persistEdit = (_b = this.getState().persistEdit) != null ? _b : () => {
        if (!params.column.field) {
          return value;
        }
        const primaryKey = this.getDataSourceState().primaryKey;
        const newData = params.data && typeof primaryKey === "string" ? {
          [primaryKey]: params.data[primaryKey],
          [params.column.field]: valueToPersist
        } : __spreadProps(__spreadValues({}, params.data), {
          [params.column.field]: valueToPersist
        });
        return this.context.dataSourceApi.updateData(newData);
      };
      let response;
      try {
        response = yield persistEdit(params);
      } catch (err2) {
        response = err2;
      }
      const persisted = response instanceof Error ? response : true;
      this.actions.editingCell = __spreadProps(__spreadValues({}, editingCell), {
        active: false,
        accepted: false,
        waiting: false,
        persisted
      });
      return Promise.resolve(persisted);
    });
    this.clearEditInfo = () => {
      this.actions.editingCell = null;
    };
    this.isEditInProgress = () => {
      const { editingCell } = this.getState();
      return editingCell ? editingCell.active : false;
    };
    this.isEditorVisibleForCell = (params) => {
      const { rowIndex, columnId } = params;
      const { dataArray } = this.getDataSourceState();
      const { editingCell } = this.getState();
      const rowInfo = dataArray[rowIndex];
      if (!rowInfo || !editingCell) {
        return false;
      }
      return editingCell.columnId === columnId && editingCell.primaryKey === rowInfo.id && !!(editingCell.active || editingCell.waiting);
    };
    this.confirmEdit = (value) => {
      return this.stopEdit({ value });
    };
    this.stopEdit = (params) => __async(this, null, function* () {
      var _a, _b;
      const state = this.getState();
      const { editingCell, editingValueRef } = state;
      if (!editingCell) {
        return true;
      }
      if (!params) {
        params = {};
      }
      const value = (_a = params.value) != null ? _a : editingValueRef.current;
      if (!params.cancel && !params.reject) {
        const { rowIndex, columnId } = editingCell;
        this.actions.editingCell = __spreadProps(__spreadValues({}, state.editingCell), {
          value,
          active: false,
          waiting: "accept"
        });
        const { computedColumnsMap: columnsMap } = this.getComputed();
        const column = columnsMap.get(columnId);
        const shouldAcceptEdit = (_b = state.shouldAcceptEdit) != null ? _b : column.shouldAcceptEdit;
        let accept = shouldAcceptEdit ? shouldAcceptEdit(__spreadProps(__spreadValues({}, getCellContext(__spreadProps(__spreadValues({}, this.context), {
          api: this,
          dataSourceApi: this.context.dataSourceApi,
          columnId,
          rowIndex
        }))), {
          value,
          initialValue: editingCell.initialValue
        })) : true;
        yield new Promise((resolve) => requestAnimationFrame(resolve));
        return Promise.resolve(accept).then((accepted) => {
          if (accepted === true) {
            this.actions.editingCell = __spreadProps(__spreadValues({}, state.editingCell), {
              active: false,
              accepted: true,
              persisted: false,
              waiting: "persist",
              value
            });
            return true;
          }
          throw accepted;
        }).catch((err2) => {
          if (!(err2 instanceof Error)) {
            err2 = new Error(`Edit rejected: ${err2}`);
          }
          this.actions.editingCell = __spreadProps(__spreadValues({}, editingCell), {
            value,
            persisted: false,
            active: false,
            waiting: false,
            accepted: err2
          });
          return { reject: err2, value };
        });
      }
      if (params.cancel && (editingCell == null ? void 0 : editingCell.active)) {
        this.actions.editingCell = __spreadProps(__spreadValues({}, editingCell), {
          active: false,
          cancelled: true,
          waiting: false,
          persisted: false
        });
        return { cancel: true, value };
      }
      if (params.reject && (editingCell == null ? void 0 : editingCell.active)) {
        this.actions.editingCell = __spreadProps(__spreadValues({}, editingCell), {
          value,
          active: false,
          persisted: false,
          waiting: false,
          accepted: params.reject
        });
        return { reject: params.reject, value };
      }
      return true;
    });
    this.cancelEdit = () => {
      return this.stopEdit({ cancel: true });
    };
    this.rejectEdit = (reason) => {
      return this.stopEdit({ reject: reason });
    };
    this.isCellEditable = (params) => {
      const { rowIndex: index, primaryKey, columnId } = params;
      const rowIndex = index != null ? index : this.context.dataSourceApi.getIndexByPrimaryKey(primaryKey);
      const { computedColumnsMap: columnsMap } = this.getComputed();
      const column = columnsMap.get(columnId);
      if (!column || !column.computedEditable || column.groupByForColumn) {
        return Promise.resolve(false);
      }
      const rowInfo = this.getDataSourceState().dataArray[rowIndex];
      if (!rowInfo || rowInfo.isGroupRow) {
        return Promise.resolve(false);
      }
      if (column.computedEditable === true) {
        return Promise.resolve(true);
      }
      const result = column.computedEditable(
        getCellContext(__spreadProps(__spreadValues({}, this.context), {
          api: this,
          columnId,
          rowIndex
        }))
      );
      if (typeof result === "boolean") {
        return Promise.resolve(result);
      }
      return result;
    };
    this.getColumnApi = (columnIdOrIndex) => {
      return getColumnApiForColumn(columnIdOrIndex, __spreadProps(__spreadValues({}, this.context), {
        api: this
      }));
    };
    this.isColumnSortable = (columnId) => {
      var _a, _b;
      return (_b = (_a = this.getColumnApi(columnId)) == null ? void 0 : _a.isSortable()) != null ? _b : false;
    };
    this.getCellValue = (cellLocator) => {
      var _a, _b;
      return (_b = (_a = this.getCellValues(cellLocator)) == null ? void 0 : _a.value) != null ? _b : null;
    };
    this.getCellValues = (cellLocator) => {
      const { rowIndex: index, primaryKey, columnId } = cellLocator;
      const { dataSourceApi } = this.context;
      const { computedColumnsMap } = this.getComputed();
      const rowIndex = index != null ? index : dataSourceApi.getIndexByPrimaryKey(primaryKey);
      const column = computedColumnsMap.get(columnId);
      const rowInfo = dataSourceApi.getRowInfoByIndex(rowIndex);
      const id = rowInfo == null ? void 0 : rowInfo.id;
      if (!rowInfo || !column) {
        if (!column) {
          console.warn(`No column found with id: "${columnId}"`);
        }
        if (!rowInfo) {
          console.warn(
            `No row found with index: "${rowIndex}" or primary key: "${id}"`
          );
        }
        return null;
      }
      const self = this;
      const valueContext = getFormattedValueContextForCell({
        column,
        rowInfo,
        columnsMap: computedColumnsMap,
        context: __spreadProps(__spreadValues({}, this.context), { api: self })
      });
      return {
        value: valueContext.formattedValueContext.value,
        formattedValue: valueContext.formattedValue,
        rawValue: valueContext.formattedValueContext.rawValue
      };
    };
    this.getVerticalRenderRange = () => {
      const range = this.getState().brain.getRenderRange();
      return {
        renderStartIndex: range.start[0],
        renderEndIndex: range.end[0]
      };
    };
    this.setColumnOrder = (columnOrder) => {
      this.actions.columnOrder = columnOrder;
    };
    this.collapseAllGroupRows = () => {
      const state = this.getDataSourceState();
      const newState = new GroupRowsState(state.groupRowsState);
      newState.collapseAll();
      this.dataSourceActions.groupRowsState = newState;
    };
    this.collapseGroupRow = (groupKeys) => {
      const state = this.getDataSourceState();
      if (state.groupRowsState.isGroupRowExpanded(groupKeys)) {
        this.toggleGroupRow(groupKeys);
        return true;
      }
      return false;
    };
    this.expandGroupRow = (groupKeys) => {
      const state = this.getDataSourceState();
      if (state.groupRowsState.isGroupRowCollapsed(groupKeys)) {
        this.toggleGroupRow(groupKeys);
        return true;
      }
      return false;
    };
    this.toggleGroupRow = (groupKeys) => {
      const state = this.getDataSourceState();
      const newState = new GroupRowsState(state.groupRowsState);
      newState.toggleGroupRow(groupKeys);
      this.dataSourceActions.groupRowsState = newState;
      if (state.lazyLoad) {
        const dataKeys = [LAZY_ROOT_KEY_FOR_GROUPS, ...groupKeys];
        const currentData = state.originalLazyGroupData.get(dataKeys);
        if (newState.isGroupRowExpanded(groupKeys)) {
          if (!(currentData == null ? void 0 : currentData.cache)) {
            loadData(state.data, state, this.dataSourceActions, {
              groupKeys
            });
          }
        } else {
          if (!(currentData == null ? void 0 : currentData.cache)) {
            const keysToDelete = state.lazyLoadCacheOfLoadedBatches.getKeysStartingWith(groupKeys);
            keysToDelete.forEach((keys) => {
              state.lazyLoadCacheOfLoadedBatches.delete(keys);
            });
            this.dataSourceActions.lazyLoadCacheOfLoadedBatches = DeepMap.clone(
              state.lazyLoadCacheOfLoadedBatches
            );
            state.originalLazyGroupData.delete(dataKeys);
            this.dataSourceActions.originalLazyGroupDataChangeDetect = getChangeDetect();
          }
        }
      }
    };
    this.toggleSortingForColumn = (columnId, options) => {
      const col = this.getComputed().computedColumnsMap.get(columnId);
      if (!col) {
        return;
      }
      let dir = this.getSortingForColumn(columnId);
      if (dir === null) {
        dir = 1;
      } else {
        dir = dir === 1 ? -1 : null;
      }
      this.setSortingForColumn(columnId, dir, options);
    };
    this.getState = () => {
      return this.context.getState();
    };
    this.getComputed = () => {
      return this.context.getComputed();
    };
    this.getDataSourceState = () => this.context.getDataSourceState();
    this.scrollCellIntoView = (rowIndex, colIdOrIndex, config = { offset: 0 }) => {
      const state = this.getState();
      const computed = this.getComputed();
      let colIndex = colIdOrIndex;
      if (typeof colIdOrIndex === "string") {
        const computedColumn = computed.computedVisibleColumnsMap.get(colIdOrIndex);
        if (!computedColumn) {
          return false;
        }
        colIndex = computedColumn.computedVisibleIndex;
      }
      const scrollPositionForCol = state.renderer.getScrollPositionForScrollColumnIntoView(colIndex, config);
      const scrollPositionForRow = state.renderer.getScrollPositionForScrollRowIntoView(rowIndex, config);
      if (!scrollPositionForCol || !scrollPositionForRow) {
        return false;
      }
      const newScrollPosition = {
        scrollLeft: scrollPositionForCol.scrollLeft,
        scrollTop: scrollPositionForRow.scrollTop
      };
      const currentScrollPosition = state.brain.getScrollPosition();
      const scrollLeftMax = state.brain.scrollLeftMax;
      const scrollTopMax = state.brain.scrollTopMax;
      if (scrollLeftMax < 0 && scrollTopMax < 0) {
        return true;
      }
      const cantScrollLeft = newScrollPosition.scrollLeft > scrollLeftMax + (config.offset || 0);
      const cantScrollTop = newScrollPosition.scrollTop > scrollTopMax + (config.offset || 0);
      if (cantScrollLeft && cantScrollTop) {
        return false;
      }
      if (newScrollPosition.scrollLeft !== currentScrollPosition.scrollLeft && !cantScrollLeft) {
        state.scrollerDOMRef.current.scrollLeft = newScrollPosition.scrollLeft;
      }
      if (newScrollPosition.scrollTop !== currentScrollPosition.scrollTop && !cantScrollTop) {
        state.scrollerDOMRef.current.scrollTop = newScrollPosition.scrollTop;
      }
      return true;
    };
    this.context = context;
    this.selectionApi = getSelectionApi({
      dataSourceActions: context.dataSourceActions,
      getDataSourceState: context.getDataSourceState
    });
  }
  get actions() {
    return this.context.actions;
  }
  get dataSourceActions() {
    return this.context.dataSourceActions;
  }
  get dataSourceApi() {
    return this.context.dataSourceApi;
  }
  focus() {
    var _a;
    (_a = this.getState().scrollerDOMRef.current) == null ? void 0 : _a.focus();
  }
  hideContextMenu() {
    this.actions.contextMenuVisibleFor = null;
    this.actions.cellContextMenuVisibleFor = null;
  }
  realignColumnContextMenu(callback) {
    const param = {
      actions: this.actions,
      getState: this.getState,
      getComputed: this.getComputed
    };
    const delay = this.getState().columnMenuRealignDelay;
    if (!delay || delay < 0) {
      realignColumnContextMenu(param);
      callback == null ? void 0 : callback();
    }
    setTimeout(() => {
      if (this.isDestroyed()) {
        return;
      }
      realignColumnContextMenu(param);
      callback == null ? void 0 : callback();
    }, delay);
  }
  isDestroyed() {
    return !this.getState().domRef.current;
  }
  startEdit(params) {
    return __async(this, null, function* () {
      const { columnId, rowIndex: index, primaryKey } = params;
      const rowIndex = index != null ? index : this.context.dataSourceApi.getIndexByPrimaryKey(primaryKey);
      return this.isCellEditable({
        rowIndex,
        columnId
      }).then((editable) => __async(this, null, function* () {
        var _a;
        if (editable) {
          const dataArray = this.getDataSourceState().dataArray;
          const columnsMap = this.getComputed().computedColumnsMap;
          const column = columnsMap.get(columnId);
          const rowInfo = dataArray[rowIndex];
          let value = getColumnValueToEdit({
            column,
            rowInfo
            // columnsMap,
            // fieldsToColumn,
            // context: {
            //   actions: this.actions,
            //   getState: this.getState,
            //   getDataSourceState: this.getDataSourceState,
            //   api: this,
            //   dataSourceApi: this.context.dataSourceApi,
            // },
          });
          const initialValue = value;
          if (column.getValueToEdit) {
            value = yield column.getValueToEdit(
              getCellContext(__spreadProps(__spreadValues({}, this.context), {
                rowIndex,
                columnId,
                api: this
              }))
            );
          }
          this.actions.editingCell = {
            active: true,
            accepted: false,
            persisted: false,
            columnId,
            value,
            initialValue,
            rowIndex,
            primaryKey: (_a = dataArray[rowIndex]) == null ? void 0 : _a.id
          };
        }
        return editable;
      }));
    });
  }
  setSortingForColumn(columnId, dir, options) {
    const { computedColumnsMap } = this.getComputed();
    const c = computedColumnsMap.get(columnId);
    if (!c) {
      return;
    }
    const currentSorting = this.getSortingForColumn(columnId);
    if (currentSorting === dir) {
      if (this.getDataSourceState().multiSort === false) {
        return;
      }
    }
    if (dir === null) {
      this.setSortInfoForColumn(columnId, null, options);
      return;
    }
    const groupByForColumn = c.groupByForColumn;
    let field = c.field;
    const groupByForCol = groupByForColumn ? Array.isArray(groupByForColumn) ? groupByForColumn : [groupByForColumn] : [];
    const fieldArr = groupByForCol.map((c2) => {
      var _a;
      return c2.valueGetter ? (item) => c2.valueGetter({ data: item, field: c2.field }) : c2.field ? c2.field : (_a = c2.groupField) != null ? _a : void 0;
    }).filter(notNullable);
    if (fieldArr.length) {
      field = fieldArr;
    }
    let computedSortType = c.computedSortType;
    if (groupByForCol.length && computedSortType === UNKNOWN_SORT_TYPE) {
      const sortTypeForGroupCols = groupByForCol.flatMap((groupBy) => {
        var _a;
        const field2 = (_a = groupBy.field) != null ? _a : groupBy.groupField;
        const col = field2 ? computedColumnsMap.get(field2) : null;
        if (!col) {
          return UNKNOWN_SORT_TYPE;
        }
        return col.computedSortType;
      });
      computedSortType = sortTypeForGroupCols;
    }
    const newColumnSortInfo = {
      dir,
      id: c.id,
      field,
      type: computedSortType
    };
    if (c.valueGetter) {
      newColumnSortInfo.valueGetter = (data) => c.valueGetter({ data, field: c.field });
    }
    this.setSortInfoForColumn(columnId, newColumnSortInfo, options);
  }
  setSortInfoForColumn(columnId, columnSortInfo, options) {
    var _a, _b, _c;
    const dataSourceState = this.getDataSourceState();
    const col = this.getComputed().computedColumnsMap.get(columnId);
    if (!col) {
      return;
    }
    if (!dataSourceState.multiSort) {
      this.dataSourceApi.setSortInfo(columnSortInfo ? [columnSortInfo] : null);
      return;
    }
    const colField = col.field;
    const colInfo = {
      id: columnId,
      field: colField
    };
    let newSortInfo = (_b = (_a = dataSourceState.sortInfo) == null ? void 0 : _a.slice()) != null ? _b : [];
    if (columnSortInfo === null) {
      newSortInfo = newSortInfo.filter(
        (sortInfo) => !isSortInfoForColumn(sortInfo, colInfo)
      );
      this.dataSourceApi.setSortInfo(newSortInfo);
      return;
    }
    let matched = false;
    const multiSortBehavior = (_c = options == null ? void 0 : options.multiSortBehavior) != null ? _c : this.getState().multiSortBehavior;
    if (multiSortBehavior === "replace") {
      this.dataSourceApi.setSortInfo([columnSortInfo]);
      return;
    }
    newSortInfo = newSortInfo.map((sortInfo) => {
      if (matched) {
        return sortInfo;
      }
      if (isSortInfoForColumn(sortInfo, colInfo)) {
        matched = true;
        return columnSortInfo;
      }
      return sortInfo;
    });
    if (!matched) {
      newSortInfo.push(columnSortInfo);
    }
    this.dataSourceApi.setSortInfo(newSortInfo);
  }
  getSortTypeForColumn(columnId) {
    const col = this.getComputed().computedColumnsMap.get(columnId);
    if (!col) {
      return null;
    }
    return col.computedSortType;
  }
  getSortInfoForColumn(columnId) {
    const col = this.getComputed().computedColumnsMap.get(columnId);
    if (!col) {
      return null;
    }
    return col.computedSortInfo;
  }
  getSortingForColumn(columnId) {
    const sortInfo = this.getSortInfoForColumn(columnId);
    if (!sortInfo) {
      return null;
    }
    return sortInfo.dir;
  }
  setPinningForColumn(columnId, pinning) {
    const columnPinning = __spreadValues({}, this.getState().columnPinning);
    if (pinning === false) {
      delete columnPinning[columnId];
    } else {
      columnPinning[columnId] = pinning;
    }
    this.actions.columnPinning = columnPinning;
  }
  setColumnFilter(columnId, filterValue) {
    const col = this.getComputed().computedColumnsMap.get(columnId);
    if (!col) {
      return;
    }
    const dataSourceState = this.getDataSourceState();
    const { filterTypes } = dataSourceState;
    let newFilterValueForColumn;
    if (col.computedFilterValue) {
      newFilterValueForColumn = __spreadProps(__spreadValues({}, col.computedFilterValue), {
        filter: __spreadValues({}, col.computedFilterValue.filter)
      });
    } else {
      const filterType = col.computedFilterType;
      if (!filterTypes[filterType]) {
        return;
      }
      const filterValueForColumn = {
        filter: {
          type: filterType,
          value: filterValue,
          operator: filterTypes[filterType].defaultOperator
        },
        valueGetter: col.valueGetter
      };
      if (col.field || typeof col.groupByForColumn === "string") {
        filterValueForColumn.field = col.field || col.groupByForColumn;
      } else {
        filterValueForColumn.id = col.id;
      }
      newFilterValueForColumn = filterValueForColumn;
    }
    newFilterValueForColumn.filter.value = filterValue;
    this.setFilterValueForColumn(columnId, newFilterValueForColumn);
  }
  setColumnFilterOperator(columnId, newOperator) {
    var _a, _b;
    const col = this.getComputed().computedColumnsMap.get(columnId);
    if (!col) {
      return;
    }
    const dataSourceState = this.getDataSourceState();
    const { filterTypes } = dataSourceState;
    const filterType = col.computedFilterType;
    const operator = (_b = (_a = filterTypes[filterType].operators.find((op) => op.name === newOperator)) == null ? void 0 : _a.name) != null ? _b : filterTypes[filterType].defaultOperator;
    let newFilterValueForColumn;
    if (col.computedFilterValue) {
      newFilterValueForColumn = __spreadProps(__spreadValues({}, col.computedFilterValue), {
        filter: __spreadProps(__spreadValues({}, col.computedFilterValue.filter), {
          operator
        })
      });
    } else {
      newFilterValueForColumn = {
        filter: {
          operator,
          type: filterType,
          value: [...filterTypes[filterType].emptyValues.values()][0]
        },
        valueGetter: col.valueGetter
      };
      if (col.field) {
        newFilterValueForColumn.field = col.field;
      } else {
        newFilterValueForColumn.id = col.id;
      }
    }
    this.setFilterValueForColumn(columnId, newFilterValueForColumn);
  }
  setFilterValueForColumn(columnId, filterValue) {
    var _a;
    const column = this.getComputed().computedColumnsMap.get(columnId);
    if (!column) {
      return;
    }
    const state = this.getDataSourceState();
    let newFilterValue = (_a = state.filterValue) != null ? _a : [];
    let found = false;
    newFilterValue = newFilterValue.map((currentFilterValue) => {
      if (currentFilterValue === column.computedFilterValue) {
        found = true;
        return filterValue;
      }
      return currentFilterValue;
    });
    if (!found) {
      newFilterValue.push(filterValue);
    }
    this.dataSourceActions.filterValue = newFilterValue;
  }
  clearColumnFilter(columnId) {
    var _a;
    const column = this.getComputed().computedColumnsMap.get(columnId);
    if (!column) {
      return;
    }
    const state = this.getDataSourceState();
    let newFilterValue = (_a = state.filterValue) != null ? _a : [];
    let found = false;
    newFilterValue = newFilterValue.filter((currentFilterValue) => {
      if (currentFilterValue === column.computedFilterValue) {
        found = true;
        return false;
      }
      return true;
    });
    if (found) {
      this.dataSourceActions.filterValue = newFilterValue;
    }
  }
  setVisibilityForColumn(columnId, visible) {
    const columnVisibility = __spreadValues({}, this.getState().columnVisibility);
    if (visible) {
      delete columnVisibility[columnId];
    } else {
      columnVisibility[columnId] = false;
    }
    this.actions.columnVisibility = columnVisibility;
  }
  getVisibleColumnsCount() {
    return this.getComputed().computedVisibleColumns.length;
  }
  setColumnVisibility(columnVisibility) {
    this.actions.columnVisibility = columnVisibility;
  }
  get scrollLeft() {
    const state = this.getState();
    return state.brain.getScrollPosition().scrollLeft;
  }
  set scrollLeft(scrollLeft2) {
    const state = this.getState();
    state.scrollerDOMRef.current.scrollLeft = Math.max(scrollLeft2, 0);
  }
  get scrollTop() {
    const state = this.getState();
    return state.brain.getScrollPosition().scrollTop;
  }
  set scrollTop(scrollTop2) {
    const state = this.getState();
    state.scrollerDOMRef.current.scrollTop = Math.max(scrollTop2, 0);
  }
  scrollRowIntoView(rowIndex, config = { offset: 0 }) {
    const state = this.getState();
    const scrollPosition = state.renderer.getScrollPositionForScrollRowIntoView(
      rowIndex,
      config
    );
    if (!scrollPosition) {
      return false;
    }
    const currentScrollPosition = state.brain.getScrollPosition();
    const scrollTopMax = state.brain.scrollTopMax;
    if (scrollPosition.scrollTop > scrollTopMax + (config.offset || 0)) {
      return false;
    }
    if (scrollPosition.scrollTop !== currentScrollPosition.scrollTop) {
      state.scrollerDOMRef.current.scrollTop = scrollPosition.scrollTop;
    }
    return true;
  }
  scrollColumnIntoView(columnId, config = { offset: 0 }) {
    const state = this.getState();
    const computed = this.getComputed();
    const computedColumn = computed.computedVisibleColumnsMap.get(columnId);
    if (!computedColumn) {
      return false;
    }
    const colIndex = computedColumn.computedVisibleIndex;
    const scrollPosition = state.renderer.getScrollPositionForScrollColumnIntoView(colIndex, config);
    if (!scrollPosition) {
      return false;
    }
    const currentScrollPosition = state.brain.getScrollPosition();
    const scrollLeftMax = state.brain.scrollLeftMax;
    if (scrollPosition.scrollLeft > scrollLeftMax + (config.offset || 0)) {
      return false;
    }
    if (scrollPosition.scrollLeft !== currentScrollPosition.scrollLeft) {
      state.scrollerDOMRef.current.scrollLeft = scrollPosition.scrollLeft;
    }
    return true;
  }
};
function getImperativeApi(context) {
  const api = new InfiniteTableApiImpl(context);
  if (false) {
    globalThis.imperativeApi = api;
  }
  return api;
}

// src/components/InfiniteTable/hooks/useAutoSizeColumns.ts
init_esm_shims();
import {
  useEffect as useEffect21,
  useRef as useRef22,
  useState as useState15
} from "react";
var OFFSET = 10;
function getColumnContentMaxWidths(domRef, options) {
  var _a;
  const { includeHeader, columnsToResize, columnsToSkip } = options;
  const query = `.${InfiniteTableCellClassName} > .${InfiniteTableCellContentClassName}`;
  const match = (_a = domRef.current) == null ? void 0 : _a.querySelectorAll(query);
  const measuredMaxWidths = {};
  const computedPaddingsForColumns = {};
  if (match && match.length) {
    match.forEach((content) => {
      const cell = content.parentElement;
      const isHeader = cell.matches(`.${InfiniteTableHeaderCellClassName}`);
      if (includeHeader === false && isHeader) {
        return;
      }
      const colId = cell.getAttribute("data-column-id");
      const contentClone = content.cloneNode(true);
      contentClone.style.visibility = "hidden";
      contentClone.style.pointerEvents = "none";
      contentClone.classList.remove(...cssEllipsisClassName.split(" "));
      contentClone.style.position = "absolute";
      contentClone.style.width = "auto";
      cell.appendChild(contentClone);
      let measuredWidth = contentClone.offsetWidth;
      cell.removeChild(contentClone);
      if (!computedPaddingsForColumns[colId]) {
        const cellComputedStyle = getGlobal().getComputedStyle(cell);
        computedPaddingsForColumns[colId] = parseInt(cellComputedStyle.paddingLeft, 10) + parseInt(cellComputedStyle.paddingRight, 10) + parseInt(cellComputedStyle.borderLeftWidth, 10) + parseInt(cellComputedStyle.borderRightWidth, 10) + OFFSET;
      }
      measuredWidth += computedPaddingsForColumns[colId];
      if (isHeader) {
        let otherElementsLength = 0;
        cell.childNodes.forEach((child) => {
          if (child !== content) {
            const el = child;
            let elWidth = Math.max(
              el.offsetWidth,
              parseInt(el.style.width, 10)
            );
            if (isNaN(elWidth)) {
              elWidth = 0;
            }
            otherElementsLength += elWidth;
            if (elWidth > 0) {
              const style2 = getGlobal().getComputedStyle(el);
              otherElementsLength += parseInt(style2.marginLeft, 10) + parseInt(style2.marginRight, 10);
            }
          }
        });
        measuredWidth += otherElementsLength;
      }
      if (columnsToSkip && columnsToSkip.has(colId)) {
        return;
      }
      if (columnsToResize && !columnsToResize.has(colId)) {
        return;
      }
      measuredMaxWidths[colId] = Math.max(
        measuredWidth,
        measuredMaxWidths[colId] || 0
      );
    });
  }
  return measuredMaxWidths;
}
function useAutoSizeColumns() {
  const {
    getComponentState,
    componentActions,
    componentState: { domRef, ready, autoSizeColumnsKey, brain }
  } = useComponentState();
  const [refreshId, setRefreshId] = useState15(0);
  const theKey = typeof autoSizeColumnsKey === "object" ? autoSizeColumnsKey.key : autoSizeColumnsKey;
  const getTheKey = useLatest(theKey);
  const lastExecutedIdentifierRef = useRef22(null);
  useEffect21(() => {
    const key = getTheKey();
    if (key == null) {
      return;
    }
    const { current } = lastExecutedIdentifierRef;
    const onChange = () => {
      if (autoSizeColumnsKey !== current) {
        setRefreshId(refreshId + 1);
      }
    };
    return brain.onRenderRangeChange(onChange);
  }, [brain]);
  useEffect21(() => {
    var _a;
    if (theKey == null) {
      return;
    }
    const { autoSizeColumnsKey: autoSizeColumnsKey2 } = getComponentState();
    let columnsToResize;
    let columnsToSkip;
    let includeHeader = true;
    if (typeof autoSizeColumnsKey2 === "object") {
      if (autoSizeColumnsKey2.columnsToResize) {
        columnsToResize = new Set(autoSizeColumnsKey2.columnsToResize);
      }
      if (autoSizeColumnsKey2.columnsToSkip) {
        columnsToSkip = new Set(autoSizeColumnsKey2.columnsToSkip);
      }
      includeHeader = (_a = autoSizeColumnsKey2.includeHeader) != null ? _a : includeHeader;
    }
    lastExecutedIdentifierRef.current = theKey;
    const measuredMaxWidths = getColumnContentMaxWidths(domRef, {
      includeHeader,
      columnsToResize,
      columnsToSkip
    });
    const colIds = Object.keys(measuredMaxWidths);
    if (!colIds.length) {
      return;
    }
    const columnSizing = getComponentState().columnSizing;
    const newColumnSizing = __spreadValues({}, columnSizing);
    let changed = false;
    colIds.forEach((colId) => {
      var _a2;
      newColumnSizing[colId] = {
        width: measuredMaxWidths[colId]
      };
      changed = changed || newColumnSizing[colId].width !== ((_a2 = columnSizing[colId]) == null ? void 0 : _a2.width);
    });
    if (changed) {
      componentActions.columnSizing = newColumnSizing;
    }
  }, [theKey, ready, refreshId]);
}

// src/components/InfiniteTable/hooks/useCellRendering.tsx
init_esm_shims();
import { useCallback as useCallback19, useEffect as useEffect22, useRef as useRef23 } from "react";
import * as React51 from "react";

// src/components/InfiniteTable/hooks/useYourBrain.ts
init_esm_shims();
function useYourBrain(param) {
  const {
    dataArray,
    brain,
    computedPinnedEndColumns,
    computedPinnedStartColumns,
    computedVisibleColumns,
    columnSize,
    rowHeight,
    rowspan
  } = param;
  useMatrixBrain(
    brain,
    {
      colWidth: columnSize,
      rowHeight,
      // don't update width and height here
      // since it's updated by HeadlessTable, to account also for scrollbar sizes
      // height: bodySize.height,
      // width: bodySize.width,
      rows: dataArray.length,
      cols: computedVisibleColumns.length,
      rowspan
    },
    {
      fixedColsEnd: computedPinnedEndColumns.length,
      fixedColsStart: computedPinnedStartColumns.length
    }
  );
  return brain;
}

// src/components/InfiniteTable/hooks/useCellRendering.tsx
var SCROLL_BOTTOM_OFFSET = 1;
function useCellRendering(param) {
  const { computed, bodySize, imperativeApi } = param;
  const { actions, state, getState } = useInfiniteTable();
  const {
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedVisibleColumns,
    computedColumnsMap,
    fieldsToColumn,
    rowspan,
    toggleGroupRow,
    columnSize
  } = computed;
  const {
    componentState: dataSourceState,
    getState: getDataSourceState,
    componentActions: dataSourceActions,
    api: dataSourceApi
  } = useDataSourceContextValue();
  const { dataArray } = dataSourceState;
  const getData = useLatest(dataArray);
  const {
    rowHeight,
    groupRenderStrategy,
    brain,
    showZebraRows,
    rowStyle,
    rowClassName,
    onScrollToTop,
    onScrollToBottom,
    scrollToBottomOffset,
    ready
  } = state;
  const repaintId = dataSourceState.updatedAt;
  useYourBrain({
    columnSize,
    brain,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedVisibleColumns,
    rowHeight,
    dataArray,
    bodySize,
    rowspan
  });
  const scrollTopMaxRef = useRef23(0);
  useEffect22(() => {
    return brain.onRenderCountChange(() => {
      scrollTopMaxRef.current = brain.scrollTopMax;
    });
  }, [brain]);
  useEffect22(() => {
    return brain.onScrollStop((scrollPosition) => {
      const { scrollTop: scrollTop2 } = scrollPosition;
      if (scrollTop2 === 0) {
        onScrollToTop == null ? void 0 : onScrollToTop();
      }
      const offset = scrollToBottomOffset != null ? scrollToBottomOffset : SCROLL_BOTTOM_OFFSET;
      const isScrollBottom = scrollTop2 + offset >= scrollTopMaxRef.current;
      if (isScrollBottom) {
        onScrollToBottom == null ? void 0 : onScrollToBottom();
        const { livePagination, livePaginationCursor, dataArray: dataArray2 } = getDataSourceState();
        if (livePagination) {
          dataSourceActions.cursorId = livePaginationCursor !== void 0 ? (
            // when there is a `livePaginationCursor` defined we set the cursorId to Date.now
            // as that will trigger the dataSource to fetch more data
            Date.now()
          ) : (
            // but when there is no `livePaginationCursor` defined we use the `dataArray.length`
            // as the cursorId, we we can't randomise it, otherwise when we get to the end
            // of the dataset, we will still request more data
            // see #useDataArrayLengthAsCursor ref
            dataArray2.length
          );
        }
      }
    });
  }, [brain, onScrollToTop, onScrollToBottom]);
  useEffect22(() => {
    if (!bodySize.height) {
      return;
    }
    actions.ready = true;
  }, [!!bodySize.height]);
  useEffect22(() => {
    if (!ready) {
    }
    const { onReady } = getState();
    if (onReady) {
      onReady({ api: imperativeApi, dataSourceApi });
    }
  }, [ready]);
  const [, rerender] = useRerender();
  useEffect22(() => {
    rerender();
  }, [dataSourceState]);
  const renderCell = useCallback19(
    (params) => {
      const {
        rowIndex,
        colIndex,
        heightWithRowspan,
        domRef,
        hidden,
        width,
        onMouseLeave,
        onMouseEnter
      } = params;
      const dataArray2 = getData();
      const rowInfo = dataArray2[rowIndex];
      const column = computedVisibleColumns[colIndex];
      if (!rowInfo) {
        return null;
      }
      const cellProps = {
        getData,
        virtualized: true,
        showZebraRows,
        groupRenderStrategy,
        rowIndex,
        rowInfo,
        hidden,
        toggleGroupRow,
        rowHeight: heightWithRowspan,
        onMouseEnter,
        onMouseLeave,
        domRef,
        width,
        column,
        columnsMap: computedColumnsMap,
        fieldsToColumn,
        rowStyle,
        rowClassName
      };
      return /* @__PURE__ */ React51.createElement(InfiniteTableColumnCell, __spreadValues({}, cellProps));
    },
    [
      rowHeight,
      getData,
      computedVisibleColumns,
      computedColumnsMap,
      fieldsToColumn,
      groupRenderStrategy,
      toggleGroupRow,
      showZebraRows,
      repaintId,
      rowStyle,
      rowClassName
    ]
  );
  return {
    renderCell
    // repaintId,
  };
}

// src/components/InfiniteTable/hooks/useComputed.ts
init_esm_shims();
import { useEffect as useEffect28, useState as useState17 } from "react";

// src/components/InfiniteTable/utils/MultiRowSelector.ts
init_esm_shims();
function ensureMinMax(start, end) {
  return start < end ? [start, end] : [end, start];
}
var MultiRowSelector = class {
  constructor(options) {
    this.multiSelectStartIndex = 0;
    this.getIdForIndex = options.getIdForIndex;
  }
  set rowSelectionState(rowSelectionState) {
    this._rowSelectionState = rowSelectionState;
  }
  get rowSelectionState() {
    return this._rowSelectionState;
  }
  selectRange(startIndex, endIndex) {
    const [start, end] = ensureMinMax(startIndex, endIndex);
    const rowSelectionState = this.rowSelectionState;
    for (let i = start; i <= end; i++) {
      const id = this.getIdForIndex(i);
      rowSelectionState.selectRow(id);
    }
  }
  deselectRange(startIndex, endIndex) {
    const [start, end] = ensureMinMax(startIndex, endIndex);
    const rowSelectionState = this.rowSelectionState;
    for (let i = start; i <= end; i++) {
      const id = this.getIdForIndex(i);
      rowSelectionState.deselectRow(id);
    }
  }
  /**
   * This is the single click, without any modifier
   */
  resetClick(index) {
    this.rowSelectionState.deselectAll();
    const id = this.getIdForIndex(index);
    this.rowSelectionState.selectRow(id);
    this.multiSelectStartIndex = index;
    this.multiSelectEndIndex = void 0;
  }
  /**
   * This is the click with ctrl/cmd key pressed
   * @param index
   */
  singleAddClick(index) {
    const id = this.getIdForIndex(index);
    if (this.rowSelectionState.isRowSelected(id)) {
      this.rowSelectionState.deselectRow(id);
      if (this.rowSelectionState.isRowSelected(this.getIdForIndex(index + 1))) {
        this.multiSelectStartIndex = index + 1;
      } else {
      }
    } else {
      this.rowSelectionState.selectRow(id);
      this.multiSelectStartIndex = index;
      let multiSelectEndIndex = void 0;
      for (let i = index - 1; i >= 0; i--) {
        const id2 = this.getIdForIndex(i);
        if (this.rowSelectionState.isRowSelected(id2)) {
          multiSelectEndIndex = i;
        } else {
          break;
        }
      }
      this.multiSelectEndIndex = multiSelectEndIndex;
    }
  }
  multiSelectClick(index) {
    if (this.multiSelectEndIndex != null) {
      this.deselectRange(this.multiSelectStartIndex, this.multiSelectEndIndex);
    }
    this.selectRange(this.multiSelectStartIndex, index);
    this.multiSelectEndIndex = index;
  }
};

// src/components/InfiniteTable/hooks/useColumnGroups.ts
init_esm_shims();
import { useEffect as useEffect24 } from "react";

// src/components/hooks/useInterceptedMap.ts
init_esm_shims();
import { useEffect as useEffect23 } from "react";
function interceptMap(map2, fns) {
  const { set, delete: deleteKey, clear } = map2;
  if (fns.set) {
    map2.set = (key, value) => {
      set.call(map2, key, value);
      fns.set(key, value);
      return map2;
    };
  }
  if (fns.delete) {
    map2.delete = (key) => {
      const removed = deleteKey.call(map2, key);
      fns.delete(key);
      return removed;
    };
  }
  if (fns.clear || fns.beforeClear) {
    map2.clear = () => {
      if (fns.beforeClear) {
        fns.beforeClear(map2);
      }
      const result = clear.call(map2);
      if (fns.clear) {
        fns.clear();
      }
      return result;
    };
  }
  return () => {
    if (set) {
      map2.set = set;
    }
    if (deleteKey) {
      map2.delete = deleteKey;
    }
    if (clear) {
      map2.clear = clear;
    }
  };
}

// src/components/InfiniteTable/state/computeColumnGroupsDepths.ts
init_esm_shims();
function computeColumnGroupsDepths(columnGroups) {
  const map2 = /* @__PURE__ */ new Map();
  columnGroups.forEach((colGroup, colGroupId) => {
    let parentGroupId = colGroup.columnGroup;
    let depth = 0;
    while (parentGroupId) {
      const parent = columnGroups.get(parentGroupId);
      if (!parent) {
        if (false) {
          console.warn(`Cannot find column group ${parentGroupId}`);
        }
        break;
      }
      depth++;
      parentGroupId = parent.columnGroup;
    }
    map2.set(colGroupId, depth);
  });
  return map2;
}

// src/components/InfiniteTable/hooks/useColumnGroups.ts
function useColumnGroups() {
  const {
    componentState: {
      computedColumnGroups,
      collapsedColumnGroups
    },
    componentActions,
    getComponentState
  } = useComponentState();
  useEffect24(() => {
    const recompute = () => {
      componentActions.columnGroupsDepthsMap = computeColumnGroupsDepths(computedColumnGroups);
    };
    const update = rafFn(recompute);
    return interceptMap(computedColumnGroups, {
      clear: update,
      delete: update,
      set: update
    });
  }, [computedColumnGroups]);
  useEffect24(() => {
    return interceptMap(collapsedColumnGroups, {
      set: (key, visibleCol) => {
        const colIds = key.slice(1);
        const columnVisibility = __spreadValues({}, getComponentState().columnVisibility);
        colIds.forEach((colId) => {
          columnVisibility[colId] = false;
        });
        delete columnVisibility[visibleCol];
        componentActions.columnVisibility = columnVisibility;
      },
      beforeClear: (currentCollapsedGroups) => {
        const columnVisibility = __spreadValues({}, getComponentState().columnVisibility);
        const keys = [...currentCollapsedGroups.keys()];
        keys.forEach((key) => {
          const colIds = key.slice(1);
          colIds.forEach((colId) => {
            delete columnVisibility[colId];
          });
        });
        componentActions.columnVisibility = columnVisibility;
      },
      delete: (key) => {
        const columnVisibility = __spreadValues({}, getComponentState().columnVisibility);
        const colIds = key.slice(1);
        colIds.forEach((colId) => {
          delete columnVisibility[colId];
        });
        componentActions.columnVisibility = columnVisibility;
      }
    });
  }, [collapsedColumnGroups]);
}

// src/components/InfiniteTable/hooks/useColumnRowspan.ts
init_esm_shims();
import { useMemo as useMemo8 } from "react";
function useColumnRowspan(computedVisibleColumns) {
  const { getState: getDataSourceState } = useDataSourceContextValue();
  const rowspan = useMemo8(() => {
    const colsWithRowspan = computedVisibleColumns.filter(
      (col) => typeof col.rowspan === "function"
    );
    return colsWithRowspan.length ? ({ rowIndex, colIndex }) => {
      const dataArray = getDataSourceState().dataArray;
      const rowInfo = dataArray[rowIndex];
      if (!rowInfo) {
        return 1;
      }
      const data = rowInfo.data;
      const column = computedVisibleColumns[colIndex];
      if (!column || !column.rowspan) {
        return 1;
      }
      return column.rowspan({
        column,
        data,
        dataArray,
        rowInfo,
        rowIndex
      });
    } : void 0;
  }, [computedVisibleColumns]);
  return rowspan;
}

// src/components/InfiniteTable/hooks/useColumnSizeFn.ts
init_esm_shims();
import { useCallback as useCallback20 } from "react";
var debug4 = dbg("useColumnSizeFn");
function useColumnSizeFn(columns) {
  const columnSize = useCallback20(
    (index) => {
      const column = columns[index];
      if (false) {
        debug4("cannot find column at index", index, columns);
      }
      return column ? column.computedWidth : 0;
    },
    [columns]
  );
  return columnSize;
}

// src/components/InfiniteTable/hooks/useColumnsWhen.ts
init_esm_shims();
import { useEffect as useEffect25, useLayoutEffect as useLayoutEffect10, useMemo as useMemo9 } from "react";

// src/components/InfiniteTable/state/getInitialState.ts
init_esm_shims();
import { createRef } from "react";

// src/components/VirtualBrain/ScrollListener.ts
init_esm_shims();
var initialScrollPosition = {
  scrollLeft: 0,
  scrollTop: 0
};
var ScrollListener = class {
  constructor() {
    this.scrollPosition = initialScrollPosition;
    this.onScrollFns = [];
    this.getScrollPosition = () => {
      return this.scrollPosition;
    };
    this.onScroll = (fn) => {
      this.onScrollFns.push(fn);
      return () => {
        this.onScrollFns = this.onScrollFns.filter((f) => f !== fn);
      };
    };
    this.setScrollPosition = (scrollPosition) => {
      this.scrollPosition = scrollPosition;
      this.notifyScrollChange();
    };
    this.destroy = () => {
      this.onScrollFns = [];
    };
  }
  notifyScrollChange() {
    const { scrollPosition } = this;
    const fns = this.onScrollFns;
    for (let i = 0, len = fns.length; i < len; i++) {
      fns[i](scrollPosition);
    }
  }
};

// src/components/InfiniteTable/utils/toMap.ts
init_esm_shims();
function toMap(mapOrObject, weakMapCache) {
  if (!mapOrObject) {
    return /* @__PURE__ */ new Map();
  }
  if (mapOrObject instanceof Map) {
    return mapOrObject;
  }
  if (weakMapCache && weakMapCache.has(mapOrObject)) {
    return weakMapCache.get(mapOrObject);
  }
  const result = new Map(Object.entries(mapOrObject));
  if (weakMapCache) {
    weakMapCache.set(mapOrObject, result);
  }
  return result;
}

// src/components/InfiniteTable/state/getInitialState.ts
function createRenderer2(brain) {
  const renderer = new ReactHeadlessTableRenderer(brain);
  const onRenderUpdater = buildSubscriptionCallback();
  brain.onDestroy(() => {
    renderer.destroy();
    onRenderUpdater.destroy();
  });
  return {
    renderer,
    onRenderUpdater
  };
}
function getCellSelector(cellPosition) {
  const selector2 = `.${InfiniteTableColumnCellClassName}[data-row-index${cellPosition ? `="${cellPosition.rowIndex}"` : ""}][data-col-index${cellPosition ? `="${cellPosition.colIndex}"` : ""}]`;
  return selector2;
}
function initSetupState2() {
  const columnsGeneratedForGrouping = /* @__PURE__ */ new Map();
  const brain = new MatrixBrain();
  const headerBrain = new MatrixBrain("header");
  brain.onScroll((scrollPosition) => {
    headerBrain.setScrollPosition({
      scrollLeft: scrollPosition.scrollLeft,
      scrollTop: 0
    });
  });
  if (false) {
    globalThis.brain = brain;
    globalThis.headerBrain = headerBrain;
  }
  const { renderer, onRenderUpdater } = createRenderer2(brain);
  brain.onAvailableSizeChange((size) => {
    headerBrain.setAvailableSize({ width: size.width });
  });
  if (false) {
    globalThis.renderer = renderer;
  }
  const domRef = createRef();
  return {
    renderer,
    onRenderUpdater,
    propsCache: /* @__PURE__ */ new Map([]),
    cellContextMenuVisibleFor: null,
    contextMenuVisibleFor: null,
    columnMenuVisibleForColumnId: null,
    columnMenuVisibleKey: 0,
    filterOperatorMenuVisibleForColumnId: null,
    getDOMNodeForCell: (cellPosition) => {
      if (!domRef.current) {
        return null;
      }
      const selector2 = getCellSelector(cellPosition);
      return domRef.current.querySelector(selector2) || null;
    },
    brain,
    headerBrain,
    domRef,
    columnMenuTargetRef: createRef(),
    editingValueRef: createRef(),
    scrollerDOMRef: createRef(),
    portalDOMRef: createRef(),
    focusDetectDOMRef: createRef(),
    activeCellIndicatorDOMRef: createRef(),
    onColumnMenuClick: buildSubscriptionCallback(),
    cellContextMenu: buildSubscriptionCallback(),
    contextMenu: buildSubscriptionCallback(),
    onFilterOperatorMenuClick: buildSubscriptionCallback(),
    onRowHeightCSSVarChange: buildSubscriptionCallback(),
    onColumnHeaderHeightCSSVarChange: buildSubscriptionCallback(),
    cellClick: buildSubscriptionCallback(),
    cellMouseDown: buildSubscriptionCallback(),
    keyDown: buildSubscriptionCallback(),
    bodySize: {
      width: 0,
      height: 0
    },
    scrollPosition: {
      scrollTop: 0,
      scrollLeft: 0
    },
    columnReorderDragColumnId: false,
    ready: false,
    focused: false,
    focusedWithin: false,
    columnsWhenGrouping: columnsGeneratedForGrouping,
    columnVisibilityForGrouping: {},
    pinnedStartScrollListener: new ScrollListener(),
    pinnedEndScrollListener: new ScrollListener(),
    columnsWhenInlineGroupRenderStrategy: void 0,
    editingCell: null
  };
}
var forwardProps4 = (setupState) => {
  return {
    scrollTopKey: 1,
    components: 1,
    id: 1,
    loadingText: 1,
    pivotColumns: 1,
    groupColumn: 1,
    onReady: 1,
    domProps: 1,
    onKeyDown: 1,
    onCellClick: 1,
    focusedClassName: 1,
    focusedWithinClassName: 1,
    focusedStyle: 1,
    focusedWithinStyle: 1,
    onSelfFocus: 1,
    onFocusWithin: 1,
    onSelfBlur: 1,
    onBlurWithin: 1,
    onContextMenu: 1,
    onCellContextMenu: 1,
    onScrollToTop: 1,
    onScrollToBottom: 1,
    onScrollStop: 1,
    scrollToBottomOffset: 1,
    getColumnMenuItems: 1,
    getCellContextMenuItems: 1,
    getContextMenuItems: 1,
    columnPinning: 1,
    editable: 1,
    columnDefaultEditable: 1,
    columnDefaultFilterable: 1,
    columnDefaultSortable: 1,
    rowStyle: 1,
    rowProps: 1,
    rowClassName: 1,
    pinnedStartMaxWidth: 1,
    pinnedEndMaxWidth: 1,
    pivotColumn: 1,
    pivotColumnGroups: 1,
    getFilterOperatorMenuItems: 1,
    onScrollbarsChange: 1,
    autoSizeColumnsKey: 1,
    columnDefaultFlex: 1,
    columnMenuRealignDelay: (columnMenuRealignDelay) => columnMenuRealignDelay != null ? columnMenuRealignDelay : 50,
    scrollStopDelay: (scrollStopDelay) => scrollStopDelay != null ? scrollStopDelay : 250,
    viewportReservedWidth: (viewportReservedWidth) => viewportReservedWidth != null ? viewportReservedWidth : 0,
    resizableColumns: (resizableColumns) => resizableColumns != null ? resizableColumns : true,
    hideColumnWhenGrouped: (hideColumnWhenGrouped) => hideColumnWhenGrouped != null ? hideColumnWhenGrouped : false,
    columnMinWidth: (columnMinWidth) => columnMinWidth != null ? columnMinWidth : 30,
    columnMaxWidth: (columnMaxWidth) => columnMaxWidth != null ? columnMaxWidth : 5e3,
    columnDefaultWidth: (columnDefaultWidth) => columnDefaultWidth != null ? columnDefaultWidth : 200,
    columnCssEllipsis: (columnCssEllipsis) => columnCssEllipsis != null ? columnCssEllipsis : true,
    draggableColumns: (draggableColumns) => draggableColumns != null ? draggableColumns : true,
    headerOptions: (headerOptions) => __spreadValues({
      alwaysReserveSpaceForSortIcon: true
    }, headerOptions),
    showSeparatePivotColumnForSingleAggregation: (showSeparatePivotColumnForSingleAggregation) => showSeparatePivotColumnForSingleAggregation != null ? showSeparatePivotColumnForSingleAggregation : false,
    sortable: 1,
    hideEmptyGroupColumns: (hideEmptyGroupColumns) => hideEmptyGroupColumns != null ? hideEmptyGroupColumns : false,
    pivotTotalColumnPosition: (pivotTotalColumnPosition) => pivotTotalColumnPosition != null ? pivotTotalColumnPosition : "end",
    pivotGrandTotalColumnPosition: 1,
    // groupRenderStrategy: (groupRenderStrategy) =>
    //   groupRenderStrategy ?? 'multi-column',
    licenseKey: (licenseKey) => licenseKey || "",
    keyboardSelection: (keyboardSelection) => keyboardSelection != null ? keyboardSelection : true,
    activeRowIndex: 1,
    activeCellIndex: 1,
    columnOrder: (columnOrder) => columnOrder != null ? columnOrder : true,
    header: (header) => header != null ? header : true,
    showZebraRows: (showZebraRows) => showZebraRows != null ? showZebraRows : true,
    showHoverRows: (showHoverRows) => showHoverRows != null ? showHoverRows : true,
    virtualizeColumns: (virtualizeColumns) => virtualizeColumns != null ? virtualizeColumns : true,
    rowHeight: (rowHeight) => typeof rowHeight === "number" ? rowHeight : 0,
    columnHeaderHeight: (columnHeaderHeight) => typeof columnHeaderHeight === "number" ? columnHeaderHeight : 30,
    columns: (columns) => toMap(columns, setupState.propsCache.get("columns")),
    columnVisibility: (columnVisibility) => columnVisibility != null ? columnVisibility : {},
    // TODO check if columnPinning works when the value for a pinned col is `true` instead of `"start"`
    columnSizing: (columnSizing) => columnSizing || {},
    columnTypes: (columnTypes) => columnTypes || {},
    onEditCancelled: 1,
    onEditRejected: 1,
    onEditAccepted: 1,
    persistEdit: 1,
    shouldAcceptEdit: 1,
    onEditPersistError: 1,
    onEditPersistSuccess: 1,
    multiSortBehavior: (multiSortBehavior) => multiSortBehavior != null ? multiSortBehavior : "replace",
    collapsedColumnGroups: (collapsedColumnGroups) => collapsedColumnGroups != null ? collapsedColumnGroups : /* @__PURE__ */ new Map(),
    columnGroups: (columnGroups) => toMap(columnGroups, setupState.propsCache.get("columnGroups"))
  };
};
function getGroupRenderStrategy(options) {
  const { groupBy, groupColumn, groupRenderStrategy } = options;
  if (groupRenderStrategy) {
    return groupRenderStrategy;
  }
  if (groupColumn != null && typeof groupColumn === "object") {
    return "single-column";
  }
  const columnsInGroupBy = groupBy.filter((g) => g.column);
  if (columnsInGroupBy.length) {
    return "multi-column";
  }
  return "multi-column";
}
var cleanupState = (state) => {
  state.brain.destroy();
  state.headerBrain.destroy();
  state.renderer.destroy();
  state.onRenderUpdater.destroy();
  state.onRowHeightCSSVarChange.destroy();
  state.onColumnHeaderHeightCSSVarChange.destroy();
  state.onColumnMenuClick.destroy();
  state.onFilterOperatorMenuClick.destroy();
  state.domRef.current = null;
  state.columnMenuTargetRef.current = null;
  state.scrollerDOMRef.current = null;
  state.portalDOMRef.current = null;
  state.onRowHeightCSSVarChange.destroy();
  state.onColumnHeaderHeightCSSVarChange.destroy();
  state.pinnedEndScrollListener.destroy();
  state.pinnedStartScrollListener.destroy();
};
function getGroupByMap(groupBy) {
  return groupBy.reduce((acc, groupBy2, index) => {
    const value = {
      groupBy: groupBy2,
      groupIndex: index
    };
    if (groupBy2.field) {
      acc.set(groupBy2.field, value);
    } else if (groupBy2.groupField) {
      acc.set(groupBy2.groupField, value);
    }
    return acc;
  }, /* @__PURE__ */ new Map());
}
var mapPropsToState = (params) => {
  var _a, _b, _c, _d;
  const { props, state, oldState, parentState } = params;
  const computedColumnGroups = state.pivotColumnGroups || state.columnGroups;
  const columnGroupsDepthsMap = state.columnGroups && state.columnGroups != (oldState == null ? void 0 : oldState.columnGroups) || state.pivotColumnGroups && state.pivotColumnGroups != (oldState == null ? void 0 : oldState.pivotColumnGroups) ? computeColumnGroupsDepths(computedColumnGroups) : state.columnGroupsDepthsMap;
  const groupBy = parentState == null ? void 0 : parentState.groupBy;
  const groupRenderStrategy = getGroupRenderStrategy({
    groupRenderStrategy: props.groupRenderStrategy,
    groupBy,
    groupColumn: props.groupColumn
  });
  const computedColumns = state.columnsWhenGrouping || state.columnsWhenInlineGroupRenderStrategy || state.columns;
  return {
    showColumnFilters: (_a = props.showColumnFilters) != null ? _a : !!parentState.filterValue,
    controlledColumnVisibility: !!props.columnVisibility,
    groupRenderStrategy,
    groupBy,
    computedColumns,
    initialColumns: props.columns,
    keyboardNavigation: (_b = props.keyboardNavigation) != null ? _b : state.activeCellIndex != null ? "cell" : state.activeRowIndex != null ? "row" : "cell",
    columnHeaderCssEllipsis: (_d = (_c = props.columnHeaderCssEllipsis) != null ? _c : props.columnCssEllipsis) != null ? _d : true,
    columnGroupsDepthsMap,
    columnGroupsMaxDepth: columnGroupsDepthsMap != state.columnGroupsDepthsMap ? Math.max(...columnGroupsDepthsMap.values(), 0) : state.columnGroupsMaxDepth,
    computedColumnGroups,
    rowHeightCSSVar: typeof props.rowHeight === "string" ? props.rowHeight : "",
    columnHeaderHeightCSSVar: typeof props.columnHeaderHeight === "string" ? props.columnHeaderHeight || ThemeVars.components.Header.columnHeaderHeight : ""
  };
};

// src/components/InfiniteTable/state/getColumnVisibilityForHideEmptyGroupColumns.ts
init_esm_shims();
function getGroupColumnsMapForComputedColumns(computedColumns, groupByMap) {
  const computedGroupColumns = /* @__PURE__ */ new Map();
  computedColumns.forEach(
    (column, colId) => {
      const col = column;
      if (!col.groupByForColumn || Array.isArray(col.groupByForColumn)) {
        return;
      }
      const { groupByForColumn } = col;
      const field = groupByForColumn.field || groupByForColumn.groupField;
      const groupInfoForColumn = field ? groupByMap.get(field) : null;
      if (!groupInfoForColumn) {
        return;
      }
      computedGroupColumns.set(
        colId,
        column
      );
    }
  );
  return computedGroupColumns;
}
function getColumnVisibilityForHideEmptyGroupColumns(params) {
  const {
    hideEmptyGroupColumns,
    groupByMap,
    computedGroupColumns,
    groupRowsIndexesInDataArray,
    dataArray,
    groupBy
  } = params;
  const columnVisibility = __spreadValues({}, params.columnVisibility);
  if (!hideEmptyGroupColumns) {
    computedGroupColumns.forEach(
      (_column, colId) => {
        if (columnVisibility[colId] === false) {
          delete columnVisibility[colId];
        }
      }
    );
    return columnVisibility;
  }
  if (!groupRowsIndexesInDataArray || !groupRowsIndexesInDataArray.length) {
    return columnVisibility;
  }
  const groupsLength = groupBy.length;
  let expandedGroupsLevel = 0;
  const len = groupRowsIndexesInDataArray.length;
  for (let i = 0; i < len; i++) {
    const groupRowIndex = groupRowsIndexesInDataArray[i];
    const rowInfo = dataArray[groupRowIndex];
    if (!rowInfo.isGroupRow) {
      continue;
    }
    expandedGroupsLevel = Math.max(
      expandedGroupsLevel,
      rowInfo.groupNesting - 1
    );
    if (expandedGroupsLevel === groupsLength - 1) {
      break;
    }
  }
  computedGroupColumns.forEach(
    (column, colId) => {
      const { groupByForColumn } = column;
      if (Array.isArray(groupByForColumn)) {
        return;
      }
      const field = groupByForColumn.field || groupByForColumn.groupField;
      if (!field) {
        return;
      }
      const groupInfoForColumn = groupByMap.get(field);
      const index = groupInfoForColumn.groupIndex;
      const shouldBeHidden = index > expandedGroupsLevel && hideEmptyGroupColumns;
      if (shouldBeHidden) {
        if (columnVisibility[colId] !== false) {
          columnVisibility[colId] = false;
        }
      } else {
        if (columnVisibility.hasOwnProperty(colId)) {
          delete columnVisibility[colId];
        }
      }
    }
  );
  return columnVisibility;
}

// src/components/InfiniteTable/hooks/useToggleGroupRow.ts
init_esm_shims();
import { useCallback as useCallback21 } from "react";
function useToggleGroupRow() {
  const { getState: getDataSourceState, componentActions: dataSourceActions } = useDataSourceContextValue();
  const toggleGroupRow = useCallback21((groupKeys) => {
    const state = getDataSourceState();
    const newState = new GroupRowsState(state.groupRowsState);
    newState.toggleGroupRow(groupKeys);
    dataSourceActions.groupRowsState = newState;
    if (state.lazyLoad) {
      const dataKeys = [LAZY_ROOT_KEY_FOR_GROUPS, ...groupKeys];
      const currentData = state.originalLazyGroupData.get(dataKeys);
      if (newState.isGroupRowExpanded(groupKeys)) {
        if (!(currentData == null ? void 0 : currentData.cache)) {
          loadData(state.data, state, dataSourceActions, {
            groupKeys
          });
        }
      } else {
        if (!(currentData == null ? void 0 : currentData.cache)) {
          const keysToDelete = state.lazyLoadCacheOfLoadedBatches.getKeysStartingWith(groupKeys);
          keysToDelete.forEach((keys) => {
            state.lazyLoadCacheOfLoadedBatches.delete(keys);
          });
          dataSourceActions.lazyLoadCacheOfLoadedBatches = DeepMap.clone(
            state.lazyLoadCacheOfLoadedBatches
          );
          state.originalLazyGroupData.delete(dataKeys);
          dataSourceActions.originalLazyGroupDataChangeDetect = getChangeDetect();
        }
      }
    }
  }, []);
  return toggleGroupRow;
}

// src/components/InfiniteTable/hooks/useColumnsWhen.ts
function useGroupByMap(groupBy) {
  return useMemo9(() => getGroupByMap(groupBy), [groupBy]);
}
function useColumnsWhen() {
  const {
    componentState: { groupBy },
    componentActions: dataSourceActions
  } = useDataSourceContextValue();
  const {
    componentState: {
      groupRenderStrategy,
      pivotTotalColumnPosition,
      pivotGrandTotalColumnPosition
    }
  } = useComponentState();
  useEffect25(() => {
    dataSourceActions.generateGroupRows = groupRenderStrategy !== "inline";
  }, [groupRenderStrategy]);
  useEffect25(() => {
    dataSourceActions.pivotTotalColumnPosition = pivotTotalColumnPosition;
  }, [pivotTotalColumnPosition]);
  useEffect25(() => {
    if (pivotGrandTotalColumnPosition != void 0) {
      dataSourceActions.pivotGrandTotalColumnPosition = pivotGrandTotalColumnPosition;
    }
  }, [pivotGrandTotalColumnPosition]);
  const groupByMap = useGroupByMap(groupBy);
  useColumnsWhenInlineGroupRenderStrategy(groupByMap);
  const { toggleGroupRow } = useColumnsWhenGrouping();
  useHideColumns(groupByMap);
  return { toggleGroupRow };
}
function useColumnsWhenInlineGroupRenderStrategy(groupByMap) {
  const toggleGroupRow = useToggleGroupRow();
  const {
    componentActions,
    componentState: { columns, groupRenderStrategy }
  } = useComponentState();
  function computeColumnsWhenInlineGroupRenderStrategy(columns2, groupByMap2, groupRenderStrategy2, toggleGroupRow2) {
    const computedColumns = /* @__PURE__ */ new Map();
    if (groupRenderStrategy2 !== "inline") {
      return;
    }
    columns2.forEach((column, id) => {
      var _a, _b;
      let base = {};
      const groupByForColumn = groupByMap2.get(column.field);
      if (groupByForColumn && groupRenderStrategy2 === "inline") {
        const { groupIndex } = groupByForColumn;
        base = {
          groupByForColumn: groupByForColumn.groupBy,
          field: (_a = groupByForColumn.groupBy) == null ? void 0 : _a.field,
          valueGetter: (_b = groupByForColumn.groupBy) == null ? void 0 : _b.valueGetter,
          valueFormatter: ({ rowInfo }) => {
            var _a2;
            return rowInfo.isGroupRow ? (_a2 = rowInfo.groupKeys) == null ? void 0 : _a2[groupIndex] : rowInfo.value;
          },
          rowspan: ({ rowInfo, dataArray }) => {
            if (!rowInfo.isGroupRow) {
              return 1;
            }
            const prevRowInfo = dataArray[rowInfo.indexInAll - 1] || {
              indexInParentGroups: []
            };
            if (!prevRowInfo || !prevRowInfo.dataSourceHasGrouping) {
              return 1;
            }
            const prevIndexes = prevRowInfo.indexInParentGroups || [];
            const currentIndexes = rowInfo.indexInParentGroups || [];
            let computeSpan = false;
            for (let i = 0; i <= groupIndex; i++) {
              const prev = prevIndexes[i];
              const current = currentIndexes[i];
              if (current !== prev) {
                computeSpan = true;
                break;
              }
            }
            if (!computeSpan) {
              return 1;
            }
            const parentGroup = rowInfo.parents[groupIndex];
            const rowspan = parentGroup ? parentGroup.groupCount - (parentGroup.collapsedChildrenCount || 0) + (parentGroup.collapsedGroupsCount || 0) : 1;
            return rowspan;
          },
          renderGroupIcon: getGroupColumnRenderGroupIcon({
            groupIndexForColumn: groupIndex,
            groupRenderStrategy: groupRenderStrategy2,
            toggleGroupRow: toggleGroupRow2,
            initialRenderGroupIcon: column.renderGroupIcon
          }),
          render: getGroupColumnRender({
            groupIndexForColumn: groupIndex,
            groupRenderStrategy: groupRenderStrategy2
          })
        };
      }
      const clone = __spreadValues(__spreadValues({}, base), column);
      computedColumns.set(id, clone);
    });
    return computedColumns.size === 0 ? void 0 : computedColumns;
  }
  useEffect25(() => {
    const update = () => {
      componentActions.columnsWhenInlineGroupRenderStrategy = computeColumnsWhenInlineGroupRenderStrategy(
        columns,
        groupByMap,
        groupRenderStrategy,
        toggleGroupRow
      );
    };
    update();
    return interceptMap(columns, {
      set: update,
      delete: update,
      clear: update
    });
  }, [columns, groupByMap, groupRenderStrategy, toggleGroupRow]);
}
function useColumnsWhenGrouping() {
  const {
    componentState: { groupBy, pivotBy, selectionMode }
  } = useDataSourceContextValue();
  const {
    componentActions,
    componentState: {
      columns,
      groupColumn,
      hideColumnWhenGrouped,
      groupRenderStrategy,
      pivotColumns,
      pivotColumn,
      pivotTotalColumnPosition,
      pivotGrandTotalColumnPosition
    },
    getComponentState
  } = useComponentState();
  const toggleGroupRow = useToggleGroupRow();
  useEffect25(() => {
    const update = () => {
      const { columns: columnsWhenGrouping, groupColumnIds } = getColumnsWhenGrouping({
        columns,
        groupColumn,
        pivotColumn,
        pivotTotalColumnPosition,
        pivotGrandTotalColumnPosition,
        groupRenderStrategy: groupRenderStrategy === "inline" ? "single-column" : groupRenderStrategy,
        groupBy,
        pivotBy,
        pivotColumns,
        toggleGroupRow,
        selectionMode
      });
      componentActions.columnsWhenGrouping = columnsWhenGrouping;
      let currentColumnOrder = getComponentState().columnOrder;
      if (groupColumnIds.length && Array.isArray(currentColumnOrder)) {
        const colOrder = new Set(currentColumnOrder);
        let shouldUpdate = false;
        groupColumnIds.forEach((groupColId) => {
          if (!colOrder.has(groupColId)) {
            shouldUpdate = true;
            currentColumnOrder = [
              groupColId,
              ...currentColumnOrder
            ];
          }
        });
        if (shouldUpdate) {
          componentActions.columnOrder = currentColumnOrder;
        }
      }
    };
    update();
    return interceptMap(columns, {
      set: update,
      delete: update,
      clear: update
    });
  }, [
    columns,
    groupBy,
    pivotBy,
    selectionMode,
    hideColumnWhenGrouped,
    groupColumn,
    groupRenderStrategy,
    pivotColumns,
    pivotTotalColumnPosition,
    pivotColumn
  ]);
  return { toggleGroupRow };
}
function useHideColumns(groupByMap) {
  const {
    componentState: {
      dataArray,
      groupRowsIndexesInDataArray,
      groupBy,
      groupRowsState,
      originalLazyGroupDataChangeDetect
    },
    getState: getDataSourceState
  } = useDataSourceContextValue();
  const {
    getComponentState,
    componentActions,
    componentState: {
      columnTypes,
      computedColumns,
      hideColumnWhenGrouped,
      hideEmptyGroupColumns,
      groupRenderStrategy
    }
  } = useComponentState();
  useLayoutEffect10(() => {
    if (groupRenderStrategy !== "multi-column") {
      return;
    }
    const currentState = getComponentState();
    const computedGroupColumns = getGroupColumnsMapForComputedColumns(
      computedColumns,
      groupByMap
    );
    const newColumnVisibility = getColumnVisibilityForHideEmptyGroupColumns({
      computedGroupColumns,
      columnVisibility: currentState.columnVisibility,
      hideEmptyGroupColumns,
      groupRowsIndexesInDataArray,
      dataArray,
      groupBy,
      groupByMap
    });
    if (!shallowEqualObjects(currentState.columnVisibility, newColumnVisibility)) {
      componentActions.columnVisibility = newColumnVisibility;
    }
  }, [
    getDataSourceState,
    groupRenderStrategy,
    originalLazyGroupDataChangeDetect,
    groupBy,
    groupByMap,
    computedColumns,
    hideEmptyGroupColumns ? dataArray : null,
    hideEmptyGroupColumns ? groupRowsState : null,
    hideEmptyGroupColumns ? groupRowsIndexesInDataArray : null,
    hideEmptyGroupColumns
  ]);
  useEffect25(() => {
    const isGrouped = groupBy.length > 0;
    const currentState = getComponentState();
    const {
      columnVisibility,
      columnVisibilityForGrouping,
      hideColumnWhenGrouped: hideColumnWhenGrouped2
    } = currentState;
    const newColumnVisibility = __spreadValues({}, columnVisibility);
    let newColumnVisibilityForGrouping = __spreadValues({}, columnVisibilityForGrouping);
    let updatedVisibilityWhenGrouping = false;
    let newlyHiddenColumns = /* @__PURE__ */ new Set();
    let newlyDisplayedColumns = /* @__PURE__ */ new Set();
    computedColumns.forEach((col, id) => {
      if (col.defaultHiddenWhenGroupedBy || hideColumnWhenGrouped2 != null) {
        const hideWhenGrouped = col.defaultHiddenWhenGroupedBy === "*" && isGrouped || (col.defaultHiddenWhenGroupedBy === true || hideColumnWhenGrouped2) && col.field && groupByMap.get(col.field) || typeof col.defaultHiddenWhenGroupedBy === "string" && groupByMap.get(col.defaultHiddenWhenGroupedBy) || typeof col.defaultHiddenWhenGroupedBy === "object" && Object.keys(col.defaultHiddenWhenGroupedBy).reduce(
          (acc, field) => acc || groupByMap.has(field),
          false
        );
        if (hideWhenGrouped) {
          if (newColumnVisibilityForGrouping[id] !== false) {
            if (columnVisibility[id] === false) {
              return;
            }
            newColumnVisibilityForGrouping[id] = false;
            updatedVisibilityWhenGrouping = true;
            newlyHiddenColumns.add(id);
          }
        } else {
          if (newColumnVisibilityForGrouping[id] === false) {
            delete newColumnVisibilityForGrouping[id];
            updatedVisibilityWhenGrouping = true;
            newlyDisplayedColumns.add(id);
          }
        }
      }
    });
    if (updatedVisibilityWhenGrouping) {
      componentActions.columnVisibilityForGrouping = newColumnVisibilityForGrouping;
      newlyDisplayedColumns.forEach((colId) => {
        delete newColumnVisibility[colId];
      });
      newlyHiddenColumns.forEach((colId) => {
        newColumnVisibility[colId] = false;
      });
      componentActions.columnVisibility = newColumnVisibility;
    }
  }, [
    computedColumns,
    columnTypes,
    groupBy,
    groupByMap,
    hideColumnWhenGrouped
  ]);
}
function getColumnsWhenGrouping(params) {
  const {
    pivotColumns,
    groupBy,
    pivotBy,
    selectionMode,
    groupColumn,
    pivotTotalColumnPosition,
    pivotGrandTotalColumnPosition,
    pivotColumn,
    groupRenderStrategy,
    toggleGroupRow,
    columns
  } = params;
  if (groupRenderStrategy === "inline") {
    return { columns: void 0, groupColumnIds: [] };
  }
  const computedColumns = /* @__PURE__ */ new Map();
  const groupColumnIds = [];
  if (groupRenderStrategy === "multi-column") {
    groupBy.forEach((groupByForColumn, groupIndexForColumn, arr) => {
      const generatedGroupColumn = getColumnForGroupBy(
        {
          groupByForColumn,
          groupBy,
          pivotBy,
          groupIndexForColumn,
          groupCount: arr.length,
          groupRenderStrategy,
          selectionMode
        },
        toggleGroupRow,
        groupColumn
      );
      const groupColumnId = generatedGroupColumn.id || `group-by-${groupByForColumn.field || groupByForColumn.groupField}`;
      groupColumnIds.push(groupColumnId);
      computedColumns.set(groupColumnId, generatedGroupColumn);
    });
  } else if (groupRenderStrategy === "single-column" && groupBy.length) {
    const singleGroupColumn = getSingleGroupColumn(
      {
        groupCount: groupBy.length,
        groupBy,
        pivotBy,
        groupRenderStrategy,
        selectionMode
      },
      toggleGroupRow,
      groupColumn
    );
    const groupColumnId = singleGroupColumn.id || "group-by";
    groupColumnIds.push(groupColumnId);
    computedColumns.set(groupColumnId, singleGroupColumn);
  }
  if (pivotColumns) {
    const columnsByField = {};
    columns.forEach((col) => {
      if (col.field) {
        columnsByField[col.field] = col;
      }
    });
    pivotColumns.forEach((col, key) => {
      var _a, _b;
      const isSimpleTotalColumn = col.pivotTotalColumn && col.columnGroup;
      const isGrandTotalColumn = col.pivotTotalColumn && !col.columnGroup;
      if (isSimpleTotalColumn && pivotTotalColumnPosition === false) {
        return;
      }
      if (isGrandTotalColumn && pivotGrandTotalColumnPosition === false) {
        return;
      }
      let column = __spreadValues({}, col);
      if (pivotColumn) {
        if (typeof pivotColumn === "function") {
          column = __spreadValues(__spreadValues({}, column), pivotColumn({
            column,
            pivotBy,
            groupBy
          }));
        } else {
          column = __spreadValues(__spreadValues({}, column), pivotColumn);
        }
      }
      if (column.inheritFromColumn !== false) {
        const colToInheritFrom = typeof column.inheritFromColumn === "string" ? columns.get(column.inheritFromColumn) : ((_a = column.pivotAggregator) == null ? void 0 : _a.field) ? columnsByField[(_b = column.pivotAggregator) == null ? void 0 : _b.field] : void 0;
        column = __spreadValues(__spreadValues({}, colToInheritFrom), column);
      }
      if (!column.render && column.renderValue) {
        column.render = (renderOptions) => {
          return column.renderValue(renderOptions);
        };
      }
      computedColumns.set(key, column);
    });
  } else {
    columns.forEach((col, colId) => {
      computedColumns.set(colId, col);
    });
  }
  return {
    columns: computedColumns.size ? computedColumns : void 0,
    groupColumnIds
  };
}

// src/components/InfiniteTable/hooks/useComputedColumns.ts
init_esm_shims();
import { useMemo as useMemo10 } from "react";

// src/components/InfiniteTable/hooks/useRerenderOnKeyChange.ts
init_esm_shims();
import { useEffect as useEffect26 } from "react";
var useRerenderOnKeyChange = (map2) => {
  const [renderId, rerender] = useRerender();
  useEffect26(() => {
    const update = rafFn(rerender);
    return interceptMap(map2, {
      set: update,
      clear: update,
      delete: update
    });
  }, [map2]);
  return renderId;
};

// src/components/InfiniteTable/hooks/useComputedColumns.ts
var useComputedColumns = ({
  columns,
  bodySize,
  columnMinWidth,
  columnMaxWidth,
  columnDefaultWidth,
  columnDefaultFlex,
  sortable,
  columnCssEllipsis,
  columnHeaderCssEllipsis,
  draggableColumns,
  sortInfo,
  multiSort,
  filterValue,
  filterTypes,
  columnOrder,
  columnPinning,
  editable,
  columnDefaultEditable,
  columnDefaultFilterable,
  columnDefaultSortable,
  scrollbarWidth: scrollbarWidth2,
  columnTypes,
  pinnedEndMaxWidth,
  pinnedStartMaxWidth,
  viewportReservedWidth,
  resizableColumns,
  columnVisibility,
  columnVisibilityAssumeVisible,
  columnSizing
}) => {
  const columnsRenderId = useRerenderOnKeyChange(columns);
  const {
    computedRemainingSpace,
    computedColumnOrder,
    computedVisibleColumns,
    computedVisibleColumnsMap,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedUnpinnedColumns,
    computedPinnedStartColumnsWidth,
    computedPinnedEndColumnsWidth,
    computedUnpinnedColumnsWidth,
    computedUnpinnedOffset,
    computedPinnedEndOffset,
    computedPinnedEndWidth,
    computedPinnedStartWidth,
    renderSelectionCheckBox,
    computedColumnsMap,
    computedColumnsMapInInitialOrder,
    fieldsToColumn
  } = useMemo10(() => {
    return getComputedColumns({
      columns,
      scrollbarWidth: scrollbarWidth2,
      bodySize,
      columnMinWidth,
      columnMaxWidth,
      columnDefaultWidth,
      columnDefaultFlex,
      columnCssEllipsis,
      columnHeaderCssEllipsis,
      viewportReservedWidth,
      resizableColumns,
      filterValue,
      filterTypes,
      sortable,
      sortInfo,
      multiSort,
      pinnedEndMaxWidth,
      pinnedStartMaxWidth,
      draggableColumns,
      columnOrder,
      columnPinning,
      columnDefaultEditable,
      columnDefaultFilterable,
      columnDefaultSortable,
      editable,
      columnSizing,
      columnTypes,
      columnVisibility,
      columnVisibilityAssumeVisible: columnVisibilityAssumeVisible != null ? columnVisibilityAssumeVisible : true
    });
  }, [
    columns,
    bodySize.width,
    columnMinWidth,
    columnMaxWidth,
    columnDefaultWidth,
    viewportReservedWidth,
    scrollbarWidth2,
    sortable,
    sortInfo,
    multiSort,
    filterValue,
    filterTypes,
    columnOrder,
    columnVisibility,
    columnVisibilityAssumeVisible,
    resizableColumns,
    pinnedEndMaxWidth,
    pinnedStartMaxWidth,
    columnSizing,
    columnTypes,
    columnPinning,
    columnDefaultEditable,
    columnDefaultFilterable,
    editable,
    columnsRenderId
  ]);
  const result = {
    renderSelectionCheckBox,
    columns,
    computedColumnsMap,
    computedPinnedEndWidth,
    computedPinnedStartWidth,
    computedRemainingSpace,
    computedUnpinnedOffset,
    computedPinnedEndOffset,
    computedPinnedStartColumnsWidth,
    computedPinnedEndColumnsWidth,
    computedUnpinnedColumnsWidth,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedUnpinnedColumns,
    computedVisibleColumns,
    computedVisibleColumnsMap,
    computedColumnOrder,
    computedColumnsMapInInitialOrder,
    fieldsToColumn
  };
  return result;
};

// src/components/InfiniteTable/hooks/useScrollbars.ts
init_esm_shims();
import { useState as useState16, useEffect as useEffect27, useLayoutEffect as useLayoutEffect11 } from "react";
var INITIAL_SCROLLBARS = {
  vertical: false,
  horizontal: false
};
function useScrollbars(brain) {
  const { getComponentState: getInfiniteTableState } = useComponentState();
  const { getState: getDataSourceState } = useDataSourceContextValue();
  const [scrollbars, setScrollbars] = useState16(INITIAL_SCROLLBARS);
  useEffect27(() => {
    return brain.onRenderCountChange(() => {
      const { scrollTopMax, scrollLeftMax } = brain;
      setScrollbars({
        vertical: scrollTopMax > 0,
        horizontal: scrollLeftMax > 0
      });
    });
  }, [brain]);
  useLayoutEffect11(() => {
    const dataSourceState = getDataSourceState();
    const { onScrollbarsChange } = getInfiniteTableState();
    const { notifyScrollbarsChange } = dataSourceState;
    if (onScrollbarsChange && // we add extra conditions so as to fire this only after initial data load
    dataSourceState.updatedAt && dataSourceState.dataArray.length) {
      onScrollbarsChange(scrollbars);
    }
    notifyScrollbarsChange(scrollbars);
  }, [scrollbars]);
  return scrollbars;
}

// src/components/InfiniteTable/hooks/useComputed.ts
function useComputed() {
  var _a;
  const { componentActions, componentState } = useComponentState();
  const {
    componentActions: dataSourceActions,
    componentState: dataSourceState,
    getState: getDataSourceState
  } = useDataSourceContextValue();
  const {
    columnOrder,
    columnVisibility,
    columnPinning,
    columnSizing,
    editable,
    columnDefaultEditable,
    columnDefaultFilterable,
    columnTypes,
    brain,
    bodySize,
    showSeparatePivotColumnForSingleAggregation
  } = componentState;
  useState17(() => {
    componentState.onRowHeightCSSVarChange.onChange((rowHeight) => {
      if (rowHeight) {
        componentActions.rowHeight = rowHeight;
      }
    });
    componentState.onColumnHeaderHeightCSSVarChange.onChange(
      (columnHeaderHeight) => {
        if (columnHeaderHeight) {
          componentActions.columnHeaderHeight = columnHeaderHeight;
        }
      }
    );
  });
  useEffect28(() => {
    dataSourceActions.showSeparatePivotColumnForSingleAggregation = showSeparatePivotColumnForSingleAggregation;
  }, [showSeparatePivotColumnForSingleAggregation]);
  const { multiSort, filterValue, filterTypes } = dataSourceState;
  useColumnGroups();
  const { toggleGroupRow } = useColumnsWhen();
  const columns = componentState.computedColumns;
  const {
    computedColumnOrder,
    computedVisibleColumns,
    computedVisibleColumnsMap,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedUnpinnedColumns,
    computedPinnedStartColumnsWidth,
    computedPinnedEndColumnsWidth,
    computedUnpinnedColumnsWidth,
    computedUnpinnedOffset,
    computedPinnedEndOffset,
    computedRemainingSpace,
    computedPinnedStartWidth,
    computedPinnedEndWidth,
    renderSelectionCheckBox,
    computedColumnsMap,
    computedColumnsMapInInitialOrder,
    fieldsToColumn
  } = useComputedColumns({
    columns,
    // scrollbarWidth: scrollbars.vertical ? getScrollbarWidth() : 0,
    // #scrollbarverticaltag
    // we use the default scrollbar width - using it dynamically causes issues
    // since we can have a scenario where there is no vertical scrollbar and a horizontal resize
    // can cause a horizontal scrollbar which in turn causes a vertical scrollbar and the scenario
    // can loop so it's safer for now to always reserve space for the scrollbar
    scrollbarWidth: void 0,
    columnCssEllipsis: componentState.columnCssEllipsis,
    columnHeaderCssEllipsis: componentState.columnHeaderCssEllipsis,
    columnMinWidth: componentState.columnMinWidth,
    columnMaxWidth: componentState.columnMaxWidth,
    columnDefaultWidth: componentState.columnDefaultWidth,
    columnDefaultFlex: componentState.columnDefaultFlex,
    columnDefaultSortable: componentState.columnDefaultSortable,
    pinnedStartMaxWidth: componentState.pinnedStartMaxWidth,
    pinnedEndMaxWidth: componentState.pinnedEndMaxWidth,
    bodySize,
    viewportReservedWidth: componentState.viewportReservedWidth,
    resizableColumns: componentState.resizableColumns,
    sortable: componentState.sortable,
    draggableColumns: componentState.draggableColumns,
    sortInfo: (_a = dataSourceState.sortInfo) != null ? _a : void 0,
    multiSort,
    columnOrder,
    columnVisibility,
    columnVisibilityAssumeVisible: true,
    columnPinning,
    editable,
    columnDefaultEditable,
    columnDefaultFilterable,
    filterValue,
    filterTypes,
    columnSizing,
    columnTypes
  });
  const rowspan = useColumnRowspan(computedVisibleColumns);
  const columnSize = useColumnSizeFn(computedVisibleColumns);
  const scrollbars = useScrollbars(brain);
  const computedPinnedStartOverflow = computedPinnedStartWidth ? computedPinnedStartColumnsWidth > computedPinnedStartWidth : false;
  const computedPinnedEndOverflow = computedPinnedEndWidth ? computedPinnedEndColumnsWidth > computedPinnedEndWidth : false;
  const [multiRowSelector] = useState17(() => {
    const multiRowSelector2 = new MultiRowSelector({
      getIdForIndex: (index) => getDataSourceState().dataArray[index].id
    });
    return multiRowSelector2;
  });
  return {
    multiRowSelector,
    scrollbars,
    columnSize,
    rowspan,
    toggleGroupRow,
    computedColumnsMap,
    computedColumnsMapInInitialOrder,
    renderSelectionCheckBox,
    computedPinnedStartOverflow,
    computedPinnedEndOverflow,
    computedPinnedStartWidth,
    computedPinnedEndWidth,
    computedVisibleColumns,
    computedColumnOrder,
    computedRemainingSpace,
    computedVisibleColumnsMap,
    // computedColumnVisibility: columnVisibility,
    computedPinnedStartColumns,
    computedPinnedEndColumns,
    computedUnpinnedColumns,
    computedPinnedStartColumnsWidth,
    computedPinnedEndColumnsWidth,
    computedUnpinnedColumnsWidth,
    computedUnpinnedOffset,
    computedPinnedEndOffset,
    fieldsToColumn
  };
}

// src/components/InfiniteTable/hooks/useLicense/useLicense.ts
init_esm_shims();
import { useMemo as useMemo11 } from "react";

// src/components/InfiniteTable/hooks/useLicense/decode.ts
init_esm_shims();

// src/components/InfiniteTable/hooks/useLicense/crc32.ts
init_esm_shims();
var DEFAULT_ReversedPolynomial = 3988292384;
function crc32_generate(reversedPolynomial = DEFAULT_ReversedPolynomial) {
  var table = new Array();
  var i, j, n;
  for (i = 0; i < 256; i++) {
    n = i;
    for (j = 8; j > 0; j--) {
      if ((n & 1) == 1) {
        n = n >>> 1 ^ reversedPolynomial;
      } else {
        n = n >>> 1;
      }
    }
    table[i] = n;
  }
  return table;
}
function crc32_initial() {
  return 4294967295;
}
function crc32_add_byte(table, crc, byte) {
  crc = crc >>> 8 ^ table[byte ^ crc & 255];
  return crc;
}
function crc32_final(crc) {
  crc = ~crc;
  crc = crc < 0 ? 4294967295 + crc + 1 : crc;
  return crc;
}
function crc32_compute_string(str, reversedPolynomial = DEFAULT_ReversedPolynomial) {
  var table = crc32_generate(reversedPolynomial);
  var crc = 0;
  var i;
  crc = crc32_initial();
  for (i = 0; i < str.length; i++)
    crc = crc32_add_byte(table, crc, str.charCodeAt(i));
  crc = crc32_final(crc);
  return `${crc}`;
}

// src/components/InfiniteTable/hooks/useLicense/decode.ts
var fieldsToLicenseDetails = (fields) => {
  var _a;
  const fieldsMap = fields.reduce((acc, field) => {
    acc.set(field.name, field.value);
    return acc;
  }, /* @__PURE__ */ new Map());
  const details = {
    distribution: fieldsMap.get("Type") === "distribution",
    count: fieldsMap.get("DevCount") ? Number(fieldsMap.get("DevCount")) : 0,
    start: new Date(fieldsMap.get("StartDate")),
    end: new Date(fieldsMap.get("EndDate")),
    owner: fieldsMap.get("Owner"),
    type: fieldsMap.get("Type"),
    timestamp: fieldsMap.get("TS") ? Number(fieldsMap.get("TS")) : 0,
    trial: fieldsMap.get("Trial") === "true" ? true : false,
    ref: (_a = fieldsMap.get("Ref")) != null ? _a : ""
  };
  return details;
};
var logLicenseError = (lines, fn = console.error.bind(console)) => {
  lines = ["* * * infinite-table.com * * *", ...lines];
  const max = Math.max(Math.max(...lines.map((l) => l.length)) + 4 * 2, 60);
  lines.forEach((line) => {
    let sideCount = (max - line.length) / 2 - 1;
    let offset = 0;
    if (sideCount !== Math.round(sideCount)) {
      offset = -1;
      sideCount = Math.round(sideCount);
    }
    const start = sideCount + offset;
    const end = sideCount;
    fn("*".repeat(start) + " " + line + " " + "*".repeat(end));
  });
  fn("*".repeat(max));
};
var isValidLicense = (licenseKey = "", packageInfo, fn) => {
  let details;
  try {
    details = decode(licenseKey);
  } catch (ex) {
    logLicenseError(
      [
        `You don't have a valid Infinite Table license`,
        "Please visit infinite-table.com to purchase a license.",
        "Thank you for playing fair!"
      ],
      fn
    );
    return false;
  }
  const currentVersionReleaseDate = new Date(packageInfo.publishedAt);
  const licenseEndDate = new Date(details.end);
  if (licenseEndDate < currentVersionReleaseDate) {
    logLicenseError(
      [
        `
Your Infinite Table license has expired on ${licenseEndDate.toDateString()}.
`,
        `You are using version "${packageInfo.version}" of Infinite Table, which was published on ${currentVersionReleaseDate.toDateString()}.`,
        `Please visit infinite-table.com to renew your license.`,
        `Thank you for playing fair!`
      ],
      fn
    );
    return false;
  }
  return true;
};
var decode = (licenseKey) => {
  let crc = "";
  let fields = licenseKey.split("|").map((part) => {
    let [name, value] = part.split("=");
    if (name === "C") {
      crc = value;
    }
    return {
      name,
      value
    };
  });
  if (!crc) {
    throw "Invalid license";
  }
  const crcParts = crc.split(",").reverse();
  const overallCrc = crcParts.pop();
  crcParts.forEach((fieldCrc, index) => {
    const field = fields[index];
    if (crc32_compute_string(field.value) !== fieldCrc) {
      throw "Invalid license";
    }
  });
  const fieldsWithoutC = [...fields];
  fieldsWithoutC.pop();
  const fieldsWithoutCString = fieldsWithoutC.map((field) => {
    return `${field.name}=${field.value}`;
  }).join("|");
  if (crc32_compute_string(fieldsWithoutCString) !== overallCrc) {
    throw "Invalid license";
  }
  fields = fields.map((f) => {
    return __spreadProps(__spreadValues({}, f), {
      value: decodeURI(f.value)
    });
  });
  return fieldsToLicenseDetails(fields);
};

// src/components/InfiniteTable/hooks/useLicense/useLicense.ts
var SANDPACK_REGEX = /(https):\/\/\d+\-\d+\-\d+\-(sandpack\.codesandbox\.io)/g;
var SANDBOX_REGEX = /(https):\/\/\S+(\.csb\.app)/g;
var origin = typeof window !== "undefined" ? window.location.origin : "";
var isInsideSandpack = () => {
  const [_fullUrl, protocol, sandpackUrl] = Array.from(
    SANDPACK_REGEX.exec(origin) || []
  );
  return protocol === "https" && sandpackUrl === "sandpack.codesandbox.io";
};
var isInsideSandbox = () => {
  const [_fullUrl, protocol, sandboxUrl] = Array.from(
    SANDBOX_REGEX.exec(origin) || []
  );
  return protocol === "https" && sandboxUrl === ".csb.app";
};
var isInsidePlayground = isInsideSandbox() || isInsideSandpack();
var useLicense = (licenseKey = "") => {
  const valid = useMemo11(() => {
    let valid2 = isValidLicense(licenseKey, {
      publishedAt: 1624970570587,
      version: "2.0.7"
    });
    if (!licenseKey && !valid2 && isInsidePlayground) {
      return true;
    }
    return valid2;
  }, [licenseKey]);
  return valid;
};

// src/components/InfiniteTable/hooks/useScrollToActiveCell.ts
init_esm_shims();
import { useRef as useRef24, useEffect as useEffect29 } from "react";
var RETRIES = 10;
function useScrollToActiveCell(activeCellIndex, dataCount, imperativeApi) {
  const didScrollRef = useRef24(false);
  const rafId = useRef24(null);
  useEffect29(() => {
    if (activeCellIndex != null) {
      didScrollRef.current = false;
      cancelRaf(rafId.current);
    }
  }, [activeCellIndex]);
  useEffect29(() => {
    if (activeCellIndex != null && !didScrollRef.current) {
      let tryScroll2 = function(times = 0) {
        times++;
        cancelRaf(rafId.current);
        rafId.current = raf(() => {
          didScrollRef.current = imperativeApi.scrollCellIntoView(
            activeCellIndex[0],
            activeCellIndex[1],
            {
              offset: 30
            }
          );
          if (!didScrollRef.current && times < RETRIES) {
            tryScroll2(times);
          }
        });
      };
      var tryScroll = tryScroll2;
      tryScroll2();
    }
    return () => {
      cancelRaf(rafId.current);
    };
  }, [activeCellIndex, dataCount]);
}

// src/components/InfiniteTable/hooks/useScrollToActiveRow.ts
init_esm_shims();
import { useRef as useRef25, useEffect as useEffect30 } from "react";
var RETRIES2 = 10;
function useScrollToActiveRow(activeRowIndex, dataCount, imperativeApi) {
  const didScrollRef = useRef25(false);
  const rafId = useRef25(null);
  useEffect30(() => {
    if (activeRowIndex != null) {
      didScrollRef.current = false;
      cancelAnimationFrame(rafId.current);
    }
  }, [activeRowIndex]);
  useEffect30(() => {
    if (activeRowIndex != null && !didScrollRef.current) {
      let tryScroll2 = function(times = 0) {
        times++;
        rafId.current = requestAnimationFrame(() => {
          didScrollRef.current = imperativeApi.scrollRowIntoView(
            activeRowIndex,
            {
              offset: 0
            }
          );
          if (!didScrollRef.current && times < RETRIES2) {
            tryScroll2(times);
          }
        });
      };
      var tryScroll = tryScroll2;
      tryScroll2();
    }
    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [activeRowIndex, dataCount]);
}

// src/components/InfiniteTable/utils/toCSSVarName.ts
init_esm_shims();
var toCSSVarName = (value) => `--infinite-${value}`;

// src/components/InfiniteTable/eventHandlers/index.ts
init_esm_shims();
import { useCallback as useCallback22, useMemo as useMemo12, useEffect as useEffect31 } from "react";

// src/components/InfiniteTable/eventHandlers/onCellClick.ts
init_esm_shims();
function onCellClick(context, event) {
  var _a, _b;
  updateRowSelectionOnCellClick(context, event);
  if (event.detail === 2) {
    onCellDoubleClick(context, event);
  }
  (_b = (_a = context.getState()).onCellClick) == null ? void 0 : _b.call(_a, context, event);
}
function onCellDoubleClick(context, _event) {
  const computed = context.getComputed();
  const column = computed.computedVisibleColumns[context.colIndex];
  context.api.startEdit({
    rowIndex: context.rowIndex,
    columnId: column.id
  });
}
function updateRowSelectionOnCellClick(context, event) {
  const {
    rowIndex,
    getDataSourceState,
    getComputed,
    dataSourceActions,
    api,
    cloneRowSelection: cloneRowSelection2
  } = context;
  const { multiRowSelector, renderSelectionCheckBox } = getComputed();
  const dataSourceState = getDataSourceState();
  const { selectionMode, groupBy, dataArray } = dataSourceState;
  if (groupBy.length) {
    return false;
  }
  if (selectionMode === "multi-row") {
    if (renderSelectionCheckBox && !event.key) {
      return false;
    }
    let { rowSelection: rowSelectionState } = dataSourceState;
    rowSelectionState = cloneRowSelection2(
      rowSelectionState
    );
    multiRowSelector.rowSelectionState = rowSelectionState;
    if (rowSelectionState && typeof rowSelectionState === "object") {
      if (event.shiftKey) {
        multiRowSelector.multiSelectClick(rowIndex);
      } else if (event.metaKey || event.ctrlKey) {
        multiRowSelector.singleAddClick(rowIndex);
      } else {
        multiRowSelector.resetClick(rowIndex);
      }
      dataSourceActions.rowSelection = rowSelectionState;
      return true;
    }
  } else if (selectionMode === "single-row") {
    const id = dataArray[rowIndex].id;
    if (event.metaKey || event.ctrlKey) {
      api.selectionApi.toggleRowSelection(id);
    } else {
      api.selectionApi.selectRow(id);
    }
  }
  return false;
}

// src/components/InfiniteTable/eventHandlers/onKeyDown.ts
init_esm_shims();

// src/components/InfiniteTable/eventHandlers/keyboardNavigation.ts
init_esm_shims();

// src/components/utils/clamp.ts
init_esm_shims();
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// src/components/InfiniteTable/eventHandlers/keyboardNavigation.ts
function handleRowNavigation(options, event) {
  const { getState, getDataSourceState, actions, api } = options;
  const { key } = event;
  const dataArray = getDataSourceState().dataArray;
  const arrLength = dataArray.length;
  const state = getState();
  const { brain } = state;
  let { activeRowIndex } = state;
  if (activeRowIndex == null) {
    return false;
  }
  const {
    start: [startRow],
    end: [endRow]
  } = brain.getRenderRange();
  const initialActiveRowIndex = activeRowIndex;
  const renderRowCount = endRow - startRow - 1;
  const min = 0;
  const max = arrLength - 1;
  const KeyToFunction = {
    ArrowDown: () => {
      activeRowIndex = clamp(activeRowIndex + 1, min, max);
    },
    ArrowUp: () => {
      activeRowIndex = clamp(activeRowIndex - 1, min, max);
    },
    ArrowLeft: () => {
      const rowInfo = dataArray[activeRowIndex];
      if (rowInfo && rowInfo.isGroupRow) {
        return api.collapseGroupRow(rowInfo.groupKeys);
      }
      return false;
    },
    ArrowRight: () => {
      const rowInfo = dataArray[activeRowIndex];
      if (rowInfo && rowInfo.isGroupRow) {
        return api.expandGroupRow(rowInfo.groupKeys);
      }
      return false;
    },
    Enter: () => {
      const rowInfo = dataArray[activeRowIndex];
      if (rowInfo && rowInfo.isGroupRow) {
        return api.toggleGroupRow(rowInfo.groupKeys);
      }
      return false;
    },
    PageDown: () => {
      activeRowIndex = Math.min(
        activeRowIndex + renderRowCount,
        arrLength - 1
      );
    },
    PageUp: () => {
      activeRowIndex = Math.max(activeRowIndex - renderRowCount, min);
    },
    End: () => {
      activeRowIndex = max;
    },
    Home: () => {
      activeRowIndex = min;
    }
  };
  const Fn = KeyToFunction[key];
  if (!Fn) {
    return false;
  }
  Fn();
  if (initialActiveRowIndex !== activeRowIndex) {
    actions.activeRowIndex = activeRowIndex;
    return true;
  }
  return false;
}
function handleCellNavigation(options, event) {
  const {
    api,
    getState,
    getComputed,
    getDataSourceState,
    actions
  } = options;
  const { key, shiftKey } = event;
  const dataArray = getDataSourceState().dataArray;
  const state = getState();
  const { activeCellIndex, brain } = state;
  if (!activeCellIndex) {
    return false;
  }
  let [rowIndex, colIndex] = activeCellIndex;
  const {
    start: [startRow, startCol],
    end: [endRow, endCol]
  } = brain.getRenderRange();
  const renderRowCount = endRow - startRow - 1;
  const renderColCount = endCol - startCol - 1;
  const maxRow = getDataSourceState().dataArray.length - 1;
  const maxCol = getComputed().computedVisibleColumns.length - 1;
  const minRow = 0;
  const minCol = 0;
  rowIndex = clamp(rowIndex, 0, maxRow);
  colIndex = clamp(colIndex, 0, maxCol);
  actions.activeCellIndex = [rowIndex, colIndex];
  const KeyToFunction = {
    ArrowDown: () => {
      rowIndex = clamp(rowIndex + 1, minRow, maxRow);
    },
    ArrowUp: () => {
      rowIndex = clamp(rowIndex - 1, minRow, maxRow);
    },
    ArrowLeft: () => {
      if (colIndex === minCol) {
        if (rowIndex !== minRow) {
          colIndex = maxCol;
        }
        KeyToFunction.ArrowUp();
      } else {
        colIndex = clamp(colIndex - 1, minCol, maxCol);
      }
    },
    ArrowRight: () => {
      if (colIndex === maxCol) {
        if (rowIndex !== maxRow) {
          colIndex = minCol;
        }
        KeyToFunction.ArrowDown();
      } else {
        colIndex = clamp(colIndex + 1, minCol, maxCol);
      }
    },
    Enter: () => {
      const rowInfo = dataArray[rowIndex];
      if (rowInfo && rowInfo.isGroupRow) {
        return api.toggleGroupRow(rowInfo.groupKeys);
      }
      return false;
    },
    PageDown: () => {
      if (!shiftKey) {
        rowIndex = Math.min(rowIndex + renderRowCount, maxRow);
      } else {
        colIndex = Math.min(colIndex + renderColCount, maxCol);
      }
    },
    PageUp: () => {
      if (!shiftKey) {
        rowIndex = Math.max(rowIndex - renderRowCount, minRow);
      } else {
        colIndex = Math.max(colIndex - renderColCount, minCol);
      }
    },
    End: () => {
      if (!shiftKey) {
        rowIndex = maxRow;
      } else {
        colIndex = maxCol;
      }
    },
    Home: () => {
      if (!shiftKey) {
        rowIndex = minRow;
      } else {
        colIndex = minCol;
      }
    }
  };
  const Fn = KeyToFunction[key];
  if (!Fn) {
    return false;
  }
  Fn();
  actions.activeCellIndex = [rowIndex, colIndex];
  return true;
}
var validKeys = {
  ArrowUp: true,
  ArrowDown: true,
  ArrowLeft: true,
  ArrowRight: true,
  PageUp: true,
  PageDown: true,
  Home: true,
  End: true,
  Enter: true,
  " ": true
};
function handleKeyboardNavigation(options, event) {
  const { key } = event;
  const { getState } = options;
  const state = getState();
  const {
    activeRowIndex,
    activeCellIndex,
    keyboardNavigation,
    cellContextMenuVisibleFor,
    contextMenuVisibleFor
  } = state;
  if (cellContextMenuVisibleFor || contextMenuVisibleFor) {
    return false;
  }
  if (!validKeys[key]) {
    return false;
  }
  if (activeRowIndex != null && keyboardNavigation === "row") {
    return handleRowNavigation(options, event);
  }
  if (activeCellIndex != null && keyboardNavigation === "cell") {
    return handleCellNavigation(options, event);
  }
  return false;
}

// src/components/InfiniteTable/eventHandlers/keyboardSelection.ts
init_esm_shims();
var validKeys2 = {
  Enter: true,
  " ": true,
  a: true
};
function handleKeyboardSelection(context, keyboardEvent) {
  const {
    getState,
    getDataSourceState,
    dataSourceActions,
    api: imperativeApi,
    cloneRowSelection: cloneRowSelection2
  } = context;
  const { key, ctrlKey, metaKey } = keyboardEvent;
  if (!validKeys2[key]) {
    return false;
  }
  const state = getState();
  const dataSourceState = getDataSourceState();
  const {
    activeRowIndex,
    activeCellIndex,
    keyboardNavigation,
    keyboardSelection
  } = state;
  const { selectionMode, groupBy, rowSelection } = dataSourceState;
  if (keyboardSelection === false) {
    return false;
  }
  const rowIndex = keyboardNavigation === "row" && activeRowIndex != null ? activeRowIndex : keyboardNavigation === "cell" && activeCellIndex != null ? activeCellIndex[0] : null;
  const rowInfo = rowIndex != null ? dataSourceState.dataArray[rowIndex] : null;
  if (!rowInfo || rowIndex == null) {
    return false;
  }
  if (selectionMode === "single-row" && key === " ") {
    imperativeApi.selectionApi.toggleRowSelection(rowInfo.id);
    return true;
  }
  if (selectionMode !== "multi-row") {
    return false;
  }
  if (key === "a" && (ctrlKey || metaKey)) {
    const rowSelectionState = cloneRowSelection2(
      rowSelection
    );
    rowSelectionState.selectAll();
    dataSourceActions.rowSelection = rowSelectionState;
    return true;
  }
  if (key === " ") {
    if (groupBy.length) {
      if (rowInfo.isGroupRow && rowInfo.groupKeys) {
        imperativeApi.selectionApi.toggleGroupRowSelection(rowInfo.groupKeys);
      } else {
        imperativeApi.selectionApi.toggleRowSelection(rowInfo.id);
      }
      return true;
    } else {
      const event = __spreadValues({}, keyboardEvent);
      const { renderSelectionCheckBox } = context.getComputed();
      if (renderSelectionCheckBox) {
        event.metaKey = false;
        event.ctrlKey = true;
      }
      return updateRowSelectionOnCellClick(__spreadProps(__spreadValues({}, context), { rowIndex }), event);
    }
  }
  return false;
}

// src/components/InfiniteTable/eventHandlers/handleBrowserFocusChangeOnKeyboardNavigation.ts
init_esm_shims();

// src/components/InfiniteTable/utils/getFocusableChildrenForNode.ts
init_esm_shims();
var selector = [
  "input",
  "textarea",
  "select",
  "[tabindex]",
  "a[href]",
  "button",
  "object"
].join(", ");
var getFocusableChildrenForNode = (node) => {
  const children = Array.from(node.querySelectorAll(selector));
  return children.filter(
    (child) => !!child.offsetParent
  );
};
var getFirstFocusableChildForNode = (node) => {
  return node.querySelector(selector);
};

// src/components/InfiniteTable/utils/cellFocusUtils.ts
init_esm_shims();
var import_binary_search3 = __toESM(require_binary_search());

// src/components/InfiniteTable/utils/waitForFunction.ts
init_esm_shims();
function waitForFunction(fn, tickTimeout = 10, maxTimeout = 300) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      function waitFor() {
        const now = Date.now();
        if (now - start > maxTimeout) {
          return reject(false);
        }
        if (!fn()) {
          setTimeout(waitFor, tickTimeout);
          return;
        }
        resolve(true);
      }
      waitFor();
    });
  });
}

// src/components/InfiniteTable/utils/cellFocusUtils.ts
var RETRIES3 = 10;
var SORT_ASC2 = (a, b) => a - b;
function isCellFocusable(cellPos, context) {
  const { getComputed, getDataSourceState, getState, api, dataSourceApi } = context;
  const { editingCell } = getState();
  const { dataArray } = getDataSourceState();
  const { computedVisibleColumns, computedColumnsMap } = getComputed();
  const column = computedVisibleColumns[cellPos.colIndex];
  if (!column) {
    return false;
  }
  if (editingCell && editingCell.columnId === column.id && editingCell.rowIndex === cellPos.rowIndex) {
    return true;
  }
  if (!column.contentFocusable) {
    return false;
  }
  if (column.contentFocusable === true) {
    return true;
  }
  const columnApi = getColumnApiForColumn(column.id, context);
  return column.contentFocusable(__spreadProps(__spreadValues({
    column
  }, getFormattedValueContextForCell({
    column,
    rowInfo: dataArray[cellPos.rowIndex],
    columnsMap: computedColumnsMap,
    context
  }).formattedValueContext), {
    columnApi,
    api,
    dataSourceApi
  }));
}
function getFollowingFocusableCell(cellPos, direction, context) {
  const editingCell = context.getState().editingCell;
  const nextCellPos = getFollowingCellPositionOptimized(
    cellPos,
    direction,
    context,
    {
      isCellFocusable,
      isColumnElligible: (col) => {
        if (editingCell && editingCell.columnId === col.id) {
          return true;
        }
        return !!col.contentFocusable;
      }
    }
  );
  return nextCellPos;
}
function getNextCol(colIndex, direction, validColIndexes) {
  var _a;
  let index = (0, import_binary_search3.default)(validColIndexes, colIndex + direction, SORT_ASC2);
  if (index < 0) {
    index = ~index;
    if (direction > 0 && index >= validColIndexes.length) {
      return null;
    }
    if (direction < 0 && index === 0) {
      return null;
    }
  }
  return (_a = validColIndexes[index]) != null ? _a : null;
}
globalThis.getNextCol = getNextCol;
function getFollowingCellPositionOptimized(cellPos, direction, context, options) {
  const { isColumnElligible, isCellFocusable: isCellFocusable2 } = options;
  const validColIndexes = context.getComputed().computedVisibleColumns.filter(isColumnElligible).reduce((acc, col) => {
    acc.push(col.computedVisibleIndex);
    return acc;
  }, []);
  if (!validColIndexes.length) {
    return null;
  }
  const { getDataSourceState } = context;
  const { dataArray } = getDataSourceState();
  let rowIndex = cellPos.rowIndex;
  let colIndex = cellPos.colIndex;
  while (rowIndex != null || colIndex != null) {
    colIndex = colIndex === null ? validColIndexes[direction === -1 ? validColIndexes.length - 1 : 0] : getNextCol(colIndex, direction, validColIndexes);
    if (colIndex === null) {
      rowIndex += direction;
      if (rowIndex < 0 || rowIndex >= dataArray.length) {
        return null;
      }
      continue;
    }
    if (isCellFocusable2({ colIndex, rowIndex }, context)) {
      return {
        colIndex,
        rowIndex
      };
    }
  }
  return null;
}
function focusLastFocusableCell(context) {
  return __async(this, null, function* () {
    const lastCellPos = {
      rowIndex: context.getDataSourceState().dataArray.length - 1,
      colIndex: context.getComputed().computedVisibleColumns.length - 1
    };
    const cellPos = isCellFocusable(lastCellPos, context) ? lastCellPos : getFollowingFocusableCell(lastCellPos, -1, context);
    if (cellPos) {
      yield tryScrollToCell([cellPos.rowIndex, cellPos.colIndex], context);
      const cellNode = context.getState().getDOMNodeForCell(cellPos);
      if (!cellNode) {
        return;
      }
      const first = getFirstFocusableChildForNode(cellNode);
      first == null ? void 0 : first.focus();
    }
  });
}
function tryScrollToCell(_0, _1) {
  return __async(this, arguments, function* ([rowIndex, colIndex], context) {
    const { api } = context;
    return new Promise((resolve, reject) => {
      const maxRetries = RETRIES3;
      let rafId = null;
      let didScroll = false;
      function tryScroll(times = 0) {
        times++;
        cancelRaf(rafId);
        rafId = raf(() => __async(this, null, function* () {
          didScroll = api.scrollCellIntoView(rowIndex, colIndex, {
            offset: 30
          });
          if (!didScroll && times < maxRetries) {
            tryScroll(times);
          }
          if (didScroll) {
            try {
              yield waitForFunction(
                () => !!context.getState().getDOMNodeForCell({
                  rowIndex,
                  colIndex
                })
              );
            } catch (e) {
              reject(e);
              return;
            }
            resolve(true);
          }
        }));
      }
      tryScroll();
    });
  });
}

// src/components/InfiniteTable/eventHandlers/handleBrowserFocusChangeOnKeyboardNavigation.ts
var CELL_SELECTOR = `.${InfiniteTableColumnCellClassName}`;
function handleBrowserFocusChangeOnKeyboardNavigation(context, event) {
  if (event.key !== "Tab") {
    return false;
  }
  const direction = event.shiftKey ? -1 : 1;
  const target = event.target;
  const scrollerDOMNode = context.getState().scrollerDOMRef.current;
  const scrollerFocused = document.activeElement === scrollerDOMNode || target === scrollerDOMNode;
  if (!scrollerDOMNode) {
    return false;
  }
  if (scrollerFocused && direction === -1) {
    return false;
  }
  const cell = scrollerFocused ? null : selectParent(target, CELL_SELECTOR);
  let rowIndex = null;
  let colIndex = null;
  if (cell) {
    rowIndex = Number(cell.getAttribute("data-row-index"));
    colIndex = Number(cell.getAttribute("data-col-index"));
  } else if (scrollerFocused) {
    const { activeCellIndex } = context.getState();
    [rowIndex, colIndex] = activeCellIndex || [0, 0];
  }
  if (rowIndex == null || colIndex == null) {
    return false;
  }
  if (isNaN(rowIndex) || isNaN(colIndex)) {
    return false;
  }
  const cellPos = scrollerFocused && isCellFocusable({ colIndex, rowIndex }, context) ? {
    rowIndex,
    colIndex
  } : getFollowingFocusableCell(
    {
      rowIndex,
      colIndex
    },
    direction,
    context
  );
  if (!cellPos) {
    if (direction === -1) {
      scrollerDOMNode.focus();
    } else {
      const nodes = getFocusableChildrenForNode(document.body);
      const focusDetectDOMNode = context.getState().focusDetectDOMRef.current;
      const index = nodes.findIndex((node) => node === focusDetectDOMNode);
      const nextNode = nodes[index + 1];
      nextNode == null ? void 0 : nextNode.focus();
    }
    return true;
  }
  tryScrollToCell([cellPos.rowIndex, cellPos.colIndex], context).then(() => {
    const cellNode = context.getState().getDOMNodeForCell(cellPos);
    if (!cellNode) {
      return;
    }
    const first = getFirstFocusableChildForNode(cellNode);
    first == null ? void 0 : first.focus();
  });
  return true;
}

// src/components/InfiniteTable/eventHandlers/onKeyDown.ts
function onKeyDown(context, event) {
  var _a, _b;
  const keyboardHandlerContext = __spreadProps(__spreadValues({}, context), {
    cloneRowSelection: (rowSelection) => {
      return cloneRowSelection(rowSelection, context.getDataSourceState);
    }
  });
  if (handleKeyboardSelection(keyboardHandlerContext, event)) {
    event.preventDefault();
  }
  if (handleBrowserFocusChangeOnKeyboardNavigation(keyboardHandlerContext, event)) {
    event.preventDefault();
  } else {
    if (!context.getState().focusedWithin && handleKeyboardNavigation(keyboardHandlerContext, event)) {
      event.preventDefault();
    }
  }
  if (event.key === "Enter") {
    const { activeCellIndex } = context.getState();
    if (activeCellIndex) {
      const [rowIndex, colIndex] = activeCellIndex;
      const column = context.getComputed().computedVisibleColumns[colIndex];
      if (column.computedEditable) {
        context.api.startEdit({
          rowIndex,
          columnId: column.id
        });
      }
    }
  }
  if (context.api.isEditInProgress()) {
    if (event.key === "Escape") {
      context.api.stopEdit({ cancel: true });
    }
    if (event.key === "Tab") {
      event.preventDefault();
    }
  }
  (_b = (_a = context.getState()).onKeyDown) == null ? void 0 : _b.call(_a, context, event);
}

// src/components/InfiniteTable/eventHandlers/index.ts
function useEventHandlersContext() {
  const {
    getState,
    actions,
    api,
    getComputed
  } = useInfiniteTable();
  const {
    getState: getDataSourceState,
    componentActions: dataSourceActions,
    api: dataSourceApi
  } = useDataSourceContextValue();
  const context = useMemo12(() => {
    const context2 = {
      getComputed,
      dataSourceApi,
      api,
      getState,
      actions,
      getDataSourceState,
      dataSourceActions,
      cloneRowSelection: (rowSelection) => {
        return cloneRowSelection(rowSelection, getDataSourceState);
      }
    };
    return context2;
  }, [
    getState,
    actions,
    getDataSourceState,
    dataSourceActions,
    api,
    dataSourceApi,
    getComputed
  ]);
  return context;
}
function handleDOMEvents() {
  const context = useEventHandlersContext();
  useEffect31(() => {
    const removeOnKeyDown = context.getState().keyDown.onChange((event) => {
      onKeyDown(context, event);
    });
    function cellClickHandler(cellClickParam) {
      if (!cellClickParam) {
        return;
      }
      const event = cellClickParam.event;
      const column = context.getComputed().computedVisibleColumns[cellClickParam.colIndex];
      const columnApi = getColumnApiForColumn(column.id, context);
      onCellClick(
        __spreadProps(__spreadValues({}, context), {
          rowIndex: cellClickParam.rowIndex,
          colIndex: cellClickParam.colIndex,
          column,
          columnApi
        }),
        __spreadProps(__spreadValues({}, event), { key: "" })
      );
    }
    const removeOnCellClick = context.getState().cellClick.onChange(cellClickHandler);
    return () => {
      removeOnKeyDown();
      removeOnCellClick();
    };
  }, []);
}
function subscribeToDOMEvents() {
  const { getState } = useInfiniteTable();
  const onKeyDown2 = useCallback22((event) => {
    getState().keyDown(event);
  }, []);
  return { onKeyDown: onKeyDown2 };
}
function useDOMEventHandlers() {
  handleDOMEvents();
  return subscribeToDOMEvents();
}

// src/components/InfiniteTable/hooks/useColumnMenu.ts
init_esm_shims();
import { useEffect as useEffect35 } from "react";

// src/components/hooks/useOverlay/index.tsx
init_esm_shims();
import * as React52 from "react";
import {
  useCallback as useCallback23,
  useEffect as useEffect33,
  useLayoutEffect as useLayoutEffect12,
  useState as useState18
} from "react";
import { createPortal as createPortal2 } from "react-dom";

// src/utils/pageGeometry/alignment/index.ts
init_esm_shims();

// src/utils/pageGeometry/Point.ts
init_esm_shims();
var Point = class {
  constructor(point) {
    this.top = 0;
    this.left = 0;
    this.left = point.left;
    this.top = point.top;
  }
  static clone(point) {
    return new Point(point);
  }
  static from(point) {
    return new Point(point);
  }
  shift(shiftOptions) {
    if (shiftOptions.top != null) {
      this.top += shiftOptions.top;
    }
    if (shiftOptions.left != null) {
      this.left += shiftOptions.left;
    }
    return this;
  }
  getDistanceToPoint(point) {
    const shiftTop = point.top - this.top;
    const shiftLeft = point.left - this.left;
    return {
      top: shiftTop,
      left: shiftLeft
    };
  }
};

// src/utils/pageGeometry/Rectangle.ts
init_esm_shims();

// src/utils/pageGeometry/ConvexPoly.ts
init_esm_shims();

// src/utils/pageGeometry/PolyWithPoints.ts
init_esm_shims();

// src/utils/pageGeometry/polyContainsPoint.ts
init_esm_shims();
function getAngle(p, center) {
  let angle = Math.atan2(p.top - center.top, p.left - center.left);
  if (angle <= 0) {
    angle = 2 * Math.PI + angle;
  }
  return angle;
}
function getDistance(p1, p2) {
  return Math.sqrt(__pow(p2.top - p1.top, 2) + __pow(p2.left - p1.left, 2));
}
function comparePoints(p1, p2, center) {
  const angle1 = getAngle(p1, center);
  const angle2 = getAngle(p2, center);
  if (angle1 === angle2) {
    return getDistance(center, p2) - getDistance(center, p1);
  }
  return angle1 - angle2;
}
function sortPoints(points) {
  if (points.length < 3) {
    return points;
  }
  const [...result] = points;
  const center = { top: 0, left: 0 };
  points.forEach((p) => {
    center.top += p.top;
    center.left += p.left;
  });
  center.top /= points.length;
  center.left /= points.length;
  result.sort((a, b) => comparePoints(a, b, center));
  return result;
}
function polyContainsPoint(points, point) {
  points = sortPoints(points);
  const [rootPoint] = points;
  for (let i = 1, len = points.length - 1; i < len; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    if (triangleContainsPoint([rootPoint, p1, p2], point)) {
      return true;
    }
  }
  return false;
}
function triangleContainsPoint(points, point) {
  const [a, b, c] = points;
  const p = point;
  let det = (b.left - a.left) * (c.top - a.top) - (b.top - a.top) * (c.left - a.left);
  return det * ((b.left - a.left) * (p.top - a.top) - (b.top - a.top) * (p.left - a.left)) >= 0 && det * ((c.left - b.left) * (p.top - b.top) - (c.top - b.top) * (p.left - b.left)) >= 0 && det * ((a.left - c.left) * (p.top - c.top) - (a.top - c.top) * (p.left - c.left)) >= 0;
}

// src/utils/pageGeometry/PolyWithPoints.ts
var PolyWithPoints = class {
  containsPoint(point) {
    return polyContainsPoint(this.getPoints(), point);
  }
  contains(poly) {
    const points = poly.getPoints();
    for (let i = 0, len = points.length; i < len; i++) {
      if (!this.containsPoint(points[i])) {
        return false;
      }
    }
    return true;
  }
  intersects(r) {
    return this.privateIntersects(r, false);
  }
  privateIntersects(r, skipOtherCheck) {
    const pointsOfR = r.getPoints();
    for (let i = 0, len = pointsOfR.length; i < len; i++) {
      if (this.containsPoint(pointsOfR[i])) {
        return true;
      }
    }
    if (skipOtherCheck) {
      return false;
    }
    return r.privateIntersects(this, true);
  }
};

// src/utils/pageGeometry/ConvexPoly.ts
var ConvexPoly = class extends PolyWithPoints {
  constructor(points) {
    super();
    this.points = points.map(Point.clone);
  }
  static clone(points) {
    return new ConvexPoly(points);
  }
  getPoints() {
    return this.points;
  }
  shift(shiftOptions) {
    this.points.forEach((p) => {
      p.shift(shiftOptions);
    });
    return this;
  }
};

// src/utils/pageGeometry/Rectangle.ts
var Rectangle = class extends PolyWithPoints {
  constructor(coordsAndSize) {
    super();
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    if (!coordsAndSize) {
    }
    this.top = coordsAndSize.top;
    this.left = coordsAndSize.left;
    if (typeof coordsAndSize.width === "number") {
      this.width = coordsAndSize.width;
      this.height = coordsAndSize.height;
    } else {
      this.width = coordsAndSize.right - coordsAndSize.left;
      this.height = coordsAndSize.bottom - coordsAndSize.top;
    }
  }
  static fromDOMRect(rect) {
    return new Rectangle(rect);
  }
  static clone(rect) {
    return new Rectangle(rect);
  }
  static from(rect) {
    return Rectangle.clone(rect);
  }
  static fromPoint(point) {
    return Rectangle.from({
      top: point.top,
      left: point.left,
      width: 0,
      height: 0
    });
  }
  containsPoint(p) {
    return new ConvexPoly(this.getPoints()).containsPoint(p);
  }
  getTopLeft() {
    return { left: this.left, top: this.top };
  }
  getTopRight() {
    return { left: this.left + this.width, top: this.top };
  }
  getBottomLeft() {
    return { left: this.left, top: this.top + this.height };
  }
  getBottomRight() {
    return { left: this.left + this.width, top: this.top + this.height };
  }
  getPoints() {
    return [
      this.getTopLeft(),
      this.getTopRight(),
      this.getBottomLeft(),
      this.getBottomRight()
    ].map(Point.from);
  }
  shift(shiftOptions) {
    if (shiftOptions.top != null) {
      this.top += shiftOptions.top;
    }
    if (shiftOptions.left != null) {
      this.left += shiftOptions.left;
    }
    return this;
  }
};

// src/utils/pageGeometry/alignment/index.ts
function isHTMLElement(v) {
  return !!v.tagName;
}
function getAlignPosition(options) {
  const { alignTarget, alignAnchor, constrainTo, alignPosition } = options;
  const alignTargetRectangle = Rectangle.from(
    isHTMLElement(alignTarget) ? alignTarget.getBoundingClientRect() : alignTarget
  );
  const alignAnchorRectangle = Rectangle.from(
    isHTMLElement(alignAnchor) ? alignAnchor.getBoundingClientRect() : alignAnchor
  );
  const constrainRectangle = constrainTo ? Rectangle.from(
    isHTMLElement(constrainTo) ? constrainTo.getBoundingClientRect() : constrainTo
  ) : null;
  if (!constrainRectangle) {
    const alignResult = align({
      anchorRect: alignAnchorRectangle,
      targetRect: alignTargetRectangle,
      position: alignPosition[0]
    });
    return __spreadProps(__spreadValues({}, alignResult), {
      index: 0
    });
  }
  let firstAlignResult = null;
  for (let i = 0, len = alignPosition.length; i < len; i++) {
    const alignResult = align({
      anchorRect: alignAnchorRectangle,
      targetRect: alignTargetRectangle,
      position: alignPosition[i],
      constrainRect: constrainRectangle
    });
    if (i === 0) {
      firstAlignResult = __spreadProps(__spreadValues({}, alignResult), {
        index: 0
      });
    }
    if (alignResult.valid) {
      return __spreadProps(__spreadValues({}, alignResult), {
        index: i
      });
    }
  }
  return firstAlignResult;
}
function align(options) {
  const targetRect = Rectangle.from(options.targetRect);
  const anchorRect = Rectangle.from(options.anchorRect);
  const constrainRect = options.constrainRect ? Rectangle.from(options.constrainRect) : null;
  const { position: position2 } = options;
  const [targetPos, anchorPos] = position2;
  const targetPoint = getRectanglePointForPosition(targetRect, targetPos);
  const anchorPoint = getRectanglePointForPosition(anchorRect, anchorPos);
  const distance = targetPoint.getDistanceToPoint(anchorPoint);
  targetRect.shift(distance);
  const valid = constrainRect ? constrainRect.contains(targetRect) : true;
  return {
    alignPosition: position2,
    alignedRect: targetRect,
    valid,
    distance
  };
}
function getRectanglePointForPosition(rect, position2) {
  if (position2 === "TopLeft") {
    return Point.from({
      top: rect.top,
      left: rect.left
    });
  }
  if (position2 === "TopCenter") {
    return Point.from({
      top: rect.top,
      left: rect.left + (rect.width > 0 ? Math.round(rect.width / 2) : 0)
    });
  }
  if (position2 === "TopRight") {
    return Point.from({
      top: rect.top,
      left: rect.left + rect.width
    });
  }
  if (position2 === "BottomLeft") {
    return Point.from({
      left: rect.left,
      top: rect.top + rect.height
    });
  }
  if (position2 === "BottomCenter") {
    return Point.from({
      left: rect.left + (rect.width > 0 ? Math.round(rect.width / 2) : 0),
      top: rect.top + rect.height
    });
  }
  if (position2 === "BottomRight") {
    return Point.from({
      left: rect.left + rect.width,
      top: rect.top + rect.height
    });
  }
  if (position2 === "CenterLeft") {
    return Point.from({
      left: rect.left,
      top: rect.top + (rect.height > 0 ? Math.round(rect.height / 2) : 0)
    });
  }
  if (position2 === "CenterRight") {
    return Point.from({
      left: rect.left + rect.width,
      top: rect.top + (rect.height > 0 ? Math.round(rect.height / 2) : 0)
    });
  }
  return Point.from({
    left: rect.left + (rect.width > 0 ? Math.round(rect.width / 2) : 0),
    top: rect.top + (rect.height > 0 ? Math.round(rect.height / 2) : 0)
  });
}

// src/components/Menu/propToIdentifyMenu.ts
init_esm_shims();
var propToIdentifyMenu = "__is_infinite_menu_component";

// src/components/hooks/useOverlay/index.tsx
function isPromise(p) {
  return p && typeof p.then === "function" || p instanceof Promise;
}
function isHTMLElement2(el) {
  if (el == null) {
    return false;
  }
  if (typeof el === "string") {
    return false;
  }
  return typeof el.tagName === "string";
}
function retrieveAdvancedAlignable(target) {
  return __async(this, null, function* () {
    if (typeof target === "function") {
      target = target();
    }
    if (isPromise(target)) {
      target = yield target;
    }
    if (typeof target === "string") {
      target = document.querySelector(target);
    }
    if (target && isHTMLElement2(target)) {
      target = target.getBoundingClientRect();
    }
    return target ? Rectangle.from(target) : null;
  });
}
function retrieveElement(elementGetter) {
  return __async(this, null, function* () {
    let result = null;
    if (typeof elementGetter === "function") {
      result = elementGetter();
    } else {
      result = elementGetter;
    }
    function queryForElement(result2) {
      let el = null;
      if (typeof result2 === "string") {
        el = document.querySelector(result2);
      }
      if (isHTMLElement2(result2)) {
        el = result2;
      }
      return el || null;
    }
    return queryForElement(yield result);
  });
}
function DefaultOverlayPortal(props) {
  return /* @__PURE__ */ React52.createElement("div", { style: { position: "fixed", top: 0, left: 0 } }, props.children);
}
function OverlayContent(props) {
  const nodeRef = React52.useRef(null);
  useEffect33(() => {
    return props.realign.onChange((handle) => {
      if (nodeRef.current && handle) {
        alignOverlayNode(nodeRef.current, handle);
      }
    });
  }, [props.realign]);
  return /* @__PURE__ */ React52.createElement(
    "div",
    {
      style: { position: "absolute", top: 0, left: 0 },
      ref: useCallback23((node) => {
        if (node) {
          alignOverlayNode(node, props);
        }
        nodeRef.current = node;
      }, [])
    },
    typeof props.children === "function" ? props.children() : props.children
  );
}
function alignOverlayNode(node, params) {
  return __async(this, null, function* () {
    let { constrainTo, alignTo, alignPosition } = params;
    if (Object.keys(alignTo).length === 2 && alignTo.top !== void 0 && alignTo.left !== void 0) {
      alignTo = __spreadProps(__spreadValues({}, alignTo), {
        width: 0,
        height: 0
      });
    }
    if (typeof constrainTo === "boolean") {
      constrainTo = constrainTo ? document.documentElement.getBoundingClientRect() : void 0;
    }
    const constrainToRectangle = constrainTo ? (yield retrieveAdvancedAlignable(constrainTo)) || void 0 : void 0;
    const alignToRectangle = alignTo ? yield retrieveAdvancedAlignable(alignTo) : void 0;
    const alignTarget = Rectangle.from(node.getBoundingClientRect());
    if (!alignToRectangle) {
      return;
    }
    const { alignedRect } = getAlignPosition({
      constrainTo: constrainToRectangle,
      alignAnchor: alignToRectangle,
      alignTarget,
      alignPosition
    });
    node.style.transform = `translate3d(${alignedRect.left}px,${alignedRect.top}px, 0px)`;
    const rect = node.getBoundingClientRect();
    if (rect.left !== alignedRect.left || rect.top !== alignedRect.top) {
      const offsetParent = node.offsetParent;
      if (offsetParent) {
        const offsetParentRect = offsetParent.getBoundingClientRect();
        const offsetParentLeft = offsetParentRect.left;
        const offsetParentTop = offsetParentRect.top;
        const leftDiff = alignedRect.left - offsetParentLeft;
        const topDiff = alignedRect.top - offsetParentTop;
        node.style.transform = `translate3d(${leftDiff}px,${topDiff}px, 0px)`;
      }
    }
  });
}
function useOverlayPortal(content, portalContainer) {
  const [container, setContainer] = useState18(null);
  useLayoutEffect12(() => {
    function getContainer() {
      return __async(this, null, function* () {
        const container2 = portalContainer ? yield retrieveElement(portalContainer) : null;
        if (container2 != null) {
          setContainer(container2);
        }
      });
    }
    if (!portalContainer) {
      return;
    }
    getContainer();
  }, [portalContainer]);
  return portalContainer ? container ? createPortal2(content, container) : (
    // we're probably still fetching the container
    /* @__PURE__ */ React52.createElement(React52.Fragment, null)
  ) : portalContainer === null || portalContainer === false ? content : /* @__PURE__ */ React52.createElement(DefaultOverlayPortal, null, content);
}
function getIdForReactOnlyChild(children) {
  if (React52.Children.count(children) === 1) {
    const child = React52.Children.only(children);
    if (React52.isValidElement(child)) {
      return child.props.id || child.key;
    }
  }
  return null;
}
function injectPortalContainerAndConstrainInMenuChild(children, portalContainer, constrainTo) {
  if (React52.Children.count(children) === 1) {
    const child = React52.Children.only(children);
    if (React52.isValidElement(child) && child.props[propToIdentifyMenu]) {
      const newProps = {};
      if (child.props.portalContainer === void 0) {
        newProps.portalContainer = portalContainer;
      }
      if (child.props.constrainTo === void 0) {
        newProps.constrainTo = constrainTo;
      }
      return React52.cloneElement(child, newProps);
    }
  }
  return children;
}
globalThis.allhandles = {};
globalThis.thehandles = {};
function useOverlay(params) {
  const rootParams = params;
  const [handles] = useState18(() => /* @__PURE__ */ new Map());
  const [handleToRealign, setHandleToRealign] = useState18(null);
  const [realignTimestamp, setRealignTimestamp] = useState18(0);
  const getContentForPortal = useCallback23(() => {
    const contentForPortal = [];
    for (const [_2, handle] of handles) {
      contentForPortal.push(
        /* @__PURE__ */ React52.createElement(OverlayContent, __spreadProps(__spreadValues({}, handle), { key: handle.key }))
      );
    }
    return contentForPortal;
  }, []);
  const [_, updateContent] = useRerender();
  const portal = useOverlayPortal(
    getContentForPortal(),
    params.portalContainer
  );
  const showOverlay = useCallback23(
    (content, params2) => {
      const id = params2.id || getIdForReactOnlyChild(content) || getChangeDetect();
      const key = `${id}`;
      let handle = handles.get(key);
      const childrenFn = () => {
        var _a;
        const children = typeof content === "function" ? content() : content;
        return injectPortalContainerAndConstrainInMenuChild(
          children,
          rootParams.portalContainer,
          (_a = params2.constrainTo) != null ? _a : rootParams.constrainTo
        );
      };
      if (handle) {
        Object.assign(handle, params2, { children: childrenFn });
        updateContent();
        setHandleToRealign(handle.key);
        setRealignTimestamp(Date.now());
        return;
      }
      handle = {
        key,
        children: childrenFn,
        alignPosition: params2.alignPosition,
        alignTo: params2.alignTo,
        constrainTo: params2.constrainTo,
        realign: buildSubscriptionCallback()
      };
      handles.set(handle.key, handle);
      updateContent();
      return () => updateContent();
    },
    [handles, rootParams.portalContainer, updateContent]
  );
  React52.useEffect(() => {
    if (handleToRealign) {
      const handle = handles.get(handleToRealign);
      if (handle) {
        handle.realign(handle);
      }
    }
  }, [handleToRealign, realignTimestamp]);
  const hideOverlay = (id) => {
    id = `${id}`;
    if (handles.has(id)) {
      handles.delete(id);
      updateContent();
    }
  };
  const clearAll = () => {
    handles.clear();
    updateContent();
  };
  React52.useEffect(() => {
  }, []);
  return {
    portal,
    hideOverlay,
    clearAll,
    rerenderOverlays: updateContent,
    showOverlay
  };
}

// src/components/InfiniteTable/utils/getMenuForColumn.tsx
init_esm_shims();
import * as React58 from "react";

// src/components/Menu/index.tsx
init_esm_shims();
import * as React56 from "react";

// src/components/Menu/getMenuState.tsx
init_esm_shims();
import * as React54 from "react";

// src/components/Menu/childrenToRuntimeItems.tsx
init_esm_shims();
import * as React53 from "react";

// src/components/Menu/MenuCls.css.ts
init_esm_shims();
var MenuCls = "MenuCls_MenuCls__db3arf0 utilities_boxSizingBorderBox__16lm1iw0 utilities_position_relative__16lm1iw1 utilities_display_inlineGrid__16lm1iw15 utilities_flexFlow_column__16lm1iw1l utilities_margin_none__16lm1iw8";
var MenuItemCls = createRuntimeFn({ defaultClassName: "MenuCls_MenuItemCls__db3arf2 utilities_display_flex__16lm1iwy utilities_alignItems_center__16lm1iw1p utilities_userSelect_none__16lm1iw16", variantClassNames: { disabled: { true: "MenuCls_MenuItemCls_disabled_true__db3arf3 utilities_cursor_default__16lm1iwi utilities_userSelect_none__16lm1iw16", false: "utilities_cursor_pointer__16lm1iwh" }, active: { true: "MenuCls_MenuItemCls_active_true__db3arf5", false: "MenuCls_MenuItemCls_active_false__db3arf6" }, pressed: { false: "MenuCls_MenuItemCls_pressed_false__db3arf7", true: "MenuCls_MenuItemCls_pressed_true__db3arf8" }, keyboardActive: { true: "MenuCls_MenuItemCls_keyboardActive_true__db3arf9", false: "MenuCls_MenuItemCls_keyboardActive_false__db3arfa" } }, defaultVariants: {}, compoundVariants: [[{ active: true, disabled: false }, "MenuCls_MenuItemCls_compound_0__db3arfb"], [{ pressed: true, active: true, disabled: false }, "MenuCls_MenuItemCls_compound_1__db3arfc"]] });
var MenuRowCls = "MenuCls_MenuRowCls__db3arf1";
var MenuSeparatorCls = "MenuCls_MenuSeparatorCls__db3arfd";

// src/components/Menu/childrenToRuntimeItems.tsx
var SEPARATOR = "-";
function MenuSeparator() {
  return /* @__PURE__ */ React53.createElement("hr", { className: MenuSeparatorCls });
}
var toRuntimeItem = ({
  columns,
  keyboardActiveItemKey,
  activeItemKey,
  menuId
}, item) => {
  const menuItem = item && (item.key != null || item.label != null) ? item : null;
  const menuDecoration = menuItem === null ? item === SEPARATOR ? /* @__PURE__ */ React53.createElement(MenuSeparator, null) : item : null;
  const runtimeItem = menuItem != null ? {
    type: "item",
    parentMenuId: menuId,
    disabled: !!menuItem.disabled,
    keyboardActive: menuItem.key === keyboardActiveItemKey,
    active: menuItem.key === activeItemKey,
    value: menuItem,
    span: menuItem.span || 1,
    key: menuItem.key,
    menu: menuItem.menu || null,
    style: menuItem.style,
    className: menuItem.className,
    originalMenuItem: menuItem
  } : {
    type: "decoration",
    value: menuDecoration,
    span: columns.length,
    style: {
      gridColumnStart: 1,
      gridColumnEnd: columns.length + 10
      // it should have been +1, but we might introduce an additional col for submenu icons
      // so we make this bigger
    }
  };
  return runtimeItem;
};
function childrenToRuntimeItems(context, children) {
  return React53.Children.map(children, (child) => {
    if (child == null ? void 0 : child.props.__is_menu_item) {
      const itemProps = __spreadValues({}, child.props);
      if (!itemProps.key) {
        itemProps.key = child.key;
      }
      if (!itemProps.description) {
        itemProps.description = child.props.children;
      }
      if (!itemProps.label) {
        itemProps.label = itemProps.children;
      }
      return toRuntimeItem(context, itemProps);
    }
    return toRuntimeItem(context, child);
  }) || [];
}

// src/components/Menu/getMenuState.tsx
var SUBMENU_COL_NAME = "submenu";
function getInitialMenuState() {
  const domRef = React54.createRef();
  return {
    keyboardActiveItemKey: null,
    activeItemKey: null,
    generatedId: getChangeDetect(),
    focused: false,
    destroyed: false,
    domRef
  };
}
var forwardProps5 = () => {
  return {
    parentMenuId: 1,
    parentMenuItemKey: 1,
    onHideIntent: 1,
    constrainTo: 1,
    onAction: 1,
    onShow: 1,
    onHide: 1,
    autoFocus: 1,
    wrapLabels: 1
  };
};
var defaultColumns = [
  {
    name: "label"
  }
];
var deriveStateFromProps2 = (params) => {
  const { props, state } = params;
  const { activeItemKey, keyboardActiveItemKey } = state;
  const { items, children, addSubmenuColumnIfNeeded, parentMenuId } = props;
  let menuId = props.id || state.generatedId;
  if (parentMenuId) {
    menuId = `${parentMenuId}-${menuId}`;
  }
  const columns = [...props.columns || defaultColumns];
  const context = {
    columns,
    keyboardActiveItemKey,
    activeItemKey,
    menuId
  };
  let runtimeItems = [];
  if (items) {
    runtimeItems = items.map(toRuntimeItem.bind(null, context));
  } else if (!items && typeof children !== "function") {
    runtimeItems = childrenToRuntimeItems(context, children);
  }
  if (addSubmenuColumnIfNeeded) {
    const hasSubmenus = runtimeItems.filter((item) => item.type === "item" && item.menu != null).length > 0;
    if (hasSubmenus && !columns.find((col) => col.name == SUBMENU_COL_NAME)) {
      columns.push({
        name: SUBMENU_COL_NAME,
        render: ({ domProps, item }) => {
          return item.menu ? /* @__PURE__ */ React54.createElement("div", __spreadValues({}, domProps), /* @__PURE__ */ React54.createElement(ExpanderIcon, { expanded: false })) : /* @__PURE__ */ React54.createElement("div", __spreadValues({}, domProps));
        }
      });
    }
  }
  const runtimeSelectableItems = runtimeItems.filter(
    (item) => item.type === "item" && !item.disabled
  );
  return {
    runtimeItems,
    runtimeSelectableItems,
    columns,
    menuId
  };
};

// src/components/Menu/Menu.tsx
init_esm_shims();
import * as React55 from "react";
import {
  useCallback as useCallback25,
  useLayoutEffect as useLayoutEffect13,
  useRef as useRef28,
  useState as useState20
} from "react";

// src/components/Menu/MenuTriangleContext.ts
init_esm_shims();

// src/utils/pageGeometry/Triangle.ts
init_esm_shims();
var Triangle = class extends ConvexPoly {
  // uncommenting this here breaks our tests - WHAT????
  // it's just narrowing down the type of the points member variable
  // - this should not introduce any change in behavior!!! however, TS is crazy about this one
  // points!: PointTimes3;
  constructor(points) {
    super(points.slice(0, 3));
  }
};

// src/components/Menu/MenuTriangleContext.ts
var ACTIVE_OTHER_MENU_ITEM_TIMEOUT = 250;
function waitForValueOnRaf(getter, timeout = 100) {
  const start = Date.now();
  return new Promise((resolve) => {
    let value;
    const fn = () => {
      value = getter();
      if (value !== void 0) {
        resolve(value);
        return;
      }
      if (Date.now() - start > timeout) {
        resolve(void 0);
        return;
      }
      raf(fn);
    };
    raf(() => {
      fn();
    });
  });
}
var globalObject = getGlobal();
var MenuTriangleContext = class {
  constructor(params) {
    this.activeItem = null;
    this.currentHoveredItem = null;
    // private activeItemTimestamp: number = 0;
    this.activeItemLeavePoint = null;
    this.menuLeaveTimeoutId = null;
    // private activeItemEventTarget: HTMLElement | null = null;
    this.activeItemMenuRect = null;
    this.lastPointerMoveTimestamp = 0;
    this.mouseMoveTimeoutId = 0;
    this.lastHorizontalDiff = 0;
    this.getTimeout = () => {
      return this.params.timeout || ACTIVE_OTHER_MENU_ITEM_TIMEOUT;
    };
    this.getPointerMoveTarget = () => {
      return document.documentElement || globalObject;
    };
    this.removePointerMoveListener = () => {
      this.getPointerMoveTarget().removeEventListener(
        "pointermove",
        this.onPointerMoveWhileActiveItem
      );
    };
    /**
     * The whole point of this method is to change the active item when the mouse moves,
     * if the user is moving slowly or outside the menu triangle.
     *
     * This is called while having a currently active item.
     */
    this.onPointerMoveWhileActiveItem = (pointerMoveEvent) => {
      clearTimeout(this.mouseMoveTimeoutId);
      if (!pointerMoveEvent) {
        this.lastPointerMoveTimestamp = Date.now();
        return;
      }
      if (!this.currentHoveredItem || this.currentHoveredItem === this.activeItem) {
        return;
      }
      const now = Date.now();
      if (!this.lastPointerMoveTimestamp) {
        this.lastPointerMoveTimestamp = now;
      }
      const timeElapsed = now - this.lastPointerMoveTimestamp;
      const timeoutGone = timeElapsed > this.getTimeout();
      this.lastPointerMoveTimestamp = now;
      const activateHoveredItem = () => {
        this.setActiveItem(null, null);
        this.onItemChange(true, this.currentHoveredItem, pointerMoveEvent);
      };
      if (timeoutGone) {
        activateHoveredItem();
        return;
      }
      let hoveredItem = this.currentHoveredItem;
      this.mouseMoveTimeoutId = setTimeout(() => {
        if (hoveredItem !== this.currentHoveredItem) {
          return;
        }
        const now2 = Date.now();
        const elapsedTime = now2 - this.lastPointerMoveTimestamp;
        const timeoutGone2 = elapsedTime > this.getTimeout();
        if (timeoutGone2) {
          activateHoveredItem();
        }
      }, this.getTimeout());
      const currentPoint = new Point({
        left: pointerMoveEvent.clientX,
        top: pointerMoveEvent.clientY
      });
      if (!this.activeItemMenuRect || !this.activeItemLeavePoint) {
        return;
      }
      const submenuToTheRight = this.activeItemLeavePoint.left < this.activeItemMenuRect.left;
      const horizontalDirectionSign = submenuToTheRight ? 1 : -1;
      const horizontalDiff = horizontalDirectionSign * (currentPoint.left - this.activeItemLeavePoint.left);
      if (horizontalDiff - this.lastHorizontalDiff < 0) {
        this.lastHorizontalDiff = 0;
        activateHoveredItem();
        return;
      }
      this.lastHorizontalDiff = horizontalDiff;
      const triangle = submenuToTheRight ? new Triangle([
        this.activeItemLeavePoint,
        this.activeItemMenuRect.getTopLeft(),
        this.activeItemMenuRect.getBottomLeft()
      ]) : new Triangle([
        // in this case, the menu is placed to the left, so adjust the triangle
        this.activeItemLeavePoint,
        this.activeItemMenuRect.getTopRight(),
        this.activeItemMenuRect.getBottomRight()
      ]);
      if (!triangle.containsPoint(currentPoint)) {
        this.setActiveItem(null, null);
        this.onItemChange(true, this.currentHoveredItem, pointerMoveEvent);
      }
    };
    /**
     * See #IAC-false note above
     */
    this.setupMenuLeaveTracking = () => {
      this.menuLeaveTimeoutId = setTimeout(() => {
        if (this.activeItem && this.params.itemHasSubMenu(this.activeItem)) {
          return;
        }
        this.setActiveItem(null, null);
      }, this.getTimeout());
    };
    /**
     * This function should call onItemActivate to notify whoever's listening
     */
    this.setActiveItem = (itemKey, target) => {
      if (itemKey === this.activeItem) {
        return;
      }
      if (itemKey == null) {
        this.removePointerMoveListener();
        this.params.onItemActivate(null, null);
        this.activeItem = null;
        this.activeItemMenuRect = null;
        return;
      }
      this.activeItem = itemKey;
      this.params.onItemActivate(itemKey, target);
      this.activeItemMenuRect = null;
      waitForValueOnRaf(() => {
        if (this.activeItem != itemKey) {
          return false;
        }
        return this.params.getMenuRectFor(itemKey);
      }).then((rect) => {
        if (this.activeItem != itemKey) {
          return;
        }
        if (rect) {
          this.activeItemMenuRect = rect;
        }
      });
    };
    /**
     * This function is called when an item receives mouse enter or mouse leave.
     */
    this.onItemChange = (hovered, itemKey, event) => {
      clearTimeout(this.menuLeaveTimeoutId);
      clearTimeout(this.mouseMoveTimeoutId);
      if (!hovered) {
        this.removePointerMoveListener();
        if (itemKey === this.activeItem) {
          this.activeItemLeavePoint = new Point({
            left: event.clientX,
            top: event.clientY
          });
        }
        this.setupMenuLeaveTracking();
        return;
      }
      this.currentHoveredItem = itemKey;
      if (!this.activeItem || !this.params.itemHasSubMenu(this.activeItem)) {
        this.setActiveItem(itemKey, event.target);
        return;
      }
      this.onPointerMoveWhileActiveItem();
      this.getPointerMoveTarget().addEventListener(
        "pointermove",
        this.onPointerMoveWhileActiveItem
      );
    };
    this.getHandlers = () => {
      return {
        onItemEnter: (itemKey, event) => {
          this.onItemChange(true, itemKey, event);
        },
        onItemLeave: (itemKey, event) => {
          this.onItemChange(false, itemKey, event);
        }
      };
    };
    this.params = params;
  }
};

// src/components/Menu/MenuContext.ts
init_esm_shims();
import { createContext as createContext6, useContext as useContext7 } from "react";
var MenuContext = createContext6(null);
function useMenuContext() {
  const contextValue = useContext7(MenuContext);
  return contextValue;
}

// src/components/hooks/useMounted.ts
init_esm_shims();
import { useCallback as useCallback24, useEffect as useEffect34, useRef as useRef27 } from "react";
function useMounted() {
  let mountedRef = useRef27(true);
  useEffect34(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const isMounted = useCallback24(() => mountedRef.current, []);
  return isMounted;
}

// src/components/Menu/Menu.tsx
function renderSubmenuForItem(item, config) {
  const {
    parentMenuId,
    setSubmenuApi,
    setActiveItemKey,
    setKeyboardActiveItemKey,
    constrainTo,
    api
  } = config;
  const overlayId = `${parentMenuId}-submenu`;
  let itemMenu = item.menu;
  if (!itemMenu) {
    return null;
  }
  if (typeof itemMenu === "function") {
    itemMenu = itemMenu();
  }
  return /* @__PURE__ */ React55.createElement(
    Menu,
    __spreadProps(__spreadValues({
      key: overlayId,
      parentMenuItemKey: item.key,
      parentMenuId,
      constrainTo
    }, itemMenu), {
      autoFocus: false,
      onShow: (state, api2) => {
        var _a;
        (_a = itemMenu == null ? void 0 : itemMenu.onShow) == null ? void 0 : _a.call(itemMenu, state, api2);
        setSubmenuApi(api2);
      },
      onHide: (state) => {
        if (state.focused) {
          setActiveItemKey(null);
          setKeyboardActiveItemKey(item.key);
          api.focus();
        }
      }
    })
  );
}
function getMenuItemRect(menuId, itemKey) {
  var _a;
  const cells = getMenuItemNodes(menuId, itemKey);
  if (!cells.length) {
    return null;
  }
  const first = Rectangle.from((_a = cells[0]) == null ? void 0 : _a.getBoundingClientRect());
  const last = Rectangle.from(cells[cells.length - 1].getBoundingClientRect());
  const rect = first;
  rect.width = last.left + last.width - first.left;
  return rect;
}
function getMenuItemNodes(menuId, itemKey) {
  const menuNode = selectParent(
    document.querySelector(
      `[data-menu-id="${menuId}"] [data-menu-item-key="${itemKey}"]`
    ),
    `[data-menu-id="${menuId}"]`
  );
  if (!menuNode) {
    return [];
  }
  const cells = menuNode.querySelectorAll(`[data-menu-item-key="${itemKey}"]`);
  return Array.from(cells);
}
function getFirstCheckBoxInsideMenuItem(menuId, itemKey) {
  const cells = getMenuItemNodes(menuId, itemKey);
  if (!cells.length) {
    return null;
  }
  for (const cell of cells) {
    const input = cell.querySelector(
      'input[type="checkbox"]'
    );
    if (input) {
      return input;
    }
  }
  return null;
}
function useSubmenus({
  onItemActivate
}) {
  const { getState } = useMenuContext();
  const [{ onItemEnter, onItemLeave }] = useState20(() => {
    return new MenuTriangleContext({
      parentMenuId: getState().parentMenuId,
      onItemActivate: (itemKey) => {
        if (!itemKey) {
          onItemActivate(null);
          return;
        }
        const item = getState().runtimeItems.filter(
          (item2) => item2.type === "item" && item2.key === itemKey
        )[0];
        onItemActivate(item);
      },
      itemHasSubMenu: (itemKey) => {
        const item = getState().runtimeItems.filter(
          (item2) => item2.type === "item" && item2.key === itemKey && item2.menu
        )[0];
        return !!item;
      },
      getMenuRectFor: (itemKey) => {
        const selector2 = `[data-submenu-for="${itemKey}"]`;
        const menuNode = document.querySelector(selector2);
        if (!menuNode) {
          return void 0;
        }
        const rect = Rectangle.from(menuNode.getBoundingClientRect());
        return rect;
      }
    }).getHandlers();
  });
  return {
    onItemEnter: useCallback25(onItemEnter, []),
    onItemLeave: useCallback25(onItemLeave, [])
  };
}
function MenuComponent(props) {
  const { domProps } = props;
  const {
    componentState: {
      columns,
      runtimeItems,
      menuId,
      activeItemKey,
      keyboardActiveItemKey,
      constrainTo,
      destroyed,
      onAction,
      wrapLabels,
      onShow,
      onHide,
      autoFocus,
      parentMenuItemKey,
      domRef
    },
    componentActions,
    getState
  } = useMenuContext();
  const setKeyboardActiveItemKey = useCallback25((key) => {
    componentActions.keyboardActiveItemKey = key;
  }, []);
  const setActiveItemKey = useCallback25((key) => {
    componentActions.activeItemKey = key;
  }, []);
  const isMounted = useMounted();
  const [submenuApi, setSubmenuApi] = useState20(null);
  let renderedChildren = null;
  useLayoutEffect13(() => {
    const { runtimeItems: runtimeItems2 } = getState();
    const activeItem = runtimeItems2.filter(
      (item) => item.type === "item" && activeItemKey === item.key
    )[0];
    if (!activeItem || !activeItem.menu) {
      setSubmenuApi(null);
      clearAll();
      return;
    }
    if (activeItem) {
      const alignTo = getMenuItemRect(menuId, activeItem.key);
      const menu = () => renderSubmenuForItem(activeItem, {
        constrainTo,
        setSubmenuApi,
        setActiveItemKey,
        setKeyboardActiveItemKey,
        parentMenuId: menuId,
        api
      });
      if (alignTo) {
        showOverlay(menu, {
          id: `${menuId}-submenu`,
          alignTo,
          alignPosition: [
            ["TopLeft", "TopRight"],
            ["TopRight", "TopLeft"]
          ],
          constrainTo
        });
      }
      return;
    }
  }, [activeItemKey]);
  const onItemClick = (event, item) => {
    setKeyboardActiveItemKey(item.key);
    setActiveItemKey(item.key);
    if (item.originalMenuItem.onClick) {
      item.originalMenuItem.onClick(event);
    }
    if (item.originalMenuItem.onAction) {
      item.originalMenuItem.onAction(item.key, item.originalMenuItem);
    }
    if (onAction) {
      onAction(item.key, item.originalMenuItem);
    }
  };
  const {
    showOverlay,
    portal: portalWithSubmenus,
    clearAll
  } = useOverlay({
    // all submenus will be displayed inside this menu
    // so when the parent menu is moved, the submenus are also moved
    portalContainer: false
  });
  const { onItemEnter, onItemLeave } = useSubmenus({
    onItemActivate: (item) => {
      if (!isMounted()) {
        return;
      }
      const key = item ? item.key : null;
      setActiveItemKey(key);
    }
  });
  renderedChildren = runtimeItems.map((runtimeItem, index) => /* @__PURE__ */ React55.createElement(
    RuntimeItemRenderer,
    {
      key: runtimeItem.type === "item" ? runtimeItem.key : index,
      onItemEnter: (item, event) => {
        onItemEnter(item.key, event);
      },
      onItemLeave: (item, event) => {
        onItemLeave(item.key, event);
      },
      columns,
      active: runtimeItem.type === "item" && runtimeItem.key === activeItemKey,
      keyboardActive: runtimeItem.type === "item" && runtimeItem.key === keyboardActiveItemKey,
      item: runtimeItem,
      index,
      onClick: onItemClick
    }
  ));
  const gridTemplateColumns = columns.map((col) => {
    return col.width || (typeof col.flex === "number" ? `${col.flex}fr` : col.flex) || "auto";
  }).join(" ");
  const style2 = __spreadProps(__spreadValues({}, domProps.style), {
    gridTemplateColumns,
    gridTemplateRows: runtimeItems.map(() => `auto`).join(" ")
  });
  if (!wrapLabels) {
    style2.whiteSpace = "nowrap";
  }
  function handleKeydown(keyboardEvent) {
    const { runtimeItems: runtimeItems2, runtimeSelectableItems } = getState();
    let keyboardActiveIndex = runtimeItems2.findIndex(
      (runtimeItem) => runtimeItem.type === "item" && runtimeItem.key === keyboardActiveItemKey
    );
    let newKeyboardActiveItemKey = keyboardActiveItemKey;
    const keyboardActiveItem = runtimeItems2[keyboardActiveIndex];
    const validKeys3 = {
      ArrowUp: () => {
        const newActiveItem = runtimeItems2.slice(0, keyboardActiveIndex).filter((item) => item.type === "item" && !item.disabled).pop();
        if (newActiveItem && newActiveItem.type === "item" && newActiveItem.key) {
          newKeyboardActiveItemKey = newActiveItem.key;
        }
      },
      ArrowDown: () => {
        const newActiveItem = runtimeItems2.slice(keyboardActiveIndex + 1).filter((item) => item.type === "item" && !item.disabled)[0];
        if (newActiveItem && newActiveItem.type === "item" && newActiveItem.key) {
          newKeyboardActiveItemKey = newActiveItem.key;
        }
      },
      Home: () => {
        validKeys3.PageUp();
      },
      End: () => {
        validKeys3.PageDown();
      },
      PageUp: () => {
        newKeyboardActiveItemKey = runtimeSelectableItems[0].key;
      },
      PageDown: () => {
        newKeyboardActiveItemKey = runtimeSelectableItems[runtimeSelectableItems.length - 1].key;
      },
      ArrowLeft: () => {
        setActiveItemKey(null);
        if (getState().parentMenuId) {
          componentActions.destroyed = true;
        }
      },
      ArrowRight: () => {
        if (!keyboardActiveItem) {
          return;
        }
        setActiveItemKey(keyboardActiveItem.key);
        raf(() => {
          if (isMounted() && submenuApi && submenuApi.getParentMenuId() === getState().menuId) {
            submenuApi.focus();
          }
        });
      },
      Enter: () => {
        var _a;
        if (!keyboardActiveItem) {
          return;
        }
        if ((_a = keyboardActiveItem.originalMenuItem) == null ? void 0 : _a.menu) {
          if (keyboardActiveItem && keyboardActiveItem.originalMenuItem.menu && submenuApi) {
            validKeys3.ArrowLeft();
            return;
          }
          if (keyboardActiveItem) {
            setActiveItemKey(keyboardActiveItem.key);
          }
        } else {
          onItemClick(
            keyboardEvent,
            keyboardActiveItem
          );
        }
      },
      " ": () => {
        if (!keyboardActiveItem) {
          return;
        }
        if (!keyboardActiveItem.originalMenuItem.menu) {
          onItemClick(
            keyboardEvent,
            keyboardActiveItem
          );
        }
        const checkbox = getFirstCheckBoxInsideMenuItem(
          menuId,
          keyboardActiveItem.key
        );
        if (!checkbox) {
          return;
        }
        checkbox.click();
      },
      Escape: () => {
        var _a;
        validKeys3.ArrowLeft();
        const state = getState();
        if (!state.parentMenuId) {
          (_a = state.onHideIntent) == null ? void 0 : _a.call(state, state);
        }
      }
    };
    const fn = validKeys3[keyboardEvent.key];
    if (fn) {
      fn();
      keyboardEvent.preventDefault();
    }
    if (newKeyboardActiveItemKey != keyboardActiveItemKey) {
      setKeyboardActiveItemKey(newKeyboardActiveItemKey);
    }
  }
  function onMenuBlur() {
    componentActions.focused = false;
  }
  const onMenuFocus = useCallback25(function() {
    componentActions.focused = true;
    setTimeout(() => {
      var _a, _b;
      if (shouldSelectFirstItemOnFocus.current && domRef.current && domRef.current === document.activeElement && getState().keyboardActiveItemKey == null) {
        setKeyboardActiveItemKey(
          (_b = (_a = getState().runtimeSelectableItems[0]) == null ? void 0 : _a.key) != null ? _b : null
        );
      }
    });
  }, []);
  const shouldSelectFirstItemOnFocus = useRef28(true);
  const [api] = useState20(() => {
    const result2 = {
      focus: () => {
        if (domRef.current) {
          domRef.current.focus();
          setTimeout(() => {
            if (domRef.current && domRef.current !== document.activeElement) {
              domRef.current.focus();
            }
          }, 10);
          onMenuFocus();
        }
      },
      getMenuId: () => getState().menuId,
      getParentMenuId: () => getState().parentMenuId
    };
    return result2;
  });
  const refCallback = useCallback25((node) => {
    if (node) {
      domRef.current = node;
      onShow == null ? void 0 : onShow(getState(), api);
      if (autoFocus) {
        api.focus();
      }
    } else {
      onHide == null ? void 0 : onHide(getState());
      domRef.current = node;
    }
  }, []);
  const result = /* @__PURE__ */ React55.createElement("div", { className: display.contents }, /* @__PURE__ */ React55.createElement(
    "div",
    __spreadProps(__spreadValues({}, domProps), {
      "data-menu-id": menuId,
      "data-submenu-for": parentMenuItemKey,
      tabIndex: 0,
      ref: refCallback,
      onKeyDown: (event) => {
        var _a;
        (_a = domProps.onKeyDown) == null ? void 0 : _a.call(domProps, event);
        handleKeydown(event);
      },
      onMouseDown: (event) => {
        var _a;
        shouldSelectFirstItemOnFocus.current = false;
        (_a = domProps.onMouseDown) == null ? void 0 : _a.call(domProps, event);
      },
      onMouseUp: (event) => {
        var _a;
        shouldSelectFirstItemOnFocus.current = true;
        (_a = domProps.onMouseUp) == null ? void 0 : _a.call(domProps, event);
      },
      onFocus: onMenuFocus,
      onBlur: onMenuBlur,
      className: join(MenuCls, domProps.className, "InfiniteMenu"),
      style: style2
    }),
    renderedChildren
  ), portalWithSubmenus);
  return destroyed ? null : result;
}
function RuntimeItemRenderer(props) {
  const [pressed, setPressed] = React55.useState(false);
  const { columns, item, index, active, keyboardActive } = props;
  const key = item.type === "item" ? item.value.key : index;
  let content = null;
  if (item.type === "decoration") {
    content = /* @__PURE__ */ React55.createElement("div", { style: item.style }, item.value);
  } else {
    let spanIndex = 0;
    content = columns.map((col, i) => {
      const target = item.value;
      const field = col.field || col.name;
      const start = i + 1;
      const end = start + item.span;
      if (start < spanIndex) {
        return null;
      }
      spanIndex = end;
      const style2 = __spreadProps(__spreadValues(__spreadValues({}, col.style), item.style), {
        gridColumnStart: start,
        gridColumnEnd: end
      });
      const domProps = {
        style: style2,
        //@ts-ignore
        "data-menu-column-id": `${item.parentMenuId}-col-${col.name}`,
        "data-menu-col-name": `${col.name}`,
        "data-menu-row-id": `${item.parentMenuId}-row-${index}`,
        "data-menu-row-index": `${index}`,
        "data-menu-item-key": `${item.key}`,
        className: join(
          MenuItemCls({
            active,
            disabled: !!item.disabled,
            keyboardActive,
            pressed: pressed || props.active
          }),
          item.className
        ),
        onPointerEnter: (event) => {
          var _a;
          if (!item.disabled) {
            (_a = props.onItemEnter) == null ? void 0 : _a.call(props, item, event);
          }
        },
        onPointerLeave: (event) => {
          var _a;
          if (!item.disabled) {
            (_a = props.onItemLeave) == null ? void 0 : _a.call(props, item, event);
          }
        },
        onMouseDown: () => {
          if (!item.disabled) {
            setPressed(true);
          }
        },
        onMouseUp: () => {
          if (!item.disabled) {
            setPressed(false);
          }
        },
        onClick: (event) => {
          if (!item.disabled) {
            props.onClick(event, item);
          }
        }
      };
      return col.render ? /* @__PURE__ */ React55.createElement(
        RenderHookComponent,
        {
          key: `${key}-${field}`,
          render: col.render,
          renderParam: {
            item: target,
            column: col,
            value: target[field],
            domProps
          }
        }
      ) : /* @__PURE__ */ React55.createElement("div", __spreadValues({ key: `${key}-${field}` }, domProps), target[field]);
    }).filter(Boolean);
  }
  return /* @__PURE__ */ React55.createElement("div", { className: MenuRowCls }, content);
}
function MenuItem(_props) {
  return null;
}
MenuItem.defaultProps = {
  __is_menu_item: true
};

// src/components/Menu/index.tsx
var MenuRoot = getComponentStateRoot({
  initSetupState: getInitialMenuState,
  forwardProps: forwardProps5,
  // @ts-ignore
  mapPropsToState: deriveStateFromProps2,
  layoutEffect: true
});
function MenuContextProvider(props) {
  const { componentActions, componentState } = useComponentState();
  const getState = useLatest(componentState);
  return /* @__PURE__ */ React56.createElement(
    MenuContext.Provider,
    {
      value: { componentActions, componentState, getState }
    },
    /* @__PURE__ */ React56.createElement(MenuComponent, { domProps: props.domProps })
  );
}
function Menu(props) {
  const _a = props, {
    children,
    portalContainer,
    items,
    parentMenuId,
    addSubmenuColumnIfNeeded,
    bubbleActionsFromSubmenus,
    onShow,
    onHide,
    wrapLabels,
    onAction,
    constrainTo,
    columns,
    parentMenuItemKey,
    autoFocus,
    id,
    onHideIntent,
    __is_infinite_menu_component: __is_infinite_menu_component
  } = _a, domProps = __objRest(_a, [
    "children",
    "portalContainer",
    "items",
    "parentMenuId",
    "addSubmenuColumnIfNeeded",
    "bubbleActionsFromSubmenus",
    "onShow",
    "onHide",
    "wrapLabels",
    "onAction",
    "constrainTo",
    "columns",
    "parentMenuItemKey",
    "autoFocus",
    "id",
    "onHideIntent",
    //@ts-ignore
    "__is_infinite_menu_component"
  ]);
  const menu = /* @__PURE__ */ React56.createElement(MenuRoot, __spreadValues({}, props), /* @__PURE__ */ React56.createElement(MenuContextProvider, { domProps }));
  if (false) {
    return /* @__PURE__ */ React56.createElement(React56.StrictMode, null, menu);
  }
  return menu;
}
var menuDefaultProps = {
  addSubmenuColumnIfNeeded: true,
  bubbleActionsFromSubmenus: true,
  wrapLabels: false,
  /**
   * this is here because we want a simple way for `showOverlay` (which is returned by useOverlay hook)
   * to inject the portal container into the menu
   */
  [propToIdentifyMenu]: true
};
Menu.defaultProps = menuDefaultProps;

// src/components/InfiniteTable/utils/defaultGetColumnMenuItems.tsx
init_esm_shims();
import * as React57 from "react";
function defaultGetColumnMenuItems(_items, params) {
  const { columnApi, column, getComputed, api } = params;
  const sortable = columnApi.isSortable();
  const sortItems = sortable ? [
    {
      key: "sort-asc",
      label: "Sort Ascending",
      disabled: column.computedSortedAsc,
      onAction: () => {
        api.setSortingForColumn(column.id, 1);
      }
    },
    {
      key: "sort-desc",
      label: "Sort Descending",
      disabled: column.computedSortedDesc,
      onAction: () => {
        api.setSortingForColumn(column.id, -1);
      }
    },
    {
      key: "sort-none",
      label: "Unsort",
      disabled: !column.computedSorted,
      onAction: () => {
        api.setSortingForColumn(column.id, null);
      }
    },
    "-"
  ] : [];
  const groupItems = column.groupByForColumn ? [
    {
      key: "collapse-all",
      label: "Collapse All",
      onAction: () => {
        api.collapseAllGroupRows();
      }
    },
    "-"
  ] : [];
  return [
    ...groupItems,
    ...sortItems,
    column.computedFilterable ? {
      key: "clear-filter",
      label: "Clear Filter",
      disabled: !column.computedFiltered,
      onAction: () => {
        api.clearColumnFilter(column.id);
      }
    } : null,
    column.computedFilterable ? "-" : null,
    {
      key: "pin-start",
      label: "Pin to start",
      disabled: column.computedPinned === "start",
      onAction: () => {
        api.setPinningForColumn(column.id, "start");
      }
    },
    // {
    //   key: 'pin-end',
    //   label: 'Pin to end',
    //   disabled: column.computedPinned === 'end',
    //   onAction: () => {},
    // },
    {
      key: "unpin",
      label: "Unpin",
      disabled: !column.computedPinned,
      onAction: () => {
        api.setPinningForColumn(column.id, false);
      }
    },
    "-",
    {
      key: "columns",
      label: "Columns",
      menu: () => {
        const colItems = [];
        const computed = getComputed();
        computed.computedColumnsMapInInitialOrder.forEach((col, id) => {
          const label = getColumnLabel(col, params);
          colItems.push({
            key: id,
            label,
            check: /* @__PURE__ */ React57.createElement(
              InfiniteCheckBox,
              {
                key: col.id,
                disabled: col.computedVisible && api.getVisibleColumnsCount() === 1,
                checked: col.computedVisible,
                onChange: (checked) => {
                  const visible = !!checked;
                  api.setVisibilityForColumn(col.id, visible);
                  requestAnimationFrame(() => {
                    api.realignColumnContextMenu();
                  });
                }
              }
            )
          });
        });
        return {
          columns: [
            {
              name: "check"
            },
            { name: "label" }
          ],
          items: colItems
        };
      }
    }
  ].filter((x) => !!x);
}

// src/components/InfiniteTable/utils/getMenuForColumn.tsx
function getMenuForColumn(columnId, context, onHideIntent) {
  var _a;
  if (columnId == null) {
    return null;
  }
  const { getComputed, getState } = context;
  const { components: components2, getColumnMenuItems } = getState();
  const MenuCmp = (_a = components2 == null ? void 0 : components2.Menu) != null ? _a : Menu;
  const column = getComputed().computedColumnsMap.get(columnId);
  if (!column) {
    return null;
  }
  const param = __spreadValues({
    column,
    columnApi: getColumnApiForColumn(column.id, context)
  }, context);
  const defaultItems = defaultGetColumnMenuItems([], param);
  const items = getColumnMenuItems ? getColumnMenuItems(defaultItems, param) : defaultItems;
  const onRootMouseDown = (event) => {
    event.__insideMenu = true;
  };
  const onHide = (state) => {
    var _a2, _b;
    (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.removeEventListener(
      "mousedown",
      onRootMouseDown
    );
  };
  if (!items || !items.length) {
    return null;
  }
  return /* @__PURE__ */ React58.createElement(
    MenuCmp,
    {
      autoFocus: true,
      items,
      onShow: (state) => {
        var _a2, _b;
        (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.addEventListener(
          "mousedown",
          onRootMouseDown
        );
      },
      onHide,
      onHideIntent: (state) => {
        onHide(state);
        onHideIntent == null ? void 0 : onHideIntent();
      }
    }
  );
}

// src/components/InfiniteTable/hooks/useColumnMenu.ts
var menuIconSelector = `[${MenuIconDataAttributes["data-name"]}="${MenuIconDataAttributesValues["data-name"]}"]`;
function showMenuForColumn(options) {
  var _a;
  const { columnId, context, clearAll, showOverlay } = options;
  const { getState, actions } = context;
  const { columnMenuTargetRef, domRef } = getState();
  function onHideIntent() {
    clearAll();
    actions.columnMenuVisibleForColumnId = null;
  }
  let target = options.target;
  if (!target) {
    target = (_a = columnMenuTargetRef.current) != null ? _a : void 0;
    if (target && !domRef.current.contains(target)) {
      target = void 0;
    }
  }
  if (!target) {
    const iconSelector = `[${InfiniteHeaderCellDataAttributes["data-column-id"]}="${columnId}"] ${menuIconSelector}`;
    target = getState().domRef.current.querySelector(
      iconSelector
    );
  }
  if (!target) {
    console.warn(`Cannot show column menu for column "${columnId}"`);
    return;
  }
  columnMenuTargetRef.current = null;
  showOverlay(() => getMenuForColumn(columnId, context, onHideIntent), {
    constrainTo: domRef.current,
    id: "column-menu",
    alignTo: target,
    alignPosition: [
      ["TopLeft", "BottomLeft"],
      ["TopRight", "BottomRight"]
    ]
  });
}
function useColumnMenu() {
  const context = useInfiniteTable();
  const { getState, actions } = context;
  const {
    showOverlay,
    portal: menuPortal,
    clearAll
  } = useOverlay({
    portalContainer: false
  });
  useEffect35(() => {
    const { actions: actions2, getState: getState2 } = context;
    const state = getState2();
    return state.onColumnMenuClick.onChange((info) => {
      if (!info) {
        return;
      }
      state.columnMenuTargetRef.current = info.target;
      actions2.contextMenuVisibleFor = null;
      actions2.cellContextMenuVisibleFor = null;
      actions2.filterOperatorMenuVisibleForColumnId = null;
      actions2.columnMenuVisibleForColumnId = info.column.id;
    });
  }, []);
  const { columnMenuVisibleForColumnId, columnMenuVisibleKey } = getState();
  useEffect35(() => {
    const { columnMenuVisibleForColumnId: columnMenuVisibleForColumnId2, columnMenuTargetRef } = getState();
    if (columnMenuVisibleForColumnId2) {
      let handleMouseDown2 = function(event) {
        if (event.__insideMenu !== true) {
          clearAll();
          actions.columnMenuVisibleForColumnId = null;
        }
      };
      var handleMouseDown = handleMouseDown2;
      document.documentElement.addEventListener("mousedown", handleMouseDown2);
      showMenuForColumn({
        columnId: columnMenuVisibleForColumnId2,
        context,
        clearAll,
        showOverlay
      });
      return () => {
        document.documentElement.removeEventListener(
          "mousedown",
          handleMouseDown2
        );
      };
    } else {
      columnMenuTargetRef.current = null;
      clearAll();
    }
    return () => {
    };
  }, [columnMenuVisibleForColumnId, columnMenuVisibleKey]);
  return { menuPortal };
}

// src/components/InfiniteTable/components/FocusDetect.tsx
init_esm_shims();
import * as React59 from "react";
import { useCallback as useCallback26 } from "react";
var style = {
  width: 0,
  height: 0,
  overflow: "hidden",
  pointerEvents: "none",
  outline: "none",
  zIndex: -1
};
function FocusDetect() {
  const {
    getState,
    api,
    actions,
    getComputed,
    dataSourceApi,
    dataSourceActions
  } = useInfiniteTable();
  const { getState: getDataSourceState } = useDataSourceContextValue();
  const { focusDetectDOMRef } = getState();
  const onFocus = useCallback26(() => __async(this, null, function* () {
    const context = {
      getDataSourceState,
      getComputed,
      actions,
      dataSourceActions,
      api,
      getState,
      dataSourceApi
    };
    focusLastFocusableCell(context);
  }), []);
  return /* @__PURE__ */ React59.createElement(
    "div",
    {
      onFocus,
      ref: focusDetectDOMRef,
      tabIndex: 0,
      style
    }
  );
}

// src/components/InfiniteTable/hooks/useEditingCallbackProps.ts
init_esm_shims();
import { useEffect as useEffect36 } from "react";
function useOnEditCancelled() {
  const context = useInfiniteTable();
  const { getState } = context;
  const { editingCell } = getState();
  const cancelled = editingCell && !editingCell.active ? editingCell.cancelled : void 0;
  useEffect36(() => {
    if (cancelled) {
      const { rowIndex, columnId, initialValue } = getState().editingCell;
      const { onEditCancelled } = getState();
      onEditCancelled == null ? void 0 : onEditCancelled(__spreadProps(__spreadValues({}, getCellContext(__spreadValues({
        rowIndex,
        columnId
      }, context))), {
        initialValue
      }));
    }
  }, [cancelled]);
}
function useOnEditRejected() {
  const context = useInfiniteTable();
  const {
    getState,
    state: { editingCell }
  } = context;
  const rejected = editingCell && !editingCell.active && editingCell.accepted instanceof Error ? editingCell.accepted : void 0;
  useEffect36(() => {
    if (rejected) {
      const { rowIndex, columnId, value, initialValue } = getState().editingCell;
      const { onEditRejected } = getState();
      onEditRejected == null ? void 0 : onEditRejected(__spreadProps(__spreadValues({}, getCellContext(__spreadValues({
        rowIndex,
        columnId
      }, context))), {
        value,
        error: rejected,
        initialValue
      }));
    }
  }, [rejected]);
}
function useFocusOnEditStop() {
  const context = useInfiniteTable();
  const {
    state: { editingCell }
  } = context;
  const active = editingCell == null ? void 0 : editingCell.active;
  const prevActive = usePrevious(active);
  useEffect36(() => {
    if (!active && prevActive) {
      context.api.focus();
    }
  }, [active, prevActive]);
}
function useOnEditAccepted() {
  const context = useInfiniteTable();
  const {
    state: { editingCell },
    getState
  } = context;
  const accepted = editingCell && !editingCell.active && !editingCell.cancelled && editingCell.accepted === true;
  useEffect36(() => {
    var _a, _b;
    if (accepted) {
      const { editingCell: editingCell2 } = getState();
      const { value, rowIndex, columnId, initialValue } = editingCell2;
      const editParams = __spreadProps(__spreadValues({}, getCellContext(__spreadValues({
        rowIndex,
        columnId
      }, context))), {
        value,
        initialValue
      });
      (_b = (_a = getState()).onEditAccepted) == null ? void 0 : _b.call(_a, editParams);
      context.api.persistEdit({ value });
    }
  }, [accepted]);
}
function useOnEditPersisted() {
  const context = useInfiniteTable();
  const {
    state: { editingCell },
    getState
  } = context;
  const persisted = editingCell ? editingCell.persisted : void 0;
  useEffect36(() => {
    if (persisted) {
      const { editingCell: editingCell2, onEditPersistError, onEditPersistSuccess } = getState();
      if (!editingCell2) {
        return;
      }
      const { rowIndex, columnId, value, initialValue } = editingCell2;
      const params = __spreadProps(__spreadValues({}, getCellContext(__spreadValues({
        rowIndex,
        columnId
      }, context))), {
        value,
        initialValue
      });
      if (persisted instanceof Error) {
        onEditPersistError == null ? void 0 : onEditPersistError(__spreadProps(__spreadValues({}, params), { error: persisted }));
      } else {
        onEditPersistSuccess == null ? void 0 : onEditPersistSuccess(params);
      }
    }
  }, [persisted]);
}
function useEditingCallbackProps() {
  useOnEditCancelled();
  useOnEditRejected();
  useOnEditAccepted();
  useOnEditPersisted();
  useFocusOnEditStop();
}

// src/components/InfiniteTable/hooks/useColumnFilterOperatorMenu.ts
init_esm_shims();
import { useEffect as useEffect37 } from "react";

// src/components/InfiniteTable/utils/getFilterOperatorMenuForColumn.tsx
init_esm_shims();
import * as React62 from "react";

// src/components/InfiniteTable/components/icons/ClearIcon.tsx
init_esm_shims();
import * as React60 from "react";
var ClearIcon = (props) => {
  return /* @__PURE__ */ React60.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React60.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
};

// src/components/InfiniteTable/components/icons/DoneIcon.tsx
init_esm_shims();
import * as React61 from "react";
var DoneIcon = (props) => {
  return /* @__PURE__ */ React61.createElement(Icon, __spreadValues({}, props), /* @__PURE__ */ React61.createElement("path", { d: "m9.55 19-6.725-6.725L5.25 9.85l4.3 4.325 9.225-9.225 2.425 2.4Z" }));
};

// src/components/InfiniteTable/utils/getFilterOperatorMenuForColumn.tsx
function getFilterOperatorMenuForColumn(columnId, context, onHideIntent) {
  var _a;
  if (columnId == null) {
    return null;
  }
  const {
    getComputed,
    getState,
    getDataSourceState,
    actions,
    dataSourceApi,
    dataSourceActions,
    api
  } = context;
  const { components: components2, getFilterOperatorMenuItems } = getState();
  const MenuCmp = (_a = components2 == null ? void 0 : components2.Menu) != null ? _a : Menu;
  const column = getComputed().computedColumnsMap.get(columnId);
  if (!column) {
    return null;
  }
  const onRootMouseDown = (event) => {
    event.__insideMenu = true;
  };
  const onHide = (state) => {
    var _a2, _b;
    (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.removeEventListener(
      "mousedown",
      onRootMouseDown
    );
  };
  const { filterTypes } = getDataSourceState();
  const columnFilterType = filterTypes[column.computedFilterType];
  if (!columnFilterType) {
    return null;
  }
  const operatorItems = columnFilterType.operators.map((operator) => {
    var _a2, _b, _c;
    const key = operator.name;
    const checked = column.computedFilterValue ? column.computedFilterValue.filter.operator === key : key === columnFilterType.defaultOperator;
    const IconCmp = (_b = (_a2 = operator.components) == null ? void 0 : _a2.Icon) != null ? _b : FilterIcon;
    return {
      key,
      icon: /* @__PURE__ */ React62.createElement(IconCmp, null),
      label: /* @__PURE__ */ React62.createElement(React62.Fragment, null, (_c = operator.label) != null ? _c : operator.name),
      onAction: () => {
        api.setColumnFilterOperator(columnId, key);
      },
      checked: checked ? /* @__PURE__ */ React62.createElement(DoneIcon, { size: 16 }) : null
    };
  });
  const firstItems = [
    {
      key: "clear",
      label: "Clear",
      icon: /* @__PURE__ */ React62.createElement(ClearIcon, null),
      disabled: !column.computedFiltered,
      onAction: () => {
        api.clearColumnFilter(columnId);
      }
    },
    "-"
  ];
  const defaultItems = [...firstItems, ...operatorItems];
  const param = {
    column,
    api,
    getState,
    getDataSourceState,
    getComputed,
    actions,
    dataSourceApi,
    dataSourceActions,
    columnFilterValue: column.computedFilterValue,
    filterTypes
  };
  const items = getFilterOperatorMenuItems ? getFilterOperatorMenuItems(defaultItems, param) : defaultItems;
  return /* @__PURE__ */ React62.createElement(
    MenuCmp,
    {
      autoFocus: true,
      columns: [
        {
          name: "icon"
        },
        { name: "label" },
        { name: "checked" }
      ],
      items,
      onShow: (state) => {
        var _a2, _b;
        (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.addEventListener(
          "mousedown",
          onRootMouseDown
        );
      },
      onHide,
      onHideIntent: (state) => {
        onHide(state);
        onHideIntent == null ? void 0 : onHideIntent();
      }
    }
  );
}

// src/components/InfiniteTable/hooks/useColumnFilterOperatorMenu.ts
var OFFSET2 = 10;
function useColumnFilterOperatorMenu() {
  const context = useInfiniteTable();
  const { getState, actions } = context;
  const {
    showOverlay,
    portal: menuPortal,
    clearAll
  } = useOverlay({
    portalContainer: false
  });
  useEffect37(() => {
    const { actions: actions2, getState: getState2 } = context;
    const state = getState2();
    return state.onFilterOperatorMenuClick.onChange((info) => {
      if (!info) {
        return;
      }
      const { target, column } = info;
      function onHideIntent() {
        clearAll();
        actions2.filterOperatorMenuVisibleForColumnId = null;
      }
      let alignTo = (target == null ? void 0 : target.parentElement) || target;
      const rect = Rectangle.from(alignTo.getBoundingClientRect());
      rect.top -= OFFSET2;
      rect.left -= OFFSET2;
      rect.width += 2 * OFFSET2;
      rect.height += 2 * OFFSET2;
      showOverlay(
        () => getFilterOperatorMenuForColumn(column.id, context, onHideIntent),
        {
          constrainTo: getState2().domRef.current,
          id: "filter-operator-menu",
          alignTo: rect,
          alignPosition: [
            ["TopLeft", "BottomLeft"],
            ["TopRight", "BottomRight"]
          ]
        }
      );
      actions2.contextMenuVisibleFor = null;
      actions2.cellContextMenuVisibleFor = null;
      actions2.columnMenuVisibleForColumnId = null;
      actions2.filterOperatorMenuVisibleForColumnId = column.id;
    });
  }, []);
  useEffect37(() => {
    const { filterOperatorMenuVisibleForColumnId } = getState();
    if (filterOperatorMenuVisibleForColumnId) {
      let handleMouseDown2 = function(event) {
        if (event.__insideMenu !== true) {
          clearAll();
          actions.filterOperatorMenuVisibleForColumnId = null;
        }
      };
      var handleMouseDown = handleMouseDown2;
      document.documentElement.addEventListener("mousedown", handleMouseDown2);
      return () => {
        document.documentElement.removeEventListener(
          "mousedown",
          handleMouseDown2
        );
      };
    } else {
      clearAll();
    }
    return () => {
    };
  }, [getState().filterOperatorMenuVisibleForColumnId]);
  return { menuPortal };
}

// src/components/InfiniteTable/hooks/useContextMenu.ts
init_esm_shims();
import { useEffect as useEffect38 } from "react";

// src/components/InfiniteTable/utils/getCellContextMenu.tsx
init_esm_shims();
import * as React63 from "react";
function getCellContextMenu(cellLocation, context, onHideIntent) {
  var _a;
  const { columnId, rowIndex, event } = cellLocation;
  const { getComputed, getState } = context;
  const { components: components2, getCellContextMenuItems } = getState();
  const MenuCmp = (_a = components2 == null ? void 0 : components2.Menu) != null ? _a : Menu;
  const { computedColumnsMap } = getComputed();
  const column = computedColumnsMap.get(columnId);
  const cellContext = __spreadProps(__spreadValues({}, getCellContext(__spreadProps(__spreadValues({}, context), {
    rowIndex,
    columnId: column.id
  }))), {
    event
  });
  if (!column || !getCellContextMenuItems) {
    return {
      cellContext,
      menu: null,
      preventDefault: false
    };
  }
  const menuDefinition = getCellContextMenuItems(cellContext, context);
  let items = menuDefinition ? Array.isArray(menuDefinition) ? menuDefinition : menuDefinition.items : null;
  const menuColumns = menuDefinition && !Array.isArray(menuDefinition) ? menuDefinition.columns : void 0;
  const onRootMouseDown = (event2) => {
    event2.__insideMenu = true;
  };
  const onHide = (state) => {
    var _a2, _b;
    (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.removeEventListener(
      "mousedown",
      onRootMouseDown
    );
  };
  if (!items || !items.length) {
    return { cellContext, menu: null, preventDefault: Array.isArray(items) };
  }
  return {
    preventDefault: true,
    menu: /* @__PURE__ */ React63.createElement(
      MenuCmp,
      {
        columns: menuColumns,
        autoFocus: true,
        items,
        onShow: (state) => {
          var _a2, _b;
          (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.addEventListener(
            "mousedown",
            onRootMouseDown
          );
        },
        onHide,
        onHideIntent: (state) => {
          onHide(state);
          onHideIntent == null ? void 0 : onHideIntent();
        }
      }
    ),
    cellContext
  };
}
function getTableContextMenu(menuLocation, context, onHideIntent) {
  var _a;
  const { getState, getComputed } = context;
  const { components: components2, getContextMenuItems } = getState();
  const MenuCmp = (_a = components2 == null ? void 0 : components2.Menu) != null ? _a : Menu;
  const { computedColumnsMap } = getComputed();
  const column = menuLocation.columnId ? computedColumnsMap.get(menuLocation.columnId) : void 0;
  const cellContext = column ? __spreadValues(__spreadValues({}, menuLocation), getCellContext(__spreadProps(__spreadValues({}, context), {
    rowIndex: menuLocation.rowIndex,
    columnId: column.id
  }))) : menuLocation;
  if (!getContextMenuItems) {
    return { cellContext, menu: null, preventDefault: false };
  }
  let menuDefinition = getContextMenuItems(cellContext, context);
  let items = menuDefinition ? Array.isArray(menuDefinition) ? menuDefinition : menuDefinition.items : null;
  const menuColumns = menuDefinition && !Array.isArray(menuDefinition) ? menuDefinition.columns : void 0;
  const onRootMouseDown = (event) => {
    event.__insideMenu = true;
  };
  const onHide = (state) => {
    var _a2, _b;
    (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.removeEventListener(
      "mousedown",
      onRootMouseDown
    );
  };
  if (!items || !items.length) {
    return { cellContext, menu: null, preventDefault: Array.isArray(items) };
  }
  return {
    preventDefault: true,
    menu: /* @__PURE__ */ React63.createElement(
      MenuCmp,
      {
        columns: menuColumns,
        autoFocus: true,
        items,
        onShow: (state) => {
          var _a2, _b;
          (_b = (_a2 = state.domRef.current) == null ? void 0 : _a2.parentNode) == null ? void 0 : _b.addEventListener(
            "mousedown",
            onRootMouseDown
          );
        },
        onHide,
        onHideIntent: (state) => {
          onHide(state);
          onHideIntent == null ? void 0 : onHideIntent();
        }
      }
    ),
    cellContext
  };
}

// src/components/InfiniteTable/hooks/useContextMenu.ts
var OFFSET3 = 5;
var ALIGN_POSITIONS = [
  ["TopLeft", "BottomLeft"],
  ["TopRight", "BottomRight"],
  ["BottomLeft", "BottomLeft"],
  ["BottomRight", "BottomRight"],
  ["TopCenter", "TopLeft"],
  ["BottomCenter", "TopLeft"],
  ["CenterLeft", "TopLeft"],
  ["CenterRight", "TopLeft"]
];
function useCellContextMenu() {
  const context = useInfiniteTable();
  const { getState, actions } = context;
  const {
    showOverlay,
    portal: menuPortal,
    clearAll
  } = useOverlay({
    portalContainer: false
  });
  useEffect38(() => {
    const { actions: actions2, getState: getState2, getDataSourceState } = context;
    const state = getState2();
    return state.cellContextMenu.onChange((info) => {
      if (!info) {
        return;
      }
      const { event } = info;
      function onHideIntent() {
        clearAll();
        actions2.cellContextMenuVisibleFor = null;
      }
      const { menu, cellContext, preventDefault } = getCellContextMenu(
        info,
        context,
        onHideIntent
      );
      const rect = Rectangle.fromPoint({
        top: event.clientY,
        left: event.clientX
      });
      rect.width += OFFSET3;
      rect.height += OFFSET3;
      showOverlay(menu, {
        constrainTo: getState2().domRef.current,
        id: "cell-context-menu",
        alignTo: rect,
        alignPosition: ALIGN_POSITIONS
      });
      if (preventDefault) {
        event.preventDefault();
      }
      actions2.cellContextMenuVisibleFor = {
        columnId: info.columnId,
        rowId: info.rowId,
        rowIndex: info.rowIndex,
        colIndex: info.colIndex
      };
      const { onCellContextMenu } = getState2();
      if (onCellContextMenu) {
        onCellContextMenu(
          __spreadProps(__spreadValues({}, cellContext), {
            getState: getState2,
            getDataSourceState
          }),
          event
        );
      }
    });
  }, []);
  useEffect38(() => {
    const { cellContextMenuVisibleFor } = getState();
    if (cellContextMenuVisibleFor) {
      let handleMouseDown2 = function(event) {
        if (event.__insideMenu !== true) {
          clearAll();
          actions.cellContextMenuVisibleFor = null;
        }
      };
      var handleMouseDown = handleMouseDown2;
      document.documentElement.addEventListener("mousedown", handleMouseDown2);
      return () => {
        document.documentElement.removeEventListener(
          "mousedown",
          handleMouseDown2
        );
      };
    } else {
      clearAll();
    }
    return () => {
    };
  }, [getState().cellContextMenuVisibleFor]);
  return { menuPortal };
}
function useTableContextMenu() {
  const context = useInfiniteTable();
  const { getState, actions } = context;
  const {
    showOverlay,
    portal: menuPortal,
    clearAll
  } = useOverlay({
    portalContainer: false
  });
  useEffect38(() => {
    const { actions: actions2, getState: getState2 } = context;
    const state = getState2();
    return state.contextMenu.onChange((info) => {
      if (!info) {
        return;
      }
      const { event } = info;
      function onHideIntent() {
        clearAll();
        actions2.contextMenuVisibleFor = null;
      }
      const { menu, cellContext, preventDefault } = getTableContextMenu(
        info,
        context,
        onHideIntent
      );
      const point = {
        top: event.clientY,
        left: event.clientX
      };
      const rect = Rectangle.fromPoint(point);
      rect.width += OFFSET3;
      rect.height += OFFSET3;
      showOverlay(menu, {
        constrainTo: getState2().domRef.current,
        id: "table-context-menu",
        alignTo: rect,
        alignPosition: ALIGN_POSITIONS
      });
      if (preventDefault) {
        event.preventDefault();
      }
      actions2.contextMenuVisibleFor = __spreadValues({
        point
      }, info);
      const { onContextMenu } = getState2();
      if (onContextMenu) {
        onContextMenu(
          __spreadValues(__spreadValues({}, context), cellContext),
          event
        );
      }
    });
  }, []);
  useEffect38(() => {
    const { contextMenuVisibleFor } = getState();
    if (contextMenuVisibleFor) {
      let handleMouseDown2 = function(event) {
        if (event.__insideMenu !== true) {
          clearAll();
          actions.contextMenuVisibleFor = null;
        }
      };
      var handleMouseDown = handleMouseDown2;
      document.documentElement.addEventListener("mousedown", handleMouseDown2);
      return () => {
        document.documentElement.removeEventListener(
          "mousedown",
          handleMouseDown2
        );
      };
    } else {
      clearAll();
    }
    return () => {
    };
  }, [getState().contextMenuVisibleFor]);
  return { menuPortal };
}

// src/components/InfiniteTable/types/index.ts
init_esm_shims();

// src/components/InfiniteTable/index.tsx
var InfiniteTableClassName = internalProps.rootClassName;
var HOVERED_CLASS_NAMES = [RowHoverCls, "InfiniteColumnCell--hovered"];
var InfiniteTableRoot = getComponentStateRoot({
  // @ts-ignore
  initSetupState: initSetupState2,
  // @ts-ignore
  forwardProps: forwardProps4,
  // @ts-ignore
  mapPropsToState,
  // @ts-ignore
  cleanup: cleanupState,
  // @ts-ignore
  allowedControlledPropOverrides: {
    rowHeight: true,
    columnHeaderHeight: true
  },
  // @ts-ignore
  getParentState: () => useDataSource(),
  debugName: "InfiniteTable"
});
var InfiniteTableComponent = React64.memo(
  function InfiniteTableComponent2() {
    var _a;
    const context = useInfiniteTable();
    const { state: componentState, getComputed, computed, api } = context;
    const {
      componentState: { loading, dataArray },
      getState: getDataSourceState,
      componentActions: dataSourceActions
    } = useDataSourceContextValue();
    const {
      domRef,
      scrollerDOMRef,
      portalDOMRef,
      licenseKey,
      loadingText,
      header,
      onRowHeightCSSVarChange,
      onColumnHeaderHeightCSSVarChange,
      rowHeightCSSVar,
      columnHeaderHeightCSSVar,
      components: components2,
      scrollStopDelay,
      brain,
      headerBrain,
      renderer,
      keyboardNavigation,
      activeRowIndex,
      activeCellIndex,
      onRenderUpdater
    } = componentState;
    useScrollToActiveRow(activeRowIndex, dataArray.length, api);
    useScrollToActiveCell(activeCellIndex, dataArray.length, api);
    const { onKeyDown: onKeyDown2 } = useDOMEventHandlers();
    const { bodySize } = componentState;
    const { scrollbars } = computed;
    const { renderCell } = useCellRendering({
      imperativeApi: api,
      getComputed,
      domRef: componentState.domRef,
      bodySize,
      computed
    });
    React64.useEffect(() => {
      const dataSourceState = getDataSourceState();
      const onChange = debounce(
        (renderRange) => {
          dataSourceState.notifyRenderRangeChange({
            renderStartIndex: renderRange[0],
            renderEndIndex: renderRange[1]
          });
        },
        { wait: scrollStopDelay }
      );
      return brain.onVerticalRenderRangeChange(onChange);
    }, [brain, scrollStopDelay]);
    const licenseValid = useLicense(licenseKey);
    const domProps = useDOMProps(componentState.domProps);
    const LoadMaskCmp = (_a = components2 == null ? void 0 : components2.LoadMask) != null ? _a : LoadMask;
    React64.useEffect(() => {
      brain.setScrollStopDelay(scrollStopDelay);
      dataSourceActions.scrollStopDelayUpdatedByTable = scrollStopDelay;
    }, [scrollStopDelay]);
    useAutoSizeColumns();
    useEditingCallbackProps();
    const { menuPortal } = useColumnMenu();
    const { menuPortal: cellContextMenuPortal } = useCellContextMenu();
    const { menuPortal: tableContextMenuPortal } = useTableContextMenu();
    const { menuPortal: filterOperatorMenuPortal } = useColumnFilterOperatorMenu();
    React64.useEffect(() => {
      if (typeof globalThis.__DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_IS_READY === "function") {
        globalThis.__DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_IS_READY(
          componentState.id,
          componentState.ready,
          context.api,
          context
        );
      }
      if (false) {
        globalThis.infiniteApi = context.api;
      }
    }, [componentState.ready]);
    const onContextMenu = React64.useCallback((event) => {
      const state = context.getState();
      const target = event.target;
      const cell = selectParentUntil(
        target,
        getCellSelector(),
        state.domRef.current
      );
      let columnId;
      let colIndex;
      let rowId;
      let rowIndex;
      if (cell) {
        colIndex = Number(cell.dataset.colIndex);
        rowIndex = Number(cell.dataset.rowIndex);
        columnId = context.getComputed().computedVisibleColumns[colIndex].id;
        rowId = context.dataSourceApi.getRowInfoArray()[rowIndex].id;
      }
      const param = {
        columnId,
        colIndex,
        rowId,
        rowIndex,
        event,
        target: cell != null ? cell : event.target
      };
      if (cell) {
        state.cellContextMenu(param);
      }
      state.contextMenu(param);
    }, []);
    return /* @__PURE__ */ React64.createElement("div", __spreadValues({ onKeyDown: onKeyDown2, ref: domRef }, domProps), header ? /* @__PURE__ */ React64.createElement(
      TableHeaderWrapper,
      {
        bodyBrain: brain,
        headerBrain,
        scrollbars
      }
    ) : null, /* @__PURE__ */ React64.createElement(InfiniteTableBody, { onContextMenu }, /* @__PURE__ */ React64.createElement(
      HeadlessTable,
      {
        tabIndex: 0,
        activeRowIndex: componentState.ready && keyboardNavigation === "row" ? activeRowIndex : null,
        activeCellIndex: componentState.ready && keyboardNavigation === "cell" && // we want to hide the active cell indicator while column reodering is happening
        !componentState.columnReorderDragColumnId ? activeCellIndex : null,
        scrollStopDelay,
        renderer,
        onRenderUpdater,
        brain,
        renderCell,
        cellHoverClassNames: HOVERED_CLASS_NAMES,
        scrollerDOMRef
      }
    ), /* @__PURE__ */ React64.createElement(LoadMaskCmp, { visible: loading }, loadingText)), /* @__PURE__ */ React64.createElement(
      "div",
      {
        "data-name": "pinned-start-border",
        className: PinnedStartIndicatorBorder
      }
    ), /* @__PURE__ */ React64.createElement(
      "div",
      {
        "data-name": "pinned-end-border",
        className: PinnedEndIndicatorBorder
      }
    ), /* @__PURE__ */ React64.createElement(
      "div",
      {
        ref: portalDOMRef,
        className: join(
          `${rootClassName2}Portal`,
          zIndex[1e7],
          position.absolute,
          top[0],
          left[0]
        )
      },
      menuPortal,
      cellContextMenuPortal,
      tableContextMenuPortal,
      filterOperatorMenuPortal
    ), rowHeightCSSVar ? /* @__PURE__ */ React64.createElement(
      CSSNumericVariableWatch,
      {
        varName: rowHeightCSSVar,
        onChange: onRowHeightCSSVarChange
      }
    ) : null, columnHeaderHeightCSSVar ? /* @__PURE__ */ React64.createElement(
      CSSNumericVariableWatch,
      {
        varName: columnHeaderHeightCSSVar,
        onChange: onColumnHeaderHeightCSSVarChange
      }
    ) : null, /* @__PURE__ */ React64.createElement(InfiniteTableFooter, null), licenseValid ? null : /* @__PURE__ */ React64.createElement(InfiniteTableLicenseFooter, null), /* @__PURE__ */ React64.createElement(FocusDetect, null));
  }
);
function InfiniteTableContextProvider() {
  const { componentActions, componentState } = useComponentState();
  const { scrollerDOMRef, scrollTopKey } = componentState;
  const computed = useComputed();
  const getComputed = useLatest(computed);
  const getState = useLatest(componentState);
  if (false) {
    globalThis.getState = getState;
    globalThis.getComputed = getComputed;
    globalThis.componentActions = componentActions;
  }
  const {
    getState: getDataSourceState,
    componentActions: dataSourceActions,
    api: dataSourceApi
  } = useDataSourceContextValue();
  const [imperativeApi] = React64.useState(() => {
    return getImperativeApi({
      getComputed,
      getState,
      getDataSourceState,
      dataSourceApi,
      actions: componentActions,
      dataSourceActions
    });
  });
  const contextValue = {
    actions: componentActions,
    state: componentState,
    computed,
    dataSourceActions,
    getDataSourceState,
    getComputed,
    getState,
    api: imperativeApi,
    dataSourceApi
  };
  useResizeObserver(
    scrollerDOMRef,
    (size) => {
      const bodySize = {
        width: size.width,
        //- reservedScrollSpace,
        height: size.height
      };
      componentActions.bodySize = bodySize;
    },
    { earlyAttach: true, debounce: 50 }
  );
  React64.useEffect(() => {
    if (scrollerDOMRef.current) {
      scrollerDOMRef.current.scrollTop = 0;
    }
  }, [scrollTopKey, scrollerDOMRef]);
  const TableContext2 = getInfiniteTableContext();
  return /* @__PURE__ */ React64.createElement(TableContext2.Provider, { value: contextValue }, /* @__PURE__ */ React64.createElement(InfiniteTableComponent, null));
}
function InfiniteTable(props) {
  const table = (
    //@ts-ignore
    /* @__PURE__ */ React64.createElement(InfiniteTableRoot, __spreadValues({}, props), /* @__PURE__ */ React64.createElement(InfiniteTableContextProvider, null))
  );
  if (false) {
    return /* @__PURE__ */ React64.createElement(React64.StrictMode, null, table);
  }
  return table;
}
InfiniteTable.defaultProps = {
  rowHeight: 40,
  columnHeaderHeight: toCSSVarName(columnHeaderHeightName)
};

// src/components/Menu/MenuProps.ts
init_esm_shims();

// src/index.tsx
var components = {
  CheckBox: InfiniteCheckBox,
  LoadMask,
  MenuIcon,
  StringFilterEditor,
  NumberFilterEditor
};
export {
  DataSource,
  DataSourceActionType,
  DeepMap,
  GroupRowsState,
  InfiniteTable,
  InfiniteTableClassName,
  InfiniteTableComponent,
  Menu,
  RowSelectionState,
  components,
  debounce,
  defaultFilterTypes2 as defaultFilterTypes,
  defaultFilterTypes2 as filterTypes,
  flatten,
  getComponentStateRoot,
  group,
  interceptMap,
  multisort,
  useComponentState,
  useDataSource,
  useEffectWithChanges,
  useInfiniteColumnCell,
  useInfiniteColumnEditor,
  useInfiniteColumnFilterEditor,
  useInfiniteHeaderCell,
  useOverlay,
  useOverlayPortal,
  useRowInfoReducers
};
//!collapsed || lazyLoad;
