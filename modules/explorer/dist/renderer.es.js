function n(o, e) {
  e === void 0 && (e = {});
  var a = e.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], t = document.createElement("style");
    t.type = "text/css", a === "top" && r.firstChild ? r.insertBefore(t, r.firstChild) : r.appendChild(t), t.styleSheet ? t.styleSheet.cssText = o : t.appendChild(document.createTextNode(o));
  }
}
const l = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-yellow-500:oklch(79.5% .184 86.047);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-6xl:3.75rem;--text-6xl--line-height:1;--font-weight-semibold:600;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.collapse{visibility:collapse}.visible{visibility:visible}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-16{margin-top:calc(var(--spacing)*16)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.hidden{display:none}.table{display:table}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-10{height:calc(var(--spacing)*10)}.h-\\[calc\\(100\\%-60px\\)\\]{height:calc(100% - 60px)}.h-full{height:100%}.h-screen{height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-64{width:calc(var(--spacing)*64)}.w-full{width:100%}.w-screen{width:100vw}.max-w-\\[150px\\]{max-width:150px}.max-w-md{max-width:var(--container-md)}.min-w-max{min-width:max-content}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-2{border-top-style:var(--tw-border-style);border-top-width:2px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.border-gray-700{border-color:var(--color-gray-700)}.border-t-blue-500{border-top-color:var(--color-blue-500)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-700{background-color:var(--color-blue-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-700{background-color:var(--color-green-700)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-gray-50{--tw-gradient-from:var(--color-gray-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-800{--tw-gradient-from:var(--color-gray-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-900{--tw-gradient-to:var(--color-gray-900);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-2{padding-top:calc(var(--spacing)*2)}.pr-1{padding-right:calc(var(--spacing)*1)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-100{color:var(--color-gray-100)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-900{color:var(--color-gray-900)}.text-green-500{color:var(--color-green-500)}.text-white{color:var(--color-white)}.text-yellow-500{color:var(--color-yellow-500)}.opacity-40{opacity:.4}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media(hover:hover){.hover\\:bg-blue-400:hover{background-color:var(--color-blue-400)}.hover\\:bg-blue-500:hover{background-color:var(--color-blue-500)}.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-green-400:hover{background-color:var(--color-green-400)}.hover\\:bg-green-600:hover{background-color:var(--color-green-600)}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-90:hover{opacity:.9}.hover\\:opacity-100:hover{opacity:1}}}:root{--primary-color:#3b82f6;--secondary-color:#8b5cf6;--accent-color:#10b981}.dark{--bg-primary:#111827;--bg-secondary:#1f2937;--text-primary:#f9fafb;--text-secondary:#d1d5db}.light{--bg-primary:#fff;--bg-secondary:#f3f4f6;--text-primary:#111827;--text-secondary:#6b7280}*{transition:background-color .2s,border-color .2s}:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px}::selection{background-color:#3b82f64d}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:#888;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#555}.glass-effect{-webkit-backdrop-filter:blur(8px)}.text-shadow{text-shadow:0 1px 2px #0000001a}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{opacity:0;transform:translate(-10px)}to{opacity:1;transform:translate(0)}}.animate-fadeIn{animation:.3s ease-in fadeIn}.animate-slideIn{animation:.3s ease-out slideIn}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}';
n(l);
const s = async (o) => ({
  set: async (e, a) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const t = await (await (await import("./layout-DXqFrrzP.js")).default(o)).set(e, a);
    return {
      r: `
                    <div id="${o.f.name("explorer-root")}">
                        ${t.r}
                    </div>`,
      head: `
                    <title>VS Code File Explorer</title>
                    <meta name="description" content="A VS Code like file explorer with rich features">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "File Explorer",
                        "description": "VS Code like file explorer with dark/light mode",
                        "applicationCategory": "DeveloperApplication"
                    }
                    <\/script>`,
      style: `

                    ${t.style}

                    /* Base styles */
                    body {
                        overflow: hidden;
                    }
                    
                    /* Smooth transitions */
                    .transition-all {
                        transition-property: all;
                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                        transition-duration: 150ms;
                    }
                    
                    /* Selection styles */
                    ::selection {
                        ${e.data.curr.data.theme === "dark" ? "background-color: rgba(59, 130, 246, 0.5);" : "background-color: rgba(59, 130, 246, 0.3);"}
                    }
                    
                    /* Focus styles */
                    :focus-visible {
                        outline: 2px solid ${e.data.curr.data.theme === "dark" ? "#3b82f6" : "#1d4ed8"};
                        outline-offset: 2px;
                    }
                    
                    /* Custom scrollbar */
                    .custom-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: ${e.data.curr.data.theme === "dark" ? "#4b5563 #1f2937" : "#d1d5db #f3f4f6"};
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: ${e.data.curr.data.theme === "dark" ? "#1f2937" : "#f3f4f6"};
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: ${e.data.curr.data.theme === "dark" ? "#4b5563" : "#d1d5db"};
                        border-radius: 4px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: ${e.data.curr.data.theme === "dark" ? "#6b7280" : "#9ca3af"};
                    }
                    
                    /* Responsive utilities */
                    @media (max-width: 640px) {
                        .mobile-hidden {
                            display: none;
                        }
                        
                        .mobile-full {
                            width: 100%;
                        }
                    }
                        
                    `
    };
  }
});
export {
  s as index,
  s as renderer
};
