import{f as m,Y as g,j as h,C as f,W as y,a3 as v,a4 as C,S as k,G as x,H as b,c as P,w as c,a2 as w,o as B,d as s,i as t,a as o,t as I,I as R,k as S}from"./app-b0a134cd.js";import{_ as V}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-5b8be7c1.js";const Y={text:"center",class:"yun-text-light",p:"2"},A={class:"page-action",text:"center"},D=["title"],E=o("div",{"i-ri-arrow-go-back-line":""},null,-1),G=[E],W=m({__name:"gallery",setup(H){const l=g(),{t:n}=h(),e=f(),r=y(e);v([C({"@type":"CollectionPage"})]);const a=k(()=>e.value.photos||[]),_=x().value.addons["valaxy-addon-lightgallery"]?b(()=>R(()=>import("./YunGallery-ba43125a.js"),["assets/YunGallery-ba43125a.js","assets/app-b0a134cd.js","assets/index-6b165f9f.css"])):()=>null;return(N,i)=>{const u=V,p=S("router-view"),d=w;return B(),P(d,null,{"main-header":c(()=>[s(u,{title:t(r)||t(n)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color},null,8,["title","icon","color"])]),"main-content":c(()=>[o("div",Y,I(t(n)("counter.photos",t(a).length)),1),o("div",A,[o("a",{class:"yun-icon-btn",title:t(n)("accessibility.back"),onClick:i[0]||(i[0]=()=>t(l).back())},G,8,D)]),s(t(_),{photos:t(a)},null,8,["photos"]),s(p)]),_:1})}}});export{W as default};