"use strict";(()=>{var ea=Object.create;var ti=Object.defineProperty;var Zo=Object.getOwnPropertyDescriptor;var ia=Object.getOwnPropertyNames;var na=Object.getPrototypeOf,oa=Object.prototype.hasOwnProperty;var q=(c,a)=>()=>(c&&(a=c(c=0)),a);var ra=(c,a)=>()=>(a||c((a={exports:{}}).exports,a),a.exports),sa=(c,a)=>{for(var r in a)ti(c,r,{get:a[r],enumerable:!0})},aa=(c,a,r,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let h of ia(a))!oa.call(c,h)&&h!==r&&ti(c,h,{get:()=>a[h],enumerable:!(l=Zo(a,h))||l.enumerable});return c};var $o=(c,a,r)=>(r=c!=null?ea(na(c)):{},aa(a||!c||!c.__esModule?ti(r,"default",{value:c,enumerable:!0}):r,c));var ut=(c,a,r,l)=>{for(var h=l>1?void 0:l?Zo(a,r):a,d=c.length-1,p;d>=0;d--)(p=c[d])&&(h=(l?p(a,r,h):p(h))||h);return l&&h&&ti(a,r,h),h};var ei,ni,No,Ro,ii,Do,Ho,Xi,Qi=q(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ei=globalThis,ni=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,No=Symbol(),Ro=new WeakMap,ii=class{constructor(a,r,l){if(this._$cssResult$=!0,l!==No)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=r}get styleSheet(){let a=this.o,r=this.t;if(ni&&a===void 0){let l=r!==void 0&&r.length===1;l&&(a=Ro.get(r)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),l&&Ro.set(r,a))}return a}toString(){return this.cssText}},Do=c=>new ii(typeof c=="string"?c:c+"",void 0,No),Ho=(c,a)=>{if(ni)c.adoptedStyleSheets=a.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of a){let l=document.createElement("style"),h=ei.litNonce;h!==void 0&&l.setAttribute("nonce",h),l.textContent=r.cssText,c.appendChild(l)}},Xi=ni?c=>c:c=>c instanceof CSSStyleSheet?(a=>{let r="";for(let l of a.cssRules)r+=l.cssText;return Do(r)})(c):c});var la,ha,ca,ua,da,fa,Ct,Fo,pa,_a,be,xe,oi,Uo,Pt,we=q(()=>{Qi();Qi();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({is:la,defineProperty:ha,getOwnPropertyDescriptor:ca,getOwnPropertyNames:ua,getOwnPropertySymbols:da,getPrototypeOf:fa}=Object),Ct=globalThis,Fo=Ct.trustedTypes,pa=Fo?Fo.emptyScript:"",_a=Ct.reactiveElementPolyfillSupport,be=(c,a)=>c,xe={toAttribute(c,a){switch(a){case Boolean:c=c?pa:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c)}return c},fromAttribute(c,a){let r=c;switch(a){case Boolean:r=c!==null;break;case Number:r=c===null?null:Number(c);break;case Object:case Array:try{r=JSON.parse(c)}catch{r=null}}return r}},oi=(c,a)=>!la(c,a),Uo={attribute:!0,type:String,converter:xe,reflect:!1,useDefault:!1,hasChanged:oi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ct.litPropertyMetadata??(Ct.litPropertyMetadata=new WeakMap);Pt=class extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??(this.l=[])).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,r=Uo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(a,r),!r.noAccessor){let l=Symbol(),h=this.getPropertyDescriptor(a,l,r);h!==void 0&&ha(this.prototype,a,h)}}static getPropertyDescriptor(a,r,l){let{get:h,set:d}=ca(this.prototype,a)??{get(){return this[r]},set(p){this[r]=p}};return{get:h,set(p){let y=h?.call(this);d?.call(this,p),this.requestUpdate(a,y,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??Uo}static _$Ei(){if(this.hasOwnProperty(be("elementProperties")))return;let a=fa(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(be("properties"))){let r=this.properties,l=[...ua(r),...da(r)];for(let h of l)this.createProperty(h,r[h])}let a=this[Symbol.metadata];if(a!==null){let r=litPropertyMetadata.get(a);if(r!==void 0)for(let[l,h]of r)this.elementProperties.set(l,h)}this._$Eh=new Map;for(let[r,l]of this.elementProperties){let h=this._$Eu(r,l);h!==void 0&&this._$Eh.set(h,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){let r=[];if(Array.isArray(a)){let l=new Set(a.flat(1/0).reverse());for(let h of l)r.unshift(Xi(h))}else a!==void 0&&r.push(Xi(a));return r}static _$Eu(a,r){let l=r.attribute;return l===!1?void 0:typeof l=="string"?l:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(a=>a(this))}addController(a){(this._$EO??(this._$EO=new Set)).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){let a=new Map,r=this.constructor.elementProperties;for(let l of r.keys())this.hasOwnProperty(l)&&(a.set(l,this[l]),delete this[l]);a.size>0&&(this._$Ep=a)}createRenderRoot(){let a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ho(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(a=>a.hostConnected?.())}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach(a=>a.hostDisconnected?.())}attributeChangedCallback(a,r,l){this._$AK(a,l)}_$ET(a,r){let l=this.constructor.elementProperties.get(a),h=this.constructor._$Eu(a,l);if(h!==void 0&&l.reflect===!0){let d=(l.converter?.toAttribute!==void 0?l.converter:xe).toAttribute(r,l.type);this._$Em=a,d==null?this.removeAttribute(h):this.setAttribute(h,d),this._$Em=null}}_$AK(a,r){let l=this.constructor,h=l._$Eh.get(a);if(h!==void 0&&this._$Em!==h){let d=l.getPropertyOptions(h),p=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:xe;this._$Em=h;let y=p.fromAttribute(r,d.type);this[h]=y??this._$Ej?.get(h)??y,this._$Em=null}}requestUpdate(a,r,l,h=!1,d){if(a!==void 0){let p=this.constructor;if(h===!1&&(d=this[a]),l??(l=p.getPropertyOptions(a)),!((l.hasChanged??oi)(d,r)||l.useDefault&&l.reflect&&d===this._$Ej?.get(a)&&!this.hasAttribute(p._$Eu(a,l))))return;this.C(a,r,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,r,{useDefault:l,reflect:h,wrapped:d},p){l&&!(this._$Ej??(this._$Ej=new Map)).has(a)&&(this._$Ej.set(a,p??r??this[a]),d!==!0||p!==void 0)||(this._$AL.has(a)||(this.hasUpdated||l||(r=void 0),this._$AL.set(a,r)),h===!0&&this._$Em!==a&&(this._$Eq??(this._$Eq=new Set)).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[h,d]of this._$Ep)this[h]=d;this._$Ep=void 0}let l=this.constructor.elementProperties;if(l.size>0)for(let[h,d]of l){let{wrapped:p}=d,y=this[h];p!==!0||this._$AL.has(h)||y===void 0||this.C(h,void 0,d,y)}}let a=!1,r=this._$AL;try{a=this.shouldUpdate(r),a?(this.willUpdate(r),this._$EO?.forEach(l=>l.hostUpdate?.()),this.update(r)):this._$EM()}catch(l){throw a=!1,this._$EM(),l}a&&this._$AE(r)}willUpdate(a){}_$AE(a){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(a){}firstUpdated(a){}};Pt.elementStyles=[],Pt.shadowRootOptions={mode:"open"},Pt[be("elementProperties")]=new Map,Pt[be("finalized")]=new Map,_a?.({ReactiveElement:Pt}),(Ct.reactiveElementVersions??(Ct.reactiveElementVersions=[])).push("2.1.2")});function tr(c,a){if(!an(c)||!c.hasOwnProperty("raw"))throw Error("invalid template strings array");return jo!==void 0?jo.createHTML(a):a}function te(c,a,r=c,l){if(a===Ht)return a;let h=l!==void 0?r._$Co?.[l]:r._$Cl,d=Se(a)?void 0:a._$litDirective$;return h?.constructor!==d&&(h?._$AO?.(!1),d===void 0?h=void 0:(h=new d(c),h._$AT(c,r,l)),l!==void 0?(r._$Co??(r._$Co=[]))[l]=h:r._$Cl=h),h!==void 0&&(a=te(c,h._$AS(c,a.values),h,l)),a}var Pe,Wo,ri,jo,Jo,Mt,Xo,ma,Dt,Te,Se,an,ga,tn,Le,qo,Vo,Rt,Ko,Go,Qo,ln,G,Ya,Ja,Ht,H,Yo,Nt,va,ke,en,Ee,ee,nn,on,rn,sn,ya,er,si=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Pe=globalThis,Wo=c=>c,ri=Pe.trustedTypes,jo=ri?ri.createPolicy("lit-html",{createHTML:c=>c}):void 0,Jo="$lit$",Mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Xo="?"+Mt,ma=`<${Xo}>`,Dt=document,Te=()=>Dt.createComment(""),Se=c=>c===null||typeof c!="object"&&typeof c!="function",an=Array.isArray,ga=c=>an(c)||typeof c?.[Symbol.iterator]=="function",tn=`[ 	
\f\r]`,Le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qo=/-->/g,Vo=/>/g,Rt=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ko=/'/g,Go=/"/g,Qo=/^(?:script|style|textarea|title)$/i,ln=c=>(a,...r)=>({_$litType$:c,strings:a,values:r}),G=ln(1),Ya=ln(2),Ja=ln(3),Ht=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Yo=new WeakMap,Nt=Dt.createTreeWalker(Dt,129);va=(c,a)=>{let r=c.length-1,l=[],h,d=a===2?"<svg>":a===3?"<math>":"",p=Le;for(let y=0;y<r;y++){let g=c[y],b,z,T=-1,O=0;for(;O<g.length&&(p.lastIndex=O,z=p.exec(g),z!==null);)O=p.lastIndex,p===Le?z[1]==="!--"?p=qo:z[1]!==void 0?p=Vo:z[2]!==void 0?(Qo.test(z[2])&&(h=RegExp("</"+z[2],"g")),p=Rt):z[3]!==void 0&&(p=Rt):p===Rt?z[0]===">"?(p=h??Le,T=-1):z[1]===void 0?T=-2:(T=p.lastIndex-z[2].length,b=z[1],p=z[3]===void 0?Rt:z[3]==='"'?Go:Ko):p===Go||p===Ko?p=Rt:p===qo||p===Vo?p=Le:(p=Rt,h=void 0);let A=p===Rt&&c[y+1].startsWith("/>")?" ":"";d+=p===Le?g+ma:T>=0?(l.push(b),g.slice(0,T)+Jo+g.slice(T)+Mt+A):g+Mt+(T===-2?y:A)}return[tr(c,d+(c[r]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),l]},ke=class c{constructor({strings:a,_$litType$:r},l){let h;this.parts=[];let d=0,p=0,y=a.length-1,g=this.parts,[b,z]=va(a,r);if(this.el=c.createElement(b,l),Nt.currentNode=this.el.content,r===2||r===3){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(h=Nt.nextNode())!==null&&g.length<y;){if(h.nodeType===1){if(h.hasAttributes())for(let T of h.getAttributeNames())if(T.endsWith(Jo)){let O=z[p++],A=h.getAttribute(T).split(Mt),it=/([.?@])?(.*)/.exec(O);g.push({type:1,index:d,name:it[2],strings:A,ctor:it[1]==="."?nn:it[1]==="?"?on:it[1]==="@"?rn:ee}),h.removeAttribute(T)}else T.startsWith(Mt)&&(g.push({type:6,index:d}),h.removeAttribute(T));if(Qo.test(h.tagName)){let T=h.textContent.split(Mt),O=T.length-1;if(O>0){h.textContent=ri?ri.emptyScript:"";for(let A=0;A<O;A++)h.append(T[A],Te()),Nt.nextNode(),g.push({type:2,index:++d});h.append(T[O],Te())}}}else if(h.nodeType===8)if(h.data===Xo)g.push({type:2,index:d});else{let T=-1;for(;(T=h.data.indexOf(Mt,T+1))!==-1;)g.push({type:7,index:d}),T+=Mt.length-1}d++}}static createElement(a,r){let l=Dt.createElement("template");return l.innerHTML=a,l}};en=class{constructor(a,r){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){let{el:{content:r},parts:l}=this._$AD,h=(a?.creationScope??Dt).importNode(r,!0);Nt.currentNode=h;let d=Nt.nextNode(),p=0,y=0,g=l[0];for(;g!==void 0;){if(p===g.index){let b;g.type===2?b=new Ee(d,d.nextSibling,this,a):g.type===1?b=new g.ctor(d,g.name,g.strings,this,a):g.type===6&&(b=new sn(d,this,a)),this._$AV.push(b),g=l[++y]}p!==g?.index&&(d=Nt.nextNode(),p++)}return Nt.currentNode=Dt,h}p(a){let r=0;for(let l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(a,l,r),r+=l.strings.length-2):l._$AI(a[r])),r++}},Ee=class c{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,r,l,h){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=a,this._$AB=r,this._$AM=l,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode,r=this._$AM;return r!==void 0&&a?.nodeType===11&&(a=r.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,r=this){a=te(this,a,r),Se(a)?a===H||a==null||a===""?(this._$AH!==H&&this._$AR(),this._$AH=H):a!==this._$AH&&a!==Ht&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):ga(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==H&&Se(this._$AH)?this._$AA.nextSibling.data=a:this.T(Dt.createTextNode(a)),this._$AH=a}$(a){let{values:r,_$litType$:l}=a,h=typeof l=="number"?this._$AC(a):(l.el===void 0&&(l.el=ke.createElement(tr(l.h,l.h[0]),this.options)),l);if(this._$AH?._$AD===h)this._$AH.p(r);else{let d=new en(h,this),p=d.u(this.options);d.p(r),this.T(p),this._$AH=d}}_$AC(a){let r=Yo.get(a.strings);return r===void 0&&Yo.set(a.strings,r=new ke(a)),r}k(a){an(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,l,h=0;for(let d of a)h===r.length?r.push(l=new c(this.O(Te()),this.O(Te()),this,this.options)):l=r[h],l._$AI(d),h++;h<r.length&&(this._$AR(l&&l._$AB.nextSibling,h),r.length=h)}_$AR(a=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);a!==this._$AB;){let l=Wo(a).nextSibling;Wo(a).remove(),a=l}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}},ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,r,l,h,d){this.type=1,this._$AH=H,this._$AN=void 0,this.element=a,this.name=r,this._$AM=h,this.options=d,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=H}_$AI(a,r=this,l,h){let d=this.strings,p=!1;if(d===void 0)a=te(this,a,r,0),p=!Se(a)||a!==this._$AH&&a!==Ht,p&&(this._$AH=a);else{let y=a,g,b;for(a=d[0],g=0;g<d.length-1;g++)b=te(this,y[l+g],r,g),b===Ht&&(b=this._$AH[g]),p||(p=!Se(b)||b!==this._$AH[g]),b===H?a=H:a!==H&&(a+=(b??"")+d[g+1]),this._$AH[g]=b}p&&!h&&this.j(a)}j(a){a===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}},nn=class extends ee{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===H?void 0:a}},on=class extends ee{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==H)}},rn=class extends ee{constructor(a,r,l,h,d){super(a,r,l,h,d),this.type=5}_$AI(a,r=this){if((a=te(this,a,r,0)??H)===Ht)return;let l=this._$AH,h=a===H&&l!==H||a.capture!==l.capture||a.once!==l.once||a.passive!==l.passive,d=a!==H&&(l===H||h);h&&this.element.removeEventListener(this.name,this,l),d&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}},sn=class{constructor(a,r,l){this.element=a,this.type=6,this._$AN=void 0,this._$AM=r,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(a){te(this,a)}},ya=Pe.litHtmlPolyfillSupport;ya?.(ke,Ee),(Pe.litHtmlVersions??(Pe.litHtmlVersions=[])).push("3.3.3");er=(c,a,r)=>{let l=r?.renderBefore??a,h=l._$litPart$;if(h===void 0){let d=r?.renderBefore??null;l._$litPart$=h=new Ee(a.insertBefore(Te(),d),d,void 0,r??{})}return h._$AI(c),h}});var Ce,mt,ba,ir=q(()=>{we();we();si();si();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Ce=globalThis,mt=class extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;let a=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=a.firstChild),a}update(a){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=er(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ht}};mt._$litElement$=!0,mt.finalized=!0,Ce.litElementHydrateSupport?.({LitElement:mt});ba=Ce.litElementPolyfillSupport;ba?.({LitElement:mt});(Ce.litElementVersions??(Ce.litElementVersions=[])).push("4.2.2")});var nr=q(()=>{/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var hn=q(()=>{we();si();ir();nr()});var ai,or=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ai=c=>(a,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(c,a)}):customElements.define(c,a)}});function ie(c){return(a,r)=>typeof r=="object"?wa(c,a,r):((l,h,d)=>{let p=h.hasOwnProperty(d);return h.constructor.createProperty(d,l),p?Object.getOwnPropertyDescriptor(h,d):void 0})(c,a,r)}var xa,wa,cn=q(()=>{we();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */xa={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:oi},wa=(c=xa,a,r)=>{let{kind:l,metadata:h}=r,d=globalThis.litPropertyMetadata.get(h);if(d===void 0&&globalThis.litPropertyMetadata.set(h,d=new Map),l==="setter"&&((c=Object.create(c)).wrapped=!0),d.set(r.name,c),l==="accessor"){let{name:p}=r;return{set(y){let g=a.get.call(this);a.set.call(this,y),this.requestUpdate(p,g,c,!0,y)},init(y){return y!==void 0&&this.C(p,void 0,c,y),y}}}if(l==="setter"){let{name:p}=r;return function(y){let g=this[p];a.call(this,y),this.requestUpdate(p,g,c,!0,y)}}throw Error("Unsupported decorator location: "+l)}});function Ft(c){return ie({...c,state:!0,attribute:!1})}var rr=q(()=>{cn();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var sr=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var ne=q(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var ar=q(()=>{ne();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var lr=q(()=>{ne();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var hr=q(()=>{ne();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var cr=q(()=>{ne();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var ur=q(()=>{ne();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var un=q(()=>{or();cn();rr();sr();ar();lr();hr();cr();ur()});var dn=ra((hi,dr)=>{/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(c,a){typeof hi=="object"&&typeof dr<"u"?a(hi):typeof define=="function"&&define.amd?define(["exports"],a):(c=typeof globalThis<"u"?globalThis:c||self,a(c.leaflet={}))})(hi,(function(c){"use strict";var a="1.9.4";function r(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t}var l=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function h(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var d=0;function p(t){return"_leaflet_id"in t||(t._leaflet_id=++d),t._leaflet_id}function y(t,e,i){var n,o,s,u;return u=function(){n=!1,o&&(s.apply(i,o),o=!1)},s=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(u,e),n=!0)},s}function g(t,e,i){var n=e[1],o=e[0],s=n-o;return t===n&&i?t:((t-o)%s+s)%s+o}function b(){return!1}function z(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function T(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function O(t){return T(t).split(/\s+/)}function A(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?l(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function it(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var At=/\{ *([\w_ -]+) *\}/g;function bn(t,e){return t.replace(At,function(i,n){var o=e[n];if(o===void 0)throw new Error("No value provided for variable "+i);return typeof o=="function"&&(o=o(e)),o})}var lt=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function _i(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Ie="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function mi(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var xn=0;function wn(t){var e=+new Date,i=Math.max(0,16-(e-xn));return xn=e+i,window.setTimeout(t,i)}var gi=window.requestAnimationFrame||mi("RequestAnimationFrame")||wn,Ln=window.cancelAnimationFrame||mi("CancelAnimationFrame")||mi("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function J(t,e,i){if(i&&gi===wn)t.call(e);else return gi.call(window,h(t,e))}function nt(t){t&&Ln.call(window,t)}var Cr={__proto__:null,extend:r,create:l,bind:h,get lastId(){return d},stamp:p,throttle:y,wrapNum:g,falseFn:b,formatNum:z,trim:T,splitWords:O,setOptions:A,getParamString:it,template:bn,isArray:lt,indexOf:_i,emptyImageUrl:Ie,requestFn:gi,cancelFn:Ln,requestAnimFrame:J,cancelAnimFrame:nt};function vt(){}vt.extend=function(t){var e=function(){A(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=l(i);n.constructor=e,e.prototype=n;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!=="prototype"&&o!=="__super__"&&(e[o]=this[o]);return t.statics&&r(e,t.statics),t.includes&&(Mr(t.includes),r.apply(null,[n].concat(t.includes))),r(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?l(i.options):{},r(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var s=0,u=n._initHooks.length;s<u;s++)n._initHooks[s].call(this)}},e},vt.include=function(t){var e=this.prototype.options;return r(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},vt.mergeOptions=function(t){return r(this.prototype.options,t),this},vt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function Mr(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=lt(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var et={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=O(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=O(t);for(var o=arguments.length===1,s=0,u=t.length;s<u;s++)o?this._off(t[s]):this._off(t[s],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){var n,o,s;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(o=0,s=n.length;o<s;o++)n[o].fn=b;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var u=this._listens(t,e,i);if(u!==!1){var f=n[u];this._firingCount&&(f.fn=b,this._events[t]=n=n.slice()),n.splice(u,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=r({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,u=o.length;s<u;s++){var f=o[s],_=f.fn;f.once&&this.off(t,_,f.ctx),_.call(f.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var o=e;typeof e!="function"&&(n=!!e,o=void 0,i=void 0);var s=this._events&&this._events[t];if(s&&s.length&&this._listens(t,o,i)!==!1)return!0;if(n){for(var u in this._eventParents)if(this._eventParents[u].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,s=n.length;o<s;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=O(t);for(var o=0,s=t.length;o<s;o++)this._on(t[o],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[p(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[p(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,r({layer:t.target,propagatedFrom:t.target},t),!0)}};et.addEventListener=et.on,et.removeEventListener=et.clearAllEventListeners=et.off,et.addOneTimeEventListener=et.once,et.fireEvent=et.fire,et.hasEventListeners=et.listens;var re=vt.extend(et);function S(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Pn=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};S.prototype={clone:function(){return new S(this.x,this.y)},add:function(t){return this.clone()._add(P(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(P(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new S(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new S(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Pn(this.x),this.y=Pn(this.y),this},distanceTo:function(t){t=P(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=P(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=P(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+z(this.x)+", "+z(this.y)+")"}};function P(t,e,i){return t instanceof S?t:lt(t)?new S(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new S(t.x,t.y):new S(t,e,i)}function N(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}N.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof S||typeof t[0]=="number"||"x"in t)e=i=P(t);else if(t=X(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return P((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return P(this.min.x,this.max.y)},getTopRight:function(){return P(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof S?t=P(t):t=X(t),t instanceof N?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=X(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>=e.x&&n.x<=i.x,u=o.y>=e.y&&n.y<=i.y;return s&&u},overlaps:function(t){t=X(t);var e=this.min,i=this.max,n=t.min,o=t.max,s=o.x>e.x&&n.x<i.x,u=o.y>e.y&&n.y<i.y;return s&&u},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return X(P(e.x-n,e.y-o),P(i.x+n,i.y+o))},equals:function(t){return t?(t=X(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function X(t,e){return!t||t instanceof N?t:new N(t,e)}function Q(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}Q.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,o;if(t instanceof $)n=t,o=t;else if(t instanceof Q){if(n=t._southWest,o=t._northEast,!n||!o)return this}else return t?this.extend(I(t)||U(t)):this;return!e&&!i?(this._southWest=new $(n.lat,n.lng),this._northEast=new $(o.lat,o.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(o.lat,i.lat),i.lng=Math.max(o.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new Q(new $(e.lat-n,e.lng-o),new $(i.lat+n,i.lng+o))},getCenter:function(){return new $((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new $(this.getNorth(),this.getWest())},getSouthEast:function(){return new $(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof $||"lat"in t?t=I(t):t=U(t);var e=this._southWest,i=this._northEast,n,o;return t instanceof Q?(n=t.getSouthWest(),o=t.getNorthEast()):n=o=t,n.lat>=e.lat&&o.lat<=i.lat&&n.lng>=e.lng&&o.lng<=i.lng},intersects:function(t){t=U(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=e.lat&&n.lat<=i.lat,u=o.lng>=e.lng&&n.lng<=i.lng;return s&&u},overlaps:function(t){t=U(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>e.lat&&n.lat<i.lat,u=o.lng>e.lng&&n.lng<i.lng;return s&&u},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=U(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function U(t,e){return t instanceof Q?t:new Q(t,e)}function $(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}$.prototype={equals:function(t,e){if(!t)return!1;t=I(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+z(this.lat,t)+", "+z(this.lng,t)+")"},distanceTo:function(t){return St.distance(this,I(t))},wrap:function(){return St.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return U([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new $(this.lat,this.lng,this.alt)}};function I(t,e,i){return t instanceof $?t:lt(t)&&typeof t[0]!="object"?t.length===3?new $(t[0],t[1],t[2]):t.length===2?new $(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new $(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new $(t,e,i)}var yt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new N(n,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?g(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?g(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new $(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(n===0&&o===0)return t;var s=t.getSouthWest(),u=t.getNorthEast(),f=new $(s.lat-n,s.lng-o),_=new $(u.lat-n,u.lng-o);return new Q(f,_)}},St=r({},yt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin((e.lat-t.lat)*i/2),u=Math.sin((e.lng-t.lng)*i/2),f=s*s+Math.cos(n)*Math.cos(o)*u*u,_=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));return this.R*_}}),Tn=6378137,vi={R:Tn,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new S(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new $((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=Tn*Math.PI;return new N([-t,-t],[t,t])})()};function yi(t,e,i,n){if(lt(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}yi.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new S((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function se(t,e,i,n){return new yi(t,e,i,n)}var bi=r({},St,{code:"EPSG:3857",projection:vi,transformation:(function(){var t=.5/(Math.PI*vi.R);return se(t,.5,-t,.5)})()}),zr=r({},bi,{code:"EPSG:900913"});function Sn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function kn(t,e){var i="",n,o,s,u,f,_;for(n=0,s=t.length;n<s;n++){for(f=t[n],o=0,u=f.length;o<u;o++)_=f[o],i+=(o?"L":"M")+_.x+" "+_.y;i+=e?x.svg?"z":"x":""}return i||"M0 0"}var xi=document.documentElement.style,Be="ActiveXObject"in window,Ar=Be&&!document.addEventListener,En="msLaunchUri"in navigator&&!("documentMode"in document),wi=dt("webkit"),Cn=dt("android"),Mn=dt("android 2")||dt("android 3"),Or=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ir=Cn&&dt("Google")&&Or<537&&!("AudioNode"in window),Li=!!window.opera,zn=!En&&dt("chrome"),An=dt("gecko")&&!wi&&!Li&&!Be,Br=!zn&&dt("safari"),On=dt("phantom"),In="OTransition"in xi,Zr=navigator.platform.indexOf("Win")===0,Bn=Be&&"transition"in xi,Pi="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Mn,Zn="MozPerspective"in xi,$r=!window.L_DISABLE_3D&&(Bn||Pi||Zn)&&!In&&!On,ae=typeof orientation<"u"||dt("mobile"),Rr=ae&&wi,Nr=ae&&Pi,$n=!window.PointerEvent&&window.MSPointerEvent,Rn=!!(window.PointerEvent||$n),Nn="ontouchstart"in window||!!window.TouchEvent,Dr=!window.L_NO_TOUCH&&(Nn||Rn),Hr=ae&&Li,Fr=ae&&An,Ur=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Wr=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",b,e),window.removeEventListener("testPassiveEventSupport",b,e)}catch{}return t})(),jr=(function(){return!!document.createElement("canvas").getContext})(),Ti=!!(document.createElementNS&&Sn("svg").createSVGRect),qr=!!Ti&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Vr=!Ti&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Kr=navigator.platform.indexOf("Mac")===0,Gr=navigator.platform.indexOf("Linux")===0;function dt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var x={ie:Be,ielt9:Ar,edge:En,webkit:wi,android:Cn,android23:Mn,androidStock:Ir,opera:Li,chrome:zn,gecko:An,safari:Br,phantom:On,opera12:In,win:Zr,ie3d:Bn,webkit3d:Pi,gecko3d:Zn,any3d:$r,mobile:ae,mobileWebkit:Rr,mobileWebkit3d:Nr,msPointer:$n,pointer:Rn,touch:Dr,touchNative:Nn,mobileOpera:Hr,mobileGecko:Fr,retina:Ur,passiveEvents:Wr,canvas:jr,svg:Ti,vml:Vr,inlineSvg:qr,mac:Kr,linux:Gr},Dn=x.msPointer?"MSPointerDown":"pointerdown",Hn=x.msPointer?"MSPointerMove":"pointermove",Fn=x.msPointer?"MSPointerUp":"pointerup",Un=x.msPointer?"MSPointerCancel":"pointercancel",Si={touchstart:Dn,touchmove:Hn,touchend:Fn,touchcancel:Un},Wn={touchstart:es,touchmove:Ze,touchend:Ze,touchcancel:Ze},jt={},jn=!1;function Yr(t,e,i){return e==="touchstart"&&ts(),Wn[e]?(i=Wn[e].bind(this,i),t.addEventListener(Si[e],i,!1),i):(console.warn("wrong event specified:",e),b)}function Jr(t,e,i){if(!Si[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(Si[e],i,!1)}function Xr(t){jt[t.pointerId]=t}function Qr(t){jt[t.pointerId]&&(jt[t.pointerId]=t)}function qn(t){delete jt[t.pointerId]}function ts(){jn||(document.addEventListener(Dn,Xr,!0),document.addEventListener(Hn,Qr,!0),document.addEventListener(Fn,qn,!0),document.addEventListener(Un,qn,!0),jn=!0)}function Ze(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in jt)e.touches.push(jt[i]);e.changedTouches=[e],t(e)}}function es(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&K(e),Ze(t,e)}function is(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var ns=200;function os(t,e){t.addEventListener("dblclick",e);var i=0,n;function o(s){if(s.detail!==1){n=s.detail;return}if(!(s.pointerType==="mouse"||s.sourceCapabilities&&!s.sourceCapabilities.firesTouchEvents)){var u=Jn(s);if(!(u.some(function(_){return _ instanceof HTMLLabelElement&&_.attributes.for})&&!u.some(function(_){return _ instanceof HTMLInputElement||_ instanceof HTMLSelectElement}))){var f=Date.now();f-i<=ns?(n++,n===2&&e(is(s))):n=1,i=f}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function rs(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var ki=Ne(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),le=Ne(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Vn=le==="webkitTransition"||le==="OTransition"?le+"End":"transitionend";function Kn(t){return typeof t=="string"?document.getElementById(t):t}function he(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function Z(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function D(t){var e=t.parentNode;e&&e.removeChild(t)}function $e(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function qt(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Vt(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Ei(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=Re(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function E(t,e){if(t.classList!==void 0)for(var i=O(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!Ei(t,e)){var s=Re(t);Ci(t,(s?s+" ":"")+e)}}function F(t,e){t.classList!==void 0?t.classList.remove(e):Ci(t,T((" "+Re(t)+" ").replace(" "+e+" "," ")))}function Ci(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function Re(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function ot(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&ss(t,e)}function ss(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function Ne(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function Ot(t,e,i){var n=e||new S(0,0);t.style[ki]=(x.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function W(t,e){t._leaflet_pos=e,x.any3d?Ot(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function It(t){return t._leaflet_pos||new S(0,0)}var ce,ue,Mi;if("onselectstart"in document)ce=function(){k(window,"selectstart",K)},ue=function(){R(window,"selectstart",K)};else{var de=Ne(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ce=function(){if(de){var t=document.documentElement.style;Mi=t[de],t[de]="none"}},ue=function(){de&&(document.documentElement.style[de]=Mi,Mi=void 0)}}function zi(){k(window,"dragstart",K)}function Ai(){R(window,"dragstart",K)}var De,Oi;function Ii(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(He(),De=t,Oi=t.style.outlineStyle,t.style.outlineStyle="none",k(window,"keydown",He))}function He(){De&&(De.style.outlineStyle=Oi,De=void 0,Oi=void 0,R(window,"keydown",He))}function Gn(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Bi(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var as={__proto__:null,TRANSFORM:ki,TRANSITION:le,TRANSITION_END:Vn,get:Kn,getStyle:he,create:Z,remove:D,empty:$e,toFront:qt,toBack:Vt,hasClass:Ei,addClass:E,removeClass:F,setClass:Ci,getClass:Re,setOpacity:ot,testProp:Ne,setTransform:Ot,setPosition:W,getPosition:It,get disableTextSelection(){return ce},get enableTextSelection(){return ue},disableImageDrag:zi,enableImageDrag:Ai,preventOutline:Ii,restoreOutline:He,getSizedParentNode:Gn,getScale:Bi};function k(t,e,i,n){if(e&&typeof e=="object")for(var o in e)$i(t,o,e[o],i);else{e=O(e);for(var s=0,u=e.length;s<u;s++)$i(t,e[s],i,n)}return this}var ft="_leaflet_events";function R(t,e,i,n){if(arguments.length===1)Yn(t),delete t[ft];else if(e&&typeof e=="object")for(var o in e)Ri(t,o,e[o],i);else if(e=O(e),arguments.length===2)Yn(t,function(f){return _i(e,f)!==-1});else for(var s=0,u=e.length;s<u;s++)Ri(t,e[s],i,n);return this}function Yn(t,e){for(var i in t[ft]){var n=i.split(/\d/)[0];(!e||e(n))&&Ri(t,n,null,null,i)}}var Zi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function $i(t,e,i,n){var o=e+p(i)+(n?"_"+p(n):"");if(t[ft]&&t[ft][o])return this;var s=function(f){return i.call(n||t,f||window.event)},u=s;!x.touchNative&&x.pointer&&e.indexOf("touch")===0?s=Yr(t,e,s):x.touch&&e==="dblclick"?s=os(t,s):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Zi[e]||e,s,x.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(s=function(f){f=f||window.event,Di(t,f)&&u(f)},t.addEventListener(Zi[e],s,!1)):t.addEventListener(e,u,!1):t.attachEvent("on"+e,s),t[ft]=t[ft]||{},t[ft][o]=s}function Ri(t,e,i,n,o){o=o||e+p(i)+(n?"_"+p(n):"");var s=t[ft]&&t[ft][o];if(!s)return this;!x.touchNative&&x.pointer&&e.indexOf("touch")===0?Jr(t,e,s):x.touch&&e==="dblclick"?rs(t,s):"removeEventListener"in t?t.removeEventListener(Zi[e]||e,s,!1):t.detachEvent("on"+e,s),t[ft][o]=null}function Bt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function Ni(t){return $i(t,"wheel",Bt),this}function fe(t){return k(t,"mousedown touchstart dblclick contextmenu",Bt),t._leaflet_disable_click=!0,this}function K(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Zt(t){return K(t),Bt(t),this}function Jn(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Xn(t,e){if(!e)return new S(t.clientX,t.clientY);var i=Bi(e),n=i.boundingClientRect;return new S((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var ls=x.linux&&x.chrome?window.devicePixelRatio:x.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Qn(t){return x.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/ls:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Di(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var hs={__proto__:null,on:k,off:R,stopPropagation:Bt,disableScrollPropagation:Ni,disableClickPropagation:fe,preventDefault:K,stop:Zt,getPropagationPath:Jn,getMousePosition:Xn,getWheelDelta:Qn,isExternalTarget:Di,addListener:k,removeListener:R},to=re.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=It(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=J(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),W(this._el,i),this.fire("step")},_complete:function(){nt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),B=re.extend({options:{crs:bi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=A(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(I(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=le&&x.any3d&&!x.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),k(this._proxy,Vn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(I(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=r({animate:i.animate},i.zoom),i.pan=r({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),s=t instanceof S?t:this.latLngToContainerPoint(t),u=s.subtract(o).multiplyBy(1-1/n),f=this.containerPointToLatLng(o.add(u));return this.setView(f,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():U(t);var i=P(e.paddingTopLeft||e.padding||[0,0]),n=P(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if(o=typeof e.maxZoom=="number"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(i).divideBy(2),u=this.project(t.getSouthWest(),o),f=this.project(t.getNorthEast(),o),_=this.unproject(u.add(f).divideBy(2).add(s),o);return{center:_,zoom:o}},fitBounds:function(t,e){if(t=U(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=P(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new to,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){E(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!x.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),s=this.getSize(),u=this._zoom;t=I(t),e=e===void 0?u:e;var f=Math.max(s.x,s.y),_=f*this.getZoomScale(u,e),m=o.distanceTo(n)||1,v=1.42,w=v*v;function C(j){var Qe=j?-1:1,Js=j?_:f,Xs=_*_-f*f+Qe*w*w*m*m,Qs=2*Js*w*m,Ji=Xs/Qs,Bo=Math.sqrt(Ji*Ji+1)-Ji,ta=Bo<1e-9?-18:Math.log(Bo);return ta}function Y(j){return(Math.exp(j)-Math.exp(-j))/2}function V(j){return(Math.exp(j)+Math.exp(-j))/2}function st(j){return Y(j)/V(j)}var tt=C(0);function Qt(j){return f*(V(tt)/V(tt+v*j))}function Vs(j){return f*(V(tt)*st(tt+v*j)-Y(tt))/w}function Ks(j){return 1-Math.pow(1-j,1.5)}var Gs=Date.now(),Oo=(C(1)-tt)/v,Ys=i.duration?1e3*i.duration:1e3*Oo*.8;function Io(){var j=(Date.now()-Gs)/Ys,Qe=Ks(j)*Oo;j<=1?(this._flyToFrame=J(Io,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(Vs(Qe)/m)),u),this.getScaleZoom(f/Qt(Qe),u),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),Io.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=U(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,U(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=P(e.paddingTopLeft||e.padding||[0,0]),n=P(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),s=this.project(t),u=this.getPixelBounds(),f=X([u.min.add(i),u.max.subtract(n)]),_=f.getSize();if(!f.contains(s)){this._enforcingBounds=!0;var m=s.subtract(f.getCenter()),v=f.extend(s).getSize().subtract(_);o.x+=m.x<0?-v.x:v.x,o.y+=m.y<0?-v.y:v.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=r({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),o=i.divideBy(2).round(),s=n.subtract(o);return!s.x&&!s.y?this:(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=r({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=h(this._handleGeolocationResponse,this),i=h(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new $(e,i),o=n.toBounds(t.coords.accuracy*2),s=this._locateOptions;if(s.setView){var u=this.getBoundsZoom(o);this.setView(n,s.maxZoom?Math.min(u,s.maxZoom):u)}var f={latlng:n,bounds:o,timestamp:t.timestamp};for(var _ in t.coords)typeof t.coords[_]=="number"&&(f[_]=t.coords[_]);this.fire("locationfound",f)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),D(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(nt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)D(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=Z("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new Q(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=U(t),i=P(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),u=t.getNorthWest(),f=t.getSouthEast(),_=this.getSize().subtract(i),m=X(this.project(f,n),this.project(u,n)).getSize(),v=x.any3d?this.options.zoomSnap:1,w=_.x/m.x,C=_.y/m.y,Y=e?Math.max(w,C):Math.min(w,C);return n=this.getScaleZoom(Y,n),v&&(n=Math.round(n/(v/100))*(v/100),n=e?Math.ceil(n/v)*v:Math.floor(n/v)*v),Math.max(o,Math.min(s,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new S(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new N(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(I(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(P(t),e)},layerPointToLatLng:function(t){var e=P(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(I(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(I(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(U(t))},distance:function(t,e){return this.options.crs.distance(I(t),I(e))},containerPointToLayerPoint:function(t){return P(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return P(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(P(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(I(t)))},mouseEventToContainerPoint:function(t){return Xn(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Kn(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");k(e,"scroll",this._onScroll,this),this._containerId=p(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&x.any3d,E(t,"leaflet-container"+(x.touch?" leaflet-touch":"")+(x.retina?" leaflet-retina":"")+(x.ielt9?" leaflet-oldie":"")+(x.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=he(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),W(this._mapPane,new S(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(E(t.markerPane,"leaflet-zoom-hide"),E(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){W(this._mapPane,new S(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return nt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){W(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[p(this._container)]=this;var e=t?R:k;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),x.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){nt(this._resizeRequest),this._resizeRequest=J(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,o=e==="mouseout"||e==="mouseover",s=t.target||t.srcElement,u=!1;s;){if(n=this._targets[p(s)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){u=!0;break}if(n&&n.listens(e,!0)&&(o&&!Di(s,t)||(i.push(n),o))||s===this._container)break;s=s.parentNode}return!i.length&&!u&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Ii(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=r({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var o=this._findEventTargets(t,e);if(i){for(var s=[],u=0;u<i.length;u++)i[u].listens(e,!0)&&s.push(i[u]);o=s.concat(o)}if(o.length){e==="contextmenu"&&K(t);var f=o[0],_={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var m=f.getLatLng&&(!f._radius||f._radius<=10);_.containerPoint=m?this.latLngToContainerPoint(f.getLatLng()):this.mouseEventToContainerPoint(t),_.layerPoint=this.containerPointToLayerPoint(_.containerPoint),_.latlng=m?f.getLatLng():this.layerPointToLatLng(_.layerPoint)}for(u=0;u<o.length;u++)if(o[u].fire(e,_,!0),_.originalEvent._stopped||o[u].options.bubblingMouseEvents===!1&&_i(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return It(this._mapPane)||new S(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return X([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),s=new N(n.subtract(o),n.add(o)),u=this._getBoundsOffset(s,i,e);return Math.abs(u.x)<=1&&Math.abs(u.y)<=1?t:this.unproject(n.add(u),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new N(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=X(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),s=n.max.subtract(t.max),u=this._rebound(o.x,-s.x),f=this._rebound(o.y,-s.y);return new S(u,f)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=x.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){F(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=Z("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=ki,n=this._proxy.style[i];Ot(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){D(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();Ot(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(o)?!1:(J(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,E(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&F(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function cs(t,e){return new B(t,e)}var ht=vt.extend({options:{position:"topright"},initialize:function(t){A(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return E(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(D(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),pe=function(t){return new ht(t)};B.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=Z("div",e+"control-container",this._container);function n(o,s){var u=e+o+" "+e+s;t[o+s]=Z("div",u,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)D(this._controlCorners[t]);D(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var eo=ht.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){A(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return ht.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(p(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){E(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(E(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):F(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return F(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=Z("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),fe(e),Ni(e);var n=this._section=Z("section",t+"-list");i&&(this._map.on("click",this.collapse,this),k(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=Z("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),k(o,{keydown:function(s){s.keyCode===13&&this._expandSafely()},click:function(s){K(s),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=Z("div",t+"-base",n),this._separator=Z("div",t+"-separator",n),this._overlaysList=Z("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&p(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(h(function(n,o){return this.options.sortFunction(n.layer,o.layer,n.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;$e(this._baseLayersList),$e(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(p(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+p(this),i),this._layerControlInputs.push(n),n.layerId=p(t.layer),k(n,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("span");e.appendChild(s),s.appendChild(n),s.appendChild(o);var u=t.overlay?this._overlaysList:this._baseLayersList;return u.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],o=[];this._handlingClick=!0;for(var s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,k(t,"click",K),this.expand();var e=this;setTimeout(function(){R(t,"click",K),e._preventClick=!1})}}),us=function(t,e,i){return new eo(t,e,i)},Hi=ht.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=Z("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var s=Z("a",i,n);return s.innerHTML=t,s.href="#",s.title=e,s.setAttribute("role","button"),s.setAttribute("aria-label",e),fe(s),k(s,"click",Zt),k(s,"click",o,this),k(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";F(this._zoomInButton,e),F(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(E(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(E(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});B.mergeOptions({zoomControl:!0}),B.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Hi,this.addControl(this.zoomControl))});var ds=function(t){return new Hi(t)},io=ht.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=Z("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=Z("div",e,i)),t.imperial&&(this._iScale=Z("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,o;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+" ft",o/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),fs=function(t){return new io(t)},ps='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Fi=ht.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(x.inlineSvg?ps+" ":"")+"Leaflet</a>"},initialize:function(t){A(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=Z("div","leaflet-control-attribution"),fe(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});B.mergeOptions({attributionControl:!0}),B.addInitHook(function(){this.options.attributionControl&&new Fi().addTo(this)});var _s=function(t){return new Fi(t)};ht.Layers=eo,ht.Zoom=Hi,ht.Scale=io,ht.Attribution=Fi,pe.layers=us,pe.zoom=ds,pe.scale=fs,pe.attribution=_s;var pt=vt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});pt.addTo=function(t,e){return t.addHandler(e,this),this};var ms={Events:et},no=x.touch?"touchstart mousedown":"mousedown",kt=re.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){A(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(k(this._dragStartTarget,no,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(kt._dragging===this&&this.finishDrag(!0),R(this._dragStartTarget,no,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Ei(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){kt._dragging===this&&this.finishDrag();return}if(!(kt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(kt._dragging=this,this._preventOutline&&Ii(this._element),zi(),ce(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=Gn(this._element);this._startPoint=new S(e.clientX,e.clientY),this._startPos=It(this._element),this._parentScale=Bi(i);var n=t.type==="mousedown";k(document,n?"mousemove":"touchmove",this._onMove,this),k(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new S(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,K(t),this._moved||(this.fire("dragstart"),this._moved=!0,E(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),E(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),W(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){F(document.body,"leaflet-dragging"),this._lastTarget&&(F(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),R(document,"mousemove touchmove",this._onMove,this),R(document,"mouseup touchend touchcancel",this._onUp,this),Ai(),ue();var e=this._moved&&this._moving;this._moving=!1,kt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function oo(t,e,i){var n,o=[1,4,2,8],s,u,f,_,m,v,w,C;for(s=0,v=t.length;s<v;s++)t[s]._code=$t(t[s],e);for(f=0;f<4;f++){for(w=o[f],n=[],s=0,v=t.length,u=v-1;s<v;u=s++)_=t[s],m=t[u],_._code&w?m._code&w||(C=Fe(m,_,w,e,i),C._code=$t(C,e),n.push(C)):(m._code&w&&(C=Fe(m,_,w,e,i),C._code=$t(C,e),n.push(C)),n.push(_));t=n}return t}function ro(t,e){var i,n,o,s,u,f,_,m,v;if(!t||t.length===0)throw new Error("latlngs not passed");rt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var w=I([0,0]),C=U(t),Y=C.getNorthWest().distanceTo(C.getSouthWest())*C.getNorthEast().distanceTo(C.getNorthWest());Y<1700&&(w=Ui(t));var V=t.length,st=[];for(i=0;i<V;i++){var tt=I(t[i]);st.push(e.project(I([tt.lat-w.lat,tt.lng-w.lng])))}for(f=_=m=0,i=0,n=V-1;i<V;n=i++)o=st[i],s=st[n],u=o.y*s.x-s.y*o.x,_+=(o.x+s.x)*u,m+=(o.y+s.y)*u,f+=u*3;f===0?v=st[0]:v=[_/f,m/f];var Qt=e.unproject(P(v));return I([Qt.lat+w.lat,Qt.lng+w.lng])}function Ui(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var s=I(t[o]);e+=s.lat,i+=s.lng,n++}return I([e/n,i/n])}var gs={__proto__:null,clipPolygon:oo,polygonCenter:ro,centroid:Ui};function so(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=bs(t,i),t=ys(t,i),t}function ao(t,e,i){return Math.sqrt(_e(t,e,i,!0))}function vs(t,e,i){return _e(t,e,i)}function ys(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,o=new n(i);o[0]=o[i-1]=1,Wi(t,o,e,0,i-1);var s,u=[];for(s=0;s<i;s++)o[s]&&u.push(t[s]);return u}function Wi(t,e,i,n,o){var s=0,u,f,_;for(f=n+1;f<=o-1;f++)_=_e(t[f],t[n],t[o],!0),_>s&&(u=f,s=_);s>i&&(e[u]=1,Wi(t,e,i,n,u),Wi(t,e,i,u,o))}function bs(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)xs(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<s-1&&i.push(t[s-1]),i}var lo;function ho(t,e,i,n,o){var s=n?lo:$t(t,i),u=$t(e,i),f,_,m;for(lo=u;;){if(!(s|u))return[t,e];if(s&u)return!1;f=s||u,_=Fe(t,e,f,i,o),m=$t(_,i),f===s?(t=_,s=m):(e=_,u=m)}}function Fe(t,e,i,n,o){var s=e.x-t.x,u=e.y-t.y,f=n.min,_=n.max,m,v;return i&8?(m=t.x+s*(_.y-t.y)/u,v=_.y):i&4?(m=t.x+s*(f.y-t.y)/u,v=f.y):i&2?(m=_.x,v=t.y+u*(_.x-t.x)/s):i&1&&(m=f.x,v=t.y+u*(f.x-t.x)/s),new S(m,v,o)}function $t(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function xs(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function _e(t,e,i,n){var o=e.x,s=e.y,u=i.x-o,f=i.y-s,_=u*u+f*f,m;return _>0&&(m=((t.x-o)*u+(t.y-s)*f)/_,m>1?(o=i.x,s=i.y):m>0&&(o+=u*m,s+=f*m)),u=t.x-o,f=t.y-s,n?u*u+f*f:new S(o,s)}function rt(t){return!lt(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function co(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),rt(t)}function uo(t,e){var i,n,o,s,u,f,_,m;if(!t||t.length===0)throw new Error("latlngs not passed");rt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var v=I([0,0]),w=U(t),C=w.getNorthWest().distanceTo(w.getSouthWest())*w.getNorthEast().distanceTo(w.getNorthWest());C<1700&&(v=Ui(t));var Y=t.length,V=[];for(i=0;i<Y;i++){var st=I(t[i]);V.push(e.project(I([st.lat-v.lat,st.lng-v.lng])))}for(i=0,n=0;i<Y-1;i++)n+=V[i].distanceTo(V[i+1])/2;if(n===0)m=V[0];else for(i=0,s=0;i<Y-1;i++)if(u=V[i],f=V[i+1],o=u.distanceTo(f),s+=o,s>n){_=(s-n)/o,m=[f.x-_*(f.x-u.x),f.y-_*(f.y-u.y)];break}var tt=e.unproject(P(m));return I([tt.lat+v.lat,tt.lng+v.lng])}var ws={__proto__:null,simplify:so,pointToSegmentDistance:ao,closestPointOnSegment:vs,clipSegment:ho,_getEdgeIntersection:Fe,_getBitCode:$t,_sqClosestPointOnSegment:_e,isFlat:rt,_flat:co,polylineCenter:uo},ji={project:function(t){return new S(t.lng,t.lat)},unproject:function(t){return new $(t.y,t.x)},bounds:new N([-180,-90],[180,90])},qi={R:6378137,R_MINOR:6356752314245179e-9,bounds:new N([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,s=Math.sqrt(1-o*o),u=s*Math.sin(n),f=Math.tan(Math.PI/4-n/2)/Math.pow((1-u)/(1+u),s/2);return n=-i*Math.log(Math.max(f,1e-10)),new S(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,o=Math.sqrt(1-n*n),s=Math.exp(-t.y/i),u=Math.PI/2-2*Math.atan(s),f=0,_=.1,m;f<15&&Math.abs(_)>1e-7;f++)m=o*Math.sin(u),m=Math.pow((1-m)/(1+m),o/2),_=Math.PI/2-2*Math.atan(s*m)-u,u+=_;return new $(u*e,t.x*e/i)}},Ls={__proto__:null,LonLat:ji,Mercator:qi,SphericalMercator:vi},Ps=r({},St,{code:"EPSG:3395",projection:qi,transformation:(function(){var t=.5/(Math.PI*qi.R);return se(t,.5,-t,.5)})()}),fo=r({},St,{code:"EPSG:4326",projection:ji,transformation:se(1/180,1,-1/180,.5)}),Ts=r({},yt,{projection:ji,transformation:se(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});yt.Earth=St,yt.EPSG3395=Ps,yt.EPSG3857=bi,yt.EPSG900913=zr,yt.EPSG4326=fo,yt.Simple=Ts;var ct=re.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[p(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[p(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});B.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=p(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=p(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return p(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?lt(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[p(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=p(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Kt=ct.extend({initialize:function(t,e){A(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return p(t)}}),Ss=function(t,e){return new Kt(t,e)},bt=Kt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Kt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Kt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new Q;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),ks=function(t,e){return new bt(t,e)},Gt=vt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){A(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var o=P(n),s=P(e==="shadow"&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return x.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Es(t){return new Gt(t)}var me=Gt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof me.imagePath!="string"&&(me.imagePath=this._detectIconPath()),(this.options.imagePath||me.imagePath)+Gt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,o){var s=n.exec(i);return s&&s[o]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=Z("div","leaflet-default-icon-path",document.body),e=he(t,"background-image")||he(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),po=pt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new kt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),E(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&F(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=It(e._icon),u=i.getPixelBounds(),f=i.getPixelOrigin(),_=X(u.min._subtract(f).add(o),u.max._subtract(f).subtract(o));if(!_.contains(s)){var m=P((Math.max(_.max.x,s.x)-_.max.x)/(u.max.x-_.max.x)-(Math.min(_.min.x,s.x)-_.min.x)/(u.min.x-_.min.x),(Math.max(_.max.y,s.y)-_.max.y)/(u.max.y-_.max.y)-(Math.min(_.min.y,s.y)-_.min.y)/(u.min.y-_.min.y)).multiplyBy(n);i.panBy(m,{animate:!1}),this._draggable._newPos._add(m),this._draggable._startPos._add(m),W(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=J(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(nt(this._panRequest),this._panRequest=J(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=It(e._icon),o=e._map.layerPointToLatLng(n);i&&W(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){nt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Ue=ct.extend({options:{icon:new me,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){A(this,e),this._latlng=I(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=I(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),E(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&k(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(E(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&R(this._icon,"focus",this._panOnFocus,this),D(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&D(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&W(this._icon,t),this._shadow&&W(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(E(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),po)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new po(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&ot(this._icon,t),this._shadow&&ot(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?P(e.iconSize):P(0,0),n=e.iconAnchor?P(e.iconAnchor):P(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Cs(t,e){return new Ue(t,e)}var Et=ct.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return A(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),We=Et.extend({options:{fill:!0,radius:10},initialize:function(t,e){A(this,e),this._latlng=I(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=I(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return Et.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new N(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ms(t,e){return new We(t,e)}var Vi=We.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=r({},i,{radius:e})),A(this,e),this._latlng=I(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new Q(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Et.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===St.distance){var o=Math.PI/180,s=this._mRadius/St.R/o,u=i.project([e+s,t]),f=i.project([e-s,t]),_=u.add(f).divideBy(2),m=i.unproject(_).lat,v=Math.acos((Math.cos(s*o)-Math.sin(e*o)*Math.sin(m*o))/(Math.cos(e*o)*Math.cos(m*o)))/o;(isNaN(v)||v===0)&&(v=s/Math.cos(Math.PI/180*e)),this._point=_.subtract(i.getPixelOrigin()),this._radius=isNaN(v)?0:_.x-i.project([m,t-v]).x,this._radiusY=_.y-u.y}else{var w=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(w).x}this._updateBounds()}});function zs(t,e,i){return new Vi(t,e,i)}var xt=Et.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){A(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=_e,o,s,u=0,f=this._parts.length;u<f;u++)for(var _=this._parts[u],m=1,v=_.length;m<v;m++){o=_[m-1],s=_[m];var w=n(t,o,s,!0);w<e&&(e=w,i=n(t,o,s))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return uo(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=I(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new Q,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return rt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=rt(t),n=0,o=t.length;n<o;n++)i?(e[n]=I(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new N;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new S(t,t);this._rawPxBounds&&(this._pxBounds=new N([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof $,o=t.length,s,u;if(n){for(u=[],s=0;s<o;s++)u[s]=this._map.latLngToLayerPoint(t[s]),i.extend(u[s]);e.push(u)}else for(s=0;s<o;s++)this._projectLatlngs(t[s],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,o,s,u,f,_;for(i=0,o=0,s=this._rings.length;i<s;i++)for(_=this._rings[i],n=0,u=_.length;n<u-1;n++)f=ho(_[n],_[n+1],t,n,!0),f&&(e[o]=e[o]||[],e[o].push(f[0]),(f[1]!==_[n+1]||n===u-2)&&(e[o].push(f[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=so(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,s,u,f,_=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,s=this._parts.length;i<s;i++)for(f=this._parts[i],n=0,u=f.length,o=u-1;n<u;o=n++)if(!(!e&&n===0)&&ao(t,f[o],f[n])<=_)return!0;return!1}});function As(t,e){return new xt(t,e)}xt._flat=co;var Yt=xt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ro(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=xt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof $&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){xt.prototype._setLatLngs.call(this,t),rt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return rt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new S(e,e);if(t=new N(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,o=this._rings.length,s;n<o;n++)s=oo(this._rings[n],t,!0),s.length&&this._parts.push(s)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,o,s,u,f,_,m;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(s=0,_=this._parts.length;s<_;s++)for(i=this._parts[s],u=0,m=i.length,f=m-1;u<m;f=u++)n=i[u],o=i[f],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(e=!e);return e||xt.prototype._containsPoint.call(this,t,!0)}});function Os(t,e){return new Yt(t,e)}var wt=bt.extend({initialize:function(t,e){A(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=lt(t)?t:t.features,i,n,o;if(e){for(i=0,n=e.length;i<n;i++)o=e[i],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var u=je(t,s);return u?(u.feature=Ke(t),u.defaultOptions=u.options,this.resetStyle(u),s.onEachFeature&&s.onEachFeature(t,u),this.addLayer(u)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=r({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function je(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,o=[],s=e&&e.pointToLayer,u=e&&e.coordsToLatLng||Ki,f,_,m,v;if(!n&&!i)return null;switch(i.type){case"Point":return f=u(n),_o(s,t,f,e);case"MultiPoint":for(m=0,v=n.length;m<v;m++)f=u(n[m]),o.push(_o(s,t,f,e));return new bt(o);case"LineString":case"MultiLineString":return _=qe(n,i.type==="LineString"?0:1,u),new xt(_,e);case"Polygon":case"MultiPolygon":return _=qe(n,i.type==="Polygon"?1:2,u),new Yt(_,e);case"GeometryCollection":for(m=0,v=i.geometries.length;m<v;m++){var w=je({geometry:i.geometries[m],type:"Feature",properties:t.properties},e);w&&o.push(w)}return new bt(o);case"FeatureCollection":for(m=0,v=i.features.length;m<v;m++){var C=je(i.features[m],e);C&&o.push(C)}return new bt(o);default:throw new Error("Invalid GeoJSON object.")}}function _o(t,e,i,n){return t?t(e,i):new Ue(i,n&&n.markersInheritOptions&&n)}function Ki(t){return new $(t[1],t[0],t[2])}function qe(t,e,i){for(var n=[],o=0,s=t.length,u;o<s;o++)u=e?qe(t[o],e-1,i):(i||Ki)(t[o]),n.push(u);return n}function Gi(t,e){return t=I(t),t.alt!==void 0?[z(t.lng,e),z(t.lat,e),z(t.alt,e)]:[z(t.lng,e),z(t.lat,e)]}function Ve(t,e,i,n){for(var o=[],s=0,u=t.length;s<u;s++)o.push(e?Ve(t[s],rt(t[s])?0:e-1,i,n):Gi(t[s],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function Jt(t,e){return t.feature?r({},t.feature,{geometry:e}):Ke(e)}function Ke(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Yi={toGeoJSON:function(t){return Jt(this,{type:"Point",coordinates:Gi(this.getLatLng(),t)})}};Ue.include(Yi),Vi.include(Yi),We.include(Yi),xt.include({toGeoJSON:function(t){var e=!rt(this._latlngs),i=Ve(this._latlngs,e?1:0,!1,t);return Jt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Yt.include({toGeoJSON:function(t){var e=!rt(this._latlngs),i=e&&!rt(this._latlngs[0]),n=Ve(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Jt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Kt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Jt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(o){if(o.toGeoJSON){var s=o.toGeoJSON(t);if(i)n.push(s.geometry);else{var u=Ke(s);u.type==="FeatureCollection"?n.push.apply(n,u.features):n.push(u)}}}),i?Jt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function mo(t,e){return new wt(t,e)}var Is=mo,Ge=ct.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=U(e),A(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(E(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){D(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&qt(this._image),this},bringToBack:function(){return this._map&&Vt(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=U(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:Z("img");if(E(e,"leaflet-image-layer"),this._zoomAnimated&&E(e,"leaflet-zoom-animated"),this.options.className&&E(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onload=h(this.fire,this,"load"),e.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;Ot(this._image,i,e)},_reset:function(){var t=this._image,e=new N(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();W(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){ot(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Bs=function(t,e,i){return new Ge(t,e,i)},go=Ge.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:Z("video");if(E(e,"leaflet-image-layer"),this._zoomAnimated&&E(e,"leaflet-zoom-animated"),this.options.className&&E(e,this.options.className),e.onselectstart=b,e.onmousemove=b,e.onloadeddata=h(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}lt(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var s=0;s<this._url.length;s++){var u=Z("source");u.src=this._url[s],e.appendChild(u)}}});function Zs(t,e,i){return new go(t,e,i)}var vo=Ge.extend({_initImage:function(){var t=this._image=this._url;E(t,"leaflet-image-layer"),this._zoomAnimated&&E(t,"leaflet-zoom-animated"),this.options.className&&E(t,this.options.className),t.onselectstart=b,t.onmousemove=b}});function $s(t,e,i){return new vo(t,e,i)}var _t=ct.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof $||lt(t))?(this._latlng=I(t),A(this,e)):(A(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&ot(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&ot(this._container,1),this.bringToFront(),this.options.interactive&&(E(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(ot(this._container,0),this._removeTimeout=setTimeout(h(D,void 0,this._container),200)):D(this._container),this.options.interactive&&(F(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=I(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qt(this._container),this},bringToBack:function(){return this._map&&Vt(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof bt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=P(this.options.offset),i=this._getAnchor();this._zoomAnimated?W(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});B.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),ct.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(A(o,n),o._source=this):(o=e&&!n?e:new t(n,this),o.setContent(i)),o}});var Ye=_t.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,_t.prototype.openOn.call(this,t)},onAdd:function(t){_t.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Et||this._source.on("preclick",Bt))},onRemove:function(t){_t.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Et||this._source.off("preclick",Bt))},getEvents:function(){var t=_t.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=Z("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=Z("div",t+"-content-wrapper",e);if(this._contentNode=Z("div",t+"-content",i),fe(e),Ni(this._contentNode),k(e,"contextmenu",Bt),this._tipContainer=Z("div",t+"-tip-container",e),this._tip=Z("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=Z("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',k(n,"click",function(o){K(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",E(t,s)):F(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();W(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(he(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new S(this._containerLeft,-i-this._containerBottom);o._add(It(this._container));var s=t.layerPointToContainerPoint(o),u=P(this.options.autoPanPadding),f=P(this.options.autoPanPaddingTopLeft||u),_=P(this.options.autoPanPaddingBottomRight||u),m=t.getSize(),v=0,w=0;s.x+n+_.x>m.x&&(v=s.x+n-m.x+_.x),s.x-v-f.x<0&&(v=s.x-f.x),s.y+i+_.y>m.y&&(w=s.y+i-m.y+_.y),s.y-w-f.y<0&&(w=s.y-f.y),(v||w)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([v,w]))}},_getAnchor:function(){return P(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Rs=function(t,e){return new Ye(t,e)};B.mergeOptions({closePopupOnClick:!0}),B.include({openPopup:function(t,e,i){return this._initOverlay(Ye,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),ct.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Ye,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof bt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Zt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof Et)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Je=_t.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){_t.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){_t.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=_t.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Z("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+p(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,s=n.latLngToContainerPoint(n.getCenter()),u=n.layerPointToContainerPoint(t),f=this.options.direction,_=o.offsetWidth,m=o.offsetHeight,v=P(this.options.offset),w=this._getAnchor();f==="top"?(e=_/2,i=m):f==="bottom"?(e=_/2,i=0):f==="center"?(e=_/2,i=m/2):f==="right"?(e=0,i=m/2):f==="left"?(e=_,i=m/2):u.x<s.x?(f="right",e=0,i=m/2):(f="left",e=_+(v.x+w.x)*2,i=m/2),t=t.subtract(P(e,i,!0)).add(v).add(w),F(o,"leaflet-tooltip-right"),F(o,"leaflet-tooltip-left"),F(o,"leaflet-tooltip-top"),F(o,"leaflet-tooltip-bottom"),E(o,"leaflet-tooltip-"+f),W(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&ot(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return P(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ns=function(t,e){return new Je(t,e)};B.include({openTooltip:function(t,e,i){return this._initOverlay(Je,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),ct.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Je,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof bt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(k(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),k(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var yo=Gt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?($e(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=P(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Ds(t){return new yo(t)}Gt.Default=me;var ge=ct.extend({options:{tileSize:256,opacity:1,updateWhenIdle:x.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){A(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),D(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Vt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=y(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof S?t:new S(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,o=e.length,s;n<o;n++)s=e[n].style.zIndex,e[n]!==this._container&&s&&(i=t(i,+s));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!x.ielt9){ot(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(!(!o.current||!o.loaded)){var s=Math.min(1,(t-o.loaded)/200);ot(o.el,s),s<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(nt(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this))}},_onOpaqueTile:b,_initContainer:function(){this._container||(this._container=Z("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(D(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=Z("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),b(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:b,_onRemoveLevel:b,_onCreateLevel:b,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)D(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),s=Math.floor(e/2),u=i-1,f=new S(+o,+s);f.z=+u;var _=this._tileCoordsToKey(f),m=this._tiles[_];return m&&m.active?(m.retain=!0,!0):(m&&m.loaded&&(m.retain=!0),u>n?this._retainParent(o,s,u,n):!1)},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*e;s<2*e+2;s++){var u=new S(o,s);u.z=i+1;var f=this._tileCoordsToKey(u),_=this._tiles[f];if(_&&_.active){_.retain=!0;continue}else _&&_.loaded&&(_.retain=!0);i+1<n&&this._retainChildren(o,s,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var s=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||s)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();x.any3d?Ot(t.el,o,n):W(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),s=e.getSize().divideBy(n*2);return new N(o.subtract(s),o.add(s))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),u=[],f=this.options.keepBuffer,_=new N(o.getBottomLeft().subtract([f,-f]),o.getTopRight().add([f,-f]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var m in this._tiles){var v=this._tiles[m].coords;(v.z!==this._tileZoom||!_.contains(new S(v.x,v.y)))&&(this._tiles[m].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var w=o.min.y;w<=o.max.y;w++)for(var C=o.min.x;C<=o.max.x;C++){var Y=new S(C,w);if(Y.z=this._tileZoom,!!this._isValidTile(Y)){var V=this._tiles[this._tileCoordsToKey(Y)];V?V.current=!0:u.push(Y)}}if(u.sort(function(tt,Qt){return tt.distanceTo(s)-Qt.distanceTo(s)}),u.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var st=document.createDocumentFragment();for(C=0;C<u.length;C++)this._addTile(u[C],st);this._level.el.appendChild(st)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return U(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i),s=e.unproject(n,t.z),u=e.unproject(o,t.z);return[s,u]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new Q(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new S(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(D(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){E(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=b,t.onmousemove=b,x.ielt9&&this.options.opacity<1&&ot(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),h(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&J(h(this._tileReady,this,t,null,o)),W(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(ot(i.el,0),nt(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(E(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),x.ielt9||!this._map._fadeAnimated?J(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new S(this._wrapX?g(t.x,this._wrapX):t.x,this._wrapY?g(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new N(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Hs(t){return new ge(t)}var Xt=ge.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=A(this,e),e.detectRetina&&x.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return k(i,"load",h(this._tileOnLoad,this,e,i)),k(i,"error",h(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:x.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return bn(this._url,r(e,this.options))},_tileOnLoad:function(t,e){x.ielt9?setTimeout(h(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=b,e.onerror=b,!e.complete)){e.src=Ie;var i=this._tiles[t].coords;D(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Ie),ge.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Ie))return ge.prototype._tileReady.call(this,t,e,i)}});function bo(t,e){return new Xt(t,e)}var xo=Xt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=r({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=A(this,e);var o=e.detectRetina&&x.retina?2:1,s=this.getTileSize();i.width=s.x*o,i.height=s.y*o,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Xt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=X(i.project(e[0]),i.project(e[1])),o=n.min,s=n.max,u=(this._wmsVersion>=1.3&&this._crs===fo?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),f=Xt.prototype.getTileUrl.call(this,t);return f+it(this.wmsParams,f,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+u},setParams:function(t,e){return r(this.wmsParams,t),e||this.redraw(),this}});function Fs(t,e){return new xo(t,e)}Xt.WMS=xo,bo.wms=Fs;var Lt=ct.extend({options:{padding:.1},initialize:function(t){A(this,t),p(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),E(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),s=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));x.any3d?Ot(this._container,s,i):W(this._container,s)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new N(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),wo=Lt.extend({options:{tolerance:0},getEvents:function(){var t=Lt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Lt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");k(t,"mousemove",this._onMouseMove,this),k(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),k(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){nt(this._redrawRequest),delete this._ctx,D(this._container),R(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Lt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=x.retina?2:1;W(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",x.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Lt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[p(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[p(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,o;for(o=0;o<e.length;o++){if(n=Number(e[o]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||J(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new N,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,u=t._parts,f=u.length,_=this._ctx;if(f){for(_.beginPath(),i=0;i<f;i++){for(n=0,o=u[i].length;n<o;n++)s=u[i][n],_[n?"lineTo":"moveTo"](s.x,s.y);e&&_.closePath()}this._fillStroke(_,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;o!==1&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,Math.PI*2,!1),o!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(F(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(E(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function Lo(t){return x.canvas?new wo(t):null}var ve=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Us={_initContainer:function(){this._container=Z("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Lt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=ve("shape");E(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=ve("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[p(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;D(e),t.removeInteractiveTarget(e),delete this._layers[p(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=ve("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=lt(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=ve("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){qt(t._container)},_bringToBack:function(t){Vt(t._container)}},Xe=x.vml?ve:Sn,ye=Lt.extend({_initContainer:function(){this._container=Xe("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Xe("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){D(this._container),R(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Lt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),W(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=Xe("path");t.options.className&&E(e,t.options.className),t.options.interactive&&E(e,"leaflet-interactive"),this._updateStyle(t),this._layers[p(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){D(t._path),t.removeInteractiveTarget(t._path),delete this._layers[p(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,kn(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+i*2+",0 "+o+-i*2+",0 ";this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){qt(t._path)},_bringToBack:function(t){Vt(t._path)}});x.vml&&ye.include(Us);function Po(t){return x.svg||x.vml?new ye(t):null}B.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&Lo(t)||Po(t)}});var To=Yt.extend({initialize:function(t,e){Yt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=U(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Ws(t,e){return new To(t,e)}ye.create=Xe,ye.pointsToPath=kn,wt.geometryToLayer=je,wt.coordsToLatLng=Ki,wt.coordsToLatLngs=qe,wt.latLngToCoords=Gi,wt.latLngsToCoords=Ve,wt.getFeature=Jt,wt.asFeature=Ke,B.mergeOptions({boxZoom:!0});var So=pt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){k(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){R(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){D(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ce(),zi(),this._startPoint=this._map.mouseEventToContainerPoint(t),k(document,{contextmenu:Zt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=Z("div","leaflet-zoom-box",this._container),E(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new N(this._point,this._startPoint),i=e.getSize();W(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(D(this._box),F(this._container,"leaflet-crosshair")),ue(),Ai(),R(document,{contextmenu:Zt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var e=new Q(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});B.addInitHook("addHandler","boxZoom",So),B.mergeOptions({doubleClickZoom:!0});var ko=pt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});B.addInitHook("addHandler","doubleClickZoom",ko),B.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Eo=pt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new kt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}E(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){F(this._map._container,"leaflet-grab"),F(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=U(this._map.options.maxBounds);this._offsetLimit=X(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,u=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=u},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,u=i.easeLinearity,f=o.multiplyBy(u/s),_=f.distanceTo([0,0]),m=Math.min(i.inertiaMaxSpeed,_),v=f.multiplyBy(m/_),w=m/(i.inertiaDeceleration*u),C=v.multiplyBy(-w/2).round();!C.x&&!C.y?e.fire("moveend"):(C=e._limitOffset(C,e.options.maxBounds),J(function(){e.panBy(C,{duration:w,easeLinearity:u,noMoveStart:!0,animate:!0})}))}}});B.addInitHook("addHandler","dragging",Eo),B.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Co=pt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),k(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),R(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){k(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){R(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=P(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(P(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Zt(t)}}});B.addInitHook("addHandler","keyboard",Co),B.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Mo=pt.extend({addHooks:function(){k(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){R(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Qn(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),n),Zt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=i?Math.ceil(o/i)*i:o,u=t._limitZoom(e+(this._delta>0?s:-s))-e;this._delta=0,this._startTime=null,u&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+u):t.setZoomAround(this._lastMousePos,e+u))}});B.addInitHook("addHandler","scrollWheelZoom",Mo);var js=600;B.mergeOptions({tapHold:x.touchNative&&x.safari&&x.mobile,tapTolerance:15});var zo=pt.extend({addHooks:function(){k(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){R(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new S(e.clientX,e.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(k(document,"touchend",K),k(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),js),k(document,"touchend touchcancel contextmenu",this._cancel,this),k(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){R(document,"touchend",K),R(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),R(document,"touchend touchcancel contextmenu",this._cancel,this),R(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new S(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});B.addInitHook("addHandler","tapHold",zo),B.mergeOptions({touchZoom:x.touch,bounceAtZoomLimits:!0});var Ao=pt.extend({addHooks:function(){E(this._map._container,"leaflet-touch-zoom"),k(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){F(this._map._container,"leaflet-touch-zoom"),R(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),k(document,"touchmove",this._onTouchMove,this),k(document,"touchend touchcancel",this._onTouchEnd,this),K(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,o===1)return}else{var s=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(o===1&&s.x===0&&s.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),nt(this._animRequest);var u=h(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=J(u,this,!0),K(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,nt(this._animRequest),R(document,"touchmove",this._onTouchMove,this),R(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});B.addInitHook("addHandler","touchZoom",Ao),B.BoxZoom=So,B.DoubleClickZoom=ko,B.Drag=Eo,B.Keyboard=Co,B.ScrollWheelZoom=Mo,B.TapHold=zo,B.TouchZoom=Ao,c.Bounds=N,c.Browser=x,c.CRS=yt,c.Canvas=wo,c.Circle=Vi,c.CircleMarker=We,c.Class=vt,c.Control=ht,c.DivIcon=yo,c.DivOverlay=_t,c.DomEvent=hs,c.DomUtil=as,c.Draggable=kt,c.Evented=re,c.FeatureGroup=bt,c.GeoJSON=wt,c.GridLayer=ge,c.Handler=pt,c.Icon=Gt,c.ImageOverlay=Ge,c.LatLng=$,c.LatLngBounds=Q,c.Layer=ct,c.LayerGroup=Kt,c.LineUtil=ws,c.Map=B,c.Marker=Ue,c.Mixin=ms,c.Path=Et,c.Point=S,c.PolyUtil=gs,c.Polygon=Yt,c.Polyline=xt,c.Popup=Ye,c.PosAnimation=to,c.Projection=Ls,c.Rectangle=To,c.Renderer=Lt,c.SVG=ye,c.SVGOverlay=vo,c.TileLayer=Xt,c.Tooltip=Je,c.Transformation=yi,c.Util=Cr,c.VideoOverlay=go,c.bind=h,c.bounds=X,c.canvas=Lo,c.circle=zs,c.circleMarker=Ms,c.control=pe,c.divIcon=Ds,c.extend=r,c.featureGroup=ks,c.geoJSON=mo,c.geoJson=Is,c.gridLayer=Hs,c.icon=Es,c.imageOverlay=Bs,c.latLng=I,c.latLngBounds=U,c.layerGroup=Ss,c.map=cs,c.marker=Cs,c.point=P,c.polygon=Os,c.polyline=As,c.popup=Rs,c.rectangle=Ws,c.setOptions=A,c.stamp=p,c.svg=Po,c.svgOverlay=$s,c.tileLayer=bo,c.tooltip=Ns,c.transformation=se,c.version=a,c.videoOverlay=Zs;var qs=window.L;c.noConflict=function(){return window.L=qs,this},window.L=c}))});function Ta(c){return mr[c%mr.length]}function ze(c,a,r){let l=c?.entity_colors?.[a];return typeof l=="string"&&l.trim()?l:Ta(r)}function zt(c){return c.map(a=>typeof a=="string"?{entity:a}:a).filter(a=>typeof a?.entity=="string"&&a.entity.length>0)}function Ut(c){if(!c)return null;let a=Number(c.attributes?.latitude),r=Number(c.attributes?.longitude);return!Number.isFinite(a)||!Number.isFinite(r)?null:{lat:a,lon:r}}function pn(c){return Object.values(c.states).filter(a=>Sa.has(a.entity_id.split(".")[0])&&Ut(a)).map(a=>a.entity_id).sort()}function vr(c,a){return c.name?c.name:a?.attributes?.friendly_name??c.entity}function yr(c,a){return a==="dark"?!0:a==="light"?!1:!!c.themes?.darkMode}var Me,gr,mr,Sa,_n=q(()=>{"use strict";Me=["basic","outdoor","winter","aerial"],gr={basic:"Basic",outdoor:"Outdoor",winter:"Winter",aerial:"Aerial"},mr=["#e53935","#d81b60","#8e24aa","#5e35b1","#3949ab","#1e88e5","#039be5","#00acc1","#00897b","#43a047","#7cb342","#c0ca33","#fdd835","#ffb300","#fb8c00","#f4511e","#6d4c41","#546e7a"];Sa=new Set(["person","device_tracker","geo_location"])});function ui(){return typeof indexedDB<"u"}function di(){return ci||(ci=new Promise((c,a)=>{let r=indexedDB.open(ka,Ea);r.onupgradeneeded=()=>{let l=r.result;l.objectStoreNames.contains(at)||l.createObjectStore(at,{keyPath:"url"}).createIndex("lastAccessed","lastAccessed")},r.onsuccess=()=>c(r.result),r.onerror=()=>a(r.error??new Error("indexedDB open failed"))}),ci)}function Ma(c,a){return new Promise((r,l)=>{let d=c.transaction(at,"readonly").objectStore(at).get(a);d.onsuccess=()=>r(d.result),d.onerror=()=>l(d.error??new Error("indexedDB get failed"))})}function za(c,a){return new Promise((r,l)=>{let h=c.transaction(at,"readwrite");h.objectStore(at).put(a),h.oncomplete=()=>r(),h.onerror=()=>l(h.error??new Error("indexedDB put failed"))})}function br(c){return new Promise((a,r)=>{let h=c.transaction(at,"readonly").objectStore(at).getAll();h.onsuccess=()=>a(h.result),h.onerror=()=>r(h.error??new Error("indexedDB getAll failed"))})}function Aa(c,a){return new Promise((r,l)=>{let h=c.transaction(at,"readwrite"),d=h.objectStore(at);for(let p of a)d.delete(p);h.oncomplete=()=>r(),h.onerror=()=>l(h.error??new Error("indexedDB delete failed"))})}function Oa(c){return new Promise((a,r)=>{let l=c.transaction(at,"readwrite");l.objectStore(at).clear(),l.oncomplete=()=>a(),l.onerror=()=>r(l.error??new Error("indexedDB clear failed"))})}function xr(){if(oe)return oe;try{let c=window.localStorage.getItem(gn);oe=c?JSON.parse(c):{hits:0,misses:0}}catch{oe={hits:0,misses:0}}return oe}function Ia(c){let a=xr();c?a.hits++:a.misses++;try{window.localStorage.setItem(gn,JSON.stringify(a))}catch{}}function wr(c){Ae=Math.max(0,Number(c)||0)*1024*1024}function Ba(){return Ae>0&&ui()}async function Lr(){let c=xr();if(!ui())return{tileCount:0,sizeMb:0,hits:c.hits,misses:c.misses};try{let a=await br(await di()),r=a.reduce((l,h)=>l+h.size,0);return{tileCount:a.length,sizeMb:Math.round(r/(1024*1024)*10)/10,hits:c.hits,misses:c.misses}}catch{return{tileCount:0,sizeMb:0,hits:c.hits,misses:c.misses}}}async function Pr(){oe={hits:0,misses:0};try{window.localStorage.removeItem(gn)}catch{}if(ui())try{await Oa(await di())}catch{}}function Za(){mn||(mn=setTimeout(()=>{mn=void 0,$a().catch(()=>{})},Ca))}async function $a(){if(Ae<=0||!ui())return;let c=await di(),a=await br(c),r=a.reduce((h,d)=>h+d.size,0);if(r<=Ae)return;a.sort((h,d)=>h.lastAccessed-d.lastAccessed);let l=[];for(let h of a){if(r<=Ae)break;l.push(h.url),r-=h.size}l.length&&await Aa(c,l)}async function Ra(c){if(!Ba())throw new Error("tile cache disabled");let a=await di(),r=await Ma(a,c),l=!!r,h;if(r)h=r.blob;else{let d=await fetch(c);if(!d.ok)throw new Error(`tile fetch failed: ${d.status}`);h=await d.blob()}return await za(a,{url:c,blob:h,size:h.size,lastAccessed:Date.now()}),Ia(l),Za(),URL.createObjectURL(h)}var gt,ka,Ea,at,gn,Ca,Ae,oe,ci,mn,Oe,vn=q(()=>{"use strict";gt=$o(dn(),1),ka="mapy-map-card-tiles",Ea=1,at="tiles",gn="mapy-map-card:tile-cache-stats",Ca=3e3,Ae=50*1024*1024;Oe=class extends gt.TileLayer{createTile(a,r){let l=document.createElement("img");l.alt="",l.setAttribute("role","presentation"),gt.DomEvent.on(l,"load",gt.Util.bind(this._tileOnLoad,this,r,l)),gt.DomEvent.on(l,"error",gt.Util.bind(this._tileOnError,this,r,l));let h=()=>{l.src.startsWith("blob:")&&URL.revokeObjectURL(l.src)};gt.DomEvent.on(l,"load",h),gt.DomEvent.on(l,"error",h);let d=this.getTileUrl(a);return Ra(d).then(p=>{l.src=p}).catch(()=>{l.src=d}),l}}});var Sr={};sa(Sr,{MapyMapCardEditor:()=>Tt,loadEntityPicker:()=>Tr});function Tr(){return customElements.get("ha-entity-picker")?Promise.resolve(!0):fi||(fi=(async()=>{try{if(typeof window.loadCardHelpers!="function")return!1;let c=await window.loadCardHelpers();if(typeof c?.createCardElementEditor!="function")return!1;let a=c.createCardElementEditor({type:"entities",entities:[]});a.style.display="none",document.body.appendChild(a);let r=Date.now();for(;!customElements.get("ha-entity-picker")&&Date.now()-r<5e3;)await new Promise(l=>setTimeout(l,100));return a.remove(),!!customElements.get("ha-entity-picker")}catch{return!1}})(),fi)}var fi,Na,Tt,yn=q(()=>{"use strict";hn();un();_n();vn();fi=null,Na="mapy-map-card";Tt=class extends mt{constructor(){super(...arguments);this._config={type:Na};this._pickerReady=!1;this._cacheStats={tileCount:0,sizeMb:0,hits:0,misses:0}}setConfig(r){this._config={...r}}connectedCallback(){super.connectedCallback(),Tr().then(r=>{this._pickerReady=r}),this._refreshCacheStats()}async _refreshCacheStats(){this._cacheStats=await Lr()}async _clearTileCache(){await Pr(),await this._refreshCacheStats()}render(){let r=this._config;return G`
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
        .cache-stats {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }
        button.btn {
          border: 1px solid var(--divider-color, #ccc);
          border-radius: 4px;
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #000);
          font: inherit;
          font-size: 12px;
          cursor: pointer;
          padding: 4px 10px;
        }
      </style>
      <div class="grid">
        <label class="full">
          Title
          <input
            type="text"
            .value=${r.title??""}
            @input=${l=>this._patch({title:l.target.value||void 0})}
          />
        </label>

        <label class="full">
          Mapy.com API key
          <input
            type="password"
            placeholder="from developer.mapy.com"
            .value=${r.api_key??""}
            @input=${l=>this._patch({api_key:l.target.value})}
          />
        </label>

        <label>
          Tile style
          <select
            @change=${l=>this._patch({tile_style:l.target.value})}
          >
            ${Me.map(l=>G`<option value=${l} ?selected=${(r.tile_style??"basic")===l}>${l}</option>`)}
          </select>
        </label>

        <label>
          Theme mode
          <select
            @change=${l=>this._patch({theme_mode:l.target.value})}
          >
            ${["auto","light","dark"].map(l=>G`<option value=${l} ?selected=${(r.theme_mode??"auto")===l}>${l}</option>`)}
          </select>
        </label>

        <label>
          Hours to show (0 = off)
          <input
            type="number"
            min="0"
            max="168"
            .value=${String(r.hours_to_show??24)}
            @input=${l=>this._patch({hours_to_show:Number(l.target.value)})}
          />
        </label>

        <label>
          Aspect ratio (e.g. 1:1) or height
          <input
            type="text"
            placeholder="1:1"
            .value=${r.aspect_ratio??""}
            @input=${l=>this._patch({aspect_ratio:l.target.value||void 0})}
          />
        </label>

        <label>
          Language (optional, e.g. cs / en / de)
          <input
            type="text"
            placeholder="auto"
            .value=${r.language??""}
            @input=${l=>this._patch({language:l.target.value||void 0})}
          />
        </label>

        <label>
          Default zoom (single point / max zoom on fit)
          <input
            type="number"
            min="1"
            max="21"
            .value=${r.default_zoom!=null?String(r.default_zoom):""}
            @input=${l=>{let h=l.target.value;this._patch({default_zoom:h===""?void 0:Number(h)})}}
          />
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${r.show_zones!==!1}
            @change=${l=>this._patch({show_zones:l.target.checked})}
          />
          Show zones
        </label>

        <label class="check">
          <input
            type="checkbox"
            ?checked=${r.fit_bounds!==!1}
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
            .value=${String(r.history_line_width??4)}
            @input=${l=>this._patch({history_line_width:Number(l.target.value)})}
          />
        </label>

        <label>
          Line color (empty = entity color)
          <input
            type="text"
            placeholder="#ff9800"
            .value=${r.history_line_color??""}
            @input=${l=>this._patch({history_line_color:l.target.value.trim()||void 0})}
          />
        </label>

        <label>
          Point style
          <select
            @change=${l=>this._patch({history_point_type:l.target.value})}
          >
            ${["dot","ring","square","none"].map(l=>G`<option value=${l} ?selected=${(r.history_point_type??"dot")===l}>${l}</option>`)}
          </select>
        </label>

        <label>
          Point color (empty = entity color)
          <input
            type="text"
            placeholder="#ff9800"
            .value=${r.history_point_color??""}
            @input=${l=>this._patch({history_point_color:l.target.value.trim()||void 0})}
          />
        </label>

        <div class="section">Tile cache</div>

        <label>
          Cache size limit (MB, 0 = off)
          <input
            type="number"
            min="0"
            max="500"
            .value=${String(r.tile_cache_mb??50)}
            @input=${l=>this._patch({tile_cache_mb:Number(l.target.value)})}
          />
        </label>

        <div class="hint full cache-stats">
          Cached: ${this._cacheStats.tileCount} tiles (~${this._cacheStats.sizeMb} MB) · Hits:
          ${this._cacheStats.hits} · Misses: ${this._cacheStats.misses}
          <button class="btn" type="button" @click=${()=>this._refreshCacheStats()}>Refresh</button>
          <button class="btn" type="button" @click=${()=>this._clearTileCache()}>Clear cache</button>
        </div>

        <div class="section">Entity colors</div>
        ${this._renderEntityColors()}

        ${this._pickerReady?this._renderEntityPickers():this._renderEntityTextarea()}

        <div class="hint">
          Free API key: <a href="https://developer.mapy.com/" target="_blank" rel="noreferrer">developer.mapy.com</a>
          – create a project, enable "Map Tiles" REST API and copy the key.
        </div>
      </div>
    `}_renderEntityPickers(){let r=zt(this._config.entities??[]);return G`
      ${r.length?r.map((l,h)=>G`
              <div class="entity-row">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${l.entity}
                  .allowCustomEntity=${!0}
                  @value-changed=${d=>this._setEntity(h,String(d.detail.value??""))}
                ></ha-entity-picker>
                <button
                  class="remove"
                  title="Remove"
                  @click=${()=>this._setEntities(r.filter((d,p)=>p!==h))}
                >
                  ✕
                </button>
              </div>
            `):H}
      <div class="entity-row">
        <ha-entity-picker
          .hass=${this.hass}
          .allowCustomEntity=${!0}
          @value-changed=${l=>{let h=String(l.detail.value??"");h&&!r.some(d=>d.entity===h)&&this._setEntities([...r,{entity:h}])}}
        ></ha-entity-picker>
      </div>
    `}_renderEntityTextarea(){let r=zt(this._config.entities??[]);return G`
      <label class="full">
        Entities (one per line, empty = auto-discover)
        <textarea
          .value=${r.map(l=>l.entity).join(`
`)}
          @change=${l=>{let h=l.target.value.split(`
`).map(d=>d.trim()).filter(Boolean);this._setEntities(h.map(d=>({entity:d})))}}
        ></textarea>
      </label>
    `}_renderEntityColors(){let r=zt(this._config.entities??[]);return r.length?G`
      ${r.map((l,h)=>G`
          <label>
            ${l.entity}
            <div class="entity-row" style="grid-column:auto">
              <input
                type="color"
                .value=${ze(this._config,l.entity,h)}
                @input=${d=>this._setEntityColor(l.entity,d.target.value)}
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
    `:G`<div class="hint">Add entities first to assign custom colors.</div>`}_setEntityColor(r,l){let h={...this._config.entity_colors??{}};l?h[r]=l:delete h[r],this._patch({entity_colors:Object.keys(h).length?h:void 0})}_patch(r){this._emit({...this._config,...r})}_setEntity(r,l){let h=zt(this._config.entities??[]);l&&(h[r]={...h[r],entity:l},this._setEntities(h))}_setEntities(r){this._emit({...this._config,entities:r})}_emit(r){this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}};ut([ie({attribute:!1})],Tt.prototype,"hass",2),ut([Ft()],Tt.prototype,"_config",2),ut([Ft()],Tt.prototype,"_pickerReady",2),ut([Ft()],Tt.prototype,"_cacheStats",2),Tt=ut([ai("mapy-map-card-editor")],Tt)});hn();un();var M=$o(dn(),1);var fr=`/* required styles */\r
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
`;var pr=`${fr}
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

/* --- unobtrusive top-right switch controls (tile style / history range) ---
   Custom controls (not Leaflet's built-in layers control): click the icon
   to open, click it again / pick an option / click elsewhere on the map to
   close. Reuses .leaflet-control-layers* for the box look, but the
   expand/collapse classes below are our own so the toggle never gets
   hidden mid-interaction the way Leaflet's default layers control does. */

.leaflet-control-layers-toggle,
.leaflet-retina .leaflet-control-layers-toggle {
  background-image: none !important;
}

.leaflet-control-layers-toggle::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: no-repeat center / 18px;
}

.mmc-switch-list {
  display: none;
}

.mmc-switch-expanded .mmc-switch-list {
  display: block;
  position: relative;
}

.mmc-switch-expanded {
  padding: 6px 10px 6px 6px;
  color: #333;
  background: #fff;
}

.mmc-switch-list label {
  display: block;
  font-size: 12px;
  margin: 3px 0;
  white-space: nowrap;
}

.mmc-dark .leaflet-control-layers-toggle {
  background-color: rgba(30, 30, 30, 0.85);
}

.mmc-dark .mmc-switch-expanded {
  background: rgba(30, 30, 30, 0.92);
  color: #ddd;
}

.mmc-tilestyle-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><polygon points='12 2 21 7 12 12 3 7'/><polyline points='3 12 12 17 21 12'/><polyline points='3 17 12 22 21 17'/></svg>");
}

.mmc-dark .mmc-tilestyle-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ddd' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><polygon points='12 2 21 7 12 12 3 7'/><polyline points='3 12 12 17 21 12'/><polyline points='3 17 12 22 21 17'/></svg>");
}

.mmc-history-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><circle cx='12' cy='12' r='9'/><polyline points='12 7 12 12 16 14'/></svg>");
}

.mmc-dark .mmc-history-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ddd' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><circle cx='12' cy='12' r='9'/><polyline points='12 7 12 12 16 14'/></svg>");
}
`;async function _r(c,a,r,l){let h=new Date(Date.now()-r*3600*1e3).toISOString(),d=!1,p=await c.connection.subscribeMessage(y=>{!y||!y.states||typeof y.states!="object"||(d=!0,l(fn(y.states,a)))},{type:"history/stream",start_time:h,end_time:new Date().toISOString(),entity_ids:a},{resubscribe:!0});return setTimeout(()=>{d||p()},1e4),p}function fn(c,a){let r=[];for(let l of a&&a.length>0?a:Object.keys(c)){let h=c[l];if(Array.isArray(h))for(let d of h){if(!d||typeof d!="object")continue;let p=d.a??d.attributes??null,y=Number(p?.latitude),g=Number(p?.longitude),b=Pa(d.lu);r.push({entity_id:l,map_state:Number.isFinite(y)&&Number.isFinite(g)?[y,g]:null,ts:b})}}return r}function Pa(c){let a=Number(c);if(!(!Number.isFinite(a)||a<=0)){if(a>1e15)return a/1e3;if(a>1e12)return a;if(a>1e9)return a*1e3}}_n();vn();var Da={basic:19,outdoor:19,winter:19,aerial:19},kr='&copy; <a href="https://mapy.com/">Mapy.com</a> &copy; <a href="https://www.seznam.cz/">Seznam.cz, a.s.</a>',Er=.05,Ha=.75,Fa=[{label:"24 h",hours:24},{label:"12 h",hours:12},{label:"6 h",hours:6},{label:"2 h",hours:2},{label:"1 h",hours:1},{label:"Off",hours:0}],pi=class extends M.Control{constructor(r,l,h,d,p){super({position:"topright"});this.toggleClass=r;this.toggleTitle=l;this.choices=h;this.getSelected=d;this.onSelect=p;this._expanded=!1;this._onMapClick=()=>this._setExpanded(!1)}onAdd(r){let l=M.DomUtil.create("div","leaflet-control-layers");M.DomEvent.disableClickPropagation(l),M.DomEvent.disableScrollPropagation(l);let h=M.DomUtil.create("a",`leaflet-control-layers-toggle ${this.toggleClass}`,l);return h.href="#",h.title=this.toggleTitle,h.setAttribute("role","button"),M.DomEvent.on(h,"click",d=>{M.DomEvent.preventDefault(d),this._setExpanded(!this._expanded)}),this._list=M.DomUtil.create("section","mmc-switch-list",l),this._container=l,r.on("click",this._onMapClick),this._render(),l}onRemove(r){r.off("click",this._onMapClick)}update(){this._render()}_setExpanded(r){this._expanded=r,this._container?.classList.toggle("mmc-switch-expanded",r)}_render(){if(!this._list)return;this._list.textContent="";let r=this.getSelected();for(let l of this.choices){let h=M.DomUtil.create("label","",this._list),d=M.DomUtil.create("input","leaflet-control-layers-selector",h);d.type="radio",d.name=this.toggleClass,d.checked=r===l.value,M.DomEvent.on(d,"change",()=>{this.onSelect(l.value),this._setExpanded(!1)}),h.appendChild(document.createTextNode(" "+l.label))}}},Wt=class extends mt{constructor(){super(...arguments);this._tileSwitchKey="";this._markers=new Map;this._markerColors=new Map;this._history=new Map;this._historyStreamDataReceived=!1;this._historyKey="";this._zonesKey="";this._appliedFitKey="";this._onVisibilityChange=()=>{document.visibilityState==="visible"&&(this._map?.invalidateSize({pan:!1}),this._applyFit(),this._healthCheck())};this._onWindowResize=()=>{this._map?.invalidateSize({pan:!1})}}static async getConfigElement(){return await Promise.resolve().then(()=>(yn(),Sr)),document.createElement("mapy-map-card-editor")}static getStubConfig(r){return{type:"custom:mapy-map-card",entities:r?pn(r).slice(0,5):[],hours_to_show:24,show_zones:!0}}setConfig(r){if(!r||typeof r!="object")throw new Error("Invalid configuration");let l=!!r.api_key?.trim()||!!r.tile_url?.trim();this._error=l?void 0:"Missing Mapy.com API key \u2013 set api_key in the card editor (free at developer.mapy.com).",this._config={hours_to_show:24,show_zones:!0,fit_bounds:!0,theme_mode:"auto",tile_style:"basic",aspect_ratio:"1:1",...r},this._storageKey=this._prefsStorageKey(this._config);let h=this._loadPrefs(this._storageKey);this._tileStyleOverride=h?.tileStyle,this._hoursOverride=h?.hours,this._resetHistory(),this._map&&(this._updateTileLayer(),this._processHass())}connectedCallback(){super.connectedCallback(),this._config&&!this._error&&!this._map&&this.updateComplete.then(()=>{this.isConnected&&this._config&&!this._map&&!this._error&&(this._initMap(),this._processHass())})}disconnectedCallback(){this._resetHistory(),this._appliedFitKey="",this._pendingFit=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0,document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._onWindowResize),this._map?.remove(),this._map=void 0,this._tileLayer=void 0,this._tileUrl=void 0,this._tileStyleLayers=void 0,this._tileSwitchKey="",this._layersControl=void 0,this._historyControl=void 0,this._zonesKey="",this._markers.clear(),this._markerColors.clear(),super.disconnectedCallback()}render(){return this._config?G`
      <style>${pr}</style>
      <ha-card>
        ${this._config.title?G`<div class="mmc-header">${this._config.title}</div>`:H}
        ${this._error?G`<div class="mmc-error">${this._error}</div>`:G`
              <div class="mmc-map-wrapper" style=${this._aspectStyle()}>
                <div class="mmc-map" id="map"></div>
              </div>
            `}
      </ha-card>
    `:G``}firstUpdated(){this._error||(this._map||this._initMap(),this._processHass())}willUpdate(r){super.willUpdate(r),r.has("hass")&&this._processHass()}updated(){this._map?.invalidateSize()}_aspectStyle(){let r=this._config?.aspect_ratio?.trim();if(!r||r.toLowerCase()==="auto")return"";let l=/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/.exec(r);return l?`aspect-ratio:${l[1]}/${l[2]};`:`height:${r};`}_initMap(){let r=this.renderRoot.querySelector("#map");if(!r)return;this._map=M.map(r,{zoomControl:!0,attributionControl:!1,worldCopyJump:!0}),M.control.attribution({prefix:!1}).addTo(this._map),this._zoneLayer=M.layerGroup().addTo(this._map),this._historyLayer=M.layerGroup().addTo(this._map),this._markerLayer=M.layerGroup().addTo(this._map),this._resizeObserver=new ResizeObserver(()=>{this._map?.invalidateSize(),this._applyFit()}),this._resizeObserver.observe(r),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._onWindowResize);let l=this.hass?.config,h=typeof l?.latitude=="number"&&typeof l?.longitude=="number"?[l.latitude,l.longitude]:void 0;if(!h)for(let d of Object.values(this.hass?.states??{})){let p=Ut(d);if(p){h=[p.lat,p.lon];break}}this._map.setView(h??[49.8032,15.4811],this._config?.default_zoom??12,{animate:!1}),this._updateTileLayer(),this._historyControl=new pi("mmc-history-toggle","History range",Fa.map(d=>({label:d.label,value:d.hours})),()=>this._effectiveHours(),d=>this._setHoursOverride(d)).addTo(this._map);for(let d of[300,1e3,3e3,8e3])setTimeout(()=>this._healthCheck(),d)}_healthCheck(){if(!(!this._map||!this.isConnected))try{let r=this._map.getContainer();if(!r.clientWidth||!r.clientHeight)return;r.querySelectorAll("img.leaflet-tile").length===0&&(this._map.invalidateSize({pan:!1}),this._applyFit());let l=Array.from(this._markers.values()).some(d=>!!d.getIcon()),h=r.querySelectorAll(".leaflet-marker-pane .mmc-dot, .leaflet-marker-pane .mmc-picture-icon");l&&h.length<this._markers.size&&this._processHass()}catch{}}_tileStyleUrl(r,l,h){return`https://api.mapy.com/v1/maptiles/${r}/256/{z}/{x}/{y}?apikey=${encodeURIComponent(l)}`+(h?`&lang=${encodeURIComponent(h)}`:"")}_teardownStyleSwitcher(){if(this._layersControl&&(this._map?.removeControl(this._layersControl),this._layersControl=void 0),this._tileStyleLayers){for(let r of Object.values(this._tileStyleLayers))r&&this._map?.hasLayer(r)&&this._map.removeLayer(r);this._tileStyleLayers=void 0}this._tileSwitchKey=""}_pickTileStyle(r){if(this._tileStyleOverride===r)return;this._tileStyleOverride=r,this._savePrefs({tileStyle:r}),this._layersControl?.update();let l=this._tileStyleLayers?.[r];l&&l!==this._tileLayer&&this._map&&(this._tileLayer&&this._map.removeLayer(this._tileLayer),l.addTo(this._map),this._tileLayer=l)}_prefsStorageKey(r){let l=zt(r.entities??[]).map(p=>p.entity).sort().join(","),h=`${r.title??""}|${l}`,d=0;for(let p=0;p<h.length;p++)d=d*31+h.charCodeAt(p)|0;return`mapy-map-card:${d}`}_loadPrefs(r){try{let l=window.localStorage.getItem(r);return l?JSON.parse(l):void 0}catch{return}}_savePrefs(r){if(this._storageKey)try{let l=this._loadPrefs(this._storageKey)??{};window.localStorage.setItem(this._storageKey,JSON.stringify({...l,...r}))}catch{}}_updateTileLayer(){if(!this._map||!this._config)return;let r=this._config,l=r.tile_url?.trim();if(wr(r.tile_cache_mb??50),l){if(this._teardownStyleSwitcher(),l===this._tileUrl)return;this._tileUrl=l,this._tileLayer&&this._map.removeLayer(this._tileLayer),this._tileLayer=new Oe(l,{attribution:r.tile_attribution??kr,maxZoom:21,maxNativeZoom:19}),this._tileLayer.addTo(this._map);return}let h=r.api_key?.trim();if(!h)return;let d=r.language?.trim()??"",p=`${h}|${d}|${r.tile_attribution??""}`,y=r.tile_style??"basic";if(p!==this._tileSwitchKey){this._teardownStyleSwitcher(),this._tileSwitchKey=p;let z={};for(let T of Me)z[T]=new Oe(this._tileStyleUrl(T,h,d),{attribution:r.tile_attribution??kr,maxZoom:21,maxNativeZoom:Da[T]??19});this._tileStyleLayers=z,this._tileLayer=void 0,this._layersControl=new pi("mmc-tilestyle-toggle","Tile style",Me.map(T=>({label:gr[T],value:T})),()=>this._tileStyleOverride??this._config?.tile_style??"basic",T=>this._pickTileStyle(T)).addTo(this._map)}let g=this._tileStyleOverride??y,b=this._tileStyleLayers?.[g];b&&b!==this._tileLayer&&(this._tileLayer&&this._map.removeLayer(this._tileLayer),b.addTo(this._map),this._tileLayer=b),this._layersControl?.update(),this._tileUrl=this._tileStyleUrl(g,h,d)}_processHass(){!this._map||!this.hass||!this._config||this._error||(this._updateDarkMode(),this._updateZones(),this._updateMarkers(),this._updateHistorySubscription(),this._maybeFitBounds())}_resolvedEntities(){let r=this.hass;return(this._config.entities?.length?zt(this._config.entities):pn(r).map(h=>({entity:h}))).filter(h=>!!r.states[h.entity])}_updateDarkMode(){let r=yr(this.hass,this._config.theme_mode);this._map.getContainer().classList.toggle("mmc-dark",r)}_updateMarkers(){let r=this._markerLayer,l=new Set;this._resolvedEntities().forEach((h,d)=>{let p=this.hass.states[h.entity],y=Ut(p);if(!y)return;l.add(h.entity);let g=ze(this._config,h.entity,d),b=this._markers.get(h.entity);b?(b.setLatLng([y.lat,y.lon]),this._markerColors.get(h.entity)!==g&&(this._markerColors.set(h.entity,g),b.setIcon(this._buildIcon(h,p,g)))):(b=M.marker([y.lat,y.lon],{icon:this._buildIcon(h,p,g),keyboard:!1}),b.on("click",()=>this._openMoreInfo(h.entity)),b.bindTooltip(vr(h,p),{permanent:!0,direction:"right",offset:[12,0],className:"mmc-label"}),b.addTo(r),this._markers.set(h.entity,b),this._markerColors.set(h.entity,g))});for(let[h,d]of this._markers)l.has(h)||(r.removeLayer(d),d.remove(),this._markers.delete(h),this._markerColors.delete(h))}_buildIcon(r,l,h){let d=r.picture||l.attributes?.entity_picture;return d&&typeof d=="string"?M.divIcon({className:"mmc-icon-wrapper",html:`<img class="mmc-picture-icon" src="${encodeURI(d)}" alt="">`,iconSize:[40,40],iconAnchor:[20,20]}):M.divIcon({className:"mmc-icon-wrapper",html:`<span class="mmc-dot" style="background:${h}"></span>`,iconSize:[16,16],iconAnchor:[8,8]})}_openMoreInfo(r){let l=new Event("hass-more-info",{bubbles:!0,composed:!0});l.detail={entityId:r},this.dispatchEvent(l)}_updateZones(){let r=Object.values(this.hass.states).filter(p=>p.entity_id.startsWith("zone.")&&Ut(p)),l=JSON.stringify(r.map(p=>[p.entity_id,p.state,p.attributes]));if(l===this._zonesKey)return;this._zonesKey=l;let h=this._zoneLayer;if(h.clearLayers(),this._config.show_zones===!1)return;let d=getComputedStyle(this).getPropertyValue("--accent-color").trim()||"#ff9800";for(let p of r){let y=Ut(p),g=Math.max(0,Number(p.attributes.radius??100)),z=!!p.attributes.passive?"#9e9e9e":d,T=String(p.attributes.friendly_name??p.entity_id);M.circle([y.lat,y.lon],{radius:g,color:z,weight:1,fillColor:z,fillOpacity:.1}).bindTooltip(T,{permanent:!0,direction:"center",className:"mmc-label"}).addTo(h)}}_resetHistory(){this._teardownHistory(),this._historyFallbackTimer!==void 0&&(clearTimeout(this._historyFallbackTimer),this._historyFallbackTimer=void 0),this._historyStreamDataReceived=!1,this._history=new Map,this._historyKey="",this._historyLayer?.clearLayers()}_teardownHistory(){this._unsubHistory&&(this._unsubHistory.then(r=>r()).catch(()=>{}),this._unsubHistory=void 0)}_effectiveHours(){return this._hoursOverride??Number(this._config?.hours_to_show??24)}_setHoursOverride(r){this._hoursOverride!==r&&(this._hoursOverride=r,this._savePrefs({hours:r}),this._historyControl?.update(),this._map&&this._updateHistorySubscription())}_updateHistorySubscription(){let r=this._effectiveHours();this._historyControl?.update();let l=this._resolvedEntities().map(d=>d.entity).sort();if(!(r>0)||l.length===0){this._historyKey&&this._resetHistory();return}let h=`${r}|${l.join(",")}`;h!==this._historyKey&&(this._resetHistory(),this._historyKey=h,this._unsubHistory=_r(this.hass,l,r,d=>{this._onHistoryLocations(d),this._historyStreamDataReceived=!0}).catch(()=>(this._unsubHistory=void 0,this._fetchHistoryFallback(l,r),()=>{})),this._historyFallbackTimer||(this._historyFallbackTimer=setTimeout(()=>{this._historyFallbackTimer=void 0,!this._historyStreamDataReceived&&this.isConnected&&this._fetchHistoryFallback(l,r)},8e3)))}_fetchHistoryFallback(r,l){try{let h=this.hass?.connection;if(!h)return;let d=new Date(Date.now()-l*3600*1e3).toISOString();h.sendMessagePromise({type:"history/history_during_period",start_time:d,end_time:new Date().toISOString(),entity_ids:r,minimal_response:!0,significant_changes_only:!0}).then(p=>{let y=fn(p,r);y.length>0&&(this._onHistoryLocations(y),this._historyStreamDataReceived=!0)}).catch(()=>{})}catch{}}_onHistoryLocations(r){for(let l of r){if(!l.map_state||l.map_state.length<2)continue;let[h,d]=l.map_state;if(!Number.isFinite(h)||!Number.isFinite(d))continue;let p=this._history.get(l.entity_id)??[],y=p[p.length-1];(!y||y.lat!==h||y.lon!==d||l.ts!==void 0&&y.ts!==l.ts)&&(p.push({lat:h,lon:d,ts:l.ts}),p.length>3e3&&p.splice(0,p.length-3e3),this._history.set(l.entity_id,p))}this._renderHistory()}_fadeOpacity(r,l){let h=l>1?r/(l-1):1;return Er+(Ha-Er)*h}_renderHistory(){let r=this._historyLayer;r.clearLayers();let l=this._config,h=Math.max(1,Number(l.history_line_width??4)),d=l.history_point_type??"dot";this._resolvedEntities().forEach((p,y)=>{let g=this._history.get(p.entity);if(!g||g.length<2)return;let b=ze(l,p.entity,y),z=l.history_line_color?.trim()||b,T=l.history_point_color?.trim()||b;for(let O=1;O<g.length;O++)M.polyline([[g[O-1].lat,g[O-1].lon],[g[O].lat,g[O].lon]],{color:z,weight:h,opacity:this._fadeOpacity(O-1,g.length-1),interactive:!1}).addTo(r);d!=="none"&&g.forEach((O,A)=>{let it=this._fadeOpacity(A,g.length),At;d==="square"?At=M.marker([O.lat,O.lon],{icon:M.divIcon({className:"mmc-icon-wrapper",html:`<span class="mmc-trail-square" style="background:${T};opacity:${it}"></span>`,iconSize:[8,8],iconAnchor:[4,4]}),keyboard:!1}):d==="ring"?At=M.circleMarker([O.lat,O.lon],{radius:4,color:T,weight:2,fill:!1,opacity:it}):At=M.circleMarker([O.lat,O.lon],{radius:3.5,color:"#ffffff",weight:1,fillColor:T,fillOpacity:it,opacity:it}),O.ts!==void 0&&At.bindTooltip(this._formatTs(O.ts),{direction:"top",offset:d==="square"?[0,-6]:[0,-4],className:"mmc-trail-tip"}),At.addTo(r)})})}_formatTs(r){try{let l=this.hass?.locale?.language||(typeof navigator<"u"?navigator.language:"")||"en";return new Intl.DateTimeFormat(l,{dateStyle:"medium",timeStyle:"medium"}).format(new Date(r))}catch{return new Date(r).toLocaleString()}}_maybeFitBounds(){if(!this._config.fit_bounds)return;let r=[],l=[];if(this._markers.forEach((d,p)=>{let y=d.getLatLng();r.push([y.lat,y.lng]),l.push(p)}),Object.keys(this.hass.states).filter(d=>d.startsWith("zone.")&&this._config.show_zones!==!1).forEach(d=>{let p=Ut(this.hass.states[d]);p&&(r.push([p.lat,p.lon]),l.push(d))}),r.length===0)return;let h=l.sort().join(",");h===this._appliedFitKey||h===this._pendingFit?.key||(this._pendingFit={key:h,bounds:M.latLngBounds(r)},this._applyFit())}_applyFit(){if(!this._map||!this._pendingFit)return;let r=this._map.getContainer();if(!r.clientWidth||!r.clientHeight)return;let{key:l,bounds:h}=this._pendingFit;if(this._pendingFit=void 0,l===this._appliedFitKey)return;this._appliedFitKey=l;let d=this._config.default_zoom??19,p=h.getCenter(),y=h.getNorthEast(),g=h.getSouthWest();y.distanceTo(g)<50?this._map.setView(p,d):this._map.fitBounds(h,{padding:[48,48],maxZoom:d})}};ut([ie({attribute:!1})],Wt.prototype,"hass",2),ut([Ft()],Wt.prototype,"_config",2),ut([Ft()],Wt.prototype,"_error",2),Wt=ut([ai("mapy-map-card")],Wt);yn();var Ua="mapy-map-card";window.customCards=window.customCards??[];window.customCards.push({type:Ua,name:"Mapy.com Map Card",description:"Map card powered by Mapy.com tiles \u2013 entities, history trails, zones. Replacement for the built-in map card.",preview:!0});console.info("%c MAPY-MAP-CARD %c v0.4.1 ","color: white; background: #c83737; font-weight: 700;","color: white; background: #333; font-weight: 700;",`
https://github.com/jpribil/mapy-map-card`);})();
