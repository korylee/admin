var m=(s,i,o)=>new Promise((d,c)=>{var a=t=>{try{r(o.next(t))}catch(e){c(e)}},u=t=>{try{r(o.throw(t))}catch(e){c(e)}},r=t=>t.done?d(t.value):Promise.resolve(t.value).then(a,u);r((o=o.apply(s,i)).next())});import{bo as E,Z as b,aD as R,ea as f,aw as n,a9 as F,eb as w,ax as C,b4 as p,a as y,B as D,b as T,i as L,a1 as h,a2 as k,a3 as O,c as _,a4 as A,aK as S,aJ as N,a5 as K}from"./entry-index-d8ec0f3a.js";import{D as $}from"./chunk-index-a91cc224.js";import{u as j}from"./chunk-useTabs-6e421dd2.js";import{i as B}from"./chunk-intersection-11dec9c4.js";function v(){const s=E(),i=b(),o=R(),{closeAll:d}=j(C);function c(){return m(this,null,function*(){i.setProjectConfig({permissionMode:f.permissionMode===n.BACK?n.ROUTE_MAPPING:n.BACK}),location.reload()})}function a(){return m(this,null,function*(){F().clearCacheTabs(),w(),(yield o.buildRoutesAction()).forEach(l=>{C.addRoute(l)}),o.setLastBuildMenuTime(),yield d()})}function u(e,M=!0){var g;if(!e)return M;const l=f.permissionMode;if([n.ROUTE_MAPPING,n.ROLE].includes(l))return p(e)?B(e,s.getRoleList).length>0:(g=s.getRoleList)==null?void 0:g.includes(e);if(n.BACK===l){const P=o.getPermCodeList;return p(e)?B(e,P).length>0:P.includes(e)}return!0}function r(e){return m(this,null,function*(){if(f.permissionMode!==n.ROUTE_MAPPING)throw new Error("please switch permissionModeEnum to ROLE mode in the configuration to operate");p(e)||(e=[e]),s.setRoleList(e),yield a()})}function t(){return m(this,null,function*(){a()})}return{togglePermissionMode:c,changeRole:r,hasPermission:u,resume:a,refreshMenu:t}}const x=y({name:"CurrentPermissionMode",components:{Divider:$,Button:D},setup(){const s=b(),i=T(()=>s.getProjectConfig.permissionMode===n.BACK),{togglePermissionMode:o}=v();return{togglePermissionMode:o,PermissionModeEnum:n,isBackPermissionMode:i}}}),U={class:"mt-2"},G=K("span",null,"\u5F53\u524D\u6743\u9650\u6A21\u5F0F: ",-1),I=S("\u5207\u6362\u6743\u9650\u6A21\u5F0F");function V(s,i,o,d,c,a){const u=h("Button"),r=h("Divider");return k(),O("div",U,[G,_(u,{class:"ml-4"},{default:A(()=>[S(N(s.isBackPermissionMode?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),_(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:A(()=>[I]),_:1},8,["onClick"]),_(r)])}var z=L(x,[["render",V],["__file","/home/runner/work/admin/admin/src/views/demo/permission/CurrentPermissionMode.vue"]]),W=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as C,W as a,v as u};