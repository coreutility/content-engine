const i = async (s) => ({
  set: async (a) => {
    console.log(`--renderer [${a.data.curr.type}]`);
    const n = {
      formatValue: (t, e) => {
        switch (e.type) {
          case "date":
            return new Date(t).toLocaleDateString();
          case "boolean":
            return t ? "Yes" : "No";
          case "number":
            return t.toString();
          default:
            return String(t);
        }
      },
      generateTableHeaders: () => `
                      <thead>
                        <tr>
                          ${a.data.curr.data.columns.map((e) => {
        const c = e.sortable ? "sortable" : "", r = a.data.curr.data.sortBy === e.key ? `<span class="sort-indicator">${a.data.curr.data.sortDirection === "asc" ? "↑" : "↓"}</span>` : "";
        return `
                          <th class="${c}" data-key="${e.key}">
                            ${e.title}
                            ${r}
                          </th>
                        `;
      }).join("")}
                        </tr>
                      </thead>
                    `,
      generateTableRows: () => `<tbody>${a.data.curr.data.rows.map((e) => {
        const c = a.data.curr.data.columns.map((r) => {
          const o = e[r.key], d = n.formatValue(o, r);
          return `<td class="${`cell-${r.type}`}">${d}</td>`;
        }).join("");
        return `<tr data-id="${e.id}">${c}</tr>`;
      }).join("")}</tbody>`
    };
    return {
      r: `
                <div class="${s.f.name("table")}" id="${s.f.name("table")}"  >
                <table >
                  ${n.generateTableHeaders()}
                  ${n.generateTableRows()}
                </table>
                </div>
                `,
      style: (() => {
        let t = "";
        return t = `
                .${s.f.name("table")} {
                   background: #cccccc;
                }
                `, t;
      })()
    };
  }
});
export {
  i as index,
  i as renderer
};
