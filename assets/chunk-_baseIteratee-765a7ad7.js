import{cG as h,cO as m,cp as g,co as M,cP as E,cI as O,cE as _}from"./entry-index-3c6d391e.js";import{g as l}from"./chunk-get-c96191fb.js";import{h as y}from"./chunk-hasIn-5a1c4138.js";import{i as C}from"./chunk-_setToString-e7ae8824.js";import{b as I}from"./chunk-_flatRest-a495e150.js";function G(n){return function(r){return r==null?void 0:r[n]}}var L=1,d=2;function D(n,r,i,t){var e=i.length,o=e,A=!t;if(n==null)return!o;for(n=Object(n);e--;){var f=i[e];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++e<o;){f=i[e];var u=f[0],s=n[u],p=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var a=new h;if(t)var c=t(s,p,u,n,r,a);if(!(c===void 0?m(p,s,L|d,t,a):c))return!1}}return!0}function P(n){return n===n&&!g(n)}function w(n){for(var r=M(n),i=r.length;i--;){var t=r[i],e=n[t];r[i]=[t,e,P(e)]}return r}function R(n,r){return function(i){return i==null?!1:i[n]===r&&(r!==void 0||n in Object(i))}}function F(n){var r=w(n);return r.length==1&&r[0][2]?R(r[0][0],r[0][1]):function(i){return i===n||D(i,n,r)}}var S=1,b=2;function x(n,r){return E(n)&&P(r)?R(O(n),r):function(i){var t=l(i,n);return t===void 0&&t===r?y(i,n):m(r,t,S|b)}}function K(n){return function(r){return I(r,n)}}function N(n){return E(n)?G(O(n)):K(n)}function B(n){return typeof n=="function"?n:n==null?C:typeof n=="object"?_(n)?x(n[0],n[1]):F(n):N(n)}export{B as b};