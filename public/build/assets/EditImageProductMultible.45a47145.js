import{_ as I}from"./LayoutAuthenticated.4dd9cd3f.js";import{Z as x,k as u,T as y,K as l,d as c,a as _,w as p,c as b,e as k,o as d,f as e,F as w,s as C}from"./app.ca92c87f.js";import{M}from"./ModalImage.35738db8.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./FormControl.7680d868.js";import"./colors.b2b9dceb.js";import"./BaseLevel.84597d56.js";const B={components:{LayoutAuthenticated:I,Head:x,ModalImage:M},props:{product:{type:Object,required:!0}},setup(i){const t=u(!1),s=u(""),o=y({});return{modalOpen:t,modalImageUrl:s,removeImage:(a,n)=>{confirm(`Are you sure you want to delete image ${n} ? `)&&o.delete(route("admin.product.destroyImage",a))},openImageModal:a=>{s.value=i.product.image_product[a].image_product,t.value=!0}}}},E=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Edit Product Images ",-1),L={class:"py-12"},O={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},U={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},H={class:"p-6 bg-white border-b border-gray-200"},N={class:"grid grid-cols-3 gap-4"},P=["src","onClick"],V={class:"absolute top-2 right-2"},$=["onClick"],F=e("i",{class:"fas fa-trash"},null,-1),j=[F];function q(i,t,s,o,g,h){const a=l("Head"),n=l("LayoutAuthenticated"),f=l("ModalImage");return d(),c("div",null,[_(a,{title:"Edit Product Images"}),_(n,null,{header:p(()=>[E]),default:p(()=>[e("div",L,[e("div",O,[e("div",U,[e("div",H,[e("div",N,[(d(!0),c(w,null,C(s.product.image_product,(r,m)=>(d(),c("div",{key:m,class:"relative"},[e("img",{src:r.image_path,class:"w-full h-auto rounded-lg cursor-pointer",onClick:v=>o.openImageModal(m)},null,8,P),e("div",V,[e("div",{onClick:v=>o.removeImage(r.id,r.rank),class:"px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none"},j,8,$)])]))),128))])])])])])]),_:1}),o.modalOpen?(d(),b(f,{key:0,imageUrl:o.modalImageUrl,onClose:t[0]||(t[0]=r=>o.modalOpen=!1)},null,8,["imageUrl"])):k("",!0)])}const Q=A(B,[["render",q]]);export{Q as default};