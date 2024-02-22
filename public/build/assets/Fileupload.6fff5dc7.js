import{_ as h}from"./LayoutAuthenticated.82143444.js";import{Z as b,T as v,k as w,K as c,d as n,a as m,w as u,F as p,o as l,f as e,b as x,s as y,t as I,e as L}from"./app.bc117f7f.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import"./FormControl.091462ab.js";import"./colors.4fbae0bd.js";import"./BaseLevel.96df74bb.js";const A={components:{LayoutAuthenticated:h,Head:b},props:{errors:Object,productId:{type:String}},setup(d){const t=v({image:[]}),o=w([]);return d.productId,{form:t,images:o,previewImages:a=>{o.value=[],Array.from(a.target.files).forEach(s=>{o.value.push({url:URL.createObjectURL(s)}),t.image.push(s)})},submit:()=>{Array.from(o).forEach(s=>{t.image.push(s)}),t.post(route("admin.image.store",d.productId))},previewImage:a=>{const s=a.target.files[0];this.url=URL.createObjectURL(s)}}}},C=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Image Create ",-1),F={class:"py-12"},U={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},R={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},S={class:"p-6 bg-white border-b border-gray-200"},j=e("label",{for:"File"},"File Upload",-1),B=["src"],E={key:0,class:"font-bold text-red-600"},H=e("div",{class:"flex items-center mt-4"},[e("button",{class:"px-6 py-2 text-white bg-gray-900 rounded"}," Save ")],-1);function N(d,t,o,r,f,g){const a=c("Head"),s=c("LayoutAuthenticated");return l(),n(p,null,[m(a,{title:"Dashboard"}),m(s,null,{header:u(()=>[C]),default:u(()=>[e("div",F,[e("div",U,[e("div",R,[e("div",S,[e("form",{onSubmit:t[1]||(t[1]=x((...i)=>r.submit&&r.submit(...i),["prevent"]))},[e("div",null,[j,e("input",{type:"file",onChange:t[0]||(t[0]=(...i)=>r.previewImages&&r.previewImages(...i)),ref:"photos",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",multiple:""},null,544),(l(!0),n(p,null,y(r.images,(i,_)=>(l(),n("div",{key:_},[e("img",{src:i.url,class:"w-full mt-4 h-80"},null,8,B)]))),128)),o.errors.image?(l(),n("div",E,I(o.errors.image),1)):L("",!0)]),H],32)])])])])]),_:1})],64)}const Z=k(A,[["render",N]]);export{Z as default};
