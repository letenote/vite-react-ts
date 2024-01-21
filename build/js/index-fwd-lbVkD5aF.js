import{l as r,k as e,as as a,s,a as t,f as i,at as o,r as n,b as l,_ as c,j as d,h,i as m}from"./vendor-fwd-1SGvIy31.js";function v(e){return r("MuiCircularProgress",e)}const f=e("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),k=["className","color","disableShrink","size","style","thickness","value","variant"];let u,p,S,g,x=r=>r;const y=44,w=a(u||(u=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=a(p||(p=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),C=s("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[a.variant],e[`color${t(a.color)}`]]}})((({ownerState:r,theme:e})=>i({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&o(S||(S=x`
      animation: ${0} 1.4s linear infinite;
    `),w))),P=s("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),D=s("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.circle,e[`circle${t(a.variant)}`],a.disableShrink&&e.circleDisableShrink]}})((({ownerState:r,theme:e})=>i({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&o(g||(g=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b))),M=n.forwardRef((function(r,e){const a=l({props:r,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:n=!1,size:f=40,style:u,thickness:p=3.6,value:S=0,variant:g="indeterminate"}=a,x=c(a,k),w=i({},a,{color:o,disableShrink:n,size:f,thickness:p,value:S,variant:g}),b=(r=>{const{classes:e,variant:a,color:s,disableShrink:i}=r,o={root:["root",a,`color${t(s)}`],svg:["svg"],circle:["circle",`circle${t(a)}`,i&&"circleDisableShrink"]};return m(o,v,e)})(w),M={},$={},j={};if("determinate"===g){const r=2*Math.PI*((y-p)/2);M.strokeDasharray=r.toFixed(3),j["aria-valuenow"]=Math.round(S),M.strokeDashoffset=`${((100-S)/100*r).toFixed(3)}px`,$.transform="rotate(-90deg)"}return d.jsx(C,i({className:h(b.root,s),style:i({width:f,height:f},$,u),ownerState:w,ref:e,role:"progressbar"},j,x,{children:d.jsx(P,{className:b.svg,ownerState:w,viewBox:"22 22 44 44",children:d.jsx(D,{className:b.circle,style:M,ownerState:w,cx:y,cy:y,r:(y-p)/2,fill:"none",strokeWidth:p})})}))}));export{f as circularProgressClasses,M as default,v as getCircularProgressUtilityClass};
