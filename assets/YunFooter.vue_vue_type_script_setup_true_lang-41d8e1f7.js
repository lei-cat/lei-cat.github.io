import{f as w,j as V,s as v,N as D,o as i,g as c,r as T,a as o,t as s,i as e,ad as L,U as N,q as F,S as b,ae as g,l as d,b as l,F as H,m as M,af as S,c as B,w as x,d as Y}from"./app-b0a134cd.js";const I={class:"vc-site-live-time"},P={"mx-1":""},j={"mx-1":""},z={"mx-1":""},q={"mx-1":""},E=w({__name:"VCLiveTime",props:{startTime:null},setup(y){const m=y,{t:a}=V(),r=v(0),t=v(0),u=v(0),h=v(0),k=()=>{const n=new Date(m.startTime),_=new Date().getTime()-n.getTime(),f=60*1e3,p=60*f,C=24*p;r.value=Math.floor(_/C),t.value=Math.floor(_%C/60/60/1e3),u.value=Math.floor(_%p/60/1e3),h.value=Math.floor(_%f/1e3)};return D(()=>{setInterval(k,1e3)}),(n,$)=>(i(),c("div",I,[T(n.$slots,"live-time-before"),o("span",P,s(e(a)("time.day",r.value)),1),o("span",j,s(e(a)("time.hour",t.value)),1),o("span",z,s(e(a)("time.minute",u.value)),1),o("span",q,s(e(a)("time.second",h.value)),1),T(n.$slots,"live-time-after")]))}}),U={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},A={key:0,class:"beian",m:"y-2"},G={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},J={class:"copyright flex justify-center items-center gap-2",p:"1"},K=["href","title"],O={key:1,class:"powered",m:"2"},Q=["innerHTML"],R=["href","title"],W=w({__name:"YunFooter",setup(y){const{t:m}=V(),a=L(),r=N(),t=F(),u=new Date().getFullYear(),h=b(()=>u===t.value.footer.since),k=b(()=>m("footer.powered",[`<a href="${g.repository}" target="_blank" rel="noopener">Valaxy</a> v${g.version}`])),n=b(()=>t.value.footer.icon||{url:g.repository,name:"i-ri-cloud-line",title:g.name});return($,_)=>{var f,p;return i(),c("footer",U,[(f=e(t).footer.beian)!=null&&f.enable&&e(t).footer.beian.icp?(i(),c("div",A,[o("a",G,s(e(t).footer.beian.icp),1)])):d("v-if",!0),o("div",J,[o("span",null,[l(" © "),e(h)?d("v-if",!0):(i(),c(H,{key:0},[l(s(e(t).footer.since)+" - ",1)],64)),l(" "+s(e(u)),1)]),(p=e(t).footer.icon)!=null&&p.enable?(i(),c("a",{key:0,class:M(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:e(n).url,target:"_blank",title:e(n).title},[o("div",{class:M(e(n).name)},null,2)],10,K)):d("v-if",!0),o("span",null,s(e(r).author.name),1)]),e(t).footer.powered?(i(),c("div",O,[o("span",{innerHTML:e(k)},null,8,Q),l(" | "),o("span",null,[l(s(e(m)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(S(e(a).theme)),9,R),l(" v"+s(e(t).pkg.version),1)])])):d("v-if",!0),T($.$slots,"default")])}}}),X=o("span",null,"春夏秋冬，小屋已通电",-1),Z=o("span",null,"(●'◡'●)",-1),te=w({__name:"YunFooter",setup(y){return(m,a)=>{const r=E;return i(),B(W,null,{default:x(()=>[d("<NetdunLogo />"),Y(r,{"start-time":"2023-04-01"},{"live-time-before":x(()=>[X]),"live-time-after":x(()=>[Z]),_:1})]),_:1})}}});export{te as _};
