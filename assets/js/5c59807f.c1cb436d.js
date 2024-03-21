"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[4860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="\u2699\ufe0f Configuration",s={unversionedId:"rnr/guides/configuration",id:"rnr/guides/configuration",title:"\u2699\ufe0f Configuration",description:"DB Snapshot Retention Configuration",source:"@site/docs/80_rnr/guides/configuration.md",sourceDirName:"80_rnr/guides",slug:"/rnr/guides/configuration",permalink:"/aoh-docs/docs/rnr/guides/configuration",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/80_rnr/guides/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"rnr",previous:{title:"\ud83d\ude80 Quickstart",permalink:"/aoh-docs/docs/rnr/guides/quickstart"},next:{title:"Introduction",permalink:"/aoh-docs/docs/rnr/Record & Replay API/record-replay"}},l={},c=[{value:"DB Snapshot Retention Configuration",id:"db-snapshot-retention-configuration",level:2},{value:"DebeziumStream Retention Configuration",id:"debeziumstream-retention-configuration",level:2},{value:"Minio Object Expiry Configuration",id:"minio-object-expiry-configuration",level:2},{value:"DB Snapshot Frequency Configuration",id:"db-snapshot-frequency-configuration",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,a.kt)("h2",{id:"db-snapshot-retention-configuration"},"DB Snapshot Retention Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Replaymgr")," service ",(0,a.kt)("inlineCode",{parentName:"p"},"DB_SNAPSHOT_RETENTION_IN_DAY")," env variable set how long the data should be kept."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dotenv"},"DB_SNAP_SHOT_RETENTION_IN_DAY=10\n")),(0,a.kt)("p",null,"Default value will be set to 7 days if the env variable is not set."),(0,a.kt)("h2",{id:"debeziumstream-retention-configuration"},"DebeziumStream Retention Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://docs.nats.io/using-nats/nats-tools/nats_cli"},"nats-cli")," tool"),(0,a.kt)("li",{parentName:"ol"},"Create the DebeziumStream (skip to step 3 if the stream exists)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nats stream add DebeziumStream --storage=file -s nats://{host}:{port}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Edit the stream to write to file system & limit the retention period (for example: 7 days)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nats stream edit DebeziumStream --max-age=7d -s nats://{host}:{port}\n")),(0,a.kt)("h2",{id:"minio-object-expiry-configuration"},"Minio Object Expiry Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install minio client tool ",(0,a.kt)("a",{parentName:"li",href:"https://min.io/docs/minio/linux/reference/minio-mc.html"},"mc")),(0,a.kt)("li",{parentName:"ol"},"Set alias to the minio server (replace placeholder in {} with your environment setup)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mc alias set {name} {minio-server-url} {access-key} {secret-key}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use the alias created in step 2 to set the bucket expiry by day")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mc ilm rule add --expire-days 7 {name}/{bucketname}\n")),(0,a.kt)("h2",{id:"db-snapshot-frequency-configuration"},"DB Snapshot Frequency Configuration"),(0,a.kt)("p",null,"We use kubernetes cronjob to run bash script to take db snapshot."),(0,a.kt)("p",null,"To update the frequency of the db snapshot, update the kubernetes cronjob yaml file."),(0,a.kt)("p",null,"For example, update the schedule value in yaml file to ",(0,a.kt)("inlineCode",{parentName:"p"},'"*/5 * * *"')," to set frequency to every 5 minutes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: rnr-periodic-snapshot-raw\n  namespace: common-rnr\nspec:\n  schedule: "*/5 * * * *"\n')))}m.isMDXComponent=!0}}]);