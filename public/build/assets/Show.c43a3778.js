import{c as n,w as a,o as r,a as t,u as s,Z as m,f as e,t as l}from"./app.d750df79.js";import{C as c,a as d}from"./colors.c33bd641.js";import{_}from"./LayoutAuthenticated.dd6ecd03.js";import{_ as u,a as p}from"./SectionTitleLineWithButton.9e99fbdc.js";import{_ as f,a as h}from"./CardBox.12466e72.js";import"./FormControl.51134fba.js";import"./BaseLevel.2bb95d4c.js";const b=e("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),w={"data-label":"Name"},k=e("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Created ",-1),x={"data-label":"Created"},A={__name:"Show",props:{permission:{type:Object,default:()=>({})}},setup(o){return(i,B)=>(r(),n(_,null,{default:a(()=>[t(s(m),{title:"View permission"}),t(p,null,{default:a(()=>[t(u,{icon:s(c),title:"View permission",main:""},{default:a(()=>[t(f,{"route-name":i.route("admin.permission.index"),icon:s(d),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),t(h,{class:"mb-6"},{default:a(()=>[e("table",null,[e("tbody",null,[e("tr",null,[b,e("td",w,l(o.permission.name),1)]),e("tr",null,[k,e("td",x,l(new Date(o.permission.created_at).toLocaleString()),1)])])])]),_:1})]),_:1})]),_:1}))}};export{A as default};