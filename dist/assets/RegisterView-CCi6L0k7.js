import{c as i,a as e,f as u,J as B,r as s,b as a,w as b,q as l,S as R,v as U,H as p,I as x,n as h,B as j,g as w,t as _,K as L,d as z,u as E}from"./index-dP2aHmky.js";import{r as F,a as C,b as N}from"./LockClosedIcon-DQ9yI1C5.js";function V(P,f){return u(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{d:"M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"})])}const $={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-light-primary dark:bg-dark-primary"},D={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},H={class:"bg-light-secondary dark:bg-dark-secondary py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-light-neutral-300 dark:border-dark-neutral-600"},I={key:0,class:"rounded-md bg-red-50 p-4 mb-6"},J={class:"flex"},T={class:"flex-shrink-0"},Z={class:"ml-3"},K={class:"mt-2 text-sm text-red-700"},Y={class:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2"},G={class:"mt-1 relative rounded-md shadow-sm"},O={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},Q={class:"mt-1 relative rounded-md shadow-sm"},W={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},X={class:"mt-1 relative rounded-md shadow-sm"},ee={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},te={class:"mt-1 relative rounded-md shadow-sm"},re={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},ae={class:"mt-1 relative rounded-md shadow-sm"},se={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},le={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},de={key:0,class:"mt-2 text-sm text-red-600"},oe=["disabled"],ne={key:0,class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ie={class:"mt-6"},ue={class:"mt-2 text-center"},pe={__name:"RegisterView",setup(P){const f=B(),S=E(),g=s(""),c=s(""),m=s(""),v=s(""),k=s(""),d=s(""),o=s(!1),n=s(!1),M=()=>{m.value&&c.value!==m.value?n.value=!0:n.value=!1},q=async()=>{if(d.value="",o.value=!0,c.value!==m.value){d.value="Passwords do not match",o.value=!1;return}try{await f.register(g.value,c.value,{firstName:v.value,lastName:k.value,email:g.value}),S.push("/")}catch(y){d.value=y.message||"Failed to register. Please try again."}finally{o.value=!1}};return(y,t)=>{const A=z("RouterLink");return u(),i("div",$,[t[15]||(t[15]=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[e("h2",{class:"text-center text-3xl font-extrabold text-light-text-primary dark:text-dark-text-primary"},"Create your account"),e("p",{class:"mt-2 text-center text-sm text-light-text-secondary dark:text-dark-text-secondary"}," Join our jewelry community today ")],-1)),e("div",D,[e("div",H,[a(l(R),{appear:"",show:!!d.value},{default:b(()=>[d.value?(u(),i("div",I,[e("div",J,[e("div",T,[a(l(N),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),e("div",Z,[t[5]||(t[5]=e("h3",{class:"text-sm font-medium text-red-800"},"Registration Error",-1)),e("div",K,[e("p",null,_(d.value),1)])])])])):h("",!0)]),_:1},8,["show"]),e("form",{onSubmit:U(q,["prevent"]),class:"space-y-6"},[e("div",Y,[e("div",null,[t[6]||(t[6]=e("label",{for:"firstName",class:"block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"},"First name",-1)),e("div",G,[e("div",O,[a(l(V),{class:"h-5 w-5 text-light-neutral-500 dark:text-dark-neutral-500","aria-hidden":"true"})]),p(e("input",{id:"firstName","onUpdate:modelValue":t[0]||(t[0]=r=>v.value=r),type:"text",required:"",class:"appearance-none block w-full pl-10 pr-3 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded-md shadow-sm bg-light-secondary dark:bg-dark-secondary text-light-text-primary dark:text-dark-text-primary placeholder-light-neutral-400 dark:placeholder-dark-neutral-500 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary",placeholder:"First name"},null,512),[[x,v.value]])])]),e("div",null,[t[7]||(t[7]=e("label",{for:"lastName",class:"block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"},"Last name",-1)),e("div",Q,[e("div",W,[a(l(V),{class:"h-5 w-5 text-light-neutral-500 dark:text-dark-neutral-500","aria-hidden":"true"})]),p(e("input",{id:"lastName","onUpdate:modelValue":t[1]||(t[1]=r=>k.value=r),type:"text",required:"",class:"appearance-none block w-full pl-10 pr-3 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded-md shadow-sm bg-light-secondary dark:bg-dark-secondary text-light-text-primary dark:text-dark-text-primary placeholder-light-neutral-400 dark:placeholder-dark-neutral-500 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary",placeholder:"Last name"},null,512),[[x,k.value]])])])]),e("div",null,[t[8]||(t[8]=e("label",{for:"email",class:"block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"},"Email address",-1)),e("div",X,[e("div",ee,[a(l(F),{class:"h-5 w-5 text-light-neutral-500 dark:text-dark-neutral-500","aria-hidden":"true"})]),p(e("input",{id:"email","onUpdate:modelValue":t[2]||(t[2]=r=>g.value=r),type:"email",required:"",class:"appearance-none block w-full pl-10 pr-3 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded-md shadow-sm bg-light-secondary dark:bg-dark-secondary text-light-text-primary dark:text-dark-text-primary placeholder-light-neutral-400 dark:placeholder-dark-neutral-500 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary",placeholder:"Your email"},null,512),[[x,g.value]])])]),e("div",null,[t[9]||(t[9]=e("label",{for:"password",class:"block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"},"Password",-1)),e("div",te,[e("div",re,[a(l(C),{class:"h-5 w-5 text-light-neutral-500 dark:text-dark-neutral-500","aria-hidden":"true"})]),p(e("input",{id:"password","onUpdate:modelValue":t[3]||(t[3]=r=>c.value=r),type:"password",required:"",minlength:"6",class:"appearance-none block w-full pl-10 pr-3 py-2 border border-light-neutral-300 dark:border-dark-neutral-600 rounded-md shadow-sm bg-light-secondary dark:bg-dark-secondary text-light-text-primary dark:text-dark-text-primary placeholder-light-neutral-400 dark:placeholder-dark-neutral-500 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary",placeholder:"Create password"},null,512),[[x,c.value]])]),t[10]||(t[10]=e("p",{class:"mt-1 text-xs text-light-text-secondary dark:text-dark-text-secondary"},"Password must be at least 6 characters",-1))]),e("div",null,[t[11]||(t[11]=e("label",{for:"confirmPassword",class:"block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"},"Confirm Password",-1)),e("div",ae,[e("div",se,[a(l(C),{class:"h-5 w-5 text-light-neutral-500 dark:text-dark-neutral-500","aria-hidden":"true"})]),p(e("input",{id:"confirmPassword","onUpdate:modelValue":t[4]||(t[4]=r=>m.value=r),type:"password",required:"",minlength:"6",onInput:M,class:j(["appearance-none block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm placeholder-light-neutral-400 dark:placeholder-dark-neutral-500 focus:ring-2 focus:outline-none",n.value?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":"border-light-neutral-300 dark:border-dark-neutral-600 bg-light-secondary dark:bg-dark-secondary text-light-text-primary dark:text-dark-text-primary focus:ring-accent-primary focus:border-accent-primary"]),placeholder:"Confirm password"},null,34),[[x,m.value]]),n.value?(u(),i("div",le,[a(l(N),{class:"h-5 w-5 text-red-500","aria-hidden":"true"})])):h("",!0)]),n.value?(u(),i("p",de,"Passwords don't match")):h("",!0)]),e("div",null,[e("button",{type:"submit",class:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",disabled:o.value||n.value},[o.value?(u(),i("svg",ne,t[12]||(t[12]=[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)]))):h("",!0),w(" "+_(o.value?"Creating Account...":"Create Account"),1)],8,oe)])],32),e("div",ie,[t[14]||(t[14]=L('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-light-neutral-300 dark:border-dark-neutral-600"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-light-secondary dark:bg-dark-secondary text-light-text-secondary dark:text-dark-text-secondary">Already have an account?</span></div></div>',1)),e("div",ue,[a(A,{to:"/login",class:"font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"},{default:b(()=>t[13]||(t[13]=[w("Sign in instead")])),_:1})])])])])])}}};export{pe as default};
