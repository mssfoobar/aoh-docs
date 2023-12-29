"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[4438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=s(n),c=a,d=g["".concat(l,".").concat(c)]||g[c]||u[c]||o;return n?i.createElement(d,r(r({ref:t},m),{},{components:n})):i.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:40},r="Signing Commits",p={unversionedId:"development/source_management/verified-commits",id:"development/source_management/verified-commits",title:"Signing Commits",description:"To sign commits that are valid under GitHub's rules - you must use a GPG Keypair. Signing commits allows us to verify",source:"@site/docs/20_development/50_source_management/40-verified-commits.md",sourceDirName:"20_development/50_source_management",slug:"/development/source_management/verified-commits",permalink:"/aoh-docs/docs/development/source_management/verified-commits",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/20_development/50_source_management/40-verified-commits.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"development",previous:{title:"Publishing Web Components",permalink:"/aoh-docs/docs/development/source_management/publishing"},next:{title:"\ud83c\udf10 DevOps (onboarding new service)",permalink:"/aoh-docs/docs/category/-devops-onboarding-new-service"}},l={},s=[{value:"1. Generate a GPG Keypair",id:"1-generate-a-gpg-keypair",level:2},{value:"2. Set up the GPG public key",id:"2-set-up-the-gpg-public-key",level:2},{value:"2.1. List your existing GPG keys",id:"21-list-your-existing-gpg-keys",level:3},{value:"2.2. Print the GPG public key",id:"22-print-the-gpg-public-key",level:3},{value:"2.3. Add the GPG public key to GitHub",id:"23-add-the-gpg-public-key-to-github",level:3},{value:"3. Set up the GPG private key",id:"3-set-up-the-gpg-private-key",level:2},{value:"List your existing GPG keys",id:"list-your-existing-gpg-keys",level:2},{value:"Migrate GPG Keypairs",id:"migrate-gpg-keypairs",level:2},{value:"Delete GPG Keypairs",id:"delete-gpg-keypairs",level:2},{value:"Password Entry on Mac",id:"password-entry-on-mac",level:2}],m={toc:s},g="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(g,(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signing-commits"},"Signing Commits"),(0,a.kt)("p",null,"To sign commits that are valid under GitHub's rules - you must use a GPG Keypair. Signing commits allows us to verify\nthat commits are made by the user that's committing them."),(0,a.kt)("p",null,"Ideally, all branches should be protected to require commits to be signed. This can be done by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits"},"configuring GitHub's\nbranch protection rules")," to ensure commits are only allowed when they have been verified with a\nGPG signature. The following section explains how you can set your computer up with a GPG keypair to sign your git\ncommits."),(0,a.kt)("h2",{id:"1-generate-a-gpg-keypair"},"1. Generate a GPG Keypair"),(0,a.kt)("p",null,"To generate a new GPG key on the machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --full-generate-key\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"(1) RSA and RSA (default)")," when prompted on what kind of key you want."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4096")," when prompted on what keysize you want."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," when prompted how long the key should be valid so that it does not expire (unless you wish to commit to a\ndifferent policy)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")," to confirm that the key does not expire if you picked ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<your name>")," when asked for your name. This does not need to match the commit name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<email address>")," when asked for your email, this must match the commit email address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<comment>")," (optional) some comments to tag onto this key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"O")," for (O)kay when you're done."),(0,a.kt)("li",{parentName:"ul"},"A dialogue box will appear - key in your passphrase for the key - you ",(0,a.kt)("b",null,"MUST")," remember this passphrase and use it\nevery time to sign a commit. You will be asked to key the passphrase in again to confirm.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key"},"reference")," for more information.")),(0,a.kt)("h2",{id:"2-set-up-the-gpg-public-key"},"2. Set up the GPG public key"),(0,a.kt)("h3",{id:"21-list-your-existing-gpg-keys"},"2.1. List your existing GPG keys"),(0,a.kt)("p",null,"To list existing GPG keys on the machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --list-keys --keyid-format=long\ngpg --list-secret-keys --keyid-format=long\n")),(0,a.kt)("p",null,"GPG key ID is located after ",(0,a.kt)("inlineCode",{parentName:"p"},"sec rsa4096/")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys"},"reference")," for more information.")),(0,a.kt)("h3",{id:"22-print-the-gpg-public-key"},"2.2. Print the GPG public key"),(0,a.kt)("p",null,"Print the GPG public key in ASCII armor format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --armor --export <key-ID>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key"},"reference")," for more information.")),(0,a.kt)("h3",{id:"23-add-the-gpg-public-key-to-github"},"2.3. Add the GPG public key to GitHub"),(0,a.kt)("p",null,"Copy the entire output from ",(0,a.kt)("a",{parentName:"p",href:"#21--list-your-existing-gpg-keys"},"2.1")," into your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/keys"},"GitHub account's settings > keys")),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"New GPG key")," and paste the output there."),(0,a.kt)("p",null,"Also, it is highly recommended that you set your account to ",(0,a.kt)("inlineCode",{parentName:"p"},"Vigilant mode")," to mark any unsigned commits as ",(0,a.kt)("inlineCode",{parentName:"p"},"unverified"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(88953).Z,width:"1137",height:"737"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account"},"reference")," for more information.")),(0,a.kt)("h2",{id:"3-set-up-the-gpg-private-key"},"3. Set up the GPG private key"),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitconfig")," for global configuration. On Windows machines, it should be at ",(0,a.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/.gitconfig"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Or edit the ",(0,a.kt)("inlineCode",{parentName:"p"},".git/config")," for each repository's configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[user]\n    email = <commit email>\n    signingkey = <key-ID>\n[commit]\n    gpgsign = true\n")),(0,a.kt)("p",null,"Alternatively, you can use the following commands to edit your git config from the terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' git config user.email "<commit email>"\n git config user.signingkey "<key-ID>"\n git config commit.gpgsign true\n')),(0,a.kt)("p",null,"You can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--global")," flag to modify the settings globally (for any/all repositories in your machine).",(0,a.kt)("br",{parentName:"p"}),"\n","Repository settings will supersede global settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' git config --global user.email "<commit email>"\n git config --global user.signingkey "<key-ID>"\n git config --global commit.gpgsign true\n')),(0,a.kt)("p",null,"After that, you will be prompted for a passphrase every time you commit."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-gpg-key"},"reference")," for more information.")),(0,a.kt)("h2",{id:"list-your-existing-gpg-keys"},"List your existing GPG keys"),(0,a.kt)("p",null,"To list existing GPG keys on the machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --list-keys --keyid-format=long\ngpg --list-secret-keys --keyid-format=long\n")),(0,a.kt)("p",null,"GPG key ID is located after ",(0,a.kt)("inlineCode",{parentName:"p"},"sec rsa4096/")),(0,a.kt)("p",null,"This will be useful, especially when you need to view the key ID (used in many of the commands)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys"},"reference")," for more information.")),(0,a.kt)("h2",{id:"migrate-gpg-keypairs"},"Migrate GPG Keypairs"),(0,a.kt)("p",null,"To export the keypairs from your PC:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --export <key-ID> > public_keys.pgp\ngpg --export-secret-keys <key-ID> > private_keys.pgp\n")),(0,a.kt)("p",null,"To import the keypairs to your other PC:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --import < public_keys.pgp\ngpg --import < private_keys.pgp\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://makandracards.com/makandra-orga/37763-gpg-extract-private-key-and-import-on-different-machine"},"reference")," for more information.")),(0,a.kt)("h2",{id:"delete-gpg-keypairs"},"Delete GPG Keypairs"),(0,a.kt)("p",null,"To delete the keypairs from your PC:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You must delete the private key before you can delete the public key.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gpg --delete-secret-key <key-ID>\ngpg --delete-key <key-ID>\n")),(0,a.kt)("p",null,"Or delete the ",(0,a.kt)("inlineCode",{parentName:"p"},".gnupg")," file. On Windows machines, it should be at ",(0,a.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/.gnupg"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See this ",(0,a.kt)("a",{parentName:"p",href:"https://blog.chapagain.com.np/gpg-remove-keys-from-your-public-keyring/"},"reference")," for more information.")),(0,a.kt)("h2",{id:"password-entry-on-mac"},"Password Entry on Mac"),(0,a.kt)("p",null,"If you're on MacOS, under the default configuration, ",(0,a.kt)("inlineCode",{parentName:"p"},"gpg")," might not be able to create a password prompt for you. Run the following commands\nin sequence to install ",(0,a.kt)("inlineCode",{parentName:"p"},"pinetry-mac"),", which is a small collection of dialog programs that allow GnuPG to read passphrases and PIN numbers\nin a secure manner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'brew install pinentry-mac\necho "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf\nkillall gpg-agent\n')))}u.isMDXComponent=!0},88953:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github_settings_keys-826b038bece825f7fe45905d65a8b0b3.png"}}]);