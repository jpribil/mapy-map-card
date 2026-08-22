"use strict";(()=>{var Ar=Object.create;var Ve=Object.defineProperty;var bo=Object.getOwnPropertyDescriptor;var Or=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,Zr=Object.prototype.hasOwnProperty;var W=(u,r)=>()=>(u&&(r=u(u=0)),r);var Br=(u,r)=>()=>(r||u((r={exports:{}}).exports,r),r.exports),$r=(u,r)=>{for(var a in r)Ve(u,a,{get:r[a],enumerable:!0})},Nr=(u,r,a,h)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of Or(r))!Zr.call(u,c)&&c!==a&&Ve(u,c,{get:()=>r[c],enumerable:!(h=bo(r,c))||h.enumerable});return u};var Rr=(u,r,a)=>(a=u!=null?Ar(Ir(u)):{},Nr(r||!u||!u.__esModule?Ve(a,"default",{value:u,enumerable:!0}):a,u));var ft=(u,r,a,h)=>{for(var c=h>1?void 0:h?bo(r,a):r,_=u.length-1,p;_>=0;_--)(p=u[_])&&(c=(h?p(r,a,c):p(c))||c);return h&&c&&Ve(r,a,c),c};var je,Ke,wo,xo,Ge,Po,Lo,Di,Hi=W(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */je=globalThis,Ke=je.ShadowRoot&&(je.ShadyCSS===void 0||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wo=Symbol(),xo=new WeakMap,Ge=class{constructor(r,a,h){if(this._$cssResult$=!0,h!==wo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=a}get styleSheet(){let r=this.o,a=this.t;if(Ke&&r===void 0){let h=a!==void 0&&a.length===1;h&&(r=xo.get(a)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),h&&xo.set(a,r))}return r}toString(){return this.cssText}},Po=u=>new Ge(typeof u=="string"?u:u+"",void 0,wo),Lo=(u,r)=>{if(Ke)u.adoptedStyleSheets=r.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(let a of r){let h=document.createElement("style"),c=je.litNonce;c!==void 0&&h.setAttribute("nonce",c),h.textContent=a.cssText,u.appendChild(h)}},Di=Ke?u=>u:u=>u instanceof CSSStyleSheet?(r=>{let a="";for(let h of r.cssRules)a+=h.cssText;return Po(a)})(u):u});var Dr,Hr,Fr,Ur,Wr,qr,Tt,To,Vr,jr,me,ge,Ye,Eo,xt,ve=W(()=>{Hi();Hi();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({is:Dr,defineProperty:Hr,getOwnPropertyDescriptor:Fr,getOwnPropertyNames:Ur,getOwnPropertySymbols:Wr,getPrototypeOf:qr}=Object),Tt=globalThis,To=Tt.trustedTypes,Vr=To?To.emptyScript:"",jr=Tt.reactiveElementPolyfillSupport,me=(u,r)=>u,ge={toAttribute(u,r){switch(r){case Boolean:u=u?Vr:null;break;case Object:case Array:u=u==null?u:JSON.stringify(u)}return u},fromAttribute(u,r){let a=u;switch(r){case Boolean:a=u!==null;break;case Number:a=u===null?null:Number(u);break;case Object:case Array:try{a=JSON.parse(u)}catch{a=null}}return a}},Ye=(u,r)=>!Dr(u,r),Eo={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:Ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tt.litPropertyMetadata??(Tt.litPropertyMetadata=new WeakMap);xt=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,a=Eo){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(r,a),!a.noAccessor){let h=Symbol(),c=this.getPropertyDescriptor(r,h,a);c!==void 0&&Hr(this.prototype,r,c)}}static getPropertyDescriptor(r,a,h){let{get:c,set:_}=Fr(this.prototype,r)??{get(){return this[a]},set(p){this[a]=p}};return{get:c,set(p){let x=c?.call(this);_?.call(this,p),this.requestUpdate(r,x,h)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Eo}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;let r=qr(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){let a=this.properties,h=[...Ur(a),...Wr(a)];for(let c of h)this.createProperty(c,a[c])}let r=this[Symbol.metadata];if(r!==null){let a=litPropertyMetadata.get(r);if(a!==void 0)for(let[h,c]of a)this.elementProperties.set(h,c)}this._$Eh=new Map;for(let[a,h]of this.elementProperties){let c=this._$Eu(a,h);c!==void 0&&this._$Eh.set(c,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){let a=[];if(Array.isArray(r)){let h=new Set(r.flat(1/0).reverse());for(let c of h)a.unshift(Di(c))}else r!==void 0&&a.push(Di(r));return a}static _$Eu(r,a){let h=a.attribute;return h===!1?void 0:typeof h=="string"?h:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){let r=new Map,a=this.constructor.elementProperties;for(let h of a.keys())this.hasOwnProperty(h)&&(r.set(h,this[h]),delete this[h]);r.size>0&&(this._$Ep=r)}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lo(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,a,h){this._$AK(r,h)}_$ET(r,a){let h=this.constructor.elementProperties.get(r),c=this.constructor._$Eu(r,h);if(c!==void 0&&h.reflect===!0){let _=(h.converter?.toAttribute!==void 0?h.converter:ge).toAttribute(a,h.type);this._$Em=r,_==null?this.removeAttribute(c):this.setAttribute(c,_),this._$Em=null}}_$AK(r,a){let h=this.constructor,c=h._$Eh.get(r);if(c!==void 0&&this._$Em!==c){let _=h.getPropertyOptions(c),p=typeof _.converter=="function"?{fromAttribute:_.converter}:_.converter?.fromAttribute!==void 0?_.converter:ge;this._$Em=c;let x=p.fromAttribute(a,_.type);this[c]=x??this._$Ej?.get(c)??x,this._$Em=null}}requestUpdate(r,a,h,c=!1,_){if(r!==void 0){let p=this.constructor;if(c===!1&&(_=this[r]),h??(h=p.getPropertyOptions(r)),!((h.hasChanged??Ye)(_,a)||h.useDefault&&h.reflect&&_===this._$Ej?.get(r)&&!this.hasAttribute(p._$Eu(r,h))))return;this.C(r,a,h)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,a,{useDefault:h,reflect:c,wrapped:_},p){h&&!(this._$Ej??(this._$Ej=new Map)).has(r)&&(this._$Ej.set(r,p??a??this[r]),_!==!0||p!==void 0)||(this._$AL.has(r)||(this.hasUpdated||h||(a=void 0),this._$AL.set(r,a)),c===!0&&this._$Em!==r&&(this._$Eq??(this._$Eq=new Set)).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}let r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[c,_]of this._$Ep)this[c]=_;this._$Ep=void 0}let h=this.constructor.elementProperties;if(h.size>0)for(let[c,_]of h){let{wrapped:p}=_,x=this[c];p!==!0||this._$AL.has(c)||x===void 0||this.C(c,void 0,_,x)}}let r=!1,a=this._$AL;try{r=this.shouldUpdate(a),r?(this.willUpdate(a),this._$EO?.forEach(h=>h.hostUpdate?.()),this.update(a)):this._$EM()}catch(h){throw r=!1,this._$EM(),h}r&&this._$AE(a)}willUpdate(r){}_$AE(r){this._$EO?.forEach(a=>a.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(r){}firstUpdated(r){}};xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},xt[me("elementProperties")]=new Map,xt[me("finalized")]=new Map,jr?.({ReactiveElement:xt}),(Tt.reactiveElementVersions??(Tt.reactiveElementVersions=[])).push("2.1.2")});function $o(u,r){if(!Gi(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return ko!==void 0?ko.createHTML(r):r}function Kt(u,r,a=u,h){if(r===$t)return r;let c=h!==void 0?a._$Co?.[h]:a._$Cl,_=we(r)?void 0:r._$litDirective$;return c?.constructor!==_&&(c?._$AO?.(!1),_===void 0?c=void 0:(c=new _(u),c._$AT(u,a,h)),h!==void 0?(a._$Co??(a._$Co=[]))[h]=c:a._$Cl=c),c!==void 0&&(r=Kt(u,c._$AS(u,r.values),c,h)),r}var be,So,Je,ko,Io,Et,Zo,Gr,Bt,xe,we,Gi,Kr,Fi,ye,Co,zo,It,Mo,Ao,Bo,Ki,et,fa,pa,$t,R,Oo,Zt,Yr,Pe,Ui,Le,Yt,Wi,qi,Vi,ji,Jr,No,Xe=W(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */be=globalThis,So=u=>u,Je=be.trustedTypes,ko=Je?Je.createPolicy("lit-html",{createHTML:u=>u}):void 0,Io="$lit$",Et=`lit$${Math.random().toFixed(9).slice(2)}$`,Zo="?"+Et,Gr=`<${Zo}>`,Bt=document,xe=()=>Bt.createComment(""),we=u=>u===null||typeof u!="object"&&typeof u!="function",Gi=Array.isArray,Kr=u=>Gi(u)||typeof u?.[Symbol.iterator]=="function",Fi=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Co=/-->/g,zo=/>/g,It=RegExp(`>|${Fi}(?:([^\\s"'>=/]+)(${Fi}*=${Fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mo=/'/g,Ao=/"/g,Bo=/^(?:script|style|textarea|title)$/i,Ki=u=>(r,...a)=>({_$litType$:u,strings:r,values:a}),et=Ki(1),fa=Ki(2),pa=Ki(3),$t=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Oo=new WeakMap,Zt=Bt.createTreeWalker(Bt,129);Yr=(u,r)=>{let a=u.length-1,h=[],c,_=r===2?"<svg>":r===3?"<math>":"",p=ye;for(let x=0;x<a;x++){let y=u[x],E,O,I=-1,j=0;for(;j<y.length&&(p.lastIndex=j,O=p.exec(y),O!==null);)j=p.lastIndex,p===ye?O[1]==="!--"?p=Co:O[1]!==void 0?p=zo:O[2]!==void 0?(Bo.test(O[2])&&(c=RegExp("</"+O[2],"g")),p=It):O[3]!==void 0&&(p=It):p===It?O[0]===">"?(p=c??ye,I=-1):O[1]===void 0?I=-2:(I=p.lastIndex-O[2].length,E=O[1],p=O[3]===void 0?It:O[3]==='"'?Ao:Mo):p===Ao||p===Mo?p=It:p===Co||p===zo?p=ye:(p=It,c=void 0);let M=p===It&&u[x+1].startsWith("/>")?" ":"";_+=p===ye?y+Gr:I>=0?(h.push(E),y.slice(0,I)+Io+y.slice(I)+Et+M):y+Et+(I===-2?x:M)}return[$o(u,_+(u[a]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),h]},Pe=class u{constructor({strings:r,_$litType$:a},h){let c;this.parts=[];let _=0,p=0,x=r.length-1,y=this.parts,[E,O]=Yr(r,a);if(this.el=u.createElement(E,h),Zt.currentNode=this.el.content,a===2||a===3){let I=this.el.content.firstChild;I.replaceWith(...I.childNodes)}for(;(c=Zt.nextNode())!==null&&y.length<x;){if(c.nodeType===1){if(c.hasAttributes())for(let I of c.getAttributeNames())if(I.endsWith(Io)){let j=O[p++],M=c.getAttribute(I).split(Et),kt=/([.?@])?(.*)/.exec(j);y.push({type:1,index:_,name:kt[2],strings:M,ctor:kt[1]==="."?Wi:kt[1]==="?"?qi:kt[1]==="@"?Vi:Yt}),c.removeAttribute(I)}else I.startsWith(Et)&&(y.push({type:6,index:_}),c.removeAttribute(I));if(Bo.test(c.tagName)){let I=c.textContent.split(Et),j=I.length-1;if(j>0){c.textContent=Je?Je.emptyScript:"";for(let M=0;M<j;M++)c.append(I[M],xe()),Zt.nextNode(),y.push({type:2,index:++_});c.append(I[j],xe())}}}else if(c.nodeType===8)if(c.data===Zo)y.push({type:2,index:_});else{let I=-1;for(;(I=c.data.indexOf(Et,I+1))!==-1;)y.push({type:7,index:_}),I+=Et.length-1}_++}}static createElement(r,a){let h=Bt.createElement("template");return h.innerHTML=r,h}};Ui=class{constructor(r,a){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){let{el:{content:a},parts:h}=this._$AD,c=(r?.creationScope??Bt).importNode(a,!0);Zt.currentNode=c;let _=Zt.nextNode(),p=0,x=0,y=h[0];for(;y!==void 0;){if(p===y.index){let E;y.type===2?E=new Le(_,_.nextSibling,this,r):y.type===1?E=new y.ctor(_,y.name,y.strings,this,r):y.type===6&&(E=new ji(_,this,r)),this._$AV.push(E),y=h[++x]}p!==y?.index&&(_=Zt.nextNode(),p++)}return Zt.currentNode=Bt,c}p(r){let a=0;for(let h of this._$AV)h!==void 0&&(h.strings!==void 0?(h._$AI(r,h,a),a+=h.strings.length-2):h._$AI(r[a])),a++}},Le=class u{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,a,h,c){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=r,this._$AB=a,this._$AM=h,this.options=c,this._$Cv=c?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode,a=this._$AM;return a!==void 0&&r?.nodeType===11&&(r=a.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,a=this){r=Kt(this,r,a),we(r)?r===R||r==null||r===""?(this._$AH!==R&&this._$AR(),this._$AH=R):r!==this._$AH&&r!==$t&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Kr(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==R&&we(this._$AH)?this._$AA.nextSibling.data=r:this.T(Bt.createTextNode(r)),this._$AH=r}$(r){let{values:a,_$litType$:h}=r,c=typeof h=="number"?this._$AC(r):(h.el===void 0&&(h.el=Pe.createElement($o(h.h,h.h[0]),this.options)),h);if(this._$AH?._$AD===c)this._$AH.p(a);else{let _=new Ui(c,this),p=_.u(this.options);_.p(a),this.T(p),this._$AH=_}}_$AC(r){let a=Oo.get(r.strings);return a===void 0&&Oo.set(r.strings,a=new Pe(r)),a}k(r){Gi(this._$AH)||(this._$AH=[],this._$AR());let a=this._$AH,h,c=0;for(let _ of r)c===a.length?a.push(h=new u(this.O(xe()),this.O(xe()),this,this.options)):h=a[c],h._$AI(_),c++;c<a.length&&(this._$AR(h&&h._$AB.nextSibling,c),a.length=c)}_$AR(r=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);r!==this._$AB;){let h=So(r).nextSibling;So(r).remove(),r=h}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}},Yt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,a,h,c,_){this.type=1,this._$AH=R,this._$AN=void 0,this.element=r,this.name=a,this._$AM=c,this.options=_,h.length>2||h[0]!==""||h[1]!==""?(this._$AH=Array(h.length-1).fill(new String),this.strings=h):this._$AH=R}_$AI(r,a=this,h,c){let _=this.strings,p=!1;if(_===void 0)r=Kt(this,r,a,0),p=!we(r)||r!==this._$AH&&r!==$t,p&&(this._$AH=r);else{let x=r,y,E;for(r=_[0],y=0;y<_.length-1;y++)E=Kt(this,x[h+y],a,y),E===$t&&(E=this._$AH[y]),p||(p=!we(E)||E!==this._$AH[y]),E===R?r=R:r!==R&&(r+=(E??"")+_[y+1]),this._$AH[y]=E}p&&!c&&this.j(r)}j(r){r===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}},Wi=class extends Yt{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===R?void 0:r}},qi=class extends Yt{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==R)}},Vi=class extends Yt{constructor(r,a,h,c,_){super(r,a,h,c,_),this.type=5}_$AI(r,a=this){if((r=Kt(this,r,a,0)??R)===$t)return;let h=this._$AH,c=r===R&&h!==R||r.capture!==h.capture||r.once!==h.once||r.passive!==h.passive,_=r!==R&&(h===R||c);c&&this.element.removeEventListener(this.name,this,h),_&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}},ji=class{constructor(r,a,h){this.element=r,this.type=6,this._$AN=void 0,this._$AM=a,this.options=h}get _$AU(){return this._$AM._$AU}_$AI(r){Kt(this,r)}},Jr=be.litHtmlPolyfillSupport;Jr?.(Pe,Le),(be.litHtmlVersions??(be.litHtmlVersions=[])).push("3.3.3");No=(u,r,a)=>{let h=a?.renderBefore??r,c=h._$litPart$;if(c===void 0){let _=a?.renderBefore??null;h._$litPart$=c=new Le(r.insertBefore(xe(),_),_,void 0,a??{})}return c._$AI(u),c}});var Te,pt,Xr,Ro=W(()=>{ve();ve();Xe();Xe();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Te=globalThis,pt=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;let r=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=r.firstChild),r}update(r){let a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=No(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $t}};pt._$litElement$=!0,pt.finalized=!0,Te.litElementHydrateSupport?.({LitElement:pt});Xr=Te.litElementPolyfillSupport;Xr?.({LitElement:pt});(Te.litElementVersions??(Te.litElementVersions=[])).push("4.2.2")});var Do=W(()=>{/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Yi=W(()=>{ve();Xe();Ro();Do()});var Qe,Ho=W(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Qe=u=>(r,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(u,r)}):customElements.define(u,r)}});function Jt(u){return(r,a)=>typeof a=="object"?ta(u,r,a):((h,c,_)=>{let p=c.hasOwnProperty(_);return c.constructor.createProperty(_,h),p?Object.getOwnPropertyDescriptor(c,_):void 0})(u,r,a)}var Qr,ta,Ji=W(()=>{ve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Qr={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:Ye},ta=(u=Qr,r,a)=>{let{kind:h,metadata:c}=a,_=globalThis.litPropertyMetadata.get(c);if(_===void 0&&globalThis.litPropertyMetadata.set(c,_=new Map),h==="setter"&&((u=Object.create(u)).wrapped=!0),_.set(a.name,u),h==="accessor"){let{name:p}=a;return{set(x){let y=r.get.call(this);r.set.call(this,x),this.requestUpdate(p,y,u,!0,x)},init(x){return x!==void 0&&this.C(p,void 0,u,x),x}}}if(h==="setter"){let{name:p}=a;return function(x){let y=this[p];r.call(this,x),this.requestUpdate(p,y,u,!0,x)}}throw Error("Unsupported decorator location: "+h)}});function Xt(u){return Jt({...u,state:!0,attribute:!1})}var Fo=W(()=>{Ji();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Uo=W(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Qt=W(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Wo=W(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var qo=W(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Vo=W(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var jo=W(()=>{Qt();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Go=W(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Xi=W(()=>{Ho();Ji();Fo();Uo();Wo();qo();Vo();jo();Go()});var Yo=Br((ei,Ko)=>{/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(u,r){typeof ei=="object"&&typeof Ko<"u"?r(ei):typeof define=="function"&&define.amd?define(["exports"],r):(u=typeof globalThis<"u"?globalThis:u||self,r(u.leaflet={}))})(ei,(function(u){"use strict";var r="1.9.4";function a(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t}var h=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function c(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var _=0;function p(t){return"_leaflet_id"in t||(t._leaflet_id=++_),t._leaflet_id}function x(t,e,i){var n,o,s,l;return l=function(){n=!1,o&&(s.apply(i,o),o=!1)},s=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(l,e),n=!0)},s}function y(t,e,i){var n=e[1],o=e[0],s=n-o;return t===n&&i?t:((t-o)%s+s)%s+o}function E(){return!1}function O(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function I(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function j(t){return I(t).split(/\s+/)}function M(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?h(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function kt(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var ss=/\{ *([\w_ -]+) *\}/g;function on(t,e){return t.replace(ss,function(i,n){var o=e[n];if(o===void 0)throw new Error("No value provided for variable "+i);return typeof o=="function"&&(o=o(e)),o})}var rt=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function ni(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Ee="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function oi(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var sn=0;function rn(t){var e=+new Date,i=Math.max(0,16-(e-sn));return sn=e+i,window.setTimeout(t,i)}var si=window.requestAnimationFrame||oi("RequestAnimationFrame")||rn,an=window.cancelAnimationFrame||oi("CancelAnimationFrame")||oi("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Y(t,e,i){if(i&&si===rn)t.call(e);else return si.call(window,c(t,e))}function it(t){t&&an.call(window,t)}var rs={__proto__:null,extend:a,create:h,bind:c,get lastId(){return _},stamp:p,throttle:x,wrapNum:y,falseFn:E,formatNum:O,trim:I,splitWords:j,setOptions:M,getParamString:kt,template:on,isArray:rt,indexOf:ni,emptyImageUrl:Ee,requestFn:si,cancelFn:an,requestAnimFrame:Y,cancelAnimFrame:it};function _t(){}_t.extend=function(t){var e=function(){M(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=h(i);n.constructor=e,e.prototype=n;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!=="prototype"&&o!=="__super__"&&(e[o]=this[o]);return t.statics&&a(e,t.statics),t.includes&&(as(t.includes),a.apply(null,[n].concat(t.includes))),a(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?h(i.options):{},a(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var s=0,l=n._initHooks.length;s<l;s++)n._initHooks[s].call(this)}},e},_t.include=function(t){var e=this.prototype.options;return a(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},_t.mergeOptions=function(t){return a(this.prototype.options,t),this},_t.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function as(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=rt(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=j(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=j(t);for(var o=arguments.length===1,s=0,l=t.length;s<l;s++)o?this._off(t[s]):this._off(t[s],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=E;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var l=this._listens(t,e,i);if(l!==!1){var d=n[l];this._firingCount&&(d.fn=E,this._events[t]=n=n.slice()),n.splice(l,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=a({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,l=o.length;s<l;s++){var d=o[s],f=d.fn;d.once&&this.off(t,f,d.ctx),f.call(d.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var o=e;typeof e!="function"&&(n=!!e,o=void 0,i=void 0);var s=this._events&&this._events[t];if(s&&s.length&&this._listens(t,o,i)!==!1)return!0;if(n){for(var l in this._eventParents)if(this._eventParents[l].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=j(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[p(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[p(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,a({layer:t.target,propagatedFrom:t.target},t),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var ee=_t.extend(tt);function P(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var hn=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};P.prototype={clone:function(){return new P(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new P(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new P(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=hn(this.x),this.y=hn(this.y),this},distanceTo:function(t){t=w(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=w(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+O(this.x)+", "+O(this.y)+")"}};function w(t,e,i){return t instanceof P?t:rt(t)?new P(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new P(t.x,t.y):new P(t,e,i)}function $(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}$.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof P||typeof t[0]=="number"||"x"in t)e=i=w(t);else if(t=J(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return w((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return w(this.min.x,this.max.y)},getTopRight:function(){return w(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof P?t=w(t):t=J(t),t instanceof $?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=J(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>=e.x&&n.x<=i.x,l=o.y>=e.y&&n.y<=i.y;return s&&l},overlaps:function(t){t=J(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>e.x&&n.x<i.x,l=o.y>e.y&&n.y<i.y;return s&&l},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return J(w(e.x-n,e.y-o),w(i.x+n,i.y+o))},equals:function(t){return t?(t=J(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function J(t,e){return!t||t instanceof $?t:new $(t,e)}function X(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}X.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,o;if(t instanceof Z)n=t,o=t;else if(t instanceof X){if(n=t._southWest,o=t._northEast,!n||!o)return this}else return t?this.extend(C(t)||H(t)):this;return!e&&!i?(this._southWest=new Z(n.lat,n.lng),this._northEast=new Z(o.lat,o.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(o.lat,i.lat),i.lng=Math.max(o.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new X(new Z(e.lat-n,e.lng-o),new Z(i.lat+n,i.lng+o))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Z||"lat"in t?t=C(t):t=H(t);var e=this._southWest,i=this._northEast,n,o;return t instanceof X?(n=t.getSouthWest(),o=t.getNorthEast()):n=o=t,n.lat>=e.lat&&o.lat<=i.lat&&n.lng>=e.lng&&o.lng<=i.lng},intersects:function(t){t=H(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=e.lat&&n.lat<=i.lat,l=o.lng>=e.lng&&n.lng<=i.lng;return s&&l},overlaps:function(t){t=H(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>e.lat&&n.lat<i.lat,l=o.lng>e.lng&&n.lng<i.lng;return s&&l},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=H(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function H(t,e){return t instanceof X?t:new X(t,e)}function Z(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}Z.prototype={equals:function(t,e){if(!t)return!1;t=C(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+O(this.lat,t)+", "+O(this.lng,t)+")"},distanceTo:function(t){return wt.distance(this,C(t))},wrap:function(){return wt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return H([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function C(t,e,i){return t instanceof Z?t:rt(t)&&typeof t[0]!="object"?t.length===3?new Z(t[0],t[1],t[2]):t.length===2?new Z(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Z(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Z(t,e,i)}var mt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new $(n,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?y(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?y(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Z(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(n===0&&o===0)return t;var s=t.getSouthWest(),l=t.getNorthEast(),d=new Z(s.lat-n,s.lng-o),f=new Z(l.lat-n,l.lng-o);return new X(d,f)}},wt=a({},mt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),l=Math.sin((e.lng-t.lng)*i/2),d=s*s+Math.cos(n)*Math.cos(o)*l*l,f=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d));return this.R*f}}),ln=6378137,ri={R:ln,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new P(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new Z((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=ln*Math.PI;return new $([-t,-t],[t,t])})()};function ai(t,e,i,n){if(rt(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}ai.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new P((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function ie(t,e,i,n){return new ai(t,e,i,n)}var hi=a({},wt,{code:"EPSG:3857",projection:ri,transformation:(function(){var t=.5/(Math.PI*ri.R);return ie(t,.5,-t,.5)})()}),hs=a({},hi,{code:"EPSG:900913"});function un(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function cn(t,e){var i="",n,o,s,l,d,f;for(n=0,s=t.length;n<s;n++){for(d=t[n],o=0,l=d.length;o<l;o++)f=d[o],i+=(o?"L":"M")+f.x+" "+f.y;i+=e?v.svg?"z":"x":""}return i||"M0 0"}var li=document.documentElement.style,Se="ActiveXObject"in window,ls=Se&&!document.addEventListener,dn="msLaunchUri"in navigator&&!("documentMode"in document),ui=lt("webkit"),fn=lt("android"),pn=lt("android 2")||lt("android 3"),us=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),cs=fn&&lt("Google")&&us<537&&!("AudioNode"in window),ci=!!window.opera,_n=!dn&&lt("chrome"),mn=lt("gecko")&&!ui&&!ci&&!Se,ds=!_n&&lt("safari"),gn=lt("phantom"),vn="OTransition"in li,fs=navigator.platform.indexOf("Win")===0,yn=Se&&"transition"in li,di="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!pn,bn="MozPerspective"in li,ps=!window.L_DISABLE_3D&&(yn||di||bn)&&!vn&&!gn,ne=typeof orientation<"u"||lt("mobile"),_s=ne&&ui,ms=ne&&di,xn=!window.PointerEvent&&window.MSPointerEvent,wn=!!(window.PointerEvent||xn),Pn="ontouchstart"in window||!!window.TouchEvent,gs=!window.L_NO_TOUCH&&(Pn||wn),vs=ne&&ci,ys=ne&&mn,bs=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,xs=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",E,e),window.removeEventListener("testPassiveEventSupport",E,e)}catch{}return t})(),ws=(function(){return!!document.createElement("canvas").getContext})(),fi=!!(document.createElementNS&&un("svg").createSVGRect),Ps=!!fi&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Ls=!fi&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Ts=navigator.platform.indexOf("Mac")===0,Es=navigator.platform.indexOf("Linux")===0;function lt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var v={ie:Se,ielt9:ls,edge:dn,webkit:ui,android:fn,android23:pn,androidStock:cs,opera:ci,chrome:_n,gecko:mn,safari:ds,phantom:gn,opera12:vn,win:fs,ie3d:yn,webkit3d:di,gecko3d:bn,any3d:ps,mobile:ne,mobileWebkit:_s,mobileWebkit3d:ms,msPointer:xn,pointer:wn,touch:gs,touchNative:Pn,mobileOpera:vs,mobileGecko:ys,retina:bs,passiveEvents:xs,canvas:ws,svg:fi,vml:Ls,inlineSvg:Ps,mac:Ts,linux:Es},Ln=v.msPointer?"MSPointerDown":"pointerdown",Tn=v.msPointer?"MSPointerMove":"pointermove",En=v.msPointer?"MSPointerUp":"pointerup",Sn=v.msPointer?"MSPointerCancel":"pointercancel",pi={touchstart:Ln,touchmove:Tn,touchend:En,touchcancel:Sn},kn={touchstart:As,touchmove:ke,touchend:ke,touchcancel:ke},Dt={},Cn=!1;function Ss(t,e,i){return e==="touchstart"&&Ms(),kn[e]?(i=kn[e].bind(this,i),t.addEventListener(pi[e],i,!1),i):(console.warn("wrong event specified:",e),E)}function ks(t,e,i){if(!pi[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(pi[e],i,!1)}function Cs(t){Dt[t.pointerId]=t}function zs(t){Dt[t.pointerId]&&(Dt[t.pointerId]=t)}function zn(t){delete Dt[t.pointerId]}function Ms(){Cn||(document.addEventListener(Ln,Cs,!0),document.addEventListener(Tn,zs,!0),document.addEventListener(En,zn,!0),document.addEventListener(Sn,zn,!0),Cn=!0)}function ke(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Dt)e.touches.push(Dt[i]);e.changedTouches=[e],t(e)}}function As(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&G(e),ke(t,e)}function Os(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Is=200;function Zs(t,e){t.addEventListener("dblclick",e);var i=0,n;function o(s){if(s.detail!==1){n=s.detail;return}if(!(s.pointerType==="mouse"||s.sourceCapabilities&&!s.sourceCapabilities.firesTouchEvents)){var l=Zn(s);if(!(l.some(function(f){return f instanceof HTMLLabelElement&&f.attributes.for})&&!l.some(function(f){return f instanceof HTMLInputElement||f instanceof HTMLSelectElement}))){var d=Date.now();d-i<=Is?(n++,n===2&&e(Os(s))):n=1,i=d}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function Bs(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var _i=Me(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oe=Me(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Mn=oe==="webkitTransition"||oe==="OTransition"?oe+"End":"transitionend";function An(t){return typeof t=="string"?document.getElementById(t):t}function se(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function A(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function N(t){var e=t.parentNode;e&&e.removeChild(t)}function Ce(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ht(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Ft(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function mi(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=ze(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function S(t,e){if(t.classList!==void 0)for(var i=j(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!mi(t,e)){var s=ze(t);gi(t,(s?s+" ":"")+e)}}function D(t,e){t.classList!==void 0?t.classList.remove(e):gi(t,I((" "+ze(t)+" ").replace(" "+e+" "," ")))}function gi(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function ze(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function nt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&$s(t,e)}function $s(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Me(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ct(t,e,i){var n=e||new P(0,0);t.style[_i]=(v.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function F(t,e){t._leaflet_pos=e,v.any3d?Ct(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function zt(t){return t._leaflet_pos||new P(0,0)}var re,ae,vi;if("onselectstart"in document)re=function(){T(window,"selectstart",G)},ae=function(){B(window,"selectstart",G)};else{var he=Me(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);re=function(){if(he){var t=document.documentElement.style;vi=t[he],t[he]="none"}},ae=function(){he&&(document.documentElement.style[he]=vi,vi=void 0)}}function yi(){T(window,"dragstart",G)}function bi(){B(window,"dragstart",G)}var Ae,xi;function wi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Oe(),Ae=t,xi=t.style.outlineStyle,t.style.outlineStyle="none",T(window,"keydown",Oe))}function Oe(){Ae&&(Ae.style.outlineStyle=xi,Ae=void 0,xi=void 0,B(window,"keydown",Oe))}function On(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Pi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Ns={__proto__:null,TRANSFORM:_i,TRANSITION:oe,TRANSITION_END:Mn,get:An,getStyle:se,create:A,remove:N,empty:Ce,toFront:Ht,toBack:Ft,hasClass:mi,addClass:S,removeClass:D,setClass:gi,getClass:ze,setOpacity:nt,testProp:Me,setTransform:Ct,setPosition:F,getPosition:zt,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:yi,enableImageDrag:bi,preventOutline:wi,restoreOutline:Oe,getSizedParentNode:On,getScale:Pi};function T(t,e,i,n){if(e&&typeof e=="object")for(var o in e)Ti(t,o,e[o],i);else{e=j(e);for(var s=0,l=e.length;s<l;s++)Ti(t,e[s],i,n)}return this}var ut="_leaflet_events";function B(t,e,i,n){if(arguments.length===1)In(t),delete t[ut];else if(e&&typeof e=="object")for(var o in e)Ei(t,o,e[o],i);else if(e=j(e),arguments.length===2)In(t,function(d){return ni(e,d)!==-1});else for(var s=0,l=e.length;s<l;s++)Ei(t,e[s],i,n);return this}function In(t,e){for(var i in t[ut]){var n=i.split(/\d/)[0];(!e||e(n))&&Ei(t,n,null,null,i)}}var Li={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ti(t,e,i,n){var o=e+p(i)+(n?"_"+p(n):"");if(t[ut]&&t[ut][o])return this;var s=function(d){return i.call(n||t,d||window.event)},l=s;!v.touchNative&&v.pointer&&e.indexOf("touch")===0?s=Ss(t,e,s):v.touch&&e==="dblclick"?s=Zs(t,s):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Li[e]||e,s,v.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(s=function(d){d=d||window.event,ki(t,d)&&l(d)},t.addEventListener(Li[e],s,!1)):t.addEventListener(e,l,!1):t.attachEvent("on"+e,s),t[ut]=t[ut]||{},t[ut][o]=s}function Ei(t,e,i,n,o){o=o||e+p(i)+(n?"_"+p(n):"");var s=t[ut]&&t[ut][o];if(!s)return this;!v.touchNative&&v.pointer&&e.indexOf("touch")===0?ks(t,e,s):v.touch&&e==="dblclick"?Bs(t,s):"removeEventListener"in t?t.removeEventListener(Li[e]||e,s,!1):t.detachEvent("on"+e,s),t[ut][o]=null}function Mt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Si(t){return Ti(t,"wheel",Mt),this}function le(t){return T(t,"mousedown touchstart dblclick contextmenu",Mt),t._leaflet_disable_click=!0,this}function G(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function At(t){return G(t),Mt(t),this}function Zn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Bn(t,e){if(!e)return new P(t.clientX,t.clientY);var i=Pi(e),n=i.boundingClientRect;return new P((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Rs=v.linux&&v.chrome?window.devicePixelRatio:v.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function $n(t){return v.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Rs:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function ki(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Ds={__proto__:null,on:T,off:B,stopPropagation:Mt,disableScrollPropagation:Si,disableClickPropagation:le,preventDefault:G,stop:At,getPropagationPath:Zn,getMousePosition:Bn,getWheelDelta:$n,isExternalTarget:ki,addListener:T,removeListener:B},Nn=ee.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=zt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),F(this._el,i),this.fire("step")},_complete:function(){it(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),z=ee.extend({options:{crs:hi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=M(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(C(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oe&&v.any3d&&!v.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),T(this._proxy,Mn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=a({animate:i.animate},i.zoom),i.pan=a({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(v.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(v.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),s=t instanceof P?t:this.latLngToContainerPoint(t),l=s.subtract(o).multiplyBy(1-1/n),d=this.containerPointToLatLng(o.add(l));return this.setView(d,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():H(t);var i=w(e.paddingTopLeft||e.padding||[0,0]),n=w(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if(o=typeof e.maxZoom=="number"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(i).divideBy(2),l=this.project(t.getSouthWest(),o),d=this.project(t.getNorthEast(),o),f=this.unproject(l.add(d).divideBy(2).add(s),o);return{center:f,zoom:o}},fitBounds:function(t,e){if(t=H(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=w(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Nn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){S(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!v.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),s=this.getSize(),l=this._zoom;t=C(t),e=e===void 0?l:e;var d=Math.max(s.x,s.y),f=d*this.getZoomScale(l,e),m=o.distanceTo(n)||1,g=1.42,b=g*g;function k(U){var qe=U?-1:1,kr=U?f:d,Cr=f*f-d*d+qe*b*b*m*m,zr=2*kr*b*m,Ri=Cr/zr,yo=Math.sqrt(Ri*Ri+1)-Ri,Mr=yo<1e-9?-18:Math.log(yo);return Mr}function K(U){return(Math.exp(U)-Math.exp(-U))/2}function V(U){return(Math.exp(U)+Math.exp(-U))/2}function st(U){return K(U)/V(U)}var Q=k(0);function Gt(U){return d*(V(Q)/V(Q+g*U))}function Lr(U){return d*(V(Q)*st(Q+g*U)-K(Q))/b}function Tr(U){return 1-Math.pow(1-U,1.5)}var Er=Date.now(),go=(k(1)-Q)/g,Sr=i.duration?1e3*i.duration:1e3*go*.8;function vo(){var U=(Date.now()-Er)/Sr,qe=Tr(U)*go;U<=1?(this._flyToFrame=Y(vo,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(Lr(qe)/m)),l),this.getScaleZoom(d/Gt(qe),l),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),vo.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=H(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,H(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=w(e.paddingTopLeft||e.padding||[0,0]),n=w(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),s=this.project(t),l=this.getPixelBounds(),d=J([l.min.add(i),l.max.subtract(n)]),f=d.getSize();if(!d.contains(s)){this._enforcingBounds=!0;var m=s.subtract(d.getCenter()),g=d.extend(s).getSize().subtract(f);o.x+=m.x<0?-g.x:g.x,o.y+=m.y<0?-g.y:g.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=a({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),o=i.divideBy(2).round(),s=n.subtract(o);return!s.x&&!s.y?this:(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=a({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=c(this._handleGeolocationResponse,this),i=c(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Z(e,i),o=n.toBounds(t.coords.accuracy*2),s=this._locateOptions;if(s.setView){var l=this.getBoundsZoom(o);this.setView(n,s.maxZoom?Math.min(l,s.maxZoom):l)}var d={latlng:n,bounds:o,timestamp:t.timestamp};for(var f in t.coords)typeof t.coords[f]=="number"&&(d[f]=t.coords[f]);this.fire("locationfound",d)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),N(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(it(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)N(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=A("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new X(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=H(t),i=w(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),l=t.getNorthWest(),d=t.getSouthEast(),f=this.getSize().subtract(i),m=J(this.project(d,n),this.project(l,n)).getSize(),g=v.any3d?this.options.zoomSnap:1,b=f.x/m.x,k=f.y/m.y,K=e?Math.max(b,k):Math.min(b,k);return n=this.getScaleZoom(K,n),g&&(n=Math.round(n/(g/100))*(g/100),n=e?Math.ceil(n/g)*g:Math.floor(n/g)*g),Math.max(o,Math.min(s,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new P(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new $(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(C(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(w(t),e)},layerPointToLatLng:function(t){var e=w(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(C(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(H(t))},distance:function(t,e){return this.options.crs.distance(C(t),C(e))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return Bn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=An(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");T(e,"scroll",this._onScroll,this),this._containerId=p(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&v.any3d,S(t,"leaflet-container"+(v.touch?" leaflet-touch":"")+(v.retina?" leaflet-retina":"")+(v.ielt9?" leaflet-oldie":"")+(v.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=se(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),F(this._mapPane,new P(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(S(t.markerPane,"leaflet-zoom-hide"),S(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){F(this._mapPane,new P(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return it(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){F(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[p(this._container)]=this;var e=t?B:T;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),v.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){it(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,o=e==="mouseout"||e==="mouseover",s=t.target||t.srcElement,l=!1;s;){if(n=this._targets[p(s)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){l=!0;break}if(n&&n.listens(e,!0)&&(o&&!ki(s,t)||(i.push(n),o))||s===this._container)break;s=s.parentNode}return!i.length&&!l&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&wi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=a({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var o=this._findEventTargets(t,e);if(i){for(var s=[],l=0;l<i.length;l++)i[l].listens(e,!0)&&s.push(i[l]);o=s.concat(o)}if(o.length){e==="contextmenu"&&G(t);var d=o[0],f={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var m=d.getLatLng&&(!d._radius||d._radius<=10);f.containerPoint=m?this.latLngToContainerPoint(d.getLatLng()):this.mouseEventToContainerPoint(t),f.layerPoint=this.containerPointToLayerPoint(f.containerPoint),f.latlng=m?d.getLatLng():this.layerPointToLatLng(f.layerPoint)}for(l=0;l<o.length;l++)if(o[l].fire(e,f,!0),f.originalEvent._stopped||o[l].options.bubblingMouseEvents===!1&&ni(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return zt(this._mapPane)||new P(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return J([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),s=new $(n.subtract(o),n.add(o)),l=this._getBoundsOffset(s,i,e);return Math.abs(l.x)<=1&&Math.abs(l.y)<=1?t:this.unproject(n.add(l),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new $(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=J(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),s=n.max.subtract(t.max),l=this._rebound(o.x,-s.x),d=this._rebound(o.y,-s.y);return new P(l,d)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=v.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){D(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=A("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=_i,n=this._proxy.style[i];Ct(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){N(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ct(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(o)?!1:(Y(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,S(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&D(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Hs(t,e){return new z(t,e)}var at=_t.extend({options:{position:"topright"},initialize:function(t){M(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return S(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(N(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ue=function(t){return new at(t)};z.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=A("div",e+"control-container",this._container);function n(o,s){var l=e+o+" "+e+s;t[o+s]=A("div",l,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)N(this._controlCorners[t]);N(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Rn=at.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){M(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return at.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(p(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){S(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(S(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):D(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return D(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=A("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),le(e),Si(e);var n=this._section=A("section",t+"-list");i&&(this._map.on("click",this.collapse,this),T(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=A("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),T(o,{keydown:function(s){s.keyCode===13&&this._expandSafely()},click:function(s){G(s),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=A("div",t+"-base",n),this._separator=A("div",t+"-separator",n),this._overlaysList=A("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&p(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(c(function(n,o){return this.options.sortFunction(n.layer,o.layer,n.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ce(this._baseLayersList),Ce(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(p(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+p(this),i),this._layerControlInputs.push(n),n.layerId=p(t.layer),T(n,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("span");e.appendChild(s),s.appendChild(n),s.appendChild(o);var l=t.overlay?this._overlaysList:this._baseLayersList;return l.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],o=[];this._handlingClick=!0;for(var s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,T(t,"click",G),this.expand();var e=this;setTimeout(function(){B(t,"click",G),e._preventClick=!1})}}),Fs=function(t,e,i){return new Rn(t,e,i)},Ci=at.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=A("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var s=A("a",i,n);return s.innerHTML=t,s.href="#",s.title=e,s.setAttribute("role","button"),s.setAttribute("aria-label",e),le(s),T(s,"click",At),T(s,"click",o,this),T(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";D(this._zoomInButton,e),D(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(S(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(S(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});z.mergeOptions({zoomControl:!0}),z.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ci,this.addControl(this.zoomControl))});var Us=function(t){return new Ci(t)},Dn=at.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=A("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=A("div",e,i)),t.imperial&&(this._iScale=A("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,o;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+" ft",o/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),Ws=function(t){return new Dn(t)},qs='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',zi=at.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(v.inlineSvg?qs+" ":"")+"Leaflet</a>"},initialize:function(t){M(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=A("div","leaflet-control-attribution"),le(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});z.mergeOptions({attributionControl:!0}),z.addInitHook(function(){this.options.attributionControl&&new zi().addTo(this)});var Vs=function(t){return new zi(t)};at.Layers=Rn,at.Zoom=Ci,at.Scale=Dn,at.Attribution=zi,ue.layers=Fs,ue.zoom=Us,ue.scale=Ws,ue.attribution=Vs;var ct=_t.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ct.addTo=function(t,e){return t.addHandler(e,this),this};var js={Events:tt},Hn=v.touch?"touchstart mousedown":"mousedown",Pt=ee.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){M(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(T(this._dragStartTarget,Hn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pt._dragging===this&&this.finishDrag(!0),B(this._dragStartTarget,Hn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!mi(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Pt._dragging===this&&this.finishDrag();return}if(!(Pt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Pt._dragging=this,this._preventOutline&&wi(this._element),yi(),re(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=On(this._element);this._startPoint=new P(e.clientX,e.clientY),this._startPos=zt(this._element),this._parentScale=Pi(i);var n=t.type==="mousedown";T(document,n?"mousemove":"touchmove",this._onMove,this),T(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new P(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,G(t),this._moved||(this.fire("dragstart"),this._moved=!0,S(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),S(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),F(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){D(document.body,"leaflet-dragging"),this._lastTarget&&(D(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),B(document,"mousemove touchmove",this._onMove,this),B(document,"mouseup touchend touchcancel",this._onUp,this),bi(),ae();var e=this._moved&&this._moving;this._moving=!1,Pt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Fn(t,e,i){var n,o=[1,4,2,8],s,l,d,f,m,g,b,k;for(s=0,g=t.length;s<g;s++)t[s]._code=Ot(t[s],e);for(d=0;d<4;d++){for(b=o[d],n=[],s=0,g=t.length,l=g-1;s<g;l=s++)f=t[s],m=t[l],f._code&b?m._code&b||(k=Ie(m,f,b,e,i),k._code=Ot(k,e),n.push(k)):(m._code&b&&(k=Ie(m,f,b,e,i),k._code=Ot(k,e),n.push(k)),n.push(f));t=n}return t}function Un(t,e){var i,n,o,s,l,d,f,m,g;if(!t||t.length===0)throw new Error("latlngs not passed");ot(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var b=C([0,0]),k=H(t),K=k.getNorthWest().distanceTo(k.getSouthWest())*k.getNorthEast().distanceTo(k.getNorthWest());K<1700&&(b=Mi(t));var V=t.length,st=[];for(i=0;i<V;i++){var Q=C(t[i]);st.push(e.project(C([Q.lat-b.lat,Q.lng-b.lng])))}for(d=f=m=0,i=0,n=V-1;i<V;n=i++)o=st[i],s=st[n],l=o.y*s.x-s.y*o.x,f+=(o.x+s.x)*l,m+=(o.y+s.y)*l,d+=l*3;d===0?g=st[0]:g=[f/d,m/d];var Gt=e.unproject(w(g));return C([Gt.lat+b.lat,Gt.lng+b.lng])}function Mi(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=C(t[o]);e+=s.lat,i+=s.lng,n++}return C([e/n,i/n])}var Gs={__proto__:null,clipPolygon:Fn,polygonCenter:Un,centroid:Mi};function Wn(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Js(t,i),t=Ys(t,i),t}function qn(t,e,i){return Math.sqrt(ce(t,e,i,!0))}function Ks(t,e,i){return ce(t,e,i)}function Ys(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,o=new n(i);o[0]=o[i-1]=1,Ai(t,o,e,0,i-1);var s,l=[];for(s=0;s<i;s++)o[s]&&l.push(t[s]);return l}function Ai(t,e,i,n,o){var s=0,l,d,f;for(d=n+1;d<=o-1;d++)f=ce(t[d],t[n],t[o],!0),f>s&&(l=d,s=f);s>i&&(e[l]=1,Ai(t,e,i,n,l),Ai(t,e,i,l,o))}function Js(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)Xs(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<s-1&&i.push(t[s-1]),i}var Vn;function jn(t,e,i,n,o){var s=n?Vn:Ot(t,i),l=Ot(e,i),d,f,m;for(Vn=l;;){if(!(s|l))return[t,e];if(s&l)return!1;d=s||l,f=Ie(t,e,d,i,o),m=Ot(f,i),d===s?(t=f,s=m):(e=f,l=m)}}function Ie(t,e,i,n,o){var s=e.x-t.x,l=e.y-t.y,d=n.min,f=n.max,m,g;return i&8?(m=t.x+s*(f.y-t.y)/l,g=f.y):i&4?(m=t.x+s*(d.y-t.y)/l,g=d.y):i&2?(m=f.x,g=t.y+l*(f.x-t.x)/s):i&1&&(m=d.x,g=t.y+l*(d.x-t.x)/s),new P(m,g,o)}function Ot(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function Xs(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function ce(t,e,i,n){var o=e.x,s=e.y,l=i.x-o,d=i.y-s,f=l*l+d*d,m;return f>0&&(m=((t.x-o)*l+(t.y-s)*d)/f,m>1?(o=i.x,s=i.y):m>0&&(o+=l*m,s+=d*m)),l=t.x-o,d=t.y-s,n?l*l+d*d:new P(o,s)}function ot(t){return!rt(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Gn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ot(t)}function Kn(t,e){var i,n,o,s,l,d,f,m;if(!t||t.length===0)throw new Error("latlngs not passed");ot(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var g=C([0,0]),b=H(t),k=b.getNorthWest().distanceTo(b.getSouthWest())*b.getNorthEast().distanceTo(b.getNorthWest());k<1700&&(g=Mi(t));var K=t.length,V=[];for(i=0;i<K;i++){var st=C(t[i]);V.push(e.project(C([st.lat-g.lat,st.lng-g.lng])))}for(i=0,n=0;i<K-1;i++)n+=V[i].distanceTo(V[i+1])/2;if(n===0)m=V[0];else for(i=0,s=0;i<K-1;i++)if(l=V[i],d=V[i+1],o=l.distanceTo(d),s+=o,s>n){f=(s-n)/o,m=[d.x-f*(d.x-l.x),d.y-f*(d.y-l.y)];break}var Q=e.unproject(w(m));return C([Q.lat+g.lat,Q.lng+g.lng])}var Qs={__proto__:null,simplify:Wn,pointToSegmentDistance:qn,closestPointOnSegment:Ks,clipSegment:jn,_getEdgeIntersection:Ie,_getBitCode:Ot,_sqClosestPointOnSegment:ce,isFlat:ot,_flat:Gn,polylineCenter:Kn},Oi={project:function(t){return new P(t.lng,t.lat)},unproject:function(t){return new Z(t.y,t.x)},bounds:new $([-180,-90],[180,90])},Ii={R:6378137,R_MINOR:6356752314245179e-9,bounds:new $([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,s=Math.sqrt(1-o*o),l=s*Math.sin(n),d=Math.tan(Math.PI/4-n/2)/Math.pow((1-l)/(1+l),s/2);return n=-i*Math.log(Math.max(d,1e-10)),new P(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,o=Math.sqrt(1-n*n),s=Math.exp(-t.y/i),l=Math.PI/2-2*Math.atan(s),d=0,f=.1,m;d<15&&Math.abs(f)>1e-7;d++)m=o*Math.sin(l),m=Math.pow((1-m)/(1+m),o/2),f=Math.PI/2-2*Math.atan(s*m)-l,l+=f;return new Z(l*e,t.x*e/i)}},tr={__proto__:null,LonLat:Oi,Mercator:Ii,SphericalMercator:ri},er=a({},wt,{code:"EPSG:3395",projection:Ii,transformation:(function(){var t=.5/(Math.PI*Ii.R);return ie(t,.5,-t,.5)})()}),Yn=a({},wt,{code:"EPSG:4326",projection:Oi,transformation:ie(1/180,1,-1/180,.5)}),ir=a({},mt,{projection:Oi,transformation:ie(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});mt.Earth=wt,mt.EPSG3395=er,mt.EPSG3857=hi,mt.EPSG900913=hs,mt.EPSG4326=Yn,mt.Simple=ir;var ht=ee.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[p(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[p(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});z.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=p(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=p(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return p(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?rt(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[p(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=p(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ut=ht.extend({initialize:function(t,e){M(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return p(t)}}),nr=function(t,e){return new Ut(t,e)},gt=Ut.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ut.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ut.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new X;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),or=function(t,e){return new gt(t,e)},Wt=_t.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){M(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var o=w(n),s=w(e==="shadow"&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return v.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function sr(t){return new Wt(t)}var de=Wt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof de.imagePath!="string"&&(de.imagePath=this._detectIconPath()),(this.options.imagePath||de.imagePath)+Wt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,o){var s=n.exec(i);return s&&s[o]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=A("div","leaflet-default-icon-path",document.body),e=se(t,"background-image")||se(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Jn=ct.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Pt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),S(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&D(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=zt(e._icon),l=i.getPixelBounds(),d=i.getPixelOrigin(),f=J(l.min._subtract(d).add(o),l.max._subtract(d).subtract(o));if(!f.contains(s)){var m=w((Math.max(f.max.x,s.x)-f.max.x)/(l.max.x-f.max.x)-(Math.min(f.min.x,s.x)-f.min.x)/(l.min.x-f.min.x),(Math.max(f.max.y,s.y)-f.max.y)/(l.max.y-f.max.y)-(Math.min(f.min.y,s.y)-f.min.y)/(l.min.y-f.min.y)).multiplyBy(n);i.panBy(m,{animate:!1}),this._draggable._newPos._add(m),this._draggable._startPos._add(m),F(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Y(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(it(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=zt(e._icon),o=e._map.layerPointToLatLng(n);i&&F(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){it(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ze=ht.extend({options:{icon:new de,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){M(this,e),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),S(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&T(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(S(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&B(this._icon,"focus",this._panOnFocus,this),N(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&N(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&F(this._icon,t),this._shadow&&F(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(S(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Jn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Jn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?w(e.iconSize):w(0,0),n=e.iconAnchor?w(e.iconAnchor):w(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function rr(t,e){return new Ze(t,e)}var Lt=ht.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return M(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Be=Lt.extend({options:{fill:!0,radius:10},initialize:function(t,e){M(this,e),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=C(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Lt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new $(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ar(t,e){return new Be(t,e)}var Zi=Be.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=a({},i,{radius:e})),M(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new X(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Lt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===wt.distance){var o=Math.PI/180,s=this._mRadius/wt.R/o,l=i.project([e+s,t]),d=i.project([e-s,t]),f=l.add(d).divideBy(2),m=i.unproject(f).lat,g=Math.acos((Math.cos(s*o)-Math.sin(e*o)*Math.sin(m*o))/(Math.cos(e*o)*Math.cos(m*o)))/o;(isNaN(g)||g===0)&&(g=s/Math.cos(Math.PI/180*e)),this._point=f.subtract(i.getPixelOrigin()),this._radius=isNaN(g)?0:f.x-i.project([m,t-g]).x,this._radiusY=f.y-l.y}else{var b=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(b).x}this._updateBounds()}});function hr(t,e,i){return new Zi(t,e,i)}var vt=Lt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){M(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ce,o,s,l=0,d=this._parts.length;l<d;l++)for(var f=this._parts[l],m=1,g=f.length;m<g;m++){o=f[m-1],s=f[m];var b=n(t,o,s,!0);b<e&&(e=b,i=n(t,o,s))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Kn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=C(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new X,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return ot(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=ot(t),n=0,o=t.length;n<o;n++)i?(e[n]=C(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new $;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new P(t,t);this._rawPxBounds&&(this._pxBounds=new $([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof Z,o=t.length,s,l;if(n){for(l=[],s=0;s<o;s++)l[s]=this._map.latLngToLayerPoint(t[s]),i.extend(l[s]);e.push(l)}else for(s=0;s<o;s++)this._projectLatlngs(t[s],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,o,s,l,d,f;for(i=0,o=0,s=this._rings.length;i<s;i++)for(f=this._rings[i],n=0,l=f.length;n<l-1;n++)d=jn(f[n],f[n+1],t,n,!0),d&&(e[o]=e[o]||[],e[o].push(d[0]),(d[1]!==f[n+1]||n===l-2)&&(e[o].push(d[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Wn(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,l,d,f=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,s=this._parts.length;i<s;i++)for(d=this._parts[i],n=0,l=d.length,o=l-1;n<l;o=n++)if(!(!e&&n===0)&&qn(t,d[o],d[n])<=f)return!0;return!1}});function lr(t,e){return new vt(t,e)}vt._flat=Gn;var qt=vt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Un(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=vt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Z&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){vt.prototype._setLatLngs.call(this,t),ot(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ot(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new P(e,e);if(t=new $(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,o=this._rings.length,s;n<o;n++)s=Fn(this._rings[n],t,!0),s.length&&this._parts.push(s)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,o,s,l,d,f,m;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(s=0,f=this._parts.length;s<f;s++)for(i=this._parts[s],l=0,m=i.length,d=m-1;l<m;d=l++)n=i[l],o=i[d],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(e=!e);return e||vt.prototype._containsPoint.call(this,t,!0)}});function ur(t,e){return new qt(t,e)}var yt=gt.extend({initialize:function(t,e){M(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=rt(t)?t:t.features,i,n,o;if(e){for(i=0,n=e.length;i<n;i++)o=e[i],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var l=$e(t,s);return l?(l.feature=De(t),l.defaultOptions=l.options,this.resetStyle(l),s.onEachFeature&&s.onEachFeature(t,l),this.addLayer(l)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=a({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function $e(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,o=[],s=e&&e.pointToLayer,l=e&&e.coordsToLatLng||Bi,d,f,m,g;if(!n&&!i)return null;switch(i.type){case"Point":return d=l(n),Xn(s,t,d,e);case"MultiPoint":for(m=0,g=n.length;m<g;m++)d=l(n[m]),o.push(Xn(s,t,d,e));return new gt(o);case"LineString":case"MultiLineString":return f=Ne(n,i.type==="LineString"?0:1,l),new vt(f,e);case"Polygon":case"MultiPolygon":return f=Ne(n,i.type==="Polygon"?1:2,l),new qt(f,e);case"GeometryCollection":for(m=0,g=i.geometries.length;m<g;m++){var b=$e({geometry:i.geometries[m],type:"Feature",properties:t.properties},e);b&&o.push(b)}return new gt(o);case"FeatureCollection":for(m=0,g=i.features.length;m<g;m++){var k=$e(i.features[m],e);k&&o.push(k)}return new gt(o);default:throw new Error("Invalid GeoJSON object.")}}function Xn(t,e,i,n){return t?t(e,i):new Ze(i,n&&n.markersInheritOptions&&n)}function Bi(t){return new Z(t[1],t[0],t[2])}function Ne(t,e,i){for(var n=[],o=0,s=t.length,l;o<s;o++)l=e?Ne(t[o],e-1,i):(i||Bi)(t[o]),n.push(l);return n}function $i(t,e){return t=C(t),t.alt!==void 0?[O(t.lng,e),O(t.lat,e),O(t.alt,e)]:[O(t.lng,e),O(t.lat,e)]}function Re(t,e,i,n){for(var o=[],s=0,l=t.length;s<l;s++)o.push(e?Re(t[s],ot(t[s])?0:e-1,i,n):$i(t[s],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function Vt(t,e){return t.feature?a({},t.feature,{geometry:e}):De(e)}function De(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Ni={toGeoJSON:function(t){return Vt(this,{type:"Point",coordinates:$i(this.getLatLng(),t)})}};Ze.include(Ni),Zi.include(Ni),Be.include(Ni),vt.include({toGeoJSON:function(t){var e=!ot(this._latlngs),i=Re(this._latlngs,e?1:0,!1,t);return Vt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),qt.include({toGeoJSON:function(t){var e=!ot(this._latlngs),i=e&&!ot(this._latlngs[0]),n=Re(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Vt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Ut.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Vt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(o){if(o.toGeoJSON){var s=o.toGeoJSON(t);if(i)n.push(s.geometry);else{var l=De(s);l.type==="FeatureCollection"?n.push.apply(n,l.features):n.push(l)}}}),i?Vt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function Qn(t,e){return new yt(t,e)}var cr=Qn,He=ht.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=H(e),M(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(S(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){N(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ht(this._image),this},bringToBack:function(){return this._map&&Ft(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=H(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:A("img");if(S(e,"leaflet-image-layer"),this._zoomAnimated&&S(e,"leaflet-zoom-animated"),this.options.className&&S(e,this.options.className),e.onselectstart=E,e.onmousemove=E,e.onload=c(this.fire,this,"load"),e.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ct(this._image,i,e)},_reset:function(){var t=this._image,e=new $(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();F(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),dr=function(t,e,i){return new He(t,e,i)},to=He.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:A("video");if(S(e,"leaflet-image-layer"),this._zoomAnimated&&S(e,"leaflet-zoom-animated"),this.options.className&&S(e,this.options.className),e.onselectstart=E,e.onmousemove=E,e.onloadeddata=c(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}rt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var l=A("source");l.src=this._url[s],e.appendChild(l)}}});function fr(t,e,i){return new to(t,e,i)}var eo=He.extend({_initImage:function(){var t=this._image=this._url;S(t,"leaflet-image-layer"),this._zoomAnimated&&S(t,"leaflet-zoom-animated"),this.options.className&&S(t,this.options.className),t.onselectstart=E,t.onmousemove=E}});function pr(t,e,i){return new eo(t,e,i)}var dt=ht.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Z||rt(t))?(this._latlng=C(t),M(this,e)):(M(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront(),this.options.interactive&&(S(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(c(N,void 0,this._container),200)):N(this._container),this.options.interactive&&(D(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ht(this._container),this},bringToBack:function(){return this._map&&Ft(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof gt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=w(this.options.offset),i=this._getAnchor();this._zoomAnimated?F(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});z.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),ht.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(M(o,n),o._source=this):(o=e&&!n?e:new t(n,this),o.setContent(i)),o}});var Fe=dt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,dt.prototype.openOn.call(this,t)},onAdd:function(t){dt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Lt||this._source.on("preclick",Mt))},onRemove:function(t){dt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Lt||this._source.off("preclick",Mt))},getEvents:function(){var t=dt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=A("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=A("div",t+"-content-wrapper",e);if(this._contentNode=A("div",t+"-content",i),le(e),Si(this._contentNode),T(e,"contextmenu",Mt),this._tipContainer=A("div",t+"-tip-container",e),this._tip=A("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=A("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',T(n,"click",function(o){G(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",S(t,s)):D(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();F(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(se(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new P(this._containerLeft,-i-this._containerBottom);o._add(zt(this._container));var s=t.layerPointToContainerPoint(o),l=w(this.options.autoPanPadding),d=w(this.options.autoPanPaddingTopLeft||l),f=w(this.options.autoPanPaddingBottomRight||l),m=t.getSize(),g=0,b=0;s.x+n+f.x>m.x&&(g=s.x+n-m.x+f.x),s.x-g-d.x<0&&(g=s.x-d.x),s.y+i+f.y>m.y&&(b=s.y+i-m.y+f.y),s.y-b-d.y<0&&(b=s.y-d.y),(g||b)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([g,b]))}},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),_r=function(t,e){return new Fe(t,e)};z.mergeOptions({closePopupOnClick:!0}),z.include({openPopup:function(t,e,i){return this._initOverlay(Fe,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),ht.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Fe,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof gt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){At(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Lt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Ue=dt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){dt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){dt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=dt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=A("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+p(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,s=n.latLngToContainerPoint(n.getCenter()),l=n.layerPointToContainerPoint(t),d=this.options.direction,f=o.offsetWidth,m=o.offsetHeight,g=w(this.options.offset),b=this._getAnchor();d==="top"?(e=f/2,i=m):d==="bottom"?(e=f/2,i=0):d==="center"?(e=f/2,i=m/2):d==="right"?(e=0,i=m/2):d==="left"?(e=f,i=m/2):l.x<s.x?(d="right",e=0,i=m/2):(d="left",e=f+(g.x+b.x)*2,i=m/2),t=t.subtract(w(e,i,!0)).add(g).add(b),D(o,"leaflet-tooltip-right"),D(o,"leaflet-tooltip-left"),D(o,"leaflet-tooltip-top"),D(o,"leaflet-tooltip-bottom"),S(o,"leaflet-tooltip-"+d),F(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),mr=function(t,e){return new Ue(t,e)};z.include({openTooltip:function(t,e,i){return this._initOverlay(Ue,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),ht.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ue,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof gt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(T(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),T(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var io=Wt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Ce(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=w(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function gr(t){return new io(t)}Wt.Default=de;var fe=ht.extend({options:{tileSize:256,opacity:1,updateWhenIdle:v.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){M(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),N(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ht(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ft(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=x(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof P?t:new P(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,o=e.length,s;n<o;n++)s=e[n].style.zIndex,e[n]!==this._container&&s&&(i=t(i,+s));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!v.ielt9){nt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(!(!o.current||!o.loaded)){var s=Math.min(1,(t-o.loaded)/200);nt(o.el,s),s<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(it(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:E,_initContainer:function(){this._container||(this._container=A("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(N(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=A("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),E(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:E,_onRemoveLevel:E,_onCreateLevel:E,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)N(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),s=Math.floor(e/2),l=i-1,d=new P(+o,+s);d.z=+l;var f=this._tileCoordsToKey(d),m=this._tiles[f];return m&&m.active?(m.retain=!0,!0):(m&&m.loaded&&(m.retain=!0),l>n?this._retainParent(o,s,l,n):!1)},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var l=new P(o,s);l.z=i+1;var d=this._tileCoordsToKey(l),f=this._tiles[d];if(f&&f.active){f.retain=!0;continue}else f&&f.loaded&&(f.retain=!0);i+1<n&&this._retainChildren(o,s,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var s=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||s)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();v.any3d?Ct(t.el,o,n):F(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),s=e.getSize().divideBy(n*2);return new $(o.subtract(s),o.add(s))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),l=[],d=this.options.keepBuffer,f=new $(o.getBottomLeft().subtract([d,-d]),o.getTopRight().add([d,-d]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var m in this._tiles){var g=this._tiles[m].coords;(g.z!==this._tileZoom||!f.contains(new P(g.x,g.y)))&&(this._tiles[m].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var b=o.min.y;b<=o.max.y;b++)for(var k=o.min.x;k<=o.max.x;k++){var K=new P(k,b);if(K.z=this._tileZoom,!!this._isValidTile(K)){var V=this._tiles[this._tileCoordsToKey(K)];V?V.current=!0:l.push(K)}}if(l.sort(function(Q,Gt){return Q.distanceTo(s)-Gt.distanceTo(s)}),l.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var st=document.createDocumentFragment();for(k=0;k<l.length;k++)this._addTile(l[k],st);this._level.el.appendChild(st)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return H(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i),s=e.unproject(n,t.z),l=e.unproject(o,t.z);return[s,l]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new X(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new P(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(N(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){S(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=E,t.onmousemove=E,v.ielt9&&this.options.opacity<1&&nt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),c(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&Y(c(this._tileReady,this,t,null,o)),F(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(nt(i.el,0),it(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(S(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),v.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new P(this._wrapX?y(t.x,this._wrapX):t.x,this._wrapY?y(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new $(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function vr(t){return new fe(t)}var jt=fe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=M(this,e),e.detectRetina&&v.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return T(i,"load",c(this._tileOnLoad,this,e,i)),T(i,"error",c(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:v.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return on(this._url,a(e,this.options))},_tileOnLoad:function(t,e){v.ielt9?setTimeout(c(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=E,e.onerror=E,!e.complete)){e.src=Ee;var i=this._tiles[t].coords;N(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Ee),fe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Ee))return fe.prototype._tileReady.call(this,t,e,i)}});function no(t,e){return new jt(t,e)}var oo=jt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=a({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=M(this,e);var o=e.detectRetina&&v.retina?2:1,s=this.getTileSize();i.width=s.x*o,i.height=s.y*o,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,jt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=J(i.project(e[0]),i.project(e[1])),o=n.min,s=n.max,l=(this._wmsVersion>=1.3&&this._crs===Yn?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),d=jt.prototype.getTileUrl.call(this,t);return d+kt(this.wmsParams,d,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+l},setParams:function(t,e){return a(this.wmsParams,t),e||this.redraw(),this}});function yr(t,e){return new oo(t,e)}jt.WMS=oo,no.wms=yr;var bt=ht.extend({options:{padding:.1},initialize:function(t){M(this,t),p(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),S(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),s=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));v.any3d?Ct(this._container,s,i):F(this._container,s)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new $(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),so=bt.extend({options:{tolerance:0},getEvents:function(){var t=bt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){bt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");T(t,"mousemove",this._onMouseMove,this),T(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),T(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){it(this._redrawRequest),delete this._ctx,N(this._container),B(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){bt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=v.retina?2:1;F(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",v.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){bt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[p(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[p(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,o;for(o=0;o<e.length;o++){if(n=Number(e[o]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new $,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,l=t._parts,d=l.length,f=this._ctx;if(d){for(f.beginPath(),i=0;i<d;i++){for(n=0,o=l[i].length;n<o;n++)s=l[i][n],f[n?"lineTo":"moveTo"](s.x,s.y);e&&f.closePath()}this._fillStroke(f,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;o!==1&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,Math.PI*2,!1),o!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(D(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(S(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function ro(t){return v.canvas?new so(t):null}var pe=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),br={_initContainer:function(){this._container=A("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(bt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=pe("shape");S(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=pe("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[p(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;N(e),t.removeInteractiveTarget(e),delete this._layers[p(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=pe("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=rt(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=pe("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Ht(t._container)},_bringToBack:function(t){Ft(t._container)}},We=v.vml?pe:un,_e=bt.extend({_initContainer:function(){this._container=We("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=We("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){N(this._container),B(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){bt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),F(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=We("path");t.options.className&&S(e,t.options.className),t.options.interactive&&S(e,"leaflet-interactive"),this._updateStyle(t),this._layers[p(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){N(t._path),t.removeInteractiveTarget(t._path),delete this._layers[p(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,cn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+i*2+",0 "+o+-i*2+",0 ";this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Ht(t._path)},_bringToBack:function(t){Ft(t._path)}});v.vml&&_e.include(br);function ao(t){return v.svg||v.vml?new _e(t):null}z.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&ro(t)||ao(t)}});var ho=qt.extend({initialize:function(t,e){qt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=H(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function xr(t,e){return new ho(t,e)}_e.create=We,_e.pointsToPath=cn,yt.geometryToLayer=$e,yt.coordsToLatLng=Bi,yt.coordsToLatLngs=Ne,yt.latLngToCoords=$i,yt.latLngsToCoords=Re,yt.getFeature=Vt,yt.asFeature=De,z.mergeOptions({boxZoom:!0});var lo=ct.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){T(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){B(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){N(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),re(),yi(),this._startPoint=this._map.mouseEventToContainerPoint(t),T(document,{contextmenu:At,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=A("div","leaflet-zoom-box",this._container),S(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new $(this._point,this._startPoint),i=e.getSize();F(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(N(this._box),D(this._container,"leaflet-crosshair")),ae(),bi(),B(document,{contextmenu:At,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var e=new X(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});z.addInitHook("addHandler","boxZoom",lo),z.mergeOptions({doubleClickZoom:!0});var uo=ct.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});z.addInitHook("addHandler","doubleClickZoom",uo),z.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var co=ct.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Pt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}S(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){D(this._map._container,"leaflet-grab"),D(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=H(this._map.options.maxBounds);this._offsetLimit=J(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,l=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=l},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,l=i.easeLinearity,d=o.multiplyBy(l/s),f=d.distanceTo([0,0]),m=Math.min(i.inertiaMaxSpeed,f),g=d.multiplyBy(m/f),b=m/(i.inertiaDeceleration*l),k=g.multiplyBy(-b/2).round();!k.x&&!k.y?e.fire("moveend"):(k=e._limitOffset(k,e.options.maxBounds),Y(function(){e.panBy(k,{duration:b,easeLinearity:l,noMoveStart:!0,animate:!0})}))}}});z.addInitHook("addHandler","dragging",co),z.mergeOptions({keyboard:!0,keyboardPanDelta:80});var fo=ct.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),T(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),B(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){T(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){B(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=w(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(w(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;At(t)}}});z.addInitHook("addHandler","keyboard",fo),z.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var po=ct.extend({addHooks:function(){T(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){B(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=$n(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),n),At(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=i?Math.ceil(o/i)*i:o,l=t._limitZoom(e+(this._delta>0?s:-s))-e;this._delta=0,this._startTime=null,l&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+l):t.setZoomAround(this._lastMousePos,e+l))}});z.addInitHook("addHandler","scrollWheelZoom",po);var wr=600;z.mergeOptions({tapHold:v.touchNative&&v.safari&&v.mobile,tapTolerance:15});var _o=ct.extend({addHooks:function(){T(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){B(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new P(e.clientX,e.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(T(document,"touchend",G),T(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),wr),T(document,"touchend touchcancel contextmenu",this._cancel,this),T(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){B(document,"touchend",G),B(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),B(document,"touchend touchcancel contextmenu",this._cancel,this),B(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new P(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});z.addInitHook("addHandler","tapHold",_o),z.mergeOptions({touchZoom:v.touch,bounceAtZoomLimits:!0});var mo=ct.extend({addHooks:function(){S(this._map._container,"leaflet-touch-zoom"),T(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){D(this._map._container,"leaflet-touch-zoom"),B(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),T(document,"touchmove",this._onTouchMove,this),T(document,"touchend touchcancel",this._onTouchEnd,this),G(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,o===1)return}else{var s=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(o===1&&s.x===0&&s.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),it(this._animRequest);var l=c(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(l,this,!0),G(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,it(this._animRequest),B(document,"touchmove",this._onTouchMove,this),B(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});z.addInitHook("addHandler","touchZoom",mo),z.BoxZoom=lo,z.DoubleClickZoom=uo,z.Drag=co,z.Keyboard=fo,z.ScrollWheelZoom=po,z.TapHold=_o,z.TouchZoom=mo,u.Bounds=$,u.Browser=v,u.CRS=mt,u.Canvas=so,u.Circle=Zi,u.CircleMarker=Be,u.Class=_t,u.Control=at,u.DivIcon=io,u.DivOverlay=dt,u.DomEvent=Ds,u.DomUtil=Ns,u.Draggable=Pt,u.Evented=ee,u.FeatureGroup=gt,u.GeoJSON=yt,u.GridLayer=fe,u.Handler=ct,u.Icon=Wt,u.ImageOverlay=He,u.LatLng=Z,u.LatLngBounds=X,u.Layer=ht,u.LayerGroup=Ut,u.LineUtil=Qs,u.Map=z,u.Marker=Ze,u.Mixin=js,u.Path=Lt,u.Point=P,u.PolyUtil=Gs,u.Polygon=qt,u.Polyline=vt,u.Popup=Fe,u.PosAnimation=Nn,u.Projection=tr,u.Rectangle=ho,u.Renderer=bt,u.SVG=_e,u.SVGOverlay=eo,u.TileLayer=jt,u.Tooltip=Ue,u.Transformation=ai,u.Util=rs,u.VideoOverlay=to,u.bind=c,u.bounds=J,u.canvas=ro,u.circle=hr,u.circleMarker=ar,u.control=ue,u.divIcon=gr,u.extend=a,u.featureGroup=or,u.geoJSON=Qn,u.geoJson=cr,u.gridLayer=vr,u.icon=sr,u.imageOverlay=dr,u.latLng=C,u.latLngBounds=H,u.layerGroup=nr,u.map=Hs,u.marker=rr,u.point=w,u.polygon=ur,u.polyline=lr,u.popup=_r,u.rectangle=xr,u.setOptions=M,u.stamp=p,u.svg=ao,u.svgOverlay=pr,u.tileLayer=no,u.tooltip=mr,u.transformation=ie,u.version=r,u.videoOverlay=fr;var Pr=window.L;u.noConflict=function(){return window.L=Pr,this},window.L=u}))});function Qi(u){return ts[u%ts.length]}function te(u){return u.map(r=>typeof r=="string"?{entity:r}:r).filter(r=>typeof r?.entity=="string"&&r.entity.length>0)}function Nt(u){if(!u)return null;let r=Number(u.attributes?.latitude),a=Number(u.attributes?.longitude);return!Number.isFinite(r)||!Number.isFinite(a)?null:{lat:r,lon:a}}function tn(u){return Object.values(u.states).filter(r=>ia.has(r.entity_id.split(".")[0])&&Nt(r)).map(r=>r.entity_id).sort()}function es(u,r){return u.name?u.name:r?.attributes?.friendly_name??u.entity}function is(u,r){return r==="dark"?!0:r==="light"?!1:!!u.themes?.darkMode}var ts,ia,en=W(()=>{"use strict";ts=["#e53935","#d81b60","#8e24aa","#5e35b1","#3949ab","#1e88e5","#039be5","#00acc1","#00897b","#43a047","#7cb342","#c0ca33","#fdd835","#ffb300","#fb8c00","#f4511e","#6d4c41","#546e7a"];ia=new Set(["person","device_tracker","geo_location"])});var os={};$r(os,{MapyMapCardEditor:()=>St,loadEntityPicker:()=>ns});function ns(){return customElements.get("ha-entity-picker")?Promise.resolve(!0):ii||(ii=(async()=>{try{if(typeof window.loadCardHelpers!="function")return!1;let u=await window.loadCardHelpers();if(typeof u?.createCardElementEditor!="function")return!1;let r=u.createCardElementEditor({type:"entities",entities:[]});r.style.display="none",document.body.appendChild(r);let a=Date.now();for(;!customElements.get("ha-entity-picker")&&Date.now()-a<5e3;)await new Promise(h=>setTimeout(h,100));return r.remove(),!!customElements.get("ha-entity-picker")}catch{return!1}})(),ii)}var ii,na,St,nn=W(()=>{"use strict";Yi();Xi();en();ii=null,na="mapy-map-card";St=class extends pt{constructor(){super(...arguments);this._config={type:na};this._pickerReady=!1}setConfig(a){this._config={...a}}connectedCallback(){super.connectedCallback(),ns().then(a=>{this._pickerReady=a})}render(){let a=this._config;return et`
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
            .value=${a.title??""}
            @input=${h=>this._patch({title:h.target.value||void 0})}
          />
        </label>

        <label class="full">
          Mapy.com API key
          <input
            type="password"
            placeholder="from developer.mapy.com"
            .value=${a.api_key??""}
            @input=${h=>this._patch({api_key:h.target.value})}
          />
        </label>

        <label>
          Tile style
          <select
            @change=${h=>this._patch({tile_style:h.target.value})}
          >
            ${["basic","outdoor","winter","aerial"].map(h=>et`<option value=${h} ?selected=${(a.tile_style??"basic")===h}>${h}</option>`)}
          </select>
        </label>

        <label>
          Theme mode
          <select
            @change=${h=>this._patch({theme_mode:h.target.value})}
          >
            ${["auto","light","dark"].map(h=>et`<option value=${h} ?selected=${(a.theme_mode??"auto")===h}>${h}</option>`)}
          </select>
        </label>

        <label>
          Hours to show (0 = off)
          <input
            type="number"
            min="0"
            max="168"
            .value=${String(a.hours_to_show??24)}
            @input=${h=>this._patch({hours_to_show:Number(h.target.value)})}
          />
        </label>

        <label>
          Aspect ratio (e.g. 16:9) or height
          <input
            type="text"
            placeholder="16:9"
            .value=${a.aspect_ratio??""}
            @input=${h=>this._patch({aspect_ratio:h.target.value||void 0})}
          />
        </label>

        <label>
          Language (optional, e.g. cs / en / de)
          <input
            type="text"
            placeholder="auto"
            .value=${a.language??""}
            @input=${h=>this._patch({language:h.target.value||void 0})}
          />
        </label>

        <label>
          Default zoom (single point / max zoom on fit)
          <input
            type="number"
            min="1"
            max="21"
            .value=${a.default_zoom!=null?String(a.default_zoom):""}
            @input=${h=>{let c=h.target.value;this._patch({default_zoom:c===""?void 0:Number(c)})}}
          />
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${a.show_zones!==!1}
            @change=${h=>this._patch({show_zones:h.target.checked})}
          />
          Show zones
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${a.fit_bounds!==!1}
            @change=${h=>this._patch({fit_bounds:h.target.checked})}
          />
          Auto-fit bounds
        </label>

        ${this._pickerReady?this._renderEntityPickers():this._renderEntityTextarea()}

        <div class="hint">
          Free API key: <a href="https://developer.mapy.com/" target="_blank" rel="noreferrer">developer.mapy.com</a>
          – create a project, enable "Map Tiles" REST API and copy the key.
        </div>
      </div>
    `}_renderEntityPickers(){let a=te(this._config.entities??[]);return et`
      ${a.length?a.map((h,c)=>et`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${h.entity}
                  .allowCustomEntity=${!0}
                  @value-changed=${_=>this._setEntity(c,String(_.detail.value??""))}
                ></ha-entity-picker>
                <button
                  class="remove"
                  title="Remove"
                  @click=${()=>this._setEntities(a.filter((_,p)=>p!==c))}
                >
                  ✕
                </button>
              </div>
            `):R}
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .allowCustomEntity=${!0}
          @value-changed=${h=>{let c=String(h.detail.value??"");c&&!a.some(_=>_.entity===c)&&this._setEntities([...a,{entity:c}])}}
        ></ha-entity-picker>
      </div>
    `}_renderEntityTextarea(){let a=te(this._config.entities??[]);return et`
      <label class="full">
        Entities (one per line, empty = auto-discover)
        <textarea
          .value=${a.map(h=>h.entity).join(`
`)}
          @change=${h=>{let c=h.target.value.split(`
`).map(_=>_.trim()).filter(Boolean);this._setEntities(c.map(_=>({entity:_})))}}
        ></textarea>
      </label>
    `}_patch(a){this._emit({...this._config,...a})}_setEntity(a,h){let c=te(this._config.entities??[]);h&&(c[a]={...c[a],entity:h},this._setEntities(c))}_setEntities(a){this._emit({...this._config,entities:a})}_emit(a){this._config=a,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:a},bubbles:!0,composed:!0}))}};ft([Jt({attribute:!1})],St.prototype,"hass",2),ft([Xt()],St.prototype,"_config",2),ft([Xt()],St.prototype,"_pickerReady",2),St=ft([Qe("mapy-map-card-editor")],St)});Yi();Xi();var q=Rr(Yo(),1);var Jo=`/* required styles */\r
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
`;var Xo=`${Jo}
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
`;async function Qo(u,r,a,h){let c=new Date(Date.now()-a*3600*1e3).toISOString();return await u.connection.subscribeMessage(p=>{p&&Array.isArray(p.locations)&&p.locations.length>0&&h(p.locations)},{type:"history/history_stream",start_time:c,entity_ids:r,pretty_print:!1},{resubscribe:!0})}en();var oa={basic:19,outdoor:19,winter:19,aerial:19},sa='&copy; <a href="https://mapy.com/">Mapy.com</a> &copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>',Rt=class extends pt{constructor(){super(...arguments);this._markers=new Map;this._history=new Map;this._historyKey="";this._zonesKey="";this._appliedFitKey=""}static async getConfigElement(){return await Promise.resolve().then(()=>(nn(),os)),document.createElement("mapy-map-card-editor")}static getStubConfig(a){return{type:"custom:mapy-map-card",entities:a?tn(a).slice(0,5):[],hours_to_show:24,show_zones:!0}}setConfig(a){if(!a||typeof a!="object")throw new Error("Invalid configuration");let h=!!a.api_key?.trim()||!!a.tile_url?.trim();this._error=h?void 0:"Missing Mapy.com API key \u2013 set api_key in the card editor (free at developer.mapy.com).",this._config={hours_to_show:24,show_zones:!0,fit_bounds:!0,theme_mode:"auto",tile_style:"basic",aspect_ratio:"16:9",...a},this._resetHistory(),this._map&&(this._updateTileLayer(),this._processHass())}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this._teardownHistory(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this._map?.remove(),this._map=void 0,this._markers.clear(),super.disconnectedCallback()}render(){return this._config?et`
      <style>${Xo}</style>
      <ha-card>
        ${this._config.title?et`<div class="mmc-header">${this._config.title}</div>`:R}
        ${this._error?et`<div class="mmc-error">${this._error}</div>`:et`
              <div class="mmc-map-wrapper" style=${this._aspectStyle()}>
                <div class="mmc-map" id="map"></div>
              </div>
            `}
      </ha-card>
    `:et``}firstUpdated(){this._error||(this._initMap(),this._processHass())}willUpdate(a){super.willUpdate(a),a.has("hass")&&this._processHass()}updated(){this._map?.invalidateSize()}_aspectStyle(){let a=this._config?.aspect_ratio?.trim();if(!a||a.toLowerCase()==="auto")return"";let h=/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/.exec(a);return h?`aspect-ratio:${h[1]}/${h[2]};`:`height:${a};`}_initMap(){let a=this.renderRoot.querySelector("#map");if(!a)return;this._map=q.map(a,{zoomControl:!0,attributionControl:!0,worldCopyJump:!0}),this._zoneLayer=q.layerGroup().addTo(this._map),this._historyLayer=q.layerGroup().addTo(this._map),this._markerLayer=q.layerGroup().addTo(this._map),this._resizeObserver=new ResizeObserver(()=>{this._map?.invalidateSize(),this._applyFit()}),this._resizeObserver.observe(a);let h=this.hass?.config,c=typeof h?.latitude=="number"&&typeof h?.longitude=="number"?[h.latitude,h.longitude]:void 0;if(!c)for(let _ of Object.values(this.hass?.states??{})){let p=Nt(_);if(p){c=[p.lat,p.lon];break}}this._map.setView(c??[49.8032,15.4811],this._config?.default_zoom??12,{animate:!1}),this._updateTileLayer()}_updateTileLayer(){if(!this._map||!this._config)return;let a=this._config,h=a.api_key?.trim(),c=a.tile_style??"basic",_=a.tile_url?.trim()||`https://api.mapy.com/v1/maptiles/${c}/256/{z}/{x}/{y}?apikey=${encodeURIComponent(h)}`+(a.language?.trim()?`&lang=${encodeURIComponent(a.language.trim())}`:"");_!==this._tileUrl&&(this._tileUrl=_,this._tileLayer&&this._map.removeLayer(this._tileLayer),this._tileLayer=q.tileLayer(_,{attribution:a.tile_attribution??sa,maxZoom:21,maxNativeZoom:a.tile_url?19:oa[c]??19}),this._tileLayer.addTo(this._map))}_processHass(){!this._map||!this.hass||!this._config||this._error||(this._updateDarkMode(),this._updateZones(),this._updateMarkers(),this._updateHistorySubscription(),this._maybeFitBounds())}_resolvedEntities(){let a=this.hass;return(this._config.entities?.length?te(this._config.entities):tn(a).map(c=>({entity:c}))).filter(c=>!!a.states[c.entity])}_updateDarkMode(){let a=is(this.hass,this._config.theme_mode);this._map.getContainer().classList.toggle("mmc-dark",a)}_updateMarkers(){let a=this._markerLayer,h=new Set;this._resolvedEntities().forEach((c,_)=>{let p=this.hass.states[c.entity],x=Nt(p);if(!x)return;h.add(c.entity);let y=this._markers.get(c.entity);y?y.setLatLng([x.lat,x.lon]):(y=q.marker([x.lat,x.lon],{icon:this._buildIcon(c,p,Qi(_)),keyboard:!1}),y.on("click",()=>this._openMoreInfo(c.entity)),y.bindTooltip(es(c,p),{permanent:!0,direction:"right",offset:[12,0],className:"mmc-label"}),y.addTo(a),this._markers.set(c.entity,y))});for(let[c,_]of this._markers)h.has(c)||(a.removeLayer(_),_.remove(),this._markers.delete(c))}_buildIcon(a,h,c){let _=a.picture||h.attributes?.entity_picture;return _&&typeof _=="string"?q.divIcon({className:"mmc-icon-wrapper",html:`<img class="mmc-picture-icon" src="${encodeURI(_)}" alt="">`,iconSize:[40,40],iconAnchor:[20,20]}):q.divIcon({className:"mmc-icon-wrapper",html:`<span class="mmc-dot" style="background:${c}"></span>`,iconSize:[16,16],iconAnchor:[8,8]})}_openMoreInfo(a){let h=new Event("hass-more-info",{bubbles:!0,composed:!0});h.detail={entityId:a},this.dispatchEvent(h)}_updateZones(){let a=Object.values(this.hass.states).filter(p=>p.entity_id.startsWith("zone.")&&Nt(p)),h=JSON.stringify(a.map(p=>[p.entity_id,p.state,p.attributes]));if(h===this._zonesKey)return;this._zonesKey=h;let c=this._zoneLayer;if(c.clearLayers(),this._config.show_zones===!1)return;let _=getComputedStyle(this).getPropertyValue("--accent-color").trim()||"#ff9800";for(let p of a){let x=Nt(p),y=Math.max(0,Number(p.attributes.radius??100)),O=!!p.attributes.passive?"#9e9e9e":_,I=String(p.attributes.friendly_name??p.entity_id);q.circle([x.lat,x.lon],{radius:y,color:O,weight:1,fillColor:O,fillOpacity:.1}).bindTooltip(I,{permanent:!0,direction:"center",className:"mmc-label"}).addTo(c)}}_resetHistory(){this._teardownHistory(),this._history=new Map,this._historyKey="",this._historyLayer?.clearLayers()}_teardownHistory(){this._unsubHistory&&(this._unsubHistory.then(a=>a()).catch(()=>{}),this._unsubHistory=void 0)}_updateHistorySubscription(){let a=Number(this._config.hours_to_show??24),h=this._resolvedEntities().map(_=>_.entity).sort();if(!(a>0)||h.length===0){this._historyKey&&this._resetHistory();return}let c=`${a}|${h.join(",")}`;c!==this._historyKey&&(this._resetHistory(),this._historyKey=c,this._unsubHistory=Qo(this.hass,h,a,_=>this._onHistoryLocations(_)).catch(()=>{this._unsubHistory=void 0,this._historyKey=""}))}_onHistoryLocations(a){for(let h of a){if(!h.map_state||h.map_state.length<2)continue;let[c,_]=h.map_state;if(!Number.isFinite(c)||!Number.isFinite(_))continue;let p=this._history.get(h.entity_id)??[],x=p[p.length-1];(!x||x[0]!==c||x[1]!==_)&&(p.push([c,_]),p.length>3e3&&p.splice(0,p.length-3e3),this._history.set(h.entity_id,p))}this._renderHistory()}_renderHistory(){let a=this._historyLayer;a.clearLayers(),this._resolvedEntities().forEach((h,c)=>{let _=this._history.get(h.entity);!_||_.length<2||q.polyline(_,{color:Qi(c),weight:4,opacity:.65,interactive:!1}).addTo(a)})}_maybeFitBounds(){if(!this._config.fit_bounds)return;let a=[],h=[];if(this._markers.forEach((_,p)=>{let x=_.getLatLng();a.push([x.lat,x.lng]),h.push(p)}),Object.keys(this.hass.states).filter(_=>_.startsWith("zone.")&&this._config.show_zones!==!1).forEach(_=>{let p=Nt(this.hass.states[_]);p&&(a.push([p.lat,p.lon]),h.push(_))}),a.length===0)return;let c=h.sort().join(",");c===this._appliedFitKey||c===this._pendingFit?.key||(this._pendingFit={key:c,bounds:q.latLngBounds(a)},this._applyFit())}_applyFit(){if(!this._map||!this._pendingFit)return;let a=this._map.getContainer();if(!a.clientWidth||!a.clientHeight)return;let{key:h,bounds:c}=this._pendingFit;this._pendingFit=void 0,h!==this._appliedFitKey&&(this._appliedFitKey=h,c.getNorthEast().equals(c.getSouthWest())?this._map.setView(c.getCenter(),this._config.default_zoom??14):this._map.fitBounds(c,{padding:[48,48],maxZoom:this._config.default_zoom??16}))}};ft([Jt({attribute:!1})],Rt.prototype,"hass",2),ft([Xt()],Rt.prototype,"_config",2),ft([Xt()],Rt.prototype,"_error",2),Rt=ft([Qe("mapy-map-card")],Rt);nn();var ra="mapy-map-card";window.customCards=window.customCards??[];window.customCards.push({type:ra,name:"Mapy.com Map Card",description:"Map card powered by Mapy.com tiles \u2013 entities, history trails, zones. Replacement for the built-in map card.",preview:!0});console.info("%c MAPY-MAP-CARD %c v0.1.0 ","color: white; background: #c83737; font-weight: 700;","color: white; background: #333; font-weight: 700;",`
https://github.com/jpribil/mapy-map-card`);})();
