import{d as y,ac as g,as as N,c as _,ag as i,at as O,au as R}from"./vendor.2611dcfe.js";import{E as t}from"./exceptionEnum.1496ab9e.js";import{_ as A,u as h,a as v,P as b}from"./index.387d2779.js";var S="/admin/assets/no-data.aabb078b.png",k="/admin/assets/net-work.66b8f90b.png";const G=y({name:"ErrorPage",props:{status:{type:Number,default:t.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(s){const l=new Map,{t:e}=g(),T=N(),o=h(),a=v(),d=_(()=>{const n=Number(T.query.status);return[403,404,500,10100,1e4].includes(n)?n:s.status}),f=_(()=>l.get(d.value)),r=e("sys.exception.backLogin"),u=e("sys.exception.backHome");return l.set(t.PAGE_NOT_ACCESS,{title:"403",status:`${t.PAGE_NOT_ACCESS}`,subTitle:e("sys.exception.subTitle403"),btnText:s.full?r:u,handler:()=>s.full?a(b.BASE_LOGIN):a()}).set(t.PAGE_NOT_FOUND,{title:"404",status:`${t.PAGE_NOT_FOUND}`,subTitle:e("sys.exception.subTitle404"),btnText:s.full?r:u,handler:()=>s.full?a(b.BASE_LOGIN):a()}).set(t.ERROR,{title:"500",status:`${t.ERROR}`,subTitle:e("sys.exception.subTitle500"),btnText:u,handler:()=>a()}).set(t.PAGE_NOT_DATA,{title:e("sys.exception.noDataTitle"),subTitle:"",btnText:e("sys.exception.refresh"),handler:()=>o(),icon:S}).set(t.NET_WORK_ERROR,{title:e("sys.exception.networkErrorTitle"),subTitle:e("sys.exception.networkErrorSubTitle"),btnText:e("common.refresh"),icon:k,handler:()=>o()}),()=>{const{title:n,subTitle:m,btnText:x,status:p,handler:E,icon:c}=f.value||{};return i(R,{class:"exception",status:p,title:s.title||n,subTitle:s.subTitle||m},{extra:()=>i(O,{type:"primary",onClick:E},{default:()=>x}),icon:()=>c?i("img",{src:c}):null})}}});var D=A(G,[["__scopeId","data-v-38015c87"]]);export{D as default};