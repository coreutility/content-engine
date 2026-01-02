import { index as m } from "./hydrator.es.js";
import { index as u } from "./renderer.es.js";
const y = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const n = Math.random() * 16 | 0;
    return (e == "x" ? n : n & 3 | 8).toString(16);
  })
}), $ = async (e) => {
  const n = await y();
  return {
    set: async (x) => {
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
      }, i = await u({
        f: {
          ...e.f,
          name: (t) => n.f.name({ id: r.id, name: t })
        }
      }), c = await m({
        my: {},
        f: {
          ...e.f,
          name: (t) => n.f.name({ id: r.id, name: t })
        }
      }), s = await i.set(
        {
          data: {
            curr: r
          }
        }
        /*{
            change: async() => {},
            add: async() => {},
        }*/
      );
      return setTimeout(async () => {
        const t = await c.set(
          {
            data: {
              curr: r
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
                              _$cb?.change(_v);
                          }
          
                      }*/
        );
        ((a) => {
          const o = document.createElement("style");
          o.innerHTML = `${t.style}`, a.appendChild(o);
        })(document.head);
      }, 200), d.r = s.r, ((t) => {
        const a = document.createElement("style");
        a.innerHTML = `${s.style}`, t.appendChild(a);
      })(document.head), d;
    }
  };
};
export {
  $ as editor
};
