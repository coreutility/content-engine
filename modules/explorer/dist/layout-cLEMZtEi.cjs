"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=async e=>({set:async(a,t)=>{console.log(`--renderer [${a.data.curr.type}]`);const r=(a.data.curr.data.theme||"dark")==="dark",i=await(await(await Promise.resolve().then(()=>require("./sidebar-IH229NRC.cjs"))).default(e)).set(a,t),l=await(await(await Promise.resolve().then(()=>require("./file-viewer-A1t7c8rs.cjs"))).default(e)).set(a,t),d=await(await(await Promise.resolve().then(()=>require("./status-bar-B3MIbeX8.cjs"))).default(e)).set(a,t);return{r:await(async()=>`
                    <div id="${e.f.name("root")}" class="h-screen w-screen overflow-hidden flex flex-col 
                        ${r?"bg-gray-900 text-gray-100":"bg-gray-50 text-gray-900"}"
                        data-ce='[{"k":"t-light-class","v":"bg-gray-50 text-gray-900"},{"k":"t-dark-class","v":"bg-gray-900 text-gray-100"}]'>
                        
                        <!-- Header -->
                        <div id="${e.f.name("header")}" class="h-10 border-b border-gray-200 flex items-center justify-between px-4"
                            data-ce='[{"k":"t-light-class","v":"border-gray-200"},{"k":"t-dark-class","v":"border-gray-700"}]'>
                            
                            <div class="flex items-center space-x-4">

                                <button id="${e.f.name("sidebar-collapse")}" class="text-md opacity-60">
                                <!--i class="fas fa-chevron-left"></i-->
                                <i class="fa fa-bars"></i>
                                </button>
                                
                                <span class="font-semibold text-lg">${a.data.curr.data?.title||"Explorer"}</span>
                                <div class="flex space-x-2">
                                    <!--button id="${e.f.name("new-file")}" class="px-3 py-1 rounded text-sm 
                                        ${r?"bg-gray-700 hover:bg-gray-600":"bg-gray-200 hover:bg-gray-300"}"
                                        data-ce='[{"k":"t-light-class","v":"bg-gray-200 hover:bg-gray-300"},{"k":"t-dark-class","v":"bg-gray-700 hover:bg-gray-600"}]'>
                                        New File
                                    </button>
                                    <button id="${e.f.name("new-folder")}" class="px-3 py-1 rounded text-sm 
                                        ${r?"bg-gray-700 hover:bg-gray-600":"bg-gray-200 hover:bg-gray-300"}"
                                        data-ce='[{"k":"t-light-class","v":"bg-gray-200 hover:bg-gray-300"},{"k":"t-dark-class","v":"bg-gray-700 hover:bg-gray-600"}]'>
                                        New Folder
                                    </button-->
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-4">
                                <button id="${e.f.name("theme-toggle")}" class="p-2 rounded-full 
                                    ${r?"bg-gray-800 hover:bg-gray-700":"bg-gray-100 hover:bg-gray-200"}"
                                    data-ce='[{"k":"t-light-class","v":"bg-gray-100 hover:bg-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 hover:bg-gray-700"}]'>
                                    ${r?"🌙":"☀️"}
                                </button>
                            </div>
                        </div>
                        
                        <!-- Main Content -->
                        <div class="flex flex-1 overflow-hidden">
                            <!-- Sidebar -->
                            <div id="${e.f.name("sidebar")}" 
                            class="w-64 border-r flex flex-col border-gray-200"
                                data-ce='[{"k":"t-light-class","v":"border-gray-200"},{"k":"t-dark-class","v":"border-gray-700"}]'
                                >
                                ${i.r}
                            </div>


                            
                            <!-- File Viewer -->
                            <div id="${e.f.name("file-viewer")}" class="flex-1 overflow-hidden">
                                ${l.r}
                            </div>
                        </div>
                        
                        <!-- Status Bar -->
                        <div id="${e.f.name("status-bar")}" class="h-6 border-t text-xs flex items-center px-4 border-gray-200 bg-gray-100"
                            data-ce='[{"k":"t-light-class","v":"border-gray-200 bg-gray-100"},{"k":"t-dark-class","v":"border-gray-700 bg-gray-800"}]'>
                            ${d.r}
                        </div>
                    </div>`)(),head:`
                    <title>Explorer</title>
                    <meta name="description" content="A explorer built with Vite, TypeScript and Tailwind CSS">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "Explorer",
                        "description": "explorer",
                        "applicationCategory": "UtilityApplication"
                    }
                    <\/script>`,style:`
                    ${i.style}
                    ${l.style}
                    ${d.style}

                    .${e.f.name("root")} {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                    
                    .${e.f.name("sidebar")} {
                        min-width: 200px;
                        max-width: 400px;
                        resize: horizontal;
                        overflow: auto;
                    }
                    
                    .scrollbar-thin {
                        scrollbar-width: thin;
                    }
                    
                    .scrollbar-thin::-webkit-scrollbar {
                        width: 6px;
                        height: 6px;
                    }
                    
                    .scrollbar-thin::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    
                    .scrollbar-thin::-webkit-scrollbar-thumb {
                        ${r?"background: #4b5563;":"background: #d1d5db;"}
                        border-radius: 3px;
                    }
                    
                    @media (max-width: 768px) {
                        .${e.f.name("sidebar")} {
                            width: 100%;
                            max-width: 100%;
                            resize: none;
                        }
                    }`}}});exports.default=s;exports.index=s;exports.renderer=s;
