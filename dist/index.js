var tr=Object.defineProperty;var bl=Object.getOwnPropertyDescriptor;var vl=(i,e,t)=>e in i?tr(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var J=(i,e,t,s)=>{for(var r=s>1?void 0:s?bl(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&tr(e,t,r),r};var ir=(i,e,t)=>(vl(i,typeof e!="symbol"?e+"":e,t),t);var Ct=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xi=Symbol(),sr=new Map,be=class{constructor(e,t){if(this._$cssResult$=!0,t!==xi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=sr.get(this.cssText);return Ct&&e===void 0&&(sr.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},Ci=i=>new be(typeof i=="string"?i:i+"",xi),f=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new be(t,xi)},wi=(i,e)=>{Ct?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},wt=Ct?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return Ci(t)})(i):i;var Si,rr=window.trustedTypes,xl=rr?rr.emptyScript:"",or=window.reactiveElementPolyfillSupport,Ai={toAttribute(i,e){switch(e){case Boolean:i=i?xl:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},nr=(i,e)=>e!==i&&(e==e||i==i),Pi={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:nr},K=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,s)=>{let r=this._$Eh(s,t);r!==void 0&&(this._$Eu.set(r,s),e.push(r))}),e}static createProperty(e,t=Pi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){let o=this[e];this[t]=r,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(wt(r))}else e!==void 0&&t.push(wt(e));return t}static _$Eh(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return wi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ES(e,t,s=Pi){var r,o;let n=this.constructor._$Eh(e,s);if(n!==void 0&&s.reflect===!0){let l=((o=(r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:Ai.toAttribute)(t,s.type);this._$Ei=e,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Ei=null}}_$AK(e,t){var s,r,o;let n=this.constructor,l=n._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){let a=n.getPropertyOptions(l),h=a.converter,d=(o=(r=(s=h)===null||s===void 0?void 0:s.fromAttribute)!==null&&r!==void 0?r:typeof h=="function"?h:null)!==null&&o!==void 0?o:Ai.fromAttribute;this._$Ei=l,this[l]=d(t,a.type),this._$Ei=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||nr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((t,s)=>this._$ES(s,this[s],t)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}};K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},or==null||or({ReactiveElement:K}),((Si=globalThis.reactiveElementVersions)!==null&&Si!==void 0?Si:globalThis.reactiveElementVersions=[]).push("1.0.2");var Ei,ve=globalThis.trustedTypes,lr=ve?ve.createPolicy("lit-html",{createHTML:i=>i}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,ar="?"+X,Cl=`<${ar}>`,xe=document,je=(i="")=>xe.createComment(i),We=i=>i===null||typeof i!="object"&&typeof i!="function",hr=Array.isArray,wl=i=>{var e;return hr(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dr=/-->/g,cr=/>/g,ae=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ur=/'/g,pr=/"/g,mr=/^(?:script|style|textarea)$/i,fr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),H=fr(1),Wd=fr(2),he=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),_r=new WeakMap,gr=(i,e,t)=>{var s,r;let o=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e,n=o._$litPart$;if(n===void 0){let l=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new Ae(e.insertBefore(je(),l),l,void 0,t??{})}return n._$AI(i),n},Ce=xe.createTreeWalker(xe,129,null,!1),Sl=(i,e)=>{let t=i.length-1,s=[],r,o=e===2?"<svg>":"",n=Ye;for(let a=0;a<t;a++){let h=i[a],d,c,u=-1,m=0;for(;m<h.length&&(n.lastIndex=m,c=n.exec(h),c!==null);)m=n.lastIndex,n===Ye?c[1]==="!--"?n=dr:c[1]!==void 0?n=cr:c[2]!==void 0?(mr.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=ae):c[3]!==void 0&&(n=ae):n===ae?c[0]===">"?(n=r??Ye,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?ae:c[3]==='"'?pr:ur):n===pr||n===ur?n=ae:n===dr||n===cr?n=Ye:(n=ae,r=void 0);let g=n===ae&&i[a+1].startsWith("/>")?" ":"";o+=n===Ye?h+Cl:u>=0?(s.push(d),h.slice(0,u)+"$lit$"+h.slice(u)+X+g):h+X+(u===-2?(s.push(void 0),a):g)}let l=o+(i[t]||"<?>")+(e===2?"</svg>":"");return[lr!==void 0?lr.createHTML(l):l,s]},we=class{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0,l=e.length-1,a=this.parts,[h,d]=Sl(e,t);if(this.el=we.createElement(h,s),Ce.currentNode=this.el.content,t===2){let c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=Ce.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){let c=[];for(let u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(X)){let m=d[n++];if(c.push(u),m!==void 0){let g=r.getAttribute(m.toLowerCase()+"$lit$").split(X),x=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:x[2],strings:g,ctor:x[1]==="."?br:x[1]==="?"?vr:x[1]==="@"?xr:Ge})}else a.push({type:6,index:o})}for(let u of c)r.removeAttribute(u)}if(mr.test(r.tagName)){let c=r.textContent.split(X),u=c.length-1;if(u>0){r.textContent=ve?ve.emptyScript:"";for(let m=0;m<u;m++)r.append(c[m],je()),Ce.nextNode(),a.push({type:2,index:++o});r.append(c[u],je())}}}else if(r.nodeType===8)if(r.data===ar)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(X,c+1))!==-1;)a.push({type:7,index:o}),c+=X.length-1}o++}}static createElement(e,t){let s=xe.createElement("template");return s.innerHTML=e,s}};function Se(i,e,t=i,s){var r,o,n,l;if(e===he)return e;let a=s!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[s]:t._$Cu,h=We(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),h===void 0?a=void 0:(a=new h(i),a._$AT(i,t,s)),s!==void 0?((n=(l=t)._$Cl)!==null&&n!==void 0?n:l._$Cl=[])[s]=a:t._$Cu=a),a!==void 0&&(e=Se(i,a._$AS(i,e.values),a,s)),e}var yr=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:s},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:xe).importNode(s,!0);Ce.currentNode=o;let n=Ce.nextNode(),l=0,a=0,h=r[0];for(;h!==void 0;){if(l===h.index){let d;h.type===2?d=new Ae(n,n.nextSibling,this,e):h.type===1?d=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(d=new Cr(n,this,e)),this.v.push(d),h=r[++a]}l!==(h==null?void 0:h.index)&&(n=Ce.nextNode(),l++)}return o}m(e){let t=0;for(let s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},Ae=class{constructor(e,t,s,r){var o;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Se(this,e,t),We(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==he&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):wl(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==C&&We(this._$AH)?this._$AA.nextSibling.data=e:this.S(xe.createTextNode(e)),this._$AH=e}T(e){var t;let{values:s,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=we.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(s);else{let n=new yr(o,this),l=n.p(this.options);n.m(s),this.S(l),this._$AH=n}}_$AC(e){let t=_r.get(e.strings);return t===void 0&&_r.set(e.strings,t=new we(e)),t}M(e){hr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let o of e)r===t.length?t.push(s=new Ae(this.A(je()),this.A(je()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ge=class{constructor(e,t,s,r,o){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,r){let o=this.strings,n=!1;if(o===void 0)e=Se(this,e,t,0),n=!We(e)||e!==this._$AH&&e!==he,n&&(this._$AH=e);else{let l=e,a,h;for(e=o[0],a=0;a<o.length-1;a++)h=Se(this,l[s+a],t,a),h===he&&(h=this._$AH[a]),n||(n=!We(h)||h!==this._$AH[a]),h===C?e=C:e!==C&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!r&&this.k(e)}k(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},br=class extends Ge{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===C?void 0:e}},Al=ve?ve.emptyScript:"",vr=class extends Ge{constructor(){super(...arguments),this.type=4}k(e){e&&e!==C?this.element.setAttribute(this.name,Al):this.element.removeAttribute(this.name)}},xr=class extends Ge{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var s;if((e=(s=Se(this,e,t,0))!==null&&s!==void 0?s:C)===he)return;let r=this._$AH,o=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==C&&(r===C||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}},Cr=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}};var wr=window.litHtmlPolyfillSupport;wr==null||wr(we,Ae),((Ei=globalThis.litHtmlVersions)!==null&&Ei!==void 0?Ei:globalThis.litHtmlVersions=[]).push("2.0.2");var Ii,Ti;var V=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=gr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return he}};V.finalized=!0,V._$litElement$=!0,(Ii=globalThis.litElementHydrateSupport)===null||Ii===void 0||Ii.call(globalThis,{LitElement:V});var Sr=globalThis.litElementPolyfillSupport;Sr==null||Sr({LitElement:V});((Ti=globalThis.litElementVersions)!==null&&Ti!==void 0?Ti:globalThis.litElementVersions=[]).push("3.0.2");var St=i=>e=>typeof e=="function"?((t,s)=>(window.customElements.define(t,s),s))(i,e):((t,s)=>{let{kind:r,elements:o}=s;return{kind:r,elements:o,finisher(n){window.customElements.define(t,n)}}})(i,e);var Pl=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function Pe(i){return(e,t)=>t!==void 0?((s,r,o)=>{r.constructor.createProperty(o,s)})(i,e,t):Pl(i,e)}var Ar=class extends HTMLElement{static get version(){return"22.0.2"}};customElements.define("vaadin-lumo-styles",Ar);var Pr=i=>class extends i{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,s,r){super.attributeChangedCallback(t,s,r),t==="theme"&&this._setTheme(r)}};var Er=[];function y(i,e,t={}){if(i){let s=customElements.get(i);s&&Object.prototype.hasOwnProperty.call(s,"__finalized")&&console.warn(`The custom element definition for "${i}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`)}e=Ir(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(i,e,t):Er.push({themeFor:i,styles:e,include:t.include,moduleId:t.moduleId})}function Oi(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Er}function El(i,e){return(i||"").split(" ").some(t=>new RegExp("^"+t.split("*").join(".*")+"$").test(e))}function Il(i=""){let e=0;return i.indexOf("lumo-")===0||i.indexOf("material-")===0?e=1:i.indexOf("vaadin-")===0&&(e=2),e}function Ir(i=[],e=[]){return i instanceof be?e.push(i):Array.isArray(i)?i.forEach(t=>Ir(t,e)):console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),e}function Tr(i){let e=[];return i.include&&[].concat(i.include).forEach(t=>{let s=Oi().find(r=>r.moduleId===t);s?e.push(...Tr(s),...s.styles):console.warn(`Included moduleId ${t} not found in style registry`)},i.styles),e}function Tl(i,e){let t=document.createElement("style");t.innerHTML=i.filter((s,r)=>r===i.lastIndexOf(s)).map(s=>s.cssText).join(`
`),e.content.appendChild(t)}function Or(i){let e=i+"-default-theme",t=Oi().filter(s=>s.moduleId!==e&&El(s.themeFor,i)).map(s=>({...s,styles:[...Tr(s),...s.styles],includePriority:Il(s.moduleId)})).sort((s,r)=>r.includePriority-s.includePriority);return t.length>0?t:Oi().filter(s=>s.moduleId===e)}var Z=i=>class extends Pr(i){static finalize(){super.finalize();let t=this.prototype._template;if(!t||t.__themes)return;let s=Object.getPrototypeOf(this.prototype)._template,r=(s?s.__themes:[])||[];t.__themes=[...r,...Or(this.is)];let o=t.__themes.reduce((n,l)=>[...n,...l.styles],[]);Tl(o,t)}static finalizeStyles(t){return Or(this.is).reduce((s,r)=>[...s,...r.styles],[]).concat(t)}};var Ol=f`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,Mr=document.createElement("template");Mr.innerHTML=`<style>${Ol.toString().replace(":host","html")}</style>`;document.head.appendChild(Mr.content);var Nr=f`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a {
    color: var(--lumo-primary-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;y("",Nr,{moduleId:"lumo-color"});var Ml=f`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;y("",[Nr,Ml],{moduleId:"lumo-color-legacy"});var Nl=f`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,Rr=document.createElement("template");Rr.innerHTML=`<style>${Nl.toString().replace(":host","html")}</style>`;document.head.appendChild(Rr.content);var Rl=f`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,kr=document.createElement("template");kr.innerHTML=`<style>${Rl.toString().replace(":host","html")}</style>`;document.head.appendChild(kr.content);var kl=f`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Dl=f`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;y("",Dl,{moduleId:"lumo-typography"});var Dr=document.createElement("template");Dr.innerHTML=`<style>${kl.toString().replace(":host","html")}</style>`;document.head.appendChild(Dr.content);y("vaadin-input-container",f`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});window.JSCompiler_renameProperty=function(i,e){return i};var Ll=/(url\()([^)]*)(\))/g,zl=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Pt,N;function de(i,e){if(i&&zl.test(i)||i==="//")return i;if(Pt===void 0){Pt=!1;try{let t=new URL("b","http://a");t.pathname="c%20d",Pt=t.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Pt)try{return new URL(i,e).href}catch{return i}return N||(N=document.implementation.createHTMLDocument("temp"),N.base=N.createElement("base"),N.head.appendChild(N.base),N.anchor=N.createElement("a"),N.body.appendChild(N.anchor)),N.base.href=e,N.anchor.href=i,N.anchor.href||i}function Je(i,e){return i.replace(Ll,function(t,s,r,o){return s+"'"+de(r.replace(/["']/g,""),e)+"'"+o})}function Ee(i){return i.substring(0,i.lastIndexOf("/")+1)}var Ke=!window.ShadyDOM||!window.ShadyDOM.inUse,tu=Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),iu=!window.customElements.polyfillWrapFlushCallback,Lr=Ke&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{let i=new CSSStyleSheet;i.replaceSync("");let e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[i],e.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})(),zr=window.Polymer&&window.Polymer.rootPath||Ee(document.baseURI||window.location.href);var Xe=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;var Fr=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;var D=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;var Hr=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;var B=window.Polymer&&window.Polymer.legacyOptimizations||!1;var Et=window.Polymer&&window.Polymer.legacyWarnings||!1;var Vr=window.Polymer&&window.Polymer.syncInitialRender||!1;var It=window.Polymer&&window.Polymer.legacyUndefined||!1;var Br=window.Polymer&&window.Polymer.orderedComputed||!1;var Mi=!0;var Ni=window.Polymer&&window.Polymer.removeNestedTemplates||!1;var Tt=window.Polymer&&window.Polymer.fastDomIf||!1;var Ze=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;var Qe=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;var $r=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;var Fl=0;function Ur(){}Ur.prototype.__mixinApplications;Ur.prototype.__mixinSet;var _=function(i){let e=i.__mixinApplications;e||(e=new WeakMap,i.__mixinApplications=e);let t=Fl++;function s(r){let o=r.__mixinSet;if(o&&o[t])return r;let n=e,l=n.get(r);if(!l){l=i(r),n.set(r,l);let a=Object.create(l.__mixinSet||o||null);a[t]=!0,l.__mixinSet=a}return l}return s};var Ri={},qr={};function jr(i,e){Ri[i]=qr[i.toLowerCase()]=e}function Wr(i){return Ri[i]||qr[i.toLowerCase()]}function Hl(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}var Q=class extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let s=Wr(e);return s&&t?s.querySelector(t):s}return null}attributeChangedCallback(e,t,s,r){t!==s&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=de(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ee(t)}return this.__assetpath}register(e){if(e=e||this.id,e){if(D&&Wr(e)!==void 0)throw jr(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,jr(e,this),Hl(this)}}};Q.prototype.modules=Ri;customElements.define("dom-module",Q);var Vl="link[rel=import][type~=css]",Bl="include",Yr="shady-unscoped";function ki(i){return Q.import(i)}function Gr(i){let e=i.body?i.body:i,t=Je(e.textContent,i.baseURI),s=document.createElement("style");return s.textContent=t,s}function $l(i){let e=i.trim().split(/\s+/),t=[];for(let s=0;s<e.length;s++)t.push(...Ul(e[s]));return t}function Ul(i){let e=ki(i);if(!e)return console.warn("Could not find style data in module named",i),[];if(e._styles===void 0){let t=[];t.push(...Di(e));let s=e.querySelector("template");s&&t.push(...Ot(s,e.assetpath)),e._styles=t}return e._styles}function Ot(i,e){if(!i._styles){let t=[],s=i.content.querySelectorAll("style");for(let r=0;r<s.length;r++){let o=s[r],n=o.getAttribute(Bl);n&&t.push(...$l(n).filter(function(l,a,h){return h.indexOf(l)===a})),e&&(o.textContent=Je(o.textContent,e)),t.push(o)}i._styles=t}return i._styles}function Jr(i){let e=ki(i);return e?Di(e):[]}function Di(i){let e=[],t=i.querySelectorAll(Vl);for(let s=0;s<t.length;s++){let r=t[s];if(r.import){let o=r.import,n=r.hasAttribute(Yr);if(n&&!o._unscopedStyle){let l=Gr(o);l.setAttribute(Yr,""),o._unscopedStyle=l}else o._style||(o._style=Gr(o));e.push(n?o._unscopedStyle:o._style)}}return e}function Kr(i){let e=i.trim().split(/\s+/),t="";for(let s=0;s<e.length;s++)t+=ql(e[s]);return t}function ql(i){let e=ki(i);if(e&&e._cssText===void 0){let t=Wl(e),s=e.querySelector("template");s&&(t+=jl(s,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",i),e&&e._cssText||""}function jl(i,e){let t="",s=Ot(i,e);for(let r=0;r<s.length;r++){let o=s[r];o.parentNode&&o.parentNode.removeChild(o),t+=o.textContent}return t}function Wl(i){let e="",t=Di(i);for(let s=0;s<t.length;s++)e+=t[s].textContent;return e}var p=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;function Mt(i){return i.indexOf(".")>=0}function L(i){let e=i.indexOf(".");return e===-1?i:i.slice(0,e)}function Li(i,e){return i.indexOf(e+".")===0}function Ie(i,e){return e.indexOf(i+".")===0}function ce(i,e,t){return e+t.slice(i.length)}function Xr(i,e){return i===e||Li(i,e)||Ie(i,e)}function Te(i){if(Array.isArray(i)){let e=[];for(let t=0;t<i.length;t++){let s=i[t].toString().split(".");for(let r=0;r<s.length;r++)e.push(s[r])}return e.join(".")}else return i}function Zr(i){return Array.isArray(i)?Te(i).split("."):i.toString().split(".")}function A(i,e,t){let s=i,r=Zr(e);for(let o=0;o<r.length;o++){if(!s)return;let n=r[o];s=s[n]}return t&&(t.path=r.join(".")),s}function zi(i,e,t){let s=i,r=Zr(e),o=r[r.length-1];if(r.length>1){for(let n=0;n<r.length-1;n++){let l=r[n];if(s=s[l],!s)return}s[o]=t}else s[e]=t;return r.join(".")}var Nt={},Yl=/-[a-z]/g,Gl=/([A-Z])/g;function Rt(i){return Nt[i]||(Nt[i]=i.indexOf("-")<0?i:i.replace(Yl,e=>e[1].toUpperCase()))}function Oe(i){return Nt[i]||(Nt[i]=i.replace(Gl,"-$1").toLowerCase())}var Jl=0,Qr=0,Me=[],Kl=0,Fi=!1,eo=document.createTextNode("");new window.MutationObserver(Xl).observe(eo,{characterData:!0});function Xl(){Fi=!1;let i=Me.length;for(let e=0;e<i;e++){let t=Me[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}Me.splice(0,i),Qr+=i}var ee={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}};var T={run(i){return Fi||(Fi=!0,eo.textContent=Kl++),Me.push(i),Jl++},cancel(i){let e=i-Qr;if(e>=0){if(!Me[e])throw new Error("invalid async handle: "+i);Me[e]=null}}};var Zl=T,kt=_(i=>{class e extends i{static createProperties(s){let r=this.prototype;for(let o in s)o in r||r._createPropertyAccessor(o)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,r){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,r))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[s];return r||(r=this.constructor.attributeNameForProperty(s),this.__dataAttributes[r]=s),r}_definePropertyAccessor(s,r){Object.defineProperty(this,s,{get(){return this.__data[s]},set:r?function(){}:function(o){this._setPendingProperty(s,o,!0)&&this._invalidateProperties()}})}constructor(){super();this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,r){this._setPendingProperty(s,r)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,r,o){let n=this.__data[s],l=this._shouldPropertyChange(s,r,n);return l&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=n),this.__data[s]=r,this.__dataPending[s]=r),l}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Zl.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;let s=this.__data,r=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(s,r,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,r,o)),this.__dataCounter--}_shouldPropertiesChange(s,r,o){return Boolean(r)}_propertiesChanged(s,r,o){}_shouldPropertyChange(s,r,o){return o!==r&&(o===o||r===r)}attributeChangedCallback(s,r,o,n){r!==o&&this._attributeToProperty(s,o),super.attributeChangedCallback&&super.attributeChangedCallback(s,r,o,n)}_attributeToProperty(s,r,o){if(!this.__serializing){let n=this.__dataAttributes,l=n&&n[s]||s;this[l]=this._deserializeValue(r,o||this.constructor.typeForProperty(l))}}_propertyToAttribute(s,r,o){this.__serializing=!0,o=arguments.length<3?this[s]:o,this._valueToNodeAttribute(this,o,r||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,r,o){let n=this._serializeValue(r);(o==="class"||o==="name"||o==="slot")&&(s=p(s)),n===void 0?s.removeAttribute(o):s.setAttribute(o,n)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s!=null?s.toString():void 0}}_deserializeValue(s,r){switch(r){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return e});var to={},Dt=HTMLElement.prototype;for(;Dt;){let i=Object.getOwnPropertyNames(Dt);for(let e=0;e<i.length;e++)to[i[e]]=!0;Dt=Object.getPrototypeOf(Dt)}function Ql(i,e){if(!to[e]){let t=i[e];t!==void 0&&(i.__data?i._setPendingProperty(e,t):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[e]=t))}}var Lt=_(i=>{let e=kt(i);class t extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let o=0;o<r.length;o++)this.prototype._createPropertyAccessor(Rt(r[o]))}static attributeNameForProperty(r){return Oe(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let o in r)this._setProperty(o,r[o])}_ensureAttribute(r,o){let n=this;n.hasAttribute(r)||this._valueToNodeAttribute(n,o,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r)try{return JSON.stringify(r)}catch{return""}default:return super._serializeValue(r)}}_deserializeValue(r,o){let n;switch(o){case Object:try{n=JSON.parse(r)}catch{n=r}break;case Array:try{n=JSON.parse(r)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:n=isNaN(r)?String(r):Number(r),n=new Date(n);break;default:n=super._deserializeValue(r,o);break}return n}_definePropertyAccessor(r,o){Ql(this,r),super._definePropertyAccessor(r,o)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return Boolean(this.__dataPending&&r in this.__dataPending)}}return t});var ea={"dom-if":!0,"dom-repeat":!0},io=!1,so=!1;function ta(){if(!io){io=!0;let i=document.createElement("textarea");i.placeholder="a",so=i.placeholder===i.textContent}return so}function ia(i){ta()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}function sa(i){let e=i.getAttribute("is");if(e&&ea[e]){let t=i;for(t.removeAttribute("is"),i=t.ownerDocument.createElement(e),t.parentNode.replaceChild(i,t),i.appendChild(t);t.attributes.length;)i.setAttribute(t.attributes[0].name,t.attributes[0].value),t.removeAttribute(t.attributes[0].name)}return i}function ro(i,e){let t=e.parentInfo&&ro(i,e.parentInfo);if(t){for(let s=t.firstChild,r=0;s;s=s.nextSibling)if(e.parentIndex===r++)return s}else return i}function ra(i,e,t,s){s.id&&(e[s.id]=t)}function oa(i,e,t){if(t.events&&t.events.length)for(let s=0,r=t.events,o;s<r.length&&(o=r[s]);s++)i._addMethodEventListenerToNode(e,o.name,o.value,i)}function na(i,e,t,s){t.templateInfo&&(e._templateInfo=t.templateInfo,e._parentTemplateInfo=s)}function la(i,e,t){return i=i._methodHost||i,function(r){i[t]?i[t](r,r.detail):console.warn("listener method `"+t+"` not defined")}}var oo=_(i=>{class e extends i{static _parseTemplate(s,r){if(!s._templateInfo){let o=s._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=Boolean(r),o.stripWhiteSpace=r&&r.stripWhiteSpace||s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,o,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,r,o){return this._parseTemplateNode(s.content,r,o)}static _parseTemplateNode(s,r,o){let n=!1,l=s;return l.localName=="template"&&!l.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(l,r,o)||n:l.localName==="slot"&&(r.hasInsertionPoint=!0),ia(l),l.firstChild&&this._parseTemplateChildNodes(l,r,o),l.hasAttributes&&l.hasAttributes()&&(n=this._parseTemplateNodeAttributes(l,r,o)||n),n||o.noted}static _parseTemplateChildNodes(s,r,o){if(!(s.localName==="script"||s.localName==="style"))for(let n=s.firstChild,l=0,a;n;n=a){if(n.localName=="template"&&(n=sa(n)),a=n.nextSibling,n.nodeType===Node.TEXT_NODE){let d=a;for(;d&&d.nodeType===Node.TEXT_NODE;)n.textContent+=d.textContent,a=d.nextSibling,s.removeChild(d),d=a;if(r.stripWhiteSpace&&!n.textContent.trim()){s.removeChild(n);continue}}let h={parentIndex:l,parentInfo:o};this._parseTemplateNode(n,r,h)&&(h.infoIndex=r.nodeInfoList.push(h)-1),n.parentNode&&l++}}static _parseTemplateNestedTemplate(s,r,o){let n=s,l=this._parseTemplate(n,r);return(l.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=l,!0}static _parseTemplateNodeAttributes(s,r,o){let n=!1,l=Array.from(s.attributes);for(let a=l.length-1,h;h=l[a];a--)n=this._parseTemplateNodeAttribute(s,r,o,h.name,h.value)||n;return n}static _parseTemplateNodeAttribute(s,r,o,n,l){return n.slice(0,3)==="on-"?(s.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:l}),!0):n==="id"?(o.id=l,!0):!1}static _contentForTemplate(s){let r=s._templateInfo;return r&&r.content||s.content}_stampTemplate(s,r){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),r=r||this.constructor._parseTemplate(s);let o=r.nodeInfoList,n=r.content||s.content,l=document.importNode(n,!0);l.__noInsertionPoint=!r.hasInsertionPoint;let a=l.nodeList=new Array(o.length);l.$={};for(let h=0,d=o.length,c;h<d&&(c=o[h]);h++){let u=a[h]=ro(l,c);ra(this,l.$,u,c),na(this,u,c,r),oa(this,u,c)}return l=l,l}_addMethodEventListenerToNode(s,r,o,n){n=n||s;let l=la(n,r,o);return this._addEventListenerToNode(s,r,l),l}_addEventListenerToNode(s,r,o){s.addEventListener(r,o)}_removeEventListenerFromNode(s,r,o){s.removeEventListener(r,o)}}return e});var et=0,tt=[],b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},no="__computeInfo",aa=/[A-Z]/;function Hi(i,e,t){let s=i[e];if(!s)s=i[e]={};else if(!i.hasOwnProperty(e)&&(s=i[e]=Object.create(i[e]),t))for(let r in s){let o=s[r],n=s[r]=Array(o.length);for(let l=0;l<o.length;l++)n[l]=o[l]}return s}function it(i,e,t,s,r,o){if(e){let n=!1,l=et++;for(let a in t){let h=r?L(a):a,d=e[h];if(d)for(let c=0,u=d.length,m;c<u&&(m=d[c]);c++)(!m.info||m.info.lastRun!==l)&&(!r||Vi(a,m.trigger))&&(m.info&&(m.info.lastRun=l),m.fn(i,a,t,s,m.info,r,o),n=!0)}return n}return!1}function ha(i,e,t,s,r,o,n,l){let a=!1,h=n?L(s):s,d=e[h];if(d)for(let c=0,u=d.length,m;c<u&&(m=d[c]);c++)(!m.info||m.info.lastRun!==t)&&(!n||Vi(s,m.trigger))&&(m.info&&(m.info.lastRun=t),m.fn(i,s,r,o,m.info,n,l),a=!0);return a}function Vi(i,e){if(e){let t=e.name;return t==i||!!(e.structured&&Li(t,i))||!!(e.wildcard&&Ie(t,i))}else return!0}function lo(i,e,t,s,r){let o=typeof r.method=="string"?i[r.method]:r.method,n=r.property;o?o.call(i,i.__data[n],s[n]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function da(i,e,t,s,r){let o=i[b.NOTIFY],n,l=et++;for(let h in e)e[h]&&(o&&ha(i,o,l,h,t,s,r)||r&&ca(i,h,t))&&(n=!0);let a;n&&(a=i.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}function ca(i,e,t){let s=L(e);if(s!==e){let r=Oe(s)+"-changed";return ao(i,r,t[e],e),!0}return!1}function ao(i,e,t,s){let r={value:t,queueProperty:!0};s&&(r.path=s),p(i).dispatchEvent(new CustomEvent(e,{detail:r}))}function ua(i,e,t,s,r,o){let l=(o?L(e):e)!=e?e:null,a=l?A(i,l):i.__data[e];l&&a===void 0&&(a=t[e]),ao(i,r.eventName,a,l)}function pa(i,e,t,s,r){let o,n=i.detail,l=n&&n.path;l?(s=ce(t,s,l),o=n&&n.value):o=i.currentTarget[t],o=r?!o:o,(!e[b.READ_ONLY]||!e[b.READ_ONLY][s])&&e._setPendingPropertyOrPath(s,o,!0,Boolean(l))&&(!n||!n.queueProperty)&&e._invalidateProperties()}function ma(i,e,t,s,r){let o=i.__data[e];Xe&&(o=Xe(o,r.attrName,"attribute",i)),i._propertyToAttribute(e,r.attrName,o)}function fa(i,e,t,s){let r=i[b.COMPUTE];if(r)if(Br){et++;let o=ga(i),n=[];for(let a in e)ho(a,r,n,o,s);let l;for(;l=n.shift();)co(i,"",e,t,l)&&ho(l.methodInfo,r,n,o,s);Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),i.__dataPending=null}else{let o=e;for(;it(i,r,o,t,s);)Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),o=i.__dataPending,i.__dataPending=null}}var _a=(i,e,t)=>{let s=0,r=e.length-1,o=-1;for(;s<=r;){let n=s+r>>1,l=t.get(e[n].methodInfo)-t.get(i.methodInfo);if(l<0)s=n+1;else if(l>0)r=n-1;else{o=n;break}}o<0&&(o=r+1),e.splice(o,0,i)},ho=(i,e,t,s,r)=>{let o=r?L(i):i,n=e[o];if(n)for(let l=0;l<n.length;l++){let a=n[l];a.info.lastRun!==et&&(!r||Vi(i,a.trigger))&&(a.info.lastRun=et,_a(a.info,t,s))}};function ga(i){let e=i.constructor.__orderedComputedDeps;if(!e){e=new Map;let t=i[b.COMPUTE],{counts:s,ready:r,total:o}=ya(i),n;for(;n=r.shift();){e.set(n,e.size);let l=t[n];l&&l.forEach(a=>{let h=a.info.methodInfo;--o,--s[h]===0&&r.push(h)})}o!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=e}return e}function ya(i){let e=i[no],t={},s=i[b.COMPUTE],r=[],o=0;for(let n in e){let l=e[n];o+=t[n]=l.args.filter(a=>!a.literal).length+(l.dynamicFn?1:0)}for(let n in s)e[n]||r.push(n);return{counts:t,ready:r,total:o}}function co(i,e,t,s,r){let o=$i(i,e,t,s,r);if(o===tt)return!1;let n=r.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[n]?i._setPendingProperty(n,o,!0):(i[n]=o,!1)}function ba(i,e,t){let s=i.__dataLinkedPaths;if(s){let r;for(let o in s){let n=s[o];Ie(o,e)?(r=ce(o,n,e),i._setPendingPropertyOrPath(r,t,!0,!0)):Ie(n,e)&&(r=ce(n,o,e),i._setPendingPropertyOrPath(r,t,!0,!0))}}}function Bi(i,e,t,s,r,o,n){t.bindings=t.bindings||[];let l={kind:s,target:r,parts:o,literal:n,isCompound:o.length!==1};if(t.bindings.push(l),Sa(l)){let{event:h,negate:d}=l.parts[0];l.listenerEvent=h||Oe(r)+"-changed",l.listenerNegate=d}let a=e.nodeInfoList.length;for(let h=0;h<l.parts.length;h++){let d=l.parts[h];d.compoundIndex=h,va(i,e,l,d,a)}}function va(i,e,t,s,r){if(!s.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let o=s.dependencies,n={index:r,binding:t,part:s,evaluator:i};for(let l=0;l<o.length;l++){let a=o[l];typeof a=="string"&&(a=go(a),a.wildcard=!0),i._addTemplatePropertyEffect(e,a.rootProperty,{fn:xa,info:n,trigger:a})}}}function xa(i,e,t,s,r,o,n){let l=n[r.index],a=r.binding,h=r.part;if(o&&h.source&&e.length>h.source.length&&a.kind=="property"&&!a.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[a.target]){let d=t[e];e=ce(h.source,a.target,e),l._setPendingPropertyOrPath(e,d,!1,!0)&&i._enqueueClient(l)}else{let d=r.evaluator._evaluateBinding(i,h,e,t,s,o);d!==tt&&Ca(i,l,a,h,d)}}function Ca(i,e,t,s,r){if(r=wa(e,r,t,s),Xe&&(r=Xe(r,t.target,t.kind,e)),t.kind=="attribute")i._valueToNodeAttribute(e,r,t.target);else{let o=t.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[o]?(!e[b.READ_ONLY]||!e[b.READ_ONLY][o])&&e._setPendingProperty(o,r)&&i._enqueueClient(e):i._setUnmanagedPropertyToNode(e,o,r)}}function wa(i,e,t,s){if(t.isCompound){let r=i.__dataCompoundStorage[t.target];r[s.compoundIndex]=e,e=r.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(e=e??""),e}function Sa(i){return Boolean(i.target)&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function Aa(i,e){let{nodeList:t,nodeInfoList:s}=e;if(s.length)for(let r=0;r<s.length;r++){let o=s[r],n=t[r],l=o.bindings;if(l)for(let a=0;a<l.length;a++){let h=l[a];Pa(n,h),Ea(n,i,h)}n.__dataHost=i}}function Pa(i,e){if(e.isCompound){let t=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),s=e.parts,r=new Array(s.length);for(let n=0;n<s.length;n++)r[n]=s[n].literal;let o=e.target;t[o]=r,e.literal&&e.kind=="property"&&(o==="className"&&(i=p(i)),i[o]=e.literal)}}function Ea(i,e,t){if(t.listenerEvent){let s=t.parts[0];i.addEventListener(t.listenerEvent,function(r){pa(r,e,t.target,s.source,s.negate)})}}function uo(i,e,t,s,r,o){o=e.static||o&&(typeof o!="object"||o[e.methodName]);let n={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:o};for(let l=0,a;l<e.args.length&&(a=e.args[l]);l++)a.literal||i._addPropertyEffect(a.rootProperty,t,{fn:s,info:n,trigger:a});return o&&i._addPropertyEffect(e.methodName,t,{fn:s,info:n}),n}function $i(i,e,t,s,r){let o=i._methodHost||i,n=o[r.methodName];if(n){let l=i._marshalArgs(r.args,e,t);return l===tt?tt:n.apply(o,l)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}var Ia=[],po="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ta="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Oa="(?:'(?:[^'\\\\]|\\\\.)*')",Ma='(?:"(?:[^"\\\\]|\\\\.)*")',Na="(?:"+Oa+"|"+Ma+")",mo="(?:("+po+"|"+Ta+"|"+Na+")\\s*)",Ra="(?:"+mo+"(?:,\\s*"+mo+")*)",ka="(?:\\(\\s*(?:"+Ra+"?)\\)\\s*)",Da="("+po+"\\s*"+ka+"?)",La="(\\[\\[|{{)\\s*",za="(?:]]|}})",Fa="(?:(!)\\s*)?",Ha=La+Fa+Da+za,fo=new RegExp(Ha,"g");function _o(i){let e="";for(let t=0;t<i.length;t++)e+=i[t].literal||"";return e}function Ui(i){let e=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let s={methodName:e[1],static:!0,args:Ia};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return Va(r,s)}else return s}return null}function Va(i,e){return e.args=i.map(function(t){let s=go(t);return s.literal||(e.static=!1),s},this),e}function go(i){let e=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:e,value:"",literal:!1},s=e[0];switch(s==="-"&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':t.value=e.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(e),t.literal=!0;break}return t.literal||(t.rootProperty=L(e),t.structured=Mt(e),t.structured&&(t.wildcard=e.slice(-2)==".*",t.wildcard&&(t.name=e.slice(0,-2)))),t}function yo(i,e,t){let s=A(i,t);return s===void 0&&(s=e[t]),s}function bo(i,e,t,s){let r={indexSplices:s};It&&!i._overrideLegacyUndefined&&(e.splices=r),i.notifyPath(t+".splices",r),i.notifyPath(t+".length",e.length),It&&!i._overrideLegacyUndefined&&(r.indexSplices=[])}function st(i,e,t,s,r,o){bo(i,e,t,[{index:s,addedCount:r,removed:o,object:e,type:"splice"}])}function Ba(i){return i[0].toUpperCase()+i.substring(1)}var ue=_(i=>{let e=oo(Lt(i));class t extends e{constructor(){super();this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(rt.length){let r=rt[rt.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let o=this[b.READ_ONLY];for(let n in r)(!o||!o[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=r[n])}_addPropertyEffect(r,o,n){this._createPropertyAccessor(r,o==b.READ_ONLY);let l=Hi(this,o,!0)[r];l||(l=this[o][r]=[]),l.push(n)}_removePropertyEffect(r,o,n){let l=Hi(this,o,!0)[r],a=l.indexOf(n);a>=0&&l.splice(a,1)}_hasPropertyEffect(r,o){let n=this[o];return Boolean(n&&n[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,b.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,b.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,b.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,b.COMPUTE)}_setPendingPropertyOrPath(r,o,n,l){if(l||L(Array.isArray(r)?r[0]:r)!==r){if(!l){let a=A(this,r);if(r=zi(this,r,o),!r||!super._shouldPropertyChange(r,o,a))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,o,n))return ba(this,r,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,o,n);this[r]=o}return!1}_setUnmanagedPropertyToNode(r,o,n){(n!==r[o]||typeof n=="object")&&(o==="className"&&(r=p(r)),r[o]=n)}_setPendingProperty(r,o,n){let l=this.__dataHasPaths&&Mt(r),a=l?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,o,a[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),l?this.__dataTemp[r]=o:this.__data[r]=o,this.__dataPending[r]=o,(l||this[b.NOTIFY]&&this[b.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=n),!0):!1}_setProperty(r,o){this._setPendingProperty(r,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let o=0;o<r.length;o++){let n=r[o];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,o){for(let n in r)(o||!this[b.READ_ONLY]||!this[b.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,o,n){let l=this.__dataHasPaths;this.__dataHasPaths=!1;let a;fa(this,o,n,l),a=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,n,l),this._flushClients(),it(this,this[b.REFLECT],o,n,l),it(this,this[b.OBSERVE],o,n,l),a&&da(this,a,o,n,l),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,o,n){this[b.PROPAGATE]&&it(this,this[b.PROPAGATE],r,o,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,o,n)}_runEffectsForTemplate(r,o,n,l){let a=(h,d)=>{it(this,r.propertyEffects,h,n,d,r.nodeList);for(let c=r.firstChild;c;c=c.nextSibling)this._runEffectsForTemplate(c,h,n,d)};r.runEffects?r.runEffects(a,o,l):a(o,l)}linkPaths(r,o){r=Te(r),o=Te(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=o}unlinkPaths(r){r=Te(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,o){let n={path:""},l=A(this,r,n);bo(this,l,n.path,o)}get(r,o){return A(o||this,r)}set(r,o,n){n?zi(n,r,o):(!this[b.READ_ONLY]||!this[b.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,o,!0)&&this._invalidateProperties()}push(r,...o){let n={path:""},l=A(this,r,n),a=l.length,h=l.push(...o);return o.length&&st(this,l,n.path,a,o.length,[]),h}pop(r){let o={path:""},n=A(this,r,o),l=Boolean(n.length),a=n.pop();return l&&st(this,n,o.path,n.length,0,[a]),a}splice(r,o,n,...l){let a={path:""},h=A(this,r,a);o<0?o=h.length-Math.floor(-o):o&&(o=Math.floor(o));let d;return arguments.length===2?d=h.splice(o):d=h.splice(o,n,...l),(l.length||d.length)&&st(this,h,a.path,o,l.length,d),d}shift(r){let o={path:""},n=A(this,r,o),l=Boolean(n.length),a=n.shift();return l&&st(this,n,o.path,0,0,[a]),a}unshift(r,...o){let n={path:""},l=A(this,r,n),a=l.unshift(...o);return o.length&&st(this,l,n.path,0,o.length,[]),a}notifyPath(r,o){let n;if(arguments.length==1){let l={path:""};o=A(this,r,l),n=l.path}else Array.isArray(r)?n=Te(r):n=r;this._setPendingPropertyOrPath(n,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,o){this._addPropertyEffect(r,b.READ_ONLY),o&&(this["_set"+Ba(r)]=function(n){this._setProperty(r,n)})}_createPropertyObserver(r,o,n){let l={property:r,method:o,dynamicFn:Boolean(n)};this._addPropertyEffect(r,b.OBSERVE,{fn:lo,info:l,trigger:{name:r}}),n&&this._addPropertyEffect(o,b.OBSERVE,{fn:lo,info:l,trigger:{name:o}})}_createMethodObserver(r,o){let n=Ui(r);if(!n)throw new Error("Malformed observer expression '"+r+"'");uo(this,n,b.OBSERVE,$i,null,o)}_createNotifyingProperty(r){this._addPropertyEffect(r,b.NOTIFY,{fn:ua,info:{eventName:Oe(r)+"-changed",property:r}})}_createReflectedProperty(r){let o=this.constructor.attributeNameForProperty(r);o[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,b.REFLECT,{fn:ma,info:{attrName:o}})}_createComputedProperty(r,o,n){let l=Ui(o);if(!l)throw new Error("Malformed computed expression '"+o+"'");let a=uo(this,l,b.COMPUTE,co,r,n);Hi(this,no)[r]=a}_marshalArgs(r,o,n){let l=this.__data,a=[];for(let h=0,d=r.length;h<d;h++){let{name:c,structured:u,wildcard:m,value:g,literal:x}=r[h];if(!x)if(m){let R=Ie(c,o),S=yo(l,n,R?o:c);g={path:R?o:c,value:S,base:R?A(l,c):S}}else g=u?yo(l,n,c):l[c];if(It&&!this._overrideLegacyUndefined&&g===void 0&&r.length>1)return tt;a[h]=g}return a}static addPropertyEffect(r,o,n){this.prototype._addPropertyEffect(r,o,n)}static createPropertyObserver(r,o,n){this.prototype._createPropertyObserver(r,o,n)}static createMethodObserver(r,o){this.prototype._createMethodObserver(r,o)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,o){this.prototype._createReadOnlyProperty(r,o)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,o,n){this.prototype._createComputedProperty(r,o,n)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,o){let n=this.constructor._parseTemplate(r),l=this.__preBoundTemplateInfo==n;if(!l)for(let a in n.propertyEffects)this._createPropertyAccessor(a);if(o)if(n=Object.create(n),n.wasPreBound=l,!this.__templateInfo)this.__templateInfo=n;else{let a=r._parentTemplateInfo||this.__templateInfo,h=a.lastChild;n.parent=a,a.lastChild=n,n.previousSibling=h,h?h.nextSibling=n:a.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(r,o,n){let l=r.hostProps=r.hostProps||{};l[o]=!0;let a=r.propertyEffects=r.propertyEffects||{};(a[o]=a[o]||[]).push(n)}_stampTemplate(r,o){o=o||this._bindTemplate(r,!0),rt.push(this);let n=super._stampTemplate(r,o);if(rt.pop(),o.nodeList=n.nodeList,!o.wasPreBound){let l=o.childNodes=[];for(let a=n.firstChild;a;a=a.nextSibling)l.push(a)}return n.templateInfo=o,Aa(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(r){let o=r.templateInfo,{previousSibling:n,nextSibling:l,parent:a}=o;n?n.nextSibling=l:a&&(a.firstChild=l),l?l.previousSibling=n:a&&(a.lastChild=n),o.nextSibling=o.previousSibling=null;let h=o.childNodes;for(let d=0;d<h.length;d++){let c=h[d];p(p(c).parentNode).removeChild(c)}}static _parseTemplateNode(r,o,n){let l=e._parseTemplateNode.call(this,r,o,n);if(r.nodeType===Node.TEXT_NODE){let a=this._parseBindings(r.textContent,o);a&&(r.textContent=_o(a)||" ",Bi(this,o,n,"text","textContent",a),l=!0)}return l}static _parseTemplateNodeAttribute(r,o,n,l,a){let h=this._parseBindings(a,o);if(h){let d=l,c="property";aa.test(l)?c="attribute":l[l.length-1]=="$"&&(l=l.slice(0,-1),c="attribute");let u=_o(h);return u&&c=="attribute"&&(l=="class"&&r.hasAttribute("class")&&(u+=" "+r.getAttribute(l)),r.setAttribute(l,u)),c=="attribute"&&d=="disable-upgrade$"&&r.setAttribute(l,""),r.localName==="input"&&d==="value"&&r.setAttribute(d,""),r.removeAttribute(d),c==="property"&&(l=Rt(l)),Bi(this,o,n,c,l,h,u),!0}else return e._parseTemplateNodeAttribute.call(this,r,o,n,l,a)}static _parseTemplateNestedTemplate(r,o,n){let l=e._parseTemplateNestedTemplate.call(this,r,o,n),a=r.parentNode,h=n.templateInfo,d=a.localName==="dom-if",c=a.localName==="dom-repeat";Ni&&(d||c)&&(a.removeChild(r),n=n.parentInfo,n.templateInfo=h,n.noted=!0,l=!1);let u=h.hostProps;if(Tt&&d)u&&(o.hostProps=Object.assign(o.hostProps||{},u),Ni||(n.parentInfo.noted=!0));else{let m="{";for(let g in u){let x=[{mode:m,source:g,dependencies:[g],hostProp:!0}];Bi(this,o,n,"property","_host_"+g,x)}}return l}static _parseBindings(r,o){let n=[],l=0,a;for(;(a=fo.exec(r))!==null;){a.index>l&&n.push({literal:r.slice(l,a.index)});let h=a[1][0],d=Boolean(a[2]),c=a[3].trim(),u=!1,m="",g=-1;h=="{"&&(g=c.indexOf("::"))>0&&(m=c.substring(g+2),c=c.substring(0,g),u=!0);let x=Ui(c),R=[];if(x){let{args:S,methodName:M}=x;for(let vi=0;vi<S.length;vi++){let er=S[vi];er.literal||R.push(er)}let ye=o.dynamicFns;(ye&&ye[M]||x.static)&&(R.push(M),x.dynamicFn=!0)}else R.push(c);n.push({source:c,mode:h,negate:d,customEvent:u,signature:x,dependencies:R,event:m}),l=fo.lastIndex}if(l&&l<r.length){let h=r.substring(l);h&&n.push({literal:h})}return n.length?n:null}static _evaluateBinding(r,o,n,l,a,h){let d;return o.signature?d=$i(r,n,l,a,o.signature):n!=o.source?d=A(r,o.source):h&&Mt(n)?d=A(r,n):d=r.__data[n],o.negate&&(d=!d),d}}return t}),rt=[];var $a=0;function vo(){$a++}var Ua=[];function zt(i){Ua.push(i)}function qa(i){let e={};for(let t in i){let s=i[t];e[t]=typeof s=="function"?{type:s}:s}return e}var xo=_(i=>{let e=kt(i);function t(o){let n=Object.getPrototypeOf(o);return n.prototype instanceof r?n:null}function s(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let n=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){let l=o.properties;l&&(n=qa(l))}o.__ownProperties=n}return o.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){zt(this.prototype);let n=this._properties;this.__observedAttributes=n?Object.keys(n).map(l=>this.prototype._addPropertyToAttributeMap(l)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let n=t(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let n=s(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let n=t(this);this.__properties=Object.assign({},n&&n._properties,s(this))}return this.__properties}static typeForProperty(n){let l=this._properties[n];return l&&l.type}_initializeProperties(){vo(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});var Co="3.4.1",Ft=window.ShadyCSS&&window.ShadyCSS.cssBuild,te=_(i=>{let e=xo(ue(i));function t(a){if(!a.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",a))){a.__propertyDefaults=null;let h=a._properties;for(let d in h){let c=h[d];"value"in c&&(a.__propertyDefaults=a.__propertyDefaults||{},a.__propertyDefaults[d]=c)}}return a.__propertyDefaults}function s(a){return a.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",a))||(a.__ownObservers=a.hasOwnProperty(JSCompiler_renameProperty("observers",a))?a.observers:null),a.__ownObservers}function r(a,h,d,c){d.computed&&(d.readOnly=!0),d.computed&&(a._hasReadOnlyEffect(h)?console.warn(`Cannot redefine computed property '${h}'.`):a._createComputedProperty(h,d.computed,c)),d.readOnly&&!a._hasReadOnlyEffect(h)?a._createReadOnlyProperty(h,!d.computed):d.readOnly===!1&&a._hasReadOnlyEffect(h)&&console.warn(`Cannot make readOnly property '${h}' non-readOnly.`),d.reflectToAttribute&&!a._hasReflectEffect(h)?a._createReflectedProperty(h):d.reflectToAttribute===!1&&a._hasReflectEffect(h)&&console.warn(`Cannot make reflected property '${h}' non-reflected.`),d.notify&&!a._hasNotifyEffect(h)?a._createNotifyingProperty(h):d.notify===!1&&a._hasNotifyEffect(h)&&console.warn(`Cannot make notify property '${h}' non-notify.`),d.observer&&a._createPropertyObserver(h,d.observer,c[d.observer]),a._addPropertyToAttributeMap(h)}function o(a,h,d,c){if(!Ft){let u=h.content.querySelectorAll("style"),m=Ot(h),g=Jr(d),x=h.content.firstElementChild;for(let S=0;S<g.length;S++){let M=g[S];M.textContent=a._processStyleText(M.textContent,c),h.content.insertBefore(M,x)}let R=0;for(let S=0;S<m.length;S++){let M=m[S],ye=u[R];ye!==M?(M=M.cloneNode(!0),ye.parentNode.insertBefore(M,ye)):R++,M.textContent=a._processStyleText(M.textContent,c)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,d),$r&&Ft&&Lr){let u=h.content.querySelectorAll("style");if(u){let m="";Array.from(u).forEach(g=>{m+=g.textContent,g.parentNode.removeChild(g)}),a._styleSheet=new CSSStyleSheet,a._styleSheet.replaceSync(m)}}}function n(a){let h=null;if(a&&(!D||Hr)&&(h=Q.import(a,"template"),D&&!h))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${a}`);return h}class l extends e{static get polymerElementVersion(){return Co}static _finalizeClass(){e._finalizeClass.call(this);let h=s(this);h&&this.createObservers(h,this._properties),this._prepareTemplate()}static _prepareTemplate(){let h=this.template;h&&(typeof h=="string"?(console.error("template getter must return HTMLTemplateElement"),h=null):B||(h=h.cloneNode(!0))),this.prototype._template=h}static createProperties(h){for(let d in h)r(this.prototype,d,h[d],h)}static createObservers(h,d){let c=this.prototype;for(let u=0;u<h.length;u++)c._createMethodObserver(h[u],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let h=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=h!==void 0?h:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(h){this._template=h}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let h=this.importMeta;if(h)this._importPath=Ee(h.url);else{let d=Q.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super();this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=zr,this.importPath=this.constructor.importPath;let h=t(this.constructor);if(!!h)for(let d in h){let c=h[d];if(this._canApplyPropertyDefault(d)){let u=typeof c.value=="function"?c.value.call(this):c.value;this._hasAccessor(d)?this._setPendingProperty(d,u,!0):this[d]=u}}}_canApplyPropertyDefault(h){return!this.hasOwnProperty(h)}static _processStyleText(h,d){return Je(h,d)}static _finalizeTemplate(h){let d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;let c=this.importPath,u=c?de(c):"";o(this,d,h,u),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(h){let d=p(this);if(d.attachShadow)return h?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:h}),d.shadowRoot.appendChild(h),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Vr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(h){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,h)}resolveUrl(h,d){return!d&&this.importPath&&(d=de(this.importPath)),de(h,d)}static _parseTemplateContent(h,d,c){return d.dynamicFns=d.dynamicFns||this._properties,e._parseTemplateContent.call(this,h,d,c)}static _addTemplatePropertyEffect(h,d,c){return Et&&!(d in this._properties)&&!(c.info.part.signature&&c.info.part.signature.static)&&!c.info.part.hostProp&&!h.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,h,d,c)}}return l});var qi=class{constructor(e){this.value=e.toString()}toString(){return this.value}};function ja(i){if(i instanceof qi)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Wa(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof qi)return ja(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}var O=function(e,...t){let s=document.createElement("template");return s.innerHTML=t.reduce((r,o,n)=>r+Wa(o)+e[n+1],e[0]),s};var w=te(HTMLElement);var ot=class{static detectScrollType(){let e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,s){let{scrollLeft:r}=s;if(t!=="rtl"||!e)return r;switch(e){case"negative":return s.scrollWidth-s.clientWidth+r;case"reverse":return s.scrollWidth-s.clientWidth-r}return r}static setNormalizedScrollLeft(e,t,s,r){if(t!=="rtl"||!e){s.scrollLeft=r;return}switch(e){case"negative":s.scrollLeft=s.clientWidth-s.scrollWidth+r;break;case"reverse":s.scrollLeft=s.scrollWidth-s.clientWidth-r;break;default:s.scrollLeft=r;break}}};var ie=[],Ya=function(){let i=Wi();ie.forEach(e=>{ji(e,i)})},Ht,Ga=new MutationObserver(Ya);Ga.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var ji=function(i,e,t=i.getAttribute("dir")){e?i.setAttribute("dir",e):t!=null&&i.removeAttribute("dir")},Wi=function(){return document.documentElement.getAttribute("dir")},se=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),Ht||(Ht=ot.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),ji(this,Wi(),null))}attributeChangedCallback(t,s,r){if(super.attributeChangedCallback(t,s,r),t!=="dir")return;let o=Wi(),n=r===o&&ie.indexOf(this)===-1,l=!r&&s&&ie.indexOf(this)===-1;n||l?(this.__subscribe(),ji(this,o,r)):r!==o&&s===o&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,s,r){r==="dir"&&s===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,s,r)}_attributeToProperty(t,s,r){t==="dir"&&!s?this.dir="":super._attributeToProperty(t,s,r)}__subscribe(t=!0){t?ie.indexOf(this)===-1&&ie.push(this):ie.indexOf(this)>-1&&ie.splice(ie.indexOf(this),1)}__getNormalizedScrollLeft(t){return ot.getNormalizedScrollLeft(Ht,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,s){return ot.setNormalizedScrollLeft(Ht,this.getAttribute("dir")||"ltr",t,s)}};var Yi=class extends Z(se(w)){static get is(){return"vaadin-input-container"}static get template(){return O`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          /* See the workaround at the end of this file. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}};customElements.define(Yi.is,Yi);var Ja=f`
  /* Needed for Safari, where ::slotted(...)::placeholder does not work */
  :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
    font: inherit;
    color: inherit;
  }
`,wo=document.createElement("template");wo.innerHTML=`<style>${Ja.toString()}</style>`;document.head.appendChild(wo.content);var Ka=f`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,So=document.createElement("template");So.innerHTML=`<style>${Ka.toString().replace(":host","html")}</style>`;document.head.appendChild(So.content);var pe=f`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;y("",pe,{moduleId:"lumo-overlay"});y("vaadin-overlay",pe,{moduleId:"lumo-vaadin-overlay"});function nt(i,e,t){return{index:i,removed:e,addedCount:t}}var Ao=0,Po=1,Gi=2,Ji=3;function Xa(i,e,t,s,r,o){let n=o-r+1,l=t-e+1,a=new Array(n);for(let h=0;h<n;h++)a[h]=new Array(l),a[h][0]=h;for(let h=0;h<l;h++)a[0][h]=h;for(let h=1;h<n;h++)for(let d=1;d<l;d++)if(Ki(i[e+d-1],s[r+h-1]))a[h][d]=a[h-1][d-1];else{let c=a[h-1][d]+1,u=a[h][d-1]+1;a[h][d]=c<u?c:u}return a}function Za(i){let e=i.length-1,t=i[0].length-1,s=i[e][t],r=[];for(;e>0||t>0;){if(e==0){r.push(Gi),t--;continue}if(t==0){r.push(Ji),e--;continue}let o=i[e-1][t-1],n=i[e-1][t],l=i[e][t-1],a;n<l?a=n<o?n:o:a=l<o?l:o,a==o?(o==s?r.push(Ao):(r.push(Po),s=o),e--,t--):a==n?(r.push(Ji),e--,s=n):(r.push(Gi),t--,s=l)}return r.reverse(),r}function Qa(i,e,t,s,r,o){let n=0,l=0,a,h=Math.min(t-e,o-r);if(e==0&&r==0&&(n=eh(i,s,h)),t==i.length&&o==s.length&&(l=th(i,s,h-n)),e+=n,r+=n,t-=l,o-=l,t-e==0&&o-r==0)return[];if(e==t){for(a=nt(e,[],0);r<o;)a.removed.push(s[r++]);return[a]}else if(r==o)return[nt(e,[],t-e)];let d=Za(Xa(i,e,t,s,r,o));a=void 0;let c=[],u=e,m=r;for(let g=0;g<d.length;g++)switch(d[g]){case Ao:a&&(c.push(a),a=void 0),u++,m++;break;case Po:a||(a=nt(u,[],0)),a.addedCount++,u++,a.removed.push(s[m]),m++;break;case Gi:a||(a=nt(u,[],0)),a.addedCount++,u++;break;case Ji:a||(a=nt(u,[],0)),a.removed.push(s[m]),m++;break}return a&&c.push(a),c}function eh(i,e,t){for(let s=0;s<t;s++)if(!Ki(i[s],e[s]))return s;return t}function th(i,e,t){let s=i.length,r=e.length,o=0;for(;o<t&&Ki(i[--s],e[--r]);)o++;return o}function Vt(i,e){return Qa(i,0,i.length,e,0,e.length)}function Ki(i,e){return i===e}function Ne(i){return i.localName==="slot"}var $=class{static getFlattenedNodes(i){let e=p(i);return Ne(i)?(i=i,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>Ne(t)?(t=t,p(t).assignedNodes({flatten:!0})):[t]).reduce((t,s)=>t.concat(s),[])}constructor(i,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=i,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ne(this._target)?this._listenSlots([this._target]):p(this._target).children&&(this._listenSlots(p(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,i=>{this._processMutations(i)}):(this._nativeChildrenObserver=new MutationObserver(i=>{this._processMutations(i)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ne(this._target)?this._unlistenSlots([this._target]):p(this._target).children&&(this._unlistenSlots(p(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,T.run(()=>this.flush()))}_processMutations(i){this._processSlotMutations(i),this.flush()}_processSlotMutations(i){if(i)for(let e=0;e<i.length;e++){let t=i[e];t.addedNodes&&this._listenSlots(t.addedNodes),t.removedNodes&&this._unlistenSlots(t.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let i={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),t=Vt(e,this._effectiveNodes);for(let r=0,o;r<t.length&&(o=t[r]);r++)for(let n=0,l;n<o.removed.length&&(l=o.removed[n]);n++)i.removedNodes.push(l);for(let r=0,o;r<t.length&&(o=t[r]);r++)for(let n=o.index;n<o.index+o.addedCount;n++)i.addedNodes.push(e[n]);this._effectiveNodes=e;let s=!1;return(i.addedNodes.length||i.removedNodes.length)&&(s=!0,this.callback.call(this._target,i)),s}_listenSlots(i){for(let e=0;e<i.length;e++){let t=i[e];Ne(t)&&t.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(i){for(let e=0;e<i.length;e++){let t=i[e];Ne(t)&&t.removeEventListener("slotchange",this._boundSchedule)}}};var Xi=!1,ih=[],Eo=[];function sh(){Xi=!0,requestAnimationFrame(function(){Xi=!1,rh(ih),setTimeout(function(){oh(Eo)})})}function rh(i){for(;i.length;)Io(i.shift())}function oh(i){for(let e=0,t=i.length;e<t;e++)Io(i.shift())}function Io(i){let e=i[0],t=i[1],s=i[2];try{t.apply(e,s)}catch(r){setTimeout(()=>{throw r})}}function To(i,e,t){Xi||sh(),Eo.push([i,e,t])}function Zi(i,e,t,s,r){let o;r&&(o=typeof t=="object"&&t!==null,o&&(s=i.__dataTemp[e]));let n=s!==t&&(s===s||t===t);return o&&n&&(i.__dataTemp[e]=t),n}var Re=_(i=>{class e extends i{_shouldPropertyChange(s,r,o){return Zi(this,s,r,o,!0)}}return e}),Bt=_(i=>{class e extends i{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(s,r,o){return Zi(this,s,r,o,this.mutableData)}}return e});Re._mutablePropertyChange=Zi;var Qi=null;function es(){return Qi}es.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:es,writable:!0}});var Oo=ue(es),nh=Re(Oo);function lh(i,e){Qi=i,Object.setPrototypeOf(i,e.prototype),new e,Qi=null}var ah=ue(class{});function ts(i,e){for(let t=0;t<e.length;t++){let s=e[t];if(Boolean(i)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)i?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if(s.localName==="slot")if(i)s.__polymerReplaced__=document.createComment("hidden-slot"),p(p(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{let r=s.__polymerReplaced__;r&&p(p(r).parentNode).replaceChild(s,r)}else s.style&&(i?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=i,s._showHideChildren&&s._showHideChildren(i)}}var U=class extends ah{constructor(e){super();this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let r=this.root.firstChild;r;r=r.nextSibling)t.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let s=this.__templatizeOptions;(e&&s.instanceProps||!s.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let s in this.__hostProps)this._setPendingProperty(s,this.__dataHost["_host_"+s]);for(let s in e)this._setPendingProperty(s,e[s])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,s){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,r=>{r.model=this,s(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,s)}}_showHideChildren(e){ts(e,this.children)}_setUnmanagedPropertyToNode(e,t,s){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&t=="textContent"?e.__polymerTextContent__=s:super._setUnmanagedPropertyToNode(e,t,s)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}};U.prototype.__dataHost;U.prototype.__templatizeOptions;U.prototype._methodHost;U.prototype.__templatizeOwner;U.prototype.__hostProps;var hh=Re(U);function Mo(i){let e=i.__dataHost;return e&&e._methodHost||e}function dh(i,e,t){let s=t.mutableData?hh:U;q.mixin&&(s=q.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=t,r.prototype._bindTemplate(i),ph(r,i,e,t),r}function ch(i,e,t,s){let r=t.forwardHostProp;if(r&&e.hasHostProps){let o=i.localName=="template",n=e.templatizeTemplateClass;if(!n){if(o){let a=t.mutableData?nh:Oo;class h extends a{}n=e.templatizeTemplateClass=h}else{let a=i.constructor;class h extends a{}n=e.templatizeTemplateClass=h}let l=e.hostProps;for(let a in l)n.prototype._addPropertyEffect("_host_"+a,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:uh(a,r)}),n.prototype._createNotifyingProperty("_host_"+a);Et&&s&&_h(e,t,s)}if(i.__dataProto&&Object.assign(i.__data,i.__dataProto),o)lh(i,n),i.__dataTemp={},i.__dataPending=null,i.__dataOld=null,i._enableProperties();else{Object.setPrototypeOf(i,n.prototype);let l=e.hostProps;for(let a in l)if(a="_host_"+a,a in i){let h=i[a];delete i[a],i.__data[a]=h}}}}function uh(i,e){return function(s,r,o){e.call(s.__templatizeOwner,r.substring("_host_".length),o[r])}}function ph(i,e,t,s){let r=t.hostProps||{};for(let o in s.instanceProps){delete r[o];let n=s.notifyInstanceProp;n&&i.prototype._addPropertyEffect(o,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:mh(o,n)})}if(s.forwardHostProp&&e.__dataHost)for(let o in r)t.hasHostProps||(t.hasHostProps=!0),i.prototype._addPropertyEffect(o,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:fh()})}function mh(i,e){return function(s,r,o){e.call(s.__templatizeOwner,s,r,o[r])}}function fh(){return function(e,t,s){e.__dataHost._setPendingPropertyOrPath("_host_"+t,s[t],!0,!0)}}function q(i,e,t){if(D&&!Mo(i))throw new Error("strictTemplatePolicy: template owner not trusted");if(t=t||{},i.__templatizeOwner)throw new Error("A <template> can only be templatized once");i.__templatizeOwner=e;let r=(e?e.constructor:U)._parseTemplate(i),o=r.templatizeInstanceClass;o||(o=dh(i,r,t),r.templatizeInstanceClass=o);let n=Mo(i);ch(i,r,t,n);let l=class extends o{};return l.prototype._methodHost=n,l.prototype.__dataHost=i,l.prototype.__templatizeOwner=e,l.prototype.__hostProps=r.hostProps,l=l,l}function _h(i,e,t){let s=t.constructor._properties,{propertyEffects:r}=i,{instanceProps:o}=e;for(let n in r)if(!s[n]&&!(o&&o[n])){let l=r[n];for(let a=0;a<l.length;a++){let{part:h}=l[a].info;if(!(h.signature&&h.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function is(i,e){let t;for(;e;)if(t=e.__dataHost?e:e.__templatizeInstance)if(t.__dataHost!=i)e=t.__dataHost;else return t;else e=p(e).parentNode;return null}var $t=i=>i.test(navigator.userAgent),ss=i=>i.test(navigator.platform),gh=i=>i.test(navigator.vendor),Jp=$t(/Android/),Kp=$t(/Chrome/)&&gh(/Google Inc/),Xp=$t(/Firefox/),yh=ss(/^iPad/)||ss(/^Mac/)&&navigator.maxTouchPoints>1,bh=ss(/^iPhone/),No=bh||yh,Ro=$t(/^((?!chrome|android).)*safari/i),rs=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();var os=class{static getTabbableNodes(e){let t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&e.matches(':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){let t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;let s=e,r=this._normalizedTabIndex(s),o=r>0;r>=0&&t.push(s);let n;if(s.localName==="slot"?n=s.assignedNodes({flatten:!0}):n=(s.shadowRoot||s).children,n)for(let l=0;l<n.length;l++)o=this._collectTabbableNodes(n[l],t)||o;return o}static _isVisible(e){let t=e.style;return t.visibility!=="hidden"&&t.display!=="none"?(t=window.getComputedStyle(e),t.visibility!=="hidden"&&t.display!=="none"):!1}static _sortByTabIndex(e){let t=e.length;if(t<2)return e;let s=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,s)),o=this._sortByTabIndex(e.slice(s));return this._mergeSortByTabIndex(r,o)}static _mergeSortByTabIndex(e,t){let s=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?s.push(t.shift()):s.push(e.shift());return s.concat(e,t)}static _hasLowerTabOrder(e,t){let s=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return s===0||r===0?r>s:s>r}};var z=class extends Z(se(w)){static get template(){return O`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super();this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new $(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),No&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;let e=window.innerHeight,s=window.innerWidth>e,r=document.documentElement.clientHeight;s&&r>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",r-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(t=>t.localName&&t.localName==="template")[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(e.composedPath().indexOf(this.$.overlay)!==-1||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;let t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(!!this._last){if(e.key==="Tab"&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if(e.key==="Escape"||e.key==="Esc"){let t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),To(this,()=>{this.focusTrap&&!this.contains(document.activeElement)&&this._cycleTab(0,0);let s=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(s)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){let e=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&e&&e!="none"}_enqueueAnimation(e,t){let s=`__${e}Handler`,r=o=>{o&&o.target!==this||(t(),this.removeEventListener("animationend",r),delete this[s])};this[s]=r,this.addEventListener("animationend",r)}_flushAnimation(e){let t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");let e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){let t=this._getActiveElement();(t===document.body||this._deepContains(t))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");let e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof z&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===z.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),z.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);let e=z.__attachedInstances,t;for(;(t=e.pop())&&!(t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!t.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=q(e,this,{instanceProps:t,forwardHostProp:function(r,o){this._instance&&this._instance.forwardHostProp(r,o)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);let s=e._templateRoot||(e._templateRoot=e.getRootNode());if(s!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let r=Array.from(s.querySelectorAll("style")).reduce((o,n)=>o+n.textContent,"");if(r=r.replace(/:host/g,":host-nomatch"),r){let o=document.createElement("style");o.textContent=r,this.$.content.shadowRoot.appendChild(o),this._contentNodes.unshift(o)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,s,r){e!==t?this.template=void 0:s!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,s,r,o,n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");let l=this._oldOwner!==s||this._oldModel!==r;this._oldModel=r,this._oldOwner=s;let a=this._oldInstanceProps!==o||this._oldTemplate!==e;this._oldInstanceProps=o,this._oldTemplate=e;let h=this._oldRenderer!==t;this._oldRenderer=t;let d=this._oldOpened!==n;this._oldOpened=n,h&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&a?this._stampOverlayTemplate(e,o):t&&(h||d||l)&&n&&this.requestContentUpdate()}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return e=e||this._getFocusableElements(),e.indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){let s=this._getFocusableElements();t===void 0&&(t=this._focusedIndex(s)),t+=e,t>=s.length?t=0:t<0&&(t=s.length-1),s[t].focus()}_getFocusableElements(){return os.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e,s=e.ownerDocument;for(;t&&t!==s&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="",t=z.__attachedInstances.filter(s=>s!==this).pop();t&&(e=t.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}};customElements.define(z.is,z);var Ut=f`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;y("",Ut,{moduleId:"lumo-menu-overlay-core"});var vh=f`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,xh=[pe,Ut,vh];y("",xh,{moduleId:"lumo-menu-overlay"});var Ch=f`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  :host([loading]) [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-50pct) var(--lumo-primary-color-50pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    animation: 1s linear infinite lumo-combo-box-loader-rotate, 0.3s 0.1s lumo-combo-box-loader-fade-in both;
    pointer-events: none;
  }

  @keyframes lumo-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-combo-box-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* RTL specific styles */

  :host([loading][dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;y("vaadin-combo-box-overlay",[pe,Ut,Ch],{moduleId:"lumo-combo-box-overlay"});var ko=document.createElement("template");ko.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(ko.content);var ns=f`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;y("vaadin-item",ns,{moduleId:"lumo-item"});var wh=f`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;y("vaadin-combo-box-item",[ns,wh],{moduleId:"lumo-combo-box-item"});var ls=f`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;y("",ls,{moduleId:"lumo-field-button"});var Do=f`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;var as=f`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([required]:not([has-value])) [part='required-indicator']::after {
    opacity: 1;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;y("",as,{moduleId:"lumo-required-field"});var Sh=f`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,hs=[as,ls,Do,Sh];y("",hs,{moduleId:"lumo-input-field-shared-styles"});var Ah=f`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;y("vaadin-combo-box",[hs,Ah],{moduleId:"lumo-combo-box"});var ds=class extends Z(se(w)){static get template(){return O`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;let e=this._comboBox.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;let e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,e)}__rendererOrItemChanged(e,t,s,r,o){s===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}};customElements.define(ds.is,ds);var Lo={start:"top",end:"bottom"},zo={start:"left",end:"right"},Fo=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(positionTarget, horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened)"]}constructor(){super();this.__boundUpdatePosition=this._updatePosition.bind(this)}__overlayOpenedChanged(t){if(["scroll","resize"].forEach(s=>{t?window.addEventListener(s,this.__boundUpdatePosition):window.removeEventListener(s,this.__boundUpdatePosition)}),t){let s=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(s[r],10)})),this.setAttribute("dir",s.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;let t=this.positionTarget.getBoundingClientRect(),s=this.__shouldAlignStartVertically(t);this.style.justifyContent=s?"flex-start":"flex-end";let r=this.__shouldAlignStartHorizontally(t,this.__isRTL),o=!this.__isRTL&&r||this.__isRTL&&!r;this.style.alignItems=o?"flex-start":"flex-end";let n=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(t,n,this.noVerticalOverlap,Lo,this,s),a=this.__calculatePositionInOneDimension(t,n,this.noHorizontalOverlap,zo,this,r);Object.assign(this.style,l,a),this.toggleAttribute("bottom-aligned",!s),this.toggleAttribute("top-aligned",s),this.toggleAttribute("end-aligned",!o),this.toggleAttribute("start-aligned",o)}__shouldAlignStartHorizontally(t,s){let r=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;let o=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!s&&this.horizontalAlign==="start"||s&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,r,o,this.__margins,n,this.noHorizontalOverlap,zo)}__shouldAlignStartVertically(t){let s=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;let r=Math.min(window.innerHeight,document.documentElement.clientHeight),o=this.verticalAlign==="top";return this.__shouldAlignStart(t,s,r,this.__margins,o,this.noVerticalOverlap,Lo)}__shouldAlignStart(t,s,r,o,n,l,a){let h=r-t[l?a.end:a.start]-o[a.end],d=t[l?a.start:a.end]-o[a.start],c=n?h:d,m=c>(n?d:h)||c>s;return n===m}__calculatePositionInOneDimension(t,s,r,o,n,l){let a=l?o.start:o.end,h=l?o.end:o.start,d=parseFloat(n.style[a]||getComputedStyle(n)[a]),c=s[l?o.start:o.end]-t[r===l?o.end:o.start];return{[a]:d+c*(l?-1:1)+"px",[h]:""}}};y("vaadin-combo-box-overlay",f`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});var qt,cs=class extends Fo(z){static get is(){return"vaadin-combo-box-overlay"}static get template(){return qt||(qt=super.template.cloneNode(!0),qt.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),qt}connectedCallback(){super.connectedCallback();let e=this.__dataHost,t=e&&e.getRootNode().host,s=t&&t.getAttribute("dir");s&&this.setAttribute("dir",s)}ready(){super.ready();let e=document.createElement("div");e.setAttribute("part","loader");let t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){let t=e.composedPath();!t.includes(this.positionTarget)&&!t.includes(this)&&this.close()}};customElements.define(cs.is,cs);var Ph=0,Ho=0,ke=[],Eh=0,us=!1,Vo=document.createTextNode("");new window.MutationObserver(Ih).observe(Vo,{characterData:!0});function Ih(){us=!1;let i=ke.length;for(let e=0;e<i;e++){let t=ke[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}ke.splice(0,i),Ho+=i}var lt={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}};var re={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}};var jt={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}};var ps={run(i){return us||(us=!0,Vo.textContent=Eh++),ke.push(i),Ph++},cancel(i){let e=i-Ho;if(e>=0){if(!ke[e])throw new Error("invalid async handle: "+i);ke[e]=null}}};var P=class{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,at.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),at.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,t,s){return e instanceof P?e._cancelAsync():e=new P,e.setConfig(t,s),e}},at=new Set,Wt=function(i){at.add(i)},Th=function(){let i=Boolean(at.size);return at.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),i},j=()=>{let i;do i=Th();while(i)};var Bo=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Oh=Bo&&Bo[1]>=8,$o=3,Uo={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var i=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return i-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var i=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,i-this._physicalCount)},set _virtualStart(i){i=this._clamp(i,0,this._maxVirtualStart),this.grid&&(i=i-i%this._itemsPerRow),this._virtualStartVal=i},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(i){i=i%this._physicalCount,i<0&&(i=this._physicalCount+i),this.grid&&(i=i-i%this._itemsPerRow),this._physicalStartVal=i},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(i){this._physicalCountVal=i},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var i=this._firstVisibleIndexVal;if(i==null){var e=this._physicalTop+this._scrollOffset;i=this._iterateItems(function(t,s){if(e+=this._getPhysicalSizeIncrement(t),e>this._scrollPosition)return this.grid?s-s%this._itemsPerRow:s;if(this.grid&&this._virtualCount-1===s)return s-s%this._itemsPerRow})||0,this._firstVisibleIndexVal=i}return i},get lastVisibleIndex(){var i=this._lastVisibleIndexVal;if(i==null){if(this.grid)i=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems(function(t,s){e<this._scrollBottom&&(i=s),e+=this._getPhysicalSizeIncrement(t)})}this._lastVisibleIndexVal=i}return i},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler:function(){var i=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=i-this._scrollPosition,t=e>=0;if(this._scrollPosition=i,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e=e-this._scrollOffset;var s=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+s,this._physicalStart=this._physicalStart+s,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var r=this._getReusables(t);t?(this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length):(this._virtualStart=this._virtualStart-r.indexes.length,this._physicalStart=this._physicalStart-r.indexes.length),this._update(r.indexes,t?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),ps)}},_getReusables:function(i){var e,t,s,r,o=[],n=this._hiddenContentSize*this._ratio,l=this._virtualStart,a=this._virtualEnd,h=this._physicalCount,d=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,u=this._scrollPosition,m=this._scrollBottom;for(i?(e=this._physicalStart,t=this._physicalEnd,s=u-d):(e=this._physicalEnd,t=this._physicalStart,s=c-m);r=this._getPhysicalSizeIncrement(e),s=s-r,!(o.length>=h||s<=n);)if(i){if(a+o.length+1>=this._virtualCount||d+r>=u-this._scrollOffset)break;o.push(e),d=d+r,e=(e+1)%h}else{if(l-o.length<=0||d+this._physicalSize-r<=m)break;o.push(e),d=d-r,e=e===0?h-1:e-1}return{indexes:o,physicalTop:d-this._scrollOffset}},_update:function(i,e){if(!(i&&i.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(i),this._updateMetrics(i),e)for(;e.length;){var t=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(i){var e=this._clamp(this._physicalCount+i,$o,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var t=e%this._itemsPerRow;t&&e-t<=this._physicalCount&&(e+=this._itemsPerRow),e-=t}var s=e-this._physicalCount,r=Math.round(this._physicalCount*.5);if(!(s<0)){if(s>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(s));for(var n=0;n<s;n++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+s,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+s),this._update(),this._templateCost=(window.performance.now()-o)/s,r=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||r===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),jt):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),ps))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var i=this._getReusables(!0);this._physicalTop=i.physicalTop,this._virtualStart=this._virtualStart+i.indexes.length,this._physicalStart=this._physicalStart+i.indexes.length,this._update(i.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded($o))},_gridChanged:function(i,e){typeof e!="undefined"&&(this.notifyResize(),j(),i&&this._updateGridMetrics())},_itemsChanged:function(i){if(i.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,re);else if(i.path==="items.splices"){this._adjustVirtualIndex(i.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var e=i.value.indexSplices.some(function(r){return r.addedCount>0||r.removed.length>0});if(e){var t=this._getActiveElement();this.contains(t)&&t.blur()}var s=i.value.indexSplices.some(function(r){return r.index+r.addedCount>=this._virtualStart&&r.index<=this._virtualEnd},this);(!this._isClientFull()||s)&&this._debounce("_render",this._render,re)}else i.path!=="items.length"&&this._forwardItemPath(i.path,i.value)},_iterateItems:function(i,e){var t,s,r,o;if(arguments.length===2&&e){for(o=0;o<e.length;o++)if(t=e[o],s=this._computeVidx(t),(r=i.call(this,t,s))!=null)return r}else{for(t=this._physicalStart,s=this._virtualStart;t<this._physicalCount;t++,s++)if((r=i.call(this,t,s))!=null)return r;for(t=0;t<this._physicalStart;t++,s++)if((r=i.call(this,t,s))!=null)return r}},_computeVidx:function(i){return i>=this._physicalStart?this._virtualStart+(i-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+i},_updateMetrics:function(i){j();var e=0,t=0,s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems(function(o,n){t+=this._physicalSizes[o],this._physicalSizes[o]=this._physicalItems[o].offsetHeight,e+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},i),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(t=this._itemsPerRow===1?t:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-t,this._itemsPerRow=1),this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var i=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,t=(this._viewportWidth-e)/2;this._iterateItems(function(s,r){var o=r%this._itemsPerRow,n=Math.floor(o*this._itemWidth+t);this._isRTL&&(n=n*-1),this.translate3d(n+"px",i+"px",0,this._physicalItems[s]),this._shouldRenderNextRow(r)&&(i+=this._rowHeight)})}else{let s=[];this._iterateItems(function(r,o){let n=this._physicalItems[r];this.translate3d(0,i+"px",0,n),i+=this._physicalSizes[r];let l=n.id;l&&s.push(l)}),s.length&&this.setAttribute("aria-owns",s.join(" "))}},_getPhysicalSizeIncrement:function(i){return this.grid?this._computeVidx(i)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[i]},_shouldRenderNextRow:function(i){return i%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var i=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(i!==0){this._physicalTop=this._physicalTop-i;var e=this._scrollPosition;!Oh&&e>0&&this._resetScrollPosition(e-i)}},_resetScrollPosition:function(i){this.scrollTarget&&i>=0&&(this._scrollTop=i,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(i){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,i=i||this._scrollHeight===0,i=i||this._scrollPosition>=this._estScrollHeight-this._physicalSize,i=i||this.grid&&this.$.items.style.height<this._estScrollHeight,(i||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(i){if(!(typeof i!="number"||i<0||i>this.items.length-1)&&(j(),this._physicalCount!==0)){i=this._clamp(i,0,this._virtualCount-1),(!this._isIndexRendered(i)||i>=this._maxVirtualStart)&&(this._virtualStart=this.grid?i-this._itemsPerRow*2:i-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,t=this._virtualStart,s=0,r=this._hiddenContentSize;t<i&&s<=r;)s=s+this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,t++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},re)},updateSizeForItem:function(i){return this.updateSizeForIndex(this.items.indexOf(i))},updateSizeForIndex:function(i){return this._isIndexRendered(i)&&(this._updateMetrics([this._getPhysicalIndex(i)]),this._positionItems()),null},_convertIndexToCompleteRow:function(i){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(i/this._itemsPerRow)*this._itemsPerRow:i},_isIndexRendered:function(i){return i>=this._virtualStart&&i<=this._virtualEnd},_isIndexVisible:function(i){return i>=this.firstVisibleIndex&&i<=this.lastVisibleIndex},_getPhysicalIndex:function(i){return(this._physicalStart+(i-this._virtualStart))%this._physicalCount},_clamp:function(i,e,t){return Math.min(t,Math.max(e,i))},_debounce:function(i,e,t){this._debouncers=this._debouncers||{},this._debouncers[i]=P.debounce(this._debouncers[i],t,e.bind(this)),Wt(this._debouncers[i])}};var Mh=1e5,ms=1e3,Yt=class{constructor({createElements:e,updateElement:t,scrollTarget:s,scrollContainer:r,elementsContainer:o,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=s,this.scrollContainer=r,this.elementsContainer=o||r,this.reorderElements=n,this._maxPages=1.3,this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",l=>this.__onWheel(l)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}_manageFocus(){}_removeFocusedItem(){}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if(typeof e!="number"||isNaN(e)||this.size===0||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);let t=this.__getVisibleElements().length,s=Math.floor(e/this.size*this._virtualCount);this._virtualCount-s<t?(s=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):s<t?e<ms?(s=e,this._vidxOffset=0):(s=ms,this._vidxOffset=e-s):this._vidxOffset=e-s,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(s),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),j(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,t=this.size-1){this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=e&&s.__virtualIndex<=t&&this.__updateElement(s,s.__virtualIndex,!0)})}__updateElement(e,t,s){e.style.minHeight&&(e.style.minHeight=""),!this.__preventElementUpdates&&(e.__lastUpdatedIndex!==t||s)&&(this.updateElement(e,t),e.__lastUpdatedIndex=t),e.offsetHeight===0&&(e.style.minHeight="200px")}__getIndexScrollOffset(e){let t=this.__getVisibleElements().find(s=>s.__virtualIndex===e);return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}set size(e){if(e===this.size)return;this.__preventElementUpdates=!0;let t,s;if(e>0&&(t=this.adjustedFirstVisibleIndex,s=this.__getIndexScrollOffset(t)),this.__size=e,j(),this._itemsChanged({path:"items"}),j(),e>0){t=Math.min(t,e-1),this.scrollToIndex(t);let r=this.__getIndexScrollOffset(t);s!==void 0&&r!==void 0&&(this._scrollTop+=s-r)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),j()}get size(){return this.__size}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,Mh)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){let e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean(e.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){let t=this.createElements(e),s=document.createDocumentFragment();return t.forEach(r=>{r.style.position="absolute",s.appendChild(r),this.__resizeObserver.observe(r)}),this.elementsContainer.appendChild(s),t}_assignModels(e){this._iterateItems((t,s)=>{let r=this._physicalItems[t];r.hidden=s>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex))},e)}_isClientFull(){return setTimeout(()=>this.__clientFull=!0),this.__clientFull||super._isClientFull()}translate3d(e,t,s,r){r.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0)),super._scrollHandler(),this.reorderElements&&(this.__scrollReorderDebouncer=P.debounce(this.__scrollReorderDebouncer,lt.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=t,e.preventDefault();return}t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=P.debounce(this.__debouncerWheelAnimationFrame,re,()=>this._wheelAnimationFrame=!1);let s=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=P.debounce(this._debouncerIgnoreNewWheel,lt.after(this.timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&s<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():s>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=s}_hasScrolledAncestor(e,t,s){if(e===this.scrollTarget||e===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(e,t,s)&&["auto","scroll"].indexOf(getComputedStyle(e).overflow)!==-1)return!0;if(e!==this&&e.parentElement)return this._hasScrolledAncestor(e.parentElement,t,s)}_canScroll(e,t,s){return s>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||s<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_getScrollLineHeight(){let e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);let t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(e=>!e.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;let e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),r=t.find(l=>l.contains(this.elementsContainer.getRootNode().activeElement)||l.contains(this.scrollTarget.getRootNode().activeElement))||t[0];if(!r)return;let o=r.__virtualIndex-e,n=t.indexOf(r)-o;if(n>0)for(let l=0;l<n;l++)this.elementsContainer.appendChild(t[l]);else if(n<0)for(let l=t.length+n;l<t.length;l++)this.elementsContainer.insertBefore(t[l],t[0]);if(Ro){let{transform:l}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>this.scrollTarget.style.transform=l)}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust){this.__skipNextVirtualIndexAdjust=!1;return}else if(Math.abs(e)>1e4){let t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),s=t*this.size;this._vidxOffset=Math.round(s-t*this._virtualCount)}else{let t=this._vidxOffset,s=ms,r=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<s&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset)));let o=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=o,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-s&&this._vidxOffset<o&&(this._vidxOffset+=Math.min(o-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}};Object.setPrototypeOf(Yt.prototype,Uo);var fs=class{constructor(e){this.__adapter=new Yt(e)}set size(e){this.__adapter.size=e}get size(){return this.__adapter.size}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}};var oe=class{toString(){return""}};var _s=class extends w{static get is(){return"vaadin-combo-box-scroller"}static get template(){return O`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super();this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(e){this.__virtualizer&&e&&this.__virtualizer.update()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new fs({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}scrollIntoView(e){if(!(this.opened&&e>=0))return;let t=this._visibleItemsCount(),s=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),s=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(s=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,s));let r=[...this.children].find(a=>!a.hidden&&a.index===this.__virtualizer.lastVisibleIndex);if(!r||e!==r.index)return;let o=r.getBoundingClientRect(),n=this.getBoundingClientRect(),l=o.bottom-n.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}__getAriaRole(e){return e!==void 0?"option":!1}__getAriaSelected(e,t){return this.__isItemFocused(e,t).toString()}__isItemFocused(e,t){return e==t}__isItemSelected(e,t,s){return e instanceof oe?!1:s&&e!==void 0&&t!==void 0?this.get(s,e)===this.get(s,t):e===t}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",e.length),this.__virtualizer.update())}__loadingChanged(e){this.__virtualizer&&!e&&setTimeout(()=>this.__virtualizer.update())}__focusedIndexChanged(e){this.__virtualizer&&e>=0&&(this.__virtualizer.update(),this.scrollIntoView(e))}__rendererChanged(e,t){this.__virtualizer&&(e||t)&&this.__virtualizer.update()}__createElements(e){return[...Array(e)].map(()=>{let t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}__updateElement(e,t){let s=this.items[t],r=this.focusedIndex;e.setProperties({item:s,index:this.__requestItemByIndex(s,t),label:this.getItemLabel(s),selected:this.__isItemSelected(s,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(r,t)}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",this.__getAriaRole(t)),e.setAttribute("aria-selected",this.__getAriaSelected(r,t)),e.setAttribute("aria-posinset",t),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme")}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{let t=this.scrollTop===0,s=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||s&&e.deltaY>0)&&e.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){let e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,s)=>t+s)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(e,t){return e instanceof oe&&t!==void 0&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};customElements.define(_s.is,_s);var me=!(window.ShadyDOM&&window.ShadyDOM.inUse),Gt;function qo(i){i&&i.shimcssproperties?Gt=!1:Gt=me||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}var ne;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(ne=window.ShadyCSS.cssBuild);var Jt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Gt=window.ShadyCSS.nativeCss:window.ShadyCSS?(qo(window.ShadyCSS),window.ShadyCSS=void 0):qo(window.WebComponents&&window.WebComponents.flags);var De=Gt;var gs=class{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}};function ys(i){return i=Nh(i),jo(Rh(i),i)}function Nh(i){return i.replace(Y.comments,"").replace(Y.port,"")}function Rh(i){let e=new gs;e.start=0,e.end=i.length;let t=e;for(let s=0,r=i.length;s<r;s++)if(i[s]===Wo){t.rules||(t.rules=[]);let o=t,n=o.rules[o.rules.length-1]||null;t=new gs,t.start=s+1,t.parent=o,t.previous=n,o.rules.push(t)}else i[s]===Yo&&(t.end=s+1,t=t.parent||e);return e}function jo(i,e){let t=e.substring(i.start,i.end-1);if(i.parsedCssText=i.cssText=t.trim(),i.parent){let r=i.previous?i.previous.end:i.parent.start;t=e.substring(r,i.start-1),t=kh(t),t=t.replace(Y.multipleSpaces," "),t=t.substring(t.lastIndexOf(";")+1);let o=i.parsedSelector=i.selector=t.trim();i.atRule=o.indexOf(Vh)===0,i.atRule?o.indexOf(Hh)===0?i.type=W.MEDIA_RULE:o.match(Y.keyframesRule)&&(i.type=W.KEYFRAMES_RULE,i.keyframesName=i.selector.split(Y.multipleSpaces).pop()):o.indexOf(Go)===0?i.type=W.MIXIN_RULE:i.type=W.STYLE_RULE}let s=i.rules;if(s)for(let r=0,o=s.length,n;r<o&&(n=s[r]);r++)jo(n,e);return i}function kh(i){return i.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}function bs(i,e,t=""){let s="";if(i.cssText||i.rules){let r=i.rules;if(r&&!Dh(r))for(let o=0,n=r.length,l;o<n&&(l=r[o]);o++)s=bs(l,e,s);else s=e?i.cssText:Lh(i.cssText),s=s.trim(),s&&(s="  "+s+`
`)}return s&&(i.selector&&(t+=i.selector+" "+Wo+`
`),t+=s,i.selector&&(t+=Yo+`

`)),t}function Dh(i){let e=i[0];return Boolean(e)&&Boolean(e.selector)&&e.selector.indexOf(Go)===0}function Lh(i){return i=zh(i),Fh(i)}function zh(i){return i.replace(Y.customProp,"").replace(Y.mixinProp,"")}function Fh(i){return i.replace(Y.mixinApply,"").replace(Y.varApply,"")}var W={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Wo="{",Yo="}",Y={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Go="--",Hh="@media",Vh="@";var ht=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Le=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;var Jo=/@media\s(.*)/;var Ko=new Set,Bh="shady-unscoped";function Xo(i){let e=i.textContent;if(!Ko.has(e)){Ko.add(e);let t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function Zo(i){return i.hasAttribute(Bh)}function dt(i,e){return i?(typeof i=="string"&&(i=ys(i)),e&&ze(i,e),bs(i,De)):""}function vs(i){return!i.__cssRules&&i.textContent&&(i.__cssRules=ys(i.textContent)),i.__cssRules||null}function ze(i,e,t,s){if(!i)return;let r=!1,o=i.type;if(s&&o===W.MEDIA_RULE){let l=i.selector.match(Jo);l&&(window.matchMedia(l[1]).matches||(r=!0))}o===W.STYLE_RULE?e(i):t&&o===W.KEYFRAMES_RULE?t(i):o===W.MIXIN_RULE&&(r=!0);let n=i.rules;if(n&&!r)for(let l=0,a=n.length,h;l<a&&(h=n[l]);l++)ze(h,e,t,s)}function $h(i,e){let t=0;for(let s=e,r=i.length;s<r;s++)if(i[s]==="(")t++;else if(i[s]===")"&&--t===0)return s;return-1}function xs(i,e){let t=i.indexOf("var(");if(t===-1)return e(i,"","","");let s=$h(i,t+3),r=i.substring(t+4,s),o=i.substring(0,t),n=xs(i.substring(s+1),e),l=r.indexOf(",");if(l===-1)return e(o,r.trim(),"",n);let a=r.substring(0,l).trim(),h=r.substring(l+1).trim();return e(o,a,h,n)}var Zf=window.ShadyDOM&&window.ShadyDOM.wrap||(i=>i);function Qo(i){let e=i.localName,t="",s="";return e?e.indexOf("-")>-1?t=e:(s=e,t=i.getAttribute&&i.getAttribute("is")||""):(t=i.is,s=i.extends),{is:t,typeExtension:s}}function en(i){let e=[],t=i.querySelectorAll("style");for(let s=0;s<t.length;s++){let r=t[s];Zo(r)?me||(Xo(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}var tn="css-build";function Uh(i){if(ne!==void 0)return ne;if(i.__cssBuild===void 0){let e=i.getAttribute(tn);if(e)i.__cssBuild=e;else{let t=qh(i);t!==""&&jh(i),i.__cssBuild=t}}return i.__cssBuild||""}function Cs(i){return Uh(i)!==""}function qh(i){let e=i.localName==="template"?i.content.firstChild:i.firstChild;if(e instanceof Comment){let t=e.textContent.trim().split(":");if(t[0]===tn)return t[1]}return""}function jh(i){let e=i.localName==="template"?i.content.firstChild:i.firstChild;e.parentNode.removeChild(e)}function ct(i,e){for(let t in e)t===null?i.style.removeProperty(t):i.style.setProperty(t,e[t])}function Kt(i,e){let t=window.getComputedStyle(i).getPropertyValue(e);return t?t.trim():""}function sn(i){let e=Le.test(i)||ht.test(i);return Le.lastIndex=0,ht.lastIndex=0,e}var Wh=/;\s*/m,Yh=/^\s*(initial)|(inherit)\s*$/,rn=/\s*!important/,ws="_-_";var on=class{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}},Xt=null,E=class{constructor(){this._currentElement=null,this._measureElement=null,this._map=new on}detectMixin(e){return sn(e)}gatherStyles(e){let t=en(e.content);if(t){let s=document.createElement("style");return s.textContent=t,e.content.insertBefore(s,e.content.firstChild),s}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));let s=e._gatheredStyle;return s?this.transformStyle(s,t):null}transformStyle(e,t=""){let s=vs(e);return this.transformRules(s,t),e.textContent=dt(s),s}transformCustomStyle(e){let t=vs(e);return ze(t,s=>{s.selector===":root"&&(s.selector="html"),this.transformRule(s)}),e.textContent=dt(t),t}transformRules(e,t){this._currentElement=t,ze(e,s=>{this.transformRule(s)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(ht,(s,r,o,n)=>this._produceCssProperties(s,r,o,n,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;let s={},r=!1;return ze(t,o=>{r=r||o===e,!r&&o.selector===e.selector&&Object.assign(s,this._cssTextToMap(o.parsedCssText))}),s}_consumeCssProperties(e,t){let s=null;for(;s=Le.exec(e);){let r=s[0],o=s[1],n=s.index,l=n+r.indexOf("@apply"),a=n+r.length,h=e.slice(0,l),d=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(h));let u=this._atApplyToCssProperties(o,c);e=`${h}${u}${d}`,Le.lastIndex=n+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Wh,"");let s=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let o,n,l,a=r.properties;for(o in a)l=t&&t[o],n=[o,": var(",e,ws,o],l&&n.push(",",l.replace(rn,"")),n.push(")"),rn.test(a[o])&&n.push(" !important"),s.push(n.join(""))}return s.join("; ")}_replaceInitialOrInherit(e,t){let s=Yh.exec(t);return s&&(s[1]?t=this._getInitialValueForProperty(e):t="apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let s=e.split(";"),r,o,n={};for(let l=0,a,h;l<s.length;l++)a=s[l],a&&(h=a.split(":"),h.length>1&&(r=h[0].trim(),o=h.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(r,o)),n[r]=o));return n}_invalidateMixinEntry(e){if(!!Xt)for(let t in e.dependants)t!==this._currentElement&&Xt(t)}_produceCssProperties(e,t,s,r,o){if(s&&xs(s,(R,S)=>{S&&this._map.get(S)&&(r=`@apply ${S};`)}),!r)return e;let n=this._consumeCssProperties(""+r,o),l=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(n,!0),h=a,d=this._map.get(t),c=d&&d.properties;c?h=Object.assign(Object.create(c),a):this._map.set(t,h);let u=[],m,g,x=!1;for(m in h)g=a[m],g===void 0&&(g="initial"),c&&!(m in c)&&(x=!0),u.push(`${t}${ws}${m}: ${g}`);return x&&this._invalidateMixinEntry(d),d&&(d.properties=h),s&&(l=`${e};${l}`),`${l}${u.join("; ")};`}};E.prototype.detectMixin=E.prototype.detectMixin;E.prototype.transformStyle=E.prototype.transformStyle;E.prototype.transformCustomStyle=E.prototype.transformCustomStyle;E.prototype.transformRules=E.prototype.transformRules;E.prototype.transformRule=E.prototype.transformRule;E.prototype.transformTemplate=E.prototype.transformTemplate;E.prototype._separator=ws;Object.defineProperty(E.prototype,"invalidCallback",{get(){return Xt},set(i){Xt=i}});var nn=E;var Gh={},ut=Gh;var Zt="_applyShimCurrentVersion",Fe="_applyShimNextVersion",Qt="_applyShimValidatingVersion",Jh=Promise.resolve();function ln(i){let e=ut[i];e&&Kh(e)}function Kh(i){i[Zt]=i[Zt]||0,i[Qt]=i[Qt]||0,i[Fe]=(i[Fe]||0)+1}function Ss(i){return i[Zt]===i[Fe]}function an(i){return!Ss(i)&&i[Qt]===i[Fe]}function hn(i){i[Qt]=i[Fe],i._validating||(i._validating=!0,Jh.then(function(){i[Zt]=i[Fe],i._validating=!1}))}var As=null,dn=window.HTMLImports&&window.HTMLImports.whenReady||null,Ps;function ei(i){requestAnimationFrame(function(){dn?dn(i):(As||(As=new Promise(e=>{Ps=e}),document.readyState==="complete"?Ps():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Ps()})),As.then(function(){i&&i()}))})}var cn="__seenByShadyCSS",ti="__shadyCSSCachedStyle",ii=null,pt=null,F=class{constructor(){this.customStyles=[],this.enqueued=!1,ei(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!pt||(this.enqueued=!0,ei(pt))}addCustomStyle(e){e[cn]||(e[cn]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[ti])return e[ti];let t;return e.getStyle?t=e.getStyle():t=e,t}processStyles(){let e=this.customStyles;for(let t=0;t<e.length;t++){let s=e[t];if(s[ti])continue;let r=this.getStyleForCustomStyle(s);if(r){let o=r.__appliedElement||r;ii&&ii(o),s[ti]=o}}return e}};F.prototype.addCustomStyle=F.prototype.addCustomStyle;F.prototype.getStyleForCustomStyle=F.prototype.getStyleForCustomStyle;F.prototype.processStyles=F.prototype.processStyles;Object.defineProperties(F.prototype,{transformCallback:{get(){return ii},set(i){ii=i}},validateCallback:{get(){return pt},set(i){let e=!1;pt||(e=!0),pt=i,e&&this.enqueueDocumentValidation()}}});var mt=new nn,un=class{constructor(){this.customStyleInterface=null,mt.invalidCallback=ln}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{mt.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Cs(e))return;ut[t]=e;let s=mt.transformTemplate(e,t);e._styleAst=s}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(!!this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let s=e[t],r=this.customStyleInterface.getStyleForCustomStyle(s);r&&mt.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&ct(e,t),e.shadowRoot){this.styleElement(e);let s=e.shadowRoot.children||e.shadowRoot.childNodes;for(let r=0;r<s.length;r++)this.styleSubtree(s[r])}else{let s=e.children||e.childNodes;for(let r=0;r<s.length;r++)this.styleSubtree(s[r])}}styleElement(e){this.ensure();let{is:t}=Qo(e),s=ut[t];if(!(s&&Cs(s))&&s&&!Ss(s)){an(s)||(this.prepareTemplate(s,t),hn(s));let r=e.shadowRoot;if(r){let o=r.querySelector("style");o&&(o.__cssRules=s._styleAst,o.textContent=dt(s._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}};if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){let i=new un,e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,s,r){i.flushCustomStyles(),i.prepareTemplate(t,s)},prepareTemplateStyles(t,s,r){window.ShadyCSS.prepareTemplate(t,s,r)},prepareTemplateDom(t,s){},styleSubtree(t,s){i.flushCustomStyles(),i.styleSubtree(t,s)},styleElement(t){i.flushCustomStyles(),i.styleElement(t)},styleDocument(t){i.flushCustomStyles(),i.styleDocument(t)},getComputedStyleValue(t,s){return Kt(t,s)},flushCustomStyles(){i.flushCustomStyles()},nativeCss:De,nativeShadow:me,cssBuild:ne,disableRuntime:Jt},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=mt;var k=class{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,ft.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ft.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,t,s){return e instanceof k?e._cancelAsync():e=new k,e.setConfig(t,s),e}},ft=new Set,He=function(i){ft.add(i)},pn=function(){let i=Boolean(ft.size);return ft.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),i};var Es=typeof document.head.style.touchAction=="string",si="__polymerGestures",ri="__polymerGesturesHandled",Is="__polymerGesturesTouchAction",mn=25,fn=5,Zh=2,Qh=2500,_n=["mousedown","mousemove","mouseup","click"],ed=[0,1,4,2],td=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Ts(i){return _n.indexOf(i)>-1}var Os=!1;(function(){try{let i=Object.defineProperty({},"passive",{get(){Os=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function gn(i){if(!(Ts(i)||i==="touchend")&&Es&&Os&&Fr)return{passive:!0}}var yn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Ms=[],id={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},sd={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function rd(i){return id[i.localName]||!1}function od(i){let e=Array.prototype.slice.call(i.labels||[]);if(!e.length){e=[];let t=i.getRootNode();if(i.id){let s=t.querySelectorAll(`label[for = ${i.id}]`);for(let r=0;r<s.length;r++)e.push(s[r])}}return e}var bn=function(i){let e=i.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(i[ri]={skip:!0},i.type==="click")){let t=!1,s=oi(i);for(let r=0;r<s.length;r++){if(s[r].nodeType===Node.ELEMENT_NODE){if(s[r].localName==="label")Ms.push(s[r]);else if(rd(s[r])){let o=od(s[r]);for(let n=0;n<o.length;n++)t=t||Ms.indexOf(o[n])>-1}}if(s[r]===I.mouse.target)return}if(t)return;i.preventDefault(),i.stopPropagation()}};function vn(i){let e=yn?["click"]:_n;for(let t=0,s;t<e.length;t++)s=e[t],i?(Ms.length=0,document.addEventListener(s,bn,!0)):document.removeEventListener(s,bn,!0)}function nd(i){if(!Mi)return;I.mouse.mouseIgnoreJob||vn(!0);let e=function(){vn(),I.mouse.target=null,I.mouse.mouseIgnoreJob=null};I.mouse.target=oi(i)[0],I.mouse.mouseIgnoreJob=k.debounce(I.mouse.mouseIgnoreJob,ee.after(Qh),e)}function fe(i){let e=i.type;if(!Ts(e))return!1;if(e==="mousemove"){let t=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!td&&(t=ed[i.which]||0),Boolean(t&1)}else return(i.button===void 0?0:i.button)===0}function ld(i){if(i.type==="click"){if(i.detail===0)return!0;let e=le(i);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let t=e.getBoundingClientRect(),s=i.pageX,r=i.pageY;return!(s>=t.left&&s<=t.right&&r>=t.top&&r<=t.bottom)}return!1}var I={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ad(i){let e="auto",t=oi(i);for(let s=0,r;s<t.length;s++)if(r=t[s],r[Is]){e=r[Is];break}return e}function xn(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function Ve(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}Mi&&document.addEventListener("touchend",nd,Os?{passive:!0}:!1);var oi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],_t={},_e=[];function hd(i,e){let t=document.elementFromPoint(i,e),s=t;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(i,e),r===s)break;s&&(t=s)}return t}function le(i){let e=oi(i);return e.length>0?e[0]:i.target}function Cn(i){let e,t=i.type,r=i.currentTarget[si];if(!r)return;let o=r[t];if(!!o){if(!i[ri]&&(i[ri]={},t.slice(0,5)==="touch")){i=i;let n=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(I.touch.id=n.identifier),I.touch.id!==n.identifier)return;Es||(t==="touchstart"||t==="touchmove")&&dd(i)}if(e=i[ri],!e.skip){for(let n=0,l;n<_e.length;n++)l=_e[n],o[l.name]&&!e[l.name]&&l.flow&&l.flow.start.indexOf(i.type)>-1&&l.reset&&l.reset();for(let n=0,l;n<_e.length;n++)l=_e[n],o[l.name]&&!e[l.name]&&(e[l.name]=!0,l[t](i))}}}function dd(i){let e=i.changedTouches[0],t=i.type;if(t==="touchstart")I.touch.x=e.clientX,I.touch.y=e.clientY,I.touch.scrollDecided=!1;else if(t==="touchmove"){if(I.touch.scrollDecided)return;I.touch.scrollDecided=!0;let s=ad(i),r=!1,o=Math.abs(I.touch.x-e.clientX),n=Math.abs(I.touch.y-e.clientY);i.cancelable&&(s==="none"?r=!0:s==="pan-x"?r=n>o:s==="pan-y"&&(r=o>n)),r?i.preventDefault():ni("track")}}function wn(i,e,t){return _t[e]?(cd(i,e,t),!0):!1}function Sn(i,e,t){return _t[e]?(ud(i,e,t),!0):!1}function cd(i,e,t){let s=_t[e],r=s.deps,o=s.name,n=i[si];n||(i[si]=n={});for(let l=0,a,h;l<r.length;l++)a=r[l],!(yn&&Ts(a)&&a!=="click")&&(h=n[a],h||(n[a]=h={_count:0}),h._count===0&&i.addEventListener(a,Cn,gn(a)),h[o]=(h[o]||0)+1,h._count=(h._count||0)+1);i.addEventListener(e,t),s.touchAction&&Rs(i,s.touchAction)}function ud(i,e,t){let s=_t[e],r=s.deps,o=s.name,n=i[si];if(n)for(let l=0,a,h;l<r.length;l++)a=r[l],h=n[a],h&&h[o]&&(h[o]=(h[o]||1)-1,h._count=(h._count||1)-1,h._count===0&&i.removeEventListener(a,Cn,gn(a)));i.removeEventListener(e,t)}function Ns(i){_e.push(i);for(let e=0;e<i.emits.length;e++)_t[i.emits[e]]=i}function pd(i){for(let e=0,t;e<_e.length;e++){t=_e[e];for(let s=0,r;s<t.emits.length;s++)if(r=t.emits[s],r===i)return t}return null}function Rs(i,e){Es&&i instanceof HTMLElement&&T.run(()=>{i.style.touchAction=e}),i[Is]=e}function ks(i,e,t){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=t,p(i).dispatchEvent(s),s.defaultPrevented){let r=t.preventer||t.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function ni(i){let e=pd(i);e.info&&(e.info.prevent=!0)}Ns({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ve(this.info)},mousedown:function(i){if(!fe(i))return;let e=le(i),t=this,s=function(n){fe(n)||(gt("up",e,n),Ve(t.info))},r=function(n){fe(n)&&gt("up",e,n),Ve(t.info)};xn(this.info,s,r),gt("down",e,i)},touchstart:function(i){gt("down",le(i),i.changedTouches[0],i)},touchend:function(i){gt("up",le(i),i.changedTouches[0],i)}});function gt(i,e,t,s){!e||ks(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s,prevent:function(r){return ni(r)}})}Ns({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(i){this.moves.length>Zh&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ve(this.info)},mousedown:function(i){if(!fe(i))return;let e=le(i),t=this,s=function(n){let l=n.clientX,a=n.clientY;An(t.info,l,a)&&(t.info.state=t.info.started?n.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&ni("tap"),t.info.addMove({x:l,y:a}),fe(n)||(t.info.state="end",Ve(t.info)),e&&Ds(t.info,e,n),t.info.started=!0)},r=function(n){t.info.started&&s(n),Ve(t.info)};xn(this.info,s,r),this.info.x=i.clientX,this.info.y=i.clientY},touchstart:function(i){let e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(i){let e=le(i),t=i.changedTouches[0],s=t.clientX,r=t.clientY;An(this.info,s,r)&&(this.info.state==="start"&&ni("tap"),this.info.addMove({x:s,y:r}),Ds(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend:function(i){let e=le(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),Ds(this.info,e,t))}});function An(i,e,t){if(i.prevent)return!1;if(i.started)return!0;let s=Math.abs(i.x-e),r=Math.abs(i.y-t);return s>=fn||r>=fn}function Ds(i,e,t){if(!e)return;let s=i.moves[i.moves.length-2],r=i.moves[i.moves.length-1],o=r.x-i.x,n=r.y-i.y,l,a=0;s&&(l=r.x-s.x,a=r.y-s.y),ks(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:o,dy:n,ddx:l,ddy:a,sourceEvent:t,hover:function(){return hd(t.clientX,t.clientY)}})}Ns({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(i){fe(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click:function(i){fe(i)&&Pn(this.info,i)},touchstart:function(i){let e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(i){Pn(this.info,i.changedTouches[0],i)}});function Pn(i,e,t){let s=Math.abs(e.clientX-i.x),r=Math.abs(e.clientY-i.y),o=le(t||e);!o||sd[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=mn&&r<=mn||ld(e))&&(i.prevent||ks(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}var li=_(i=>{class e extends i{_addEventListenerToNode(s,r,o){wn(s,r,o)||super._addEventListenerToNode(s,r,o)}_removeEventListenerFromNode(s,r,o){Sn(s,r,o)||super._removeEventListenerFromNode(s,r,o)}}return e});var md=/:host\(:dir\((ltr|rtl)\)\)/g,fd=':host([dir="$1"])',_d=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,gd=':host([dir="$2"]) $1',yd=/:dir\((?:ltr|rtl)\)/,En=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),yt=[],bt=null,Ls="";function In(){Ls=document.documentElement.getAttribute("dir")}function Tn(i){i.__autoDirOptOut||i.setAttribute("dir",Ls)}function On(){In(),Ls=document.documentElement.getAttribute("dir");for(let i=0;i<yt.length;i++)Tn(yt[i])}function bd(){bt&&bt.takeRecords().length&&On()}var Mn=_(i=>{En||bt||(In(),bt=new MutationObserver(On),bt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));let e=Lt(i);class t extends e{static _processStyleText(r,o){return r=e._processStyleText.call(this,r,o),!En&&yd.test(r)&&(r=this._replaceDirInCssText(r),this.__activateDir=!0),r}static _replaceDirInCssText(r){let o=r;return o=o.replace(md,fd),o=o.replace(_d,gd),o}constructor(){super();this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(bd(),yt.push(this),Tn(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){let r=yt.indexOf(this);r>-1&&yt.splice(r,1)}}}return t.__activateDir=!1,t});function Nn(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Nn():window.addEventListener("DOMContentLoaded",Nn);var vt=function(){let i,e;do i=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=pn();while(i||e)};var Be=Element.prototype,vd=Be.matches||Be.matchesSelector||Be.mozMatchesSelector||Be.msMatchesSelector||Be.oMatchesSelector||Be.webkitMatchesSelector,zs=function(i,e){return vd.call(i,e)},v=class{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new $(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(p(this.node).contains(e))return!0;let t=e,s=e.ownerDocument;for(;t&&t!==s&&t!==this.node;)t=p(t).parentNode||p(t).host;return t===this.node}getOwnerRoot(){return p(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?p(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=p(this.node).assignedSlot;for(;t;)e.push(t),t=p(t).assignedSlot;return e}importNode(e,t){let s=this.node instanceof Document?this.node:this.node.ownerDocument;return p(s).importNode(e,t)}getEffectiveChildNodes(){return $.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),s=[];for(let r=0,o=t.length,n;r<o&&(n=t[r]);r++)n.nodeType===Node.ELEMENT_NODE&&zs(n,e)&&s.push(n);return s}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}};function xd(i,e){for(let t=0;t<e.length;t++){let s=e[t];i[s]=function(){return this.node[s].apply(this.node,arguments)}}}function Rn(i,e){for(let t=0;t<e.length;t++){let s=e[t];Object.defineProperty(i,s,{get:function(){return this.node[s]},configurable:!0})}}function Cd(i,e){for(let t=0;t<e.length;t++){let s=e[t];Object.defineProperty(i,s,{get:function(){return this.node[s]},set:function(r){this.node[s]=r},configurable:!0})}}var ai=class{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}};v.prototype.cloneNode;v.prototype.appendChild;v.prototype.insertBefore;v.prototype.removeChild;v.prototype.replaceChild;v.prototype.setAttribute;v.prototype.removeAttribute;v.prototype.querySelector;v.prototype.querySelectorAll;v.prototype.parentNode;v.prototype.firstChild;v.prototype.lastChild;v.prototype.nextSibling;v.prototype.previousSibling;v.prototype.firstElementChild;v.prototype.lastElementChild;v.prototype.nextElementSibling;v.prototype.previousElementSibling;v.prototype.childNodes;v.prototype.children;v.prototype.classList;v.prototype.textContent;v.prototype.innerHTML;var Fs=v;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class i extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(v.prototype).forEach(e=>{e!="activeElement"&&(i.prototype[e]=v.prototype[e])}),Rn(i.prototype,["classList"]),Fs=i,Object.defineProperties(ai.prototype,{localTarget:{get(){let e=this.event.currentTarget,t=e&&G(e).getOwnerRoot(),s=this.path;for(let r=0;r<s.length;r++){let o=s[r];if(G(o).getOwnerRoot()===t)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else xd(v.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Rn(v.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),Cd(v.prototype,["textContent","innerHTML","className"]);var G=function(i){if(i=i||document,i instanceof Fs||i instanceof ai)return i;let e=i.__domApi;return e||(i instanceof Event?e=new ai(i):e=new Fs(i),i.__domApi=e),e};var Hs=window.ShadyDOM,kn=window.ShadyCSS;function Dn(i,e){return p(i).getRootNode()===e}function Ln(i,e=!1){if(!Hs||!kn||!Hs.handlesDynamicScoping)return null;let t=kn.ScopingShim;if(!t)return null;let s=t.scopeForNode(i),r=p(i).getRootNode(),o=n=>{if(!Dn(n,r))return;let l=Array.from(Hs.nativeMethods.querySelectorAll.call(n,"*"));l.push(n);for(let a=0;a<l.length;a++){let h=l[a];if(!Dn(h,r))continue;let d=t.currentScopeForNode(h);d!==s&&(d!==""&&t.unscopeNode(h,d),t.scopeNode(h,s))}};if(o(i),e){let n=new MutationObserver(l=>{for(let a=0;a<l.length;a++){let h=l[a];for(let d=0;d<h.addedNodes.length;d++){let c=h.addedNodes[d];c.nodeType===Node.ELEMENT_NODE&&o(c)}}});return n.observe(i,{childList:!0,subtree:!0}),n}else return null}var Vs="disable-upgrade",Bs=i=>{for(;i;){let e=Object.getOwnPropertyDescriptor(i,"observedAttributes");if(e)return e.get;i=Object.getPrototypeOf(i.prototype).constructor}return()=>[]},ig=_(i=>{let e=te(i),t=Bs(e);class s extends e{constructor(){super();this.__isUpgradeDisabled}static get observedAttributes(){return t.call(this).concat(Vs)}_initializeProperties(){this.hasAttribute(Vs)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}attributeChangedCallback(o,n,l,a){o==Vs?this.__isUpgradeDisabled&&l==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,p(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(o,n,l,a)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return s});var hi="disable-upgrade",wd=window.ShadyCSS,xt=_(i=>{let e=li(te(i)),t=Ft?e:Mn(e),s=Bs(t),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends t{constructor(){super();this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(l,a,h){(this.__dataAttributes&&this.__dataAttributes[l]||l===hi)&&this.attributeChangedCallback(l,a,h,null)}setAttribute(l,a){if(Qe&&!this._legacyForceObservedAttributes){let h=this.getAttribute(l);super.setAttribute(l,a),this.__attributeReaction(l,h,String(a))}else super.setAttribute(l,a)}removeAttribute(l){if(Qe&&!this._legacyForceObservedAttributes){let a=this.getAttribute(l);super.removeAttribute(l),this.__attributeReaction(l,a,null)}else super.removeAttribute(l)}static get observedAttributes(){return Qe&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],zt(this.prototype)),this.__observedAttributes):s.call(this).concat(hi)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(l){return super._canApplyPropertyDefault(l)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(l))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(l,a,h,d){a!==h&&(l==hi?this.__isUpgradeDisabled&&h==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,p(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(l,a,h,d),this.attributeChanged(l,a,h)))}attributeChanged(l,a,h){}_initializeProperties(){if(B&&this.hasAttribute(hi))this.__isUpgradeDisabled=!0;else{let l=Object.getPrototypeOf(this);l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))||(this._registered(),l.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Qe&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){let l=this.attributes;for(let a=0,h=l.length;a<h;a++){let d=l[a];this.__attributeReaction(d.name,null,d.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(l){return this._serializeValue(l)}deserialize(l,a){return this._deserializeValue(l,a)}reflectPropertyToAttribute(l,a,h){this._propertyToAttribute(l,a,h)}serializeValueToAttribute(l,a,h){this._valueToNodeAttribute(h||this,l,a)}extend(l,a){if(!(l&&a))return l||a;let h=Object.getOwnPropertyNames(a);for(let d=0,c;d<h.length&&(c=h[d]);d++){let u=Object.getOwnPropertyDescriptor(a,c);u&&Object.defineProperty(l,c,u)}return l}mixin(l,a){for(let h in a)l[h]=a[h];return l}chainObject(l,a){return l&&a&&l!==a&&(l.__proto__=a),l}instanceTemplate(l){let a=this.constructor._contentForTemplate(l);return document.importNode(a,!0)}fire(l,a,h){h=h||{},a=a??{};let d=new Event(l,{bubbles:h.bubbles===void 0?!0:h.bubbles,cancelable:Boolean(h.cancelable),composed:h.composed===void 0?!0:h.composed});d.detail=a;let c=h.node||this;return p(c).dispatchEvent(d),d}listen(l,a,h){l=l||this;let d=this.__boundListeners||(this.__boundListeners=new WeakMap),c=d.get(l);c||(c={},d.set(l,c));let u=a+h;c[u]||(c[u]=this._addMethodEventListenerToNode(l,a,h,this))}unlisten(l,a,h){l=l||this;let d=this.__boundListeners&&this.__boundListeners.get(l),c=a+h,u=d&&d[c];u&&(this._removeEventListenerFromNode(l,a,u),d[c]=null)}setScrollDirection(l,a){Rs(a||this,r[l]||"auto")}$$(l){return this.root.querySelector(l)}get domHost(){let l=p(this).getRootNode();return l instanceof DocumentFragment?l.host:l}distributeContent(){let a=G(this);window.ShadyDOM&&a.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return G(this).getEffectiveChildNodes()}queryDistributedElements(l){return G(this).queryDistributedElements(l)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(a){return a.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let l=this.getEffectiveChildNodes(),a=[];for(let h=0,d;d=l[h];h++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}queryEffectiveChildren(l){let a=this.queryDistributedElements(l);return a&&a[0]}queryAllEffectiveChildren(l){return this.queryDistributedElements(l)}getContentChildNodes(l){let a=this.root.querySelector(l||"slot");return a?G(a).getDistributedNodes():[]}getContentChildren(l){return this.getContentChildNodes(l).filter(function(h){return h.nodeType===Node.ELEMENT_NODE})}isLightDescendant(l){let a=this;return a!==l&&p(a).contains(l)&&p(a).getRootNode()===p(l).getRootNode()}isLocalDescendant(l){return this.root===p(l).getRootNode()}scopeSubtree(l,a=!1){return Ln(l,a)}getComputedStyleValue(l){return wd.getComputedStyleValue(this,l)}debounce(l,a,h){return this._debouncers=this._debouncers||{},this._debouncers[l]=k.debounce(this._debouncers[l],h>0?ee.after(h):T,a.bind(this))}isDebouncerActive(l){this._debouncers=this._debouncers||{};let a=this._debouncers[l];return!!(a&&a.isActive())}flushDebouncer(l){this._debouncers=this._debouncers||{};let a=this._debouncers[l];a&&a.flush()}cancelDebouncer(l){this._debouncers=this._debouncers||{};let a=this._debouncers[l];a&&a.cancel()}async(l,a){return a>0?ee.run(l.bind(this),a):~T.run(l.bind(this))}cancelAsync(l){l<0?T.cancel(~l):ee.cancel(l)}create(l,a){let h=document.createElement(l);if(a)if(h.setProperties)h.setProperties(a);else for(let d in a)h[d]=a[d];return h}elementMatches(l,a){return zs(a||this,l)}toggleAttribute(l,a){let h=this;return arguments.length===3&&(h=arguments[2]),arguments.length==1&&(a=!h.hasAttribute(l)),a?(p(h).setAttribute(l,""),!0):(p(h).removeAttribute(l),!1)}toggleClass(l,a,h){h=h||this,arguments.length==1&&(a=!h.classList.contains(l)),a?h.classList.add(l):h.classList.remove(l)}transform(l,a){a=a||this,a.style.webkitTransform=l,a.style.transform=l}translate3d(l,a,h,d){d=d||this,this.transform("translate3d("+l+","+a+","+h+")",d)}arrayDelete(l,a){let h;if(Array.isArray(l)){if(h=l.indexOf(a),h>=0)return l.splice(h,1)}else if(h=A(this,l).indexOf(a),h>=0)return this.splice(l,h,1);return null}_logger(l,a){switch(Array.isArray(a)&&a.length===1&&Array.isArray(a[0])&&(a=a[0]),l){case"log":case"warn":case"error":console[l](...a)}}_log(...l){this._logger("log",l)}_warn(...l){this._logger("warn",l)}_error(...l){this._logger("error",l)}_logf(l,...a){return["[%s::%s]",this.is,l,...a]}}return o.prototype.is="",o});var Sd={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},zn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Ad=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},zn);function Pd(i,e,t){let s=i._noAccessors,r=Object.getOwnPropertyNames(i);for(let o=0;o<r.length;o++){let n=r[o];if(!(n in t))if(s)e[n]=i[n];else{let l=Object.getOwnPropertyDescriptor(i,n);l&&(l.configurable=!0,Object.defineProperty(e,n,l))}}}function Fn(i,e){return Un({},xt(e),i)}function Ed(i,e,t){for(let s=0;s<e.length;s++)Hn(i,e[s],t,Ad)}function Hn(i,e,t,s){Pd(e,i,s);for(let r in Sd)e[r]&&(t[r]=t[r]||[],t[r].push(e[r]))}function Vn(i,e,t){e=e||[];for(let s=i.length-1;s>=0;s--){let r=i[s];r?Array.isArray(r)?Vn(r,e):e.indexOf(r)<0&&(!t||t.indexOf(r)<0)&&e.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return e}function Bn(i,e){for(let t in e){let s=i[t],r=e[t];!("value"in r)&&s&&"value"in s?i[t]=Object.assign({value:s.value},r):i[t]=r}}var $n=xt(HTMLElement);function Un(i,e,t){let s,r={};class o extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(s)for(let a=0,h;a<s.length;a++)h=s[a],h.properties&&this.createProperties(h.properties),h.observers&&this.createObservers(h.observers,h.properties);i.properties&&this.createProperties(i.properties),i.observers&&this.createObservers(i.observers,i.properties),this._prepareTemplate()}}static get properties(){let a={};if(s)for(let h=0;h<s.length;h++)Bn(a,s[h].properties);return Bn(a,i.properties),a}static get observers(){let a=[];if(s)for(let h=0,d;h<s.length;h++)d=s[h],d.observers&&(a=a.concat(d.observers));return i.observers&&(a=a.concat(i.observers)),a}created(){super.created();let a=r.created;if(a)for(let h=0;h<a.length;h++)a[h].call(this)}_registered(){let a=o.prototype;if(!a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))){a.__hasRegisterFinished=!0,super._registered(),B&&n(a);let h=Object.getPrototypeOf(this),d=r.beforeRegister;if(d)for(let c=0;c<d.length;c++)d[c].call(h);if(d=r.registered,d)for(let c=0;c<d.length;c++)d[c].call(h)}}_applyListeners(){super._applyListeners();let a=r.listeners;if(a)for(let h=0;h<a.length;h++){let d=a[h];if(d)for(let c in d)this._addMethodEventListenerToNode(this,c,d[c])}}_ensureAttributes(){let a=r.hostAttributes;if(a)for(let h=a.length-1;h>=0;h--){let d=a[h];for(let c in d)this._ensureAttribute(c,d[c])}super._ensureAttributes()}ready(){super.ready();let a=r.ready;if(a)for(let h=0;h<a.length;h++)a[h].call(this)}attached(){super.attached();let a=r.attached;if(a)for(let h=0;h<a.length;h++)a[h].call(this)}detached(){super.detached();let a=r.detached;if(a)for(let h=0;h<a.length;h++)a[h].call(this)}attributeChanged(a,h,d){super.attributeChanged();let c=r.attributeChanged;if(c)for(let u=0;u<c.length;u++)c[u].call(this,a,h,d)}}if(t){Array.isArray(t)||(t=[t]);let l=e.prototype.behaviors;s=Vn(t,null,l),o.prototype.behaviors=l?l.concat(t):s}let n=l=>{s&&Ed(l,s,r),Hn(l,i,r,zn)};return B||n(o.prototype),o.generatedFrom=i,o}var qn=function(i,e){i||console.warn("Polymer.Class requires `info` argument");let t=e?e($n):$n;return t=Un(i,t,i.behaviors),t.is=t.prototype.is=i.is,t};var $s=function(i){let e;return typeof i=="function"?e=i:e=$s.Class(i),i._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=i._legacyForceObservedAttributes),customElements.define(e.is,e),e};$s.Class=qn;var jn=!1;function $e(){if(B&&!Ke){if(!jn){jn=!0;let i=document.createElement("style");i.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(i)}return!0}return!1}var Id=li(Bt(ue(HTMLElement))),Wn=class extends Id{static get observedAttributes(){return["mutable-data"]}constructor(){super();if(D)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,s,r){this.mutableData=!0}connectedCallback(){$e()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){p(p(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),e)t.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});t.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}};customElements.define("dom-bind",Wn);var Td=Bt(w),Us=class extends Td{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Ze,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),$e()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=p(p(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this,t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let r=new MutationObserver(()=>{if(this.querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return r.observe(this,{childList:!0}),!1}let s={};s[this.as]=!0,s[this.indexAs]=!0,s[this.itemsIndexAs]=!0,this.__ctor=q(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:s,forwardHostProp:function(r,o){let n=this.__instances;for(let l=0,a;l<n.length&&(a=n[l]);l++)a.forwardHostProp(r,o)},notifyInstanceProp:function(r,o,n){if(Xr(this.as,o)){let l=r[this.itemsIndexAs];o==this.as&&(this.items[l]=n);let a=ce(this.as,`${JSCompiler_renameProperty("items",this)}.${l}`,o);this.notifyPath(a,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let t=e,s=this.__getMethodHost();return function(){return s[t].apply(s,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let s=0;s<t.length;s++)e.indexOf(t[s])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=k.debounce(this.__renderDebouncer,t>0?ee.after(t):T,e.bind(this)),He(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),vt()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[],t=this.__sortAndFilterItems(e),s=this.__calculateLimit(t.length);this.__updateInstances(e,s,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),(!Ze||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let s=0;s<e.length;s++)t[s]=s;return this.__filterFn&&(t=t.filter((s,r,o)=>this.__filterFn(e[s],r,o))),this.__sortFn&&t.sort((s,r)=>this.__sortFn(e[s],e[r])),t}__calculateLimit(e){let t=e,s=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),r=Math.max(t-s,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-s,0),this.__chunkCount),t=Math.min(s+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){let e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,s){let r=this.__itemsIdxToInstIdx={},o;for(o=0;o<t;o++){let n=this.__instances[o],l=s[o],a=e[l];r[l]=o,n?(n._setPendingProperty(this.as,a),n._setPendingProperty(this.indexAs,o),n._setPendingProperty(this.itemsIndexAs,l),n._flushProperties()):this.__insertInstance(a,o,l)}for(let n=this.__instances.length-1;n>=o;n--)this.__detachAndRemoveInstance(n)}__detachInstance(e){let t=this.__instances[e],s=p(t.root);for(let r=0;r<t.children.length;r++){let o=t.children[r];s.appendChild(o)}return t}__attachInstance(e,t){let s=this.__instances[e];t.insertBefore(s.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,s){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=s,new this.__ctor(r)}__insertInstance(e,t,s){let r=this.__stampInstance(e,t,s),o=this.__instances[t+1],n=o?o.children[0]:this;return p(p(this).parentNode).insertBefore(r.root,n),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let s=e.slice(6),r=s.indexOf("."),o=r<0?s:s.substring(0,r);if(o==parseInt(o,10)){let n=r<0?"":s.substring(r+1);this.__handleObservedPaths(n);let l=this.__itemsIdxToInstIdx[o],a=this.__instances[l];if(a){let h=this.as+(n?"."+n:"");a._setPendingPropertyOrPath(h,t,!1,!0),a._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return is(this.template,e)}};customElements.define(Us.is,Us);var qs=class extends w{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super();this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=k.debounce(this.__renderDebouncer,T,()=>this.__render()),He(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();let e=p(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!p(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),$e()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){let e=this,t=e._templateInfo?e:p(e).querySelector("template");if(!t){let s=new MutationObserver(()=>{if(p(this).querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return s.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=p(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&p(this).previousSibling!==t[t.length-1])for(let r=0,o;r<t.length&&(o=t[r]);r++)p(e).insertBefore(o,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){vt()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Ze||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}},Yn=class extends qs{constructor(){super();this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){let t=this.__dataHost||this;if(D&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");let s=t._bindTemplate(this.__template,!0);s.runEffects=(r,o,n)=>{let l=this.__syncInfo;if(this.if)l&&(this.__syncInfo=null,this._showHideChildren(),o=Object.assign(l.changedProps,o)),r(o,n);else if(this.__instance)if(l||(l=this.__syncInfo={runEffects:r,changedProps:{}}),n)for(let a in o){let h=L(a);l.changedProps[h]=this.__dataHost[h]}else Object.assign(l.changedProps,o)},this.__instance=t._stampTemplate(this.__template,s),p(e).insertBefore(this.__instance,this)}__syncHostProperties(){let e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){let e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,ts(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}},Gn=class extends qs{constructor(){super();this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=q(this.__template,this,{mutableData:!0,forwardHostProp:function(t,s){this.__instance&&(this.if?this.__instance.forwardHostProp(t,s):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[L(t)]=!0))}})),this.__instance=new this.__ctor,p(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=p(e[0]).parentNode;if(t){t=p(t);for(let s=0,r;s<e.length&&(r=e[s]);s++)t.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}},Jn=Tt?Yn:Gn;customElements.define(Jn.is,Jn);var Od=_(i=>{let e=te(i);class t extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(r,o){let n=o.path;if(n==JSCompiler_renameProperty("items",this)){let l=o.base||[],a=this.__lastItems,h=this.__lastMulti;if(r!==h&&this.clearSelection(),a){let d=Vt(l,a);this.__applySplices(d)}this.__lastItems=l,this.__lastMulti=r}else if(o.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(o.value.indexSplices);else{let l=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),a=parseInt(l,10);l.indexOf(".")<0&&l==a&&this.__deselectChangedIdx(a)}}__applySplices(r){let o=this.__selectedMap;for(let l=0;l<r.length;l++){let a=r[l];o.forEach((h,d)=>{h<a.index||(h>=a.index+a.removed.length?o.set(d,h+a.addedCount-a.removed.length):o.set(d,-1))});for(let h=0;h<a.addedCount;h++){let d=a.index+h;o.has(this.items[d])&&o.set(this.items[d],d)}}this.__updateLinks();let n=0;o.forEach((l,a)=>{l<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,o.delete(a)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let r=0;this.__selectedMap.forEach(o=>{o>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${o}`,`${JSCompiler_renameProperty("selected",this)}.${r++}`)})}else this.__selectedMap.forEach(r=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${r}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${r}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(r){return this.__selectedMap.has(r)}isIndexSelected(r){return this.isSelected(this.items[r])}__deselectChangedIdx(r){let o=this.__selectedIndexForItemIndex(r);if(o>=0){let n=0;this.__selectedMap.forEach((l,a)=>{o==n++&&this.deselect(a)})}}__selectedIndexForItemIndex(r){let o=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${r}`];if(o)return parseInt(o.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(r){let o=this.__selectedMap.get(r);if(o>=0){this.__selectedMap.delete(r);let n;this.multi&&(n=this.__selectedIndexForItemIndex(o)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(r){this.deselect(this.items[r])}select(r){this.selectIndex(this.items.indexOf(r))}selectIndex(r){let o=this.items[r];this.isSelected(o)?this.toggle&&this.deselectIndex(r):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(o,r),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),o):this.selected=this.selectedItem=o)}}return t});var Md=Od(w),js=class extends Md{static get is(){return"array-selector"}static get template(){return null}};customElements.define(js.is,js);var di=new F;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(i,e,t){},prepareTemplateDom(i,e){},prepareTemplateStyles(i,e,t){},styleSubtree(i,e){di.processStyles(),ct(i,e)},styleElement(i){di.processStyles()},styleDocument(i){di.processStyles(),ct(document.body,i)},getComputedStyleValue(i,e){return Kt(i,e)},flushCustomStyles(){},nativeCss:De,nativeShadow:me,cssBuild:ne,disableRuntime:Jt});window.ShadyCSS.CustomStyleInterface=di;var Kn="include",Nd=window.ShadyCSS.CustomStyleInterface,Xn=class extends HTMLElement{constructor(){super();this._style=null,Nd.addCustomStyle(this)}getStyle(){if(this._style)return this._style;let e=this.querySelector("style");if(!e)return null;this._style=e;let t=e.getAttribute(Kn);return t&&(e.removeAttribute(Kn),e.textContent=Kr(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}};window.customElements.define("custom-style",Xn);var Rd;(()=>{Rd=Re._mutablePropertyChange})();var Oy=xt(HTMLElement).prototype;var ci=new Set,Zn={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ci.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(i){this.resizerShouldNotify(i)&&this._notifyDescendant(i)},this),this._fireResize())},assignParentResizable:function(i){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=i,i&&i._interestedResizables.indexOf(this)===-1&&(i._interestedResizables.push(this),i._subscribeIronResize(this))},stopResizeNotificationsFor:function(i){var e=this._interestedResizables.indexOf(i);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(i))},_subscribeIronResize:function(i){i.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(i){i.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(i){return!0},_onDescendantIronResize:function(i){if(this._notifyingDescendant){i.stopPropagation();return}Ke||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(i){var e=G(i).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),i.stopPropagation())},_parentResizableChanged:function(i){i&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(i){!this.isAttached||(this._notifyingDescendant=!0,i.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var i=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),i()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(ci.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ci.delete(this):ci.add(this)}};var Ue=class extends Fn(Zn,w){static get is(){return"vaadin-combo-box-dropdown"}static get template(){return O`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object,observer:"_positionTargetChanged"},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();let e=Ue._uniqueId=1+Ue._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${e}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");let e=this.$.overlay,t=`${this.__hostTagName}-scroller`;e.renderer=s=>{if(!s.firstChild){let r=document.createElement(t);s.appendChild(r)}},e.requestContentUpdate(),this._scroller=e.content.querySelector(t),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",s=>this._forwardScrollerEvent(s)),this._scroller.addEventListener("index-requested",s=>this._forwardScrollerEvent(s)),e.addEventListener("touchend",s=>this._fireTouchAction(s)),e.addEventListener("touchmove",s=>this._fireTouchAction(s)),e.addEventListener("mousedown",s=>s.preventDefault()),e.addEventListener("vaadin-overlay-outside-click",s=>{s.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&this._setOverlayWidth()}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_forwardScrollerEvent(e){this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}_openedChanged(e,t){e?(this._setOverlayWidth(),this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):t&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(e,t,s){let r=t&&t.length;r||(this.__emptyItems=!0),this._overlayOpened=!!(e&&(s||r)),this.__emptyItems=!1}_getFocusedItem(e){if(e>=0)return this._items[e]}indexOfLabel(e){if(this._items&&e){for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t}return-1}getItemLabel(e,t){t=t||this._itemLabelPath;let s=e&&t?this.get(t,e):void 0;return s==null&&(s=e?e.toString():""),s}_scrollIntoView(e){!this._scroller||this._scroller.scrollIntoView(e)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(e,t,s,r,o,n,l,a,h){e&&e.setProperties({items:s?t:[],opened:s,loading:r,selectedItem:o,itemIdPath:n,focusedIndex:l,renderer:a,theme:h})}_isOverlayHidden(){return!this.loading&&!(this._items&&this._items.length)}_positionTargetChanged(e){e&&this._setOverlayWidth()}_setOverlayWidth(){if(!this.positionTarget)return;let e=this.positionTarget.clientWidth+"px",t=`${this.__hostTagName}-overlay`,s=getComputedStyle(this).getPropertyValue(`--${t}-width`);this.$.overlay.style.setProperty(`--_${t}-default-width`,e),s===""?this.$.overlay.style.removeProperty(`--${t}-width`):this.$.overlay.style.setProperty(`--${t}-width`,s),this.$.overlay._updatePosition()}};customElements.define(Ue.is,Ue);var kd=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ui=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Dd(){function i(){return!0}return Qn(i)}function Ld(){try{return zd()?!0:Fd()?ui?!Hd():!Dd():!1}catch{return!1}}function zd(){return localStorage.getItem("vaadin.developmentmode.force")}function Fd(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Hd(){return!!(ui&&Object.keys(ui).map(e=>ui[e]).filter(e=>e.productionMode).length>0)}function Qn(i,e){if(typeof i!="function")return;let t=kd.exec(i.toString());if(t)try{i=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(e)}window.Vaadin=window.Vaadin||{};var Ws=function(i,e){if(window.Vaadin.developmentMode)return Qn(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ld());function Vd(){}var el=function(){if(typeof Ws=="function")return Ws(Vd)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){el()};var Ys,tl=new Set,il=i=>class extends se(i){static get version(){return"22.0.2"}static finalize(){super.finalize();let{is:t}=this;t&&!tl.has(t)&&(window.Vaadin.registrations.push(this),tl.add(t),window.Vaadin.developmentModeCallback&&(Ys=P.debounce(Ys,jt,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Wt(Ys)))}constructor(){super();document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};var pi=_(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){}_onKeyUp(t){}});var mi=_(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});var Gs=!1;window.addEventListener("keydown",()=>{Gs=!0},{capture:!0});window.addEventListener("mousedown",()=>{Gs=!1},{capture:!0});var sl=_(i=>class extends i{get _keyboardActive(){return Gs}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});var rl=_(i=>class extends sl(mi(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"}}}constructor(){super();this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,s){t?(t.disabled=this.disabled,this._addFocusListeners(t)):s&&this._removeFocusListeners(s)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t){super._disabledChanged(t),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}});var ol=_(i=>class extends i{constructor(){super();this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}});var Js=class{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setLabelId(e){this.__setLabelIdToAriaAttribute(e,this.__labelId),this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(e,t){this.__setAriaAttributeId("aria-labelledby",e,t)}__setErrorIdToAriaAttribute(e,t){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,t):this.__setAriaAttributeId("aria-describedby",e,t)}__setHelperIdToAriaAttribute(e,t){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,t):this.__setAriaAttributeId("aria-describedby",e,t)}__setAriaRequiredAttribute(e){!this.__target||!this.__isGroupField||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(e,t,s){if(!this.__target)return;let r=this.__target.getAttribute(e),o=r?new Set(r.split(" ")):new Set;s&&o.delete(s),t&&o.add(t),this.__target.setAttribute(e,[...o].join(" "))}};var nl=_(i=>class extends i{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(t=>{if(!(this._getDirectSlotChild(t)!==void 0)){let o=this.slots[t]();o instanceof Element&&(o.setAttribute("slot",t),this.appendChild(o))}})}_getDirectSlotChild(t){return Array.from(this.children).find(s=>s.slot===t)}});var ll=_(i=>class Ks extends nl(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get slots(){return{...super.slots,label:()=>{let t=document.createElement("label");return t.textContent=this.label,t}}}get _labelNode(){return this._getDirectSlotChild("label")}constructor(){super();let t=Ks._uniqueLabelId=1+Ks._uniqueLabelId||0;this._labelId=`label-${this.localName}-${t}`,this.__labelNodeObserver=new MutationObserver(()=>{this._toggleHasLabelAttribute()})}ready(){super.ready(),this._labelNode&&(this._labelNode.id=this._labelId,this._toggleHasLabelAttribute(),this.__labelNodeObserver.observe(this._labelNode,{childList:!0,subtree:!0,characterData:!0}))}_labelChanged(t){this._labelNode&&(this._labelNode.textContent=t,this._toggleHasLabelAttribute())}_toggleHasLabelAttribute(){if(this._labelNode){let t=this._labelNode.children.length>0||this._labelNode.textContent.trim()!=="";this.toggleAttribute("has-label",t)}}});var fi=_(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}});var al=i=>class Xs extends fi(ll(ol(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String},helperText:{type:String,observer:"_helperTextChanged"},_helperId:String}}get slots(){return{...super.slots,"error-message":()=>{let t=document.createElement("div");return t.textContent=this.errorMessage,t}}}static get observers(){return["__observeOffsetHeight(errorMessage, invalid, label, helperText)","_updateErrorMessage(invalid, errorMessage)","_invalidChanged(invalid)","_requiredChanged(required)","_helperIdChanged(_helperId)"]}get _errorNode(){return this._getDirectSlotChild("error-message")}get _helperNode(){return this._getDirectSlotChild("helper")}constructor(){super();let t=Xs._uniqueFieldId=1+Xs._uniqueFieldId||0;this._errorId=`error-${this.localName}-${t}`,this._helperId=`helper-${this.localName}-${t}`,this.__savedHelperId=this._helperId,this._fieldAriaController=new Js(this)}ready(){super.ready();let t=this._errorNode;t&&(t.id=this._errorId,this.__applyCustomError(),this._updateErrorMessage(this.invalid,this.errorMessage));let s=this._helperNode;s&&this.__applyCustomHelper(s),this.__helperSlot=this.shadowRoot.querySelector('[name="helper"]'),this.__helperSlotObserver=new $(this.__helperSlot,r=>{let o=this._currentHelper,n=r.addedNodes.find(a=>a!==o),l=r.removedNodes.find(a=>a===o);n?(o&&o.isConnected&&this.removeChild(o),this.__applyCustomHelper(n),this.__helperIdObserver=new MutationObserver(a=>{a.forEach(h=>{h.type==="attributes"&&h.attributeName==="id"&&h.target===this._currentHelper&&h.target.id!==this.__savedHelperId&&this.__updateHelperId(h.target)})}),this.__helperIdObserver.observe(n,{attributes:!0})):l&&(this.__helperIdObserver&&this.__helperIdObserver.disconnect(),this.__applyDefaultHelper(this.helperText))}),this.addController(this._fieldAriaController)}__applyCustomError(){let t=this.__errorMessage;t&&t!==this.errorMessage&&(this.errorMessage=t,delete this.__errorMessage)}__applyCustomHelper(t){this.__updateHelperId(t),this._currentHelper=t,this.__toggleHasHelper(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&t.trim()!==""}__attachDefaultHelper(){let t=this.__defaultHelper;return t||(t=document.createElement("div"),t.setAttribute("slot","helper"),this.__defaultHelper=t),t.id=this.__savedHelperId,this._helperId=t.id,this.appendChild(t),this._currentHelper=t,t}__applyDefaultHelper(t){let s=this._helperNode,r=this.__isNotEmpty(t);r&&!s&&(s=this.__attachDefaultHelper()),s&&s===this.__defaultHelper&&(s.textContent=t),this.__toggleHasHelper(r)}__toggleHasHelper(t){this.toggleAttribute("has-helper",t)}_dispatchIronResizeEventIfNeeded(t,s){let r="__old"+t;this[r]!==void 0&&this[r]!==s&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[r]=s}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=P.debounce(this.__observeOffsetHeightDebouncer,re,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}_toggleHasLabelAttribute(){super._toggleHasLabelAttribute(),this.hasAttribute("has-label")?this._fieldAriaController.setLabelId(this._labelId):this._fieldAriaController.setLabelId(null)}_updateErrorMessage(t,s){let r=this._errorNode;if(!r)return;r.textContent&&!s&&(this.__errorMessage=r.textContent.trim());let o=Boolean(t&&s);r.textContent=o?s:"",r.hidden=!o,this.toggleAttribute("has-error-message",o),o?r.setAttribute("role","alert"):r.removeAttribute("role")}__updateHelperId(t){let s;t.id?s=t.id:(s=this.__savedHelperId,t.id=s),this._helperId=s}_helperTextChanged(t){this.__applyDefaultHelper(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_helperIdChanged(t){this._fieldAriaController.setHelperId(t)}_invalidChanged(t){setTimeout(()=>{t?this._fieldAriaController.setErrorId(this._errorId):this._fieldAriaController.setErrorId(null)})}};var hl=_(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((s,r)=>{this._delegateAttribute(s,t[r])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((s,r)=>{this._delegateProperty(s,t[r])})}_delegateAttribute(t,s){!this.stateTarget||(t==="invalid"&&this._delegateAttribute("aria-invalid",s?"true":!1),typeof s=="boolean"?this.stateTarget.toggleAttribute(t,s):s?this.stateTarget.setAttribute(t,s):this.stateTarget.removeAttribute(t))}_delegateProperty(t,s){!this.stateTarget||(this.stateTarget[t]=s)}});var _i=_(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super();this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){!this.inputElement||(t!=null?this.inputElement.value=t:this.inputElement.value="")}_inputElementChanged(t,s){t?this._addInputListeners(t):s&&this._removeInputListeners(s)}_onInput(t){this.__userInput=t.isTrusted,this.value=t.target.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,s){this._toggleHasValue(t!==""&&t!=null),!(t===""&&s===void 0)&&(this.__userInput||this._forwardInputValue(t))}});var gi=_(i=>class extends hl(fi(_i(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(s=>this.__isValidConstraint(s))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(${this.constructor.constraints.join(", ")})`)}_constraintsChanged(...t){!this.invalid||(this._hasValidConstraints(t)?this.validate():this.invalid=!1)}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||t===0}});var dl=i=>class extends rl(gi(al(pi(i)))){static get properties(){return{autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onKeyDown(t){if(super._onKeyDown(t),t.key==="Escape"&&this.clearButtonVisible){let s=!!this.value;this.clear(),s&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}};var Zs=class{constructor(e,t,s,r){this.host=e,this.slotName=t,this.slotFactory=s,this.slotInitializer=r}hostConnected(){if(!this.initialized){let{host:e,slotName:t,slotFactory:s,slotInitializer:r}=this,o=this.getSlotChild();if(o)this.node=o;else if(s){let n=s(e);n instanceof Element&&(t!==""&&n.setAttribute("slot",t),e.appendChild(n),this.node=n,this.defaultNode=n)}r&&r(e,this.node),this.observe(),this.initialized=!0}}getSlotChild(){let{slotName:e}=this;return Array.from(this.host.childNodes).find(t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&e==="")}initCustomNode(e){}teardownNode(e){}observe(){let{slotName:e}=this,t=e===""?"slot:not([name])":`slot[name=${e}]`,s=this.host.shadowRoot.querySelector(t);this.__slotObserver=new $(s,r=>{let o=this.node,n=r.addedNodes.find(l=>l!==o);r.removedNodes.length&&r.removedNodes.forEach(l=>{this.teardownNode(l)}),n&&(o&&o.isConnected&&this.host.removeChild(o),this.node=n,n!==this.defaultNode&&this.initCustomNode(n))})}};var qe=class extends Zs{constructor(e,t){super(e,"input",()=>document.createElement("input"),(s,r)=>{s.value&&r.setAttribute("value",s.value),s.type&&r.setAttribute("type",s.type);let o=qe._uniqueInputId=1+qe._uniqueInputId||0;s._inputId=`${s.localName}-${o}`,r.id=s._inputId,typeof t=="function"&&t(r)})}};var Qs=class{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),e&&t.setAttribute("for",e.id))}__preventDuplicateLabelClick(){let e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}};var cl=i=>class extends gi(i){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){let t=this.inputElement;if(t&&t.value.length>0&&!this.checkValidity()){t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=P.debounce(this._inputDebouncer,lt.after(200),()=>{this.removeAttribute("input-prevented")});return}}}_onInput(t){this._checkInputValue(),super._onInput(t)}};var ul=f`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;var pl=f`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;var ml=f`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;var fl=[pl,ml,ul];var _l=i=>class extends i{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new oe}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(t,s,r){t&&!this.loading&&this.filter&&!(s&&this.autoOpenDisabled&&r===this.filter)&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.dropdown.addEventListener("index-requested",t=>{let s=t.detail.index,r=t.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(s,o,r)&&s!==void 0){let n=this._getPageForIndex(s);this._shouldLoadPage(n)&&this._loadPage(n)}})}_dataProviderFilterChanged(){!this._shouldFetchData()||(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(t){t&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(t,s,r){return r!==0&&t>=r-s&&t<=r+s}_shouldLoadPage(t){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;let s=this.filteredItems[t*this.pageSize];return s!==void 0?s instanceof oe:this.size===void 0}_loadPage(t){if(!this._pendingRequests[t]&&this.dataProvider){this.loading=!0;let s={page:t,pageSize:this.pageSize,filter:this.filter},r=(o,n)=>{if(this._pendingRequests[t]===r){if(this.filteredItems)this.splice("filteredItems",s.page*s.pageSize,o.length,...o);else{let l=[];l.splice(s.page*s.pageSize,o.length,...o),this.filteredItems=l}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),!this.opened&&!this.hasAttribute("focused")&&this._commitValue(),this.size=n,delete this._pendingRequests[t],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)}};this._pendingRequests[t]||(this._pendingRequests[t]=r,this.dataProvider(s,r))}}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};let t=[];for(let s=0;s<(this.size||0);s++)t.push(this.__placeHolder);this.filteredItems=t,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(t=0){let s=(this.filteredItems||[]).slice(0,t);for(let r=0;r<t;r++)s[r]=s[r]!==void 0?s[r]:this.__placeHolder;this.filteredItems=s,this._flushPendingRequests(t)}_pageSizeChanged(t,s){if(Math.floor(t)!==t||t<1)throw this.pageSize=s,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(t,s){this._ensureItemsOrDataProvider(()=>{this.dataProvider=s})}_ensureItemsOrDataProvider(t){if(this.items!==void 0&&this.dataProvider!==void 0)throw t(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(t,s){if(t&&s!==""&&(this.selectedItem===void 0||this.selectedItem===null)){let r=this._indexOfValue(s,this.filteredItems);(r<0||!this._getItemLabel(this.filteredItems[r]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(t){if(this._pendingRequests){let s=Math.ceil(t/this.pageSize),r=Object.keys(this._pendingRequests);for(let o=0;o<r.length;o++){let n=parseInt(r[o]);n>=s&&this._pendingRequests[n]([],t)}}}};function gl(i){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(i);return}i.querySelector("template")&&console.warn(`WARNING: <template> inside <${i.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}var yl=i=>class extends pi(_i(mi(i))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super();this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(t){this.inputElement&&(this.inputElement[this._propertyForValue]=t)}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);let t=()=>{requestAnimationFrame(()=>{this.$.dropdown.$.overlay.bringToFront()})};this.addEventListener("mousedown",t),this.addEventListener("touchstart",t),gl(this)}requestContentUpdate(){!this.$.dropdown._scroller||this._getItemElements().forEach(t=>{t.requestContentUpdate()})}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(t,s){s!==void 0&&this._updateActiveDescendant(t)}_updateActiveDescendant(t){let s=this.inputElement;if(!s)return;let r=this._getItemElements().find(o=>o.index===t);r?s.setAttribute("aria-activedescendant",r.id):s.removeAttribute("aria-activedescendant")}_openedChanged(t,s){if(s===void 0)return;t?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this.hasAttribute("focused")&&!rs&&this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));let r=this.inputElement;r&&(r.setAttribute("aria-expanded",!!t),t?r.setAttribute("aria-controls",this.$.dropdown.scrollerId):r.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(t){return t.composedPath()[0]===this.clearElement}_handleClearButtonClick(t){t.preventDefault(),this._clear()}_onClick(t){this._closeOnBlurIsPrevented=!0;let s=t.composedPath();this._isClearButton(t)?this._handleClearButtonClick(t):s.indexOf(this._toggleElement)>-1?this.opened?this.close():this.open():this.autoOpenDisabled||this.open(),this._closeOnBlurIsPrevented=!1}_onKeyDown(t){t.keyCode===40?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,t.preventDefault()):t.keyCode===38?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,t.preventDefault()):t.keyCode===13?this._onEnter(t):t.keyCode===27&&this._onEscape(t)}_getItemLabel(t){return this.$.dropdown.getItemLabel(t)}_getItemValue(t){let s=t&&this.itemValuePath?this.get(this.itemValuePath,t):void 0;return s===void 0&&(s=t?t.toString():""),s}_onArrowDown(){if(this.opened){let t=this._getOverlayItems();t&&(this._focusedIndex=Math.min(t.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{let t=this._getOverlayItems();t&&(this._focusedIndex=t.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(t,s){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(t,s)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){let t=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(t,t)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(t){(this.opened||this.autoOpenDisabled)&&(this.allowCustomValue||this._inputElementValue===""||this._focusedIndex>-1)&&(this._closeOrCommit(),t.preventDefault(),t.stopPropagation())}_onEscape(t){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(t.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&!!this.value&&(t.stopPropagation(),this._clear()):this.opened?(t.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&!!this.value&&(t.stopPropagation(),this._clear())}_toggleElementChanged(t){t&&(t.addEventListener("mousedown",s=>s.preventDefault()),t.addEventListener("click",()=>{rs&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){setTimeout(()=>this._resizeDropdown(),1),requestAnimationFrame(()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){let t=this._getOverlayItems();if(t&&this._focusedIndex>-1){let s=t[this._focusedIndex];this.selectedItem!==s&&(this.selectedItem=s),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{let s=o=>o&&o.toLowerCase&&o.toLowerCase(),r=this.filteredItems&&this.filteredItems.filter(o=>s(this._getItemLabel(o))===s(this._inputElementValue))||[];if(this.allowCustomValue&&!r.length){let o=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(o),!o.defaultPrevented){let n=this._inputElementValue;this._selectItemForValue(n),this.value=n}}else!this.allowCustomValue&&!this.opened&&r.length>0?this.value=this._getItemValue(r[0]):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_onInput(t){!this.opened&&!this._isClearButton(t)&&!this.autoOpenDisabled&&this.open();let s=this._inputElementValue;this.filter===s?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=s}_onChange(t){t.stopPropagation()}_itemLabelPathChanged(t){typeof t!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(t,s,r){t!==void 0&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,t):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},s,r))}_loadingChanged(t){t&&(this._focusedIndex=-1)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.dropdown.notifyResize()}_selectedItemChanged(t){if(t==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this.value!==""),this._inputElementValue=this.value);else{let r=this._getItemValue(t);if(this.value!==r&&(this.value=r,this.value!==r))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(t)}this.$.dropdown._selectedItem=t;let s=this._getOverlayItems();this.filteredItems&&s&&(this._focusedIndex=this.filteredItems.indexOf(t))}_valueChanged(t,s){if(!(t===""&&s===void 0)){if(this._isValidValue(t)){let r;this._getItemValue(this.selectedItem)!==t?this._selectItemForValue(t):r=this.selectedItem,!r&&this.allowCustomValue&&(this._inputElementValue=t),this._toggleHasValue(this.value!=="")}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(t,s){this._ensureItemsOrDataProvider(()=>{this.items=s})}_itemsOrPathsChanged(t){if(t.path==="items"||t.path==="items.splices"){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);let s=this._indexOfValue(this.value,this.items);this._focusedIndex=s;let r=s>-1&&this.items[s];r&&(this.selectedItem=r)}this.__previousItems=t.value}_filteredItemsChanged(t){if((t.path==="filteredItems"||t.path==="filteredItems.splices")&&(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened||this.autoOpenDisabled?this.$.dropdown.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.selectedItem===null&&this._focusedIndex>=0)){let s=this.filteredItems[this._focusedIndex];this._getItemValue(s)===this.value&&this._selectItemForValue(this.value)}}_filterItems(t,s){return t&&t.filter(o=>(s=s?s.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(s)>-1))}_selectItemForValue(t){let s=this._indexOfValue(t,this.filteredItems),r=this.selectedItem;this.selectedItem=s>=0?this.filteredItems[s]:this.dataProvider&&this.selectedItem===void 0?void 0:null,this.selectedItem===null&&r===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(t){this.$.dropdown.set("_items",t)}_indexOfValue(t,s){if(s&&this._isValidValue(t)){for(let r=0;r<s.length;r++)if(s[r]!==this.__placeHolder&&this._getItemValue(s[r])===t)return r}return-1}_isValidValue(t){return t!=null}_overlaySelectedItemChanged(t){t.stopPropagation(),!(t.detail.item instanceof oe)&&(this.opened?(this._focusedIndex=this.filteredItems.indexOf(t.detail.item),this.close()):this.selectedItem!==t.detail.item&&(this.selectedItem=t.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_onFocusout(t){if(t.relatedTarget===this.$.dropdown.$.overlay){t.composedPath()[0].focus();return}!this.readonly&&!this._closeOnBlurIsPrevented&&this._closeOrCommit()}_onTouchend(t){!this.clearElement||t.composedPath()[0]!==this.clearElement||(t.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}};y("vaadin-combo-box",fl,{moduleId:"vaadin-combo-box-styles"});var yi=class extends _l(yl(cl(dl(Z(il(w)))))){static get is(){return"vaadin-combo-box"}static get template(){return O`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-dropdown
        id="dropdown"
        opened="[[opened]]"
        renderer="[[renderer]]"
        position-target="[[_positionTarget]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-combo-box-dropdown>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new qe(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Qs(this.inputElement,this._labelNode)),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){return e.relatedTarget===this.$.dropdown.$.overlay?(e.composedPath()[0].focus(),!1):!0}_onClearButtonClick(e){e.stopPropagation(),this._handleClearButtonClick(e)}};customElements.define(yi.is,yi);var ge=class extends V{clientId;apiKey;scope;discoveryDocs;get content(){return this.shadowRoot?.querySelector("#content")}get contentSlot(){return this.shadowRoot?.querySelector("slot")}state="start";render(){return H`
      ${this.state==="start"?H`
        <button @click="${e=>{this.handleAuthClick(e)}}">
          Authorize
        </button>
      `:H`
        <button @click="${e=>{this.handleSignoutClick(e)}}">
          Sign Out
        </button>
      `}
      <slot></slot>
      <div id="content"></div>
    `}async connectedCallback(){super.connectedCallback(),gapi.load("client:auth2",()=>{this.initClient()})}initClient(){gapi.client.init({apiKey:this.apiKey,clientId:this.clientId,discoveryDocs:this.discoveryDocs,scope:this.scope}).then(()=>{gapi.auth2.getAuthInstance().isSignedIn.listen(e=>{this.updateSigninStatus(e)}),this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())}).catch(e=>{console.error(e)})}updateSigninStatus(e){setTimeout(()=>{if(this.state=e?"logged_in":"start",console.log(gapi.client.sheets),e){let t=this.contentSlot.assignedNodes().find(s=>s.nodeType===Node.ELEMENT_NODE?s.tagName.toLowerCase()==="template":!1);if(t){let s=document.importNode(t.content,!0);this.content.appendChild(s)}}else this.content.innerHTML="";this.requestUpdate()},1e3)}handleAuthClick(e){gapi.auth2.getAuthInstance().signIn()}handleSignoutClick(e){gapi.auth2.getAuthInstance().signOut()}};J([Pe({type:String})],ge.prototype,"clientId",2),J([Pe({type:String})],ge.prototype,"apiKey",2),J([Pe({type:String})],ge.prototype,"scope",2),J([Pe({type:Array})],ge.prototype,"discoveryDocs",2),ge=J([St("google-api-client")],ge);var bi=class extends V{keluhanList=[];keluhanSelected=[{value:void 0}];render(){console.log(this.keluhanList.length);let e=this.keluhanSelected.filter(t=>t.value!==void 0).map(t=>t.value).reduce((t,s)=>(s&&(t.has(s.remedi)?t.set(s.remedi,t.get(s.remedi).concat(s)):t.set(s.remedi,[s])),t),new Map);return H`
      <table>
        ${this.keluhanSelected.map(t=>H`
          <tr>
            <td>
              <vaadin-combo-box
                style="width: 500px;"
                .items="${this.keluhanList}"
                item-value-path="id"
                item-label-path="keluhan"
                clear-button-visible
                .selectedItem="${t.value}"
                @change="${s=>{t.value=s.target?.selectedItem,this.requestUpdate()}}"
              ></vaadin-combo-box>
            </td>
          </tr>
        `)}
        <tr>
          <td>
            <a style="cursor: pointer; color: blue;"
              @click="${t=>{this.keluhanSelected=this.keluhanSelected.concat({value:void 0}),this.requestUpdate()}}"
            >+ Tambah Keluhan</a>
          </td>
        </tr>
      </table>

      <ul class="outmost">
        ${Array.from(e.entries()).map(([t,s])=>H`
          <li><span class="caret" @click="${r=>{r.target?.parentElement?.querySelector(".nested")?.classList?.toggle("active"),r.target?.classList.toggle("caret-down")}}">${t} (${s.length})</span>
            <ul class="nested">
              ${s.map(r=>H`
                <li>${r.keluhan}</li>
              `)}
            </ul>
          </li>
        `)}
      </ul>
    `}connectedCallback(){super.connectedCallback(),this.getData()}getData(){console.log(gapi.client.sheets),gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"102ZuXcAs0riyoxkE4NrzcGUQ07WcLnAh9cQcGE15ONA",range:"DB!A:B"}).then(e=>{let t=e.result;console.log(t),t?.values?.length?(this.keluhanList=t.values.map(s=>({id:`${s[0]}|${s[1]}`,keluhan:`${s[0]}`,remedi:`${s[1]}`})),this.requestUpdate()):this.keluhanList=[{id:"",keluhan:"Data tidak ditemukan",remedi:""}]},e=>{console.error(e.result.error.message)})}};ir(bi,"styles",[f`
    ul {
      list-style-type: none;
    }
    .outmost {
      margin: 0;
    }
    .caret {
      cursor: pointer;
      user-select: none; /* Prevent text selection */
    }
    .caret::before {
      content: "\\25B6";
      color: black;
      display: inline-block;
      font-size: .5em;
      margin-right: 6px;
    }
    .caret-down::before {
      transform: rotate(90deg);
    }
    .nested {
      display: none;
    }
    .active {
      display: block;
    }
  `]),bi=J([St("homeopati-remedi")],bi);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
//# sourceMappingURL=index.js.map
