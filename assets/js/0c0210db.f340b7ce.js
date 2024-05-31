(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8127],{48806:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(74848),a=o(28453),r=(o(85674),o(85225));o(84664),o(7227),o(49153);const i={id:"room-management",title:"Room Management",description:"API for room management HTTP server",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,l={id:"openapi/ucs/v1/room-management",title:"Room Management",description:"API for room management HTTP server",source:"@site/docs/openapi/ucs/v1/room-management.info.mdx",sourceDirName:"openapi/ucs/v1",slug:"/openapi/ucs/v1/room-management",permalink:"/aoh-docs/docs/openapi/ucs/v1/room-management",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"room-management",title:"Room Management",description:"API for room management HTTP server",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"ucsAPI-v1",previous:{title:"Room Management",permalink:"/aoh-docs/docs/ucs/api/v1"},next:{title:"Server liveness",permalink:"/aoh-docs/docs/openapi/ucs/v1/server-liveness"}},c={},d=[];function u(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.0"}),"\n",(0,n.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"Room Management"}),"\n",(0,n.jsx)(t.p,{children:"API for room management HTTP server"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},49153:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(o(96540)),r=n(o(4213));t.default=function(e){let{url:t,proxy:o}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},85674:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(o(96540)),r=o(56592),i=n(o(98180)),s=n(o(67581));t.default=function(e){const{colorMode:t}=(0,r.useColorMode)(),{logo:o,darkLogo:n}=e,l=()=>"dark"===t?n?.altText??o?.altText:o?.altText,c=(0,i.default)(o?.url),d=(0,i.default)(n?.url);return o&&n?a.default.createElement(s.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):o||n?a.default.createElement(s.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4213:function(e,t,o){var n,a,r,i=o(96763);a=[],void 0===(r="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,o)},n.onerror=function(){i.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var i=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):a(l.href)?n(e,t,o):r(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(a(e))n(e,o,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var r="application/octet-stream"===e.type,i=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&i||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,m=u.createObjectURL(e);a?a.location=m:location.href=m,a=null,setTimeout((function(){u.revokeObjectURL(m)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,a):n)||(e.exports=r)}}]);