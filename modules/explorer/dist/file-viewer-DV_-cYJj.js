const z = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), p = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((m) => {
        const s = (r) => {
          ((o) => {
            const l = o.getAttribute("data-ce");
            if (!l)
              return;
            const a = JSON.parse(l).filter((i) => i?.k.startsWith("t-"));
            if (a.length != 0)
              for (const i of a) {
                const u = i.k, h = i.v.split(" ");
                if (u == `t-${t}-class`)
                  for (const v of h)
                    o.classList.add(v);
                else
                  for (const v of h)
                    o.classList.remove(v);
              }
          })(r);
        };
        for (const r of m.getElementsByTagName("*"))
          s(r);
        s(m);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function F(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((m) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(r), m());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, r = setInterval(() => {
      s();
    }, t);
    s();
  });
}
console.log("content_engine_lib");
let d = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, m] of t.entries()) {
        const s = m, r = `${s.name}:${e.run_from}`, o = `${e.run_from}_src`;
        let l = s[o];
        const a = `${e.run_from}_src`;
        let i = e?.lazy_lib?.[a] || null;
        if (i && (i = i.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${l}`), d.lib.l.hasOwnProperty(`${r}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && d.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (i)
              l = i;
            else
              throw `[lib-name=${s.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            d.lib.l[`${r}`] = {
              lib: u,
              src: l
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            d.lib.l[`${r}`] = {
              lib: u,
              src: l
            };
          }
        }
      }
      console.log(await d.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return d.lib.l.hasOwnProperty(`${n}`) == !1 && await d.lib.set({
        lib: [
          {
            renderer_src: e.name,
            hydrator_src: e.name,
            editor_src: e.name,
            name: e.name
          }
        ],
        run_from: e.run_from,
        lazy_lib: e.lazy_lib
      }), t = d.lib.l[`${n}`], t;
    },
    get_all: async (e) => d.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const m = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), m.indexOf(e.type) !== -1)
        for (const [s, r] of m.entries()) {
          let o = s == 0 ? "" : "/";
          if (t += `${o}${r}`, r == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [s, r] of m.entries()) {
          let o = s == 0 ? "" : "/";
          if (t += `${o}${r}`, r == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const L = async (e) => {
  const t = await z();
  return await d.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n, m) => {
      console.log("--renderer [set]");
      let s = {
        r: "",
        style: "",
        head: ""
        // `<test>head-1</test>`
      };
      return await (async () => {
        for (const r of n.data?.value?.l || n.data.l) {
          const o = await await d.lib.get({ name: r.type, run_from: "renderer", lazy_lib: e.lazy_lib }), l = await (await o.lib.index({
            f: {
              name: (a) => t.f.name({ id: r.id, name: a }),
              get_lib: async (a) => await await d.lib.get({ name: a.name, run_from: a.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (a) => await (await p()).set(a),
              path: (a) => d.path.set({ src: o.src, type: r.type, name: a })
            }
          })).set({
            data: {
              curr: r
            }
          }, m);
          s.r += l?.r || "", s.style += l?.style || "", s.head += l?.head || "";
        }
      })(), s;
    }
  };
}, k = async (e) => {
  const t = await z();
  return await d.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n, m) => {
      console.log("--hydrator [set]");
      let s = {
        r: "",
        style: ""
      };
      const r = async () => {
        for (const o of n.data?.value?.l || n.data.l) {
          const l = await await d.lib.get({ name: o.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), a = await (await l.lib.index({
            f: {
              name: (i) => t.f.name({ id: o.id, name: i }),
              get_lib: async (i) => await await d.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (i) => await (await p()).set(i),
              path: (i) => d.path.set({ src: l.src, type: o.type, name: i })
            }
          })).set({
            data: {
              curr: o
            }
          }, m);
          s.style += a.style;
        }
      };
      return await F(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await r(), s;
    }
  };
}, C = async (e) => ({
  set: async (t, n) => {
    const m = {
      r: "",
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }, s = document.getElementById(e.f.name("file-viewer"));
    document.getElementById(e.f.name("sidebar")), document.getElementById(e.f.name("file-tabs"));
    const r = document.getElementById(e.f.name("active-file-name")), o = {
      ce: {
        set: async (a) => {
          let i = "";
          const u = await L({
            lib: [],
            lazy_lib: a.file.content.config.lazy_lib
          }), h = await k({
            lib: [],
            lazy_lib: a.file.content.config.lazy_lib
          }), v = await u.set({
            data: a.file.content.data
          });
          i = v.r, v.style, (await h.set({
            data: a.file.content.data
          })).style, a.space.innerHTML = `${i}`;
        }
      }
    }, l = (a, i) => {
      for (const u of i) {
        if (u.id === a) return u;
        if (u.children) {
          const h = l(a, u.children);
          if (h) return h;
        }
      }
      return null;
    };
    return (async (a) => {
      const i = (c) => {
        c.stopPropagation();
        const y = c.target.closest(".close-tab");
        if (y) {
          const f = y.getAttribute("data-id");
          if (f) {
            document.dispatchEvent(new CustomEvent("close-tab", {
              detail: { fileId: f }
            }));
            const w = document.getElementById(e.f.name(`tab-${f}`));
            if (w && w.remove(), t.data.curr.data.activeFile === f) {
              const E = document.querySelectorAll('[id^="' + e.f.name("tab-") + '"]');
              if (E.length > 0) {
                const x = E[0].id.replace(e.f.name("tab-"), "");
                t.data.curr.data.activeFile = x, h(x);
              } else
                t.data.curr.data.activeFile = void 0, v();
            }
            n?.change({ _$p: t });
          }
        }
      }, u = (c) => {
      }, h = (c) => {
        const b = document.getElementById(e.f.name("file-editor"));
        if (b) {
          const y = t.data.curr.data.files || [], f = l(c, y);
          if (f) {
            (async () => await o.ce.set({
              file: f,
              space: b
            }))(), b.style.display = "block";
            const w = document.getElementById(e.f.name("save-file")), E = document.getElementById(e.f.name("format-code"));
            w && E && (w.style.display = "block", E.style.display = "block");
            const g = document.getElementById(e.f.name("editor-status"));
            g && (g.textContent = `Editing: ${f.name}`), r.innerText = `${f.name}`;
          }
        }
      }, v = () => {
        const c = document.querySelector(`#${e.f.name("file-viewer")} > div > div:nth-child(2)`);
        c && (c.innerHTML = `
                            <div class="h-full flex items-center justify-center text-center">
                                <div class="max-w-md">
                                    <div class="text-6xl mb-4 opacity-40">📁</div>
                                    <h3 class="text-xl font-semibold mb-2">No File Selected</h3>
                                    <p class="opacity-70 mb-4">Select a file from the sidebar to view and edit its contents.</p>
                                    <button id="${e.f.name("create-first-file")}" class="px-4 py-2 rounded 
                                        ${t.data.curr.data.theme === "dark" ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400"} text-white">
                                        Create Your First File
                                    </button>
                                </div>
                            </div>`, document.getElementById(e.f.name("create-first-file"))?.addEventListener("click", () => {
          document.dispatchEvent(new CustomEvent("new-file"));
        }));
      }, I = () => {
      };
      document.addEventListener("click", i);
      const _ = document.getElementById(e.f.name("file-editor"));
      _ && (_.addEventListener("input", () => {
      }), _.addEventListener("keyup", I), _.addEventListener("click", I));
      const B = document.getElementById(e.f.name("save-file"));
      B && B.addEventListener("click", () => {
        const c = t.data.curr.data.activeFile, b = document.getElementById(e.f.name("file-editor"));
        if (c && b) {
          const y = document.getElementById(e.f.name("editor-status"));
          if (y) {
            const f = y.textContent;
            y.textContent = "Saved successfully!", y.classList.add("text-green-500"), setTimeout(() => {
              y.textContent = f, y.classList.remove("text-green-500");
            }, 2e3);
          }
          n?.change({ _$p: t });
        }
      });
      const $ = document.getElementById(e.f.name("format-code"));
      $ && $.addEventListener("click", () => {
        const c = document.getElementById(e.f.name("file-editor"));
        if (c) {
          const y = c.value.split(`
`);
          let f = 0;
          const w = y.map((E) => {
            const g = E.trim();
            (g.endsWith("}") || g.endsWith("]") || g.endsWith(")")) && (f = Math.max(0, f - 1));
            const x = "    ".repeat(f) + g;
            return (g.endsWith("{") || g.endsWith("[") || g.endsWith("(")) && (f += 1), x;
          });
          c.value = w.join(`
`);
        }
      }), document.addEventListener("file-select", (c) => {
        const { fileId: b } = c.detail;
        b && (t.data.curr.data.activeFile = b, h(b), n?.change({ _$p: t }));
      }), document.addEventListener("theme-change", (c) => {
        t.data.curr.data.activeFile && u(t.data.curr.data.activeFile);
      }), setTimeout(() => {
        t.data.curr.data.activeFile && (u(t.data.curr.data.activeFile), h(t.data.curr.data.activeFile));
      }, 100), n?.add({ $d: t.data.curr.data, el: a });
    })(s), m;
  }
});
export {
  C as default,
  C as hydrator,
  C as index
};
