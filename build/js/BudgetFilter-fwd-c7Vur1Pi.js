import{R as e,u as t,j as a}from"./vendor-fwd-1SGvIy31.js";import{C as r}from"./ComponentFormType.enum-fwd-9JVL8E6k.js";import{B as s}from"./BudgetStatus.enum-fwd-ooaJayoQ.js";import{a as o}from"./index.esm-fwd-rj9UIJ_I.js";import{S as i}from"./index-fwd-w_QQ1xSL.js";import{D as l}from"./index-fwd-mRdUEPmm.js";import{n as d,u as m}from"./main-fwd--n1B72RI.js";import{g as n}from"./getBudgets-fwd-KGb_xtEF.js";import{R as u}from"./Permission.enum-fwd-pLKPg_gz.js";import p from"./index-fwd-QlVXGDcN.js";import{b as f}from"./index-fwd-YZzHoVcr.js";import g from"./index-fwd-goasdrlS.js";import j from"./index-fwd-hPOcf5d2.js";import"./MenuItem-fwd-JVQWDuju.js";import"./List-fwd-B3qUSFQa.js";import"./index-fwd-8NRQb7QL.js";import"./TransitionGroupContext-fwd-AdrtyOFN.js";import"./listItemIconClasses-fwd-R0gCvGgm.js";import"./dividerClasses-fwd-g7uA4vLh.js";import"./listItemTextClasses-fwd-v4LoqRQE.js";import"./index-fwd-lWyokz70.js";import"./Button-fwd-V0oP7Gqc.js";import"./createSvgIcon-fwd-3znVHFND.js";import"./index-fwd-v2U3PscQ.js";import"./useSlotProps-fwd-4TF0dLOI.js";import"./utils-fwd-Aa8Nbi8J.js";import"./Modal-fwd-p5WxUrg9.js";import"./Portal-fwd-EmXNK1q8.js";import"./Stack-fwd-_b9icarT.js";import"./DialogContent-fwd-CYcOnUyi.js";import"./Paper-fwd-WFaa4pXn.js";import"./ListItem-fwd-iX4GRk4M.js";import"./Chip-fwd-PLmggBsV.js";import"./Popper-fwd-JYIUw6NP.js";import"./Grow-fwd-0-97KQP6.js";import"./API-fwd-wSBNwRC-.js";import"./Menu-fwd-Vl9pMXPK.js";import"./interopRequireDefault-fwd-TQpPSNg9.js";import"./index-fwd-lbVkD5aF.js";const w={name:{id:"name",name:"name",fullWidth:!0,label:"Name",placeholder:"Name",required:!1,errorMessage:"name required",value:"",disabled:!1,type:"text",componentType:r.INPUT_TEXT,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]},status:{id:"status",name:"status",fullWidth:!0,label:"Status",placeholder:"Status",required:!1,errorMessage:"Status required",value:"All",disabled:!1,type:"select",componentType:r.INPUT_DROPDOWN,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[{value:s.ALL,label:s.ALL},{value:s.DRAFT,label:s.DRAFT},{value:s.IN_PROGRESS,label:s.IN_PROGRESS},{value:s.APPROVE,label:s.APPROVE},{value:s.REJECT,label:s.REJECT}]},date:{id:"date",name:"date",fullWidth:!0,label:{start:"Start Date",end:"End Date"},placeholder:"Date",required:!1,errorMessage:"date required",value:[null,null],disabled:!1,type:"text",componentType:r.INPUT_DATE_RANGE,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]}},c=e.memo((()=>{const e=d(),c=t(),v=new URLSearchParams(c.search),b=parseInt(v.get("page")||"1",10),{user:S}=m((e=>e.settings)),x=JSON.parse(JSON.stringify(w)),T=o({defaultValues:x}),{register:h,formState:P,handleSubmit:R,control:y}=T,{errors:C}=P;return a.jsxs(p,{component:"form",sx:{mb:3,display:"grid",gridTemplateColumns:{sm:"1fr 0.4fr 1fr 0.4fr"},gap:2},noValidate:!0,autoComplete:"off",onSubmit:R((t=>{e(n({page:b,startDate:null===t.date.value[0]?"":t.date.value[0].toString(),endDate:null===t.date.value[1]?"":t.date.value[1].toString(),status:t.status.value.toString(),name:t.name.value.toString()}))})),children:[Object.keys(x).map((e=>{var t,o;const d=e,m=`${x[d].id}.value`;switch(x[d].componentType){case r.INPUT_DROPDOWN:return a.jsx(i,{name:x[d].name,registerField:m,id:x[d].id,label:x[d].label.toString(),required:x[d].required,control:y,error:!1,helperText:x[d].errorMessage,value:x[d].value.toString(),style:{marginLeft:0,width:"100%",marginBottom:0,marginTop:0,backgroundColorLabel:"#f5f5f5"},options:S.role!==u.HD?x[d].options.filter((e=>e.label!==s.DRAFT)):x[d].options,disabled:x[d].disabled},d);case r.INPUT_DATE_RANGE:return a.jsx(l,{error:!1,name:x[d].name,registerField:m,id:x[d].id,label:x[d].label,required:x[d].required,control:y,disabled:x[d].disabled,helperText:x[d].errorMessage,value:x[d].value,style:{marginLeft:0,width:"100%",marginBottom:0,marginTop:0}},d);default:return a.jsx(f,{sx:{mt:0,mb:0},margin:"normal",fullWidth:x[d].fullWidth,label:x[d].label.toString(),type:x[d].type,autoFocus:x[d].autoFocus,autoComplete:x[d].autoComplete,...h(m,{required:{value:x[d].required,message:x[d].errorMessage},disabled:x[d].disabled,pattern:{value:x[d].validate.pattern.value,message:x[d].validate.pattern.message}}),error:!!C[d],helperText:null==(o=null==(t=C[d])?void 0:t.value)?void 0:o.message},d)}})),a.jsx(g,{fullWidth:!0,type:"submit",loading:!1,disabled:!1,variant:"contained",size:"large",sx:{mt:0,mb:0},children:a.jsx(j,{variant:"button",display:"block",gutterBottom:!0,children:"Search"})})]})}),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));export{c as default};