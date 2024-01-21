import{j as e,R as t,d as a,r as s,z as i,$ as r,u as o,L as n}from"./vendor-fwd-1SGvIy31.js";import{D as d,s as l,n as m,u as p,E as c,G as x}from"./main-fwd--n1B72RI.js";import{M as u,T as f}from"./index-fwd-x8ldU6o3.js";import{g}from"./getPayments-fwd-yPsLGiWd.js";import{d as j}from"./Close-fwd-cAl8Tvfj.js";import{d as h}from"./Work-fwd-uyr6dy_C.js";import{i as v}from"./interopRequireDefault-fwd-TQpPSNg9.js";import{r as y}from"./createSvgIcon-fwd-C5HoRyYL.js";import{d as b,a as w}from"./QueryBuilderRounded-fwd-2BtULDBg.js";import{d as T}from"./Settings-fwd-veLLdDGB.js";import{h as P}from"./moment-fwd-Q1JHmZVX.js";import{C as I}from"./ComponentFormType.enum-fwd-9JVL8E6k.js";import{T as S}from"./TrainingStatusType.enum-fwd-N0jD9jO9.js";import{a as C}from"./index.esm-fwd-rj9UIJ_I.js";import{M as D}from"./index-fwd-x_aeOfk5.js";import{A as B,a as M}from"./API-fwd-wSBNwRC-.js";import{b as E}from"./index-fwd-lWyokz70.js";import{a as N,b as W,c as k}from"./DialogContent-fwd-CYcOnUyi.js";import{D as A}from"./DialogTitle-fwd-BhLgXYUL.js";import Y from"./index-fwd-v2U3PscQ.js";import F from"./index-fwd-hPOcf5d2.js";import{b as z}from"./index-fwd-YZzHoVcr.js";import q from"./index-fwd-QlVXGDcN.js";import L from"./index-fwd-goasdrlS.js";import O from"./index-fwd-zt72GgeW.js";import _ from"./index-fwd-fyRmXZir.js";import{L as R}from"./ListItem-fwd-iX4GRk4M.js";import{L as U}from"./ListItemAvatar-fwd-_WncWLnl.js";import{L as V}from"./ListItemText-fwd-f8rlfGNg.js";import{D as J}from"./Divider-fwd-L0kvT4D9.js";import{C as X}from"./Chip-fwd-PLmggBsV.js";import{S as H}from"./Stack-fwd-_b9icarT.js";import{P as G,a as $}from"./MoreVert-fwd-WWrhY7aJ.js";import"./index-fwd-LcBzpfNx.js";import"./Visibility-fwd-Vs-P4HLI.js";import"./Permission.enum-fwd-pLKPg_gz.js";import"./BudgetStatus.enum-fwd-ooaJayoQ.js";import"./Menu-fwd-Vl9pMXPK.js";import"./Modal-fwd-p5WxUrg9.js";import"./utils-fwd-Aa8Nbi8J.js";import"./TransitionGroupContext-fwd-AdrtyOFN.js";import"./useSlotProps-fwd-4TF0dLOI.js";import"./Portal-fwd-EmXNK1q8.js";import"./Paper-fwd-WFaa4pXn.js";import"./Grow-fwd-0-97KQP6.js";import"./List-fwd-B3qUSFQa.js";import"./MenuItem-fwd-JVQWDuju.js";import"./index-fwd-8NRQb7QL.js";import"./listItemIconClasses-fwd-R0gCvGgm.js";import"./dividerClasses-fwd-g7uA4vLh.js";import"./listItemTextClasses-fwd-v4LoqRQE.js";import"./Avatar-fwd-DjoP233w.js";import"./createSvgIcon-fwd-3znVHFND.js";import"./Button-fwd-V0oP7Gqc.js";import"./index-fwd-lbVkD5aF.js";var K={},Q=v;Object.defineProperty(K,"__esModule",{value:!0});var Z=K.default=void 0,ee=Q(y()),te=e;Z=K.default=(0,ee.default)((0,te.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People");const ae={invoice:{id:"invoice",name:"invoice",fullWidth:!0,label:"Invoice",placeholder:"Invoice",required:!0,errorMessage:"Invoice required",value:"",disabled:!0,type:"text",componentType:I.INPUT_TEXT,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]},cost:{id:"cost",name:"cost",fullWidth:!0,label:"Cost",placeholder:"Cost",required:!0,errorMessage:"cost required",value:"",disabled:!0,type:"text",componentType:I.INPUT_TEXT,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]},status:{id:"status",name:"status",fullWidth:!0,label:"Status",placeholder:"Status",required:!0,errorMessage:"Status required",value:S.PAID,disabled:!0,type:"select",componentType:I.INPUT_TEXT,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]},notes:{id:"notes",name:"notes",fullWidth:!0,label:"Payment notes",placeholder:"Payment notes",required:!0,errorMessage:"payment notes required",value:"",disabled:!1,type:"text",componentType:I.INPUT_TEXT_AREA,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]}},se=t.memo((t=>{const i=m(),r=JSON.parse(JSON.stringify(ae)),o=C({defaultValues:async()=>(r.invoice.value=t.data.invoice,r.cost.value=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(Number(t.data.cost)),r)}),n=a(),p=E(n.breakpoints.down("md")),{register:c,formState:x,handleSubmit:u,control:f}=o,{errors:g}=x,[h,v]=s.useState({loading:!1});return e.jsxs(N,{component:"form",id:"training-create-page",onSubmit:u((e=>{v({loading:!0});const a={id:t.data.id,isPaid:!0,notes:e.notes.value.toString()};var s;i((s={data:a,successCB:()=>{v({loading:!1}),t.closeEvent()},failedCB:()=>{v({loading:!1})}},async e=>{var t;try{const{id:t="",isPaid:a=!1,notes:i=""}=s.data;await new Promise((e=>setTimeout(e,500)));const r=await B({method:"post",url:"/v1/payments/update",payload:{id:t,isPaid:a,notes:i}});return console.log("response",{response:r,param:s}),e(d({notes:i,id:t,isPaid:a,date:r.data.data.date})),e(l({open:!0,autoHideDuration:3e3,severity:"success",message:"Payment updated"})),s.successCB()}catch(a){return M.isAxiosError(a)&&a.response&&(console.log("errr",(null==(t=a.response)?void 0:t.data).error),e(l({open:!0,autoHideDuration:3e3,severity:"warning",message:a.message}))),s.failedCB()}}))}),(e=>{console.log("onError",{_errors:e,form:o}),window.scrollTo({top:0,left:0,behavior:"smooth"}),i(l({open:!0,autoHideDuration:3e3,severity:"warning",message:"Please make sure all forms to be filled"}))})),fullScreen:p,fullWidth:!0,maxWidth:"sm","aria-labelledby":"payment-create-dialog",disableEscapeKeyDown:!0,open:t.open,children:[e.jsx(A,{sx:{m:0,p:2},id:"customized-dialog-title",children:"Payment Update"}),e.jsx(Y,{"aria-label":"close",onClick:t.closeEvent,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:e.jsx(j,{})}),e.jsxs(W,{dividers:!0,sx:{p:"34px 32px 45px",height:"720px"},children:[e.jsx(F,{variant:"subtitle1",gutterBottom:!0,sx:{textAlign:"left",mb:1},children:"Payment Information"}),Object.keys(r).map((t=>{var a,s;const i=t,o=`${r[i].id}.value`;return r[i].componentType===I.INPUT_TEXT_AREA?e.jsx(D,{name:r[i].name,registerField:o,id:r[i].id,label:r[i].label,required:r[i].required,control:f,error:!!g[i],helperText:r[i].errorMessage,value:r[i].value.toString(),style:{marginLeft:0,width:"100%"},options:r[i].options,disabled:r[i].disabled},i):e.jsx(z,{margin:"normal",fullWidth:r[i].fullWidth,label:r[i].label,type:"text",autoFocus:r[i].autoFocus,autoComplete:r[i].autoComplete,defaultValue:r[i].value,...c(o,{required:{value:r[i].required,message:r[i].errorMessage},disabled:r[i].disabled,pattern:{value:r[i].validate.pattern.value,message:r[i].validate.pattern.message}}),error:!!g[i],helperText:null==(s=null==(a=g[i])?void 0:a.value)?void 0:s.message},i)}))]}),e.jsxs(k,{children:[e.jsx(q,{sx:{mr:1},children:e.jsx(L,{loading:h.loading,disabled:h.loading,variant:"outlined",size:"medium",onClick:t.closeEvent,children:e.jsx(F,{variant:"button",display:"block",gutterBottom:!0,children:"Close"})})}),e.jsx(L,{loading:h.loading,disabled:h.loading,variant:"contained",size:"medium",type:"submit",children:e.jsx(F,{variant:"button",display:"block",gutterBottom:!0,children:"Already Paid"})})]})]})}),((e,t)=>JSON.stringify(e)===JSON.stringify(t))),ie=t.memo((o=>{const{user:n}=p((e=>e.settings)),{payment:d}=p((e=>e.pages)),l=a(),m=E(l.breakpoints.down("md")),[c,x]=s.useState({open:!1,loading:!1});return e.jsxs(N,{id:"payment-create-dialog",fullScreen:m,fullWidth:!0,maxWidth:"sm","aria-labelledby":"payment-create-dialog",disableEscapeKeyDown:!0,open:o.open,children:[e.jsx(A,{sx:{m:0,p:2},id:"customized-dialog-title",children:"Payment Detail"}),e.jsx(Y,{"aria-label":"close",onClick:o.closeEvent,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:e.jsx(j,{})}),e.jsx(W,{dividers:!0,sx:{pb:"45px",p:"24px 32px"},children:d.detail.loading?e.jsx(q,{sx:{height:"650px"},children:e.jsx(O,{message:"loading.."})}):e.jsxs(q,{sx:{mt:1},children:[e.jsx(F,{variant:"subtitle1",gutterBottom:!0,sx:{mt:1,mb:2,fontWeight:900},children:"Vendor:"}),e.jsxs(_,{container:!0,spacing:2,sx:{p:3},children:[e.jsx(_,{xs:12,md:4,item:!0,sx:{display:"flex",justifyContent:"center"},children:e.jsxs(R,{alignItems:"flex-start",sx:{p:0},children:[e.jsx(U,{sx:{marginRight:"10px",position:"relative"},children:e.jsx(h,{sx:{fontSize:40,color:"grey"}})}),e.jsx(V,{primary:e.jsx(t.Fragment,{children:e.jsx(F,{variant:"body1",gutterBottom:!0,children:o.data.vendor.name})}),secondary:e.jsx(t.Fragment,{children:e.jsx("span",{style:{fontSize:"12px",marginTop:"-5px"},children:o.data.vendor.vendorType.name})})})]})}),e.jsx(J,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{m:"0px 20px",display:{xs:"none",md:"block"}}}),e.jsx(_,{xs:12,md:3,item:!0,sx:{display:"flex",justifyContent:"center"},children:e.jsx(R,{alignItems:"flex-start",sx:{p:0},children:e.jsx(V,{primary:e.jsx(t.Fragment,{children:e.jsx(F,{variant:"body1",gutterBottom:!0,children:"Cost"})}),secondary:e.jsx(t.Fragment,{children:e.jsx("span",{style:{fontSize:"12px",marginTop:"-5px",fontWeight:900},children:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(Number(o.data.cost))})})})})}),e.jsx(J,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{m:"0px 20px",display:{xs:"none",md:"block"}}}),e.jsx(_,{xs:12,md:3,item:!0,sx:{display:"flex",justifyContent:"center"},children:e.jsx(R,{alignItems:"flex-start",sx:{p:0},children:e.jsx(V,{primary:e.jsx(t.Fragment,{children:e.jsx(F,{variant:"body1",gutterBottom:!0,children:"Status"})}),secondary:e.jsxs("span",{style:{display:"flex",alignItems:"center",marginTop:.8},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:900,color:o.data.isPaid?i[500]:r[500]},children:o.data.isPaid?"Paid":"Unpaid"}),o.data.isPaid&&null!==o.data.date&&e.jsxs("span",{style:{fontSize:"12px",marginLeft:"5px"},children:["at"," ",e.jsxs("span",{style:{fontSize:"10px",fontWeight:900},children:[P(new Date(o.data.date)).format("DD MMM YYYY"),"."]})]}),n.permissions.includes("payment/update")&&!o.data.isPaid&&e.jsx(Y,{"aria-label":"delete",size:"small",sx:{ml:1,mt:0},onClick:()=>{x((e=>({...e,open:!0})))},children:e.jsx(T,{fontSize:"inherit"})})]})})})})]}),e.jsx(J,{variant:"middle",sx:{mt:1,mb:1,ml:0,mr:0}}),e.jsx(F,{variant:"subtitle1",gutterBottom:!0,sx:{mt:2,mb:2,fontWeight:900},children:"Invoice:"}),e.jsx(F,{variant:"body2",gutterBottom:!0,sx:{mt:-2,mb:2},children:o.data.invoice}),o.data.isPaid&&""!==o.data.notes&&e.jsxs(t.Fragment,{children:[e.jsx(J,{variant:"middle",sx:{mt:1,mb:1,ml:0,mr:0}}),e.jsx(F,{variant:"subtitle1",gutterBottom:!0,sx:{mt:2,mb:2,fontWeight:900},children:"Payment Notes:"}),e.jsx(F,{variant:"body2",gutterBottom:!0,sx:{mt:-2,mb:2},children:o.data.notes})]}),e.jsx(J,{variant:"middle",sx:{mt:1,mb:1,ml:0,mr:0}}),e.jsx(F,{variant:"subtitle1",gutterBottom:!0,sx:{mt:2,mb:2,fontWeight:900},children:"Training:"}),e.jsxs(q,{children:[e.jsx(F,{variant:"h5",gutterBottom:!0,sx:{fontWeight:900},children:o.data.training.name}),e.jsxs(F,{variant:"caption",gutterBottom:!0,sx:{mb:4},children:["Created by, ",o.data.training.createdBy.name," (",o.data.training.createdBy.departement.name,") at"," ",P(o.data.createdAt).format("DD MMM YYYY"),"."]}),e.jsx(F,{variant:"subtitle1",gutterBottom:!0,sx:{mt:2,mb:1,fontWeight:900},children:"Objective:"}),e.jsx(F,{variant:"body2",gutterBottom:!0,children:o.data.training.objective}),e.jsxs(q,{sx:{mt:4,display:"flex",alignItems:{xs:"start",md:"center"},flexDirection:{xs:"column",md:"row"}},children:[e.jsxs(q,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx(Z,{sx:{color:"grey",width:"18px",mr:1}}),e.jsxs(F,{variant:"body2",gutterBottom:!0,children:[o.data.training.participants.length," Participants."]})]}),e.jsxs(q,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx(b,{sx:{color:"grey",width:"18px",ml:{xs:0,md:2},mr:1}}),e.jsxs(F,{variant:"body2",gutterBottom:!0,children:[o.data.training.duration," Hours."]})]}),e.jsxs(q,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx(w,{sx:{color:"grey",width:"18px",ml:{xs:0,md:2},mr:1}}),e.jsxs(F,{variant:"body2",gutterBottom:!0,children:[P(new Date(o.data.training.startDate)).format("DD/MM/YYYY")," ","-"," ",P(new Date(o.data.training.endDate)).format("DD/MM/YYYY")]})]})]}),e.jsx(X,{size:"small",label:o.data.training.trainingType.name,variant:"outlined",sx:{mt:2}})]})]})}),e.jsx(k,{children:e.jsx(L,{loading:!1,disabled:!1,variant:"outlined",size:"medium",onClick:o.closeEvent,children:e.jsx(F,{variant:"button",display:"block",gutterBottom:!0,children:"Close"})})}),c.open&&e.jsx(se,{open:c.open,data:o.data,closeEvent:()=>{x((e=>({...e,open:!1})))}})]})}),((e,t)=>JSON.stringify(e)===JSON.stringify(t))),re=t.memo((()=>{const a=m(),{payment:i}=p((e=>e.pages)),{user:r}=p((e=>e.settings)),d=o(),j=new URLSearchParams(d.search),h=parseInt(j.get("page")||"1",10);s.useEffect((()=>{a(g({page:h}))}),[a,h]);const[v,y]=s.useState({open:!1,listIndex:0}),b=e=>{var t;y({open:!0,listIndex:e}),a((t={data:i.list[e]},async e=>{var a;try{e(c({loading:!0})),e(x({data:t.data})),await new Promise((e=>setTimeout(e,1e3))),e(c({loading:!1}))}catch(s){M.isAxiosError(s)&&s.response&&(console.log("errr",(null==(a=s.response)?void 0:a.data).error),e(l({open:!0,autoHideDuration:3e3,severity:"warning",message:s.message})))}}))};return e.jsxs(t.Fragment,{children:[e.jsx(u,{impl:f.PAYMENT_PAGE,headers:["Vendor Name","Type","Status","Created At","Cost"],getValue:["vendor.name","vendor.vendorType.name","isPaid","createdAt","cost"],datas:i.list,loading:i.listLoading,useAction:!0,action:{view:{use:r.permissions.includes("payment/read"),onClick:e=>b(e)},edit:{use:!1,onClick:()=>{}}}}),e.jsx(H,{spacing:2,sx:{alignItems:"center",mt:3},children:e.jsx(G,{page:h,count:i.totalPage,onChange:(e,t)=>{a(g({page:t}))},renderItem:t=>e.jsx($,{component:n,to:"/payment"+(1===t.page?"":`?page=${t.page}`),...t})})}),v.open&&e.jsx(ie,{open:v.open,closeEvent:()=>y({open:!1,listIndex:0}),data:i.detail.data})]})}),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));export{re as default};
