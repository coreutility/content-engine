const y = async (n) => ({
  set: async (e, t) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t?.change({ _$p: e });
        }
      }
    }, c = document.getElementById(n.f.name("table"));
    return (async () => {
      const o = c?.querySelector("thead")?.querySelector("tr");
      for (const [d, l] of Array.from(o?.querySelectorAll("th") || []).entries())
        try {
          t.add({ $d: e.data.curr.data.columns[d], el: l });
        } catch {
        }
    })(), a;
  }
});
export {
  y as hydrator,
  y as index
};
