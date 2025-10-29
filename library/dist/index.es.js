const m = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = Math.random() * 16 | 0;
    return (t == "x" ? n : n & 3 | 8).toString(16);
  })
}), d = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
});
console.log("content_engine_lib");
let r = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (t) => {
      const n = t?.lib || [];
      for (const [i, o] of n.entries()) {
        const a = o, _ = `${a.name}:${t.run_from}`, s = `${t.run_from}_src`;
        let l = a[s];
        const c = `${t.run_from}_src`;
        let e = t?.lazy_lib?.[c] || null;
        if (e && (e = e.replace("{*}", `${a.name}`)), console.log(`_lazy_src: ${e}`), console.log(`_src: ${l}`), r.lib.l.hasOwnProperty(`${_}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && r.lib.inbuilt_lib.indexOf(`${a.name}`) === -1)
            if (e)
              l = e;
            else
              throw `[lib-name=${a.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const b = await import(
              /* @vite-ignore */
              `${l}`
            );
            r.lib.l[`${_}`] = {
              lib: b
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const b = await import(
              /* @vite-ignore */
              `${l}`
            );
            r.lib.l[`${_}`] = {
              lib: b
            };
          }
        }
      }
      console.log(await r.lib.get_all({}));
    },
    get: async (t) => {
      let n = null;
      const i = `${t.name}:${t.run_from}`;
      return r.lib.l.hasOwnProperty(`${i}`) == !1 && await r.lib.set({
        lib: [
          {
            renderer_src: t.name,
            hydrator_src: t.name,
            editor_src: t.name,
            name: t.name
          }
        ],
        run_from: t.run_from,
        lazy_lib: t.lazy_lib
      }), n = r.lib.l[`${i}`], n;
    },
    get_all: async (t) => r.lib.l
  }
};
const f = async (t) => {
  const n = await d();
  return await r.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (i, o) => {
      console.log("--renderer [set]");
      let a = {
        r: "",
        style: ""
      };
      return await (async () => {
        for (const s of i.data?.value?.l || i.data.l) {
          const c = await (await (await (await r.lib.get({ name: s.type, run_from: "renderer", lazy_lib: t.lazy_lib })).lib).index({
            f: {
              name: (e) => n.f.name({ id: s.id, name: e }),
              get_lib: async (e) => await await r.lib.get({ name: e.name, run_from: e.run_from, lazy_lib: t.lazy_lib })
            }
          })).set({
            data: {
              curr: s
            }
          }, o);
          a.r += c.r, a.style += c.style;
        }
      })(), a;
    }
  };
}, x = async (t) => {
  const n = await d();
  return await r.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (i, o) => {
      console.log("--hydrator [set]");
      let a = {
        r: "",
        style: ""
      };
      return await (async () => {
        for (const s of i.data?.value?.l || i.data.l) {
          const c = await (await (await (await r.lib.get({ name: s.type, run_from: "hydrator", lazy_lib: t.lazy_lib })).lib).index({
            f: {
              name: (e) => n.f.name({ id: s.id, name: e }),
              get_lib: async (e) => await await r.lib.get({ name: e.name, run_from: e.run_from, lazy_lib: t.lazy_lib })
            }
          })).set({
            data: {
              curr: s
            }
          }, o);
          a.style += c.style;
        }
      })(), a;
    }
  };
}, w = async (t) => (await d(), await r.lib.set({ lib: t.lib, run_from: "editor", lazy_lib: t.lazy_lib }), {
  set: async (n, i) => {
    console.log("--editor [set]");
    let o = {
      data: {
        l: [
          {
            id: m().set(),
            type: "editor",
            data: {
              l: []
            }
          }
        ]
      }
    }, a = {
      r: "",
      style: ""
    };
    const _ = f, s = x, l = await _({
      lib: t.lib,
      lazy_lib: t.lazy_lib
    }), c = await s({
      lib: t.lib,
      lazy_lib: t.lazy_lib
    }), e = await l.set({
      data: o.data
    });
    return setTimeout(async () => {
      const b = await c.set({
        data: o.data
      }, {
        change: (y) => {
          i?.change(y);
        }
      });
      ((y) => {
        const u = document.createElement("style");
        u.innerHTML = `${b.style}`, y.appendChild(u);
      })(document.head);
    }, 200), a.r = e.r, a.style = `
            ${e.style}
            `, a;
  }
});
export {
  w as ce_editor,
  x as ce_hydrator,
  f as ce_renderer
};
