import{r as e,R as t}from"./vendor-fwd-1SGvIy31.js";function r({props:e,states:t,muiFormControl:r}){return t.reduce(((t,s)=>(t[s]=e[s],r&&void 0===e[s]&&(t[s]=r[s]),t)),{})}const s=e.createContext(void 0);function a(){return e.useContext(s)}var n=e=>"checkbox"===e.type,i=e=>e instanceof Date,o=e=>null==e;const u=e=>"object"==typeof e;var l=e=>!o(e)&&!Array.isArray(e)&&u(e)&&!i(e),c=e=>l(e)&&e.target?n(e.target)?e.target.checked:e.target.value:e,d=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>{const t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},m="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function y(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(m&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;if(t=r?[]:{},r||f(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=y(e[r]));else t=e}return t}var _=e=>Array.isArray(e)?e.filter(Boolean):[],g=e=>void 0===e,p=(e,t,r)=>{if(!t||!l(e))return r;const s=_(t.split(/[,[\].]+?/)).reduce(((e,t)=>o(e)?e:e[t]),e);return g(s)||s===e?g(e[t])?r:e[t]:s},v=e=>"boolean"==typeof e;const h={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},b={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},A="max",x="min",V="maxLength",F="minLength",S="pattern",w="required",k="validate",D=t.createContext(null),C=()=>t.useContext(D);var E=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==b.all&&(t._proxyFormState[a]=!s||b.all),r&&(r[a]=!0),e[a]}});return a},O=e=>l(e)&&!Object.keys(e).length,j=(e,t,r,s)=>{r(e);const{name:a,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!s||b.all)))},U=e=>Array.isArray(e)?e:[e],B=(e,t,r)=>!e||!t||e===t||U(e).some((e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e))));function T(e){const r=t.useRef(e);r.current=e,t.useEffect((()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}}),[e.disabled])}var L=e=>"string"==typeof e,N=(e,t,r,s,a)=>L(e)?(s&&t.watch.add(e),p(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),p(r,e)))):(s&&(t.watchAll=!0),r);var R=e=>/^\w*$/.test(e),M=e=>_(e.replace(/["|']|\]/g,"").split(/\.|\[/)),q=(e,t,r)=>{let s=-1;const a=R(t)?[t]:M(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e};function P(e){const r=C(),{name:s,disabled:a,control:n=r.control,shouldUnregister:i}=e,o=d(n._names.array,s),u=function(e){const r=C(),{control:s=r.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},u=t.useRef(a);u.current=a,T({disabled:i,subject:s._subjects.values,next:e=>{B(u.current,e.name,o)&&c(y(N(u.current,s._names,e.values||s._formValues,!1,n)))}});const[l,c]=t.useState(s._getWatch(a,n));return t.useEffect((()=>s._removeUnmounted())),l}({control:n,name:s,defaultValue:p(n._formValues,s,p(n._defaultValues,s,e.defaultValue)),exact:!0}),l=function(e){const r=C(),{control:s=r.control,disabled:a,name:n,exact:i}=e||{},[o,u]=t.useState(s._formState),l=t.useRef(!0),c=t.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=t.useRef(n);return d.current=n,T({disabled:a,next:e=>l.current&&B(d.current,e.name,i)&&j(e,c.current,s._updateFormState)&&u({...s._formState,...e}),subject:s._subjects.state}),t.useEffect((()=>(l.current=!0,c.current.isValid&&s._updateValid(!0),()=>{l.current=!1})),[s]),E(o,s,c.current,!1)}({control:n,name:s}),f=t.useRef(n.register(s,{...e.rules,value:u,...v(e.disabled)?{disabled:e.disabled}:{}}));return t.useEffect((()=>{const e=n._options.shouldUnregister||i,t=(e,t)=>{const r=p(n._fields,e);r&&(r._f.mount=t)};if(t(s,!0),e){const e=y(p(n._options.defaultValues,s));q(n._defaultValues,s,e),g(p(n._formValues,s))&&q(n._formValues,s,e)}return()=>{(o?e&&!n._state.action:e)?n.unregister(s):t(s,!1)}}),[s,n,o,i]),t.useEffect((()=>{p(n._fields,s)&&n._updateDisabledField({disabled:a,fields:n._fields,name:s,value:p(n._fields,s)._f.value})}),[a,s,n]),{field:{name:s,value:u,...v(a)||l.disabled?{disabled:l.disabled||a}:{},onChange:t.useCallback((e=>f.current.onChange({target:{value:c(e),name:s},type:h.CHANGE})),[s]),onBlur:t.useCallback((()=>f.current.onBlur({target:{value:p(n._formValues,s),name:s},type:h.BLUR})),[s,n]),ref:e=>{const t=p(n._fields,s);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!p(l.errors,s)},isDirty:{enumerable:!0,get:()=>!!p(l.dirtyFields,s)},isTouched:{enumerable:!0,get:()=>!!p(l.touchedFields,s)},error:{enumerable:!0,get:()=>p(l.errors,s)}})}}const I=e=>e.render(P(e));var W=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},$=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)}))},H=(e,t,r={})=>r.shouldFocus||g(r.shouldFocus)?r.focusName||`${e}.${g(r.focusIndex)?t:r.focusIndex}.`:"",G=e=>({isOnSubmit:!e||e===b.onSubmit,isOnBlur:e===b.onBlur,isOnChange:e===b.onChange,isOnAll:e===b.all,isOnTouch:e===b.onTouched}),z=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const J=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=p(e,a);if(r){const{_f:e,...n}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break;J(n,t)}else l(n)&&J(n,t)}}};var K=(e,t,r)=>{const s=_(p(e,r));return q(s,"root",t[r]),q(e,r,s),e},Q=e=>"file"===e.type,X=e=>"function"==typeof e,Y=e=>{if(!m)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Z=e=>L(e),ee=e=>"radio"===e.type,te=e=>e instanceof RegExp;const re={value:!1,isValid:!1},se={value:!0,isValid:!0};var ae=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!g(e[0].attributes.value)?g(e[0].value)||""===e[0].value?se:{value:e[0].value,isValid:!0}:se:re}return re};const ne={isValid:!1,value:null};var ie=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ne):ne;function oe(e,t,r="validate"){if(Z(e)||Array.isArray(e)&&e.every(Z)||v(e)&&!e)return{type:r,message:Z(e)?e:"",ref:t}}var ue=e=>l(e)&&!te(e)?e:{value:e,message:""},le=async(e,t,r,s,a)=>{const{ref:i,refs:u,required:c,maxLength:d,minLength:f,min:m,max:y,pattern:_,validate:h,name:b,valueAsNumber:D,mount:C,disabled:E}=e._f,j=p(t,b);if(!C||E)return{};const U=u?u[0]:i,B=e=>{s&&U.reportValidity&&(U.setCustomValidity(v(e)?"":e||""),U.reportValidity())},T={},N=ee(i),R=n(i),M=N||R,q=(D||Q(i))&&g(i.value)&&g(j)||Y(i)&&""===i.value||""===j||Array.isArray(j)&&!j.length,P=W.bind(null,b,r,T),I=(e,t,r,s=V,a=F)=>{const n=e?t:r;T[b]={type:e?s:a,message:n,ref:i,...P(e?s:a,n)}};if(a?!Array.isArray(j)||!j.length:c&&(!M&&(q||o(j))||v(j)&&!j||R&&!ae(u).isValid||N&&!ie(u).isValid)){const{value:e,message:t}=Z(c)?{value:!!c,message:c}:ue(c);if(e&&(T[b]={type:w,message:t,ref:U,...P(w,t)},!r))return B(t),T}if(!(q||o(m)&&o(y))){let e,t;const s=ue(y),a=ue(m);if(o(j)||isNaN(j)){const r=i.valueAsDate||new Date(j),n=e=>new Date((new Date).toDateString()+" "+e),o="time"==i.type,u="week"==i.type;L(s.value)&&j&&(e=o?n(j)>n(s.value):u?j>s.value:r>new Date(s.value)),L(a.value)&&j&&(t=o?n(j)<n(a.value):u?j<a.value:r<new Date(a.value))}else{const r=i.valueAsNumber||(j?+j:j);o(s.value)||(e=r>s.value),o(a.value)||(t=r<a.value)}if((e||t)&&(I(!!e,s.message,a.message,A,x),!r))return B(T[b].message),T}if((d||f)&&!q&&(L(j)||a&&Array.isArray(j))){const e=ue(d),t=ue(f),s=!o(e.value)&&j.length>+e.value,a=!o(t.value)&&j.length<+t.value;if((s||a)&&(I(s,e.message,t.message),!r))return B(T[b].message),T}if(_&&!q&&L(j)){const{value:e,message:t}=ue(_);if(te(e)&&!j.match(e)&&(T[b]={type:S,message:t,ref:i,...P(S,t)},!r))return B(t),T}if(h)if(X(h)){const e=oe(await h(j,t),U);if(e&&(T[b]={...e,...P(k,e.message)},!r))return B(e.message),T}else if(l(h)){let e={};for(const s in h){if(!O(e)&&!r)break;const a=oe(await h[s](j,t),U,s);a&&(e={...a,...P(s,a.message)},B(a.message),r&&(T[b]=e))}if(!O(e)&&(T[b]={ref:U,...e},!r))return T}return B(!0),T},ce=(e,t)=>[...e,...U(t)],de=e=>Array.isArray(e)?e.map((()=>{})):void 0;function fe(e,t,r){return[...e.slice(0,t),...U(r),...e.slice(t)]}var me=(e,t,r)=>Array.isArray(e)?(g(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[],ye=(e,t)=>[...U(t),...U(e)];var _e=(e,t)=>g(t)?[]:function(e,t){let r=0;const s=[...e];for(const a of t)s.splice(a-r,1),r++;return _(s).length?s:[]}(e,U(t).sort(((e,t)=>e-t))),ge=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};function pe(e,t){const r=Array.isArray(t)?t:R(t)?[t]:M(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=g(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,n=r[a];return s&&delete s[n],0!==a&&(l(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!g(e[t]))return!1;return!0}(s))&&pe(e,r.slice(0,-1)),e}var ve=(e,t,r)=>(e[t]=r,e);function he(e){const r=C(),{control:s=r.control,name:a,keyName:n="id",shouldUnregister:i}=e,[o,u]=t.useState(s._getFieldArray(a)),l=t.useRef(s._getFieldArray(a).map($)),c=t.useRef(o),d=t.useRef(a),f=t.useRef(!1);d.current=a,c.current=o,s._names.array.add(a),e.rules&&s.register(a,e.rules),T({next:({values:e,name:t})=>{if(t===d.current||!t){const t=p(e,d.current);Array.isArray(t)&&(u(t),l.current=t.map($))}},subject:s._subjects.array});const m=t.useCallback((e=>{f.current=!0,s._updateFieldArray(a,e)}),[s,a]);return t.useEffect((()=>{if(s._state.action=!1,z(a,s._names)&&s._subjects.state.next({...s._formState}),f.current&&(!G(s._options.mode).isOnSubmit||s._formState.isSubmitted))if(s._options.resolver)s._executeSchema([a]).then((e=>{const t=p(e.errors,a),r=p(s._formState.errors,a);(r?!t&&r.type||t&&(r.type!==t.type||r.message!==t.message):t&&t.type)&&(t?q(s._formState.errors,a,t):pe(s._formState.errors,a),s._subjects.state.next({errors:s._formState.errors}))}));else{const e=p(s._fields,a);e&&e._f&&le(e,s._formValues,s._options.criteriaMode===b.all,s._options.shouldUseNativeValidation,!0).then((e=>!O(e)&&s._subjects.state.next({errors:K(s._formState.errors,e,a)})))}s._subjects.values.next({name:a,values:{...s._formValues}}),s._names.focus&&J(s._fields,((e,t)=>{if(s._names.focus&&t.startsWith(s._names.focus)&&e.focus)return e.focus(),1})),s._names.focus="",s._updateValid(),f.current=!1}),[o,a,s]),t.useEffect((()=>(!p(s._formValues,a)&&s._updateFieldArray(a),()=>{(s._options.shouldUnregister||i)&&s.unregister(a)})),[a,s,n,i]),{swap:t.useCallback(((e,t)=>{const r=s._getFieldArray(a);ge(r,e,t),ge(l.current,e,t),m(r),u(r),s._updateFieldArray(a,r,ge,{argA:e,argB:t},!1)}),[m,a,s]),move:t.useCallback(((e,t)=>{const r=s._getFieldArray(a);me(r,e,t),me(l.current,e,t),m(r),u(r),s._updateFieldArray(a,r,me,{argA:e,argB:t},!1)}),[m,a,s]),prepend:t.useCallback(((e,t)=>{const r=U(y(e)),n=ye(s._getFieldArray(a),r);s._names.focus=H(a,0,t),l.current=ye(l.current,r.map($)),m(n),u(n),s._updateFieldArray(a,n,ye,{argA:de(e)})}),[m,a,s]),append:t.useCallback(((e,t)=>{const r=U(y(e)),n=ce(s._getFieldArray(a),r);s._names.focus=H(a,n.length-1,t),l.current=ce(l.current,r.map($)),m(n),u(n),s._updateFieldArray(a,n,ce,{argA:de(e)})}),[m,a,s]),remove:t.useCallback((e=>{const t=_e(s._getFieldArray(a),e);l.current=_e(l.current,e),m(t),u(t),s._updateFieldArray(a,t,_e,{argA:e})}),[m,a,s]),insert:t.useCallback(((e,t,r)=>{const n=U(y(t)),i=fe(s._getFieldArray(a),e,n);s._names.focus=H(a,e,r),l.current=fe(l.current,e,n.map($)),m(i),u(i),s._updateFieldArray(a,i,fe,{argA:e,argB:de(t)})}),[m,a,s]),update:t.useCallback(((e,t)=>{const r=y(t),n=ve(s._getFieldArray(a),e,r);l.current=[...n].map(((t,r)=>t&&r!==e?l.current[r]:$())),m(n),u([...n]),s._updateFieldArray(a,n,ve,{argA:e,argB:r},!0,!1)}),[m,a,s]),replace:t.useCallback((e=>{const t=U(y(e));l.current=t.map($),m([...t]),u([...t]),s._updateFieldArray(a,[...t],(e=>e),{},!0,!1)}),[m,a,s]),fields:t.useMemo((()=>o.map(((e,t)=>({...e,[n]:l.current[t]||$()})))),[o,n])}}var be=()=>{let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},Ae=e=>o(e)||!u(e);function xe(e,t){if(Ae(e)||Ae(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!xe(r,e):r!==e)return!1}}return!0}var Ve=e=>"select-multiple"===e.type,Fe=e=>ee(e)||n(e),Se=e=>Y(e)&&e.isConnected,we=e=>{for(const t in e)if(X(e[t]))return!0;return!1};function ke(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const s in e)Array.isArray(e[s])||l(e[s])&&!we(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ke(e[s],t[s])):o(e[s])||(t[s]=!0);return t}function De(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const a in e)Array.isArray(e[a])||l(e[a])&&!we(e[a])?g(t)||Ae(r[a])?r[a]=Array.isArray(e[a])?ke(e[a],[]):{...ke(e[a])}:De(e[a],o(t)?{}:t[a],r[a]):r[a]=!xe(e[a],t[a]);return r}var Ce=(e,t)=>De(e,t,ke(t)),Ee=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>g(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function Oe(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Q(t)?t.files:ee(t)?ie(e.refs).value:Ve(t)?[...t.selectedOptions].map((({value:e})=>e)):n(t)?ae(e.refs).value:Ee(g(t.value)?e.ref.value:t.value,e)}var je=(e,t,r,s)=>{const a={};for(const n of e){const e=p(t,n);e&&q(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},Ue=e=>g(e)?e:te(e)?e.source:l(e)?te(e.value)?e.value.source:e.value:e,Be=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Te(e,t,r){const s=p(e,r);if(s||R(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=p(t,s),i=p(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Le=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Ne=(e,t)=>!_(p(e,t)).length&&pe(e,t);const Re={mode:b.onSubmit,reValidateMode:b.onChange,shouldFocusError:!0};function Me(e={},t){let r,s={...Re,...e},a={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:s.errors||{},disabled:s.disabled||!1},u={},f=(l(s.defaultValues)||l(s.values))&&y(s.defaultValues||s.values)||{},A=s.shouldUnregister?{}:y(f),x={action:!1,mount:!1,watch:!1},V={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F=0;const S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={values:be(),array:be(),state:be()},k=G(s.mode),D=G(s.reValidateMode),C=s.criteriaMode===b.all,E=async e=>{if(S.isValid||e){const e=s.resolver?O((await M()).errors):await P(u,!0);e!==a.isValid&&w.state.next({isValid:e})}},j=e=>S.isValidating&&w.state.next({isValidating:e}),B=(e,t,r,s)=>{const a=p(u,e);if(a){const n=p(A,e,g(r)?p(f,e):r);g(n)||s&&s.defaultChecked||t?q(A,e,t?n:Oe(a._f)):$(e,n),x.mount&&E()}},T=(e,t,r,s,n)=>{let i=!1,o=!1;const l={name:e},c=!(!p(u,e)||!p(u,e)._f.disabled);if(!r||s){S.isDirty&&(o=a.isDirty,a.isDirty=l.isDirty=I(),i=o!==l.isDirty);const r=c||xe(p(f,e),t);o=!(c||!p(a.dirtyFields,e)),r||c?pe(a.dirtyFields,e):q(a.dirtyFields,e,!0),l.dirtyFields=a.dirtyFields,i=i||S.dirtyFields&&o!==!r}if(r){const t=p(a.touchedFields,e);t||(q(a.touchedFields,e,r),l.touchedFields=a.touchedFields,i=i||S.touchedFields&&t!==r)}return i&&n&&w.state.next(l),i?l:{}},R=(t,s,n,i)=>{const o=p(a.errors,t),u=S.isValid&&v(s)&&a.isValid!==s;var l;if(e.delayError&&n?(l=()=>((e,t)=>{q(a.errors,e,t),w.state.next({errors:a.errors})})(t,n),r=e=>{clearTimeout(F),F=setTimeout(l,e)},r(e.delayError)):(clearTimeout(F),r=null,n?q(a.errors,t,n):pe(a.errors,t)),(n?!xe(o,n):o)||!O(i)||u){const e={...i,...u&&v(s)?{isValid:s}:{},errors:a.errors,name:t};a={...a,...e},w.state.next(e)}j(!1)},M=async e=>s.resolver(A,s.context,je(e||V.mount,u,s.criteriaMode,s.shouldUseNativeValidation)),P=async(e,t,r={valid:!0})=>{for(const n in e){const i=e[n];if(i){const{_f:e,...n}=i;if(e){const n=V.array.has(e.name),o=await le(i,A,C,s.shouldUseNativeValidation&&!t,n);if(o[e.name]&&(r.valid=!1,t))break;!t&&(p(o,e.name)?n?K(a.errors,o,e.name):q(a.errors,e.name,o[e.name]):pe(a.errors,e.name))}n&&await P(n,t,r)}}return r.valid},I=(e,t)=>(e&&t&&q(A,e,t),!xe(se(),f)),W=(e,t,r)=>N(e,V,{...x.mount?A:g(t)?f:L(e)?{[e]:t}:t},r,t),$=(e,t,r={})=>{const s=p(u,e);let a=t;if(s){const r=s._f;r&&(!r.disabled&&q(A,e,Ee(t,r)),a=Y(r.ref)&&o(t)?"":t,Ve(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?n(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):Q(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||w.values.next({name:e,values:{...A}})))}(r.shouldDirty||r.shouldTouch)&&T(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&re(e)},H=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=p(u,n);!V.array.has(e)&&Ae(a)&&(!o||o._f)||i(a)?$(n,a,r):H(n,a,r)}},Z=(e,r,s={})=>{const n=p(u,e),i=V.array.has(e),l=y(r);q(A,e,l),i?(w.array.next({name:e,values:{...A}}),(S.isDirty||S.dirtyFields)&&s.shouldDirty&&w.state.next({name:e,dirtyFields:Ce(f,A),isDirty:I(e,l)})):!n||n._f||o(l)?$(e,l,s):H(e,l,s),z(e,V)&&w.state.next({...a}),w.values.next({name:e,values:{...A}}),!x.mount&&t()},ee=async e=>{const t=e.target;let n=t.name,i=!0;const o=p(u,n),l=e=>{i=Number.isNaN(e)||e===p(A,n,e)};if(o){let d,f;const m=t.type?Oe(o._f):c(e),y=e.type===h.BLUR||e.type===h.FOCUS_OUT,_=!Be(o._f)&&!s.resolver&&!p(a.errors,n)&&!o._f.deps||Le(y,p(a.touchedFields,n),a.isSubmitted,D,k),g=z(n,V,y);q(A,n,m),y?(o._f.onBlur&&o._f.onBlur(e),r&&r(0)):o._f.onChange&&o._f.onChange(e);const v=T(n,m,y,!1),b=!O(v)||g;if(!y&&w.values.next({name:n,type:e.type,values:{...A}}),_)return S.isValid&&E(),b&&w.state.next({name:n,...g?{}:v});if(!y&&g&&w.state.next({...a}),j(!0),s.resolver){const{errors:e}=await M([n]);if(l(m),i){const t=Te(a.errors,u,n),r=Te(e,u,t.name||n);d=r.error,n=r.name,f=O(e)}}else d=(await le(o,A,C,s.shouldUseNativeValidation))[n],l(m),i&&(d?f=!1:S.isValid&&(f=await P(u,!0)));i&&(o._f.deps&&re(o._f.deps),R(n,f,d,v))}},te=(e,t)=>{if(p(a.errors,t)&&e.focus)return e.focus(),1},re=async(e,t={})=>{let r,n;const i=U(e);if(j(!0),s.resolver){const t=await(async e=>{const{errors:t}=await M(e);if(e)for(const r of e){const e=p(t,r);e?q(a.errors,r,e):pe(a.errors,r)}else a.errors=t;return t})(g(e)?e:i);r=O(t),n=e?!i.some((e=>p(t,e))):r}else e?(n=(await Promise.all(i.map((async e=>{const t=p(u,e);return await P(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||a.isValid)&&E()):n=r=await P(u);return w.state.next({...!L(e)||S.isValid&&r!==a.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:a.errors,isValidating:!1}),t.shouldFocus&&!n&&J(u,te,e?i:V.mount),n},se=e=>{const t={...f,...x.mount?A:{}};return g(e)?t:L(e)?p(t,e):e.map((e=>p(t,e)))},ae=(e,t)=>({invalid:!!p((t||a).errors,e),isDirty:!!p((t||a).dirtyFields,e),isTouched:!!p((t||a).touchedFields,e),error:p((t||a).errors,e)}),ne=(e,t,r)=>{const s=(p(u,e,{_f:{}})._f||{}).ref;q(a.errors,e,{...t,ref:s}),w.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},ie=(e,t={})=>{for(const r of e?U(e):V.mount)V.mount.delete(r),V.array.delete(r),t.keepValue||(pe(u,r),pe(A,r)),!t.keepError&&pe(a.errors,r),!t.keepDirty&&pe(a.dirtyFields,r),!t.keepTouched&&pe(a.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&pe(f,r);w.values.next({values:{...A}}),w.state.next({...a,...t.keepDirty?{isDirty:I()}:{}}),!t.keepIsValid&&E()},oe=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(v(e)){const n=e?void 0:g(a)?Oe(r?r._f:p(s,t)._f):a;q(A,t,n),T(t,n,!1,!1,!0)}},ue=(e,t={})=>{let r=p(u,e);const a=v(t.disabled);return q(u,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),V.mount.add(e),r?oe({field:r,disabled:t.disabled,name:e,value:t.value}):B(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:Ue(t.min),max:Ue(t.max),minLength:Ue(t.minLength),maxLength:Ue(t.maxLength),pattern:Ue(t.pattern)}:{},name:e,onChange:ee,onBlur:ee,ref:a=>{if(a){ue(e,t),r=p(u,e);const s=g(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,n=Fe(s),i=r._f.refs||[];if(n?i.find((e=>e===s)):s===r._f.ref)return;q(u,e,{_f:{...r._f,...n?{refs:[...i.filter(Se),s,...Array.isArray(p(f,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),B(e,!1,void 0,s)}else r=p(u,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!d(V.array,e)||!x.action)&&V.unMount.add(e)}}},ce=()=>s.shouldFocusError&&J(u,te,V.mount),de=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let n=y(A);if(w.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await M();a.errors=e,n=t}else await P(u);pe(a.errors,"root"),O(a.errors)?(w.state.next({errors:{}}),await e(n,r)):(t&&await t({...a.errors},r),ce(),setTimeout(ce)),w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(a.errors),submitCount:a.submitCount+1,errors:a.errors})},fe=(r,s={})=>{const n=r?y(r):f,i=y(n),o=r&&!O(r)?i:f;if(s.keepDefaultValues||(f=n),!s.keepValues){if(s.keepDirtyValues)for(const e of V.mount)p(a.dirtyFields,e)?q(o,e,p(A,e)):Z(e,p(o,e));else{if(m&&g(r))for(const e of V.mount){const t=p(u,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Y(e)){const t=e.closest("form");if(t){t.reset();break}}}}u={}}A=e.shouldUnregister?s.keepDefaultValues?y(f):{}:y(o),w.array.next({values:{...o}}),w.values.next({values:{...o}})}V={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&t(),x.mount=!S.isValid||!!s.keepIsValid,x.watch=!!e.shouldUnregister,w.state.next({submitCount:s.keepSubmitCount?a.submitCount:0,isDirty:s.keepDirty?a.isDirty:!(!s.keepDefaultValues||xe(r,f)),isSubmitted:!!s.keepIsSubmitted&&a.isSubmitted,dirtyFields:s.keepDirtyValues?a.dirtyFields:s.keepDefaultValues&&r?Ce(f,r):{},touchedFields:s.keepTouched?a.touchedFields:{},errors:s.keepErrors?a.errors:{},isSubmitSuccessful:!!s.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},me=(e,t)=>fe(X(e)?e(A):e,t);return{control:{register:ue,unregister:ie,getFieldState:ae,handleSubmit:de,setError:ne,_executeSchema:M,_getWatch:W,_getDirty:I,_updateValid:E,_removeUnmounted:()=>{for(const e of V.unMount){const t=p(u,e);t&&(t._f.refs?t._f.refs.every((e=>!Se(e))):!Se(t._f.ref))&&ie(e)}V.unMount=new Set},_updateFieldArray:(e,t=[],r,s,n=!0,i=!0)=>{if(s&&r){if(x.action=!0,i&&Array.isArray(p(u,e))){const t=r(p(u,e),s.argA,s.argB);n&&q(u,e,t)}if(i&&Array.isArray(p(a.errors,e))){const t=r(p(a.errors,e),s.argA,s.argB);n&&q(a.errors,e,t),Ne(a.errors,e)}if(S.touchedFields&&i&&Array.isArray(p(a.touchedFields,e))){const t=r(p(a.touchedFields,e),s.argA,s.argB);n&&q(a.touchedFields,e,t)}S.dirtyFields&&(a.dirtyFields=Ce(f,A)),w.state.next({name:e,isDirty:I(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else q(A,e,t)},_updateDisabledField:oe,_getFieldArray:t=>_(p(x.mount?A:f,t,e.shouldUnregister?p(f,t,[]):[])),_reset:fe,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then((e=>{me(e,s.resetOptions),w.state.next({isLoading:!1})})),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{v(e)&&(w.state.next({disabled:e}),J(u,((t,r)=>{let s=e;const a=p(u,r);a&&v(a._f.disabled)&&(s||(s=a._f.disabled)),t.disabled=s}),0,!1))},_subjects:w,_proxyFormState:S,_setErrors:e=>{a.errors=e,w.state.next({errors:a.errors,isValid:!1})},get _fields(){return u},get _formValues(){return A},get _state(){return x},set _state(e){x=e},get _defaultValues(){return f},get _names(){return V},set _names(e){V=e},get _formState(){return a},set _formState(e){a=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:re,register:ue,handleSubmit:de,watch:(e,t)=>X(e)?w.values.subscribe({next:r=>e(W(void 0,t),r)}):W(e,t,!0),setValue:Z,getValues:se,reset:me,resetField:(e,t={})=>{p(u,e)&&(g(t.defaultValue)?Z(e,y(p(f,e))):(Z(e,t.defaultValue),q(f,e,y(t.defaultValue))),t.keepTouched||pe(a.touchedFields,e),t.keepDirty||(pe(a.dirtyFields,e),a.isDirty=t.defaultValue?I(e,y(p(f,e))):I()),t.keepError||(pe(a.errors,e),S.isValid&&E()),w.state.next({...a}))},clearErrors:e=>{e&&U(e).forEach((e=>pe(a.errors,e))),w.state.next({errors:e?a.errors:{}})},unregister:ie,setError:ne,setFocus:(e,t={})=>{const r=p(u,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ae}}function qe(e={}){const r=t.useRef(),s=t.useRef(),[a,n]=t.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Me(e,(()=>n((e=>({...e}))))),formState:a});const i=r.current.control;return i._options=e,T({subject:i._subjects.state,next:e=>{j(e,i._proxyFormState,i._updateFormState,!0)&&n({...i._formState})}}),t.useEffect((()=>i._disableForm(e.disabled)),[i,e.disabled]),t.useEffect((()=>{if(i._proxyFormState.isDirty){const e=i._getDirty();e!==a.isDirty&&i._subjects.state.next({isDirty:e})}}),[i,a.isDirty]),t.useEffect((()=>{e.values&&!xe(e.values,s.current)?(i._reset(e.values,i._options.resetOptions),s.current=e.values,n((e=>({...e})))):i._resetDefaultValues()}),[e.values,i]),t.useEffect((()=>{e.errors&&i._setErrors(e.errors)}),[e.errors,i]),t.useEffect((()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()})),r.current.formState=E(a,i),r.current}export{I as C,s as F,qe as a,he as b,r as f,a as u};