const u = async (a) => ({
  set: async (n, r) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const c = {
      r: "",
      style: "",
      evt: {
        change: () => {
          r?.change({ _$p: n });
        }
      }
    }, d = document.getElementById(a.f.name("explorer-root"));
    return (async (o) => {
      const s = (e, t) => {
        for (const l of e)
          ;
        return !1;
      };
      await (await (await import("./layout-DGof_5rV.js")).default(a)).set(
        n,
        r
        /*{
            add: (_v) => {
                //console.log(_v);
            },
            change: (_v) => {
                console.log(_v);
                
            },
        }*/
      ), document.addEventListener("search-files", (e) => {
        const { searchTerm: t } = e.detail;
        console.log("Searching for:", t);
      }), document.addEventListener("file-content-change", (e) => {
        const { fileId: t, content: l } = e.detail;
        n.data.curr.data.files && (s(n.data.curr.data.files), r?.change({ _$p: n }));
      }), document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "s" && (e.preventDefault(), document.getElementById(a.f.name("save-file"))?.click()), (e.ctrlKey || e.metaKey) && e.key === "f" && (e.preventDefault(), document.getElementById(a.f.name("search-files"))?.focus()), e.key === "Escape") {
          const t = document.getElementById(a.f.name("search-files"));
          t && t.value && (t.value = "", t.dispatchEvent(new Event("input")));
        }
      }), r?.add({ $d: n.data.curr.data, el: o });
    })(d), c;
  }
});
export {
  u as hydrator,
  u as index
};
