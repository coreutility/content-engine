const Z = async () => ({
  set: async (b) => {
    const w = {
      data: {
        l: []
        /*[
            {
                "name": "text",
                "title": "Text",
                "description": "Just start writing with plain text",
                "icon": "T",
            },
            {
                "name": "table",
                "title": "Table",
                "description": "Just start with table",
                "icon": "[]",
            },
            //set..
            {
                "name": "heading_1",
                "title": "Heading 1",
                "description": "Large section heading",
                "icon": "H1",
            },
            {
                "name": "heading_2",
                "title": "Heading 2",
                "description": "Medium section heading",
                "icon": "H2",
            },
            {
                "name": "heading_3",
                "title": "Heading 3",
                "description": "Small section heading",
                "icon": "H3",
            },
            {
                "name": "image",
                "title": "Image",
                "description": "Upload or embed an image",
                "icon": "🖼️",
            },
            {
                "name": "bulleted_list",
                "title": "Bulleted List",
                "description": "Create a simple bulleted list",
                "icon": "•",
            },
            {
                "name": "numbered_list",
                "title": "Numbered List",
                "description": "Create a list with numbering",
                "icon": "1.",
            },
            {
                "name": "toggle_list",
                "title": "Toggle List",
                "description": "Create a toggleable list",
                "icon": "▸",
            },
            {
                "name": "quote",
                "title": "Quote",
                "description": "Capture a quote",
                "icon": "\"",
            },
            {
                "name": "code",
                "title": "Code",
                "description": "Capture a code snippet",
                "icon": "{ }",
            },
            {
                "name": "divider",
                "title": "Divider",
                "description": "Visual divider",
                "icon": "—",
            },
        ]*/
      }
    }, a = "https://cdn.jsdelivr.net/gh/coreutility/content-engine/modules-list.json";
    try {
      const c = await (await fetch(a)).json();
      w.data.l = c;
    } catch {
      console.error(`Err: Unable to load modules-list from [url=${a}]`);
    }
    return w;
  }
}), nt = async (b) => ({
  set: async (w) => {
    console.log(`--hydrator [${w.data.curr.type}]`);
    const a = {
      data: {
        l: [],
        get_all: () => JSON.parse(JSON.stringify(a.data.l)),
        sync: () => {
          const c = a.data.get_all();
          w.data.curr.data = {
            l: c
          }, b.f.call("msg", {
            type: "change",
            _p: b,
            _$p: w,
            custom: {}
          });
        },
        upsert: (c) => {
          const r = JSON.parse(JSON.stringify(c.val._$p.data.curr)), u = a.data.l.findIndex((y) => y.id == r.id);
          u > -1 ? a.data.l[u] = r : a.data.l.push(r), a.data.sync();
        },
        remove: (c) => {
          const r = JSON.parse(JSON.stringify(c.val._$p.data.curr)), u = a.data.l.findIndex((y) => y.id == r.id);
          u > -1 && a.data.l.splice(u, 1), a.data.sync();
        },
        change_index: (c) => {
          const r = JSON.parse(JSON.stringify(c.val._$p.data.curr)), { id: u } = r, y = c.newIdx, E = a.data.l.findIndex((g) => g.id == u);
          if (E > -1 && y >= 0 && y < a.data.l.length) {
            const [g] = a.data.l.splice(E, 1);
            a.data.l.splice(y, 0, g);
          }
          a.data.sync();
        }
      }
    }, $ = {
      r: "",
      style: ""
    };
    return (async () => {
      const c = document.getElementById("editor"), r = document.getElementById("emptyState"), u = document.getElementById("commandMenu"), y = document.getElementById("commandSearch"), E = document.getElementById("commandOptions"), g = document.getElementById("blockMenu");
      await (async () => {
        const t = await (await Z()).set({});
        let e = "";
        for (const n of t.data.l)
          e += `
                    <div class="command-option" data-type="${n.name}">
                        <div class="command-icon">${n.icon}</div>
                        <div class="command-label">
                            <div>${n.title}</div>
                            <div class="command-description">${n.description}</div>
                        </div>
                    </div>
                    `;
        E.innerHTML = e;
      })();
      const S = E.querySelectorAll(".command-option");
      let i = null, x = !1, C = !1, f = 0, B = null, k = null, T = !1, A = null;
      L("text"), document.addEventListener("keydown", function(t) {
        t.key === "/" && !x && !C ? (D("slash"), t.preventDefault()) : t.key === "Escape" ? (q(), I()) : x ? J(t) : t.key === "Enter" && !t.shiftKey ? K(t) : t.key === "Backspace" && i ? U(t) : t.key === "ArrowUp" && i ? W(t) : t.key === "ArrowDown" && i ? X(t) : t.key === "Tab" && i && P(t);
      }), y.addEventListener("input", function() {
        O(this.value);
      }), document.addEventListener("click", function(t) {
        !u.contains(t.target) && x && q(), !g.contains(t.target) && C && I();
      }), S.forEach((t) => {
        t.addEventListener("click", function() {
          const e = this.getAttribute("data-type");
          N(e), q();
        });
      });
      async function L(t, e = "", n = null) {
        v(), r.classList.contains("visible") && r.classList.remove("visible");
        const o = document.createElement("div");
        o.className = `block ${t}`, o.draggable = !0;
        const s = document.createElement("div");
        s.className = "block-controls";
        const p = document.createElement("div");
        p.className = "block-control block-handle", p.innerHTML = "⋮⋮", p.addEventListener("click", function(d) {
          d.stopPropagation(), H(o);
        });
        const h = document.createElement("div");
        h.className = "block-control block-plus", h.innerHTML = "+", h.addEventListener("click", function(d) {
          d.stopPropagation(), D("plus", o);
        }), s.appendChild(p), s.appendChild(h), o.appendChild(s);
        const l = document.createElement("div");
        l.className = "block-content", l.setAttribute("data-placeholder", "Type '/' for commands..."), e && (l.innerHTML = e);
        const F = await (await b.f.get_lib({ name: `${t}`, run_from: "editor" })).lib, R = b.f.new_emitter();
        let z = {
          my: {},
          f: {
            ...b.f,
            //overwrite..
            call: R.emit
            //listen:listen_emitter.on,
          }
        }, G = { data: {} };
        (async () => R.on("msg", async (d) => {
          d.type == "change" && a.data.upsert({
            val: d
          });
        }))();
        const Q = await (await F.editor(z)).set(
          G
          /*{
              change: (_v:any) => {
                  //console.log(`--change`);
                  //console.log(_v);
                  //set..
                  _$u.data.upsert({
                      val:_v,
                  });
              }
          }*/
        );
        if (l.innerHTML = `${Q.r}`, o.appendChild(l), Y(o), t !== "divider" && t !== "image") {
          const d = t === "toggle-list" ? l.querySelector(".toggle-summary") : l;
          d.addEventListener("focus", function() {
            m(o);
          }), d.addEventListener("input", function() {
            v();
          }), d.addEventListener("keydown", function(_) {
            _.key === "/" && (D("slash"), _.preventDefault());
          });
        }
        if (o.addEventListener("click", function(d) {
          if (!d.target.closest(".block-controls")) {
            m(o);
            const _ = t === "toggle-list" ? l.querySelector(".toggle-summary") : l;
            _ && _.focus();
          }
        }), n ? c?.insertBefore(o, n.nextSibling) : c?.appendChild(o), o.style.opacity = "0", o.style.transform = "translateY(10px)", setTimeout(() => {
          o.style.transition = "all 0.2s ease", o.style.opacity = "1", o.style.transform = "translateY(0)";
        }, 10), t !== "divider" && t !== "image") {
          const d = t === "toggle-list" ? l.querySelector(".toggle-summary") : l;
          d && !n && setTimeout(() => d.focus(), 100);
        }
        return n || m(o), v(), o;
      }
      function v() {
        const t = c.querySelectorAll(".block"), e = t.length > 0, n = Array.from(t).some((o) => {
          const s = o.querySelector('[contenteditable="true"]');
          return s && s.textContent.trim() !== "";
        });
        !e || !n ? (r.classList.add("visible"), i = null) : r.classList.remove("visible");
      }
      function Y(t) {
        t.addEventListener("dragstart", function(e) {
          k = this, T = !0, this.classList.add("dragging"), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/html", this.innerHTML);
          const n = this.cloneNode(!0);
          n.style.width = this.offsetWidth + "px", n.style.opacity = "0.8", document.body.appendChild(n), e.dataTransfer.setDragImage(n, 20, 10), setTimeout(() => document.body.removeChild(n), 0);
        }), t.addEventListener("dragend", function() {
          T = !1, this.classList.remove("dragging"), document.querySelectorAll(".block").forEach((e) => {
            e.classList.remove("drag-over");
          }), v();
        }), t.addEventListener("dragover", function(e) {
          T && k !== this && (e.preventDefault(), this.classList.add("drag-over"));
        }), t.addEventListener("dragenter", function(e) {
          T && k !== this && e.preventDefault();
        }), t.addEventListener("dragleave", function() {
          this.classList.remove("drag-over");
        }), t.addEventListener("drop", function(e) {
          e.preventDefault(), k !== this && (this.classList.remove("drag-over"), c.insertBefore(k, this), m(k), v());
        });
      }
      function m(t) {
        i && i.classList.remove("focused"), i = t, t && t.classList.add("focused");
      }
      function D(t, e = null) {
        if (t === "slash" && r?.classList.contains("visible"))
          return;
        B = t, A = e;
        let n;
        if (t === "slash") {
          if (n = j(), n.width === 0 && n.height === 0)
            if (i) {
              const l = i.getBoundingClientRect();
              n = {
                top: l.top + l.height,
                left: l.left,
                width: 0,
                height: 0
              };
            } else {
              const l = r.getBoundingClientRect();
              n = {
                top: l.top + l.height,
                left: l.left,
                width: 0,
                height: 0
              };
            }
        } else
          n = e.querySelector(".block-plus").getBoundingClientRect();
        const o = u.getBoundingClientRect(), s = window.innerHeight;
        let p = n.top + window.scrollY + 10, h = n.left + window.scrollX;
        p + o.height > s + window.scrollY && (p = n.top + window.scrollY - o.height - 10), h + o.width > window.innerWidth + window.scrollX && (h = window.innerWidth + window.scrollX - o.width - 20), u.style.top = `${p}px`, u.style.left = `${h}px`, u.classList.add("visible"), x = !0, y.value = "", O(""), f = 0, M(), setTimeout(() => y.focus(), 50);
      }
      function q() {
        u.classList.remove("visible"), x = !1, B = null, A = null;
      }
      function H(t) {
        const e = t.getBoundingClientRect(), n = g.getBoundingClientRect(), o = window.innerHeight;
        let s = e.top + window.scrollY + 30, p = e.left + window.scrollX;
        s + n.height > o + window.scrollY && (s = e.top + window.scrollY - n.height - 10), g.style.top = `${s}px`, g.style.left = `${p}px`, g.classList.add("visible"), C = !0, m(t);
      }
      function I() {
        g.classList.remove("visible"), C = !1;
      }
      function O(t) {
        const e = Array.from(S);
        let n = 0;
        e.forEach((o, s) => {
          const p = o.querySelector(".command-label div:first-child").textContent.toLowerCase(), h = o.querySelector(".command-description").textContent.toLowerCase(), l = t.toLowerCase();
          p.includes(l) || h.includes(l) || t === "" ? (o.style.display = "flex", n++, n === 1 && (f = s)) : o.style.display = "none";
        }), M();
      }
      function J(t) {
        const e = Array.from(S).filter(
          (n) => n.style.display !== "none"
        );
        switch (t.key) {
          case "ArrowUp":
            f = f > 0 ? f - 1 : e.length - 1, M(), t.preventDefault();
            break;
          case "ArrowDown":
            f = f < e.length - 1 ? f + 1 : 0, M(), t.preventDefault();
            break;
          case "Enter":
            if (e[f]) {
              const n = e[f].getAttribute("data-type");
              N(n), q();
            }
            t.preventDefault();
            break;
        }
      }
      function M() {
        const t = Array.from(S).filter(
          (e) => e.style.display !== "none"
        );
        S.forEach((e) => {
          e.classList.remove("selected");
        }), t[f] && (t[f].classList.add("selected"), t[f].scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        }));
      }
      async function N(t) {
        if (B === "slash") {
          const e = i.querySelector('[contenteditable="true"]')?.textContent.replace("/", "") || "", n = await L(t, e);
          i.style.opacity = "0", i.style.transform = "translateY(-10px)", setTimeout(() => {
            i.remove(), v();
          }, 150), m(n), setTimeout(() => {
            const o = n.querySelector('[contenteditable="true"]');
            o && o.focus();
          }, 160);
        } else if (B === "plus" && A) {
          const e = await L(t, "", A);
          m(e), setTimeout(() => {
            const n = e.querySelector('[contenteditable="true"]');
            n && n.focus();
          }, 100);
        }
      }
      async function K(t) {
        if (!i) return;
        t.preventDefault();
        const e = Array.from(i.classList).find((s) => s.startsWith("heading-") || s === "text" || s === "bullet-list" || s === "numbered-list" || s === "quote" || s === "code");
        let n = "text";
        (e === "bullet-list" || e === "numbered-list") && (n = e);
        const o = await L(n, "", i);
        m(o);
      }
      function P(t) {
        i && t.preventDefault();
      }
      function U(t) {
        if (!i) return;
        const e = i.querySelector('[contenteditable="true"]');
        if (e && e.textContent === "" && c.querySelectorAll(".block").length > 1) {
          t.preventDefault();
          const n = i.previousElementSibling;
          i.style.opacity = "0", i.style.transform = "translateY(-10px)", setTimeout(() => {
            if (i.remove(), n && n.classList.contains("block")) {
              m(n);
              const o = n.querySelector('[contenteditable="true"]');
              o && o.focus();
            }
            v();
          }, 150);
        } else e && e.textContent === "" && c.querySelectorAll(".block").length === 1 && (t.preventDefault(), i.style.opacity = "0", i.style.transform = "translateY(-10px)", setTimeout(() => {
          i.remove(), i = null, v();
        }, 150));
      }
      function W(t) {
        if (!i || t.shiftKey) return;
        const e = i.previousElementSibling;
        if (e && e.classList.contains("block")) {
          t.preventDefault(), m(e);
          const n = e.querySelector('[contenteditable="true"]');
          n && n.focus();
        }
      }
      function X(t) {
        if (!i || t.shiftKey) return;
        const e = i.nextElementSibling;
        if (e && e.classList.contains("block")) {
          t.preventDefault(), m(e);
          const n = e.querySelector('[contenteditable="true"]');
          n && n.focus();
        }
      }
      function j() {
        const t = window.getSelection();
        return t.rangeCount === 0 ? { top: 0, left: 0, width: 0, height: 0 } : t.getRangeAt(0).getBoundingClientRect();
      }
      g.querySelectorAll(".block-menu-option").forEach((t) => {
        t.addEventListener("click", async function() {
          const e = this.getAttribute("data-action");
          await V(e), I();
        });
      });
      async function V(t) {
        if (i)
          switch (t) {
            case "delete":
              const e = i.previousElementSibling;
              i.style.opacity = "0", i.style.transform = "translateY(-10px)", setTimeout(() => {
                if (i.remove(), e && e.classList.contains("block")) {
                  m(e);
                  const s = e.querySelector('[contenteditable="true"]');
                  s && s.focus();
                }
                v();
              }, 150);
              break;
            case "duplicate":
              const n = i.querySelector('[contenteditable="true"]')?.innerHTML || "", o = Array.from(i.classList).find((s) => s !== "block" && s !== "focused");
              await L(o, n, i);
              break;
            case "turn-into":
              D("slash");
              break;
          }
      }
      r.addEventListener("click", async function() {
        r.classList.contains("visible") && await L("text");
      }), document.addEventListener("mousedown", function() {
        document.body.classList.add("using-mouse");
      }), document.addEventListener("keydown", function() {
        document.body.classList.remove("using-mouse");
      });
    })(), $;
  }
});
export {
  nt as hydrator,
  nt as index
};
