import{T as b,c as g,w as a,o as s,a as r,u as e,Z as x,b as V,n as d,d as n,t as m,e as p,f as h}from"./app.8aa0dd67.js";import{m as w,a as k}from"./colors.d4746137.js";import{_ as $}from"./LayoutAuthenticated.6465491b.js";import{_ as v,a as O}from"./SectionTitleLineWithButton.6c76dbea.js";import{_ as y,a as U}from"./CardBox.b8dae879.js";import{_ as u}from"./FormField.d1a4f440.js";import{_ as c}from"./FormControl.e1977f27.js";import{_ as B}from"./FormCheckRadioGroup.ba78129e.js";import{_ as E}from"./BaseButtons.ab6929cb.js";import"./BaseLevel.f28a3ac6.js";const T={key:0,class:"text-red-400 text-sm"},C={key:0,class:"text-red-400 text-sm"},N={key:0,class:"text-red-400 text-sm"},S=h("div",null," The maximum depth for a link and all its children is fixed. Some menu links may not be available as parents if selecting them would exceed this limit. ",-1),j={key:0,class:"text-red-400 text-sm"},q={__name:"Edit",props:{categoryType:{type:Object,default:()=>({})},item:{type:Object,default:()=>({})},itemOptions:{type:Object,default:()=>({})}},setup(f){const l=f,t=b({_method:"put",name:l.item.name,description:l.item.description,enabled:l.item.enabled,parent_id:l.item.parent_id,weight:l.item.weight});return(_,o)=>(s(),g($,null,{default:a(()=>[r(e(x),{title:"Update Category"}),r(O,null,{default:a(()=>[r(v,{icon:e(w),title:"Update Category",main:""},{default:a(()=>[r(y,{"route-name":_.route("admin.category.type.item.index",f.categoryType.id),icon:e(k),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),r(U,{form:"",onSubmit:o[5]||(o[5]=V(i=>e(t).post(_.route("admin.category.type.item.update",{type:l.categoryType.id,item:l.item.id})),["prevent"]))},{footer:a(()=>[r(E,null,{default:a(()=>[r(y,{type:"submit",color:"info",label:"Submit",class:d({"opacity-25":e(t).processing}),disabled:e(t).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[r(u,{label:"Name",class:d({"text-red-400":e(t).errors.name})},{default:a(()=>[r(c,{modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),type:"text",placeholder:"Enter Name",error:e(t).errors.name},{default:a(()=>[e(t).errors.name?(s(),n("div",T,m(e(t).errors.name),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(u,{label:"Description",class:d({"text-red-400":e(t).errors.description})},{default:a(()=>[r(c,{modelValue:e(t).description,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).description=i),type:"text",placeholder:"Enter Description",error:e(t).errors.description},{default:a(()=>[e(t).errors.description?(s(),n("div",C,m(e(t).errors.description),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(B,{modelValue:e(t).enabled,"onUpdate:modelValue":o[2]||(o[2]=i=>e(t).enabled=i),name:"enabled",options:{enabled:"Enabled"}},null,8,["modelValue"]),r(u,{label:"Parent Item",class:d({"text-red-400":e(t).errors.parent_id})},{default:a(()=>[r(c,{modelValue:e(t).parent_id,"onUpdate:modelValue":o[3]||(o[3]=i=>e(t).parent_id=i),type:"select",placeholder:"--ROOT--",error:e(t).errors.parent_id,options:f.itemOptions},{default:a(()=>[e(t).errors.parent_id?(s(),n("div",N,m(e(t).errors.parent_id),1)):p("",!0),S]),_:1},8,["modelValue","error","options"])]),_:1},8,["class"]),r(u,{label:"Weight",class:d({"text-red-400":e(t).errors.weight})},{default:a(()=>[r(c,{modelValue:e(t).weight,"onUpdate:modelValue":o[4]||(o[4]=i=>e(t).weight=i),type:"text",placeholder:"Enter Weight",error:e(t).errors.weight},{default:a(()=>[e(t).errors.weight?(s(),n("div",j,m(e(t).errors.weight),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{q as default};
