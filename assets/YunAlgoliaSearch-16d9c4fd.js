import{useAddonAlgolia as c}from"valaxy-addon-algolia";import{f as r,ak as l,k as p,i,o as d,c as m,l as f}from"./app-b0a134cd.js";const A=r({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a,{loaded:e,load:n,dispatchEvent:t}=c();return l(()=>o.open,()=>{o.open&&n(),e&&t()}),(u,_)=>{const s=p("AlgoliaSearchBox");return i(e)?(d(),m(s,{key:0,class:"hidden"})):f("v-if",!0)}}});export{A as default};