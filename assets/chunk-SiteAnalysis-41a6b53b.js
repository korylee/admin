import{a as l,p as d,i as y,a1 as t,a2 as e,af as b,a4 as u,a3 as n,c as r,ag as f,a$ as _}from"./entry-index-0478a864.js";import{C}from"./chunk-index-63d09889.js";import"./chunk-index-f410cd3c.js";/* empty css                    */import v from"./chunk-VisitAnalysis-68bfc71f.js";import B from"./chunk-VisitAnalysisBar-a4b83a6e.js";import"./chunk-index-f95715da.js";import"./chunk-Col-6adb5eb1.js";import"./chunk-responsiveObserve-3a4508d1.js";import"./chunk-_flatRest-ead86fe5.js";import"./chunk-_setToString-a53de029.js";import"./chunk-useRefs-659661c7.js";import"./chunk-hasIn-5e556790.js";import"./chunk-props-fc0fcefb.js";import"./chunk-useEcharts-67168694.js";import"./chunk-useTimeout-e0728cd7.js";const g=l({name:"SiteAnalysis",components:{VisitAnalysisBar:B,Card:C,VisitAnalysis:v},props:{loading:Boolean},setup(){const a=d("tab1"),o=[{key:"tab1",tab:"\u8D8B\u52BF"},{key:"tab2",tab:"\u8BBF\u95EE\u91CF"}];function i(s){a.value=s}return{activeKey:a,tabListTitle:o,onTabChange:i}}}),h={key:0},k={key:1};function A(a,o,i,s,V,T){const p=t("VisitAnalysis"),m=t("VisitAnalysisBar"),c=t("Card");return e(),b(c,_(a.$attrs,{"tab-list":a.tabListTitle,"active-tab-key":a.activeKey,loading:a.loading,onTabChange:a.onTabChange}),{default:u(()=>[a.activeKey==="tab1"?(e(),n("p",h,[r(p)])):a.activeKey==="tab2"?(e(),n("p",k,[r(m)])):f("v-if",!0)]),_:1},16,["tab-list","active-tab-key","loading","onTabChange"])}var J=y(g,[["render",A],["__file","/home/runner/work/admin/admin/src/views/dashboard/analysis/components/SiteAnalysis.vue"]]);export{J as default};
