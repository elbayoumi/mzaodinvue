import{T as V,c as y,w as a,o as i,a as r,u as e,Z as k,b as g,n,d as m,t as u,e as p,f as d,A as c}from"./app.16295995.js";import{m as w,a as v}from"./colors.70c2167b.js";import{_ as $}from"./LayoutAuthenticated.4d7cdf28.js";import{_ as U,a as E}from"./SectionTitleLineWithButton.b2cc9cd1.js";import{_ as b,a as B}from"./CardBox.c4664fc3.js";import{_ as f}from"./FormField.47b2fb76.js";import{_}from"./FormControl.3f681337.js";import{_ as N}from"./FormCheckRadioGroup.00043f17.js";import{_ as O}from"./BaseButtons.a4702952.js";import"./BaseLevel.3ed301b4.js";const L={key:0,class:"text-red-400 text-sm"},S=d("div",{class:"item-list"},[c(" You can also enter an internal path such as "),d("em",{class:"placeholder"},"/home"),c(" or an external URL such as "),d("em",{class:"placeholder"},"http://example.com"),c(". Add prefix "),d("em",{class:"placeholder"},"<admin>"),c(" to link for admin page. Enter "),d("em",{class:"placeholder"},"<nolink>"),c(" to display link text only. ")],-1),T={key:0,class:"text-red-400 text-sm"},j={key:0,class:"text-red-400 text-sm"},A={key:0,class:"text-red-400 text-sm"},C=d("div",null," The maximum depth for a link and all its children is fixed. Some menu links may not be available as parents if selecting them would exceed this limit. ",-1),D={key:0,class:"text-red-400 text-sm"},G={__name:"Edit",props:{menu:{type:Object,default:()=>({})},item:{type:Object,default:()=>({})},item_options:{type:Object,default:()=>({})}},setup(x){const s=x,t=V({_method:"put",name:s.item.name,uri:s.item.uri,description:s.item.description,enabled:s.item.enabled,parent_id:s.item.parent_id,weight:s.item.weight});return(h,o)=>(i(),y($,null,{default:a(()=>[r(e(k),{title:"Update menu item"}),r(E,null,{default:a(()=>[r(U,{icon:e(w),title:"Update menu item",main:""},{default:a(()=>[r(b,{"route-name":h.route("admin.menu.item.index",x.menu.id),icon:e(v),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),r(B,{form:"",onSubmit:o[6]||(o[6]=g(l=>e(t).post(h.route("admin.menu.item.update",{menu:s.menu.id,item:s.item.id})),["prevent"]))},{footer:a(()=>[r(O,null,{default:a(()=>[r(b,{type:"submit",color:"info",label:"Submit",class:n({"opacity-25":e(t).processing}),disabled:e(t).processing},null,8,["class","disabled"])]),_:1})]),default:a(()=>[r(f,{label:"Name",class:n({"text-red-400":e(t).errors.name})},{default:a(()=>[r(_,{modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).name=l),type:"text",placeholder:"Enter Name",error:e(t).errors.name},{default:a(()=>[e(t).errors.name?(i(),m("div",L,u(e(t).errors.name),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(f,{label:"Link",class:n({"text-red-400":e(t).errors.uri})},{default:a(()=>[r(_,{modelValue:e(t).uri,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).uri=l),type:"text",placeholder:"Enter Link",error:e(t).errors.name},{default:a(()=>[S,e(t).errors.uri?(i(),m("div",T,u(e(t).errors.uri),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(f,{label:"Description",class:n({"text-red-400":e(t).errors.description})},{default:a(()=>[r(_,{modelValue:e(t).description,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).description=l),type:"text",placeholder:"Enter Description",error:e(t).errors.description},{default:a(()=>[e(t).errors.description?(i(),m("div",j,u(e(t).errors.description),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),r(N,{modelValue:e(t).enabled,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).enabled=l),name:"enabled",options:{enabled:"Enabled"}},null,8,["modelValue"]),r(f,{label:"Parent Item",class:n({"text-red-400":e(t).errors.parent_id})},{default:a(()=>[r(_,{modelValue:e(t).parent_id,"onUpdate:modelValue":o[4]||(o[4]=l=>e(t).parent_id=l),type:"select",placeholder:"--ROOT--",error:e(t).errors.parent_id,options:x.item_options},{default:a(()=>[e(t).errors.parent_id?(i(),m("div",A,u(e(t).errors.parent_id),1)):p("",!0),C]),_:1},8,["modelValue","error","options"])]),_:1},8,["class"]),r(f,{label:"Weight",class:n({"text-red-400":e(t).errors.weight})},{default:a(()=>[r(_,{modelValue:e(t).weight,"onUpdate:modelValue":o[5]||(o[5]=l=>e(t).weight=l),type:"text",placeholder:"Enter Weight",error:e(t).errors.weight},{default:a(()=>[e(t).errors.weight?(i(),m("div",D,u(e(t).errors.weight),1)):p("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{G as default};
