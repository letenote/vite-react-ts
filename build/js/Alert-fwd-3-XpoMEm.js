import{k as e,l as o,j as t,s as r,a,X as l,Y as s,f as n,r as i,b as c,_ as d,h as p,i as m}from"./vendor-fwd-1SGvIy31.js";import{c as u}from"./createSvgIcon-fwd-3znVHFND.js";import{C as v}from"./Close-fwd-KEUH1mo4.js";import{P as f}from"./Paper-fwd-WFaa4pXn.js";import g from"./index-fwd-v2U3PscQ.js";import"./index-fwd-8NRQb7QL.js";import"./TransitionGroupContext-fwd-AdrtyOFN.js";function h(e){return o("MuiAlert",e)}const x=e("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),C=u(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),A=u(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),j=u(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=u(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=r(f,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${a(t.color||t.severity)}`]]}})((({theme:e,ownerState:o})=>{const t="light"===e.palette.mode?l:s,r="light"===e.palette.mode?s:l,a=o.color||o.severity;return n({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===o.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:t(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:r(e.palette[a].light,.9),[`& .${x.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"outlined"===o.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:t(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${x.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:e.palette[a].main}},a&&"filled"===o.variant&&n({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText(e.palette[a].main)}))})),y=r("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),$=r("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),z=r("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),I={success:t.jsx(C,{fontSize:"inherit"}),warning:t.jsx(A,{fontSize:"inherit"}),error:t.jsx(j,{fontSize:"inherit"}),info:t.jsx(M,{fontSize:"inherit"})},L=i.forwardRef((function(e,o){var r,l,s,i,u,f;const x=c({props:e,name:"MuiAlert"}),{action:C,children:A,className:j,closeText:M="Close",color:L,components:b={},componentsProps:R={},icon:k,iconMapping:N=I,onClose:P,role:B="alert",severity:W="success",slotProps:H={},slots:E={},variant:O="standard"}=x,T=d(x,S),V=n({},x,{color:L,severity:W,variant:O}),F=(e=>{const{variant:o,color:t,severity:r,classes:l}=e,s={root:["root",`${o}${a(t||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return m(s,h,l)})(V),G=null!=(r=null!=(l=E.closeButton)?l:b.CloseButton)?r:g,Z=null!=(s=null!=(i=E.closeIcon)?i:b.CloseIcon)?s:v,q=null!=(u=H.closeButton)?u:R.closeButton,X=null!=(f=H.closeIcon)?f:R.closeIcon;return t.jsxs(w,n({role:B,elevation:0,ownerState:V,className:p(F.root,j),ref:o},T,{children:[!1!==k?t.jsx(y,{ownerState:V,className:F.icon,children:k||N[W]||I[W]}):null,t.jsx($,{ownerState:V,className:F.message,children:A}),null!=C?t.jsx(z,{ownerState:V,className:F.action,children:C}):null,null==C&&P?t.jsx(z,{ownerState:V,className:F.action,children:t.jsx(G,n({size:"small","aria-label":M,title:M,color:"inherit",onClick:P},q,{children:t.jsx(Z,n({fontSize:"small"},X))}))}):null]}))}));export{L as default};
