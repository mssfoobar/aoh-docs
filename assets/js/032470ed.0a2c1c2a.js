"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),l=n(51048),s=n(33609),i=n(1943),u=n(72957);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:d,className:m}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,s.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[y,w]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==y&&b.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==y&&(O(t),w(r),null!=d&&k(d,String(r)))},D=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:N},l,{className:(0,o.Z)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},76079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(34259),l=n(18679);const s={sidebar_position:1,description:"A useful list of commands to to"},i="\u2714\ufe0f Runbook",u={unversionedId:"overview/reference/runbook",id:"overview/reference/runbook",title:"\u2714\ufe0f Runbook",description:"A useful list of commands to to",source:"@site/docs/10_overview/50_reference/runbook.md",sourceDirName:"10_overview/50_reference",slug:"/overview/reference/runbook",permalink:"/aoh-docs/docs/overview/reference/runbook",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/10_overview/50_reference/runbook.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A useful list of commands to to"},sidebar:"overview",previous:{title:"\u26a1 Quick Reference",permalink:"/aoh-docs/docs/category/-quick-reference"},next:{title:"\ud83d\udc80 Pitfalls",permalink:"/aoh-docs/docs/overview/reference/pitfalls"}},c={},p=[{value:"AR2 Web Server",id:"ar2-web-server",level:2},{value:"Running the server in dev mode",id:"running-the-server-in-dev-mode",level:3},{value:"Database Administration",id:"database-administration",level:2},{value:"Connecting to Postgres Database",id:"connecting-to-postgres-database",level:3},{value:"Connecting to Postgres Database &amp; Running Command Immediately",id:"connecting-to-postgres-database--running-command-immediately",level:3},{value:"Start psql connection with an SQL file",id:"start-psql-connection-with-an-sql-file",level:3},{value:"Retrieving Database Dump from Hasura",id:"retrieving-database-dump-from-hasura",level:3},{value:"Docker &amp; Docker Compose",id:"docker--docker-compose",level:2},{value:"Build + Create + Start (detached)",id:"build--create--start-detached",level:3},{value:"Stop + Remove (images) + Remove (volumes)",id:"stop--remove-images--remove-volumes",level:3}],d={toc:p},m="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-runbook"},"\u2714\ufe0f Runbook"),(0,a.kt)("h2",{id:"ar2-web-server"},"AR2 Web Server"),(0,a.kt)("h3",{id:"running-the-server-in-dev-mode"},"Running the server in dev mode"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run clean; npm run generate; npm run dev\n"))),(0,a.kt)(l.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run clean && npm run generate&& npm run dev\n"))),(0,a.kt)(l.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run clean && npm run generate&& npm run dev\n")))),(0,a.kt)("h2",{id:"database-administration"},"Database Administration"),(0,a.kt)("h3",{id:"connecting-to-postgres-database"},"Connecting to Postgres Database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"psql -h <HOST> -d postgres -U postgres -p <PORT>\n")),(0,a.kt)("p",null,"e.g. with default Postgres container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"psql -h localhost -d postgres -U postgres -p 5432\n")),(0,a.kt)("h3",{id:"connecting-to-postgres-database--running-command-immediately"},"Connecting to Postgres Database & Running Command Immediately"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"psql -h <HOST> -d postgres -U postgres -p <PORT> -c <COMMAND>\n")),(0,a.kt)("p",null,"e.g. with default Postgres container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'psql -h localhost -d postgres -U postgres -p 5432 -c "CREATE DATABASE ar2;"\n')),(0,a.kt)("h3",{id:"start-psql-connection-with-an-sql-file"},"Start psql connection with an SQL file"),(0,a.kt)("p",null,"This is useful for loading dumps in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},".sql")," files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h <HOST> -d ar2 -U postgres -p <PORT> -f <PATH_TO_SQL>\n")),(0,a.kt)("h3",{id:"retrieving-database-dump-from-hasura"},"Retrieving Database Dump from Hasura"),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/api-reference/pgdump/"},"https://hasura.io/docs/latest/api-reference/pgdump/")),(0,a.kt)("p",null,"Do a POST request to http://{{hasura_url}}/v1alpha1/pg_dump with the following body:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to supply any required credentials through the header (e.g. x-hasura-admin-secret)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /v1alpha1/pg_dump HTTP/1.1\nContent-Type: application/json\nX-Hasura-Role: admin\n{\n  "opts": [ "--no-owner", "--no-acl"],\n  "clean_output": true,\n  "source": "ar2"\n}\n')),(0,a.kt)("h2",{id:"docker--docker-compose"},"Docker & Docker Compose"),(0,a.kt)("h3",{id:"build--create--start-detached"},"Build + Create + Start (detached)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d --build\n")),(0,a.kt)("h3",{id:"stop--remove-images--remove-volumes"},"Stop + Remove (images) + Remove (volumes)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down --rmi local -v\n")))}v.isMDXComponent=!0}}]);