import{B as p,u as h,_,f as g}from"./colors.b93fd90a.js";import{_ as k}from"./BaseLevel.c424e8cb.js";import{_ as y}from"./CardBox.6f77209a.js";import{g as l,k as B,B as w,o,d as x,a as v,w as C,f as r,c as n,e as c,r as i,u as S,n as $}from"./app.7822bb5d.js";const N={class:"flex flex-col md:flex-row items-center"},b={class:"text-center md:text-left md:py-2"},L={__name:"NotificationBar",props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,required:!0}},setup(e){const s=e,m=l(()=>s.outline?p[s.color]:h[s.color]),t=B(!1),u=()=>{t.value=!0},d=w(),f=l(()=>d.right);return(a,V)=>t.value?c("",!0):(o(),x("div",{key:0,class:$([m.value,"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"])},[v(k,null,{default:C(()=>[r("div",N,[e.icon?(o(),n(_,{key:0,path:e.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"])):c("",!0),r("span",b,[i(a.$slots,"default")])]),f.value?i(a.$slots,"right",{key:0}):(o(),n(y,{key:1,icon:S(g),small:"","rounded-full":"",color:"white",onClick:u},null,8,["icon"]))]),_:3})],2))}};export{L as _};
