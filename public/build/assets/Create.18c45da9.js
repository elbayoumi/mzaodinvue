import{T as f,c as x,w as t,o as n,a,u as e,Z as b,b as V,n as l,d as m,t as i,e as d}from"./app.ca92c87f.js";import{m as h,a as y}from"./colors.b2b9dceb.js";import{_ as $}from"./LayoutAuthenticated.4dd9cd3f.js";import{_ as k,a as N}from"./SectionTitleLineWithButton.5f50adf6.js";import{_ as p,a as v}from"./CardBox.79606ed7.js";import{_ as u}from"./FormField.55a9fe78.js";import{_ as c}from"./FormControl.7680d868.js";import{_ as w}from"./BaseButtons.86e34e69.js";import"./BaseLevel.84597d56.js";const B={key:0,class:"text-red-400 text-sm"},C={key:0,class:"text-red-400 text-sm"},E={key:0,class:"text-red-400 text-sm"},Z={__name:"Create",setup(M){const r=f({name:"",machine_name:"",description:""});return(_,o)=>(n(),x($,null,{default:t(()=>[a(e(b),{title:"Create menu"}),a(N,null,{default:t(()=>[a(k,{icon:e(h),title:"Add menu",main:""},{default:t(()=>[a(p,{"route-name":_.route("admin.menu.index"),icon:e(y),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),a(v,{form:"",onSubmit:o[3]||(o[3]=V(s=>e(r).post(_.route("admin.menu.store")),["prevent"]))},{footer:t(()=>[a(w,null,{default:t(()=>[a(p,{type:"submit",color:"info",label:"Submit",class:l({"opacity-25":e(r).processing}),disabled:e(r).processing},null,8,["class","disabled"])]),_:1})]),default:t(()=>[a(u,{label:"Name",class:l({"text-red-400":e(r).errors.name})},{default:t(()=>[a(c,{modelValue:e(r).name,"onUpdate:modelValue":o[0]||(o[0]=s=>e(r).name=s),type:"text",placeholder:"Enter Name",error:e(r).errors.name},{default:t(()=>[e(r).errors.name?(n(),m("div",B,i(e(r).errors.name),1)):d("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),a(u,{label:"Machine Name",class:l({"text-red-400":e(r).errors.machine_name})},{default:t(()=>[a(c,{modelValue:e(r).machine_name,"onUpdate:modelValue":o[1]||(o[1]=s=>e(r).machine_name=s),type:"text",placeholder:"Enter Machine Name",error:e(r).errors.name},{default:t(()=>[e(r).errors.machine_name?(n(),m("div",C,i(e(r).errors.machine_name),1)):d("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),a(u,{label:"Description",class:l({"text-red-400":e(r).errors.description})},{default:t(()=>[a(c,{modelValue:e(r).description,"onUpdate:modelValue":o[2]||(o[2]=s=>e(r).description=s),type:"text",placeholder:"Enter Description",error:e(r).errors.description},{default:t(()=>[e(r).errors.description?(n(),m("div",E,i(e(r).errors.description),1)):d("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{Z as default};