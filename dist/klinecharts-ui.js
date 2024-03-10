var tg = Object.defineProperty;
var rg = (e, r, t) => r in e ? tg(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Mn = (e, r, t) => (rg(e, typeof r != "symbol" ? r + "" : r, t), t);
/**
     * @license
     * KLineChart v1.1.1
     * Copyright (c) 2019 lihu.
     * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
     */
var ef = function(e, r) {
  return ef = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var a in i)
      Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
  }, ef(e, r);
};
function Ge(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  ef(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var Le = function() {
  return Le = Object.assign || function(r) {
    for (var t, i = 1, a = arguments.length; i < a; i++) {
      t = arguments[i];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, Le.apply(this, arguments);
};
function t1(e, r, t, i) {
  function a(s) {
    return s instanceof t ? s : new t(function(l) {
      l(s);
    });
  }
  return new (t || (t = Promise))(function(s, l) {
    function u(d) {
      try {
        h(i.next(d));
      } catch (v) {
        l(v);
      }
    }
    function c(d) {
      try {
        h(i.throw(d));
      } catch (v) {
        l(v);
      }
    }
    function h(d) {
      d.done ? s(d.value) : a(d.value).then(u, c);
    }
    h((i = i.apply(e, r || [])).next());
  });
}
function r1(e, r) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, a, s, l;
  return l = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function u(h) {
    return function(d) {
      return c([h, d]);
    };
  }
  function c(h) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; l && (l = 0, h[0] && (t = 0)), t; )
      try {
        if (i = 1, a && (s = h[0] & 2 ? a.return : h[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, h[1])).done)
          return s;
        switch (a = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
          case 0:
          case 1:
            s = h;
            break;
          case 4:
            return t.label++, { value: h[1], done: !1 };
          case 5:
            t.label++, a = h[1], h = [0];
            continue;
          case 7:
            h = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              t = 0;
              continue;
            }
            if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
              t.label = h[1];
              break;
            }
            if (h[0] === 6 && t.label < s[1]) {
              t.label = s[1], s = h;
              break;
            }
            if (s && t.label < s[2]) {
              t.label = s[2], t.ops.push(h);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        h = r.call(e, t);
      } catch (d) {
        h = [6, d], a = 0;
      } finally {
        i = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function Ma(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], i = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function wr(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var i = t.call(e), a, s = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = i.next()).done; )
      s.push(a.value);
  } catch (u) {
    l = { error: u };
  } finally {
    try {
      a && !a.done && (t = i.return) && t.call(i);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return s;
}
function E9(e, r, t) {
  if (t || arguments.length === 2)
    for (var i = 0, a = r.length, s; i < a; i++)
      (s || !(i in r)) && (s || (s = Array.prototype.slice.call(r, 0, i)), s[i] = r[i]);
  return e.concat(s || Array.prototype.slice.call(r));
}
var mt;
(function(e) {
  e.Dashed = "dashed", e.Solid = "solid";
})(mt || (mt = {}));
var ut;
(function(e) {
  e.Stroke = "stroke", e.Fill = "fill", e.StrokeFill = "stroke_fill";
})(ut || (ut = {}));
var Do;
(function(e) {
  e.Always = "always", e.FollowCross = "follow_cross", e.None = "none";
})(Do || (Do = {}));
var Jn;
(function(e) {
  e.Standard = "standard", e.Rect = "rect";
})(Jn || (Jn = {}));
var Ii;
(function(e) {
  e.Left = "left", e.Middle = "middle", e.Right = "right";
})(Ii || (Ii = {}));
var o1;
(function(e) {
  e.Fixed = "fixed", e.Pointer = "pointer";
})(o1 || (o1 = {}));
var ti;
(function(e) {
  e.CandleSolid = "candle_solid", e.CandleStroke = "candle_stroke", e.CandleUpStroke = "candle_up_stroke", e.CandleDownStroke = "candle_down_stroke", e.Ohlc = "ohlc", e.Area = "area";
})(ti || (ti = {}));
var sa;
(function(e) {
  e.Left = "left", e.Right = "right";
})(sa || (sa = {}));
var pr;
(function(e) {
  e.Normal = "normal", e.Percentage = "percentage", e.Log = "log";
})(pr || (pr = {}));
var Gu = "#F92855", Xc = "rgba(249, 40, 85, .7)", Qu = "#2DC08E", Zc = "rgba(45, 192, 142, .7)", Aa = "#888888", I1 = "#FFFFFF", xn = "#1677FF", $a = "#76808F", tf = "#DDDDDD";
function nl(e) {
  return "rgba(22, 119, 255, ".concat(e, ")");
}
function ng() {
  function e() {
    return {
      show: !0,
      size: 1,
      color: "#EDEDED",
      style: mt.Dashed,
      dashedValue: [2, 2]
    };
  }
  return {
    show: !0,
    horizontal: e(),
    vertical: e()
  };
}
function ig() {
  var e = {
    show: !0,
    color: $a,
    textOffset: 5,
    textSize: 10,
    textFamily: "Helvetica Neue",
    textWeight: "normal"
  };
  return {
    type: ti.CandleSolid,
    bar: {
      upColor: Qu,
      downColor: Gu,
      noChangeColor: Aa,
      upBorderColor: Qu,
      downBorderColor: Gu,
      noChangeBorderColor: Aa,
      upWickColor: Qu,
      downWickColor: Gu,
      noChangeWickColor: Aa
    },
    area: {
      lineSize: 2,
      lineColor: xn,
      value: "close",
      backgroundColor: [{
        offset: 0,
        color: nl(0.01)
      }, {
        offset: 1,
        color: nl(0.2)
      }]
    },
    priceMark: {
      show: !0,
      high: Le({}, e),
      low: Le({}, e),
      last: {
        show: !0,
        upColor: Qu,
        downColor: Gu,
        noChangeColor: Aa,
        line: {
          show: !0,
          style: mt.Dashed,
          dashedValue: [4, 4],
          size: 1
        },
        text: {
          show: !0,
          style: ut.Fill,
          size: 12,
          paddingLeft: 4,
          paddingTop: 4,
          paddingRight: 4,
          paddingBottom: 4,
          borderColor: "transparent",
          borderStyle: mt.Solid,
          borderSize: 0,
          borderDashedValue: [2, 2],
          color: I1,
          family: "Helvetica Neue",
          weight: "normal",
          borderRadius: 2
        }
      }
    },
    tooltip: {
      showRule: Do.Always,
      showType: Jn.Standard,
      custom: null,
      defaultValue: "n/a",
      rect: {
        position: o1.Fixed,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 8,
        offsetLeft: 10,
        offsetTop: 8,
        offsetRight: 10,
        offsetBottom: 8,
        borderRadius: 4,
        borderSize: 1,
        borderColor: "#F2F3F5",
        color: "#FEFEFE"
      },
      text: {
        size: 12,
        family: "Helvetica Neue",
        weight: "normal",
        color: $a,
        marginLeft: 10,
        marginTop: 8,
        marginRight: 6,
        marginBottom: 0
      },
      icons: []
    }
  };
}
function ag() {
  var e = ["#FF9600", "#935EBD", xn, "#E11D74", "#01C5C4"].map(function(r) {
    return {
      style: mt.Solid,
      smooth: !1,
      size: 1,
      dashedValue: [2, 2],
      color: r
    };
  });
  return {
    ohlc: {
      upColor: Zc,
      downColor: Xc,
      noChangeColor: Aa
    },
    bars: [{
      style: ut.Fill,
      borderStyle: mt.Solid,
      borderSize: 1,
      borderDashedValue: [2, 2],
      upColor: Zc,
      downColor: Xc,
      noChangeColor: Aa
    }],
    lines: e,
    circles: [{
      style: ut.Fill,
      borderStyle: mt.Solid,
      borderSize: 1,
      borderDashedValue: [2, 2],
      upColor: Zc,
      downColor: Xc,
      noChangeColor: Aa
    }],
    lastValueMark: {
      show: !1,
      text: {
        show: !1,
        style: ut.Fill,
        color: I1,
        size: 12,
        family: "Helvetica Neue",
        weight: "normal",
        borderStyle: mt.Solid,
        borderColor: "transparent",
        borderSize: 0,
        borderDashedValue: [2, 2],
        paddingLeft: 4,
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        borderRadius: 2
      }
    },
    tooltip: {
      showRule: Do.Always,
      showType: Jn.Standard,
      showName: !0,
      showParams: !0,
      defaultValue: "n/a",
      text: {
        size: 12,
        family: "Helvetica Neue",
        weight: "normal",
        color: $a,
        marginLeft: 10,
        marginTop: 8,
        marginRight: 6,
        marginBottom: 0
      },
      icons: []
    }
  };
}
function D9() {
  return {
    show: !0,
    size: "auto",
    axisLine: {
      show: !0,
      color: tf,
      size: 1
    },
    tickText: {
      show: !0,
      color: $a,
      size: 12,
      family: "Helvetica Neue",
      weight: "normal",
      marginStart: 4,
      marginEnd: 4
    },
    tickLine: {
      show: !0,
      size: 1,
      length: 3,
      color: tf
    }
  };
}
function og() {
  var e = D9();
  return e.type = pr.Normal, e.position = sa.Right, e.inside = !1, e.reverse = !1, e;
}
function sg() {
  function e() {
    return {
      show: !0,
      line: {
        show: !0,
        style: mt.Dashed,
        dashedValue: [4, 2],
        size: 1,
        color: $a
      },
      text: {
        show: !0,
        style: ut.Fill,
        color: I1,
        size: 12,
        family: "Helvetica Neue",
        weight: "normal",
        borderStyle: mt.Solid,
        borderDashedValue: [2, 2],
        borderSize: 1,
        borderColor: $a,
        borderRadius: 2,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: $a
      }
    };
  }
  return {
    show: !0,
    horizontal: e(),
    vertical: e()
  };
}
function lg() {
  var e = nl(0.35), r = nl(0.25);
  function t() {
    return {
      style: ut.Fill,
      color: I1,
      size: 12,
      family: "Helvetica Neue",
      weight: "normal",
      borderStyle: mt.Solid,
      borderDashedValue: [2, 2],
      borderSize: 1,
      borderRadius: 2,
      borderColor: xn,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4,
      paddingBottom: 4,
      backgroundColor: xn
    };
  }
  return {
    point: {
      color: xn,
      borderColor: e,
      borderSize: 1,
      radius: 5,
      activeColor: xn,
      activeBorderColor: e,
      activeBorderSize: 3,
      activeRadius: 5
    },
    line: {
      style: mt.Solid,
      smooth: !1,
      color: xn,
      size: 1,
      dashedValue: [2, 2]
    },
    rect: {
      style: ut.Fill,
      color: r,
      borderColor: xn,
      borderSize: 1,
      borderRadius: 0,
      borderStyle: mt.Solid,
      borderDashedValue: [2, 2]
    },
    polygon: {
      style: ut.Fill,
      color: xn,
      borderColor: xn,
      borderSize: 1,
      borderStyle: mt.Solid,
      borderDashedValue: [2, 2]
    },
    circle: {
      style: ut.Fill,
      color: r,
      borderColor: xn,
      borderSize: 1,
      borderStyle: mt.Solid,
      borderDashedValue: [2, 2]
    },
    arc: {
      style: mt.Solid,
      color: xn,
      size: 1,
      dashedValue: [2, 2]
    },
    text: t(),
    rectText: t()
  };
}
function ug() {
  return {
    size: 1,
    color: tf,
    fill: !0,
    activeBackgroundColor: nl(0.08)
  };
}
function cg() {
  return {
    grid: ng(),
    candle: ig(),
    indicator: ag(),
    xAxis: D9(),
    yAxis: og(),
    separator: ug(),
    crosshair: sg(),
    overlay: lg()
  };
}
function nn(e, r) {
  if (!(!Fn(e) && !Fn(r))) {
    for (var t in r)
      if (Object.prototype.hasOwnProperty.call(r, t)) {
        var i = e[t], a = r[t];
        Fn(a) && Fn(i) ? nn(i, a) : pe(r[t]) && (e[t] = Fo(r[t]));
      }
  }
}
function Fo(e) {
  if (!Fn(e))
    return e;
  var r;
  Dn(e) ? r = [] : r = {};
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      var i = e[t];
      Fn(i) ? r[t] = Fo(i) : r[t] = i;
    }
  return r;
}
function Dn(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
function On(e) {
  return typeof e == "function";
}
function Fn(e) {
  return typeof e == "object" && pe(e);
}
function Ae(e) {
  return typeof e == "number" && !isNaN(e);
}
function pe(e) {
  return e != null;
}
function aa(e) {
  return typeof e == "boolean";
}
function Ne(e) {
  return typeof e == "string";
}
var fg = /\\(\\)?/g, hg = RegExp(`[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`, "g");
function Kt(e, r, t) {
  if (pe(e)) {
    var i = [];
    r.replace(hg, function(u) {
      for (var c = [], h = 1; h < arguments.length; h++)
        c[h - 1] = arguments[h];
      var d = u;
      return pe(c[1]) ? d = c[2].replace(fg, "$1") : pe(c[0]) && (d = c[0].trim()), i.push(d), "";
    });
    for (var a = e, s = 0, l = i.length; pe(a) && s < l; )
      a = a == null ? void 0 : a[i[s++]];
    return pe(a) ? a : t ?? "--";
  }
  return t ?? "--";
}
function F9(e, r, t) {
  var i = e.format(new Date(r)), a = i.split(", "), s = a[0].split("/"), l = a[1].split(":"), u = {
    YYYY: s[2],
    MM: s[0],
    DD: s[1],
    HH: l[0] === "24" ? "00" : l[0],
    mm: l[1],
    ss: l[2]
  };
  return t.replace(/YYYY|MM|DD|HH|mm|ss/g, function(c) {
    return u[c];
  });
}
function er(e, r) {
  var t = +e;
  return Ae(t) ? t.toFixed(r ?? 2) : "".concat(e);
}
function O9(e) {
  var r = +e;
  if (Ae(r)) {
    if (r > 1e9)
      return "".concat(+(r / 1e9).toFixed(3), "B");
    if (r > 1e6)
      return "".concat(+(r / 1e6).toFixed(3), "M");
    if (r > 1e3)
      return "".concat(+(r / 1e3).toFixed(3), "K");
  }
  return "".concat(e);
}
function fr(e, r) {
  var t = "".concat(e);
  if (r.length === 0)
    return t;
  if (t.includes(".")) {
    var i = t.split(".");
    return "".concat(i[0].replace(/(\d)(?=(\d{3})+$)/g, function(a) {
      return "".concat(a).concat(r);
    }), ".").concat(i[1]);
  }
  return t.replace(/(\d)(?=(\d{3})+$)/g, function(a) {
    return "".concat(a).concat(r);
  });
}
var Ys;
function Ta(e) {
  var r, t, i;
  return Math.ceil((i = (t = (r = e.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView) === null || t === void 0 ? void 0 : t.devicePixelRatio) !== null && i !== void 0 ? i : 2);
}
function Ea(e, r, t) {
  return "".concat(r ?? "normal", " ").concat(e ?? 12, "px ").concat(t ?? "Helvetica Neue");
}
function il(e, r, t, i) {
  if (!pe(Ys)) {
    var a = document.createElement("canvas"), s = Ta(a);
    Ys = a.getContext("2d"), Ys.scale(s, s);
  }
  return Ys.font = Ea(r, t, i), Math.round(Ys.measureText(e).width);
}
var Cn;
(function(e) {
  e.OnZoom = "onZoom", e.OnScroll = "onScroll", e.OnVisibleRangeChange = "onVisibleRangeChange", e.OnTooltipIconClick = "onTooltipIconClick", e.OnCrosshairChange = "onCrosshairChange", e.OnCandleBarClick = "onCandleBarClick", e.OnPaneDrag = "onPaneDrag";
})(Cn || (Cn = {}));
var dg = (
  /** @class */
  function() {
    function e() {
      this._callbacks = [];
    }
    return e.prototype.subscribe = function(r) {
      var t, i = (t = this._callbacks.indexOf(r)) !== null && t !== void 0 ? t : -1;
      i < 0 && this._callbacks.push(r);
    }, e.prototype.unsubscribe = function(r) {
      var t;
      if (On(r)) {
        var i = (t = this._callbacks.indexOf(r)) !== null && t !== void 0 ? t : -1;
        i > -1 && this._callbacks.splice(i, 1);
      } else
        this._callbacks = [];
    }, e.prototype.execute = function(r) {
      this._callbacks.forEach(function(t) {
        t(r);
      });
    }, e.prototype.isEmpty = function() {
      return this._callbacks.length === 0;
    }, e;
  }()
), ln;
(function(e) {
  e.Normal = "normal", e.Price = "price", e.Volume = "volume";
})(ln || (ln = {}));
function Cf(e, r, t, i, a) {
  var s = r.result, l = r.figures, u = r.styles, c = Kt(u, "circles", i.circles), h = c.length, d = Kt(u, "bars", i.bars), v = d.length, m = Kt(u, "lines", i.lines), y = m.length, C = 0, b = 0, _ = 0, w;
  l.forEach(function(T) {
    var P;
    switch (T.type) {
      case "circle": {
        var M = c[C % h];
        w = Le(Le({}, M), { color: M.noChangeColor }), C++;
        break;
      }
      case "bar": {
        var F = d[b % v];
        w = Le(Le({}, F), { color: F.noChangeColor }), b++;
        break;
      }
      case "line": {
        w = m[_ % y], _++;
        break;
      }
    }
    if (pe(w)) {
      var O = {
        prev: { kLineData: e[t - 1], indicatorData: s[t - 1] },
        current: { kLineData: e[t], indicatorData: s[t] },
        next: { kLineData: e[t + 1], indicatorData: s[t + 1] }
      }, V = (P = T.styles) === null || P === void 0 ? void 0 : P.call(T, O, r, i);
      a(T, Le(Le({}, w), V));
    }
  });
}
var vg = (
  /** @class */
  function() {
    function e(r) {
      this.result = [], this._precisionFlag = !1;
      var t = r.name, i = r.shortName, a = r.series, s = r.calcParams, l = r.figures, u = r.precision, c = r.shouldOhlc, h = r.shouldFormatBigNumber, d = r.visible, v = r.zLevel, m = r.minValue, y = r.maxValue, C = r.styles, b = r.extendData, _ = r.regenerateFigures, w = r.createTooltipDataSource, T = r.draw;
      this.name = t, this.shortName = i ?? t, this.series = a ?? ln.Normal, this.precision = u ?? 4, this.calcParams = s ?? [], this.figures = l ?? [], this.shouldOhlc = c ?? !1, this.shouldFormatBigNumber = h ?? !1, this.visible = d ?? !0, this.zLevel = v ?? 0, this.minValue = m ?? null, this.maxValue = y ?? null, this.styles = Fo(C ?? {}), this.extendData = b, this.regenerateFigures = _ ?? null, this.createTooltipDataSource = w ?? null, this.draw = T ?? null;
    }
    return e.prototype.setShortName = function(r) {
      return this.shortName !== r ? (this.shortName = r, !0) : !1;
    }, e.prototype.setSeries = function(r) {
      return this.series !== r ? (this.series = r, !0) : !1;
    }, e.prototype.setPrecision = function(r, t) {
      var i = t ?? !1, a = Math.floor(r);
      return a !== this.precision && r >= 0 && (!i || i && !this._precisionFlag) ? (this.precision = a, i || (this._precisionFlag = !0), !0) : !1;
    }, e.prototype.setCalcParams = function(r) {
      var t, i;
      return this.calcParams = r, this.figures = (i = (t = this.regenerateFigures) === null || t === void 0 ? void 0 : t.call(this, r)) !== null && i !== void 0 ? i : this.figures, !0;
    }, e.prototype.setShouldOhlc = function(r) {
      return this.shouldOhlc !== r ? (this.shouldOhlc = r, !0) : !1;
    }, e.prototype.setShouldFormatBigNumber = function(r) {
      return this.shouldFormatBigNumber !== r ? (this.shouldFormatBigNumber = r, !0) : !1;
    }, e.prototype.setVisible = function(r) {
      return this.visible !== r ? (this.visible = r, !0) : !1;
    }, e.prototype.setZLevel = function(r) {
      return this.zLevel !== r ? (this.zLevel = r, !0) : !1;
    }, e.prototype.setStyles = function(r) {
      return nn(this.styles, r), !0;
    }, e.prototype.setExtendData = function(r) {
      return this.extendData !== r ? (this.extendData = r, !0) : !1;
    }, e.prototype.setFigures = function(r) {
      return this.figures !== r ? (this.figures = r, !0) : !1;
    }, e.prototype.setMinValue = function(r) {
      return this.minValue !== r ? (this.minValue = r, !0) : !1;
    }, e.prototype.setMaxValue = function(r) {
      return this.maxValue !== r ? (this.maxValue = r, !0) : !1;
    }, e.prototype.setRegenerateFigures = function(r) {
      return this.regenerateFigures !== r ? (this.regenerateFigures = r, !0) : !1;
    }, e.prototype.setCreateTooltipDataSource = function(r) {
      return this.createTooltipDataSource !== r ? (this.createTooltipDataSource = r, !0) : !1;
    }, e.prototype.setDraw = function(r) {
      return this.draw !== r ? (this.draw = r, !0) : !1;
    }, e.prototype.calcIndicator = function(r) {
      return t1(this, void 0, void 0, function() {
        var t;
        return r1(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this.calc(r, this)];
            case 1:
              return t = i.sent(), this.result = t, [2, !0];
            case 2:
              return i.sent(), [2, !1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.extend = function(r) {
      var t = (
        /** @class */
        function(i) {
          Ge(a, i);
          function a() {
            return i.call(this, r) || this;
          }
          return a.prototype.calc = function(s, l) {
            return r.calc(s, l);
          }, a;
        }(e)
      );
      return t;
    }, e;
  }()
), Eo;
(function(e) {
  e.Normal = "normal", e.WeakMagnet = "weak_magnet", e.StrongMagnet = "strong_magnet";
})(Eo || (Eo = {}));
function pg() {
  return [
    "mouseClickEvent",
    "mouseDoubleClickEvent",
    "mouseRightClickEvent",
    "tapEvent",
    "doubleTapEvent",
    "mouseDownEvent",
    "touchStartEvent",
    "mouseMoveEvent",
    "touchMoveEvent"
  ];
}
var qh = 1, Xs = -1, gg = "overlay_", So = "overlay_figure_", yg = Number.MAX_SAFE_INTEGER, R9 = (
  /** @class */
  function() {
    function e(r) {
      this.currentStep = qh, this.points = [], this._prevPressedPoint = null, this._prevPressedPoints = [];
      var t = r.mode, i = r.modeSensitivity, a = r.extendData, s = r.styles, l = r.name, u = r.totalStep, c = r.lock, h = r.visible, d = r.zLevel, v = r.needDefaultPointFigure, m = r.needDefaultXAxisFigure, y = r.needDefaultYAxisFigure, C = r.createPointFigures, b = r.createXAxisFigures, _ = r.createYAxisFigures, w = r.performEventPressedMove, T = r.performEventMoveForDrawing, P = r.onDrawStart, M = r.onDrawing, F = r.onDrawEnd, O = r.onClick, V = r.onDoubleClick, W = r.onRightClick, N = r.onPressedMoveStart, Y = r.onPressedMoving, K = r.onPressedMoveEnd, G = r.onMouseEnter, q = r.onMouseLeave, he = r.onRemoved, ge = r.onSelected, ve = r.onDeselected;
      this.name = l, this.totalStep = !Ae(u) || u < 2 ? 1 : u, this.lock = c ?? !1, this.visible = h ?? !0, this.zLevel = d ?? 0, this.needDefaultPointFigure = v ?? !1, this.needDefaultXAxisFigure = m ?? !1, this.needDefaultYAxisFigure = y ?? !1, this.mode = t ?? Eo.Normal, this.modeSensitivity = i ?? 8, this.extendData = a, this.styles = Fo(s ?? {}), this.createPointFigures = C ?? null, this.createXAxisFigures = b ?? null, this.createYAxisFigures = _ ?? null, this.performEventPressedMove = w ?? null, this.performEventMoveForDrawing = T ?? null, this.onDrawStart = P ?? null, this.onDrawing = M ?? null, this.onDrawEnd = F ?? null, this.onClick = O ?? null, this.onDoubleClick = V ?? null, this.onRightClick = W ?? null, this.onPressedMoveStart = N ?? null, this.onPressedMoving = Y ?? null, this.onPressedMoveEnd = K ?? null, this.onMouseEnter = G ?? null, this.onMouseLeave = q ?? null, this.onRemoved = he ?? null, this.onSelected = ge ?? null, this.onDeselected = ve ?? null;
    }
    return e.prototype.setId = function(r) {
      return Ne(this.id) ? !1 : (this.id = r, !0);
    }, e.prototype.setGroupId = function(r) {
      return Ne(this.groupId) ? !1 : (this.groupId = r, !0);
    }, e.prototype.setPaneId = function(r) {
      this.paneId = r;
    }, e.prototype.setExtendData = function(r) {
      return r !== this.extendData ? (this.extendData = r, !0) : !1;
    }, e.prototype.setStyles = function(r) {
      return nn(this.styles, r), !0;
    }, e.prototype.setPoints = function(r) {
      if (r.length > 0) {
        var t = void 0;
        if (this.points = E9([], wr(r), !1), r.length >= this.totalStep - 1 ? (this.currentStep = Xs, t = this.totalStep - 1) : (this.currentStep = r.length + 1, t = r.length), this.performEventMoveForDrawing !== null)
          for (var i = 0; i < t; i++)
            this.performEventMoveForDrawing({
              currentStep: i + 2,
              mode: this.mode,
              points: this.points,
              performPointIndex: i,
              performPoint: this.points[i]
            });
        return this.currentStep === Xs && this.performEventPressedMove !== null && this.performEventPressedMove({
          currentStep: this.currentStep,
          mode: this.mode,
          points: this.points,
          performPointIndex: this.points.length - 1,
          performPoint: this.points[this.points.length - 1]
        }), !0;
      }
      return !1;
    }, e.prototype.setLock = function(r) {
      return this.lock !== r ? (this.lock = r, !0) : !1;
    }, e.prototype.setVisible = function(r) {
      return this.visible !== r ? (this.visible = r, !0) : !1;
    }, e.prototype.setZLevel = function(r) {
      return this.zLevel !== r ? (this.zLevel = r, !0) : !1;
    }, e.prototype.setMode = function(r) {
      return this.mode !== r ? (this.mode = r, !0) : !1;
    }, e.prototype.setModeSensitivity = function(r) {
      return this.modeSensitivity !== r ? (this.modeSensitivity = r, !0) : !1;
    }, e.prototype.setOnDrawStartCallback = function(r) {
      return this.onDrawStart !== r ? (this.onDrawStart = r, !0) : !1;
    }, e.prototype.setOnDrawingCallback = function(r) {
      return this.onDrawing !== r ? (this.onDrawing = r, !0) : !1;
    }, e.prototype.setOnDrawEndCallback = function(r) {
      return this.onDrawEnd !== r ? (this.onDrawEnd = r, !0) : !1;
    }, e.prototype.setOnClickCallback = function(r) {
      return this.onClick !== r ? (this.onClick = r, !0) : !1;
    }, e.prototype.setOnDoubleClickCallback = function(r) {
      return this.onDoubleClick !== r ? (this.onDoubleClick = r, !0) : !1;
    }, e.prototype.setOnRightClickCallback = function(r) {
      return this.onRightClick !== r ? (this.onRightClick = r, !0) : !1;
    }, e.prototype.setOnPressedMoveStartCallback = function(r) {
      return this.onPressedMoveStart !== r ? (this.onPressedMoveStart = r, !0) : !1;
    }, e.prototype.setOnPressedMovingCallback = function(r) {
      return this.onPressedMoving !== r ? (this.onPressedMoving = r, !0) : !1;
    }, e.prototype.setOnPressedMoveEndCallback = function(r) {
      return this.onPressedMoveEnd !== r ? (this.onPressedMoveEnd = r, !0) : !1;
    }, e.prototype.setOnMouseEnterCallback = function(r) {
      return this.onMouseEnter !== r ? (this.onMouseEnter = r, !0) : !1;
    }, e.prototype.setOnMouseLeaveCallback = function(r) {
      return this.onMouseLeave !== r ? (this.onMouseLeave = r, !0) : !1;
    }, e.prototype.setOnRemovedCallback = function(r) {
      return this.onRemoved !== r ? (this.onRemoved = r, !0) : !1;
    }, e.prototype.setOnSelectedCallback = function(r) {
      return this.onSelected !== r ? (this.onSelected = r, !0) : !1;
    }, e.prototype.setOnDeselectedCallback = function(r) {
      return this.onDeselected !== r ? (this.onDeselected = r, !0) : !1;
    }, e.prototype.nextStep = function() {
      this.currentStep === this.totalStep - 1 ? this.currentStep = Xs : this.currentStep++;
    }, e.prototype.forceComplete = function() {
      this.currentStep = Xs;
    }, e.prototype.isDrawing = function() {
      return this.currentStep !== Xs;
    }, e.prototype.isStart = function() {
      return this.currentStep === qh;
    }, e.prototype.eventMoveForDrawing = function(r) {
      var t, i = this.currentStep - 1, a = {};
      Ae(r.timestamp) && (a.timestamp = r.timestamp), Ae(r.dataIndex) && (a.dataIndex = r.dataIndex), Ae(r.value) && (a.value = r.value), this.points[i] = a, (t = this.performEventMoveForDrawing) === null || t === void 0 || t.call(this, {
        currentStep: this.currentStep,
        mode: this.mode,
        points: this.points,
        performPointIndex: i,
        performPoint: a
      });
    }, e.prototype.eventPressedPointMove = function(r, t) {
      var i;
      Ae(r.dataIndex) && (this.points[t].dataIndex = r.dataIndex, this.points[t].timestamp = r.timestamp), Ae(r.value) && (this.points[t].value = r.value), (i = this.performEventPressedMove) === null || i === void 0 || i.call(this, {
        currentStep: this.currentStep,
        points: this.points,
        mode: this.mode,
        performPointIndex: t,
        performPoint: this.points[t]
      });
    }, e.prototype.startPressedMove = function(r) {
      this._prevPressedPoint = Le({}, r), this._prevPressedPoints = Fo(this.points);
    }, e.prototype.eventPressedOtherMove = function(r, t, i) {
      if (this._prevPressedPoint !== null) {
        var a;
        Ae(r.dataIndex) && Ae(this._prevPressedPoint.dataIndex) && (a = r.dataIndex - this._prevPressedPoint.dataIndex);
        var s;
        if (Ae(r.value) && Ae(this._prevPressedPoint.value) && (s = r.value - this._prevPressedPoint.value), i !== void 0) {
          var l = this._prevPressedPoints.find(function(u) {
            var c, h = Le({}, u);
            Ae(s) && Ae(u.value) && (h.value = u.value + s), Ae(u.dataIndex) && Ae(u.timestamp) && (u.dataIndex = t.timestampToDataIndex(u.timestamp)), Ae(a) && Ae(u.dataIndex) && (h.dataIndex = u.dataIndex + a, h.timestamp = (c = t.dataIndexToTimestamp(h.dataIndex)) !== null && c !== void 0 ? c : void 0);
            var d = i.length - 1;
            return h.timestamp === void 0 || h.timestamp !== void 0 && h.timestamp > i[d].timestamp;
          });
          if (l !== void 0)
            return;
        }
        this.points = this._prevPressedPoints.map(function(u) {
          var c, h = Le({}, u);
          return Ae(s) && Ae(u.value) && (h.value = u.value + s), Ae(u.dataIndex) && Ae(u.timestamp) && (u.dataIndex = t.timestampToDataIndex(u.timestamp)), Ae(a) && Ae(u.dataIndex) && (h.dataIndex = u.dataIndex + a, h.timestamp = (c = t.dataIndexToTimestamp(h.dataIndex)) !== null && c !== void 0 ? c : void 0), h;
        });
      }
    }, e.extend = function(r) {
      var t = (
        /** @class */
        function(i) {
          Ge(a, i);
          function a() {
            return i.call(this, r) || this;
          }
          return a;
        }(e)
      );
      return t;
    }, e;
  }()
), Jt;
(function(e) {
  e[e.Tooltip = 0] = "Tooltip", e[e.Crosshair = 1] = "Crosshair", e[e.XAxis = 2] = "XAxis";
})(Jt || (Jt = {}));
function mg() {
  return {
    formatDate: F9,
    formatBigNumber: O9
  };
}
var _g = "en-US", Uc = 1, Jh = (/* @__PURE__ */ new Date()).getTime();
function B9(e) {
  var r = (/* @__PURE__ */ new Date()).getTime();
  return r === Jh ? ++Uc : Uc = 1, Jh = r, "".concat(e ?? "").concat(r, "_").concat(Uc);
}
function ri(e, r) {
  var t, i = document.createElement(e), a = r ?? {};
  for (var s in a)
    i.style[s] = (t = a[s]) !== null && t !== void 0 ? t : "";
  return i;
}
function rf(e, r, t) {
  var i = 0, a = 0;
  for (a = e.length - 1; i !== a; ) {
    var s = Math.floor((a + i) / 2), l = a - i, u = e[s][r];
    if (t === e[i][r])
      return i;
    if (t === e[a][r])
      return a;
    if (t === u)
      return s;
    if (t > u ? i = s : a = s, l <= 2)
      break;
  }
  return i;
}
function xg(e) {
  var r = Math.floor(Ks(e)), t = La(r), i = e / t, a = 0;
  return i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 3.5 ? a = 3 : i < 4.5 ? a = 4 : i < 5.5 ? a = 5 : i < 6.5 ? a = 6 : a = 8, e = a * t, r >= -20 ? +e.toFixed(r < 0 ? -r : 0) : e;
}
function e2(e, r) {
  r == null && (r = 10), r = Math.min(Math.max(0, r), 20);
  var t = (+e).toFixed(r);
  return +t;
}
function bg(e) {
  var r = e.toString(), t = r.indexOf("e");
  if (t > 0) {
    var i = +r.slice(t + 1);
    return i < 0 ? -i : 0;
  } else {
    var a = r.indexOf(".");
    return a < 0 ? 0 : r.length - 1 - a;
  }
}
function N9(e, r, t) {
  var i = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  return e.forEach(function(a) {
    var s, l;
    i[0] = Math.max((s = a[r]) !== null && s !== void 0 ? s : a, i[0]), i[1] = Math.min((l = a[t]) !== null && l !== void 0 ? l : a, i[1]);
  }), i;
}
function Ks(e) {
  return Math.log(e) / Math.log(10);
}
function La(e) {
  return Math.pow(10, e);
}
function t2() {
  return { from: 0, to: 0, realFrom: 0, realTo: 0 };
}
var r2 = {
  MIN: 1,
  MAX: 50
}, Cg = 6, Sg = 50, wg = (
  /** @class */
  function() {
    function e(r) {
      this._dateTimeFormat = this._buildDateTimeFormat(), this._zoomEnabled = !0, this._scrollEnabled = !0, this._loading = !0, this._loadMoreCallback = null, this._more = !0, this._totalBarSpace = 0, this._barSpace = Cg, this._offsetRightDistance = Sg, this._startLastBarRightSideDiffBarCount = 0, this._scrollLimitRole = 0, this._minVisibleBarCount = { left: 2, right: 2 }, this._maxOffsetDistance = { left: 50, right: 50 }, this._visibleRange = t2(), this._chartStore = r, this._gapBarSpace = this._calcGapBarSpace(), this._lastBarRightSideDiffBarCount = this._offsetRightDistance / this._barSpace;
    }
    return e.prototype._calcGapBarSpace = function() {
      var r = Math.floor(this._barSpace * 0.82), t = Math.floor(this._barSpace), i = Math.min(r, t - 1);
      return Math.max(1, i);
    }, e.prototype.adjustVisibleRange = function() {
      var r, t = this._chartStore.getDataList(), i = t.length, a = this._totalBarSpace / this._barSpace, s, l;
      this._scrollLimitRole === 1 ? (s = (this._totalBarSpace - this._maxOffsetDistance.right) / this._barSpace, l = (this._totalBarSpace - this._maxOffsetDistance.left) / this._barSpace) : (s = this._minVisibleBarCount.left, l = this._minVisibleBarCount.right), s = Math.max(0, s), l = Math.max(0, l);
      var u = a - Math.min(s, i);
      this._lastBarRightSideDiffBarCount > u && (this._lastBarRightSideDiffBarCount = u);
      var c = -i + Math.min(l, i);
      this._lastBarRightSideDiffBarCount < c && (this._lastBarRightSideDiffBarCount = c);
      var h = Math.round(this._lastBarRightSideDiffBarCount + i + 0.5);
      h > i && (h = i);
      var d = Math.round(h - a) - 1;
      d < 0 && (d = 0);
      var v = this._lastBarRightSideDiffBarCount > 0 ? Math.round(i + this._lastBarRightSideDiffBarCount - a) - 1 : d;
      if (this._visibleRange = { from: d, to: h, realFrom: v, realTo: h }, this._chartStore.getActionStore().execute(Cn.OnVisibleRangeChange, this._visibleRange), this._chartStore.adjustVisibleDataList(), d === 0 && this._more && !this._loading && this._loadMoreCallback !== null) {
        this._loading = !0;
        var m = t[0];
        this._loadMoreCallback((r = m == null ? void 0 : m.timestamp) !== null && r !== void 0 ? r : null);
      }
    }, e.prototype.setMore = function(r) {
      return this._more = r, this;
    }, e.prototype.setLoading = function(r) {
      return this._loading = r, this;
    }, e.prototype.getDateTimeFormat = function() {
      return this._dateTimeFormat;
    }, e.prototype._buildDateTimeFormat = function(r) {
      var t = {
        hour12: !1,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      Ne(r) && (t.timeZone = r);
      var i = null;
      try {
        i = new Intl.DateTimeFormat("en", t);
      } catch {
      }
      return i;
    }, e.prototype.setTimezone = function(r) {
      var t = this._buildDateTimeFormat(r);
      t !== null && (this._dateTimeFormat = t);
    }, e.prototype.getTimezone = function() {
      return this._dateTimeFormat.resolvedOptions().timeZone;
    }, e.prototype.getBarSpace = function() {
      return {
        bar: this._barSpace,
        halfBar: this._barSpace / 2,
        gapBar: this._gapBarSpace,
        halfGapBar: this._gapBarSpace / 2
      };
    }, e.prototype.setBarSpace = function(r, t) {
      r < r2.MIN || r > r2.MAX || this._barSpace === r || (this._barSpace = r, this._gapBarSpace = this._calcGapBarSpace(), t == null || t(), this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0), this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0));
    }, e.prototype.setTotalBarSpace = function(r) {
      return this._totalBarSpace !== r && (this._totalBarSpace = r, this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0)), this;
    }, e.prototype.setOffsetRightDistance = function(r, t) {
      return this._offsetRightDistance = this._scrollLimitRole === 1 ? Math.min(this._maxOffsetDistance.right, r) : r, this._lastBarRightSideDiffBarCount = this._offsetRightDistance / this._barSpace, (t ?? !1) && (this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0), this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0)), this;
    }, e.prototype.resetOffsetRightDistance = function() {
      this.setOffsetRightDistance(this._offsetRightDistance);
    }, e.prototype.getInitialOffsetRightDistance = function() {
      return this._offsetRightDistance;
    }, e.prototype.getOffsetRightDistance = function() {
      return Math.max(0, this._lastBarRightSideDiffBarCount * this._barSpace);
    }, e.prototype.getLastBarRightSideDiffBarCount = function() {
      return this._lastBarRightSideDiffBarCount;
    }, e.prototype.setLastBarRightSideDiffBarCount = function(r) {
      return this._lastBarRightSideDiffBarCount = r, this;
    }, e.prototype.setMaxOffsetLeftDistance = function(r) {
      return this._scrollLimitRole = 1, this._maxOffsetDistance.left = r, this;
    }, e.prototype.setMaxOffsetRightDistance = function(r) {
      return this._scrollLimitRole = 1, this._maxOffsetDistance.right = r, this;
    }, e.prototype.setLeftMinVisibleBarCount = function(r) {
      return this._scrollLimitRole = 0, this._minVisibleBarCount.left = r, this;
    }, e.prototype.setRightMinVisibleBarCount = function(r) {
      return this._scrollLimitRole = 0, this._minVisibleBarCount.right = r, this;
    }, e.prototype.getVisibleRange = function() {
      return this._visibleRange;
    }, e.prototype.startScroll = function() {
      this._startLastBarRightSideDiffBarCount = this._lastBarRightSideDiffBarCount;
    }, e.prototype.scroll = function(r) {
      if (this._scrollEnabled) {
        var t = r / this._barSpace;
        this._chartStore.getActionStore().execute(Cn.OnScroll), this._lastBarRightSideDiffBarCount = this._startLastBarRightSideDiffBarCount - t, this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0), this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0);
      }
    }, e.prototype.getDataByDataIndex = function(r) {
      var t;
      return (t = this._chartStore.getDataList()[r]) !== null && t !== void 0 ? t : null;
    }, e.prototype.coordinateToFloatIndex = function(r) {
      var t = this._chartStore.getDataList().length, i = (this._totalBarSpace - r) / this._barSpace, a = t + this._lastBarRightSideDiffBarCount - i;
      return Math.round(a * 1e6) / 1e6;
    }, e.prototype.dataIndexToTimestamp = function(r) {
      var t, i = this.getDataByDataIndex(r);
      return (t = i == null ? void 0 : i.timestamp) !== null && t !== void 0 ? t : null;
    }, e.prototype.timestampToDataIndex = function(r) {
      var t = this._chartStore.getDataList();
      return t.length === 0 ? 0 : rf(t, "timestamp", r);
    }, e.prototype.dataIndexToCoordinate = function(r) {
      var t = this._chartStore.getDataList().length, i = t + this._lastBarRightSideDiffBarCount - r;
      return Math.floor(this._totalBarSpace - (i - 0.5) * this._barSpace) - 0.5;
    }, e.prototype.coordinateToDataIndex = function(r) {
      return Math.ceil(this.coordinateToFloatIndex(r)) - 1;
    }, e.prototype.zoom = function(r, t) {
      var i = this, a;
      if (this._zoomEnabled) {
        if (!Ae(t == null ? void 0 : t.x)) {
          var s = this._chartStore.getTooltipStore().getCrosshair();
          t = { x: (a = s == null ? void 0 : s.x) !== null && a !== void 0 ? a : this._totalBarSpace / 2 };
        }
        this._chartStore.getActionStore().execute(Cn.OnZoom);
        var l = this.coordinateToFloatIndex(t == null ? void 0 : t.x), u = this._barSpace + r * (this._barSpace / 10);
        this.setBarSpace(u, function() {
          i._lastBarRightSideDiffBarCount += l - i.coordinateToFloatIndex(t == null ? void 0 : t.x);
        });
      }
    }, e.prototype.setZoomEnabled = function(r) {
      return this._zoomEnabled = r, this;
    }, e.prototype.getZoomEnabled = function() {
      return this._zoomEnabled;
    }, e.prototype.setScrollEnabled = function(r) {
      return this._scrollEnabled = r, this;
    }, e.prototype.getScrollEnabled = function() {
      return this._scrollEnabled;
    }, e.prototype.setLoadMoreCallback = function(r) {
      return this._loadMoreCallback = r, this;
    }, e.prototype.clear = function() {
      this._more = !0, this._loading = !0, this._visibleRange = t2();
    }, e;
  }()
), kg = {
  name: "AVP",
  shortName: "AVP",
  series: ln.Price,
  precision: 2,
  figures: [
    { key: "avp", title: "AVP: ", type: "line" }
  ],
  calc: function(e) {
    var r = 0, t = 0;
    return e.map(function(i) {
      var a, s, l = {}, u = (a = i == null ? void 0 : i.turnover) !== null && a !== void 0 ? a : 0, c = (s = i == null ? void 0 : i.volume) !== null && s !== void 0 ? s : 0;
      return r += u, t += c, t !== 0 && (l.avp = r / t), l;
    });
  }
}, Lg = {
  name: "AO",
  shortName: "AO",
  calcParams: [5, 34],
  figures: [{
    key: "ao",
    title: "AO: ",
    type: "bar",
    baseValue: 0,
    styles: function(e, r, t) {
      var i, a, s, l, u = e.prev, c = e.current, h = (a = (i = u.indicatorData) === null || i === void 0 ? void 0 : i.ao) !== null && a !== void 0 ? a : Number.MIN_SAFE_INTEGER, d = (l = (s = c.indicatorData) === null || s === void 0 ? void 0 : s.ao) !== null && l !== void 0 ? l : Number.MIN_SAFE_INTEGER, v;
      d > h ? v = Kt(r.styles, "bars[0].upColor", t.bars[0].upColor) : v = Kt(r.styles, "bars[0].downColor", t.bars[0].downColor);
      var m = d > h ? ut.Stroke : ut.Fill;
      return { color: v, style: m, borderColor: v };
    }
  }],
  calc: function(e, r) {
    var t = r.calcParams, i = Math.max(t[0], t[1]), a = 0, s = 0, l = 0, u = 0;
    return e.map(function(c, h) {
      var d = {}, v = (c.low + c.high) / 2;
      if (a += v, s += v, h >= t[0] - 1) {
        l = a / t[0];
        var m = e[h - (t[0] - 1)];
        a -= (m.low + m.high) / 2;
      }
      if (h >= t[1] - 1) {
        u = s / t[1];
        var m = e[h - (t[1] - 1)];
        s -= (m.low + m.high) / 2;
      }
      return h >= i - 1 && (d.ao = l - u), d;
    });
  }
}, Pg = {
  name: "BIAS",
  shortName: "BIAS",
  calcParams: [6, 12, 24],
  figures: [
    { key: "bias1", title: "BIAS6: ", type: "line" },
    { key: "bias2", title: "BIAS12: ", type: "line" },
    { key: "bias3", title: "BIAS24: ", type: "line" }
  ],
  regenerateFigures: function(e) {
    return e.map(function(r, t) {
      return { key: "bias".concat(t + 1), title: "BIAS".concat(r, ": "), type: "line" };
    });
  },
  calc: function(e, r) {
    var t = r.calcParams, i = r.figures, a = [];
    return e.map(function(s, l) {
      var u = {}, c = s.close;
      return t.forEach(function(h, d) {
        var v;
        if (a[d] = ((v = a[d]) !== null && v !== void 0 ? v : 0) + c, l >= h - 1) {
          var m = a[d] / t[d];
          u[i[d].key] = (c - m) / m * 100, a[d] -= e[l - (h - 1)].close;
        }
      }), u;
    });
  }
};
function Ig(e, r) {
  var t = e.length, i = 0;
  return e.forEach(function(a) {
    var s = a.close - r;
    i += s * s;
  }), i = Math.abs(i), Math.sqrt(i / t);
}
var Ag = {
  name: "BOLL",
  shortName: "BOLL",
  series: ln.Price,
  calcParams: [20, 2],
  precision: 2,
  shouldOhlc: !0,
  figures: [
    { key: "up", title: "UP: ", type: "line" },
    { key: "mid", title: "MID: ", type: "line" },
    { key: "dn", title: "DN: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = t[0] - 1, a = 0;
    return e.map(function(s, l) {
      var u = s.close, c = {};
      if (a += u, l >= i) {
        c.mid = a / t[0];
        var h = Ig(e.slice(l - i, l + 1), c.mid);
        c.up = c.mid + t[1] * h, c.dn = c.mid - t[1] * h, a -= e[l - i].close;
      }
      return c;
    });
  }
}, $g = {
  name: "BRAR",
  shortName: "BRAR",
  calcParams: [26],
  figures: [
    { key: "br", title: "BR: ", type: "line" },
    { key: "ar", title: "AR: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = 0, s = 0, l = 0;
    return e.map(function(u, c) {
      var h, d, v = {}, m = u.high, y = u.low, C = u.open, b = ((h = e[c - 1]) !== null && h !== void 0 ? h : u).close;
      if (s += m - C, l += C - y, i += m - b, a += b - y, c >= t[0] - 1) {
        l !== 0 ? v.ar = s / l * 100 : v.ar = 0, a !== 0 ? v.br = i / a * 100 : v.br = 0;
        var _ = e[c - (t[0] - 1)], w = _.high, T = _.low, P = _.open, M = ((d = e[c - t[0]]) !== null && d !== void 0 ? d : e[c - (t[0] - 1)]).close;
        i -= w - M, a -= M - T, s -= w - P, l -= P - T;
      }
      return v;
    });
  }
}, Tg = {
  name: "BBI",
  shortName: "BBI",
  series: ln.Price,
  precision: 2,
  calcParams: [3, 6, 12, 24],
  shouldOhlc: !0,
  figures: [
    { key: "bbi", title: "BBI: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = Math.max.apply(Math, E9([], wr(t), !1)), a = [], s = [];
    return e.map(function(l, u) {
      var c = {}, h = l.close;
      if (t.forEach(function(v, m) {
        var y;
        a[m] = ((y = a[m]) !== null && y !== void 0 ? y : 0) + h, u >= v - 1 && (s[m] = a[m] / v, a[m] -= e[u - (v - 1)].close);
      }), u >= i - 1) {
        var d = 0;
        s.forEach(function(v) {
          d += v;
        }), c.bbi = d / 4;
      }
      return c;
    });
  }
}, Mg = {
  name: "CCI",
  shortName: "CCI",
  calcParams: [20],
  figures: [
    { key: "cci", title: "CCI: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = t[0] - 1, a = 0, s = [];
    return e.map(function(l, u) {
      var c = {}, h = (l.high + l.low + l.close) / 3;
      if (a += h, s.push(h), u >= i) {
        var d = a / t[0], v = s.slice(u - i, u + 1), m = 0;
        v.forEach(function(b) {
          m += Math.abs(b - d);
        });
        var y = m / t[0];
        c.cci = y !== 0 ? (h - d) / y / 0.015 : 0;
        var C = (e[u - i].high + e[u - i].low + e[u - i].close) / 3;
        a -= C;
      }
      return c;
    });
  }
}, Eg = {
  name: "CR",
  shortName: "CR",
  calcParams: [26, 10, 20, 40, 60],
  figures: [
    { key: "cr", title: "CR: ", type: "line" },
    { key: "ma1", title: "MA1: ", type: "line" },
    { key: "ma2", title: "MA2: ", type: "line" },
    { key: "ma3", title: "MA3: ", type: "line" },
    { key: "ma4", title: "MA4: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = Math.ceil(t[1] / 2.5 + 1), a = Math.ceil(t[2] / 2.5 + 1), s = Math.ceil(t[3] / 2.5 + 1), l = Math.ceil(t[4] / 2.5 + 1), u = 0, c = [], h = 0, d = [], v = 0, m = [], y = 0, C = [], b = [];
    return e.forEach(function(_, w) {
      var T, P, M, F, O, V = {}, W = (T = e[w - 1]) !== null && T !== void 0 ? T : _, N = (W.high + W.close + W.low + W.open) / 4, Y = Math.max(0, _.high - N), K = Math.max(0, N - _.low);
      w >= t[0] - 1 && (K !== 0 ? V.cr = Y / K * 100 : V.cr = 0, u += V.cr, h += V.cr, v += V.cr, y += V.cr, w >= t[0] + t[1] - 2 && (c.push(u / t[1]), w >= t[0] + t[1] + i - 3 && (V.ma1 = c[c.length - 1 - i]), u -= (P = b[w - (t[1] - 1)].cr) !== null && P !== void 0 ? P : 0), w >= t[0] + t[2] - 2 && (d.push(h / t[2]), w >= t[0] + t[2] + a - 3 && (V.ma2 = d[d.length - 1 - a]), h -= (M = b[w - (t[2] - 1)].cr) !== null && M !== void 0 ? M : 0), w >= t[0] + t[3] - 2 && (m.push(v / t[3]), w >= t[0] + t[3] + s - 3 && (V.ma3 = m[m.length - 1 - s]), v -= (F = b[w - (t[3] - 1)].cr) !== null && F !== void 0 ? F : 0), w >= t[0] + t[4] - 2 && (C.push(y / t[4]), w >= t[0] + t[4] + l - 3 && (V.ma4 = C[C.length - 1 - l]), y -= (O = b[w - (t[4] - 1)].cr) !== null && O !== void 0 ? O : 0)), b.push(V);
    }), b;
  }
}, Dg = {
  name: "DMA",
  shortName: "DMA",
  calcParams: [10, 50, 10],
  figures: [
    { key: "dma", title: "DMA: ", type: "line" },
    { key: "ama", title: "AMA: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = Math.max(t[0], t[1]), a = 0, s = 0, l = 0, u = [];
    return e.forEach(function(c, h) {
      var d, v = {}, m = c.close;
      a += m, s += m;
      var y = 0, C = 0;
      if (h >= t[0] - 1 && (y = a / t[0], a -= e[h - (t[0] - 1)].close), h >= t[1] - 1 && (C = s / t[1], s -= e[h - (t[1] - 1)].close), h >= i - 1) {
        var b = y - C;
        v.dma = b, l += b, h >= i + t[2] - 2 && (v.ama = l / t[2], l -= (d = u[h - (t[2] - 1)].dma) !== null && d !== void 0 ? d : 0);
      }
      u.push(v);
    }), u;
  }
}, Fg = {
  name: "DMI",
  shortName: "DMI",
  calcParams: [14, 6],
  figures: [
    { key: "pdi", title: "PDI: ", type: "line" },
    { key: "mdi", title: "MDI: ", type: "line" },
    { key: "adx", title: "ADX: ", type: "line" },
    { key: "adxr", title: "ADXR: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = 0, s = 0, l = 0, u = 0, c = 0, h = 0, d = 0, v = [];
    return e.forEach(function(m, y) {
      var C, b, _ = {}, w = (C = e[y - 1]) !== null && C !== void 0 ? C : m, T = w.close, P = m.high, M = m.low, F = P - M, O = Math.abs(P - T), V = Math.abs(T - M), W = P - w.high, N = w.low - M, Y = Math.max(Math.max(F, O), V), K = W > 0 && W > N ? W : 0, G = N > 0 && N > W ? N : 0;
      if (i += Y, a += K, s += G, y >= t[0] - 1) {
        y > t[0] - 1 ? (l = l - l / t[0] + Y, u = u - u / t[0] + K, c = c - c / t[0] + G) : (l = i, u = a, c = s);
        var q = 0, he = 0;
        l !== 0 && (q = u * 100 / l, he = c * 100 / l), _.pdi = q, _.mdi = he;
        var ge = 0;
        he + q !== 0 && (ge = Math.abs(he - q) / (he + q) * 100), h += ge, y >= t[0] * 2 - 2 && (y > t[0] * 2 - 2 ? d = (d * (t[0] - 1) + ge) / t[0] : d = h / t[0], _.adx = d, y >= t[0] * 2 + t[1] - 3 && (_.adxr = (((b = v[y - (t[1] - 1)].adx) !== null && b !== void 0 ? b : 0) + d) / 2));
      }
      v.push(_);
    }), v;
  }
}, Og = {
  name: "EMV",
  shortName: "EMV",
  calcParams: [14, 9],
  figures: [
    { key: "emv", title: "EMV: ", type: "line" },
    { key: "maEmv", title: "MAEMV: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = [];
    return e.map(function(s, l) {
      var u, c = {};
      if (l > 0) {
        var h = e[l - 1], d = s.high, v = s.low, m = (u = s.volume) !== null && u !== void 0 ? u : 0, y = (d + v) / 2 - (h.high + h.low) / 2;
        if (m === 0 || d - v === 0)
          c.emv = 0;
        else {
          var C = m / 1e8 / (d - v);
          c.emv = y / C;
        }
        i += c.emv, a.push(c.emv), l >= t[0] && (c.maEmv = i / t[0], i -= a[l - t[0]]);
      }
      return c;
    });
  }
}, Rg = {
  name: "EMA",
  shortName: "EMA",
  series: ln.Price,
  calcParams: [6, 12, 20],
  precision: 2,
  shouldOhlc: !0,
  figures: [
    { key: "ema1", title: "EMA6: ", type: "line" },
    { key: "ema2", title: "EMA12: ", type: "line" },
    { key: "ema3", title: "EMA20: ", type: "line" }
  ],
  regenerateFigures: function(e) {
    return e.map(function(r, t) {
      return { key: "ema".concat(t + 1), title: "EMA".concat(r, ": "), type: "line" };
    });
  },
  calc: function(e, r) {
    var t = r.calcParams, i = r.figures, a = 0, s = [];
    return e.map(function(l, u) {
      var c = {}, h = l.close;
      return a += h, t.forEach(function(d, v) {
        u >= d - 1 && (u > d - 1 ? s[v] = (2 * h + (d - 1) * s[v]) / (d + 1) : s[v] = a / d, c[i[v].key] = s[v]);
      }), c;
    });
  }
}, Bg = {
  name: "MTM",
  shortName: "MTM",
  calcParams: [12, 6],
  figures: [
    { key: "mtm", title: "MTM: ", type: "line" },
    { key: "maMtm", title: "MAMTM: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = [];
    return e.forEach(function(s, l) {
      var u, c = {};
      if (l >= t[0]) {
        var h = s.close, d = e[l - t[0]].close;
        c.mtm = h - d, i += c.mtm, l >= t[0] + t[1] - 1 && (c.maMtm = i / t[1], i -= (u = a[l - (t[1] - 1)].mtm) !== null && u !== void 0 ? u : 0);
      }
      a.push(c);
    }), a;
  }
}, Ng = {
  name: "MA",
  shortName: "MA",
  series: ln.Price,
  calcParams: [5, 10, 30, 60],
  precision: 2,
  shouldOhlc: !0,
  figures: [
    { key: "ma5", title: "MA5: ", type: "line" },
    { key: "ma10", title: "MA10: ", type: "line" },
    { key: "ma30", title: "MA30: ", type: "line" },
    { key: "ma60", title: "MA60: ", type: "line" }
  ],
  regenerateFigures: function(e) {
    return e.map(function(r, t) {
      return { key: "ma".concat(t + 1), title: "MA".concat(r, ": "), type: "line" };
    });
  },
  calc: function(e, r) {
    var t = r.calcParams, i = r.figures, a = [];
    return e.map(function(s, l) {
      var u = {}, c = s.close;
      return t.forEach(function(h, d) {
        var v;
        a[d] = ((v = a[d]) !== null && v !== void 0 ? v : 0) + c, l >= h - 1 && (u[i[d].key] = a[d] / h, a[d] -= e[l - (h - 1)].close);
      }), u;
    });
  }
}, zg = {
  name: "MACD",
  shortName: "MACD",
  calcParams: [12, 26, 9],
  figures: [
    { key: "dif", title: "DIF: ", type: "line" },
    { key: "dea", title: "DEA: ", type: "line" },
    {
      key: "macd",
      title: "MACD: ",
      type: "bar",
      baseValue: 0,
      styles: function(e, r, t) {
        var i, a, s, l, u = e.prev, c = e.current, h = (a = (i = u.indicatorData) === null || i === void 0 ? void 0 : i.macd) !== null && a !== void 0 ? a : Number.MIN_SAFE_INTEGER, d = (l = (s = c.indicatorData) === null || s === void 0 ? void 0 : s.macd) !== null && l !== void 0 ? l : Number.MIN_SAFE_INTEGER, v;
        d > 0 ? v = Kt(r.styles, "bars[0].upColor", t.bars[0].upColor) : d < 0 ? v = Kt(r.styles, "bars[0].downColor", t.bars[0].downColor) : v = Kt(r.styles, "bars[0].noChangeColor", t.bars[0].noChangeColor);
        var m = h < d ? ut.Stroke : ut.Fill;
        return { style: m, color: v, borderColor: v };
      }
    }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a, s, l = 0, u = 0, c = 0, h = Math.max(t[0], t[1]);
    return e.map(function(d, v) {
      var m = {}, y = d.close;
      return i += y, v >= t[0] - 1 && (v > t[0] - 1 ? a = (2 * y + (t[0] - 1) * a) / (t[0] + 1) : a = i / t[0]), v >= t[1] - 1 && (v > t[1] - 1 ? s = (2 * y + (t[1] - 1) * s) / (t[1] + 1) : s = i / t[1]), v >= h - 1 && (l = a - s, m.dif = l, u += l, v >= h + t[2] - 2 && (v > h + t[2] - 2 ? c = (l * 2 + c * (t[2] - 1)) / (t[2] + 1) : c = u / t[2], m.macd = (l - c) * 2, m.dea = c)), m;
    });
  }
}, Vg = {
  name: "OBV",
  shortName: "OBV",
  calcParams: [30],
  figures: [
    { key: "obv", title: "OBV: ", type: "line" },
    { key: "maObv", title: "MAOBV: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = 0, s = [];
    return e.forEach(function(l, u) {
      var c, h, d, v, m = (c = e[u - 1]) !== null && c !== void 0 ? c : l;
      l.close < m.close ? a -= (h = l.volume) !== null && h !== void 0 ? h : 0 : l.close > m.close && (a += (d = l.volume) !== null && d !== void 0 ? d : 0);
      var y = { obv: a };
      i += a, u >= t[0] - 1 && (y.maObv = i / t[0], i -= (v = s[u - (t[0] - 1)].obv) !== null && v !== void 0 ? v : 0), s.push(y);
    }), s;
  }
}, Wg = {
  name: "PVT",
  shortName: "PVT",
  figures: [
    { key: "pvt", title: "PVT: ", type: "line" }
  ],
  calc: function(e) {
    var r = 0;
    return e.map(function(t, i) {
      var a, s, l = {}, u = t.close, c = (a = t.volume) !== null && a !== void 0 ? a : 1, h = ((s = e[i - 1]) !== null && s !== void 0 ? s : t).close, d = 0, v = h * c;
      return v !== 0 && (d = (u - h) / v), r += d, l.pvt = r, l;
    });
  }
}, Yg = {
  name: "PSY",
  shortName: "PSY",
  calcParams: [12, 6],
  figures: [
    { key: "psy", title: "PSY: ", type: "line" },
    { key: "maPsy", title: "MAPSY: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = 0, s = [], l = [];
    return e.forEach(function(u, c) {
      var h, d, v = {}, m = ((h = e[c - 1]) !== null && h !== void 0 ? h : u).close, y = u.close - m > 0 ? 1 : 0;
      s.push(y), i += y, c >= t[0] - 1 && (v.psy = i / t[0] * 100, a += v.psy, c >= t[0] + t[1] - 2 && (v.maPsy = a / t[1], a -= (d = l[c - (t[1] - 1)].psy) !== null && d !== void 0 ? d : 0), i -= s[c - (t[0] - 1)]), l.push(v);
    }), l;
  }
}, Xg = {
  name: "ROC",
  shortName: "ROC",
  calcParams: [12, 6],
  figures: [
    { key: "roc", title: "ROC: ", type: "line" },
    { key: "maRoc", title: "MAROC: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = [], a = 0;
    return e.forEach(function(s, l) {
      var u, c, h = {};
      if (l >= t[0] - 1) {
        var d = s.close, v = ((u = e[l - t[0]]) !== null && u !== void 0 ? u : e[l - (t[0] - 1)]).close;
        v !== 0 ? h.roc = (d - v) / v * 100 : h.roc = 0, a += h.roc, l >= t[0] - 1 + t[1] - 1 && (h.maRoc = a / t[1], a -= (c = i[l - (t[1] - 1)].roc) !== null && c !== void 0 ? c : 0);
      }
      i.push(h);
    }), i;
  }
}, Zg = {
  name: "RSI",
  shortName: "RSI",
  calcParams: [6, 12, 24],
  figures: [
    { key: "rsi1", title: "RSI1: ", type: "line" },
    { key: "rsi2", title: "RSI2: ", type: "line" },
    { key: "rsi3", title: "RSI3: ", type: "line" }
  ],
  regenerateFigures: function(e) {
    return e.map(function(r, t) {
      var i = t + 1;
      return { key: "rsi".concat(i), title: "RSI".concat(i, ": "), type: "line" };
    });
  },
  calc: function(e, r) {
    var t = r.calcParams, i = r.figures, a = [], s = [];
    return e.map(function(l, u) {
      var c, h = {}, d = ((c = e[u - 1]) !== null && c !== void 0 ? c : l).close, v = l.close - d;
      return t.forEach(function(m, y) {
        var C, b, _;
        if (v > 0 ? a[y] = ((C = a[y]) !== null && C !== void 0 ? C : 0) + v : s[y] = ((b = s[y]) !== null && b !== void 0 ? b : 0) + Math.abs(v), u >= m - 1) {
          s[y] !== 0 ? h[i[y].key] = 100 - 100 / (1 + a[y] / s[y]) : h[i[y].key] = 0;
          var w = e[u - (m - 1)], T = (_ = e[u - m]) !== null && _ !== void 0 ? _ : w, P = w.close - T.close;
          P > 0 ? a[y] -= P : s[y] -= Math.abs(P);
        }
      }), h;
    });
  }
}, Ug = {
  name: "SMA",
  shortName: "SMA",
  series: ln.Price,
  calcParams: [12, 2],
  precision: 2,
  figures: [
    { key: "sma", title: "SMA: ", type: "line" }
  ],
  shouldOhlc: !0,
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = 0;
    return e.map(function(s, l) {
      var u = {}, c = s.close;
      return i += c, l >= t[0] - 1 && (l > t[0] - 1 ? a = (c * t[1] + a * (t[0] - t[1] + 1)) / (t[0] + 1) : a = i / t[0], u.sma = a), u;
    });
  }
}, Kg = {
  name: "KDJ",
  shortName: "KDJ",
  calcParams: [9, 3, 3],
  figures: [
    { key: "k", title: "K: ", type: "line" },
    { key: "d", title: "D: ", type: "line" },
    { key: "j", title: "J: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = [];
    return e.forEach(function(a, s) {
      var l, u, c, h, d = {}, v = a.close;
      if (s >= t[0] - 1) {
        var m = N9(e.slice(s - (t[0] - 1), s + 1), "high", "low"), y = m[0], C = m[1], b = y - C, _ = (v - C) / (b === 0 ? 1 : b) * 100;
        d.k = ((t[1] - 1) * ((u = (l = i[s - 1]) === null || l === void 0 ? void 0 : l.k) !== null && u !== void 0 ? u : 50) + _) / t[1], d.d = ((t[2] - 1) * ((h = (c = i[s - 1]) === null || c === void 0 ? void 0 : c.d) !== null && h !== void 0 ? h : 50) + d.k) / t[2], d.j = 3 * d.k - 2 * d.d;
      }
      i.push(d);
    }), i;
  }
}, Hg = {
  name: "SAR",
  shortName: "SAR",
  series: ln.Price,
  calcParams: [2, 2, 20],
  precision: 2,
  shouldOhlc: !0,
  figures: [
    {
      key: "sar",
      title: "SAR: ",
      type: "circle",
      styles: function(e, r, t) {
        var i, a, s = e.current, l = (a = (i = s.indicatorData) === null || i === void 0 ? void 0 : i.sar) !== null && a !== void 0 ? a : Number.MIN_SAFE_INTEGER, u = s.kLineData, c = ((u == null ? void 0 : u.high) + (u == null ? void 0 : u.low)) / 2, h = l < c ? Kt(r.styles, "circles[0].upColor", t.circles[0].upColor) : Kt(r.styles, "circles[0].downColor", t.circles[0].downColor);
        return { color: h };
      }
    }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = t[0] / 100, a = t[1] / 100, s = t[2] / 100, l = i, u = -100, c = !1, h = 0;
    return e.map(function(d, v) {
      var m = h, y = d.high, C = d.low;
      if (c) {
        (u === -100 || u < y) && (u = y, l = Math.min(l + a, s)), h = m + l * (u - m);
        var b = Math.min(e[Math.max(1, v) - 1].low, C);
        h > d.low ? (h = u, l = i, u = -100, c = !c) : h > b && (h = b);
      } else {
        (u === -100 || u > C) && (u = C, l = Math.min(l + a, s)), h = m + l * (u - m);
        var _ = Math.max(e[Math.max(1, v) - 1].high, y);
        h < d.high ? (h = u, l = 0, u = -100, c = !c) : h < _ && (h = _);
      }
      return { sar: h };
    });
  }
}, Gg = {
  name: "TRIX",
  shortName: "TRIX",
  calcParams: [12, 9],
  figures: [
    { key: "trix", title: "TRIX: ", type: "line" },
    { key: "maTrix", title: "MATRIX: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a, s, l, u = 0, c = 0, h = 0, d = [];
    return e.forEach(function(v, m) {
      var y, C = {}, b = v.close;
      if (i += b, m >= t[0] - 1 && (m > t[0] - 1 ? a = (2 * b + (t[0] - 1) * a) / (t[0] + 1) : a = i / t[0], u += a, m >= t[0] * 2 - 2 && (m > t[0] * 2 - 2 ? s = (2 * a + (t[0] - 1) * s) / (t[0] + 1) : s = u / t[0], c += s, m >= t[0] * 3 - 3))) {
        var _ = void 0, w = 0;
        m > t[0] * 3 - 3 ? (_ = (2 * s + (t[0] - 1) * l) / (t[0] + 1), w = (_ - l) / l * 100) : _ = c / t[0], l = _, C.trix = w, h += w, m >= t[0] * 3 + t[1] - 4 && (C.maTrix = h / t[1], h -= (y = d[m - (t[1] - 1)].trix) !== null && y !== void 0 ? y : 0);
      }
      d.push(C);
    }), d;
  }
}, Qg = {
  name: "VOL",
  shortName: "VOL",
  series: ln.Volume,
  calcParams: [5, 10, 20],
  shouldFormatBigNumber: !0,
  precision: 0,
  minValue: 0,
  figures: [
    { key: "ma1", title: "MA5: ", type: "line" },
    { key: "ma2", title: "MA10: ", type: "line" },
    { key: "ma3", title: "MA20: ", type: "line" },
    {
      key: "volume",
      title: "VOLUME: ",
      type: "bar",
      baseValue: 0,
      styles: function(e, r, t) {
        var i = e.current.kLineData, a;
        return i.close > i.open ? a = Kt(r.styles, "bars[0].upColor", t.bars[0].upColor) : i.close < i.open ? a = Kt(r.styles, "bars[0].downColor", t.bars[0].downColor) : a = Kt(r.styles, "bars[0].noChangeColor", t.bars[0].noChangeColor), { color: a };
      }
    }
  ],
  regenerateFigures: function(e) {
    var r = e.map(function(t, i) {
      return { key: "ma".concat(i + 1), title: "MA".concat(t, ": "), type: "line" };
    });
    return r.push({
      key: "volume",
      title: "VOLUME: ",
      type: "bar",
      baseValue: 0,
      styles: function(t, i, a) {
        var s = t.current.kLineData, l;
        return s.close > s.open ? l = Kt(i.styles, "bars[0].upColor", a.bars[0].upColor) : s.close < s.open ? l = Kt(i.styles, "bars[0].downColor", a.bars[0].downColor) : l = Kt(i.styles, "bars[0].noChangeColor", a.bars[0].noChangeColor), { color: l };
      }
    }), r;
  },
  calc: function(e, r) {
    var t = r.calcParams, i = r.figures, a = [];
    return e.map(function(s, l) {
      var u, c = (u = s.volume) !== null && u !== void 0 ? u : 0, h = { volume: c };
      return t.forEach(function(d, v) {
        var m, y;
        a[v] = ((m = a[v]) !== null && m !== void 0 ? m : 0) + c, l >= d - 1 && (h[i[v].key] = a[v] / d, a[v] -= (y = e[l - (d - 1)].volume) !== null && y !== void 0 ? y : 0);
      }), h;
    });
  }
}, jg = {
  name: "VR",
  shortName: "VR",
  calcParams: [26, 6],
  figures: [
    { key: "vr", title: "VR: ", type: "line" },
    { key: "maVr", title: "MAVR: ", type: "line" }
  ],
  calc: function(e, r) {
    var t = r.calcParams, i = 0, a = 0, s = 0, l = 0, u = [];
    return e.forEach(function(c, h) {
      var d, v, m, y, C, b = {}, _ = c.close, w = ((d = e[h - 1]) !== null && d !== void 0 ? d : c).close, T = (v = c.volume) !== null && v !== void 0 ? v : 0;
      if (_ > w ? i += T : _ < w ? a += T : s += T, h >= t[0] - 1) {
        var P = s / 2;
        a + P === 0 ? b.vr = 0 : b.vr = (i + P) / (a + P) * 100, l += b.vr, h >= t[0] + t[1] - 2 && (b.maVr = l / t[1], l -= (m = u[h - (t[1] - 1)].vr) !== null && m !== void 0 ? m : 0);
        var M = e[h - (t[0] - 1)], F = (y = e[h - t[0]]) !== null && y !== void 0 ? y : M, O = M.close, V = (C = M.volume) !== null && C !== void 0 ? C : 0;
        O > F.close ? i -= V : O < F.close ? a -= V : s -= V;
      }
      u.push(b);
    }), u;
  }
}, qg = {
  name: "WR",
  shortName: "WR",
  calcParams: [6, 10, 14],
  figures: [
    { key: "wr1", title: "WR1: ", type: "line" },
    { key: "wr2", title: "WR2: ", type: "line" },
    { key: "wr3", title: "WR3: ", type: "line" }
  ],
  regenerateFigures: function(e) {
    return e.map(function(r, t) {
      return { key: "wr".concat(t + 1), title: "WR".concat(t + 1, ": "), type: "line" };
    });
  },
  calc: function(e, r) {
    var t = r.calcParams, i = r.figures;
    return e.map(function(a, s) {
      var l = {}, u = a.close;
      return t.forEach(function(c, h) {
        var d = c - 1;
        if (s >= d) {
          var v = N9(e.slice(s - d, s + 1), "high", "low"), m = v[0], y = v[1], C = m - y;
          l[i[h].key] = C === 0 ? 0 : (u - m) / C * 100;
        }
      }), l;
    });
  }
}, z9 = {}, Jg = [
  kg,
  Lg,
  Pg,
  Ag,
  $g,
  Tg,
  Mg,
  Eg,
  Dg,
  Fg,
  Og,
  Rg,
  Bg,
  Ng,
  zg,
  Vg,
  Wg,
  Yg,
  Xg,
  Zg,
  Ug,
  Kg,
  Hg,
  Gg,
  Qg,
  jg,
  qg
];
Jg.forEach(function(e) {
  z9[e.name] = vg.extend(e);
});
function V9(e) {
  var r;
  return (r = z9[e]) !== null && r !== void 0 ? r : null;
}
var e8 = (
  /** @class */
  function() {
    function e(r) {
      this._instances = /* @__PURE__ */ new Map(), this._chartStore = r;
    }
    return e.prototype._overrideInstance = function(r, t) {
      var i = t.shortName, a = t.series, s = t.calcParams, l = t.precision, u = t.figures, c = t.minValue, h = t.maxValue, d = t.shouldOhlc, v = t.shouldFormatBigNumber, m = t.visible, y = t.zLevel, C = t.styles, b = t.extendData, _ = t.regenerateFigures, w = t.createTooltipDataSource, T = t.draw, P = t.calc, M = !1;
      Ne(i) && r.setShortName(i) && (M = !0), pe(a) && r.setSeries(a) && (M = !0);
      var F = !1;
      Dn(s) && r.setCalcParams(s) && (M = !0, F = !0), Dn(u) && r.setFigures(u) && (M = !0, F = !0), r.setMinValue(c ?? null) && (M = !0), r.setMinValue(h ?? null) && (M = !0), Ae(l) && r.setPrecision(l) && (M = !0), aa(d) && r.setShouldOhlc(d) && (M = !0), aa(v) && r.setShouldFormatBigNumber(v) && (M = !0), aa(m) && r.setVisible(m) && (M = !0);
      var O = !1;
      return Ae(y) && r.setZLevel(y) && (M = !0, O = !0), pe(C) && r.setStyles(C) && (M = !0), r.setExtendData(b) && (M = !0, F = !0), _ !== void 0 && r.setRegenerateFigures(_) && (M = !0), w !== void 0 && r.setCreateTooltipDataSource(w) && (M = !0), T !== void 0 && r.setDraw(T) && (M = !0), On(P) && (r.calc = P, F = !0), [M, F, O];
    }, e.prototype._sort = function(r) {
      var t;
      Ne(r) ? (t = this._instances.get(r)) === null || t === void 0 || t.sort(function(i, a) {
        return i.zLevel - a.zLevel;
      }) : this._instances.forEach(function(i) {
        i.sort(function(a, s) {
          return a.zLevel - s.zLevel;
        });
      });
    }, e.prototype.addInstance = function(r, t, i) {
      return t1(this, void 0, void 0, function() {
        var a, s, l, u, c;
        return r1(this, function(h) {
          switch (h.label) {
            case 0:
              return a = r.name, s = this._instances.get(t), pe(s) ? (l = s.find(function(d) {
                return d.name === a;
              }), pe(l) ? [4, Promise.reject(new Error("Duplicate indicators."))] : [3, 2]) : [3, 2];
            case 1:
              return [2, h.sent()];
            case 2:
              return pe(s) || (s = []), u = V9(a), c = new u(), this._overrideInstance(c, r), i || (s = []), s.push(c), this._instances.set(t, s), this._sort(t), [4, c.calcIndicator(this._chartStore.getDataList())];
            case 3:
              return [2, h.sent()];
          }
        });
      });
    }, e.prototype.getInstances = function(r) {
      var t;
      return (t = this._instances.get(r)) !== null && t !== void 0 ? t : [];
    }, e.prototype.removeInstance = function(r, t) {
      var i, a = !1, s = this._instances.get(r);
      if (pe(s)) {
        if (Ne(t)) {
          var l = s.findIndex(function(u) {
            return u.name === t;
          });
          l > -1 && (s.splice(l, 1), a = !0);
        } else
          this._instances.set(r, []), a = !0;
        ((i = this._instances.get(r)) === null || i === void 0 ? void 0 : i.length) === 0 && this._instances.delete(r);
      }
      return a;
    }, e.prototype.hasInstances = function(r) {
      return this._instances.has(r);
    }, e.prototype.calcInstance = function(r, t) {
      return t1(this, void 0, void 0, function() {
        var i, a, s, l, u = this;
        return r1(this, function(c) {
          switch (c.label) {
            case 0:
              return i = [], Ne(r) ? Ne(t) ? (a = this._instances.get(t), pe(a) && (s = a.find(function(h) {
                return h.name === r;
              }), pe(s) && i.push(s.calcIndicator(this._chartStore.getDataList())))) : this._instances.forEach(function(h) {
                var d = h.find(function(v) {
                  return v.name === r;
                });
                pe(d) && i.push(d.calcIndicator(u._chartStore.getDataList()));
              }) : this._instances.forEach(function(h) {
                h.forEach(function(d) {
                  i.push(d.calcIndicator(u._chartStore.getDataList()));
                });
              }), [4, Promise.all(i)];
            case 1:
              return l = c.sent(), [2, l.includes(!0)];
          }
        });
      });
    }, e.prototype.getInstanceByPaneId = function(r, t) {
      var i, a, s = function(c) {
        var h = /* @__PURE__ */ new Map();
        return c.forEach(function(d) {
          h.set(d.name, d);
        }), h;
      };
      if (Ne(r)) {
        var l = (i = this._instances.get(r)) !== null && i !== void 0 ? i : [];
        return Ne(t) ? (a = l == null ? void 0 : l.find(function(c) {
          return c.name === t;
        })) !== null && a !== void 0 ? a : null : s(l);
      }
      var u = /* @__PURE__ */ new Map();
      return this._instances.forEach(function(c, h) {
        u.set(h, s(c));
      }), u;
    }, e.prototype.setSeriesPrecision = function(r) {
      this._instances.forEach(function(t) {
        t.forEach(function(i) {
          i.series === ln.Price && i.setPrecision(r.price, !0), i.series === ln.Volume && i.setPrecision(r.volume, !0);
        });
      });
    }, e.prototype.override = function(r, t) {
      return t1(this, void 0, void 0, function() {
        var i, a, s, l, u, c, h, d = this;
        return r1(this, function(v) {
          switch (v.label) {
            case 0:
              return i = r.name, a = /* @__PURE__ */ new Map(), t !== null ? (s = this._instances.get(t), pe(s) && a.set(t, s)) : a = this._instances, l = !1, u = [], c = !1, a.forEach(function(m) {
                var y = m.find(function(b) {
                  return b.name === i;
                });
                if (pe(y)) {
                  var C = d._overrideInstance(y, r);
                  C[2] && (c = !0), C[1] ? u.push(y.calcIndicator(d._chartStore.getDataList())) : C[0] && (l = !0);
                }
              }), c && this._sort(), [4, Promise.all(u)];
            case 1:
              return h = v.sent(), [2, [l, h.includes(!0)]];
          }
        });
      });
    }, e;
  }()
), t8 = (
  /** @class */
  function() {
    function e(r) {
      this._crosshair = {}, this._activeIcon = null, this._chartStore = r;
    }
    return e.prototype.setCrosshair = function(r, t) {
      var i = this._chartStore.getDataList(), a = r ?? {}, s, l;
      Ae(a.x) ? (s = this._chartStore.getTimeScaleStore().coordinateToDataIndex(a.x), s < 0 ? l = 0 : s > i.length - 1 ? l = i.length - 1 : l = s) : (s = i.length - 1, l = s);
      var u = i[l], c = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(s), h = { x: this._crosshair.x, y: this._crosshair.y, paneId: this._crosshair.paneId };
      this._crosshair = Le(Le({}, a), { realX: c, kLineData: u, realDataIndex: s, dataIndex: l }), (h.x !== a.x || h.y !== a.y || h.paneId !== a.paneId) && (u !== null && this._chartStore.getChart().crosshairChange(this._crosshair), (t ?? !1) || this._chartStore.getChart().updatePane(
        1
        /* UpdateLevel.Overlay */
      ));
    }, e.prototype.recalculateCrosshair = function(r) {
      this.setCrosshair(this._crosshair, r);
    }, e.prototype.getCrosshair = function() {
      return this._crosshair;
    }, e.prototype.setActiveIcon = function(r) {
      this._activeIcon = r ?? null;
    }, e.prototype.getActiveIcon = function() {
      return this._activeIcon;
    }, e.prototype.clear = function() {
      this.setCrosshair({}, !0), this.setActiveIcon();
    }, e;
  }()
), r8 = {
  name: "fibonacciLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding, i = e.overlay, a = e.precision, s = e.thousandsSeparator, l = i.points;
    if (r.length > 0) {
      var u = [], c = [], h = 0, d = t.width;
      if (r.length > 1 && Ae(l[0].value) && Ae(l[1].value)) {
        var v = [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0], m = r[0].y - r[1].y, y = l[0].value - l[1].value;
        v.forEach(function(C) {
          var b, _ = r[1].y + m * C, w = fr((((b = l[1].value) !== null && b !== void 0 ? b : 0) + y * C).toFixed(a.price), s);
          u.push({ coordinates: [{ x: h, y: _ }, { x: d, y: _ }] }), c.push({
            x: h,
            y: _,
            text: "".concat(w, " (").concat((C * 100).toFixed(1), "%)"),
            baseline: "bottom"
          });
        });
      }
      return [
        {
          type: "line",
          attrs: u
        },
        {
          type: "text",
          isCheckEvent: !1,
          attrs: c
        }
      ];
    }
    return [];
  }
}, n8 = {
  name: "horizontalRayLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding, i = { x: 0, y: r[0].y };
    return pe(r[1]) && r[0].x < r[1].x && (i.x = t.width), [
      {
        type: "line",
        attrs: { coordinates: [r[0], i] }
      }
    ];
  },
  performEventPressedMove: function(e) {
    var r = e.points, t = e.performPoint;
    r[0].value = t.value, r[1].value = t.value;
  },
  performEventMoveForDrawing: function(e) {
    var r = e.currentStep, t = e.points, i = e.performPoint;
    r === 2 && (t[0].value = i.value);
  }
}, i8 = {
  name: "horizontalSegment",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = [];
    return r.length === 2 && t.push({ coordinates: r }), [
      {
        type: "line",
        attrs: t
      }
    ];
  },
  performEventPressedMove: function(e) {
    var r = e.points, t = e.performPoint;
    r[0].value = t.value, r[1].value = t.value;
  },
  performEventMoveForDrawing: function(e) {
    var r = e.currentStep, t = e.points, i = e.performPoint;
    r === 2 && (t[0].value = i.value);
  }
}, a8 = {
  name: "horizontalStraightLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    return [{
      type: "line",
      attrs: {
        coordinates: [
          {
            x: 0,
            y: r[0].y
          },
          {
            x: t.width,
            y: r[0].y
          }
        ]
      }
    }];
  }
}, Sf = (
  /** @class */
  function() {
    function e() {
      this._children = [], this._callbacks = /* @__PURE__ */ new Map();
    }
    return e.prototype.registerEvent = function(r, t) {
      return this._callbacks.set(r, t), this;
    }, e.prototype.onEvent = function(r, t, i) {
      var a = this._callbacks.get(r);
      return pe(a) && this.checkEventOn(t) ? a(t, i) : !1;
    }, e.prototype.checkEventOn = function(r) {
      var t, i;
      try {
        for (var a = Ma(this._children), s = a.next(); !s.done; s = a.next()) {
          var l = s.value;
          if (l.checkEventOn(r))
            return !0;
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return !1;
    }, e.prototype.dispatchEvent = function(r, t, i) {
      var a = this._children.length - 1;
      if (a > -1) {
        for (var s = a; s > -1; s--)
          if (this._children[s].dispatchEvent(r, t, i))
            return !0;
      }
      return this.onEvent(r, t, i);
    }, e.prototype.addChild = function(r) {
      return this._children.push(r), this;
    }, e.prototype.clear = function() {
      this._children = [];
    }, e;
  }()
), cr = 2, o8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t) {
      var i = e.call(this) || this;
      return i.attrs = t.attrs, i.styles = t.styles, i;
    }
    return r.prototype.checkEventOn = function(t) {
      return this.checkEventOnImp(t, this.attrs, this.styles);
    }, r.prototype.draw = function(t) {
      this.drawImp(t, this.attrs, this.styles);
    }, r.extend = function(t) {
      var i = (
        /** @class */
        function(a) {
          Ge(s, a);
          function s() {
            return a !== null && a.apply(this, arguments) || this;
          }
          return s.prototype.checkEventOnImp = function(l, u, c) {
            return t.checkEventOn(l, u, c);
          }, s.prototype.drawImp = function(l, u, c) {
            t.draw(l, u, c);
          }, s;
        }(r)
      );
      return i;
    }, r;
  }(Sf)
);
function n2(e, r) {
  return Math.sqrt(Math.pow(e.x + r.x, 2) + Math.pow(e.y + r.y, 2));
}
function s8(e) {
  var r = n2(e[0], e[1]), t = n2(e[1], e[2]), i = r + t, a = [e[2].x - e[0].x, e[2].y - e[0].y];
  return [
    {
      x: e[1].x - a[0] * 0.5 * r / i,
      y: e[1].y - a[1] * 0.5 * r / i
    },
    {
      x: e[1].x + a[0] * 0.5 * r / i,
      y: e[1].y + a[1] * 0.5 * r / i
    }
  ];
}
function W9(e, r) {
  var t = r.coordinates;
  if (t.length > 1)
    for (var i = 1; i < t.length; i++) {
      var a = t[i - 1], s = t[i];
      if (a.x === s.x) {
        if (Math.abs(a.y - e.y) + Math.abs(s.y - e.y) - Math.abs(a.y - s.y) < cr + cr && Math.abs(e.x - a.x) < cr)
          return !0;
      } else {
        var l = A1(a, s), u = wf(l, e), c = Math.abs(u - e.y);
        if (Math.abs(a.x - e.x) + Math.abs(s.x - e.x) - Math.abs(a.x - s.x) < cr + cr && c * c / (l[0] * l[0] + 1) < cr * cr)
          return !0;
      }
    }
  return !1;
}
function wf(e, r) {
  return e != null ? r.x * e[0] + e[1] : r.y;
}
function al(e, r, t) {
  var i = A1(e, r);
  return wf(i, t);
}
function A1(e, r) {
  var t = e.x - r.x;
  if (t !== 0) {
    var i = (e.y - r.y) / t, a = e.y - i * e.x;
    return [i, a];
  }
  return null;
}
function Y9(e, r, t) {
  var i = r.coordinates, a = i.length;
  if (a > 1) {
    var s = t.style, l = s === void 0 ? mt.Solid : s, u = t.smooth, c = t.size, h = c === void 0 ? 1 : c, d = t.color, v = d === void 0 ? "currentColor" : d, m = t.dashedValue, y = m === void 0 ? [2, 2] : m;
    if (e.lineWidth = h, e.strokeStyle = v, l === mt.Dashed ? e.setLineDash(y) : e.setLineDash([]), e.beginPath(), e.moveTo(i[0].x, i[0].y), u ?? !1) {
      for (var C = [], b = 1; b < a - 1; b++)
        C = C.concat(s8([i[b - 1], i[b], i[b + 1]]));
      e.quadraticCurveTo(C[0].x, C[0].y, i[1].x, i[1].y);
      for (var _ = 2; _ < a - 1; _++)
        e.bezierCurveTo(C[(_ - 2) * 2 + 1].x, C[(_ - 2) * 2 + 1].y, C[(_ - 1) * 2].x, C[(_ - 1) * 2].y, i[_].x, i[_].y);
      e.quadraticCurveTo(C[(_ - 2) * 2 + 1].x, C[(_ - 2) * 2 + 1].y, i[_].x, i[_].y);
    } else
      for (var _ = 1; _ < i.length; _++)
        e.lineTo(i[_].x, i[_].y);
    e.stroke(), e.closePath();
  }
}
var l8 = {
  name: "line",
  checkEventOn: W9,
  draw: function(e, r, t) {
    Y9(e, r, t);
  }
};
function X9(e, r, t) {
  var i = t ?? 0, a = [];
  if (e.length > 1)
    if (e[0].x === e[1].x) {
      var s = 0, l = r.height;
      if (a.push({ coordinates: [{ x: e[0].x, y: s }, { x: e[0].x, y: l }] }), e.length > 2) {
        a.push({ coordinates: [{ x: e[2].x, y: s }, { x: e[2].x, y: l }] });
        for (var u = e[0].x - e[2].x, c = 0; c < i; c++) {
          var h = u * (c + 1);
          a.push({ coordinates: [{ x: e[0].x + h, y: s }, { x: e[0].x + h, y: l }] });
        }
      }
    } else {
      var d = 0, v = r.width, m = A1(e[0], e[1]), y = m[0], C = m[1];
      if (a.push({ coordinates: [{ x: d, y: d * y + C }, { x: v, y: v * y + C }] }), e.length > 2) {
        var b = e[2].y - y * e[2].x;
        a.push({ coordinates: [{ x: d, y: d * y + b }, { x: v, y: v * y + b }] });
        for (var u = C - b, c = 0; c < i; c++) {
          var _ = C + u * (c + 1);
          a.push({ coordinates: [{ x: d, y: d * y + _ }, { x: v, y: v * y + _ }] });
        }
      }
    }
  return a;
}
var u8 = {
  name: "parallelStraightLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    return [
      {
        type: "line",
        attrs: X9(r, t)
      }
    ];
  }
}, c8 = {
  name: "priceChannelLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    return [
      {
        type: "line",
        attrs: X9(r, t, 1)
      }
    ];
  }
}, f8 = {
  name: "priceLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding, i = e.precision, a = e.overlay, s = e.thousandsSeparator, l = a.points[0].value, u = l === void 0 ? 0 : l;
    return [
      {
        type: "line",
        attrs: { coordinates: [r[0], { x: t.width, y: r[0].y }] }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: {
          x: r[0].x,
          y: r[0].y,
          text: fr(u.toFixed(i.price), s),
          baseline: "bottom"
        }
      }
    ];
  }
};
function h8(e, r) {
  if (e.length > 1) {
    var t = void 0;
    return e[0].x === e[1].x && e[0].y !== e[1].y ? e[0].y < e[1].y ? t = {
      x: e[0].x,
      y: r.height
    } : t = {
      x: e[0].x,
      y: 0
    } : e[0].x > e[1].x ? t = {
      x: 0,
      y: al(e[0], e[1], { x: 0, y: e[0].y })
    } : t = {
      x: r.width,
      y: al(e[0], e[1], { x: r.width, y: e[0].y })
    }, { coordinates: [e[0], t] };
  }
  return [];
}
var d8 = {
  name: "rayLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    return [
      {
        type: "line",
        attrs: h8(r, t)
      }
    ];
  }
}, v8 = {
  name: "segment",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates;
    return r.length === 2 ? [
      {
        type: "line",
        attrs: { coordinates: r }
      }
    ] : [];
  }
}, p8 = {
  name: "straightLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    return r.length === 2 ? r[0].x === r[1].x ? [
      {
        type: "line",
        attrs: {
          coordinates: [
            {
              x: r[0].x,
              y: 0
            },
            {
              x: r[0].x,
              y: t.height
            }
          ]
        }
      }
    ] : [
      {
        type: "line",
        attrs: {
          coordinates: [
            {
              x: 0,
              y: al(r[0], r[1], { x: 0, y: r[0].y })
            },
            {
              x: t.width,
              y: al(r[0], r[1], { x: t.width, y: r[0].y })
            }
          ]
        }
      }
    ] : [];
  }
}, g8 = {
  name: "verticalRayLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    if (r.length === 2) {
      var i = { x: r[0].x, y: 0 };
      return r[0].y < r[1].y && (i.y = t.height), [
        {
          type: "line",
          attrs: { coordinates: [r[0], i] }
        }
      ];
    }
    return [];
  },
  performEventPressedMove: function(e) {
    var r = e.points, t = e.performPoint;
    r[0].timestamp = t.timestamp, r[0].dataIndex = t.dataIndex, r[1].timestamp = t.timestamp, r[1].dataIndex = t.dataIndex;
  },
  performEventMoveForDrawing: function(e) {
    var r = e.currentStep, t = e.points, i = e.performPoint;
    r === 2 && (t[0].timestamp = i.timestamp, t[0].dataIndex = i.dataIndex);
  }
}, y8 = {
  name: "verticalSegment",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates;
    return r.length === 2 ? [
      {
        type: "line",
        attrs: { coordinates: r }
      }
    ] : [];
  },
  performEventPressedMove: function(e) {
    var r = e.points, t = e.performPoint;
    r[0].timestamp = t.timestamp, r[0].dataIndex = t.dataIndex, r[1].timestamp = t.timestamp, r[1].dataIndex = t.dataIndex;
  },
  performEventMoveForDrawing: function(e) {
    var r = e.currentStep, t = e.points, i = e.performPoint;
    r === 2 && (t[0].timestamp = i.timestamp, t[0].dataIndex = i.dataIndex);
  }
}, m8 = {
  name: "verticalStraightLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: function(e) {
    var r = e.coordinates, t = e.bounding;
    return [
      {
        type: "line",
        attrs: {
          coordinates: [
            {
              x: r[0].x,
              y: 0
            },
            {
              x: r[0].x,
              y: t.height
            }
          ]
        }
      }
    ];
  }
}, _8 = {
  name: "simpleAnnotation",
  totalStep: 2,
  styles: {
    line: { style: mt.Dashed }
  },
  createPointFigures: function(e) {
    var r, t = e.overlay, i = e.coordinates, a;
    pe(t.extendData) && (On(t.extendData) ? a = t.extendData(t) : a = (r = t.extendData) !== null && r !== void 0 ? r : "");
    var s = i[0].x, l = i[0].y - 6, u = l - 50, c = u - 5;
    return [
      {
        type: "line",
        attrs: { coordinates: [{ x: s, y: l }, { x: s, y: u }] },
        ignoreEvent: !0
      },
      {
        type: "polygon",
        attrs: { coordinates: [{ x: s, y: u }, { x: s - 4, y: c }, { x: s + 4, y: c }] },
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: s, y: c, text: a ?? "", align: "center", baseline: "bottom" },
        ignoreEvent: !0
      }
    ];
  }
}, x8 = {
  name: "simpleTag",
  totalStep: 2,
  styles: {
    line: { style: mt.Dashed }
  },
  createPointFigures: function(e) {
    var r = e.bounding, t = e.coordinates;
    return {
      type: "line",
      attrs: {
        coordinates: [
          { x: 0, y: t[0].y },
          { x: r.width, y: t[0].y }
        ]
      },
      ignoreEvent: !0
    };
  },
  createYAxisFigures: function(e) {
    var r, t, i = e.overlay, a = e.coordinates, s = e.bounding, l = e.yAxis, u = e.precision, c = (r = l == null ? void 0 : l.isFromZero()) !== null && r !== void 0 ? r : !1, h, d;
    c ? (h = "left", d = 0) : (h = "right", d = s.width);
    var v;
    return pe(i.extendData) && (On(i.extendData) ? v = i.extendData(i) : v = (t = i.extendData) !== null && t !== void 0 ? t : ""), !pe(v) && Ae(i.points[0].value) && (v = er(i.points[0].value, u.price)), { type: "text", attrs: { x: d, y: a[0].y, text: v ?? "", align: h, baseline: "middle" } };
  }
}, kf = {}, b8 = [
  r8,
  n8,
  i8,
  a8,
  u8,
  c8,
  f8,
  d8,
  v8,
  p8,
  g8,
  y8,
  m8,
  _8,
  x8
];
b8.forEach(function(e) {
  kf[e.name] = R9.extend(e);
});
function C8(e) {
  kf[e.name] = R9.extend(e);
}
function S8(e) {
  var r;
  return (r = kf[e]) !== null && r !== void 0 ? r : null;
}
var w8 = 30, k8 = 100, gt = {
  CANDLE: "candle_pane",
  INDICATOR: "indicator_pane_",
  X_AXIS: "x_axis_pane"
}, L8 = (
  /** @class */
  function() {
    function e(r) {
      this._instances = /* @__PURE__ */ new Map(), this._progressInstanceInfo = null, this._pressedInstanceInfo = {
        paneId: "",
        instance: null,
        figureType: 0,
        figureKey: "",
        figureIndex: -1,
        attrsIndex: -1
      }, this._hoverInstanceInfo = {
        paneId: "",
        instance: null,
        figureType: 0,
        figureKey: "",
        figureIndex: -1,
        attrsIndex: -1
      }, this._clickInstanceInfo = {
        paneId: "",
        instance: null,
        figureType: 0,
        figureKey: "",
        figureIndex: -1,
        attrsIndex: -1
      }, this._chartStore = r;
    }
    return e.prototype._overrideInstance = function(r, t) {
      var i = t.id, a = t.groupId, s = t.points, l = t.styles, u = t.lock, c = t.visible, h = t.zLevel, d = t.mode, v = t.modeSensitivity, m = t.extendData, y = t.onDrawStart, C = t.onDrawing, b = t.onDrawEnd, _ = t.onClick, w = t.onDoubleClick, T = t.onRightClick, P = t.onPressedMoveStart, M = t.onPressedMoving, F = t.onPressedMoveEnd, O = t.onMouseEnter, V = t.onMouseLeave, W = t.onRemoved, N = t.onSelected, Y = t.onDeselected, K = !1, G = !1;
      return Ne(i) && r.setId(i), Ne(a) && r.setGroupId(a), Dn(s) && r.setPoints(s) && (K = !0), pe(l) && r.setStyles(l) && (K = !0), aa(u) && r.setLock(u), aa(c) && r.setVisible(c) && (K = !0), Ae(h) && r.setZLevel(h) && (K = !0, G = !0), pe(d) && r.setMode(d), Ae(v) && r.setModeSensitivity(v), r.setExtendData(m) && (K = !0), y !== void 0 && r.setOnDrawStartCallback(y), C !== void 0 && r.setOnDrawingCallback(C), b !== void 0 && r.setOnDrawEndCallback(b), _ !== void 0 && r.setOnClickCallback(_), w !== void 0 && r.setOnDoubleClickCallback(w), T !== void 0 && r.setOnRightClickCallback(T), P !== void 0 && r.setOnPressedMoveStartCallback(P), M !== void 0 && r.setOnPressedMovingCallback(M), F !== void 0 && r.setOnPressedMoveEndCallback(F), O !== void 0 && r.setOnMouseEnterCallback(O), V !== void 0 && r.setOnMouseLeaveCallback(V), W !== void 0 && r.setOnRemovedCallback(W), N !== void 0 && r.setOnSelectedCallback(N), Y !== void 0 && r.setOnDeselectedCallback(Y), [K, G];
    }, e.prototype.getInstanceById = function(r) {
      var t, i;
      try {
        for (var a = Ma(this._instances), s = a.next(); !s.done; s = a.next()) {
          var l = s.value, u = l[1], c = u.find(function(h) {
            return h.id === r;
          });
          if (pe(c))
            return c;
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return this._progressInstanceInfo !== null && this._progressInstanceInfo.instance.id === r ? this._progressInstanceInfo.instance : null;
    }, e.prototype._sort = function(r) {
      var t;
      Ne(r) ? (t = this._instances.get(r)) === null || t === void 0 || t.sort(function(i, a) {
        return i.zLevel - a.zLevel;
      }) : this._instances.forEach(function(i) {
        i.sort(function(a, s) {
          return a.zLevel - s.zLevel;
        });
      });
    }, e.prototype.addInstances = function(r, t, i) {
      var a = this, s = r.map(function(l) {
        var u, c, h, d, v = (u = l.id) !== null && u !== void 0 ? u : B9(gg);
        if (a.getInstanceById(v) === null) {
          var m = S8(l.name);
          if (m !== null) {
            var y = new m();
            y.setPaneId(t);
            var C = (c = l.groupId) !== null && c !== void 0 ? c : v;
            return l.id = v, l.groupId = C, a._overrideInstance(y, l), y.isDrawing() ? a._progressInstanceInfo = { paneId: t, instance: y, appointPaneFlag: i } : (a._instances.has(t) || a._instances.set(t, []), (h = a._instances.get(t)) === null || h === void 0 || h.push(y)), y.isStart() && ((d = y.onDrawStart) === null || d === void 0 || d.call(y, { overlay: y })), v;
          }
        }
        return null;
      });
      return s.some(function(l) {
        return l !== null;
      }) && (this._sort(), this._chartStore.getChart().updatePane(1, t)), s;
    }, e.prototype.getProgressInstanceInfo = function() {
      return this._progressInstanceInfo;
    }, e.prototype.progressInstanceComplete = function() {
      var r;
      if (this._progressInstanceInfo !== null) {
        var t = this._progressInstanceInfo, i = t.instance, a = t.paneId;
        i.isDrawing() || (this._instances.has(a) || this._instances.set(a, []), (r = this._instances.get(a)) === null || r === void 0 || r.push(i), this._sort(a), this._progressInstanceInfo = null);
      }
    }, e.prototype.updateProgressInstanceInfo = function(r, t) {
      this._progressInstanceInfo !== null && (aa(t) && t && (this._progressInstanceInfo.appointPaneFlag = t), this._progressInstanceInfo.paneId = r, this._progressInstanceInfo.instance.setPaneId(r));
    }, e.prototype.getInstances = function(r) {
      var t;
      if (!Ne(r)) {
        var i = [];
        return this._instances.forEach(function(a) {
          i = i.concat(a);
        }), i;
      }
      return (t = this._instances.get(r)) !== null && t !== void 0 ? t : [];
    }, e.prototype.override = function(r) {
      var t = this, i = r.id, a = r.groupId, s = r.name, l = !1, u = !1, c = function(y) {
        var C = t._overrideInstance(y, r);
        C[0] && (l = !0), C[1] && (u = !0);
      };
      if (Ne(i)) {
        var h = this.getInstanceById(i);
        h !== null && c(h);
      } else {
        var d = Ne(s), v = Ne(a);
        if (this._instances.forEach(function(y) {
          y.forEach(function(C) {
            (d && C.name === s || v && C.groupId === a || !d && !v) && c(C);
          });
        }), this._progressInstanceInfo !== null) {
          var m = this._progressInstanceInfo.instance;
          (d && m.name === s || v && m.groupId === a || !d && !v) && c(m);
        }
      }
      u && this._sort(), l && this._chartStore.getChart().updatePane(
        1
        /* UpdateLevel.Overlay */
      );
    }, e.prototype.removeInstance = function(r) {
      var t, i, a, s = function(b, _) {
        if (Ne(b.id)) {
          if (_.id !== b.id)
            return !1;
        } else if (Ne(b.groupId)) {
          if (_.groupId !== b.groupId)
            return !1;
        } else if (Ne(b.name) && _.name !== b.name)
          return !1;
        return !0;
      }, l = [], u = pe(r);
      if (this._progressInstanceInfo !== null) {
        var c = this._progressInstanceInfo.instance;
        (!u || u && s(r, c)) && (l.push(this._progressInstanceInfo.paneId), (a = c.onRemoved) === null || a === void 0 || a.call(c, { overlay: c }), this._progressInstanceInfo = null);
      }
      if (u) {
        var h = /* @__PURE__ */ new Map(), d = function(b) {
          var _ = b[1], w = _.filter(function(T) {
            var P;
            return s(r, T) ? (l.includes(b[0]) || l.push(b[0]), (P = T.onRemoved) === null || P === void 0 || P.call(T, { overlay: T }), !1) : !0;
          });
          w.length > 0 && h.set(b[0], w);
        };
        try {
          for (var v = Ma(this._instances), m = v.next(); !m.done; m = v.next()) {
            var y = m.value;
            d(y);
          }
        } catch (b) {
          t = { error: b };
        } finally {
          try {
            m && !m.done && (i = v.return) && i.call(v);
          } finally {
            if (t)
              throw t.error;
          }
        }
        this._instances = h;
      } else
        this._instances.forEach(function(b, _) {
          l.push(_), b.forEach(function(w) {
            var T;
            (T = w.onRemoved) === null || T === void 0 || T.call(w, { overlay: w });
          });
        }), this._instances.clear();
      if (l.length > 0) {
        var C = this._chartStore.getChart();
        l.forEach(function(b) {
          C.updatePane(1, b);
        }), C.updatePane(1, gt.X_AXIS);
      }
    }, e.prototype.setPressedInstanceInfo = function(r) {
      this._pressedInstanceInfo = r;
    }, e.prototype.getPressedInstanceInfo = function() {
      return this._pressedInstanceInfo;
    }, e.prototype.setHoverInstanceInfo = function(r, t) {
      var i, a, s = this._hoverInstanceInfo, l = s.instance, u = s.figureType, c = s.figureKey, h = s.figureIndex;
      if (((l == null ? void 0 : l.id) !== ((i = r.instance) === null || i === void 0 ? void 0 : i.id) || u !== r.figureType || h !== r.figureIndex) && (this._hoverInstanceInfo = r, (l == null ? void 0 : l.id) !== ((a = r.instance) === null || a === void 0 ? void 0 : a.id))) {
        var d = !1, v = !1;
        l !== null && (v = !0, On(l.onMouseLeave) && (l.onMouseLeave(Le({ overlay: l, figureKey: c, figureIndex: h }, t)), d = !0)), r.instance !== null && (v = !0, r.instance.setZLevel(yg), On(r.instance.onMouseEnter) && (r.instance.onMouseEnter(Le({ overlay: r.instance, figureKey: r.figureKey, figureIndex: r.figureIndex }, t)), d = !0)), v && this._sort(), d || this._chartStore.getChart().updatePane(
          1
          /* UpdateLevel.Overlay */
        );
      }
    }, e.prototype.getHoverInstanceInfo = function() {
      return this._hoverInstanceInfo;
    }, e.prototype.setClickInstanceInfo = function(r, t) {
      var i, a, s, l, u, c, h, d, v, m = this._clickInstanceInfo, y = m.paneId, C = m.instance, b = m.figureType, _ = m.figureKey, w = m.figureIndex;
      if ((a = (i = r.instance) === null || i === void 0 ? void 0 : i.isDrawing()) !== null && a !== void 0 && a || (l = (s = r.instance) === null || s === void 0 ? void 0 : s.onClick) === null || l === void 0 || l.call(s, Le({ overlay: r.instance, figureKey: r.figureKey, figureIndex: r.figureIndex }, t)), ((C == null ? void 0 : C.id) !== ((u = r.instance) === null || u === void 0 ? void 0 : u.id) || b !== r.figureType || w !== r.figureIndex) && (this._clickInstanceInfo = r, (C == null ? void 0 : C.id) !== ((c = r.instance) === null || c === void 0 ? void 0 : c.id))) {
        (h = C == null ? void 0 : C.onDeselected) === null || h === void 0 || h.call(C, Le({ overlay: C, figureKey: _, figureIndex: w }, t)), (v = (d = r.instance) === null || d === void 0 ? void 0 : d.onSelected) === null || v === void 0 || v.call(d, Le({ overlay: r.instance, figureKey: r.figureKey, figureIndex: r.figureIndex }, t));
        var T = this._chartStore.getChart();
        T.updatePane(1, r.paneId), y !== r.paneId && T.updatePane(1, y), T.updatePane(1, gt.X_AXIS);
      }
    }, e.prototype.getClickInstanceInfo = function() {
      return this._clickInstanceInfo;
    }, e.prototype.isEmpty = function() {
      return this._instances.size === 0 && this._progressInstanceInfo === null;
    }, e.prototype.isDrawing = function() {
      var r, t;
      return this._progressInstanceInfo !== null && ((t = (r = this._progressInstanceInfo) === null || r === void 0 ? void 0 : r.instance.isDrawing()) !== null && t !== void 0 ? t : !1);
    }, e;
  }()
), P8 = (
  /** @class */
  function() {
    function e() {
      this._actions = /* @__PURE__ */ new Map();
    }
    return e.prototype.execute = function(r, t) {
      var i;
      (i = this._actions.get(r)) === null || i === void 0 || i.execute(t);
    }, e.prototype.subscribe = function(r, t) {
      var i;
      this._actions.has(r) || this._actions.set(r, new dg()), (i = this._actions.get(r)) === null || i === void 0 || i.subscribe(t);
    }, e.prototype.unsubscribe = function(r, t) {
      var i = this._actions.get(r);
      pe(i) && (i.unsubscribe(t), i.isEmpty() && this._actions.delete(r));
    }, e.prototype.has = function(r) {
      var t = this._actions.get(r);
      return pe(t) && !t.isEmpty();
    }, e;
  }()
), I8 = {
  grid: {
    horizontal: {
      color: "#EDEDED"
    },
    vertical: {
      color: "#EDEDED"
    }
  },
  candle: {
    priceMark: {
      high: {
        color: "#76808F"
      },
      low: {
        color: "#76808F"
      }
    },
    tooltip: {
      rect: {
        color: "#FEFEFE",
        borderColor: "#F2F3F5"
      },
      text: {
        color: "#76808F"
      }
    }
  },
  indicator: {
    tooltip: {
      text: {
        color: "#76808F"
      }
    }
  },
  xAxis: {
    axisLine: {
      color: "#DDDDDD"
    },
    tickText: {
      color: "#76808F"
    },
    tickLine: {
      color: "#DDDDDD"
    }
  },
  yAxis: {
    axisLine: {
      color: "#DDDDDD"
    },
    tickText: {
      color: "#76808F"
    },
    tickLine: {
      color: "#DDDDDD"
    }
  },
  separator: {
    color: "#DDDDDD"
  },
  crosshair: {
    horizontal: {
      line: {
        color: "#76808F"
      },
      text: {
        borderColor: "#686D76",
        backgroundColor: "#686D76"
      }
    },
    vertical: {
      line: {
        color: "#76808F"
      },
      text: {
        borderColor: "#686D76",
        backgroundColor: "#686D76"
      }
    }
  }
}, A8 = {
  grid: {
    horizontal: {
      color: "#292929"
    },
    vertical: {
      color: "#292929"
    }
  },
  candle: {
    priceMark: {
      high: {
        color: "#929AA5"
      },
      low: {
        color: "#929AA5"
      }
    },
    tooltip: {
      rect: {
        color: "rgba(10, 10, 10, .6)",
        borderColor: "rgba(10, 10, 10, .6)"
      },
      text: {
        color: "#929AA5"
      }
    }
  },
  indicator: {
    tooltip: {
      text: {
        color: "#929AA5"
      }
    }
  },
  xAxis: {
    axisLine: {
      color: "#333333"
    },
    tickText: {
      color: "#929AA5"
    },
    tickLine: {
      color: "#333333"
    }
  },
  yAxis: {
    axisLine: {
      color: "#333333"
    },
    tickText: {
      color: "#929AA5"
    },
    tickLine: {
      color: "#333333"
    }
  },
  separator: {
    color: "#333333"
  },
  crosshair: {
    horizontal: {
      line: {
        color: "#929AA5"
      },
      text: {
        borderColor: "#373a40",
        backgroundColor: "#373a40"
      }
    },
    vertical: {
      line: {
        color: "#929AA5"
      },
      text: {
        borderColor: "#373a40",
        backgroundColor: "#373a40"
      }
    }
  }
}, $8 = {
  light: I8,
  dark: A8
};
function Z9(e) {
  var r;
  return (r = $8[e]) !== null && r !== void 0 ? r : null;
}
var T8 = (
  /** @class */
  function() {
    function e(r, t) {
      this._styles = cg(), this._customApi = mg(), this._locale = _g, this._precision = { price: 2, volume: 0 }, this._thousandsSeparator = ",", this._dataList = [], this._timeScaleStore = new wg(this), this._indicatorStore = new e8(this), this._overlayStore = new L8(this), this._tooltipStore = new t8(this), this._actionStore = new P8(), this._visibleDataList = [], this._chart = r, this.setOptions(t);
    }
    return e.prototype.adjustVisibleDataList = function() {
      this._visibleDataList = [];
      for (var r = this._timeScaleStore.getVisibleRange(), t = r.from, i = r.to, a = t; a < i; a++) {
        var s = this._dataList[a], l = this._timeScaleStore.dataIndexToCoordinate(a);
        this._visibleDataList.push({
          dataIndex: a,
          x: l,
          data: s
        });
      }
    }, e.prototype.setOptions = function(r) {
      if (pe(r)) {
        var t = r.locale, i = r.timezone, a = r.styles, s = r.customApi, l = r.thousandsSeparator;
        Ne(t) && (this._locale = t), Ne(i) && this._timeScaleStore.setTimezone(i), pe(a) && (Ne(a) ? nn(this._styles, Z9(a)) : nn(this._styles, a)), pe(s) && nn(this._customApi, s), Ne(l) && (this._thousandsSeparator = l);
      }
      return this;
    }, e.prototype.getStyles = function() {
      return this._styles;
    }, e.prototype.getLocale = function() {
      return this._locale;
    }, e.prototype.getCustomApi = function() {
      return this._customApi;
    }, e.prototype.getThousandsSeparator = function() {
      return this._thousandsSeparator;
    }, e.prototype.getPrecision = function() {
      return this._precision;
    }, e.prototype.setPrecision = function(r) {
      return this._precision = r, this._indicatorStore.setSeriesPrecision(r), this;
    }, e.prototype.getDataList = function() {
      return this._dataList;
    }, e.prototype.getVisibleDataList = function() {
      return this._visibleDataList;
    }, e.prototype.addData = function(r, t, i) {
      if (Dn(r)) {
        this._timeScaleStore.setLoading(!1), this._timeScaleStore.setMore(i ?? !0);
        var a = this._dataList.length === 0;
        this._dataList = r.concat(this._dataList), a && this._timeScaleStore.resetOffsetRightDistance(), this._timeScaleStore.adjustVisibleRange();
      } else {
        var s = this._dataList.length;
        if (t >= s) {
          this._dataList.push(r);
          var l = this._timeScaleStore.getLastBarRightSideDiffBarCount();
          l < 0 && this._timeScaleStore.setLastBarRightSideDiffBarCount(--l), this._timeScaleStore.adjustVisibleRange();
        } else
          this._dataList[t] = r, this.adjustVisibleDataList();
      }
      this._tooltipStore.recalculateCrosshair(!0);
    }, e.prototype.clear = function() {
      this._dataList = [], this._visibleDataList = [], this._timeScaleStore.clear(), this._tooltipStore.clear();
    }, e.prototype.getTimeScaleStore = function() {
      return this._timeScaleStore;
    }, e.prototype.getIndicatorStore = function() {
      return this._indicatorStore;
    }, e.prototype.getOverlayStore = function() {
      return this._overlayStore;
    }, e.prototype.getTooltipStore = function() {
      return this._tooltipStore;
    }, e.prototype.getActionStore = function() {
      return this._actionStore;
    }, e.prototype.getChart = function() {
      return this._chart;
    }, e;
  }()
), He = {
  MAIN: "main",
  X_AXIS: "xAxis",
  Y_AXIS: "yAxis",
  SEPARATOR: "separator"
}, Js = 7;
function U9(e) {
  var r = {
    width: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  return pe(e) && nn(r, e), r;
}
var K9 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i) {
      var a = e.call(this) || this;
      return a._bounding = U9(), a._pane = i, a.init(t), a;
    }
    return r.prototype.init = function(t) {
      this._rootContainer = t, this._container = this.createContainer(), t.appendChild(this._container);
    }, r.prototype.setBounding = function(t) {
      return nn(this._bounding, t), this;
    }, r.prototype.getContainer = function() {
      return this._container;
    }, r.prototype.getBounding = function() {
      return this._bounding;
    }, r.prototype.getPane = function() {
      return this._pane;
    }, r.prototype.update = function(t) {
      this.updateImp(
        this._container,
        this._bounding,
        t ?? 3
        /* UpdateLevel.Drawer */
      );
    }, r.prototype.destroy = function() {
      this._rootContainer.removeChild(this._container);
    }, r;
  }(Sf)
);
function nf(e) {
  return window.requestAnimationFrame == null ? window.setTimeout(e, 20) : window.requestAnimationFrame(e);
}
function s1(e) {
  window.cancelAnimationFrame == null && window.clearTimeout(e), window.cancelAnimationFrame(e);
}
var wo = -1, Lf = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t._mainRequestAnimationId = wo, t._overlayRequestAnimationId = wo, t;
    }
    return r.prototype.init = function(t) {
      e.prototype.init.call(this, t), this._mainCanvas = ri("canvas", {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "2",
        boxSizing: "border-box"
      }), this._mainCtx = this._mainCanvas.getContext("2d"), this._overlayCanvas = ri("canvas", {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "2",
        boxSizing: "border-box"
      }), this._overlayCtx = this._overlayCanvas.getContext("2d");
      var i = this.getContainer();
      i.appendChild(this._mainCanvas), i.appendChild(this._overlayCanvas);
    }, r.prototype.createContainer = function() {
      return ri("div", {
        margin: "0",
        padding: "0",
        position: "absolute",
        top: "0",
        overflow: "hidden",
        boxSizing: "border-box",
        zIndex: "1"
      });
    }, r.prototype._clearCanvas = function(t, i, a, s) {
      if (s.clearRect(0, 0, a.offsetWidth, a.offsetHeight), t !== a.offsetWidth || i !== a.offsetHeight) {
        var l = Ta(a), u = Math.round(t * l), c = Math.round(i * l);
        a.style.width = "".concat(t, "px"), a.style.height = "".concat(i, "px"), a.width = u, a.height = c, s.scale(l, l);
      }
    }, r.prototype._optimalUpdateMain = function(t, i) {
      var a = this;
      this._mainRequestAnimationId !== wo && (s1(this._mainRequestAnimationId), this._mainRequestAnimationId = wo), this._mainRequestAnimationId = nf(function() {
        a._clearCanvas(t, i, a._mainCanvas, a._mainCtx), a.updateMain(a._mainCtx);
      });
    }, r.prototype._optimalUpdateOverlay = function(t, i) {
      var a = this;
      this._overlayRequestAnimationId !== wo && (s1(this._overlayRequestAnimationId), this._overlayRequestAnimationId = wo), this._overlayRequestAnimationId = nf(function() {
        if (t !== a._overlayCanvas.offsetWidth || i !== a._overlayCanvas.offsetHeight) {
          a._overlayCtx.clearRect(0, 0, a._overlayCanvas.offsetWidth, a._overlayCanvas.offsetHeight);
          var s = Ta(a._overlayCanvas), l = Math.floor(t * s), u = Math.floor(i * s);
          a._overlayCanvas.style.width = "".concat(t, "px"), a._overlayCanvas.style.height = "".concat(i, "px"), a._overlayCanvas.width = l, a._overlayCanvas.height = u, a._overlayCtx.scale(s, s);
        } else
          a._overlayCtx.clearRect(0, 0, a._overlayCanvas.offsetWidth, a._overlayCanvas.offsetHeight);
        a.updateOverlay(a._overlayCtx);
      });
    }, r.prototype.updateImp = function(t, i, a) {
      var s = i.width, l = i.height, u = i.left;
      t.style.left = "".concat(u, "px");
      var c = a;
      switch ((s !== t.offsetWidth || l !== t.offsetHeight) && (t.style.width = "".concat(s, "px"), t.style.height = "".concat(l, "px"), c = 3), c) {
        case 0: {
          this._optimalUpdateMain(s, l);
          break;
        }
        case 1: {
          this._optimalUpdateOverlay(s, l);
          break;
        }
        case 3:
        case 4: {
          this._optimalUpdateMain(s, l), this._optimalUpdateOverlay(s, l);
          break;
        }
      }
    }, r.prototype.getImage = function(t) {
      var i = this.getBounding(), a = i.width, s = i.height, l = ri("canvas", {
        width: "".concat(a, "px"),
        height: "".concat(s, "px"),
        boxSizing: "border-box"
      }), u = l.getContext("2d"), c = Ta(l);
      return l.width = a * c, l.height = s * c, u.scale(c, c), u.drawImage(this._mainCanvas, 0, 0, a, s), t && u.drawImage(this._overlayCanvas, 0, 0, a, s), l;
    }, r;
  }(K9)
);
function M8(e) {
  return /^[rR][gG][Bb][Aa][\\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){3}[\s]*(1|1.0|0|0.[0-9])[\s]*[\\)]{1}$/.test(e);
}
function E8(e) {
  return /^[hH][Ss][Ll][Aa][\\(]([\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\s]*,)([\s]*((100|[0-9][0-9]?)%|0)[\s]*,){2}([\s]*(1|1.0|0|0.[0-9])[\s]*)[\\)]$/.test(e);
}
function Oo(e) {
  var r, t;
  return e === "transparent" || e === "none" || M8(e) && parseFloat(((r = e.match(/(\d(\.\d+)?)+/g)) !== null && r !== void 0 ? r : [])[3]) === 0 || E8(e) && parseFloat(((t = e.match(/(\d(\.\d+)?)+/g)) !== null && t !== void 0 ? t : [])[3]) === 0;
}
function H9(e, r) {
  var t = e.x - r.x, i = e.y - r.y, a = r.r;
  return !(t * t + i * i > a * a);
}
function G9(e, r, t) {
  var i = r.x, a = r.y, s = r.r, l = t.style, u = l === void 0 ? ut.Fill : l, c = t.color, h = c === void 0 ? "currentColor" : c, d = t.borderSize, v = d === void 0 ? 1 : d, m = t.borderColor, y = m === void 0 ? "currentColor" : m, C = t.borderStyle, b = C === void 0 ? mt.Solid : C, _ = t.borderDashedValue, w = _ === void 0 ? [2, 2] : _;
  (u === ut.Fill || t.style === ut.StrokeFill) && (!Ne(h) || !Oo(h)) && (e.fillStyle = h, e.beginPath(), e.arc(i, a, s, 0, Math.PI * 2), e.closePath(), e.fill()), (u === ut.Stroke || t.style === ut.StrokeFill) && v > 0 && !Oo(y) && (e.strokeStyle = y, e.lineWidth = v, b === mt.Dashed ? e.setLineDash(w) : e.setLineDash([]), e.beginPath(), e.arc(i, a, s, 0, Math.PI * 2), e.closePath(), e.stroke());
}
var D8 = {
  name: "circle",
  checkEventOn: H9,
  draw: function(e, r, t) {
    G9(e, r, t);
  }
};
function Q9(e, r) {
  for (var t = !1, i = r.coordinates, a = 0, s = i.length - 1; a < i.length; s = a++)
    i[a].y > e.y != i[s].y > e.y && e.x < (i[s].x - i[a].x) * (e.y - i[a].y) / (i[s].y - i[a].y) + i[a].x && (t = !t);
  return t;
}
function j9(e, r, t) {
  var i = r.coordinates, a = t.style, s = a === void 0 ? ut.Fill : a, l = t.color, u = l === void 0 ? "currentColor" : l, c = t.borderSize, h = c === void 0 ? 1 : c, d = t.borderColor, v = d === void 0 ? "currentColor" : d, m = t.borderStyle, y = m === void 0 ? mt.Solid : m, C = t.borderDashedValue, b = C === void 0 ? [2, 2] : C;
  if ((s === ut.Fill || t.style === ut.StrokeFill) && (!Ne(u) || !Oo(u))) {
    e.fillStyle = u, e.beginPath(), e.moveTo(i[0].x, i[0].y);
    for (var _ = 1; _ < i.length; _++)
      e.lineTo(i[_].x, i[_].y);
    e.closePath(), e.fill();
  }
  if ((s === ut.Stroke || t.style === ut.StrokeFill) && h > 0 && !Oo(v)) {
    e.strokeStyle = v, e.lineWidth = h, y === mt.Dashed ? e.setLineDash(b) : e.setLineDash([]), e.beginPath(), e.moveTo(i[0].x, i[0].y);
    for (var _ = 1; _ < i.length; _++)
      e.lineTo(i[_].x, i[_].y);
    e.closePath(), e.stroke();
  }
}
var F8 = {
  name: "polygon",
  checkEventOn: Q9,
  draw: function(e, r, t) {
    j9(e, r, t);
  }
};
function q9(e, r) {
  var t = r.x, i = r.width;
  i < cr * 2 && (t -= cr, i = cr * 2);
  var a = r.y, s = r.height;
  return s < cr * 2 && (a -= cr, s = cr * 2), e.x >= t && e.x <= t + i && e.y >= a && e.y <= a + s;
}
function Pf(e, r, t) {
  var i = r.x, a = r.y, s = r.width, l = r.height, u = t.style, c = u === void 0 ? ut.Fill : u, h = t.color, d = h === void 0 ? "transparent" : h, v = t.borderSize, m = v === void 0 ? 1 : v, y = t.borderColor, C = y === void 0 ? "transparent" : y, b = t.borderStyle, _ = b === void 0 ? mt.Solid : b, w = t.borderRadius, T = w === void 0 ? 0 : w, P = t.borderDashedValue, M = P === void 0 ? [2, 2] : P;
  (c === ut.Fill || t.style === ut.StrokeFill) && (!Ne(d) || !Oo(d)) && (e.fillStyle = d, e.beginPath(), e.moveTo(i + T, a), e.arcTo(i + s, a, i + s, a + l, T), e.arcTo(i + s, a + l, i, a + l, T), e.arcTo(i, a + l, i, a, T), e.arcTo(i, a, i + s, a, T), e.closePath(), e.fill()), (c === ut.Stroke || t.style === ut.StrokeFill) && m > 0 && !Oo(C) && (e.strokeStyle = C, e.lineWidth = m, _ === mt.Dashed ? e.setLineDash(M) : e.setLineDash([]), e.beginPath(), e.moveTo(i + T, a), e.arcTo(i + s, a, i + s, a + l, T), e.arcTo(i + s, a + l, i, a + l, T), e.arcTo(i, a + l, i, a, T), e.arcTo(i, a, i + s, a, T), e.closePath(), e.stroke());
}
var O8 = {
  name: "rect",
  checkEventOn: q9,
  draw: function(e, r, t) {
    Pf(e, r, t);
  }
};
function J9(e, r) {
  var t = r.size, i = t === void 0 ? 12 : t, a = r.paddingLeft, s = a === void 0 ? 0 : a, l = r.paddingTop, u = l === void 0 ? 0 : l, c = r.paddingRight, h = c === void 0 ? 0 : c, d = r.paddingBottom, v = d === void 0 ? 0 : d, m = r.weight, y = m === void 0 ? "normal" : m, C = r.family, b = e.x, _ = e.y, w = e.text, T = e.align, P = T === void 0 ? "left" : T, M = e.baseline, F = M === void 0 ? "top" : M, O = e.width, V = e.height, W = O ?? s + il(w, i, y, C) + h, N = V ?? u + i + v, Y;
  switch (P) {
    case "left":
    case "start": {
      Y = b;
      break;
    }
    case "right":
    case "end": {
      Y = b - W;
      break;
    }
    default: {
      Y = b - W / 2;
      break;
    }
  }
  var K;
  switch (F) {
    case "top":
    case "hanging": {
      K = _;
      break;
    }
    case "bottom":
    case "ideographic":
    case "alphabetic": {
      K = _ - N;
      break;
    }
    default: {
      K = _ - N / 2;
      break;
    }
  }
  return { x: Y, y: K, width: W, height: N };
}
function ed(e, r, t) {
  var i = J9(r, t), a = i.x, s = i.y, l = i.width, u = i.height;
  return e.x >= a && e.x <= a + l && e.y >= s && e.y <= s + u;
}
function If(e, r, t) {
  var i = r.text, a = t.color, s = a === void 0 ? "currentColor" : a, l = t.size, u = l === void 0 ? 12 : l, c = t.family, h = t.weight, d = t.paddingLeft, v = d === void 0 ? 0 : d, m = t.paddingTop, y = m === void 0 ? 0 : m, C = t.paddingRight, b = C === void 0 ? 0 : C, _ = J9(r, t);
  Pf(e, _, Le(Le({}, t), { color: t.backgroundColor })), e.textAlign = "left", e.textBaseline = "top", e.font = Ea(u, h, c), e.fillStyle = s, e.fillText(i, _.x + v, _.y + y, _.width - v - b);
}
var td = {
  name: "text",
  checkEventOn: function(e, r, t) {
    return ed(e, r, t);
  },
  draw: function(e, r, t) {
    If(e, r, t);
  }
}, R8 = td, B8 = If;
function N8(e, r) {
  var t = e.x - r.x, i = e.y - r.y;
  return Math.sqrt(t * t + i * i);
}
function rd(e, r) {
  if (Math.abs(N8(e, r) - r.r) < cr) {
    var t = r.r, i = r.startAngle, a = r.endAngle, s = t * Math.cos(i) + r.x, l = t * Math.sin(i) + r.y, u = t * Math.cos(a) + r.x, c = t * Math.sin(a) + r.y;
    return e.x <= Math.max(s, u) + cr && e.x >= Math.min(s, u) - cr && e.y <= Math.max(l, c) + cr && e.y >= Math.min(l, c) - cr;
  }
  return !1;
}
function nd(e, r, t) {
  var i = r.x, a = r.y, s = r.r, l = r.startAngle, u = r.endAngle, c = t.style, h = c === void 0 ? mt.Solid : c, d = t.size, v = d === void 0 ? 1 : d, m = t.color, y = m === void 0 ? "currentColor" : m, C = t.dashedValue, b = C === void 0 ? [2, 2] : C;
  e.lineWidth = v, e.strokeStyle = y, h === mt.Dashed ? e.setLineDash(b) : e.setLineDash([]), e.beginPath(), e.arc(i, a, s, l, u), e.stroke(), e.closePath();
}
var z8 = {
  name: "arc",
  checkEventOn: rd,
  draw: function(e, r, t) {
    nd(e, r, t);
  }
}, id = {}, V8 = [D8, l8, F8, O8, td, R8, z8];
V8.forEach(function(e) {
  id[e.name] = o8.extend(e);
});
function W8(e) {
  var r;
  return (r = id[e]) !== null && r !== void 0 ? r : null;
}
var oi = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t) {
      var i = e.call(this) || this;
      return i._widget = t, i;
    }
    return r.prototype.getWidget = function() {
      return this._widget;
    }, r.prototype.createFigure = function(t, i, a, s) {
      var l = W8(t);
      if (l !== null) {
        var u = new l({ name: t, attrs: i, styles: a });
        if (pe(s)) {
          for (var c in s)
            s.hasOwnProperty(c) && u.registerEvent(c, s[c]);
          this.addChild(u);
        }
        return u;
      }
      return null;
    }, r.prototype.draw = function(t) {
      this.clear(), this.drawImp(t);
    }, r;
  }(Sf)
), Y8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i = this, a = this.getWidget(), s = this.getWidget().getPane(), l = s.getChart(), u = a.getBounding(), c = l.getStyles().grid, h = c.show;
      if (h) {
        t.save(), t.globalCompositeOperation = "destination-over";
        var d = c.horizontal, v = d.show;
        if (v) {
          var m = s.getAxisComponent();
          m.getTicks().forEach(function(_) {
            var w;
            (w = i.createFigure("line", {
              coordinates: [
                { x: 0, y: _.coord },
                { x: u.width, y: _.coord }
              ]
            }, d)) === null || w === void 0 || w.draw(t);
          });
        }
        var y = c.vertical, C = y.show;
        if (C) {
          var b = l.getXAxisPane().getAxisComponent();
          b.getTicks().forEach(function(_) {
            var w;
            (w = i.createFigure("line", {
              coordinates: [
                { x: _.coord, y: 0 },
                { x: _.coord, y: u.height }
              ]
            }, y)) === null || w === void 0 || w.draw(t);
          });
        }
        t.restore();
      }
    }, r;
  }(oi)
);
function X8(e, r) {
  var t = 0;
  return function() {
    var i = Date.now();
    i - t > (r ?? 20) && (e.apply(this, arguments), t = i);
  };
}
function Af(e, r) {
  if (!On(e) || pe(r) && !On(r))
    throw new TypeError("Expected a function");
  var t = function() {
    for (var i = [], a = 0; a < arguments.length; a++)
      i[a] = arguments[a];
    var s = On(r) ? r.apply(this, i) : i[0], l = t.cache;
    if (l.has(s))
      return l.get(s);
    var u = e.apply(this, i);
    return t.cache = l.set(s, u) || l, u;
  };
  return t.cache = new (Af.Cache || Map)(), t;
}
Af.Cache = Map;
var $f = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.eachChildren = function(t) {
      var i = this.getWidget().getPane(), a = i.getChart().getChartStore(), s = a.getVisibleDataList(), l = a.getTimeScaleStore().getBarSpace();
      s.forEach(function(u, c) {
        t(u, l, c);
      });
    }, r;
  }(oi)
), ad = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t._boundCandleBarClickEvent = function(i) {
        return function() {
          return t.getWidget().getPane().getChart().getChartStore().getActionStore().execute(Cn.OnCandleBarClick, i), !1;
        };
      }, t._calcOhlcSize = Af(function(i) {
        return Math.min(Math.max(Math.round(i * 0.1), 1), 3);
      }), t;
    }
    return r.prototype.drawImp = function(t) {
      var i = this, a = this.getWidget().getPane(), s = a.getId() === gt.CANDLE, l = a.getChart().getChartStore(), u = this.getCandleBarOptions(l);
      if (u !== null) {
        var c = a.getAxisComponent();
        this.eachChildren(function(h, d) {
          i._drawCandleBar(t, c, h, d, u, s);
        });
      }
    }, r.prototype.getCandleBarOptions = function(t) {
      var i = t.getStyles().candle;
      return {
        type: i.type,
        styles: i.bar
      };
    }, r.prototype._drawCandleBar = function(t, i, a, s, l, u) {
      var c = this, h = a.data, d = a.x, v = h.open, m = h.high, y = h.low, C = h.close, b = s.halfGapBar, _ = s.gapBar, w = l.type, T = l.styles, P, M, F;
      C > v ? (P = T.upColor, M = T.upBorderColor, F = T.upWickColor) : C < v ? (P = T.downColor, M = T.downBorderColor, F = T.downWickColor) : (P = T.noChangeColor, M = T.noChangeBorderColor, F = T.noChangeWickColor);
      var O = i.convertToPixel(v), V = i.convertToPixel(C), W = [
        O,
        V,
        i.convertToPixel(m),
        i.convertToPixel(y)
      ];
      W.sort(function(G, q) {
        return G - q;
      });
      var N = Math.max(1, W[2] - W[1]), Y = [];
      if (w !== ti.Ohlc)
        Y.push({
          name: "rect",
          attrs: {
            x: d - 0.5,
            y: W[0],
            width: 1,
            height: W[1] - W[0]
          },
          styles: { color: F }
        }), w === ti.CandleStroke || w === ti.CandleUpStroke && v < C || w === ti.CandleDownStroke && v > C ? Y.push({
          name: "rect",
          attrs: {
            x: d - b + 0.5,
            y: W[1],
            width: _ - 1,
            height: N
          },
          styles: {
            style: ut.Stroke,
            borderColor: M
          }
        }) : Y.push({
          name: "rect",
          attrs: {
            x: d - b + 0.5,
            y: W[1],
            width: _ - 1,
            height: N
          },
          styles: {
            style: ut.StrokeFill,
            color: P,
            borderColor: M
          }
        }), Y.push({
          name: "rect",
          attrs: {
            x: d - 0.5,
            y: W[2],
            width: 1,
            height: W[3] - W[2]
          },
          styles: { color: F }
        });
      else {
        var K = this._calcOhlcSize(s.gapBar);
        Y = [
          {
            name: "rect",
            attrs: {
              x: d - K / 2,
              y: W[0],
              width: K,
              height: W[3] - W[0]
            },
            styles: { color: P }
          },
          {
            name: "rect",
            attrs: {
              x: d - b,
              y: O + K > W[3] ? W[3] - K : O,
              width: b - K / 2,
              height: K
            },
            styles: { color: P }
          },
          {
            name: "rect",
            attrs: {
              x: d + K / 2,
              y: V + K > W[3] ? W[3] - K : V,
              width: b - K / 2,
              height: K
            },
            styles: { color: P }
          }
        ];
      }
      Y.forEach(function(G) {
        var q, he = G.attrs, ge = G.styles, ve;
        u && (ve = {
          mouseClickEvent: c._boundCandleBarClickEvent(a)
        }), (q = c.createFigure("rect", he, ge, ve)) === null || q === void 0 || q.draw(t);
      });
    }, r;
  }($f)
), Z8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.getCandleBarOptions = function(t) {
      var i, a, s = this.getWidget().getPane(), l = s.getAxisComponent();
      if (!l.isInCandle()) {
        var u = t.getIndicatorStore().getInstances(s.getId());
        try {
          for (var c = Ma(u), h = c.next(); !h.done; h = c.next()) {
            var d = h.value;
            if (d.shouldOhlc && d.visible) {
              var v = d.styles, m = t.getStyles().indicator, y = Kt(v, "ohlc.upColor", m.ohlc.upColor), C = Kt(v, "ohlc.downColor", m.ohlc.downColor), b = Kt(v, "ohlc.noChangeColor", m.ohlc.noChangeColor);
              return {
                type: ti.Ohlc,
                styles: {
                  upColor: y,
                  downColor: C,
                  noChangeColor: b,
                  upBorderColor: y,
                  downBorderColor: C,
                  noChangeBorderColor: b,
                  upWickColor: y,
                  downWickColor: C,
                  noChangeWickColor: b
                }
              };
            }
          }
        } catch (_) {
          i = { error: _ };
        } finally {
          try {
            h && !h.done && (a = c.return) && a.call(c);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      return null;
    }, r.prototype.drawImp = function(t) {
      var i = this;
      e.prototype.drawImp.call(this, t);
      var a = this.getWidget(), s = a.getPane(), l = s.getChart(), u = a.getBounding(), c = l.getXAxisPane().getAxisComponent(), h = s.getAxisComponent(), d = l.getChartStore(), v = d.getDataList(), m = d.getTimeScaleStore(), y = m.getVisibleRange(), C = d.getIndicatorStore().getInstances(s.getId()), b = d.getStyles().indicator;
      t.save(), C.forEach(function(_) {
        var w;
        if (_.visible) {
          _.zLevel < 0 ? t.globalCompositeOperation = "destination-over" : t.globalCompositeOperation = "source-over";
          var T = !1;
          if (_.draw !== null && (t.save(), T = (w = _.draw({
            ctx: t,
            kLineDataList: v,
            indicator: _,
            visibleRange: y,
            bounding: u,
            barSpace: m.getBarSpace(),
            defaultStyles: b,
            xAxis: c,
            yAxis: h
          })) !== null && w !== void 0 ? w : !1, t.restore()), !T) {
            var P = _.result;
            i.eachChildren(function(M, F) {
              var O, V, W, N = F.halfGapBar, Y = F.gapBar, K = M.dataIndex, G = M.x, q = c.convertToPixel(K - 1), he = c.convertToPixel(K + 1), ge = (O = P[K - 1]) !== null && O !== void 0 ? O : {}, ve = (V = P[K]) !== null && V !== void 0 ? V : {}, De = (W = P[K + 1]) !== null && W !== void 0 ? W : {}, Oe = { x: q }, be = { x: G }, ye = { x: he };
              _.figures.forEach(function(de) {
                var We = de.key;
                Oe[We] = h.convertToPixel(ge[We]), be[We] = h.convertToPixel(ve[We]), ye[We] = h.convertToPixel(De[We]);
              }), Cf(v, _, K, b, function(de, We) {
                var Be, Tt, vt;
                if (pe(ve[de.key])) {
                  var pt = be[de.key], _t = (Be = de.attrs) === null || Be === void 0 ? void 0 : Be.call(de, {
                    coordinate: { prev: Oe, current: be, next: ye },
                    bounding: u,
                    barSpace: F,
                    xAxis: c,
                    yAxis: h
                  });
                  if (!pe(_t))
                    switch (de.type) {
                      case "circle": {
                        _t = { x: G, y: pt, r: N };
                        break;
                      }
                      case "rect":
                      case "bar": {
                        var wt = (Tt = de.baseValue) !== null && Tt !== void 0 ? Tt : h.getExtremum().min, Nt = h.convertToPixel(wt), yr = Math.abs(Nt - pt);
                        wt !== ve[de.key] && (yr = Math.max(1, yr));
                        var Mt = void 0;
                        pt > Nt ? Mt = Nt : Mt = pt, _t = {
                          x: G - N,
                          y: Mt,
                          width: Y,
                          height: yr
                        };
                        break;
                      }
                      case "line": {
                        Ae(be[de.key]) && Ae(ye[de.key]) && (_t = {
                          coordinates: [
                            { x: be.x, y: be[de.key] },
                            { x: ye.x, y: ye[de.key] }
                          ]
                        });
                        break;
                      }
                    }
                  if (pe(_t)) {
                    var Ht = de.type;
                    (vt = i.createFigure(Ht === "bar" ? "rect" : Ht, _t, We)) === null || vt === void 0 || vt.draw(t);
                  }
                }
              });
            });
          }
        }
      }), t.restore();
    }, r;
  }(ad)
), U8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i = this.getWidget(), a = i.getPane(), s = i.getBounding(), l = i.getPane().getChart().getChartStore(), u = l.getTooltipStore().getCrosshair(), c = l.getStyles().crosshair;
      if (Ne(u.paneId) && c.show) {
        if (u.paneId === a.getId()) {
          var h = u.y;
          this._drawLine(t, [
            { x: 0, y: h },
            { x: s.width, y: h }
          ], c.horizontal);
        }
        var d = u.realX;
        this._drawLine(t, [
          { x: d, y: 0 },
          { x: d, y: s.height }
        ], c.vertical);
      }
    }, r.prototype._drawLine = function(t, i, a) {
      var s;
      if (a.show) {
        var l = a.line;
        l.show && ((s = this.createFigure("line", { coordinates: i }, l)) === null || s === void 0 || s.draw(t));
      }
    }, r;
  }(oi)
), od = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t._boundIconClickEvent = function(i, a) {
        return function() {
          var s = t.getWidget().getPane();
          return s.getChart().getChartStore().getActionStore().execute(Cn.OnTooltipIconClick, Le(Le({}, i), { iconId: a })), !0;
        };
      }, t._boundIconMouseMoveEvent = function(i, a) {
        return function() {
          var s = t.getWidget().getPane(), l = s.getChart().getChartStore().getTooltipStore();
          return l.setActiveIcon(Le(Le({}, i), { iconId: a })), !0;
        };
      }, t;
    }
    return r.prototype.drawImp = function(t) {
      var i = this.getWidget(), a = i.getPane(), s = a.getChart().getChartStore(), l = s.getTooltipStore().getCrosshair();
      if (pe(l.kLineData)) {
        var u = i.getBounding(), c = s.getCustomApi(), h = s.getThousandsSeparator(), d = s.getIndicatorStore().getInstances(a.getId()), v = s.getTooltipStore().getActiveIcon(), m = s.getStyles().indicator;
        this.drawIndicatorTooltip(t, a.getId(), s.getDataList(), l, v, d, c, h, u, m);
      }
    }, r.prototype.drawIndicatorTooltip = function(t, i, a, s, l, u, c, h, d, v, m) {
      var y = this, C = v.tooltip, b = 0;
      if (this.isDrawTooltip(s, C)) {
        var _ = C.text, w = 0, T = m ?? 0, P = 0;
        u.forEach(function(M) {
          var F = y.getIndicatorTooltipData(a, s, M, c, h, v), O = F.name, V = F.calcParamsText, W = F.values, N = F.icons, Y = O.length > 0, K = W.length > 0;
          if (Y || K) {
            var G = wr(y.classifyTooltipIcons(N), 3), q = G[0], he = G[1], ge = G[2], ve = wr(y.drawStandardTooltipIcons(t, d, { paneId: i, indicatorName: M.name, iconId: "" }, l, q, w, T, P), 4), De = ve[0], Oe = ve[1], be = ve[2], ye = ve[3];
            if (w = De, T = Oe, b += ye, P = be, Y) {
              var de = O;
              V.length > 0 && (de = "".concat(de).concat(V));
              var We = wr(y.drawStandardTooltipLabels(t, d, [{ title: { text: "", color: _.color }, value: { text: de, color: _.color } }], w, T, P, _), 4), Be = We[0], Tt = We[1], vt = We[2], pt = We[3];
              w = Be, T = Tt, b += pt, P = vt;
            }
            var _t = wr(y.drawStandardTooltipIcons(t, d, { paneId: i, indicatorName: M.name, iconId: "" }, l, he, w, T, P), 4), wt = _t[0], Nt = _t[1], yr = _t[2], Mt = _t[3];
            if (w = wt, T = Nt, b += Mt, P = yr, K) {
              var Ht = wr(y.drawStandardTooltipLabels(t, d, W, w, T, P, _), 4), un = Ht[0], rr = Ht[1], Pr = Ht[2], Fr = Ht[3];
              w = un, T = rr, b += Fr, P = Pr;
            }
            var Ot = wr(y.drawStandardTooltipIcons(t, d, { paneId: i, indicatorName: M.name, iconId: "" }, l, ge, w, T, P), 4), mr = Ot[1], Ei = Ot[2], Ur = Ot[3];
            w = 0, b += Ur, T = mr + Ei, P = 0;
          }
        });
      }
      return b;
    }, r.prototype.drawStandardTooltipIcons = function(t, i, a, s, l, u, c, h) {
      var d = this, v = u, m = c, y = 0, C = 0, b = 0;
      return l.length > 0 && (l.forEach(function(_) {
        var w = _.marginLeft, T = _.marginTop, P = _.marginRight, M = _.marginBottom, F = _.paddingLeft, O = _.paddingTop, V = _.paddingRight, W = _.paddingBottom, N = _.size, Y = _.fontFamily, K = _.icon;
        t.font = Ea(N, "normal", Y), y += w + F + t.measureText(K).width + V + P, C = Math.max(C, T + O + N + W + M);
      }), v + y > i.width ? (v = l[0].marginLeft, m += h, b = C) : b = Math.max(0, C - h), l.forEach(function(_) {
        var w, T = _.marginLeft, P = _.marginTop, M = _.marginRight, F = _.paddingLeft, O = _.paddingTop, V = _.paddingRight, W = _.paddingBottom, N = _.color, Y = _.activeColor, K = _.size, G = _.fontFamily, q = _.icon, he = _.backgroundColor, ge = _.activeBackgroundColor;
        v += T;
        var ve = (s == null ? void 0 : s.paneId) === a.paneId && (s == null ? void 0 : s.indicatorName) === a.indicatorName && (s == null ? void 0 : s.iconId) === _.id;
        (w = d.createFigure("text", { text: q, x: v, y: m + P }, {
          paddingLeft: F,
          paddingTop: O,
          paddingRight: V,
          paddingBottom: W,
          color: ve ? Y : N,
          size: K,
          family: G,
          backgroundColor: ve ? ge : he
        }, {
          mouseClickEvent: d._boundIconClickEvent(a, _.id),
          mouseMoveEvent: d._boundIconMouseMoveEvent(a, _.id)
        })) === null || w === void 0 || w.draw(t), v += F + t.measureText(q).width + V + M;
      })), [v, m, Math.max(h, C), b];
    }, r.prototype.drawStandardTooltipLabels = function(t, i, a, s, l, u, c) {
      var h = this, d = s, v = l, m = 0, y = 0, C = u;
      if (a.length > 0) {
        var b = c.marginLeft, _ = c.marginTop, w = c.marginRight, T = c.marginBottom, P = c.size, M = c.family, F = c.weight;
        t.font = Ea(P, F, M), a.forEach(function(O) {
          var V, W, N = O.title, Y = O.value, K = t.measureText(N.text).width, G = t.measureText(Y.text).width, q = K + G, he = P + _ + T;
          d + b + q + w > i.width ? (d = b, v += he, y += he) : (d += b, y += Math.max(0, he - C)), m = Math.max(C, he), C = m, N.text.length > 0 && ((V = h.createFigure("text", { x: d, y: v + _, text: N.text }, { color: N.color, size: P, family: M, weight: F })) === null || V === void 0 || V.draw(t), d += K), (W = h.createFigure("text", { x: d, y: v + _, text: Y.text }, { color: Y.color, size: P, family: M, weight: F })) === null || W === void 0 || W.draw(t), d += G + w;
        });
      }
      return [d, v, m, y];
    }, r.prototype.isDrawTooltip = function(t, i) {
      var a = i.showRule;
      return a === Do.Always || a === Do.FollowCross && Ne(t.paneId);
    }, r.prototype.getIndicatorTooltipData = function(t, i, a, s, l, u) {
      var c, h, d = u.tooltip, v = d.showName ? a.shortName : "", m = "", y = a.calcParams;
      y.length > 0 && d.showParams && (m = "(".concat(y.join(","), ")"));
      var C = { name: v, calcParamsText: m, values: [], icons: d.icons }, b = i.dataIndex, _ = (c = a.result) !== null && c !== void 0 ? c : [], w = [];
      if (a.visible) {
        var T = (h = _[b]) !== null && h !== void 0 ? h : {};
        Cf(t, a, b, u, function(q, he) {
          if (Ne(q.title)) {
            var ge = he.color, ve = T[q.key];
            pe(ve) && (ve = er(ve, a.precision), a.shouldFormatBigNumber && (ve = s.formatBigNumber(ve))), w.push({ title: { text: q.title, color: ge }, value: { text: fr(ve ?? d.defaultValue, l), color: ge } });
          }
        }), C.values = w;
      }
      if (a.createTooltipDataSource !== null) {
        var P = this.getWidget(), M = P.getPane(), F = M.getChart().getChartStore(), O = a.createTooltipDataSource({
          kLineDataList: t,
          indicator: a,
          visibleRange: F.getTimeScaleStore().getVisibleRange(),
          bounding: P.getBounding(),
          crosshair: i,
          defaultStyles: u,
          xAxis: M.getChart().getXAxisPane().getAxisComponent(),
          yAxis: M.getAxisComponent()
        }), V = O.name, W = O.calcParamsText, N = O.values, Y = O.icons;
        if (Ne(V) && d.showName && (C.name = V), Ne(W) && d.showParams && (C.calcParamsText = W), pe(Y) && (C.icons = Y), pe(N) && a.visible) {
          var K = [], G = u.tooltip.text.color;
          N.forEach(function(q) {
            var he = { text: "", color: G };
            Fn(q.title) ? he = q.title : he.text = q.title;
            var ge = { text: "", color: G };
            Fn(q.value) ? ge = q.value : ge.text = q.value, ge.text = fr(ge.text, l), K.push({ title: he, value: ge });
          }), C.values = K;
        }
      }
      return C;
    }, r.prototype.classifyTooltipIcons = function(t) {
      var i = [], a = [], s = [];
      return t.forEach(function(l) {
        switch (l.position) {
          case Ii.Left: {
            i.push(l);
            break;
          }
          case Ii.Middle: {
            a.push(l);
            break;
          }
          case Ii.Right: {
            s.push(l);
            break;
          }
        }
      }), [i, a, s];
    }, r;
  }(oi)
), sd = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t) {
      var i = e.call(this, t) || this;
      return i._initEvent(), i;
    }
    return r.prototype._initEvent = function() {
      var t = this, i = this.getWidget().getPane(), a = i.getId(), s = i.getChart().getChartStore().getOverlayStore();
      this.registerEvent("mouseMoveEvent", function(l) {
        var u, c = s.getProgressInstanceInfo();
        if (c !== null) {
          var h = c.instance, d = c.paneId;
          h.isStart() && (s.updateProgressInstanceInfo(a), d = a);
          var v = h.points.length - 1, m = "".concat(So, "point_").concat(v);
          return h.isDrawing() && d === a && (h.eventMoveForDrawing(t._coordinateToPoint(c.instance, l)), (u = h.onDrawing) === null || u === void 0 || u.call(h, Le({ overlay: h, figureKey: m, figureIndex: v }, l))), t._figureMouseMoveEvent(h, 1, m, v, 0)(l);
        }
        return s.setHoverInstanceInfo({
          paneId: a,
          instance: null,
          figureType: 0,
          figureKey: "",
          figureIndex: -1,
          attrsIndex: -1
        }, l), !1;
      }).registerEvent("mouseClickEvent", function(l) {
        var u, c, h = s.getProgressInstanceInfo();
        if (h !== null) {
          var d = h.instance, v = h.paneId;
          d.isStart() && (s.updateProgressInstanceInfo(a, !0), v = a);
          var m = d.points.length - 1, y = "".concat(So, "point_").concat(m);
          return d.isDrawing() && v === a && (d.eventMoveForDrawing(t._coordinateToPoint(d, l)), (u = d.onDrawing) === null || u === void 0 || u.call(d, Le({ overlay: d, figureKey: y, figureIndex: m }, l)), d.nextStep(), d.isDrawing() || (s.progressInstanceComplete(), (c = d.onDrawEnd) === null || c === void 0 || c.call(d, Le({ overlay: d, figureKey: y, figureIndex: m }, l)))), t._figureMouseClickEvent(d, 1, y, m, 0)(l);
        }
        return s.setClickInstanceInfo({
          paneId: a,
          instance: null,
          figureType: 0,
          figureKey: "",
          figureIndex: -1,
          attrsIndex: -1
        }, l), !1;
      }).registerEvent("mouseDoubleClickEvent", function(l) {
        var u, c = s.getProgressInstanceInfo();
        if (c !== null) {
          var h = c.instance, d = c.paneId;
          if (h.isDrawing() && d === a && (h.forceComplete(), !h.isDrawing())) {
            s.progressInstanceComplete();
            var v = h.points.length - 1, m = "".concat(So, "point_").concat(v);
            (u = h.onDrawEnd) === null || u === void 0 || u.call(h, Le({ overlay: h, figureKey: m, figureIndex: v }, l));
          }
          var y = h.points.length - 1;
          return t._figureMouseDoubleClickEvent(h, 1, "".concat(So, "point_").concat(y), y, 0)(l);
        }
        return !1;
      }).registerEvent("mouseRightClickEvent", function(l) {
        var u = s.getProgressInstanceInfo();
        if (u !== null) {
          var c = u.instance;
          if (c.isDrawing()) {
            var h = c.points.length - 1;
            return t._figureMouseRightClickEvent(c, 1, "".concat(So, "point_").concat(h), h, 0)(l);
          }
        }
        return !1;
      }).registerEvent("mouseUpEvent", function(l) {
        var u, c = s.getPressedInstanceInfo(), h = c.instance, d = c.figureIndex, v = c.figureKey;
        return h !== null && ((u = h.onPressedMoveEnd) === null || u === void 0 || u.call(h, Le({ overlay: h, figureKey: v, figureIndex: d }, l))), s.setPressedInstanceInfo({
          paneId: a,
          instance: null,
          figureType: 0,
          figureKey: "",
          figureIndex: -1,
          attrsIndex: -1
        }), !1;
      }).registerEvent("pressedMouseMoveEvent", function(l) {
        var u, c, h = s.getPressedInstanceInfo(), d = h.instance, v = h.figureType, m = h.figureIndex, y = h.figureKey;
        if (d !== null) {
          if (!d.lock && !((c = (u = d.onPressedMoving) === null || u === void 0 ? void 0 : u.call(d, Le({ overlay: d, figureIndex: m, figureKey: y }, l))) !== null && c !== void 0 && c)) {
            var C = t._coordinateToPoint(d, l);
            if (v === 1)
              d.eventPressedPointMove(C, m);
            else {
              var b = t.getWidget().getPane(), _ = b.getChart().getChartStore().getDataList();
              d.eventPressedOtherMove(C, t.getWidget().getPane().getChart().getChartStore().getTimeScaleStore(), _);
            }
          }
          return !0;
        }
        return !1;
      });
    }, r.prototype._createFigureEvents = function(t, i, a, s, l, u) {
      var c;
      if (!t.isDrawing()) {
        var h = [];
        if (pe(u) && (aa(u) ? u && (h = pg()) : h = u), h.length === 0)
          return {
            mouseMoveEvent: this._figureMouseMoveEvent(t, i, a, s, l),
            mouseDownEvent: this._figureMouseDownEvent(t, i, a, s, l),
            mouseClickEvent: this._figureMouseClickEvent(t, i, a, s, l),
            mouseRightClickEvent: this._figureMouseRightClickEvent(t, i, a, s, l),
            mouseDoubleClickEvent: this._figureMouseDoubleClickEvent(t, i, a, s, l)
          };
        c = {}, !h.includes("mouseMoveEvent") && !h.includes("touchMoveEvent") && (c.mouseMoveEvent = this._figureMouseMoveEvent(t, i, a, s, l)), !h.includes("mouseDownEvent") && !h.includes("touchStartEvent") && (c.mouseDownEvent = this._figureMouseDownEvent(t, i, a, s, l)), !h.includes("mouseClickEvent") && !h.includes("tapEvent") && (c.mouseClickEvent = this._figureMouseClickEvent(t, i, a, s, l)), !h.includes("mouseDoubleClickEvent") && !h.includes("doubleTapEvent") && (c.mouseDoubleClickEvent = this._figureMouseDoubleClickEvent(t, i, a, s, l)), h.includes("mouseRightClickEvent") || (c.mouseRightClickEvent = this._figureMouseRightClickEvent(t, i, a, s, l));
      }
      return c;
    }, r.prototype._figureMouseMoveEvent = function(t, i, a, s, l) {
      var u = this;
      return function(c) {
        var h = u.getWidget().getPane(), d = h.getChart().getChartStore().getOverlayStore();
        return d.setHoverInstanceInfo({ paneId: h.getId(), instance: t, figureType: i, figureKey: a, figureIndex: s, attrsIndex: l }, c), !0;
      };
    }, r.prototype._figureMouseDownEvent = function(t, i, a, s, l) {
      var u = this;
      return function(c) {
        var h, d = u.getWidget().getPane(), v = d.getId(), m = d.getChart().getChartStore().getOverlayStore();
        return t.startPressedMove(u._coordinateToPoint(t, c)), (h = t.onPressedMoveStart) === null || h === void 0 || h.call(t, Le({ overlay: t, figureIndex: s, figureKey: a }, c)), m.setPressedInstanceInfo({ paneId: v, instance: t, figureType: i, figureKey: a, figureIndex: s, attrsIndex: l }), !0;
      };
    }, r.prototype._figureMouseClickEvent = function(t, i, a, s, l) {
      var u = this;
      return function(c) {
        var h = u.getWidget().getPane(), d = h.getId(), v = h.getChart().getChartStore().getOverlayStore();
        return v.setClickInstanceInfo({ paneId: d, instance: t, figureType: i, figureKey: a, figureIndex: s, attrsIndex: l }, c), !0;
      };
    }, r.prototype._figureMouseDoubleClickEvent = function(t, i, a, s, l) {
      return function(u) {
        var c;
        return (c = t.onDoubleClick) === null || c === void 0 || c.call(t, Le(Le({}, u), { figureIndex: s, figureKey: a, overlay: t })), !0;
      };
    }, r.prototype._figureMouseRightClickEvent = function(t, i, a, s, l) {
      var u = this;
      return function(c) {
        var h, d;
        if (!((d = (h = t.onRightClick) === null || h === void 0 ? void 0 : h.call(t, Le({ overlay: t, figureIndex: s, figureKey: a }, c))) !== null && d !== void 0 && d)) {
          var v = u.getWidget().getPane(), m = v.getChart().getChartStore().getOverlayStore();
          m.removeInstance(t);
        }
        return !0;
      };
    }, r.prototype._coordinateToPoint = function(t, i) {
      var a, s = {}, l = this.getWidget().getPane(), u = l.getChart(), c = l.getId(), h = u.getChartStore().getTimeScaleStore();
      if (this.coordinateToPointTimestampDataIndexFlag()) {
        var d = u.getXAxisPane().getAxisComponent(), v = d.convertFromPixel(i.x), m = (a = h.dataIndexToTimestamp(v)) !== null && a !== void 0 ? a : void 0, y = u.getChartStore().getDataList();
        if (m === void 0) {
          var C = v < 0 ? 0 : v > y.length - 1 ? y.length - 1 : v;
          s.timestamp = y[C].timestamp, s.dataIndex = C;
        } else
          s.dataIndex = v, s.timestamp = m;
      }
      if (this.coordinateToPointValueFlag()) {
        var b = l.getAxisComponent(), _ = b.convertFromPixel(i.y);
        if (t.mode !== Eo.Normal && c === gt.CANDLE && Ae(s.dataIndex)) {
          var w = h.getDataByDataIndex(s.dataIndex);
          if (w !== null) {
            var T = t.modeSensitivity;
            if (_ > w.high)
              if (t.mode === Eo.WeakMagnet) {
                var P = b.convertToPixel(w.high), M = b.convertFromPixel(P - T);
                _ < M && (_ = w.high);
              } else
                _ = w.high;
            else if (_ < w.low)
              if (t.mode === Eo.WeakMagnet) {
                var F = b.convertToPixel(w.low), M = b.convertFromPixel(F - T);
                _ > M && (_ = w.low);
              } else
                _ = w.low;
            else {
              var O = Math.max(w.open, w.close), V = Math.min(w.open, w.close);
              _ > O ? _ - O < w.high - _ ? _ = O : _ = w.high : _ < V ? _ - w.low < V - _ ? _ = w.low : _ = V : O - _ < _ - V ? _ = O : _ = V;
            }
          }
        }
        s.value = _;
      }
      return s;
    }, r.prototype.coordinateToPointValueFlag = function() {
      return !0;
    }, r.prototype.coordinateToPointTimestampDataIndexFlag = function() {
      return !0;
    }, r.prototype.dispatchEvent = function(t, i, a) {
      return this.getWidget().getPane().getChart().getChartStore().getOverlayStore().isDrawing() ? this.onEvent(t, i, a) : e.prototype.dispatchEvent.call(this, t, i, a);
    }, r.prototype.checkEventOn = function() {
      return !0;
    }, r.prototype.drawImp = function(t) {
      var i = this, a = this.getWidget(), s = a.getPane(), l = s.getId(), u = s.getChart(), c = s.getAxisComponent(), h = u.getXAxisPane().getAxisComponent(), d = a.getBounding(), v = u.getChartStore(), m = v.getCustomApi(), y = v.getThousandsSeparator(), C = v.getTimeScaleStore(), b = C.getDateTimeFormat(), _ = C.getBarSpace(), w = v.getPrecision(), T = v.getStyles().overlay, P = v.getOverlayStore(), M = P.getHoverInstanceInfo(), F = P.getClickInstanceInfo(), O = this.getCompleteOverlays(P, l);
      O.forEach(function(N) {
        N.visible && i._drawOverlay(t, N, d, _, w, b, m, y, T, h, c, M, F, C);
      });
      var V = P.getProgressInstanceInfo();
      if (V !== null) {
        var W = this.getProgressOverlay(V, l);
        W !== null && W.visible && this._drawOverlay(t, W, d, _, w, b, m, y, T, h, c, M, F, C);
      }
    }, r.prototype._drawOverlay = function(t, i, a, s, l, u, c, h, d, v, m, y, C, b) {
      var _ = i.points, w = _.map(function(P) {
        var M, F, O = P.dataIndex;
        Ae(P.timestamp) && (O = b.timestampToDataIndex(P.timestamp));
        var V = { x: 0, y: 0 };
        return Ae(O) && (V.x = (M = v == null ? void 0 : v.convertToPixel(O)) !== null && M !== void 0 ? M : 0), Ae(P.value) && (V.y = (F = m == null ? void 0 : m.convertToPixel(P.value)) !== null && F !== void 0 ? F : 0), V;
      });
      if (w.length > 0) {
        var T = new Array().concat(this.getFigures(i, w, a, s, l, h, u, d, v, m));
        this.drawFigures(t, i, T, d);
      }
      this.drawDefaultFigures(t, i, w, a, l, u, c, h, d, v, m, y, C);
    }, r.prototype.drawFigures = function(t, i, a, s) {
      var l = this;
      a.forEach(function(u, c) {
        var h = u.type, d = u.styles, v = u.attrs, m = u.ignoreEvent, y = [].concat(v);
        y.forEach(function(C, b) {
          var _, w, T, P = l._createFigureEvents(i, 2, (_ = u.key) !== null && _ !== void 0 ? _ : "", c, b, m), M = Le(Le(Le({}, s[h]), (w = i.styles) === null || w === void 0 ? void 0 : w[h]), d);
          (T = l.createFigure(h, C, M, P)) === null || T === void 0 || T.draw(t);
        });
      });
    }, r.prototype.getCompleteOverlays = function(t, i) {
      return t.getInstances(i);
    }, r.prototype.getProgressOverlay = function(t, i) {
      return t.paneId === i ? t.instance : null;
    }, r.prototype.getFigures = function(t, i, a, s, l, u, c, h, d, v) {
      var m, y;
      return (y = (m = t.createPointFigures) === null || m === void 0 ? void 0 : m.call(t, { overlay: t, coordinates: i, bounding: a, barSpace: s, precision: l, thousandsSeparator: u, dateTimeFormat: c, defaultStyles: h, xAxis: d, yAxis: v })) !== null && y !== void 0 ? y : [];
    }, r.prototype.drawDefaultFigures = function(t, i, a, s, l, u, c, h, d, v, m, y, C) {
      var b = this, _, w;
      if (i.needDefaultPointFigure && (((_ = y.instance) === null || _ === void 0 ? void 0 : _.id) === i.id && y.figureType !== 0 || ((w = C.instance) === null || w === void 0 ? void 0 : w.id) === i.id && C.figureType !== 0)) {
        var T = i.styles, P = Le(Le({}, d.point), T == null ? void 0 : T.point);
        a.forEach(function(M, F) {
          var O, V, W, N = M.x, Y = M.y, K = P.radius, G = P.color, q = P.borderColor, he = P.borderSize;
          ((O = y.instance) === null || O === void 0 ? void 0 : O.id) === i.id && y.figureType === 1 && y.figureIndex === F && (K = P.activeRadius, G = P.activeColor, q = P.activeBorderColor, he = P.activeBorderSize), (V = b.createFigure("circle", { x: N, y: Y, r: K + he }, { color: q }, b._createFigureEvents(i, 1, "".concat(So, "point_").concat(F), F, 0))) === null || V === void 0 || V.draw(t), (W = b.createFigure("circle", { x: N, y: Y, r: K }, { color: G })) === null || W === void 0 || W.draw(t);
        });
      }
    }, r;
  }(oi)
), ld = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i) {
      var a = e.call(this, t, i) || this;
      return a._gridView = new Y8(a), a._indicatorView = new Z8(a), a._crosshairLineView = new U8(a), a._tooltipView = a.createTooltipView(), a._overlayView = new sd(a), a.addChild(a._tooltipView), a.addChild(a._overlayView), a.getContainer().style.cursor = "crosshair", a.registerEvent("mouseMoveEvent", function() {
        return i.getChart().getChartStore().getTooltipStore().setActiveIcon(), !1;
      }), a;
    }
    return r.prototype.getName = function() {
      return He.MAIN;
    }, r.prototype.updateMain = function(t) {
      this.updateMainContent(t), this._indicatorView.draw(t), this._gridView.draw(t);
    }, r.prototype.createTooltipView = function() {
      return new od(this);
    }, r.prototype.updateMainContent = function(t) {
    }, r.prototype.updateOverlay = function(t) {
      this._overlayView.draw(t), this._crosshairLineView.draw(t), this._tooltipView.draw(t);
    }, r;
  }(Lf)
), K8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i, a, s = this.getWidget(), l = s.getPane(), u = l.getChart(), c = s.getBounding(), h = l.getAxisComponent(), d = u.getStyles().candle.area, v = [], m = [], y = Number.MAX_SAFE_INTEGER;
      this.eachChildren(function(M, F, O) {
        var V = M.data, W = M.x, N = F.halfGapBar, Y = V[d.value];
        if (Ae(Y)) {
          var K = h.convertToPixel(Y);
          if (O === 0) {
            var G = W - N;
            m.push({ x: G, y: c.height }), m.push({ x: G, y: K }), v.push({ x: G, y: K });
          }
          v.push({ x: W, y: K }), m.push({ x: W, y: K }), y = Math.min(y, K);
        }
      });
      var C = m.length;
      if (C > 0) {
        var b = m[C - 1], _ = b.x;
        v.push({ x: _, y: b.y }), m.push({ x: _, y: b.y }), m.push({ x: _, y: c.height });
      }
      if (v.length > 0 && ((i = this.createFigure("line", { coordinates: v }, {
        color: d.lineColor,
        size: d.lineSize
      })) === null || i === void 0 || i.draw(t)), m.length > 0) {
        var w = d.backgroundColor, T = void 0;
        if (Dn(w)) {
          var P = t.createLinearGradient(0, c.height, 0, y);
          try {
            w.forEach(function(M) {
              var F = M.offset, O = M.color;
              P.addColorStop(F, O);
            });
          } catch {
          }
          T = P;
        } else
          T = w;
        (a = this.createFigure("polygon", { coordinates: m }, { color: T })) === null || a === void 0 || a.draw(t);
      }
    }, r;
  }($f)
), H8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i = this.getWidget(), a = i.getPane(), s = a.getChart().getChartStore(), l = s.getStyles().candle.priceMark, u = l.high, c = l.low;
      if (l.show && (u.show || c.show)) {
        var h = s.getThousandsSeparator(), d = s.getPrecision(), v = a.getAxisComponent(), m = Number.MIN_SAFE_INTEGER, y = 0, C = Number.MAX_SAFE_INTEGER, b = 0;
        this.eachChildren(function(T) {
          var P = T.data, M = T.x;
          m < P.high && (m = P.high, y = M), C > P.low && (C = P.low, b = M);
        });
        var _ = v.convertToPixel(m), w = v.convertToPixel(C);
        u.show && m !== Number.MIN_SAFE_INTEGER && this._drawMark(t, fr(er(m, d.price), h), { x: y, y: _ }, _ < w ? [-2, -5] : [2, 5], u), c.show && C !== Number.MAX_SAFE_INTEGER && this._drawMark(t, fr(er(C, d.price), h), { x: b, y: w }, _ < w ? [2, 5] : [-2, -5], c);
      }
    }, r.prototype._drawMark = function(t, i, a, s, l) {
      var u, c, h, d = a.x, v = a.y + s[0];
      (u = this.createFigure("line", {
        coordinates: [
          { x: d - 2, y: v + s[0] },
          { x: d, y: v },
          { x: d + 2, y: v + s[0] }
        ]
      }, { color: l.color })) === null || u === void 0 || u.draw(t);
      var m, y, C, b = this.getWidget().getBounding().width;
      d > b / 2 ? (m = d - 5, y = m - l.textOffset, C = "right") : (m = d + 5, C = "left", y = m + l.textOffset);
      var _ = v + s[1];
      (c = this.createFigure("line", {
        coordinates: [
          { x: d, y: v },
          { x: d, y: _ },
          { x: m, y: _ }
        ]
      }, { color: l.color })) === null || c === void 0 || c.draw(t), (h = this.createFigure("text", {
        x: y,
        y: _,
        text: i,
        align: C,
        baseline: "middle"
      }, {
        color: l.color,
        size: l.textSize,
        family: l.textFamily,
        weight: l.textWeight
      })) === null || h === void 0 || h.draw(t);
    }, r;
  }($f)
), G8 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i, a = this.getWidget(), s = a.getPane(), l = a.getBounding(), u = s.getChart().getChartStore(), c = u.getStyles().candle.priceMark, h = c.last, d = h.line;
      if (c.show && h.show && d.show) {
        var v = s.getAxisComponent(), m = u.getDataList(), y = m[m.length - 1];
        if (y != null) {
          var C = y.close, b = y.open, _ = v.convertToNicePixel(C), w = void 0;
          C > b ? w = h.upColor : C < b ? w = h.downColor : w = h.noChangeColor, (i = this.createFigure("line", {
            coordinates: [
              { x: 0, y: _ },
              { x: l.width, y: _ }
            ]
          }, {
            style: d.style,
            color: w,
            size: d.size,
            dashedValue: d.dashedValue
          })) === null || i === void 0 || i.draw(t);
        }
      }
    }, r;
  }(oi)
), Q8 = {
  time: "时间：",
  open: "开：",
  high: "高：",
  low: "低：",
  close: "收：",
  volume: "成交量：",
  turnover: "成交额：",
  change: "涨幅："
}, j8 = {
  time: "Time: ",
  open: "Open: ",
  high: "High: ",
  low: "Low: ",
  close: "Close: ",
  volume: "Volume: ",
  turnover: "Turnover: ",
  change: "Change: "
}, q8 = {
  "zh-CN": Q8,
  "en-US": j8
};
function J8(e, r) {
  var t, i;
  return (i = (t = q8[r]) === null || t === void 0 ? void 0 : t[e]) !== null && i !== void 0 ? i : e;
}
var e7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i, a = this.getWidget(), s = a.getPane(), l = s.getId(), u = s.getChart().getChartStore(), c = u.getTooltipStore().getCrosshair();
      if (pe(c.kLineData)) {
        var h = a.getBounding(), d = (i = s.getYAxisWidget()) === null || i === void 0 ? void 0 : i.getBounding(), v = u.getDataList(), m = u.getPrecision(), y = u.getLocale(), C = u.getCustomApi(), b = u.getThousandsSeparator(), _ = u.getTooltipStore().getActiveIcon(), w = u.getIndicatorStore().getInstances(s.getId()), T = u.getTimeScaleStore().getDateTimeFormat(), P = u.getStyles(), M = P.candle, F = P.indicator;
        if (M.tooltip.showType === Jn.Rect && F.tooltip.showType === Jn.Rect) {
          var O = this.isDrawTooltip(c, M.tooltip), V = this.isDrawTooltip(c, F.tooltip);
          this._drawRectTooltip(t, v, w, h, d, c, m, T, y, C, b, O, V, P, 0);
        } else if (M.tooltip.showType === Jn.Standard && F.tooltip.showType === Jn.Standard) {
          var W = this._drawCandleStandardTooltip(t, v, l, h, c, _, m, T, y, C, b, M);
          this.drawIndicatorTooltip(t, l, v, c, _, w, C, b, h, F, W);
        } else if (M.tooltip.showType === Jn.Rect && F.tooltip.showType === Jn.Standard) {
          var N = this.drawIndicatorTooltip(t, l, v, c, _, w, C, b, h, F, 0), O = this.isDrawTooltip(c, M.tooltip);
          this._drawRectTooltip(t, v, w, h, d, c, m, T, y, C, b, O, !1, P, N);
        } else {
          var Y = this._drawCandleStandardTooltip(t, v, l, h, c, _, m, T, y, C, b, M), V = this.isDrawTooltip(c, F.tooltip);
          this._drawRectTooltip(t, v, w, h, d, c, m, T, y, C, b, !1, V, P, Y);
        }
      }
    }, r.prototype._drawCandleStandardTooltip = function(t, i, a, s, l, u, c, h, d, v, m, y) {
      var C, b, _, w = y.tooltip, T = w.text, P = 0;
      if (this.isDrawTooltip(l, w)) {
        var M = (C = l.dataIndex) !== null && C !== void 0 ? C : 0, F = this._getCandleTooltipData({ prev: (b = i[M - 1]) !== null && b !== void 0 ? b : null, current: l.kLineData, next: (_ = i[M + 1]) !== null && _ !== void 0 ? _ : null }, c, h, d, v, m, y), O = 0, V = 0, W = 0, N = wr(this.classifyTooltipIcons(w.icons), 3), Y = N[0], K = N[1], G = N[2], q = wr(this.drawStandardTooltipIcons(t, s, { paneId: a, indicatorName: "", iconId: "" }, u, Y, O, V, 0), 4), he = q[0], ge = q[1], ve = q[2], De = q[3];
        O = he, V = ge, P += De, W = ve;
        var Oe = wr(this.drawStandardTooltipIcons(t, s, { paneId: a, indicatorName: "", iconId: "" }, u, K, O, V, W), 4), be = Oe[0], ye = Oe[1], de = Oe[2], We = Oe[3];
        if (O = be, V = ye, P += We, W = de, F.length > 0) {
          var Be = wr(this.drawStandardTooltipLabels(t, s, F, O, V, W, T), 4), Tt = Be[0], vt = Be[1], pt = Be[2], _t = Be[3];
          O = Tt, V = vt, P += _t, W = pt;
        }
        var wt = wr(this.drawStandardTooltipIcons(t, s, { paneId: a, indicatorName: "", iconId: "" }, u, G, O, V, W), 4), Nt = wt[0], yr = wt[1], Mt = wt[2], Ht = wt[3];
        O = Nt, V = yr, P += Ht, W = Mt;
      }
      return P;
    }, r.prototype._drawRectTooltip = function(t, i, a, s, l, u, c, h, d, v, m, y, C, b, _) {
      var w = this, T, P, M, F, O, V = b.candle, W = b.indicator, N = V.tooltip, Y = W.tooltip;
      if (y || C) {
        var K = (T = u.dataIndex) !== null && T !== void 0 ? T : 0, G = this._getCandleTooltipData({ prev: (P = i[K - 1]) !== null && P !== void 0 ? P : null, current: u.kLineData, next: (M = i[K + 1]) !== null && M !== void 0 ? M : null }, c, h, d, v, m, V), q = N.text, he = q.marginLeft, ge = q.marginRight, ve = q.marginTop, De = q.marginBottom, Oe = q.size, be = q.weight, ye = q.family, de = N.rect, We = de.position, Be = de.paddingLeft, Tt = de.paddingRight, vt = de.paddingTop, pt = de.paddingBottom, _t = de.offsetLeft, wt = de.offsetRight, Nt = de.offsetTop, yr = de.offsetBottom, Mt = de.borderSize, Ht = de.borderRadius, un = de.borderColor, rr = de.color, Pr = 0, Fr = 0, Ot = 0;
        y && (t.font = Ea(Oe, be, ye), G.forEach(function(_r) {
          var dr = _r.title, xr = _r.value, Ir = "".concat(dr.text).concat(xr.text), Rr = t.measureText(Ir).width + he + ge;
          Pr = Math.max(Pr, Rr);
        }), Ot += (De + ve + Oe) * G.length);
        var mr = Y.text, Ei = mr.marginLeft, Ur = mr.marginRight, hr = mr.marginTop, Sn = mr.marginBottom, Kr = mr.size, Di = mr.weight, cn = mr.family, ua = [];
        if (C && (t.font = Ea(Kr, Di, cn), a.forEach(function(_r) {
          var dr, xr = (dr = w.getIndicatorTooltipData(i, u, _r, v, m, W).values) !== null && dr !== void 0 ? dr : [];
          ua.push(xr), xr.forEach(function(Ir) {
            var Rr = Ir.title, ci = Ir.value, Ho = "".concat(Rr.text).concat(ci.text), Go = t.measureText(Ho).width + Ei + Ur;
            Pr = Math.max(Pr, Go), Ot += hr + Sn + Kr;
          });
        })), Fr += Pr, Fr !== 0 && Ot !== 0) {
          Fr += Mt * 2 + Be + Tt, Ot += Mt * 2 + vt + pt;
          var zn = s.width / 2, fn = We === o1.Pointer && u.paneId === gt.CANDLE, ui = ((F = u.realX) !== null && F !== void 0 ? F : 0) > zn, ar = 0;
          if (fn) {
            var Fi = u.realX;
            ui ? ar = Fi - wt - Fr : ar = Fi + _t;
          } else
            ui ? (ar = _t, b.yAxis.inside && b.yAxis.position === sa.Left && (ar += l.width)) : (ar = s.width - wt - Fr, b.yAxis.inside && b.yAxis.position === sa.Right && (ar -= l.width));
          var Hr = _ + Nt;
          if (fn) {
            var Oi = u.y;
            Hr = Oi - Ot / 2, Hr + Ot > s.height - yr && (Hr = s.height - yr - Ot), Hr < _ + Nt && (Hr = _ + Nt);
          }
          (O = this.createFigure("rect", {
            x: ar,
            y: Hr,
            width: Fr,
            height: Ot
          }, {
            style: ut.StrokeFill,
            color: rr,
            borderColor: un,
            borderSize: Mt,
            borderRadius: Ht
          })) === null || O === void 0 || O.draw(t);
          var Ri = ar + Mt + Be + he, Or = Hr + Mt + vt;
          if (y && G.forEach(function(_r) {
            var dr, xr;
            Or += ve;
            var Ir = _r.title;
            (dr = w.createFigure("text", {
              x: Ri,
              y: Or,
              text: Ir.text
            }, {
              color: Ir.color,
              size: Oe,
              family: ye,
              weight: be
            })) === null || dr === void 0 || dr.draw(t);
            var Rr = _r.value;
            (xr = w.createFigure("text", {
              x: ar + Fr - Mt - ge - Tt,
              y: Or,
              text: Rr.text,
              align: "right"
            }, {
              color: Rr.color,
              size: Oe,
              family: ye,
              weight: be
            })) === null || xr === void 0 || xr.draw(t), Or += Oe + De;
          }), C) {
            var ca = ar + Mt + Be + Ei;
            ua.forEach(function(_r) {
              _r.forEach(function(dr) {
                var xr, Ir;
                Or += hr;
                var Rr = dr.title, ci = dr.value;
                (xr = w.createFigure("text", {
                  x: ca,
                  y: Or,
                  text: Rr.text
                }, {
                  color: Rr.color,
                  size: Kr,
                  family: cn,
                  weight: Di
                })) === null || xr === void 0 || xr.draw(t), (Ir = w.createFigure("text", {
                  x: ar + Fr - Mt - Ur - Tt,
                  y: Or,
                  text: ci.text,
                  align: "right"
                }, {
                  color: ci.color,
                  size: Kr,
                  family: cn,
                  weight: Di
                })) === null || Ir === void 0 || Ir.draw(t), Or += Kr + Sn;
              });
            });
          }
        }
      }
    }, r.prototype._getCandleTooltipData = function(t, i, a, s, l, u, c) {
      var h, d, v, m, y, C, b = c.tooltip, _ = b.text.color, w = t.current, T = (d = (h = t.prev) === null || h === void 0 ? void 0 : h.close) !== null && d !== void 0 ? d : w.close, P = w.close - T, M = i.price, F = i.volume, O = {
        "{time}": l.formatDate(a, w.timestamp, "YYYY-MM-DD HH:mm", Jt.Tooltip),
        "{open}": fr(er(w.open, M), u),
        "{high}": fr(er(w.high, M), u),
        "{low}": fr(er(w.low, M), u),
        "{close}": fr(er(w.close, M), u),
        "{volume}": fr(l.formatBigNumber(er((v = w.volume) !== null && v !== void 0 ? v : b.defaultValue, F)), u),
        "{turnover}": fr(er((m = w.turnover) !== null && m !== void 0 ? m : b.defaultValue, M), u),
        "{change}": T === 0 ? b.defaultValue : "".concat(er(P / T * 100), "%")
      }, V = (C = On(b.custom) ? (y = b.custom) === null || y === void 0 ? void 0 : y.call(b, t, c) : b.custom) !== null && C !== void 0 ? C : [
        { title: "time", value: "{time}" },
        { title: "open", value: "{open}" },
        { title: "high", value: "{high}" },
        { title: "low", value: "{low}" },
        { title: "close", value: "{close}" },
        { title: "volume", value: "{volume}" }
      ];
      return V.map(function(W) {
        var N, Y = W.title, K = W.value, G = { text: "", color: "" };
        Fn(Y) ? G = Le({}, Y) : (G.text = Y, G.color = _), G.text = J8(G.text, s);
        var q = { text: b.defaultValue, color: "" };
        Fn(K) ? q = Le({}, K) : (q.text = K, q.color = _);
        var he = q.text.match(/{(\S*)}/);
        if (he !== null && he.length > 1) {
          var ge = "{".concat(he[1], "}");
          q.text = q.text.replace(ge, (N = O[ge]) !== null && N !== void 0 ? N : b.defaultValue), ge === "{change}" && (q.color = P === 0 ? c.priceMark.last.noChangeColor : P > 0 ? c.priceMark.last.upColor : c.priceMark.last.downColor);
        }
        return { title: G, value: q };
      });
    }, r;
  }(od)
), t7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i) {
      var a = e.call(this, t, i) || this;
      return a._candleBarView = new ad(a), a._candleAreaView = new K8(a), a._candleHighLowPriceView = new H8(a), a._candleLastPriceLineView = new G8(a), a.addChild(a._candleBarView), a;
    }
    return r.prototype.updateMainContent = function(t) {
      var i = this.getPane().getChart().getStyles().candle;
      i.type !== ti.Area ? (this._candleBarView.draw(t), this._candleHighLowPriceView.draw(t)) : this._candleAreaView.draw(t), this._candleLastPriceLineView.draw(t);
    }, r.prototype.createTooltipView = function() {
      return new e7(this);
    }, r;
  }(ld)
), ud = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i = this, a, s = this.getWidget(), l = s.getPane(), u = s.getBounding(), c = l.getAxisComponent(), h = this.getAxisStyles(l.getChart().getStyles());
      if (h.show) {
        h.axisLine.show && ((a = this.createFigure("line", this.createAxisLine(u, h), h.axisLine)) === null || a === void 0 || a.draw(t));
        var d = c.getTicks();
        if (h.tickLine.show) {
          var v = this.createTickLines(d, u, h);
          v.forEach(function(y) {
            var C;
            (C = i.createFigure("line", y, h.tickLine)) === null || C === void 0 || C.draw(t);
          });
        }
        if (h.tickText.show) {
          var m = this.createTickTexts(d, u, h);
          m.forEach(function(y) {
            var C;
            (C = i.createFigure("text", y, h.tickText)) === null || C === void 0 || C.draw(t);
          });
        }
      }
    }, r;
  }(oi)
), r7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.getAxisStyles = function(t) {
      return t.yAxis;
    }, r.prototype.createAxisLine = function(t, i) {
      var a = this.getWidget().getPane().getAxisComponent(), s = i.axisLine.size, l;
      return a.isFromZero() ? l = s / 2 : l = t.width - s, {
        coordinates: [
          { x: l, y: 0 },
          { x: l, y: t.height }
        ]
      };
    }, r.prototype.createTickLines = function(t, i, a) {
      var s = this.getWidget().getPane().getAxisComponent(), l = a.axisLine, u = a.tickLine, c = 0, h = 0;
      return s.isFromZero() ? (c = 0, l.show && (c += l.size), h = c + u.length) : (c = i.width, l.show && (c -= l.size), h = c - u.length), t.map(function(d) {
        return {
          coordinates: [
            { x: c, y: d.coord },
            { x: h, y: d.coord }
          ]
        };
      });
    }, r.prototype.createTickTexts = function(t, i, a) {
      var s = this.getWidget().getPane().getAxisComponent(), l = a.axisLine, u = a.tickLine, c = a.tickText, h = 0;
      s.isFromZero() ? (h = c.marginStart, l.show && (h += l.size), u.show && (h += u.length)) : (h = i.width - c.marginEnd, l.show && (h -= l.size), u.show && (h -= u.length));
      var d = this.getWidget().getPane().getAxisComponent().isFromZero() ? "left" : "right";
      return t.map(function(v) {
        return {
          x: h,
          y: v.coord,
          text: v.text,
          align: d,
          baseline: "middle"
        };
      });
    }, r;
  }(ud)
), n7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i, a = this.getWidget(), s = a.getPane(), l = a.getBounding(), u = s.getChart().getChartStore(), c = u.getStyles().candle.priceMark, h = c.last, d = h.text;
      if (c.show && h.show && d.show) {
        var v = u.getPrecision(), m = s.getAxisComponent(), y = u.getDataList(), C = u.getVisibleDataList(), b = y[y.length - 1];
        if (pe(b)) {
          var _ = b.close, w = b.open, T = m.convertToNicePixel(_), P = void 0;
          _ > w ? P = h.upColor : _ < w ? P = h.downColor : P = h.noChangeColor;
          var M = void 0;
          if (m.getType() === pr.Percentage) {
            var F = C[0].data, O = F.close;
            M = "".concat(((_ - O) / O * 100).toFixed(2), "%");
          } else
            M = er(_, v.price);
          M = fr(M, u.getThousandsSeparator());
          var V = void 0, W = void 0;
          m.isFromZero() ? (V = 0, W = "left") : (V = l.width, W = "right"), (i = this.createFigure("text", {
            x: V,
            y: T,
            text: M,
            align: W,
            baseline: "middle"
          }, Le(Le({}, d), { backgroundColor: P }))) === null || i === void 0 || i.draw(t);
        }
      }
    }, r;
  }(oi)
), i7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i = this, a = this.getWidget(), s = a.getPane(), l = a.getBounding(), u = s.getChart().getChartStore(), c = u.getCustomApi(), h = u.getStyles().indicator, d = h.lastValueMark, v = d.text;
      if (d.show) {
        var m = s.getAxisComponent(), y = u.getDataList(), C = y.length - 1, b = u.getIndicatorStore().getInstances(s.getId()), _ = u.getThousandsSeparator();
        b.forEach(function(w) {
          var T = w.result, P = T[C];
          if (pe(P) && w.visible) {
            var M = w.precision;
            Cf(y, w, C, h, function(F, O) {
              var V, W = P[F.key];
              if (pe(W)) {
                var N = m.convertToNicePixel(W), Y = er(W, M);
                w.shouldFormatBigNumber && (Y = c.formatBigNumber(Y)), Y = fr(Y, _);
                var K = void 0, G = void 0;
                m.isFromZero() ? (K = 0, G = "left") : (K = l.width, G = "right"), (V = i.createFigure("text", {
                  x: K,
                  y: N,
                  text: Y,
                  align: G,
                  baseline: "middle"
                }, Le(Le({}, v), { backgroundColor: O.color }))) === null || V === void 0 || V.draw(t);
              }
            });
          }
        });
      }
    }, r;
  }(oi)
), cd = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.coordinateToPointTimestampDataIndexFlag = function() {
      return !1;
    }, r.prototype.drawDefaultFigures = function(t, i, a, s, l, u, c, h, d, v, m, y, C) {
      this.drawFigures(t, i, this.getDefaultFigures(i, a, s, l, u, c, h, v, m, C), d);
    }, r.prototype.getDefaultFigures = function(t, i, a, s, l, u, c, h, d, v) {
      var m, y, C = [];
      if (t.needDefaultYAxisFigure && t.id === ((m = v.instance) === null || m === void 0 ? void 0 : m.id) && v.paneId === this.getWidget().getPane().getId()) {
        var b = Number.MAX_SAFE_INTEGER, _ = Number.MIN_SAFE_INTEGER, w = (y = d == null ? void 0 : d.isFromZero()) !== null && y !== void 0 ? y : !1, T, P;
        w ? (T = "left", P = 0) : (T = "right", P = a.width), i.forEach(function(M, F) {
          var O = t.points[F];
          if (Ae(O.value)) {
            b = Math.min(b, M.y), _ = Math.max(_, M.y);
            var V = fr(er(O.value, s.price), c);
            C.push({ type: "text", attrs: { x: P, y: M.y, text: V, align: T, baseline: "middle" }, ignoreEvent: !0 });
          }
        }), i.length > 1 && C.unshift({ type: "rect", attrs: { x: 0, y: b, width: a.width, height: _ - b }, ignoreEvent: !0 });
      }
      return C;
    }, r.prototype.getFigures = function(t, i, a, s, l, u, c, h, d, v) {
      var m, y;
      return (y = (m = t.createYAxisFigures) === null || m === void 0 ? void 0 : m.call(t, { overlay: t, coordinates: i, bounding: a, barSpace: s, precision: l, thousandsSeparator: u, dateTimeFormat: c, defaultStyles: h, xAxis: d, yAxis: v })) !== null && y !== void 0 ? y : [];
    }, r;
  }(sd)
), fd = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.drawImp = function(t) {
      var i, a = this.getWidget(), s = a.getPane(), l = a.getBounding(), u = a.getPane().getChart().getChartStore(), c = u.getTooltipStore().getCrosshair(), h = u.getStyles().crosshair;
      if (Ne(c.paneId) && this.compare(c, s.getId()) && h.show) {
        var d = this.getDirectionStyles(h), v = d.text;
        if (d.show && v.show) {
          var m = s.getAxisComponent(), y = this.getText(c, u, m);
          t.font = Ea(v.size, v.weight, v.family), (i = this.createFigure("text", this.getTextAttrs(y, t.measureText(y).width, c, l, m, v), v)) === null || i === void 0 || i.draw(t);
        }
      }
    }, r.prototype.compare = function(t, i) {
      return t.paneId === i;
    }, r.prototype.getDirectionStyles = function(t) {
      return t.horizontal;
    }, r.prototype.getText = function(t, i, a) {
      var s, l, u = a, c = a.convertFromPixel(t.y), h;
      if (u.getType() === pr.Percentage) {
        var d = i.getVisibleDataList(), v = (l = (s = d[0]) === null || s === void 0 ? void 0 : s.data) !== null && l !== void 0 ? l : {};
        h = "".concat(((c - v.close) / v.close * 100).toFixed(2), "%");
      } else {
        var m = i.getIndicatorStore().getInstances(t.paneId), y = 0, C = !1;
        u.isInCandle() ? y = i.getPrecision().price : m.forEach(function(b) {
          y = Math.max(b.precision, y), C || (C = b.shouldFormatBigNumber);
        }), h = er(c, y), C && (h = i.getCustomApi().formatBigNumber(h));
      }
      return fr(h, i.getThousandsSeparator());
    }, r.prototype.getTextAttrs = function(t, i, a, s, l, u) {
      var c = l, h, d;
      return c.isFromZero() ? (h = 0, d = "left") : (h = s.width, d = "right"), { x: h, y: a.y, text: t, align: d, baseline: "middle" };
    }, r;
  }(oi)
), a7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i) {
      var a = e.call(this, t, i) || this;
      return a._yAxisView = new r7(a), a._candleLastPriceLabelView = new n7(a), a._indicatorLastValueView = new i7(a), a._overlayYAxisView = new cd(a), a._crosshairHorizontalLabelView = new fd(a), a.getContainer().style.cursor = "ns-resize", a.addChild(a._overlayYAxisView), a;
    }
    return r.prototype.getName = function() {
      return He.Y_AXIS;
    }, r.prototype.updateMain = function(t) {
      this._yAxisView.draw(t), this.getPane().getAxisComponent().isInCandle() && this._candleLastPriceLabelView.draw(t), this._indicatorLastValueView.draw(t);
    }, r.prototype.updateOverlay = function(t) {
      this._overlayYAxisView.draw(t), this._crosshairHorizontalLabelView.draw(t);
    }, r;
  }(Lf)
), hd = (
  /** @class */
  function() {
    function e(r) {
      this._extremum = { min: 0, max: 0, range: 0, realMin: 0, realMax: 0, realRange: 0 }, this._prevExtremum = { min: 0, max: 0, range: 0, realMin: 0, realMax: 0, realRange: 0 }, this._ticks = [], this._autoCalcTickFlag = !0, this._parent = r;
    }
    return e.prototype.getParent = function() {
      return this._parent;
    }, e.prototype.buildTicks = function(r) {
      return this._autoCalcTickFlag && (this._extremum = this.calcExtremum()), this._prevExtremum.min !== this._extremum.min || this._prevExtremum.max !== this._extremum.max || r ? (this._prevExtremum = this._extremum, this._ticks = this.optimalTicks(this._calcTicks()), !0) : !1;
    }, e.prototype.getTicks = function() {
      return this._ticks;
    }, e.prototype.getScrollZoomEnabled = function() {
      var r;
      return (r = this.getParent().getOptions().axisOptions.scrollZoomEnabled) !== null && r !== void 0 ? r : !0;
    }, e.prototype.setExtremum = function(r) {
      this._autoCalcTickFlag = !1, this._extremum = r;
    }, e.prototype.getExtremum = function() {
      return this._extremum;
    }, e.prototype.setAutoCalcTickFlag = function(r) {
      this._autoCalcTickFlag = r;
    }, e.prototype.getAutoCalcTickFlag = function() {
      return this._autoCalcTickFlag;
    }, e.prototype._calcTicks = function() {
      var r = this._extremum, t = r.realMin, i = r.realMax, a = r.realRange, s = [];
      if (a >= 0) {
        var l = wr(this._calcTickInterval(a), 2), u = l[0], c = l[1], h = e2(Math.ceil(t / u) * u, c), d = e2(Math.floor(i / u) * u, c), v = 0, m = h;
        if (u !== 0)
          for (; m <= d; ) {
            var y = m.toFixed(c);
            s[v] = { text: y, coord: 0, value: y }, ++v, m += u;
          }
      }
      return s;
    }, e.prototype._calcTickInterval = function(r) {
      var t = xg(r / 8), i = bg(t);
      return [t, i];
    }, e;
  }()
), o7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.calcExtremum = function() {
      var t, i, a, s, l, u = this.getParent(), c = u.getChart(), h = c.getChartStore(), d = Number.MAX_SAFE_INTEGER, v = Number.MIN_SAFE_INTEGER, m = [], y = !1, C = Number.MAX_SAFE_INTEGER, b = Number.MIN_SAFE_INTEGER, _ = Number.MAX_SAFE_INTEGER, w = h.getIndicatorStore().getInstances(u.getId());
      w.forEach(function(Be) {
        var Tt, vt, pt;
        y || (y = (Tt = Be.shouldOhlc) !== null && Tt !== void 0 ? Tt : !1), _ = Math.min(_, Be.precision), Be.minValue !== null && (C = Math.min(C, Be.minValue)), Be.maxValue !== null && (b = Math.max(b, Be.maxValue)), m.push({
          figures: (vt = Be.figures) !== null && vt !== void 0 ? vt : [],
          result: (pt = Be.result) !== null && pt !== void 0 ? pt : []
        });
      });
      var T = 4, P = this.isInCandle();
      if (P) {
        var M = h.getPrecision().price;
        _ !== Number.MAX_SAFE_INTEGER ? T = Math.min(_, M) : T = M;
      } else
        _ !== Number.MAX_SAFE_INTEGER && (T = _);
      var F = h.getVisibleDataList(), O = c.getStyles().candle, V = O.type === ti.Area, W = O.area.value, N = P && !V || !P && y;
      F.forEach(function(Be) {
        var Tt = Be.dataIndex, vt = Be.data;
        if (N && (d = Math.min(d, vt.low), v = Math.max(v, vt.high)), P && V) {
          var pt = vt[W];
          d = Math.min(d, pt), v = Math.max(v, pt);
        }
        m.forEach(function(_t) {
          var wt, Nt = _t.figures, yr = _t.result, Mt = (wt = yr[Tt]) !== null && wt !== void 0 ? wt : {};
          Nt.forEach(function(Ht) {
            var un = Mt[Ht.key];
            pe(un) && (d = Math.min(d, un), v = Math.max(v, un));
          });
        });
      }), d !== Number.MAX_SAFE_INTEGER && v !== Number.MIN_SAFE_INTEGER ? (d = Math.min(C, d), v = Math.max(b, v)) : (d = 0, v = 10);
      var Y = this.getType(), K;
      switch (Y) {
        case pr.Percentage: {
          var G = (t = F[0]) === null || t === void 0 ? void 0 : t.data;
          Ae(G == null ? void 0 : G.close) && (d = (d - G.close) / G.close * 100, v = (v - G.close) / G.close * 100), K = Math.pow(10, -2);
          break;
        }
        case pr.Log: {
          d = Ks(d), v = Ks(v), K = 0.05 * La(-T);
          break;
        }
        default:
          K = La(-T);
      }
      if (d === v || Math.abs(d - v) < K) {
        var q = C === d, he = b === v;
        d = q ? d : he ? d - 8 * K : d - 4 * K, v = he ? v : q ? v + 8 * K : v + 4 * K;
      }
      var ge = (a = (i = this.getParent().getYAxisWidget()) === null || i === void 0 ? void 0 : i.getBounding().height) !== null && a !== void 0 ? a : 0, ve = u.getOptions().gap, De = (s = ve == null ? void 0 : ve.top) !== null && s !== void 0 ? s : 0.2;
      De >= 1 && (De = De / ge);
      var Oe = (l = ve == null ? void 0 : ve.bottom) !== null && l !== void 0 ? l : 0.1;
      Oe >= 1 && (Oe = Oe / ge);
      var be = Math.abs(v - d);
      d = d - be * Oe, v = v + be * De, be = Math.abs(v - d);
      var ye, de, We;
      return Y === pr.Log ? (ye = La(d), de = La(v), We = Math.abs(de - ye)) : (ye = d, de = v, We = be), {
        min: d,
        max: v,
        range: be,
        realMin: ye,
        realMax: de,
        realRange: We
      };
    }, r.prototype._innerConvertToPixel = function(t) {
      var i, a, s = (a = (i = this.getParent().getYAxisWidget()) === null || i === void 0 ? void 0 : i.getBounding().height) !== null && a !== void 0 ? a : 0, l = this.getExtremum(), u = l.min, c = l.range, h = (t - u) / c;
      return this.isReverse() ? Math.round(h * s) : Math.round((1 - h) * s);
    }, r.prototype.isInCandle = function() {
      return this.getParent().getId() === gt.CANDLE;
    }, r.prototype.getType = function() {
      return this.isInCandle() ? this.getParent().getChart().getStyles().yAxis.type : pr.Normal;
    }, r.prototype.getPosition = function() {
      return this.getParent().getChart().getStyles().yAxis.position;
    }, r.prototype.isReverse = function() {
      return this.isInCandle() ? this.getParent().getChart().getStyles().yAxis.reverse : !1;
    }, r.prototype.isFromZero = function() {
      var t = this.getParent().getChart().getStyles().yAxis, i = t.inside;
      return t.position === sa.Left && i || t.position === sa.Right && !i;
    }, r.prototype.optimalTicks = function(t) {
      var i = this, a, s, l = this.getParent(), u = (s = (a = l.getYAxisWidget()) === null || a === void 0 ? void 0 : a.getBounding().height) !== null && s !== void 0 ? s : 0, c = l.getChart().getChartStore(), h = c.getCustomApi(), d = [], v = this.getType(), m = c.getIndicatorStore().getInstances(l.getId()), y = c.getThousandsSeparator(), C = 0, b = !1;
      this.isInCandle() ? C = c.getPrecision().price : m.forEach(function(T) {
        C = Math.max(C, T.precision), b || (b = T.shouldFormatBigNumber);
      });
      var _ = c.getStyles().xAxis.tickText.size, w;
      return t.forEach(function(T) {
        var P = T.value, M, F = i._innerConvertToPixel(+P);
        switch (v) {
          case pr.Percentage: {
            M = "".concat(er(P, 2), "%");
            break;
          }
          case pr.Log: {
            F = i._innerConvertToPixel(Ks(+P)), M = er(P, C);
            break;
          }
          default: {
            M = er(P, C), b && (M = h.formatBigNumber(P));
            break;
          }
        }
        M = fr(M, y);
        var O = Ae(w);
        F > _ && F < u - _ && (O && Math.abs(w - F) > _ * 2 || !O) && (d.push({ text: M, coord: F, value: P }), w = F);
      }), d;
    }, r.prototype.getAutoSize = function() {
      var t = this.getParent(), i = t.getChart(), a = i.getStyles(), s = a.yAxis, l = s.size;
      if (l !== "auto")
        return l;
      var u = i.getChartStore(), c = u.getCustomApi(), h = 0;
      if (s.show && (s.axisLine.show && (h += s.axisLine.size), s.tickLine.show && (h += s.tickLine.length), s.tickText.show)) {
        var d = 0;
        this.getTicks().forEach(function(M) {
          d = Math.max(d, il(M.text, s.tickText.size, s.tickText.weight, s.tickText.family));
        }), h += s.tickText.marginStart + s.tickText.marginEnd + d;
      }
      var v = a.crosshair, m = 0;
      if (v.show && v.horizontal.show && v.horizontal.text.show) {
        var y = u.getIndicatorStore().getInstances(t.getId()), C = 0, b = !1;
        y.forEach(function(M) {
          C = Math.max(M.precision, C), b || (b = M.shouldFormatBigNumber);
        });
        var _ = 2;
        if (this.getType() !== pr.Percentage)
          if (this.isInCandle()) {
            var w = u.getPrecision().price, T = a.indicator.lastValueMark;
            T.show && T.text.show ? _ = Math.max(C, w) : _ = w;
          } else
            _ = C;
        var P = er(this.getExtremum().max, _);
        b && (P = c.formatBigNumber(P)), m += v.horizontal.text.paddingLeft + v.horizontal.text.paddingRight + v.horizontal.text.borderSize * 2 + il(P, v.horizontal.text.size, v.horizontal.text.weight, v.horizontal.text.family);
      }
      return Math.max(h, m);
    }, r.prototype.convertFromPixel = function(t) {
      var i, a, s, l = (a = (i = this.getParent().getYAxisWidget()) === null || i === void 0 ? void 0 : i.getBounding().height) !== null && a !== void 0 ? a : 0, u = this.getExtremum(), c = u.min, h = u.range, d = this.isReverse() ? t / l : 1 - t / l, v = d * h + c;
      switch (this.getType()) {
        case pr.Percentage: {
          var m = this.getParent().getChart().getChartStore(), y = m.getVisibleDataList(), C = (s = y[0]) === null || s === void 0 ? void 0 : s.data;
          return Ae(C == null ? void 0 : C.close) ? C.close * v / 100 + C.close : 0;
        }
        case pr.Log:
          return La(v);
        default:
          return v;
      }
    }, r.prototype.convertToRealValue = function(t) {
      var i = t;
      return this.getType() === pr.Log && (i = La(t)), i;
    }, r.prototype.convertToPixel = function(t) {
      var i, a = t;
      switch (this.getType()) {
        case pr.Percentage: {
          var s = this.getParent().getChart().getChartStore(), l = s.getVisibleDataList(), u = (i = l[0]) === null || i === void 0 ? void 0 : i.data;
          Ae(u == null ? void 0 : u.close) && (a = (t - u.close) / u.close * 100);
          break;
        }
        case pr.Log: {
          a = Ks(t);
          break;
        }
        default:
          a = t;
      }
      return this._innerConvertToPixel(a);
    }, r.prototype.convertToNicePixel = function(t) {
      var i, a, s = (a = (i = this.getParent().getYAxisWidget()) === null || i === void 0 ? void 0 : i.getBounding().height) !== null && a !== void 0 ? a : 0, l = this.convertToPixel(t);
      return Math.round(Math.max(s * 0.05, Math.min(l, s * 0.98)));
    }, r;
  }(hd)
), dd = (
  /** @class */
  function() {
    function e(r, t, i, a) {
      this._bounding = U9(), this._chart = i, this._id = a, this._init(r, t);
    }
    return e.prototype._init = function(r, t) {
      this._rootContainer = r, this._container = ri("div", {
        width: "100%",
        margin: "0",
        padding: "0",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box"
      }), t !== null ? r.insertBefore(this._container, t) : r.appendChild(this._container);
    }, e.prototype.getContainer = function() {
      return this._container;
    }, e.prototype.getId = function() {
      return this._id;
    }, e.prototype.getChart = function() {
      return this._chart;
    }, e.prototype.getBounding = function() {
      return this._bounding;
    }, e.prototype.update = function(r) {
      this._bounding.height !== this._container.offsetHeight && (this._container.style.height = "".concat(this._bounding.height, "px")), this.updateImp(r ?? 3, this._container, this._bounding);
    }, e.prototype.destroy = function() {
      this._rootContainer.removeChild(this._container);
    }, e;
  }()
), vd = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i, a, s) {
      var l = e.call(this, t, i, a, s) || this;
      l._yAxisWidget = null, l._axis = l.createAxisComponent(), l._options = { minHeight: w8, dragEnabled: !0, gap: { top: 0.2, bottom: 0.1 }, axisOptions: { scrollZoomEnabled: !0 } };
      var u = l.getContainer();
      return l._mainWidget = l.createMainWidget(u), l._yAxisWidget = l.createYAxisWidget(u), l;
    }
    return r.prototype.setOptions = function(t) {
      var i, a, s;
      nn(this._options, t);
      var l, u;
      return this.getId() === gt.X_AXIS ? (l = this.getMainWidget().getContainer(), u = "ew-resize") : (l = (i = this.getYAxisWidget()) === null || i === void 0 ? void 0 : i.getContainer(), u = "ns-resize"), !((s = (a = t.axisOptions) === null || a === void 0 ? void 0 : a.scrollZoomEnabled) !== null && s !== void 0) || s ? l.style.cursor = u : l.style.cursor = "default", this;
    }, r.prototype.getOptions = function() {
      return this._options;
    }, r.prototype.getAxisComponent = function() {
      return this._axis;
    }, r.prototype.setBounding = function(t, i, a) {
      var s, l;
      nn(this.getBounding(), t);
      var u = {};
      return pe(t.height) && (u.height = t.height), pe(t.top) && (u.top = t.top), this._mainWidget.setBounding(u), (s = this._yAxisWidget) === null || s === void 0 || s.setBounding(u), pe(i) && this._mainWidget.setBounding(i), pe(a) && ((l = this._yAxisWidget) === null || l === void 0 || l.setBounding(a)), this;
    }, r.prototype.getMainWidget = function() {
      return this._mainWidget;
    }, r.prototype.getYAxisWidget = function() {
      return this._yAxisWidget;
    }, r.prototype.updateImp = function(t) {
      var i;
      this._mainWidget.update(t), (i = this._yAxisWidget) === null || i === void 0 || i.update(t);
    }, r.prototype.getImage = function(t) {
      var i = this.getBounding(), a = i.width, s = i.height, l = ri("canvas", {
        width: "".concat(a, "px"),
        height: "".concat(s, "px"),
        boxSizing: "border-box"
      }), u = l.getContext("2d"), c = Ta(l);
      l.width = a * c, l.height = s * c, u.scale(c, c);
      var h = this._mainWidget.getBounding();
      if (u.drawImage(this._mainWidget.getImage(t), h.left, 0, h.width, h.height), this._yAxisWidget !== null) {
        var d = this._yAxisWidget.getBounding();
        u.drawImage(this._yAxisWidget.getImage(t), d.left, 0, d.width, d.height);
      }
      return l;
    }, r.prototype.createYAxisWidget = function(t) {
      return null;
    }, r;
  }(dd)
), pd = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.createAxisComponent = function() {
      return new o7(this);
    }, r.prototype.createMainWidget = function(t) {
      return new ld(t, this);
    }, r.prototype.createYAxisWidget = function(t) {
      return new a7(t, this);
    }, r;
  }(vd)
), s7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.createMainWidget = function(t) {
      return new t7(t, this);
    }, r;
  }(pd)
), l7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.getAxisStyles = function(t) {
      return t.xAxis;
    }, r.prototype.createAxisLine = function(t, i) {
      var a = i.axisLine.size / 2;
      return {
        coordinates: [
          { x: 0, y: a },
          { x: t.width, y: a }
        ]
      };
    }, r.prototype.createTickLines = function(t, i, a) {
      var s = a.tickLine, l = a.axisLine.size;
      return t.map(function(u) {
        return {
          coordinates: [
            { x: u.coord, y: 0 },
            { x: u.coord, y: l + s.length }
          ]
        };
      });
    }, r.prototype.createTickTexts = function(t, i, a) {
      var s = a.tickText, l = a.axisLine.size, u = a.tickLine.length;
      return t.map(function(c) {
        return {
          x: c.coord,
          y: l + u + s.marginStart,
          text: c.text,
          align: "center",
          baseline: "top"
        };
      });
    }, r;
  }(ud)
), u7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.coordinateToPointTimestampDataIndexFlag = function() {
      return !0;
    }, r.prototype.coordinateToPointValueFlag = function() {
      return !1;
    }, r.prototype.getCompleteOverlays = function(t) {
      return t.getInstances();
    }, r.prototype.getProgressOverlay = function(t) {
      return t.instance;
    }, r.prototype.getDefaultFigures = function(t, i, a, s, l, u, c, h, d, v) {
      var m, y = [];
      if (t.needDefaultXAxisFigure && t.id === ((m = v.instance) === null || m === void 0 ? void 0 : m.id)) {
        var C = Number.MAX_SAFE_INTEGER, b = Number.MIN_SAFE_INTEGER;
        i.forEach(function(_, w) {
          C = Math.min(C, _.x), b = Math.max(b, _.x);
          var T = t.points[w];
          if (Ae(T.timestamp)) {
            var P = u.formatDate(l, T.timestamp, "YYYY-MM-DD HH:mm", Jt.Crosshair);
            y.push({ type: "text", attrs: { x: _.x, y: 0, text: P, align: "center" }, ignoreEvent: !0 });
          }
        }), i.length > 1 && y.unshift({ type: "rect", attrs: { x: C, y: 0, width: b - C, height: a.height }, ignoreEvent: !0 });
      }
      return y;
    }, r.prototype.getFigures = function(t, i, a, s, l, u, c, h, d, v) {
      var m, y;
      return (y = (m = t.createXAxisFigures) === null || m === void 0 ? void 0 : m.call(t, { overlay: t, coordinates: i, bounding: a, barSpace: s, precision: l, thousandsSeparator: u, dateTimeFormat: c, defaultStyles: h, xAxis: d, yAxis: v })) !== null && y !== void 0 ? y : [];
    }, r;
  }(cd)
), c7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.compare = function(t) {
      return pe(t.kLineData) && t.dataIndex === t.realDataIndex;
    }, r.prototype.getDirectionStyles = function(t) {
      return t.vertical;
    }, r.prototype.getText = function(t, i) {
      var a, s = (a = t.kLineData) === null || a === void 0 ? void 0 : a.timestamp;
      return i.getCustomApi().formatDate(i.getTimeScaleStore().getDateTimeFormat(), s, "YYYY-MM-DD HH:mm", Jt.Crosshair);
    }, r.prototype.getTextAttrs = function(t, i, a, s, l, u) {
      var c = a.realX, h, d = "center";
      return c - i / 2 - u.paddingLeft < 0 ? (h = 0, d = "left") : c + i / 2 + u.paddingRight > s.width ? (h = s.width, d = "right") : h = c, { x: h, y: 0, text: t, align: d, baseline: "top" };
    }, r;
  }(fd)
), f7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i) {
      var a = e.call(this, t, i) || this;
      return a._xAxisView = new l7(a), a._overlayXAxisView = new u7(a), a._crosshairVerticalLabelView = new c7(a), a.getContainer().style.cursor = "ew-resize", a.addChild(a._overlayXAxisView), a;
    }
    return r.prototype.getName = function() {
      return He.X_AXIS;
    }, r.prototype.updateMain = function(t) {
      this._xAxisView.draw(t);
    }, r.prototype.updateOverlay = function(t) {
      this._overlayXAxisView.draw(t), this._crosshairVerticalLabelView.draw(t);
    }, r;
  }(Lf)
), h7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.calcExtremum = function() {
      var t = this.getParent().getChart().getChartStore(), i = t.getTimeScaleStore().getVisibleRange(), a = i.from, s = i.to, l = a, u = s - 1, c = s - a;
      return {
        min: l,
        max: u,
        range: c,
        realMin: l,
        realMax: u,
        realRange: c
      };
    }, r.prototype.optimalTicks = function(t) {
      var i, a, s, l = this.getParent().getChart(), u = l.getChartStore(), c = u.getCustomApi().formatDate, h = [], d = t.length, v = u.getDataList();
      if (d > 0) {
        var m = u.getTimeScaleStore().getDateTimeFormat(), y = l.getStyles().xAxis.tickText, C = il("00-00 00:00", y.size, y.weight, y.family), b = parseInt(t[0].value, 10), _ = this.convertToPixel(b), w = 1;
        if (d > 1) {
          var T = parseInt(t[1].value, 10), P = this.convertToPixel(T), M = Math.abs(P - _);
          M < C && (w = Math.ceil(C / M));
        }
        for (var F = 0; F < d; F += w) {
          var O = parseInt(t[F].value, 10), V = v[O], W = V.timestamp, N = c(m, W, "HH:mm", Jt.XAxis);
          if (F !== 0) {
            var Y = parseInt(t[F - w].value, 10), K = v[Y], G = K.timestamp;
            N = (i = this._optimalTickLabel(c, m, W, G)) !== null && i !== void 0 ? i : N;
          }
          var q = this.convertToPixel(O);
          if (h.push({ text: N, coord: q, value: W }), h.length > 2 && F === d - 1 * w)
            for (var he = h[h.length - 1], ge = Number(he.value) - Number(h[h.length - 2].value), ve = he.coord - h[h.length - 2].coord, De = 10, Oe = 0, be = 1; be < De; be += 1)
              Oe = Number(he.value) + Number(be * ge), h.push({
                text: (a = this._optimalTickLabel(c, m, Oe, Number(he.value))) !== null && a !== void 0 ? a : N,
                coord: he.coord + be * ve,
                value: Number(he.value) + Number(be * ge)
              });
        }
        var ye = h.length;
        if (ye === 1)
          h[0].text = c(m, h[0].value, "YYYY-MM-DD HH:mm", Jt.XAxis);
        else {
          var de = h[0].value, We = h[1].value;
          if (pe(h[2])) {
            var Be = h[2].text;
            /^[0-9]{2}-[0-9]{2}$/.test(Be) ? h[0].text = c(m, de, "MM-DD", Jt.XAxis) : /^[0-9]{4}-[0-9]{2}$/.test(Be) ? h[0].text = c(m, de, "YYYY-MM", Jt.XAxis) : /^[0-9]{4}$/.test(Be) && (h[0].text = c(m, de, "YYYY", Jt.XAxis));
          } else
            h[0].text = (s = this._optimalTickLabel(c, m, de, We)) !== null && s !== void 0 ? s : h[0].text;
        }
      }
      return h;
    }, r.prototype._optimalTickLabel = function(t, i, a, s) {
      var l = t(i, a, "YYYY", Jt.XAxis), u = t(i, a, "YYYY-MM", Jt.XAxis), c = t(i, a, "MM-DD", Jt.XAxis);
      return l !== t(i, s, "YYYY", Jt.XAxis) ? l : u !== t(i, s, "YYYY-MM", Jt.XAxis) ? u : c !== t(i, s, "MM-DD", Jt.XAxis) ? c : null;
    }, r.prototype.getAutoSize = function() {
      var t = this.getParent().getChart().getStyles(), i = t.xAxis, a = i.size;
      if (a !== "auto")
        return a;
      var s = t.crosshair, l = 0;
      i.show && (i.axisLine.show && (l += i.axisLine.size), i.tickLine.show && (l += i.tickLine.length), i.tickText.show && (l += i.tickText.marginStart + i.tickText.marginEnd + i.tickText.size));
      var u = 0;
      return s.show && s.vertical.show && s.vertical.text.show && (u += s.vertical.text.paddingTop + s.vertical.text.paddingBottom + s.vertical.text.borderSize * 2 + s.vertical.text.size), Math.max(l, u);
    }, r.prototype.convertTimestampFromPixel = function(t) {
      var i = this.getParent().getChart().getChartStore().getTimeScaleStore(), a = i.coordinateToDataIndex(t);
      return i.dataIndexToTimestamp(a);
    }, r.prototype.convertTimestampToPixel = function(t) {
      var i = this.getParent().getChart().getChartStore().getTimeScaleStore(), a = i.timestampToDataIndex(t);
      return i.dataIndexToCoordinate(a);
    }, r.prototype.convertFromPixel = function(t) {
      return this.getParent().getChart().getChartStore().getTimeScaleStore().coordinateToDataIndex(t);
    }, r.prototype.convertToPixel = function(t) {
      return this.getParent().getChart().getChartStore().getTimeScaleStore().dataIndexToCoordinate(t);
    }, r;
  }(hd)
), d7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype.createAxisComponent = function() {
      return new h7(this);
    }, r.prototype.createMainWidget = function(t) {
      return new f7(t, this);
    }, r;
  }(vd)
), v7 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i) {
      var a = e.call(this, t, i) || this;
      return a._dragFlag = !1, a._dragStartY = 0, a._topPaneHeight = 0, a._bottomPaneHeight = 0, a._pressedMouseMoveEvent = X8(a._pressedTouchMouseMoveEvent, 20), a.registerEvent("touchStartEvent", a._mouseDownEvent.bind(a)).registerEvent("touchMoveEvent", a._pressedMouseMoveEvent.bind(a)).registerEvent("touchEndEvent", a._mouseUpEvent.bind(a)).registerEvent("mouseDownEvent", a._mouseDownEvent.bind(a)).registerEvent("mouseUpEvent", a._mouseUpEvent.bind(a)).registerEvent("pressedMouseMoveEvent", a._pressedMouseMoveEvent.bind(a)).registerEvent("mouseEnterEvent", a._mouseEnterEvent.bind(a)).registerEvent("mouseLeaveEvent", a._mouseLeaveEvent.bind(a)), a;
    }
    return r.prototype.getName = function() {
      return He.SEPARATOR;
    }, r.prototype.checkEventOn = function() {
      return !0;
    }, r.prototype._mouseDownEvent = function(t) {
      this._dragFlag = !0, this._dragStartY = t.pageY;
      var i = this.getPane();
      return this._topPaneHeight = i.getTopPane().getBounding().height, this._bottomPaneHeight = i.getBottomPane().getBounding().height, !0;
    }, r.prototype._mouseUpEvent = function() {
      return this._dragFlag = !1, this._mouseLeaveEvent();
    }, r.prototype._pressedTouchMouseMoveEvent = function(t) {
      var i = t.pageY - this._dragStartY, a = this.getPane(), s = a.getTopPane(), l = a.getBottomPane(), u = i < 0;
      if (s !== null && l !== null && l.getOptions().dragEnabled) {
        var c = void 0, h = void 0, d = void 0, v = void 0;
        u ? (c = s, h = l, d = this._topPaneHeight, v = this._bottomPaneHeight) : (c = l, h = s, d = this._bottomPaneHeight, v = this._topPaneHeight);
        var m = c.getOptions().minHeight;
        if (d > m) {
          var y = Math.max(d - Math.abs(i), m), C = d - y;
          c.setBounding({ height: y }), h.setBounding({ height: v + C });
          var b = a.getChart();
          b.getChartStore().getActionStore().execute(Cn.OnPaneDrag, { paneId: a.getId }), b.adjustPaneViewport(!0, !0, !0, !0, !0);
        }
      }
      return !0;
    }, r.prototype._mouseEnterEvent = function() {
      var t, i = this.getPane(), a = i.getBottomPane();
      if ((t = a == null ? void 0 : a.getOptions().dragEnabled) !== null && t !== void 0 && t) {
        var s = i.getChart(), l = s.getStyles().separator;
        return this.getContainer().style.background = l.activeBackgroundColor, !0;
      }
      return !1;
    }, r.prototype._mouseLeaveEvent = function() {
      return this._dragFlag ? !1 : (this.getContainer().style.background = "", !0);
    }, r.prototype.createContainer = function() {
      return ri("div", {
        width: "100%",
        height: "".concat(Js, "px"),
        margin: "0",
        padding: "0",
        position: "absolute",
        top: "-3px",
        zIndex: "20",
        boxSizing: "border-box",
        cursor: "ns-resize"
      });
    }, r.prototype.updateImp = function(t, i, a) {
      if (a === 4 || a === 2) {
        var s = this.getPane().getChart().getStyles().separator;
        t.style.top = "".concat(-Math.floor((Js - s.size) / 2), "px"), t.style.height = "".concat(Js, "px");
      }
    }, r;
  }(K9)
), i2 = (
  /** @class */
  function(e) {
    Ge(r, e);
    function r(t, i, a, s, l, u) {
      var c = e.call(this, t, i, a, s) || this;
      return c.getContainer().style.overflow = "", c._topPane = l, c._bottomPane = u, c._separatorWidget = new v7(c.getContainer(), c), c;
    }
    return r.prototype.setBounding = function(t) {
      return nn(this.getBounding(), t), this;
    }, r.prototype.getTopPane = function() {
      return this._topPane;
    }, r.prototype.setTopPane = function(t) {
      return this._topPane = t, this;
    }, r.prototype.getBottomPane = function() {
      return this._bottomPane;
    }, r.prototype.setBottomPane = function(t) {
      return this._bottomPane = t, this;
    }, r.prototype.getWidget = function() {
      return this._separatorWidget;
    }, r.prototype.getImage = function(t) {
      var i = this.getBounding(), a = i.width, s = i.height, l = this.getChart().getStyles().separator, u = ri("canvas", {
        width: "".concat(a, "px"),
        height: "".concat(s, "px"),
        boxSizing: "border-box"
      }), c = u.getContext("2d"), h = Ta(u);
      return u.width = a * h, u.height = s * h, c.scale(h, h), c.fillStyle = l.color, c.fillRect(0, 0, a, s), u;
    }, r.prototype.updateImp = function(t, i, a) {
      if (t === 4 || t === 2) {
        var s = this.getChart().getStyles().separator;
        i.style.backgroundColor = s.color, i.style.height = "".concat(a.height, "px"), i.style.marginLeft = "".concat(a.left, "px"), i.style.width = "".concat(a.width, "px"), this._separatorWidget.update(t);
      }
    }, r;
  }(dd)
);
function a2() {
  var e;
  return typeof window > "u" ? !1 : ((e = window.navigator.userAgent.toLowerCase().indexOf("firefox")) !== null && e !== void 0 ? e : -1) > -1;
}
function Kc() {
  return typeof window > "u" ? !1 : /iPhone|iPad|iPod/.test(window.navigator.platform);
}
var p7 = 10, g7 = (
  /** @class */
  function() {
    function e(r, t, i) {
      var a = this;
      this._clickCount = 0, this._clickTimeoutId = null, this._clickCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY }, this._tapCount = 0, this._tapTimeoutId = null, this._tapCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY }, this._longTapTimeoutId = null, this._longTapActive = !1, this._mouseMoveStartCoordinate = null, this._touchMoveStartCoordinate = null, this._touchMoveExceededManhattanDistance = !1, this._cancelClick = !1, this._cancelTap = !1, this._unsubscribeOutsideMouseEvents = null, this._unsubscribeOutsideTouchEvents = null, this._unsubscribeMobileSafariEvents = null, this._unsubscribeMousemove = null, this._unsubscribeMouseWheel = null, this._unsubscribeContextMenu = null, this._unsubscribeRootMouseEvents = null, this._unsubscribeRootTouchEvents = null, this._startPinchMiddleCoordinate = null, this._startPinchDistance = 0, this._pinchPrevented = !1, this._preventTouchDragProcess = !1, this._mousePressed = !1, this._lastTouchEventTimeStamp = 0, this._activeTouchId = null, this._acceptMouseLeave = !Kc(), this._onFirefoxOutsideMouseUp = function(s) {
        a._mouseUpHandler(s);
      }, this._onMobileSafariDoubleClick = function(s) {
        if (a._firesTouchEvents(s)) {
          if (++a._tapCount, a._tapTimeoutId !== null && a._tapCount > 1) {
            var l = a._mouseTouchMoveWithDownInfo(a._getCoordinate(s), a._tapCoordinate).manhattanDistance;
            l < 30 && !a._cancelTap && a._processEvent(a._makeCompatEvent(s), a._handler.doubleTapEvent), a._resetTapTimeout();
          }
        } else if (++a._clickCount, a._clickTimeoutId !== null && a._clickCount > 1) {
          var l = a._mouseTouchMoveWithDownInfo(a._getCoordinate(s), a._clickCoordinate).manhattanDistance;
          l < 5 && !a._cancelClick && a._processEvent(a._makeCompatEvent(s), a._handler.mouseDoubleClickEvent), a._resetClickTimeout();
        }
      }, this._target = r, this._handler = t, this._options = i, this._init();
    }
    return e.prototype.destroy = function() {
      this._unsubscribeOutsideMouseEvents !== null && (this._unsubscribeOutsideMouseEvents(), this._unsubscribeOutsideMouseEvents = null), this._unsubscribeOutsideTouchEvents !== null && (this._unsubscribeOutsideTouchEvents(), this._unsubscribeOutsideTouchEvents = null), this._unsubscribeMousemove !== null && (this._unsubscribeMousemove(), this._unsubscribeMousemove = null), this._unsubscribeMouseWheel !== null && (this._unsubscribeMouseWheel(), this._unsubscribeMouseWheel = null), this._unsubscribeContextMenu !== null && (this._unsubscribeContextMenu(), this._unsubscribeContextMenu = null), this._unsubscribeRootMouseEvents !== null && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), this._unsubscribeRootTouchEvents !== null && (this._unsubscribeRootTouchEvents(), this._unsubscribeRootTouchEvents = null), this._unsubscribeMobileSafariEvents !== null && (this._unsubscribeMobileSafariEvents(), this._unsubscribeMobileSafariEvents = null), this._clearLongTapTimeout(), this._resetClickTimeout();
    }, e.prototype._mouseEnterHandler = function(r) {
      var t = this, i, a, s;
      (i = this._unsubscribeMousemove) === null || i === void 0 || i.call(this), (a = this._unsubscribeMouseWheel) === null || a === void 0 || a.call(this), (s = this._unsubscribeContextMenu) === null || s === void 0 || s.call(this);
      var l = this._mouseMoveHandler.bind(this);
      this._unsubscribeMousemove = function() {
        t._target.removeEventListener("mousemove", l);
      }, this._target.addEventListener("mousemove", l);
      var u = this._mouseWheelHandler.bind(this);
      this._unsubscribeMouseWheel = function() {
        t._target.removeEventListener("wheel", u);
      }, this._target.addEventListener("wheel", u, { passive: !1 });
      var c = this._contextMenuHandler.bind(this);
      this._unsubscribeContextMenu = function() {
        t._target.removeEventListener("contextmenu", c);
      }, this._target.addEventListener("contextmenu", c, { passive: !1 }), !this._firesTouchEvents(r) && (this._processEvent(this._makeCompatEvent(r), this._handler.mouseEnterEvent), this._acceptMouseLeave = !0);
    }, e.prototype._resetClickTimeout = function() {
      this._clickTimeoutId !== null && clearTimeout(this._clickTimeoutId), this._clickCount = 0, this._clickTimeoutId = null, this._clickCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    }, e.prototype._resetTapTimeout = function() {
      this._tapTimeoutId !== null && clearTimeout(this._tapTimeoutId), this._tapCount = 0, this._tapTimeoutId = null, this._tapCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    }, e.prototype._mouseMoveHandler = function(r) {
      this._mousePressed || this._touchMoveStartCoordinate !== null || this._firesTouchEvents(r) || (this._processEvent(this._makeCompatEvent(r), this._handler.mouseMoveEvent), this._acceptMouseLeave = !0);
    }, e.prototype._mouseWheelHandler = function(r) {
      if (Math.abs(r.deltaX) > Math.abs(r.deltaY)) {
        if (!pe(this._handler.mouseWheelHortEvent) || (this._preventDefault(r), Math.abs(r.deltaX) === 0))
          return;
        this._handler.mouseWheelHortEvent(this._makeCompatEvent(r), -r.deltaX);
      } else {
        if (!pe(this._handler.mouseWheelVertEvent))
          return;
        var t = -(r.deltaY / 100);
        if (t === 0)
          return;
        switch (this._preventDefault(r), r.deltaMode) {
          case r.DOM_DELTA_PAGE:
            t *= 120;
            break;
          case r.DOM_DELTA_LINE:
            t *= 32;
            break;
        }
        if (t !== 0) {
          var i = Math.sign(t) * Math.min(1, Math.abs(t));
          this._handler.mouseWheelVertEvent(this._makeCompatEvent(r), i);
        }
      }
    }, e.prototype._contextMenuHandler = function(r) {
      this._preventDefault(r);
    }, e.prototype._touchMoveHandler = function(r) {
      var t = this._touchWithId(r.changedTouches, this._activeTouchId);
      if (t !== null && (this._lastTouchEventTimeStamp = this._eventTimeStamp(r), this._startPinchMiddleCoordinate === null && !this._preventTouchDragProcess)) {
        this._pinchPrevented = !0;
        var i = this._mouseTouchMoveWithDownInfo(this._getCoordinate(t), this._touchMoveStartCoordinate), a = i.xOffset, s = i.yOffset, l = i.manhattanDistance;
        if (!(!this._touchMoveExceededManhattanDistance && l < 5)) {
          if (!this._touchMoveExceededManhattanDistance) {
            var u = a * 0.5, c = s >= u && !this._options.treatVertDragAsPageScroll(), h = u > s && !this._options.treatHorzDragAsPageScroll();
            !c && !h && (this._preventTouchDragProcess = !0), this._touchMoveExceededManhattanDistance = !0, this._cancelTap = !0, this._clearLongTapTimeout(), this._resetTapTimeout();
          }
          this._preventTouchDragProcess || this._processEvent(this._makeCompatEvent(r, t), this._handler.touchMoveEvent);
        }
      }
    }, e.prototype._mouseMoveWithDownHandler = function(r) {
      if (r.button === 0) {
        var t = this._mouseTouchMoveWithDownInfo(this._getCoordinate(r), this._mouseMoveStartCoordinate), i = t.manhattanDistance;
        i >= 5 && (this._cancelClick = !0, this._resetClickTimeout()), this._cancelClick && this._processEvent(this._makeCompatEvent(r), this._handler.pressedMouseMoveEvent);
      }
    }, e.prototype._mouseTouchMoveWithDownInfo = function(r, t) {
      var i = Math.abs(t.x - r.x), a = Math.abs(t.y - r.y), s = i + a;
      return { xOffset: i, yOffset: a, manhattanDistance: s };
    }, e.prototype._touchEndHandler = function(r) {
      var t = this._touchWithId(r.changedTouches, this._activeTouchId);
      if (t === null && r.touches.length === 0 && (t = r.changedTouches[0]), t !== null) {
        this._activeTouchId = null, this._lastTouchEventTimeStamp = this._eventTimeStamp(r), this._clearLongTapTimeout(), this._touchMoveStartCoordinate = null, this._unsubscribeRootTouchEvents !== null && (this._unsubscribeRootTouchEvents(), this._unsubscribeRootTouchEvents = null);
        var i = this._makeCompatEvent(r, t);
        if (this._processEvent(i, this._handler.touchEndEvent), ++this._tapCount, this._tapTimeoutId !== null && this._tapCount > 1) {
          var a = this._mouseTouchMoveWithDownInfo(this._getCoordinate(t), this._tapCoordinate).manhattanDistance;
          a < 30 && !this._cancelTap && this._processEvent(i, this._handler.doubleTapEvent), this._resetTapTimeout();
        } else
          this._cancelTap || (this._processEvent(i, this._handler.tapEvent), pe(this._handler.tapEvent) && this._preventDefault(r));
        this._tapCount === 0 && this._preventDefault(r), r.touches.length === 0 && this._longTapActive && (this._longTapActive = !1, this._preventDefault(r));
      }
    }, e.prototype._mouseUpHandler = function(r) {
      if (r.button === 0) {
        var t = this._makeCompatEvent(r);
        if (this._mouseMoveStartCoordinate = null, this._mousePressed = !1, this._unsubscribeRootMouseEvents !== null && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), a2()) {
          var i = this._target.ownerDocument.documentElement;
          i.removeEventListener("mouseleave", this._onFirefoxOutsideMouseUp);
        }
        if (!this._firesTouchEvents(r))
          if (this._processEvent(t, this._handler.mouseUpEvent), ++this._clickCount, this._clickTimeoutId !== null && this._clickCount > 1) {
            var a = this._mouseTouchMoveWithDownInfo(this._getCoordinate(r), this._clickCoordinate).manhattanDistance;
            a < 5 && !this._cancelClick && this._processEvent(t, this._handler.mouseDoubleClickEvent), this._resetClickTimeout();
          } else
            this._cancelClick || this._processEvent(t, this._handler.mouseClickEvent);
      }
    }, e.prototype._clearLongTapTimeout = function() {
      this._longTapTimeoutId !== null && (clearTimeout(this._longTapTimeoutId), this._longTapTimeoutId = null);
    }, e.prototype._touchStartHandler = function(r) {
      if (this._activeTouchId === null) {
        var t = r.changedTouches[0];
        this._activeTouchId = t.identifier, this._lastTouchEventTimeStamp = this._eventTimeStamp(r);
        var i = this._target.ownerDocument.documentElement;
        this._cancelTap = !1, this._touchMoveExceededManhattanDistance = !1, this._preventTouchDragProcess = !1, this._touchMoveStartCoordinate = this._getCoordinate(t), this._unsubscribeRootTouchEvents !== null && (this._unsubscribeRootTouchEvents(), this._unsubscribeRootTouchEvents = null);
        {
          var a = this._touchMoveHandler.bind(this), s = this._touchEndHandler.bind(this);
          this._unsubscribeRootTouchEvents = function() {
            i.removeEventListener("touchmove", a), i.removeEventListener("touchend", s);
          }, i.addEventListener("touchmove", a, { passive: !1 }), i.addEventListener("touchend", s, { passive: !1 }), this._clearLongTapTimeout(), this._longTapTimeoutId = setTimeout(
            this._longTapHandler.bind(this, r),
            500
            /* Delay.LongTap */
          );
        }
        this._processEvent(this._makeCompatEvent(r, t), this._handler.touchStartEvent), this._tapTimeoutId === null && (this._tapCount = 0, this._tapTimeoutId = setTimeout(
          this._resetTapTimeout.bind(this),
          500
          /* Delay.ResetClick */
        ), this._tapCoordinate = this._getCoordinate(t));
      }
    }, e.prototype._mouseDownHandler = function(r) {
      if (r.button === 2) {
        this._preventDefault(r), this._processEvent(this._makeCompatEvent(r), this._handler.mouseRightClickEvent);
        return;
      }
      if (r.button === 0) {
        var t = this._target.ownerDocument.documentElement;
        a2() && t.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp), this._cancelClick = !1, this._mouseMoveStartCoordinate = this._getCoordinate(r), this._unsubscribeRootMouseEvents !== null && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null);
        {
          var i = this._mouseMoveWithDownHandler.bind(this), a = this._mouseUpHandler.bind(this);
          this._unsubscribeRootMouseEvents = function() {
            t.removeEventListener("mousemove", i), t.removeEventListener("mouseup", a);
          }, t.addEventListener("mousemove", i), t.addEventListener("mouseup", a);
        }
        this._mousePressed = !0, !this._firesTouchEvents(r) && (this._processEvent(this._makeCompatEvent(r), this._handler.mouseDownEvent), this._clickTimeoutId === null && (this._clickCount = 0, this._clickTimeoutId = setTimeout(
          this._resetClickTimeout.bind(this),
          500
          /* Delay.ResetClick */
        ), this._clickCoordinate = this._getCoordinate(r)));
      }
    }, e.prototype._init = function() {
      var r = this;
      this._target.addEventListener("mouseenter", this._mouseEnterHandler.bind(this)), this._target.addEventListener("touchcancel", this._clearLongTapTimeout.bind(this));
      {
        var t = this._target.ownerDocument, i = function(a) {
          r._handler.mouseDownOutsideEvent != null && (a.composed && r._target.contains(a.composedPath()[0]) || a.target !== null && r._target.contains(a.target) || r._handler.mouseDownOutsideEvent({ x: 0, y: 0, pageX: 0, pageY: 0 }));
        };
        this._unsubscribeOutsideTouchEvents = function() {
          t.removeEventListener("touchstart", i);
        }, this._unsubscribeOutsideMouseEvents = function() {
          t.removeEventListener("mousedown", i);
        }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, { passive: !0 });
      }
      Kc() && (this._unsubscribeMobileSafariEvents = function() {
        r._target.removeEventListener("dblclick", r._onMobileSafariDoubleClick);
      }, this._target.addEventListener("dblclick", this._onMobileSafariDoubleClick)), this._target.addEventListener("mouseleave", this._mouseLeaveHandler.bind(this)), this._target.addEventListener("touchstart", this._touchStartHandler.bind(this), { passive: !0 }), this._target.addEventListener("mousedown", function(a) {
        if (a.button === 1)
          return a.preventDefault(), !1;
      }), this._target.addEventListener("mousedown", this._mouseDownHandler.bind(this)), this._initPinch(), this._target.addEventListener("touchmove", function() {
      }, { passive: !1 });
    }, e.prototype._initPinch = function() {
      var r = this;
      !pe(this._handler.pinchStartEvent) && !pe(this._handler.pinchEvent) && !pe(this._handler.pinchEndEvent) || (this._target.addEventListener("touchstart", function(t) {
        return r._checkPinchState(t.touches);
      }, { passive: !0 }), this._target.addEventListener("touchmove", function(t) {
        if (!(t.touches.length !== 2 || r._startPinchMiddleCoordinate === null) && pe(r._handler.pinchEvent)) {
          var i = r._getTouchDistance(t.touches[0], t.touches[1]), a = i / r._startPinchDistance;
          r._handler.pinchEvent(Le(Le({}, r._startPinchMiddleCoordinate), { pageX: 0, pageY: 0 }), a), r._preventDefault(t);
        }
      }, { passive: !1 }), this._target.addEventListener("touchend", function(t) {
        r._checkPinchState(t.touches);
      }));
    }, e.prototype._checkPinchState = function(r) {
      r.length === 1 && (this._pinchPrevented = !1), r.length !== 2 || this._pinchPrevented || this._longTapActive ? this._stopPinch() : this._startPinch(r);
    }, e.prototype._startPinch = function(r) {
      var t, i = (t = this._target.getBoundingClientRect()) !== null && t !== void 0 ? t : { left: 0, top: 0 };
      this._startPinchMiddleCoordinate = {
        x: (r[0].clientX - i.left + (r[1].clientX - i.left)) / 2,
        y: (r[0].clientY - i.top + (r[1].clientY - i.top)) / 2
      }, this._startPinchDistance = this._getTouchDistance(r[0], r[1]), pe(this._handler.pinchStartEvent) && this._handler.pinchStartEvent({ x: 0, y: 0, pageX: 0, pageY: 0 }), this._clearLongTapTimeout();
    }, e.prototype._stopPinch = function() {
      this._startPinchMiddleCoordinate !== null && (this._startPinchMiddleCoordinate = null, pe(this._handler.pinchEndEvent) && this._handler.pinchEndEvent({ x: 0, y: 0, pageX: 0, pageY: 0 }));
    }, e.prototype._mouseLeaveHandler = function(r) {
      var t, i, a;
      (t = this._unsubscribeMousemove) === null || t === void 0 || t.call(this), (i = this._unsubscribeMouseWheel) === null || i === void 0 || i.call(this), (a = this._unsubscribeContextMenu) === null || a === void 0 || a.call(this), !this._firesTouchEvents(r) && this._acceptMouseLeave && (this._processEvent(this._makeCompatEvent(r), this._handler.mouseLeaveEvent), this._acceptMouseLeave = !Kc());
    }, e.prototype._longTapHandler = function(r) {
      var t = this._touchWithId(r.touches, this._activeTouchId);
      t !== null && (this._processEvent(this._makeCompatEvent(r, t), this._handler.longTapEvent), this._cancelTap = !0, this._longTapActive = !0);
    }, e.prototype._firesTouchEvents = function(r) {
      var t;
      return pe((t = r.sourceCapabilities) === null || t === void 0 ? void 0 : t.firesTouchEvents) ? r.sourceCapabilities.firesTouchEvents : this._eventTimeStamp(r) < this._lastTouchEventTimeStamp + 500;
    }, e.prototype._processEvent = function(r, t) {
      t == null || t.call(this._handler, r);
    }, e.prototype._makeCompatEvent = function(r, t) {
      var i = this, a, s = t ?? r, l = (a = this._target.getBoundingClientRect()) !== null && a !== void 0 ? a : { left: 0, top: 0 };
      return {
        x: s.clientX - l.left,
        y: s.clientY - l.top,
        pageX: s.pageX,
        pageY: s.pageY,
        isTouch: !r.type.startsWith("mouse") && r.type !== "contextmenu" && r.type !== "click",
        preventDefault: function() {
          r.type !== "touchstart" && i._preventDefault(r);
        }
      };
    }, e.prototype._getTouchDistance = function(r, t) {
      var i = r.clientX - t.clientX, a = r.clientY - t.clientY;
      return Math.sqrt(i * i + a * a);
    }, e.prototype._preventDefault = function(r) {
      r.cancelable && r.preventDefault();
    }, e.prototype._getCoordinate = function(r) {
      return {
        x: r.pageX,
        y: r.pageY
      };
    }, e.prototype._eventTimeStamp = function(r) {
      var t;
      return (t = r.timeStamp) !== null && t !== void 0 ? t : performance.now();
    }, e.prototype._touchWithId = function(r, t) {
      for (var i = 0; i < r.length; ++i)
        if (r[i].identifier === t)
          return r[i];
      return null;
    }, e;
  }()
), y7 = (
  /** @class */
  function() {
    function e(r, t) {
      var i = this;
      this._flingStartTime = (/* @__PURE__ */ new Date()).getTime(), this._flingScrollRequestId = null, this._startScrollCoordinate = null, this._touchCoordinate = null, this._touchCancelCrosshair = !1, this._touchZoomed = !1, this._pinchScale = 1, this._mouseDownWidget = null, this._prevYAxisExtremum = null, this._xAxisStartScaleCoordinate = null, this._xAxisStartScaleDistance = 0, this._xAxisScale = 1, this._yAxisStartScaleDistance = 0, this._mouseMoveTriggerWidgetInfo = { pane: null, widget: null }, this._boundKeyBoardDownEvent = function(a) {
        if (a.shiftKey)
          switch (a.code) {
            case "Equal": {
              i._chart.getChartStore().getTimeScaleStore().zoom(0.5);
              break;
            }
            case "Minus": {
              i._chart.getChartStore().getTimeScaleStore().zoom(-0.5);
              break;
            }
            case "ArrowLeft": {
              var s = i._chart.getChartStore().getTimeScaleStore();
              s.startScroll(), s.scroll(-3 * s.getBarSpace().bar);
              break;
            }
            case "ArrowRight": {
              var s = i._chart.getChartStore().getTimeScaleStore();
              s.startScroll(), s.scroll(3 * s.getBarSpace().bar);
              break;
            }
          }
      }, this._container = r, this._chart = t, this._event = new g7(r, this, {
        treatVertDragAsPageScroll: function() {
          return !1;
        },
        treatHorzDragAsPageScroll: function() {
          return !1;
        }
      }), r.addEventListener("keydown", this._boundKeyBoardDownEvent);
    }
    return e.prototype.pinchStartEvent = function() {
      return this._touchZoomed = !0, this._pinchScale = 1, !0;
    }, e.prototype.pinchEvent = function(r, t) {
      var i = this._findWidgetByEvent(r), a = i.pane, s = i.widget;
      if ((a == null ? void 0 : a.getId()) !== gt.X_AXIS && (s == null ? void 0 : s.getName()) === He.MAIN) {
        var l = this._makeWidgetEvent(r, s), u = (t - this._pinchScale) * 5;
        return this._pinchScale = t, this._chart.getChartStore().getTimeScaleStore().zoom(u, { x: l.x, y: l.y }), !0;
      }
      return !1;
    }, e.prototype.mouseWheelHortEvent = function(r, t) {
      var i = this._chart.getChartStore().getTimeScaleStore();
      return i.startScroll(), i.scroll(t), !0;
    }, e.prototype.mouseWheelVertEvent = function(r, t) {
      var i, a = this._findWidgetByEvent(r).widget, s = (i = r.isTouch) !== null && i !== void 0 ? i : !1, l = this._makeWidgetEvent(r, a), u = null, c = a == null ? void 0 : a.getName();
      if (s)
        if (c === He.MAIN || c === He.X_AXIS)
          u = { x: l.x, y: l.y };
        else {
          var h = this._chart.getCandlePane().getBounding();
          u = { x: h.width / 2, y: h.height / 2 };
        }
      else
        c === He.MAIN && (u = { x: l.x, y: l.y });
      return u !== null ? (this._chart.getChartStore().getTimeScaleStore().zoom(t, { x: l.x, y: l.y }), !0) : !1;
    }, e.prototype.mouseDownEvent = function(r) {
      var t, i, a = this._findWidgetByEvent(r), s = a.pane, l = a.widget;
      if (this._mouseDownWidget = l, l !== null) {
        var u = this._makeWidgetEvent(r, l), c = l.getName();
        switch (c) {
          case He.SEPARATOR:
            return l.dispatchEvent("mouseDownEvent", u);
          case He.MAIN: {
            var h = (t = s.getAxisComponent().getExtremum()) !== null && t !== void 0 ? t : null;
            return this._prevYAxisExtremum = h === null ? h : Le({}, h), this._startScrollCoordinate = { x: u.x, y: u.y }, this._chart.getChartStore().getTimeScaleStore().startScroll(), l.dispatchEvent("mouseDownEvent", u);
          }
          case He.X_AXIS: {
            var d = l.dispatchEvent("mouseDownEvent", u);
            return d && this._chart.updatePane(
              1
              /* UpdateLevel.Overlay */
            ), this._xAxisStartScaleCoordinate = { x: u.x, y: u.y }, this._xAxisStartScaleDistance = u.pageX, d;
          }
          case He.Y_AXIS: {
            var d = l.dispatchEvent("mouseDownEvent", u);
            d && this._chart.updatePane(
              1
              /* UpdateLevel.Overlay */
            );
            var h = (i = s.getAxisComponent().getExtremum()) !== null && i !== void 0 ? i : null;
            return this._prevYAxisExtremum = h === null ? h : Le({}, h), this._yAxisStartScaleDistance = u.pageY, d;
          }
        }
      }
      return !1;
    }, e.prototype.mouseMoveEvent = function(r) {
      var t, i, a, s = this._findWidgetByEvent(r), l = s.pane, u = s.widget, c = this._makeWidgetEvent(r, u);
      if ((((t = this._mouseMoveTriggerWidgetInfo.pane) === null || t === void 0 ? void 0 : t.getId()) !== (l == null ? void 0 : l.getId()) || ((i = this._mouseMoveTriggerWidgetInfo.widget) === null || i === void 0 ? void 0 : i.getName()) !== (u == null ? void 0 : u.getName())) && (u == null || u.dispatchEvent("mouseEnterEvent", c), (a = this._mouseMoveTriggerWidgetInfo.widget) === null || a === void 0 || a.dispatchEvent("mouseLeaveEvent", c), this._mouseMoveTriggerWidgetInfo = { pane: l, widget: u }), u !== null) {
        var h = u.getName();
        switch (h) {
          case He.MAIN: {
            var d = u.dispatchEvent("mouseMoveEvent", c), v = this._chart.getChartStore(), m = { x: c.x, y: c.y, paneId: l == null ? void 0 : l.getId() };
            return d && v.getTooltipStore().getActiveIcon() !== null && (m = void 0, u !== null && (u.getContainer().style.cursor = "pointer")), this._chart.getChartStore().getTooltipStore().setCrosshair(m), d;
          }
          case He.SEPARATOR:
          case He.X_AXIS:
          case He.Y_AXIS: {
            var d = u.dispatchEvent("mouseMoveEvent", c);
            return this._chart.getChartStore().getTooltipStore().setCrosshair(), d;
          }
        }
      }
      return !1;
    }, e.prototype.pressedMouseMoveEvent = function(r) {
      var t, i, a, s, l;
      if (this._mouseDownWidget !== null && this._mouseDownWidget.getName() === He.SEPARATOR)
        return this._mouseDownWidget.dispatchEvent("pressedMouseMoveEvent", r);
      var u = this._findWidgetByEvent(r), c = u.pane, h = u.widget;
      if (h !== null && ((t = this._mouseDownWidget) === null || t === void 0 ? void 0 : t.getPane().getId()) === (c == null ? void 0 : c.getId()) && ((i = this._mouseDownWidget) === null || i === void 0 ? void 0 : i.getName()) === h.getName()) {
        var d = this._makeWidgetEvent(r, h), v = h.getName();
        switch (v) {
          case He.MAIN: {
            var m = h.getBounding(), y = h.dispatchEvent("pressedMouseMoveEvent", d);
            if (!y && this._startScrollCoordinate !== null) {
              var C = c.getAxisComponent();
              if (this._prevYAxisExtremum !== null && !C.getAutoCalcTickFlag() && C.getScrollZoomEnabled()) {
                var b = this._prevYAxisExtremum, _ = b.min, w = b.max, T = b.range, P;
                (a = C == null ? void 0 : C.isReverse()) !== null && a !== void 0 && a ? P = this._startScrollCoordinate.y - d.y : P = d.y - this._startScrollCoordinate.y;
                var M = P / m.height, F = T * M, O = _ + F, V = w + F, W = C.convertToRealValue(O), N = C.convertToRealValue(V);
                C.setExtremum({
                  min: O,
                  max: V,
                  range: V - O,
                  realMin: W,
                  realMax: N,
                  realRange: N - W
                });
              }
              var Y = d.x - this._startScrollCoordinate.x;
              this._chart.getChartStore().getTimeScaleStore().scroll(Y);
            }
            return this._chart.getChartStore().getTooltipStore().setCrosshair({ x: d.x, y: d.y, paneId: c == null ? void 0 : c.getId() }), y;
          }
          case He.X_AXIS: {
            var y = h.dispatchEvent("pressedMouseMoveEvent", d);
            if (y)
              this._chart.updatePane(
                1
                /* UpdateLevel.Overlay */
              );
            else {
              var K = c.getAxisComponent();
              if (!((s = K == null ? void 0 : K.getScrollZoomEnabled()) !== null && s !== void 0) || s) {
                var M = this._xAxisStartScaleDistance / d.pageX, G = (M - this._xAxisScale) * 10;
                this._xAxisScale = M, this._chart.getChartStore().getTimeScaleStore().zoom(G, (l = this._xAxisStartScaleCoordinate) !== null && l !== void 0 ? l : void 0);
              }
            }
            return y;
          }
          case He.Y_AXIS: {
            var y = h.dispatchEvent("pressedMouseMoveEvent", d);
            if (y)
              this._chart.updatePane(
                1
                /* UpdateLevel.Overlay */
              );
            else {
              var C = c.getAxisComponent();
              if (this._prevYAxisExtremum !== null && C.getScrollZoomEnabled()) {
                var q = this._prevYAxisExtremum, _ = q.min, w = q.max, T = q.range, M = d.pageY / this._yAxisStartScaleDistance, he = T * M, F = (he - T) / 2, O = _ - F, V = w + F, W = C.convertToRealValue(O), N = C.convertToRealValue(V);
                C.setExtremum({
                  min: O,
                  max: V,
                  range: he,
                  realMin: W,
                  realMax: N,
                  realRange: N - W
                }), this._chart.adjustPaneViewport(!1, !0, !0, !0);
              }
            }
            return y;
          }
        }
      }
      return !1;
    }, e.prototype.mouseUpEvent = function(r) {
      var t = this._findWidgetByEvent(r).widget, i = !1;
      if (t !== null) {
        var a = this._makeWidgetEvent(r, t), s = t.getName();
        switch (s) {
          case He.MAIN:
          case He.SEPARATOR:
          case He.X_AXIS:
          case He.Y_AXIS: {
            i = t.dispatchEvent("mouseUpEvent", a);
            break;
          }
        }
        i && this._chart.updatePane(
          1
          /* UpdateLevel.Overlay */
        );
      }
      return this._mouseDownWidget = null, this._startScrollCoordinate = null, this._prevYAxisExtremum = null, this._xAxisStartScaleCoordinate = null, this._xAxisStartScaleDistance = 0, this._xAxisScale = 1, this._yAxisStartScaleDistance = 0, i;
    }, e.prototype.mouseClickEvent = function(r) {
      var t = this._findWidgetByEvent(r).widget;
      if (t !== null) {
        var i = this._makeWidgetEvent(r, t);
        return t.dispatchEvent("mouseClickEvent", i);
      }
      return !1;
    }, e.prototype.mouseRightClickEvent = function(r) {
      var t = this._findWidgetByEvent(r).widget, i = !1;
      if (t !== null) {
        var a = this._makeWidgetEvent(r, t), s = t.getName();
        switch (s) {
          case He.MAIN:
          case He.X_AXIS:
          case He.Y_AXIS: {
            i = t.dispatchEvent("mouseRightClickEvent", a);
            break;
          }
        }
        i && this._chart.updatePane(
          1
          /* UpdateLevel.Overlay */
        );
      }
      return !1;
    }, e.prototype.mouseDoubleClickEvent = function(r) {
      var t = this._findWidgetByEvent(r), i = t.pane, a = t.widget;
      if (a !== null) {
        var s = a.getName();
        switch (s) {
          case He.MAIN: {
            var l = this._makeWidgetEvent(r, a);
            return a.dispatchEvent("mouseDoubleClickEvent", l);
          }
          case He.Y_AXIS: {
            var u = i.getAxisComponent();
            if (!u.getAutoCalcTickFlag())
              return u.setAutoCalcTickFlag(!0), this._chart.adjustPaneViewport(!1, !0, !0, !0), !0;
            break;
          }
        }
      }
      return !1;
    }, e.prototype.mouseLeaveEvent = function() {
      return this._chart.getChartStore().getTooltipStore().setCrosshair(), !0;
    }, e.prototype.touchStartEvent = function(r) {
      var t, i, a = this._findWidgetByEvent(r), s = a.pane, l = a.widget;
      if (this._mouseDownWidget = l, l !== null) {
        var u = this._makeWidgetEvent(r, l), c = l.getName();
        switch (c) {
          case He.MAIN: {
            var h = this._chart.getChartStore(), d = h.getTooltipStore();
            if (l.dispatchEvent("mouseDownEvent", u))
              return this._touchCancelCrosshair = !0, this._touchCoordinate = null, d.setCrosshair(void 0, !0), this._chart.updatePane(
                1
                /* UpdateLevel.Overlay */
              ), !0;
            var v = (t = s.getAxisComponent().getExtremum()) !== null && t !== void 0 ? t : null;
            if (this._prevYAxisExtremum = v === null ? v : Le({}, v), this._flingScrollRequestId !== null && (s1(this._flingScrollRequestId), this._flingScrollRequestId = null), this._flingStartTime = (/* @__PURE__ */ new Date()).getTime(), this._startScrollCoordinate = { x: u.x, y: u.y }, h.getTimeScaleStore().startScroll(), this._touchZoomed = !1, this._touchCoordinate !== null) {
              var m = u.x - this._touchCoordinate.x, y = u.y - this._touchCoordinate.y, C = Math.sqrt(m * m + y * y);
              C < p7 ? (this._touchCoordinate = { x: u.x, y: u.y }, d.setCrosshair({ x: u.x, y: u.y, paneId: s == null ? void 0 : s.getId() })) : (this._touchCoordinate = null, this._touchCancelCrosshair = !0, d.setCrosshair());
            }
            return !0;
          }
          case He.X_AXIS: {
            var b = l.dispatchEvent("mouseDownEvent", u);
            return b && this._chart.updatePane(
              1
              /* UpdateLevel.Overlay */
            ), this._xAxisStartScaleCoordinate = { x: u.x, y: u.y }, this._xAxisStartScaleDistance = u.pageX, b;
          }
          case He.Y_AXIS: {
            var b = l.dispatchEvent("mouseDownEvent", u);
            b && this._chart.updatePane(
              1
              /* UpdateLevel.Overlay */
            );
            var v = (i = s.getAxisComponent().getExtremum()) !== null && i !== void 0 ? i : null;
            return this._prevYAxisExtremum = v === null ? v : Le({}, v), this._yAxisStartScaleDistance = u.pageY, b;
          }
        }
      }
      return !1;
    }, e.prototype.touchMoveEvent = function(r) {
      var t, i, a, s, l, u = this._findWidgetByEvent(r), c = u.pane, h = u.widget;
      if (h !== null) {
        var d = this._makeWidgetEvent(r, h), v = h.getName(), m = this._chart.getChartStore(), y = m.getTooltipStore();
        switch (v) {
          case He.MAIN: {
            if (h.dispatchEvent("pressedMouseMoveEvent", d))
              return (t = d.preventDefault) === null || t === void 0 || t.call(d), y.setCrosshair(void 0, !0), this._chart.updatePane(
                1
                /* UpdateLevel.Overlay */
              ), !0;
            if (this._touchCoordinate !== null)
              (i = d.preventDefault) === null || i === void 0 || i.call(d), y.setCrosshair({ x: d.x, y: d.y, paneId: c == null ? void 0 : c.getId() });
            else if ((a = d.preventDefault) === null || a === void 0 || a.call(d), this._startScrollCoordinate !== null && Math.abs(this._startScrollCoordinate.x - d.x) > this._startScrollCoordinate.y - d.y) {
              var C = c.getAxisComponent();
              if (this._prevYAxisExtremum !== null && !C.getAutoCalcTickFlag() && C.getScrollZoomEnabled()) {
                var b = this._prevYAxisExtremum, _ = b.min, w = b.max, T = b.range, P;
                (s = C == null ? void 0 : C.isReverse()) !== null && s !== void 0 && s ? P = this._startScrollCoordinate.y - d.y : P = d.y - this._startScrollCoordinate.y;
                var M = h.getBounding(), F = P / M.height, O = T * F, V = _ + O, W = w + O, N = C.convertToRealValue(V), Y = C.convertToRealValue(W);
                C.setExtremum({
                  min: V,
                  max: W,
                  range: W - V,
                  realMin: N,
                  realMax: Y,
                  realRange: Y - N
                });
              }
              var K = d.x - this._startScrollCoordinate.x;
              m.getTimeScaleStore().scroll(K);
            }
            return !0;
          }
          case He.X_AXIS:
          case He.Y_AXIS:
            return (l = r.preventDefault) === null || l === void 0 || l.call(r), this.pressedMouseMoveEvent(r);
        }
      }
      return !1;
    }, e.prototype.touchEndEvent = function(r) {
      var t = this, i = function() {
        t._mouseDownWidget = null, t._startScrollCoordinate = null, t._prevYAxisExtremum = null, t._xAxisStartScaleCoordinate = null, t._xAxisStartScaleDistance = 0, t._xAxisScale = 1, t._yAxisStartScaleDistance = 0;
      }, a = this._findWidgetByEvent(r).widget;
      if (a !== null) {
        var s = this._makeWidgetEvent(r, a), l = a.getName();
        switch (l) {
          case He.MAIN: {
            if (a.dispatchEvent("mouseUpEvent", s), this._startScrollCoordinate !== null) {
              var u = (/* @__PURE__ */ new Date()).getTime() - this._flingStartTime, c = s.x - this._startScrollCoordinate.x, h = c / (u > 0 ? u : 1) * 20;
              if (u < 200 && Math.abs(h) > 0) {
                var d = this._chart.getChartStore().getTimeScaleStore(), v = function() {
                  t._flingScrollRequestId = nf(function() {
                    d.startScroll(), d.scroll(h), h = h * (1 - 0.025), Math.abs(h) < 1 ? t._flingScrollRequestId !== null && (s1(t._flingScrollRequestId), t._flingScrollRequestId = null) : v();
                  });
                };
                v();
              }
            }
            return i(), !0;
          }
          case He.X_AXIS:
          case He.Y_AXIS: {
            var m = a.dispatchEvent("mouseUpEvent", s);
            m && this._chart.updatePane(
              1
              /* UpdateLevel.Overlay */
            ), i();
          }
        }
      }
      return !1;
    }, e.prototype.tapEvent = function(r) {
      var t = this._findWidgetByEvent(r), i = t.pane, a = t.widget, s = !1;
      if (a !== null) {
        var l = this._makeWidgetEvent(r, a), u = a.dispatchEvent("mouseClickEvent", l);
        if (a.getName() === He.MAIN) {
          var c = this._makeWidgetEvent(r, a), h = this._chart.getChartStore(), d = h.getTooltipStore();
          u ? (this._touchCancelCrosshair = !0, this._touchCoordinate = null, d.setCrosshair(void 0, !0), s = !0) : (!this._touchCancelCrosshair && !this._touchZoomed && (this._touchCoordinate = { x: c.x, y: c.y }, d.setCrosshair({ x: c.x, y: c.y, paneId: i == null ? void 0 : i.getId() }, !0), s = !0), this._touchCancelCrosshair = !1);
        }
        (s || u) && this._chart.updatePane(
          1
          /* UpdateLevel.Overlay */
        );
      }
      return s;
    }, e.prototype.doubleTapEvent = function(r) {
      return this.mouseDoubleClickEvent(r);
    }, e.prototype.longTapEvent = function(r) {
      return this.mouseRightClickEvent(r);
    }, e.prototype._findWidgetByEvent = function(r) {
      var t, i, a, s, l = r.x, u = r.y, c = this._chart.getAllSeparatorPanes(), h = this._chart.getChartStore().getStyles().separator.size;
      try {
        for (var d = Ma(c), v = d.next(); !v.done; v = d.next()) {
          var m = wr(v.value, 2), y = m[1], C = y.getBounding(), b = C.top - Math.round((Js - h) / 2);
          if (l >= C.left && l <= C.left + C.width && u >= b && u <= b + Js)
            return { pane: y, widget: y.getWidget() };
        }
      } catch (Y) {
        t = { error: Y };
      } finally {
        try {
          v && !v.done && (i = d.return) && i.call(d);
        } finally {
          if (t)
            throw t.error;
        }
      }
      var _ = this._chart.getAllDrawPanes(), w = null;
      try {
        for (var T = Ma(_), P = T.next(); !P.done; P = T.next()) {
          var M = P.value, C = M.getBounding();
          if (l >= C.left && l <= C.left + C.width && u >= C.top && u <= C.top + C.height) {
            w = M;
            break;
          }
        }
      } catch (Y) {
        a = { error: Y };
      } finally {
        try {
          P && !P.done && (s = T.return) && s.call(T);
        } finally {
          if (a)
            throw a.error;
        }
      }
      var F = null;
      if (w !== null) {
        if (F === null) {
          var O = w.getMainWidget(), V = O.getBounding();
          l >= V.left && l <= V.left + V.width && u >= V.top && u <= V.top + V.height && (F = O);
        }
        if (F === null) {
          var W = w.getYAxisWidget();
          if (W !== null) {
            var N = W.getBounding();
            l >= N.left && l <= N.left + N.width && u >= N.top && u <= N.top + N.height && (F = W);
          }
        }
      }
      return { pane: w, widget: F };
    }, e.prototype._makeWidgetEvent = function(r, t) {
      var i, a, s, l = (i = t == null ? void 0 : t.getBounding()) !== null && i !== void 0 ? i : null;
      return Le(Le({}, r), { x: r.x - ((a = l == null ? void 0 : l.left) !== null && a !== void 0 ? a : 0), y: r.y - ((s = l == null ? void 0 : l.top) !== null && s !== void 0 ? s : 0) });
    }, e.prototype.destroy = function() {
      this._container.removeEventListener("keydown", this._boundKeyBoardDownEvent), this._event.destroy();
    }, e;
  }()
), bn;
(function(e) {
  e.Root = "root", e.Main = "main", e.YAxis = "yAxis";
})(bn || (bn = {}));
var gd = (
  /** @class */
  function() {
    function e(r, t) {
      this._drawPanes = [], this._separatorPanes = /* @__PURE__ */ new Map(), this._initContainer(r), this._chartEvent = new y7(this._chartContainer, this), this._chartStore = new T8(this, t), this._initPanes(t), this.adjustPaneViewport(!0, !0, !0);
    }
    return e.prototype._initContainer = function(r) {
      this._container = r, this._chartContainer = ri("div", {
        position: "relative",
        width: "100%",
        outline: "none",
        borderStyle: "none",
        cursor: "crosshair",
        boxSizing: "border-box",
        userSelect: "none",
        webkitUserSelect: "none",
        // @ts-expect-error
        msUserSelect: "none",
        MozUserSelect: "none",
        webkitTapHighlightColor: "transparent"
      }), this._chartContainer.tabIndex = 1, r.appendChild(this._chartContainer);
    }, e.prototype._initPanes = function(r) {
      var t = this, i, a = (i = r == null ? void 0 : r.layout) !== null && i !== void 0 ? i : [{
        type: "candle"
        /* LayoutChildType.Candle */
      }], s = !1, l = !1, u = function(c) {
        if (!l) {
          var h = t._createPane(d7, gt.X_AXIS, c ?? {});
          t._xAxisPane = h, l = !0;
        }
      };
      a.forEach(function(c) {
        var h, d, v;
        switch (c.type) {
          case "candle": {
            if (!s) {
              var m = (h = c.options) !== null && h !== void 0 ? h : {};
              nn(m, { id: gt.CANDLE });
              var y = t._createPane(s7, gt.CANDLE, m);
              t._candlePane = y;
              var C = (d = c.content) !== null && d !== void 0 ? d : [];
              C.forEach(function(_) {
                t.createIndicator(_, !0, m);
              }), s = !0;
            }
            break;
          }
          case "indicator": {
            var C = (v = c.content) !== null && v !== void 0 ? v : [];
            if (C.length > 0) {
              var b;
              C.forEach(function(w) {
                pe(b) ? t.createIndicator(w, !0, { id: b }) : b = t.createIndicator(w, !0, c.options);
              });
            }
            break;
          }
          case "xAxis":
            u(c.options);
        }
      }), u({
        position: "bottom"
        /* PanePosition.Bottom */
      });
    }, e.prototype._createPane = function(r, t, i) {
      var a, s, l = i == null ? void 0 : i.position;
      switch (l) {
        case "top": {
          var u = this._drawPanes[0];
          pe(u) && (s = new r(this._chartContainer, u.getContainer(), this, t), a = 0);
          break;
        }
        case "bottom":
          break;
        default:
          for (var c = this._drawPanes.length - 1; c > -1; c--) {
            var h = this._drawPanes[c], d = this._drawPanes[c - 1];
            (h == null ? void 0 : h.getOptions().position) === "bottom" && (d == null ? void 0 : d.getOptions().position) !== "bottom" && (s = new r(this._chartContainer, h.getContainer(), this, t), a = c);
          }
      }
      pe(s) || (s = new r(this._chartContainer, null, this, t)), s.setOptions(i ?? {});
      var v;
      if (pe(a) ? (this._drawPanes.splice(a, 0, s), v = a) : (this._drawPanes.push(s), v = this._drawPanes.length - 1), s.getId() !== gt.X_AXIS) {
        var m = this._drawPanes[v + 1];
        if (pe(m) && m.getId() === gt.X_AXIS && (m = this._drawPanes[v + 2]), pe(m)) {
          var y = this._separatorPanes.get(m);
          pe(y) ? y.setTopPane(s) : (y = new i2(this._chartContainer, m.getContainer(), this, "", s, m), this._separatorPanes.set(m, y));
        }
        var C = this._drawPanes[v - 1];
        if (pe(C) && C.getId() === gt.X_AXIS && (C = this._drawPanes[v - 2]), pe(C)) {
          var y = new i2(this._chartContainer, s.getContainer(), this, "", C, s);
          this._separatorPanes.set(s, y);
        }
      }
      return s;
    }, e.prototype._measurePaneHeight = function() {
      var r = this, t, i = this._container.offsetHeight, a = this._chartStore.getStyles().separator.size, s = this._xAxisPane.getAxisComponent().getAutoSize(), l = i - s - this._separatorPanes.size * a;
      l < 0 && (l = 0);
      var u = 0;
      this._drawPanes.forEach(function(d) {
        if (d.getId() !== gt.CANDLE && d.getId() !== gt.X_AXIS) {
          var v = d.getBounding().height, m = d.getOptions().minHeight;
          v < m && (v = m), u + v > l ? (u = l, v = Math.max(l - u, 0)) : u += v, d.setBounding({ height: v });
        }
      });
      var c = l - u;
      (t = this._candlePane) === null || t === void 0 || t.setBounding({ height: c }), this._xAxisPane.setBounding({ height: s });
      var h = 0;
      this._drawPanes.forEach(function(d) {
        var v = r._separatorPanes.get(d);
        pe(v) && (v.setBounding({ height: a, top: h }), h += a), d.setBounding({ top: h }), h += d.getBounding().height;
      });
    }, e.prototype._measurePaneWidth = function() {
      var r = this, t = this._chartStore.getStyles(), i = t.yAxis, a = i.position === sa.Left, s = !i.inside, l = this._container.offsetWidth, u = 0, c = Number.MIN_SAFE_INTEGER, h = 0, d = 0;
      this._drawPanes.forEach(function(_) {
        _.getId() !== gt.X_AXIS && (c = Math.max(c, _.getAxisComponent().getAutoSize()));
      }), c > l && (c = l), s ? (u = l - c, a ? (h = 0, d = c) : (h = l - c, d = 0)) : (u = l, d = 0, a ? h = 0 : h = l - c), this._chartStore.getTimeScaleStore().setTotalBarSpace(u);
      var v = { width: l }, m = { width: u, left: d }, y = { width: c, left: h }, C = t.separator.fill, b;
      s && !C ? b = m : b = v, this._drawPanes.forEach(function(_) {
        var w;
        (w = r._separatorPanes.get(_)) === null || w === void 0 || w.setBounding(b), _.setBounding(v, m, y);
      });
    }, e.prototype._setPaneOptions = function(r, t) {
      var i;
      if (Ne(r.id)) {
        var a = this.getDrawPaneById(r.id), s = !1;
        if (a !== null) {
          var l = t;
          if (r.id !== gt.CANDLE && Ae(r.height) && r.height > 0) {
            var u = Math.max((i = r.minHeight) !== null && i !== void 0 ? i : a.getOptions().minHeight, 0), c = Math.max(u, r.height);
            a.setBounding({ height: c }), l = !0, s = !0;
          }
          a.setOptions(r), l && this.adjustPaneViewport(s, !0, !0, !0, !0);
        }
      }
    }, e.prototype.getDrawPaneById = function(r) {
      if (r === gt.CANDLE)
        return this._candlePane;
      if (r === gt.X_AXIS)
        return this._xAxisPane;
      var t = this._drawPanes.find(function(i) {
        return i.getId() === r;
      });
      return t ?? null;
    }, e.prototype.getContainer = function() {
      return this._container;
    }, e.prototype.getChartStore = function() {
      return this._chartStore;
    }, e.prototype.getCandlePane = function() {
      return this._candlePane;
    }, e.prototype.getXAxisPane = function() {
      return this._xAxisPane;
    }, e.prototype.getAllDrawPanes = function() {
      return this._drawPanes;
    }, e.prototype.getAllSeparatorPanes = function() {
      return this._separatorPanes;
    }, e.prototype.adjustPaneViewport = function(r, t, i, a, s) {
      r && this._measurePaneHeight();
      var l = t, u = a ?? !1, c = s ?? !1;
      (u || c) && this._drawPanes.forEach(function(h) {
        var d = h.getAxisComponent().buildTicks(c);
        l || (l = d);
      }), l && this._measurePaneWidth(), (i ?? !1) && (this._xAxisPane.getAxisComponent().buildTicks(!0), this.updatePane(
        4
        /* UpdateLevel.All */
      ));
    }, e.prototype.updatePane = function(r, t) {
      if (pe(t)) {
        var i = this.getDrawPaneById(t);
        i == null || i.update(r);
      } else
        this._separatorPanes.forEach(function(a) {
          a.update(r);
        }), this._drawPanes.forEach(function(a) {
          a.update(r);
        });
    }, e.prototype.crosshairChange = function(r) {
      var t = this, i = this._chartStore.getActionStore();
      if (i.has(Cn.OnCrosshairChange)) {
        var a = {};
        this._drawPanes.forEach(function(s) {
          var l = s.getId(), u = {}, c = t._chartStore.getIndicatorStore().getInstances(l);
          c.forEach(function(h) {
            var d, v = h.result;
            u[h.name] = v[(d = r.dataIndex) !== null && d !== void 0 ? d : v.length - 1];
          }), a[l] = u;
        }), Ne(r.paneId) && i.execute(Cn.OnCrosshairChange, Le(Le({}, r), { indicatorData: a }));
      }
    }, e.prototype.getDom = function(r, t) {
      var i, a;
      if (Ne(r)) {
        var s = this.getDrawPaneById(r);
        if (s !== null) {
          var l = t ?? bn.Root;
          switch (l) {
            case bn.Root:
              return s.getContainer();
            case bn.Main:
              return s.getMainWidget().getContainer();
            case bn.YAxis:
              return (a = (i = s.getYAxisWidget()) === null || i === void 0 ? void 0 : i.getContainer()) !== null && a !== void 0 ? a : null;
          }
        }
      } else
        return this._chartContainer;
      return null;
    }, e.prototype.getSize = function(r, t) {
      var i, a;
      if (pe(r)) {
        var s = this.getDrawPaneById(r);
        if (s !== null) {
          var l = t ?? bn.Root;
          switch (l) {
            case bn.Root:
              return s.getBounding();
            case bn.Main:
              return s.getMainWidget().getBounding();
            case bn.YAxis:
              return (a = (i = s.getYAxisWidget()) === null || i === void 0 ? void 0 : i.getBounding()) !== null && a !== void 0 ? a : null;
          }
        }
      } else
        return {
          width: this._chartContainer.offsetWidth,
          height: this._chartContainer.offsetHeight,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
      return null;
    }, e.prototype.setStyles = function(r) {
      var t, i;
      this._chartStore.setOptions({ styles: r });
      var a;
      Ne(r) ? a = Z9(r) : a = r, pe((t = a == null ? void 0 : a.yAxis) === null || t === void 0 ? void 0 : t.type) && ((i = this._candlePane) === null || i === void 0 || i.getAxisComponent().setAutoCalcTickFlag(!0)), this.adjustPaneViewport(!0, !0, !0, !0, !0);
    }, e.prototype.getStyles = function() {
      return this._chartStore.getStyles();
    }, e.prototype.setLocale = function(r) {
      this._chartStore.setOptions({ locale: r }), this.adjustPaneViewport(!0, !0, !0, !0, !0);
    }, e.prototype.getLocale = function() {
      return this._chartStore.getLocale();
    }, e.prototype.setCustomApi = function(r) {
      this._chartStore.setOptions({ customApi: r }), this.adjustPaneViewport(!0, !0, !0, !0, !0);
    }, e.prototype.setPriceVolumePrecision = function(r, t) {
      this._chartStore.setPrecision({ price: r, volume: t });
    }, e.prototype.getPriceVolumePrecision = function() {
      return this._chartStore.getPrecision();
    }, e.prototype.setTimezone = function(r) {
      this._chartStore.setOptions({ timezone: r }), this._xAxisPane.getAxisComponent().buildTicks(!0), this._xAxisPane.update(
        3
        /* UpdateLevel.Drawer */
      );
    }, e.prototype.getTimezone = function() {
      return this._chartStore.getTimeScaleStore().getTimezone();
    }, e.prototype.setOffsetRightDistance = function(r) {
      this._chartStore.getTimeScaleStore().setOffsetRightDistance(r, !0);
    }, e.prototype.getOffsetRightDistance = function() {
      return this._chartStore.getTimeScaleStore().getOffsetRightDistance();
    }, e.prototype.setMaxOffsetLeftDistance = function(r) {
      r < 0 || this._chartStore.getTimeScaleStore().setMaxOffsetLeftDistance(r);
    }, e.prototype.setMaxOffsetRightDistance = function(r) {
      r < 0 || this._chartStore.getTimeScaleStore().setMaxOffsetRightDistance(r);
    }, e.prototype.setLeftMinVisibleBarCount = function(r) {
      r < 0 || this._chartStore.getTimeScaleStore().setLeftMinVisibleBarCount(Math.ceil(r));
    }, e.prototype.setRightMinVisibleBarCount = function(r) {
      r < 0 || this._chartStore.getTimeScaleStore().setRightMinVisibleBarCount(Math.ceil(r));
    }, e.prototype.setBarSpace = function(r) {
      this._chartStore.getTimeScaleStore().setBarSpace(r);
    }, e.prototype.getBarSpace = function() {
      return this._chartStore.getTimeScaleStore().getBarSpace().bar;
    }, e.prototype.getVisibleRange = function() {
      return this._chartStore.getTimeScaleStore().getVisibleRange();
    }, e.prototype.clearData = function() {
      this._chartStore.clear();
    }, e.prototype.getDataList = function() {
      return this._chartStore.getDataList();
    }, e.prototype.applyNewData = function(r, t, i) {
      this._chartStore.clear(), r.length === 0 ? this.adjustPaneViewport(!1, !0, !0, !0) : this.applyMoreData(r, t, i);
    }, e.prototype.applyMoreData = function(r, t, i) {
      var a = this;
      this._chartStore.addData(r, 0, t), r.length > 0 && this._chartStore.getIndicatorStore().calcInstance().then(function(s) {
        a.adjustPaneViewport(!1, !0, !0, !0), i == null || i();
      }).catch(function(s) {
      });
    }, e.prototype.updateData = function(r, t) {
      var i = this, a = this._chartStore.getDataList(), s = a.length, l = r.timestamp, u = Kt(a[s - 1], "timestamp", 0);
      if (l >= u) {
        var c = s;
        l === u && (c = s - 1), this._chartStore.addData(r, c), this._chartStore.getIndicatorStore().calcInstance().then(function(h) {
          i.adjustPaneViewport(!1, !0, !0, !0), t == null || t();
        }).catch(function(h) {
        });
      }
    }, e.prototype.loadMore = function(r) {
      this._chartStore.getTimeScaleStore().setLoadMoreCallback(r);
    }, e.prototype.createIndicator = function(r, t, i, a) {
      var s = this, l, u = Ne(r) ? { name: r } : r;
      if (V9(u.name) === null)
        return null;
      var c = i == null ? void 0 : i.id, h = this.getDrawPaneById(c ?? "");
      if (h !== null)
        this._chartStore.getIndicatorStore().addInstance(u, c ?? "", t ?? !1).then(function(m) {
          var y;
          s._setPaneOptions(i ?? {}, (y = h.getAxisComponent().buildTicks(!0)) !== null && y !== void 0 ? y : !1);
        }).catch(function(m) {
        });
      else {
        c ?? (c = B9(gt.INDICATOR));
        var d = this._createPane(pd, c, i ?? {}), v = (l = i == null ? void 0 : i.height) !== null && l !== void 0 ? l : k8;
        d.setBounding({ height: v }), this._chartStore.getIndicatorStore().addInstance(u, c, t ?? !1).finally(function() {
          s.adjustPaneViewport(!0, !0, !0, !0, !0), a == null || a();
        });
      }
      return c ?? null;
    }, e.prototype.overrideIndicator = function(r, t, i) {
      var a = this;
      this._chartStore.getIndicatorStore().override(r, t ?? null).then(function(s) {
        var l = wr(s, 2), u = l[0], c = l[1];
        (u || c) && (a.adjustPaneViewport(!1, c, !0, c), i == null || i());
      }).catch(function() {
      });
    }, e.prototype.getIndicatorByPaneId = function(r, t) {
      return this._chartStore.getIndicatorStore().getInstanceByPaneId(r, t);
    }, e.prototype.removeIndicator = function(r, t) {
      var i, a, s, l = this._chartStore.getIndicatorStore(), u = l.removeInstance(r, t);
      if (u) {
        var c = !1;
        if (r !== gt.CANDLE && !l.hasInstances(r)) {
          var h = this.getDrawPaneById(r), d = this._drawPanes.findIndex(function(w) {
            return w.getId() === r;
          });
          if (h !== null) {
            c = !0;
            var v = this._separatorPanes.get(h);
            if (pe(v)) {
              var m = v == null ? void 0 : v.getTopPane();
              try {
                for (var y = Ma(this._separatorPanes), C = y.next(); !C.done; C = y.next()) {
                  var b = C.value;
                  if (b[1].getTopPane().getId() === h.getId()) {
                    b[1].setTopPane(m);
                    break;
                  }
                }
              } catch (w) {
                i = { error: w };
              } finally {
                try {
                  C && !C.done && (a = y.return) && a.call(y);
                } finally {
                  if (i)
                    throw i.error;
                }
              }
              v.destroy(), this._separatorPanes.delete(h);
            }
            this._drawPanes.splice(d, 1), h.destroy();
            var _ = this._drawPanes[0];
            pe(_) && _.getId() === gt.X_AXIS && (_ = this._drawPanes[1]), (s = this._separatorPanes.get(_)) === null || s === void 0 || s.destroy(), this._separatorPanes.delete(_);
          }
        }
        this.adjustPaneViewport(c, !0, !0, !0, !0);
      }
    }, e.prototype.createOverlay = function(r, t) {
      var i = [];
      if (Ne(r))
        i = [{ name: r }];
      else if (Dn(r))
        i = r.map(function(u) {
          return Ne(u) ? { name: u } : u;
        });
      else {
        var a = r;
        i = [a];
      }
      var s = !0;
      (!pe(t) || this.getDrawPaneById(t) === null) && (t = gt.CANDLE, s = !1);
      var l = this._chartStore.getOverlayStore().addInstances(i, t, s);
      return Dn(r) ? l : l[0];
    }, e.prototype.getOverlayById = function(r) {
      return this._chartStore.getOverlayStore().getInstanceById(r);
    }, e.prototype.overrideOverlay = function(r) {
      this._chartStore.getOverlayStore().override(r);
    }, e.prototype.removeOverlay = function(r) {
      var t;
      pe(r) && (Ne(r) ? t = { id: r } : t = r), this._chartStore.getOverlayStore().removeInstance(t);
    }, e.prototype.setPaneOptions = function(r) {
      this._setPaneOptions(r, !1);
    }, e.prototype.setZoomEnabled = function(r) {
      this._chartStore.getTimeScaleStore().setZoomEnabled(r);
    }, e.prototype.isZoomEnabled = function() {
      return this._chartStore.getTimeScaleStore().getZoomEnabled();
    }, e.prototype.setScrollEnabled = function(r) {
      this._chartStore.getTimeScaleStore().setScrollEnabled(r);
    }, e.prototype.isScrollEnabled = function() {
      return this._chartStore.getTimeScaleStore().getScrollEnabled();
    }, e.prototype.scrollByDistance = function(r, t) {
      var i = Ae(t) && t > 0 ? t : 0, a = this._chartStore.getTimeScaleStore();
      if (i > 0) {
        a.startScroll();
        var s = (/* @__PURE__ */ new Date()).getTime(), l = function() {
          var u = ((/* @__PURE__ */ new Date()).getTime() - s) / i, c = u >= 1, h = c ? r : r * u;
          a.scroll(h), c || requestAnimationFrame(l);
        };
        l();
      } else
        a.startScroll(), a.scroll(r);
    }, e.prototype.scrollToRealTime = function(r) {
      var t = this._chartStore.getTimeScaleStore(), i = t.getBarSpace().bar, a = t.getLastBarRightSideDiffBarCount() - t.getInitialOffsetRightDistance() / i, s = a * i;
      this.scrollByDistance(s, r);
    }, e.prototype.scrollToDataIndex = function(r, t) {
      var i = this._chartStore.getTimeScaleStore(), a = (i.getLastBarRightSideDiffBarCount() + (this.getDataList().length - 1 - r)) * i.getBarSpace().bar;
      this.scrollByDistance(a, t);
    }, e.prototype.scrollToTimestamp = function(r, t) {
      var i = rf(this.getDataList(), "timestamp", r);
      this.scrollToDataIndex(i, t);
    }, e.prototype.zoomAtCoordinate = function(r, t, i) {
      var a = Ae(i) && i > 0 ? i : 0, s = this._chartStore.getTimeScaleStore();
      if (a > 0) {
        var l = s.getBarSpace().bar, u = l * r, c = u - l, h = (/* @__PURE__ */ new Date()).getTime(), d = function() {
          var v = ((/* @__PURE__ */ new Date()).getTime() - h) / a, m = v >= 1, y = m ? c : c * v;
          s.zoom(y / l, t), m || requestAnimationFrame(d);
        };
        d();
      } else
        s.zoom(r, t);
    }, e.prototype.zoomAtDataIndex = function(r, t, i) {
      var a = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(t);
      this.zoomAtCoordinate(r, { x: a, y: 0 }, i);
    }, e.prototype.zoomAtTimestamp = function(r, t, i) {
      var a = rf(this.getDataList(), "timestamp", t);
      this.zoomAtDataIndex(r, a, i);
    }, e.prototype.convertToPixel = function(r, t) {
      var i, a = t.paneId, s = a === void 0 ? gt.CANDLE : a, l = t.absolute, u = l === void 0 ? !1 : l, c = [];
      if (s !== gt.X_AXIS) {
        var h = this.getDrawPaneById(s);
        if (h !== null) {
          var d = this._chartStore.getTimeScaleStore(), v = h.getBounding(), m = new Array().concat(r), y = this._xAxisPane.getAxisComponent(), C = h.getAxisComponent();
          c = m.map(function(b) {
            var _ = {}, w = b.dataIndex;
            if (Ae(b.timestamp) && (w = d.timestampToDataIndex(b.timestamp)), Ae(w) && (_.x = y == null ? void 0 : y.convertToPixel(w)), Ae(b.value)) {
              var T = C == null ? void 0 : C.convertToPixel(b.value);
              _.y = u ? v.top + T : T;
            }
            return _;
          });
        }
      }
      return Dn(r) ? c : (i = c[0]) !== null && i !== void 0 ? i : {};
    }, e.prototype.convertFromPixel = function(r, t) {
      var i, a = t.paneId, s = a === void 0 ? gt.CANDLE : a, l = t.absolute, u = l === void 0 ? !1 : l, c = [];
      if (s !== gt.X_AXIS) {
        var h = this.getDrawPaneById(s);
        if (h !== null) {
          var d = this._chartStore.getTimeScaleStore(), v = h.getBounding(), m = new Array().concat(r), y = this._xAxisPane.getAxisComponent(), C = h.getAxisComponent();
          c = m.map(function(b) {
            var _, w, T = {};
            if (Ae(b.x)) {
              var P = (_ = y == null ? void 0 : y.convertFromPixel(b.x)) !== null && _ !== void 0 ? _ : -1;
              T.dataIndex = P, T.timestamp = (w = d.dataIndexToTimestamp(P)) !== null && w !== void 0 ? w : void 0;
            }
            if (Ae(b.y)) {
              var M = u ? b.y - v.top : b.y;
              T.value = C.convertFromPixel(M);
            }
            return T;
          });
        }
      }
      return Dn(r) ? c : (i = c[0]) !== null && i !== void 0 ? i : {};
    }, e.prototype.executeAction = function(r, t) {
      var i;
      switch (r) {
        case Cn.OnCrosshairChange: {
          var a = Le({}, t);
          a.paneId = (i = a.paneId) !== null && i !== void 0 ? i : gt.CANDLE, this._chartStore.getTooltipStore().setCrosshair(a);
          break;
        }
      }
    }, e.prototype.subscribeAction = function(r, t) {
      this._chartStore.getActionStore().subscribe(r, t);
    }, e.prototype.unsubscribeAction = function(r, t) {
      this._chartStore.getActionStore().unsubscribe(r, t);
    }, e.prototype.getConvertPictureUrl = function(r, t, i) {
      var a = this, s = this._chartContainer.offsetWidth, l = this._chartContainer.offsetHeight, u = ri("canvas", {
        width: "".concat(s, "px"),
        height: "".concat(l, "px"),
        boxSizing: "border-box"
      }), c = u.getContext("2d"), h = Ta(u);
      u.width = s * h, u.height = l * h, c.scale(h, h), c.fillStyle = i ?? "#FFFFFF", c.fillRect(0, 0, s, l);
      var d = r ?? !1;
      return this._drawPanes.forEach(function(v) {
        var m = a._separatorPanes.get(v);
        if (pe(m)) {
          var y = m.getBounding();
          c.drawImage(m.getImage(d), y.left, y.top, y.width, y.height);
        }
        var C = v.getBounding();
        c.drawImage(v.getImage(d), 0, C.top, s, C.height);
      }), u.toDataURL("image/".concat(t ?? "jpeg"));
    }, e.prototype.resize = function() {
      this.adjustPaneViewport(!0, !0, !0, !0, !0);
    }, e.prototype.destroy = function() {
      this._chartEvent.destroy(), this._drawPanes.forEach(function(r) {
        r.destroy();
      }), this._drawPanes = [], this._xAxisPane.destroy(), this._container.removeChild(this._chartContainer);
    }, e;
  }()
), l1 = /* @__PURE__ */ new Map(), m7 = 1;
function _7(e, r) {
  var t;
  if (Ne(e) ? t = document.getElementById(e) : t = e, t === null)
    return null;
  var i = l1.get(t.id);
  if (pe(i))
    return i;
  var a = "k_line_chart_".concat(m7++);
  return i = new gd(t, r), i.id = a, t.setAttribute("k-line-chart-id", a), l1.set(a, i), i;
}
function yd(e) {
  var r, t, i;
  if (e instanceof gd)
    i = e.id;
  else {
    var a = void 0;
    Ne(e) ? a = document.getElementById(e) : a = e, i = (r = a == null ? void 0 : a.getAttribute("k-line-chart-id")) !== null && r !== void 0 ? r : null;
  }
  i !== null && ((t = l1.get(i)) === null || t === void 0 || t.destroy(), l1.delete(i));
}
var ee = {
  clone: Fo,
  merge: nn,
  isString: Ne,
  isNumber: Ae,
  isValid: pe,
  isObject: Fn,
  isArray: Dn,
  isFunction: On,
  isBoolean: aa,
  formatValue: Kt,
  formatPrecision: er,
  formatBigNumber: O9,
  formatDate: F9,
  formatThousands: fr,
  calcTextWidth: il,
  getLinearSlopeIntercept: A1,
  getLinearYFromSlopeIntercept: wf,
  getLinearYFromCoordinates: al,
  checkCoordinateOnArc: rd,
  checkCoordinateOnCircle: H9,
  checkCoordinateOnLine: W9,
  checkCoordinateOnPolygon: Q9,
  checkCoordinateOnRect: q9,
  checkCoordinateOnText: ed,
  drawArc: nd,
  drawCircle: G9,
  drawLine: Y9,
  drawPolygon: j9,
  drawRect: Pf,
  drawText: If,
  drawRectText: B8
};
function el(e, r, t) {
  const i = (e.x - r.x) * Math.cos(t) - (e.y - r.y) * Math.sin(t) + r.x, a = (e.x - r.x) * Math.sin(t) + (e.y - r.y) * Math.cos(t) + r.y;
  return { x: i, y: a };
}
function af(e, r) {
  if (e.length > 1) {
    let t;
    return e[0].x === e[1].x && e[0].y !== e[1].y ? e[0].y < e[1].y ? t = {
      x: e[0].x,
      y: r.height
    } : t = {
      x: e[0].x,
      y: 0
    } : e[0].x > e[1].x ? t = {
      x: 0,
      y: ee.getLinearYFromCoordinates(e[0], e[1], { x: 0, y: e[0].y })
    } : t = {
      x: r.width,
      y: ee.getLinearYFromCoordinates(e[0], e[1], { x: r.width, y: e[0].y })
    }, { coordinates: [e[0], t] };
  }
  return [];
}
function md(e, r) {
  const t = Math.abs(e.x - r.x), i = Math.abs(e.y - r.y);
  return Math.sqrt(t * t + i * i);
}
function x7(e, r) {
  const t = `${e}`;
  if (r.length === 0)
    return t;
  if (t.includes(".")) {
    const i = t.split(".");
    return `${i[0].replace(/(\d)(?=(\d{3})+$)/g, (a) => `${a}${r}`)}.${i[1]}`;
  }
  return t.replace(/(\d)(?=(\d{3})+$)/g, (i) => `${i}${r}`);
}
const b7 = {
  name: "arrow",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const r = e[1].x > e[0].x ? 0 : 1, t = ee.getLinearSlopeIntercept(e[0], e[1]);
      let i;
      t ? i = Math.atan(t[0]) + Math.PI * r : e[1].y > e[0].y ? i = Math.PI / 2 : i = Math.PI / 2 * 3;
      const a = el({ x: e[1].x - 8, y: e[1].y + 4 }, e[1], i), s = el({ x: e[1].x - 8, y: e[1].y - 4 }, e[1], i);
      return [
        {
          type: "line",
          attrs: { coordinates: e }
        },
        {
          type: "line",
          ignoreEvent: !0,
          attrs: { coordinates: [a, e[1], s] }
        }
      ];
    }
    return [];
  }
}, C7 = {
  name: "circle",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    circle: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t }) => {
    if (r.length > 1) {
      const i = md(r[0], r[1]);
      return {
        type: "circle",
        attrs: {
          ...r[0],
          r: i
        },
        styles: { style: "stroke_fill" }
      };
    }
    return [];
  }
}, S7 = {
  name: "rect",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => r.length > 1 ? [
    {
      type: "polygon",
      attrs: {
        coordinates: [
          r[0],
          { x: r[1].x, y: r[0].y },
          r[1],
          { x: r[0].x, y: r[1].y }
        ]
      },
      styles: { style: "stroke_fill" }
    }
  ] : []
}, w7 = {
  name: "parallelogram",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => {
    if (e.length === 2)
      return [
        {
          type: "line",
          ignoreEvent: !0,
          attrs: { coordinates: e }
        }
      ];
    if (e.length === 3) {
      const r = { x: e[0].x + (e[2].x - e[1].x), y: e[2].y };
      return [
        {
          type: "polygon",
          attrs: { coordinates: [e[0], e[1], e[2], r] },
          styles: { style: "stroke_fill" }
        }
      ];
    }
    return [];
  },
  performEventPressedMove: ({ points: e, performPointIndex: r, performPoint: t }) => {
    r < 2 && (e[0].price = t.price, e[1].price = t.price);
  },
  performEventMoveForDrawing: ({ currentStep: e, points: r, performPoint: t }) => {
    e === 2 && (r[0].price = t.price);
  }
}, k7 = {
  name: "triangle",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => [
    {
      type: "polygon",
      attrs: { coordinates: e },
      styles: { style: "stroke_fill" }
    }
  ]
}, L7 = {
  name: "fibonacciCircle",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const r = Math.abs(e[0].x - e[1].x), t = Math.abs(e[0].y - e[1].y), i = Math.sqrt(r * r + t * t), a = [0.236, 0.382, 0.5, 0.618, 0.786, 1], s = [], l = [];
      return a.forEach((u) => {
        const c = i * u;
        s.push(
          { ...e[0], r: c }
        ), l.push({
          x: e[0].x,
          y: e[0].y + c + 6,
          text: `${(u * 100).toFixed(1)}%`
        });
      }), [
        {
          type: "circle",
          attrs: s,
          styles: { style: "stroke" }
        },
        {
          type: "text",
          ignoreEvent: !0,
          attrs: l
        }
      ];
    }
    return [];
  }
}, P7 = {
  name: "fibonacciSegment",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, overlay: r, precision: t }) => {
    const i = [], a = [];
    if (e.length > 1) {
      const s = e[1].x > e[0].x ? e[0].x : e[1].x, l = [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0], u = e[0].y - e[1].y, c = r.points, h = c[0].value - c[1].value;
      l.forEach((d) => {
        const v = e[1].y + u * d, m = (c[1].value + h * d).toFixed(t.price);
        i.push({ coordinates: [{ x: e[0].x, y: v }, { x: e[1].x, y: v }] }), a.push({
          x: s,
          y: v,
          text: `${m} (${(d * 100).toFixed(1)}%)`,
          baseline: "bottom"
        });
      });
    }
    return [
      {
        type: "line",
        attrs: i
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, I7 = {
  name: "fibonacciSpiral",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, bounding: r }) => {
    if (e.length > 1) {
      const t = md(e[0], e[1]) / Math.sqrt(24), i = e[1].x > e[0].x ? 0 : 1, a = ee.getLinearSlopeIntercept(e[0], e[1]);
      let s;
      a ? s = Math.atan(a[0]) + Math.PI * i : e[1].y > e[0].y ? s = Math.PI / 2 : s = Math.PI / 2 * 3;
      const l = el(
        { x: e[0].x - t, y: e[0].y },
        e[0],
        s
      ), u = el(
        { x: e[0].x - t, y: e[0].y - t },
        e[0],
        s
      ), c = [{
        ...l,
        r: t,
        startAngle: s,
        endAngle: s + Math.PI / 2
      }, {
        ...u,
        r: t * 2,
        startAngle: s + Math.PI / 2,
        endAngle: s + Math.PI
      }];
      let h = e[0].x - t, d = e[0].y - t;
      for (let v = 2; v < 9; v++) {
        const m = c[v - 2].r + c[v - 1].r;
        let y = 0;
        switch (v % 4) {
          case 0: {
            y = s, h -= c[v - 2].r;
            break;
          }
          case 1: {
            y = s + Math.PI / 2, d -= c[v - 2].r;
            break;
          }
          case 2: {
            y = s + Math.PI, h += c[v - 2].r;
            break;
          }
          case 3: {
            y = s + Math.PI / 2 * 3, d += c[v - 2].r;
            break;
          }
        }
        const C = y + Math.PI / 2, b = el({ x: h, y: d }, e[0], s);
        c.push({
          ...b,
          r: m,
          startAngle: y,
          endAngle: C
        });
      }
      return [
        {
          type: "arc",
          attrs: c
        },
        {
          type: "line",
          attrs: af(e, r)
        }
      ];
    }
    return [];
  }
}, A7 = {
  name: "fibonacciSpeedResistanceFan",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, bounding: r }) => {
    const t = [];
    let i = [];
    const a = [];
    if (e.length > 1) {
      const s = e[1].x > e[0].x ? -38 : 4, l = e[1].y > e[0].y ? -2 : 20, u = e[1].x - e[0].x, c = e[1].y - e[0].y;
      [1, 0.75, 0.618, 0.5, 0.382, 0.25, 0].forEach((d) => {
        const v = e[1].x - u * d, m = e[1].y - c * d;
        t.push({ coordinates: [{ x: v, y: e[0].y }, { x: v, y: e[1].y }] }), t.push({ coordinates: [{ x: e[0].x, y: m }, { x: e[1].x, y: m }] }), i = i.concat(af([e[0], { x: v, y: e[1].y }], r)), i = i.concat(af([e[0], { x: e[1].x, y: m }], r)), a.unshift({
          x: e[0].x + s,
          y: m + 10,
          text: `${d.toFixed(3)}`
        }), a.unshift({
          x: v - 18,
          y: e[0].y + l,
          text: `${d.toFixed(3)}`
        });
      });
    }
    return [
      {
        type: "line",
        attrs: t
      },
      {
        type: "line",
        attrs: i
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, $7 = {
  name: "fibonacciExtension",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, overlay: r, precision: t }) => {
    const i = [], a = [];
    if (e.length > 2) {
      const s = r.points, l = s[1].value - s[0].value, u = e[1].y - e[0].y, c = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1], h = e[2].x > e[1].x ? e[1].x : e[2].x;
      c.forEach((d) => {
        const v = e[2].y + u * d, m = (s[2].value + l * d).toFixed(t.price);
        i.push({ coordinates: [{ x: e[1].x, y: v }, { x: e[2].x, y: v }] }), a.push({
          x: h,
          y: v,
          text: `${m} (${(d * 100).toFixed(1)}%)`,
          baseline: "bottom"
        });
      });
    }
    return [
      {
        type: "line",
        attrs: { coordinates: e },
        styles: { style: "dashed" }
      },
      {
        type: "line",
        attrs: i
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, T7 = {
  name: "gannBox",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const r = (e[1].y - e[0].y) / 4, t = e[1].x - e[0].x, i = [
        { coordinates: [e[0], { x: e[1].x, y: e[1].y - r }] },
        { coordinates: [e[0], { x: e[1].x, y: e[1].y - r * 2 }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[1].x, y: e[0].y + r }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[1].x, y: e[0].y + r * 2 }] },
        { coordinates: [{ ...e[0] }, { x: e[0].x + t * 0.236, y: e[1].y }] },
        { coordinates: [{ ...e[0] }, { x: e[0].x + t * 0.5, y: e[1].y }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[0].x + t * 0.236, y: e[0].y }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[0].x + t * 0.5, y: e[0].y }] }
      ], a = [
        { coordinates: [e[0], e[1]] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[1].x, y: e[0].y }] }
      ];
      return [
        {
          type: "line",
          attrs: [
            { coordinates: [e[0], { x: e[1].x, y: e[0].y }] },
            { coordinates: [{ x: e[1].x, y: e[0].y }, e[1]] },
            { coordinates: [e[1], { x: e[0].x, y: e[1].y }] },
            { coordinates: [{ x: e[0].x, y: e[1].y }, e[0]] }
          ]
        },
        {
          type: "polygon",
          ignoreEvent: !0,
          attrs: {
            coordinates: [
              e[0],
              { x: e[1].x, y: e[0].y },
              e[1],
              { x: e[0].x, y: e[1].y }
            ]
          },
          styles: { style: "fill" }
        },
        {
          type: "line",
          attrs: i,
          styles: { style: "dashed" }
        },
        {
          type: "line",
          attrs: a
        }
      ];
    }
    return [];
  }
}, M7 = {
  name: "threeWaves",
  totalStep: 5,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const r = e.map((t, i) => ({
      ...t,
      text: `(${i})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: r
      }
    ];
  }
}, E7 = {
  name: "fiveWaves",
  totalStep: 7,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const r = e.map((t, i) => ({
      ...t,
      text: `(${i})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: r
      }
    ];
  }
}, D7 = {
  name: "eightWaves",
  totalStep: 10,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const r = e.map((t, i) => ({
      ...t,
      text: `(${i})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: r
      }
    ];
  }
}, F7 = {
  name: "anyWaves",
  totalStep: Number.MAX_SAFE_INTEGER,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const r = e.map((t, i) => ({
      ...t,
      text: `(${i})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: r
      }
    ];
  }
}, O7 = {
  name: "abcd",
  totalStep: 5,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    let r = [], t = [];
    const i = ["A", "B", "C", "D"], a = e.map((s, l) => ({
      ...s,
      baseline: "bottom",
      text: `(${i[l]})`
    }));
    return e.length > 2 && (r = [e[0], e[2]], e.length > 3 && (t = [e[1], e[3]])), [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "line",
        attrs: [{ coordinates: r }, { coordinates: t }],
        styles: { style: "dashed" }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, R7 = {
  name: "xabcd",
  totalStep: 6,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e, overlay: r }) => {
    const t = [], i = [], a = ["X", "A", "B", "C", "D"], s = e.map((l, u) => ({
      ...l,
      baseline: "bottom",
      text: `(${a[u]})`
    }));
    return e.length > 2 && (t.push({ coordinates: [e[0], e[2]] }), i.push({ coordinates: [e[0], e[1], e[2]] }), e.length > 3 && (t.push({ coordinates: [e[1], e[3]] }), e.length > 4 && (t.push({ coordinates: [e[2], e[4]] }), i.push({ coordinates: [e[2], e[3], e[4]] })))), [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "line",
        attrs: t,
        styles: { style: "dashed" }
      },
      {
        type: "polygon",
        ignoreEvent: !0,
        attrs: i
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: s
      }
    ];
  }
}, B7 = {
  name: "fibonacciDiagonal",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, bounding: r, overlay: t, precision: i, thousandsSeparator: a }) => {
    const s = t.points;
    if (e.length > 0) {
      const l = [], u = [], c = e[0].x, h = e[e.length - 1].x;
      if (e.length > 1 && s[0].value !== void 0 && s[1].value !== void 0) {
        const d = [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0], v = e[0].y - e[1].y, m = s[0].value - s[1].value;
        d.forEach((y) => {
          const C = e[1].y + v * y, b = x7(((s[1].value ?? 0) + m * y).toFixed(i.price), a);
          l.push({ coordinates: [{ x: c, y: C }, { x: h, y: C }] }), u.push({
            x: c,
            y: C,
            text: `${b} (${(y * 100).toFixed(1)}%)`,
            baseline: "bottom"
          });
        }), l.push({ coordinates: [{ x: l[0].coordinates[0].x, y: l[0].coordinates[0].y }, { x: l[d.length - 1].coordinates[1].x, y: l[d.length - 1].coordinates[1].y }] });
      }
      return [
        {
          type: "line",
          attrs: l
        },
        {
          type: "text",
          isCheckEvent: !1,
          attrs: u
        }
      ];
    }
    return [];
  },
  onRightClick: (e) => (alert(`object ${e.overlay.name} was clicked`), !0)
}, N7 = (e, r) => e === r, of = Symbol("solid-proxy"), z7 = Symbol("solid-track"), u1 = {
  equals: N7
};
let _d = Sd;
const Ti = 1, c1 = 2, xd = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, Hc = {};
var Yt = null;
let Gc = null, V7 = null, Dt = null, kr = null, $i = null, $1 = 0;
function n1(e, r) {
  const t = Dt, i = Yt, a = e.length === 0, s = r === void 0 ? i : r, l = a ? xd : {
    owned: null,
    cleanups: null,
    context: s ? s.context : null,
    owner: s
  }, u = a ? e : () => e(() => Rn(() => M1(l)));
  Yt = l, Dt = null;
  try {
    return la(u, !0);
  } finally {
    Dt = t, Yt = i;
  }
}
function J(e, r) {
  r = r ? Object.assign({}, u1, r) : u1;
  const t = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: r.equals || void 0
  }, i = (a) => (typeof a == "function" && (a = a(t.value)), Cd(t, a));
  return [bd.bind(t), i];
}
function o2(e, r, t) {
  const i = T1(e, r, !0, Ti);
  Bo(i);
}
function Pt(e, r, t) {
  const i = T1(e, r, !1, Ti);
  Bo(i);
}
function En(e, r, t) {
  _d = K7;
  const i = T1(e, r, !1, Ti);
  (!t || !t.render) && (i.user = !0), $i ? $i.push(i) : Bo(i);
}
function yt(e, r, t) {
  t = t ? Object.assign({}, u1, t) : u1;
  const i = T1(e, r, !0, 0);
  return i.observers = null, i.observerSlots = null, i.comparator = t.equals || void 0, Bo(i), bd.bind(i);
}
function W7(e) {
  return e && typeof e == "object" && "then" in e;
}
function Y7(e, r, t) {
  let i, a, s;
  arguments.length === 2 && typeof r == "object" || arguments.length === 1 ? (i = !0, a = e, s = r || {}) : (i = e, a = r, s = t || {});
  let l = null, u = Hc, c = !1, h = "initialValue" in s, d = typeof i == "function" && yt(i);
  const v = /* @__PURE__ */ new Set(), [m, y] = (s.storage || J)(s.initialValue), [C, b] = J(void 0), [_, w] = J(void 0, {
    equals: !1
  }), [T, P] = J(h ? "ready" : "unresolved");
  function M(W, N, Y, K) {
    return l === W && (l = null, K !== void 0 && (h = !0), (W === u || N === u) && s.onHydrated && queueMicrotask(
      () => s.onHydrated(K, {
        value: N
      })
    ), u = Hc, F(N, Y)), N;
  }
  function F(W, N) {
    la(() => {
      N === void 0 && y(() => W), P(N !== void 0 ? "errored" : h ? "ready" : "unresolved"), b(N);
      for (const Y of v.keys())
        Y.decrement();
      v.clear();
    }, !1);
  }
  function O() {
    const W = X7, N = m(), Y = C();
    if (Y !== void 0 && !l)
      throw Y;
    return Dt && !Dt.user && W && o2(() => {
      _(), l && (W.resolved || v.has(W) || (W.increment(), v.add(W)));
    }), N;
  }
  function V(W = !0) {
    if (W !== !1 && c)
      return;
    c = !1;
    const N = d ? d() : i;
    if (N == null || N === !1) {
      M(l, Rn(m));
      return;
    }
    const Y = u !== Hc ? u : Rn(
      () => a(N, {
        value: m(),
        refetching: W
      })
    );
    return W7(Y) ? (l = Y, "value" in Y ? (Y.status === "success" ? M(l, Y.value, void 0, N) : M(l, void 0, void 0, N), Y) : (c = !0, queueMicrotask(() => c = !1), la(() => {
      P(h ? "refreshing" : "pending"), w();
    }, !1), Y.then(
      (K) => M(Y, K, void 0, N),
      (K) => M(Y, void 0, kd(K), N)
    ))) : (M(l, Y, void 0, N), Y);
  }
  return Object.defineProperties(O, {
    state: {
      get: () => T()
    },
    error: {
      get: () => C()
    },
    loading: {
      get() {
        const W = T();
        return W === "pending" || W === "refreshing";
      }
    },
    latest: {
      get() {
        if (!h)
          return O();
        const W = C();
        if (W && !l)
          throw W;
        return m();
      }
    }
  }), d ? o2(() => V(!1)) : V(!1), [
    O,
    {
      refetch: V,
      mutate: y
    }
  ];
}
function Rn(e) {
  if (Dt === null)
    return e();
  const r = Dt;
  Dt = null;
  try {
    return e();
  } finally {
    Dt = r;
  }
}
function Tf(e) {
  En(() => Rn(e));
}
function Mf(e) {
  return Yt === null || (Yt.cleanups === null ? Yt.cleanups = [e] : Yt.cleanups.push(e)), e;
}
function sf(e) {
  const r = Dt, t = Yt;
  return Promise.resolve().then(() => {
    Dt = r, Yt = t;
    let i;
    return la(e, !1), Dt = Yt = null, i ? i.done : void 0;
  });
}
let X7;
function bd() {
  if (this.sources && this.state)
    if (this.state === Ti)
      Bo(this);
    else {
      const e = kr;
      kr = null, la(() => h1(this), !1), kr = e;
    }
  if (Dt) {
    const e = this.observers ? this.observers.length : 0;
    Dt.sources ? (Dt.sources.push(this), Dt.sourceSlots.push(e)) : (Dt.sources = [this], Dt.sourceSlots = [e]), this.observers ? (this.observers.push(Dt), this.observerSlots.push(Dt.sources.length - 1)) : (this.observers = [Dt], this.observerSlots = [Dt.sources.length - 1]);
  }
  return this.value;
}
function Cd(e, r, t) {
  let i = e.value;
  return (!e.comparator || !e.comparator(i, r)) && (e.value = r, e.observers && e.observers.length && la(() => {
    for (let a = 0; a < e.observers.length; a += 1) {
      const s = e.observers[a], l = Gc && Gc.running;
      l && Gc.disposed.has(s), (l ? !s.tState : !s.state) && (s.pure ? kr.push(s) : $i.push(s), s.observers && wd(s)), l || (s.state = Ti);
    }
    if (kr.length > 1e6)
      throw kr = [], new Error();
  }, !1)), r;
}
function Bo(e) {
  if (!e.fn)
    return;
  M1(e);
  const r = $1;
  Z7(
    e,
    e.value,
    r
  );
}
function Z7(e, r, t) {
  let i;
  const a = Yt, s = Dt;
  Dt = Yt = e;
  try {
    i = e.fn(r);
  } catch (l) {
    return e.pure && (e.state = Ti, e.owned && e.owned.forEach(M1), e.owned = null), e.updatedAt = t + 1, Ld(l);
  } finally {
    Dt = s, Yt = a;
  }
  (!e.updatedAt || e.updatedAt <= t) && (e.updatedAt != null && "observers" in e ? Cd(e, i) : e.value = i, e.updatedAt = t);
}
function T1(e, r, t, i = Ti, a) {
  const s = {
    fn: e,
    state: i,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: r,
    owner: Yt,
    context: Yt ? Yt.context : null,
    pure: t
  };
  return Yt === null || Yt !== xd && (Yt.owned ? Yt.owned.push(s) : Yt.owned = [s]), s;
}
function f1(e) {
  if (e.state === 0)
    return;
  if (e.state === c1)
    return h1(e);
  if (e.suspense && Rn(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const r = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < $1); )
    e.state && r.push(e);
  for (let t = r.length - 1; t >= 0; t--)
    if (e = r[t], e.state === Ti)
      Bo(e);
    else if (e.state === c1) {
      const i = kr;
      kr = null, la(() => h1(e, r[0]), !1), kr = i;
    }
}
function la(e, r) {
  if (kr)
    return e();
  let t = !1;
  r || (kr = []), $i ? t = !0 : $i = [], $1++;
  try {
    const i = e();
    return U7(t), i;
  } catch (i) {
    t || ($i = null), kr = null, Ld(i);
  }
}
function U7(e) {
  if (kr && (Sd(kr), kr = null), e)
    return;
  const r = $i;
  $i = null, r.length && la(() => _d(r), !1);
}
function Sd(e) {
  for (let r = 0; r < e.length; r++)
    f1(e[r]);
}
function K7(e) {
  let r, t = 0;
  for (r = 0; r < e.length; r++) {
    const i = e[r];
    i.user ? e[t++] = i : f1(i);
  }
  for (r = 0; r < t; r++)
    f1(e[r]);
}
function h1(e, r) {
  e.state = 0;
  for (let t = 0; t < e.sources.length; t += 1) {
    const i = e.sources[t];
    if (i.sources) {
      const a = i.state;
      a === Ti ? i !== r && (!i.updatedAt || i.updatedAt < $1) && f1(i) : a === c1 && h1(i, r);
    }
  }
}
function wd(e) {
  for (let r = 0; r < e.observers.length; r += 1) {
    const t = e.observers[r];
    t.state || (t.state = c1, t.pure ? kr.push(t) : $i.push(t), t.observers && wd(t));
  }
}
function M1(e) {
  let r;
  if (e.sources)
    for (; e.sources.length; ) {
      const t = e.sources.pop(), i = e.sourceSlots.pop(), a = t.observers;
      if (a && a.length) {
        const s = a.pop(), l = t.observerSlots.pop();
        i < a.length && (s.sourceSlots[l] = i, a[i] = s, t.observerSlots[i] = l);
      }
    }
  if (e.owned) {
    for (r = e.owned.length - 1; r >= 0; r--)
      M1(e.owned[r]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (r = e.cleanups.length - 1; r >= 0; r--)
      e.cleanups[r]();
    e.cleanups = null;
  }
  e.state = 0;
}
function kd(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function Ld(e, r = Yt) {
  throw kd(e);
}
const H7 = Symbol("fallback");
function s2(e) {
  for (let r = 0; r < e.length; r++)
    e[r]();
}
function G7(e, r, t = {}) {
  let i = [], a = [], s = [], l = 0, u = r.length > 1 ? [] : null;
  return Mf(() => s2(s)), () => {
    let c = e() || [], h, d;
    return c[z7], Rn(() => {
      let m = c.length, y, C, b, _, w, T, P, M, F;
      if (m === 0)
        l !== 0 && (s2(s), s = [], i = [], a = [], l = 0, u && (u = [])), t.fallback && (i = [H7], a[0] = n1((O) => (s[0] = O, t.fallback())), l = 1);
      else if (l === 0) {
        for (a = new Array(m), d = 0; d < m; d++)
          i[d] = c[d], a[d] = n1(v);
        l = m;
      } else {
        for (b = new Array(m), _ = new Array(m), u && (w = new Array(m)), T = 0, P = Math.min(l, m); T < P && i[T] === c[T]; T++)
          ;
        for (P = l - 1, M = m - 1; P >= T && M >= T && i[P] === c[M]; P--, M--)
          b[M] = a[P], _[M] = s[P], u && (w[M] = u[P]);
        for (y = /* @__PURE__ */ new Map(), C = new Array(M + 1), d = M; d >= T; d--)
          F = c[d], h = y.get(F), C[d] = h === void 0 ? -1 : h, y.set(F, d);
        for (h = T; h <= P; h++)
          F = i[h], d = y.get(F), d !== void 0 && d !== -1 ? (b[d] = a[h], _[d] = s[h], u && (w[d] = u[h]), d = C[d], y.set(F, d)) : s[h]();
        for (d = T; d < m; d++)
          d in b ? (a[d] = b[d], s[d] = _[d], u && (u[d] = w[d], u[d](d))) : a[d] = n1(v);
        a = a.slice(0, l = m), i = c.slice(0);
      }
      return a;
    });
    function v(m) {
      if (s[d] = m, u) {
        const [y, C] = J(d);
        return u[d] = C, r(c[d], y);
      }
      return r(c[d]);
    }
  };
}
function se(e, r) {
  return Rn(() => e(r || {}));
}
function ju() {
  return !0;
}
const Q7 = {
  get(e, r, t) {
    return r === of ? t : e.get(r);
  },
  has(e, r) {
    return r === of ? !0 : e.has(r);
  },
  set: ju,
  deleteProperty: ju,
  getOwnPropertyDescriptor(e, r) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(r);
      },
      set: ju,
      deleteProperty: ju
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function Qc(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function j7() {
  for (let e = 0, r = this.length; e < r; ++e) {
    const t = this[e]();
    if (t !== void 0)
      return t;
  }
}
function Pd(...e) {
  let r = !1;
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    r = r || !!u && of in u, e[l] = typeof u == "function" ? (r = !0, yt(u)) : u;
  }
  if (r)
    return new Proxy(
      {
        get(l) {
          for (let u = e.length - 1; u >= 0; u--) {
            const c = Qc(e[u])[l];
            if (c !== void 0)
              return c;
          }
        },
        has(l) {
          for (let u = e.length - 1; u >= 0; u--)
            if (l in Qc(e[u]))
              return !0;
          return !1;
        },
        keys() {
          const l = [];
          for (let u = 0; u < e.length; u++)
            l.push(...Object.keys(Qc(e[u])));
          return [...new Set(l)];
        }
      },
      Q7
    );
  const t = {}, i = /* @__PURE__ */ Object.create(null);
  for (let l = e.length - 1; l >= 0; l--) {
    const u = e[l];
    if (!u)
      continue;
    const c = Object.getOwnPropertyNames(u);
    for (let h = c.length - 1; h >= 0; h--) {
      const d = c[h];
      if (d === "__proto__" || d === "constructor")
        continue;
      const v = Object.getOwnPropertyDescriptor(u, d);
      if (!i[d])
        i[d] = v.get ? {
          enumerable: !0,
          configurable: !0,
          get: j7.bind(t[d] = [v.get.bind(u)])
        } : v.value !== void 0 ? v : void 0;
      else {
        const m = t[d];
        m && (v.get ? m.push(v.get.bind(u)) : v.value !== void 0 && m.push(() => v.value));
      }
    }
  }
  const a = {}, s = Object.keys(i);
  for (let l = s.length - 1; l >= 0; l--) {
    const u = s[l], c = i[u];
    c && c.get ? Object.defineProperty(a, u, c) : a[u] = c ? c.value : void 0;
  }
  return a;
}
const q7 = (e) => `Stale read from <${e}>.`;
function ol(e) {
  const r = "fallback" in e && {
    fallback: () => e.fallback
  };
  return yt(G7(() => e.each, e.children, r || void 0));
}
function Ct(e) {
  const r = e.keyed, t = yt(() => e.when, void 0, {
    equals: (i, a) => r ? i === a : !i == !a
  });
  return yt(
    () => {
      const i = t();
      if (i) {
        const a = e.children;
        return typeof a == "function" && a.length > 0 ? Rn(
          () => a(
            r ? i : () => {
              if (!Rn(t))
                throw q7("Show");
              return e.when;
            }
          )
        ) : a;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
const [me, l2] = J(null), [i1, J7] = J();
function e4(e, r, t) {
  let i = t.length, a = r.length, s = i, l = 0, u = 0, c = r[a - 1].nextSibling, h = null;
  for (; l < a || u < s; ) {
    if (r[l] === t[u]) {
      l++, u++;
      continue;
    }
    for (; r[a - 1] === t[s - 1]; )
      a--, s--;
    if (a === l) {
      const d = s < i ? u ? t[u - 1].nextSibling : t[s - u] : c;
      for (; u < s; )
        e.insertBefore(t[u++], d);
    } else if (s === u)
      for (; l < a; )
        (!h || !h.has(r[l])) && r[l].remove(), l++;
    else if (r[l] === t[s - 1] && t[u] === r[a - 1]) {
      const d = r[--a].nextSibling;
      e.insertBefore(t[u++], r[l++].nextSibling), e.insertBefore(t[--s], d), r[a] = t[s];
    } else {
      if (!h) {
        h = /* @__PURE__ */ new Map();
        let v = u;
        for (; v < s; )
          h.set(t[v], v++);
      }
      const d = h.get(r[l]);
      if (d != null)
        if (u < d && d < s) {
          let v = l, m = 1, y;
          for (; ++v < a && v < s && !((y = h.get(r[v])) == null || y !== d + m); )
            m++;
          if (m > d - u) {
            const C = r[l];
            for (; u < d; )
              e.insertBefore(t[u++], C);
          } else
            e.replaceChild(t[u++], r[l++]);
        } else
          l++;
      else
        r[l++].remove();
    }
  }
}
const u2 = "_$DX_DELEGATE";
function t4(e, r, t, i = {}) {
  let a;
  return n1((s) => {
    a = s, r === document ? e() : le(r, e(), r.firstChild ? null : void 0, t);
  }, i.owner), () => {
    a(), r.textContent = "";
  };
}
function ue(e, r, t) {
  let i;
  const a = () => {
    const l = document.createElement("template");
    return l.innerHTML = e, t ? l.content.firstChild.firstChild : l.content.firstChild;
  }, s = r ? () => Rn(() => document.importNode(i || (i = a()), !0)) : () => (i || (i = a())).cloneNode(!0);
  return s.cloneNode = s, s;
}
function Dr(e, r = window.document) {
  const t = r[u2] || (r[u2] = /* @__PURE__ */ new Set());
  for (let i = 0, a = e.length; i < a; i++) {
    const s = e[i];
    t.has(s) || (t.add(s), r.addEventListener(s, r4));
  }
}
function Er(e, r, t) {
  t == null ? e.removeAttribute(r) : e.setAttribute(r, t);
}
function Bn(e, r) {
  r == null ? e.removeAttribute("class") : e.className = r;
}
function Li(e, r, t, i) {
  if (i)
    Array.isArray(t) ? (e[`$$${r}`] = t[0], e[`$$${r}Data`] = t[1]) : e[`$$${r}`] = t;
  else if (Array.isArray(t)) {
    const a = t[0];
    e.addEventListener(r, t[0] = (s) => a.call(e, t[1], s));
  } else
    e.addEventListener(r, t);
}
function ni(e, r, t) {
  if (!r)
    return t ? Er(e, "style") : r;
  const i = e.style;
  if (typeof r == "string")
    return i.cssText = r;
  typeof t == "string" && (i.cssText = t = void 0), t || (t = {}), r || (r = {});
  let a, s;
  for (s in t)
    r[s] == null && i.removeProperty(s), delete t[s];
  for (s in r)
    a = r[s], a !== t[s] && (i.setProperty(s, a), t[s] = a);
  return t;
}
function Ef(e, r, t) {
  return Rn(() => e(r, t));
}
function le(e, r, t, i) {
  if (t !== void 0 && !i && (i = []), typeof r != "function")
    return d1(e, r, i, t);
  Pt((a) => d1(e, r(), a, t), i);
}
function r4(e) {
  const r = `$$${e.type}`;
  let t = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== t && Object.defineProperty(e, "target", {
    configurable: !0,
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }); t; ) {
    const i = t[r];
    if (i && !t.disabled) {
      const a = t[`${r}Data`];
      if (a !== void 0 ? i.call(t, a, e) : i.call(t, e), e.cancelBubble)
        return;
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function d1(e, r, t, i, a) {
  for (; typeof t == "function"; )
    t = t();
  if (r === t)
    return t;
  const s = typeof r, l = i !== void 0;
  if (e = l && t[0] && t[0].parentNode || e, s === "string" || s === "number")
    if (s === "number" && (r = r.toString()), l) {
      let u = t[0];
      u && u.nodeType === 3 ? u.data !== r && (u.data = r) : u = document.createTextNode(r), t = ko(e, t, i, u);
    } else
      t !== "" && typeof t == "string" ? t = e.firstChild.data = r : t = e.textContent = r;
  else if (r == null || s === "boolean")
    t = ko(e, t, i);
  else {
    if (s === "function")
      return Pt(() => {
        let u = r();
        for (; typeof u == "function"; )
          u = u();
        t = d1(e, u, t, i);
      }), () => t;
    if (Array.isArray(r)) {
      const u = [], c = t && Array.isArray(t);
      if (lf(u, r, t, a))
        return Pt(() => t = d1(e, u, t, i, !0)), () => t;
      if (u.length === 0) {
        if (t = ko(e, t, i), l)
          return t;
      } else
        c ? t.length === 0 ? c2(e, u, i) : e4(e, t, u) : (t && ko(e), c2(e, u));
      t = u;
    } else if (r.nodeType) {
      if (Array.isArray(t)) {
        if (l)
          return t = ko(e, t, i, r);
        ko(e, t, null, r);
      } else
        t == null || t === "" || !e.firstChild ? e.appendChild(r) : e.replaceChild(r, e.firstChild);
      t = r;
    }
  }
  return t;
}
function lf(e, r, t, i) {
  let a = !1;
  for (let s = 0, l = r.length; s < l; s++) {
    let u = r[s], c = t && t[e.length], h;
    if (!(u == null || u === !0 || u === !1))
      if ((h = typeof u) == "object" && u.nodeType)
        e.push(u);
      else if (Array.isArray(u))
        a = lf(e, u, c) || a;
      else if (h === "function")
        if (i) {
          for (; typeof u == "function"; )
            u = u();
          a = lf(
            e,
            Array.isArray(u) ? u : [u],
            Array.isArray(c) ? c : [c]
          ) || a;
        } else
          e.push(u), a = !0;
      else {
        const d = String(u);
        c && c.nodeType === 3 && c.data === d ? e.push(c) : e.push(document.createTextNode(d));
      }
  }
  return a;
}
function c2(e, r, t = null) {
  for (let i = 0, a = r.length; i < a; i++)
    e.insertBefore(r[i], t);
}
function ko(e, r, t, i) {
  if (t === void 0)
    return e.textContent = "";
  const a = i || document.createTextNode("");
  if (r.length) {
    let s = !1;
    for (let l = r.length - 1; l >= 0; l--) {
      const u = r[l];
      if (a !== u) {
        const c = u.parentNode === e;
        !s && !l ? c ? e.replaceChild(a, u) : e.insertBefore(a, t) : c && u.remove();
      } else
        s = !0;
    }
  } else
    e.insertBefore(a, t);
  return [a];
}
var ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function E1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var n4 = typeof ei == "object" && ei && ei.Object === Object && ei, Id = n4, i4 = Id, a4 = typeof self == "object" && self && self.Object === Object && self, o4 = i4 || a4 || Function("return this")(), si = o4, s4 = si, l4 = s4.Symbol, D1 = l4, f2 = D1, Ad = Object.prototype, u4 = Ad.hasOwnProperty, c4 = Ad.toString, Zs = f2 ? f2.toStringTag : void 0;
function f4(e) {
  var r = u4.call(e, Zs), t = e[Zs];
  try {
    e[Zs] = void 0;
    var i = !0;
  } catch {
  }
  var a = c4.call(e);
  return i && (r ? e[Zs] = t : delete e[Zs]), a;
}
var h4 = f4, d4 = Object.prototype, v4 = d4.toString;
function p4(e) {
  return v4.call(e);
}
var g4 = p4, h2 = D1, y4 = h4, m4 = g4, _4 = "[object Null]", x4 = "[object Undefined]", d2 = h2 ? h2.toStringTag : void 0;
function b4(e) {
  return e == null ? e === void 0 ? x4 : _4 : d2 && d2 in Object(e) ? y4(e) : m4(e);
}
var cl = b4;
function C4(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var No = C4, S4 = cl, w4 = No, k4 = "[object AsyncFunction]", L4 = "[object Function]", P4 = "[object GeneratorFunction]", I4 = "[object Proxy]";
function A4(e) {
  if (!w4(e))
    return !1;
  var r = S4(e);
  return r == L4 || r == P4 || r == k4 || r == I4;
}
var $d = A4, $4 = si, T4 = $4["__core-js_shared__"], M4 = T4, jc = M4, v2 = function() {
  var e = /[^.]+$/.exec(jc && jc.keys && jc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function E4(e) {
  return !!v2 && v2 in e;
}
var D4 = E4, F4 = Function.prototype, O4 = F4.toString;
function R4(e) {
  if (e != null) {
    try {
      return O4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Td = R4, B4 = $d, N4 = D4, z4 = No, V4 = Td, W4 = /[\\^$.*+?()[\]{}|]/g, Y4 = /^\[object .+?Constructor\]$/, X4 = Function.prototype, Z4 = Object.prototype, U4 = X4.toString, K4 = Z4.hasOwnProperty, H4 = RegExp(
  "^" + U4.call(K4).replace(W4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function G4(e) {
  if (!z4(e) || N4(e))
    return !1;
  var r = B4(e) ? H4 : Y4;
  return r.test(V4(e));
}
var Q4 = G4;
function j4(e, r) {
  return e == null ? void 0 : e[r];
}
var q4 = j4, J4 = Q4, ey = q4;
function ty(e, r) {
  var t = ey(e, r);
  return J4(t) ? t : void 0;
}
var Da = ty, ry = Da, ny = function() {
  try {
    var e = ry(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), iy = ny, p2 = iy;
function ay(e, r, t) {
  r == "__proto__" && p2 ? p2(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var Md = ay;
function oy(e, r) {
  return e === r || e !== e && r !== r;
}
var Ed = oy, sy = Md, ly = Ed, uy = Object.prototype, cy = uy.hasOwnProperty;
function fy(e, r, t) {
  var i = e[r];
  (!(cy.call(e, r) && ly(i, t)) || t === void 0 && !(r in e)) && sy(e, r, t);
}
var Df = fy, hy = Array.isArray, zo = hy;
function dy(e) {
  return e != null && typeof e == "object";
}
var Vo = dy, vy = cl, py = Vo, gy = "[object Symbol]";
function yy(e) {
  return typeof e == "symbol" || py(e) && vy(e) == gy;
}
var Ff = yy, my = zo, _y = Ff, xy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, by = /^\w*$/;
function Cy(e, r) {
  if (my(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || _y(e) ? !0 : by.test(e) || !xy.test(e) || r != null && e in Object(r);
}
var Sy = Cy, wy = Da, ky = wy(Object, "create"), F1 = ky, g2 = F1;
function Ly() {
  this.__data__ = g2 ? g2(null) : {}, this.size = 0;
}
var Py = Ly;
function Iy(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Ay = Iy, $y = F1, Ty = "__lodash_hash_undefined__", My = Object.prototype, Ey = My.hasOwnProperty;
function Dy(e) {
  var r = this.__data__;
  if ($y) {
    var t = r[e];
    return t === Ty ? void 0 : t;
  }
  return Ey.call(r, e) ? r[e] : void 0;
}
var Fy = Dy, Oy = F1, Ry = Object.prototype, By = Ry.hasOwnProperty;
function Ny(e) {
  var r = this.__data__;
  return Oy ? r[e] !== void 0 : By.call(r, e);
}
var zy = Ny, Vy = F1, Wy = "__lodash_hash_undefined__";
function Yy(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Vy && r === void 0 ? Wy : r, this;
}
var Xy = Yy, Zy = Py, Uy = Ay, Ky = Fy, Hy = zy, Gy = Xy;
function Wo(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var i = e[r];
    this.set(i[0], i[1]);
  }
}
Wo.prototype.clear = Zy;
Wo.prototype.delete = Uy;
Wo.prototype.get = Ky;
Wo.prototype.has = Hy;
Wo.prototype.set = Gy;
var Qy = Wo;
function jy() {
  this.__data__ = [], this.size = 0;
}
var qy = jy, Jy = Ed;
function em(e, r) {
  for (var t = e.length; t--; )
    if (Jy(e[t][0], r))
      return t;
  return -1;
}
var O1 = em, tm = O1, rm = Array.prototype, nm = rm.splice;
function im(e) {
  var r = this.__data__, t = tm(r, e);
  if (t < 0)
    return !1;
  var i = r.length - 1;
  return t == i ? r.pop() : nm.call(r, t, 1), --this.size, !0;
}
var am = im, om = O1;
function sm(e) {
  var r = this.__data__, t = om(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var lm = sm, um = O1;
function cm(e) {
  return um(this.__data__, e) > -1;
}
var fm = cm, hm = O1;
function dm(e, r) {
  var t = this.__data__, i = hm(t, e);
  return i < 0 ? (++this.size, t.push([e, r])) : t[i][1] = r, this;
}
var vm = dm, pm = qy, gm = am, ym = lm, mm = fm, _m = vm;
function Yo(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var i = e[r];
    this.set(i[0], i[1]);
  }
}
Yo.prototype.clear = pm;
Yo.prototype.delete = gm;
Yo.prototype.get = ym;
Yo.prototype.has = mm;
Yo.prototype.set = _m;
var R1 = Yo, xm = Da, bm = si, Cm = xm(bm, "Map"), Of = Cm, y2 = Qy, Sm = R1, wm = Of;
function km() {
  this.size = 0, this.__data__ = {
    hash: new y2(),
    map: new (wm || Sm)(),
    string: new y2()
  };
}
var Lm = km;
function Pm(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Im = Pm, Am = Im;
function $m(e, r) {
  var t = e.__data__;
  return Am(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var B1 = $m, Tm = B1;
function Mm(e) {
  var r = Tm(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Em = Mm, Dm = B1;
function Fm(e) {
  return Dm(this, e).get(e);
}
var Om = Fm, Rm = B1;
function Bm(e) {
  return Rm(this, e).has(e);
}
var Nm = Bm, zm = B1;
function Vm(e, r) {
  var t = zm(this, e), i = t.size;
  return t.set(e, r), this.size += t.size == i ? 0 : 1, this;
}
var Wm = Vm, Ym = Lm, Xm = Em, Zm = Om, Um = Nm, Km = Wm;
function Xo(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var i = e[r];
    this.set(i[0], i[1]);
  }
}
Xo.prototype.clear = Ym;
Xo.prototype.delete = Xm;
Xo.prototype.get = Zm;
Xo.prototype.has = Um;
Xo.prototype.set = Km;
var Dd = Xo, Fd = Dd, Hm = "Expected a function";
function Rf(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Hm);
  var t = function() {
    var i = arguments, a = r ? r.apply(this, i) : i[0], s = t.cache;
    if (s.has(a))
      return s.get(a);
    var l = e.apply(this, i);
    return t.cache = s.set(a, l) || s, l;
  };
  return t.cache = new (Rf.Cache || Fd)(), t;
}
Rf.Cache = Fd;
var Gm = Rf, Qm = Gm, jm = 500;
function qm(e) {
  var r = Qm(e, function(i) {
    return t.size === jm && t.clear(), i;
  }), t = r.cache;
  return r;
}
var Jm = qm, e_ = Jm, t_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r_ = /\\(\\)?/g, n_ = e_(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(t_, function(t, i, a, s) {
    r.push(a ? s.replace(r_, "$1") : i || t);
  }), r;
}), i_ = n_;
function a_(e, r) {
  for (var t = -1, i = e == null ? 0 : e.length, a = Array(i); ++t < i; )
    a[t] = r(e[t], t, e);
  return a;
}
var o_ = a_, m2 = D1, s_ = o_, l_ = zo, u_ = Ff, c_ = 1 / 0, _2 = m2 ? m2.prototype : void 0, x2 = _2 ? _2.toString : void 0;
function Od(e) {
  if (typeof e == "string")
    return e;
  if (l_(e))
    return s_(e, Od) + "";
  if (u_(e))
    return x2 ? x2.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -c_ ? "-0" : r;
}
var f_ = Od, h_ = f_;
function d_(e) {
  return e == null ? "" : h_(e);
}
var v_ = d_, p_ = zo, g_ = Sy, y_ = i_, m_ = v_;
function __(e, r) {
  return p_(e) ? e : g_(e, r) ? [e] : y_(m_(e));
}
var x_ = __, b_ = 9007199254740991, C_ = /^(?:0|[1-9]\d*)$/;
function S_(e, r) {
  var t = typeof e;
  return r = r ?? b_, !!r && (t == "number" || t != "symbol" && C_.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Rd = S_, w_ = Ff, k_ = 1 / 0;
function L_(e) {
  if (typeof e == "string" || w_(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -k_ ? "-0" : r;
}
var P_ = L_, I_ = Df, A_ = x_, $_ = Rd, b2 = No, T_ = P_;
function M_(e, r, t, i) {
  if (!b2(e))
    return e;
  r = A_(r, e);
  for (var a = -1, s = r.length, l = s - 1, u = e; u != null && ++a < s; ) {
    var c = T_(r[a]), h = t;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != l) {
      var d = u[c];
      h = i ? i(d, c, u) : void 0, h === void 0 && (h = b2(d) ? d : $_(r[a + 1]) ? [] : {});
    }
    I_(u, c, h), u = u[c];
  }
  return e;
}
var E_ = M_, D_ = E_;
function F_(e, r, t) {
  return e == null ? e : D_(e, r, t);
}
var O_ = F_;
const Hs = /* @__PURE__ */ E1(O_);
var R_ = R1;
function B_() {
  this.__data__ = new R_(), this.size = 0;
}
var N_ = B_;
function z_(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var V_ = z_;
function W_(e) {
  return this.__data__.get(e);
}
var Y_ = W_;
function X_(e) {
  return this.__data__.has(e);
}
var Z_ = X_, U_ = R1, K_ = Of, H_ = Dd, G_ = 200;
function Q_(e, r) {
  var t = this.__data__;
  if (t instanceof U_) {
    var i = t.__data__;
    if (!K_ || i.length < G_ - 1)
      return i.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new H_(i);
  }
  return t.set(e, r), this.size = t.size, this;
}
var j_ = Q_, q_ = R1, J_ = N_, ex = V_, tx = Y_, rx = Z_, nx = j_;
function Zo(e) {
  var r = this.__data__ = new q_(e);
  this.size = r.size;
}
Zo.prototype.clear = J_;
Zo.prototype.delete = ex;
Zo.prototype.get = tx;
Zo.prototype.has = rx;
Zo.prototype.set = nx;
var ix = Zo;
function ax(e, r) {
  for (var t = -1, i = e == null ? 0 : e.length; ++t < i && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var ox = ax, sx = Df, lx = Md;
function ux(e, r, t, i) {
  var a = !t;
  t || (t = {});
  for (var s = -1, l = r.length; ++s < l; ) {
    var u = r[s], c = i ? i(t[u], e[u], u, t, e) : void 0;
    c === void 0 && (c = e[u]), a ? lx(t, u, c) : sx(t, u, c);
  }
  return t;
}
var N1 = ux;
function cx(e, r) {
  for (var t = -1, i = Array(e); ++t < e; )
    i[t] = r(t);
  return i;
}
var fx = cx, hx = cl, dx = Vo, vx = "[object Arguments]";
function px(e) {
  return dx(e) && hx(e) == vx;
}
var gx = px, C2 = gx, yx = Vo, Bd = Object.prototype, mx = Bd.hasOwnProperty, _x = Bd.propertyIsEnumerable, xx = C2(function() {
  return arguments;
}()) ? C2 : function(e) {
  return yx(e) && mx.call(e, "callee") && !_x.call(e, "callee");
}, bx = xx, v1 = { exports: {} };
function Cx() {
  return !1;
}
var Sx = Cx;
v1.exports;
(function(e, r) {
  var t = si, i = Sx, a = r && !r.nodeType && r, s = a && !0 && e && !e.nodeType && e, l = s && s.exports === a, u = l ? t.Buffer : void 0, c = u ? u.isBuffer : void 0, h = c || i;
  e.exports = h;
})(v1, v1.exports);
var Nd = v1.exports, wx = 9007199254740991;
function kx(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wx;
}
var zd = kx, Lx = cl, Px = zd, Ix = Vo, Ax = "[object Arguments]", $x = "[object Array]", Tx = "[object Boolean]", Mx = "[object Date]", Ex = "[object Error]", Dx = "[object Function]", Fx = "[object Map]", Ox = "[object Number]", Rx = "[object Object]", Bx = "[object RegExp]", Nx = "[object Set]", zx = "[object String]", Vx = "[object WeakMap]", Wx = "[object ArrayBuffer]", Yx = "[object DataView]", Xx = "[object Float32Array]", Zx = "[object Float64Array]", Ux = "[object Int8Array]", Kx = "[object Int16Array]", Hx = "[object Int32Array]", Gx = "[object Uint8Array]", Qx = "[object Uint8ClampedArray]", jx = "[object Uint16Array]", qx = "[object Uint32Array]", Et = {};
Et[Xx] = Et[Zx] = Et[Ux] = Et[Kx] = Et[Hx] = Et[Gx] = Et[Qx] = Et[jx] = Et[qx] = !0;
Et[Ax] = Et[$x] = Et[Wx] = Et[Tx] = Et[Yx] = Et[Mx] = Et[Ex] = Et[Dx] = Et[Fx] = Et[Ox] = Et[Rx] = Et[Bx] = Et[Nx] = Et[zx] = Et[Vx] = !1;
function Jx(e) {
  return Ix(e) && Px(e.length) && !!Et[Lx(e)];
}
var eb = Jx;
function tb(e) {
  return function(r) {
    return e(r);
  };
}
var Bf = tb, p1 = { exports: {} };
p1.exports;
(function(e, r) {
  var t = Id, i = r && !r.nodeType && r, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, l = s && t.process, u = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(p1, p1.exports);
var Nf = p1.exports, rb = eb, nb = Bf, S2 = Nf, w2 = S2 && S2.isTypedArray, ib = w2 ? nb(w2) : rb, ab = ib, ob = fx, sb = bx, lb = zo, ub = Nd, cb = Rd, fb = ab, hb = Object.prototype, db = hb.hasOwnProperty;
function vb(e, r) {
  var t = lb(e), i = !t && sb(e), a = !t && !i && ub(e), s = !t && !i && !a && fb(e), l = t || i || a || s, u = l ? ob(e.length, String) : [], c = u.length;
  for (var h in e)
    (r || db.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    cb(h, c))) && u.push(h);
  return u;
}
var Vd = vb, pb = Object.prototype;
function gb(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || pb;
  return e === t;
}
var zf = gb;
function yb(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Wd = yb, mb = Wd, _b = mb(Object.keys, Object), xb = _b, bb = zf, Cb = xb, Sb = Object.prototype, wb = Sb.hasOwnProperty;
function kb(e) {
  if (!bb(e))
    return Cb(e);
  var r = [];
  for (var t in Object(e))
    wb.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var Lb = kb, Pb = $d, Ib = zd;
function Ab(e) {
  return e != null && Ib(e.length) && !Pb(e);
}
var Yd = Ab, $b = Vd, Tb = Lb, Mb = Yd;
function Eb(e) {
  return Mb(e) ? $b(e) : Tb(e);
}
var Vf = Eb, Db = N1, Fb = Vf;
function Ob(e, r) {
  return e && Db(r, Fb(r), e);
}
var Rb = Ob;
function Bb(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Nb = Bb, zb = No, Vb = zf, Wb = Nb, Yb = Object.prototype, Xb = Yb.hasOwnProperty;
function Zb(e) {
  if (!zb(e))
    return Wb(e);
  var r = Vb(e), t = [];
  for (var i in e)
    i == "constructor" && (r || !Xb.call(e, i)) || t.push(i);
  return t;
}
var Ub = Zb, Kb = Vd, Hb = Ub, Gb = Yd;
function Qb(e) {
  return Gb(e) ? Kb(e, !0) : Hb(e);
}
var Wf = Qb, jb = N1, qb = Wf;
function Jb(e, r) {
  return e && jb(r, qb(r), e);
}
var eC = Jb, g1 = { exports: {} };
g1.exports;
(function(e, r) {
  var t = si, i = r && !r.nodeType && r, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, l = s ? t.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
  function c(h, d) {
    if (d)
      return h.slice();
    var v = h.length, m = u ? u(v) : new h.constructor(v);
    return h.copy(m), m;
  }
  e.exports = c;
})(g1, g1.exports);
var tC = g1.exports;
function rC(e, r) {
  var t = -1, i = e.length;
  for (r || (r = Array(i)); ++t < i; )
    r[t] = e[t];
  return r;
}
var nC = rC;
function iC(e, r) {
  for (var t = -1, i = e == null ? 0 : e.length, a = 0, s = []; ++t < i; ) {
    var l = e[t];
    r(l, t, e) && (s[a++] = l);
  }
  return s;
}
var aC = iC;
function oC() {
  return [];
}
var Xd = oC, sC = aC, lC = Xd, uC = Object.prototype, cC = uC.propertyIsEnumerable, k2 = Object.getOwnPropertySymbols, fC = k2 ? function(e) {
  return e == null ? [] : (e = Object(e), sC(k2(e), function(r) {
    return cC.call(e, r);
  }));
} : lC, Yf = fC, hC = N1, dC = Yf;
function vC(e, r) {
  return hC(e, dC(e), r);
}
var pC = vC;
function gC(e, r) {
  for (var t = -1, i = r.length, a = e.length; ++t < i; )
    e[a + t] = r[t];
  return e;
}
var Zd = gC, yC = Wd, mC = yC(Object.getPrototypeOf, Object), Ud = mC, _C = Zd, xC = Ud, bC = Yf, CC = Xd, SC = Object.getOwnPropertySymbols, wC = SC ? function(e) {
  for (var r = []; e; )
    _C(r, bC(e)), e = xC(e);
  return r;
} : CC, Kd = wC, kC = N1, LC = Kd;
function PC(e, r) {
  return kC(e, LC(e), r);
}
var IC = PC, AC = Zd, $C = zo;
function TC(e, r, t) {
  var i = r(e);
  return $C(e) ? i : AC(i, t(e));
}
var Hd = TC, MC = Hd, EC = Yf, DC = Vf;
function FC(e) {
  return MC(e, DC, EC);
}
var OC = FC, RC = Hd, BC = Kd, NC = Wf;
function zC(e) {
  return RC(e, NC, BC);
}
var VC = zC, WC = Da, YC = si, XC = WC(YC, "DataView"), ZC = XC, UC = Da, KC = si, HC = UC(KC, "Promise"), GC = HC, QC = Da, jC = si, qC = QC(jC, "Set"), JC = qC, eS = Da, tS = si, rS = eS(tS, "WeakMap"), nS = rS, uf = ZC, cf = Of, ff = GC, hf = JC, df = nS, Gd = cl, Uo = Td, L2 = "[object Map]", iS = "[object Object]", P2 = "[object Promise]", I2 = "[object Set]", A2 = "[object WeakMap]", $2 = "[object DataView]", aS = Uo(uf), oS = Uo(cf), sS = Uo(ff), lS = Uo(hf), uS = Uo(df), Pa = Gd;
(uf && Pa(new uf(new ArrayBuffer(1))) != $2 || cf && Pa(new cf()) != L2 || ff && Pa(ff.resolve()) != P2 || hf && Pa(new hf()) != I2 || df && Pa(new df()) != A2) && (Pa = function(e) {
  var r = Gd(e), t = r == iS ? e.constructor : void 0, i = t ? Uo(t) : "";
  if (i)
    switch (i) {
      case aS:
        return $2;
      case oS:
        return L2;
      case sS:
        return P2;
      case lS:
        return I2;
      case uS:
        return A2;
    }
  return r;
});
var Xf = Pa, cS = Object.prototype, fS = cS.hasOwnProperty;
function hS(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && fS.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var dS = hS, vS = si, pS = vS.Uint8Array, gS = pS, T2 = gS;
function yS(e) {
  var r = new e.constructor(e.byteLength);
  return new T2(r).set(new T2(e)), r;
}
var Zf = yS, mS = Zf;
function _S(e, r) {
  var t = r ? mS(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var xS = _S, bS = /\w*$/;
function CS(e) {
  var r = new e.constructor(e.source, bS.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var SS = CS, M2 = D1, E2 = M2 ? M2.prototype : void 0, D2 = E2 ? E2.valueOf : void 0;
function wS(e) {
  return D2 ? Object(D2.call(e)) : {};
}
var kS = wS, LS = Zf;
function PS(e, r) {
  var t = r ? LS(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var IS = PS, AS = Zf, $S = xS, TS = SS, MS = kS, ES = IS, DS = "[object Boolean]", FS = "[object Date]", OS = "[object Map]", RS = "[object Number]", BS = "[object RegExp]", NS = "[object Set]", zS = "[object String]", VS = "[object Symbol]", WS = "[object ArrayBuffer]", YS = "[object DataView]", XS = "[object Float32Array]", ZS = "[object Float64Array]", US = "[object Int8Array]", KS = "[object Int16Array]", HS = "[object Int32Array]", GS = "[object Uint8Array]", QS = "[object Uint8ClampedArray]", jS = "[object Uint16Array]", qS = "[object Uint32Array]";
function JS(e, r, t) {
  var i = e.constructor;
  switch (r) {
    case WS:
      return AS(e);
    case DS:
    case FS:
      return new i(+e);
    case YS:
      return $S(e, t);
    case XS:
    case ZS:
    case US:
    case KS:
    case HS:
    case GS:
    case QS:
    case jS:
    case qS:
      return ES(e, t);
    case OS:
      return new i();
    case RS:
    case zS:
      return new i(e);
    case BS:
      return TS(e);
    case NS:
      return new i();
    case VS:
      return MS(e);
  }
}
var ew = JS, tw = No, F2 = Object.create, rw = function() {
  function e() {
  }
  return function(r) {
    if (!tw(r))
      return {};
    if (F2)
      return F2(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), nw = rw, iw = nw, aw = Ud, ow = zf;
function sw(e) {
  return typeof e.constructor == "function" && !ow(e) ? iw(aw(e)) : {};
}
var lw = sw, uw = Xf, cw = Vo, fw = "[object Map]";
function hw(e) {
  return cw(e) && uw(e) == fw;
}
var dw = hw, vw = dw, pw = Bf, O2 = Nf, R2 = O2 && O2.isMap, gw = R2 ? pw(R2) : vw, yw = gw, mw = Xf, _w = Vo, xw = "[object Set]";
function bw(e) {
  return _w(e) && mw(e) == xw;
}
var Cw = bw, Sw = Cw, ww = Bf, B2 = Nf, N2 = B2 && B2.isSet, kw = N2 ? ww(N2) : Sw, Lw = kw, Pw = ix, Iw = ox, Aw = Df, $w = Rb, Tw = eC, Mw = tC, Ew = nC, Dw = pC, Fw = IC, Ow = OC, Rw = VC, Bw = Xf, Nw = dS, zw = ew, Vw = lw, Ww = zo, Yw = Nd, Xw = yw, Zw = No, Uw = Lw, Kw = Vf, Hw = Wf, Gw = 1, Qw = 2, jw = 4, Qd = "[object Arguments]", qw = "[object Array]", Jw = "[object Boolean]", ek = "[object Date]", tk = "[object Error]", jd = "[object Function]", rk = "[object GeneratorFunction]", nk = "[object Map]", ik = "[object Number]", qd = "[object Object]", ak = "[object RegExp]", ok = "[object Set]", sk = "[object String]", lk = "[object Symbol]", uk = "[object WeakMap]", ck = "[object ArrayBuffer]", fk = "[object DataView]", hk = "[object Float32Array]", dk = "[object Float64Array]", vk = "[object Int8Array]", pk = "[object Int16Array]", gk = "[object Int32Array]", yk = "[object Uint8Array]", mk = "[object Uint8ClampedArray]", _k = "[object Uint16Array]", xk = "[object Uint32Array]", $t = {};
$t[Qd] = $t[qw] = $t[ck] = $t[fk] = $t[Jw] = $t[ek] = $t[hk] = $t[dk] = $t[vk] = $t[pk] = $t[gk] = $t[nk] = $t[ik] = $t[qd] = $t[ak] = $t[ok] = $t[sk] = $t[lk] = $t[yk] = $t[mk] = $t[_k] = $t[xk] = !0;
$t[tk] = $t[jd] = $t[uk] = !1;
function a1(e, r, t, i, a, s) {
  var l, u = r & Gw, c = r & Qw, h = r & jw;
  if (t && (l = a ? t(e, i, a, s) : t(e)), l !== void 0)
    return l;
  if (!Zw(e))
    return e;
  var d = Ww(e);
  if (d) {
    if (l = Nw(e), !u)
      return Ew(e, l);
  } else {
    var v = Bw(e), m = v == jd || v == rk;
    if (Yw(e))
      return Mw(e, u);
    if (v == qd || v == Qd || m && !a) {
      if (l = c || m ? {} : Vw(e), !u)
        return c ? Fw(e, Tw(l, e)) : Dw(e, $w(l, e));
    } else {
      if (!$t[v])
        return a ? e : {};
      l = zw(e, v, u);
    }
  }
  s || (s = new Pw());
  var y = s.get(e);
  if (y)
    return y;
  s.set(e, l), Uw(e) ? e.forEach(function(_) {
    l.add(a1(_, r, t, _, e, s));
  }) : Xw(e) && e.forEach(function(_, w) {
    l.set(w, a1(_, r, t, w, e, s));
  });
  var C = h ? c ? Rw : Ow : c ? Hw : Kw, b = d ? void 0 : C(e);
  return Iw(b || e, function(_, w) {
    b && (w = _, _ = e[w]), Aw(l, w, a1(_, r, t, w, e, s));
  }), l;
}
var bk = a1, Ck = bk, Sk = 1, wk = 4;
function kk(e) {
  return Ck(e, Sk | wk);
}
var Lk = kk;
const Pk = /* @__PURE__ */ E1(Lk);
var Ik = /* @__PURE__ */ ue("<button>");
const vf = (e) => (() => {
  var r = Ik();
  return Li(r, "click", e.onClick, !0), le(r, () => e.children), Pt((t) => {
    var i = e.isDisabled, a = e.style, s = `klinecharts-pro-button ${e.type ?? "confirm"} ${e.class ?? ""}`;
    return i !== t.e && (r.disabled = t.e = i), t.t = ni(r, a, t.t), s !== t.a && Bn(r, t.a = s), t;
  }, {
    e: void 0,
    t: void 0,
    a: void 0
  }), r;
})();
Dr(["click"]);
var Ak = /* @__PURE__ */ ue('<svg viewBox="0 0 1024 1024"class=icon><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-353.706667 567.04a42.496 42.496 0 0 1-60.16 0L243.626667 541.866667c-8.106667-8.106667-12.373333-18.773333-12.373334-29.866667s4.693333-22.186667 12.373334-29.866667a42.496 42.496 0 0 1 60.16 0L426.666667 604.586667l293.546666-293.546667a42.496 42.496 0 1 1 60.16 60.16l-323.413333 323.84z">'), $k = /* @__PURE__ */ ue('<svg viewBox="0 0 1024 1024"class=icon><path d="M245.333333 128h533.333334A117.333333 117.333333 0 0 1 896 245.333333v533.333334A117.333333 117.333333 0 0 1 778.666667 896H245.333333A117.333333 117.333333 0 0 1 128 778.666667V245.333333A117.333333 117.333333 0 0 1 245.333333 128z m0 64c-29.44 0-53.333333 23.893333-53.333333 53.333333v533.333334c0 29.44 23.893333 53.333333 53.333333 53.333333h533.333334c29.44 0 53.333333-23.893333 53.333333-53.333333V245.333333c0-29.44-23.893333-53.333333-53.333333-53.333333H245.333333z">'), Tk = /* @__PURE__ */ ue("<div>"), Mk = /* @__PURE__ */ ue("<span class=label>");
const Ek = () => Ak(), Dk = () => $k(), z2 = (e) => {
  const [r, t] = J(e.checked ?? !1);
  return En(() => {
    "checked" in e && t(e.checked);
  }), (() => {
    var i = Tk();
    return i.$$click = (a) => {
      const s = !r();
      e.onChange && e.onChange(s), t(s);
    }, le(i, (() => {
      var a = yt(() => !!r());
      return () => a() ? se(Ek, {}) : se(Dk, {});
    })(), null), le(i, (() => {
      var a = yt(() => !!e.label);
      return () => a() && (() => {
        var s = Mk();
        return le(s, () => e.label), s;
      })();
    })(), null), Pt((a) => {
      var s = e.style, l = `klinecharts-pro-checkbox ${r() && "checked" || ""} ${e.class || ""}`;
      return a.e = ni(i, s, a.e), l !== a.t && Bn(i, a.t = l), a;
    }, {
      e: void 0,
      t: void 0
    }), i;
  })();
};
Dr(["click"]);
var Fk = /* @__PURE__ */ ue("<div class=klinecharts-pro-loading><i class=circle1></i><i class=circle2></i><i class=circle3>");
const Jd = () => Fk();
var Ok = /* @__PURE__ */ ue('<div class=klinecharts-pro-empty><svg class=icon viewBox="0 0 1024 1024"><path d="M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z">');
const Rk = () => Ok();
var Bk = /* @__PURE__ */ ue("<ul>"), Nk = /* @__PURE__ */ ue("<li>");
const sl = (e) => (() => {
  var r = Bk();
  return le(r, se(Ct, {
    get when() {
      return e.loading;
    },
    get children() {
      return se(Jd, {});
    }
  }), null), le(r, se(Ct, {
    get when() {
      var t;
      return !e.loading && !e.children && !((t = e.dataSource) != null && t.length);
    },
    get children() {
      return se(Rk, {});
    }
  }), null), le(r, se(Ct, {
    get when() {
      return e.children;
    },
    get children() {
      return e.children;
    }
  }), null), le(r, se(Ct, {
    get when() {
      return !e.children;
    },
    get children() {
      var t;
      return (t = e.dataSource) == null ? void 0 : t.map((i) => {
        var a;
        return ((a = e.renderItem) == null ? void 0 : a.call(e, i)) ?? Nk();
      });
    }
  }), null), Pt((t) => {
    var i = e.style, a = `klinecharts-pro-list ${e.class ?? ""}`;
    return t.e = ni(r, i, t.e), a !== t.t && Bn(r, t.t = a), t;
  }, {
    e: void 0,
    t: void 0
  }), r;
})();
var zk = /* @__PURE__ */ ue('<div class=klinecharts-pro-modal><div class=inner><div class=title-container><svg class=close-icon viewBox="0 0 1024 1024"><path d="M934.184927 199.723787 622.457206 511.452531l311.727721 311.703161c14.334473 14.229073 23.069415 33.951253 23.069415 55.743582 0 43.430138-35.178197 78.660524-78.735226 78.660524-21.664416 0-41.361013-8.865925-55.642275-23.069415L511.149121 622.838388 199.420377 934.490384c-14.204513 14.20349-33.901111 23.069415-55.642275 23.069415-43.482327 0-78.737272-35.230386-78.737272-78.660524 0-21.792329 8.864902-41.513486 23.094998-55.743582l311.677579-311.703161L88.135828 199.723787c-14.230096-14.255679-23.094998-33.92567-23.094998-55.642275 0-43.430138 35.254945-78.762855 78.737272-78.762855 21.741163 0 41.437761 8.813736 55.642275 23.069415l311.727721 311.727721L822.876842 88.389096c14.281261-14.255679 33.977859-23.069415 55.642275-23.069415 43.557028 0 78.735226 35.332716 78.735226 78.762855C957.254342 165.798117 948.5194 185.468109 934.184927 199.723787"></path></svg></div><div class=content-container>'), Vk = /* @__PURE__ */ ue("<div class=button-container>");
const Mi = (e) => {
  const r = (t) => {
    var i;
    t.target && t.target.classList.contains("klinecharts-pro-modal") && ((i = e.onClose) == null || i.call(e));
  };
  return (() => {
    var t = zk(), i = t.firstChild, a = i.firstChild, s = a.firstChild, l = a.nextSibling;
    return t.$$click = r, le(a, () => e.title, s), Li(s, "click", e.onClose, !0), le(l, () => e.children), le(i, (() => {
      var u = yt(() => !!(e.buttons && e.buttons.length > 0));
      return () => u() && (() => {
        var c = Vk();
        return le(c, () => e.buttons.map((h) => se(vf, Pd(h, {
          get children() {
            return h.children;
          }
        })))), c;
      })();
    })(), null), t;
  })();
};
Dr(["click"]);
var Wk = /* @__PURE__ */ ue("<div tabindex=0><div class=selector-container><span class=value></span><i class=arrow>"), Yk = /* @__PURE__ */ ue("<div class=drop-down-container><ul>"), Xk = /* @__PURE__ */ ue("<li>");
const ll = (e) => {
  const [r, t] = J(!1), [i, a] = J(e.value);
  return (() => {
    var s = Wk(), l = s.firstChild, u = l.firstChild;
    return s.addEventListener("blur", (c) => {
      t(!1);
    }), s.$$click = (c) => {
      t((h) => !h);
    }, le(u, i), le(s, (() => {
      var c = yt(() => !!(e.dataSource && e.dataSource.length > 0));
      return () => c() && (() => {
        var h = Yk(), d = h.firstChild;
        return le(d, () => e.dataSource.map((v) => {
          const y = v[e.valueKey ?? "text"] ?? v;
          return (() => {
            var C = Xk();
            return C.$$click = (b) => {
              var _;
              b.stopPropagation(), i() !== y && (a(y), (_ = e.onSelected) == null || _.call(e, v)), t(!1);
            }, le(C, () => String(y)), C;
          })();
        })), h;
      })();
    })(), null), Pt((c) => {
      var h = e.style, d = `klinecharts-pro-select ${e.class ?? ""} ${r() ? "klinecharts-pro-select-show" : ""}`;
      return c.e = ni(s, h, c.e), d !== c.t && Bn(s, c.t = d), c;
    }, {
      e: void 0,
      t: void 0
    }), s;
  })();
};
Dr(["click"]);
var Zk = /* @__PURE__ */ ue("<span class=prefix>"), Uk = /* @__PURE__ */ ue("<span class=suffix>"), Kk = /* @__PURE__ */ ue("<div><input id=myInput class=value>");
const [Hk, pf] = J("klinecharts-pro-input klinecharts-pro-timeframe-modal-input"), oa = (e) => {
  const r = Pd({
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER
  }, e), [t, i] = J("normal"), a = (s) => {
    s && s.focus();
  };
  return En(() => {
    a(document.querySelector("#myInput"));
  }), (() => {
    var s = Kk(), l = s.firstChild;
    return s.$$click = () => {
    }, le(s, se(Ct, {
      get when() {
        return r.prefix;
      },
      get children() {
        var u = Zk();
        return le(u, () => r.prefix), u;
      }
    }), l), Li(l, "keydown", r.onKeyDown, !0), l.addEventListener("change", (u) => {
      var h, d;
      const c = u.target.value;
      if ("precision" in r) {
        let v;
        const m = Math.max(0, Math.floor(r.precision));
        m <= 0 ? v = new RegExp(/^[1-9]\d*$/) : v = new RegExp("^\\d+\\.?\\d{0," + m + "}$"), (c === "" || v.test(c) && +c >= r.min && +c <= r.max) && ((h = r.onChange) == null || h.call(r, c === "" ? c : +c));
      } else
        (d = r.onChange) == null || d.call(r, c);
    }), l.addEventListener("blur", () => {
      i("normal");
    }), l.addEventListener("focus", () => {
      i("focus");
    }), Ef(a, l), le(s, se(Ct, {
      get when() {
        return r.suffix;
      },
      get children() {
        var u = Uk();
        return le(u, () => r.suffix), u;
      }
    }), null), Pt((u) => {
      var c = r.style, h = `${Hk()}${r.class ?? ""}`, d = t(), v = r.placeholder ?? "", m = r.focus === !0 ? r.focus : !1;
      return u.e = ni(s, c, u.e), h !== u.t && Bn(s, u.t = h), d !== u.a && Er(s, "data-status", u.a = d), v !== u.o && Er(l, "placeholder", u.o = v), m !== u.i && (l.autofocus = u.i = m), u;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), Pt(() => l.value = r.value), s;
  })();
};
Dr(["click", "keydown"]);
var Gk = /* @__PURE__ */ ue("<div><i class=thumb>");
const e5 = (e) => {
  const [r, t] = J(e.open);
  return (() => {
    var i = Gk();
    return i.$$click = (a) => {
      e.onChange && e.onChange();
    }, Pt((a) => {
      var s = e.style, l = `klinecharts-pro-switch ${r() ? "turn-on" : "turn-off"} ${e.class ?? ""}`;
      return a.e = ni(i, s, a.e), l !== a.t && Bn(i, a.t = l), a;
    }, {
      e: void 0,
      t: void 0
    }), i;
  })();
};
Dr(["click"]);
var y1 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
y1.exports;
(function(e, r) {
  (function() {
    var t, i = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", h = 500, d = "__lodash_placeholder__", v = 1, m = 2, y = 4, C = 1, b = 2, _ = 1, w = 2, T = 4, P = 8, M = 16, F = 32, O = 64, V = 128, W = 256, N = 512, Y = 30, K = "...", G = 800, q = 16, he = 1, ge = 2, ve = 3, De = 1 / 0, Oe = 9007199254740991, be = 17976931348623157e292, ye = 0 / 0, de = 4294967295, We = de - 1, Be = de >>> 1, Tt = [
      ["ary", V],
      ["bind", _],
      ["bindKey", w],
      ["curry", P],
      ["curryRight", M],
      ["flip", N],
      ["partial", F],
      ["partialRight", O],
      ["rearg", W]
    ], vt = "[object Arguments]", pt = "[object Array]", _t = "[object AsyncFunction]", wt = "[object Boolean]", Nt = "[object Date]", yr = "[object DOMException]", Mt = "[object Error]", Ht = "[object Function]", un = "[object GeneratorFunction]", rr = "[object Map]", Pr = "[object Number]", Fr = "[object Null]", Ot = "[object Object]", mr = "[object Promise]", Ei = "[object Proxy]", Ur = "[object RegExp]", hr = "[object Set]", Sn = "[object String]", Kr = "[object Symbol]", Di = "[object Undefined]", cn = "[object WeakMap]", ua = "[object WeakSet]", zn = "[object ArrayBuffer]", fn = "[object DataView]", ui = "[object Float32Array]", ar = "[object Float64Array]", Fi = "[object Int8Array]", Hr = "[object Int16Array]", Oi = "[object Int32Array]", Ri = "[object Uint8Array]", Or = "[object Uint8ClampedArray]", ca = "[object Uint16Array]", _r = "[object Uint32Array]", dr = /\b__p \+= '';/g, xr = /\b(__p \+=) '' \+/g, Ir = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Rr = /&(?:amp|lt|gt|quot|#39);/g, ci = /[&<>"']/g, Ho = RegExp(Rr.source), Go = RegExp(ci.source), V1 = /<%-([\s\S]+?)%>/g, W1 = /<%([\s\S]+?)%>/g, fl = /<%=([\s\S]+?)%>/g, Y1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, X1 = /^\w*$/, Z1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qo = /[\\^$.*+?()[\]{}|]/g, hl = RegExp(Qo.source), Fa = /^\s+/, U1 = /\s/, K1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, H1 = /\{\n\/\* \[wrapped with (.+)\] \*/, Oa = /,? & /, G1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, dl = /[()=,{}\[\]\/\s]/, Q1 = /\\(\\)?/g, j1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, vl = /\w*$/, pl = /^[-+]0x[0-9a-f]+$/i, q1 = /^0b[01]+$/i, gl = /^\[object .+?Constructor\]$/, J1 = /^0o[0-7]+$/i, yl = /^(?:0|[1-9]\d*)$/, e0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ra = /($^)/, ml = /['\n\r\u2028\u2029\\]/g, Ba = "\\ud800-\\udfff", t0 = "\\u0300-\\u036f", r0 = "\\ufe20-\\ufe2f", n0 = "\\u20d0-\\u20ff", _l = t0 + r0 + n0, xl = "\\u2700-\\u27bf", Na = "a-z\\xdf-\\xf6\\xf8-\\xff", Bi = "\\xac\\xb1\\xd7\\xf7", jo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ni = "\\u2000-\\u206f", i0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Cl = "\\ufe0e\\ufe0f", Sl = Bi + jo + Ni + i0, qo = "['’]", wl = "[" + Ba + "]", Jo = "[" + Sl + "]", za = "[" + _l + "]", kl = "\\d+", a0 = "[" + xl + "]", Ll = "[" + Na + "]", es = "[^" + Ba + Sl + kl + xl + Na + bl + "]", Va = "\\ud83c[\\udffb-\\udfff]", o0 = "(?:" + za + "|" + Va + ")", Pl = "[^" + Ba + "]", ts = "(?:\\ud83c[\\udde6-\\uddff]){2}", rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", zi = "[" + bl + "]", Il = "\\u200d", Al = "(?:" + Ll + "|" + es + ")", s0 = "(?:" + zi + "|" + es + ")", $l = "(?:" + qo + "(?:d|ll|m|re|s|t|ve))?", Tl = "(?:" + qo + "(?:D|LL|M|RE|S|T|VE))?", Ml = o0 + "?", El = "[" + Cl + "]?", l0 = "(?:" + Il + "(?:" + [Pl, ts, rs].join("|") + ")" + El + Ml + ")*", Dl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ol = El + Ml + l0, Wa = "(?:" + [a0, ts, rs].join("|") + ")" + Ol, Vi = "(?:" + [Pl + za + "?", za, ts, rs, wl].join("|") + ")", u0 = RegExp(qo, "g"), Rl = RegExp(za, "g"), ns = RegExp(Va + "(?=" + Va + ")|" + Vi + Ol, "g"), is = RegExp([
      zi + "?" + Ll + "+" + $l + "(?=" + [Jo, zi, "$"].join("|") + ")",
      s0 + "+" + Tl + "(?=" + [Jo, zi + Al, "$"].join("|") + ")",
      zi + "?" + Al + "+" + $l,
      zi + "+" + Tl,
      Fl,
      Dl,
      kl,
      Wa
    ].join("|"), "g"), as = RegExp("[" + Il + Ba + _l + Cl + "]"), c0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Bl = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Wi = -1, kt = {};
    kt[ui] = kt[ar] = kt[Fi] = kt[Hr] = kt[Oi] = kt[Ri] = kt[Or] = kt[ca] = kt[_r] = !0, kt[vt] = kt[pt] = kt[zn] = kt[wt] = kt[fn] = kt[Nt] = kt[Mt] = kt[Ht] = kt[rr] = kt[Pr] = kt[Ot] = kt[Ur] = kt[hr] = kt[Sn] = kt[cn] = !1;
    var xt = {};
    xt[vt] = xt[pt] = xt[zn] = xt[fn] = xt[wt] = xt[Nt] = xt[ui] = xt[ar] = xt[Fi] = xt[Hr] = xt[Oi] = xt[rr] = xt[Pr] = xt[Ot] = xt[Ur] = xt[hr] = xt[Sn] = xt[Kr] = xt[Ri] = xt[Or] = xt[ca] = xt[_r] = !0, xt[Mt] = xt[Ht] = xt[cn] = !1;
    var f0 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, os = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ss = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Nl = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, h0 = parseFloat, d0 = parseInt, zl = typeof ei == "object" && ei && ei.Object === Object && ei, Vl = typeof self == "object" && self && self.Object === Object && self, Gt = zl || Vl || Function("return this")(), ls = r && !r.nodeType && r, fi = ls && !0 && e && !e.nodeType && e, Wl = fi && fi.exports === ls, us = Wl && zl.process, Br = function() {
      try {
        var X = fi && fi.require && fi.require("util").types;
        return X || us && us.binding && us.binding("util");
      } catch {
      }
    }(), Yl = Br && Br.isArrayBuffer, Xl = Br && Br.isDate, cs = Br && Br.isMap, Zl = Br && Br.isRegExp, Ul = Br && Br.isSet, Kl = Br && Br.isTypedArray;
    function Ar(X, te, j) {
      switch (j.length) {
        case 0:
          return X.call(te);
        case 1:
          return X.call(te, j[0]);
        case 2:
          return X.call(te, j[0], j[1]);
        case 3:
          return X.call(te, j[0], j[1], j[2]);
      }
      return X.apply(te, j);
    }
    function v0(X, te, j, Ce) {
      for (var Re = -1, ot = X == null ? 0 : X.length; ++Re < ot; ) {
        var zt = X[Re];
        te(Ce, zt, j(zt), X);
      }
      return Ce;
    }
    function Nr(X, te) {
      for (var j = -1, Ce = X == null ? 0 : X.length; ++j < Ce && te(X[j], j, X) !== !1; )
        ;
      return X;
    }
    function p0(X, te) {
      for (var j = X == null ? 0 : X.length; j-- && te(X[j], j, X) !== !1; )
        ;
      return X;
    }
    function Hl(X, te) {
      for (var j = -1, Ce = X == null ? 0 : X.length; ++j < Ce; )
        if (!te(X[j], j, X))
          return !1;
      return !0;
    }
    function Vn(X, te) {
      for (var j = -1, Ce = X == null ? 0 : X.length, Re = 0, ot = []; ++j < Ce; ) {
        var zt = X[j];
        te(zt, j, X) && (ot[Re++] = zt);
      }
      return ot;
    }
    function Ya(X, te) {
      var j = X == null ? 0 : X.length;
      return !!j && Yi(X, te, 0) > -1;
    }
    function Xa(X, te, j) {
      for (var Ce = -1, Re = X == null ? 0 : X.length; ++Ce < Re; )
        if (j(te, X[Ce]))
          return !0;
      return !1;
    }
    function It(X, te) {
      for (var j = -1, Ce = X == null ? 0 : X.length, Re = Array(Ce); ++j < Ce; )
        Re[j] = te(X[j], j, X);
      return Re;
    }
    function Wn(X, te) {
      for (var j = -1, Ce = te.length, Re = X.length; ++j < Ce; )
        X[Re + j] = te[j];
      return X;
    }
    function fs(X, te, j, Ce) {
      var Re = -1, ot = X == null ? 0 : X.length;
      for (Ce && ot && (j = X[++Re]); ++Re < ot; )
        j = te(j, X[Re], Re, X);
      return j;
    }
    function g0(X, te, j, Ce) {
      var Re = X == null ? 0 : X.length;
      for (Ce && Re && (j = X[--Re]); Re--; )
        j = te(j, X[Re], Re, X);
      return j;
    }
    function Za(X, te) {
      for (var j = -1, Ce = X == null ? 0 : X.length; ++j < Ce; )
        if (te(X[j], j, X))
          return !0;
      return !1;
    }
    var y0 = Ha("length");
    function m0(X) {
      return X.split("");
    }
    function _0(X) {
      return X.match(G1) || [];
    }
    function Gl(X, te, j) {
      var Ce;
      return j(X, function(Re, ot, zt) {
        if (te(Re, ot, zt))
          return Ce = ot, !1;
      }), Ce;
    }
    function Ua(X, te, j, Ce) {
      for (var Re = X.length, ot = j + (Ce ? 1 : -1); Ce ? ot-- : ++ot < Re; )
        if (te(X[ot], ot, X))
          return ot;
      return -1;
    }
    function Yi(X, te, j) {
      return te === te ? Qa(X, te, j) : Ua(X, fa, j);
    }
    function Ql(X, te, j, Ce) {
      for (var Re = j - 1, ot = X.length; ++Re < ot; )
        if (Ce(X[Re], te))
          return Re;
      return -1;
    }
    function fa(X) {
      return X !== X;
    }
    function Ka(X, te) {
      var j = X == null ? 0 : X.length;
      return j ? Ga(X, te) / j : ye;
    }
    function Ha(X) {
      return function(te) {
        return te == null ? t : te[X];
      };
    }
    function hs(X) {
      return function(te) {
        return X == null ? t : X[te];
      };
    }
    function ds(X, te, j, Ce, Re) {
      return Re(X, function(ot, zt, ct) {
        j = Ce ? (Ce = !1, ot) : te(j, ot, zt, ct);
      }), j;
    }
    function x0(X, te) {
      var j = X.length;
      for (X.sort(te); j--; )
        X[j] = X[j].value;
      return X;
    }
    function Ga(X, te) {
      for (var j, Ce = -1, Re = X.length; ++Ce < Re; ) {
        var ot = te(X[Ce]);
        ot !== t && (j = j === t ? ot : j + ot);
      }
      return j;
    }
    function vs(X, te) {
      for (var j = -1, Ce = Array(X); ++j < X; )
        Ce[j] = te(j);
      return Ce;
    }
    function ha(X, te) {
      return It(te, function(j) {
        return [j, X[j]];
      });
    }
    function jl(X) {
      return X && X.slice(0, nu(X) + 1).replace(Fa, "");
    }
    function $r(X) {
      return function(te) {
        return X(te);
      };
    }
    function ps(X, te) {
      return It(te, function(j) {
        return X[j];
      });
    }
    function da(X, te) {
      return X.has(te);
    }
    function ql(X, te) {
      for (var j = -1, Ce = X.length; ++j < Ce && Yi(te, X[j], 0) > -1; )
        ;
      return j;
    }
    function Jl(X, te) {
      for (var j = X.length; j-- && Yi(te, X[j], 0) > -1; )
        ;
      return j;
    }
    function b0(X, te) {
      for (var j = X.length, Ce = 0; j--; )
        X[j] === te && ++Ce;
      return Ce;
    }
    var C0 = hs(f0), S0 = hs(os);
    function eu(X) {
      return "\\" + Nl[X];
    }
    function tu(X, te) {
      return X == null ? t : X[te];
    }
    function Xi(X) {
      return as.test(X);
    }
    function w0(X) {
      return c0.test(X);
    }
    function k0(X) {
      for (var te, j = []; !(te = X.next()).done; )
        j.push(te.value);
      return j;
    }
    function va(X) {
      var te = -1, j = Array(X.size);
      return X.forEach(function(Ce, Re) {
        j[++te] = [Re, Ce];
      }), j;
    }
    function gs(X, te) {
      return function(j) {
        return X(te(j));
      };
    }
    function wn(X, te) {
      for (var j = -1, Ce = X.length, Re = 0, ot = []; ++j < Ce; ) {
        var zt = X[j];
        (zt === te || zt === d) && (X[j] = d, ot[Re++] = j);
      }
      return ot;
    }
    function pa(X) {
      var te = -1, j = Array(X.size);
      return X.forEach(function(Ce) {
        j[++te] = Ce;
      }), j;
    }
    function ru(X) {
      var te = -1, j = Array(X.size);
      return X.forEach(function(Ce) {
        j[++te] = [Ce, Ce];
      }), j;
    }
    function Qa(X, te, j) {
      for (var Ce = j - 1, Re = X.length; ++Ce < Re; )
        if (X[Ce] === te)
          return Ce;
      return -1;
    }
    function L0(X, te, j) {
      for (var Ce = j + 1; Ce--; )
        if (X[Ce] === te)
          return Ce;
      return Ce;
    }
    function hi(X) {
      return Xi(X) ? I0(X) : y0(X);
    }
    function Gr(X) {
      return Xi(X) ? A0(X) : m0(X);
    }
    function nu(X) {
      for (var te = X.length; te-- && U1.test(X.charAt(te)); )
        ;
      return te;
    }
    var P0 = hs(ss);
    function I0(X) {
      for (var te = ns.lastIndex = 0; ns.test(X); )
        ++te;
      return te;
    }
    function A0(X) {
      return X.match(ns) || [];
    }
    function ys(X) {
      return X.match(is) || [];
    }
    var ja = function X(te) {
      te = te == null ? Gt : Yn.defaults(Gt.Object(), te, Yn.pick(Gt, Bl));
      var j = te.Array, Ce = te.Date, Re = te.Error, ot = te.Function, zt = te.Math, ct = te.Object, ms = te.RegExp, qa = te.String, zr = te.TypeError, Ja = j.prototype, iu = ot.prototype, Xn = ct.prototype, eo = te["__core-js_shared__"], to = iu.toString, ft = Xn.hasOwnProperty, au = 0, _s = function() {
        var n = /[^.]+$/.exec(eo && eo.keys && eo.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), ro = Xn.toString, $0 = to.call(ct), T0 = Gt._, M0 = ms(
        "^" + to.call(ft).replace(Qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), no = Wl ? te.Buffer : t, Zn = te.Symbol, io = te.Uint8Array, ou = no ? no.allocUnsafe : t, ao = gs(ct.getPrototypeOf, ct), su = ct.create, lu = Xn.propertyIsEnumerable, oo = Ja.splice, uu = Zn ? Zn.isConcatSpreadable : t, ga = Zn ? Zn.iterator : t, Un = Zn ? Zn.toStringTag : t, ya = function() {
        try {
          var n = Sa(ct, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), E0 = te.clearTimeout !== Gt.clearTimeout && te.clearTimeout, cu = Ce && Ce.now !== Gt.Date.now && Ce.now, D0 = te.setTimeout !== Gt.setTimeout && te.setTimeout, so = zt.ceil, hn = zt.floor, xs = ct.getOwnPropertySymbols, F0 = no ? no.isBuffer : t, di = te.isFinite, O0 = Ja.join, R0 = gs(ct.keys, ct), Xt = zt.max, or = zt.min, B0 = Ce.now, bs = te.parseInt, br = zt.random, fu = Ja.reverse, lo = Sa(te, "DataView"), Kn = Sa(te, "Map"), uo = Sa(te, "Promise"), vi = Sa(te, "Set"), ma = Sa(te, "WeakMap"), Zi = Sa(ct, "create"), Ui = ma && new ma(), Ki = {}, hu = wa(lo), du = wa(Kn), N0 = wa(uo), z0 = wa(vi), V0 = wa(ma), Hi = Zn ? Zn.prototype : t, dn = Hi ? Hi.valueOf : t, vu = Hi ? Hi.toString : t;
      function L(n) {
        if (Wt(n) && !Ve(n) && !(n instanceof Qe)) {
          if (n instanceof nr)
            return n;
          if (ft.call(n, "__wrapped__"))
            return yh(n);
        }
        return new nr(n);
      }
      var Gi = function() {
        function n() {
        }
        return function(o) {
          if (!Bt(o))
            return {};
          if (su)
            return su(o);
          n.prototype = o;
          var f = new n();
          return n.prototype = t, f;
        };
      }();
      function _a() {
      }
      function nr(n, o) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = t;
      }
      L.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: V1,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: W1,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: fl,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: L
        }
      }, L.prototype = _a.prototype, L.prototype.constructor = L, nr.prototype = Gi(_a.prototype), nr.prototype.constructor = nr;
      function Qe(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = de, this.__views__ = [];
      }
      function pu() {
        var n = new Qe(this.__wrapped__);
        return n.__actions__ = qt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = qt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = qt(this.__views__), n;
      }
      function W0() {
        if (this.__filtered__) {
          var n = new Qe(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Y0() {
        var n = this.__wrapped__.value(), o = this.__dir__, f = Ve(n), g = o < 0, S = f ? n.length : 0, A = I5(0, S, this.__views__), E = A.start, B = A.end, Z = B - E, ne = g ? B : E - 1, ae = this.__iteratees__, oe = ae.length, xe = 0, ke = or(Z, this.__takeCount__);
        if (!f || !g && S == Z && ke == Z)
          return vr(n, this.__actions__);
        var Me = [];
        e:
          for (; Z-- && xe < ke; ) {
            ne += o;
            for (var Ue = -1, Ee = n[ne]; ++Ue < oe; ) {
              var Je = ae[Ue], rt = Je.iteratee, tn = Je.type, Mr = rt(Ee);
              if (tn == ge)
                Ee = Mr;
              else if (!Mr) {
                if (tn == he)
                  continue e;
                break e;
              }
            }
            Me[xe++] = Ee;
          }
        return Me;
      }
      Qe.prototype = Gi(_a.prototype), Qe.prototype.constructor = Qe;
      function pi(n) {
        var o = -1, f = n == null ? 0 : n.length;
        for (this.clear(); ++o < f; ) {
          var g = n[o];
          this.set(g[0], g[1]);
        }
      }
      function X0() {
        this.__data__ = Zi ? Zi(null) : {}, this.size = 0;
      }
      function Z0(n) {
        var o = this.has(n) && delete this.__data__[n];
        return this.size -= o ? 1 : 0, o;
      }
      function U0(n) {
        var o = this.__data__;
        if (Zi) {
          var f = o[n];
          return f === c ? t : f;
        }
        return ft.call(o, n) ? o[n] : t;
      }
      function K0(n) {
        var o = this.__data__;
        return Zi ? o[n] !== t : ft.call(o, n);
      }
      function H0(n, o) {
        var f = this.__data__;
        return this.size += this.has(n) ? 0 : 1, f[n] = Zi && o === t ? c : o, this;
      }
      pi.prototype.clear = X0, pi.prototype.delete = Z0, pi.prototype.get = U0, pi.prototype.has = K0, pi.prototype.set = H0;
      function kn(n) {
        var o = -1, f = n == null ? 0 : n.length;
        for (this.clear(); ++o < f; ) {
          var g = n[o];
          this.set(g[0], g[1]);
        }
      }
      function G0() {
        this.__data__ = [], this.size = 0;
      }
      function Q0(n) {
        var o = this.__data__, f = Cr(o, n);
        if (f < 0)
          return !1;
        var g = o.length - 1;
        return f == g ? o.pop() : oo.call(o, f, 1), --this.size, !0;
      }
      function j0(n) {
        var o = this.__data__, f = Cr(o, n);
        return f < 0 ? t : o[f][1];
      }
      function q0(n) {
        return Cr(this.__data__, n) > -1;
      }
      function J0(n, o) {
        var f = this.__data__, g = Cr(f, n);
        return g < 0 ? (++this.size, f.push([n, o])) : f[g][1] = o, this;
      }
      kn.prototype.clear = G0, kn.prototype.delete = Q0, kn.prototype.get = j0, kn.prototype.has = q0, kn.prototype.set = J0;
      function Qr(n) {
        var o = -1, f = n == null ? 0 : n.length;
        for (this.clear(); ++o < f; ) {
          var g = n[o];
          this.set(g[0], g[1]);
        }
      }
      function ec() {
        this.size = 0, this.__data__ = {
          hash: new pi(),
          map: new (Kn || kn)(),
          string: new pi()
        };
      }
      function Cs(n) {
        var o = Nu(this, n).delete(n);
        return this.size -= o ? 1 : 0, o;
      }
      function Ss(n) {
        return Nu(this, n).get(n);
      }
      function ws(n) {
        return Nu(this, n).has(n);
      }
      function gu(n, o) {
        var f = Nu(this, n), g = f.size;
        return f.set(n, o), this.size += f.size == g ? 0 : 1, this;
      }
      Qr.prototype.clear = ec, Qr.prototype.delete = Cs, Qr.prototype.get = Ss, Qr.prototype.has = ws, Qr.prototype.set = gu;
      function Hn(n) {
        var o = -1, f = n == null ? 0 : n.length;
        for (this.__data__ = new Qr(); ++o < f; )
          this.add(n[o]);
      }
      function tc(n) {
        return this.__data__.set(n, c), this;
      }
      function rc(n) {
        return this.__data__.has(n);
      }
      Hn.prototype.add = Hn.prototype.push = tc, Hn.prototype.has = rc;
      function jr(n) {
        var o = this.__data__ = new kn(n);
        this.size = o.size;
      }
      function qr() {
        this.__data__ = new kn(), this.size = 0;
      }
      function Qi(n) {
        var o = this.__data__, f = o.delete(n);
        return this.size = o.size, f;
      }
      function nc(n) {
        return this.__data__.get(n);
      }
      function ks(n) {
        return this.__data__.has(n);
      }
      function ic(n, o) {
        var f = this.__data__;
        if (f instanceof kn) {
          var g = f.__data__;
          if (!Kn || g.length < a - 1)
            return g.push([n, o]), this.size = ++f.size, this;
          f = this.__data__ = new Qr(g);
        }
        return f.set(n, o), this.size = f.size, this;
      }
      jr.prototype.clear = qr, jr.prototype.delete = Qi, jr.prototype.get = nc, jr.prototype.has = ks, jr.prototype.set = ic;
      function ji(n, o) {
        var f = Ve(n), g = !f && ka(n), S = !f && !g && ea(n), A = !f && !g && !S && bo(n), E = f || g || S || A, B = E ? vs(n.length, qa) : [], Z = B.length;
        for (var ne in n)
          (o || ft.call(n, ne)) && !(E && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          S && (ne == "offset" || ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          A && (ne == "buffer" || ne == "byteLength" || ne == "byteOffset") || // Skip index properties.
          Ci(ne, Z))) && B.push(ne);
        return B;
      }
      function yu(n) {
        var o = n.length;
        return o ? n[p(0, o - 1)] : t;
      }
      function ac(n, o) {
        return zu(qt(n), yi(o, 0, n.length));
      }
      function oc(n) {
        return zu(qt(n));
      }
      function Ls(n, o, f) {
        (f !== t && !$n(n[o], f) || f === t && !(o in n)) && Pn(n, o, f);
      }
      function gi(n, o, f) {
        var g = n[o];
        (!(ft.call(n, o) && $n(g, f)) || f === t && !(o in n)) && Pn(n, o, f);
      }
      function Cr(n, o) {
        for (var f = n.length; f--; )
          if ($n(n[f][0], o))
            return f;
        return -1;
      }
      function Gn(n, o, f, g) {
        return vn(n, function(S, A, E) {
          o(g, S, f(S), E);
        }), g;
      }
      function Ln(n, o) {
        return n && lr(o, ur(o), n);
      }
      function sc(n, o) {
        return n && lr(o, Yr(o), n);
      }
      function Pn(n, o, f) {
        o == "__proto__" && ya ? ya(n, o, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : n[o] = f;
      }
      function Ps(n, o) {
        for (var f = -1, g = o.length, S = j(g), A = n == null; ++f < g; )
          S[f] = A ? t : Fc(n, o[f]);
        return S;
      }
      function yi(n, o, f) {
        return n === n && (f !== t && (n = n <= f ? n : f), o !== t && (n = n >= o ? n : o)), n;
      }
      function Vr(n, o, f, g, S, A) {
        var E, B = o & v, Z = o & m, ne = o & y;
        if (f && (E = S ? f(n, g, S, A) : f(n)), E !== t)
          return E;
        if (!Bt(n))
          return n;
        var ae = Ve(n);
        if (ae) {
          if (E = $5(n), !B)
            return qt(n, E);
        } else {
          var oe = Sr(n), xe = oe == Ht || oe == un;
          if (ea(n))
            return st(n, B);
          if (oe == Ot || oe == vt || xe && !S) {
            if (E = Z || xe ? {} : lh(n), !B)
              return Z ? Bs(n, sc(E, n)) : Rs(n, Ln(E, n));
          } else {
            if (!xt[oe])
              return S ? n : {};
            E = T5(n, oe, B);
          }
        }
        A || (A = new jr());
        var ke = A.get(n);
        if (ke)
          return ke;
        A.set(n, E), Rh(n) ? n.forEach(function(Ee) {
          E.add(Vr(Ee, o, f, Ee, n, A));
        }) : Fh(n) && n.forEach(function(Ee, Je) {
          E.set(Je, Vr(Ee, o, f, Je, n, A));
        });
        var Me = ne ? Z ? bc : xc : Z ? Yr : ur, Ue = ae ? t : Me(n);
        return Nr(Ue || n, function(Ee, Je) {
          Ue && (Je = Ee, Ee = n[Je]), gi(E, Je, Vr(Ee, o, f, Je, n, A));
        }), E;
      }
      function lc(n) {
        var o = ur(n);
        return function(f) {
          return mu(f, n, o);
        };
      }
      function mu(n, o, f) {
        var g = f.length;
        if (n == null)
          return !g;
        for (n = ct(n); g--; ) {
          var S = f[g], A = o[S], E = n[S];
          if (E === t && !(S in n) || !A(E))
            return !1;
        }
        return !0;
      }
      function _u(n, o, f) {
        if (typeof n != "function")
          throw new zr(l);
        return Vs(function() {
          n.apply(t, f);
        }, o);
      }
      function xa(n, o, f, g) {
        var S = -1, A = Ya, E = !0, B = n.length, Z = [], ne = o.length;
        if (!B)
          return Z;
        f && (o = It(o, $r(f))), g ? (A = Xa, E = !1) : o.length >= a && (A = da, E = !1, o = new Hn(o));
        e:
          for (; ++S < B; ) {
            var ae = n[S], oe = f == null ? ae : f(ae);
            if (ae = g || ae !== 0 ? ae : 0, E && oe === oe) {
              for (var xe = ne; xe--; )
                if (o[xe] === oe)
                  continue e;
              Z.push(ae);
            } else
              A(o, oe, g) || Z.push(ae);
          }
        return Z;
      }
      var vn = Hf(pn), xu = Hf(As, !0);
      function uc(n, o) {
        var f = !0;
        return vn(n, function(g, S, A) {
          return f = !!o(g, S, A), f;
        }), f;
      }
      function co(n, o, f) {
        for (var g = -1, S = n.length; ++g < S; ) {
          var A = n[g], E = o(A);
          if (E != null && (B === t ? E === E && !en(E) : f(E, B)))
            var B = E, Z = A;
        }
        return Z;
      }
      function cc(n, o, f, g) {
        var S = n.length;
        for (f = Ze(f), f < 0 && (f = -f > S ? 0 : S + f), g = g === t || g > S ? S : Ze(g), g < 0 && (g += S), g = f > g ? 0 : Nh(g); f < g; )
          n[f++] = o;
        return n;
      }
      function bu(n, o) {
        var f = [];
        return vn(n, function(g, S, A) {
          o(g, S, A) && f.push(g);
        }), f;
      }
      function Qt(n, o, f, g, S) {
        var A = -1, E = n.length;
        for (f || (f = E5), S || (S = []); ++A < E; ) {
          var B = n[A];
          o > 0 && f(B) ? o > 1 ? Qt(B, o - 1, f, g, S) : Wn(S, B) : g || (S[S.length] = B);
        }
        return S;
      }
      var Is = Gf(), Cu = Gf(!0);
      function pn(n, o) {
        return n && Is(n, o, ur);
      }
      function As(n, o) {
        return n && Cu(n, o, ur);
      }
      function fo(n, o) {
        return Vn(o, function(f) {
          return Si(n[f]);
        });
      }
      function mi(n, o) {
        o = Fe(o, n);
        for (var f = 0, g = o.length; n != null && f < g; )
          n = n[qn(o[f++])];
        return f && f == g ? n : t;
      }
      function ho(n, o, f) {
        var g = o(n);
        return Ve(n) ? g : Wn(g, f(n));
      }
      function sr(n) {
        return n == null ? n === t ? Di : Fr : Un && Un in ct(n) ? P5(n) : z5(n);
      }
      function $s(n, o) {
        return n > o;
      }
      function fc(n, o) {
        return n != null && ft.call(n, o);
      }
      function hc(n, o) {
        return n != null && o in ct(n);
      }
      function Su(n, o, f) {
        return n >= or(o, f) && n < Xt(o, f);
      }
      function vo(n, o, f) {
        for (var g = f ? Xa : Ya, S = n[0].length, A = n.length, E = A, B = j(A), Z = 1 / 0, ne = []; E--; ) {
          var ae = n[E];
          E && o && (ae = It(ae, $r(o))), Z = or(ae.length, Z), B[E] = !f && (o || S >= 120 && ae.length >= 120) ? new Hn(E && ae) : t;
        }
        ae = n[0];
        var oe = -1, xe = B[0];
        e:
          for (; ++oe < S && ne.length < Z; ) {
            var ke = ae[oe], Me = o ? o(ke) : ke;
            if (ke = f || ke !== 0 ? ke : 0, !(xe ? da(xe, Me) : g(ne, Me, f))) {
              for (E = A; --E; ) {
                var Ue = B[E];
                if (!(Ue ? da(Ue, Me) : g(n[E], Me, f)))
                  continue e;
              }
              xe && xe.push(Me), ne.push(ke);
            }
          }
        return ne;
      }
      function wu(n, o, f, g) {
        return pn(n, function(S, A, E) {
          o(g, f(S), A, E);
        }), g;
      }
      function qi(n, o, f) {
        o = Fe(o, n), n = hh(n, o);
        var g = n == null ? n : n[qn(yn(o))];
        return g == null ? t : Ar(g, n, f);
      }
      function ku(n) {
        return Wt(n) && sr(n) == vt;
      }
      function Lu(n) {
        return Wt(n) && sr(n) == zn;
      }
      function In(n) {
        return Wt(n) && sr(n) == Nt;
      }
      function At(n, o, f, g, S) {
        return n === o ? !0 : n == null || o == null || !Wt(n) && !Wt(o) ? n !== n && o !== o : dc(n, o, f, g, At, S);
      }
      function dc(n, o, f, g, S, A) {
        var E = Ve(n), B = Ve(o), Z = E ? pt : Sr(n), ne = B ? pt : Sr(o);
        Z = Z == vt ? Ot : Z, ne = ne == vt ? Ot : ne;
        var ae = Z == Ot, oe = ne == Ot, xe = Z == ne;
        if (xe && ea(n)) {
          if (!ea(o))
            return !1;
          E = !0, ae = !1;
        }
        if (xe && !ae)
          return A || (A = new jr()), E || bo(n) ? ah(n, o, f, g, S, A) : k5(n, o, Z, f, g, S, A);
        if (!(f & C)) {
          var ke = ae && ft.call(n, "__wrapped__"), Me = oe && ft.call(o, "__wrapped__");
          if (ke || Me) {
            var Ue = ke ? n.value() : n, Ee = Me ? o.value() : o;
            return A || (A = new jr()), S(Ue, Ee, f, g, A);
          }
        }
        return xe ? (A || (A = new jr()), L5(n, o, f, g, S, A)) : !1;
      }
      function vc(n) {
        return Wt(n) && Sr(n) == rr;
      }
      function po(n, o, f, g) {
        var S = f.length, A = S, E = !g;
        if (n == null)
          return !A;
        for (n = ct(n); S--; ) {
          var B = f[S];
          if (E && B[2] ? B[1] !== n[B[0]] : !(B[0] in n))
            return !1;
        }
        for (; ++S < A; ) {
          B = f[S];
          var Z = B[0], ne = n[Z], ae = B[1];
          if (E && B[2]) {
            if (ne === t && !(Z in n))
              return !1;
          } else {
            var oe = new jr();
            if (g)
              var xe = g(ne, ae, Z, n, o, oe);
            if (!(xe === t ? At(ae, ne, C | b, g, oe) : xe))
              return !1;
          }
        }
        return !0;
      }
      function Ts(n) {
        if (!Bt(n) || F5(n))
          return !1;
        var o = Si(n) ? M0 : gl;
        return o.test(wa(n));
      }
      function go(n) {
        return Wt(n) && sr(n) == Ur;
      }
      function Pu(n) {
        return Wt(n) && Sr(n) == hr;
      }
      function pc(n) {
        return Wt(n) && Uu(n.length) && !!kt[sr(n)];
      }
      function Ms(n) {
        return typeof n == "function" ? n : n == null ? Xr : typeof n == "object" ? Ve(n) ? Fs(n[0], n[1]) : $u(n) : Qh(n);
      }
      function Es(n) {
        if (!zs(n))
          return R0(n);
        var o = [];
        for (var f in ct(n))
          ft.call(n, f) && f != "constructor" && o.push(f);
        return o;
      }
      function Iu(n) {
        if (!Bt(n))
          return N5(n);
        var o = zs(n), f = [];
        for (var g in n)
          g == "constructor" && (o || !ft.call(n, g)) || f.push(g);
        return f;
      }
      function Ds(n, o) {
        return n < o;
      }
      function Au(n, o) {
        var f = -1, g = Wr(n) ? j(n.length) : [];
        return vn(n, function(S, A, E) {
          g[++f] = o(S, A, E);
        }), g;
      }
      function $u(n) {
        var o = Sc(n);
        return o.length == 1 && o[0][2] ? ch(o[0][0], o[0][1]) : function(f) {
          return f === n || po(f, n, o);
        };
      }
      function Fs(n, o) {
        return kc(n) && uh(o) ? ch(qn(n), o) : function(f) {
          var g = Fc(f, n);
          return g === t && g === o ? Oc(f, n) : At(o, g, C | b);
        };
      }
      function ba(n, o, f, g, S) {
        n !== o && Is(o, function(A, E) {
          if (S || (S = new jr()), Bt(A))
            gc(n, o, E, f, ba, g, S);
          else {
            var B = g ? g(Pc(n, E), A, E + "", n, o, S) : t;
            B === t && (B = A), Ls(n, E, B);
          }
        }, Yr);
      }
      function gc(n, o, f, g, S, A, E) {
        var B = Pc(n, f), Z = Pc(o, f), ne = E.get(Z);
        if (ne) {
          Ls(n, f, ne);
          return;
        }
        var ae = A ? A(B, Z, f + "", n, o, E) : t, oe = ae === t;
        if (oe) {
          var xe = Ve(Z), ke = !xe && ea(Z), Me = !xe && !ke && bo(Z);
          ae = Z, xe || ke || Me ? Ve(B) ? ae = B : Zt(B) ? ae = qt(B) : ke ? (oe = !1, ae = st(Z, !0)) : Me ? (oe = !1, ae = An(Z, !0)) : ae = [] : Ws(Z) || ka(Z) ? (ae = B, ka(B) ? ae = zh(B) : (!Bt(B) || Si(B)) && (ae = lh(Z))) : oe = !1;
        }
        oe && (E.set(Z, ae), S(ae, Z, g, A, E), E.delete(Z)), Ls(n, f, ae);
      }
      function Ca(n, o) {
        var f = n.length;
        if (f)
          return o += o < 0 ? f : 0, Ci(o, f) ? n[o] : t;
      }
      function yo(n, o, f) {
        o.length ? o = It(o, function(A) {
          return Ve(A) ? function(E) {
            return mi(E, A.length === 1 ? A[0] : A);
          } : A;
        }) : o = [Xr];
        var g = -1;
        o = It(o, $r(Te()));
        var S = Au(n, function(A, E, B) {
          var Z = It(o, function(ne) {
            return ne(A);
          });
          return { criteria: Z, index: ++g, value: A };
        });
        return x0(S, function(A, E) {
          return Ji(A, E, f);
        });
      }
      function Tu(n, o) {
        return Os(n, o, function(f, g) {
          return Oc(n, g);
        });
      }
      function Os(n, o, f) {
        for (var g = -1, S = o.length, A = {}; ++g < S; ) {
          var E = o[g], B = mi(n, E);
          f(B, E) && D(A, Fe(E, n), B);
        }
        return A;
      }
      function yc(n) {
        return function(o) {
          return mi(o, n);
        };
      }
      function Vt(n, o, f, g) {
        var S = g ? Ql : Yi, A = -1, E = o.length, B = n;
        for (n === o && (o = qt(o)), f && (B = It(n, $r(f))); ++A < E; )
          for (var Z = 0, ne = o[A], ae = f ? f(ne) : ne; (Z = S(B, ae, Z, g)) > -1; )
            B !== n && oo.call(B, Z, 1), oo.call(n, Z, 1);
        return n;
      }
      function Mu(n, o) {
        for (var f = n ? o.length : 0, g = f - 1; f--; ) {
          var S = o[f];
          if (f == g || S !== A) {
            var A = S;
            Ci(S) ? oo.call(n, S, 1) : et(n, S);
          }
        }
        return n;
      }
      function p(n, o) {
        return n + hn(br() * (o - n + 1));
      }
      function x(n, o, f, g) {
        for (var S = -1, A = Xt(so((o - n) / (f || 1)), 0), E = j(A); A--; )
          E[g ? A : ++S] = n, n += f;
        return E;
      }
      function k(n, o) {
        var f = "";
        if (!n || o < 1 || o > Oe)
          return f;
        do
          o % 2 && (f += n), o = hn(o / 2), o && (n += n);
        while (o);
        return f;
      }
      function $(n, o) {
        return Ic(fh(n, o, Xr), n + "");
      }
      function R(n) {
        return yu(Co(n));
      }
      function z(n, o) {
        var f = Co(n);
        return zu(f, yi(o, 0, f.length));
      }
      function D(n, o, f, g) {
        if (!Bt(n))
          return n;
        o = Fe(o, n);
        for (var S = -1, A = o.length, E = A - 1, B = n; B != null && ++S < A; ) {
          var Z = qn(o[S]), ne = f;
          if (Z === "__proto__" || Z === "constructor" || Z === "prototype")
            return n;
          if (S != E) {
            var ae = B[Z];
            ne = g ? g(ae, Z, B) : t, ne === t && (ne = Bt(ae) ? ae : Ci(o[S + 1]) ? [] : {});
          }
          gi(B, Z, ne), B = B[Z];
        }
        return n;
      }
      var U = Ui ? function(n, o) {
        return Ui.set(n, o), n;
      } : Xr, H = ya ? function(n, o) {
        return ya(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Bc(o),
          writable: !0
        });
      } : Xr;
      function re(n) {
        return zu(Co(n));
      }
      function ie(n, o, f) {
        var g = -1, S = n.length;
        o < 0 && (o = -o > S ? 0 : S + o), f = f > S ? S : f, f < 0 && (f += S), S = o > f ? 0 : f - o >>> 0, o >>>= 0;
        for (var A = j(S); ++g < S; )
          A[g] = n[g + o];
        return A;
      }
      function _e(n, o) {
        var f;
        return vn(n, function(g, S, A) {
          return f = o(g, S, A), !f;
        }), !!f;
      }
      function ce(n, o, f) {
        var g = 0, S = n == null ? g : n.length;
        if (typeof o == "number" && o === o && S <= Be) {
          for (; g < S; ) {
            var A = g + S >>> 1, E = n[A];
            E !== null && !en(E) && (f ? E <= o : E < o) ? g = A + 1 : S = A;
          }
          return S;
        }
        return Se(n, o, Xr, f);
      }
      function Se(n, o, f, g) {
        var S = 0, A = n == null ? 0 : n.length;
        if (A === 0)
          return 0;
        o = f(o);
        for (var E = o !== o, B = o === null, Z = en(o), ne = o === t; S < A; ) {
          var ae = hn((S + A) / 2), oe = f(n[ae]), xe = oe !== t, ke = oe === null, Me = oe === oe, Ue = en(oe);
          if (E)
            var Ee = g || Me;
          else
            ne ? Ee = Me && (g || xe) : B ? Ee = Me && xe && (g || !ke) : Z ? Ee = Me && xe && !ke && (g || !Ue) : ke || Ue ? Ee = !1 : Ee = g ? oe <= o : oe < o;
          Ee ? S = ae + 1 : A = ae;
        }
        return or(A, We);
      }
      function we(n, o) {
        for (var f = -1, g = n.length, S = 0, A = []; ++f < g; ) {
          var E = n[f], B = o ? o(E) : E;
          if (!f || !$n(B, Z)) {
            var Z = B;
            A[S++] = E === 0 ? 0 : E;
          }
        }
        return A;
      }
      function Ye(n) {
        return typeof n == "number" ? n : en(n) ? ye : +n;
      }
      function $e(n) {
        if (typeof n == "string")
          return n;
        if (Ve(n))
          return It(n, $e) + "";
        if (en(n))
          return vu ? vu.call(n) : "";
        var o = n + "";
        return o == "0" && 1 / n == -De ? "-0" : o;
      }
      function ze(n, o, f) {
        var g = -1, S = Ya, A = n.length, E = !0, B = [], Z = B;
        if (f)
          E = !1, S = Xa;
        else if (A >= a) {
          var ne = o ? null : S5(n);
          if (ne)
            return pa(ne);
          E = !1, S = da, Z = new Hn();
        } else
          Z = o ? [] : B;
        e:
          for (; ++g < A; ) {
            var ae = n[g], oe = o ? o(ae) : ae;
            if (ae = f || ae !== 0 ? ae : 0, E && oe === oe) {
              for (var xe = Z.length; xe--; )
                if (Z[xe] === oe)
                  continue e;
              o && Z.push(oe), B.push(ae);
            } else
              S(Z, oe, f) || (Z !== B && Z.push(oe), B.push(ae));
          }
        return B;
      }
      function et(n, o) {
        return o = Fe(o, n), n = hh(n, o), n == null || delete n[qn(yn(o))];
      }
      function jt(n, o, f, g) {
        return D(n, o, f(mi(n, o)), g);
      }
      function Rt(n, o, f, g) {
        for (var S = n.length, A = g ? S : -1; (g ? A-- : ++A < S) && o(n[A], A, n); )
          ;
        return f ? ie(n, g ? 0 : A, g ? A + 1 : S) : ie(n, g ? A + 1 : 0, g ? S : A);
      }
      function vr(n, o) {
        var f = n;
        return f instanceof Qe && (f = f.value()), fs(o, function(g, S) {
          return S.func.apply(S.thisArg, Wn([g], S.args));
        }, f);
      }
      function Ke(n, o, f) {
        var g = n.length;
        if (g < 2)
          return g ? ze(n[0]) : [];
        for (var S = -1, A = j(g); ++S < g; )
          for (var E = n[S], B = -1; ++B < g; )
            B != S && (A[S] = xa(A[S] || E, n[B], o, f));
        return ze(Qt(A, 1), o, f);
      }
      function fe(n, o, f) {
        for (var g = -1, S = n.length, A = o.length, E = {}; ++g < S; ) {
          var B = g < A ? o[g] : t;
          f(E, n[g], B);
        }
        return E;
      }
      function Ie(n) {
        return Zt(n) ? n : [];
      }
      function Xe(n) {
        return typeof n == "function" ? n : Xr;
      }
      function Fe(n, o) {
        return Ve(n) ? n : kc(n, o) ? [n] : gh(dt(n));
      }
      var ir = $;
      function tt(n, o, f) {
        var g = n.length;
        return f = f === t ? g : f, !o && f >= g ? n : ie(n, o, f);
      }
      var qe = E0 || function(n) {
        return Gt.clearTimeout(n);
      };
      function st(n, o) {
        if (o)
          return n.slice();
        var f = n.length, g = ou ? ou(f) : new n.constructor(f);
        return n.copy(g), g;
      }
      function it(n) {
        var o = new n.constructor(n.byteLength);
        return new io(o).set(new io(n)), o;
      }
      function ht(n, o) {
        var f = o ? it(n.buffer) : n.buffer;
        return new n.constructor(f, n.byteOffset, n.byteLength);
      }
      function Jr(n) {
        var o = new n.constructor(n.source, vl.exec(n));
        return o.lastIndex = n.lastIndex, o;
      }
      function Qn(n) {
        return dn ? ct(dn.call(n)) : {};
      }
      function An(n, o) {
        var f = o ? it(n.buffer) : n.buffer;
        return new n.constructor(f, n.byteOffset, n.length);
      }
      function _i(n, o) {
        if (n !== o) {
          var f = n !== t, g = n === null, S = n === n, A = en(n), E = o !== t, B = o === null, Z = o === o, ne = en(o);
          if (!B && !ne && !A && n > o || A && E && Z && !B && !ne || g && E && Z || !f && Z || !S)
            return 1;
          if (!g && !A && !ne && n < o || ne && f && S && !g && !A || B && f && S || !E && S || !Z)
            return -1;
        }
        return 0;
      }
      function Ji(n, o, f) {
        for (var g = -1, S = n.criteria, A = o.criteria, E = S.length, B = f.length; ++g < E; ) {
          var Z = _i(S[g], A[g]);
          if (Z) {
            if (g >= B)
              return Z;
            var ne = f[g];
            return Z * (ne == "desc" ? -1 : 1);
          }
        }
        return n.index - o.index;
      }
      function gn(n, o, f, g) {
        for (var S = -1, A = n.length, E = f.length, B = -1, Z = o.length, ne = Xt(A - E, 0), ae = j(Z + ne), oe = !g; ++B < Z; )
          ae[B] = o[B];
        for (; ++S < E; )
          (oe || S < A) && (ae[f[S]] = n[S]);
        for (; ne--; )
          ae[B++] = n[S++];
        return ae;
      }
      function jn(n, o, f, g) {
        for (var S = -1, A = n.length, E = -1, B = f.length, Z = -1, ne = o.length, ae = Xt(A - B, 0), oe = j(ae + ne), xe = !g; ++S < ae; )
          oe[S] = n[S];
        for (var ke = S; ++Z < ne; )
          oe[ke + Z] = o[Z];
        for (; ++E < B; )
          (xe || S < A) && (oe[ke + f[E]] = n[S++]);
        return oe;
      }
      function qt(n, o) {
        var f = -1, g = n.length;
        for (o || (o = j(g)); ++f < g; )
          o[f] = n[f];
        return o;
      }
      function lr(n, o, f, g) {
        var S = !f;
        f || (f = {});
        for (var A = -1, E = o.length; ++A < E; ) {
          var B = o[A], Z = g ? g(f[B], n[B], B, f, n) : t;
          Z === t && (Z = n[B]), S ? Pn(f, B, Z) : gi(f, B, Z);
        }
        return f;
      }
      function Rs(n, o) {
        return lr(n, wc(n), o);
      }
      function Bs(n, o) {
        return lr(n, oh(n), o);
      }
      function Eu(n, o) {
        return function(f, g) {
          var S = Ve(f) ? v0 : Gn, A = o ? o() : {};
          return S(f, n, Te(g, 2), A);
        };
      }
      function mo(n) {
        return $(function(o, f) {
          var g = -1, S = f.length, A = S > 1 ? f[S - 1] : t, E = S > 2 ? f[2] : t;
          for (A = n.length > 3 && typeof A == "function" ? (S--, A) : t, E && Tr(f[0], f[1], E) && (A = S < 3 ? t : A, S = 1), o = ct(o); ++g < S; ) {
            var B = f[g];
            B && n(o, B, g, A);
          }
          return o;
        });
      }
      function Hf(n, o) {
        return function(f, g) {
          if (f == null)
            return f;
          if (!Wr(f))
            return n(f, g);
          for (var S = f.length, A = o ? S : -1, E = ct(f); (o ? A-- : ++A < S) && g(E[A], A, E) !== !1; )
            ;
          return f;
        };
      }
      function Gf(n) {
        return function(o, f, g) {
          for (var S = -1, A = ct(o), E = g(o), B = E.length; B--; ) {
            var Z = E[n ? B : ++S];
            if (f(A[Z], Z, A) === !1)
              break;
          }
          return o;
        };
      }
      function x5(n, o, f) {
        var g = o & _, S = Ns(n);
        function A() {
          var E = this && this !== Gt && this instanceof A ? S : n;
          return E.apply(g ? f : this, arguments);
        }
        return A;
      }
      function Qf(n) {
        return function(o) {
          o = dt(o);
          var f = Xi(o) ? Gr(o) : t, g = f ? f[0] : o.charAt(0), S = f ? tt(f, 1).join("") : o.slice(1);
          return g[n]() + S;
        };
      }
      function _o(n) {
        return function(o) {
          return fs(Hh(Kh(o).replace(u0, "")), n, "");
        };
      }
      function Ns(n) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new n();
            case 1:
              return new n(o[0]);
            case 2:
              return new n(o[0], o[1]);
            case 3:
              return new n(o[0], o[1], o[2]);
            case 4:
              return new n(o[0], o[1], o[2], o[3]);
            case 5:
              return new n(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new n(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new n(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var f = Gi(n.prototype), g = n.apply(f, o);
          return Bt(g) ? g : f;
        };
      }
      function b5(n, o, f) {
        var g = Ns(n);
        function S() {
          for (var A = arguments.length, E = j(A), B = A, Z = xo(S); B--; )
            E[B] = arguments[B];
          var ne = A < 3 && E[0] !== Z && E[A - 1] !== Z ? [] : wn(E, Z);
          if (A -= ne.length, A < f)
            return th(
              n,
              o,
              Du,
              S.placeholder,
              t,
              E,
              ne,
              t,
              t,
              f - A
            );
          var ae = this && this !== Gt && this instanceof S ? g : n;
          return Ar(ae, this, E);
        }
        return S;
      }
      function jf(n) {
        return function(o, f, g) {
          var S = ct(o);
          if (!Wr(o)) {
            var A = Te(f, 3);
            o = ur(o), f = function(B) {
              return A(S[B], B, S);
            };
          }
          var E = n(o, f, g);
          return E > -1 ? S[A ? o[E] : E] : t;
        };
      }
      function qf(n) {
        return bi(function(o) {
          var f = o.length, g = f, S = nr.prototype.thru;
          for (n && o.reverse(); g--; ) {
            var A = o[g];
            if (typeof A != "function")
              throw new zr(l);
            if (S && !E && Bu(A) == "wrapper")
              var E = new nr([], !0);
          }
          for (g = E ? g : f; ++g < f; ) {
            A = o[g];
            var B = Bu(A), Z = B == "wrapper" ? Cc(A) : t;
            Z && Lc(Z[0]) && Z[1] == (V | P | F | W) && !Z[4].length && Z[9] == 1 ? E = E[Bu(Z[0])].apply(E, Z[3]) : E = A.length == 1 && Lc(A) ? E[B]() : E.thru(A);
          }
          return function() {
            var ne = arguments, ae = ne[0];
            if (E && ne.length == 1 && Ve(ae))
              return E.plant(ae).value();
            for (var oe = 0, xe = f ? o[oe].apply(this, ne) : ae; ++oe < f; )
              xe = o[oe].call(this, xe);
            return xe;
          };
        });
      }
      function Du(n, o, f, g, S, A, E, B, Z, ne) {
        var ae = o & V, oe = o & _, xe = o & w, ke = o & (P | M), Me = o & N, Ue = xe ? t : Ns(n);
        function Ee() {
          for (var Je = arguments.length, rt = j(Je), tn = Je; tn--; )
            rt[tn] = arguments[tn];
          if (ke)
            var Mr = xo(Ee), rn = b0(rt, Mr);
          if (g && (rt = gn(rt, g, S, ke)), A && (rt = jn(rt, A, E, ke)), Je -= rn, ke && Je < ne) {
            var Ut = wn(rt, Mr);
            return th(
              n,
              o,
              Du,
              Ee.placeholder,
              f,
              rt,
              Ut,
              B,
              Z,
              ne - Je
            );
          }
          var Tn = oe ? f : this, ki = xe ? Tn[n] : n;
          return Je = rt.length, B ? rt = V5(rt, B) : Me && Je > 1 && rt.reverse(), ae && Z < Je && (rt.length = Z), this && this !== Gt && this instanceof Ee && (ki = Ue || Ns(ki)), ki.apply(Tn, rt);
        }
        return Ee;
      }
      function Jf(n, o) {
        return function(f, g) {
          return wu(f, n, o(g), {});
        };
      }
      function Fu(n, o) {
        return function(f, g) {
          var S;
          if (f === t && g === t)
            return o;
          if (f !== t && (S = f), g !== t) {
            if (S === t)
              return g;
            typeof f == "string" || typeof g == "string" ? (f = $e(f), g = $e(g)) : (f = Ye(f), g = Ye(g)), S = n(f, g);
          }
          return S;
        };
      }
      function mc(n) {
        return bi(function(o) {
          return o = It(o, $r(Te())), $(function(f) {
            var g = this;
            return n(o, function(S) {
              return Ar(S, g, f);
            });
          });
        });
      }
      function Ou(n, o) {
        o = o === t ? " " : $e(o);
        var f = o.length;
        if (f < 2)
          return f ? k(o, n) : o;
        var g = k(o, so(n / hi(o)));
        return Xi(o) ? tt(Gr(g), 0, n).join("") : g.slice(0, n);
      }
      function C5(n, o, f, g) {
        var S = o & _, A = Ns(n);
        function E() {
          for (var B = -1, Z = arguments.length, ne = -1, ae = g.length, oe = j(ae + Z), xe = this && this !== Gt && this instanceof E ? A : n; ++ne < ae; )
            oe[ne] = g[ne];
          for (; Z--; )
            oe[ne++] = arguments[++B];
          return Ar(xe, S ? f : this, oe);
        }
        return E;
      }
      function eh(n) {
        return function(o, f, g) {
          return g && typeof g != "number" && Tr(o, f, g) && (f = g = t), o = wi(o), f === t ? (f = o, o = 0) : f = wi(f), g = g === t ? o < f ? 1 : -1 : wi(g), x(o, f, g, n);
        };
      }
      function Ru(n) {
        return function(o, f) {
          return typeof o == "string" && typeof f == "string" || (o = mn(o), f = mn(f)), n(o, f);
        };
      }
      function th(n, o, f, g, S, A, E, B, Z, ne) {
        var ae = o & P, oe = ae ? E : t, xe = ae ? t : E, ke = ae ? A : t, Me = ae ? t : A;
        o |= ae ? F : O, o &= ~(ae ? O : F), o & T || (o &= ~(_ | w));
        var Ue = [
          n,
          o,
          S,
          ke,
          oe,
          Me,
          xe,
          B,
          Z,
          ne
        ], Ee = f.apply(t, Ue);
        return Lc(n) && dh(Ee, Ue), Ee.placeholder = g, vh(Ee, n, o);
      }
      function _c(n) {
        var o = zt[n];
        return function(f, g) {
          if (f = mn(f), g = g == null ? 0 : or(Ze(g), 292), g && di(f)) {
            var S = (dt(f) + "e").split("e"), A = o(S[0] + "e" + (+S[1] + g));
            return S = (dt(A) + "e").split("e"), +(S[0] + "e" + (+S[1] - g));
          }
          return o(f);
        };
      }
      var S5 = vi && 1 / pa(new vi([, -0]))[1] == De ? function(n) {
        return new vi(n);
      } : Vc;
      function rh(n) {
        return function(o) {
          var f = Sr(o);
          return f == rr ? va(o) : f == hr ? ru(o) : ha(o, n(o));
        };
      }
      function xi(n, o, f, g, S, A, E, B) {
        var Z = o & w;
        if (!Z && typeof n != "function")
          throw new zr(l);
        var ne = g ? g.length : 0;
        if (ne || (o &= ~(F | O), g = S = t), E = E === t ? E : Xt(Ze(E), 0), B = B === t ? B : Ze(B), ne -= S ? S.length : 0, o & O) {
          var ae = g, oe = S;
          g = S = t;
        }
        var xe = Z ? t : Cc(n), ke = [
          n,
          o,
          f,
          g,
          S,
          ae,
          oe,
          A,
          E,
          B
        ];
        if (xe && B5(ke, xe), n = ke[0], o = ke[1], f = ke[2], g = ke[3], S = ke[4], B = ke[9] = ke[9] === t ? Z ? 0 : n.length : Xt(ke[9] - ne, 0), !B && o & (P | M) && (o &= ~(P | M)), !o || o == _)
          var Me = x5(n, o, f);
        else
          o == P || o == M ? Me = b5(n, o, B) : (o == F || o == (_ | F)) && !S.length ? Me = C5(n, o, f, g) : Me = Du.apply(t, ke);
        var Ue = xe ? U : dh;
        return vh(Ue(Me, ke), n, o);
      }
      function nh(n, o, f, g) {
        return n === t || $n(n, Xn[f]) && !ft.call(g, f) ? o : n;
      }
      function ih(n, o, f, g, S, A) {
        return Bt(n) && Bt(o) && (A.set(o, n), ba(n, o, t, ih, A), A.delete(o)), n;
      }
      function w5(n) {
        return Ws(n) ? t : n;
      }
      function ah(n, o, f, g, S, A) {
        var E = f & C, B = n.length, Z = o.length;
        if (B != Z && !(E && Z > B))
          return !1;
        var ne = A.get(n), ae = A.get(o);
        if (ne && ae)
          return ne == o && ae == n;
        var oe = -1, xe = !0, ke = f & b ? new Hn() : t;
        for (A.set(n, o), A.set(o, n); ++oe < B; ) {
          var Me = n[oe], Ue = o[oe];
          if (g)
            var Ee = E ? g(Ue, Me, oe, o, n, A) : g(Me, Ue, oe, n, o, A);
          if (Ee !== t) {
            if (Ee)
              continue;
            xe = !1;
            break;
          }
          if (ke) {
            if (!Za(o, function(Je, rt) {
              if (!da(ke, rt) && (Me === Je || S(Me, Je, f, g, A)))
                return ke.push(rt);
            })) {
              xe = !1;
              break;
            }
          } else if (!(Me === Ue || S(Me, Ue, f, g, A))) {
            xe = !1;
            break;
          }
        }
        return A.delete(n), A.delete(o), xe;
      }
      function k5(n, o, f, g, S, A, E) {
        switch (f) {
          case fn:
            if (n.byteLength != o.byteLength || n.byteOffset != o.byteOffset)
              return !1;
            n = n.buffer, o = o.buffer;
          case zn:
            return !(n.byteLength != o.byteLength || !A(new io(n), new io(o)));
          case wt:
          case Nt:
          case Pr:
            return $n(+n, +o);
          case Mt:
            return n.name == o.name && n.message == o.message;
          case Ur:
          case Sn:
            return n == o + "";
          case rr:
            var B = va;
          case hr:
            var Z = g & C;
            if (B || (B = pa), n.size != o.size && !Z)
              return !1;
            var ne = E.get(n);
            if (ne)
              return ne == o;
            g |= b, E.set(n, o);
            var ae = ah(B(n), B(o), g, S, A, E);
            return E.delete(n), ae;
          case Kr:
            if (dn)
              return dn.call(n) == dn.call(o);
        }
        return !1;
      }
      function L5(n, o, f, g, S, A) {
        var E = f & C, B = xc(n), Z = B.length, ne = xc(o), ae = ne.length;
        if (Z != ae && !E)
          return !1;
        for (var oe = Z; oe--; ) {
          var xe = B[oe];
          if (!(E ? xe in o : ft.call(o, xe)))
            return !1;
        }
        var ke = A.get(n), Me = A.get(o);
        if (ke && Me)
          return ke == o && Me == n;
        var Ue = !0;
        A.set(n, o), A.set(o, n);
        for (var Ee = E; ++oe < Z; ) {
          xe = B[oe];
          var Je = n[xe], rt = o[xe];
          if (g)
            var tn = E ? g(rt, Je, xe, o, n, A) : g(Je, rt, xe, n, o, A);
          if (!(tn === t ? Je === rt || S(Je, rt, f, g, A) : tn)) {
            Ue = !1;
            break;
          }
          Ee || (Ee = xe == "constructor");
        }
        if (Ue && !Ee) {
          var Mr = n.constructor, rn = o.constructor;
          Mr != rn && "constructor" in n && "constructor" in o && !(typeof Mr == "function" && Mr instanceof Mr && typeof rn == "function" && rn instanceof rn) && (Ue = !1);
        }
        return A.delete(n), A.delete(o), Ue;
      }
      function bi(n) {
        return Ic(fh(n, t, xh), n + "");
      }
      function xc(n) {
        return ho(n, ur, wc);
      }
      function bc(n) {
        return ho(n, Yr, oh);
      }
      var Cc = Ui ? function(n) {
        return Ui.get(n);
      } : Vc;
      function Bu(n) {
        for (var o = n.name + "", f = Ki[o], g = ft.call(Ki, o) ? f.length : 0; g--; ) {
          var S = f[g], A = S.func;
          if (A == null || A == n)
            return S.name;
        }
        return o;
      }
      function xo(n) {
        var o = ft.call(L, "placeholder") ? L : n;
        return o.placeholder;
      }
      function Te() {
        var n = L.iteratee || Nc;
        return n = n === Nc ? Ms : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Nu(n, o) {
        var f = n.__data__;
        return D5(o) ? f[typeof o == "string" ? "string" : "hash"] : f.map;
      }
      function Sc(n) {
        for (var o = ur(n), f = o.length; f--; ) {
          var g = o[f], S = n[g];
          o[f] = [g, S, uh(S)];
        }
        return o;
      }
      function Sa(n, o) {
        var f = tu(n, o);
        return Ts(f) ? f : t;
      }
      function P5(n) {
        var o = ft.call(n, Un), f = n[Un];
        try {
          n[Un] = t;
          var g = !0;
        } catch {
        }
        var S = ro.call(n);
        return g && (o ? n[Un] = f : delete n[Un]), S;
      }
      var wc = xs ? function(n) {
        return n == null ? [] : (n = ct(n), Vn(xs(n), function(o) {
          return lu.call(n, o);
        }));
      } : Wc, oh = xs ? function(n) {
        for (var o = []; n; )
          Wn(o, wc(n)), n = ao(n);
        return o;
      } : Wc, Sr = sr;
      (lo && Sr(new lo(new ArrayBuffer(1))) != fn || Kn && Sr(new Kn()) != rr || uo && Sr(uo.resolve()) != mr || vi && Sr(new vi()) != hr || ma && Sr(new ma()) != cn) && (Sr = function(n) {
        var o = sr(n), f = o == Ot ? n.constructor : t, g = f ? wa(f) : "";
        if (g)
          switch (g) {
            case hu:
              return fn;
            case du:
              return rr;
            case N0:
              return mr;
            case z0:
              return hr;
            case V0:
              return cn;
          }
        return o;
      });
      function I5(n, o, f) {
        for (var g = -1, S = f.length; ++g < S; ) {
          var A = f[g], E = A.size;
          switch (A.type) {
            case "drop":
              n += E;
              break;
            case "dropRight":
              o -= E;
              break;
            case "take":
              o = or(o, n + E);
              break;
            case "takeRight":
              n = Xt(n, o - E);
              break;
          }
        }
        return { start: n, end: o };
      }
      function A5(n) {
        var o = n.match(H1);
        return o ? o[1].split(Oa) : [];
      }
      function sh(n, o, f) {
        o = Fe(o, n);
        for (var g = -1, S = o.length, A = !1; ++g < S; ) {
          var E = qn(o[g]);
          if (!(A = n != null && f(n, E)))
            break;
          n = n[E];
        }
        return A || ++g != S ? A : (S = n == null ? 0 : n.length, !!S && Uu(S) && Ci(E, S) && (Ve(n) || ka(n)));
      }
      function $5(n) {
        var o = n.length, f = new n.constructor(o);
        return o && typeof n[0] == "string" && ft.call(n, "index") && (f.index = n.index, f.input = n.input), f;
      }
      function lh(n) {
        return typeof n.constructor == "function" && !zs(n) ? Gi(ao(n)) : {};
      }
      function T5(n, o, f) {
        var g = n.constructor;
        switch (o) {
          case zn:
            return it(n);
          case wt:
          case Nt:
            return new g(+n);
          case fn:
            return ht(n, f);
          case ui:
          case ar:
          case Fi:
          case Hr:
          case Oi:
          case Ri:
          case Or:
          case ca:
          case _r:
            return An(n, f);
          case rr:
            return new g();
          case Pr:
          case Sn:
            return new g(n);
          case Ur:
            return Jr(n);
          case hr:
            return new g();
          case Kr:
            return Qn(n);
        }
      }
      function M5(n, o) {
        var f = o.length;
        if (!f)
          return n;
        var g = f - 1;
        return o[g] = (f > 1 ? "& " : "") + o[g], o = o.join(f > 2 ? ", " : " "), n.replace(K1, `{
/* [wrapped with ` + o + `] */
`);
      }
      function E5(n) {
        return Ve(n) || ka(n) || !!(uu && n && n[uu]);
      }
      function Ci(n, o) {
        var f = typeof n;
        return o = o ?? Oe, !!o && (f == "number" || f != "symbol" && yl.test(n)) && n > -1 && n % 1 == 0 && n < o;
      }
      function Tr(n, o, f) {
        if (!Bt(f))
          return !1;
        var g = typeof o;
        return (g == "number" ? Wr(f) && Ci(o, f.length) : g == "string" && o in f) ? $n(f[o], n) : !1;
      }
      function kc(n, o) {
        if (Ve(n))
          return !1;
        var f = typeof n;
        return f == "number" || f == "symbol" || f == "boolean" || n == null || en(n) ? !0 : X1.test(n) || !Y1.test(n) || o != null && n in ct(o);
      }
      function D5(n) {
        var o = typeof n;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? n !== "__proto__" : n === null;
      }
      function Lc(n) {
        var o = Bu(n), f = L[o];
        if (typeof f != "function" || !(o in Qe.prototype))
          return !1;
        if (n === f)
          return !0;
        var g = Cc(f);
        return !!g && n === g[0];
      }
      function F5(n) {
        return !!_s && _s in n;
      }
      var O5 = eo ? Si : Yc;
      function zs(n) {
        var o = n && n.constructor, f = typeof o == "function" && o.prototype || Xn;
        return n === f;
      }
      function uh(n) {
        return n === n && !Bt(n);
      }
      function ch(n, o) {
        return function(f) {
          return f == null ? !1 : f[n] === o && (o !== t || n in ct(f));
        };
      }
      function R5(n) {
        var o = Xu(n, function(g) {
          return f.size === h && f.clear(), g;
        }), f = o.cache;
        return o;
      }
      function B5(n, o) {
        var f = n[1], g = o[1], S = f | g, A = S < (_ | w | V), E = g == V && f == P || g == V && f == W && n[7].length <= o[8] || g == (V | W) && o[7].length <= o[8] && f == P;
        if (!(A || E))
          return n;
        g & _ && (n[2] = o[2], S |= f & _ ? 0 : T);
        var B = o[3];
        if (B) {
          var Z = n[3];
          n[3] = Z ? gn(Z, B, o[4]) : B, n[4] = Z ? wn(n[3], d) : o[4];
        }
        return B = o[5], B && (Z = n[5], n[5] = Z ? jn(Z, B, o[6]) : B, n[6] = Z ? wn(n[5], d) : o[6]), B = o[7], B && (n[7] = B), g & V && (n[8] = n[8] == null ? o[8] : or(n[8], o[8])), n[9] == null && (n[9] = o[9]), n[0] = o[0], n[1] = S, n;
      }
      function N5(n) {
        var o = [];
        if (n != null)
          for (var f in ct(n))
            o.push(f);
        return o;
      }
      function z5(n) {
        return ro.call(n);
      }
      function fh(n, o, f) {
        return o = Xt(o === t ? n.length - 1 : o, 0), function() {
          for (var g = arguments, S = -1, A = Xt(g.length - o, 0), E = j(A); ++S < A; )
            E[S] = g[o + S];
          S = -1;
          for (var B = j(o + 1); ++S < o; )
            B[S] = g[S];
          return B[o] = f(E), Ar(n, this, B);
        };
      }
      function hh(n, o) {
        return o.length < 2 ? n : mi(n, ie(o, 0, -1));
      }
      function V5(n, o) {
        for (var f = n.length, g = or(o.length, f), S = qt(n); g--; ) {
          var A = o[g];
          n[g] = Ci(A, f) ? S[A] : t;
        }
        return n;
      }
      function Pc(n, o) {
        if (!(o === "constructor" && typeof n[o] == "function") && o != "__proto__")
          return n[o];
      }
      var dh = ph(U), Vs = D0 || function(n, o) {
        return Gt.setTimeout(n, o);
      }, Ic = ph(H);
      function vh(n, o, f) {
        var g = o + "";
        return Ic(n, M5(g, W5(A5(g), f)));
      }
      function ph(n) {
        var o = 0, f = 0;
        return function() {
          var g = B0(), S = q - (g - f);
          if (f = g, S > 0) {
            if (++o >= G)
              return arguments[0];
          } else
            o = 0;
          return n.apply(t, arguments);
        };
      }
      function zu(n, o) {
        var f = -1, g = n.length, S = g - 1;
        for (o = o === t ? g : o; ++f < o; ) {
          var A = p(f, S), E = n[A];
          n[A] = n[f], n[f] = E;
        }
        return n.length = o, n;
      }
      var gh = R5(function(n) {
        var o = [];
        return n.charCodeAt(0) === 46 && o.push(""), n.replace(Z1, function(f, g, S, A) {
          o.push(S ? A.replace(Q1, "$1") : g || f);
        }), o;
      });
      function qn(n) {
        if (typeof n == "string" || en(n))
          return n;
        var o = n + "";
        return o == "0" && 1 / n == -De ? "-0" : o;
      }
      function wa(n) {
        if (n != null) {
          try {
            return to.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function W5(n, o) {
        return Nr(Tt, function(f) {
          var g = "_." + f[0];
          o & f[1] && !Ya(n, g) && n.push(g);
        }), n.sort();
      }
      function yh(n) {
        if (n instanceof Qe)
          return n.clone();
        var o = new nr(n.__wrapped__, n.__chain__);
        return o.__actions__ = qt(n.__actions__), o.__index__ = n.__index__, o.__values__ = n.__values__, o;
      }
      function Y5(n, o, f) {
        (f ? Tr(n, o, f) : o === t) ? o = 1 : o = Xt(Ze(o), 0);
        var g = n == null ? 0 : n.length;
        if (!g || o < 1)
          return [];
        for (var S = 0, A = 0, E = j(so(g / o)); S < g; )
          E[A++] = ie(n, S, S += o);
        return E;
      }
      function X5(n) {
        for (var o = -1, f = n == null ? 0 : n.length, g = 0, S = []; ++o < f; ) {
          var A = n[o];
          A && (S[g++] = A);
        }
        return S;
      }
      function Z5() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var o = j(n - 1), f = arguments[0], g = n; g--; )
          o[g - 1] = arguments[g];
        return Wn(Ve(f) ? qt(f) : [f], Qt(o, 1));
      }
      var U5 = $(function(n, o) {
        return Zt(n) ? xa(n, Qt(o, 1, Zt, !0)) : [];
      }), K5 = $(function(n, o) {
        var f = yn(o);
        return Zt(f) && (f = t), Zt(n) ? xa(n, Qt(o, 1, Zt, !0), Te(f, 2)) : [];
      }), H5 = $(function(n, o) {
        var f = yn(o);
        return Zt(f) && (f = t), Zt(n) ? xa(n, Qt(o, 1, Zt, !0), t, f) : [];
      });
      function G5(n, o, f) {
        var g = n == null ? 0 : n.length;
        return g ? (o = f || o === t ? 1 : Ze(o), ie(n, o < 0 ? 0 : o, g)) : [];
      }
      function Q5(n, o, f) {
        var g = n == null ? 0 : n.length;
        return g ? (o = f || o === t ? 1 : Ze(o), o = g - o, ie(n, 0, o < 0 ? 0 : o)) : [];
      }
      function j5(n, o) {
        return n && n.length ? Rt(n, Te(o, 3), !0, !0) : [];
      }
      function q5(n, o) {
        return n && n.length ? Rt(n, Te(o, 3), !0) : [];
      }
      function J5(n, o, f, g) {
        var S = n == null ? 0 : n.length;
        return S ? (f && typeof f != "number" && Tr(n, o, f) && (f = 0, g = S), cc(n, o, f, g)) : [];
      }
      function mh(n, o, f) {
        var g = n == null ? 0 : n.length;
        if (!g)
          return -1;
        var S = f == null ? 0 : Ze(f);
        return S < 0 && (S = Xt(g + S, 0)), Ua(n, Te(o, 3), S);
      }
      function _h(n, o, f) {
        var g = n == null ? 0 : n.length;
        if (!g)
          return -1;
        var S = g - 1;
        return f !== t && (S = Ze(f), S = f < 0 ? Xt(g + S, 0) : or(S, g - 1)), Ua(n, Te(o, 3), S, !0);
      }
      function xh(n) {
        var o = n == null ? 0 : n.length;
        return o ? Qt(n, 1) : [];
      }
      function ev(n) {
        var o = n == null ? 0 : n.length;
        return o ? Qt(n, De) : [];
      }
      function tv(n, o) {
        var f = n == null ? 0 : n.length;
        return f ? (o = o === t ? 1 : Ze(o), Qt(n, o)) : [];
      }
      function rv(n) {
        for (var o = -1, f = n == null ? 0 : n.length, g = {}; ++o < f; ) {
          var S = n[o];
          g[S[0]] = S[1];
        }
        return g;
      }
      function bh(n) {
        return n && n.length ? n[0] : t;
      }
      function nv(n, o, f) {
        var g = n == null ? 0 : n.length;
        if (!g)
          return -1;
        var S = f == null ? 0 : Ze(f);
        return S < 0 && (S = Xt(g + S, 0)), Yi(n, o, S);
      }
      function iv(n) {
        var o = n == null ? 0 : n.length;
        return o ? ie(n, 0, -1) : [];
      }
      var av = $(function(n) {
        var o = It(n, Ie);
        return o.length && o[0] === n[0] ? vo(o) : [];
      }), ov = $(function(n) {
        var o = yn(n), f = It(n, Ie);
        return o === yn(f) ? o = t : f.pop(), f.length && f[0] === n[0] ? vo(f, Te(o, 2)) : [];
      }), sv = $(function(n) {
        var o = yn(n), f = It(n, Ie);
        return o = typeof o == "function" ? o : t, o && f.pop(), f.length && f[0] === n[0] ? vo(f, t, o) : [];
      });
      function lv(n, o) {
        return n == null ? "" : O0.call(n, o);
      }
      function yn(n) {
        var o = n == null ? 0 : n.length;
        return o ? n[o - 1] : t;
      }
      function uv(n, o, f) {
        var g = n == null ? 0 : n.length;
        if (!g)
          return -1;
        var S = g;
        return f !== t && (S = Ze(f), S = S < 0 ? Xt(g + S, 0) : or(S, g - 1)), o === o ? L0(n, o, S) : Ua(n, fa, S, !0);
      }
      function cv(n, o) {
        return n && n.length ? Ca(n, Ze(o)) : t;
      }
      var fv = $(Ch);
      function Ch(n, o) {
        return n && n.length && o && o.length ? Vt(n, o) : n;
      }
      function hv(n, o, f) {
        return n && n.length && o && o.length ? Vt(n, o, Te(f, 2)) : n;
      }
      function dv(n, o, f) {
        return n && n.length && o && o.length ? Vt(n, o, t, f) : n;
      }
      var vv = bi(function(n, o) {
        var f = n == null ? 0 : n.length, g = Ps(n, o);
        return Mu(n, It(o, function(S) {
          return Ci(S, f) ? +S : S;
        }).sort(_i)), g;
      });
      function pv(n, o) {
        var f = [];
        if (!(n && n.length))
          return f;
        var g = -1, S = [], A = n.length;
        for (o = Te(o, 3); ++g < A; ) {
          var E = n[g];
          o(E, g, n) && (f.push(E), S.push(g));
        }
        return Mu(n, S), f;
      }
      function Ac(n) {
        return n == null ? n : fu.call(n);
      }
      function gv(n, o, f) {
        var g = n == null ? 0 : n.length;
        return g ? (f && typeof f != "number" && Tr(n, o, f) ? (o = 0, f = g) : (o = o == null ? 0 : Ze(o), f = f === t ? g : Ze(f)), ie(n, o, f)) : [];
      }
      function yv(n, o) {
        return ce(n, o);
      }
      function mv(n, o, f) {
        return Se(n, o, Te(f, 2));
      }
      function _v(n, o) {
        var f = n == null ? 0 : n.length;
        if (f) {
          var g = ce(n, o);
          if (g < f && $n(n[g], o))
            return g;
        }
        return -1;
      }
      function xv(n, o) {
        return ce(n, o, !0);
      }
      function bv(n, o, f) {
        return Se(n, o, Te(f, 2), !0);
      }
      function Cv(n, o) {
        var f = n == null ? 0 : n.length;
        if (f) {
          var g = ce(n, o, !0) - 1;
          if ($n(n[g], o))
            return g;
        }
        return -1;
      }
      function Sv(n) {
        return n && n.length ? we(n) : [];
      }
      function wv(n, o) {
        return n && n.length ? we(n, Te(o, 2)) : [];
      }
      function kv(n) {
        var o = n == null ? 0 : n.length;
        return o ? ie(n, 1, o) : [];
      }
      function Lv(n, o, f) {
        return n && n.length ? (o = f || o === t ? 1 : Ze(o), ie(n, 0, o < 0 ? 0 : o)) : [];
      }
      function Pv(n, o, f) {
        var g = n == null ? 0 : n.length;
        return g ? (o = f || o === t ? 1 : Ze(o), o = g - o, ie(n, o < 0 ? 0 : o, g)) : [];
      }
      function Iv(n, o) {
        return n && n.length ? Rt(n, Te(o, 3), !1, !0) : [];
      }
      function Av(n, o) {
        return n && n.length ? Rt(n, Te(o, 3)) : [];
      }
      var $v = $(function(n) {
        return ze(Qt(n, 1, Zt, !0));
      }), Tv = $(function(n) {
        var o = yn(n);
        return Zt(o) && (o = t), ze(Qt(n, 1, Zt, !0), Te(o, 2));
      }), Mv = $(function(n) {
        var o = yn(n);
        return o = typeof o == "function" ? o : t, ze(Qt(n, 1, Zt, !0), t, o);
      });
      function Ev(n) {
        return n && n.length ? ze(n) : [];
      }
      function Dv(n, o) {
        return n && n.length ? ze(n, Te(o, 2)) : [];
      }
      function Fv(n, o) {
        return o = typeof o == "function" ? o : t, n && n.length ? ze(n, t, o) : [];
      }
      function $c(n) {
        if (!(n && n.length))
          return [];
        var o = 0;
        return n = Vn(n, function(f) {
          if (Zt(f))
            return o = Xt(f.length, o), !0;
        }), vs(o, function(f) {
          return It(n, Ha(f));
        });
      }
      function Sh(n, o) {
        if (!(n && n.length))
          return [];
        var f = $c(n);
        return o == null ? f : It(f, function(g) {
          return Ar(o, t, g);
        });
      }
      var Ov = $(function(n, o) {
        return Zt(n) ? xa(n, o) : [];
      }), Rv = $(function(n) {
        return Ke(Vn(n, Zt));
      }), Bv = $(function(n) {
        var o = yn(n);
        return Zt(o) && (o = t), Ke(Vn(n, Zt), Te(o, 2));
      }), Nv = $(function(n) {
        var o = yn(n);
        return o = typeof o == "function" ? o : t, Ke(Vn(n, Zt), t, o);
      }), zv = $($c);
      function Vv(n, o) {
        return fe(n || [], o || [], gi);
      }
      function Wv(n, o) {
        return fe(n || [], o || [], D);
      }
      var Yv = $(function(n) {
        var o = n.length, f = o > 1 ? n[o - 1] : t;
        return f = typeof f == "function" ? (n.pop(), f) : t, Sh(n, f);
      });
      function wh(n) {
        var o = L(n);
        return o.__chain__ = !0, o;
      }
      function Xv(n, o) {
        return o(n), n;
      }
      function Vu(n, o) {
        return o(n);
      }
      var Zv = bi(function(n) {
        var o = n.length, f = o ? n[0] : 0, g = this.__wrapped__, S = function(A) {
          return Ps(A, n);
        };
        return o > 1 || this.__actions__.length || !(g instanceof Qe) || !Ci(f) ? this.thru(S) : (g = g.slice(f, +f + (o ? 1 : 0)), g.__actions__.push({
          func: Vu,
          args: [S],
          thisArg: t
        }), new nr(g, this.__chain__).thru(function(A) {
          return o && !A.length && A.push(t), A;
        }));
      });
      function Uv() {
        return wh(this);
      }
      function Kv() {
        return new nr(this.value(), this.__chain__);
      }
      function Hv() {
        this.__values__ === t && (this.__values__ = Bh(this.value()));
        var n = this.__index__ >= this.__values__.length, o = n ? t : this.__values__[this.__index__++];
        return { done: n, value: o };
      }
      function Gv() {
        return this;
      }
      function Qv(n) {
        for (var o, f = this; f instanceof _a; ) {
          var g = yh(f);
          g.__index__ = 0, g.__values__ = t, o ? S.__wrapped__ = g : o = g;
          var S = g;
          f = f.__wrapped__;
        }
        return S.__wrapped__ = n, o;
      }
      function jv() {
        var n = this.__wrapped__;
        if (n instanceof Qe) {
          var o = n;
          return this.__actions__.length && (o = new Qe(this)), o = o.reverse(), o.__actions__.push({
            func: Vu,
            args: [Ac],
            thisArg: t
          }), new nr(o, this.__chain__);
        }
        return this.thru(Ac);
      }
      function qv() {
        return vr(this.__wrapped__, this.__actions__);
      }
      var Jv = Eu(function(n, o, f) {
        ft.call(n, f) ? ++n[f] : Pn(n, f, 1);
      });
      function e6(n, o, f) {
        var g = Ve(n) ? Hl : uc;
        return f && Tr(n, o, f) && (o = t), g(n, Te(o, 3));
      }
      function t6(n, o) {
        var f = Ve(n) ? Vn : bu;
        return f(n, Te(o, 3));
      }
      var r6 = jf(mh), n6 = jf(_h);
      function i6(n, o) {
        return Qt(Wu(n, o), 1);
      }
      function a6(n, o) {
        return Qt(Wu(n, o), De);
      }
      function o6(n, o, f) {
        return f = f === t ? 1 : Ze(f), Qt(Wu(n, o), f);
      }
      function kh(n, o) {
        var f = Ve(n) ? Nr : vn;
        return f(n, Te(o, 3));
      }
      function Lh(n, o) {
        var f = Ve(n) ? p0 : xu;
        return f(n, Te(o, 3));
      }
      var s6 = Eu(function(n, o, f) {
        ft.call(n, f) ? n[f].push(o) : Pn(n, f, [o]);
      });
      function l6(n, o, f, g) {
        n = Wr(n) ? n : Co(n), f = f && !g ? Ze(f) : 0;
        var S = n.length;
        return f < 0 && (f = Xt(S + f, 0)), Ku(n) ? f <= S && n.indexOf(o, f) > -1 : !!S && Yi(n, o, f) > -1;
      }
      var u6 = $(function(n, o, f) {
        var g = -1, S = typeof o == "function", A = Wr(n) ? j(n.length) : [];
        return vn(n, function(E) {
          A[++g] = S ? Ar(o, E, f) : qi(E, o, f);
        }), A;
      }), c6 = Eu(function(n, o, f) {
        Pn(n, f, o);
      });
      function Wu(n, o) {
        var f = Ve(n) ? It : Au;
        return f(n, Te(o, 3));
      }
      function f6(n, o, f, g) {
        return n == null ? [] : (Ve(o) || (o = o == null ? [] : [o]), f = g ? t : f, Ve(f) || (f = f == null ? [] : [f]), yo(n, o, f));
      }
      var h6 = Eu(function(n, o, f) {
        n[f ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function d6(n, o, f) {
        var g = Ve(n) ? fs : ds, S = arguments.length < 3;
        return g(n, Te(o, 4), f, S, vn);
      }
      function v6(n, o, f) {
        var g = Ve(n) ? g0 : ds, S = arguments.length < 3;
        return g(n, Te(o, 4), f, S, xu);
      }
      function p6(n, o) {
        var f = Ve(n) ? Vn : bu;
        return f(n, Zu(Te(o, 3)));
      }
      function g6(n) {
        var o = Ve(n) ? yu : R;
        return o(n);
      }
      function y6(n, o, f) {
        (f ? Tr(n, o, f) : o === t) ? o = 1 : o = Ze(o);
        var g = Ve(n) ? ac : z;
        return g(n, o);
      }
      function m6(n) {
        var o = Ve(n) ? oc : re;
        return o(n);
      }
      function _6(n) {
        if (n == null)
          return 0;
        if (Wr(n))
          return Ku(n) ? hi(n) : n.length;
        var o = Sr(n);
        return o == rr || o == hr ? n.size : Es(n).length;
      }
      function x6(n, o, f) {
        var g = Ve(n) ? Za : _e;
        return f && Tr(n, o, f) && (o = t), g(n, Te(o, 3));
      }
      var b6 = $(function(n, o) {
        if (n == null)
          return [];
        var f = o.length;
        return f > 1 && Tr(n, o[0], o[1]) ? o = [] : f > 2 && Tr(o[0], o[1], o[2]) && (o = [o[0]]), yo(n, Qt(o, 1), []);
      }), Yu = cu || function() {
        return Gt.Date.now();
      };
      function C6(n, o) {
        if (typeof o != "function")
          throw new zr(l);
        return n = Ze(n), function() {
          if (--n < 1)
            return o.apply(this, arguments);
        };
      }
      function Ph(n, o, f) {
        return o = f ? t : o, o = n && o == null ? n.length : o, xi(n, V, t, t, t, t, o);
      }
      function Ih(n, o) {
        var f;
        if (typeof o != "function")
          throw new zr(l);
        return n = Ze(n), function() {
          return --n > 0 && (f = o.apply(this, arguments)), n <= 1 && (o = t), f;
        };
      }
      var Tc = $(function(n, o, f) {
        var g = _;
        if (f.length) {
          var S = wn(f, xo(Tc));
          g |= F;
        }
        return xi(n, g, o, f, S);
      }), Ah = $(function(n, o, f) {
        var g = _ | w;
        if (f.length) {
          var S = wn(f, xo(Ah));
          g |= F;
        }
        return xi(o, g, n, f, S);
      });
      function $h(n, o, f) {
        o = f ? t : o;
        var g = xi(n, P, t, t, t, t, t, o);
        return g.placeholder = $h.placeholder, g;
      }
      function Th(n, o, f) {
        o = f ? t : o;
        var g = xi(n, M, t, t, t, t, t, o);
        return g.placeholder = Th.placeholder, g;
      }
      function Mh(n, o, f) {
        var g, S, A, E, B, Z, ne = 0, ae = !1, oe = !1, xe = !0;
        if (typeof n != "function")
          throw new zr(l);
        o = mn(o) || 0, Bt(f) && (ae = !!f.leading, oe = "maxWait" in f, A = oe ? Xt(mn(f.maxWait) || 0, o) : A, xe = "trailing" in f ? !!f.trailing : xe);
        function ke(Ut) {
          var Tn = g, ki = S;
          return g = S = t, ne = Ut, E = n.apply(ki, Tn), E;
        }
        function Me(Ut) {
          return ne = Ut, B = Vs(Je, o), ae ? ke(Ut) : E;
        }
        function Ue(Ut) {
          var Tn = Ut - Z, ki = Ut - ne, jh = o - Tn;
          return oe ? or(jh, A - ki) : jh;
        }
        function Ee(Ut) {
          var Tn = Ut - Z, ki = Ut - ne;
          return Z === t || Tn >= o || Tn < 0 || oe && ki >= A;
        }
        function Je() {
          var Ut = Yu();
          if (Ee(Ut))
            return rt(Ut);
          B = Vs(Je, Ue(Ut));
        }
        function rt(Ut) {
          return B = t, xe && g ? ke(Ut) : (g = S = t, E);
        }
        function tn() {
          B !== t && qe(B), ne = 0, g = Z = S = B = t;
        }
        function Mr() {
          return B === t ? E : rt(Yu());
        }
        function rn() {
          var Ut = Yu(), Tn = Ee(Ut);
          if (g = arguments, S = this, Z = Ut, Tn) {
            if (B === t)
              return Me(Z);
            if (oe)
              return qe(B), B = Vs(Je, o), ke(Z);
          }
          return B === t && (B = Vs(Je, o)), E;
        }
        return rn.cancel = tn, rn.flush = Mr, rn;
      }
      var S6 = $(function(n, o) {
        return _u(n, 1, o);
      }), w6 = $(function(n, o, f) {
        return _u(n, mn(o) || 0, f);
      });
      function k6(n) {
        return xi(n, N);
      }
      function Xu(n, o) {
        if (typeof n != "function" || o != null && typeof o != "function")
          throw new zr(l);
        var f = function() {
          var g = arguments, S = o ? o.apply(this, g) : g[0], A = f.cache;
          if (A.has(S))
            return A.get(S);
          var E = n.apply(this, g);
          return f.cache = A.set(S, E) || A, E;
        };
        return f.cache = new (Xu.Cache || Qr)(), f;
      }
      Xu.Cache = Qr;
      function Zu(n) {
        if (typeof n != "function")
          throw new zr(l);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, o[0]);
            case 2:
              return !n.call(this, o[0], o[1]);
            case 3:
              return !n.call(this, o[0], o[1], o[2]);
          }
          return !n.apply(this, o);
        };
      }
      function L6(n) {
        return Ih(2, n);
      }
      var P6 = ir(function(n, o) {
        o = o.length == 1 && Ve(o[0]) ? It(o[0], $r(Te())) : It(Qt(o, 1), $r(Te()));
        var f = o.length;
        return $(function(g) {
          for (var S = -1, A = or(g.length, f); ++S < A; )
            g[S] = o[S].call(this, g[S]);
          return Ar(n, this, g);
        });
      }), Mc = $(function(n, o) {
        var f = wn(o, xo(Mc));
        return xi(n, F, t, o, f);
      }), Eh = $(function(n, o) {
        var f = wn(o, xo(Eh));
        return xi(n, O, t, o, f);
      }), I6 = bi(function(n, o) {
        return xi(n, W, t, t, t, o);
      });
      function A6(n, o) {
        if (typeof n != "function")
          throw new zr(l);
        return o = o === t ? o : Ze(o), $(n, o);
      }
      function $6(n, o) {
        if (typeof n != "function")
          throw new zr(l);
        return o = o == null ? 0 : Xt(Ze(o), 0), $(function(f) {
          var g = f[o], S = tt(f, 0, o);
          return g && Wn(S, g), Ar(n, this, S);
        });
      }
      function T6(n, o, f) {
        var g = !0, S = !0;
        if (typeof n != "function")
          throw new zr(l);
        return Bt(f) && (g = "leading" in f ? !!f.leading : g, S = "trailing" in f ? !!f.trailing : S), Mh(n, o, {
          leading: g,
          maxWait: o,
          trailing: S
        });
      }
      function M6(n) {
        return Ph(n, 1);
      }
      function E6(n, o) {
        return Mc(Xe(o), n);
      }
      function D6() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return Ve(n) ? n : [n];
      }
      function F6(n) {
        return Vr(n, y);
      }
      function O6(n, o) {
        return o = typeof o == "function" ? o : t, Vr(n, y, o);
      }
      function R6(n) {
        return Vr(n, v | y);
      }
      function B6(n, o) {
        return o = typeof o == "function" ? o : t, Vr(n, v | y, o);
      }
      function N6(n, o) {
        return o == null || mu(n, o, ur(o));
      }
      function $n(n, o) {
        return n === o || n !== n && o !== o;
      }
      var z6 = Ru($s), V6 = Ru(function(n, o) {
        return n >= o;
      }), ka = ku(function() {
        return arguments;
      }()) ? ku : function(n) {
        return Wt(n) && ft.call(n, "callee") && !lu.call(n, "callee");
      }, Ve = j.isArray, W6 = Yl ? $r(Yl) : Lu;
      function Wr(n) {
        return n != null && Uu(n.length) && !Si(n);
      }
      function Zt(n) {
        return Wt(n) && Wr(n);
      }
      function Y6(n) {
        return n === !0 || n === !1 || Wt(n) && sr(n) == wt;
      }
      var ea = F0 || Yc, X6 = Xl ? $r(Xl) : In;
      function Z6(n) {
        return Wt(n) && n.nodeType === 1 && !Ws(n);
      }
      function U6(n) {
        if (n == null)
          return !0;
        if (Wr(n) && (Ve(n) || typeof n == "string" || typeof n.splice == "function" || ea(n) || bo(n) || ka(n)))
          return !n.length;
        var o = Sr(n);
        if (o == rr || o == hr)
          return !n.size;
        if (zs(n))
          return !Es(n).length;
        for (var f in n)
          if (ft.call(n, f))
            return !1;
        return !0;
      }
      function K6(n, o) {
        return At(n, o);
      }
      function H6(n, o, f) {
        f = typeof f == "function" ? f : t;
        var g = f ? f(n, o) : t;
        return g === t ? At(n, o, t, f) : !!g;
      }
      function Ec(n) {
        if (!Wt(n))
          return !1;
        var o = sr(n);
        return o == Mt || o == yr || typeof n.message == "string" && typeof n.name == "string" && !Ws(n);
      }
      function G6(n) {
        return typeof n == "number" && di(n);
      }
      function Si(n) {
        if (!Bt(n))
          return !1;
        var o = sr(n);
        return o == Ht || o == un || o == _t || o == Ei;
      }
      function Dh(n) {
        return typeof n == "number" && n == Ze(n);
      }
      function Uu(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Oe;
      }
      function Bt(n) {
        var o = typeof n;
        return n != null && (o == "object" || o == "function");
      }
      function Wt(n) {
        return n != null && typeof n == "object";
      }
      var Fh = cs ? $r(cs) : vc;
      function Q6(n, o) {
        return n === o || po(n, o, Sc(o));
      }
      function j6(n, o, f) {
        return f = typeof f == "function" ? f : t, po(n, o, Sc(o), f);
      }
      function q6(n) {
        return Oh(n) && n != +n;
      }
      function J6(n) {
        if (O5(n))
          throw new Re(s);
        return Ts(n);
      }
      function ep(n) {
        return n === null;
      }
      function tp(n) {
        return n == null;
      }
      function Oh(n) {
        return typeof n == "number" || Wt(n) && sr(n) == Pr;
      }
      function Ws(n) {
        if (!Wt(n) || sr(n) != Ot)
          return !1;
        var o = ao(n);
        if (o === null)
          return !0;
        var f = ft.call(o, "constructor") && o.constructor;
        return typeof f == "function" && f instanceof f && to.call(f) == $0;
      }
      var Dc = Zl ? $r(Zl) : go;
      function rp(n) {
        return Dh(n) && n >= -Oe && n <= Oe;
      }
      var Rh = Ul ? $r(Ul) : Pu;
      function Ku(n) {
        return typeof n == "string" || !Ve(n) && Wt(n) && sr(n) == Sn;
      }
      function en(n) {
        return typeof n == "symbol" || Wt(n) && sr(n) == Kr;
      }
      var bo = Kl ? $r(Kl) : pc;
      function np(n) {
        return n === t;
      }
      function ip(n) {
        return Wt(n) && Sr(n) == cn;
      }
      function ap(n) {
        return Wt(n) && sr(n) == ua;
      }
      var op = Ru(Ds), sp = Ru(function(n, o) {
        return n <= o;
      });
      function Bh(n) {
        if (!n)
          return [];
        if (Wr(n))
          return Ku(n) ? Gr(n) : qt(n);
        if (ga && n[ga])
          return k0(n[ga]());
        var o = Sr(n), f = o == rr ? va : o == hr ? pa : Co;
        return f(n);
      }
      function wi(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = mn(n), n === De || n === -De) {
          var o = n < 0 ? -1 : 1;
          return o * be;
        }
        return n === n ? n : 0;
      }
      function Ze(n) {
        var o = wi(n), f = o % 1;
        return o === o ? f ? o - f : o : 0;
      }
      function Nh(n) {
        return n ? yi(Ze(n), 0, de) : 0;
      }
      function mn(n) {
        if (typeof n == "number")
          return n;
        if (en(n))
          return ye;
        if (Bt(n)) {
          var o = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = Bt(o) ? o + "" : o;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = jl(n);
        var f = q1.test(n);
        return f || J1.test(n) ? d0(n.slice(2), f ? 2 : 8) : pl.test(n) ? ye : +n;
      }
      function zh(n) {
        return lr(n, Yr(n));
      }
      function lp(n) {
        return n ? yi(Ze(n), -Oe, Oe) : n === 0 ? n : 0;
      }
      function dt(n) {
        return n == null ? "" : $e(n);
      }
      var up = mo(function(n, o) {
        if (zs(o) || Wr(o)) {
          lr(o, ur(o), n);
          return;
        }
        for (var f in o)
          ft.call(o, f) && gi(n, f, o[f]);
      }), Vh = mo(function(n, o) {
        lr(o, Yr(o), n);
      }), Hu = mo(function(n, o, f, g) {
        lr(o, Yr(o), n, g);
      }), cp = mo(function(n, o, f, g) {
        lr(o, ur(o), n, g);
      }), fp = bi(Ps);
      function hp(n, o) {
        var f = Gi(n);
        return o == null ? f : Ln(f, o);
      }
      var dp = $(function(n, o) {
        n = ct(n);
        var f = -1, g = o.length, S = g > 2 ? o[2] : t;
        for (S && Tr(o[0], o[1], S) && (g = 1); ++f < g; )
          for (var A = o[f], E = Yr(A), B = -1, Z = E.length; ++B < Z; ) {
            var ne = E[B], ae = n[ne];
            (ae === t || $n(ae, Xn[ne]) && !ft.call(n, ne)) && (n[ne] = A[ne]);
          }
        return n;
      }), vp = $(function(n) {
        return n.push(t, ih), Ar(Wh, t, n);
      });
      function pp(n, o) {
        return Gl(n, Te(o, 3), pn);
      }
      function gp(n, o) {
        return Gl(n, Te(o, 3), As);
      }
      function yp(n, o) {
        return n == null ? n : Is(n, Te(o, 3), Yr);
      }
      function mp(n, o) {
        return n == null ? n : Cu(n, Te(o, 3), Yr);
      }
      function _p(n, o) {
        return n && pn(n, Te(o, 3));
      }
      function xp(n, o) {
        return n && As(n, Te(o, 3));
      }
      function bp(n) {
        return n == null ? [] : fo(n, ur(n));
      }
      function Cp(n) {
        return n == null ? [] : fo(n, Yr(n));
      }
      function Fc(n, o, f) {
        var g = n == null ? t : mi(n, o);
        return g === t ? f : g;
      }
      function Sp(n, o) {
        return n != null && sh(n, o, fc);
      }
      function Oc(n, o) {
        return n != null && sh(n, o, hc);
      }
      var wp = Jf(function(n, o, f) {
        o != null && typeof o.toString != "function" && (o = ro.call(o)), n[o] = f;
      }, Bc(Xr)), kp = Jf(function(n, o, f) {
        o != null && typeof o.toString != "function" && (o = ro.call(o)), ft.call(n, o) ? n[o].push(f) : n[o] = [f];
      }, Te), Lp = $(qi);
      function ur(n) {
        return Wr(n) ? ji(n) : Es(n);
      }
      function Yr(n) {
        return Wr(n) ? ji(n, !0) : Iu(n);
      }
      function Pp(n, o) {
        var f = {};
        return o = Te(o, 3), pn(n, function(g, S, A) {
          Pn(f, o(g, S, A), g);
        }), f;
      }
      function Ip(n, o) {
        var f = {};
        return o = Te(o, 3), pn(n, function(g, S, A) {
          Pn(f, S, o(g, S, A));
        }), f;
      }
      var Ap = mo(function(n, o, f) {
        ba(n, o, f);
      }), Wh = mo(function(n, o, f, g) {
        ba(n, o, f, g);
      }), $p = bi(function(n, o) {
        var f = {};
        if (n == null)
          return f;
        var g = !1;
        o = It(o, function(A) {
          return A = Fe(A, n), g || (g = A.length > 1), A;
        }), lr(n, bc(n), f), g && (f = Vr(f, v | m | y, w5));
        for (var S = o.length; S--; )
          et(f, o[S]);
        return f;
      });
      function Tp(n, o) {
        return Yh(n, Zu(Te(o)));
      }
      var Mp = bi(function(n, o) {
        return n == null ? {} : Tu(n, o);
      });
      function Yh(n, o) {
        if (n == null)
          return {};
        var f = It(bc(n), function(g) {
          return [g];
        });
        return o = Te(o), Os(n, f, function(g, S) {
          return o(g, S[0]);
        });
      }
      function Ep(n, o, f) {
        o = Fe(o, n);
        var g = -1, S = o.length;
        for (S || (S = 1, n = t); ++g < S; ) {
          var A = n == null ? t : n[qn(o[g])];
          A === t && (g = S, A = f), n = Si(A) ? A.call(n) : A;
        }
        return n;
      }
      function Dp(n, o, f) {
        return n == null ? n : D(n, o, f);
      }
      function Fp(n, o, f, g) {
        return g = typeof g == "function" ? g : t, n == null ? n : D(n, o, f, g);
      }
      var Xh = rh(ur), Zh = rh(Yr);
      function Op(n, o, f) {
        var g = Ve(n), S = g || ea(n) || bo(n);
        if (o = Te(o, 4), f == null) {
          var A = n && n.constructor;
          S ? f = g ? new A() : [] : Bt(n) ? f = Si(A) ? Gi(ao(n)) : {} : f = {};
        }
        return (S ? Nr : pn)(n, function(E, B, Z) {
          return o(f, E, B, Z);
        }), f;
      }
      function Rp(n, o) {
        return n == null ? !0 : et(n, o);
      }
      function Bp(n, o, f) {
        return n == null ? n : jt(n, o, Xe(f));
      }
      function Np(n, o, f, g) {
        return g = typeof g == "function" ? g : t, n == null ? n : jt(n, o, Xe(f), g);
      }
      function Co(n) {
        return n == null ? [] : ps(n, ur(n));
      }
      function zp(n) {
        return n == null ? [] : ps(n, Yr(n));
      }
      function Vp(n, o, f) {
        return f === t && (f = o, o = t), f !== t && (f = mn(f), f = f === f ? f : 0), o !== t && (o = mn(o), o = o === o ? o : 0), yi(mn(n), o, f);
      }
      function Wp(n, o, f) {
        return o = wi(o), f === t ? (f = o, o = 0) : f = wi(f), n = mn(n), Su(n, o, f);
      }
      function Yp(n, o, f) {
        if (f && typeof f != "boolean" && Tr(n, o, f) && (o = f = t), f === t && (typeof o == "boolean" ? (f = o, o = t) : typeof n == "boolean" && (f = n, n = t)), n === t && o === t ? (n = 0, o = 1) : (n = wi(n), o === t ? (o = n, n = 0) : o = wi(o)), n > o) {
          var g = n;
          n = o, o = g;
        }
        if (f || n % 1 || o % 1) {
          var S = br();
          return or(n + S * (o - n + h0("1e-" + ((S + "").length - 1))), o);
        }
        return p(n, o);
      }
      var Xp = _o(function(n, o, f) {
        return o = o.toLowerCase(), n + (f ? Uh(o) : o);
      });
      function Uh(n) {
        return Rc(dt(n).toLowerCase());
      }
      function Kh(n) {
        return n = dt(n), n && n.replace(e0, C0).replace(Rl, "");
      }
      function Zp(n, o, f) {
        n = dt(n), o = $e(o);
        var g = n.length;
        f = f === t ? g : yi(Ze(f), 0, g);
        var S = f;
        return f -= o.length, f >= 0 && n.slice(f, S) == o;
      }
      function Up(n) {
        return n = dt(n), n && Go.test(n) ? n.replace(ci, S0) : n;
      }
      function Kp(n) {
        return n = dt(n), n && hl.test(n) ? n.replace(Qo, "\\$&") : n;
      }
      var Hp = _o(function(n, o, f) {
        return n + (f ? "-" : "") + o.toLowerCase();
      }), Gp = _o(function(n, o, f) {
        return n + (f ? " " : "") + o.toLowerCase();
      }), Qp = Qf("toLowerCase");
      function jp(n, o, f) {
        n = dt(n), o = Ze(o);
        var g = o ? hi(n) : 0;
        if (!o || g >= o)
          return n;
        var S = (o - g) / 2;
        return Ou(hn(S), f) + n + Ou(so(S), f);
      }
      function qp(n, o, f) {
        n = dt(n), o = Ze(o);
        var g = o ? hi(n) : 0;
        return o && g < o ? n + Ou(o - g, f) : n;
      }
      function Jp(n, o, f) {
        n = dt(n), o = Ze(o);
        var g = o ? hi(n) : 0;
        return o && g < o ? Ou(o - g, f) + n : n;
      }
      function e3(n, o, f) {
        return f || o == null ? o = 0 : o && (o = +o), bs(dt(n).replace(Fa, ""), o || 0);
      }
      function t3(n, o, f) {
        return (f ? Tr(n, o, f) : o === t) ? o = 1 : o = Ze(o), k(dt(n), o);
      }
      function r3() {
        var n = arguments, o = dt(n[0]);
        return n.length < 3 ? o : o.replace(n[1], n[2]);
      }
      var n3 = _o(function(n, o, f) {
        return n + (f ? "_" : "") + o.toLowerCase();
      });
      function i3(n, o, f) {
        return f && typeof f != "number" && Tr(n, o, f) && (o = f = t), f = f === t ? de : f >>> 0, f ? (n = dt(n), n && (typeof o == "string" || o != null && !Dc(o)) && (o = $e(o), !o && Xi(n)) ? tt(Gr(n), 0, f) : n.split(o, f)) : [];
      }
      var a3 = _o(function(n, o, f) {
        return n + (f ? " " : "") + Rc(o);
      });
      function o3(n, o, f) {
        return n = dt(n), f = f == null ? 0 : yi(Ze(f), 0, n.length), o = $e(o), n.slice(f, f + o.length) == o;
      }
      function s3(n, o, f) {
        var g = L.templateSettings;
        f && Tr(n, o, f) && (o = t), n = dt(n), o = Hu({}, o, g, nh);
        var S = Hu({}, o.imports, g.imports, nh), A = ur(S), E = ps(S, A), B, Z, ne = 0, ae = o.interpolate || Ra, oe = "__p += '", xe = ms(
          (o.escape || Ra).source + "|" + ae.source + "|" + (ae === fl ? j1 : Ra).source + "|" + (o.evaluate || Ra).source + "|$",
          "g"
        ), ke = "//# sourceURL=" + (ft.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Wi + "]") + `
`;
        n.replace(xe, function(Ee, Je, rt, tn, Mr, rn) {
          return rt || (rt = tn), oe += n.slice(ne, rn).replace(ml, eu), Je && (B = !0, oe += `' +
__e(` + Je + `) +
'`), Mr && (Z = !0, oe += `';
` + Mr + `;
__p += '`), rt && (oe += `' +
((__t = (` + rt + `)) == null ? '' : __t) +
'`), ne = rn + Ee.length, Ee;
        }), oe += `';
`;
        var Me = ft.call(o, "variable") && o.variable;
        if (!Me)
          oe = `with (obj) {
` + oe + `
}
`;
        else if (dl.test(Me))
          throw new Re(u);
        oe = (Z ? oe.replace(dr, "") : oe).replace(xr, "$1").replace(Ir, "$1;"), oe = "function(" + (Me || "obj") + `) {
` + (Me ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (B ? ", __e = _.escape" : "") + (Z ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
        var Ue = Gh(function() {
          return ot(A, ke + "return " + oe).apply(t, E);
        });
        if (Ue.source = oe, Ec(Ue))
          throw Ue;
        return Ue;
      }
      function l3(n) {
        return dt(n).toLowerCase();
      }
      function u3(n) {
        return dt(n).toUpperCase();
      }
      function c3(n, o, f) {
        if (n = dt(n), n && (f || o === t))
          return jl(n);
        if (!n || !(o = $e(o)))
          return n;
        var g = Gr(n), S = Gr(o), A = ql(g, S), E = Jl(g, S) + 1;
        return tt(g, A, E).join("");
      }
      function f3(n, o, f) {
        if (n = dt(n), n && (f || o === t))
          return n.slice(0, nu(n) + 1);
        if (!n || !(o = $e(o)))
          return n;
        var g = Gr(n), S = Jl(g, Gr(o)) + 1;
        return tt(g, 0, S).join("");
      }
      function h3(n, o, f) {
        if (n = dt(n), n && (f || o === t))
          return n.replace(Fa, "");
        if (!n || !(o = $e(o)))
          return n;
        var g = Gr(n), S = ql(g, Gr(o));
        return tt(g, S).join("");
      }
      function d3(n, o) {
        var f = Y, g = K;
        if (Bt(o)) {
          var S = "separator" in o ? o.separator : S;
          f = "length" in o ? Ze(o.length) : f, g = "omission" in o ? $e(o.omission) : g;
        }
        n = dt(n);
        var A = n.length;
        if (Xi(n)) {
          var E = Gr(n);
          A = E.length;
        }
        if (f >= A)
          return n;
        var B = f - hi(g);
        if (B < 1)
          return g;
        var Z = E ? tt(E, 0, B).join("") : n.slice(0, B);
        if (S === t)
          return Z + g;
        if (E && (B += Z.length - B), Dc(S)) {
          if (n.slice(B).search(S)) {
            var ne, ae = Z;
            for (S.global || (S = ms(S.source, dt(vl.exec(S)) + "g")), S.lastIndex = 0; ne = S.exec(ae); )
              var oe = ne.index;
            Z = Z.slice(0, oe === t ? B : oe);
          }
        } else if (n.indexOf($e(S), B) != B) {
          var xe = Z.lastIndexOf(S);
          xe > -1 && (Z = Z.slice(0, xe));
        }
        return Z + g;
      }
      function v3(n) {
        return n = dt(n), n && Ho.test(n) ? n.replace(Rr, P0) : n;
      }
      var p3 = _o(function(n, o, f) {
        return n + (f ? " " : "") + o.toUpperCase();
      }), Rc = Qf("toUpperCase");
      function Hh(n, o, f) {
        return n = dt(n), o = f ? t : o, o === t ? w0(n) ? ys(n) : _0(n) : n.match(o) || [];
      }
      var Gh = $(function(n, o) {
        try {
          return Ar(n, t, o);
        } catch (f) {
          return Ec(f) ? f : new Re(f);
        }
      }), g3 = bi(function(n, o) {
        return Nr(o, function(f) {
          f = qn(f), Pn(n, f, Tc(n[f], n));
        }), n;
      });
      function y3(n) {
        var o = n == null ? 0 : n.length, f = Te();
        return n = o ? It(n, function(g) {
          if (typeof g[1] != "function")
            throw new zr(l);
          return [f(g[0]), g[1]];
        }) : [], $(function(g) {
          for (var S = -1; ++S < o; ) {
            var A = n[S];
            if (Ar(A[0], this, g))
              return Ar(A[1], this, g);
          }
        });
      }
      function m3(n) {
        return lc(Vr(n, v));
      }
      function Bc(n) {
        return function() {
          return n;
        };
      }
      function _3(n, o) {
        return n == null || n !== n ? o : n;
      }
      var x3 = qf(), b3 = qf(!0);
      function Xr(n) {
        return n;
      }
      function Nc(n) {
        return Ms(typeof n == "function" ? n : Vr(n, v));
      }
      function C3(n) {
        return $u(Vr(n, v));
      }
      function S3(n, o) {
        return Fs(n, Vr(o, v));
      }
      var w3 = $(function(n, o) {
        return function(f) {
          return qi(f, n, o);
        };
      }), k3 = $(function(n, o) {
        return function(f) {
          return qi(n, f, o);
        };
      });
      function zc(n, o, f) {
        var g = ur(o), S = fo(o, g);
        f == null && !(Bt(o) && (S.length || !g.length)) && (f = o, o = n, n = this, S = fo(o, ur(o)));
        var A = !(Bt(f) && "chain" in f) || !!f.chain, E = Si(n);
        return Nr(S, function(B) {
          var Z = o[B];
          n[B] = Z, E && (n.prototype[B] = function() {
            var ne = this.__chain__;
            if (A || ne) {
              var ae = n(this.__wrapped__), oe = ae.__actions__ = qt(this.__actions__);
              return oe.push({ func: Z, args: arguments, thisArg: n }), ae.__chain__ = ne, ae;
            }
            return Z.apply(n, Wn([this.value()], arguments));
          });
        }), n;
      }
      function L3() {
        return Gt._ === this && (Gt._ = T0), this;
      }
      function Vc() {
      }
      function P3(n) {
        return n = Ze(n), $(function(o) {
          return Ca(o, n);
        });
      }
      var I3 = mc(It), A3 = mc(Hl), $3 = mc(Za);
      function Qh(n) {
        return kc(n) ? Ha(qn(n)) : yc(n);
      }
      function T3(n) {
        return function(o) {
          return n == null ? t : mi(n, o);
        };
      }
      var M3 = eh(), E3 = eh(!0);
      function Wc() {
        return [];
      }
      function Yc() {
        return !1;
      }
      function D3() {
        return {};
      }
      function F3() {
        return "";
      }
      function O3() {
        return !0;
      }
      function R3(n, o) {
        if (n = Ze(n), n < 1 || n > Oe)
          return [];
        var f = de, g = or(n, de);
        o = Te(o), n -= de;
        for (var S = vs(g, o); ++f < n; )
          o(f);
        return S;
      }
      function B3(n) {
        return Ve(n) ? It(n, qn) : en(n) ? [n] : qt(gh(dt(n)));
      }
      function N3(n) {
        var o = ++au;
        return dt(n) + o;
      }
      var z3 = Fu(function(n, o) {
        return n + o;
      }, 0), V3 = _c("ceil"), W3 = Fu(function(n, o) {
        return n / o;
      }, 1), Y3 = _c("floor");
      function X3(n) {
        return n && n.length ? co(n, Xr, $s) : t;
      }
      function Z3(n, o) {
        return n && n.length ? co(n, Te(o, 2), $s) : t;
      }
      function U3(n) {
        return Ka(n, Xr);
      }
      function K3(n, o) {
        return Ka(n, Te(o, 2));
      }
      function H3(n) {
        return n && n.length ? co(n, Xr, Ds) : t;
      }
      function G3(n, o) {
        return n && n.length ? co(n, Te(o, 2), Ds) : t;
      }
      var Q3 = Fu(function(n, o) {
        return n * o;
      }, 1), j3 = _c("round"), q3 = Fu(function(n, o) {
        return n - o;
      }, 0);
      function J3(n) {
        return n && n.length ? Ga(n, Xr) : 0;
      }
      function eg(n, o) {
        return n && n.length ? Ga(n, Te(o, 2)) : 0;
      }
      return L.after = C6, L.ary = Ph, L.assign = up, L.assignIn = Vh, L.assignInWith = Hu, L.assignWith = cp, L.at = fp, L.before = Ih, L.bind = Tc, L.bindAll = g3, L.bindKey = Ah, L.castArray = D6, L.chain = wh, L.chunk = Y5, L.compact = X5, L.concat = Z5, L.cond = y3, L.conforms = m3, L.constant = Bc, L.countBy = Jv, L.create = hp, L.curry = $h, L.curryRight = Th, L.debounce = Mh, L.defaults = dp, L.defaultsDeep = vp, L.defer = S6, L.delay = w6, L.difference = U5, L.differenceBy = K5, L.differenceWith = H5, L.drop = G5, L.dropRight = Q5, L.dropRightWhile = j5, L.dropWhile = q5, L.fill = J5, L.filter = t6, L.flatMap = i6, L.flatMapDeep = a6, L.flatMapDepth = o6, L.flatten = xh, L.flattenDeep = ev, L.flattenDepth = tv, L.flip = k6, L.flow = x3, L.flowRight = b3, L.fromPairs = rv, L.functions = bp, L.functionsIn = Cp, L.groupBy = s6, L.initial = iv, L.intersection = av, L.intersectionBy = ov, L.intersectionWith = sv, L.invert = wp, L.invertBy = kp, L.invokeMap = u6, L.iteratee = Nc, L.keyBy = c6, L.keys = ur, L.keysIn = Yr, L.map = Wu, L.mapKeys = Pp, L.mapValues = Ip, L.matches = C3, L.matchesProperty = S3, L.memoize = Xu, L.merge = Ap, L.mergeWith = Wh, L.method = w3, L.methodOf = k3, L.mixin = zc, L.negate = Zu, L.nthArg = P3, L.omit = $p, L.omitBy = Tp, L.once = L6, L.orderBy = f6, L.over = I3, L.overArgs = P6, L.overEvery = A3, L.overSome = $3, L.partial = Mc, L.partialRight = Eh, L.partition = h6, L.pick = Mp, L.pickBy = Yh, L.property = Qh, L.propertyOf = T3, L.pull = fv, L.pullAll = Ch, L.pullAllBy = hv, L.pullAllWith = dv, L.pullAt = vv, L.range = M3, L.rangeRight = E3, L.rearg = I6, L.reject = p6, L.remove = pv, L.rest = A6, L.reverse = Ac, L.sampleSize = y6, L.set = Dp, L.setWith = Fp, L.shuffle = m6, L.slice = gv, L.sortBy = b6, L.sortedUniq = Sv, L.sortedUniqBy = wv, L.split = i3, L.spread = $6, L.tail = kv, L.take = Lv, L.takeRight = Pv, L.takeRightWhile = Iv, L.takeWhile = Av, L.tap = Xv, L.throttle = T6, L.thru = Vu, L.toArray = Bh, L.toPairs = Xh, L.toPairsIn = Zh, L.toPath = B3, L.toPlainObject = zh, L.transform = Op, L.unary = M6, L.union = $v, L.unionBy = Tv, L.unionWith = Mv, L.uniq = Ev, L.uniqBy = Dv, L.uniqWith = Fv, L.unset = Rp, L.unzip = $c, L.unzipWith = Sh, L.update = Bp, L.updateWith = Np, L.values = Co, L.valuesIn = zp, L.without = Ov, L.words = Hh, L.wrap = E6, L.xor = Rv, L.xorBy = Bv, L.xorWith = Nv, L.zip = zv, L.zipObject = Vv, L.zipObjectDeep = Wv, L.zipWith = Yv, L.entries = Xh, L.entriesIn = Zh, L.extend = Vh, L.extendWith = Hu, zc(L, L), L.add = z3, L.attempt = Gh, L.camelCase = Xp, L.capitalize = Uh, L.ceil = V3, L.clamp = Vp, L.clone = F6, L.cloneDeep = R6, L.cloneDeepWith = B6, L.cloneWith = O6, L.conformsTo = N6, L.deburr = Kh, L.defaultTo = _3, L.divide = W3, L.endsWith = Zp, L.eq = $n, L.escape = Up, L.escapeRegExp = Kp, L.every = e6, L.find = r6, L.findIndex = mh, L.findKey = pp, L.findLast = n6, L.findLastIndex = _h, L.findLastKey = gp, L.floor = Y3, L.forEach = kh, L.forEachRight = Lh, L.forIn = yp, L.forInRight = mp, L.forOwn = _p, L.forOwnRight = xp, L.get = Fc, L.gt = z6, L.gte = V6, L.has = Sp, L.hasIn = Oc, L.head = bh, L.identity = Xr, L.includes = l6, L.indexOf = nv, L.inRange = Wp, L.invoke = Lp, L.isArguments = ka, L.isArray = Ve, L.isArrayBuffer = W6, L.isArrayLike = Wr, L.isArrayLikeObject = Zt, L.isBoolean = Y6, L.isBuffer = ea, L.isDate = X6, L.isElement = Z6, L.isEmpty = U6, L.isEqual = K6, L.isEqualWith = H6, L.isError = Ec, L.isFinite = G6, L.isFunction = Si, L.isInteger = Dh, L.isLength = Uu, L.isMap = Fh, L.isMatch = Q6, L.isMatchWith = j6, L.isNaN = q6, L.isNative = J6, L.isNil = tp, L.isNull = ep, L.isNumber = Oh, L.isObject = Bt, L.isObjectLike = Wt, L.isPlainObject = Ws, L.isRegExp = Dc, L.isSafeInteger = rp, L.isSet = Rh, L.isString = Ku, L.isSymbol = en, L.isTypedArray = bo, L.isUndefined = np, L.isWeakMap = ip, L.isWeakSet = ap, L.join = lv, L.kebabCase = Hp, L.last = yn, L.lastIndexOf = uv, L.lowerCase = Gp, L.lowerFirst = Qp, L.lt = op, L.lte = sp, L.max = X3, L.maxBy = Z3, L.mean = U3, L.meanBy = K3, L.min = H3, L.minBy = G3, L.stubArray = Wc, L.stubFalse = Yc, L.stubObject = D3, L.stubString = F3, L.stubTrue = O3, L.multiply = Q3, L.nth = cv, L.noConflict = L3, L.noop = Vc, L.now = Yu, L.pad = jp, L.padEnd = qp, L.padStart = Jp, L.parseInt = e3, L.random = Yp, L.reduce = d6, L.reduceRight = v6, L.repeat = t3, L.replace = r3, L.result = Ep, L.round = j3, L.runInContext = X, L.sample = g6, L.size = _6, L.snakeCase = n3, L.some = x6, L.sortedIndex = yv, L.sortedIndexBy = mv, L.sortedIndexOf = _v, L.sortedLastIndex = xv, L.sortedLastIndexBy = bv, L.sortedLastIndexOf = Cv, L.startCase = a3, L.startsWith = o3, L.subtract = q3, L.sum = J3, L.sumBy = eg, L.template = s3, L.times = R3, L.toFinite = wi, L.toInteger = Ze, L.toLength = Nh, L.toLower = l3, L.toNumber = mn, L.toSafeInteger = lp, L.toString = dt, L.toUpper = u3, L.trim = c3, L.trimEnd = f3, L.trimStart = h3, L.truncate = d3, L.unescape = v3, L.uniqueId = N3, L.upperCase = p3, L.upperFirst = Rc, L.each = kh, L.eachRight = Lh, L.first = bh, zc(L, function() {
        var n = {};
        return pn(L, function(o, f) {
          ft.call(L.prototype, f) || (n[f] = o);
        }), n;
      }(), { chain: !1 }), L.VERSION = i, Nr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        L[n].placeholder = L;
      }), Nr(["drop", "take"], function(n, o) {
        Qe.prototype[n] = function(f) {
          f = f === t ? 1 : Xt(Ze(f), 0);
          var g = this.__filtered__ && !o ? new Qe(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = or(f, g.__takeCount__) : g.__views__.push({
            size: or(f, de),
            type: n + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Qe.prototype[n + "Right"] = function(f) {
          return this.reverse()[n](f).reverse();
        };
      }), Nr(["filter", "map", "takeWhile"], function(n, o) {
        var f = o + 1, g = f == he || f == ve;
        Qe.prototype[n] = function(S) {
          var A = this.clone();
          return A.__iteratees__.push({
            iteratee: Te(S, 3),
            type: f
          }), A.__filtered__ = A.__filtered__ || g, A;
        };
      }), Nr(["head", "last"], function(n, o) {
        var f = "take" + (o ? "Right" : "");
        Qe.prototype[n] = function() {
          return this[f](1).value()[0];
        };
      }), Nr(["initial", "tail"], function(n, o) {
        var f = "drop" + (o ? "" : "Right");
        Qe.prototype[n] = function() {
          return this.__filtered__ ? new Qe(this) : this[f](1);
        };
      }), Qe.prototype.compact = function() {
        return this.filter(Xr);
      }, Qe.prototype.find = function(n) {
        return this.filter(n).head();
      }, Qe.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Qe.prototype.invokeMap = $(function(n, o) {
        return typeof n == "function" ? new Qe(this) : this.map(function(f) {
          return qi(f, n, o);
        });
      }), Qe.prototype.reject = function(n) {
        return this.filter(Zu(Te(n)));
      }, Qe.prototype.slice = function(n, o) {
        n = Ze(n);
        var f = this;
        return f.__filtered__ && (n > 0 || o < 0) ? new Qe(f) : (n < 0 ? f = f.takeRight(-n) : n && (f = f.drop(n)), o !== t && (o = Ze(o), f = o < 0 ? f.dropRight(-o) : f.take(o - n)), f);
      }, Qe.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Qe.prototype.toArray = function() {
        return this.take(de);
      }, pn(Qe.prototype, function(n, o) {
        var f = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), S = L[g ? "take" + (o == "last" ? "Right" : "") : o], A = g || /^find/.test(o);
        S && (L.prototype[o] = function() {
          var E = this.__wrapped__, B = g ? [1] : arguments, Z = E instanceof Qe, ne = B[0], ae = Z || Ve(E), oe = function(Je) {
            var rt = S.apply(L, Wn([Je], B));
            return g && xe ? rt[0] : rt;
          };
          ae && f && typeof ne == "function" && ne.length != 1 && (Z = ae = !1);
          var xe = this.__chain__, ke = !!this.__actions__.length, Me = A && !xe, Ue = Z && !ke;
          if (!A && ae) {
            E = Ue ? E : new Qe(this);
            var Ee = n.apply(E, B);
            return Ee.__actions__.push({ func: Vu, args: [oe], thisArg: t }), new nr(Ee, xe);
          }
          return Me && Ue ? n.apply(this, B) : (Ee = this.thru(oe), Me ? g ? Ee.value()[0] : Ee.value() : Ee);
        });
      }), Nr(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var o = Ja[n], f = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(n);
        L.prototype[n] = function() {
          var S = arguments;
          if (g && !this.__chain__) {
            var A = this.value();
            return o.apply(Ve(A) ? A : [], S);
          }
          return this[f](function(E) {
            return o.apply(Ve(E) ? E : [], S);
          });
        };
      }), pn(Qe.prototype, function(n, o) {
        var f = L[o];
        if (f) {
          var g = f.name + "";
          ft.call(Ki, g) || (Ki[g] = []), Ki[g].push({ name: o, func: f });
        }
      }), Ki[Du(t, w).name] = [{
        name: "wrapper",
        func: t
      }], Qe.prototype.clone = pu, Qe.prototype.reverse = W0, Qe.prototype.value = Y0, L.prototype.at = Zv, L.prototype.chain = Uv, L.prototype.commit = Kv, L.prototype.next = Hv, L.prototype.plant = Qv, L.prototype.reverse = jv, L.prototype.toJSON = L.prototype.valueOf = L.prototype.value = qv, L.prototype.first = L.prototype.head, ga && (L.prototype[ga] = Gv), L;
    }, Yn = ja();
    fi ? ((fi.exports = Yn)._ = Yn, ls._ = Yn) : Gt._ = Yn;
  }).call(ei);
})(y1, y1.exports);
var lt = y1.exports;
const V2 = /* @__PURE__ */ E1(lt), [an, t5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#00698b",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#00698b"
  }
}), [on, r5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#00698b",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#00698b"
  }
}), [sn, n5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#00698b",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#00698b"
  }
}), [Lr, i5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#fb7b50",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#fb7b50"
  }
}), [ii, a5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#fb7b50",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#fb7b50"
  }
}), [ai, o5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#fb7b50",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#fb7b50"
  }
}), [je, s5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#00698b",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#00698b"
  }
}), [at, l5] = J({
  lineStyle: {
    style: "dashed",
    size: 1,
    color: "#fb7b50",
    dashedValue: [4, 4]
  },
  labelStyle: {
    style: "fill",
    size: 12,
    family: "Helvetica Neue",
    weight: "normal",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderStyle: "solid",
    borderSize: 1,
    color: "#FFFFFF",
    borderColor: "#00698b",
    backgroundColor: "#fb7b50"
  }
}), Qk = {
  color: "#1677FF",
  borderColor: "rgba(22, 119, 255, 0.35)",
  borderSize: 1,
  radius: 5,
  activeColor: "#1677FF",
  activeBorderColor: "rgba(22, 119, 255, 0.35)",
  activeBorderSize: 3,
  activeRadius: 5
}, jk = {
  // 'fill' | 'stroke' | 'stroke_fill'
  style: "fill",
  color: "#FFFFFF",
  size: 12,
  family: "Helvetica Neue",
  weight: "normal",
  // 'solid' | 'dashed'
  borderStyle: "solid",
  borderDashedValue: [2, 2],
  borderSize: 0,
  borderRadius: 2,
  borderColor: "#1677FF",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  backgroundColor: "transparent"
}, Uf = {
  // 'fill' | 'stroke' | 'stroke_fill'
  style: "fill",
  color: "rgba(22, 119, 255, 0.25)",
  borderColor: "#1677FF",
  borderSize: 1,
  // 'solid' | 'dashed'
  borderStyle: "solid",
  borderDashedValue: [2, 2]
}, u5 = Uf;
({
  ...Uf
});
const c5 = {
  // 'solid' | 'dashed'
  style: "solid",
  color: "#1677FF",
  size: 1,
  dashedValue: [2, 2]
}, Nn = {
  ...c5,
  smooth: !1
}, [qk, Jk] = J({
  point: Qk
}), [eL, tL] = J({
  line: Nn
}), [rL, nL] = J({
  line: Nn
}), [iL, aL] = J({
  line: Nn
}), [oL, sL] = J({
  line: Nn
}), [lL, uL] = J({
  line: Nn
}), [cL, fL] = J({
  line: Nn
}), [hL, dL] = J({
  line: Nn
}), [vL, pL] = J({
  line: Nn
}), [gL, yL] = J({
  line: Nn
}), [mL, _L] = J({
  line: Nn
}), [xL, bL] = J({
  line: Nn
}), [CL, SL] = J({
  polygon: u5
}), [wL, kL] = J({
  polygon: u5
}), [LL, PL] = J({
  circle: Uf
}), [IL, AL] = J({
  arc: c5
}), [$L, TL] = J({
  text: jk
}), Io = {
  pointStyle: qk,
  horizontalStraightLineStyle: eL,
  horizontalRayLineStyle: iL,
  horizontalSegmentStyle: rL,
  verticalStraightLineStyle: cL,
  verticalRayLineStyle: oL,
  verticalSegmentStyle: lL,
  straightLineStyle: xL,
  rayLineStyle: hL,
  segmentStyle: vL,
  arrowStyle: gL,
  priceLineStyle: mL,
  rectStyle: CL,
  polygonStyle: wL,
  circleStyle: LL,
  arcStyle: IL,
  textStyle: $L
}, W2 = {
  setpointStyle: (e) => Jk(e),
  sethorizontalStraightLineStyle: (e) => tL(e),
  sethorizontalRayLineStyle: (e) => aL(e),
  sethorizontalSegmentStyle: (e) => nL(e),
  setverticalStraightLineStyle: (e) => fL(e),
  setverticalRayLineStyle: (e) => sL(e),
  setverticalSegmentStyle: (e) => uL(e),
  setstraightLineStyle: (e) => bL(e),
  setrayLineStyle: (e) => dL(e),
  setsegmentStyle: (e) => pL(e),
  setarrowStyle: (e) => yL(e),
  setpriceLineStyle: (e) => _L(e),
  setrectStyle: (e) => SL(e),
  setpolygonStyle: (e) => kL(e),
  setcircleStyle: (e) => PL(e),
  setarcStyle: (e) => AL(e),
  settextStyle: (e) => TL(e)
}, [tl, m1] = J([""]), [_1, x1] = J({}), [f5, ra] = J(!1), [gf, Y2] = J(""), [yf, ML] = J(!1), [qu, ul] = J(!1), [Pi, mf] = J(1), [Ro, EL] = J(), Gs = () => {
  var e;
  (e = Pe()) == null || e.resize();
}, h5 = () => {
  (async () => {
    var s;
    clearInterval(uT()), Ro().unsubscribe();
    const r = async (l, u, c) => {
      let h = 0, d = 0;
      if (l && u !== void 0)
        for (; h < l.length; )
          l[h].pl !== null && l[h].pips !== null && (d = +d + +l[h].pl, await c.modifyOrder({
            id: l[h].orderId,
            //in a real application this should be calculated on backend
            pips: l[h].pips,
            //in a real application this should be calculated on backend
            pl: l[h].pips * l[h].lotSize * u.dollarPerPip
          }), await new Promise((v) => setTimeout(v, 500))), h++;
      return d;
    }, t = async (l, u, c) => {
      var d, v;
      const h = +l.current_bal + +u;
      l && await (c == null ? void 0 : c.updateSession({
        id: l.id,
        current_bal: l.current_bal,
        equity: h,
        chart_timestamp: i1(),
        chart: localStorage.getItem(`chartstatedata_${(d = bt()) == null ? void 0 : d.id}`) != null && f5() ? btoa(localStorage.getItem(`chartstatedata_${(v = bt()) == null ? void 0 : v.id}`)) : void 0
      }));
    }, i = nt().filter((l) => (l.action == "buy" || l.action == "sell") && !l.exitType && !l.exitPoint);
    let a = await r(i, gr(), Ai());
    await t(bt(), a, S1()), y5(null), yd(sT()), await new Promise((l) => setTimeout(l, 500)), window.location.href = (s = S1()) != null && s.isNotGuest() ? "/dashboard" : "/";
  })();
}, DL = (e) => {
  const r = [
    "calc",
    "figures",
    "regenerateFigures",
    "draw",
    "createTooltipDataSource"
  ];
  let t = e;
  return r.forEach((i) => {
    delete t[i];
  }), t;
}, FL = (e) => {
  const r = [
    "onDrawStart",
    "onDrawing",
    "onDrawEnd",
    "onClick",
    "onDoubleClick",
    "onRightClick",
    "onMouseEnter",
    "onMouseLeave",
    "onPressedMoveStart",
    "onPressedMoving",
    "onPressedMoveEnd",
    "onRemoved",
    "onSelected",
    "onDeselected",
    "performEventMoveForDrawing",
    "performEventPressedMove",
    "_prevPressedPoint",
    "_prevPressedPoints",
    "createPointFigures",
    "createXAxisFigures",
    "createYAxisFigures"
  ];
  let t = e;
  return r.forEach((i) => {
    delete t[i];
  }), t;
}, z1 = () => {
  const e = (v, m, y) => {
    var w, T;
    const C = localStorage.getItem(`chartstatedata_${(w = bt()) == null ? void 0 : w.id}`);
    let b;
    const _ = DL(V2.cloneDeep(v));
    return C ? (b = JSON.parse(C), b.indicators ? b.indicators.find((P) => {
      var M, F;
      return ((M = P.value) == null ? void 0 : M.name) === _.name && ((F = P.paneOptions) == null ? void 0 : F.id) === (y == null ? void 0 : y.id);
    }) ? b.indicators = b.indicators.map((P) => {
      var M;
      return ((M = P.value) == null ? void 0 : M.id) !== _.id ? P : {
        value: _,
        isStack: m,
        paneOptions: y
      };
    }) : b.indicators.push({
      value: _,
      isStack: m,
      paneOptions: y
    }) : b.indicators = [{
      value: _,
      isStack: m,
      paneOptions: y
    }]) : b = {
      indicators: [{
        value: _,
        isStack: m,
        paneOptions: y
      }]
    }, localStorage.setItem(`chartstatedata_${(T = bt()) == null ? void 0 : T.id}`, JSON.stringify(b)), ra(!0), !1;
  }, r = (v) => {
    var b, _;
    const m = localStorage.getItem(`chartstatedata_${(b = bt()) == null ? void 0 : b.id}`);
    let y;
    const C = FL(V2.cloneDeep(v));
    return m ? (y = JSON.parse(m), y.overlays ? y.overlays.find((w) => {
      var T;
      return ((T = w.value) == null ? void 0 : T.id) === C.id;
    }) ? y.overlays = y.overlays.map((w) => {
      var T;
      return ((T = w.value) == null ? void 0 : T.id) !== C.id ? w : {
        value: C,
        paneId: v.paneId
      };
    }) : y.overlays.push({
      value: C,
      paneId: v.paneId
    }) : y.overlays = [{
      value: v,
      paneId: v.paneId
    }]) : y = {
      overlays: [{
        value: C,
        paneId: v.paneId
      }]
    }, localStorage.setItem(`chartstatedata_${(_ = bt()) == null ? void 0 : _.id}`, JSON.stringify(y)), ra(!0), !1;
  };
  function t(v, m, y, C, b = !1) {
    m === "VOL" && (C = { gap: { bottom: 2 }, ...C });
    const _ = (v == null ? void 0 : v.createIndicator({
      name: m,
      // @ts-expect-error
      createTooltipDataSource: ({ indicator: w, defaultStyles: T }) => {
        const P = [];
        return w.visible ? (P.push(T.tooltip.icons[1]), P.push(T.tooltip.icons[2]), P.push(T.tooltip.icons[3])) : (P.push(T.tooltip.icons[0]), P.push(T.tooltip.icons[2]), P.push(T.tooltip.icons[3])), { icons: P };
      }
    }, y, C)) ?? null;
    if (_ && b) {
      const w = v == null ? void 0 : v.getIndicatorByPaneId(_, m);
      w && e(w, y, { id: _ });
    }
    return _;
  }
  const i = (v, m, y = !1) => {
    var _, w, T, P;
    const C = (_ = Pe()) == null ? void 0 : _.createOverlay(v, m), b = (w = Pe()) == null ? void 0 : w.getOverlayById(C);
    if (b) {
      const M = !y && Io[`${b.name}Style`] ? Io[`${b.name}Style`]() : void 0;
      (T = Pe()) == null || T.overrideOverlay({
        id: b.id,
        styles: v.styles ?? M,
        onDrawEnd: (F) => r(F.overlay),
        onPressedMoveEnd: (F) => r(F.overlay),
        onRightClick: (F) => Ao() ? (a(F.overlay.id), !0) : (Ft().openPopup(F, { overlayType: F.overlay.name }), !0)
      }), y || r((P = Pe()) == null ? void 0 : P.getOverlayById(C));
    }
  }, a = (v) => {
    var y, C, b, _;
    const m = localStorage.getItem(`chartstatedata_${(y = bt()) == null ? void 0 : y.id}`);
    if (m) {
      let w = JSON.parse(m);
      w.overlays = (C = w.overlays) == null ? void 0 : C.filter((T) => {
        var P;
        return ((P = T.value) == null ? void 0 : P.id) !== v;
      }), localStorage.setItem(`chartstatedata_${(b = bt()) == null ? void 0 : b.id}`, JSON.stringify(w)), ra(!0);
    }
    (_ = Pe()) == null || _.removeOverlay(v);
  }, s = (v) => {
    const m = [...tl()];
    v.added ? (t(Pe(), v.name, !0, { id: "candle_pane" }, !0), m.push(v.name)) : (c(v.name, "candle_pane"), m.splice(m.indexOf(v.name), 1)), m1(m);
  }, l = (v) => {
    const m = { ..._1() };
    if (v.added) {
      const y = t(Pe(), v.name, !1, void 0, !0);
      y && (m[v.name] = y);
    } else
      v.paneId && (c(v.name, v.paneId), delete m[v.name]);
    x1(m);
  }, u = (v, m) => {
    var C, b, _, w;
    const y = localStorage.getItem(`chartstatedata_${(C = bt()) == null ? void 0 : C.id}`);
    if (y) {
      let T = JSON.parse(y);
      T.indicators = (b = T.indicators) == null ? void 0 : b.map((P) => {
        var M;
        return ((M = P.value) == null ? void 0 : M.name) === v.indicatorName && (P.value.name = v.indicatorName, P.value.calcParams = m, P.paneOptions.id = v.paneId), P;
      }), localStorage.setItem(`chartstatedata_${(_ = bt()) == null ? void 0 : _.id}`, JSON.stringify(T)), ra(!0), (w = Pe()) == null || w.overrideIndicator({ name: v.indicatorName, calcParams: m }, v.paneId);
    }
  }, c = (v, m) => {
    var C, b, _, w;
    const y = localStorage.getItem(`chartstatedata_${(C = bt()) == null ? void 0 : C.id}`);
    if ((b = Pe()) == null || b.removeIndicator(m, v), y) {
      let T = JSON.parse(y);
      T.indicators = (_ = T.indicators) == null ? void 0 : _.filter((P) => {
        var M, F;
        return ((M = P.paneOptions) == null ? void 0 : M.id) !== m && ((F = P.value) == null ? void 0 : F.name) !== v;
      }), localStorage.setItem(`chartstatedata_${(w = bt()) == null ? void 0 : w.id}`, JSON.stringify(T)), ra(!0);
    }
  };
  return { createIndicator: t, modifyIndicator: u, popIndicator: c, syncIndiObject: e, syncObject: r, pushOverlay: i, popOverlay: a, pushMainIndicator: s, pushSubIndicator: l, redrawOrders: async () => {
    let v = await Ai().retrieveOrders();
    v && (Zr(v), v.forEach((m) => {
      m.exitType || Mo(m);
    }));
  }, redraOverlaysIndiAndFigs: async () => {
    var y, C, b, _, w;
    const v = (T) => {
      var M;
      const P = JSON.parse(T);
      if (P.figures, P.overlays && P.overlays.forEach((F) => {
        i(F.value, F.paneId, !0);
      }), P.indicators && setTimeout(() => {
        const F = [...tl()], O = { ..._1 };
        P.indicators.forEach((V) => {
          var W, N, Y;
          V.value && ((W = Pe()) == null || W.createIndicator(V.value, V.isStack, V.paneOptions), ((N = V.paneOptions) == null ? void 0 : N.id) === "candle_pane" ? F.push(V.value.name) : O[V.value.name] = (Y = V.paneOptions) == null ? void 0 : Y.id);
        }), m1(F), x1(O);
      }, 500), P.styleObj && ((M = Pe()) == null || M.setStyles(P.styleObj)), P.orderStyles) {
        const F = P.orderStyles;
        OL(F);
      }
    };
    if ((y = bt()) != null && y.chart) {
      let T = atob((C = bt()) == null ? void 0 : C.chart);
      if (T)
        return T !== localStorage.getItem(`chartstatedata_${(b = bt()) == null ? void 0 : b.id}`) && localStorage.setItem(`chartstatedata_${(_ = bt()) == null ? void 0 : _.id}`, T), v(T);
    }
    const m = localStorage.getItem(`chartstatedata_${(w = bt()) == null ? void 0 : w.id}`);
    m && v(m);
  } };
}, OL = (e) => {
  e.buyStyle && t5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.buyStyle) != null && i.lineStyle)
      for (const s in e.buyStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.buyStyle.lineStyle[s]);
    if ((a = e.buyStyle) != null && a.labelStyle)
      for (const s in e.buyStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.buyStyle.labelStyle[s]);
    return t;
  }), e.buyLimitStyle && r5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.buyLimitStyle) != null && i.lineStyle)
      for (const s in e.buyLimitStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.buyLimitStyle.lineStyle[s]);
    if ((a = e.buyLimitStyle) != null && a.labelStyle)
      for (const s in e.buyLimitStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.buyLimitStyle.labelStyle[s]);
    return t;
  }), e.buyStopStyle && n5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.buyStopStyle) != null && i.lineStyle)
      for (const s in e.buyStopStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.buyStopStyle.lineStyle[s]);
    if ((a = e.buyStopStyle) != null && a.labelStyle)
      for (const s in e.buyStopStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.buyStopStyle.labelStyle[s]);
    return t;
  }), e.sellStyle && i5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.sellStyle) != null && i.lineStyle)
      for (const s in e.sellStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.sellStyle.lineStyle[s]);
    if ((a = e.sellStyle) != null && a.labelStyle)
      for (const s in e.sellStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.sellStyle.labelStyle[s]);
    return t;
  }), e.sellLimitStyle && a5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.sellLimitStyle) != null && i.lineStyle)
      for (const s in e.sellLimitStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.sellLimitStyle.lineStyle[s]);
    if ((a = e.sellLimitStyle) != null && a.labelStyle)
      for (const s in e.sellLimitStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.sellLimitStyle.labelStyle[s]);
    return t;
  }), e.sellStopStyle && o5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.sellStopStyle) != null && i.lineStyle)
      for (const s in e.sellStopStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.sellStopStyle.lineStyle[s]);
    if ((a = e.sellStopStyle) != null && a.labelStyle)
      for (const s in e.sellStopStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.sellStopStyle.labelStyle[s]);
    return t;
  }), e.stopLossStyle && l5((r) => {
    var i, a;
    const t = lt.cloneDeep(r);
    if ((i = e.stopLossStyle) != null && i.lineStyle)
      for (const s in e.stopLossStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.stopLossStyle.lineStyle[s]);
    if ((a = e.stopLossStyle) != null && a.labelStyle)
      for (const s in e.stopLossStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.stopLossStyle.labelStyle[s]);
    return t;
  }), e.takeProfitStyle && s5((r) => {
    var i, a;
    const t = lt.cloneDeep(je());
    if ((i = e.takeProfitStyle) != null && i.lineStyle)
      for (const s in e.takeProfitStyle.lineStyle)
        s !== void 0 && lt.set(t, `lineStyle.${s}`, e.takeProfitStyle.lineStyle[s]);
    if ((a = e.takeProfitStyle) != null && a.labelStyle)
      for (const s in e.takeProfitStyle.labelStyle)
        s !== void 0 && lt.set(t, `labelStyle.${s}`, e.takeProfitStyle.labelStyle[s]);
    return t;
  });
}, RL = "指标", BL = "主图指标", NL = "副图指标", zL = "设置", VL = "时区", WL = "截屏", YL = "全屏", XL = "退出全屏", ZL = "保存", UL = "确定", KL = "取消", HL = "MA(移动平均线)", GL = "EMA(指数平滑移动平均线)", QL = "SMA", jL = "BOLL(布林线)", qL = "BBI(多空指数)", JL = "SAR(停损点指向指标)", eP = "VOL(成交量)", tP = "MACD(指数平滑异同移动平均线)", rP = "KDJ(随机指标)", nP = "RSI(相对强弱指标)", iP = "BIAS(乖离率)", aP = "BRAR(情绪指标)", oP = "CCI(顺势指标)", sP = "DMI(动向指标)", lP = "CR(能量指标)", uP = "PSY(心理线)", cP = "DMA(平行线差指标)", fP = "TRIX(三重指数平滑平均线)", hP = "OBV(能量潮指标)", dP = "VR(成交量变异率)", vP = "WR(威廉指标)", pP = "MTM(动量指标)", gP = "EMV(简易波动指标)", yP = "ROC(变动率指标)", mP = "PVT(价量趋势指标)", _P = "AO(动量震荡指标)", xP = "世界统一时间", bP = "(UTC-10) 檀香山", CP = "(UTC-8) 朱诺", SP = "(UTC-7) 洛杉矶", wP = "(UTC-5) 芝加哥", kP = "(UTC-4) 多伦多", LP = "(UTC-3) 圣保罗", PP = "(UTC+1) 伦敦", IP = "(UTC+2) 柏林", AP = "(UTC+3) 巴林", $P = "(UTC+4) 迪拜", TP = "(UTC+5) 阿什哈巴德", MP = "(UTC+6) 阿拉木图", EP = "(UTC+7) 曼谷", DP = "(UTC+8) 上海", FP = "(UTC+9) 东京", OP = "(UTC+10) 悉尼", RP = "(UTC+12) 诺福克岛", BP = "水平直线", NP = "水平射线", zP = "水平线段", VP = "垂直直线", WP = "垂直射线", YP = "垂直线段", XP = "直线", ZP = "射线", UP = "线段", KP = "箭头", HP = "价格线", GP = "价格通道线", QP = "平行直线", jP = "斐波那契回调直线", qP = "斐波那契回调线段", JP = "斐波那契圆环", eI = "斐波那契螺旋", tI = "斐波那契速度阻力扇", rI = "斐波那契趋势扩展", nI = "江恩箱", iI = "矩形", aI = "平行四边形", oI = "圆", sI = "三角形", lI = "三浪", uI = "五浪", cI = "八浪", fI = "任意浪", hI = "ABCD形态", dI = "XABCD形态", vI = "弱磁模式", pI = "强磁模式", gI = "商品搜索", yI = "商品代码", mI = "参数1", _I = "参数2", xI = "参数3", bI = "参数4", CI = "参数5", SI = "周期", wI = "标准差", kI = "蜡烛图类型", LI = "全实心", PI = "全空心", II = "涨空心", AI = "跌空心", $I = "OHLC", TI = "面积图", MI = "最新价显示", EI = "最高价显示", DI = "最低价显示", FI = "指标最新值显示", OI = "价格轴类型", RI = "线性轴", BI = "百分比轴", NI = "对数轴", zI = "倒置坐标", VI = "网格线显示", WI = "恢复默认", YI = {
  indicator: RL,
  main_indicator: BL,
  sub_indicator: NL,
  setting: zL,
  timezone: VL,
  screenshot: WL,
  full_screen: YL,
  exit_full_screen: XL,
  save: ZL,
  confirm: UL,
  cancel: KL,
  ma: HL,
  ema: GL,
  sma: QL,
  boll: jL,
  bbi: qL,
  sar: JL,
  vol: eP,
  macd: tP,
  kdj: rP,
  rsi: nP,
  bias: iP,
  brar: aP,
  cci: oP,
  dmi: sP,
  cr: lP,
  psy: uP,
  dma: cP,
  trix: fP,
  obv: hP,
  vr: dP,
  wr: vP,
  mtm: pP,
  emv: gP,
  roc: yP,
  pvt: mP,
  ao: _P,
  utc: xP,
  honolulu: bP,
  juneau: CP,
  los_angeles: SP,
  chicago: wP,
  toronto: kP,
  sao_paulo: LP,
  london: PP,
  berlin: IP,
  bahrain: AP,
  dubai: $P,
  ashkhabad: TP,
  almaty: MP,
  bangkok: EP,
  shanghai: DP,
  tokyo: FP,
  sydney: OP,
  norfolk: RP,
  horizontal_straight_line: BP,
  horizontal_ray_line: NP,
  horizontal_segment: zP,
  vertical_straight_line: VP,
  vertical_ray_line: WP,
  vertical_segment: YP,
  straight_line: XP,
  ray_line: ZP,
  segment: UP,
  arrow: KP,
  price_line: HP,
  price_channel_line: GP,
  parallel_straight_line: QP,
  fibonacci_line: jP,
  fibonacci_segment: qP,
  fibonacci_circle: JP,
  fibonacci_spiral: eI,
  fibonacci_speed_resistance_fan: tI,
  fibonacci_extension: rI,
  gann_box: nI,
  rect: iI,
  parallelogram: aI,
  circle: oI,
  triangle: sI,
  three_waves: lI,
  five_waves: uI,
  eight_waves: cI,
  any_waves: fI,
  abcd: hI,
  xabcd: dI,
  weak_magnet: vI,
  strong_magnet: pI,
  symbol_search: gI,
  symbol_code: yI,
  params_1: mI,
  params_2: _I,
  params_3: xI,
  params_4: bI,
  params_5: CI,
  period: SI,
  standard_deviation: wI,
  candle_type: kI,
  candle_solid: LI,
  candle_stroke: PI,
  candle_up_stroke: II,
  candle_down_stroke: AI,
  ohlc: $I,
  area: TI,
  last_price_show: MI,
  high_price_show: EI,
  low_price_show: DI,
  indicator_last_value_show: FI,
  price_axis_type: OI,
  normal: RI,
  percentage: BI,
  log: NI,
  reverse_coordinate: zI,
  grid_show: VI,
  restore_default: WI
}, XI = "Indicator", ZI = "Main Indicator", UI = "Sub Indicator", KI = "Setting", HI = "Timezone", GI = "Screenshot", QI = "Full Screen", jI = "Exit", qI = "Save", JI = "Confirm", eA = "Cancel", tA = "MA(Moving Average)", rA = "EMA(Exponential Moving Average)", nA = "SMA", iA = "BOLL(Bolinger Bands)", aA = "BBI(Bull And Bearlndex)", oA = "SAR(Stop and Reverse)", sA = "VOL(Volume)", lA = "MACD(Moving Average Convergence / Divergence)", uA = "KDJ(KDJ Index)", cA = "RSI(Relative Strength Index)", fA = "BIAS(Bias Ratio)", hA = "BRAR(情绪指标)", dA = "CCI(Commodity Channel Index)", vA = "DMI(Directional Movement Index)", pA = "CR(能量指标)", gA = "PSY(Psychological Line)", yA = "DMA(Different of Moving Average)", mA = "TRIX(Triple Exponentially Smoothed Moving Average)", _A = "OBV(On Balance Volume)", xA = "VR(Volatility Volume Ratio)", bA = "WR(Williams %R)", CA = "MTM(Momentum Index)", SA = "EMV(Ease of Movement Value)", wA = "ROC(Price Rate of Change)", kA = "PVT(Price and Volume Trend)", LA = "AO(Awesome Oscillator)", PA = "UTC", IA = "(UTC-10) Honolulu", AA = "(UTC-8) Juneau", $A = "(UTC-7) Los Angeles", TA = "(UTC-5) Chicago", MA = "(UTC-4) Toronto", EA = "(UTC-3) Sao Paulo", DA = "(UTC+1) London", FA = "(UTC+2) Berlin", OA = "(UTC+3) Bahrain", RA = "(UTC+4) Dubai", BA = "(UTC+5) Ashkhabad", NA = "(UTC+6) Almaty", zA = "(UTC+7) Bangkok", VA = "(UTC+8) Shanghai", WA = "(UTC+9) Tokyo", YA = "(UTC+10) Sydney", XA = "(UTC+12) Norfolk", ZA = "Horizontal Line", UA = "Horizontal Ray", KA = "Horizontal Segment", HA = "Vertical Line", GA = "Vertical Ray", QA = "Vertical Segment", jA = "Trend Line", qA = "Extended Line", JA = "Ray", e$ = "Segment", t$ = "Arrow", r$ = "Price Line", n$ = "Price Channel Line", i$ = "Parallel Line", a$ = "Fibonacci Line", o$ = "Fibonacci Segment", s$ = "Fibonacci Circle", l$ = "Fibonacci Spiral", u$ = "Fibonacci Sector", c$ = "Fibonacci Extension", f$ = "Gann Box", h$ = "Rect", d$ = "Parallelogram", v$ = "Circle", p$ = "Triangle", g$ = "Three Waves", y$ = "Five Waves", m$ = "Eight Waves", _$ = "Any Waves", x$ = "ABCD Pattern", b$ = "XABCD Pattern", C$ = "Weak Magnet", S$ = "Strong Magnet", w$ = "Symbol Search", k$ = "Symbol Code", L$ = "Parameter 1", P$ = "Parameter 2", I$ = "Parameter 3", A$ = "Parameter 4", $$ = "Parameter 5", T$ = "Period", M$ = "Standard Deviation", E$ = "Candle Type", D$ = "Candle Tooltip", F$ = "Candle Solid", O$ = "Candle Stroke", R$ = "Candle Up Stroke", B$ = "Candle Down Stroke", N$ = "OHLC", z$ = "Area", V$ = "Show Last Price", W$ = "Show Highest Price", Y$ = "Show Lowest Price", X$ = "Show indicator's last value", Z$ = "Price Axis Type", U$ = "Normal", K$ = "Percentage", H$ = "Log", G$ = "Reverse Coordinate", Q$ = "Show Grids", j$ = "Restore Defaults", q$ = "None", J$ = "Always", eT = "Follow Cross", tT = "Change Period", rT = "Enter Period Key", nT = "Dashed Value", iT = {
  indicator: XI,
  main_indicator: ZI,
  sub_indicator: UI,
  setting: KI,
  timezone: HI,
  screenshot: GI,
  full_screen: QI,
  exit_full_screen: jI,
  save: qI,
  confirm: JI,
  cancel: eA,
  ma: tA,
  ema: rA,
  sma: nA,
  boll: iA,
  bbi: aA,
  sar: oA,
  vol: sA,
  macd: lA,
  kdj: uA,
  rsi: cA,
  bias: fA,
  brar: hA,
  cci: dA,
  dmi: vA,
  cr: pA,
  psy: gA,
  dma: yA,
  trix: mA,
  obv: _A,
  vr: xA,
  wr: bA,
  mtm: CA,
  emv: SA,
  roc: wA,
  pvt: kA,
  ao: LA,
  utc: PA,
  honolulu: IA,
  juneau: AA,
  los_angeles: $A,
  chicago: TA,
  toronto: MA,
  sao_paulo: EA,
  london: DA,
  berlin: FA,
  bahrain: OA,
  dubai: RA,
  ashkhabad: BA,
  almaty: NA,
  bangkok: zA,
  shanghai: VA,
  tokyo: WA,
  sydney: YA,
  norfolk: XA,
  horizontal_straight_line: ZA,
  horizontal_ray_line: UA,
  horizontal_segment: KA,
  vertical_straight_line: HA,
  vertical_ray_line: GA,
  vertical_segment: QA,
  trend_line: jA,
  extended_line: qA,
  ray_line: JA,
  segment: e$,
  arrow: t$,
  price_line: r$,
  price_channel_line: n$,
  parallel_straight_line: i$,
  fibonacci_line: a$,
  fibonacci_segment: o$,
  fibonacci_circle: s$,
  fibonacci_spiral: l$,
  fibonacci_speed_resistance_fan: u$,
  fibonacci_extension: c$,
  gann_box: f$,
  rect: h$,
  parallelogram: d$,
  circle: v$,
  triangle: p$,
  three_waves: g$,
  five_waves: y$,
  eight_waves: m$,
  any_waves: _$,
  abcd: x$,
  xabcd: b$,
  weak_magnet: C$,
  strong_magnet: S$,
  symbol_search: w$,
  symbol_code: k$,
  params_1: L$,
  params_2: P$,
  params_3: I$,
  params_4: A$,
  params_5: $$,
  period: T$,
  standard_deviation: M$,
  candle_type: E$,
  candle_tooltip: D$,
  candle_solid: F$,
  candle_stroke: O$,
  candle_up_stroke: R$,
  candle_down_stroke: B$,
  ohlc: N$,
  area: z$,
  last_price_show: V$,
  high_price_show: W$,
  low_price_show: Y$,
  indicator_last_value_show: X$,
  price_axis_type: Z$,
  normal: U$,
  percentage: K$,
  log: H$,
  reverse_coordinate: G$,
  grid_show: Q$,
  restore_default: j$,
  none: q$,
  always: J$,
  follow_cross: eT,
  period_change: tT,
  period_code: rT,
  dashed_value: nT
}, d5 = {
  "zh-CN": YI,
  "en-US": iT
};
function OF(e, r) {
  d5[e] = r;
}
const I = (e, r) => {
  var t;
  return ((t = d5[r]) == null ? void 0 : t[e]) ?? e;
};
var aT = /* @__PURE__ */ ue('<svg viewBox="0 0 1024 1024"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z">');
const [Ia, rl] = J(""), oT = (e) => {
  const r = "klinecharts-pro-input klinecharts-pro-timeframe-modal-input", [t, i] = J(null), a = (u) => {
    if (u.key === "Enter")
      t() && e.onTimeframeSelected(t()), l();
    else {
      const c = u.key;
      (/^[a-zA-Z0-9]$/i.test(c) || // Check for letters and numbers
      c === "Backspace") && (rl(c === "Backspace" ? Ia().slice(0, -1) : Ia() + u.key), s());
    }
  };
  function s() {
    const u = e.periods.find((c) => Ia() === `${c.multiplier}` && c.text.split(" ")[1].charAt(0) === "m" ? (console.log("1 passed"), !0) : Ia().slice(0, -1) === `${c.multiplier}` && Ia().charAt(Ia().length - 1) === c.text.split(" ")[1].charAt(0) ? (console.log("3 passed"), !0) : !1);
    console.log(u), u ? (i(u), pf(r)) : (pf(r + " input-error"), i(null));
  }
  function l() {
    rl(""), tr(!1), xf(!1);
  }
  return s(), se(Mi, {
    get title() {
      return I("period_change", e.locale);
    },
    width: 460,
    onClose: l,
    get children() {
      return se(oa, {
        get placeholder() {
          return I("period_code", e.locale);
        },
        get suffix() {
          return aT();
        },
        focus: !0,
        value: "",
        onKeyDown: a
      });
    }
  });
}, [Ao, X2] = J(!1), [sT, lT] = J(""), [uT, cT] = J(), Ju = () => ({ handleKeyDown: (t) => {
  var i;
  if ((t.ctrlKey || t.metaKey) && (t.preventDefault(), X2(!0)), Ao()) {
    switch (t.key) {
      case "o":
        Us("order") && fT();
        break;
      case "l":
        hT();
        break;
      case "i":
        Us("indi") && (P1((a) => !a), tr(!0));
        break;
      case "s":
        Us("settings") && (L1((a) => !a), tr(!0));
        break;
      case "z":
        break;
      case "y":
        break;
      case "c":
        break;
      case "v":
        break;
      case "p":
        Us("screenshot") && dT();
        break;
      case "f":
        vT();
        break;
      case "Backspace":
        h5();
        break;
    }
    return;
  }
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(t.key) && Us("period") ? (Ia().length < 1 && rl(t.key), To() || (tr(!0), xf(!0), pf("klinecharts-pro-input klinecharts-pro-timeframe-modal-input input-error"))) : t.key === " " ? pT() : t.key === "ArrowDown" ? Z2(-1) : t.key === "ArrowUp" ? Z2(1) : t.key === "Delete" ? (i = Pe()) == null || i.removeOverlay() : t.key === "Escape" && (xf(!1), rl(""), L1(!1), k1(!1), P1(!1), w1(""), tr(!1));
}, handleKeyUp: (t) => {
  (!t.ctrlKey || !t.metaKey) && (X2(!1), t.preventDefault());
} }), Us = (e) => {
  let r = !1;
  switch (e) {
    case "settings":
      r = !qs() && $o() === "" && !qu() && !To() && !Lo() && !Po();
    case "indi":
      r = !js() && $o() === "" && !qu() && !To() && !Lo() && !Po();
      break;
    case "screenshot":
      r = !js() && !qs() && !qu() && !To() && !Lo() && !Po();
      break;
    case "order":
      r = !js() && !qs() && $o() === "" && !To() && !Lo() && !Po();
      break;
    case "period":
      r = !js() && !qs() && $o() === "" && !qu() && !Lo() && !Po();
      break;
  }
  return r;
}, fT = () => {
  tr(!0), ul(!0), Ai().launchOrderModal("placeorder", Q().onOrderPlaced);
}, hT = async () => {
  try {
    await sf(() => k1(!Qs())), Gs();
  } catch {
  }
}, dT = () => {
  const e = Pe().getConvertPictureUrl(!0, "jpeg", gf() === "dark" ? "#151517" : "#ffffff");
  tr(!0), w1(e);
}, vT = () => {
  if (yf())
    (document.exitFullscreen ?? document.msExitFullscreen ?? document.mozCancelFullScreen ?? document.webkitExitFullscreen).call(document);
  else {
    const e = document.querySelector(`#${_5()}`);
    e && (e.requestFullscreen ?? e.webkitRequestFullscreen ?? e.mozRequestFullScreen ?? e.msRequestFullscreen).call(e);
  }
}, pT = () => {
  _f(!na()), Ro().setIsPaused = na();
}, tr = (e) => {
  bD(e ?? !s9()), (!e && !na() || e) && (Ro().setIsPaused = s9());
}, Z2 = (e) => {
  e > 0 && Pi() < 10 ? (mf(+Pi() + +e), Ro().setInterval = (11 - Pi()) * 100) : e < 0 && Pi() > 1 && (mf(+Pi() + e), Ro().setInterval = (11 - Pi()) * 100);
}, ia = () => ({ x: window.innerWidth, y: window.innerHeight }), [gT, U2] = J(!1), [yT, mT] = J(0), [_T, xT] = J(0), [St, Ko] = J(), [Lt, bT] = J(), [Lo, v5] = J(!1), [Po, p5] = J(!1);
J(!1);
J(!1);
J(!1);
const Kf = () => {
  var e, r, t, i, a, s, l, u, c;
  return ((e = Lt()) == null ? void 0 : e.overlayType) == "buy" ? "Buy" : ((r = Lt()) == null ? void 0 : r.overlayType) == "buylimit" ? "Buy Limit" : ((t = Lt()) == null ? void 0 : t.overlayType) == "buystop" ? "Buy Stop" : ((i = Lt()) == null ? void 0 : i.overlayType) == "sell" ? "Sell" : ((a = Lt()) == null ? void 0 : a.overlayType) == "selllimit" ? "Sell Limit" : ((s = Lt()) == null ? void 0 : s.overlayType) == "sellstop" ? "Sell Stop" : ((l = Lt()) == null ? void 0 : l.overlayType) == "sl" ? "Stop loss" : ((u = Lt()) == null ? void 0 : u.overlayType) == "tp" ? "Take profit" : ((c = St()) == null ? void 0 : c.name) ?? "Object";
}, ta = (e, r) => {
  r == "buy" || r == "sell" ? Q().closeOrder(e.overlay, "manualclose") : r == "tp" || r == "sl" ? Q().removeStopOrTP(e.overlay, r) : ["buystop", "buylimit", "sellstop", "selllimit"].includes(r) ? Q().closeOrder(e.overlay, "cancel") : z1().popOverlay(e.overlay.id);
}, Ft = () => {
  const e = (l, u) => {
    mT(ia().y - l.pageY > 200 ? l.pageY : ia().y - 200), xT(ia().x - l.pageX > 200 ? l.pageX : ia().x - 200), Ko(l.overlay), bT(u), U2(!0);
  };
  return { openPopup: e, closePopup: () => {
    U2(!1);
  }, profitLossPopup: (l, u) => {
    if (Ao()) {
      l.figureIndex == 0 || l.figureIndex == 3 ? ta(l, u) : l.figureIndex == 1 || l.figureIndex == 4 ? ta(l, "tp") : (l.figureIndex == 2 || l.figureIndex == 5) && ta(l, "sl");
      return;
    }
    l.figureIndex == 0 || l.figureIndex == 3 ? e(l, { overlayType: u }) : l.figureIndex == 1 || l.figureIndex == 4 ? e(l, { overlayType: "tp" }) : (l.figureIndex == 2 || l.figureIndex == 5) && e(l, { overlayType: "sl" });
  }, profitPopup: (l, u) => {
    if (Ao()) {
      l.figureIndex == 0 || l.figureIndex == 2 ? ta(l, u) : ta(l, "tp");
      return;
    }
    l.figureIndex == 0 || l.figureIndex == 2 ? e(l, { overlayType: u }) : e(l, { overlayType: "tp" });
  }, lossPopup: (l, u) => {
    if (Ao()) {
      l.figureIndex == 0 || l.figureIndex == 2 ? ta(l, u) : ta(l, "sl");
      return;
    }
    l.figureIndex == 0 || l.figureIndex == 2 ? e(l, { overlayType: u }) : e(l, { overlayType: "sl" });
  }, singlePopup: (l, u) => {
    if (Ao()) {
      ta(l, u);
      return;
    }
    e(l, { overlayType: u });
  } };
};
var CT = /* @__PURE__ */ ue("<button>Send Back"), ST = /* @__PURE__ */ ue("<button>Send Front"), K2 = /* @__PURE__ */ ue("<button>"), wT = /* @__PURE__ */ ue("<div class=klinecharts-pro-popup_background><div class=popup><button></button><button>Settings");
const kT = () => {
  var e, r, t, i, a, s, l;
  ((e = Lt()) == null ? void 0 : e.overlayType) == "buy" || ((r = Lt()) == null ? void 0 : r.overlayType) == "sell" ? Q().closeOrder(St(), "manualclose") : ((t = Lt()) == null ? void 0 : t.overlayType) == "tp" || ((i = Lt()) == null ? void 0 : i.overlayType) == "sl" ? Q().removeStopOrTP(St(), (a = Lt()) == null ? void 0 : a.overlayType) : (s = Lt()) != null && s.overlayType && ["buystop", "buylimit", "sellstop", "selllimit"].includes((l = Lt()) == null ? void 0 : l.overlayType) ? Q().closeOrder(St(), "cancel") : z1().popOverlay(St().id);
}, qc = () => {
  var e, r, t, i;
  return !!((r = (e = Lt()) == null ? void 0 : e.overlayType) != null && r.includes("buy") || (i = (t = Lt()) == null ? void 0 : t.overlayType) != null && i.includes("sell"));
}, H2 = () => {
  var e, r;
  return ((e = Lt()) == null ? void 0 : e.overlayType) == "tp" || ((r = Lt()) == null ? void 0 : r.overlayType) == "sl";
}, LT = (e) => {
  e === "position" ? v5(!0) : e === "overlay" && p5(!0);
}, PT = () => {
  var r, t;
  const e = St();
  (r = Pe()) == null || r.overrideOverlay({
    id: e == null ? void 0 : e.id,
    zLevel: +e.zLevel + 1
  }), Ko(((t = Pe()) == null ? void 0 : t.getOverlayById(St().id)) ?? St());
}, IT = () => {
  var r, t;
  const e = St();
  (r = Pe()) == null || r.overrideOverlay({
    id: e == null ? void 0 : e.id,
    zLevel: +e.zLevel - 1
  }), Ko(((t = Pe()) == null ? void 0 : t.getOverlayById(St().id)) ?? St());
}, AT = () => {
  var e, r, t, i;
  (t = Pe()) == null || t.overrideOverlay({
    id: (e = St()) == null ? void 0 : e.id,
    lock: !((r = St()) != null && r.lock)
  }), Ko(((i = Pe()) == null ? void 0 : i.getOverlayById(St().id)) ?? St());
}, $T = () => {
  var e, r, t, i;
  (t = Pe()) == null || t.overrideOverlay({
    id: (e = St()) == null ? void 0 : e.id,
    visible: !((r = St()) != null && r.visible)
  }), Ko(((i = Pe()) == null ? void 0 : i.getOverlayById(St().id)) ?? St());
}, TT = () => (() => {
  var e = wT(), r = e.firstChild, t = r.firstChild, i = t.nextSibling;
  return e.$$click = () => Ft().closePopup(), t.$$click = kT, le(t, (() => {
    var a = yt(() => !!qc());
    return () => a() ? "Close order" : `Remove ${Kf()}`;
  })()), i.$$click = () => LT(qc() || H2() ? "position" : "overlay"), le(r, se(Ct, {
    get when() {
      return yt(() => !qc())() && !H2();
    },
    get children() {
      return [(() => {
        var a = CT();
        return a.$$click = PT, a;
      })(), (() => {
        var a = ST();
        return a.$$click = IT, a;
      })(), (() => {
        var a = K2();
        return a.$$click = AT, le(a, () => {
          var s;
          return (s = St()) != null && s.lock ? "Unlock" : "Lock";
        }), a;
      })(), (() => {
        var a = K2();
        return a.$$click = $T, le(a, () => {
          var s;
          return (s = St()) != null && s.visible ? "Hide" : "Unhide";
        }), a;
      })()];
    }
  }), null), Pt((a) => {
    var s = `${yT()}px`, l = `${_T()}px`;
    return s !== a.e && ((a.e = s) != null ? r.style.setProperty("top", s) : r.style.removeProperty("top")), l !== a.t && ((a.t = l) != null ? r.style.setProperty("left", l) : r.style.removeProperty("left")), a;
  }, {
    e: void 0,
    t: void 0
  }), e;
})();
Dr(["click"]);
var g5 = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(e, r) {
  (function(t, i) {
    e.exports = i();
  })(ei, function() {
    for (var t = function(p, x, k) {
      return x === void 0 && (x = 0), k === void 0 && (k = 1), p < x ? x : p > k ? k : p;
    }, i = t, a = function(p) {
      p._clipped = !1, p._unclipped = p.slice(0);
      for (var x = 0; x <= 3; x++)
        x < 3 ? ((p[x] < 0 || p[x] > 255) && (p._clipped = !0), p[x] = i(p[x], 0, 255)) : x === 3 && (p[x] = i(p[x], 0, 1));
      return p;
    }, s = {}, l = 0, u = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; l < u.length; l += 1) {
      var c = u[l];
      s["[object " + c + "]"] = c.toLowerCase();
    }
    var h = function(p) {
      return s[Object.prototype.toString.call(p)] || "object";
    }, d = h, v = function(p, x) {
      return x === void 0 && (x = null), p.length >= 3 ? Array.prototype.slice.call(p) : d(p[0]) == "object" && x ? x.split("").filter(function(k) {
        return p[0][k] !== void 0;
      }).map(function(k) {
        return p[0][k];
      }) : p[0];
    }, m = h, y = function(p) {
      if (p.length < 2)
        return null;
      var x = p.length - 1;
      return m(p[x]) == "string" ? p[x].toLowerCase() : null;
    }, C = Math.PI, b = {
      clip_rgb: a,
      limit: t,
      type: h,
      unpack: v,
      last: y,
      PI: C,
      TWOPI: C * 2,
      PITHIRD: C / 3,
      DEG2RAD: C / 180,
      RAD2DEG: 180 / C
    }, _ = {
      format: {},
      autodetect: []
    }, w = b.last, T = b.clip_rgb, P = b.type, M = _, F = function() {
      for (var x = [], k = arguments.length; k--; )
        x[k] = arguments[k];
      var $ = this;
      if (P(x[0]) === "object" && x[0].constructor && x[0].constructor === this.constructor)
        return x[0];
      var R = w(x), z = !1;
      if (!R) {
        z = !0, M.sorted || (M.autodetect = M.autodetect.sort(function(ie, _e) {
          return _e.p - ie.p;
        }), M.sorted = !0);
        for (var D = 0, U = M.autodetect; D < U.length; D += 1) {
          var H = U[D];
          if (R = H.test.apply(H, x), R)
            break;
        }
      }
      if (M.format[R]) {
        var re = M.format[R].apply(null, z ? x : x.slice(0, -1));
        $._rgb = T(re);
      } else
        throw new Error("unknown format: " + x);
      $._rgb.length === 3 && $._rgb.push(1);
    };
    F.prototype.toString = function() {
      return P(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var O = F, V = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(V.Color, [null].concat(p)))();
    };
    V.Color = O, V.version = "2.4.2";
    var W = V, N = b.unpack, Y = Math.max, K = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = N(p, "rgb"), $ = k[0], R = k[1], z = k[2];
      $ = $ / 255, R = R / 255, z = z / 255;
      var D = 1 - Y($, Y(R, z)), U = D < 1 ? 1 / (1 - D) : 0, H = (1 - $ - D) * U, re = (1 - R - D) * U, ie = (1 - z - D) * U;
      return [H, re, ie, D];
    }, G = K, q = b.unpack, he = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = q(p, "cmyk");
      var k = p[0], $ = p[1], R = p[2], z = p[3], D = p.length > 4 ? p[4] : 1;
      return z === 1 ? [0, 0, 0, D] : [
        k >= 1 ? 0 : 255 * (1 - k) * (1 - z),
        // r
        $ >= 1 ? 0 : 255 * (1 - $) * (1 - z),
        // g
        R >= 1 ? 0 : 255 * (1 - R) * (1 - z),
        // b
        D
      ];
    }, ge = he, ve = W, De = O, Oe = _, be = b.unpack, ye = b.type, de = G;
    De.prototype.cmyk = function() {
      return de(this._rgb);
    }, ve.cmyk = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(De, [null].concat(p, ["cmyk"])))();
    }, Oe.format.cmyk = ge, Oe.autodetect.push({
      p: 2,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = be(p, "cmyk"), ye(p) === "array" && p.length === 4)
          return "cmyk";
      }
    });
    var We = b.unpack, Be = b.last, Tt = function(p) {
      return Math.round(p * 100) / 100;
    }, vt = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = We(p, "hsla"), $ = Be(p) || "lsa";
      return k[0] = Tt(k[0] || 0), k[1] = Tt(k[1] * 100) + "%", k[2] = Tt(k[2] * 100) + "%", $ === "hsla" || k.length > 3 && k[3] < 1 ? (k[3] = k.length > 3 ? k[3] : 1, $ = "hsla") : k.length = 3, $ + "(" + k.join(",") + ")";
    }, pt = vt, _t = b.unpack, wt = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = _t(p, "rgba");
      var k = p[0], $ = p[1], R = p[2];
      k /= 255, $ /= 255, R /= 255;
      var z = Math.min(k, $, R), D = Math.max(k, $, R), U = (D + z) / 2, H, re;
      return D === z ? (H = 0, re = Number.NaN) : H = U < 0.5 ? (D - z) / (D + z) : (D - z) / (2 - D - z), k == D ? re = ($ - R) / (D - z) : $ == D ? re = 2 + (R - k) / (D - z) : R == D && (re = 4 + (k - $) / (D - z)), re *= 60, re < 0 && (re += 360), p.length > 3 && p[3] !== void 0 ? [re, H, U, p[3]] : [re, H, U];
    }, Nt = wt, yr = b.unpack, Mt = b.last, Ht = pt, un = Nt, rr = Math.round, Pr = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = yr(p, "rgba"), $ = Mt(p) || "rgb";
      return $.substr(0, 3) == "hsl" ? Ht(un(k), $) : (k[0] = rr(k[0]), k[1] = rr(k[1]), k[2] = rr(k[2]), ($ === "rgba" || k.length > 3 && k[3] < 1) && (k[3] = k.length > 3 ? k[3] : 1, $ = "rgba"), $ + "(" + k.slice(0, $ === "rgb" ? 3 : 4).join(",") + ")");
    }, Fr = Pr, Ot = b.unpack, mr = Math.round, Ei = function() {
      for (var p, x = [], k = arguments.length; k--; )
        x[k] = arguments[k];
      x = Ot(x, "hsl");
      var $ = x[0], R = x[1], z = x[2], D, U, H;
      if (R === 0)
        D = U = H = z * 255;
      else {
        var re = [0, 0, 0], ie = [0, 0, 0], _e = z < 0.5 ? z * (1 + R) : z + R - z * R, ce = 2 * z - _e, Se = $ / 360;
        re[0] = Se + 1 / 3, re[1] = Se, re[2] = Se - 1 / 3;
        for (var we = 0; we < 3; we++)
          re[we] < 0 && (re[we] += 1), re[we] > 1 && (re[we] -= 1), 6 * re[we] < 1 ? ie[we] = ce + (_e - ce) * 6 * re[we] : 2 * re[we] < 1 ? ie[we] = _e : 3 * re[we] < 2 ? ie[we] = ce + (_e - ce) * (2 / 3 - re[we]) * 6 : ie[we] = ce;
        p = [mr(ie[0] * 255), mr(ie[1] * 255), mr(ie[2] * 255)], D = p[0], U = p[1], H = p[2];
      }
      return x.length > 3 ? [D, U, H, x[3]] : [D, U, H, 1];
    }, Ur = Ei, hr = Ur, Sn = _, Kr = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, Di = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, cn = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, ua = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, zn = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, fn = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, ui = Math.round, ar = function(p) {
      p = p.toLowerCase().trim();
      var x;
      if (Sn.format.named)
        try {
          return Sn.format.named(p);
        } catch {
        }
      if (x = p.match(Kr)) {
        for (var k = x.slice(1, 4), $ = 0; $ < 3; $++)
          k[$] = +k[$];
        return k[3] = 1, k;
      }
      if (x = p.match(Di)) {
        for (var R = x.slice(1, 5), z = 0; z < 4; z++)
          R[z] = +R[z];
        return R;
      }
      if (x = p.match(cn)) {
        for (var D = x.slice(1, 4), U = 0; U < 3; U++)
          D[U] = ui(D[U] * 2.55);
        return D[3] = 1, D;
      }
      if (x = p.match(ua)) {
        for (var H = x.slice(1, 5), re = 0; re < 3; re++)
          H[re] = ui(H[re] * 2.55);
        return H[3] = +H[3], H;
      }
      if (x = p.match(zn)) {
        var ie = x.slice(1, 4);
        ie[1] *= 0.01, ie[2] *= 0.01;
        var _e = hr(ie);
        return _e[3] = 1, _e;
      }
      if (x = p.match(fn)) {
        var ce = x.slice(1, 4);
        ce[1] *= 0.01, ce[2] *= 0.01;
        var Se = hr(ce);
        return Se[3] = +x[4], Se;
      }
    };
    ar.test = function(p) {
      return Kr.test(p) || Di.test(p) || cn.test(p) || ua.test(p) || zn.test(p) || fn.test(p);
    };
    var Fi = ar, Hr = W, Oi = O, Ri = _, Or = b.type, ca = Fr, _r = Fi;
    Oi.prototype.css = function(p) {
      return ca(this._rgb, p);
    }, Hr.css = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(Oi, [null].concat(p, ["css"])))();
    }, Ri.format.css = _r, Ri.autodetect.push({
      p: 5,
      test: function(p) {
        for (var x = [], k = arguments.length - 1; k-- > 0; )
          x[k] = arguments[k + 1];
        if (!x.length && Or(p) === "string" && _r.test(p))
          return "css";
      }
    });
    var dr = O, xr = W, Ir = _, Rr = b.unpack;
    Ir.format.gl = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = Rr(p, "rgba");
      return k[0] *= 255, k[1] *= 255, k[2] *= 255, k;
    }, xr.gl = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(dr, [null].concat(p, ["gl"])))();
    }, dr.prototype.gl = function() {
      var p = this._rgb;
      return [p[0] / 255, p[1] / 255, p[2] / 255, p[3]];
    };
    var ci = b.unpack, Ho = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = ci(p, "rgb"), $ = k[0], R = k[1], z = k[2], D = Math.min($, R, z), U = Math.max($, R, z), H = U - D, re = H * 100 / 255, ie = D / (255 - H) * 100, _e;
      return H === 0 ? _e = Number.NaN : ($ === U && (_e = (R - z) / H), R === U && (_e = 2 + (z - $) / H), z === U && (_e = 4 + ($ - R) / H), _e *= 60, _e < 0 && (_e += 360)), [_e, re, ie];
    }, Go = Ho, V1 = b.unpack, W1 = Math.floor, fl = function() {
      for (var p, x, k, $, R, z, D = [], U = arguments.length; U--; )
        D[U] = arguments[U];
      D = V1(D, "hcg");
      var H = D[0], re = D[1], ie = D[2], _e, ce, Se;
      ie = ie * 255;
      var we = re * 255;
      if (re === 0)
        _e = ce = Se = ie;
      else {
        H === 360 && (H = 0), H > 360 && (H -= 360), H < 0 && (H += 360), H /= 60;
        var Ye = W1(H), $e = H - Ye, ze = ie * (1 - re), et = ze + we * (1 - $e), jt = ze + we * $e, Rt = ze + we;
        switch (Ye) {
          case 0:
            p = [Rt, jt, ze], _e = p[0], ce = p[1], Se = p[2];
            break;
          case 1:
            x = [et, Rt, ze], _e = x[0], ce = x[1], Se = x[2];
            break;
          case 2:
            k = [ze, Rt, jt], _e = k[0], ce = k[1], Se = k[2];
            break;
          case 3:
            $ = [ze, et, Rt], _e = $[0], ce = $[1], Se = $[2];
            break;
          case 4:
            R = [jt, ze, Rt], _e = R[0], ce = R[1], Se = R[2];
            break;
          case 5:
            z = [Rt, ze, et], _e = z[0], ce = z[1], Se = z[2];
            break;
        }
      }
      return [_e, ce, Se, D.length > 3 ? D[3] : 1];
    }, Y1 = fl, X1 = b.unpack, Z1 = b.type, Qo = W, hl = O, Fa = _, U1 = Go;
    hl.prototype.hcg = function() {
      return U1(this._rgb);
    }, Qo.hcg = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(hl, [null].concat(p, ["hcg"])))();
    }, Fa.format.hcg = Y1, Fa.autodetect.push({
      p: 1,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = X1(p, "hcg"), Z1(p) === "array" && p.length === 3)
          return "hcg";
      }
    });
    var K1 = b.unpack, H1 = b.last, Oa = Math.round, G1 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = K1(p, "rgba"), $ = k[0], R = k[1], z = k[2], D = k[3], U = H1(p) || "auto";
      D === void 0 && (D = 1), U === "auto" && (U = D < 1 ? "rgba" : "rgb"), $ = Oa($), R = Oa(R), z = Oa(z);
      var H = $ << 16 | R << 8 | z, re = "000000" + H.toString(16);
      re = re.substr(re.length - 6);
      var ie = "0" + Oa(D * 255).toString(16);
      switch (ie = ie.substr(ie.length - 2), U.toLowerCase()) {
        case "rgba":
          return "#" + re + ie;
        case "argb":
          return "#" + ie + re;
        default:
          return "#" + re;
      }
    }, dl = G1, Q1 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, j1 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, vl = function(p) {
      if (p.match(Q1)) {
        (p.length === 4 || p.length === 7) && (p = p.substr(1)), p.length === 3 && (p = p.split(""), p = p[0] + p[0] + p[1] + p[1] + p[2] + p[2]);
        var x = parseInt(p, 16), k = x >> 16, $ = x >> 8 & 255, R = x & 255;
        return [k, $, R, 1];
      }
      if (p.match(j1)) {
        (p.length === 5 || p.length === 9) && (p = p.substr(1)), p.length === 4 && (p = p.split(""), p = p[0] + p[0] + p[1] + p[1] + p[2] + p[2] + p[3] + p[3]);
        var z = parseInt(p, 16), D = z >> 24 & 255, U = z >> 16 & 255, H = z >> 8 & 255, re = Math.round((z & 255) / 255 * 100) / 100;
        return [D, U, H, re];
      }
      throw new Error("unknown hex color: " + p);
    }, pl = vl, q1 = W, gl = O, J1 = b.type, yl = _, e0 = dl;
    gl.prototype.hex = function(p) {
      return e0(this._rgb, p);
    }, q1.hex = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(gl, [null].concat(p, ["hex"])))();
    }, yl.format.hex = pl, yl.autodetect.push({
      p: 4,
      test: function(p) {
        for (var x = [], k = arguments.length - 1; k-- > 0; )
          x[k] = arguments[k + 1];
        if (!x.length && J1(p) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(p.length) >= 0)
          return "hex";
      }
    });
    var Ra = b.unpack, ml = b.TWOPI, Ba = Math.min, t0 = Math.sqrt, r0 = Math.acos, n0 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = Ra(p, "rgb"), $ = k[0], R = k[1], z = k[2];
      $ /= 255, R /= 255, z /= 255;
      var D, U = Ba($, R, z), H = ($ + R + z) / 3, re = H > 0 ? 1 - U / H : 0;
      return re === 0 ? D = NaN : (D = ($ - R + ($ - z)) / 2, D /= t0(($ - R) * ($ - R) + ($ - z) * (R - z)), D = r0(D), z > R && (D = ml - D), D /= ml), [D * 360, re, H];
    }, _l = n0, xl = b.unpack, Na = b.limit, Bi = b.TWOPI, jo = b.PITHIRD, Ni = Math.cos, i0 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = xl(p, "hsi");
      var k = p[0], $ = p[1], R = p[2], z, D, U;
      return isNaN(k) && (k = 0), isNaN($) && ($ = 0), k > 360 && (k -= 360), k < 0 && (k += 360), k /= 360, k < 1 / 3 ? (U = (1 - $) / 3, z = (1 + $ * Ni(Bi * k) / Ni(jo - Bi * k)) / 3, D = 1 - (U + z)) : k < 2 / 3 ? (k -= 1 / 3, z = (1 - $) / 3, D = (1 + $ * Ni(Bi * k) / Ni(jo - Bi * k)) / 3, U = 1 - (z + D)) : (k -= 2 / 3, D = (1 - $) / 3, U = (1 + $ * Ni(Bi * k) / Ni(jo - Bi * k)) / 3, z = 1 - (D + U)), z = Na(R * z * 3), D = Na(R * D * 3), U = Na(R * U * 3), [z * 255, D * 255, U * 255, p.length > 3 ? p[3] : 1];
    }, bl = i0, Cl = b.unpack, Sl = b.type, qo = W, wl = O, Jo = _, za = _l;
    wl.prototype.hsi = function() {
      return za(this._rgb);
    }, qo.hsi = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(wl, [null].concat(p, ["hsi"])))();
    }, Jo.format.hsi = bl, Jo.autodetect.push({
      p: 2,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = Cl(p, "hsi"), Sl(p) === "array" && p.length === 3)
          return "hsi";
      }
    });
    var kl = b.unpack, a0 = b.type, Ll = W, es = O, Va = _, o0 = Nt;
    es.prototype.hsl = function() {
      return o0(this._rgb);
    }, Ll.hsl = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(es, [null].concat(p, ["hsl"])))();
    }, Va.format.hsl = Ur, Va.autodetect.push({
      p: 2,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = kl(p, "hsl"), a0(p) === "array" && p.length === 3)
          return "hsl";
      }
    });
    var Pl = b.unpack, ts = Math.min, rs = Math.max, zi = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = Pl(p, "rgb");
      var k = p[0], $ = p[1], R = p[2], z = ts(k, $, R), D = rs(k, $, R), U = D - z, H, re, ie;
      return ie = D / 255, D === 0 ? (H = Number.NaN, re = 0) : (re = U / D, k === D && (H = ($ - R) / U), $ === D && (H = 2 + (R - k) / U), R === D && (H = 4 + (k - $) / U), H *= 60, H < 0 && (H += 360)), [H, re, ie];
    }, Il = zi, Al = b.unpack, s0 = Math.floor, $l = function() {
      for (var p, x, k, $, R, z, D = [], U = arguments.length; U--; )
        D[U] = arguments[U];
      D = Al(D, "hsv");
      var H = D[0], re = D[1], ie = D[2], _e, ce, Se;
      if (ie *= 255, re === 0)
        _e = ce = Se = ie;
      else {
        H === 360 && (H = 0), H > 360 && (H -= 360), H < 0 && (H += 360), H /= 60;
        var we = s0(H), Ye = H - we, $e = ie * (1 - re), ze = ie * (1 - re * Ye), et = ie * (1 - re * (1 - Ye));
        switch (we) {
          case 0:
            p = [ie, et, $e], _e = p[0], ce = p[1], Se = p[2];
            break;
          case 1:
            x = [ze, ie, $e], _e = x[0], ce = x[1], Se = x[2];
            break;
          case 2:
            k = [$e, ie, et], _e = k[0], ce = k[1], Se = k[2];
            break;
          case 3:
            $ = [$e, ze, ie], _e = $[0], ce = $[1], Se = $[2];
            break;
          case 4:
            R = [et, $e, ie], _e = R[0], ce = R[1], Se = R[2];
            break;
          case 5:
            z = [ie, $e, ze], _e = z[0], ce = z[1], Se = z[2];
            break;
        }
      }
      return [_e, ce, Se, D.length > 3 ? D[3] : 1];
    }, Tl = $l, Ml = b.unpack, El = b.type, l0 = W, Dl = O, Fl = _, Ol = Il;
    Dl.prototype.hsv = function() {
      return Ol(this._rgb);
    }, l0.hsv = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(Dl, [null].concat(p, ["hsv"])))();
    }, Fl.format.hsv = Tl, Fl.autodetect.push({
      p: 2,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = Ml(p, "hsv"), El(p) === "array" && p.length === 3)
          return "hsv";
      }
    });
    var Wa = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, Vi = Wa, u0 = b.unpack, Rl = Math.pow, ns = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = u0(p, "rgb"), $ = k[0], R = k[1], z = k[2], D = c0($, R, z), U = D[0], H = D[1], re = D[2], ie = 116 * H - 16;
      return [ie < 0 ? 0 : ie, 500 * (U - H), 200 * (H - re)];
    }, is = function(p) {
      return (p /= 255) <= 0.04045 ? p / 12.92 : Rl((p + 0.055) / 1.055, 2.4);
    }, as = function(p) {
      return p > Vi.t3 ? Rl(p, 1 / 3) : p / Vi.t2 + Vi.t0;
    }, c0 = function(p, x, k) {
      p = is(p), x = is(x), k = is(k);
      var $ = as((0.4124564 * p + 0.3575761 * x + 0.1804375 * k) / Vi.Xn), R = as((0.2126729 * p + 0.7151522 * x + 0.072175 * k) / Vi.Yn), z = as((0.0193339 * p + 0.119192 * x + 0.9503041 * k) / Vi.Zn);
      return [$, R, z];
    }, Bl = ns, Wi = Wa, kt = b.unpack, xt = Math.pow, f0 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = kt(p, "lab");
      var k = p[0], $ = p[1], R = p[2], z, D, U, H, re, ie;
      return D = (k + 16) / 116, z = isNaN($) ? D : D + $ / 500, U = isNaN(R) ? D : D - R / 200, D = Wi.Yn * ss(D), z = Wi.Xn * ss(z), U = Wi.Zn * ss(U), H = os(3.2404542 * z - 1.5371385 * D - 0.4985314 * U), re = os(-0.969266 * z + 1.8760108 * D + 0.041556 * U), ie = os(0.0556434 * z - 0.2040259 * D + 1.0572252 * U), [H, re, ie, p.length > 3 ? p[3] : 1];
    }, os = function(p) {
      return 255 * (p <= 304e-5 ? 12.92 * p : 1.055 * xt(p, 1 / 2.4) - 0.055);
    }, ss = function(p) {
      return p > Wi.t1 ? p * p * p : Wi.t2 * (p - Wi.t0);
    }, Nl = f0, h0 = b.unpack, d0 = b.type, zl = W, Vl = O, Gt = _, ls = Bl;
    Vl.prototype.lab = function() {
      return ls(this._rgb);
    }, zl.lab = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(Vl, [null].concat(p, ["lab"])))();
    }, Gt.format.lab = Nl, Gt.autodetect.push({
      p: 2,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = h0(p, "lab"), d0(p) === "array" && p.length === 3)
          return "lab";
      }
    });
    var fi = b.unpack, Wl = b.RAD2DEG, us = Math.sqrt, Br = Math.atan2, Yl = Math.round, Xl = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = fi(p, "lab"), $ = k[0], R = k[1], z = k[2], D = us(R * R + z * z), U = (Br(z, R) * Wl + 360) % 360;
      return Yl(D * 1e4) === 0 && (U = Number.NaN), [$, D, U];
    }, cs = Xl, Zl = b.unpack, Ul = Bl, Kl = cs, Ar = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = Zl(p, "rgb"), $ = k[0], R = k[1], z = k[2], D = Ul($, R, z), U = D[0], H = D[1], re = D[2];
      return Kl(U, H, re);
    }, v0 = Ar, Nr = b.unpack, p0 = b.DEG2RAD, Hl = Math.sin, Vn = Math.cos, Ya = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = Nr(p, "lch"), $ = k[0], R = k[1], z = k[2];
      return isNaN(z) && (z = 0), z = z * p0, [$, Vn(z) * R, Hl(z) * R];
    }, Xa = Ya, It = b.unpack, Wn = Xa, fs = Nl, g0 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = It(p, "lch");
      var k = p[0], $ = p[1], R = p[2], z = Wn(k, $, R), D = z[0], U = z[1], H = z[2], re = fs(D, U, H), ie = re[0], _e = re[1], ce = re[2];
      return [ie, _e, ce, p.length > 3 ? p[3] : 1];
    }, Za = g0, y0 = b.unpack, m0 = Za, _0 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = y0(p, "hcl").reverse();
      return m0.apply(void 0, k);
    }, Gl = _0, Ua = b.unpack, Yi = b.type, Ql = W, fa = O, Ka = _, Ha = v0;
    fa.prototype.lch = function() {
      return Ha(this._rgb);
    }, fa.prototype.hcl = function() {
      return Ha(this._rgb).reverse();
    }, Ql.lch = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(fa, [null].concat(p, ["lch"])))();
    }, Ql.hcl = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(fa, [null].concat(p, ["hcl"])))();
    }, Ka.format.lch = Za, Ka.format.hcl = Gl, ["lch", "hcl"].forEach(function(p) {
      return Ka.autodetect.push({
        p: 2,
        test: function() {
          for (var x = [], k = arguments.length; k--; )
            x[k] = arguments[k];
          if (x = Ua(x, p), Yi(x) === "array" && x.length === 3)
            return p;
        }
      });
    });
    var hs = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, ds = hs, x0 = O, Ga = _, vs = b.type, ha = ds, jl = pl, $r = dl;
    x0.prototype.name = function() {
      for (var p = $r(this._rgb, "rgb"), x = 0, k = Object.keys(ha); x < k.length; x += 1) {
        var $ = k[x];
        if (ha[$] === p)
          return $.toLowerCase();
      }
      return p;
    }, Ga.format.named = function(p) {
      if (p = p.toLowerCase(), ha[p])
        return jl(ha[p]);
      throw new Error("unknown color name: " + p);
    }, Ga.autodetect.push({
      p: 5,
      test: function(p) {
        for (var x = [], k = arguments.length - 1; k-- > 0; )
          x[k] = arguments[k + 1];
        if (!x.length && vs(p) === "string" && ha[p.toLowerCase()])
          return "named";
      }
    });
    var ps = b.unpack, da = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = ps(p, "rgb"), $ = k[0], R = k[1], z = k[2];
      return ($ << 16) + (R << 8) + z;
    }, ql = da, Jl = b.type, b0 = function(p) {
      if (Jl(p) == "number" && p >= 0 && p <= 16777215) {
        var x = p >> 16, k = p >> 8 & 255, $ = p & 255;
        return [x, k, $, 1];
      }
      throw new Error("unknown num color: " + p);
    }, C0 = b0, S0 = W, eu = O, tu = _, Xi = b.type, w0 = ql;
    eu.prototype.num = function() {
      return w0(this._rgb);
    }, S0.num = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(eu, [null].concat(p, ["num"])))();
    }, tu.format.num = C0, tu.autodetect.push({
      p: 5,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p.length === 1 && Xi(p[0]) === "number" && p[0] >= 0 && p[0] <= 16777215)
          return "num";
      }
    });
    var k0 = W, va = O, gs = _, wn = b.unpack, pa = b.type, ru = Math.round;
    va.prototype.rgb = function(p) {
      return p === void 0 && (p = !0), p === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(ru);
    }, va.prototype.rgba = function(p) {
      return p === void 0 && (p = !0), this._rgb.slice(0, 4).map(function(x, k) {
        return k < 3 ? p === !1 ? x : ru(x) : x;
      });
    }, k0.rgb = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(va, [null].concat(p, ["rgb"])))();
    }, gs.format.rgb = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = wn(p, "rgba");
      return k[3] === void 0 && (k[3] = 1), k;
    }, gs.autodetect.push({
      p: 3,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = wn(p, "rgba"), pa(p) === "array" && (p.length === 3 || p.length === 4 && pa(p[3]) == "number" && p[3] >= 0 && p[3] <= 1))
          return "rgb";
      }
    });
    var Qa = Math.log, L0 = function(p) {
      var x = p / 100, k, $, R;
      return x < 66 ? (k = 255, $ = x < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * ($ = x - 2) + 104.49216199393888 * Qa($), R = x < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (R = x - 10) + 115.67994401066147 * Qa(R)) : (k = 351.97690566805693 + 0.114206453784165 * (k = x - 55) - 40.25366309332127 * Qa(k), $ = 325.4494125711974 + 0.07943456536662342 * ($ = x - 50) - 28.0852963507957 * Qa($), R = 255), [k, $, R, 1];
    }, hi = L0, Gr = hi, nu = b.unpack, P0 = Math.round, I0 = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      for (var k = nu(p, "rgb"), $ = k[0], R = k[2], z = 1e3, D = 4e4, U = 0.4, H; D - z > U; ) {
        H = (D + z) * 0.5;
        var re = Gr(H);
        re[2] / re[0] >= R / $ ? D = H : z = H;
      }
      return P0(H);
    }, A0 = I0, ys = W, ja = O, Yn = _, X = A0;
    ja.prototype.temp = ja.prototype.kelvin = ja.prototype.temperature = function() {
      return X(this._rgb);
    }, ys.temp = ys.kelvin = ys.temperature = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(ja, [null].concat(p, ["temp"])))();
    }, Yn.format.temp = Yn.format.kelvin = Yn.format.temperature = hi;
    var te = b.unpack, j = Math.cbrt, Ce = Math.pow, Re = Math.sign, ot = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = te(p, "rgb"), $ = k[0], R = k[1], z = k[2], D = [ct($ / 255), ct(R / 255), ct(z / 255)], U = D[0], H = D[1], re = D[2], ie = j(0.4122214708 * U + 0.5363325363 * H + 0.0514459929 * re), _e = j(0.2119034982 * U + 0.6806995451 * H + 0.1073969566 * re), ce = j(0.0883024619 * U + 0.2817188376 * H + 0.6299787005 * re);
      return [
        0.2104542553 * ie + 0.793617785 * _e - 0.0040720468 * ce,
        1.9779984951 * ie - 2.428592205 * _e + 0.4505937099 * ce,
        0.0259040371 * ie + 0.7827717662 * _e - 0.808675766 * ce
      ];
    }, zt = ot;
    function ct(p) {
      var x = Math.abs(p);
      return x < 0.04045 ? p / 12.92 : (Re(p) || 1) * Ce((x + 0.055) / 1.055, 2.4);
    }
    var ms = b.unpack, qa = Math.pow, zr = Math.sign, Ja = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = ms(p, "lab");
      var k = p[0], $ = p[1], R = p[2], z = qa(k + 0.3963377774 * $ + 0.2158037573 * R, 3), D = qa(k - 0.1055613458 * $ - 0.0638541728 * R, 3), U = qa(k - 0.0894841775 * $ - 1.291485548 * R, 3);
      return [
        255 * Xn(4.0767416621 * z - 3.3077115913 * D + 0.2309699292 * U),
        255 * Xn(-1.2684380046 * z + 2.6097574011 * D - 0.3413193965 * U),
        255 * Xn(-0.0041960863 * z - 0.7034186147 * D + 1.707614701 * U),
        p.length > 3 ? p[3] : 1
      ];
    }, iu = Ja;
    function Xn(p) {
      var x = Math.abs(p);
      return x > 31308e-7 ? (zr(p) || 1) * (1.055 * qa(x, 1 / 2.4) - 0.055) : p * 12.92;
    }
    var eo = b.unpack, to = b.type, ft = W, au = O, _s = _, ro = zt;
    au.prototype.oklab = function() {
      return ro(this._rgb);
    }, ft.oklab = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(au, [null].concat(p, ["oklab"])))();
    }, _s.format.oklab = iu, _s.autodetect.push({
      p: 3,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = eo(p, "oklab"), to(p) === "array" && p.length === 3)
          return "oklab";
      }
    });
    var $0 = b.unpack, T0 = zt, M0 = cs, no = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      var k = $0(p, "rgb"), $ = k[0], R = k[1], z = k[2], D = T0($, R, z), U = D[0], H = D[1], re = D[2];
      return M0(U, H, re);
    }, Zn = no, io = b.unpack, ou = Xa, ao = iu, su = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      p = io(p, "lch");
      var k = p[0], $ = p[1], R = p[2], z = ou(k, $, R), D = z[0], U = z[1], H = z[2], re = ao(D, U, H), ie = re[0], _e = re[1], ce = re[2];
      return [ie, _e, ce, p.length > 3 ? p[3] : 1];
    }, lu = su, oo = b.unpack, uu = b.type, ga = W, Un = O, ya = _, E0 = Zn;
    Un.prototype.oklch = function() {
      return E0(this._rgb);
    }, ga.oklch = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      return new (Function.prototype.bind.apply(Un, [null].concat(p, ["oklch"])))();
    }, ya.format.oklch = lu, ya.autodetect.push({
      p: 3,
      test: function() {
        for (var p = [], x = arguments.length; x--; )
          p[x] = arguments[x];
        if (p = oo(p, "oklch"), uu(p) === "array" && p.length === 3)
          return "oklch";
      }
    });
    var cu = O, D0 = b.type;
    cu.prototype.alpha = function(p, x) {
      return x === void 0 && (x = !1), p !== void 0 && D0(p) === "number" ? x ? (this._rgb[3] = p, this) : new cu([this._rgb[0], this._rgb[1], this._rgb[2], p], "rgb") : this._rgb[3];
    };
    var so = O;
    so.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var hn = O, xs = Wa;
    hn.prototype.darken = function(p) {
      p === void 0 && (p = 1);
      var x = this, k = x.lab();
      return k[0] -= xs.Kn * p, new hn(k, "lab").alpha(x.alpha(), !0);
    }, hn.prototype.brighten = function(p) {
      return p === void 0 && (p = 1), this.darken(-p);
    }, hn.prototype.darker = hn.prototype.darken, hn.prototype.brighter = hn.prototype.brighten;
    var F0 = O;
    F0.prototype.get = function(p) {
      var x = p.split("."), k = x[0], $ = x[1], R = this[k]();
      if ($) {
        var z = k.indexOf($) - (k.substr(0, 2) === "ok" ? 2 : 0);
        if (z > -1)
          return R[z];
        throw new Error("unknown channel " + $ + " in mode " + k);
      } else
        return R;
    };
    var di = O, O0 = b.type, R0 = Math.pow, Xt = 1e-7, or = 20;
    di.prototype.luminance = function(p) {
      if (p !== void 0 && O0(p) === "number") {
        if (p === 0)
          return new di([0, 0, 0, this._rgb[3]], "rgb");
        if (p === 1)
          return new di([255, 255, 255, this._rgb[3]], "rgb");
        var x = this.luminance(), k = "rgb", $ = or, R = function(D, U) {
          var H = D.interpolate(U, 0.5, k), re = H.luminance();
          return Math.abs(p - re) < Xt || !$-- ? H : re > p ? R(D, H) : R(H, U);
        }, z = (x > p ? R(new di([0, 0, 0]), this) : R(this, new di([255, 255, 255]))).rgb();
        return new di(z.concat([this._rgb[3]]));
      }
      return B0.apply(void 0, this._rgb.slice(0, 3));
    };
    var B0 = function(p, x, k) {
      return p = bs(p), x = bs(x), k = bs(k), 0.2126 * p + 0.7152 * x + 0.0722 * k;
    }, bs = function(p) {
      return p /= 255, p <= 0.03928 ? p / 12.92 : R0((p + 0.055) / 1.055, 2.4);
    }, br = {}, fu = O, lo = b.type, Kn = br, uo = function(p, x, k) {
      k === void 0 && (k = 0.5);
      for (var $ = [], R = arguments.length - 3; R-- > 0; )
        $[R] = arguments[R + 3];
      var z = $[0] || "lrgb";
      if (!Kn[z] && !$.length && (z = Object.keys(Kn)[0]), !Kn[z])
        throw new Error("interpolation mode " + z + " is not defined");
      return lo(p) !== "object" && (p = new fu(p)), lo(x) !== "object" && (x = new fu(x)), Kn[z](p, x, k).alpha(p.alpha() + k * (x.alpha() - p.alpha()));
    }, vi = O, ma = uo;
    vi.prototype.mix = vi.prototype.interpolate = function(p, x) {
      x === void 0 && (x = 0.5);
      for (var k = [], $ = arguments.length - 2; $-- > 0; )
        k[$] = arguments[$ + 2];
      return ma.apply(void 0, [this, p, x].concat(k));
    };
    var Zi = O;
    Zi.prototype.premultiply = function(p) {
      p === void 0 && (p = !1);
      var x = this._rgb, k = x[3];
      return p ? (this._rgb = [x[0] * k, x[1] * k, x[2] * k, k], this) : new Zi([x[0] * k, x[1] * k, x[2] * k, k], "rgb");
    };
    var Ui = O, Ki = Wa;
    Ui.prototype.saturate = function(p) {
      p === void 0 && (p = 1);
      var x = this, k = x.lch();
      return k[1] += Ki.Kn * p, k[1] < 0 && (k[1] = 0), new Ui(k, "lch").alpha(x.alpha(), !0);
    }, Ui.prototype.desaturate = function(p) {
      return p === void 0 && (p = 1), this.saturate(-p);
    };
    var hu = O, du = b.type;
    hu.prototype.set = function(p, x, k) {
      k === void 0 && (k = !1);
      var $ = p.split("."), R = $[0], z = $[1], D = this[R]();
      if (z) {
        var U = R.indexOf(z) - (R.substr(0, 2) === "ok" ? 2 : 0);
        if (U > -1) {
          if (du(x) == "string")
            switch (x.charAt(0)) {
              case "+":
                D[U] += +x;
                break;
              case "-":
                D[U] += +x;
                break;
              case "*":
                D[U] *= +x.substr(1);
                break;
              case "/":
                D[U] /= +x.substr(1);
                break;
              default:
                D[U] = +x;
            }
          else if (du(x) === "number")
            D[U] = x;
          else
            throw new Error("unsupported value for Color.set");
          var H = new hu(D, R);
          return k ? (this._rgb = H._rgb, this) : H;
        }
        throw new Error("unknown channel " + z + " in mode " + R);
      } else
        return D;
    };
    var N0 = O, z0 = function(p, x, k) {
      var $ = p._rgb, R = x._rgb;
      return new N0(
        $[0] + k * (R[0] - $[0]),
        $[1] + k * (R[1] - $[1]),
        $[2] + k * (R[2] - $[2]),
        "rgb"
      );
    };
    br.rgb = z0;
    var V0 = O, Hi = Math.sqrt, dn = Math.pow, vu = function(p, x, k) {
      var $ = p._rgb, R = $[0], z = $[1], D = $[2], U = x._rgb, H = U[0], re = U[1], ie = U[2];
      return new V0(
        Hi(dn(R, 2) * (1 - k) + dn(H, 2) * k),
        Hi(dn(z, 2) * (1 - k) + dn(re, 2) * k),
        Hi(dn(D, 2) * (1 - k) + dn(ie, 2) * k),
        "rgb"
      );
    };
    br.lrgb = vu;
    var L = O, Gi = function(p, x, k) {
      var $ = p.lab(), R = x.lab();
      return new L(
        $[0] + k * (R[0] - $[0]),
        $[1] + k * (R[1] - $[1]),
        $[2] + k * (R[2] - $[2]),
        "lab"
      );
    };
    br.lab = Gi;
    var _a = O, nr = function(p, x, k, $) {
      var R, z, D, U;
      $ === "hsl" ? (D = p.hsl(), U = x.hsl()) : $ === "hsv" ? (D = p.hsv(), U = x.hsv()) : $ === "hcg" ? (D = p.hcg(), U = x.hcg()) : $ === "hsi" ? (D = p.hsi(), U = x.hsi()) : $ === "lch" || $ === "hcl" ? ($ = "hcl", D = p.hcl(), U = x.hcl()) : $ === "oklch" && (D = p.oklch().reverse(), U = x.oklch().reverse());
      var H, re, ie, _e, ce, Se;
      ($.substr(0, 1) === "h" || $ === "oklch") && (R = D, H = R[0], ie = R[1], ce = R[2], z = U, re = z[0], _e = z[1], Se = z[2]);
      var we, Ye, $e, ze;
      return !isNaN(H) && !isNaN(re) ? (re > H && re - H > 180 ? ze = re - (H + 360) : re < H && H - re > 180 ? ze = re + 360 - H : ze = re - H, Ye = H + k * ze) : isNaN(H) ? isNaN(re) ? Ye = Number.NaN : (Ye = re, (ce == 1 || ce == 0) && $ != "hsv" && (we = _e)) : (Ye = H, (Se == 1 || Se == 0) && $ != "hsv" && (we = ie)), we === void 0 && (we = ie + k * (_e - ie)), $e = ce + k * (Se - ce), $ === "oklch" ? new _a([$e, we, Ye], $) : new _a([Ye, we, $e], $);
    }, Qe = nr, pu = function(p, x, k) {
      return Qe(p, x, k, "lch");
    };
    br.lch = pu, br.hcl = pu;
    var W0 = O, Y0 = function(p, x, k) {
      var $ = p.num(), R = x.num();
      return new W0($ + k * (R - $), "num");
    };
    br.num = Y0;
    var pi = nr, X0 = function(p, x, k) {
      return pi(p, x, k, "hcg");
    };
    br.hcg = X0;
    var Z0 = nr, U0 = function(p, x, k) {
      return Z0(p, x, k, "hsi");
    };
    br.hsi = U0;
    var K0 = nr, H0 = function(p, x, k) {
      return K0(p, x, k, "hsl");
    };
    br.hsl = H0;
    var kn = nr, G0 = function(p, x, k) {
      return kn(p, x, k, "hsv");
    };
    br.hsv = G0;
    var Q0 = O, j0 = function(p, x, k) {
      var $ = p.oklab(), R = x.oklab();
      return new Q0(
        $[0] + k * (R[0] - $[0]),
        $[1] + k * (R[1] - $[1]),
        $[2] + k * (R[2] - $[2]),
        "oklab"
      );
    };
    br.oklab = j0;
    var q0 = nr, J0 = function(p, x, k) {
      return q0(p, x, k, "oklch");
    };
    br.oklch = J0;
    var Qr = O, ec = b.clip_rgb, Cs = Math.pow, Ss = Math.sqrt, ws = Math.PI, gu = Math.cos, Hn = Math.sin, tc = Math.atan2, rc = function(p, x, k) {
      x === void 0 && (x = "lrgb"), k === void 0 && (k = null);
      var $ = p.length;
      k || (k = Array.from(new Array($)).map(function() {
        return 1;
      }));
      var R = $ / k.reduce(function(Ye, $e) {
        return Ye + $e;
      });
      if (k.forEach(function(Ye, $e) {
        k[$e] *= R;
      }), p = p.map(function(Ye) {
        return new Qr(Ye);
      }), x === "lrgb")
        return jr(p, k);
      for (var z = p.shift(), D = z.get(x), U = [], H = 0, re = 0, ie = 0; ie < D.length; ie++)
        if (D[ie] = (D[ie] || 0) * k[0], U.push(isNaN(D[ie]) ? 0 : k[0]), x.charAt(ie) === "h" && !isNaN(D[ie])) {
          var _e = D[ie] / 180 * ws;
          H += gu(_e) * k[0], re += Hn(_e) * k[0];
        }
      var ce = z.alpha() * k[0];
      p.forEach(function(Ye, $e) {
        var ze = Ye.get(x);
        ce += Ye.alpha() * k[$e + 1];
        for (var et = 0; et < D.length; et++)
          if (!isNaN(ze[et]))
            if (U[et] += k[$e + 1], x.charAt(et) === "h") {
              var jt = ze[et] / 180 * ws;
              H += gu(jt) * k[$e + 1], re += Hn(jt) * k[$e + 1];
            } else
              D[et] += ze[et] * k[$e + 1];
      });
      for (var Se = 0; Se < D.length; Se++)
        if (x.charAt(Se) === "h") {
          for (var we = tc(re / U[Se], H / U[Se]) / ws * 180; we < 0; )
            we += 360;
          for (; we >= 360; )
            we -= 360;
          D[Se] = we;
        } else
          D[Se] = D[Se] / U[Se];
      return ce /= $, new Qr(D, x).alpha(ce > 0.99999 ? 1 : ce, !0);
    }, jr = function(p, x) {
      for (var k = p.length, $ = [0, 0, 0, 0], R = 0; R < p.length; R++) {
        var z = p[R], D = x[R] / k, U = z._rgb;
        $[0] += Cs(U[0], 2) * D, $[1] += Cs(U[1], 2) * D, $[2] += Cs(U[2], 2) * D, $[3] += U[3] * D;
      }
      return $[0] = Ss($[0]), $[1] = Ss($[1]), $[2] = Ss($[2]), $[3] > 0.9999999 && ($[3] = 1), new Qr(ec($));
    }, qr = W, Qi = b.type, nc = Math.pow, ks = function(p) {
      var x = "rgb", k = qr("#ccc"), $ = 0, R = [0, 1], z = [], D = [0, 0], U = !1, H = [], re = !1, ie = 0, _e = 1, ce = !1, Se = {}, we = !0, Ye = 1, $e = function(fe) {
        if (fe = fe || ["#fff", "#000"], fe && Qi(fe) === "string" && qr.brewer && qr.brewer[fe.toLowerCase()] && (fe = qr.brewer[fe.toLowerCase()]), Qi(fe) === "array") {
          fe.length === 1 && (fe = [fe[0], fe[0]]), fe = fe.slice(0);
          for (var Ie = 0; Ie < fe.length; Ie++)
            fe[Ie] = qr(fe[Ie]);
          z.length = 0;
          for (var Xe = 0; Xe < fe.length; Xe++)
            z.push(Xe / (fe.length - 1));
        }
        return vr(), H = fe;
      }, ze = function(fe) {
        if (U != null) {
          for (var Ie = U.length - 1, Xe = 0; Xe < Ie && fe >= U[Xe]; )
            Xe++;
          return Xe - 1;
        }
        return 0;
      }, et = function(fe) {
        return fe;
      }, jt = function(fe) {
        return fe;
      }, Rt = function(fe, Ie) {
        var Xe, Fe;
        if (Ie == null && (Ie = !1), isNaN(fe) || fe === null)
          return k;
        if (Ie)
          Fe = fe;
        else if (U && U.length > 2) {
          var ir = ze(fe);
          Fe = ir / (U.length - 2);
        } else
          _e !== ie ? Fe = (fe - ie) / (_e - ie) : Fe = 1;
        Fe = jt(Fe), Ie || (Fe = et(Fe)), Ye !== 1 && (Fe = nc(Fe, Ye)), Fe = D[0] + Fe * (1 - D[0] - D[1]), Fe = Math.min(1, Math.max(0, Fe));
        var tt = Math.floor(Fe * 1e4);
        if (we && Se[tt])
          Xe = Se[tt];
        else {
          if (Qi(H) === "array")
            for (var qe = 0; qe < z.length; qe++) {
              var st = z[qe];
              if (Fe <= st) {
                Xe = H[qe];
                break;
              }
              if (Fe >= st && qe === z.length - 1) {
                Xe = H[qe];
                break;
              }
              if (Fe > st && Fe < z[qe + 1]) {
                Fe = (Fe - st) / (z[qe + 1] - st), Xe = qr.interpolate(H[qe], H[qe + 1], Fe, x);
                break;
              }
            }
          else
            Qi(H) === "function" && (Xe = H(Fe));
          we && (Se[tt] = Xe);
        }
        return Xe;
      }, vr = function() {
        return Se = {};
      };
      $e(p);
      var Ke = function(fe) {
        var Ie = qr(Rt(fe));
        return re && Ie[re] ? Ie[re]() : Ie;
      };
      return Ke.classes = function(fe) {
        if (fe != null) {
          if (Qi(fe) === "array")
            U = fe, R = [fe[0], fe[fe.length - 1]];
          else {
            var Ie = qr.analyze(R);
            fe === 0 ? U = [Ie.min, Ie.max] : U = qr.limits(Ie, "e", fe);
          }
          return Ke;
        }
        return U;
      }, Ke.domain = function(fe) {
        if (!arguments.length)
          return R;
        ie = fe[0], _e = fe[fe.length - 1], z = [];
        var Ie = H.length;
        if (fe.length === Ie && ie !== _e)
          for (var Xe = 0, Fe = Array.from(fe); Xe < Fe.length; Xe += 1) {
            var ir = Fe[Xe];
            z.push((ir - ie) / (_e - ie));
          }
        else {
          for (var tt = 0; tt < Ie; tt++)
            z.push(tt / (Ie - 1));
          if (fe.length > 2) {
            var qe = fe.map(function(it, ht) {
              return ht / (fe.length - 1);
            }), st = fe.map(function(it) {
              return (it - ie) / (_e - ie);
            });
            st.every(function(it, ht) {
              return qe[ht] === it;
            }) || (jt = function(it) {
              if (it <= 0 || it >= 1)
                return it;
              for (var ht = 0; it >= st[ht + 1]; )
                ht++;
              var Jr = (it - st[ht]) / (st[ht + 1] - st[ht]), Qn = qe[ht] + Jr * (qe[ht + 1] - qe[ht]);
              return Qn;
            });
          }
        }
        return R = [ie, _e], Ke;
      }, Ke.mode = function(fe) {
        return arguments.length ? (x = fe, vr(), Ke) : x;
      }, Ke.range = function(fe, Ie) {
        return $e(fe), Ke;
      }, Ke.out = function(fe) {
        return re = fe, Ke;
      }, Ke.spread = function(fe) {
        return arguments.length ? ($ = fe, Ke) : $;
      }, Ke.correctLightness = function(fe) {
        return fe == null && (fe = !0), ce = fe, vr(), ce ? et = function(Ie) {
          for (var Xe = Rt(0, !0).lab()[0], Fe = Rt(1, !0).lab()[0], ir = Xe > Fe, tt = Rt(Ie, !0).lab()[0], qe = Xe + (Fe - Xe) * Ie, st = tt - qe, it = 0, ht = 1, Jr = 20; Math.abs(st) > 0.01 && Jr-- > 0; )
            (function() {
              return ir && (st *= -1), st < 0 ? (it = Ie, Ie += (ht - Ie) * 0.5) : (ht = Ie, Ie += (it - Ie) * 0.5), tt = Rt(Ie, !0).lab()[0], st = tt - qe;
            })();
          return Ie;
        } : et = function(Ie) {
          return Ie;
        }, Ke;
      }, Ke.padding = function(fe) {
        return fe != null ? (Qi(fe) === "number" && (fe = [fe, fe]), D = fe, Ke) : D;
      }, Ke.colors = function(fe, Ie) {
        arguments.length < 2 && (Ie = "hex");
        var Xe = [];
        if (arguments.length === 0)
          Xe = H.slice(0);
        else if (fe === 1)
          Xe = [Ke(0.5)];
        else if (fe > 1) {
          var Fe = R[0], ir = R[1] - Fe;
          Xe = ic(0, fe, !1).map(function(ht) {
            return Ke(Fe + ht / (fe - 1) * ir);
          });
        } else {
          p = [];
          var tt = [];
          if (U && U.length > 2)
            for (var qe = 1, st = U.length, it = 1 <= st; it ? qe < st : qe > st; it ? qe++ : qe--)
              tt.push((U[qe - 1] + U[qe]) * 0.5);
          else
            tt = R;
          Xe = tt.map(function(ht) {
            return Ke(ht);
          });
        }
        return qr[Ie] && (Xe = Xe.map(function(ht) {
          return ht[Ie]();
        })), Xe;
      }, Ke.cache = function(fe) {
        return fe != null ? (we = fe, Ke) : we;
      }, Ke.gamma = function(fe) {
        return fe != null ? (Ye = fe, Ke) : Ye;
      }, Ke.nodata = function(fe) {
        return fe != null ? (k = qr(fe), Ke) : k;
      }, Ke;
    };
    function ic(p, x, k) {
      for (var $ = [], R = p < x, z = k ? R ? x + 1 : x - 1 : x, D = p; R ? D < z : D > z; R ? D++ : D--)
        $.push(D);
      return $;
    }
    var ji = O, yu = ks, ac = function(p) {
      for (var x = [1, 1], k = 1; k < p; k++) {
        for (var $ = [1], R = 1; R <= x.length; R++)
          $[R] = (x[R] || 0) + x[R - 1];
        x = $;
      }
      return x;
    }, oc = function(p) {
      var x, k, $, R, z, D, U;
      if (p = p.map(function(ce) {
        return new ji(ce);
      }), p.length === 2)
        x = p.map(function(ce) {
          return ce.lab();
        }), z = x[0], D = x[1], R = function(ce) {
          var Se = [0, 1, 2].map(function(we) {
            return z[we] + ce * (D[we] - z[we]);
          });
          return new ji(Se, "lab");
        };
      else if (p.length === 3)
        k = p.map(function(ce) {
          return ce.lab();
        }), z = k[0], D = k[1], U = k[2], R = function(ce) {
          var Se = [0, 1, 2].map(function(we) {
            return (1 - ce) * (1 - ce) * z[we] + 2 * (1 - ce) * ce * D[we] + ce * ce * U[we];
          });
          return new ji(Se, "lab");
        };
      else if (p.length === 4) {
        var H;
        $ = p.map(function(ce) {
          return ce.lab();
        }), z = $[0], D = $[1], U = $[2], H = $[3], R = function(ce) {
          var Se = [0, 1, 2].map(function(we) {
            return (1 - ce) * (1 - ce) * (1 - ce) * z[we] + 3 * (1 - ce) * (1 - ce) * ce * D[we] + 3 * (1 - ce) * ce * ce * U[we] + ce * ce * ce * H[we];
          });
          return new ji(Se, "lab");
        };
      } else if (p.length >= 5) {
        var re, ie, _e;
        re = p.map(function(ce) {
          return ce.lab();
        }), _e = p.length - 1, ie = ac(_e), R = function(ce) {
          var Se = 1 - ce, we = [0, 1, 2].map(function(Ye) {
            return re.reduce(function($e, ze, et) {
              return $e + ie[et] * Math.pow(Se, _e - et) * Math.pow(ce, et) * ze[Ye];
            }, 0);
          });
          return new ji(we, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return R;
    }, Ls = function(p) {
      var x = oc(p);
      return x.scale = function() {
        return yu(x);
      }, x;
    }, gi = W, Cr = function(p, x, k) {
      if (!Cr[k])
        throw new Error("unknown blend mode " + k);
      return Cr[k](p, x);
    }, Gn = function(p) {
      return function(x, k) {
        var $ = gi(k).rgb(), R = gi(x).rgb();
        return gi.rgb(p($, R));
      };
    }, Ln = function(p) {
      return function(x, k) {
        var $ = [];
        return $[0] = p(x[0], k[0]), $[1] = p(x[1], k[1]), $[2] = p(x[2], k[2]), $;
      };
    }, sc = function(p) {
      return p;
    }, Pn = function(p, x) {
      return p * x / 255;
    }, Ps = function(p, x) {
      return p > x ? x : p;
    }, yi = function(p, x) {
      return p > x ? p : x;
    }, Vr = function(p, x) {
      return 255 * (1 - (1 - p / 255) * (1 - x / 255));
    }, lc = function(p, x) {
      return x < 128 ? 2 * p * x / 255 : 255 * (1 - 2 * (1 - p / 255) * (1 - x / 255));
    }, mu = function(p, x) {
      return 255 * (1 - (1 - x / 255) / (p / 255));
    }, _u = function(p, x) {
      return p === 255 ? 255 : (p = 255 * (x / 255) / (1 - p / 255), p > 255 ? 255 : p);
    };
    Cr.normal = Gn(Ln(sc)), Cr.multiply = Gn(Ln(Pn)), Cr.screen = Gn(Ln(Vr)), Cr.overlay = Gn(Ln(lc)), Cr.darken = Gn(Ln(Ps)), Cr.lighten = Gn(Ln(yi)), Cr.dodge = Gn(Ln(_u)), Cr.burn = Gn(Ln(mu));
    for (var xa = Cr, vn = b.type, xu = b.clip_rgb, uc = b.TWOPI, co = Math.pow, cc = Math.sin, bu = Math.cos, Qt = W, Is = function(p, x, k, $, R) {
      p === void 0 && (p = 300), x === void 0 && (x = -1.5), k === void 0 && (k = 1), $ === void 0 && ($ = 1), R === void 0 && (R = [0, 1]);
      var z = 0, D;
      vn(R) === "array" ? D = R[1] - R[0] : (D = 0, R = [R, R]);
      var U = function(H) {
        var re = uc * ((p + 120) / 360 + x * H), ie = co(R[0] + D * H, $), _e = z !== 0 ? k[0] + H * z : k, ce = _e * ie * (1 - ie) / 2, Se = bu(re), we = cc(re), Ye = ie + ce * (-0.14861 * Se + 1.78277 * we), $e = ie + ce * (-0.29227 * Se - 0.90649 * we), ze = ie + ce * (1.97294 * Se);
        return Qt(xu([Ye * 255, $e * 255, ze * 255, 1]));
      };
      return U.start = function(H) {
        return H == null ? p : (p = H, U);
      }, U.rotations = function(H) {
        return H == null ? x : (x = H, U);
      }, U.gamma = function(H) {
        return H == null ? $ : ($ = H, U);
      }, U.hue = function(H) {
        return H == null ? k : (k = H, vn(k) === "array" ? (z = k[1] - k[0], z === 0 && (k = k[1])) : z = 0, U);
      }, U.lightness = function(H) {
        return H == null ? R : (vn(H) === "array" ? (R = H, D = H[1] - H[0]) : (R = [H, H], D = 0), U);
      }, U.scale = function() {
        return Qt.scale(U);
      }, U.hue(k), U;
    }, Cu = O, pn = "0123456789abcdef", As = Math.floor, fo = Math.random, mi = function() {
      for (var p = "#", x = 0; x < 6; x++)
        p += pn.charAt(As(fo() * 16));
      return new Cu(p, "hex");
    }, ho = h, sr = Math.log, $s = Math.pow, fc = Math.floor, hc = Math.abs, Su = function(p, x) {
      x === void 0 && (x = null);
      var k = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return ho(p) === "object" && (p = Object.values(p)), p.forEach(function($) {
        x && ho($) === "object" && ($ = $[x]), $ != null && !isNaN($) && (k.values.push($), k.sum += $, $ < k.min && (k.min = $), $ > k.max && (k.max = $), k.count += 1);
      }), k.domain = [k.min, k.max], k.limits = function($, R) {
        return vo(k, $, R);
      }, k;
    }, vo = function(p, x, k) {
      x === void 0 && (x = "equal"), k === void 0 && (k = 7), ho(p) == "array" && (p = Su(p));
      var $ = p.min, R = p.max, z = p.values.sort(function(Rs, Bs) {
        return Rs - Bs;
      });
      if (k === 1)
        return [$, R];
      var D = [];
      if (x.substr(0, 1) === "c" && (D.push($), D.push(R)), x.substr(0, 1) === "e") {
        D.push($);
        for (var U = 1; U < k; U++)
          D.push($ + U / k * (R - $));
        D.push(R);
      } else if (x.substr(0, 1) === "l") {
        if ($ <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var H = Math.LOG10E * sr($), re = Math.LOG10E * sr(R);
        D.push($);
        for (var ie = 1; ie < k; ie++)
          D.push($s(10, H + ie / k * (re - H)));
        D.push(R);
      } else if (x.substr(0, 1) === "q") {
        D.push($);
        for (var _e = 1; _e < k; _e++) {
          var ce = (z.length - 1) * _e / k, Se = fc(ce);
          if (Se === ce)
            D.push(z[Se]);
          else {
            var we = ce - Se;
            D.push(z[Se] * (1 - we) + z[Se + 1] * we);
          }
        }
        D.push(R);
      } else if (x.substr(0, 1) === "k") {
        var Ye, $e = z.length, ze = new Array($e), et = new Array(k), jt = !0, Rt = 0, vr = null;
        vr = [], vr.push($);
        for (var Ke = 1; Ke < k; Ke++)
          vr.push($ + Ke / k * (R - $));
        for (vr.push(R); jt; ) {
          for (var fe = 0; fe < k; fe++)
            et[fe] = 0;
          for (var Ie = 0; Ie < $e; Ie++)
            for (var Xe = z[Ie], Fe = Number.MAX_VALUE, ir = void 0, tt = 0; tt < k; tt++) {
              var qe = hc(vr[tt] - Xe);
              qe < Fe && (Fe = qe, ir = tt), et[ir]++, ze[Ie] = ir;
            }
          for (var st = new Array(k), it = 0; it < k; it++)
            st[it] = null;
          for (var ht = 0; ht < $e; ht++)
            Ye = ze[ht], st[Ye] === null ? st[Ye] = z[ht] : st[Ye] += z[ht];
          for (var Jr = 0; Jr < k; Jr++)
            st[Jr] *= 1 / et[Jr];
          jt = !1;
          for (var Qn = 0; Qn < k; Qn++)
            if (st[Qn] !== vr[Qn]) {
              jt = !0;
              break;
            }
          vr = st, Rt++, Rt > 200 && (jt = !1);
        }
        for (var An = {}, _i = 0; _i < k; _i++)
          An[_i] = [];
        for (var Ji = 0; Ji < $e; Ji++)
          Ye = ze[Ji], An[Ye].push(z[Ji]);
        for (var gn = [], jn = 0; jn < k; jn++)
          gn.push(An[jn][0]), gn.push(An[jn][An[jn].length - 1]);
        gn = gn.sort(function(Rs, Bs) {
          return Rs - Bs;
        }), D.push(gn[0]);
        for (var qt = 1; qt < gn.length; qt += 2) {
          var lr = gn[qt];
          !isNaN(lr) && D.indexOf(lr) === -1 && D.push(lr);
        }
      }
      return D;
    }, wu = { analyze: Su, limits: vo }, qi = O, ku = function(p, x) {
      p = new qi(p), x = new qi(x);
      var k = p.luminance(), $ = x.luminance();
      return k > $ ? (k + 0.05) / ($ + 0.05) : ($ + 0.05) / (k + 0.05);
    }, Lu = O, In = Math.sqrt, At = Math.pow, dc = Math.min, vc = Math.max, po = Math.atan2, Ts = Math.abs, go = Math.cos, Pu = Math.sin, pc = Math.exp, Ms = Math.PI, Es = function(p, x, k, $, R) {
      k === void 0 && (k = 1), $ === void 0 && ($ = 1), R === void 0 && (R = 1);
      var z = function(lr) {
        return 360 * lr / (2 * Ms);
      }, D = function(lr) {
        return 2 * Ms * lr / 360;
      };
      p = new Lu(p), x = new Lu(x);
      var U = Array.from(p.lab()), H = U[0], re = U[1], ie = U[2], _e = Array.from(x.lab()), ce = _e[0], Se = _e[1], we = _e[2], Ye = (H + ce) / 2, $e = In(At(re, 2) + At(ie, 2)), ze = In(At(Se, 2) + At(we, 2)), et = ($e + ze) / 2, jt = 0.5 * (1 - In(At(et, 7) / (At(et, 7) + At(25, 7)))), Rt = re * (1 + jt), vr = Se * (1 + jt), Ke = In(At(Rt, 2) + At(ie, 2)), fe = In(At(vr, 2) + At(we, 2)), Ie = (Ke + fe) / 2, Xe = z(po(ie, Rt)), Fe = z(po(we, vr)), ir = Xe >= 0 ? Xe : Xe + 360, tt = Fe >= 0 ? Fe : Fe + 360, qe = Ts(ir - tt) > 180 ? (ir + tt + 360) / 2 : (ir + tt) / 2, st = 1 - 0.17 * go(D(qe - 30)) + 0.24 * go(D(2 * qe)) + 0.32 * go(D(3 * qe + 6)) - 0.2 * go(D(4 * qe - 63)), it = tt - ir;
      it = Ts(it) <= 180 ? it : tt <= ir ? it + 360 : it - 360, it = 2 * In(Ke * fe) * Pu(D(it) / 2);
      var ht = ce - H, Jr = fe - Ke, Qn = 1 + 0.015 * At(Ye - 50, 2) / In(20 + At(Ye - 50, 2)), An = 1 + 0.045 * Ie, _i = 1 + 0.015 * Ie * st, Ji = 30 * pc(-At((qe - 275) / 25, 2)), gn = 2 * In(At(Ie, 7) / (At(Ie, 7) + At(25, 7))), jn = -gn * Pu(2 * D(Ji)), qt = In(At(ht / (k * Qn), 2) + At(Jr / ($ * An), 2) + At(it / (R * _i), 2) + jn * (Jr / ($ * An)) * (it / (R * _i)));
      return vc(0, dc(100, qt));
    }, Iu = O, Ds = function(p, x, k) {
      k === void 0 && (k = "lab"), p = new Iu(p), x = new Iu(x);
      var $ = p.get(k), R = x.get(k), z = 0;
      for (var D in $) {
        var U = ($[D] || 0) - (R[D] || 0);
        z += U * U;
      }
      return Math.sqrt(z);
    }, Au = O, $u = function() {
      for (var p = [], x = arguments.length; x--; )
        p[x] = arguments[x];
      try {
        return new (Function.prototype.bind.apply(Au, [null].concat(p)))(), !0;
      } catch {
        return !1;
      }
    }, Fs = W, ba = ks, gc = {
      cool: function() {
        return ba([Fs.hsl(180, 1, 0.9), Fs.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return ba(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Ca = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, yo = 0, Tu = Object.keys(Ca); yo < Tu.length; yo += 1) {
      var Os = Tu[yo];
      Ca[Os.toLowerCase()] = Ca[Os];
    }
    var yc = Ca, Vt = W;
    Vt.average = rc, Vt.bezier = Ls, Vt.blend = xa, Vt.cubehelix = Is, Vt.mix = Vt.interpolate = uo, Vt.random = mi, Vt.scale = ks, Vt.analyze = wu.analyze, Vt.contrast = ku, Vt.deltaE = Es, Vt.distance = Ds, Vt.limits = wu.limits, Vt.valid = $u, Vt.scales = gc, Vt.colors = ds, Vt.brewer = yc;
    var Mu = Vt;
    return Mu;
  });
})(g5);
var MT = g5.exports;
const G2 = /* @__PURE__ */ E1(MT);
var ET = /* @__PURE__ */ ue("<div tabindex=0><div class=selector-container><i class=arrow></i></div><div class=drop-down-container style=left:50%;top:20%><div class=split_line></div><div class=range_div><input class=range type=range min=1 max=100><p>%</p></div><div class=split_line></div><div class=submit><span class=cancel>Cancel</span><span>Ok"), DT = /* @__PURE__ */ ue("<div class=each_line>"), FT = /* @__PURE__ */ ue("<div>");
const b1 = (e) => {
  const r = String(e.value).includes("rgba") ? G2(String(e.value)).alpha() * 100 : 100, [t, i] = J(!1), [a, s] = J(r), [l, u] = J(e.value), [c, h] = J(e.value), [d, v] = J(!1), m = [["rgb(255, 255, 255)", "rgb(178, 181, 190)", "rgb(149, 152, 161)", "rgb(120, 123, 134)", "rgb(93, 96, 107)", "rgb(42, 46, 57)", "rgb(0, 0, 0)"], ["rgb(242, 54, 69)", "rgb(252, 203, 205)", "rgb(250, 161, 164)", "rgb(247, 124, 128)", "rgb(247, 82, 95)", "rgb(178, 40, 51)", "rgb(128, 25, 34)"], ["rgb(255, 152, 0)", "rgb(255, 224, 178)", "rgb(255, 204, 128)", "rgb(255, 183, 77)", "rgb(255, 167, 38)", "rgb(245, 124, 0)", "rgb(230, 81, 0)"], ["rgb(255, 235, 59)", "rgb(255, 249, 196)", "rgb(255, 245, 157)", "rgb(255, 241, 118)", "rgb(255, 238, 88)", "rgb(251, 192, 45)", "rgb(245, 127, 23)"], ["rgb(76, 175, 80)", "rgb(200, 230, 201)", "rgb(165, 214, 167)", "rgb(129, 199, 132)", "rgb(102, 187, 106)", "rgb(56, 142, 60)", "rgb(27, 94, 32)"], ["rgb(8, 153, 129)", "rgb(172, 229, 220)", "rgb(112, 204, 189)", "rgb(66, 189, 168)", "rgb(34, 171, 148)", "rgb(5, 102, 86)", "rgb(0, 51, 42)"], ["rgb(0, 188, 212)", "rgb(178, 235, 242)", "rgb(128, 222, 234)", "rgb(77, 208, 225)", "rgb(38, 198, 218)", "rgb(0, 151, 167)", "rgb(0, 96, 100)"], ["rgb(41, 98, 255)", "rgb(187, 217, 251)", "rgb(144, 191, 249)", "rgb(91, 156, 246)", "rgb(49, 121, 245)", "rgb(24, 72, 204)", "rgb(12, 50, 153)"], ["rgb(103, 58, 183)", "rgb(209, 196, 233)", "rgb(179, 157, 219)", "rgb(149, 117, 205)", "rgb(126, 87, 194)", "rgb(81, 45, 168)", "rgb(49, 27, 146)"], ["rgb(156, 39, 176)", "rgb(225, 190, 231)", "rgb(206, 147, 216)", "rgb(186, 104, 200)", "rgb(171, 71, 188)", "rgb(123, 31, 162)", "rgb(74, 20, 140)"], ["rgb(233, 30, 99)", "rgb(248, 187, 208)", "rgb(244, 143, 177)", "rgb(240, 98, 146)", "rgb(236, 64, 122)", "rgb(194, 24, 91)", "rgb(136, 14, 79)"], ["#00698b", "#fb7b50"]], y = () => {
    i(!1);
  }, C = () => {
    var w;
    u(e.value), h(e.value), (w = e.onChange) == null || w.call(e, e.value), y();
  }, b = () => {
    var P;
    const w = a() / 100, T = G2(l()).alpha(w).css();
    h(T), (e.reactiveChange ?? !0) && ((P = e.onChange) == null || P.call(e, c()));
  }, _ = (w) => {
    s(w.target.value), b();
  };
  return (() => {
    var w = ET(), T = w.firstChild, P = T.nextSibling, M = P.firstChild, F = M.nextSibling, O = F.firstChild, V = O.nextSibling, W = V.firstChild, N = F.nextSibling, Y = N.nextSibling, K = Y.firstChild, G = K.nextSibling;
    return T.$$click = (q) => {
      i(!0);
    }, le(P, () => m.map((q) => (() => {
      var he = DT();
      return le(he, () => q.map((ge) => (() => {
        var ve = FT();
        return ve.$$click = (De) => {
          De.stopPropagation(), u(ge), b();
        }, Pt((De) => {
          var Oe = `each_color ${ge == l() ? "selected" : ""}`, be = `background-color: ${ge}`;
          return Oe !== De.e && Bn(ve, De.e = Oe), De.t = ni(ve, be, De.t), De;
        }, {
          e: void 0,
          t: void 0
        }), ve;
      })())), he;
    })()), M), O.addEventListener("blur", () => {
      v(!1);
    }), O.addEventListener("focus", () => {
      v(!0);
    }), O.$$input = _, le(V, a, W), K.$$click = C, G.$$click = () => {
      var q;
      e.reactiveChange === !1 && ((q = e.onChange) == null || q.call(e, c())), y();
    }, Pt((q) => {
      var he = `width: 120px; background-color: ${c()}`, ge = `klinecharts-pro-color ${e.class ?? ""} ${t() ? "klinecharts-pro-color-show" : ""}`, ve = `background-color: ${c()}; border: 1px solid ${l()}`;
      return q.e = ni(w, he, q.e), ge !== q.t && Bn(w, q.t = ge), q.a = ni(O, ve, q.a), q;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), Pt(() => O.value = a()), w;
  })();
};
Dr(["click", "input"]);
var OT = /* @__PURE__ */ ue("<div id=background class=klinecharts-pro-popup_background><input id=input class=period_range type=range min=1 max=10>");
J(0);
const [C1, Q2] = J(0), RT = 10, BT = (e) => {
  mf(e.target.value), Ro().setInterval = (RT + 1 - Pi()) * 100;
}, NT = (e) => {
  e.target && e.target.classList.contains("klinecharts-pro-popup_background") && bf(!1);
}, zT = () => (() => {
  var e = OT(), r = e.firstChild;
  return e.$$click = NT, r.$$input = BT, Pt(() => `${C1() - 45}px` != null ? r.style.setProperty("left", `${C1() - 45}px`) : r.style.removeProperty("left")), Pt(() => r.value = Pi()), e;
})();
Dr(["click", "input"]);
var VT = /* @__PURE__ */ ue("<img alt=symbol>"), WT = /* @__PURE__ */ ue("<div class=symbol><span>"), YT = /* @__PURE__ */ ue('<div class=klinecharts-pro-period-bar><div class=menu-container><svg viewBox="0 0 1024 1024"><path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 479.169H438.553c-17.673 0-32 14.327-32 32s14.327 32 32 32h393.608c17.673 0 32-14.327 32-32s-14.327-32-32-32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32zM319.028 351.594l-160 160 160 160z"></path></svg></div><button class="item tools">Place order</button><div class="item tools period_home"><button class="item period"></button></div><button class="item tools"></button><div class="item tools period_home"><button class="item period">Speed </button></div><div class="item tools"><svg viewBox="0 0 20 20"><path d=M15.873,20L3.65079,20C1.5873,20,0,18.3871,0,16.2903L0,3.70968C-3.78442e-7,1.6129,1.5873,0,3.65079,0L15.873,0C17.9365,0,19.5238,1.6129,19.5238,3.70968C19.5238,4.35484,19.2063,4.51613,18.5714,4.51613C17.9365,4.51613,17.619,4.19355,17.619,3.70968C17.619,2.74194,16.8254,1.93548,15.873,1.93548L3.65079,1.93548C2.69841,1.93548,1.90476,2.74194,1.90476,3.70968L1.90476,16.2903C1.90476,17.2581,2.69841,18.0645,3.65079,18.0645L15.873,18.0645C16.8254,18.0645,17.619,17.2581,17.619,16.2903C17.619,15.8065,18.0952,15.3226,18.5714,15.3226C19.0476,15.3226,19.5238,15.8065,19.5238,16.2903C19.5238,18.2258,17.9365,20,15.873,20ZM14.9206,12.9032C14.7619,12.9032,14.4444,12.9032,14.2857,12.7419L11.2698,9.35484C10.9524,9.03226,10.9524,8.54839,11.2698,8.22581C11.5873,7.90323,12.0635,7.90323,12.381,8.22581L15.3968,11.6129C15.7143,11.9355,15.7143,12.4194,15.3968,12.7419C15.3968,12.9032,15.2381,12.9032,14.9206,12.9032ZM11.4286,13.2258C11.2698,13.2258,11.1111,13.2258,10.9524,13.0645C10.6349,12.7419,10.6349,12.4194,10.9524,12.0968L15.0794,7.74193C15.3968,7.41935,15.7143,7.41935,16.0317,7.74193C16.3492,8.06452,16.3492,8.3871,16.0317,8.70968L11.9048,13.0645C11.746,13.2258,11.5873,13.2258,11.4286,13.2258ZM10.3175,3.70968C10.6349,3.70968,11.4286,3.87097,11.4286,4.67742C11.4286,5.32258,10.4762,5.16129,10.1587,5.16129C8.73016,5.16129,8.25397,5.96774,8.09524,6.6129L7.77778,8.54839L9.36508,8.54839C9.68254,8.54839,10,8.87097,10,9.19355C10,9.51613,9.68254,9.83871,9.36508,9.83871L7.61905,9.83871L6.50794,14.8387Q6.34921,16.2903,5.39683,16.2903Q4.44444,16.2903,4.92064,14.8387L6.03175,10L4.60317,10C4.28571,10,3.96825,9.67742,3.96825,9.35484C3.96825,8.70968,4.28571,8.54839,4.60317,8.54839L6.34921,8.54839L6.8254,6.45161C7.14286,3.70968,9.52381,3.54839,10.3175,3.70968ZM18.4127,6.6129C18.5714,6.12903,18.8889,5.96774,19.3651,5.96774C19.8413,6.12903,20,6.45161,20,6.93548L18.4127,13.3871C18.254,13.871,17.9365,14.0323,17.4603,14.0323C16.9841,13.871,16.8254,13.5484,16.8254,13.0645L18.4127,6.6129Z></path></svg><span></span></div><div class="item tools"><svg width=20 height=20 viewBox="0 0 20 20"><path d=M18.5446,9.09091C18.3333,6.61616,17.2887,4.31818,15.5751,2.63889C13.8498,0.94697,11.6197,0,9.28404,0C8.02817,0,6.81925,0.265151,5.66901,0.782828C5.65728,0.782828,5.65728,0.795454,5.64554,0.795454C5.6338,0.795454,5.6338,0.808081,5.62207,0.808081C4.53052,1.31313,3.55634,2.0202,2.71127,2.92929C1.85446,3.85101,1.18545,4.91162,0.715963,6.11111C0.246479,7.33586,0,8.64899,0,10C0,10.8712,0.105634,11.7172,0.305164,12.5379C0.305164,12.5631,0.316901,12.5884,0.328638,12.6136C0.739437,14.2298,1.51408,15.7197,2.62911,16.9571C4.07277,18.548,5.92723,19.5581,7.93427,19.8737C7.95775,19.8737,7.96948,19.8864,7.99296,19.8864C8.3216,19.9369,8.66197,19.9747,9.00235,19.9747L9.21362,19.9747C9.61268,19.9747,10.3756,19.9369,11.0094,19.697C11.1737,19.6338,11.3028,19.5076,11.3732,19.3434C11.4437,19.1793,11.4554,18.9899,11.3967,18.8131C11.3028,18.5354,11.0563,18.346,10.7864,18.346C10.716,18.346,10.6338,18.3586,10.5634,18.3838C10.0939,18.5606,9.46009,18.5859,9.20188,18.5859L9.09624,18.5859C9.20188,18.2702,9.23709,17.9167,9.15493,17.5505C9.00235,16.8939,8.50939,16.3384,7.58216,15.7955L7.19484,15.5682C6.57277,15.2146,6.23239,15.0253,6.03286,14.7348C5.83333,14.4444,5.69249,13.9899,5.51643,12.9798C5.38732,12.298,5.04695,11.7677,4.50704,11.4646C4.14319,11.2626,3.70892,11.149,3.19249,11.149C2.82864,11.149,2.42958,11.1995,2.00704,11.3005C1.79578,11.351,1.59624,11.4141,1.42019,11.4646C1.33803,10.9848,1.30282,10.4798,1.30282,9.97475C1.30282,6.93182,2.76995,4.26768,4.98826,2.72727C5,3.00505,5.05869,3.29545,5.17606,3.57323C5.48122,4.26768,6.10329,4.7096,7.01878,4.89899C7.06573,4.91162,7.10094,4.91162,7.13615,4.91162L7.1831,4.91162C7.26526,4.91162,7.57042,4.92424,7.88732,5.0505C8.3216,5.2399,8.56808,5.55555,8.65023,6.04798C8.84977,7.61364,9.07277,10.4293,8.79108,11.3384C8.76761,11.4141,8.75587,11.4899,8.75587,11.5657C8.75587,11.9444,9.0493,12.2601,9.40141,12.2601C9.57747,12.2601,9.74179,12.1843,9.85915,12.0581C9.97653,11.9318,12.6174,9.05303,13.3216,8.09343C13.4038,7.97979,13.4859,7.87878,13.5798,7.76515C13.9202,7.33586,14.2723,6.90656,14.4014,6.26262C14.554,5.56818,14.4014,4.79798,13.9437,3.85101C13.615,3.16919,13.5563,2.86616,13.5446,2.75252C13.5563,2.7399,13.5798,2.72727,13.6033,2.71464C15.6221,4.10353,17.0188,6.43939,17.2535,9.19192C17.2887,9.55808,17.5587,9.82323,17.8991,9.82323L17.9577,9.82323C18.3099,9.8106,18.5681,9.48232,18.5446,9.09091ZM3.19249,12.5631C3.48592,12.5631,3.72066,12.6136,3.89671,12.7146C4.08451,12.8283,4.19014,12.9924,4.23709,13.2702C4.43662,14.3434,4.61268,15.0631,5,15.6061C5.37559,16.1364,5.85681,16.4015,6.58451,16.8182L6.60798,16.8308C6.71362,16.8939,6.84272,16.9571,6.96009,17.0328C7.69953,17.4621,7.86385,17.7525,7.89906,17.8914C7.93427,18.0303,7.85211,18.2323,7.74648,18.4343C4.91784,17.8535,2.65258,15.6944,1.73709,12.8283C2.15962,12.702,2.71127,12.5631,3.19249,12.5631ZM12.7934,4.5202C13.4272,5.83333,13.1455,6.18687,12.5822,6.89394C12.4883,7.00758,12.3944,7.12121,12.3005,7.24747C11.9484,7.72727,11.0211,8.77525,10.2113,9.68434C10.2113,9.24242,10.1878,8.73737,10.1526,8.19444C10.0704,6.95707,9.92958,5.90909,9.92958,5.87121L9.92958,5.83333C9.75352,4.83586,9.20188,4.11616,8.3216,3.76263C7.82864,3.56061,7.37089,3.53535,7.19484,3.53535C6.73709,3.43434,6.4554,3.24495,6.33803,2.99242C6.19718,2.68939,6.29108,2.24747,6.38498,1.9697C7.28873,1.59091,8.26291,1.37626,9.28404,1.37626C10.3873,1.37626,11.4437,1.61616,12.4061,2.04545C12.3357,2.18434,12.277,2.34848,12.2535,2.5505C12.2066,3.04293,12.3709,3.64899,12.7934,4.5202Z></path><path d=M15.22299772857666,9.722223632261718C12.59389772857666,9.722223632261718,10.44600772857666,12.020201374511718,10.44600772857666,14.861111374511719C10.44600772857666,17.70202137451172,12.58215772857666,20.000021374511718,15.223007728576661,20.000021374511718C17.86384772857666,20.000021374511718,19.99999772857666,17.70202137451172,19.99999772857666,14.861111374511719C19.99999772857666,12.020201374511718,17.85211772857666,9.72222212709572,15.22299772857666,9.722223632261718ZM15.22299772857666,18.598491374511717C13.30985772857666,18.598491374511717,11.737087728576661,16.91919137451172,11.737087728576661,14.848481374511719C11.737087728576661,12.777781374511719,13.29811772857666,11.098491374511719,15.22299772857666,11.098491374511719C17.14787772857666,11.098491374511719,18.708917728576658,12.777781374511719,18.708917728576658,14.848481374511719C18.708917728576658,16.91919137451172,17.13614772857666,18.59848137451172,15.22299772857666,18.598491374511717Z></path><path d=M15.692486288146974,15.050496970825195L15.692486288146974,12.676760970825196C15.692486288146974,12.297972970825196,15.399058288146973,11.982316970825195,15.046945288146972,11.982316970825195C14.694833288146972,11.982316970825195,14.401406288146973,12.297972970825196,14.401406288146973,12.676760970825196L14.401406288146973,15.340896970825195C14.401406288146973,15.530296970825194,14.471829288146973,15.694436970825196,14.589200288146973,15.833326970825196L15.751176288146972,17.095956970825195C15.868546288146973,17.222216970825194,16.032866288146973,17.297976970825196,16.208916288146973,17.297976970825196C16.384976288146973,17.297976970825196,16.537556288146973,17.222216970825194,16.666666288146974,17.095956970825195C16.78403628814697,16.969686970825194,16.854456288146974,16.792916970825196,16.854456288146974,16.603526970825193C16.854456288146974,16.414136970825197,16.78403628814697,16.237366970825196,16.666666288146974,16.111106970825197L15.692486288146974,15.050496970825195Z></path></svg><span></span></div><div class="item tools"><svg viewBox="0 0 20 20"><path d=M19.7361,12.542L18.1916,11.2919C18.2647,10.8678,18.3025,10.4347,18.3025,10.0017C18.3025,9.56861,18.2647,9.13555,18.1916,8.71142L19.7361,7.46135C19.9743,7.26938,20.0615,6.95686,19.9554,6.6756L19.9342,6.61756C19.5074,5.49026,18.8755,4.45449,18.0549,3.53926L18.0124,3.49238C17.8096,3.26692,17.4819,3.1821,17.1848,3.28032L15.2677,3.92544C14.5603,3.3763,13.7704,2.94324,12.9168,2.63966L12.5466,0.742229C12.49,0.449802,12.2472,0.222111,11.9383,0.168536L11.8746,0.157375C10.6461,-0.0524583,9.35391,-0.0524583,8.1254,0.157375L8.06174,0.168536C7.75284,0.222111,7.50997,0.449802,7.45338,0.742229L7.08082,2.64859C6.2343,2.95217,5.44909,3.383,4.74641,3.92991L2.81522,3.28032C2.52047,3.1821,2.19036,3.26469,1.98757,3.49238L1.94513,3.53926C1.12455,4.45672,0.492609,5.49249,0.0658141,6.61756L0.0445921,6.6756C-0.0615171,6.95463,0.0257283,7.26715,0.263885,7.46135L1.82723,8.72482C1.75413,9.14448,1.71876,9.57308,1.71876,9.99944C1.71876,10.428,1.75413,10.8566,1.82723,11.2741L0.263885,12.5375C0.025729,12.7295,-0.0615164,13.042,0.0445929,13.3233L0.0658148,13.3813C0.49261,14.5064,1.12455,15.5444,1.94513,16.4596L1.98757,16.5065C2.19036,16.732,2.51812,16.8168,2.81522,16.7186L4.74641,16.069C5.44909,16.6159,6.2343,17.0489,7.08082,17.3503L7.45338,19.2567C7.50997,19.5491,7.75284,19.7768,8.06174,19.8303L8.1254,19.8415C8.74084,19.9464,9.37042,20,10,20C10.6296,20,11.2615,19.9464,11.8746,19.8415L11.9383,19.8303C12.2472,19.7768,12.49,19.5491,12.5466,19.2567L12.9168,17.3592C13.7704,17.0556,14.5603,16.6248,15.2677,16.0734L17.1848,16.7186C17.4795,16.8168,17.8096,16.7342,18.0124,16.5065L18.0549,16.4596C18.8755,15.5422,19.5074,14.5064,19.9342,13.3813L19.9554,13.3233C20.0615,13.0487,19.9743,12.7362,19.7361,12.542ZM16.5175,8.97483C16.5764,9.3119,16.6071,9.65791,16.6071,10.0039C16.6071,10.3499,16.5764,10.6959,16.5175,11.033L16.3618,11.9281L18.1233,13.3545C17.8568,13.9372,17.5196,14.4863,17.1188,14.9975L14.9305,14.2631L14.1901,14.839C13.6266,15.2765,12.9994,15.6203,12.3203,15.8614L11.4219,16.1806L10.9998,18.3459C10.3372,18.4173,9.66045,18.4173,8.9955,18.3459L8.57342,16.1761L7.6821,15.8524C7.01008,15.6114,6.38521,15.2676,5.82637,14.8323L5.08596,14.2541L2.88361,14.9953C2.48275,14.4841,2.14791,13.9327,1.8791,13.3523L3.65938,11.9125L3.50611,11.0196C3.44952,10.687,3.41887,10.3432,3.41887,10.0039C3.41887,9.66237,3.44716,9.32083,3.50611,8.98822L3.65938,8.09531L1.8791,6.6555C2.14556,6.07288,2.48275,5.52374,2.88361,5.01255L5.08596,5.75367L5.82637,5.17551C6.38521,4.74022,7.01008,4.39645,7.6821,4.15536L8.57578,3.83615L8.99786,1.66638C9.66045,1.59495,10.3372,1.59495,11.0021,1.66638L11.4242,3.83168L12.3226,4.1509C12.9994,4.39198,13.6289,4.73575,14.1925,5.17328L14.9329,5.7492L17.1211,5.01479C17.522,5.52598,17.8568,6.07734,18.1256,6.65773L16.3642,8.08416L16.5175,8.97483ZM10.0024,5.85189C7.7104,5.85189,5.85231,7.61092,5.85231,9.78068C5.85231,11.9504,7.7104,13.7095,10.0024,13.7095C12.2943,13.7095,14.1524,11.9504,14.1524,9.78068C14.1524,7.61092,12.2943,5.85189,10.0024,5.85189ZM11.8699,11.5486C11.37,12.0196,10.7074,12.2808,10.0024,12.2808C9.29732,12.2808,8.63473,12.0196,8.13483,11.5486C7.6373,11.0754,7.36142,10.4481,7.36142,9.78068C7.36142,9.11323,7.6373,8.48596,8.13483,8.01272C8.63473,7.53948,9.29732,7.28054,10.0024,7.28054C10.7074,7.28054,11.37,7.53948,11.8699,8.01272C12.3674,8.48596,12.6433,9.11323,12.6433,9.78068C12.6433,10.4481,12.3674,11.0754,11.8699,11.5486Z></path></svg><span></span></div><div class="item tools"><svg viewBox="0 0 20 20"><path d=M6.50977,1L13.4902,1C13.6406,1,13.7695,1.1104910000000001,13.7969,1.2631700000000001L14.0273,2.52277C14.1387,3.13147,14.6543,3.57143,15.2559,3.57143L17.5,3.57143C18.8809,3.57143,20,4.72254,20,6.14286L20,16.4286C20,17.8489,18.8809,19,17.5,19L2.5,19C1.11914,19,0,17.8489,0,16.4286L0,6.14286C0,4.72254,1.11914,3.57143,2.5,3.57143L4.74414,3.57143C5.3457,3.57143,5.86133,3.13147,5.97266,2.52277L6.20312,1.2631700000000001C6.23047,1.1104910000000001,6.35937,1,6.50977,1ZM15.2559,4.857139999999999C14.0547,4.857139999999999,13.0215,3.97522,12.7988,2.75982L12.7129,2.28571L7.28711,2.28571L7.20117,2.75982C6.98047,3.97522,5.94727,4.857139999999999,4.74414,4.857139999999999L2.5,4.857139999999999C1.81055,4.857139999999999,1.25,5.43371,1.25,6.14286L1.25,16.4286C1.25,17.1377,1.81055,17.7143,2.5,17.7143L17.5,17.7143C18.1895,17.7143,18.75,17.1377,18.75,16.4286L18.75,6.14286C18.75,5.43371,18.1895,4.857139999999999,17.5,4.857139999999999L15.2559,4.857139999999999ZM4.375,6.78571L3.125,6.78571C2.7793,6.78571,2.5,6.49844,2.5,6.14286C2.5,5.78728,2.7793,5.5,3.125,5.5L4.375,5.5C4.7207,5.5,5,5.78728,5,6.14286C5,6.49844,4.7207,6.78571,4.375,6.78571ZM10,6.14286C7.06641,6.14286,4.6875,8.58973,4.6875,11.6071C4.6875,14.6246,7.06641,17.0714,10,17.0714C12.9336,17.0714,15.3125,14.6246,15.3125,11.6071C15.3125,8.58973,12.9336,6.14286,10,6.14286ZM10,7.42857C11.0859,7.42857,12.1055,7.8625,12.873,8.65201C13.6406,9.44152,14.0625,10.49018,14.0625,11.6071C14.0625,12.7241,13.6406,13.7728,12.873,14.5623C12.1055,15.3518,11.0859,15.7857,10,15.7857C8.91406,15.7857,7.89453,15.3518,7.12695,14.5623C6.35937,13.7728,5.9375,12.7241,5.9375,11.6071C5.9375,10.49018,6.35938,9.44152,7.12695,8.65201C7.89453,7.8625,8.91406,7.42857,10,7.42857ZM10,9.67857C8.96484,9.67857,8.125,10.54241,8.125,11.6071C8.125,12.6719,8.96484,13.5357,10,13.5357C11.0352,13.5357,11.875,12.6719,11.875,11.6071C11.875,10.54241,11.0352,9.67857,10,9.67857ZM10,10.96429C10.3438,10.96429,10.625,11.2536,10.625,11.6071C10.625,11.9607,10.3438,12.25,10,12.25C9.65625,12.25,9.375,11.9607,9.375,11.6071C9.375,11.2536,9.65625,10.96429,10,10.96429Z></path></svg><span></span></div><div class="item tools"></div><button class="item tools"></button><div class=order-container><svg viewBox="0 0 1024 1024"><path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 479.169H438.553c-17.673 0-32 14.327-32 32s14.327 32 32 32h393.608c17.673 0 32-14.327 32-32s-14.327-32-32-32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32zM319.028 351.594l-160 160 160 160z">'), XT = /* @__PURE__ */ ue("<div class=klinecharts-pro-popup_background><div class=period_list>"), ZT = /* @__PURE__ */ ue("<li>"), UT = /* @__PURE__ */ ue('<svg viewBox="0 0 20 20"><path d=M1.08108,0L0,1.079L4.18919,5.27938L2.54826,6.91715L6.9112,6.91715L6.9112,2.56262L5.28957,4.18112L1.08108,0ZM15.8108,5.27938L20,1.079L18.9189,0L14.7104,4.18112L13.0888,2.56262L13.0888,6.91715L17.4517,6.91715L15.8108,5.27938ZM4.16988,14.7014L0.07722,18.8054L1.1583,20L5.27027,15.7996L6.9112,17.4374L6.9112,13.0829L2.54826,13.0829L4.16988,14.7014ZM17.4517,13.0829L13.0888,13.0829L13.0888,17.4374L14.7297,15.7996L18.8417,20L19.9228,18.8054L15.8301,14.7013L17.4517,13.0829Z>'), j2 = /* @__PURE__ */ ue("<span>"), KT = /* @__PURE__ */ ue('<svg viewBox="0 0 20 20"><path d=M2.93444,1.76899L7.57544,6.40999L6.38918,7.59626L1.76899,2.93444L0,4.70343L0,0L4.70343,0L2.93444,1.76899ZM6.40999,12.4037L1.76899,17.0447L0,15.2758L0,19.9792L4.70343,19.9792L2.93444,18.2102L7.57544,13.5692L6.40999,12.4037ZM15.2758,0L17.0447,1.76899L12.4037,6.40999L13.59,7.59626L18.231,2.95526L20,4.72425L20,0L15.2758,0ZM13.5692,12.4037L12.3829,13.59L17.0239,18.231L15.2549,20L19.9792,20L19.9792,15.2758L18.2102,17.0447L13.5692,12.4037Z>');
const HT = (e) => {
  const [r, t] = J(!1), [i, a] = J(!0), s = () => {
    t(!1), bf(!1), a(!0);
  }, l = () => {
    ML((d) => !d);
  }, u = () => {
  }, c = () => {
    _f(!na()), e.datafeed.setIsPaused = na(), h5();
  }, h = (d) => {
    Q2(ia().x - d.pageX > 200 ? d.pageX : ia().x - 200), s(), bf(!0);
  };
  return Tf(() => {
    document.addEventListener("fullscreenchange", l), document.addEventListener("mozfullscreenchange", l), document.addEventListener("webkitfullscreenchange", l), document.addEventListener("msfullscreenchange", l);
  }), Mf(() => {
    document.removeEventListener("fullscreenchange", l), document.removeEventListener("mozfullscreenchange", l), document.removeEventListener("webkitfullscreenchange", l), document.removeEventListener("msfullscreenchange", l);
  }), (() => {
    var d = YT(), v = d.firstChild, m = v.firstChild, y = v.nextSibling, C = y.nextSibling, b = C.firstChild, _ = C.nextSibling, w = _.nextSibling, T = w.firstChild;
    T.firstChild;
    var P = w.nextSibling, M = P.firstChild, F = M.nextSibling, O = P.nextSibling, V = O.firstChild, W = V.nextSibling, N = O.nextSibling, Y = N.firstChild, K = Y.nextSibling, G = N.nextSibling, q = G.firstChild, he = q.nextSibling, ge = G.nextSibling, ve = ge.nextSibling, De = ve.nextSibling, Oe = De.firstChild;
    return Ef((be) => {
    }, d), Li(m, "click", e.onMenuClick, !0), le(d, se(Ct, {
      get when() {
        return e.symbol;
      },
      get children() {
        var be = WT(), ye = be.firstChild;
        return be.$$click = u, le(be, se(Ct, {
          get when() {
            return e.symbol.logo;
          },
          get children() {
            var de = VT();
            return Pt(() => Er(de, "src", e.symbol.logo)), de;
          }
        }), ye), le(ye, () => e.symbol.shortName ?? e.symbol.name ?? e.symbol.ticker), be;
      }
    }), y), y.$$click = () => {
      ul(!0), tr(!0), e.orderController.launchOrderModal("placeorder", Q().onOrderPlaced);
    }, b.$$click = (be) => {
      r() || (s(), Q2(ia().x - be.pageX > 200 ? be.pageX : ia().x - 200)), a(!i()), t(!r()), tr(!0);
    }, le(b, () => e.period.text), le(C, (() => {
      var be = yt(() => !!r());
      return () => be() && (() => {
        var ye = XT(), de = ye.firstChild;
        return ye.$$click = () => {
          a(!i), tr(!1), t(!1);
        }, le(de, () => e.periods.map((We) => (() => {
          var Be = ZT();
          return Be.$$click = () => {
            e.onPeriodChange(We), a(!i()), t(!1), tr(!1);
          }, le(Be, () => We.text), Be;
        })())), Pt(() => `${C1() - 50}px` != null ? de.style.setProperty("left", `${C1() - 50}px`) : de.style.removeProperty("left")), ye;
      })();
    })(), null), _.$$click = () => {
      _f(!na()), e.datafeed.setIsPaused = na();
    }, le(_, () => na() ? "Play" : "Pause"), T.$$click = h, le(T, Pi, null), Li(P, "click", e.onIndicatorClick, !0), le(F, () => I("indicator", e.locale)), Li(O, "click", e.onTimezoneClick, !0), le(W, () => I("timezone", e.locale)), Li(N, "click", e.onSettingClick, !0), le(K, () => I("setting", e.locale)), Li(G, "click", e.onScreenshotClick, !0), le(he, () => I("screenshot", e.locale)), ge.$$click = () => {
      if (yf())
        (document.exitFullscreen ?? document.msExitFullscreen ?? document.mozCancelFullScreen ?? document.webkitExitFullscreen).call(document);
      else {
        const be = document.querySelector(`#${_5()}`);
        be && (be.requestFullscreen ?? be.webkitRequestFullscreen ?? be.mozRequestFullScreen ?? be.msRequestFullscreen).call(be);
      }
    }, le(ge, (() => {
      var be = yt(() => !!yf());
      return () => be() ? [UT(), (() => {
        var ye = j2();
        return le(ye, () => I("exit_full_screen", e.locale)), ye;
      })()] : [KT(), (() => {
        var ye = j2();
        return le(ye, () => I("full_screen", e.locale)), ye;
      })()];
    })()), ve.$$click = c, le(ve, () => {
      var be;
      return (be = S1()) != null && be.isNotGuest() ? "Dashboard" : "Exit Test";
    }), Li(Oe, "click", e.onOrderMenuClick, !0), Pt((be) => {
      var ye = `${i() ? "overflow-x: auto;" : ""}`, de = e.spread ? "" : "rotate", We = e.order_spread ? "" : "rotate";
      return be.e = ni(d, ye, be.e), de !== be.t && Er(m, "class", be.t = de), We !== be.a && Er(Oe, "class", be.a = We), be;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), d;
  })();
};
Dr(["click"]);
var GT = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M12.41465,11L18.5,11C18.7761,11,19,11.22386,19,11.5C19,11.77614,18.7761,12,18.5,12L12.41465,12C12.20873,12.5826,11.65311,13,11,13C10.34689,13,9.79127,12.5826,9.58535,12L3.5,12C3.223857,12,3,11.77614,3,11.5C3,11.22386,3.223857,11,3.5,11L9.58535,11C9.79127,10.417404,10.34689,10,11,10C11.65311,10,12.20873,10.417404,12.41465,11Z stroke-opacity=0 stroke=none>');
const QT = () => GT();
var jT = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M6.91465,11L11.08535,11C11.29127,10.417404,11.84689,10,12.5,10C13.15311,10,13.70873,10.417404,13.91465,11L18.5,11C18.7761,11,19,11.22386,19,11.5C19,11.77614,18.7761,12,18.5,12L13.91465,12C13.70873,12.5826,13.15311,13,12.5,13C11.84689,13,11.29127,12.5826,11.08535,12L6.91465,12C6.70873,12.5826,6.15311,13,5.5,13C4.671573,13,4,12.32843,4,11.5C4,10.671573,4.671573,10,5.5,10C6.15311,10,6.70873,10.417404,6.91465,11Z stroke-opacity=0 stroke=none>');
const qT = () => jT();
var JT = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M6.91465,12.5C6.70873,13.0826,6.15311,13.5,5.5,13.5C4.671573,13.5,4,12.82843,4,12C4,11.171573,4.671573,10.5,5.5,10.5C6.15311,10.5,6.70873,10.917404,6.91465,11.5L16.0853,11.5C16.2913,10.917404,16.846899999999998,10.5,17.5,10.5C18.328400000000002,10.5,19,11.171573,19,12C19,12.82843,18.328400000000002,13.5,17.5,13.5C16.846899999999998,13.5,16.2913,13.0826,16.0853,12.5L6.91465,12.5Z stroke-opacity=0 stroke=none>');
const eM = () => JT();
var tM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11,12.41465L11,18.5C11,18.7761,11.22386,19,11.5,19C11.77614,19,12,18.7761,12,18.5L12,12.41465C12.5826,12.20873,13,11.65311,13,11C13,10.34689,12.5826,9.79127,12,9.58535L12,3.5C12,3.223857,11.77614,3,11.5,3C11.22386,3,11,3.223857,11,3.5L11,9.58535C10.417404,9.79127,10,10.34689,10,11C10,11.65311,10.417404,12.20873,11,12.41465Z stroke-opacity=0 stroke=none>');
const rM = () => tM();
var nM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11.66558837890625,19C10.83716137890625,19,10.16558837890625,18.328400000000002,10.16558837890625,17.5C10.16558837890625,16.846899999999998,10.58298437890625,16.2913,11.16557337890625,16.0854L11.16557337890625,11.91464C10.58298437890625,11.70872,10.16558837890625,11.1531,10.16558837890625,10.5C10.16558837890625,9.8469,10.58298437890625,9.29128,11.16557337890625,9.08536L11.16557337890625,4.5C11.16557337890625,4.223857,11.38942837890625,4,11.66556837890625,4C11.94171837890625,4,12.16556837890625,4.223857,12.16556837890625,4.5L12.16556837890625,9.08535C12.74817837890625,9.291260000000001,13.16558837890625,9.846879999999999,13.16558837890625,10.5C13.16558837890625,11.153120000000001,12.74817837890625,11.708739999999999,12.16556837890625,11.91465L12.16556837890625,16.0854C12.74817837890625,16.2913,13.16558837890625,16.846899999999998,13.16558837890625,17.5C13.16558837890625,18.328400000000002,12.49401837890625,19,11.66558837890625,19Z stroke-opacity=0 stroke=none>');
const iM = () => nM();
var aM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11.165603637695312,6.91465C11.748203637695312,6.70873,12.165603637695312,6.15311,12.165603637695312,5.5C12.165603637695312,4.671573,11.494033637695313,4,10.665603637695312,4C9.837176637695313,4,9.165603637695312,4.671573,9.165603637695312,5.5C9.165603637695312,6.15311,9.583007637695312,6.70873,10.165603637695312,6.91465L10.165603637695312,16.0854C9.583007637695312,16.2913,9.165603637695312,16.846899999999998,9.165603637695312,17.5C9.165603637695312,18.328400000000002,9.837176637695313,19,10.665603637695312,19C11.494033637695313,19,12.165603637695312,18.328400000000002,12.165603637695312,17.5C12.165603637695312,16.846899999999998,11.748203637695312,16.2913,11.165603637695312,16.0854L11.165603637695312,6.91465Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const oM = () => aM();
var sM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M5.146447,15.753C4.9511845,15.9483,4.9511845,16.2649,5.146447,16.4602C5.341709,16.6554,5.658291,16.6554,5.853554,16.4602L8.156600000000001,14.15711C8.352409999999999,14.25082,8.57173,14.3033,8.8033,14.3033C9.631730000000001,14.3033,10.3033,13.63172,10.3033,12.80329C10.3033,12.57172,10.250820000000001,12.352409999999999,10.157119999999999,12.15659L12.156600000000001,10.15711C12.352409999999999,10.250820000000001,12.571729999999999,10.30329,12.8033,10.30329C13.63173,10.30329,14.3033,9.63172,14.3033,8.80329C14.3033,8.57172,14.25082,8.352409999999999,14.15712,8.15659L16.4602,5.853553C16.6554,5.658291,16.6554,5.341709,16.4602,5.146447C16.2649,4.9511843,15.9483,4.9511843,15.753,5.146447L13.45001,7.449479999999999C13.25419,7.35577,13.03487,7.3032900000000005,12.8033,7.3032900000000005C11.97487,7.3032900000000005,11.3033,7.97487,11.3033,8.80329C11.3033,9.03487,11.35578,9.254190000000001,11.44949,9.450009999999999L9.450009999999999,11.449480000000001C9.254190000000001,11.35577,9.03487,11.30329,8.8033,11.30329C7.97487,11.30329,7.3033,11.97487,7.3033,12.80329C7.3033,13.03487,7.35578,13.25419,7.44949,13.45001L5.146447,15.753Z stroke-opacity=0 stroke=none>');
const lM = () => sM();
var uM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M7.573332939453125,14.54567903564453C7.667042939453125,14.741499035644532,7.719512939453125,14.960809035644532,7.719512939453125,15.19239903564453C7.719512939453125,16.02079903564453,7.047942939453125,16.69239903564453,6.219512939453125,16.69239903564453C5.391085939453125,16.69239903564453,4.719512939453125,16.02079903564453,4.719512939453125,15.19239903564453C4.719512939453125,14.36394903564453,5.391085939453125,13.692379035644532,6.219512939453125,13.692379035644532C6.451092939453125,13.692379035644532,6.670412939453125,13.74485903564453,6.866232939453125,13.83856903564453L9.865702939453126,10.83909903564453C9.771992939453124,10.643279035644532,9.719512939453125,10.42395903564453,9.719512939453125,10.192379035644532C9.719512939453125,9.36394903564453,10.391082939453124,8.692379035644532,11.219512939453125,8.692379035644532C11.451092939453126,8.692379035644532,11.670412939453126,8.74485903564453,11.866232939453125,8.838569035644532L15.462112939453124,5.242645035644531C15.657412939453126,5.047383335644532,15.974012939453125,5.047383335644532,16.169212939453125,5.242645035644531C16.364512939453125,5.437907035644531,16.364512939453125,5.754489035644531,16.169212939453125,5.949752035644531L12.573332939453124,9.545679035644532C12.667042939453125,9.74149903564453,12.719512939453125,9.96080903564453,12.719512939453125,10.192379035644532C12.719512939453125,11.020809035644533,12.047942939453126,11.692379035644532,11.219512939453125,11.692379035644532C10.987942939453125,11.692379035644532,10.768632939453125,11.639909035644532,10.572812939453126,11.54619903564453L7.573332939453125,14.54567903564453Z stroke-opacity=0 stroke=none>');
const cM = () => uM();
var fM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M15.719512939453125,8.461776733398438C16.547912939453127,8.461776733398438,17.219512939453125,7.7902067333984375,17.219512939453125,6.9617767333984375C17.219512939453125,6.133349733398438,16.547912939453127,5.4617767333984375,15.719512939453125,5.4617767333984375C14.891082939453124,5.4617767333984375,14.219512939453125,6.133349733398438,14.219512939453125,6.9617767333984375C14.219512939453125,7.193346733398437,14.271992939453124,7.412666733398438,14.365692939453124,7.608486733398438L7.366222939453126,14.607956733398437C7.170402939453125,14.514256733398437,6.951082939453125,14.461776733398438,6.719512939453125,14.461776733398438C5.891085939453125,14.461776733398438,5.219512939453125,15.133346733398437,5.219512939453125,15.961776733398438C5.219512939453125,16.79017673339844,5.891085939453125,17.461776733398438,6.719512939453125,17.461776733398438C7.547942939453125,17.461776733398438,8.219512939453125,16.79017673339844,8.219512939453125,15.961776733398438C8.219512939453125,15.730176733398437,8.167032939453126,15.510876733398437,8.073322939453124,15.315066733398437L15.072802939453124,8.315586733398437C15.268612939453124,8.409296733398438,15.487912939453125,8.461776733398438,15.719512939453125,8.461776733398438Z stroke-opacity=0 stroke=none>');
const hM = () => fM();
var dM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M17.0643,7.033864912109375L18,3.585784912109375L14.5078,4.509695912109375L15.3537,5.344934912109375L6.02026,14.560584912109375C5.87635,14.517484912109374,5.72366,14.494284912109375,5.5655,14.494284912109375C4.7009,14.494284912109375,4,15.186384912109375,4,16.040084912109375C4,16.893784912109375,4.7009,17.585784912109375,5.5655,17.585784912109375C6.43011,17.585784912109375,7.13101,16.893784912109375,7.13101,16.040084912109375C7.13101,15.722284912109375,7.03392,15.426984912109376,6.86744,15.181384912109374L16.0917,6.073604912109375L17.0643,7.033864912109375Z stroke-opacity=0 stroke=none>');
const vM = () => dM();
var pM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M6.91465,13.00505L18.5,13.00505C18.7761,13.00505,19,13.228909999999999,19,13.50505C19,13.781189999999999,18.7761,14.00505,18.5,14.00505L6.91465,14.00505C6.70873,14.58765,6.15311,15.00505,5.5,15.00505C4.671573,15.00505,4,14.33348,4,13.50505C4,12.67662,4.671573,12.00505,5.5,12.00505C6.15311,12.00505,6.70873,12.422450000000001,6.91465,13.00505ZM7.81404,11.625L10.48591,11.625L10.48591,10.90625L9.65193,10.90625L9.65193,7.125L8.997630000000001,7.125C8.71443,7.306641,8.415600000000001,7.419922,7.96443,7.498047L7.96443,8.05078L8.77497,8.05078L8.77497,10.90625L7.81404,10.90625L7.81404,11.625ZM11.081620000000001,11.625L14.0562,11.625L14.0562,10.88281L13.09724,10.88281C12.8863,10.88281,12.59333,10.90625,12.36482,10.93555C13.17537,10.11328,13.84724,9.2207,13.84724,8.39062C13.84724,7.541016,13.28865,7,12.4488,7C11.84333,7,11.446850000000001,7.234375,11.03279,7.679688L11.52497,8.16797C11.747630000000001,7.914062,12.0113,7.697266,12.33552,7.697266C12.7613,7.697266,13.00154,7.982422,13.00154,8.43359C13.00154,9.14648,12.29255,10.00781,11.081620000000001,11.11523L11.081620000000001,11.625ZM15.9605,11.75C16.8121,11.75,17.526899999999998,11.2832,17.526899999999998,10.4375C17.526899999999998,9.82031,17.142200000000003,9.43945,16.6441,9.30078L16.6441,9.27148C17.1129,9.08594,17.3824,8.7207,17.3824,8.21289C17.3824,7.421875,16.8004,7,15.9429,7C15.4215,7,14.9957,7.210938,14.6109,7.541016L15.066,8.11133C15.3258,7.849609,15.5836,7.697266,15.9019,7.697266C16.2789,7.697266,16.4957,7.914062,16.4957,8.28125C16.4957,8.70898,16.2301,9,15.4215,9L15.4215,9.63672C16.3804,9.63672,16.6383,9.91992,16.6383,10.38086C16.6383,10.79688,16.3336,11.03125,15.8824,11.03125C15.4742,11.03125,15.1578,10.82227,14.8922,10.55078L14.4781,11.13281C14.7906,11.486329999999999,15.2652,11.75,15.9605,11.75Z stroke-opacity=0 stroke=none>');
const gM = () => pM();
var yM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M3.146447,14.178126025390625C2.9511847,13.982826025390626,2.9511847,13.666226025390625,3.146447,13.470926025390625L7.39146,9.225966025390626C7.35417,9.095106025390624,7.33421,8.956946025390625,7.33421,8.814116025390625C7.33421,7.985696025390625,8.00578,7.314116025390625,8.834209999999999,7.314116025390625C8.97703,7.314116025390625,9.11519,7.334086025390625,9.24605,7.371366025390625L13.753,2.864373025390625C13.9483,2.669110325390625,14.2649,2.669110325390625,14.4602,2.864373025390625C14.6554,3.059635025390625,14.6554,3.376217025390625,14.4602,3.571479025390625L10.06916,7.962476025390625C10.23631,8.204386025390626,10.334209999999999,8.497826025390625,10.334209999999999,8.814116025390625C10.334209999999999,9.642546025390626,9.66264,10.314116025390625,8.834209999999999,10.314116025390625C8.51791,10.314116025390625,8.22448,10.216226025390625,7.98256,10.049076025390626L3.853554,14.178126025390625C3.658291,14.373326025390625,3.341709,14.373326025390625,3.146447,14.178126025390625ZM7.67736,19.188526025390626C7.4821,18.993226025390626,7.4821,18.676626025390625,7.67736,18.481426025390626L9.9804,16.178326025390625C9.88669,15.982526025390625,9.834209999999999,15.763226025390624,9.834209999999999,15.531626025390626C9.834209999999999,14.703226025390626,10.50578,14.031626025390626,11.33421,14.031626025390626C11.56579,14.031626025390626,11.78511,14.084126025390624,11.98093,14.177826025390624L13.9804,12.178356025390626C13.8867,11.982536025390624,13.8342,11.763216025390625,13.8342,11.531636025390625C13.8342,10.703206025390624,14.5058,10.031636025390625,15.3342,10.031636025390625C15.5658,10.031636025390625,15.7851,10.084116025390625,15.9809,10.177826025390626L18.284,7.874796025390625C18.4792,7.679536025390625,18.7958,7.679536025390625,18.9911,7.874796025390625C19.1863,8.070056025390624,19.1863,8.386636025390626,18.9911,8.581906025390625L16.688000000000002,10.884936025390624C16.7817,11.080756025390626,16.8342,11.300066025390626,16.8342,11.531636025390625C16.8342,12.360066025390624,16.162599999999998,13.031626025390626,15.3342,13.031626025390626C15.1026,13.031626025390626,14.8833,12.979126025390626,14.6875,12.885426025390625L12.68803,14.884926025390625C12.78174,15.080726025390625,12.83421,15.300026025390626,12.83421,15.531626025390626C12.83421,16.360026025390624,12.16264,17.031626025390626,11.33421,17.031626025390626C11.10264,17.031626025390626,10.88333,16.979126025390627,10.68751,16.885426025390625L8.38446,19.188526025390626C8.1892,19.383726025390626,7.87262,19.383726025390626,7.67736,19.188526025390626Z stroke-opacity=0 stroke=none>');
const mM = () => yM();
var _M = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M3.3367688759765626,12.63173C3.5320318759765623,12.82699,3.8486138759765627,12.82699,4.043876875976562,12.63173L11.822052875976562,4.853553C12.017312875976563,4.658291,12.017312875976563,4.341708,11.822052875976562,4.146446C11.626792875976562,3.9511843,11.310202875976563,3.9511843,11.114942875976563,4.146446L3.3367688759765626,11.92462C3.1415071759765625,12.11988,3.1415071759765625,12.43647,3.3367688759765626,12.63173ZM5.001492875976562,17.0351C4.806232875976562,16.8399,4.806232875976562,16.5233,5.001492875976562,16.328L7.304532875976562,14.025C7.210822875976563,13.82916,7.158352875976563,13.60984,7.158352875976563,13.37827C7.158352875976563,12.54984,7.829922875976562,11.87827,8.658352875976561,11.87827C8.889922875976563,11.87827,9.109232875976563,11.93075,9.305052875976562,12.02446L11.304532875976562,10.02498C11.210822875976563,9.82916,11.158352875976561,9.60984,11.158352875976561,9.37827C11.158352875976561,8.54984,11.829922875976562,7.8782700000000006,12.658352875976563,7.8782700000000006C12.889922875976563,7.8782700000000006,13.109232875976563,7.93075,13.305022875976562,8.024460000000001L15.608122875976562,5.72142C15.803322875976562,5.5261499999999995,16.119922875976563,5.5261499999999995,16.315222875976563,5.72142C16.510422875976563,5.9166799999999995,16.510422875976563,6.23326,16.315222875976563,6.42852L14.012122875976562,8.73156C14.105822875976562,8.92738,14.158322875976562,9.1467,14.158322875976562,9.37827C14.158322875976562,10.2067,13.486822875976562,10.87827,12.658352875976563,10.87827C12.426772875976562,10.87827,12.207452875976562,10.82579,12.011642875976563,10.73209L10.012162875976562,12.73156C10.105872875976562,12.92738,10.158352875976561,13.1467,10.158352875976561,13.37827C10.158352875976561,14.2067,9.486772875976563,14.8783,8.658352875976561,14.8783C8.426772875976562,14.8783,8.207452875976562,14.8258,8.011642875976563,14.7321L5.708602875976562,17.0351C5.513342875976562,17.2304,5.196752875976562,17.2304,5.001492875976562,17.0351ZM10.415712875976563,18.328C10.220452875976562,18.5233,9.903862875976563,18.5233,9.708602875976563,18.328C9.513342875976562,18.1328,9.513342875976562,17.816200000000002,9.708602875976563,17.6209L12.304532875976562,15.025C12.210822875976563,14.8292,12.158352875976563,14.6098,12.158352875976563,14.3783C12.158352875976563,13.54984,12.829922875976562,12.87827,13.658322875976562,12.87827C13.889922875976563,12.87827,14.109222875976563,12.93075,14.305022875976562,13.02446L17.486822875976564,9.84274C17.682022875976564,9.64747,17.99862287597656,9.64747,18.19392287597656,9.84274C18.38912287597656,10.038,18.38912287597656,10.35458,18.19392287597656,10.54984L15.012122875976562,13.73156C15.105822875976562,13.92738,15.158322875976562,14.1467,15.158322875976562,14.3783C15.158322875976562,15.2067,14.486822875976562,15.8783,13.658322875976562,15.8783C13.426822875976562,15.8783,13.207422875976562,15.8258,13.011642875976563,15.7321L10.415712875976563,18.328Z stroke-opacity=0 stroke=none>');
const xM = () => _M();
var bM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M13.1889,6C12.98303,6.582599999999999,12.42741,7,11.7743,7C11.12119,7,10.565570000000001,6.582599999999999,10.35965,6L3.5,6C3.223857,6,3,5.77614,3,5.5C3,5.22386,3.223857,5,3.5,5L10.35965,5C10.565570000000001,4.417404,11.12119,4,11.7743,4C12.42741,4,12.98303,4.417404,13.1889,5L18.5,5C18.7761,5,19,5.22386,19,5.5C19,5.77614,18.7761,6,18.5,6L13.1889,6ZM3,8.5C3,8.22386,3.223857,8,3.5,8L18.5,8C18.7761,8,19,8.22386,19,8.5C19,8.77614,18.7761,9,18.5,9L3.5,9C3.223857,9,3,8.77614,3,8.5ZM3.278549,11.5C3.278549,11.22386,3.502407,11,3.778549,11L18.7785,11C19.0547,11,19.2785,11.22386,19.2785,11.5C19.2785,11.77614,19.0547,12,18.7785,12L3.778549,12C3.502407,12,3.278549,11.77614,3.278549,11.5ZM3.139267,14.5C3.139267,14.2239,3.363124,14,3.6392670000000003,14L18.6393,14C18.915399999999998,14,19.1393,14.2239,19.1393,14.5C19.1393,14.7761,18.915399999999998,15,18.6393,15L3.6392670000000003,15C3.363124,15,3.139267,14.7761,3.139267,14.5ZM13.1889,18C12.98303,18.5826,12.42741,19,11.7743,19C11.12119,19,10.565570000000001,18.5826,10.35965,18L3.778549,18C3.502407,18,3.278549,17.7761,3.278549,17.5C3.278549,17.2239,3.502407,17,3.778549,17L10.35965,17C10.565570000000001,16.4174,11.12119,16,11.7743,16C12.42741,16,12.98303,16.4174,13.1889,17L18.7785,17C19.0547,17,19.2785,17.2239,19.2785,17.5C19.2785,17.7761,19.0547,18,18.7785,18L13.1889,18Z stroke-opacity=0 stroke=none>');
const CM = () => bM();
var SM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M4.91465,6C4.70873,6.582599999999999,4.15311,7,3.5,7C2.671573,7,2,6.32843,2,5.5C2,4.671573,2.671573,4,3.5,4C4.15311,4,4.70873,4.417404,4.91465,5L18.2257,5C18.5018,5,18.7257,5.22386,18.7257,5.5C18.7257,5.77614,18.5018,6,18.2257,6L4.91465,6ZM2.7257,8.5C2.7257,8.22386,2.949558,8,3.2257,8L18.2257,8C18.5018,8,18.7257,8.22386,18.7257,8.5C18.7257,8.77614,18.5018,9,18.2257,9L3.2257,9C2.949558,9,2.7257,8.77614,2.7257,8.5ZM3.00425,11.5C3.00425,11.22386,3.22811,11,3.50425,11L18.5042,11C18.7804,11,19.0042,11.22386,19.0042,11.5C19.0042,11.77614,18.7804,12,18.5042,12L3.50425,12C3.22811,12,3.00425,11.77614,3.00425,11.5ZM2.864967,14.5C2.864967,14.2239,3.08882,14,3.36497,14L18.365,14C18.6411,14,18.865,14.2239,18.865,14.5C18.865,14.7761,18.6411,15,18.365,15L3.36497,15C3.08882,15,2.864967,14.7761,2.864967,14.5ZM20,17.5C20,18.328400000000002,19.3284,19,18.5,19C17.846899999999998,19,17.2913,18.5826,17.0854,18L3.50425,18C3.22811,18,3.00425,17.7761,3.00425,17.5C3.00425,17.2239,3.22811,17,3.50425,17L17.0854,17C17.2913,16.4174,17.846899999999998,16,18.5,16C19.3284,16,20,16.671599999999998,20,17.5Z stroke-opacity=0 stroke=none>');
const wM = () => SM();
var kM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><ellipse cx=10.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=17.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=10.5 cy=11.5 rx=7 ry=7 fill-opacity=0 stroke-opacity=1 fill=none stroke-width=1></ellipse><ellipse cx=10.5 cy=11.5 rx=5 ry=5 fill-opacity=0 stroke-opacity=1 fill=none stroke-width=1></ellipse><ellipse cx=10.5 cy=11.5 rx=3 ry=3 fill-opacity=0 stroke-opacity=1 fill=none stroke-width=1>');
const LM = () => kM();
var PM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M3,7.32468C5.90649,3.3893050000000002,11.49833,2.81306,14.6674,6.31944C14.9056,6.1554199999999994,15.192,6.05979,15.5,6.05979C15.845,6.05979,16.1628,6.17974,16.4162,6.381349999999999L18.4509,4.23827L19,4.816615L16.8945,7.03429C16.962600000000002,7.21075,17,7.40319,17,7.60463C17,8.45782,16.328400000000002,9.14947,15.5,9.14947C14.6716,9.14947,14,8.45782,14,7.60463C14,7.36402,14.0534,7.13625,14.1487,6.93322C11.32695,3.748365,6.25159,4.253956,3.612785,7.82695L3,7.32468ZM14.09,15.4717C15.7427,13.78985,16.244500000000002,11.524740000000001,15.5633,9.30134L15.5618,9.30134L16.3012,9.0502C17.072400000000002,11.56646,16.497700000000002,14.158,14.6282,16.0599C12.28737,18.442,8.62386,18.6988,6.41348,16.4501C4.5526,14.5572,4.52076,11.19671,6.36766,9.3177C7.89069,7.76754,10.07544,7.706189999999999,11.56741,9.22363C11.95453,9.61742,12.24817,10.08363,12.43369,10.57677L14.1451,8.77421L14.6942,9.35256L12.64982,11.50582C12.65827,11.59712,12.66295,11.68839,12.66378,11.77936C12.87398,12.04523,13,12.38451,13,12.7541C13,13.60729,12.32843,14.2989,11.5,14.2989C10.67157,14.2989,10,13.60729,10,12.7541C10,11.90091,10.67157,11.20926,11.5,11.20926C11.60387,11.20926,11.70528,11.220130000000001,11.8032,11.240829999999999L11.81763,11.22564C11.69858,10.71874,11.42858,10.21929,11.0284,9.81179C9.844000000000001,8.60765,8.136890000000001,8.65592,6.90822,9.90586C5.37975,11.460930000000001,5.40693,14.288,6.95404,15.8619C8.84598,17.7867,12.03496,17.5626,14.09,15.4717Z stroke-opacity=0 stroke=none>');
const IM = () => PM();
var AM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M4,17.0854L4,3.5C4,3.223858,4.22386,3,4.5,3C4.77614,3,5,3.223858,5,3.5L5,10L7.57584,10L9.8127,4.46359C9.91614,4.20756,10.20756,4.08386,10.46359,4.1873000000000005C10.71963,4.29075,10.84333,4.58216,10.73988,4.8382000000000005L8.65438,10L11.08535,10C11.29127,9.4174,11.84689,9,12.5,9C12.65154,9,12.79784,9.02247,12.93573,9.06427L16.6464,5.35355C16.8417,5.15829,17.1583,5.15829,17.3536,5.35355C17.5488,5.54882,17.5488,5.8654,17.3536,6.06066L13.7475,9.66675C13.907,9.90508,14,10.19168,14,10.5C14,11.15311,13.5826,11.70873,13,11.91465L13,14.3638L18.3714,12.1936C18.6274,12.09015,18.918799999999997,12.21385,19.0222,12.46989C19.1257,12.72592,19.002,13.0173,18.746000000000002,13.1208L13,15.4423L13,18L19.5,18C19.7761,18,20,18.2239,20,18.5C20,18.7761,19.7761,19,19.5,19L5.91465,19C5.70873,19.5826,5.15311,20,4.5,20C3.671573,20,3,19.3284,3,18.5C3,17.846899999999998,3.417404,17.2913,4,17.0854ZM6.3729499999999994,17.0413L12,14.7678L12,11.91465C11.88136,11.87271,11.76956,11.81627,11.66675,11.74746L6.3729499999999994,17.0413ZM12,15.8463L6.6694700000000005,18L12,18L12,15.8463ZM6.38629,15.6137L8.250350000000001,11L11,11L6.38629,15.6137ZM5,11L7.17182,11L5,16.3754L5,11Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const $M = () => AM();
var TM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M17,4.5C17,5.32843,16.328400000000002,6,15.5,6C15.0931,6,14.7241,5.83802,14.4539,5.57503L5.98992,8.32515C5.99658,8.38251,6,8.440850000000001,6,8.5C6,9.15311,5.582599999999999,9.70873,5,9.91465L5,11.08535C5.42621,11.236,5.763999999999999,11.57379,5.91465,12L19.5,12C19.7761,12,20,12.22386,20,12.5C20,12.77614,19.7761,13,19.5,13L5.91465,13C5.70873,13.5826,5.15311,14,4.5,14C3.671573,14,3,13.3284,3,12.5C3,11.84689,3.417404,11.29127,4,11.08535L4,9.91465C3.417404,9.70873,3,9.15311,3,8.5C3,7.67157,3.671573,7,4.5,7C4.90411,7,5.2709,7.15981,5.5406200000000005,7.41967L14.0093,4.66802C14.0032,4.6128599999999995,14,4.5568,14,4.5C14,3.671573,14.6716,3,15.5,3C16.328400000000002,3,17,3.671573,17,4.5ZM4,15.5C4,15.2239,4.22386,15,4.5,15L19.5,15C19.7761,15,20,15.2239,20,15.5C20,15.7761,19.7761,16,19.5,16L4.5,16C4.22386,16,4,15.7761,4,15.5ZM4,18.5C4,18.2239,4.22386,18,4.5,18L19.5,18C19.7761,18,20,18.2239,20,18.5C20,18.7761,19.7761,19,19.5,19L4.5,19C4.22386,19,4,18.7761,4,18.5Z stroke-opacity=0 stroke=none>');
const MM = () => TM();
var EM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M20,3.5C20,4.15311,19.5826,4.70873,19,4.91465L19,18.5C19,18.7761,18.7761,19,18.5,19L4.91465,19C4.70873,19.5826,4.15311,20,3.5,20C2.671573,20,2,19.3284,2,18.5C2,17.846899999999998,2.417404,17.2913,3,17.0854L3,3.5C3,3.22386,3.22386,3,3.5,3L17.0854,3C17.2913,2.417404,17.846899999999998,2,18.5,2C19.3284,2,20,2.671573,20,3.5ZM17.0854,4C17.236,4.42621,17.5738,4.763999999999999,18,4.91465L18,8L14,8L14,4L17.0854,4ZM13,4L13,8L9,8L9,4L13,4ZM13,9L9,9L9,13L13,13L13,9ZM13,14L9,14L9,18L13,18L13,14ZM14,18L14,14L18,14L18,18L14,18ZM18,13L14,13L14,9L18,9L18,13ZM4.91465,18C4.763999999999999,17.5738,4.42621,17.236,4,17.0854L4,14L8,14L8,18L4.91465,18ZM4,8L4,4L8,4L8,8L4,8ZM8,9L8,13L4,13L4,9L8,9Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const DM = () => EM();
var FM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><ellipse cx=10.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=17.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=10.5 cy=11.5 rx=7 ry=7 fill-opacity=0 fill=none stroke-opacity=1 stroke-width=1>');
const OM = () => FM();
var RM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11.57625,6.9981C11.55099,6.999359999999999,11.52557,7,11.5,7C11.34,7,11.18584,6.97495,11.04125,6.9285499999999995L5.55401,16.4327C5.713760000000001,16.5905,5.83826,16.7839,5.91465,17L16.0854,17C16.2187,16.622700000000002,16.4987,16.314700000000002,16.8569,16.1445L11.57625,6.9981ZM12.50759,6.611219999999999C12.81005,6.336790000000001,13,5.94058,13,5.5C13,4.671573,12.32843,4,11.5,4C10.67157,4,10,4.671573,10,5.5C10,5.80059,10.08841,6.08052,10.24066,6.31522L4.64514,16.0069C4.59738,16.002299999999998,4.54896,16,4.5,16C3.671573,16,3,16.671599999999998,3,17.5C3,18.328400000000002,3.671573,19,4.5,19C5.15311,19,5.70873,18.5826,5.91465,18L16.0854,18C16.2913,18.5826,16.846899999999998,19,17.5,19C18.328400000000002,19,19,18.328400000000002,19,17.5C19,16.8365,18.5691,16.2735,17.971899999999998,16.075699999999998L12.50759,6.611219999999999Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const BM = () => RM();
var NM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M19,4.5C19,5.15311,18.5826,5.70873,18,5.91465L18,18.5C18,18.7761,17.7761,19,17.5,19L5.91465,19C5.70873,19.5826,5.15311,20,4.5,20C3.671573,20,3,19.3284,3,18.5C3,17.846899999999998,3.417404,17.2913,4,17.0854L4,4.5C4,4.22386,4.22386,4,4.5,4L16.0854,4C16.2913,3.417404,16.846899999999998,3,17.5,3C18.328400000000002,3,19,3.671573,19,4.5ZM5,5L16.0854,5C16.236,5.42621,16.5738,5.763999999999999,17,5.91465L17,18L5.91465,18C5.763999999999999,17.5738,5.42621,17.236,5,17.0854L5,5Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const zM = () => NM();
var VM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M19.6401,7.99355C20.4028,7.92291,21,7.2811900000000005,21,6.5C21,5.671573,20.3284,5,19.5,5C18.8469,5,18.2913,5.417404,18.0854,6L7.62067,6C7.34453,6,7.12067,6.22386,7.12067,6.5C7.12067,6.5479,7.12741,6.59423,7.13999,6.63809L3.2294099999999997,15.0243C2.530138,15.1517,2,15.764,2,16.5C2,17.328400000000002,2.671573,18,3.5,18C4.15311,18,4.70873,17.5826,4.91465,17L14.5963,17C14.6456,17.076,14.7162,17.1396,14.8044,17.1807C15.0546,17.2974,15.3521,17.1891,15.4688,16.9388L19.6401,7.99355ZM14.7896,16.0293L18.6551,7.739599999999999C18.3942,7.56144,18.1925,7.30307,18.0854,7L8.0746,7L4.25044,15.2009C4.55701,15.3784,4.79493,15.6613,4.91465,16L14.6207,16C14.68,16,14.7368,16.0103,14.7896,16.0293Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const WM = () => VM();
var YM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M8.134443814697265,7.494615087890625L8.764323814697265,7.494615087890625L8.764323814697265,3.414215087890625L8.310223814697267,3.414215087890625L7.294603814697266,4.005035087890625L7.289713814697266,4.634915087890625L8.134443814697265,4.149892087890625L8.134443814697265,7.494615087890625ZM18.832003814697266,6.933095087890624Q19.004603814697266,6.635245087890625,19.004603814697266,6.2543850878906255Q19.004603814697266,5.884915087890625,18.845103814697264,5.593575087890625Q18.685503814697267,5.3006050878906255,18.399103814697266,5.136225087890625Q18.114303814697266,4.9702050878906245,17.754603814697266,4.9653250878906245L18.820603814697265,3.840647087890625L18.820603814697265,3.414215087890625L16.519203814697264,3.414215087890625L16.519203814697264,3.939931087890625L18.050803814697264,3.939931087890625L16.719403814697266,5.334785087890625L17.074203814697263,5.7205350878906245Q17.254903814697265,5.484525087890625,17.619503814697268,5.484525087890625Q17.980803814697268,5.484525087890625,18.187503814697266,5.689605087890625Q18.394203814697267,5.894685087890625,18.394203814697267,6.2543850878906255Q18.394203814697267,6.604315087890625,18.187503814697266,6.822415087890625Q17.980803814697268,7.0405150878906255,17.640603814697265,7.0405150878906255Q17.334603814697267,7.0405150878906255,17.124703814697266,6.890775087890625Q16.914703814697265,6.739415087890626,16.820303814697265,6.469225087890624L16.354803814697263,6.744295087890626Q16.480103814697266,7.125155087890625,16.821903814697265,7.341625087890625Q17.165403814697264,7.559725087890625,17.640603814697265,7.559725087890625Q18.039403814697266,7.559725087890625,18.348603814697267,7.393705087890625Q18.659503814697267,7.229315087890625,18.832003814697266,6.933095087890624ZM10.000003814697266,10.634915087890626C10.000003814697266,11.024655087890626,9.851363814697265,11.379685087890625,9.607683814697266,11.646395087890625L12.168903814697266,15.171615087890626C12.275403814697265,15.147615087890625,12.386203814697266,15.134915087890626,12.500003814697266,15.134915087890626C12.596503814697266,15.134915087890626,12.690803814697265,15.144015087890624,12.782303814697265,15.161415087890624L16.108803814697268,11.196955087890625C16.038703814697264,11.023375087890624,16.000003814697266,10.833655087890625,16.000003814697266,10.634915087890626C16.000003814697266,9.806495087890625,16.671603814697264,9.134915087890626,17.500003814697266,9.134915087890626C18.328403814697264,9.134915087890626,19.000003814697266,9.806495087890625,19.000003814697266,10.634915087890626C19.000003814697266,11.463345087890625,18.328403814697264,12.134915087890626,17.500003814697266,12.134915087890626C17.239503814697265,12.134915087890626,16.994503814697268,12.068495087890625,16.781003814697264,11.951675087890624L13.654703814697266,15.677415087890624C13.870303814697266,15.937215087890625,14.000003814697266,16.270915087890625,14.000003814697266,16.634915087890626C14.000003814697266,17.463315087890624,13.328403814697266,18.134915087890626,12.500003814697266,18.134915087890626C11.671573814697265,18.134915087890626,11.000003814697266,17.463315087890624,11.000003814697266,16.634915087890626C11.000003814697266,16.284415087890626,11.120193814697265,15.962015087890626,11.321603814697266,15.706715087890625L8.715393814697265,12.119565087890624C8.645053814697267,12.129685087890625,8.573143814697266,12.134915087890626,8.500003814697266,12.134915087890626C8.162103814697264,12.134915087890626,7.8503038146972655,12.023195087890626,7.599523814697266,11.834665087890626L4.505583814697266,15.521915087890624C4.809213814697266,15.796415087890624,5.000003814697266,16.193415087890624,5.000003814697266,16.634915087890626C5.000003814697266,17.463315087890624,4.328433814697266,18.134915087890626,3.5000038146972656,18.134915087890626C2.6715768146972656,18.134915087890626,2.0000038146972656,17.463315087890624,2.0000038146972656,16.634915087890626C2.0000038146972656,15.806515087890626,2.6715768146972656,15.134915087890626,3.5000038146972656,15.134915087890626C3.508253814697266,15.134915087890626,3.5164838146972657,15.135015087890626,3.524703814697266,15.135115087890625L7.033823814697266,10.953115087890625C7.011673814697265,10.850565087890626,7.000003814697266,10.744105087890624,7.000003814697266,10.634915087890626C7.000003814697266,9.806495087890625,7.671573814697266,9.134915087890626,8.500003814697266,9.134915087890626C9.328433814697267,9.134915087890626,10.000003814697266,9.806495087890625,10.000003814697266,10.634915087890626Z stroke-opacity=0 stroke=none>');
const XM = () => YM();
var ZM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M8.13444,7.494615087890625L8.76432,7.494615087890625L8.76432,3.414215087890625L8.310220000000001,3.414215087890625L7.2946,4.005035087890625L7.28971,4.634915087890625L8.13444,4.149892087890625L8.13444,7.494615087890625ZM18.832,6.929835087890625Q19.0046,6.635245087890625,19.0046,6.2543850878906255Q19.0046,5.889805087890625,18.8451,5.5952050878906245Q18.6855,5.3006050878906255,18.3975,5.132965087890625Q18.1094,4.9653250878906245,17.7399,4.9653250878906245Q17.435499999999998,4.9653250878906245,17.1556,5.149245087890625L17.2793,3.939931087890625L18.8304,3.939931087890625L18.8304,3.414215087890625L16.7406,3.414215087890625L16.5094,5.665195087890625L17.0156,5.795405087890625Q17.095399999999998,5.655425087890626,17.2516,5.570795087890625Q17.4095,5.484525087890625,17.6357,5.484525087890625Q17.9694,5.484525087890625,18.1842,5.697745087890625Q18.4007,5.909335087890625,18.4007,6.2543850878906255Q18.4007,6.604315087890625,18.1842,6.822415087890625Q17.9694,7.0405150878906255,17.6292,7.0405150878906255Q17.3298,7.0405150878906255,17.119799999999998,6.890775087890625Q16.9098,6.739415087890626,16.825200000000002,6.474115087890625L16.3597,6.749175087890626Q16.470399999999998,7.110505087890624,16.807299999999998,7.335115087890625Q17.144199999999998,7.559725087890625,17.6292,7.559725087890625Q18.0296,7.559725087890625,18.3438,7.392075087890625Q18.6595,7.224435087890625,18.832,6.929835087890625ZM10,10.634915087890626C10,11.024655087890626,9.85136,11.379685087890625,9.60768,11.646395087890625L12.1689,15.171615087890626C12.2754,15.147615087890625,12.3862,15.134915087890626,12.5,15.134915087890626C12.5965,15.134915087890626,12.6908,15.144015087890624,12.7823,15.161415087890624L16.108800000000002,11.196955087890625C16.0387,11.023375087890624,16,10.833655087890625,16,10.634915087890626C16,9.806495087890625,16.671599999999998,9.134915087890626,17.5,9.134915087890626C18.3284,9.134915087890626,19,9.806495087890625,19,10.634915087890626C19,11.463345087890625,18.3284,12.134915087890626,17.5,12.134915087890626C17.2395,12.134915087890626,16.994500000000002,12.068505087890625,16.781,11.951675087890624L13.6547,15.677415087890624C13.8703,15.937215087890625,14,16.270915087890625,14,16.634915087890626C14,17.463315087890624,13.3284,18.134915087890626,12.5,18.134915087890626C11.67157,18.134915087890626,11,17.463315087890624,11,16.634915087890626C11,16.284415087890626,11.12019,15.962015087890626,11.3216,15.706715087890625L8.71539,12.119565087890624C8.645050000000001,12.129685087890625,8.57314,12.134915087890626,8.5,12.134915087890626C8.162099999999999,12.134915087890626,7.8503,12.023195087890626,7.59952,11.834665087890626L4.50558,15.521915087890624C4.80921,15.796415087890624,5,16.193415087890624,5,16.634915087890626C5,17.463315087890624,4.32843,18.134915087890626,3.5,18.134915087890626C2.671573,18.134915087890626,2,17.463315087890624,2,16.634915087890626C2,15.806515087890626,2.671573,15.134915087890626,3.5,15.134915087890626C3.5082500000000003,15.134915087890626,3.51648,15.135015087890626,3.5247,15.135115087890625L7.03382,10.953115087890625C7.01167,10.850565087890626,7,10.744105087890624,7,10.634915087890626C7,9.806495087890625,7.67157,9.134915087890626,8.5,9.134915087890626C9.32843,9.134915087890626,10,9.806495087890625,10,10.634915087890626Z stroke-opacity=0 stroke=none>');
const UM = () => ZM();
var KM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M18.8532,7.020985087890625Q19.0257,6.734525087890625,19.0257,6.369945087890625Q19.0257,6.020005087890625,18.8499,5.754705087890625Q18.6758,5.489415087890626,18.3649,5.339675087890625Q18.5944,5.209465087890625,18.7214,4.994615087890625Q18.8499,4.779775087890625,18.8499,4.5193550878906255Q18.8499,4.2003480878906245,18.7002,3.951324087890625Q18.5505,3.700673087890625,18.277,3.557444087890625Q18.0052,3.414215087890625,17.6455,3.414215087890625Q17.285800000000002,3.414215087890625,17.0107,3.557444087890625Q16.7357,3.700673087890625,16.5843,3.951324087890625Q16.4346,4.2003480878906245,16.4346,4.5193550878906255Q16.4346,4.779775087890625,16.561500000000002,4.994615087890625Q16.6901,5.209465087890625,16.919600000000003,5.339675087890625Q16.6055,5.489415087890626,16.4297,5.757965087890625Q16.255499999999998,6.024895087890625,16.255499999999998,6.369945087890625Q16.255499999999998,6.734525087890625,16.4297,7.020985087890625Q16.6055,7.305815087890625,16.919600000000003,7.465325087890625Q17.2354,7.624825087890625,17.6455,7.624825087890625Q18.0557,7.624825087890625,18.3682,7.465325087890625Q18.6807,7.305815087890625,18.8532,7.020985087890625ZM8.76432,7.559725087890625L8.13444,7.559725087890625L8.13444,4.214996087890625L7.28971,4.700025087890625L7.2946,4.070139087890625L8.310220000000001,3.479319087890625L8.76432,3.479319087890625L8.76432,7.559725087890625ZM17.1816,4.955555087890625Q17.0042,4.784655087890625,17.0042,4.5095950878906255Q17.0042,4.229645087890625,17.18,4.057119087890625Q17.355800000000002,3.884592087890625,17.6455,3.884592087890625Q17.935200000000002,3.884592087890625,18.1077,4.057119087890625Q18.2803,4.229645087890625,18.2803,4.5095950878906255Q18.2803,4.784655087890625,18.1045,4.955555087890625Q17.930300000000003,5.124825087890625,17.6455,5.124825087890625Q17.3607,5.124825087890625,17.1816,4.955555087890625ZM18.2217,5.7953950878906255Q18.4398,6.005365087890625,18.4398,6.3552950878906245Q18.4398,6.705235087890625,18.2217,6.915195087890625Q18.0052,7.125155087890625,17.6455,7.125155087890625Q17.285800000000002,7.125155087890625,17.067700000000002,6.915195087890625Q16.849600000000002,6.705235087890625,16.849600000000002,6.3552950878906245Q16.849600000000002,6.005365087890625,17.064500000000002,5.7953950878906255Q17.2793,5.585435087890625,17.6455,5.585435087890625Q18.0052,5.585435087890625,18.2217,5.7953950878906255ZM9.60768,11.711495087890626C9.85136,11.444785087890626,10,11.089765087890626,10,10.700025087890625C10,9.871595087890626,9.32843,9.200025087890625,8.5,9.200025087890625C7.67157,9.200025087890625,7,9.871595087890626,7,10.700025087890625C7,10.809205087890625,7.01167,10.915665087890625,7.03382,11.018215087890624L3.5247,15.200215087890625C3.51648,15.200115087890625,3.5082500000000003,15.200015087890625,3.5,15.200015087890625C2.671573,15.200015087890625,2,15.871615087890625,2,16.700015087890627C2,17.528415087890625,2.671573,18.200015087890627,3.5,18.200015087890627C4.32843,18.200015087890627,5,17.528415087890625,5,16.700015087890627C5,16.258515087890625,4.80921,15.861515087890625,4.50558,15.587015087890626L7.59952,11.899765087890625C7.8503,12.088295087890625,8.162099999999999,12.200025087890625,8.5,12.200025087890625C8.57314,12.200025087890625,8.645050000000001,12.194785087890626,8.71539,12.184675087890625L11.3216,15.771815087890625C11.12019,16.027215087890625,11,16.349515087890623,11,16.700015087890627C11,17.528415087890625,11.67157,18.200015087890627,12.5,18.200015087890627C13.3284,18.200015087890627,14,17.528415087890625,14,16.700015087890627C14,16.336015087890623,13.8703,16.002315087890626,13.6547,15.742515087890625L16.781,12.016775087890625C16.994500000000002,12.133605087890626,17.2395,12.200025087890625,17.5,12.200025087890625C18.3284,12.200025087890625,19,11.528445087890624,19,10.700025087890625C19,9.871595087890626,18.3284,9.200025087890625,17.5,9.200025087890625C16.671599999999998,9.200025087890625,16,9.871595087890626,16,10.700025087890625C16,10.898765087890624,16.0387,11.088475087890625,16.108800000000002,11.262055087890625L12.7823,15.226515087890625C12.6908,15.209115087890625,12.5965,15.200015087890625,12.5,15.200015087890625C12.3862,15.200015087890625,12.2754,15.212715087890626,12.1689,15.236715087890625L9.60768,11.711495087890626Z stroke-opacity=0 stroke=none>');
const HM = () => KM();
var GM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M9.474616630859375,7.494615087890625L8.844736630859375,7.494615087890625L8.844736630859375,4.149892087890625L8.000006630859374,4.634915087890625L8.004896630859374,4.005035087890625L9.020516630859376,3.414215087890625L9.474616630859375,3.414215087890625L9.474616630859375,7.494615087890625ZM18.529296630859378,4.8318550878906255Q18.307996630859375,5.028795087890625,18.122396630859377,5.385245087890625Q17.868496630859376,5.019035087890625,17.629196630859376,4.8269750878906255Q17.389996630859375,4.634915087890625,17.168596630859376,4.634915087890625Q16.794296630859375,4.634915087890625,16.522496630859376,4.976715087890625Q16.252296630859377,5.3168850878906255,16.252296630859377,5.7856350878906255Q16.252296630859377,6.218575087890625,16.502896630859375,6.521315087890625Q16.755196630859373,6.822415087890625,17.114896630859377,6.822415087890625Q17.368796630859375,6.822415087890625,17.588596630859374,6.625475087890624Q17.809896630859377,6.428535087890625,17.998696630859374,6.0688350878906245Q18.249396630859373,6.439935087890625,18.488596630859377,6.631985087890625Q18.727896630859377,6.822415087890625,18.952496630859375,6.822415087890625Q19.326796630859373,6.822415087890625,19.596996630859376,6.482245087890625Q19.868796630859375,6.140455087890626,19.868796630859375,5.671705087890626Q19.868796630859375,5.238755087890625,19.618196630859376,4.937655087890625Q19.367496630859375,4.634915087890625,19.006196630859375,4.634915087890625Q18.750696630859377,4.634915087890625,18.529296630859378,4.8318550878906255ZM18.337296630859377,5.674955087890625L18.278696630859375,5.596835087890625Q18.449596630859375,5.272935087890625,18.622096630859374,5.1101750878906245Q18.794596630859374,4.947415087890625,18.967096630859373,4.947415087890625Q19.194996630859375,4.947415087890625,19.346396630859374,5.1345950878906255Q19.497696630859377,5.320135087890625,19.497696630859377,5.598455087890625Q19.497696630859377,5.8914250878906245,19.360996630859376,6.096505087890625Q19.224296630859374,6.301585087890626,19.027396630859375,6.301585087890626Q18.915096630859374,6.301585087890626,18.742496630859375,6.146965087890624Q18.569996630859375,5.992335087890625,18.337296630859377,5.674955087890625ZM17.785496630859377,5.779125087890625L17.842496630859372,5.857245087890625Q17.668296630859373,6.186025087890625,17.495796630859374,6.348785087890625Q17.324896630859374,6.509915087890625,17.153996630859375,6.509915087890625Q16.926096630859377,6.509915087890625,16.774796630859377,6.324375087890624Q16.623396630859375,6.137195087890625,16.623396630859375,5.858875087890625Q16.623396630859375,5.565905087890625,16.761696630859376,5.360825087890625Q16.900096630859373,5.1557550878906255,17.095396630859376,5.1557550878906255Q17.228896630859374,5.1557550878906255,17.365596630859375,5.2778250878906245Q17.502296630859377,5.399895087890625,17.785496630859377,5.779125087890625ZM10.710296630859375,10.634915087890626C10.710296630859375,11.024655087890626,10.561656630859375,11.379685087890625,10.317976630859375,11.646395087890625L12.879196630859376,15.171615087890626C12.985696630859374,15.147615087890625,13.096496630859376,15.134915087890626,13.210296630859375,15.134915087890626C13.306796630859376,15.134915087890626,13.401096630859374,15.144015087890624,13.492596630859374,15.161415087890624L16.819096630859377,11.196955087890625C16.748996630859374,11.023375087890624,16.710296630859375,10.833655087890625,16.710296630859375,10.634915087890626C16.710296630859375,9.806495087890625,17.381896630859373,9.134915087890626,18.210296630859375,9.134915087890626C19.038696630859373,9.134915087890626,19.710296630859375,9.806495087890625,19.710296630859375,10.634915087890626C19.710296630859375,11.463345087890625,19.038696630859373,12.134915087890626,18.210296630859375,12.134915087890626C17.949796630859375,12.134915087890626,17.704796630859377,12.068505087890625,17.491296630859374,11.951675087890624L14.364996630859375,15.677415087890624C14.580596630859375,15.937215087890625,14.710296630859375,16.270915087890625,14.710296630859375,16.634915087890626C14.710296630859375,17.463315087890624,14.038696630859375,18.134915087890626,13.210296630859375,18.134915087890626C12.381866630859374,18.134915087890626,11.710296630859375,17.463315087890624,11.710296630859375,16.634915087890626C11.710296630859375,16.284415087890626,11.830486630859374,15.962015087890626,12.031896630859375,15.706715087890625L9.425686630859374,12.119565087890624C9.355346630859376,12.129685087890625,9.283436630859375,12.134915087890626,9.210296630859375,12.134915087890626C8.872396630859374,12.134915087890626,8.560596630859376,12.023195087890626,8.309816630859375,11.834665087890626L5.215876630859375,15.521915087890624C5.519506630859375,15.796415087890624,5.710296630859375,16.193415087890624,5.710296630859375,16.634915087890626C5.710296630859375,17.463315087890624,5.038726630859375,18.134915087890626,4.210296630859375,18.134915087890626C3.381869630859375,18.134915087890626,2.710296630859375,17.463315087890624,2.710296630859375,16.634915087890626C2.710296630859375,15.806515087890626,3.381869630859375,15.134915087890626,4.210296630859375,15.134915087890626C4.218546630859375,15.134915087890626,4.226776630859375,15.135015087890626,4.234996630859375,15.135115087890625L7.744116630859375,10.953115087890625C7.721966630859375,10.850565087890626,7.710296630859375,10.744105087890624,7.710296630859375,10.634915087890626C7.710296630859375,9.806495087890625,8.381866630859374,9.134915087890626,9.210296630859375,9.134915087890626C10.038726630859376,9.134915087890626,10.710296630859375,9.806495087890625,10.710296630859375,10.634915087890626Z stroke-opacity=0 stroke=none>');
const QM = () => GM();
var jM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M21,5.5C21,6.32843,20.3284,7,19.5,7C19.4136,7,19.3289,6.99269,19.2465,6.97866L15.6257,15.5086C15.8587,15.7729,16,16.119999999999997,16,16.5C16,17.328400000000002,15.3284,18,14.5,18C13.8469,18,13.2913,17.5826,13.0854,17L3.91465,17C3.70873,17.5826,3.15311,18,2.5,18C1.671573,18,1,17.328400000000002,1,16.5C1,15.6716,1.671573,15,2.5,15C2.5840199999999998,15,2.66643,15.0069,2.74668,15.0202L6.36934,6.48574C6.13933,6.22213,6,5.87733,6,5.5C6,4.671573,6.67157,4,7.5,4C8.15311,4,8.70873,4.417404,8.91465,5L18.0854,5C18.2913,4.417404,18.8469,4,19.5,4C20.3284,4,21,4.671573,21,5.5ZM18.0854,6L8.91465,6C8.892579999999999,6.06243,8.8665,6.12296,8.83672,6.18128L13.9814,15.0921C14.143,15.0325,14.3177,15,14.5,15C14.584,15,14.6664,15.0069,14.7467,15.0202L18.3693,6.48574C18.2462,6.3446,18.149,6.1802,18.0854,6ZM13.2036,15.745L8.0861,6.8811800000000005C7.90605,6.95768,7.70797,7,7.5,7C7.41359,7,7.32888,6.99269,7.24647,6.97866L3.62571,15.5086C3.7512,15.651,3.8501,15.8174,3.91465,16L13.0854,16C13.1169,15.9108,13.1566,15.8255,13.2036,15.745Z stroke-opacity=0 stroke=none>');
const qM = () => jM();
var JM = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M5.92159,5.93994C6.04014,5.90529,6.152620000000001,5.85639,6.25704,5.79523L9.12729,9.89437C9.045449999999999,10.07959,9,10.28449,9,10.5C9,10.79522,9.08529,11.07053,9.232569999999999,11.30262L4.97573,16.7511L5.92159,5.93994ZM4.92259,5.8848400000000005C4.38078,5.658659999999999,4,5.1238,4,4.5C4,3.671573,4.67157,3,5.5,3C6.2157,3,6.81433,3.50124,6.96399,4.17183L15.1309,4.88634C15.3654,4.36387,15.8902,4,16.5,4C17.328400000000002,4,18,4.67157,18,5.5C18,6.08983,17.659599999999998,6.60015,17.1645,6.84518L18.4264,14.0018C18.4508,14.0006,18.4753,14,18.5,14C19.3284,14,20,14.6716,20,15.5C20,16.328400000000002,19.3284,17,18.5,17C17.932499999999997,17,17.4386,16.6849,17.183799999999998,16.22L5.99686,18.5979C5.946429999999999,19.3807,5.29554,20,4.5,20C3.671573,20,3,19.3284,3,18.5C3,17.869300000000003,3.389292,17.3295,3.94071,17.1077L4.92259,5.8848400000000005ZM5.72452,17.6334C5.69799,17.596,5.6698,17.5599,5.64004,17.525100000000002L10.01843,11.92103C10.16958,11.97223,10.33155,12,10.5,12C10.80059,12,11.08052,11.91158,11.31522,11.75934L17.0606,15.0765C17.0457,15.1271,17.0335,15.1789,17.023899999999998,15.2317L5.72452,17.6334ZM11.92855,10.95875L17.4349,14.1379L16.1699,6.96356C15.9874,6.92257,15.8174,6.8483,15.6667,6.74746L11.99771,10.4165C11.99923,10.44414,12,10.47198,12,10.5C12,10.66,11.97495,10.814160000000001,11.92855,10.95875ZM10.5,9C10.259830000000001,9,10.03285,9.05644,9.83159,9.15679L7.04919,5.1831L15.0493,5.88302C15.054,5.90072,15.059,5.91829,15.0643,5.9357299999999995L11.56066,9.43934C11.28921,9.16789,10.91421,9,10.5,9Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const eE = () => JM();
var tE = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"xmlns=http://www.w3.org/2000/svg><path d=M13.1889,6C12.98303,6.582599999999999,12.42741,7,11.7743,7C11.12119,7,10.565570000000001,6.582599999999999,10.35965,6L3.5,6C3.223857,6,3,5.77614,3,5.5C3,5.22386,3.223857,5,3.5,5L10.35965,5C10.565570000000001,4.417404,11.12119,4,11.7743,4C12.42741,4,12.98303,4.417404,13.1889,5L18.5,5C18.7761,5,19,5.22386,19,5.5C19,5.77614,18.7761,6,18.5,6L13.1889,6ZM3,8.5C3,8.22386,3.223857,8,3.5,8L18.5,8C18.7761,8,19,8.22386,19,8.5C19,8.77614,18.7761,9,18.5,9L3.5,9C3.223857,9,3,8.77614,3,8.5ZM3.278549,11.5C3.278549,11.22386,3.502407,11,3.778549,11L18.7785,11C19.0547,11,19.2785,11.22386,19.2785,11.5C19.2785,11.77614,19.0547,12,18.7785,12L3.778549,12C3.502407,12,3.278549,11.77614,3.278549,11.5ZM3.139267,14.5C3.139267,14.2239,3.363124,14,3.6392670000000003,14L18.6393,14C18.915399999999998,14,19.1393,14.2239,19.1393,14.5C19.1393,14.7761,18.915399999999998,15,18.6393,15L3.6392670000000003,15C3.363124,15,3.139267,14.7761,3.139267,14.5ZM13.1889,18C12.98303,18.5826,12.42741,19,11.7743,19C11.12119,19,10.565570000000001,18.5826,10.35965,18L3.778549,18C3.502407,18,3.278549,17.7761,3.278549,17.5C3.278549,17.2239,3.502407,17,3.778549,17L10.35965,17C10.565570000000001,16.4174,11.12119,16,11.7743,16C12.42741,16,12.98303,16.4174,13.1889,17L18.7785,17C19.0547,17,19.2785,17.2239,19.2785,17.5C19.2785,17.7761,19.0547,18,18.7785,18L13.1889,18Z stroke-opacity=0 stroke=none></path><line style="fill:rgb(216, 216, 216);stroke:rgb(0, 0, 0);"x1=3.541 y1=5.489 x2=18.636 y2=17.573>');
const rE = () => tE();
var nE = /* @__PURE__ */ ue('<svg viewBox="0 0 22 22"><path d=M4.727219638671875,8.007996215820313L9.973849638671876,2.7629472158203123C10.167279638671875,2.5696791158203123,10.480729638671875,2.5696791158203123,10.674169638671875,2.7629472158203123L13.223329638671874,5.311756215820313C13.416929638671874,5.505236215820313,13.416929638671874,5.8189862158203125,13.223329638671874,6.012466215820313L7.977129638671875,11.257906215820313C7.379859638671875,11.855176215820313,7.407609638671875,12.909396215820312,8.033809638671876,13.535596215820313C8.660409638671876,14.162596215820313,9.713849638671874,14.189996215820312,10.311129638671876,13.591896215820313L15.556929638671875,8.346066215820311C15.750429638671875,8.152526215820313,16.064229638671875,8.152526215820313,16.257629638671872,8.346066215820311L18.806529638671876,10.895266215820312C19.000029638671876,11.088746215820313,19.000029638671876,11.402496215820312,18.806529638671876,11.595976215820313L13.560629638671875,16.841796215820313C11.165619638671876,19.237196215820312,7.197149638671875,19.19919621582031,4.783499638671875,16.785496215820313C2.3698426386718747,14.371896215820312,2.331397638671875,10.403416215820313,4.727219638671875,8.007996215820313ZM12.172299638671875,5.662106215820312L10.323809638671875,3.8136162158203124L5.4287196386718755,8.709096215820313C3.422893638671875,10.714536215820312,3.4549956386718748,14.055196215820313,5.484999638671875,16.08479621582031C7.514609638671875,18.114796215820313,10.855289638671875,18.146496215820314,12.860719638671876,16.141096215820312L15.465629638671874,13.535796215820312L14.090929638671875,12.160756215820312L14.791629638671875,11.460436215820312L16.166229638671876,12.834996215820313L17.755829638671877,11.245226215820313L15.907729638671874,9.396736215820312L11.011839638671875,14.292596215820312C10.042809638671875,15.262396215820312,8.418249638671874,15.243796215820312,7.406019638671875,14.306496215820312L7.333099638671875,14.236296215820312C6.327599638671876,13.230796215820313,6.284009638671876,11.550396215820312,7.276419638671875,10.557586215820312L9.882199638671874,7.952026215820313L8.501079638671875,6.570906215820313L9.201789638671876,5.870186215820313L10.582939638671874,7.251336215820312L12.172299638671875,5.662106215820312Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const iE = (e) => (() => {
  var r = nE();
  return Er(r, "class", `icon-overlay ${e ?? ""}`), r;
})();
var aE = /* @__PURE__ */ ue('<svg viewBox="0 0 22 22"><defs><clipPath id=master_svg0_151_615><rect x=0 y=0 width=22 height=22 rx=0></rect></clipPath></defs><g clip-path=url(#master_svg0_151_615)><path d=M19.672,3.0673368C19.4417,2.9354008,19.1463,3.00292252,18.9994,3.2210900000000002L17.4588,5.50622L16.743299999999998,3.781253L13.9915,7.4662L13.9618,7.51108C13.8339,7.72862,13.8936,8.005659999999999,14.1004,8.15391L14.1462,8.183430000000001C14.3683,8.308720000000001,14.6511,8.25001,14.8022,8.047229999999999L16.4907,5.78571L17.246299999999998,7.60713L19.8374,3.7635389999999997L19.8651,3.717088C19.9871,3.484615,19.9023,3.199273,19.672,3.0673368ZM4.79974,8.462530000000001L10.117740000000001,3.252975C10.31381,3.0610145,10.63152,3.0610145,10.82759,3.252975L13.4115,5.78453C13.6076,5.976710000000001,13.6076,6.28833,13.4115,6.4805L8.093869999999999,11.69045C7.48847,12.28368,7.51659,13.3308,8.151309999999999,13.9528C8.786439999999999,14.5755,9.85421,14.6027,10.45961,14.0087L15.7768,8.79831C15.9729,8.60609,16.2909,8.60609,16.487099999999998,8.79831L19.0705,11.33026C19.2667,11.52244,19.2667,11.83406,19.0705,12.02623L13.7533,17.2366C11.32572,19.6158,7.30328,19.578,4.85679,17.1807C2.410298,14.7834,2.371331,10.84174,4.79974,8.462530000000001ZM12.3461,6.1325199999999995L10.47246,4.29654L5.51079,9.15889C3.477674,11.15076,3.510214,14.4688,5.56784,16.4847C7.62506,18.500999999999998,11.01117,18.5325,13.0439,16.540599999999998L15.6842,13.9529L14.2908,12.58718L15.0011,11.89161L16.394399999999997,13.2569L18.0056,11.67786L16.1323,9.84188L11.16985,14.7046C10.18764,15.6679,8.540980000000001,15.6494,7.51498,14.7184L7.44107,14.6487C6.4219,13.65,6.37771,11.98096,7.38362,10.994869999999999L10.02485,8.40693L8.624939999999999,7.03516L9.335180000000001,6.33919L10.73512,7.71099L12.3461,6.1325199999999995Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const oE = (e) => (() => {
  var r = aE();
  return Er(r, "class", `icon-overlay ${e ?? ""}`), r;
})();
var sE = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11,17C5.80945,17,3.667717,12.85,3.113386,11.575C2.9622047,11.2,2.9622047,10.8,3.113386,10.425C3.667717,9.15,5.80945,5,11,5C16.165399999999998,5,18.3323,9.15,18.8866,10.425C19.0378,10.8,19.0378,11.2,18.8866,11.575C18.3323,12.85,16.165399999999998,17,11,17ZM4.04567,10.8C3.995276,10.925,3.995276,11.05,4.04567,11.175C4.52441,12.325,6.43937,16,11,16C15.5606,16,17.4756,12.325,17.9543,11.2C18.0047,11.075,18.0047,10.95,17.9543,10.825C17.4756,9.675,15.5606,6,11,6C6.43937,6,4.52441,9.675,4.04567,10.8ZM11,13.5C9.61417,13.5,8.480319999999999,12.375,8.480319999999999,11C8.480319999999999,9.625,9.61417,8.5,11,8.5C12.38583,8.5,13.5197,9.625,13.5197,11C13.5197,12.375,12.38583,13.5,11,13.5ZM11,9.5C10.1685,9.5,9.48819,10.175,9.48819,11C9.48819,11.825,10.1685,12.5,11,12.5C11.8315,12.5,12.51181,11.825,12.51181,11C12.51181,10.175,11.8315,9.5,11,9.5Z stroke-opacity=0 fill-opacity=1>');
const lE = () => sE();
var uE = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M5.80417,14.9887L4.62563,16.167299999999997C4.43037,16.3625,4.43037,16.6791,4.62563,16.8744C4.82089,17.0696,5.13748,17.0696,5.332739999999999,16.8744L6.62638,15.5807C7.75595,16.290100000000002,9.19328,16.7929,11,16.7929C16.165399999999998,16.7929,18.3323,12.64289,18.8866,11.36789C19.0378,10.99289,19.0378,10.59289,18.8866,10.21789C18.5549,9.45486,17.6456,7.66212,15.8617,6.34545L17.3536,4.853553C17.5488,4.658291,17.5488,4.341709,17.3536,4.146447C17.1583,3.9511845,16.8417,3.9511845,16.6464,4.146447L15.0014,5.7915399999999995C13.9314,5.1969,12.61166,4.792893,11,4.792893C5.80945,4.792893,3.667717,8.94289,3.113386,10.21789C2.9622049,10.59289,2.9622049,10.99289,3.113386,11.36789C3.424435,12.08333,4.2353000000000005,13.70399,5.80417,14.9887ZM7.36012,14.847C8.32327,15.4074,9.52286,15.7929,11,15.7929C15.5606,15.7929,17.4756,12.11789,17.9543,10.99289C18.0047,10.86789,18.0047,10.74289,17.9543,10.61789C17.659,9.90846,16.8171,8.23812,15.1447,7.06241L12.96929,9.23782C13.3134,9.66543,13.5197,10.20642,13.5197,10.79289C13.5197,12.16789,12.38583,13.29289,11,13.29289C10.41596,13.29289,9.87667,13.09308,9.44815,12.75896L7.36012,14.847ZM8.794609999999999,11.99829L6.520099999999999,14.2728C5.06905,13.12119,4.32057,11.628250000000001,4.04567,10.96789C3.995275,10.84289,3.995275,10.71789,4.04567,10.59289C4.52441,9.46789,6.43937,5.79289,11,5.79289C12.28868,5.79289,13.3661,6.086320000000001,14.2596,6.53329L12.19759,8.5953C11.84086,8.40257,11.43271,8.29289,11,8.29289C9.61417,8.29289,8.480319999999999,9.41789,8.480319999999999,10.79289C8.480319999999999,11.22918,8.594470000000001,11.64029,8.794609999999999,11.99829ZM10.16528,12.04183C10.404869999999999,12.20032,10.692070000000001,12.29289,11,12.29289C11.8315,12.29289,12.51181,11.61789,12.51181,10.79289C12.51181,10.48318,12.41593,10.194600000000001,12.25216,9.95494L10.16528,12.04183ZM11.43602,9.35687L9.55616,11.236740000000001C9.512,11.09633,9.48819,10.94724,9.48819,10.79289C9.48819,9.96789,10.1685,9.29289,11,9.29289C11.15142,9.29289,11.29782,9.31528,11.43602,9.35687Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const cE = () => uE();
var fE = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><defs><clipPath id=master_svg0_151_625><rect x=0 y=0 width=22 height=22 rx=0></rect></clipPath></defs><g clip-path=url(#master_svg0_151_625)><path d=M14.5385,9.76923L15.6538,9.76923C16.6538,9.76923,17.4615,10.576920000000001,17.4615,11.576920000000001L17.4615,17.1923C17.4615,18.1923,16.6538,19,15.6538,19L5.80769,19C4.807692,19,4,18.1923,4,17.1923L4,11.576920000000001C4,10.576920000000001,4.807692,9.76923,5.80769,9.76923L7.23077,9.76923L7.23077,7.576919999999999C7.23077,5.61538,8.88462,4,10.88462,4C12.88462,4,14.5385,5.61538,14.5385,7.576919999999999L14.5385,9.76923ZM10.88461,5.15385C9.5,5.15385,8.38461,6.23077,8.38461,7.576919999999999L8.38461,9.76923L13.38462,9.76923L13.38462,7.576919999999999C13.38462,6.23077,12.26923,5.15385,10.88461,5.15385ZM15.6538,17.8462C16,17.8462,16.3077,17.5385,16.3077,17.1923L16.3077,11.576920000000001C16.3077,11.23077,16,10.923079999999999,15.6538,10.923079999999999L5.80769,10.923079999999999C5.46154,10.923079999999999,5.15385,11.23077,5.15385,11.576920000000001L5.15385,17.1923C5.15385,17.5385,5.46154,17.8462,5.80769,17.8462L15.6538,17.8462ZM10.153839999999999,12.65385C10.153839999999999,12.34615,10.42307,12.07692,10.73076,12.07692C11.038450000000001,12.07692,11.307680000000001,12.34615,11.307680000000001,12.65385L11.307680000000001,14.5769C11.307680000000001,14.8846,11.038450000000001,15.1538,10.73076,15.1538C10.42307,15.1538,10.153839999999999,14.8846,10.153839999999999,14.5769L10.153839999999999,12.65385Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const hE = () => fE();
var dE = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><defs><clipPath id=master_svg0_151_620><rect x=0 y=0 width=22 height=22 rx=0></rect></clipPath></defs><g clip-path=url(#master_svg0_151_620)><path d=M8.38461,9.76923L15.6538,9.76923C16.6538,9.76923,17.4615,10.576920000000001,17.4615,11.576920000000001L17.4615,17.1923C17.4615,18.1923,16.6538,19,15.6538,19L5.80769,19C4.807692,19,4,18.1923,4,17.1923L4,11.576920000000001C4,10.576920000000001,4.807693,9.76923,5.80769,9.76923L7.23077,9.76923L7.23077,7.576919999999999C7.23077,5.61538,8.88462,4,10.88462,4C12.46154,4,13.84615,4.961539,14.3462,6.423080000000001C14.4615,6.73077,14.3077,7.038460000000001,14,7.15385C13.69231,7.26923,13.38461,7.11538,13.26923,6.80769C12.92308,5.80769,11.96154,5.15385,10.88462,5.15385C9.5,5.15385,8.38461,6.23077,8.38461,7.576919999999999L8.38461,9.76923ZM15.6538,17.8462C16,17.8462,16.3077,17.5385,16.3077,17.1923L16.3077,11.576920000000001C16.3077,11.23077,16,10.923079999999999,15.6538,10.923079999999999L5.80769,10.923079999999999C5.46154,10.923079999999999,5.15385,11.23077,5.15385,11.576920000000001L5.15385,17.1923C5.15385,17.5385,5.46154,17.8462,5.80769,17.8462L15.6538,17.8462ZM10.153839999999999,12.65385C10.153839999999999,12.34615,10.42307,12.07692,10.73076,12.07692C11.03846,12.07692,11.307690000000001,12.34615,11.307690000000001,12.65385L11.307690000000001,14.5769C11.307690000000001,14.8846,11.03846,15.1538,10.73076,15.1538C10.42307,15.1538,10.153839999999999,14.8846,10.153839999999999,14.5769L10.153839999999999,12.65385Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const vE = () => dE();
var pE = /* @__PURE__ */ ue('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M16.966900000000003,8.67144C16.6669,8.67144,16.4247,8.91558,16.4247,9.21802L16.4247,16.631500000000003C16.4247,17.322,16.007199999999997,17.9068,15.5139,17.9068L13.93072,17.9068L13.93072,9.2162C13.93072,8.91741,13.68675,8.67144,13.38855,8.67144C13.09036,8.67144,12.84639,8.91741,12.84639,9.21802L12.84639,17.9068L10.151810000000001,17.9068L10.151810000000001,9.21802C10.151810000000001,8.91741,9.90783,8.67144,9.609639999999999,8.67144C9.31145,8.67144,9.06747,8.91741,9.06747,9.219850000000001L9.06747,17.9068L7.48614,17.9068C6.99277,17.9068,6.5753,17.322,6.5753,16.631500000000003L6.5753,9.21802C6.5753,8.91558,6.333130000000001,8.67144,6.03313,8.67144C5.73313,8.67144,5.49096,8.91558,5.49096,9.21802L5.49096,16.631500000000003C5.49096,17.9378,6.385540000000001,19,7.48614,19L15.512,19C16.6127,19,17.509,17.9378,17.509,16.631500000000003L17.509,9.21802C17.509,8.91558,17.2669,8.67144,16.966900000000003,8.67144ZM18.4578,6.21183L4.542169,6.21183C4.243976,6.21183,4,6.45779,4,6.75841C4,7.05903,4.243976,7.30499,4.542169,7.30499L18.4578,7.30499C18.756,7.30499,19,7.05903,19,6.75841C19,6.45779,18.756,6.21183,18.4578,6.21183ZM8.68072,5.10045L14.3193,5.10045C14.6175,5.10045,14.8614,4.852666,14.8614,4.550225C14.8614,4.247783,14.6175,4,14.3193,4L8.68072,4C8.38253,4,8.13855,4.247783,8.13855,4.550225C8.13855,4.852666,8.38253,5.10045,8.68072,5.10045Z stroke-opacity=0 fill-opacity=1>');
const gE = () => pE(), yE = {
  horizontalStraightLine: QT,
  horizontalRayLine: qT,
  horizontalSegment: eM,
  verticalStraightLine: rM,
  verticalRayLine: iM,
  verticalSegment: oM,
  straightLine: lM,
  rayLine: cM,
  segment: hM,
  arrow: vM,
  priceLine: gM,
  priceChannelLine: mM,
  parallelStraightLine: xM,
  fibonacciDiagonal: rE,
  //by tradingio team
  fibonacciLine: CM,
  fibonacciSegment: wM,
  fibonacciCircle: LM,
  fibonacciSpiral: IM,
  fibonacciSpeedResistanceFan: $M,
  fibonacciExtension: MM,
  gannBox: DM,
  circle: OM,
  triangle: BM,
  rect: zM,
  parallelogram: WM,
  threeWaves: XM,
  fiveWaves: UM,
  eightWaves: HM,
  anyWaves: QM,
  abcd: qM,
  xabcd: eE,
  weak_magnet: iE,
  strong_magnet: oE,
  lock: hE,
  unlock: vE,
  visible: lE,
  invisible: cE,
  remove: gE
};
function mE(e) {
  return [
    { key: "horizontalStraightLine", text: I("horizontal_straight_line", e) },
    { key: "horizontalRayLine", text: I("horizontal_ray_line", e) },
    { key: "horizontalSegment", text: I("horizontal_segment", e) },
    { key: "verticalStraightLine", text: I("vertical_straight_line", e) },
    { key: "verticalRayLine", text: I("vertical_ray_line", e) },
    { key: "verticalSegment", text: I("vertical_segment", e) },
    { key: "straightLine", text: I("extended_line", e) },
    { key: "rayLine", text: I("ray_line", e) },
    { key: "segment", text: I("trend_line", e) },
    { key: "arrow", text: I("arrow", e) },
    { key: "priceLine", text: I("price_line", e) }
  ];
}
function _E(e) {
  return [
    { key: "priceChannelLine", text: I("price_channel_line", e) },
    { key: "parallelStraightLine", text: I("parallel_straight_line", e) }
  ];
}
function xE(e) {
  return [
    { key: "circle", text: I("circle", e) },
    { key: "rect", text: I("rect", e) },
    { key: "parallelogram", text: I("parallelogram", e) },
    { key: "triangle", text: I("triangle", e) }
  ];
}
function bE(e) {
  return [
    { key: "fibonacciDiagonal", text: I("fibonacci_diagonal", e) },
    { key: "fibonacciLine", text: I("fibonacci_line", e) },
    { key: "fibonacciSegment", text: I("fibonacci_segment", e) },
    { key: "fibonacciCircle", text: I("fibonacci_circle", e) },
    { key: "fibonacciSpiral", text: I("fibonacci_spiral", e) },
    { key: "fibonacciSpeedResistanceFan", text: I("fibonacci_speed_resistance_fan", e) },
    { key: "fibonacciExtension", text: I("fibonacci_extension", e) },
    { key: "gannBox", text: I("gann_box", e) }
  ];
}
function CE(e) {
  return [
    { key: "xabcd", text: I("xabcd", e) },
    { key: "abcd", text: I("abcd", e) },
    { key: "threeWaves", text: I("three_waves", e) },
    { key: "fiveWaves", text: I("five_waves", e) },
    { key: "eightWaves", text: I("eight_waves", e) },
    { key: "anyWaves", text: I("any_waves", e) }
  ];
}
function SE(e) {
  return [
    { key: "weak_magnet", text: I("weak_magnet", e) },
    { key: "strong_magnet", text: I("strong_magnet", e) }
  ];
}
const _n = (e) => yE[e.name](e.class);
var wE = /* @__PURE__ */ ue('<div class=klinecharts-pro-drawing-bar><span class=split-line></span><div class=item tabindex=0><span style=width:32px;height:32px></span><div class=icon-arrow><svg viewBox="0 0 4 6"><path d=M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z stroke=none stroke-opacity=0></path></svg></div></div><div class=item><span style=width:32px;height:32px></span></div><div class=item><span style=width:32px;height:32px></span></div><span class=split-line></span><div class=item><span style=width:32px;height:32px>'), kE = /* @__PURE__ */ ue('<div class=item tabindex=0><span style=width:32px;height:32px></span><div class=icon-arrow><svg viewBox="0 0 4 6"><path d=M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z stroke=none stroke-opacity=0>'), q2 = /* @__PURE__ */ ue("<li><span style=padding-left:8px>");
const J2 = "drawing_tools", LE = (e) => {
  const [r, t] = J("horizontalStraightLine"), [i, a] = J("priceChannelLine"), [s, l] = J("circle"), [u, c] = J("fibonacciLine"), [h, d] = J("xabcd"), [v, m] = J("weak_magnet"), [y, C] = J("normal"), [b, _] = J(!1), [w, T] = J(!0), [P, M] = J(""), F = yt(() => [{
    key: "singleLine",
    icon: r(),
    list: mE(e.locale),
    setter: t
  }, {
    key: "moreLine",
    icon: i(),
    list: _E(e.locale),
    setter: a
  }, {
    key: "polygon",
    icon: s(),
    list: xE(e.locale),
    setter: l
  }, {
    key: "fibonacci",
    icon: u(),
    list: bE(e.locale),
    setter: c
  }, {
    key: "wave",
    icon: h(),
    list: CE(e.locale),
    setter: d
  }]), O = yt(() => SE(e.locale));
  return (() => {
    var V = wE(), W = V.firstChild, N = W.nextSibling, Y = N.firstChild, K = Y.nextSibling, G = K.firstChild, q = N.nextSibling, he = q.firstChild, ge = q.nextSibling, ve = ge.firstChild, De = ge.nextSibling, Oe = De.nextSibling, be = Oe.firstChild;
    return le(V, () => F().map((ye) => (() => {
      var de = kE(), We = de.firstChild, Be = We.nextSibling, Tt = Be.firstChild;
      return de.addEventListener("blur", () => {
        M("");
      }), We.$$click = () => {
        e.onDrawingItemClick({
          groupId: J2,
          name: ye.icon,
          visible: w(),
          lock: b(),
          mode: y()
        });
      }, le(We, se(_n, {
        get name() {
          return ye.icon;
        }
      })), Be.$$click = () => {
        ye.key === P() ? M("") : M(ye.key);
      }, le(de, (() => {
        var vt = yt(() => ye.key === P());
        return () => vt() && se(sl, {
          class: "list",
          get children() {
            return ye.list.map((pt) => (() => {
              var _t = q2(), wt = _t.firstChild;
              return _t.$$click = () => {
                ye.setter(pt.key), e.onDrawingItemClick({
                  name: pt.key,
                  lock: b(),
                  mode: y()
                }), M("");
              }, le(_t, se(_n, {
                get name() {
                  return pt.key;
                }
              }), wt), le(wt, () => pt.text), _t;
            })());
          }
        });
      })(), null), Pt(() => Er(Tt, "class", ye.key === P() ? "rotate" : "")), de;
    })()), W), N.addEventListener("blur", () => {
      M("");
    }), Y.$$click = () => {
      let ye = v();
      y() !== "normal" && (ye = "normal"), C(ye), e.onModeChange(ye);
    }, le(Y, (() => {
      var ye = yt(() => v() === "weak_magnet");
      return () => ye() ? (() => {
        var de = yt(() => y() === "weak_magnet");
        return () => de() ? se(_n, {
          name: "weak_magnet",
          class: "selected"
        }) : se(_n, {
          name: "weak_magnet"
        });
      })() : (() => {
        var de = yt(() => y() === "strong_magnet");
        return () => de() ? se(_n, {
          name: "strong_magnet",
          class: "selected"
        }) : se(_n, {
          name: "strong_magnet"
        });
      })();
    })()), K.$$click = () => {
      P() === "mode" ? M("") : M("mode");
    }, le(N, (() => {
      var ye = yt(() => P() === "mode");
      return () => ye() && se(sl, {
        class: "list",
        get children() {
          return O().map((de) => (() => {
            var We = q2(), Be = We.firstChild;
            return We.$$click = () => {
              m(de.key), C(de.key), e.onModeChange(de.key), M("");
            }, le(We, se(_n, {
              get name() {
                return de.key;
              }
            }), Be), le(Be, () => de.text), We;
          })());
        }
      });
    })(), null), he.$$click = () => {
      const ye = !b();
      _(ye), e.onLockChange(ye);
    }, le(he, (() => {
      var ye = yt(() => !!b());
      return () => ye() ? se(_n, {
        name: "lock"
      }) : se(_n, {
        name: "unlock"
      });
    })()), ve.$$click = () => {
      const ye = !w();
      T(ye), e.onVisibleChange(ye);
    }, le(ve, (() => {
      var ye = yt(() => !!w());
      return () => ye() ? se(_n, {
        name: "visible"
      }) : se(_n, {
        name: "invisible"
      });
    })()), be.$$click = () => {
      e.onRemoveClick(J2);
    }, le(be, se(_n, {
      name: "remove"
    })), Pt(() => Er(G, "class", P() === "mode" ? "rotate" : "")), V;
  })();
};
Dr(["click"]);
var e9 = /* @__PURE__ */ ue("<li class=title>"), t9 = /* @__PURE__ */ ue("<li class=row>");
const PE = (e) => se(Mi, {
  get title() {
    return I("indicator", e.locale);
  },
  width: 400,
  get onClose() {
    return e.onClose;
  },
  get children() {
    return se(sl, {
      class: "klinecharts-pro-indicator-modal-list",
      get children() {
        return [(() => {
          var r = e9();
          return le(r, () => I("main_indicator", e.locale)), r;
        })(), yt(() => ["MA", "EMA", "SMA", "BOLL", "SAR", "BBI"].map((r) => {
          const t = e.mainIndicators.includes(r);
          return (() => {
            var i = t9();
            return i.$$click = (a) => {
              e.onMainIndicatorChange({
                name: r,
                paneId: "candle_pane",
                added: !t
              });
            }, le(i, se(z2, {
              checked: t,
              get label() {
                return I(r.toLowerCase(), e.locale);
              }
            })), i;
          })();
        })), (() => {
          var r = e9();
          return le(r, () => I("sub_indicator", e.locale)), r;
        })(), yt(() => ["MA", "EMA", "VOL", "MACD", "BOLL", "KDJ", "RSI", "BIAS", "BRAR", "CCI", "DMI", "CR", "PSY", "DMA", "TRIX", "OBV", "VR", "WR", "MTM", "EMV", "SAR", "SMA", "ROC", "PVT", "BBI", "AO"].map((r) => {
          const t = r in e.subIndicators;
          return (() => {
            var i = t9();
            return i.$$click = (a) => {
              e.onSubIndicatorChange({
                name: r,
                paneId: e.subIndicators[r] ?? "",
                added: !t
              });
            }, le(i, se(z2, {
              checked: t,
              get label() {
                return I(r.toLowerCase(), e.locale);
              }
            })), i;
          })();
        }))];
      }
    });
  }
});
Dr(["click"]);
function r9(e, r) {
  switch (e) {
    case "Etc/UTC":
      return I("utc", r);
    case "Pacific/Honolulu":
      return I("honolulu", r);
    case "America/Juneau":
      return I("juneau", r);
    case "America/Los_Angeles":
      return I("los_angeles", r);
    case "America/Chicago":
      return I("chicago", r);
    case "America/Toronto":
      return I("toronto", r);
    case "America/Sao_Paulo":
      return I("sao_paulo", r);
    case "Europe/London":
      return I("london", r);
    case "Europe/Berlin":
      return I("berlin", r);
    case "Asia/Bahrain":
      return I("bahrain", r);
    case "Asia/Dubai":
      return I("dubai", r);
    case "Asia/Ashkhabad":
      return I("ashkhabad", r);
    case "Asia/Almaty":
      return I("almaty", r);
    case "Asia/Bangkok":
      return I("bangkok", r);
    case "Asia/Shanghai":
      return I("shanghai", r);
    case "Asia/Tokyo":
      return I("tokyo", r);
    case "Australia/Sydney":
      return I("sydney", r);
    case "Pacific/Norfolk":
      return I("norfolk", r);
  }
  return e;
}
function IE(e) {
  return [
    { key: "Etc/UTC", text: I("utc", e) },
    { key: "Pacific/Honolulu", text: I("honolulu", e) },
    { key: "America/Juneau", text: I("juneau", e) },
    { key: "America/Los_Angeles", text: I("los_angeles", e) },
    { key: "America/Chicago", text: I("chicago", e) },
    { key: "America/Toronto", text: I("toronto", e) },
    { key: "America/Sao_Paulo", text: I("sao_paulo", e) },
    { key: "Europe/London", text: I("london", e) },
    { key: "Europe/Berlin", text: I("berlin", e) },
    { key: "Asia/Bahrain", text: I("bahrain", e) },
    { key: "Asia/Dubai", text: I("dubai", e) },
    { key: "Asia/Ashkhabad", text: I("ashkhabad", e) },
    { key: "Asia/Almaty", text: I("almaty", e) },
    { key: "Asia/Bangkok", text: I("bangkok", e) },
    { key: "Asia/Shanghai", text: I("shanghai", e) },
    { key: "Asia/Tokyo", text: I("tokyo", e) },
    { key: "Australia/Sydney", text: I("sydney", e) },
    { key: "Pacific/Norfolk", text: I("norfolk", e) }
  ];
}
const AE = (e) => {
  const [r, t] = J(e.timezone), i = yt(() => IE(e.locale));
  return se(Mi, {
    get title() {
      return I("timezone", e.locale);
    },
    width: 320,
    get buttons() {
      return [{
        children: I("confirm", e.locale),
        onClick: () => {
          e.onConfirm(r()), e.onClose();
        }
      }];
    },
    get onClose() {
      return e.onClose;
    },
    get children() {
      return se(ll, {
        style: {
          width: "100%",
          "margin-top": "20px"
        },
        get value() {
          return r().text;
        },
        onSelected: (a) => {
          t(a);
        },
        get dataSource() {
          return i();
        }
      });
    }
  });
}, li = (e) => {
  const r = [
    { key: "solid", text: I("solid", e) },
    { key: "dashed", text: I("dashed", e) }
  ], t = [
    { key: "true", text: !0 },
    { key: "false", text: !1 }
  ], i = [
    { key: 1, text: 1 },
    { key: 2, text: 2 },
    { key: 3, text: 3 },
    { key: 4, text: 4 },
    { key: 5, text: 5 },
    { key: 6, text: 6 },
    { key: 7, text: 7 },
    { key: 8, text: 8 },
    { key: 9, text: 9 },
    { key: 10, text: 10 }
  ], a = [
    { key: "fill", text: I("fill", e) },
    { key: "stroke", text: I("stroke", e) },
    { key: "stroke_fill", text: I("stroke_fill", e) }
  ], s = [
    { key: "none", text: I("none", e) },
    { key: "always", text: I("always", e) },
    { key: "follow_cross", text: I("follow_cross", e) }
  ], l = [
    { key: 10, text: 10 },
    { key: 11, text: 11 },
    { key: 12, text: 12 },
    { key: 14, text: 14 },
    { key: 16, text: 16 },
    { key: 18, text: 18 },
    { key: 20, text: 20 },
    { key: 22, text: 22 },
    { key: 24, text: 24 }
  ], u = [
    { key: "normal", text: I("Normal", e) }
  ], c = [
    { key: "Helvetica Neue", text: I("Helvetica Neue", e) }
  ];
  return { solid_dashed: r, size: i, fill_stroke: a, font_family: c, font_size: l, font_weight: u, none_always_followCross: s, true_false: t };
}, $E = (e) => {
  const { font_family: r, font_size: t, font_weight: i, size: a, solid_dashed: s, fill_stroke: l, none_always_followCross: u } = li(e);
  return [
    {
      key: "candle.type",
      text: I("candle_type", e),
      component: "select",
      dataSource: [
        { key: "candle_solid", text: I("candle_solid", e) },
        { key: "candle_stroke", text: I("candle_stroke", e) },
        { key: "candle_up_stroke", text: I("candle_up_stroke", e) },
        { key: "candle_down_stroke", text: I("candle_down_stroke", e) },
        { key: "ohlc", text: I("ohlc", e) },
        { key: "area", text: I("area", e) }
      ]
    },
    {
      key: "candle.bar.upColor",
      text: I("Bar up color", e),
      component: "color"
    },
    {
      key: "candle.bar.downColor",
      text: I("Bar down color", e),
      component: "color"
    },
    {
      key: "candle.bar.noChangeColor",
      text: I("Bar no-change color", e),
      component: "color"
    },
    {
      key: "candle.bar.upBorderColor",
      text: I("Bar up-border color", e),
      component: "color"
    },
    {
      key: "candle.bar.downBorderColor",
      text: I("Bar down-border color", e),
      component: "color"
    },
    {
      key: "candle.bar.noChangeBorderColor",
      text: I("Bar no-change-border color", e),
      component: "color"
    },
    {
      key: "candle.bar.upWickColor",
      text: I("Bar up-wick color", e),
      component: "color"
    },
    {
      key: "candle.bar.downWickColor",
      text: I("Bar down-wick color", e),
      component: "color"
    },
    {
      key: "candle.bar.noChangeWickColor",
      text: I("Bar no-change-wick color", e),
      component: "color"
    },
    {
      key: "candle.area.lineSize",
      text: I("Area linesize", e),
      component: "select",
      dataSource: a
    },
    {
      key: "candle.area.lineColor",
      text: I("Area line color", e),
      component: "color"
    },
    {
      key: "candle.priceMark.high.show",
      text: I("high_price_show", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.high.color",
      text: I("Pricemark high color", e),
      component: "color"
    },
    {
      key: "candle.priceMark.high.textSize",
      text: I("Pricemark High Textsize", e),
      component: "select",
      dataSource: t
    },
    {
      key: "candle.priceMark.high.textFamily",
      text: I("Pricemark High Font family", e),
      component: "select",
      dataSource: r
    },
    {
      key: "candle.priceMark.high.textWeight",
      text: I("Pricemark High Font Weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "candle.priceMark.low.show",
      text: I("low_price_show", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.low.color",
      text: I("Pricemark low color", e),
      component: "color"
    },
    {
      key: "candle.priceMark.low.textSize",
      text: I("Pricemark Low Textsize", e),
      component: "select",
      dataSource: t
    },
    {
      key: "candle.priceMark.low.textFamily",
      text: I("Pricemark Low Font family", e),
      component: "select",
      dataSource: r
    },
    {
      key: "candle.priceMark.low.textWeight",
      text: I("Pricemark Low Font Weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "candle.priceMark.last.show",
      text: I("Show Pricemark last", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.last.upColor",
      text: I("Pricemark last up-color", e),
      component: "color"
    },
    {
      key: "candle.priceMark.last.downColor",
      text: I("Pricemark last down-color", e),
      component: "color"
    },
    {
      key: "candle.priceMark.last.noChangeColor",
      text: I("Pricemark last no-change-color", e),
      component: "color"
    },
    {
      key: "candle.priceMark.last.line.show",
      text: I("Show Pricemark last line", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.last.line.style",
      text: I("Pricemark last line style", e),
      component: "select",
      dataSource: s
    },
    {
      key: "candle.priceMark.last.line.size",
      text: I("Pricemark last line size", e),
      component: "select",
      dataSource: a
    },
    {
      key: "candle.priceMark.last.text.show",
      text: I("Show Pricemark last text", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.last.text.style",
      text: I("Pricemark last text style", e),
      component: "select",
      dataSource: l
    },
    {
      key: "candle.priceMark.last.text.size",
      text: I("Pricemark last text size", e),
      component: "select",
      dataSource: t
    },
    {
      key: "candle.priceMark.last.text.color",
      text: I("Pricemark last text color", e),
      component: "color"
    },
    // candle tooltip
    {
      key: "candle.tooltip.showRule",
      text: I("candle_tooltip", e),
      component: "select",
      dataSource: u
    },
    {
      key: "candle.tooltip.showType",
      text: I("Tooltip showtype", e),
      component: "select",
      dataSource: [
        { key: "rect", text: I("Rect", e) },
        { key: "standard", text: I("Standard", e) }
      ]
    },
    {
      key: "candle.tooltip.rect.position",
      text: I("Tooltip rect position", e),
      component: "select",
      dataSource: [
        { key: "fixed", text: I("Fixed", e) },
        { key: "pointer", text: I("Pointer", e) }
      ]
    },
    {
      key: "candle.tooltip.rect.color",
      text: I("Tooltip rect color", e),
      component: "color"
    },
    {
      key: "candle.tooltip.rect.borderColor",
      text: I("Tooltip rect border-color", e),
      component: "color"
    },
    {
      key: "candle.tooltip.text.size",
      text: I("Tooltip text size", e),
      component: "select",
      dataSource: t
    },
    {
      key: "candle.tooltip.text.weight",
      text: I("Tooltip text weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "candle.tooltip.text.color",
      text: I("Tooltip text color", e),
      component: "color"
    }
  ];
}, TE = (e) => {
  const { fill_stroke: r, font_size: t, font_weight: i, none_always_followCross: a } = li(e);
  return [
    // {
    //   key: 'indicator.bars.style',
    //   text: i18n('Bar style', locale),
    //   component: 'select',
    //   dataSource: [
    //     { key: 'fill', text: i18n('Fill', locale) },
    //     { key: 'stroke', text: i18n('Stroke', locale) },
    //     { key: 'stroke_fill', text: i18n('Stroke fill', locale) }
    //   ]
    // },
    // {
    //   key: 'indicator.bars.borderStyle',
    //   text: i18n('Bar border style', locale),
    //   component: 'select',
    //   dataSource: [
    //     { key: 'solid', text: i18n('Solid', locale) },
    //     { key: 'dashed', text: i18n('Dashed', locale) }
    //   ]
    // },
    // {
    //   key: 'indicator.bars.borderSize',
    //   text: i18n('Bar border thickness', locale),
    //   component: 'select',
    //   dataSource: [
    //     { key: 1, text: 1},
    //     { key: 2, text: 2},
    //     { key: 3, text: 3},
    //     { key: 4, text: 4}
    //   ]
    // },
    {
      key: "indicator.ohlc.upColor",
      text: I("Ohlc up-color", e),
      component: "color"
    },
    {
      key: "indicator.ohlc.downColor",
      text: I("Ohlc down-color", e),
      component: "color"
    },
    {
      key: "indicator.ohlc.noChangeColor",
      text: I("Ohlc no-change-color", e),
      component: "color"
    },
    {
      key: "indicator.lastValueMark.show",
      text: I("indicator_last_value_show", e),
      component: "switch"
    },
    {
      key: "indicator.lastValueMark.text.show",
      text: I("Show last value mark text", e),
      component: "switch"
    },
    {
      key: "indicator.lastValueMark.text.style",
      text: I("Last value mark text style", e),
      component: "select",
      dataSource: r
    },
    {
      key: "indicator.lastValueMark.text.size",
      text: I("Last value mark text size", e),
      component: "select",
      dataSource: t
    },
    {
      key: "indicator.lastValueMark.text.weight",
      text: I("Last value mark text Weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "indicator.lastValueMark.text.color",
      text: I("Last value mark text color", e),
      component: "color"
    },
    {
      key: "indicator.tooltip.showRule",
      text: I("Tooltip showrule", e),
      component: "select",
      dataSource: a
    },
    {
      key: "indicator.tooltip.showType",
      text: I("Tooltip showtype", e),
      component: "select",
      dataSource: [
        { key: "standard", text: I("Standard", e) },
        { key: "rect", text: I("Rect", e) }
      ]
    },
    {
      key: "indicator.tooltip.showName",
      text: I("Show tooltip name", e),
      component: "switch"
    },
    {
      key: "indicator.tooltip.showParams",
      text: I("Show tooltip params", e),
      component: "switch"
    },
    {
      key: "indicator.tooltip.text.size",
      text: I("Tooltip text size", e),
      component: "select",
      dataSource: t
    },
    {
      key: "indicator.tooltip.text.weight",
      text: I("Tooltip text Weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "indicator.tooltip.text.color",
      text: I("Tooltip text color", e),
      component: "color"
    }
  ];
}, ME = (e) => {
  const { font_size: r, size: t, font_weight: i } = li(e);
  return [
    {
      key: "xAxis.show",
      text: I("Show xAxis", e),
      component: "switch"
    },
    {
      key: "xAxis.axisLine.show",
      text: I("Show axis line", e),
      component: "switch"
    },
    {
      key: "xAxis.axisLine.color",
      text: I("Axis line color", e),
      component: "color"
    },
    {
      key: "xAxis.axisLine.size",
      text: I("Axis line size", e),
      component: "select",
      dataSource: t
    },
    {
      key: "xAxis.tickText.show",
      text: I("Show tick text", e),
      component: "switch"
    },
    {
      key: "xAxis.tickText.size",
      text: I("Tick text size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "xAxis.tickText.weight",
      text: I("Tick text Weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "xAxis.tickText.color",
      text: I("Tick text color", e),
      component: "color"
    },
    {
      key: "xAxis.tickLine.show",
      text: I("Show tick line", e),
      component: "switch"
    },
    {
      key: "xAxis.tickLine.size",
      text: I("Tick line size", e),
      component: "select",
      dataSource: t
    },
    {
      key: "xAxis.tickLine.length",
      text: I("Tick line length", e),
      component: "select",
      dataSource: t
    },
    {
      key: "xAxis.tickLine.color",
      text: I("Tick line color", e),
      component: "color"
    }
  ];
}, EE = (e) => {
  const { size: r, font_weight: t, font_size: i } = li(e);
  return [
    {
      key: "yAxis.show",
      text: I("Show yAxis", e),
      component: "switch"
    },
    {
      key: "yAxis.position",
      text: I("Position", e),
      component: "select",
      dataSource: [
        { key: "right", text: I("Right", e) },
        { key: "left", text: I("Left", e) }
      ]
    },
    {
      key: "yAxis.type",
      text: I("price_axis_type", e),
      component: "select",
      dataSource: [
        { key: "normal", text: I("normal", e) },
        { key: "percentage", text: I("percentage", e) },
        { key: "log", text: I("log", e) }
      ]
    },
    {
      key: "yAxis.inside",
      text: I("Inside", e),
      component: "switch"
    },
    {
      key: "yAxis.reverse",
      text: I("reverse_coordinate", e),
      component: "switch"
    },
    {
      key: "yAxis.axisLine.show",
      text: I("Show axis line", e),
      component: "switch"
    },
    {
      key: "yAxis.axisLine.size",
      text: I("Axis line size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "yAxis.axisLine.color",
      text: I("Axis line color", e),
      component: "color"
    },
    {
      key: "yAxis.tickText.show",
      text: I("Show tick text", e),
      component: "switch"
    },
    {
      key: "yAxis.tickText.color",
      text: I("Tick text color", e),
      component: "color"
    },
    {
      key: "yAxis.tickText.size",
      text: I("Tick text size", e),
      component: "select",
      dataSource: i
    },
    {
      key: "yAxis.tickText.weight",
      text: I("Tick text Weight", e),
      component: "select",
      dataSource: t
    },
    {
      key: "yAxis.tickLine.show",
      text: I("Show tick line", e),
      component: "switch"
    },
    {
      key: "yAxis.tickLine.color",
      text: I("Tick line color", e),
      component: "color"
    },
    {
      key: "yAxis.tickLine.size",
      text: I("Tick line size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "yAxis.tickLine.length",
      text: I("Tick line length", e),
      component: "select",
      dataSource: r
    }
  ];
}, DE = (e) => {
  const { size: r } = li(e);
  return [
    {
      key: "grid.show",
      text: I("grid_show", e),
      component: "switch"
    },
    {
      key: "grid.horizontal.show",
      text: I("Show horizontal", e),
      component: "switch"
    },
    {
      key: "grid.horizontal.show",
      text: I("Horizontal size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "grid.horizontal.color",
      text: I("Horizontal color", e),
      component: "color"
    },
    {
      key: "grid.vertical.show",
      text: I("Show vertical", e),
      component: "switch"
    },
    {
      key: "grid.vertical.show",
      text: I("Vertical size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "grid.vertical.color",
      text: I("Vertical color", e),
      component: "color"
    }
  ];
}, FE = (e) => {
  const { solid_dashed: r, fill_stroke: t, size: i, font_size: a, font_weight: s } = li(e);
  return [
    {
      key: "crosshair.show",
      text: I("Show Crosshair", e),
      component: "switch"
    },
    {
      key: "crosshair.horizontal.show",
      text: I("Show horizontal", e),
      component: "switch"
    },
    {
      key: "crosshair.horizontal.line.show",
      text: I("Show horizontal line", e),
      component: "switch"
    },
    {
      key: "crosshair.horizontal.line.style",
      text: I("Horizontal Line Style", e),
      component: "select",
      dataSource: r
    },
    {
      key: "crosshair.horizontal.line.size",
      text: I("Horizontal Line size", e),
      component: "select",
      dataSource: i
    },
    {
      key: "crosshair.horizontal.line.color",
      text: I("Horizontal Line color", e),
      component: "color"
    },
    {
      key: "crosshair.horizontal.text.show",
      text: I("Show horizontal text", e),
      component: "switch"
    },
    {
      key: "crosshair.horizontal.text.style",
      text: I("Horizontal text Style", e),
      component: "select",
      dataSource: t
    },
    {
      key: "crosshair.horizontal.text.size",
      text: I("Horizontal text size", e),
      component: "select",
      dataSource: a
    },
    {
      key: "crosshair.horizontal.text.weight",
      text: I("Horizontal text weight", e),
      component: "select",
      dataSource: s
    },
    {
      key: "crosshair.horizontal.text.color",
      text: I("Horizontal text color", e),
      component: "color"
    },
    {
      key: "crosshair.horizontal.text.backgroundColor",
      text: I("Horizontal text background color", e),
      component: "color"
    },
    {
      key: "crosshair.vertical.show",
      text: I("Show vertical", e),
      component: "switch"
    },
    {
      key: "crosshair.vertical.line.show",
      text: I("Show vertical line", e),
      component: "switch"
    },
    {
      key: "crosshair.vertical.line.style",
      text: I("Vertical Line Style", e),
      component: "select",
      dataSource: r
    },
    {
      key: "crosshair.vertical.line.size",
      text: I("Vertical Line size", e),
      component: "select",
      dataSource: i
    },
    {
      key: "crosshair.vertical.line.color",
      text: I("Vertical line color", e),
      component: "color"
    },
    {
      key: "crosshair.vertical.text.show",
      text: I("Show vertical text", e),
      component: "switch"
    },
    {
      key: "crosshair.vertical.text.style",
      text: I("Vertical text Style", e),
      component: "select",
      dataSource: t
    },
    {
      key: "crosshair.vertical.text.size",
      text: I("Vertical text size", e),
      component: "select",
      dataSource: a
    },
    {
      key: "crosshair.vertical.text.weight",
      text: I("Vertical text weight", e),
      component: "select",
      dataSource: s
    },
    {
      key: "crosshair.vertical.text.color",
      text: I("Vertical text color", e),
      component: "color"
    },
    {
      key: "crosshair.vertical.text.backgroundColor",
      text: I("Vertical text background color", e),
      component: "color"
    }
  ];
}, OE = (e) => {
  const { solid_dashed: r, fill_stroke: t, size: i, font_size: a, font_weight: s, font_family: l } = li(e);
  return [
    {
      key: "overlay.point.color",
      text: I("Point color", e),
      component: "color"
    },
    {
      key: "overlay.point.borderColor",
      text: I("Point border color", e),
      component: "color"
    },
    {
      key: "overlay.point.activeColor",
      text: I("Point active color", e),
      component: "color"
    },
    {
      key: "overlay.point.activeBorderColor",
      text: I("Point active border color", e),
      component: "color"
    },
    {
      key: "overlay.line.style",
      text: I("Line Style", e),
      component: "select",
      dataSource: r
    },
    {
      key: "overlay.line.smooth",
      text: I("Smooth line", e),
      component: "switch"
    },
    {
      key: "overlay.line.size",
      text: I("Line size", e),
      component: "select",
      dataSource: i
    },
    {
      key: "overlay.line.color",
      text: I("Line color", e),
      component: "color"
    },
    {
      key: "overlay.rect.style",
      text: I("Rect Style", e),
      component: "select",
      dataSource: t
    },
    {
      key: "overlay.rect.color",
      text: I("Rect color", e),
      component: "color"
    },
    {
      key: "overlay.rect.borderColor",
      text: I("Rect border color", e),
      component: "color"
    },
    {
      key: "overlay.polygon.style",
      text: I("Polygon Style", e),
      component: "select",
      dataSource: t
    },
    {
      key: "overlay.polygon.color",
      text: I("Polygon color", e),
      component: "color"
    },
    {
      key: "overlay.polygon.borderColor",
      text: I("Polygon border color", e),
      component: "color"
    },
    {
      key: "overlay.circle.style",
      text: I("Circle Style", e),
      component: "select",
      dataSource: t
    },
    {
      key: "overlay.circle.color",
      text: I("Circle color", e),
      component: "color"
    },
    {
      key: "overlay.circle.borderColor",
      text: I("Circle border color", e),
      component: "color"
    },
    {
      key: "overlay.arc.style",
      text: I("Arc Style", e),
      component: "select",
      dataSource: r
    },
    {
      key: "overlay.arc.size",
      text: I("Arc size", e),
      component: "select",
      dataSource: i
    },
    {
      key: "overlay.arc.color",
      text: I("Arc color", e),
      component: "color"
    },
    {
      key: "overlay.text.size",
      text: I("Text size", e),
      component: "select",
      dataSource: a
    },
    {
      key: "overlay.text.weight",
      text: I("Text weight", e),
      component: "select",
      dataSource: s
    },
    {
      key: "overlay.text.color",
      text: I("Text color", e),
      component: "color"
    },
    {
      key: "overlay.rectText.style",
      text: I("Rect_text style", e),
      component: "select",
      dataSource: t
    },
    {
      key: "overlay.rectText.size",
      text: I("Rect_text size", e),
      component: "select",
      dataSource: a
    },
    {
      key: "overlay.rectText.family",
      text: I("Rect_text font family", e),
      component: "select",
      dataSource: l
    },
    {
      key: "overlay.rectText.weight",
      text: I("Rect_text weight", e),
      component: "select",
      dataSource: s
    },
    {
      key: "overlay.rectText.color",
      text: I("Rect_text color", e),
      component: "color"
    },
    {
      key: "overlay.rectText.backgroundColor",
      text: I("Rect_text background color", e),
      component: "color"
    },
    {
      key: "overlay.rectText.borderColor",
      text: I("Rect_text border color", e),
      component: "color"
    }
  ];
};
function n9(e) {
  const { size: r } = li(e);
  return [
    ...$E(e),
    ...TE(e),
    ...ME(e),
    ...EE(e),
    ...DE(e),
    ...FE(e),
    ...OE(e),
    // seperator
    {
      key: "separator.size",
      text: I("Seperator size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "separator.fill",
      text: I("Fill", e),
      component: "switch"
    },
    {
      key: "separator.activeBackgroundColor",
      text: I("Background color", e),
      component: "color"
    }
  ];
}
var RE = /* @__PURE__ */ ue("<div class=klinecharts-pro-setting-modal-content><div class=sidebar></div><div class=content>"), BE = /* @__PURE__ */ ue("<button>"), NE = /* @__PURE__ */ ue("<div class=component><span>");
const zE = (e) => {
  const [r, t] = J(e.currentStyles), [i, a] = J(n9(e.locale)), [s, l] = J("candle");
  En(() => {
    a(n9(e.locale));
  });
  const u = (d, v) => {
    var _, w;
    const m = localStorage.getItem(`chartstatedata_${(_ = bt()) == null ? void 0 : _.id}`);
    let y;
    m ? (y = JSON.parse(m), y.styleObj = y.styleObj ?? {}) : y = {
      styleObj: {}
    }, Hs(y.styleObj, d.key, v), localStorage.setItem(`chartstatedata_${(w = bt()) == null ? void 0 : w.id}`, JSON.stringify(y)), ra(!0);
    const C = {};
    Hs(C, d.key, v), Hs(C, d.key, v);
    const b = ee.clone(r());
    Hs(b, d.key, v), t(b), a(i().map((T) => ({
      ...T
    }))), e.onChange(C);
  }, c = () => {
    var m, y;
    const d = localStorage.getItem(`chartstatedata_${(m = bt()) == null ? void 0 : m.id}`);
    let v;
    d && (v = JSON.parse(d), v.styleObj && (v.styleObj = {}), localStorage.setItem(`chartstatedata_${(y = bt()) == null ? void 0 : y.id}`, JSON.stringify(v))), e.onRestoreDefault(i()), e.onClose();
  }, h = [{
    text: "Candle",
    key: "candle"
  }, {
    text: "Indicator",
    key: "indicator"
  }, {
    text: "Grid",
    key: "grid"
  }, {
    text: "X-axis",
    key: "xAxis"
  }, {
    text: "Y-axis",
    key: "yAxis"
  }, {
    text: "Separator",
    key: "separator"
  }, {
    text: "Crosshair",
    key: "crosshair"
  }, {
    text: "Overlay",
    key: "overlay"
  }];
  return se(Mi, {
    get title() {
      return I("setting", e.locale);
    },
    get buttons() {
      return [{
        children: I("restore_default", e.locale),
        onClick: () => {
          c();
        }
      }];
    },
    get onClose() {
      return e.onClose;
    },
    get children() {
      var d = RE(), v = d.firstChild, m = v.nextSibling;
      return le(v, () => h.map((y) => (() => {
        var C = BE();
        return C.$$click = () => l(y.key), le(C, () => y.text), Pt(() => Bn(C, `${s() == y.key ? "selected" : ""}`)), C;
      })())), le(m, se(ol, {
        get each() {
          return i().filter((y) => y.key.includes(s()));
        },
        children: (y) => {
          let C;
          const b = ee.formatValue(r(), y.key);
          switch (y.component) {
            case "select": {
              C = se(ll, {
                style: {
                  width: "120px"
                },
                get value() {
                  return I(b, e.locale);
                },
                get dataSource() {
                  return y.dataSource;
                },
                onSelected: (_) => {
                  const w = _.key;
                  u(y, w);
                }
              });
              break;
            }
            case "switch": {
              const _ = !!b;
              C = se(e5, {
                open: _,
                onChange: () => {
                  u(y, !_);
                }
              });
              break;
            }
            case "color": {
              C = // <input style={'width: 120px'} type="color" value={value as any} 
              //   onchange={(el) => {
              //     const newValue = el.target.value
              //     update(option, newValue)
              //   }} 
              // />
              se(b1, {
                style: {
                  width: "120px"
                },
                value: b,
                onChange: (_) => {
                  u(y, _);
                }
              });
              break;
            }
          }
          return (() => {
            var _ = NE(), w = _.firstChild;
            return le(w, () => y.text), le(_, C, null), _;
          })();
        }
      })), d;
    }
  });
};
Dr(["click"]);
var VE = /* @__PURE__ */ ue("<img style=width:500px;margin-top:20px>");
const WE = (e) => se(Mi, {
  get title() {
    return I("screenshot", e.locale);
  },
  width: 540,
  get buttons() {
    return [{
      type: "confirm",
      children: I("save", e.locale),
      onClick: () => {
        const r = document.createElement("a");
        r.download = "screenshot", r.href = e.url, document.body.appendChild(r), r.click(), r.remove();
      }
    }];
  },
  get onClose() {
    return e.onClose;
  },
  get children() {
    var r = VE();
    return Pt(() => Er(r, "src", e.url)), r;
  }
}), YE = {
  AO: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 5 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 34 }
  ],
  BIAS: [
    { paramNameKey: "BIAS1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "BIAS2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "BIAS3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "BIAS4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "BIAS5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  BOLL: [
    { paramNameKey: "period", precision: 0, min: 1, default: 20 },
    { paramNameKey: "standard_deviation", precision: 2, min: 1, default: 2 }
  ],
  BRAR: [
    { paramNameKey: "period", precision: 0, min: 1, default: 26 }
  ],
  BBI: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 3 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_4", precision: 0, min: 1, default: 24 }
  ],
  CCI: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 20 }
  ],
  CR: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 26 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 10 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 20 },
    { paramNameKey: "params_4", precision: 0, min: 1, default: 40 },
    { paramNameKey: "params_5", precision: 0, min: 1, default: 60 }
  ],
  DMA: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 10 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 50 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 10 }
  ],
  DMI: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 14 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  EMV: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 14 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 9 }
  ],
  EMA: [
    { paramNameKey: "EMA1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "EMA2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "EMA3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "EMA4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "EMA5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  MTM: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  MA: [
    { paramNameKey: "MA1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "MA2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "MA3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "MA4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "MA5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  MACD: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 26 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 9 }
  ],
  OBV: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 30 }
  ],
  PVT: [],
  PSY: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  ROC: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  RSI: [
    { paramNameKey: "RSI1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "RSI2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "RSI3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "RSI4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "RSI5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  SMA: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 2 }
  ],
  KDJ: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 9 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 3 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 3 }
  ],
  SAR: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 2 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 2 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 20 }
  ],
  TRIX: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 9 }
  ],
  VOL: [
    { paramNameKey: "MA1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "MA2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "MA3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "MA4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "MA5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  VR: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 26 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  WR: [
    { paramNameKey: "WR1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "WR2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "WR3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "WR4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "WR5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ]
};
var XE = /* @__PURE__ */ ue("<div class=klinecharts-pro-indicator-setting-modal-content>"), ZE = /* @__PURE__ */ ue("<span>");
const UE = (e) => {
  const [r, t] = J(ee.clone(e.params.calcParams)), i = (a) => YE[a];
  return se(Mi, {
    get title() {
      return e.params.indicatorName;
    },
    width: 360,
    get buttons() {
      return [{
        type: "confirm",
        children: I("confirm", e.locale),
        onClick: () => {
          const a = i(e.params.indicatorName), s = [];
          ee.clone(r()).forEach((l, u) => {
            !ee.isValid(l) || l === "" ? "default" in a[u] && s.push(a[u].default) : s.push(l);
          }), e.onConfirm(s), e.onClose();
        }
      }];
    },
    get onClose() {
      return e.onClose;
    },
    get children() {
      var a = XE();
      return le(a, () => i(e.params.indicatorName).map((s, l) => [(() => {
        var u = ZE();
        return le(u, () => I(s.paramNameKey, e.locale)), u;
      })(), se(oa, {
        style: {
          width: "200px"
        },
        get value() {
          return r()[l] ?? "";
        },
        get precision() {
          return s.precision;
        },
        get min() {
          return s.min;
        },
        onChange: (u) => {
          const c = ee.clone(r());
          c[l] = u, t(c);
        }
      })])), a;
    }
  });
};
var KE = /* @__PURE__ */ ue('<svg viewBox="0 0 1024 1024"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z">'), HE = /* @__PURE__ */ ue("<img alt=symbol>"), GE = /* @__PURE__ */ ue("<li><div><span>");
const QE = (e) => {
  const [r, t] = J(""), [i] = Y7(r, e.datafeed.searchSymbols.bind(e.datafeed));
  return se(Mi, {
    get title() {
      return I("symbol_search", e.locale);
    },
    width: 460,
    get onClose() {
      return e.onClose;
    },
    get children() {
      return [se(oa, {
        class: "klinecharts-pro-symbol-search-modal-input",
        get placeholder() {
          return I("symbol_code", e.locale);
        },
        get suffix() {
          return KE();
        },
        get value() {
          return r();
        },
        onChange: (a) => {
          const s = `${a}`;
          t(s);
        }
      }), se(sl, {
        class: "klinecharts-pro-symbol-search-modal-list",
        get loading() {
          return i.loading;
        },
        get dataSource() {
          return i() ?? [];
        },
        renderItem: (a) => (() => {
          var s = GE(), l = s.firstChild, u = l.firstChild;
          return s.$$click = () => {
            e.onSymbolSelected(a), e.onClose();
          }, le(l, se(Ct, {
            get when() {
              return a.logo;
            },
            get children() {
              var c = HE();
              return Pt(() => Er(c, "src", a.logo)), c;
            }
          }), u), le(u, () => a.shortName ?? a.ticker, null), le(u, () => `${a.name ? `(${a.name})` : ""}`, null), le(s, () => a.exchange ?? "", null), Pt(() => Er(u, "title", a.name ?? "")), s;
        })()
      })];
    }
  });
};
Dr(["click"]);
var jE = /* @__PURE__ */ ue("<span>No Opened Orders"), qE = /* @__PURE__ */ ue("<div class=tab_wrapper><div class=tab_button_holder><button>Running</button><button>Closed</button></div><div class=tab_content_wrapper>"), JE = /* @__PURE__ */ ue("<div class=klinecharts-pro-order-panel>"), eD = /* @__PURE__ */ ue("<li style=min-width:1400px><div class=order-header><span style=width:8%>Order Id</span><span style=width:8%>Session Id</span><span style=width:8%>Action Type</span><span style=width:8%>Entry Point</span><span style=width:8%>Take Profit</span><span style=width:8%>Stop Loss</span><span style=width:8%>Profit/Loss</span><span style=width:8%>Exit Point</span><span style=width:10%>Entry Time</span><span style=width:10%>Exit Time</span><span style=width:8%>Edit Order</span><span style=width:8%>Close Order"), tD = /* @__PURE__ */ ue("<li>"), rD = /* @__PURE__ */ ue("<li style=min-width:1400px><div class=order-item><span style=width:8%></span><span style=width:8%></span><span style=width:8%></span><span style=width:8%></span><span style=width:8%></span><span style=width:8%></span><span style=width:8%></span><span style=width:8%></span><span style=width:10%></span><span style=width:10%></span><span style=width:8%></span><span style=width:8%>");
const nD = (e) => {
  const [r, t] = J(!0), [i, a] = J([]), [s, l] = J(!0), u = (d) => {
    if (ul(!1), tr(!1), d) {
      Mo(d);
      let v = nt();
      v.map((m) => m.orderId === d.orderId ? d : m), a(v);
    }
  }, c = (d, v) => {
    var y;
    let m = (y = Pe()) == null ? void 0 : y.getOverlayById(`orderline_${d.orderId}`);
    if (m) {
      if (v == "edit") {
        ul(!0), tr(!0), e.orderController.launchOrderModal("modifyorder", u, {
          id: d.orderId,
          stoploss: d.stopLoss,
          takeprofit: d.takeProfit,
          entrypoint: d.action == "buy" || d.action == "sell" ? void 0 : d.entryPoint,
          lotsize: d.action == "buy" || d.action == "sell" ? void 0 : d.lotSize,
          action: d.action
        });
        return;
      }
      Q().closeOrder(m, v == "close" ? "manualclose" : "cancel");
    }
  }, h = (d) => d ? Number.isInteger(d) ? d.toString() : d.toFixed(2) : null;
  return Tf(() => {
    t(!0), (async (v) => {
      const m = v ? nt().filter((y) => y.action == v) : i();
      a(m), t(!1);
    })();
  }), (() => {
    var d = JE();
    return le(d, se(Ct, {
      get when() {
        return yt(() => nt().length < 1)() && !r();
      },
      get children() {
        return jE();
      }
    }), null), le(d, se(Ct, {
      get when() {
        return nt().length > 0 || r();
      },
      get children() {
        var v = qE(), m = v.firstChild, y = m.firstChild, C = y.nextSibling, b = m.nextSibling;
        return y.$$click = () => {
          l(!0);
        }, C.$$click = () => {
          l(!1);
        }, le(b, se(sl, {
          class: "klinecharts-pro-order-pane-list",
          get loading() {
            return r();
          },
          get children() {
            return [yt(() => yt(() => !r())() ? eD() : tD()), yt(() => nt().filter((_) => s() ? _.exitType == null : _.exitType != null).map((_) => (() => {
              var w = rD(), T = w.firstChild, P = T.firstChild, M = P.nextSibling, F = M.nextSibling, O = F.nextSibling, V = O.nextSibling, W = V.nextSibling, N = W.nextSibling, Y = N.nextSibling, K = Y.nextSibling, G = K.nextSibling, q = G.nextSibling, he = q.nextSibling;
              return le(P, () => _.orderId), le(M, () => _.sessionId), le(F, () => _.action), le(O, () => _.entryPoint || "N/A"), le(V, () => _.takeProfit || "N/A"), le(W, () => _.stopLoss || "N/A"), le(N, () => h(_.pl) || "N/A"), le(Y, () => _.exitPoint || "N/A"), le(K, () => _.entryTime), le(G, () => _.exitTime), le(q, se(vf, {
                get isDisabled() {
                  return !s();
                },
                type: "confirm",
                class: "edit-button",
                onClick: () => {
                  c(_, "edit");
                },
                children: "Edit"
              })), le(he, se(vf, {
                get isDisabled() {
                  return !s();
                },
                type: "cancel",
                class: "close-button",
                onClick: () => {
                  c(_, _.action == "buy" || _.action == "sell" ? "close" : "cancel");
                },
                get children() {
                  return _.action == "buy" || _.action == "sell" ? "Close" : "Cancel";
                }
              })), w;
            })()))];
          }
        })), Pt((_) => {
          var w = `${s() ? "selected" : ""}`, T = `${s() ? "" : "selected"}`;
          return w !== _.e && Bn(y, _.e = w), T !== _.t && Bn(C, _.t = T), _;
        }, {
          e: void 0,
          t: void 0
        }), v;
      }
    }), null), d;
  })();
};
Dr(["click"]);
const iD = (e) => {
  const { font_size: r, font_family: t, font_weight: i, fill_stroke: a, solid_dashed: s, size: l, true_false: u } = li(e), c = [
    {
      key: "activeBorderSize",
      text: I("active border size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "borderSize",
      text: I("Border size", e),
      component: "select",
      dataSource: l
    },
    {
      key: "color",
      text: I("Color", e),
      component: "color"
    },
    {
      key: "activeColor",
      text: I("Color", e),
      component: "color"
    },
    {
      key: "activeBorderColor",
      text: I("Color", e),
      component: "color"
    },
    {
      key: "borderColor",
      text: I("Border color", e),
      component: "color"
    },
    {
      key: "activeRadius",
      text: I("Active radius", e),
      component: "input"
    },
    {
      key: "radius",
      text: I("Radius", e),
      component: "input"
    }
  ], h = [
    {
      key: "style",
      text: I("Style", e),
      component: "select",
      dataSource: a
    },
    {
      key: "size",
      text: I("Font size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "family",
      text: I("Font family", e),
      component: "select",
      dataSource: t
    },
    {
      key: "weight",
      text: I("Font weight", e),
      component: "select",
      dataSource: i
    },
    {
      key: "borderStyle",
      text: I("Border style", e),
      component: "select",
      dataSource: s
    },
    {
      key: "borderSize",
      text: I("Border size", e),
      component: "select",
      dataSource: l
    },
    {
      key: "color",
      text: I("Color", e),
      component: "color"
    },
    {
      key: "backgroundColor",
      text: I("Background color", e),
      component: "color"
    },
    {
      key: "borderColor",
      text: I("Border color", e),
      component: "color"
    },
    {
      key: "borderDashedValue",
      text: I("Border dashed value", e),
      component: "input"
    },
    {
      key: "borderRadius",
      text: I("Border radius", e),
      component: "input"
    },
    {
      key: "paddingLeft",
      text: I("Padding left", e),
      component: "input"
    },
    {
      key: "paddingRight",
      text: I("Padding right", e),
      component: "input"
    },
    {
      key: "paddingBottom",
      text: I("Padding bottom", e),
      component: "input"
    },
    {
      key: "paddingTop",
      text: I("Padding top", e),
      component: "input"
    }
  ], d = [
    {
      key: "style",
      text: I("Style", e),
      component: "select",
      dataSource: s
    },
    {
      key: "size",
      text: I("Size", e),
      component: "select",
      dataSource: l
    },
    {
      key: "color",
      text: I("Color", e),
      component: "color"
    },
    {
      key: "dashedValue",
      text: I("Dashed Value", e),
      component: "input"
    }
  ], v = [
    {
      key: "style",
      text: I("Style", e),
      component: "select",
      dataSource: a
    },
    {
      key: "color",
      text: I("Color", e),
      component: "color"
    },
    {
      key: "borderColor",
      text: I("Border color", e),
      component: "color"
    },
    {
      key: "borderSize",
      text: I("Active border size", e),
      component: "select",
      dataSource: r
    },
    {
      key: "borderStyle",
      text: I("Border style", e),
      component: "select",
      dataSource: s
    },
    {
      key: "borderDashedValue",
      text: I("Border dashed value", e),
      component: "input"
    }
  ], m = d;
  m.push({
    key: "smooth",
    text: I("Smooth", e),
    component: "select",
    dataSource: u
  });
  const y = v;
  return y.push({
    key: "borderRadius",
    text: I("Border radius", e),
    component: "input"
  }), {
    point: c,
    text: h,
    line: m,
    rect: y,
    polygon: v,
    circle: v,
    arc: d
  };
};
var aD = /* @__PURE__ */ ue("<div class=klinecharts-pro-overlay-setting-modal-content><div class=content>"), i9 = /* @__PURE__ */ ue("<div>"), oD = /* @__PURE__ */ ue("<div class=component><span>");
const sD = (e) => {
  var u, c;
  const r = iD(e.locale), t = (h, d) => {
    var v, m, y, C, b, _;
    return d ? (v = St()) != null && v.styles[d][h] ? (m = St()) == null ? void 0 : m.styles[d][h] : Io[`${(y = Lt()) == null ? void 0 : y.overlayType}Style`]()[d][h] : (C = St()) != null && C.styles[h] ? (b = St()) == null ? void 0 : b.styles[h] : Io[`${(_ = Lt()) == null ? void 0 : _.overlayType}Style`]()[h];
  }, i = (h, d, v) => {
    var _, w;
    const m = localStorage.getItem(`chartstatedata_${(_ = bt()) == null ? void 0 : _.id}`);
    let y;
    m ? (y = JSON.parse(m), y.orderStyles = y.orderStyles ?? {}) : y = {
      orderStyles: {}
    };
    const C = (T) => {
      var M, F, O;
      const P = lt.cloneDeep(T);
      return v ? lt.set(P, `${v}.${h.key}`, d) : lt.set(P, `${h.key}`, d), (F = Pe()) == null || F.overrideOverlay({
        id: (M = St()) == null ? void 0 : M.id,
        styles: P
      }), Ko((V) => {
        var W;
        return ((W = Pe()) == null ? void 0 : W.getOverlayById(V == null ? void 0 : V.id)) ?? V;
      }), St() && z1().syncObject(St()), (O = Pe()) == null || O.setStyles(y.styleObj ?? {}), P;
    }, b = (w = Lt()) == null ? void 0 : w.overlayType;
    W2[`set${b}Style`] && W2[`set${b}Style`]((T) => C(T));
  }, a = Io[`${(u = Lt()) == null ? void 0 : u.overlayType}Style`] ? Io[`${(c = Lt()) == null ? void 0 : c.overlayType}Style`]() : void 0;
  let s = [], l = [];
  return a && (s = Object.keys(r), l = Object.keys(a)), se(Mi, {
    get title() {
      return `Style ${Kf()}`;
    },
    onClose: () => p5(!1),
    get children() {
      var h = aD(), d = h.firstChild;
      return le(d, se(ol, {
        each: l,
        children: (v) => {
          if (s.includes(v))
            return [(() => {
              var m = i9();
              return le(m, v), m;
            })(), se(ol, {
              get each() {
                return r[v];
              },
              children: (m) => {
                let y;
                const C = t(m.key, v);
                if (C !== void 0) {
                  switch (m.component) {
                    case "select": {
                      y = se(ll, {
                        style: {
                          width: "120px"
                        },
                        get value() {
                          return I(C, e.locale);
                        },
                        get dataSource() {
                          return m.dataSource;
                        },
                        onSelected: (b) => {
                          const _ = b.key;
                          i(m, _, v);
                        }
                      });
                      break;
                    }
                    case "input": {
                      y = [se(Ct, {
                        get when() {
                          return lt.isArray(C);
                        },
                        get children() {
                          var b = i9();
                          return b.style.setProperty("width", "120px"), b.style.setProperty("display", "flex"), b.style.setProperty("flex-direction", "row"), b.style.setProperty("align-items", "center"), b.style.setProperty("vertical-align", "middle"), le(b, se(oa, {
                            style: {
                              width: "50px",
                              "margin-right": "10px"
                            },
                            get value() {
                              return C[0] ?? "4";
                            },
                            onChange: (_) => {
                              let w = t(m.key, v);
                              w[0] = Number(_), i(m, w, v);
                            }
                          }), null), le(b, se(oa, {
                            style: {
                              width: "50px",
                              "margin-left": "10px"
                            },
                            get value() {
                              return C[1] ?? "4";
                            },
                            onChange: (_) => {
                              let w = t(m.key, v);
                              w[1] = Number(_), i(m, w, v);
                            }
                          }), null), b;
                        }
                      }), se(Ct, {
                        get when() {
                          return !lt.isArray(C);
                        },
                        get children() {
                          return se(oa, {
                            style: {
                              width: "120px"
                            },
                            value: C ?? "4",
                            onChange: (b) => {
                              let _ = Number(b);
                              i(m, _, v);
                            }
                          });
                        }
                      })];
                      break;
                    }
                    case "color": {
                      y = se(b1, {
                        style: {
                          width: "120px"
                        },
                        value: C,
                        onChange: (b) => {
                          i(m, b, v);
                        }
                      });
                      break;
                    }
                  }
                  if (y)
                    return (() => {
                      var b = oD(), _ = b.firstChild;
                      return le(_, () => m.text), le(b, y, null), b;
                    })();
                }
              }
            })];
        }
      })), h;
    }
  });
};
var lD = /* @__PURE__ */ ue("<div class=klinecharts-pro-position-setting-modal-content><div class=content>"), uD = /* @__PURE__ */ ue("<div>"), a9 = /* @__PURE__ */ ue("<div class=component><span>");
const cD = (e) => {
  const {
    font_size: r,
    font_family: t,
    font_weight: i,
    fill_stroke: a,
    solid_dashed: s,
    size: l
  } = li(e.locale), u = [{
    key: "style",
    text: I("Style", e.locale),
    component: "select",
    dataSource: a
  }, {
    key: "size",
    text: I("Font size", e.locale),
    component: "select",
    dataSource: r
  }, {
    key: "family",
    text: I("Font family", e.locale),
    component: "select",
    dataSource: t
  }, {
    key: "weight",
    text: I("Font weight", e.locale),
    component: "select",
    dataSource: i
  }, {
    key: "borderStyle",
    text: I("Border Style", e.locale),
    component: "select",
    dataSource: s
  }, {
    key: "borderSize",
    text: I("Border Size", e.locale),
    component: "select",
    dataSource: l
  }, {
    key: "color",
    text: I("Color", e.locale),
    component: "color"
  }, {
    key: "backgroundColor",
    text: I("Background color", e.locale),
    component: "color"
  }, {
    key: "borderColor",
    text: I("Border color", e.locale),
    component: "color"
  }], c = [{
    key: "style",
    text: I("Style", e.locale),
    component: "select",
    dataSource: s
  }, {
    key: "size",
    text: I("Size", e.locale),
    component: "select",
    dataSource: l
  }, {
    key: "color",
    text: I("Color", e.locale),
    component: "color"
  }, {
    key: "dashedValue",
    text: I("Dashed Value", e.locale),
    component: "input"
  }], [h, d] = J(u), [v, m] = J(c), y = (b, _) => {
    var T;
    switch ((T = Lt()) == null ? void 0 : T.overlayType) {
      case "buy":
        return an()[_][b];
      case "buylimit":
        return on()[_][b];
      case "buystop":
        return sn()[_][b];
      case "sell":
        return Lr()[_][b];
      case "selllimit":
        return ii()[_][b];
      case "sellstop":
        return ai()[_][b];
      case "sl":
        return at()[_][b];
      case "tp":
        return je()[_][b];
    }
  }, C = (b, _, w) => {
    var F, O;
    const T = localStorage.getItem(`chartstatedata_${(F = bt()) == null ? void 0 : F.id}`);
    let P;
    T ? (P = JSON.parse(T), P.orderStyles = P.orderStyles ?? {}) : P = {
      orderStyles: {}
    };
    const M = (V) => {
      var N, Y, K;
      const W = lt.cloneDeep(V);
      return lt.set(W, `${w}.${b.key}`, _), lt.set(P.orderStyles, `${(N = Lt()) == null ? void 0 : N.overlayType}Style.${w}.${b.key}`, _), localStorage.setItem(`chartstatedata_${(Y = bt()) == null ? void 0 : Y.id}`, JSON.stringify(P)), ra(!0), (K = Pe()) == null || K.setStyles(P.styleObj ?? {}), W;
    };
    switch ((O = Lt()) == null ? void 0 : O.overlayType) {
      case "buy":
        t5((V) => M(V));
        break;
      case "buylimit":
        r5((V) => M(V));
        break;
      case "buystop":
        n5((V) => M(V));
        break;
      case "sell":
        i5((V) => M(V));
        break;
      case "selllimit":
        a5((V) => M(V));
        break;
      case "sellstop":
        o5((V) => M(V));
        break;
      case "sl":
        l5((V) => M(V));
        break;
      case "tp":
        s5((V) => M(V));
        break;
    }
  };
  return se(Mi, {
    get title() {
      return `Style ${Kf()}`;
    },
    onClose: () => v5(!1),
    get children() {
      var b = lD(), _ = b.firstChild;
      return le(_, se(ol, {
        get each() {
          return v();
        },
        children: (w) => {
          let T;
          const P = y(w.key, "lineStyle");
          switch (w.component) {
            case "select": {
              T = se(ll, {
                style: {
                  width: "120px"
                },
                get value() {
                  return I(P, e.locale);
                },
                get dataSource() {
                  return w.dataSource;
                },
                onSelected: (M) => {
                  const F = M.key;
                  C(w, F, "lineStyle");
                }
              });
              break;
            }
            case "input": {
              T = (() => {
                var M = uD();
                return M.style.setProperty("width", "120px"), M.style.setProperty("display", "flex"), M.style.setProperty("flex-direction", "row"), M.style.setProperty("align-items", "center"), M.style.setProperty("vertical-align", "middle"), le(M, se(oa, {
                  style: {
                    width: "50px",
                    "margin-right": "10px"
                  },
                  get value() {
                    return P[0] ?? "4";
                  },
                  onChange: (F) => {
                    let O = y(w.key, "lineStyle");
                    O[0] = Number(F), C(w, O, "lineStyle");
                  }
                }), null), le(M, se(oa, {
                  style: {
                    width: "50px",
                    "margin-left": "10px"
                  },
                  get value() {
                    return P[1] ?? "4";
                  },
                  onChange: (F) => {
                    let O = y(w.key, "lineStyle");
                    O[1] = Number(F), C(w, O, "lineStyle");
                  }
                }), null), M;
              })();
              break;
            }
            case "color": {
              T = se(b1, {
                style: {
                  width: "120px"
                },
                value: P,
                onChange: (M) => {
                  C(w, M, "lineStyle");
                }
              });
              break;
            }
          }
          return (() => {
            var M = a9(), F = M.firstChild;
            return le(F, () => w.text), le(M, T, null), M;
          })();
        }
      }), null), le(_, se(ol, {
        get each() {
          return h();
        },
        children: (w) => {
          let T;
          const P = y(w.key, "labelStyle");
          switch (w.component) {
            case "select": {
              T = se(ll, {
                style: {
                  width: "120px"
                },
                get value() {
                  return I(P, e.locale);
                },
                get dataSource() {
                  return w.dataSource;
                },
                onSelected: (M) => {
                  const F = M.key;
                  C(w, F, "labelStyle");
                }
              });
              break;
            }
            case "switch": {
              const M = !!P;
              T = se(e5, {
                open: M,
                onChange: () => {
                  C(w, !M, "labelStyle");
                }
              });
              break;
            }
            case "color": {
              T = se(b1, {
                style: {
                  width: "120px"
                },
                value: P,
                onChange: (M) => {
                  C(w, M, "labelStyle");
                }
              });
              break;
            }
          }
          return (() => {
            var M = a9(), F = M.firstChild;
            return le(F, () => w.text), le(M, T, null), M;
          })();
        }
      }), null), b;
    }
  });
};
var fD = /* @__PURE__ */ ue('<i class="icon-close klinecharts-pro-load-icon">'), hD = /* @__PURE__ */ ue("<div class=klinecharts-pro-content><div class=klinecharts-pro-widget>");
const {
  createIndicator: o9,
  modifyIndicator: dD,
  popIndicator: vD,
  pushOverlay: pD,
  pushMainIndicator: gD,
  pushSubIndicator: yD,
  redrawOrders: mD,
  redraOverlaysIndiAndFigs: _D
} = z1(), [Pe, y5] = J(null), [gr, Jc] = J(), [bt, m5] = J(null), [S1, xD] = J(null), [na, _f] = J(!1), [s9, bD] = J(!1), [$o, w1] = J(""), [_5, CD] = J(""), [e1, l9] = J(!1), [Qs, k1] = J(!1), [js, L1] = J(!1), [qs, P1] = J(!1), [To, xf] = J(!1), [SD, bf] = J(!1), wD = (e) => {
  let r, t = null, i, a = !1, s;
  const [l, u] = J(e.styles), [c, h] = J(e.locale), [d, v] = J(e.period), [m, y] = J(!1), [C, b] = J({
    key: e.timezone,
    text: r9(e.timezone, e.locale)
  }), [_, w] = J(), [T, P] = J(!1), [M, F] = J(!1), [O, V] = J({
    visible: !1,
    indicatorName: "",
    paneId: "",
    calcParams: []
  });
  Jc(e.symbol), Y2(e.theme), m5(e.chartSession), xD(e.chartSessionController), m1([...e.mainIndicators]), CD(e.rootElementId), l9(e.drawingBarVisible), k1(e.orderPanelVisible), EL(e.datafeed), e.ref({
    setTheme: Y2,
    getTheme: () => gf(),
    setStyles: u,
    getStyles: () => t.getStyles(),
    setLocale: h,
    getLocale: () => c(),
    setTimezone: (N) => {
      b({
        key: N,
        text: r9(e.timezone, c())
      });
    },
    getTimezone: () => C().key,
    setSymbol: Jc,
    getSymbol: () => gr(),
    setPeriod: v,
    getPeriod: () => d()
  });
  const W = (N, Y, K) => {
    let G = Y, q = G;
    switch (N.timespan) {
      case "minute": {
        G = G - G % (60 * 1e3), q = G - K * N.multiplier * 60 * 1e3;
        break;
      }
      case "hour": {
        G = G - G % (60 * 60 * 1e3), q = G - K * N.multiplier * 60 * 60 * 1e3;
        break;
      }
      case "day": {
        G = G - G % (60 * 60 * 1e3), q = G - K * N.multiplier * 24 * 60 * 60 * 1e3;
        break;
      }
      case "week": {
        const ge = new Date(G).getDay(), ve = ge === 0 ? 6 : ge - 1;
        G = G - ve * 60 * 60 * 24;
        const De = new Date(G);
        G = (/* @__PURE__ */ new Date(`${De.getFullYear()}-${De.getMonth() + 1}-${De.getDate()}`)).getTime(), q = K * N.multiplier * 7 * 24 * 60 * 60 * 1e3;
        break;
      }
      case "month": {
        const he = new Date(G), ge = he.getFullYear(), ve = he.getMonth() + 1;
        G = (/* @__PURE__ */ new Date(`${ge}-${ve}-01`)).getTime(), q = K * N.multiplier * 30 * 24 * 60 * 60 * 1e3;
        const De = new Date(q);
        q = (/* @__PURE__ */ new Date(`${De.getFullYear()}-${De.getMonth() + 1}-01`)).getTime();
        break;
      }
      case "year": {
        const ge = new Date(G).getFullYear();
        G = (/* @__PURE__ */ new Date(`${ge}-01-01`)).getTime(), q = K * N.multiplier * 365 * 24 * 60 * 60 * 1e3;
        const ve = new Date(q);
        q = (/* @__PURE__ */ new Date(`${ve.getFullYear()}-01-01`)).getTime();
        break;
      }
    }
    return [q, G];
  };
  return Tf(() => {
    if (document.addEventListener("contextmenu", function(Y) {
      Y.preventDefault();
    }), document.addEventListener("keydown", Ju().handleKeyDown), document.addEventListener("keyup", Ju().handleKeyUp), kD(e.orderController), window.addEventListener("resize", Gs), t = _7(r, {
      customApi: {
        formatDate: (Y, K, G, q) => {
          switch (d().timespan) {
            case "minute":
              return q === Jt.XAxis ? ee.formatDate(Y, K, "HH:mm") : ee.formatDate(Y, K, "YYYY-MM-DD HH:mm");
            case "hour":
              return q === Jt.XAxis ? ee.formatDate(Y, K, "MM-DD HH:mm") : ee.formatDate(Y, K, "YYYY-MM-DD HH:mm");
            case "day":
            case "week":
              return ee.formatDate(Y, K, "YYYY-MM-DD");
            case "month":
              return q === Jt.XAxis ? ee.formatDate(Y, K, "YYYY-MM") : ee.formatDate(Y, K, "YYYY-MM-DD");
            case "year":
              return q === Jt.XAxis ? ee.formatDate(Y, K, "YYYY") : ee.formatDate(Y, K, "YYYY-MM-DD");
          }
          return ee.formatDate(Y, K, "YYYY-MM-DD HH:mm");
        }
      }
    }), t) {
      y5(t), lT(r);
      const Y = t.getDom("candle_pane", bn.Main);
      if (Y) {
        let G = document.createElement("div");
        if (G.className = "klinecharts-pro-watermark", ee.isString(e.watermark)) {
          const q = e.watermark.replace(/(^\s*)|(\s*$)/g, "");
          G.innerHTML = q;
        } else
          G.appendChild(e.watermark);
        Y.appendChild(G);
      }
      const K = t.getDom("candle_pane", bn.YAxis);
      i = document.createElement("span"), i.className = "klinecharts-pro-price-unit", K == null || K.appendChild(i);
    }
    tl().forEach((Y) => {
      o9(t, Y, !0, {
        id: "candle_pane"
      });
    });
    const N = {};
    e.subIndicators.forEach((Y) => {
      const K = o9(t, Y, !0);
      K && (N[Y] = K);
    }), x1(N), t == null || t.loadMore((Y) => {
      a = !0, (async () => {
        const G = d(), [q] = W(G, Y, 1), [he] = W(G, q, 500), ge = await e.datafeed.getHistoryKLineData(gr(), G, he, q);
        t == null || t.applyMoreData(ge, ge.length > 0), a = !1;
      })();
    }), t == null || t.subscribeAction(Cn.OnTooltipIconClick, (Y) => {
      if (Y.indicatorName)
        switch (Y.iconId) {
          case "visible": {
            t == null || t.overrideIndicator({
              name: Y.indicatorName,
              visible: !0
            }, Y.paneId);
            break;
          }
          case "invisible": {
            t == null || t.overrideIndicator({
              name: Y.indicatorName,
              visible: !1
            }, Y.paneId);
            break;
          }
          case "setting": {
            const K = t == null ? void 0 : t.getIndicatorByPaneId(Y.paneId, Y.indicatorName);
            V({
              visible: !0,
              indicatorName: Y.indicatorName,
              paneId: Y.paneId,
              calcParams: K.calcParams
            });
            break;
          }
          case "close": {
            if (Y.paneId === "candle_pane") {
              const K = [...tl()];
              t == null || t.removeIndicator("candle_pane", Y.indicatorName), K.splice(K.indexOf(Y.indicatorName), 1), m1(K);
            } else {
              const K = {
                ..._1()
              };
              t == null || t.removeIndicator(Y.paneId, Y.indicatorName), delete K[Y.indicatorName], x1(K);
            }
            vD(Y.indicatorName, Y.paneId);
          }
        }
    });
  }), Mf(() => {
    document.removeEventListener("contextmenu", function(N) {
      N.preventDefault();
    }), document.removeEventListener("keydown", Ju().handleKeyDown), document.removeEventListener("keyup", Ju().handleKeyUp), window.removeEventListener("resize", Gs), clearInterval(s), yd(r);
  }), En(() => {
    const N = gr();
    N != null && N.priceCurrency ? (i.innerHTML = N == null ? void 0 : N.priceCurrency.toLocaleUpperCase(), i.style.display = "flex") : i.style.display = "none", t == null || t.setPriceVolumePrecision((N == null ? void 0 : N.pricePrecision) ?? 2, (N == null ? void 0 : N.volumePrecision) ?? 0);
  }), En((N) => {
    if (!a) {
      N && e.datafeed.unsubscribe(N.symbol, N.period);
      const Y = gr(), K = d();
      return a = !0, F(!0), (async () => {
        const q = e.dataTimestamp ?? (/* @__PURE__ */ new Date()).getTime(), [he, ge] = W(K, q, 500), ve = await e.datafeed.getHistoryKLineData(Y, K, he, ge);
        t == null || t.applyNewData(ve, ve.length > 0), l2(ve[ve.length - 1]), e.datafeed.subscribe(Y, K, (De, Oe) => {
          l2(De), Oe && J7(Oe), t == null || t.updateData(De);
          const be = nt().filter((ye) => (ye.action == "buy" || ye.action == "sell") && !ye.exitType && !ye.exitPoint);
          if (be && gr() !== void 0) {
            let ye = 0, de = 0;
            for (; de < be.length; )
              be[de].pl !== null && be[de].pips !== null && (ye += be[de].pl), de++;
            LD(ye);
          }
        }), a = !1, F(!1);
      })(), {
        symbol: Y,
        period: K
      };
    }
    return N;
  }), En(() => {
    const N = gf();
    t == null || t.setStyles(N);
    const Y = N === "dark" ? "#929AA5" : "#76808F";
    t == null || t.setStyles({
      indicator: {
        tooltip: {
          icons: [{
            id: "visible",
            position: Ii.Middle,
            marginLeft: 8,
            marginTop: 7,
            marginRight: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: Y,
            activeColor: Y,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }, {
            id: "invisible",
            position: Ii.Middle,
            marginLeft: 8,
            marginTop: 7,
            marginRight: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: Y,
            activeColor: Y,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }, {
            id: "setting",
            position: Ii.Middle,
            marginLeft: 6,
            marginTop: 7,
            marginBottom: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: Y,
            activeColor: Y,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }, {
            id: "close",
            position: Ii.Middle,
            marginLeft: 6,
            marginTop: 7,
            marginRight: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: Y,
            activeColor: Y,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }]
        }
      }
    });
  }), En(() => {
    t == null || t.setLocale(c());
  }), En(() => {
    t == null || t.setTimezone(C().key);
  }), En(() => {
    l() && (t == null || t.setStyles(l()), w(Pk(t.getStyles()))), _D(), mD();
  }), En(() => {
    s = setInterval(() => {
      const N = async () => {
        var he, ge;
        const G = nt().filter((ve) => (ve.action == "buy" || ve.action == "sell") && !ve.exitType && !ve.exitPoint);
        let q = 0;
        if (G && gr() !== void 0)
          for (; q < G.length; )
            await ((ge = Ai()) == null ? void 0 : ge.modifyOrder({
              id: G[q].orderId,
              //in a real application this should be calculated on backend
              exitpoint: (he = me()) == null ? void 0 : he.close,
              exittype: "cancel"
            })), await new Promise((ve) => setTimeout(ve, 400)), q++;
      }, Y = async () => {
        var ge;
        const G = nt().filter((ve) => (ve.action == "buy" || ve.action == "sell") && !ve.exitType && !ve.exitPoint);
        let q = 0, he = 0;
        if (G && gr() !== void 0)
          for (; q < G.length; )
            G[q].pl !== null && G[q].pips !== null && (await ((ge = Ai()) == null ? void 0 : ge.modifyOrder({
              id: G[q].orderId,
              //in a real application this should be calculated on backend
              pips: G[q].pips,
              //in a real application this should be calculated on backend
              pl: G[q].pips * gr().dollarPerPip
            })), await new Promise((ve) => setTimeout(ve, 400))), he += +(G[q].pips * gr().dollarPerPip), q++;
        return he;
      };
      (async () => {
        var ge, ve;
        let G = await Y(), q = bt();
        const he = localStorage.getItem(`chartstatedata_${(ge = bt()) == null ? void 0 : ge.id}`);
        q && (G += + +q.current_bal, G <= 0 && (G = 0, await N()), (q.chart_timestamp !== i1() || he != null) && await ((ve = S1()) == null ? void 0 : ve.updateSession({
          id: q.id,
          current_bal: q.current_bal,
          equity: G,
          chart_timestamp: i1(),
          chart: he != null && f5() ? btoa(he) : void 0
        })) && (q.equity = G, q.chart_timestamp = i1(), ra(!1)));
      })();
    }, 2 * 60 * 1e3), cT(s);
  }), [fD(), se(Ct, {
    get when() {
      return gT();
    },
    get children() {
      return se(TT, {});
    }
  }), se(Ct, {
    get when() {
      return SD();
    },
    get children() {
      return se(zT, {});
    }
  }), se(Ct, {
    get when() {
      return Lo();
    },
    get children() {
      return se(cD, {
        get locale() {
          return e.locale;
        }
      });
    }
  }), se(Ct, {
    get when() {
      return Po();
    },
    get children() {
      return se(sD, {
        get locale() {
          return e.locale;
        }
      });
    }
  }), se(Ct, {
    get when() {
      return To();
    },
    get children() {
      return se(oT, {
        get locale() {
          return e.locale;
        },
        get periods() {
          return e.periods;
        },
        onTimeframeSelected: v
      });
    }
  }), se(Ct, {
    get when() {
      return T();
    },
    get children() {
      return se(QE, {
        get locale() {
          return e.locale;
        },
        get datafeed() {
          return e.datafeed;
        },
        onSymbolSelected: (N) => {
          Jc(N);
        },
        onClose: () => {
          P(!1);
        }
      });
    }
  }), se(Ct, {
    get when() {
      return qs();
    },
    get children() {
      return se(PE, {
        get locale() {
          return e.locale;
        },
        get mainIndicators() {
          return tl();
        },
        get subIndicators() {
          return _1();
        },
        onClose: () => {
          tr(!1), P1(!1);
        },
        onMainIndicatorChange: (N) => {
          gD(N);
        },
        onSubIndicatorChange: (N) => {
          yD(N);
        }
      });
    }
  }), se(Ct, {
    get when() {
      return m();
    },
    get children() {
      return se(AE, {
        get locale() {
          return e.locale;
        },
        get timezone() {
          return C();
        },
        onClose: () => {
          tr(!1), y(!1);
        },
        onConfirm: b
      });
    }
  }), se(Ct, {
    get when() {
      return js();
    },
    get children() {
      return se(zE, {
        get locale() {
          return e.locale;
        },
        get currentStyles() {
          return ee.clone(t.getStyles());
        },
        onClose: () => {
          tr(!1), L1(!1);
        },
        onChange: (N) => {
          t == null || t.setStyles(N);
        },
        onRestoreDefault: (N) => {
          const Y = {};
          N.forEach((K) => {
            const G = K.key;
            Hs(Y, G, ee.formatValue(_(), G));
          }), t == null || t.setStyles(Y);
        }
      });
    }
  }), se(Ct, {
    get when() {
      return $o().length > 0;
    },
    get children() {
      return se(WE, {
        get locale() {
          return e.locale;
        },
        get url() {
          return $o();
        },
        onClose: () => {
          tr(!1), w1("");
        }
      });
    }
  }), se(Ct, {
    get when() {
      return O().visible;
    },
    get children() {
      return se(UE, {
        get locale() {
          return e.locale;
        },
        get params() {
          return O();
        },
        onClose: () => {
          tr(!1), V({
            visible: !1,
            indicatorName: "",
            paneId: "",
            calcParams: []
          });
        },
        onConfirm: (N) => {
          const Y = O();
          dD(Y, N);
        }
      });
    }
  }), se(HT, {
    get locale() {
      return e.locale;
    },
    get symbol() {
      return gr();
    },
    get spread() {
      return e1();
    },
    get order_spread() {
      return Qs();
    },
    get period() {
      return d();
    },
    get periods() {
      return e.periods;
    },
    onMenuClick: async () => {
      try {
        await sf(() => l9(!e1())), Gs();
      } catch {
      }
    },
    onOrderMenuClick: async () => {
      try {
        await sf(() => k1(!Qs())), Gs();
      } catch {
      }
    },
    onSymbolClick: () => {
      P(!T());
    },
    onPeriodChange: v,
    onIndicatorClick: () => {
      P1((N) => !N);
    },
    onTimezoneClick: () => {
      y((N) => !N);
    },
    onSettingClick: () => {
      L1((N) => !N);
    },
    onScreenshotClick: () => {
      if (t) {
        const N = t.getConvertPictureUrl(!0, "jpeg", e.theme === "dark" ? "#151517" : "#ffffff");
        tr(!1), w1(N);
      }
    },
    get orderController() {
      return e.orderController;
    },
    get datafeed() {
      return e.datafeed;
    },
    get rootEl() {
      return e.rootElementId;
    }
  }), (() => {
    var N = hD(), Y = N.firstChild;
    le(N, se(Ct, {
      get when() {
        return M();
      },
      get children() {
        return se(Jd, {});
      }
    }), Y), le(N, se(Ct, {
      get when() {
        return e1();
      },
      get children() {
        return se(LE, {
          get locale() {
            return e.locale;
          },
          onDrawingItemClick: (G) => {
            pD(G);
          },
          onModeChange: (G) => {
            t == null || t.overrideOverlay({
              mode: G
            });
          },
          onLockChange: (G) => {
            t == null || t.overrideOverlay({
              lock: G
            });
          },
          onVisibleChange: (G) => {
            t == null || t.overrideOverlay({
              visible: G
            });
          },
          onRemoveClick: (G) => {
            t == null || t.removeOverlay({
              groupId: G
            });
          }
        });
      }
    }), Y);
    var K = r;
    return typeof K == "function" ? Ef(K, Y) : r = Y, Pt((G) => {
      var q = Qs(), he = e1();
      return q !== G.e && Er(N, "data-orders-pane-visible", G.e = q), he !== G.t && Er(Y, "data-drawing-bar-visible", G.t = he), G;
    }, {
      e: void 0,
      t: void 0
    }), N;
  })(), se(Ct, {
    get when() {
      return Qs();
    },
    get children() {
      return se(nD, {
        context: "this is the order panel context",
        get orderController() {
          return e.orderController;
        }
      });
    }
  })];
};
J(null);
const [Ai, kD] = J(null), [nt, Zr] = J([]), [RF, LD] = J(0), Q = () => ({
  onOrderPlaced: (y) => {
    if (ul(!1), tr(!1), y) {
      Mo(y);
      let C = nt();
      C.find((b) => b.orderId === (y == null ? void 0 : y.orderId)) || (C.push(y), Zr(C));
    }
  },
  calcTarget: (y, C, b, _ = !1, w = "buy") => {
    let T = 10 ** (b - 1), P;
    return w === "buy" ? P = _ ? ((y - C) * T).toFixed(2) : (y - C).toFixed(b) : P = _ ? ((C - y) * T).toFixed(2) : (C - y).toFixed(b), P;
  },
  calcStopOrTarget: (y, C, b, _ = !1, w = "buy") => {
    let T = 10 ** (b - 1), P;
    return w === "sell" ? P = _ ? ((y - C) * T).toFixed(2) : (y - C).toFixed(b) : P = _ ? ((C - y) * T).toFixed(2) : (C - y).toFixed(b), P;
  },
  calcPL: (y, C, b = !1, _ = "buy") => {
    let w = 10 ** (C - 1), T;
    return me() ? _ === "buy" ? T = b ? ((me().close - y) * w).toFixed(2) : (me().close - y).toFixed(C) : T = b ? ((y - me().close) * w).toFixed(2) : (y - me().close).toFixed(C) : T = "", T;
  },
  triggerPending: (y, C) => {
    (async () => {
      var T, P;
      let _ = y.id, w = nt().find((M) => M.orderId === parseInt(_.replace("orderline_", ""))) ?? null;
      if (w) {
        w.action = C, (T = Pe()) == null || T.removeOverlay({
          id: _,
          groupId: y.groupId,
          name: y.name
        });
        const M = await ((P = Ai()) == null ? void 0 : P.modifyOrder({
          id: w.orderId,
          action: w.action,
          entrypoint: w.entryPoint
        }));
        if (M) {
          const F = nt().map((O) => O.orderId === M.orderId ? M : O);
          Zr(F), Mo(M);
        }
      }
    })();
  },
  updateOrder: (y) => {
    (async () => {
      var b;
      await ((b = Ai()) == null ? void 0 : b.modifyOrder(y));
    })();
  },
  closeOrder: (y, C) => {
    (async () => {
      var T, P, M;
      let _ = y.id, w;
      if (console.log(`got to close order: ${_}, exittype: ${C}`), w = nt().find((F) => F.orderId === parseInt(_.replace("orderline_", ""))) ?? null) {
        (T = Pe()) == null || T.removeOverlay({
          //remove the overlay first to prevent flooding this backend with api calls
          id: y.id,
          groupId: y.groupId,
          name: y.name
        });
        const F = await ((M = Ai()) == null ? void 0 : M.modifyOrder({
          id: w.orderId,
          exitpoint: (P = me()) == null ? void 0 : P.close,
          exittype: C,
          pips: C == "cancel" ? void 0 : w.pips,
          //in a real application this should be calculated on backend
          pl: C == "cancel" ? void 0 : w.pl
          //in a real application this should be calculated on backend
        }));
        if (console.log(F), F) {
          const O = bt();
          O.current_bal = +(O == null ? void 0 : O.current_bal) + +F.pl, m5(O);
          const V = nt().map((W) => W.orderId === (F == null ? void 0 : F.orderId) ? F : W);
          Zr(V);
        } else
          Mo(w);
      }
    })();
  },
  removeStopOrTP: (y, C) => {
    (async () => {
      var T, P;
      let _ = y.id, w = nt().find((M) => M.orderId === parseInt(_.replace("orderline_", ""))) ?? null;
      if (w && (w = await ((T = Ai()) == null ? void 0 : T.unsetSlOrTP(w.orderId, C)), w)) {
        (P = Pe()) == null || P.removeOverlay({
          id: _,
          groupId: y.groupId,
          name: y.name
        });
        const M = nt().map((F) => F.orderId === (w == null ? void 0 : w.orderId) ? w : F);
        Zr(M), Mo(w);
      }
    })();
  },
  updatePipsAndPL: (y, C) => {
    var w;
    let b = y.id, _;
    if (_ = nt().find((T) => T.orderId === parseInt(b.replace("orderline_", ""))) ?? null) {
      _.pips = parseFloat(C), _.pl = _.pips * _.lotSize * ((w = gr()) == null ? void 0 : w.dollarPerPip);
      const T = nt().map((P) => P.orderId === (_ == null ? void 0 : _.orderId) ? _ : P);
      Zr(T);
    }
  },
  updateStopLossAndReturnValue: (y, C) => {
    var w, T;
    let b = y.overlay.id, _;
    if (_ = nt().find((P) => P.orderId === parseInt(b.replace("orderline_", ""))) ?? null) {
      _.stopLoss = parseFloat((T = C[0].value) == null ? void 0 : T.toFixed((w = Pe()) == null ? void 0 : w.getPriceVolumePrecision().price));
      const P = nt().map((M) => M.orderId === (_ == null ? void 0 : _.orderId) ? _ : M);
      return Zr(P), _ == null ? void 0 : _.stopLoss;
    }
  },
  updateEntryPointAndReturnValue: (y, C) => {
    var w, T;
    let b = y.overlay.id, _;
    if (_ = nt().find((P) => P.orderId === parseInt(b.replace("orderline_", ""))) ?? null) {
      _.entryPoint = parseFloat((T = C[0].value) == null ? void 0 : T.toFixed((w = Pe()) == null ? void 0 : w.getPriceVolumePrecision().price));
      const P = nt().map((M) => M.orderId === (_ == null ? void 0 : _.orderId) ? _ : M);
      return Zr(P), _ == null ? void 0 : _.entryPoint;
    }
  },
  updateTakeProfitAndReturnValue: (y, C) => {
    var w, T;
    let b = y.overlay.id, _;
    if (_ = nt().find((P) => P.orderId === parseInt(b.replace("orderline_", ""))) ?? null) {
      _.takeProfit = parseFloat((T = C[0].value) == null ? void 0 : T.toFixed((w = Pe()) == null ? void 0 : w.getPriceVolumePrecision().price));
      const P = nt().map((M) => M.orderId === (_ == null ? void 0 : _.orderId) ? _ : M);
      return Zr(P), _ == null ? void 0 : _.takeProfit;
    }
  },
  updatePositionOrder: (y) => {
    let C = y.overlay.id, b;
    (b = nt().find((_) => _.orderId === parseInt(C.replace("orderline_", ""))) ?? null) && Q().updateOrder({
      id: b.orderId,
      stoploss: b.stopLoss,
      entrypoint: b.entryPoint,
      takeprofit: b.takeProfit
    });
  }
}), Mo = (e) => {
  var s, l, u;
  if (!e)
    return;
  let r = (s = Pe()) == null ? void 0 : s.getOverlayById(`orderline_${e.orderId}`);
  r && ((l = Pe()) == null || l.removeOverlay({
    //remove the overlay first to prevent flooding this backend with api calls
    id: r.id,
    groupId: r.groupId,
    name: r.name
  }));
  let t = "", i = !1;
  e.entryPoint = (e == null ? void 0 : e.entryPoint) - 1e-5 + 1e-5, e.stopLoss = (e == null ? void 0 : e.stopLoss) - 1e-5 + 1e-5, e.takeProfit = (e == null ? void 0 : e.takeProfit) - 1e-5 + 1e-5;
  let a = [
    { timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e == null ? void 0 : e.entryPoint }
  ];
  switch (e == null ? void 0 : e.action) {
    case "buy":
      !(e != null && e.stopLoss) && !(e != null && e.takeProfit) ? (t = "buyLine", i = !0) : e.stopLoss && !e.takeProfit ? (t = "buyLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss })) : !e.stopLoss && e.takeProfit ? (t = "buyProfitLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit })) : e.stopLoss && e.takeProfit && (t = "buyProfitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit }), a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss }));
      break;
    case "buystop":
      !(e != null && e.stopLoss) && !(e != null && e.takeProfit) ? t = "buystopLine" : e.stopLoss && !e.takeProfit ? (t = "buystopLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss })) : !e.stopLoss && e.takeProfit ? (t = "buystopProfitLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit })) : e.stopLoss && e.takeProfit && (t = "buystopProfitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit }), a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss }));
      break;
    case "buylimit":
      !(e != null && e.stopLoss) && !(e != null && e.takeProfit) ? t = "buyLimitLine" : e.stopLoss && !e.takeProfit ? (t = "buyLimitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss })) : !e.stopLoss && e.takeProfit ? (t = "buyLimitProfitLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit })) : e.stopLoss && e.takeProfit && (t = "buyLimitProfitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit }), a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss }));
      break;
    case "sell":
      !(e != null && e.stopLoss) && !(e != null && e.takeProfit) ? (t = "sellLine", i = !0) : e.stopLoss && !e.takeProfit ? (t = "sellLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss })) : !e.stopLoss && e.takeProfit ? (t = "sellProfitLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit })) : e.stopLoss && e.takeProfit && (t = "sellProfitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit }), a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss }));
      break;
    case "sellstop":
      !(e != null && e.stopLoss) && !(e != null && e.takeProfit) ? t = "sellstopLine" : e.stopLoss && !e.takeProfit ? (t = "sellstopLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss })) : !e.stopLoss && e.takeProfit ? (t = "sellstopProfitLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit })) : e.stopLoss && e.takeProfit && (t = "sellstopProfitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit }), a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss }));
      break;
    case "selllimit":
      !(e != null && e.stopLoss) && !(e != null && e.takeProfit) ? t = "sellLimitLine" : e.stopLoss && !e.takeProfit ? (t = "sellLimitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss })) : !e.stopLoss && e.takeProfit ? (t = "sellLimitProfitLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit })) : e.stopLoss && e.takeProfit && (t = "sellLimitProfitLossLine", a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.takeProfit }), a.push({ timestamp: Date.parse(e == null ? void 0 : e.entryTime), value: e.stopLoss }));
      break;
  }
  (u = Pe()) == null || u.createOverlay({
    name: t,
    id: `orderline_${e == null ? void 0 : e.orderId}`,
    groupId: "orderLine",
    points: a,
    lock: i
  });
};
J(0);
const u9 = {
  style: "fill",
  color: "white",
  borderColor: "white",
  paddingTop: 5,
  paddingBottom: 5,
  paddingRight: 5,
  paddingLeft: 5,
  borderRadius: 5,
  size: 12,
  weight: 15
}, PD = {
  name: "positionBox",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e, precision: r, overlay: t }) => {
    const i = t.points;
    let a;
    const s = [];
    let l = 10 * r.price;
    if (e.length > 1 && (e[0].y > e[1].y ? e[0].y = e[1].y : s.push({
      type: "polygon",
      attrs: {
        coordinates: [
          e[0],
          { x: e[1].x, y: e[0].y },
          e[1],
          { x: e[0].x, y: e[1].y }
        ]
      },
      styles: { style: "stroke_fill" }
    }), e.length > 2)) {
      e[2].y < e[1].y ? e[2].y = e[1].y : s.push({
        type: "polygon",
        attrs: {
          coordinates: [
            e[1],
            { x: e[0].x, y: e[1].y },
            { x: e[0].x, y: e[2].y },
            { x: e[1].x, y: e[2].y }
          ]
        },
        styles: { style: "stroke_fill", color: "#dcc4de7b" }
      });
      let u = Q().calcTarget(i[0].value, i[1].value, r.price), c = Q().calcStopOrTarget(i[1].value, i[2].value, r.price);
      const h = [
        `Target: ${u} (NN%) ${(Number(u) * l).toFixed(0)}, Amount:`,
        `Open P&L: ${Q().calcPL(i[1].value, r.price)} ${me().close - i[1].value}, Qty: qty, 
 Risk/Reward ratio: ${(Number(u) / Number(c)).toFixed(1)}`,
        `Stop: ${c} (NN%) ${(Number(c) * l).toFixed(0)}, Amount:`
      ];
      a = [e[0], e[1]].map((d, v) => ({
        x: e[0].x,
        y: d.y - 10,
        baseline: "bottom",
        text: `${h[v]}`
      })), s.push({
        type: "rectText",
        // ignoreEvent: true,
        attrs: a,
        styles: {
          backgroundColor: "green",
          ...u9
        }
      }), s.push({
        type: "rectText",
        // ignoreEvent: true,
        attrs: {
          x: e[0].x,
          y: e[2].y + 35,
          baseline: "bottom",
          text: `${h[2]}`
        },
        styles: {
          backgroundColor: "red",
          ...u9
        }
      });
    }
    return s;
  }
  // onRightClick: (event): boolean => {
  //   alert(`object ${event.overlay.name} was clicked`)
  //   return true;
  // }
}, ID = {
  name: "buyLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    let a = Q().calcPL(e.points[0].value, i.price, !0);
    return Q().updatePipsAndPL(e, a), [
      {
        type: "line",
        attrs: { coordinates: [{ x: 0, y: r[0].y }, { x: t.width, y: r[0].y }] },
        styles: an().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: t.width, y: r[0].y, text: `buy | ${a}` ?? "", align: "right", baseline: "middle" },
        styles: an().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c;
    return ee.isValid(e.extendData) && (ee.isFunction(e.extendData) ? c = e.extendData(e) : c = e.extendData ?? ""), !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), { type: "text", attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" }, styles: an().labelStyle };
  },
  onRightClick: (e) => (Ft().singlePopup(e, "buy"), !0)
}, [AD, c9] = J(!1);
function $D(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `buy | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const TD = {
  name: "buyLossLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[1].value >= ((s = me()) == null ? void 0 : s.close) || !AD() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().closeOrder(e, "stoploss");
    const a = $D(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: an().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: an().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: an().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    c9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && e.figureIndex == 1) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), c9(!1), !1),
  onRightClick: (e) => (Ft().lossPopup(e, "buy"), !0)
}, [MD, f9] = J(!1);
function ED(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), t.id, Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `buy | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const DD = {
  name: "buyProfitLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[1].value <= ((s = me()) == null ? void 0 : s.close) || !MD() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().closeOrder(e, "takeprofit");
    const a = ED(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: an().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: an().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: an().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    f9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), f9(!1), !1),
  onRightClick: (e) => (Ft().profitPopup(e, "buy"), !0)
}, [h9, d9] = J(!1);
function FD(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `buy | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 2 && (u.lines.push({ coordinates: [{ x: c, y: e[2].y }, { x: h, y: e[2].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[2].value, i.price, !0), u.recttexts.push({ x: h, y: e[2].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const OD = {
  name: "buyProfitLossLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l, u, c;
    e.points[1].value <= ((s = me()) == null ? void 0 : s.close) || !h9() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high) ? Q().closeOrder(e, "takeprofit") : (e.points[2].value >= ((u = me()) == null ? void 0 : u.close) || !h9() && e.points[1].value >= ((c = me()) == null ? void 0 : c.low)) && Q().closeOrder(e, "stoploss");
    const a = FD(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: an().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[2],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: an().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[2],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), !ee.isValid(h) && e.points[2].value !== void 0 && ee.formatPrecision(e.points[2].value, a.price), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: an().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[2].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a, s;
    d9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const l = Q().updateTakeProfitAndReturnValue(e, t);
      l && (e.overlay.points[1].value = l);
    } else if (t[0].value < ((s = me()) == null ? void 0 : s.close) && e.figureIndex == 2) {
      const l = Q().updateStopLossAndReturnValue(e, t);
      l && (e.overlay.points[2].value = l);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), d9(!1), !1),
  onRightClick: (e) => (Ft().profitLossPopup(e, "buy"), !0)
}, RD = {
  name: "sellLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var u;
    let a = Q().calcPL(e.points[0].value, i.price, !0, "sell"), s = e.id, l;
    if (l = nt().find((c) => c.orderId === parseInt(s.replace("orderline_", ""))) ?? null) {
      l.pips = parseFloat(a), l.pl = l.pips * ((u = gr()) == null ? void 0 : u.dollarPerPip);
      const c = nt().map((h) => h.orderId === (l == null ? void 0 : l.orderId) ? l : h);
      Zr(c);
    }
    return [
      {
        type: "line",
        attrs: { coordinates: [{ x: 0, y: r[0].y }, { x: t.width, y: r[0].y }] },
        styles: Lr().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: t.width, y: r[0].y, text: `sell | ${a}` ?? "", align: "right", baseline: "middle" },
        styles: Lr().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c;
    return ee.isValid(e.extendData) && (ee.isFunction(e.extendData) ? c = e.extendData(e) : c = e.extendData ?? ""), !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), { type: "text", attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" }, styles: Lr().labelStyle };
  },
  onRightClick: (e) => (Ft().singlePopup(e, "sell"), !0)
}, [BD, BF] = J(!1);
function ND(e, r, t, i) {
  const a = [], s = [], l = [];
  let u, c = { lines: a, texts: s, recttexts: l };
  const h = 0, d = r.width;
  return e.length > 0 && (c.lines.push({ coordinates: [{ x: h, y: e[0].y }, { x: d, y: e[0].y }] }), c.texts.push({ x: d - ee.calcTextWidth("sell "), y: e[0].y, text: "sell", baseline: "bottom" }), u = Q().calcPL(t.points[0].value, i.price, !0, "sell"), Q().updatePipsAndPL(t, u), c.recttexts.push({ x: d, y: e[0].y, text: `sell | ${u}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (c.lines.push({ coordinates: [{ x: h, y: e[1].y }, { x: d, y: e[1].y }] }), c.texts.push({ x: d - ee.calcTextWidth("sl "), y: e[1].y, text: "sl", baseline: "bottom" }), u = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0, "sell"), c.recttexts.push({ x: d, y: e[1].y, text: `sl | ${u}` ?? "", align: "right", baseline: "middle" })), c;
}
const v9 = {
  name: "sellLossLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[1].value <= ((s = me()) == null ? void 0 : s.close) || !BD() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().closeOrder(e, "stoploss");
    const a = ND(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: Lr().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: Lr().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: Lr().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && e.figureIndex == 1) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), !1),
  onRightClick: (e) => (Ft().lossPopup(e, "sell"), !0)
}, [zD, p9] = J(!1);
function VD(e, r, t, i) {
  const a = [], s = [], l = [];
  let u, c = { lines: a, texts: s, recttexts: l };
  const h = 0, d = r.width;
  return e.length > 0 && (c.lines.push({ coordinates: [{ x: h, y: e[0].y }, { x: d, y: e[0].y }] }), c.texts.push({ x: d - ee.calcTextWidth("sell "), y: e[0].y, text: "sell", baseline: "bottom" }), u = Q().calcPL(t.points[0].value, i.price, !0, "sell"), Q().updatePipsAndPL(t, u), c.recttexts.push({ x: d, y: e[0].y, text: `sell | ${u}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (c.lines.push({ coordinates: [{ x: h, y: e[1].y }, { x: d, y: e[1].y }] }), c.texts.push({ x: d - ee.calcTextWidth("tp "), y: e[1].y, text: "tp", baseline: "bottom" }), u = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0, "sell"), c.recttexts.push({ x: d, y: e[1].y, text: `tp | ${u}` ?? "", align: "right", baseline: "middle" })), c;
}
const WD = {
  name: "sellProfitLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[1].value >= ((s = me()) == null ? void 0 : s.close) || !zD() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().closeOrder(e, "takeprofit");
    const a = VD(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: Lr().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: Lr().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: Lr().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    p9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), p9(!1), !1),
  onRightClick: (e) => (Ft().profitPopup(e, "sell"), !0)
}, [g9, y9] = J(!1);
function YD(e, r, t, i) {
  const a = [], s = [], l = [];
  let u, c = { lines: a, texts: s, recttexts: l };
  const h = 0, d = r.width;
  return e.length > 0 && (c.lines.push({ coordinates: [{ x: h, y: e[0].y }, { x: d, y: e[0].y }] }), c.texts.push({ x: d - ee.calcTextWidth("sell "), y: e[0].y, text: "sell", baseline: "bottom" }), u = Q().calcPL(t.points[0].value, i.price, !0, "sell"), Q().updatePipsAndPL(t, u), c.recttexts.push({ x: d, y: e[0].y, text: `sell | ${u}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (c.lines.push({ coordinates: [{ x: h, y: e[1].y }, { x: d, y: e[1].y }] }), c.texts.push({ x: d - ee.calcTextWidth("tp "), y: e[1].y, text: "tp", baseline: "bottom" }), u = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0, "sell"), c.recttexts.push({ x: d, y: e[1].y, text: `tp | ${u}` ?? "", align: "right", baseline: "middle" })), e.length > 2 && (c.lines.push({ coordinates: [{ x: h, y: e[2].y }, { x: d, y: e[2].y }] }), c.texts.push({ x: d - ee.calcTextWidth("sl "), y: e[2].y, text: "sl", baseline: "bottom" }), u = Q().calcStopOrTarget(t.points[0].value, t.points[2].value, i.price, !0, "sell"), c.recttexts.push({ x: d, y: e[2].y, text: `sl | ${u}` ?? "", align: "right", baseline: "middle" })), c;
}
const XD = {
  name: "sellProfitLossLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l, u, c;
    e.points[1].value >= ((s = me()) == null ? void 0 : s.close) || !g9() && e.points[1].value >= ((l = me()) == null ? void 0 : l.high) ? Q().closeOrder(e, "takeprofit") : (e.points[2].value <= ((u = me()) == null ? void 0 : u.close) || !g9() && e.points[1].value <= ((c = me()) == null ? void 0 : c.low)) && Q().closeOrder(e, "stoploss");
    const a = YD(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: Lr().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[2],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: Lr().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[2],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), !ee.isValid(h) && e.points[2].value !== void 0 && ee.formatPrecision(e.points[2].value, a.price), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: Lr().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[2].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a, s;
    y9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const l = Q().updateTakeProfitAndReturnValue(e, t);
      l && (e.overlay.points[1].value = l);
    } else if (t[0].value > ((s = me()) == null ? void 0 : s.close) && e.figureIndex == 2) {
      const l = Q().updateStopLossAndReturnValue(e, t);
      l && (e.overlay.points[2].value = l);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), y9(!1), !1),
  onRightClick: (e) => (Ft().profitLossPopup(e, "sell"), !0)
}, [ZD, m9] = J(!1), UD = {
  name: "buystopLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var u, c, h;
    (e.points[0].value <= ((u = me()) == null ? void 0 : u.close) || !ZD() && e.points[1].value <= ((c = me()) == null ? void 0 : c.high)) && Q().triggerPending(e, "buy");
    let a = Q().calcPL(e.points[0].value, i.price, !0), s = e.id, l;
    if (l = nt().find((d) => d.orderId === parseInt(s.replace("orderline_", ""))) ?? null) {
      l.pips = parseFloat(a), l.pl = l.pips * ((h = gr()) == null ? void 0 : h.dollarPerPip);
      const d = nt().map((v) => v.orderId === (l == null ? void 0 : l.orderId) ? l : v);
      Zr(d);
    }
    return [
      {
        type: "line",
        attrs: { coordinates: [{ x: 0, y: r[0].y }, { x: t.width, y: r[0].y }] },
        styles: sn().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: t.width, y: r[0].y, text: `buystop | ${a}` ?? "", align: "right", baseline: "middle" },
        styles: sn().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c;
    return ee.isValid(e.extendData) && (ee.isFunction(e.extendData) ? c = e.extendData(e) : c = e.extendData ?? ""), !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), { type: "text", attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" }, styles: sn().labelStyle };
  },
  onPressedMoving: (e) => {
    var i, a;
    m9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close)) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), m9(!1), !1),
  onRightClick: (e) => (Ft().singlePopup(e, "buy"), !0)
}, [KD, _9] = J(!1);
function HD(e, r, t, i) {
  var d;
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  if (e.length > 0) {
    u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0);
    let v = t.id, m;
    if (m = nt().find((y) => y.orderId === parseInt(v.replace("orderline_", ""))) ?? null) {
      m.pips = parseFloat(l), m.pl = m.pips * ((d = gr()) == null ? void 0 : d.dollarPerPip);
      const y = nt().map((C) => C.orderId === (m == null ? void 0 : m.orderId) ? m : C);
      Zr(y);
    }
    u.recttexts.push({ x: h, y: e[0].y, text: `buystop | ${l}` ?? "", align: "right", baseline: "middle" });
  }
  return e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const GD = {
  name: "buystopProfitLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !KD() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "buy");
    const a = HD(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: sn().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: sn().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: sn().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    _9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), _9(!1), !1),
  onRightClick: (e) => (Ft().profitPopup(e, "buy"), !0)
}, [QD, x9] = J(!1), jD = {
  name: "buyLimitLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    let a = Q().calcPL(e.points[0].value, i.price, !0);
    return (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !QD() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "buy"), [
      {
        type: "line",
        attrs: { coordinates: [{ x: 0, y: r[0].y }, { x: t.width, y: r[0].y }] },
        styles: on().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: t.width, y: r[0].y, text: `buyLimit | ${a}` ?? "", align: "right", baseline: "middle" },
        styles: on().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c;
    return ee.isValid(e.extendData) && (ee.isFunction(e.extendData) ? c = e.extendData(e) : c = e.extendData ?? ""), !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), { type: "text", attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" }, styles: on().labelStyle };
  },
  onPressedMoving: (e) => {
    var i, a;
    x9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close)) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), x9(!1), !1),
  onRightClick: (e) => (Ft().singlePopup(e, "buy"), !0)
}, [qD, b9] = J(!1);
function JD(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `buyLimit | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const eF = {
  name: "buyLimitLossLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !qD() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "buy");
    const a = JD(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: on().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: on().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: on().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    b9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), b9(!1), !1),
  onRightClick: (e) => (Ft().lossPopup(e, "buy"), !0)
}, [tF, C9] = J(!1);
function rF(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `buyLimit | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const nF = {
  name: "buyLimitProfitLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !tF() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "buy");
    const a = rF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: on().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: on().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: on().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    C9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), C9(!1), !1),
  onRightClick: (e) => (Ft().profitPopup(e, "buy"), !0)
}, [iF, S9] = J(!1);
function aF(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `buylimit | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 2 && (u.lines.push({ coordinates: [{ x: c, y: e[2].y }, { x: h, y: e[2].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[2].value, i.price, !0), u.recttexts.push({ x: h, y: e[2].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const oF = {
  name: "buyLimitProfitLossLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !iF() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "buy");
    const a = aF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: on().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[2],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: on().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[2],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h, d;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), !ee.isValid(d) && e.points[2].value !== void 0 && (d = ee.formatPrecision(e.points[2].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: on().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[2].y, text: d ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    S9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[1].value && t[0].value > e.overlay.points[2].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 2) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[2].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), S9(!1), !1),
  onRightClick: (e) => (Ft().profitLossPopup(e, "buy"), !0)
}, [sF, w9] = J(!1);
function lF(e, r, t, i) {
  var d;
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  if (e.length > 0) {
    u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0);
    let v = t.id, m;
    if (m = nt().find((y) => y.orderId === parseInt(v.replace("orderline_", ""))) ?? null) {
      m.pips = parseFloat(l), m.pl = m.pips * ((d = gr()) == null ? void 0 : d.dollarPerPip);
      const y = nt().map((C) => C.orderId === (m == null ? void 0 : m.orderId) ? m : C);
      Zr(y);
    }
    u.recttexts.push({ x: h, y: e[0].y, text: `buystop | ${l}` ?? "", align: "right", baseline: "middle" });
  }
  return e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const uF = {
  name: "buystopLossLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !sF() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "buy");
    const a = lF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: sn().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: sn().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: sn().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    w9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (e.overlay.id, t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), w9(!1), !1),
  onRightClick: (e) => (Ft().lossPopup(e, "buy"), !0)
}, [cF, k9] = J(!1);
function fF(e, r, t, i) {
  var d;
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  if (e.length > 0) {
    u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0);
    let v = t.id, m;
    if (m = nt().find((y) => y.orderId === parseInt(v.replace("orderline_", ""))) ?? null) {
      m.pips = parseFloat(l), m.pl = m.pips * ((d = gr()) == null ? void 0 : d.dollarPerPip);
      const y = nt().map((C) => C.orderId === (m == null ? void 0 : m.orderId) ? m : C);
      Zr(y);
    }
    u.recttexts.push({ x: h, y: e[0].y, text: `buystop | ${l}` ?? "", align: "right", baseline: "middle" });
  }
  return e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 2 && (u.lines.push({ coordinates: [{ x: c, y: e[2].y }, { x: h, y: e[2].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[2].value, i.price, !0), u.recttexts.push({ x: h, y: e[2].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const hF = {
  name: "buystopProfitLossLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !cF() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "buy");
    const a = fF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: sn().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[2],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: sn().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[2],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h, d;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), !ee.isValid(d) && e.points[2].value !== void 0 && (d = ee.formatPrecision(e.points[2].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: sn().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[2].y, text: d ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    k9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (e.overlay.id, t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[1].value && t[0].value > e.overlay.points[2].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 2) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[2].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), k9(!1), !1),
  onRightClick: (e) => (Ft().profitLossPopup(e, "buy"), !0)
}, [dF, L9] = J(!1), vF = {
  name: "sellstopLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !dF() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "sell");
    let a = Q().calcPL(e.points[0].value, i.price, !0, "sell");
    return [
      {
        type: "line",
        attrs: { coordinates: [{ x: 0, y: r[0].y }, { x: t.width, y: r[0].y }] },
        styles: ai().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: t.width, y: r[0].y, text: `sellstop | ${a}` ?? "", align: "right", baseline: "middle" },
        styles: ai().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c;
    return ee.isValid(e.extendData) && (ee.isFunction(e.extendData) ? c = e.extendData(e) : c = e.extendData ?? ""), !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), { type: "text", attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" }, styles: ai().labelStyle };
  },
  onPressedMoving: (e) => {
    var i, a;
    L9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close)) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), L9(!1), !1),
  onRightClick: (e) => (Ft().singlePopup(e, "sell"), !0)
}, [pF, P9] = J(!1);
function gF(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0, "sell"), u.recttexts.push({ x: h, y: e[0].y, text: `sellstop | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0, "sell"), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const yF = {
  name: "sellstopProfitLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !pF() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "sell");
    const a = gF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: ai().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: ai().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: ai().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    P9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), P9(!1), !1),
  onRightClick: (e) => (Ft().profitPopup(e, "sell"), !0)
}, [mF, I9] = J(!1);
function _F(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0, "sell"), u.recttexts.push({ x: h, y: e[0].y, text: `sellstop | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0, "sell"), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 2 && (u.lines.push({ coordinates: [{ x: c, y: e[2].y }, { x: h, y: e[2].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[2].value, i.price, !0, "sell"), u.recttexts.push({ x: h, y: e[2].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const xF = {
  name: "sellstopProfitLossLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value >= ((s = me()) == null ? void 0 : s.close) || !mF() && e.points[1].value >= ((l = me()) == null ? void 0 : l.low)) && Q().triggerPending(e, "sell");
    const a = _F(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: ai().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[2],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: ai().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[2],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h, d;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), !ee.isValid(d) && e.points[2].value !== void 0 && (d = ee.formatPrecision(e.points[2].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: ai().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[2].y, text: d ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    I9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value < ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[1].value && t[0].value < e.overlay.points[2].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 2) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[2].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), I9(!1), !1),
  onRightClick: (e) => (Ft().profitLossPopup(e, "sell"), !0)
}, [bF, A9] = J(!1), CF = {
  name: "sellLimitLine",
  totalStep: 2,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    let a = Q().calcPL(e.points[0].value, i.price, !0);
    return (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !bF() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "sell"), [
      {
        type: "line",
        attrs: { coordinates: [{ x: 0, y: r[0].y }, { x: t.width, y: r[0].y }] },
        styles: Lr().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: { x: t.width, y: r[0].y, text: `sellLimit | ${a}` ?? "", align: "right", baseline: "middle" },
        styles: Lr().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c;
    return ee.isValid(e.extendData) && (ee.isFunction(e.extendData) ? c = e.extendData(e) : c = e.extendData ?? ""), !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), { type: "text", attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" }, styles: Lr().labelStyle };
  },
  onPressedMoving: (e) => {
    var i, a;
    A9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close)) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (A9(!1), Q().updatePositionOrder(e), !1),
  onRightClick: (e) => (Ft().singlePopup(e, "sell"), !0)
}, [SF, $9] = J(!1);
function wF(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `sellLimit | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const kF = {
  name: "sellLimitLossLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !SF() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "sell");
    const a = wF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: ii().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: ii().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: ii().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    $9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value < e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), $9(!1), !1),
  onRightClick: (e) => (Ft().lossPopup(e, "sell"), !0)
}, [LF, T9] = J(!1);
function PF(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `sellLimit | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const IF = {
  name: "sellLimitProfitLine",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !LF() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "sell");
    const a = PF(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: ii().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: ii().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: ii().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    T9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[1].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), T9(!1), !1),
  onRightClick: (e) => (Ft().profitPopup(e, "sell"), !0)
}, [AF, M9] = J(!1);
function $F(e, r, t, i) {
  const a = [], s = [];
  let l, u = { lines: a, recttexts: s };
  const c = 0, h = r.width;
  return e.length > 0 && (u.lines.push({ coordinates: [{ x: c, y: e[0].y }, { x: h, y: e[0].y }] }), l = Q().calcPL(t.points[0].value, i.price, !0), Q().updatePipsAndPL(t, l), u.recttexts.push({ x: h, y: e[0].y, text: `sellLimit | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 1 && (u.lines.push({ coordinates: [{ x: c, y: e[1].y }, { x: h, y: e[1].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[1].value, i.price, !0), u.recttexts.push({ x: h, y: e[1].y, text: `tp | ${l}` ?? "", align: "right", baseline: "middle" })), e.length > 2 && (u.lines.push({ coordinates: [{ x: c, y: e[2].y }, { x: h, y: e[2].y }] }), l = Q().calcStopOrTarget(t.points[0].value, t.points[2].value, i.price, !0), u.recttexts.push({ x: h, y: e[2].y, text: `sl | ${l}` ?? "", align: "right", baseline: "middle" })), u;
}
const TF = {
  name: "sellLimitProfitLossLine",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ overlay: e, coordinates: r, bounding: t, precision: i }) => {
    var s, l;
    (e.points[0].value <= ((s = me()) == null ? void 0 : s.close) || !AF() && e.points[1].value <= ((l = me()) == null ? void 0 : l.high)) && Q().triggerPending(e, "sell");
    const a = $F(r, t, e, i);
    return [
      {
        type: "line",
        attrs: a.lines[0],
        styles: ii().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[1],
        styles: je().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "line",
        attrs: a.lines[2],
        styles: at().lineStyle,
        ignoreEvent: !0
      },
      {
        type: "text",
        attrs: a.recttexts[0],
        styles: ii().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[1],
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: a.recttexts[2],
        styles: at().labelStyle
      }
    ];
  },
  createYAxisFigures: ({ overlay: e, coordinates: r, bounding: t, yAxis: i, precision: a }) => {
    const s = (i == null ? void 0 : i.isFromZero()) ?? !1;
    let l, u;
    s ? (l = "left", u = 0) : (l = "right", u = t.width);
    let c, h, d;
    return !ee.isValid(c) && e.points[0].value !== void 0 && (c = ee.formatPrecision(e.points[0].value, a.price)), !ee.isValid(h) && e.points[1].value !== void 0 && (h = ee.formatPrecision(e.points[1].value, a.price)), !ee.isValid(d) && e.points[2].value !== void 0 && (d = ee.formatPrecision(e.points[2].value, a.price)), [
      {
        type: "text",
        attrs: { x: u, y: r[0].y, text: c ?? "", align: l, baseline: "middle" },
        styles: ii().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[1].y, text: h ?? "", align: l, baseline: "middle" },
        styles: je().labelStyle
      },
      {
        type: "text",
        attrs: { x: u, y: r[2].y, text: d ?? "", align: l, baseline: "middle" },
        styles: at().labelStyle
      }
    ];
  },
  onPressedMoving: (e) => {
    var i, a;
    M9(!0);
    let r = [
      { x: e.x, y: e.y }
    ];
    const t = (i = Pe()) == null ? void 0 : i.convertFromPixel(r, {
      paneId: e.overlay.paneId
    });
    if (t[0].value > ((a = me()) == null ? void 0 : a.close) && t[0].value > e.overlay.points[1].value && t[0].value < e.overlay.points[2].value && e.figureIndex == 0) {
      const s = Q().updateEntryPointAndReturnValue(e, t);
      s && (e.overlay.points[0].value = s);
    } else if (t[0].value < e.overlay.points[0].value && e.figureIndex == 1) {
      const s = Q().updateTakeProfitAndReturnValue(e, t);
      s && (e.overlay.points[1].value = s);
    } else if (t[0].value > e.overlay.points[0].value && e.figureIndex == 2) {
      const s = Q().updateStopLossAndReturnValue(e, t);
      s && (e.overlay.points[2].value = s);
    }
    return !0;
  },
  onPressedMoveEnd: (e) => (Q().updatePositionOrder(e), M9(!1), !1),
  onRightClick: (e) => (Ft().profitLossPopup(e, "sell"), !0)
}, MF = [
  b7,
  C7,
  S7,
  k7,
  w7,
  B7,
  L7,
  P7,
  I7,
  A7,
  $7,
  T7,
  M7,
  E7,
  D7,
  F7,
  O7,
  R7,
  PD,
  ID,
  TD,
  DD,
  OD,
  UD,
  GD,
  uF,
  hF,
  jD,
  eF,
  nF,
  oF,
  RD,
  v9,
  WD,
  XD,
  vF,
  yF,
  v9,
  xF,
  CF,
  kF,
  IF,
  TF
];
class NF {
  constructor(r) {
    Mn(this, "_apiKey");
    Mn(this, "_prevSymbolMarket");
    Mn(this, "_ws");
    this._apiKey = r;
  }
  async searchSymbols(r) {
    return await ((await (await fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=${this._apiKey}&active=true&search=${r ?? ""}`)).json()).results || []).map((a) => ({
      ticker: a.ticker,
      name: a.name,
      shortName: a.ticker,
      market: a.market,
      exchange: a.primary_exchange,
      priceCurrency: a.currency_name,
      type: a.type,
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAA66SURBVHic7Z17cFTVGcB/527AiKGgRA0ShGhKoQjFMb4qUMCMPIrWqdbHSEdlHDGgI9V2aq2d1hmKtVbRsSTGEcQRp4pStaZQlNYUwYLiSKU0SCMBDRCmoQSJGGF3T/84d2VZk+w9d899hf3NMBnl3ns+5vtyHt/5HoIehpQIaijDYjiSciRlwCCgBCgG+gNFQCGCAvUScaADaAfagFagBdiFoAlBI0m2UkWTEMgA/lmeIYIWIFdkLQNJMBbBJUjOA8agFOwF7cAmBO8hWUeMtWIWezwayxciZwByGb1pZTyCaUguA0YGLNIWBK8jWUExa8Q1HA5YHi0iYQByGTH2UYnkBmA6cHLQMnXBfqAOwXMMYLW4hkTQAmUj1AYgqzkLuAXBTUgGBi2PFoI9SJYAT4nZbA9anK4IpQHIhUzE4i4k04OWxQiCOpI8IubwZtCiZBIqA5A1TEdyH3Bh0LJ4xAYE80QVdUELkiIUBiCf4FIk85FcELQsviB4B8G94jb+GrwoASKfZBgJHkUyNUg5AkOwkhhzxa1sC06EAJALKUJwL3A30DsIGULEYeBhJPPFHNr9Htx3A5A1TECyGCjze+yQ04Rgpqii3s9BfTMAWUsfksxD8iO/xowkggVY3Cdmccif4XxAPskw4rwCjPBjvB5AAwVc6cfewPJ6AFnNzcTZSF75OowgzkZZzc1eD+SZAUiJkNX8FlgM9PVqnB5MX2CxrOa3Uno3U3vyYVlLPxIshR7iyQueOmLMELM4YPrDxg1A1jKQJKuQjDL97eMawWYsJpu+fjZqAPL3DMFiNVBu8rt5vqSRJJXidnaa+qAxA5CPU0aMvwFDTX0zT6fsIMEkcQdNJj5mxADs3/x68sr3ix0kmWBiJsjZAOyQrDXkp32/aSTG+Fz3BDkZgKylH0neym/4AkJtDMflcjpw7QeQEkGCpXnlB4hkFAmW5uIncO8IquFB8uf8MDDd1oUrXFmO7aJc7HbQPJ4wU8zmad2XtA3AvtjZSN69GzYOUkCF7gWSlgHIWvqQyF/shJgGYlToXCXr7QGSzCOv/DAzwtaRYxzPAHYkT+jCmvN0gmCi08giRwZgx/B9QD6MKyo0IRntJMbQ2RKgAjjzyo8OZbbOspJ1BrB3/ZvJR+9GjcMUMCrbqSD7DJDgUfLKjyK9bd11S7czgHyCS0my2pxMIaHvUCgshl5FUFQKQtWJ4FALHGmHz5rhizY43BaomEawqOwuA6mg25cl840L5DexQiithNMvhNMvglMr4IT+zt5t3QS762H332FXfTQNQumwy1zLLmcAO1HzNU+E8oNTK+AbN8KwGc4V3h3JODS9Av98GPauz/17fiK4vKuE1K4NoJr1RDFLd+BY+PYCOK3CuzH2rof3fg07Q5Pkm40NYjYXdfYXnRqAXMhEBH/zVibDFBbDRQ/AiFv8G3PbUlhTpfYNYUcyqbP6BJ2fAizu8lwgkwwcC9c3+Kt8UMvLtZuhZKy/47qhC51+ZQawy7J85LlApjhjAkx7Te3ogyIZhz9PhebQH5jOzixX09kM4POvUQ6cdTVc/kawygewCmDKy2omCjdf0e0xM4BdjeuTSBRk6jtUTb9BKz+djlZ4eRy0bQ1aks4R7GEAg9Orlx07A6hSbOFXPsCkp8OlfFAb0UnaQTn+IRnIPirT/1dBxgM3+CqQW0beptZ+NyTj0LIW9m6A//0L2puP/l1RKXytHAZ9RzmNYoX63z/9IrU53LbUnXxeo3S8KvWfXy4BdgXOFsJbhFFhFcAPP4E+JXrvJeOw+TH44NFjld4VfUrg3Htg5Cx9QzjUAn8YEVbP4X6KKUlVND26BLQynrArH9TGT1f5h1pg+fnw9o+dKT/1zrq58MeL4UCj3nh9StQsFU5OtnUNpBuAYFog4ugy5Lt6z3/RBq9OVH59N7RuUu93tOq9N3KWu/H8IE3XRw1AFV4OP2dO0Xt+4/2578o/a1YePx36DoXiMbmN6xVpurbAzu8Lvup2dgqL1R+nHGmHLU+YGfujl/RnkUGV2Z8JhpG2zu0ZIEHoPRgA9NPMP21eDYkOc+M3LNJ7/rTzzI1tGlvnygAElwQqjFPc7MZNouvq1TVYP7F1rgxAddrIkw3dvYTOcuU3ts4L7B47Id2tZHBwh97zXvwGNr4AfU539uyhvebHN8cYKREiUrd/sUK49XPnzyfj8FyZ87P/8cfZFhbDg5bCMYkOdSRzilUAFz/knTxRx2K4hYxYaZcdmmFY5ddBxa88ESXySMotu69edNi+XP+d838Jlz4bvtvDoJGUWaimitFhz1p3a/qwGXBdg/qZJ8UgC9VRMzokOuDdX7h7t6hUzQTX2fGDbq57exYlQlbzb6KY83/1uyr2PxeOtKtY/w+fUQkgybgJyaJEg5DV7IaIRAGlc8o58P1/mFvXj7SrOP+df4aP/6J/+xdN9ghZzadEtd7PmVNg6mvquGeSZFzNCB8th8bnwxrYYYKDQlZzGOgVtCSuGXELjK8xbwQpEh3KCLbURi8lLDtHhKwhiYcNCXzhzClw2YveH/N218O796ufPQGB7BkGANB/OEx9Wf30mubV8NYd4Q3/dopAWkh6xta3bSssO1clbZqMAeiM0kq45n3lYfRq6fEDSTzam8Cu6FcOYx/XDx9zw+56eON687EH/nDQAv+7VXrOgUaVq/fyOHXO9/J8f8YE+N6b4Q7+6Jr26DqCdOhXDufcrgpGmCgW0RmHWuCVcfoh5MHSIGQ1a4BxQUviC7FCtSycdRUMmW7eGNq2wkvnR6NegOItIatZBvwgaEl8xypQ03f5tcooTio1892ddbDicjPf8p4XC4BdQUsRCMm4Os6lAj1PrYCzr1bLhG7mUTpDpsM3boIPl5iQ0mt2WQgz3aciz383wvp74NnBsOoH7jOJAC5ZAL092muYRNBkIYjUrsVzknHY/hK8eK77490J/WH0XPOymUbQaJEk4u4sD2l8Hl4YBZ+syv5sJqPmhN9JlGSrRRVN9ERfgCk6WmHlldCyTu+9wmL3NQz8oZ0qmiwhkEAOC95xQKIDVl2tf7wbPNkbecywSQikmqME7yFDnB/Yq0jVBXDK5y0qqMMkh1rgg8fgvJ87fyes2cGgdE6qRIxkHXBnkPJ0i27tnb3rzRsAKLeyjgGE2T2sdG7nBsZYG6gw2dD15Zty6mTy3416z+fiT/AaW+cWgN1/dkugAnXHZ816629RqXeJmTqZSeGNOt6S6jmcXiLm9cDEcYLuJcsQj5qanhji32qnpOk6vUTMikCEcYru9DvMg4p3/cr1zvY6s4WfpOn6qAEUswbYH4Q8jtB1xpRWmp8Fvq6ZVfTpDrPjm2G/rWsgzQDsunHhLYD/8V9UxS8dxj1ubiN2UimMuVvvnX2hdK/UpWoEQmapWMFzvovjlCPt+jV6+g5V0Tp9h+Y2dp8SuMJFUeqPXbiQvSZDx8cawABWI9TuMJS8/xv9jJ3+w1VR6dFz3fnmB09RGUi60cZftIWvfLwqFn2MUMcYgLiGBJIlvgqlQ0crvP0T/fd6Fakr2hv3qJ+Dp3R/TDzlHPjmbXDVuzB9pbsZpGGR99HJukiWpFcKh6g2jJhWp18xtDMOtSglpa58+5QcbSeXC+3N6hYxfCllX2kY0XnPoBpeQ+LRQdoAJ5Wq7OCwetpWXB6+hlKCOlHFV2LVOu8ZlOQRzwXKhc+aVf3eMMbiNywKn/KhS51Gu21c/+Fqlx+WmWD7cnjjujDWGeiybVzXvYMF8zwTxxRtW1Usfi7xe6b48JmwKr9bXXbfO7iGDUguMC+RYawCuGAefOtu/8OwjrSrjOF//s7fcZ0ieEdUdT2Td9893GEP+sBJxlVE7/Mj1J29XzS9qnb7YVU+ZNVh1rRwWcMKJFPNSeQDp5yjHD/l15qvGZDoUEbWsCh8jp5MBCtFVfeNQLIbwJMMI85moLcxwfwilQo2eLJq5uQ2ROuLNnUbuX05/CcyJWMOU8AocSvbunvIUWEIWc184GdGxAqSXkWqzWvxGCgcoJw+J2Y4flI3eAd3qq5i+zZFLeEzxQNidvYl3JkBLKQIwQcQsaqixy9NSEaLOdnD/bvfBNqIObQjmJm7XHl8QTDTifLBoQEAiCrqESxwL1UeXxAsEFXUO33csQHYT98HNGiKlMc/GmwdOUa7Oph9KthIT6srFH0OUkBFtl1/JnozAGAPEN4kkuOXO3WVDy4MAEDM5mkg34ojPDxk60Qb1wUi7WZTf4IQxw0cH9RRxRV2kq82rmYAACGQxJiBYLPbb+TJEcFmYsxwq3zIwQAAxCwOYDEZ8lVGAqARi8liFgdy+UhOBgB2XmGSSmBHrt/K45gdJKlM5fflQs4GACBuZycJJpE3Aj/YQYJJ4nZ2mviYEQMAEHfQRJIJ5JcDL2kkyQRxh7nKbsbLxMtaBpJkFZJRpr99XCPYbK/5RhN3jM0AKcQs9mAxjjDnGUaPOizGmVY+eDADpLD9BA8CLlJ58qTxEFX8NJejXnd43ilEVnMz8Bj5uwNdDgJ3uvXwOcWXVjH2BdIr9PSy9OZooIAr3fj2dTG+B+gMcSvbiFGRjydwgGABMf1bPffD+YysYQKSxeTDyzJpQjBTJ5jDBL7MAOmIKuqRjAYegKOVKo5jDgMPIBntt/IhgBkgHfkkw0jwaOTyDkwhWEmMuX5N952LEALkE1yKZH4k0tBMIHgHwb3iNv4avCghQtYwHcl9hD0r2T0bEMwTVeFxkoXKAFLIhUzE4q5QF6nQQVBHkkfEHN4MWpRMQmkAKexyNbcguAkZsRb3gj12vaWnMsuyhIlQG0AKuYwY+6hEcgMqBO3koGXqgv1AHYLnGMDqzIJMYSQSBpCOXEZvWhmPYBqSy4CRAYu0BcHrSFZQzJr0IoxRIHIGkImsZSAJxiK4BMl5wBjAqz7y7cAmu8HGOmKs9eKGzk8ibwCZ2LeQZVgMR1KOpAwYBJQAxUB/lIEUIr5smBEHOlAKbgNagRZgF4ImBI0k2UoVTV7dygXF/wF+fTz59Jc5ygAAAABJRU5ErkJggg=="
    }));
  }
  async getHistoryKLineData(r, t, i, a) {
    return await ((await (await fetch(`https://api.polygon.io/v2/aggs/ticker/${r.ticker}/range/${t.multiplier}/${t.timespan}/${i}/${a}?apiKey=${this._apiKey}`)).json()).results || []).map((u) => ({
      timestamp: u.t,
      open: u.o,
      high: u.h,
      low: u.l,
      close: u.c,
      volume: u.v,
      turnover: u.vw
    }));
  }
  subscribe(r, t, i) {
    var a, s;
    this._prevSymbolMarket !== r.market ? ((a = this._ws) == null || a.close(), this._ws = new WebSocket(`wss://delayed.polygon.io/${r.market}`), this._ws.onopen = () => {
      var l;
      (l = this._ws) == null || l.send(JSON.stringify({ action: "auth", params: this._apiKey }));
    }, this._ws.onmessage = (l) => {
      var c;
      const u = JSON.parse(l.data);
      u[0].ev === "status" ? u[0].status === "auth_success" && ((c = this._ws) == null || c.send(JSON.stringify({ action: "subscribe", params: `T.${r.ticker}` }))) : "sym" in u && i({
        timestamp: u.s,
        open: u.o,
        high: u.h,
        low: u.l,
        close: u.c,
        volume: u.v,
        turnover: u.vw
      });
    }) : (s = this._ws) == null || s.send(JSON.stringify({ action: "subscribe", params: `T.${r.ticker}` })), this._prevSymbolMarket = r.market;
  }
  unsubscribe(r, t, i) {
  }
}
var EF = /* @__PURE__ */ ue('<svg class=logo viewBox="0 0 80 92">');
const DF = EF();
class zF {
  constructor(r) {
    Mn(this, "_container");
    Mn(this, "_chartApi", null);
    if (ee.isString(r.container)) {
      if (this._container = document.getElementById(r.container), !this._container)
        throw new Error("Container is null");
    } else
      this._container = r.container;
    this._container.classList.add("klinecharts-pro"), this._container.setAttribute("data-theme", r.theme ?? "light"), t4(() => {
      const t = this;
      return se(wD, {
        ref: (i) => {
          t._chartApi = i;
        },
        get styles() {
          return r.styles ?? {};
        },
        get watermark() {
          return r.watermark ?? DF;
        },
        get theme() {
          return r.theme ?? "light";
        },
        get locale() {
          return r.locale ?? "zh-CN";
        },
        get drawingBarVisible() {
          return r.drawingBarVisible ?? !0;
        },
        get orderPanelVisible() {
          return r.orderPanelVisible ?? !1;
        },
        get symbol() {
          return r.symbol;
        },
        get period() {
          return r.period;
        },
        get periods() {
          return r.periods ?? [{
            multiplier: 1,
            timespan: "minute",
            text: "1m"
          }, {
            multiplier: 5,
            timespan: "minute",
            text: "5m"
          }, {
            multiplier: 15,
            timespan: "minute",
            text: "15m"
          }, {
            multiplier: 30,
            timespan: "minute",
            text: "30m"
          }, {
            multiplier: 1,
            timespan: "hour",
            text: "1H"
          }, {
            multiplier: 2,
            timespan: "hour",
            text: "2H"
          }, {
            multiplier: 4,
            timespan: "hour",
            text: "4H"
          }, {
            multiplier: 1,
            timespan: "day",
            text: "D"
          }, {
            multiplier: 1,
            timespan: "week",
            text: "W"
          }, {
            multiplier: 1,
            timespan: "month",
            text: "M"
          }, {
            multiplier: 1,
            timespan: "year",
            text: "Y"
          }];
        },
        get timezone() {
          return r.timezone ?? "Asia/Shanghai";
        },
        get mainIndicators() {
          return r.mainIndicators ?? [];
        },
        get subIndicators() {
          return r.subIndicators ?? [];
        },
        get datafeed() {
          return r.datafeed;
        },
        get chartSession() {
          return r.chartSession;
        },
        get dataTimestamp() {
          return r.dataTimestamp;
        },
        get orderController() {
          return r.orderController;
        },
        get chartSessionController() {
          return r.chartSessionController;
        },
        get rootElementId() {
          return r.rootElementId;
        }
      });
    }, this._container);
  }
  destroy() {
    this._container = null, this._chartApi = null;
  }
  setTheme(r) {
    var t;
    (t = this._container) == null || t.setAttribute("data-theme", r), this._chartApi.setTheme(r);
  }
  getTheme() {
    return this._chartApi.getTheme();
  }
  setStyles(r) {
    this._chartApi.setStyles(r);
  }
  getStyles() {
    return this._chartApi.getStyles();
  }
  setLocale(r) {
    this._chartApi.setLocale(r);
  }
  getLocale() {
    return this._chartApi.getLocale();
  }
  setTimezone(r) {
    this._chartApi.setTimezone(r);
  }
  getTimezone() {
    return this._chartApi.getTimezone();
  }
  setSymbol(r) {
    this._chartApi.setSymbol(r);
  }
  getSymbol() {
    return this._chartApi.getSymbol();
  }
  setPeriod(r) {
    this._chartApi.setPeriod(r);
  }
  getPeriod() {
    return this._chartApi.getPeriod();
  }
}
class VF {
  constructor(r, t, i) {
    Mn(this, "apikey");
    Mn(this, "apiurl");
    Mn(this, "testsesson_id");
    this.apiurl = r, this.apikey = t, this.testsesson_id = i;
  }
  async retrieveOrder(r) {
    const t = await this.makeFetchWithAuthAndBody("GET", `${this.apiurl}/positions/${r}`), i = await (t == null ? void 0 : t.json());
    return {
      entryPoint: i.data.entrypoint,
      stopLoss: i.data.stoploss,
      takeProfit: i.data.takeprofit,
      lotSize: i.data.lotsize,
      pl: i.data.pl,
      sessionId: i.data.test_session_id,
      orderId: i.data.id,
      entryTime: i.data.entrytime,
      exitTime: i.data.exittime,
      exitPoint: i.data.exitpoint,
      action: i.data.action
    };
  }
  async retrieveOrders(r, t) {
    try {
      return ((await (await this.makeFetchWithAuthAndBody("GET", `${this.apiurl}/positions`)).json()).data || []).map((s) => ({
        entryPoint: s.entrypoint,
        stopLoss: s.stoploss,
        takeProfit: s.takeprofit,
        lotSize: s.lotsize,
        pl: s.pl,
        sessionId: s.test_session_id,
        orderId: s.id,
        entryTime: s.entrytime,
        exitTime: s.exittime,
        exitPoint: s.exitpoint,
        action: s.action
      }));
    } catch {
      return [];
    }
  }
  async openOrder(r, t, i, a, s) {
    const l = await this.makeFetchWithAuthAndBody("POST", `${this.apiurl}/positions`, {
      test_session_id: this.testsesson_id,
      action: r,
      entrypoint: i,
      stoploss: a,
      takeprofit: s
    }), u = await (l == null ? void 0 : l.json());
    return {
      orderId: u.id,
      sessionId: u.test_session_id,
      action: u.action,
      entryPoint: u.entrypoint,
      exitPoint: u.exitpoint,
      stopLoss: u.stoploss,
      takeProfit: u.takeprofit,
      lotSize: u.lotsize,
      pips: u.pips,
      pl: u.pl,
      entryTime: u.entrytime,
      exitTime: u.exittime,
      exitType: u.exittype,
      partials: u.partials
    };
  }
  async closeOrder(r, t) {
    try {
      const i = await this.makeFetchWithAuthAndBody("PUT", `${this.apiurl}/positions/${r}`);
      return await (i == null ? void 0 : i.json());
    } catch {
      return null;
    }
  }
  async modifyOrder(r) {
    const t = await this.makeFetchWithAuthAndBody("PUT", `${this.apiurl}/positions/${r.id}`, r), i = await (t == null ? void 0 : t.json());
    return {
      orderId: i.id,
      sessionId: i.test_session_id,
      action: i.action,
      entryPoint: i.entrypoint,
      exitPoint: i.exitpoint,
      stopLoss: i.stoploss,
      takeProfit: i.takeprofit,
      lotSize: i.lotsize,
      pips: i.pips,
      pl: i.pl,
      entryTime: i.entrytime,
      exitTime: i.exittime,
      exitType: i.exittype,
      partials: i.partials
    };
  }
  async unsetSlOrTP(r, t) {
    const i = await this.makeFetchWithAuthAndBody("PUT", `${this.apiurl}/positions/${r}/unset/${t}`), a = await (i == null ? void 0 : i.json());
    return {
      orderId: a.id,
      sessionId: a.test_session_id,
      action: a.action,
      entryPoint: a.entrypoint,
      exitPoint: a.exitpoint,
      stopLoss: a.stoploss,
      takeProfit: a.takeprofit,
      lotSize: a.lotsize,
      pips: a.pips,
      pl: a.pl,
      entryTime: a.entrytime,
      exitTime: a.exittime,
      exitType: a.exittype,
      partials: a.partials
    };
  }
  launchOrderModal(r, t, i) {
  }
  async makeFetchWithAuthAndBody(r, t, i) {
    const a = {
      method: r,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${this.apikey}`
      },
      body: i ? JSON.stringify(i) : null
    };
    try {
      return await fetch(`${t}`, a);
    } catch (s) {
      return alert(s.message ?? "An error occured"), null;
    }
  }
}
class WF {
  constructor(r, t) {
    Mn(this, "apikey");
    Mn(this, "apiurl");
    this.apiurl = r, this.apikey = t;
  }
  async retrieveSession(r) {
    const t = await this.makeFetchWithAuthAndBody("GET", `${this.apiurl}/test-sessions/${r}`), i = await (t == null ? void 0 : t.json());
    return {
      id: i.data.id,
      starting_bal: i.data.starting_bal,
      current_bal: i.data.current_bal,
      equity: i.data.equity,
      strategy_id: i.data.strategy_id,
      user_id: i.data.user_id,
      pair: i.data.pair,
      chart: i.data.chart,
      chart_timestamp: i.data.chart_timestamp,
      start_date: i.data.start_date,
      end_date: i.data.end_date
    };
  }
  isNotGuest() {
    return !1;
  }
  async updateSession(r) {
    const t = await this.makeFetchWithAuthAndBody("PUT", `${this.apiurl}/test-sessions/${r.id}`, r), i = await (t == null ? void 0 : t.json());
    return {
      id: i.id,
      starting_bal: i.starting_bal,
      current_bal: i.current_bal,
      equity: i.equity,
      strategy_id: i.strategy_id,
      user_id: i.user_id,
      pair: i.pair,
      chart: i.chart,
      chart_timestamp: i.chart_timestamp,
      start_date: i.start_date,
      end_date: i.end_date
    };
  }
  // async retrieveChartState(id: number): Promise<ChartObjType | null> {
  //   const response = await this.makeFetchWithAuthAndBody('GET', `${this.apiurl}/test-sessions/${id}`)
  //   const resp = await response?.json()
  //   return resp.data
  // }
  // async syncState(id: number, chart_state: ChartObjType): Promise<boolean> {
  //   const response = await this.makeFetchWithAuthAndBody('PUT', `${this.apiurl}/test-sessions/${id}`, chart_state)
  // }
  async makeFetchWithAuthAndBody(r, t, i) {
    const a = {
      method: r,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${this.apikey}`
      },
      body: i ? JSON.stringify(i) : null
    };
    try {
      return await fetch(`${t}`, a);
    } catch (s) {
      return alert(s.message ?? "An error occured"), null;
    }
  }
}
MF.forEach((e) => {
  C8(e);
});
export {
  NF as DefaultDatafeed,
  VF as DefaultOrderController,
  WF as DefaultSessionController,
  zF as KLineChartPro,
  OF as loadLocales
};
//# sourceMappingURL=klinecharts-ui.js.map
