import{a as l,p as b,i as d,aa as t,ab as e,am as y,ad as _,ac as n,c as r,an as f,b7 as u}from"./entry-index-204be9fe.js";import{C}from"./chunk-index-e0f0d7a5.js";import"./chunk-index-35783358.js";import"./chunk-index-f4c64931.js";import{_ as B}from"./chunk-VisitAnalysis.vue_vue_type_script_lang-621dbaaa.js";import{_ as v}from"./chunk-VisitAnalysisBar.vue_vue_type_script_lang-845fde0b.js";import"./chunk-index-6fa909f0.js";import"./chunk-_flatRest-8e2e73e0.js";import"./chunk-_setToString-44848017.js";import"./chunk-hasIn-591a3091.js";import"./chunk-responsiveObserve-37f96bcb.js";import"./chunk-props-fc0fcefb.js";import"./chunk-useEcharts-61897fd4.js";import"./chunk-useTimeout-2cda84c1.js";const g=l({name:"SiteAnalysis",components:{VisitAnalysisBar:v,Card:C,VisitAnalysis:B},props:{loading:Boolean},setup(){const a=b("tab1"),o=[{key:"tab1",tab:"\u8D8B\u52BF"},{key:"tab2",tab:"\u8BBF\u95EE\u91CF"}];function s(i){a.value=i}return{activeKey:a,tabListTitle:o,onTabChange:s}}}),k={key:0},h={key:1};function A(a,o,s,i,V,$){const p=t("VisitAnalysis"),m=t("VisitAnalysisBar"),c=t("Card");return e(),y(c,u(a.$attrs,{"tab-list":a.tabListTitle,"active-tab-key":a.activeKey,loading:a.loading,onTabChange:a.onTabChange}),{default:_(()=>[a.activeKey==="tab1"?(e(),n("p",k,[r(p)])):a.activeKey==="tab2"?(e(),n("p",h,[r(m)])):f("v-if",!0)]),_:1},16,["tab-list","active-tab-key","loading","onTabChange"])}var H=d(g,[["render",A]]);export{H as default};