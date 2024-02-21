import{k as m,T as w,c as f,w as l,o as s,a as o,u as c,Z as C,n as v,b,f as k,d as n,A as u,F as i,M as P}from"./app.7822bb5d.js";import{_ as T,a as B,b as R}from"./FormValidationErrors.540b5eed.js";import{a as U,_ as h}from"./CardBox.6f77209a.js";import{_ as g}from"./FormControl.13950f3d.js";import{_}from"./FormField.827813d2.js";import{j as F}from"./colors.b93fd90a.js";import{_ as N}from"./BaseLevel.c424e8cb.js";const S={class:"mb-4 text-sm text-gray-600"},q={__name:"TwoFactorChallenge",setup(I){const r=m(!1),a=w({code:"",recovery_code:""}),p=m(null),y=m(null),x=async()=>{var d,e;r.value^=!0,await P(),r.value?((d=p.value)==null||d.focus(),a.code=""):((e=y.value)==null||e.focus(),a.recovery_code="")},V=()=>{a.post(route("two-factor.login"))};return(d,e)=>(s(),f(T,null,{default:l(()=>[o(c(C),{title:"Two-factor Confirmation"}),o(R,{bg:"purplePink"},{default:l(({cardClass:$})=>[o(U,{class:v($),form:"",onSubmit:b(V,["prevent"])},{default:l(()=>[o(B),o(_,null,{default:l(()=>[k("div",S,[r.value?(s(),n(i,{key:1},[u(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),n(i,{key:0},[u(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))])]),_:1}),r.value?(s(),f(_,{key:1,label:"Recovery Code","label-for":"recovery_code",help:"Please enter recovery code"},{default:l(()=>[o(g,{id:"recovery_code",onSetRef:e[2]||(e[2]=t=>p.value=t),modelValue:c(a).recovery_code,"onUpdate:modelValue":e[3]||(e[3]=t=>c(a).recovery_code=t),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])]),_:1})):(s(),f(_,{key:0,label:"Code","label-for":"code",help:"Please enter one-time code"},{default:l(()=>[o(g,{id:"code",onSetRef:e[0]||(e[0]=t=>y.value=t),modelValue:c(a).code,"onUpdate:modelValue":e[1]||(e[1]=t=>c(a).code=t),type:"text",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])]),_:1})),o(F),o(N,null,{default:l(()=>[o(h,{type:"submit",color:"info",label:"Log in",class:v({"opacity-25":c(a).processing}),disabled:c(a).processing},null,8,["class","disabled"]),k("button",{onClick:b(x,["prevent"])},[r.value?(s(),n(i,{key:1},[u(" Use an authentication code ")],64)):(s(),n(i,{key:0},[u(" Use a recovery code ")],64))])]),_:1})]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{q as default};
