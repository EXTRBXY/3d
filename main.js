var oE=Object.defineProperty,aE=Object.defineProperties;var cE=Object.getOwnPropertyDescriptors;var Um=Object.getOwnPropertySymbols;var lE=Object.prototype.hasOwnProperty,uE=Object.prototype.propertyIsEnumerable;var Bm=(n,e,t)=>e in n?oE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,dn=(n,e)=>{for(var t in e||={})lE.call(e,t)&&Bm(n,t,e[t]);if(Um)for(var t of Um(e))uE.call(e,t)&&Bm(n,t,e[t]);return n},Zn=(n,e)=>aE(n,cE(e));var pe=(n,e)=>()=>(n&&(e=n(n=0)),e);var dE=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var gt=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function ot(n){let e=Vm;return Vm=n,e}function hE(n){if(!(ud(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===ad)){if(!n.producerMustRecompute(n)&&!cd(n)){n.dirty=!1,n.lastCleanEpoch=ad;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=ad}}function Gm(n){return n&&(n.nextProducerIndex=0),ot(n)}function Wm(n,e){if(ot(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(ud(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)ld(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function cd(n){Ja(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(hE(t),i!==t.version))return!0}return!1}function jm(n){if(Ja(n),ud(n))for(let e=0;e<n.producerNode.length;e++)ld(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function ld(n,e){if(fE(n),Ja(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)ld(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Ja(r),r.producerIndexOfThis[i]=e}}function ud(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Ja(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function fE(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function pE(){throw new Error}function $m(n){mE=n}var Vm,ad,zm,Hm,mE,qm=pe(()=>{"use strict";Vm=null,ad=1,zm=Symbol("SIGNAL");Hm={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};mE=pE});function st(n){return typeof n=="function"}var sn=pe(()=>{"use strict"});function Qa(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var dd=pe(()=>{"use strict"});var ec,Xm=pe(()=>{"use strict";dd();ec=Qa(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t})});function go(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var hd=pe(()=>{"use strict"});function tc(n){return n instanceof on||n&&"closed"in n&&st(n.remove)&&st(n.add)&&st(n.unsubscribe)}function Ym(n){st(n)?n():n.unsubscribe()}var on,fd,yo=pe(()=>{"use strict";sn();Xm();hd();on=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(st(i))try{i()}catch(s){e=s instanceof ec?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Ym(s)}catch(o){e=e??[],o instanceof ec?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ec(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Ym(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&go(t,e)}remove(e){let{_finalizers:t}=this;t&&go(t,e),e instanceof n&&e._removeParent(this)}};on.EMPTY=(()=>{let n=new on;return n.closed=!0,n})();fd=on.EMPTY});var Ln,vo=pe(()=>{"use strict";Ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}});var ls,pd=pe(()=>{"use strict";ls={setTimeout(n,e,...t){let{delegate:i}=ls;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ls;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0}});function nc(n){ls.setTimeout(()=>{let{onUnhandledError:e}=Ln;if(e)e(n);else throw n})}var md=pe(()=>{"use strict";vo();pd()});function gd(){}var Zm=pe(()=>{"use strict"});function Jm(n){return yd("E",void 0,n)}function Qm(n){return yd("N",n,void 0)}function yd(n,e,t){return{kind:n,value:e,error:t}}var Km,eg=pe(()=>{"use strict";Km=yd("C",void 0,void 0)});function us(n){if(Ln.useDeprecatedSynchronousErrorHandling){let e=!Er;if(e&&(Er={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Er;if(Er=null,t)throw i}}else n()}function tg(n){Ln.useDeprecatedSynchronousErrorHandling&&Er&&(Er.errorThrown=!0,Er.error=n)}var Er,ic=pe(()=>{"use strict";vo();Er=null});function vd(n,e){return gE.call(n,e)}function rc(n){Ln.useDeprecatedSynchronousErrorHandling?tg(n):nc(n)}function yE(n){throw n}function _d(n,e){let{onStoppedNotification:t}=Ln;t&&ls.setTimeout(()=>t(n,e))}var wr,gE,xd,ds,vE,Md=pe(()=>{"use strict";sn();yo();vo();md();Zm();eg();pd();ic();wr=class extends on{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,tc(e)&&e.add(this)):this.destination=vE}static create(e,t,i){return new ds(e,t,i)}next(e){this.isStopped?_d(Qm(e),this):this._next(e)}error(e){this.isStopped?_d(Jm(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?_d(Km,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},gE=Function.prototype.bind;xd=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){rc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){rc(i)}else rc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){rc(t)}}},ds=class extends wr{constructor(e,t,i){super();let r;if(st(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Ln.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&vd(e.next,s),error:e.error&&vd(e.error,s),complete:e.complete&&vd(e.complete,s)}):r=e}this.destination=new xd(r)}};vE={closed:!0,next:gd,error:yE,complete:gd}});var hs,sc=pe(()=>{"use strict";hs=typeof Symbol=="function"&&Symbol.observable||"@@observable"});function oc(n){return n}var Ed=pe(()=>{"use strict"});function ng(n){return n.length===0?oc:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ig=pe(()=>{"use strict";Ed()});function rg(n){var e;return(e=n??Ln.Promise)!==null&&e!==void 0?e:Promise}function _E(n){return n&&st(n.next)&&st(n.error)&&st(n.complete)}function xE(n){return n&&n instanceof wr||_E(n)&&tc(n)}var Ut,br=pe(()=>{"use strict";Md();yo();sc();ig();vo();sn();ic();Ut=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=xE(t)?t:new ds(t,i,r);return us(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=rg(i),new i((r,s)=>{let o=new ds({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[hs](){return this}pipe(...t){return ng(t)(this)}toPromise(t){return t=rg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})()});function ME(n){return st(n?.lift)}function Kn(n){return e=>{if(ME(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}var fs=pe(()=>{"use strict";sn()});function Jn(n,e,t,i,r){return new wd(n,e,t,i,r)}var wd,_o=pe(()=>{"use strict";Md();wd=class extends wr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}}});var sg,og=pe(()=>{"use strict";dd();sg=Qa(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"})});var Qn,ac,cc=pe(()=>{"use strict";br();yo();og();hd();ic();Qn=(()=>{class n extends Ut{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ac(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new sg}next(t){us(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){us(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){us(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?fd:(this.currentObservers=null,s.push(t),new on(()=>{this.currentObservers=null,go(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Ut;return t.source=this,t}}return n.create=(e,t)=>new ac(e,t),n})(),ac=class extends Qn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:fd}}});var xo,ag=pe(()=>{"use strict";cc();xo=class extends Qn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}}});var bd,cg=pe(()=>{"use strict";bd={now(){return(bd.delegate||Date).now()},delegate:void 0}});var Mo,lg=pe(()=>{"use strict";cc();cg();Mo=class extends Qn{constructor(e=1/0,t=1/0,i=bd){super(),this._bufferSize=e,this._windowTime=t,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,t)}next(e){let{isStopped:t,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:s,_windowTime:o}=this;t||(i.push(e),!r&&i.push(s.now()+o)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();let t=this._innerSubscribe(e),{_infiniteTimeWindow:i,_buffer:r}=this,s=r.slice();for(let o=0;o<s.length&&!e.closed;o+=i?1:2)e.next(s[o]);return this._checkFinalizedStatuses(e),t}_trimBuffer(){let{_bufferSize:e,_timestampProvider:t,_buffer:i,_infiniteTimeWindow:r}=this,s=(r?1:2)*e;if(e<1/0&&s<i.length&&i.splice(0,i.length-s),!r){let o=t.now(),a=0;for(let c=1;c<i.length&&i[c]<=o;c+=2)a=c;a&&i.splice(0,a+1)}}}});var ug,dg=pe(()=>{"use strict";br();ug=new Ut(n=>n.complete())});function hg(n){return n&&st(n.schedule)}var fg=pe(()=>{"use strict";sn()});function pg(n){return n[n.length-1]}function mg(n){return hg(pg(n))?n.pop():void 0}function gg(n,e){return typeof pg(n)=="number"?n.pop():e}var yg=pe(()=>{"use strict";fg()});function _g(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function vg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Sr(n){return this instanceof Sr?(this.v=n,this):new Sr(n)}function xg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(f){return function(g){return Promise.resolve(g).then(f,d)}}function a(f,g){i[f]&&(r[f]=function(y){return new Promise(function(m,p){s.push([f,y,m,p])>1||c(f,y)})},g&&(r[f]=g(r[f])))}function c(f,g){try{l(i[f](g))}catch(y){h(s[0][3],y)}}function l(f){f.value instanceof Sr?Promise.resolve(f.value.v).then(u,d):h(s[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function h(f,g){f(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Mg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof vg=="function"?vg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Sd=pe(()=>{"use strict"});var lc,Td=pe(()=>{"use strict";lc=n=>n&&typeof n.length=="number"&&typeof n!="function"});function uc(n){return st(n?.then)}var Cd=pe(()=>{"use strict";sn()});function dc(n){return st(n[hs])}var Dd=pe(()=>{"use strict";sc();sn()});function hc(n){return Symbol.asyncIterator&&st(n?.[Symbol.asyncIterator])}var Ad=pe(()=>{"use strict";sn()});function fc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}var Id=pe(()=>{"use strict"});function EE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var pc,Rd=pe(()=>{"use strict";pc=EE()});function mc(n){return st(n?.[pc])}var Pd=pe(()=>{"use strict";Rd();sn()});function gc(n){return xg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Sr(t.read());if(r)return yield Sr(void 0);yield yield Sr(i)}}finally{t.releaseLock()}})}function yc(n){return st(n?.getReader)}var vc=pe(()=>{"use strict";Sd();sn()});function an(n){if(n instanceof Ut)return n;if(n!=null){if(dc(n))return wE(n);if(lc(n))return bE(n);if(uc(n))return SE(n);if(hc(n))return Eg(n);if(mc(n))return TE(n);if(yc(n))return CE(n)}throw fc(n)}function wE(n){return new Ut(e=>{let t=n[hs]();if(st(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function bE(n){return new Ut(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function SE(n){return new Ut(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,nc)})}function TE(n){return new Ut(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Eg(n){return new Ut(e=>{DE(n,e).catch(t=>e.error(t))})}function CE(n){return Eg(gc(n))}function DE(n,e){var t,i,r,s;return _g(this,void 0,void 0,function*(){try{for(t=Mg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}var Ji=pe(()=>{"use strict";Sd();Td();Cd();br();Dd();Ad();Id();Pd();vc();sn();md();sc()});function wn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}var Eo=pe(()=>{"use strict"});function _c(n,e=0){return Kn((t,i)=>{t.subscribe(Jn(i,r=>wn(i,n,()=>i.next(r),e),()=>wn(i,n,()=>i.complete(),e),r=>wn(i,n,()=>i.error(r),e)))})}var Nd=pe(()=>{"use strict";Eo();fs();_o()});function xc(n,e=0){return Kn((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}var Ld=pe(()=>{"use strict";fs()});function wg(n,e){return an(n).pipe(xc(e),_c(e))}var bg=pe(()=>{"use strict";Ji();Nd();Ld()});function Sg(n,e){return an(n).pipe(xc(e),_c(e))}var Tg=pe(()=>{"use strict";Ji();Nd();Ld()});function Cg(n,e){return new Ut(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}var Dg=pe(()=>{"use strict";br()});function Ag(n,e){return new Ut(t=>{let i;return wn(t,e,()=>{i=n[pc](),wn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>st(i?.return)&&i.return()})}var Ig=pe(()=>{"use strict";br();Rd();sn();Eo()});function Mc(n,e){if(!n)throw new Error("Iterable cannot be null");return new Ut(t=>{wn(t,e,()=>{let i=n[Symbol.asyncIterator]();wn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}var Fd=pe(()=>{"use strict";br();Eo()});function Rg(n,e){return Mc(gc(n),e)}var Pg=pe(()=>{"use strict";Fd();vc()});function Ng(n,e){if(n!=null){if(dc(n))return wg(n,e);if(lc(n))return Cg(n,e);if(uc(n))return Sg(n,e);if(hc(n))return Mc(n,e);if(mc(n))return Ag(n,e);if(yc(n))return Rg(n,e)}throw fc(n)}var Lg=pe(()=>{"use strict";bg();Tg();Dg();Ig();Fd();Dd();Cd();Td();Pd();Ad();Id();vc();Pg()});function Fg(n,e){return e?Ng(n,e):an(n)}var Og=pe(()=>{"use strict";Lg();Ji()});function Tr(n,e){return Kn((t,i)=>{let r=0;t.subscribe(Jn(i,s=>{i.next(n.call(e,s,r++))}))})}var Od=pe(()=>{"use strict";fs();_o()});function kg(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},f=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;an(t(y,u++)).subscribe(Jn(e,p=>{r?.(p),s?f(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?wn(e,o,()=>g(p)):g(p)}h()}catch(p){e.error(p)}}))};return n.subscribe(Jn(e,f,()=>{d=!0,h()})),()=>{a?.()}}var Ug=pe(()=>{"use strict";Ji();Eo();_o()});function kd(n,e,t=1/0){return st(e)?kd((i,r)=>Tr((s,o)=>e(i,s,r,o))(an(n(i,r))),t):(typeof e=="number"&&(t=e),Kn((i,r)=>kg(i,r,n,t)))}var Bg=pe(()=>{"use strict";Od();Ji();fs();Ug();sn()});function Vg(n=1/0){return kd(oc,n)}var zg=pe(()=>{"use strict";Bg();Ed()});function Ud(...n){let e=mg(n),t=gg(n,1/0),i=n;return i.length?i.length===1?an(i[0]):Vg(t)(Fg(i,e)):ug}var Hg=pe(()=>{"use strict";zg();Ji();dg();yg();Og()});var Gg=pe(()=>{"use strict"});function Bd(n,e){return Kn((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Jn(i,c=>{r?.unsubscribe();let l=0,u=s++;an(n(c,u)).subscribe(r=Jn(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}var Wg=pe(()=>{"use strict";Ji();fs();_o()});var Vd=pe(()=>{"use strict";cc();ag();lg();yo();Hg();Gg()});var zd=pe(()=>{"use strict";Od();Wg()});function Ph(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Nh(n){return{toString:n}.toString()}function xt(n){for(let e in n)if(n[e]===xt)return e;throw Error("Could not find renamed property on target object.")}function bn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(bn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function jg(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}function Sy(n){return n.__forward_ref__=Sy,n.toString=function(){return bn(this())},n}function On(n){return IE(n)?n():n}function IE(n){return typeof n=="function"&&n.hasOwnProperty(AE)&&n.__forward_ref__===Sy}function ft(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Lh(n){return{providers:n.providers||[],imports:n.imports||[]}}function Fh(n){return $g(n,Ty)||$g(n,Cy)}function $g(n,e){return n.hasOwnProperty(e)?n[e]:null}function RE(n){let e=n&&(n[Ty]||n[Cy]);return e||null}function qg(n){return n&&(n.hasOwnProperty(Xg)||n.hasOwnProperty(PE))?n[Xg]:null}function Dy(n){return n&&!!n.\u0275providers}function OE(n){return typeof n=="string"?n:n==null?"":String(n)}function kE(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():OE(n)}function UE(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new ht(-200,n)}function Oh(n,e){throw new ht(-201,!1)}function Ay(){return Jd}function ei(n){let e=Jd;return Jd=n,e}function Iy(n,e,t){let i=Fh(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Qe.Optional)return null;if(e!==void 0)return e;Oh(n,"Injector")}function WE(){return _s}function ps(n){let e=_s;return _s=n,e}function jE(n,e=Qe.Default){if(_s===void 0)throw new ht(-203,!1);return _s===null?Iy(n,void 0,e):_s.get(n,e&Qe.Optional?null:void 0,e)}function nt(n,e=Qe.Default){return(Ay()||jE)(On(n),e)}function Bt(n,e=Qe.Default){return nt(n,Gc(e))}function Gc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Qd(n){let e=[];for(let t=0;t<n.length;t++){let i=On(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ht(900,!1);let r,s=Qe.Default;for(let o=0;o<i.length;o++){let a=i[o],c=$E(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(nt(r,s))}else e.push(nt(i))}return e}function $E(n){return n[VE]}function qE(n,e,t,i){let r=n[Dc];throw e[Kg]&&r.unshift(e[Kg]),n.message=XE(`
`+n.message,r,t,i),n[zE]=r,n[Dc]=null,n}function XE(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==GE?n.slice(2):n;let r=bn(e);if(Array.isArray(e))r=e.map(bn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):bn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(HE,`
  `)}`}function To(n,e){let t=n.hasOwnProperty(Yg);return t?n[Yg]:null}function YE(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function ZE(n){return n.flat(Number.POSITIVE_INFINITY)}function kh(n,e){n.forEach(t=>Array.isArray(t)?kh(t,e):e(t))}function Ry(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ac(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function KE(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function eh(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];QE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function JE(n){return n===3||n===4||n===6}function QE(n){return n.charCodeAt(0)===64}function Uh(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Jg(n,t,r,null,e[++i]):Jg(n,t,r,null,null))}}return n}function Jg(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}function ew(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&KE(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Bh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Bh(n){return n.type===4&&n.value!==Fy}function tw(n,e,t){let i=n.type===4&&!t?Fy:n.value;return e===i}function nw(n,e,t){let i=4,r=n.attrs,s=r!==null?sw(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Fn(i)&&!Fn(c))return!1;if(o&&Fn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!tw(n,c,t)||c===""&&e.length===1){if(Fn(i))return!1;o=!0}}else if(i&8){if(r===null||!ew(n,r,c,t)){if(Fn(i))return!1;o=!0}}else{let l=e[++a],u=iw(c,r,Bh(n),t);if(u===-1){if(Fn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Fn(i))return!1;o=!0}}}}return Fn(i)||o}function Fn(n){return(n&1)===0}function iw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return ow(e,n)}function rw(n,e,t=!1){for(let i=0;i<e.length;i++)if(nw(n,e[i],t))return!0;return!1}function sw(n){for(let e=0;e<n.length;e++){let t=n[e];if(JE(t))return e}return n.length}function ow(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Qg(n,e){return n?":not("+e.trim()+")":e}function aw(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Fn(o)&&(e+=Qg(s,r),r=""),i=o,s=s||!Fn(i);t++}return r!==""&&(e+=Qg(s,r)),e}function cw(n){return n.map(aw).join(",")}function lw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Fn(r))break;r=s}i++}return{attrs:e,classes:t}}function Oy(n){return Nh(()=>{let e=Vy(n),t=Zn(dn({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Ly.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ri.Emulated,styles:n.styles||ti,_:null,schemas:n.schemas||null,tView:null,id:""});zy(t);let i=n.dependencies;return t.directiveDefs=ty(i,!1),t.pipeDefs=ty(i,!0),t.id=fw(t),t})}function uw(n){return Es(n)||Uy(n)}function dw(n){return n!==null}function Vh(n){return Nh(()=>({type:n.type,bootstrap:n.bootstrap||ti,declarations:n.declarations||ti,imports:n.imports||ti,exports:n.exports||ti,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function ey(n,e){if(n==null)return Co;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Dr.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Dr.None?[i,a]:i,e[s]=o):t[s]=i}return t}function ky(n){return Nh(()=>{let e=Vy(n);return zy(e),e})}function Es(n){return n[NE]||null}function Uy(n){return n[LE]||null}function By(n){return n[FE]||null}function hw(n){let e=Es(n)||Uy(n)||By(n);return e!==null?e.standalone:!1}function Vy(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Co,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||ti,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:ey(n.inputs,e),outputs:ey(n.outputs),debugInfo:null}}function zy(n){n.features?.forEach(e=>e(n))}function ty(n,e){if(!n)return null;let t=e?By:uw;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(dw)}function fw(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Hy(n){return{\u0275providers:n}}function pw(...n){return{\u0275providers:Gy(!0,n),\u0275fromNgModule:!0}}function Gy(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return kh(e,o=>{let a=o;th(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Wy(r,s),t}function Wy(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];zh(r,s=>{e(s,i)})}}function th(n,e,t,i){if(n=On(n),!n)return!1;let r=null,s=qg(n),o=!s&&Es(n);if(!s&&!o){let c=n.ngModule;if(s=qg(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)th(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{kh(s.imports,u=>{th(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Wy(l,e)}if(!a){let l=To(r)||(()=>new r);e({provide:r,useFactory:l,deps:ti},r),e({provide:Ny,useValue:r,multi:!0},r),e({provide:Do,useValue:()=>nt(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;zh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function zh(n,e){for(let t of n)Dy(t)&&(t=t.\u0275providers),Array.isArray(t)?zh(t,e):e(t)}function jy(n){return n!==null&&typeof n=="object"&&mw in n}function gw(n){return!!(n&&n.useExisting)}function yw(n){return!!(n&&n.useFactory)}function nh(n){return typeof n=="function"}function Hh(){return Hd===void 0&&(Hd=new Ic),Hd}function ih(n){let e=Fh(n),t=e!==null?e.factory:To(n);if(t!==null)return t;if(n instanceof Et)throw new ht(204,!1);if(n instanceof Function)return _w(n);throw new ht(204,!1)}function _w(n){if(n.length>0)throw new ht(204,!1);let t=RE(n);return t!==null?()=>t.factory(n):()=>new n}function xw(n){if(jy(n))return ms(void 0,n.useValue);{let e=Mw(n);return ms(e,Ec)}}function Mw(n,e,t){let i;if(nh(n)){let r=On(n);return To(r)||ih(r)}else if(jy(n))i=()=>On(n.useValue);else if(yw(n))i=()=>n.useFactory(...Qd(n.deps||[]));else if(gw(n))i=()=>nt(On(n.useExisting));else{let r=On(n&&(n.useClass||n.provide));if(Ew(n))i=()=>new r(...Qd(n.deps));else return To(r)||ih(r)}return i}function ms(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Ew(n){return!!n.deps}function ww(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function bw(n){return typeof n=="function"||typeof n=="object"&&n instanceof Et}function rh(n,e){for(let t of n)Array.isArray(t)?rh(t,e):t&&Dy(t)?rh(t.\u0275providers,e):e(t)}function Sw(){return Ay()!==void 0||WE()!=null}function Tw(n){return typeof n=="function"}function xs(n){return Array.isArray(n)&&typeof n[qy]=="object"}function bi(n){return Array.isArray(n)&&n[qy]===!0}function Xy(n){return(n.flags&4)!==0}function $c(n){return n.componentOffset>-1}function Wh(n){return(n.flags&1)===1}function ko(n){return!!n.template}function Cw(n){return(n[Ve]&512)!==0}function Yy(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function qc(){return Zy}function Zy(n){return n.type.prototype.ngOnChanges&&(n.setInput=Aw),Dw}function Dw(){let n=Jy(this),e=n?.current;if(e){let t=n.previous;if(t===Co)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function Aw(n,e,t,i,r){let s=this.declaredInputs[i],o=Jy(n)||Iw(n,{previous:Co,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Ro(l&&l.currentValue,t,c===Co),Yy(n,e,r,t)}function Jy(n){return n[Ky]||null}function Iw(n,e){return n[Ky]=e}function Lw(){return Nw}function Mi(n){for(;Array.isArray(n);)n=n[wi];return n}function Vn(n,e){return Mi(e[n.index])}function Qy(n,e){return n.data[e]}function Lr(n,e){let t=e[n];return xs(t)?t:t[wi]}function Fw(n){return(n[Ve]&4)===4}function jh(n){return(n[Ve]&128)===128}function Ow(n){return bi(n[jt])}function Lc(n,e){return e==null?null:n[e]}function ev(n){n[gs]=0}function kw(n){n[Ve]&1024||(n[Ve]|=1024,jh(n)&&Po(n))}function Uw(n,e){for(;n>0;)e=e[Ds],n--;return e}function $h(n){return!!(n[Ve]&9216||n[Ar]?.dirty)}function sh(n){n[si].changeDetectionScheduler?.notify(1),$h(n)?Po(n):n[Ve]&64&&(Lw()?(n[Ve]|=1024,Po(n)):n[si].changeDetectionScheduler?.notify())}function Po(n){n[si].changeDetectionScheduler?.notify();let e=No(n);for(;e!==null&&!(e[Ve]&8192||(e[Ve]|=8192,!jh(e)));)e=No(e)}function tv(n,e){if((n[Ve]&256)===256)throw new ht(911,!1);n[Qi]===null&&(n[Qi]=[]),n[Qi].push(e)}function Bw(n,e){if(n[Qi]===null)return;let t=n[Qi].indexOf(e);t!==-1&&n[Qi].splice(t,1)}function No(n){let e=n[jt];return bi(e)?e[jt]:e}function Vw(){return et.lFrame.elementDepthCount}function zw(){et.lFrame.elementDepthCount++}function Hw(){et.lFrame.elementDepthCount--}function nv(){return et.bindingsEnabled}function Gw(){return et.skipHydrationRootTNode!==null}function Ww(n){return et.skipHydrationRootTNode===n}function jw(){et.skipHydrationRootTNode=null}function Rt(){return et.lFrame.lView}function nr(){return et.lFrame.tView}function iv(n){return et.lFrame.contextLView=n,n[Un]}function rv(n){return et.lFrame.contextLView=null,n}function ai(){let n=sv();for(;n!==null&&n.type===64;)n=n.parent;return n}function sv(){return et.lFrame.currentTNode}function $w(){let n=et.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Uo(n,e){let t=et.lFrame;t.currentTNode=n,t.isParent=e}function ov(){return et.lFrame.isParent}function qw(){et.lFrame.isParent=!1}function Xw(n){return et.lFrame.bindingIndex=n}function Yw(){return et.lFrame.bindingIndex++}function Zw(){return et.lFrame.inI18n}function Kw(n,e){let t=et.lFrame;t.bindingIndex=t.bindingRootIndex=n,oh(e)}function Jw(){return et.lFrame.currentDirectiveIndex}function oh(n){et.lFrame.currentDirectiveIndex=n}function av(){return et.lFrame.currentQueryIndex}function qh(n){et.lFrame.currentQueryIndex=n}function Qw(n){let e=n[Je];return e.type===2?e.declTNode:e.type===1?n[Bn]:null}function cv(n,e,t){if(t&Qe.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Qe.Host);)if(r=Qw(s),r===null||(s=s[Ds],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=et.lFrame=lv();return i.currentTNode=e,i.lView=n,!0}function Xh(n){let e=lv(),t=n[Je];et.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function lv(){let n=et.lFrame,e=n===null?null:n.child;return e===null?uv(n):e}function uv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function dv(){let n=et.lFrame;return et.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}function Yh(){let n=dv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function eb(n){return(et.lFrame.contextLView=Uw(n,et.lFrame.contextLView))[Un]}function tb(){return et.lFrame.selectedIndex}function Rr(n){et.lFrame.selectedIndex=n}function nb(){let n=et.lFrame;return Qy(n.tView,n.selectedIndex)}function ib(){return et.lFrame.currentNamespace}function Zh(){return fv}function Kh(n){fv=n}function rb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Zy(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Jh(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function wc(n,e,t){pv(n,e,3,t)}function bc(n,e,t,i){(n[Ve]&3)===t&&pv(n,e,t,i)}function Wd(n,e){let t=n[Ve];(t&3)===e&&(t&=16383,t+=1,n[Ve]=t)}function pv(n,e,t,i){let r=i!==void 0?n[gs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[gs]+=65536),(a<s||s==-1)&&(sb(n,t,e,c),n[gs]=(n[gs]&4294901760)+c+2),c++}function ry(n,e){ni(4,n,e);let t=ot(null);try{e.call(n)}finally{ot(t),ni(5,n,e)}}function sb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ve]>>14<n[gs]>>16&&(n[Ve]&3)===e&&(n[Ve]+=16384,ry(a,s)):ry(a,s)}function ob(n){return n instanceof Lo}function ab(n){return(n.flags&8)!==0}function cb(n){return(n.flags&16)!==0}function mv(n){return n!==Ms}function Fc(n){return n&32767}function lb(n){return n>>16}function Oc(n,e){let t=lb(n),i=e;for(;t>0;)i=i[Ds],t--;return i}function sy(n){let e=ah;return ah=n,e}function hb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(bo)&&(i=t[bo]),i==null&&(i=t[bo]=db++);let r=i&gv,s=1<<r;e.data[n+(r>>yv)]|=s}function vv(n,e){let t=_v(n,e);if(t!==-1)return t;let i=e[Je];i.firstCreatePass&&(n.injectorIndex=e.length,jd(i.data,n),jd(e,null),jd(i.blueprint,null));let r=Qh(n,e),s=n.injectorIndex;if(mv(r)){let o=Fc(r),a=Oc(r,e),c=a[Je].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function jd(n,e){n.push(0,0,0,0,0,0,0,0,e)}function _v(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Qh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=bv(r),i===null)return Ms;if(t++,r=r[Ds],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Ms}function fb(n,e,t){hb(n,e,t)}function xv(n,e,t){if(t&Qe.Optional||n!==void 0)return n;Oh(e,"NodeInjector")}function Mv(n,e,t,i){if(t&Qe.Optional&&i===void 0&&(i=null),!(t&(Qe.Self|Qe.Host))){let r=n[ws],s=ei(void 0);try{return r?r.get(e,i,t&Qe.Optional):Iy(e,i,t&Qe.Optional)}finally{ei(s)}}return xv(i,e,t)}function Ev(n,e,t,i=Qe.Default,r){if(n!==null){if(e[Ve]&2048&&!(i&Qe.Self)){let o=yb(n,e,t,i,ii);if(o!==ii)return o}let s=wv(n,e,t,i,ii);if(s!==ii)return s}return Mv(e,t,i,r)}function wv(n,e,t,i,r){let s=mb(t);if(typeof s=="function"){if(!cv(e,n,i))return i&Qe.Host?xv(r,t,i):Mv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Qe.Optional))Oh(t);else return o}finally{hv()}}else if(typeof s=="number"){let o=null,a=_v(n,e),c=Ms,l=i&Qe.Host?e[oi][Bn]:null;for((a===-1||i&Qe.SkipSelf)&&(c=a===-1?Qh(n,e):e[a+8],c===Ms||!ay(i,!1)?a=-1:(o=e[Je],a=Fc(c),e=Oc(c,e)));a!==-1;){let u=e[Je];if(oy(s,a,u.data)){let d=pb(a,e,t,o,i,l);if(d!==ii)return d}c=e[a+8],c!==Ms&&ay(i,e[Je].data[a+8]===l)&&oy(s,a,e)?(o=u,a=Fc(c),e=Oc(c,e)):a=-1}}return r}function pb(n,e,t,i,r,s){let o=e[Je],a=o.data[n+8],c=i==null?$c(a)&&ah:i!=o&&(a.type&3)!==0,l=r&Qe.Host&&s===a,u=Sc(a,o,t,c,l);return u!==null?Ss(e,o,u,a):ii}function Sc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let g=o[f];if(f<c&&t===g||f>=c&&g.type===t)return f}if(r){let f=o[c];if(f&&ko(f)&&f.type===t)return c}return null}function Ss(n,e,t,i){let r=n[t],s=e.data;if(ob(r)){let o=r;o.resolving&&UE(kE(s[t]));let a=sy(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?ei(o.injectImpl):null,u=cv(n,i,Qe.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&rb(t,s[t],e)}finally{l!==null&&ei(l),sy(a),o.resolving=!1,hv()}}return r}function mb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(bo)?n[bo]:void 0;return typeof e=="number"?e>=0?e&gv:gb:e}function oy(n,e,t){let i=1<<n;return!!(t[e+(n>>yv)]&i)}function ay(n,e){return!(n&Qe.Self)&&!(n&Qe.Host&&e)}function gb(){return new Cr(ai(),Rt())}function yb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ve]&2048&&!(o[Ve]&512);){let a=wv(s,o,t,i|Qe.Self,ii);if(a!==ii)return a;let c=s.parent;if(!c){let l=o[$y];if(l){let u=l.get(t,ii,i);if(u!==ii)return u}c=bv(o),o=o[Ds]}s=c}return r}function bv(n){let e=n[Je],t=e.type;return t===2?e.declTNode:t===1?n[Bn]:null}function cy(n,e=null,t=null,i){let r=vb(n,e,t,i);return r.resolveInjectorInitializers(),r}function vb(n,e=null,t=null,i,r=new Set){let s=[t||ti,pw(n)];return i=i||(typeof n=="object"?void 0:bn(n)),new Rc(s,e||Hh(),i||null,r)}function $d(n){return n[_b]}function xb(){return new ch(Rt())}function Mb(){return As(ai(),Rt())}function As(n,e){return new Is(Vn(n,e))}function Eb(n){return n instanceof Is?n.nativeElement:n}function qd(n){return e=>{setTimeout(n,void 0,e)}}function wb(){return this._results[Symbol.iterator]()}function Cv(n){return(n.flags&128)===128}function Sb(){return bb++}function Tb(n){Dv.set(n[jc],n)}function Cb(n){Dv.delete(n[jc])}function Pr(n,e){xs(e)?(n[ly]=e[jc],Tb(e)):n[ly]=e}function Av(n){return Rv(n[Io])}function Iv(n){return Rv(n[kn])}function Rv(n){for(;n!==null&&!bi(n);)n=n[kn];return n}function Pv(n){dh=n}function Db(){if(dh!==void 0)return dh;if(typeof document<"u")return document;throw new ht(210,!1)}function rf(n,e,t=!1){return Pb(n,e,t)}function Lv(n){return n.ownerDocument.defaultView}function sf(n,e){return Lb(n,e)}function vs(n,e,t,i,r){if(i!=null){let s,o=!1;bi(i)?s=i:xs(i)&&(o=!0,i=i[wi]);let a=Mi(i);n===0&&t!==null?r==null?Bv(e,t,a):kc(e,t,a,r||null,!0):n===1&&t!==null?kc(e,t,a,r||null,!0):n===2?Zb(e,a,o):n===3&&e.destroyNode(a),s!=null&&Jb(e,n,s,t,r)}}function Fb(n,e){return n.createText(e)}function Fv(n,e,t){return n.createElement(e,t)}function Ob(n,e){Ov(n,e),e[wi]=null,e[Bn]=null}function kb(n,e,t,i,r,s){i[wi]=r,i[Bn]=e,Xc(n,i,t,1,r,s)}function Ov(n,e){e[si].changeDetectionScheduler?.notify(1),Xc(n,e,e[fn],2,null,null)}function Ub(n){let e=n[Io];if(!e)return Xd(n[Je],n);for(;e;){let t=null;if(xs(e))t=e[Io];else{let i=e[hn];i&&(t=i)}if(!t){for(;e&&!e[kn]&&e!==n;)xs(e)&&Xd(e[Je],e),e=e[jt];e===null&&(e=n),xs(e)&&Xd(e[Je],e),t=e&&e[kn]}e=t}}function Bb(n,e,t,i){let r=hn+i,s=t.length;i>0&&(t[r-1][kn]=e),i<s-hn?(e[kn]=t[r],Ry(t,hn+i,e)):(t.push(e),e[kn]=null),e[jt]=t;let o=e[Oo];o!==null&&t!==o&&Vb(o,e);let a=e[xi];a!==null&&a.insertView(n),sh(e),e[Ve]|=128}function Vb(n,e){let t=n[bs],r=e[jt][jt][oi];e[oi]!==r&&(n[Ve]|=Gh.HasTransplantedViews),t===null?n[bs]=[e]:t.push(e)}function kv(n,e){let t=n[bs],i=t.indexOf(e);t.splice(i,1)}function hh(n,e){if(n.length<=hn)return;let t=hn+e,i=n[t];if(i){let r=i[Oo];r!==null&&r!==n&&kv(r,i),e>0&&(n[t-1][kn]=i[kn]);let s=Ac(n,hn+e);Ob(i[Je],i);let o=s[xi];o!==null&&o.detachView(s[Je]),i[jt]=null,i[kn]=null,i[Ve]&=-129}return i}function Uv(n,e){if(!(e[Ve]&256)){let t=e[fn];t.destroyNode&&Xc(n,e,t,3,null,null),Ub(e)}}function Xd(n,e){if(e[Ve]&256)return;let t=ot(null);try{e[Ve]&=-129,e[Ve]|=256,e[Ar]&&jm(e[Ar]),Hb(n,e),zb(n,e),e[Je].type===1&&e[fn].destroy();let i=e[Oo];if(i!==null&&bi(e[jt])){i!==e[jt]&&kv(i,e);let r=e[xi];r!==null&&r.detachView(n)}Cb(e)}finally{ot(t)}}function zb(n,e){let t=n.cleanup,i=e[Ao];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Ao]=null);let r=e[Qi];if(r!==null){e[Qi]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Hb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Lo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];ni(4,a,c);try{c.call(a)}finally{ni(5,a,c)}}else{ni(4,r,s);try{s.call(r)}finally{ni(5,r,s)}}}}}function Gb(n,e,t){return Wb(n,e.parent,t)}function Wb(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[wi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===ri.None||s===ri.Emulated)return null}return Vn(i,t)}}function kc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Bv(n,e,t){n.appendChild(e,t)}function uy(n,e,t,i,r){i!==null?kc(n,e,t,i,r):Bv(n,e,t)}function jb(n,e,t,i){n.removeChild(e,t,i)}function of(n,e){return n.parentNode(e)}function $b(n,e){return n.nextSibling(e)}function qb(n,e,t){return Yb(n,e,t)}function Xb(n,e,t){return n.type&40?Vn(n,t):null}function af(n,e,t,i){let r=Gb(n,i,e),s=e[fn],o=i.parent||e[Bn],a=qb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)uy(s,r,t[c],a,!1);else uy(s,r,t,a,!1);dy!==void 0&&dy(s,i,e,t,r)}function Tc(n,e){if(e!==null){let t=e.type;if(t&3)return Vn(e,n);if(t&4)return fh(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Tc(n,i);{let r=n[e.index];return bi(r)?fh(-1,r):Mi(r)}}else{if(t&32)return sf(e,n)()||Mi(n[e.index]);{let i=Vv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=No(n[oi]);return Tc(r,i)}else return Tc(n,e.next)}}}return null}function Vv(n,e){if(e!==null){let i=n[oi][Bn],r=e.projection;return i.projection[r]}return null}function fh(n,e){let t=hn+n+1;if(t<e.length){let i=e[t],r=i[Je].firstChild;if(r!==null)return Tc(i,r)}return e[Ir]}function Zb(n,e,t){let i=of(n,e);i&&jb(n,i,e,t)}function cf(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Pr(Mi(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)cf(n,e,t.child,i,r,s,!1),vs(e,n,r,a,s);else if(c&32){let l=sf(t,i),u;for(;u=l();)vs(e,n,r,u,s);vs(e,n,r,a,s)}else c&16?Kb(n,e,i,t,r,s):vs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Xc(n,e,t,i,r,s){cf(t,i,n.firstChild,e,r,s,!1)}function Kb(n,e,t,i,r,s){let o=t[oi],c=o[Bn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];vs(e,n,r,u,s)}else{let l=c,u=o[jt];Cv(i)&&(l.flags|=128),cf(n,e,l,u,r,s,!0)}}function Jb(n,e,t,i,r){let s=t[Ir],o=Mi(t);s!==o&&vs(e,n,i,s,r);for(let a=hn;a<t.length;a++){let c=t[a];Xc(c[Je],c,n,e,i,s)}}function Qb(n,e,t){n.setAttribute(e,"style",t)}function zv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Hv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&eh(n,e,i),r!==null&&zv(n,e,r),s!==null&&Qb(n,e,s)}function eS(n,e,t,i){if(!i)if((e[Ve]&3)===3){let s=n.preOrderCheckHooks;s!==null&&wc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&bc(e,s,0,t)}Rr(t)}function ir(n,e=Qe.Default){let t=Rt();if(t===null)return nt(n,e);let i=ai();return Ev(i,t,On(n),e)}function Wv(n,e,t,i,r,s){let o=ot(null);try{let a=null;r&Dr.SignalBased&&(a=e[i][zm]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Dr.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Yy(e,a,i,s)}finally{ot(o)}}function tS(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Rr(~r);else{let s=r,o=t[++i],a=t[++i];Kw(o,s);let c=e[s];a(2,c)}}}finally{Rr(-1)}}function Yc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[wi]=r,d[Ve]=i|4|128|8|64,(l!==null||n&&n[Ve]&2048)&&(d[Ve]|=2048),ev(d),d[jt]=d[Ds]=n,d[Un]=t,d[si]=o||n&&n[si],d[fn]=a||n&&n[fn],d[ws]=c||n&&n[ws]||null,d[Bn]=s,d[jc]=Sb(),d[Pc]=u,d[$y]=l,d[oi]=e.type==2?n[oi]:d,d}function Zc(n,e,t,i,r){let s=n.data[e];if(s===null)s=nS(n,e,t,i,r),Zw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=$w();s.injectorIndex=o===null?-1:o.injectorIndex}return Uo(s,!0),s}function nS(n,e,t,i,r){let s=sv(),o=ov(),a=o?s:s&&s.parent,c=n.data[e]=cS(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function jv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function $v(n,e,t,i,r){let s=tb(),o=i&2;try{Rr(-1),o&&e.length>tr&&eS(n,e,tr,!1),ni(o?2:0,r),t(i,r)}finally{Rr(s),ni(o?3:1,r)}}function qv(n,e,t){if(Xy(e)){let i=ot(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ot(i)}}}function Xv(n,e,t){nv()&&(mS(n,e,t,Vn(t,e)),(t.flags&64)===64&&Qv(n,e,t))}function Yv(n,e,t=Vn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Zv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=lf(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function lf(n,e,t,i,r,s,o,a,c,l,u){let d=tr+i,h=d+r,f=iS(d,h),g=typeof l=="function"?l():l;return f[Je]={type:n,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function iS(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Gv);return t}function rS(n,e,t,i){let s=i.get(Nb,Nv)||t===ri.ShadowDom,o=n.selectRootElement(e,s);return sS(o),o}function sS(n){oS(n)}function aS(n,e,t,i){let r=n_(e);r.push(t),n.firstCreatePass&&i_(n).push(i,r.length-1)}function cS(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Gw()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function hy(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Dr.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?fy(i,t,l,a,c):fy(i,t,l,a)}return i}function fy(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function lS(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;c=hy(0,d.inputs,u,c,f),l=hy(1,d.outputs,u,l,g);let y=c!==null&&o!==null&&!Bh(e)?bS(c,u,o):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function uS(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function dS(n,e,t,i,r,s,o,a){let c=Vn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(uf(n,t,u,i,r),$c(e)&&hS(t,e.index)):e.type&3?(i=uS(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function hS(n,e){let t=Lr(e,n);t[Ve]&16||(t[Ve]|=64)}function Kv(n,e,t,i){if(nv()){let r=i===null?null:{"":-1},s=yS(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Jv(n,e,t,o,r,a),r&&vS(t,i,r)}t.mergedAttrs=Uh(t.mergedAttrs,t.attrs)}function Jv(n,e,t,i,r,s){for(let l=0;l<i.length;l++)fb(vv(t,e),n,i[l].type);xS(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=jv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Uh(t.mergedAttrs,u.hostAttrs),MS(n,t,e,c,u),_S(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}lS(n,t,s)}function fS(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;pS(o)!=a&&o.push(a),o.push(t,i,s)}}function pS(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function mS(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;$c(t)&&ES(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||vv(t,e),Pr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Ss(e,n,a,t);if(Pr(l,e),o!==null&&wS(e,a-r,l,c,t,o),ko(c)){let u=Lr(t.index,e);u[Un]=Ss(e,n,a,t)}}}function Qv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Jw();try{Rr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];oh(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&gS(c,l)}}finally{Rr(-1),oh(o)}}function gS(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function yS(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(rw(e,o.selectors,!1))if(i||(i=[]),ko(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;ph(n,e,c)}else i.unshift(o),ph(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function ph(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function vS(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ht(-301,!1);i.push(e[r],s)}}}function _S(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ko(e)&&(t[""]=n)}}function xS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function MS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=To(r.type,!0)),o=new Lo(s,ko(r),ir);n.blueprint[i]=o,t[i]=o,fS(n,e,i,jv(n,t,r.hostVars,Gv),r)}function ES(n,e,t){let i=Vn(e,n),r=Zv(t),s=n[si].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Kc(n,Yc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function wS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Wv(i,t,c,l,u,d)}}function bS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function e_(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function t_(n,e){let t=n.contentQueries;if(t!==null){let i=ot(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];qh(s),a.contentQueries(2,e[o],o)}}}finally{ot(i)}}}function Kc(n,e){return n[Io]?n[ny][kn]=e:n[Io]=e,n[ny]=e,e}function mh(n,e,t){qh(0);let i=ot(null);try{e(n,t)}finally{ot(i)}}function n_(n){return n[Ao]||(n[Ao]=[])}function i_(n){return n.cleanup||(n.cleanup=[])}function r_(n,e){let t=n[ws],i=t?t.get(Ei,null):null;i&&i.handleError(e)}function uf(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Wv(u,l,i,a,c,r)}}function SS(n,e){let t=Lr(e,n),i=t[Je];TS(i,t);let r=t[wi];r!==null&&t[Pc]===null&&(t[Pc]=rf(r,t[ws])),df(i,t,t[Un])}function TS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function df(n,e,t){Xh(e);try{let i=n.viewQuery;i!==null&&mh(1,i,t);let r=n.template;r!==null&&$v(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[xi]?.finishViewCreation(n),n.staticContentQueries&&t_(n,e),n.staticViewQueries&&mh(2,n.viewQuery,t);let s=n.components;s!==null&&CS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ve]&=-5,Yh()}}function CS(n,e){for(let t=0;t<e.length;t++)SS(n,e[t])}function DS(n,e,t,i){let r=ot(null);try{let s=e.tView,a=n[Ve]&4096?4096:16,c=Yc(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Oo]=l;let u=n[xi];return u!==null&&(c[xi]=u.createEmbeddedView(s)),df(s,c,t),c}finally{ot(r)}}function py(n,e){return!e||e.firstChild===null||Cv(n)}function AS(n,e,t,i=!0){let r=e[Je];if(Bb(r,e,n,t),i){let o=fh(t,n),a=e[fn],c=of(a,n[Ir]);c!==null&&kb(r,n[Bn],a,e,c,o)}let s=e[Pc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Uc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Mi(s)),bi(s)&&IS(s,i);let o=t.type;if(o&8)Uc(n,e,t.child,i);else if(o&32){let a=sf(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Vv(e,t);if(Array.isArray(a))i.push(...a);else{let c=No(e[oi]);Uc(c[Je],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function IS(n,e){for(let t=hn;t<n.length;t++){let i=n[t],r=i[Je].firstChild;r!==null&&Uc(i[Je],i,r,e)}n[Ir]!==n[wi]&&e.push(n[Ir])}function RS(n){return n[Ar]??PS(n)}function PS(n){let e=s_.pop()??Object.create(LS);return e.lView=n,e}function NS(n){n.lView[Ar]!==n&&(n.lView=null,s_.push(n))}function a_(n,e=!0,t=0){let i=n[si],r=i.rendererFactory,s=!1;s||r.begin?.();try{FS(n,t)}catch(o){throw e&&r_(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function FS(n,e){gh(n,e);let t=0;for(;$h(n);){if(t===o_)throw new ht(103,!1);t++,gh(n,1)}}function OS(n,e,t,i){let r=e[Ve];if((r&256)===256)return;let s=!1;!s&&e[si].inlineEffectRunner?.flush(),Xh(e);let o=null,a=null;!s&&kS(n)&&(a=RS(e),o=Gm(a));try{ev(e),Xw(n.bindingStartIndex),t!==null&&$v(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&wc(e,d,null)}else{let d=n.preOrderHooks;d!==null&&bc(e,d,0,null),Wd(e,0)}if(US(e),c_(e,0),n.contentQueries!==null&&t_(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&wc(e,d)}else{let d=n.contentHooks;d!==null&&bc(e,d,1),Wd(e,1)}tS(n,e);let l=n.components;l!==null&&u_(e,l,0);let u=n.viewQuery;if(u!==null&&mh(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&wc(e,d)}else{let d=n.viewHooks;d!==null&&bc(e,d,2),Wd(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Gd]){for(let d of e[Gd])d();e[Gd]=null}s||(e[Ve]&=-73)}catch(c){throw Po(e),c}finally{a!==null&&(Wm(a,o),NS(a)),Yh()}}function kS(n){return n.type!==2}function c_(n,e){for(let t=Av(n);t!==null;t=Iv(t))for(let i=hn;i<t.length;i++){let r=t[i];l_(r,e)}}function US(n){for(let e=Av(n);e!==null;e=Iv(e)){if(!(e[Ve]&Gh.HasTransplantedViews))continue;let t=e[bs];for(let i=0;i<t.length;i++){let r=t[i],s=r[jt];kw(r)}}}function BS(n,e,t){let i=Lr(e,n);l_(i,t)}function l_(n,e){jh(n)&&gh(n,e)}function gh(n,e){let i=n[Je],r=n[Ve],s=n[Ar],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&cd(s)),s&&(s.dirty=!1),n[Ve]&=-9217,o)OS(i,n,i.template,n[Un]);else if(r&8192){c_(n,1);let a=i.components;a!==null&&u_(n,a,1)}}function u_(n,e,t){for(let i=0;i<e.length;i++)BS(n,e[i],t)}function hf(n){for(n[si].changeDetectionScheduler?.notify();n;){n[Ve]|=64;let e=No(n);if(Cw(n)&&!e)return n;n=e}return null}function HS(){return ff(ai(),Rt())}function ff(n,e){return n.type&4?new zS(e,n,As(n,e)):null}function my(n,e){return GS(n,e)}function WS(n){let e=Error(`No component factory found for ${bn(n)}.`);return e[jS]=n,e}function d_(n){gy.has(n)||(gy.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function yy(...n){}function qS(){let n=typeof wo.requestAnimationFrame=="function",e=wo[n?"requestAnimationFrame":"setTimeout"],t=wo[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}function pf(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function YS(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(wo,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,xh(n),n.isCheckStableRunning=!0,pf(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),xh(n))}function ZS(n){let e=()=>{YS(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(KS(a))return t.invokeTask(r,s,o,a);try{return vy(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),_y(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return vy(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),_y(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,xh(n),pf(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function xh(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function vy(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function _y(n){n._nesting--,pf(n)}function KS(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function Mh(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=jg(r,a);else if(s==2){let c=a,l=e[++o];i=jg(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function xy(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function JS(n){let e=n.toLowerCase();return e==="svg"?Rw:e==="math"?Pw:null}function QS(n,e){let t=n[Je],i=tr;return n[i]=e,Zc(t,i,2,"#host",null)}function eT(n,e,t,i,r,s,o){let a=r[Je];tT(i,n,e,o);let c=null;e!==null&&(c=rf(e,r[ws]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Yc(r,Zv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&ph(a,n,i.length-1),Kc(r,d),r[n.index]=d}function tT(n,e,t,i){for(let r of n)e.mergedAttrs=Uh(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Mh(e,e.mergedAttrs,!0),t!==null&&Hv(i,t,e))}function nT(n,e,t,i,r,s){let o=ai(),a=r[Je],c=Vn(o,r);Jv(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=Ss(r,a,d,o);Pr(h,r)}Qv(a,r,o),c&&Pr(c,r);let l=Ss(r,a,o.directiveStart+o.componentOffset,o);if(n[Un]=r[Un]=l,s!==null)for(let u of s)u(l,e);return qv(a,o,r),l}function iT(n,e,t,i){if(i)eh(n,t,["ng-version","17.3.12"]);else{let{attrs:r,classes:s}=lw(e.selectors[0]);r&&eh(n,t,r),s&&s.length>0&&zv(n,t,s.join(" "))}}function rT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function sT(){let n=ai();Jh(Rt()[Je],n)}function oT(){let n=ai();return p_(n,Rt())}function My(n){return n[Nc]}function Zd(n){return n[Nc]||(n[Nc]=[])}function p_(n,e){let t,i=e[n.index];return bi(i)?t=i:(t=e_(i,e,null,n),e[n.index]=t,Kc(e,t)),lT(t,e,n,i),new f_(t,n,e)}function cT(n,e){let t=n[fn],i=t.createComment(""),r=Vn(e,n),s=of(t,r);return kc(t,s,i,$b(t,r),!1),i}function dT(n,e,t){return uT(n,e,t)}function hT(n,e,t,i){if(n[Ir])return;let r;t.type&8?r=Mi(i):r=cT(e,t),n[Ir]=r}function fT(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function pT(n,e){return n.type&11?As(n,e):n.type&4?ff(n,e):null}function mT(n,e,t,i){return t===-1?pT(e,n):t===-2?gT(n,e,i):Ss(n,n[Je],t,e)}function gT(n,e,t){if(t===Is)return As(e,n);if(t===Ts)return ff(e,n);if(t===Vo)return p_(e,n)}function m_(n,e,t,i){let r=e[xi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(mT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Ih(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=m_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=hn;d<u.length;d++){let h=u[d];h[Oo]===h[jt]&&Ih(h[Je],h,l,i)}if(u[bs]!==null){let d=u[bs];for(let h=0;h<d.length;h++){let f=d[h];Ih(f[Je],f,l,i)}}}}}return i}function yT(n,e){return n[xi].queries[e].queryList}function vT(n,e,t){let i=new uh((t&4)===4);return aS(n,e,i,i.destroy),(e[xi]??=new Th).queries.push(new Sh(i))-1}function _T(n,e,t){let i=nr();return i.firstCreatePass&&(MT(i,new Ch(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),vT(i,Rt(),e)}function xT(n){return n.split(",").map(e=>e.trim())}function MT(n,e,t){n.queries===null&&(n.queries=new Dh),n.queries.track(new Ah(e,t))}function mf(n,e){return n.queries.getByIndex(e)}function ET(n,e){let t=n[Je],i=mf(t,e);return i.crossesNgTemplate?Ih(t,n,e,[]):m_(t,n,i,e)}function wT(n,e,t=null){return new zc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}function bT(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function ST(n){return(n.flags&32)===32}function TT(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Zc(e,n,4,o||null,Lc(l,a));Kv(e,t,u,Lc(l,c)),Jh(e,u);let d=u.tView=lf(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function gf(n,e,t,i,r,s,o,a){let c=Rt(),l=nr(),u=n+tr,d=l.firstCreatePass?TT(u,l,c,e,t,i,r,s,o):l.data[u];Uo(d,!1);let h=CT(l,c,d,n);Zh()&&af(l,c,h,d),Pr(h,c);let f=e_(h,c,h,d);return c[u]=f,Kc(c,f),dT(f,d,c),Wh(d)&&Xv(l,c,d),o!=null&&Yv(c,d,a),gf}function DT(n,e,t,i){return Kh(!0),e[fn].createComment("")}function yf(n,e,t){let i=Rt(),r=Yw();if(bT(i,r,e)){let s=nr(),o=nb();dS(s,o,i,n,e,i[fn],t,!1)}return yf}function Ey(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";uf(n,t,s[o],o,i)}function AT(n,e,t,i,r,s){let o=e.consts,a=Lc(o,r),c=Zc(e,n,2,i,a);return Kv(e,t,c,Lc(o,s)),c.attrs!==null&&Mh(c,c.attrs,!1),c.mergedAttrs!==null&&Mh(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Jc(n,e,t,i){let r=Rt(),s=nr(),o=tr+n,a=r[fn],c=s.firstCreatePass?AT(o,s,r,e,t,i):s.data[o],l=IT(s,r,c,a,e,n);r[o]=l;let u=Wh(c);return Uo(c,!0),Hv(a,l,c),!ST(c)&&Zh()&&af(s,r,l,c),Vw()===0&&Pr(l,r),zw(),u&&(Xv(s,r,c),qv(s,c,r)),i!==null&&Yv(r,c),Jc}function Qc(){let n=ai();ov()?qw():(n=n.parent,Uo(n,!1));let e=n;Ww(e)&&jw(),Hw();let t=nr();return t.firstCreatePass&&(Jh(t,n),Xy(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&ab(e)&&Ey(t,e,Rt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&cb(e)&&Ey(t,e,Rt(),e.stylesWithoutHost,!1),Qc}function vf(n,e,t,i){return Jc(n,e,t,i),Qc(),vf}function y_(){return Rt()}function PT(n){typeof n=="string"&&(RT=n.toLowerCase().replace(/_/g,"-"))}function el(n,e,t,i){let r=Rt(),s=nr(),o=ai();return LT(s,r,r[fn],o,n,e,i),el}function NT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Ao],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function LT(n,e,t,i,r,s,o){let a=Wh(i),l=n.firstCreatePass&&i_(n),u=e[Un],d=n_(e),h=!0;if(i.type&3||o){let y=Vn(i,e),m=o?o(y):y,p=d.length,S=o?x=>o(Mi(x[i.index])):i.index,v=null;if(!o&&a&&(v=NT(n,e,r,i.index)),v!==null){let x=v.__ngLastListenerFn__||v;x.__ngNextListenerFn__=s,v.__ngLastListenerFn__=s,h=!1}else{s=by(i,e,u,s,!1);let x=t.listen(m,r,s);d.push(s,x),l&&l.push(r,S,p,p+1)}}else s=by(i,e,u,s,!1);let f=i.outputs,g;if(h&&f!==null&&(g=f[r])){let y=g.length;if(y)for(let m=0;m<y;m+=2){let p=g[m],S=g[m+1],N=e[p][S].subscribe(s),P=d.length;d.push(s,N),l&&l.push(r,i.index,P,-(P+1))}}}function wy(n,e,t,i){let r=ot(null);try{return ni(6,e,t),t(i)!==!1}catch(s){return r_(n,s),!1}finally{ni(7,e,t),ot(r)}}function by(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?Lr(n.index,e):e;hf(a);let c=wy(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=wy(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function v_(n=1){return eb(n)}function __(n,e,t){_T(n,e,t)}function x_(n){let e=Rt(),t=nr(),i=av();qh(i+1);let r=mf(t,i);if(n.dirty&&Fw(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=ET(e,i);n.reset(s,Eb),n.notifyOnChanges()}return!0}return!1}function M_(){return yT(Rt(),av())}function E_(n,e=""){let t=Rt(),i=nr(),r=n+tr,s=i.firstCreatePass?Zc(i,r,1,e,null):i.data[r],o=FT(i,t,s,e,n);t[r]=o,Zh()&&af(i,t,o,s),Uo(s,!1)}function w_(n){d_("NgStandalone"),n.getStandaloneInjector=e=>e.get(OT).getOrCreateStandaloneInjector(n)}function _f(n){return!!n&&typeof n.then=="function"}function S_(n){return!!n&&typeof n.subscribe=="function"}function BT(){$m(()=>{throw new ht(600,!1)})}function VT(n){return n.isBoundToModule}function zT(n,e,t){try{let i=t();return _f(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}function Kd(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function HT(n,e,t){!e&&!Rh(n)||GT(n,t,e)}function Rh(n){return $h(n)}function GT(n,e,t){let i;t?(i=0,n[Ve]|=1024):n[Ve]&64?i=0:i=1,a_(n,e,i)}function jT(n){return[{provide:Vt,useFactory:n},{provide:Do,multi:!0,useFactory:()=>{let e=Bt(WT,{optional:!0});return()=>e.initialize()}},{provide:Do,multi:!0,useFactory:()=>{let e=Bt(YT);return()=>{e.initialize()}}},{provide:Sv,useFactory:$T}]}function $T(){let n=Bt(Vt),e=Bt(Ei);return t=>n.runOutsideAngular(()=>e.handleError(t))}function qT(n){let e=jT(()=>new Vt(XT(n)));return Hy([[],e])}function XT(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}function ZT(){return typeof $localize<"u"&&$localize.locale||Hc}function KT(n=[],e){return Bo.create({name:e,providers:[{provide:Wc,useValue:"platform"},{provide:C_,useValue:new Set([()=>Cc=null])},...n]})}function JT(n=[]){if(Cc)return Cc;let e=KT(n);return Cc=e,BT(),QT(e),e}function QT(n){n.get(tf,null)?.forEach(t=>t())}function eC(n){return tC(ai(),Rt(),(n&16)===16)}function tC(n,e,t){if($c(n)&&!t){let i=Lr(n.index,e);return new Nr(i,i)}else if(n.type&47){let i=e[oi];return new Nr(i,e)}return null}function D_(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=JT(i),s=[qT(),...t||[]],a=new zc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(Vt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(Ei,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:f=>{l.handleError(f)}})});let d=()=>a.destroy(),h=r.get(C_);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),zT(l,c,()=>{let f=a.get(T_);return f.runInitializers(),f.donePromise.then(()=>{let g=a.get(xf,Hc);PT(g||Hc);let y=a.get(zo);return e!==void 0&&y.bootstrap(e),y})})})}catch(e){return Promise.reject(e)}}var ht,wo,AE,Ty,Xg,Cy,PE,Et,NE,LE,FE,Yg,bo,Zg,Qe,Jd,BE,So,VE,Dc,zE,HE,GE,Kg,_s,Co,ti,Do,Py,Ny,Ic,Ly,ri,Dr,Fy,mw,Wc,Ec,vw,Hd,er,Rc,wi,Je,Ve,jt,kn,Bn,Pc,Ao,Un,ws,si,fn,Io,ny,Ds,oi,Oo,gs,xi,jc,$y,Qi,Gd,Ar,tr,qy,Ir,Nc,bs,hn,Gh,Ro,Ky,iy,ni,Rw,Pw,Nw,et,hv,fv,Ms,Lo,ah,ub,gv,yv,db,ii,Cr,Bo,_b,Ei,Sv,Tv,ch,Is,lh,ys,uh,Dv,bb,ly,dh,ef,Ab,tf,Rs,nf,Ib,Rb,Pb,Nv,Nb,Fr,Lb,Yb,dy,Gv,oS,s_,LS,o_,Nr,Ts,VS,zS,y2,GS,yh,vh,Bc,jS,_h,Ps,Fo,$S,Yd,gy,Vt,XS,h_,Eh,wh,Vc,bh,Vo,aT,f_,lT,uT,Sh,Th,Ch,Dh,Ah,Cs,zc,g_,CT,IT,Hc,RT,FT,OT,b_,kT,T_,UT,zo,WT,YT,xf,C_,Cc,Ns,Sn=pe(()=>{"use strict";qm();Vd();zd();ht=class extends Error{constructor(e,t){super(Ph(e,t)),this.code=e}};wo=globalThis;AE=xt({__forward_ref__:xt});Ty=xt({\u0275prov:xt}),Xg=xt({\u0275inj:xt}),Cy=xt({ngInjectableDef:xt}),PE=xt({ngInjectorDef:xt}),Et=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=ft({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};NE=xt({\u0275cmp:xt}),LE=xt({\u0275dir:xt}),FE=xt({\u0275pipe:xt}),Yg=xt({\u0275fac:xt}),bo=xt({__NG_ELEMENT_ID__:xt}),Zg=xt({__NG_ENV_ID__:xt});Qe=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Qe||{});BE={},So=BE,VE="__NG_DI_FLAG__",Dc="ngTempTokenPath",zE="ngTokenPath",HE=/\n/gm,GE="\u0275",Kg="__source";Co={},ti=[],Do=new Et(""),Py=new Et("",-1),Ny=new Et(""),Ic=class{get(e,t=So){if(t===So){let i=new Error(`NullInjectorError: No provider for ${bn(e)}!`);throw i.name="NullInjectorError",i}return t}},Ly=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Ly||{}),ri=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ri||{}),Dr=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Dr||{});Fy="ng-template";mw=xt({provide:String,useValue:xt});Wc=new Et(""),Ec={},vw={};er=class{},Rc=class extends er{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,rh(e,o=>this.processProvider(o)),this.records.set(Py,ms(void 0,this)),r.has("environment")&&this.records.set(er,ms(void 0,this));let s=this.records.get(Wc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Ny,ti,Qe.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=ot(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ot(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=ps(this),i=ei(void 0),r;try{return e()}finally{ps(t),ei(i)}}get(e,t=So,i=Qe.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Zg))return e[Zg](this);i=Gc(i);let r,s=ps(this),o=ei(void 0);try{if(!(i&Qe.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=bw(e)&&Fh(e);l&&this.injectableDefInScope(l)?c=ms(ih(e),Ec):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Qe.Self?Hh():this.parent;return t=i&Qe.Optional&&t===So?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Dc]=a[Dc]||[]).unshift(bn(e)),s)throw a;return qE(a,e,"R3InjectorError",this.source)}else throw a}finally{ei(o),ps(s)}}resolveInjectorInitializers(){let e=ot(null),t=ps(this),i=ei(void 0),r;try{let s=this.get(Do,ti,Qe.Self);for(let o of s)o()}finally{ps(t),ei(i),ot(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(bn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ht(205,!1)}processProvider(e){e=On(e);let t=nh(e)?e:On(e&&e.provide),i=xw(e);if(!nh(e)&&e.multi===!0){let r=this.records.get(t);r||(r=ms(void 0,Ec,!0),r.factory=()=>Qd(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ot(null);try{return t.value===Ec&&(t.value=vw,t.value=t.factory()),typeof t.value=="object"&&t.value&&ww(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ot(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=On(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};wi=0,Je=1,Ve=2,jt=3,kn=4,Bn=5,Pc=6,Ao=7,Un=8,ws=9,si=10,fn=11,Io=12,ny=13,Ds=14,oi=15,Oo=16,gs=17,xi=18,jc=19,$y=20,Qi=21,Gd=22,Ar=23,tr=25,qy=1,Ir=7,Nc=8,bs=9,hn=10,Gh=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Gh||{});Ro=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};qc.ngInherit=!0;Ky="__ngSimpleChanges__";iy=null,ni=function(n,e,t){iy?.(n,e,t)},Rw="svg",Pw="math",Nw=!1;et={lFrame:uv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};hv=dv;fv=!0;Ms=-1,Lo=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};ah=!0;ub=256,gv=ub-1,yv=5,db=0,ii={};Cr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Ev(this._tNode,this._lView,e,Gc(i),t)}};Bo=(()=>{class n{static{this.THROW_IF_NOT_FOUND=So}static{this.NULL=new Ic}static create(t,i){if(Array.isArray(t))return cy({name:""},i,t,"");{let r=t.name??"";return cy({name:r},t.parent,t.providers,r)}}static{this.\u0275prov=ft({token:n,providedIn:"any",factory:()=>nt(Py)})}static{this.__NG_ELEMENT_ID__=-1}}return n})();_b="ngOriginalError";Ei=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&$d(e);for(;t&&$d(t);)t=$d(t);return t||null}},Sv=new Et("",{providedIn:"root",factory:()=>Bt(Ei).handleError.bind(void 0)}),Tv=(()=>{class n{static{this.__NG_ELEMENT_ID__=xb}static{this.__NG_ENV_ID__=t=>t}}return n})(),ch=class extends Tv{constructor(e){super(),this._lView=e}onDestroy(e){return tv(this._lView,e),()=>Bw(this._lView,e)}};Is=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=Mb}}return n})();lh=class extends Qn{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,Sw()&&(this.destroyRef=Bt(Tv,{optional:!0})??void 0)}emit(e){let t=ot(null);try{super.next(e)}finally{ot(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=qd(s),r&&(r=qd(r)),o&&(o=qd(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof on&&e.add(a),a}};ys=lh;uh=class n{get changes(){return this._changes??=new ys}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=wb)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=ZE(e);(this._changesDetected=!YE(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};Dv=new Map,bb=0;ly="__ngContext__";ef=new Et("",{providedIn:"root",factory:()=>Ab}),Ab="ng",tf=new Et(""),Rs=new Et("",{providedIn:"platform",factory:()=>"unknown"}),nf=new Et("",{providedIn:"root",factory:()=>Db().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null}),Ib="h",Rb="b",Pb=()=>null;Nv=!1,Nb=new Et("",{providedIn:"root",factory:()=>Nv});Fr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Fr||{});Yb=Xb;Gv={};oS=()=>null;s_=[];LS=Zn(dn({},Hm),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Po(n.lView)},consumerOnSignalRead(){this.lView[Ar]=this}}),o_=100;Nr=class{get rootNodes(){let e=this._lView,t=e[Je];return Uc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Un]}set context(e){this._lView[Un]=e}get destroyed(){return(this._lView[Ve]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[jt];if(bi(e)){let t=e[Nc],i=t?t.indexOf(this):-1;i>-1&&(hh(e,i),Ac(t,i))}this._attachedToViewContainer=!1}Uv(this._lView[Je],this._lView)}onDestroy(e){tv(this._lView,e)}markForCheck(){hf(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ve]&=-129}reattach(){sh(this._lView),this._lView[Ve]|=128}detectChanges(){this._lView[Ve]|=1024,a_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ht(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,Ov(this._lView[Je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ht(902,!1);this._appRef=e,sh(this._lView)}},Ts=(()=>{class n{static{this.__NG_ELEMENT_ID__=HS}}return n})(),VS=Ts,zS=class extends VS{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=DS(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Nr(r)}};y2=new RegExp(`^(\\d+)*(${Rb}|${Ib})*(.*)`),GS=()=>null;yh=class{},vh=class{},Bc=class{};jS="ngComponent",_h=class{resolveComponentFactory(e){throw WS(e)}},Ps=(()=>{class n{static{this.NULL=new _h}}return n})(),Fo=class{},$S=(()=>{class n{static{this.\u0275prov=ft({token:n,providedIn:"root",factory:()=>null})}}return n})(),Yd={},gy=new Set;Vt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ys(!1),this.onMicrotaskEmpty=new ys(!1),this.onStable=new ys(!1),this.onError=new ys(!1),typeof Zone>"u")throw new ht(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=qS().nativeRequestAnimationFrame,ZS(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ht(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ht(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,XS,yy,yy);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},XS={};h_=(()=>{class n{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let t=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let i of t)i()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}static{this.\u0275prov=ft({token:n,providedIn:"root",factory:()=>new n})}}return n})();Eh=class extends Ps{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Es(e);return new Vc(t,this.ngModule)}};wh=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Gc(i);let r=this.injector.get(e,Yd,i);return r!==Yd||t===Yd?r:this.parentInjector.get(e,t,i)}},Vc=class extends Bc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=xy(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return xy(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=cw(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=ot(null);try{r=r||this.ngModule;let o=r instanceof er?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new wh(e,o):e,c=a.get(Fo,null);if(c===null)throw new ht(407,!1);let l=a.get($S,null),u=a.get(h_,null),d=a.get(yh,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},f=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",y=i?rS(f,i,this.componentDef.encapsulation,a):Fv(f,g,JS(g)),m=512;this.componentDef.signals?m|=4096:this.componentDef.onPush||(m|=16);let p=null;y!==null&&(p=rf(y,a,!0));let S=lf(0,null,null,1,0,null,null,null,null,null,null),v=Yc(null,S,null,m,null,null,h,f,a,null,p);Xh(v);let x,N;try{let P=this.componentDef,I,C=null;P.findHostDirectiveDefs?(I=[],C=new Map,P.findHostDirectiveDefs(P,I,C),I.push(P)):I=[P];let E=QS(v,y),_=eT(E,y,P,I,v,h,f);N=Qy(S,tr),y&&iT(f,P,y,i),t!==void 0&&rT(N,this.ngContentSelectors,t),x=nT(_,P,I,C,v,[sT]),df(S,v,null)}finally{Yh()}return new bh(this.componentType,x,As(N,v),v,N)}finally{ot(s)}}},bh=class extends vh{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Nr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;uf(s[Je],s,r,e,t),this.previousInputValues.set(e,t);let o=Lr(this._tNode.index,s);hf(o)}}get injector(){return new Cr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};Vo=(()=>{class n{static{this.__NG_ELEMENT_ID__=oT}}return n})();aT=Vo,f_=class extends aT{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return As(this._hostTNode,this._hostLView)}get injector(){return new Cr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Qh(this._hostTNode,this._hostLView);if(mv(e)){let t=Oc(e,this._hostLView),i=Fc(e),r=t[Je].data[i+8];return new Cr(r,t)}else return new Cr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=My(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-hn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=my(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,py(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Tw(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Vc(Es(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(er,null);y&&(s=y)}let u=Es(c.componentType??{}),d=my(this._lContainer,u?.id??null),h=d?.firstChild??null,f=c.create(l,r,h,s);return this.insertImpl(f.hostView,a,py(this._hostTNode,d)),f}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Ow(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[jt],l=new f_(c,c[Bn],c[jt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return AS(o,r,s,i),e.attachToViewContainerRef(),Ry(Zd(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=My(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=hh(this._lContainer,t);i&&(Ac(Zd(this._lContainer),t),Uv(i[Je],i))}detach(e){let t=this._adjustIndex(e,-1),i=hh(this._lContainer,t);return i&&Ac(Zd(this._lContainer),t)!=null?new Nr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};lT=hT,uT=()=>!1;Sh=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Th=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)mf(e,t).matches!==null&&this.queries[t].setDirty()}},Ch=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=xT(e):this.predicate=e}},Dh=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Ah=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,fT(t,s)),this.matchTNodeWithReadOption(e,t,Sc(t,e,s,!1,!1))}else i===Ts?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Sc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Is||r===Vo||r===Ts&&t.type&4)this.addMatch(t.index,-2);else{let s=Sc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};Cs=class{},zc=class extends Cs{constructor(e){super(),this.componentFactoryResolver=new Eh(this),this.instance=null;let t=new Rc([...e.providers,{provide:Cs,useValue:this},{provide:Ps,useValue:this.componentFactoryResolver}],e.parent||Hh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};g_=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new xo(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();CT=DT;IT=(n,e,t,i,r,s)=>(Kh(!0),Fv(i,r,ib()));Hc="en-US",RT=Hc;FT=(n,e,t,i,r)=>(Kh(!0),Fb(e[fn],i));OT=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Gy(!1,t.type),r=i.length>0?wT([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=ft({token:n,providedIn:"environment",factory:()=>new n(nt(er))})}}return n})();b_=new Et("");kT=new Et(""),T_=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=Bt(kT,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(_f(s))t.push(s);else if(S_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),UT=new Et("");zo=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=Bt(Sv),this.afterRenderEffectManager=Bt(h_),this.externalTestViews=new Set,this.beforeRender=new Qn,this.afterTick=new Qn,this.componentTypes=[],this.components=[],this.isStable=Bt(g_).hasPendingTasks.pipe(Tr(t=>!t)),this._injector=Bt(er)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof Bc;if(!this._injector.get(T_).done){let h=!r&&hw(t),f=!1;throw new ht(405,f)}let o;r?o=t:o=this._injector.get(Ps).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=VT(o)?void 0:this._injector.get(Cs),c=i||o.selector,l=o.create(Bo.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(b_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Kd(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this._tick(!0)}_tick(t){if(this._runningTick)throw new ht(101,!1);let i=ot(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(t)}catch(r){this.internalErrorHandler(r)}finally{this.afterTick.next(),this._runningTick=!1,ot(i)}}detectChangesInAttachedViews(t){let i=0,r=this.afterRenderEffectManager;for(;;){if(i===o_)throw new ht(103,!1);if(t){let s=i===0;this.beforeRender.next(s);for(let{_lView:o,notifyErrorHandler:a}of this._views)HT(o,s,a)}if(i++,r.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:s})=>Rh(s))&&(r.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:s})=>Rh(s))))break}}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Kd(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(UT,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Kd(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new ht(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();WT=(()=>{class n{constructor(){this.zone=Bt(Vt),this.applicationRef=Bt(zo)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();YT=(()=>{class n{constructor(){this.subscription=new on,this.initialized=!1,this.zone=Bt(Vt),this.pendingTasks=Bt(g_)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Vt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Vt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();xf=new Et("",{providedIn:"root",factory:()=>Bt(xf,Qe.Optional|Qe.SkipSelf)||ZT()}),C_=new Et(""),Cc=null;Ns=(()=>{class n{static{this.__NG_ELEMENT_ID__=eC}}return n})()});function Ef(){return R_}function P_(n){R_??=n}function N_(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}function A_(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${bn(e)}'.`)}function bf(n){return n===rC}var R_,tl,sr,L_,Mf,wf,F_,rC,nl,il=pe(()=>{"use strict";Sn();Sn();R_=null;tl=class{},sr=new Et("");L_=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new Mf,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){A_("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){A_("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(ir(Vo),ir(Ts))}}static{this.\u0275dir=ky({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),Mf=class{constructor(){this.$implicit=null,this.ngIf=null}};wf=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Vh({type:n})}static{this.\u0275inj=Lh({})}}return n})(),F_="browser",rC="server";nl=class{}});function aC(){return Ho=Ho||document.querySelector("base"),Ho?Ho.getAttribute("href"):null}function cC(n){return new URL(n,document.baseURI).pathname}function pC(n){return dC.replace(Rf,n)}function mC(n){return uC.replace(Rf,n)}function H_(n,e){return e.map(t=>t.replace(Rf,n))}function k_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}function G_(n){return D_(xC(n))}function xC(n){return{appProviders:[...SC,...n?.providers??[]],platformProviders:bC}}function MC(){Df.makeCurrent()}function EC(){return new Ei}function wC(){return Pv(document),document}var Cf,Df,Ho,lC,Af,B_,rl,Sf,V_,Tf,Rf,z_,uC,dC,hC,fC,O_,Go,If,Wo,sl,gC,U_,yC,vC,_C,bC,SC,W_=pe(()=>{"use strict";Sn();Sn();il();Cf=class extends tl{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Df=class n extends Cf{static makeCurrent(){P_(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=aC();return t==null?null:cC(t)}resetBaseElement(){Ho=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return N_(document.cookie,e)}},Ho=null;lC=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})(),Af=new Et(""),B_=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new ht(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(nt(Af),nt(Vt))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})(),rl=class{constructor(e){this._doc=e}},Sf="ng-app-id",V_=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=bf(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Sf}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(Sf),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(Sf,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(nt(sr),nt(ef),nt(nf,8),nt(Rs))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})(),Tf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Rf=/%COMP%/g,z_="%COMP%",uC=`_nghost-${z_}`,dC=`_ngcontent-${z_}`,hC=!0,fC=new Et("",{providedIn:"root",factory:()=>hC});O_=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=bf(a),this.defaultRenderer=new Go(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ri.ShadowDom&&(i=Zn(dn({},i),{encapsulation:ri.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof sl?r.applyToHost(t):r instanceof Wo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case ri.Emulated:s=new sl(c,l,i,this.appId,u,o,a,d);break;case ri.ShadowDom:return new If(c,l,t,i,o,a,this.nonce,d);default:s=new Wo(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(nt(B_),nt(V_),nt(ef),nt(fC),nt(sr),nt(Rs),nt(Vt),nt(nf))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})(),Go=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Tf[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(k_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(k_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ht(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Tf[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Tf[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Fr.DashCase|Fr.Important)?e.style.setProperty(t,i,r&Fr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Fr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Ef().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};If=class extends Go{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=H_(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Wo=class extends Go{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?H_(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},sl=class extends Wo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=pC(l),this.hostAttr=mC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},gC=(()=>{class n extends rl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(nt(sr))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})(),U_=["alt","control","meta","shift"],yC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},vC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},_C=(()=>{class n extends rl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ef().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),U_.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=yC[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),U_.forEach(o=>{if(o!==r){let a=vC[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(nt(sr))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac})}}return n})();bC=[{provide:Rs,useValue:F_},{provide:tf,useValue:MC,multi:!0},{provide:sr,useFactory:wC,deps:[]}],SC=[{provide:Wc,useValue:"root"},{provide:Ei,useFactory:EC,deps:[]},{provide:Af,useClass:gC,multi:!0,deps:[sr,Vt,Rs]},{provide:Af,useClass:_C,multi:!0,deps:[sr]},O_,V_,B_,{provide:Fo,useExisting:O_},{provide:nl,useClass:lC,deps:[]},[]]});function TC(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function CC(n){return!!n&&n.nodeType===Node.ELEMENT_NODE}function DC(n){return typeof n=="function"}function AC(n,e){if(!Pf){let t=Element.prototype;Pf=t.matches||t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}return n.nodeType===Node.ELEMENT_NODE?Pf.call(n,e):!1}function IC(n,e){return n===e||n!==n&&e!==e}function RC(n){let e={};return n.forEach(({propName:t,templateName:i,transform:r})=>{e[TC(i)]=[t,r]}),e}function PC(n,e){return e.get(Ps).resolveComponentFactory(n).inputs}function NC(n,e){let t=n.childNodes,i=e.map(()=>[]),r=-1;e.some((s,o)=>s==="*"?(r=o,!0):!1);for(let s=0,o=t.length;s<o;++s){let a=t[s],c=LC(a,e,r);c!==-1&&i[c].push(a)}return i}function LC(n,e,t){let i=t;return CC(n)&&e.some((r,s)=>r!=="*"&&AC(n,r)?(i=s,!0):!1),i}function j_(n,e){let t=PC(n,e.injector),i=e.strategyFactory||new Nf(n,e.injector),r=RC(t);class s extends Ff{static{this.observedAttributes=Object.keys(r)}get ngElementStrategy(){if(!this._ngElementStrategy){let a=this._ngElementStrategy=i.create(this.injector||e.injector);t.forEach(({propName:c,transform:l})=>{if(!this.hasOwnProperty(c))return;let u=this[c];delete this[c],a.setInputValue(c,u,l)})}return this._ngElementStrategy}constructor(a){super(),this.injector=a}attributeChangedCallback(a,c,l,u){let[d,h]=r[a];this.ngElementStrategy.setInputValue(d,l,h)}connectedCallback(){let a=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),a=!0),this.ngElementStrategy.connect(this),a||this.subscribeToEvents()}disconnectedCallback(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}subscribeToEvents(){this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(a=>{let c=new CustomEvent(a.name,{detail:a.value});this.dispatchEvent(c)})}}return t.forEach(({propName:o,transform:a})=>{Object.defineProperty(s.prototype,o,{get(){return this.ngElementStrategy.getInputValue(o)},set(c){this.ngElementStrategy.setInputValue(o,c,a)},configurable:!0,enumerable:!0})}),s}var ol,Pf,FC,Nf,Lf,Ff,$_=pe(()=>{"use strict";Sn();Vd();zd();ol={schedule(n,e){let t=setTimeout(n,e);return()=>clearTimeout(t)},scheduleBeforeRender(n){if(typeof window>"u")return ol.schedule(n,0);if(typeof window.requestAnimationFrame>"u")return ol.schedule(n,16);let e=window.requestAnimationFrame(n);return()=>window.cancelAnimationFrame(e)}};FC=10,Nf=class{constructor(e,t){this.componentFactory=t.get(Ps).resolveComponentFactory(e)}create(e){return new Lf(this.componentFactory,e)}},Lf=class{constructor(e,t){this.componentFactory=e,this.injector=t,this.eventEmitters=new Mo(1),this.events=this.eventEmitters.pipe(Bd(i=>Ud(...i))),this.componentRef=null,this.viewChangeDetectorRef=null,this.inputChanges=null,this.hasInputChanges=!1,this.implementsOnChanges=!1,this.scheduledChangeDetectionFn=null,this.scheduledDestroyFn=null,this.initialInputValues=new Map,this.unchangedInputs=new Set(this.componentFactory.inputs.map(({propName:i})=>i)),this.ngZone=this.injector.get(Vt),this.elementZone=typeof Zone>"u"?null:this.ngZone.run(()=>Zone.current)}connect(e){this.runInZone(()=>{if(this.scheduledDestroyFn!==null){this.scheduledDestroyFn(),this.scheduledDestroyFn=null;return}this.componentRef===null&&this.initializeComponent(e)})}disconnect(){this.runInZone(()=>{this.componentRef===null||this.scheduledDestroyFn!==null||(this.scheduledDestroyFn=ol.schedule(()=>{this.componentRef!==null&&(this.componentRef.destroy(),this.componentRef=null,this.viewChangeDetectorRef=null)},FC))})}getInputValue(e){return this.runInZone(()=>this.componentRef===null?this.initialInputValues.get(e):this.componentRef.instance[e])}setInputValue(e,t,i){this.runInZone(()=>{if(i&&(t=i.call(this.componentRef?.instance,t)),this.componentRef===null){this.initialInputValues.set(e,t);return}IC(t,this.getInputValue(e))&&!(t===void 0&&this.unchangedInputs.has(e))||(this.recordInputChange(e,t),this.unchangedInputs.delete(e),this.hasInputChanges=!0,this.componentRef.instance[e]=t,this.scheduleDetectChanges())})}initializeComponent(e){let t=Bo.create({providers:[],parent:this.injector}),i=NC(e,this.componentFactory.ngContentSelectors);this.componentRef=this.componentFactory.create(t,i,e),this.viewChangeDetectorRef=this.componentRef.injector.get(Ns),this.implementsOnChanges=DC(this.componentRef.instance.ngOnChanges),this.initializeInputs(),this.initializeOutputs(this.componentRef),this.detectChanges(),this.injector.get(zo).attachView(this.componentRef.hostView)}initializeInputs(){this.componentFactory.inputs.forEach(({propName:e,transform:t})=>{this.initialInputValues.has(e)&&this.setInputValue(e,this.initialInputValues.get(e),t)}),this.initialInputValues.clear()}initializeOutputs(e){let t=this.componentFactory.outputs.map(({propName:i,templateName:r})=>e.instance[i].pipe(Tr(o=>({name:r,value:o}))));this.eventEmitters.next(t)}callNgOnChanges(e){if(!this.implementsOnChanges||this.inputChanges===null)return;let t=this.inputChanges;this.inputChanges=null,e.instance.ngOnChanges(t)}markViewForCheck(e){this.hasInputChanges&&(this.hasInputChanges=!1,e.markForCheck())}scheduleDetectChanges(){this.scheduledChangeDetectionFn||(this.scheduledChangeDetectionFn=ol.scheduleBeforeRender(()=>{this.scheduledChangeDetectionFn=null,this.detectChanges()}))}recordInputChange(e,t){if(!this.implementsOnChanges)return;this.inputChanges===null&&(this.inputChanges={});let i=this.inputChanges[e];if(i){i.currentValue=t;return}let r=this.unchangedInputs.has(e),s=r?void 0:this.getInputValue(e);this.inputChanges[e]=new Ro(s,t,r)}detectChanges(){this.componentRef!==null&&(this.callNgOnChanges(this.componentRef),this.markViewForCheck(this.viewChangeDetectorRef),this.componentRef.changeDetectorRef.detectChanges())}runInZone(e){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(e):e()}},Ff=class extends HTMLElement{constructor(){super(...arguments),this.ngElementEventsSubscription=null}}});function _r(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Up(n,e){return(n%e+e)%e}function OC(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kC(n,e,t){return n!==e?(t-n)/(e-n):0}function Jo(n,e,t){return(1-t)*n+t*e}function UC(n,e,t,i){return Jo(n,e,1-Math.exp(-t*i))}function BC(n,e=1){return e-Math.abs(Up(n,e*2)-e)}function VC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function HC(n,e){return n+Math.floor(Math.random()*(e-n+1))}function GC(n,e){return n+Math.random()*(e-n)}function WC(n){return n*(.5-Math.random())}function jC(n){n!==void 0&&(q_=n);let e=q_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $C(n){return n*Ko}function qC(n){return n*jr}function XC(n){return(n&n-1)===0&&n!==0}function YC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ZC(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function KC(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mx(){let n=Ys("canvas");return n.style.display="block",n}function ns(n){n in X_||(X_[n]=!0,console.warn(n))}function gx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function yx(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function JC(){let n={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Li]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:Y_,fromXYZ:Z_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Y_,fromXYZ:Z_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function kf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Bf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){kr.fromArray(n,s);let a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),c=e.dot(kr),l=t.dot(kr),u=i.dot(kr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}function Jf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function lD(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function uD(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=$e(n,-65504,65504),Ri.floatView[0]=n;let e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((e&8388607)>>Ri.shiftTable[t])}function dD(n){let e=n>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(n&1023)]+Ri.exponentTable[e],Ri.floatView[0]}function pD(n,e,t,i,r,s,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ni,a),c===null)return null;Ml.copy(a),Ml.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ml);return l<t.near||l>t.far?null:{distance:l,point:Ml.clone(),object:n}}function El(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,yl),n.getVertexPosition(c,vl),n.getVertexPosition(l,_l);let u=pD(n,e,t,i,yl,vl,_l,c0);if(u){let d=new F;hr.getBarycoord(c0,yl,vl,_l,d),r&&(u.uv=hr.getInterpolatedAttribute(r,a,c,l,d,new Be)),s&&(u.uv1=hr.getInterpolatedAttribute(s,a,c,l,d,new Be)),o&&(u.normal=hr.getInterpolatedAttribute(o,a,c,l,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new F,materialIndex:0};hr.getNormal(yl,vl,_l,h.normal),u.face=h,u.barycoord=d}return u}function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let r in i)e[r]=i[r]}return e}function mD(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}function Tl(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Vl.fromBufferAttribute(a,r),zl.fromBufferAttribute(a,s),t.distanceSqToSegment(Vl,zl,rp,v0)>i)return;rp.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(rp);if(!(l<e.near||l>e.far))return{distance:l,point:v0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}function Mx(n,e,t,i,r){let s,o;if(r===BD(n,e,t,i)>0)for(s=e;s<t;s+=i)o=_0(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=_0(s,n[s],n[s+1],o);return o&&Bu(o,o.next)&&(va(o),o=o.next),o}function Xr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Bu(t,t.next)||wt(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ga(n,e,t,i,r,s,o){if(!n)return;!o&&s&&ND(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?SD(n,i,r,s):bD(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),va(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=TD(Xr(n),e,t),ga(n,e,t,i,r,s,2)):o===2&&CD(n,e,t,i,r,s):ga(Xr(n),e,t,i,r,s,1);break}}}function bD(n){let e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,h=r>s?r>o?r:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&qs(r,a,s,c,o,l,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function SD(n,e,t,i){let r=n.prev,s=n,o=n.next;if(wt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,y=a>c?a>l?a:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=pp(f,g,e,t,i),S=pp(y,m,e,t,i),v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=S;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&qs(a,u,c,d,l,h,v.x,v.y)&&wt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&qs(a,u,c,d,l,h,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&qs(a,u,c,d,l,h,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&qs(a,u,c,d,l,h,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function TD(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Bu(r,s)&&Ex(r,i,i.next,s)&&ya(r,s)&&ya(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),va(i),va(i.next),i=n=s),i=i.next}while(i!==n);return Xr(i)}function CD(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&OD(o,a)){let c=wx(o,a);o=Xr(o,o.next),c=Xr(c,c.next),ga(o,e,t,i,r,s,0),ga(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function DD(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Mx(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(FD(l));for(r.sort(AD),s=0;s<r.length;s++)t=ID(r[s],t);return t}function AD(n,e){return n.x-e.x}function ID(n,e){let t=RD(n,e);if(!t)return e;let i=wx(t,n);return Xr(i,i.next),Xr(t,t.next)}function RD(n,e){let t=e,i=-1/0,r,s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&qs(o<l?s:i,o,c,l,o<l?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),ya(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&PD(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function PD(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function ND(n,e,t,i){let r=n;do r.z===0&&(r.z=pp(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,LD(r)}function LD(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function pp(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function FD(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qs(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function OD(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!kD(n,e)&&(ya(n,e)&&ya(e,n)&&UD(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||Bu(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Bu(n,e){return n.x===e.x&&n.y===e.y}function Ex(n,e,t,i){let r=Dl(wt(n,e,t)),s=Dl(wt(n,e,i)),o=Dl(wt(t,i,n)),a=Dl(wt(t,i,e));return!!(r!==s&&o!==a||r===0&&Cl(n,t,e)||s===0&&Cl(n,i,e)||o===0&&Cl(t,n,i)||a===0&&Cl(t,e,i))}function Cl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Dl(n){return n>0?1:n<0?-1:0}function kD(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ex(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function UD(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wx(n,e){let t=new mp(n.i,n.x,n.y),i=new mp(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function _0(n,e,t,i){let r=new mp(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mp(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function BD(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function x0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function M0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function Al(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function VD(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zD(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function E0(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function bx(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}function HD(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Vi;case"color":return wa;case"quaternion":return fi;case"bool":case"boolean":return ki;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function GD(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=HD(n.type);if(n.times===void 0){let t=[],i=[];bx(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}function Gp(n,e,t,i){let r=JD(i);switch(t){case Ap:return n*e;case Rp:return n*e;case Pp:return n*e*2;case Np:return n*e/r.components*r.byteLength;case uu:return n*e/r.components*r.byteLength;case Lp:return n*e*2/r.components*r.byteLength;case du:return n*e*2/r.components*r.byteLength;case Ip:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case hu:return n*e*4/r.components*r.byteLength;case ka:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pu:case gu:return Math.max(n,16)*Math.max(e,8)/4;case fu:case mu:return Math.max(n,8)*Math.max(e,8)/2;case yu:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Du:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case za:case Lu:case Fu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fp:case Ou:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ku:case Uu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JD(n){switch(n){case gi:case Tp:return{byteLength:1,components:1};case io:case Cp:case $n:return{byteLength:2,components:1};case cu:case lu:return{byteLength:2,components:4};case vr:case au:case tn:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var Kl,mr,gr,T0,Mp,C0,Ep,D0,pi,Ni,en,mi,zi,Hr,wp,bp,Sp,A0,fr,I0,R0,P0,N0,L0,F0,O0,k0,Rl,Pl,U0,B0,V0,z0,H0,G0,W0,j0,$0,Jl,Ql,eu,Gr,tu,nu,iu,ru,La,q0,X0,Hi,Y0,Z0,K0,J0,Q0,ex,tx,ap,nx,cp,Qr,es,yr,su,Fa,ui,gn,Nl,cn,ix,Oa,$t,ou,Gi,gi,Tp,Cp,io,au,vr,tn,$n,cu,lu,ts,Dp,Ap,Ip,xn,Rp,Pp,zr,Wr,Np,uu,Lp,du,hu,ka,Ua,Ba,Va,fu,pu,mu,gu,yu,vu,_u,xu,Mu,Eu,wu,bu,Su,Tu,Cu,Du,Au,Iu,Ru,Pu,Nu,za,Lu,Fu,Fp,Ou,ku,Uu,Qo,Ll,Il,lp,up,dp,rx,sx,ox,Ha,ax,Wi,vt,Li,ea,pt,Vr,hp,cx,lx,ux,Op,dx,hx,fx,px,fp,kp,ci,ta,di,Xt,q_,Ko,jr,Nt,Be,Ge,Of,X_,Y_,Z_,We,Ls,Fl,QC,na,eD,Dn,Xe,Ol,hi,ia,kl,Tt,F,Uf,K_,Fi,Si,zn,al,Fs,Os,ks,or,ar,Or,jo,cl,ll,kr,tD,$o,Vf,Oi,Ti,zf,ul,cr,Hf,dl,Gf,pr,Pe,Us,Hn,nD,iD,lr,hl,pn,J_,Q_,Gt,ra,rD,e0,Bs,Ci,fl,qo,sD,oD,t0,n0,i0,r0,aD,Vs,Wf,Pt,Gn,Di,jf,Ai,zs,Hs,s0,$f,qf,Xf,Yf,Zf,Kf,hr,_x,ur,pl,ke,Yt,cD,Wn,sa,Ri,ro,At,ml,hD,yn,$r,oa,Ht,fD,Tn,Qf,Gs,mn,Xo,zt,vn,o0,Ur,gl,a0,yl,vl,_l,ep,xl,c0,Ml,Qt,Zs,xx,gD,yD,jn,aa,dr,l0,u0,It,Ws,js,Ul,ca,Bl,li,vD,Ks,la,d0,h0,f0,_D,p0,wl,tp,m0,np,ua,qr,da,g0,xD,ha,ip,MD,ED,Cn,Br,bl,Js,Qs,Vl,zl,y0,Yo,Sl,rp,v0,fa,pa,ma,wD,_a,xa,Ma,Yr,Ea,Hl,Gl,Zr,Wl,jl,$l,_n,ki,wa,Ui,ql,fi,Bi,Vi,ba,Sa,Xl,Sx,ji,Ii,gp,eo,Yl,Ta,Kr,Jr,sp,w0,b0,Ca,yp,Da,S0,Zo,op,vp,to,Aa,_p,Ia,Ra,Pa,Zl,zp,WD,Hp,jD,$D,qD,XD,YD,ZD,KD,xp,yt,Dk,no,Na,Wp=pe(()=>{"use strict";Kl="173",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},T0=0,Mp=1,C0=2,Ep=1,D0=2,pi=3,Ni=0,en=1,mi=2,zi=0,Hr=1,wp=2,bp=3,Sp=4,A0=5,fr=100,I0=101,R0=102,P0=103,N0=104,L0=200,F0=201,O0=202,k0=203,Rl=204,Pl=205,U0=206,B0=207,V0=208,z0=209,H0=210,G0=211,W0=212,j0=213,$0=214,Jl=0,Ql=1,eu=2,Gr=3,tu=4,nu=5,iu=6,ru=7,La=0,q0=1,X0=2,Hi=0,Y0=1,Z0=2,K0=3,J0=4,Q0=5,ex=6,tx=7,ap="attached",nx="detached",cp=300,Qr=301,es=302,yr=303,su=304,Fa=306,ui=1e3,gn=1001,Nl=1002,cn=1003,ix=1004,Oa=1005,$t=1006,ou=1007,Gi=1008,gi=1009,Tp=1010,Cp=1011,io=1012,au=1013,vr=1014,tn=1015,$n=1016,cu=1017,lu=1018,ts=1020,Dp=35902,Ap=1021,Ip=1022,xn=1023,Rp=1024,Pp=1025,zr=1026,Wr=1027,Np=1028,uu=1029,Lp=1030,du=1031,hu=1033,ka=33776,Ua=33777,Ba=33778,Va=33779,fu=35840,pu=35841,mu=35842,gu=35843,yu=36196,vu=37492,_u=37496,xu=37808,Mu=37809,Eu=37810,wu=37811,bu=37812,Su=37813,Tu=37814,Cu=37815,Du=37816,Au=37817,Iu=37818,Ru=37819,Pu=37820,Nu=37821,za=36492,Lu=36494,Fu=36495,Fp=36283,Ou=36284,ku=36285,Uu=36286,Qo=2300,Ll=2301,Il=2302,lp=2400,up=2401,dp=2402,rx=2500,sx=3200,ox=3201,Ha=0,ax=1,Wi="",vt="srgb",Li="srgb-linear",ea="linear",pt="srgb",Vr=7680,hp=519,cx=512,lx=513,ux=514,Op=515,dx=516,hx=517,fx=518,px=519,fp=35044,kp="300 es",ci=2e3,ta=2001,di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],q_=1234567,Ko=Math.PI/180,jr=180/Math.PI;Nt={DEG2RAD:Ko,RAD2DEG:jr,generateUUID:_r,clamp:$e,euclideanModulo:Up,mapLinear:OC,inverseLerp:kC,lerp:Jo,damp:UC,pingpong:BC,smoothstep:VC,smootherstep:zC,randInt:HC,randFloat:GC,randFloatSpread:WC,seededRandom:jC,degToRad:$C,radToDeg:qC,isPowerOfTwo:XC,ceilPowerOfTwo:YC,floorPowerOfTwo:ZC,setQuaternionFromProperEuler:KC,normalize:Jt,denormalize:$s},Be=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=r[0],m=r[3],p=r[6],S=r[1],v=r[4],x=r[7],N=r[2],P=r[5],I=r[8];return s[0]=o*y+a*S+c*N,s[3]=o*m+a*v+c*P,s[6]=o*p+a*x+c*I,s[1]=l*y+u*S+d*N,s[4]=l*m+u*v+d*P,s[7]=l*p+u*x+d*I,s[2]=h*y+f*S+g*N,s[5]=h*m+f*v+g*P,s[8]=h*p+f*x+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Of.makeScale(e,t)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,t){return this.premultiply(Of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Of=new Ge;X_={};Y_=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We=JC();Fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=Ys("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ls}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},QC=0,na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=_r(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kf(r[o].image)):s.push(kf(r[o]))}else s=kf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};eD=0,Dn=(()=>{class n extends di{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=gn,s=gn,o=$t,a=Gi,c=xn,l=gi,u=n.DEFAULT_ANISOTROPY,d=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eD++}),this.uuid=_r(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=cp,n.DEFAULT_ANISOTROPY=1,n})(),Xe=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(f+1)/2,N=(p+1)/2,P=(u+h)/4,I=(d+y)/4,C=(g+m)/4;return v>x&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=P/i,s=I/i):x>N?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=P/r,s=C/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=I/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ia=class extends Dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},kl=class extends Dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==h||l!==f||u!==g){let m=1-a,p=c*h+l*f+u*g+d*y,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let N=Math.sqrt(v),P=Math.atan2(N,p*S);m=Math.sin(m*P)/N,a=Math.sin(a*P)/N}let x=a*S;if(c=c*m+h*x,l=l*m+f*x,u=u*m+g*x,d=d*m+y*x,m===1-a){let N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(K_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(K_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uf.copy(this).projectOnVector(e),this.sub(Uf)}reflect(e){return this.sub(Uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uf=new F,K_=new Tt,Fi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),cl.subVectors(this.max,jo),Fs.subVectors(e.a,jo),Os.subVectors(e.b,jo),ks.subVectors(e.c,jo),or.subVectors(Os,Fs),ar.subVectors(ks,Os),Or.subVectors(Fs,ks);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Or.z,Or.y,or.z,0,-or.x,ar.z,0,-ar.x,Or.z,0,-Or.x,-or.y,or.x,0,-ar.y,ar.x,0,-Or.y,Or.x,0];return!Bf(t,Fs,Os,ks,cl)||(t=[1,0,0,0,1,0,0,0,1],!Bf(t,Fs,Os,ks,cl))?!1:(ll.crossVectors(or,ar),t=[ll.x,ll.y,ll.z],Bf(t,Fs,Os,ks,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,al=new Fi,Fs=new F,Os=new F,ks=new F,or=new F,ar=new F,Or=new F,jo=new F,cl=new F,ll=new F,kr=new F;tD=new Fi,$o=new F,Vf=new F,Oi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Vf)),this.expandByPoint($o.copy(e.center).sub(Vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new F,zf=new F,ul=new F,cr=new F,Hf=new F,dl=new F,Gf=new F,pr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zf.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(zf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ul),a=cr.dot(this.direction),c=-cr.dot(ul),l=cr.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zf).addScaledVector(ul,h),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){Hf.subVectors(t,e),dl.subVectors(i,e),Gf.crossVectors(Hf,dl);let o=this.direction.dot(Gf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,e);let c=a*this.direction.dot(dl.crossVectors(cr,dl));if(c<0)return null;let l=a*this.direction.dot(Hf.cross(cr));if(l<0||c+l>o)return null;let u=-a*cr.dot(Gf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nD,e,iD)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),lr.crossVectors(i,pn),lr.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),lr.crossVectors(i,pn)),lr.normalize(),hl.crossVectors(pn,lr),r[0]=lr.x,r[4]=hl.x,r[8]=pn.x,r[1]=lr.y,r[5]=hl.y,r[9]=pn.y,r[2]=lr.z,r[6]=hl.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],v=i[7],x=i[11],N=i[15],P=r[0],I=r[4],C=r[8],E=r[12],_=r[1],T=r[5],O=r[9],L=r[13],G=r[2],j=r[6],U=r[10],H=r[14],b=r[3],R=r[7],Y=r[11],ie=r[15];return s[0]=o*P+a*_+c*G+l*b,s[4]=o*I+a*T+c*j+l*R,s[8]=o*C+a*O+c*U+l*Y,s[12]=o*E+a*L+c*H+l*ie,s[1]=u*P+d*_+h*G+f*b,s[5]=u*I+d*T+h*j+f*R,s[9]=u*C+d*O+h*U+f*Y,s[13]=u*E+d*L+h*H+f*ie,s[2]=g*P+y*_+m*G+p*b,s[6]=g*I+y*T+m*j+p*R,s[10]=g*C+y*O+m*U+p*Y,s[14]=g*E+y*L+m*H+p*ie,s[3]=S*P+v*_+x*G+N*b,s[7]=S*I+v*T+x*j+N*R,s[11]=S*C+v*O+x*U+N*Y,s[15]=S*E+v*L+x*H+N*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+y*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=d*m*l-y*h*l+y*c*f-a*m*f-d*c*p+a*h*p,v=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,x=u*y*l-g*d*l+g*a*f-o*y*f-u*a*p+o*d*p,N=g*d*c-u*y*c-g*a*h+o*y*h+u*a*m-o*d*m,P=t*S+i*v+r*x+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return e[0]=S*I,e[1]=(y*h*s-d*m*s-y*r*f+i*m*f+d*r*p-i*h*p)*I,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*I,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*I,e[4]=v*I,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*I,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*I,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*I,e[8]=x*I,e[9]=(g*d*s-u*y*s-g*i*f+t*y*f+u*i*p-t*d*p)*I,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*I,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*I,e[12]=N*I,e[13]=(u*y*r-g*d*r+g*i*h-t*y*h-u*i*m+t*d*m)*I,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*I,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*I,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,y=o*u,m=o*d,p=a*d,S=c*l,v=c*u,x=c*d,N=i.x,P=i.y,I=i.z;return r[0]=(1-(y+p))*N,r[1]=(f+x)*N,r[2]=(g-v)*N,r[3]=0,r[4]=(f-x)*P,r[5]=(1-(h+p))*P,r[6]=(m+S)*P,r[7]=0,r[8]=(g+v)*I,r[9]=(m-S)*I,r[10]=(1-(h+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Us.set(r[0],r[1],r[2]).length(),o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let l=1/s,u=1/o,d=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ci){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),f,g;if(a===ci)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ta)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ci){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u,g,y;if(a===ci)g=(o+s)*d,y=-2*d;else if(a===ta)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new F,Hn=new Pe,nD=new F(0,0,0),iD=new F(1,1,1),lr=new F,hl=new F,pn=new F,J_=new Pe,Q_=new Tt,Gt=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},rD=0,e0=new F,Bs=new Tt,Ci=new Pe,fl=new F,qo=new F,sD=new F,oD=new Tt,t0=new F(1,0,0),n0=new F(0,1,0),i0=new F(0,0,1),r0={type:"added"},aD={type:"removed"},Vs={type:"childadded",child:null},Wf={type:"childremoved",child:null},Pt=(()=>{class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rD++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new Gt,r=new Tt,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ge}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Bs.setFromAxisAngle(t,i),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,i){return Bs.setFromAxisAngle(t,i),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(t0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(i0,t)}translateOnAxis(t,i){return e0.copy(t).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(i0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fl.copy(t):fl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(qo,fl,this.up):Ci.lookAt(fl,qo,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(r0),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(aD),Wf.child=t,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(r0),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,sD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,oD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Gn=new F,Di=new F,jf=new F,Ai=new F,zs=new F,Hs=new F,s0=new F,$f=new F,qf=new F,Xf=new F,Yf=new Xe,Zf=new Xe,Kf=new Xe,hr=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gn.subVectors(r,t),Di.subVectors(i,t),jf.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(Di),c=Gn.dot(jf),l=Di.dot(Di),u=Di.dot(jf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Yf.setScalar(0),Zf.setScalar(0),Kf.setScalar(0),Yf.fromBufferAttribute(e,t),Zf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yf,s.x),o.addScaledVector(Zf,s.y),o.addScaledVector(Kf,s.z),o}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),Di.subVectors(e,t),Gn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Gn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;zs.subVectors(r,i),Hs.subVectors(s,i),$f.subVectors(e,i);let c=zs.dot($f),l=Hs.dot($f);if(c<=0&&l<=0)return t.copy(i);qf.subVectors(e,r);let u=zs.dot(qf),d=Hs.dot(qf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(zs,o);Xf.subVectors(e,s);let f=zs.dot(Xf),g=Hs.dot(Xf);if(g>=0&&f<=g)return t.copy(s);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Hs,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return s0.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(s0,a);let p=1/(m+y+h);return o=y*p,a=h*p,t.copy(i).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},pl={h:0,s:0,l:0};ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=We.workingColorSpace){if(e=Up(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jf(o,s,e+1/3),this.g=Jf(o,s,e),this.b=Jf(o,s,e-1/3)}return We.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=_x[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return We.fromWorkingColorSpace(Yt.copy(this),e),Math.round($e(Yt.r*255,0,255))*65536+Math.round($e(Yt.g*255,0,255))*256+Math.round($e(Yt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=vt){We.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+t,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ur),e.getHSL(pl);let i=Jo(ur.h,pl.h,t),r=Jo(ur.s,pl.s,t),s=Jo(ur.l,pl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ke;ke.NAMES=_x;cD=0,Wn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cD++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Hr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},sa=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ri=lD();ro={toHalfFloat:uD,fromHalfFloat:dD},At=new F,ml=new Be,hD=0,yn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hD++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fp,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fp&&(e.usage=this.usage),e}},$r=class extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},oa=class extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ht=class extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}},fD=0,Tn=new Pe,Qf=new Pt,Gs=new F,mn=new Fi,Xo=new Fi,zt=new F,vn=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fD++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bp(e)?oa:$r)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Qf.lookAt(e),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(mn.min,Xo.min),mn.expandByPoint(zt),zt.addVectors(mn.max,Xo.max),mn.expandByPoint(zt)):(mn.expandByPoint(Xo.min),mn.expandByPoint(Xo.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(e,l),zt.add(Gs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new F,c[C]=new F;let l=new F,u=new F,d=new F,h=new Be,f=new Be,g=new Be,y=new F,m=new F;function p(C,E,_){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,C),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),a[C].add(y),a[E].add(y),a[_].add(y),c[C].add(m),c[E].add(m),c[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,E=S.length;C<E;++C){let _=S[C],T=_.start,O=_.count;for(let L=T,G=T+O;L<G;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new F,x=new F,N=new F,P=new F;function I(C){N.fromBufferAttribute(r,C),P.copy(N);let E=a[C];v.copy(E),v.sub(N.multiplyScalar(N.dot(E))).normalize(),x.crossVectors(P,E);let T=x.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,T)}for(let C=0,E=S.length;C<E;++C){let _=S[C],T=_.start,O=_.count;for(let L=T,G=T+O;L<G;L+=3)I(e.getX(L+0)),I(e.getX(L+1)),I(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new yn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},o0=new Pe,Ur=new pr,gl=new Oi,a0=new F,yl=new F,vl=new F,_l=new F,ep=new F,xl=new F,c0=new F,Ml=new F,Qt=class extends Pt{constructor(e=new vn,t=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(ep.fromBufferAttribute(d,e),o?xl.addScaledVector(ep,u):xl.addScaledVector(ep.sub(t),u))}t.add(xl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(gl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(gl,a0)===null||Ur.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(o0.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(o0),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,N=v;x<N;x+=3){let P=a.getX(x),I=a.getX(x+1),C=a.getX(x+2);r=El(this,p,e,i,l,u,d,P,I,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=El(this,o,e,i,l,u,d,S,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,N=v;x<N;x+=3){let P=x,I=x+1,C=x+2;r=El(this,p,e,i,l,u,d,P,I,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,v=m+1,x=m+2;r=El(this,o,e,i,l,u,d,S,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};Zs=class n extends vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(d,2));function g(y,m,p,S,v,x,N,P,I,C,E){let _=x/I,T=N/C,O=x/2,L=N/2,G=P/2,j=I+1,U=C+1,H=0,b=0,R=new F;for(let Y=0;Y<U;Y++){let ie=Y*T-L;for(let ge=0;ge<j;ge++){let de=ge*_-O;R[y]=de*S,R[m]=ie*v,R[p]=G,l.push(R.x,R.y,R.z),R[y]=0,R[m]=0,R[p]=P>0?1:-1,u.push(R.x,R.y,R.z),d.push(ge/I),d.push(1-Y/C),H+=1}}for(let Y=0;Y<C;Y++)for(let ie=0;ie<I;ie++){let ge=h+ie+j*Y,de=h+ie+j*(Y+1),Z=h+(ie+1)+j*(Y+1),se=h+(ie+1)+j*Y;c.push(ge,de,se),c.push(de,Z,se),b+=6}a.addGroup(f,b,E),f+=b,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};xx={clone:is,merge:Zt},gD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gD,this.fragmentShader=yD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=mD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},aa=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dr=new F,l0=new Be,u0=new Be,It=class extends aa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,l0,u0),t.subVectors(u0,l0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ws=-90,js=1,Ul=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new It(Ws,js,e,t);r.layers=this.layers,this.add(r);let s=new It(Ws,js,e,t);s.layers=this.layers,this.add(s);let o=new It(Ws,js,e,t);o.layers=this.layers,this.add(o);let a=new It(Ws,js,e,t);a.layers=this.layers,this.add(a);let c=new It(Ws,js,e,t);c.layers=this.layers,this.add(c);let l=new It(Ws,js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ca=class extends Dn{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bl=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ca(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zs(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:zi});s.uniforms.tEquirect.value=t;let o=new Qt(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=$t),new Ul(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},li=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vD={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vD)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},la=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},d0=new F,h0=new Xe,f0=new Xe,_D=new F,p0=new Pe,wl=new F,tp=new Oi,m0=new Pe,np=new pr,ua=class extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ap,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wl),this.boundingBox.expandByPoint(wl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wl),this.boundingSphere.expandByPoint(wl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tp.copy(this.boundingSphere),tp.applyMatrix4(r),e.ray.intersectsSphere(tp)!==!1&&(m0.copy(r).invert(),np.copy(e.ray).applyMatrix4(m0),!(this.boundingBox!==null&&np.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,np)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ap?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;h0.fromBufferAttribute(r.attributes.skinIndex,e),f0.fromBufferAttribute(r.attributes.skinWeight,e),d0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=f0.getComponent(s);if(o!==0){let a=h0.getComponent(s);p0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(_D.copy(d0).applyMatrix4(p0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},qr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},da=class extends Dn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=cn,u=cn,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},g0=new Pe,xD=new Pe,ha=class n{constructor(e=[],t=[]){this.uuid=_r(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:xD;g0.multiplyMatrices(a,t[s]),g0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new da(t,e,e,xn,tn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new qr),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},ip=new F,MD=new F,ED=new Ge,Cn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ip.subVectors(i,t).cross(MD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ip),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ED.getNormalMatrix(e),r=this.coplanarPoint(ip).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new Oi,bl=new F,Js=class{constructor(e=new Cn,t=new Cn,i=new Cn,r=new Cn,s=new Cn,o=new Cn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],y=r[10],m=r[11],p=r[12],S=r[13],v=r[14],x=r[15];if(i[0].setComponents(c-s,h-l,m-f,x-p).normalize(),i[1].setComponents(c+s,h+l,m+f,x+p).normalize(),i[2].setComponents(c+o,h+u,m+g,x+S).normalize(),i[3].setComponents(c-o,h-u,m-g,x-S).normalize(),i[4].setComponents(c-a,h-d,m-y,x-v).normalize(),t===ci)i[5].setComponents(c+a,h+d,m+y,x+v).normalize();else if(t===ta)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qs=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new F,zl=new F,y0=new Pe,Yo=new pr,Sl=new Oi,rp=new F,v0=new F,fa=class extends Pt{constructor(e=new vn,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Vl.fromBufferAttribute(t,r-1),zl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Vl.distanceTo(zl);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;y0.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(y0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=u.getX(y),S=u.getX(y+1),v=Tl(this,e,Yo,c,p,S,y);v&&t.push(v)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=Tl(this,e,Yo,c,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=Tl(this,e,Yo,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Tl(this,e,Yo,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};pa=class extends Dn{constructor(e,t,i,r,s,o,a,c,l,u=zr){if(u!==zr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=vr),i===void 0&&u===Wr&&(i=ts),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ma=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let u=i[r],h=i[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Be:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new F,r=[],s=[],o=[],a=new F,c=new Pe;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($e(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos($e(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},wD={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Mx(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,d,h,f;if(i&&(s=DD(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)d=n[g],h=n[g+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return ga(s,o,t,a,c,f,0),o}};_a=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];x0(e),M0(i,e);let o=e.length;t.forEach(x0);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,M0(i,t[c]);let a=wD.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};xa=class n extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let S=p*h-o;for(let v=0;v<l;v++){let x=v*d-s;g.push(x,-S,0),y.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let v=S+l*p,x=S+l*(p+1),N=S+1+l*(p+1),P=S+1+l*p;f.push(v,x,P),f.push(x,N,P)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ma=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yr=class extends Wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ea=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hl=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gl=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Zr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Zr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lp,endingEnd:lp}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case up:s=e,a=2*t-i;break;case dp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case up:o=e,c=2*i-t;break;case dp:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let N=0;N!==a;++N)s[N]=p*o[u+N]+S*o[l+N]+v*o[c+N]+x*o[d+N];return s}},jl=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},$l=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Al(t,this.TimeBufferType),this.values=Al(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Al(e.times,Array),values:Al(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case Ll:t=this.InterpolantFactoryMethodLinear;break;case Il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&VD(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Il,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ll;ki=class extends _n{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Qo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;wa=class extends _n{};wa.prototype.ValueTypeName="color";Ui=class extends _n{};Ui.prototype.ValueTypeName="number";ql=class extends Zr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Tt.slerpFlat(s,0,o,l-a,o,l,c);return s}},fi=class extends _n{InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};fi.prototype.ValueTypeName="quaternion";fi.prototype.InterpolantFactoryMethodSmooth=void 0;Bi=class extends _n{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Qo;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;Vi=class extends _n{};Vi.prototype.ValueTypeName="vector";ba=class{constructor(e="",t=-1,i=[],r=rx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=_r(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(GD(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(_n.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=zD(c);c=E0(c,1,u),l=E0(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let d=u[1],h=r[d];h||(r[d]=h=[]),h.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,f,g,y){if(f.length!==0){let m=[],p=[];bx(f,m,p,g),m.length!==0&&y.push(new d(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)f[h[g].morphTargets[y]]=-1;for(let y in f){let m=[],p=[];for(let S=0;S!==h[g].morphTargets.length;++S){let v=h[g];m.push(v.time),p.push(v.morphTarget===y?1:0)}r.push(new Ui(".morphTargetInfluence["+y+"]",m,p))}c=f.length*o}else{let f=".bones["+t[d].name+"]";i(Vi,f+".position",h,"pos",r),i(fi,f+".quaternion",h,"rot",r),i(Vi,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Sa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Xl=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Sx=new Xl,ji=(()=>{class n{constructor(t){this.manager=t!==void 0?t:Sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),Ii={},gp=class extends Error{constructor(e,t){super(e),this.response=t}},eo=class extends ji{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Sa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:i,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ii[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,y=0,m=new ReadableStream({start(p){S();function S(){d.read().then(({done:v,value:x})=>{if(v)p.close();else{y+=x.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let P=0,I=u.length;P<I;P++){let C=u[P];C.onProgress&&C.onProgress(N)}p.enqueue(x),S()}},v=>{p.error(v)})}}});return new Response(m)}else throw new gp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Sa.add(e,l);let u=Ii[e];delete Ii[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ii[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Yl=class extends ji{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Sa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Ys("img");function c(){u(),Sa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Ta=class extends ji{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new da,a=new eo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:gn,o.wrapT=l.wrapT!==void 0?l.wrapT:gn,o.magFilter=l.magFilter!==void 0?l.magFilter:$t,o.minFilter=l.minFilter!==void 0?l.minFilter:$t,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Gi),l.mipmapCount===1&&(o.minFilter=$t),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},i,r),o}},Kr=class extends ji{constructor(e){super(e)}load(e,t,i,r){let s=new Dn,o=new Yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Jr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},sp=new Pe,w0=new F,b0=new F,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;w0.setFromMatrixPosition(e.matrixWorld),t.position.copy(w0),b0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b0),t.updateMatrixWorld(),sp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yp=class extends Ca{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Da=class extends Jr{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},S0=new Pe,Zo=new F,op=new F,vp=class extends Ca{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),op.copy(i.position),op.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(op),i.updateMatrixWorld(),r.makeTranslation(-Zo.x,-Zo.y,-Zo.z),S0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S0)}},to=class extends Jr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Aa=class extends aa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_p=class extends Ca{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ia=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new _p}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ra=class extends Jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Pa=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Zl=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}},zp="\\[\\]\\.:\\/",WD=new RegExp("["+zp+"]","g"),Hp="[^"+zp+"]",jD="[^"+zp.replace("\\.","")+"]",$D=/((?:WC+[\/:])*)/.source.replace("WC",Hp),qD=/(WCOD+)?/.source.replace("WCOD",jD),XD=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hp),YD=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hp),ZD=new RegExp("^"+$D+qD+XD+YD+"$"),KD=["material","materials","bones","map"],xp=class{constructor(e,t,i){let r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(WD,"")}static parseTrackName(t){let i=ZD.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);KD.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=xp,n})();yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Dk=new Float32Array(1),no=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Na=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl)});function Yx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function QD(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}function L1(n,e,t,i,r,s,o){let a=new ke(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function y(v){let x=!1,N=g(v);N===null?p(a,c):N&&N.isColor&&(p(N,1),x=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){let N=g(x);N&&(N.isCubeTexture||N.mapping===Fa)?(u===void 0&&(u=new Qt(new Zs(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:is(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rs.copy(x.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(rs)),u.material.toneMapped=We.getTransfer(N.colorSpace)!==pt,(d!==N||h!==N.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=N,h=N.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new Qt(new xa(2,2),new jn({name:"BackgroundMaterial",uniforms:is(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=We.getTransfer(N.colorSpace)!==pt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||h!==N.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=N,h=N.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Vu,Vp(n)),i.buffers.color.setClear(Vu.r,Vu.g,Vu.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:m,dispose:S}}function F1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(_,T,O,L,G){let j=!1,U=d(L,O,T);s!==U&&(s=U,l(s.object)),j=f(_,L,O,G),j&&g(_,L,O,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(_,T,O,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,T,O){let L=O.wireframe===!0,G=i[_.id];G===void 0&&(G={},i[_.id]=G);let j=G[T.id];j===void 0&&(j={},G[T.id]=j);let U=j[L];return U===void 0&&(U=h(c()),j[L]=U),U}function h(_){let T=[],O=[],L=[];for(let G=0;G<t;G++)T[G]=0,O[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:L,object:_,attributes:{},index:null}}function f(_,T,O,L){let G=s.attributes,j=T.attributes,U=0,H=O.getAttributes();for(let b in H)if(H[b].location>=0){let Y=G[b],ie=j[b];if(ie===void 0&&(b==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),b==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),Y===void 0||Y.attribute!==ie||ie&&Y.data!==ie.data)return!0;U++}return s.attributesNum!==U||s.index!==L}function g(_,T,O,L){let G={},j=T.attributes,U=0,H=O.getAttributes();for(let b in H)if(H[b].location>=0){let Y=j[b];Y===void 0&&(b==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),b==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor));let ie={};ie.attribute=Y,Y&&Y.data&&(ie.data=Y.data),G[b]=ie,U++}s.attributes=G,s.attributesNum=U,s.index=L}function y(){let _=s.newAttributes;for(let T=0,O=_.length;T<O;T++)_[T]=0}function m(_){p(_,0)}function p(_,T){let O=s.newAttributes,L=s.enabledAttributes,G=s.attributeDivisors;O[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),G[_]!==T&&(n.vertexAttribDivisor(_,T),G[_]=T)}function S(){let _=s.newAttributes,T=s.enabledAttributes;for(let O=0,L=T.length;O<L;O++)T[O]!==_[O]&&(n.disableVertexAttribArray(O),T[O]=0)}function v(_,T,O,L,G,j,U){U===!0?n.vertexAttribIPointer(_,T,O,G,j):n.vertexAttribPointer(_,T,O,L,G,j)}function x(_,T,O,L){y();let G=L.attributes,j=O.getAttributes(),U=T.defaultAttributeValues;for(let H in j){let b=j[H];if(b.location>=0){let R=G[H];if(R===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(R=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(R=_.instanceColor)),R!==void 0){let Y=R.normalized,ie=R.itemSize,ge=e.get(R);if(ge===void 0)continue;let de=ge.buffer,Z=ge.type,se=ge.bytesPerElement,xe=Z===n.INT||Z===n.UNSIGNED_INT||R.gpuType===au;if(R.isInterleavedBufferAttribute){let ce=R.data,X=ce.stride,J=R.offset;if(ce.isInstancedInterleavedBuffer){for(let k=0;k<b.locationSize;k++)p(b.location+k,ce.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let k=0;k<b.locationSize;k++)m(b.location+k);n.bindBuffer(n.ARRAY_BUFFER,de);for(let k=0;k<b.locationSize;k++)v(b.location+k,ie/b.locationSize,Z,Y,X*se,(J+ie/b.locationSize*k)*se,xe)}else{if(R.isInstancedBufferAttribute){for(let ce=0;ce<b.locationSize;ce++)p(b.location+ce,R.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ce=0;ce<b.locationSize;ce++)m(b.location+ce);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ce=0;ce<b.locationSize;ce++)v(b.location+ce,ie/b.locationSize,Z,Y,ie*se,ie/b.locationSize*ce*se,xe)}}else if(U!==void 0){let Y=U[H];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(b.location,Y);break;case 3:n.vertexAttrib3fv(b.location,Y);break;case 4:n.vertexAttrib4fv(b.location,Y);break;default:n.vertexAttrib1fv(b.location,Y)}}}}S()}function N(){C();for(let _ in i){let T=i[_];for(let O in T){let L=T[O];for(let G in L)u(L[G].object),delete L[G];delete T[O]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let T=i[_.id];for(let O in T){let L=T[O];for(let G in L)u(L[G].object),delete L[G];delete T[O]}delete i[_.id]}function I(_){for(let T in i){let O=i[T];if(O[_.id]===void 0)continue;let L=O[_.id];for(let G in L)u(L[G].object),delete L[G];delete O[_.id]}}function C(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function O1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*h[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function k1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==xn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let C=I===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==gi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==tn&&!C)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:N,maxSamples:P}}function U1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Cn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let S=s?0:i,v=S*4,x=p.clippingState||null;c.value=x,x=u(g,h,v,f);for(let N=0;N!==v;++N)x[N]=t[N];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==y;++v,x+=4)o.copy(d[v]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function B1(n){let e=new WeakMap;function t(o,a){return a===yr?o.mapping=Qr:a===su&&(o.mapping=es),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yr||a===su)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Bl(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function V1(n){let e=[],t=[],i=[],r=n,s=n-oo+1+Tx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-oo?c=Tx[o-n+oo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let P=0;P<f;P++){let I=P%3*2/3-1,C=P>2?0:-1,E=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];S.set(E,y*g*P),v.set(h,m*g*P);let _=[P,P,P,P,P,P];x.set(_,p*g*P)}let N=new vn;N.setAttribute("position",new yn(S,y)),N.setAttribute("uv",new yn(v,m)),N.setAttribute("faceIndex",new yn(x,p)),e.push(N),r>oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ax(n,e,t){let i=new hi(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function z1(n,e,t){let i=new Float32Array(as),r=new F(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ix(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rx(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function sm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===yr||c===su,u=c===Qr||c===es;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Gu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Gu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function G1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W1(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let S=f.array;y=f.version;for(let v=0,x=S.length;v<x;v+=3){let N=S[v+0],P=S[v+1],I=S[v+2];h.push(N,P,P,I,I,N)}}else if(g!==void 0){let S=g.array;y=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){let N=v+0,P=v+1,I=v+2;h.push(N,P,P,I,I,N)}}else return;let m=new(Bp(h)?oa:$r)(h,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function j1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,y,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*y[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q1(n,e,t){let i=new WeakMap,r=new Xe;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let _=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let N=a.attributes.position.count*x,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let I=new Float32Array(N*P*4*d),C=new ia(I,N,P,d);C.type=tn,C.needsUpdate=!0;let E=x*4;for(let T=0;T<d;T++){let O=p[T],L=S[T],G=v[T],j=N*P*4*T;for(let U=0;U<O.count;U++){let H=U*E;g===!0&&(r.fromBufferAttribute(O,U),I[j+H+0]=r.x,I[j+H+1]=r.y,I[j+H+2]=r.z,I[j+H+3]=0),y===!0&&(r.fromBufferAttribute(L,U),I[j+H+4]=r.x,I[j+H+5]=r.y,I[j+H+6]=r.z,I[j+H+7]=0),m===!0&&(r.fromBufferAttribute(G,U),I[j+H+8]=r.x,I[j+H+9]=r.y,I[j+H+10]=r.z,I[j+H+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Be(N,P)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function X1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}function co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Nx[r];if(s===void 0&&(s=new Float32Array(r),Nx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ju(n,e){let t=Lx[e];t===void 0&&(t=new Int32Array(e),Lx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Y1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function J1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function Q1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;kx.set(i),n.uniformMatrix2fv(this.addr,!1,kx),Ft(t,i)}}function eR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;Ox.set(i),n.uniformMatrix3fv(this.addr,!1,Ox),Ft(t,i)}}function tR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;Fx.set(i),n.uniformMatrix4fv(this.addr,!1,Fx),Ft(t,i)}}function nR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function rR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function sR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function oR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function cR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function lR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function uR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Px.compareFunction=Op,s=Px):s=Zx,t.setTexture2D(e||s,r)}function dR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jx,r)}function hR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qx,r)}function fR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kx,r)}function pR(n){switch(n){case 5126:return Y1;case 35664:return Z1;case 35665:return K1;case 35666:return J1;case 35674:return Q1;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return aR;case 36295:return cR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return fR}}function mR(n,e){n.uniform1fv(this.addr,e)}function gR(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function yR(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function vR(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function _R(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xR(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MR(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ER(n,e){n.uniform1iv(this.addr,e)}function wR(n,e){n.uniform2iv(this.addr,e)}function bR(n,e){n.uniform3iv(this.addr,e)}function SR(n,e){n.uniform4iv(this.addr,e)}function TR(n,e){n.uniform1uiv(this.addr,e)}function CR(n,e){n.uniform2uiv(this.addr,e)}function DR(n,e){n.uniform3uiv(this.addr,e)}function AR(n,e){n.uniform4uiv(this.addr,e)}function IR(n,e,t){let i=this.cache,r=e.length,s=ju(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zx,s[o])}function RR(n,e,t){let i=this.cache,r=e.length,s=ju(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jx,s[o])}function PR(n,e,t){let i=this.cache,r=e.length,s=ju(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qx,s[o])}function NR(n,e,t){let i=this.cache,r=e.length,s=ju(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kx,s[o])}function LR(n){switch(n){case 5126:return mR;case 35664:return gR;case 35665:return yR;case 35666:return vR;case 35674:return _R;case 35675:return xR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return wR;case 35668:case 35672:return bR;case 35669:case 35673:return SR;case 5125:return TR;case 36294:return CR;case 36295:return DR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return IR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return NR}}function Ux(n,e){n.seq.push(e),n.map[e.id]=e}function FR(n,e,t){let i=n.name,r=i.length;for(Zp.lastIndex=0;;){let s=Zp.exec(i),o=Zp.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ux(t,l===void 0?new Kp(a,n,e):new Jp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Qp(a),Ux(t,d)),t=d}}}function Bx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function UR(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BR(n){We._getMatrix(Vx,We.workingColorSpace,n);let e=`mat3( ${Vx.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+UR(n.getShaderSource(e),o)}else return r}function VR(n,e){let t=BR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zR(n,e){let t;switch(e){case Y0:t="Linear";break;case Z0:t="Reinhard";break;case K0:t="Cineon";break;case J0:t="ACESFilmic";break;case ex:t="AgX";break;case tx:t="Neutral";break;case Q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function HR(){We.getLuminanceCoefficients(Hu);let n=Hu.x.toFixed(4),e=Hu.y.toFixed(4),t=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function WR(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jR(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ga(n){return n!==""}function Hx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function em(n){return n.replace($R,XR)}function XR(n,e){let t=Ye[e];if(t===void 0){let i=qR.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return em(t)}function Wx(n){return n.replace(YR,ZR)}function ZR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function JR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function eP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case La:e="ENVMAP_BLENDING_MULTIPLY";break;case q0:e="ENVMAP_BLENDING_MIX";break;case X0:e="ENVMAP_BLENDING_ADD";break}return e}function tP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=KR(t),l=JR(t),u=QR(t),d=eP(t),h=tP(t),f=GR(t),g=WR(s),y=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[jx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[jx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Hi?zR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,VR("linearToOutputTexel",t.outputColorSpace),HR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=em(o),o=Hx(o,t),o=Gx(o,t),a=em(a),a=Hx(a,t),a=Gx(a,t),o=Wx(o),a=Wx(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,x=S+p+a,N=Bx(r,r.VERTEX_SHADER,v),P=Bx(r,r.FRAGMENT_SHADER,x);r.attachShader(y,N),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(T){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(y).trim(),L=r.getShaderInfoLog(N).trim(),G=r.getShaderInfoLog(P).trim(),j=!0,U=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,P);else{let H=zx(r,N,"vertex"),b=zx(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+H+`
`+b)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||G==="")&&(U=!1);U&&(T.diagnostics={runnable:j,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(N),r.deleteShader(P),C=new ao(r,y),E=jR(r,y)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,OR)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=P,this}function rP(n,e,t,i,r,s,o){let a=new ra,c=new tm,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,_,T,O,L){let G=O.fog,j=L.geometry,U=E.isMeshStandardMaterial?O.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||U),b=H&&H.mapping===Fa?H.image.height:null,R=g[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Y=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=Y!==void 0?Y.length:0,ge=0;j.morphAttributes.position!==void 0&&(ge=1),j.morphAttributes.normal!==void 0&&(ge=2),j.morphAttributes.color!==void 0&&(ge=3);let de,Z,se,xe;if(R){let dt=yi[R];de=dt.vertexShader,Z=dt.fragmentShader}else de=E.vertexShader,Z=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),xe=c.getFragmentShaderID(E);let ce=n.getRenderTarget(),X=n.state.buffers.depth.getReversed(),J=L.isInstancedMesh===!0,k=L.isBatchedMesh===!0,te=!!E.map,he=!!E.matcap,le=!!H,A=!!E.aoMap,Le=!!E.lightMap,ye=!!E.bumpMap,ve=!!E.normalMap,ue=!!E.displacementMap,Fe=!!E.emissiveMap,De=!!E.metalnessMap,D=!!E.roughnessMap,M=E.anisotropy>0,W=E.clearcoat>0,ee=E.dispersion>0,re=E.iridescence>0,Q=E.sheen>0,Ie=E.transmission>0,fe=M&&!!E.anisotropyMap,Se=W&&!!E.clearcoatMap,Ke=W&&!!E.clearcoatNormalMap,ae=W&&!!E.clearcoatRoughnessMap,Te=re&&!!E.iridescenceMap,Ne=re&&!!E.iridescenceThicknessMap,Re=Q&&!!E.sheenColorMap,_e=Q&&!!E.sheenRoughnessMap,tt=!!E.specularMap,qe=!!E.specularColorMap,_t=!!E.specularIntensityMap,B=Ie&&!!E.transmissionMap,Me=Ie&&!!E.thicknessMap,K=!!E.gradientMap,ne=!!E.alphaMap,be=E.alphaTest>0,we=!!E.alphaHash,je=!!E.extensions,bt=Hi;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(bt=n.toneMapping);let qt={shaderID:R,shaderType:E.type,shaderName:E.name,vertexShader:de,fragmentShader:Z,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:k,batchingColor:k&&L._colorsTexture!==null,instancing:J,instancingColor:J&&L.instanceColor!==null,instancingMorph:J&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Li,alphaToCoverage:!!E.alphaToCoverage,map:te,matcap:he,envMap:le,envMapMode:le&&H.mapping,envMapCubeUVHeight:b,aoMap:A,lightMap:Le,bumpMap:ye,normalMap:ve,displacementMap:h&&ue,emissiveMap:Fe,normalMapObjectSpace:ve&&E.normalMapType===ax,normalMapTangentSpace:ve&&E.normalMapType===Ha,metalnessMap:De,roughnessMap:D,anisotropy:M,anisotropyMap:fe,clearcoat:W,clearcoatMap:Se,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:re,iridescenceMap:Te,iridescenceThicknessMap:Ne,sheen:Q,sheenColorMap:Re,sheenRoughnessMap:_e,specularMap:tt,specularColorMap:qe,specularIntensityMap:_t,transmission:Ie,transmissionMap:B,thicknessMap:Me,gradientMap:K,opaque:E.transparent===!1&&E.blending===Hr&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:we,combine:E.combine,mapUv:te&&y(E.map.channel),aoMapUv:A&&y(E.aoMap.channel),lightMapUv:Le&&y(E.lightMap.channel),bumpMapUv:ye&&y(E.bumpMap.channel),normalMapUv:ve&&y(E.normalMap.channel),displacementMapUv:ue&&y(E.displacementMap.channel),emissiveMapUv:Fe&&y(E.emissiveMap.channel),metalnessMapUv:De&&y(E.metalnessMap.channel),roughnessMapUv:D&&y(E.roughnessMap.channel),anisotropyMapUv:fe&&y(E.anisotropyMap.channel),clearcoatMapUv:Se&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(E.sheenRoughnessMap.channel),specularMapUv:tt&&y(E.specularMap.channel),specularColorMapUv:qe&&y(E.specularColorMap.channel),specularIntensityMapUv:_t&&y(E.specularIntensityMap.channel),transmissionMapUv:B&&y(E.transmissionMap.channel),thicknessMapUv:Me&&y(E.thicknessMap.channel),alphaMapUv:ne&&y(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ve||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!j.attributes.uv&&(te||ne),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:X,skinning:L.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ge,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&We.getTransfer(E.map.colorSpace)===pt,decodeVideoTextureEmissive:Fe&&E.emissiveMap.isVideoTexture===!0&&We.getTransfer(E.emissiveMap.colorSpace)===pt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mi,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||k)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(E){let _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(let T in E.defines)_.push(T),_.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(S(_,E),v(_,E),_.push(n.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function S(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function v(E,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let _=g[E.type],T;if(_){let O=yi[_];T=xx.clone(O.uniforms)}else T=E.uniforms;return T}function N(E,_){let T;for(let O=0,L=u.length;O<L;O++){let G=u[O];if(G.cacheKey===_){T=G,++T.usedTimes;break}}return T===void 0&&(T=new nP(n,_,E,s),u.push(T)),T}function P(E){if(--E.usedTimes===0){let _=u.indexOf(E);u[_]=u[u.length-1],u.pop(),E.destroy()}}function I(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:N,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:C}}function sP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,h,f,g,y,m){let p=o(d,h,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,y,m){let p=o(d,h,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||oP),i.length>1&&i.sort(h||$x),r.length>1&&r.sort(h||$x)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function aP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new qx,n.set(i,[o])):r>=s.length?(o=new qx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function lP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function dP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hP(n){let e=new cP,t=lP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let r=new F,s=new Pe,o=new Pe;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,v=0,x=0,N=0,P=0,I=0;l.sort(dP);for(let E=0,_=l.length;E<_;E++){let T=l[E],O=T.color,L=T.intensity,G=T.distance,j=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*L,d+=O.g*L,h+=O.b*L;else if(T.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(T.sh.coefficients[U],L);I++}else if(T.isDirectionalLight){let U=e.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let H=T.shadow,b=t.get(T);b.shadowIntensity=H.intensity,b.shadowBias=H.bias,b.shadowNormalBias=H.normalBias,b.shadowRadius=H.radius,b.shadowMapSize=H.mapSize,i.directionalShadow[f]=b,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=T.shadow.matrix,S++}i.directional[f]=U,f++}else if(T.isSpotLight){let U=e.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(O).multiplyScalar(L),U.distance=G,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,i.spot[y]=U;let H=T.shadow;if(T.map&&(i.spotLightMap[N]=T.map,N++,H.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[y]=H.matrix,T.castShadow){let b=t.get(T);b.shadowIntensity=H.intensity,b.shadowBias=H.bias,b.shadowNormalBias=H.normalBias,b.shadowRadius=H.radius,b.shadowMapSize=H.mapSize,i.spotShadow[y]=b,i.spotShadowMap[y]=j,x++}y++}else if(T.isRectAreaLight){let U=e.get(T);U.color.copy(O).multiplyScalar(L),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=U,m++}else if(T.isPointLight){let U=e.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),U.distance=T.distance,U.decay=T.decay,T.castShadow){let H=T.shadow,b=t.get(T);b.shadowIntensity=H.intensity,b.shadowBias=H.bias,b.shadowNormalBias=H.normalBias,b.shadowRadius=H.radius,b.shadowMapSize=H.mapSize,b.shadowCameraNear=H.camera.near,b.shadowCameraFar=H.camera.far,i.pointShadow[g]=b,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=T.shadow.matrix,v++}i.point[g]=U,g++}else if(T.isHemisphereLight){let U=e.get(T);U.skyColor.copy(T.color).multiplyScalar(L),U.groundColor.copy(T.groundColor).multiplyScalar(L),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==N||C.numLightProbes!==I)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,C.directionalLength=f,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=N,C.numLightProbes=I,i.version=uP++)}function c(l,u){let d=0,h=0,f=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let v=l[p];if(v.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function Xx(n){let e=new hP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function fP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Xx(n),e.set(r,[a])):s>=o.length?(a=new Xx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function gP(n,e,t){let i=new Js,r=new Be,s=new Be,o=new Xe,a=new Hl({depthPacking:ox}),c=new Gl,l={},u=t.maxTextureSize,d={[Ni]:en,[en]:Ni,[mi]:mi},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:pP,fragmentShader:mP}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new vn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Qt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let p=this.type;this.render=function(P,I,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let E=n.getRenderTarget(),_=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),O=n.state;O.setBlending(zi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let L=p!==pi&&this.type===pi,G=p===pi&&this.type!==pi;for(let j=0,U=P.length;j<U;j++){let H=P[j],b=H.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);let R=b.getFrameExtents();if(r.multiply(R),s.copy(b.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/R.x),r.x=s.x*R.x,b.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/R.y),r.y=s.y*R.y,b.mapSize.y=s.y)),b.map===null||L===!0||G===!0){let ie=this.type!==pi?{minFilter:cn,magFilter:cn}:{};b.map!==null&&b.map.dispose(),b.map=new hi(r.x,r.y,ie),b.map.texture.name=H.name+".shadowMap",b.camera.updateProjectionMatrix()}n.setRenderTarget(b.map),n.clear();let Y=b.getViewportCount();for(let ie=0;ie<Y;ie++){let ge=b.getViewport(ie);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),O.viewport(o),b.updateMatrices(H,ie),i=b.getFrustum(),x(I,C,b.camera,H,this.type)}b.isPointLightShadow!==!0&&this.type===pi&&S(b,C),b.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,_,T)};function S(P,I){let C=e.update(y);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new hi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(I,null,C,h,y,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(I,null,C,f,y,null)}function v(P,I,C,E){let _=null,T=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)_=T;else if(_=C.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let O=_.uuid,L=I.uuid,G=l[O];G===void 0&&(G={},l[O]=G);let j=G[L];j===void 0&&(j=_.clone(),G[L]=j,I.addEventListener("dispose",N)),_=j}if(_.visible=I.visible,_.wireframe=I.wireframe,E===pi?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:d[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=n.properties.get(_);O.light=C}return _}function x(P,I,C,E,_){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===pi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);let L=e.update(P),G=P.material;if(Array.isArray(G)){let j=L.groups;for(let U=0,H=j.length;U<H;U++){let b=j[U],R=G[b.materialIndex];if(R&&R.visible){let Y=v(P,R,E,_);P.onBeforeShadow(n,P,I,C,L,Y,b),n.renderBufferDirect(C,null,L,Y,P,b),P.onAfterShadow(n,P,I,C,L,Y,b)}}}else if(G.visible){let j=v(P,G,E,_);P.onBeforeShadow(n,P,I,C,L,j,null),n.renderBufferDirect(C,null,L,j,P,null),P.onAfterShadow(n,P,I,C,L,j,null)}}let O=P.children;for(let L=0,G=O.length;L<G;L++)x(O[L],I,C,E,_)}function N(P){P.target.removeEventListener("dispose",N);for(let C in l){let E=l[C],_=P.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function vP(n,e){function t(){let B=!1,Me=new Xe,K=null,ne=new Xe(0,0,0,0);return{setMask:function(be){K!==be&&!B&&(n.colorMask(be,be,be,be),K=be)},setLocked:function(be){B=be},setClear:function(be,we,je,bt,qt){qt===!0&&(be*=bt,we*=bt,je*=bt),Me.set(be,we,je,bt),ne.equals(Me)===!1&&(n.clearColor(be,we,je,bt),ne.copy(Me))},reset:function(){B=!1,K=null,ne.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,K=null,ne=null,be=null;return{setReversed:function(we){if(Me!==we){let je=e.get("EXT_clip_control");Me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);let bt=be;be=null,this.setClear(bt)}Me=we},getReversed:function(){return Me},setTest:function(we){we?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(we){K!==we&&!B&&(n.depthMask(we),K=we)},setFunc:function(we){if(Me&&(we=yP[we]),ne!==we){switch(we){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case eu:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case tu:n.depthFunc(n.EQUAL);break;case nu:n.depthFunc(n.GEQUAL);break;case iu:n.depthFunc(n.GREATER);break;case ru:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=we}},setLocked:function(we){B=we},setClear:function(we){be!==we&&(Me&&(we=1-we),n.clearDepth(we),be=we)},reset:function(){B=!1,K=null,ne=null,be=null,Me=!1}}}function r(){let B=!1,Me=null,K=null,ne=null,be=null,we=null,je=null,bt=null,qt=null;return{setTest:function(dt){B||(dt?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(dt){Me!==dt&&!B&&(n.stencilMask(dt),Me=dt)},setFunc:function(dt,Pn,_i){(K!==dt||ne!==Pn||be!==_i)&&(n.stencilFunc(dt,Pn,_i),K=dt,ne=Pn,be=_i)},setOp:function(dt,Pn,_i){(we!==dt||je!==Pn||bt!==_i)&&(n.stencilOp(dt,Pn,_i),we=dt,je=Pn,bt=_i)},setLocked:function(dt){B=dt},setClear:function(dt){qt!==dt&&(n.clearStencil(dt),qt=dt)},reset:function(){B=!1,Me=null,K=null,ne=null,be=null,we=null,je=null,bt=null,qt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,y=!1,m=null,p=null,S=null,v=null,x=null,N=null,P=null,I=new ke(0,0,0),C=0,E=!1,_=null,T=null,O=null,L=null,G=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,H=0,b=n.getParameter(n.VERSION);b.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(b)[1]),U=H>=1):b.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),U=H>=2);let R=null,Y={},ie=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),de=new Xe().fromArray(ie),Z=new Xe().fromArray(ge);function se(B,Me,K,ne){let be=new Uint8Array(4),we=n.createTexture();n.bindTexture(B,we),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<K;je++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Me+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return we}let xe={};xe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(Gr),ye(!1),ve(Mp),ce(n.CULL_FACE),A(zi);function ce(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function X(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function J(B,Me){return d[B]!==Me?(n.bindFramebuffer(B,Me),d[B]=Me,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function k(B,Me){let K=f,ne=!1;if(B){K=h.get(Me),K===void 0&&(K=[],h.set(Me,K));let be=B.textures;if(K.length!==be.length||K[0]!==n.COLOR_ATTACHMENT0){for(let we=0,je=be.length;we<je;we++)K[we]=n.COLOR_ATTACHMENT0+we;K.length=be.length,ne=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ne=!0);ne&&n.drawBuffers(K)}function te(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let he={[fr]:n.FUNC_ADD,[I0]:n.FUNC_SUBTRACT,[R0]:n.FUNC_REVERSE_SUBTRACT};he[P0]=n.MIN,he[N0]=n.MAX;let le={[L0]:n.ZERO,[F0]:n.ONE,[O0]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[H0]:n.SRC_ALPHA_SATURATE,[V0]:n.DST_COLOR,[U0]:n.DST_ALPHA,[k0]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[z0]:n.ONE_MINUS_DST_COLOR,[B0]:n.ONE_MINUS_DST_ALPHA,[G0]:n.CONSTANT_COLOR,[W0]:n.ONE_MINUS_CONSTANT_COLOR,[j0]:n.CONSTANT_ALPHA,[$0]:n.ONE_MINUS_CONSTANT_ALPHA};function A(B,Me,K,ne,be,we,je,bt,qt,dt){if(B===zi){y===!0&&(X(n.BLEND),y=!1);return}if(y===!1&&(ce(n.BLEND),y=!0),B!==A0){if(B!==m||dt!==E){if((p!==fr||x!==fr)&&(n.blendEquation(n.FUNC_ADD),p=fr,x=fr),dt)switch(B){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wp:n.blendFunc(n.ONE,n.ONE);break;case bp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,v=null,N=null,P=null,I.set(0,0,0),C=0,m=B,E=dt}return}be=be||Me,we=we||K,je=je||ne,(Me!==p||be!==x)&&(n.blendEquationSeparate(he[Me],he[be]),p=Me,x=be),(K!==S||ne!==v||we!==N||je!==P)&&(n.blendFuncSeparate(le[K],le[ne],le[we],le[je]),S=K,v=ne,N=we,P=je),(bt.equals(I)===!1||qt!==C)&&(n.blendColor(bt.r,bt.g,bt.b,qt),I.copy(bt),C=qt),m=B,E=!1}function Le(B,Me){B.side===mi?X(n.CULL_FACE):ce(n.CULL_FACE);let K=B.side===en;Me&&(K=!K),ye(K),B.blending===Hr&&B.transparent===!1?A(zi):A(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let ne=B.stencilWrite;a.setTest(ne),ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(B){_!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),_=B)}function ve(B){B!==T0?(ce(n.CULL_FACE),B!==T&&(B===Mp?n.cullFace(n.BACK):B===C0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),T=B}function ue(B){B!==O&&(U&&n.lineWidth(B),O=B)}function Fe(B,Me,K){B?(ce(n.POLYGON_OFFSET_FILL),(L!==Me||G!==K)&&(n.polygonOffset(Me,K),L=Me,G=K)):X(n.POLYGON_OFFSET_FILL)}function De(B){B?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function D(B){B===void 0&&(B=n.TEXTURE0+j-1),R!==B&&(n.activeTexture(B),R=B)}function M(B,Me,K){K===void 0&&(R===null?K=n.TEXTURE0+j-1:K=R);let ne=Y[K];ne===void 0&&(ne={type:void 0,texture:void 0},Y[K]=ne),(ne.type!==B||ne.texture!==Me)&&(R!==K&&(n.activeTexture(K),R=K),n.bindTexture(B,Me||xe[B]),ne.type=B,ne.texture=Me)}function W(){let B=Y[R];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(B){de.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function _e(B){Z.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function tt(B,Me){let K=l.get(Me);K===void 0&&(K=new WeakMap,l.set(Me,K));let ne=K.get(B);ne===void 0&&(ne=n.getUniformBlockIndex(Me,B.name),K.set(B,ne))}function qe(B,Me){let ne=l.get(Me).get(B);c.get(Me)!==ne&&(n.uniformBlockBinding(Me,ne,B.__bindingPointIndex),c.set(Me,ne))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},R=null,Y={},d={},h=new WeakMap,f=[],g=null,y=!1,m=null,p=null,S=null,v=null,x=null,N=null,P=null,I=new ke(0,0,0),C=0,E=!1,_=null,T=null,O=null,L=null,G=null,de.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:X,bindFramebuffer:J,drawBuffers:k,useProgram:te,setBlending:A,setMaterial:Le,setFlipSided:ye,setCullFace:ve,setLineWidth:ue,setPolygonOffset:Fe,setScissorTest:De,activeTexture:D,bindTexture:M,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:Te,texImage3D:Ne,updateUBOMapping:tt,uniformBlockBinding:qe,texStorage2D:Ke,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Ie,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:Re,viewport:_e,reset:_t}}function _P(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,M){return f?new OffscreenCanvas(D,M):Ys("canvas")}function y(D,M,W){let ee=1,re=De(D);if((re.width>W||re.height>W)&&(ee=W/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Q=Math.floor(ee*re.width),Ie=Math.floor(ee*re.height);d===void 0&&(d=g(Q,Ie));let fe=M?g(Q,Ie):d;return fe.width=Q,fe.height=Ie,fe.getContext("2d").drawImage(D,0,0,Q,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Ie+")."),fe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(D,M,W,ee,re=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=M;if(M===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),M===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),M===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),M===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),M===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),M===n.RGBA){let Ie=re?ea:We.getTransfer(ee);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=Ie===pt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(D,M){let W;return D?M===null||M===vr||M===ts?W=n.DEPTH24_STENCIL8:M===tn?W=n.DEPTH32F_STENCIL8:M===io&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vr||M===ts?W=n.DEPTH_COMPONENT24:M===tn?W=n.DEPTH_COMPONENT32F:M===io&&(W=n.DEPTH_COMPONENT16),W}function N(D,M){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function P(D){let M=D.target;M.removeEventListener("dispose",P),C(M),M.isVideoTexture&&u.delete(M)}function I(D){let M=D.target;M.removeEventListener("dispose",I),_(M)}function C(D){let M=i.get(D);if(M.__webglInit===void 0)return;let W=D.source,ee=h.get(W);if(ee){let re=ee[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(D),Object.keys(ee).length===0&&h.delete(W)}i.remove(D)}function E(D){let M=i.get(D);n.deleteTexture(M.__webglTexture);let W=D.source,ee=h.get(W);delete ee[M.__cacheKey],o.memory.textures--}function _(D){let M=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let re=0;re<M.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(M.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=D.textures;for(let ee=0,re=W.length;ee<re;ee++){let Q=i.get(W[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(W[ee])}i.remove(D)}let T=0;function O(){T=0}function L(){let D=T;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),T+=1,D}function G(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function j(D,M){let W=i.get(D);if(D.isVideoTexture&&ue(D),D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){let ee=D.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,D,M);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function U(D,M){let W=i.get(D);if(D.version>0&&W.__version!==D.version){Z(W,D,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function H(D,M){let W=i.get(D);if(D.version>0&&W.__version!==D.version){Z(W,D,M);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function b(D,M){let W=i.get(D);if(D.version>0&&W.__version!==D.version){se(W,D,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}let R={[ui]:n.REPEAT,[gn]:n.CLAMP_TO_EDGE,[Nl]:n.MIRRORED_REPEAT},Y={[cn]:n.NEAREST,[ix]:n.NEAREST_MIPMAP_NEAREST,[Oa]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[ou]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},ie={[cx]:n.NEVER,[px]:n.ALWAYS,[lx]:n.LESS,[Op]:n.LEQUAL,[ux]:n.EQUAL,[fx]:n.GEQUAL,[dx]:n.GREATER,[hx]:n.NOTEQUAL};function ge(D,M){if(M.type===tn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===ou||M.magFilter===Oa||M.magFilter===Gi||M.minFilter===$t||M.minFilter===ou||M.minFilter===Oa||M.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,R[M.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,R[M.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,R[M.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Y[M.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==Oa&&M.minFilter!==Gi||M.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function de(D,M){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",P));let ee=M.source,re=h.get(ee);re===void 0&&(re={},h.set(ee,re));let Q=G(M);if(Q!==D.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[Q].usedTimes++;let Ie=re[D.__cacheKey];Ie!==void 0&&(re[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(M)),D.__cacheKey=Q,D.__webglTexture=re[Q].texture}return W}function Z(D,M,W){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);let re=de(D,M),Q=M.source;t.bindTexture(ee,D.__webglTexture,n.TEXTURE0+W);let Ie=i.get(Q);if(Q.version!==Ie.__version||re===!0){t.activeTexture(n.TEXTURE0+W);let fe=We.getPrimaries(We.workingColorSpace),Se=M.colorSpace===Wi?null:We.getPrimaries(M.colorSpace),Ke=M.colorSpace===Wi||fe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ae=y(M.image,!1,r.maxTextureSize);ae=Fe(M,ae);let Te=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Re=v(M.internalFormat,Te,Ne,M.colorSpace,M.isVideoTexture);ge(ee,M);let _e,tt=M.mipmaps,qe=M.isVideoTexture!==!0,_t=Ie.__version===void 0||re===!0,B=Q.dataReady,Me=N(M,ae);if(M.isDepthTexture)Re=x(M.format===Wr,M.type),_t&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,Te,Ne,null));else if(M.isDataTexture)if(tt.length>0){qe&&_t&&t.texStorage2D(n.TEXTURE_2D,Me,Re,tt[0].width,tt[0].height);for(let K=0,ne=tt.length;K<ne;K++)_e=tt[K],qe?B&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,_e.width,_e.height,Te,Ne,_e.data):t.texImage2D(n.TEXTURE_2D,K,Re,_e.width,_e.height,0,Te,Ne,_e.data);M.generateMipmaps=!1}else qe?(_t&&t.texStorage2D(n.TEXTURE_2D,Me,Re,ae.width,ae.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Ne,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,Te,Ne,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Re,tt[0].width,tt[0].height,ae.depth);for(let K=0,ne=tt.length;K<ne;K++)if(_e=tt[K],M.format!==xn)if(Te!==null)if(qe){if(B)if(M.layerUpdates.size>0){let be=Gp(_e.width,_e.height,M.format,M.type);for(let we of M.layerUpdates){let je=_e.data.subarray(we*be/_e.data.BYTES_PER_ELEMENT,(we+1)*be/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,we,_e.width,_e.height,1,Te,je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,ae.depth,Te,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Re,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,ae.depth,Te,Ne,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Re,_e.width,_e.height,ae.depth,0,Te,Ne,_e.data)}else{qe&&_t&&t.texStorage2D(n.TEXTURE_2D,Me,Re,tt[0].width,tt[0].height);for(let K=0,ne=tt.length;K<ne;K++)_e=tt[K],M.format!==xn?Te!==null?qe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?B&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,_e.width,_e.height,Te,Ne,_e.data):t.texImage2D(n.TEXTURE_2D,K,Re,_e.width,_e.height,0,Te,Ne,_e.data)}else if(M.isDataArrayTexture)if(qe){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Re,ae.width,ae.height,ae.depth),B)if(M.layerUpdates.size>0){let K=Gp(ae.width,ae.height,M.format,M.type);for(let ne of M.layerUpdates){let be=ae.data.subarray(ne*K/ae.data.BYTES_PER_ELEMENT,(ne+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,Te,Ne,be)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ne,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,Te,Ne,ae.data);else if(M.isData3DTexture)qe?(_t&&t.texStorage3D(n.TEXTURE_3D,Me,Re,ae.width,ae.height,ae.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ne,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,Te,Ne,ae.data);else if(M.isFramebufferTexture){if(_t)if(qe)t.texStorage2D(n.TEXTURE_2D,Me,Re,ae.width,ae.height);else{let K=ae.width,ne=ae.height;for(let be=0;be<Me;be++)t.texImage2D(n.TEXTURE_2D,be,Re,K,ne,0,Te,Ne,null),K>>=1,ne>>=1}}else if(tt.length>0){if(qe&&_t){let K=De(tt[0]);t.texStorage2D(n.TEXTURE_2D,Me,Re,K.width,K.height)}for(let K=0,ne=tt.length;K<ne;K++)_e=tt[K],qe?B&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Te,Ne,_e):t.texImage2D(n.TEXTURE_2D,K,Re,Te,Ne,_e);M.generateMipmaps=!1}else if(qe){if(_t){let K=De(ae);t.texStorage2D(n.TEXTURE_2D,Me,Re,K.width,K.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ne,ae)}else t.texImage2D(n.TEXTURE_2D,0,Re,Te,Ne,ae);m(M)&&p(ee),Ie.__version=Q.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function se(D,M,W){if(M.image.length!==6)return;let ee=de(D,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+W);let Q=i.get(re);if(re.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);let Ie=We.getPrimaries(We.workingColorSpace),fe=M.colorSpace===Wi?null:We.getPrimaries(M.colorSpace),Se=M.colorSpace===Wi||Ie===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let ne=0;ne<6;ne++)!Ke&&!ae?Te[ne]=y(M.image[ne],!0,r.maxCubemapSize):Te[ne]=ae?M.image[ne].image:M.image[ne],Te[ne]=Fe(M,Te[ne]);let Ne=Te[0],Re=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),tt=v(M.internalFormat,Re,_e,M.colorSpace),qe=M.isVideoTexture!==!0,_t=Q.__version===void 0||ee===!0,B=re.dataReady,Me=N(M,Ne);ge(n.TEXTURE_CUBE_MAP,M);let K;if(Ke){qe&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,tt,Ne.width,Ne.height);for(let ne=0;ne<6;ne++){K=Te[ne].mipmaps;for(let be=0;be<K.length;be++){let we=K[be];M.format!==xn?Re!==null?qe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,tt,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,0,0,we.width,we.height,Re,_e,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be,tt,we.width,we.height,0,Re,_e,we.data)}}}else{if(K=M.mipmaps,qe&&_t){K.length>0&&Me++;let ne=De(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,tt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){qe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te[ne].width,Te[ne].height,Re,_e,Te[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,Te[ne].width,Te[ne].height,0,Re,_e,Te[ne].data);for(let be=0;be<K.length;be++){let je=K[be].image[ne].image;qe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,je.width,je.height,Re,_e,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,tt,je.width,je.height,0,Re,_e,je.data)}}else{qe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,_e,Te[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,Re,_e,Te[ne]);for(let be=0;be<K.length;be++){let we=K[be];qe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,0,0,Re,_e,we.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,be+1,tt,Re,_e,we.image[ne])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Q.__version=re.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function xe(D,M,W,ee,re,Q){let Ie=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),Se=v(W.internalFormat,Ie,fe,W.colorSpace),Ke=i.get(M),ae=i.get(W);if(ae.__renderTarget=M,!Ke.__hasExternalTextures){let Te=Math.max(1,M.width>>Q),Ne=Math.max(1,M.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,Se,Te,Ne,M.depth,0,Ie,fe,null):t.texImage2D(re,Q,Se,Te,Ne,0,Ie,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ve(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,re,ae.__webglTexture,0,ye(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,re,ae.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(D,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,D),M.depthBuffer){let ee=M.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,Q=x(M.stencilBuffer,re),Ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ye(M);ve(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Q,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,D)}else{let ee=M.textures;for(let re=0;re<ee.length;re++){let Q=ee[re],Ie=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),Se=v(Q.internalFormat,Ie,fe,Q.colorSpace),Ke=ye(M);W&&ve(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Se,M.width,M.height):ve(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,Se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Se,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let re=ee.__webglTexture,Q=ye(M);if(M.depthTexture.format===zr)ve(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===Wr)ve(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function J(D){let M=i.get(D),W=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let ee=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=ee}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");X(M.__webglFramebuffer,D)}else if(W){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=n.createRenderbuffer(),ce(M.__webglDepthbuffer[ee],D,!1);else{let re=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ce(M.__webglDepthbuffer,D,!1);else{let ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(D,M,W){let ee=i.get(D);M!==void 0&&xe(ee.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&J(D)}function te(D){let M=D.texture,W=i.get(D),ee=i.get(M);D.addEventListener("dispose",I);let re=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Ie=re.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)W.__webglFramebuffer[fe][Se]=n.createFramebuffer()}else W.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let fe=0,Se=re.length;fe<Se;fe++){let Ke=i.get(re[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&ve(D)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){let Se=re[fe];W.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);let Ke=s.convert(Se.format,Se.colorSpace),ae=s.convert(Se.type),Te=v(Se.internalFormat,Ke,ae,Se.colorSpace,D.isXRRenderTarget===!0),Ne=ye(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Te,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ge(n.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)xe(W.__webglFramebuffer[fe][Se],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else xe(W.__webglFramebuffer[fe],D,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let fe=0,Se=re.length;fe<Se;fe++){let Ke=re[fe],ae=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ge(n.TEXTURE_2D,Ke),xe(W.__webglFramebuffer,D,Ke,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),ge(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)xe(W.__webglFramebuffer[Se],D,M,n.COLOR_ATTACHMENT0,fe,Se);else xe(W.__webglFramebuffer,D,M,n.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),t.unbindTexture()}D.depthBuffer&&J(D)}function he(D){let M=D.textures;for(let W=0,ee=M.length;W<ee;W++){let re=M[W];if(m(re)){let Q=S(D),Ie=i.get(re).__webglTexture;t.bindTexture(Q,Ie),p(Q),t.unbindTexture()}}}let le=[],A=[];function Le(D){if(D.samples>0){if(ve(D)===!1){let M=D.textures,W=D.width,ee=D.height,re=n.COLOR_BUFFER_BIT,Q=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(D),fe=M.length>1;if(fe)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);let Ke=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,W,ee,0,0,W,ee,re,n.NEAREST),c===!0&&(le.length=0,A.length=0,le.push(n.COLOR_ATTACHMENT0+Se),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(Q),A.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);let Ke=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let M=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ye(D){return Math.min(r.maxSamples,D.samples)}function ve(D){let M=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(D){let M=o.render.frame;u.get(D)!==M&&(u.set(D,M),D.update())}function Fe(D,M){let W=D.colorSpace,ee=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Li&&W!==Wi&&(We.getTransfer(W)===pt?(ee!==xn||re!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=b,this.rebindTextures=k,this.setupRenderTarget=te,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ve}function xP(n,e){function t(i,r=Wi){let s,o=We.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tp)return n.BYTE;if(i===Cp)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===au)return n.INT;if(i===vr)return n.UNSIGNED_INT;if(i===tn)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===Ap)return n.ALPHA;if(i===Ip)return n.RGB;if(i===xn)return n.RGBA;if(i===Rp)return n.LUMINANCE;if(i===Pp)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===Np)return n.RED;if(i===uu)return n.RED_INTEGER;if(i===Lp)return n.RG;if(i===du)return n.RG_INTEGER;if(i===hu)return n.RGBA_INTEGER;if(i===ka||i===Ua||i===Ba||i===Va)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fu||i===pu||i===mu||i===gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yu||i===vu||i===_u)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yu||i===vu)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_u)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xu||i===Mu||i===Eu||i===wu||i===bu||i===Su||i===Tu||i===Cu||i===Du||i===Au||i===Iu||i===Ru||i===Pu||i===Nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Su)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Du)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Au)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Iu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ru)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===Lu||i===Fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===za)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fp||i===Ou||i===ku||i===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function bP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,ss.copy(x),ss.x*=-1,ss.y*=-1,ss.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(wP.makeRotationFromEuler(ss)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let x=v.program;i.uniformBlockBinding(S,x)}function l(S,v){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));let N=v.program;i.updateUBOMapping(S,N);let P=e.render.frame;s[S.id]!==P&&(h(S),s[S.id]=P)}function u(S){let v=d();S.__bindingPointIndex=v;let x=n.createBuffer(),N=S.__size,P=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,N,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let v=r[S.id],x=S.uniforms,N=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let P=0,I=x.length;P<I;P++){let C=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,_=C.length;E<_;E++){let T=C[E];if(f(T,P,E,N)===!0){let O=T.__offset,L=Array.isArray(T.value)?T.value:[T.value],G=0;for(let j=0;j<L.length;j++){let U=L[j],H=y(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,O+G,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,G),G+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,v,x,N){let P=S.value,I=v+"_"+x;if(N[I]===void 0)return typeof P=="number"||typeof P=="boolean"?N[I]=P:N[I]=P.clone(),!0;{let C=N[I];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return N[I]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function g(S){let v=S.uniforms,x=0,N=16;for(let I=0,C=v.length;I<C;I++){let E=Array.isArray(v[I])?v[I]:[v[I]];for(let _=0,T=E.length;_<T;_++){let O=E[_],L=Array.isArray(O.value)?O.value:[O.value];for(let G=0,j=L.length;G<j;G++){let U=L[G],H=y(U),b=x%N,R=b%H.boundary,Y=b+R;x+=R,Y!==0&&N-Y<H.storage&&(x+=N-Y),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=H.storage}}}let P=x%N;return P>0&&(x+=N-P),S.__size=x,S.__cache={},this}function y(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var eA,tA,nA,iA,rA,sA,oA,aA,cA,lA,uA,dA,hA,fA,pA,mA,gA,yA,vA,_A,xA,MA,EA,wA,bA,SA,TA,CA,DA,AA,IA,RA,PA,NA,LA,FA,OA,kA,UA,BA,VA,zA,HA,GA,WA,jA,$A,qA,XA,YA,ZA,KA,JA,QA,eI,tI,nI,iI,rI,sI,oI,aI,cI,lI,uI,dI,hI,fI,pI,mI,gI,yI,vI,_I,xI,MI,EI,wI,bI,SI,TI,CI,DI,AI,II,RI,PI,NI,LI,FI,OI,kI,UI,BI,VI,zI,HI,GI,WI,jI,$I,qI,XI,YI,ZI,KI,JI,QI,e1,t1,n1,i1,r1,s1,o1,a1,c1,l1,u1,d1,h1,f1,p1,m1,g1,y1,v1,_1,x1,M1,E1,w1,b1,S1,T1,C1,D1,A1,I1,R1,P1,Ye,me,yi,Vu,rs,N1,oo,Tx,as,jp,Cx,$p,qp,Xp,Yp,os,so,Dx,Gu,Zx,Px,Kx,Jx,Qx,Nx,Lx,Fx,Ox,kx,Kp,Jp,Qp,Zp,ao,OR,kR,Vx,Hu,$R,qR,YR,iP,tm,nm,uP,pP,mP,yP,MP,EP,im,rm,ss,wP,Wu,$i=pe(()=>{"use strict";Wp();Wp();eA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_A=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IA="gl_FragColor = linearToOutputTexel( gl_FragColor );",RA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$A=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nI=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iI=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_I=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,II=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,OI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$I=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:eA,alphahash_pars_fragment:tA,alphamap_fragment:nA,alphamap_pars_fragment:iA,alphatest_fragment:rA,alphatest_pars_fragment:sA,aomap_fragment:oA,aomap_pars_fragment:aA,batching_pars_vertex:cA,batching_vertex:lA,begin_vertex:uA,beginnormal_vertex:dA,bsdfs:hA,iridescence_fragment:fA,bumpmap_pars_fragment:pA,clipping_planes_fragment:mA,clipping_planes_pars_fragment:gA,clipping_planes_pars_vertex:yA,clipping_planes_vertex:vA,color_fragment:_A,color_pars_fragment:xA,color_pars_vertex:MA,color_vertex:EA,common:wA,cube_uv_reflection_fragment:bA,defaultnormal_vertex:SA,displacementmap_pars_vertex:TA,displacementmap_vertex:CA,emissivemap_fragment:DA,emissivemap_pars_fragment:AA,colorspace_fragment:IA,colorspace_pars_fragment:RA,envmap_fragment:PA,envmap_common_pars_fragment:NA,envmap_pars_fragment:LA,envmap_pars_vertex:FA,envmap_physical_pars_fragment:$A,envmap_vertex:OA,fog_vertex:kA,fog_pars_vertex:UA,fog_fragment:BA,fog_pars_fragment:VA,gradientmap_pars_fragment:zA,lightmap_pars_fragment:HA,lights_lambert_fragment:GA,lights_lambert_pars_fragment:WA,lights_pars_begin:jA,lights_toon_fragment:qA,lights_toon_pars_fragment:XA,lights_phong_fragment:YA,lights_phong_pars_fragment:ZA,lights_physical_fragment:KA,lights_physical_pars_fragment:JA,lights_fragment_begin:QA,lights_fragment_maps:eI,lights_fragment_end:tI,logdepthbuf_fragment:nI,logdepthbuf_pars_fragment:iI,logdepthbuf_pars_vertex:rI,logdepthbuf_vertex:sI,map_fragment:oI,map_pars_fragment:aI,map_particle_fragment:cI,map_particle_pars_fragment:lI,metalnessmap_fragment:uI,metalnessmap_pars_fragment:dI,morphinstance_vertex:hI,morphcolor_vertex:fI,morphnormal_vertex:pI,morphtarget_pars_vertex:mI,morphtarget_vertex:gI,normal_fragment_begin:yI,normal_fragment_maps:vI,normal_pars_fragment:_I,normal_pars_vertex:xI,normal_vertex:MI,normalmap_pars_fragment:EI,clearcoat_normal_fragment_begin:wI,clearcoat_normal_fragment_maps:bI,clearcoat_pars_fragment:SI,iridescence_pars_fragment:TI,opaque_fragment:CI,packing:DI,premultiplied_alpha_fragment:AI,project_vertex:II,dithering_fragment:RI,dithering_pars_fragment:PI,roughnessmap_fragment:NI,roughnessmap_pars_fragment:LI,shadowmap_pars_fragment:FI,shadowmap_pars_vertex:OI,shadowmap_vertex:kI,shadowmask_pars_fragment:UI,skinbase_vertex:BI,skinning_pars_vertex:VI,skinning_vertex:zI,skinnormal_vertex:HI,specularmap_fragment:GI,specularmap_pars_fragment:WI,tonemapping_fragment:jI,tonemapping_pars_fragment:$I,transmission_fragment:qI,transmission_pars_fragment:XI,uv_pars_fragment:YI,uv_pars_vertex:ZI,uv_vertex:KI,worldpos_vertex:JI,background_vert:QI,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:o1,distanceRGBA_vert:a1,distanceRGBA_frag:c1,equirect_vert:l1,equirect_frag:u1,linedashed_vert:d1,linedashed_frag:h1,meshbasic_vert:f1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:y1,meshmatcap_frag:v1,meshnormal_vert:_1,meshnormal_frag:x1,meshphong_vert:M1,meshphong_frag:E1,meshphysical_vert:w1,meshphysical_frag:b1,meshtoon_vert:S1,meshtoon_frag:T1,points_vert:C1,points_frag:D1,shadow_vert:A1,shadow_frag:I1,sprite_vert:R1,sprite_frag:P1},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},yi={basic:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Zt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Zt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Zt([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Zt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Zt([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Zt([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Zt([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Zt([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:Zt([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};Vu={r:0,b:0,g:0},rs=new Gt,N1=new Pe;oo=4,Tx=[.125,.215,.35,.446,.526,.582],as=20,jp=new Aa,Cx=new ke,$p=null,qp=0,Xp=0,Yp=!1,os=(1+Math.sqrt(5))/2,so=1/os,Dx=[new F(-os,so,0),new F(os,so,0),new F(-so,0,os),new F(so,0,os),new F(0,os,-so),new F(0,os,so),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Gu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){$p=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Xp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($p,qp,Xp),this._renderer.xr.enabled=Yp,e.scissorTest=!1,zu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$p=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Xp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:$n,format:xn,colorSpace:Li,depthBuffer:!1},r=Ax(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ax(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V1(s)),this._blurMaterial=z1(s,e,t)}return r}_compileMaterial(e){let t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,jp)}_sceneToCubeUV(e,t,i,r){let a=new It(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Cx),u.toneMapping=Hi,u.autoClear=!1;let f=new sa({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Qt(new Zs,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(Cx),y=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;zu(r,S*v,p>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ix());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;zu(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,jp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dx[(r-s-1)%Dx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Qt(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*as-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],S=0;for(let I=0;I<as;++I){let C=I/y,E=Math.exp(-C*C/2);p.push(E),I===0?S+=E:I<m&&(S+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let x=this._sizeLods[r],N=3*x*(r>v-oo?r-v+oo:0),P=4*(this._cubeSize-x);zu(t,N,P,3*x,2*x),c.setRenderTarget(t),c.render(d,jp)}};Zx=new Dn,Px=new pa(1,1),Kx=new ia,Jx=new kl,Qx=new ca,Nx=[],Lx=[],Fx=new Float32Array(16),Ox=new Float32Array(9),kx=new Float32Array(4);Kp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pR(t.type)}},Jp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LR(t.type)}},Qp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Zp=/(\w+)(\])?(\[|\.)?/g;ao=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);FR(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};OR=37297,kR=0;Vx=new Ge;Hu=new F;$R=/^[ \t]*#include +<([\w\d./]+)>/gm;qR=new Map;YR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;iP=0,tm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new nm(e),t.set(e,i)),i}},nm=class{constructor(e){this.id=iP++,this.code=e,this.usedTimes=0}};uP=0;pP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;yP={[Jl]:Ql,[eu]:iu,[tu]:ru,[Gr]:nu,[Ql]:Jl,[iu]:eu,[ru]:tu,[nu]:Gr};MP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,im=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Dn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jn({vertexShader:MP,fragmentShader:EP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rm=class extends di{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,y=new im,m=t.getContextAttributes(),p=null,S=null,v=[],x=[],N=new Be,P=null,I=new It;I.viewport=new Xe;let C=new It;C.viewport=new Xe;let E=[I,C],_=new Zl,T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=v[Z];return se===void 0&&(se=new Ks,v[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=v[Z];return se===void 0&&(se=new Ks,v[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=v[Z];return se===void 0&&(se=new Ks,v[Z]=se),se.getHandSpace()};function L(Z){let se=x.indexOf(Z.inputSource);if(se===-1)return;let xe=v[se];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,l||o),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<v.length;Z++){let se=x[Z];se!==null&&(x[Z]=null,v[Z].disconnect(se))}T=null,O=null,y.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,S=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Z){return gt(this,null,function*(){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",G),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),P=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ce=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?Wr:zr,ce=m.stencil?ts:vr);let J={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(J),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new hi(h.textureWidth,h.textureHeight,{format:xn,type:gi,depthTexture:new pa(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hi(f.framebufferWidth,f.framebufferHeight,{format:xn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(Z){for(let se=0;se<Z.removed.length;se++){let xe=Z.removed[se],ce=x.indexOf(xe);ce>=0&&(x[ce]=null,v[ce].disconnect(xe))}for(let se=0;se<Z.added.length;se++){let xe=Z.added[se],ce=x.indexOf(xe);if(ce===-1){for(let J=0;J<v.length;J++)if(J>=x.length){x.push(xe),ce=J;break}else if(x[J]===null){x[J]=xe,ce=J;break}if(ce===-1)break}let X=v[ce];X&&X.connect(xe)}}let U=new F,H=new F;function b(Z,se,xe){U.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(xe.matrixWorld);let ce=U.distanceTo(H),X=se.projectionMatrix.elements,J=xe.projectionMatrix.elements,k=X[14]/(X[10]-1),te=X[14]/(X[10]+1),he=(X[9]+1)/X[5],le=(X[9]-1)/X[5],A=(X[8]-1)/X[0],Le=(J[8]+1)/J[0],ye=k*A,ve=k*Le,ue=ce/(-A+Le),Fe=ue*-A;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Fe),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),X[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let De=k+ue,D=te+ue,M=ye-Fe,W=ve+(ce-Fe),ee=he*te/D*De,re=le*te/D*De;Z.projectionMatrix.makePerspective(M,W,ee,re,De,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function R(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let se=Z.near,xe=Z.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),_.near=C.near=I.near=se,_.far=C.far=I.far=xe,(T!==_.near||O!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,O=_.far),I.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,_.layers.mask=I.layers.mask|C.layers.mask;let ce=Z.parent,X=_.cameras;R(_,ce);for(let J=0;J<X.length;J++)R(X[J],ce);X.length===2?b(_,I,C):_.projectionMatrix.copy(I.projectionMatrix),Y(Z,_,ce)};function Y(Z,se,xe){xe===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=jr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ie=null;function ge(Z,se){if(u=se.getViewerPose(l||o),g=se,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ce=!1;xe.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let k=0;k<xe.length;k++){let te=xe[k],he=null;if(f!==null)he=f.getViewport(te);else{let A=d.getViewSubImage(h,te);he=A.viewport,k===0&&(e.setRenderTargetTextures(S,A.colorTexture,h.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(S))}let le=E[k];le===void 0&&(le=new It,le.layers.enable(k),le.viewport=new Xe,E[k]=le),le.matrix.fromArray(te.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(te.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(he.x,he.y,he.width,he.height),k===0&&(_.matrix.copy(le.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(le)}let X=r.enabledFeatures;if(X&&X.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let k=d.getDepthInformation(xe[0]);k&&k.isValid&&k.texture&&y.init(e,k,r.renderState)}}for(let xe=0;xe<v.length;xe++){let ce=x[xe],X=v[xe];ce!==null&&X!==void 0&&X.update(ce,se,l||o)}ie&&ie(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let de=new Yx;de.setAnimationLoop(ge),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},ss=new Gt,wP=new Pe;Wu=class{constructor(e={}){let{canvas:t=mx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=Hi,this.toneMappingExposure=1;let x=this,N=!1,P=0,I=0,C=null,E=-1,_=null,T=new Xe,O=new Xe,L=null,G=new ke(0),j=0,U=t.width,H=t.height,b=1,R=null,Y=null,ie=new Xe(0,0,U,H),ge=new Xe(0,0,U,H),de=!1,Z=new Js,se=!1,xe=!1;this.transmissionResolutionScale=1;let ce=new Pe,X=new Pe,J=new F,k=new Xe,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function le(){return C===null?b:1}let A=i;function Le(w,V){return t.getContext(w,V)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",we,!1),A===null){let V="webgl2";if(A=Le(V,w),A===null)throw Le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,ve,ue,Fe,De,D,M,W,ee,re,Q,Ie,fe,Se,Ke,ae,Te,Ne,Re,_e,tt,qe,_t,B;function Me(){ye=new G1(A),ye.init(),qe=new xP(A,ye),ve=new k1(A,ye,e,qe),ue=new vP(A,ye),ve.reverseDepthBuffer&&h&&ue.buffers.depth.setReversed(!0),Fe=new $1(A),De=new sP,D=new _P(A,ye,ue,De,ve,qe,Fe),M=new B1(x),W=new H1(x),ee=new QD(A),_t=new F1(A,ee),re=new W1(A,ee,Fe,_t),Q=new X1(A,re,ee,Fe),Re=new q1(A,ve,D),ae=new U1(De),Ie=new rP(x,M,W,ye,ve,_t,ae),fe=new bP(x,De),Se=new aP,Ke=new fP(ye),Ne=new L1(x,M,W,ue,Q,f,c),Te=new gP(x,Q,ve),B=new SP(A,Fe,ve,ue),_e=new O1(A,ye,Fe),tt=new j1(A,ye,Fe),Fe.programs=Ie.programs,x.capabilities=ve,x.extensions=ye,x.properties=De,x.renderLists=Se,x.shadowMap=Te,x.state=ue,x.info=Fe}Me();let K=new rm(x,A);this.xr=K,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(w){w!==void 0&&(b=w,this.setSize(U,H,!1))},this.getSize=function(w){return w.set(U,H)},this.setSize=function(w,V,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,H=V,t.width=Math.floor(w*b),t.height=Math.floor(V*b),$===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(U*b,H*b).floor()},this.setDrawingBufferSize=function(w,V,$){U=w,H=V,b=$,t.width=Math.floor(w*$),t.height=Math.floor(V*$),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,V,$,q){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,V,$,q),ue.viewport(T.copy(ie).multiplyScalar(b).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,V,$,q){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,V,$,q),ue.scissor(O.copy(ge).multiplyScalar(b).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){ue.setScissorTest(de=w)},this.setOpaqueSort=function(w){R=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(w=!0,V=!0,$=!0){let q=0;if(w){let z=!1;if(C!==null){let oe=C.texture.format;z=oe===hu||oe===du||oe===uu}if(z){let oe=C.texture.type,Ee=oe===gi||oe===vr||oe===io||oe===ts||oe===cu||oe===lu,Ce=Ne.getClearColor(),Ae=Ne.getClearAlpha(),ze=Ce.r,He=Ce.g,Oe=Ce.b;Ee?(g[0]=ze,g[1]=He,g[2]=Oe,g[3]=Ae,A.clearBufferuiv(A.COLOR,0,g)):(y[0]=ze,y[1]=He,y[2]=Oe,y[3]=Ae,A.clearBufferiv(A.COLOR,0,y))}else q|=A.COLOR_BUFFER_BIT}V&&(q|=A.DEPTH_BUFFER_BIT),$&&(q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ne.dispose(),Se.dispose(),Ke.dispose(),De.dispose(),M.dispose(),W.dispose(),Q.dispose(),_t.dispose(),B.dispose(),Ie.dispose(),K.dispose(),K.removeEventListener("sessionstart",Rm),K.removeEventListener("sessionend",Pm),xr.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let w=Fe.autoReset,V=Te.enabled,$=Te.autoUpdate,q=Te.needsUpdate,z=Te.type;Me(),Fe.autoReset=w,Te.enabled=V,Te.autoUpdate=$,Te.needsUpdate=q,Te.type=z}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){let V=w.target;V.removeEventListener("dispose",je),bt(V)}function bt(w){qt(w),De.remove(w)}function qt(w){let V=De.get(w).programs;V!==void 0&&(V.forEach(function($){Ie.releaseProgram($)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,$,q,z,oe){V===null&&(V=te);let Ee=z.isMesh&&z.matrixWorld.determinant()<0,Ce=eE(w,V,$,q,z);ue.setMaterial(q,Ee);let Ae=$.index,ze=1;if(q.wireframe===!0){if(Ae=re.getWireframeAttribute($),Ae===void 0)return;ze=2}let He=$.drawRange,Oe=$.attributes.position,it=He.start*ze,ct=(He.start+He.count)*ze;oe!==null&&(it=Math.max(it,oe.start*ze),ct=Math.min(ct,(oe.start+oe.count)*ze)),Ae!==null?(it=Math.max(it,0),ct=Math.min(ct,Ae.count)):Oe!=null&&(it=Math.max(it,0),ct=Math.min(ct,Oe.count));let Dt=ct-it;if(Dt<0||Dt===1/0)return;_t.setup(z,q,Ce,$,Ae);let St,rt=_e;if(Ae!==null&&(St=ee.get(Ae),rt=tt,rt.setIndex(St)),z.isMesh)q.wireframe===!0?(ue.setLineWidth(q.wireframeLinewidth*le()),rt.setMode(A.LINES)):rt.setMode(A.TRIANGLES);else if(z.isLine){let Ue=q.linewidth;Ue===void 0&&(Ue=1),ue.setLineWidth(Ue*le()),z.isLineSegments?rt.setMode(A.LINES):z.isLineLoop?rt.setMode(A.LINE_LOOP):rt.setMode(A.LINE_STRIP)}else z.isPoints?rt.setMode(A.POINTS):z.isSprite&&rt.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ue=z._multiDrawStarts,Wt=z._multiDrawCounts,lt=z._multiDrawCount,Nn=Ae?ee.get(Ae).bytesPerElement:1,cs=De.get(q).currentProgram.getUniforms();for(let un=0;un<lt;un++)cs.setValue(A,"_gl_DrawID",un),rt.render(Ue[un]/Nn,Wt[un])}else if(z.isInstancedMesh)rt.renderInstances(it,Dt,z.count);else if($.isInstancedBufferGeometry){let Ue=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wt=Math.min($.instanceCount,Ue);rt.renderInstances(it,Dt,Wt)}else rt.render(it,Dt)};function dt(w,V,$){w.transparent===!0&&w.side===mi&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Ka(w,V,$),w.side=Ni,w.needsUpdate=!0,Ka(w,V,$),w.side=mi):Ka(w,V,$)}this.compile=function(w,V,$=null){$===null&&($=w),p=Ke.get($),p.init(V),v.push(p),$.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==$&&w.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let q=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let oe=z.material;if(oe)if(Array.isArray(oe))for(let Ee=0;Ee<oe.length;Ee++){let Ce=oe[Ee];dt(Ce,$,z),q.add(Ce)}else dt(oe,$,z),q.add(oe)}),v.pop(),p=null,q},this.compileAsync=function(w,V,$=null){let q=this.compile(w,V,$);return new Promise(z=>{function oe(){if(q.forEach(function(Ee){De.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){z(w);return}setTimeout(oe,10)}ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Pn=null;function _i(w){Pn&&Pn(w)}function Rm(){xr.stop()}function Pm(){xr.start()}let xr=new Yx;xr.setAnimationLoop(_i),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(w){Pn=w,K.setAnimationLoop(w),w===null?xr.stop():xr.start()},K.addEventListener("sessionstart",Rm),K.addEventListener("sessionend",Pm),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(V),V=K.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,V,C),p=Ke.get(w,v.length),p.init(V),v.push(p),X.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(X),xe=this.localClippingEnabled,se=ae.init(this.clippingPlanes,xe),m=Se.get(w,S.length),m.init(),S.push(m),K.enabled===!0&&K.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&sd(oe,V,-1/0,x.sortObjects)}sd(w,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(R,Y),he=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,he&&Ne.addToRenderList(m,w),this.info.render.frame++,se===!0&&ae.beginShadows();let $=p.state.shadowsArray;Te.render($,w,V),se===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(p.setupLights(),V.isArrayCamera){let oe=V.cameras;if(z.length>0)for(let Ee=0,Ce=oe.length;Ee<Ce;Ee++){let Ae=oe[Ee];Lm(q,z,w,Ae)}he&&Ne.render(w);for(let Ee=0,Ce=oe.length;Ee<Ce;Ee++){let Ae=oe[Ee];Nm(m,w,Ae,Ae.viewport)}}else z.length>0&&Lm(q,z,w,V),he&&Ne.render(w),Nm(m,w,V);C!==null&&I===0&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,V),_t.resetDefaultState(),E=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],se===!0&&ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function sd(w,V,$,q){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){q&&k.setFromMatrixPosition(w.matrixWorld).applyMatrix4(X);let Ee=Q.update(w),Ce=w.material;Ce.visible&&m.push(w,Ee,Ce,$,k.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){let Ee=Q.update(w),Ce=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),k.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),k.copy(Ee.boundingSphere.center)),k.applyMatrix4(w.matrixWorld).applyMatrix4(X)),Array.isArray(Ce)){let Ae=Ee.groups;for(let ze=0,He=Ae.length;ze<He;ze++){let Oe=Ae[ze],it=Ce[Oe.materialIndex];it&&it.visible&&m.push(w,Ee,it,$,k.z,Oe)}}else Ce.visible&&m.push(w,Ee,Ce,$,k.z,null)}}let oe=w.children;for(let Ee=0,Ce=oe.length;Ee<Ce;Ee++)sd(oe[Ee],V,$,q)}function Nm(w,V,$,q){let z=w.opaque,oe=w.transmissive,Ee=w.transparent;p.setupLightsView($),se===!0&&ae.setGlobalState(x.clippingPlanes,$),q&&ue.viewport(T.copy(q)),z.length>0&&Za(z,V,$),oe.length>0&&Za(oe,V,$),Ee.length>0&&Za(Ee,V,$),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Lm(w,V,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new hi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?$n:gi,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let oe=p.state.transmissionRenderTarget[q.id],Ee=q.viewport||T;oe.setSize(Ee.z*x.transmissionResolutionScale,Ee.w*x.transmissionResolutionScale);let Ce=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),he&&Ne.render($);let Ae=x.toneMapping;x.toneMapping=Hi;let ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),se===!0&&ae.setGlobalState(x.clippingPlanes,q),Za(w,$,q),D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe),ye.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Oe=0,it=V.length;Oe<it;Oe++){let ct=V[Oe],Dt=ct.object,St=ct.geometry,rt=ct.material,Ue=ct.group;if(rt.side===mi&&Dt.layers.test(q.layers)){let Wt=rt.side;rt.side=en,rt.needsUpdate=!0,Fm(Dt,$,q,St,rt,Ue),rt.side=Wt,rt.needsUpdate=!0,He=!0}}He===!0&&(D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ce),x.setClearColor(G,j),ze!==void 0&&(q.viewport=ze),x.toneMapping=Ae}function Za(w,V,$){let q=V.isScene===!0?V.overrideMaterial:null;for(let z=0,oe=w.length;z<oe;z++){let Ee=w[z],Ce=Ee.object,Ae=Ee.geometry,ze=q===null?Ee.material:q,He=Ee.group;Ce.layers.test($.layers)&&Fm(Ce,V,$,Ae,ze,He)}}function Fm(w,V,$,q,z,oe){w.onBeforeRender(x,V,$,q,z,oe),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,V,$,q,w,oe),z.transparent===!0&&z.side===mi&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,x.renderBufferDirect($,V,q,z,w,oe),z.side=Ni,z.needsUpdate=!0,x.renderBufferDirect($,V,q,z,w,oe),z.side=mi):x.renderBufferDirect($,V,q,z,w,oe),w.onAfterRender(x,V,$,q,z,oe)}function Ka(w,V,$){V.isScene!==!0&&(V=te);let q=De.get(w),z=p.state.lights,oe=p.state.shadowsArray,Ee=z.state.version,Ce=Ie.getParameters(w,z.state,oe,V,$),Ae=Ie.getProgramCacheKey(Ce),ze=q.programs;q.environment=w.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(w.isMeshStandardMaterial?W:M).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",je),ze=new Map,q.programs=ze);let He=ze.get(Ae);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===Ee)return km(w,Ce),He}else Ce.uniforms=Ie.getUniforms(w),w.onBeforeCompile(Ce,x),He=Ie.acquireProgram(Ce,Ae),ze.set(Ae,He),q.uniforms=Ce.uniforms;let Oe=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=ae.uniform),km(w,Ce),q.needsLights=nE(w),q.lightsStateVersion=Ee,q.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function Om(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=ao.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function km(w,V){let $=De.get(w);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function eE(w,V,$,q,z){V.isScene!==!0&&(V=te),D.resetTextureUnits();let oe=V.fog,Ee=q.isMeshStandardMaterial?V.environment:null,Ce=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Li,Ae=(q.isMeshStandardMaterial?W:M).get(q.envMap||Ee),ze=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!$.morphAttributes.position,it=!!$.morphAttributes.normal,ct=!!$.morphAttributes.color,Dt=Hi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Dt=x.toneMapping);let St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rt=St!==void 0?St.length:0,Ue=De.get(q),Wt=p.state.lights;if(se===!0&&(xe===!0||w!==_)){let Kt=w===_&&q.id===E;ae.setState(q,w,Kt)}let lt=!1;q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Wt.state.version||Ue.outputColorSpace!==Ce||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==Ae||q.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ae.numPlanes||Ue.numIntersection!==ae.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==He||Ue.morphTargets!==Oe||Ue.morphNormals!==it||Ue.morphColors!==ct||Ue.toneMapping!==Dt||Ue.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,Ue.__version=q.version);let Nn=Ue.currentProgram;lt===!0&&(Nn=Ka(q,V,z));let cs=!1,un=!1,mo=!1,Mt=Nn.getUniforms(),Mn=Ue.uniforms;if(ue.useProgram(Nn.program)&&(cs=!0,un=!0,mo=!0),q.id!==E&&(E=q.id,un=!0),cs||_!==w){ue.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),yx(ce),vx(ce),Mt.setValue(A,"projectionMatrix",ce)):Mt.setValue(A,"projectionMatrix",w.projectionMatrix),Mt.setValue(A,"viewMatrix",w.matrixWorldInverse);let rn=Mt.map.cameraPosition;rn!==void 0&&rn.setValue(A,J.setFromMatrixPosition(w.matrixWorld)),ve.logarithmicDepthBuffer&&Mt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,un=!0,mo=!0)}if(z.isSkinnedMesh){Mt.setOptional(A,z,"bindMatrix"),Mt.setOptional(A,z,"bindMatrixInverse");let Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Mt.setValue(A,"boneTexture",Kt.boneTexture,D))}z.isBatchedMesh&&(Mt.setOptional(A,z,"batchingTexture"),Mt.setValue(A,"batchingTexture",z._matricesTexture,D),Mt.setOptional(A,z,"batchingIdTexture"),Mt.setValue(A,"batchingIdTexture",z._indirectTexture,D),Mt.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(A,"batchingColorTexture",z._colorsTexture,D));let En=$.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Re.update(z,$,Nn),(un||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,Mt.setValue(A,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Mn.envMap.value=Ae,Mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(Mn.envMapIntensity.value=V.environmentIntensity),un&&(Mt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&tE(Mn,mo),oe&&q.fog===!0&&fe.refreshFogUniforms(Mn,oe),fe.refreshMaterialUniforms(Mn,q,b,H,p.state.transmissionRenderTarget[w.id]),ao.upload(A,Om(Ue),Mn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ao.upload(A,Om(Ue),Mn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(A,"center",z.center),Mt.setValue(A,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(A,"normalMatrix",z.normalMatrix),Mt.setValue(A,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Kt=q.uniformsGroups;for(let rn=0,od=Kt.length;rn<od;rn++){let Mr=Kt[rn];B.update(Mr,Nn),B.bind(Mr,Nn)}}return Nn}function tE(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function nE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,V,$){De.get(w.texture).__webglTexture=V,De.get(w.depthTexture).__webglTexture=$;let q=De.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){let $=De.get(w);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};let iE=A.createFramebuffer();this.setRenderTarget=function(w,V=0,$=0){C=w,P=V,I=$;let q=!0,z=null,oe=!1,Ee=!1;if(w){let Ae=De.get(w);if(Ae.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(A.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)D.setupRenderTarget(w);else if(Ae.__hasExternalTextures)D.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Oe=w.depthTexture;if(Ae.__boundDepthTexture!==Oe){if(Oe!==null&&De.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(w)}}let ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);let He=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[V])?z=He[V][$]:z=He[V],oe=!0):w.samples>0&&D.useMultisampledRTT(w)===!1?z=De.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[$]:z=He,T.copy(w.viewport),O.copy(w.scissor),L=w.scissorTest}else T.copy(ie).multiplyScalar(b).floor(),O.copy(ge).multiplyScalar(b).floor(),L=de;if($!==0&&(z=iE),ue.bindFramebuffer(A.FRAMEBUFFER,z)&&q&&ue.drawBuffers(w,z),ue.viewport(T),ue.scissor(O),ue.setScissorTest(L),oe){let Ae=De.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,$)}else if(Ee){let Ae=De.get(w.texture),ze=V;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ae.__webglTexture,$,ze)}else if(w!==null&&$!==0){let Ae=De.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ae.__webglTexture,$)}E=-1},this.readRenderTargetPixels=function(w,V,$,q,z,oe,Ee){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){ue.bindFramebuffer(A.FRAMEBUFFER,Ce);try{let Ae=w.texture,ze=Ae.format,He=Ae.type;if(!ve.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-q&&$>=0&&$<=w.height-z&&A.readPixels(V,$,q,z,qe.convert(ze),qe.convert(He),oe)}finally{let Ae=C!==null?De.get(C).__webglFramebuffer:null;ue.bindFramebuffer(A.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=function(w,V,$,q,z,oe,Ee){return gt(this,null,function*(){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){let Ae=w.texture,ze=Ae.format,He=Ae.type;if(!ve.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-q&&$>=0&&$<=w.height-z){ue.bindFramebuffer(A.FRAMEBUFFER,Ce);let Oe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.bufferData(A.PIXEL_PACK_BUFFER,oe.byteLength,A.STREAM_READ),A.readPixels(V,$,q,z,qe.convert(ze),qe.convert(He),0);let it=C!==null?De.get(C).__webglFramebuffer:null;ue.bindFramebuffer(A.FRAMEBUFFER,it);let ct=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),yield gx(A,ct,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,oe),A.deleteBuffer(Oe),A.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(w,V=null,$=0){w.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);let q=Math.pow(2,-$),z=Math.floor(w.image.width*q),oe=Math.floor(w.image.height*q),Ee=V!==null?V.x:0,Ce=V!==null?V.y:0;D.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,$,0,0,Ee,Ce,z,oe),ue.unbindTexture()};let rE=A.createFramebuffer(),sE=A.createFramebuffer();this.copyTextureToTexture=function(w,V,$=null,q=null,z=0,oe=null){w.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],V=arguments[2],oe=arguments[3]||0,$=null),oe===null&&(z!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=z,z=0):oe=0);let Ee,Ce,Ae,ze,He,Oe,it,ct,Dt,St=w.isCompressedTexture?w.mipmaps[oe]:w.image;if($!==null)Ee=$.max.x-$.min.x,Ce=$.max.y-$.min.y,Ae=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,He=$.min.y,Oe=$.isBox3?$.min.z:0;else{let En=Math.pow(2,-z);Ee=Math.floor(St.width*En),Ce=Math.floor(St.height*En),w.isDataArrayTexture?Ae=St.depth:w.isData3DTexture?Ae=Math.floor(St.depth*En):Ae=1,ze=0,He=0,Oe=0}q!==null?(it=q.x,ct=q.y,Dt=q.z):(it=0,ct=0,Dt=0);let rt=qe.convert(V.format),Ue=qe.convert(V.type),Wt;V.isData3DTexture?(D.setTexture3D(V,0),Wt=A.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(D.setTexture2DArray(V,0),Wt=A.TEXTURE_2D_ARRAY):(D.setTexture2D(V,0),Wt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);let lt=A.getParameter(A.UNPACK_ROW_LENGTH),Nn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),cs=A.getParameter(A.UNPACK_SKIP_PIXELS),un=A.getParameter(A.UNPACK_SKIP_ROWS),mo=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ze),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe);let Mt=w.isDataArrayTexture||w.isData3DTexture,Mn=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let En=De.get(w),Kt=De.get(V),rn=De.get(En.__renderTarget),od=De.get(Kt.__renderTarget);ue.bindFramebuffer(A.READ_FRAMEBUFFER,rn.__webglFramebuffer),ue.bindFramebuffer(A.DRAW_FRAMEBUFFER,od.__webglFramebuffer);for(let Mr=0;Mr<Ae;Mr++)Mt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(w).__webglTexture,z,Oe+Mr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(V).__webglTexture,oe,Dt+Mr)),A.blitFramebuffer(ze,He,Ee,Ce,it,ct,Ee,Ce,A.DEPTH_BUFFER_BIT,A.NEAREST);ue.bindFramebuffer(A.READ_FRAMEBUFFER,null),ue.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||De.has(w)){let En=De.get(w),Kt=De.get(V);ue.bindFramebuffer(A.READ_FRAMEBUFFER,rE),ue.bindFramebuffer(A.DRAW_FRAMEBUFFER,sE);for(let rn=0;rn<Ae;rn++)Mt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,En.__webglTexture,z,Oe+rn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,En.__webglTexture,z),Mn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Kt.__webglTexture,oe,Dt+rn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Kt.__webglTexture,oe),z!==0?A.blitFramebuffer(ze,He,Ee,Ce,it,ct,Ee,Ce,A.COLOR_BUFFER_BIT,A.NEAREST):Mn?A.copyTexSubImage3D(Wt,oe,it,ct,Dt+rn,ze,He,Ee,Ce):A.copyTexSubImage2D(Wt,oe,it,ct,ze,He,Ee,Ce);ue.bindFramebuffer(A.READ_FRAMEBUFFER,null),ue.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Wt,oe,it,ct,Dt,Ee,Ce,Ae,rt,Ue,St.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(Wt,oe,it,ct,Dt,Ee,Ce,Ae,rt,St.data):A.texSubImage3D(Wt,oe,it,ct,Dt,Ee,Ce,Ae,rt,Ue,St):w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,oe,it,ct,Ee,Ce,rt,Ue,St.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,oe,it,ct,St.width,St.height,rt,St.data):A.texSubImage2D(A.TEXTURE_2D,oe,it,ct,Ee,Ce,rt,Ue,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,lt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Nn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,cs),A.pixelStorei(A.UNPACK_SKIP_ROWS,un),A.pixelStorei(A.UNPACK_SKIP_IMAGES,mo),oe===0&&V.generateMipmaps&&A.generateMipmap(Wt),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,V,$=null,q=null,z=0){return w.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,w=arguments[2],V=arguments[3],z=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,$,q,z)},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&D.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?D.setTextureCube(w,0):w.isData3DTexture?D.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?D.setTexture2DArray(w,0):D.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){P=0,I=0,C=null,ue.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}});function CP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function DP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function AP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nM),this.state=mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function IP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case mr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case mr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(am)}function RP(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function PP(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(am),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nM))}function NP(n){this.enabled!==!1&&this._handleKeyDown(n)}function LP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(am)}function FP(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function OP(n){this.enabled!==!1&&n.preventDefault()}function kP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var eM,am,nM,$u,tM,TP,Ot,ln,mt,om,qu,iM=pe(()=>{"use strict";$i();eM={type:"change"},am={type:"start"},nM={type:"end"},$u=new pr,tM=new Cn,TP=Math.cos(70*Nt.DEG2RAD),Ot=new F,ln=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},om=1e-6,qu=class extends Na{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Tt,this._lastTargetPosition=new F,this._quat=new Tt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new no,this._sphericalDelta=new no,this._scale=1,this._panOffset=new F,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new F,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DP.bind(this),this._onPointerDown=CP.bind(this),this._onPointerUp=AP.bind(this),this._onContextMenu=OP.bind(this),this._onMouseWheel=PP.bind(this),this._onKeyDown=NP.bind(this),this._onTouchStart=LP.bind(this),this._onTouchMove=FP.bind(this),this._onMouseDown=IP.bind(this),this._onMouseMove=RP.bind(this),this._interceptControlDown=kP.bind(this),this._interceptControlUp=UP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eM),this.update(),this.state=mt.NONE}update(e=null){let t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ot.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($u.origin.copy(this.object.position),$u.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($u.direction))<TP?this.object.lookAt(this.target):(tM.setFromNormalAndCoplanarPoint(this.object.up,this.target),$u.intersectPlane(tM,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>om||8*(1-this._lastQuaternion.dot(this.object.quaternion))>om||this._lastTargetPosition.distanceToSquared(this.target)>om?(this.dispatchEvent(eM),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ot.copy(r).sub(this.target);let s=Ot.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var Xu,rM=pe(()=>{"use strict";$i();Xu=class extends Ta{constructor(e){super(e),this.type=$n}parse(e){let o=function(C,E){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(E||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(E||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(E||""))}},u=`
`,d=function(C,E,_){E=E||1024;let O=C.pos,L=-1,G=0,j="",U=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));for(;0>(L=U.indexOf(u))&&G<E&&O<C.byteLength;)j+=U,G+=U.length,O+=128,U+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));return-1<L?(_!==!1&&(C.pos+=G+L+1),j+U.slice(0,L)):!1},h=function(C){let E=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,G={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},j,U;for((C.pos>=C.byteLength||!(j=d(C)))&&o(1,"no header found"),(U=j.match(E))||o(3,"bad initial token"),G.valid|=1,G.programtype=U[1],G.string+=j+`
`;j=d(C),j!==!1;){if(G.string+=j+`
`,j.charAt(0)==="#"){G.comments+=j+`
`;continue}if((U=j.match(_))&&(G.gamma=parseFloat(U[1])),(U=j.match(T))&&(G.exposure=parseFloat(U[1])),(U=j.match(O))&&(G.valid|=2,G.format=U[1]),(U=j.match(L))&&(G.valid|=4,G.height=parseInt(U[1],10),G.width=parseInt(U[2],10)),G.valid&2&&G.valid&4)break}return G.valid&2||o(3,"missing format specifier"),G.valid&4||o(3,"missing image size specifier"),G},f=function(C,E,_){let T=E;if(T<8||T>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);T!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");let O=new Uint8Array(4*E*_);O.length||o(4,"unable to allocate buffer space");let L=0,G=0,j=4*T,U=new Uint8Array(4),H=new Uint8Array(j),b=_;for(;b>0&&G<C.byteLength;){G+4>C.byteLength&&o(1),U[0]=C[G++],U[1]=C[G++],U[2]=C[G++],U[3]=C[G++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=T)&&o(3,"bad rgbe scanline format");let R=0,Y;for(;R<j&&G<C.byteLength;){Y=C[G++];let ge=Y>128;if(ge&&(Y-=128),(Y===0||R+Y>j)&&o(3,"bad scanline data"),ge){let de=C[G++];for(let Z=0;Z<Y;Z++)H[R++]=de}else H.set(C.subarray(G,G+Y),R),R+=Y,G+=Y}let ie=T;for(let ge=0;ge<ie;ge++){let de=0;O[L]=H[ge+de],de+=T,O[L+1]=H[ge+de],de+=T,O[L+2]=H[ge+de],de+=T,O[L+3]=H[ge+de],L+=4}b--}return O},g=function(C,E,_,T){let O=C[E+3],L=Math.pow(2,O-128)/255;_[T+0]=C[E+0]*L,_[T+1]=C[E+1]*L,_[T+2]=C[E+2]*L,_[T+3]=1},y=function(C,E,_,T){let O=C[E+3],L=Math.pow(2,O-128)/255;_[T+0]=ro.toHalfFloat(Math.min(C[E+0]*L,65504)),_[T+1]=ro.toHalfFloat(Math.min(C[E+1]*L,65504)),_[T+2]=ro.toHalfFloat(Math.min(C[E+2]*L,65504)),_[T+3]=ro.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=h(m),S=p.width,v=p.height,x=f(m.subarray(m.pos),S,v),N,P,I;switch(this.type){case tn:I=x.length/4;let C=new Float32Array(I*4);for(let _=0;_<I;_++)g(x,_*4,C,_*4);N=C,P=tn;break;case $n:I=x.length/4;let E=new Uint16Array(I*4);for(let _=0;_<I;_++)y(x,_*4,E,_*4);N=E,P=$n;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:v,data:N,header:p.string,gamma:p.gamma,exposure:p.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(o,a){switch(o.type){case tn:case $n:o.colorSpace=Li,o.minFilter=$t,o.magFilter=$t,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,i,r)}}});function hM(n,e){return XP(n.subarray(ZP(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var An,lo,BP,sM,oM,VP,aM,cM,lM,zP,uM,HP,OB,um,qi,at,Wa,ja,at,at,at,at,dM,at,GP,WP,cm,qn,lm,jP,$P,qP,Xn,XP,YP,ZP,KP,JP,fM=pe(()=>{"use strict";An=Uint8Array,lo=Uint16Array,BP=Int32Array,sM=new An([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),oM=new An([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),VP=new An([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),aM=function(n,e){for(var t=new lo(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new BP(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},cM=aM(sM,2),lM=cM.b,zP=cM.r;lM[28]=258,zP[258]=28;uM=aM(oM,0),HP=uM.b,OB=uM.r,um=new lo(32768);for(at=0;at<32768;++at)qi=(at&43690)>>1|(at&21845)<<1,qi=(qi&52428)>>2|(qi&13107)<<2,qi=(qi&61680)>>4|(qi&3855)<<4,um[at]=((qi&65280)>>8|(qi&255)<<8)>>1;Wa=function(n,e,t){for(var i=n.length,r=0,s=new lo(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new lo(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new lo(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],d=o[n[r]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)a[um[d]>>c]=l}else for(a=new lo(i),r=0;r<i;++r)n[r]&&(a[r]=um[o[n[r]-1]++]>>15-n[r]);return a},ja=new An(288);for(at=0;at<144;++at)ja[at]=8;for(at=144;at<256;++at)ja[at]=9;for(at=256;at<280;++at)ja[at]=7;for(at=280;at<288;++at)ja[at]=8;dM=new An(32);for(at=0;at<32;++at)dM[at]=5;GP=Wa(ja,9,1),WP=Wa(dM,5,1),cm=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},qn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},lm=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},jP=function(n){return(n+7)/8|0},$P=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new An(n.subarray(e,t))},qP=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Xn=function(n,e,t){var i=new Error(e||qP[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Xn),!t)throw i;return i},XP=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new An(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new An(r*3));var l=function(te){var he=t.length;if(te>he){var le=new An(Math.max(he*2,te));le.set(t),t=le}},u=e.f||0,d=e.p||0,h=e.b||0,f=e.l,g=e.d,y=e.m,m=e.n,p=r*8;do{if(!f){u=qn(n,d,1);var S=qn(n,d+1,3);if(d+=3,S)if(S==1)f=GP,g=WP,y=9,m=5;else if(S==2){var P=qn(n,d,31)+257,I=qn(n,d+10,15)+4,C=P+qn(n,d+5,31)+1;d+=14;for(var E=new An(C),_=new An(19),T=0;T<I;++T)_[VP[T]]=qn(n,d+T*3,7);d+=I*3;for(var O=cm(_),L=(1<<O)-1,G=Wa(_,O,1),T=0;T<C;){var j=G[qn(n,d,L)];d+=j&15;var v=j>>4;if(v<16)E[T++]=v;else{var U=0,H=0;for(v==16?(H=3+qn(n,d,3),d+=2,U=E[T-1]):v==17?(H=3+qn(n,d,7),d+=3):v==18&&(H=11+qn(n,d,127),d+=7);H--;)E[T++]=U}}var b=E.subarray(0,P),R=E.subarray(P);y=cm(b),m=cm(R),f=Wa(b,y,1),g=Wa(R,m,1)}else Xn(1);else{var v=jP(d)+4,x=n[v-4]|n[v-3]<<8,N=v+x;if(N>r){c&&Xn(0);break}a&&l(h+x),t.set(n.subarray(v,N),h),e.b=h+=x,e.p=d=N*8,e.f=u;continue}if(d>p){c&&Xn(0);break}}a&&l(h+131072);for(var Y=(1<<y)-1,ie=(1<<m)-1,ge=d;;ge=d){var U=f[lm(n,d)&Y],de=U>>4;if(d+=U&15,d>p){c&&Xn(0);break}if(U||Xn(2),de<256)t[h++]=de;else if(de==256){ge=d,f=null;break}else{var Z=de-254;if(de>264){var T=de-257,se=sM[T];Z=qn(n,d,(1<<se)-1)+lM[T],d+=se}var xe=g[lm(n,d)&ie],ce=xe>>4;xe||Xn(3),d+=xe&15;var R=HP[ce];if(ce>3){var se=oM[ce];R+=lm(n,d)&(1<<se)-1,d+=se}if(d>p){c&&Xn(0);break}a&&l(h+131072);var X=h+Z;if(h<R){var J=s-R,k=Math.min(R,X);for(J+h<0&&Xn(3);h<k;++h)t[h]=i[J+h]}for(;h<X;++h)t[h]=t[h-R]}}e.l=f,e.p=ge,e.b=h,e.f=u,f&&(u=1,e.m=y,e.d=g,e.n=m)}while(!u);return h!=t.length&&o?$P(t,0,h):t.subarray(0,h)},YP=new An(0),ZP=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Xn(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&Xn(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};KP=typeof TextDecoder<"u"&&new TextDecoder,JP=0;try{KP.decode(YP,{stream:!0}),JP=1}catch{}});function pM(n,e,t){let i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function eN(n,e,t,i){let r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[n+1-a],o[a]=i[n+a]-e;let c=0;for(let l=0;l<a;++l){let u=o[l+1],d=s[a-l],h=r[l]/(u+d);r[l]=c+u*h,c=d*h}r[a]=c}return r}function mM(n,e,t,i){let r=pM(n,i,e),s=eN(r,i,n,e),o=new Xe(0,0,0,0);for(let a=0;a<=n;++a){let c=t[r-n+a],l=s[a],u=c.w*l;o.x+=c.x*u,o.y+=c.y*u,o.z+=c.z*u,o.w+=c.w*l}return o}function tN(n,e,t,i,r){let s=[];for(let d=0;d<=t;++d)s[d]=0;let o=[];for(let d=0;d<=i;++d)o[d]=s.slice(0);let a=[];for(let d=0;d<=t;++d)a[d]=s.slice(0);a[0][0]=1;let c=s.slice(0),l=s.slice(0);for(let d=1;d<=t;++d){c[d]=e-r[n+1-d],l[d]=r[n+d]-e;let h=0;for(let f=0;f<d;++f){let g=l[f+1],y=c[d-f];a[d][f]=g+y;let m=a[f][d-1]/a[d][f];a[f][d]=h+g*m,h=y*m}a[d][d]=h}for(let d=0;d<=t;++d)o[0][d]=a[d][t];for(let d=0;d<=t;++d){let h=0,f=1,g=[];for(let y=0;y<=t;++y)g[y]=s.slice(0);g[0][0]=1;for(let y=1;y<=i;++y){let m=0,p=d-y,S=t-y;d>=y&&(g[f][0]=g[h][0]/a[S+1][p],m=g[f][0]*a[p][S]);let v=p>=-1?1:-p,x=d-1<=S?y-1:t-d;for(let P=v;P<=x;++P)g[f][P]=(g[h][P]-g[h][P-1])/a[S+1][p+P],m+=g[f][P]*a[p+P][S];d<=S&&(g[f][y]=-g[h][y-1]/a[S+1][d],m+=g[f][y]*a[d][S]),o[y][d]=m;let N=h;h=f,f=N}}let u=t;for(let d=1;d<=i;++d){for(let h=0;h<=t;++h)o[d][h]*=u;u*=t-d}return o}function nN(n,e,t,i,r){let s=r<n?r:n,o=[],a=pM(n,i,e),c=tN(a,i,n,s,e),l=[];for(let u=0;u<t.length;++u){let d=t[u].clone(),h=d.w;d.x*=h,d.y*=h,d.z*=h,l[u]=d}for(let u=0;u<=s;++u){let d=l[a-n].clone().multiplyScalar(c[u][0]);for(let h=1;h<=n;++h)d.add(l[a-n+h].clone().multiplyScalar(c[u][h]));o[u]=d}for(let u=s+1;u<=r+1;++u)o[u]=new Xe(0,0,0);return o}function iN(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function rN(n){let e=n.length,t=[],i=[];for(let s=0;s<e;++s){let o=n[s];t[s]=new F(o.x,o.y,o.z),i[s]=o.w}let r=[];for(let s=0;s<e;++s){let o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(iN(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function gM(n,e,t,i,r){let s=nN(n,e,t,i,r);return rN(s)}var yM=pe(()=>{"use strict";$i()});var Yu,vM=pe(()=>{"use strict";$i();yM();Yu=class extends ma{constructor(e,t,i,r,s){super();let o=t?t.length-1:0,a=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||o;for(let c=0;c<a;++c){let l=i[c];this.controlPoints[c]=new Xe(l.x,l.y,l.z,l.w)}}getPoint(e,t=new F){let i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=mM(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new F){let i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=gM(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Xe(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}});function oN(n){let e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===MM(n,0,e.length)}function aN(n){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function i(r){let s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function _M(n){let e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function cN(n){return n/46186158e3}function Zu(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);let s=r*i.dataSize,o=s+i.dataSize;return dN(lN,i.buffer,s,o)}function xM(n){let e=new Pe,t=new Pe,i=new Pe,r=new Pe,s=new Pe,o=new Pe,a=new Pe,c=new Pe,l=new Pe,u=new Pe,d=new Pe,h=new Pe,f=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(uo.fromArray(n.translation));let g=$a(0);if(n.preRotation){let T=n.preRotation.map(Nt.degToRad);T.push(g),t.makeRotationFromEuler(dm.fromArray(T))}if(n.rotation){let T=n.rotation.map(Nt.degToRad);T.push(n.eulerOrder||g),i.makeRotationFromEuler(dm.fromArray(T))}if(n.postRotation){let T=n.postRotation.map(Nt.degToRad);T.push(g),r.makeRotationFromEuler(dm.fromArray(T)),r.invert()}n.scale&&s.scale(uo.fromArray(n.scale)),n.scalingOffset&&a.setPosition(uo.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(uo.fromArray(n.scalingPivot)),n.rotationOffset&&c.setPosition(uo.fromArray(n.rotationOffset)),n.rotationPivot&&l.setPosition(uo.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(d.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));let y=t.clone().multiply(i).multiply(r),m=new Pe;m.extractRotation(u);let p=new Pe;p.copyPosition(u);let S=p.clone().invert().multiply(u),v=m.clone().invert().multiply(S),x=s,N=new Pe;if(f===0)N.copy(m).multiply(y).multiply(v).multiply(x);else if(f===1)N.copy(m).multiply(v).multiply(y).multiply(x);else{let O=new Pe().scale(new F().setFromMatrixScale(d)).clone().invert(),L=v.clone().multiply(O);N.copy(m).multiply(y).multiply(L).multiply(x)}let P=l.clone().invert(),I=o.clone().invert(),C=e.clone().multiply(c).multiply(l).multiply(t).multiply(i).multiply(r).multiply(P).multiply(a).multiply(o).multiply(s).multiply(I),E=new Pe().copyPosition(C),_=u.clone().multiply(E);return h.copyPosition(_),C=h.clone().multiply(N),C.premultiply(u.invert()),C}function $a(n){n=n||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function hm(n){return n.split(",").map(function(t){return parseFloat(t)})}function MM(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function uN(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function dN(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}var Ze,Ct,nn,Ku,fm,pm,mm,gm,ym,Ju,Qu,lN,dm,uo,EM=pe(()=>{"use strict";$i();fM();vM();Ku=class extends ji{constructor(e){super(e)}load(e,t,i,r){let s=this,o=s.path===""?Pa.extractUrlBase(e):s.path,a=new eo(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(c,o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e,t){if(oN(e))Ze=new ym().parse(e);else{let r=MM(e);if(!aN(r))throw new Error("THREE.FBXLoader: Unknown format.");if(_M(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+_M(r));Ze=new gm().parse(r)}let i=new Kr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new fm(i,this.manager).parse(Ze)}},fm=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ct=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new pm().parse(r);return this.parseScene(r,s,i),nn}parseConnections(){let e=new Map;return"Connections"in Ze&&Ze.Connections.connections.forEach(function(i){let r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});let a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});let c={ID:r,relationship:o};e.get(s).children.push(c)}),e}parseImages(){let e={},t={};if("Video"in Ze.Objects){let i=Ze.Objects.Video;for(let r in i){let s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){let a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,c=typeof s.Content=="string"&&s.Content!=="";if(a||c){let l=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=l}}}}for(let i in e){let r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){let t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase(),s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{let o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){let t=new Map;if("Texture"in Ze.Objects){let i=Ze.Objects.Texture;for(let r in i){let s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){let i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;let r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?ui:gn,i.wrapT=a===0?ui:gn,"Scaling"in e){let c=e.Scaling.value;i.repeat.x=c[0],i.repeat.y=c[1]}if("Translation"in e){let c=e.Translation.value;i.offset.x=c[0],i.offset.y=c[1]}return i}loadTexture(e,t){let i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),r=e.FileName.split(".").pop().toLowerCase(),s=i.has(r)?this.manager.getHandler(`.${r}`):this.textureLoader;if(!s)return console.warn(`FBXLoader: ${r.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Dn;let o=s.path;o||s.setPath(this.textureLoader.path);let a=Ct.get(e.id).children,c;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(c=t[a[0].ID],(c.indexOf("blob:")===0||c.indexOf("data:")===0)&&s.setPath(void 0));let l=s.load(c);return s.setPath(o),l}parseMaterials(e){let t=new Map;if("Material"in Ze.Objects){let i=Ze.Objects.Material;for(let r in i){let s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){let i=e.id,r=e.attrName,s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ct.has(i))return null;let o=this.parseParameters(e,t,i),a;switch(s.toLowerCase()){case"phong":a=new Yr;break;case"lambert":a=new Ea;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Yr;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,i){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=We.toWorkingColorSpace(new ke().fromArray(e.Diffuse.value),vt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=We.toWorkingColorSpace(new ke().fromArray(e.DiffuseColor.value),vt)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=We.toWorkingColorSpace(new ke().fromArray(e.Emissive.value),vt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=We.toWorkingColorSpace(new ke().fromArray(e.EmissiveColor.value),vt)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=We.toWorkingColorSpace(new ke().fromArray(e.Specular.value),vt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=We.toWorkingColorSpace(new ke().fromArray(e.SpecularColor.value),vt));let s=this;return Ct.get(i).children.forEach(function(o){let a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.colorSpace=vt);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=vt);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=yr,r.envMap.colorSpace=vt);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=vt);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Ze.Objects&&t in Ze.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ct.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in Ze.Objects){let i=Ze.Objects.Deformer;for(let r in i){let s=i[r],o=Ct.get(parseInt(r));if(s.attrType==="Skin"){let a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){let a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let i=[];return e.children.forEach(function(r){let s=t[r.ID];if(s.attrType!=="Cluster")return;let o={ID:r.ID,indices:[],weights:[],transformLink:new Pe().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){let i=[];for(let r=0;r<e.children.length;r++){let s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ct.get(parseInt(s.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){nn=new li;let r=this.parseModels(e.skeletons,t,i),s=Ze.Objects.Model,o=this;r.forEach(function(c){let l=s[c.ID];o.setLookAtProperties(c,l),Ct.get(c.ID).parents.forEach(function(d){let h=r.get(d.ID);h!==void 0&&h.add(c)}),c.parent===null&&nn.add(c)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),nn.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);let l=xM(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});let a=new mm().parse();nn.children.length===1&&nn.children[0].isGroup&&(nn.children[0].animations=a,nn=nn.children[0]),nn.animations=a}parseModels(e,t,i){let r=new Map,s=Ze.Objects.Model;for(let o in s){let a=parseInt(o),c=s[o],l=Ct.get(a),u=this.buildSkeleton(l,e,a,c.attrName);if(!u){switch(c.attrType){case"Camera":u=this.createCamera(l);break;case"Light":u=this.createLight(l);break;case"Mesh":u=this.createMesh(l,t,i);break;case"NurbsCurve":u=this.createCurve(l,t);break;case"LimbNode":case"Root":u=new qr;break;case"Null":default:u=new li;break}u.name=c.attrName?yt.sanitizeNodeName(c.attrName):"",u.userData.originalName=c.attrName,u.ID=a}this.getTransformData(u,c),r.set(a,u)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(o){for(let a in t){let c=t[a];c.rawBones.forEach(function(l,u){if(l.ID===o.ID){let d=s;s=new qr,s.matrixWorld.copy(l.transformLink),s.name=r?yt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,c.bones[u]=s,d!==null&&s.add(d)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){let s=Ze.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new Pt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,c=i.AspectHeight.value);let l=a/c,u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);let d=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new It(u,l,s,o),d!==null&&t.setFocalLength(d);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Pt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new Pt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){let s=Ze.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new Pt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=We.toWorkingColorSpace(new ke().fromArray(i.Color.value),vt));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);let c=1;switch(r){case 0:t=new to(s,o,a,c);break;case 1:t=new Ia(s,o);break;case 2:let l=Math.PI/3;i.InnerAngle!==void 0&&(l=Nt.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=Nt.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new Da(s,o,a,l,u,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new to(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,o=null,a=[];return e.children.forEach(function(c){t.has(c.ID)&&(s=t.get(c.ID)),i.has(c.ID)&&a.push(i.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Yr({name:ji.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(c){c.vertexColors=!0}),s.FBX_Deformer?(r=new ua(s,o),r.normalizeSkinWeights()):r=new Qt(s,o),r}createCurve(e,t){let i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Qs({name:ji.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new fa(i,r)}getTransformData(e,t){let i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=$a(t.RotationOrder.value):i.eulerOrder=$a(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Ct.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){let s=Ze.Objects.Model[r.ID];if("Lcl_Translation"in s){let o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),nn.add(e.target)):e.lookAt(new F().fromArray(o))}}})}bindSkeleton(e,t,i){let r=this.parsePoseNodes();for(let s in e){let o=e[s];Ct.get(parseInt(o.ID)).parents.forEach(function(c){if(t.has(c.ID)){let l=c.ID;Ct.get(l).parents.forEach(function(d){i.has(d.ID)&&i.get(d.ID).bind(new ha(o.bones),r[d.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in Ze.Objects){let t=Ze.Objects.Pose;for(let i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){let r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Pe().fromArray(s.Matrix.a)}):e[r.Node]=new Pe().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Ze){if("AmbientColor"in Ze.GlobalSettings){let e=Ze.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){let s=new ke().setRGB(t,i,r,vt);nn.add(new Ra(s,1))}}"UnitScaleFactor"in Ze.GlobalSettings&&(nn.userData.unitScaleFactor=Ze.GlobalSettings.UnitScaleFactor.value)}}},pm=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in Ze.Objects){let i=Ze.Objects.Geometry;for(let r in i){let s=Ct.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){let r=i.skeletons,s=[],o=e.parents.map(function(d){return Ze.Objects.Model[d.ID]});if(o.length===0)return;let a=e.children.reduce(function(d,h){return r[h.ID]!==void 0&&(d=r[h.ID]),d},null);e.children.forEach(function(d){i.morphTargets[d.ID]!==void 0&&s.push(i.morphTargets[d.ID])});let c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=$a(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);let u=xM(l);return this.genGeometry(t,a,s,u)}genGeometry(e,t,i,r){let s=new vn;e.attrName&&(s.name=e.attrName);let o=this.parseGeoNode(e,t),a=this.genBuffers(o),c=new Ht(a.vertex,3);if(c.applyMatrix4(r),s.setAttribute("position",c),a.colors.length>0&&s.setAttribute("color",new Ht(a.colors,3)),t&&(s.setAttribute("skinIndex",new $r(a.weightsIndices,4)),s.setAttribute("skinWeight",new Ht(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){let l=new Ge().getNormalMatrix(r),u=new Ht(a.normal,3);u.applyNormalMatrix(l),s.setAttribute("normal",u)}if(a.uvs.forEach(function(l,u){let d=u===0?"uv":`uv${u}`;s.setAttribute(d,new Ht(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(d,h){d!==l&&(s.addGroup(u,h-u,l),l=d,u=h)}),s.groups.length>0){let d=s.groups[s.groups.length-1],h=d.start+d.count;h!==a.materialIndex.length&&s.addGroup(h,a.materialIndex.length-h,l)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){let i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},i=0,r=0,s=!1,o=[],a=[],c=[],l=[],u=[],d=[],h=this;return e.vertexIndices.forEach(function(f,g){let y,m=!1;f<0&&(f=f^-1,m=!0);let p=[],S=[];if(o.push(f*3,f*3+1,f*3+2),e.color){let v=Zu(g,i,f,e.color);c.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(v){S.push(v.weight),p.push(v.id)}),S.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);let v=[0,0,0,0],x=[0,0,0,0];S.forEach(function(N,P){let I=N,C=p[P];x.forEach(function(E,_,T){if(I>E){T[_]=I,I=E;let O=v[_];v[_]=C,C=O}})}),p=v,S=x}for(;S.length<4;)S.push(0),p.push(0);for(let v=0;v<4;++v)u.push(S[v]),d.push(p[v])}if(e.normal){let v=Zu(g,i,f,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(y=Zu(g,i,f,e.material)[0],y<0&&(h.negativeMaterialIndices=!0,y=0)),e.uv&&e.uv.forEach(function(v,x){let N=Zu(g,i,f,v);l[x]===void 0&&(l[x]=[]),l[x].push(N[0]),l[x].push(N[1])}),r++,m&&(h.genFace(t,e,o,y,a,c,l,u,d,r),i++,r=0,o=[],a=[],c=[],l=[],u=[],d=[])}),t}getNormalNewell(e){let t=new F(0,0,0);for(let i=0;i<e.length;i++){let r=e[i],s=e[(i+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new F(0,1,0):new F(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,i){return new Be(e.dot(t),e.dot(i))}genFace(e,t,i,r,s,o,a,c,l,u){let d;if(u>3){let h=[],f=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<i.length;p+=3)h.push(new F(f[i[p]],f[i[p+1]],f[i[p+2]]));let{tangent:g,bitangent:y}=this.getNormalTangentAndBitangent(h),m=[];for(let p of h)m.push(this.flattenVertex(p,g,y));d=_a.triangulateShape(m,[])}else d=[[0,1,2]];for(let[h,f,g]of d)e.vertex.push(t.vertexPositions[i[h*3]]),e.vertex.push(t.vertexPositions[i[h*3+1]]),e.vertex.push(t.vertexPositions[i[h*3+2]]),e.vertex.push(t.vertexPositions[i[f*3]]),e.vertex.push(t.vertexPositions[i[f*3+1]]),e.vertex.push(t.vertexPositions[i[f*3+2]]),e.vertex.push(t.vertexPositions[i[g*3]]),e.vertex.push(t.vertexPositions[i[g*3+1]]),e.vertex.push(t.vertexPositions[i[g*3+2]]),t.skeleton&&(e.vertexWeights.push(c[h*4]),e.vertexWeights.push(c[h*4+1]),e.vertexWeights.push(c[h*4+2]),e.vertexWeights.push(c[h*4+3]),e.vertexWeights.push(c[f*4]),e.vertexWeights.push(c[f*4+1]),e.vertexWeights.push(c[f*4+2]),e.vertexWeights.push(c[f*4+3]),e.vertexWeights.push(c[g*4]),e.vertexWeights.push(c[g*4+1]),e.vertexWeights.push(c[g*4+2]),e.vertexWeights.push(c[g*4+3]),e.weightsIndices.push(l[h*4]),e.weightsIndices.push(l[h*4+1]),e.weightsIndices.push(l[h*4+2]),e.weightsIndices.push(l[h*4+3]),e.weightsIndices.push(l[f*4]),e.weightsIndices.push(l[f*4+1]),e.weightsIndices.push(l[f*4+2]),e.weightsIndices.push(l[f*4+3]),e.weightsIndices.push(l[g*4]),e.weightsIndices.push(l[g*4+1]),e.weightsIndices.push(l[g*4+2]),e.weightsIndices.push(l[g*4+3])),t.color&&(e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[g*3]),e.normal.push(s[g*3+1]),e.normal.push(s[g*3+2])),t.uv&&t.uv.forEach(function(y,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][h*2]),e.uvs[m].push(a[m][h*2+1]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){let c=Ze.Objects.Geometry[a.geoID];c!==void 0&&s.genMorphGeometry(e,t,c,r,a.name)})})}genMorphGeometry(e,t,i,r,s){let o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],c=i.Vertices!==void 0?i.Vertices.a:[],l=i.Indexes!==void 0?i.Indexes.a:[],u=e.attributes.position.count*3,d=new Float32Array(u);for(let y=0;y<l.length;y++){let m=l[y]*3;d[m]=c[y*3],d[m+1]=c[y*3+1],d[m+2]=c[y*3+2]}let h={vertexIndices:a,vertexPositions:d,baseVertexPositions:o},f=this.genBuffers(h),g=new Ht(f.vertex,3);g.name=s||i.attrName,g.applyMatrix4(r),e.morphAttributes.position.push(g)}parseNormals(e){let t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a,s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){let t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a,s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){let t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a,s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new ke;o<r.length;o+=4)a.fromArray(r,o),We.toWorkingColorSpace(a,vt),a.toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){let t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};let r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new vn;let i=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let d=0,h=o.length;d<h;d+=4)s.push(new Xe().fromArray(o,d));let a,c;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,c=r.length-1-a;for(let d=0;d<i;++d)s.push(s[d])}let u=new Yu(i,r,s,a,c).getPoints(s.length*12);return new vn().setFromPoints(u)}},mm=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let i in t){let r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Ze.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=Ze.Objects.AnimationCurveNode,t=new Map;for(let i in e){let r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){let t=Ze.Objects.AnimationCurve;for(let i in t){let r={id:t[i].id,times:t[i].KeyTime.a.map(cN),values:t[i].KeyValueFloat.a},s=Ct.get(r.id);if(s!==void 0){let o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){let t=Ze.Objects.AnimationLayer,i=new Map;for(let r in t){let s=[],o=Ct.get(parseInt(r));o!==void 0&&(o.children.forEach(function(c,l){if(e.has(c.ID)){let u=e.get(c.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[l]===void 0){let d=Ct.get(c.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(d!==void 0){let h=Ze.Objects.Model[d.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}let f={modelName:h.attrName?yt.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};nn.traverse(function(g){g.ID===h.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Pe),"PreRotation"in h&&(f.preRotation=h.PreRotation.value),"PostRotation"in h&&(f.postRotation=h.PostRotation.value),s[l]=f}}s[l]&&(s[l][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[l]===void 0){let d=Ct.get(c.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=Ct.get(d).parents[0].ID,f=Ct.get(h).parents[0].ID,g=Ct.get(f).parents[0].ID,y=Ze.Objects.Model[g],m={modelName:y.attrName?yt.sanitizeNodeName(y.attrName):"",morphName:Ze.Objects.Deformer[d].attrName};s[l]=m}s[l][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){let t=Ze.Objects.AnimationStack,i={};for(let r in t){let s=Ct.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let o=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:o}}return i}addClip(e){let t=[],i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new ba(e.name,-1,t)}generateTracks(e){let t=[],i=new F,r=new F;if(e.transform&&e.transform.decompose(i,new Tt,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){let s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){let s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new Vi(e+"."+r,s,o)}generateRotationTrack(e,t,i,r,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let h=this.interpolateRotations(t.x,t.y,t.z,s);o=h[0],a=h[1]}let c=$a(0);i!==void 0&&(i=i.map(Nt.degToRad),i.push(c),i=new Gt().fromArray(i),i=new Tt().setFromEuler(i)),r!==void 0&&(r=r.map(Nt.degToRad),r.push(c),r=new Gt().fromArray(r),r=new Tt().setFromEuler(r).invert());let l=new Tt,u=new Gt,d=[];if(!a||!o)return new fi(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)u.set(a[h],a[h+1],a[h+2],s),l.setFromEuler(u),i!==void 0&&l.premultiply(i),r!==void 0&&l.multiply(r),h>2&&new Tt().fromArray(d,(h-3)/3*4).dot(l)<0&&l.set(-l.x,-l.y,-l.z,-l.w),l.toArray(d,h/3*4);return new fi(e+".quaternion",o,d)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=nn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ui(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){let o=t[s];o!==r&&(t[i]=o,r=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){let r=i,s=[],o=-1,a=-1,c=-1;return e.forEach(function(l){if(t.x&&(o=t.x.times.indexOf(l)),t.y&&(a=t.y.times.indexOf(l)),t.z&&(c=t.z.times.indexOf(l)),o!==-1){let u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){let u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(c!==-1){let u=t.z.values[c];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e,t,i,r){let s=[],o=[];s.push(e.times[0]),o.push(Nt.degToRad(e.values[0])),o.push(Nt.degToRad(t.values[0])),o.push(Nt.degToRad(i.values[0]));for(let a=1;a<e.values.length;a++){let c=[e.values[a-1],t.values[a-1],i.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;let l=c.map(Nt.degToRad),u=[e.values[a],t.values[a],i.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;let d=u.map(Nt.degToRad),h=[u[0]-c[0],u[1]-c[1],u[2]-c[2]],f=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){let y=Math.max(...f)/180,m=new Gt(...l,r),p=new Gt(...d,r),S=new Tt().setFromEuler(m),v=new Tt().setFromEuler(p);S.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);let x=e.times[a-1],N=e.times[a]-x,P=new Tt,I=new Gt;for(let C=0;C<1;C+=1/y)P.copy(S.clone().slerp(v.clone(),C)),s.push(x+C*N),I.setFromQuaternion(P,r),o.push(I.x),o.push(I.y),o.push(I.z)}else s.push(e.times[a]),o.push(Nt.degToRad(e.values[a])),o.push(Nt.degToRad(t.values[a])),o.push(Nt.degToRad(i.values[a]))}return[s,o]}},gm=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Qu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){let o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;let c=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),l=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");c?t.parseNodeBegin(r,c):l?t.parseNodeProperty(r,l,i[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){let i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());let o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){let c=s.split(",").slice(1),l=parseInt(c[0]),u=parseInt(c[1]),d=s.split(",").slice(3);d=d.map(function(h){return h.trim().replace(/^"/,"")}),r="connections",s=[l,u],uN(s,d),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=hm(s))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=hm(t.a))}parseNodeSpecialProperty(e,t,i){let r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],c=r[3],l=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=hm(l);break}this.getPrevNode()[s]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),s)}},ym=class{parse(e){let t=new Ju(e);t.skip(23);let i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);let r=new Qu;for(;!this.endOfContent(t);){let s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let o=e.getUint8(),a=e.getString(o);if(r===0)return null;let c=[];for(let h=0;h<s;h++)c.push(this.parseProperty(e));let l=c.length>0?c[0]:"",u=c.length>1?c[1]:"",d=c.length>2?c[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){let h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,i,h)}return i.propertyList=c,typeof l=="number"&&(i.id=l),u!==""&&(i.attrName=u),d!==""&&(i.attrType=d),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){let r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){let r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1],o=i.propertyList[2],a=i.propertyList[3],c;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?c=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:c=i.propertyList[4],t[r]={type:s,type2:o,flag:a,value:c}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){let t=e.getString(1),i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}let a=hM(new Uint8Array(e.getArrayBuffer(o))),c=new Ju(a.buffer);switch(t){case"b":case"c":return c.getBooleanArray(r);case"d":return c.getFloat64Array(r);case"f":return c.getFloat32Array(r);case"i":return c.getInt32Array(r);case"l":return c.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},Ju=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}},Qu=class{add(e,t){this[e]=t}};lN=[];dm=new Gt,uo=new F});var wM,bM=pe(()=>{"use strict";$i();Sn();wM=(()=>{class n{constructor(){this.loader=new Kr}createTexture(t="granite1_color.png"){return gt(this,null,function*(){let i=yield this.loader.loadAsync(`${window.origin+"/3dpreview/textures/"+t}`);return i.wrapS=ui,i.wrapT=ui,i.flipY=!1,i.premultiplyAlpha=!1,i.needsUpdate=!0,i})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var ed,vm=pe(()=>{"use strict";$i();Sn();bM();ed=(()=>{class n{constructor(t){this.textureService=t,this.mesh=new Ma}changeMaterial(t,i){return gt(this,null,function*(){if(t.children.length)for(let r of t.children){let s=r;s.material=yield this.createMaterial(i)}})}createMaterial(t){return gt(this,null,function*(){let i=this.mesh;return i.map=yield this.textureService.createTexture(t),i.name=t,i.metalness=.8,i.roughness=.5,i})}static{this.\u0275fac=function(i){return new(i||n)(nt(wM))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var TM,CM,DM=pe(()=>{"use strict";EM();Sn();vm();TM=function(n){return n.FBX="fbx",n.GLB="glb",n}(TM||{}),CM=(()=>{class n{constructor(t){this.materialService=t,this.fbxLoader=new Ku}removeModel(t){this.model&&t.remove(this.model)}loadModel(t){return gt(this,null,function*(){switch(t.fName.split(".")[1]){case TM.FBX:return yield this.loadFbx(t);default:throw new Error("\u0424\u0430\u0439\u043B \u0441 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\u043C")}})}loadFbx(s){return gt(this,arguments,function*({base:t,fName:i,scene:r}){let a=yield this.fbxLoader.setPath(t+"/3dpreview/models/").loadAsync(i);a.scale.set(.01,.01,.01),a.name="model",this.model=a;for(let c of a.children){let l=c;l.name="gabro_color.png",l.material=yield this.materialService.createMaterial("granite1_color.jpeg")}return a})}loadGlb(s){return gt(this,arguments,function*({base:t,fName:i,scene:r}){})}static{this.\u0275fac=function(i){return new(i||n)(nt(ed))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var AM,IM=pe(()=>{"use strict";$i();iM();rM();Sn();DM();vm();AM=(()=>{class n{constructor(t,i){this.loadService=t,this.materialService=i,this.scene=new la,this.baseWebGlOptions={antialias:!0,powerPreference:"high-performance",depth:!0,alpha:!0,stencil:!0}}initRenderer(t){let i=t.getContext("webgl2");return i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),new Wu(dn({canvas:t},this.baseWebGlOptions))}initCanvas(t,i){return gt(this,null,function*(){let r=t.nativeElement;this.renderer=this.initRenderer(r),this.renderOptions(),this.sceneCamera(r),this.sceneCameraControl(r),this.sceneLight();let s=yield this.loadService.loadModel({base:window.origin,fName:i,scene:this.scene});this.scene.add(s),this.renderer.render(this.scene,this.camera);let o=()=>{requestAnimationFrame(o),this.renderer?.render(this.scene,this.camera)};o()})}changeMaterial(t){return gt(this,null,function*(){this.scene.children&&(yield this.materialService.changeMaterial(this.scene.children[0],t))})}changeModel(t,i){return gt(this,null,function*(){this.loadService.removeModel(this.scene);let r=yield this.loadService.loadModel({base:window.origin,fName:t,scene:this.scene});if(this.scene.add(r),i)for(let s of this.scene.children[0].children){let o=s;o.material=yield this.materialService.createMaterial(i)}this.renderer.render(this.scene,this.camera)})}sceneResize(){this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}sceneCamera(t){this.camera=new It(45,t.clientWidth/t.clientHeight,.25,20),this.camera.position.set(-1.2,1.44,-1.2)}sceneCameraControl(t){this.cameraControl=new qu(this.camera,t),this.cameraControl.target.set(0,.5,0),this.cameraControl.enableDamping=!1,this.cameraControl.autoRotate=!1,this.cameraControl.enabled=!0,this.cameraControl.maxPolarAngle=1.8,this.cameraControl.update(),this.cameraControl.addEventListener("change",()=>this.renderer.render(this.scene,this.camera))}renderOptions(){this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(new ke(1,1,1))}sceneLight(){new Xu().setPath(`${window.origin+"/3dpreview/textures/equirectangular/"}`).load("venice_sunset_1k.hdr",t=>{t.mapping=yr,this.scene.environment=t})}static{this.\u0275fac=function(i){return new(i||n)(nt(CM),nt(ed))}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});var RM,PM=pe(()=>{"use strict";Sn();RM=(()=>{class n{constructor(){if(this.baseModelUrl="https://rip0.dvkr.xyz/WebAR",this.availabilityCache=new Map,window.location.search.includes("autostart=true")){let t=window.location.pathname.substring(1);t&&this.startAR(t)}}checkFileExists(t){return gt(this,null,function*(){try{return(yield fetch(t,{method:"HEAD",cache:"no-cache"})).ok}catch{return!1}})}checkARAvailability(t){return gt(this,null,function*(){if(!t)return!1;if(this.availabilityCache.has(t))return this.availabilityCache.get(t);try{let[i,r]=yield Promise.all([this.checkFileExists(`${this.baseModelUrl}/usdz/${t}.usdz`),this.checkFileExists(`${this.baseModelUrl}/glb/${t}.glb`)]),s=i||r;return this.availabilityCache.set(t,s),s}catch{return!1}})}startAR(t){let i=/iPad|iPhone|iPod/.test(navigator.userAgent),r=/Android/i.test(navigator.userAgent),s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),o=/Chrome/i.test(navigator.userAgent);if(i&&s){let c=`${this.baseModelUrl}/usdz/${t}.usdz`,l=document.createElement("a");l.setAttribute("rel","ar"),l.href=c,l.click();return}if(r&&o){let c=`${this.baseModelUrl}/glb/${t}.glb`,l=`https://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(c)}&mode=ar_only&title=${encodeURIComponent("3D \u041C\u043E\u0434\u0435\u043B\u044C")}&enable_vertical_placement=true`;window.location.href=l;return}let a=window.location.href;this.showQRCode(a)}showQRCode(t){let i=document.querySelector(".qr-overlay");i&&i.remove();let r=document.createElement("div");r.className="qr-overlay",r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.width="100vw",r.style.height="100vh",r.style.backgroundColor="rgba(0, 0, 0, 0.85)",r.style.display="flex",r.style.flexDirection="column",r.style.justifyContent="center",r.style.alignItems="center",r.style.zIndex="2147483647";let s=document.createElement("div");s.id="qr-code",s.style.background="white",s.style.padding="24px",s.style.borderRadius="4px",s.style.boxShadow="0 10px 25px rgba(0, 0, 0, 0.2)",s.style.position="relative",s.style.zIndex="2147483647",s.style.maxWidth="280px",s.style.width="100%",s.style.textAlign="center";let o=document.createElement("div");o.style.fontFamily="Arial, sans-serif",o.style.fontSize="18px",o.style.fontWeight="bold",o.style.color="#333",o.style.marginBottom="16px",o.style.textAlign="center",o.textContent="\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434",s.appendChild(o);let l=window.qrcode(0,"H");l.addData(t),l.make();let u=document.createElement("div");u.style.display="flex",u.style.justifyContent="center",u.style.alignItems="center",u.style.margin="0 auto";let d=document.createElement("img");d.src=l.createDataURL(10),d.style.display="block",d.style.margin="0 auto",d.style.maxWidth="100%",d.alt="QR-\u043A\u043E\u0434 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 AR",u.appendChild(d),s.appendChild(u),r.appendChild(s);let h=document.createElement("div");h.style.fontFamily="Arial, sans-serif",h.style.fontSize="16px",h.style.color="white",h.style.marginTop="20px",h.style.textAlign="center",h.style.maxWidth="320px",h.style.lineHeight="1.4",h.textContent="\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 AR-\u0440\u0435\u0436\u0438\u043C\u0430",r.appendChild(h);let f=document.createElement("button");f.className="qr-close-button",f.textContent="\u2715",f.style.position="absolute",f.style.top="-15px",f.style.right="-15px",f.style.width="30px",f.style.height="30px",f.style.borderRadius="4px",f.style.background="#fff",f.style.border="none",f.style.boxShadow="0 2px 8px rgba(0,0,0,0.2)",f.style.cursor="pointer",f.style.display="flex",f.style.alignItems="center",f.style.justifyContent="center",f.style.fontSize="16px",f.style.color="#333",f.style.zIndex="2147483647",f.onclick=()=>r.remove(),s.appendChild(f),document.body.appendChild(r)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ft({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})()});function yN(n,e){if(n&1){let t=y_();Jc(0,"button",2),el("click",function(){iv(t);let r=v_();return rv(r.startAR())}),E_(1,"AR"),Qc()}}var gN,NM,LM=pe(()=>{"use strict";il();Sn();IM();PM();il();gN=["canvas"];NM=(()=>{class n{constructor(t,i,r){this.sceneService=t,this.arService=i,this.cdr=r,this.modelname="",this.materialname="",this.isARAvailable=!1,this.checkingAvailability=!1,window.startPreviewAR=()=>this.startAR()}ngOnChanges(t){return gt(this,null,function*(){this.isARAvailable=!1,this.cdr.detectChanges(),t.materialname&&(yield this.sceneService.changeMaterial(this.materialname)),t.modelname&&t.modelname.currentValue!==t.modelname.previousValue&&(yield this.sceneService.changeModel(this.modelname,this.materialname),yield this.checkARAvailability())})}checkARAvailability(){return gt(this,null,function*(){if(!(this.checkingAvailability||!this.modelname))try{this.checkingAvailability=!0,this.isARAvailable=!1,this.cdr.detectChanges();let t=this.modelname.replace(".fbx","");this.isARAvailable=yield this.arService.checkARAvailability(t)}finally{this.checkingAvailability=!1,this.cdr.detectChanges()}})}onResize(){this.sceneService.sceneResize()}ngAfterViewInit(){setTimeout(()=>gt(this,null,function*(){yield this.sceneService.initCanvas(this.canvasEl,this.modelname),this.modelname&&(yield this.checkARAvailability())}),1e3)}ngOnDestroy(){this.isARAvailable=!1}startAR(){if(!this.isARAvailable||!this.modelname)return;let t=this.modelname.replace(".fbx","");this.arService.startAR(t)}static{this.\u0275fac=function(i){return new(i||n)(ir(AM),ir(RM),ir(Ns))}}static{this.\u0275cmp=Oy({type:n,selectors:[["preview-element"]],viewQuery:function(i,r){if(i&1&&__(gN,5),i&2){let s;x_(s=M_())&&(r.canvasEl=s.first)}},hostBindings:function(i,r){i&1&&el("resize",function(o){return r.onResize(o)},!1,Lv)},inputs:{modelname:"modelname",materialname:"materialname"},standalone:!0,features:[qc,w_],decls:3,vars:1,consts:[["canvas",""],["class","ar-button",3,"click",4,"ngIf"],[1,"ar-button",3,"click"]],template:function(i,r){i&1&&(gf(0,yN,2,0,"button",1),vf(1,"canvas",null,0)),i&2&&yf("ngIf",r.isARAvailable)},dependencies:[wf,L_],styles:["[_nghost-%COMP%]{position:relative}canvas[_ngcontent-%COMP%]{max-width:539px;width:100%;max-height:410px}.ar-button[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px}"],changeDetection:0})}}return n})()});function In(n){return(vi.__Zone_symbol_prefix||"__zone_symbol__")+n}function vN(){let n=vi.performance;function e(U){n&&n.mark&&n.mark(U)}function t(U,H){n&&n.measure&&n.measure(U,H)}e("Zone");let i=(()=>{class U{static{this.__symbol__=In}static assertZonePatched(){if(vi.Promise!==_.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let b=U.current;for(;b.parent;)b=b.parent;return b}static get current(){return O.zone}static get currentTask(){return L}static __load_patch(b,R,Y=!1){if(_.hasOwnProperty(b)){let ie=vi[In("forceDuplicateZoneCheck")]===!0;if(!Y&&ie)throw Error("Already loaded patch: "+b)}else if(!vi["__Zone_disable_"+b]){let ie="Zone:"+b;e(ie),_[b]=R(vi,U,T),t(ie,ie)}}get parent(){return this._parent}get name(){return this._name}constructor(b,R){this._parent=b,this._name=R?R.name||"unnamed":"<root>",this._properties=R&&R.properties||{},this._zoneDelegate=new s(this,this._parent&&this._parent._zoneDelegate,R)}get(b){let R=this.getZoneWith(b);if(R)return R._properties[b]}getZoneWith(b){let R=this;for(;R;){if(R._properties.hasOwnProperty(b))return R;R=R._parent}return null}fork(b){if(!b)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,b)}wrap(b,R){if(typeof b!="function")throw new Error("Expecting function got: "+b);let Y=this._zoneDelegate.intercept(this,b,R),ie=this;return function(){return ie.runGuarded(Y,this,arguments,R)}}run(b,R,Y,ie){O={parent:O,zone:this};try{return this._zoneDelegate.invoke(this,b,R,Y,ie)}finally{O=O.parent}}runGuarded(b,R=null,Y,ie){O={parent:O,zone:this};try{try{return this._zoneDelegate.invoke(this,b,R,Y,ie)}catch(ge){if(this._zoneDelegate.handleError(this,ge))throw ge}}finally{O=O.parent}}runTask(b,R,Y){if(b.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(b.zone||m).name+"; Execution: "+this.name+")");let ie=b,{type:ge,data:{isPeriodic:de=!1,isRefreshable:Z=!1}={}}=b;if(b.state===p&&(ge===E||ge===C))return;let se=b.state!=x;se&&ie._transitionTo(x,v);let xe=L;L=ie,O={parent:O,zone:this};try{ge==C&&b.data&&!de&&!Z&&(b.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,ie,R,Y)}catch(ce){if(this._zoneDelegate.handleError(this,ce))throw ce}}finally{let ce=b.state;if(ce!==p&&ce!==P)if(ge==E||de||Z&&ce===S)se&&ie._transitionTo(v,x,S);else{let X=ie._zoneDelegates;this._updateTaskCount(ie,-1),se&&ie._transitionTo(p,x,p),Z&&(ie._zoneDelegates=X)}O=O.parent,L=xe}}scheduleTask(b){if(b.zone&&b.zone!==this){let Y=this;for(;Y;){if(Y===b.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${b.zone.name}`);Y=Y.parent}}b._transitionTo(S,p);let R=[];b._zoneDelegates=R,b._zone=this;try{b=this._zoneDelegate.scheduleTask(this,b)}catch(Y){throw b._transitionTo(P,S,p),this._zoneDelegate.handleError(this,Y),Y}return b._zoneDelegates===R&&this._updateTaskCount(b,1),b.state==S&&b._transitionTo(v,S),b}scheduleMicroTask(b,R,Y,ie){return this.scheduleTask(new o(I,b,R,Y,ie,void 0))}scheduleMacroTask(b,R,Y,ie,ge){return this.scheduleTask(new o(C,b,R,Y,ie,ge))}scheduleEventTask(b,R,Y,ie,ge){return this.scheduleTask(new o(E,b,R,Y,ie,ge))}cancelTask(b){if(b.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(b.zone||m).name+"; Execution: "+this.name+")");if(!(b.state!==v&&b.state!==x)){b._transitionTo(N,v,x);try{this._zoneDelegate.cancelTask(this,b)}catch(R){throw b._transitionTo(P,N),this._zoneDelegate.handleError(this,R),R}return this._updateTaskCount(b,-1),b._transitionTo(p,N),b.runCount=-1,b}}_updateTaskCount(b,R){let Y=b._zoneDelegates;R==-1&&(b._zoneDelegates=null);for(let ie=0;ie<Y.length;ie++)Y[ie]._updateTaskCount(b.type,R)}}return U})(),r={name:"",onHasTask:(U,H,b,R)=>U.hasTask(b,R),onScheduleTask:(U,H,b,R)=>U.scheduleTask(b,R),onInvokeTask:(U,H,b,R,Y,ie)=>U.invokeTask(b,R,Y,ie),onCancelTask:(U,H,b,R)=>U.cancelTask(b,R)};class s{get zone(){return this._zone}constructor(H,b,R){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=H,this._parentDelegate=b,this._forkZS=R&&(R&&R.onFork?R:b._forkZS),this._forkDlgt=R&&(R.onFork?b:b._forkDlgt),this._forkCurrZone=R&&(R.onFork?this._zone:b._forkCurrZone),this._interceptZS=R&&(R.onIntercept?R:b._interceptZS),this._interceptDlgt=R&&(R.onIntercept?b:b._interceptDlgt),this._interceptCurrZone=R&&(R.onIntercept?this._zone:b._interceptCurrZone),this._invokeZS=R&&(R.onInvoke?R:b._invokeZS),this._invokeDlgt=R&&(R.onInvoke?b:b._invokeDlgt),this._invokeCurrZone=R&&(R.onInvoke?this._zone:b._invokeCurrZone),this._handleErrorZS=R&&(R.onHandleError?R:b._handleErrorZS),this._handleErrorDlgt=R&&(R.onHandleError?b:b._handleErrorDlgt),this._handleErrorCurrZone=R&&(R.onHandleError?this._zone:b._handleErrorCurrZone),this._scheduleTaskZS=R&&(R.onScheduleTask?R:b._scheduleTaskZS),this._scheduleTaskDlgt=R&&(R.onScheduleTask?b:b._scheduleTaskDlgt),this._scheduleTaskCurrZone=R&&(R.onScheduleTask?this._zone:b._scheduleTaskCurrZone),this._invokeTaskZS=R&&(R.onInvokeTask?R:b._invokeTaskZS),this._invokeTaskDlgt=R&&(R.onInvokeTask?b:b._invokeTaskDlgt),this._invokeTaskCurrZone=R&&(R.onInvokeTask?this._zone:b._invokeTaskCurrZone),this._cancelTaskZS=R&&(R.onCancelTask?R:b._cancelTaskZS),this._cancelTaskDlgt=R&&(R.onCancelTask?b:b._cancelTaskDlgt),this._cancelTaskCurrZone=R&&(R.onCancelTask?this._zone:b._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let Y=R&&R.onHasTask,ie=b&&b._hasTaskZS;(Y||ie)&&(this._hasTaskZS=Y?R:r,this._hasTaskDlgt=b,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,R.onScheduleTask||(this._scheduleTaskZS=r,this._scheduleTaskDlgt=b,this._scheduleTaskCurrZone=this._zone),R.onInvokeTask||(this._invokeTaskZS=r,this._invokeTaskDlgt=b,this._invokeTaskCurrZone=this._zone),R.onCancelTask||(this._cancelTaskZS=r,this._cancelTaskDlgt=b,this._cancelTaskCurrZone=this._zone))}fork(H,b){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,H,b):new i(H,b)}intercept(H,b,R){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,H,b,R):b}invoke(H,b,R,Y,ie){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,H,b,R,Y,ie):b.apply(R,Y)}handleError(H,b){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,H,b):!0}scheduleTask(H,b){let R=b;if(this._scheduleTaskZS)this._hasTaskZS&&R._zoneDelegates.push(this._hasTaskDlgtOwner),R=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,H,b),R||(R=b);else if(b.scheduleFn)b.scheduleFn(b);else if(b.type==I)g(b);else throw new Error("Task is missing scheduleFn.");return R}invokeTask(H,b,R,Y){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,H,b,R,Y):b.callback.apply(R,Y)}cancelTask(H,b){let R;if(this._cancelTaskZS)R=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,H,b);else{if(!b.cancelFn)throw Error("Task is not cancelable");R=b.cancelFn(b)}return R}hasTask(H,b){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,H,b)}catch(R){this.handleError(H,R)}}_updateTaskCount(H,b){let R=this._taskCounts,Y=R[H],ie=R[H]=Y+b;if(ie<0)throw new Error("More tasks executed then were scheduled.");if(Y==0||ie==0){let ge={microTask:R.microTask>0,macroTask:R.macroTask>0,eventTask:R.eventTask>0,change:H};this.hasTask(this._zone,ge)}}}class o{constructor(H,b,R,Y,ie,ge){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=H,this.source=b,this.data=Y,this.scheduleFn=ie,this.cancelFn=ge,!R)throw new Error("callback is not defined");this.callback=R;let de=this;H===E&&Y&&Y.useG?this.invoke=o.invokeTask:this.invoke=function(){return o.invokeTask.call(vi,de,this,arguments)}}static invokeTask(H,b,R){H||(H=this),G++;try{return H.runCount++,H.zone.runTask(H,b,R)}finally{G==1&&y(),G--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(p,S)}_transitionTo(H,b,R){if(this._state===b||this._state===R)this._state=H,H==p&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${H}', expecting state '${b}'${R?" or '"+R+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let a=In("setTimeout"),c=In("Promise"),l=In("then"),u=[],d=!1,h;function f(U){if(h||vi[c]&&(h=vi[c].resolve(0)),h){let H=h[l];H||(H=h.then),H.call(h,U)}else vi[a](U,0)}function g(U){G===0&&u.length===0&&f(y),U&&u.push(U)}function y(){if(!d){for(d=!0;u.length;){let U=u;u=[];for(let H=0;H<U.length;H++){let b=U[H];try{b.zone.runTask(b,null,null)}catch(R){T.onUnhandledError(R)}}}T.microtaskDrainDone(),d=!1}}let m={name:"NO ZONE"},p="notScheduled",S="scheduling",v="scheduled",x="running",N="canceling",P="unknown",I="microTask",C="macroTask",E="eventTask",_={},T={symbol:In,currentZoneFrame:()=>O,onUnhandledError:j,microtaskDrainDone:j,scheduleMicroTask:g,showUncaughtError:()=>!i[In("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:j,patchMethod:()=>j,bindArguments:()=>[],patchThen:()=>j,patchMacroTask:()=>j,patchEventPrototype:()=>j,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>j,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>j,wrapWithCurrentZone:()=>j,filterProperties:()=>[],attachOriginToPatched:()=>j,_redefineProperty:()=>j,patchCallbacks:()=>j,nativeScheduleMicroTask:f},O={parent:null,zone:new i(null,null)},L=null,G=0;function j(){}return t("Zone","Zone"),i}function _N(){let n=globalThis,e=n[In("forceDuplicateZoneCheck")]===!0;if(n.Zone&&(e||typeof n.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return n.Zone??=vN(),n.Zone}function Cm(n,e){return Zone.current.wrap(n,e)}function Dm(n,e,t,i,r){return Zone.current.scheduleMacroTask(n,e,t,i,r)}function Am(n,e){for(let t=n.length-1;t>=0;t--)typeof n[t]=="function"&&(n[t]=Cm(n[t],e+"_"+t));return n}function wN(n,e){let t=n.constructor.name;for(let i=0;i<e.length;i++){let r=e[i],s=n[r];if(s){let o=Xa(n,r);if(!zM(o))continue;n[r]=(a=>{let c=function(){return a.apply(this,Am(arguments,t+"."+r))};return Ki(c,a),c})(s)}}}function zM(n){return n?n.writable===!1?!1:!(typeof n.get=="function"&&typeof n.set>"u"):!0}function OM(n,e,t){let i=Xa(n,e);if(!i&&t&&Xa(t,e)&&(i={enumerable:!0,configurable:!0}),!i||!i.configurable)return;let r=ut("on"+e+"patched");if(n.hasOwnProperty(r)&&n[r])return;delete i.writable,delete i.value;let s=i.get,o=i.set,a=e.slice(2),c=nd[a];c||(c=nd[a]=ut("ON_PROPERTY"+a)),i.set=function(l){let u=this;if(!u&&n===kt&&(u=kt),!u)return;typeof u[c]=="function"&&u.removeEventListener(a,FM),o&&o.call(u,null),u[c]=l,typeof l=="function"&&u.addEventListener(a,FM,!1)},i.get=function(){let l=this;if(!l&&n===kt&&(l=kt),!l)return null;let u=l[c];if(u)return u;if(s){let d=s.call(this);if(d)return i.set.call(this,d),typeof l[EN]=="function"&&l.removeAttribute(e),d}return null},wm(n,e,i),n[r]=!0}function WM(n,e,t){if(e)for(let i=0;i<e.length;i++)OM(n,"on"+e[i],t);else{let i=[];for(let r in n)r.slice(0,2)=="on"&&i.push(r);for(let r=0;r<i.length;r++)OM(n,i[r],t)}}function qa(n){let e=kt[n];if(!e)return;kt[ut(n)]=e,kt[n]=function(){let r=Am(arguments,n);switch(r.length){case 0:this[Yn]=new e;break;case 1:this[Yn]=new e(r[0]);break;case 2:this[Yn]=new e(r[0],r[1]);break;case 3:this[Yn]=new e(r[0],r[1],r[2]);break;case 4:this[Yn]=new e(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},Ki(kt[n],e);let t=new e(function(){}),i;for(i in t)n==="XMLHttpRequest"&&i==="responseBlob"||function(r){typeof t[r]=="function"?kt[n].prototype[r]=function(){return this[Yn][r].apply(this[Yn],arguments)}:wm(kt[n].prototype,r,{set:function(s){typeof s=="function"?(this[Yn][r]=Cm(s,n+"."+r),Ki(this[Yn][r],s)):this[Yn][r]=s},get:function(){return this[Yn][r]}})}(i);for(i in e)i!=="prototype"&&e.hasOwnProperty(i)&&(kt[n][i]=e[i])}function Zi(n,e,t){let i=n;for(;i&&!i.hasOwnProperty(e);)i=bm(i);!i&&n[e]&&(i=n);let r=ut(e),s=null;if(i&&(!(s=i[r])||!i.hasOwnProperty(r))){s=i[r]=i[e];let o=i&&Xa(i,e);if(zM(o)){let a=t(s,r,e);i[e]=function(){return a(this,arguments)},Ki(i[e],s)}}return s}function SN(n,e,t){let i=null;function r(s){let o=s.data;return o.args[o.cbIdx]=function(){s.invoke.apply(this,arguments)},i.apply(o.target,o.args),s}i=Zi(n,e,s=>function(o,a){let c=t(o,a);return c.cbIdx>=0&&typeof a[c.cbIdx]=="function"?Dm(c.name,a[c.cbIdx],c,r):s.apply(o,a)})}function Ki(n,e){n[ut("OriginalDelegate")]=e}function TN(){try{let n=po.navigator.userAgent;if(n.indexOf("MSIE ")!==-1||n.indexOf("Trident/")!==-1)return!0}catch{}return!1}function CN(){if(kM)return Mm;kM=!0;try{let n=po.navigator.userAgent;(n.indexOf("MSIE ")!==-1||n.indexOf("Trident/")!==-1||n.indexOf("Edge/")!==-1)&&(Mm=!0)}catch{}return Mm}function UM(n){return typeof n=="function"}function BM(n){return typeof n=="number"}function XM(n,e){let t=(e?e(n):n)+Yi,i=(e?e(n):n)+Xi,r=Ya+t,s=Ya+i;Rn[n]={},Rn[n][Yi]=r,Rn[n][Xi]=s}function AN(n,e,t,i){let r=i&&i.add||Sm,s=i&&i.rm||Tm,o=i&&i.listeners||"eventListeners",a=i&&i.rmAll||"removeAllListeners",c=ut(r),l="."+r+":",u="prependListener",d="."+u+":",h=function(S,v,x){if(S.isRemoved)return;let N=S.callback;typeof N=="object"&&N.handleEvent&&(S.callback=C=>N.handleEvent(C),S.originalDelegate=N);let P;try{S.invoke(S,v,[x])}catch(C){P=C}let I=S.options;if(I&&typeof I=="object"&&I.once){let C=S.originalDelegate?S.originalDelegate:S.callback;v[s].call(v,x.type,C,I)}return P};function f(S,v,x){if(v=v||n.event,!v)return;let N=S||v.target||n,P=N[Rn[v.type][x?Xi:Yi]];if(P){let I=[];if(P.length===1){let C=h(P[0],N,v);C&&I.push(C)}else{let C=P.slice();for(let E=0;E<C.length&&!(v&&v[qM]===!0);E++){let _=h(C[E],N,v);_&&I.push(_)}}if(I.length===1)throw I[0];for(let C=0;C<I.length;C++){let E=I[C];e.nativeScheduleMicroTask(()=>{throw E})}}}let g=function(S){return f(this,S,!1)},y=function(S){return f(this,S,!0)};function m(S,v){if(!S)return!1;let x=!0;v&&v.useG!==void 0&&(x=v.useG);let N=v&&v.vh,P=!0;v&&v.chkDup!==void 0&&(P=v.chkDup);let I=!1;v&&v.rt!==void 0&&(I=v.rt);let C=S;for(;C&&!C.hasOwnProperty(r);)C=bm(C);if(!C&&S[r]&&(C=S),!C||C[c])return!1;let E=v&&v.eventNameToString,_={},T=C[c]=C[r],O=C[ut(s)]=C[s],L=C[ut(o)]=C[o],G=C[ut(a)]=C[a],j;v&&v.prepend&&(j=C[ut(v.prepend)]=C[v.prepend]);function U(k,te){return!fo&&typeof k=="object"&&k?!!k.capture:!fo||!te?k:typeof k=="boolean"?{capture:k,passive:!0}:k?typeof k=="object"&&k.passive!==!1?Zn(dn({},k),{passive:!0}):k:{passive:!0}}let H=function(k){if(!_.isExisting)return T.call(_.target,_.eventName,_.capture?y:g,_.options)},b=function(k){if(!k.isRemoved){let te=Rn[k.eventName],he;te&&(he=te[k.capture?Xi:Yi]);let le=he&&k.target[he];if(le){for(let A=0;A<le.length;A++)if(le[A]===k){le.splice(A,1),k.isRemoved=!0,k.removeAbortListener&&(k.removeAbortListener(),k.removeAbortListener=null),le.length===0&&(k.allRemoved=!0,k.target[he]=null);break}}}if(k.allRemoved)return O.call(k.target,k.eventName,k.capture?y:g,k.options)},R=function(k){return T.call(_.target,_.eventName,k.invoke,_.options)},Y=function(k){return j.call(_.target,_.eventName,k.invoke,_.options)},ie=function(k){return O.call(k.target,k.eventName,k.invoke,k.options)},ge=x?H:R,de=x?b:ie,Z=function(k,te){let he=typeof te;return he==="function"&&k.callback===te||he==="object"&&k.originalDelegate===te},se=v&&v.diff?v.diff:Z,xe=Zone[ut("UNPATCHED_EVENTS")],ce=n[ut("PASSIVE_EVENTS")];function X(k){if(typeof k=="object"&&k!==null){let te=dn({},k);return k.signal&&(te.signal=k.signal),te}return k}let J=function(k,te,he,le,A=!1,Le=!1){return function(){let ye=this||n,ve=arguments[0];v&&v.transferEventName&&(ve=v.transferEventName(ve));let ue=arguments[1];if(!ue)return k.apply(this,arguments);if(rd&&ve==="uncaughtException")return k.apply(this,arguments);let Fe=!1;if(typeof ue!="function"){if(!ue.handleEvent)return k.apply(this,arguments);Fe=!0}if(N&&!N(k,ue,ye,arguments))return;let De=fo&&!!ce&&ce.indexOf(ve)!==-1,D=X(U(arguments[2],De)),M=D?.signal;if(M?.aborted)return;if(xe){for(let _e=0;_e<xe.length;_e++)if(ve===xe[_e])return De?k.call(ye,ve,ue,D):k.apply(this,arguments)}let W=D?typeof D=="boolean"?!0:D.capture:!1,ee=D&&typeof D=="object"?D.once:!1,re=Zone.current,Q=Rn[ve];Q||(XM(ve,E),Q=Rn[ve]);let Ie=Q[W?Xi:Yi],fe=ye[Ie],Se=!1;if(fe){if(Se=!0,P){for(let _e=0;_e<fe.length;_e++)if(se(fe[_e],ue))return}}else fe=ye[Ie]=[];let Ke,ae=ye.constructor.name,Te=jM[ae];Te&&(Ke=Te[ve]),Ke||(Ke=ae+te+(E?E(ve):ve)),_.options=D,ee&&(_.options.once=!1),_.target=ye,_.capture=W,_.eventName=ve,_.isExisting=Se;let Ne=x?DN:void 0;Ne&&(Ne.taskData=_),M&&(_.options.signal=void 0);let Re=re.scheduleEventTask(Ke,ue,Ne,he,le);if(M){_.options.signal=M;let _e=()=>Re.zone.cancelTask(Re);k.call(M,"abort",_e,{once:!0}),Re.removeAbortListener=()=>M.removeEventListener("abort",_e)}if(_.target=null,Ne&&(Ne.taskData=null),ee&&(_.options.once=!0),!fo&&typeof Re.options=="boolean"||(Re.options=D),Re.target=ye,Re.capture=W,Re.eventName=ve,Fe&&(Re.originalDelegate=ue),Le?fe.unshift(Re):fe.push(Re),A)return ye}};return C[r]=J(T,l,ge,de,I),j&&(C[u]=J(j,d,Y,de,I,!0)),C[s]=function(){let k=this||n,te=arguments[0];v&&v.transferEventName&&(te=v.transferEventName(te));let he=arguments[2],le=he?typeof he=="boolean"?!0:he.capture:!1,A=arguments[1];if(!A)return O.apply(this,arguments);if(N&&!N(O,A,k,arguments))return;let Le=Rn[te],ye;Le&&(ye=Le[le?Xi:Yi]);let ve=ye&&k[ye];if(ve)for(let ue=0;ue<ve.length;ue++){let Fe=ve[ue];if(se(Fe,A)){if(ve.splice(ue,1),Fe.isRemoved=!0,ve.length===0&&(Fe.allRemoved=!0,k[ye]=null,!le&&typeof te=="string")){let De=Ya+"ON_PROPERTY"+te;k[De]=null}return Fe.zone.cancelTask(Fe),I?k:void 0}}return O.apply(this,arguments)},C[o]=function(){let k=this||n,te=arguments[0];v&&v.transferEventName&&(te=v.transferEventName(te));let he=[],le=YM(k,E?E(te):te);for(let A=0;A<le.length;A++){let Le=le[A],ye=Le.originalDelegate?Le.originalDelegate:Le.callback;he.push(ye)}return he},C[a]=function(){let k=this||n,te=arguments[0];if(te){v&&v.transferEventName&&(te=v.transferEventName(te));let he=Rn[te];if(he){let le=he[Yi],A=he[Xi],Le=k[le],ye=k[A];if(Le){let ve=Le.slice();for(let ue=0;ue<ve.length;ue++){let Fe=ve[ue],De=Fe.originalDelegate?Fe.originalDelegate:Fe.callback;this[s].call(this,te,De,Fe.options)}}if(ye){let ve=ye.slice();for(let ue=0;ue<ve.length;ue++){let Fe=ve[ue],De=Fe.originalDelegate?Fe.originalDelegate:Fe.callback;this[s].call(this,te,De,Fe.options)}}}}else{let he=Object.keys(k);for(let le=0;le<he.length;le++){let A=he[le],Le=$M.exec(A),ye=Le&&Le[1];ye&&ye!=="removeListener"&&this[a].call(this,ye)}this[a].call(this,"removeListener")}if(I)return this},Ki(C[r],T),Ki(C[s],O),G&&Ki(C[a],G),L&&Ki(C[o],L),!0}let p=[];for(let S=0;S<t.length;S++)p[S]=m(t[S],i);return p}function YM(n,e){if(!e){let s=[];for(let o in n){let a=$M.exec(o),c=a&&a[1];if(c&&(!e||c===e)){let l=n[o];if(l)for(let u=0;u<l.length;u++)s.push(l[u])}}return s}let t=Rn[e];t||(XM(e),t=Rn[e]);let i=n[t[Yi]],r=n[t[Xi]];return i?r?i.concat(r):i.slice():r?r.slice():[]}function IN(n,e){let t=n.Event;t&&t.prototype&&e.patchMethod(t.prototype,"stopImmediatePropagation",i=>function(r,s){r[qM]=!0,i&&i.apply(r,s)})}function RN(n,e){e.patchMethod(n,"queueMicrotask",t=>function(i,r){Zone.current.scheduleMicroTask("queueMicrotask",r[0])})}function ho(n,e,t,i){let r=null,s=null;e+=i,t+=i;let o={};function a(l){let u=l.data;u.args[0]=function(){return l.invoke.apply(this,arguments)};let d=r.apply(n,u.args);return BM(d)?u.handleId=d:(u.handle=d,u.isRefreshable=UM(d.refresh)),l}function c(l){let{handle:u,handleId:d}=l.data;return s.call(n,u??d)}r=Zi(n,e,l=>function(u,d){if(UM(d[0])){let h={isRefreshable:!1,isPeriodic:i==="Interval",delay:i==="Timeout"||i==="Interval"?d[1]||0:void 0,args:d},f=d[0];d[0]=function(){try{return f.apply(this,arguments)}finally{let{handle:x,handleId:N,isPeriodic:P,isRefreshable:I}=h;!P&&!I&&(N?delete o[N]:x&&(x[td]=null))}};let g=Dm(e,d[0],h,a,c);if(!g)return g;let{handleId:y,handle:m,isRefreshable:p,isPeriodic:S}=g.data;if(y)o[y]=g;else if(m&&(m[td]=g,p&&!S)){let v=m.refresh;m.refresh=function(){let{zone:x,state:N}=g;return N==="notScheduled"?(g._state="scheduled",x._updateTaskCount(g,1)):N==="running"&&(g._state="scheduling"),v.call(this)}}return m??y??g}else return l.apply(n,d)}),s=Zi(n,t,l=>function(u,d){let h=d[0],f;BM(h)?(f=o[h],delete o[h]):(f=h?.[td],f?h[td]=null:f=h),f?.type?f.cancelFn&&f.zone.cancelTask(f):l.apply(n,d)})}function PN(n,e){let{isBrowser:t,isMix:i}=e.getGlobalObjects();if(!t&&!i||!n.customElements||!("customElements"in n))return;let r=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];e.patchCallbacks(e,n.customElements,"customElements","define",r)}function NN(n,e){if(Zone[e.symbol("patchEventTarget")])return;let{eventNames:t,zoneSymbolEventNames:i,TRUE_STR:r,FALSE_STR:s,ZONE_SYMBOL_PREFIX:o}=e.getGlobalObjects();for(let c=0;c<t.length;c++){let l=t[c],u=l+s,d=l+r,h=o+u,f=o+d;i[l]={},i[l][s]=h,i[l][r]=f}let a=n.EventTarget;if(!(!a||!a.prototype))return e.patchEventTarget(n,e,[a&&a.prototype]),!0}function LN(n,e){e.patchEventPrototype(n,e)}function ZM(n,e,t){if(!t||t.length===0)return e;let i=t.filter(s=>s.target===n);if(!i||i.length===0)return e;let r=i[0].ignoreProperties;return e.filter(s=>r.indexOf(s)===-1)}function VM(n,e,t,i){if(!n)return;let r=ZM(n,e,t);WM(n,r,i)}function Em(n){return Object.getOwnPropertyNames(n).filter(e=>e.startsWith("on")&&e.length>2).map(e=>e.substring(2))}function FN(n,e){if(rd&&!GM||Zone[n.symbol("patchEvents")])return;let t=e.__Zone_ignore_on_properties,i=[];if(Im){let r=window;i=i.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let s=TN()?[{target:r,ignoreProperties:["error"]}]:[];VM(r,Em(r),t&&t.concat(s),bm(r))}i=i.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<i.length;r++){let s=e[i[r]];s&&s.prototype&&VM(s.prototype,Em(s.prototype),t)}}function ON(n){n.__load_patch("legacy",e=>{let t=e[n.__symbol__("legacyPatch")];t&&t()}),n.__load_patch("timers",e=>{let t="set",i="clear";ho(e,t,i,"Timeout"),ho(e,t,i,"Interval"),ho(e,t,i,"Immediate")}),n.__load_patch("requestAnimationFrame",e=>{ho(e,"request","cancel","AnimationFrame"),ho(e,"mozRequest","mozCancel","AnimationFrame"),ho(e,"webkitRequest","webkitCancel","AnimationFrame")}),n.__load_patch("blocking",(e,t)=>{let i=["alert","prompt","confirm"];for(let r=0;r<i.length;r++){let s=i[r];Zi(e,s,(o,a,c)=>function(l,u){return t.current.run(o,e,u,c)})}}),n.__load_patch("EventTarget",(e,t,i)=>{LN(e,i),NN(e,i);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&i.patchEventTarget(e,i,[r.prototype])}),n.__load_patch("MutationObserver",(e,t,i)=>{qa("MutationObserver"),qa("WebKitMutationObserver")}),n.__load_patch("IntersectionObserver",(e,t,i)=>{qa("IntersectionObserver")}),n.__load_patch("FileReader",(e,t,i)=>{qa("FileReader")}),n.__load_patch("on_property",(e,t,i)=>{FN(i,e)}),n.__load_patch("customElements",(e,t,i)=>{PN(e,i)}),n.__load_patch("XHR",(e,t)=>{l(e);let i=ut("xhrTask"),r=ut("xhrSync"),s=ut("xhrListener"),o=ut("xhrScheduled"),a=ut("xhrURL"),c=ut("xhrErrorBeforeScheduled");function l(u){let d=u.XMLHttpRequest;if(!d)return;let h=d.prototype;function f(T){return T[i]}let g=h[_m],y=h[xm];if(!g){let T=u.XMLHttpRequestEventTarget;if(T){let O=T.prototype;g=O[_m],y=O[xm]}}let m="readystatechange",p="scheduled";function S(T){let O=T.data,L=O.target;L[o]=!1,L[c]=!1;let G=L[s];g||(g=L[_m],y=L[xm]),G&&y.call(L,m,G);let j=L[s]=()=>{if(L.readyState===L.DONE)if(!O.aborted&&L[o]&&T.state===p){let H=L[t.__symbol__("loadfalse")];if(L.status!==0&&H&&H.length>0){let b=T.invoke;T.invoke=function(){let R=L[t.__symbol__("loadfalse")];for(let Y=0;Y<R.length;Y++)R[Y]===T&&R.splice(Y,1);!O.aborted&&T.state===p&&b.call(T)},H.push(T)}else T.invoke()}else!O.aborted&&L[o]===!1&&(L[c]=!0)};return g.call(L,m,j),L[i]||(L[i]=T),E.apply(L,O.args),L[o]=!0,T}function v(){}function x(T){let O=T.data;return O.aborted=!0,_.apply(O.target,O.args)}let N=Zi(h,"open",()=>function(T,O){return T[r]=O[2]==!1,T[a]=O[1],N.apply(T,O)}),P="XMLHttpRequest.send",I=ut("fetchTaskAborting"),C=ut("fetchTaskScheduling"),E=Zi(h,"send",()=>function(T,O){if(t.current[C]===!0||T[r])return E.apply(T,O);{let L={target:T,url:T[a],isPeriodic:!1,args:O,aborted:!1},G=Dm(P,v,L,S,x);T&&T[c]===!0&&!L.aborted&&G.state===p&&G.invoke()}}),_=Zi(h,"abort",()=>function(T,O){let L=f(T);if(L&&typeof L.type=="string"){if(L.cancelFn==null||L.data&&L.data.aborted)return;L.zone.cancelTask(L)}else if(t.current[I]===!0)return _.apply(T,O)})}}),n.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&wN(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),n.__load_patch("PromiseRejectionEvent",(e,t)=>{function i(r){return function(s){YM(e,r).forEach(a=>{let c=e.PromiseRejectionEvent;if(c){let l=new c(r,{promise:s.promise,reason:s.rejection});a.invoke(l)}})}}e.PromiseRejectionEvent&&(t[ut("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),t[ut("rejectionHandledHandler")]=i("rejectionhandled"))}),n.__load_patch("queueMicrotask",(e,t,i)=>{RN(e,i)})}function kN(n){n.__load_patch("ZoneAwarePromise",(e,t,i)=>{let r=Object.getOwnPropertyDescriptor,s=Object.defineProperty;function o(X){if(X&&X.toString===Object.prototype.toString){let J=X.constructor&&X.constructor.name;return(J||"")+": "+JSON.stringify(X)}return X?X.toString():Object.prototype.toString.call(X)}let a=i.symbol,c=[],l=e[a("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,u=a("Promise"),d=a("then"),h="__creationTrace__";i.onUnhandledError=X=>{if(i.showUncaughtError()){let J=X&&X.rejection;J?console.error("Unhandled Promise rejection:",J instanceof Error?J.message:J,"; Zone:",X.zone.name,"; Task:",X.task&&X.task.source,"; Value:",J,J instanceof Error?J.stack:void 0):console.error(X)}},i.microtaskDrainDone=()=>{for(;c.length;){let X=c.shift();try{X.zone.runGuarded(()=>{throw X.throwOriginal?X.rejection:X})}catch(J){g(J)}}};let f=a("unhandledPromiseRejectionHandler");function g(X){i.onUnhandledError(X);try{let J=t[f];typeof J=="function"&&J.call(this,X)}catch{}}function y(X){return X&&X.then}function m(X){return X}function p(X){return de.reject(X)}let S=a("state"),v=a("value"),x=a("finally"),N=a("parentPromiseValue"),P=a("parentPromiseState"),I="Promise.then",C=null,E=!0,_=!1,T=0;function O(X,J){return k=>{try{U(X,J,k)}catch(te){U(X,!1,te)}}}let L=function(){let X=!1;return function(k){return function(){X||(X=!0,k.apply(null,arguments))}}},G="Promise resolved with itself",j=a("currentTaskTrace");function U(X,J,k){let te=L();if(X===k)throw new TypeError(G);if(X[S]===C){let he=null;try{(typeof k=="object"||typeof k=="function")&&(he=k&&k.then)}catch(le){return te(()=>{U(X,!1,le)})(),X}if(J!==_&&k instanceof de&&k.hasOwnProperty(S)&&k.hasOwnProperty(v)&&k[S]!==C)b(k),U(X,k[S],k[v]);else if(J!==_&&typeof he=="function")try{he.call(k,te(O(X,J)),te(O(X,!1)))}catch(le){te(()=>{U(X,!1,le)})()}else{X[S]=J;let le=X[v];if(X[v]=k,X[x]===x&&J===E&&(X[S]=X[P],X[v]=X[N]),J===_&&k instanceof Error){let A=t.currentTask&&t.currentTask.data&&t.currentTask.data[h];A&&s(k,j,{configurable:!0,enumerable:!1,writable:!0,value:A})}for(let A=0;A<le.length;)R(X,le[A++],le[A++],le[A++],le[A++]);if(le.length==0&&J==_){X[S]=T;let A=k;try{throw new Error("Uncaught (in promise): "+o(k)+(k&&k.stack?`
`+k.stack:""))}catch(Le){A=Le}l&&(A.throwOriginal=!0),A.rejection=k,A.promise=X,A.zone=t.current,A.task=t.currentTask,c.push(A),i.scheduleMicroTask()}}}return X}let H=a("rejectionHandledHandler");function b(X){if(X[S]===T){try{let J=t[H];J&&typeof J=="function"&&J.call(this,{rejection:X[v],promise:X})}catch{}X[S]=_;for(let J=0;J<c.length;J++)X===c[J].promise&&c.splice(J,1)}}function R(X,J,k,te,he){b(X);let le=X[S],A=le?typeof te=="function"?te:m:typeof he=="function"?he:p;J.scheduleMicroTask(I,()=>{try{let Le=X[v],ye=!!k&&x===k[x];ye&&(k[N]=Le,k[P]=le);let ve=J.run(A,void 0,ye&&A!==p&&A!==m?[]:[Le]);U(k,!0,ve)}catch(Le){U(k,!1,Le)}},k)}let Y="function ZoneAwarePromise() { [native code] }",ie=function(){},ge=e.AggregateError;class de{static toString(){return Y}static resolve(J){return J instanceof de?J:U(new this(null),E,J)}static reject(J){return U(new this(null),_,J)}static withResolvers(){let J={};return J.promise=new de((k,te)=>{J.resolve=k,J.reject=te}),J}static any(J){if(!J||typeof J[Symbol.iterator]!="function")return Promise.reject(new ge([],"All promises were rejected"));let k=[],te=0;try{for(let A of J)te++,k.push(de.resolve(A))}catch{return Promise.reject(new ge([],"All promises were rejected"))}if(te===0)return Promise.reject(new ge([],"All promises were rejected"));let he=!1,le=[];return new de((A,Le)=>{for(let ye=0;ye<k.length;ye++)k[ye].then(ve=>{he||(he=!0,A(ve))},ve=>{le.push(ve),te--,te===0&&(he=!0,Le(new ge(le,"All promises were rejected")))})})}static race(J){let k,te,he=new this((Le,ye)=>{k=Le,te=ye});function le(Le){k(Le)}function A(Le){te(Le)}for(let Le of J)y(Le)||(Le=this.resolve(Le)),Le.then(le,A);return he}static all(J){return de.allWithCallback(J)}static allSettled(J){return(this&&this.prototype instanceof de?this:de).allWithCallback(J,{thenCallback:te=>({status:"fulfilled",value:te}),errorCallback:te=>({status:"rejected",reason:te})})}static allWithCallback(J,k){let te,he,le=new this((ve,ue)=>{te=ve,he=ue}),A=2,Le=0,ye=[];for(let ve of J){y(ve)||(ve=this.resolve(ve));let ue=Le;try{ve.then(Fe=>{ye[ue]=k?k.thenCallback(Fe):Fe,A--,A===0&&te(ye)},Fe=>{k?(ye[ue]=k.errorCallback(Fe),A--,A===0&&te(ye)):he(Fe)})}catch(Fe){he(Fe)}A++,Le++}return A-=2,A===0&&te(ye),le}constructor(J){let k=this;if(!(k instanceof de))throw new Error("Must be an instanceof Promise.");k[S]=C,k[v]=[];try{let te=L();J&&J(te(O(k,E)),te(O(k,_)))}catch(te){U(k,!1,te)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return de}then(J,k){let te=this.constructor?.[Symbol.species];(!te||typeof te!="function")&&(te=this.constructor||de);let he=new te(ie),le=t.current;return this[S]==C?this[v].push(le,he,J,k):R(this,le,he,J,k),he}catch(J){return this.then(null,J)}finally(J){let k=this.constructor?.[Symbol.species];(!k||typeof k!="function")&&(k=de);let te=new k(ie);te[x]=x;let he=t.current;return this[S]==C?this[v].push(he,te,J,J):R(this,he,te,J,J),te}}de.resolve=de.resolve,de.reject=de.reject,de.race=de.race,de.all=de.all;let Z=e[u]=e.Promise;e.Promise=de;let se=a("thenPatched");function xe(X){let J=X.prototype,k=r(J,"then");if(k&&(k.writable===!1||!k.configurable))return;let te=J.then;J[d]=te,X.prototype.then=function(he,le){return new de((Le,ye)=>{te.call(this,Le,ye)}).then(he,le)},X[se]=!0}i.patchThen=xe;function ce(X){return function(J,k){let te=X.apply(J,k);if(te instanceof de)return te;let he=te.constructor;return he[se]||xe(he),te}}return Z&&(xe(Z),Zi(e,"fetch",X=>ce(X))),Promise[t.__symbol__("uncaughtPromiseErrors")]=c,de})}function UN(n){n.__load_patch("toString",e=>{let t=Function.prototype.toString,i=ut("OriginalDelegate"),r=ut("Promise"),s=ut("Error"),o=function(){if(typeof this=="function"){let u=this[i];if(u)return typeof u=="function"?t.call(u):Object.prototype.toString.call(u);if(this===Promise){let d=e[r];if(d)return t.call(d)}if(this===Error){let d=e[s];if(d)return t.call(d)}}return t.call(this)};o[i]=t,Function.prototype.toString=o;let a=Object.prototype.toString,c="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?c:a.call(this)}})}function BN(n,e,t,i,r){let s=Zone.__symbol__(i);if(e[s])return;let o=e[s]=e[i];e[i]=function(a,c,l){return c&&c.prototype&&r.forEach(function(u){let d=`${t}.${i}::`+u,h=c.prototype;try{if(h.hasOwnProperty(u)){let f=n.ObjectGetOwnPropertyDescriptor(h,u);f&&f.value?(f.value=n.wrapWithCurrentZone(f.value,d),n._redefineProperty(c.prototype,u,f)):h[u]&&(h[u]=n.wrapWithCurrentZone(h[u],d))}else h[u]&&(h[u]=n.wrapWithCurrentZone(h[u],d))}catch{}}),o.call(e,a,c,l)},n.attachOriginToPatched(e[i],o)}function VN(n){n.__load_patch("util",(e,t,i)=>{let r=Em(e);i.patchOnProperties=WM,i.patchMethod=Zi,i.bindArguments=Am,i.patchMacroTask=SN;let s=t.__symbol__("BLACK_LISTED_EVENTS"),o=t.__symbol__("UNPATCHED_EVENTS");e[o]&&(e[s]=e[o]),e[s]&&(t[s]=t[o]=e[s]),i.patchEventPrototype=IN,i.patchEventTarget=AN,i.isIEOrEdge=CN,i.ObjectDefineProperty=wm,i.ObjectGetOwnPropertyDescriptor=Xa,i.ObjectCreate=xN,i.ArraySlice=MN,i.patchClass=qa,i.wrapWithCurrentZone=Cm,i.filterProperties=ZM,i.attachOriginToPatched=Ki,i._redefineProperty=Object.defineProperty,i.patchCallbacks=BN,i.getGlobalObjects=()=>({globalSources:jM,zoneSymbolEventNames:Rn,eventNames:r,isBrowser:Im,isMix:GM,isNode:rd,TRUE_STR:Xi,FALSE_STR:Yi,ZONE_SYMBOL_PREFIX:Ya,ADD_EVENT_LISTENER_STR:Sm,REMOVE_EVENT_LISTENER_STR:Tm})})}function zN(n){kN(n),UN(n),VN(n)}var vi,Xa,wm,bm,xN,MN,Sm,Tm,_m,xm,Xi,Yi,Ya,ut,id,po,kt,EN,HM,rd,Im,GM,nd,bN,FM,Yn,kM,Mm,fo,DN,Rn,jM,$M,qM,td,KM,JM=pe(()=>{"use strict";vi=globalThis;Xa=Object.getOwnPropertyDescriptor,wm=Object.defineProperty,bm=Object.getPrototypeOf,xN=Object.create,MN=Array.prototype.slice,Sm="addEventListener",Tm="removeEventListener",_m=In(Sm),xm=In(Tm),Xi="true",Yi="false",Ya=In("");ut=In,id=typeof window<"u",po=id?window:void 0,kt=id&&po||globalThis,EN="removeAttribute";HM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,rd=!("nw"in kt)&&typeof kt.process<"u"&&kt.process.toString()==="[object process]",Im=!rd&&!HM&&!!(id&&po.HTMLElement),GM=typeof kt.process<"u"&&kt.process.toString()==="[object process]"&&!HM&&!!(id&&po.HTMLElement),nd={},bN=ut("enable_beforeunload"),FM=function(n){if(n=n||kt.event,!n)return;let e=nd[n.type];e||(e=nd[n.type]=ut("ON_PROPERTY"+n.type));let t=this||n.target||kt,i=t[e],r;if(Im&&t===po&&n.type==="error"){let s=n;r=i&&i.call(this,s.message,s.filename,s.lineno,s.colno,s.error),r===!0&&n.preventDefault()}else r=i&&i.apply(this,arguments),n.type==="beforeunload"&&kt[bN]&&typeof r=="string"?n.returnValue=r:r!=null&&!r&&n.preventDefault();return r};Yn=ut("originalInstance");kM=!1,Mm=!1;fo=!1;if(typeof window<"u")try{let n=Object.defineProperty({},"passive",{get:function(){fo=!0}});window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{fo=!1}DN={useG:!0},Rn={},jM={},$M=new RegExp("^"+Ya+"(\\w+)(true|false)$"),qM=ut("propagationStopped");td=ut("zoneTask");KM=_N();zN(KM);ON(KM)});var HN=dE(QM=>{W_();$_();LM();JM();gt(QM,null,function*(){let n=yield G_({providers:[]}),e=j_(NM,{injector:n.injector});customElements.get("preview-element")||customElements.define("preview-element".toLowerCase(),e)})});export default HN();
