"use strict";(()=>{var Or=Object.create;var Ve=Object.defineProperty;var bo=Object.getOwnPropertyDescriptor;var Ir=Object.getOwnPropertyNames;var Zr=Object.getPrototypeOf,Br=Object.prototype.hasOwnProperty;var q=(u,a)=>()=>(u&&(a=u(u=0)),a);var $r=(u,a)=>()=>(a||u((a={exports:{}}).exports,a),a.exports),Rr=(u,a)=>{for(var r in a)Ve(u,r,{get:a[r],enumerable:!0})},Nr=(u,a,r,h)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of Ir(a))!Br.call(u,c)&&c!==r&&Ve(u,c,{get:()=>a[c],enumerable:!(h=bo(a,c))||h.enumerable});return u};var Dr=(u,a,r)=>(r=u!=null?Or(Zr(u)):{},Nr(a||!u||!u.__esModule?Ve(r,"default",{value:u,enumerable:!0}):r,u));var ft=(u,a,r,h)=>{for(var c=h>1?void 0:h?bo(a,r):a,_=u.length-1,f;_>=0;_--)(f=u[_])&&(c=(h?f(a,r,c):f(c))||c);return h&&c&&Ve(a,r,c),c};var je,Ke,wo,xo,Ge,Po,Lo,Di,Hi=q(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */je=globalThis,Ke=je.ShadowRoot&&(je.ShadyCSS===void 0||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wo=Symbol(),xo=new WeakMap,Ge=class{constructor(a,r,h){if(this._$cssResult$=!0,h!==wo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=r}get styleSheet(){let a=this.o,r=this.t;if(Ke&&a===void 0){let h=r!==void 0&&r.length===1;h&&(a=xo.get(r)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),h&&xo.set(r,a))}return a}toString(){return this.cssText}},Po=u=>new Ge(typeof u=="string"?u:u+"",void 0,wo),Lo=(u,a)=>{if(Ke)u.adoptedStyleSheets=a.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of a){let h=document.createElement("style"),c=je.litNonce;c!==void 0&&h.setAttribute("nonce",c),h.textContent=r.cssText,u.appendChild(h)}},Di=Ke?u=>u:u=>u instanceof CSSStyleSheet?(a=>{let r="";for(let h of a.cssRules)r+=h.cssText;return Po(r)})(u):u});var Hr,Fr,Wr,Ur,qr,Vr,Tt,To,jr,Gr,me,ge,Ye,ko,xt,ve=q(()=>{Hi();Hi();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({is:Hr,defineProperty:Fr,getOwnPropertyDescriptor:Wr,getOwnPropertyNames:Ur,getOwnPropertySymbols:qr,getPrototypeOf:Vr}=Object),Tt=globalThis,To=Tt.trustedTypes,jr=To?To.emptyScript:"",Gr=Tt.reactiveElementPolyfillSupport,me=(u,a)=>u,ge={toAttribute(u,a){switch(a){case Boolean:u=u?jr:null;break;case Object:case Array:u=u==null?u:JSON.stringify(u)}return u},fromAttribute(u,a){let r=u;switch(a){case Boolean:r=u!==null;break;case Number:r=u===null?null:Number(u);break;case Object:case Array:try{r=JSON.parse(u)}catch{r=null}}return r}},Ye=(u,a)=>!Hr(u,a),ko={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:Ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tt.litPropertyMetadata??(Tt.litPropertyMetadata=new WeakMap);xt=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??(this.l=[])).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,r=ko){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(a,r),!r.noAccessor){let h=Symbol(),c=this.getPropertyDescriptor(a,h,r);c!==void 0&&Fr(this.prototype,a,c)}}static getPropertyDescriptor(a,r,h){let{get:c,set:_}=Wr(this.prototype,a)??{get(){return this[r]},set(f){this[r]=f}};return{get:c,set(f){let y=c?.call(this);_?.call(this,f),this.requestUpdate(a,y,h)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??ko}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;let a=Vr(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){let r=this.properties,h=[...Ur(r),...qr(r)];for(let c of h)this.createProperty(c,r[c])}let a=this[Symbol.metadata];if(a!==null){let r=litPropertyMetadata.get(a);if(r!==void 0)for(let[h,c]of r)this.elementProperties.set(h,c)}this._$Eh=new Map;for(let[r,h]of this.elementProperties){let c=this._$Eu(r,h);c!==void 0&&this._$Eh.set(c,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){let r=[];if(Array.isArray(a)){let h=new Set(a.flat(1/0).reverse());for(let c of h)r.unshift(Di(c))}else a!==void 0&&r.push(Di(a));return r}static _$Eu(a,r){let h=r.attribute;return h===!1?void 0:typeof h=="string"?h:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(a=>a(this))}addController(a){(this._$EO??(this._$EO=new Set)).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){let a=new Map,r=this.constructor.elementProperties;for(let h of r.keys())this.hasOwnProperty(h)&&(a.set(h,this[h]),delete this[h]);a.size>0&&(this._$Ep=a)}createRenderRoot(){let a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lo(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(a=>a.hostConnected?.())}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach(a=>a.hostDisconnected?.())}attributeChangedCallback(a,r,h){this._$AK(a,h)}_$ET(a,r){let h=this.constructor.elementProperties.get(a),c=this.constructor._$Eu(a,h);if(c!==void 0&&h.reflect===!0){let _=(h.converter?.toAttribute!==void 0?h.converter:ge).toAttribute(r,h.type);this._$Em=a,_==null?this.removeAttribute(c):this.setAttribute(c,_),this._$Em=null}}_$AK(a,r){let h=this.constructor,c=h._$Eh.get(a);if(c!==void 0&&this._$Em!==c){let _=h.getPropertyOptions(c),f=typeof _.converter=="function"?{fromAttribute:_.converter}:_.converter?.fromAttribute!==void 0?_.converter:ge;this._$Em=c;let y=f.fromAttribute(r,_.type);this[c]=y??this._$Ej?.get(c)??y,this._$Em=null}}requestUpdate(a,r,h,c=!1,_){if(a!==void 0){let f=this.constructor;if(c===!1&&(_=this[a]),h??(h=f.getPropertyOptions(a)),!((h.hasChanged??Ye)(_,r)||h.useDefault&&h.reflect&&_===this._$Ej?.get(a)&&!this.hasAttribute(f._$Eu(a,h))))return;this.C(a,r,h)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,r,{useDefault:h,reflect:c,wrapped:_},f){h&&!(this._$Ej??(this._$Ej=new Map)).has(a)&&(this._$Ej.set(a,f??r??this[a]),_!==!0||f!==void 0)||(this._$AL.has(a)||(this.hasUpdated||h||(r=void 0),this._$AL.set(a,r)),c===!0&&this._$Em!==a&&(this._$Eq??(this._$Eq=new Set)).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[c,_]of this._$Ep)this[c]=_;this._$Ep=void 0}let h=this.constructor.elementProperties;if(h.size>0)for(let[c,_]of h){let{wrapped:f}=_,y=this[c];f!==!0||this._$AL.has(c)||y===void 0||this.C(c,void 0,_,y)}}let a=!1,r=this._$AL;try{a=this.shouldUpdate(r),a?(this.willUpdate(r),this._$EO?.forEach(h=>h.hostUpdate?.()),this.update(r)):this._$EM()}catch(h){throw a=!1,this._$EM(),h}a&&this._$AE(r)}willUpdate(a){}_$AE(a){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(a){}firstUpdated(a){}};xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},xt[me("elementProperties")]=new Map,xt[me("finalized")]=new Map,Gr?.({ReactiveElement:xt}),(Tt.reactiveElementVersions??(Tt.reactiveElementVersions=[])).push("2.1.2")});function $o(u,a){if(!Gi(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return Eo!==void 0?Eo.createHTML(a):a}function Kt(u,a,r=u,h){if(a===$t)return a;let c=h!==void 0?r._$Co?.[h]:r._$Cl,_=we(a)?void 0:a._$litDirective$;return c?.constructor!==_&&(c?._$AO?.(!1),_===void 0?c=void 0:(c=new _(u),c._$AT(u,r,h)),h!==void 0?(r._$Co??(r._$Co=[]))[h]=c:r._$Cl=c),c!==void 0&&(a=Kt(u,c._$AS(u,a.values),c,h)),a}var be,So,Je,Eo,Io,kt,Zo,Kr,Bt,xe,we,Gi,Yr,Fi,ye,Co,zo,It,Mo,Ao,Bo,Ki,et,pa,_a,$t,N,Oo,Zt,Jr,Pe,Wi,Le,Yt,Ui,qi,Vi,ji,Xr,Ro,Xe=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */be=globalThis,So=u=>u,Je=be.trustedTypes,Eo=Je?Je.createPolicy("lit-html",{createHTML:u=>u}):void 0,Io="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,Zo="?"+kt,Kr=`<${Zo}>`,Bt=document,xe=()=>Bt.createComment(""),we=u=>u===null||typeof u!="object"&&typeof u!="function",Gi=Array.isArray,Yr=u=>Gi(u)||typeof u?.[Symbol.iterator]=="function",Fi=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Co=/-->/g,zo=/>/g,It=RegExp(`>|${Fi}(?:([^\\s"'>=/]+)(${Fi}*=${Fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mo=/'/g,Ao=/"/g,Bo=/^(?:script|style|textarea|title)$/i,Ki=u=>(a,...r)=>({_$litType$:u,strings:a,values:r}),et=Ki(1),pa=Ki(2),_a=Ki(3),$t=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Oo=new WeakMap,Zt=Bt.createTreeWalker(Bt,129);Jr=(u,a)=>{let r=u.length-1,h=[],c,_=a===2?"<svg>":a===3?"<math>":"",f=ye;for(let y=0;y<r;y++){let v=u[y],w,C,I=-1,j=0;for(;j<v.length&&(f.lastIndex=j,C=f.exec(v),C!==null);)j=f.lastIndex,f===ye?C[1]==="!--"?f=Co:C[1]!==void 0?f=zo:C[2]!==void 0?(Bo.test(C[2])&&(c=RegExp("</"+C[2],"g")),f=It):C[3]!==void 0&&(f=It):f===It?C[0]===">"?(f=c??ye,I=-1):C[1]===void 0?I=-2:(I=f.lastIndex-C[2].length,w=C[1],f=C[3]===void 0?It:C[3]==='"'?Ao:Mo):f===Ao||f===Mo?f=It:f===Co||f===zo?f=ye:(f=It,c=void 0);let A=f===It&&u[y+1].startsWith("/>")?" ":"";_+=f===ye?v+Kr:I>=0?(h.push(w),v.slice(0,I)+Io+v.slice(I)+kt+A):v+kt+(I===-2?y:A)}return[$o(u,_+(u[r]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),h]},Pe=class u{constructor({strings:a,_$litType$:r},h){let c;this.parts=[];let _=0,f=0,y=a.length-1,v=this.parts,[w,C]=Jr(a,r);if(this.el=u.createElement(w,h),Zt.currentNode=this.el.content,r===2||r===3){let I=this.el.content.firstChild;I.replaceWith(...I.childNodes)}for(;(c=Zt.nextNode())!==null&&v.length<y;){if(c.nodeType===1){if(c.hasAttributes())for(let I of c.getAttributeNames())if(I.endsWith(Io)){let j=C[f++],A=c.getAttribute(I).split(kt),Et=/([.?@])?(.*)/.exec(j);v.push({type:1,index:_,name:Et[2],strings:A,ctor:Et[1]==="."?Ui:Et[1]==="?"?qi:Et[1]==="@"?Vi:Yt}),c.removeAttribute(I)}else I.startsWith(kt)&&(v.push({type:6,index:_}),c.removeAttribute(I));if(Bo.test(c.tagName)){let I=c.textContent.split(kt),j=I.length-1;if(j>0){c.textContent=Je?Je.emptyScript:"";for(let A=0;A<j;A++)c.append(I[A],xe()),Zt.nextNode(),v.push({type:2,index:++_});c.append(I[j],xe())}}}else if(c.nodeType===8)if(c.data===Zo)v.push({type:2,index:_});else{let I=-1;for(;(I=c.data.indexOf(kt,I+1))!==-1;)v.push({type:7,index:_}),I+=kt.length-1}_++}}static createElement(a,r){let h=Bt.createElement("template");return h.innerHTML=a,h}};Wi=class{constructor(a,r){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){let{el:{content:r},parts:h}=this._$AD,c=(a?.creationScope??Bt).importNode(r,!0);Zt.currentNode=c;let _=Zt.nextNode(),f=0,y=0,v=h[0];for(;v!==void 0;){if(f===v.index){let w;v.type===2?w=new Le(_,_.nextSibling,this,a):v.type===1?w=new v.ctor(_,v.name,v.strings,this,a):v.type===6&&(w=new ji(_,this,a)),this._$AV.push(w),v=h[++y]}f!==v?.index&&(_=Zt.nextNode(),f++)}return Zt.currentNode=Bt,c}p(a){let r=0;for(let h of this._$AV)h!==void 0&&(h.strings!==void 0?(h._$AI(a,h,r),r+=h.strings.length-2):h._$AI(a[r])),r++}},Le=class u{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,r,h,c){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=a,this._$AB=r,this._$AM=h,this.options=c,this._$Cv=c?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode,r=this._$AM;return r!==void 0&&a?.nodeType===11&&(a=r.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,r=this){a=Kt(this,a,r),we(a)?a===N||a==null||a===""?(this._$AH!==N&&this._$AR(),this._$AH=N):a!==this._$AH&&a!==$t&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):Yr(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==N&&we(this._$AH)?this._$AA.nextSibling.data=a:this.T(Bt.createTextNode(a)),this._$AH=a}$(a){let{values:r,_$litType$:h}=a,c=typeof h=="number"?this._$AC(a):(h.el===void 0&&(h.el=Pe.createElement($o(h.h,h.h[0]),this.options)),h);if(this._$AH?._$AD===c)this._$AH.p(r);else{let _=new Wi(c,this),f=_.u(this.options);_.p(r),this.T(f),this._$AH=_}}_$AC(a){let r=Oo.get(a.strings);return r===void 0&&Oo.set(a.strings,r=new Pe(a)),r}k(a){Gi(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,h,c=0;for(let _ of a)c===r.length?r.push(h=new u(this.O(xe()),this.O(xe()),this,this.options)):h=r[c],h._$AI(_),c++;c<r.length&&(this._$AR(h&&h._$AB.nextSibling,c),r.length=c)}_$AR(a=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);a!==this._$AB;){let h=So(a).nextSibling;So(a).remove(),a=h}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}},Yt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,r,h,c,_){this.type=1,this._$AH=N,this._$AN=void 0,this.element=a,this.name=r,this._$AM=c,this.options=_,h.length>2||h[0]!==""||h[1]!==""?(this._$AH=Array(h.length-1).fill(new String),this.strings=h):this._$AH=N}_$AI(a,r=this,h,c){let _=this.strings,f=!1;if(_===void 0)a=Kt(this,a,r,0),f=!we(a)||a!==this._$AH&&a!==$t,f&&(this._$AH=a);else{let y=a,v,w;for(a=_[0],v=0;v<_.length-1;v++)w=Kt(this,y[h+v],r,v),w===$t&&(w=this._$AH[v]),f||(f=!we(w)||w!==this._$AH[v]),w===N?a=N:a!==N&&(a+=(w??"")+_[v+1]),this._$AH[v]=w}f&&!c&&this.j(a)}j(a){a===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},Ui=class extends Yt{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===N?void 0:a}},qi=class extends Yt{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==N)}},Vi=class extends Yt{constructor(a,r,h,c,_){super(a,r,h,c,_),this.type=5}_$AI(a,r=this){if((a=Kt(this,a,r,0)??N)===$t)return;let h=this._$AH,c=a===N&&h!==N||a.capture!==h.capture||a.once!==h.once||a.passive!==h.passive,_=a!==N&&(h===N||c);c&&this.element.removeEventListener(this.name,this,h),_&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}},ji=class{constructor(a,r,h){this.element=a,this.type=6,this._$AN=void 0,this._$AM=r,this.options=h}get _$AU(){return this._$AM._$AU}_$AI(a){Kt(this,a)}},Xr=be.litHtmlPolyfillSupport;Xr?.(Pe,Le),(be.litHtmlVersions??(be.litHtmlVersions=[])).push("3.3.3");Ro=(u,a,r)=>{let h=r?.renderBefore??a,c=h._$litPart$;if(c===void 0){let _=r?.renderBefore??null;h._$litPart$=c=new Le(a.insertBefore(xe(),_),_,void 0,r??{})}return c._$AI(u),c}});var Te,pt,Qr,No=q(()=>{ve();ve();Xe();Xe();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Te=globalThis,pt=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;let a=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=a.firstChild),a}update(a){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=Ro(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $t}};pt._$litElement$=!0,pt.finalized=!0,Te.litElementHydrateSupport?.({LitElement:pt});Qr=Te.litElementPolyfillSupport;Qr?.({LitElement:pt});(Te.litElementVersions??(Te.litElementVersions=[])).push("4.2.2")});var Do=q(()=>{/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Yi=q(()=>{ve();Xe();No();Do()});var Qe,Ho=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Qe=u=>(a,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(u,a)}):customElements.define(u,a)}});function Jt(u){return(a,r)=>typeof r=="object"?ea(u,a,r):((h,c,_)=>{let f=c.hasOwnProperty(_);return c.constructor.createProperty(_,h),f?Object.getOwnPropertyDescriptor(c,_):void 0})(u,a,r)}var ta,ea,Ji=q(()=>{ve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ta={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:Ye},ea=(u=ta,a,r)=>{let{kind:h,metadata:c}=r,_=globalThis.litPropertyMetadata.get(c);if(_===void 0&&globalThis.litPropertyMetadata.set(c,_=new Map),h==="setter"&&((u=Object.create(u)).wrapped=!0),_.set(r.name,u),h==="accessor"){let{name:f}=r;return{set(y){let v=a.get.call(this);a.set.call(this,y),this.requestUpdate(f,v,u,!0,y)},init(y){return y!==void 0&&this.C(f,void 0,u,y),y}}}if(h==="setter"){let{name:f}=r;return function(y){let v=this[f];a.call(this,y),this.requestUpdate(f,v,u,!0,y)}}throw Error("Unsupported decorator location: "+h)}});function Xt(u){return Jt({...u,state:!0,attribute:!1})}var Fo=q(()=>{Ji();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Wo=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Qt=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Uo=q(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var qo=q(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Vo=q(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var jo=q(()=>{Qt();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Go=q(()=>{Qt();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Xi=q(()=>{Ho();Ji();Fo();Wo();Uo();qo();Vo();jo();Go()});var Yo=$r((ei,Ko)=>{/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(u,a){typeof ei=="object"&&typeof Ko<"u"?a(ei):typeof define=="function"&&define.amd?define(["exports"],a):(u=typeof globalThis<"u"?globalThis:u||self,a(u.leaflet={}))})(ei,(function(u){"use strict";var a="1.9.4";function r(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t}var h=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function c(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var _=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++_),t._leaflet_id}function y(t,e,i){var n,o,s,l;return l=function(){n=!1,o&&(s.apply(i,o),o=!1)},s=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(l,e),n=!0)},s}function v(t,e,i){var n=e[1],o=e[0],s=n-o;return t===n&&i?t:((t-o)%s+s)%s+o}function w(){return!1}function C(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function I(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function j(t){return I(t).split(/\s+/)}function A(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?h(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function Et(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var rs=/\{ *([\w_ -]+) *\}/g;function on(t,e){return t.replace(rs,function(i,n){var o=e[n];if(o===void 0)throw new Error("No value provided for variable "+i);return typeof o=="function"&&(o=o(e)),o})}var rt=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function ni(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var ke="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function oi(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var sn=0;function rn(t){var e=+new Date,i=Math.max(0,16-(e-sn));return sn=e+i,window.setTimeout(t,i)}var si=window.requestAnimationFrame||oi("RequestAnimationFrame")||rn,an=window.cancelAnimationFrame||oi("CancelAnimationFrame")||oi("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Y(t,e,i){if(i&&si===rn)t.call(e);else return si.call(window,c(t,e))}function it(t){t&&an.call(window,t)}var as={__proto__:null,extend:r,create:h,bind:c,get lastId(){return _},stamp:f,throttle:y,wrapNum:v,falseFn:w,formatNum:C,trim:I,splitWords:j,setOptions:A,getParamString:Et,template:on,isArray:rt,indexOf:ni,emptyImageUrl:ke,requestFn:si,cancelFn:an,requestAnimFrame:Y,cancelAnimFrame:it};function _t(){}_t.extend=function(t){var e=function(){A(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=h(i);n.constructor=e,e.prototype=n;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!=="prototype"&&o!=="__super__"&&(e[o]=this[o]);return t.statics&&r(e,t.statics),t.includes&&(hs(t.includes),r.apply(null,[n].concat(t.includes))),r(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?h(i.options):{},r(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var s=0,l=n._initHooks.length;s<l;s++)n._initHooks[s].call(this)}},e},_t.include=function(t){var e=this.prototype.options;return r(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},_t.mergeOptions=function(t){return r(this.prototype.options,t),this},_t.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function hs(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=rt(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=j(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=j(t);for(var o=arguments.length===1,s=0,l=t.length;s<l;s++)o?this._off(t[s]):this._off(t[s],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=w;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var l=this._listens(t,e,i);if(l!==!1){var d=n[l];this._firingCount&&(d.fn=w,this._events[t]=n=n.slice()),n.splice(l,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=r({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,l=o.length;s<l;s++){var d=o[s],p=d.fn;d.once&&this.off(t,p,d.ctx),p.call(d.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var o=e;typeof e!="function"&&(n=!!e,o=void 0,i=void 0);var s=this._events&&this._events[t];if(s&&s.length&&this._listens(t,o,i)!==!1)return!0;if(n){for(var l in this._eventParents)if(this._eventParents[l].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=j(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[f(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,r({layer:t.target,propagatedFrom:t.target},t),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var ee=_t.extend(tt);function T(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var hn=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};T.prototype={clone:function(){return new T(this.x,this.y)},add:function(t){return this.clone()._add(P(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(P(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new T(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new T(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=hn(this.x),this.y=hn(this.y),this},distanceTo:function(t){t=P(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=P(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=P(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+C(this.x)+", "+C(this.y)+")"}};function P(t,e,i){return t instanceof T?t:rt(t)?new T(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new T(t.x,t.y):new T(t,e,i)}function $(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}$.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof T||typeof t[0]=="number"||"x"in t)e=i=P(t);else if(t=J(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return P((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return P(this.min.x,this.max.y)},getTopRight:function(){return P(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof T?t=P(t):t=J(t),t instanceof $?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=J(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>=e.x&&n.x<=i.x,l=o.y>=e.y&&n.y<=i.y;return s&&l},overlaps:function(t){t=J(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>e.x&&n.x<i.x,l=o.y>e.y&&n.y<i.y;return s&&l},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return J(P(e.x-n,e.y-o),P(i.x+n,i.y+o))},equals:function(t){return t?(t=J(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function J(t,e){return!t||t instanceof $?t:new $(t,e)}function X(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}X.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,o;if(t instanceof Z)n=t,o=t;else if(t instanceof X){if(n=t._southWest,o=t._northEast,!n||!o)return this}else return t?this.extend(z(t)||F(t)):this;return!e&&!i?(this._southWest=new Z(n.lat,n.lng),this._northEast=new Z(o.lat,o.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(o.lat,i.lat),i.lng=Math.max(o.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new X(new Z(e.lat-n,e.lng-o),new Z(i.lat+n,i.lng+o))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof Z||"lat"in t?t=z(t):t=F(t);var e=this._southWest,i=this._northEast,n,o;return t instanceof X?(n=t.getSouthWest(),o=t.getNorthEast()):n=o=t,n.lat>=e.lat&&o.lat<=i.lat&&n.lng>=e.lng&&o.lng<=i.lng},intersects:function(t){t=F(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=e.lat&&n.lat<=i.lat,l=o.lng>=e.lng&&n.lng<=i.lng;return s&&l},overlaps:function(t){t=F(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>e.lat&&n.lat<i.lat,l=o.lng>e.lng&&n.lng<i.lng;return s&&l},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=F(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function F(t,e){return t instanceof X?t:new X(t,e)}function Z(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}Z.prototype={equals:function(t,e){if(!t)return!1;t=z(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+C(this.lat,t)+", "+C(this.lng,t)+")"},distanceTo:function(t){return wt.distance(this,z(t))},wrap:function(){return wt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return F([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function z(t,e,i){return t instanceof Z?t:rt(t)&&typeof t[0]!="object"?t.length===3?new Z(t[0],t[1],t[2]):t.length===2?new Z(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new Z(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new Z(t,e,i)}var mt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new $(n,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?v(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?v(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new Z(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(n===0&&o===0)return t;var s=t.getSouthWest(),l=t.getNorthEast(),d=new Z(s.lat-n,s.lng-o),p=new Z(l.lat-n,l.lng-o);return new X(d,p)}},wt=r({},mt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),l=Math.sin((e.lng-t.lng)*i/2),d=s*s+Math.cos(n)*Math.cos(o)*l*l,p=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d));return this.R*p}}),ln=6378137,ri={R:ln,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new T(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new Z((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=ln*Math.PI;return new $([-t,-t],[t,t])})()};function ai(t,e,i,n){if(rt(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}ai.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new T((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function ie(t,e,i,n){return new ai(t,e,i,n)}var hi=r({},wt,{code:"EPSG:3857",projection:ri,transformation:(function(){var t=.5/(Math.PI*ri.R);return ie(t,.5,-t,.5)})()}),ls=r({},hi,{code:"EPSG:900913"});function un(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function cn(t,e){var i="",n,o,s,l,d,p;for(n=0,s=t.length;n<s;n++){for(d=t[n],o=0,l=d.length;o<l;o++)p=d[o],i+=(o?"L":"M")+p.x+" "+p.y;i+=e?b.svg?"z":"x":""}return i||"M0 0"}var li=document.documentElement.style,Se="ActiveXObject"in window,us=Se&&!document.addEventListener,dn="msLaunchUri"in navigator&&!("documentMode"in document),ui=lt("webkit"),fn=lt("android"),pn=lt("android 2")||lt("android 3"),cs=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ds=fn&&lt("Google")&&cs<537&&!("AudioNode"in window),ci=!!window.opera,_n=!dn&&lt("chrome"),mn=lt("gecko")&&!ui&&!ci&&!Se,fs=!_n&&lt("safari"),gn=lt("phantom"),vn="OTransition"in li,ps=navigator.platform.indexOf("Win")===0,yn=Se&&"transition"in li,di="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!pn,bn="MozPerspective"in li,_s=!window.L_DISABLE_3D&&(yn||di||bn)&&!vn&&!gn,ne=typeof orientation<"u"||lt("mobile"),ms=ne&&ui,gs=ne&&di,xn=!window.PointerEvent&&window.MSPointerEvent,wn=!!(window.PointerEvent||xn),Pn="ontouchstart"in window||!!window.TouchEvent,vs=!window.L_NO_TOUCH&&(Pn||wn),ys=ne&&ci,bs=ne&&mn,xs=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ws=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",w,e),window.removeEventListener("testPassiveEventSupport",w,e)}catch{}return t})(),Ps=(function(){return!!document.createElement("canvas").getContext})(),fi=!!(document.createElementNS&&un("svg").createSVGRect),Ls=!!fi&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Ts=!fi&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),ks=navigator.platform.indexOf("Mac")===0,Ss=navigator.platform.indexOf("Linux")===0;function lt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var b={ie:Se,ielt9:us,edge:dn,webkit:ui,android:fn,android23:pn,androidStock:ds,opera:ci,chrome:_n,gecko:mn,safari:fs,phantom:gn,opera12:vn,win:ps,ie3d:yn,webkit3d:di,gecko3d:bn,any3d:_s,mobile:ne,mobileWebkit:ms,mobileWebkit3d:gs,msPointer:xn,pointer:wn,touch:vs,touchNative:Pn,mobileOpera:ys,mobileGecko:bs,retina:xs,passiveEvents:ws,canvas:Ps,svg:fi,vml:Ts,inlineSvg:Ls,mac:ks,linux:Ss},Ln=b.msPointer?"MSPointerDown":"pointerdown",Tn=b.msPointer?"MSPointerMove":"pointermove",kn=b.msPointer?"MSPointerUp":"pointerup",Sn=b.msPointer?"MSPointerCancel":"pointercancel",pi={touchstart:Ln,touchmove:Tn,touchend:kn,touchcancel:Sn},En={touchstart:Os,touchmove:Ee,touchend:Ee,touchcancel:Ee},Dt={},Cn=!1;function Es(t,e,i){return e==="touchstart"&&As(),En[e]?(i=En[e].bind(this,i),t.addEventListener(pi[e],i,!1),i):(console.warn("wrong event specified:",e),w)}function Cs(t,e,i){if(!pi[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(pi[e],i,!1)}function zs(t){Dt[t.pointerId]=t}function Ms(t){Dt[t.pointerId]&&(Dt[t.pointerId]=t)}function zn(t){delete Dt[t.pointerId]}function As(){Cn||(document.addEventListener(Ln,zs,!0),document.addEventListener(Tn,Ms,!0),document.addEventListener(kn,zn,!0),document.addEventListener(Sn,zn,!0),Cn=!0)}function Ee(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Dt)e.touches.push(Dt[i]);e.changedTouches=[e],t(e)}}function Os(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&G(e),Ee(t,e)}function Is(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var Zs=200;function Bs(t,e){t.addEventListener("dblclick",e);var i=0,n;function o(s){if(s.detail!==1){n=s.detail;return}if(!(s.pointerType==="mouse"||s.sourceCapabilities&&!s.sourceCapabilities.firesTouchEvents)){var l=Zn(s);if(!(l.some(function(p){return p instanceof HTMLLabelElement&&p.attributes.for})&&!l.some(function(p){return p instanceof HTMLInputElement||p instanceof HTMLSelectElement}))){var d=Date.now();d-i<=Zs?(n++,n===2&&e(Is(s))):n=1,i=d}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function $s(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var _i=Me(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oe=Me(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Mn=oe==="webkitTransition"||oe==="OTransition"?oe+"End":"transitionend";function An(t){return typeof t=="string"?document.getElementById(t):t}function se(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function O(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function R(t){var e=t.parentNode;e&&e.removeChild(t)}function Ce(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Ht(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Ft(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function mi(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=ze(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function S(t,e){if(t.classList!==void 0)for(var i=j(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!mi(t,e)){var s=ze(t);gi(t,(s?s+" ":"")+e)}}function D(t,e){t.classList!==void 0?t.classList.remove(e):gi(t,I((" "+ze(t)+" ").replace(" "+e+" "," ")))}function gi(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function ze(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function nt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&Rs(t,e)}function Rs(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Me(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ct(t,e,i){var n=e||new T(0,0);t.style[_i]=(b.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function W(t,e){t._leaflet_pos=e,b.any3d?Ct(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function zt(t){return t._leaflet_pos||new T(0,0)}var re,ae,vi;if("onselectstart"in document)re=function(){k(window,"selectstart",G)},ae=function(){B(window,"selectstart",G)};else{var he=Me(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);re=function(){if(he){var t=document.documentElement.style;vi=t[he],t[he]="none"}},ae=function(){he&&(document.documentElement.style[he]=vi,vi=void 0)}}function yi(){k(window,"dragstart",G)}function bi(){B(window,"dragstart",G)}var Ae,xi;function wi(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Oe(),Ae=t,xi=t.style.outlineStyle,t.style.outlineStyle="none",k(window,"keydown",Oe))}function Oe(){Ae&&(Ae.style.outlineStyle=xi,Ae=void 0,xi=void 0,B(window,"keydown",Oe))}function On(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Pi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var Ns={__proto__:null,TRANSFORM:_i,TRANSITION:oe,TRANSITION_END:Mn,get:An,getStyle:se,create:O,remove:R,empty:Ce,toFront:Ht,toBack:Ft,hasClass:mi,addClass:S,removeClass:D,setClass:gi,getClass:ze,setOpacity:nt,testProp:Me,setTransform:Ct,setPosition:W,getPosition:zt,get disableTextSelection(){return re},get enableTextSelection(){return ae},disableImageDrag:yi,enableImageDrag:bi,preventOutline:wi,restoreOutline:Oe,getSizedParentNode:On,getScale:Pi};function k(t,e,i,n){if(e&&typeof e=="object")for(var o in e)Ti(t,o,e[o],i);else{e=j(e);for(var s=0,l=e.length;s<l;s++)Ti(t,e[s],i,n)}return this}var ut="_leaflet_events";function B(t,e,i,n){if(arguments.length===1)In(t),delete t[ut];else if(e&&typeof e=="object")for(var o in e)ki(t,o,e[o],i);else if(e=j(e),arguments.length===2)In(t,function(d){return ni(e,d)!==-1});else for(var s=0,l=e.length;s<l;s++)ki(t,e[s],i,n);return this}function In(t,e){for(var i in t[ut]){var n=i.split(/\d/)[0];(!e||e(n))&&ki(t,n,null,null,i)}}var Li={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ti(t,e,i,n){var o=e+f(i)+(n?"_"+f(n):"");if(t[ut]&&t[ut][o])return this;var s=function(d){return i.call(n||t,d||window.event)},l=s;!b.touchNative&&b.pointer&&e.indexOf("touch")===0?s=Es(t,e,s):b.touch&&e==="dblclick"?s=Bs(t,s):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Li[e]||e,s,b.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(s=function(d){d=d||window.event,Ei(t,d)&&l(d)},t.addEventListener(Li[e],s,!1)):t.addEventListener(e,l,!1):t.attachEvent("on"+e,s),t[ut]=t[ut]||{},t[ut][o]=s}function ki(t,e,i,n,o){o=o||e+f(i)+(n?"_"+f(n):"");var s=t[ut]&&t[ut][o];if(!s)return this;!b.touchNative&&b.pointer&&e.indexOf("touch")===0?Cs(t,e,s):b.touch&&e==="dblclick"?$s(t,s):"removeEventListener"in t?t.removeEventListener(Li[e]||e,s,!1):t.detachEvent("on"+e,s),t[ut][o]=null}function Mt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Si(t){return Ti(t,"wheel",Mt),this}function le(t){return k(t,"mousedown touchstart dblclick contextmenu",Mt),t._leaflet_disable_click=!0,this}function G(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function At(t){return G(t),Mt(t),this}function Zn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Bn(t,e){if(!e)return new T(t.clientX,t.clientY);var i=Pi(e),n=i.boundingClientRect;return new T((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var Ds=b.linux&&b.chrome?window.devicePixelRatio:b.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function $n(t){return b.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Ds:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ei(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var Hs={__proto__:null,on:k,off:B,stopPropagation:Mt,disableScrollPropagation:Si,disableClickPropagation:le,preventDefault:G,stop:At,getPropagationPath:Zn,getMousePosition:Bn,getWheelDelta:$n,isExternalTarget:Ei,addListener:k,removeListener:B},Rn=ee.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=zt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Y(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),W(this._el,i),this.fire("step")},_complete:function(){it(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),M=ee.extend({options:{crs:hi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=A(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(z(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oe&&b.any3d&&!b.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),k(this._proxy,Mn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(z(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=r({animate:i.animate},i.zoom),i.pan=r({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(b.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),s=t instanceof T?t:this.latLngToContainerPoint(t),l=s.subtract(o).multiplyBy(1-1/n),d=this.containerPointToLatLng(o.add(l));return this.setView(d,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():F(t);var i=P(e.paddingTopLeft||e.padding||[0,0]),n=P(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if(o=typeof e.maxZoom=="number"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(i).divideBy(2),l=this.project(t.getSouthWest(),o),d=this.project(t.getNorthEast(),o),p=this.unproject(l.add(d).divideBy(2).add(s),o);return{center:p,zoom:o}},fitBounds:function(t,e){if(t=F(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=P(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Rn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){S(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!b.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),s=this.getSize(),l=this._zoom;t=z(t),e=e===void 0?l:e;var d=Math.max(s.x,s.y),p=d*this.getZoomScale(l,e),m=o.distanceTo(n)||1,g=1.42,x=g*g;function E(U){var qe=U?-1:1,Cr=U?p:d,zr=p*p-d*d+qe*x*x*m*m,Mr=2*Cr*x*m,Ni=zr/Mr,yo=Math.sqrt(Ni*Ni+1)-Ni,Ar=yo<1e-9?-18:Math.log(yo);return Ar}function K(U){return(Math.exp(U)-Math.exp(-U))/2}function V(U){return(Math.exp(U)+Math.exp(-U))/2}function st(U){return K(U)/V(U)}var Q=E(0);function Gt(U){return d*(V(Q)/V(Q+g*U))}function Tr(U){return d*(V(Q)*st(Q+g*U)-K(Q))/x}function kr(U){return 1-Math.pow(1-U,1.5)}var Sr=Date.now(),go=(E(1)-Q)/g,Er=i.duration?1e3*i.duration:1e3*go*.8;function vo(){var U=(Date.now()-Sr)/Er,qe=kr(U)*go;U<=1?(this._flyToFrame=Y(vo,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(Tr(qe)/m)),l),this.getScaleZoom(d/Gt(qe),l),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),vo.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=F(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,F(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=P(e.paddingTopLeft||e.padding||[0,0]),n=P(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),s=this.project(t),l=this.getPixelBounds(),d=J([l.min.add(i),l.max.subtract(n)]),p=d.getSize();if(!d.contains(s)){this._enforcingBounds=!0;var m=s.subtract(d.getCenter()),g=d.extend(s).getSize().subtract(p);o.x+=m.x<0?-g.x:g.x,o.y+=m.y<0?-g.y:g.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=r({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),o=i.divideBy(2).round(),s=n.subtract(o);return!s.x&&!s.y?this:(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=r({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=c(this._handleGeolocationResponse,this),i=c(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new Z(e,i),o=n.toBounds(t.coords.accuracy*2),s=this._locateOptions;if(s.setView){var l=this.getBoundsZoom(o);this.setView(n,s.maxZoom?Math.min(l,s.maxZoom):l)}var d={latlng:n,bounds:o,timestamp:t.timestamp};for(var p in t.coords)typeof t.coords[p]=="number"&&(d[p]=t.coords[p]);this.fire("locationfound",d)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),R(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(it(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)R(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=O("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new X(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=F(t),i=P(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),l=t.getNorthWest(),d=t.getSouthEast(),p=this.getSize().subtract(i),m=J(this.project(d,n),this.project(l,n)).getSize(),g=b.any3d?this.options.zoomSnap:1,x=p.x/m.x,E=p.y/m.y,K=e?Math.max(x,E):Math.min(x,E);return n=this.getScaleZoom(K,n),g&&(n=Math.round(n/(g/100))*(g/100),n=e?Math.ceil(n/g)*g:Math.floor(n/g)*g),Math.max(o,Math.min(s,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new T(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new $(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(z(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(P(t),e)},layerPointToLatLng:function(t){var e=P(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(z(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(z(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(F(t))},distance:function(t,e){return this.options.crs.distance(z(t),z(e))},containerPointToLayerPoint:function(t){return P(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return P(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(P(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(z(t)))},mouseEventToContainerPoint:function(t){return Bn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=An(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");k(e,"scroll",this._onScroll,this),this._containerId=f(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&b.any3d,S(t,"leaflet-container"+(b.touch?" leaflet-touch":"")+(b.retina?" leaflet-retina":"")+(b.ielt9?" leaflet-oldie":"")+(b.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=se(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),W(this._mapPane,new T(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(S(t.markerPane,"leaflet-zoom-hide"),S(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){W(this._mapPane,new T(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return it(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){W(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[f(this._container)]=this;var e=t?B:k;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),b.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){it(this._resizeRequest),this._resizeRequest=Y(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,o=e==="mouseout"||e==="mouseover",s=t.target||t.srcElement,l=!1;s;){if(n=this._targets[f(s)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){l=!0;break}if(n&&n.listens(e,!0)&&(o&&!Ei(s,t)||(i.push(n),o))||s===this._container)break;s=s.parentNode}return!i.length&&!l&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&wi(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=r({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var o=this._findEventTargets(t,e);if(i){for(var s=[],l=0;l<i.length;l++)i[l].listens(e,!0)&&s.push(i[l]);o=s.concat(o)}if(o.length){e==="contextmenu"&&G(t);var d=o[0],p={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var m=d.getLatLng&&(!d._radius||d._radius<=10);p.containerPoint=m?this.latLngToContainerPoint(d.getLatLng()):this.mouseEventToContainerPoint(t),p.layerPoint=this.containerPointToLayerPoint(p.containerPoint),p.latlng=m?d.getLatLng():this.layerPointToLatLng(p.layerPoint)}for(l=0;l<o.length;l++)if(o[l].fire(e,p,!0),p.originalEvent._stopped||o[l].options.bubblingMouseEvents===!1&&ni(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return zt(this._mapPane)||new T(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return J([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),s=new $(n.subtract(o),n.add(o)),l=this._getBoundsOffset(s,i,e);return Math.abs(l.x)<=1&&Math.abs(l.y)<=1?t:this.unproject(n.add(l),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new $(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=J(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),s=n.max.subtract(t.max),l=this._rebound(o.x,-s.x),d=this._rebound(o.y,-s.y);return new T(l,d)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=b.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){D(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=O("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=_i,n=this._proxy.style[i];Ct(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){R(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ct(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(o)?!1:(Y(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,S(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&D(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Fs(t,e){return new M(t,e)}var at=_t.extend({options:{position:"topright"},initialize:function(t){A(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return S(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(R(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ue=function(t){return new at(t)};M.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=O("div",e+"control-container",this._container);function n(o,s){var l=e+o+" "+e+s;t[o+s]=O("div",l,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)R(this._controlCorners[t]);R(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Nn=at.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){A(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return at.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(f(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){S(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(S(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):D(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return D(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=O("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),le(e),Si(e);var n=this._section=O("section",t+"-list");i&&(this._map.on("click",this.collapse,this),k(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=O("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),k(o,{keydown:function(s){s.keyCode===13&&this._expandSafely()},click:function(s){G(s),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=O("div",t+"-base",n),this._separator=O("div",t+"-separator",n),this._overlaysList=O("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&f(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(c(function(n,o){return this.options.sortFunction(n.layer,o.layer,n.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ce(this._baseLayersList),Ce(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(f(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+f(this),i),this._layerControlInputs.push(n),n.layerId=f(t.layer),k(n,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("span");e.appendChild(s),s.appendChild(n),s.appendChild(o);var l=t.overlay?this._overlaysList:this._baseLayersList;return l.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],o=[];this._handlingClick=!0;for(var s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,k(t,"click",G),this.expand();var e=this;setTimeout(function(){B(t,"click",G),e._preventClick=!1})}}),Ws=function(t,e,i){return new Nn(t,e,i)},Ci=at.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=O("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var s=O("a",i,n);return s.innerHTML=t,s.href="#",s.title=e,s.setAttribute("role","button"),s.setAttribute("aria-label",e),le(s),k(s,"click",At),k(s,"click",o,this),k(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";D(this._zoomInButton,e),D(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(S(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(S(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});M.mergeOptions({zoomControl:!0}),M.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ci,this.addControl(this.zoomControl))});var Us=function(t){return new Ci(t)},Dn=at.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=O("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=O("div",e,i)),t.imperial&&(this._iScale=O("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,o;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+" ft",o/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),qs=function(t){return new Dn(t)},Vs='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',zi=at.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(b.inlineSvg?Vs+" ":"")+"Leaflet</a>"},initialize:function(t){A(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=O("div","leaflet-control-attribution"),le(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});M.mergeOptions({attributionControl:!0}),M.addInitHook(function(){this.options.attributionControl&&new zi().addTo(this)});var js=function(t){return new zi(t)};at.Layers=Nn,at.Zoom=Ci,at.Scale=Dn,at.Attribution=zi,ue.layers=Ws,ue.zoom=Us,ue.scale=qs,ue.attribution=js;var ct=_t.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ct.addTo=function(t,e){return t.addHandler(e,this),this};var Gs={Events:tt},Hn=b.touch?"touchstart mousedown":"mousedown",Pt=ee.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){A(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(k(this._dragStartTarget,Hn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pt._dragging===this&&this.finishDrag(!0),B(this._dragStartTarget,Hn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!mi(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Pt._dragging===this&&this.finishDrag();return}if(!(Pt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Pt._dragging=this,this._preventOutline&&wi(this._element),yi(),re(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=On(this._element);this._startPoint=new T(e.clientX,e.clientY),this._startPos=zt(this._element),this._parentScale=Pi(i);var n=t.type==="mousedown";k(document,n?"mousemove":"touchmove",this._onMove,this),k(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new T(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,G(t),this._moved||(this.fire("dragstart"),this._moved=!0,S(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),S(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),W(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){D(document.body,"leaflet-dragging"),this._lastTarget&&(D(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),B(document,"mousemove touchmove",this._onMove,this),B(document,"mouseup touchend touchcancel",this._onUp,this),bi(),ae();var e=this._moved&&this._moving;this._moving=!1,Pt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Fn(t,e,i){var n,o=[1,4,2,8],s,l,d,p,m,g,x,E;for(s=0,g=t.length;s<g;s++)t[s]._code=Ot(t[s],e);for(d=0;d<4;d++){for(x=o[d],n=[],s=0,g=t.length,l=g-1;s<g;l=s++)p=t[s],m=t[l],p._code&x?m._code&x||(E=Ie(m,p,x,e,i),E._code=Ot(E,e),n.push(E)):(m._code&x&&(E=Ie(m,p,x,e,i),E._code=Ot(E,e),n.push(E)),n.push(p));t=n}return t}function Wn(t,e){var i,n,o,s,l,d,p,m,g;if(!t||t.length===0)throw new Error("latlngs not passed");ot(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var x=z([0,0]),E=F(t),K=E.getNorthWest().distanceTo(E.getSouthWest())*E.getNorthEast().distanceTo(E.getNorthWest());K<1700&&(x=Mi(t));var V=t.length,st=[];for(i=0;i<V;i++){var Q=z(t[i]);st.push(e.project(z([Q.lat-x.lat,Q.lng-x.lng])))}for(d=p=m=0,i=0,n=V-1;i<V;n=i++)o=st[i],s=st[n],l=o.y*s.x-s.y*o.x,p+=(o.x+s.x)*l,m+=(o.y+s.y)*l,d+=l*3;d===0?g=st[0]:g=[p/d,m/d];var Gt=e.unproject(P(g));return z([Gt.lat+x.lat,Gt.lng+x.lng])}function Mi(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=z(t[o]);e+=s.lat,i+=s.lng,n++}return z([e/n,i/n])}var Ks={__proto__:null,clipPolygon:Fn,polygonCenter:Wn,centroid:Mi};function Un(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Xs(t,i),t=Js(t,i),t}function qn(t,e,i){return Math.sqrt(ce(t,e,i,!0))}function Ys(t,e,i){return ce(t,e,i)}function Js(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,o=new n(i);o[0]=o[i-1]=1,Ai(t,o,e,0,i-1);var s,l=[];for(s=0;s<i;s++)o[s]&&l.push(t[s]);return l}function Ai(t,e,i,n,o){var s=0,l,d,p;for(d=n+1;d<=o-1;d++)p=ce(t[d],t[n],t[o],!0),p>s&&(l=d,s=p);s>i&&(e[l]=1,Ai(t,e,i,n,l),Ai(t,e,i,l,o))}function Xs(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)Qs(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<s-1&&i.push(t[s-1]),i}var Vn;function jn(t,e,i,n,o){var s=n?Vn:Ot(t,i),l=Ot(e,i),d,p,m;for(Vn=l;;){if(!(s|l))return[t,e];if(s&l)return!1;d=s||l,p=Ie(t,e,d,i,o),m=Ot(p,i),d===s?(t=p,s=m):(e=p,l=m)}}function Ie(t,e,i,n,o){var s=e.x-t.x,l=e.y-t.y,d=n.min,p=n.max,m,g;return i&8?(m=t.x+s*(p.y-t.y)/l,g=p.y):i&4?(m=t.x+s*(d.y-t.y)/l,g=d.y):i&2?(m=p.x,g=t.y+l*(p.x-t.x)/s):i&1&&(m=d.x,g=t.y+l*(d.x-t.x)/s),new T(m,g,o)}function Ot(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function Qs(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function ce(t,e,i,n){var o=e.x,s=e.y,l=i.x-o,d=i.y-s,p=l*l+d*d,m;return p>0&&(m=((t.x-o)*l+(t.y-s)*d)/p,m>1?(o=i.x,s=i.y):m>0&&(o+=l*m,s+=d*m)),l=t.x-o,d=t.y-s,n?l*l+d*d:new T(o,s)}function ot(t){return!rt(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Gn(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ot(t)}function Kn(t,e){var i,n,o,s,l,d,p,m;if(!t||t.length===0)throw new Error("latlngs not passed");ot(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var g=z([0,0]),x=F(t),E=x.getNorthWest().distanceTo(x.getSouthWest())*x.getNorthEast().distanceTo(x.getNorthWest());E<1700&&(g=Mi(t));var K=t.length,V=[];for(i=0;i<K;i++){var st=z(t[i]);V.push(e.project(z([st.lat-g.lat,st.lng-g.lng])))}for(i=0,n=0;i<K-1;i++)n+=V[i].distanceTo(V[i+1])/2;if(n===0)m=V[0];else for(i=0,s=0;i<K-1;i++)if(l=V[i],d=V[i+1],o=l.distanceTo(d),s+=o,s>n){p=(s-n)/o,m=[d.x-p*(d.x-l.x),d.y-p*(d.y-l.y)];break}var Q=e.unproject(P(m));return z([Q.lat+g.lat,Q.lng+g.lng])}var tr={__proto__:null,simplify:Un,pointToSegmentDistance:qn,closestPointOnSegment:Ys,clipSegment:jn,_getEdgeIntersection:Ie,_getBitCode:Ot,_sqClosestPointOnSegment:ce,isFlat:ot,_flat:Gn,polylineCenter:Kn},Oi={project:function(t){return new T(t.lng,t.lat)},unproject:function(t){return new Z(t.y,t.x)},bounds:new $([-180,-90],[180,90])},Ii={R:6378137,R_MINOR:6356752314245179e-9,bounds:new $([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,s=Math.sqrt(1-o*o),l=s*Math.sin(n),d=Math.tan(Math.PI/4-n/2)/Math.pow((1-l)/(1+l),s/2);return n=-i*Math.log(Math.max(d,1e-10)),new T(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,o=Math.sqrt(1-n*n),s=Math.exp(-t.y/i),l=Math.PI/2-2*Math.atan(s),d=0,p=.1,m;d<15&&Math.abs(p)>1e-7;d++)m=o*Math.sin(l),m=Math.pow((1-m)/(1+m),o/2),p=Math.PI/2-2*Math.atan(s*m)-l,l+=p;return new Z(l*e,t.x*e/i)}},er={__proto__:null,LonLat:Oi,Mercator:Ii,SphericalMercator:ri},ir=r({},wt,{code:"EPSG:3395",projection:Ii,transformation:(function(){var t=.5/(Math.PI*Ii.R);return ie(t,.5,-t,.5)})()}),Yn=r({},wt,{code:"EPSG:4326",projection:Oi,transformation:ie(1/180,1,-1/180,.5)}),nr=r({},mt,{projection:Oi,transformation:ie(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});mt.Earth=wt,mt.EPSG3395=ir,mt.EPSG3857=hi,mt.EPSG900913=ls,mt.EPSG4326=Yn,mt.Simple=nr;var ht=ee.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[f(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[f(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});M.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=f(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=f(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return f(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?rt(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=f(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Wt=ht.extend({initialize:function(t,e){A(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return f(t)}}),or=function(t,e){return new Wt(t,e)},gt=Wt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Wt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Wt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new X;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),sr=function(t,e){return new gt(t,e)},Ut=_t.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){A(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var o=P(n),s=P(e==="shadow"&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return b.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function rr(t){return new Ut(t)}var de=Ut.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof de.imagePath!="string"&&(de.imagePath=this._detectIconPath()),(this.options.imagePath||de.imagePath)+Ut.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,o){var s=n.exec(i);return s&&s[o]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=O("div","leaflet-default-icon-path",document.body),e=se(t,"background-image")||se(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),Jn=ct.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Pt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),S(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&D(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=zt(e._icon),l=i.getPixelBounds(),d=i.getPixelOrigin(),p=J(l.min._subtract(d).add(o),l.max._subtract(d).subtract(o));if(!p.contains(s)){var m=P((Math.max(p.max.x,s.x)-p.max.x)/(l.max.x-p.max.x)-(Math.min(p.min.x,s.x)-p.min.x)/(l.min.x-p.min.x),(Math.max(p.max.y,s.y)-p.max.y)/(l.max.y-p.max.y)-(Math.min(p.min.y,s.y)-p.min.y)/(l.min.y-p.min.y)).multiplyBy(n);i.panBy(m,{animate:!1}),this._draggable._newPos._add(m),this._draggable._startPos._add(m),W(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Y(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(it(this._panRequest),this._panRequest=Y(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=zt(e._icon),o=e._map.layerPointToLatLng(n);i&&W(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){it(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ze=ht.extend({options:{icon:new de,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){A(this,e),this._latlng=z(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=z(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),S(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(S(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&B(this._icon,"focus",this._panOnFocus,this),R(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&R(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&W(this._icon,t),this._shadow&&W(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(S(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Jn)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Jn(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?P(e.iconSize):P(0,0),n=e.iconAnchor?P(e.iconAnchor):P(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ar(t,e){return new Ze(t,e)}var Lt=ht.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return A(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Be=Lt.extend({options:{fill:!0,radius:10},initialize:function(t,e){A(this,e),this._latlng=z(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=z(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Lt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new $(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function hr(t,e){return new Be(t,e)}var Zi=Be.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=r({},i,{radius:e})),A(this,e),this._latlng=z(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new X(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Lt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===wt.distance){var o=Math.PI/180,s=this._mRadius/wt.R/o,l=i.project([e+s,t]),d=i.project([e-s,t]),p=l.add(d).divideBy(2),m=i.unproject(p).lat,g=Math.acos((Math.cos(s*o)-Math.sin(e*o)*Math.sin(m*o))/(Math.cos(e*o)*Math.cos(m*o)))/o;(isNaN(g)||g===0)&&(g=s/Math.cos(Math.PI/180*e)),this._point=p.subtract(i.getPixelOrigin()),this._radius=isNaN(g)?0:p.x-i.project([m,t-g]).x,this._radiusY=p.y-l.y}else{var x=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(x).x}this._updateBounds()}});function lr(t,e,i){return new Zi(t,e,i)}var vt=Lt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){A(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ce,o,s,l=0,d=this._parts.length;l<d;l++)for(var p=this._parts[l],m=1,g=p.length;m<g;m++){o=p[m-1],s=p[m];var x=n(t,o,s,!0);x<e&&(e=x,i=n(t,o,s))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Kn(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=z(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new X,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return ot(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=ot(t),n=0,o=t.length;n<o;n++)i?(e[n]=z(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new $;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new T(t,t);this._rawPxBounds&&(this._pxBounds=new $([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof Z,o=t.length,s,l;if(n){for(l=[],s=0;s<o;s++)l[s]=this._map.latLngToLayerPoint(t[s]),i.extend(l[s]);e.push(l)}else for(s=0;s<o;s++)this._projectLatlngs(t[s],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,o,s,l,d,p;for(i=0,o=0,s=this._rings.length;i<s;i++)for(p=this._rings[i],n=0,l=p.length;n<l-1;n++)d=jn(p[n],p[n+1],t,n,!0),d&&(e[o]=e[o]||[],e[o].push(d[0]),(d[1]!==p[n+1]||n===l-2)&&(e[o].push(d[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Un(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,l,d,p=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,s=this._parts.length;i<s;i++)for(d=this._parts[i],n=0,l=d.length,o=l-1;n<l;o=n++)if(!(!e&&n===0)&&qn(t,d[o],d[n])<=p)return!0;return!1}});function ur(t,e){return new vt(t,e)}vt._flat=Gn;var qt=vt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Wn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=vt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof Z&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){vt.prototype._setLatLngs.call(this,t),ot(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ot(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new T(e,e);if(t=new $(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,o=this._rings.length,s;n<o;n++)s=Fn(this._rings[n],t,!0),s.length&&this._parts.push(s)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,o,s,l,d,p,m;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(s=0,p=this._parts.length;s<p;s++)for(i=this._parts[s],l=0,m=i.length,d=m-1;l<m;d=l++)n=i[l],o=i[d],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(e=!e);return e||vt.prototype._containsPoint.call(this,t,!0)}});function cr(t,e){return new qt(t,e)}var yt=gt.extend({initialize:function(t,e){A(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=rt(t)?t:t.features,i,n,o;if(e){for(i=0,n=e.length;i<n;i++)o=e[i],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var l=$e(t,s);return l?(l.feature=De(t),l.defaultOptions=l.options,this.resetStyle(l),s.onEachFeature&&s.onEachFeature(t,l),this.addLayer(l)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=r({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function $e(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,o=[],s=e&&e.pointToLayer,l=e&&e.coordsToLatLng||Bi,d,p,m,g;if(!n&&!i)return null;switch(i.type){case"Point":return d=l(n),Xn(s,t,d,e);case"MultiPoint":for(m=0,g=n.length;m<g;m++)d=l(n[m]),o.push(Xn(s,t,d,e));return new gt(o);case"LineString":case"MultiLineString":return p=Re(n,i.type==="LineString"?0:1,l),new vt(p,e);case"Polygon":case"MultiPolygon":return p=Re(n,i.type==="Polygon"?1:2,l),new qt(p,e);case"GeometryCollection":for(m=0,g=i.geometries.length;m<g;m++){var x=$e({geometry:i.geometries[m],type:"Feature",properties:t.properties},e);x&&o.push(x)}return new gt(o);case"FeatureCollection":for(m=0,g=i.features.length;m<g;m++){var E=$e(i.features[m],e);E&&o.push(E)}return new gt(o);default:throw new Error("Invalid GeoJSON object.")}}function Xn(t,e,i,n){return t?t(e,i):new Ze(i,n&&n.markersInheritOptions&&n)}function Bi(t){return new Z(t[1],t[0],t[2])}function Re(t,e,i){for(var n=[],o=0,s=t.length,l;o<s;o++)l=e?Re(t[o],e-1,i):(i||Bi)(t[o]),n.push(l);return n}function $i(t,e){return t=z(t),t.alt!==void 0?[C(t.lng,e),C(t.lat,e),C(t.alt,e)]:[C(t.lng,e),C(t.lat,e)]}function Ne(t,e,i,n){for(var o=[],s=0,l=t.length;s<l;s++)o.push(e?Ne(t[s],ot(t[s])?0:e-1,i,n):$i(t[s],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function Vt(t,e){return t.feature?r({},t.feature,{geometry:e}):De(e)}function De(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Ri={toGeoJSON:function(t){return Vt(this,{type:"Point",coordinates:$i(this.getLatLng(),t)})}};Ze.include(Ri),Zi.include(Ri),Be.include(Ri),vt.include({toGeoJSON:function(t){var e=!ot(this._latlngs),i=Ne(this._latlngs,e?1:0,!1,t);return Vt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),qt.include({toGeoJSON:function(t){var e=!ot(this._latlngs),i=e&&!ot(this._latlngs[0]),n=Ne(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Vt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Wt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Vt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(o){if(o.toGeoJSON){var s=o.toGeoJSON(t);if(i)n.push(s.geometry);else{var l=De(s);l.type==="FeatureCollection"?n.push.apply(n,l.features):n.push(l)}}}),i?Vt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function Qn(t,e){return new yt(t,e)}var dr=Qn,He=ht.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=F(e),A(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(S(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){R(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Ht(this._image),this},bringToBack:function(){return this._map&&Ft(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=F(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:O("img");if(S(e,"leaflet-image-layer"),this._zoomAnimated&&S(e,"leaflet-zoom-animated"),this.options.className&&S(e,this.options.className),e.onselectstart=w,e.onmousemove=w,e.onload=c(this.fire,this,"load"),e.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ct(this._image,i,e)},_reset:function(){var t=this._image,e=new $(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();W(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),fr=function(t,e,i){return new He(t,e,i)},to=He.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:O("video");if(S(e,"leaflet-image-layer"),this._zoomAnimated&&S(e,"leaflet-zoom-animated"),this.options.className&&S(e,this.options.className),e.onselectstart=w,e.onmousemove=w,e.onloadeddata=c(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}rt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var l=O("source");l.src=this._url[s],e.appendChild(l)}}});function pr(t,e,i){return new to(t,e,i)}var eo=He.extend({_initImage:function(){var t=this._image=this._url;S(t,"leaflet-image-layer"),this._zoomAnimated&&S(t,"leaflet-zoom-animated"),this.options.className&&S(t,this.options.className),t.onselectstart=w,t.onmousemove=w}});function _r(t,e,i){return new eo(t,e,i)}var dt=ht.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof Z||rt(t))?(this._latlng=z(t),A(this,e)):(A(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront(),this.options.interactive&&(S(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(c(R,void 0,this._container),200)):R(this._container),this.options.interactive&&(D(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=z(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ht(this._container),this},bringToBack:function(){return this._map&&Ft(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof gt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=P(this.options.offset),i=this._getAnchor();this._zoomAnimated?W(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});M.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),ht.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(A(o,n),o._source=this):(o=e&&!n?e:new t(n,this),o.setContent(i)),o}});var Fe=dt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,dt.prototype.openOn.call(this,t)},onAdd:function(t){dt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Lt||this._source.on("preclick",Mt))},onRemove:function(t){dt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Lt||this._source.off("preclick",Mt))},getEvents:function(){var t=dt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=O("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=O("div",t+"-content-wrapper",e);if(this._contentNode=O("div",t+"-content",i),le(e),Si(this._contentNode),k(e,"contextmenu",Mt),this._tipContainer=O("div",t+"-tip-container",e),this._tip=O("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=O("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',k(n,"click",function(o){G(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",S(t,s)):D(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();W(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(se(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new T(this._containerLeft,-i-this._containerBottom);o._add(zt(this._container));var s=t.layerPointToContainerPoint(o),l=P(this.options.autoPanPadding),d=P(this.options.autoPanPaddingTopLeft||l),p=P(this.options.autoPanPaddingBottomRight||l),m=t.getSize(),g=0,x=0;s.x+n+p.x>m.x&&(g=s.x+n-m.x+p.x),s.x-g-d.x<0&&(g=s.x-d.x),s.y+i+p.y>m.y&&(x=s.y+i-m.y+p.y),s.y-x-d.y<0&&(x=s.y-d.y),(g||x)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([g,x]))}},_getAnchor:function(){return P(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),mr=function(t,e){return new Fe(t,e)};M.mergeOptions({closePopupOnClick:!0}),M.include({openPopup:function(t,e,i){return this._initOverlay(Fe,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),ht.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Fe,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof gt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){At(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Lt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var We=dt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){dt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){dt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=dt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=O("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,s=n.latLngToContainerPoint(n.getCenter()),l=n.layerPointToContainerPoint(t),d=this.options.direction,p=o.offsetWidth,m=o.offsetHeight,g=P(this.options.offset),x=this._getAnchor();d==="top"?(e=p/2,i=m):d==="bottom"?(e=p/2,i=0):d==="center"?(e=p/2,i=m/2):d==="right"?(e=0,i=m/2):d==="left"?(e=p,i=m/2):l.x<s.x?(d="right",e=0,i=m/2):(d="left",e=p+(g.x+x.x)*2,i=m/2),t=t.subtract(P(e,i,!0)).add(g).add(x),D(o,"leaflet-tooltip-right"),D(o,"leaflet-tooltip-left"),D(o,"leaflet-tooltip-top"),D(o,"leaflet-tooltip-bottom"),S(o,"leaflet-tooltip-"+d),W(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return P(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),gr=function(t,e){return new We(t,e)};M.include({openTooltip:function(t,e,i){return this._initOverlay(We,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),ht.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(We,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof gt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(k(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),k(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var io=Ut.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(Ce(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=P(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function vr(t){return new io(t)}Ut.Default=de;var fe=ht.extend({options:{tileSize:256,opacity:1,updateWhenIdle:b.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){A(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),R(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ht(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ft(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=y(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof T?t:new T(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,o=e.length,s;n<o;n++)s=e[n].style.zIndex,e[n]!==this._container&&s&&(i=t(i,+s));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!b.ielt9){nt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(!(!o.current||!o.loaded)){var s=Math.min(1,(t-o.loaded)/200);nt(o.el,s),s<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(it(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this))}},_onOpaqueTile:w,_initContainer:function(){this._container||(this._container=O("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(R(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=O("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),w(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:w,_onRemoveLevel:w,_onCreateLevel:w,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)R(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),s=Math.floor(e/2),l=i-1,d=new T(+o,+s);d.z=+l;var p=this._tileCoordsToKey(d),m=this._tiles[p];return m&&m.active?(m.retain=!0,!0):(m&&m.loaded&&(m.retain=!0),l>n?this._retainParent(o,s,l,n):!1)},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var l=new T(o,s);l.z=i+1;var d=this._tileCoordsToKey(l),p=this._tiles[d];if(p&&p.active){p.retain=!0;continue}else p&&p.loaded&&(p.retain=!0);i+1<n&&this._retainChildren(o,s,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var s=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||s)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();b.any3d?Ct(t.el,o,n):W(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),s=e.getSize().divideBy(n*2);return new $(o.subtract(s),o.add(s))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),l=[],d=this.options.keepBuffer,p=new $(o.getBottomLeft().subtract([d,-d]),o.getTopRight().add([d,-d]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var m in this._tiles){var g=this._tiles[m].coords;(g.z!==this._tileZoom||!p.contains(new T(g.x,g.y)))&&(this._tiles[m].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var x=o.min.y;x<=o.max.y;x++)for(var E=o.min.x;E<=o.max.x;E++){var K=new T(E,x);if(K.z=this._tileZoom,!!this._isValidTile(K)){var V=this._tiles[this._tileCoordsToKey(K)];V?V.current=!0:l.push(K)}}if(l.sort(function(Q,Gt){return Q.distanceTo(s)-Gt.distanceTo(s)}),l.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var st=document.createDocumentFragment();for(E=0;E<l.length;E++)this._addTile(l[E],st);this._level.el.appendChild(st)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return F(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i),s=e.unproject(n,t.z),l=e.unproject(o,t.z);return[s,l]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new X(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new T(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(R(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){S(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=w,t.onmousemove=w,b.ielt9&&this.options.opacity<1&&nt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),c(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&Y(c(this._tileReady,this,t,null,o)),W(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(nt(i.el,0),it(this._fadeFrame),this._fadeFrame=Y(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(S(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),b.ielt9||!this._map._fadeAnimated?Y(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new T(this._wrapX?v(t.x,this._wrapX):t.x,this._wrapY?v(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new $(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function yr(t){return new fe(t)}var jt=fe.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=A(this,e),e.detectRetina&&b.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return k(i,"load",c(this._tileOnLoad,this,e,i)),k(i,"error",c(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:b.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return on(this._url,r(e,this.options))},_tileOnLoad:function(t,e){b.ielt9?setTimeout(c(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=w,e.onerror=w,!e.complete)){e.src=ke;var i=this._tiles[t].coords;R(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",ke),fe.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===ke))return fe.prototype._tileReady.call(this,t,e,i)}});function no(t,e){return new jt(t,e)}var oo=jt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=r({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=A(this,e);var o=e.detectRetina&&b.retina?2:1,s=this.getTileSize();i.width=s.x*o,i.height=s.y*o,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,jt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=J(i.project(e[0]),i.project(e[1])),o=n.min,s=n.max,l=(this._wmsVersion>=1.3&&this._crs===Yn?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),d=jt.prototype.getTileUrl.call(this,t);return d+Et(this.wmsParams,d,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+l},setParams:function(t,e){return r(this.wmsParams,t),e||this.redraw(),this}});function br(t,e){return new oo(t,e)}jt.WMS=oo,no.wms=br;var bt=ht.extend({options:{padding:.1},initialize:function(t){A(this,t),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),S(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),s=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));b.any3d?Ct(this._container,s,i):W(this._container,s)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new $(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),so=bt.extend({options:{tolerance:0},getEvents:function(){var t=bt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){bt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");k(t,"mousemove",this._onMouseMove,this),k(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),k(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){it(this._redrawRequest),delete this._ctx,R(this._container),B(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){bt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=b.retina?2:1;W(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",b.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){bt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[f(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,o;for(o=0;o<e.length;o++){if(n=Number(e[o]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Y(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new $,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,l=t._parts,d=l.length,p=this._ctx;if(d){for(p.beginPath(),i=0;i<d;i++){for(n=0,o=l[i].length;n<o;n++)s=l[i][n],p[n?"lineTo":"moveTo"](s.x,s.y);e&&p.closePath()}this._fillStroke(p,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;o!==1&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,Math.PI*2,!1),o!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(D(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(S(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function ro(t){return b.canvas?new so(t):null}var pe=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),xr={_initContainer:function(){this._container=O("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(bt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=pe("shape");S(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=pe("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;R(e),t.removeInteractiveTarget(e),delete this._layers[f(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=pe("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=rt(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=pe("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Ht(t._container)},_bringToBack:function(t){Ft(t._container)}},Ue=b.vml?pe:un,_e=bt.extend({_initContainer:function(){this._container=Ue("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ue("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){R(this._container),B(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){bt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),W(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Ue("path");t.options.className&&S(e,t.options.className),t.options.interactive&&S(e,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){R(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,cn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+i*2+",0 "+o+-i*2+",0 ";this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Ht(t._path)},_bringToBack:function(t){Ft(t._path)}});b.vml&&_e.include(xr);function ao(t){return b.svg||b.vml?new _e(t):null}M.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&ro(t)||ao(t)}});var ho=qt.extend({initialize:function(t,e){qt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=F(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function wr(t,e){return new ho(t,e)}_e.create=Ue,_e.pointsToPath=cn,yt.geometryToLayer=$e,yt.coordsToLatLng=Bi,yt.coordsToLatLngs=Re,yt.latLngToCoords=$i,yt.latLngsToCoords=Ne,yt.getFeature=Vt,yt.asFeature=De,M.mergeOptions({boxZoom:!0});var lo=ct.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){B(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){R(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),re(),yi(),this._startPoint=this._map.mouseEventToContainerPoint(t),k(document,{contextmenu:At,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=O("div","leaflet-zoom-box",this._container),S(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new $(this._point,this._startPoint),i=e.getSize();W(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(R(this._box),D(this._container,"leaflet-crosshair")),ae(),bi(),B(document,{contextmenu:At,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var e=new X(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});M.addInitHook("addHandler","boxZoom",lo),M.mergeOptions({doubleClickZoom:!0});var uo=ct.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});M.addInitHook("addHandler","doubleClickZoom",uo),M.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var co=ct.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Pt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}S(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){D(this._map._container,"leaflet-grab"),D(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=F(this._map.options.maxBounds);this._offsetLimit=J(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,l=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=l},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,l=i.easeLinearity,d=o.multiplyBy(l/s),p=d.distanceTo([0,0]),m=Math.min(i.inertiaMaxSpeed,p),g=d.multiplyBy(m/p),x=m/(i.inertiaDeceleration*l),E=g.multiplyBy(-x/2).round();!E.x&&!E.y?e.fire("moveend"):(E=e._limitOffset(E,e.options.maxBounds),Y(function(){e.panBy(E,{duration:x,easeLinearity:l,noMoveStart:!0,animate:!0})}))}}});M.addInitHook("addHandler","dragging",co),M.mergeOptions({keyboard:!0,keyboardPanDelta:80});var fo=ct.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),k(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),B(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){k(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){B(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=P(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(P(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;At(t)}}});M.addInitHook("addHandler","keyboard",fo),M.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var po=ct.extend({addHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){B(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=$n(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),n),At(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=i?Math.ceil(o/i)*i:o,l=t._limitZoom(e+(this._delta>0?s:-s))-e;this._delta=0,this._startTime=null,l&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+l):t.setZoomAround(this._lastMousePos,e+l))}});M.addInitHook("addHandler","scrollWheelZoom",po);var Pr=600;M.mergeOptions({tapHold:b.touchNative&&b.safari&&b.mobile,tapTolerance:15});var _o=ct.extend({addHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){B(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new T(e.clientX,e.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(k(document,"touchend",G),k(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),Pr),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){B(document,"touchend",G),B(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),B(document,"touchend touchcancel contextmenu",this._cancel,this),B(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new T(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});M.addInitHook("addHandler","tapHold",_o),M.mergeOptions({touchZoom:b.touch,bounceAtZoomLimits:!0});var mo=ct.extend({addHooks:function(){S(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){D(this._map._container,"leaflet-touch-zoom"),B(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),G(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,o===1)return}else{var s=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(o===1&&s.x===0&&s.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),it(this._animRequest);var l=c(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Y(l,this,!0),G(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,it(this._animRequest),B(document,"touchmove",this._onTouchMove,this),B(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});M.addInitHook("addHandler","touchZoom",mo),M.BoxZoom=lo,M.DoubleClickZoom=uo,M.Drag=co,M.Keyboard=fo,M.ScrollWheelZoom=po,M.TapHold=_o,M.TouchZoom=mo,u.Bounds=$,u.Browser=b,u.CRS=mt,u.Canvas=so,u.Circle=Zi,u.CircleMarker=Be,u.Class=_t,u.Control=at,u.DivIcon=io,u.DivOverlay=dt,u.DomEvent=Hs,u.DomUtil=Ns,u.Draggable=Pt,u.Evented=ee,u.FeatureGroup=gt,u.GeoJSON=yt,u.GridLayer=fe,u.Handler=ct,u.Icon=Ut,u.ImageOverlay=He,u.LatLng=Z,u.LatLngBounds=X,u.Layer=ht,u.LayerGroup=Wt,u.LineUtil=tr,u.Map=M,u.Marker=Ze,u.Mixin=Gs,u.Path=Lt,u.Point=T,u.PolyUtil=Ks,u.Polygon=qt,u.Polyline=vt,u.Popup=Fe,u.PosAnimation=Rn,u.Projection=er,u.Rectangle=ho,u.Renderer=bt,u.SVG=_e,u.SVGOverlay=eo,u.TileLayer=jt,u.Tooltip=We,u.Transformation=ai,u.Util=as,u.VideoOverlay=to,u.bind=c,u.bounds=J,u.canvas=ro,u.circle=lr,u.circleMarker=hr,u.control=ue,u.divIcon=vr,u.extend=r,u.featureGroup=sr,u.geoJSON=Qn,u.geoJson=dr,u.gridLayer=yr,u.icon=rr,u.imageOverlay=fr,u.latLng=z,u.latLngBounds=F,u.layerGroup=or,u.map=Fs,u.marker=ar,u.point=P,u.polygon=cr,u.polyline=ur,u.popup=mr,u.rectangle=wr,u.setOptions=A,u.stamp=f,u.svg=ao,u.svgOverlay=_r,u.tileLayer=no,u.tooltip=gr,u.transformation=ie,u.version=a,u.videoOverlay=pr;var Lr=window.L;u.noConflict=function(){return window.L=Lr,this},window.L=u}))});function Qi(u){return ts[u%ts.length]}function te(u){return u.map(a=>typeof a=="string"?{entity:a}:a).filter(a=>typeof a?.entity=="string"&&a.entity.length>0)}function Rt(u){if(!u)return null;let a=Number(u.attributes?.latitude),r=Number(u.attributes?.longitude);return!Number.isFinite(a)||!Number.isFinite(r)?null:{lat:a,lon:r}}function tn(u){return Object.values(u.states).filter(a=>na.has(a.entity_id.split(".")[0])&&Rt(a)).map(a=>a.entity_id).sort()}function es(u,a){return u.name?u.name:a?.attributes?.friendly_name??u.entity}function is(u,a){return a==="dark"?!0:a==="light"?!1:!!u.themes?.darkMode}function ns(u,a){let r=[];if(!u||typeof u!="object")return r;for(let h of a){let c=u[h];if(!Array.isArray(c))continue;let _=null;for(let f of c){let y=null;if(Array.isArray(f))y=f[1];else if(f&&typeof f=="object"){let C=f;y=C.a??C.attributes??C}let v=Number(y?.latitude),w=Number(y?.longitude);!Number.isFinite(v)||!Number.isFinite(w)||_&&_[0]===v&&_[1]===w||(_=[v,w],r.push({entity_id:h,map_state:_}))}}return r}var ts,na,en=q(()=>{"use strict";ts=["#e53935","#d81b60","#8e24aa","#5e35b1","#3949ab","#1e88e5","#039be5","#00acc1","#00897b","#43a047","#7cb342","#c0ca33","#fdd835","#ffb300","#fb8c00","#f4511e","#6d4c41","#546e7a"];na=new Set(["person","device_tracker","geo_location"])});var ss={};Rr(ss,{MapyMapCardEditor:()=>St,loadEntityPicker:()=>os});function os(){return customElements.get("ha-entity-picker")?Promise.resolve(!0):ii||(ii=(async()=>{try{if(typeof window.loadCardHelpers!="function")return!1;let u=await window.loadCardHelpers();if(typeof u?.createCardElementEditor!="function")return!1;let a=u.createCardElementEditor({type:"entities",entities:[]});a.style.display="none",document.body.appendChild(a);let r=Date.now();for(;!customElements.get("ha-entity-picker")&&Date.now()-r<5e3;)await new Promise(h=>setTimeout(h,100));return a.remove(),!!customElements.get("ha-entity-picker")}catch{return!1}})(),ii)}var ii,oa,St,nn=q(()=>{"use strict";Yi();Xi();en();ii=null,oa="mapy-map-card";St=class extends pt{constructor(){super(...arguments);this._config={type:oa};this._pickerReady=!1}setConfig(r){this._config={...r}}connectedCallback(){super.connectedCallback(),os().then(r=>{this._pickerReady=r})}render(){let r=this._config;return et`
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
            .value=${r.title??""}
            @input=${h=>this._patch({title:h.target.value||void 0})}
          />
        </label>

        <label class="full">
          Mapy.com API key
          <input
            type="password"
            placeholder="from developer.mapy.com"
            .value=${r.api_key??""}
            @input=${h=>this._patch({api_key:h.target.value})}
          />
        </label>

        <label>
          Tile style
          <select
            @change=${h=>this._patch({tile_style:h.target.value})}
          >
            ${["basic","outdoor","winter","aerial"].map(h=>et`<option value=${h} ?selected=${(r.tile_style??"basic")===h}>${h}</option>`)}
          </select>
        </label>

        <label>
          Theme mode
          <select
            @change=${h=>this._patch({theme_mode:h.target.value})}
          >
            ${["auto","light","dark"].map(h=>et`<option value=${h} ?selected=${(r.theme_mode??"auto")===h}>${h}</option>`)}
          </select>
        </label>

        <label>
          Hours to show (0 = off)
          <input
            type="number"
            min="0"
            max="168"
            .value=${String(r.hours_to_show??24)}
            @input=${h=>this._patch({hours_to_show:Number(h.target.value)})}
          />
        </label>

        <label>
          Aspect ratio (e.g. 16:9) or height
          <input
            type="text"
            placeholder="16:9"
            .value=${r.aspect_ratio??""}
            @input=${h=>this._patch({aspect_ratio:h.target.value||void 0})}
          />
        </label>

        <label>
          Language (optional, e.g. cs / en / de)
          <input
            type="text"
            placeholder="auto"
            .value=${r.language??""}
            @input=${h=>this._patch({language:h.target.value||void 0})}
          />
        </label>

        <label>
          Default zoom (single point / max zoom on fit)
          <input
            type="number"
            min="1"
            max="21"
            .value=${r.default_zoom!=null?String(r.default_zoom):""}
            @input=${h=>{let c=h.target.value;this._patch({default_zoom:c===""?void 0:Number(c)})}}
          />
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${r.show_zones!==!1}
            @change=${h=>this._patch({show_zones:h.target.checked})}
          />
          Show zones
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${r.fit_bounds!==!1}
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
    `}_renderEntityPickers(){let r=te(this._config.entities??[]);return et`
      ${r.length?r.map((h,c)=>et`
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
                  @click=${()=>this._setEntities(r.filter((_,f)=>f!==c))}
                >
                  ✕
                </button>
              </div>
            `):N}
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .allowCustomEntity=${!0}
          @value-changed=${h=>{let c=String(h.detail.value??"");c&&!r.some(_=>_.entity===c)&&this._setEntities([...r,{entity:c}])}}
        ></ha-entity-picker>
      </div>
    `}_renderEntityTextarea(){let r=te(this._config.entities??[]);return et`
      <label class="full">
        Entities (one per line, empty = auto-discover)
        <textarea
          .value=${r.map(h=>h.entity).join(`
`)}
          @change=${h=>{let c=h.target.value.split(`
`).map(_=>_.trim()).filter(Boolean);this._setEntities(c.map(_=>({entity:_})))}}
        ></textarea>
      </label>
    `}_patch(r){this._emit({...this._config,...r})}_setEntity(r,h){let c=te(this._config.entities??[]);h&&(c[r]={...c[r],entity:h},this._setEntities(c))}_setEntities(r){this._emit({...this._config,entities:r})}_emit(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}};ft([Jt({attribute:!1})],St.prototype,"hass",2),ft([Xt()],St.prototype,"_config",2),ft([Xt()],St.prototype,"_pickerReady",2),St=ft([Qe("mapy-map-card-editor")],St)});Yi();Xi();var H=Dr(Yo(),1);var Jo=`/* required styles */\r
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
`;async function Qo(u,a,r,h){let c=new Date(Date.now()-r*3600*1e3).toISOString();return await u.connection.subscribeMessage(f=>{f&&Array.isArray(f.locations)&&f.locations.length>0&&h(f.locations)},{type:"history/history_stream",start_time:c,entity_ids:a,pretty_print:!1},{resubscribe:!0})}en();var sa={basic:19,outdoor:19,winter:19,aerial:19},ra='&copy; <a href="https://mapy.com/">Mapy.com</a> &copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>',Nt=class extends pt{constructor(){super(...arguments);this._markers=new Map;this._history=new Map;this._historyStreamDataReceived=!1;this._historyKey="";this._zonesKey="";this._appliedFitKey="";this._onVisibilityChange=()=>{document.visibilityState==="visible"&&(this._map?.invalidateSize({pan:!1}),this._applyFit(),this._healthCheck())};this._onWindowResize=()=>{this._map?.invalidateSize({pan:!1})}}static async getConfigElement(){return await Promise.resolve().then(()=>(nn(),ss)),document.createElement("mapy-map-card-editor")}static getStubConfig(r){return{type:"custom:mapy-map-card",entities:r?tn(r).slice(0,5):[],hours_to_show:24,show_zones:!0}}setConfig(r){if(!r||typeof r!="object")throw new Error("Invalid configuration");let h=!!r.api_key?.trim()||!!r.tile_url?.trim();this._error=h?void 0:"Missing Mapy.com API key \u2013 set api_key in the card editor (free at developer.mapy.com).",this._config={hours_to_show:24,show_zones:!0,fit_bounds:!0,theme_mode:"auto",tile_style:"basic",aspect_ratio:"16:9",...r},this._resetHistory(),this._map&&(this._updateTileLayer(),this._processHass())}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this._teardownHistory(),this._resizeObserver?.disconnect(),this._resizeObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._onWindowResize),this._map?.remove(),this._map=void 0,this._markers.clear(),super.disconnectedCallback()}render(){return this._config?et`
      <style>${Xo}</style>
      <ha-card>
        ${this._config.title?et`<div class="mmc-header">${this._config.title}</div>`:N}
        ${this._error?et`<div class="mmc-error">${this._error}</div>`:et`
              <div class="mmc-map-wrapper" style=${this._aspectStyle()}>
                <div class="mmc-map" id="map"></div>
              </div>
            `}
      </ha-card>
    `:et``}firstUpdated(){this._error||(this._initMap(),this._processHass())}willUpdate(r){super.willUpdate(r),r.has("hass")&&this._processHass()}updated(){this._map?.invalidateSize()}_aspectStyle(){let r=this._config?.aspect_ratio?.trim();if(!r||r.toLowerCase()==="auto")return"";let h=/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/.exec(r);return h?`aspect-ratio:${h[1]}/${h[2]};`:`height:${r};`}_initMap(){let r=this.renderRoot.querySelector("#map");if(!r)return;this._map=H.map(r,{zoomControl:!0,attributionControl:!1,worldCopyJump:!0}),H.control.attribution({prefix:!1}).addTo(this._map),this._zoneLayer=H.layerGroup().addTo(this._map),this._historyLayer=H.layerGroup().addTo(this._map),this._markerLayer=H.layerGroup().addTo(this._map),this._resizeObserver=new ResizeObserver(()=>{this._map?.invalidateSize(),this._applyFit()}),this._resizeObserver.observe(r),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._onWindowResize);let h=this.hass?.config,c=typeof h?.latitude=="number"&&typeof h?.longitude=="number"?[h.latitude,h.longitude]:void 0;if(!c)for(let _ of Object.values(this.hass?.states??{})){let f=Rt(_);if(f){c=[f.lat,f.lon];break}}this._map.setView(c??[49.8032,15.4811],this._config?.default_zoom??12,{animate:!1}),this._updateTileLayer();for(let _ of[300,1e3,3e3,8e3])setTimeout(()=>this._healthCheck(),_)}_healthCheck(){if(!(!this._map||!this.isConnected))try{let r=this._map.getContainer();if(!r.clientWidth||!r.clientHeight)return;r.querySelectorAll("img.leaflet-tile").length===0&&(this._map.invalidateSize({pan:!1}),this._applyFit());let h=Array.from(this._markers.values()).some(_=>!!_.getIcon()),c=r.querySelectorAll(".leaflet-marker-pane .mmc-dot, .leaflet-marker-pane .mmc-picture-icon");h&&c.length<this._markers.size&&this._processHass()}catch{}}_updateTileLayer(){if(!this._map||!this._config)return;let r=this._config,h=r.api_key?.trim(),c=r.tile_style??"basic",_=r.tile_url?.trim()||`https://api.mapy.com/v1/maptiles/${c}/256/{z}/{x}/{y}?apikey=${encodeURIComponent(h)}`+(r.language?.trim()?`&lang=${encodeURIComponent(r.language.trim())}`:"");_!==this._tileUrl&&(this._tileUrl=_,this._tileLayer&&this._map.removeLayer(this._tileLayer),this._tileLayer=H.tileLayer(_,{attribution:r.tile_attribution??ra,maxZoom:21,maxNativeZoom:r.tile_url?19:sa[c]??19}),this._tileLayer.addTo(this._map))}_processHass(){!this._map||!this.hass||!this._config||this._error||(this._updateDarkMode(),this._updateZones(),this._updateMarkers(),this._updateHistorySubscription(),this._maybeFitBounds())}_resolvedEntities(){let r=this.hass;return(this._config.entities?.length?te(this._config.entities):tn(r).map(c=>({entity:c}))).filter(c=>!!r.states[c.entity])}_updateDarkMode(){let r=is(this.hass,this._config.theme_mode);this._map.getContainer().classList.toggle("mmc-dark",r)}_updateMarkers(){let r=this._markerLayer,h=new Set;this._resolvedEntities().forEach((c,_)=>{let f=this.hass.states[c.entity],y=Rt(f);if(!y)return;h.add(c.entity);let v=this._markers.get(c.entity);v?v.setLatLng([y.lat,y.lon]):(v=H.marker([y.lat,y.lon],{icon:this._buildIcon(c,f,Qi(_)),keyboard:!1}),v.on("click",()=>this._openMoreInfo(c.entity)),v.bindTooltip(es(c,f),{permanent:!0,direction:"right",offset:[12,0],className:"mmc-label"}),v.addTo(r),this._markers.set(c.entity,v))});for(let[c,_]of this._markers)h.has(c)||(r.removeLayer(_),_.remove(),this._markers.delete(c))}_buildIcon(r,h,c){let _=r.picture||h.attributes?.entity_picture;return _&&typeof _=="string"?H.divIcon({className:"mmc-icon-wrapper",html:`<img class="mmc-picture-icon" src="${encodeURI(_)}" alt="">`,iconSize:[40,40],iconAnchor:[20,20]}):H.divIcon({className:"mmc-icon-wrapper",html:`<span class="mmc-dot" style="background:${c}"></span>`,iconSize:[16,16],iconAnchor:[8,8]})}_openMoreInfo(r){let h=new Event("hass-more-info",{bubbles:!0,composed:!0});h.detail={entityId:r},this.dispatchEvent(h)}_updateZones(){let r=Object.values(this.hass.states).filter(f=>f.entity_id.startsWith("zone.")&&Rt(f)),h=JSON.stringify(r.map(f=>[f.entity_id,f.state,f.attributes]));if(h===this._zonesKey)return;this._zonesKey=h;let c=this._zoneLayer;if(c.clearLayers(),this._config.show_zones===!1)return;let _=getComputedStyle(this).getPropertyValue("--accent-color").trim()||"#ff9800";for(let f of r){let y=Rt(f),v=Math.max(0,Number(f.attributes.radius??100)),C=!!f.attributes.passive?"#9e9e9e":_,I=String(f.attributes.friendly_name??f.entity_id);H.circle([y.lat,y.lon],{radius:v,color:C,weight:1,fillColor:C,fillOpacity:.1}).bindTooltip(I,{permanent:!0,direction:"center",className:"mmc-label"}).addTo(c)}}_resetHistory(){this._teardownHistory(),this._historyFallbackTimer!==void 0&&(clearTimeout(this._historyFallbackTimer),this._historyFallbackTimer=void 0),this._historyStreamDataReceived=!1,this._history=new Map,this._historyKey="",this._historyLayer?.clearLayers()}_teardownHistory(){this._unsubHistory&&(this._unsubHistory.then(r=>r()).catch(()=>{}),this._unsubHistory=void 0)}_updateHistorySubscription(){let r=Number(this._config.hours_to_show??24),h=this._resolvedEntities().map(_=>_.entity).sort();if(!(r>0)||h.length===0){this._historyKey&&this._resetHistory();return}let c=`${r}|${h.join(",")}`;c!==this._historyKey&&(this._resetHistory(),this._historyKey=c,this._unsubHistory=Qo(this.hass,h,r,_=>{this._onHistoryLocations(_),this._historyStreamDataReceived=!0}).catch(()=>(this._unsubHistory=void 0,this._fetchHistoryFallback(h,r),()=>{})),this._historyFallbackTimer||(this._historyFallbackTimer=setTimeout(()=>{this._historyFallbackTimer=void 0,!this._historyStreamDataReceived&&this.isConnected&&this._fetchHistoryFallback(h,r)},8e3)))}_fetchHistoryFallback(r,h){try{let c=this.hass?.connection;if(!c)return;let _=new Date(Date.now()-h*3600*1e3).toISOString();c.sendMessagePromise({type:"history/history_during_period",start_time:_,end_time:new Date().toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!1,significant_changes_only:!0}).then(f=>{let y=ns(f,r);y.length>0&&(this._onHistoryLocations(y),this._historyStreamDataReceived=!0)}).catch(()=>{})}catch{}}_onHistoryLocations(r){for(let h of r){if(!h.map_state||h.map_state.length<2)continue;let[c,_]=h.map_state;if(!Number.isFinite(c)||!Number.isFinite(_))continue;let f=this._history.get(h.entity_id)??[],y=f[f.length-1];(!y||y[0]!==c||y[1]!==_)&&(f.push([c,_]),f.length>3e3&&f.splice(0,f.length-3e3),this._history.set(h.entity_id,f))}this._renderHistory()}_renderHistory(){let r=this._historyLayer;r.clearLayers(),this._resolvedEntities().forEach((h,c)=>{let _=this._history.get(h.entity);!_||_.length<2||H.polyline(_,{color:Qi(c),weight:4,opacity:.65,interactive:!1}).addTo(r)})}_maybeFitBounds(){if(!this._config.fit_bounds)return;let r=[],h=[];if(this._markers.forEach((_,f)=>{let y=_.getLatLng();r.push([y.lat,y.lng]),h.push(f)}),Object.keys(this.hass.states).filter(_=>_.startsWith("zone.")&&this._config.show_zones!==!1).forEach(_=>{let f=Rt(this.hass.states[_]);f&&(r.push([f.lat,f.lon]),h.push(_))}),r.length===0)return;let c=h.sort().join(",");c===this._appliedFitKey||c===this._pendingFit?.key||(this._pendingFit={key:c,bounds:H.latLngBounds(r)},this._applyFit())}_applyFit(){if(!this._map||!this._pendingFit)return;let r=this._map.getContainer();if(!r.clientWidth||!r.clientHeight)return;let{key:h,bounds:c}=this._pendingFit;this._pendingFit=void 0,h!==this._appliedFitKey&&(this._appliedFitKey=h,c.getNorthEast().equals(c.getSouthWest())?this._map.setView(c.getCenter(),this._config.default_zoom??14):this._map.fitBounds(c,{padding:[48,48],maxZoom:this._config.default_zoom??16}))}};ft([Jt({attribute:!1})],Nt.prototype,"hass",2),ft([Xt()],Nt.prototype,"_config",2),ft([Xt()],Nt.prototype,"_error",2),Nt=ft([Qe("mapy-map-card")],Nt);nn();var aa="mapy-map-card";window.customCards=window.customCards??[];window.customCards.push({type:aa,name:"Mapy.com Map Card",description:"Map card powered by Mapy.com tiles \u2013 entities, history trails, zones. Replacement for the built-in map card.",preview:!0});console.info("%c MAPY-MAP-CARD %c v0.2.0 ","color: white; background: #c83737; font-weight: 700;","color: white; background: #333; font-weight: 700;",`
https://github.com/jpribil/mapy-map-card`);})();
