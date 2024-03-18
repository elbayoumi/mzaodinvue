import{T as u,k as c,c as d,w as o,o as _,a as s,u as e,Z as w,n,b,f as $}from"./app.8aa0dd67.js";import{_ as y,a as g,b as x}from"./FormValidationErrors.8e850510.js";import{a as P,_ as V}from"./CardBox.b8dae879.js";import{_ as h}from"./FormControl.e1977f27.js";import{_ as m}from"./FormField.d1a4f440.js";import{j as k}from"./colors.d4746137.js";const v=$("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),z={__name:"ConfirmPassword",setup(C){const a=u({password:""}),i=c(null),f=()=>{a.post(route("password.confirm"),{onFinish:()=>{var t;a.reset(),(t=i.value)==null||t.focus()}})};return(t,r)=>(_(),d(y,null,{default:o(()=>[s(e(w),{title:"Secure Area"}),s(x,{bg:"purplePink"},{default:o(({cardClass:p})=>[s(P,{class:n(p),form:"",onSubmit:b(f,["prevent"])},{default:o(()=>[s(g),s(m,null,{default:o(()=>[v]),_:1}),s(m,{label:"Password","label-for":"password",help:"Please enter your password to confirm"},{default:o(()=>[s(h,{id:"password",onSetRef:r[0]||(r[0]=l=>i.value=l),modelValue:e(a).password,"onUpdate:modelValue":r[1]||(r[1]=l=>e(a).password=l),type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),s(k),s(V,{type:"submit",color:"info",label:"Confirm",class:n({"opacity-25":e(a).processing}),disabled:e(a).processing},null,8,["class","disabled"])]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{z as default};
