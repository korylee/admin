import{i as B,a as C,B as i,bv as A,b as m,aa as t,ab as S,am as D,ad as n,c as o,ae as s,aQ as a,aR as l,dW as R,dX as g}from"./entry-index-204be9fe.js";import{P}from"./chunk-PageWrapper-8d5afa9b.js";import{A as v}from"./chunk-index-0509dc31.js";import{C as y,u as T}from"./chunk-CurrentPermissionMode-3597611e.js";import"./chunk-index-da060bc8.js";import"./chunk-DownOutlined-e3505689.js";import"./chunk-index-546e91a5.js";import"./chunk-eagerComputed-73662b77.js";import"./chunk-responsiveObserve-37f96bcb.js";import"./chunk-useSize-c585c6d5.js";import"./chunk-index-e42fd315.js";import"./chunk-omit-31ce157e.js";import"./chunk-_flatRest-8e2e73e0.js";import"./chunk-_setToString-44848017.js";import"./chunk-index-f0fec3ea.js";import"./chunk-useTabs-5841f744.js";import"./chunk-intersection-99741de9.js";var r=(u=>(u.SUPER="super",u.TEST="test",u))(r||{});const h=C({name:"PermissionFrontDemo",components:{CurrentPermissionMode:y,ButtonGroup:i.Group,Button:i,PageWrapper:P,Alert:v},setup(){const{changeRole:u}=T(),e=A();return{userStore:e,RoleEnum:r,isSupper:m(()=>e.getRoleList.includes(r.SUPER)),isTest:m(()=>e.getRoleList.includes(r.TEST)),changeRole:u}}}),d=u=>(R("data-v-7f4fdaae"),u=u(),g(),u),$=d(()=>s("span",null,"\u5F53\u524D\u89D2\u8272",-1)),k={class:"mt-4"},U=d(()=>s("span",null,"\u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): ",-1));function b(u,e,G,I,W,w){const c=t("CurrentPermissionMode"),E=t("Alert"),p=t("Button"),F=t("ButtonGroup"),_=t("PageWrapper");return S(),D(_,{title:"\u524D\u7AEF\u6743\u9650\u793A\u4F8B","content-background":"","content-class":"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:n(()=>[o(c),s("p",null,[$,s("a",null,a(u.userStore.getRoleList),1)]),o(E,{"show-icon":"",class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316"}),s("div",k,[U,o(F,null,{default:n(()=>[o(p,{type:u.isSupper?"primary":"default",onClick:e[0]||(e[0]=f=>u.changeRole(u.RoleEnum.SUPER))},{default:n(()=>[l(a(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),o(p,{type:u.isTest?"primary":"default",onClick:e[1]||(e[1]=f=>u.changeRole(u.RoleEnum.TEST))},{default:n(()=>[l(a(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}var eu=B(h,[["render",b],["__scopeId","data-v-7f4fdaae"]]);export{eu as default};