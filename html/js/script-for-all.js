/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = "".trim,
    l = {},
    m = "1.11.0",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return d.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return n.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(n.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(d.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray || function(a) {
      return "array" === n.type(a)
    },
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {
      return a - parseFloat(a) >= 0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (l.ownLast)
        for (b in a) return j.call(a, b);
      for (b in a);
      return void 0 === b || j.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {
      b && n.trim(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function(a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, c) {
      var d, e = 0,
        f = a.length,
        g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1) break
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1) break
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1) break
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1) break; return a
    },
    trim: k && !k.call("\ufeff\xa0") ? function(a) {
      return null == a ? "" : k.call(a)
    } : function(a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    },
    inArray: function(a, b, c) {
      var d;
      if (b) {
        if (g) return g.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function(a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, f = 0,
        g = a.length,
        h = s(a),
        i = [];
      if (h)
        for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a) d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, e, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
        return a.apply(b || this, c.concat(d.call(arguments)))
      }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
    },
    now: function() {
      return +new Date
    },
    support: l
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
      t = a.document,
      u = 0,
      v = 0,
      w = eb(),
      x = eb(),
      y = eb(),
      z = function(a, b) {
        return a === b && (j = !0), 0
      },
      A = "undefined",
      B = 1 << 31,
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = D.indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (this[b] === a) return b;
        return -1
      },
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      M = L.replace("w", "w#"),
      N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
      O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(O),
      U = new RegExp("^" + M + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = /'|\\/g,
      ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      bb = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      };
    try {
      G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
    } catch (cb) {
      G = {
        apply: D.length ? function(a, b) {
          F.apply(a, H.call(b))
        } : function(a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function db(a, b, d, e) {
      var f, g, h, i, j, m, p, q, u, v;
      if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
      if (1 !== (i = b.nodeType) && 9 !== i) return [];
      if (n && !e) {
        if (f = Z.exec(a))
          if (h = f[1]) {
            if (9 === i) {
              if (g = b.getElementById(h), !g || !g.parentNode) return d;
              if (g.id === h) return d.push(g), d
            } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
          } else {
            if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
          }
        if (c.qsa && (!o || !o.test(a))) {
          if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
            m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
            while (j--) m[j] = q + pb(m[j]);
            u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
          }
          if (v) try {
            return G.apply(d, u.querySelectorAll(v)), d
          } catch (w) {} finally {
            p || b.removeAttribute("id")
          }
        }
      }
      return xb(a.replace(P, "$1"), b, d, e)
    }

    function eb() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function fb(a) {
      return a[s] = !0, a
    }

    function gb(a) {
      var b = l.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function hb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ib(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function jb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function kb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function lb(a) {
      return fb(function(b) {
        return b = +b, fb(function(c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function mb(a) {
      return a && typeof a.getElementsByTagName !== A && a
    }
    c = db.support = {}, f = db.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, k = db.setDocument = function(a) {
      var b, e = a ? a.ownerDocument || a : t,
        g = e.defaultView;
      return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
        k()
      }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
        k()
      })), c.attributes = gb(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = gb(function(a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
      }), c.getById = gb(function(a) {
        return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
      }), c.getById ? (d.find.ID = function(a, b) {
        if (typeof b.getElementById !== A && n) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(ab, bb);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(ab, bb);
        return function(a) {
          var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
      }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
        a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
      }), gb(function(a) {
        var b = e.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
      })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
        c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
      }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, z = b ? function(a, b) {
        if (a === b) return j = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return j = !0, 0;
        var c, d = 0,
          f = a.parentNode,
          g = b.parentNode,
          h = [a],
          k = [b];
        if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
        if (f === g) return ib(a, b);
        c = a;
        while (c = c.parentNode) h.unshift(c);
        c = b;
        while (c = c.parentNode) k.unshift(c);
        while (h[d] === k[d]) d++;
        return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
      }, e) : l
    }, db.matches = function(a, b) {
      return db(a, null, null, b)
    }, db.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
        var d = q.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return db(b, l, null, [a]).length > 0
    }, db.contains = function(a, b) {
      return (a.ownerDocument || a) !== l && k(a), r(a, b)
    }, db.attr = function(a, b) {
      (a.ownerDocument || a) !== l && k(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
      return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, db.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, db.uniqueSort = function(a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return i = null, a
    }, e = db.getText = function(a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = db.selectors = {
      cacheLength: 50,
      createPseudo: fb,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[5] && a[2];
          return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(ab, bb).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = w[a + " "];
          return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = db.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              t = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && t) {
                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [u, n, m];
                    break
                  }
              } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
              else
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
          return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function(a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: fb(function(a) {
          var b = [],
            c = [],
            d = g(a.replace(P, "$1"));
          return d[s] ? fb(function(a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop()
          }
        }),
        has: fb(function(a) {
          return function(b) {
            return db(a, b).length > 0
          }
        }),
        contains: fb(function(a) {
          return function(b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }),
        lang: fb(function(a) {
          return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
              while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === m
        },
        focus: function(a) {
          return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !d.pseudos.empty(a)
        },
        header: function(a) {
          return X.test(a.nodeName)
        },
        input: function(a) {
          return W.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: lb(function() {
          return [0]
        }),
        last: lb(function(a, b) {
          return [b - 1]
        }),
        eq: lb(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: lb(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: lb(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: lb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: lb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = jb(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = kb(b);

    function nb() {}
    nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

    function ob(a, b) {
      var c, e, f, g, h, i, j, k = x[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
    }

    function pb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function qb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = v++;
      return b.first ? function(b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [u, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function rb(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function sb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function tb(a, b, c, d, e, f) {
      return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || wb(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : sb(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = sb(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
      })
    }

    function ub(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
          return a === b
        }, i, !0), l = qb(function(a) {
          return I.call(b, a) > -1
        }, i, !0), m = [function(a, c, d) {
          return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
        }]; f > j; j++)
        if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
        else {
          if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
            for (e = ++j; f > e; e++)
              if (d.relative[a[e].type]) break;
            return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
              value: " " === a[j - 2].type ? "*" : ""
            })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
          }
          m.push(c)
        }
      return rb(m)
    }

    function vb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, i, j, k) {
          var m, n, o, p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = h,
            v = f || e && d.find.TAG("*", k),
            w = u += null == t ? 1 : Math.random() || .1,
            x = v.length;
          for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
            if (e && m) {
              n = 0;
              while (o = a[n++])
                if (o(m, g, i)) {
                  j.push(m);
                  break
                }
              k && (u = w)
            }
            c && ((m = !o && m) && p--, f && r.push(m))
          }
          if (p += q, c && q !== p) {
            n = 0;
            while (o = b[n++]) o(r, s, g, i);
            if (f) {
              if (p > 0)
                while (q--) r[q] || s[q] || (s[q] = E.call(j));
              s = sb(s)
            }
            G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
          }
          return k && (u = w, h = t), r
        };
      return c ? fb(f) : f
    }
    g = db.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = y[a + " "];
      if (!f) {
        b || (b = ob(a)), c = b.length;
        while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
        f = y(a, vb(e, d))
      }
      return f
    };

    function wb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
      return c
    }

    function xb(a, b, e, f) {
      var h, i, j, k, l, m = ob(a);
      if (!f && 1 === m.length) {
        if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
          a = a.slice(i.shift().value.length)
        }
        h = V.needsContext.test(a) ? 0 : i.length;
        while (h--) {
          if (j = i[h], d.relative[k = j.type]) break;
          if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
            if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
            break
          }
        }
      }
      return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
    }
    return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
      return 1 & a.compareDocumentPosition(l.createElement("div"))
    }), gb(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || hb("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && gb(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || hb("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), gb(function(a) {
      return null == a.getAttribute("disabled")
    }) || hb(J, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), db
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function(a) {
      return n.inArray(a, b) >= 0 !== c
    })
  }
  n.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function(a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
        for (b = 0; e > b; b++)
          if (n.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function(a) {
      return this.pushStack(x(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(x(this, a || [], !0))
    },
    is: function(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
    }
  });
  var y, z = a.document,
    A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    B = n.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
            for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        if (d = z.getElementById(c[2]), d && d.parentNode) {
          if (d.id !== c[2]) return y.find(a);
          this.length = 1, this[0] = d
        }
        return this.context = z, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  B.prototype = n.fn, y = n(z);
  var C = /^(?:parents|prev(?:Until|All))/,
    D = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.extend({
    dir: function(a, b, c) {
      var d = [],
        e = a[b];
      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), n.fn.extend({
    has: function(a) {
      var b, c = n(a, this),
        d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++)
          if (n.contains(this, c[b])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? n.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function E(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return n.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return n.dir(a, "parentNode", c)
    },
    next: function(a) {
      return E(a, "nextSibling")
    },
    prev: function(a) {
      return E(a, "previousSibling")
    },
    nextAll: function(a) {
      return n.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return n.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return n.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return n.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return n.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return n.sibling(a.firstChild)
    },
    contents: function(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
    }
  }, function(a, b) {
    n.fn[a] = function(c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var F = /\S+/g,
    G = {};

  function H(a) {
    var b = G[a] = {};
    return n.each(a.match(F) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [],
      i = !a.once && [],
      j = function(l) {
        for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break
          }
        b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
      },
      k = {
        add: function() {
          if (h) {
            var d = h.length;
            ! function f(b) {
              n.each(b, function(b, c) {
                var d = n.type(c);
                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
              })
            }(arguments), b ? e = h.length : c && (g = d, j(c))
          }
          return this
        },
        remove: function() {
          return h && n.each(arguments, function(a, c) {
            var d;
            while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
          }), this
        },
        has: function(a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
        },
        empty: function() {
          return h = [], e = 0, this
        },
        disable: function() {
          return h = i = c = void 0, this
        },
        disabled: function() {
          return !h
        },
        lock: function() {
          return i = void 0, c || k.disable(), this
        },
        locked: function() {
          return !i
        },
        fireWith: function(a, c) {
          return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
        },
        fire: function() {
          return k.fireWith(this, arguments), this
        },
        fired: function() {
          return !!d
        }
      };
    return k
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return n.Deferred(function(c) {
              n.each(b, function(b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b = 0,
        c = d.call(arguments),
        e = c.length,
        f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function(a, b, c) {
          return function(e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function(a) {
      if (a === !0 ? !--n.readyWait : !n.isReady) {
        if (!z.body) return setTimeout(n.ready);
        n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
      }
    }
  });

  function J() {
    z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
  }

  function K() {
    (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
  }
  n.ready.promise = function(b) {
    if (!I)
      if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
      else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
    else {
      z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && z.documentElement
      } catch (d) {}
      c && c.doScroll && ! function e() {
        if (!n.isReady) {
          try {
            c.doScroll("left")
          } catch (a) {
            return setTimeout(e, 50)
          }
          J(), n.ready()
        }
      }()
    }
    return I.promise(b)
  };
  var L = "undefined",
    M;
  for (M in n(l)) break;
  l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
      var a, b, c = z.getElementsByTagName("body")[0];
      c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }),
    function() {
      var a = z.createElement("div");
      if (null == l.deleteExpando) {
        l.deleteExpando = !0;
        try {
          delete a.test
        } catch (b) {
          l.deleteExpando = !1
        }
      }
      a = null
    }(), n.acceptData = function(a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
  var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        n.data(a, b, c)
      } else c = void 0
    }
    return c
  }

  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function R(a, b, d, e) {
    if (n.acceptData(a)) {
      var f, g, h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
    }
  }

  function S(a, b, c) {
    if (n.acceptData(a)) {
      var d, e, f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
    },
    data: function(a, b, c) {
      return R(a, b, c)
    },
    removeData: function(a, b) {
      return S(a, b)
    },
    _data: function(a, b, c) {
      return R(a, b, c, !0)
    },
    _removeData: function(a, b) {
      return S(a, b, !0)
    }
  }), n.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;
          while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
          n._data(f, "parsedAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        n.data(this, a)
      }) : arguments.length > 1 ? this.each(function() {
        n.data(this, a, b)
      }) : f ? P(f, a, n.data(f, a)) : void 0
    },
    removeData: function(a) {
      return this.each(function() {
        n.removeData(this, a)
      })
    }
  }), n.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = n._queueHooks(a, b),
        g = function() {
          n.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return n._data(a, c) || n._data(a, c, {
        empty: n.Callbacks("once memory").add(function() {
          n._removeData(a, b + "queue"), n._removeData(a, c)
        })
      })
    }
  }), n.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        n.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = n.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = ["Top", "Right", "Bottom", "Left"],
    V = function(a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    },
    W = n.access = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) n.access(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    X = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = z.createDocumentFragment(),
      b = z.createElement("div"),
      c = z.createElement("input");
    if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
        l.noCloneEvent = !1
      }), b.cloneNode(!0).click()), null == l.deleteExpando) {
      l.deleteExpando = !0;
      try {
        delete b.test
      } catch (d) {
        l.deleteExpando = !1
      }
    }
    a = b = c = null
  }(),
  function() {
    var b, c, d = z.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
    d = null
  }();
  var Y = /^(?:input|select|textarea)$/i,
    Z = /^key/,
    $ = /^(?:mouse|contextmenu)|click/,
    _ = /^(?:focusinfocus|focusoutblur)$/,
    ab = /^([^.]*)(?:\.(.+)|)$/;

  function bb() {
    return !0
  }

  function cb() {
    return !1
  }

  function db() {
    try {
      return z.activeElement
    } catch (a) {}
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
          return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
        while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(F) || [""], j = b.length;
        while (j--)
          if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, k, l, m, o = [d || z],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !n.isWindow(d)) {
          for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
          l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
        }
        m = 0;
        while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
          l = d[g], l && (d[g] = null), n.event.triggered = p;
          try {
            d[p]()
          } catch (r) {}
          n.event.triggered = void 0, l && (d[g] = l)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [],
        i = d.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
            e.length && g.push({
              elem: i,
              handlers: e
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function(a) {
      if (a[n.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--) c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button,
          g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== db() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === db() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
  }, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    isDefaultPrevented: cb,
    isPropagationStopped: cb,
    isImmediatePropagationStopped: cb,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = bb, this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), l.submitBubbles || (n.event.special.submit = {
    setup: function() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
        var b = a.target,
          c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
        c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
          a._submit_bubble = !0
        }), n._data(c, "submitBubbles", !0))
      })
    },
    postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
    },
    teardown: function() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
    }
  }), l.changeBubbles || (n.event.special.change = {
    setup: function() {
      return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
      }), n.event.add(this, "click._change", function(a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
      })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
        var b = a.target;
        Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
        }), n._data(b, "changeBubbles", !0))
      })
    },
    handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return n.event.remove(this, "._change"), !Y.test(this.nodeName)
    }
  }), l.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0)
    };
    n.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = n._data(d, b);
        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
      }
    }
  }), n.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (f in a) this.on(f, b, c, a[f], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
      else if (!d) return this;
      return 1 === e && (g = d, d = function(a) {
        return n().off(a), g.apply(this, arguments)
      }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
        n.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });

  function eb(a) {
    var b = fb.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }
  var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gb = / jQuery\d+="(?:null|\d+)"/g,
    hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
    ib = /^\s+/,
    jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    kb = /<([\w:]+)/,
    lb = /<tbody/i,
    mb = /<|&#?\w+;/,
    nb = /<(?:script|style|link)/i,
    ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pb = /^$|\/(?:java|ecma)script/i,
    qb = /^true\/(.*)/,
    rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sb = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    tb = eb(z),
    ub = tb.appendChild(z.createElement("div"));
  sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

  function vb(a, b) {
    var c, d, e = 0,
      f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
  }

  function wb(a) {
    X.test(a.type) && (a.defaultChecked = a.checked)
  }

  function xb(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function yb(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
  }

  function zb(a) {
    var b = qb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Ab(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
  }

  function Bb(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c, d, e, f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
      }
      g.data && (g.data = n.extend({}, g.data))
    }
  }

  function Cb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando)
      }
      "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
  }
  n.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
      if (b)
        if (c)
          for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
        else Bb(a, f);
      return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
        if (f = a[q], f || 0 === f)
          if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
          else if (mb.test(f)) {
        h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
        while (e--) h = h.lastChild;
        if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
          f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
          while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
        }
        n.merge(p, h.childNodes), h.textContent = "";
        while (h.firstChild) h.removeChild(h.firstChild);
        h = o.lastChild
      } else p.push(b.createTextNode(f));
      h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
      while (f = p[q++])
        if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
          e = 0;
          while (f = h[e++]) pb.test(f.type || "") && c.push(f)
        }
      return h = null, o
    },
    cleanData: function(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
        if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
        }
    }
  }), n.fn.extend({
    text: function(a) {
      return W(this, function(a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = xb(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = xb(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(vb(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && n.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return n.clone(this, a, b)
      })
    },
    html: function(a) {
      return W(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
        if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(jb, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0,
        k = this.length,
        m = this,
        o = k - 1,
        p = a[0],
        q = n.isFunction(p);
      if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
        if (f)
          for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
        i = c = null
      }
      return this
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {
      for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Db, Eb = {};

  function Fb(b, c) {
    var d = n(c.createElement(b)).appendTo(c.body),
      e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
    return d.detach(), e
  }

  function Gb(a) {
    var b = z,
      c = Eb[a];
    return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
  }! function() {
    var a, b, c = z.createElement("div"),
      d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
      var a, c, e, f;
      if (null == b) {
        if (a = z.getElementsByTagName("body")[0], !a) return;
        f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
      }
      return b
    }
  }();
  var Hb = /^margin/,
    Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Jb, Kb, Lb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Jb = function(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  }, Kb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
  }) : z.documentElement.currentStyle && (Jb = function(a) {
    return a.currentStyle
  }, Kb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  });

  function Mb(a, b) {
    return {
      get: function() {
        var c = a();
        if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }! function() {
    var b, c, d, e, f, g, h = z.createElement("div"),
      i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
      j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
      reliableHiddenOffsets: function() {
        if (null != c) return c;
        var a, b, d, e = z.createElement("div"),
          f = z.getElementsByTagName("body")[0];
        if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
      },
      boxSizing: function() {
        return null == d && k(), d
      },
      boxSizingReliable: function() {
        return null == e && k(), e
      },
      pixelPosition: function() {
        return null == f && k(), f
      },
      reliableMarginRight: function() {
        var b, c, d, e;
        if (null == g && a.getComputedStyle) {
          if (b = z.getElementsByTagName("body")[0], !b) return;
          c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
        }
        return g
      }
    });

    function k() {
      var b, c, h = z.getElementsByTagName("body")[0];
      h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
        zoom: 1
      } : {}, function() {
        d = 4 === c.offsetWidth
      }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
        width: "4px"
      }).width), h.removeChild(b), c = h = null)
    }
  }(), n.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var Nb = /alpha\([^)]*\)/i,
    Ob = /opacity\s*=\s*([^)]*)/,
    Pb = /^(none|table(?!-c[ea]).+)/,
    Qb = new RegExp("^(" + T + ")(.*)$", "i"),
    Rb = new RegExp("^([+-])=(" + T + ")", "i"),
    Sb = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Tb = {
      letterSpacing: 0,
      fontWeight: 400
    },
    Ub = ["Webkit", "O", "Moz", "ms"];

  function Vb(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Ub.length;
    while (e--)
      if (b = Ub[e] + c, b in a) return b;
    return d
  }

  function Wb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function Xb(a, b, c) {
    var d = Qb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Yb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g
  }

  function Zb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Jb(a),
      g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Kb(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = "", i[b] = c
        } catch (j) {}
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
    }
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
          return Zb(a, b, d)
        }) : Zb(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && Jb(a);
        return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), l.opacity || (n.cssHooks.opacity = {
    get: function(a, b) {
      return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function(a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
    }
  }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
    return b ? n.swap(a, {
      display: "inline-block"
    }, Kb, [a, "marginRight"]) : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
  }), n.fn.extend({
    css: function(a, b) {
      return W(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return Wb(this, !0)
    },
    hide: function() {
      return Wb(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        V(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function $b(a, b, c, d, e) {
    return new $b.prototype.init(a, b, c, d, e)
  }
  n.Tween = $b, $b.prototype = {
    constructor: $b,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = $b.propHooks[this.prop];
      return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = $b.propHooks[this.prop];
      return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
    }
  }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, n.fx = $b.prototype.init, n.fx.step = {};
  var _b, ac, bc = /^(?:toggle|show|hide)$/,
    cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    dc = /queueHooks$/,
    ec = [jc],
    fc = {
      "*": [function(a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = cc.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };

  function gc() {
    return setTimeout(function() {
      _b = void 0
    }), _b = n.now()
  }

  function hc(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function ic(a, b, c) {
    for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function jc(a, b, c) {
    var d, e, f, g, h, i, j, k, m = this,
      o = {},
      p = a.style,
      q = a.nodeType && V(a),
      r = n._data(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, m.always(function() {
      m.always(function() {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], bc.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0
        }
        o[d] = r && r[d] || n.style(a, d)
      }
    if (!n.isEmptyObject(o)) {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
        n(a).hide()
      }), m.done(function() {
        var b;
        n._removeData(a, "fxshow");
        for (b in o) n.style(a, b, o[b])
      });
      for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function kc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function lc(a, b, c) {
    var d, e, f = 0,
      g = ec.length,
      h = n.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: _b || gc(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (kc(k, j.opts.specialEasing); g > f; f++)
      if (d = ec[f].call(j, a, k, j.opts)) return d;
    return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(lc, {
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? ec.unshift(a) : ec.push(a)
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(V).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = lc(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: hc("show"),
      slideUp: hc("hide"),
      slideToggle: hc("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function() {
      var a, b = n.timers,
        c = 0;
      for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), _b = void 0
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
      ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
      clearInterval(ac), ac = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
    function() {
      var a, b, c, d, e = z.createElement("div");
      e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
    }();
  var mc = /\r/g;
  n.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.text(a)
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--)
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0
            } catch (h) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var nc, oc, pc = n.expr.attrHandle,
    qc = /^(?:checked|selected)$/i,
    rc = l.getSetAttribute,
    sc = l.input;
  n.fn.extend({
    attr: function(a, b) {
      return W(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(F);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), oc = {
    set: function(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = pc[b] || n.find.attr;
    pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
      var e, f;
      return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
    } : function(a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), sc && rc || (n.attrHooks.value = {
    set: function(a, b, c) {
      return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
    }
  }), rc || (nc = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, pc.id = pc.name = pc.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, n.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: nc.set
  }, n.attrHooks.contenteditable = {
    set: function(a, b, c) {
      nc.set(a, "" === b ? !1 : b, c)
    }
  }, n.each(["width", "height"], function(a, b) {
    n.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), l.style || (n.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    },
    set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var tc = /^(?:input|select|textarea|button|object)$/i,
    uc = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return W(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return a = n.propFix[a] || a, this.each(function() {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {}
      })
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
    n.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  }), l.enctype || (n.propFix.enctype = "encoding");
  var vc = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).addClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(F) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
            f = 0;
            while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = n.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0,
        i = this.length,
        j = 0 === arguments.length || "string" == typeof a && a;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).removeClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(F) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
            g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function() {
        if ("string" === c) {
          var b, d = 0,
            e = n(this),
            f = a.match(F) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var wc = n.now(),
    xc = /\?/,
    yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
      e = n.trim(b + "");
    return e && !n.trim(e.replace(yc, function(a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
  }, n.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var zc, Ac, Bc = /#.*$/,
    Cc = /([?&])_=[^&]*/,
    Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Fc = /^(?:GET|HEAD)$/,
    Gc = /^\/\//,
    Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ic = {},
    Jc = {},
    Kc = "*/".concat("*");
  try {
    Ac = location.href
  } catch (Lc) {
    Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
  }
  zc = Hc.exec(Ac.toLowerCase()) || [];

  function Mc(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(F) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nc(a, b, c, d) {
    var e = {},
      f = a === Jc;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Oc(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a
  }

  function Pc(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Qc(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ac,
      type: "GET",
      isLocal: Ec.test(zc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
    },
    ajaxPrefilter: Mc(Ic),
    ajaxTransport: Mc(Jc),
    ajax: function(a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
              }
              b = j[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === t ? f : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function(a) {
            return t || (k.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function(a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
      h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (d in {
          success: 1,
          error: 1,
          complete: 1
        }) v[d](k[d]);
      if (i = Nc(Jc, k, b, v)) {
        v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, i.send(r, x)
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");

      function x(a, b, c, d) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
      }
      return v
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), n._evalUrl = function(a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function(a) {
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      return this.each(n.isFunction(a) ? function(b) {
        n(this).wrapInner(a.call(this, b))
      } : function() {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = n.isFunction(a);
      return this.each(function(c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
  }, n.expr.filters.visible = function(a) {
    return !n.expr.filters.hidden(a)
  };
  var Rc = /%20/g,
    Sc = /\[\]$/,
    Tc = /\r?\n/g,
    Uc = /^(?:submit|button|image|reset|file)$/i,
    Vc = /^(?:input|select|textarea|keygen)/i;

  function Wc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function(b, e) {
      c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) Wc(c, a[c], b, e);
    return d.join("&").replace(Rc, "+")
  }, n.fn.extend({
    serialize: function() {
      return n.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
      }).map(function(a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(Tc, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Tc, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
  } : $c;
  var Xc = 0,
    Yc = {},
    Zc = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function() {
    for (var a in Yc) Yc[a](void 0, !0)
  }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
    if (!a.crossDomain || l.cors) {
      var b;
      return {
        send: function(c, d) {
          var e, f = a.xhr(),
            g = ++Xc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          f.send(a.hasContent && a.data || null), b = function(c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState))
              if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
              else {
                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                try {
                  i = f.statusText
                } catch (k) {
                  i = ""
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
              }
            j && d(h, i, j, f.getAllResponseHeaders())
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
        },
        abort: function() {
          b && b(void 0, !0)
        }
      }
    }
  });

  function $c() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function _c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = z.head || n("head")[0] || z.documentElement;
      return {
        send: function(d, e) {
          b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var ad = [],
    bd = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = ad.pop() || n.expando + "_" + wc++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || z;
    var d = v.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
  };
  var cd = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && cd) return cd.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: b
    }).done(function(a) {
      e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
      g.each(c, e || [a.responseText, b, a])
    }), this
  }, n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem
    }).length
  };
  var dd = a.document.documentElement;

  function ed(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  n.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d
    },
    position: function() {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent || dd;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || dd
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function(d) {
      return W(this, function(a, d, e) {
        var f = ed(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
      return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return W(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.size = function() {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n
  });
  var fd = a.jQuery,
    gd = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
  }, typeof b === L && (a.jQuery = a.$ = n), n
});
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
  function(e, t, n) {
    function r(n) {
      var r = t.console;
      i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }

    function a(t, a, i, o) {
      if (Object.defineProperty) try {
        return Object.defineProperty(t, a, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return r(o), i
          },
          set: function(e) {
            r(o), i = e
          }
        }), n
      } catch (s) {}
      e._definePropertyBroken = !0, t[a] = i
    }
    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
      i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {
        size: 1
      }).attr("size") && e.attrFn,
      s = e.attr,
      u = e.attrHooks.value && e.attrHooks.value.get || function() {
        return null
      },
      c = e.attrHooks.value && e.attrHooks.value.set || function() {
        return n
      },
      l = /^(?:input|button)$/i,
      d = /^[238]$/,
      p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
      var c = a.toLowerCase(),
        g = t && t.nodeType;
      return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
        get: function(t, r) {
          var a, i = e.prop(t, r);
          return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
        },
        set: function(t, n, r) {
          var a;
          return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
        }
      }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    }, e.attrHooks.value = {
      get: function(e, t) {
        var n = (e.nodeName || "").toLowerCase();
        return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
      },
      set: function(e, t) {
        var a = (e.nodeName || "").toLowerCase();
        return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
      }
    };
    var g, h, v = e.fn.init,
      m = e.parseJSON,
      y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) {
      var i;
      return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
      return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function(e) {
      e = e.toLowerCase();
      var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: t[1] || "",
        version: t[2] || "0"
      }
    }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
      function t(e, n) {
        return new t.fn.init(e, n)
      }
      e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
        return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
      }, t.fn.init.prototype = t.fn;
      var n = t(document);
      return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({
      converters: {
        "text json": e.parseJSON
      }
    });
    var b = e.fn.data;
    e.fn.data = function(t) {
      var a, i, o = this[0];
      return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i,
      w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
      return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, e.clean || (e.clean = function(t, a, i, o) {
      a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
      var s, u, c, l, d = [];
      if (e.merge(d, e.buildFragment(t, a).childNodes), i)
        for (c = function(e) {
            return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
          }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
      return d
    });
    var Q = e.event.add,
      x = e.event.remove,
      k = e.event.trigger,
      N = e.fn.toggle,
      T = e.fn.live,
      M = e.fn.die,
      S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      C = RegExp("\\b(?:" + S + ")\\b"),
      H = /(?:^|\s)hover(\.\S+|)\b/,
      A = function(t) {
        return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
      };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
      e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
    }, e.event.remove = function(e, t, n, r, a) {
      x.call(this, e, A(t) || "", n, r, a)
    }, e.fn.error = function() {
      var e = Array.prototype.slice.call(arguments, 0);
      return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function(t, n) {
      if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
      r("jQuery.fn.toggle(handler, handler...) is deprecated");
      var a = arguments,
        i = t.guid || e.guid++,
        o = 0,
        s = function(n) {
          var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
          return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
        };
      for (s.guid = i; a.length > o;) a[o++].guid = i;
      return this.click(s)
    }, e.fn.live = function(t, n, a) {
      return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function(t, n) {
      return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, a) {
      return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
    }, e.each(S.split("|"), function(t, n) {
      e.event.special[n] = {
        setup: function() {
          var t = this;
          return t !== document && (e.event.add(document, n + "." + e.guid, function() {
            e.event.trigger(n, null, t, !0)
          }), e._data(this, n, e.guid++)), !1
        },
        teardown: function() {
          return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
        }
      }
    })
  }(jQuery, window);;
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function(x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },
  easeInCubic: function(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(x, t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function(x, t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function(x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  },
  easeInOutBounce: function(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});;

function formatedNumberToFloat(price, currencyFormat, currencySign) {
  price = price.replace(currencySign, '');
  if (currencyFormat === 1)
    return parseFloat(price.replace(',', '').replace(' ', ''));
  else if (currencyFormat === 2)
    return parseFloat(price.replace(' ', '').replace(',', '.'));
  else if (currencyFormat === 3)
    return parseFloat(price.replace('.', '').replace(' ', '').replace(',', '.'));
  else if (currencyFormat === 4)
    return parseFloat(price.replace(',', '').replace(' ', ''));
  return price;
}

function formatNumber(value, numberOfDecimal, thousenSeparator, virgule) {
  value = value.toFixed(numberOfDecimal);
  var val_string = value + '';
  var tmp = val_string.split('.');
  var abs_val_string = (tmp.length === 2) ? tmp[0] : val_string;
  var deci_string = ('0.' + (tmp.length === 2 ? tmp[1] : 0)).substr(2);
  var nb = abs_val_string.length;
  for (var i = 1; i < 4; i++)
    if (value >= Math.pow(10, (3 * i)))
      abs_val_string = abs_val_string.substring(0, nb - (3 * i)) + thousenSeparator + abs_val_string.substring(nb - (3 * i));
  if (parseInt(numberOfDecimal) === 0)
    return abs_val_string;
  return abs_val_string + virgule + (deci_string > 0 ? deci_string : '00');
}

function formatCurrency(price, currencyFormat, currencySign, currencyBlank) {
  var blank = '';
  price = parseFloat(price.toFixed(10));
  price = ps_round(price, priceDisplayPrecision);
  if (currencyBlank > 0)
    blank = ' ';
  if (currencyFormat == 1)
    return currencySign + blank + formatNumber(price, priceDisplayPrecision, ',', '.');
  if (currencyFormat == 2)
    return (formatNumber(price, priceDisplayPrecision, ' ', ',') + blank + currencySign);
  if (currencyFormat == 3)
    return (currencySign + blank + formatNumber(price, priceDisplayPrecision, '.', ','));
  if (currencyFormat == 4)
    return (formatNumber(price, priceDisplayPrecision, ',', '.') + blank + currencySign);
  if (currencyFormat == 5)
    return (currencySign + blank + formatNumber(price, priceDisplayPrecision, '\'', '.'));
  return price;
}

function ps_round_helper(value, mode) {
  if (value >= 0.0) {
    tmp_value = Math.floor(value + 0.5);
    if ((mode == 3 && value == (-0.5 + tmp_value)) || (mode == 4 && value == (0.5 + 2 * Math.floor(tmp_value / 2.0))) || (mode == 5 && value == (0.5 + 2 * Math.floor(tmp_value / 2.0) - 1.0)))
      tmp_value -= 1.0;
  } else {
    tmp_value = Math.ceil(value - 0.5);
    if ((mode == 3 && value == (0.5 + tmp_value)) || (mode == 4 && value == (-0.5 + 2 * Math.ceil(tmp_value / 2.0))) || (mode == 5 && value == (-0.5 + 2 * Math.ceil(tmp_value / 2.0) + 1.0)))
      tmp_value += 1.0;
  }
  return tmp_value;
}

function ps_log10(value) {
  return Math.log(value) / Math.LN10;
}

function ps_round_half_up(value, precision) {
  var mul = Math.pow(10, precision);
  var val = value * mul;
  var next_digit = Math.floor(val * 10) - 10 * Math.floor(val);
  if (next_digit >= 5)
    val = Math.ceil(val);
  else
    val = Math.floor(val);
  return val / mul;
}

function ps_round(value, places) {
  if (typeof(roundMode) === 'undefined')
    roundMode = 2;
  if (typeof(places) === 'undefined')
    places = 2;
  var method = roundMode;
  if (method === 0)
    return ceilf(value, places);
  else if (method === 1)
    return floorf(value, places);
  else if (method === 2)
    return ps_round_half_up(value, places);
  else if (method == 3 || method == 4 || method == 5) {
    var precision_places = 14 - Math.floor(ps_log10(Math.abs(value)));
    var f1 = Math.pow(10, Math.abs(places));
    if (precision_places > places && precision_places - places < 15) {
      var f2 = Math.pow(10, Math.abs(precision_places));
      if (precision_places >= 0)
        tmp_value = value * f2;
      else
        tmp_value = value / f2;
      tmp_value = ps_round_helper(tmp_value, roundMode);
      f2 = Math.pow(10, Math.abs(places - precision_places));
      tmp_value /= f2;
    } else {
      if (places >= 0)
        tmp_value = value * f1;
      else
        tmp_value = value / f1;
      if (Math.abs(tmp_value) >= 1e15)
        return value;
    }
    tmp_value = ps_round_helper(tmp_value, roundMode);
    if (places > 0)
      tmp_value = tmp_value / f1;
    else
      tmp_value = tmp_value * f1;
    return tmp_value;
  }
}

function autoUrl(name, dest) {
  var loc;
  var id_list;
  id_list = document.getElementById(name);
  loc = id_list.options[id_list.selectedIndex].value;
  if (loc != 0)
    location.href = dest + loc;
  return;
}

function autoUrlNoList(name, dest) {
  var loc;
  loc = document.getElementById(name).checked;
  location.href = dest + (loc == true ? 1 : 0);
  return;
}

function toggle(e, show) {
  e.style.display = show ? '' : 'none';
}

function toggleMultiple(tab) {
  var len = tab.length;
  for (var i = 0; i < len; i++)
    if (tab[i].style)
      toggle(tab[i], tab[i].style.display == 'none');
}

function showElemFromSelect(select_id, elem_id) {
  var select = document.getElementById(select_id);
  for (var i = 0; i < select.length; ++i) {
    var elem = document.getElementById(elem_id + select.options[i].value);
    if (elem != null)
      toggle(elem, i == select.selectedIndex);
  }
}

function openCloseAllDiv(name, option) {
  var tab = $('*[name=' + name + ']');
  for (var i = 0; i < tab.length; ++i)
    toggle(tab[i], option);
}

function toggleDiv(name, option) {
  $('*[name=' + name + ']').each(function() {
    if (option == 'open') {
      $('#buttonall').data('status', 'close');
      $(this).hide();
    } else {
      $('#buttonall').data('status', 'open');
      $(this).show();
    }
  })
}

function toggleButtonValue(id_button, text1, text2) {
  if ($('#' + id_button).find('i').first().hasClass('process-icon-compress')) {
    $('#' + id_button).find('i').first().removeClass('process-icon-compress').addClass('process-icon-expand');
    $('#' + id_button).find('span').first().html(text1);
  } else {
    $('#' + id_button).find('i').first().removeClass('process-icon-expand').addClass('process-icon-compress');
    $('#' + id_button).find('span').first().html(text2);
  }
}

function toggleElemValue(id_button, text1, text2) {
  var obj = document.getElementById(id_button);
  if (obj)
    obj.value = ((!obj.value || obj.value == text2) ? text1 : text2);
}

function addBookmark(url, title) {
  if (window.sidebar && window.sidebar.addPanel)
    return window.sidebar.addPanel(title, url, "");
  else if (window.external && ('AddFavorite' in window.external))
    return window.external.AddFavorite(url, title);
}

function writeBookmarkLink(url, title, text, img) {
  var insert = '';
  if (img)
    insert = writeBookmarkLinkObject(url, title, '<img src="' + img + '" alt="' + escape(text) + '" title="' + removeQuotes(text) + '" />') + '&nbsp';
  insert += writeBookmarkLinkObject(url, title, text);
  if (window.sidebar || window.opera && window.print || (window.external && ('AddFavorite' in window.external)))
    $('.add_bookmark, #header_link_bookmark').append(insert);
}

function writeBookmarkLinkObject(url, title, insert) {
  if (window.sidebar || window.external)
    return ('<a href="javascript:addBookmark(\'' + escape(url) + '\', \'' + removeQuotes(title) + '\')">' + insert + '</a>');
  else if (window.opera && window.print)
    return ('<a rel="sidebar" href="' + escape(url) + '" title="' + removeQuotes(title) + '">' + insert + '</a>');
  return ('');
}

function checkCustomizations() {
  var pattern = new RegExp(' ?filled ?');
  if (typeof customizationFields != 'undefined')
    for (var i = 0; i < customizationFields.length; i++) {
      if (parseInt(customizationFields[i][1]) == 1 && ($('#' + customizationFields[i][0]).html() == '' || $('#' + customizationFields[i][0]).text() != $('#' + customizationFields[i][0]).val()) && !pattern.test($('#' + customizationFields[i][0]).attr('class')))
        return false;
    }
  return true;
}

function emptyCustomizations() {
  customizationId = null;
  if (typeof(customizationFields) == 'undefined') return;
  $('.customization_block .success').fadeOut(function() {
    $(this).remove();
  });
  $('.customization_block .error').fadeOut(function() {
    $(this).remove();
  });
  for (var i = 0; i < customizationFields.length; i++) {
    $('#' + customizationFields[i][0]).html('');
    $('#' + customizationFields[i][0]).val('');
  }
}

function ceilf(value, precision) {
  if (typeof(precision) === 'undefined')
    precision = 0;
  var precisionFactor = precision === 0 ? 1 : Math.pow(10, precision);
  var tmp = value * precisionFactor;
  var tmp2 = tmp.toString();
  if (tmp2[tmp2.length - 1] === 0)
    return value;
  return Math.ceil(value * precisionFactor) / precisionFactor;
}

function floorf(value, precision) {
  if (typeof(precision) === 'undefined')
    precision = 0;
  var precisionFactor = precision === 0 ? 1 : Math.pow(10, precision);
  var tmp = value * precisionFactor;
  var tmp2 = tmp.toString();
  if (tmp2[tmp2.length - 1] === 0)
    return value;
  return Math.floor(value * precisionFactor) / precisionFactor;
}

function setCurrency(id_currency) {
  $.ajax({
    type: 'POST',
    headers: {
      "cache-control": "no-cache"
    },
    url: baseDir + 'index.php' + '?rand=' + new Date().getTime(),
    data: 'controller=change-currency&id_currency=' + parseInt(id_currency),
    success: function(msg) {
      location.reload(true);
    }
  });
}

function isArrowKey(k_ev) {
  var unicode = k_ev.keyCode ? k_ev.keyCode : k_ev.charCode;
  if (unicode >= 37 && unicode <= 40)
    return true;
  return false;
}

function removeQuotes(value) {
  value = value.replace(/\\"/g, '');
  value = value.replace(/"/g, '');
  value = value.replace(/\\'/g, '');
  value = value.replace(/'/g, '');
  return value;
}

function sprintf(format) {
  for (var i = 1; i < arguments.length; i++)
    format = format.replace(/%s/, arguments[i]);
  return format;
}

function fancyMsgBox(msg, title) {
  if (title) msg = "<h2>" + title + "</h2><p>" + msg + "</p>";
  msg += "<br/><p class=\"submit\" style=\"text-align:right; padding-bottom: 0\"><input class=\"button\" type=\"button\" value=\"OK\" onclick=\"$.fancybox.close();\" /></p>";
  if (!!$.prototype.fancybox)
    $.fancybox(msg, {
      'autoDimensions': false,
      'autoSize': false,
      'width': 500,
      'height': 'auto',
      'openEffect': 'none',
      'closeEffect': 'none'
    });
}

function fancyChooseBox(question, title, buttons, otherParams) {
  var msg, funcName, action;
  msg = '';
  if (title)
    msg = "<h2>" + title + "</h2><p>" + question + "</p>";
  msg += "<br/><p class=\"submit\" style=\"text-align:right; padding-bottom: 0\">";
  var i = 0;
  for (var caption in buttons) {
    if (!buttons.hasOwnProperty(caption)) continue;
    funcName = buttons[caption];
    if (typeof otherParams == 'undefined') otherParams = 0;
    otherParams = escape(JSON.stringify(otherParams));
    action = funcName ? "$.fancybox.close();window['" + funcName + "'](JSON.parse(unescape('" + otherParams + "')), " + i + ")" : "$.fancybox.close()";
    msg += '<button type="submit" class="button btn-default button-medium" style="margin-right: 5px;" value="true" onclick="' + action + '" >';
    msg += '<span>' + caption + '</span></button>'
    i++;
  }
  msg += "</p>";
  if (!!$.prototype.fancybox)
    $.fancybox(msg, {
      'autoDimensions': false,
      'width': 500,
      'height': 'auto',
      'openEffect': 'none',
      'closeEffect': 'none'
    });
}

function toggleLayer(whichLayer, flag) {
  if (!flag)
    $(whichLayer).hide();
  else
    $(whichLayer).show();
}

function openCloseLayer(whichLayer, action) {
  if (!action) {
    if ($(whichLayer).css('display') == 'none')
      $(whichLayer).show();
    else
      $(whichLayer).hide();
  } else if (action == 'open')
    $(whichLayer).show();
  else if (action == 'close')
    $(whichLayer).hide();
}

function updateTextWithEffect(jQueryElement, text, velocity, effect1, effect2, newClass) {
  if (jQueryElement.text() !== text) {
    if (effect1 === 'fade')
      jQueryElement.fadeOut(velocity, function() {
        $(this).addClass(newClass);
        if (effect2 === 'fade') $(this).text(text).fadeIn(velocity);
        else if (effect2 === 'slide') $(this).text(text).slideDown(velocity);
        else if (effect2 === 'show') $(this).text(text).show(velocity, function() {});
      });
    else if (effect1 === 'slide')
      jQueryElement.slideUp(velocity, function() {
        $(this).addClass(newClass);
        if (effect2 === 'fade') $(this).text(text).fadeIn(velocity);
        else if (effect2 === 'slide') $(this).text(text).slideDown(velocity);
        else if (effect2 === 'show') $(this).text(text).show(velocity);
      });
    else if (effect1 === 'hide')
      jQueryElement.hide(velocity, function() {
        $(this).addClass(newClass);
        if (effect2 === 'fade') $(this).text(text).fadeIn(velocity);
        else if (effect2 === 'slide') $(this).text(text).slideDown(velocity);
        else if (effect2 === 'show') $(this).text(text).show(velocity);
      });
  }
}

function dbg(value) {
  var active = false;
  var firefox = true;
  if (active)
    if (firefox)
      console.log(value);
    else
      alert(value);
}

function print_r(element, limit, depth) {
  depth = depth ? depth : 0;
  limit = limit ? limit : 1;
  returnString = '<ol>';
  for (property in element) {
    if (property != 'domConfig') {
      returnString += '<li><strong>' + property + '</strong> <small>(' + (typeof element[property]) + ')</small>';
      if (typeof element[property] == 'number' || typeof element[property] == 'boolean')
        returnString += ' : <em>' + element[property] + '</em>';
      if (typeof element[property] == 'string' && element[property])
        returnString += ': <div style="background:#C9C9C9;border:1px solid black; overflow:auto;"><code>' +
        element[property].replace(/</g, '&amp;lt;').replace(/>/g, '&amp;gt;') + '</code></div>';
      if ((typeof element[property] == 'object') && (depth < limit))
        returnString += print_r(element[property], limit, (depth + 1));
      returnString += '</li>';
    }
  }
  returnString += '</ol>';
  if (depth == 0) {
    winpop = window.open("", "", "width=800,height=600,scrollbars,resizable");
    winpop.document.write('<pre>' + returnString + '</pre>');
    winpop.document.close();
  }
  return returnString;
}

function in_array(value, array) {
  for (var i in array)
    if ((array[i] + '') === (value + ''))
      return true;
  return false;
}

function isCleanHtml(content) {
  var events = 'onmousedown|onmousemove|onmmouseup|onmouseover|onmouseout|onload|onunload|onfocus|onblur|onchange';
  events += '|onsubmit|ondblclick|onclick|onkeydown|onkeyup|onkeypress|onmouseenter|onmouseleave|onerror|onselect|onreset|onabort|ondragdrop|onresize|onactivate|onafterprint|onmoveend';
  events += '|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onmove';
  events += '|onbounce|oncellchange|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavailable|ondatasetchanged|ondatasetcomplete|ondeactivate|ondrag|ondragend|ondragenter|onmousewheel';
  events += '|ondragleave|ondragover|ondragstart|ondrop|onerrorupdate|onfilterchange|onfinish|onfocusin|onfocusout|onhashchange|onhelp|oninput|onlosecapture|onmessage|onmouseup|onmovestart';
  events += '|onoffline|ononline|onpaste|onpropertychange|onreadystatechange|onresizeend|onresizestart|onrowenter|onrowexit|onrowsdelete|onrowsinserted|onscroll|onsearch|onselectionchange';
  events += '|onselectstart|onstart|onstop';
  var script1 = /<[\s]*script/im;
  var script2 = new RegExp('(' + events + ')[\s]*=', 'im');
  var script3 = /.*script\:/im;
  var script4 = /<[\s]*(i?frame|embed|object)/im;
  if (script1.test(content) || script2.test(content) || script3.test(content) || script4.test(content))
    return false;
  return true;
}

function getStorageAvailable() {
  test = 'foo';
  storage = window.localStorage || window.sessionStorage;
  try {
    storage.setItem(test, test);
    storage.removeItem(test);
    return storage;
  } catch (error) {
    return null;
  }
}
$(document).ready(function() {
  $('form').submit(function() {
    $(this).find('.hideOnSubmit').hide();
  });
  $.fn.checkboxChange = function(fnChecked, fnUnchecked) {
    if ($(this).prop('checked') && fnChecked)
      fnChecked.call(this);
    else if (fnUnchecked)
      fnUnchecked.call(this);
    if (!$(this).attr('eventCheckboxChange')) {
      $(this).on('change', function() {
        $(this).checkboxChange(fnChecked, fnUnchecked);
      });
      $(this).attr('eventCheckboxChange', true);
    }
  };
  $('a._blank, a.js-new-window').attr('target', '_blank');
});;
var responsiveflag = false;
$(document).ready(function() {
  highdpiInit();
  responsiveResize();
  $(window).resize(responsiveResize);
  if (navigator.userAgent.match(/Android/i)) {
    var viewport = document.querySelector('meta[name="viewport"]');
    viewport.setAttribute('content', 'initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width,height=device-height');
    window.scrollTo(0, 1);
  }
  if (typeof quickView !== 'undefined' && quickView)
    quick_view();
  dropDown();
  if (typeof page_name != 'undefined' && !in_array(page_name, ['index', 'product'])) {
    bindGrid();
    $(document).on('change', '.selectProductSort', function(e) {
      if (typeof request != 'undefined' && request)
        var requestSortProducts = request;
      var splitData = $(this).val().split(':');
      var url = '';
      if (typeof requestSortProducts != 'undefined' && requestSortProducts) {
        url += requestSortProducts;
        if (typeof splitData[0] !== 'undefined' && splitData[0]) {
          url += (requestSortProducts.indexOf('?') < 0 ? '?' : '&') + 'orderby=' + splitData[0] + (splitData[1] ? '&orderway=' + splitData[1] : '');
          if (typeof splitData[1] !== 'undefined' && splitData[1])
            url += '&orderway=' + splitData[1];
        }
        document.location.href = url;
      }
    });
    $(document).on('change', 'select[name="n"]', function() {
      $(this.form).submit();
    });
    $(document).on('change', 'select[name="currency_payment"]', function() {
      setCurrency($(this).val());
    });
  }
  $(document).on('change', 'select[name="manufacturer_list"], select[name="supplier_list"]', function() {
    if (this.value != '')
      location.href = this.value;
  });
  $(document).on('click', '.back', function(e) {
    e.preventDefault();
    history.back();
  });
  jQuery.curCSS = jQuery.css;
  if (!!$.prototype.cluetip)
    $('a.cluetip').cluetip({
      local: true,
      cursor: 'pointer',
      dropShadow: false,
      dropShadowSteps: 0,
      showTitle: false,
      tracking: true,
      sticky: false,
      mouseOutClose: true,
      fx: {
        open: 'fadeIn',
        openSpeed: 'fast'
      }
    }).css('opacity', 0.8);
  if (typeof(FancyboxI18nClose) !== 'undefined' && typeof(FancyboxI18nNext) !== 'undefined' && typeof(FancyboxI18nPrev) !== 'undefined' && !!$.prototype.fancybox)
    $.extend($.fancybox.defaults.tpl, {
      closeBtn: '<a title="' + FancyboxI18nClose + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
      next: '<a title="' + FancyboxI18nNext + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
      prev: '<a title="' + FancyboxI18nPrev + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
    });
  $(".alert.alert-danger").on('click', this, function(e) {
    if (e.offsetX >= 16 && e.offsetX <= 39 && e.offsetY >= 16 && e.offsetY <= 34)
      $(this).fadeOut();
  });
});

function highdpiInit() {
  if (typeof highDPI === 'undefined')
    return;
  if (highDPI && $('.replace-2x').css('font-size') == "1px") {
    var els = $("img.replace-2x").get();
    for (var i = 0; i < els.length; i++) {
      src = els[i].src;
      extension = src.substr((src.lastIndexOf('.') + 1));
      src = src.replace("." + extension, "2x." + extension);
      var img = new Image();
      img.src = src;
      img.height != 0 ? els[i].src = src : els[i].src = els[i].src;
    }
  }
}

function scrollCompensate() {
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";
  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;
  document.body.removeChild(outer);
  return (w1 - w2);
}

function responsiveResize() {
  compensante = scrollCompensate();
  if (($(window).width() + scrollCompensate()) <= 767 && responsiveflag == false) {
    accordionLinks('enable');
    accordion('enable');
    accordionFooter('enable');
    responsiveflag = true;
  } else if (($(window).width() + scrollCompensate()) >= 768) {
    accordionLinks('disable');
    accordion('disable');
    accordionFooter('disable');
    responsiveflag = false;
    if (typeof bindUniform !== 'undefined')
      bindUniform();
  }
  blockHover();
}

function blockHover(status) {}

function quick_view() {
  $(document).on('click', '.quick-view:visible, .quick-view-mobile:visible', function(e) {
    e.preventDefault();
    var url = this.rel;
    var anchor = '';
    if (url.indexOf('#') != -1) {
      anchor = url.substring(url.indexOf('#'), url.length);
      url = url.substring(0, url.indexOf('#'));
    }
    if (url.indexOf('?') != -1)
      url += '&';
    else
      url += '?';
    if (!!$.prototype.fancybox)
      $.fancybox({
        'padding': 0,
        'width': 1087,
        'height': 610,
        'type': 'iframe',
        'href': url + 'content_only=1' + anchor
      });
  });
}

function bindGrid() {
  var storage = false;
  if (typeof(getStorageAvailable) !== 'undefined') {
    storage = getStorageAvailable();
  }
  if (!storage) {
    return;
  }
  var view = $.totalStorage('display');
  if (!view && (typeof displayList != 'undefined') && displayList)
    view = 'list';
  if (view && view != 'grid')
    display(view);
  else
    $('.display').find('li#grid').addClass('selected');
  $(document).on('click', '#grid', function(e) {
    e.preventDefault();
    display('grid');
  });
  $(document).on('click', '#list', function(e) {
    e.preventDefault();
    display('list');
  });
}

function display(view) {
  if (view == 'list') {
    $('ul.product_list').removeClass('grid').addClass('list row');
    $('.product_list > li').removeClass('col-xs-12 col-sm-6 col-md-3').addClass('col-xs-12');
    $('.product_list > li').each(function(index, element) {
      var html = '';
      html = '<div class="product-container"><div class="item-inner"><div class="row">';
      html += '<div class="left-block col-xs-12 col-sm-5 col-md-4"><div class="left-block-inner">' + $(element).find('.left-block').html() + '</div></div>';
      html += '<div class="right-block col-xs-12 col-sm-7 col-md-8">';
      html += '<h5 itemprop="name">' + $(element).find('h5').html() + '</h5>';
      var price = $(element).find('.content_price').html();
      if (price != null) {
        html += '<div class="content_price">' + price + '</div>';
      }
      var hookReviews = $(element).find('.hook-reviews');
      if (hookReviews.length) {
        html += hookReviews.clone().wrap('<div>').parent().html();
      }
      html += '<p class="product-desc">' + $(element).find('.product-desc').html() + '</p>';
      html += '<p class="learn-more">' + $(element).find('.learn-more').html() + '</p>';
      var colorList = $(element).find('.color-list-container').html();
      if (colorList != null) {
        html += '<div class="color-list-container">' + colorList + '</div>';
      }
      var availability = $(element).find('.availability').html();
      if (availability != null) {
        html += '<span class="availability">' + availability + '</span>';
      }
      html += '<div itemprop="offers" itemscope itemtype="https://schema.org/Offer" class="button-container">' + $(element).find('.button-container').html() + '</div>';
      html += '</div>';
      html += '</div></div></div>';
      $(element).html(html);
    });
    $('.display').find('li#list').addClass('selected');
    $('.display').find('li#grid').removeAttr('class');
    $.totalStorage('display', 'list');
  } else {
    $('ul.product_list').removeClass('list').addClass('grid row');
    $('.product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-3');
    $('.product_list > li').each(function(index, element) {
      var html = '';
      html += '<div class="product-container">';
      html += '<div class="item-inner">';
      var leftinner = $(element).find('.left-block-inner').html();
      if (leftinner != null) {
        html += '<div class="left-block">' + $(element).find('.left-block-inner').html() + '</div>';
      } else {
        html += '<div class="left-block">' + $(element).find('.left-block').html() + '</div>';
      }
      html += '<div class="right-block">';
      html += '<h5 itemprop="name">' + $(element).find('h5').html() + '</h5>';
      html += '<div class="price-rating">';
      var price = $(element).find('.content_price').html();
      if (price != null) {
        html += '<div class="content_price">' + price + '</div>';
      }
      var hookReviews = $(element).find('.hook-reviews');
      if (hookReviews.length) {
        html += hookReviews.clone().wrap('<div>').parent().html();
      }
      html += '<p itemprop="description" class="product-desc">' + $(element).find('.product-desc').html() + '</p>';
      html += '<p class="learn-more">' + $(element).find('.learn-more').html() + '</p>';
      html += '</div>';
      var colorList = $(element).find('.color-list-container').html();
      if (colorList != null) {
        html += '<div class="color-list-container">' + colorList + '</div>';
      }
      var availability = $(element).find('.availability').html();
      if (availability != null) {
        html += '<span class="availability">' + availability + '</span>';
      }
      html += '</div>';
      html += '</div></div>';
      $(element).html(html);
    });
    $('.display').find('li#grid').addClass('selected');
    $('.display').find('li#list').removeAttr('class');
    $.totalStorage('display', 'grid');
  }
}

function dropDown() {
  elementClick = '#header .current';
  elementSlide = 'ul.toogle_content';
  activeClass = 'active';
  $(elementClick).on('click', function(e) {
    e.stopPropagation();
    var subUl = $(this).next(elementSlide);
    if (subUl.is(':hidden')) {
      subUl.slideDown();
      $(this).addClass(activeClass);
    } else {
      subUl.slideUp();
      $(this).removeClass(activeClass);
    }
    $(elementClick).not(this).next(elementSlide).slideUp();
    $(elementClick).not(this).removeClass(activeClass);
    e.preventDefault();
  });
  $(elementSlide).on('click', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', function(e) {
    e.stopPropagation();
    var elementHide = $(elementClick).next(elementSlide);
    $(elementHide).slideUp();
    $(elementClick).removeClass('active');
  });
}

function accordionFooter(status) {
  if (status == 'enable') {
    $('#footer .footer-block h4').on('click', function(e) {
      $(this).toggleClass('active').parent().find('.toggle-footer').stop().slideToggle('medium');
      e.preventDefault();
    })
    $('#footer').addClass('accordion').find('.toggle-footer').slideUp('fast');
  } else {
    $('.footer-block h4').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');
    $('#footer').removeClass('accordion');
  }
}

function accordion(status) {
  if (status == 'enable') {
    var accordion_selector = '#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4,' + '#left_column .shopping_cart > a:first-child, #right_column .shopping_cart > a:first-child';
    $(accordion_selector).on('click', function(e) {
      $(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
    });
    $('#right_column, #left_column').addClass('accordion').find('.block .block_content').slideUp('fast');
    if (typeof(ajaxCart) !== 'undefined')
      ajaxCart.collapse();
  } else {
    $('#right_column .block .title_block, #left_column .block .title_block, #left_column #newsletter_block_left h4').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');
    $('#left_column, #right_column').removeClass('accordion');
  }
}

function accordionLinks(status) {
  if (status == 'enable') {
    $('#header_links').addClass('toogle_content')
    $('#header_links').css({
      'display': 'none'
    });
  } else {
    $('#header_links').removeClass('toogle_content');
    $('#header_links').css({
      'display': 'block'
    });
  }
}

function bindUniform() {
  if (!!$.prototype.uniform)
    $("select.form-control,input[type='radio'],input[type='checkbox']").not(".not_uniform").uniform();
};
/**
 * bootstrap.js v3.0.0 by @fat and @mdo
 * Copyright 2013 Twitter Inc.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery) throw new Error("Bootstrap requires jQuery"); + function(a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      }
  }
  a.fn.emulateTransitionEnd = function(b) {
    var c = !1,
      d = this;
    a(this).one(a.support.transition.end, function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b()
  })
}(window.jQuery), + function(a) {
  "use strict";
  var b = '[data-dismiss="alert"]',
    c = function(c) {
      a(c).on("click", b, this.close)
    };
  c.prototype.close = function(b) {
    function c() {
      f.trigger("closed.bs.alert").remove()
    }
    var d = a(this),
      e = d.attr("data-target");
    e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
  };
  var d = a.fn.alert;
  a.fn.alert = function(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.alert");
      e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
    })
  }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
    return a.fn.alert = d, this
  }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
  };
  b.DEFAULTS = {
    loadingText: "loading..."
  }, b.prototype.setState = function(a) {
    var b = "disabled",
      c = this.$element,
      d = c.is("input") ? "val" : "html",
      e = c.data();
    a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() {
      "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
    }, 0)
  }, b.prototype.toggle = function() {
    var a = this.$element.closest('[data-toggle="buttons"]');
    if (a.length) {
      var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
      "radio" === b.prop("type") && a.find(".active").removeClass("active")
    }
    this.$element.toggleClass("active")
  };
  var c = a.fn.button;
  a.fn.button = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof c && c;
      e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
    })
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
    return a.fn.button = c, this
  }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
    var c = a(b.target);
    c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
  })
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
  };
  b.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0
  }, b.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, b.prototype.getActiveIndex = function() {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
  }, b.prototype.to = function(b) {
    var c = this,
      d = this.getActiveIndex();
    return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
      c.to(b)
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
  }, b.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, b.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, b.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, b.prototype.slide = function(b, c) {
    var d = this.$element.find(".item.active"),
      e = c || d[b](),
      f = this.interval,
      g = "next" == b ? "left" : "right",
      h = "next" == b ? "first" : "last",
      i = this;
    if (!e.length) {
      if (!this.options.wrap) return;
      e = this.$element.find(".item")[h]()
    }
    this.sliding = !0, f && this.pause();
    var j = a.Event("slide.bs.carousel", {
      relatedTarget: e[0],
      direction: g
    });
    if (!e.hasClass("active")) {
      if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
          var b = a(i.$indicators.children()[i.getActiveIndex()]);
          b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide")) {
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
          e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
            i.$element.trigger("slid")
          }, 0)
        }).emulateTransitionEnd(600)
      } else {
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
      }
      return f && this.cycle(), this
    }
  };
  var c = a.fn.carousel;
  a.fn.carousel = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
        g = "string" == typeof c ? c : f.slide;
      e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = c, this
  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
    var c, d = a(this),
      e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
      f = a.extend({}, e.data(), d.data()),
      g = d.attr("data-slide-to");
    g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
  }), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var b = a(this);
      b.carousel(b.data())
    })
  })
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
  };
  b.DEFAULTS = {
    toggle: !0
  }, b.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, b.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b = a.Event("show.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.$parent && this.$parent.find("> .panel > .in");
        if (c && c.length) {
          var d = c.data("bs.collapse");
          if (d && d.transitioning) return;
          c.collapse("hide"), d || c.data("bs.collapse", null)
        }
        var e = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
        var f = function() {
          this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        };
        if (!a.support.transition) return f.call(this);
        var g = a.camelCase(["scroll", e].join("-"));
        this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
      }
    }
  }, b.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
        var d = function() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
        };
        return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
      }
    }
  }, b.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  };
  var c = a.fn.collapse;
  a.fn.collapse = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.collapse"),
        f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
      e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = c, this
  }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
    var c, d = a(this),
      e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
      f = a(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : d.data(),
      i = d.attr("data-parent"),
      j = i && a(i);
    g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
  })
}(window.jQuery), + function(a) {
  "use strict";

  function b() {
    a(d).remove(), a(e).each(function(b) {
      var d = c(a(this));
      d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
    })
  }

  function c(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }
  var d = ".dropdown-backdrop",
    e = "[data-toggle=dropdown]",
    f = function(b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  f.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = c(e),
        g = f.hasClass("open");
      if (b(), !g) {
        if ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
        f.toggleClass("open").trigger("shown.bs.dropdown")
      }
      return e.focus(), !1
    }
  }, f.prototype.keydown = function(b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);
      if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var f = c(d),
          g = f.hasClass("open");
        if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
        var h = a("[role=menu] li:not(.divider):visible a", f);
        if (h.length) {
          var i = h.index(h.filter(":focus"));
          38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
        }
      }
    }
  };
  var g = a.fn.dropdown;
  a.fn.dropdown = function(b) {
    return this.each(function() {
      var c = a(this),
        d = c.data("dropdown");
      d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
    })
  }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = g, this
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(b, c) {
    this.options = c, this.$element = a(b).on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
  };
  b.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, b.prototype.toggle = function(a) {
    return this[this.isShown ? "hide" : "show"](a)
  }, b.prototype.show = function(b) {
    var c = this,
      d = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
      var d = a.support.transition && c.$element.hasClass("fade");
      c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
      var e = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      d ? c.$element.one(a.support.transition.end, function() {
        c.$element.focus().trigger(e)
      }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
    }))
  }, b.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, b.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
    }, this))
  }, b.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }, b.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
    })
  }, b.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, b.prototype.backdrop = function(b) {
    var c = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var d = a.support.transition && c;
      if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
          a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
        }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
  };
  var c = a.fn.modal;
  a.fn.modal = function(c, d) {
    return this.each(function() {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
      f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
    })
  }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
    return a.fn.modal = c, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
    var c = a(this),
      d = c.attr("href"),
      e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
      f = e.data("modal") ? "toggle" : a.extend({
        remote: !/#/.test(d) && d
      }, e.data(), c.data());
    b.preventDefault(), e.modal(f, this).one("hide", function() {
      c.is(":visible") && c.focus()
    })
  }), a(document).on("shown.bs.modal", ".modal", function() {
    a(document.body).addClass("modal-open")
  }).on("hidden.bs.modal", ".modal", function() {
    a(document.body).removeClass("modal-open")
  })
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
  };
  b.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  }, b.prototype.init = function(b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focus",
          i = "hover" == g ? "mouseleave" : "blur";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, b.prototype.getDefaults = function() {
    return b.DEFAULTS
  }, b.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, b.prototype.getDelegateOptions = function() {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, b.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(c.timeout), c.options.delay && c.options.delay.show ? (c.hoverState = "in", c.timeout = setTimeout(function() {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show), void 0) : c.show()
  }, b.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(c.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", c.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide), void 0) : c.hide()
  }, b.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(b), b.isDefaultPrevented()) return;
      var c = this.tip();
      this.setContent(), this.options.animation && c.addClass("fade");
      var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
        e = /\s?auto?\s?/i,
        f = e.test(d);
      f && (d = d.replace(e, "") || "top"), c.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
      var g = this.getPosition(),
        h = c[0].offsetWidth,
        i = c[0].offsetHeight;
      if (f) {
        var j = this.$element.parent(),
          k = d,
          l = document.documentElement.scrollTop || document.body.scrollTop,
          m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
          n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
          o = "body" == this.options.container ? 0 : j.offset().left;
        d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
      }
      var p = this.getCalculatedOffset(d, g, h, i);
      this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
    }
  }, b.prototype.applyPlacement = function(a, b) {
    var c, d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
      var k = 0;
      a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
    } else this.replaceArrow(j - f, j, "top");
    c && d.offset(a)
  }, b.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
  }, b.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, b.prototype.hide = function() {
    function b() {
      c.detach()
    }
    var c = this.tip(),
      d = a.Event("hide.bs." + this.type);
    return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? c.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
  }, b.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, b.prototype.hasContent = function() {
    return this.getTitle()
  }, b.prototype.getPosition = function() {
    var b = this.$element[0];
    return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
      width: b.offsetWidth,
      height: b.offsetHeight
    }, this.$element.offset())
  }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, b.prototype.getTitle = function() {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, b.prototype.tip = function() {
    return this.$tip = this.$tip || a(this.options.template)
  }, b.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, b.prototype.validate = function() {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  }, b.prototype.enable = function() {
    this.enabled = !0
  }, b.prototype.disable = function() {
    this.enabled = !1
  }, b.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, b.prototype.toggle = function(b) {
    var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, b.prototype.destroy = function() {
    this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  };
  var c = a.fn.tooltip;
  a.fn.tooltip = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof c && c;
      e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = c, this
  }
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
    return b.DEFAULTS
  }, b.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, b.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, b.prototype.getContent = function() {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, b.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }, b.prototype.tip = function() {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip
  };
  var c = a.fn.popover;
  a.fn.popover = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof c && c;
      e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
    return a.fn.popover = c, this
  }
}(window.jQuery), + function(a) {
  "use strict";

  function b(c, d) {
    var e, f = a.proxy(this.process, this);
    this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
  }
  b.DEFAULTS = {
    offset: 10
  }, b.prototype.refresh = function() {
    var b = this.$element[0] == window ? "offset" : "position";
    this.offsets = a([]), this.targets = a([]);
    var c = this;
    this.$body.find(this.selector).map(function() {
      var d = a(this),
        e = d.data("target") || d.attr("href"),
        f = /^#\w/.test(e) && a(e);
      return f && f.length && [
        [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
      ] || null
    }).sort(function(a, b) {
      return a[0] - b[0]
    }).each(function() {
      c.offsets.push(this[0]), c.targets.push(this[1])
    })
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
      d = c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
  };
  var c = a.fn.scrollspy;
  a.fn.scrollspy = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = c, this
  }, a(window).on("load", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      b.scrollspy(b.data())
    })
  })
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(b) {
    this.element = a(b)
  };
  b.prototype.show = function() {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.attr("data-target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a")[0],
        f = a.Event("show.bs.tab", {
          relatedTarget: e
        });
      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
          b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e
          })
        })
      }
    }
  }, b.prototype.activate = function(b, c, d) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
    }
    var f = c.find("> .active"),
      g = d && a.support.transition && f.hasClass("fade");
    g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
  };
  var c = a.fn.tab;
  a.fn.tab = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
    })
  }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
    return a.fn.tab = c, this
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
    b.preventDefault(), a(this).tab("show")
  })
}(window.jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
  };
  b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
    offset: 0
  }, b.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, b.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var c = a(document).height(),
        d = this.$window.scrollTop(),
        e = this.$element.offset(),
        f = this.options.offset,
        g = f.top,
        h = f.bottom;
      "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
      var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
      this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
        top: document.body.offsetHeight - h - this.$element.height()
      }))
    }
  };
  var c = a.fn.affix;
  a.fn.affix = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof c && c;
      e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
    return a.fn.affix = c, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var b = a(this),
        c = b.data();
      c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
    })
  })
}(window.jQuery);
/*
 * TotalStorage
 *
 * Copyright (c) 2012 Jared Novack & Upstatement (upstatement.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Total Storage is the conceptual the love child of jStorage by Andris Reinman,
 * and Cookie by Klaus Hartl -- though this is not connected to either project.
 *
 * @name $.totalStorage
 * @cat Plugins/Cookie
 * @author Jared Novack/jared@upstatement.com
 * @version 1.1.2
 * @url http://upstatement.com/blog/2012/01/jquery-local-storage-done-right-and-easy/
 */
(function($) {
  var ls = window.localStorage;
  var supported;
  if (typeof ls == 'undefined' || typeof window.JSON == 'undefined') {
    supported = false;
  } else {
    supported = true;
  }
  $.totalStorage = function(key, value, options) {
    return $.totalStorage.impl.init(key, value);
  }
  $.totalStorage.setItem = function(key, value) {
    return $.totalStorage.impl.setItem(key, value);
  }
  $.totalStorage.getItem = function(key) {
    return $.totalStorage.impl.getItem(key);
  }
  $.totalStorage.getAll = function() {
    return $.totalStorage.impl.getAll();
  }
  $.totalStorage.deleteItem = function(key) {
    return $.totalStorage.impl.deleteItem(key);
  }
  $.totalStorage.impl = {
    init: function(key, value) {
      if (typeof value != 'undefined') {
        return this.setItem(key, value);
      } else {
        return this.getItem(key);
      }
    },
    setItem: function(key, value) {
      if (!supported) {
        try {
          $.cookie(key, value);
          return value;
        } catch (e) {
          console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie');
        }
      }
      var saver = JSON.stringify(value);
      ls.setItem(key, saver);
      return this.parseResult(saver);
    },
    getItem: function(key) {
      if (!supported) {
        try {
          return this.parseResult($.cookie(key));
        } catch (e) {
          return null;
        }
      }
      return this.parseResult(ls.getItem(key));
    },
    deleteItem: function(key) {
      if (!supported) {
        try {
          $.cookie(key, null);
          return true;
        } catch (e) {
          return false;
        }
      }
      ls.removeItem(key);
      return true;
    },
    getAll: function() {
      var items = new Array();
      if (!supported) {
        try {
          var pairs = document.cookie.split(";");
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            var key = pair[0];
            items.push({
              key: key,
              value: this.parseResult($.cookie(key))
            });
          }
        } catch (e) {
          return null;
        }
      } else {
        for (var i in ls) {
          if (i.length) {
            items.push({
              key: i,
              value: this.parseResult(ls.getItem(i))
            });
          }
        }
      }
      return items;
    },
    parseResult: function(res) {
      var ret;
      try {
        ret = JSON.parse(res);
        if (ret == 'true') {
          ret = true;
        }
        if (ret == 'false') {
          ret = false;
        }
        if (parseFloat(ret) == ret && typeof ret != "object") {
          ret = parseFloat(ret);
        }
      } catch (e) {}
      return ret;
    }
  }
})(jQuery);;
(function(wind, $, undef) {
  "use strict";

  function attrOrProp($el) {
    var args = Array.prototype.slice.call(arguments, 1);
    if ($el.prop) {
      return $el.prop.apply($el, args);
    }
    return $el.attr.apply($el, args);
  }

  function bindMany($el, options, events) {
    var name, namespaced;
    for (name in events) {
      if (events.hasOwnProperty(name)) {
        namespaced = name.replace(/ |$/g, options.eventNamespace);
        $el.bind(namespaced, events[name]);
      }
    }
  }

  function bindUi($el, $target, options) {
    bindMany($el, options, {
      focus: function() {
        $target.addClass(options.focusClass);
      },
      blur: function() {
        $target.removeClass(options.focusClass);
        $target.removeClass(options.activeClass);
      },
      mouseenter: function() {
        $target.addClass(options.hoverClass);
      },
      mouseleave: function() {
        $target.removeClass(options.hoverClass);
        $target.removeClass(options.activeClass);
      },
      "mousedown touchbegin": function() {
        if (!$el.is(":disabled")) {
          $target.addClass(options.activeClass);
        }
      },
      "mouseup touchend": function() {
        $target.removeClass(options.activeClass);
      }
    });
  }

  function classClearStandard($el, options) {
    $el.removeClass(options.hoverClass + " " + options.focusClass + " " + options.activeClass);
  }

  function classUpdate($el, className, enabled) {
    if (enabled) {
      $el.addClass(className);
    } else {
      $el.removeClass(className);
    }
  }

  function classUpdateChecked($tag, $el, options) {
    var c = "checked",
      isChecked = $el.is(":" + c);
    if ($el.prop) {
      $el.prop(c, isChecked);
    } else {
      if (isChecked) {
        $el.attr(c, c);
      } else {
        $el.removeAttr(c);
      }
    }
    classUpdate($tag, options.checkedClass, isChecked);
  }

  function classUpdateDisabled($tag, $el, options) {
    classUpdate($tag, options.disabledClass, $el.is(":disabled"));
  }

  function divSpanWrap($el, $container, method) {
    switch (method) {
      case "after":
        $el.after($container);
        return $el.next();
      case "before":
        $el.before($container);
        return $el.prev();
      case "wrap":
        $el.wrap($container);
        return $el.parent();
    }
    return null;
  }

  function divSpan($el, options, divSpanConfig) {
    var $div, $span, id;
    if (!divSpanConfig) {
      divSpanConfig = {};
    }
    divSpanConfig = $.extend({
      bind: {},
      divClass: null,
      divWrap: "wrap",
      spanClass: null,
      spanHtml: null,
      spanWrap: "wrap"
    }, divSpanConfig);
    $div = $('<div />');
    $span = $('<span />');
    if (options.autoHide && $el.is(':hidden') && $el.css('display') === 'none') {
      $div.hide();
    }
    if (divSpanConfig.divClass) {
      $div.addClass(divSpanConfig.divClass);
    }
    if (options.wrapperClass) {
      $div.addClass(options.wrapperClass);
    }
    if (divSpanConfig.spanClass) {
      $span.addClass(divSpanConfig.spanClass);
    }
    id = attrOrProp($el, 'id');
    if (options.useID && id) {
      attrOrProp($div, 'id', options.idPrefix + '-' + id);
    }
    if (divSpanConfig.spanHtml) {
      $span.html(divSpanConfig.spanHtml);
    }
    $div = divSpanWrap($el, $div, divSpanConfig.divWrap);
    $span = divSpanWrap($el, $span, divSpanConfig.spanWrap);
    classUpdateDisabled($div, $el, options);
    return {
      div: $div,
      span: $span
    };
  }

  function wrapWithWrapperClass($el, options) {
    var $span;
    if (!options.wrapperClass) {
      return null;
    }
    $span = $('<span />').addClass(options.wrapperClass);
    $span = divSpanWrap($el, $span, "wrap");
    return $span;
  }

  function highContrast() {
    var c, $div, el, rgb;
    rgb = 'rgb(120,2,153)';
    $div = $('<div style="width:0;height:0;color:' + rgb + '">');
    $('body').append($div);
    el = $div.get(0);
    if (wind.getComputedStyle) {
      c = wind.getComputedStyle(el, '').color;
    } else {
      c = (el.currentStyle || el.style || {}).color;
    }
    $div.remove();
    return c.replace(/ /g, '') !== rgb;
  }

  function htmlify(text) {
    if (!text) {
      return "";
    }
    return $('<span />').text(text).html();
  }

  function isMsie() {
    return navigator.cpuClass && !navigator.product;
  }

  function isMsieSevenOrNewer() {
    if (wind.XMLHttpRequest !== undefined) {
      return true;
    }
    return false;
  }

  function isMultiselect($el) {
    var elSize;
    if ($el[0].multiple) {
      return true;
    }
    elSize = attrOrProp($el, "size");
    if (!elSize || elSize <= 1) {
      return false;
    }
    return true;
  }

  function returnFalse() {
    return false;
  }

  function noSelect($elem, options) {
    var none = 'none';
    bindMany($elem, options, {
      'selectstart dragstart mousedown': returnFalse
    });
    $elem.css({
      MozUserSelect: none,
      msUserSelect: none,
      webkitUserSelect: none,
      userSelect: none
    });
  }

  function setFilename($el, $filenameTag, options) {
    var filename = $el.val();
    if (filename === "") {
      filename = options.fileDefaultHtml;
    } else {
      filename = filename.split(/[\/\\]+/);
      filename = filename[(filename.length - 1)];
    }
    $filenameTag.text(filename);
  }

  function swap($elements, newCss, callback) {
    var restore, item;
    restore = [];
    $elements.each(function() {
      var name;
      for (name in newCss) {
        if (Object.prototype.hasOwnProperty.call(newCss, name)) {
          restore.push({
            el: this,
            name: name,
            old: this.style[name]
          });
          this.style[name] = newCss[name];
        }
      }
    });
    callback();
    while (restore.length) {
      item = restore.pop();
      item.el.style[item.name] = item.old;
    }
  }

  function sizingInvisible($el, callback) {
    var targets;
    targets = $el.parents();
    targets.push($el[0]);
    targets = targets.not(':visible');
    swap(targets, {
      visibility: "hidden",
      display: "block",
      position: "absolute"
    }, callback);
  }

  function unwrapUnwrapUnbindFunction($el, options) {
    return function() {
      $el.unwrap().unwrap().unbind(options.eventNamespace);
    };
  }
  var allowStyling = true,
    highContrastTest = false,
    uniformHandlers = [{
      match: function($el) {
        return $el.is("a, button, :submit, :reset, input[type='button']");
      },
      apply: function($el, options) {
        var $div, defaultSpanHtml, ds, getHtml, doingClickEvent;
        defaultSpanHtml = options.submitDefaultHtml;
        if ($el.is(":reset")) {
          defaultSpanHtml = options.resetDefaultHtml;
        }
        if ($el.is("a, button")) {
          getHtml = function() {
            return $el.html() || defaultSpanHtml;
          };
        } else {
          getHtml = function() {
            return htmlify(attrOrProp($el, "value")) || defaultSpanHtml;
          };
        }
        ds = divSpan($el, options, {
          divClass: options.buttonClass,
          spanHtml: getHtml()
        });
        $div = ds.div;
        bindUi($el, $div, options);
        doingClickEvent = false;
        bindMany($div, options, {
          "click touchend": function() {
            var ev, res, target, href;
            if (doingClickEvent) {
              return;
            }
            if ($el.is(':disabled')) {
              return;
            }
            doingClickEvent = true;
            if ($el[0].dispatchEvent) {
              ev = document.createEvent("MouseEvents");
              ev.initEvent("click", true, true);
              res = $el[0].dispatchEvent(ev);
              if ($el.is('a') && res) {
                target = attrOrProp($el, 'target');
                href = attrOrProp($el, 'href');
                if (!target || target === '_self') {
                  document.location.href = href;
                } else {
                  wind.open(href, target);
                }
              }
            } else {
              $el.click();
            }
            doingClickEvent = false;
          }
        });
        noSelect($div, options);
        return {
          remove: function() {
            $div.after($el);
            $div.remove();
            $el.unbind(options.eventNamespace);
            return $el;
          },
          update: function() {
            classClearStandard($div, options);
            classUpdateDisabled($div, $el, options);
            $el.detach();
            ds.span.html(getHtml()).append($el);
          }
        };
      }
    }, {
      match: function($el) {
        return $el.is(":checkbox");
      },
      apply: function($el, options) {
        var ds, $div, $span;
        ds = divSpan($el, options, {
          divClass: options.checkboxClass
        });
        $div = ds.div;
        $span = ds.span;
        bindUi($el, $div, options);
        bindMany($el, options, {
          "click touchend": function() {
            classUpdateChecked($span, $el, options);
          }
        });
        classUpdateChecked($span, $el, options);
        return {
          remove: unwrapUnwrapUnbindFunction($el, options),
          update: function() {
            classClearStandard($div, options);
            $span.removeClass(options.checkedClass);
            classUpdateChecked($span, $el, options);
            classUpdateDisabled($div, $el, options);
          }
        };
      }
    }, {
      match: function($el) {
        return $el.is(":file");
      },
      apply: function($el, options) {
        var ds, $div, $filename, $button;
        ds = divSpan($el, options, {
          divClass: options.fileClass,
          spanClass: options.fileButtonClass,
          spanHtml: options.fileButtonHtml,
          spanWrap: "after"
        });
        $div = ds.div;
        $button = ds.span;
        $filename = $("<span />").html(options.fileDefaultHtml);
        $filename.addClass(options.filenameClass);
        $filename = divSpanWrap($el, $filename, "after");
        if (!attrOrProp($el, "size")) {
          attrOrProp($el, "size", $div.width() / 10);
        }

        function filenameUpdate() {
          setFilename($el, $filename, options);
        }
        bindUi($el, $div, options);
        filenameUpdate();
        if (isMsie()) {
          bindMany($el, options, {
            click: function() {
              $el.trigger("change");
              setTimeout(filenameUpdate, 0);
            }
          });
        } else {
          bindMany($el, options, {
            change: filenameUpdate
          });
        }
        noSelect($filename, options);
        noSelect($button, options);
        return {
          remove: function() {
            $filename.remove();
            $button.remove();
            return $el.unwrap().unbind(options.eventNamespace);
          },
          update: function() {
            classClearStandard($div, options);
            setFilename($el, $filename, options);
            classUpdateDisabled($div, $el, options);
          }
        };
      }
    }, {
      match: function($el) {
        if ($el.is("input")) {
          var t = (" " + attrOrProp($el, "type") + " ").toLowerCase(),
            allowed = " color date datetime datetime-local email month number password search tel text time url week ";
          return allowed.indexOf(t) >= 0;
        }
        return false;
      },
      apply: function($el, options) {
        var elType, $wrapper;
        elType = attrOrProp($el, "type");
        $el.addClass(options.inputClass);
        $wrapper = wrapWithWrapperClass($el, options);
        bindUi($el, $el, options);
        if (options.inputAddTypeAsClass) {
          $el.addClass(elType);
        }
        return {
          remove: function() {
            $el.removeClass(options.inputClass);
            if (options.inputAddTypeAsClass) {
              $el.removeClass(elType);
            }
            if ($wrapper) {
              $el.unwrap();
            }
          },
          update: returnFalse
        };
      }
    }, {
      match: function($el) {
        return $el.is(":radio");
      },
      apply: function($el, options) {
        var ds, $div, $span;
        ds = divSpan($el, options, {
          divClass: options.radioClass
        });
        $div = ds.div;
        $span = ds.span;
        bindUi($el, $div, options);
        bindMany($el, options, {
          "click touchend": function() {
            $.uniform.update($(':radio[name="' + attrOrProp($el, "name") + '"]'));
          }
        });
        classUpdateChecked($span, $el, options);
        return {
          remove: unwrapUnwrapUnbindFunction($el, options),
          update: function() {
            classClearStandard($div, options);
            classUpdateChecked($span, $el, options);
            classUpdateDisabled($div, $el, options);
          }
        };
      }
    }, {
      match: function($el) {
        if ($el.is("select") && !isMultiselect($el)) {
          return true;
        }
        return false;
      },
      apply: function($el, options) {
        var ds, $div, $span, origElemWidth;
        if (options.selectAutoWidth) {
          sizingInvisible($el, function() {
            origElemWidth = $el.width();
          });
        }
        ds = divSpan($el, options, {
          divClass: options.selectClass,
          spanHtml: ($el.find(":selected:first") || $el.find("option:first")).html(),
          spanWrap: "before"
        });
        $div = ds.div;
        $span = ds.span;
        if (options.selectAutoWidth) {
          sizingInvisible($el, function() {
            swap($([$span[0], $div[0]]), {
              display: "block"
            }, function() {
              var spanPad;
              spanPad = $span.outerWidth() - $span.width();
              $div.width(origElemWidth);
              $span.width(origElemWidth - spanPad);
            });
          });
        } else {
          $div.addClass('fixedWidth');
        }
        bindUi($el, $div, options);
        bindMany($el, options, {
          change: function() {
            $span.html($el.find(":selected").html());
            $div.removeClass(options.activeClass);
          },
          "click touchend": function() {
            var selHtml = $el.find(":selected").html();
            if ($span.html() !== selHtml) {
              $el.trigger('change');
            }
          },
          keyup: function() {
            $span.html($el.find(":selected").html());
          }
        });
        noSelect($span, options);
        return {
          remove: function() {
            $span.remove();
            $el.unwrap().unbind(options.eventNamespace);
            return $el;
          },
          update: function() {
            if (options.selectAutoWidth) {
              $.uniform.restore($el);
              $el.uniform(options);
            } else {
              classClearStandard($div, options);
              $span.html($el.find(":selected").html());
              classUpdateDisabled($div, $el, options);
            }
          }
        };
      }
    }, {
      match: function($el) {
        if ($el.is("select") && isMultiselect($el)) {
          return true;
        }
        return false;
      },
      apply: function($el, options) {
        var $wrapper;
        $el.addClass(options.selectMultiClass);
        $wrapper = wrapWithWrapperClass($el, options);
        bindUi($el, $el, options);
        return {
          remove: function() {
            $el.removeClass(options.selectMultiClass);
            if ($wrapper) {
              $el.unwrap();
            }
          },
          update: returnFalse
        };
      }
    }, {
      match: function($el) {
        return $el.is("textarea");
      },
      apply: function($el, options) {
        var $wrapper;
        $el.addClass(options.textareaClass);
        $wrapper = wrapWithWrapperClass($el, options);
        bindUi($el, $el, options);
        return {
          remove: function() {
            $el.removeClass(options.textareaClass);
            if ($wrapper) {
              $el.unwrap();
            }
          },
          update: returnFalse
        };
      }
    }];
  if (isMsie() && !isMsieSevenOrNewer()) {
    allowStyling = false;
  }
  $.uniform = {
    defaults: {
      activeClass: "active",
      autoHide: true,
      buttonClass: "button",
      checkboxClass: "checker",
      checkedClass: "checked",
      disabledClass: "disabled",
      eventNamespace: ".uniform",
      fileButtonClass: "action",
      fileButtonHtml: "Choose File",
      fileClass: "uploader",
      fileDefaultHtml: "No file selected",
      filenameClass: "filename",
      focusClass: "focus",
      hoverClass: "hover",
      idPrefix: "uniform",
      inputAddTypeAsClass: true,
      inputClass: "uniform-input",
      radioClass: "radio",
      resetDefaultHtml: "Reset",
      resetSelector: false,
      selectAutoWidth: true,
      selectClass: "selector",
      selectMultiClass: "uniform-multiselect",
      submitDefaultHtml: "Submit",
      textareaClass: "uniform",
      useID: true,
      wrapperClass: null
    },
    elements: []
  };
  $.fn.uniform = function(options) {
    var el = this;
    options = $.extend({}, $.uniform.defaults, options);
    if (!highContrastTest) {
      highContrastTest = true;
      if (highContrast()) {
        allowStyling = false;
      }
    }
    if (!allowStyling) {
      return this;
    }
    if (options.resetSelector) {
      $(options.resetSelector).mouseup(function() {
        wind.setTimeout(function() {
          $.uniform.update(el);
        }, 10);
      });
    }
    return this.each(function() {
      var $el = $(this),
        i, handler, callbacks;
      if ($el.data("uniformed")) {
        $.uniform.update($el);
        return;
      }
      for (i = 0; i < uniformHandlers.length; i = i + 1) {
        handler = uniformHandlers[i];
        if (handler.match($el, options)) {
          callbacks = handler.apply($el, options);
          $el.data("uniformed", callbacks);
          $.uniform.elements.push($el.get(0));
          return;
        }
      }
    });
  };
  $.uniform.restore = $.fn.uniform.restore = function(elem) {
    if (elem === undef) {
      elem = $.uniform.elements;
    }
    $(elem).each(function() {
      var $el = $(this),
        index, elementData;
      elementData = $el.data("uniformed");
      if (!elementData) {
        return;
      }
      elementData.remove();
      index = $.inArray(this, $.uniform.elements);
      if (index >= 0) {
        $.uniform.elements.splice(index, 1);
      }
      $el.removeData("uniformed");
    });
  };
  $.uniform.update = $.fn.uniform.update = function(elem) {
    if (elem === undef) {
      elem = $.uniform.elements;
    }
    $(elem).each(function() {
      var $el = $(this),
        elementData;
      elementData = $el.data("uniformed");
      if (!elementData) {
        return;
      }
      elementData.update($el, elementData.options);
    });
  };
}(this, jQuery));
if (typeof isMobile != 'undefined' && !isMobile) {
  $(window).load(function() {
    $("select.form-control,input[type='checkbox']:not(.comparator), input[type='radio'],input#id_carrier2, input[type='file']").uniform();
  });
  $(window).resize(function() {
    $.uniform.update("select.form-control, input[type='file']");
  });
};; /*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r, G, f, v) {
  var J = f("html"),
    n = f(r),
    p = f(G),
    b = f.fancybox = function() {
      b.open.apply(this, arguments)
    },
    I = navigator.userAgent.match(/msie/i),
    B = null,
    s = G.createTouch !== v,
    t = function(a) {
      return a && a.hasOwnProperty && a instanceof f
    },
    q = function(a) {
      return a && "string" === f.type(a)
    },
    E = function(a) {
      return q(a) && 0 < a.indexOf("%")
    },
    l = function(a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e)
    },
    w = function(a, b) {
      return l(a, b) + "px"
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (I ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function(a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
        var k = {},
          g, h, j, m, l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (q(c) ? c : null);
        h = d.title !== v ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
    },
    cancel: function() {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
    },
    close: function(a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
    },
    play: function(a) {
      var d = function() {
          clearTimeout(b.player.timer)
        },
        e = function() {
          d();
          b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
        },
        c = function() {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd")
        };
      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
          "onCancel.player beforeClose.player": c,
          "onUpdate.player": e,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart")
      } else c()
    },
    next: function(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
    },
    prev: function(a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
    },
    jumpto: function(a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
    },
    reposition: function(a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
    },
    update: function(a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(B), B = null);
      b.isOpen && !B && (B = setTimeout(function() {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
      }, e && !s ? 0 : 300))
    },
    toggle: function(a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
    },
    hideLoading: function() {
      p.unbind(".loading");
      f("#fancybox-loading").remove()
    },
    showLoading: function() {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function(a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }))
    },
    getViewport: function() {
      var a = b.current && b.current.locked || !1,
        d = {
          x: n.scrollLeft(),
          y: n.scrollTop()
        };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
      return d
    },
    unbindEvents: function() {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb")
    },
    bindEvents: function() {
      var a = b.current,
        d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
        var c = e.which || e.keyCode,
          k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
        })
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
          else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault()
        }
      }))
    },
    trigger: function(a, d) {
      var e, c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function(d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
        });
        p.trigger(a)
      }
    },
    isImage: function(a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function(a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function(a) {
      var d = {},
        e, c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
          d.skin.css("padding" + b, w(d.padding[a]))
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content")
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
      }
    },
    _error: function(a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });
      b._afterLoad()
    },
    _loadImage: function() {
      var a = b.imgPreload = new Image;
      a.onload = function() {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad()
      };
      a.onerror = function() {
        this.onload = this.onerror = null;
        b._error("image")
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading()
    },
    _loadAjax: function() {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function(a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
        },
        success: function(d, e) {
          "success" === e && (a.content = d, b._afterLoad())
        }
      }))
    },
    _loadIframe: function() {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function() {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function() {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad()
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad()
    },
    _preloadImages: function() {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f, g;
      for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
    },
    _afterLoad: function() {
      var a = b.coming,
        d = b.current,
        e, c, k, g, h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
        else {
          d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          k = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
              }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
                e += '<param name="' + a + '" value="' + b + '"></param>';
                h += " " + a + '="' + b + '"'
              }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
          }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]()
          } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages()
        }
    },
    _setDimension: function() {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        k = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        j = h.height,
        m = h.minWidth,
        u = h.minHeight,
        n = h.maxWidth,
        p = h.maxHeight,
        s = h.scrolling,
        q = h.scrollOutside ? h.scrollbarWidth : 0,
        x = h.margin,
        y = l(x[1] + x[3]),
        r = l(x[0] + x[2]),
        v, z, t, C, A, F, B, D, H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? (a.w - z) * l(c) / 100 : c;
      A = E(j) ? (a.h - t) * l(j) / 100 : j;
      if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
      if (h.fitToView)
        if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
          for (;
            (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
        else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
      q && ("auto" === s && j < A && c + x + q < z) && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: {
          width: w(a),
          height: w(y)
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
    },
    _getPosition: function(a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3]
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c
    },
    _afterZoomIn: function() {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
        a.preventDefault();
        b.close()
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
    },
    _afterZoomOut: function(a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a)
    }
  });
  b.transitions = {
    getOrigPosition: function() {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        j = a.wPadding,
        m = b.getViewport();
      !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h)
      }
    },
    step: function(a, d) {
      var e, c, f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
    },
    zoomIn: function() {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        k = f.extend({
          opacity: 1
        }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      })
    },
    zoomOut: function() {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1
        };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      })
    },
    changeIn: function() {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      })
    },
    changeOut: function() {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1
        },
        c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function() {
          f(this).trigger("onReset").remove()
        }
      })
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function(a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function(a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function(a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
      });
      this.overlay.css(a.css).show()
    },
    close: function() {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      })
    },
    update: function() {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height())
    },
    onReady: function(a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function(a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function() {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a)
    },
    onUpdate: function() {
      this.fixed || this.update()
    },
    afterClose: function(a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function(a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c)
      }
    }
  };
  f.fn.fancybox = function(a) {
    var d, e = f(this),
      c = this.selector || "",
      k = function(g) {
        var h = f(this).blur(),
          j = d,
          k, l;
        !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
      };
    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this
  };
  p.ready(function() {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = function() {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
        b = a.children(),
        b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b
    });
    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
  })
})(window, document, jQuery);;
$(document).ready(function() {
  $(document).on('click', '.add_to_compare', function(e) {
    e.preventDefault();
    if (typeof addToCompare != 'undefined')
      addToCompare(parseInt($(this).data('id-product')));
  });
  reloadProductComparison();
  compareButtonsStatusRefresh();
  totalCompareButtons();
});

function addToCompare(productId) {
  var totalValueNow = parseInt($('.bt_compare').next('.compare_product_count').val());
  var action, totalVal;
  if ($.inArray(parseInt(productId), comparedProductsIds) === -1)
    action = 'add';
  else
    action = 'remove';
  $.ajax({
    url: baseUri + '?controller=products-comparison&ajax=1&action=' + action + '&id_product=' + productId,
    async: true,
    cache: false,
    success: function(data) {
      if (action === 'add' && comparedProductsIds.length < comparator_max_item) {
        comparedProductsIds.push(parseInt(productId)), compareButtonsStatusRefresh(), totalVal = totalValueNow + 1, $('.bt_compare').next('.compare_product_count').val(totalVal), totalValue(totalVal);
      } else if (action === 'remove') {
        comparedProductsIds.splice($.inArray(parseInt(productId), comparedProductsIds), 1), compareButtonsStatusRefresh(), totalVal = totalValueNow - 1, $('.bt_compare').next('.compare_product_count').val(totalVal), totalValue(totalVal);
      } else {
        if (!!$.prototype.fancybox)
          $.fancybox.open([{
            type: 'inline',
            autoScale: true,
            minHeight: 30,
            content: '<p class="fancybox-error">' + max_item + '</p>'
          }], {
            padding: 0
          });
        else
          alert(max_item);
      }
      totalCompareButtons();
    },
    error: function() {}
  });
}

function reloadProductComparison() {
  $(document).on('click', 'a.cmp_remove', function(e) {
    e.preventDefault();
    var idProduct = parseInt($(this).data('id-product'));
    $.ajax({
      url: baseUri + '?controller=products-comparison&ajax=1&action=remove&id_product=' + idProduct,
      async: false,
      cache: false
    });
    $('td.product-' + idProduct).fadeOut(600);
    var compare_product_list = get('compare_product_list');
    var bak = compare_product_list;
    var new_compare_product_list = [];
    compare_product_list = decodeURIComponent(compare_product_list).split('|');
    for (var i in compare_product_list)
      if (parseInt(compare_product_list[i]) != idProduct)
        new_compare_product_list.push(compare_product_list[i]);
    if (new_compare_product_list.length)
      window.location.search = window.location.search.replace(bak, new_compare_product_list.join(encodeURIComponent('|')));
  });
};

function compareButtonsStatusRefresh() {
  $('.add_to_compare').each(function() {
    if ($.inArray(parseInt($(this).data('id-product')), comparedProductsIds) !== -1)
      $(this).addClass('checked');
    else
      $(this).removeClass('checked');
  });
}

function totalCompareButtons() {
  var totalProductsToCompare = parseInt($('.bt_compare .total-compare-val').html());
  if (typeof totalProductsToCompare !== "number" || totalProductsToCompare === 0)
    $('.bt_compare').attr("disabled", true);
  else
    $('.bt_compare').attr("disabled", false);
}

function totalValue(value) {
  $('.bt_compare').find('.total-compare-val').html(value);
}

function get(name) {
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if (results == null)
    return "";
  else
    return results[1];
};;
(function(a) {
  var b = a.serialScroll = function(c) {
    return a(window).serialScroll(c)
  };
  b.defaults = {
    duration: 1e3,
    axis: "x",
    event: "click",
    start: 0,
    step: 1,
    lock: !0,
    cycle: !0,
    constant: !0
  };
  a.fn.serialScroll = function(c) {
    return this.each(function() {
      var t = a.extend({}, b.defaults, c),
        s = t.event,
        i = t.step,
        r = t.lazy,
        e = t.target ? this : document,
        u = a(t.target || this, e),
        p = u[0],
        m = t.items,
        h = t.start,
        g = t.interval,
        k = t.navigation,
        l;
      if (!r) {
        m = d()
      }
      if (t.force) {
        f({}, h)
      }
      a(t.prev || [], e).bind(s, -i, q);
      a(t.next || [], e).bind(s, i, q);
      if (!p.ssbound) {
        u.bind("prev.serialScroll", -i, q).bind("next.serialScroll", i, q).bind("goto.serialScroll", f)
      }
      if (g) {
        u.bind("start.serialScroll", function(v) {
          if (!g) {
            o();
            g = !0;
            n()
          }
        }).bind("stop.serialScroll", function() {
          o();
          g = !1
        })
      }
      u.bind("notify.serialScroll", function(x, w) {
        var v = j(w);
        if (v > -1) {
          h = v
        }
      });
      p.ssbound = !0;
      if (t.jump) {
        (r ? u : d()).bind(s, function(v) {
          f(v, j(v.target))
        })
      }
      if (k) {
        k = a(k, e).bind(s, function(v) {
          v.data = Math.round(d().length / k.length) * k.index(this);
          f(v, this)
        })
      }

      function q(v) {
        v.data += h;
        f(v, this)
      }

      function f(B, z) {
        if (!isNaN(z)) {
          B.data = z;
          z = p
        }
        var C = B.data,
          v, D = B.type,
          A = t.exclude ? d().slice(0, -t.exclude) : d(),
          y = A.length,
          w = A[C],
          x = t.duration;
        if (D) {
          B.preventDefault()
        }
        if (g) {
          o();
          l = setTimeout(n, t.interval)
        }
        if (!w) {
          v = C < 0 ? 0 : y - 1;
          if (h != v) {
            C = v
          } else {
            if (!t.cycle) {
              return
            } else {
              C = y - v - 1
            }
          }
          w = A[C]
        }
        if (!w || t.lock && u.is(":animated") || D && t.onBefore && t.onBefore(B, w, u, d(), C) === !1) {
          return
        }
        if (t.stop) {
          u.queue("fx", []).stop()
        }
        if (t.constant) {
          x = Math.abs(x / i * (h - C))
        }
        u.scrollTo(w, x, t).trigger("notify.serialScroll", [C])
      }

      function n() {
        u.trigger("next.serialScroll")
      }

      function o() {
        clearTimeout(l)
      }

      function d() {
        return a(m, p)
      }

      function j(w) {
        if (!isNaN(w)) {
          return w
        }
        var x = d(),
          v;
        while ((v = x.index(w)) == -1 && w != p) {
          w = w.parentNode
        }
        return v
      }
    })
  }
})(jQuery);;
! function(t) {
  var e = {},
    s = {
      mode: "horizontal",
      slideSelector: "",
      infiniteLoop: !0,
      hideControlOnEnd: !1,
      speed: 500,
      easing: null,
      slideMargin: 0,
      startSlide: 0,
      randomStart: !1,
      captions: !1,
      ticker: !1,
      tickerHover: !1,
      adaptiveHeight: !1,
      adaptiveHeightSpeed: 500,
      video: !1,
      useCSS: !0,
      preloadImages: "visible",
      responsive: !0,
      slideZIndex: 50,
      touchEnabled: !0,
      swipeThreshold: 50,
      oneToOneTouch: !0,
      preventDefaultSwipeX: !0,
      preventDefaultSwipeY: !1,
      pager: !0,
      pagerType: "full",
      pagerShortSeparator: " / ",
      pagerSelector: null,
      buildPager: null,
      pagerCustom: null,
      controls: !0,
      nextText: "Next",
      prevText: "Prev",
      nextSelector: null,
      prevSelector: null,
      autoControls: !1,
      startText: "Start",
      stopText: "Stop",
      autoControlsCombine: !1,
      autoControlsSelector: null,
      auto: !1,
      pause: 4e3,
      autoStart: !0,
      autoDirection: "next",
      autoHover: !1,
      autoDelay: 0,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 0,
      slideWidth: 0,
      onSliderLoad: function() {},
      onSlideBefore: function() {},
      onSlideAfter: function() {},
      onSlideNext: function() {},
      onSlidePrev: function() {},
      onSliderResize: function() {}
    };
  t.fn.bxSlider = function(n) {
    if (0 == this.length) return this;
    if (this.length > 1) return this.each(function() {
      t(this).bxSlider(n)
    }), this;
    var o = {},
      r = this;
    e.el = this;
    var a = t(window).width(),
      l = t(window).height(),
      d = function() {
        o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
          index: o.settings.startSlide
        }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
          var t = document.createElement("div"),
            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          for (var i in e)
            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
          return !1
        }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
          t(this).data("origStyle", t(this).attr("style"))
        }), c()
      },
      c = function() {
        r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
          width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
          position: "relative"
        }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }), o.viewport.parent().css({
          maxWidth: p()
        }), o.settings.pager || o.viewport.parent().css({
          margin: "0 auto 0px"
        }), o.children.css({
          "float": "horizontal" == o.settings.mode ? "left" : "none",
          listStyle: "none",
          position: "relative"
        }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
          position: "absolute",
          zIndex: 0,
          display: "none"
        }), o.children.eq(o.settings.startSlide).css({
          zIndex: o.settings.slideZIndex,
          display: "block"
        })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
        var e = o.children.eq(o.settings.startSlide);
        "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
      },
      g = function(e, i) {
        var s = e.find("img, iframe").length;
        if (0 == s) return i(), void 0;
        var n = 0;
        e.find("img, iframe").each(function() {
          t(this).one("load", function() {
            ++n == s && i()
          }).each(function() {
            this.complete && t(this).load()
          })
        })
      },
      h = function() {
        if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
          var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
            i = o.children.slice(0, e).clone().addClass("bx-clone"),
            s = o.children.slice(-e).clone().addClass("bx-clone");
          r.append(i).prepend(s)
        }
        o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
      },
      v = function() {
        var e = 0,
          s = t();
        if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
          if (o.carousel) {
            var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
            for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
          } else s = o.children.eq(o.active.index);
        else s = o.children;
        return "vertical" == o.settings.mode ? (s.each(function() {
          e += t(this).outerHeight()
        }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
          return t(this).outerHeight(!1)
        }).get()), e
      },
      p = function() {
        var t = "100%";
        return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
      },
      u = function() {
        var t = o.settings.slideWidth,
          e = o.viewport.width();
        return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
      },
      f = function() {
        var t = 1;
        if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
          if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
          else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
        else {
          var e = o.children.first().width();
          t = Math.floor(o.viewport.width() / e)
        } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
        return t
      },
      x = function() {
        var t = 0;
        if (o.settings.moveSlides > 0)
          if (o.settings.infiniteLoop) t = o.children.length / m();
          else
            for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
        else t = Math.ceil(o.children.length / f());
        return t
      },
      m = function() {
        return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
      },
      S = function() {
        if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
          if ("horizontal" == o.settings.mode) {
            var t = o.children.last(),
              e = t.position();
            b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
          } else if ("vertical" == o.settings.mode) {
            var i = o.children.length - o.settings.minSlides,
              e = o.children.eq(i).position();
            b(-e.top, "reset", 0)
          }
        } else {
          var e = o.children.eq(o.active.index * m()).position();
          o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
        }
      },
      b = function(t, e, i, s) {
        if (o.usingCSS) {
          var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
          r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
          })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
          }))
        } else {
          var a = {};
          a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
            D()
          }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
            b(s.resetValue, "reset", 0), N()
          })
        }
      },
      w = function() {
        for (var e = "", i = x(), s = 0; i > s; s++) {
          var n = "";
          o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
        }
        o.pagerEl.html(e)
      },
      T = function() {
        o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
      },
      C = function() {
        o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
      },
      E = function() {
        o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
      },
      P = function() {
        o.children.each(function() {
          var e = t(this).find("img:first").attr("title");
          void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
        })
      },
      y = function(t) {
        o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
      },
      z = function(t) {
        o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
      },
      k = function(t) {
        r.startAuto(), t.preventDefault()
      },
      M = function(t) {
        r.stopAuto(), t.preventDefault()
      },
      I = function(e) {
        o.settings.auto && r.stopAuto();
        var i = t(e.currentTarget),
          s = parseInt(i.attr("data-slide-index"));
        s != o.active.index && r.goToSlide(s), e.preventDefault()
      },
      q = function(e) {
        var i = o.children.length;
        return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
          t(s).find("a").eq(e).addClass("active")
        }), void 0)
      },
      D = function() {
        if (o.settings.infiniteLoop) {
          var t = "";
          0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
        }
        o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
      },
      A = function(t) {
        o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
      },
      W = function() {
        1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
      },
      H = function() {
        o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
          o.interval && (r.stopAuto(!0), o.autoPaused = !0)
        }, function() {
          o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
        })
      },
      L = function() {
        var e = 0;
        if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
        else {
          r.prepend(o.children.clone().addClass("bx-clone"));
          var i = o.children.first().position();
          e = "horizontal" == o.settings.mode ? -i.left : -i.top
        }
        b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
          r.stop()
        }, function() {
          var e = 0;
          o.children.each(function() {
            e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
          });
          var i = o.settings.speed / e,
            s = "horizontal" == o.settings.mode ? "left" : "top",
            n = i * (e - Math.abs(parseInt(r.css(s))));
          N(n)
        }), N()
      },
      N = function(t) {
        speed = t ? t : o.settings.speed;
        var e = {
            left: 0,
            top: 0
          },
          i = {
            left: 0,
            top: 0
          };
        "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
        var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
          n = "horizontal" == o.settings.mode ? -i.left : -i.top,
          a = {
            resetValue: n
          };
        b(s, "ticker", speed, a)
      },
      O = function() {
        o.touch = {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        }, o.viewport.bind("touchstart", X)
      },
      X = function(t) {
        if (o.working) t.preventDefault();
        else {
          o.touch.originalPos = r.position();
          var e = t.originalEvent;
          o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
        }
      },
      Y = function(t) {
        var e = t.originalEvent,
          i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
          s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
        if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
          var n = 0;
          if ("horizontal" == o.settings.mode) {
            var r = e.changedTouches[0].pageX - o.touch.start.x;
            n = o.touch.originalPos.left + r
          } else {
            var r = e.changedTouches[0].pageY - o.touch.start.y;
            n = o.touch.originalPos.top + r
          }
          b(n, "reset", 0)
        }
      },
      V = function(t) {
        o.viewport.unbind("touchmove", Y);
        var e = t.originalEvent,
          i = 0;
        if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
          var s = Math.abs(o.touch.start.x - o.touch.end.x);
          s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
        } else {
          var s = 0;
          "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
        }
        o.viewport.unbind("touchend", V)
      },
      Z = function() {
        var e = t(window).width(),
          i = t(window).height();
        (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
      };
    return r.goToSlide = function(e, i) {
      if (!o.working && o.active.index != e)
        if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
          height: v()
        }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
          zIndex: 0
        }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
          t(this).css("zIndex", o.settings.slideZIndex), D()
        });
        else {
          o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
            height: v()
          }, o.settings.adaptiveHeightSpeed);
          var s = 0,
            n = {
              left: 0,
              top: 0
            };
          if (!o.settings.infiniteLoop && o.carousel && o.active.last)
            if ("horizontal" == o.settings.mode) {
              var a = o.children.eq(o.children.length - 1);
              n = a.position(), s = o.viewport.width() - a.outerWidth()
            } else {
              var l = o.children.length - o.settings.minSlides;
              n = o.children.eq(l).position()
            } else if (o.carousel && o.active.last && "prev" == i) {
            var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
              a = r.children(".bx-clone").eq(d);
            n = a.position()
          } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
          else if (e >= 0) {
            var c = e * m();
            n = o.children.eq(c).position()
          }
          if ("undefined" != typeof n) {
            var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
            b(g, "slide", o.settings.speed)
          }
        }
    }, r.goToNextSlide = function() {
      if (o.settings.infiniteLoop || !o.active.last) {
        var t = parseInt(o.active.index) + 1;
        r.goToSlide(t, "next")
      }
    }, r.goToPrevSlide = function() {
      if (o.settings.infiniteLoop || 0 != o.active.index) {
        var t = parseInt(o.active.index) - 1;
        r.goToSlide(t, "prev")
      }
    }, r.startAuto = function(t) {
      o.interval || (o.interval = setInterval(function() {
        "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
      }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
    }, r.stopAuto = function(t) {
      o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
    }, r.getCurrentSlide = function() {
      return o.active.index
    }, r.getCurrentSlideElement = function() {
      return o.children.eq(o.active.index)
    }, r.getSlideCount = function() {
      return o.children.length
    }, r.redrawSlider = function() {
      o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
    }, r.destroySlider = function() {
      o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
        void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
      }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
    }, r.reloadSlider = function(t) {
      void 0 != t && (n = t), r.destroySlider(), d()
    }, d(), this
  }
}(jQuery);;
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  }, Modernizr.addTest("mediaqueries", Modernizr.mq("only all"));
"function" !== typeof Object.create && (Object.create = function(f) {
  function g() {}
  g.prototype = f;
  return new g
});
(function(f, g, k) {
  var l = {
    init: function(a, b) {
      this.$elem = f(b);
      this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
      this.userOptions = a;
      this.loadContent()
    },
    loadContent: function() {
      function a(a) {
        var c, e = "";
        if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
        else {
          for (c in a.owl) a.owl.hasOwnProperty(c) && (e += a.owl[c].item);
          b.$elem.html(e)
        }
        b.logIn()
      }
      var b = this,
        e;
      "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
    },
    logIn: function() {
      this.$elem.data({
        "owl-originalStyles": this.$elem.attr("style"),
        "owl-originalClasses": this.$elem.attr("class")
      });
      this.$elem.css({
        opacity: 0
      });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars()
    },
    setVars: function() {
      if (0 === this.$elem.children().length) return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup()
    },
    onStartup: function() {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay && (this.options.autoPlay = 5E3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
    },
    eachMoveUpdate: function() {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
    },
    updateVars: function() {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
    },
    reload: function() {
      var a = this;
      g.setTimeout(function() {
        a.updateVars()
      }, 0)
    },
    watchVisibility: function() {
      var a = this;
      if (!1 === a.$elem.is(":visible")) a.$elem.css({
        opacity: 0
      }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
      else return !1;
      a.checkVisible = g.setInterval(function() {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
          opacity: 1
        }, 200), g.clearInterval(a.checkVisible))
      }, 500)
    },
    wrapItems: function() {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block")
    },
    baseClass: function() {
      var a = this.$elem.hasClass(this.options.baseClass),
        b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme)
    },
    updateItems: function() {
      var a, b;
      if (!1 === this.options.responsive) return !1;
      if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)
        for (this.options.itemsCustom.sort(function(a, b) {
            return a[0] - b[0]
          }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
    },
    response: function() {
      var a = this,
        b, e;
      if (!0 !== a.options.responsive) return !1;
      e = f(g).width();
      a.resizer = function() {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
          e = f(g).width();
          a.updateVars()
        }, a.options.responsiveRefreshRate))
      };
      f(g).resize(a.resizer)
    },
    updatePosition: function() {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp()
    },
    appendItemsSizes: function() {
      var a = this,
        b = 0,
        e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function(d) {
        var c = f(this);
        c.css({
          width: a.itemWidth
        }).data("owl-item", Number(d));
        if (0 === d % a.options.items || d === e) d > e || (b += 1);
        c.data("owl-roundPages", b)
      })
    },
    appendWrapperSizes: function() {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0
      });
      this.appendItemsSizes()
    },
    calculateAll: function() {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max()
    },
    calculateWidth: function() {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items)
    },
    max: function() {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
      return a
    },
    min: function() {
      return 0
    },
    loops: function() {
      var a = 0,
        b = 0,
        e, d;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (d = f(this.$owlItems[e]), d = d.data("owl-roundPages"), d !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = d))
    },
    buildControls: function() {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons()
    },
    buildButtons: function() {
      var a = this,
        b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev = f("<div/>", {
        "class": "owl-prev",
        html: a.options.navigationText[0] || ""
      });
      a.buttonNext = f("<div/>", {
        "class": "owl-next",
        html: a.options.navigationText[1] || ""
      });
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
        a.preventDefault()
      });
      b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
        b.preventDefault();
        f(this).hasClass("owl-next") ? a.next() : a.prev()
      })
    },
    buildPagination: function() {
      var a = this;
      a.paginationWrapper = f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
        b.preventDefault();
        Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
      })
    },
    updatePagination: function() {
      var a, b, e, d, c, g;
      if (!1 === this.options.pagination) return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - this.itemsAmount % this.options.items;
      for (d = 0; d < this.itemsAmount; d += 1) 0 === d % this.options.items && (a += 1, b === d && (e = this.itemsAmount - this.options.items), c = f("<div/>", {
        "class": "owl-page"
      }), g = f("<span></span>", {
        text: !0 === this.options.paginationNumbers ? a : "",
        "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
      }), c.append(g), c.data("owl-page", b === d ? e : d), c.data("owl-roundPages", a), this.paginationWrapper.append(c));
      this.checkPagination()
    },
    checkPagination: function() {
      var a = this;
      if (!1 === a.options.pagination) return !1;
      a.paginationWrapper.find(".owl-page").each(function() {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
      })
    },
    checkNavigation: function() {
      if (!1 === this.options.navigation) return !1;
      !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
    },
    updateControls: function() {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
    },
    destroyControls: function() {
      this.owlControls && this.owlControls.remove()
    },
    next: function(a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
        if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
        else return this.currentItem = this.maximumItem, !1;
      this.goTo(this.currentItem, a)
    },
    prev: function(a) {
      if (this.isTransition) return !1;
      this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
      if (0 > this.currentItem)
        if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
        else return this.currentItem = 0, !1;
      this.goTo(this.currentItem, a)
    },
    goTo: function(a, b, e) {
      var d = this;
      if (d.isTransition) return !1;
      "function" === typeof d.options.beforeMove && d.options.beforeMove.apply(this, [d.$elem]);
      a >= d.maximumItem ? a = d.maximumItem : 0 >= a && (a = 0);
      d.currentItem = d.owl.currentItem = a;
      if (!1 !== d.options.transitionStyle && "drag" !== e && 1 === d.options.items && !0 === d.browser.support3d) return d.swapSpeed(0), !0 === d.browser.support3d ? d.transition3d(d.positionsInArray[a]) : d.css2slide(d.positionsInArray[a], 1), d.afterGo(), d.singleItemTransition(), !1;
      a = d.positionsInArray[a];
      !0 === d.browser.support3d ? (d.isCss3Finish = !1, !0 === b ? (d.swapSpeed("paginationSpeed"), g.setTimeout(function() {
        d.isCss3Finish = !0
      }, d.options.paginationSpeed)) : "rewind" === b ? (d.swapSpeed(d.options.rewindSpeed), g.setTimeout(function() {
        d.isCss3Finish = !0
      }, d.options.rewindSpeed)) : (d.swapSpeed("slideSpeed"), g.setTimeout(function() {
        d.isCss3Finish = !0
      }, d.options.slideSpeed)), d.transition3d(a)) : !0 === b ? d.css2slide(a, d.options.paginationSpeed) : "rewind" === b ? d.css2slide(a, d.options.rewindSpeed) : d.css2slide(a, d.options.slideSpeed);
      d.afterGo()
    },
    jumpTo: function(a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem = this.owl.currentItem = a;
      this.afterGo()
    },
    afterGo: function() {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
    },
    stop: function() {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval)
    },
    checkAp: function() {
      "stop" !== this.apStatus && this.play()
    },
    play: function() {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay) return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function() {
        a.next(!0)
      }, a.options.autoPlay)
    },
    swapSpeed: function(a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
    },
    addCssSpeed: function(a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease"
      }
    },
    removeTransition: function() {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: ""
      }
    },
    doTranslate: function(a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)"
      }
    },
    transition3d: function(a) {
      this.$owlWrapper.css(this.doTranslate(a))
    },
    css2move: function(a) {
      this.$owlWrapper.css({
        left: a
      })
    },
    css2slide: function(a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate({
        left: a
      }, {
        duration: b || e.options.slideSpeed,
        complete: function() {
          e.isCssFinish = !0
        }
      })
    },
    checkBrowser: function() {
      var a = k.createElement("div");
      a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
      }
    },
    moveEvents: function() {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
    },
    eventTypes: function() {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2]
    },
    disabledEvents: function() {
      this.$elem.on("dragstart.owl", function(a) {
        a.preventDefault()
      });
      this.$elem.on("mousedown.disableTextSelect", function(a) {
        return f(a.target).is("input, textarea, select, option")
      })
    },
    gestures: function() {
      function a(a) {
        if (void 0 !== a.touches) return {
          x: a.touches[0].pageX,
          y: a.touches[0].pageY
        };
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return {
            x: a.pageX,
            y: a.pageY
          };
          if (void 0 === a.pageX) return {
            x: a.clientX,
            y: a.clientY
          }
        }
      }

      function b(a) {
        "on" === a ? (f(k).on(c.ev_types.move, e), f(k).on(c.ev_types.end, d)) : "off" === a && (f(k).off(c.ev_types.move), f(k).off(c.ev_types.end))
      }

      function e(b) {
        b = b.originalEvent || b || g.event;
        c.newPosX = a(b).x - h.offsetX;
        c.newPosY = a(b).y - h.offsetY;
        c.newRelativeX = c.newPosX - h.relativePos;
        "function" === typeof c.options.startDragging && !0 !== h.dragging && 0 !== c.newRelativeX && (h.dragging = !0, c.options.startDragging.apply(c, [c.$elem]));
        (8 < c.newRelativeX || -8 > c.newRelativeX) && !0 === c.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
        (10 < c.newPosY || -10 > c.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
        c.newPosX = Math.max(Math.min(c.newPosX, c.newRelativeX / 5), c.maximumPixels + c.newRelativeX / 5);
        !0 === c.browser.support3d ? c.transition3d(c.newPosX) : c.css2move(c.newPosX)
      }

      function d(a) {
        a = a.originalEvent || a || g.event;
        var d;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== c.browser.isTouch && c.$owlWrapper.removeClass("grabbing");
        c.dragDirection = 0 > c.newRelativeX ? c.owl.dragDirection = "left" : c.owl.dragDirection = "right";
        0 !== c.newRelativeX && (d = c.getNewPosition(), c.goTo(d, !1, "drag"), h.targetElement === a.target && !0 !== c.browser.isTouch && (f(a.target).on("click.disable", function(a) {
          a.stopImmediatePropagation();
          a.stopPropagation();
          a.preventDefault();
          f(a.target).off("click.disable")
        }), a = f._data(a.target, "events").click, d = a.pop(), a.splice(0, 0, d)));
        b("off")
      }
      var c = this,
        h = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null
        };
      c.isCssFinish = !0;
      c.$elem.on(c.ev_types.start, ".owl-wrapper", function(d) {
        d = d.originalEvent || d || g.event;
        var e;
        if (3 === d.which) return !1;
        if (!(c.itemsAmount <= c.options.items)) {
          if (!1 === c.isCssFinish && !c.options.dragBeforeAnimFinish || !1 === c.isCss3Finish && !c.options.dragBeforeAnimFinish) return !1;
          !1 !== c.options.autoPlay && g.clearInterval(c.autoPlayInterval);
          !0 === c.browser.isTouch || c.$owlWrapper.hasClass("grabbing") || c.$owlWrapper.addClass("grabbing");
          c.newPosX = 0;
          c.newRelativeX = 0;
          f(this).css(c.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(d).x - e.left;
          h.offsetY = a(d).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = d.target || d.srcElement
        }
      })
    },
    getNewPosition: function() {
      var a = this.closestItem();
      a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);
      return a
    },
    closestItem: function() {
      var a = this,
        b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
        e = a.newPosX,
        d = null;
      f.each(b, function(c, g) {
        e - a.itemWidth / 20 > b[c + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (d = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(d, a.positionsInArray) : c) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[c + 1] || b[c] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (d = b[c + 1] || b[b.length - 1], a.currentItem = f.inArray(d, a.positionsInArray)) : (d = b[c + 1], a.currentItem = c + 1))
      });
      return a.currentItem
    },
    moveDirection: function() {
      var a;
      0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
      return a
    },
    customEvents: function() {
      var a = this;
      a.$elem.on("owl.next", function() {
        a.next()
      });
      a.$elem.on("owl.prev", function() {
        a.prev()
      });
      a.$elem.on("owl.play", function(b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play"
      });
      a.$elem.on("owl.stop", function() {
        a.stop();
        a.hoverStatus = "stop"
      });
      a.$elem.on("owl.goTo", function(b, e) {
        a.goTo(e)
      });
      a.$elem.on("owl.jumpTo", function(b, e) {
        a.jumpTo(e)
      })
    },
    stopOnHover: function() {
      var a = this;
      !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
        a.stop()
      }), a.$elem.on("mouseout", function() {
        "stop" !== a.hoverStatus && a.play()
      }))
    },
    lazyLoad: function() {
      var a = this,
        b, e, d, c, g;
      if (!1 === a.options.lazyLoad) return !1;
      for (b = 0; b < a.itemsAmount; b += 1) e = f(a.$owlItems[b]), "loaded" !== e.data("owl-loaded") && (d = e.data("owl-item"), c = e.find(".lazyOwl"), "string" !== typeof c.data("src") ? e.data("owl-loaded", "loaded") : (void 0 === e.data("owl-loaded") && (c.hide(), e.addClass("loading").data("owl-loaded", "checked")), (g = !0 === a.options.lazyFollow ? d >= a.currentItem : !0) && d < a.currentItem + a.options.items && c.length && c.each(function() {
        a.lazyPreload(e, f(this))
      })))
    },
    lazyPreload: function(a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === c.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof c.options.afterLazyLoad && c.options.afterLazyLoad.apply(c, [c.$elem])
      }

      function d() {
        f += 1;
        c.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(d, 100) : e()
      }
      var c = this,
        f = 0,
        k;
      "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
      d()
    },
    autoHeight: function() {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
          e.wrapperOuter.addClass("autoHeight")
        }, 0)
      }

      function b() {
        c += 1;
        e.completeImg(d.get(0)) ? a() : 100 >= c ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "")
      }
      var e = this,
        d = f(e.$owlItems[e.currentItem]).find("img"),
        c;
      void 0 !== d.get(0) ? (c = 0, b()) : a()
    },
    completeImg: function(a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
    },
    onVisibleItems: function() {
      var a;
      !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems
    },
    transitionTypes: function(a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in"
    },
    singleItemTransition: function() {
      var a = this,
        b = a.outClass,
        e = a.inClass,
        d = a.$owlItems.eq(a.currentItem),
        c = a.$owlItems.eq(a.prevItem),
        f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
        g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": g + "px",
        "-moz-perspective-origin": g + "px",
        "perspective-origin": g + "px"
      });
      c.css({
        position: "relative",
        left: f + "px"
      }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
        a.endPrev = !0;
        c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(c, b)
      });
      d.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
        a.endCurrent = !0;
        d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(d, e)
      })
    },
    clearTransStyle: function(a, b) {
      a.css({
        position: "",
        left: ""
      }).removeClass(b);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
    },
    owlStatus: function() {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection
      }
    },
    clearEvents: function() {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer)
    },
    unWrap: function() {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr({
        style: this.$elem.data("owl-originalStyles") || "",
        "class": this.$elem.data("owl-originalClasses")
      })
    },
    destroy: function() {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData()
    },
    reinit: function(a) {
      a = f.extend({}, this.userOptions, a);
      this.unWrap();
      this.init(a, this.$elem)
    },
    addItem: function(a, b) {
      var e;
      if (!a) return !1;
      if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
      this.setVars()
    },
    removeItem: function(a) {
      if (0 === this.$elem.children().length) return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars()
    }
  };
  f.fn.owlCarousel = function(a) {
    return this.each(function() {
      if (!0 === f(this).data("owl-init")) return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b)
    })
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1E3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["prev", "next"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1
  }
})(jQuery, window, document);
/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;)
      if (e[n].listener === t) return n;
    return -1
  }

  function n(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  i.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function(e, n) {
    var i, r = this.getListenersAsObject(e),
      o = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
      listener: n,
      once: !1
    });
    return this
  }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    })
  }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
    return this.getListeners(e), this
  }, i.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this
  }, i.removeListener = function(e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function(e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener,
      s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)
      for (i = n.length; i--;) o.call(this, t, n[i]);
    else
      for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, i.removeEvent = function(e) {
    var t, n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];
    else if ("object" === n)
      for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
    else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)
      if (s.hasOwnProperty(r))
        for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, e.noConflict = function() {
    return r.EventEmitter = o, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
  function(e) {
    function t(t) {
      var n = e.event;
      return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
      i = function() {};
    n.addEventListener ? i = function(e, t, n) {
      e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function(e, n, i) {
      e[n + i] = i.handleEvent ? function() {
        var n = t(e);
        i.handleEvent.call(i, n)
      } : function() {
        var n = t(e);
        i.call(e, n)
      }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function(e, t, n) {
      e.detachEvent("on" + t, e[t + n]);
      try {
        delete e[t + n]
      } catch (i) {
        e[t + n] = void 0
      }
    });
    var o = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
  }(this),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
      return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
  }(this, function(e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function r(e) {
      return "[object Array]" === d.call(e)
    }

    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t
    }

    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function c(e) {
      this.img = e
    }

    function f(e) {
      this.src = e, v[e] = this
    }
    var a = e.jQuery,
      u = e.console,
      h = u !== void 0,
      d = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
      this.images = [];
      for (var e = 0, t = this.elements.length; t > e; e++) {
        var n = this.elements[e];
        "IMG" === n.nodeName && this.addImage(n);
        for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
          var s = i[r];
          this.addImage(s)
        }
      }
    }, s.prototype.addImage = function(e) {
      var t = new c(e);
      this.images.push(t)
    }, s.prototype.check = function() {
      function e(e, r) {
        return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
      }
      var t = this,
        n = 0,
        i = this.images.length;
      if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
      for (var r = 0; i > r; r++) {
        var o = this.images[r];
        o.on("confirm", e), o.check()
      }
    }, s.prototype.progress = function(e) {
      this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
      var t = this;
      setTimeout(function() {
        t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
      })
    }, s.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0;
      var t = this;
      setTimeout(function() {
        if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
          var n = t.hasAnyBroken ? "reject" : "resolve";
          t.jqDeferred[n](t)
        }
      })
    }, a && (a.fn.imagesLoaded = function(e, t) {
      var n = new s(this, e, t);
      return n.jqDeferred.promise(a(this))
    }), c.prototype = new t, c.prototype.check = function() {
      var e = v[this.img.src] || new f(this.img.src);
      if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
      if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
      var t = this;
      e.on("confirm", function(e, n) {
        return t.confirm(e.isLoaded, n), !0
      }), e.check()
    }, c.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emit("confirm", this, t)
    };
    var v = {};
    return f.prototype = new t, f.prototype.check = function() {
      if (!this.isChecked) {
        var e = new Image;
        n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
      }
    }, f.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, f.prototype.onload = function(e) {
      this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, f.prototype.onerror = function(e) {
      this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, f.prototype.confirm = function(e, t) {
      this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, f.prototype.unbindProxyEvents = function(e) {
      n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
  });
(function($) {
  var a = {},
    c = "doTimeout",
    d = Array.prototype.slice;
  $[c] = function() {
    return b.apply(window, [0].concat(d.call(arguments)))
  };
  $.fn[c] = function() {
    var f = d.call(arguments),
      e = b.apply(this, [c + f[0]].concat(f));
    return typeof f[0] === "number" || typeof f[1] === "number" ? this : e
  };

  function b(l) {
    var m = this,
      h, k = {},
      g = l ? $.fn : $,
      n = arguments,
      i = 4,
      f = n[1],
      j = n[2],
      p = n[3];
    if (typeof f !== "string") {
      i--;
      f = l = 0;
      j = n[1];
      p = n[2]
    }
    if (l) {
      h = m.eq(0);
      h.data(l, k = h.data(l) || {})
    } else {
      if (f) {
        k = a[f] || (a[f] = {})
      }
    }
    k.id && clearTimeout(k.id);
    delete k.id;

    function e() {
      if (l) {
        h.removeData(l)
      } else {
        if (f) {
          delete a[f]
        }
      }
    }

    function o() {
      k.id = setTimeout(function() {
        k.fn()
      }, j)
    }
    if (p) {
      k.fn = function(q) {
        if (typeof p === "string") {
          p = g[p]
        }
        p.apply(m, d.call(n, i)) === true && !q ? o() : e()
      };
      o()
    } else {
      if (k.fn) {
        j === undefined ? e() : k.fn(j === false);
        return true
      } else {
        e()
      }
    }
  }
})(jQuery);
/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  "use strict";

  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
    throw new Error("Couldn't cast `" + a + "` to a date object.")
  }

  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b)
  }

  function d(a) {
    return function(b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; g > f; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
        }
      return b = b.replace(/%%/, "%")
    }
  }

  function e(a, b) {
    var c = "s",
      d = "";
    return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
  }
  var f = [],
    g = [],
    h = {
      precision: 100,
      elapse: !1
    };
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      w: "weeks",
      d: "daysToWeek",
      D: "totalDays",
      H: "hours",
      M: "minutes",
      S: "seconds"
    },
    j = function(b, c, d) {
      this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
    };
  a.extend(j.prototype, {
    start: function() {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(), this.interval = setInterval(function() {
        a.update.call(a)
      }, this.options.precision)
    },
    stop: function() {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
    },
    toggle: function() {
      this.interval ? this.stop() : this.start()
    },
    pause: function() {
      this.stop()
    },
    resume: function() {
      this.start()
    },
    remove: function() {
      this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
    },
    setFinalDate: function(a) {
      this.finalDate = b(a)
    },
    update: function() {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var b, c = void 0 !== a._data(this.el, "events"),
        d = new Date;
      b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
      }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
    },
    dispatchEvent: function(b) {
      var c = a.Event(b + ".countdown");
      c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
    }
  }), a.fn.countdown = function() {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.each(function() {
      var c = a(this).data("countdown-instance");
      if (void 0 !== c) {
        var d = f[c],
          e = b[0];
        j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
      } else new j(this, b[0], b[1])
    })
  }
});
/*!
 *  FIELD Mobile Menu 1.0
 *  FIELD Mobile Menu Helper Plugin
 *
 *  Copyright 2014, Fieldthemes - fieldthemes@gmail.com
 */
(function(e) {
  function n(n, r) {
    this._cfg = e.extend({}, t, r);
    this.$el = e(n);
    this._nav = this._cfg.navElements;
    this._menu = this._cfg.menuElements;
    this._clickHandler = "click";
    if (Modernizr.touch) {
      this._clickHandler = "touchstart"
    }
    this._isAnyAttachable = true;
    this._menuState = "closed";
    this._animating = false;
    this._init()
  }
  var t = {
    navElements: {},
    menuElements: {},
    navContainer: "#fieldmm-nav",
    navButtonsContainer: "#fieldmm-nav-buttons",
    menuContainer: "#fieldmm-container",
    menuTabsContainer: "#fieldmm-tabs",
    pageContainer: "#outer-wrapper",
    contentContainer: "#wrapper"
  };
  n.prototype = {
    _init: function() {
      var t = this;
      e("html").addClass("fieldmm");
      e(this._cfg.pageContainer).addClass("fieldmm-page");
      e(this._cfg.contentContainer).addClass("fieldmm-content");
      e.each(this._nav, function(n, r) {
        if (t._nav[n]["type"] == "create") {
          var i = e("<span/>", {
            "class": "fieldmm-nav-btn",
            "data-fieldmmtab": n
          });
          e("<span/>", {
            "class": t._nav[n]["class"]
          }).appendTo(i);
          i.appendTo(e(t._cfg.navButtonsContainer))
        } else {
          e("." + t._nav[n]["class"]).clone().addClass("fieldmm-nav-btn").attr("data-fieldmmtab", n).appendTo(e(t._cfg.navButtonsContainer))
        }
        t._createMenuTab(n)
      });
      e("<div />", {
        "class": "fieldmm-overlay"
      }).insertAfter(this._cfg.menuContainer);
      if (Modernizr.mq("only screen and (max-width: 1023px)")) {
        if (t._isAnyAttachable) {
          t._attachElements()
        }
      }
      this._bindElements()
    },
    _bindElements: function() {
      var t = this;
      e("#fieldmm-nav-buttons").on(this._clickHandler, ".fieldmm-nav-btn", function() {
        if (t._animating) {
          return
        }
        if (t._menuState == "open") {
          if (e(this).hasClass("fieldmm-open")) {
            t._hideMenu(this)
          } else {
            t._showTab(this)
          }
        } else {
          t._showMenu(this)
        }
      });
      e(".fieldmm-overlay").on(this._clickHandler, function() {
        if (e("html").hasClass("fieldmm-open")) {
          t._hideMenu()
        }
      });
      e(window).on("fieldResize", function() {
        if (Modernizr.mq("only screen and (max-width: 1023px)")) {
          if (t._isAnyAttachable) {
            t._attachElements()
          }
        } else {
          if (!t._isAnyAttachable) {
            t._detachElements();
            if (t._menuState === "open") {
              t._hideMenu()
            }
          }
        }
      })
    },
    _createMenuTab: function(t) {
      e(this._cfg.menuTabsContainer).append(e("<div/>", {
        "class": "fieldmm-tab " + t
      }))
    },
    _attachElements: function() {
      var t = this._menu;
      e.each(t, function(n, r) {
        var i = r["nav"];
        var s = e(".fieldmm-tab." + i);
        var o = e(t[n]["element"]);
        if (t[n]["beforeAttach"]) {
          t[n]["beforeAttach"].call(o)
        }
        if (typeof t[n]["insertInto"] !== "undefined") {
          var u = t[n]["insertInto"].length - 1;
          var a = e(t[n]["insertInto"][u]);
          var f = o.parent().attr("id");
          o.attr("data-parentid", f).addClass("fieldmm-inserted").appendTo(a).show();
          for (var l = t[n]["insertInto"].length - 2; l >= 0; l--) {
            var c = e(e(t[n]["insertInto"][l]));
            a.appendTo(c);
            a = c
          }
          a.appendTo(s)
        } else {
          var f = o.parent().attr("id");
          o.attr("data-parentid", f).addClass("fieldmm-inserted").appendTo(s).show()
        }
        if (t[n]["afterAttach"]) {
          t[n]["afterAttach"].call(o)
        }
      });
      this._isAnyAttachable = false
    },
    _detachElements: function() {
      var t = this._menu;
      e.each(t, function(n, r) {
        var i = r["nav"];
        if (t[n]["isDetachable"]) {
          var s = e(t[n]["element"]);
          var o = s.attr("data-parentid");
          if (t[n]["beforeDetach"]) {
            t[n]["beforeDetach"].call(s)
          }
          s.removeClass("fieldmm-inserted").removeAttr("data-parentid").appendTo(e("#" + o));
          if (t[n]["afterDetach"]) {
            t[n]["afterDetach"].call(s)
          }
        }
      });
      this._isAnyAttachable = true
    },
    _showMenu: function(t) {
      var n = this;
      e(this._cfg.menuContainer).addClass("fieldmm-open");
      this._showTab(t);
      e("html").addClass("fieldmm-open");
      e(t).addClass("fieldmm-open");
      this._animating = true;
      e(this._cfg.menuContainer).on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
        n._menuState = "open";
        e(n._cfg.contentContainer).on("click.fieldmm touchstart.fieldmm touchmove.fieldmm touchend.fieldmm", function(e) {
          e.preventDefault()
        });
        n._animating = false;
        e(n._cfg.menuContainer).off("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd")
      })
    },
    _hideMenu: function(t) {
      var n = this;
      e("html").removeClass("fieldmm-open");
      e(t).removeClass("fieldmm-open");
      this._animating = true;
      e(this._cfg.menuContainer).on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
        e(n._cfg.contentContainer).off("click.fieldmm touchstart.fieldmm touchmove.fieldmm touchend.fieldmm");
        n._menuState = "closed";
        e(n._cfg.menuContainer).removeClass("fieldmm-open");
        n._animating = false;
        e(n._cfg.menuContainer).off("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd")
      })
    },
    _showTab: function(t) {
      var n = e(t).attr("data-fieldmmtab");
      e(".fieldmm-tab").removeClass("fieldmm-open");
      e(".fieldmm-nav-btn").removeClass("fieldmm-open");
      e(".fieldmm-tab." + n).addClass("fieldmm-open");
      e(t).addClass("fieldmm-open")
    }
  };
  e.fn.fieldMMenu = function(t) {
    if (typeof t === "string") {
      this.each(function() {
        var n = e.data(this, "fieldMMenu");
        if (!n) {
          console.error("cannot call methods on fieldMMenu prior to initialization; " + "attempted to call method '" + t + "'");
          return
        }
        if (!e.isFunction(n[t]) || t.charAt(0) === "_") {
          console.error("no such method '" + t + "' for fieldMMenu instance");
          return
        }
        n[t].apply(n)
      })
    } else {
      this.each(function() {
        if (!e.data(this, "fieldMMenu")) {
          e.data(this, "fieldMMenu", new n(this, t))
        }
      })
    }
    return this
  }
})(jQuery);
(function(e) {
  var t, n;
  t = e.event.special.fieldResize = {
    setup: function() {
      e(this).on("resize", t.handler)
    },
    teardown: function() {
      e(this).off("resize", t.handler)
    },
    handler: function(t) {
      var r = this,
        i = arguments,
        s = function() {
          t.type = "fieldResize";
          e.event.dispatch.apply(r, i)
        };
      if (n) {
        clearTimeout(n)
      }
      n = setTimeout(s, 150)
    }
  }
})(jQuery);
/*!
 * $ Cookie Plugin
 * https://github.com/carhartl/$-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
  $.cookie = function(key, value, options) {
    if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
      options = $.extend({}, options);
      if (value === null || value === undefined) {
        options.expires = -1;
      }
      if (typeof options.expires === 'number') {
        var days = options.expires,
          t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }
      value = String(value);
      return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
    }
    options = value || {};
    var decode = options.raw ? function(s) {
      return s;
    } : decodeURIComponent;
    var pairs = document.cookie.split('; ');
    for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
      if (decode(pair[0]) === key) return decode(pair[1] || '');
    }
    return null;
  };
})(jQuery);
/*
 *  jQuery carouFredSel 6.2.1
 *  Demo's and documentation:
 *  caroufredsel.dev7studios.com
 *
 *  Copyright (c) 2013 Fred Heusschen
 *  www.frebsite.nl
 *
 *  Dual licensed under the MIT and GPL licenses.
 *  http://en.wikipedia.org/wiki/MIT_License
 *  http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function($) {
  function sc_setScroll(e, t, n) {
    if (n.transition == "transition") {
      if (t == "swing") {
        t = "ease"
      }
    }
    return {
      anims: [],
      duration: e,
      orgDuration: e,
      easing: t,
      startTime: getTime()
    }
  }

  function sc_startScroll(e, t) {
    for (var n = 0, r = e.anims.length; n < r; n++) {
      var i = e.anims[n];
      if (!i) {
        continue
      }
      i[0][t.transition](i[1], e.duration, e.easing, i[2])
    }
  }

  function sc_stopScroll(e, t) {
    if (!is_boolean(t)) {
      t = true
    }
    if (is_object(e.pre)) {
      sc_stopScroll(e.pre, t)
    }
    for (var n = 0, r = e.anims.length; n < r; n++) {
      var i = e.anims[n];
      i[0].stop(true);
      if (t) {
        i[0].css(i[1]);
        if (is_function(i[2])) {
          i[2]()
        }
      }
    }
    if (is_object(e.post)) {
      sc_stopScroll(e.post, t)
    }
  }

  function sc_afterScroll(e, t, n) {
    if (t) {
      t.remove()
    }
    switch (n.fx) {
      case "fade":
      case "crossfade":
      case "cover-fade":
      case "uncover-fade":
        e.css("opacity", 1);
        e.css("filter", "");
        break
    }
  }

  function sc_fireCallbacks(e, t, n, r, i) {
    if (t[n]) {
      t[n].call(e, r)
    }
    if (i[n].length) {
      for (var s = 0, o = i[n].length; s < o; s++) {
        i[n][s].call(e, r)
      }
    }
    return []
  }

  function sc_fireQueue(e, t, n) {
    if (t.length) {
      e.trigger(cf_e(t[0][0], n), t[0][1]);
      t.shift()
    }
    return t
  }

  function sc_hideHiddenItems(e) {
    e.each(function() {
      var e = $(this);
      e.data("_cfs_isHidden", e.is(":hidden")).hide()
    })
  }

  function sc_showHiddenItems(e) {
    if (e) {
      e.each(function() {
        var e = $(this);
        if (!e.data("_cfs_isHidden")) {
          e.show()
        }
      })
    }
  }

  function sc_clearTimers(e) {
    if (e.auto) {
      clearTimeout(e.auto)
    }
    if (e.progress) {
      clearInterval(e.progress)
    }
    return e
  }

  function sc_mapCallbackArguments(e, t, n, r, i, s, o) {
    return {
      width: o.width,
      height: o.height,
      items: {
        old: e,
        skipped: t,
        visible: n
      },
      scroll: {
        items: r,
        direction: i,
        duration: s
      }
    }
  }

  function sc_getDuration(e, t, n, r) {
    var i = e.duration;
    if (e.fx == "none") {
      return 0
    }
    if (i == "auto") {
      i = t.scroll.duration / t.scroll.items * n
    } else if (i < 10) {
      i = r / i
    }
    if (i < 1) {
      return 0
    }
    if (e.fx == "fade") {
      i = i / 2
    }
    return Math.round(i)
  }

  function nv_showNavi(e, t, n) {
    var r = is_number(e.items.minimum) ? e.items.minimum : e.items.visible + 1;
    if (t == "show" || t == "hide") {
      var i = t
    } else if (r > t) {
      debug(n, "Not enough items (" + t + " total, " + r + " needed): Hiding navigation.");
      var i = "hide"
    } else {
      var i = "show"
    }
    var s = i == "show" ? "removeClass" : "addClass",
      o = cf_c("hidden", n);
    if (e.auto.button) {
      e.auto.button[i]()[s](o)
    }
    if (e.prev.button) {
      e.prev.button[i]()[s](o)
    }
    if (e.next.button) {
      e.next.button[i]()[s](o)
    }
    if (e.pagination.container) {
      e.pagination.container[i]()[s](o)
    }
  }

  function nv_enableNavi(e, t, n) {
    if (e.circular || e.infinite) return;
    var r = t == "removeClass" || t == "addClass" ? t : false,
      i = cf_c("disabled", n);
    if (e.auto.button && r) {
      e.auto.button[r](i)
    }
    if (e.prev.button) {
      var s = r || t == 0 ? "addClass" : "removeClass";
      e.prev.button[s](i)
    }
    if (e.next.button) {
      var s = r || t == e.items.visible ? "addClass" : "removeClass";
      e.next.button[s](i)
    }
  }

  function go_getObject(e, t) {
    if (is_function(t)) {
      t = t.call(e)
    } else if (is_undefined(t)) {
      t = {}
    }
    return t
  }

  function go_getItemsObject(e, t) {
    t = go_getObject(e, t);
    if (is_number(t)) {
      t = {
        visible: t
      }
    } else if (t == "variable") {
      t = {
        visible: t,
        width: t,
        height: t
      }
    } else if (!is_object(t)) {
      t = {}
    }
    return t
  }

  function go_getScrollObject(e, t) {
    t = go_getObject(e, t);
    if (is_number(t)) {
      if (t <= 50) {
        t = {
          items: t
        }
      } else {
        t = {
          duration: t
        }
      }
    } else if (is_string(t)) {
      t = {
        easing: t
      }
    } else if (!is_object(t)) {
      t = {}
    }
    return t
  }

  function go_getNaviObject(e, t) {
    t = go_getObject(e, t);
    if (is_string(t)) {
      var n = cf_getKeyCode(t);
      if (n == -1) {
        t = $(t)
      } else {
        t = n
      }
    }
    return t
  }

  function go_getAutoObject(e, t) {
    t = go_getNaviObject(e, t);
    if (is_jquery(t)) {
      t = {
        button: t
      }
    } else if (is_boolean(t)) {
      t = {
        play: t
      }
    } else if (is_number(t)) {
      t = {
        timeoutDuration: t
      }
    }
    if (t.progress) {
      if (is_string(t.progress) || is_jquery(t.progress)) {
        t.progress = {
          bar: t.progress
        }
      }
    }
    return t
  }

  function go_complementAutoObject(e, t) {
    if (is_function(t.button)) {
      t.button = t.button.call(e)
    }
    if (is_string(t.button)) {
      t.button = $(t.button)
    }
    if (!is_boolean(t.play)) {
      t.play = true
    }
    if (!is_number(t.delay)) {
      t.delay = 0
    }
    if (is_undefined(t.pauseOnEvent)) {
      t.pauseOnEvent = true
    }
    if (!is_boolean(t.pauseOnResize)) {
      t.pauseOnResize = true
    }
    if (!is_number(t.timeoutDuration)) {
      t.timeoutDuration = t.duration < 10 ? 2500 : t.duration * 5
    }
    if (t.progress) {
      if (is_function(t.progress.bar)) {
        t.progress.bar = t.progress.bar.call(e)
      }
      if (is_string(t.progress.bar)) {
        t.progress.bar = $(t.progress.bar)
      }
      if (t.progress.bar) {
        if (!is_function(t.progress.updater)) {
          t.progress.updater = $.fn.carouFredSel.progressbarUpdater
        }
        if (!is_number(t.progress.interval)) {
          t.progress.interval = 50
        }
      } else {
        t.progress = false
      }
    }
    return t
  }

  function go_getPrevNextObject(e, t) {
    t = go_getNaviObject(e, t);
    if (is_jquery(t)) {
      t = {
        button: t
      }
    } else if (is_number(t)) {
      t = {
        key: t
      }
    }
    return t
  }

  function go_complementPrevNextObject(e, t) {
    if (is_function(t.button)) {
      t.button = t.button.call(e)
    }
    if (is_string(t.button)) {
      t.button = $(t.button)
    }
    if (is_string(t.key)) {
      t.key = cf_getKeyCode(t.key)
    }
    return t
  }

  function go_getPaginationObject(e, t) {
    t = go_getNaviObject(e, t);
    if (is_jquery(t)) {
      t = {
        container: t
      }
    } else if (is_boolean(t)) {
      t = {
        keys: t
      }
    }
    return t
  }

  function go_complementPaginationObject(e, t) {
    if (is_function(t.container)) {
      t.container = t.container.call(e)
    }
    if (is_string(t.container)) {
      t.container = $(t.container)
    }
    if (!is_number(t.items)) {
      t.items = false
    }
    if (!is_boolean(t.keys)) {
      t.keys = false
    }
    if (!is_function(t.anchorBuilder) && !is_false(t.anchorBuilder)) {
      t.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder
    }
    if (!is_number(t.deviation)) {
      t.deviation = 0
    }
    return t
  }

  function go_getSwipeObject(e, t) {
    if (is_function(t)) {
      t = t.call(e)
    }
    if (is_undefined(t)) {
      t = {
        onTouch: false
      }
    }
    if (is_true(t)) {
      t = {
        onTouch: t
      }
    } else if (is_number(t)) {
      t = {
        items: t
      }
    }
    return t
  }

  function go_complementSwipeObject(e, t) {
    if (!is_boolean(t.onTouch)) {
      t.onTouch = true
    }
    if (!is_boolean(t.onMouse)) {
      t.onMouse = false
    }
    if (!is_object(t.options)) {
      t.options = {}
    }
    if (!is_boolean(t.options.triggerOnTouchEnd)) {
      t.options.triggerOnTouchEnd = false
    }
    return t
  }

  function go_getMousewheelObject(e, t) {
    if (is_function(t)) {
      t = t.call(e)
    }
    if (is_true(t)) {
      t = {}
    } else if (is_number(t)) {
      t = {
        items: t
      }
    } else if (is_undefined(t)) {
      t = false
    }
    return t
  }

  function go_complementMousewheelObject(e, t) {
    return t
  }

  function gn_getItemIndex(e, t, n, r, i) {
    if (is_string(e)) {
      e = $(e, i)
    }
    if (is_object(e)) {
      e = $(e, i)
    }
    if (is_jquery(e)) {
      e = i.children().index(e);
      if (!is_boolean(n)) {
        n = false
      }
    } else {
      if (!is_boolean(n)) {
        n = true
      }
    }
    if (!is_number(e)) {
      e = 0
    }
    if (!is_number(t)) {
      t = 0
    }
    if (n) {
      e += r.first
    }
    e += t;
    if (r.total > 0) {
      while (e >= r.total) {
        e -= r.total
      }
      while (e < 0) {
        e += r.total
      }
    }
    return e
  }

  function gn_getVisibleItemsPrev(e, t, n) {
    var r = 0,
      i = 0;
    for (var s = n; s >= 0; s--) {
      var o = e.eq(s);
      r += o.is(":visible") ? o[t.d["outerWidth"]](true) : 0;
      if (r > t.maxDimension) {
        return i
      }
      if (s == 0) {
        s = e.length
      }
      i++
    }
  }

  function gn_getVisibleItemsPrevFilter(e, t, n) {
    return gn_getItemsPrevFilter(e, t.items.filter, t.items.visibleConf.org, n)
  }

  function gn_getScrollItemsPrevFilter(e, t, n, r) {
    return gn_getItemsPrevFilter(e, t.items.filter, r, n)
  }

  function gn_getItemsPrevFilter(e, t, n, r) {
    var i = 0,
      s = 0;
    for (var o = r, u = e.length; o >= 0; o--) {
      s++;
      if (s == u) {
        return s
      }
      var a = e.eq(o);
      if (a.is(t)) {
        i++;
        if (i == n) {
          return s
        }
      }
      if (o == 0) {
        o = u
      }
    }
  }

  function gn_getVisibleOrg(e, t) {
    return t.items.visibleConf.org || e.children().slice(0, t.items.visible).filter(t.items.filter).length
  }

  function gn_getVisibleItemsNext(e, t, n) {
    var r = 0,
      i = 0;
    for (var s = n, o = e.length - 1; s <= o; s++) {
      var u = e.eq(s);
      r += u.is(":visible") ? u[t.d["outerWidth"]](true) : 0;
      if (r > t.maxDimension) {
        return i
      }
      i++;
      if (i == o + 1) {
        return i
      }
      if (s == o) {
        s = -1
      }
    }
  }

  function gn_getVisibleItemsNextTestCircular(e, t, n, r) {
    var i = gn_getVisibleItemsNext(e, t, n);
    if (!t.circular) {
      if (n + i > r) {
        i = r - n
      }
    }
    return i
  }

  function gn_getVisibleItemsNextFilter(e, t, n) {
    return gn_getItemsNextFilter(e, t.items.filter, t.items.visibleConf.org, n, t.circular)
  }

  function gn_getScrollItemsNextFilter(e, t, n, r) {
    return gn_getItemsNextFilter(e, t.items.filter, r + 1, n, t.circular) - 1
  }

  function gn_getItemsNextFilter(e, t, n, r, i) {
    var s = 0,
      o = 0;
    for (var u = r, a = e.length - 1; u <= a; u++) {
      o++;
      if (o >= a) {
        return o
      }
      var f = e.eq(u);
      if (f.is(t)) {
        s++;
        if (s == n) {
          return o
        }
      }
      if (u == a) {
        u = -1
      }
    }
  }

  function gi_getCurrentItems(e, t) {
    return e.slice(0, t.items.visible)
  }

  function gi_getOldItemsPrev(e, t, n) {
    return e.slice(n, t.items.visibleConf.old + n)
  }

  function gi_getNewItemsPrev(e, t) {
    return e.slice(0, t.items.visible)
  }

  function gi_getOldItemsNext(e, t) {
    return e.slice(0, t.items.visibleConf.old)
  }

  function gi_getNewItemsNext(e, t, n) {
    return e.slice(n, t.items.visible + n)
  }

  function sz_storeMargin(e, t, n) {
    if (t.usePadding) {
      if (!is_string(n)) {
        n = "_cfs_origCssMargin"
      }
      e.each(function() {
        var e = $(this),
          r = parseInt(e.css(t.d["marginRight"]), 10);
        if (!is_number(r)) {
          r = 0
        }
        e.data(n, r)
      })
    }
  }

  function sz_resetMargin(e, t, n) {
    if (t.usePadding) {
      var r = is_boolean(n) ? n : false;
      if (!is_number(n)) {
        n = 0
      }
      sz_storeMargin(e, t, "_cfs_tempCssMargin");
      e.each(function() {
        var e = $(this);
        e.css(t.d["marginRight"], r ? e.data("_cfs_tempCssMargin") : n + e.data("_cfs_origCssMargin"))
      })
    }
  }

  function sz_storeOrigCss(e) {
    e.each(function() {
      var e = $(this);
      e.data("_cfs_origCss", e.attr("style") || "")
    })
  }

  function sz_restoreOrigCss(e) {
    e.each(function() {
      var e = $(this);
      e.attr("style", e.data("_cfs_origCss") || "")
    })
  }

  function sz_setResponsiveSizes(e, t) {
    var n = e.items.visible,
      r = e.items[e.d["width"]],
      i = e[e.d["height"]],
      s = is_percentage(i);
    t.each(function() {
      var t = $(this),
        n = r - ms_getPaddingBorderMargin(t, e, "Width");
      t[e.d["width"]](n);
      if (s) {
        t[e.d["height"]](ms_getPercentage(n, i))
      }
    })
  }

  function sz_setSizes(e, t) {
    var n = e.parent(),
      r = e.children(),
      i = gi_getCurrentItems(r, t),
      s = cf_mapWrapperSizes(ms_getSizes(i, t, true), t, false);
    n.css(s);
    if (t.usePadding) {
      var o = t.padding,
        u = o[t.d[1]];
      if (t.align && u < 0) {
        u = 0
      }
      var a = i.last();
      a.css(t.d["marginRight"], a.data("_cfs_origCssMargin") + u);
      e.css(t.d["top"], o[t.d[0]]);
      e.css(t.d["left"], o[t.d[3]])
    }
    e.css(t.d["width"], s[t.d["width"]] + ms_getTotalSize(r, t, "width") * 2);
    e.css(t.d["height"], ms_getLargestSize(r, t, "height"));
    return s
  }

  function ms_getSizes(e, t, n) {
    return [ms_getTotalSize(e, t, "width", n), ms_getLargestSize(e, t, "height", n)]
  }

  function ms_getLargestSize(e, t, n, r) {
    if (!is_boolean(r)) {
      r = false
    }
    if (is_number(t[t.d[n]]) && r) {
      return t[t.d[n]]
    }
    if (is_number(t.items[t.d[n]])) {
      return t.items[t.d[n]]
    }
    n = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight";
    return ms_getTrueLargestSize(e, t, n)
  }

  function ms_getTrueLargestSize(e, t, n) {
    var r = 0;
    for (var i = 0, s = e.length; i < s; i++) {
      var o = e.eq(i);
      var u = o.is(":visible") ? o[t.d[n]](true) : 0;
      if (r < u) {
        r = u
      }
    }
    return r
  }

  function ms_getTotalSize(e, t, n, r) {
    if (!is_boolean(r)) {
      r = false
    }
    if (is_number(t[t.d[n]]) && r) {
      return t[t.d[n]]
    }
    if (is_number(t.items[t.d[n]])) {
      return t.items[t.d[n]] * e.length
    }
    var i = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight",
      s = 0;
    for (var o = 0, u = e.length; o < u; o++) {
      var a = e.eq(o);
      s += a.is(":visible") ? a[t.d[i]](true) : 0
    }
    return s
  }

  function ms_getParentSize(e, t, n) {
    var r = e.is(":visible");
    if (r) {
      e.hide()
    }
    var i = e.parent()[t.d[n]]();
    if (r) {
      e.show()
    }
    return i
  }

  function ms_getMaxDimension(e, t) {
    return is_number(e[e.d["width"]]) ? e[e.d["width"]] : t
  }

  function ms_hasVariableSizes(e, t, n) {
    var r = false,
      i = false;
    for (var s = 0, o = e.length; s < o; s++) {
      var u = e.eq(s);
      var a = u.is(":visible") ? u[t.d[n]](true) : 0;
      if (r === false) {
        r = a
      } else if (r != a) {
        i = true
      }
      if (r == 0) {
        i = true
      }
    }
    return i
  }

  function ms_getPaddingBorderMargin(e, t, n) {
    return e[t.d["outer" + n]](true) - e[t.d[n.toLowerCase()]]()
  }

  function ms_getPercentage(e, t) {
    if (is_percentage(t)) {
      t = parseInt(t.slice(0, -1), 10);
      if (!is_number(t)) {
        return e
      }
      e *= t / 100
    }
    return e
  }

  function cf_e(e, t, n, r, i) {
    if (!is_boolean(n)) {
      n = true
    }
    if (!is_boolean(r)) {
      r = true
    }
    if (!is_boolean(i)) {
      i = false
    }
    if (n) {
      e = t.events.prefix + e
    }
    if (r) {
      e = e + "." + t.events.namespace
    }
    if (r && i) {
      e += t.serialNumber
    }
    return e
  }

  function cf_c(e, t) {
    return is_string(t.classnames[e]) ? t.classnames[e] : e
  }

  function cf_mapWrapperSizes(e, t, n) {
    if (!is_boolean(n)) {
      n = true
    }
    var r = t.usePadding && n ? t.padding : [0, 0, 0, 0];
    var i = {};
    i[t.d["width"]] = e[0] + r[1] + r[3];
    i[t.d["height"]] = e[1] + r[0] + r[2];
    return i
  }

  function cf_sortParams(e, t) {
    var n = [];
    for (var r = 0, i = e.length; r < i; r++) {
      for (var s = 0, o = t.length; s < o; s++) {
        if (t[s].indexOf(typeof e[r]) > -1 && is_undefined(n[s])) {
          n[s] = e[r];
          break
        }
      }
    }
    return n
  }

  function cf_getPadding(e) {
    if (is_undefined(e)) {
      return [0, 0, 0, 0]
    }
    if (is_number(e)) {
      return [e, e, e, e]
    }
    if (is_string(e)) {
      e = e.split("px").join("").split("em").join("").split(" ")
    }
    if (!is_array(e)) {
      return [0, 0, 0, 0]
    }
    for (var t = 0; t < 4; t++) {
      e[t] = parseInt(e[t], 10)
    }
    switch (e.length) {
      case 0:
        return [0, 0, 0, 0];
      case 1:
        return [e[0], e[0], e[0], e[0]];
      case 2:
        return [e[0], e[1], e[0], e[1]];
      case 3:
        return [e[0], e[1], e[2], e[1]];
      default:
        return [e[0], e[1], e[2], e[3]]
    }
  }

  function cf_getAlignPadding(e, t) {
    var n = is_number(t[t.d["width"]]) ? Math.ceil(t[t.d["width"]] - ms_getTotalSize(e, t, "width")) : 0;
    switch (t.align) {
      case "left":
        return [0, n];
      case "right":
        return [n, 0];
      case "center":
      default:
        return [Math.ceil(n / 2), Math.floor(n / 2)]
    }
  }

  function cf_getDimensions(e) {
    var t = [
      ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
      ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
    ];
    var n = t[0].length,
      r = e.direction == "right" || e.direction == "left" ? 0 : 1;
    var i = {};
    for (var s = 0; s < n; s++) {
      i[t[0][s]] = t[r][s]
    }
    return i
  }

  function cf_getAdjust(e, t, n, r) {
    var i = e;
    if (is_function(n)) {
      i = n.call(r, i)
    } else if (is_string(n)) {
      var s = n.split("+"),
        o = n.split("-");
      if (o.length > s.length) {
        var u = true,
          a = o[0],
          f = o[1]
      } else {
        var u = false,
          a = s[0],
          f = s[1]
      }
      switch (a) {
        case "even":
          i = e % 2 == 1 ? e - 1 : e;
          break;
        case "odd":
          i = e % 2 == 0 ? e - 1 : e;
          break;
        default:
          i = e;
          break
      }
      f = parseInt(f, 10);
      if (is_number(f)) {
        if (u) {
          f = -f
        }
        i += f
      }
    }
    if (!is_number(i) || i < 1) {
      i = 1
    }
    return i
  }

  function cf_getItemsAdjust(e, t, n, r) {
    return cf_getItemAdjustMinMax(cf_getAdjust(e, t, n, r), t.items.visibleConf)
  }

  function cf_getItemAdjustMinMax(e, t) {
    if (is_number(t.min) && e < t.min) {
      e = t.min
    }
    if (is_number(t.max) && e > t.max) {
      e = t.max
    }
    if (e < 1) {
      e = 1
    }
    return e
  }

  function cf_getSynchArr(e) {
    if (!is_array(e)) {
      e = [
        [e]
      ]
    }
    if (!is_array(e[0])) {
      e = [e]
    }
    for (var t = 0, n = e.length; t < n; t++) {
      if (is_string(e[t][0])) {
        e[t][0] = $(e[t][0])
      }
      if (!is_boolean(e[t][1])) {
        e[t][1] = true
      }
      if (!is_boolean(e[t][2])) {
        e[t][2] = true
      }
      if (!is_number(e[t][3])) {
        e[t][3] = 0
      }
    }
    return e
  }

  function cf_getKeyCode(e) {
    if (e == "right") {
      return 39
    }
    if (e == "left") {
      return 37
    }
    if (e == "up") {
      return 38
    }
    if (e == "down") {
      return 40
    }
    return -1
  }

  function cf_setCookie(e, t, n) {
    if (e) {
      var r = t.triggerHandler(cf_e("currentPosition", n));
      $.fn.carouFredSel.cookie.set(e, r)
    }
  }

  function cf_getCookie(e) {
    var t = $.fn.carouFredSel.cookie.get(e);
    return t == "" ? 0 : t
  }

  function in_mapCss(e, t) {
    var n = {};
    for (var r = 0, i = t.length; r < i; r++) {
      n[t[r]] = e.css(t[r])
    }
    return n
  }

  function in_complementItems(e, t, n, r) {
    if (!is_object(e.visibleConf)) {
      e.visibleConf = {}
    }
    if (!is_object(e.sizesConf)) {
      e.sizesConf = {}
    }
    if (e.start == 0 && is_number(r)) {
      e.start = r
    }
    if (is_object(e.visible)) {
      e.visibleConf.min = e.visible.min;
      e.visibleConf.max = e.visible.max;
      e.visible = false
    } else if (is_string(e.visible)) {
      if (e.visible == "variable") {
        e.visibleConf.variable = true
      } else {
        e.visibleConf.adjust = e.visible
      }
      e.visible = false
    } else if (is_function(e.visible)) {
      e.visibleConf.adjust = e.visible;
      e.visible = false
    }
    if (!is_string(e.filter)) {
      e.filter = n.filter(":hidden").length > 0 ? ":visible" : "*"
    }
    if (!e[t.d["width"]]) {
      if (t.responsive) {
        debug(true, "Set a " + t.d["width"] + " for the items!");
        e[t.d["width"]] = ms_getTrueLargestSize(n, t, "outerWidth")
      } else {
        e[t.d["width"]] = ms_hasVariableSizes(n, t, "outerWidth") ? "variable" : n[t.d["outerWidth"]](true)
      }
    }
    if (!e[t.d["height"]]) {
      e[t.d["height"]] = ms_hasVariableSizes(n, t, "outerHeight") ? "variable" : n[t.d["outerHeight"]](true)
    }
    e.sizesConf.width = e.width;
    e.sizesConf.height = e.height;
    return e
  }

  function in_complementVisibleItems(e, t) {
    if (e.items[e.d["width"]] == "variable") {
      e.items.visibleConf.variable = true
    }
    if (!e.items.visibleConf.variable) {
      if (is_number(e[e.d["width"]])) {
        e.items.visible = Math.floor(e[e.d["width"]] / e.items[e.d["width"]])
      } else {
        e.items.visible = Math.floor(t / e.items[e.d["width"]]);
        e[e.d["width"]] = e.items.visible * e.items[e.d["width"]];
        if (!e.items.visibleConf.adjust) {
          e.align = false
        }
      }
      if (e.items.visible == "Infinity" || e.items.visible < 1) {
        debug(true, 'Not a valid number of visible items: Set to "variable".');
        e.items.visibleConf.variable = true
      }
    }
    return e
  }

  function in_complementPrimarySize(e, t, n) {
    if (e == "auto") {
      e = ms_getTrueLargestSize(n, t, "outerWidth")
    }
    return e
  }

  function in_complementSecondarySize(e, t, n) {
    if (e == "auto") {
      e = ms_getTrueLargestSize(n, t, "outerHeight")
    }
    if (!e) {
      e = t.items[t.d["height"]]
    }
    return e
  }

  function in_getAlignPadding(e, t) {
    var n = cf_getAlignPadding(gi_getCurrentItems(t, e), e);
    e.padding[e.d[1]] = n[1];
    e.padding[e.d[3]] = n[0];
    return e
  }

  function in_getResponsiveValues(e, t, n) {
    var r = cf_getItemAdjustMinMax(Math.ceil(e[e.d["width"]] / e.items[e.d["width"]]), e.items.visibleConf);
    if (r > t.length) {
      r = t.length
    }
    var i = Math.floor(e[e.d["width"]] / r);
    e.items.visible = r;
    e.items[e.d["width"]] = i;
    e[e.d["width"]] = r * i;
    return e
  }

  function bt_pauseOnHoverConfig(e) {
    if (is_string(e)) {
      var t = e.indexOf("immediate") > -1 ? true : false,
        n = e.indexOf("resume") > -1 ? true : false
    } else {
      var t = n = false
    }
    return [t, n]
  }

  function bt_mousesheelNumber(e) {
    return is_number(e) ? e : null
  }

  function is_null(e) {
    return e === null
  }

  function is_undefined(e) {
    return is_null(e) || typeof e == "undefined" || e === "" || e === "undefined"
  }

  function is_array(e) {
    return e instanceof Array
  }

  function is_jquery(e) {
    return e instanceof jQuery
  }

  function is_object(e) {
    return (e instanceof Object || typeof e == "object") && !is_null(e) && !is_jquery(e) && !is_array(e) && !is_function(e)
  }

  function is_number(e) {
    return (e instanceof Number || typeof e == "number") && !isNaN(e)
  }

  function is_string(e) {
    return (e instanceof String || typeof e == "string") && !is_undefined(e) && !is_true(e) && !is_false(e)
  }

  function is_function(e) {
    return e instanceof Function || typeof e == "function"
  }

  function is_boolean(e) {
    return e instanceof Boolean || typeof e == "boolean" || is_true(e) || is_false(e)
  }

  function is_true(e) {
    return e === true || e === "true"
  }

  function is_false(e) {
    return e === false || e === "false"
  }

  function is_percentage(e) {
    return is_string(e) && e.slice(-1) == "%"
  }

  function getTime() {
    return (new Date).getTime()
  }

  function deprecated(e, t) {
    debug(true, e + " is DEPRECATED, support for it will be removed. Use " + t + " instead.")
  }

  function debug(e, t) {
    if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
      if (is_object(e)) {
        var n = " (" + e.selector + ")";
        e = e.debug
      } else {
        var n = ""
      }
      if (!e) {
        return false
      }
      if (is_string(t)) {
        t = "carouFredSel" + n + ": " + t
      } else {
        t = ["carouFredSel" + n + ":", t]
      }
      window.console.log(t)
    }
    return false
  }
  if ($.fn.carouFredSel) {
    return
  }
  $.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
    if (this.length == 0) {
      debug(true, 'No element found for "' + this.selector + '".');
      return this
    }
    if (this.length > 1) {
      return this.each(function() {
        $(this).carouFredSel(options, configs)
      })
    }
    var $cfs = this,
      $tt0 = this[0],
      starting_position = false;
    if ($cfs.data("_cfs_isCarousel")) {
      starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition");
      $cfs.trigger("_cfs_triggerEvent", ["destroy", true])
    }
    var FN = {};
    FN._init = function(e, t, n) {
      e = go_getObject($tt0, e);
      e.items = go_getItemsObject($tt0, e.items);
      e.scroll = go_getScrollObject($tt0, e.scroll);
      e.auto = go_getAutoObject($tt0, e.auto);
      e.prev = go_getPrevNextObject($tt0, e.prev);
      e.next = go_getPrevNextObject($tt0, e.next);
      e.pagination = go_getPaginationObject($tt0, e.pagination);
      e.swipe = go_getSwipeObject($tt0, e.swipe);
      e.mousewheel = go_getMousewheelObject($tt0, e.mousewheel);
      if (t) {
        opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, e)
      }
      opts = $.extend(true, {}, $.fn.carouFredSel.defaults, e);
      opts.d = cf_getDimensions(opts);
      crsl.direction = opts.direction == "up" || opts.direction == "left" ? "next" : "prev";
      var r = $cfs.children(),
        i = ms_getParentSize($wrp, opts, "width");
      if (is_true(opts.cookie)) {
        opts.cookie = "caroufredsel_cookie_" + conf.serialNumber
      }
      opts.maxDimension = ms_getMaxDimension(opts, i);
      opts.items = in_complementItems(opts.items, opts, r, n);
      opts[opts.d["width"]] = in_complementPrimarySize(opts[opts.d["width"]], opts, r);
      opts[opts.d["height"]] = in_complementSecondarySize(opts[opts.d["height"]], opts, r);
      if (opts.responsive) {
        if (!is_percentage(opts[opts.d["width"]])) {
          opts[opts.d["width"]] = "100%"
        }
      }
      if (is_percentage(opts[opts.d["width"]])) {
        crsl.upDateOnWindowResize = true;
        crsl.primarySizePercentage = opts[opts.d["width"]];
        opts[opts.d["width"]] = ms_getPercentage(i, crsl.primarySizePercentage);
        if (!opts.items.visible) {
          opts.items.visibleConf.variable = true
        }
      }
      if (opts.responsive) {
        opts.usePadding = false;
        opts.padding = [0, 0, 0, 0];
        opts.align = false;
        opts.items.visibleConf.variable = false
      } else {
        if (!opts.items.visible) {
          opts = in_complementVisibleItems(opts, i)
        }
        if (!opts[opts.d["width"]]) {
          if (!opts.items.visibleConf.variable && is_number(opts.items[opts.d["width"]]) && opts.items.filter == "*") {
            opts[opts.d["width"]] = opts.items.visible * opts.items[opts.d["width"]];
            opts.align = false
          } else {
            opts[opts.d["width"]] = "variable"
          }
        }
        if (is_undefined(opts.align)) {
          opts.align = is_number(opts[opts.d["width"]]) ? "center" : false
        }
        if (opts.items.visibleConf.variable) {
          opts.items.visible = gn_getVisibleItemsNext(r, opts, 0)
        }
      }
      if (opts.items.filter != "*" && !opts.items.visibleConf.variable) {
        opts.items.visibleConf.org = opts.items.visible;
        opts.items.visible = gn_getVisibleItemsNextFilter(r, opts, 0)
      }
      opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
      opts.items.visibleConf.old = opts.items.visible;
      if (opts.responsive) {
        if (!opts.items.visibleConf.min) {
          opts.items.visibleConf.min = opts.items.visible
        }
        if (!opts.items.visibleConf.max) {
          opts.items.visibleConf.max = opts.items.visible
        }
        opts = in_getResponsiveValues(opts, r, i)
      } else {
        opts.padding = cf_getPadding(opts.padding);
        if (opts.align == "top") {
          opts.align = "left"
        } else if (opts.align == "bottom") {
          opts.align = "right"
        }
        switch (opts.align) {
          case "center":
          case "left":
          case "right":
            if (opts[opts.d["width"]] != "variable") {
              opts = in_getAlignPadding(opts, r);
              opts.usePadding = true
            }
            break;
          default:
            opts.align = false;
            opts.usePadding = opts.padding[0] == 0 && opts.padding[1] == 0 && opts.padding[2] == 0 && opts.padding[3] == 0 ? false : true;
            break
        }
      }
      if (!is_number(opts.scroll.duration)) {
        opts.scroll.duration = 500
      }
      if (is_undefined(opts.scroll.items)) {
        opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || opts.items.filter != "*" ? "visible" : opts.items.visible
      }
      opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
      opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
      opts.next = $.extend(true, {}, opts.scroll, opts.next);
      opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
      opts.auto = go_complementAutoObject($tt0, opts.auto);
      opts.prev = go_complementPrevNextObject($tt0, opts.prev);
      opts.next = go_complementPrevNextObject($tt0, opts.next);
      opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
      opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
      opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);
      if (opts.synchronise) {
        opts.synchronise = cf_getSynchArr(opts.synchronise)
      }
      if (opts.auto.onPauseStart) {
        opts.auto.onTimeoutStart = opts.auto.onPauseStart;
        deprecated("auto.onPauseStart", "auto.onTimeoutStart")
      }
      if (opts.auto.onPausePause) {
        opts.auto.onTimeoutPause = opts.auto.onPausePause;
        deprecated("auto.onPausePause", "auto.onTimeoutPause")
      }
      if (opts.auto.onPauseEnd) {
        opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
        deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")
      }
      if (opts.auto.pauseDuration) {
        opts.auto.timeoutDuration = opts.auto.pauseDuration;
        deprecated("auto.pauseDuration", "auto.timeoutDuration")
      }
    };
    FN._build = function() {
      $cfs.data("_cfs_isCarousel", true);
      var e = $cfs.children(),
        t = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
        n = "relative";
      switch (t.position) {
        case "absolute":
        case "fixed":
          n = t.position;
          break
      }
      if (conf.wrapper == "parent") {
        sz_storeOrigCss($wrp)
      } else {
        $wrp.css(t)
      }
      $wrp.css({
        overflow: "hidden",
        position: n
      });
      sz_storeOrigCss($cfs);
      $cfs.data("_cfs_origCssZindex", t.zIndex);
      $cfs.css({
        textAlign: "left",
        "float": "none",
        position: "absolute",
        top: 0,
        right: "auto",
        bottom: "auto",
        left: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
      });
      sz_storeMargin(e, opts);
      sz_storeOrigCss(e);
      if (opts.responsive) {
        sz_setResponsiveSizes(opts, e)
      }
    };
    FN._bind_events = function() {
      FN._unbind_events();
      $cfs.bind(cf_e("stop", conf), function(e, t) {
        e.stopPropagation();
        if (!crsl.isStopped) {
          if (opts.auto.button) {
            opts.auto.button.addClass(cf_c("stopped", conf))
          }
        }
        crsl.isStopped = true;
        if (opts.auto.play) {
          opts.auto.play = false;
          $cfs.trigger(cf_e("pause", conf), t)
        }
        return true
      });
      $cfs.bind(cf_e("finish", conf), function(e) {
        e.stopPropagation();
        if (crsl.isScrolling) {
          sc_stopScroll(scrl)
        }
        return true
      });
      $cfs.bind(cf_e("pause", conf), function(e, t, n) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        if (t && crsl.isScrolling) {
          scrl.isStopped = true;
          var r = getTime() - scrl.startTime;
          scrl.duration -= r;
          if (scrl.pre) {
            scrl.pre.duration -= r
          }
          if (scrl.post) {
            scrl.post.duration -= r
          }
          sc_stopScroll(scrl, false)
        }
        if (!crsl.isPaused && !crsl.isScrolling) {
          if (n) {
            tmrs.timePassed += getTime() - tmrs.startTime
          }
        }
        if (!crsl.isPaused) {
          if (opts.auto.button) {
            opts.auto.button.addClass(cf_c("paused", conf))
          }
        }
        crsl.isPaused = true;
        if (opts.auto.onTimeoutPause) {
          var i = opts.auto.timeoutDuration - tmrs.timePassed,
            s = 100 - Math.ceil(i * 100 / opts.auto.timeoutDuration);
          opts.auto.onTimeoutPause.call($tt0, s, i)
        }
        return true
      });
      $cfs.bind(cf_e("play", conf), function(e, t, n, r) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        var i = [t, n, r],
          s = ["string", "number", "boolean"],
          o = cf_sortParams(i, s);
        t = o[0];
        n = o[1];
        r = o[2];
        if (t != "prev" && t != "next") {
          t = crsl.direction
        }
        if (!is_number(n)) {
          n = 0
        }
        if (!is_boolean(r)) {
          r = false
        }
        if (r) {
          crsl.isStopped = false;
          opts.auto.play = true
        }
        if (!opts.auto.play) {
          e.stopImmediatePropagation();
          return debug(conf, "Carousel stopped: Not scrolling.")
        }
        if (crsl.isPaused) {
          if (opts.auto.button) {
            opts.auto.button.removeClass(cf_c("stopped", conf));
            opts.auto.button.removeClass(cf_c("paused", conf))
          }
        }
        crsl.isPaused = false;
        tmrs.startTime = getTime();
        var u = opts.auto.timeoutDuration + n;
        dur2 = u - tmrs.timePassed;
        perc = 100 - Math.ceil(dur2 * 100 / u);
        if (opts.auto.progress) {
          tmrs.progress = setInterval(function() {
            var e = getTime() - tmrs.startTime + tmrs.timePassed,
              t = Math.ceil(e * 100 / u);
            opts.auto.progress.updater.call(opts.auto.progress.bar[0], t)
          }, opts.auto.progress.interval)
        }
        tmrs.auto = setTimeout(function() {
          if (opts.auto.progress) {
            opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100)
          }
          if (opts.auto.onTimeoutEnd) {
            opts.auto.onTimeoutEnd.call($tt0, perc, dur2)
          }
          if (crsl.isScrolling) {
            $cfs.trigger(cf_e("play", conf), t)
          } else {
            $cfs.trigger(cf_e(t, conf), opts.auto)
          }
        }, dur2);
        if (opts.auto.onTimeoutStart) {
          opts.auto.onTimeoutStart.call($tt0, perc, dur2)
        }
        return true
      });
      $cfs.bind(cf_e("resume", conf), function(e) {
        e.stopPropagation();
        if (scrl.isStopped) {
          scrl.isStopped = false;
          crsl.isPaused = false;
          crsl.isScrolling = true;
          scrl.startTime = getTime();
          sc_startScroll(scrl, conf)
        } else {
          $cfs.trigger(cf_e("play", conf))
        }
        return true
      });
      $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(e, t, n, r, i) {
        e.stopPropagation();
        if (crsl.isStopped || $cfs.is(":hidden")) {
          e.stopImmediatePropagation();
          return debug(conf, "Carousel stopped or hidden: Not scrolling.")
        }
        var s = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
        if (s > itms.total) {
          e.stopImmediatePropagation();
          return debug(conf, "Not enough items (" + itms.total + " total, " + s + " needed): Not scrolling.")
        }
        var o = [t, n, r, i],
          u = ["object", "number/string", "function", "boolean"],
          a = cf_sortParams(o, u);
        t = a[0];
        n = a[1];
        r = a[2];
        i = a[3];
        var f = e.type.slice(conf.events.prefix.length);
        if (!is_object(t)) {
          t = {}
        }
        if (is_function(r)) {
          t.onAfter = r
        }
        if (is_boolean(i)) {
          t.queue = i
        }
        t = $.extend(true, {}, opts[f], t);
        if (t.conditions && !t.conditions.call($tt0, f)) {
          e.stopImmediatePropagation();
          return debug(conf, 'Callback "conditions" returned false.')
        }
        if (!is_number(n)) {
          if (opts.items.filter != "*") {
            n = "visible"
          } else {
            var l = [n, t.items, opts[f].items];
            for (var a = 0, c = l.length; a < c; a++) {
              if (is_number(l[a]) || l[a] == "page" || l[a] == "visible") {
                n = l[a];
                break
              }
            }
          }
          switch (n) {
            case "page":
              e.stopImmediatePropagation();
              return $cfs.triggerHandler(cf_e(f + "Page", conf), [t, r]);
              break;
            case "visible":
              if (!opts.items.visibleConf.variable && opts.items.filter == "*") {
                n = opts.items.visible
              }
              break
          }
        }
        if (scrl.isStopped) {
          $cfs.trigger(cf_e("resume", conf));
          $cfs.trigger(cf_e("queue", conf), [f, [t, n, r]]);
          e.stopImmediatePropagation();
          return debug(conf, "Carousel resumed scrolling.")
        }
        if (t.duration > 0) {
          if (crsl.isScrolling) {
            if (t.queue) {
              if (t.queue == "last") {
                queu = []
              }
              if (t.queue != "first" || queu.length == 0) {
                $cfs.trigger(cf_e("queue", conf), [f, [t, n, r]])
              }
            }
            e.stopImmediatePropagation();
            return debug(conf, "Carousel currently scrolling.")
          }
        }
        tmrs.timePassed = 0;
        $cfs.trigger(cf_e("slide_" + f, conf), [t, n]);
        if (opts.synchronise) {
          var h = opts.synchronise,
            p = [t, n];
          for (var d = 0, c = h.length; d < c; d++) {
            var v = f;
            if (!h[d][2]) {
              v = v == "prev" ? "next" : "prev"
            }
            if (!h[d][1]) {
              p[0] = h[d][0].triggerHandler("_cfs_triggerEvent", ["configuration", v])
            }
            p[1] = n + h[d][3];
            h[d][0].trigger("_cfs_triggerEvent", ["slide_" + v, p])
          }
        }
        return true
      });
      $cfs.bind(cf_e("slide_prev", conf), function(e, t, n) {
        e.stopPropagation();
        var r = $cfs.children();
        if (!opts.circular) {
          if (itms.first == 0) {
            if (opts.infinite) {
              $cfs.trigger(cf_e("next", conf), itms.total - 1)
            }
            return e.stopImmediatePropagation()
          }
        }
        sz_resetMargin(r, opts);
        if (!is_number(n)) {
          if (opts.items.visibleConf.variable) {
            n = gn_getVisibleItemsPrev(r, opts, itms.total - 1)
          } else if (opts.items.filter != "*") {
            var i = is_number(t.items) ? t.items : gn_getVisibleOrg($cfs, opts);
            n = gn_getScrollItemsPrevFilter(r, opts, itms.total - 1, i)
          } else {
            n = opts.items.visible
          }
          n = cf_getAdjust(n, opts, t.items, $tt0)
        }
        if (!opts.circular) {
          if (itms.total - n < itms.first) {
            n = itms.total - itms.first
          }
        }
        opts.items.visibleConf.old = opts.items.visible;
        if (opts.items.visibleConf.variable) {
          var s = cf_getItemsAdjust(gn_getVisibleItemsNext(r, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0);
          if (opts.items.visible + n <= s && n < itms.total) {
            n++;
            s = cf_getItemsAdjust(gn_getVisibleItemsNext(r, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0)
          }
          opts.items.visible = s
        } else if (opts.items.filter != "*") {
          var s = gn_getVisibleItemsNextFilter(r, opts, itms.total - n);
          opts.items.visible = cf_getItemsAdjust(s, opts, opts.items.visibleConf.adjust, $tt0)
        }
        sz_resetMargin(r, opts, true);
        if (n == 0) {
          e.stopImmediatePropagation();
          return debug(conf, "0 items to scroll: Not scrolling.")
        }
        debug(conf, "Scrolling " + n + " items backward.");
        itms.first += n;
        while (itms.first >= itms.total) {
          itms.first -= itms.total
        }
        if (!opts.circular) {
          if (itms.first == 0 && t.onEnd) {
            t.onEnd.call($tt0, "prev")
          }
          if (!opts.infinite) {
            nv_enableNavi(opts, itms.first, conf)
          }
        }
        $cfs.children().slice(itms.total - n, itms.total).prependTo($cfs);
        if (itms.total < opts.items.visible + n) {
          $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(true).appendTo($cfs)
        }
        var r = $cfs.children(),
          o = gi_getOldItemsPrev(r, opts, n),
          u = gi_getNewItemsPrev(r, opts),
          a = r.eq(n - 1),
          f = o.last(),
          l = u.last();
        sz_resetMargin(r, opts);
        var c = 0,
          h = 0;
        if (opts.align) {
          var p = cf_getAlignPadding(u, opts);
          c = p[0];
          h = p[1]
        }
        var d = c < 0 ? opts.padding[opts.d[3]] : 0;
        var v = false,
          m = $();
        if (opts.items.visible < n) {
          m = r.slice(opts.items.visibleConf.old, n);
          if (t.fx == "directscroll") {
            var g = opts.items[opts.d["width"]];
            v = m;
            a = l;
            sc_hideHiddenItems(v);
            opts.items[opts.d["width"]] = "variable"
          }
        }
        var y = false,
          b = ms_getTotalSize(r.slice(0, n), opts, "width"),
          w = cf_mapWrapperSizes(ms_getSizes(u, opts, true), opts, !opts.usePadding),
          E = 0,
          S = {},
          x = {},
          T = {},
          N = {},
          C = {},
          k = {},
          L = {},
          A = sc_getDuration(t, opts, n, b);
        switch (t.fx) {
          case "cover":
          case "cover-fade":
            E = ms_getTotalSize(r.slice(0, opts.items.visible), opts, "width");
            break
        }
        if (v) {
          opts.items[opts.d["width"]] = g
        }
        sz_resetMargin(r, opts, true);
        if (h >= 0) {
          sz_resetMargin(f, opts, opts.padding[opts.d[1]])
        }
        if (c >= 0) {
          sz_resetMargin(a, opts, opts.padding[opts.d[3]])
        }
        if (opts.align) {
          opts.padding[opts.d[1]] = h;
          opts.padding[opts.d[3]] = c
        }
        k[opts.d["left"]] = -(b - d);
        L[opts.d["left"]] = -(E - d);
        x[opts.d["left"]] = w[opts.d["width"]];
        var O = function() {},
          M = function() {},
          _ = function() {},
          D = function() {},
          P = function() {},
          H = function() {},
          B = function() {},
          j = function() {},
          F = function() {},
          I = function() {},
          q = function() {};
        switch (t.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
          case "uncover":
          case "uncover-fade":
            y = $cfs.clone(true).appendTo($wrp);
            break
        }
        switch (t.fx) {
          case "crossfade":
          case "uncover":
          case "uncover-fade":
            y.children().slice(0, n).remove();
            y.children().slice(opts.items.visibleConf.old).remove();
            break;
          case "cover":
          case "cover-fade":
            y.children().slice(opts.items.visible).remove();
            y.css(L);
            break
        }
        $cfs.css(k);
        scrl = sc_setScroll(A, t.easing, conf);
        S[opts.d["left"]] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
        if (opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
          O = function() {
            $wrp.css(w)
          };
          M = function() {
            scrl.anims.push([$wrp, w])
          }
        }
        if (opts.usePadding) {
          if (l.not(a).length) {
            T[opts.d["marginRight"]] = a.data("_cfs_origCssMargin");
            if (c < 0) {
              a.css(T)
            } else {
              B = function() {
                a.css(T)
              };
              j = function() {
                scrl.anims.push([a, T])
              }
            }
          }
          switch (t.fx) {
            case "cover":
            case "cover-fade":
              y.children().eq(n - 1).css(T);
              break
          }
          if (l.not(f).length) {
            N[opts.d["marginRight"]] = f.data("_cfs_origCssMargin");
            _ = function() {
              f.css(N)
            };
            D = function() {
              scrl.anims.push([f, N])
            }
          }
          if (h >= 0) {
            C[opts.d["marginRight"]] = l.data("_cfs_origCssMargin") + opts.padding[opts.d[1]];
            P = function() {
              l.css(C)
            };
            H = function() {
              scrl.anims.push([l, C])
            }
          }
        }
        q = function() {
          $cfs.css(S)
        };
        var R = opts.items.visible + n - itms.total;
        I = function() {
          if (R > 0) {
            $cfs.children().slice(itms.total).remove();
            o = $($cfs.children().slice(itms.total - (opts.items.visible - R)).get().concat($cfs.children().slice(0, R).get()))
          }
          sc_showHiddenItems(v);
          if (opts.usePadding) {
            var e = $cfs.children().eq(opts.items.visible + n - 1);
            e.css(opts.d["marginRight"], e.data("_cfs_origCssMargin"))
          }
        };
        var U = sc_mapCallbackArguments(o, m, u, n, "prev", A, w);
        F = function() {
          sc_afterScroll($cfs, y, t);
          crsl.isScrolling = false;
          clbk.onAfter = sc_fireCallbacks($tt0, t, "onAfter", U, clbk);
          queu = sc_fireQueue($cfs, queu, conf);
          if (!crsl.isPaused) {
            $cfs.trigger(cf_e("play", conf))
          }
        };
        crsl.isScrolling = true;
        tmrs = sc_clearTimers(tmrs);
        clbk.onBefore = sc_fireCallbacks($tt0, t, "onBefore", U, clbk);
        switch (t.fx) {
          case "none":
            $cfs.css(S);
            O();
            _();
            P();
            B();
            q();
            I();
            F();
            break;
          case "fade":
            scrl.anims.push([$cfs, {
              opacity: 0
            }, function() {
              O();
              _();
              P();
              B();
              q();
              I();
              scrl = sc_setScroll(A, t.easing, conf);
              scrl.anims.push([$cfs, {
                opacity: 1
              }, F]);
              sc_startScroll(scrl, conf)
            }]);
            break;
          case "crossfade":
            $cfs.css({
              opacity: 0
            });
            scrl.anims.push([y, {
              opacity: 0
            }]);
            scrl.anims.push([$cfs, {
              opacity: 1
            }, F]);
            M();
            _();
            P();
            B();
            q();
            I();
            break;
          case "cover":
            scrl.anims.push([y, S, function() {
              _();
              P();
              B();
              q();
              I();
              F()
            }]);
            M();
            break;
          case "cover-fade":
            scrl.anims.push([$cfs, {
              opacity: 0
            }]);
            scrl.anims.push([y, S, function() {
              _();
              P();
              B();
              q();
              I();
              F()
            }]);
            M();
            break;
          case "uncover":
            scrl.anims.push([y, x, F]);
            M();
            _();
            P();
            B();
            q();
            I();
            break;
          case "uncover-fade":
            $cfs.css({
              opacity: 0
            });
            scrl.anims.push([$cfs, {
              opacity: 1
            }]);
            scrl.anims.push([y, x, F]);
            M();
            _();
            P();
            B();
            q();
            I();
            break;
          default:
            scrl.anims.push([$cfs, S, function() {
              I();
              F()
            }]);
            M();
            D();
            H();
            j();
            break
        }
        sc_startScroll(scrl, conf);
        cf_setCookie(opts.cookie, $cfs, conf);
        $cfs.trigger(cf_e("updatePageStatus", conf), [false, w]);
        return true
      });
      $cfs.bind(cf_e("slide_next", conf), function(e, t, n) {
        e.stopPropagation();
        var r = $cfs.children();
        if (!opts.circular) {
          if (itms.first == opts.items.visible) {
            if (opts.infinite) {
              $cfs.trigger(cf_e("prev", conf), itms.total - 1)
            }
            return e.stopImmediatePropagation()
          }
        }
        sz_resetMargin(r, opts);
        if (!is_number(n)) {
          if (opts.items.filter != "*") {
            var i = is_number(t.items) ? t.items : gn_getVisibleOrg($cfs, opts);
            n = gn_getScrollItemsNextFilter(r, opts, 0, i)
          } else {
            n = opts.items.visible
          }
          n = cf_getAdjust(n, opts, t.items, $tt0)
        }
        var s = itms.first == 0 ? itms.total : itms.first;
        if (!opts.circular) {
          if (opts.items.visibleConf.variable) {
            var o = gn_getVisibleItemsNext(r, opts, n),
              i = gn_getVisibleItemsPrev(r, opts, s - 1)
          } else {
            var o = opts.items.visible,
              i = opts.items.visible
          }
          if (n + o > s) {
            n = s - i
          }
        }
        opts.items.visibleConf.old = opts.items.visible;
        if (opts.items.visibleConf.variable) {
          var o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(r, opts, n, s), opts, opts.items.visibleConf.adjust, $tt0);
          while (opts.items.visible - n >= o && n < itms.total) {
            n++;
            o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(r, opts, n, s), opts, opts.items.visibleConf.adjust, $tt0)
          }
          opts.items.visible = o
        } else if (opts.items.filter != "*") {
          var o = gn_getVisibleItemsNextFilter(r, opts, n);
          opts.items.visible = cf_getItemsAdjust(o, opts, opts.items.visibleConf.adjust, $tt0)
        }
        sz_resetMargin(r, opts, true);
        if (n == 0) {
          e.stopImmediatePropagation();
          return debug(conf, "0 items to scroll: Not scrolling.")
        }
        debug(conf, "Scrolling " + n + " items forward.");
        itms.first -= n;
        while (itms.first < 0) {
          itms.first += itms.total
        }
        if (!opts.circular) {
          if (itms.first == opts.items.visible && t.onEnd) {
            t.onEnd.call($tt0, "next")
          }
          if (!opts.infinite) {
            nv_enableNavi(opts, itms.first, conf)
          }
        }
        if (itms.total < opts.items.visible + n) {
          $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(true).appendTo($cfs)
        }
        var r = $cfs.children(),
          u = gi_getOldItemsNext(r, opts),
          a = gi_getNewItemsNext(r, opts, n),
          f = r.eq(n - 1),
          l = u.last(),
          c = a.last();
        sz_resetMargin(r, opts);
        var h = 0,
          p = 0;
        if (opts.align) {
          var d = cf_getAlignPadding(a, opts);
          h = d[0];
          p = d[1]
        }
        var v = false,
          m = $();
        if (opts.items.visibleConf.old < n) {
          m = r.slice(opts.items.visibleConf.old, n);
          if (t.fx == "directscroll") {
            var g = opts.items[opts.d["width"]];
            v = m;
            f = l;
            sc_hideHiddenItems(v);
            opts.items[opts.d["width"]] = "variable"
          }
        }
        var y = false,
          b = ms_getTotalSize(r.slice(0, n), opts, "width"),
          w = cf_mapWrapperSizes(ms_getSizes(a, opts, true), opts, !opts.usePadding),
          E = 0,
          S = {},
          x = {},
          T = {},
          N = {},
          C = {},
          k = sc_getDuration(t, opts, n, b);
        switch (t.fx) {
          case "uncover":
          case "uncover-fade":
            E = ms_getTotalSize(r.slice(0, opts.items.visibleConf.old), opts, "width");
            break
        }
        if (v) {
          opts.items[opts.d["width"]] = g
        }
        if (opts.align) {
          if (opts.padding[opts.d[1]] < 0) {
            opts.padding[opts.d[1]] = 0
          }
        }
        sz_resetMargin(r, opts, true);
        sz_resetMargin(l, opts, opts.padding[opts.d[1]]);
        if (opts.align) {
          opts.padding[opts.d[1]] = p;
          opts.padding[opts.d[3]] = h
        }
        C[opts.d["left"]] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
        var L = function() {},
          A = function() {},
          O = function() {},
          M = function() {},
          _ = function() {},
          D = function() {},
          P = function() {},
          H = function() {},
          B = function() {};
        switch (t.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
          case "uncover":
          case "uncover-fade":
            y = $cfs.clone(true).appendTo($wrp);
            y.children().slice(opts.items.visibleConf.old).remove();
            break
        }
        switch (t.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
            $cfs.css("zIndex", 1);
            y.css("zIndex", 0);
            break
        }
        scrl = sc_setScroll(k, t.easing, conf);
        S[opts.d["left"]] = -b;
        x[opts.d["left"]] = -E;
        if (h < 0) {
          S[opts.d["left"]] += h
        }
        if (opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
          L = function() {
            $wrp.css(w)
          };
          A = function() {
            scrl.anims.push([$wrp, w])
          }
        }
        if (opts.usePadding) {
          var j = c.data("_cfs_origCssMargin");
          if (p >= 0) {
            j += opts.padding[opts.d[1]]
          }
          c.css(opts.d["marginRight"], j);
          if (f.not(l).length) {
            N[opts.d["marginRight"]] = l.data("_cfs_origCssMargin")
          }
          O = function() {
            l.css(N)
          };
          M = function() {
            scrl.anims.push([l, N])
          };
          var F = f.data("_cfs_origCssMargin");
          if (h > 0) {
            F += opts.padding[opts.d[3]]
          }
          T[opts.d["marginRight"]] = F;
          _ = function() {
            f.css(T)
          };
          D = function() {
            scrl.anims.push([f, T])
          }
        }
        B = function() {
          $cfs.css(C)
        };
        var I = opts.items.visible + n - itms.total;
        H = function() {
          if (I > 0) {
            $cfs.children().slice(itms.total).remove()
          }
          var e = $cfs.children().slice(0, n).appendTo($cfs).last();
          if (I > 0) {
            a = gi_getCurrentItems(r, opts)
          }
          sc_showHiddenItems(v);
          if (opts.usePadding) {
            if (itms.total < opts.items.visible + n) {
              var t = $cfs.children().eq(opts.items.visible - 1);
              t.css(opts.d["marginRight"], t.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
            }
            e.css(opts.d["marginRight"], e.data("_cfs_origCssMargin"))
          }
        };
        var q = sc_mapCallbackArguments(u, m, a, n, "next", k, w);
        P = function() {
          $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex"));
          sc_afterScroll($cfs, y, t);
          crsl.isScrolling = false;
          clbk.onAfter = sc_fireCallbacks($tt0, t, "onAfter", q, clbk);
          queu = sc_fireQueue($cfs, queu, conf);
          if (!crsl.isPaused) {
            $cfs.trigger(cf_e("play", conf))
          }
        };
        crsl.isScrolling = true;
        tmrs = sc_clearTimers(tmrs);
        clbk.onBefore = sc_fireCallbacks($tt0, t, "onBefore", q, clbk);
        switch (t.fx) {
          case "none":
            $cfs.css(S);
            L();
            O();
            _();
            B();
            H();
            P();
            break;
          case "fade":
            scrl.anims.push([$cfs, {
              opacity: 0
            }, function() {
              L();
              O();
              _();
              B();
              H();
              scrl = sc_setScroll(k, t.easing, conf);
              scrl.anims.push([$cfs, {
                opacity: 1
              }, P]);
              sc_startScroll(scrl, conf)
            }]);
            break;
          case "crossfade":
            $cfs.css({
              opacity: 0
            });
            scrl.anims.push([y, {
              opacity: 0
            }]);
            scrl.anims.push([$cfs, {
              opacity: 1
            }, P]);
            A();
            O();
            _();
            B();
            H();
            break;
          case "cover":
            $cfs.css(opts.d["left"], $wrp[opts.d["width"]]());
            scrl.anims.push([$cfs, C, P]);
            A();
            O();
            _();
            H();
            break;
          case "cover-fade":
            $cfs.css(opts.d["left"], $wrp[opts.d["width"]]());
            scrl.anims.push([y, {
              opacity: 0
            }]);
            scrl.anims.push([$cfs, C, P]);
            A();
            O();
            _();
            H();
            break;
          case "uncover":
            scrl.anims.push([y, x, P]);
            A();
            O();
            _();
            B();
            H();
            break;
          case "uncover-fade":
            $cfs.css({
              opacity: 0
            });
            scrl.anims.push([$cfs, {
              opacity: 1
            }]);
            scrl.anims.push([y, x, P]);
            A();
            O();
            _();
            B();
            H();
            break;
          default:
            scrl.anims.push([$cfs, S, function() {
              B();
              H();
              P()
            }]);
            A();
            M();
            D();
            break
        }
        sc_startScroll(scrl, conf);
        cf_setCookie(opts.cookie, $cfs, conf);
        $cfs.trigger(cf_e("updatePageStatus", conf), [false, w]);
        return true
      });
      $cfs.bind(cf_e("slideTo", conf), function(e, t, n, r, i, s, o) {
        e.stopPropagation();
        var u = [t, n, r, i, s, o],
          a = ["string/number/object", "number", "boolean", "object", "string", "function"],
          f = cf_sortParams(u, a);
        i = f[3];
        s = f[4];
        o = f[5];
        t = gn_getItemIndex(f[0], f[1], f[2], itms, $cfs);
        if (t == 0) {
          return false
        }
        if (!is_object(i)) {
          i = false
        }
        if (s != "prev" && s != "next") {
          if (opts.circular) {
            s = t <= itms.total / 2 ? "next" : "prev"
          } else {
            s = itms.first == 0 || itms.first > t ? "next" : "prev"
          }
        }
        if (s == "prev") {
          t = itms.total - t
        }
        $cfs.trigger(cf_e(s, conf), [i, t, o]);
        return true
      });
      $cfs.bind(cf_e("prevPage", conf), function(e, t, n) {
        e.stopPropagation();
        var r = $cfs.triggerHandler(cf_e("currentPage", conf));
        return $cfs.triggerHandler(cf_e("slideToPage", conf), [r - 1, t, "prev", n])
      });
      $cfs.bind(cf_e("nextPage", conf), function(e, t, n) {
        e.stopPropagation();
        var r = $cfs.triggerHandler(cf_e("currentPage", conf));
        return $cfs.triggerHandler(cf_e("slideToPage", conf), [r + 1, t, "next", n])
      });
      $cfs.bind(cf_e("slideToPage", conf), function(e, t, n, r, i) {
        e.stopPropagation();
        if (!is_number(t)) {
          t = $cfs.triggerHandler(cf_e("currentPage", conf))
        }
        var s = opts.pagination.items || opts.items.visible,
          o = Math.ceil(itms.total / s) - 1;
        if (t < 0) {
          t = o
        }
        if (t > o) {
          t = 0
        }
        return $cfs.triggerHandler(cf_e("slideTo", conf), [t * s, 0, true, n, r, i])
      });
      $cfs.bind(cf_e("jumpToStart", conf), function(e, t) {
        e.stopPropagation();
        if (t) {
          t = gn_getItemIndex(t, 0, true, itms, $cfs)
        } else {
          t = 0
        }
        t += itms.first;
        if (t != 0) {
          if (itms.total > 0) {
            while (t > itms.total) {
              t -= itms.total
            }
          }
          $cfs.prepend($cfs.children().slice(t, itms.total))
        }
        return true
      });
      $cfs.bind(cf_e("synchronise", conf), function(e, t) {
        e.stopPropagation();
        if (t) {
          t = cf_getSynchArr(t)
        } else if (opts.synchronise) {
          t = opts.synchronise
        } else {
          return debug(conf, "No carousel to synchronise.")
        }
        var n = $cfs.triggerHandler(cf_e("currentPosition", conf)),
          r = true;
        for (var i = 0, s = t.length; i < s; i++) {
          if (!t[i][0].triggerHandler(cf_e("slideTo", conf), [n, t[i][3], true])) {
            r = false
          }
        }
        return r
      });
      $cfs.bind(cf_e("queue", conf), function(e, t, n) {
        e.stopPropagation();
        if (is_function(t)) {
          t.call($tt0, queu)
        } else if (is_array(t)) {
          queu = t
        } else if (!is_undefined(t)) {
          queu.push([t, n])
        }
        return queu
      });
      $cfs.bind(cf_e("insertItem", conf), function(e, t, n, r, i) {
        e.stopPropagation();
        var s = [t, n, r, i],
          o = ["string/object", "string/number/object", "boolean", "number"],
          u = cf_sortParams(s, o);
        t = u[0];
        n = u[1];
        r = u[2];
        i = u[3];
        if (is_object(t) && !is_jquery(t)) {
          t = $(t)
        } else if (is_string(t)) {
          t = $(t)
        }
        if (!is_jquery(t) || t.length == 0) {
          return debug(conf, "Not a valid object.")
        }
        if (is_undefined(n)) {
          n = "end"
        }
        sz_storeMargin(t, opts);
        sz_storeOrigCss(t);
        var a = n,
          f = "before";
        if (n == "end") {
          if (r) {
            if (itms.first == 0) {
              n = itms.total - 1;
              f = "after"
            } else {
              n = itms.first;
              itms.first += t.length
            }
            if (n < 0) {
              n = 0
            }
          } else {
            n = itms.total - 1;
            f = "after"
          }
        } else {
          n = gn_getItemIndex(n, i, r, itms, $cfs)
        }
        var l = $cfs.children().eq(n);
        if (l.length) {
          l[f](t)
        } else {
          debug(conf, "Correct insert-position not found! Appending item to the end.");
          $cfs.append(t)
        }
        if (a != "end" && !r) {
          if (n < itms.first) {
            itms.first += t.length
          }
        }
        itms.total = $cfs.children().length;
        if (itms.first >= itms.total) {
          itms.first -= itms.total
        }
        $cfs.trigger(cf_e("updateSizes", conf));
        $cfs.trigger(cf_e("linkAnchors", conf));
        return true
      });
      $cfs.bind(cf_e("removeItem", conf), function(e, t, n, r) {
        e.stopPropagation();
        var i = [t, n, r],
          s = ["string/number/object", "boolean", "number"],
          o = cf_sortParams(i, s);
        t = o[0];
        n = o[1];
        r = o[2];
        var u = false;
        if (t instanceof $ && t.length > 1) {
          a = $();
          t.each(function(e, t) {
            var i = $cfs.trigger(cf_e("removeItem", conf), [$(this), n, r]);
            if (i) {
              a = a.add(i)
            }
          });
          return a
        }
        if (is_undefined(t) || t == "end") {
          a = $cfs.children().last()
        } else {
          t = gn_getItemIndex(t, r, n, itms, $cfs);
          var a = $cfs.children().eq(t);
          if (a.length) {
            if (t < itms.first) {
              itms.first -= a.length
            }
          }
        }
        if (a && a.length) {
          a.detach();
          itms.total = $cfs.children().length;
          $cfs.trigger(cf_e("updateSizes", conf))
        }
        return a
      });
      $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(e, t) {
        e.stopPropagation();
        var n = e.type.slice(conf.events.prefix.length);
        if (is_array(t)) {
          clbk[n] = t
        }
        if (is_function(t)) {
          clbk[n].push(t)
        }
        return clbk[n]
      });
      $cfs.bind(cf_e("currentPosition", conf), function(e, t) {
        e.stopPropagation();
        if (itms.first == 0) {
          var n = 0
        } else {
          var n = itms.total - itms.first
        }
        if (is_function(t)) {
          t.call($tt0, n)
        }
        return n
      });
      $cfs.bind(cf_e("currentPage", conf), function(e, t) {
        e.stopPropagation();
        var n = opts.pagination.items || opts.items.visible,
          r = Math.ceil(itms.total / n - 1),
          i;
        if (itms.first == 0) {
          i = 0
        } else if (itms.first < itms.total % n) {
          i = 0
        } else if (itms.first == n && !opts.circular) {
          i = r
        } else {
          i = Math.round((itms.total - itms.first) / n)
        }
        if (i < 0) {
          i = 0
        }
        if (i > r) {
          i = r
        }
        if (is_function(t)) {
          t.call($tt0, i)
        }
        return i
      });
      $cfs.bind(cf_e("currentVisible", conf), function(e, t) {
        e.stopPropagation();
        var n = gi_getCurrentItems($cfs.children(), opts);
        if (is_function(t)) {
          t.call($tt0, n)
        }
        return n
      });
      $cfs.bind(cf_e("slice", conf), function(e, t, n, r) {
        e.stopPropagation();
        if (itms.total == 0) {
          return false
        }
        var i = [t, n, r],
          s = ["number", "number", "function"],
          o = cf_sortParams(i, s);
        t = is_number(o[0]) ? o[0] : 0;
        n = is_number(o[1]) ? o[1] : itms.total;
        r = o[2];
        t += itms.first;
        n += itms.first;
        if (items.total > 0) {
          while (t > itms.total) {
            t -= itms.total
          }
          while (n > itms.total) {
            n -= itms.total
          }
          while (t < 0) {
            t += itms.total
          }
          while (n < 0) {
            n += itms.total
          }
        }
        var u = $cfs.children(),
          a;
        if (n > t) {
          a = u.slice(t, n)
        } else {
          a = $(u.slice(t, itms.total).get().concat(u.slice(0, n).get()))
        }
        if (is_function(r)) {
          r.call($tt0, a)
        }
        return a
      });
      $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(e, t) {
        e.stopPropagation();
        var n = e.type.slice(conf.events.prefix.length),
          r = crsl[n];
        if (is_function(t)) {
          t.call($tt0, r)
        }
        return r
      });
      $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
        e.stopPropagation();
        var reInit = false;
        if (is_function(a)) {
          a.call($tt0, opts)
        } else if (is_object(a)) {
          opts_orig = $.extend(true, {}, opts_orig, a);
          if (b !== false) reInit = true;
          else opts = $.extend(true, {}, opts, a)
        } else if (!is_undefined(a)) {
          if (is_function(b)) {
            var val = eval("opts." + a);
            if (is_undefined(val)) {
              val = ""
            }
            b.call($tt0, val)
          } else if (!is_undefined(b)) {
            if (typeof c !== "boolean") c = true;
            eval("opts_orig." + a + " = b");
            if (c !== false) reInit = true;
            else eval("opts." + a + " = b")
          } else {
            return eval("opts." + a)
          }
        }
        if (reInit) {
          sz_resetMargin($cfs.children(), opts);
          FN._init(opts_orig);
          FN._bind_buttons();
          var sz = sz_setSizes($cfs, opts);
          $cfs.trigger(cf_e("updatePageStatus", conf), [true, sz])
        }
        return opts
      });
      $cfs.bind(cf_e("linkAnchors", conf), function(e, t, n) {
        e.stopPropagation();
        if (is_undefined(t)) {
          t = $("body")
        } else if (is_string(t)) {
          t = $(t)
        }
        if (!is_jquery(t) || t.length == 0) {
          return debug(conf, "Not a valid object.")
        }
        if (!is_string(n)) {
          n = "a.caroufredsel"
        }
        t.find(n).each(function() {
          var e = this.hash || "";
          if (e.length > 0 && $cfs.children().index($(e)) != -1) {
            $(this).unbind("click").click(function(t) {
              t.preventDefault();
              $cfs.trigger(cf_e("slideTo", conf), e)
            })
          }
        });
        return true
      });
      $cfs.bind(cf_e("updatePageStatus", conf), function(e, t, n) {
        e.stopPropagation();
        if (!opts.pagination.container) {
          return
        }
        var r = opts.pagination.items || opts.items.visible,
          i = Math.ceil(itms.total / r);
        if (t) {
          if (opts.pagination.anchorBuilder) {
            opts.pagination.container.children().remove();
            opts.pagination.container.each(function() {
              for (var e = 0; e < i; e++) {
                var t = $cfs.children().eq(gn_getItemIndex(e * r, 0, true, itms, $cfs));
                $(this).append(opts.pagination.anchorBuilder.call(t[0], e + 1))
              }
            })
          }
          opts.pagination.container.each(function() {
            $(this).children().unbind(opts.pagination.event).each(function(e) {
              $(this).bind(opts.pagination.event, function(t) {
                t.preventDefault();
                $cfs.trigger(cf_e("slideTo", conf), [e * r, -opts.pagination.deviation, true, opts.pagination])
              })
            })
          })
        }
        var s = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
        if (s >= i) {
          s = 0
        }
        if (s < 0) {
          s = i - 1
        }
        opts.pagination.container.each(function() {
          $(this).children().removeClass(cf_c("selected", conf)).eq(s).addClass(cf_c("selected", conf))
        });
        return true
      });
      $cfs.bind(cf_e("updateSizes", conf), function(e) {
        var t = opts.items.visible,
          n = $cfs.children(),
          r = ms_getParentSize($wrp, opts, "width");
        itms.total = n.length;
        if (crsl.primarySizePercentage) {
          opts.maxDimension = r;
          opts[opts.d["width"]] = ms_getPercentage(r, crsl.primarySizePercentage)
        } else {
          opts.maxDimension = ms_getMaxDimension(opts, r)
        }
        if (opts.responsive) {
          opts.items.width = opts.items.sizesConf.width;
          opts.items.height = opts.items.sizesConf.height;
          opts = in_getResponsiveValues(opts, n, r);
          t = opts.items.visible;
          sz_setResponsiveSizes(opts, n)
        } else if (opts.items.visibleConf.variable) {
          t = gn_getVisibleItemsNext(n, opts, 0)
        } else if (opts.items.filter != "*") {
          t = gn_getVisibleItemsNextFilter(n, opts, 0)
        }
        if (!opts.circular && itms.first != 0 && t > itms.first) {
          if (opts.items.visibleConf.variable) {
            var i = gn_getVisibleItemsPrev(n, opts, itms.first) - itms.first
          } else if (opts.items.filter != "*") {
            var i = gn_getVisibleItemsPrevFilter(n, opts, itms.first) - itms.first
          } else {
            var i = opts.items.visible - itms.first
          }
          debug(conf, "Preventing non-circular: sliding " + i + " items backward.");
          $cfs.trigger(cf_e("prev", conf), i)
        }
        opts.items.visible = cf_getItemsAdjust(t, opts, opts.items.visibleConf.adjust, $tt0);
        opts.items.visibleConf.old = opts.items.visible;
        opts = in_getAlignPadding(opts, n);
        var s = sz_setSizes($cfs, opts);
        $cfs.trigger(cf_e("updatePageStatus", conf), [true, s]);
        nv_showNavi(opts, itms.total, conf);
        nv_enableNavi(opts, itms.first, conf);
        return s
      });
      $cfs.bind(cf_e("destroy", conf), function(e, t) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        $cfs.data("_cfs_isCarousel", false);
        $cfs.trigger(cf_e("finish", conf));
        if (t) {
          $cfs.trigger(cf_e("jumpToStart", conf))
        }
        sz_restoreOrigCss($cfs.children());
        sz_restoreOrigCss($cfs);
        FN._unbind_events();
        FN._unbind_buttons();
        if (conf.wrapper == "parent") {
          sz_restoreOrigCss($wrp)
        } else {
          $wrp.replaceWith($cfs)
        }
        return true
      });
      $cfs.bind(cf_e("debug", conf), function(e) {
        debug(conf, "Carousel width: " + opts.width);
        debug(conf, "Carousel height: " + opts.height);
        debug(conf, "Item widths: " + opts.items.width);
        debug(conf, "Item heights: " + opts.items.height);
        debug(conf, "Number of items visible: " + opts.items.visible);
        if (opts.auto.play) {
          debug(conf, "Number of items scrolled automatically: " + opts.auto.items)
        }
        if (opts.prev.button) {
          debug(conf, "Number of items scrolled backward: " + opts.prev.items)
        }
        if (opts.next.button) {
          debug(conf, "Number of items scrolled forward: " + opts.next.items)
        }
        return conf.debug
      });
      $cfs.bind("_cfs_triggerEvent", function(e, t, n) {
        e.stopPropagation();
        return $cfs.triggerHandler(cf_e(t, conf), n)
      })
    };
    FN._unbind_events = function() {
      $cfs.unbind(cf_e("", conf));
      $cfs.unbind(cf_e("", conf, false));
      $cfs.unbind("_cfs_triggerEvent")
    };
    FN._bind_buttons = function() {
      FN._unbind_buttons();
      nv_showNavi(opts, itms.total, conf);
      nv_enableNavi(opts, itms.first, conf);
      if (opts.auto.pauseOnHover) {
        var e = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
        $wrp.bind(cf_e("mouseenter", conf, false), function() {
          $cfs.trigger(cf_e("pause", conf), e)
        }).bind(cf_e("mouseleave", conf, false), function() {
          $cfs.trigger(cf_e("resume", conf))
        })
      }
      if (opts.auto.button) {
        opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function(e) {
          e.preventDefault();
          var t = false,
            n = null;
          if (crsl.isPaused) {
            t = "play"
          } else if (opts.auto.pauseOnEvent) {
            t = "pause";
            n = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)
          }
          if (t) {
            $cfs.trigger(cf_e(t, conf), n)
          }
        })
      }
      if (opts.prev.button) {
        opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function(e) {
          e.preventDefault();
          $cfs.trigger(cf_e("prev", conf))
        });
        if (opts.prev.pauseOnHover) {
          var e = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
          opts.prev.button.bind(cf_e("mouseenter", conf, false), function() {
            $cfs.trigger(cf_e("pause", conf), e)
          }).bind(cf_e("mouseleave", conf, false), function() {
            $cfs.trigger(cf_e("resume", conf))
          })
        }
      }
      if (opts.next.button) {
        opts.next.button.bind(cf_e(opts.next.event, conf, false), function(e) {
          e.preventDefault();
          $cfs.trigger(cf_e("next", conf))
        });
        if (opts.next.pauseOnHover) {
          var e = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
          opts.next.button.bind(cf_e("mouseenter", conf, false), function() {
            $cfs.trigger(cf_e("pause", conf), e)
          }).bind(cf_e("mouseleave", conf, false), function() {
            $cfs.trigger(cf_e("resume", conf))
          })
        }
      }
      if (opts.pagination.container) {
        if (opts.pagination.pauseOnHover) {
          var e = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
          opts.pagination.container.bind(cf_e("mouseenter", conf, false), function() {
            $cfs.trigger(cf_e("pause", conf), e)
          }).bind(cf_e("mouseleave", conf, false), function() {
            $cfs.trigger(cf_e("resume", conf))
          })
        }
      }
      if (opts.prev.key || opts.next.key) {
        $(document).bind(cf_e("keyup", conf, false, true, true), function(e) {
          var t = e.keyCode;
          if (t == opts.next.key) {
            e.preventDefault();
            $cfs.trigger(cf_e("next", conf))
          }
          if (t == opts.prev.key) {
            e.preventDefault();
            $cfs.trigger(cf_e("prev", conf))
          }
        })
      }
      if (opts.pagination.keys) {
        $(document).bind(cf_e("keyup", conf, false, true, true), function(e) {
          var t = e.keyCode;
          if (t >= 49 && t < 58) {
            t = (t - 49) * opts.items.visible;
            if (t <= itms.total) {
              e.preventDefault();
              $cfs.trigger(cf_e("slideTo", conf), [t, 0, true, opts.pagination])
            }
          }
        })
      }
      if ($.fn.swipe) {
        var t = "ontouchstart" in window;
        if (t && opts.swipe.onTouch || !t && opts.swipe.onMouse) {
          var n = $.extend(true, {}, opts.prev, opts.swipe),
            r = $.extend(true, {}, opts.next, opts.swipe),
            i = function() {
              $cfs.trigger(cf_e("prev", conf), [n])
            },
            s = function() {
              $cfs.trigger(cf_e("next", conf), [r])
            };
          switch (opts.direction) {
            case "up":
            case "down":
              opts.swipe.options.swipeUp = s;
              opts.swipe.options.swipeDown = i;
              break;
            default:
              opts.swipe.options.swipeLeft = s;
              opts.swipe.options.swipeRight = i
          }
          if (crsl.swipe) {
            $cfs.swipe("destroy")
          }
          $wrp.swipe(opts.swipe.options);
          $wrp.css("cursor", "move");
          crsl.swipe = true
        }
      }
      if ($.fn.mousewheel) {
        if (opts.mousewheel) {
          var o = $.extend(true, {}, opts.prev, opts.mousewheel),
            u = $.extend(true, {}, opts.next, opts.mousewheel);
          if (crsl.mousewheel) {
            $wrp.unbind(cf_e("mousewheel", conf, false))
          }
          $wrp.bind(cf_e("mousewheel", conf, false), function(e, t) {
            e.preventDefault();
            if (t > 0) {
              $cfs.trigger(cf_e("prev", conf), [o])
            } else {
              $cfs.trigger(cf_e("next", conf), [u])
            }
          });
          crsl.mousewheel = true
        }
      }
      if (opts.auto.play) {
        $cfs.trigger(cf_e("play", conf), opts.auto.delay)
      }
      if (crsl.upDateOnWindowResize) {
        var a, f;
        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) <= 8) {
          var l = function(e) {
            if (a == undefined || a != $(window).height() || f == undefined || f != $(window).width()) {
              $cfs.trigger(cf_e("finish", conf));
              if (opts.auto.pauseOnResize && !crsl.isPaused) {
                $cfs.trigger(cf_e("play", conf))
              }
              sz_resetMargin($cfs.children(), opts);
              $cfs.trigger(cf_e("updateSizes", conf));
              a = $(window).height();
              f = $(window).width()
            }
          }
        } else {
          var l = function(e) {
            $cfs.trigger(cf_e("finish", conf));
            if (opts.auto.pauseOnResize && !crsl.isPaused) {
              $cfs.trigger(cf_e("play", conf))
            }
            sz_resetMargin($cfs.children(), opts);
            $cfs.trigger(cf_e("updateSizes", conf))
          }
        }
        var c = $(window),
          h = null;
        if ($.debounce && conf.onWindowResize == "debounce") {
          h = $.debounce(200, l)
        } else if ($.throttle && conf.onWindowResize == "throttle") {
          h = $.throttle(300, l)
        } else {
          var p = 0,
            d = 0;
          h = function() {
            var e = c.width(),
              t = c.height();
            if (e != p || t != d) {
              l();
              p = e;
              d = t
            }
          }
        }
        c.bind(cf_e("resize", conf, false, true, true), h)
      }
    };
    FN._unbind_buttons = function() {
      var e = cf_e("", conf),
        t = cf_e("", conf, false);
      ns3 = cf_e("", conf, false, true, true);
      $(document).unbind(ns3);
      $(window).unbind(ns3);
      $wrp.unbind(t);
      if (opts.auto.button) {
        opts.auto.button.unbind(t)
      }
      if (opts.prev.button) {
        opts.prev.button.unbind(t)
      }
      if (opts.next.button) {
        opts.next.button.unbind(t)
      }
      if (opts.pagination.container) {
        opts.pagination.container.unbind(t);
        if (opts.pagination.anchorBuilder) {
          opts.pagination.container.children().remove()
        }
      }
      if (crsl.swipe) {
        $cfs.swipe("destroy");
        $wrp.css("cursor", "default");
        crsl.swipe = false
      }
      if (crsl.mousewheel) {
        crsl.mousewheel = false
      }
      nv_showNavi(opts, "hide", conf);
      nv_enableNavi(opts, "removeClass", conf)
    };
    if (is_boolean(configs)) {
      configs = {
        debug: configs
      }
    }
    var crsl = {
        direction: "next",
        isPaused: true,
        isScrolling: false,
        isStopped: false,
        mousewheel: false,
        swipe: false
      },
      itms = {
        total: $cfs.children().length,
        first: 0
      },
      tmrs = {
        auto: null,
        progress: null,
        startTime: getTime(),
        timePassed: 0
      },
      scrl = {
        isStopped: false,
        duration: 0,
        startTime: 0,
        easing: "",
        anims: []
      },
      clbk = {
        onBefore: [],
        onAfter: []
      },
      queu = [],
      conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs),
      opts = {},
      opts_orig = $.extend(true, {}, options),
      $wrp = conf.wrapper == "parent" ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
    conf.selector = $cfs.selector;
    conf.serialNumber = $.fn.carouFredSel.serialNumber++;
    conf.transition = conf.transition && $.fn.transition ? "transition" : "animate";
    FN._init(opts_orig, true, starting_position);
    FN._build();
    FN._bind_events();
    FN._bind_buttons();
    if (is_array(opts.items.start)) {
      var start_arr = opts.items.start
    } else {
      var start_arr = [];
      if (opts.items.start != 0) {
        start_arr.push(opts.items.start)
      }
    }
    if (opts.cookie) {
      start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10))
    }
    if (start_arr.length > 0) {
      for (var a = 0, l = start_arr.length; a < l; a++) {
        var s = start_arr[a];
        if (s == 0) {
          continue
        }
        if (s === true) {
          s = window.location.hash;
          if (s.length < 1) {
            continue
          }
        } else if (s === "random") {
          s = Math.floor(Math.random() * itms.total)
        }
        if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, true, {
            fx: "none"
          }])) {
          break
        }
      }
    }
    var siz = sz_setSizes($cfs, opts),
      itm = gi_getCurrentItems($cfs.children(), opts);
    if (opts.onCreate) {
      opts.onCreate.call($tt0, {
        width: siz.width,
        height: siz.height,
        items: itm
      })
    }
    $cfs.trigger(cf_e("updatePageStatus", conf), [true, siz]);
    $cfs.trigger(cf_e("linkAnchors", conf));
    if (conf.debug) {
      $cfs.trigger(cf_e("debug", conf))
    }
    return $cfs
  };
  $.fn.carouFredSel.serialNumber = 1;
  $.fn.carouFredSel.defaults = {
    synchronise: false,
    infinite: true,
    circular: true,
    responsive: false,
    direction: "left",
    items: {
      start: 0
    },
    scroll: {
      easing: "swing",
      duration: 500,
      pauseOnHover: false,
      event: "click",
      queue: false
    }
  };
  $.fn.carouFredSel.configs = {
    debug: false,
    transition: false,
    onWindowResize: "throttle",
    events: {
      prefix: "",
      namespace: "cfs"
    },
    wrapper: {
      element: "div",
      classname: "caroufredsel_wrapper"
    },
    classnames: {}
  };
  $.fn.carouFredSel.pageAnchorBuilder = function(e) {
    return '<a href="#"><span>' + e + "</span></a>"
  };
  $.fn.carouFredSel.progressbarUpdater = function(e) {
    $(this).css("width", e + "%")
  };
  $.fn.carouFredSel.cookie = {
    get: function(e) {
      e += "=";
      var t = document.cookie.split(";");
      for (var n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        while (i.charAt(0) == " ") {
          i = i.slice(1)
        }
        if (i.indexOf(e) == 0) {
          return i.slice(e.length)
        }
      }
      return 0
    },
    set: function(e, t, n) {
      var r = "";
      if (n) {
        var i = new Date;
        i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
        r = "; expires=" + i.toGMTString()
      }
      document.cookie = e + "=" + t + r + "; path=/"
    },
    remove: function(e) {
      $.fn.carouFredSel.cookie.set(e, "", -1)
    }
  };
  $.extend($.easing, {
    quadratic: function(e) {
      var t = e * e;
      return e * (-t * e + 4 * t - 6 * e + 4)
    },
    cubic: function(e) {
      return e * (4 * e * e - 9 * e + 6)
    },
    elastic: function(e) {
      var t = e * e;
      return e * (33 * t * t - 106 * t * e + 126 * t - 67 * e + 15)
    }
  })
})(jQuery);
$(document).ready(function() {
  $(window).on('hover', function(e) {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  });
  var _topSticky = $('.nav').outerHeight(true);
  if (typeof(FIELD_stickyMenu) != 'undefined' && FIELD_stickyMenu) {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= _topSticky) {
        $('.header_bottom').addClass('fieldmegamenu-sticky');
      } else {
        $('.header_bottom').removeClass('fieldmegamenu-sticky');
      }
    });
  }
  if (typeof(FIELD_stickySearch) != 'undefined' && FIELD_stickySearch) {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= _topSticky) {
        $('#search_block_top').addClass('search-sticky');
      } else {
        $('#search_block_top').removeClass('search-sticky');
      }
    });
  }
  if (typeof(FIELD_stickyCart) != 'undefined' && FIELD_stickyCart) {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= _topSticky) {
        $('.shopping_cart_menu').addClass('cart-sticky');
      } else {
        $('.shopping_cart_menu').removeClass('cart-sticky');
      }
    });
  }
  fieldmegamm();
  initScrollTop();
});
$(window).load(function() {
  if (typeof(FIELD_enableCountdownTimer) != 'undefined' && FIELD_enableCountdownTimer) {
    $('.item-countdown-time').each(function() {
      initCountdown($(this));
    });
  }
  if (LANG_RTL != 1) {
    LoadPercCMS();
  } else {
    LoadPercCMS_rtl();
  }
});

function initCountdown(el) {
  el.countdown(el.attr('data-time')).on('update.countdown', function(event) {
    var format = '';
    if (event.offset.totalDays > 1) {
      format = format + '<span class="section_cout"><span class="Days">%D </span><span class="text">' + countdownDays + '</span></span>';
    } else {
      format = format + '<span class="section_cout"><span class="Days">%D </span><span class="text">' + countdownDay + '</span></span>';
    }
    if (event.offset.hours > 1) {
      format = format + '<span class="section_cout"><span class="Hours">%H </span><span class="text">' + countdownHours + '</span></span>';
    } else {
      format = format + '<span class="section_cout"><span class="Hours">%H </span><span class="text">' + countdownHour + '</span></span>';
    }
    if (event.offset.minutes > 1) {
      format = format + '<span class="section_cout"><span class="Minutes">%M </span><span class="text">' + countdownMinutes + '</span></span>';
    } else {
      format = format + '<span class="section_cout"><span class="Minutes">%M </span><span class="text">' + countdownMinute + '</span></span>';
    }
    if (event.offset.seconds > 1) {
      format = format + '<span class="section_cout"><span class="Seconds">%S </span><span class="text">' + countdownSeconds + '</span></span>';
    } else {
      format = format + '<span class="section_cout"><span class="Seconds">%S </span><span class="text">' + countdownSecond + '</span></span>';
    }
    el.html(event.strftime(format)).fadeIn();
  });
}

function initScrollTop() {
  var el = $('#back-top');
  if ($(this).scrollTop() > 100) {
    el.fadeIn();
  } else {
    el.fadeOut();
  }
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      el.fadeIn();
    } else {
      el.fadeOut();
    }
  });
  el.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, '400');
  });
}

function fieldmegamm() {
  elementClick1 = '#fieldmm-button';
  elementSlide1 = 'nav#fieldmegamenu-mobile';
  $(elementClick1).on('click', function(e) {
    e.stopPropagation();
    var subUl = $(this).next(elementSlide1);
    if (subUl.hasClass('inactive')) {
      subUl.removeClass('inactive');
      subUl.addClass('active');
    } else {
      subUl.removeClass('active');
      subUl.addClass('inactive');
    }
    e.preventDefault();
  });
  $(elementSlide1).on('click', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', function(e) {
    e.stopPropagation();
    var elementHide1 = $(elementClick1).next(elementSlide1);
    $(elementHide1).addClass('inactive');
    $(elementHide1).removeClass('active');
  });
}

function LoadPercCMS() {
  $('.cms-line').each(function() {
    var t = $(this);
    var dataperc = t.attr('id'),
      dataperc_int = dataperc.replace("a", ""),
      barperc = Math.round(dataperc_int);
    t.find('.cms-line-comp').animate({
      width: barperc + "%"
    }, dataperc_int * 25);
    t.find('.label').append('<div class="perc"></div>');

    function perc() {
      var t_length = parseInt($('.cms-line').css('width'));
      var length = t.find('.cms-line-comp').css('width'),
        perc_div = (parseInt(length) / t_length * 100),
        perc = Math.round(parseInt(perc_div)),
        labelpos = (100 - perc);
      t.find('.label').css('right', labelpos + '%');
      t.find('.perc').text(perc + '%');
    }
    perc();
    setInterval(perc, 0);
  });
}

function LoadPercCMS_rtl() {
  $('.cms-line').each(function() {
    var t = $(this);
    var dataperc = t.attr('id'),
      dataperc_int = dataperc.replace("a", ""),
      barperc = Math.round(dataperc_int);
    t.find('.cms-line-comp').animate({
      width: barperc + "%"
    }, dataperc_int * 25);
    t.find('.label').append('<div class="perc"></div>');

    function perc() {
      var t_length = parseInt($('.cms-line').css('width'));
      var length = t.find('.cms-line-comp').css('width'),
        perc_div = (parseInt(length) / t_length * 100),
        perc = Math.round(parseInt(perc_div)),
        labelpos = (100 - perc);
      t.find('.label').css('left', labelpos + '%');
      t.find('.perc').text(perc + '%');
    }
    perc();
    setInterval(perc, 0);
  });
};﻿
(function(h, e, b, i, c, g, j) { /*! Jssor */
  new(function() {
    this.$DebugMode = c;
    this.$Log = function(c, d) {
      var a = h.console || {},
        b = this.$DebugMode;
      if (b && a.log)
        a.log(c);
      else
        b && d && alert(c)
    };
    this.$Error = function(b, d) {
      var c = h.console || {},
        a = this.$DebugMode;
      if (a && c.error)
        c.error(b);
      else
        a && alert(b);
      if (a)
        throw d || new Error(b);
    };
    this.$Fail = function(a) {
      throw new Error(a);
    };
    this.$Assert = function(b, c) {
      var a = this.$DebugMode;
      if (a)
        if (!b)
          throw new Error("Assert failed " + c || "");
    };
    this.$Trace = function(c) {
      var a = h.console || {},
        b = this.$DebugMode;
      b && a.log && a.log(c)
    };
    this.$Execute = function(b) {
      var a = this.$DebugMode;
      a && b()
    };
    this.$LiveStamp = function(c, d) {
      var b = this.$DebugMode;
      if (b) {
        var a = e.createElement("DIV");
        a.setAttribute("id", d);
        c.$Live = a
      }
    };
    this.$C_AbstractProperty = function() {
      throw new Error("The property is abstract, it should be implemented by subclass.");
    };
    this.$C_AbstractMethod = function() {
      throw new Error("The method is abstract, it should be implemented by subclass.");
    };

    function a(b) {
      if (b.constructor === a.caller)
        throw new Error("Cannot create instance of an abstract class.");
    }
    this.$C_AbstractClass = a
  });
  var d = h.$JssorEasing$ = {
    $EaseSwing: function(a) {
      return -b.cos(a * b.PI) / 2 + .5
    },
    $EaseLinear: function(a) {
      return a
    },
    $EaseOutQuad: function(a) {
      return -a * (a - 2)
    },
    $EaseGoBack: function(a) {
      return 1 - b.abs(2 - 1)
    },
    $EaseInWave: function(a) {
      return 1 - b.cos(a * b.PI * 2)
    },
    $EaseOutWave: function(a) {
      return b.sin(a * b.PI * 2)
    },
    $EaseOutJump: function(a) {
      return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
    },
    $EaseInJump: function(a) {
      return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
    }
  };
  h.$JssorDirection$ = {
    $TO_LEFT: 1,
    $TO_RIGHT: 2,
    $TO_TOP: 4,
    $TO_BOTTOM: 8,
    $HORIZONTAL: 3,
    $VERTICAL: 12,
    $GetDirectionHorizontal: function(a) {
      return a & 3
    },
    $GetDirectionVertical: function(a) {
      return a & 12
    },
    $IsHorizontal: function(a) {
      return a & 3
    },
    $IsVertical: function(a) {
      return a & 12
    }
  };
  var a = h.$Jssor$ = new function() {
    var f = this,
      xb = /\S+/g,
      T = 1,
      fb = 2,
      kb = 3,
      jb = 4,
      ob = 5,
      L, s = 0,
      l = 0,
      p = 0,
      bb = 0,
      A = 0,
      B = navigator,
      tb = B.appName,
      k = B.userAgent,
      x = e.documentElement,
      z;

    function Eb() {
      if (!L) {
        L = {
          $Touchable: "ontouchstart" in h || "createTouch" in e
        };
        var a;
        if (B.pointerEnabled || (a = B.msPointerEnabled))
          L.$TouchActionAttr = a ? "msTouchAction" : "touchAction"
      }
      return L
    }

    function v(i) {
      if (!s) {
        s = -1;
        if (tb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
          var f = k.indexOf("MSIE");
          s = T;
          p = n(k.substring(f + 5, k.indexOf(";", f))); /*@cc_on bb=@_jscript_version@*/ ;
          l = e.documentMode || p
        } else if (tb == "Netscape" && !!h.addEventListener) {
          var d = k.indexOf("Firefox"),
            b = k.indexOf("Safari"),
            g = k.indexOf("Chrome"),
            c = k.indexOf("AppleWebKit");
          if (d >= 0) {
            s = fb;
            l = n(k.substring(d + 8))
          } else if (b >= 0) {
            var j = k.substring(0, b).lastIndexOf("/");
            s = g >= 0 ? jb : kb;
            l = n(k.substring(j + 1, b))
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);
            if (a) {
              s = T;
              l = p = n(a[1])
            }
          }
          if (c >= 0)
            A = n(k.substring(c + 12))
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
          if (a) {
            s = ob;
            l = n(a[2])
          }
        }
      }
      return i == s
    }

    function q() {
      return v(T)
    }

    function O() {
      return q() && (l < 6 || e.compatMode == "BackCompat")
    }

    function yb() {
      return v(fb)
    }

    function ib() {
      return v(kb)
    }

    function hb() {
      return v(jb)
    }

    function nb() {
      return v(ob)
    }

    function cb() {
      return ib() && A > 534 && A < 535
    }

    function M() {
      return q() && l < 9
    }

    function t(a) {
      if (!z) {
        m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(b) {
          if (a.style[b] != j) {
            z = b;
            return c
          }
        });
        z = z || "transform"
      }
      return z
    }

    function sb(a) {
      return {}.toString.call(a)
    }
    var K;

    function Cb() {
      if (!K) {
        K = {};
        m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
          K["[object " + a + "]"] = a.toLowerCase()
        })
      }
      return K
    }

    function m(a, d) {
      if (sb(a) == "[object Array]") {
        for (var b = 0; b < a.length; b++)
          if (d(a[b], b, a))
            return c
      } else
        for (var e in a)
          if (d(a[e], e, a))
            return c
    }

    function D(a) {
      return a == i ? String(a) : Cb()[sb(a)] || "object"
    }

    function qb(a) {
      for (var b in a)
        return c
    }

    function G(a) {
      try {
        return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
      } catch (b) {}
    }

    function y(a, b) {
      return {
        x: a,
        y: b
      }
    }

    function vb(b, a) {
      setTimeout(b, a || 0)
    }

    function I(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      m(d, function(c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
            e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
          a = d + e
        }
      });
      a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
      return a
    }

    function eb(b, a) {
      if (l < 9)
        b.style.filter = a
    }

    function zb(b, a, c) {
      if (bb < 9) {
        var e = b.style.filter,
          h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
          g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "",
          d = I(e, [h], g);
        eb(b, d);
        f.$CssMarginTop(b, c.y);
        f.$CssMarginLeft(b, c.x)
      }
    }
    f.$Device = Eb;
    f.$IsBrowserIE = q;
    f.$IsBrowserIeQuirks = O;
    f.$IsBrowserFireFox = yb;
    f.$IsBrowserSafari = ib;
    f.$IsBrowserChrome = hb;
    f.$IsBrowserOpera = nb;
    f.$IsBrowserBadTransform = cb;
    f.$IsBrowserIe9Earlier = M;
    f.$BrowserVersion = function() {
      return l
    };
    f.$BrowserEngineVersion = function() {
      return p || l
    };
    f.$WebKitVersion = function() {
      v();
      return A
    };
    f.$Delay = vb;
    f.$Inherit = function(a, b) {
      b.call(a);
      return C({}, a)
    };

    function W(a) {
      a.constructor === W.caller && a.$Construct && a.$Construct.apply(a, W.caller.arguments)
    }
    f.$Construct = W;
    f.$GetElement = function(a) {
      if (f.$IsString(a))
        a = e.getElementById(a);
      return a
    };

    function r(a) {
      return a || h.event
    }
    f.$GetEvent = r;
    f.$EvtSrc = function(a) {
      a = r(a);
      return a.target || a.srcElement || e
    };
    f.$EvtTarget = function(a) {
      a = r(a);
      return a.relatedTarget || a.toElement
    };
    f.$EvtWhich = function(a) {
      a = r(a);
      return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
    };
    f.$MousePosition = function(a) {
      a = r(a);
      return {
        x: a.pageX || a.clientX || 0,
        y: a.pageY || a.clientY || 0
      }
    };
    f.$PageScroll = function() {
      var a = e.body;
      return {
        x: (h.pageXOffset || x.scrollLeft || a.scrollLeft || 0) - (x.clientLeft || a.clientLeft || 0),
        y: (h.pageYOffset || x.scrollTop || a.scrollTop || 0) - (x.clientTop || a.clientTop || 0)
      }
    };
    f.$WindowSize = function() {
      var a = e.body;
      return {
        x: a.clientWidth || x.clientWidth,
        y: a.clientHeight || x.clientHeight
      }
    };

    function E(c, d, a) {
      if (a != j)
        c.style[d] = a;
      else {
        var b = c.currentStyle || c.style;
        a = b[d];
        if (a == "" && h.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, i);
          b && (a = b.getPropertyValue(d) || b[d])
        }
        return a
      }
    }

    function Y(b, c, a, d) {
      if (a != j) {
        d && (a += "px");
        E(b, c, a)
      } else
        return n(E(b, c))
    }

    function Fb(b, d, a) {
      return Y(b, d, a, c)
    }

    function o(d, a) {
      var b = a & 2,
        c = a ? Y : E;
      return function(e, a) {
        return c(e, d, a, b)
      }
    }

    function Ab(b) {
      if (q() && p < 9) {
        var a = /opacity=([^)]*)/.exec(b.style.filter || "");
        return a ? n(a[1]) / 100 : 1
      } else
        return n(b.style.opacity || "1")
    }

    function Bb(c, a, f) {
      if (q() && p < 9) {
        var h = c.style.filter || "",
          i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
          e = b.round(100 * a),
          d = "";
        if (e < 100 || f)
          d = "alpha(opacity=" + e + ") ";
        var g = I(h, [i], d);
        eb(c, g)
      } else
        c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
    }

    function ab(e, a) {
      var d = a.$Rotate || 0,
        c = a.$Scale == j ? 1 : a.$Scale;
      if (M()) {
        var l = f.$CreateMatrix(d / 180 * b.PI, c, c);
        zb(e, !d && c == 1 ? i : l, f.$GetMatrixOffset(l, a.$OriginalWidth, a.$OriginalHeight))
      } else {
        var g = t(e);
        if (g) {
          var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";
          if (hb() && A > 535 && "ontouchstart" in h)
            k += " perspective(2000px)";
          e.style[g] = k
        }
      }
    }
    f.$SetStyleTransform = function(b, a) {
      if (cb())
        vb(f.$CreateCallback(i, ab, b, a));
      else
        ab(b, a)
    };
    f.$SetStyleTransformOrigin = function(b, c) {
      var a = t(b);
      if (a)
        b.style[a + "Origin"] = c
    };
    f.$CssScale = function(a, c) {
      if (q() && p < 9 || p < 10 && O())
        a.style.zoom = c == 1 ? "" : c;
      else {
        var b = t(a);
        if (b) {
          var f = "scale(" + c + ")",
            e = a.style[b],
            g = new RegExp(/[\s]*scale\(.*?\)/g),
            d = I(e, [g], f);
          a.style[b] = d
        }
      }
    };
    f.$EnableHWA = function(a) {
      if (!a.style[t(a)] || a.style[t(a)] == "none")
        a.style[t(a)] = "perspective(2000px)"
    };
    f.$DisableHWA = function(a) {
      a.style[t(a)] = "none"
    };
    var mb = 0,
      gb = 0;
    f.$WindowResizeFilter = function(b, a) {
      return M() ? function() {
        var h = c,
          d = O() ? b.document.body : b.document.documentElement;
        if (d) {
          var f = d.offsetWidth - mb,
            e = d.offsetHeight - gb;
          if (f || e) {
            mb += f;
            gb += e
          } else
            h = g
        }
        h && a()
      } : a
    };
    f.$MouseOverOutFilter = function(b, a) {
      return function(c) {
        c = r(c);
        var e = c.type,
          d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
        (!d || d !== a && !f.$IsChild(a, d)) && b(c)
      }
    };
    f.$AddEvent = function(a, c, d, b) {
      a = f.$GetElement(a);
      if (a.addEventListener) {
        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
        a.addEventListener(c, d, b)
      } else if (a.attachEvent) {
        a.attachEvent("on" + c, d);
        b && a.setCapture && a.setCapture()
      }
    };
    f.$RemoveEvent = function(a, c, d, b) {
      a = f.$GetElement(a);
      if (a.removeEventListener) {
        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
        a.removeEventListener(c, d, b)
      } else if (a.detachEvent) {
        a.detachEvent("on" + c, d);
        b && a.releaseCapture && a.releaseCapture()
      }
    };
    f.$FireEvent = function(c, b) {
      var a;
      if (e.createEvent) {
        a = e.createEvent("HTMLEvents");
        a.initEvent(b, g, g);
        c.dispatchEvent(a)
      } else {
        var d = "on" + b;
        a = e.createEventObject();
        c.fireEvent(d, a)
      }
    };
    f.$CancelEvent = function(a) {
      a = r(a);
      a.preventDefault && a.preventDefault();
      a.cancel = c;
      a.returnValue = g
    };
    f.$StopEvent = function(a) {
      a = r(a);
      a.stopPropagation && a.stopPropagation();
      a.cancelBubble = c
    };
    f.$CreateCallback = function(d, c) {
      var a = [].slice.call(arguments, 2),
        b = function() {
          var b = a.concat([].slice.call(arguments, 0));
          return c.apply(d, b)
        };
      return b
    };
    f.$InnerText = function(a, b) {
      if (b == j)
        return a.textContent || a.innerText;
      var c = e.createTextNode(b);
      f.$Empty(a);
      a.appendChild(c)
    };
    f.$InnerHtml = function(a, b) {
      if (b == j)
        return a.innerHTML;
      a.innerHTML = b
    };
    f.$GetClientRect = function(b) {
      var a = b.getBoundingClientRect();
      return {
        x: a.left,
        y: a.top,
        w: a.right - a.left,
        h: a.bottom - a.top
      }
    };
    f.$ClearInnerHtml = function(a) {
      a.innerHTML = ""
    };
    f.$EncodeHtml = function(b) {
      var a = f.$CreateDiv();
      f.$InnerText(a, b);
      return f.$InnerHtml(a)
    };
    f.$DecodeHtml = function(b) {
      var a = f.$CreateDiv();
      f.$InnerHtml(a, b);
      return f.$InnerText(a)
    };
    f.$SelectElement = function(c) {
      var b;
      if (h.getSelection)
        b = h.getSelection();
      var a = i;
      if (e.createRange) {
        a = e.createRange();
        a.selectNode(c)
      } else {
        a = e.body.createTextRange();
        a.moveToElementText(c);
        a.select()
      }
      b && b.addRange(a)
    };
    f.$DeselectElements = function() {
      if (e.selection)
        e.selection.empty();
      else
        h.getSelection && h.getSelection().removeAllRanges()
    };
    f.$Children = function(d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling)
        (c || a.nodeType == 1) && b.push(a);
      return b
    };

    function rb(a, c, e, b) {
      b = b || "u";
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (S(a, b) == c)
            return a;
          if (!e) {
            var d = rb(a, c, e, b);
            if (d)
              return d
          }
        }
    }
    f.$FindChild = rb;

    function Q(a, d, f, b) {
      b = b || "u";
      var c = [];
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          S(a, b) == d && c.push(a);
          if (!f) {
            var e = Q(a, d, f, b);
            if (e.length)
              c = c.concat(e)
          }
        }
      return c
    }

    function lb(a, c, d) {
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (a.tagName == c)
            return a;
          if (!d) {
            var b = lb(a, c, d);
            if (b)
              return b
          }
        }
    }
    f.$FindChildByTag = lb;

    function db(a, c, e) {
      var b = [];
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          (!c || a.tagName == c) && b.push(a);
          if (!e) {
            var d = db(a, c, e);
            if (d.length)
              b = b.concat(d)
          }
        }
      return b
    }
    f.$FindChildrenByTag = db;
    f.$GetElementsByTag = function(b, a) {
      return b.getElementsByTagName(a)
    };

    function C() {
      var e = arguments,
        d, c, b, a, g = 1 & e[0],
        f = 1 + g;
      d = e[f - 1] || {};
      for (; f < e.length; f++)
        if (c = e[f])
          for (b in c) {
            a = c[b];
            if (a !== j) {
              a = c[b];
              d[b] = g && G(d[b]) ? C(g, {}, a) : a
            }
          }
      return d
    }
    f.$Extend = C;

    function X(f, g) {
      var d = {},
        c, a, b;
      for (c in f) {
        a = f[c];
        b = g[c];
        if (a !== b) {
          var e;
          if (G(a) && G(b)) {
            a = X(b);
            e = !qb(a)
          }!e && (d[c] = a)
        }
      }
      return d
    }
    f.$Unextend = X;
    f.$IsFunction = function(a) {
      return D(a) == "function"
    };
    f.$IsArray = function(a) {
      return D(a) == "array"
    };
    f.$IsString = function(a) {
      return D(a) == "string"
    };
    f.$IsNumeric = function(a) {
      return !isNaN(n(a)) && isFinite(a)
    };
    f.$Type = D;
    f.$Each = m;
    f.$IsNotEmpty = qb;

    function P(a) {
      return e.createElement(a)
    }
    f.$CreateElement = P;
    f.$CreateDiv = function() {
      return P("DIV")
    };
    f.$CreateSpan = function() {
      return P("SPAN")
    };
    f.$EmptyFunction = function() {};

    function U(b, c, a) {
      if (a == j)
        return b.getAttribute(c);
      b.setAttribute(c, a)
    }

    function S(a, b) {
      return U(a, b) || U(a, "data-" + b)
    }
    f.$Attribute = U;
    f.$AttributeEx = S;

    function w(b, a) {
      if (a == j)
        return b.className;
      b.className = a
    }
    f.$ClassName = w;

    function ub(b) {
      var a = {};
      m(b, function(b) {
        a[b] = b
      });
      return a
    }

    function wb(b, a) {
      return b.match(a || xb)
    }

    function N(b, a) {
      return ub(wb(b || "", a))
    }
    f.$ToHash = ub;
    f.$Split = wb;

    function Z(b, c) {
      var a = "";
      m(c, function(c) {
        a && (a += b);
        a += c
      });
      return a
    }

    function H(a, c, b) {
      w(a, Z(" ", C(X(N(w(a)), N(c)), N(b))))
    }
    f.$Join = Z;
    f.$AddClass = function(b, a) {
      H(b, i, a)
    };
    f.$RemoveClass = H;
    f.$ReplaceClass = H;
    f.$ParentNode = function(a) {
      return a.parentNode
    };
    f.$HideElement = function(a) {
      f.$CssDisplay(a, "none")
    };
    f.$EnableElement = function(a, b) {
      if (b)
        f.$Attribute(a, "disabled", c);
      else
        f.$RemoveAttribute(a, "disabled")
    };
    f.$HideElements = function(b) {
      for (var a = 0; a < b.length; a++)
        f.$HideElement(b[a])
    };
    f.$ShowElement = function(a, b) {
      f.$CssDisplay(a, b ? "none" : "")
    };
    f.$ShowElements = function(b, c) {
      for (var a = 0; a < b.length; a++)
        f.$ShowElement(b[a], c)
    };
    f.$RemoveAttribute = function(b, a) {
      b.removeAttribute(a)
    };
    f.$CanClearClip = function() {
      return q() && l < 10
    };
    f.$SetStyleClip = function(d, c) {
      if (c)
        d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";
      else {
        var g = d.style.cssText,
          f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
          e = I(g, f, "");
        a.$CssCssText(d, e)
      }
    };
    f.$GetNow = function() {
      return +new Date
    };
    f.$AppendChild = function(b, a) {
      b.appendChild(a)
    };
    f.$AppendChildren = function(b, a) {
      m(a, function(a) {
        f.$AppendChild(b, a)
      })
    };
    f.$InsertBefore = function(b, a, c) {
      (c || a.parentNode).insertBefore(b, a)
    };
    f.$InsertAfter = function(b, a, c) {
      f.$InsertBefore(b, a.nextSibling, c || a.parentNode)
    };
    f.$InsertAdjacentHtml = function(b, a, c) {
      b.insertAdjacentHTML(a, c)
    };
    f.$RemoveElement = function(a, b) {
      (b || a.parentNode).removeChild(a)
    };
    f.$RemoveElements = function(a, b) {
      m(a, function(a) {
        f.$RemoveElement(a, b)
      })
    };
    f.$Empty = function(a) {
      f.$RemoveElements(f.$Children(a, c), a)
    };
    f.$ParseInt = function(b, a) {
      return parseInt(b, a || 10)
    };
    var n = parseFloat;
    f.$ParseFloat = n;
    f.$IsChild = function(b, a) {
      var c = e.body;
      while (a && b !== a && c !== a)
        try {
          a = a.parentNode
        } catch (d) {
          return g
        }
      return b === a
    };

    function V(d, c, b) {
      var a = d.cloneNode(!c);
      !b && f.$RemoveAttribute(a, "id");
      return a
    }
    f.$CloneNode = V;
    f.$LoadImage = function(e, g) {
      var a = new Image;

      function b(e, c) {
        f.$RemoveEvent(a, "load", b);
        f.$RemoveEvent(a, "abort", d);
        f.$RemoveEvent(a, "error", d);
        g && g(a, c)
      }

      function d(a) {
        b(a, c)
      }
      if (nb() && l < 11.6 || !e)
        b(!e);
      else {
        f.$AddEvent(a, "load", b);
        f.$AddEvent(a, "abort", d);
        f.$AddEvent(a, "error", d);
        a.src = e
      }
    };
    f.$LoadImages = function(d, a, e) {
      var c = d.length + 1;

      function b(b) {
        c--;
        if (a && b && b.src == a.src)
          a = b;
        !c && e && e(a)
      }
      m(d, function(a) {
        f.$LoadImage(a.src, b)
      });
      b()
    };
    f.$BuildElement = function(b, g, i, h) {
      if (h)
        b = V(b);
      var c = Q(b, g);
      if (!c.length)
        c = a.$GetElementsByTag(b, g);
      for (var f = c.length - 1; f > -1; f--) {
        var d = c[f],
          e = V(i);
        w(e, w(d));
        a.$CssCssText(e, d.style.cssText);
        a.$InsertBefore(e, d);
        a.$RemoveElement(d)
      }
      return b
    };

    function Db(b) {
      var q = this,
        o = "",
        r = ["av", "pv", "ds", "dn"],
        g = [],
        p, k = 0,
        h = 0,
        d = 0;

      function i() {
        H(b, p, g[d || k || h & 2 || h]);
        a.$Css(b, "pointer-events", d ? "none" : "")
      }

      function c() {
        k = 0;
        i();
        f.$RemoveEvent(e, "mouseup", c);
        f.$RemoveEvent(e, "touchend", c);
        f.$RemoveEvent(e, "touchcancel", c)
      }

      function n(a) {
        if (d)
          f.$CancelEvent(a);
        else {
          k = 4;
          i();
          f.$AddEvent(e, "mouseup", c);
          f.$AddEvent(e, "touchend", c);
          f.$AddEvent(e, "touchcancel", c)
        }
      }
      q.$Selected = function(a) {
        if (a != j) {
          h = a & 2 || a & 1;
          i()
        } else
          return h
      };
      q.$Enable = function(a) {
        if (a == j)
          return !d;
        d = a ? 0 : 3;
        i()
      };
      b = f.$GetElement(b);
      var l = a.$Split(w(b));
      if (l)
        o = l.shift();
      m(r, function(a) {
        g.push(o + a)
      });
      p = Z(" ", g);
      g.unshift("");
      f.$AddEvent(b, "mousedown", n);
      f.$AddEvent(b, "touchstart", n)
    }
    f.$Buttonize = function(a) {
      return new Db(a)
    };
    f.$Css = E;
    f.$CssN = Y;
    f.$CssP = Fb;
    f.$CssOverflow = o("overflow");
    f.$CssTop = o("top", 2);
    f.$CssLeft = o("left", 2);
    f.$CssWidth = o("width", 2);
    f.$CssHeight = o("height", 2);
    f.$CssMarginLeft = o("marginLeft", 2);
    f.$CssMarginTop = o("marginTop", 2);
    f.$CssPosition = o("position");
    f.$CssDisplay = o("display");
    f.$CssZIndex = o("zIndex", 1);
    f.$CssFloat = function(b, a) {
      return E(b, q() ? "styleFloat" : "cssFloat", a)
    };
    f.$CssOpacity = function(b, a, c) {
      if (a != j)
        Bb(b, a, c);
      else
        return Ab(b)
    };
    f.$CssCssText = function(a, b) {
      if (b != j)
        a.style.cssText = b;
      else
        return a.style.cssText
    };
    var R = {
        $Opacity: f.$CssOpacity,
        $Top: f.$CssTop,
        $Left: f.$CssLeft,
        $Width: f.$CssWidth,
        $Height: f.$CssHeight,
        $Position: f.$CssPosition,
        $Display: f.$CssDisplay,
        $ZIndex: f.$CssZIndex
      },
      u;

    function J() {
      if (!u)
        u = C({
          $MarginTop: f.$CssMarginTop,
          $MarginLeft: f.$CssMarginLeft,
          $Clip: f.$SetStyleClip,
          $Transform: f.$SetStyleTransform
        }, R);
      return u
    }

    function pb() {
      J();
      u.$Transform = u.$Transform;
      return u
    }
    f.$StyleSetter = J;
    f.$StyleSetterEx = pb;
    f.$GetStyles = function(c, b) {
      J();
      var a = {};
      m(b, function(d, b) {
        if (R[b])
          a[b] = R[b](c)
      });
      return a
    };
    f.$SetStyles = function(c, b) {
      var a = J();
      m(b, function(d, b) {
        a[b] && a[b](c, d)
      })
    };
    f.$SetStylesEx = function(b, a) {
      pb();
      f.$SetStyles(b, a)
    };
    var F = new function() {
      var a = this;

      function b(d, g) {
        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
          for (var k = f[c] = [], b = 0; b < h; b++) {
            for (var e = 0, a = 0; a < j; a++)
              e += d[c][a] * g[a][b];
            k[b] = e
          }
        return f
      }
      a.$ScaleX = function(b, c) {
        return a.$ScaleXY(b, c, 0)
      };
      a.$ScaleY = function(b, c) {
        return a.$ScaleXY(b, 0, c)
      };
      a.$ScaleXY = function(a, c, d) {
        return b(a, [
          [c, 0],
          [0, d]
        ])
      };
      a.$TransformPoint = function(d, c) {
        var a = b(d, [
          [c.x],
          [c.y]
        ]);
        return y(a[0][0], a[1][0])
      }
    };
    f.$CreateMatrix = function(d, a, c) {
      var e = b.cos(d),
        f = b.sin(d);
      return [
        [e * a, -f * c],
        [f * a, e * c]
      ]
    };
    f.$GetMatrixOffset = function(d, c, a) {
      var e = F.$TransformPoint(d, y(-c / 2, -a / 2)),
        f = F.$TransformPoint(d, y(c / 2, -a / 2)),
        g = F.$TransformPoint(d, y(c / 2, a / 2)),
        h = F.$TransformPoint(d, y(-c / 2, a / 2));
      return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
    };
    f.$Cast = function(l, g, t, r, u, w, j) {
      var c = g;
      if (l) {
        c = {};
        for (var f in g) {
          var x = w[f] || 1,
            s = u[f] || [0, 1],
            e = (t - s[0]) / s[1];
          e = b.min(b.max(e, 0), 1);
          e = e * x;
          var p = b.floor(e);
          if (e != p)
            e -= p;
          var v = r[f] || r.$Default || d.$EaseSwing,
            q = v(e),
            h, y = l[f];
          g[f];
          var m = g[f];
          if (a.$IsNumeric(m))
            h = y + m * q;
          else {
            h = a.$Extend({
              $Offset: {}
            }, l[f]);
            a.$Each(m.$Offset, function(c, b) {
              var a = c * q;
              h.$Offset[b] = a;
              h[b] += a
            })
          }
          c[f] = h
        }
        if (g.$Zoom || g.$Rotate)
          c.$Transform = {
            $Rotate: c.$Rotate || 0,
            $Scale: c.$Zoom,
            $OriginalWidth: j.$OriginalWidth,
            $OriginalHeight: j.$OriginalHeight
          }
      }
      if (g.$Clip && j.$Move) {
        var k = c.$Clip.$Offset,
          o = (k.$Top || 0) + (k.$Bottom || 0),
          n = (k.$Left || 0) + (k.$Right || 0);
        c.$Left = (c.$Left || 0) + n;
        c.$Top = (c.$Top || 0) + o;
        c.$Clip.$Left -= n;
        c.$Clip.$Right -= n;
        c.$Clip.$Top -= o;
        c.$Clip.$Bottom -= o
      }
      if (c.$Clip && a.$CanClearClip() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == j.$OriginalWidth && c.$Clip.$Bottom == j.$OriginalHeight)
        c.$Clip = i;
      return c
    }
  };

  function l() {
    var b = this,
      d = [],
      c = [];

    function i(a, b) {
      d.push({
        $EventName: a,
        $Handler: b
      })
    }

    function g(b, c) {
      a.$Each(d, function(a, e) {
        a.$EventName == b && a.$Handler === c && d.splice(e, 1)
      })
    }

    function f() {
      d = []
    }

    function e() {
      a.$Each(c, function(b) {
        a.$RemoveEvent(b.$Obj, b.$EventName, b.$Handler)
      });
      c = []
    }
    b.$Listen = function(e, b, d, f) {
      a.$AddEvent(e, b, d, f);
      c.push({
        $Obj: e,
        $EventName: b,
        $Handler: d
      })
    };
    b.$Unlisten = function(e, b, d) {
      a.$Each(c, function(f, g) {
        if (f.$Obj === e && f.$EventName == b && f.$Handler === d) {
          a.$RemoveEvent(e, b, d);
          c.splice(g, 1)
        }
      })
    };
    b.$UnlistenAll = e;
    b.$On = b.addEventListener = i;
    b.$Off = b.removeEventListener = g;
    b.$TriggerEvent = function(b) {
      var c = [].slice.call(arguments, 1);
      a.$Each(d, function(a) {
        a.$EventName == b && a.$Handler.apply(h, c)
      })
    };
    b.$Destroy = function() {
      e();
      f();
      for (var a in b)
        delete b[a]
    }
  }

  function k(o, z, k, R, P, K) {
    o = o || 0;
    var e = this,
      s, O, p, q, x, B = 0,
      I, J, H, D, A = 0,
      l = 0,
      n = 0,
      E, m = o,
      u = o + z,
      f, j, r, y = [],
      C;

    function M(a) {
      f += a;
      j += a;
      m += a;
      u += a;
      l += a;
      n += a;
      A = a
    }

    function Q(a, b) {
      var c = a - f + o * b;
      M(c);
      return j
    }

    function w(o, i) {
      var d = o;
      if (r && (d >= j || d <= f))
        d = ((d - f) % r + r) % r + f;
      if (!E || x || i || l != d) {
        var g = b.min(d, j);
        g = b.max(g, f);
        if (!E || x || i || g != n) {
          if (K) {
            var h = (g - m) / (z || 1);
            if (k.$Reverse)
              h = 1 - h;
            var p = a.$Cast(P, K, h, I, H, J, k);
            a.$Each(p, function(b, a) {
              C[a] && C[a](R, b)
            })
          }
          e.$OnInnerOffsetChange(n - m, g - m);
          n = g;
          a.$Each(y, function(b, c) {
            var a = o < l ? y[y.length - c - 1] : b;
            a.$GoToPosition(n - A, i)
          });
          var s = l,
            q = n;
          l = d;
          E = c;
          e.$OnPositionChange(s, q)
        }
      }
    }

    function F(a, c, d) {
      c && a.$Locate(j, 1);
      if (!d) {
        f = b.min(f, a.$GetPosition_OuterBegin() + A);
        j = b.max(j, a.$GetPosition_OuterEnd() + A)
      }
      y.push(a)
    }
    var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
    if (a.$IsBrowserSafari() && a.$BrowserVersion() < 7)
      t = i;
    t = t || function(b) {
      a.$Delay(b, k.$Interval)
    };

    function L() {
      if (s) {
        var d = a.$GetNow(),
          e = b.min(d - B, k.$IntervalMax),
          c = l + e * q;
        B = d;
        if (c * q >= p * q)
          c = p;
        w(c);
        if (!x && c * q >= p * q)
          N(D);
        else
          t(L)
      }
    }

    function v(d, g, h) {
      if (!s) {
        s = c;
        x = h;
        D = g;
        d = b.max(d, f);
        d = b.min(d, j);
        p = d;
        q = p < l ? -1 : 1;
        e.$OnStart();
        B = a.$GetNow();
        t(L)
      }
    }

    function N(a) {
      if (s) {
        x = s = D = g;
        e.$OnStop();
        a && a()
      }
    }
    e.$Play = function(a, b, c) {
      v(a ? l + a : j, b, c)
    };
    e.$PlayToPosition = v;
    e.$PlayToBegin = function(a, b) {
      v(f, a, b)
    };
    e.$PlayToEnd = function(a, b) {
      v(j, a, b)
    };
    e.$Stop = N;
    e.$Continue = function(a) {
      v(a)
    };
    e.$GetPosition = function() {
      return l
    };
    e.$GetPlayToPosition = function() {
      return p
    };
    e.$GetPosition_Display = function() {
      return n
    };
    e.$GoToPosition = w;
    e.$GoToBegin = function() {
      w(f, c)
    };
    e.$GoToEnd = function() {
      w(j, c)
    };
    e.$Move = function(a) {
      w(l + a)
    };
    e.$CombineMode = function() {
      return O
    };
    e.$GetDuration = function() {
      return z
    };
    e.$IsPlaying = function() {
      return s
    };
    e.$IsOnTheWay = function() {
      return l > m && l <= u
    };
    e.$SetLoopLength = function(a) {
      r = a
    };
    e.$Locate = Q;
    e.$Shift = M;
    e.$Join = F;
    e.$Combine = function(a) {
      F(a, 0)
    };
    e.$Chain = function(a) {
      F(a, 1)
    };
    e.$GetPosition_InnerBegin = function() {
      return m
    };
    e.$GetPosition_InnerEnd = function() {
      return u
    };
    e.$GetPosition_OuterBegin = function() {
      return f
    };
    e.$GetPosition_OuterEnd = function() {
      return j
    };
    e.$OnPositionChange = e.$OnStart = e.$OnStop = e.$OnInnerOffsetChange = a.$EmptyFunction;
    e.$Version = a.$GetNow();
    k = a.$Extend({
      $Interval: 16,
      $IntervalMax: 50
    }, k);
    r = k.$LoopLength;
    C = a.$Extend({}, a.$StyleSetter(), k.$Setter);
    f = m = o;
    j = u = o + z;
    J = k.$Round || {};
    H = k.$During || {};
    I = a.$Extend({
      $Default: a.$IsFunction(k.$Easing) && k.$Easing || d.$EaseSwing
    }, k.$Easing)
  }
  var n = h.$JssorSlideshowFormations$ = new function() {
    var h = this,
      d = 0,
      a = 1,
      f = 2,
      e = 3,
      s = 1,
      r = 2,
      t = 4,
      q = 8,
      w = 256,
      x = 512,
      v = 1024,
      u = 2048,
      j = u + s,
      i = u + r,
      o = x + s,
      m = x + r,
      n = w + t,
      k = w + q,
      l = v + t,
      p = v + q;

    function y(a) {
      return (a & r) == r
    }

    function z(a) {
      return (a & t) == t
    }

    function g(b, a, c) {
      c.push(a);
      b[a] = b[a] || [];
      b[a].push(c)
    }
    h.$FormationStraight = function(f) {
      for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.$Count, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
        for (a = 0; a < d; a++) {
          switch (s) {
            case j:
              c = h - (a * e + (q - b));
              break;
            case l:
              c = h - (b * d + (p - a));
              break;
            case o:
              c = h - (a * e + b);
            case n:
              c = h - (b * d + a);
              break;
            case i:
              c = a * e + b;
              break;
            case k:
              c = b * d + (p - a);
              break;
            case m:
              c = a * e + (q - b);
              break;
            default:
              c = b * d + a
          }
          g(r, c, [b, a])
        }
      return r
    };
    h.$FormationSwirl = function(q) {
      var x = q.$Cols,
        y = q.$Rows,
        B = q.$Assembly,
        w = q.$Count,
        A = [],
        z = [],
        u = 0,
        b = 0,
        h = 0,
        r = x - 1,
        s = y - 1,
        t, p, v = 0;
      switch (B) {
        case j:
          b = r;
          h = 0;
          p = [f, a, e, d];
          break;
        case l:
          b = 0;
          h = s;
          p = [d, e, a, f];
          break;
        case o:
          b = r;
          h = s;
          p = [e, a, f, d];
          break;
        case n:
          b = r;
          h = s;
          p = [a, e, d, f];
          break;
        case i:
          b = 0;
          h = 0;
          p = [f, d, e, a];
          break;
        case k:
          b = r;
          h = 0;
          p = [a, f, d, e];
          break;
        case m:
          b = 0;
          h = s;
          p = [e, d, f, a];
          break;
        default:
          b = 0;
          h = 0;
          p = [d, f, a, e]
      }
      u = 0;
      while (u < w) {
        t = h + "," + b;
        if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
          z[t] = c;
          g(A, u++, [h, b])
        } else
          switch (p[v++ % p.length]) {
            case d:
              b--;
              break;
            case f:
              h--;
              break;
            case a:
              b++;
              break;
            case e:
              h++
          }
        switch (p[v % p.length]) {
          case d:
            b++;
            break;
          case f:
            h++;
            break;
          case a:
            b--;
            break;
          case e:
            h--
        }
      }
      return A
    };
    h.$FormationZigZag = function(p) {
      var w = p.$Cols,
        x = p.$Rows,
        z = p.$Assembly,
        v = p.$Count,
        t = [],
        u = 0,
        b = 0,
        c = 0,
        q = w - 1,
        r = x - 1,
        y, h, s = 0;
      switch (z) {
        case j:
          b = q;
          c = 0;
          h = [f, a, e, a];
          break;
        case l:
          b = 0;
          c = r;
          h = [d, e, a, e];
          break;
        case o:
          b = q;
          c = r;
          h = [e, a, f, a];
          break;
        case n:
          b = q;
          c = r;
          h = [a, e, d, e];
          break;
        case i:
          b = 0;
          c = 0;
          h = [f, d, e, d];
          break;
        case k:
          b = q;
          c = 0;
          h = [a, f, d, f];
          break;
        case m:
          b = 0;
          c = r;
          h = [e, d, f, d];
          break;
        default:
          b = 0;
          c = 0;
          h = [d, f, a, f]
      }
      u = 0;
      while (u < v) {
        y = c + "," + b;
        if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
          g(t, u++, [c, b]);
          switch (h[s % h.length]) {
            case d:
              b++;
              break;
            case f:
              c++;
              break;
            case a:
              b--;
              break;
            case e:
              c--
          }
        } else {
          switch (h[s++ % h.length]) {
            case d:
              b--;
              break;
            case f:
              c--;
              break;
            case a:
              b++;
              break;
            case e:
              c++
          }
          switch (h[s++ % h.length]) {
            case d:
              b++;
              break;
            case f:
              c++;
              break;
            case a:
              b--;
              break;
            case e:
              c--
          }
        }
      }
      return t
    };
    h.$FormationStraightStairs = function(q) {
      var u = q.$Cols,
        v = q.$Rows,
        e = q.$Assembly,
        t = q.$Count,
        r = [],
        s = 0,
        c = 0,
        d = 0,
        f = u - 1,
        h = v - 1,
        x = t - 1;
      switch (e) {
        case j:
        case m:
        case o:
        case i:
          var a = 0,
            b = 0;
          break;
        case k:
        case l:
        case n:
        case p:
          var a = f,
            b = 0;
          break;
        default:
          e = p;
          var a = f,
            b = 0
      }
      c = a;
      d = b;
      while (s < t) {
        if (z(e) || y(e))
          g(r, x - s++, [d, c]);
        else
          g(r, s++, [d, c]);
        switch (e) {
          case j:
          case m:
            c--;
            d++;
            break;
          case o:
          case i:
            c++;
            d--;
            break;
          case k:
          case l:
            c--;
            d--;
            break;
          case p:
          case n:
          default:
            c++;
            d++
        }
        if (c < 0 || d < 0 || c > f || d > h) {
          switch (e) {
            case j:
            case m:
              a++;
              break;
            case k:
            case l:
            case o:
            case i:
              b++;
              break;
            case p:
            case n:
            default:
              a--
          }
          if (a < 0 || b < 0 || a > f || b > h) {
            switch (e) {
              case j:
              case m:
                a = f;
                b++;
                break;
              case o:
              case i:
                b = h;
                a++;
                break;
              case k:
              case l:
                b = h;
                a--;
                break;
              case p:
              case n:
              default:
                a = 0;
                b++
            }
            if (b > h)
              b = h;
            else if (b < 0)
              b = 0;
            else if (a > f)
              a = f;
            else if (a < 0)
              a = 0
          }
          d = b;
          c = a
        }
      }
      return r
    };
    h.$FormationSquare = function(i) {
      var a = i.$Cols || 1,
        c = i.$Rows || 1,
        j = [],
        d, e, f, h, k;
      f = a < c ? (c - a) / 2 : 0;
      h = a > c ? (a - c) / 2 : 0;
      k = b.round(b.max(a / 2, c / 2)) + 1;
      for (d = 0; d < a; d++)
        for (e = 0; e < c; e++)
          g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
      return j
    };
    h.$FormationRectangle = function(f) {
      var d = f.$Cols || 1,
        e = f.$Rows || 1,
        h = [],
        a, c, i;
      i = b.round(b.min(d / 2, e / 2)) + 1;
      for (a = 0; a < d; a++)
        for (c = 0; c < e; c++)
          g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
      return h
    };
    h.$FormationRandom = function(d) {
      for (var e = [], a, c = 0; c < d.$Rows; c++)
        for (a = 0; a < d.$Cols; a++)
          g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
      return e
    };
    h.$FormationCircle = function(d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
        for (a = 0; a < f; a++)
          g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
      return h
    };
    h.$FormationCross = function(d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
        for (a = 0; a < f; a++)
          g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
      return h
    };
    h.$FormationRectangleCross = function(f) {
      for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)
        for (a = 0; a < i; a++)
          g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
      return j
    }
  };
  h.$JssorSlideshowRunner$ = function(o, s, q, t, y) {
    var f = this,
      u, h, e, x = 0,
      w = t.$TransitionsOrder,
      r, j = 8;

    function m(h, f) {
      var e = {
        $Interval: f,
        $Duration: 1,
        $Delay: 0,
        $Cols: 1,
        $Rows: 1,
        $Opacity: 0,
        $Zoom: 0,
        $Clip: 0,
        $Move: g,
        $SlideOut: g,
        $Reverse: g,
        $Formation: n.$FormationRandom,
        $Assembly: 1032,
        $ChessMode: {
          $Column: 0,
          $Row: 0
        },
        $Easing: d.$EaseSwing,
        $Round: {},
        $Blocks: [],
        $During: {}
      };
      a.$Extend(e, h);
      e.$Count = e.$Cols * e.$Rows;
      if (a.$IsFunction(e.$Easing))
        e.$Easing = {
          $Default: e.$Easing
        };
      e.$FramesCount = b.ceil(e.$Duration / e.$Interval);
      e.$GetBlocks = function(b, a) {
        b /= e.$Cols;
        a /= e.$Rows;
        var f = b + "x" + a;
        if (!e.$Blocks[f]) {
          e.$Blocks[f] = {
            $Width: b,
            $Height: a
          };
          for (var c = 0; c < e.$Cols; c++)
            for (var d = 0; d < e.$Rows; d++)
              e.$Blocks[f][d + "," + c] = {
                $Top: d * a,
                $Right: c * b + b,
                $Bottom: d * a + a,
                $Left: c * b
              }
        }
        return e.$Blocks[f]
      };
      if (e.$Brother) {
        e.$Brother = m(e.$Brother, f);
        e.$SlideOut = c
      }
      return e
    }

    function p(A, i, d, v, n, l) {
      var y = this,
        t, u = {},
        j = {},
        m = [],
        f, e, r, p = d.$ChessMode.$Column || 0,
        q = d.$ChessMode.$Row || 0,
        h = d.$GetBlocks(n, l),
        o = B(d),
        C = o.length - 1,
        s = d.$Duration + d.$Delay * C,
        w = v + s,
        k = d.$SlideOut,
        x;
      w += 50;

      function B(a) {
        var b = a.$Formation(a);
        return a.$Reverse ? b.reverse() : b
      }
      y.$EndTime = w;
      y.$ShowFrame = function(c) {
        c -= v;
        var e = c < s;
        if (e || x) {
          x = e;
          if (!k)
            c = s - c;
          var f = b.ceil(c / d.$Interval);
          a.$Each(j, function(c, e) {
            var d = b.max(f, c.$Min);
            d = b.min(d, c.length - 1);
            if (c.$LastFrameIndex != d) {
              if (!c.$LastFrameIndex && !k)
                a.$ShowElement(m[e]);
              else
                d == c.$Max && k && a.$HideElement(m[e]);
              c.$LastFrameIndex = d;
              a.$SetStylesEx(m[e], c[d])
            }
          })
        }
      };
      i = a.$CloneNode(i);
      if (a.$IsBrowserIe9Earlier()) {
        var D = !i["no-image"],
          z = a.$FindChildrenByTag(i);
        a.$Each(z, function(b) {
          (D || b["jssor-slider"]) && a.$CssOpacity(b, a.$CssOpacity(b), c)
        })
      }
      a.$Each(o, function(i, m) {
        a.$Each(i, function(G) {
          var K = G[0],
            J = G[1],
            v = K + "," + J,
            o = g,
            s = g,
            x = g;
          if (p && J % 2) {
            if (p & 3)
              o = !o;
            if (p & 12)
              s = !s;
            if (p & 16)
              x = !x
          }
          if (q && K % 2) {
            if (q & 3)
              o = !o;
            if (q & 12)
              s = !s;
            if (q & 16)
              x = !x
          }
          d.$Top = d.$Top || d.$Clip & 4;
          d.$Bottom = d.$Bottom || d.$Clip & 8;
          d.$Left = d.$Left || d.$Clip & 1;
          d.$Right = d.$Right || d.$Clip & 2;
          var C = s ? d.$Bottom : d.$Top,
            z = s ? d.$Top : d.$Bottom,
            B = o ? d.$Right : d.$Left,
            A = o ? d.$Left : d.$Right;
          d.$Clip = C || z || B || A;
          r = {};
          e = {
            $Top: 0,
            $Left: 0,
            $Opacity: 1,
            $Width: n,
            $Height: l
          };
          f = a.$Extend({}, e);
          t = a.$Extend({}, h[v]);
          if (d.$Opacity)
            e.$Opacity = 2 - d.$Opacity;
          if (d.$ZIndex) {
            e.$ZIndex = d.$ZIndex;
            f.$ZIndex = 0
          }
          var I = d.$Cols * d.$Rows > 1 || d.$Clip;
          if (d.$Zoom || d.$Rotate) {
            var H = c;
            if (a.$IsBrowserIe9Earlier())
              if (d.$Cols * d.$Rows > 1)
                H = g;
              else
                I = g;
            if (H) {
              e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
              f.$Zoom = 1;
              if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera())
                e.$Zoom = b.min(e.$Zoom, 2);
              var N = d.$Rotate;
              e.$Rotate = N * 360 * (x ? -1 : 1);
              f.$Rotate = 0
            }
          }
          if (I) {
            if (d.$Clip) {
              var w = d.$ScaleClip || 1,
                i = t.$Offset = {};
              if (C && z) {
                i.$Top = h.$Height / 2 * w;
                i.$Bottom = -i.$Top
              } else if (C)
                i.$Bottom = -h.$Height * w;
              else if (z)
                i.$Top = h.$Height * w;
              if (B && A) {
                i.$Left = h.$Width / 2 * w;
                i.$Right = -i.$Left
              } else if (B)
                i.$Right = -h.$Width * w;
              else if (A)
                i.$Left = h.$Width * w
            }
            r.$Clip = t;
            f.$Clip = h[v]
          }
          var L = o ? 1 : -1,
            M = s ? 1 : -1;
          if (d.x)
            e.$Left += n * d.x * L;
          if (d.y)
            e.$Top += l * d.y * M;
          a.$Each(e, function(b, c) {
            if (a.$IsNumeric(b))
              if (b != f[c])
                r[c] = b - f[c]
          });
          u[v] = k ? f : e;
          var D = d.$FramesCount,
            y = b.round(m * d.$Delay / d.$Interval);
          j[v] = new Array(y);
          j[v].$Min = y;
          j[v].$Max = y + D - 1;
          for (var F = 0; F <= D; F++) {
            var E = a.$Cast(f, r, F / D, d.$Easing, d.$During, d.$Round, {
              $Move: d.$Move,
              $OriginalWidth: n,
              $OriginalHeight: l
            });
            E.$ZIndex = E.$ZIndex || 1;
            j[v].push(E)
          }
        })
      });
      o.reverse();
      a.$Each(o, function(b) {
        a.$Each(b, function(c) {
          var f = c[0],
            e = c[1],
            d = f + "," + e,
            b = i;
          if (e || f)
            b = a.$CloneNode(i);
          a.$SetStyles(b, u[d]);
          a.$CssOverflow(b, "hidden");
          a.$CssPosition(b, "absolute");
          A.$AddClipElement(b);
          m[d] = b;
          a.$ShowElement(b, !k)
        })
      })
    }

    function v() {
      var a = this,
        b = 0;
      k.call(a, 0, u);
      a.$OnPositionChange = function(c, a) {
        if (a - b > j) {
          b = a;
          e && e.$ShowFrame(a);
          h && h.$ShowFrame(a)
        }
      };
      a.$Transition = r
    }
    f.$GetTransition = function() {
      var a = 0,
        c = t.$Transitions,
        d = c.length;
      if (w)
        a = x++ % d;
      else
        a = b.floor(b.random() * d);
      c[a] && (c[a].$Index = a);
      return c[a]
    };
    f.$Initialize = function(w, x, i, k, a) {
      r = a;
      a = m(a, j);
      var g = k.$Item,
        d = i.$Item;
      g["no-image"] = !k.$Image;
      d["no-image"] = !i.$Image;
      var l = g,
        n = d,
        v = a,
        c = a.$Brother || m({}, j);
      if (!a.$SlideOut) {
        l = d;
        n = g
      }
      var t = c.$Shift || 0;
      h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);
      e = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);
      h.$ShowFrame(0);
      e.$ShowFrame(0);
      u = b.max(h.$EndTime, e.$EndTime);
      f.$Index = w
    };
    f.$Clear = function() {
      o.$Clear();
      h = i;
      e = i
    };
    f.$GetProcessor = function() {
      var a = i;
      if (e)
        a = new v;
      return a
    };
    if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera() || y && a.$WebKitVersion() < 537)
      j = 16;
    l.call(f);
    k.call(f, -1e7, 1e7)
  };
  var f = h.$JssorSlider$ = function(q, ec) {
    var n = this;

    function Dc() {
      var a = this;
      k.call(a, -1e8, 2e8);
      a.$GetCurrentSlideInfo = function() {
        var c = a.$GetPosition_Display(),
          d = b.floor(c),
          f = s(d),
          e = c - b.floor(c);
        return {
          $Index: f,
          $VirtualIndex: d,
          $Position: e
        }
      };
      a.$OnPositionChange = function(d, a) {
        var e = b.floor(a);
        if (e != a && a > d)
          e++;
        Tb(e, c);
        n.$TriggerEvent(f.$EVT_POSITION_CHANGE, s(a), s(d), a, d)
      }
    }

    function Cc() {
      var b = this;
      k.call(b, 0, 0, {
        $LoopLength: r
      });
      a.$Each(D, function(a) {
        A & 1 && a.$SetLoopLength(r);
        b.$Chain(a);
        a.$Shift(hb / ac)
      })
    }

    function Bc() {
      var a = this,
        b = Sb.$Elmt;
      k.call(a, -1, 2, {
        $Easing: d.$EaseLinear,
        $Setter: {
          $Position: Yb
        },
        $LoopLength: r
      }, b, {
        $Position: 1
      }, {
        $Position: -2
      });
      a.$Wrapper = b
    }

    function pc(m, l) {
      var a = this,
        d, e, h, j, b;
      k.call(a, -1e8, 2e8, {
        $IntervalMax: 100
      });
      a.$OnStart = function() {
        Q = c;
        U = i;
        n.$TriggerEvent(f.$EVT_SWIPE_START, s(w.$GetPosition()), w.$GetPosition())
      };
      a.$OnStop = function() {
        Q = g;
        j = g;
        var a = w.$GetCurrentSlideInfo();
        n.$TriggerEvent(f.$EVT_SWIPE_END, s(w.$GetPosition()), w.$GetPosition());
        !a.$Position && Fc(a.$VirtualIndex, t)
      };
      a.$OnPositionChange = function(g, f) {
        var a;
        if (j)
          a = b;
        else {
          a = e;
          if (h) {
            var c = f / h;
            a = p.$SlideEasing(c) * (e - d) + d
          }
        }
        w.$GoToPosition(a)
      };
      a.$PlayCarousel = function(b, f, c, g) {
        d = b;
        e = f;
        h = c;
        w.$GoToPosition(b);
        a.$GoToPosition(0);
        a.$PlayToPosition(c, g)
      };
      a.$StandBy = function(d) {
        j = c;
        b = d;
        a.$Play(d, i, c)
      };
      a.$SetStandByPosition = function(a) {
        b = a
      };
      a.$MoveCarouselTo = function(a) {
        w.$GoToPosition(a)
      };
      w = new Dc;
      w.$Combine(m);
      w.$Combine(l)
    }

    function qc() {
      var c = this,
        b = Wb();
      a.$CssZIndex(b, 0);
      a.$Css(b, "pointerEvents", "none");
      c.$Elmt = b;
      c.$AddClipElement = function(c) {
        a.$AppendChild(b, c);
        a.$ShowElement(b)
      };
      c.$Clear = function() {
        a.$HideElement(b);
        a.$Empty(b)
      }
    }

    function zc(o, e) {
      var d = this,
        q, x, N, y, j, C = [],
        H, v, W, K, Q, G, h, w, m, gb;
      k.call(d, -u, u + 1, {
        $SlideItemAnimator: c
      });

      function F(a) {
        x && x.$Revert();
        q && q.$Revert();
        V(o, a);
        G = c;
        q = new L.$Class(o, L, 1);
        x = new L.$Class(o, L);
        x.$GoToPosition(0);
        q.$GoToPosition(0)
      }

      function Y() {
        q.$Version < L.$Version && F()
      }

      function O(o, r, m) {
        if (!K) {
          K = c;
          if (j && m) {
            var h = m.width,
              b = m.height,
              l = h,
              k = b;
            if (h && b && p.$FillMode) {
              if (p.$FillMode & 3 && (!(p.$FillMode & 4) || h > J || b > I)) {
                var i = g,
                  q = J / I * b / h;
                if (p.$FillMode & 1)
                  i = q > 1;
                else if (p.$FillMode & 2)
                  i = q < 1;
                l = i ? h * I / b : J;
                k = i ? I : b * J / h
              }
              a.$CssWidth(j, l);
              a.$CssHeight(j, k);
              a.$CssTop(j, (I - k) / 2);
              a.$CssLeft(j, (J - l) / 2)
            }
            a.$CssPosition(j, "absolute");
            n.$TriggerEvent(f.$EVT_LOAD_END, e)
          }
        }
        a.$HideElement(r);
        o && o(d)
      }

      function X(b, c, f, g) {
        if (g == U && t == e && R)
          if (!Ec) {
            var a = s(b);
            B.$Initialize(a, e, c, d, f);
            c.$HideContentForSlideshow();
            ab.$Locate(a, 1);
            ab.$GoToPosition(a);
            z.$PlayCarousel(b, b, 0)
          }
      }

      function bb(b) {
        if (b == U && t == e) {
          if (!h) {
            var a = i;
            if (B)
              if (B.$Index == e)
                a = B.$GetProcessor();
              else
                B.$Clear();
            Y();
            h = new xc(o, e, a, d.$GetCaptionSliderIn(), d.$GetCaptionSliderOut());
            h.$SetPlayer(m)
          }!h.$IsPlaying() && h.$Replay()
        }
      }

      function T(f, c, g) {
        if (f == e) {
          if (f != c)
            D[c] && D[c].$ParkOut();
          else
            !g && h && h.$AdjustIdleOnPark();
          m && m.$Enable();
          var j = U = a.$GetNow();
          d.$LoadImage(a.$CreateCallback(i, bb, j))
        } else {
          var l = b.abs(e - f),
            k = u + p.$LazyLoading - 1;
          (!Q || l <= k) && d.$LoadImage()
        }
      }

      function cb() {
        if (t == e && h) {
          h.$Stop();
          m && m.$Quit();
          m && m.$Disable();
          h.$OpenSlideshowPanel()
        }
      }

      function fb() {
        t == e && h && h.$Stop()
      }

      function Z(a) {
        !M && n.$TriggerEvent(f.$EVT_CLICK, e, a)
      }

      function P() {
        m = w.pInstance;
        h && h.$SetPlayer(m)
      }
      d.$LoadImage = function(d, b) {
        b = b || y;
        if (C.length && !K) {
          a.$ShowElement(b);
          if (!W) {
            W = c;
            n.$TriggerEvent(f.$EVT_LOAD_START, e);
            a.$Each(C, function(b) {
              if (!a.$Attribute(b, "src")) {
                b.src = a.$AttributeEx(b, "src2");
                a.$CssDisplay(b, b["display-origin"])
              }
            })
          }
          a.$LoadImages(C, j, a.$CreateCallback(i, O, d, b))
        } else
          O(d, b)
      };
      d.$GoForNextSlide = function() {
        var g = e;
        if (p.$AutoPlaySteps < 0)
          g -= r;
        var c = g + p.$AutoPlaySteps * vc;
        if (A & 2)
          c = s(c);
        if (!(A & 1))
          c = b.max(0, b.min(c, r - u));
        if (c != e) {
          if (B) {
            var d = B.$GetTransition(r);
            if (d) {
              var h = U = a.$GetNow(),
                f = D[s(c)];
              return f.$LoadImage(a.$CreateCallback(i, X, c, f, d, h), y)
            }
          }
          pb(c)
        }
      };
      d.$TryActivate = function() {
        T(e, e, c)
      };
      d.$ParkOut = function() {
        m && m.$Quit();
        m && m.$Disable();
        d.$UnhideContentForSlideshow();
        h && h.$Abort();
        h = i;
        F()
      };
      d.$StampSlideItemElements = function(a) {
        a = gb + "_" + a
      };
      d.$HideContentForSlideshow = function() {
        a.$HideElement(o)
      };
      d.$UnhideContentForSlideshow = function() {
        a.$ShowElement(o)
      };
      d.$EnablePlayer = function() {
        m && m.$Enable()
      };

      function V(b, e, d) {
        if (a.$Attribute(b, "jssor-slider"))
          return;
        d = d || 0;
        if (!G) {
          if (b.tagName == "IMG") {
            C.push(b);
            if (!a.$Attribute(b, "src")) {
              Q = c;
              b["display-origin"] = a.$CssDisplay(b);
              a.$HideElement(b)
            }
          }
          a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1);
          if (p.$HWA && a.$WebKitVersion())
            (a.$WebKitVersion() < 534 || !eb && !a.$IsBrowserChrome()) && a.$EnableHWA(b)
        }
        var f = a.$Children(b);
        a.$Each(f, function(f) {
          var i = f.tagName,
            k = a.$AttributeEx(f, "u");
          if (k == "player" && !w) {
            w = f;
            if (w.pInstance)
              P();
            else
              a.$AddEvent(w, "dataavailable", P)
          }
          if (k == "caption") {
            if (!a.$IsBrowserIE() && !e) {
              var h = a.$CloneNode(f, g, c);
              a.$InsertBefore(h, f, b);
              a.$RemoveElement(f, b);
              f = h;
              e = c
            }
          } else if (!G && !d && !j) {
            if (i == "A") {
              if (a.$AttributeEx(f, "u") == "image")
                j = a.$FindChildByTag(f, "IMG");
              else
                j = a.$FindChild(f, "image", c);
              if (j) {
                H = f;
                a.$SetStyles(H, S);
                v = a.$CloneNode(H, c);
                a.$CssDisplay(v, "block");
                a.$SetStyles(v, S);
                a.$CssOpacity(v, 0);
                a.$Css(v, "backgroundColor", "#000")
              }
            } else if (i == "IMG" && a.$AttributeEx(f, "u") == "image")
              j = f;
            if (j) {
              j.border = 0;
              a.$SetStyles(j, S)
            }
          }
          V(f, e, d + 1)
        })
      }
      d.$OnInnerOffsetChange = function(c, b) {
        var a = u - b;
        Yb(N, a)
      };
      d.$GetCaptionSliderIn = function() {
        return q
      };
      d.$GetCaptionSliderOut = function() {
        return x
      };
      d.$Index = e;
      l.call(d);
      var E = a.$FindChild(o, "thumb", c);
      if (E) {
        d.$Thumb = a.$CloneNode(E);
        a.$RemoveAttribute(E, "id");
        a.$HideElement(E)
      }
      a.$ShowElement(o);
      y = a.$CloneNode(db);
      a.$CssZIndex(y, 1e3);
      a.$AddEvent(o, "click", Z);
      F(c);
      d.$Image = j;
      d.$Link = v;
      d.$Item = o;
      d.$Wrapper = N = o;
      a.$AppendChild(N, y);
      n.$On(203, T);
      n.$On(28, fb);
      n.$On(24, cb)
    }

    function xc(G, i, p, u, s) {
      var b = this,
        l = 0,
        w = 0,
        m, h, d, e, j, q, v, r, o = D[i];
      k.call(b, 0, 0);

      function x() {
        a.$Empty(O);
        cc && j && o.$Link && a.$AppendChild(O, o.$Link);
        a.$ShowElement(O, !j && o.$Image)
      }

      function y() {
        if (q) {
          q = g;
          n.$TriggerEvent(f.$EVT_ROLLBACK_END, i, d, l, h, d, e);
          b.$GoToPosition(h)
        }
        b.$Replay()
      }

      function z(a) {
        r = a;
        b.$Stop();
        b.$Replay()
      }
      b.$Replay = function() {
        var a = b.$GetPosition_Display();
        if (!C && !Q && !r && t == i) {
          if (!a) {
            if (m && !j) {
              j = c;
              b.$OpenSlideshowPanel(c);
              n.$TriggerEvent(f.$EVT_SLIDESHOW_START, i, l, w, m, e)
            }
            x()
          }
          var g, p = f.$EVT_STATE_CHANGE;
          if (a != e)
            if (a == d)
              g = e;
            else if (a == h)
            g = d;
          else if (!a)
            g = h;
          else if (a > d) {
            q = c;
            g = d;
            p = f.$EVT_ROLLBACK_START
          } else
            g = b.$GetPlayToPosition();
          n.$TriggerEvent(p, i, a, l, h, d, e);
          var k = R && (!E || F);
          if (a == e)
            (d != e && !(E & 12) || k) && o.$GoForNextSlide();
          else
            (k || a != d) && b.$PlayToPosition(g, y)
        }
      };
      b.$AdjustIdleOnPark = function() {
        d == e && d == b.$GetPosition_Display() && b.$GoToPosition(h)
      };
      b.$Abort = function() {
        B && B.$Index == i && B.$Clear();
        var a = b.$GetPosition_Display();
        a < e && n.$TriggerEvent(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, d, e)
      };
      b.$OpenSlideshowPanel = function(b) {
        p && a.$CssOverflow(jb, b && p.$Transition.$Outside ? "" : "hidden")
      };
      b.$OnInnerOffsetChange = function(b, a) {
        if (j && a >= m) {
          j = g;
          x();
          o.$UnhideContentForSlideshow();
          B.$Clear();
          n.$TriggerEvent(f.$EVT_SLIDESHOW_END, i, l, w, m, e)
        }
        n.$TriggerEvent(f.$EVT_PROGRESS_CHANGE, i, a, l, h, d, e)
      };
      b.$SetPlayer = function(a) {
        if (a && !v) {
          v = a;
          a.$On($JssorPlayer$.$EVT_SWITCH, z)
        }
      };
      p && b.$Chain(p);
      m = b.$GetPosition_OuterEnd();
      b.$GetPosition_OuterEnd();
      b.$Chain(u);
      h = u.$GetPosition_OuterEnd();
      d = h + (a.$ParseFloat(a.$AttributeEx(G, "idle")) || oc);
      s.$Shift(d);
      b.$Combine(s);
      e = b.$GetPosition_OuterEnd()
    }

    function Yb(g, f) {
      var e = x > 0 ? x : ib,
        c = Bb * f * (e & 1),
        d = Cb * f * (e >> 1 & 1);
      c = b.round(c);
      d = b.round(d);
      a.$CssLeft(g, c);
      a.$CssTop(g, d)
    }

    function Ob() {
      rb = Q;
      Kb = z.$GetPlayToPosition();
      G = w.$GetPosition()
    }

    function fc() {
      Ob();
      if (C || !F && E & 12) {
        z.$Stop();
        n.$TriggerEvent(f.$EVT_FREEZE)
      }
    }

    function dc(e) {
      if (!C && (F || !(E & 12)) && !z.$IsPlaying()) {
        var c = w.$GetPosition(),
          a = b.ceil(G);
        if (e && b.abs(H) >= p.$MinDragOffsetToSlide) {
          a = b.ceil(c);
          a += gb
        }
        if (!(A & 1))
          a = b.min(r - u, b.max(a, 0));
        var d = b.abs(a - c);
        d = 1 - b.pow(1 - d, 5);
        if (!M && rb)
          z.$Continue(Kb);
        else if (c == a) {
          vb.$EnablePlayer();
          vb.$TryActivate()
        } else
          z.$PlayCarousel(c, a, d * Ub)
      }
    }

    function Ib(b) {
      !a.$AttributeEx(a.$EvtSrc(b), "nodrag") && a.$CancelEvent(b)
    }

    function tc(a) {
      Xb(a, 1)
    }

    function Xb(b, d) {
      b = a.$GetEvent(b);
      var k = a.$EvtSrc(b);
      if (!K && !a.$AttributeEx(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
        C = c;
        Ab = g;
        U = i;
        a.$AddEvent(e, d ? "touchmove" : "mousemove", Db);
        a.$GetNow();
        M = 0;
        fc();
        if (!rb)
          x = 0;
        if (d) {
          var j = b.touches[0];
          wb = j.clientX;
          xb = j.clientY
        } else {
          var h = a.$MousePosition(b);
          wb = h.x;
          xb = h.y
        }
        H = 0;
        cb = 0;
        gb = 0;
        n.$TriggerEvent(f.$EVT_DRAG_START, s(G), G, b)
      }
    }

    function Db(e) {
      if (C) {
        e = a.$GetEvent(e);
        var f;
        if (e.type != "mousemove") {
          var l = e.touches[0];
          f = {
            x: l.clientX,
            y: l.clientY
          }
        } else
          f = a.$MousePosition(e);
        if (f) {
          var j = f.x - wb,
            k = f.y - xb;
          if (b.floor(G) != G)
            x = x || ib & K;
          if ((j || k) && !x) {
            if (K == 3)
              if (b.abs(k) > b.abs(j))
                x = 2;
              else
                x = 1;
            else
              x = K;
            if (lb && x == 1 && b.abs(k) - b.abs(j) > 3)
              Ab = c
          }
          if (x) {
            var d = k,
              i = Cb;
            if (x == 1) {
              d = j;
              i = Bb
            }
            if (!(A & 1)) {
              if (d > 0) {
                var g = i * t,
                  h = d - g;
                if (h > 0)
                  d = g + b.sqrt(h) * 5
              }
              if (d < 0) {
                var g = i * (r - u - t),
                  h = -d - g;
                if (h > 0)
                  d = -g - b.sqrt(h) * 5
              }
            }
            if (H - cb < -2)
              gb = 0;
            else if (H - cb > 2)
              gb = -1;
            cb = H;
            H = d;
            ub = G - H / i / (Z || 1);
            if (H && x && !Ab) {
              a.$CancelEvent(e);
              if (!Q)
                z.$StandBy(ub);
              else
                z.$SetStandByPosition(ub)
            }
          }
        }
      }
    }

    function ob() {
      rc();
      if (C) {
        C = g;
        a.$GetNow();
        a.$RemoveEvent(e, "mousemove", Db);
        a.$RemoveEvent(e, "touchmove", Db);
        M = H;
        z.$Stop();
        var b = w.$GetPosition();
        n.$TriggerEvent(f.$EVT_DRAG_END, s(b), b, s(G), G);
        E & 12 && Ob();
        dc(c)
      }
    }

    function jc(c) {
      if (M) {
        a.$StopEvent(c);
        var b = a.$EvtSrc(c);
        while (b && v !== b) {
          b.tagName == "A" && a.$CancelEvent(c);
          try {
            b = b.parentNode
          } catch (d) {
            break
          }
        }
      }
    }

    function nc(a) {
      D[t];
      t = s(a);
      vb = D[t];
      Tb(a);
      return t
    }

    function Fc(a, b) {
      x = 0;
      nc(a);
      n.$TriggerEvent(f.$EVT_PARK, s(a), b)
    }

    function Tb(b, c) {
      N = b;
      a.$Each(P, function(a) {
        a.$SetCurrentIndex(s(b), b, c)
      })
    }

    function uc() {
      var b = f.$DragRegistry || 0,
        a = Y;
      if (lb)
        a & 1 && (a &= 1);
      f.$DragRegistry |= a;
      return K = a & ~b
    }

    function rc() {
      if (K) {
        f.$DragRegistry &= ~Y;
        K = 0
      }
    }

    function Wb() {
      var b = a.$CreateDiv();
      a.$SetStyles(b, S);
      a.$CssPosition(b, "absolute");
      return b
    }

    function s(a) {
      return (a % r + r) % r
    }

    function kc(d, c) {
      var a = d;
      if (c) {
        if (!A) {
          a = b.min(b.max(a + N, 0), r - u);
          c = g
        } else if (A & 2) {
          a = s(a + N);
          c = g
        }
      } else if (A)
        a = n.$GetVirtualIndex(a);
      pb(a, p.$SlideDuration, c)
    }

    function zb() {
      a.$Each(P, function(a) {
        a.$Show(a.$Options.$ChanceToShow <= F)
      })
    }

    function hc() {
      if (!F) {
        F = 1;
        zb();
        if (!C) {
          E & 12 && dc();
          E & 3 && D[t].$TryActivate()
        }
      }
    }

    function gc() {
      if (F) {
        F = 0;
        zb();
        C || !(E & 12) || fc()
      }
    }

    function ic() {
      S = {
        $Width: J,
        $Height: I,
        $Top: 0,
        $Left: 0
      };
      a.$Each(V, function(b) {
        a.$SetStyles(b, S);
        a.$CssPosition(b, "absolute");
        a.$CssOverflow(b, "hidden");
        a.$HideElement(b)
      });
      a.$SetStyles(db, S)
    }

    function nb(b, a) {
      pb(b, a, c)
    }

    function pb(f, e, k) {
      if (Qb && (!C && (F || !(E & 12)) || p.$NaviQuitDrag)) {
        Q = c;
        C = g;
        z.$Stop();
        if (e == j)
          e = Ub;
        var d = Eb.$GetPosition_Display(),
          a = f;
        if (k) {
          a = d + f;
          if (f > 0)
            a = b.ceil(a);
          else
            a = b.floor(a)
        }
        if (A & 2)
          a = s(a);
        if (!(A & 1))
          a = b.max(0, b.min(a, r - u));
        var i = (a - d) % r;
        a = d + i;
        var h = d == a ? 0 : e * b.abs(i);
        h = b.min(h, e * u * 1.5);
        z.$PlayCarousel(d, a, h || 1)
      }
    }
    n.$PlayTo = pb;
    n.$GoTo = function(a) {
      w.$GoToPosition(a)
    };
    n.$Next = function() {
      nb(1)
    };
    n.$Prev = function() {
      nb(-1)
    };
    n.$Pause = function() {
      R = g
    };
    n.$Play = function() {
      if (!R) {
        R = c;
        D[t] && D[t].$TryActivate()
      }
    };
    n.$SetSlideshowTransitions = function(a) {
      p.$SlideshowOptions.$Transitions = a
    };
    n.$SetCaptionTransitions = function(b) {
      L.$CaptionTransitions = b;
      L.$Version = a.$GetNow()
    };
    n.$SlidesCount = function() {
      return V.length
    };
    n.$CurrentIndex = function() {
      return t
    };
    n.$IsAutoPlaying = function() {
      return R
    };
    n.$IsDragging = function() {
      return C
    };
    n.$IsSliding = function() {
      return Q
    };
    n.$IsMouseOver = function() {
      return !F
    };
    n.$LastDragSucceded = function() {
      return M
    };

    function X() {
      return a.$CssWidth(y || q)
    }

    function kb() {
      return a.$CssHeight(y || q)
    }
    n.$OriginalWidth = n.$GetOriginalWidth = X;
    n.$OriginalHeight = n.$GetOriginalHeight = kb;

    function Gb(c, d) {
      if (c == j)
        return a.$CssWidth(q);
      if (!y) {
        var b = a.$CreateDiv(e);
        a.$ClassName(b, a.$ClassName(q));
        a.$CssCssText(b, a.$CssCssText(q));
        a.$CssDisplay(b, "block");
        a.$CssPosition(b, "relative");
        a.$CssTop(b, 0);
        a.$CssLeft(b, 0);
        a.$CssOverflow(b, "visible");
        y = a.$CreateDiv(e);
        a.$CssPosition(y, "absolute");
        a.$CssTop(y, 0);
        a.$CssLeft(y, 0);
        a.$CssWidth(y, a.$CssWidth(q));
        a.$CssHeight(y, a.$CssHeight(q));
        a.$SetStyleTransformOrigin(y, "0 0");
        a.$AppendChild(y, b);
        var h = a.$Children(q);
        a.$AppendChild(q, y);
        a.$Css(q, "backgroundImage", "");
        a.$Each(h, function(c) {
          a.$AppendChild(a.$AttributeEx(c, "noscale") ? q : b, c)
        })
      }
      Z = c / (d ? a.$CssHeight : a.$CssWidth)(y);
      a.$CssScale(y, Z);
      var g = d ? Z * X() : c,
        f = d ? c : Z * kb();
      a.$CssWidth(q, g);
      a.$CssHeight(q, f);
      a.$Each(P, function(a) {
        a.$Relocate(g, f)
      })
    }
    n.$ScaleHeight = n.$GetScaleHeight = function(b) {
      if (b == j)
        return a.$CssHeight(q);
      Gb(b, c)
    };
    n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Gb;
    n.$GetVirtualIndex = function(a) {
      var d = b.ceil(s(hb / ac)),
        c = s(a - N + d);
      if (c > u) {
        if (a - N > r / 2)
          a -= r;
        else if (a - N <= -r / 2)
          a += r
      } else
        a = N + c - d;
      return a
    };
    l.call(n);
    n.$Elmt = q = a.$GetElement(q);
    var p = a.$Extend({
      $FillMode: 0,
      $LazyLoading: 1,
      $StartIndex: 0,
      $AutoPlay: g,
      $Loop: 1,
      $HWA: c,
      $NaviQuitDrag: c,
      $AutoPlaySteps: 1,
      $AutoPlayInterval: 3e3,
      $PauseOnHover: 1,
      $SlideDuration: 500,
      $SlideEasing: d.$EaseOutQuad,
      $MinDragOffsetToSlide: 20,
      $SlideSpacing: 0,
      $DisplayPieces: 1,
      $ParkingPosition: 0,
      $UISearchMode: 1,
      $PlayOrientation: 1,
      $DragOrientation: 1
    }, ec);
    if (p.$Idle != j)
      p.$AutoPlayInterval = p.$Idle;
    if (p.$Cols != j)
      p.$DisplayPieces = p.$Cols;
    var ib = p.$PlayOrientation & 3,
      vc = (p.$PlayOrientation & 4) / -4 || 1,
      fb = p.$SlideshowOptions,
      L = a.$Extend({
        $Class: o,
        $PlayInMode: 1,
        $PlayOutMode: 1
      }, p.$CaptionSliderOptions),
      sb = p.$BulletNavigatorOptions,
      W = p.$ArrowNavigatorOptions,
      bb = p.$ThumbnailNavigatorOptions,
      T = !p.$UISearchMode,
      y, v = a.$FindChild(q, "slides", T),
      db = a.$FindChild(q, "loading", T) || a.$CreateDiv(e),
      Jb = a.$FindChild(q, "navigator", T),
      bc = a.$FindChild(q, "arrowleft", T),
      Zb = a.$FindChild(q, "arrowright", T),
      Hb = a.$FindChild(q, "thumbnavigator", T),
      mc = a.$CssWidth(v),
      lc = a.$CssHeight(v),
      S, V = [],
      wc = a.$Children(v);
    a.$Each(wc, function(b) {
      if (b.tagName == "DIV" && !a.$AttributeEx(b, "u"))
        V.push(b);
      else
        a.$IsBrowserIe9Earlier() && a.$CssZIndex(b, (a.$CssZIndex(b) || 0) + 1)
    });
    var t = -1,
      N, vb, r = V.length,
      J = p.$SlideWidth || mc,
      I = p.$SlideHeight || lc,
      Vb = p.$SlideSpacing,
      Bb = J + Vb,
      Cb = I + Vb,
      ac = ib & 1 ? Bb : Cb,
      u = b.min(p.$DisplayPieces, r),
      jb, x, K, Ab, P = [],
      Pb, Rb, Nb, cc, Ec, R, E = p.$PauseOnHover,
      oc = p.$AutoPlayInterval,
      Ub = p.$SlideDuration,
      tb, eb, hb, Qb = u < r,
      A = Qb ? p.$Loop : 0,
      Y, M, F = 1,
      Q, C, U, wb = 0,
      xb = 0,
      H, cb, gb, Eb, w, ab, z, Sb = new qc,
      Z;
    R = p.$AutoPlay;
    n.$Options = ec;
    ic();
    a.$Attribute(q, "jssor-slider", c);
    a.$CssZIndex(v, a.$CssZIndex(v) || 0);
    a.$CssPosition(v, "absolute");
    jb = a.$CloneNode(v, c);
    a.$InsertBefore(jb, v);
    if (fb) {
      cc = fb.$ShowLink;
      tb = fb.$Class;
      eb = u == 1 && r > 1 && tb && (!a.$IsBrowserIE() || a.$BrowserVersion() >= 8)
    }
    hb = eb || u >= r || !(A & 1) ? 0 : p.$ParkingPosition;
    Y = (u > 1 || hb ? ib : -1) & p.$DragOrientation;
    var yb = v,
      D = [],
      B, O, Fb = a.$Device(),
      lb = Fb.$Touchable,
      G, rb, Kb, ub;
    Fb.$TouchActionAttr && a.$Css(yb, Fb.$TouchActionAttr, ([i, "pan-y", "pan-x", "none"])[Y] || "");
    ab = new Bc;
    if (eb)
      B = new tb(Sb, J, I, fb, lb);
    a.$AppendChild(jb, ab.$Wrapper);
    a.$CssOverflow(v, "hidden");
    O = Wb();
    a.$Css(O, "backgroundColor", "#000");
    a.$CssOpacity(O, 0);
    a.$InsertBefore(O, yb.firstChild, yb);
    for (var qb = 0; qb < V.length; qb++) {
      var yc = V[qb],
        Ac = new zc(yc, qb);
      D.push(Ac)
    }
    a.$HideElement(db);
    Eb = new Cc;
    z = new pc(Eb, ab);
    if (Y) {
      a.$AddEvent(v, "mousedown", Xb);
      a.$AddEvent(v, "touchstart", tc);
      a.$AddEvent(v, "dragstart", Ib);
      a.$AddEvent(v, "selectstart", Ib);
      a.$AddEvent(e, "mouseup", ob);
      a.$AddEvent(e, "touchend", ob);
      a.$AddEvent(e, "touchcancel", ob);
      a.$AddEvent(h, "blur", ob)
    }
    E &= lb ? 10 : 5;
    if (Jb && sb) {
      Pb = new sb.$Class(Jb, sb, X(), kb());
      P.push(Pb)
    }
    if (W && bc && Zb) {
      W.$Loop = A;
      W.$DisplayPieces = u;
      Rb = new W.$Class(bc, Zb, W, X(), kb());
      P.push(Rb)
    }
    if (Hb && bb) {
      bb.$StartIndex = p.$StartIndex;
      Nb = new bb.$Class(Hb, bb);
      P.push(Nb)
    }
    a.$Each(P, function(a) {
      a.$Reset(r, D, db);
      a.$On(m.$NAVIGATIONREQUEST, kc)
    });
    Gb(X());
    a.$AddEvent(v, "click", jc);
    a.$AddEvent(q, "mouseout", a.$MouseOverOutFilter(hc, q));
    a.$AddEvent(q, "mouseover", a.$MouseOverOutFilter(gc, q));
    zb();
    p.$ArrowKeyNavigation && a.$AddEvent(e, "keydown", function(a) {
      if (a.keyCode == 37)
        nb(-1);
      else
        a.keyCode == 39 && nb(1)
    });
    var mb = p.$StartIndex;
    if (!(A & 1))
      mb = b.max(0, b.min(mb, r - u));
    z.$PlayCarousel(mb, mb, 0)
  };
  h.$JssorSlideo$ = f;
  f.$EVT_CLICK = 21;
  f.$EVT_DRAG_START = 22;
  f.$EVT_DRAG_END = 23;
  f.$EVT_SWIPE_START = 24;
  f.$EVT_SWIPE_END = 25;
  f.$EVT_LOAD_START = 26;
  f.$EVT_LOAD_END = 27;
  f.$EVT_FREEZE = 28;
  f.$EVT_POSITION_CHANGE = 202;
  f.$EVT_PARK = 203;
  f.$EVT_SLIDESHOW_START = 206;
  f.$EVT_SLIDESHOW_END = 207;
  f.$EVT_PROGRESS_CHANGE = 208;
  f.$EVT_STATE_CHANGE = 209;
  f.$EVT_ROLLBACK_START = 210;
  f.$EVT_ROLLBACK_END = 211;
  var m = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
  };
  h.$JssorBulletNavigator$ = function(d, D) {
    var f = this;
    l.call(f);
    d = a.$GetElement(d);
    var t, u, s, r, n = 0,
      e, o, k, y, z, j, h, q, p, C = [],
      A = [];

    function x(a) {
      a != -1 && A[a].$Selected(a == n)
    }

    function v(a) {
      f.$TriggerEvent(m.$NAVIGATIONREQUEST, a * o)
    }
    f.$Elmt = d;
    f.$GetCurrentIndex = function() {
      return r
    };
    f.$SetCurrentIndex = function(a) {
      if (a != r) {
        var d = n,
          c = b.floor(a / o);
        n = c;
        r = a;
        x(d);
        x(c)
      }
    };
    f.$Show = function(b) {
      a.$ShowElement(d, b)
    };
    var B;
    f.$Relocate = function(f, b) {
      if (!B || e.$Scale == g) {
        var f = a.$ParentNode(d).clientWidth,
          b = a.$ParentNode(d).clientHeight;
        e.$AutoCenter & 1 && a.$CssLeft(d, (f - u) / 2);
        e.$AutoCenter & 2 && a.$CssTop(d, (b - s) / 2);
        B = c
      }
    };
    var w;
    f.$Reset = function(D) {
      if (!w) {
        t = b.ceil(D / o);
        n = 0;
        var m = q + y,
          r = p + z,
          l = b.ceil(t / k) - 1;
        u = q + m * (!j ? l : k - 1);
        s = p + r * (j ? l : k - 1);
        a.$CssWidth(d, u);
        a.$CssHeight(d, s);
        for (var f = 0; f < t; f++) {
          var B = a.$CreateSpan();
          a.$InnerText(B, f + 1);
          var g = a.$BuildElement(h, "numbertemplate", B, c);
          a.$CssPosition(g, "absolute");
          var x = f % (l + 1);
          a.$CssLeft(g, !j ? m * x : f % k * m);
          a.$CssTop(g, j ? r * x : b.floor(f / (l + 1)) * r);
          a.$AppendChild(d, g);
          C[f] = g;
          e.$ActionMode & 1 && a.$AddEvent(g, "click", a.$CreateCallback(i, v, f));
          e.$ActionMode & 2 && a.$AddEvent(g, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(i, v, f), g));
          A[f] = a.$Buttonize(g)
        }
        w = c
      }
    };
    f.$Options = e = a.$Extend({
      $SpacingX: 0,
      $SpacingY: 0,
      $Orientation: 1,
      $ActionMode: 1
    }, D);
    h = a.$FindChild(d, "prototype");
    q = a.$CssWidth(h);
    p = a.$CssHeight(h);
    a.$RemoveElement(h, d);
    o = e.$Steps || 1;
    k = e.$Lanes || 1;
    y = e.$SpacingX;
    z = e.$SpacingY;
    j = e.$Orientation - 1;
    e.$Scale == g && a.$Attribute(d, "noscale", c)
  };
  h.$JssorArrowNavigator$ = function(b, f, j) {
    var d = this;
    l.call(d);
    var u, t, e, h, k, q = a.$CssWidth(b),
      o = a.$CssHeight(b);

    function n(a) {
      d.$TriggerEvent(m.$NAVIGATIONREQUEST, a, c)
    }

    function r(c) {
      a.$ShowElement(b, c || !j.$Loop && e == 0);
      a.$ShowElement(f, c || !j.$Loop && e >= t - j.$DisplayPieces);
      u = c
    }
    d.$GetCurrentIndex = function() {
      return e
    };
    d.$SetCurrentIndex = function(b, a, c) {
      if (c)
        e = a;
      else {
        e = b;
        r(u)
      }
    };
    d.$Show = r;
    var s;
    d.$Relocate = function(i, d) {
      if (!s || h.$Scale == g) {
        var e = a.$ParentNode(b).clientWidth,
          d = a.$ParentNode(b).clientHeight;
        if (h.$AutoCenter & 1) {
          a.$CssLeft(b, (e - q) / 2);
          a.$CssLeft(f, (e - q) / 2)
        }
        if (h.$AutoCenter & 2) {
          a.$CssTop(b, (d - o) / 2);
          a.$CssTop(f, (d - o) / 2)
        }
        s = c
      }
    };
    var p;
    d.$Reset = function(d) {
      t = d;
      e = 0;
      if (!p) {
        a.$AddEvent(b, "click", a.$CreateCallback(i, n, -k));
        a.$AddEvent(f, "click", a.$CreateCallback(i, n, k));
        a.$Buttonize(b);
        a.$Buttonize(f);
        p = c
      }
    };
    d.$Options = h = a.$Extend({
      $Steps: 1
    }, j);
    k = h.$Steps;
    if (h.$Scale == g) {
      a.$Attribute(b, "noscale", c);
      a.$Attribute(f, "noscale", c)
    }
  };
  h.$JssorThumbnailNavigator$ = function(k, C) {
    var h = this,
      z, q, d, w = [],
      A, y, n, r, s, u, t, p, v, e, o;
    l.call(h);
    k = a.$GetElement(k);

    function B(l, e) {
      var f = this,
        b, k, j;

      function n() {
        k.$Selected(q == e)
      }

      function g(a) {
        (a || !v.$LastDragSucceded()) && h.$TriggerEvent(m.$NAVIGATIONREQUEST, e)
      }
      f.$Index = e;
      f.$Highlight = n;
      j = l.$Thumb || l.$Image || a.$CreateDiv();
      f.$Wrapper = b = a.$BuildElement(o, "thumbnailtemplate", j, c);
      k = a.$Buttonize(b);
      d.$ActionMode & 1 && a.$AddEvent(b, "click", a.$CreateCallback(i, g, 0));
      d.$ActionMode & 2 && a.$AddEvent(b, "mouseover", a.$MouseOverOutFilter(a.$CreateCallback(i, g, 1), b))
    }
    h.$GetCurrentIndex = function() {
      return q
    };
    h.$SetCurrentIndex = function(c, d, e) {
      var a = q;
      q = c;
      a != -1 && w[a].$Highlight();
      w[c].$Highlight();
      !e && v.$PlayTo(v.$GetVirtualIndex(b.floor(d / n)))
    };
    h.$Show = function(b) {
      a.$ShowElement(k, b)
    };
    h.$Relocate = a.$EmptyFunction;
    var x;
    h.$Reset = function(F, C) {
      if (!x) {
        z = F;
        b.ceil(z / n);
        q = -1;
        p = b.min(p, C.length);
        var h = d.$Orientation & 1,
          l = u + (u + r) * (n - 1) * (1 - h),
          j = t + (t + s) * (n - 1) * h,
          o = l + (l + r) * (p - 1) * h,
          m = j + (j + s) * (p - 1) * (1 - h);
        a.$CssPosition(e, "absolute");
        a.$CssOverflow(e, "hidden");
        d.$AutoCenter & 1 && a.$CssLeft(e, (A - o) / 2);
        d.$AutoCenter & 2 && a.$CssTop(e, (y - m) / 2);
        a.$CssWidth(e, o);
        a.$CssHeight(e, m);
        var i = [];
        a.$Each(C, function(k, f) {
          var g = new B(k, f),
            d = g.$Wrapper,
            c = b.floor(f / n),
            j = f % n;
          a.$CssLeft(d, (u + r) * j * (1 - h));
          a.$CssTop(d, (t + s) * j * h);
          if (!i[c]) {
            i[c] = a.$CreateDiv();
            a.$AppendChild(e, i[c])
          }
          a.$AppendChild(i[c], d);
          w.push(g)
        });
        var E = a.$Extend({
          $HWA: g,
          $AutoPlay: g,
          $NaviQuitDrag: g,
          $SlideWidth: l,
          $SlideHeight: j,
          $SlideSpacing: r * h + s * (1 - h),
          $MinDragOffsetToSlide: 12,
          $SlideDuration: 200,
          $PauseOnHover: 1,
          $PlayOrientation: d.$Orientation,
          $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation
        }, d);
        v = new f(k, E);
        x = c
      }
    };
    h.$Options = d = a.$Extend({
      $SpacingX: 3,
      $SpacingY: 3,
      $DisplayPieces: 1,
      $Orientation: 1,
      $AutoCenter: 3,
      $ActionMode: 1
    }, C);
    if (d.$Rows != j)
      d.$Lanes = d.$Rows;
    A = a.$CssWidth(k);
    y = a.$CssHeight(k);
    e = a.$FindChild(k, "slides", c);
    o = a.$FindChild(e, "prototype");
    u = a.$CssWidth(o);
    t = a.$CssHeight(o);
    a.$RemoveElement(o, e);
    n = d.$Lanes || 1;
    r = d.$SpacingX;
    s = d.$SpacingY;
    p = d.$DisplayPieces;
    d.$Scale == g && a.$Attribute(k, "noscale", c)
  };

  function o() {
    k.call(this, 0, 0);
    this.$Revert = a.$EmptyFunction
  }
  h.$JssorCaptionSlider$ = function(p, h, f) {
    var c = this,
      g, n = f ? h.$PlayInMode : h.$PlayOutMode,
      e = h.$CaptionTransitions,
      o = {
        $Transition: "t",
        $Delay: "d",
        $Duration: "du",
        x: "x",
        y: "y",
        $Rotate: "r",
        $Zoom: "z",
        $Opacity: "f",
        $BeginTime: "b"
      },
      d = {
        $Default: function(b, a) {
          if (!isNaN(a.$Value))
            b = a.$Value;
          else
            b *= a.$Percent;
          return b
        },
        $Opacity: function(b, a) {
          return this.$Default(b - 1, a)
        }
      };
    d.$Zoom = d.$Opacity;
    k.call(c, 0, 0);

    function l(r, m) {
      var k = [],
        i, j = [],
        c = [];

      function h(c, d) {
        var b = {};
        a.$Each(o, function(g, h) {
          var e = a.$AttributeEx(c, g + (d || ""));
          if (e) {
            var f = {};
            if (g == "t")
              f.$Value = e;
            else if (e.indexOf("%") + 1)
              f.$Percent = a.$ParseFloat(e) / 100;
            else
              f.$Value = a.$ParseFloat(e);
            b[h] = f
          }
        });
        return b
      }

      function p() {
        return e[b.floor(b.random() * e.length)]
      }

      function g(f) {
        var h;
        if (f == "*")
          h = p();
        else if (f) {
          var d = e[a.$ParseInt(f)] || e[f];
          if (a.$IsArray(d)) {
            if (f != i) {
              i = f;
              c[f] = 0;
              j[f] = d[b.floor(b.random() * d.length)]
            } else
              c[f]++;
            d = j[f];
            if (a.$IsArray(d)) {
              d = d.length && d[c[f] % d.length];
              if (a.$IsArray(d))
                d = d[b.floor(b.random() * d.length)]
            }
          }
          h = d;
          if (a.$IsString(h))
            h = g(h)
        }
        return h
      }
      var q = a.$Children(r);
      a.$Each(q, function(b) {
        var c = [];
        c.$Elmt = b;
        var e = a.$AttributeEx(b, "u") == "caption";
        a.$Each(f ? [0, 3] : [2], function(k, o) {
          if (e) {
            var j, f;
            if (k != 2 || !a.$AttributeEx(b, "t3")) {
              f = h(b, k);
              if (k == 2 && !f.$Transition) {
                f.$Delay = f.$Delay || {
                  $Value: 0
                };
                f = a.$Extend(h(b, 0), f)
              }
            }
            if (f && f.$Transition) {
              j = g(f.$Transition.$Value);
              if (j) {
                var i = a.$Extend({
                  $Delay: 0
                }, j);
                a.$Each(f, function(c, a) {
                  var b = (d[a] || d.$Default).apply(d, [i[a], f[a]]);
                  if (!isNaN(b))
                    i[a] = b
                });
                if (!o)
                  if (f.$BeginTime)
                    i.$BeginTime = f.$BeginTime.$Value || 0;
                  else if (n & 2)
                  i.$BeginTime = 0
              }
            }
            c.push(i)
          }
          if (m % 2 && !o)
            c.$Children = l(b, m + 1)
        });
        k.push(c)
      });
      return k
    }

    function m(w, c, z) {
      var g = {
          $Easing: c.$Easing,
          $Round: c.$Round,
          $During: c.$During,
          $Reverse: f && !z
        },
        m = w,
        r = a.$ParentNode(w),
        l = a.$CssWidth(m),
        j = a.$CssHeight(m),
        y = a.$CssWidth(r),
        x = a.$CssHeight(r),
        h = {},
        e = {},
        i = c.$ScaleClip || 1;
      if (c.$Opacity)
        e.$Opacity = 1 - c.$Opacity;
      g.$OriginalWidth = l;
      g.$OriginalHeight = j;
      if (c.$Zoom || c.$Rotate) {
        e.$Zoom = (c.$Zoom || 2) - 2;
        if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera())
          e.$Zoom = b.min(e.$Zoom, 1);
        h.$Zoom = 1;
        var B = c.$Rotate || 0;
        e.$Rotate = B * 360;
        h.$Rotate = 0
      } else if (c.$Clip) {
        var s = {
            $Top: 0,
            $Right: l,
            $Bottom: j,
            $Left: 0
          },
          v = a.$Extend({}, s),
          d = v.$Offset = {},
          u = c.$Clip & 4,
          p = c.$Clip & 8,
          t = c.$Clip & 1,
          q = c.$Clip & 2;
        if (u && p) {
          d.$Top = j / 2 * i;
          d.$Bottom = -d.$Top
        } else if (u)
          d.$Bottom = -j * i;
        else if (p)
          d.$Top = j * i;
        if (t && q) {
          d.$Left = l / 2 * i;
          d.$Right = -d.$Left
        } else if (t)
          d.$Right = -l * i;
        else if (q)
          d.$Left = l * i;
        g.$Move = c.$Move;
        e.$Clip = v;
        h.$Clip = s
      }
      var n = 0,
        o = 0;
      if (c.x)
        n -= y * c.x;
      if (c.y)
        o -= x * c.y;
      if (n || o || g.$Move) {
        e.$Left = n;
        e.$Top = o
      }
      var A = c.$Duration;
      h = a.$Extend(h, a.$GetStyles(m, e));
      g.$Setter = a.$StyleSetterEx();
      return new k(c.$Delay, A, g, m, h, e)
    }

    function i(b, d) {
      a.$Each(d, function(a) {
        var e, h = a.$Elmt,
          d = a[0],
          k = a[1];
        if (d) {
          e = m(h, d);
          b = e.$Locate(d.$BeginTime == j ? b : d.$BeginTime, 1)
        }
        b = i(b, a.$Children);
        if (k) {
          var f = m(h, k, 1);
          f.$Locate(b, 1);
          c.$Combine(f);
          g.$Combine(f)
        }
        e && c.$Combine(e)
      });
      return b
    }
    c.$Revert = function() {
      c.$GoToPosition(c.$GetPosition_OuterEnd() * (f || 0));
      g.$GoToPosition(0)
    };
    g = new k(0, 0);
    i(0, n ? l(p, 1) : [])
  };
})(window, document, Math, null, true, false);
$('document').ready(function() {
  unitActiveItem();
  if (Modernizr.touch) {
    var menuOpen = false;
    $('#fieldmegamenu-main .root-item').on('touchstart', function(e) {
      var self = e.target;
      if (!menuOpen) {
        menuOpen = true;
        showMegamenuMenu(self);
      } else if (menuOpen && !$(this).closest('.root').children('.menu-items').hasClass('active')) {
        hideMegamenuMenu();
        showMegamenuMenu(self);
      } else {
        menuOpen = false;
        hideMegamenuMenu();
      }
    });
  } else {
    $('#fieldmegamenu-main .root').hover(function(e) {
      if (LANG_RTL != 1)
        $(this).doTimeout('fieldmenuhover', 250, showMegamenuMenu, e.target);
      else
        $(this).doTimeout('fieldmenuhover', 250, showMegamenuMenu_rtl, e.target);
      $(this).addClass('active');
    }, function() {
      $(this).doTimeout('fieldmenuhover', 250, hideMegamenuMenu);
      $(this).removeClass('active');
    });
  }
  var $_expandElement = $('<span/>', {
    class: 'fieldmegamenu-mobile-handle icon-plus small'
  });
  var clickHandler = 'click';
  if (Modernizr.touch) {
    clickHandler = 'touchstart';
  }
  $('#header_mobile_menu .fieldmegamenu > ul > li').each(function() {
    if ($(this).children('.menu-items').length > 0 && $(this).children('.fieldmegamenu-mobile-handle').length == 0) {
      $(this).children('.root-item').after($_expandElement.clone());
    }
  });
  $('#header_mobile_menu .fieldmegamenu .fieldmegamenu-mobile-handle').on(clickHandler, function(e) {
    e.preventDefault();
    if ($(this).next('ul').length > 0) {
      if ($(this).next('ul').is(':visible')) {
        $(this).next('ul').slideUp('fast');
        $(this).toggleClass('icon-plus icon-minus');
      } else {
        $(this).next('ul').slideDown('fast');
        $(this).toggleClass('icon-plus icon-minus');
      }
    }
  });
});

function showMegamenuMenu(el) {
  var mWidth = $('#fieldmegamenu-main').closest('.container').width();
  var pWidth = $(el).closest('.root').children('.menu-items').outerWidth();
  var _mpadding = ($(window).width() - mWidth) / 2;
  var _menuHeight = $('#fieldmegamenu-main').height();
  var mTop = _menuHeight;
  var _containerOffset = $('#fieldmegamenu-main').closest('.container').offset();
  var _containerLeftPadding = parseInt($('#fieldmegamenu-main').closest('.container').css('padding-left'));
  var _mainOffset = $('#fieldmegamenu-main').offset();
  var _menuPopupOffset = $(el).closest('.root').offset();
  var mLeft = _menuPopupOffset.left - _mpadding + (_containerOffset.left - _mainOffset.left) + _containerLeftPadding;
  if (mLeft + pWidth > mWidth)
    var xLeft = mWidth - pWidth + (_containerOffset.left - _mainOffset.left) + _containerLeftPadding;
  else
    var xLeft = _menuPopupOffset.left - _mpadding + (_containerOffset.left - _mainOffset.left) + _containerLeftPadding;
  $(el).closest('.root').children('.menu-items').css({
    'top': mTop,
    'left': xLeft
  }).addClass('active').slideDown('slow');
}

function showMegamenuMenu_rtl(el) {
  var mWidth = $('#fieldmegamenu-main').closest('.container').width();
  var pWidth = $(el).closest('.root').children('.menu-items').outerWidth();
  var _mpadding = ($(window).width() - mWidth) / 2;
  var _menuHeight = $('#fieldmegamenu-main').height();
  var mTop = _menuHeight;
  var _containerOffset = $('#fieldmegamenu-main').closest('.container').offset();
  var _containerRightPadding = parseInt($('#fieldmegamenu-main').closest('.container').css('padding-right'));
  var _mainOffset = $('#fieldmegamenu-main').offset();
  var _menuPopupOffset = $(el).closest('.root').offset();
  var liWidth = $(el).closest('.root').outerWidth();
  var mRight = $(window).width() - (_menuPopupOffset.left + liWidth) - _mpadding + (_containerOffset.left - _mainOffset.left) + _containerRightPadding;
  if (mRight + pWidth > mWidth)
    var xRight = mWidth - pWidth + (_containerOffset.left - _mainOffset.left) + _containerRightPadding;
  else
    var xRight = $(window).width() - (_menuPopupOffset.left + liWidth) - _mpadding + (_containerOffset.left - _mainOffset.left) + _containerRightPadding;
  $(el).closest('.root').children('.menu-items').css({
    'top': mTop,
    'right': xRight,
    'left': 'auto'
  }).addClass('active').slideDown('slow');
}

function hideMegamenuMenu() {
  $('#fieldmegamenu-main .menu-items.active').removeClass('active').slideUp();
}

function unitActiveItem() {
  $("#fieldmegamenu-main .root").each(function() {
    var url = document.URL;
    url = url.replace("/#", "");
    var url_lang_iso = "/" + langIso.substring(0, 2);
    var url_lang_iso_this = url.substring(url.lastIndexOf(baseUri) + baseUri.length - 1, url.lastIndexOf(baseUri) + baseUri.length + 2);
    if (url_lang_iso_this == url_lang_iso) {
      var urlx = url.substring(0, url.lastIndexOf(baseUri) + baseUri.length - 1);
      var urly = url.substring(url.lastIndexOf(baseUri) + baseUri.length + 2, url.length);
      var url0 = urlx.concat(urly);
    } else
      var url0 = url;
    var url1 = url0.replace(url0.substring(0, url0.indexOf("/") + 1), "");
    var url2 = url1.replace(url1.substring(0, url1.indexOf("/") + 1), "");
    var url3 = url2.replace(url2.substring(0, url2.indexOf("/")), "");
    var url4 = url.replace(url.substring(0, url.indexOf("/") + 1), "");
    var url5 = url4.replace(url4.substring(0, url4.indexOf("/") + 1), "");
    var url6 = url5.replace(url5.substring(0, url5.indexOf("/")), "");
    $(".fieldmegamenu .root .root-item a").removeClass("active");
    $('.fieldmegamenu .root .root-item a[href="' + url + '"]').addClass('active');
    $('.fieldmegamenu .root .root-item a[href="' + url0 + '"]').addClass('active');
    $('.fieldmegamenu .root .root-item a[href="' + url3 + '"]').addClass('active');
    $('.fieldmegamenu .root .root-item a[href="' + url6 + '"]').addClass('active');
  });
};;
(function($) {
  $.fn.flexisel = function(options) {
    var defaults = $.extend({
      pref: "flexi",
      visibleItems: 4,
      itemMargin: 20,
      animationSpeed: 200,
      autoPlay: false,
      autoPlaySpeed: 3000,
      pauseOnHover: true,
      setMaxWidthAndHeight: false,
      showbuttons: false,
      enableResponsiveBreakpoints: true,
      clone: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint: 480,
          visibleItems: 1
        },
        landscape: {
          changePoint: 728,
          visibleItems: 2
        },
        tablet: {
          changePoint: 991,
          visibleItems: 3
        },
        tablet_lanf: {
          changePoint: 1199,
          visibleItems: 5
        }
      }
    }, options);
    var object = $(this);
    var settings = $.extend(defaults, options);
    var itemsWidth;
    var canNavigate = true;
    var itemsVisible = settings.visibleItems;
    var itemMargin = settings.itemMargin;
    var pref = settings.pref;
    var totalItems = object.children().length;
    var responsivePoints = [];
    var methods = {
      init: function() {
        return this.each(function() {
          methods.appendHTML();
          methods.setEventHandlers();
          methods.initializeItems();
        });
      },
      initializeItems: function() {
        var listParent = object.parent();
        var innerHeight = listParent.height();
        var childSet = object.children();
        methods.sortResponsiveObject(settings.responsiveBreakpoints);
        var innerWidth = listParent.width();
        itemsWidth = (innerWidth) / itemsVisible;
        childSet.width(itemsWidth);
        if (settings.clone) {
          childSet.last().insertBefore(childSet.first());
          childSet.last().insertBefore(childSet.first());
          object.css({
            'left': -itemsWidth
          });
        }
        object.fadeIn();
        $(window).trigger("resize");
      },
      appendHTML: function() {
        object.addClass("nbs-flexisel-ul");
        object.wrap("<div class='" + pref + "-nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
        object.find("li").addClass("nbs-flexisel-item");
        if (settings.setMaxWidthAndHeight) {
          var baseWidth = $(".nbs-flexisel-item img").width();
          var baseHeight = $(".nbs-flexisel-item img").height();
          $(".nbs-flexisel-item img").css("max-width", baseWidth);
          $(".nbs-flexisel-item img").css("max-height", baseHeight);
        }
        $("<div class='flexisel-nav-wrapper'><div class='" + pref + "-flexisel-left flexisel-nav nbs-flexisel-nav-left'></div><div class='" + pref + "-flexisel-right flexisel-nav nbs-flexisel-nav-right'></div></div>").insertAfter('.' + pref + '-nbs-flexisel-container');
        if (settings.clone) {
          var cloneContent = object.children().clone();
          object.append(cloneContent);
        }
      },
      setEventHandlers: function() {
        var listParent = object.parent();
        var childSet = object.children();
        var leftArrow = $("." + pref + "-flexisel-left");
        var rightArrow = $("." + pref + "-flexisel-right");
        $(window).on("resize", function(event) {
          methods.setResponsiveEvents();
          var innerWidth = $(listParent).width();
          var innerHeight = $(listParent).height();
          itemsWidth = (innerWidth) / itemsVisible;
          childSet.width(itemsWidth);
          if (settings.clone) {
            object.css({
              'left': -itemsWidth
            });
          } else {
            object.css({
              'left': 0
            });
          }
        });
        $(leftArrow).on("click", function(event) {
          methods.f_scrollLeft();
        });
        $(rightArrow).on("click", function(event) {
          methods.f_scrollRight();
        });
        if (settings.pauseOnHover == true) {
          $(".nbs-flexisel-item").on({
            mouseenter: function() {
              canNavigate = false;
            },
            mouseleave: function() {
              canNavigate = true;
            }
          });
        }
        if (settings.autoPlay == true) {
          setInterval(function() {
            if (canNavigate == true)
              methods.f_scrollRight();
          }, settings.autoPlaySpeed);
        }
      },
      setResponsiveEvents: function() {
        var contentWidth = $('html').width();
        if (settings.enableResponsiveBreakpoints) {
          var largestCustom = responsivePoints[responsivePoints.length - 1].changePoint;
          for (var i in responsivePoints) {
            if (contentWidth >= largestCustom) {
              itemsVisible = settings.visibleItems;
              break;
            } else {
              if (contentWidth < responsivePoints[i].changePoint) {
                itemsVisible = responsivePoints[i].visibleItems;
                break;
              } else
                continue;
            }
          }
        }
      },
      sortResponsiveObject: function(obj) {
        var responsiveObjects = [];
        for (var i in obj) {
          responsiveObjects.push(obj[i]);
        }
        responsiveObjects.sort(function(a, b) {
          return a.changePoint - b.changePoint;
        });
        responsivePoints = responsiveObjects;
      },
      f_scrollLeft: function() {
        if (object.position().left < 0) {
          if (canNavigate == true) {
            canNavigate = false;
            var listParent = object.parent();
            var innerWidth = listParent.width();
            itemsWidth = (innerWidth) / itemsVisible;
            var childSet = object.children();
            object.animate({
              'left': "+=" + itemsWidth
            }, {
              queue: false,
              duration: settings.animationSpeed,
              easing: "easeOutExpo",
              complete: function() {
                if (settings.clone) {
                  childSet.last().insertBefore(childSet.first());
                }
                methods.adjustScroll();
                canNavigate = true;
              }
            });
          }
        }
      },
      f_scrollRight: function() {
        var listParent = object.parent();
        var innerWidth = listParent.width();
        itemsWidth = (innerWidth) / itemsVisible;
        var difObject = (itemsWidth - innerWidth);
        var objPosition = (object.position().left + ((totalItems - itemsVisible) * itemsWidth) - innerWidth);
        if ((difObject < Math.ceil(objPosition)) && (!settings.clone)) {
          if (canNavigate == true) {
            canNavigate = false;
            object.animate({
              'left': "-=" + itemsWidth
            }, {
              queue: false,
              duration: settings.animationSpeed,
              easing: "easeOutExpo",
              complete: function() {
                methods.adjustScroll();
                canNavigate = true;
              }
            });
          }
        } else if (settings.clone) {
          if (canNavigate == true) {
            canNavigate = false;
            var childSet = object.children();
            object.animate({
              'left': "-=" + itemsWidth
            }, {
              queue: false,
              duration: settings.animationSpeed,
              easing: "easeOutExpo",
              complete: function() {
                childSet.first().insertAfter(childSet.last());
                methods.adjustScroll();
                canNavigate = true;
              }
            });
          }
        };
      },
      adjustScroll: function() {
        var listParent = object.parent();
        var childSet = object.children();
        var innerWidth = listParent.width();
        itemsWidth = (innerWidth) / itemsVisible;
        childSet.width(itemsWidth);
        if (settings.clone) {
          object.css({
            'left': -itemsWidth
          });
        }
      }
    };
    if (methods[options]) {
      return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof options === 'object' || !options) {
      return methods.init.apply(this);
    } else {
      $.error('Method "' + method + '" does not exist in flexisel plugin!');
    }
  };
})(jQuery);;
$(document).ready(function() {
  $('.vert-flexmenu .opener').click(function() {
    var el = $(this).next('.dd-section');
    var switcher = $(this);
    var wdth = $(window).width();
    if (wdth < 769) {
      el.animate({
        "height": "toggle"
      }, 500, function() {
        if (el.is(':visible')) {
          el.addClass("act");
          switcher.addClass('opn');
        } else {
          switcher.removeClass('opn');
          el.removeClass("act");
        }
      });
    }
    return false;
  });
  var wdth = $(window).width();
  if (wdth > 768) {
    $(".main-section-sublinks > li").hover(function() {
      $(this).find("ul").stop().slideDown("slow");
    }, function() {
      $(this).find("ul").stop().delay(100).slideUp("fast");
    });
    $(".v-megamenuitem").hover(function() {
      $(this).find('.submenu').css({
        "display": "block"
      }).addClass("showmenu");
    }, function() {
      $(this).find('.submenu').delay(100).slideUp(0).removeClass("showmenu");
    });
  }
  var vm_rp = $(".v-right-section-products").data("pquant");
  if (vm_rp > 1) {
    $(".v-right-section-products").flexisel({
      pref: "vm-pr",
      visibleItems: 1,
      animationSpeed: 500,
      autoPlay: true,
      autoPlaySpeed: 3500,
      pauseOnHover: true,
      enableResponsiveBreakpoints: false,
      clone: true
    });
  }
  $(".more-vmegamenu").click(function() {
    $(".more_here").slideToggle();
    if ($(".more-vmegamenu a span i").attr("class") == "icon-plus") {
      $(".more-vmegamenu a span").html('<i class="icon-minus"></i>' + CloseVmenu);
    } else $(".more-vmegamenu a span").html('<i class="icon-plus"></i>' + MoreVmenu);
  });
});;
(function($) {
  var NivoSlider = function(element, options) {
    var settings = $.extend({}, $.fn.nivoSlider.defaults, options);
    var vars = {
      currentSlide: 0,
      currentImage: '',
      totalSlides: 0,
      running: false,
      paused: false,
      stop: false,
      controlNavEl: false
    };
    var slider = $(element);
    slider.data('nivo:vars', vars).addClass('nivoSlider');
    var kids = slider.children();
    kids.each(function() {
      var child = $(this);
      var link = '';
      if (!child.is('img')) {
        if (child.is('a')) {
          child.addClass('nivo-imageLink');
          link = child;
        }
        child = child.find('img:first');
      }
      var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
        childHeight = (childHeight === 0) ? child.attr('height') : child.height();
      if (link !== '') {
        link.css('display', 'none');
      }
      child.css('display', 'none');
      vars.totalSlides++;
    });
    if (settings.randomStart) {
      settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
    }
    if (settings.startSlide > 0) {
      if (settings.startSlide >= vars.totalSlides) {
        settings.startSlide = vars.totalSlides - 1;
      }
      vars.currentSlide = settings.startSlide;
    }
    if ($(kids[vars.currentSlide]).is('img')) {
      vars.currentImage = $(kids[vars.currentSlide]);
    } else {
      vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
    }
    if ($(kids[vars.currentSlide]).is('a')) {
      $(kids[vars.currentSlide]).css('display', 'block');
    }
    var sliderImg = $('<img/>').addClass('nivo-main-image');
    sliderImg.attr('src', vars.currentImage.attr('src')).show();
    slider.append(sliderImg);
    $(window).resize(function() {
      slider.children('img').width(slider.width());
      sliderImg.attr('src', vars.currentImage.attr('src'));
      sliderImg.stop().height('auto');
      $('.nivo-slice').remove();
      $('.nivo-box').remove();
    });
    slider.append($('<div class="nivo-caption"></div>'));
    var processCaption = function(settings) {
      var nivoCaption = $('.nivo-caption', slider);
      if (vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined) {
        var title = vars.currentImage.attr('title');
        if (title.substr(0, 1) == '#') title = $(title).html();
        if (nivoCaption.css('display') == 'block') {
          setTimeout(function() {
            nivoCaption.html(title);
          }, settings.animSpeed);
        } else {
          nivoCaption.html(title);
          nivoCaption.stop().fadeIn(settings.animSpeed);
        }
      } else {
        nivoCaption.stop().fadeOut(settings.animSpeed);
      }
    }
    processCaption(settings);
    var timer = 0;
    if (!settings.manualAdvance && kids.length > 1) {
      timer = setInterval(function() {
        nivoRun(slider, kids, settings, false);
      }, settings.pauseTime);
    }
    if (settings.directionNav) {
      slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + settings.prevText + '</a><a class="nivo-nextNav">' + settings.nextText + '</a></div>');
      $(slider).on('click', 'a.nivo-prevNav', function() {
        if (vars.running) {
          return false;
        }
        clearInterval(timer);
        timer = '';
        vars.currentSlide -= 2;
        nivoRun(slider, kids, settings, 'prev');
      });
      $(slider).on('click', 'a.nivo-nextNav', function() {
        if (vars.running) {
          return false;
        }
        clearInterval(timer);
        timer = '';
        nivoRun(slider, kids, settings, 'next');
      });
    }
    if (settings.controlNav) {
      vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
      slider.after(vars.controlNavEl);
      for (var i = 0; i < kids.length; i++) {
        if (settings.controlNavThumbs) {
          vars.controlNavEl.addClass('nivo-thumbs-enabled');
          var child = kids.eq(i);
          if (!child.is('img')) {
            child = child.find('img:first');
          }
          if (child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '"><img src="' + child.attr('data-thumb') + '" alt="" /></a>');
        } else {
          vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '">' + (i + 1) + '</a>');
        }
      }
      $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');
      $('a', vars.controlNavEl).bind('click', function() {
        if (vars.running) return false;
        if ($(this).hasClass('active')) return false;
        clearInterval(timer);
        timer = '';
        sliderImg.attr('src', vars.currentImage.attr('src'));
        vars.currentSlide = $(this).attr('rel') - 1;
        nivoRun(slider, kids, settings, 'control');
      });
    }
    if (settings.pauseOnHover) {
      slider.hover(function() {
        vars.paused = true;
        clearInterval(timer);
        timer = '';
      }, function() {
        vars.paused = false;
        if (timer === '' && !settings.manualAdvance) {
          timer = setInterval(function() {
            nivoRun(slider, kids, settings, false);
          }, settings.pauseTime);
        }
      });
    }
    slider.bind('nivo:animFinished', function() {
      sliderImg.attr('src', vars.currentImage.attr('src'));
      vars.running = false;
      $(kids).each(function() {
        if ($(this).is('a')) {
          $(this).css('display', 'none');
        }
      });
      if ($(kids[vars.currentSlide]).is('a')) {
        $(kids[vars.currentSlide]).css('display', 'block');
      }
      if (timer === '' && !vars.paused && !settings.manualAdvance) {
        timer = setInterval(function() {
          nivoRun(slider, kids, settings, false);
        }, settings.pauseTime);
      }
      settings.afterChange.call(this);
    });
    var createSlices = function(slider, settings, vars) {
      if ($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display', 'block');
      $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
      var sliceHeight = ($('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height();
      for (var i = 0; i < settings.slices; i++) {
        var sliceWidth = Math.round(slider.width() / settings.slices);
        if (i === settings.slices - 1) {
          slider.append($('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + ((sliceWidth + (i * sliceWidth)) - sliceWidth) + 'px;" /></div>').css({
            left: (sliceWidth * i) + 'px',
            width: (slider.width() - (sliceWidth * i)) + 'px',
            height: sliceHeight + 'px',
            opacity: '0',
            overflow: 'hidden'
          }));
        } else {
          slider.append($('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + ((sliceWidth + (i * sliceWidth)) - sliceWidth) + 'px;" /></div>').css({
            left: (sliceWidth * i) + 'px',
            width: sliceWidth + 'px',
            height: sliceHeight + 'px',
            opacity: '0',
            overflow: 'hidden'
          }));
        }
      }
      $('.nivo-slice', slider).height(sliceHeight);
      sliderImg.stop().animate({
        height: $(vars.currentImage).height()
      }, settings.animSpeed);
    };
    var createBoxes = function(slider, settings, vars) {
      if ($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display', 'block');
      $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
      var boxWidth = Math.round(slider.width() / settings.boxCols),
        boxHeight = Math.round($('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);
      for (var rows = 0; rows < settings.boxRows; rows++) {
        for (var cols = 0; cols < settings.boxCols; cols++) {
          if (cols === settings.boxCols - 1) {
            slider.append($('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + (boxHeight * rows) + 'px; left:-' + (boxWidth * cols) + 'px;" /></div>').css({
              opacity: 0,
              left: (boxWidth * cols) + 'px',
              top: (boxHeight * rows) + 'px',
              width: (slider.width() - (boxWidth * cols)) + 'px'
            }));
            $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
          } else {
            slider.append($('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + (boxHeight * rows) + 'px; left:-' + (boxWidth * cols) + 'px;" /></div>').css({
              opacity: 0,
              left: (boxWidth * cols) + 'px',
              top: (boxHeight * rows) + 'px',
              width: boxWidth + 'px'
            }));
            $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
          }
        }
      }
      sliderImg.stop().animate({
        height: $(vars.currentImage).height()
      }, settings.animSpeed);
    };
    var nivoRun = function(slider, kids, settings, nudge) {
      var vars = slider.data('nivo:vars');
      if (vars && (vars.currentSlide === vars.totalSlides - 1)) {
        settings.lastSlide.call(this);
      }
      if ((!vars || vars.stop) && !nudge) {
        return false;
      }
      settings.beforeChange.call(this);
      if (!nudge) {
        sliderImg.attr('src', vars.currentImage.attr('src'));
      } else {
        if (nudge === 'prev') {
          sliderImg.attr('src', vars.currentImage.attr('src'));
        }
        if (nudge === 'next') {
          sliderImg.attr('src', vars.currentImage.attr('src'));
        }
      }
      vars.currentSlide++;
      if (vars.currentSlide === vars.totalSlides) {
        vars.currentSlide = 0;
        settings.slideshowEnd.call(this);
      }
      if (vars.currentSlide < 0) {
        vars.currentSlide = (vars.totalSlides - 1);
      }
      if ($(kids[vars.currentSlide]).is('img')) {
        vars.currentImage = $(kids[vars.currentSlide]);
      } else {
        vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
      }
      if (settings.controlNav) {
        $('a', vars.controlNavEl).removeClass('active');
        $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');
      }
      processCaption(settings);
      $('.nivo-slice', slider).remove();
      $('.nivo-box', slider).remove();
      var currentEffect = settings.effect,
        anims = '';
      if (settings.effect === 'random') {
        anims = new Array('sliceDownRight', 'sliceDownLeft', 'sliceUpRight', 'sliceUpLeft', 'sliceUpDown', 'sliceUpDownLeft', 'fold', 'fade', 'boxRandom', 'boxRain', 'boxRainReverse', 'boxRainGrow', 'boxRainGrowReverse');
        currentEffect = anims[Math.floor(Math.random() * (anims.length + 1))];
        if (currentEffect === undefined) {
          currentEffect = 'fade';
        }
      }
      if (settings.effect.indexOf(',') !== -1) {
        anims = settings.effect.split(',');
        currentEffect = anims[Math.floor(Math.random() * (anims.length))];
        if (currentEffect === undefined) {
          currentEffect = 'fade';
        }
      }
      if (vars.currentImage.attr('data-transition')) {
        currentEffect = vars.currentImage.attr('data-transition');
      }
      vars.running = true;
      var timeBuff = 0,
        i = 0,
        slices = '',
        firstSlice = '',
        totalBoxes = '',
        boxes = '';
      if (currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        slices = $('.nivo-slice', slider);
        if (currentEffect === 'sliceDownLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }
        slices.each(function() {
          var slice = $(this);
          slice.css({
            'top': '0px'
          });
          if (i === settings.slices - 1) {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function() {
                slider.trigger('nivo:animFinished');
              });
            }, (100 + timeBuff));
          } else {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, (100 + timeBuff));
          }
          timeBuff += 50;
          i++;
        });
      } else if (currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        slices = $('.nivo-slice', slider);
        if (currentEffect === 'sliceUpLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }
        slices.each(function() {
          var slice = $(this);
          slice.css({
            'bottom': '0px'
          });
          if (i === settings.slices - 1) {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function() {
                slider.trigger('nivo:animFinished');
              });
            }, (100 + timeBuff));
          } else {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, (100 + timeBuff));
          }
          timeBuff += 50;
          i++;
        });
      } else if (currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        var v = 0;
        slices = $('.nivo-slice', slider);
        if (currentEffect === 'sliceUpDownLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }
        slices.each(function() {
          var slice = $(this);
          if (i === 0) {
            slice.css('top', '0px');
            i++;
          } else {
            slice.css('bottom', '0px');
            i = 0;
          }
          if (v === settings.slices - 1) {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function() {
                slider.trigger('nivo:animFinished');
              });
            }, (100 + timeBuff));
          } else {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, (100 + timeBuff));
          }
          timeBuff += 50;
          v++;
        });
      } else if (currentEffect === 'fold') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        $('.nivo-slice', slider).each(function() {
          var slice = $(this);
          var origWidth = slice.width();
          slice.css({
            top: '0px',
            width: '0px'
          });
          if (i === settings.slices - 1) {
            setTimeout(function() {
              slice.animate({
                width: origWidth,
                opacity: '1.0'
              }, settings.animSpeed, '', function() {
                slider.trigger('nivo:animFinished');
              });
            }, (100 + timeBuff));
          } else {
            setTimeout(function() {
              slice.animate({
                width: origWidth,
                opacity: '1.0'
              }, settings.animSpeed);
            }, (100 + timeBuff));
          }
          timeBuff += 50;
          i++;
        });
      } else if (currentEffect === 'fade') {
        createSlices(slider, settings, vars);
        firstSlice = $('.nivo-slice:first', slider);
        firstSlice.css({
          'width': slider.width() + 'px'
        });
        firstSlice.animate({
          opacity: '1.0'
        }, (settings.animSpeed * 2), '', function() {
          slider.trigger('nivo:animFinished');
        });
      } else if (currentEffect === 'slideInRight') {
        createSlices(slider, settings, vars);
        firstSlice = $('.nivo-slice:first', slider);
        firstSlice.css({
          'width': '0px',
          'opacity': '1'
        });
        firstSlice.animate({
          width: slider.width() + 'px'
        }, (settings.animSpeed * 2), '', function() {
          slider.trigger('nivo:animFinished');
        });
      } else if (currentEffect === 'slideInLeft') {
        createSlices(slider, settings, vars);
        firstSlice = $('.nivo-slice:first', slider);
        firstSlice.css({
          'width': '0px',
          'opacity': '1',
          'left': '',
          'right': '0px'
        });
        firstSlice.animate({
          width: slider.width() + 'px'
        }, (settings.animSpeed * 2), '', function() {
          firstSlice.css({
            'left': '0px',
            'right': ''
          });
          slider.trigger('nivo:animFinished');
        });
      } else if (currentEffect === 'boxRandom') {
        createBoxes(slider, settings, vars);
        totalBoxes = settings.boxCols * settings.boxRows;
        i = 0;
        timeBuff = 0;
        boxes = shuffle($('.nivo-box', slider));
        boxes.each(function() {
          var box = $(this);
          if (i === totalBoxes - 1) {
            setTimeout(function() {
              box.animate({
                opacity: '1'
              }, settings.animSpeed, '', function() {
                slider.trigger('nivo:animFinished');
              });
            }, (100 + timeBuff));
          } else {
            setTimeout(function() {
              box.animate({
                opacity: '1'
              }, settings.animSpeed);
            }, (100 + timeBuff));
          }
          timeBuff += 20;
          i++;
        });
      } else if (currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
        createBoxes(slider, settings, vars);
        totalBoxes = settings.boxCols * settings.boxRows;
        i = 0;
        timeBuff = 0;
        var rowIndex = 0;
        var colIndex = 0;
        var box2Darr = [];
        box2Darr[rowIndex] = [];
        boxes = $('.nivo-box', slider);
        if (currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse') {
          boxes = $('.nivo-box', slider)._reverse();
        }
        boxes.each(function() {
          box2Darr[rowIndex][colIndex] = $(this);
          colIndex++;
          if (colIndex === settings.boxCols) {
            rowIndex++;
            colIndex = 0;
            box2Darr[rowIndex] = [];
          }
        });
        for (var cols = 0; cols < (settings.boxCols * 2); cols++) {
          var prevCol = cols;
          for (var rows = 0; rows < settings.boxRows; rows++) {
            if (prevCol >= 0 && prevCol < settings.boxCols) {
              (function(row, col, time, i, totalBoxes) {
                var box = $(box2Darr[row][col]);
                var w = box.width();
                var h = box.height();
                if (currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                  box.width(0).height(0);
                }
                if (i === totalBoxes - 1) {
                  setTimeout(function() {
                    box.animate({
                      opacity: '1',
                      width: w,
                      height: h
                    }, settings.animSpeed / 1.3, '', function() {
                      slider.trigger('nivo:animFinished');
                    });
                  }, (100 + time));
                } else {
                  setTimeout(function() {
                    box.animate({
                      opacity: '1',
                      width: w,
                      height: h
                    }, settings.animSpeed / 1.3);
                  }, (100 + time));
                }
              })(rows, prevCol, timeBuff, i, totalBoxes);
              i++;
            }
            prevCol--;
          }
          timeBuff += 100;
        }
      }
    };
    var shuffle = function(arr) {
      for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
      return arr;
    };
    var trace = function(msg) {
      if (this.console && typeof console.log !== 'undefined') {
        console.log(msg);
      }
    };
    this.stop = function() {
      if (!$(element).data('nivo:vars').stop) {
        $(element).data('nivo:vars').stop = true;
        trace('Stop Slider');
      }
    };
    this.start = function() {
      if ($(element).data('nivo:vars').stop) {
        $(element).data('nivo:vars').stop = false;
        trace('Start Slider');
      }
    };
    settings.afterLoad.call(this);
    return this;
  };
  $.fn.nivoSlider = function(options) {
    return this.each(function(key, value) {
      var element = $(this);
      if (element.data('nivoslider')) {
        return element.data('nivoslider');
      }
      var nivoslider = new NivoSlider(this, options);
      element.data('nivoslider', nivoslider);
    });
  };
  $.fn.nivoSlider.defaults = {
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: 'Prev',
    nextText: 'Next',
    randomStart: false,
    beforeChange: function() {},
    afterChange: function() {},
    slideshowEnd: function() {},
    lastSlide: function() {},
    afterLoad: function() {}
  };
  $.fn._reverse = [].reverse;
})(jQuery);;
$(window).load(function() {
  $('#fieldbrandslider-manufacturers').owlCarousel({
    itemsCustom: [
      [0, 2],
      [320, fieldbs_minitem],
      [479, 3],
      [768, 4],
      [992, 5],
      [1023, 6],
      [1200, fieldbs_maxitem],
      [1559, fieldbs_maxitem]
    ],
    responsiveRefreshRate: 50,
    slideSpeed: 200,
    paginationSpeed: 500,
    rewindSpeed: 600,
    autoPlay: fieldbs_autoscroll,
    stopOnHover: fieldbs_pauseonhover,
    rewindNav: true,
    pagination: fieldbs_pagination,
    navigation: fieldbs_navigation,
    navigationText: ['<div class="carousel-previous disable-select"><span class="icon-chevron-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-chevron-right"></span></div>']
  });
});;
(function($) {
  $.fn.extend({
    autocomplete: function(urlOrData, options) {
      var isUrl = typeof urlOrData == "string";
      options = $.extend({}, $.Autocompleter.defaults, {
        url: isUrl ? urlOrData : null,
        data: isUrl ? null : urlOrData,
        delay: isUrl ? $.Autocompleter.defaults.delay : 10,
        max: options && !options.scroll ? 10 : 150
      }, options);
      options.highlight = options.highlight || function(value) {
        return value;
      };
      options.formatMatch = options.formatMatch || options.formatItem;
      return this.each(function() {
        new $.Autocompleter(this, options);
      });
    },
    result: function(handler) {
      return this.bind("result", handler);
    },
    search: function(handler) {
      return this.trigger("search", [handler]);
    },
    flushCache: function() {
      return this.trigger("flushCache");
    },
    setOptions: function(options) {
      return this.trigger("setOptions", [options]);
    },
    unautocomplete: function() {
      return this.trigger("unautocomplete");
    }
  });
  $.Autocompleter = function(input, options) {
    var KEY = {
      UP: 38,
      DOWN: 40,
      DEL: 46,
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      COMMA: 188,
      PAGEUP: 33,
      PAGEDOWN: 34,
      BACKSPACE: 8
    };
    var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);
    var timeout;
    var previousValue = "";
    var cache = $.Autocompleter.Cache(options);
    var hasFocus = 0;
    var lastKeyPressCode;
    var config = {
      mouseDownOnSelect: false
    };
    var select = $.Autocompleter.Select(options, input, selectCurrent, config);
    var blockSubmit;
    $.browser.opera && $(input.form).bind("submit.autocomplete", function() {
      if (blockSubmit) {
        blockSubmit = false;
        return false;
      }
    });
    $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
      lastKeyPressCode = event.keyCode;
      switch (event.keyCode) {
        case KEY.UP:
          event.preventDefault();
          if (select.visible()) {
            select.prev();
          } else {
            onChange(0, true);
          }
          break;
        case KEY.DOWN:
          event.preventDefault();
          if (select.visible()) {
            select.next();
          } else {
            onChange(0, true);
          }
          break;
        case KEY.PAGEUP:
          event.preventDefault();
          if (select.visible()) {
            select.pageUp();
          } else {
            onChange(0, true);
          }
          break;
        case KEY.PAGEDOWN:
          event.preventDefault();
          if (select.visible()) {
            select.pageDown();
          } else {
            onChange(0, true);
          }
          break;
        case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
        case KEY.TAB:
        case KEY.RETURN:
          if (selectCurrent()) {
            event.preventDefault();
            blockSubmit = true;
            return false;
          }
          break;
        case KEY.ESC:
          select.hide();
          break;
        default:
          clearTimeout(timeout);
          timeout = setTimeout(onChange, options.delay);
          break;
      }
    }).focus(function() {
      hasFocus++;
    }).blur(function() {
      hasFocus = 0;
      if (!config.mouseDownOnSelect) {
        hideResults();
      }
    }).click(function() {
      if (hasFocus++ > 1 && !select.visible()) {
        onChange(0, true);
      }
    }).bind("search", function() {
      var fn = (arguments.length > 1) ? arguments[1] : null;

      function findValueCallback(q, data) {
        var result;
        if (data && data.length) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].result.toLowerCase() == q.toLowerCase()) {
              result = data[i];
              break;
            }
          }
        }
        if (typeof fn == "function") fn(result);
        else $input.trigger("result", result && [result.data, result.value]);
      }
      $.each(trimWords($input.val()), function(i, value) {
        request(value, findValueCallback, findValueCallback);
      });
    }).bind("flushCache", function() {
      cache.flush();
    }).bind("setOptions", function() {
      $.extend(options, arguments[1]);
      if ("data" in arguments[1])
        cache.populate();
    }).bind("unautocomplete", function() {
      select.unbind();
      $input.unbind();
      $(input.form).unbind(".autocomplete");
    });

    function selectCurrent() {
      var selected = select.selected();
      if (!selected)
        return false;
      var v = selected.result;
      previousValue = v;
      if (options.multiple) {
        var words = trimWords($input.val());
        if (words.length > 1) {
          v = words.slice(0, words.length - 1).join(options.multipleSeparator) + options.multipleSeparator + v;
        }
        v += options.multipleSeparator;
      }
      $input.val(v);
      hideResultsNow();
      $input.trigger("result", [selected.data, selected.value]);
      return true;
    }

    function onChange(crap, skipPrevCheck) {
      if (lastKeyPressCode == KEY.DEL) {
        select.hide();
        return;
      }
      var currentValue = $input.val();
      if (!skipPrevCheck && currentValue == previousValue)
        return;
      previousValue = currentValue;
      currentValue = lastWord(currentValue);
      if (currentValue.length >= options.minChars) {
        $input.addClass(options.loadingClass);
        if (!options.matchCase)
          currentValue = currentValue.toLowerCase();
        request(currentValue, receiveData, hideResultsNow);
      } else {
        stopLoading();
        select.hide();
      }
    };

    function trimWords(value) {
      if (!value) {
        return [""];
      }
      var words = value.split(options.multipleSeparator);
      var result = [];
      $.each(words, function(i, value) {
        if ($.trim(value))
          result[i] = $.trim(value);
      });
      return result;
    }

    function lastWord(value) {
      if (!options.multiple)
        return value;
      var words = trimWords(value);
      return words[words.length - 1];
    }

    function autoFill(q, sValue) {
      if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
        $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
        $.Autocompleter.Selection(input, previousValue.length, previousValue.length + sValue.length);
      }
    };

    function hideResults() {
      clearTimeout(timeout);
      timeout = setTimeout(hideResultsNow, 200);
    };

    function hideResultsNow() {
      var wasVisible = select.visible();
      select.hide();
      clearTimeout(timeout);
      stopLoading();
      if (options.mustMatch) {
        $input.search(function(result) {
          if (!result) {
            if (options.multiple) {
              var words = trimWords($input.val()).slice(0, -1);
              $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""));
            } else
              $input.val("");
          }
        });
      }
      if (wasVisible)
        $.Autocompleter.Selection(input, input.value.length, input.value.length);
    };

    function receiveData(q, data) {
      if (data && data.length && hasFocus) {
        stopLoading();
        select.display(data, q);
        autoFill(q, data[0].value);
        select.show();
      } else {
        hideResultsNow();
      }
    };

    function request(term, success, failure) {
      if (!options.matchCase)
        term = term.toLowerCase();
      var data = cache.load(term);
      if (data && data.length) {
        success(term, data);
      } else if ((typeof options.url == "string") && (options.url.length > 0)) {
        var extraParams = {
          timestamp: +new Date()
        };
        $.each(options.extraParams, function(key, param) {
          extraParams[key] = typeof param == "function" ? param() : param;
        });
        $.ajax({
          mode: "abort",
          port: "autocomplete" + input.name,
          dataType: options.dataType,
          url: options.url,
          data: $.extend({
            q: lastWord(term),
            limit: options.max
          }, extraParams),
          success: function(data) {
            var parsed = options.parse && options.parse(data) || parse(data);
            cache.add(term, parsed);
            success(term, parsed);
          }
        });
      } else {
        select.emptyList();
        failure(term);
      }
    };

    function parse(data) {
      var parsed = [];
      var rows = data.split("\n");
      for (var i = 0; i < rows.length; i++) {
        var row = $.trim(rows[i]);
        if (row) {
          row = row.split("|");
          parsed[parsed.length] = {
            data: row,
            value: row[0],
            result: options.formatResult && options.formatResult(row, row[0]) || row[0]
          };
        }
      }
      return parsed;
    };

    function stopLoading() {
      $input.removeClass(options.loadingClass);
    };
  };
  $.Autocompleter.defaults = {
    inputClass: "ac_input",
    resultsClass: "ac_results",
    loadingClass: "ac_loading",
    minChars: 1,
    delay: 400,
    matchCase: false,
    matchSubset: true,
    matchContains: false,
    cacheLength: 10,
    max: 100,
    mustMatch: false,
    extraParams: {},
    selectFirst: true,
    formatItem: function(row) {
      return row[0];
    },
    formatMatch: null,
    autoFill: false,
    width: 0,
    multiple: false,
    multipleSeparator: ", ",
    highlight: function(value, term) {
      return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
    },
    scroll: true,
    scrollHeight: 180
  };
  $.Autocompleter.Cache = function(options) {
    var data = {};
    var length = 0;

    function matchSubset(s, sub) {
      if (!options.matchCase)
        s = s.toLowerCase();
      var i = s.indexOf(sub);
      if (i == -1) return false;
      return i == 0 || options.matchContains;
    };

    function add(q, value) {
      if (length > options.cacheLength) {
        flush();
      }
      if (!data[q]) {
        length++;
      }
      data[q] = value;
    }

    function populate() {
      if (!options.data) return false;
      var stMatchSets = {},
        nullData = 0;
      if (!options.url) options.cacheLength = 1;
      stMatchSets[""] = [];
      for (var i = 0, ol = options.data.length; i < ol; i++) {
        var rawValue = options.data[i];
        rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
        var value = options.formatMatch(rawValue, i + 1, options.data.length);
        if (value === false)
          continue;
        var firstChar = value.charAt(0).toLowerCase();
        if (!stMatchSets[firstChar])
          stMatchSets[firstChar] = [];
        var row = {
          value: value,
          data: rawValue,
          result: options.formatResult && options.formatResult(rawValue) || value
        };
        stMatchSets[firstChar].push(row);
        if (nullData++ < options.max) {
          stMatchSets[""].push(row);
        }
      };
      $.each(stMatchSets, function(i, value) {
        options.cacheLength++;
        add(i, value);
      });
    }
    setTimeout(populate, 25);

    function flush() {
      data = {};
      length = 0;
    }
    return {
      flush: flush,
      add: add,
      populate: populate,
      load: function(q) {
        if (!options.cacheLength || !length)
          return null;
        if (!options.url && options.matchContains) {
          var csub = [];
          for (var k in data) {
            if (k.length > 0) {
              var c = data[k];
              $.each(c, function(i, x) {
                if (matchSubset(x.value, q)) {
                  csub.push(x);
                }
              });
            }
          }
          return csub;
        } else
        if (data[q]) {
          return data[q];
        } else
        if (options.matchSubset) {
          for (var i = q.length - 1; i >= options.minChars; i--) {
            var c = data[q.substr(0, i)];
            if (c) {
              var csub = [];
              $.each(c, function(i, x) {
                if (matchSubset(x.value, q)) {
                  csub[csub.length] = x;
                }
              });
              return csub;
            }
          }
        }
        return null;
      }
    };
  };
  $.Autocompleter.Select = function(options, input, select, config) {
    var CLASSES = {
      ACTIVE: "ac_over"
    };
    var listItems, active = -1,
      data, term = "",
      needsInit = true,
      element, list;

    function init() {
      if (!needsInit)
        return;
      element = $("<div/>").hide().addClass(options.resultsClass).css("position", "absolute").appendTo(document.body);
      list = $("<ul/>").appendTo(element).mouseover(function(event) {
        if (target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
          active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
          $(target(event)).addClass(CLASSES.ACTIVE);
        }
      }).click(function(event) {
        $(target(event)).addClass(CLASSES.ACTIVE);
        select();
        input.focus();
        return false;
      }).mousedown(function() {
        config.mouseDownOnSelect = true;
      }).mouseup(function() {
        config.mouseDownOnSelect = false;
      });
      if (options.width > 0)
        element.css("width", options.width);
      needsInit = false;
    }

    function target(event) {
      var element = event.target;
      while (element && element.tagName != "LI")
        element = element.parentNode;
      if (!element)
        return [];
      return element;
    }

    function moveSelect(step) {
      listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
      movePosition(step);
      var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
      if (options.scroll) {
        var offset = 0;
        listItems.slice(0, active).each(function() {
          offset += this.offsetHeight;
        });
        if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
          list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
        } else if (offset < list.scrollTop()) {
          list.scrollTop(offset);
        }
      }
    };

    function movePosition(step) {
      active += step;
      if (active < 0) {
        active = listItems.size() - 1;
      } else if (active >= listItems.size()) {
        active = 0;
      }
    }

    function limitNumberOfItems(available) {
      return options.max && options.max < available ? options.max : available;
    }

    function fillList() {
      list.empty();
      var max = limitNumberOfItems(data.length);
      for (var i = 0; i < max; i++) {
        if (!data[i])
          continue;
        var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
        if (formatted === false)
          continue;
        var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
        $.data(li, "ac_data", data[i]);
      }
      listItems = list.find("li");
      if (options.selectFirst) {
        listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
        active = 0;
      }
      if ($.fn.bgiframe)
        list.bgiframe();
    }
    return {
      display: function(d, q) {
        init();
        data = d;
        term = q;
        fillList();
      },
      next: function() {
        moveSelect(1);
      },
      prev: function() {
        moveSelect(-1);
      },
      pageUp: function() {
        if (active != 0 && active - 8 < 0) {
          moveSelect(-active);
        } else {
          moveSelect(-8);
        }
      },
      pageDown: function() {
        if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
          moveSelect(listItems.size() - 1 - active);
        } else {
          moveSelect(8);
        }
      },
      hide: function() {
        element && element.hide();
        listItems && listItems.removeClass(CLASSES.ACTIVE);
        active = -1;
      },
      visible: function() {
        return element && element.is(":visible");
      },
      current: function() {
        return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
      },
      show: function() {
        var offset = $(input).offset();
        element.css({
          width: typeof options.width == "string" || options.width > 0 ? options.width : ($(input).width() + parseInt($(input).css('padding-left')) + parseInt($(input).css('padding-right')) + parseInt($(input).css('margin-left')) + parseInt($(input).css('margin-right'))),
          top: offset.top + input.offsetHeight,
          left: offset.left
        }).show();
        if (options.scroll) {
          list.css({
            maxHeight: options.scrollHeight,
            overflow: 'auto'
          });
          if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
            var listHeight = 0;
            listItems.each(function() {
              listHeight += this.offsetHeight;
            });
            var scrollbarsVisible = listHeight > options.scrollHeight;
            list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight);
            if (!scrollbarsVisible) {
              listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")));
            }
          }
        }
      },
      selected: function() {
        var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
        return selected && selected.length && $.data(selected[0], "ac_data");
      },
      emptyList: function() {
        list && list.empty();
      },
      unbind: function() {
        element && element.remove();
      }
    };
  };
  $.Autocompleter.Selection = function(field, start, end) {
    if (field.createTextRange) {
      var selRange = field.createTextRange();
      selRange.collapse(true);
      selRange.moveStart("character", start);
      selRange.moveEnd("character", end);
      selRange.select();
    } else if (field.setSelectionRange) {
      field.setSelectionRange(start, end);
    } else {
      if (field.selectionStart) {
        field.selectionStart = start;
        field.selectionEnd = end;
      }
    }
    field.focus();
  };
})(jQuery);;
$(window).load(function() {
  $('#smart-blog-custom').owlCarousel({
    itemsCustom: [
      [0, 1],
      [320, 1],
      [479, 1],
      [768, 2],
      [992, 2],
      [1200, 2]
    ],
    responsiveRefreshRate: 50,
    slideSpeed: 200,
    paginationSpeed: 500,
    rewindSpeed: 600,
    autoPlay: false,
    stopOnHover: 4000,
    rewindNav: true,
    pagination: false,
    navigation: true,
    navigationText: ['<div class="carousel-previous disable-select"><span class="icon-chevron-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-chevron-right"></span></div>']
  });
  if ($(window).width() < 768) {
    $('#left_column #smart-blog-custom').css({
      'display': 'none'
    });
    $('#right_column #smart-blog-custom').css({
      'display': 'none'
    });
  }
});;

function TitleCenter() {
  $('.title_center').each(function() {
    var t = $(this);
    var widthtitle = t.find('.title_text').width(),
      marginButton = Math.round(widthtitle / 2 + 30, 2);
    if ($(window).width() <= marginButton * 2 + 60) {
      marginButton = $(window).width() / 2 - 70;
      t.find('.bx-controls-direction .prev').addClass('excess');
      t.find('.bx-controls-direction .next').addClass('excess');
    } else {
      t.find('.bx-controls-direction .prev').removeClass('excess');
      t.find('.bx-controls-direction .next').removeClass('excess');
    }
    t.find('.owl-buttons .owl-prev').css({
      'margin-right': marginButton
    });
    t.find('.owl-buttons .owl-next').css({
      'margin-left': marginButton
    });
    t.find('.bx-controls-direction .prev').css({
      'margin-right': marginButton + 10
    });
    t.find('.bx-controls-direction .next').css({
      'margin-left': marginButton + 10
    });
  });
};
