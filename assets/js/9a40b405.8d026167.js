"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[9505],{4860:(e,t,n)=>{n.d(t,{j:()=>s,Z:()=>u});var l=n(7294);const r="container_B1kA",i="timeline_Ypeg",a="event_Xi2w",c="active_ZY81";n(2263);var m=n(6010);const s=e=>{let{time:t,active:n,children:r}=e;return l.createElement("li",{className:(0,m.Z)(a,n?c:""),"data-date":t},r)},u=e=>{let{title:t,children:n}=e;const a=()=>{const e=new Date;return Number(`${e.getHours()}${e.getMinutes()}`)},[c,m]=(0,l.useState)(a());setInterval((()=>{m(a())}),3600);return l.createElement("div",{className:r},t&&l.createElement("h1",null,l.createElement("div",null,t)),l.createElement("ul",{className:i},l.Children.map(n,((e,t)=>((e,t)=>{if(!e)return!1;const n=Number(e.replace(":",""));if(t){const e=Number(t.replace(":",""));return n<=c&&c<e}return n<=c})(e?.props.time,n[t+1]?.props.time)?l.cloneElement(e,{active:!0}):l.cloneElement(e)))))}},7359:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(7294),r=n(2263),i=n(390),a=n(4860);const c=[{time:"12:45",title:"Vorstellung",description:l.createElement("p",null,"Modulidentifikation")},{time:"13:10",title:"Vom Algorithmus zum Programm",description:l.createElement(l.Fragment,null,l.createElement("p",null,"\ud83e\uddd1\u200d\ud83c\udfeb Pr\xe4sentation / ",l.createElement("b",null,"Diskussion")),l.createElement("p",null,l.createElement("b",null,"\u2615\ufe0f 13:30")))},{time:"14:20",title:"\u2615\ufe0f Grosse Pause",description:l.createElement(l.Fragment,null)},{time:"14:40",title:"Grundstrukturen",description:l.createElement(l.Fragment,null,l.createElement("p",null,"\ud83d\udcdd Aufgaben L\xf6sen"))},{time:"14:50",title:"Hallo Welt",description:l.createElement(l.Fragment,null,l.createElement("p",null,"\ud83d\udc69\u200d\ud83d\udcbb in Eclipse zusammen!"),l.createElement("p",null,l.createElement("b",null,"15:30 \u2615\ufe0f")))},{time:"15:50",title:"\ud83e\uddd1\u200d\ud83c\udfeb Code-Konventionen",description:l.createElement(l.Fragment,null)},{time:"16:15",title:"\ud83c\udfdd\ufe0f",description:l.createElement(l.Fragment,null)}];function m(){const{siteConfig:e}=(0,r.Z)();return l.createElement(i.Z,{title:e.title,description:e.tagline},l.createElement(a.Z,{title:"- Woche 1"},c.map((e=>l.createElement(a.j,{key:e.time,time:e.time,title:e.title},e.description)))))}}}]);