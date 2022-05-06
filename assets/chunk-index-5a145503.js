import{p as k,c8 as Ae,R as et,a as ce,b as X,c as f,K as ne,e as ge,f as D,aF as De,_ as J,A as Wt,c9 as B,q as Fe,w as he,ca as Dt,bm as Ft,cb as jt,cc as zt,P as je,L as Ht,I as Vt,bJ as Gt,cd as $t,ce as qt,cf as Be,cg as ft,x as ue,O as bt,ch as Ut,D as Pt,c4 as Yt,ci as Xt,cj as Jt,y as Zt,J as Ze,u as Qt,ck as yt,N as ea,c6 as ta}from"./entry-index-f8c73ed4.js";import{u as G,i as aa}from"./chunk-useState-86a27c50.js";import{u as na}from"./chunk-useRefs-da5133cc.js";import{b as ia,f as ra}from"./chunk-_flatRest-9949ca52.js";import{h as la}from"./chunk-hasIn-ddcfe20e.js";function oa(r){var e=k(),t=k(!1);function n(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];t.value||(Ae.cancel(e.value),e.value=Ae(function(){r.apply(void 0,i)}))}return et(function(){t.value=!0,Ae.cancel(e.value)}),n}function ua(r){var e=k([]),t=k(typeof r=="function"?r():r),n=oa(function(){var i=t.value;e.value.forEach(function(l){i=l(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),n()}return[t,a]}var ca=ce({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var n=t.expose,a=t.attrs,i=k();function l(v){var s;!((s=e.tab)===null||s===void 0)&&s.disabled||e.onClick(v)}n({domRef:i});function u(v){var s;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(s=e.tab)===null||s===void 0?void 0:s.key,event:v})}var c=X(function(){var v;return e.editable&&e.closable!==!1&&!(!((v=e.tab)===null||v===void 0)&&v.disabled)});return function(){var v,s,b=e.prefixCls,g=e.id,O=e.active,P=e.tab,F=P.key,I=P.tab,z=P.disabled,x=P.closeIcon,d=e.renderWrapper,A=e.removeAriaLabel,H=e.editable,L=e.onFocus,E="".concat(b,"-tab"),M=f("div",{key:F,ref:i,class:ge(E,(v={},D(v,"".concat(E,"-with-remove"),c.value),D(v,"".concat(E,"-active"),O),D(v,"".concat(E,"-disabled"),z),v)),style:a.style,onClick:l},[f("div",{role:"tab","aria-selected":O,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(E,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":z,tabindex:z?null:0,onClick:function(K){K.stopPropagation(),l(K)},onKeydown:function(K){[ne.SPACE,ne.ENTER].includes(K.which)&&(K.preventDefault(),l(K))},onFocus:L},[typeof I=="function"?I():I]),c.value&&f("button",{type:"button","aria-label":A||"remove",tabindex:0,class:"".concat(E,"-remove"),onClick:function(K){K.stopPropagation(),u(K)}},[(x==null?void 0:x())||((s=H.removeIcon)===null||s===void 0?void 0:s.call(H))||"\xD7"])]);return d?d(M):M}}}),mt={width:0,height:0,left:0,top:0};function va(r,e){var t=k(new Map);return De(function(){for(var n,a,i=new Map,l=r.value,u=e.value.get((n=l[0])===null||n===void 0?void 0:n.key)||mt,c=u.left+u.width,v=0;v<l.length;v+=1){var s=l[v].key,b=e.value.get(s);b||(b=e.value.get((a=l[v-1])===null||a===void 0?void 0:a.key)||mt);var g=i.get(s)||J({},b);g.right=c-g.left-g.width,i.set(s,g)}t.value=new Map(i)}),t}var kt=ce({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var n=t.expose,a=t.attrs,i=k();return n({domRef:i}),function(){var l=e.prefixCls,u=e.editable,c=e.locale;return!u||u.showAdd===!1?null:f("button",{ref:i,type:"button",class:"".concat(l,"-nav-add"),style:a.style,"aria-label":(c==null?void 0:c.addAriaLabel)||"Add tab",onClick:function(s){u.onEdit("add",{event:s})}},[u.addIcon?u.addIcon():"+"])}}}),sa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},da=sa;function ht(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){fa(r,a,t[a])})}return r}function fa(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var tt=function(e,t){var n=ht({},e,t.attrs);return f(Wt,ht({},n,{icon:da}),null)};tt.displayName="PlusOutlined";tt.inheritAttrs=!1;var ba=tt,ya={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:je.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},ma=ce({name:"OperationNode",inheritAttrs:!1,props:ya,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var n=t.attrs,a=t.slots,i=G(!1),l=B(i,2),u=l[0],c=l[1],v=G(null),s=B(v,2),b=s[0],g=s[1],O=function(d){for(var A=e.tabs.filter(function($){return!$.disabled}),H=A.findIndex(function($){return $.key===b.value})||0,L=A.length,E=0;E<L;E+=1){H=(H+d+L)%L;var M=A[H];if(!M.disabled){g(M.key);return}}},P=function(d){var A=d.which;if(!u.value){[ne.DOWN,ne.SPACE,ne.ENTER].includes(A)&&(c(!0),d.preventDefault());return}switch(A){case ne.UP:O(-1),d.preventDefault();break;case ne.DOWN:O(1),d.preventDefault();break;case ne.ESC:c(!1);break;case ne.SPACE:case ne.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},F=X(function(){return"".concat(e.id,"-more-popup")}),I=X(function(){return b.value!==null?"".concat(F.value,"-").concat(b.value):null}),z=function(d,A){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:A,event:d})};return Fe(function(){he(b,function(){var x=document.getElementById(I.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),he(u,function(){u.value||g(null)}),function(){var x,d=e.prefixCls,A=e.id,H=e.tabs,L=e.locale,E=e.mobile,M=e.moreIcon,$=M===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||f(Dt,null,null):M,K=e.moreTransitionName,j=e.editable,ve=e.tabBarGutter,S=e.rtl,o=e.onTabClick,y="".concat(d,"-dropdown"),T=L==null?void 0:L.dropdownAriaLabel,W=D({},S?"marginRight":"marginLeft",ve);H.length||(W.visibility="hidden",W.order=1);var R=ge(D({},"".concat(y,"-rtl"),S)),_=E?null:f(zt,{prefixCls:y,trigger:["hover"],visible:u.value,transitionName:K,onVisibleChange:c,overlayClassName:R,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(Ft,{onClick:function(w){var q=w.key,ie=w.domEvent;o(q,ie),c(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":I.value,selectedKeys:[b.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(w){var q,ie,Te=j&&w.closable!==!1&&!w.disabled;return f(jt,{key:w.key,id:"".concat(F.value,"-").concat(w.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),Te&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(se){se.stopPropagation(),z(se,w.key)}},[((q=w.closeIcon)===null||q===void 0?void 0:q.call(w))||((ie=j.removeIcon)===null||ie===void 0?void 0:ie.call(j))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:W,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(A,"-more"),"aria-expanded":u.value,onKeydown:P},[$])}});return f("div",{class:ge("".concat(d,"-nav-operations"),n.class),style:n.style},[_,f(kt,{prefixCls:d,locale:L,editable:j},null)])}}}),It=Symbol("tabsContextKey"),Et=function(e){Ht(It,e)},_t=function(){return Vt(It,{tabs:k([]),prefixCls:k()})};ce({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var n=t.slots;return Et(Gt(e)),function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}});var ha=.1,gt=.01,Ke=20,St=Math.pow(.995,Ke);function ga(r,e){var t=G(),n=B(t,2),a=n[0],i=n[1],l=G(0),u=B(l,2),c=u[0],v=u[1],s=G(0),b=B(s,2),g=b[0],O=b[1],P=G(),F=B(P,2),I=F[0],z=F[1],x=k();function d(S){var o=S.touches[0],y=o.screenX,T=o.screenY;i({x:y,y:T}),clearInterval(x.value)}function A(S){if(!!a.value){S.preventDefault();var o=S.touches[0],y=o.screenX,T=o.screenY,W=y-a.value.x,R=T-a.value.y;e(W,R),i({x:y,y:T});var _=Date.now();O(_-c.value),v(_),z({x:W,y:R})}}function H(){if(!!a.value){var S=I.value;if(i(null),z(null),S){var o=S.x/g.value,y=S.y/g.value,T=Math.abs(o),W=Math.abs(y);if(Math.max(T,W)<ha)return;var R=o,_=y;x.value=setInterval(function(){if(Math.abs(R)<gt&&Math.abs(_)<gt){clearInterval(x.value);return}R*=St,_*=St,e(R*Ke,_*Ke)},Ke)}}}var L=k();function E(S){var o=S.deltaX,y=S.deltaY,T=0,W=Math.abs(o),R=Math.abs(y);W===R?T=L.value==="x"?o:y:W>R?(T=o,L.value="x"):(T=y,L.value="y"),e(-T,-T)&&S.preventDefault()}var M=k({onTouchStart:d,onTouchMove:A,onTouchEnd:H,onWheel:E});function $(S){M.value.onTouchStart(S)}function K(S){M.value.onTouchMove(S)}function j(S){M.value.onTouchEnd(S)}function ve(S){M.value.onWheel(S)}Fe(function(){var S,o;document.addEventListener("touchmove",K,{passive:!1}),document.addEventListener("touchend",j,{passive:!1}),(S=r.value)===null||S===void 0||S.addEventListener("touchstart",$,{passive:!1}),(o=r.value)===null||o===void 0||o.addEventListener("wheel",ve,{passive:!1})}),et(function(){document.removeEventListener("touchmove",K),document.removeEventListener("touchend",j)})}function pt(r,e){var t=k(r);function n(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,n]}function Sa(r,e,t){for(var n=-1,a=e.length,i={};++n<a;){var l=e[n],u=ia(r,l);t(u,l)&&$t(i,qt(l,r),u)}return i}function pa(r,e){return Sa(r,e,function(t,n){return la(r,n)})}var xa=ra(function(r,e){return r==null?{}:pa(r,e)}),Bt=xa,xt={width:0,height:0,left:0,top:0,right:0},Ta=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:je.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},Tt=ce({name:"TabNavList",inheritAttrs:!1,props:Ta(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var n=t.attrs,a=t.slots,i=_t(),l=i.tabs,u=i.prefixCls,c=k(),v=k(),s=k(),b=k(),g=na(),O=B(g,2),P=O[0],F=O[1],I=X(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=pt(0,function(h,p){I.value&&e.onTabScroll&&e.onTabScroll({direction:h>p?"left":"right"})}),x=B(z,2),d=x[0],A=x[1],H=pt(0,function(h,p){!I.value&&e.onTabScroll&&e.onTabScroll({direction:h>p?"top":"bottom"})}),L=B(H,2),E=L[0],M=L[1],$=G(0),K=B($,2),j=K[0],ve=K[1],S=G(0),o=B(S,2),y=o[0],T=o[1],W=G(null),R=B(W,2),_=R[0],xe=R[1],Se=G(null),w=B(Se,2),q=w[0],ie=w[1],Te=G(0),pe=B(Te,2),Ce=pe[0],se=pe[1],we=G(0),Z=B(we,2),ze=Z[0],Re=Z[1],Ne=ua(new Map),Oe=B(Ne,2),He=Oe[0],Pe=Oe[1],Le=va(l,He),wt=X(function(){return"".concat(u.value,"-nav-operations-hidden")}),ke=k(0),Ie=k(0);De(function(){I.value?e.rtl?(ke.value=0,Ie.value=Math.max(0,j.value-_.value)):(ke.value=Math.min(0,_.value-j.value),Ie.value=0):(ke.value=Math.min(0,q.value-y.value),Ie.value=0)});var Ve=function(p){return p<ke.value?ke.value:p>Ie.value?Ie.value:p},at=k(),Rt=G(),nt=B(Rt,2),Ge=nt[0],it=nt[1],$e=function(){it(Date.now())},qe=function(){clearTimeout(at.value)},rt=function(p,m){p(function(N){var C=Ve(N+m);return C})};ga(c,function(h,p){if(I.value){if(_.value>=j.value)return!1;rt(A,h)}else{if(q.value>=y.value)return!1;rt(M,p)}return qe(),$e(),!0}),he(Ge,function(){qe(),Ge.value&&(at.value=setTimeout(function(){it(0)},100))});var lt=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=Le.value.get(p)||{width:0,height:0,left:0,right:0,top:0};if(I.value){var N=d.value;e.rtl?m.right<d.value?N=m.right:m.right+m.width>d.value+_.value&&(N=m.right+m.width-_.value):m.left<-d.value?N=-m.left:m.left+m.width>-d.value+_.value&&(N=-(m.left+m.width-_.value)),M(0),A(Ve(N))}else{var C=E.value;m.top<-E.value?C=-m.top:m.top+m.height>-E.value+q.value&&(C=-(m.top+m.height-q.value)),A(0),M(Ve(C))}},Ue=k(0),Ye=k(0);De(function(){var h,p,m,N,C,U,Y,be=Le.value;["top","bottom"].includes(e.tabPosition)?(p="width",C=_.value,U=j.value,Y=Ce.value,m=e.rtl?"right":"left",N=Math.abs(d.value)):(p="height",C=q.value,U=j.value,Y=ze.value,m="top",N=-E.value);var Q=C;U+Y>C&&U<C&&(Q=C-Y);var re=l.value;if(!re.length){var le;return le=[0,0],Ue.value=le[0],Ye.value=le[1],le}for(var ye=re.length,V=ye,te=0;te<ye;te+=1){var ae=be.get(re[te].key)||xt;if(ae[m]+ae[p]>N+Q){V=te-1;break}}for(var oe=0,ee=ye-1;ee>=0;ee-=1){var me=be.get(re[ee].key)||xt;if(me[m]<N){oe=ee+1;break}}return h=[oe,V],Ue.value=h[0],Ye.value=h[1],h});var Xe=function(){var p,m,N,C,U,Y=((p=c.value)===null||p===void 0?void 0:p.offsetWidth)||0,be=((m=c.value)===null||m===void 0?void 0:m.offsetHeight)||0,Q=((N=b.value)===null||N===void 0?void 0:N.$el)||{},re=Q.offsetWidth||0,le=Q.offsetHeight||0;xe(Y),ie(be),se(re),Re(le);var ye=(((C=v.value)===null||C===void 0?void 0:C.offsetWidth)||0)-re,V=(((U=v.value)===null||U===void 0?void 0:U.offsetHeight)||0)-le;ve(ye),T(V),Pe(function(){var te=new Map;return l.value.forEach(function(ae){var oe=ae.key,ee,me=F.value.get(oe),fe=((ee=me)===null||ee===void 0?void 0:ee.$el)||me;fe&&te.set(oe,{width:fe.offsetWidth,height:fe.offsetHeight,left:fe.offsetLeft,top:fe.offsetTop})}),te})},ot=X(function(){return[].concat(bt(l.value.slice(0,Ue.value)),bt(l.value.slice(Ye.value+1)))}),Nt=G(),ut=B(Nt,2),Ot=ut[0],Lt=ut[1],de=X(function(){return Le.value.get(e.activeKey)}),ct=k(),vt=function(){Ae.cancel(ct.value)};he([de,I,function(){return e.rtl}],function(){var h={};de.value&&(I.value?(e.rtl?h.right=Be(de.value.right):h.left=Be(de.value.left),h.width=Be(de.value.width)):(h.top=Be(de.value.top),h.height=Be(de.value.height))),vt(),ct.value=Ae(function(){Lt(h)})}),he([function(){return e.activeKey},de,Le,I],function(){lt()},{flush:"post"}),he([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return l.value}],function(){Xe()},{flush:"post"});var Je=function(p){var m=p.position,N=p.prefixCls,C=p.extra;if(!C)return null;var U=C==null?void 0:C({position:m});return U?f("div",{class:"".concat(N,"-extra-content")},[U]):null};return et(function(){qe(),vt()}),function(){var h,p=e.id,m=e.animated,N=e.activeKey,C=e.rtl,U=e.editable,Y=e.locale,be=e.tabPosition,Q=e.tabBarGutter,re=e.onTabClick,le=n.class,ye=n.style,V=u.value,te=!!ot.value.length,ae="".concat(V,"-nav-wrap"),oe,ee,me,fe;I.value?C?(ee=d.value>0,oe=d.value+_.value<j.value):(oe=d.value<0,ee=-d.value+_.value<j.value):(me=E.value<0,fe=-E.value+q.value<y.value);var Me={};be==="top"||be==="bottom"?Me[C?"marginRight":"marginLeft"]=typeof Q=="number"?"".concat(Q,"px"):Q:Me.marginTop=typeof Q=="number"?"".concat(Q,"px"):Q;var st=l.value.map(function(Ee,dt){var _e=Ee.key;return f(ca,{id:p,prefixCls:V,key:_e,tab:Ee,style:dt===0?void 0:Me,closable:Ee.closable,editable:U,active:_e===N,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:P(_e),onClick:function(Kt){re(_e,Kt)},onFocus:function(){lt(_e),$e(),c.value&&(C||(c.value.scrollLeft=0),c.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ge("".concat(V,"-nav"),le),style:ye,onKeydown:function(){$e()}},[f(Je,{position:"left",prefixCls:V,extra:a.leftExtra},null),f(ft,{onResize:Xe},{default:function(){return[f("div",{class:ge(ae,(h={},D(h,"".concat(ae,"-ping-left"),oe),D(h,"".concat(ae,"-ping-right"),ee),D(h,"".concat(ae,"-ping-top"),me),D(h,"".concat(ae,"-ping-bottom"),fe),h)),ref:c},[f(ft,{onResize:Xe},{default:function(){return[f("div",{ref:v,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(E.value,"px)"),transition:Ge.value?"none":void 0}},[st,f(kt,{ref:b,prefixCls:V,locale:Y,editable:U,style:J(J({},st.length===0?void 0:Me),{visibility:te?"hidden":null})},null),f("div",{class:ge("".concat(V,"-ink-bar"),D({},"".concat(V,"-ink-bar-animated"),m.inkBar)),style:Ot.value},null)])]}})])]}}),f(ma,ue(ue({},e),{},{removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:s,prefixCls:V,tabs:ot.value,class:!te&&wt.value}),Bt(a,["moreIcon"])),f(Je,{position:"right",prefixCls:V,extra:a.rightExtra},null),f(Je,{position:"right",prefixCls:V,extra:a.tabBarExtraContent},null)])}}}),Ca=ce({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=_t(),n=t.tabs,a=t.prefixCls;return function(){var i=e.id,l=e.activeKey,u=e.animated,c=e.tabPosition,v=e.rtl,s=e.destroyInactiveTabPane,b=u.tabPane,g=a.value,O=n.value.findIndex(function(P){return P.key===l});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(c),D({},"".concat(g,"-content-animated"),b)],style:O&&b?D({},v?"marginRight":"marginLeft","-".concat(O,"00%")):null},[n.value.map(function(P){return Ut(P.node,{key:P.key,prefixCls:g,tabKey:P.key,id:i,animated:b,active:P.key===l,destroyInactiveTabPane:s})})])])}}}),Ct=0,At=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:je.any}};function Pa(r){return r.map(function(e){if(Xt(e)){for(var t=J({},e.props||{}),n=0,a=Object.entries(t);n<a.length;n++){var i=B(a[n],2),l=i[0],u=i[1];delete t[l],t[Jt(l)]=u}var c=e.children||{},v=e.key!==void 0?e.key:void 0,s=t.tab,b=s===void 0?c.tab:s,g=t.disabled,O=t.forceRender,P=t.closable,F=t.animated,I=t.active,z=t.destroyInactiveTabPane;return J(J({key:v},t),{node:e,closeIcon:c.closeIcon,tab:b,disabled:g===""||g,forceRender:O===""||O,closable:P===""||P,animated:F===""||F,active:I===""||I,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var ka=ce({name:"InternalTabs",inheritAttrs:!1,props:J(J({},Pt(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var n=t.attrs,a=t.slots;Ze(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ze(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ze(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=Qt("tabs",e),l=i.prefixCls,u=i.direction,c=i.size,v=i.rootPrefixCls,s=X(function(){return u.value==="rtl"}),b=X(function(){var o=e.animated,y=e.tabPosition;return o===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:o===!0?{inkBar:!0,tabPane:!0}:J({inkBar:!0,tabPane:!1},ta(o)==="object"?o:{})}),g=G(!1),O=B(g,2),P=O[0],F=O[1];Fe(function(){F(aa())});var I=yt(function(){var o;return(o=e.tabs[0])===null||o===void 0?void 0:o.key},{value:X(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=B(I,2),x=z[0],d=z[1],A=G(function(){return e.tabs.findIndex(function(o){return o.key===x.value})}),H=B(A,2),L=H[0],E=H[1];De(function(){var o,y=e.tabs.findIndex(function(T){return T.key===x.value});y===-1&&(y=Math.max(0,Math.min(L.value,e.tabs.length-1)),d((o=e.tabs[y])===null||o===void 0?void 0:o.key)),E(y)});var M=yt(null,{value:X(function(){return e.id})}),$=B(M,2),K=$[0],j=$[1],ve=X(function(){return P.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Fe(function(){e.id||(j("rc-tabs-".concat(Ct)),Ct+=1)});var S=function(y,T){var W,R;(W=e.onTabClick)===null||W===void 0||W.call(e,y,T);var _=y!==x.value;d(y),_&&((R=e.onChange)===null||R===void 0||R.call(e,y))};return Et({tabs:X(function(){return e.tabs}),prefixCls:l}),function(){var o,y=e.id,T=e.type,W=e.tabBarGutter,R=e.tabBarStyle,_=e.locale,xe=e.destroyInactiveTabPane,Se=e.renderTabBar,w=Se===void 0?a.renderTabBar:Se,q=e.onTabScroll,ie=e.hideAdd,Te=e.centered,pe={id:K.value,activeKey:x.value,animated:b.value,tabPosition:ve.value,rtl:s.value,mobile:P.value},Ce;T==="editable-card"&&(Ce={onEdit:function(Re,Ne){var Oe=Ne.key,He=Ne.event,Pe;(Pe=e.onEdit)===null||Pe===void 0||Pe.call(e,Re==="add"?He:Oe,Re)},removeIcon:function(){return f(ea,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(ba,null,null)},showAdd:ie!==!0});var se,we=J(J({},pe),{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Ce,locale:_,tabBarGutter:W,onTabClick:S,onTabScroll:q,style:R});w?se=w(J(J({},we),{DefaultTabBar:Tt})):se=f(Tt,we,Bt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Z=l.value;return f("div",ue(ue({},n),{},{id:y,class:ge(Z,"".concat(Z,"-").concat(ve.value),(o={},D(o,"".concat(Z,"-").concat(c.value),c.value),D(o,"".concat(Z,"-card"),["card","editable-card"].includes(T)),D(o,"".concat(Z,"-editable-card"),T==="editable-card"),D(o,"".concat(Z,"-centered"),Te),D(o,"".concat(Z,"-mobile"),P.value),D(o,"".concat(Z,"-editable"),T==="editable-card"),D(o,"".concat(Z,"-rtl"),s.value),o),n.class)}),[se,f(Ca,ue(ue({destroyInactiveTabPane:xe},pe),{},{animated:b.value}),null)])}}}),We=ce({name:"ATabs",inheritAttrs:!1,props:Pt(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var n=t.attrs,a=t.slots,i=t.emit,l=function(c){i("update:activeKey",c),i("change",c)};return function(){var u,c=Pa(Yt((u=a.default)===null||u===void 0?void 0:u.call(a)));return f(ka,ue(ue(ue({},Zt(e,["onUpdate:activeKey"])),n),{},{onChange:l,tabs:c}),a)}}}),Ia=function(){return{tab:je.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}},Qe=ce({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Ia(),slots:["closeIcon","tab"],setup:function(e,t){var n=t.attrs,a=t.slots,i=k(e.forceRender);he([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});var l=X(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var u,c=e.prefixCls,v=e.forceRender,s=e.id,b=e.active,g=e.tabKey;return f("div",{id:s&&"".concat(s,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(g),"aria-hidden":!b,style:[l.value,n.style],class:["".concat(c,"-tabpane"),b&&"".concat(c,"-tabpane-active"),n.class]},[(b||i.value||v)&&((u=a.default)===null||u===void 0?void 0:u.call(a))])}}});We.TabPane=Qe;We.install=function(r){return r.component(We.name,We),r.component(Qe.name,Qe),r};export{We as T};