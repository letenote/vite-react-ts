import{l as o,k as e,s as i,a as n,r as l,b as r,_ as t,f as a,j as s,h as c,i as u}from"./vendor-fwd-1SGvIy31.js";function d(e){return o("MuiSvgIcon",e)}e("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=i("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.root,"inherit"!==i.color&&e[`color${n(i.color)}`],e[`fontSize${n(i.fontSize)}`]]}})((({theme:o,ownerState:e})=>{var i,n,l,r,t,a,s,c,u,d,m,v,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(i=o.transitions)||null==(n=i.create)?void 0:n.call(i,"fill",{duration:null==(l=o.transitions)||null==(l=l.duration)?void 0:l.shorter}),fontSize:{inherit:"inherit",small:(null==(r=o.typography)||null==(t=r.pxToRem)?void 0:t.call(r,20))||"1.25rem",medium:(null==(a=o.typography)||null==(s=a.pxToRem)?void 0:s.call(a,24))||"1.5rem",large:(null==(c=o.typography)||null==(u=c.pxToRem)?void 0:u.call(c,35))||"2.1875rem"}[e.fontSize],color:null!=(d=null==(m=(o.vars||o).palette)||null==(m=m[e.color])?void 0:m.main)?d:{action:null==(v=(o.vars||o).palette)||null==(v=v.action)?void 0:v.active,disabled:null==(h=(o.vars||o).palette)||null==(h=h.action)?void 0:h.disabled,inherit:void 0}[e.color]}})),h=l.forwardRef((function(o,e){const i=r({props:o,name:"MuiSvgIcon"}),{children:h,className:f,color:S="inherit",component:p="svg",fontSize:g="medium",htmlColor:x,inheritViewBox:z=!1,titleAccess:w,viewBox:y="0 0 24 24"}=i,B=t(i,m),I=l.isValidElement(h)&&"svg"===h.type,R=a({},i,{color:S,component:p,fontSize:g,instanceFontSize:o.fontSize,inheritViewBox:z,viewBox:y,hasSvgAsChild:I}),b={};z||(b.viewBox=y);const N=(o=>{const{color:e,fontSize:i,classes:l}=o,r={root:["root","inherit"!==e&&`color${n(e)}`,`fontSize${n(i)}`]};return u(r,d,l)})(R);return s.jsxs(v,a({as:p,className:c(N.root,f),focusable:"false",color:x,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:e},b,B,I&&h.props,{ownerState:R,children:[I?h.props.children:h,w?s.jsx("title",{children:w}):null]}))}));function f(o,e){function i(i,n){return s.jsx(h,a({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return i.muiName=h.muiName,l.memo(l.forwardRef(i))}h.muiName="SvgIcon";export{h as S,f as c};