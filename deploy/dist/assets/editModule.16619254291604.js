var B=Object.defineProperty;var D=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var V=(o,l,e)=>l in o?B(o,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[l]=e,A=(o,l)=>{for(var e in l||(l={}))y.call(l,e)&&V(o,e,l[e]);if(D)for(var e of D(l))k.call(l,e)&&V(o,e,l[e]);return o};import{u as S,a as G}from"./api.16619254291602.js";import{_ as I,H as P,k as M,p as R,a as g,h as t,w as a,a2 as U,M as E,r as s,aC as q,o as F,y as N,i as c,t as C,b as O,F as w,e as L,f as z,g as H}from"./index.1661925429160.js";const T={name:"editMenu",props:{title:{type:String,default:()=>""}},setup(){const{proxy:o}=H(),l=P(null),e=M({isShowDialog:!1,loading:!1,ruleForm:{id:0,path:"",description:"",apiGroup:"",method:""},methodOptions:[],ruleRules:{path:[{required:!0,message:"API\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],apiGroup:[{required:!0,message:"API\u5206\u7EC4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],method:[{required:!0,message:"API\u65B9\u6CD5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),p=r=>{r.id&&r.id!=null&&r.id!=0?(e.ruleForm=r,e.ruleForm.id=r.id,e.ruleForm.path=r.path,e.ruleForm.description=r.description,e.ruleForm.apiGroup=r.apiGroup,e.ruleForm.method=r.method):i(),e.isShowDialog=!0,e.loading=!1,o.getDicts("sys_method_api").then(m=>{e.methodOptions=m.data})},n=r=>{o.mittBus.emit("onEditApiModule",r),e.isShowDialog=!1},h=()=>{n()},d=()=>{const r=U(l);!r||r.validate(m=>{m&&(e.loading=!0,e.ruleForm.id!=null&&e.ruleForm.id!=0?S(e.ruleForm).then(f=>{E.success("\u4FEE\u6539\u6210\u529F"),e.loading=!1,n(e.ruleForm)}):G(e.ruleForm).then(f=>{E.success("\u65B0\u589E\u6210\u529F"),e.loading=!1,n(e.ruleForm)}))})},i=()=>{e.ruleForm.id=0,e.ruleForm.path="",e.ruleForm.description="",e.ruleForm.method="",e.ruleForm.apiGroup=""};return A({ruleFormRef:l,openDialog:p,closeDialog:n,onCancel:h,initForm:i,onSubmit:d},R(e))}},W={class:"system-menu-container"},$={style:{"font-size":"large"}},j={class:"dialog-footer"},J=c("\u53D6 \u6D88"),K=c("\u7F16 \u8F91");function Q(o,l,e,p,n,h){const d=s("el-input"),i=s("el-form-item"),r=s("el-radio"),m=s("el-radio-group"),f=s("el-form"),_=s("el-button"),b=s("el-dialog"),v=q("drag");return F(),g("div",W,[t(b,{modelValue:o.isShowDialog,"onUpdate:modelValue":l[4]||(l[4]=u=>o.isShowDialog=u),width:"769px",center:""},{header:a(()=>[N((F(),g("div",$,[c(C(e.title),1)])),[[v,[".app-container .el-dialog",".app-container .el-dialog__header"]]])]),footer:a(()=>[O("span",j,[t(_,{onClick:p.onCancel},{default:a(()=>[J]),_:1},8,["onClick"]),t(_,{type:"primary",onClick:p.onSubmit,loading:o.loading},{default:a(()=>[K]),_:1},8,["onClick","loading"])])]),default:a(()=>[t(f,{model:o.ruleForm,rules:o.ruleRules,ref:"ruleFormRef","label-width":"80px"},{default:a(()=>[t(i,{label:"\u8DEF\u5F84",prop:"path"},{default:a(()=>[t(d,{modelValue:o.ruleForm.path,"onUpdate:modelValue":l[0]||(l[0]=u=>o.ruleForm.path=u),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84"},null,8,["modelValue"])]),_:1}),t(i,{label:"API\u63CF\u8FF0",prop:"description"},{default:a(()=>[t(d,{modelValue:o.ruleForm.description,"onUpdate:modelValue":l[1]||(l[1]=u=>o.ruleForm.description=u),placeholder:"\u8BF7\u8F93\u5165API\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),t(i,{label:"API\u5206\u7EC4",prop:"apiGroup"},{default:a(()=>[t(d,{modelValue:o.ruleForm.apiGroup,"onUpdate:modelValue":l[2]||(l[2]=u=>o.ruleForm.apiGroup=u),placeholder:"\u8BF7\u8F93\u5165API\u5206\u7EC4"},null,8,["modelValue"])]),_:1}),t(i,{label:"\u65B9\u6CD5\u540D",prop:"method"},{default:a(()=>[t(m,{modelValue:o.ruleForm.method,"onUpdate:modelValue":l[3]||(l[3]=u=>o.ruleForm.method=u)},{default:a(()=>[(F(!0),g(w,null,L(o.methodOptions,u=>(F(),z(r,{key:u.dictValue,label:u.dictValue},{default:a(()=>[c(C(u.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var x=I(T,[["render",Q]]);export{x as default};
