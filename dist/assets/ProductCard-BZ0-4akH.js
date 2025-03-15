import{i as x,r as p,d as w,c as h,f,n as b,b as k,a as o,p as _,w as C,t as u,q as I,C as E}from"./index-dP2aHmky.js";import{f as T}from"./currency-CBv-F2Bn.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"group relative bg-light-primary dark:bg-dark-primary rounded-lg shadow hover:shadow-lg transition-all duration-300"},S={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg"},j=["src","alt"],N={class:"p-4"},q={class:"items-start"},R={class:"text-light-text-primary dark:text-dark-text-primary text-lg font-medium hover:text-accent-primary"},U={class:"text-light-text-secondary dark:text-dark-text-secondary text-sm"},A={class:"mt-2 flex items-center justify-between"},M={class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary"},P={class:"px-4 pb-4"},V={__name:"ProductCard",props:{product:{type:Object,required:!0},processImageUrl:{type:Function,default:t=>t}},setup(t){const m=x(),n=p(null),e=p(null),v=async r=>{const a=event.target.getBoundingClientRect(),s=a.left+a.width/2,i=a.top+a.height/2,c=document.querySelector(".group-hover\\:text-gray-500")||document.querySelector('a[href="/cart"] svg');let d=window.innerWidth-60,g=20;if(c){const l=c.getBoundingClientRect();d=l.left+l.width/2,g=l.top+l.height/2}n.value=r,await E(),e.value?(e.value.style.top=`${i}px`,e.value.style.left=`${s}px`,e.value.style.opacity="1",e.value.style.transform="scale(1)",setTimeout(()=>{e.value.style.top=`${g}px`,e.value.style.left=`${d}px`,e.value.style.opacity="0",e.value.style.transform="scale(0.3)"},50),setTimeout(()=>{m.addToCart(r,1),n.value=null},600)):m.addToCart(r,1)},y=r=>{console.error("Image failed to load:",r.target.src),r.target.src="/images/no-image.jpg",r.target.onerror=function(){const a=r.target.parentNode;if(a){const s=document.createElement("div");s.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
          <rect width="100%" height="100%" fill="#f0f0f0"/>
          <path d="M12 6v12M6 12h12" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,s.className="broken-image",a.replaceChild(s,r.target)}}};return(r,a)=>{var i,c;const s=w("router-link");return f(),h("div",B,[n.value?(f(),h("div",{key:0,class:"cart-animation fixed pointer-events-none z-50",ref_key:"cartAnimationEl",ref:e,style:_({backgroundImage:`url(${((i=n.value)==null?void 0:i.imageUrl)||((c=n.value)==null?void 0:c.image)})`})},null,4)):b("",!0),k(s,{to:`/product/${t.product.id}`,class:"cursor-pointer block"},{default:C(()=>[o("div",S,[o("img",{src:t.processImageUrl(t.product.imageUrl||t.product.image),alt:t.product.name,class:"h-60 w-full object-cover object-center group-hover:opacity-90",onError:y},null,40,j)]),o("div",N,[o("div",q,[o("h3",R,u(t.product.name),1),o("p",U,u(t.product.category),1),o("div",A,[o("p",M,u(I(T)(t.product.price)),1)])])])]),_:1},8,["to"]),o("div",P,[o("button",{onClick:a[0]||(a[0]=d=>v(t.product)),class:"w-full bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-dark text-white py-2 rounded-btn shadow-btn hover:shadow-btn-hover transition-btn text-sm font-medium"}," Add to cart ")])])}}},D=$(V,[["__scopeId","data-v-fe9958df"]]);export{D as P};
