const c = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const r = {
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
    }, a = document.getElementById(t.f.name("text"));
    return (async (n) => {
      t.f.call("msg", {
        type: "add",
        _p: t,
        _$p: e,
        custom: {},
        //set..
        $d: e.data.curr.data,
        el: n
      });
    })(a), r;
  }
});
export {
  c as hydrator,
  c as index
};
