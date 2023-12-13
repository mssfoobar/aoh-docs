"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=i,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={sidebar_position:2},r="Administering OIDC Clients",o={unversionedId:"iam/clients",id:"iam/clients",title:"Administering OIDC Clients",description:"When you create a new service that needs access to the system, you need to create an OIDC client for that service. This",source:"@site/docs/50_iam/20_clients.md",sourceDirName:"50_iam",slug:"/iam/clients",permalink:"/aoh-docs/docs/iam/clients",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/50_iam/20_clients.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"iam",previous:{title:"\ud83c\udd95 Introduction",permalink:"/aoh-docs/docs/iam/introduction"},next:{title:"Roles & Groups",permalink:"/aoh-docs/docs/iam/roles_and_groups"}},c={},s=[{value:"Creating an OIDC client",id:"creating-an-oidc-client",level:2},{value:"Configuring the client",id:"configuring-the-client",level:2},{value:"Adding mappers",id:"adding-mappers",level:3},{value:"Manage Service Account Group Mappings",id:"manage-service-account-group-mappings",level:3},{value:"Get an access token to make system calls",id:"get-an-access-token-to-make-system-calls",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"administering-oidc-clients"},"Administering OIDC Clients"),(0,i.kt)("p",null,"When you create a new service that needs access to the system, you need to create an OIDC client for that service. This\nwill allow access to the system as a user or account associated with that client. For services, we give them access to\nthe system via ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#_service_accounts"},"service accounts"),"."),(0,i.kt)("p",null,"This section describes how you can create an OIDC client for a new service, enable a service account for the OIDC\nclient, and fetch an access token for the service account to grant you access to the system."),(0,i.kt)("h2",{id:"creating-an-oidc-client"},"Creating an OIDC client"),(0,i.kt)("p",null,"The steps for creating a client is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Clients")," in the menu on the left"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create client")),(0,i.kt)("li",{parentName:"ol"},"Choose a client ID - We prefix the client ID with the domain, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"aoh_web"),". This is not a Keycloak requirement but a naming\nconvention we follow."),(0,i.kt)("li",{parentName:"ol"},"Give it a sensible name and description"),(0,i.kt)("li",{parentName:"ol"},"Scroll down to ",(0,i.kt)("inlineCode",{parentName:"li"},"Capability config")," and make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"Client authentication")," is on and ",(0,i.kt)("inlineCode",{parentName:"li"},"Service accounts roles")," is\nchecked."),(0,i.kt)("li",{parentName:"ol"},"Click save.")),(0,i.kt)("h2",{id:"configuring-the-client"},"Configuring the client"),(0,i.kt)("p",null,"You will need to configure your new client to add mappers to have claims added to the token that will let you access\nHasura in our system. Read more about authentication in AOH ",(0,i.kt)("a",{parentName:"p",href:"/docs/iam/introduction#authentication-in-agil-rad"},"here"),"."),(0,i.kt)("h3",{id:"adding-mappers"},"Adding mappers"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hasura-default-role"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hasura-allowed-roles")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hausra-client-id")," mappers."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Clients")," in the menu on the left")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the client you want to configure")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client scopes")," tab")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"Assigned client scope"),", you will be able to see ",(0,i.kt)("inlineCode",{parentName:"p"},"[client-id]-dedicated")," as a link, click it to access the")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hasura-default-role")," mapper:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5.1. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add mapper")),(0,i.kt)("li",{parentName:"ul"},"5.2. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"By configuration")),(0,i.kt)("li",{parentName:"ul"},"5.3. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"User Attribute")),(0,i.kt)("li",{parentName:"ul"},"5.4 Key in 'default-role' in ",(0,i.kt)("inlineCode",{parentName:"li"},"User Attribute")),(0,i.kt)("li",{parentName:"ul"},"5.5 Key in 'hasura_access.x-hasura-default-role' in ",(0,i.kt)("inlineCode",{parentName:"li"},"Token Claim Name")),(0,i.kt)("li",{parentName:"ul"},"5.6 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Claim JSON Type")," as String"),(0,i.kt)("li",{parentName:"ul"},"5.7 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to ID token")," checked"),(0,i.kt)("li",{parentName:"ul"},"5.8 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to access token")," checked"),(0,i.kt)("li",{parentName:"ul"},"5.9 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to userinfo")," checked\nmappers and scope."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hasura-allowed-roles")," mapper:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"6.1. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add mapper")),(0,i.kt)("li",{parentName:"ul"},"6.2. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"By configuration")),(0,i.kt)("li",{parentName:"ul"},"6.3. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"User Realm Role")),(0,i.kt)("li",{parentName:"ul"},"6.4 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Multivalued")," checked"),(0,i.kt)("li",{parentName:"ul"},"6.5 Key in 'hasura_access.x-hasura-allowed-roles' in ",(0,i.kt)("inlineCode",{parentName:"li"},"Token Claim Name")),(0,i.kt)("li",{parentName:"ul"},"6.6 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Claim JSON Type")," as String"),(0,i.kt)("li",{parentName:"ul"},"6.7 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to ID token")," checked"),(0,i.kt)("li",{parentName:"ul"},"6.8 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to access token")," checked"),(0,i.kt)("li",{parentName:"ul"},"6.9 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to userinfo")," checked"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-hasura-client-id")," mapper:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"7.1. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add mapper")),(0,i.kt)("li",{parentName:"ul"},"7.2. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"By configuration")),(0,i.kt)("li",{parentName:"ul"},"7.3. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"User Session Note")),(0,i.kt)("li",{parentName:"ul"},"7.4 Key in 'clientId' in ",(0,i.kt)("inlineCode",{parentName:"li"},"User Session Note")),(0,i.kt)("li",{parentName:"ul"},"7.5 Key in 'hasura_access.x-hasura-client-id' in ",(0,i.kt)("inlineCode",{parentName:"li"},"Token Claim Name")),(0,i.kt)("li",{parentName:"ul"},"7.6 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Claim JSON Type")," as String"),(0,i.kt)("li",{parentName:"ul"},"7.7 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to ID token")," checked"),(0,i.kt)("li",{parentName:"ul"},"7.8 Leave ",(0,i.kt)("inlineCode",{parentName:"li"},"Add to access token")," checked")))),(0,i.kt)("h3",{id:"manage-service-account-group-mappings"},"Manage Service Account Group Mappings"),(0,i.kt)("p",null,"We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"system")," role for backend services. For the mappers to work, the service account must have the right\nattributes on it. We create groups and add the attributes we want to it - this will get merged into the user attributes\nwhen a user joins the group, and the mappers we made in the earlier section will map that to the appropraite claims."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(59632).Z,width:"1446",height:"583"})),(0,i.kt)("p",null,"To get the service account to join the group:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Clients")," in the menu on the left"),(0,i.kt)("li",{parentName:"ol"},"Click on the client you want to configure"),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Service account roles")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on the link that says 'To manage detail and group mappings, click on the username\n",(0,i.kt)("inlineCode",{parentName:"li"},"<service-account-client-id>"),"', this will take you to the user details page of the service account"),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Groups")," tab"),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Join Group")," and check ",(0,i.kt)("inlineCode",{parentName:"li"},"system")," (or any other groups you wish to join)")),(0,i.kt)("h3",{id:"get-an-access-token-to-make-system-calls"},"Get an access token to make system calls"),(0,i.kt)("p",null,"You can get your access token by calling the OIDC endpoint called ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),", this can be discovered via the OIDC\ndiscovery endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /.well-known/openid-configuration")," (read more about\n",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest"},"OIDC to learn more"),")."),(0,i.kt)("p",null,"One of the endpoints you will get in return is the token endpoint - which should look like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://<your-keycloak-origin>/realms/<your-realm>/protocol/openid-connect/token")),(0,i.kt)("p",null,"To make the request, you will need your client credentials, which you can get from the credentials tab in the client\ndetails page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(59355).Z,width:"1339",height:"728"})),(0,i.kt)("p",null,"To get to this page:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Clients")),(0,i.kt)("li",{parentName:"ol"},"Click on the desired client id in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Clients list")),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"credentials")," tab")),(0,i.kt)("p",null,"Make a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to that endpoint, passing in the body:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client_id: The ID of your client (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"aoh_web"),")"),(0,i.kt)("li",{parentName:"ul"},"grant_type: ",(0,i.kt)("inlineCode",{parentName:"li"},"client_credentials")),(0,i.kt)("li",{parentName:"ul"},"client_secret: The secret of your client (retrieved from the client credentials page)")),(0,i.kt)("p",null,"The returned result is the access token which you can use as a bearer token to make calls in the system (Hasura)."))}m.isMDXComponent=!0},59355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keycloak_client_details_credentials-c2dba54718c26b041717be8fdac69172.jpg"},59632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keycloak_group_attributes-a5da9991b031c1493a23638b2d413119.jpg"}}]);