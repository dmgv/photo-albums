parcelRequire = (function(e, r, n, t) {
  let i = typeof parcelRequire === "function" && parcelRequire,
    o = typeof require === "function" && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        const f = typeof parcelRequire === "function" && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && typeof n === "string") return o(n);
        const c = new Error(`Cannot find module '${n}'`);
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      p.resolve = function(r) {
        return e[n][1][r] || r;
      };
      const l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {},
      ];
    });
  for (let f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    const c = u(n[n.length - 1]);
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = c)
      : typeof define === "function" && define.amd
        ? define(() => c)
        : t && (this[t] = c);
  }
  return u;
})(
  {
    6: [
      function(require, module, exports) {
        console.log("Funciona!");
      },
      {},
    ],
  },
  {},
  [6],
  null,
);
// # sourceMappingURL=/js.a221d6f0.map
