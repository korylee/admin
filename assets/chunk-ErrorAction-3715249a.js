var u=(r,a,t)=>new Promise((i,e)=>{var c=o=>{try{n(t.next(o))}catch(p){e(p)}},s=o=>{try{n(t.throw(o))}catch(p){e(p)}},n=o=>o.done?i(o.value):Promise.resolve(o.value).then(c,s);n((t=t.apply(r,a)).next())});import{i as f,a as _,aE as g,b1 as E,j as L,a8 as C,b as h,a1 as m,a2 as B,af as k,a4 as l,c as d,n as y}from"./entry-index-3c6d391e.js";import{B as T}from"./chunk-index-44a69194.js";import{u as b}from"./chunk-errorLog-4ea445af.js";import"./chunk-index-d76f1742.js";import"./chunk-index-3cee455d.js";import"./chunk-DownOutlined-d7b358b6.js";import"./chunk-_baseIteratee-765a7ad7.js";import"./chunk-get-c96191fb.js";import"./chunk-_flatRest-a495e150.js";import"./chunk-_setToString-e7ae8824.js";import"./chunk-hasIn-5a1c4138.js";import"./chunk-createAsyncComponent-48c4b9ad.js";import"./chunk-index-027349f8.js";import"./chunk-omit-86a858bd.js";import"./chunk-useDesign-f52f8c78.js";import"./chunk-useLocaleSetting-19fb3a4b.js";import"./chunk-LeftOutlined-47d767af.js";import"./chunk-useTabs-b46fdd36.js";import"./chunk-index-c029c37e.js";import"./chunk-useRefs-ceb51d50.js";import"./chunk-useTimeout-62b9ca7b.js";import"./chunk-index-992ca129.js";import"./chunk-exceptionEnum-a4d2a0e3.js";const v=_({name:"ErrorAction",components:{Icon:g,Tooltip:E,Badge:T},setup(){const{t:r}=L(),{push:a}=C(),t=b(),i=h(()=>t.getErrorLogListCount);function e(){return u(this,null,function*(){yield a(y.ERROR_LOG_PAGE),t.setErrorLogListCount(0)})}return{t:r,handleToErrorList:e,getCount:i}}});function w(r,a,t,i,e,c){const s=m("Icon"),n=m("Badge"),o=m("Tooltip");return B(),k(o,{title:r.t("layout.header.tooltipErrorLog"),placement:"bottom","mouse-enter-delay":.5,onClick:r.handleToErrorList},{default:l(()=>[d(n,{"over-flow-count":99,offset:[0,10],count:r.getCount},{default:l(()=>[d(s,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouse-enter-delay","onClick"])}var Y=f(v,[["render",w],["__file","/home/runner/work/admin/admin/src/layouts/default/header/components/ErrorAction.vue"]]);export{Y as default};