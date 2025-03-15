import{u as V,r as m,s as E,H as F,o as R,I as H,c as l,b as e,h as P,w as S,i as q,t as i,F as h,e as k,a as j,x as z,k as L,v as J,f as O,J as W,p as n,d as $,l as D}from"./index-B-z--qmE.js";import{f as Q}from"./currency-CBv-F2Bn.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K={class:"container mx-auto p-4 bg-light-primary dark:bg-dark-primary"},X={class:"text-sm mb-6"},Y={class:"flex items-center space-x-2"},Z={class:"text-accent-primary font-medium"},ee={key:0,class:"text-center py-8"},te={key:1,class:"bg-red-100 dark:bg-red-900/20 p-4 rounded mb-6"},ae={class:"text-red-700 dark:text-red-400"},re={key:2,class:"grid grid-cols-1 md:grid-cols-2 gap-10"},se={class:"flex flex-col"},oe={class:"product-image-container relative overflow-hidden rounded-lg shadow-md border border-light-neutral-100 dark:border-dark-neutral-700 mb-4 aspect-square bg-light-secondary dark:bg-dark-secondary"},le=["src","alt"],ne={class:"absolute top-3 right-3 bg-light-secondary dark:bg-dark-neutral-700 rounded-full p-2 shadow-md"},ie={class:"flex space-x-2 overflow-x-auto pb-2"},de=["onClick"],ce=["src","alt"],ue={class:"flex flex-col space-y-6"},me={class:"text-3xl font-bold text-light-text-primary dark:text-dark-text-primary"},pe={class:"flex items-center"},ge={class:"text-2xl text-light-text-primary dark:text-dark-text-primary"},xe={class:"grid grid-cols-2 gap-4 mt-2 text-sm bg-light-secondary dark:bg-dark-secondary p-4 rounded-lg"},ve={class:"text-light-text-secondary dark:text-dark-text-secondary"},he={class:"text-light-text-secondary dark:text-dark-text-secondary"},ke={class:"text-light-text-secondary dark:text-dark-text-secondary"},ye={class:"text-light-text-secondary dark:text-dark-text-secondary"},fe={class:"space-y-2"},be={class:"text-base text-light-text-secondary dark:text-dark-text-secondary whitespace-pre-line"},we={key:0},_e={class:"flex flex-wrap gap-3"},Ce=["onClick","title"],Ie={class:"sr-only"},Ne={class:"mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary"},Me={class:"flex"},Pe={class:"space-y-2 mt-4"},Se=["onClick"],je={class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary"},$e={class:"text-xl text-light-text-secondary dark:text-dark-text-secondary"},De={key:0,class:"p-4 bg-light-neutral-100 dark:bg-dark-secondary border-t border-light-neutral-200 dark:border-dark-neutral-700"},Ae={key:0,class:"list-disc pl-5 space-y-1"},Be={key:1,class:"text-light-text-secondary dark:text-dark-text-secondary"},Te={key:3,class:"text-center py-8"},Ue={__name:"ProductDetailView",setup(Ve){const _=F(),A=W(),B=V(),t=m(null),y=m(!0),v=m(null),u=m(1),g=m(0),f=m(0),p=m(["Description"]),b=E(()=>_.params.id),c=r=>r?typeof r=="string"&&r.startsWith("base64://")?r.replace("base64://",""):r:null,C=async()=>{y.value=!0,v.value=null;try{console.log("Fetching product with ID:",b.value);try{t.value=await O.getProduct(b.value)}catch(o){console.warn("Both Firebase and mock data fetch failed:",o),t.value={id:b.value,name:"Sample Jewelry Piece",description:"This is a placeholder for a product that couldn't be found.",price:99.99,stock:0,category:"",materials:"Not specified",dimensions:"Not specified",images:[],featured:!1}}console.log("Product loaded:",t.value);const r="/images/no-image.jpg",a=c(t.value.imageUrl||t.value.image)||r;console.log("Product image source:",a),!t.value.images||!Array.isArray(t.value.images)||t.value.images.length===0?(console.log("Creating image structure with:",a),t.value.images=[{main:a,thumb:a}]):(console.log("Product already has images:",t.value.images),t.value.images=t.value.images.map(o=>{if(typeof o=="string"){const x=c(o);return{main:x,thumb:x}}return{main:c(o.main||o.imageUrl||o.image)||r,thumb:c(o.thumb||o.main||o.imageUrl||o.image)||r}})),t.value.images||(t.value.images=[{main:t.value.image||"https://via.placeholder.com/400x400?text=No+Image",thumb:t.value.image||"https://via.placeholder.com/100x100?text=No+Image"}]),t.value.colors||(t.value.colors=[{name:"Natural",class:"bg-amber-200"},{name:"Rose",class:"bg-rose-300"},{name:"Turquoise",class:"bg-cyan-400"}]),t.value.materials||(t.value.materials="Not specified"),t.value.dimensions||(t.value.dimensions="Not specified"),t.value.stock||(t.value.stock=0),t.value.sections||(t.value.sections=[],t.value.sections.push({name:"Description",content:t.value.description||"Product description not available."}),t.value.materials&&t.value.sections.push({name:"Materials & Dimensions",content:[`Materials: ${t.value.materials}`,`Dimensions: ${t.value.dimensions}`]}),t.value.features&&t.value.sections.push({name:"Features",content:t.value.features}),t.value.sections.push({name:"Care Instructions",content:["Store in a cool, dry place away from direct sunlight","Avoid contact with perfumes, lotions, and chemicals","Clean gently with a soft, lint-free cloth","Remove before swimming or bathing"]}),t.value.sections.push({name:"Sizing & Fit",content:"Our standard bracelet length is 7.5 inches. Necklaces are available in 16, 18, and 20 inch lengths. Please contact us for custom sizing."}),t.value.sections.push({name:"Shipping",content:"Handmade to order. Please allow 1-3 business days for production plus shipping time."}),t.value.sections.push({name:"Returns",content:"We accept returns within 14 days of delivery for unworn items in original packaging."}))}catch(r){console.error("Error fetching product:",r),v.value=r.message||"Failed to load product"}finally{y.value=!1}},I=r=>{console.error("Image failed to load:",r.target.src),r.target.src="/images/no-image.jpg",r.target.onerror=function(){const a=r.target.parentNode;if(a){const o=document.createElement("div");o.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
          <rect width="100%" height="100%" fill="#f0f0f0"/>
          <path d="M12 6v12M6 12h12" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,o.className="broken-image",a.replaceChild(o,r.target)}}};R(C),H(()=>_.params.id,C);const T=()=>{t.value&&(B.addToCart(t.value,u.value),alert(`${u.value} ${t.value.name}${u.value>1?"s":""} added to cart!`))},U=r=>{p.value.includes(r)?p.value=p.value.filter(a=>a!==r):p.value.push(r)},N=()=>{A.back()};return(r,a)=>{var x,M;const o=q("router-link");return n(),l("div",K,[e("nav",X,[e("ol",Y,[e("li",null,[P(o,{to:"/",class:"text-light-neutral-500 dark:text-dark-neutral-500 hover:text-accent-primary"},{default:S(()=>a[4]||(a[4]=[$("Home")])),_:1})]),a[6]||(a[6]=e("li",null,[e("span",{class:"text-light-neutral-400 dark:text-dark-neutral-600 mx-1"},"›")],-1)),e("li",null,[P(o,{to:"/",class:"text-light-neutral-500 dark:text-dark-neutral-500 hover:text-accent-primary"},{default:S(()=>a[5]||(a[5]=[$("Shop")])),_:1})]),a[7]||(a[7]=e("li",null,[e("span",{class:"text-light-neutral-400 dark:text-dark-neutral-600 mx-1"},"›")],-1)),e("li",Z,i(((x=t.value)==null?void 0:x.name)||"Product"),1)])]),y.value?(n(),l("div",ee,a[8]||(a[8]=[e("div",{class:"inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent-primary mb-2"},null,-1),e("p",{class:"text-light-text-primary dark:text-dark-text-primary"},"Loading your beautiful jewelry...",-1)]))):v.value?(n(),l("div",te,[e("p",ae,i(v.value),1),e("button",{onClick:N,class:"mt-2 text-sm text-accent-primary hover:underline"},"← Return to previous page")])):t.value?(n(),l("div",re,[e("div",se,[e("div",oe,[e("img",{src:c((M=t.value.images[g.value])==null?void 0:M.main)||c(t.value.imageUrl)||c(t.value.image)||"/images/no-image.jpg",alt:t.value.name,class:"product-image w-full h-full object-contain rounded-lg",onError:I},null,40,le),e("div",ne,[e("button",{onClick:a[0]||(a[0]=s=>g.value=(g.value+1)%t.value.images.length),class:"text-light-neutral-600 dark:text-dark-neutral-400 hover:text-accent-primary dark:hover:text-accent-primary",title:"Next image"},a[9]||(a[9]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]))])]),e("div",ie,[(n(!0),l(h,null,k(t.value.images,(s,d)=>(n(),l("div",{key:d,onClick:w=>g.value=d,class:D(["w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2 flex-shrink-0",d===g.value?"border-accent-primary":"border-transparent"])},[e("img",{src:c(s.thumb)||c(s.main)||"/images/no-image.jpg",alt:`Thumbnail ${d+1}`,class:"w-full h-full object-cover",onError:I},null,40,ce)],10,de))),128))])]),e("div",ue,[e("h1",me,i(t.value.name),1),e("div",pe,[e("p",ge,i(z(Q)(t.value.price)),1)]),e("div",xe,[e("div",null,[a[10]||(a[10]=e("span",{class:"font-medium text-light-text-primary dark:text-dark-text-primary"},"Materials:",-1)),e("p",ve,i(t.value.materials||"Not specified"),1)]),e("div",null,[a[11]||(a[11]=e("span",{class:"font-medium text-light-text-primary dark:text-dark-text-primary"},"Dimensions:",-1)),e("p",he,i(t.value.dimensions||"Not specified"),1)]),e("div",null,[a[12]||(a[12]=e("span",{class:"font-medium text-light-text-primary dark:text-dark-text-primary"},"Category:",-1)),e("p",ke,i(t.value.category),1)]),e("div",null,[a[13]||(a[13]=e("span",{class:"font-medium text-light-text-primary dark:text-dark-text-primary"},"Stock:",-1)),e("p",ye,i(t.value.stock)+" pieces available",1)])]),e("div",fe,[a[14]||(a[14]=e("h3",{class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary"},"Description",-1)),e("p",be,i(t.value.description),1)]),t.value.colors&&t.value.colors.length>0?(n(),l("div",we,[a[15]||(a[15]=e("p",{class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary mb-3"},"Color Options",-1)),e("div",_e,[(n(!0),l(h,null,k(t.value.colors,(s,d)=>(n(),l("button",{key:d,onClick:w=>f.value=d,class:D(["w-12 h-12 rounded-full focus:outline-none transition-all duration-200",s.class,{"ring-2 ring-accent-primary ring-offset-2 scale-110":d===f.value}]),title:s.name},[e("span",Ie,i(s.name),1)],10,Ce))),128))]),e("p",Ne,"Selected: "+i(t.value.colors[f.value].name),1)])):j("",!0),e("div",null,[a[16]||(a[16]=e("p",{class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary mb-3"},"Quantity",-1)),e("div",Me,[e("button",{onClick:a[1]||(a[1]=s=>u.value>1?u.value--:null),class:"px-4 py-2 bg-light-neutral-200 dark:bg-dark-neutral-700 hover:bg-light-neutral-300 dark:hover:bg-dark-neutral-600 rounded-l text-light-text-primary dark:text-dark-text-primary"},"−"),L(e("input",{id:"quantity","onUpdate:modelValue":a[2]||(a[2]=s=>u.value=s),type:"number",min:"1",class:"w-16 text-center border-light-neutral-200 dark:border-dark-neutral-700 border-t border-b focus:ring-accent-primary focus:border-accent-primary bg-light-secondary dark:bg-dark-secondary text-light-text-primary dark:text-dark-text-primary"},null,512),[[J,u.value]]),e("button",{onClick:a[3]||(a[3]=s=>u.value++),class:"px-4 py-2 bg-light-neutral-200 dark:bg-dark-neutral-700 hover:bg-light-neutral-300 dark:hover:bg-dark-neutral-600 rounded-r text-light-text-primary dark:text-dark-text-primary"},"+")])]),e("button",{onClick:T,class:"w-full bg-btn-primary hover:bg-btn-primary-hover dark:hover:bg-btn-primary-dark text-white px-6 py-3 rounded-md transition font-medium flex items-center justify-center space-x-2"},a[17]||(a[17]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})],-1),e("span",null,"Add to Cart",-1)])),a[18]||(a[18]=e("div",{class:"flex items-center space-x-2 text-sm text-light-text-secondary dark:text-dark-text-secondary border-t border-b border-light-neutral-200 dark:border-dark-neutral-700 py-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-accent-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})]),e("span",null,"Handcrafted with care | Unique Piece | Artisan Made")],-1)),e("div",Pe,[(n(!0),l(h,null,k(t.value.sections,s=>(n(),l("div",{key:s.name,class:"border border-light-neutral-200 dark:border-dark-neutral-700 rounded-lg overflow-hidden"},[e("div",{onClick:d=>U(s.name),class:"flex justify-between items-center p-4 cursor-pointer hover:bg-light-neutral-100 dark:hover:bg-dark-secondary"},[e("h2",je,i(s.name),1),e("span",$e,i(p.value.includes(s.name)?"−":"+"),1)],8,Se),p.value.includes(s.name)?(n(),l("div",De,[Array.isArray(s.content)?(n(),l("ul",Ae,[(n(!0),l(h,null,k(s.content,(d,w)=>(n(),l("li",{key:w,class:"text-light-text-secondary dark:text-dark-text-secondary"},i(d),1))),128))])):(n(),l("p",Be,i(s.content),1))])):j("",!0)]))),128))])])])):(n(),l("div",Te,[a[19]||(a[19]=e("p",{class:"text-light-text-primary dark:text-dark-text-primary"},"Product not found.",-1)),e("button",{onClick:N,class:"mt-4 bg-btn-primary hover:bg-btn-primary-hover dark:hover:bg-btn-primary-dark text-white px-4 py-2 rounded"},"Return to Shop")]))])}}},He=G(Ue,[["__scopeId","data-v-a13edcd4"]]);export{He as default};
