import{T as b,k as R,c as k,w as r,o as i,a as o,u as e,A as U,t as m,e as d,f as $,b as x,n as p,d as u}from"./app.7822bb5d.js";import{l as q,a as B,A as I,I as h,J as j,K as E,L,j as P,M as S}from"./colors.b93fd90a.js";import{_ as O,a as Y}from"./SectionTitleLineWithButton.8575c76e.js";import{_ as w,a as y}from"./CardBox.6f77209a.js";import{_ as c}from"./FormField.827813d2.js";import{_ as f}from"./FormControl.13950f3d.js";import{_ as V}from"./BaseButtons.f67d3b8b.js";import{_ as F}from"./NotificationBar.0b96062b.js";import{_ as M}from"./LayoutAuthenticated.82ef2bf5.js";import"./BaseLevel.c424e8cb.js";const T={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},D={key:0,class:"text-red-400 text-sm"},z={key:0,class:"text-red-400 text-sm"},J=["src"],K={key:1,class:"text-red-400 text-sm"},G={key:0,class:"text-red-400 text-sm"},H={key:0,class:"text-red-400 text-sm"},Q={key:0,class:"text-red-400 text-sm"},ie={__name:"AccountInfo",props:{user:{type:Object,default:()=>({})}},setup(A){const v=A,l=b({name:v.user.name,email:v.user.email}),s=b({old_password:null,new_password:null,confirm_password:null});let _=b({image:null}),g=R(null);function C(n){const a=n.target.files[0];_.image=a,g.value=URL.createObjectURL(a)}function N(){_.post(route("admin.account.image.store"))}return(n,a)=>(i(),k(M,null,{default:r(()=>[o(Y,null,{default:r(()=>[o(O,{icon:e(q),title:"Profile",main:""},{default:r(()=>[o(w,{"route-name":n.route("admin.dashboard"),icon:e(B),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),n.$page.props.flash.message?(i(),k(F,{key:Date.now(),color:"success",icon:e(I)},{default:r(()=>[U(m(n.$page.props.flash.message),1)]),_:1},8,["icon"])):d("",!0),$("div",T,[o(y,{title:"Edit Profile",icon:e(h),form:"",onSubmit:a[2]||(a[2]=x(t=>e(l).post(n.route("admin.account.info.store")),["prevent"]))},{footer:r(()=>[o(V,null,{default:r(()=>[o(w,{color:"info",type:"submit",label:"Submit"})]),_:1})]),default:r(()=>[o(c,{label:"Name",help:"Required. Your name",class:p({"text-red-400":e(l).errors.name})},{default:r(()=>[o(f,{modelValue:e(l).name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(l).name=t),icon:e(q),name:"name",required:"",error:e(l).errors.name},{default:r(()=>[e(l).errors.name?(i(),u("div",D,m(e(l).errors.name),1)):d("",!0)]),_:1},8,["modelValue","icon","error"])]),_:1},8,["class"]),o(c,{label:"Email",help:"Required. Your e-mail",class:p({"text-red-400":e(l).errors.email})},{default:r(()=>[o(f,{modelValue:e(l).email,"onUpdate:modelValue":a[1]||(a[1]=t=>e(l).email=t),icon:e(j),type:"email",name:"email",required:"",error:e(l).errors.email},{default:r(()=>[e(l).errors.email?(i(),u("div",z,m(e(l).errors.email),1)):d("",!0)]),_:1},8,["modelValue","icon","error"])]),_:1},8,["class"])]),_:1},8,["icon"]),o(y,{title:"Edit Image",icon:e(h),form:"",onSubmit:x(N,["prevent"])},{footer:r(()=>[o(V,null,{default:r(()=>[o(w,{color:"info",type:"submit",label:"Submit"})]),_:1})]),default:r(()=>[o(c,{label:"Email",help:"Required. Your photo",class:p({"text-red-400":e(l).errors.email})},{default:r(()=>[$("input",{type:"file",onChange:C,class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",accept:"image/jpeg, image/jpg, image/png, image/gif, image/svg+xml",required:""},null,32),e(g)?(i(),u("img",{key:0,src:e(g),class:"w-full mt-4 h-80"},null,8,J)):d("",!0),e(_).errors.image?(i(),u("div",K,m(e(_).errors.image),1)):d("",!0)]),_:1},8,["class"])]),_:1},8,["icon"]),o(y,{title:"Change Password",icon:e(E),form:"",onSubmit:a[6]||(a[6]=x(t=>e(s).post(n.route("admin.account.password.store"),{preserveScroll:!0,onSuccess:()=>e(s).reset()}),["prevent"]))},{footer:r(()=>[o(V,null,{default:r(()=>[o(w,{type:"submit",color:"info",label:"Submit"})]),_:1})]),default:r(()=>[o(c,{label:"Current password",help:"Required. Your current password",class:p({"text-red-400":e(s).errors.old_password})},{default:r(()=>[o(f,{modelValue:e(s).old_password,"onUpdate:modelValue":a[3]||(a[3]=t=>e(s).old_password=t),icon:e(L),name:"old_password",type:"password",required:"",error:e(s).errors.old_password},{default:r(()=>[e(s).errors.old_password?(i(),u("div",G,m(e(s).errors.old_password),1)):d("",!0)]),_:1},8,["modelValue","icon","error"])]),_:1},8,["class"]),o(P),o(c,{label:"New password",help:"Required. New password",class:p({"text-red-400":e(s).errors.new_password})},{default:r(()=>[o(f,{modelValue:e(s).new_password,"onUpdate:modelValue":a[4]||(a[4]=t=>e(s).new_password=t),icon:e(S),name:"new_password",type:"password",required:"",error:e(s).errors.new_password},{default:r(()=>[e(s).errors.new_password?(i(),u("div",H,m(e(s).errors.new_password),1)):d("",!0)]),_:1},8,["modelValue","icon","error"])]),_:1},8,["class"]),o(c,{label:"Confirm password",help:"Required. New password one more time",class:p({"text-red-400":e(s).errors.confirm_password})},{default:r(()=>[o(f,{modelValue:e(s).confirm_password,"onUpdate:modelValue":a[5]||(a[5]=t=>e(s).confirm_password=t),icon:e(S),name:"confirm_password",type:"password",required:"",error:e(s).errors.confirm_password},{default:r(()=>[e(s).errors.confirm_password?(i(),u("div",Q,m(e(s).errors.confirm_password),1)):d("",!0)]),_:1},8,["modelValue","icon","error"])]),_:1},8,["class"])]),_:1},8,["icon"])])]),_:1})]),_:1}))}};export{ie as default};
