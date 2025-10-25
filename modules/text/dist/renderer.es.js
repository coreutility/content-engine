const c = async (e) => ({
  set: async (t, a) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const n = {
      value: () => t.data.curr.data.data
    };
    return {
      r: `
                <div class="${e.f.name("text")}" id="${e.f.name("text")}"  >
                  ${n.value()}
                </div>
                `,
      style: (() => {
        let r = "";
        return r = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, r;
      })()
    };
  }
});
export {
  c as index,
  c as renderer
};
