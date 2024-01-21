import{s as t,f as e,g as i,r,b as a,_ as n,j as o,h as l,i as s}from"./vendor-fwd-1SGvIy31.js";import{g as d}from"./dividerClasses-fwd-g7uA4vLh.js";const c=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=t("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:r})=>e({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:i(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>e({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:i})=>e({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}})),(({theme:t,ownerState:i})=>e({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}})),(({ownerState:t})=>e({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),g=t("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:i})=>e({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===i.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),p=r.forwardRef((function(t,i){const r=a({props:t,name:"MuiDivider"}),{absolute:p=!1,children:v,className:f,component:m=(v?"div":"hr"),flexItem:w=!1,light:b=!1,orientation:x="horizontal",role:u=("hr"!==m?"separator":void 0),textAlign:S="center",variant:A="fullWidth"}=r,R=n(r,c),C=e({},r,{absolute:p,component:m,flexItem:w,light:b,orientation:x,role:u,textAlign:S,variant:A}),I=(t=>{const{absolute:e,children:i,classes:r,flexItem:a,light:n,orientation:o,textAlign:l,variant:c}=t;return s({root:["root",e&&"absolute",c,n&&"light","vertical"===o&&"vertical",a&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},d,r)})(C);return o.jsx(h,e({as:m,className:l(I.root,f),role:u,ref:i,ownerState:C},R,{children:v?o.jsx(g,{className:I.wrapper,ownerState:C,children:v}):null}))}));p.muiSkipListHighlight=!0;const v=p;export{v as D};