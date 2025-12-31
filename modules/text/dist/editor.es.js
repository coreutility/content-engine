import { index as y } from "./hydrator.es.js";
import { index as f } from "./renderer.es.js";
const p = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), h = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const a = Math.random() * 16 | 0;
    return (e == "x" ? a : a & 3 | 8).toString(16);
  })
}), v = async (e) => {
  const a = await p();
  return {
    set: async (s) => {
      const i = {
        r: ""
        //style: ``,
      }, d = s.data.curr || {
        id: h().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, x = e.f.new_emitter(), m = await f({
        f: {
          ...e.f,
          name: (n) => a.f.name({ id: d.id, name: n })
        }
      }), l = await y({
        my: {},
        f: {
          ...e.f,
          name: (n) => a.f.name({ id: d.id, name: n }),
          //overwrite..
          call: x.emit
          //listen:listen_emitter.on,
        }
      }), o = await m.set({
        data: {
          curr: d
        }
      });
      return setTimeout(async () => {
        (async () => x.on("msg", async (t) => {
          if (t.type == "add") {
            let r = t, c = r.el;
            c?.setAttribute("contenteditable", "true"), c?.classList.add("block-content"), c?.addEventListener("click", () => {
            }), c?.addEventListener("input", function($) {
              const u = c.innerHTML;
              r.$d.data = u, n.evt.change();
            });
          }
          t.type == "change" && e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: t._$p,
            custom: {}
          });
        }))();
        const n = await l.set(
          {
            data: {
              curr: d
            }
          }
          /*{
                          add: (_v) => {
                              //console.log(`--add`);
                              //console.log(_v);
                              //set..
                              let _el = _v.el;
                              _el?.setAttribute(`contenteditable`,"true"); 
                              _el?.classList.add('block-content');
                              _el?.addEventListener("click", () => {
                                 //alert(``);
                              });
                              _el?.addEventListener('input', function (event:any) { // input | keyup
                                  const _curr = _el.innerHTML; //_el.textContent;
                                  //update..
                                  _v[`$d`].data = _curr;
                                  _hydrator_rsp.evt.change();
                              });
                          },
                          change: (_v) => {
                              //console.log(`--change`);
                              //console.log(_v);
                              //_$cb?.change(_v);
                              _p.f.emitter.emit("msg", {
                                  type:`change`,
                                  _p:_p,
                                  _$p:_v._$p,
                                  custom:{},
                              });
                          }
          
                      }*/
        );
        ((t) => {
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
