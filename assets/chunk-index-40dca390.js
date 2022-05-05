import{P as b,_ as F,y as X,e as P,f as d,cW as se,a as ue,H as ve,p as K,ci as D,c as _,h as ye,u as pe,w as ne,aW as be,q as me,R as ge,x as te,ad as he,O as xe,c6 as we,ab as Be,s as Q}from"./entry-index-3c6d391e.js";import{a as _e}from"./chunk-antInputDirective-fe4d28a4.js";import{u as Ae}from"./chunk-FormItemContext-405d105f.js";var le=function(){return{id:String,prefixCls:String,inputPrefixCls:String,defaultValue:b.oneOfType([b.string,b.number]),value:{type:[String,Number,Symbol],default:void 0},placeholder:{type:[String,Number]},autocomplete:String,type:{type:String,default:"text"},name:String,size:{type:String},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},addonBefore:b.any,addonAfter:b.any,prefix:b.any,suffix:b.any,autofocus:{type:Boolean,default:void 0},allowClear:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,valueModifiers:Object,hidden:Boolean}},Ce=le,$e=function(){return F(F({},X(le(),["prefix","addonBefore","addonAfter","suffix"])),{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object})};function ie(r,e,v,o,u){var y;return P(r,(y={},d(y,"".concat(r,"-sm"),v==="small"),d(y,"".concat(r,"-lg"),v==="large"),d(y,"".concat(r,"-disabled"),o),d(y,"".concat(r,"-rtl"),u==="rtl"),d(y,"".concat(r,"-borderless"),!e),y))}var E=function(e){return e!=null&&(Array.isArray(e)?se(e).length:!0)};function Se(r){return E(r.prefix)||E(r.suffix)||E(r.allowClear)}function ee(r){return E(r.addonBefore)||E(r.addonAfter)}var Ie=["text","input"],Fe=ue({name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:b.oneOf(ve("text","input")),value:b.any,defaultValue:b.any,allowClear:{type:Boolean,default:void 0},element:b.any,handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:b.any,prefix:b.any,addonBefore:b.any,addonAfter:b.any,readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean},setup:function(e,v){var o=v.slots,u=v.attrs,y=K(),z=function(n){var i;if(!((i=y.value)===null||i===void 0)&&i.contains(n.target)){var t=e.triggerFocus;t==null||t()}},p=function(n){var i,t=e.allowClear,l=e.value,c=e.disabled,x=e.readonly,m=e.handleReset,A=e.suffix,g=A===void 0?o.suffix:A;if(!t)return null;var C=!c&&!x&&l,h="".concat(n,"-clear-icon");return _(ye,{onClick:m,onMousedown:function(w){return w.preventDefault()},class:P((i={},d(i,"".concat(h,"-hidden"),!C),d(i,"".concat(h,"-has-suffix"),!!g),i),h),role:"button"},null)},Y=function(n){var i,t=e.suffix,l=t===void 0?(i=o.suffix)===null||i===void 0?void 0:i.call(o):t,c=e.allowClear;return l||c?_("span",{class:"".concat(n,"-suffix")},[p(n),l]):null},U=function(n,i){var t,l,c,x=e.focused,m=e.value,A=e.prefix,g=A===void 0?(l=o.prefix)===null||l===void 0?void 0:l.call(o):A,C=e.size,h=e.suffix,N=h===void 0?(c=o.suffix)===null||c===void 0?void 0:c.call(o):h,w=e.disabled,R=e.allowClear,M=e.direction,k=e.readonly,$=e.bordered,L=e.hidden,q=e.addonAfter,Z=q===void 0?o.addonAfter:q,s=e.addonBefore,a=s===void 0?o.addonBefore:s,f=Y(n);if(!Se({prefix:g,suffix:N,allowClear:R}))return D(i,{value:m});var I=g?_("span",{class:"".concat(n,"-prefix")},[g]):null,B=P("".concat(n,"-affix-wrapper"),(t={},d(t,"".concat(n,"-affix-wrapper-focused"),x),d(t,"".concat(n,"-affix-wrapper-disabled"),w),d(t,"".concat(n,"-affix-wrapper-sm"),C==="small"),d(t,"".concat(n,"-affix-wrapper-lg"),C==="large"),d(t,"".concat(n,"-affix-wrapper-input-with-clear-btn"),N&&R&&m),d(t,"".concat(n,"-affix-wrapper-rtl"),M==="rtl"),d(t,"".concat(n,"-affix-wrapper-readonly"),k),d(t,"".concat(n,"-affix-wrapper-borderless"),!$),d(t,"".concat(u.class),!ee({addonAfter:Z,addonBefore:a})&&u.class),t));return _("span",{ref:y,class:B,style:u.style,onMouseup:z,hidden:L},[I,D(i,{style:null,value:m,class:ie(n,$,C,w)}),f])},W=function(n,i){var t,l,c,x=e.addonBefore,m=x===void 0?(l=o.addonBefore)===null||l===void 0?void 0:l.call(o):x,A=e.addonAfter,g=A===void 0?(c=o.addonAfter)===null||c===void 0?void 0:c.call(o):A,C=e.size,h=e.direction,N=e.hidden;if(!ee({addonBefore:m,addonAfter:g}))return i;var w="".concat(n,"-group"),R="".concat(w,"-addon"),M=m?_("span",{class:R},[m]):null,k=g?_("span",{class:R},[g]):null,$=P("".concat(n,"-wrapper"),w,d({},"".concat(w,"-rtl"),h==="rtl")),L=P("".concat(n,"-group-wrapper"),(t={},d(t,"".concat(n,"-group-wrapper-sm"),C==="small"),d(t,"".concat(n,"-group-wrapper-lg"),C==="large"),d(t,"".concat(n,"-group-wrapper-rtl"),h==="rtl"),t),u.class);return _("span",{class:L,style:u.style,hidden:N},[_("span",{class:$},[M,D(i,{style:null}),k])])},j=function(n,i){var t,l=e.value,c=e.allowClear,x=e.direction,m=e.bordered,A=e.hidden,g=e.addonAfter,C=g===void 0?o.addonAfter:g,h=e.addonBefore,N=h===void 0?o.addonBefore:h;if(!c)return D(i,{value:l});var w=P("".concat(n,"-affix-wrapper"),"".concat(n,"-affix-wrapper-textarea-with-clear-btn"),(t={},d(t,"".concat(n,"-affix-wrapper-rtl"),x==="rtl"),d(t,"".concat(n,"-affix-wrapper-borderless"),!m),d(t,"".concat(u.class),!ee({addonAfter:C,addonBefore:N})&&u.class),t));return _("span",{class:w,style:u.style,hidden:A},[D(i,{style:null,value:l}),p(n)])};return function(){var S,n=e.prefixCls,i=e.inputType,t=e.element,l=t===void 0?(S=o.element)===null||S===void 0?void 0:S.call(o):t;return i===Ie[0]?j(n,l):W(n,U(n,l))}}});function re(r){return typeof r=="undefined"||r===null?"":String(r)}function oe(r,e,v,o){if(!!v){var u=e;if(e.type==="click"){Object.defineProperty(u,"target",{writable:!0}),Object.defineProperty(u,"currentTarget",{writable:!0});var y=r.cloneNode(!0);u.target=y,u.currentTarget=y,y.value="",v(u);return}if(o!==void 0){Object.defineProperty(u,"target",{writable:!0}),Object.defineProperty(u,"currentTarget",{writable:!0}),u.target=r,u.currentTarget=r,r.value=o,v(u);return}v(u)}}function Ne(r,e){if(!!r){r.focus(e);var v=e||{},o=v.cursor;if(o){var u=r.value.length;switch(o){case"start":r.setSelectionRange(0,0);break;case"end":r.setSelectionRange(u,u);break;default:r.setSelectionRange(0,u)}}}}var Te=ue({name:"AInput",inheritAttrs:!1,props:Ce(),setup:function(e,v){var o=v.slots,u=v.attrs,y=v.expose,z=v.emit,p=K(),Y=K(),U,W=Ae(),j=pe("input",e),S=j.direction,n=j.prefixCls,i=j.size,t=j.autocomplete,l=K(e.value===void 0?e.defaultValue:e.value),c=K(!1);ne(function(){return e.value},function(){l.value=e.value}),ne(function(){return e.disabled},function(){e.value!==void 0&&(l.value=e.value),e.disabled&&(c.value=!1)});var x=function(){U=setTimeout(function(){var a;((a=p.value)===null||a===void 0?void 0:a.getAttribute("type"))==="password"&&p.value.hasAttribute("value")&&p.value.removeAttribute("value")})},m=function(a){Ne(p.value,a)},A=function(){var a;(a=p.value)===null||a===void 0||a.blur()},g=function(a,f,I){var B;(B=p.value)===null||B===void 0||B.setSelectionRange(a,f,I)},C=function(){var a;(a=p.value)===null||a===void 0||a.select()};y({focus:m,blur:A,input:p,stateValue:l,setSelectionRange:g,select:C});var h=function(a){var f=e.onFocus;c.value=!0,f==null||f(a),Q(function(){x()})},N=function(a){var f=e.onBlur;c.value=!1,f==null||f(a),W.onFieldBlur(),Q(function(){x()})},w=function(a){z("update:value",a.target.value),z("change",a),z("input",a),W.onFieldChange()},R=be(),M=function(a,f){l.value!==a&&(e.value===void 0?l.value=a:Q(function(){p.value.value!==l.value&&R.update()}),Q(function(){f&&f()}))},k=function(a){oe(p.value,a,w),M("",function(){m()})},$=function(a){var f=a.target,I=f.value,B=f.composing;if(!((a.isComposing||B)&&e.lazy||l.value===I)){var T=a.target.value;oe(p.value,a,w),M(T,function(){x()})}},L=function(a){a.keyCode===13&&z("pressEnter",a),z("keydown",a)};me(function(){x()}),ge(function(){clearTimeout(U)});var q=function(){var a,f=e.addonBefore,I=f===void 0?o.addonBefore:f,B=e.addonAfter,T=B===void 0?o.addonAfter:B,V=e.disabled,G=e.bordered,H=G===void 0?!0:G,O=e.valueModifiers,de=O===void 0?{}:O,fe=e.htmlSize,ae=X(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers"]),J=F(F(F({},ae),u),{autocomplete:t.value,onChange:$,onInput:$,onFocus:h,onBlur:N,onKeydown:L,class:P(ie(n.value,H,i.value,V,S.value),d({},u.class,u.class&&!I&&!T)),ref:p,key:"ant-input",size:fe,id:(a=ae.id)!==null&&a!==void 0?a:W.id.value});de.lazy&&delete J.onInput,J.autofocus||delete J.autofocus;var ce=_("input",X(J,["size"]),null);return he(ce,[[_e]])},Z=function(){var a,f=l.value,I=e.maxlength,B=e.suffix,T=B===void 0?(a=o.suffix)===null||a===void 0?void 0:a.call(o):B,V=e.showCount,G=Number(I)>0;if(T||V){var H=xe(re(f)).length,O=null;return we(V)==="object"?O=V.formatter({count:H,maxlength:I}):O="".concat(H).concat(G?" / ".concat(I):""),_(Be,null,[!!V&&_("span",{class:P("".concat(n.value,"-show-count-suffix"),d({},"".concat(n.value,"-show-count-has-suffix"),!!T))},[O]),T])}return null};return function(){var s=F(F(F({},u),e),{prefixCls:n.value,inputType:"input",value:re(l.value),handleReset:k,focused:c.value&&!e.disabled});return _(Fe,te(te({},X(s,["element","valueModifiers","suffix","showCount"])),{},{ref:Y}),F(F({},o),{element:q,suffix:Z}))}}});export{Fe as C,Te as I,Ne as a,re as f,Ce as i,oe as r,$e as t};