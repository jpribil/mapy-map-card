"use strict";(()=>{var Bs=Object.create;var Ge=Object.defineProperty;var wo=Object.getOwnPropertyDescriptor;var $s=Object.getOwnPropertyNames;var Rs=Object.getPrototypeOf,Ns=Object.prototype.hasOwnProperty;var j=(u,a)=>()=>(u&&(a=u(u=0)),a);var Hs=(u,a)=>()=>(a||u((a={exports:{}}).exports,a),a.exports),Ds=(u,a)=>{for(var s in a)Ge(u,s,{get:a[s],enumerable:!0})},Fs=(u,a,s,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let h of $s(a))!Ns.call(u,h)&&h!==s&&Ge(u,h,{get:()=>a[h],enumerable:!(l=wo(a,h))||l.enumerable});return u};var Us=(u,a,s)=>(s=u!=null?Bs(Rs(u)):{},Fs(a||!u||!u.__esModule?Ge(s,"default",{value:u,enumerable:!0}):s,u));var pt=(u,a,s,l)=>{for(var h=l>1?void 0:l?wo(a,s):a,_=u.length-1,f;_>=0;_--)(f=u[_])&&(h=(l?f(a,s,h):f(h))||h);return l&&h&&Ge(a,s,h),h};var Ke,Je,Po,Lo,Ye,To,So,Fi,Ui=j(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Ke=globalThis,Je=Ke.ShadowRoot&&(Ke.ShadyCSS===void 0||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Po=Symbol(),Lo=new WeakMap,Ye=class{constructor(a,s,l){if(this._$cssResult$=!0,l!==Po)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=s}get styleSheet(){let a=this.o,s=this.t;if(Je&&a===void 0){let l=s!==void 0&&s.length===1;l&&(a=Lo.get(s)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&Lo.set(s,a))}return a}toString(){return this.cssText}},To=u=>new Ye(typeof u=="string"?u:u+"",void 0,Po),So=(u,a)=>{if(Je)u.adoptedStyleSheets=a.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of a){let l=document.createElement("style"),h=Ke.litNonce;h!==void 0&&l.setAttribute("nonce",h),l.textContent=s.cssText,u.appendChild(l)}},Fi=Je?u=>u:u=>u instanceof CSSStyleSheet?(a=>{let s="";for(let l of a.cssRules)s+=l.cssText;return To(s)})(u):u});var Ws,qs,js,Vs,Gs,Ks,St,ko,Ys,Js,me,ge,Xe,Eo,wt,ve=j(()=>{Ui();Ui();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({is:Ws,defineProperty:qs,getOwnPropertyDescriptor:js,getOwnPropertyNames:Vs,getOwnPropertySymbols:Gs,getPrototypeOf:Ks}=Object),St=globalThis,ko=St.trustedTypes,Ys=ko?ko.emptyScript:"",Js=St.reactiveElementPolyfillSupport,me=(u,a)=>u,ge={toAttribute(u,a){switch(a){case Boolean:u=u?Ys:null;break;case Object:case Array:u=u==null?u:JSON.stringify(u)}return u},fromAttribute(u,a){let s=u;switch(a){case Boolean:s=u!==null;break;case Number:s=u===null?null:Number(u);break;case Object:case Array:try{s=JSON.parse(u)}catch{s=null}}return s}},Xe=(u,a)=>!Ws(u,a),Eo={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:Xe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),St.litPropertyMetadata??(St.litPropertyMetadata=new WeakMap);wt=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??(this.l=[])).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,s=Eo){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(a,s),!s.noAccessor){let l=Symbol(),h=this.getPropertyDescriptor(a,l,s);h!==void 0&&qs(this.prototype,a,h)}}static getPropertyDescriptor(a,s,l){let{get:h,set:_}=js(this.prototype,a)??{get(){return this[s]},set(f){this[s]=f}};return{get:h,set(f){let g=h?.call(this);_?.call(this,f),this.requestUpdate(a,g,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Eo}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;let a=Ks(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){let s=this.properties,l=[...Vs(s),...Gs(s)];for(let h of l)this.createProperty(h,s[h])}let a=this[Symbol.metadata];if(a!==null){let s=litPropertyMetadata.get(a);if(s!==void 0)for(let[l,h]of s)this.elementProperties.set(l,h)}this._$Eh=new Map;for(let[s,l]of this.elementProperties){let h=this._$Eu(s,l);h!==void 0&&this._$Eh.set(h,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){let s=[];if(Array.isArray(a)){let l=new Set(a.flat(1/0).reverse());for(let h of l)s.unshift(Fi(h))}else a!==void 0&&s.push(Fi(a));return s}static _$Eu(a,s){let l=s.attribute;return l===!1?void 0:typeof l=="string"?l:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(a=>a(this))}addController(a){(this._$EO??(this._$EO=new Set)).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){let a=new Map,s=this.constructor.elementProperties;for(let l of s.keys())this.hasOwnProperty(l)&&(a.set(l,this[l]),delete this[l]);a.size>0&&(this._$Ep=a)}createRenderRoot(){let a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return So(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(a=>a.hostConnected?.())}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach(a=>a.hostDisconnected?.())}attributeChangedCallback(a,s,l){this._$AK(a,l)}_$ET(a,s){let l=this.constructor.elementProperties.get(a),h=this.constructor._$Eu(a,l);if(h!==void 0&&l.reflect===!0){let _=(l.converter?.toAttribute!==void 0?l.converter:ge).toAttribute(s,l.type);this._$Em=a,_==null?this.removeAttribute(h):this.setAttribute(h,_),this._$Em=null}}_$AK(a,s){let l=this.constructor,h=l._$Eh.get(a);if(h!==void 0&&this._$Em!==h){let _=l.getPropertyOptions(h),f=typeof _.converter=="function"?{fromAttribute:_.converter}:_.converter?.fromAttribute!==void 0?_.converter:ge;this._$Em=h;let g=f.fromAttribute(s,_.type);this[h]=g??this._$Ej?.get(h)??g,this._$Em=null}}requestUpdate(a,s,l,h=!1,_){if(a!==void 0){let f=this.constructor;if(h===!1&&(_=this[a]),l??(l=f.getPropertyOptions(a)),!((l.hasChanged??Xe)(_,s)||l.useDefault&&l.reflect&&_===this._$Ej?.get(a)&&!this.hasAttribute(f._$Eu(a,l))))return;this.C(a,s,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,s,{useDefault:l,reflect:h,wrapped:_},f){l&&!(this._$Ej??(this._$Ej=new Map)).has(a)&&(this._$Ej.set(a,f??s??this[a]),_!==!0||f!==void 0)||(this._$AL.has(a)||(this.hasUpdated||l||(s=void 0),this._$AL.set(a,s)),h===!0&&this._$Em!==a&&(this._$Eq??(this._$Eq=new Set)).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[h,_]of this._$Ep)this[h]=_;this._$Ep=void 0}let l=this.constructor.elementProperties;if(l.size>0)for(let[h,_]of l){let{wrapped:f}=_,g=this[h];f!==!0||this._$AL.has(h)||g===void 0||this.C(h,void 0,_,g)}}let a=!1,s=this._$AL;try{a=this.shouldUpdate(s),a?(this.willUpdate(s),this._$EO?.forEach(l=>l.hostUpdate?.()),this.update(s)):this._$EM()}catch(l){throw a=!1,this._$EM(),l}a&&this._$AE(s)}willUpdate(a){}_$AE(a){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(a){}firstUpdated(a){}};wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},wt[me("elementProperties")]=new Map,wt[me("finalized")]=new Map,Js?.({ReactiveElement:wt}),(St.reactiveElementVersions??(St.reactiveElementVersions=[])).push("2.1.2")});function No(u,a){if(!Yi(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return zo!==void 0?zo.createHTML(a):a}function Yt(u,a,s=u,l){if(a===$t)return a;let h=l!==void 0?s._$Co?.[l]:s._$Cl,_=we(a)?void 0:a._$litDirective$;return h?.constructor!==_&&(h?._$AO?.(!1),_===void 0?h=void 0:(h=new _(u),h._$AT(u,s,l)),l!==void 0?(s._$Co??(s._$Co=[]))[l]=h:s._$Cl=h),h!==void 0&&(a=Yt(u,h._$AS(u,a.values),h,l)),a}var be,Co,Qe,zo,Bo,kt,$o,Xs,Bt,xe,we,Yi,Qs,Wi,ye,Mo,Ao,It,Oo,Io,Ro,Ji,K,va,ya,$t,H,Zo,Zt,ta,Le,qi,Pe,Jt,ji,Vi,Gi,Ki,ea,Ho,ti=j(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */be=globalThis,Co=u=>u,Qe=be.trustedTypes,zo=Qe?Qe.createPolicy("lit-html",{createHTML:u=>u}):void 0,Bo="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,$o="?"+kt,Xs=`<${$o}>`,Bt=document,xe=()=>Bt.createComment(""),we=u=>u===null||typeof u!="object"&&typeof u!="function",Yi=Array.isArray,Qs=u=>Yi(u)||typeof u?.[Symbol.iterator]=="function",Wi=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mo=/-->/g,Ao=/>/g,It=RegExp(`>|${Wi}(?:([^\\s"'>=/]+)(${Wi}*=${Wi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oo=/'/g,Io=/"/g,Ro=/^(?:script|style|textarea|title)$/i,Ji=u=>(a,...s)=>({_$litType$:u,strings:a,values:s}),K=Ji(1),va=Ji(2),ya=Ji(3),$t=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Zo=new WeakMap,Zt=Bt.createTreeWalker(Bt,129);ta=(u,a)=>{let s=u.length-1,l=[],h,_=a===2?"<svg>":a===3?"<math>":"",f=ye;for(let g=0;g<s;g++){let y=u[g],b,E,O=-1,D=0;for(;D<y.length&&(f.lastIndex=D,E=f.exec(y),E!==null);)D=f.lastIndex,f===ye?E[1]==="!--"?f=Mo:E[1]!==void 0?f=Ao:E[2]!==void 0?(Ro.test(E[2])&&(h=RegExp("</"+E[2],"g")),f=It):E[3]!==void 0&&(f=It):f===It?E[0]===">"?(f=h??ye,O=-1):E[1]===void 0?O=-2:(O=f.lastIndex-E[2].length,b=E[1],f=E[3]===void 0?It:E[3]==='"'?Io:Oo):f===Io||f===Oo?f=It:f===Mo||f===Ao?f=ye:(f=It,h=void 0);let P=f===It&&u[g+1].startsWith("/>")?" ":"";_+=f===ye?y+Xs:O>=0?(l.push(b),y.slice(0,O)+Bo+y.slice(O)+kt+P):y+kt+(O===-2?g:P)}return[No(u,_+(u[s]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),l]},Le=class u{constructor({strings:a,_$litType$:s},l){let h;this.parts=[];let _=0,f=0,g=a.length-1,y=this.parts,[b,E]=ta(a,s);if(this.el=u.createElement(b,l),Zt.currentNode=this.el.content,s===2||s===3){let O=this.el.content.firstChild;O.replaceWith(...O.childNodes)}for(;(h=Zt.nextNode())!==null&&y.length<g;){if(h.nodeType===1){if(h.hasAttributes())for(let O of h.getAttributeNames())if(O.endsWith(Bo)){let D=E[f++],P=h.getAttribute(O).split(kt),et=/([.?@])?(.*)/.exec(D);y.push({type:1,index:_,name:et[2],strings:P,ctor:et[1]==="."?ji:et[1]==="?"?Vi:et[1]==="@"?Gi:Jt}),h.removeAttribute(O)}else O.startsWith(kt)&&(y.push({type:6,index:_}),h.removeAttribute(O));if(Ro.test(h.tagName)){let O=h.textContent.split(kt),D=O.length-1;if(D>0){h.textContent=Qe?Qe.emptyScript:"";for(let P=0;P<D;P++)h.append(O[P],xe()),Zt.nextNode(),y.push({type:2,index:++_});h.append(O[D],xe())}}}else if(h.nodeType===8)if(h.data===$o)y.push({type:2,index:_});else{let O=-1;for(;(O=h.data.indexOf(kt,O+1))!==-1;)y.push({type:7,index:_}),O+=kt.length-1}_++}}static createElement(a,s){let l=Bt.createElement("template");return l.innerHTML=a,l}};qi=class{constructor(a,s){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){let{el:{content:s},parts:l}=this._$AD,h=(a?.creationScope??Bt).importNode(s,!0);Zt.currentNode=h;let _=Zt.nextNode(),f=0,g=0,y=l[0];for(;y!==void 0;){if(f===y.index){let b;y.type===2?b=new Pe(_,_.nextSibling,this,a):y.type===1?b=new y.ctor(_,y.name,y.strings,this,a):y.type===6&&(b=new Ki(_,this,a)),this._$AV.push(b),y=l[++g]}f!==y?.index&&(_=Zt.nextNode(),f++)}return Zt.currentNode=Bt,h}p(a){let s=0;for(let l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(a,l,s),s+=l.strings.length-2):l._$AI(a[s])),s++}},Pe=class u{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,s,l,h){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=a,this._$AB=s,this._$AM=l,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode,s=this._$AM;return s!==void 0&&a?.nodeType===11&&(a=s.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,s=this){a=Yt(this,a,s),we(a)?a===H||a==null||a===""?(this._$AH!==H&&this._$AR(),this._$AH=H):a!==this._$AH&&a!==$t&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):Qs(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==H&&we(this._$AH)?this._$AA.nextSibling.data=a:this.T(Bt.createTextNode(a)),this._$AH=a}$(a){let{values:s,_$litType$:l}=a,h=typeof l=="number"?this._$AC(a):(l.el===void 0&&(l.el=Le.createElement(No(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===h)this._$AH.p(s);else{let _=new qi(h,this),f=_.u(this.options);_.p(s),this.T(f),this._$AH=_}}_$AC(a){let s=Zo.get(a.strings);return s===void 0&&Zo.set(a.strings,s=new Le(a)),s}k(a){Yi(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,l,h=0;for(let _ of a)h===s.length?s.push(l=new u(this.O(xe()),this.O(xe()),this,this.options)):l=s[h],l._$AI(_),h++;h<s.length&&(this._$AR(l&&l._$AB.nextSibling,h),s.length=h)}_$AR(a=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);a!==this._$AB;){let l=Co(a).nextSibling;Co(a).remove(),a=l}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}},Jt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,s,l,h,_){this.type=1,this._$AH=H,this._$AN=void 0,this.element=a,this.name=s,this._$AM=h,this.options=_,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=H}_$AI(a,s=this,l,h){let _=this.strings,f=!1;if(_===void 0)a=Yt(this,a,s,0),f=!we(a)||a!==this._$AH&&a!==$t,f&&(this._$AH=a);else{let g=a,y,b;for(a=_[0],y=0;y<_.length-1;y++)b=Yt(this,g[l+y],s,y),b===$t&&(b=this._$AH[y]),f||(f=!we(b)||b!==this._$AH[y]),b===H?a=H:a!==H&&(a+=(b??"")+_[y+1]),this._$AH[y]=b}f&&!h&&this.j(a)}j(a){a===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},ji=class extends Jt{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===H?void 0:a}},Vi=class extends Jt{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==H)}},Gi=class extends Jt{constructor(a,s,l,h,_){super(a,s,l,h,_),this.type=5}_$AI(a,s=this){if((a=Yt(this,a,s,0)??H)===$t)return;let l=this._$AH,h=a===H&&l!==H||a.capture!==l.capture||a.once!==l.once||a.passive!==l.passive,_=a!==H&&(l===H||h);h&&this.element.removeEventListener(this.name,this,l),_&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}},Ki=class{constructor(a,s,l){this.element=a,this.type=6,this._$AN=void 0,this._$AM=s,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(a){Yt(this,a)}},ea=be.litHtmlPolyfillSupport;ea?.(Le,Pe),(be.litHtmlVersions??(be.litHtmlVersions=[])).push("3.3.3");Ho=(u,a,s)=>{let l=s?.renderBefore??a,h=l._$litPart$;if(h===void 0){let _=s?.renderBefore??null;l._$litPart$=h=new Pe(a.insertBefore(xe(),_),_,void 0,s??{})}return h._$AI(u),h}});var Te,_t,ia,Do=j(()=>{ve();ve();ti();ti();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Te=globalThis,_t=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;let a=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=a.firstChild),a}update(a){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=Ho(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $t}};_t._$litElement$=!0,_t.finalized=!0,Te.litElementHydrateSupport?.({LitElement:_t});ia=Te.litElementPolyfillSupport;ia?.({LitElement:_t});(Te.litElementVersions??(Te.litElementVersions=[])).push("4.2.2")});var Fo=j(()=>{/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Xi=j(()=>{ve();ti();Do();Fo()});var ei,Uo=j(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ei=u=>(a,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(u,a)}):customElements.define(u,a)}});function Xt(u){return(a,s)=>typeof s=="object"?oa(u,a,s):((l,h,_)=>{let f=h.hasOwnProperty(_);return h.constructor.createProperty(_,l),f?Object.getOwnPropertyDescriptor(h,_):void 0})(u,a,s)}var na,oa,Qi=j(()=>{ve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */na={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:Xe},oa=(u=na,a,s)=>{let{kind:l,metadata:h}=s,_=globalThis.litPropertyMetadata.get(h);if(_===void 0&&globalThis.litPropertyMetadata.set(h,_=new Map),l==="setter"&&((u=Object.create(u)).wrapped=!0),_.set(s.name,u),l==="accessor"){let{name:f}=s;return{set(g){let y=a.get.call(this);a.set.call(this,g),this.requestUpdate(f,y,u,!0,g)},init(g){return g!==void 0&&this.C(f,void 0,u,g),g}}}if(l==="setter"){let{name:f}=s;return function(g){let y=this[f];a.call(this,g),this.requestUpdate(f,y,u,!0,g)}}throw Error("Unsupported decorator location: "+l)}});function Qt(u){return Xt({...u,state:!0,attribute:!1})}var Wo=j(()=>{Qi();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var qo=j(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var te=j(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var jo=j(()=>{te();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Vo=j(()=>{te();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Go=j(()=>{te();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Ko=j(()=>{te();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Yo=j(()=>{te();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var tn=j(()=>{Uo();Qi();Wo();qo();jo();Vo();Go();Ko();Yo()});var Xo=Hs((ni,Jo)=>{/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(u,a){typeof ni=="object"&&typeof Jo<"u"?a(ni):typeof define=="function"&&define.amd?define(["exports"],a):(u=typeof globalThis<"u"?globalThis:u||self,a(u.leaflet={}))})(ni,(function(u){"use strict";var a="1.9.4";function s(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t}var l=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function h(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var _=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++_),t._leaflet_id}function g(t,e,i){var n,o,r,c;return c=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(c,e),n=!0)},r}function y(t,e,i){var n=e[1],o=e[0],r=n-o;return t===n&&i?t:((t-o)%r+r)%r+o}function b(){return!1}function E(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function O(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function D(t){return O(t).split(/\s+/)}function P(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function et(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var hr=/\{ *([\w_ -]+) *\}/g;function sn(t,e){return t.replace(hr,function(i,n){var o=e[n];if(o===void 0)throw new Error("No value provided for variable "+i);return typeof o=="function"&&(o=o(e)),o})}var at=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function ri(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Ee="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function si(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var an=0;function ln(t){var e=+new Date,i=Math.max(0,16-(e-an));return an=e+i,window.setTimeout(t,i)}var ai=window.requestAnimationFrame||si("RequestAnimationFrame")||ln,hn=window.cancelAnimationFrame||si("CancelAnimationFrame")||si("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function J(t,e,i){if(i&&ai===ln)t.call(e);else return ai.call(window,h(t,e))}function nt(t){t&&hn.call(window,t)}var ur={__proto__:null,extend:s,create:l,bind:h,get lastId(){return _},stamp:f,throttle:g,wrapNum:y,falseFn:b,formatNum:E,trim:O,splitWords:D,setOptions:P,getParamString:et,template:sn,isArray:at,indexOf:ri,emptyImageUrl:Ee,requestFn:ai,cancelFn:hn,requestAnimFrame:J,cancelAnimFrame:nt};function mt(){}mt.extend=function(t){var e=function(){P(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=l(i);n.constructor=e,e.prototype=n;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!=="prototype"&&o!=="__super__"&&(e[o]=this[o]);return t.statics&&s(e,t.statics),t.includes&&(cr(t.includes),s.apply(null,[n].concat(t.includes))),s(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?l(i.options):{},s(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var r=0,c=n._initHooks.length;r<c;r++)n._initHooks[r].call(this)}},e},mt.include=function(t){var e=this.prototype.options;return s(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},mt.mergeOptions=function(t){return s(this.prototype.options,t),this},mt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function cr(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=at(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var it={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=D(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=D(t);for(var o=arguments.length===1,r=0,c=t.length;r<c;r++)o?this._off(t[r]):this._off(t[r],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){var n,o,r;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(o=0,r=n.length;o<r;o++)n[o].fn=b;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var c=this._listens(t,e,i);if(c!==!1){var d=n[c];this._firingCount&&(d.fn=b,this._events[t]=n=n.slice()),n.splice(c,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=s({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var r=0,c=o.length;r<c;r++){var d=o[r],p=d.fn;d.once&&this.off(t,p,d.ctx),p.call(d.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var o=e;typeof e!="function"&&(n=!!e,o=void 0,i=void 0);var r=this._events&&this._events[t];if(r&&r.length&&this._listens(t,o,i)!==!1)return!0;if(n){for(var c in this._eventParents)if(this._eventParents[c].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,r=n.length;o<r;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=D(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,s({layer:t.target,propagatedFrom:t.target},t),!0)}};it.addEventListener=it.on,it.removeEventListener=it.clearAllEventListeners=it.off,it.addOneTimeEventListener=it.once,it.fireEvent=it.fire,it.hasEventListeners=it.listens;var ee=mt.extend(it);function S(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var un=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};S.prototype={clone:function(){return new S(this.x,this.y)},add:function(t){return this.clone()._add(T(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(T(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new S(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new S(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=un(this.x),this.y=un(this.y),this},distanceTo:function(t){t=T(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=T(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=T(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function T(t,e,i){return t instanceof S?t:at(t)?new S(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new S(t.x,t.y):new S(t,e,i)}function R(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}R.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof S||typeof t[0]=="number"||"x"in t)e=i=T(t);else if(t=X(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return T((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return T(this.min.x,this.max.y)},getTopRight:function(){return T(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof S?t=T(t):t=X(t),t instanceof R?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=X(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>=e.x&&n.x<=i.x,c=o.y>=e.y&&n.y<=i.y;return r&&c},overlaps:function(t){t=X(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>e.x&&n.x<i.x,c=o.y>e.y&&n.y<i.y;return r&&c},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return X(T(e.x-n,e.y-o),T(i.x+n,i.y+o))},equals:function(t){return t?(t=X(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function X(t,e){return!t||t instanceof R?t:new R(t,e)}function Q(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}Q.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,o;if(t instanceof Z)n=t,o=t;else if(t instanceof Q){if(n=t._southWest,o=t._northEast,!n||!o)return this}else return t?this.extend(M(t)||U(t)):this;return!e&&!i?(this._southWest=new Z(n.lat,n.lng),this._northEast=new Z(o.lat,o.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(o.lat,i.lat),i.lng=Math.max(o.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new Q(new Z(e.lat-n,e.lng-o),new Z(i.lat+n,i.lng+o))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Z||"lat"in t?t=M(t):t=U(t);var e=this._southWest,i=this._northEast,n,o;return t instanceof Q?(n=t.getSouthWest(),o=t.getNorthEast()):n=o=t,n.lat>=e.lat&&o.lat<=i.lat&&n.lng>=e.lng&&o.lng<=i.lng},intersects:function(t){t=U(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&n.lat<=i.lat,c=o.lng>=e.lng&&n.lng<=i.lng;return r&&c},overlaps:function(t){t=U(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&n.lat<i.lat,c=o.lng>e.lng&&n.lng<i.lng;return r&&c},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=U(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function U(t,e){return t instanceof Q?t:new Q(t,e)}function Z(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}Z.prototype={equals:function(t,e){if(!t)return!1;t=M(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+E(this.lat,t)+", "+E(this.lng,t)+")"},distanceTo:function(t){return Lt.distance(this,M(t))},wrap:function(){return Lt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return U([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function M(t,e,i){return t instanceof Z?t:at(t)&&typeof t[0]!="object"?t.length===3?new Z(t[0],t[1],t[2]):t.length===2?new Z(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Z(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Z(t,e,i)}var gt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new R(n,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?y(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?y(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Z(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(n===0&&o===0)return t;var r=t.getSouthWest(),c=t.getNorthEast(),d=new Z(r.lat-n,r.lng-o),p=new Z(c.lat-n,c.lng-o);return new Q(d,p)}},Lt=s({},gt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,r=Math.sin((e.lat-t.lat)*i/2),c=Math.sin((e.lng-t.lng)*i/2),d=r*r+Math.cos(n)*Math.cos(o)*c*c,p=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d));return this.R*p}}),cn=6378137,li={R:cn,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new S(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new Z((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=cn*Math.PI;return new R([-t,-t],[t,t])})()};function hi(t,e,i,n){if(at(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}hi.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new S((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function ie(t,e,i,n){return new hi(t,e,i,n)}var ui=s({},Lt,{code:"EPSG:3857",projection:li,transformation:(function(){var t=.5/(Math.PI*li.R);return ie(t,.5,-t,.5)})()}),dr=s({},ui,{code:"EPSG:900913"});function dn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fn(t,e){var i="",n,o,r,c,d,p;for(n=0,r=t.length;n<r;n++){for(d=t[n],o=0,c=d.length;o<c;o++)p=d[o],i+=(o?"L":"M")+p.x+" "+p.y;i+=e?x.svg?"z":"x":""}return i||"M0 0"}var ci=document.documentElement.style,Ce="ActiveXObject"in window,fr=Ce&&!document.addEventListener,pn="msLaunchUri"in navigator&&!("documentMode"in document),di=ut("webkit"),_n=ut("android"),mn=ut("android 2")||ut("android 3"),pr=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),_r=_n&&ut("Google")&&pr<537&&!("AudioNode"in window),fi=!!window.opera,gn=!pn&&ut("chrome"),vn=ut("gecko")&&!di&&!fi&&!Ce,mr=!gn&&ut("safari"),yn=ut("phantom"),bn="OTransition"in ci,gr=navigator.platform.indexOf("Win")===0,xn=Ce&&"transition"in ci,pi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!mn,wn="MozPerspective"in ci,vr=!window.L_DISABLE_3D&&(xn||pi||wn)&&!bn&&!yn,ne=typeof orientation<"u"||ut("mobile"),yr=ne&&di,br=ne&&pi,Ln=!window.PointerEvent&&window.MSPointerEvent,Pn=!!(window.PointerEvent||Ln),Tn="ontouchstart"in window||!!window.TouchEvent,xr=!window.L_NO_TOUCH&&(Tn||Pn),wr=ne&&fi,Lr=ne&&vn,Pr=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Tr=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",b,e),window.removeEventListener("testPassiveEventSupport",b,e)}catch{}return t})(),Sr=(function(){return!!document.createElement("canvas").getContext})(),_i=!!(document.createElementNS&&dn("svg").createSVGRect),kr=!!_i&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Er=!_i&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Cr=navigator.platform.indexOf("Mac")===0,zr=navigator.platform.indexOf("Linux")===0;function ut(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var x={ie:Ce,ielt9:fr,edge:pn,webkit:di,android:_n,android23:mn,androidStock:_r,opera:fi,chrome:gn,gecko:vn,safari:mr,phantom:yn,opera12:bn,win:gr,ie3d:xn,webkit3d:pi,gecko3d:wn,any3d:vr,mobile:ne,mobileWebkit:yr,mobileWebkit3d:br,msPointer:Ln,pointer:Pn,touch:xr,touchNative:Tn,mobileOpera:wr,mobileGecko:Lr,retina:Pr,passiveEvents:Tr,canvas:Sr,svg:_i,vml:Er,inlineSvg:kr,mac:Cr,linux:zr},Sn=x.msPointer?"MSPointerDown":"pointerdown",kn=x.msPointer?"MSPointerMove":"pointermove",En=x.msPointer?"MSPointerUp":"pointerup",Cn=x.msPointer?"MSPointerCancel":"pointercancel",mi={touchstart:Sn,touchmove:kn,touchend:En,touchcancel:Cn},zn={touchstart:Br,touchmove:ze,touchend:ze,touchcancel:ze},Dt={},Mn=!1;function Mr(t,e,i){return e==="touchstart"&&Zr(),zn[e]?(i=zn[e].bind(this,i),t.addEventListener(mi[e],i,!1),i):(console.warn("wrong event specified:",e),b)}function Ar(t,e,i){if(!mi[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(mi[e],i,!1)}function Or(t){Dt[t.pointerId]=t}function Ir(t){Dt[t.pointerId]&&(Dt[t.pointerId]=t)}function An(t){delete Dt[t.pointerId]}function Zr(){Mn||(document.addEventListener(Sn,Or,!0),document.addEventListener(kn,Ir,!0),document.addEventListener(En,An,!0),document.addEventListener(Cn,An,!0),Mn=!0)}function ze(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Dt)e.touches.push(Dt[i]);e.changedTouches=[e],t(e)}}function Br(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&G(e),ze(t,e)}function $r(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Rr=200;function Nr(t,e){t.addEventListener("dblclick",e);var i=0,n;function o(r){if(r.detail!==1){n=r.detail;return}if(!(r.pointerType==="mouse"||r.sourceCapabilities&&!r.sourceCapabilities.firesTouchEvents)){var c=$n(r);if(!(c.some(function(p){return p instanceof HTMLLabelElement&&p.attributes.for})&&!c.some(function(p){return p instanceof HTMLInputElement||p instanceof HTMLSelectElement}))){var d=Date.now();d-i<=Rr?(n++,n===2&&e($r(r))):n=1,i=d}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function Hr(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var gi=Oe(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oe=Oe(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),On=oe==="webkitTransition"||oe==="OTransition"?oe+"End":"transitionend";function In(t){return typeof t=="string"?document.getElementById(t):t}function re(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function I(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function N(t){var e=t.parentNode;e&&e.removeChild(t)}function Me(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ft(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Ut(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function vi(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Ae(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function C(t,e){if(t.classList!==void 0)for(var i=D(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!vi(t,e)){var r=Ae(t);yi(t,(r?r+" ":"")+e)}}function F(t,e){t.classList!==void 0?t.classList.remove(e):yi(t,O((" "+Ae(t)+" ").replace(" "+e+" "," ")))}function yi(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Ae(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function ot(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Dr(t,e)}function Dr(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Oe(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ct(t,e,i){var n=e||new S(0,0);t.style[gi]=(x.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function W(t,e){t._leaflet_pos=e,x.any3d?Ct(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function zt(t){return t._leaflet_pos||new S(0,0)}var se,ae,bi;if("onselectstart"in document)se=function(){k(window,"selectstart",G)},ae=function(){$(window,"selectstart",G)};else{var le=Oe(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);se=function(){if(le){var t=document.documentElement.style;bi=t[le],t[le]="none"}},ae=function(){le&&(document.documentElement.style[le]=bi,bi=void 0)}}function xi(){k(window,"dragstart",G)}function wi(){$(window,"dragstart",G)}var Ie,Li;function Pi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Ze(),Ie=t,Li=t.style.outlineStyle,t.style.outlineStyle="none",k(window,"keydown",Ze))}function Ze(){Ie&&(Ie.style.outlineStyle=Li,Ie=void 0,Li=void 0,$(window,"keydown",Ze))}function Zn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Ti(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Fr={__proto__:null,TRANSFORM:gi,TRANSITION:oe,TRANSITION_END:On,get:In,getStyle:re,create:I,remove:N,empty:Me,toFront:Ft,toBack:Ut,hasClass:vi,addClass:C,removeClass:F,setClass:yi,getClass:Ae,setOpacity:ot,testProp:Oe,setTransform:Ct,setPosition:W,getPosition:zt,get disableTextSelection(){return se},get enableTextSelection(){return ae},disableImageDrag:xi,enableImageDrag:wi,preventOutline:Pi,restoreOutline:Ze,getSizedParentNode:Zn,getScale:Ti};function k(t,e,i,n){if(e&&typeof e=="object")for(var o in e)ki(t,o,e[o],i);else{e=D(e);for(var r=0,c=e.length;r<c;r++)ki(t,e[r],i,n)}return this}var ct="_leaflet_events";function $(t,e,i,n){if(arguments.length===1)Bn(t),delete t[ct];else if(e&&typeof e=="object")for(var o in e)Ei(t,o,e[o],i);else if(e=D(e),arguments.length===2)Bn(t,function(d){return ri(e,d)!==-1});else for(var r=0,c=e.length;r<c;r++)Ei(t,e[r],i,n);return this}function Bn(t,e){for(var i in t[ct]){var n=i.split(/\d/)[0];(!e||e(n))&&Ei(t,n,null,null,i)}}var Si={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ki(t,e,i,n){var o=e+f(i)+(n?"_"+f(n):"");if(t[ct]&&t[ct][o])return this;var r=function(d){return i.call(n||t,d||window.event)},c=r;!x.touchNative&&x.pointer&&e.indexOf("touch")===0?r=Mr(t,e,r):x.touch&&e==="dblclick"?r=Nr(t,r):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Si[e]||e,r,x.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(r=function(d){d=d||window.event,zi(t,d)&&c(d)},t.addEventListener(Si[e],r,!1)):t.addEventListener(e,c,!1):t.attachEvent("on"+e,r),t[ct]=t[ct]||{},t[ct][o]=r}function Ei(t,e,i,n,o){o=o||e+f(i)+(n?"_"+f(n):"");var r=t[ct]&&t[ct][o];if(!r)return this;!x.touchNative&&x.pointer&&e.indexOf("touch")===0?Ar(t,e,r):x.touch&&e==="dblclick"?Hr(t,r):"removeEventListener"in t?t.removeEventListener(Si[e]||e,r,!1):t.detachEvent("on"+e,r),t[ct][o]=null}function Mt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Ci(t){return ki(t,"wheel",Mt),this}function he(t){return k(t,"mousedown touchstart dblclick contextmenu",Mt),t._leaflet_disable_click=!0,this}function G(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function At(t){return G(t),Mt(t),this}function $n(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Rn(t,e){if(!e)return new S(t.clientX,t.clientY);var i=Ti(e),n=i.boundingClientRect;return new S((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Ur=x.linux&&x.chrome?window.devicePixelRatio:x.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Nn(t){return x.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Ur:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function zi(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Wr={__proto__:null,on:k,off:$,stopPropagation:Mt,disableScrollPropagation:Ci,disableClickPropagation:he,preventDefault:G,stop:At,getPropagationPath:$n,getMousePosition:Rn,getWheelDelta:Nn,isExternalTarget:zi,addListener:k,removeListener:$},Hn=ee.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=zt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=J(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),W(this._el,i),this.fire("step")},_complete:function(){nt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),A=ee.extend({options:{crs:ui,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=P(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(M(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oe&&x.any3d&&!x.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),k(this._proxy,On,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(M(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=s({animate:i.animate},i.zoom),i.pan=s({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),r=t instanceof S?t:this.latLngToContainerPoint(t),c=r.subtract(o).multiplyBy(1-1/n),d=this.containerPointToLatLng(o.add(c));return this.setView(d,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():U(t);var i=T(e.paddingTopLeft||e.padding||[0,0]),n=T(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if(o=typeof e.maxZoom=="number"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var r=n.subtract(i).divideBy(2),c=this.project(t.getSouthWest(),o),d=this.project(t.getNorthEast(),o),p=this.unproject(c.add(d).divideBy(2).add(r),o);return{center:p,zoom:o}},fitBounds:function(t,e){if(t=U(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=T(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Hn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){C(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!x.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),c=this._zoom;t=M(t),e=e===void 0?c:e;var d=Math.max(r.x,r.y),p=d*this.getZoomScale(c,e),m=o.distanceTo(n)||1,v=1.42,w=v*v;function z(q){var Ve=q?-1:1,As=q?p:d,Os=p*p-d*d+Ve*w*w*m*m,Is=2*As*w*m,Di=Os/Is,xo=Math.sqrt(Di*Di+1)-Di,Zs=xo<1e-9?-18:Math.log(xo);return Zs}function Y(q){return(Math.exp(q)-Math.exp(-q))/2}function V(q){return(Math.exp(q)+Math.exp(-q))/2}function st(q){return Y(q)/V(q)}var tt=z(0);function Kt(q){return d*(V(tt)/V(tt+v*q))}function Es(q){return d*(V(tt)*st(tt+v*q)-Y(tt))/w}function Cs(q){return 1-Math.pow(1-q,1.5)}var zs=Date.now(),yo=(z(1)-tt)/v,Ms=i.duration?1e3*i.duration:1e3*yo*.8;function bo(){var q=(Date.now()-zs)/Ms,Ve=Cs(q)*yo;q<=1?(this._flyToFrame=J(bo,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(Es(Ve)/m)),c),this.getScaleZoom(d/Kt(Ve),c),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),bo.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=U(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,U(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=T(e.paddingTopLeft||e.padding||[0,0]),n=T(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),c=this.getPixelBounds(),d=X([c.min.add(i),c.max.subtract(n)]),p=d.getSize();if(!d.contains(r)){this._enforcingBounds=!0;var m=r.subtract(d.getCenter()),v=d.extend(r).getSize().subtract(p);o.x+=m.x<0?-v.x:v.x,o.y+=m.y<0?-v.y:v.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=s({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),o=i.divideBy(2).round(),r=n.subtract(o);return!r.x&&!r.y?this:(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=s({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=h(this._handleGeolocationResponse,this),i=h(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Z(e,i),o=n.toBounds(t.coords.accuracy*2),r=this._locateOptions;if(r.setView){var c=this.getBoundsZoom(o);this.setView(n,r.maxZoom?Math.min(c,r.maxZoom):c)}var d={latlng:n,bounds:o,timestamp:t.timestamp};for(var p in t.coords)typeof t.coords[p]=="number"&&(d[p]=t.coords[p]);this.fire("locationfound",d)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),N(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(nt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)N(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=I("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new Q(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=U(t),i=T(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),c=t.getNorthWest(),d=t.getSouthEast(),p=this.getSize().subtract(i),m=X(this.project(d,n),this.project(c,n)).getSize(),v=x.any3d?this.options.zoomSnap:1,w=p.x/m.x,z=p.y/m.y,Y=e?Math.max(w,z):Math.min(w,z);return n=this.getScaleZoom(Y,n),v&&(n=Math.round(n/(v/100))*(v/100),n=e?Math.ceil(n/v)*v:Math.floor(n/v)*v),Math.max(o,Math.min(r,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new S(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new R(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(M(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(T(t),e)},layerPointToLatLng:function(t){var e=T(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(M(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(M(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(U(t))},distance:function(t,e){return this.options.crs.distance(M(t),M(e))},containerPointToLayerPoint:function(t){return T(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return T(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(T(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(M(t)))},mouseEventToContainerPoint:function(t){return Rn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=In(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");k(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&x.any3d,C(t,"leaflet-container"+(x.touch?" leaflet-touch":"")+(x.retina?" leaflet-retina":"")+(x.ielt9?" leaflet-oldie":"")+(x.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=re(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),W(this._mapPane,new S(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(C(t.markerPane,"leaflet-zoom-hide"),C(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){W(this._mapPane,new S(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return nt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){W(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?$:k;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),x.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){nt(this._resizeRequest),this._resizeRequest=J(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,o=e==="mouseout"||e==="mouseover",r=t.target||t.srcElement,c=!1;r;){if(n=this._targets[f(r)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){c=!0;break}if(n&&n.listens(e,!0)&&(o&&!zi(r,t)||(i.push(n),o))||r===this._container)break;r=r.parentNode}return!i.length&&!c&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Pi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=s({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var o=this._findEventTargets(t,e);if(i){for(var r=[],c=0;c<i.length;c++)i[c].listens(e,!0)&&r.push(i[c]);o=r.concat(o)}if(o.length){e==="contextmenu"&&G(t);var d=o[0],p={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var m=d.getLatLng&&(!d._radius||d._radius<=10);p.containerPoint=m?this.latLngToContainerPoint(d.getLatLng()):this.mouseEventToContainerPoint(t),p.layerPoint=this.containerPointToLayerPoint(p.containerPoint),p.latlng=m?d.getLatLng():this.layerPointToLatLng(p.layerPoint)}for(c=0;c<o.length;c++)if(o[c].fire(e,p,!0),p.originalEvent._stopped||o[c].options.bubblingMouseEvents===!1&&ri(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return zt(this._mapPane)||new S(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return X([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),r=new R(n.subtract(o),n.add(o)),c=this._getBoundsOffset(r,i,e);return Math.abs(c.x)<=1&&Math.abs(c.y)<=1?t:this.unproject(n.add(c),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new R(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=X(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),r=n.max.subtract(t.max),c=this._rebound(o.x,-r.x),d=this._rebound(o.y,-r.y);return new S(c,d)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=x.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){F(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=I("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=gi,n=this._proxy.style[i];Ct(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){N(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ct(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(o)?!1:(J(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,C(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&F(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function qr(t,e){return new A(t,e)}var lt=mt.extend({options:{position:"topright"},initialize:function(t){P(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return C(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(N(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ue=function(t){return new lt(t)};A.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=I("div",e+"control-container",this._container);function n(o,r){var c=e+o+" "+e+r;t[o+r]=I("div",c,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)N(this._controlCorners[t]);N(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Dn=lt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){P(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return lt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){C(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(C(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):F(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return F(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=I("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),he(e),Ci(e);var n=this._section=I("section",t+"-list");i&&(this._map.on("click",this.collapse,this),k(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=I("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),k(o,{keydown:function(r){r.keyCode===13&&this._expandSafely()},click:function(r){G(r),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=I("div",t+"-base",n),this._separator=I("div",t+"-separator",n),this._overlaysList=I("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(h(function(n,o){return this.options.sortFunction(n.layer,o.layer,n.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Me(this._baseLayersList),Me(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+f(this),i),this._layerControlInputs.push(n),n.layerId=f(t.layer),k(n,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var r=document.createElement("span");e.appendChild(r),r.appendChild(n),r.appendChild(o);var c=t.overlay?this._overlaysList:this._baseLayersList;return c.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],o=[];this._handlingClick=!0;for(var r=t.length-1;r>=0;r--)e=t[r],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||o.push(i);for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<n.length;r++)this._map.hasLayer(n[r])||this._map.addLayer(n[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,k(t,"click",G),this.expand();var e=this;setTimeout(function(){$(t,"click",G),e._preventClick=!1})}}),jr=function(t,e,i){return new Dn(t,e,i)},Mi=lt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=I("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var r=I("a",i,n);return r.innerHTML=t,r.href="#",r.title=e,r.setAttribute("role","button"),r.setAttribute("aria-label",e),he(r),k(r,"click",At),k(r,"click",o,this),k(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";F(this._zoomInButton,e),F(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(C(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(C(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});A.mergeOptions({zoomControl:!0}),A.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Mi,this.addControl(this.zoomControl))});var Vr=function(t){return new Mi(t)},Fn=lt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=I("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=I("div",e,i)),t.imperial&&(this._iScale=I("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,o;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+" ft",o/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),Gr=function(t){return new Fn(t)},Kr='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Ai=lt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(x.inlineSvg?Kr+" ":"")+"Leaflet</a>"},initialize:function(t){P(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=I("div","leaflet-control-attribution"),he(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});A.mergeOptions({attributionControl:!0}),A.addInitHook(function(){this.options.attributionControl&&new Ai().addTo(this)});var Yr=function(t){return new Ai(t)};lt.Layers=Dn,lt.Zoom=Mi,lt.Scale=Fn,lt.Attribution=Ai,ue.layers=jr,ue.zoom=Vr,ue.scale=Gr,ue.attribution=Yr;var dt=mt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});dt.addTo=function(t,e){return t.addHandler(e,this),this};var Jr={Events:it},Un=x.touch?"touchstart mousedown":"mousedown",Pt=ee.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){P(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(k(this._dragStartTarget,Un,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pt._dragging===this&&this.finishDrag(!0),$(this._dragStartTarget,Un,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!vi(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Pt._dragging===this&&this.finishDrag();return}if(!(Pt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Pt._dragging=this,this._preventOutline&&Pi(this._element),xi(),se(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=Zn(this._element);this._startPoint=new S(e.clientX,e.clientY),this._startPos=zt(this._element),this._parentScale=Ti(i);var n=t.type==="mousedown";k(document,n?"mousemove":"touchmove",this._onMove,this),k(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new S(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,G(t),this._moved||(this.fire("dragstart"),this._moved=!0,C(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),C(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),W(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){F(document.body,"leaflet-dragging"),this._lastTarget&&(F(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),$(document,"mousemove touchmove",this._onMove,this),$(document,"mouseup touchend touchcancel",this._onUp,this),wi(),ae();var e=this._moved&&this._moving;this._moving=!1,Pt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Wn(t,e,i){var n,o=[1,4,2,8],r,c,d,p,m,v,w,z;for(r=0,v=t.length;r<v;r++)t[r]._code=Ot(t[r],e);for(d=0;d<4;d++){for(w=o[d],n=[],r=0,v=t.length,c=v-1;r<v;c=r++)p=t[r],m=t[c],p._code&w?m._code&w||(z=Be(m,p,w,e,i),z._code=Ot(z,e),n.push(z)):(m._code&w&&(z=Be(m,p,w,e,i),z._code=Ot(z,e),n.push(z)),n.push(p));t=n}return t}function qn(t,e){var i,n,o,r,c,d,p,m,v;if(!t||t.length===0)throw new Error("latlngs not passed");rt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var w=M([0,0]),z=U(t),Y=z.getNorthWest().distanceTo(z.getSouthWest())*z.getNorthEast().distanceTo(z.getNorthWest());Y<1700&&(w=Oi(t));var V=t.length,st=[];for(i=0;i<V;i++){var tt=M(t[i]);st.push(e.project(M([tt.lat-w.lat,tt.lng-w.lng])))}for(d=p=m=0,i=0,n=V-1;i<V;n=i++)o=st[i],r=st[n],c=o.y*r.x-r.y*o.x,p+=(o.x+r.x)*c,m+=(o.y+r.y)*c,d+=c*3;d===0?v=st[0]:v=[p/d,m/d];var Kt=e.unproject(T(v));return M([Kt.lat+w.lat,Kt.lng+w.lng])}function Oi(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var r=M(t[o]);e+=r.lat,i+=r.lng,n++}return M([e/n,i/n])}var Xr={__proto__:null,clipPolygon:Wn,polygonCenter:qn,centroid:Oi};function jn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=es(t,i),t=ts(t,i),t}function Vn(t,e,i){return Math.sqrt(ce(t,e,i,!0))}function Qr(t,e,i){return ce(t,e,i)}function ts(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,o=new n(i);o[0]=o[i-1]=1,Ii(t,o,e,0,i-1);var r,c=[];for(r=0;r<i;r++)o[r]&&c.push(t[r]);return c}function Ii(t,e,i,n,o){var r=0,c,d,p;for(d=n+1;d<=o-1;d++)p=ce(t[d],t[n],t[o],!0),p>r&&(c=d,r=p);r>i&&(e[c]=1,Ii(t,e,i,n,c),Ii(t,e,i,c,o))}function es(t,e){for(var i=[t[0]],n=1,o=0,r=t.length;n<r;n++)is(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<r-1&&i.push(t[r-1]),i}var Gn;function Kn(t,e,i,n,o){var r=n?Gn:Ot(t,i),c=Ot(e,i),d,p,m;for(Gn=c;;){if(!(r|c))return[t,e];if(r&c)return!1;d=r||c,p=Be(t,e,d,i,o),m=Ot(p,i),d===r?(t=p,r=m):(e=p,c=m)}}function Be(t,e,i,n,o){var r=e.x-t.x,c=e.y-t.y,d=n.min,p=n.max,m,v;return i&8?(m=t.x+r*(p.y-t.y)/c,v=p.y):i&4?(m=t.x+r*(d.y-t.y)/c,v=d.y):i&2?(m=p.x,v=t.y+c*(p.x-t.x)/r):i&1&&(m=d.x,v=t.y+c*(d.x-t.x)/r),new S(m,v,o)}function Ot(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function is(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function ce(t,e,i,n){var o=e.x,r=e.y,c=i.x-o,d=i.y-r,p=c*c+d*d,m;return p>0&&(m=((t.x-o)*c+(t.y-r)*d)/p,m>1?(o=i.x,r=i.y):m>0&&(o+=c*m,r+=d*m)),c=t.x-o,d=t.y-r,n?c*c+d*d:new S(o,r)}function rt(t){return!at(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Yn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),rt(t)}function Jn(t,e){var i,n,o,r,c,d,p,m;if(!t||t.length===0)throw new Error("latlngs not passed");rt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var v=M([0,0]),w=U(t),z=w.getNorthWest().distanceTo(w.getSouthWest())*w.getNorthEast().distanceTo(w.getNorthWest());z<1700&&(v=Oi(t));var Y=t.length,V=[];for(i=0;i<Y;i++){var st=M(t[i]);V.push(e.project(M([st.lat-v.lat,st.lng-v.lng])))}for(i=0,n=0;i<Y-1;i++)n+=V[i].distanceTo(V[i+1])/2;if(n===0)m=V[0];else for(i=0,r=0;i<Y-1;i++)if(c=V[i],d=V[i+1],o=c.distanceTo(d),r+=o,r>n){p=(r-n)/o,m=[d.x-p*(d.x-c.x),d.y-p*(d.y-c.y)];break}var tt=e.unproject(T(m));return M([tt.lat+v.lat,tt.lng+v.lng])}var ns={__proto__:null,simplify:jn,pointToSegmentDistance:Vn,closestPointOnSegment:Qr,clipSegment:Kn,_getEdgeIntersection:Be,_getBitCode:Ot,_sqClosestPointOnSegment:ce,isFlat:rt,_flat:Yn,polylineCenter:Jn},Zi={project:function(t){return new S(t.lng,t.lat)},unproject:function(t){return new Z(t.y,t.x)},bounds:new R([-180,-90],[180,90])},Bi={R:6378137,R_MINOR:6356752314245179e-9,bounds:new R([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),c=r*Math.sin(n),d=Math.tan(Math.PI/4-n/2)/Math.pow((1-c)/(1+c),r/2);return n=-i*Math.log(Math.max(d,1e-10)),new S(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,o=Math.sqrt(1-n*n),r=Math.exp(-t.y/i),c=Math.PI/2-2*Math.atan(r),d=0,p=.1,m;d<15&&Math.abs(p)>1e-7;d++)m=o*Math.sin(c),m=Math.pow((1-m)/(1+m),o/2),p=Math.PI/2-2*Math.atan(r*m)-c,c+=p;return new Z(c*e,t.x*e/i)}},os={__proto__:null,LonLat:Zi,Mercator:Bi,SphericalMercator:li},rs=s({},Lt,{code:"EPSG:3395",projection:Bi,transformation:(function(){var t=.5/(Math.PI*Bi.R);return ie(t,.5,-t,.5)})()}),Xn=s({},Lt,{code:"EPSG:4326",projection:Zi,transformation:ie(1/180,1,-1/180,.5)}),ss=s({},gt,{projection:Zi,transformation:ie(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});gt.Earth=Lt,gt.EPSG3395=rs,gt.EPSG3857=ui,gt.EPSG900913=dr,gt.EPSG4326=Xn,gt.Simple=ss;var ht=ee.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});A.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?at(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Wt=ht.extend({initialize:function(t,e){P(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),as=function(t,e){return new Wt(t,e)},vt=Wt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Wt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Wt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new Q;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),ls=function(t,e){return new vt(t,e)},qt=mt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){P(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var o=T(n),r=T(e==="shadow"&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return x.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function hs(t){return new qt(t)}var de=qt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof de.imagePath!="string"&&(de.imagePath=this._detectIconPath()),(this.options.imagePath||de.imagePath)+qt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,o){var r=n.exec(i);return r&&r[o]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=I("div","leaflet-default-icon-path",document.body),e=re(t,"background-image")||re(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Qn=dt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Pt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),C(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&F(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=zt(e._icon),c=i.getPixelBounds(),d=i.getPixelOrigin(),p=X(c.min._subtract(d).add(o),c.max._subtract(d).subtract(o));if(!p.contains(r)){var m=T((Math.max(p.max.x,r.x)-p.max.x)/(c.max.x-p.max.x)-(Math.min(p.min.x,r.x)-p.min.x)/(c.min.x-p.min.x),(Math.max(p.max.y,r.y)-p.max.y)/(c.max.y-p.max.y)-(Math.min(p.min.y,r.y)-p.min.y)/(c.min.y-p.min.y)).multiplyBy(n);i.panBy(m,{animate:!1}),this._draggable._newPos._add(m),this._draggable._startPos._add(m),W(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=J(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(nt(this._panRequest),this._panRequest=J(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=zt(e._icon),o=e._map.layerPointToLatLng(n);i&&W(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){nt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),$e=ht.extend({options:{icon:new de,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){P(this,e),this._latlng=M(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=M(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),C(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(C(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&$(this._icon,"focus",this._panOnFocus,this),N(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&N(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&W(this._icon,t),this._shadow&&W(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(C(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Qn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Qn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&ot(this._icon,t),this._shadow&&ot(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?T(e.iconSize):T(0,0),n=e.iconAnchor?T(e.iconAnchor):T(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function us(t,e){return new $e(t,e)}var Tt=ht.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return P(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Re=Tt.extend({options:{fill:!0,radius:10},initialize:function(t,e){P(this,e),this._latlng=M(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=M(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Tt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new R(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function cs(t,e){return new Re(t,e)}var $i=Re.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=s({},i,{radius:e})),P(this,e),this._latlng=M(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new Q(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Tt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Lt.distance){var o=Math.PI/180,r=this._mRadius/Lt.R/o,c=i.project([e+r,t]),d=i.project([e-r,t]),p=c.add(d).divideBy(2),m=i.unproject(p).lat,v=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(m*o))/(Math.cos(e*o)*Math.cos(m*o)))/o;(isNaN(v)||v===0)&&(v=r/Math.cos(Math.PI/180*e)),this._point=p.subtract(i.getPixelOrigin()),this._radius=isNaN(v)?0:p.x-i.project([m,t-v]).x,this._radiusY=p.y-c.y}else{var w=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(w).x}this._updateBounds()}});function ds(t,e,i){return new $i(t,e,i)}var yt=Tt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){P(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ce,o,r,c=0,d=this._parts.length;c<d;c++)for(var p=this._parts[c],m=1,v=p.length;m<v;m++){o=p[m-1],r=p[m];var w=n(t,o,r,!0);w<e&&(e=w,i=n(t,o,r))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Jn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=M(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new Q,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return rt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=rt(t),n=0,o=t.length;n<o;n++)i?(e[n]=M(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new R;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new S(t,t);this._rawPxBounds&&(this._pxBounds=new R([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof Z,o=t.length,r,c;if(n){for(c=[],r=0;r<o;r++)c[r]=this._map.latLngToLayerPoint(t[r]),i.extend(c[r]);e.push(c)}else for(r=0;r<o;r++)this._projectLatlngs(t[r],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,o,r,c,d,p;for(i=0,o=0,r=this._rings.length;i<r;i++)for(p=this._rings[i],n=0,c=p.length;n<c-1;n++)d=Kn(p[n],p[n+1],t,n,!0),d&&(e[o]=e[o]||[],e[o].push(d[0]),(d[1]!==p[n+1]||n===c-2)&&(e[o].push(d[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=jn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,r,c,d,p=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,r=this._parts.length;i<r;i++)for(d=this._parts[i],n=0,c=d.length,o=c-1;n<c;o=n++)if(!(!e&&n===0)&&Vn(t,d[o],d[n])<=p)return!0;return!1}});function fs(t,e){return new yt(t,e)}yt._flat=Yn;var jt=yt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return qn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=yt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Z&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){yt.prototype._setLatLngs.call(this,t),rt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return rt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new S(e,e);if(t=new R(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,o=this._rings.length,r;n<o;n++)r=Wn(this._rings[n],t,!0),r.length&&this._parts.push(r)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,o,r,c,d,p,m;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(r=0,p=this._parts.length;r<p;r++)for(i=this._parts[r],c=0,m=i.length,d=m-1;c<m;d=c++)n=i[c],o=i[d],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(e=!e);return e||yt.prototype._containsPoint.call(this,t,!0)}});function ps(t,e){return new jt(t,e)}var bt=vt.extend({initialize:function(t,e){P(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=at(t)?t:t.features,i,n,o;if(e){for(i=0,n=e.length;i<n;i++)o=e[i],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var c=Ne(t,r);return c?(c.feature=Fe(t),c.defaultOptions=c.options,this.resetStyle(c),r.onEachFeature&&r.onEachFeature(t,c),this.addLayer(c)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=s({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Ne(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,o=[],r=e&&e.pointToLayer,c=e&&e.coordsToLatLng||Ri,d,p,m,v;if(!n&&!i)return null;switch(i.type){case"Point":return d=c(n),to(r,t,d,e);case"MultiPoint":for(m=0,v=n.length;m<v;m++)d=c(n[m]),o.push(to(r,t,d,e));return new vt(o);case"LineString":case"MultiLineString":return p=He(n,i.type==="LineString"?0:1,c),new yt(p,e);case"Polygon":case"MultiPolygon":return p=He(n,i.type==="Polygon"?1:2,c),new jt(p,e);case"GeometryCollection":for(m=0,v=i.geometries.length;m<v;m++){var w=Ne({geometry:i.geometries[m],type:"Feature",properties:t.properties},e);w&&o.push(w)}return new vt(o);case"FeatureCollection":for(m=0,v=i.features.length;m<v;m++){var z=Ne(i.features[m],e);z&&o.push(z)}return new vt(o);default:throw new Error("Invalid GeoJSON object.")}}function to(t,e,i,n){return t?t(e,i):new $e(i,n&&n.markersInheritOptions&&n)}function Ri(t){return new Z(t[1],t[0],t[2])}function He(t,e,i){for(var n=[],o=0,r=t.length,c;o<r;o++)c=e?He(t[o],e-1,i):(i||Ri)(t[o]),n.push(c);return n}function Ni(t,e){return t=M(t),t.alt!==void 0?[E(t.lng,e),E(t.lat,e),E(t.alt,e)]:[E(t.lng,e),E(t.lat,e)]}function De(t,e,i,n){for(var o=[],r=0,c=t.length;r<c;r++)o.push(e?De(t[r],rt(t[r])?0:e-1,i,n):Ni(t[r],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function Vt(t,e){return t.feature?s({},t.feature,{geometry:e}):Fe(e)}function Fe(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Hi={toGeoJSON:function(t){return Vt(this,{type:"Point",coordinates:Ni(this.getLatLng(),t)})}};$e.include(Hi),$i.include(Hi),Re.include(Hi),yt.include({toGeoJSON:function(t){var e=!rt(this._latlngs),i=De(this._latlngs,e?1:0,!1,t);return Vt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),jt.include({toGeoJSON:function(t){var e=!rt(this._latlngs),i=e&&!rt(this._latlngs[0]),n=De(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Vt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Wt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Vt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(o){if(o.toGeoJSON){var r=o.toGeoJSON(t);if(i)n.push(r.geometry);else{var c=Fe(r);c.type==="FeatureCollection"?n.push.apply(n,c.features):n.push(c)}}}),i?Vt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function eo(t,e){return new bt(t,e)}var _s=eo,Ue=ht.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=U(e),P(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(C(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){N(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ft(this._image),this},bringToBack:function(){return this._map&&Ut(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=U(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:I("img");if(C(e,"leaflet-image-layer"),this._zoomAnimated&&C(e,"leaflet-zoom-animated"),this.options.className&&C(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onload=h(this.fire,this,"load"),e.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ct(this._image,i,e)},_reset:function(){var t=this._image,e=new R(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();W(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){ot(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ms=function(t,e,i){return new Ue(t,e,i)},io=Ue.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:I("video");if(C(e,"leaflet-image-layer"),this._zoomAnimated&&C(e,"leaflet-zoom-animated"),this.options.className&&C(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onloadeddata=h(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}at(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var c=I("source");c.src=this._url[r],e.appendChild(c)}}});function gs(t,e,i){return new io(t,e,i)}var no=Ue.extend({_initImage:function(){var t=this._image=this._url;C(t,"leaflet-image-layer"),this._zoomAnimated&&C(t,"leaflet-zoom-animated"),this.options.className&&C(t,this.options.className),t.onselectstart=b,t.onmousemove=b}});function vs(t,e,i){return new no(t,e,i)}var ft=ht.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Z||at(t))?(this._latlng=M(t),P(this,e)):(P(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&ot(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&ot(this._container,1),this.bringToFront(),this.options.interactive&&(C(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(ot(this._container,0),this._removeTimeout=setTimeout(h(N,void 0,this._container),200)):N(this._container),this.options.interactive&&(F(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=M(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ft(this._container),this},bringToBack:function(){return this._map&&Ut(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof vt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=T(this.options.offset),i=this._getAnchor();this._zoomAnimated?W(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});A.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),ht.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(P(o,n),o._source=this):(o=e&&!n?e:new t(n,this),o.setContent(i)),o}});var We=ft.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ft.prototype.openOn.call(this,t)},onAdd:function(t){ft.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Tt||this._source.on("preclick",Mt))},onRemove:function(t){ft.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Tt||this._source.off("preclick",Mt))},getEvents:function(){var t=ft.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=I("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=I("div",t+"-content-wrapper",e);if(this._contentNode=I("div",t+"-content",i),he(e),Ci(this._contentNode),k(e,"contextmenu",Mt),this._tipContainer=I("div",t+"-tip-container",e),this._tip=I("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=I("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',k(n,"click",function(o){G(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",C(t,r)):F(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();W(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(re(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new S(this._containerLeft,-i-this._containerBottom);o._add(zt(this._container));var r=t.layerPointToContainerPoint(o),c=T(this.options.autoPanPadding),d=T(this.options.autoPanPaddingTopLeft||c),p=T(this.options.autoPanPaddingBottomRight||c),m=t.getSize(),v=0,w=0;r.x+n+p.x>m.x&&(v=r.x+n-m.x+p.x),r.x-v-d.x<0&&(v=r.x-d.x),r.y+i+p.y>m.y&&(w=r.y+i-m.y+p.y),r.y-w-d.y<0&&(w=r.y-d.y),(v||w)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([v,w]))}},_getAnchor:function(){return T(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),ys=function(t,e){return new We(t,e)};A.mergeOptions({closePopupOnClick:!0}),A.include({openPopup:function(t,e,i){return this._initOverlay(We,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),ht.include({bindPopup:function(t,e){return this._popup=this._initOverlay(We,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof vt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){At(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Tt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var qe=ft.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){ft.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ft.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ft.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=I("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,r=n.latLngToContainerPoint(n.getCenter()),c=n.layerPointToContainerPoint(t),d=this.options.direction,p=o.offsetWidth,m=o.offsetHeight,v=T(this.options.offset),w=this._getAnchor();d==="top"?(e=p/2,i=m):d==="bottom"?(e=p/2,i=0):d==="center"?(e=p/2,i=m/2):d==="right"?(e=0,i=m/2):d==="left"?(e=p,i=m/2):c.x<r.x?(d="right",e=0,i=m/2):(d="left",e=p+(v.x+w.x)*2,i=m/2),t=t.subtract(T(e,i,!0)).add(v).add(w),F(o,"leaflet-tooltip-right"),F(o,"leaflet-tooltip-left"),F(o,"leaflet-tooltip-top"),F(o,"leaflet-tooltip-bottom"),C(o,"leaflet-tooltip-"+d),W(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&ot(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return T(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),bs=function(t,e){return new qe(t,e)};A.include({openTooltip:function(t,e,i){return this._initOverlay(qe,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),ht.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(qe,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof vt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(k(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),k(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var oo=qt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Me(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=T(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function xs(t){return new oo(t)}qt.Default=de;var fe=ht.extend({options:{tileSize:256,opacity:1,updateWhenIdle:x.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){P(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),N(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ft(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ut(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof S?t:new S(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,o=e.length,r;n<o;n++)r=e[n].style.zIndex,e[n]!==this._container&&r&&(i=t(i,+r));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!x.ielt9){ot(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(!(!o.current||!o.loaded)){var r=Math.min(1,(t-o.loaded)/200);ot(o.el,r),r<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(nt(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this))}},_onOpaqueTile:b,_initContainer:function(){this._container||(this._container=I("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(N(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=I("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),b(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:b,_onRemoveLevel:b,_onCreateLevel:b,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)N(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),r=Math.floor(e/2),c=i-1,d=new S(+o,+r);d.z=+c;var p=this._tileCoordsToKey(d),m=this._tiles[p];return m&&m.active?(m.retain=!0,!0):(m&&m.loaded&&(m.retain=!0),c>n?this._retainParent(o,r,c,n):!1)},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var c=new S(o,r);c.z=i+1;var d=this._tileCoordsToKey(c),p=this._tiles[d];if(p&&p.active){p.retain=!0;continue}else p&&p.loaded&&(p.retain=!0);i+1<n&&this._retainChildren(o,r,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();x.any3d?Ct(t.el,o,n):W(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(n*2);return new R(o.subtract(r),o.add(r))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),r=o.getCenter(),c=[],d=this.options.keepBuffer,p=new R(o.getBottomLeft().subtract([d,-d]),o.getTopRight().add([d,-d]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var m in this._tiles){var v=this._tiles[m].coords;(v.z!==this._tileZoom||!p.contains(new S(v.x,v.y)))&&(this._tiles[m].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var w=o.min.y;w<=o.max.y;w++)for(var z=o.min.x;z<=o.max.x;z++){var Y=new S(z,w);if(Y.z=this._tileZoom,!!this._isValidTile(Y)){var V=this._tiles[this._tileCoordsToKey(Y)];V?V.current=!0:c.push(Y)}}if(c.sort(function(tt,Kt){return tt.distanceTo(r)-Kt.distanceTo(r)}),c.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var st=document.createDocumentFragment();for(z=0;z<c.length;z++)this._addTile(c[z],st);this._level.el.appendChild(st)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return U(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i),r=e.unproject(n,t.z),c=e.unproject(o,t.z);return[r,c]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new Q(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new S(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(N(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){C(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=b,t.onmousemove=b,x.ielt9&&this.options.opacity<1&&ot(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),h(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&J(h(this._tileReady,this,t,null,o)),W(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(ot(i.el,0),nt(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(C(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),x.ielt9||!this._map._fadeAnimated?J(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new S(this._wrapX?y(t.x,this._wrapX):t.x,this._wrapY?y(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new R(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function ws(t){return new fe(t)}var Gt=fe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=P(this,e),e.detectRetina&&x.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return k(i,"load",h(this._tileOnLoad,this,e,i)),k(i,"error",h(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:x.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return sn(this._url,s(e,this.options))},_tileOnLoad:function(t,e){x.ielt9?setTimeout(h(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=b,e.onerror=b,!e.complete)){e.src=Ee;var i=this._tiles[t].coords;N(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Ee),fe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Ee))return fe.prototype._tileReady.call(this,t,e,i)}});function ro(t,e){return new Gt(t,e)}var so=Gt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=s({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=P(this,e);var o=e.detectRetina&&x.retina?2:1,r=this.getTileSize();i.width=r.x*o,i.height=r.y*o,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Gt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=X(i.project(e[0]),i.project(e[1])),o=n.min,r=n.max,c=(this._wmsVersion>=1.3&&this._crs===Xn?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),d=Gt.prototype.getTileUrl.call(this,t);return d+et(this.wmsParams,d,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+c},setParams:function(t,e){return s(this.wmsParams,t),e||this.redraw(),this}});function Ls(t,e){return new so(t,e)}Gt.WMS=so,ro.wms=Ls;var xt=ht.extend({options:{padding:.1},initialize:function(t){P(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),C(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));x.any3d?Ct(this._container,r,i):W(this._container,r)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new R(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ao=xt.extend({options:{tolerance:0},getEvents:function(){var t=xt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){xt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");k(t,"mousemove",this._onMouseMove,this),k(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),k(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){nt(this._redrawRequest),delete this._ctx,N(this._container),$(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=x.retina?2:1;W(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",x.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){xt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,o;for(o=0;o<e.length;o++){if(n=Number(e[o]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||J(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new R,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,r,c=t._parts,d=c.length,p=this._ctx;if(d){for(p.beginPath(),i=0;i<d;i++){for(n=0,o=c[i].length;n<o;n++)r=c[i][n],p[n?"lineTo":"moveTo"](r.x,r.y);e&&p.closePath()}this._fillStroke(p,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;o!==1&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,Math.PI*2,!1),o!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(F(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(C(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function lo(t){return x.canvas?new ao(t):null}var pe=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Ps={_initContainer:function(){this._container=I("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(xt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=pe("shape");C(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=pe("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;N(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=pe("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=at(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=pe("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Ft(t._container)},_bringToBack:function(t){Ut(t._container)}},je=x.vml?pe:dn,_e=xt.extend({_initContainer:function(){this._container=je("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=je("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){N(this._container),$(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),W(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=je("path");t.options.className&&C(e,t.options.className),t.options.interactive&&C(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){N(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,fn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+i*2+",0 "+o+-i*2+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Ft(t._path)},_bringToBack:function(t){Ut(t._path)}});x.vml&&_e.include(Ps);function ho(t){return x.svg||x.vml?new _e(t):null}A.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&lo(t)||ho(t)}});var uo=jt.extend({initialize:function(t,e){jt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=U(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ts(t,e){return new uo(t,e)}_e.create=je,_e.pointsToPath=fn,bt.geometryToLayer=Ne,bt.coordsToLatLng=Ri,bt.coordsToLatLngs=He,bt.latLngToCoords=Ni,bt.latLngsToCoords=De,bt.getFeature=Vt,bt.asFeature=Fe,A.mergeOptions({boxZoom:!0});var co=dt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){$(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){N(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),se(),xi(),this._startPoint=this._map.mouseEventToContainerPoint(t),k(document,{contextmenu:At,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=I("div","leaflet-zoom-box",this._container),C(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new R(this._point,this._startPoint),i=e.getSize();W(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(N(this._box),F(this._container,"leaflet-crosshair")),ae(),wi(),$(document,{contextmenu:At,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var e=new Q(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});A.addInitHook("addHandler","boxZoom",co),A.mergeOptions({doubleClickZoom:!0});var fo=dt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});A.addInitHook("addHandler","doubleClickZoom",fo),A.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var po=dt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Pt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}C(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){F(this._map._container,"leaflet-grab"),F(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=U(this._map.options.maxBounds);this._offsetLimit=X(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,r=(n+e+i)%t-e-i,c=Math.abs(o+i)<Math.abs(r+i)?o:r;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=c},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,c=i.easeLinearity,d=o.multiplyBy(c/r),p=d.distanceTo([0,0]),m=Math.min(i.inertiaMaxSpeed,p),v=d.multiplyBy(m/p),w=m/(i.inertiaDeceleration*c),z=v.multiplyBy(-w/2).round();!z.x&&!z.y?e.fire("moveend"):(z=e._limitOffset(z,e.options.maxBounds),J(function(){e.panBy(z,{duration:w,easeLinearity:c,noMoveStart:!0,animate:!0})}))}}});A.addInitHook("addHandler","dragging",po),A.mergeOptions({keyboard:!0,keyboardPanDelta:80});var _o=dt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),k(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),$(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){k(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){$(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=T(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(T(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;At(t)}}});A.addInitHook("addHandler","keyboard",_o),A.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var mo=dt.extend({addHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){$(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Nn(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),n),At(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,r=i?Math.ceil(o/i)*i:o,c=t._limitZoom(e+(this._delta>0?r:-r))-e;this._delta=0,this._startTime=null,c&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+c):t.setZoomAround(this._lastMousePos,e+c))}});A.addInitHook("addHandler","scrollWheelZoom",mo);var Ss=600;A.mergeOptions({tapHold:x.touchNative&&x.safari&&x.mobile,tapTolerance:15});var go=dt.extend({addHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){$(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new S(e.clientX,e.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(k(document,"touchend",G),k(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Ss),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){$(document,"touchend",G),$(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),$(document,"touchend touchcancel contextmenu",this._cancel,this),$(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new S(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});A.addInitHook("addHandler","tapHold",go),A.mergeOptions({touchZoom:x.touch,bounceAtZoomLimits:!0});var vo=dt.extend({addHooks:function(){C(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){F(this._map._container,"leaflet-touch-zoom"),$(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),G(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,o===1)return}else{var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(o===1&&r.x===0&&r.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),nt(this._animRequest);var c=h(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=J(c,this,!0),G(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,nt(this._animRequest),$(document,"touchmove",this._onTouchMove,this),$(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});A.addInitHook("addHandler","touchZoom",vo),A.BoxZoom=co,A.DoubleClickZoom=fo,A.Drag=po,A.Keyboard=_o,A.ScrollWheelZoom=mo,A.TapHold=go,A.TouchZoom=vo,u.Bounds=R,u.Browser=x,u.CRS=gt,u.Canvas=ao,u.Circle=$i,u.CircleMarker=Re,u.Class=mt,u.Control=lt,u.DivIcon=oo,u.DivOverlay=ft,u.DomEvent=Wr,u.DomUtil=Fr,u.Draggable=Pt,u.Evented=ee,u.FeatureGroup=vt,u.GeoJSON=bt,u.GridLayer=fe,u.Handler=dt,u.Icon=qt,u.ImageOverlay=Ue,u.LatLng=Z,u.LatLngBounds=Q,u.Layer=ht,u.LayerGroup=Wt,u.LineUtil=ns,u.Map=A,u.Marker=$e,u.Mixin=Jr,u.Path=Tt,u.Point=S,u.PolyUtil=Xr,u.Polygon=jt,u.Polyline=yt,u.Popup=We,u.PosAnimation=Hn,u.Projection=os,u.Rectangle=uo,u.Renderer=xt,u.SVG=_e,u.SVGOverlay=no,u.TileLayer=Gt,u.Tooltip=qe,u.Transformation=hi,u.Util=ur,u.VideoOverlay=io,u.bind=h,u.bounds=X,u.canvas=lo,u.circle=ds,u.circleMarker=cs,u.control=ue,u.divIcon=xs,u.extend=s,u.featureGroup=ls,u.geoJSON=eo,u.geoJson=_s,u.gridLayer=ws,u.icon=hs,u.imageOverlay=ms,u.latLng=M,u.latLngBounds=U,u.layerGroup=as,u.map=qr,u.marker=us,u.point=T,u.polygon=ps,u.polyline=fs,u.popup=ys,u.rectangle=Ts,u.setOptions=P,u.stamp=f,u.svg=ho,u.svgOverlay=vs,u.tileLayer=ro,u.tooltip=bs,u.transformation=ie,u.version=a,u.videoOverlay=gs;var ks=window.L;u.noConflict=function(){return window.L=ks,this},window.L=u}))});function aa(u){return ir[u%ir.length]}function ke(u,a,s){let l=u?.entity_colors?.[a];return typeof l=="string"&&l.trim()?l:aa(s)}function Rt(u){return u.map(a=>typeof a=="string"?{entity:a}:a).filter(a=>typeof a?.entity=="string"&&a.entity.length>0)}function Nt(u){if(!u)return null;let a=Number(u.attributes?.latitude),s=Number(u.attributes?.longitude);return!Number.isFinite(a)||!Number.isFinite(s)?null:{lat:a,lon:s}}function nn(u){return Object.values(u.states).filter(a=>la.has(a.entity_id.split(".")[0])&&Nt(a)).map(a=>a.entity_id).sort()}function or(u,a){return u.name?u.name:a?.attributes?.friendly_name??u.entity}function rr(u,a){return a==="dark"?!0:a==="light"?!1:!!u.themes?.darkMode}var Se,nr,ir,la,on=j(()=>{"use strict";Se=["basic","outdoor","winter","aerial"],nr={basic:"Basic",outdoor:"Outdoor",winter:"Winter",aerial:"Aerial"},ir=["#e53935","#d81b60","#8e24aa","#5e35b1","#3949ab","#1e88e5","#039be5","#00acc1","#00897b","#43a047","#7cb342","#c0ca33","#fdd835","#ffb300","#fb8c00","#f4511e","#6d4c41","#546e7a"];la=new Set(["person","device_tracker","geo_location"])});var ar={};Ds(ar,{MapyMapCardEditor:()=>Et,loadEntityPicker:()=>sr});function sr(){return customElements.get("ha-entity-picker")?Promise.resolve(!0):oi||(oi=(async()=>{try{if(typeof window.loadCardHelpers!="function")return!1;let u=await window.loadCardHelpers();if(typeof u?.createCardElementEditor!="function")return!1;let a=u.createCardElementEditor({type:"entities",entities:[]});a.style.display="none",document.body.appendChild(a);let s=Date.now();for(;!customElements.get("ha-entity-picker")&&Date.now()-s<5e3;)await new Promise(l=>setTimeout(l,100));return a.remove(),!!customElements.get("ha-entity-picker")}catch{return!1}})(),oi)}var oi,ha,Et,rn=j(()=>{"use strict";Xi();tn();on();oi=null,ha="mapy-map-card";Et=class extends _t{constructor(){super(...arguments);this._config={type:ha};this._pickerReady=!1}setConfig(s){this._config={...s}}connectedCallback(){super.connectedCallback(),sr().then(s=>{this._pickerReady=s})}render(){let s=this._config;return K`
      <style>
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 12px;
        }
        .full {
          grid-column: 1 / -1;
        }
        label {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
          color: var(--secondary-text-color, #666);
        }
        input[type="text"],
        input[type="number"],
        input[type="password"],
        select,
        textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 8px;
          border: 1px solid var(--divider-color, #ccc);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #000);
          font: inherit;
        }
        textarea {
          min-height: 90px;
          resize: vertical;
          font-family: var(--code-font-family, monospace);
        }
        .check {
          flex-direction: row !important;
          align-items: center;
          gap: 8px !important;
          font-size: 14px !important;
          color: var(--primary-text-color, #000) !important;
        }
        input[type="color"] {
          width: 100%;
          height: 34px;
          padding: 2px;
          border: 1px solid var(--divider-color, #ccc);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          cursor: pointer;
        }
        .section {
          grid-column: 1 / -1;
          margin-top: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color, #000);
          border-bottom: 1px solid var(--divider-color, #ddd);
          padding-bottom: 4px;
        }
        .entity-row {
          display: flex;
          gap: 8px;
          align-items: center;
          grid-column: 1 / -1;
        }
        .entity-row ha-entity-picker {
          flex: 1;
        }
        .hint {
          grid-column: 1 / -1;
          font-size: 12px;
          color: var(--secondary-text-color, #666);
        }
        .hint a {
          color: var(--primary-color, #03a9f4);
        }
        button.remove {
          border: none;
          background: transparent;
          color: var(--error-color, #db4437);
          font-size: 16px;
          cursor: pointer;
          padding: 4px 8px;
        }
      </style>
      <div class="grid">
        <label class="full">
          Title
          <input
            type="text"
            .value=${s.title??""}
            @input=${l=>this._patch({title:l.target.value||void 0})}
          />
        </label>

        <label class="full">
          Mapy.com API key
          <input
            type="password"
            placeholder="from developer.mapy.com"
            .value=${s.api_key??""}
            @input=${l=>this._patch({api_key:l.target.value})}
          />
        </label>

        <label>
          Tile style
          <select
            @change=${l=>this._patch({tile_style:l.target.value})}
          >
            ${Se.map(l=>K`<option value=${l} ?selected=${(s.tile_style??"basic")===l}>${l}</option>`)}
          </select>
        </label>

        <label>
          Theme mode
          <select
            @change=${l=>this._patch({theme_mode:l.target.value})}
          >
            ${["auto","light","dark"].map(l=>K`<option value=${l} ?selected=${(s.theme_mode??"auto")===l}>${l}</option>`)}
          </select>
        </label>

        <label>
          Hours to show (0 = off)
          <input
            type="number"
            min="0"
            max="168"
            .value=${String(s.hours_to_show??24)}
            @input=${l=>this._patch({hours_to_show:Number(l.target.value)})}
          />
        </label>

        <label>
          Aspect ratio (e.g. 1:1) or height
          <input
            type="text"
            placeholder="1:1"
            .value=${s.aspect_ratio??""}
            @input=${l=>this._patch({aspect_ratio:l.target.value||void 0})}
          />
        </label>

        <label>
          Language (optional, e.g. cs / en / de)
          <input
            type="text"
            placeholder="auto"
            .value=${s.language??""}
            @input=${l=>this._patch({language:l.target.value||void 0})}
          />
        </label>

        <label>
          Default zoom (single point / max zoom on fit)
          <input
            type="number"
            min="1"
            max="21"
            .value=${s.default_zoom!=null?String(s.default_zoom):""}
            @input=${l=>{let h=l.target.value;this._patch({default_zoom:h===""?void 0:Number(h)})}}
          />
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${s.show_zones!==!1}
            @change=${l=>this._patch({show_zones:l.target.checked})}
          />
          Show zones
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${s.fit_bounds!==!1}
            @change=${l=>this._patch({fit_bounds:l.target.checked})}
          />
          Auto-fit bounds
        </label>

        <div class="section">History trail</div>

        <label>
          Line width (px)
          <input
            type="number"
            min="1"
            max="20"
            .value=${String(s.history_line_width??4)}
            @input=${l=>this._patch({history_line_width:Number(l.target.value)})}
          />
        </label>

        <label>
          Line opacity (0.1 – 1)
          <input
            type="number"
            min="0.1"
            max="1"
            step="0.05"
            .value=${String(s.history_line_opacity??.65)}
            @input=${l=>this._patch({history_line_opacity:Number(l.target.value)||void 0})}
          />
        </label>

        <label>
          Line color (empty = entity color)
          <input
            type="text"
            placeholder="#ff9800"
            .value=${s.history_line_color??""}
            @input=${l=>this._patch({history_line_color:l.target.value.trim()||void 0})}
          />
        </label>

        <label>
          Point style
          <select
            @change=${l=>this._patch({history_point_type:l.target.value})}
          >
            ${["dot","ring","square","none"].map(l=>K`<option value=${l} ?selected=${(s.history_point_type??"dot")===l}>${l}</option>`)}
          </select>
        </label>

        <label>
          Point color (empty = entity color)
          <input
            type="text"
            placeholder="#ff9800"
            .value=${s.history_point_color??""}
            @input=${l=>this._patch({history_point_color:l.target.value.trim()||void 0})}
          />
        </label>

        <div class="section">Entity colors</div>
        ${this._renderEntityColors()}

        ${this._pickerReady?this._renderEntityPickers():this._renderEntityTextarea()}

        <div class="hint">
          Free API key: <a href="https://developer.mapy.com/" target="_blank" rel="noreferrer">developer.mapy.com</a>
          – create a project, enable "Map Tiles" REST API and copy the key.
        </div>
      </div>
    `}_renderEntityPickers(){let s=Rt(this._config.entities??[]);return K`
      ${s.length?s.map((l,h)=>K`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${l.entity}
                  .allowCustomEntity=${!0}
                  @value-changed=${_=>this._setEntity(h,String(_.detail.value??""))}
                ></ha-entity-picker>
                <button
                  class="remove"
                  title="Remove"
                  @click=${()=>this._setEntities(s.filter((_,f)=>f!==h))}
                >
                  ✕
                </button>
              </div>
            `):H}
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .allowCustomEntity=${!0}
          @value-changed=${l=>{let h=String(l.detail.value??"");h&&!s.some(_=>_.entity===h)&&this._setEntities([...s,{entity:h}])}}
        ></ha-entity-picker>
      </div>
    `}_renderEntityTextarea(){let s=Rt(this._config.entities??[]);return K`
      <label class="full">
        Entities (one per line, empty = auto-discover)
        <textarea
          .value=${s.map(l=>l.entity).join(`
`)}
          @change=${l=>{let h=l.target.value.split(`
`).map(_=>_.trim()).filter(Boolean);this._setEntities(h.map(_=>({entity:_})))}}
        ></textarea>
      </label>
    `}_renderEntityColors(){let s=Rt(this._config.entities??[]);return s.length?K`
      ${s.map((l,h)=>K`
          <label>
            ${l.entity}
            <div class="entity-row" style="grid-column:auto">
              <input
                type="color"
                .value=${ke(this._config,l.entity,h)}
                @input=${_=>this._setEntityColor(l.entity,_.target.value)}
              />
              <button
                class="remove"
                title="Reset to automatic color"
                @click=${()=>this._setEntityColor(l.entity,void 0)}
              >
                ↺
              </button>
            </div>
          </label>
        `)}
    `:K`<div class="hint">Add entities first to assign custom colors.</div>`}_setEntityColor(s,l){let h={...this._config.entity_colors??{}};l?h[s]=l:delete h[s],this._patch({entity_colors:Object.keys(h).length?h:void 0})}_patch(s){this._emit({...this._config,...s})}_setEntity(s,l){let h=Rt(this._config.entities??[]);l&&(h[s]={...h[s],entity:l},this._setEntities(h))}_setEntities(s){this._emit({...this._config,entities:s})}_emit(s){this._config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}};pt([Xt({attribute:!1})],Et.prototype,"hass",2),pt([Qt()],Et.prototype,"_config",2),pt([Qt()],Et.prototype,"_pickerReady",2),Et=pt([ei("mapy-map-card-editor")],Et)});Xi();tn();var B=Us(Xo(),1);var Qo=`/* required styles */\r
\r
.leaflet-pane,\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-tile-container,\r
.leaflet-pane > svg,\r
.leaflet-pane > canvas,\r
.leaflet-zoom-box,\r
.leaflet-image-layer,\r
.leaflet-layer {\r
	position: absolute;\r
	left: 0;\r
	top: 0;\r
	}\r
.leaflet-container {\r
	overflow: hidden;\r
	}\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	-webkit-user-select: none;\r
	   -moz-user-select: none;\r
	        user-select: none;\r
	  -webkit-user-drag: none;\r
	}\r
/* Prevents IE11 from highlighting tiles in blue */\r
.leaflet-tile::selection {\r
	background: transparent;\r
}\r
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r
.leaflet-safari .leaflet-tile {\r
	image-rendering: -webkit-optimize-contrast;\r
	}\r
/* hack that prevents hw layers "stretching" when loading new tiles */\r
.leaflet-safari .leaflet-tile-container {\r
	width: 1600px;\r
	height: 1600px;\r
	-webkit-transform-origin: 0 0;\r
	}\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	display: block;\r
	}\r
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r
.leaflet-container .leaflet-overlay-pane svg {\r
	max-width: none !important;\r
	max-height: none !important;\r
	}\r
.leaflet-container .leaflet-marker-pane img,\r
.leaflet-container .leaflet-shadow-pane img,\r
.leaflet-container .leaflet-tile-pane img,\r
.leaflet-container img.leaflet-image-layer,\r
.leaflet-container .leaflet-tile {\r
	max-width: none !important;\r
	max-height: none !important;\r
	width: auto;\r
	padding: 0;\r
	}\r
\r
.leaflet-container img.leaflet-tile {\r
	/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\r
	mix-blend-mode: plus-lighter;\r
}\r
\r
.leaflet-container.leaflet-touch-zoom {\r
	-ms-touch-action: pan-x pan-y;\r
	touch-action: pan-x pan-y;\r
	}\r
.leaflet-container.leaflet-touch-drag {\r
	-ms-touch-action: pinch-zoom;\r
	/* Fallback for FF which doesn't support pinch-zoom */\r
	touch-action: none;\r
	touch-action: pinch-zoom;\r
}\r
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r
	-ms-touch-action: none;\r
	touch-action: none;\r
}\r
.leaflet-container {\r
	-webkit-tap-highlight-color: transparent;\r
}\r
.leaflet-container a {\r
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r
}\r
.leaflet-tile {\r
	filter: inherit;\r
	visibility: hidden;\r
	}\r
.leaflet-tile-loaded {\r
	visibility: inherit;\r
	}\r
.leaflet-zoom-box {\r
	width: 0;\r
	height: 0;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	z-index: 800;\r
	}\r
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r
.leaflet-overlay-pane svg {\r
	-moz-user-select: none;\r
	}\r
\r
.leaflet-pane         { z-index: 400; }\r
\r
.leaflet-tile-pane    { z-index: 200; }\r
.leaflet-overlay-pane { z-index: 400; }\r
.leaflet-shadow-pane  { z-index: 500; }\r
.leaflet-marker-pane  { z-index: 600; }\r
.leaflet-tooltip-pane   { z-index: 650; }\r
.leaflet-popup-pane   { z-index: 700; }\r
\r
.leaflet-map-pane canvas { z-index: 100; }\r
.leaflet-map-pane svg    { z-index: 200; }\r
\r
.leaflet-vml-shape {\r
	width: 1px;\r
	height: 1px;\r
	}\r
.lvml {\r
	behavior: url(#default#VML);\r
	display: inline-block;\r
	position: absolute;\r
	}\r
\r
\r
/* control positioning */\r
\r
.leaflet-control {\r
	position: relative;\r
	z-index: 800;\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
.leaflet-top,\r
.leaflet-bottom {\r
	position: absolute;\r
	z-index: 1000;\r
	pointer-events: none;\r
	}\r
.leaflet-top {\r
	top: 0;\r
	}\r
.leaflet-right {\r
	right: 0;\r
	}\r
.leaflet-bottom {\r
	bottom: 0;\r
	}\r
.leaflet-left {\r
	left: 0;\r
	}\r
.leaflet-control {\r
	float: left;\r
	clear: both;\r
	}\r
.leaflet-right .leaflet-control {\r
	float: right;\r
	}\r
.leaflet-top .leaflet-control {\r
	margin-top: 10px;\r
	}\r
.leaflet-bottom .leaflet-control {\r
	margin-bottom: 10px;\r
	}\r
.leaflet-left .leaflet-control {\r
	margin-left: 10px;\r
	}\r
.leaflet-right .leaflet-control {\r
	margin-right: 10px;\r
	}\r
\r
\r
/* zoom and fade animations */\r
\r
.leaflet-fade-anim .leaflet-popup {\r
	opacity: 0;\r
	-webkit-transition: opacity 0.2s linear;\r
	   -moz-transition: opacity 0.2s linear;\r
	        transition: opacity 0.2s linear;\r
	}\r
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r
	opacity: 1;\r
	}\r
.leaflet-zoom-animated {\r
	-webkit-transform-origin: 0 0;\r
	    -ms-transform-origin: 0 0;\r
	        transform-origin: 0 0;\r
	}\r
svg.leaflet-zoom-animated {\r
	will-change: transform;\r
}\r
\r
.leaflet-zoom-anim .leaflet-zoom-animated {\r
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r
	}\r
.leaflet-zoom-anim .leaflet-tile,\r
.leaflet-pan-anim .leaflet-tile {\r
	-webkit-transition: none;\r
	   -moz-transition: none;\r
	        transition: none;\r
	}\r
\r
.leaflet-zoom-anim .leaflet-zoom-hide {\r
	visibility: hidden;\r
	}\r
\r
\r
/* cursors */\r
\r
.leaflet-interactive {\r
	cursor: pointer;\r
	}\r
.leaflet-grab {\r
	cursor: -webkit-grab;\r
	cursor:    -moz-grab;\r
	cursor:         grab;\r
	}\r
.leaflet-crosshair,\r
.leaflet-crosshair .leaflet-interactive {\r
	cursor: crosshair;\r
	}\r
.leaflet-popup-pane,\r
.leaflet-control {\r
	cursor: auto;\r
	}\r
.leaflet-dragging .leaflet-grab,\r
.leaflet-dragging .leaflet-grab .leaflet-interactive,\r
.leaflet-dragging .leaflet-marker-draggable {\r
	cursor: move;\r
	cursor: -webkit-grabbing;\r
	cursor:    -moz-grabbing;\r
	cursor:         grabbing;\r
	}\r
\r
/* marker & overlays interactivity */\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-image-layer,\r
.leaflet-pane > svg path,\r
.leaflet-tile-container {\r
	pointer-events: none;\r
	}\r
\r
.leaflet-marker-icon.leaflet-interactive,\r
.leaflet-image-layer.leaflet-interactive,\r
.leaflet-pane > svg path.leaflet-interactive,\r
svg.leaflet-image-layer.leaflet-interactive path {\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
\r
/* visual tweaks */\r
\r
.leaflet-container {\r
	background: #ddd;\r
	outline-offset: 1px;\r
	}\r
.leaflet-container a {\r
	color: #0078A8;\r
	}\r
.leaflet-zoom-box {\r
	border: 2px dotted #38f;\r
	background: rgba(255,255,255,0.5);\r
	}\r
\r
\r
/* general typography */\r
.leaflet-container {\r
	font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;\r
	font-size: 12px;\r
	font-size: 0.75rem;\r
	line-height: 1.5;\r
	}\r
\r
\r
/* general toolbar styles */\r
\r
.leaflet-bar {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);\r
	border-radius: 4px;\r
	}\r
.leaflet-bar a {\r
	background-color: #fff;\r
	border-bottom: 1px solid #ccc;\r
	width: 26px;\r
	height: 26px;\r
	line-height: 26px;\r
	display: block;\r
	text-align: center;\r
	text-decoration: none;\r
	color: black;\r
	}\r
.leaflet-bar a,\r
.leaflet-control-layers-toggle {\r
	background-position: 50% 50%;\r
	background-repeat: no-repeat;\r
	display: block;\r
	}\r
.leaflet-bar a:hover,\r
.leaflet-bar a:focus {\r
	background-color: #f4f4f4;\r
	}\r
.leaflet-bar a:first-child {\r
	border-top-left-radius: 4px;\r
	border-top-right-radius: 4px;\r
	}\r
.leaflet-bar a:last-child {\r
	border-bottom-left-radius: 4px;\r
	border-bottom-right-radius: 4px;\r
	border-bottom: none;\r
	}\r
.leaflet-bar a.leaflet-disabled {\r
	cursor: default;\r
	background-color: #f4f4f4;\r
	color: #bbb;\r
	}\r
\r
.leaflet-touch .leaflet-bar a {\r
	width: 30px;\r
	height: 30px;\r
	line-height: 30px;\r
	}\r
.leaflet-touch .leaflet-bar a:first-child {\r
	border-top-left-radius: 2px;\r
	border-top-right-radius: 2px;\r
	}\r
.leaflet-touch .leaflet-bar a:last-child {\r
	border-bottom-left-radius: 2px;\r
	border-bottom-right-radius: 2px;\r
	}\r
\r
/* zoom control */\r
\r
.leaflet-control-zoom-in,\r
.leaflet-control-zoom-out {\r
	font: bold 18px 'Lucida Console', Monaco, monospace;\r
	text-indent: 1px;\r
	}\r
\r
.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r
	font-size: 22px;\r
	}\r
\r
\r
/* layers control */\r
\r
.leaflet-control-layers {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);\r
	background: #fff;\r
	border-radius: 5px;\r
	}\r
.leaflet-control-layers-toggle {\r
	background-image: url(images/layers.png);\r
	width: 36px;\r
	height: 36px;\r
	}\r
.leaflet-retina .leaflet-control-layers-toggle {\r
	background-image: url(images/layers-2x.png);\r
	background-size: 26px 26px;\r
	}\r
.leaflet-touch .leaflet-control-layers-toggle {\r
	width: 44px;\r
	height: 44px;\r
	}\r
.leaflet-control-layers .leaflet-control-layers-list,\r
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r
	display: none;\r
	}\r
.leaflet-control-layers-expanded .leaflet-control-layers-list {\r
	display: block;\r
	position: relative;\r
	}\r
.leaflet-control-layers-expanded {\r
	padding: 6px 10px 6px 6px;\r
	color: #333;\r
	background: #fff;\r
	}\r
.leaflet-control-layers-scrollbar {\r
	overflow-y: scroll;\r
	overflow-x: hidden;\r
	padding-right: 5px;\r
	}\r
.leaflet-control-layers-selector {\r
	margin-top: 2px;\r
	position: relative;\r
	top: 1px;\r
	}\r
.leaflet-control-layers label {\r
	display: block;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	}\r
.leaflet-control-layers-separator {\r
	height: 0;\r
	border-top: 1px solid #ddd;\r
	margin: 5px -10px 5px -6px;\r
	}\r
\r
/* Default icon URLs */\r
.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r
	background-image: url(images/marker-icon.png);\r
	}\r
\r
\r
/* attribution and scale controls */\r
\r
.leaflet-container .leaflet-control-attribution {\r
	background: #fff;\r
	background: rgba(255, 255, 255, 0.8);\r
	margin: 0;\r
	}\r
.leaflet-control-attribution,\r
.leaflet-control-scale-line {\r
	padding: 0 5px;\r
	color: #333;\r
	line-height: 1.4;\r
	}\r
.leaflet-control-attribution a {\r
	text-decoration: none;\r
	}\r
.leaflet-control-attribution a:hover,\r
.leaflet-control-attribution a:focus {\r
	text-decoration: underline;\r
	}\r
.leaflet-attribution-flag {\r
	display: inline !important;\r
	vertical-align: baseline !important;\r
	width: 1em;\r
	height: 0.6669em;\r
	}\r
.leaflet-left .leaflet-control-scale {\r
	margin-left: 5px;\r
	}\r
.leaflet-bottom .leaflet-control-scale {\r
	margin-bottom: 5px;\r
	}\r
.leaflet-control-scale-line {\r
	border: 2px solid #777;\r
	border-top: none;\r
	line-height: 1.1;\r
	padding: 2px 5px 1px;\r
	white-space: nowrap;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	background: rgba(255, 255, 255, 0.8);\r
	text-shadow: 1px 1px #fff;\r
	}\r
.leaflet-control-scale-line:not(:first-child) {\r
	border-top: 2px solid #777;\r
	border-bottom: none;\r
	margin-top: -2px;\r
	}\r
.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r
	border-bottom: 2px solid #777;\r
	}\r
\r
.leaflet-touch .leaflet-control-attribution,\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	box-shadow: none;\r
	}\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	border: 2px solid rgba(0,0,0,0.2);\r
	background-clip: padding-box;\r
	}\r
\r
\r
/* popup */\r
\r
.leaflet-popup {\r
	position: absolute;\r
	text-align: center;\r
	margin-bottom: 20px;\r
	}\r
.leaflet-popup-content-wrapper {\r
	padding: 1px;\r
	text-align: left;\r
	border-radius: 12px;\r
	}\r
.leaflet-popup-content {\r
	margin: 13px 24px 13px 20px;\r
	line-height: 1.3;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	min-height: 1px;\r
	}\r
.leaflet-popup-content p {\r
	margin: 17px 0;\r
	margin: 1.3em 0;\r
	}\r
.leaflet-popup-tip-container {\r
	width: 40px;\r
	height: 20px;\r
	position: absolute;\r
	left: 50%;\r
	margin-top: -1px;\r
	margin-left: -20px;\r
	overflow: hidden;\r
	pointer-events: none;\r
	}\r
.leaflet-popup-tip {\r
	width: 17px;\r
	height: 17px;\r
	padding: 1px;\r
\r
	margin: -10px auto 0;\r
	pointer-events: auto;\r
\r
	-webkit-transform: rotate(45deg);\r
	   -moz-transform: rotate(45deg);\r
	    -ms-transform: rotate(45deg);\r
	        transform: rotate(45deg);\r
	}\r
.leaflet-popup-content-wrapper,\r
.leaflet-popup-tip {\r
	background: white;\r
	color: #333;\r
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);\r
	}\r
.leaflet-container a.leaflet-popup-close-button {\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	border: none;\r
	text-align: center;\r
	width: 24px;\r
	height: 24px;\r
	font: 16px/24px Tahoma, Verdana, sans-serif;\r
	color: #757575;\r
	text-decoration: none;\r
	background: transparent;\r
	}\r
.leaflet-container a.leaflet-popup-close-button:hover,\r
.leaflet-container a.leaflet-popup-close-button:focus {\r
	color: #585858;\r
	}\r
.leaflet-popup-scrolled {\r
	overflow: auto;\r
	}\r
\r
.leaflet-oldie .leaflet-popup-content-wrapper {\r
	-ms-zoom: 1;\r
	}\r
.leaflet-oldie .leaflet-popup-tip {\r
	width: 24px;\r
	margin: 0 auto;\r
\r
	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r
	}\r
\r
.leaflet-oldie .leaflet-control-zoom,\r
.leaflet-oldie .leaflet-control-layers,\r
.leaflet-oldie .leaflet-popup-content-wrapper,\r
.leaflet-oldie .leaflet-popup-tip {\r
	border: 1px solid #999;\r
	}\r
\r
\r
/* div icon */\r
\r
.leaflet-div-icon {\r
	background: #fff;\r
	border: 1px solid #666;\r
	}\r
\r
\r
/* Tooltip */\r
/* Base styles for the element that has a tooltip */\r
.leaflet-tooltip {\r
	position: absolute;\r
	padding: 6px;\r
	background-color: #fff;\r
	border: 1px solid #fff;\r
	border-radius: 3px;\r
	color: #222;\r
	white-space: nowrap;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
	pointer-events: none;\r
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);\r
	}\r
.leaflet-tooltip.leaflet-interactive {\r
	cursor: pointer;\r
	pointer-events: auto;\r
	}\r
.leaflet-tooltip-top:before,\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	position: absolute;\r
	pointer-events: none;\r
	border: 6px solid transparent;\r
	background: transparent;\r
	content: "";\r
	}\r
\r
/* Directions */\r
\r
.leaflet-tooltip-bottom {\r
	margin-top: 6px;\r
}\r
.leaflet-tooltip-top {\r
	margin-top: -6px;\r
}\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-top:before {\r
	left: 50%;\r
	margin-left: -6px;\r
	}\r
.leaflet-tooltip-top:before {\r
	bottom: 0;\r
	margin-bottom: -12px;\r
	border-top-color: #fff;\r
	}\r
.leaflet-tooltip-bottom:before {\r
	top: 0;\r
	margin-top: -12px;\r
	margin-left: -6px;\r
	border-bottom-color: #fff;\r
	}\r
.leaflet-tooltip-left {\r
	margin-left: -6px;\r
}\r
.leaflet-tooltip-right {\r
	margin-left: 6px;\r
}\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	top: 50%;\r
	margin-top: -6px;\r
	}\r
.leaflet-tooltip-left:before {\r
	right: 0;\r
	margin-right: -12px;\r
	border-left-color: #fff;\r
	}\r
.leaflet-tooltip-right:before {\r
	left: 0;\r
	margin-left: -12px;\r
	border-right-color: #fff;\r
	}\r
\r
/* Printing */\r
\r
@media print {\r
	/* Prevent printers from removing background-images of controls. */\r
	.leaflet-control {\r
		-webkit-print-color-adjust: exact;\r
		print-color-adjust: exact;\r
		}\r
	}\r
`;var tr=`${Qo}
:host {
  display: block;
  height: 100%;
}

ha-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background: var(--card-background-color, #fff);
}

.mmc-header {
  font-size: var(--map-card-header-font-size, 1.2em);
  padding: 10px 16px 4px;
  color: var(--primary-text-color, #000);
}

.mmc-map-wrapper {
  position: relative;
  flex: 1;
  min-height: 200px;
}

.mmc-map {
  position: absolute;
  inset: 0;
  background: #e5e3df;
}

.mmc-map.leaflet-container {
  font: inherit;
  height: 100%;
}

.mmc-error {
  padding: 16px;
  color: var(--error-color, #db4437);
  font-size: 14px;
}

/* --- markers --- */

.mmc-icon-wrapper {
  background: transparent !important;
  border: none !important;
}

.mmc-dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
}

.mmc-picture-icon {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
  object-fit: cover;
}

/* --- tooltips rendered as plain labels --- */

.leaflet-tooltip.mmc-label {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  color: var(--primary-text-color, #000);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  text-shadow:
    -1px -1px 0 rgba(255, 255, 255, 0.85),
    1px -1px 0 rgba(255, 255, 255, 0.85),
    -1px 1px 0 rgba(255, 255, 255, 0.85),
    1px 1px 0 rgba(255, 255, 255, 0.85),
    0 0 6px rgba(255, 255, 255, 0.85);
}

.leaflet-tooltip.mmc-label::before {
  display: none;
}

.mmc-dark .leaflet-tooltip.mmc-label {
  color: #fff;
  text-shadow:
    -1px -1px 0 rgba(0, 0, 0, 0.9),
    1px -1px 0 rgba(0, 0, 0, 0.9),
    -1px 1px 0 rgba(0, 0, 0, 0.9),
    1px 1px 0 rgba(0, 0, 0, 0.9),
    0 0 6px rgba(0, 0, 0, 0.9);
}

/* --- history trail points --- */

.mmc-trail-square {
  display: block;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.leaflet-tooltip.mmc-trail-tip {
  font-size: 11px;
  padding: 2px 6px;
  white-space: nowrap;
}

/* --- dark mode tile filter --- */

.mmc-dark .leaflet-tile-pane {
  filter: invert(1) hue-rotate(180deg) brightness(0.92) contrast(0.92) saturate(0.55);
}

/* --- controls --- */

.leaflet-control-attribution {
  font-size: 9px;
}

.mmc-dark .leaflet-control-zoom a,
.mmc-dark .leaflet-control-attribution {
  background: rgba(30, 30, 30, 0.8);
  color: #ddd;
}

.mmc-dark .leaflet-control-zoom a:hover {
  background: rgba(60, 60, 60, 0.9);
  color: #fff;
}

/* --- tile style switcher --- */

.leaflet-control-layers-toggle,
.leaflet-retina .leaflet-control-layers-toggle {
  background-image: none !important;
}

.leaflet-control-layers-toggle::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: no-repeat center / 18px
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><polygon points='12 2 21 7 12 12 3 7'/><polyline points='3 12 12 17 21 12'/><polyline points='3 17 12 22 21 17'/></svg>");
}

.leaflet-control-layers-expanded {
  font-size: 12px;
  padding: 8px 10px;
}

.leaflet-control-layers label {
  font-size: 12px;
  margin: 3px 0;
}

.mmc-dark .leaflet-control-layers-toggle {
  background-color: rgba(30, 30, 30, 0.85);
}

.mmc-dark .leaflet-control-layers-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ddd' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><polygon points='12 2 21 7 12 12 3 7'/><polyline points='3 12 12 17 21 12'/><polyline points='3 17 12 22 21 17'/></svg>");
}

.mmc-dark .leaflet-control-layers-expanded {
  background: rgba(30, 30, 30, 0.92);
  color: #ddd;
}

.mmc-dark .leaflet-control-layers-separator {
  border-top-color: rgba(255, 255, 255, 0.2);
}
`;async function er(u,a,s,l){let h=new Date(Date.now()-s*3600*1e3).toISOString(),_=!1,f=await u.connection.subscribeMessage(g=>{!g||!g.states||typeof g.states!="object"||(_=!0,l(en(g.states,a)))},{type:"history/stream",start_time:h,end_time:new Date().toISOString(),entity_ids:a},{resubscribe:!0});return setTimeout(()=>{_||f()},1e4),f}function en(u,a){let s=[];for(let l of a&&a.length>0?a:Object.keys(u)){let h=u[l];if(Array.isArray(h))for(let _ of h){if(!_||typeof _!="object")continue;let f=_.a??_.attributes??null,g=Number(f?.latitude),y=Number(f?.longitude),b=sa(_.lu);s.push({entity_id:l,map_state:Number.isFinite(g)&&Number.isFinite(y)?[g,y]:null,ts:b})}}return s}function sa(u){let a=Number(u);if(!(!Number.isFinite(a)||a<=0)){if(a>1e15)return a/1e3;if(a>1e12)return a;if(a>1e9)return a*1e3}}on();var ua={basic:19,outdoor:19,winter:19,aerial:19},lr='&copy; <a href="https://mapy.com/">Mapy.com</a> &copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>',Ht=class extends _t{constructor(){super(...arguments);this._tileSwitchKey="";this._markers=new Map;this._markerColors=new Map;this._history=new Map;this._historyStreamDataReceived=!1;this._historyKey="";this._zonesKey="";this._appliedFitKey="";this._onVisibilityChange=()=>{document.visibilityState==="visible"&&(this._map?.invalidateSize({pan:!1}),this._applyFit(),this._healthCheck())};this._onWindowResize=()=>{this._map?.invalidateSize({pan:!1})}}static async getConfigElement(){return await Promise.resolve().then(()=>(rn(),ar)),document.createElement("mapy-map-card-editor")}static getStubConfig(s){return{type:"custom:mapy-map-card",entities:s?nn(s).slice(0,5):[],hours_to_show:24,show_zones:!0}}setConfig(s){if(!s||typeof s!="object")throw new Error("Invalid configuration");let l=!!s.api_key?.trim()||!!s.tile_url?.trim();this._error=l?void 0:"Missing Mapy.com API key \u2013 set api_key in the card editor (free at developer.mapy.com).",this._config={hours_to_show:24,show_zones:!0,fit_bounds:!0,theme_mode:"auto",tile_style:"basic",aspect_ratio:"1:1",...s},this._resetHistory(),this._map&&(this._updateTileLayer(),this._processHass())}connectedCallback(){super.connectedCallback(),this._config&&!this._error&&!this._map&&this.updateComplete.then(()=>{this.isConnected&&this._config&&!this._map&&!this._error&&(this._initMap(),this._processHass())})}disconnectedCallback(){this._resetHistory(),this._appliedFitKey="",this._pendingFit=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._onWindowResize),this._map?.remove(),this._map=void 0,this._tileLayer=void 0,this._tileUrl=void 0,this._tileStyleLayers=void 0,this._tileSwitchKey="",this._appliedTileStyle=void 0,this._layersControl=void 0,this._zonesKey="",this._markers.clear(),this._markerColors.clear(),super.disconnectedCallback()}render(){return this._config?K`
      <style>${tr}</style>
      <ha-card>
        ${this._config.title?K`<div class="mmc-header">${this._config.title}</div>`:H}
        ${this._error?K`<div class="mmc-error">${this._error}</div>`:K`
              <div class="mmc-map-wrapper" style=${this._aspectStyle()}>
                <div class="mmc-map" id="map"></div>
              </div>
            `}
      </ha-card>
    `:K``}firstUpdated(){this._error||(this._map||this._initMap(),this._processHass())}willUpdate(s){super.willUpdate(s),s.has("hass")&&this._processHass()}updated(){this._map?.invalidateSize()}_aspectStyle(){let s=this._config?.aspect_ratio?.trim();if(!s||s.toLowerCase()==="auto")return"";let l=/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/.exec(s);return l?`aspect-ratio:${l[1]}/${l[2]};`:`height:${s};`}_initMap(){let s=this.renderRoot.querySelector("#map");if(!s)return;this._map=B.map(s,{zoomControl:!0,attributionControl:!1,worldCopyJump:!0}),B.control.attribution({prefix:!1}).addTo(this._map),this._zoneLayer=B.layerGroup().addTo(this._map),this._historyLayer=B.layerGroup().addTo(this._map),this._markerLayer=B.layerGroup().addTo(this._map),this._resizeObserver=new ResizeObserver(()=>{this._map?.invalidateSize(),this._applyFit()}),this._resizeObserver.observe(s),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._onWindowResize);let l=this.hass?.config,h=typeof l?.latitude=="number"&&typeof l?.longitude=="number"?[l.latitude,l.longitude]:void 0;if(!h)for(let _ of Object.values(this.hass?.states??{})){let f=Nt(_);if(f){h=[f.lat,f.lon];break}}this._map.setView(h??[49.8032,15.4811],this._config?.default_zoom??12,{animate:!1}),this._updateTileLayer();for(let _ of[300,1e3,3e3,8e3])setTimeout(()=>this._healthCheck(),_)}_healthCheck(){if(!(!this._map||!this.isConnected))try{let s=this._map.getContainer();if(!s.clientWidth||!s.clientHeight)return;s.querySelectorAll("img.leaflet-tile").length===0&&(this._map.invalidateSize({pan:!1}),this._applyFit());let l=Array.from(this._markers.values()).some(_=>!!_.getIcon()),h=s.querySelectorAll(".leaflet-marker-pane .mmc-dot, .leaflet-marker-pane .mmc-picture-icon");l&&h.length<this._markers.size&&this._processHass()}catch{}}_tileStyleUrl(s,l,h){return`https://api.mapy.com/v1/maptiles/${s}/256/{z}/{x}/{y}?apikey=${encodeURIComponent(l)}`+(h?`&lang=${encodeURIComponent(h)}`:"")}_teardownStyleSwitcher(){if(this._layersControl&&(this._map?.removeControl(this._layersControl),this._layersControl=void 0),this._tileStyleLayers){for(let s of Object.values(this._tileStyleLayers))s&&this._map?.hasLayer(s)&&this._map.removeLayer(s);this._tileStyleLayers=void 0}this._tileSwitchKey="",this._appliedTileStyle=void 0}_updateTileLayer(){if(!this._map||!this._config)return;let s=this._config,l=s.tile_url?.trim();if(l){if(this._teardownStyleSwitcher(),l===this._tileUrl)return;this._tileUrl=l,this._tileLayer&&this._map.removeLayer(this._tileLayer),this._tileLayer=B.tileLayer(l,{attribution:s.tile_attribution??lr,maxZoom:21,maxNativeZoom:19}),this._tileLayer.addTo(this._map);return}let h=s.api_key?.trim();if(!h)return;let _=s.language?.trim()??"",f=`${h}|${_}|${s.tile_attribution??""}`,g=s.tile_style??"basic";if(f!==this._tileSwitchKey){this._teardownStyleSwitcher(),this._tileSwitchKey=f;let y={};for(let E of Se)y[E]=B.tileLayer(this._tileStyleUrl(E,h,_),{attribution:s.tile_attribution??lr,maxZoom:21,maxNativeZoom:ua[E]??19});this._tileStyleLayers=y;let b={};for(let E of Se)b[nr[E]]=y[E];this._layersControl=B.control.layers(b,void 0,{position:"topright",collapsed:!0}).addTo(this._map),this._tileLayer=void 0}if(this._appliedTileStyle!==g){this._appliedTileStyle=g;let y=this._tileStyleLayers?.[g];y&&y!==this._tileLayer&&(this._tileLayer&&this._map.removeLayer(this._tileLayer),y.addTo(this._map),this._tileLayer=y)}this._tileUrl=this._tileStyleUrl(g,h,_)}_processHass(){!this._map||!this.hass||!this._config||this._error||(this._updateDarkMode(),this._updateZones(),this._updateMarkers(),this._updateHistorySubscription(),this._maybeFitBounds())}_resolvedEntities(){let s=this.hass;return(this._config.entities?.length?Rt(this._config.entities):nn(s).map(h=>({entity:h}))).filter(h=>!!s.states[h.entity])}_updateDarkMode(){let s=rr(this.hass,this._config.theme_mode);this._map.getContainer().classList.toggle("mmc-dark",s)}_updateMarkers(){let s=this._markerLayer,l=new Set;this._resolvedEntities().forEach((h,_)=>{let f=this.hass.states[h.entity],g=Nt(f);if(!g)return;l.add(h.entity);let y=ke(this._config,h.entity,_),b=this._markers.get(h.entity);b?(b.setLatLng([g.lat,g.lon]),this._markerColors.get(h.entity)!==y&&(this._markerColors.set(h.entity,y),b.setIcon(this._buildIcon(h,f,y)))):(b=B.marker([g.lat,g.lon],{icon:this._buildIcon(h,f,y),keyboard:!1}),b.on("click",()=>this._openMoreInfo(h.entity)),b.bindTooltip(or(h,f),{permanent:!0,direction:"right",offset:[12,0],className:"mmc-label"}),b.addTo(s),this._markers.set(h.entity,b),this._markerColors.set(h.entity,y))});for(let[h,_]of this._markers)l.has(h)||(s.removeLayer(_),_.remove(),this._markers.delete(h),this._markerColors.delete(h))}_buildIcon(s,l,h){let _=s.picture||l.attributes?.entity_picture;return _&&typeof _=="string"?B.divIcon({className:"mmc-icon-wrapper",html:`<img class="mmc-picture-icon" src="${encodeURI(_)}" alt="">`,iconSize:[40,40],iconAnchor:[20,20]}):B.divIcon({className:"mmc-icon-wrapper",html:`<span class="mmc-dot" style="background:${h}"></span>`,iconSize:[16,16],iconAnchor:[8,8]})}_openMoreInfo(s){let l=new Event("hass-more-info",{bubbles:!0,composed:!0});l.detail={entityId:s},this.dispatchEvent(l)}_updateZones(){let s=Object.values(this.hass.states).filter(f=>f.entity_id.startsWith("zone.")&&Nt(f)),l=JSON.stringify(s.map(f=>[f.entity_id,f.state,f.attributes]));if(l===this._zonesKey)return;this._zonesKey=l;let h=this._zoneLayer;if(h.clearLayers(),this._config.show_zones===!1)return;let _=getComputedStyle(this).getPropertyValue("--accent-color").trim()||"#ff9800";for(let f of s){let g=Nt(f),y=Math.max(0,Number(f.attributes.radius??100)),E=!!f.attributes.passive?"#9e9e9e":_,O=String(f.attributes.friendly_name??f.entity_id);B.circle([g.lat,g.lon],{radius:y,color:E,weight:1,fillColor:E,fillOpacity:.1}).bindTooltip(O,{permanent:!0,direction:"center",className:"mmc-label"}).addTo(h)}}_resetHistory(){this._teardownHistory(),this._historyFallbackTimer!==void 0&&(clearTimeout(this._historyFallbackTimer),this._historyFallbackTimer=void 0),this._historyStreamDataReceived=!1,this._history=new Map,this._historyKey="",this._historyLayer?.clearLayers()}_teardownHistory(){this._unsubHistory&&(this._unsubHistory.then(s=>s()).catch(()=>{}),this._unsubHistory=void 0)}_updateHistorySubscription(){let s=Number(this._config.hours_to_show??24),l=this._resolvedEntities().map(_=>_.entity).sort();if(!(s>0)||l.length===0){this._historyKey&&this._resetHistory();return}let h=`${s}|${l.join(",")}`;h!==this._historyKey&&(this._resetHistory(),this._historyKey=h,this._unsubHistory=er(this.hass,l,s,_=>{this._onHistoryLocations(_),this._historyStreamDataReceived=!0}).catch(()=>(this._unsubHistory=void 0,this._fetchHistoryFallback(l,s),()=>{})),this._historyFallbackTimer||(this._historyFallbackTimer=setTimeout(()=>{this._historyFallbackTimer=void 0,!this._historyStreamDataReceived&&this.isConnected&&this._fetchHistoryFallback(l,s)},8e3)))}_fetchHistoryFallback(s,l){try{let h=this.hass?.connection;if(!h)return;let _=new Date(Date.now()-l*3600*1e3).toISOString();h.sendMessagePromise({type:"history/history_during_period",start_time:_,end_time:new Date().toISOString(),entity_ids:s,minimal_response:!0,significant_changes_only:!0}).then(f=>{let g=en(f,s);g.length>0&&(this._onHistoryLocations(g),this._historyStreamDataReceived=!0)}).catch(()=>{})}catch{}}_onHistoryLocations(s){for(let l of s){if(!l.map_state||l.map_state.length<2)continue;let[h,_]=l.map_state;if(!Number.isFinite(h)||!Number.isFinite(_))continue;let f=this._history.get(l.entity_id)??[],g=f[f.length-1];(!g||g.lat!==h||g.lon!==_||l.ts!==void 0&&g.ts!==l.ts)&&(f.push({lat:h,lon:_,ts:l.ts}),f.length>3e3&&f.splice(0,f.length-3e3),this._history.set(l.entity_id,f))}this._renderHistory()}_renderHistory(){let s=this._historyLayer;s.clearLayers();let l=this._config,h=Math.max(1,Number(l.history_line_width??4)),_=Math.min(1,Math.max(.05,Number(l.history_line_opacity??.65))),f=l.history_point_type??"dot";this._resolvedEntities().forEach((g,y)=>{let b=this._history.get(g.entity);if(!b||b.length<2)return;let E=ke(l,g.entity,y),O=l.history_line_color?.trim()||E,D=l.history_point_color?.trim()||E;if(B.polyline(b.map(P=>[P.lat,P.lon]),{color:O,weight:h,opacity:_,interactive:!1}).addTo(s),f!=="none")for(let P of b){let et;f==="square"?et=B.marker([P.lat,P.lon],{icon:B.divIcon({className:"mmc-icon-wrapper",html:`<span class="mmc-trail-square" style="background:${D}"></span>`,iconSize:[8,8],iconAnchor:[4,4]}),keyboard:!1}):f==="ring"?et=B.circleMarker([P.lat,P.lon],{radius:4,color:D,weight:2,fill:!1,opacity:1}):et=B.circleMarker([P.lat,P.lon],{radius:3.5,color:"#ffffff",weight:1,fillColor:D,fillOpacity:1,opacity:1}),P.ts!==void 0&&et.bindTooltip(this._formatTs(P.ts),{direction:"top",offset:f==="square"?[0,-6]:[0,-4],className:"mmc-trail-tip"}),et.addTo(s)}})}_formatTs(s){try{let l=this.hass?.locale?.language||(typeof navigator<"u"?navigator.language:"")||"en";return new Intl.DateTimeFormat(l,{dateStyle:"medium",timeStyle:"medium"}).format(new Date(s))}catch{return new Date(s).toLocaleString()}}_maybeFitBounds(){if(!this._config.fit_bounds)return;let s=[],l=[];if(this._markers.forEach((_,f)=>{let g=_.getLatLng();s.push([g.lat,g.lng]),l.push(f)}),Object.keys(this.hass.states).filter(_=>_.startsWith("zone.")&&this._config.show_zones!==!1).forEach(_=>{let f=Nt(this.hass.states[_]);f&&(s.push([f.lat,f.lon]),l.push(_))}),s.length===0)return;let h=l.sort().join(",");h===this._appliedFitKey||h===this._pendingFit?.key||(this._pendingFit={key:h,bounds:B.latLngBounds(s)},this._applyFit())}_applyFit(){if(!this._map||!this._pendingFit)return;let s=this._map.getContainer();if(!s.clientWidth||!s.clientHeight)return;let{key:l,bounds:h}=this._pendingFit;if(this._pendingFit=void 0,l===this._appliedFitKey)return;this._appliedFitKey=l;let _=this._config.default_zoom??19,f=h.getCenter(),g=h.getNorthEast(),y=h.getSouthWest();g.distanceTo(y)<50?this._map.setView(f,_):this._map.fitBounds(h,{padding:[48,48],maxZoom:_})}};pt([Xt({attribute:!1})],Ht.prototype,"hass",2),pt([Qt()],Ht.prototype,"_config",2),pt([Qt()],Ht.prototype,"_error",2),Ht=pt([ei("mapy-map-card")],Ht);rn();var ca="mapy-map-card";window.customCards=window.customCards??[];window.customCards.push({type:ca,name:"Mapy.com Map Card",description:"Map card powered by Mapy.com tiles \u2013 entities, history trails, zones. Replacement for the built-in map card.",preview:!0});console.info("%c MAPY-MAP-CARD %c v0.3.2 ","color: white; background: #c83737; font-weight: 700;","color: white; background: #333; font-weight: 700;",`
https://github.com/jpribil/mapy-map-card`);})();
