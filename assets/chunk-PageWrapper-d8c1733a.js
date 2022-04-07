var ge=Object.defineProperty,pe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var te=(e,t,a)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))he.call(t,a)&&te(e,a,t[a]);if(ee)for(var a of ee(t))be.call(t,a)&&te(e,a,t[a]);return e},q=(e,t)=>pe(e,me(t));import{c as i,A as ie,G as _e,a as Q,P,u as ye,p as I,dv as Ce,b as H,c4 as Pe,e as $e,f as G,dw as we,ch as Oe,cW as Be,dx as He,a0 as se,bA as ke,i as ce,a2 as R,a3 as J,a5 as Y,a_ as $,a6 as T,a7 as ue,q as Ae,s as de,dy as Se,Y as B,w as Fe,a1 as ae,af as re,b7 as Re,ac as Te,a4 as x,b8 as je,b9 as Le,ab as xe,aK as Ie,aJ as Ne,a$ as ze,ag as ne}from"./entry-index-0478a864.js";import{B as We,u as De}from"./chunk-index-d5746f84.js";import{A as Me}from"./chunk-index-a99d3f98.js";import{o as Ve}from"./chunk-omit-60480936.js";import"./chunk-index-6996fddb.js";import{T as Ee}from"./chunk-transButton-f8186042.js";var qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ge=qe;function oe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),c.forEach(function(r){Je(e,r,a[r])})}return e}function Je(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var U=function(t,a){var c=oe({},t,a.attrs);return i(ie,oe({},c,{icon:Ge}),null)};U.displayName="ArrowLeftOutlined";U.inheritAttrs=!1;var Ye=U,Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ue=Qe;function le(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),c.forEach(function(r){Xe(e,r,a[r])})}return e}function Xe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var X=function(t,a){var c=le({},t,a.attrs);return i(ie,le({},c,{icon:Ue}),null)};X.displayName="ArrowRightOutlined";X.inheritAttrs=!1;var Ze=X,Ke=function(){return{backIcon:P.any,prefixCls:String,title:P.any,subTitle:P.any,breadcrumb:P.object,tags:P.any,footer:P.any,extra:P.any,avatar:P.object,ghost:{type:Boolean,default:void 0},onBack:Function}},et=Q({name:"APageHeader",props:Ke(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,a){var c=a.emit,r=a.slots,b=ye("page-header",t),u=b.prefixCls,m=b.direction,_=b.pageHeader,y=I(!1),k=Ce(),j=function(n){var o=n.width;k.value||(y.value=o<768)},N=H(function(){var l,n,o;return(o=(l=t.ghost)!==null&&l!==void 0?l:(n=_.value)===null||n===void 0?void 0:n.ghost)!==null&&o!==void 0?o:!0}),z=function(){var n,o,s;return(s=(n=t.backIcon)!==null&&n!==void 0?n:(o=r.backIcon)===null||o===void 0?void 0:o.call(r))!==null&&s!==void 0?s:m.value==="rtl"?i(Ze,null,null):i(Ye,null,null)},W=function(n){return!n||!t.onBack?null:i(He,{componentName:"PageHeader",children:function(s){var f=s.back;return i("div",{class:"".concat(u.value,"-back")},[i(Ee,{onClick:function(g){c("back",g)},class:"".concat(u.value,"-back-button"),"aria-label":f},{default:function(){return[n]}})])}},null)},L=function(){var n;return t.breadcrumb?i(We,t.breadcrumb,null):(n=r.breadcrumb)===null||n===void 0?void 0:n.call(r)},h=function(){var n,o,s,f,d,g,w,A,p,D=t.avatar,S=(n=t.title)!==null&&n!==void 0?n:(o=r.title)===null||o===void 0?void 0:o.call(r),F=(s=t.subTitle)!==null&&s!==void 0?s:(f=r.subTitle)===null||f===void 0?void 0:f.call(r),M=(d=t.tags)!==null&&d!==void 0?d:(g=r.tags)===null||g===void 0?void 0:g.call(r),V=(w=t.extra)!==null&&w!==void 0?w:(A=r.extra)===null||A===void 0?void 0:A.call(r),O="".concat(u.value,"-heading"),Z=S||F||M||V;if(!Z)return null;var fe=z(),K=W(fe),ve=K||D||Z;return i("div",{class:O},[ve&&i("div",{class:"".concat(O,"-left")},[K,D?i(Me,D,null):(p=r.avatar)===null||p===void 0?void 0:p.call(r),S&&i("span",{class:"".concat(O,"-title"),title:typeof S=="string"?S:void 0},[S]),F&&i("span",{class:"".concat(O,"-sub-title"),title:typeof F=="string"?F:void 0},[F]),M&&i("span",{class:"".concat(O,"-tags")},[M])]),V&&i("span",{class:"".concat(O,"-extra")},[V])])},v=function(){var n,o,s=(n=t.footer)!==null&&n!==void 0?n:Be((o=r.footer)===null||o===void 0?void 0:o.call(r));return we(s)?null:i("div",{class:"".concat(u.value,"-footer")},[s])},C=function(n){return i("div",{class:"".concat(u.value,"-content")},[n])};return function(){var l,n,o,s=((n=t.breadcrumb)===null||n===void 0?void 0:n.routes)||r.breadcrumb,f=t.footer||r.footer,d=Pe((o=r.default)===null||o===void 0?void 0:o.call(r)),g=$e(u.value,(l={"has-breadcrumb":s,"has-footer":f},G(l,"".concat(u.value,"-ghost"),N.value),G(l,"".concat(u.value,"-rtl"),m.value==="rtl"),G(l,"".concat(u.value,"-compact"),y.value),l));return i(Oe,{onResize:j},{default:function(){return[i("div",{class:g},[L(),h(),d.length?C(d):null,v()])]}})}}}),tt=_e(et);const at=Q({name:"PageFooter",inheritAttrs:!1,setup(){const{getPrefixCls:e}=se();return{prefixCls:e("page-footer"),getCalcContentWidth:ke}}});function rt(e,t,a,c,r,b){return R(),J("div",{class:T(e.prefixCls),style:ue({width:e.getCalcContentWidth})},[Y("div",{class:T(`${e.prefixCls}__left`)},[$(e.$slots,"left",{},void 0,!0)],2),$(e.$slots,"default",{},void 0,!0),Y("div",{class:T(`${e.prefixCls}__right`)},[$(e.$slots,"right",{},void 0,!0)],2)],6)}var nt=ce(at,[["render",rt],["__scopeId","data-v-3661f935"],["__file","/home/runner/work/admin/admin/src/components/Page/src/PageFooter.vue"]]);function ot(e){let t;Ae(()=>{e(),de(()=>{t=!0})}),Se(()=>{t&&e()})}const lt=Q({name:"PageWrapper",components:{PageHeader:tt,PageFooter:nt},inheritAttrs:!1,props:{title:{type:String,default:""},dense:Boolean,ghost:Boolean,content:{type:String,default:""},contentStyle:{type:Object,default:()=>({})},contentBackground:Boolean,contentFullHeight:Boolean,contentClass:{type:String,default:""},fixedHeight:Boolean},setup(e,{slots:t}){const a=I(null),c=I(null),r=I(0),{getPrefixCls:b}=se(),u=b("page-wrapper"),{contentHeight:m,setPageHeight:_,pageHeight:y}=De(),k=H(()=>[u,{[`${u}-dense`]:e.dense}]),j=H(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),N=H(()=>Object.keys(Ve(t,"default","leftFooter","rightFooter","headerContent"))),z=H(()=>{const{contentBackground:h,contentClass:v}=e;return[`${u}-content`,v,{[`${u}-content-bg`]:h}]}),W=H(()=>{const{contentFullHeight:h,contentStyle:v,fixedHeight:C}=e;if(!h)return v;const l=`${B(y)}px`;return q(E(q(E({},v),{minHeight:l}),C?{height:l}:{}),{paddingBottom:`${B(r)}px`})});Fe(()=>[m==null?void 0:m.value,j.value],()=>{L()},{flush:"post",immediate:!0}),ot(()=>{de(()=>L())});function L(){var g,w;if(!e.contentFullHeight)return;const h=B(c),v=B(a);r.value=0;const C=h==null?void 0:h.$el;C&&(r.value+=(g=C==null?void 0:C.offsetHeight)!=null?g:0);let l=0;const n=v==null?void 0:v.$el;n&&(l+=(w=n==null?void 0:n.offsetHeight)!=null?w:0);let o=0,s="0px",f="0px";const d=document.querySelectorAll(b("page-wrapper-content"));if(d!=null&&d.length){const A=d[0],p=getComputedStyle(A);s=p==null?void 0:p.marginBottom,f=p==null?void 0:p.marginTop}s&&(o+=Number(s.replace(/[^\d]/g,""))),f&&(o+=Number(f.replace(/[^\d]/g,""))),_==null||_(B(m)-B(r)-l-o)}return{getClass:k,getShowFooter:j,getHeaderSlots:N,getContentClass:z,getContentStyle:W,pageHeight:y}}});function it(e,t,a,c,r,b){var _;const u=ae("PageHeader"),m=ae("PageFooter");return R(),J("div",{class:T(e.getClass)},[e.content||e.$slots.headerContent||e.title||((_=e.getHeaderSlots)==null?void 0:_.length)?(R(),re(u,ze({key:0,ref:"headerRef"},e.$attrs,{ghost:e.ghost,title:e.title}),Re({default:x(()=>[e.content?(R(),J(xe,{key:0},[Ie(Ne(e.content),1)],2112)):$(e.$slots,"headerContent",{key:1},void 0,!0)]),_:2},[Te(e.getHeaderSlots,y=>({name:y,fn:x(k=>[$(e.$slots,y,je(Le(k)),void 0,!0)])}))]),1040,["ghost","title"])):ne("v-if",!0),Y("div",{class:T([e.getContentClass,"overflow-hidden"]),style:ue(e.getContentStyle)},[$(e.$slots,"default",{},void 0,!0)],6),e.getShowFooter?(R(),re(m,{key:1,ref:"footerRef"},{left:x(()=>[$(e.$slots,"leftFooter",{},void 0,!0)]),right:x(()=>[$(e.$slots,"rightFooter",{},void 0,!0)]),_:3},512)):ne("v-if",!0)],2)}var pt=ce(lt,[["render",it],["__scopeId","data-v-640ca12e"],["__file","/home/runner/work/admin/admin/src/components/Page/src/PageWrapper.vue"]]);export{pt as P,ot as o,nt as p};
