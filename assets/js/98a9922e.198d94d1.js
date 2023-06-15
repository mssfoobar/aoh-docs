"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[6360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:1},i="Introduction \ud83c\udd95",s={unversionedId:"iam/introduction",id:"iam/introduction",title:"Introduction \ud83c\udd95",description:"Our system uses Keycloak as the identity access management server. Keycloak is an open-source identity and access",source:"@site/docs/iam/introduction.md",sourceDirName:"iam",slug:"/iam/introduction",permalink:"/ar2-docs/docs/iam/introduction",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/iam/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"iam"},l={},c=[{value:"OpenID Connect",id:"openid-connect",level:2},{value:"Keycloak",id:"keycloak",level:2},{value:"How do we use Keycloak?",id:"how-do-we-use-keycloak",level:3},{value:"Authentication in Agil RAD",id:"authentication-in-agil-rad",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-"},"Introduction \ud83c\udd95"),(0,o.kt)("p",null,"Our system uses Keycloak as the identity access management server. Keycloak is an open-source identity and access\nmanagement (IAM) solution developed by Red Hat. Their enterprise fork is called Red Hat Single-Sign On (SSO). It follows\nthe OpenID Connect and OAuth 2.0 standards and it highly extensible, allowing it to integrate seamlessly with many other\napplications, frameworks, and even perform user federation and integration with LDAP providers."),(0,o.kt)("h2",{id:"openid-connect"},"OpenID Connect"),(0,o.kt)("p",null,"OpenID Connect is an identity layer built on top of the OAuth 2.0 framework. It is an open standard that provides a\nsecure and standardized way for user authentication and authorization in modern web applications and APIs."),(0,o.kt)("p",null,"By utilizing OpenID Connect, we'll be able to integrate with other systems that follow the OIDC standard, and also\neven add support for social logins. We can even swap out Keycloak for a different identity provider (e.g. Google,\nFacebook's, Auth0, etc.) should the need arise."),(0,o.kt)("h2",{id:"keycloak"},"Keycloak"),(0,o.kt)("p",null,"As Keycloak acts as our IAM server, it handles the generation of JSON Web Tokens ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT's")," as well as authentication.\nManaging Keycloak itself is a large topic, and requires some understanding of OIDC authentication flows, as well as the\nthe security concepts surrounding authentication using ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT's"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can read more Keycloak, OIDC, and OAuth here:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Keycloak: ",(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/documentation"},"https://www.keycloak.org/documentation")),(0,o.kt)("li",{parentName:"ul"},"OIDC and OAuth: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc"},"https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc")))),(0,o.kt)("h3",{id:"how-do-we-use-keycloak"},"How do we use Keycloak?"),(0,o.kt)("p",null,"We use Keycloak's User Federation system and their User Storage Service Provider Interface to integrate with our\ndatabase to retrieve users. This is done by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Java")," interfaces for the User Storage SPI, and placing\nthe built ",(0,o.kt)("inlineCode",{parentName:"p"},".jar")," file in the Keycloak server."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Find out more about Keycloak server development:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"User Storage SPI: ",(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_development/#_user-storage-spi"},"https://www.keycloak.org/docs/latest/server_development/#_user-storage-spi")),(0,o.kt)("li",{parentName:"ul"},"User Federation: ",(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_admin/#adding-a-provider"},"https://www.keycloak.org/docs/latest/server_admin/#adding-a-provider"))),(0,o.kt)("p",{parentName:"admonition"},"You can find the source code for our User Storage Provider Interface implementation here:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mssfoobar/ar-keycloak-providers"},"https://github.com/mssfoobar/ar-keycloak-providers")))),(0,o.kt)("h3",{id:"authentication-in-agil-rad"},"Authentication in Agil RAD"),(0,o.kt)("p",null,"In the current iteration of the system, users are part of teams and have roles. In terms of database relationships, a\nuser can be part of 1 or more teams, and they can have 1 or more roles in that time. However, when accessing the system,\nthey must always assume 1 role to do so."),(0,o.kt)("p",null,"Keycloak does not have the concept of 'teams', but they do have 'groups'. We map each users' team to Keycloak groups,\nand each users' role to Keycloak's roles. Note however, that in Keycloak, 'groups' are aggregates of roles - which is\nnot that case in our system for 'teams'."),(0,o.kt)("p",null,"Each user is associated to a team and role via the 'membership' table. The user entity has a 'membership_id' foreign\nkey; this refers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"active membership")," that the user has. Meaning, the exact team and role he/she is assuming\nwhilst accessing the system. This active membership role is mapped to the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-hasura-default-role")," claim in the access\ntoken and that role claim is used to make requests in the system (GraphQL requests to Hasura). Hasura performs the\nauthorization via the permissions tables for each entity/table."),(0,o.kt)("p",null,"A user can have multiple memberships (this relationship is stored as the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," foreign key in the membership table).\nThe User Storage SPI maps these memberships to the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-hasura-allowed-roles")," claim. This means that you may pass\n",(0,o.kt)("inlineCode",{parentName:"p"},"x-hasura-role")," in the request header to Hasura to assume a different role for that request."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/auth/authorization/index/"},"https://hasura.io/docs/latest/auth/authorization/index/")," for more information on how Hasura handles roles.")))}u.isMDXComponent=!0}}]);