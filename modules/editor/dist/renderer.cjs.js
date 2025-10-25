"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=async o=>({set:async(n,a)=>(console.log(`--renderer [${n.data.curr.type}]`),{r:`
                <div class="${o.f.name("editor_root")}" id="${o.f.name("editor_root")}"  >


                     <div class="container">
        <div class="editor" id="editor">
            <div class="empty-state" id="emptyState">
                ✨ Type '/' for commands, click '+' to add blocks, or start writing...
            </div>
            <!-- Blocks will be added here dynamically -->
        </div>
    </div>

    <!-- Command Menu (for both slash and plus) -->
    <div class="command-menu" id="commandMenu">
        <div class="command-search">
            <input type="text" id="commandSearch" placeholder="Search blocks...">
        </div>
        <div class="command-options" id="commandOptions">


            <!--div class="command-option" data-type="text">
                <div class="command-icon">T</div>
                <div class="command-label">
                    <div>Text</div>
                    <div class="command-description">Just start writing with plain text</div>
                </div>
            </div-->


        </div>
    </div>

    <!-- Block Menu -->
    <div class="block-menu" id="blockMenu">
        <div class="block-menu-option" data-action="delete">
            <div class="block-menu-icon">🗑️</div>
            <div>Delete</div>
        </div>
        <div class="block-menu-option" data-action="duplicate">
            <div class="block-menu-icon">📋</div>
            <div>Duplicate</div>
        </div>
        <div class="block-menu-option" data-action="turn-into">
            <div class="block-menu-icon">↩️</div>
            <div>Turn into</div>
        </div>
    </div>
                  
                
                </div>
                
                `,style:(()=>{let e="";return e=`
                .${o.f.name("editor_root")} {
                   background: transparent;
                   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;  /* https://getcssscan.com/css-box-shadow-examples */
                   width: 100%;
                   height: 70vh;
                }

                /*--set--*/
                

        /* body {
            background-color: #fff;
            color: #37352f;
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
        } */

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 40px;
        }

        .editor {
            position: relative;
            min-height: 200px;
        }

        /* Block Styles */
        .block {
            position: relative;
            padding: 6px 2px;
            margin: 1px 0;
            border-radius: 3px;
            transition: all 0.15s ease;
        }

        .block:hover {
            background-color: rgba(55, 53, 47, 0.03);
        }

        .block.focused {
            background-color: rgba(55, 53, 47, 0.04);
        }

        .block.dragging {
            opacity: 0.6;
            transform: rotate(2deg);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .block.drag-over {
            border-top: 2px solid #4285f4;
            margin-top: 8px;
        }

        .block-content {
            min-height: 24px;
            padding: 1px 0;
            outline: none;
            position: relative;
            transition: all 0.1s ease;
        }

        .block-content[contenteditable="true"]:empty:before {
            content: attr(data-placeholder);
            color: rgba(55, 53, 47, 0.4);
            pointer-events: none;
        }

        .block-content[contenteditable="true"]:focus {
            background: transparent;
        }

        /* Block Controls Container */
        .block-controls {
            position: absolute;
            left: -48px;
            top: 4px;
            display: flex;
            gap: 4px;
            opacity: 0;
            transition: all 0.15s ease;
            transform: translateX(-4px);
        }

        .block:hover .block-controls,
        .block.focused .block-controls {
            opacity: 1;
            transform: translateX(0);
        }

        .block-control {
            width: 24px;
            height: 24px;
            border-radius: 3px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(55, 53, 47, 0.5);
            background: white;
            border: 1px solid rgba(55, 53, 47, 0.13);
            transition: all 0.15s ease;
            font-size: 14px;
            font-weight: 500;
            user-select: none;
        }

        .block-control:hover {
            background-color: white;
            color: rgba(55, 53, 47, 0.8);
            border-color: rgba(55, 53, 47, 0.3);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transform: scale(1.05);
        }

        .block-control:active {
            transform: scale(0.95);
        }

        .block-handle {
            cursor: grab;
        }

        .block-handle:active {
            cursor: grabbing;
        }

        .block-plus {
            font-size: 16px;
            font-weight: 300;
        }

        /* Block Types */
        .heading-1 {
            font-size: 30px;
            font-weight: 700;
            line-height: 1.2;
            padding: 6px 2px;
            letter-spacing: -0.01em;
        }

        .heading-2 {
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            padding: 5px 2px;
            letter-spacing: -0.01em;
        }

        .heading-3 {
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            padding: 4px 2px;
        }

        .paragraph {
            font-size: 16px;
            line-height: 1.6;
        }

        .bullet-list {
            padding-left: 26px;
            position: relative;
        }

        .bullet-list:before {
            content: "•";
            position: absolute;
            left: 4px;
            color: rgba(55, 53, 47, 0.4);
            font-size: 18px;
        }

        .numbered-list {
            padding-left: 26px;
            position: relative;
        }

        .numbered-list:before {
            content: counter(list-item) ".";
            position: absolute;
            left: 4px;
            color: rgba(55, 53, 47, 0.4);
            counter-increment: list-item;
            font-size: 14px;
            font-weight: 500;
        }

        .toggle-list {
            padding-left: 26px;
        }

        .toggle-summary {
            cursor: pointer;
            position: relative;
            user-select: none;
            transition: color 0.15s ease;
        }

        .toggle-summary:hover {
            color: rgba(55, 53, 47, 0.8);
        }

        .toggle-summary:before {
            content: "▸";
            position: absolute;
            left: -20px;
            transition: all 0.2s ease;
            color: rgba(55, 53, 47, 0.6);
        }

        .toggle-list.open .toggle-summary:before {
            transform: rotate(90deg);
            color: rgba(55, 53, 47, 0.8);
        }

        .toggle-content {
            margin-top: 8px;
            display: none;
            animation: fadeIn 0.2s ease;
        }

        .toggle-list.open .toggle-content {
            display: block;
        }

        .quote {
            border-left: 3px solid rgba(55, 53, 47, 0.16);
            padding-left: 18px;
            color: rgba(55, 53, 47, 0.7);
            font-style: italic;
            background: rgba(55, 53, 47, 0.02);
            margin: 4px 0;
            padding: 12px 18px;
            border-radius: 0 4px 4px 0;
        }

        .code {
            background: rgba(55, 53, 47, 0.05);
            font-family: 'SF Mono', Menlo, Monaco, 'Courier New', monospace;
            font-size: 14px;
            padding: 18px;
            border-radius: 4px;
            white-space: pre-wrap;
            line-height: 1.4;
            border: 1px solid rgba(55, 53, 47, 0.1);
        }

        .divider {
            padding: 16px 0;
            position: relative;
        }

        .divider:after {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background: rgba(55, 53, 47, 0.16);
            transition: background-color 0.15s ease;
        }

        .divider:hover:after {
            background: rgba(55, 53, 47, 0.3);
        }

        .image-block {
            margin: 12px 0;
            border-radius: 4px;
            overflow: hidden;
            transition: transform 0.15s ease;
        }

        .image-block:hover {
            transform: scale(1.005);
        }

        .image-block img {
            max-width: 100%;
            border-radius: 4px;
            display: block;
            transition: transform 0.3s ease;
        }

        .image-caption {
            font-size: 14px;
            color: rgba(55, 53, 47, 0.6);
            text-align: center;
            margin-top: 8px;
            padding: 8px 0;
            transition: color 0.15s ease;
        }

        .image-caption:hover {
            color: rgba(55, 53, 47, 0.8);
        }

        .image-caption[contenteditable="true"]:empty:before {
            content: "Add a caption...";
            color: rgba(55, 53, 47, 0.4);
        }

        /* Command Menu */
        .command-menu {
            position: fixed;
            background: white;
            border: 1px solid rgba(55, 53, 47, 0.16);
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            width: 300px;
            max-height: 360px;
            overflow: hidden;
            z-index: 1000;
            display: none;
            animation: slideUp 0.15s ease;
        }

        .command-menu.visible {
            display: block;
        }

        .command-search {
            padding: 12px;
            border-bottom: 1px solid rgba(55, 53, 47, 0.08);
            background: rgba(55, 53, 47, 0.02);
        }

        .command-search input {
            width: 100%;
            border: none;
            outline: none;
            font-size: 14px;
            padding: 8px 12px;
            background: white;
            border-radius: 4px;
            border: 1px solid rgba(55, 53, 47, 0.1);
            transition: all 0.15s ease;
        }

        .command-search input:focus {
            border-color: #4285f4;
            box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
        }

        .command-search input::placeholder {
            color: rgba(55, 53, 47, 0.4);
        }

        .command-options {
            max-height: 300px;
            overflow-y: auto;
            padding: 4px;
        }

        .command-option {
            padding: 10px 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 4px;
            margin: 2px 0;
            transition: all 0.1s ease;
        }

        .command-option:last-child {
            border-bottom: none;
        }

        .command-option:hover, .command-option.selected {
            background: rgba(55, 53, 47, 0.04);
            transform: translateX(2px);
        }

        .command-icon {
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(55, 53, 47, 0.6);
            font-size: 14px;
            font-weight: 500;
            background: rgba(55, 53, 47, 0.06);
            border-radius: 4px;
            transition: all 0.15s ease;
        }

        .command-option:hover .command-icon,
        .command-option.selected .command-icon {
            background: rgba(66, 133, 244, 0.1);
            color: #4285f4;
        }

        .command-label {
            flex: 1;
        }

        .command-description {
            font-size: 12px;
            color: rgba(55, 53, 47, 0.6);
            margin-top: 2px;
        }

        /* Block Menu */
        .block-menu {
            position: fixed;
            background: white;
            border: 1px solid rgba(55, 53, 47, 0.16);
            border-radius: 6px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            width: 180px;
            z-index: 1000;
            display: none;
            animation: slideUp 0.15s ease;
        }

        .block-menu.visible {
            display: block;
        }

        .block-menu-option {
            padding: 10px 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid rgba(55, 53, 47, 0.06);
            transition: all 0.1s ease;
        }

        .block-menu-option:last-child {
            border-bottom: none;
        }

        .block-menu-option:hover {
            background: rgba(55, 53, 47, 0.04);
        }

        .block-menu-icon {
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(55, 53, 47, 0.6);
        }

        /* Empty State */
        .empty-state {
            text-align: center;
            color: rgba(55, 53, 47, 0.4);
            padding: 60px 20px;
            font-size: 15px;
            transition: all 0.3s ease;
            display: none;
        }

        .empty-state.visible {
            display: block;
        }

        .empty-state:hover {
            color: rgba(55, 53, 47, 0.6);
            transform: translateY(-2px);
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Scrollbar Styling */
        .command-options::-webkit-scrollbar {
            width: 4px;
        }

        .command-options::-webkit-scrollbar-track {
            background: rgba(55, 53, 47, 0.04);
            border-radius: 2px;
        }

        .command-options::-webkit-scrollbar-thumb {
            background: rgba(55, 53, 47, 0.2);
            border-radius: 2px;
        }

        .command-options::-webkit-scrollbar-thumb:hover {
            background: rgba(55, 53, 47, 0.3);
        }

        /* Counter for numbered lists */
        .numbered-list-container {
            counter-reset: list-item;
        }

        /* Selection Styling */
        .block-content[contenteditable="true"]::selection {
            background: rgba(66, 133, 244, 0.2);
        }

        .block-content[contenteditable="true"]::-moz-selection {
            background: rgba(66, 133, 244, 0.2);
        }


                `,e})()})});exports.index=t;exports.renderer=t;
