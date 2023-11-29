"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:1},i="\ud83c\udd95 Introduction",l={unversionedId:"ucs/introduction",id:"ucs/introduction",title:"\ud83c\udd95 Introduction",description:"UCS is a real-time communication system developed for AOH projects.",source:"@site/docs/60_ucs/introduction.md",sourceDirName:"60_ucs",slug:"/ucs/introduction",permalink:"/aoh-docs/docs/ucs/introduction",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/60_ucs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ucs",next:{title:"\ud83d\udcda Guides",permalink:"/aoh-docs/docs/category/-guides-1"}},c={},s=[{value:"Supported Features:",id:"supported-features",level:2},{value:"Forked Projects:",id:"forked-projects",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-introduction"},"\ud83c\udd95 Introduction"),(0,n.kt)("p",null,"UCS is a real-time communication system developed for AOH projects."),(0,n.kt)("p",null,"UCS repositories can be found here."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mssfoobar/Vidconf-ion.git"},"https://github.com/mssfoobar/Vidconf-ion.git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mssfoobar/VidConf-ion-app-web.git"},"https://github.com/mssfoobar/VidConf-ion-app-web.git"))),(0,n.kt)("h2",{id:"supported-features"},"Supported Features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Containerised deployment with DevOps consideration in place"),(0,n.kt)("li",{parentName:"ul"},"Web-based frontend for ease of deployment"),(0,n.kt)("li",{parentName:"ul"},"Video conference to share video, audio, chat messages and files primarily for team-sized collaborations in the course of fulfilling daily tasks"),(0,n.kt)("li",{parentName:"ul"},"HTTPS-API for service provisioning, e.g. advance-room-booking"),(0,n.kt)("li",{parentName:"ul"},"Recording and Playback of conference sessions to record-and-playback the data streams instead of screen capturing of conference sessions"),(0,n.kt)("li",{parentName:"ul"},"Data-encryption for all network traffic"),(0,n.kt)("li",{parentName:"ul"},"Web-security to disable unencrpyted data through well-known ports"),(0,n.kt)("li",{parentName:"ul"},"Scalable backend architecture"),(0,n.kt)("li",{parentName:"ul"},"High-availability architecture"),(0,n.kt)("li",{parentName:"ul"},"Max participant around 200 pax"),(0,n.kt)("li",{parentName:"ul"},"Screen-sharing for meetings"),(0,n.kt)("li",{parentName:"ul"},"System-monitoring for health status"),(0,n.kt)("li",{parentName:"ul"},"Partial-disabling of video, audio or chat"),(0,n.kt)("li",{parentName:"ul"},"ISO8601 zulu time"),(0,n.kt)("li",{parentName:"ul"},"RoomId is google UUID"),(0,n.kt)("li",{parentName:"ul"},"Query params for HTTP POST is inside JSON body"),(0,n.kt)("li",{parentName:"ul"},"Kick user by userId"),(0,n.kt)("li",{parentName:"ul"},"Query Room by roomId"),(0,n.kt)("li",{parentName:"ul"},"Bookroom: optional prompt RelativeFrom:Start/End(Default End) RelativeTimeInSeconds:123 Message:PromptMessage"),(0,n.kt)("li",{parentName:"ul"},"Edit room booking"),(0,n.kt)("li",{parentName:"ul"},"Cancel room booking")),(0,n.kt)("h2",{id:"forked-projects"},"Forked Projects:"),(0,n.kt)("p",null,"UCS is forked from the following open-source projects:-"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ionorg/ion"},"ION")," - a complete WebRTC-compatible backend suite written in golang"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ionorg/ion-app-web"},"ION-app-web")," - a WebRTC-compatible web-frontend written in golang")))}p.isMDXComponent=!0}}]);