import { index as u } from "./hydrator.es.js";
import { index as y } from "./renderer.es.js";
const p = async () => ({
  f: {
    name: (a) => `${a.name}${a.id}`
  }
}), h = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const r = Math.random() * 16 | 0;
    return (a == "x" ? r : r & 3 | 8).toString(16);
  })
}), g = async (a) => {
  const r = await p();
  return {
    set: async (o, c) => {
      const s = {
        r: ""
        //style: ``,
      }, i = o.data.curr || {
        id: h().set(),
        type: "table",
        data: {
          sortBy: "id",
          sortDirection: "asc",
          columns: [
            { key: "id", title: "ID", type: "number", sortable: !0 },
            { key: "name", title: "Name", type: "text", sortable: !0 },
            { key: "age", title: "Age", type: "number", sortable: !0 },
            { key: "email", title: "Email", type: "text", sortable: !1 },
            { key: "active", title: "Active", type: "boolean", sortable: !0 },
            { key: "joinDate", title: "Join Date", type: "date", sortable: !0 }
          ],
          rows: [
            {
              id: "1",
              name: "John Doe",
              age: 28,
              email: "john.doe@example.com",
              active: !0,
              joinDate: "2023-01-15"
            },
            {
              id: 2,
              name: "Jane Smith",
              age: 32,
              email: "jane.smith@example.com",
              active: !1,
              joinDate: "2022-11-20"
            }
          ]
        }
      }, x = await y({
        f: {
          ...a.f,
          name: (t) => r.f.name({ id: i.id, name: t })
        }
      }), l = await u({
        f: {
          ...a.f,
          name: (t) => r.f.name({ id: i.id, name: t })
        }
      }), d = await x.set({
        data: {
          curr: i
        }
      });
      return setTimeout(async () => {
        const t = await l.set({
          data: {
            curr: i
          }
        }, {
          add: (e) => {
            let n = e.el;
            n?.setAttribute("contenteditable", "true"), n?.classList.add("block-content"), n?.addEventListener("click", () => {
            }), n?.addEventListener("input", function(b) {
              const m = n.textContent;
              e.$d.title = m, t.evt.change();
            });
          },
          change: (e) => {
            c?.change(e);
          }
        });
        ((e) => {
          const n = document.createElement("style");
          n.innerHTML = `${t.style}`, e.appendChild(n);
        })(document.head);
      }, 200), s.r = d.r, ((t) => {
        const e = document.createElement("style");
        e.innerHTML = `${d.style}`, t.appendChild(e);
      })(document.head), s;
    }
  };
};
export {
  g as editor
};
