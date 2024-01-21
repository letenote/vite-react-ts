import{r as a,t as e,s as o,v as n,w as r,x as i,y as s,z as t,A as l,B as d,C as m,_ as g,n as u,u as p}from"./main-fwd--n1B72RI.js";import{r as v,R as c,j as f}from"./vendor-fwd-1SGvIy31.js";import{M as x}from"./index-fwd-Eq8uD1Os.js";import{A as w,a as y}from"./API-fwd-wSBNwRC-.js";import{C as j}from"./Container-fwd--GwYqIzP.js";import h from"./index-fwd-lbVkD5aF.js";import"./interopRequireDefault-fwd-TQpPSNg9.js";import"./createSvgIcon-fwd-C5HoRyYL.js";import"./createSvgIcon-fwd-3znVHFND.js";import"./index-fwd-QlVXGDcN.js";import"./index-fwd-v2U3PscQ.js";import"./index-fwd-8NRQb7QL.js";import"./TransitionGroupContext-fwd-AdrtyOFN.js";import"./index-fwd-hPOcf5d2.js";const _=v.lazy((()=>g((()=>import("./Index-fwd-B0NBbt1q.js")),__vite__mapDeps([0,1,2,3])))),T=v.lazy((()=>g((()=>import("./index-fwd-fyRmXZir.js")),__vite__mapDeps([4,1])))),E=v.lazy((()=>g((()=>import("./SimpleAnalyticCard-fwd-vbsatjou.js")),__vite__mapDeps([5,1,6,7,3,8,9,2])))),A=v.lazy((()=>g((()=>import("./PieChartCard-fwd-SdIPIBtY.js")),__vite__mapDeps([10,1,6,7,3,8,9,2,11,12,13,14,15,16,17])))),P=v.lazy((()=>g((()=>import("./BarChartCard-fwd-Qdx6L634.js")),__vite__mapDeps([18,1,6,7,3,8,9,2,11,12,13,14])))),b=c.memo((()=>{const g=u(),{monitoring:c}=p((a=>a.pages));return v.useEffect((()=>{g((async n=>{var r,i,s,t,l,d,m,g,u;try{n(a({loading:!0}));const o=await w({method:"get",url:"/v1/monitorings/gender",payload:{}});n(e({data:{male:{value:(null==(t=null==(s=null==(i=null==(r=o.data)?void 0:r.data)?void 0:i.user)?void 0:s.count)?void 0:t.male)??0},female:{value:(null==(g=null==(m=null==(d=null==(l=o.data)?void 0:l.data)?void 0:d.user)?void 0:m.count)?void 0:g.female)??0}}})),await new Promise((a=>setTimeout(a,500))),n(a({loading:!1}))}catch(p){y.isAxiosError(p)&&p.response&&(console.log("errr",(null==(u=p.response)?void 0:u.data).error),n(o({open:!0,autoHideDuration:3e3,severity:"warning",message:p.message})))}})),g((async a=>{var e,i,s,t;try{a(n({loading:!0}));const o=await w({method:"get",url:"/v1/monitorings/total-spend",payload:{}});console.log("response",{response:o}),a(r({data:{value:(null==(s=null==(i=null==(e=o.data)?void 0:e.data)?void 0:i.payment)?void 0:s.totalSpend)??"0"}})),await new Promise((a=>setTimeout(a,500))),a(n({loading:!1}))}catch(l){y.isAxiosError(l)&&l.response&&(console.log("errr",(null==(t=l.response)?void 0:t.data).error),a(o({open:!0,autoHideDuration:3e3,severity:"warning",message:l.message})))}})),g((async a=>{var e,n,r,t,l;try{a(i({loading:!0}));const o=await w({method:"get",url:"/v1/monitorings/employee-trained",payload:{}});a(s({data:{value:(null==(t=null==(r=null==(n=null==(e=o.data)?void 0:e.data)?void 0:n.user)?void 0:r.count)?void 0:t.employeeTrained)??"0"}})),await new Promise((a=>setTimeout(a,500))),a(i({loading:!1}))}catch(d){y.isAxiosError(d)&&d.response&&(console.log("errr",(null==(l=d.response)?void 0:l.data).error),a(o({open:!0,autoHideDuration:3e3,severity:"warning",message:d.message})))}})),g((async a=>{var e,n,r,i;try{a(t({loading:!0}));const o=await w({method:"get",url:"/v1/monitorings/training-hours",payload:{}});console.log("response:getTrainingHoursMonitoring",{response:o}),a(l({data:{value:(null==(r=null==(n=null==(e=o.data)?void 0:e.data)?void 0:n.training)?void 0:r.hours)??0}})),await new Promise((a=>setTimeout(a,500))),a(t({loading:!1}))}catch(s){y.isAxiosError(s)&&s.response&&(console.log("errr",(null==(i=s.response)?void 0:i.data).error),a(o({open:!0,autoHideDuration:3e3,severity:"warning",message:s.message})))}})),g((async a=>{var e,n,r,i,s;try{a(d({loading:!0}));const o=await w({method:"post",url:"/v1/monitorings/total-training",payload:{year:"2024"}});a(m({data:{value:(null==(i=null==(r=null==(n=null==(e=o.data)?void 0:e.data)?void 0:n.training)?void 0:r.count)?void 0:i.inYear)??[0,0,0,0,0,0,0,0,0,0,0,0]}})),await new Promise((a=>setTimeout(a,500))),a(d({loading:!1}))}catch(t){y.isAxiosError(t)&&t.response&&(console.log("errr",(null==(s=t.response)?void 0:s.data).error),a(o({open:!0,autoHideDuration:3e3,severity:"warning",message:t.message})))}}))}),[g]),f.jsxs(j,{sx:{pt:3,minHeight:"90vh",display:"flex",flexDirection:"column"},maxWidth:!1,children:[f.jsx(x,{title:"Monitoring",backNavigate:"dashboard"}),f.jsxs(v.Suspense,{fallback:f.jsx(h,{color:"primary",style:{marginTop:"50px"}}),children:[f.jsx(T,{container:!0,spacing:2,children:[c.spend,c.employeeTrained,c.trainingHours].map(((a,e)=>f.jsx(T,{item:!0,xs:12,md:4,sx:{pl:0},children:f.jsx(E,{loading:a.loading,label:a.label,value:a.value,suffix:a.suffix,prefix:a.prefix})},e)))}),f.jsxs(T,{container:!0,spacing:2,sx:{mt:1},children:[f.jsx(T,{item:!0,xs:12,md:9,sx:{pl:0},children:f.jsx(P,{loading:c.totalTrainingPerMonth.loading,label:c.totalTrainingPerMonth.label,data:c.totalTrainingPerMonth.value})}),f.jsx(T,{item:!0,xs:12,md:3,style:{paddingLeft:"8px",marginTop:"8px"},children:f.jsx(A,{loading:c.gender.loading,label:c.gender.label,data:[{id:c.gender.data.female.id,value:c.gender.data.female.value,label:c.gender.data.female.label,color:c.gender.data.female.color},{id:c.gender.data.male.id,value:c.gender.data.male.value,label:c.gender.data.male.label,color:c.gender.data.male.color}]})})]}),f.jsx(_,{})]})]})}),((a,e)=>JSON.stringify(a)===JSON.stringify(e)));export{b as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/Index-fwd-B0NBbt1q.js","js/vendor-fwd-1SGvIy31.js","js/index-fwd-QlVXGDcN.js","js/index-fwd-hPOcf5d2.js","js/index-fwd-fyRmXZir.js","js/SimpleAnalyticCard-fwd-vbsatjou.js","js/index-fwd-zt72GgeW.js","js/index-fwd-lbVkD5aF.js","js/CardContent-fwd-w9gbeYrB.js","js/Paper-fwd-WFaa4pXn.js","js/PieChartCard-fwd-SdIPIBtY.js","js/useInteractionItemProps-fwd-NQTXOW56.js","js/useSlotProps-fwd-4TF0dLOI.js","js/Popper-fwd-JYIUw6NP.js","js/Portal-fwd-EmXNK1q8.js","js/index-fwd-lWyokz70.js","js/main-fwd--n1B72RI.js","assets/main-fwd-iHApVwav.css","js/BarChartCard-fwd-Qdx6L634.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
