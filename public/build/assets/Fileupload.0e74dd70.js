import{_ as y}from"./LayoutAuthenticated.7518e774.js";import{o as r,d as i,f as e,Z as w,T as I,k as u,K as g,a as h,w as v,c as k,e as _,b as C,F as M,s as U,t as j}from"./app.a501119a.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";import"./FormControl.f0142097.js";import"./colors.15970f12.js";import"./BaseLevel.8bac2488.js";const L={props:{imageUrl:String},methods:{closeModal(){this.$emit("close")}}},$={class:"fixed inset-0 flex items-center justify-center z-50"},A=e("div",{class:"absolute inset-0 bg-black opacity-75"},null,-1),O={class:"relative max-w-4xl mx-auto px-4"},S={class:"bg-white rounded-lg shadow-lg p-8"},B=["src"],F=e("i",{class:"fas fa-times"},null,-1),N=[F];function E(m,t,a,o,n,c){return r(),i("div",$,[A,e("div",O,[e("div",S,[e("img",{src:a.imageUrl,alt:"Image",class:"w-full"},null,8,B),e("button",{onClick:t[0]||(t[0]=(...d)=>c.closeModal&&c.closeModal(...d)),class:"absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"},N)])])])}const H=b(L,[["render",E]]),V={components:{LayoutAuthenticated:y,Head:w,ModalImage:H},props:{errors:Object,productId:{type:String}},setup(m){const t=I({image:[]}),a=u([]),o=u(!1),n=u("");return{form:t,images:a,modalImageUrl:n,modalOpen:o,previewImages:s=>{a.value=[],Array.from(s.target.files).forEach(l=>{a.value.push({url:URL.createObjectURL(l)}),t.image.push(l)})},submit:()=>{Array.from(a).forEach(l=>{t.image.push(l)}),t.post(route("admin.image.store",m.productId))},removeImage:s=>{a.value.splice(s,1),t.image.splice(s,1)},openImageModal:s=>{n.value=a.value[s].url,o.value=!0,console.log(n.value)}}}},D=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Image Upload ",-1),R={class:"py-12"},q={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},z={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},K={class:"p-6 bg-white border-b border-gray-200"},T={class:"mb-6"},Z=e("label",{for:"File",class:"text-black"},"Images Upload",-1),G={key:0,class:"mb-6 text-red-500"},J={class:"grid grid-cols-3 gap-4"},P=["src","onClick"],Q={class:"absolute top-2 right-2"},W=["onClick"],X=e("i",{class:"fas fa-trash"},null,-1),Y=[X],ee={key:1,class:"mt-4 font-bold text-red-600"},te=e("div",{class:"flex justify-center mt-6"},[e("button",{type:"submit",class:"px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800 focus:outline-none"}," Save ")],-1);function oe(m,t,a,o,n,c){const d=g("Head"),p=g("LayoutAuthenticated"),f=g("ModalImage");return r(),i("div",null,[h(d,{title:"Dashboard"}),h(p,null,{header:v(()=>[D]),default:v(()=>[e("div",R,[e("div",q,[e("div",z,[e("div",K,[e("form",{onSubmit:t[1]||(t[1]=C((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",T,[Z,e("input",{required:"",type:"file",onChange:t[0]||(t[0]=(...s)=>o.previewImages&&o.previewImages(...s)),ref:"photos",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",accept:".jpg, .jpeg, .png, .gif, .svg",multiple:""},null,544)]),o.images.length===0?(r(),i("div",G,"No images uploaded yet.")):_("",!0),e("div",J,[(r(!0),i(M,null,U(o.images,(s,l)=>(r(),i("div",{key:l,class:"relative"},[e("img",{src:s.url,class:"w-full h-auto rounded-lg cursor-pointer",onClick:x=>o.openImageModal(l)},null,8,P),e("div",Q,[e("div",{onClick:x=>o.removeImage(l),class:"px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none"},Y,8,W)])]))),128))]),a.errors.image?(r(),i("div",ee,j(a.errors.image),1)):_("",!0),te],32)])])])])]),_:1}),o.modalOpen.value?(r(),k(f,{key:0,imageUrl:o.modalImageUrl.value,onClose:t[2]||(t[2]=s=>o.modalOpen.value=!1)},null,8,["imageUrl"])):_("",!0)])}const ce=b(V,[["render",oe]]);export{ce as default};
