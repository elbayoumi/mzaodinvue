import{T as d,c as f,w as r,o as n,a as o,u as e,Z as u,b as _,n as i,d as c,t as p,e as b}from"./app.743d3def.js";import{C as $,a as x}from"./colors.b7cb266d.js";import{_ as y}from"./LayoutAuthenticated.3ed4b2d8.js";import{_ as C,a as k}from"./SectionTitleLineWithButton.3ee3745d.js";import{_ as l,a as w}from"./CardBox.ad7acf60.js";import{_ as B}from"./FormField.76c9bc06.js";import{_ as V}from"./FormControl.9f5118c9.js";import{_ as N}from"./BaseButtons.d18427d0.js";import"./BaseLevel.1609510a.js";const g={key:0,class:"text-red-400 text-sm"},O={__name:"Create",setup(v){const a=d({name:""});return(t,s)=>(n(),f(y,null,{default:r(()=>[o(e(u),{title:"Create permission"}),o(k,null,{default:r(()=>[o(C,{icon:e($),title:"Add permission",main:""},{default:r(()=>[o(l,{"route-name":t.route("admin.permission.index"),icon:e(x),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),o(w,{form:"",onSubmit:s[1]||(s[1]=_(m=>e(a).post(t.route("admin.permission.store")),["prevent"]))},{footer:r(()=>[o(N,null,{default:r(()=>[o(l,{type:"submit",color:"info",label:"Submit",class:i({"opacity-25":e(a).processing}),disabled:e(a).processing},null,8,["class","disabled"])]),_:1})]),default:r(()=>[o(B,{label:"Name",class:i({"text-red-400":e(a).errors.name})},{default:r(()=>[o(V,{modelValue:e(a).name,"onUpdate:modelValue":s[0]||(s[0]=m=>e(a).name=m),type:"text",placeholder:"Enter Name",error:e(a).errors.name},{default:r(()=>[e(a).errors.name?(n(),c("div",g,p(e(a).errors.name),1)):b("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{O as default};