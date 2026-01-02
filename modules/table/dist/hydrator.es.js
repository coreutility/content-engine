const d = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const c = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: e,
            custom: {}
          });
        }
      }
    }, n = document.getElementById(t.f.name("table"));
    return (async () => {
      const a = n?.querySelector("thead")?.querySelector("tr");
      for (const [o, l] of Array.from(a?.querySelectorAll("th") || []).entries())
        try {
          t.f.call("msg", {
            type: "add",
            _p: t,
            _$p: e,
            custom: {},
            //set..
            $d: e.data.curr.data.columns[o],
            el: l
          });
        } catch {
        }
    })(), c;
  }
});
export {
  d as hydrator,
  d as index
};
