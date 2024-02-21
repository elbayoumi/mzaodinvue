import{T as y,c as b,w as a,o as s,a as r,u as e,Z as g,b as x,n as i,d,t as n,e as m,f as V}from"./app.7822bb5d.js";import{m as h,a as w}from"./colors.b93fd90a.js";import{_ as k}from"./LayoutAuthenticated.82ef2bf5.js";import{_ as $,a as v}from"./SectionTitleLineWithButton.8575c76e.js";import{_,a as C}from"./CardBox.6f77209a.js";import{_ as u}from"./FormField.827813d2.js";import{_ as p}from"./FormControl.13950f3d.js";import{_ as O}from"./FormCheckRadioGroup.c2527e85.js";import{_ as B}from"./BaseButtons.f67d3b8b.js";import"./BaseLevel.c424e8cb.js";const T={key:0,class:"text-red-400 text-sm"},E={key:0,class:"text-red-400 text-sm"},N={key:0,class:"text-red-400 text-sm"},U=V("div",null," The maximum depth for a link and all its children is fixed. Some menu links may not be available as parents if selecting them would exceed this limit. ",-1),S={key:0,class:"text-red-400 text-sm"},Z={__name:"Create",props:{categoryType:{type:Object,default:()=>({})},itemOptions:{type:Object,default:()=>({})}},setup(c){const t=y({name:"",description:"",enabled:!0,parent_id:"",weight:""});return(f,o)=>(s(),b(k,null,{default:a(()=>[r(e(g),{title:"Create Category"}),r(v,null,{default:a(()=>[r($,{icon:e(h),title:"Add Category",main:""},{default:a(()=>[r(_,{"route-name":f.route("admin.category.type.item.index",c.categoryType.id),icon:e(w),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),r(C,{form:"",onSubmit:o[5]||(o[5]=x(l=>e(t).post(f.route("admin.category.type.item.store",c.categoryType.id)),["prevent"]))},{footer:a(()=>[r(B,null,{default:a(()=>[r(_,{type:"submit",color:"info",label:"Submit",class:i({"opacity-25":e(t).processing}),disabled:e(t).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[r(u,{label:"Name",class:i({"text-red-400":e(t).errors.name})},{default:a(()=>[r(p,{modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).name=l),type:"text",placeholder:"Enter Name",error:e(t).errors.name},{default:a(()=>[e(t).errors.name?(s(),d("div",T,n(e(t).errors.name),1)):m("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(u,{label:"Description",class:i({"text-red-400":e(t).errors.description})},{default:a(()=>[r(p,{modelValue:e(t).description,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).description=l),type:"text",placeholder:"Enter Description",error:e(t).errors.description},{default:a(()=>[e(t).errors.description?(s(),d("div",E,n(e(t).errors.description),1)):m("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(O,{modelValue:e(t).enabled,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).enabled=l),name:"enabled",options:{enabled:"Enabled"}},null,8,["modelValue"]),r(u,{label:"Parent Item",class:i({"text-red-400":e(t).errors.parent_id})},{default:a(()=>[r(p,{modelValue:e(t).parent_id,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).parent_id=l),type:"select",placeholder:"--ROOT--",error:e(t).errors.parent_id,options:c.itemOptions},{default:a(()=>[e(t).errors.parent_id?(s(),d("div",N,n(e(t).errors.parent_id),1)):m("",!0),U]),_:1},8,["modelValue","error","options"])]),_:1},8,["class"]),r(u,{label:"Weight",class:i({"text-red-400":e(t).errors.weight})},{default:a(()=>[r(p,{modelValue:e(t).weight,"onUpdate:modelValue":o[4]||(o[4]=l=>e(t).weight=l),type:"text",placeholder:"Enter Weight",error:e(t).errors.weight},{default:a(()=>[e(t).errors.weight?(s(),d("div",S,n(e(t).errors.weight),1)):m("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{Z as default};
