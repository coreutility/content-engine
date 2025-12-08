"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=async e=>({set:async(a,r)=>{const s=(a.data.curr.data.theme||"dark")==="dark";return{r:`
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center space-x-4">
                            <!--span id="${e.f.name("file-count")}">
                                ${(a.data.curr.data.files||[]).filter(i=>i.type==="file").length} files
                            </span>
                            <span id="${e.f.name("selected-file")}" class="opacity-70">
                                ${a.data.curr.data.activeFile?"Editing":"No file selected"}
                            </span-->
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <!--span class="flex items-center space-x-1">
                                <i class="fab fa-js-square text-yellow-500"></i>
                                <span>TypeScript</span>
                            </span>
                            <span id="${e.f.name("line-ending")}">LF</span>
                            <span id="${e.f.name("encoding")}">UTF-8</span-->
                            <span id="${e.f.name("theme-indicator")}">
                                ${s?"Dark":"Light"} Mode
                            </span>
                        </div>
                    </div>`,style:`
                    .${e.f.name("status-bar")} span {
                        font-family: 'Consolas', 'Monaco', monospace;
                    }`}}});exports.default=n;exports.index=n;exports.renderer=n;
