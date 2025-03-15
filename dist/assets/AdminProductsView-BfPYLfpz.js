import{c as d,f as l,p as F,B as I,a as t,r as u,o as T,ak as Y,E as G,h as q,n as $,t as i,al as P,am as J,k as b,b as w,w as v,d as K,q as X,H as L,I as Z,af as tt,F as M,e as N,l as V,u as et,g as A}from"./index-dP2aHmky.js";import{_ as rt}from"./Breadcrumbs-DyQukwTT.js";import{f as at}from"./currency-CBv-F2Bn.js";import{_ as ot}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronRightIcon-FUDirWY-.js";const st={class:"flex justify-center items-center"},nt={__name:"LoadingSpinner",props:{size:{type:String,default:"md",validator:o=>["sm","md","lg"].includes(o)},color:{type:String,default:"black"}},setup(o){return(k,s)=>(l(),d("div",st,[(l(),d("svg",{class:I(["animate-spin",{"h-4 w-4":o.size==="sm","h-8 w-8":o.size==="md","h-12 w-12":o.size==="lg"}]),style:F({color:o.color}),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},s[0]||(s[0]=[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)]),6))]))}},lt={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4"},dt={class:"flex justify-between items-center p-4 border-b"},it={class:"text-lg font-medium"},ct={class:"p-4"},ut={key:0,class:"p-4 border-t bg-gray-50"},xt={__name:"Modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""}},emits:["close"],setup(o,{emit:k}){const s=o,g=k,m=u(null),y=c=>{c.key==="Escape"&&s.show&&g("close")},x=c=>{m.value&&!m.value.contains(c.target)&&s.show&&g("close")};return T(()=>{document.addEventListener("keydown",y),document.addEventListener("mousedown",x)}),Y(()=>{document.removeEventListener("keydown",y),document.removeEventListener("mousedown",x)}),G(()=>s.show,c=>{c?document.body.style.overflow="hidden":document.body.style.overflow=""}),(c,f)=>(l(),q(J,{to:"body"},[o.show?(l(),d("div",lt,[t("div",{class:"fixed inset-0 bg-black bg-opacity-50 transition-opacity",onClick:f[0]||(f[0]=S=>g("close"))}),t("div",{ref_key:"modal",ref:m,class:"bg-white rounded-lg shadow-xl w-full max-w-md z-10 overflow-hidden transform transition-all"},[t("div",dt,[t("h3",it,i(o.title),1),t("button",{onClick:f[1]||(f[1]=S=>g("close")),class:"text-gray-500 hover:text-gray-700"},f[2]||(f[2]=[t("span",{class:"sr-only"},"Close",-1),t("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),t("div",ct,[P(c.$slots,"default")]),c.$slots.footer?(l(),d("div",ut,[P(c.$slots,"footer")])):$("",!0)],512)])):$("",!0)]))}},gt=["type","disabled"],D={__name:"Button",props:{type:{type:String,default:"button"},variant:{type:String,default:"primary",validator:o=>["primary","secondary","outline","danger"].includes(o)},size:{type:String,default:"md",validator:o=>["sm","md","lg"].includes(o)},disabled:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1}},setup(o){return(k,s)=>(l(),d("button",{type:o.type,disabled:o.disabled,class:I(["inline-flex items-center justify-center rounded-btn shadow-btn transition-btn focus:outline-none focus:ring-2 focus:ring-offset-2",{"bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:ring-orange-500 dark:bg-orange-600 dark:hover:bg-orange-500 dark:active:bg-orange-700":o.variant==="primary","bg-light-neutral-200 text-light-neutral-800 hover:bg-light-neutral-300 dark:bg-dark-neutral-700 dark:text-dark-neutral-100 dark:hover:bg-dark-neutral-600":o.variant==="secondary","bg-white dark:bg-transparent text-light-text-primary dark:text-dark-text-primary border border-light-neutral-300 dark:border-dark-neutral-600 hover:bg-light-neutral-100 dark:hover:bg-dark-secondary":o.variant==="outline","bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":o.variant==="danger","px-3 py-1.5 text-sm":o.size==="sm","px-4 py-2":o.size==="md","px-6 py-3 text-lg":o.size==="lg","w-full":o.fullWidth,"opacity-50 cursor-not-allowed pointer-events-none":o.disabled}])},[P(k.$slots,"default")],10,gt))}},mt={class:"admin-products min-h-screen bg-light-primary dark:bg-dark-primary transition-colors duration-300"},yt={class:"container mx-auto px-4 py-8"},ft={class:"flex justify-between items-center mb-12 bg-light-secondary dark:bg-dark-secondary p-6 rounded-xl shadow-lg"},ht={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"},pt={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-accent-primary/10 dark:from-dark-secondary dark:to-accent-primary/20 rounded-xl shadow-lg p-6 border-2 border-accent-primary/20"},kt={class:"text-3xl font-bold text-accent-primary"},vt={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-orange-500/10 dark:from-dark-secondary dark:to-orange-500/20 rounded-xl shadow-lg p-6 border-2 border-orange-500/20"},bt={class:"text-3xl font-bold text-orange-500"},wt={class:"flex items-center mt-2"},_t={class:"h-2 flex-grow rounded-full bg-light-neutral-200 dark:bg-dark-neutral-700"},Ct={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-blue-500/10 dark:from-dark-secondary dark:to-blue-500/20 rounded-xl shadow-lg p-6 border-2 border-blue-500/20"},$t={class:"text-3xl font-bold text-blue-500"},St={class:"text-xs text-accent-tertiary mt-1"},Pt={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-cyan-500/10 dark:from-dark-secondary dark:to-cyan-500/20 rounded-xl shadow-lg p-6 border-2 border-cyan-500/20"},zt={class:"text-3xl font-bold text-cyan-500"},Bt={class:"bg-light-secondary dark:bg-dark-secondary rounded-xl shadow-lg p-6 mb-6 border border-light-neutral-300 dark:border-dark-neutral-700"},jt={class:"flex flex-wrap items-center gap-4"},Et={class:"flex-1"},Lt=["value"],Mt={class:"bg-light-secondary dark:bg-dark-secondary rounded-xl shadow-lg overflow-hidden border border-light-neutral-300 dark:border-dark-neutral-700"},Nt={class:"overflow-x-auto"},Vt={class:"min-w-full bg-light-secondary dark:bg-dark-secondary"},At={class:"bg-light-neutral-100 dark:bg-dark-neutral-700"},Dt={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},Ft={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},It={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},Tt={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},qt={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},Ut={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},Wt={class:"py-3 px-4 text-left text-light-text-primary dark:text-dark-text-primary"},Ht={key:0},Ot={colspan:"7",class:"py-4 text-center"},Rt={key:1},Qt={class:"py-3 px-4"},Yt={class:"relative w-16 h-16 rounded overflow-hidden bg-light-neutral-100 dark:bg-dark-neutral-800"},Gt=["src","alt"],Jt={class:"py-3 px-4 text-light-text-primary dark:text-dark-text-primary"},Kt={class:"py-3 px-4 text-light-text-primary dark:text-dark-text-primary"},Xt={class:"py-3 px-4 text-light-text-primary dark:text-dark-text-primary"},Zt={class:"py-3 px-4 text-light-text-primary dark:text-dark-text-primary"},te={class:"py-3 px-4"},ee={key:0,class:"text-accent-tertiary dark:text-accent-tertiary"},re={key:1,class:"text-light-neutral-500 dark:text-dark-neutral-500"},ae={class:"py-3 px-4"},oe={class:"flex space-x-2"},se=["onClick"],ne=["onClick"],le={class:"text-light-text-secondary dark:text-dark-text-secondary"},de={class:"flex justify-end space-x-3"},ie={__name:"AdminProductsView",setup(o){const k=et(),s=u([]),g=u(!0),m=u(""),y=u(!1),x=u(null);u({});const c=r=>{if(!r)return"/images/no-image.jpg";if(typeof r=="string"){if(r.startsWith("data:image"))return r;if(r.startsWith("/9j/")||r.startsWith("iVBOR"))return`data:image/jpeg;base64,${r}`;if(r.startsWith("base64://"))return r.replace("base64://","")}return r},f=r=>{console.error("Image failed to load:",r.target.src),r.target.src="/images/no-image.jpg",r.target.onerror=function(){const e=r.target.parentNode;if(e){const n=document.createElement("div");n.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full">
          <rect width="100%" height="100%" fill="#f0f0f0"/>
          <path d="M12 6v12M6 12h12" stroke="#aaa" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,n.className="broken-image rounded w-16 h-16 flex items-center justify-center bg-light-neutral-200 dark:bg-dark-neutral-200",e.replaceChild(n,r.target)}}},S=async()=>{try{g.value=!0;const r=await V.getProducts();s.value=r.map(e=>({...e,images:Array.isArray(e.images)?e.images:[e.imageUrl||e.image]}))}catch(r){console.error("Failed to load products:",r)}finally{g.value=!1}},h=u("name"),_=u("asc"),C=u("all"),z=b(()=>s.value.filter(r=>r.stock<5).length),B=b(()=>s.value.filter(r=>r.featured).length),U=b(()=>s.value.reduce((r,e)=>r+e.price*e.stock,0)),W=b(()=>[...new Set(s.value.map(r=>r.category))]),j=b(()=>{let r=[...s.value];if(C.value!=="all"&&(r=r.filter(n=>n.category===C.value)),m.value){const n=m.value.toLowerCase();r=r.filter(a=>a.name.toLowerCase().includes(n)||a.category.toLowerCase().includes(n)||a.description.toLowerCase().includes(n))}const e=(n,a)=>typeof n[h.value]=="string"?n[h.value].localeCompare(a[h.value]):Number(n[h.value])-Number(a[h.value]);return r.sort((n,a)=>_.value==="asc"?e(n,a):e(a,n)),r}),H=async()=>{if(x.value)try{await V.deleteProduct(x.value.id);const r=s.value.findIndex(e=>e.id===x.value.id);r!==-1&&s.value.splice(r,1),y.value=!1,x.value=null}catch(r){console.error("Failed to delete product:",r)}},O=r=>{k.push(`/admin/products/edit/${r.id}`)},R=r=>{x.value=r,y.value=!0},p=r=>{h.value===r?_.value=_.value==="asc"?"desc":"asc":(h.value=r,_.value="asc")};return T(S),(r,e)=>{const n=K("router-link");return l(),d("div",mt,[t("div",yt,[t("div",ft,[t("div",null,[w(rt,{items:[{text:"Dashboard",path:"/admin"},{text:"Products"}]}),e[11]||(e[11]=t("h1",{class:"text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mt-2"},"Manage Products",-1))]),w(n,{to:"/admin/products/new",class:"bg-btn-primary hover:bg-btn-primary-hover dark:hover:bg-btn-primary-dark text-white py-2 px-4 rounded-btn flex items-center shadow-btn hover:shadow-btn-hover transition-btn duration-200"},{default:v(()=>e[12]||(e[12]=[t("span",{class:"mr-2"},"Add New Product",-1),t("span",{class:"text-xl"},"+",-1)])),_:1})]),t("div",ht,[t("div",pt,[e[13]||(e[13]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Total Products",-1)),t("p",kt,i(s.value.length),1),e[14]||(e[14]=t("p",{class:"text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1"},"Active listings",-1))]),t("div",vt,[e[15]||(e[15]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Low Stock",-1)),t("p",bt,i(z.value),1),t("div",wt,[t("div",_t,[t("div",{class:"h-2 rounded-full bg-orange-500 transition-all duration-300",style:F(`width: ${z.value/s.value.length*100}%`)},null,4)])])]),t("div",Ct,[e[16]||(e[16]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Featured",-1)),t("p",$t,i(B.value),1),t("p",St,i((B.value/s.value.length*100).toFixed(1))+"% of products ",1)]),t("div",Pt,[e[17]||(e[17]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Total Value",-1)),t("p",zt,i(X(at)(U.value)),1),e[18]||(e[18]=t("p",{class:"text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1"},"Inventory worth",-1))])]),t("div",Bt,[t("div",jt,[t("div",Et,[L(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>m.value=a),placeholder:"Search products...",class:"w-full p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"},null,512),[[Z,m.value]])]),t("div",null,[L(t("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>C.value=a),class:"p-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"},[e[19]||(e[19]=t("option",{value:"all"},"All Categories",-1)),(l(!0),d(M,null,N(W.value,a=>(l(),d("option",{key:a,value:a},i(a),9,Lt))),128))],512),[[tt,C.value]])])])]),t("div",Mt,[t("div",Nt,[t("table",Vt,[t("thead",At,[t("tr",null,[t("th",Dt,[t("button",{onClick:e[2]||(e[2]=a=>p("image"))}," Image ")]),t("th",Ft,[t("button",{onClick:e[3]||(e[3]=a=>p("name"))}," Name ")]),t("th",It,[t("button",{onClick:e[4]||(e[4]=a=>p("category"))}," Category ")]),t("th",Tt,[t("button",{onClick:e[5]||(e[5]=a=>p("price"))}," Price ")]),t("th",qt,[t("button",{onClick:e[6]||(e[6]=a=>p("stock"))}," Stock ")]),t("th",Ut,[t("button",{onClick:e[7]||(e[7]=a=>p("featured"))}," Featured ")]),t("th",Wt,[t("button",{onClick:e[8]||(e[8]=a=>p("actions"))}," Actions ")])])]),t("tbody",null,[g.value?(l(),d("tr",Ht,[t("td",Ot,[w(nt)])])):j.value.length===0?(l(),d("tr",Rt,e[20]||(e[20]=[t("td",{colspan:"7",class:"py-4 text-center text-light-text-secondary dark:text-dark-text-secondary"}," No products found ",-1)]))):$("",!0),(l(!0),d(M,null,N(j.value,a=>{var E;return l(),d("tr",{key:a.id,class:"border-b border-light-neutral-200 dark:border-dark-neutral-600 hover:bg-light-neutral-100 dark:hover:bg-dark-neutral-800 transition-colors"},[t("td",Qt,[t("div",Yt,[t("img",{src:c(((E=a.images)==null?void 0:E[0])||a.imageUrl||a.image),alt:a.name,class:"w-full h-full object-cover",onError:f},null,40,Gt)])]),t("td",Jt,i(a.name),1),t("td",Kt,i(a.category),1),t("td",Xt,"$"+i(a.price.toFixed(2)),1),t("td",Zt,i(a.stock),1),t("td",te,[a.featured?(l(),d("span",ee,"Yes")):(l(),d("span",re,"No"))]),t("td",ae,[t("div",oe,[t("button",{onClick:Q=>O(a),class:"text-accent-quaternary dark:text-accent-quaternary hover:text-accent-quaternary/80 dark:hover:text-accent-quaternary/80 transition-colors"}," Edit ",8,se),t("button",{onClick:Q=>R(a),class:"text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"}," Delete ",8,ne)])])])}),128))])])])]),y.value?(l(),q(xt,{key:0,onClose:e[10]||(e[10]=a=>y.value=!1)},{header:v(()=>e[21]||(e[21]=[t("h3",{class:"text-xl font-medium text-light-text-primary dark:text-dark-text-primary"},"Confirm Delete",-1)])),body:v(()=>{var a;return[t("p",le,' Are you sure you want to delete "'+i((a=x.value)==null?void 0:a.name)+'"? This action cannot be undone. ',1)]}),footer:v(()=>[t("div",de,[w(D,{variant:"secondary",onClick:e[9]||(e[9]=a=>y.value=!1)},{default:v(()=>e[22]||(e[22]=[A(" Cancel ")])),_:1}),w(D,{variant:"danger",onClick:H},{default:v(()=>e[23]||(e[23]=[A(" Delete ")])),_:1})])]),_:1})):$("",!0)])])}}},ye=ot(ie,[["__scopeId","data-v-ade0a192"]]);export{ye as default};
