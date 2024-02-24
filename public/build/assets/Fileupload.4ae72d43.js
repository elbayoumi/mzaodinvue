import{_ as y}from"./LayoutAuthenticated.620e931c.js";import{o as r,d as i,f as e,Z as w,T as I,k as u,K as g,a as h,w as v,c as k,e as _,b as C,F as M,s as U,t as L}from"./app.1f988cd7.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";import"./FormControl.f3fd1ae3.js";import"./colors.1abbadb3.js";import"./BaseLevel.02181a00.js";const $={props:{imageUrl:String},methods:{closeModal(){this.$emit("close")}}},A={class:"fixed inset-0 flex items-center justify-center z-50"},O=e("div",{class:"absolute inset-0 bg-black opacity-75"},null,-1),S={class:"relative max-w-4xl mx-auto px-4"},j={class:"bg-white rounded-lg shadow-lg p-8"},B=["src"],F=e("i",{class:"fas fa-times"},null,-1),N=[F];function E(m,o,a,t,n,d){return r(),i("div",A,[O,e("div",S,[e("div",j,[e("img",{src:a.imageUrl,alt:"Image",class:"w-full"},null,8,B),e("button",{onClick:o[0]||(o[0]=(...c)=>d.closeModal&&d.closeModal(...c)),class:"absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"},N)])])])}const H=b($,[["render",E]]),V={components:{LayoutAuthenticated:y,Head:w,ModalImage:H},props:{errors:Object,productId:{type:String}},setup(m){const o=I({image:[]}),a=u([]),t=u(!1),n=u("");return{form:o,images:a,modalImageUrl:n,modalOpen:t,previewImages:s=>{a.value=[],Array.from(s.target.files).forEach(l=>{a.value.push({url:URL.createObjectURL(l)}),o.image.push(l)})},submit:()=>{Array.from(a).forEach(l=>{o.image.push(l)}),o.post(route("admin.image.store",m.productId))},removeImage:s=>{a.value.splice(s,1),o.image.splice(s,1)},openImageModal:s=>{n.value=a.value[s].url,t.value=!0,console.log(n.value)}}}},D=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Image Upload ",-1),R={class:"py-12"},q={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},z={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},K={class:"p-6 bg-white border-b border-gray-200"},T={class:"mb-6"},Z=e("label",{for:"File",class:"text-black"},"Images Upload",-1),G={key:0,class:"mb-6 text-red-500"},J={class:"grid grid-cols-3 gap-4"},P=["src","onClick"],Q={class:"absolute top-2 right-2"},W=["onClick"],X=e("i",{class:"fas fa-trash"},null,-1),Y=[X],ee={key:1,class:"mt-4 font-bold text-red-600"},oe=e("div",{class:"flex justify-center mt-6"},[e("button",{type:"submit",class:"px-6 py-2 text-white bg-gray-900 rounded hover:bg-gray-800 focus:outline-none"}," Save ")],-1);function te(m,o,a,t,n,d){const c=g("Head"),p=g("LayoutAuthenticated"),f=g("ModalImage");return r(),i("div",null,[h(c,{title:"Dashboard"}),h(p,null,{header:v(()=>[D]),default:v(()=>[e("div",R,[e("div",q,[e("div",z,[e("div",K,[e("form",{onSubmit:o[1]||(o[1]=C((...s)=>t.submit&&t.submit(...s),["prevent"]))},[e("div",T,[Z,e("input",{required:"",type:"file",onChange:o[0]||(o[0]=(...s)=>t.previewImages&&t.previewImages(...s)),ref:"photos",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",multiple:""},null,544)]),t.images.length===0?(r(),i("div",G,"No images uploaded yet.")):_("",!0),e("div",J,[(r(!0),i(M,null,U(t.images,(s,l)=>(r(),i("div",{key:l,class:"relative"},[e("img",{src:s.url,class:"w-full h-auto rounded-lg cursor-pointer",onClick:x=>t.openImageModal(l)},null,8,P),e("div",Q,[e("div",{onClick:x=>t.removeImage(l),class:"px-2 py-1 cursor-pointer bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 focus:outline-none"},Y,8,W)])]))),128))]),a.errors.image?(r(),i("div",ee,L(a.errors.image),1)):_("",!0),oe],32)])])])])]),_:1}),t.modalOpen.value?(r(),k(f,{key:0,imageUrl:t.modalImageUrl.value,onClose:o[2]||(o[2]=s=>t.modalOpen.value=!1)},null,8,["imageUrl"])):_("",!0)])}const de=b(V,[["render",te]]);export{de as default};
