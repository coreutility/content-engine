const x = async (t) => ({
  set: async (i, c) => {
    const a = (i.data.curr.data.theme || "dark") === "dark", d = i.data.curr.data.files || [], l = i.data.curr.data.activeFile;
    let r = null;
    const o = (n) => {
      for (const e of n) {
        if (e.id === l)
          return e;
        if (e.children) {
          const s = o(e.children);
          if (s) return s;
        }
      }
      return null;
    };
    return r = o(d), {
      r: `
                    <div class="h-full flex flex-col">
                        <!-- File Tabs -->
                        <!--div 
                        id="${t.f.name("file-tabs")}" class="flex items-center border-b overflow-x-auto scrollbar-thin"
                            data-ce='[{"k":"t-light-class","v":"border-gray-200 bg-gray-100"},{"k":"t-dark-class","v":"border-gray-700 bg-gray-800"}]'>
                            
                            ${d.filter((e) => e.type === "file").map((e) => {
        const s = e.id === l;
        return `
                                <div id="${t.f.name(`tab:${e.id}:`)}"  data-type="${e.type}"
                                    class="flex items-center px-4 py-2 border-r cursor-pointer min-w-max
                                    ${s ? a ? "bg-gray-900 border-t-2 border-t-blue-500" : "bg-white border-t-2 border-t-blue-500" : a ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-50 hover:bg-gray-100"}"
                                    data-ce='[{"k":"t-light-class","v":"border-gray-300"},{"k":"t-dark-class","v":"border-gray-600"}]'>
                                    
                                    <span class="mr-2">${e.extension === "ts" ? "📘" : e.extension === "js" ? "📗" : e.extension === "json" ? "📓" : "📄"}</span>
                                    <span class="truncate max-w-[150px]">${e.name}</span>
                                    <button class="ml-2 text-xs opacity-60 hover:opacity-100 close-tab" data-id="${e.id}">
                                        ×
                                    </button>
                                </div>`;
      }).join("")}
                            
                            <div class="flex-1"></div>
                        </div-->
                        
                        <!-- File Content -->
                        <div class="flex-1 overflow-auto p-2 scrollbar-thin">
                            ${r ? `
                            <div class="h-full">
                                <div class="mb-2 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="text-md font-semibold" 
                                        id="${t.f.name("active-file-name")}"
                                         >${r.name}</span>
                                        <!--span class="text-xs px-2 py-1 rounded 
                                            ${a ? "bg-gray-700" : "bg-gray-200"}"
                                            data-ce='[{"k":"t-light-class","v":"bg-gray-200"},{"k":"t-dark-class","v":"bg-gray-700"}]'>
                                            ${r.extension?.toUpperCase() || "FILE"}
                                        </span-->
                                    </div>
                                    <div class="flex space-x-2">
                                        <!--button id="${t.f.name("save-file")}" class="px-3 py-1 rounded text-sm 
                                            ${a ? "bg-green-700 hover:bg-green-600" : "bg-green-500 hover:bg-green-400"} text-white">
                                            Save
                                        </button>
                                        <button id="${t.f.name("format-code")}" class="px-3 py-1 rounded text-sm 
                                            ${a ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-500 hover:bg-blue-400"} text-white">
                                            Format
                                        </button-->
                                    </div>
                                </div>
                                
                                <div id="${t.f.name("file-editor")}" 
                                    class="w-full h-[calc(100%-60px)] font-mono text-sm p-4 rounded border resize-none
                                    ${a ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-300 text-gray-900"}"
                                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-300 text-gray-900"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700 text-gray-100"}]'
                                    spellcheck="false">${r.content || ""}</div>
                            </div>` : `
                            <div class="h-full flex items-center justify-center text-center">
                                <div class="max-w-md">
                                    <div class="text-6xl mb-4 opacity-40">📁</div>
                                    <h3 class="text-xl font-semibold mb-2">No File Selected</h3>
                                    <p class="opacity-70 mb-4">Select a file from the sidebar to view and edit its contents.</p>
                                    <button id="${t.f.name("create-first-file")}" class="px-4 py-2 rounded 
                                        ${a ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400"} text-white">
                                        Create Your First File
                                    </button>
                                </div>
                            </div>`}
                        </div>
                        
                        <!-- Editor Status -->
                        <div style="display:none;"
                        class="h-6 border-t text-xs flex items-center justify-between px-4 border-gray-200 bg-gray-100"
                            data-ce='[{"k":"t-light-class","v":"border-gray-200 bg-gray-100"},{"k":"t-dark-class","v":"border-gray-700 bg-gray-800"}]'>
                            <span id="${t.f.name("editor-status")}">
                                ${r ? `Editing: ${r.name}` : "Ready"}
                            </span>
                            <span
                            id="${t.f.name("cursor-position")}">Ln 1, Col 1</span>
                        </div>
                    </div>`,
      style: `
                    .${t.f.name("file-tabs")} {
                        min-height: 40px;
                    }
                    
                    #${t.f.name("file-editor")} {
                        tab-size: 4;
                        line-height: 1.5;
                    }
                    
                    #${t.f.name("file-editor")}:focus {
                        outline: none;
                        ${a ? "box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);" : "box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);"}
                    }
                    
                    .close-tab:hover {
                        background: ${a ? "#4b5563" : "#e5e7eb"};
                        border-radius: 50%;
                        width: 16px;
                        height: 16px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }`
    };
  }
});
export {
  x as default,
  x as index,
  x as renderer
};
