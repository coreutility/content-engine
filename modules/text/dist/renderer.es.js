const s = async (r) => ({
  set: async (a, d) => {
    console.log(`--renderer [${a.data.curr.type}]`), a.data.curr.data.e_tag = a.data.curr.data?.e_tag || "div";
    const e = {
      value: async () => {
        if (a.data.curr.data.load == "remote") {
          if (!a.data.curr.data.data.startsWith("http://") && !a.data.curr.data.data.startsWith("https://"))
            throw new Error(`when [load=${a.data.curr.data.load}] then [data] must be a url!`);
          return await (await fetch(a.data.curr.data.data)).text();
        }
        return a.data.curr.data.data;
      }
    };
    return {
      r: await (async () => `
                <${a.data.curr.data.e_tag} class="${r.f.name("text")}" id="${r.f.name("text")}"  >
                  ${await e.value()}
                </${a.data.curr.data.e_tag}>
                `)(),
      style: (() => {
        let t = "";
        return t = `
                .${r.f.name("text")} {
                   background: transparent;
                }
                `, t;
      })()
    };
  }
});
export {
  s as index,
  s as renderer
};
