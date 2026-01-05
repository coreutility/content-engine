import { index as f } from "./hydrator.es.js";
import { index as p } from "./renderer.es.js";
const h = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), _ = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const a = Math.random() * 16 | 0;
    return (e == "x" ? a : a & 3 | 8).toString(16);
  })
}), v = async (e) => {
  const a = await h();
  return {
    set: async (d) => {
      const i = {
        r: ""
        //style: ``,
      }, s = d.data.curr || {
        id: _().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, x = e.f.new_emitter(), u = await p({
        f: {
          ...e.f,
          name: (n) => a.f.name({ id: s.id, name: n })
        }
      }), y = await f({
        my: {},
        f: {
          ...e.f,
          name: (n) => a.f.name({ id: s.id, name: n }),
          //overwrite..
          call: x.emit
          //listen:listen_emitter.on,
        }
      }), o = await u.set({
        data: {
          curr: s
        }
      });
      return setTimeout(async () => {
        const n = await y.set({
          data: {
            curr: s
          }
        });
        (async () => x.on("msg", async (t) => {
          if (t.type == "add") {
            let r = t, c = r.el;
            c?.setAttribute("contenteditable", "true"), c?.classList.add("block-content"), c?.addEventListener("click", () => {
            });
            const m = () => {
              const l = c.innerHTML;
              r.$d.data = l, n.evt.change();
            };
            c?.addEventListener("input", function(l) {
              m();
            }), m();
          }
          t.type == "change" && e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: t._$p,
            custom: {}
          });
        }))(), ((t) => {
          const r = document.createElement("style");
          r.innerHTML = `${n.style}`, t.appendChild(r);
        })(document.head);
      }, 200), i.r = o.r, ((n) => {
        const t = document.createElement("style");
        t.innerHTML = `${o.style}`, n.appendChild(t);
      })(document.head), i;
    }
  };
};
export {
  v as editor,
  v as index
};
