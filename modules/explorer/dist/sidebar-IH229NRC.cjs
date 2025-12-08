"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=async r=>({set:async(a,p)=>{const d=(a.data.curr.data.theme||"dark")==="dark",f=a.data.curr.data.files||[],b=a.data.curr.data.expandedFolders||[],o=(s,c=0)=>s.map(e=>{const i=b.includes(e.id),g=`${c*20}px`,t=e.type==="file",y=a.data.curr.data.activeFile===e.id;let l="📄";return t?l="📄":l=i?"📂":"📁",`
        <div class="file-tree-item" data-id="${e.id}" data-type="${e.type}" 
            style="padding-left: ${g};">
            <div id="${r.f.name(`i:${e.id}:`)}" 
                class="flex items-center py-1 px-2 rounded cursor-pointer 
                ${y?d?"bg-blue-600":"bg-blue-100":""}
                ${t?"file-item":"folder-item"}
                hover:${d?"bg-gray-800":"bg-gray-100"}"
                data-ce='[{"k":"t-light-class","v":"hover:bg-gray-100"},{"k":"t-dark-class","v":"hover:bg-gray-800"}]'>
                
                <span class="mr-2 w-4">${l}</span>
                <span class="truncate flex-1">${e.name}</span>
                
                ${t?"":`
                <button class="folder-toggle ml-auto text-xs opacity-60 hover:opacity-100 pl-3 pr-1 pt-2 pb-2" data-id="${e.id}">
                    ${i?"▼":"▶"}
                </button>`}
            </div>
            
            ${t?"":`
            <div class="folder-children ${i?"":"hidden"}" 
                 data-folder-id="${e.id}">
                ${e.children?o(e.children,c+1):""}
            </div>`}
        </div>`}).join("");return{r:`
                    <div class="h-full flex flex-col"  >
                        <!-- Sidebar Header -->
                        <!--div class="p-4 border-b border-gray-200 font-semibold flex items-center justify-between"
                            data-ce='[{"k":"t-light-class","v":"border-gray-200"},{"k":"t-dark-class","v":"border-gray-700"}]'>
                            <span>EXPLORER</span>
                            <button id="${r.f.name("sidebar-collapse")}" class="text-xs opacity-60">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                        </div-->
                        
                        <!-- File Tree -->
                        <div class="flex-1 overflow-y-auto p-2 scrollbar-thin">
                            <div id="${r.f.name("file-tree")}">
                                ${o(f)}
                            </div>
                        </div>
                        
                        <!-- Search -->
                        <!--div class="p-2 border-t border-gray-200"
                            data-ce='[{"k":"t-light-class","v":"border-gray-200"},{"k":"t-dark-class","v":"border-gray-700"}]'>
                            <input type="text" 
                                id="${r.f.name("search-files")}"
                                placeholder="Search files..."
                                class="w-full px-3 py-1 rounded text-sm
                                ${d?"bg-gray-800 border-gray-700":"bg-gray-100 border-gray-300"} border"
                                data-ce='[{"k":"t-light-class","v":"bg-gray-100 border-gray-300"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                        </div-->
                    </div>`,style:`
    .${r.f.name("file-tree")} {
        user-select: none;
    }
    
    .folder-children {
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .folder-children.hidden {
        display: none;
    }
    
    .file-item, .folder-item {
        transition: background-color 0.2s ease;
    }
    
    .file-tree-item.hidden {
        display: none;
    }
    
    @media (max-width: 768px) {
        .${r.f.name("sidebar")} {
            position: fixed;
            top: 40px;
            left: 0;
            width: 100%;
            height: calc(100% - 40px);
            z-index: 100;
            background: ${d?"#1f2937":"#ffffff"};
        }
    }`}}});exports.default=n;exports.index=n;exports.renderer=n;
