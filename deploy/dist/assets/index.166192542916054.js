var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var D=(l,t,s)=>t in l?z(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,B=(l,t)=>{for(var s in t||(t={}))L.call(t,s)&&D(l,s,t[s]);if(w)for(var s of w(t))M.call(t,s)&&D(l,s,t[s]);return l};import{_ as j,k as G,m as H,p as J,a as f,h as o,w as u,r as a,o as r,F as y,e as F,y as K,z as Q,f as m,A as V,b as C,g as W,i as R}from"./index.1661925429160.js";const X=[{label:"\u59D3\u540D",prop:"name",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"\u90AE\u7BB1",prop:"email",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"\u767B\u9646\u65F6\u95F4",prop:"autograph",placeholder:"\u9009\u62E9\u65F6\u95F4",clearable:!0,disabled:!1,required:!0,type:"date",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"\u804C\u52A1",prop:"occupation",placeholder:"\u8BF7\u9009\u62E9\u804C\u52A1",clearable:!0,disabled:!1,required:!0,type:"select",i18n:!1,i18nText:"",options:[{label:"\u8BA1\u7B97\u673A / \u4E92\u8054\u7F51 / \u901A\u4FE1",value:"1"},{label:"\u751F\u4EA7 / \u5DE5\u827A / \u5236\u9020",value:"2"},{label:"\u533B\u7597 / \u62A4\u7406 / \u5236\u836F",value:"3"}],isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"",prop:"",placeholder:"",clearable:!0,disabled:!1,required:!0,type:"",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24},{label:"\u5907\u6CE8",prop:"remarks",placeholder:"\u8BF7\u8F93\u5165",clearable:!0,disabled:!1,required:!0,type:"textarea",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24}],Y={name:"pagesDynamicForm",setup(){const{proxy:l}=W(),t=G({formData:X,form:{name:"",email:"",autograph:"",occupation:"",list:[{year:"",month:"",day:""}],remarks:""}}),s=()=>{t.form.list.push({year:"",month:"",day:""})},i=p=>{t.form.list.splice(p,1)},E=()=>{l.$refs.formRulesOneRef.validate(p=>{if(p)l.$message.success("\u9A8C\u8BC1\u6210\u529F");else return!1})},x=()=>{l.$refs.formRulesOneRef.resetFields()};return H(()=>{}),B({onAddRow:s,onDelRow:i,onSubmitForm:E,onResetForm:x},J(t))}},Z={class:"dynamic-form-container"},v=C("span",{class:"ml10"},"\u5E74\u5EA6",-1),ee={class:"flex-margin"},le=R(" \u91CD\u7F6E\u8868\u5355 "),oe=R(" \u9A8C\u8BC1\u8868\u5355 ");function ue(l,t,s,i,E,x){const p=a("el-input"),k=a("el-date-picker"),U=a("el-option"),S=a("el-select"),_=a("el-form-item"),q=a("elementPlus"),g=a("el-icon"),h=a("el-button"),$=a("elementDelete"),b=a("el-col"),A=a("el-row"),T=a("el-form"),N=a("el-card"),I=a("elementRefreshRight"),O=a("SvgIcon");return r(),f("div",Z,[o(N,{shadow:"hover",header:"\u52A8\u6001\u590D\u6742\u8868\u5355"},{default:u(()=>[o(T,{model:l.form,ref:"formRulesOneRef","label-width":"100px",class:"mt35"},{default:u(()=>[o(A,{gutter:35},{default:u(()=>[(r(!0),f(y,null,F(l.formData,(e,P)=>K((r(),m(b,{xs:e.xs,sm:e.sm,md:e.md,lg:e.md,xl:e.xl,class:"mb20",key:P},{default:u(()=>[e.type!==""?(r(),f(y,{key:0},[e.type!==""?(r(),m(_,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}\u4E0D\u80FD\u4E3A\u7A7A`,trigger:e.type==="input"?"blur":"change"}]},{default:u(()=>[e.type==="input"?(r(),m(p,{key:0,modelValue:l.form[e.prop],"onUpdate:modelValue":d=>l.form[e.prop]=d,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="date"?(r(),m(k,{key:1,modelValue:l.form[e.prop],"onUpdate:modelValue":d=>l.form[e.prop]=d,type:"date",placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="select"?(r(),m(S,{key:2,modelValue:l.form[e.prop],"onUpdate:modelValue":d=>l.form[e.prop]=d,placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},{default:u(()=>[(r(!0),f(y,null,F(e.options,d=>(r(),m(U,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):V("",!0),e.type==="textarea"?(r(),m(p,{key:3,type:"textarea",modelValue:l.form[e.prop],"onUpdate:modelValue":d=>l.form[e.prop]=d,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):V("",!0)]),_:2},1032,["label","prop","rules"])):V("",!0)],64)):(r(!0),f(y,{key:1},F(l.form.list,(d,n)=>(r(),m(A,{gutter:35,key:n},{default:u(()=>[o(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:u(()=>[o(_,{label:"\u5E74\u5EA6",prop:`list[${n}].year`,rules:[{required:!0,message:"\u5E74\u5EA6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{label:u(()=>[n===0?(r(),m(h,{key:0,type:"primary",circle:"",onClick:i.onAddRow},{default:u(()=>[o(g,null,{default:u(()=>[o(q)]),_:1})]),_:1},8,["onClick"])):(r(),m(h,{key:1,type:"danger",circle:"",onClick:c=>i.onDelRow(n)},{default:u(()=>[o(g,null,{default:u(()=>[o($)]),_:1})]),_:2},1032,["onClick"])),v]),default:u(()=>[o(p,{modelValue:l.form.list[n].year,"onUpdate:modelValue":c=>l.form.list[n].year=c,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),o(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:u(()=>[o(_,{label:"\u6708\u5EA6",prop:`list[${n}].month`,rules:[{required:!0,message:"\u6708\u5EA6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{default:u(()=>[o(p,{modelValue:l.form.list[n].month,"onUpdate:modelValue":c=>l.form.list[n].month=c,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),o(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:u(()=>[o(_,{label:"\u65E5\u5EA6",prop:`list[${n}].day`,rules:[{required:!0,message:"\u65E5\u5EA6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{default:u(()=>[o(p,{modelValue:l.form.list[n].day,"onUpdate:modelValue":c=>l.form.list[n].day=c,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["xs","sm","md","lg","xl"])),[[Q,e.isShow]])),128))]),_:1})]),_:1},8,["model"])]),_:1}),o(A,{class:"flex mt15"},{default:u(()=>[C("div",ee,[o(h,{onClick:i.onResetForm},{default:u(()=>[o(g,null,{default:u(()=>[o(I)]),_:1}),le]),_:1},8,["onClick"]),o(h,{type:"primary",onClick:i.onSubmitForm},{default:u(()=>[o(O,{name:"iconfont icon-shuxing"}),oe]),_:1},8,["onClick"])])]),_:1})])}var re=j(Y,[["render",ue]]);export{re as default};
