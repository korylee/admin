import{c0 as p,c as d,$ as f,c1 as u}from"./entry-index-3c6d391e.js";function y(e,n={}){const{size:o="small",delay:t=100,timeout:s=3e4,loading:a=!1,retry:r=!0}=n;return p({loader:e,loadingComponent:a?d(f,{spinning:!0,size:o},null):void 0,timeout:s,delay:t,onError:r?(i,c,l,m)=>{i.message.match(/fetch/)&&m<=3?c():l()}:u})}export{y as c};