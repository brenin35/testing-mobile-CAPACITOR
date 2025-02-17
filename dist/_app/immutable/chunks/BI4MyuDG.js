import{t as B,b as K}from"./Cch-plQU.js";import{Z as V,ag as z,af as O,ac as J,_ as Y,ad as U,c as Z,ae as _,g as W}from"./EJpCIQat.js";import{d as Q,s as H}from"./BO_xNerh.js";import{p as X}from"./B7QwzTYy.js";import{_ as N}from"./C1FmrZbK.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */var C;(function(r){r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE"})(C||(C={}));class A extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const ee=r=>{var e,t;return r!=null&&r.androidBridge?"android":!((t=(e=r==null?void 0:r.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},te=r=>{const e=r.CapacitorCustomPlatform||null,t=r.Capacitor||{},o=t.Plugins=t.Plugins||{},n=()=>e!==null?e.name:ee(r),s=()=>n()!=="web",i=c=>{const l=u.get(c);return!!(l!=null&&l.platforms.has(n())||a(c))},a=c=>{var l;return(l=t.PluginHeaders)===null||l===void 0?void 0:l.find(L=>L.name===c)},d=c=>r.console.error(c),u=new Map,b=(c,l={})=>{const L=u.get(c);if(L)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),L.proxy;const v=n(),P=a(c);let p;const q=async()=>(!p&&v in l?p=typeof l[v]=="function"?p=await l[v]():p=l[v]:e!==null&&!p&&"web"in l&&(p=typeof l.web=="function"?p=await l.web():p=l.web),p),I=(f,g)=>{var w,m;if(P){const y=P==null?void 0:P.methods.find(h=>g===h.name);if(y)return y.rtype==="promise"?h=>t.nativePromise(c,g.toString(),h):(h,E)=>t.nativeCallback(c,g.toString(),h,E);if(f)return(w=f[g])===null||w===void 0?void 0:w.bind(f)}else{if(f)return(m=f[g])===null||m===void 0?void 0:m.bind(f);throw new A(`"${c}" plugin is not implemented on ${v}`,C.Unimplemented)}},x=f=>{let g;const w=(...m)=>{const y=q().then(h=>{const E=I(h,f);if(E){const k=E(...m);return g=k==null?void 0:k.remove,k}else throw new A(`"${c}.${f}()" is not implemented on ${v}`,C.Unimplemented)});return f==="addListener"&&(y.remove=async()=>g()),y};return w.toString=()=>`${f.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:f,writable:!1,configurable:!1}),w},T=x("addListener"),R=x("removeListener"),M=(f,g)=>{const w=T({eventName:f},g),m=async()=>{const h=await w;R({eventName:f,callbackId:h},g)},y=new Promise(h=>w.then(()=>h({remove:m})));return y.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await m()},y},$=new Proxy({},{get(f,g){switch(g){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return P?M:T;case"removeListener":return R;default:return x(g)}}});return o[c]=$,u.set(c,{name:c,proxy:$,platforms:new Set([...Object.keys(l),...P?[v]:[]])}),$};return t.convertFileSrc||(t.convertFileSrc=c=>c),t.getPlatform=n,t.handleError=d,t.isNativePlatform=s,t.isPluginAvailable=i,t.registerPlugin=b,t.Exception=A,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},re=r=>r.Capacitor=te(r),j=re(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=j.registerPlugin;class F{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),o&&this.sendRetainedArgumentsForEvent(e);const i=async()=>this.removeListener(e,t);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,o){const n=this.listeners[e];if(!n){if(o){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}n.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new j.Exception(e,C.Unimplemented)}unavailable(e="not available"){return new j.Exception(e,C.Unavailable)}async removeListener(e,t){const o=this.listeners[e];if(!o)return;const n=o.indexOf(t);this.listeners[e].splice(n,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(o=>{this.notifyListeners(e,o)}))}}const D=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),G=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ne extends F{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[n,s]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=G(n).trim(),s=G(s).trim(),t[n]=s}),t}async setCookie(e){try{const t=D(e.key),o=D(e.value),n=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),i=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${n}; path=${s}; ${i};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}S("CapacitorCookies",{web:()=>new ne});const se=async r=>new Promise((e,t)=>{const o=new FileReader;o.onload=()=>{const n=o.result;e(n.indexOf(",")>=0?n.split(",")[1]:n)},o.onerror=n=>t(n),o.readAsDataURL(r)}),oe=(r={})=>{const e=Object.keys(r);return Object.keys(r).map(n=>n.toLocaleLowerCase()).reduce((n,s,i)=>(n[s]=r[e[i]],n),{})},ie=(r,e=!0)=>r?Object.entries(r).reduce((o,n)=>{const[s,i]=n;let a,d;return Array.isArray(i)?(d="",i.forEach(u=>{a=e?encodeURIComponent(u):u,d+=`${s}=${a}&`}),d.slice(0,-1)):(a=e?encodeURIComponent(i):i,d=`${s}=${a}`),`${o}&${d}`},"").substr(1):null,ae=(r,e={})=>{const t=Object.assign({method:r.method||"GET",headers:r.headers},e),n=oe(r.headers)["content-type"]||"";if(typeof r.data=="string")t.body=r.data;else if(n.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[i,a]of Object.entries(r.data||{}))s.set(i,a);t.body=s.toString()}else if(n.includes("multipart/form-data")||r.data instanceof FormData){const s=new FormData;if(r.data instanceof FormData)r.data.forEach((a,d)=>{s.append(d,a)});else for(const a of Object.keys(r.data))s.append(a,r.data[a]);t.body=s;const i=new Headers(t.headers);i.delete("content-type"),t.headers=i}else(n.includes("application/json")||typeof r.data=="object")&&(t.body=JSON.stringify(r.data));return t};class ce extends F{async request(e){const t=ae(e,e.webFetchExtra),o=ie(e.params,e.shouldEncodeUrlParams),n=o?`${e.url}?${o}`:e.url,s=await fetch(n,t),i=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};i.includes("application/json")&&(a="json");let d,u;switch(a){case"arraybuffer":case"blob":u=await s.blob(),d=await se(u);break;case"json":d=await s.json();break;case"document":case"text":default:d=await s.text()}const b={};return s.headers.forEach((c,l)=>{b[l]=c}),{data:d,headers:b,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}S("CapacitorHttp",{web:()=>new ce});function de(r){r.CapacitorUtils.Synapse=new Proxy({},{get(e,t){return new Proxy({},{get(o,n){return(s,i,a)=>{const d=r.Capacitor.Plugins[t];if(d===void 0){a(new Error(`Capacitor plugin ${t} not found`));return}if(typeof d[n]!="function"){a(new Error(`Method ${n} not found in Capacitor plugin ${t}`));return}(async()=>{try{const u=await d[n](s);i(u)}catch(u){a(u)}})()}}})}})}function le(r){r.CapacitorUtils.Synapse=new Proxy({},{get(e,t){return r.cordova.plugins[t]}})}function ue(){window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0?de(window):window.cordova!==void 0&&le(window)}const fe=S("Geolocation",{web:()=>N(()=>import("./50xSIlnG.js"),[],import.meta.url).then(r=>new r.GeolocationWeb)});ue();async function ge(r,e){try{const t=await fe.getCurrentPosition();Z(e,X(t)),console.log(t)}catch(t){console.error(t)}}var he=B('<div class="svelte-5d50cl"><h1>Geolocation</h1> <p>Your location is:</p> <p> </p> <p> </p> <button>Get Current Location</button></div>');function ve(r,e){V(e,!0);let t=z(null);var o=he(),n=O(U(o),4),s=U(n);_(n);var i=O(n,2),a=U(i);_(i);var d=O(i,2);d.__click=[ge,t],_(o),J(()=>{var u,b;H(s,`Latitude: ${((u=W(t))==null?void 0:u.coords.latitude)??""}`),H(a,`Longitude: ${((b=W(t))==null?void 0:b.coords.longitude)??""}`)}),K(r,o),Y()}Q(["click"]);export{F as W,ve as _};
