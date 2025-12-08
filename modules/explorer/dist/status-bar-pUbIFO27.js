const y = async (a) => ({
  set: async (t, o) => {
    const m = {
      r: "",
      style: "",
      evt: {
        change: () => {
          o?.change({ _$p: t });
        }
      }
    }, h = document.getElementById(a.f.name("status-bar"));
    return (async (i) => {
      const s = () => {
        const e = document.getElementById(a.f.name("file-count"));
        if (e) {
          const n = (t.data.curr.data.files || []).filter((d) => d.type === "file");
          e.textContent = `${n.length} files`;
        }
      }, r = () => {
        const e = document.getElementById(a.f.name("selected-file"));
        if (e)
          if (t.data.curr.data.activeFile) {
            const n = t.data.curr.data.files || [], d = (g) => {
              for (const c of g) {
                if (c.id === t.data.curr.data.activeFile)
                  return c;
                if (c.children) {
                  const f = d(c.children);
                  if (f) return f;
                }
              }
              return null;
            }, u = d(n);
            e.textContent = u ? `Editing: ${u.name}` : "Editing";
          } else
            e.textContent = "No file selected";
      }, l = () => {
        const e = document.getElementById(a.f.name("theme-indicator"));
        if (e) {
          const n = t.data.curr.data.theme || "dark";
          e.textContent = n === "dark" ? "Dark Mode" : "Light Mode";
        }
      };
      document.addEventListener("file-select", () => {
        r();
      }), document.addEventListener("new-file", () => {
        s(), r();
      }), document.addEventListener("theme-change", () => {
        l();
      }), s(), r(), l(), o?.add({ $d: t.data.curr.data, el: i });
    })(h), m;
  }
});
export {
  y as default,
  y as hydrator,
  y as index
};
