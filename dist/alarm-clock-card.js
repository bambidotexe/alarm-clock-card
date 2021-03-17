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
function t(t,e,i,n){var s,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,i,o):s(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${s}`);class o{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,h=0;const{strings:p,values:{length:m}}=t;for(;h<m;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[h],i=d.exec(e)[2],n=i.toLowerCase()+"$lit$",s=t.getAttribute(n);t.removeAttribute(n);const o=s.split(r);this.parts.push({type:"attribute",index:u,name:i,strings:o}),h+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,s=e.split(r),o=s.length-1;for(let e=0;e<o;e++){let i,r=s[e];if(""===r)i=c();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===s[o]?(n.insertBefore(c(),t),i.push(t)):t.data=s[o],h+=o}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),h++}}else o.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let r=p(n),o=n[r],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=p(n,r),o=n[r]}c.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,c=s.nextNode();for(;o<n.length;)if(r=n[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),_=` ${n} `;class w{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(i?_:s):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
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
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),A=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!A(t))return t}let n="";for(let s=0;s<e;s++){n+=t[s];const e=i[s];if(void 0!==e){const t=e.value;if(x(t)||!A(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||x(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class ${constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):A(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new $(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class H extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends k{}let C=!1;(()=>{try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function D(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(n);return i=e.keyString.get(s),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const T=new Map,z=new WeakMap;
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
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new H(t,e.slice(1),i).parts}if("@"===s)return[new P(t,e.slice(1),n.eventContext)];if("?"===s)return[new E(t,e.slice(1),i)];return new S(t,e,i).parts}handleTextExpression(t){return new $(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const O=(t,...e)=>new w(t,e,"html",V)
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
 */,L=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const U=t=>e=>{const i=L(e.type,t);let s=T.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},T.set(i,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(n);if(r=s.keyString.get(a),void 0===r){const i=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(e,i),s.keyString.set(a,r)}return s.stringsArray.set(e.strings,r),r},Y=["html","svg"],I=new Set,j=(t,e,i)=>{I.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{Y.forEach(e=>{const i=T.get(L(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),u(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let o=p(s),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===i&&(a=h(e),i.parentNode.insertBefore(e,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=p(s,o);return}o=p(s,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),u(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:q};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdateInternal(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=q){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||F,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||F.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=J){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const s=this.constructor;i=i||s.getPropertyOptions(t),s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
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
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function K(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}function G(t){return K({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class tt{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new tt(i,X)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const it={};class nt extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}nt.finalized=!0,nt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,r=z.has(e),o=R&&11===e.nodeType&&!!e.host,a=o&&!I.has(s),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let s=z.get(e);void 0===s&&(i(e,e.firstChild),z.set(e,s=new $(Object.assign({templateFactory:D},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:U(s)},n)),a){const t=z.get(l);z.delete(l);const n=t.value instanceof v?t.value.template:void 0;j(s,l,n),i(e,e.firstChild),e.appendChild(l),z.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,rt="[^\\s]+",ot=/\[([^]*?)\]/gm;function at(t,e){for(var i=[],n=0,s=t.length;n<s;n++)i.push(t[n].substr(0,e));return i}var lt=function(t){return function(e,i){var n=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return n>-1?n:null}};function ct(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var n=0,s=e;n<s.length;n++){var r=s[n];for(var o in r)t[o]=r[o]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=at(ut,3),pt={dayNamesShort:at(dt,3),dayNames:dt,monthNamesShort:ht,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=ct({},pt),gt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},ft={D:function(t){return String(t.getDate())},DD:function(t){return gt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return gt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return gt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return gt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return gt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return gt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return gt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return gt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return gt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return gt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return gt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(Math.floor(Math.abs(e)/60),2)+":"+gt(Math.abs(e)%60,2)}},yt=function(t){return+t-1},vt=[null,"[1-9]\\d?"],bt=[null,rt],_t=["isPm",rt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],xt=(lt("monthNamesShort"),lt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var At=function(t,e,i){if(void 0===e&&(e=xt.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];e=(e=xt[e]||e).replace(ot,(function(t,e){return n.push(e),"@@@"}));var s=ct(ct({},mt),i);return(e=e.replace(st,(function(e){return ft[e](t,s)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();let St=class extends nt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _alarm_clock_id(){var t;return(null===(t=this._config)||void 0===t?void 0:t.alarm_clock_id)||"alarm_clock"}render(){if(!this.hass||!this._helpers)return O``;const t=Object.keys(this.hass.states).filter(t=>"input_text"===t.substr(0,t.indexOf(".")));return O`
      <div class="card-config">
        <div class="values">
          <paper-dropdown-menu
            label="Entity (Required)"
            @value-changed=${this._valueChanged}
            .configValue=${"entity"}
          >
            <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
              ${t.map(t=>O`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});s.detail=i,t.dispatchEvent(s)}(this,"config-changed",{config:this._config}))}static get styles(){return et`
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
    `}};t([K({attribute:!1})],St.prototype,"hass",void 0),t([G()],St.prototype,"_config",void 0),t([G()],St.prototype,"_toggle",void 0),t([G()],St.prototype,"_helpers",void 0),St=t([W("alarm-clock-card-editor")],St);var kt={invalid_configuration:"Invalid configuration"},$t={name:"Alarms",daysShort:{monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"},daysFirstLetter:{monday:"M",tuesday:"T",wednesday:"W",thursday:"T",friday:"F",saturday:"S",sunday:"S"},repeat:"Repeat",everyday:"Everyday",tommorow:"Tommorow"},Et={common:kt,card:$t},Ht={invalid_configuration:"Configuration invalide"},Mt={name:"Alarmes",daysShort:{monday:"Lun",tuesday:"Mar",wednesday:"Mer",thursday:"Jeu",friday:"Vendredi",saturday:"Samedi",sunday:"Dimanche"},daysFirstLetter:{monday:"L",tuesday:"M",wednesday:"M",thursday:"J",friday:"V",saturday:"S",sunday:"D"},repeat:"Répéter",everyday:"Tout les jours",tommorow:"Demain"},Ct={common:Ht,card:Mt};const Pt={en:Object.freeze({__proto__:null,common:kt,card:$t,default:Et}),nb:Object.freeze({__proto__:null,common:Ht,card:Mt,default:Ct})};function Nt(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce((t,e)=>t[e],Pt[n])}catch(e){s=t.split(".").reduce((t,e)=>t[e],Pt.en)}return void 0===s&&(s=t.split(".").reduce((t,e)=>t[e],Pt.en)),""!==e&&""!==i&&(s=s.replace(e,i)),s}
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
class Dt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const Tt=new WeakMap,zt=(Vt=t=>e=>{if(!(e instanceof k)||e instanceof M||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:n}=i;let s=Tt.get(e);void 0===s&&(n.setAttribute("class",i.strings.join(" ")),Tt.set(e,s=new Set));const r=n.classList||new Dt(n);s.forEach(e=>{e in t||(r.remove(e),s.delete(e))});for(const e in t){const i=t[e];i!=s.has(e)&&(i?(r.add(e),s.add(e)):(r.remove(e),s.delete(e)))}"function"==typeof r.commit&&r.commit()},(...t)=>{const e=Vt(...t);return m.set(e,!0),e});var Vt;console.info(`%c  ALARM-CLOCK-CARD \n%c  ${Nt("common.version")} 0.0.1    `,"color: white; font-weight: bold; background: #00EC76","color: #00EC76; font-weight: bold; background: transparent"),window.customCards=window.customCards||[],window.customCards.push({type:"alarm-clock-card",name:"Alarm clock Card",description:"A template custom card for you to create alarm clock"});let Ot=class extends nt{constructor(){super(...arguments),this.edit=!1,this.editHour=!0,this.currentAlarmIndex=null,this.currentAlarm=null,this.selectedAlarmIndex=[],this.touchAlarmDuration=500}static async getConfigElement(){return document.createElement("alarm-clock-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Nt("common.invalid_configuration"));const e=t.entity;if(!e||"input_text"!==e.substr(0,e.indexOf(".")))throw new Error(Nt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:Nt("card.name")},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){var t,e,i,n,s,r,o,a,l,c,d,u,h,p,m,g,f,y,v,b,_,w,x,A,S,k,$,E,H,M,C,P,N,D,T,z,V,L,R,U,Y,I,j,F,q,J,B,W,Z;if(!this.config.entity)return;const K=this._getAlarms(),G=O`
      <mwc-icon-button class="alarm-add alarm-delete" @click=${()=>{this.selectedAlarmIndex.length>0?this._deleteSelectedAlarms():this._addAlarm()}}>
        <ha-svg-icon .path=${this.selectedAlarmIndex.length>0?"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z":"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
      </mwc-icon-button>
      <div class="alarm-clock">
        ${K.map((t,e)=>O`
        <div class="alarm">
          ${this._isTouchDevice()?O`
              <div class="alarm-datetime"
                  @touchstart=${()=>{this._touchAlarmStart(e)}}
                  @touchend=${()=>{this._touchAlarmEnd(e)}}
                  @touchmove=${()=>{this._touchAlarmMove()}}>
                <div class="alarm-time">
                  ${(t.hour<10?"0":"")+t.hour}:${(t.minute<10?"0":"")+t.minute} </div> <div
                    class="alarm-days">
                    ${this._parseDays(t)}
                </div>
              </div>
            `:O`
              <div class="alarm-datetime"
                  @mousedown=${()=>{this._touchAlarmStart(e)}}
                  @mouseup=${()=>{this._touchAlarmEnd(e)}}>
                <div class="alarm-time">
                  ${(t.hour<10?"0":"")+t.hour}:${(t.minute<10?"0":"")+t.minute} </div> <div
                    class="alarm-days">
                    ${this._parseDays(t)}
                </div>
              </div>
            `}

          <div class="alarm-actions">
            ${this.selectedAlarmIndex.length>0?O`
                <ha-svg-icon .path=${-1!==this.selectedAlarmIndex.indexOf(e)?"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z":"M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"}></ha-svg-icon>
              `:O`
                <ha-switch .checked=${t.enabled} @click=${()=>{this._toggleEnabledAlarm(e)}}>
                </ha-switch>
              `}
          </div>
          <mwc-ripple></mwc-ripple>
        </div>
        `)}
      </div>
      ${this.edit?O`
          <div class="alarm-detail">
            <div class="alarm-detail-actions">
              <mwc-icon-button class="alarm-detail-delete"
                @click=${this._handleBack}>
                <ha-svg-icon .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}></ha-svg-icon>
              </mwc-icon-button>
              <mwc-icon-button class="alarm-detail-save"
                @click=${this._saveAlarm}>
                <ha-svg-icon .path=${"M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"}></ha-svg-icon>
              </mwc-icon-button>
            </div>
            <div class="alarm-detail-timepicker">
              <div class="alarm-detail-timepicker-time">
                <input type="text" maxlength="2" pattern="[0-9]" .value=${((null!==(e=null===(t=this.currentAlarm)||void 0===t?void 0:t.hour)&&void 0!==e?e:8)<10?"0":"")+(null===(i=this.currentAlarm)||void 0===i?void 0:i.hour)} @change=${this._checkAndUpdateEditedAlarmHour} @click=${()=>{this.editHour=!0}}>
                <span>:</span>
                <input type="text" maxlength="2" pattern="[0-9]" .value=${((null!==(s=null===(n=this.currentAlarm)||void 0===n?void 0:n.minute)&&void 0!==s?s:0)<10?"0":"")+(null===(r=this.currentAlarm)||void 0===r?void 0:r.minute)} @change=${this._checkAndUpdateEditedAlarmMinute} @click=${()=>{this.editHour=!1}}>
              </div>
              <div class="clock">
                ${this.editHour?O`
                      <div class="clock-hour">
                        <mwc-icon-button hour="12" @click=${()=>{this._updateEditedAlarmHour(12),this.editHour=!1}} class=${zt({enabled:12==(null===(o=this.currentAlarm)||void 0===o?void 0:o.hour),deg270:!0})}><span style="font-size: 16px; line-height: 26px; ">12</span></mwc-icon-button>
                        <mwc-icon-button hour="1" @click=${()=>{this._updateEditedAlarmHour(1),this.editHour=!1}} class=${zt({enabled:1==(null===(a=this.currentAlarm)||void 0===a?void 0:a.hour),deg300:!0})}><span style="font-size: 16px; line-height: 26px; ">1</span></mwc-icon-button>
                        <mwc-icon-button hour="2" @click=${()=>{this._updateEditedAlarmHour(2),this.editHour=!1}} class=${zt({enabled:2==(null===(l=this.currentAlarm)||void 0===l?void 0:l.hour),deg330:!0})}><span style="font-size: 16px; line-height: 26px; ">2</span></mwc-icon-button>
                        <mwc-icon-button hour="3" @click=${()=>{this._updateEditedAlarmHour(3),this.editHour=!1}} class=${zt({enabled:3==(null===(c=this.currentAlarm)||void 0===c?void 0:c.hour),deg0:!0})}><span style="font-size: 16px; line-height: 26px; ">3</span></mwc-icon-button>
                        <mwc-icon-button hour="4" @click=${()=>{this._updateEditedAlarmHour(4),this.editHour=!1}} class=${zt({enabled:4==(null===(d=this.currentAlarm)||void 0===d?void 0:d.hour),deg30:!0})}><span style="font-size: 16px; line-height: 26px; ">4</span></mwc-icon-button>
                        <mwc-icon-button hour="5" @click=${()=>{this._updateEditedAlarmHour(5),this.editHour=!1}} class=${zt({enabled:5==(null===(u=this.currentAlarm)||void 0===u?void 0:u.hour),deg60:!0})}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button hour="6" @click=${()=>{this._updateEditedAlarmHour(6),this.editHour=!1}} class=${zt({enabled:6==(null===(h=this.currentAlarm)||void 0===h?void 0:h.hour),deg90:!0})}><span style="font-size: 16px; line-height: 26px; ">6</span></mwc-icon-button>
                        <mwc-icon-button hour="7" @click=${()=>{this._updateEditedAlarmHour(7),this.editHour=!1}} class=${zt({enabled:7==(null===(p=this.currentAlarm)||void 0===p?void 0:p.hour),deg120:!0})}><span style="font-size: 16px; line-height: 26px; ">7</span></mwc-icon-button>
                        <mwc-icon-button hour="8" @click=${()=>{this._updateEditedAlarmHour(8),this.editHour=!1}} class=${zt({enabled:8==(null===(m=this.currentAlarm)||void 0===m?void 0:m.hour),deg150:!0})}><span style="font-size: 16px; line-height: 26px; ">8</span></mwc-icon-button>
                        <mwc-icon-button hour="9" @click=${()=>{this._updateEditedAlarmHour(9),this.editHour=!1}} class=${zt({enabled:9==(null===(g=this.currentAlarm)||void 0===g?void 0:g.hour),deg180:!0})}><span style="font-size: 16px; line-height: 26px; ">9</span></mwc-icon-button>
                        <mwc-icon-button hour="10" @click=${()=>{this._updateEditedAlarmHour(10),this.editHour=!1}} class=${zt({enabled:10==(null===(f=this.currentAlarm)||void 0===f?void 0:f.hour),deg210:!0})}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button hour="11" @click=${()=>{this._updateEditedAlarmHour(11),this.editHour=!1}} class=${zt({enabled:11==(null===(y=this.currentAlarm)||void 0===y?void 0:y.hour),deg240:!0})}><span style="font-size: 16px; line-height: 26px; ">11</span></mwc-icon-button>

                        <mwc-icon-button hour="0" @click=${()=>{this._updateEditedAlarmHour(0),this.editHour=!1}} class=${zt({enabled:0==(null===(v=this.currentAlarm)||void 0===v?void 0:v.hour),closeDeg270:!0})}><span style="font-size: 14px; line-height: 24px; ">0</span></mwc-icon-button>
                        <mwc-icon-button hour="13" @click=${()=>{this._updateEditedAlarmHour(13),this.editHour=!1}} class=${zt({enabled:13==(null===(b=this.currentAlarm)||void 0===b?void 0:b.hour),closeDeg300:!0})}><span style="font-size: 14px; line-height: 24px; ">13</span></mwc-icon-button>
                        <mwc-icon-button hour="14" @click=${()=>{this._updateEditedAlarmHour(14),this.editHour=!1}} class=${zt({enabled:14==(null===(_=this.currentAlarm)||void 0===_?void 0:_.hour),closeDeg330:!0})}><span style="font-size: 14px; line-height: 24px; ">14</span></mwc-icon-button>
                        <mwc-icon-button hour="15" @click=${()=>{this._updateEditedAlarmHour(15),this.editHour=!1}} class=${zt({enabled:15==(null===(w=this.currentAlarm)||void 0===w?void 0:w.hour),closeDeg0:!0})}><span style="font-size: 14px; line-height: 24px; ">15</span></mwc-icon-button>
                        <mwc-icon-button hour="16" @click=${()=>{this._updateEditedAlarmHour(16),this.editHour=!1}} class=${zt({enabled:16==(null===(x=this.currentAlarm)||void 0===x?void 0:x.hour),closeDeg30:!0})}><span style="font-size: 14px; line-height: 24px; ">16</span></mwc-icon-button>
                        <mwc-icon-button hour="17" @click=${()=>{this._updateEditedAlarmHour(17),this.editHour=!1}} class=${zt({enabled:17==(null===(A=this.currentAlarm)||void 0===A?void 0:A.hour),closeDeg60:!0})}><span style="font-size: 14px; line-height: 24px; ">17</span></mwc-icon-button>
                        <mwc-icon-button hour="18" @click=${()=>{this._updateEditedAlarmHour(18),this.editHour=!1}} class=${zt({enabled:18==(null===(S=this.currentAlarm)||void 0===S?void 0:S.hour),closeDeg90:!0})}><span style="font-size: 14px; line-height: 24px; ">18</span></mwc-icon-button>
                        <mwc-icon-button hour="19" @click=${()=>{this._updateEditedAlarmHour(19),this.editHour=!1}} class=${zt({enabled:19==(null===(k=this.currentAlarm)||void 0===k?void 0:k.hour),closeDeg120:!0})}><span style="font-size: 14px; line-height: 24px; ">19</span></mwc-icon-button>
                        <mwc-icon-button hour="20" @click=${()=>{this._updateEditedAlarmHour(20),this.editHour=!1}} class=${zt({enabled:20==(null===($=this.currentAlarm)||void 0===$?void 0:$.hour),closeDeg150:!0})}><span style="font-size: 14px; line-height: 24px; ">20</span></mwc-icon-button>
                        <mwc-icon-button hour="21" @click=${()=>{this._updateEditedAlarmHour(21),this.editHour=!1}} class=${zt({enabled:21==(null===(E=this.currentAlarm)||void 0===E?void 0:E.hour),closeDeg180:!0})}><span style="font-size: 14px; line-height: 24px; ">21</span></mwc-icon-button>
                        <mwc-icon-button hour="22" @click=${()=>{this._updateEditedAlarmHour(22),this.editHour=!1}} class=${zt({enabled:22==(null===(H=this.currentAlarm)||void 0===H?void 0:H.hour),closeDeg210:!0})}><span style="font-size: 14px; line-height: 24px; ">22</span></mwc-icon-button>
                        <mwc-icon-button hour="23" @click=${()=>{this._updateEditedAlarmHour(23),this.editHour=!1}} class=${zt({enabled:23==(null===(M=this.currentAlarm)||void 0===M?void 0:M.hour),closeDeg240:!0})}><span style="font-size: 14px; line-height: 24px; ">23</span></mwc-icon-button>
                      </div>
                    `:O`
                      <div class="clock-minute">
                        <mwc-icon-button minute="0" @click=${()=>{this._updateEditedAlarmMinute(0)}} class=${zt({enabled:0==(null===(C=this.currentAlarm)||void 0===C?void 0:C.minute),deg270:!0})}><span style="font-size: 16px; line-height: 26px; ">0</span></mwc-icon-button>
                        <mwc-icon-button minute="5" @click=${()=>{this._updateEditedAlarmMinute(5)}} class=${zt({enabled:5==(null===(P=this.currentAlarm)||void 0===P?void 0:P.minute),deg300:!0})}><span style="font-size: 16px; line-height: 26px; ">5</span></mwc-icon-button>
                        <mwc-icon-button minute="10" @click=${()=>{this._updateEditedAlarmMinute(10)}} class=${zt({enabled:10==(null===(N=this.currentAlarm)||void 0===N?void 0:N.minute),deg330:!0})}><span style="font-size: 16px; line-height: 26px; ">10</span></mwc-icon-button>
                        <mwc-icon-button minute="15" @click=${()=>{this._updateEditedAlarmMinute(15)}} class=${zt({enabled:15==(null===(D=this.currentAlarm)||void 0===D?void 0:D.minute),deg0:!0})}><span style="font-size: 16px; line-height: 26px; ">15</span></mwc-icon-button>
                        <mwc-icon-button minute="20" @click=${()=>{this._updateEditedAlarmMinute(20)}} class=${zt({enabled:20==(null===(T=this.currentAlarm)||void 0===T?void 0:T.minute),deg30:!0})}><span style="font-size: 16px; line-height: 26px; ">20</span></mwc-icon-button>
                        <mwc-icon-button minute="25" @click=${()=>{this._updateEditedAlarmMinute(25)}} class=${zt({enabled:25==(null===(z=this.currentAlarm)||void 0===z?void 0:z.minute),deg60:!0})}><span style="font-size: 16px; line-height: 26px; ">25</span></mwc-icon-button>
                        <mwc-icon-button minute="30" @click=${()=>{this._updateEditedAlarmMinute(30)}} class=${zt({enabled:30==(null===(V=this.currentAlarm)||void 0===V?void 0:V.minute),deg90:!0})}><span style="font-size: 16px; line-height: 26px; ">30</span></mwc-icon-button>
                        <mwc-icon-button minute="35" @click=${()=>{this._updateEditedAlarmMinute(35)}} class=${zt({enabled:35==(null===(L=this.currentAlarm)||void 0===L?void 0:L.minute),deg120:!0})}><span style="font-size: 16px; line-height: 26px; ">35</span></mwc-icon-button>
                        <mwc-icon-button minute="40" @click=${()=>{this._updateEditedAlarmMinute(40)}} class=${zt({enabled:40==(null===(R=this.currentAlarm)||void 0===R?void 0:R.minute),deg150:!0})}><span style="font-size: 16px; line-height: 26px; ">40</span></mwc-icon-button>
                        <mwc-icon-button minute="45" @click=${()=>{this._updateEditedAlarmMinute(45)}} class=${zt({enabled:45==(null===(U=this.currentAlarm)||void 0===U?void 0:U.minute),deg180:!0})}><span style="font-size: 16px; line-height: 26px; ">45</span></mwc-icon-button>
                        <mwc-icon-button minute="50" @click=${()=>{this._updateEditedAlarmMinute(50)}} class=${zt({enabled:50==(null===(Y=this.currentAlarm)||void 0===Y?void 0:Y.minute),deg210:!0})}><span style="font-size: 16px; line-height: 26px; ">50</span></mwc-icon-button>
                        <mwc-icon-button minute="55" @click=${()=>{this._updateEditedAlarmMinute(55)}} class=${zt({enabled:55==(null===(I=this.currentAlarm)||void 0===I?void 0:I.minute),deg240:!0})}><span style="font-size: 16px; line-height: 26px; ">55</span></mwc-icon-button>
                      </div>
                    `}
              </div>
            </div>
            <p>${Nt("card.repeat")}</p>
            <div class="alarm-detail-repeat">
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(0)}} class=${zt({enabled:!!(null===(j=this.currentAlarm)||void 0===j?void 0:j.monday)})}>
                <span style="font-size: 16px; line-height: 26px; ">${Nt("card.daysFirstLetter.monday")}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(1)}} class=${zt({enabled:!!(null===(F=this.currentAlarm)||void 0===F?void 0:F.tuesday)})}>
                <span style="font-size: 16px; line-height: 26px;">${Nt("card.daysFirstLetter.tuesday")}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(2)}} class=${zt({enabled:!!(null===(q=this.currentAlarm)||void 0===q?void 0:q.wednesday)})}>
                <span style="font-size: 16px; line-height: 26px;">${Nt("card.daysFirstLetter.wednesday")}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(3)}} class=${zt({enabled:!!(null===(J=this.currentAlarm)||void 0===J?void 0:J.thursday)})}>
                <span style="font-size: 16px; line-height: 26px;">${Nt("card.daysFirstLetter.thursday")}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(4)}} class=${zt({enabled:!!(null===(B=this.currentAlarm)||void 0===B?void 0:B.friday)})}>
                <span style="font-size: 16px; line-height: 26px;">${Nt("card.daysFirstLetter.friday")}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(5)}} class=${zt({enabled:!!(null===(W=this.currentAlarm)||void 0===W?void 0:W.saturday)})}>
                <span style="font-size: 16px; line-height: 26px;">${Nt("card.daysFirstLetter.saturday")}</span>
              </mwc-icon-button>
              <mwc-icon-button @click=${()=>{this._updateEditedAlarmEabledDay(6)}} class=${zt({enabled:!!(null===(Z=this.currentAlarm)||void 0===Z?void 0:Z.sunday)})}>
                <span style="font-size: 16px; line-height: 26px;">${Nt("card.daysFirstLetter.sunday")}</span>
              </mwc-icon-button>
            </div>
          </div>
        `:O``}
    `;return O`
      <ha-card .header=${this.config.name} .label=${"Alarm clock: "+(this.config.entity||"No Entity Defined")}>
        ${G}
      </ha-card>
    `}_decodeRaw(t){return{hour:+t.slice(0,2),minute:+t.slice(2,4),enabled:!!+t.slice(4,5),monday:!!+t.slice(5,6),tuesday:!!+t.slice(6,7),wednesday:!!+t.slice(7,8),thursday:!!+t.slice(8,9),friday:!!+t.slice(9,10),saturday:!!+t.slice(10,11),sunday:!!+t.slice(11,12)}}_encodeRaw(t){let e="";return e+=(t.hour<10?"0":"")+t.hour,e+=(t.minute<10?"0":"")+t.minute,e+=t.enabled?"1":"0",e+=t.monday?"1":"0",e+=t.tuesday?"1":"0",e+=t.wednesday?"1":"0",e+=t.thursday?"1":"0",e+=t.friday?"1":"0",e+=t.saturday?"1":"0",e+=t.sunday?"1":"0",e}_getAlarms(){const t=this.config.entity;return t?this.hass.states[t].state.split(",").filter(t=>12==t.length).map(this._decodeRaw):[]}_setAlarms(t){const e=this.config.entity;e&&this.hass.callService("input_text","set_value",{entity_id:e,value:t.map(this._encodeRaw).join(",")})}_toggleEnabledAlarm(t){const e=this._getAlarms().slice(0);e[t].enabled=!e[t].enabled,this._setAlarms(e)}_touchAlarmStart(t){this.touchAlarmTimer=setTimeout(()=>{this.touchAlarmTimer=null,this._selectAlarm(t)},this.touchAlarmDuration)}_touchAlarmEnd(t){this.touchAlarmTimer&&(clearTimeout(this.touchAlarmTimer),this.touchAlarmTimer=null,this.selectedAlarmIndex.length>0?this._selectAlarm(t):this._editAlarm(t))}_touchAlarmMove(){this.touchAlarmTimer&&(clearTimeout(this.touchAlarmTimer),this.touchAlarmTimer=null)}_addAlarm(){const t=this._getAlarms().slice(0);t.push({hour:8,minute:0,enabled:!0,monday:!1,tuesday:!1,wednesday:!1,thursday:!1,friday:!1,saturday:!1,sunday:!1}),this._setAlarms(t)}_editAlarm(t){this.currentAlarmIndex=t,this.currentAlarm=this._getAlarms()[t],this.editHour=!0,this.edit=!0}_deleteSelectedAlarms(){const t=this._getAlarms().slice(),e=this.selectedAlarmIndex.sort().reverse();for(let i=0;i<e.length;i++){const n=e[i];t.splice(n,1)}this.selectedAlarmIndex=[],this._setAlarms(t)}_saveAlarm(){const t=this.currentAlarmIndex,e=this.currentAlarm,i=this._getAlarms().slice();e&&t&&(i[t]=e),this._setAlarms(i),this.currentAlarm=null,this.currentAlarmIndex=null,this.edit=!1}_selectAlarm(t){const e=this.selectedAlarmIndex.slice(0);-1===e.indexOf(t)?e.push(t):e.splice(e.indexOf(t),1),this.selectedAlarmIndex=e}_checkAndUpdateEditedAlarmHour(t){let e=+t.target.value;e>23&&(e=23),e<0&&(e=0),this._updateEditedAlarmHour(e)}_checkAndUpdateEditedAlarmMinute(t){let e=+t.target.value;e>59&&(e=59),e<0&&(e=0),this._updateEditedAlarmMinute(e)}_updateEditedAlarmHour(t){const e=JSON.parse(JSON.stringify(this.currentAlarm));e.hour=t,this.currentAlarm=e}_updateEditedAlarmMinute(t){const e=JSON.parse(JSON.stringify(this.currentAlarm));e.minute=t,this.currentAlarm=e}_updateEditedAlarmEabledDay(t){let e;switch(t){case 0:e="monday";break;case 1:e="tuesday";break;case 2:e="wednesday";break;case 3:e="thursday";break;case 4:e="friday";break;case 5:e="saturday";break;case 6:default:e="sunday"}const i=JSON.parse(JSON.stringify(this.currentAlarm));i[e]=!i[e],this.currentAlarm=i}_handleBack(){this.currentAlarm=null,this.currentAlarmIndex=null,this.edit=!1}_parseDays(t){const e=[t.monday,t.tuesday,t.wednesday,t.thursday,t.friday,t.saturday,t.sunday];return e.every(t=>!t)?Nt("card.tommorow"):e.every(t=>!!t)?Nt("card.everyday"):e.map((t,e)=>{if(t)switch(e){case 0:return Nt("card.daysShort.monday");case 1:return Nt("card.daysShort.tuesday");case 2:return Nt("card.daysShort.wednesday");case 3:return Nt("card.daysShort.thursday");case 4:return Nt("card.daysShort.friday");case 5:return Nt("card.daysShort.saturday");case 6:return Nt("card.daysShort.sunday")}return null}).filter(t=>null!==t).join(", ")}_isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}static get styles(){return et`
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
      .closeDeg0 { transform: translate(70px); }
      .closeDeg30 { transform: rotate(30deg) translate(70px) rotate(-30deg); }
      .closeDeg60 { transform: rotate(60deg) translate(70px) rotate(-60deg); }
      .closeDeg90 { transform: rotate(90deg) translate(70px) rotate(-90deg); }
      .closeDeg120 { transform: rotate(120deg) translate(70px) rotate(-120deg); }
      .closeDeg150 { transform: rotate(150deg) translate(70px) rotate(-150deg); }
      .closeDeg180 { transform: rotate(180deg) translate(70px) rotate(-180deg); }
      .closeDeg210 { transform: rotate(210deg) translate(70px) rotate(-210deg); }
      .closeDeg240 { transform: rotate(240deg) translate(70px) rotate(-240deg); }
      .closeDeg270 { transform: rotate(270deg) translate(70px) rotate(-270deg); }
      .closeDeg300 { transform: rotate(300deg) translate(70px) rotate(-300deg); }
      .closeDeg330 { transform: rotate(330deg) translate(70px) rotate(-330deg); }

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
    `}};t([K({attribute:!1})],Ot.prototype,"hass",void 0),t([K({attribute:!1})],Ot.prototype,"edit",void 0),t([K({attribute:!1})],Ot.prototype,"editHour",void 0),t([K({attribute:!1})],Ot.prototype,"currentAlarmIndex",void 0),t([K({attribute:!1})],Ot.prototype,"currentAlarm",void 0),t([K({attribute:!1})],Ot.prototype,"selectedAlarmIndex",void 0),t([G()],Ot.prototype,"config",void 0),t([K({attribute:!1})],Ot.prototype,"touchAlarmTimer",void 0),t([K({attribute:!1})],Ot.prototype,"touchAlarmDuration",void 0),Ot=t([W("alarm-clock-card")],Ot);export{Ot as AlarmClockCard};
