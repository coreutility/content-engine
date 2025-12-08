const B = async (s) => ({
  set: async (e, o) => {
    const x = {
      r: "",
      style: "",
      evt: {
        change: () => {
          o?.change({ _$p: e });
        }
      }
    }, g = document.getElementById(s.f.name("sidebar")), w = document.getElementById(s.f.name("theme-toggle")), I = (m, u) => {
      for (let f = 0; f < u.length; f++) {
        if (u[f].id === m)
          return u.splice(f, 1), !0;
        if (u[f].children && I(m, u[f].children))
          return !0;
      }
      return !1;
    };
    return (async (m) => {
      const u = (t) => {
        const n = t;
        if (n) {
          const a = n.getAttribute("data-id");
          if (n.classList.contains("folder-item")) {
            const r = [...e.data.curr.data.expandedFolders || []], c = r.indexOf(a);
            c > -1 ? r.splice(c, 1) : r.push(a), e.data.curr.data.expandedFolders = r, v(a, c === -1), o?.change({ _$p: e });
          } else
            e.data.curr.data.activeFile = a, F(a), o?.change({ _$p: e }), document.dispatchEvent(new CustomEvent("file-select", {
              detail: { fileId: a }
            }));
        }
      }, f = (t) => {
        t.stopPropagation();
        const n = t.target.closest(".folder-toggle");
        if (n) {
          const a = n.getAttribute("data-id");
          if (a) {
            const d = [...e.data.curr.data.expandedFolders || []], r = d.indexOf(a);
            r > -1 ? d.splice(r, 1) : d.push(a), e.data.curr.data.expandedFolders = d, v(a, r === -1), o?.change({ _$p: e });
          }
        }
      }, v = (t, l) => {
        const n = document.getElementById(s.f.name(`i:${t}:`));
        if (n) {
          const a = n.querySelector("span:first-child");
          a && (a.textContent = l ? "📂" : "📁");
          const d = n.querySelector(".folder-toggle");
          d && (d.textContent = l ? "▼" : "▶");
          const r = n.closest(".file-tree-item");
          if (r) {
            const c = r.querySelector(".folder-children");
            c && (l ? (c.classList.remove("hidden"), c.querySelectorAll(".file-tree-item").forEach((h) => {
              h.classList.remove("hidden");
            })) : c.classList.add("hidden"));
          }
        }
      }, F = (t) => {
        g.querySelectorAll('[data-type="file"]').forEach((a) => {
          const d = a.querySelector("[data-ce]");
          d.classList.remove("bg-blue-600", "bg-blue-100"), d.classList.add("hover:opacity-80");
        });
        const n = document.getElementById(s.f.name(`i:${t}:`));
        n && ((e.data.curr.data.theme || "dark") === "dark" ? n.classList.add("bg-blue-600") : n.classList.add("bg-blue-100"), n.classList.remove("hover:opacity-80"));
      }, S = (t) => {
        const l = t.target.value.toLowerCase().trim(), a = document.getElementById(s.f.name("file-tree"))?.querySelectorAll(".file-tree-item") || [];
        if (l === "") {
          a.forEach((d) => {
            d.classList.remove("hidden");
          });
          return;
        }
        a.forEach((d) => {
          const r = d.querySelector('[id^="' + s.f.name("i:") + '"] span:not(.folder-toggle)');
          if (r)
            if ((r.textContent?.toLowerCase() || "").includes(l)) {
              d.classList.remove("hidden");
              let i = d.parentElement;
              for (; i && i.classList.contains("folder-children"); ) {
                i.classList.remove("hidden");
                const h = i.previousElementSibling?.closest(".file-tree-item");
                if (h) {
                  h.classList.remove("hidden");
                  const y = h.querySelector('[id^="' + s.f.name("i:") + '"]')?.id.replace(s.f.name("i:"), "");
                  y && !e.data.curr.data.expandedFolders?.includes(y) && (e.data.curr.data.expandedFolders = [
                    ...e.data.curr.data.expandedFolders || [],
                    y
                  ], v(y, !0));
                }
                i = i.parentElement?.closest(".folder-children");
              }
            } else
              d.classList.add("hidden");
        });
      };
      for (const t of g.querySelectorAll("[data-type='file']"))
        t.addEventListener("click", (l) => {
          u(t);
        });
      document.addEventListener("click", f), w?.addEventListener("click", () => {
        setTimeout(() => {
          F(e.data.curr.data.activeFile);
        }, 20);
      });
      const L = document.getElementById(s.f.name("search-files"));
      L && L.addEventListener("input", S);
      const E = document.getElementById(s.f.name("sidebar-collapse"));
      E && E.addEventListener("click", () => {
        g.classList.toggle("hidden"), E.querySelector("i");
      }), document.addEventListener("new-file", () => {
        const t = "file-" + Date.now(), l = {
          id: t,
          name: "Untitled.ts",
          type: "file",
          extension: "ts",
          path: "/new/Untitled.ts",
          content: `// Start coding...
`
        };
        e.data.curr.data.files || (e.data.curr.data.files = []), e.data.curr.data.files.push(l), e.data.curr.data.activeFile = t, F(t), document.dispatchEvent(new CustomEvent("file-select", {
          detail: { fileId: t }
        })), o?.change({ _$p: e });
      }), document.addEventListener("new-folder", () => {
        const t = "folder-" + Date.now(), l = {
          id: t,
          name: "New Folder",
          type: "folder",
          path: "/new-folder",
          children: []
        };
        e.data.curr.data.files || (e.data.curr.data.files = []), e.data.curr.data.files.push(l);
        const n = [...e.data.curr.data.expandedFolders || [], t];
        e.data.curr.data.expandedFolders = n, o?.change({ _$p: e });
      }), document.addEventListener("close-tab", (t) => {
        const { fileId: l } = t.detail;
        if (e.data.curr.data.files && I(l, e.data.curr.data.files)) {
          if (e.data.curr.data.activeFile === l) {
            const a = e.data.curr.data.files, d = [], r = (c) => {
              c.forEach((i) => {
                i.type === "file" && d.push(i), i.children && r(i.children);
              });
            };
            r(a), d.length > 0 ? (e.data.curr.data.activeFile = d[0].id, document.dispatchEvent(new CustomEvent("file-select", {
              detail: { fileId: d[0].id }
            }))) : e.data.curr.data.activeFile = void 0;
          }
          const n = document.getElementById(s.f.name(`file-${l}`));
          if (n) {
            const a = n.closest(".file-tree-item");
            a && a.remove();
          }
          o?.change({ _$p: e });
        }
      }), setTimeout(() => {
        e.data.curr.data.activeFile && F(e.data.curr.data.activeFile), (e.data.curr.data.expandedFolders || []).forEach((t) => {
          v(t, !0);
        });
      }, 100), o?.add({ $d: e.data.curr.data, el: m });
    })(g), x;
  }
});
export {
  B as default,
  B as hydrator,
  B as index
};
