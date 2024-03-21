import{T as V,c as i,w as o,o as n,a as e,u as s,Z as $,n as u,b as y,B as d,t as k,e as f,i as h,f as c}from"./app.c279512e.js";import{l as P,M as B,j as R}from"./colors.92500560.js";import{_ as v,a as x,c as N,b as q}from"./FormValidationErrors.c8eb99e6.js";import{a as C,_ as p}from"./CardBox.39a4c40f.js";import{_ as L}from"./FormCheckRadioGroup.4f608e0f.js";import{_}from"./FormField.78d1d827.js";import{_ as b}from"./FormControl.1940f614.js";import{_ as S}from"./BaseButtons.2edbd50e.js";import{_ as U}from"./BaseLevel.acfa3808.js";const z=c("div",{class:"text-center font-weight-bold w-32 m-auto"},[c("img",{src:"https://mzaodin.com/website/log-removebg-preview.png",alt:"",class:"img-fluid"})],-1),H={__name:"Login",props:{canResetPassword:Boolean,status:{type:String,default:null}},setup(m){const a=V({email:"",password:"",remember:[]}),w=()=>{a.transform(t=>({...t,remember:a.remember&&a.remember.length?"on":""})).post(route("login"),{onFinish:()=>a.reset("password")})};return(t,r)=>(n(),i(v,null,{default:o(()=>[e(s($),{title:"Login"}),e(q,{bg:"purplePink"},{default:o(({cardClass:g})=>[e(C,{class:u(g),form:"",onSubmit:y(w,["prevent"])},{default:o(()=>[e(x),z,m.status?(n(),i(N,{key:0,color:"info"},{default:o(()=>[d(k(m.status),1)]),_:1})):f("",!0),e(_,{label:"Email","label-for":"email",help:"Please enter your email"},{default:o(()=>[e(b,{modelValue:s(a).email,"onUpdate:modelValue":r[0]||(r[0]=l=>s(a).email=l),icon:s(P),id:"email",autocomplete:"email",type:"email",required:""},null,8,["modelValue","icon"])]),_:1}),e(_,{label:"Password","label-for":"password",help:"Please enter your password"},{default:o(()=>[e(b,{modelValue:s(a).password,"onUpdate:modelValue":r[1]||(r[1]=l=>s(a).password=l),icon:s(B),type:"password",id:"password",autocomplete:"current-password",required:""},null,8,["modelValue","icon"])]),_:1}),e(L,{modelValue:s(a).remember,"onUpdate:modelValue":r[2]||(r[2]=l=>s(a).remember=l),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),e(R),e(U,null,{default:o(()=>[e(S,null,{default:o(()=>[e(p,{type:"submit",color:"info",label:"Login",class:u({"opacity-25":s(a).processing}),disabled:s(a).processing},null,8,["class","disabled"]),m.canResetPassword?(n(),i(p,{key:0,"route-name":t.route("password.request"),color:"info",outline:"",label:"Remind"},null,8,["route-name"])):f("",!0)]),_:1}),e(s(h),{class:"text-black",href:t.route("register")},{default:o(()=>[d(" Register ")]),_:1},8,["href"])]),_:1})]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{H as default};
