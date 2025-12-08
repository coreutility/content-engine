import { index as l } from "./hydrator.es.js";
import { index as y } from "./renderer.es.js";
const p = async () => ({
  f: {
    name: (a) => `${a.name}${a.id}`
  }
}), f = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const r = Math.random() * 16 | 0;
    return (a == "x" ? r : r & 3 | 8).toString(16);
  })
}), E = async (a) => {
  const r = await p();
  return {
    set: async (x, i) => {
      const c = {
        r: ""
        //style: ``,
      }, d = x.data.curr || {
        id: f().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, o = await y({
        f: {
          ...a.f,
          name: (t) => r.f.name({ id: d.id, name: t })
        }
      }), m = await l({
        f: {
          ...a.f,
          name: (t) => r.f.name({ id: d.id, name: t })
        }
      }), s = await o.set({
        data: {
          curr: d
        }
      });
      return setTimeout(async () => {
        const t = await m.set({
          data: {
            curr: d
          }
        }, {
          add: (e) => {
            let n = e.el;
            n?.setAttribute("contenteditable", "true"), n?.classList.add("block-content"), n?.addEventListener("click", () => {
            }), n?.addEventListener("input", function(h) {
              const u = n.innerHTML;
              e.$d.data = u, t.evt.change();
            });
          },
          change: (e) => {
            i?.change(e);
          }
        });
        ((e) => {
          const n = document.createElement("style");
          n.innerHTML = `${t.style}`, e.appendChild(n);
        })(document.head);
      }, 200), c.r = s.r, ((t) => {
        const e = document.createElement("style");
        e.innerHTML = `${s.style}`, t.appendChild(e);
      })(document.head), c;
    }
  };
};
export {
  E as editor,
  E as index
};
