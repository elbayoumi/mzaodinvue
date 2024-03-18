import{g as r,i as w,o,c as f,w as g,e as u,d as s,n as i,t as x,j as k,B as C,f as h,A as N,a as F,r as b}from"./app.8aa0dd67.js";import{r as I,_ as p,w as T}from"./colors.d4746137.js";const q={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},href:{type:String,default:null},target:{type:String,default:null},routeName:{type:String,default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(e){const t=e,n=r(()=>t.as?t.as:t.routeName?w:t.href?"a":"button"),c=r(()=>{var a;return n.value==="button"?(a=t.type)!=null?a:"button":null}),m=r(()=>t.small&&t.icon?"px-1":"px-2"),d=r(()=>{const a=["inline-flex","cursor-pointer","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",t.roundedFull?"rounded-full":"rounded",t.active?"ring ring-black dark:ring-white":"ring-blue-700",I(t.color,t.outline,!t.disabled)];return t.small?a.push("text-sm",t.roundedFull?"px-3 py-1":"p-1"):a.push("py-2",t.roundedFull?"px-6":"px-3"),t.disabled&&a.push("cursor-not-allowed",t.outline?"opacity-50":"opacity-70"),a});return(a,y)=>(o(),f(k(n.value),{class:i(d.value),href:e.routeName?e.routeName:e.href,type:c.value,target:e.target,disabled:e.disabled},{default:g(()=>[e.icon?(o(),f(p,{key:0,path:e.icon},null,8,["path"])):u("",!0),e.label?(o(),s("span",{key:1,class:i(m.value)},x(e.label),3)):u("",!0)]),_:1},8,["class","href","type","target","disabled"]))}},V={key:0,class:"flex items-stretch border-b border-gray-100 dark:border-slate-800"},$={key:1,class:"text-center py-24 text-gray-500 dark:text-slate-400"},j=h("p",null,"Nothing's here\u2026",-1),D=[j],z={key:3,class:"p-6 border-t border-gray-100 dark:border-slate-800"},G={__name:"CardBox",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"rounded-xl"},hasTable:Boolean,empty:Boolean,form:Boolean,hoverable:Boolean,modal:Boolean},emits:["header-icon-click","submit"],setup(e,{emit:t}){const n=e,c=t,m=r(()=>n.form?"form":"div"),d=C(),a=r(()=>d.footer&&!!d.footer()),y=r(()=>{const l=[n.rounded,n.modal?"dark:bg-slate-900":"dark:bg-slate-900/70"];return n.hoverable&&l.push("hover:shadow-lg transition-shadow duration-500"),l}),v=r(()=>{var l;return(l=n.headerIcon)!=null?l:T}),B=()=>{c("header-icon-click")},S=l=>{c("submit",l)};return(l,A)=>(o(),f(k(m.value),{class:i([y.value,"bg-white flex flex-col"]),onSubmit:S,enctype:"multipart/form-data"},{default:g(()=>[e.title?(o(),s("header",V,[h("div",{class:i(["flex items-center py-3 grow font-bold",[e.icon?"px-4":"px-6"]])},[e.icon?(o(),f(p,{key:0,path:e.icon,class:"mr-3"},null,8,["path"])):u("",!0),N(" "+x(e.title),1)],2),h("button",{class:"flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring",onClick:B},[F(p,{path:v.value},null,8,["path"])])])):u("",!0),e.empty?(o(),s("div",$,D)):(o(),s("div",{key:2,class:i(["flex-1",{"p-6":!e.hasTable}])},[b(l.$slots,"default")],2)),a.value?(o(),s("div",z,[b(l.$slots,"footer")])):u("",!0)]),_:3},40,["class"]))}};export{q as _,G as a};
