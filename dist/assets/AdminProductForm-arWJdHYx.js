import{s as v,H as q,r as d,o as N,f,J as R,I as J,ak as W,c as n,b as t,a as h,h as $,t as w,w as j,i as O,j as _,k as l,v as u,af as A,g as D,F as K,e as L,d as U,ag as T,p as m}from"./index-B-z--qmE.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H={class:"admin-product-form container mx-auto px-4 py-8 bg-light-primary dark:bg-dark-primary min-h-screen"},Q={class:"flex justify-between items-center mb-6"},Y={class:"text-2xl font-bold text-light-text-primary dark:text-dark-text-primary"},X={class:"bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-md p-6 mb-6 border border-light-neutral-300 dark:border-dark-neutral-700"},Z={class:"mb-6"},ee={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},te={class:"mb-6"},re={class:"mb-6"},ae={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},oe=["src"],se=["onClick"],ie={class:"border border-dashed border-light-neutral-400 dark:border-dark-neutral-500 rounded-lg p-4 flex flex-col items-center justify-center min-h-[8rem] bg-light-neutral-100/50 dark:bg-dark-neutral-800/50"},le={class:"mb-2 w-full"},de={class:"flex justify-center"},ne=["disabled"],ue={key:0,class:"mt-2 bg-accent-quaternary/10 text-accent-quaternary px-4 py-2 rounded border border-accent-quaternary/20"},me={class:"flex items-center"},ce={class:"mb-6"},pe={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ge={class:"mt-4"},be={class:"flex items-center"},ye={class:"border-t border-light-neutral-300 dark:border-dark-neutral-700 pt-6 flex justify-end space-x-4"},xe=["disabled"],ke={key:0,class:"bg-orange-100 dark:bg-orange-900/30 border border-orange-400 dark:border-orange-700 text-orange-700 dark:text-orange-400 px-4 py-3 rounded mb-4 relative"},ve={class:"block sm:inline"},fe={key:1,class:"bg-accent-primary/10 dark:bg-accent-primary/20 border border-accent-primary/30 dark:border-accent-primary/30 text-light-text-primary dark:text-dark-text-primary px-4 py-3 rounded mb-4"},he={key:2,class:"bg-accent-primary/10 dark:bg-accent-primary/20 border border-accent-primary/30 dark:border-accent-primary/30 text-light-text-primary dark:text-dark-text-primary px-4 py-3 rounded mb-4"},we={__name:"AdminProductForm",setup(Se){const P=R(),B=q(),g=v(()=>B.params.id),b=v(()=>!!g.value),r=d({name:"",category:"",description:"",price:0,stock:1,images:[],featured:!1,materials:"",dimensions:""}),c=d(""),p=d(!1),y=d(!1),s=d(null),I=d(!1),x=v(()=>b.value?`product_edit_${g.value}`:"product_new"),S=d("Processing image..."),C=v(()=>r.value.images.some(a=>a.startsWith("temp://")));N(async()=>{if(b.value)try{const a=await f.getProduct(g.value);a?r.value={...a}:(console.error("Product not found"),P.push("/admin/products"))}catch(a){console.error("Error loading product:",a),s.value="Failed to load product"}else{const a=localStorage.getItem(x.value);if(a)try{r.value=JSON.parse(a)}catch(e){console.error("Error parsing saved form data:",e)}}}),J(()=>r.value,a=>{localStorage.setItem(x.value,JSON.stringify(a))},{deep:!0}),W(()=>{!s.value&&!p.value&&localStorage.removeItem(x.value)});const V=()=>{c.value.trim()&&(r.value.images.push(c.value.trim()),c.value="")},E=a=>{r.value.images.splice(a,1)},F=a=>a.startsWith("base64://")?a.replace("base64://",""):a.startsWith("temp://")?a.replace("temp://",""):a,z=async a=>{const e=a.target.files[0];if(e){if(!e.type.match("image.*")){s.value="Please select an image file";return}y.value=!0,s.value=null;try{const i=(e.size/1048576).toFixed(2);e.size>1024*1024?S.value=`Resizing ${i}MB image for optimal performance...`:S.value=`Processing ${i}MB image...`;const o=await f.uploadProductImage(e);r.value.images.push(o),o.startsWith("base64://")&&(I.value=!0),a.target.value=""}catch(i){console.error("Error processing image:",i),s.value=`Failed to process image: ${i.message||"Unknown error"}`}finally{y.value=!1}}},M=async()=>{p.value=!0,s.value=null;try{if(!r.value.name||!r.value.category||!r.value.description||r.value.images.length===0)throw new Error("Please fill out all required fields and add at least one image");const a=r.value.images.filter(e=>e.startsWith("base64://"));if(a.length>0){const i=a.reduce((o,k)=>o+k.length,0)/1024;if(i>700&&!confirm(`Warning: Your product has approximately ${i.toFixed(0)}KB of image data, which is approaching Firestore's limit. Continue anyway?`)){p.value=!1;return}}b.value?await f.updateProduct(g.value,r.value):await f.createProduct(r.value),localStorage.removeItem(x.value),P.push("/admin/products")}catch(a){console.error("Error saving product:",a),s.value=a.message}finally{p.value=!1}};return(a,e)=>{const i=O("router-link");return m(),n("div",H,[t("div",Q,[t("h1",Y,w(b.value?"Edit Product":"Add New Product"),1),$(i,{to:"/admin/products",class:"text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-accent-primary transition-colors"},{default:j(()=>e[11]||(e[11]=[U(" Back to Products ")])),_:1})]),t("div",X,[t("form",{onSubmit:_(M,["prevent"])},[t("div",Z,[e[17]||(e[17]=t("h2",{class:"text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary"},"Basic Information",-1)),t("div",ee,[t("div",null,[e[12]||(e[12]=t("label",{for:"name",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Product Name",-1)),l(t("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>r.value.name=o),required:"",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},null,512),[[u,r.value.name]])]),t("div",null,[e[14]||(e[14]=t("label",{for:"category",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Category",-1)),l(t("select",{id:"category","onUpdate:modelValue":e[1]||(e[1]=o=>r.value.category=o),required:"",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},e[13]||(e[13]=[D('<option value="" data-v-9c072589>Select a category</option><option value="Beaded Jewelry" data-v-9c072589>Beaded Jewelry</option><option value="String Jewelry" data-v-9c072589>String Jewelry</option><option value="Metal Jewelry" data-v-9c072589>Metal Jewelry</option><option value="Gemstones" data-v-9c072589>Gemstones</option><option value="Earrings" data-v-9c072589>Earrings</option><option value="Necklaces" data-v-9c072589>Necklaces</option><option value="Bracelets" data-v-9c072589>Bracelets</option><option value="Rings" data-v-9c072589>Rings</option><option value="Other" data-v-9c072589>Other</option>',10)]),512),[[A,r.value.category]])]),t("div",null,[e[15]||(e[15]=t("label",{for:"price",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Price (KES)",-1)),l(t("input",{type:"number",id:"price","onUpdate:modelValue":e[2]||(e[2]=o=>r.value.price=o),min:"0.01",step:"0.01",required:"",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},null,512),[[u,r.value.price,void 0,{number:!0}]])]),t("div",null,[e[16]||(e[16]=t("label",{for:"stock",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Stock Quantity",-1)),l(t("input",{type:"number",id:"stock","onUpdate:modelValue":e[3]||(e[3]=o=>r.value.stock=o),min:"0",required:"",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},null,512),[[u,r.value.stock,void 0,{number:!0}]])])])]),t("div",te,[e[18]||(e[18]=t("label",{for:"description",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Description",-1)),l(t("textarea",{id:"description","onUpdate:modelValue":e[4]||(e[4]=o=>r.value.description=o),rows:"4",required:"",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary resize-y"},null,512),[[u,r.value.description]])]),t("div",re,[e[23]||(e[23]=t("h2",{class:"text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary"},"Product Images",-1)),t("div",ae,[(m(!0),n(K,null,L(r.value.images,(o,k)=>(m(),n("div",{key:k,class:"relative border border-light-neutral-300 dark:border-dark-neutral-600 rounded p-2 bg-light-primary dark:bg-dark-primary"},[t("img",{src:F(o),class:"w-full h-32 object-cover rounded",alt:"Product image"},null,8,oe),t("button",{type:"button",onClick:Pe=>E(k),class:"absolute top-1 right-1 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-orange-700 transition-colors"}," × ",8,se)]))),128)),t("div",ie,[t("div",le,[e[19]||(e[19]=t("label",{class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Upload Image",-1)),t("input",{type:"file",id:"image-upload",onChange:z,accept:"image/*",class:"w-full mb-2 text-sm text-light-text-primary dark:text-dark-text-primary"},null,32),e[20]||(e[20]=t("div",{class:"text-sm text-light-neutral-500 dark:text-dark-neutral-400 mb-2 text-center"},"-- OR --",-1)),e[21]||(e[21]=t("label",{class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Enter Image URL",-1)),l(t("input",{type:"url","onUpdate:modelValue":e[5]||(e[5]=o=>c.value=o),placeholder:"Enter image URL",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded mb-2 bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},null,512),[[u,c.value]]),t("div",de,[t("button",{type:"button",onClick:V,class:"bg-accent-quaternary hover:bg-accent-quaternary/90 text-white py-1 px-3 rounded-btn shadow-btn hover:shadow-btn-hover transition-all",disabled:y.value||!c.value.trim()}," Add URL ",8,ne)])])])]),y.value?(m(),n("div",ue,[t("div",me,[e[22]||(e[22]=t("span",{class:"inline-block animate-spin mr-2"},"⟳",-1)),t("span",null,w(S.value),1)])])):h("",!0),e[24]||(e[24]=t("p",{class:"text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2"},[U(" Add at least one product image. For best results, use images with a 1:1 aspect ratio. "),t("br"),t("span",{class:"text-accent-tertiary dark:text-accent-tertiary font-medium"},"High-resolution images will be automatically resized to optimize performance.")],-1))]),t("div",ce,[e[28]||(e[28]=t("h2",{class:"text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary"},"Additional Details",-1)),t("div",pe,[t("div",null,[e[25]||(e[25]=t("label",{for:"materials",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Materials",-1)),l(t("input",{type:"text",id:"materials","onUpdate:modelValue":e[6]||(e[6]=o=>r.value.materials=o),placeholder:"e.g. Sterling silver, glass beads, etc.",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},null,512),[[u,r.value.materials]])]),t("div",null,[e[26]||(e[26]=t("label",{for:"dimensions",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Dimensions",-1)),l(t("input",{type:"text",id:"dimensions","onUpdate:modelValue":e[7]||(e[7]=o=>r.value.dimensions=o),placeholder:"e.g. 18 inches, 2.5cm diameter, etc.",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"},null,512),[[u,r.value.dimensions]])])]),t("div",ge,[t("div",be,[l(t("input",{type:"checkbox",id:"featured","onUpdate:modelValue":e[8]||(e[8]=o=>r.value.featured=o),class:"h-4 w-4 text-accent-primary focus:ring-accent-primary border-light-neutral-300 dark:border-dark-neutral-600 rounded"},null,512),[[T,r.value.featured]]),e[27]||(e[27]=t("label",{for:"featured",class:"ml-2 block text-sm text-light-text-primary dark:text-dark-text-primary"}," Featured product (display on homepage) ",-1))])])]),t("div",ye,[t("button",{type:"button",onClick:e[9]||(e[9]=o=>a.$router.go(-1)),class:"py-2 px-4 border border-light-neutral-300 dark:border-dark-neutral-600 rounded-btn shadow-btn text-sm font-medium text-light-text-primary dark:text-dark-text-primary hover:bg-light-neutral-100 dark:hover:bg-dark-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary transition-all"}," Cancel "),t("button",{type:"submit",class:"py-2 px-4 border border-transparent rounded-btn shadow-btn text-sm font-medium text-white bg-btn-primary hover:bg-btn-primary-hover dark:hover:bg-btn-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btn-primary transition-all",disabled:p.value},w(p.value?"Saving...":"Save Product"),9,xe)])],32)]),s.value?(m(),n("div",ke,[e[30]||(e[30]=t("strong",{class:"font-bold mr-1"},"Error:",-1)),t("span",ve,w(s.value),1),t("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer",onClick:e[10]||(e[10]=o=>s.value=null)},e[29]||(e[29]=[t("span",{class:"text-xl"},"×",-1)]))])):h("",!0),C.value?(m(),n("div",fe,e[31]||(e[31]=[t("strong",{class:"font-bold"},"Warning:",-1),t("span",{class:"block sm:inline"}," Some images are temporarily stored locally due to CORS restrictions. They will be lost if you refresh the page. Please check the CORS settings for your Firebase Storage. ",-1)]))):h("",!0),I.value?(m(),n("div",he,e[32]||(e[32]=[t("strong",{class:"font-bold"},"Warning:",-1),t("span",{class:"block sm:inline"}," Some uploaded images may be stored as base64 strings in the database, which has size limitations. Very large images may cause problems when saving the product. ",-1)]))):h("",!0)])}}},Be=G(we,[["__scopeId","data-v-9c072589"]]);export{Be as default};
