function $(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(z)}function K(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(R(n,e))}function dt(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function ht(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}const L=typeof window!="undefined";let pt=L?()=>window.performance.now():()=>Date.now(),O=L?t=>requestAnimationFrame(t):$;const _=new Set;function T(t){_.forEach(n=>{n.c(t)||(_.delete(n),n.f())}),_.size!==0&&O(T)}function yt(t){let n;return _.size===0&&O(T),{promise:new Promise(e=>{_.add(n={c:t,f:e})}),abort(){_.delete(n)}}}let E=!1;function W(){E=!0}function U(){E=!1}function V(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:V(1,c,g=>n[e[g]].claim_order,u))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(o[r],f)}}function Y(t,n){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){E&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function xt(){return S("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,n,e,i,c=!1){it(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function F(t,n,e,i){return D(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return F(t,n,e,tt)}function vt(t,n,e){return F(t,n,e,nt)}function rt(t,n){return D(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function kt(t){return rt(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){N().$$.on_mount.push(t)}function Ct(t){N().$$.after_update.push(t)}function Mt(t,n){return N().$$.context.set(t,n),n}const h=[],q=[],x=[],P=[],H=Promise.resolve();let k=!1;function I(){k||(k=!0,H.then(G))}function qt(){return I(),H}function A(t){x.push(t)}const v=new Set;let b=0;function G(){const t=p;do{for(;b<h.length;){const n=h[b];b++,m(n),ct(n.$$)}for(m(null),h.length=0,b=0;q.length;)q.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(h.length);for(;P.length;)P.pop()();k=!1,v.clear(),m(t)}function ct(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let d;function Pt(){d={r:0,c:[],p:d}}function zt(){d.r||y(d.c),d=d.p}function ot(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Tt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function lt(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||A(()=>{const r=s.map(z).filter(K);o?o.push(...r):y(r),t.$$.on_mount=[]}),l.forEach(A)}function ut(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,c,s,o,l=[-1]){const r=p;m(t);const u=t.$$={fragment:null,ctx:null,props:s,update:$,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&c(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&st(t,a)),g}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){W();const a=et(n.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();n.intro&&ot(t.$$.fragment),lt(t,n.target,n.anchor,n.customElement),U(),G()}m(r)}class Ht{$destroy(){ut(this,1),this.$destroy=$}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,ut as B,J as C,qt as D,$ as E,dt as F,ht as G,mt as H,_t as I,Y as J,pt as K,yt as L,nt as M,Nt as N,vt as O,wt as P,y as Q,ft as R,Ht as S,et as a,$t as b,Et as c,Z as d,tt as e,St as f,gt as g,rt as h,Ft as i,At as j,bt as k,xt as l,kt as m,Pt as n,Bt as o,zt as p,ot as q,Mt as r,at as s,S as t,Ct as u,jt as v,Tt as w,Dt as x,lt as y,Lt as z};
