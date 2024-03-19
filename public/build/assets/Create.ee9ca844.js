import{T as V,c as x,w as o,o as t,a as s,u as e,Z as b,b as y,n as d,d as n,t as i,e as u}from"./app.16295995.js";import{C as $,a as k,j as C}from"./colors.70c2167b.js";import{_ as E}from"./LayoutAuthenticated.4d7cdf28.js";import{_ as v,a as B}from"./SectionTitleLineWithButton.b2cc9cd1.js";import{_,a as U}from"./CardBox.c4664fc3.js";import{_ as m}from"./FormField.47b2fb76.js";import{_ as p}from"./FormControl.3f681337.js";import{_ as A}from"./FormCheckRadioGroup.00043f17.js";import{_ as N}from"./BaseButtons.a4702952.js";import"./BaseLevel.3ed301b4.js";const P={key:0,class:"text-red-400 text-sm"},g={key:0,class:"text-red-400 text-sm"},S={key:0,class:"text-red-400 text-sm"},j={key:0,class:"text-red-400 text-sm"},q={__name:"Create",props:{roles:{type:Object,default:()=>({})}},setup(c){const w=c,r=V({name:"",email:"",password:"",password_confirmation:"",roles:[]});return(f,a)=>(t(),x(E,null,{default:o(()=>[s(e(b),{title:"Add user"}),s(B,null,{default:o(()=>[s(v,{icon:e($),title:"Add user",main:""},{default:o(()=>[s(_,{"route-name":f.route("admin.user.index"),icon:e(k),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),s(U,{form:"",onSubmit:a[5]||(a[5]=y(l=>e(r).post(f.route("admin.user.store")),["prevent"]))},{footer:o(()=>[s(N,null,{default:o(()=>[s(_,{type:"submit",color:"info",label:"Submit",class:d({"opacity-25":e(r).processing}),disabled:e(r).processing},null,8,["class","disabled"])]),_:1})]),default:o(()=>[s(m,{label:"Name",class:d({"text-red-400":e(r).errors.name})},{default:o(()=>[s(p,{modelValue:e(r).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(r).name=l),type:"text",placeholder:"Enter Name",error:e(r).errors.name},{default:o(()=>[e(r).errors.name?(t(),n("div",P,i(e(r).errors.name),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),s(m,{label:"Email",class:d({"text-red-400":e(r).errors.email})},{default:o(()=>[s(p,{modelValue:e(r).email,"onUpdate:modelValue":a[1]||(a[1]=l=>e(r).email=l),type:"text",placeholder:"Enter Email",error:e(r).errors.email},{default:o(()=>[e(r).errors.email?(t(),n("div",g,i(e(r).errors.email),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),s(m,{label:"Password",class:d({"text-red-400":e(r).errors.password})},{default:o(()=>[s(p,{modelValue:e(r).password,"onUpdate:modelValue":a[2]||(a[2]=l=>e(r).password=l),type:"password",placeholder:"Enter Password",error:e(r).errors.password},{default:o(()=>[e(r).errors.password?(t(),n("div",S,i(e(r).errors.password),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),s(m,{label:"Password Confirmation",class:d({"text-red-400":e(r).errors.password})},{default:o(()=>[s(p,{modelValue:e(r).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=l=>e(r).password_confirmation=l),type:"password",placeholder:"Enter Password Confirmation",error:e(r).errors.password},{default:o(()=>[e(r).errors.password?(t(),n("div",j,i(e(r).errors.password),1)):u("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),s(C),s(m,{label:"Roles","wrap-body":""},{default:o(()=>[s(A,{modelValue:e(r).roles,"onUpdate:modelValue":a[4]||(a[4]=l=>e(r).roles=l),name:"roles","is-column":"",options:w.roles},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{q as default};
