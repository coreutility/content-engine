const d = async (r) => ({
  set: async (t, n) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          n?.change({ _$p: t });
        }
      }
    }, c = document.getElementById(r.f.name("text"));
    return (async (e) => {
      n?.add({ $d: t.data.curr.data, el: e });
    })(c), a;
  }
});
export {
  d as hydrator,
  d as index
};
