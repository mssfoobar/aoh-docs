(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1448],{23588:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(74848),a=n(28453),r=(n(85674),n(85225));n(84664),n(7227),n(49153);const i={id:"room-management",title:"Room Management",description:"## What's new",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,l={id:"openapi/ucs/room-management",title:"Room Management",description:"## What's new",source:"@site/docs/openapi/ucs/room-management.info.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/room-management",permalink:"/aoh-docs/docs/openapi/ucs/room-management",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"room-management",title:"Room Management",description:"## What's new",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"Room Management",permalink:"/aoh-docs/docs/ucs/api"},next:{title:"Server liveness",permalink:"/aoh-docs/docs/openapi/ucs/server-liveness"}},c={},d=[{value:"What&#39;s new",id:"whats-new",level:2}];function u(e){const t={h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: v2"}),"\n",(0,o.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"Room Management"}),"\n",(0,o.jsx)(t.h2,{id:"whats-new",children:"What's new"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"create chat 1-1 room"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"delete chat 1-1 room"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},49153:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(96540)),r=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},85674:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(96540)),r=n(56592),i=o(n(98180)),s=o(n(67581));t.default=function(e){const{colorMode:t}=(0,r.useColorMode)(),{logo:n,darkLogo:o}=e,l=()=>"dark"===t?o?.altText??n?.altText:n?.altText,c=(0,i.default)(n?.url),d=(0,i.default)(o?.url);return n&&o?a.default.createElement(s.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):n||o?a.default.createElement(s.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,a,r,i=n(96763);a=[],void 0===(r="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){i.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var i=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):a(l.href)?o(e,t,n):r(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,i=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&i||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,p=u.createObjectURL(e);a?a.location=p:location.href=p,a=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,a):o)||(e.exports=r)}}]);