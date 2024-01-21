import{R as e,u as t,j as a}from"./vendor-fwd-1SGvIy31.js";import{a as r}from"./index.esm-fwd-rj9UIJ_I.js";import{C as o}from"./ComponentFormType.enum-fwd-9JVL8E6k.js";import{S as s}from"./index-fwd-w_QQ1xSL.js";import{n as i,u as l}from"./main-fwd--n1B72RI.js";import{g as d}from"./getSelectInputOptions-fwd-ZVToRqqx.js";import{S as n}from"./SelectInputDialogType.type-fwd-EhrzjEHx.js";import{g as m}from"./getVendors-fwd-qqJy-Hwd.js";import p from"./index-fwd-QlVXGDcN.js";import{b as u}from"./index-fwd-YZzHoVcr.js";import f from"./index-fwd-goasdrlS.js";import g from"./index-fwd-hPOcf5d2.js";import"./MenuItem-fwd-JVQWDuju.js";import"./List-fwd-B3qUSFQa.js";import"./index-fwd-8NRQb7QL.js";import"./TransitionGroupContext-fwd-AdrtyOFN.js";import"./listItemIconClasses-fwd-R0gCvGgm.js";import"./dividerClasses-fwd-g7uA4vLh.js";import"./listItemTextClasses-fwd-v4LoqRQE.js";import"./API-fwd-wSBNwRC-.js";import"./Menu-fwd-Vl9pMXPK.js";import"./Modal-fwd-p5WxUrg9.js";import"./utils-fwd-Aa8Nbi8J.js";import"./useSlotProps-fwd-4TF0dLOI.js";import"./Portal-fwd-EmXNK1q8.js";import"./Paper-fwd-WFaa4pXn.js";import"./Grow-fwd-0-97KQP6.js";import"./createSvgIcon-fwd-3znVHFND.js";import"./index-fwd-lWyokz70.js";import"./interopRequireDefault-fwd-TQpPSNg9.js";import"./Button-fwd-V0oP7Gqc.js";import"./index-fwd-lbVkD5aF.js";const c={name:{id:"name",name:"name",fullWidth:!0,label:"Name",placeholder:"Name",required:!1,errorMessage:"name required",value:"",disabled:!1,type:"text",componentType:o.INPUT_TEXT,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[]},status:{id:"status",name:"status",fullWidth:!0,label:"Status",placeholder:"Status",required:!1,errorMessage:"Status required",value:"All",disabled:!1,type:"select",componentType:o.INPUT_DROPDOWN,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[{value:"All",label:"All"},{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}]},type:{id:"type",name:"type",fullWidth:!0,label:"Type",placeholder:"Type",required:!1,errorMessage:"type required",value:"All",disabled:!1,type:"select",componentType:o.INPUT_DROPDOWN,autoFocus:!1,autoComplete:"",validate:{pattern:{value:/^/,message:""}},options:[{value:"All",label:"All"}]}},v=e.memo((()=>{const e=i(),v=t(),j=new URLSearchParams(v.search),w=parseInt(j.get("page")||"1",10),{selectInputOptions:b}=l((e=>e.components)),y=JSON.parse(JSON.stringify(c)),T=r({defaultValues:async()=>(b.vendorType.loading&&0===b.vendorType.list.length&&await e(d({type:n.VENDOR_TYPE})),y)}),{register:S,formState:x,handleSubmit:h,control:I}=T,{errors:C}=x;return a.jsxs(p,{component:"form",sx:{mb:3,display:"grid",gridTemplateColumns:{sm:"1fr 0.4fr 1fr 0.4fr"},gap:2},noValidate:!0,autoComplete:"off",onSubmit:h((t=>{e(m({page:w,vendorTypeId:t.type.value.toString(),status:t.status.value.toString(),name:t.name.value.toString()}))})),children:[Object.keys(y).map((e=>{var t,r;const i=e,l=`${y[i].id}.value`;return y[i].componentType===o.INPUT_DROPDOWN?a.jsx(s,{name:y[i].name,registerField:l,id:y[i].id,label:y[i].label.toString(),required:y[i].required,control:I,error:!1,helperText:y[i].errorMessage,value:y[i].value.toString(),style:{marginLeft:0,width:"100%",marginBottom:0,marginTop:0,backgroundColorLabel:"#f5f5f5"},options:"status"===y[i].id?y[i].options:[...y[i].options,...b.vendorType.list.map((e=>({value:e.id,label:e.name})))],disabled:y[i].disabled},i):a.jsx(u,{sx:{mt:0,mb:0},margin:"normal",fullWidth:y[i].fullWidth,label:y[i].label.toString(),type:y[i].type,autoFocus:y[i].autoFocus,autoComplete:y[i].autoComplete,...S(l,{required:{value:y[i].required,message:y[i].errorMessage},disabled:y[i].disabled,pattern:{value:y[i].validate.pattern.value,message:y[i].validate.pattern.message}}),error:!!C[i],helperText:null==(r=null==(t=C[i])?void 0:t.value)?void 0:r.message},i)})),a.jsx(f,{fullWidth:!0,type:"submit",loading:!1,disabled:!1,variant:"contained",size:"large",sx:{mt:0,mb:0},children:a.jsx(g,{variant:"button",display:"block",gutterBottom:!0,children:"Search"})})]})}),((e,t)=>JSON.stringify(e)===JSON.stringify(t)));export{v as default};
