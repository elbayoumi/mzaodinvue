import{T as u,c as f,w as s,o as n,a as o,u as e,Z as c,b as _,n as l,d as b,t as $,e as y}from"./app.8aa0dd67.js";import{C as x,a as k}from"./colors.d4746137.js";import{_ as w}from"./LayoutAuthenticated.6465491b.js";import{_ as B,a as V}from"./SectionTitleLineWithButton.6c76dbea.js";import{_ as d,a as C}from"./CardBox.b8dae879.js";import{_ as N}from"./FormField.d1a4f440.js";import{_ as g}from"./FormControl.e1977f27.js";import{_ as h}from"./BaseButtons.ab6929cb.js";import"./BaseLevel.f28a3ac6.js";const v={key:0,class:"text-red-400 text-sm"},L={__name:"Edit",props:{permission:{type:Object,default:()=>({})}},setup(p){const r=p,a=u({_method:"put",name:r.permission.name});return(i,t)=>(n(),f(w,null,{default:s(()=>[o(e(c),{title:"Update permission"}),o(V,null,{default:s(()=>[o(B,{icon:e(x),title:"Update permission",main:""},{default:s(()=>[o(d,{"route-name":i.route("admin.permission.index"),icon:e(k),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),o(C,{form:"",onSubmit:t[1]||(t[1]=_(m=>e(a).post(i.route("admin.permission.update",r.permission.id)),["prevent"]))},{footer:s(()=>[o(h,null,{default:s(()=>[o(d,{type:"submit",color:"info",label:"Submit",class:l({"opacity-25":e(a).processing}),disabled:e(a).processing},null,8,["class","disabled"])]),_:1})]),default:s(()=>[o(N,{label:"Name",class:l({"text-red-400":e(a).errors.name})},{default:s(()=>[o(g,{modelValue:e(a).name,"onUpdate:modelValue":t[0]||(t[0]=m=>e(a).name=m),type:"text",placeholder:"Enter Name",error:e(a).errors.name},{default:s(()=>[e(a).errors.name?(n(),b("div",v,$(e(a).errors.name),1)):y("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{L as default};
