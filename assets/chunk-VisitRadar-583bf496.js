import{i as r,p as i,w as s,a1 as n,a2 as u,af as d,a4 as m,a5 as l,a7 as p}from"./entry-index-1b9513a9.js";import{C as c}from"./chunk-index-99ee29c6.js";import"./chunk-index-03dc2c24.js";/* empty css                    */import{u as f}from"./chunk-useEcharts-f224a555.js";import"./chunk-index-b37907e2.js";import"./chunk-Col-a7730787.js";import"./chunk-responsiveObserve-1e88263e.js";import"./chunk-_flatRest-fd4789c9.js";import"./chunk-_setToString-78533d65.js";import"./chunk-useRefs-4c22f803.js";import"./chunk-hasIn-a5f0969b.js";import"./chunk-useTimeout-b61e9ad1.js";const h={name:"VisitRadar",components:{Card:c},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=i(null);return s(()=>a.loading,()=>{const{setOptions:t}=f(e);a.loading||t({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"\u7535\u8111",max:100},{text:"\u5145\u7535\u5668",max:100},{text:"\u8033\u673A",max:100},{text:"\u624B\u673A",max:100},{text:"Ipad",max:100},{text:"\u8033\u673A",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),{chartRef:e}}};function x(a,e,t,g,_,w){const o=n("Card");return u(),d(o,{title:"\u8F6C\u5316\u7387",loading:t.loading},{default:m(()=>[l("div",{ref:"chartRef",style:p({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"])}var O=r(h,[["render",x],["__file","/home/runner/work/admin/admin/src/views/dashboard/analysis/components/VisitRadar.vue"]]);export{O as default};