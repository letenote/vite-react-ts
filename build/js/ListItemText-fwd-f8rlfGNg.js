import{s as r,f as s,r as e,b as a,_ as o,j as n,h as t,i}from"./vendor-fwd-1SGvIy31.js";import{a as y}from"./List-fwd-B3qUSFQa.js";import{l as p,g as d}from"./listItemTextClasses-fwd-v4LoqRQE.js";import m from"./index-fwd-hPOcf5d2.js";const l=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],c=r("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[{[`& .${p.primary}`]:s.primary},{[`& .${p.secondary}`]:s.secondary},s.root,e.inset&&s.inset,e.primary&&e.secondary&&s.multiline,e.dense&&s.dense]}})((({ownerState:r})=>s({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},r.primary&&r.secondary&&{marginTop:6,marginBottom:6},r.inset&&{paddingLeft:56}))),f=e.forwardRef((function(r,p){const f=a({props:r,name:"MuiListItemText"}),{children:h,className:u,disableTypography:g=!1,inset:T=!1,primary:x,primaryTypographyProps:b,secondary:j,secondaryTypographyProps:v}=f,w=o(f,l),{dense:L}=e.useContext(y);let N=null!=x?x:h,P=j;const R=s({},f,{disableTypography:g,inset:T,primary:!!N,secondary:!!P,dense:L}),I=(r=>{const{classes:s,inset:e,primary:a,secondary:o,dense:n}=r;return i({root:["root",e&&"inset",n&&"dense",a&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},d,s)})(R);return null==N||N.type===m||g||(N=n.jsx(m,s({variant:L?"body2":"body1",className:I.primary,component:null!=b&&b.variant?void 0:"span",display:"block"},b,{children:N}))),null==P||P.type===m||g||(P=n.jsx(m,s({variant:"body2",className:I.secondary,color:"text.secondary",display:"block"},v,{children:P}))),n.jsxs(c,s({className:t(I.root,u),ownerState:R,ref:p},w,{children:[N,P]}))}));export{f as L};
