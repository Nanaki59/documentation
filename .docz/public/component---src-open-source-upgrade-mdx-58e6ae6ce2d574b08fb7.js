(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ymrT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return h}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),o=a("TjRS");a("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/open-source/upgrade.mdx"}});var l={_frontmatter:r},d=o.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(d,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"upgrade"},"Upgrade"),Object(n.b)("p",null,"To upgrade your Kerberos agent to a new version you should follow the approach which fits your initial installation method. If you installed KiOS follow the KiOS upgrade procedure, if installed on Raspbian follow the Raspbian upgrade procedure, etc."),Object(n.b)("p",null,"Please note that it might be possible that some new files are added or existing files were updated. To make sure everything works as expected, you should clear your browser cache."),Object(n.b)("h2",{id:"kios"},"KiOS"),Object(n.b)("p",null,"If you installed KiOS, you can use the built-in upgrade method, ",Object(n.b)("inlineCode",{parentName:"p"},"fwupdate"),". The ",Object(n.b)("inlineCode",{parentName:"p"},"fwupdate")," command is a shell script which contains a couple of functions. For example it allows you to download, extract and flash a new version of KiOS to your SD card. The process is pretty straight forward."),Object(n.b)("p",null,"First SSH or connect to KiOS first, and execute following command to see your current version."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":"bash"},Object(n.b)("code",i({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",i({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",i({parentName:"span"},{className:"mtk1"}),"fwupdate current")))),Object(n.b)("p",null,"Next look for all available versions of KiOS."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":"bash"},Object(n.b)("code",i({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",i({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",i({parentName:"span"},{className:"mtk1"}),"fwupdate versions")))),Object(n.b)("p",null,"Select the version to which you would like to upgrade, and run following command."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":"bash"},Object(n.b)("code",i({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",i({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",i({parentName:"span"},{className:"mtk1"}),"fwupdate upgrade <version>")))),Object(n.b)("p",null,"KiOS will reboot, and your new version will be available."),Object(n.b)("h2",{id:"raspbian"},"Raspbian"),Object(n.b)("p",null,"If you want to install a new version of the Kerberos agent for Raspbian, there is no automated versioning process available like KiOS. To perform an upgrade you'll need to follow the ",Object(n.b)("a",i({parentName:"p"},{href:"/opensource/installation#raspbian"}),"traditional installation")," procedure of Raspbian."),Object(n.b)("h2",{id:"docker"},"Docker"),Object(n.b)("p",null,"When a new release is available, a new Docker image will be available on the Docker hub. You can simply delete your existing container and image, and download it again."),Object(n.b)("style",{className:"vscode-highlight-styles"},"\n  :root {\n  --vscode-highlight-padding-v: 1rem;\n  --vscode-highlight-padding-h: 1.5rem;\n  --vscode-highlight-padding-top: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-right: var(--vscode-highlight-padding-h);\n  --vscode-highlight-padding-bottom: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-left: var(--vscode-highlight-padding-h);\n  --vscode-highlight-border-radius: 8px;\n\n  --vscode-highlight-line-highlighted-background-color: transparent;\n  --vscode-highlight-line-highlighted-border-width: 4px;\n  --vscode-highlight-line-highlighted-border-color: transparent;\n}\n\n.vscode-highlight {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 1rem;\n  padding-top: var(--vscode-highlight-padding-top);\n  padding-bottom: 1rem;\n  padding-bottom: var(--vscode-highlight-padding-bottom);\n  border-radius: 8px;\n  border-radius: var(--vscode-highlight-border-radius);\n  font-feature-settings: normal;\n}\n\n.vscode-highlight-code {\n  display: inline-block;\n  min-width: 100%;\n}\n\n.vscode-highlight-line {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 1.5rem;\n  padding-left: var(--vscode-highlight-padding-left);\n  padding-right: 1.5rem;\n  padding-right: var(--vscode-highlight-padding-right);\n}\n\n.vscode-highlight-line-highlighted {\n  background-color: var(--vscode-highlight-line-highlighted-background-color);\n  box-shadow: inset var(--vscode-highlight-line-highlighted-border-width) 0 0 0 var(--vscode-highlight-line-highlighted-border-color);\n}\n\n  .default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.default-dark .mtk1 { color: #D4D4D4; }\n.default-dark .mtk2 { color: #1E1E1E; }\n.default-dark .mtk3 { color: #6A9955; }\n.default-dark .mtk4 { color: #569CD6; }\n.default-dark .mtk5 { color: #D16969; }\n.default-dark .mtk6 { color: #D7BA7D; }\n.default-dark .mtk7 { color: #B5CEA8; }\n.default-dark .mtk8 { color: #CE9178; }\n.default-dark .mtk9 { color: #646695; }\n.default-dark .mtk10 { color: #4EC9B0; }\n.default-dark .mtk11 { color: #DCDCAA; }\n.default-dark .mtk12 { color: #9CDCFE; }\n.default-dark .mtk13 { color: #000080; }\n.default-dark .mtk14 { color: #F44747; }\n.default-dark .mtk15 { color: #C586C0; }\n.default-dark .mtk16 { color: #6796E6; }\n.default-dark .mtk17 { color: #808080; }\n.default-dark .mtki { font-style: italic; }\n.default-dark .mtkb { font-weight: bold; }\n.default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/open-source/upgrade.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-open-source-upgrade-mdx-58e6ae6ce2d574b08fb7.js.map