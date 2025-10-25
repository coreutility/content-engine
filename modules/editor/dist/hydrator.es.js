const j = async () => ({
  set: async (M) => ({
    data: {
      l: [
        {
          type: "text",
          title: "Text",
          desc: "Just start writing with plain text",
          icon: "T"
        },
        {
          type: "table",
          title: "Table",
          desc: "Just start with table",
          icon: "[]"
        },
        //set..
        {
          type: "heading_1",
          title: "Heading 1",
          desc: "Large section heading",
          icon: "H1"
        },
        {
          type: "heading_2",
          title: "Heading 2",
          desc: "Medium section heading",
          icon: "H2"
        },
        {
          type: "heading_3",
          title: "Heading 3",
          desc: "Small section heading",
          icon: "H3"
        },
        {
          type: "image",
          title: "Image",
          desc: "Upload or embed an image",
          icon: "🖼️"
        },
        {
          type: "bulleted_list",
          title: "Bulleted List",
          desc: "Create a simple bulleted list",
          icon: "•"
        },
        {
          type: "numbered_list",
          title: "Numbered List",
          desc: "Create a list with numbering",
          icon: "1."
        },
        {
          type: "toggle_list",
          title: "Toggle List",
          desc: "Create a toggleable list",
          icon: "▸"
        },
        {
          type: "quote",
          title: "Quote",
          desc: "Capture a quote",
          icon: '"'
        },
        {
          type: "code",
          title: "Code",
          desc: "Capture a code snippet",
          icon: "{ }"
        },
        {
          type: "divider",
          title: "Divider",
          desc: "Visual divider",
          icon: "—"
        }
      ]
    }
  })
}), ee = async (M) => ({
  set: async (C, $) => {
    console.log(`--hydrator [${C.data.curr.type}]`);
    const r = {
      data: {
        l: [],
        get_all: () => JSON.parse(JSON.stringify(r.data.l)),
        sync: () => {
          const c = r.data.get_all();
          C.data.curr.data = {
            l: c
          }, $.change({ _$p: C });
        },
        upsert: (c) => {
          const a = JSON.parse(JSON.stringify(c.val._$p.data.curr)), d = r.data.l.findIndex((g) => g.id == a.id);
          d > -1 ? r.data.l[d] = a : r.data.l.push(a), r.data.sync();
        },
        remove: (c) => {
          const a = JSON.parse(JSON.stringify(c.val._$p.data.curr)), d = r.data.l.findIndex((g) => g.id == a.id);
          d > -1 && r.data.l.splice(d, 1), r.data.sync();
        },
        change_index: (c) => {
          const a = JSON.parse(JSON.stringify(c.val._$p.data.curr)), { id: d } = a, g = c.newIdx, L = r.data.l.findIndex((y) => y.id == d);
          if (L > -1 && g >= 0 && g < r.data.l.length) {
            const [y] = r.data.l.splice(L, 1);
            r.data.l.splice(g, 0, y);
          }
          r.data.sync();
        }
      }
    }, N = {
      r: "",
      style: ""
    };
    return (async () => {
      const c = document.getElementById("editor"), a = document.getElementById("emptyState"), d = document.getElementById("commandMenu"), g = document.getElementById("commandSearch"), L = document.getElementById("commandOptions"), y = document.getElementById("blockMenu");
      await (async () => {
        const e = await (await j()).set({});
        let t = "";
        for (const n of e.data.l)
          t += `
                    <div class="command-option" data-type="${n.type}">
                        <div class="command-icon">${n.icon}</div>
                        <div class="command-label">
                            <div>${n.title}</div>
                            <div class="command-description">${n.desc}</div>
                        </div>
                    </div>
                    `;
        L.innerHTML = t;
      })();
      const k = L.querySelectorAll(".command-option");
      let o = null, E = !1, S = !1, f = 0, _ = null, b = null, B = !1, T = null;
      w("text"), document.addEventListener("keydown", function(e) {
        e.key === "/" && !E && !S ? (q("slash"), e.preventDefault()) : e.key === "Escape" ? (A(), I()) : E ? J(e) : e.key === "Enter" && !e.shiftKey ? K(e) : e.key === "Backspace" && o ? U(e) : e.key === "ArrowUp" && o ? V(e) : e.key === "ArrowDown" && o ? W(e) : e.key === "Tab" && o && P(e);
      }), g.addEventListener("input", function() {
        H(this.value);
      }), document.addEventListener("click", function(e) {
        !d.contains(e.target) && E && A(), !y.contains(e.target) && S && I();
      }), k.forEach((e) => {
        e.addEventListener("click", function() {
          const t = this.getAttribute("data-type");
          O(t), A();
        });
      });
      async function w(e, t = "", n = null) {
        v(), a.classList.contains("visible") && a.classList.remove("visible");
        const i = document.createElement("div");
        i.className = `block ${e}`, i.draggable = !0;
        const s = document.createElement("div");
        s.className = "block-controls";
        const p = document.createElement("div");
        p.className = "block-control block-handle", p.innerHTML = "⋮⋮", p.addEventListener("click", function(u) {
          u.stopPropagation(), Y(i);
        });
        const h = document.createElement("div");
        h.className = "block-control block-plus", h.innerHTML = "+", h.addEventListener("click", function(u) {
          u.stopPropagation(), q("plus", i);
        }), s.appendChild(p), s.appendChild(h), i.appendChild(s);
        const l = document.createElement("div");
        l.className = "block-content", l.setAttribute("data-placeholder", "Type '/' for commands..."), t && (l.innerHTML = t);
        const Q = await (await (await (await M.f.get_lib({ name: `${e}`, run_from: "editor" })).lib).editor(M)).set({ data: {} }, {
          change: (u) => {
            r.data.upsert({
              val: u
            });
          }
        });
        if (l.innerHTML = `${Q.r}`, i.appendChild(l), R(i), e !== "divider" && e !== "image") {
          const u = e === "toggle-list" ? l.querySelector(".toggle-summary") : l;
          u.addEventListener("focus", function() {
            m(i);
          }), u.addEventListener("input", function() {
            v();
          }), u.addEventListener("keydown", function(x) {
            x.key === "/" && (q("slash"), x.preventDefault());
          });
        }
        if (i.addEventListener("click", function(u) {
          if (!u.target.closest(".block-controls")) {
            m(i);
            const x = e === "toggle-list" ? l.querySelector(".toggle-summary") : l;
            x && x.focus();
          }
        }), n ? c?.insertBefore(i, n.nextSibling) : c?.appendChild(i), i.style.opacity = "0", i.style.transform = "translateY(10px)", setTimeout(() => {
          i.style.transition = "all 0.2s ease", i.style.opacity = "1", i.style.transform = "translateY(0)";
        }, 10), e !== "divider" && e !== "image") {
          const u = e === "toggle-list" ? l.querySelector(".toggle-summary") : l;
          u && !n && setTimeout(() => u.focus(), 100);
        }
        return n || m(i), v(), i;
      }
      function v() {
        const e = c.querySelectorAll(".block"), t = e.length > 0, n = Array.from(e).some((i) => {
          const s = i.querySelector('[contenteditable="true"]');
          return s && s.textContent.trim() !== "";
        });
        !t || !n ? (a.classList.add("visible"), o = null) : a.classList.remove("visible");
      }
      function R(e) {
        e.addEventListener("dragstart", function(t) {
          b = this, B = !0, this.classList.add("dragging"), t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData("text/html", this.innerHTML);
          const n = this.cloneNode(!0);
          n.style.width = this.offsetWidth + "px", n.style.opacity = "0.8", document.body.appendChild(n), t.dataTransfer.setDragImage(n, 20, 10), setTimeout(() => document.body.removeChild(n), 0);
        }), e.addEventListener("dragend", function() {
          B = !1, this.classList.remove("dragging"), document.querySelectorAll(".block").forEach((t) => {
            t.classList.remove("drag-over");
          }), v();
        }), e.addEventListener("dragover", function(t) {
          B && b !== this && (t.preventDefault(), this.classList.add("drag-over"));
        }), e.addEventListener("dragenter", function(t) {
          B && b !== this && t.preventDefault();
        }), e.addEventListener("dragleave", function() {
          this.classList.remove("drag-over");
        }), e.addEventListener("drop", function(t) {
          t.preventDefault(), b !== this && (this.classList.remove("drag-over"), c.insertBefore(b, this), m(b), v());
        });
      }
      function m(e) {
        o && o.classList.remove("focused"), o = e, e && e.classList.add("focused");
      }
      function q(e, t = null) {
        if (e === "slash" && a?.classList.contains("visible"))
          return;
        _ = e, T = t;
        let n;
        if (e === "slash") {
          if (n = X(), n.width === 0 && n.height === 0)
            if (o) {
              const l = o.getBoundingClientRect();
              n = {
                top: l.top + l.height,
                left: l.left,
                width: 0,
                height: 0
              };
            } else {
              const l = a.getBoundingClientRect();
              n = {
                top: l.top + l.height,
                left: l.left,
                width: 0,
                height: 0
              };
            }
        } else
          n = t.querySelector(".block-plus").getBoundingClientRect();
        const i = d.getBoundingClientRect(), s = window.innerHeight;
        let p = n.top + window.scrollY + 10, h = n.left + window.scrollX;
        p + i.height > s + window.scrollY && (p = n.top + window.scrollY - i.height - 10), h + i.width > window.innerWidth + window.scrollX && (h = window.innerWidth + window.scrollX - i.width - 20), d.style.top = `${p}px`, d.style.left = `${h}px`, d.classList.add("visible"), E = !0, g.value = "", H(""), f = 0, D(), setTimeout(() => g.focus(), 50);
      }
      function A() {
        d.classList.remove("visible"), E = !1, _ = null, T = null;
      }
      function Y(e) {
        const t = e.getBoundingClientRect(), n = y.getBoundingClientRect(), i = window.innerHeight;
        let s = t.top + window.scrollY + 30, p = t.left + window.scrollX;
        s + n.height > i + window.scrollY && (s = t.top + window.scrollY - n.height - 10), y.style.top = `${s}px`, y.style.left = `${p}px`, y.classList.add("visible"), S = !0, m(e);
      }
      function I() {
        y.classList.remove("visible"), S = !1;
      }
      function H(e) {
        const t = Array.from(k);
        let n = 0;
        t.forEach((i, s) => {
          const p = i.querySelector(".command-label div:first-child").textContent.toLowerCase(), h = i.querySelector(".command-description").textContent.toLowerCase(), l = e.toLowerCase();
          p.includes(l) || h.includes(l) || e === "" ? (i.style.display = "flex", n++, n === 1 && (f = s)) : i.style.display = "none";
        }), D();
      }
      function J(e) {
        const t = Array.from(k).filter(
          (n) => n.style.display !== "none"
        );
        switch (e.key) {
          case "ArrowUp":
            f = f > 0 ? f - 1 : t.length - 1, D(), e.preventDefault();
            break;
          case "ArrowDown":
            f = f < t.length - 1 ? f + 1 : 0, D(), e.preventDefault();
            break;
          case "Enter":
            if (t[f]) {
              const n = t[f].getAttribute("data-type");
              O(n), A();
            }
            e.preventDefault();
            break;
        }
      }
      function D() {
        const e = Array.from(k).filter(
          (t) => t.style.display !== "none"
        );
        k.forEach((t) => {
          t.classList.remove("selected");
        }), e[f] && (e[f].classList.add("selected"), e[f].scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        }));
      }
      async function O(e) {
        if (_ === "slash") {
          const t = o.querySelector('[contenteditable="true"]')?.textContent.replace("/", "") || "", n = await w(e, t);
          o.style.opacity = "0", o.style.transform = "translateY(-10px)", setTimeout(() => {
            o.remove(), v();
          }, 150), m(n), setTimeout(() => {
            const i = n.querySelector('[contenteditable="true"]');
            i && i.focus();
          }, 160);
        } else if (_ === "plus" && T) {
          const t = await w(e, "", T);
          m(t), setTimeout(() => {
            const n = t.querySelector('[contenteditable="true"]');
            n && n.focus();
          }, 100);
        }
      }
      async function K(e) {
        if (!o) return;
        e.preventDefault();
        const t = Array.from(o.classList).find((s) => s.startsWith("heading-") || s === "text" || s === "bullet-list" || s === "numbered-list" || s === "quote" || s === "code");
        let n = "text";
        (t === "bullet-list" || t === "numbered-list") && (n = t);
        const i = await w(n, "", o);
        m(i);
      }
      function P(e) {
        o && e.preventDefault();
      }
      function U(e) {
        if (!o) return;
        const t = o.querySelector('[contenteditable="true"]');
        if (t && t.textContent === "" && c.querySelectorAll(".block").length > 1) {
          e.preventDefault();
          const n = o.previousElementSibling;
          o.style.opacity = "0", o.style.transform = "translateY(-10px)", setTimeout(() => {
            if (o.remove(), n && n.classList.contains("block")) {
              m(n);
              const i = n.querySelector('[contenteditable="true"]');
              i && i.focus();
            }
            v();
          }, 150);
        } else t && t.textContent === "" && c.querySelectorAll(".block").length === 1 && (e.preventDefault(), o.style.opacity = "0", o.style.transform = "translateY(-10px)", setTimeout(() => {
          o.remove(), o = null, v();
        }, 150));
      }
      function V(e) {
        if (!o || e.shiftKey) return;
        const t = o.previousElementSibling;
        if (t && t.classList.contains("block")) {
          e.preventDefault(), m(t);
          const n = t.querySelector('[contenteditable="true"]');
          n && n.focus();
        }
      }
      function W(e) {
        if (!o || e.shiftKey) return;
        const t = o.nextElementSibling;
        if (t && t.classList.contains("block")) {
          e.preventDefault(), m(t);
          const n = t.querySelector('[contenteditable="true"]');
          n && n.focus();
        }
      }
      function X() {
        const e = window.getSelection();
        return e.rangeCount === 0 ? { top: 0, left: 0, width: 0, height: 0 } : e.getRangeAt(0).getBoundingClientRect();
      }
      y.querySelectorAll(".block-menu-option").forEach((e) => {
        e.addEventListener("click", async function() {
          const t = this.getAttribute("data-action");
          await F(t), I();
        });
      });
      async function F(e) {
        if (o)
          switch (e) {
            case "delete":
              const t = o.previousElementSibling;
              o.style.opacity = "0", o.style.transform = "translateY(-10px)", setTimeout(() => {
                if (o.remove(), t && t.classList.contains("block")) {
                  m(t);
                  const s = t.querySelector('[contenteditable="true"]');
                  s && s.focus();
                }
                v();
              }, 150);
              break;
            case "duplicate":
              const n = o.querySelector('[contenteditable="true"]')?.innerHTML || "", i = Array.from(o.classList).find((s) => s !== "block" && s !== "focused");
              await w(i, n, o);
              break;
            case "turn-into":
              q("slash");
              break;
          }
      }
      a.addEventListener("click", async function() {
        a.classList.contains("visible") && await w("text");
      }), document.addEventListener("mousedown", function() {
        document.body.classList.add("using-mouse");
      }), document.addEventListener("keydown", function() {
        document.body.classList.remove("using-mouse");
      });
    })(), N;
  }
});
export {
  ee as hydrator,
  ee as index
};
