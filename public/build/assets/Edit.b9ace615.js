import{T as f,c as _,w as a,o as i,a as o,u as e,Z as c,b,n,d as $,t as y,e as V}from"./app.16295995.js";import{C as w,a as x,j as k}from"./colors.70c2167b.js";import{_ as B}from"./LayoutAuthenticated.4d7cdf28.js";import{_ as j,a as C}from"./SectionTitleLineWithButton.b2cc9cd1.js";import{_ as d,a as N}from"./CardBox.c4664fc3.js";import{_ as p}from"./FormField.47b2fb76.js";import{_ as O}from"./FormControl.3f681337.js";import{_ as U}from"./FormCheckRadioGroup.00043f17.js";import{_ as g}from"./BaseButtons.a4702952.js";import"./BaseLevel.3ed301b4.js";const v={key:0,class:"text-red-400 text-sm"},M={__name:"Edit",props:{role:{type:Object,default:()=>({})},permissions:{type:Object,default:()=>({})},roleHasPermissions:{type:Object,default:()=>({})}},setup(u){const t=u,s=f({_method:"put",name:t.role.name,permissions:t.roleHasPermissions});return(m,r)=>(i(),_(B,null,{default:a(()=>[o(e(c),{title:"Update role"}),o(C,null,{default:a(()=>[o(j,{icon:e(w),title:"Update role",main:""},{default:a(()=>[o(d,{"route-name":m.route("admin.role.index"),icon:e(x),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),o(N,{form:"",onSubmit:r[2]||(r[2]=b(l=>e(s).post(m.route("admin.role.update",t.role.id)),["prevent"]))},{footer:a(()=>[o(g,null,{default:a(()=>[o(d,{type:"submit",color:"info",label:"Submit",class:n({"opacity-25":e(s).processing}),disabled:e(s).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[o(p,{label:"Name",class:n({"text-red-400":e(s).errors.name})},{default:a(()=>[o(O,{modelValue:e(s).name,"onUpdate:modelValue":r[0]||(r[0]=l=>e(s).name=l),type:"text",placeholder:"Enter Name",error:e(s).errors.name},{default:a(()=>[e(s).errors.name?(i(),$("div",v,y(e(s).errors.name),1)):V("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),o(k),o(p,{label:"Permissions","wrap-body":""},{default:a(()=>[o(U,{modelValue:e(s).permissions,"onUpdate:modelValue":r[1]||(r[1]=l=>e(s).permissions=l),name:"permissions","is-column":"",options:t.permissions},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{M as default};
