import{T as _,g as p,c as i,w as a,o,a as e,u as t,Z as g,n,b as y,A as r,e as b,i as h,f as k}from"./app.5525411e.js";import{_ as v,a as $,c as w,b as V}from"./FormValidationErrors.0962bfc6.js";import{a as x,_ as B}from"./CardBox.6a785c8c.js";import{_ as N}from"./FormField.d5eeaa0c.js";import{j as C}from"./colors.a2631a0f.js";import{_ as E}from"./BaseLevel.012c8a60.js";const S=k("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),P={__name:"VerifyEmail",props:{status:{type:String,default:null}},setup(l){const c=l,s=_(),f=p(()=>c.status==="verification-link-sent"),u=()=>{s.post(route("verification.send"))};return(m,T)=>(o(),i(v,null,{default:a(()=>[e(t(g),{title:"Email Verification"}),e(V,{bg:"purplePink"},{default:a(({cardClass:d})=>[e(x,{class:n(d),form:"",onSubmit:y(u,["prevent"])},{default:a(()=>[e($),f.value?(o(),i(w,{key:0,color:"info"},{default:a(()=>[r(" A new verification link has been sent to the email address you provided during registration. ")]),_:1})):b("",!0),e(N,null,{default:a(()=>[S]),_:1}),e(C),e(E,null,{default:a(()=>[e(B,{type:"submit",color:"info",label:"Resend Verification Email",class:n({"opacity-25":t(s).processing}),disabled:t(s).processing},null,8,["class","disabled"]),e(t(h),{href:m.route("logout"),method:"post",as:"button"},{default:a(()=>[r(" Logout ")]),_:1},8,["href"])]),_:1})]),_:2},1032,["class"])]),_:1})]),_:1}))}};export{P as default};