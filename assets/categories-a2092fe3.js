import{f as B,Y as E,s as b,j as Y,a5 as K,N as L,k as z,o as n,g as i,a as m,t as y,i as t,F as v,h as N,a6 as U,c as C,w as d,l as w,d as p,a0 as q,C as F,Z as R,S,a7 as T,W as V,a3 as W,a4 as D,a2 as H}from"./app-b0a134cd.js";import{_ as M}from"./YunCard.vue_vue_type_style_index_0_lang-de4154c2.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-bb928207.js";import{_ as Z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-5b8be7c1.js";const A={class:"category-list-item inline-flex items-center cursor-pointer"},G={key:0,"i-ri-folder-add-line":""},J={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},Q={key:0},X=m("div",{"i-ri-file-text-line":""},null,-1),I={m:"l-1",font:"serif black"},ee=B({__name:"YunCategory",props:{parentKey:null,category:null,level:null,collapsable:{type:Boolean,default:!0}},setup(o){const u=E(),c=b(!0),{t:_}=Y(),{locale:g}=Y();function a(l){const e=g.value==="zh-CN"?"zh":g.value;return l[`title_${e}`]?l[`title_${e}`]:l.title}const r=b(),{show:k}=K(r);function h(l){u.push({query:{category:l}}),k()}return L(()=>{const l=document.querySelector(".post-collapse-container");l&&(r.value=l)}),(l,e)=>{const f=z("YunCategory",!0),x=z("router-link");return n(),i(v,null,[m("li",A,[m("span",{class:"folder-action inline-flex",onClick:e[0]||(e[0]=s=>c.value=!c.value)},[c.value?(n(),i("div",G)):(n(),i("div",J))]),m("span",{class:"category-name",m:"l-1",onClick:e[1]||(e[1]=s=>h(o.parentKey))},y(o.category.name==="Uncategorized"?t(_)("category.uncategorized"):o.category.name)+" ["+y(o.category.total)+"] ",1)]),c.value?w("v-if",!0):(n(),i("ul",Q,[(n(!0),i(v,null,N(o.category.children,(s,$)=>(n(),i("li",{key:$,class:"post-list-item",m:"l-4"},[t(U)(s)?(n(),C(f,{key:0,"parent-key":o.parentKey?`${o.parentKey}/${s.name}`:s.name,category:s},null,8,["parent-key","category"])):(n(),i(v,{key:1},[s.title?(n(),C(x,{key:0,to:s.path||"",class:"inline-flex items-center"},{default:d(()=>[X,m("span",I,y(a(s)),1)]),_:2},1032,["to"])):w("v-if",!0)],64))]))),128))]))],64)}}}),te=B({__name:"YunCategories",props:{categories:null,level:{default:0},collapsable:{type:Boolean,default:!0}},setup(o){const c=b(o.collapsable);return(_,g)=>{const a=ee;return n(!0),i(v,null,N(o.categories,r=>(n(),i("ul",{key:r.name,class:"category-list",m:"l-4"},[p(a,{"parent-key":r.name,category:r,level:o.level+1,collapsable:c.value},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const ne={text:"center",class:"yun-text-light",p:"2"},re=B({__name:"categories",setup(o){const{t:u}=Y(),c=q(),_=F(),g=R(),a=S(()=>g.query.category||""),r=T(),k=S(()=>c.postList.filter(e=>e.categories&&a.value!=="Uncategorized"?typeof e.categories=="string"?e.categories===a.value:e.categories.join("/").startsWith(a.value)&&e.categories[0]===a.value.split("/")[0]:!e.categories&&a.value==="Uncategorized"?e.categories===void 0:!1)),h=V(_);return W([D({"@type":"CollectionPage"})]),(l,e)=>{const f=Z,x=te,s=z("router-view"),$=O,P=M,j=H;return n(),C(j,null,{"main-header":d(()=>[p(f,{title:t(h)||t(u)("menu.categories"),icon:t(_).icon||"i-ri-folder-2-line",color:t(_).color},null,8,["title","icon","color"])]),"main-content":d(()=>[m("div",ne,y(t(u)("counter.categories",t(r).children.length)),1),p(x,{categories:t(r).children},null,8,["categories"]),p(s)]),"main-nav-before":d(()=>[t(a)?(n(),C(P,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:d(()=>[p(f,{title:t(a)==="Uncategorized"?t(u)("category.uncategorized"):t(a).split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),p($,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(k)},null,8,["posts"])]),_:1})):w("v-if",!0)]),_:1})}}});export{re as default};
