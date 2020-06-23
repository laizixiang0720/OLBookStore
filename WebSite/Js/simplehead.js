var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-30092355-1']);_gaq.push(['_setDomainName','.学海云端.com']);_gaq.push(['_setAllowHash',false]);_gaq.push(['_addOrganic','soso','w']);_gaq.push(['_addOrganic','118114','kw']);_gaq.push(['_addOrganic','yodao','q']);_gaq.push(['_addOrganic','gougou','search']);_gaq.push(['_addOrganic','sogou','query']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='#/js/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();function lg_fun(hy){var p=[];if(hy.length<1)hy=null;var star=getc('huiyuanstar');p.push('<span class="black">欢迎光临<a href="#">学海云端网上书店</a>　</span>');if(hy!=null){p.push('：'+hy+'   ');}
else{p.push('  ［<a rel="nofollow" href="#">登录</a>］');var tiptag='';if((document.location.href+'').indexOf('cart_j.aspx')>-1){tiptag='?gwc=1';}p.push('  ［<a href="#'+tiptag+'">注册</a> ］');}
if (hy != null) {
    if (parseInt(star) >= 5)
        p.push('<image src="http://images.学海云端.com/images/sf_vip.gif"/>');
    else {
        for (var i = 0; i < parseInt(star); i++)
            p.push('<image src="#/member/images/star.gif"/>');
    }
    p.push(' &nbsp;&nbsp; '); 
}
if(hy!=null){p.push('<a href="javascript:car_loginout();">退出</a>');}
var lg=document.getElementById('logon');if(lg){lg.innerHTML=p.join('');};document.getElementById('logon').innerHTML=p.join('');var cbShowMsg=getc('cbShowMsg');if(cbShowMsg!=null)
{cbShowMsg=DecodeCookie(cbShowMsg);}
var cbhead=getc('cbhead');if(cbhead!=null)
{cbhead=DecodeCookie(cbhead);}
if(cbShowMsg!=null)
{$C('header_container')[0].innerHTML="<div class='hd_caibei'>      "+cbhead+"<span style='float:right;'>"+cbShowMsg+"，您好！<a href='http://cb.qq.com/my/my_jifen_source.html' target='_blank' title='我的彩贝积分'>我的彩贝积分</a></span></div>"+$C('header_container')[0].innerHTML;}}
init();coop();function init(){b=(b_t()=='ie'?true:false);document.getElementById('help').onmouseover=ovX;login();if(navigator.userAgent.toUpperCase().indexOf('MSIE 7')!=-1)
b=false;}
function ovX(){var e=gete();var id=src(e);{var t;var n=id.getAttribute('id')||id.id;var v=id.getAttribute('v')||id.v;if(v==null)v='[0,0]';t=document.getElementById(n+'_data');if(t!=null)
{f=0;co=id;showX(t,getPos(id),eval(v));}}}
function otX(o){var e=gete();if(e&&!o.contains(e.toElement))
{if(f==0)hide(o);}}
function showX(o,mp,pos){document.getElementById('innerX').innerHTML=o.innerHTML;o=document.getElementById('outerX');o.style.display="";o.style.top=(mp[0]-pos[0])+"px";o.style.left=(mp[1]-pos[1])+"px";}
function getPos(o){var t=o.offsetTop;var l=o.offsetLeft;while(o=o.offsetParent){t+=o.offsetTop;l+=o.offsetLeft;}
return[t,l];}
function hide(id){id.style.display="none";}
function src(ev){if(typeof(event)!='undefined'){return event.srcElement;}
else if(ev){return ev.target;}}
function scrollhd(){var hds=$('.huodongs');for(var i=0;i<hds.length;i++){if(hds[i].offsetTop>hds[i].offsetParent){hds[i].offsetTop=hds[i].offsetTop-60;}
else hds[i].offsetTop=hds[i].offsetTop+20;}}
function getCookie(objName){var arrStr=document.cookie.split('; ');for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split('=');if(temp[0]==objName){if(temp[1])
return unescape(temp[1]);else return'';}}
return'';}
Number.prototype.rd=function(b){return(Math.round(this*Math.pow(10,b))/Math.pow(10,b));}
var huiyuan=getCookie("jshuiyuan"); if(huiyuan!='') huiyuan=DecodeCookie(huiyuan); var memid=getCookie("memid");var htm="";if(huiyuan&&huiyuan!=''){lg_fun(huiyuan);if((document.location+'').indexOf('cart_j')>-1){document.title=huiyuan+'：购物车';document.getElementById('mycar').innerHTML="我的购物车";}
if(memid&&memid!=''){var star_grade=getCookie("huiyuanstar");if(star_grade=='')
star_grade=0;var starimg=''
for(var i=0;i<star_grade;i++){starimg=starimg+"<img src='http://member.学海云端.com/member/images/star.gif' />"}
htm+=huiyuan+'  '+starimg+"<span style='font-weight:normal'><a href='javascript:car_loginout();'>退出登录</a></span>";}}
else{htm+="请 <a href='#' class='blue012c83a'>登录</a> 或者 <a href='#/member/register/regform2012.asp?gwc=1' class='blue012c83a'>免费注册</a> 查看给您的优惠价格";}
function car_loginout(){getajax("../Car/loginout.ashx?callback=?",function(html){location.href=location.href;})}
function modsohuemail()
{return true;}
function setTab(name,cursel,n){for(i=1;i<=n;i++){var menu=document.getElementById(name+i);var con=document.getElementById("con_"+name+"_"+i);if(name=="a")
menu.className=i==cursel?"onhover":"";else
menu.className=i==cursel?"click":"";con.style.display=i==cursel?"block":"none";}}