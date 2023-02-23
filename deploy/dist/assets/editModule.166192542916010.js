var x=Object.defineProperty;var k=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var C=(l,o,e)=>o in l?x(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,O=(l,o)=>{for(var e in o||(o={}))M.call(o,e)&&C(l,e,o[e]);if(k)for(var e of k(o))R.call(o,e)&&C(l,e,o[e]);return l};import{t as T}from"./dept.1661925429160.js";import{_ as L,H as P,k as j,p as q,a as f,h as a,w as s,aY as z,a2 as G,a9 as H,M as v,aZ as J,a_ as $,r as m,aC as W,o as i,y as Y,i as y,t as A,b as Z,f as g,A as U,F as B,e as E,g as K}from"./index.1661925429160.js";import{b as Q}from"./tenant.1661925429160.js";const X={name:"editUser",props:{title:{type:String,default:()=>""}},setup(){const{proxy:l}=K(),o=P(null),e=j({isShowDialog:!1,loading:!1,sexOptions:[],roleOptions:[],statusOptions:[],deptOptions:[],tenantOptions:[],postOptions:[],ruleForm:{userId:void 0,tenantId:void 0,username:"",nickName:"",deptId:"",roleId:"",postId:"",phone:"",email:"",status:"",password:"",avatar:"",sex:"",remark:"",postIds:"",roleIds:""},postIds:[],roleIds:[],isHideOptions:[],menuTypeOptions:[],yesOrNoOptions:[],menuOptions:[],ruleRules:{username:[{required:!0,message:"\u7528\u6237\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],nickName:[{required:!0,message:"\u7528\u6237\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u7528\u6237\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],email:[{type:"email",message:"'\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",trigger:"blur"}]}}),_=t=>{t&&t.userId&&t.userId!=null&&t.userId!=0?z(t.userId).then(r=>{e.ruleForm=r.data.data,e.postOptions=r.data.posts,e.roleOptions=r.data.roles,e.postIds=r.data.postIds.split(",").map(p=>Number(p)),e.roleIds=r.data.roleIds.split(",").map(p=>Number(p)),e.ruleForm.password=""}):I(),F(),d(),e.isShowDialog=!0,e.loading=!1,l.getDicts("sys_user_sex").then(r=>{e.sexOptions=r.data}),l.getDicts("sys_normal_disable").then(r=>{e.statusOptions=r.data})},b=t=>{l.mittBus.emit("onEditUserModule",t),e.isShowDialog=!1},D=()=>{b(),I()},F=async()=>{T().then(t=>{e.deptOptions=t.data})},d=async()=>{Q().then(t=>{e.tenantOptions=t.data})},n=()=>{const t=G(o);!t||t.validate(r=>{r&&(e.ruleForm.postId=e.postIds[0],e.ruleForm.roleId=e.roleIds[0],e.ruleForm.postIds=e.postIds.join(","),e.ruleForm.roleIds=e.roleIds.join(","),e.loading=!0,e.ruleForm.userId!=null?H(e.ruleForm).then(p=>{v.success("\u4FEE\u6539\u6210\u529F"),e.loading=!1,b()}):J(e.ruleForm).then(p=>{v.success("\u65B0\u589E\u6210\u529F"),e.loading=!1,b()}))})},I=()=>{$().then(t=>{e.postOptions=t.data.posts,e.roleOptions=t.data.roles}),e.ruleForm.userId=void 0,e.ruleForm.tenantId=void 0,e.ruleForm.username="",e.ruleForm.nickName="",e.ruleForm.deptId="",e.ruleForm.phone="",e.ruleForm.email="",e.ruleForm.status="",e.ruleForm.password="",e.ruleForm.avatar="",e.ruleForm.sex="",e.ruleForm.remark="",e.ruleForm.postIds="",e.ruleForm.roleIds=""};return O({ruleFormRef:o,openDialog:_,closeDialog:b,onCancel:D,onSubmit:n,beforeAvatarUpload:t=>{const r=t.type==="image/jpeg",p=t.size/1024/1024<2;return r||v.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!"),p||v.error("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),r&&p},handleAvatarSuccess:t=>{}},q(e))}},ee={class:"system-menu-container"},le={style:{"font-size":"large"}},ue={class:"dialog-footer"},oe=y("\u53D6 \u6D88"),ae=y("\u7F16 \u8F91");function se(l,o,e,_,b,D){const F=m("el-input"),d=m("el-form-item"),n=m("el-col"),I=m("el-cascader"),V=m("el-option"),c=m("el-select"),t=m("el-radio"),r=m("el-radio-group"),p=m("el-row"),w=m("el-form"),h=m("el-button"),N=m("el-dialog"),S=W("drag");return i(),f("div",ee,[a(N,{modelValue:l.isShowDialog,"onUpdate:modelValue":o[12]||(o[12]=u=>l.isShowDialog=u),width:"769px",center:""},{header:s(()=>[Y((i(),f("div",le,[y(A(e.title),1)])),[[S,[".system-menu-container .el-dialog",".system-menu-container .el-dialog__header"]]])]),footer:s(()=>[Z("span",ue,[a(h,{onClick:_.onCancel},{default:s(()=>[oe]),_:1},8,["onClick"]),a(h,{type:"primary",onClick:_.onSubmit,loading:l.loading},{default:s(()=>[ae]),_:1},8,["onClick","loading"])])]),default:s(()=>[a(w,{ref:"ruleFormRef",model:l.ruleForm,rules:l.ruleRules,"label-width":"80px"},{default:s(()=>[a(p,{gutter:35},{default:s(()=>[a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u7528\u6237\u6635\u79F0",prop:"nickName"},{default:s(()=>[a(F,{modelValue:l.ruleForm.nickName,"onUpdate:modelValue":o[0]||(o[0]=u=>l.ruleForm.nickName=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u5F52\u5C5E\u79DF\u6237",prop:"tenantId"},{default:s(()=>[a(I,{modelValue:l.ruleForm.tenantId,"onUpdate:modelValue":o[1]||(o[1]=u=>l.ruleForm.tenantId=u),options:l.tenantOptions,props:{label:"tenantName",value:"id",checkStrictly:!0,emitPath:!1},class:"w100",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5F52\u5C5E\u79DF\u6237","show-all-levels":!1},null,8,["modelValue","options"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"deptId"},{default:s(()=>[a(I,{modelValue:l.ruleForm.deptId,"onUpdate:modelValue":o[2]||(o[2]=u=>l.ruleForm.deptId=u),options:l.deptOptions,props:{label:"deptName",value:"deptId",checkStrictly:!0,emitPath:!1},class:"w100",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5F52\u5C5E\u90E8\u95E8","show-all-levels":!1},null,8,["modelValue","options"])]),_:1})]),_:1}),l.ruleForm.userName==null?(i(),g(n,{key:0,xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u7528\u6237\u540D\u79F0",prop:"username"},{default:s(()=>[a(F,{modelValue:l.ruleForm.username,"onUpdate:modelValue":o[3]||(o[3]=u=>l.ruleForm.username=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1})):U("",!0),l.ruleForm.userId==null?(i(),g(n,{key:1,xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u7528\u6237\u5BC6\u7801",prop:"password"},{default:s(()=>[a(F,{modelValue:l.ruleForm.password,"onUpdate:modelValue":o[4]||(o[4]=u=>l.ruleForm.password=u),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801",type:"password"},null,8,["modelValue"])]),_:1})]),_:1})):U("",!0),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u624B\u673A\u53F7\u7801",prop:"phone"},{default:s(()=>[a(F,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":o[5]||(o[5]=u=>l.ruleForm.phone=u),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u90AE\u7BB1",prop:"email"},{default:s(()=>[a(F,{modelValue:l.ruleForm.email,"onUpdate:modelValue":o[6]||(o[6]=u=>l.ruleForm.email=u),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u7528\u6237\u6027\u522B",prop:"sex"},{default:s(()=>[a(c,{modelValue:l.ruleForm.sex,"onUpdate:modelValue":o[7]||(o[7]=u=>l.ruleForm.sex=u),placeholder:"\u8BF7\u9009\u62E9"},{default:s(()=>[(i(!0),f(B,null,E(l.sexOptions,u=>(i(),g(V,{key:u.dictValue,label:u.dictLabel,value:u.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u89D2\u8272"},{default:s(()=>[a(c,{modelValue:l.roleIds,"onUpdate:modelValue":o[8]||(o[8]=u=>l.roleIds=u),multiple:"",placeholder:"\u8BF7\u9009\u62E9"},{default:s(()=>[(i(!0),f(B,null,E(l.roleOptions,u=>(i(),g(V,{key:u.roleId,label:u.roleName,value:u.roleId,disabled:u.status==1},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u5C97\u4F4D"},{default:s(()=>[a(c,{modelValue:l.postIds,"onUpdate:modelValue":o[9]||(o[9]=u=>l.postIds=u),multiple:"",placeholder:"\u8BF7\u9009\u62E9"},{default:s(()=>[(i(!0),f(B,null,E(l.postOptions,u=>(i(),g(V,{key:u.postId,label:u.postName,value:u.postId,disabled:u.status==1},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:12,md:12,lg:12,xl:12},{default:s(()=>[a(d,{label:"\u72B6\u6001"},{default:s(()=>[a(r,{modelValue:l.ruleForm.status,"onUpdate:modelValue":o[10]||(o[10]=u=>l.ruleForm.status=u)},{default:s(()=>[(i(!0),f(B,null,E(l.statusOptions,u=>(i(),g(t,{key:u.dictValue,label:u.dictValue},{default:s(()=>[y(A(u.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(n,{xs:24,sm:24,md:24,lg:24,xl:24},{default:s(()=>[a(d,{label:"\u5907\u6CE8"},{default:s(()=>[a(F,{modelValue:l.ruleForm.remark,"onUpdate:modelValue":o[11]||(o[11]=u=>l.ruleForm.remark=u),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var me=L(X,[["render",se],["__scopeId","data-v-ba1360c4"]]);export{me as default};
