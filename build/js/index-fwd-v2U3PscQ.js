import{l as e,k as o,s as a,a as r,f as t,g as i,r as n,b as s,_ as l,j as d,h as c,i as p}from"./vendor-fwd-1SGvIy31.js";import{B as u}from"./index-fwd-8NRQb7QL.js";import"./TransitionGroupContext-fwd-AdrtyOFN.js";function g(o){return e("MuiIconButton",o)}const m=o("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=["edge","children","className","color","disabled","disableFocusRipple","size"],b=a(u,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,"default"!==a.color&&o[`color${r(a.color)}`],a.edge&&o[`edge${r(a.edge)}`],o[`size${r(a.size)}`]]}})((({theme:e,ownerState:o})=>t({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:i(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})),(({theme:e,ownerState:o})=>{var a;const r=null==(a=(e.vars||e).palette)?void 0:a[o.color];return t({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&t({color:null==r?void 0:r.main},!o.disableRipple&&{"&:hover":t({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:i(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${m.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),f=n.forwardRef((function(e,o){const a=s({props:e,name:"MuiIconButton"}),{edge:i=!1,children:n,className:u,color:m="default",disabled:f=!1,disableFocusRipple:h=!1,size:z="medium"}=a,R=l(a,v),y=t({},a,{edge:i,color:m,disabled:f,disableFocusRipple:h,size:z}),S=(e=>{const{classes:o,disabled:a,color:t,edge:i,size:n}=e,s={root:["root",a&&"disabled","default"!==t&&`color${r(t)}`,i&&`edge${r(i)}`,`size${r(n)}`]};return p(s,g,o)})(y);return d.jsx(b,t({className:c(S.root,u),centerRipple:!0,focusRipple:!h,disabled:f,ref:o,ownerState:y},R,{children:n}))}));export{f as default,g as getIconButtonUtilityClass,m as iconButtonClasses};