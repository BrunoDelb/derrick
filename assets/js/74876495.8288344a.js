(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,d=p["".concat(l,".").concat(b)]||p[b]||u[b]||c;return n?r.a.createElement(d,s(s({ref:t},o),{},{components:n})):r.a.createElement(d,s({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},115:function(e,t,n){"use strict";var a=n(0),r=n(116);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},116:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(115),l=n(107),s=n(60),i=n.n(s);const o=37,m=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:u,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:v}=Object(c.a)(),[g,h]=Object(a.useState)(s),j=a.Children.toArray(e.children),f=[];if(null!=u){const e=d[u];null!=e&&e!==g&&p.some((t=>t.value===e))&&h(e)}const y=e=>{const t=e.target,n=f.indexOf(t),a=j[n].props.value;h(a),null!=u&&(v(u,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:c,innerWidth:l}=window;return t>=0&&r<=l&&a<=c&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((()=>t.classList.remove(i.a.tabItemActive)),2e3))}),150))},O=e=>{var t;let n;switch(e.keyCode){case m:{const t=f.indexOf(e.target)+1;n=f[t]||f[0];break}case o:{const t=f.indexOf(e.target)-1;n=f[t]||f[f.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},b)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>f.push(e),onKeyDown:O,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},125:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(106)),l=n(124),s=n(125),i={title:"\u5feb\u901f\u4e0a\u624b",slug:"/"},o={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"\u5feb\u901f\u4e0a\u624b",description:"\u5f00\u59cb\u524d\u8bf7\u9075\u7167 \u5b89\u88c5\u6307\u5357 \u6b65\u9aa4\u5e76\u6210\u529f\u5b89\u88c5 Derrick CLI\u3002",source:"@site/docs/quickstart.mdx",slug:"/",permalink:"/derrick/docs/",editUrl:"https://github.com/alibaba/derrick/edit/master/website/docs/quickstart.mdx",version:"current",sidebar:"docs",previous:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/derrick/docs/installation"},next:{title:"\u652f\u6301\u7684\u8bed\u8a00\u6846\u67b6",permalink:"/derrick/docs/guides/supported-languages"}},m=[{value:"1. \u5c55\u793a\u53ef\u7528\u7684 Riggings",id:"1-\u5c55\u793a\u53ef\u7528\u7684-riggings",children:[]},{value:"2. \u5bb9\u5668\u5316\u4e00\u4e2a Java \u5e94\u7528",id:"2-\u5bb9\u5668\u5316\u4e00\u4e2a-java-\u5e94\u7528",children:[{value:"Dockerfile",id:"dockerfile",children:[]},{value:"Kubernetes, Helm, Kustomize",id:"kubernetes-helm-kustomize",children:[]},{value:"\u591a\u73af\u5883\u7ba1\u7406",id:"\u591a\u73af\u5883\u7ba1\u7406",children:[]}]}],p={toc:m};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u5f00\u59cb\u524d\u8bf7\u9075\u7167 ",Object(c.b)("a",{parentName:"p",href:"./installation"},"\u5b89\u88c5\u6307\u5357")," \u6b65\u9aa4\u5e76\u6210\u529f\u5b89\u88c5 Derrick CLI\u3002"))),Object(c.b)("h2",{id:"1-\u5c55\u793a\u53ef\u7528\u7684-riggings"},"1. \u5c55\u793a\u53ef\u7528\u7684 Riggings"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ derrick list\n\nAvailable riggings:\n    golang\n    java\n    nodejs\n    php\n    python\n")),Object(c.b)("h2",{id:"2-\u5bb9\u5668\u5316\u4e00\u4e2a-java-\u5e94\u7528"},"2. \u5bb9\u5668\u5316\u4e00\u4e2a Java \u5e94\u7528"),Object(c.b)("p",null,"\u9996\u5148 git clone \u4e00\u4e2a\u793a\u4f8b\u5e94\u7528:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hongchaodeng/simple-java-maven-app.git\ncd simple-java-maven-app\n")),Object(c.b)("p",null,"\u7136\u540e\u7528 Derrick \u6765\u81ea\u52a8\u751f\u6210\u5bb9\u5668\u5316\u914d\u7f6e:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"derrick gen\n")),Object(c.b)("p",null,"\u8f93\u51fa\u5982\u4e0b:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"Successfully detected your platform is 'java'\nSuccessfully generated: Dockerfile\nSuccessfully generated: chart/Chart.yaml\nSuccessfully generated: chart/.helmignore\nSuccessfully generated: chart/templates/NOTES.txt\nSuccessfully generated: chart/templates/deployment.yaml\nSuccessfully generated: chart/templates/_helpers.tpl\nSuccessfully generated: chart/templates/hpa.yaml\nSuccessfully generated: chart/templates/ingress.yaml\nSuccessfully generated: chart/templates/service.yaml\nSuccessfully generated: chart/templates/serviceaccount.yaml\nSuccessfully generated: chart/templates/tests/test-connection.yaml\nSuccessfully generated: chart/values-production.yaml\nSuccessfully generated: chart/values-staging.yaml\nSuccessfully generated: chart/values.yaml\nSuccessfully generated: kubernetes/deployment.yaml\nSuccessfully generated: kustomize/base/deployment.yaml\nSuccessfully generated: kustomize/overlays/production/deployment.yaml\nSuccessfully generated: kustomize/overlays/production/kustomization.yaml\nSuccessfully generated: kustomize/overlays/staging/deployment.yaml\nSuccessfully generated: kustomize/overlays/staging/kustomization.yaml\nSuccessfully generated: derrick.json\n")),Object(c.b)("p",null,"\u8fd9\u91cc\u6211\u4eec\u628a\u8f93\u51fa\u6837\u4f8b\u4e5f\u4e0a\u4f20\u5230 Github \u4e0a\u4ee5\u4f9b\u53c2\u8003\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hongchaodeng/simple-java-maven-app/blob/master/Dockerfile"},"Dockerfile")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hongchaodeng/simple-java-maven-app/tree/master/chart"},"chart")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hongchaodeng/simple-java-maven-app/tree/master/kustomize"},"kustomize")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hongchaodeng/simple-java-maven-app/tree/master/kubernetes"},"kubernetes"))),Object(c.b)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u6df1\u5165\u89e3\u8bfb\u751f\u6210\u7684\u914d\u7f6e\u3002"),Object(c.b)("h3",{id:"dockerfile"},"Dockerfile"),Object(c.b)("p",null,"\u751f\u6210\u7684 Dockerfile \u5982\u4e0b:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-Dockerfile"},'# First stage: build environment\nFROM maven:3.5.0-jdk-8-alpine AS builder\n\n# To resolve dependencies first without re-download everytime\nADD ./pom.xml pom.xml\n# By default mvn use \'~/.m2\' which could be cleaned up, change to use \'./.m2\'\nRUN mvn install -Dmaven.repo.local=./.m2\n\nADD ./src src/\n# package jar\nRUN mvn install -Dmaven.test.skip=true -Dmaven.repo.local=./.m2\n\n# Second stage: runtime environment\nFrom openjdk:15\n\n# copy jar from the first stage\nCOPY --from=builder target/my-app-1.0-SNAPSHOT.jar my-app-1.0-SNAPSHOT.jar\n\n# MY_CPU_LIMIT could be imported via downward API automatically in Kubernetes Deployment.\nCMD ["java", \\\n  "-XX:InitialRAMPercentage=75", \\\n  "-XX:MaxRAMPercentage=75", \\\n  "-XX:MinRAMPercentage=25", \\\n  "-XX:ActiveProcessorCount=$MY_CPU_LIMIT", \\\n  "-jar", "my-app-1.0-SNAPSHOT.jar"]\n')),Object(c.b)("p",null,"Derrick \u505a\u4e86\u5982\u4e0b\u4f18\u5316:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5206\u6210\u4e86 build \u548c runtime \u4e24\u4e2a stages\u3002\u8fd9\u6837 runtime image \u4e0d\u4f1a\u5f15\u5165 build \u7684\u5185\u5bb9\uff0c\u7f29\u5c0f\u6700\u7ec8\u90e8\u7f72\u7684 image size\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86\u793e\u533a\u5e7f\u53d7\u6b22\u8fce\u548c\u652f\u6301\u826f\u597d\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"openjdk")," \u4f5c\u4e3a runtime \u7684 base image\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4f18\u5316\u4e86\u4f9d\u8d56\u7684\u7f13\u5b58\u3002\u8fd9\u6837\u5f53\u91cd\u65b0\u6784\u5efa\u65f6\u65e0\u9700\u91cd\u590d\u5b89\u88c5\u5df2\u7f13\u5b58\u7684\u4f9d\u8d56\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4ece pom.xml \u4e2d\u81ea\u52a8\u89e3\u6790 artifact name\u3002")),Object(c.b)("h3",{id:"kubernetes-helm-kustomize"},"Kubernetes, Helm, Kustomize"),Object(c.b)("p",null,"Derrick \u81ea\u52a8\u6784\u5efa\u4e86\u7528\u4e8e\u90e8\u7f72\u5230 Kubernetes \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6709\u4ee5\u4e0b\u76ee\u5f55\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"kubernetes/\nchart/\nkustomize/\n")),Object(c.b)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u5c55\u793a\u4e0b helm chart \u548c kustomize \u7684\u8f93\u51fa:"),Object(c.b)(l.a,{className:"unique-tabs",defaultValue:"helm",values:[{label:"Helm Chart",value:"helm"},{label:" Kustomize",value:"kustomize"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"helm",mdxType:"TabItem"},Object(c.b)("p",null,"\u5bf9\u4e8e helm chart\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u8f93\u51fa:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd chart/\nhelm template test .\n")),Object(c.b)("p",null,"\u5f97\u5230\u8f93\u51fa\u5982\u4e0b:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: test-simple-java-maven-app\n  labels:\n    helm.sh/chart: simple-java-maven-app-0.1.0\n    app.kubernetes.io/name: simple-java-maven-app\n    app.kubernetes.io/instance: test\n    app.kubernetes.io/version: "1.16.0"\n    app.kubernetes.io/managed-by: Helm\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: simple-java-maven-app\n      app.kubernetes.io/instance: test\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: simple-java-maven-app\n        app.kubernetes.io/instance: test\n    spec:\n      serviceAccountName: test-simple-java-maven-app\n      containers:\n        - name: simple-java-maven-app\n          image: "your-image"\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: MY_CPU_REQUEST\n              valueFrom:\n                resourceFieldRef:\n                  containerName: java-app\n                  resource: requests.cpu\n            ...\n          ports:\n            - name: http\n              containerPort: 80\n              protocol: TCP\n          livenessProbe:\n            tcpSocket:\n              port: 80\n            ...\n          readinessProbe:\n            ...\n          resources:\n            limits:\n              cpu: 2\n              memory: 1500M\n            requests:\n              cpu: 1\n              memory: 1500M\n'))),Object(c.b)(s.a,{value:"kustomize",mdxType:"TabItem"},Object(c.b)("p",null,"\u5bf9\u4e8e Kustomize\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u8f93\u51fa:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd kustomize\nkustomize build kustomize/overlays/prod\n")),Object(c.b)("p",null,"\u5f97\u5230\u8f93\u51fa\u5982\u4e0b:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: simple-java-maven-app\n    tier: production\n  name: prod-simple-java-maven-app\nspec:\n  selector:\n    matchLabels:\n      app: simple-java-maven-app\n      tier: production\n  template:\n    metadata:\n      labels:\n        app: simple-java-maven-app\n        tier: production\n    spec:\n      containers:\n      - ...\n        image: your-image\n        name: java-app\n        resources:\n          limits:\n            cpu: 2\n            memory: 2000M\n          requests:\n            cpu: 1\n            memory: 1500M\n")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u751f\u6210\u7684\u90e8\u7f72\u6587\u4ef6\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u4e0a\u624b\u5bb9\u5668\u5316\u914d\u7f6e\u3002\u4f46\u771f\u6b63\u90e8\u7f72\u8d77\u6765\u8fd8\u9700\u8981\u4f60\u53bb\u6784\u5efa\u955c\u50cf\uff0c\u5e76\u628a\u955c\u50cf\u540d\u7b49\u586b\u5165\u5bf9\u5e94\u7684\u5b57\u6bb5\u4e2d\u3002\n\u5982\u679c\u4f60\u4f7f\u7528",Object(c.b)("a",{parentName:"p",href:"/docs/guides/middleware"},"\u4e91\u4e2d\u95f4\u4ef6")," \u5982 AHAS/MSE/ARMS \u7b49\uff0c\u8fd8\u9700\u8981\u5728 annotations \u4e2d\u586b\u5165 app-name\u3002"))),Object(c.b)("h3",{id:"\u591a\u73af\u5883\u7ba1\u7406"},"\u591a\u73af\u5883\u7ba1\u7406"),Object(c.b)("p",null,"Derrick \u9ed8\u8ba4\u63d0\u4f9b\u4e86 dev/prod \u4e24\u4e2a\u73af\u5883\u7684\u90e8\u7f72\u6a21\u677f\u3002\u5229\u7528 helm/kustomize \u7684\u80fd\u529b\u53ef\u4ee5\u66f4\u597d\u5730\u5bf9\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u8fdb\u884c\u66f4\u597d\u5730\u91cd\u7528\u548c\u7ba1\u7406\u3002"))}u.isMDXComponent=!0}}]);