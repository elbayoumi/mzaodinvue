import{h as d,o as t,d as a,f as l,r as c,n as i,u,g as o,Q as g,c as f,w as h,F as k,s as x,t as y,e as v}from"./app.16295995.js";import{O as w,P as B,Q as S,u as b}from"./colors.70c2167b.js";const P={class:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100"},N={__name:"LayoutGuest",setup(e){const r=d();return(s,n)=>(t(),a("div",{class:i({dark:u(r).darkMode})},[l("div",P,[c(s.$slots,"default")])],2))}},R={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:e=>["purplePink","pinkRed"].includes(e)}},setup(e){const r=e,s=o(()=>{if(d().darkMode)return w;switch(r.bg){case"purplePink":return S;case"pinkRed":return B}return""});return(n,p)=>(t(),a("div",{class:i(["flex min-h-screen items-center justify-center",s.value])},[c(n.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}},$={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},C={__name:"NotificationBarInCard",props:{color:{type:String,required:!0},isPlacedWithHeader:{type:Boolean}},setup(e){return(r,s)=>(t(),a("div",$,[l("div",{class:i([[u(b)[e.color],{"rounded-t-xl":!e.isPlacedWithHeader}],"flex flex-col p-6 transition-colors"])},[c(r.$slots,"default")],2)]))}},F=l("b",null,"Whoops! Something went wrong.",-1),V={__name:"FormValidationErrors",setup(e){const r=o(()=>g().props.errors),s=o(()=>Object.keys(r.value).length>0);return(n,p)=>s.value?(t(),f(C,{key:0,color:"danger"},{default:h(()=>[F,(t(!0),a(k,null,x(r.value,(_,m)=>(t(),a("span",{key:m},y(_),1))),128))]),_:1})):v("",!0)}};export{N as _,V as a,R as b,C as c};
