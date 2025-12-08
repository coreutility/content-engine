const f = async (e) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = {
      r: "",
      style: "",
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }, o = document.getElementById(e.f.name("root"));
    return (async (a) => {
      await (await (await import("./sidebar-JMNY8ADl.js")).default(e)).set(t, n), await (await (await import("./file-viewer-DV_-cYJj.js")).default(e)).set(t, n), await (await (await import("./status-bar-pUbIFO27.js")).default(e)).set(t, n), document.getElementById(e.f.name("theme-toggle"))?.addEventListener("click", () => {
        const d = (t.data.curr.data.theme || "dark") === "dark" ? "light" : "dark";
        (async () => {
          try {
            await e.f.set_theme({ name: d, el_id: o.id }), t.data.curr.data.theme = d, document.dispatchEvent(new CustomEvent("theme-change", { detail: d }));
          } catch (c) {
            console.error("Failed to change theme:", c);
          }
        })();
      }), document.getElementById(e.f.name("new-file"))?.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("new-file"));
      }), document.getElementById(e.f.name("new-folder"))?.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("new-folder"));
      });
      const i = () => {
        const r = document.getElementById(e.f.name("sidebar"));
        r && window.innerWidth < 768 && r.classList.add("hidden");
      };
      window.addEventListener("resize", i), i(), n?.add({ $d: t.data.curr.data, el: a });
    })(o), s;
  }
});
export {
  f as default,
  f as hydrator,
  f as index
};
