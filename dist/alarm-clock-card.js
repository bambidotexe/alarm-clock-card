/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,i){var s,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${s}`);class r{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],r=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=r.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[h],n=d.exec(e)[2],i=n.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const r=s.split(o);this.parts.push({type:"attribute",index:u,name:n,strings:r}),h+=r.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(o),r=s.length-1;for(let e=0;e<r;e++){let n,o=s[e];if(""===o)n=c();else{const t=d.exec(o);null!==t&&a(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(o)}i.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===s[r]?(i.insertBefore(c(),t),n.push(t)):t.data=s[r],h+=r}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else r.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:n},parts:i}=t,s=document.createTreeWalker(n,133,null,!1);let o=p(i),r=i[o],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,o=p(i,o),r=i[o]}c.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,c=s.nextNode();for(;r<i.length;)if(o=i[r],l(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(n.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=n.pop(),c=s.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),_=` ${i} `;class w{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=d.exec(t);e+=null===a?t+(n?_:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new A(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let i="";for(let s=0;s<e;s++){i+=t[s];const e=n[s];if(void 0!==e){const t=e.value;if(x(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||x(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class ${constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const n=new b(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new $(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class H{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class M extends k{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends A{}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function U(t){let e=z.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},z.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(i);return n=e.keyString.get(s),void 0===n&&(n=new r(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const z=new Map,E=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new M(t,e.slice(1),n).parts}if("@"===s)return[new P(t,e.slice(1),i.eventContext)];if("?"===s)return[new H(t,e.slice(1),n)];return new k(t,e,n).parts}handleTextExpression(t){return new $(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const D=(t,...e)=>new w(t,e,"html",V)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,O=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const R=t=>e=>{const n=O(e.type,t);let s=z.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},z.set(n,s));let o=s.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(i);if(o=s.keyString.get(a),void 0===o){const n=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(n,t),o=new r(e,n),s.keyString.set(a,o)}return s.stringsArray.set(e.strings,o),o},Y=["html","svg"],j=new Set,L=(t,e,n)=>{j.add(t);const i=n?n.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=s[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{Y.forEach(e=>{const n=z.get(O(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),u(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:s}=t;if(null==n)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=p(s),a=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===n&&(a=h(e),n.parentNode.insertBefore(e,n));-1!==r&&s[r].index===l;){if(a>0){for(;-1!==r;)s[r].index+=a,r=p(s,r);return}r=p(s,r)}}}(n,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),u(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:F};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdateInternal(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=F){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||q,s="function"==typeof i?i:i.fromAttribute;return s?s(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||q.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=J){const i=this.constructor,s=i._attributeNameForProperty(t,n);if(void 0!==s){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let i=!0;if(void 0!==t){const s=this.constructor;n=n||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function K(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Z(t,e)}function G(t){return K({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class tt{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new tt(n,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const nt={};class it extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),i=[];n.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return nt}}it.finalized=!0,it.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,o=E.has(e),r=I&&11===e.nodeType&&!!e.host,a=r&&!j.has(s),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=E.get(e);void 0===s&&(n(e,e.firstChild),E.set(e,s=new $(Object.assign({templateFactory:U},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:R(s)},i)),a){const t=E.get(l);E.delete(l);const i=t.value instanceof b?t.value.template:void 0;L(s,l,i),n(e,e.firstChild),e.appendChild(l),E.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};var st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ot="[^\\s]+",rt=/\[([^]*?)\]/gm;function at(t,e){for(var n=[],i=0,s=t.length;i<s;i++)n.push(t[i].substr(0,e));return n}var lt=function(t){return function(e,n){var i=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return i>-1?i:null}};function ct(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var i=0,s=e;i<s.length;i++){var o=s[i];for(var r in o)t[r]=o[r]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=at(ut,3),pt={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=ct({},pt),gt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return gt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return gt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return gt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return gt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return gt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return gt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return gt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return gt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return gt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return gt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return gt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(Math.floor(Math.abs(e)/60),2)+":"+gt(Math.abs(e)%60,2)}},yt=function(t){return+t-1},bt=[null,"[1-9]\\d?"],vt=[null,ot],_t=["isPm",ot,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],xt=(lt("monthNamesShort"),lt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var St=function(t,e,n){if(void 0===e&&(e=xt.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var i=[];e=(e=xt[e]||e).replace(rt,(function(t,e){return i.push(e),"@@@"}));var s=ct(ct({},mt),n);return(e=e.replace(st,(function(e){return ft[e](t,s)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();let kt=class extends it{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _alarm_clock_id(){var t;return(null===(t=this._config)||void 0===t?void 0:t.alarm_clock_id)||"alarm_clock"}render(){if(!this.hass||!this._helpers)return D``;const t=Object.keys(this.hass.states).filter(t=>"input_text"===t.substr(0,t.indexOf(".")));return D`
      <div class="card-config">
        <div class="values">
          <paper-dropdown-menu
            label="Entity (Required)"
            @value-changed=${this._valueChanged}
            .configValue=${"entity"}
          >
            <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
              ${t.map(t=>D`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),function(t,e,n,i){i=i||{},n=null==n?{}:n;var s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=n,t.dispatchEvent(s)}(this,"config-changed",{config:this._config}))}static get styles(){return et`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};t([K({attribute:!1})],kt.prototype,"hass",void 0),t([G()],kt.prototype,"_config",void 0),t([G()],kt.prototype,"_toggle",void 0),t([G()],kt.prototype,"_helpers",void 0),kt=t([W("alarm-clock-card-editor")],kt);var At={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},$t={common:At},Ht={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Mt={common:Ht};const Ct={en:Object.freeze({__proto__:null,common:At,default:$t}),nb:Object.freeze({__proto__:null,common:Ht,default:Mt})};function Nt(t,e="",n=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce((t,e)=>t[e],Ct[i])}catch(e){s=t.split(".").reduce((t,e)=>t[e],Ct.en)}return void 0===s&&(s=t.split(".").reduce((t,e)=>t[e],Ct.en)),""!==e&&""!==n&&(s=s.replace(e,n)),s}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Pt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const Tt=new WeakMap,Ut=(zt=t=>e=>{if(!(e instanceof A)||e instanceof C||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=e,{element:i}=n;let s=Tt.get(e);void 0===s&&(i.setAttribute("class",n.strings.join(" ")),Tt.set(e,s=new Set));const o=i.classList||new Pt(i);s.forEach(e=>{e in t||(o.remove(e),s.delete(e))});for(const e in t){const n=t[e];n!=s.has(e)&&(n?(o.add(e),s.add(e)):(o.remove(e),s.delete(e)))}"function"==typeof o.commit&&o.commit()},(...t)=>{const e=zt(...t);return m.set(e,!0),e});var zt;console.info(`%c  ALARM-CLOCK-CARD \n%c  ${Nt("common.version")} 0.0.1    `,"color: white; font-weight: bold; background: #00EC76","color: #00EC76; font-weight: bold; background: transparent"),window.customCards=window.customCards||[],window.customCards.push({type:"alarm-clock-card",name:"Alarm clock Card",description:"A template custom card for you to create alarm clock"});let Et=class extends it{constructor(){super(...arguments),this.edit=!1,this.editHour=!0,this.touchIndex=null,this.touchTimeoutId=null,this.currentAlarmIndex=null,this.currentAlarm=null,this.selectedAlarmIndex=[]}static async getConfigElement(){return document.createElement("alarm-clock-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Nt("common.invalid_configuration"));const e=t.entity;if(!e||"input_text"!==e.substr(0,e.indexOf(".")))throw new Error(Nt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:"Alarmes"},t)}shouldUpdate(t){return!!this.config&&function(t,e,n){if(e.has("config")||n)return!0;if(t.config.entity){var i=e.get("hass");return!i||i.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){var t,e,n,i,s,o,r,a,l,c,d,u,h,p,m,g,f,y,b,v,_,w,x,S,k,A,$,H,M,C,N,P,T,U,z,E,V,O,I,R,Y,j,L;if(!this.config.entity)return;const q=this._getAlarms(),F=D`
      <mwc-icon-button class="alarm-add alarm-delete" @click=${()=>{this.selectedAlarmIndex.length>0?this._handleDelete():this._handleAdd()}}>
        <ha-svg-icon .path=${this.selectedAlarmIndex.length>0?"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z":"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
      </mwc-icon-button>
      <div class="alarm-clock">
        ${q.map((t,e)=>D`
        <div class="alarm">
          <div class="alarm-datetime" @mousedown=${()=>{this._handleTouch(e)}} @click=${()=>{this._handleClick(e)}}>
            <div class="alarm-time">
              ${(t.hour<10?"0":"")+t.hour}:${(t.minute<10?"0":"")+t.minute} </div> <div
                class="alarm-days">
                ${this._parseDays(t)}
            </div>
          </div>
          <div class="alarm-actions">
            ${this.selectedAlarmIndex.length>0?D`
                <input type="checkbox" .checked=${-1!==this.selectedAlarmIndex.indexOf(e)} @click=${()=>{this._toggleSelectedIndex(e)}}>
              `:D`
                <ha-switch .checked=${t.enabled} @click=${()=>{this._handleToggleAlarm(e)}}>
                </ha-switch>
              `}
          </div>
          <mwc-ripple></mwc-ripple>
        </div>
        `)}
      </div>
      ${this.edit?D`
          <div class="alarm-detail">
            <div class="alarm-detail-actions">
              <mwc-icon-button class="alarm-detail-delete"
                @click=${this._handleBack}>
                <ha-svg-icon .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}></ha-svg-icon>
              </mwc-icon-button>
              <mwc-icon-button class="alarm-detail-save"
                @click=${this._handleSave}>
                <ha-svg-icon .path=${"M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            <div class="alarm-detail-timepicker">
              <div class="alarm-detail-timepicker-time">
                <input type="text" maxlength="2" pattern="[0-9]" .value=${(this.currentAlarm.hour<10?"0":"")+this.currentAlarm.hour} @change=${this._handleCheckUpdateHour} @click=${()=>{this.editHour=!0}}>
                <span>:</span>
                <input type="text" maxlength="2" pattern="[0-9]" .value=${(this.currentAlarm.minute<10?"0":"")+this.currentAlarm.minute} @change=${this._handleCheckUpdateMinute} @click=${()=>{this.editHour=!1}}>
              </div>
              <div class="clock">
                ${this.editHour?D`
                      <div class="clock-hour">
                        <mwc-icon-button hour="12" @click=${()=>{this._handleUpdateHour(12),this.editHour=!1}} class=${Ut({enabled:12==(null===(t=this.currentAlarm)||void 0===t?void 0:t.hour),deg270:!0})}><span style="font-size: 16px; line-height: 26px; ">12</span></mwc-icon-button>
                        <mwc-icon-button hour="1" @click=${()=>{this._handleUpdateHour(1),this.editHour=!1}} class=${Ut({enabled:1==(null===(e=this.currentAlarm)||void 0===e?void 0:e.hour),deg300:!0})}><span style="font-size: 16px; line-height: 26px; ">1</span></mwc-icon-button>
                        <mwc-icon-button hour="2" @click=${()=>{this._handleUpdateHour(2),this.editHour=!1}} class=${Ut({enabled:2==(null===(n=this.currentAlarm)||void 0===n?void 0:n.hour),deg330:!0})}><span style="font-size: 16px; line-height: 26px; ">2</span></mwc-icon-button>
                        <mwc-icon-button hour="3" @click=${()=>{this._handleUpdateHour(3),this.editHour=!1}} class=${Ut({enabled:3==(null===(i=this.currentAlarm)||void 0===i?void 0:i.hour),deg0:!0})}><span style="font-size: 16px; line-height: 26px; ">3</span></mwc-icon-button>
                        <mwc-icon-button hour="4" @click=${()=>{this._handleUpdateHour(4),this.editHour=!1}} class=${Ut({enabled:4==(null===(s=this.currentAlarm)||void 0===s?void 0:s.hour),deg30:!0})}><span style="font-size: 16px; line-height: 26px; ">4</span></mwc-icon-button>
                        <mwc-icon-button hour="5" @click=${()=>{this._handleUpdateHour(5),this.editHour=!1}} class=${Ut({enabled:5==(null===(o=this.currentAlarm)||void 0===o?void 0:o.hour),deg60:!0})}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button hour="6" @click=${()=>{this._handleUpdateHour(6),this.editHour=!1}} class=${Ut({enabled:6==(null===(r=this.currentAlarm)||void 0===r?void 0:r.hour),deg90:!0})}><span style="font-size: 16px; line-height: 26px; ">6</span></mwc-icon-button>
                        <mwc-icon-button hour="7" @click=${()=>{this._handleUpdateHour(7),this.editHour=!1}} class=${Ut({enabled:7==(null===(a=this.currentAlarm)||void 0===a?void 0:a.hour),deg120:!0})}><span style="font-size: 16px; line-height: 26px; ">7</span></mwc-icon-button>
                        <mwc-icon-button hour="8" @click=${()=>{this._handleUpdateHour(8),this.editHour=!1}} class=${Ut({enabled:8==(null===(l=this.currentAlarm)||void 0===l?void 0:l.hour),deg150:!0})}><span style="font-size: 16px; line-height: 26px; ">8</span></mwc-icon-button>
                        <mwc-icon-button hour="9" @click=${()=>{this._handleUpdateHour(9),this.editHour=!1}} class=${Ut({enabled:9==(null===(c=this.currentAlarm)||void 0===c?void 0:c.hour),deg180:!0})}><span style="font-size: 16px; line-height: 26px; ">9</span></mwc-icon-button>
                        <mwc-icon-button hour="10" @click=${()=>{this._handleUpdateHour(10),this.editHour=!1}} class=${Ut({enabled:10==(null===(d=this.currentAlarm)||void 0===d?void 0:d.hour),deg210:!0})}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button hour="11" @click=${()=>{this._handleUpdateHour(11),this.editHour=!1}} class=${Ut({enabled:11==(null===(u=this.currentAlarm)||void 0===u?void 0:u.hour),deg240:!0})}><span style="font-size: 16px; line-height: 26px; ">11</span></mwc-icon-button>

                        <mwc-icon-button hour="0" @click=${()=>{this._handleUpdateHour(0),this.editHour=!1}} class=${Ut({enabled:0==(null===(h=this.currentAlarm)||void 0===h?void 0:h.hour),deg2702:!0})}><span style="font-size: 14px; line-height: 24px; ">0</span></mwc-icon-button>
                        <mwc-icon-button hour="13" @click=${()=>{this._handleUpdateHour(13),this.editHour=!1}} class=${Ut({enabled:13==(null===(p=this.currentAlarm)||void 0===p?void 0:p.hour),deg3002:!0})}><span style="font-size: 14px; line-height: 24px; ">13</span></mwc-icon-button>
                        <mwc-icon-button hour="14" @click=${()=>{this._handleUpdateHour(14),this.editHour=!1}} class=${Ut({enabled:14==(null===(m=this.currentAlarm)||void 0===m?void 0:m.hour),deg3302:!0})}><span style="font-size: 14px; line-height: 24px; ">14</span></mwc-icon-button>
                        <mwc-icon-button hour="15" @click=${()=>{this._handleUpdateHour(15),this.editHour=!1}} class=${Ut({enabled:15==(null===(g=this.currentAlarm)||void 0===g?void 0:g.hour),deg02:!0})}><span style="font-size: 14px; line-height: 24px; ">15</span></mwc-icon-button>
                        <mwc-icon-button hour="16" @click=${()=>{this._handleUpdateHour(16),this.editHour=!1}} class=${Ut({enabled:16==(null===(f=this.currentAlarm)||void 0===f?void 0:f.hour),deg302:!0})}><span style="font-size: 14px; line-height: 24px; ">16</span></mwc-icon-button>
                        <mwc-icon-button hour="17" @click=${()=>{this._handleUpdateHour(17),this.editHour=!1}} class=${Ut({enabled:17==(null===(y=this.currentAlarm)||void 0===y?void 0:y.hour),deg602:!0})}><span style="font-size: 14px; line-height: 24px; ">17</span></mwc-icon-button>
                        <mwc-icon-button hour="18" @click=${()=>{this._handleUpdateHour(18),this.editHour=!1}} class=${Ut({enabled:18==(null===(b=this.currentAlarm)||void 0===b?void 0:b.hour),deg902:!0})}><span style="font-size: 14px; line-height: 24px; ">18</span></mwc-icon-button>
                        <mwc-icon-button hour="19" @click=${()=>{this._handleUpdateHour(19),this.editHour=!1}} class=${Ut({enabled:19==(null===(v=this.currentAlarm)||void 0===v?void 0:v.hour),deg1202:!0})}><span style="font-size: 14px; line-height: 24px; ">19</span></mwc-icon-button>
                        <mwc-icon-button hour="20" @click=${()=>{this._handleUpdateHour(20),this.editHour=!1}} class=${Ut({enabled:20==(null===(_=this.currentAlarm)||void 0===_?void 0:_.hour),deg1502:!0})}><span style="font-size: 14px; line-height: 24px; ">20</span></mwc-icon-button>
                        <mwc-icon-button hour="21" @click=${()=>{this._handleUpdateHour(21),this.editHour=!1}} class=${Ut({enabled:21==(null===(w=this.currentAlarm)||void 0===w?void 0:w.hour),deg1802:!0})}><span style="font-size: 14px; line-height: 24px; ">21</span></mwc-icon-button>
                        <mwc-icon-button hour="22" @click=${()=>{this._handleUpdateHour(22),this.editHour=!1}} class=${Ut({enabled:22==(null===(x=this.currentAlarm)||void 0===x?void 0:x.hour),deg2102:!0})}><span style="font-size: 14px; line-height: 24px; ">22</span></mwc-icon-button>
                        <mwc-icon-button hour="23" @click=${()=>{this._handleUpdateHour(23),this.editHour=!1}} class=${Ut({enabled:23==(null===(S=this.currentAlarm)||void 0===S?void 0:S.hour),deg2402:!0})}><span style="font-size: 14px; line-height: 24px; ">23</span></mwc-icon-button>
                      </div>
                    `:D`
                      <div class="clock-minute">
                        <mwc-icon-button minute="0" @click=${()=>{this._handleUpdateMinute(0)}} class=${Ut({enabled:0==(null===(k=this.currentAlarm)||void 0===k?void 0:k.minute),deg270:!0})}><span style="font-size: 16px; line-height: 26px; ">0</span></mwc-icon-button>
                        <mwc-icon-button minute="5" @click=${()=>{this._handleUpdateMinute(5)}} class=${Ut({enabled:5==(null===(A=this.currentAlarm)||void 0===A?void 0:A.minute),deg300:!0})}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button minute="10" @click=${()=>{this._handleUpdateMinute(10)}} class=${Ut({enabled:10==(null===($=this.currentAlarm)||void 0===$?void 0:$.minute),deg330:!0})}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button minute="15" @click=${()=>{this._handleUpdateMinute(15)}} class=${Ut({enabled:15==(null===(H=this.currentAlarm)||void 0===H?void 0:H.minute),deg0:!0})}><span style="font-size: 16px; line-height: 26px; ">15</span></mwc-icon-button>
                        <mwc-icon-button minute="20" @click=${()=>{this._handleUpdateMinute(20)}} class=${Ut({enabled:20==(null===(M=this.currentAlarm)||void 0===M?void 0:M.minute),deg30:!0})}><span style="font-size: 16px; line-height: 26px; ">20</span></mwc-icon-button>
                        <mwc-icon-button minute="25" @click=${()=>{this._handleUpdateMinute(25)}} class=${Ut({enabled:25==(null===(C=this.currentAlarm)||void 0===C?void 0:C.minute),deg60:!0})}><span style="font-size: 16px; line-height: 26px; ">25</span></mwc-icon-button>
                        <mwc-icon-button minute="30" @click=${()=>{this._handleUpdateMinute(30)}} class=${Ut({enabled:30==(null===(N=this.currentAlarm)||void 0===N?void 0:N.minute),deg90:!0})}><span style="font-size: 16px; line-height: 26px; ">30</span></mwc-icon-button>
                        <mwc-icon-button minute="35" @click=${()=>{this._handleUpdateMinute(35)}} class=${Ut({enabled:35==(null===(P=this.currentAlarm)||void 0===P?void 0:P.minute),deg120:!0})}><span style="font-size: 16px; line-height: 26px; ">35</span></mwc-icon-button>
                        <mwc-icon-button minute="40" @click=${()=>{this._handleUpdateMinute(40)}} class=${Ut({enabled:40==(null===(T=this.currentAlarm)||void 0===T?void 0:T.minute),deg150:!0})}><span style="font-size: 16px; line-height: 26px; ">40</span></mwc-icon-button>
                        <mwc-icon-button minute="45" @click=${()=>{this._handleUpdateMinute(45)}} class=${Ut({enabled:45==(null===(U=this.currentAlarm)||void 0===U?void 0:U.minute),deg180:!0})}><span style="font-size: 16px; line-height: 26px; ">45</span></mwc-icon-button>
                        <mwc-icon-button minute="50" @click=${()=>{this._handleUpdateMinute(50)}} class=${Ut({enabled:50==(null===(z=this.currentAlarm)||void 0===z?void 0:z.minute),deg210:!0})}><span style="font-size: 16px; line-height: 26px; ">50</span></mwc-icon-button>
                        <mwc-icon-button minute="55" @click=${()=>{this._handleUpdateMinute(55)}} class=${Ut({enabled:55==(null===(E=this.currentAlarm)||void 0===E?void 0:E.minute),deg240:!0})}><span style="font-size: 16px; line-height: 26px; ">55</span></mwc-icon-button>
                      </div>
                    `}
              </div>
            </div>
            <p>Répeter</p>
            <div class="alarm-detail-repeat">
              <mwc-icon-button @click=${()=>{this._handleToggleDay(0)}} class=${Ut({enabled:!!(null===(V=this.currentAlarm)||void 0===V?void 0:V.monday)})}>
                <span style="font-size: 16px; line-height: 26px; ">L</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._handleToggleDay(1)}} class=${Ut({enabled:!!(null===(O=this.currentAlarm)||void 0===O?void 0:O.tuesday)})}>
                <span style="font-size: 16px; line-height: 26px;">M</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._handleToggleDay(2)}} class=${Ut({enabled:!!(null===(I=this.currentAlarm)||void 0===I?void 0:I.wednesday)})}>
                <span style="font-size: 16px; line-height: 26px;">M</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._handleToggleDay(3)}} class=${Ut({enabled:!!(null===(R=this.currentAlarm)||void 0===R?void 0:R.thursday)})}>
                <span style="font-size: 16px; line-height: 26px;">J</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._handleToggleDay(4)}} class=${Ut({enabled:!!(null===(Y=this.currentAlarm)||void 0===Y?void 0:Y.friday)})}>
                <span style="font-size: 16px; line-height: 26px;">V</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._handleToggleDay(5)}} class=${Ut({enabled:!!(null===(j=this.currentAlarm)||void 0===j?void 0:j.saturday)})}>
                <span style="font-size: 16px; line-height: 26px;">S</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._handleToggleDay(6)}} class=${Ut({enabled:!!(null===(L=this.currentAlarm)||void 0===L?void 0:L.sunday)})}>
                <span style="font-size: 16px; line-height: 26px;">D</span>
              </mwc-icon-button>
            </div>
          </div>
        `:D``}
    `;return D`
      <ha-card .header=${this.config.name} .label=${"Alarm clock: "+(this.config.entity||"No Entity Defined")}>
        ${F}
      </ha-card>
    `}_decodeRaw(t){return{hour:+t.slice(0,2),minute:+t.slice(2,4),enabled:!!+t.slice(4,5),monday:!!+t.slice(5,6),tuesday:!!+t.slice(6,7),wednesday:!!+t.slice(7,8),thursday:!!+t.slice(8,9),friday:!!+t.slice(9,10),saturday:!!+t.slice(10,11),sunday:!!+t.slice(11,12)}}_encodeRaw(t){let e="";return e+=(t.hour<10?"0":"")+t.hour,e+=(t.minute<10?"0":"")+t.minute,e+=t.enabled?"1":"0",e+=t.monday?"1":"0",e+=t.tuesday?"1":"0",e+=t.wednesday?"1":"0",e+=t.thursday?"1":"0",e+=t.friday?"1":"0",e+=t.saturday?"1":"0",e+=t.sunday?"1":"0",e}_getAlarms(){const t=this.config.entity;return t?this.hass.states[t].state.split(",").filter(t=>12==t.length).map(this._decodeRaw):[]}_setAlarms(t){const e=this.config.entity;e&&this.hass.callService("input_text","set_value",{entity_id:e,value:t.map(this._encodeRaw).join(",")})}_handleToggleAlarm(t){const e=this._getAlarms().slice(0);e[t].enabled=!e[t].enabled,this._setAlarms(e)}_handleAdd(){const t=this._getAlarms().slice(0);t.push({hour:8,minute:0,enabled:!0,monday:!1,tuesday:!1,wednesday:!1,thursday:!1,friday:!1,saturday:!1,sunday:!1}),this._setAlarms(t)}_handleTouch(t){this.touchIndex=t,this.touchTimeoutId=setTimeout(()=>{this._toggleSelectedIndex(t),this.touchTimeoutId=null,this.touchIndex=null},1e3)}_handleClick(t){this.touchTimeoutId&&(clearTimeout(this.touchTimeoutId),this.touchTimeoutId=null,this.touchIndex=null,this._handleToggleSelectAlarm(t))}_handleToggleSelectAlarm(t){this.selectedAlarmIndex.length>0?this._toggleSelectedIndex(t):(this.currentAlarmIndex=t,this.currentAlarm=this._getAlarms()[t],this.editHour=!0,this.edit=!0)}_toggleSelectedIndex(t){const e=this.selectedAlarmIndex.slice(0);-1===e.indexOf(t)?e.push(t):e.splice(e.indexOf(t),1),this.selectedAlarmIndex=e}_handleCheckUpdateHour(t){let e=+t.target.value;e>23&&(e=23),e<0&&(e=0),this._handleUpdateHour(e)}_handleCheckUpdateMinute(t){let e=+t.target.value;e>59&&(e=59),e<0&&(e=0),this._handleUpdateMinute(e)}_handleUpdateHour(t){const e=JSON.parse(JSON.stringify(this.currentAlarm));e.hour=t,this.currentAlarm=e}_handleUpdateMinute(t){const e=JSON.parse(JSON.stringify(this.currentAlarm));e.minute=t,this.currentAlarm=e}_handleToggleDay(t){let e;switch(t){case 0:e="monday";break;case 1:e="tuesday";break;case 2:e="wednesday";break;case 3:e="thursday";break;case 4:e="friday";break;case 5:e="saturday";break;case 6:default:e="sunday"}const n=JSON.parse(JSON.stringify(this.currentAlarm));n[e]=!n[e],this.currentAlarm=n}_handleBack(){this.currentAlarm=null,this.currentAlarmIndex=null,this.edit=!1}_handleDelete(){const t=this._getAlarms().slice(),e=this.selectedAlarmIndex.sort().reverse();for(let n=0;n<e.length;n++){const i=e[n];t.splice(i,1)}this.selectedAlarmIndex=[],this._setAlarms(t)}_handleSave(){const t=this.currentAlarm,e=this._getAlarms().slice();t&&(e[this.currentAlarmIndex]=t),this._setAlarms(e),this.currentAlarm=null,this.currentAlarmIndex=null,this.edit=!1}_parseDays(t){const e=[t.monday,t.tuesday,t.wednesday,t.thursday,t.friday,t.saturday,t.sunday];return e.every(t=>!t)?"Demain":e.every(t=>!!t)?"Tout les jours":e.map((t,e)=>{if(t)switch(e){case 0:return"Lun";case 1:return"Mar";case 2:return"Mer";case 3:return"Jeu";case 4:return"Ven";case 5:return"Sam";case 6:return"Dim"}return null}).filter(t=>null!==t).join(", ")}static get styles(){return et`
      ha-card {
        position: relative;
        overflow: hidden;
        min-height: 470px;
      }

      .alarm-add, .alarm-delete {
        position: absolute;
        top: 16px;
        right: 16px;
      }

      .alarm-clock {
        display: flex;
        flex-direction: column;
        padding: 0px 0px 16px 0px;
      }

      .alarm {
        display: flex;
        flex-direction: row;
        margin-top: 16px;
        padding: 0px 16px;
        position: relative;
      }

      .alarm:nth-child(1) {
        margin-top: 0;
      }

      .alarm-datetime {
        display: flex;
        flex-direction: column;
        flex: 1;
        cursor: pointer;
      }

      .alarm-time {
        line-height: 32px;
        font-size: 32px;
        font-weight: bold;
      }

      .alarm-days {
        font-size: 11px;
        opacity: 0.5;
      }

      .alarm-actions {
        flex: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .alarm-detail {
        color: white;
        display: flex;
        flex-direction: column;
        padding: 16px 16px 16px 16px;
        background-color: var(--primary-color);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .alarm-detail-timepicker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .alarm-detail-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .alarm-detail-repeat {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }

      .alarm-detail-repeat mwc-icon-button {
        --mdc-icon-button-size: 30px;
      }

      .clock-hour, .clock-minute {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .clock mwc-icon-button.enabled,
      .alarm-detail-repeat mwc-icon-button.enabled {
        background-color: white;
        border-radius: 50%;
        color: var(--primary-color);
      }

      .clock mwc-icon-button[hour="0"],
      .clock mwc-icon-button[hour="13"],
      .clock mwc-icon-button[hour="14"],
      .clock mwc-icon-button[hour="15"],
      .clock mwc-icon-button[hour="16"],
      .clock mwc-icon-button[hour="17"],
      .clock mwc-icon-button[hour="18"],
      .clock mwc-icon-button[hour="19"],
      .clock mwc-icon-button[hour="20"],
      .clock mwc-icon-button[hour="21"],
      .clock mwc-icon-button[hour="22"],
      .clock mwc-icon-button[hour="23"],
      .clock mwc-icon-button[minute="0"],
      .clock mwc-icon-button[minute="5"],
      .clock mwc-icon-button[minute="10"],
      .clock mwc-icon-button[minute="15"],
      .clock mwc-icon-button[minute="20"],
      .clock mwc-icon-button[minute="25"],
      .clock mwc-icon-button[minute="30"],
      .clock mwc-icon-button[minute="35"],
      .clock mwc-icon-button[minute="40"],
      .clock mwc-icon-button[minute="45"],
      .clock mwc-icon-button[minute="50"],
      .clock mwc-icon-button[minute="55"] {
        --mdc-icon-button-size: 30px;
        position: absolute;
        top: 110px;
        left: 110px;
      }

      .clock mwc-icon-button[hour="12"],
      .clock mwc-icon-button[hour="1"],
      .clock mwc-icon-button[hour="2"],
      .clock mwc-icon-button[hour="3"],
      .clock mwc-icon-button[hour="4"],
      .clock mwc-icon-button[hour="5"],
      .clock mwc-icon-button[hour="6"],
      .clock mwc-icon-button[hour="7"],
      .clock mwc-icon-button[hour="8"],
      .clock mwc-icon-button[hour="9"],
      .clock mwc-icon-button[hour="10"],
      .clock mwc-icon-button[hour="11"] {
        --mdc-icon-button-size: 40px;
        position: absolute;
        top: 105px;
        left: 105px;
      }

      .deg0 { transform: translate(100px); }
      .deg30 { transform: rotate(30deg) translate(100px) rotate(-30deg); }
      .deg60 { transform: rotate(60deg) translate(100px) rotate(-60deg); }
      .deg90 { transform: rotate(90deg) translate(100px) rotate(-90deg); }
      .deg120 { transform: rotate(120deg) translate(100px) rotate(-120deg); }
      .deg150 { transform: rotate(150deg) translate(100px) rotate(-150deg); }
      .deg180 { transform: rotate(180deg) translate(100px) rotate(-180deg); }
      .deg210 { transform: rotate(210deg) translate(100px) rotate(-210deg); }
      .deg240 { transform: rotate(240deg) translate(100px) rotate(-240deg); }
      .deg270 { transform: rotate(270deg) translate(100px) rotate(-270deg); }
      .deg300 { transform: rotate(300deg) translate(100px) rotate(-300deg); }
      .deg330 { transform: rotate(330deg) translate(100px) rotate(-330deg); }
      .deg02 { transform: translate(70px); }
      .deg302 { transform: rotate(30deg) translate(70px) rotate(-30deg); }
      .deg602 { transform: rotate(60deg) translate(70px) rotate(-60deg); }
      .deg902 { transform: rotate(90deg) translate(70px) rotate(-90deg); }
      .deg1202 { transform: rotate(120deg) translate(70px) rotate(-120deg); }
      .deg1502 { transform: rotate(150deg) translate(70px) rotate(-150deg); }
      .deg1802 { transform: rotate(180deg) translate(70px) rotate(-180deg); }
      .deg2102 { transform: rotate(210deg) translate(70px) rotate(-210deg); }
      .deg2402 { transform: rotate(240deg) translate(70px) rotate(-240deg); }
      .deg2702 { transform: rotate(270deg) translate(70px) rotate(-270deg); }
      .deg3002 { transform: rotate(300deg) translate(70px) rotate(-300deg); }
      .deg3302 { transform: rotate(330deg) translate(70px) rotate(-330deg); }

      .alarm-detail-timepicker-time {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      }

      .alarm-detail-timepicker-time input {
        color: white;
        width: 40px;
        height: 40px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        border: none;
        border-bottom: solid 1px white;
        background-color: transparent;
        cursor: pointer;
      }

      .alarm-detail-timepicker-time input:active {
        border: none;
        background-color: transparent;
      }

      .alarm-detail-timepicker-time span {
        font-size: 24px;
        font-weight: bold;
        margin: 4px;
      }

      .clock {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.5);
        position: relative;
      }
    `}};t([K({attribute:!1})],Et.prototype,"hass",void 0),t([K({attribute:!1})],Et.prototype,"edit",void 0),t([K({attribute:!1})],Et.prototype,"editHour",void 0),t([K({attribute:!1})],Et.prototype,"touchIndex",void 0),t([K({attribute:!1})],Et.prototype,"touchTimeoutId",void 0),t([K({attribute:!1})],Et.prototype,"currentAlarmIndex",void 0),t([K({attribute:!1})],Et.prototype,"currentAlarm",void 0),t([K({attribute:!1})],Et.prototype,"selectedAlarmIndex",void 0),t([G()],Et.prototype,"config",void 0),Et=t([W("alarm-clock-card")],Et);export{Et as AlarmClockCard};
