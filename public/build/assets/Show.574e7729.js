import{c as n,w as a,o as i,a as t,u as l,Z as c,f as e,t as s}from"./app.6497e6d1.js";import{C as d,a as m}from"./colors.13c29d1c.js";import{_}from"./LayoutAuthenticated.9968e124.js";import{_ as u,a as f}from"./SectionTitleLineWithButton.807c2b75.js";import{_ as p,a as b}from"./CardBox.200600ec.js";import"./FormControl.159c384a.js";import"./BaseLevel.3bd11156.js";const h=e("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Name ",-1),w={"data-label":"Name"},k=e("td",{class:"p-4 pl-8 text-slate-500 dark:text-slate-400 hidden lg:block"}," Created ",-1),x={"data-label":"Created"},j={__name:"Show",props:{role:{type:Object,default:()=>({})},permissions:{type:Object,default:()=>({})},roleHasPermissions:{type:Object,default:()=>({})}},setup(o){return(r,y)=>(i(),n(_,null,{default:a(()=>[t(l(c),{title:"View role"}),t(f,null,{default:a(()=>[t(u,{icon:l(d),title:"View role",main:""},{default:a(()=>[t(p,{"route-name":r.route("admin.role.index"),icon:l(m),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),t(b,{class:"mb-6"},{default:a(()=>[e("table",null,[e("tbody",null,[e("tr",null,[h,e("td",w,s(o.role.name),1)]),e("tr",null,[k,e("td",x,s(new Date(o.role.created_at).toLocaleString()),1)])])])]),_:1})]),_:1})]),_:1}))}};export{j as default};