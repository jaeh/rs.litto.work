function e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i})}return e}function t(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function n(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(()=>{let{h:r,app:i}=(()=>{var e={},t=[],n=t.map,r=Array.isArray,i="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,a=function(e){var t="";if("string"==typeof e)return e;if(r(e)&&e.length>0)for(var n,i=0;i<e.length;i++)""!==(n=a(e[i]))&&(t+=(t&&" ")+n);else for(var i in e)e[i]&&(t+=(t&&" ")+i);return t},l=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},o=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:o(t):0)},t)},s=function(e,t){if(e!==t)for(var n in l(e,t)){var i,a;if(e[n]!==t[n]&&(i=e[n],a=t[n],!(r(i)&&r(a))||i[0]!==a[0]||"function"!=typeof i[0]))return!0;t[n]=e[n]}},c=function(e,t,n){for(var r,i,a=0,l=[];a<e.length||a<t.length;a++)r=e[a],l.push((i=t[a])?!r||i[0]!==r[0]||s(i[1],r[1])?[i[0],i[1],i[0](n,i[1]),r&&r[2]()]:r:r&&r[2]());return l},u=function(e,t,n,r,i,o){if("key"===t);else if("style"===t)for(var s in l(n,r))n=null==r||null==r[s]?"":r[s],"-"===s[0]?e[t].setProperty(s,n):e[t][s]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=r)?n||e.addEventListener(t,i):e.removeEventListener(t,i):!o&&"list"!==t&&t in e?e[t]=null==r?"":r:null!=r&&!1!==r&&("class"!==t||(r=a(r)))?e.setAttribute(t,r):e.removeAttribute(t)},p=function(e,t,n){var r=e.props,i=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:r.is}):document.createElement(e.name,{is:r.is});for(var a in r)u(i,a,null,r[a],t,n);for(var l=0,o=e.children.length;l<o;l++)i.appendChild(p(e.children[l]=g(e.children[l]),t,n));return e.node=i},f=function(e){return null==e?null:e.key},d=function(e,t,n,r,i,a){if(n===r);else if(null!=n&&3===n.type&&3===r.type)n.name!==r.name&&(t.nodeValue=r.name);else if(null==n||n.name!==r.name)t=e.insertBefore(p(r=g(r),i,a),t),null!=n&&e.removeChild(n.node);else{var o,s,c,h,m=n.props,y=r.props,b=n.children,v=r.children,w=0,O=0,S=b.length-1,E=v.length-1;for(var A in a=a||"svg"===r.name,l(m,y))("value"===A||"selected"===A||"checked"===A?t[A]:m[A])!==y[A]&&u(t,A,m[A],y[A],i,a);for(;O<=E&&w<=S&&null!=(c=f(b[w]))&&c===f(v[O]);)d(t,b[w].node,b[w],v[O]=g(v[O++],b[w++]),i,a);for(;O<=E&&w<=S&&null!=(c=f(b[S]))&&c===f(v[E]);)d(t,b[S].node,b[S],v[E]=g(v[E--],b[S--]),i,a);if(w>S)for(;O<=E;)t.insertBefore(p(v[O]=g(v[O++]),i,a),(s=b[w])&&s.node);else if(O>E)for(;w<=S;)t.removeChild(b[w++].node);else{for(var A=w,j={},k={};A<=S;A++)null!=(c=b[A].key)&&(j[c]=b[A]);for(;O<=E;){if(c=f(s=b[w]),h=f(v[O]=g(v[O],s)),k[c]||null!=h&&h===f(b[w+1])){null==c&&t.removeChild(s.node),w++;continue}null==h||1===n.type?(null==c&&(d(t,s&&s.node,s,v[O],i,a),O++),w++):(c===h?(d(t,s.node,s,v[O],i,a),k[h]=!0,w++):null!=(o=j[h])?(d(t,t.insertBefore(o.node,s&&s.node),o,v[O],i,a),k[h]=!0):d(t,s&&s.node,null,v[O],i,a),O++)}for(;w<=S;)null==f(s=b[w++])&&t.removeChild(s.node);for(var A in j)null==k[A]&&t.removeChild(j[A].node)}}return r.node=t},h=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},m=function(e){return"object"==typeof e?e:b(e)},g=function(e,t){return 2===e.type?((!t||!t.lazy||h(t.lazy,e.lazy))&&((t=m(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},y=function(e,t,n,r,i,a){return{name:e,props:t,children:n,node:r,type:a,key:i}},b=function(n,r){return y(n,e,t,r,void 0,3)},v=function(t){return 3===t.nodeType?b(t.nodeValue,t):y(t.nodeName.toLowerCase(),e,n.call(t.childNodes,v),t,void 0,1)};return{h:function(t,n){for(var i,a=[],l=[],o=arguments.length;o-- >2;)a.push(arguments[o]);for(;a.length>0;)if(r(i=a.pop()))for(var o=i.length;o-- >0;)a.push(i[o]);else!1===i||!0===i||null==i||l.push(m(i));return n=n||e,"function"==typeof t?t(n,l):y(t,n,l,void 0,n.key)},app:function(e){var t={},n=!1,a=e.view,l=e.node,s=l&&v(l),u=e.subscriptions,p=[],f=function(e){y(this.actions[e.type],e)},h=function(e){return t!==e&&(t=e,u&&(p=c(p,o([u(t)]),y)),a&&!n&&i(b,n=!0)),t};let{middleware:g=e=>e}=e,y=g((e,n)=>"function"==typeof e?y(e(t,n)):r(e)?"function"==typeof e[0]||r(e[0])?y(e[0],"function"==typeof e[1]?e[1](n):e[1]):(o(e.slice(1)).map(function(e){e&&e[0](y,e[1])},h(e[0])),t):h(e));var b=function(){n=!1,l=d(l.parentNode,l,s,s=m(a(t)),f)};y(e.init)}}})(),a=e=>(t={},n)=>{let i=(e,...t)=>t.some(t=>t===typeof e);if(i(n,"undefined")){if(t.props)return r(e,{},[t]);i(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):i(t.View,"function")&&(n=t.View,t={})}return r(e,t,n)},l=a("a");a("abbr"),a("address"),a("animate"),a("animateMotion"),a("animateTransform"),a("area"),a("article"),a("aside"),a("audio"),a("b"),a("base"),a("bdi"),a("bdo"),a("blockquote"),a("body"),a("br"),a("button"),a("canvas"),a("caption"),a("circle"),a("cite"),a("clipPath"),a("code"),a("col"),a("colgroup"),a("data"),a("datalist"),a("dd"),a("defs"),a("del"),a("desc"),a("description"),a("details"),a("dfn"),a("dialog"),a("discard");let o=a("div");a("dl"),a("dt"),a("ellipse"),a("em"),a("embed"),a("feBlend"),a("feColorMatrix"),a("feComponentTransfer"),a("feComposite"),a("feConvolveMatrix"),a("feDiffuseLighting"),a("feDisplacementMap"),a("feDistantLight"),a("feDropShadow"),a("feFlood"),a("feFuncA"),a("feFuncB"),a("feFuncG"),a("feFuncR"),a("feGaussianBlur"),a("feImage"),a("feMerge"),a("feMergeNode"),a("feMorphology"),a("feOffset"),a("fePointLight"),a("feSpecularLighting"),a("feSpotLight"),a("feTile"),a("feTurbulence"),a("fieldset"),a("figcaption"),a("figure"),a("filter");let s=a("footer");a("foreignObject"),a("form"),a("g"),a("h1");let c=a("h2"),u=a("h3");a("h4"),a("h5"),a("h6"),a("hatch"),a("hatchpath"),a("head");let p=a("header");a("hgroup"),a("hr"),a("html"),a("i"),a("iframe"),a("image");let f=a("img");a("input"),a("ins"),a("kbd"),a("label"),a("legend");let d=a("li");a("line"),a("linearGradient"),a("link");let h=a("main");a("map"),a("mark"),a("marker"),a("mask"),a("mesh"),a("meshgradient"),a("meshpatch"),a("meshrow"),a("meta"),a("metadata"),a("meter"),a("mpath");let m=a("nav");a("noscript"),a("object"),a("ol"),a("optgroup"),a("option"),a("output");let g=a("p");a("param"),a("path"),a("pattern");let y=a("picture");a("polygon"),a("polyline"),a("pre"),a("progress"),a("q"),a("radialGradient"),a("rb"),a("rect"),a("rp"),a("rt"),a("rtc"),a("ruby"),a("s"),a("samp"),a("script"),a("section"),a("select"),a("set"),a("small"),a("solidcolor");let b=a("source"),v=a("span");a("stop"),a("strong"),a("style"),a("sub"),a("summary"),a("sup"),a("svg"),a("symbol"),a("table"),a("tbody"),a("td"),a("template"),a("text"),a("textPath"),a("textarea"),a("tfoot"),a("th"),a("thead"),a("time"),a("title"),a("tr"),a("track"),a("tspan"),a("u");let w=a("ul");a("unknown"),a("use"),a("video"),a("view"),a("wbr");let O=()=>o({class:"Announcement"},[I({name:"/img/branding",height:237,width:800}),g(["Augmented Reality Installation by ",L({to:"https://litto.work/"},"litto")]),g("@Medienwerkstatt"),g("Neubaugasse 40a, 1070 Vienna"),g("17.06. - 29.06. / 5pm - 8pm"),g("Vernissage: 16.06. / 7pm"),g("Finissage: 30.06. / 7pm"),o({class:"description"},["Reterritorialized Spaces is a hybrid performance in public space ","entailing one performer projecting real space into virtual space ","by scanning with a LIDAR scanner through a mirror. ","The mirror breaks the geometric and perspective properties of space, ","resulting in experimental forms of spatial perception. ","In addition, the movement of the performer and the interaction ","with the audience influence the course of the performance. ","A virtual monument accessible with augmented reality on the ",L({to:"https://artificialmuseum.com/"},"artificialmuseum.com")," will remain."])]),S=()=>P({class:"Arrow",src:"/img/arrow.png",height:60,width:30,alt:""}),E=e=>o({class:"ArtifactListItem"},[S(),u(e.title),o({class:"date"},e.date),o({class:"latlng"},[e.lat,", ",e.lng])]),A=()=>o({class:"Credits"},["made with a few bits of ",L({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),j=(e,t=[])=>s({class:"Footer"},[o({class:"Container"},[A(),t])]),k=(e={},t=[])=>{let{logo:n,menu:r,logotext:i,root:a,theme:l,hash:o,url:s}=e;if(n||r||i)return p({class:"Header"},[(n||i)&&M({root:a,theme:l,logo:n,logotext:i}),r&&D({url:s,hash:o,menu:r}),t])},P=e=>{if("string"==typeof e&&(e={src:e}),e.src)return e.alt||(e.title?e.alt=e.title:(e.role="presentation",e.alt="",e.loading=e.loading||"lazy")),f(e)},L=(e,t)=>{var{to:r,action:i=x.go,text:a}=e,o=n(e,["to","action","text"]);let{href:s,nofollow:c,noreferrer:u}=o,p=n(o,["href","nofollow","noreferrer"]);r=r||s||"",p.href=r,a&&t?a=[a,t]:a||(a=t||r);let f="/"===r[0]||"#"===r[0];return f?p.onclick=[i,V.preventDefault]:(p.target="_blank",p.rel="noopener",c&&(p.rel+=" nofollow"),u&&(p.rel+=" noreferrer")),l(p,a)},M=({logo:e,logotext:t,root:n})=>L({to:n,class:"Logo"},[e&&P(e),t&&v(t)]),D=(n={})=>{let{collapse:r=!0,menu:i,hash:a}=n,{class:l="",url:o}=n;return l.includes("Menu")||(l=`Menu ${l}`.trim()),a&&!o.endsWith(a)&&(o+=`#${a}`),m({className:l},w(i.map(n=>C(t(e({},n),{url:o,collapse:r})))))},C=t=>{let{collapse:r,items:i=[],text:a,url:l}=t,o=n(t,["collapse","items","text","url"]),s={class:{}},{to:c}=o;c===l&&(s.class.active=!0);let u=[],p=!r||l.includes(c);return p&&i.length&&(u=w(i.map(t=>C(e({url:l,collapse:r},t))))),d(s,[c?L(o,a):v(o,a),u])},T=({page:e,state:t},n)=>{let r={id:"Magic",class:t.pageClass};return h(r,o({class:{Wrapper:!0}},[k(t),o({class:"Page",id:"page"},e(t)),j(t),n]))},I=e=>{let{ext:t="jpg",imgClass:n="",width:r,height:i,alt:a="",role:l,lazy:o=!0,avif:s=!0}=e,{name:c}=e,u={};return e.class?(u.class=e.class,u.class.includes("Picture")||(u.class=`Picture ${u.class}`)):u.class="Picture",y(u,[s&&b({type:"image/avif",srcset:`${c}.avif`}),b({type:"image/webp",srcset:`${c}.webp`}),f({class:n,width:r,height:i,loading:o&&"lazy",alt:a,role:l||!a&&"presentation",src:`${c}.${t}`})])},N=({artifacts:e,year:t})=>o({class:"Year"},[P({src:"/img/lines.png",class:"Lines",height:4,width:300}),c(t),I({class:"Preview",name:`/img/graphic_${t}`,height:1180,width:1920}),o(e.map(E))]),V={preventDefault:e=>(e.preventDefault(),e)},x={go:(n,r)=>{let i=r.currentTarget.href.replace(window.location.origin,""),[a,l=""]=i.split("#");if(a===n.url&&l===n.hash)return l&&(window.location.hash=l),n;let o=n.pages&&n.pages[a]&&n.pages[a].title;o&&(document.title=n.title=o),a!==n.url?l||window.scrollTo({top:0}):window.location.hash=l;let{scrollY:s}=window;return window.history.pushState({url:a,hash:l,scrollY:s},n.title,i),t(e({},n),{url:a,hash:l,prev:n.url})},nospy:{toggle:t=>(t.nospy.show=!t.nospy.show,e({},t))},pop:(n,r)=>{let{pathname:i,hash:a}=window.location;a=a.substring(1);let l=0;return r.state&&(i=r.state.url,a=r.state.hash,l=r.state.scrollY||0),a?window.location.hash=a:window.scroll({top:l}),t(e({},n),{url:i,hash:a})}},z={listenPopState:(e,t)=>{let n=n=>e(t,n);return addEventListener("popstate",n),()=>removeEventListener("popstate",n)}},B={"/":e=>{let t=Object.entries(e.artifacts);return[I({name:"/img/hero",height:1e3,width:2e3}),O(),t.map(([e,t])=>N({year:e,artifacts:t}))]},"/404/":()=>o("404 - not found.")};i({init:t(e({},{artifacts:{2021:[{date:"2021-08-03",lat:48.2181,lng:16.3333,title:"SANDKASTEN, Vienna"},{date:"2021-08-27",lat:47.5651,lng:7.6011,title:"MESSEHALLE, Basel"},{date:"2021-08-27",lat:47.5779,lng:7.5858,title:"LANDESSTELLE, Basel"}],2022:[{date:"2022-03-07",lat:51.1135,lng:13.7531,title:"BUNKER, Dresden"},{date:"2022-07-25",lat:46.6278,lng:10.7662,title:"BASIS, Schlanders"},{date:"2022-09-06",lat:48.2362,lng:16.3205,title:"SEMMELWEISKLINIK, Vienna"},{date:"2022-09-17",lat:47.6847,lng:13.0931,title:"SCHMIEDE, Hallein"}],2023:[{date:"2023-06-21, 19:00",lat:48.1884,lng:16.3306,title:"AA Collection, Vienna"},{date:"2023-06-27, 11:30",lat:48.2084,lng:16.3843,title:"VZA 7, Vienna"},{date:"2023-06-28, 19:00",lat:48.2042,lng:16.3582,title:"MuseumsQuartier Raum D, Vienna"},{date:"2023-06-30, 19:30",lat:48.2016,lng:16.3491,title:"MEDIENWERKSTATT, Vienna"}]},description:"Augmented Reality Installation @Medienwerkstatt, Neubaugasse 40A, 1070 Vienna. Opening: 16.06. 7pm",nospy:{show:!1},pageClass:{},pages:{"/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/",title:"Reterritorialized Spaces",url:"/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:e=>[[z.listenPopState,x.pop]],view:e=>{let t=B[e.url]?e.url:"/404/",n=B[t],r=e.pages&&e.pages[t];return r&&Object.keys(r).forEach(t=>{e[t]=r[t]}),e.url=t,T({page:n,state:e})},node:document.getElementById("Magic")})})();