(function(){var h={},mt={},c={id:"c68f8a95996223c018465c5143d0bdea",dm:["学海云端.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[[6634, 2]],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,s=null,v=!1;mt.j={};mt.j.W=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.j.Ba=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.j.cookieEnabled=navigator.cookieEnabled;mt.j.javaEnabled=navigator.javaEnabled();mt.j.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.j.Ga=(window.screen.width||0)+"x"+(window.screen.height||0);mt.j.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.J&&(b=new Date,b.setTime(b.getTime()+e.J));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.$a?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:s};mt.r={};mt.r.S=function(a){return document.getElementById(a)};mt.r.Ua=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return s};
(mt.r.O=function(){function a(){if(!a.D){a.D=r;for(var d=0,f=b.length;d<f;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=v,b=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,v);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!e)if(e=r,"complete"===document.readyState)a.D=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
f,v),window.addEventListener("load",a,v);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var b=v;try{b=window.frameElement==s}catch(l){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.D?d():b.push(d)}}()).D=v;mt.event={};mt.event.c=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,v)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=v};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===s)return"null";if(b instanceof Array){var f=["["],e=b.length,l,g,k;for(g=0;g<e;g++)switch(k=b[g],typeof k){case "undefined":case "function":case "unknown":break;default:l&&f.push(","),f.push(mt.l.stringify(k)),l=1}f.push("]");return f.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';l=["{"];g=mt.l.stringify;for(e in b)if(Object.prototype.hasOwnProperty.call(b,e))switch(k=
b[e],typeof k){case "undefined":case "unknown":case "function":break;default:f&&l.push(","),f=1,l.push(g(e)+":"+g(k))}l.push("}");return l.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Xa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Za=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.H=function(){if(!mt.localStorage.g)try{mt.localStorage.g=document.createElement("input"),mt.localStorage.g.type="hidden",mt.localStorage.g.style.display="none",mt.localStorage.g.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)}catch(a){return v}return r};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.H()&&(mt.localStorage.g.expires=b.toUTCString(),mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.setAttribute(a,d),mt.localStorage.g.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.H())try{return mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.getAttribute(a)}catch(b){}return s};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.H())try{mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.removeAttribute(a),mt.localStorage.g.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):s};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.Q={};mt.Q.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=s;e=window[b]=s;d&&d(a)};e.src=a};mt.G={};
mt.G.ta=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.G.ga=function(a,d,e,b,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="../学海云端网上书店-网上买书的网站,网购图书商城_files/'+d+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="../学海云端网上书店-网上买书的网站,网购图书商城_files/'+d+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:s};mt.url.Wa=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:s};mt.url.pa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):s};mt.url.U=function(a){return(a=mt.url.pa(a))?a.replace(/:\d+$/,""):a};mt.url.Va=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):s};
h.o={Aa:"http://tongji.baidu.com/hm-web/welcome/ico",$:"hm.baidu.com/hm.gif",da:"baidu.com",xa:"hmmd",ya:"hmpl",wa:"hmkw",ua:"hmci",za:"hmsr",va:"hmcu",w:0,m:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Ya:0,Qa:6E5,Ra:10,Sa:1024,Pa:1,A:2147483647,aa:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={p:{},c:function(a,e){this.p[a]=this.p[a]||[];this.p[a].push(e)},B:function(a,e){this.p[a]=this.p[a]||[];for(var b=this.p[a].length,f=0;f<b;f++)this.p[a][f](e)}};return h.s=a})();
(function(){function a(a,b){var f=document.createElement("script");f.charset="utf-8";d.d(b,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=s,b()}:f.onload=function(){b()});f.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(f,m)}var d=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,a):d.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?e.get("Hm_from_"+c.id):d.get("Hm_from_"+c.id))||"";return a}var d=mt.localStorage,e=mt.sessionStorage;return h.R=a})();
(function(){var a=h.o,d=mt.G,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var f=a.Aa+"?s="+c.id,e=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.ga("HolmesIcon"+a.m,e,b[2],b[3],"s="+f);break;case "gif":b='<a href="../学海云端网上书店-网上买书的网站,网购图书商城_files/'+f+'" target="_blank"><img border="0" src="../学海云端网上书店-网上买书的网站,网购图书商城_files/'+e+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="../学海云端网上书店-网上买书的网站,网购图书商城_files/'+f+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.s.c("pv-b",e.init);return e})();
(function(){var a=mt.r,d=h.o,e=h.load,b=h.R;h.s.c("pv-b",function(){c.rec&&a.O(function(){for(var f=0,m=c.rp.length;f<m;f++){var l=c.rp[f][0],g=c.rp[f][1],k=a.S("hm_t_"+l);if(g&&!(2==g&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*d.A),k=4==g?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+l,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+l,"from="+b(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),e(k)}})})})();(function(){var a=h.o,d=h.load,e=h.R;h.s.c("pv-b",function(){if(c.trust&&c.vcard){var b=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*a.A),"hm=1"].join("&");d(b)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.I.ra()+","+h.I.oa();h.b.i()}}function d(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);g="undefined"==typeof a?r:a;if((!l||!k)&&g&&n)w=r,p=+new Date;else if(l&&k&&(!g||!n))w=v,t+=+new Date-p;l=g;k=n;y=setTimeout(d,100)}function e(a){var k=document,p="";if(a in k)p=a;else for(var b=["webkit","ms","moz","o"],d=0;d<b.length;d++){var f=b[d]+a.charAt(0).toUpperCase()+a.slice(1);if(f in k){p=
f;break}}return p}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))n="focus"==a.type||"focusin"==a.type?r:v,d()}var f=mt.event,m=h.s,l=r,g=r,k=r,n=r,u=+new Date,p=u,t=0,w=r,x=e("visibilityState"),z=e("hidden"),y;d();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");f.c(document,a,d);f.c(window,"pageshow",d);f.c(window,"pagehide",d);"object"==typeof document.onfocusin?(f.c(document,"focusin",b),f.c(document,"focusout",b)):(f.c(window,"focus",b),
f.c(window,"blur",b))})();h.I={ra:function(){return+new Date-u},oa:function(){return w?+new Date-p+t:t}};m.c("pv-b",function(){f.c(window,"unload",a())});return h.I})();
(function(){var a=mt.lang,d=h.o,e=h.load,b={Ca:function(b){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.K();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),b)}},Na:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ha=b})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var d=k[b];e.d(d,"Object")||e.d(d,"Array")?a(d):k[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.l,f=h.o,m=h.s,l=h.ha,g={z:[],F:0,Y:v,init:function(){g.e=0;m.c("pv-b",function(){g.ia();g.la()});m.c("pv-d",g.ma);m.c("stag-b",function(){h.b.a.api=g.e||g.F?g.e+"_"+g.F:""});m.c("stag-d",function(){h.b.a.api=0;g.e=0;g.F=0})},ia:function(){var a=window._hmt||
[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var p=arguments[k];e.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},la:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,f=b.length;p<f;p++){var e=b[p];
d.test(e[0])?g.z.push(e):g.N(e)}a.cmd[c.id]={push:g.N}},ma:function(){if(0<g.z.length)for(var a=0,b=g.z.length;a<b;a++)g.N(g.z[a]);g.z=s},N:function(a){var b=a[0];if(g.hasOwnProperty(b)&&e.d(g[b],"Function"))g[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],v===a||r===a))g.e|=2,h.b.V=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.L?(h.b.a.nv=0,h.b.a.st=
4):h.b.L=r;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=f.protocol+"//"+document.location.host+a[1];g.Y||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(g.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){g.F++;for(var p=(h.b.a.cv||"*").split("!"),f=p.length;f<b-1;f++)p.push("*");p[b-1]=e+"*"+d(a[2])+
"*"+d(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Fa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],g.Y=r)},_trackOrder:function(d){d=d[1];e.d(d,"Object")&&(a(d),g.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.i())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(d){d=d[1];e.d(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(g.e|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.d(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var n=function(a){var b=h.b.a.rt;g.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},m=d.length;if(900>=m)n.call(this,d);else for(var m=Math.ceil(m/900),p="block|"+Math.round(Math.random()*
f.A).toString(16)+"|"+m+"|",t=[],l=0;l<m;l++)t.push(l),t.push(d.substring(900*l,900*l+900)),n.call(this,p+t.join("|")),t=[]}},_setUserId:function(a){a=a[1];l.Ca();l.Na(a)}};g.init();h.ea=g;return h.ea})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.V=r,this.L=v,this.init())}var d=mt.url,e=mt.Q,b=mt.G,f=mt.lang,m=mt.cookie,l=mt.j,g=mt.localStorage,k=mt.sessionStorage,n=h.o,u=h.s;a.prototype={M:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Z:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},C:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.Z(a,c.dm[b]))return r}else{var e=d.U(a);if(e&&this.M(e,c.dm[b]))return r}return v},K:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.M(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},T:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Z(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},sa:function(){if(!document.referrer)return n.m-n.w>c.vdur?1:4;var a=
v;this.C(document.referrer)&&this.C(document.location.href)?a=r:(a=d.U(document.referrer),a=this.M(a||"",document.location.hostname));return a?n.m-n.w>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||k.get(a)||g.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.K(),path:this.T(),J:d}),d?g.set(a,b,d):k.set(a,b)}catch(e){}},Fa:function(a){try{m.set(a,"",{domain:this.K(),path:this.T(),J:-1}),k.remove(a),g.remove(a)}catch(b){}},La:function(){var a,b,d,e,f;n.w=this.getData("Hm_lpvt_"+
c.id)||0;13===n.w.length&&(n.w=Math.round(n.w/1E3));b=this.sa();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<n.m-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(n.m);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=n.m,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,n.m);d=n.m===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.C(document.location.href)&&
(""===document.referrer||this.C(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},Ja:function(){for(var a=[],b=0,d=n.aa.length;b<d;b++){var e=n.aa[b],f=this.a[e];"undefined"!==typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Ma:function(){this.La();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=l.Ga;this.a.cl=l.colorDepth+
"-bit";this.a.ln=l.language;this.a.ja=l.javaEnabled?1:0;this.a.ck=l.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=b.ta();this.a.v="1.1.22";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1===this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=d.k(a,n.xa)||"";this.a.cp=d.k(a,n.ya)||"";this.a.cw=d.k(a,n.wa)||"";this.a.ci=d.k(a,n.ua)||"";this.a.cf=d.k(a,n.za)||"";this.a.cu=d.k(a,n.va)||""},init:function(){try{this.Ma(),0===this.a.nv?
this.Ia():this.P(".*"),h.b=this,this.fa(),u.B("pv-b"),this.Ha()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(n.protocol+"//"+n.$+"?"+b.join("&"))}},Ha:function(){function a(){u.B("pv-d")}this.V?(this.L=r,this.a.et=0,this.a.ep="",this.i(a)):a()},i:function(a){var b=this;b.a.rnd=Math.round(Math.random()*n.A);u.B("stag-b");var d=n.protocol+"//"+n.$+"?"+b.Ja();u.B("stag-d");
b.ca(d);e.log(d,function(d){b.P(d);f.d(a,"Function")&&a.call(b)})},fa:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(n.da),f=d.k(a,"jn"),g=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*n.A),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",n.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(a,f))},ca:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},P:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},
Ia:function(){var a=this,b=k.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(n.protocol+"//"+decodeURIComponent(b),function(b){a.P(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();
(function(){var a=mt.r,d=mt.event,e=mt.url,b=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var f=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},l=s;a.O(function(){l=+new Date});var g=function(){var a,d,g;g=m("navigation");d=m("request");g={netAll:d.start-g.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-g.start};a=document.referrer;var k=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],w=s;d=s;if("www.baidu.com"===k[2]||"m.baidu.com"===k[2])w=e.k(a,"qid"),d=e.k(a,"click_t");a=w;g.qid=a!=s?a:"";d!=s?(g.bdDom=l?l-d:0,g.bdRun=f-d,g.bdDef=m("navigation").start-d):(g.bdDom=0,g.bdRun=0,g.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(g);h.b.i()};d.c(window,"load",function(){setTimeout(g,500)})}}catch(k){}})();
(function(){var a=h.o,d={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ta="0";document.body.appendChild(b)}}catch(d){}}},e=navigator.userAgent.toLowerCase();-1<e.indexOf("android")&&-1===e.indexOf("micromessenger")&&d.init()})();
(function(){var a=mt.j,d=mt.lang,e=mt.event,b=mt.l;if("undefined"!==typeof h.b&&(c.med||(!a.W||7<a.Ba)&&c.cvcc)){var f,m,l,g,k=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===v)return v},u=function(a,e){var g={};g.n=f;g.t="clk";g.v=a;if(e){var m=e.getAttribute("href"),k=e.getAttribute("onclick")?""+e.getAttribute("onclick"):s,n=e.getAttribute("id")||"";l.test(m)?(g.sn="mediate",
g.snv=m):d.d(k,"String")&&l.test(k)&&(g.sn="wrap",g.snv=k);g.id=n}h.b.a.et=86;h.b.a.ep=b.stringify(g);h.b.i();for(g=+new Date;400>=+new Date-g;);};if(c.med)m="/zoosnet",f="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,g={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){m="/other-comm";f="other";l=c.cvcc.q||q;var p=c.cvcc.id||q;g={click:function(){for(var a=[],b=k(document.getElementsByTagName("a")),b=[].concat.apply(b,k(document.getElementsByTagName("area"))),b=[].concat.apply(b,k(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],l!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||p.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):p!==q&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof g&&"undefined"!==typeof l){var t;m+=/\/$/.test(m)?"":"/";var w=function(a,b){if(t===b)return u(m+a,b),v;if(d.d(b,"Array")||d.d(b,"NodeList"))for(var e=0,f=b.length;e<f;e++)if(t===b[e])return u(m+a+"/"+(e+1),b[e]),v};e.c(document,"mousedown",function(a){a=a||window.event;t=a.target||a.srcElement;var b={};for(n(g,function(a,e){b[a]=d.d(e,"Function")?e():document.getElementById(e)});t&&
t!==document&&n(b,w)!==v;)t=t.parentNode})}}})();(function(){var a=mt.r,d=mt.lang,e=mt.event,b=mt.l;if("undefined"!==typeof h.b&&d.d(c.cvcf,"Array")&&0<c.cvcf.length){var f={ba:function(){for(var b=c.cvcf.length,d,g=0;g<b;g++)(d=a.S(decodeURIComponent(c.cvcf[g])))&&e.c(d,"click",f.ka())},ka:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=b.stringify(a);h.b.i()}}};a.O(function(){f.ba()})}})();
(function(){var a=mt.event,d=mt.l;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,b={n:"anti",sb:0,kb:0,clk:0},f=function(){h.b.a.et=86;h.b.a.ep=d.stringify(b);h.b.i()};a.c(document,"click",function(){b.clk++});a.c(document,"keyup",function(){b.kb=1});a.c(window,"scroll",function(){b.sb++});a.c(window,"unload",function(){b.t=+new Date-e;f()});a.c(window,"load",function(){setTimeout(f,5E3)})}})();
(function(){function a(){this.f=s}var d=mt.Q,e=mt.j;a.prototype={Da:function(a){if(this.f)this.h(a,0);else if(this.isSupported()){try{this.f=new ActiveXObject("BDEXIE.BDExExtension.1"),this.X=r}catch(b){this.X=v}this.X?this.h(a,0):this.h(a,-1)}else this.h(a,-1)},Oa:function(){this.f&&delete this.f;this.f=s},Ka:function(a,b,d){if(this.f&&"SetLocalCache"in this.f)try{this.f.SetLocalCache(a,b)===q&&this.h(d,0)}catch(e){this.h(d,-1)}else this.h(d,-1)},qa:function(a,b){if(this.f&&"GetLocalCache"in this.f)try{this.h(b,
this.f.GetLocalCache(a))}catch(d){this.h(b,"")}else this.h(b,"")},na:function(a){if(this.f&&"GetCryptStr"in this.f)try{this.h(a,this.f.GetCryptStr("strEncryptID1"))}catch(b){this.h(a,"")}else this.h(a,"")},h:function(a,b){"function"===typeof a&&a(b,this)},isSupported:function(){if(window.ActiveXObject||"ActiveXObject"in window)try{return!!new ActiveXObject("BDEXIE.BDExExtension.1")}catch(a){}return v},Ea:function(){var a=this;this.na(function(b){b!==q&&""!==b&&(d.log("//datax.baidu.com/x.gif?dm="+
encodeURIComponent("datax.baidu.com/webadapter/guid")+"&ac="+encodeURIComponent(b)+"&v=hm-webadapter-0.0.1&rnd="+Math.round(2147483647*Math.random())),a.Ka("hmKey",+new Date,function(){a.Oa()}))})}};if(e.W&&/^http(s)?:$/.test(document.location.protocol)){var b=new a;b.Da(function(a){0===a&&b.qa("hmKey",function(a){a=+a;(isNaN(a)||6048E5<+new Date-a)&&b.Ea()})})}})();})();
