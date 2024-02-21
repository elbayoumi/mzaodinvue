import{T as h,c as w,w as o,o as l,a as t,u as e,Z as v,b as E,n,d as i,s as U,F as $,t as u,e as _,f as g}from"./app.7822bb5d.js";import{C as q,a as B,D}from"./colors.b93fd90a.js";import{_ as N}from"./LayoutAuthenticated.82ef2bf5.js";import{_ as A,a as C}from"./SectionTitleLineWithButton.8575c76e.js";import{_ as x,a as F}from"./CardBox.6f77209a.js";import{_ as m}from"./FormField.827813d2.js";import{_ as c}from"./FormControl.13950f3d.js";import{_ as T}from"./BaseButtons.f67d3b8b.js";import"./BaseLevel.c424e8cb.js";const L={class:"w-44 relative"},M={class:"absolute inset-x-1/2"},O=["src","alt"],S={key:0,class:"text-red-400 text-sm"},W={key:0,class:"text-red-400 text-sm"},j={key:0,class:"text-red-400 text-sm"},z={key:0,class:"text-red-400 text-sm"},I={key:0,class:"text-red-400 text-sm"},K={key:0,class:"text-red-400 text-sm"},R={key:0,class:"text-red-400 text-sm"},Y={key:0,class:"text-red-400 text-sm"},Z={key:0,class:"text-red-400 text-sm"},G={key:0,class:"text-red-400 text-sm"},H={key:0,class:"text-red-400 text-sm"},J={key:0,class:"text-red-400 text-sm"},P={key:0,class:"text-red-400 text-sm"},Q={key:0,class:"text-red-400 text-sm"},ie={__name:"Edit",props:{product:{type:Object,default:()=>({})}},setup(V){const d=V;let k=d.product.image_product;const r=h({_method:"put",name_arabic:d.product.name_arabic,name_english:d.product.name_english,sku:d.product.sku,weight:d.product.weight,payment_deadline_minutes:d.product.payment_deadline_minutes,cost_price:d.product.cost_price,estimated_market_price:d.product.estimated_market_price,auction_duration_minutes:d.product.auction_duration_minutes,registration_amount:d.product.registration_amount,required_bidders:d.product.required_bidders,opening_bid_amount:d.product.opening_bid_amount,product_details:d.product.product_details,auction_start:y(d.product.auction_start),auction_end:y(d.product.auction_end)});function y(p){if(!p)return null;const s=new Date(p),a=s.getFullYear();let f=s.getMonth()+1;f<10&&(f="0"+f);let b=s.getDate();return b<10&&(b="0"+b),`${a}-${f}-${b}`}return(p,s)=>(l(),w(N,null,{default:o(()=>[t(e(v),{title:"Update product"}),t(C,null,{default:o(()=>[t(A,{icon:e(q),title:"Update product",main:""},{default:o(()=>[t(x,{"route-name":p.route("admin.product.index"),icon:e(B),label:"Back",color:"white","rounded-full":"",small:""},null,8,["route-name","icon"])]),_:1},8,["icon"]),t(F,{form:"",onSubmit:s[14]||(s[14]=E(a=>e(r).post(p.route("admin.product.update",d.product.id)),["prevent"]))},{footer:o(()=>[t(T,null,{default:o(()=>[t(x,{type:"submit",color:"info",label:"Submit",class:n({"opacity-25":e(r).processing}),disabled:e(r).processing},null,8,["class","disabled"])]),_:1})]),default:o(()=>[t(m,{class:"image-container"},{default:o(()=>[t(x,{label:"Image Edit",class:"w-28 h-10","route-name":p.route("admin.product.image",d.product.id),icon:e(D)},null,8,["route-name","icon"]),(l(!0),i($,null,U(e(k),a=>(l(),i("div",{key:a.id,class:"px-3 py-2 max-w-full focus:ring focus:outline-none rounded w-full', 'dark:placeholder-gray-400"},[g("div",L,[g("span",M,u(a.rank),1),g("img",{class:"image block w-full",src:a.img,alt:a.alt},null,8,O)])]))),128))]),_:1}),t(m,{label:"Name Arabic",class:n({"text-red-400":e(r).errors.name_arabic})},{default:o(()=>[t(c,{modelValue:e(r).name_arabic,"onUpdate:modelValue":s[0]||(s[0]=a=>e(r).name_arabic=a),type:"text",placeholder:"Enter Name Arabic",error:e(r).errors.name_arabic},{default:o(()=>[e(r).errors.name_arabic?(l(),i("div",S,u(e(r).errors.name_arabic),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"Name English",class:n({"text-red-400":e(r).errors.name_english})},{default:o(()=>[t(c,{modelValue:e(r).name_english,"onUpdate:modelValue":s[1]||(s[1]=a=>e(r).name_english=a),type:"text",placeholder:"Enter Name English",error:e(r).errors.name},{default:o(()=>[e(r).errors.name_english?(l(),i("div",W,u(e(r).errors.name_english),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"sku",class:n({"text-red-400":e(r).errors.sku})},{default:o(()=>[t(c,{modelValue:e(r).sku,"onUpdate:modelValue":s[2]||(s[2]=a=>e(r).sku=a),type:"text",placeholder:"Enter sku",error:e(r).errors.sku},{default:o(()=>[e(r).errors.sku?(l(),i("div",j,u(e(r).errors.sku),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"Weight",class:n({"text-red-400":e(r).errors.weight})},{default:o(()=>[t(c,{modelValue:e(r).weight,"onUpdate:modelValue":s[3]||(s[3]=a=>e(r).weight=a),type:"number",step:"0.01",placeholder:"Enter Weight",error:e(r).errors.weight},{default:o(()=>[e(r).errors.weight?(l(),i("div",z,u(e(r).errors.weight),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"payment deadline minutes",class:n({"text-red-400":e(r).errors.payment_deadline_minutes})},{default:o(()=>[t(c,{modelValue:e(r).payment_deadline_minutes,"onUpdate:modelValue":s[4]||(s[4]=a=>e(r).payment_deadline_minutes=a),type:"number",step:"0.01",placeholder:"Enter payment deadline minutes",error:e(r).errors.payment_deadline_minutes},{default:o(()=>[e(r).errors.payment_deadline_minutes?(l(),i("div",I,u(e(r).errors.payment_deadline_minutes),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"cost price",class:n({"text-red-400":e(r).errors.cost_price})},{default:o(()=>[t(c,{modelValue:e(r).cost_price,"onUpdate:modelValue":s[5]||(s[5]=a=>e(r).cost_price=a),type:"number",step:"0.01",placeholder:"Enter cost price",error:e(r).errors.cost_price},{default:o(()=>[e(r).errors.cost_price?(l(),i("div",K,u(e(r).errors.cost_price),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"estimated market price",class:n({"text-red-400":e(r).errors.estimated_market_price})},{default:o(()=>[t(c,{modelValue:e(r).estimated_market_price,"onUpdate:modelValue":s[6]||(s[6]=a=>e(r).estimated_market_price=a),type:"number",step:"0.01",placeholder:"Enter estimated market price",error:e(r).errors.estimated_market_price},{default:o(()=>[e(r).errors.estimated_market_price?(l(),i("div",R,u(e(r).errors.estimated_market_price),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"auction duration minutes",class:n({"text-red-400":e(r).errors.auction_duration_minutes})},{default:o(()=>[t(c,{modelValue:e(r).auction_duration_minutes,"onUpdate:modelValue":s[7]||(s[7]=a=>e(r).auction_duration_minutes=a),type:"number",placeholder:"Enter auction  duration minutes",error:e(r).errors.auction_duration_minutes},{default:o(()=>[e(r).errors.auction_duration_minutes?(l(),i("div",Y,u(e(r).errors.weight),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"registration amount",class:n({"text-red-400":e(r).errors.registration_amount})},{default:o(()=>[t(c,{modelValue:e(r).registration_amount,"onUpdate:modelValue":s[8]||(s[8]=a=>e(r).registration_amount=a),type:"number",step:"0.01",placeholder:"Enter registration amount",error:e(r).errors.registration_amount},{default:o(()=>[e(r).errors.registration_amount?(l(),i("div",Z,u(e(r).errors.registration_amount),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"required bidders",class:n({"text-red-400":e(r).errors.required_bidders})},{default:o(()=>[t(c,{modelValue:e(r).required_bidders,"onUpdate:modelValue":s[9]||(s[9]=a=>e(r).required_bidders=a),type:"number",step:"0.01",placeholder:"Enter required bidders",error:e(r).errors.required_bidders},{default:o(()=>[e(r).errors.required_bidders?(l(),i("div",G,u(e(r).errors.required_bidders),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"opening bid amount",class:n({"text-red-400":e(r).errors.opening_bid_amount})},{default:o(()=>[t(c,{modelValue:e(r).opening_bid_amount,"onUpdate:modelValue":s[10]||(s[10]=a=>e(r).opening_bid_amount=a),type:"number",step:"0.01",placeholder:"Enter opening bid amount",error:e(r).errors.opening_bid_amount},{default:o(()=>[e(r).errors.opening_bid_amount?(l(),i("div",H,u(e(r).errors.opening_bid_amount),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"Details",class:n({"text-red-400":e(r).errors.product_details})},{default:o(()=>[t(c,{modelValue:e(r).product_details,"onUpdate:modelValue":s[11]||(s[11]=a=>e(r).product_details=a),type:"textarea",placeholder:"Enter  Details",error:e(r).errors.product_details},{default:o(()=>[e(r).errors.product_details?(l(),i("div",J,u(e(r).errors.product_details),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"auction start",class:n({"text-red-400":e(r).errors.auction_start})},{default:o(()=>[t(c,{modelValue:e(r).auction_start,"onUpdate:modelValue":s[12]||(s[12]=a=>e(r).auction_start=a),type:"date",step:"0.01",placeholder:"Enter auction start",error:e(r).errors.auction_start},{default:o(()=>[e(r).errors.auction_start?(l(),i("div",P,u(e(r).errors.auction_start),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"]),t(m,{label:"auction end",class:n({"text-red-400":e(r).errors.auction_end})},{default:o(()=>[t(c,{modelValue:e(r).auction_end,"onUpdate:modelValue":s[13]||(s[13]=a=>e(r).auction_end=a),type:"date",step:"0.01",placeholder:"Enter auction end",error:e(r).errors.auction_end},{default:o(()=>[e(r).errors.auction_end?(l(),i("div",Q,u(e(r).errors.auction_end),1)):_("",!0)]),_:1},8,["modelValue","error"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}};export{ie as default};
