parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zv8z":[function(require,module,exports) {
exports.endianness=function(){return"LE"},exports.hostname=function(){return"undefined"!=typeof location?location.hostname:""},exports.loadavg=function(){return[]},exports.uptime=function(){return 0},exports.freemem=function(){return Number.MAX_VALUE},exports.totalmem=function(){return Number.MAX_VALUE},exports.cpus=function(){return[]},exports.type=function(){return"Browser"},exports.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},exports.networkInterfaces=exports.getNetworkInterfaces=function(){return{}},exports.arch=function(){return"javascript"},exports.platform=function(){return"browser"},exports.tmpdir=exports.tmpDir=function(){return"/tmp"},exports.EOL="\n",exports.homedir=function(){return"/"};
},{}],"lc8j":[function(require,module,exports) {
module.exports="/image.c65952e9.jpg";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function r(e,n){return'\n    <div class="row" style="'.concat(n,'">').concat(e,"</div>\n    ")}function o(e){return'\n    <div class="col-sm">'.concat(e,"</div>\n    ")}function c(e){return"string"==typeof e?e:Object.keys(e).map(function(n){return"".concat(n,": ").concat(e[n])}).join("; ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Row=r,exports.Col=o,exports.Style=c,exports.Site=void 0;var i=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.map(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=i;
},{}],"fQel":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColumnsBlock=exports.TextBlock=exports.ImageBlock=exports.TitleBlock=void 0;var t=require("./utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=c();return function(){var o,n=l(t);if(e){var r=l(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return i(this,o)}}function i(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?u(t):o}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,o){return e&&f(t.prototype,e),o&&f(t,o),t}var p=function(){function t(e,o,n){s(this,t),this.type=e,this.value=o,this.options=n}return a(t,[{key:"toHTML",value:function(){throw new Error("HTML must be realized")}}]),t}(),y=function(e){o(i,p);var n=r(i);function i(t,e,o){return s(this,i),n.call(this,t,e,o)}return a(i,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.style;return(0,t.Row)((0,t.Col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.Style)(r))}}]),i}();exports.TitleBlock=y;var h=function(e){o(i,p);var n=r(i);function i(t,e,o){return s(this,i),n.call(this,t,e,o)}return a(i,[{key:"toHTML",value:function(){return(0,t.Row)((0,t.Col)('<img src="'.concat(this.value,'" style="').concat((0,t.Style)(this.options.imgStyle),'">')),(0,t.Style)(this.options.style))}}]),i}();exports.ImageBlock=h;var v=function(e){o(i,p);var n=r(i);function i(t,e,o){return s(this,i),n.call(this,t,e,o)}return a(i,[{key:"toHTML",value:function(){return(0,t.Row)((0,t.Col)(this.value),(0,t.Style)(this.options.style))}}]),i}();exports.TextBlock=v;var b=function(e){o(i,p);var n=r(i);function i(t,e,o){return s(this,i),n.call(this,t,e,o)}return a(i,[{key:"toHTML",value:function(){return(0,t.Row)(this.value.map(t.Col).join(""),(0,t.Style)(this.options.style))}}]),i}();exports.ColumnsBlock=b;
},{"./utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Model=void 0;var e=n(require("./tools/image.jpg")),t=require("./classes");function n(e){return e&&e.__esModule?e:{default:e}}var a="JavaScript was initially created to “make web pages alive”. \nThe programs in this language are called scripts. They can be written right in a web\n page’s HTML and run automatically as the page loads. \nScripts are provided and executed as plain text. They don’t need special preparation \nor compilation to run.",i='<h4>Node.js</h4> As an asynchronous event-driven JavaScript runtime, Node.js is designed\n to build scalable network applications. In the following "hello world" example, many connections\n  can be handled concurrently. Upon each connection, the callback is fired, but if there is no work\n   to be done, Node.js will sleep.',o="<h4>Vue.js</h4> Vue (pronounced /vjuː/, like view) is a progressive framework for building\n user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally\n  adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other\n   libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated\n    Single-Page Applications when used in combination with modern tooling and supporting libraries.",r="<h4>React.js</h4> React makes it painless to create interactive UIs. Design simple views for\n each state in your application, and React will efficiently update and render just the right components when \n your data changes.",l=[new t.TitleBlock("title","JavaScript",{tag:"h1",style:{background:"linear-gradient(to right, #FBD601, #E9CA32)",color:"#3C3E57","text-align":"center"}}),new t.ImageBlock("image",e.default,{imgStyle:{display:"flex",margin:"auto"},style:{margin:"10px 0"}}),new t.TitleBlock("title","What's JavaScript?",{tag:"h3",style:{color:"#3C3E57"}}),new t.TextBlock("text",a,{style:{color:"#3C3E57","font-size":"24px","font-family":"cursiv"}}),new t.ColumnsBlock("columns",[i,o,r],{style:{color:"rgba(0, 0, 0, .5)","margin-top":"10px"}})];exports.Model=l;
},{"./tools/image.jpg":"lc8j","./classes":"fQel"}],"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=void 0;var e=require("./classes");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var a=function(){function n(e,r){t(this,n),this.$el=document.querySelector(e),this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this)),this.update=r}return r(n,[{key:"add",value:function(t){t.preventDefault();var n=t.target.name,r=t.target.value.value,a=t.target.styles.value,o=o="text"===n?new e.TextBlock(n,r,{style:a}):new e.TitleBlock(n,r,{style:a});this.update(o),t.target.value.value="",t.target.styles.value=""}},{key:"template",get:function(){return[o("Title"),o("Text")].join("")}}]),n}();function o(e){return'\n    <form name="'.concat(e,'">\n      <h5>').concat(e,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="btn btn-primary btn-sm">Add</button>\n    </form>\n    <hr />\n  ')}exports.app=a;
},{"./classes":"fQel"}],"Sr7R":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("os"),r=require("./model"),i=require("./utils"),u=require("./app");require("./main.css");var o=new i.Site("#root");o.render(r.Model),new u.app("#app",function(e){r.Model.push(e),o.render(r.Model)});
},{"os":"zv8z","./model":"JDu1","./utils":"FOZT","./app":"A2T1","./main.css":"Sr7R"}]},{},["Focm"], null)
//# sourceMappingURL=/src.e7c022ec.js.map