(()=>{"use strict";var e={817:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".project-section{width:100%}.project-section ul{display:grid;grid-gap:10px;padding:0;list-style:none;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr))}.project-section li{display:block;text-decoration:none;padding:10px;text-align:center;color:#2d3748;text-transform:uppercase;font-size:20px}[aria-controls=mobile-menu]{display:none}@media(max-width: 1000px){[aria-controls=mobile-menu]{display:block;margin-bottom:10px}.project-section ul{max-height:0;overflow:hidden;transform:rotateX(90deg);transition:all .5s ease-out}[aria-expanded=true]~ul{display:grid;max-height:500px;transform:rotateX(0)}[aria-expanded=false] .close{display:none}[aria-expanded=true] .close{display:inline-block}[aria-expanded=true] .open{display:none}}html{box-sizing:border-box;font-family:Source Sans Pro,sans-serif;font-weight:600;font-size:16px;color:var(#2d3748);text-shadow:0 2px 0 rgba(0,0,0,.07)}html .btn{background-color:#fff;color:#2d3748;border:1px solid #edf2f7;border-radius:.25rem;display:inline-block;cursor:pointer;font-weight:bold;padding:6px 16px;margin-top:5px;text-decoration:none;height:30px}html .btn:hover{background-color:#c6f6d5}html .btn:active{position:relative;top:1px}html .btn:focus{outline:1px auto #48bb78}*,*:before,*:after{box-sizing:inherit}body{padding:15px}#app{display:grid;grid-template-columns:1fr;justify-items:center}#tasks-section{width:100%}li{list-style:none;border:1px solid #edf2f7;border-radius:.25rem;padding:2.5rem;margin-bottom:3rem;transition:.15s}li:hover,button:hover{transform:scale(1.02);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}h1 span{border-bottom:4px solid #48bb78}li h1{border-bottom:4px solid #c6f6d5}",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:m(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,t){var n,r,i;if(t.singleton){var o=h++;n=f||(f=c(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(817);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.tasks=[]}var t,n;return t=e,(n=[{key:"addTask",value:function(e){this.tasks.push(e)}},{key:"deleteTask",value:function(e){this.tasks.indexOf(e)>=0&&this.tasks.splice(this.tasks.indexOf(e),1)}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const s=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.description=n,this.dueDate=r,this.priority=i}var t,n;return t=e,(n=[{key:"title",get:function(){return this._title},set:function(e){this._title=String(e).slice(0,50)}},{key:"description",get:function(){return this._description},set:function(e){this._description=String(e).slice(0,120)}},{key:"priority",get:function(){return this._priority},set:function(e){this._priority=e>=5?5:e<=1?1:e}}])&&a(t.prototype,n),e}();var c;(c=document.querySelector("button[aria-expanded]")).addEventListener("click",(function(e){var t="true"===e.target.getAttribute("aria-expanded")||!1;c.setAttribute("aria-expanded",!t)}));var d,l,u=[],p=new o("Test 1"),f=new o("Test 2"),h=new s("task1","what is this","21.01.2022",8),m=new s("task2","what is this","21.01.2022",0);p.addTask(h),p.addTask(m),f.addTask(h),f.addTask(m),u.push(p),u.push(f),function(e){var t=document.querySelector("#projects-list");t.innerHTML="",e.forEach((function(e,n){var r=document.createElement("LI");r.classList.add("project"),r.id="project-".concat(n);var i=document.createElement("H1");i.classList.add("project-title"),i.innerHTML="".concat(e.title),r.appendChild(i),t.appendChild(r)}))}(u),d=p.tasks,(l=document.querySelector("#tasks-list")).innerHTML="",d.forEach((function(e,t){var n=document.createElement("LI");n.classList.add("task","task-".concat(t)),e.completed?n.classList.add("finished"):n.classList.add("unfinished");var r=document.createElement("DIV");r.classList.add("inner-task"),r.innerHTML="\n        <h1>".concat(e.title,"</h1>\n        <h3>Priority: ").concat(e.priority,"</h3>\n        <h4>Due: ").concat(e.dueDate,"</h4>\n        <p>").concat(e.description,"</p>\n      "),n.appendChild(r);var i=document.createElement("BUTTON");i.classList.add("editTaskPopup","btn","icon"),i.innerHTML="Edit Task",n.appendChild(i);var o=document.createElement("DIV");o.classList.add("checks"),o.innerHTML='\n        <label class="checkbox-label" for="check">\n          '.concat(e.completed?"completed!":"completed?",'\n        </label>\n        <input \n          class="check" \n          name="chckbx" \n          type ="checkbox"').concat(e.completed?"checked":"","\n        />\n      "),n.appendChild(o),l.appendChild(n)}))})()})();