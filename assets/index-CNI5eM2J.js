import{_ as J,u as K,a as Q,r as b,o as W,b as m,c as X,d as Z,e as h,f as S,g as e,h as ee,w as n,i as c,t as v,j as w,F as N,k as te,l as ae,m as E,n as oe,p as ne,q as le,E as se,s as ie,v as re,x as de,y as ue,z as ce,A as me}from"./index-3WhRTrjj.js";import{E as pe,a as _e,b as ge,c as fe,d as be,e as he}from"./index-BkxmtmYc.js";import{E as ve,a as we}from"./index-CUVD2d3_.js";const Ee={class:"creatTime"},xe={class:"creatTime-span"},Ve={class:"pagination-info"},ye={__name:"index",setup(Ce){const U=K(),D=Q().meta,d=b({list:[],total:""}),x=()=>{E(r).then(({data:o})=>{const{list:a,total:i}=o.data;a.forEach(l=>{l.create_time=oe(l.create_time).format("YYYY-MM-DD")}),d.list=a,d.total=i,U.commit("setUserName",d.list[0])})},I=()=>{ne().then(({data:o})=>{p.value=o.data})};W(()=>{x(),I(),window.addEventListener("resize",C)});const p=m([]),T=o=>{const a=p.value.find(i=>i.id===o);return a?a.name:"超级管理员"},q=o=>{u.value=!0,Object.assign(s,{mobile:o.mobile,name:o.name,permissions_id:o.permissions_id})},u=m(!1),F=()=>{u.value=!1},s=b({name:"",permissions_id:""}),V=m(),B={name:[{required:!0,trigger:"blur",message:"请输入名字"}],permissions_id:[{required:!0,trigger:"blur",message:"请选择修改权限"}]},H=async o=>{o&&await o.validate((a,i)=>{if(a){console.log(o);const{name:l,permissions_id:_}=s;le({name:l,permissions_id:_}).then(({data:g})=>{g.code===1e4&&(se.success("修改成功"),u.value=!1,x())})}else console.log("error submit!",i)})},r=b({pageNum:1,pageSize:10}),L=o=>{r.pageNum=o,E()},M=o=>{r.pageSize=o,E()},y=m(window.innerHeight-220),C=()=>{y.value=window.innerHeight-220};return X(()=>{window.addEventListener("resize",C)}),(o,a)=>{const i=ie,l=pe,_=_e,g=Z("Clock"),Y=re,k=de,j=ge,R=fe,A=ve,z=ue,f=ce,O=be,P=he,$=me,G=we;return h(),S(N,null,[e(i,{route:ee(D)},null,8,["route"]),e(j,{data:d.list,style:{width:"100%"},"max-height":y.value,border:"",stripe:"",fit:"","highlight-current-row":"",class:"table-container"},{default:n(()=>[e(l,{prop:"id",label:"ID",sortable:"",resizable:"",align:"center"}),e(l,{prop:"name",label:"用户",align:"center"}),e(l,{prop:"permissions_id",label:"所属组别",align:"center"},{default:n(t=>[c(v(T(t.row.permissions_id)),1)]),_:1}),e(l,{prop:"mobile",label:"手机号",align:"center"}),e(l,{prop:"active",label:"状态",align:"center"},{default:n(t=>[e(_,{type:t.row.active?"success":"danger",round:"",effect:"dark"},{default:n(()=>[c(v(t.row.active?"正常":"异常"),1)]),_:2},1032,["type"])]),_:1}),e(l,{prop:"create_time",label:"创建时间",align:"center"},{default:n(t=>[w("div",Ee,[e(Y,null,{default:n(()=>[e(g)]),_:1}),w("span",xe,v(t.row.create_time),1)])]),_:1}),e(l,{label:"编辑",width:"100px",align:"center"},{default:n(t=>[e(k,{type:"primary",onClick:ke=>q(t.row)},{default:n(()=>[c(" 编辑 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","max-height"]),w("div",Ve,[e(R,{class:"pagination-info-item","current-page":r.pageNum,"onUpdate:currentPage":a[0]||(a[0]=t=>r.pageNum=t),"page-size":r.pageSize,background:!0,size:"default",layout:"total, prev, pager, next",total:parseInt(d.total),onSizeChange:M,onCurrentChange:L},null,8,["current-page","page-size","total"])]),e(G,{modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=t=>u.value=t),"before-close":F,width:"500"},{header:n(()=>[e(A,{tag:"b",size:"large"},{default:n(()=>[c(" 修改权限 ")]),_:1})]),footer:n(()=>[e(k,{type:"primary",round:"",onClick:a[4]||(a[4]=t=>H(V.value))},{default:n(()=>[c("提交")]),_:1})]),default:n(()=>[e($,{rules:B,ref_key:"formRef",ref:V,model:s,"label-width":"80px","label-position":"right"},{default:n(()=>[e(f,{label:"手机号",prop:"mobile",required:""},{default:n(()=>[e(z,{modelValue:s.mobile,"onUpdate:modelValue":a[1]||(a[1]=t=>s.mobile=t),disabled:""},null,8,["modelValue"])]),_:1}),e(f,{label:"昵称",prop:"name",required:""},{default:n(()=>[e(z,{modelValue:s.name,"onUpdate:modelValue":a[2]||(a[2]=t=>s.name=t)},null,8,["modelValue"])]),_:1}),e(f,{label:"菜单权限",prop:"permissions_id",required:""},{default:n(()=>[e(P,{modelValue:s.permissions_id,"onUpdate:modelValue":a[3]||(a[3]=t=>s.permissions_id=t),clearable:"",placeholder:"请选择",style:{width:"240px"}},{default:n(()=>[(h(!0),S(N,null,te(p.value,t=>(h(),ae(O,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}},Ue=J(ye,[["__scopeId","data-v-7a201cf6"]]);export{Ue as default};
