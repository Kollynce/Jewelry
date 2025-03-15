import{r as d,s as _,L as fe,Z as ye,$ as he,a0 as ge,V as ke,o as ne,I as be,N as F,W as we,P as _e,an as Ce,O as Ae,X as Ne,F as oe,a1 as re,c as y,b as t,p as h,q as Ue,ao as $e,f as I,h as c,a as V,d as T,x as f,t as x,n as Se,e as Ve,w as $,S as De,i as Te,l as E,Y as Be,z as se,G as Le,ab as Me,A as je,k as H,v as J,E as Ie}from"./index-B-z--qmE.js";import{_ as Ee}from"./Breadcrumbs-BjVuVukQ.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as le}from"./CheckCircleIcon-rjrD-_Qx.js";import"./ChevronRightIcon-DD56YB27.js";function qe(i,o,l){let p=d(l==null?void 0:l.value),u=_(()=>i.value!==void 0);return[_(()=>u.value?i.value:p.value),function(C){return u.value||(p.value=C),o==null?void 0:o(C)}]}function Pe(i){var o,l;let p=(o=i==null?void 0:i.form)!=null?o:i.closest("form");if(p){for(let u of p.elements)if(u!==i&&(u.tagName==="INPUT"&&u.type==="submit"||u.tagName==="BUTTON"&&u.type==="submit"||u.nodeName==="INPUT"&&u.type==="image")){u.click();return}(l=p.requestSubmit)==null||l.call(p)}}let Re=Symbol("GroupContext"),Ze=fe({name:"Switch",emits:{"update:modelValue":i=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(i,{emit:o,attrs:l,slots:p,expose:u}){var C;let N=(C=i.id)!=null?C:`headlessui-switch-${ye()}`,n=he(Re,null),[k,b]=qe(_(()=>i.modelValue),s=>o("update:modelValue",s),_(()=>i.defaultChecked));function S(){b(!k.value)}let w=d(null),U=n===null?w:n.switchRef,q=ge(_(()=>({as:i.as,type:l.type})),U);u({el:U,$el:U});function P(s){s.preventDefault(),S()}function R(s){s.key===re.Space?(s.preventDefault(),S()):s.key===re.Enter&&Pe(s.currentTarget)}function Z(s){s.preventDefault()}let v=_(()=>{var s,g;return(g=(s=ke(U))==null?void 0:s.closest)==null?void 0:g.call(s,"form")});return ne(()=>{be([v],()=>{if(!v.value||i.defaultChecked===void 0)return;function s(){b(i.defaultChecked)}return v.value.addEventListener("reset",s),()=>{var g;(g=v.value)==null||g.removeEventListener("reset",s)}},{immediate:!0})}),()=>{let{name:s,value:g,form:O,tabIndex:B,...L}=i,D={checked:k.value},z={id:N,ref:U,role:"switch",type:q.value,tabIndex:B===-1?0:B,"aria-checked":k.value,"aria-labelledby":n==null?void 0:n.labelledby.value,"aria-describedby":n==null?void 0:n.describedby.value,onClick:P,onKeyup:R,onKeypress:Z};return F(oe,[s!=null&&k.value!=null?F(_e,Ce({features:Ae.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:k.value,form:O,disabled:L.disabled,name:s,value:g})):null,we({ourProps:z,theirProps:{...l,...Ne(L,["modelValue","defaultChecked"])},slot:D,attrs:l,slots:p,name:"Switch"})])}}});function Oe(i,o){return h(),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})])}function ze(i,o){return h(),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"})])}function Ke(i,o){return h(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"})])}const Ge={class:"admin-users min-h-screen bg-light-primary dark:bg-dark-primary transition-colors duration-300"},Ye={class:"container mx-auto px-4 py-8"},He={class:"flex justify-between items-center mb-12 bg-light-secondary dark:bg-dark-secondary p-6 rounded-xl shadow-lg"},Je={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"},Qe={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-accent-primary/10 dark:from-dark-secondary dark:to-accent-primary/20 rounded-xl shadow-lg p-6 border-2 border-accent-primary/20"},We={class:"text-3xl font-bold text-accent-primary"},Xe={class:"text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1"},et={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-orange-500/10 dark:from-dark-secondary dark:to-orange-500/20 rounded-xl shadow-lg p-6 border-2 border-orange-500/20"},tt={class:"text-3xl font-bold text-orange-500"},at={class:"flex items-center mt-2"},rt={class:"h-2 flex-grow rounded-full bg-light-neutral-200 dark:bg-dark-neutral-700"},st={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-blue-500/10 dark:from-dark-secondary dark:to-blue-500/20 rounded-xl shadow-lg p-6 border-2 border-blue-500/20"},lt={class:"text-3xl font-bold text-blue-500"},nt={class:"text-xs text-accent-tertiary mt-1"},ot={class:"flex flex-col h-full bg-gradient-to-br from-light-secondary to-cyan-500/10 dark:from-dark-secondary dark:to-cyan-500/20 rounded-xl shadow-lg p-6 border-2 border-cyan-500/20"},it={class:"text-3xl font-bold text-cyan-500"},dt={key:0,class:"mb-4 flex items-center space-x-2"},ct={class:"text-sm text-light-text-secondary dark:text-dark-text-secondary"},ut={class:"bg-light-secondary dark:bg-dark-secondary rounded-xl shadow-lg overflow-hidden border border-light-neutral-300 dark:border-dark-neutral-700"},mt={class:"overflow-x-auto"},xt={class:"min-w-full divide-y divide-light-neutral-300 dark:divide-dark-neutral-700"},pt={class:"bg-light-neutral-100 dark:bg-dark-neutral-800"},vt={scope:"col",class:"px-6 py-3"},ft=["checked"],yt={class:"flex items-center"},ht={class:"flex items-center"},gt={class:"flex items-center"},kt={class:"bg-light-secondary dark:bg-dark-secondary divide-y divide-light-neutral-300 dark:divide-dark-neutral-700"},bt={key:0,class:"animate-pulse"},wt={key:1},_t={colspan:"5",class:"px-6 py-12 text-center"},Ct={class:"flex flex-col items-center"},At={class:"px-6 py-4"},Nt=["checked","onChange"],Ut={class:"px-6 py-4 whitespace-nowrap"},$t={class:"flex items-center"},St={class:"flex-shrink-0 h-10 w-10 rounded-full bg-accent-primary/10 dark:bg-accent-primary/20 flex items-center justify-center text-accent-primary"},Vt={class:"ml-4"},Dt={class:"text-sm font-medium text-light-text-primary dark:text-dark-text-primary"},Tt={key:0,class:"ml-1 text-xs text-accent-quaternary dark:text-accent-quaternary font-normal"},Bt={class:"px-6 py-4 whitespace-nowrap"},Lt={class:"text-sm text-light-text-secondary dark:text-dark-text-secondary"},Mt={class:"px-6 py-4 whitespace-nowrap"},jt={class:"text-sm text-light-text-secondary dark:text-dark-text-secondary"},It={class:"px-6 py-4 whitespace-nowrap"},Et={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},Ft={class:"flex items-center justify-end space-x-2"},qt=["onClick"],Pt=["onClick"],Rt={key:1,class:"fixed bottom-4 right-4 bg-accent-tertiary/10 border border-accent-tertiary/20 text-accent-tertiary dark:text-accent-tertiary px-4 py-2 rounded-lg shadow-lg flex items-center"},Zt={class:"fixed inset-0 overflow-y-auto"},Ot={class:"flex min-h-full items-center justify-center p-4 text-center"},zt={class:"flex justify-between items-center mb-4"},Kt={key:0,class:"mb-4 bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary dark:text-accent-tertiary border px-4 py-2 rounded flex items-center"},Gt={class:"mt-4 space-y-4"},Yt={class:"grid grid-cols-2 gap-4"},Ht={class:"flex items-center"},Jt={class:"mt-6 flex justify-end space-x-3"},Qt=["disabled"],Wt={key:0,class:"inline-block animate-spin mr-2"},Xt={__name:"AdminUsersView",setup(i){const o=d([]),l=d([]),p=d(!0),u=d(""),C=d(!1),N=d(null),n=d({}),k=d(!1),b=d(null),S=d(!1),w=Ue({show:!1,message:"",timeout:null}),U=d(0),q=d(0),P=d(12),R=d("24:15"),Z=_(()=>l.value.length===M.value.length),v=d("name"),s=d("asc"),g=d("all"),O=[{text:"Dashboard",path:"/admin"},{text:"User Management"}],B=a=>{a.target.checked?l.value=M.value.map(e=>e.id):l.value=[]},L=a=>{const e=l.value.indexOf(a);e===-1?l.value.push(a):l.value.splice(e,1)},D=d(null);ne(async()=>{try{p.value=!0;const a=$e();b.value=a.currentUser,o.value=await I.getAllUsers()}catch(a){console.error("Failed to load users:",a),D.value="Failed to load users. Please try again later."}finally{p.value=!1}});const z=a=>{if(!a)return"?";const e=a.firstName?a.firstName[0]:"",m=a.lastName?a.lastName[0]:"";return(e+m).toUpperCase()||"?"},ie=a=>{if(!a||!b.value)return!1;const e=a.id===b.value.uid||a.uid===b.value.uid||a.email===b.value.email;return e&&!a.email&&b.value.email&&(a.email=b.value.email),e},K=a=>{w.timeout&&clearTimeout(w.timeout),w.message=a,w.show=!0,w.timeout=setTimeout(()=>{w.show=!1},3e3)},G=a=>{v.value===a?s.value=s.value==="asc"?"desc":"asc":(v.value=a,s.value="asc")},de=()=>{u.value="",g.value="all"},Q=_(()=>o.value.filter(a=>a.isAdmin).length),Y={props:{active:Boolean,direction:String},setup(a){return()=>a.active?F("span",{class:"ml-1 text-gray-700"},a.direction==="asc"?"↑":"↓"):F("span",{class:"ml-1 text-gray-300"},"↕")}},M=_(()=>{let a=[...o.value];if(g.value!=="all"){const e=g.value==="admin";a=a.filter(m=>m.isAdmin===e)}if(u.value){const e=u.value.toLowerCase();a=a.filter(m=>{var r;return((r=m.email)==null?void 0:r.toLowerCase().includes(e))||`${m.firstName} ${m.lastName}`.toLowerCase().includes(e)})}return a.sort((e,m)=>{var X,ee,te,ae;let r,A;v.value==="name"?(r=`${e.firstName} ${e.lastName}`.toLowerCase(),A=`${m.firstName} ${m.lastName}`.toLowerCase()):v.value==="email"?(r=((X=e.email)==null?void 0:X.toLowerCase())||"",A=((ee=m.email)==null?void 0:ee.toLowerCase())||""):v.value==="createdAt"&&(r=((te=e.createdAt)==null?void 0:te.seconds)||0,A=((ae=m.createdAt)==null?void 0:ae.seconds)||0);const W=r>A?1:r<A?-1:0;return s.value==="asc"?W:-W}),a}),ce=a=>{if(!a)return"N/A";try{let e;if(a.toDate&&typeof a.toDate=="function")e=a.toDate();else if(a.seconds)e=new Date(a.seconds*1e3);else if(a instanceof Date)e=a;else if(typeof a=="string")e=new Date(a);else return"N/A";return e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch(e){return console.error("Error formatting date:",e),"N/A"}},ue=async a=>{try{if(!a||!a.id){console.error("Invalid user object:",a);return}const e={id:a.id,firstName:a.firstName||"",lastName:a.lastName||"",email:a.email||"",phone:a.phone||"",isAdmin:!!a.isAdmin,createdAt:a.createdAt||null};N.value=e.id,await Ie(),n.value={...e},C.value=!0}catch(e){console.error("Error opening user details:",e),alert("Could not open user details. Please try again.")}},j=()=>{C.value=!1,n.value={},N.value=null,S.value=!1},me=async()=>{if(N.value)try{k.value=!0,D.value=null;const a={firstName:n.value.firstName||"",lastName:n.value.lastName||"",phone:n.value.phone||"",isAdmin:!!n.value.isAdmin,email:n.value.email};await I.updateUser(N.value,a);const e=o.value.findIndex(m=>m.id===N.value);e!==-1&&(o.value[e]={...o.value[e],...a}),S.value=!0,K(`User ${a.firstName} ${a.lastName} updated successfully`),setTimeout(()=>{j()},1500)}catch(a){console.error("Failed to update user:",a),D.value="Failed to update user. Please try again."}finally{k.value=!1}},xe=[{value:"all",label:"All Roles"},{value:"admin",label:"Admins"},{value:"customer",label:"Customers"}];_(()=>{var a;return((a=xe.find(e=>e.value===g.value))==null?void 0:a.label)||"All Roles"});const pe=async()=>{if(confirm(`Are you sure you want to delete ${l.value.length} users?`))try{await Promise.all(l.value.map(a=>I.deleteUser(a))),o.value=o.value.filter(a=>!l.value.includes(a.id)),l.value=[],K("Users deleted successfully")}catch(a){console.error("Failed to delete users:",a)}},ve=async()=>{const a=confirm("Make selected users admins? Click OK for Admin, Cancel for Customer");try{await Promise.all(l.value.map(e=>I.updateUser(e,{isAdmin:a}))),o.value=o.value.map(e=>l.value.includes(e.id)?{...e,isAdmin:a}:e),l.value=[],K("Users' roles updated successfully")}catch(e){console.error("Failed to update users:",e)}};return(a,e)=>{const m=Te("ChartBarIcon");return h(),y("div",Ge,[t("div",Ye,[t("div",He,[t("div",null,[c(Ee,{items:O}),e[7]||(e[7]=t("h1",{class:"text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mt-2"},"User Management",-1)),e[8]||(e[8]=t("p",{class:"text-light-text-secondary dark:text-dark-text-secondary mt-1"},"View and manage system users",-1))]),t("button",{onClick:de,class:"bg-btn-primary hover:bg-btn-primary-hover dark:hover:bg-btn-primary-dark text-white py-2 px-4 rounded-btn flex items-center shadow-btn hover:shadow-btn-hover transition-btn duration-200"},[c(f(Oe),{class:"h-5 w-5 mr-2"}),e[9]||(e[9]=T(" Reset Filters "))])]),t("div",Je,[t("div",Qe,[e[10]||(e[10]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Total Users",-1)),t("p",We,x(o.value.length),1),t("p",Xe,"Last 30 days: +"+x(U.value),1)]),t("div",et,[e[11]||(e[11]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Admins",-1)),t("p",tt,x(Q.value),1),t("div",at,[t("div",rt,[t("div",{class:"h-2 rounded-full bg-orange-500 transition-all duration-300",style:Se(`width: ${Q.value/o.value.length*100}%`)},null,4)])])]),t("div",st,[e[13]||(e[13]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Active Users",-1)),t("p",lt,x(q.value),1),t("p",nt,[e[12]||(e[12]=t("span",{class:"inline-block transform rotate-45"},"↗",-1)),T(" "+x(P.value)+"% from last month ",1)])]),t("div",ot,[e[14]||(e[14]=t("h3",{class:"text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1"},"Avg. Session",-1)),t("p",it,x(R.value),1),e[15]||(e[15]=t("p",{class:"text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1"},"Minutes per user",-1))])]),l.value.length>0?(h(),y("div",dt,[t("span",ct,x(l.value.length)+" selected ",1),t("button",{onClick:pe,class:"text-red-500 hover:text-red-600 text-sm font-medium"}," Delete Selected "),t("button",{onClick:ve,class:"text-accent-quaternary hover:text-accent-quaternary/80 text-sm font-medium"}," Change Role ")])):V("",!0),t("div",ut,[t("div",mt,[t("table",xt,[t("thead",pt,[t("tr",null,[t("th",vt,[t("input",{type:"checkbox",onChange:B,checked:Z.value,class:"rounded border-light-neutral-300 dark:border-dark-neutral-600 text-accent-primary focus:ring-accent-primary"},null,40,ft)]),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider cursor-pointer",onClick:e[0]||(e[0]=r=>G("name"))},[t("div",yt,[e[16]||(e[16]=t("span",null,"Name",-1)),c(Y,{active:v.value==="name",direction:s.value},null,8,["active","direction"])])]),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider cursor-pointer",onClick:e[1]||(e[1]=r=>G("email"))},[t("div",ht,[e[17]||(e[17]=t("span",null,"Email",-1)),c(Y,{active:v.value==="email",direction:s.value},null,8,["active","direction"])])]),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider cursor-pointer",onClick:e[2]||(e[2]=r=>G("createdAt"))},[t("div",gt,[e[18]||(e[18]=t("span",null,"Joined",-1)),c(Y,{active:v.value==="createdAt",direction:s.value},null,8,["active","direction"])])]),e[19]||(e[19]=t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider"}," Role ",-1)),e[20]||(e[20]=t("th",{scope:"col",class:"px-6 py-3 text-right text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider"}," Actions ",-1))])]),t("tbody",kt,[p.value?(h(),y("tr",bt,e[21]||(e[21]=[t("td",{colspan:"5",class:"px-6 py-12 text-center text-light-text-secondary dark:text-dark-text-secondary"}," Loading users... ",-1)]))):M.value.length===0?(h(),y("tr",wt,[t("td",_t,[t("div",Ct,[c(f(ze),{class:"h-12 w-12 text-light-neutral-400 dark:text-dark-neutral-600 mb-2"}),e[22]||(e[22]=t("h3",{class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary"},"No users found",-1)),e[23]||(e[23]=t("p",{class:"text-light-text-secondary dark:text-dark-text-secondary mt-1"},"Try adjusting your search or filter criteria",-1))])])])):V("",!0),(h(!0),y(oe,null,Ve(M.value,r=>(h(),y("tr",{key:r.id,class:E(["hover:bg-light-neutral-100 dark:hover:bg-dark-neutral-800 transition-colors",l.value.includes(r.id)?"bg-accent-primary/5":""])},[t("td",At,[t("input",{type:"checkbox",checked:l.value.includes(r.id),onChange:A=>L(r.id),class:"rounded border-light-neutral-300 dark:border-dark-neutral-600 text-accent-primary focus:ring-accent-primary"},null,40,Nt)]),t("td",Ut,[t("div",$t,[t("div",St,x(z(r)),1),t("div",Vt,[t("div",Dt,[T(x(r.firstName)+" "+x(r.lastName)+" ",1),ie(r)?(h(),y("span",Tt,"(You)")):V("",!0)])])])]),t("td",Bt,[t("div",Lt,x(r.email||"No email"),1)]),t("td",Mt,[t("div",jt,x(ce(r.createdAt)),1)]),t("td",It,[t("span",{class:E([r.isAdmin?"bg-accent-primary/10 text-accent-primary":"bg-light-neutral-100 dark:bg-dark-neutral-700 text-light-text-secondary dark:text-dark-text-secondary","px-2 py-1 text-xs rounded-full"])},x(r.isAdmin?"Admin":"Customer"),3)]),t("td",Et,[t("div",Ft,[t("button",{onClick:A=>a.viewUserActivity(r),class:"text-accent-quaternary hover:text-accent-quaternary/80 transition-colors",title:"View Activity"},[c(m,{class:"h-5 w-5"})],8,qt),t("button",{onClick:A=>ue(r),class:"text-accent-quaternary hover:text-accent-quaternary/80 transition-colors",title:"Edit User"},[c(f(Ke),{class:"h-5 w-5"})],8,Pt)])])],2))),128))])])])]),w.show?(h(),y("div",Rt,[c(f(le),{class:"h-5 w-5 mr-2"}),t("span",null,x(w.message),1)])):V("",!0)]),c(f(De),{appear:"",show:C.value,as:"template"},{default:$(()=>[c(f(Be),{as:"div",onClose:j,class:"relative z-50"},{default:$(()=>[c(f(se),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:$(()=>e[24]||(e[24]=[t("div",{class:"fixed inset-0 bg-black bg-opacity-50 transition-opacity"},null,-1)])),_:1}),t("div",Zt,[t("div",Ot,[c(f(se),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:$(()=>[c(f(Le),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-light-secondary dark:bg-dark-secondary p-6 text-left align-middle shadow-xl transition-all border border-light-neutral-300 dark:border-dark-neutral-700"},{default:$(()=>[t("div",zt,[c(f(Me),{as:"h3",class:"text-lg font-medium text-light-text-primary dark:text-dark-text-primary"},{default:$(()=>e[25]||(e[25]=[T(" Edit User ")])),_:1}),t("button",{onClick:j,class:"text-light-neutral-500 dark:text-dark-neutral-500 hover:text-light-text-primary dark:hover:text-dark-text-primary focus:outline-none","aria-label":"Close"},[c(f(je),{class:"h-6 w-6"})])]),S.value?(h(),y("div",Kt,[c(f(le),{class:"h-5 w-5 mr-2"}),e[26]||(e[26]=t("span",null,"User updated successfully!",-1))])):V("",!0),t("div",Gt,[t("div",Yt,[t("div",null,[e[27]||(e[27]=t("label",{for:"firstName",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"}," First name ",-1)),H(t("input",{type:"text",id:"firstName","onUpdate:modelValue":e[3]||(e[3]=r=>n.value.firstName=r),class:"mt-1 block w-full rounded-md border border-light-neutral-300 dark:border-dark-neutral-600 bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary px-3 py-2 focus:border-accent-primary focus:ring-accent-primary focus:outline-none sm:text-sm"},null,512),[[J,n.value.firstName]])]),t("div",null,[e[28]||(e[28]=t("label",{for:"lastName",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"}," Last name ",-1)),H(t("input",{type:"text",id:"lastName","onUpdate:modelValue":e[4]||(e[4]=r=>n.value.lastName=r),class:"mt-1 block w-full rounded-md border border-light-neutral-300 dark:border-dark-neutral-600 bg-light-primary dark:bg-dark-primary text-light-text-primary dark:text-dark-text-primary px-3 py-2 focus:border-accent-primary focus:ring-accent-primary focus:outline-none sm:text-sm"},null,512),[[J,n.value.lastName]])])]),t("div",null,[e[29]||(e[29]=t("label",{for:"email",class:"block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary"}," Email ",-1)),H(t("input",{type:"email",id:"email","onUpdate:modelValue":e[5]||(e[5]=r=>n.value.email=r),disabled:"",class:"mt-1 block w-full rounded-md border border-light-neutral-300 dark:border-dark-neutral-600 bg-light-neutral-100 dark:bg-dark-neutral-800 text-light-neutral-500 dark:text-dark-neutral-500 px-3 py-2 cursor-not-allowed sm:text-sm"},null,512),[[J,n.value.email]])]),t("div",Ht,[c(f(Ze),{modelValue:n.value.isAdmin,"onUpdate:modelValue":e[6]||(e[6]=r=>n.value.isAdmin=r),class:E([n.value.isAdmin?"bg-accent-primary":"bg-light-neutral-300 dark:bg-dark-neutral-600","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"])},{default:$(()=>[e[30]||(e[30]=t("span",{class:"sr-only"},"Admin status",-1)),t("span",{"aria-hidden":"true",class:E([n.value.isAdmin?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["modelValue","class"]),e[31]||(e[31]=t("span",{class:"ml-3 text-sm text-light-text-primary dark:text-dark-text-primary"}," Admin privileges ",-1))])]),t("div",Jt,[t("button",{type:"button",class:"inline-flex justify-center rounded-md border border-light-neutral-300 dark:border-dark-neutral-600 bg-light-primary dark:bg-dark-primary px-4 py-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary hover:bg-light-neutral-100 dark:hover:bg-dark-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2",onClick:j}," Cancel "),t("button",{type:"button",class:"inline-flex justify-center rounded-md border border-transparent bg-btn-primary hover:bg-btn-primary-hover dark:hover:bg-btn-primary-dark px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-btn-primary focus-visible:ring-offset-2",onClick:me,disabled:k.value},[k.value?(h(),y("span",Wt,"⟳")):V("",!0),T(" "+x(k.value?"Saving...":"Save Changes"),1)],8,Qt)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}}},la=Fe(Xt,[["__scopeId","data-v-eadf890e"]]);export{la as default};
