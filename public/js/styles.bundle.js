!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(2)},2:function(e,t,n){n(23)},19:function(e,t,n){t=e.exports=n(20)(),t.push([e.id,"body,html{height:100%;margin:0;padding:0}html{background-color:#111b4b}body{background-color:#6d81c3;background:linear-gradient(#6d81c3,#111b4b);background-repeat:no-repeat;color:#fff;font-family:Muli;padding:.4em}img{max-width:100%}.button{display:inline-block;padding:.5em 1em;box-shadow:0 0 1px #fff;border-radius:.2em;cursor:pointer;text-transform:uppercase;color:#fff;text-decoration:none}.button:hover{background-color:hsla(0,0%,100%,.05)}.fileField{border:1px dashed hsla(0,0%,100%,.7);position:relative}.fileField input{padding:10% 50%;opacity:0;width:0;height:0}.fileField .button{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.siteHeader{padding:0 0 1em;max-width:40em;margin:0 auto}.cropContainer{max-width:300px;margin:0 auto}.preview{margin:1em auto}.cropArea,.preview{width:300px;height:300px}.cropArea{position:relative;background-color:#111}img-crop{width:100%;height:100%;display:block;position:relative;overflow:hidden}img-crop canvas{display:block;position:absolute;top:50%;left:50%;outline:none;-webkit-tap-highlight-color:rgba(255,255,255,0)}.container{max-width:40em;margin:0 auto}.logo{width:150px;height:150px;position:absolute;top:0;left:0}.logo img{width:100%;height:auto}.preview{position:relative}.preview>img{width:300px}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.loader{width:3em;height:3em;margin:0 auto;border-width:2px;border-color:hsla(0,0%,100%,.8) hsla(0,0%,100%,.8) hsla(0,0%,100%,.2);border-style:solid;border-radius:50%;animation-name:rotate;animation-duration:.6s;animation-iteration-count:infinite;animation-timing-function:linear}",""])},20:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},22:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(c(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(c(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],u=i[3],c={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=g(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,r,i;if(t.singleton){var o=m++;n=v||(v=s(t)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=h.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},$=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=$()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=p[s.id];u.refs--,o.push(u)}if(e){var c=i(e);r(c,t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete p[u.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},23:function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.id,r,""]]);n(22)(r,{});r.locals&&(e.exports=r.locals)}});