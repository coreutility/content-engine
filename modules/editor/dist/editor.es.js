import { index as u } from "./hydrator.es.js";
import { index as y } from "./renderer.es.js";
const h = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const a = Math.random() * 16 | 0;
    return (e == "x" ? a : a & 3 | 8).toString(16);
  })
}), $ = async (e) => {
  const a = await h();
  return {
    set: async (x, o) => {
      const d = {
        r: ""
        //style: ``,
      }, r = x.data.curr || {
        id: p().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, i = await y({
        f: {
          ...e.f,
          name: (n) => a.f.name({ id: r.id, name: n })
        }
      }), m = await u({
        f: {
          ...e.f,
          name: (n) => a.f.name({ id: r.id, name: n })
        }
      }), s = await i.set({
        data: {
          curr: r
        }
      }, {
        change: async () => {
        },
        add: async () => {
        }
      });
      return setTimeout(async () => {
        const n = await m.set({
          data: {
            curr: r
          }
        }, {
          add: (t) => {
          },
          change: (t) => {
            o?.change(t);
          }
        });
        ((t) => {
          const c = document.createElement("style");
          c.innerHTML = `${n.style}`, t.appendChild(c);
        })(document.head);
      }, 200), d.r = s.r, ((n) => {
        const t = document.createElement("style");
        t.innerHTML = `${s.style}`, n.appendChild(t);
      })(document.head), d;
    }
  };
};
export {
  $ as editor
};
