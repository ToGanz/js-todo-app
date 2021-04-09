(()=>{"use strict";var e={817:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".project-section ul{display:grid;grid-gap:10px;padding:0;list-style:none;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}.project-section li{display:block;text-decoration:none;padding:10px;text-align:center;color:#2d3748;text-transform:uppercase;font-size:20px}[aria-controls=mobile-menu]{display:none}@media(max-width: 1000px){[aria-controls=mobile-menu]{display:block;margin-bottom:10px}.project-section ul{max-height:0;overflow:hidden;transform:rotateX(90deg);transition:all .5s ease-out}[aria-expanded=true]~ul{display:grid;max-height:500px;transform:rotateX(0)}[aria-expanded=true]~ul~li~ul{display:grid;max-height:500px;transform:rotateX(0)}[aria-expanded=false] .close{display:none}[aria-expanded=true] .close{display:inline-block}[aria-expanded=true] .open{display:none}}html{box-sizing:border-box;font-family:Source Sans Pro,sans-serif;font-weight:600;font-size:10px;color:var(#2d3748);text-shadow:0 2px 0 rgba(0,0,0,.07)}html .btn{background-color:#fff;color:#2d3748;border:1px solid #edf2f7;border-radius:.25rem;display:inline-block;cursor:pointer;font-weight:bold;padding:6px 16px;margin-top:5px;text-decoration:none;height:30px}html .btn:hover{background-color:#c6f6d5}html .btn:active{position:relative;top:1px}*,*:before,*:after{box-sizing:inherit}#app{display:grid;grid-template-columns:1fr;justify-items:center}#tasks-section{width:100%}li{list-style:none;border:1px solid #edf2f7;border-radius:.25rem;padding:2.5rem;margin-bottom:3rem;transition:.15s}li:hover,button:hover{transform:scale(1.02);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}h1 span{border-bottom:4px solid #48bb78}li h1{border-bottom:4px solid #c6f6d5}",""]);const o=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],s=t.base?c[0]+t.base:c[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var p=i(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:l,updater:m(u,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function u(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,t){var n,r,a;if(t.singleton){var o=h++;n=f||(f=s(t)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=s(t),r=u.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var s=c(e,t),d=0;d<n.length;d++){var l=i(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=s}}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(817);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=function(e){var t=[];return{title:e,addTask:function(e){t.push(e)},deleteTask:function(e){t.indexOf(e)>=0&&t.splice(t.indexOf(e),1)},tasks:t}},o=function(e,t,n,r){var a=t,o=r;return{title:e,dueDate:n,completed:!1,getDescription:function(){return a},setDescription:function(e){a=String(e).slice(0,120)},getPriority:function(){return o},setPriority:function(e){o=e>=5?5:e<=1?1:e}}};var i;(i=document.querySelector("button[aria-expanded]")).addEventListener("click",(function(e){var t="true"===e.target.getAttribute("aria-expanded")||!1;i.setAttribute("aria-expanded",!t)}));var c,s,d=[],l=a("Test 1"),p=a("Test 2"),u=o("task1","what is this","21.01.2022",3),f=o("task2","what is this","21.01.2022",3);l.addTask(u),l.addTask(f),p.addTask(u),p.addTask(f),d.push(l),d.push(p),function(e){var t=document.querySelector("#projects-list");t.innerHTML="",e.forEach((function(e,n){var r=document.createElement("LI");r.classList.add("project"),r.id="project-".concat(n);var a=document.createElement("H1");a.classList.add("project-title"),a.innerHTML="".concat(e.title),r.appendChild(a),t.appendChild(r)}))}(d),c=l.tasks,(s=document.querySelector("#tasks-list")).innerHTML="",c.forEach((function(e,t){var n=document.createElement("LI");n.classList.add("task","task-".concat(t)),e.completed?n.classList.add("finished"):n.classList.add("unfinished");var r=document.createElement("DIV");r.classList.add("inner-task"),r.innerHTML="\n        <h1>".concat(e.title,"</h1>\n        <h3>Priority: ").concat(e.getPriority(),"</h3>\n        <h4>Due: ").concat(e.dueDate,"</h4>\n        <p>").concat(e.getDescription(),"</p>\n      "),n.appendChild(r);var a=document.createElement("BUTTON");a.classList.add("editTaskPopup","btn","icon"),a.innerHTML="Edit Task",n.appendChild(a);var o=document.createElement("DIV");o.classList.add("checks"),o.innerHTML='\n        <label class="checkbox-label" for="check">\n          '.concat(e.completed?"completed!":"completed?",'\n        </label>\n        <input \n          class="check" \n          name="chckbx" \n          type ="checkbox"').concat(e.completed?"checked":"","\n        />\n      "),n.appendChild(o),s.appendChild(n)}))})()})();