import{p as i,d0 as l,a,j as c,b as T,Y as _,i as f,a2 as g,a3 as m,aJ as p}from"./entry-index-d8ec0f3a.js";var t=(e=>(e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE",e))(t||{});const n=i(0);function O(){const e=l(n);function o(s){n.value=s}function r(){o(0)}return{setLoginState:o,getLoginState:e,handleBackLogin:r}}const d=a({name:"LoginFormTitle",setup(){const{t:e}=c(),{getLoginState:o}=O();return{getFormTitle:T(()=>({[t.RESET_PASSWORD]:e("sys.login.forgetFormTitle"),[t.LOGIN]:e("sys.login.signInFormTitle"),[t.REGISTER]:e("sys.login.signUpFormTitle"),[t.MOBILE]:e("sys.login.mobileSignInFormTitle"),[t.QR_CODE]:e("sys.login.qrSignInFormTitle")})[_(o)])}}}),u={class:"font-bold text-2xl xl:text-3xl text-center xl:text-left mb-6"};function R(e,o,r,s,S,F){return g(),m("h2",u,p(e.getFormTitle),1)}var I=f(d,[["render",R],["__file","/home/runner/work/admin/admin/src/views/sys/login/components/LoginFormTitle.vue"]]),x=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{I as L,t as a,x as b,O as u};