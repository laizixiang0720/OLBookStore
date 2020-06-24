function cklogin(){if(getc('huiyuan')==''){window.location='#?ref='+document.location;return false;}return true;}
var r_m_mouseover_variables=new Array();for(var i=0;i<8;i++){r_m_mouseover_variables[i]=1;}
var divid='newpldiv';var spcache={};function showdiv(id,x,y,w,h)
{var scrollPos;if(typeof window.pageYOffset!='undefined'){scrollPos=window.pageYOffset;}
else if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){scrollPos=document.documentElement.scrollTop;}
else if(typeof document.body!='undefined'){scrollPos=document.body.scrollTop;}
$(id).style.position='absolute';$(id).style.zIndex='999';$(id).style.left=(window.screen.availWidth-360)/2+'px';$(id).style.top=scrollPos+100+'px';$(id).style.display='';}
function hidediv(id)
{$(id).innerHTML='';$(id).style.display='none';}
function shupingdl(bookid)
{var username_lxj=$('username_lxj').value;var pwd_lxj=$('pwd_lxj').value.md5();var yzm_lxj=$('yzm_lxj').value;var actionfrom=$('actionfrom').value;var act=$('act').value;var autoid=$('autoid').value;var s_lxj=$('UserLogin_SaveState_lxj').checked?1:0;var subid=$('subid').value;if(username_lxj==''){alert('请输入用户名！');$('username_lxj').focus();return;}
if(pwd_lxj==''){alert('请输入密码！');$('pwd_lxj').focus();return;}
if(yzm_lxj==''){alert('请输入验证码！');$('yzm_lxj').focus();return;}
var url='#/member/bookpinglun/pl_new01.ashx?action=dl&bookid='+bookid;url=url+'&username_lxj='+escape(username_lxj);url=url+'&pwd_lxj='+escape(pwd_lxj);url=url+'&yzm_lxj='+escape(yzm_lxj);url=url+'&UserLogin_SaveState_lxj='+escape(s_lxj);url=url+'&actionfrom='+escape(actionfrom);url=url+'&act='+escape(act);url=url+'&autoid='+escape(autoid);url=url+'&subid='+escape(subid);var tomember=$('tomember').value;url=url+'&tomember='+escape(tomember);var ny=$('ny').value;url=url+'&ny='+escape(ny);var w=100;var ex=shupingdl.caller;var x=ex.offsetLeft-15;var y=ex.offsetTop+20;while(ex=ex.offsetParent){x+=ex.offsetLeft;y+=ex.offsetTop;}
if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);getajax(url,divid);}
function newpl(e,bookid,thisid){if(!cklogin()) return;var url='pl_new01.ashx?action=newpl&bookid='+bookid;if(getc("huiyuan")!=null){getajax(url,thisid);return;}
var w=100;var x=e.offsetLeft-15;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);$('newpldiv').innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';getajax(url,(function(x,y){return function(m){if(m.toString().indexOf('<div class="bg')!=-1){if($('newpldiv').style.display=='none')showdivs('newpldiv',x,y,w);$('newpldiv').innerHTML=m;}
else if(m.toString().indexOf(' class="')!=-1){hidediv('newpldiv');$('right').innerHTML=m;}
else eval(m);}})(x,y));}
function shuping_tj(bookid){var duzheleixing='';if(plxingji==0){alert('请给图书评分！');return false;}
var pltxt=$('pltxt').value;var pltitle=$('pltitle').value;if(pltitle=='请尽量简短表述对图书的整体印象')pltitle='';if(pltitle.length>0){if(pltitle.length<4){alert('标题字数须不少于4个字！');$('pltitle').focus();return false;}
if(pltitle.length>20){alert('标题字数须不多于20个字！');$('pltitle').focus();return false;}}
if(pltxt.length<5){alert('书评字数须不少于5个字！');$('pltxt').focus();return false;}
if(pltxt.length>1500){alert('您要发表的内容太长，请连载发表！');$('pltxt').focus();return false;}
var url='pl_new01.ashx?action=shuping_tj&bookid='+bookid;url=url+'&duzheleixing='+duzheleixing;url=url+'&pltxt='+escape(pltxt).replace(/\+/g,'%2b');url=url+'&pltitle='+escape(pltitle).replace(/\+/g,'%2b');url=url+'&xingji='+plxingji;var ex=shuping_tj.caller;var w=360;var x=ex.offsetLeft;var y=ex.offsetTop+20;while(ex=ex.offsetParent){x+=ex.offsetLeft;y+=ex.offsetTop;}
getajax(url, (function (x, y) { return function (m) { if (m.toString().indexOf('<div class="bg') == -1) eval(m); else { if ($('newpldiv').style.display == 'none') showdiv('newpldiv', x, y, w); $('newpldiv').innerHTML = m; } } })(x, y), 'POST'); spcache['sppost'] = 1;
}
function showhidefollow(autoid)
{if($('ul_'+autoid).style.display=='none')
{$('ul_'+autoid).style.display='';$('img_'+autoid).src='http://images.学海云端.com/member/bookpinglun/images/close2.gif';$('img_'+autoid).alt='点击收回';}
else
{$('ul_'+autoid).style.display='none';$('img_'+autoid).src='http://images.学海云端.com/member/bookpinglun/images/open1.gif';$('img_'+autoid).alt='点击查看讨论';}}
function directhf(bookid,autoid,tomember)
{var url='#/member/bookpinglun/pl_new01.ashx?action=loadreplay&bookid='+bookid+'&autoid='+autoid+'&tomember='+tomember;var e=document.getElementById('right');var w=360;var x=e.offsetLeft;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
y=y+300;if($('newpldiv').style.display=='none')showdivs('newpldiv',x,y,w);$('newpldiv').innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';getajax(url,(function(x,y){return function(m){if(m.toString().indexOf('<div class="bg')!=-1){if($('newpldiv').style.display=='none')showdivs('newpldiv',x,y,w);$('newpldiv').innerHTML=m;}
else if(m.toString().indexOf(' class="')!=-1){hidediv('newpldiv');$('right').innerHTML=m;}
else eval(m);}})(x,y));}
function directpl(bookid)
{var url='#/member/bookpinglun/pl_new01.ashx?action=newpl&bookid='+bookid;var e=document.getElementById('right');var w=360;var x=e.offsetLeft;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
y=y+300;if($('newpldiv').style.display=='none')showdivs('newpldiv',x,y,w);$('newpldiv').innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';getajax(url,(function(x,y){return function(m){if(m.toString().indexOf('<div class="bg')!=-1){if($('newpldiv').style.display=='none')showdivs('newpldiv',x,y,w);$('newpldiv').innerHTML=m;}
else if(m.toString().indexOf(' class="')!=-1){hidediv('newpldiv');$('right').innerHTML=m;}
else eval(m);}})(x,y));getajax(url,(function(){return function(m){eval(m);document.getElementById('').parentNode.innerHTML='';}}));}
function showdivs(id,x,y,w,h)
{var scrollPos;if(typeof window.pageYOffset!='undefined'){scrollPos=window.pageYOffset;}
else if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){scrollPos=document.documentElement.scrollTop;}
else if(typeof document.body!='undefined'){scrollPos=document.body.scrollTop;}
$(id).style.position='absolute';$(id).style.zIndex='999';$(id).style.left=(window.screen.availWidth-360)/2+'px';$(id).style.top=scrollPos+220+'px';$(id).style.display='';}
function newfollow(e,bookid,autoid,ny) {
    if (!cklogin()) return; var url = '#/member/bookpinglun/pl_new01.ashx?action=newfollow&bookid=' + bookid + '&autoid=' + autoid + '&ny=' + ny + '&curPage=' + document.getElementById('curPage').innerHTML + '&sale=' + document.getElementById('sale').innerHTML; if (document.URL.toString().indexOf('#/member/readinghome') > -1 || document.URL.toString().indexOf('#/member/TalentsClub') > -1 || document.URL.toString().indexOf('#/member/bookpinglun/memberpl') > -1 || document.URL.toString().indexOf('#/member/bookpinglun/pinglun') > -1 || document.URL.toString().indexOf('#/member/bookpinglun/allpinglun') > -1) { url += '&sc=2'; } else if (document.URL.toString().indexOf('#/member/bookpinglun') == -1) { url += '&sc=1'; }
var w=360;var x=e.offsetLeft;var y=e.offsetTop+20;if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);$('newpldiv').innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';getajax(url,(function(x,y){return function(m){if(m.toString().indexOf('<div class="bg')==-1){hidediv('newpldiv');eval(m);}
else{if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);$('newpldiv').innerHTML=m;}}})(x,y));}
function newfollow_tj(autoid,acttype)
{var bookid=$('bookid').value;var donate=$('donate').value;var tomember=$('tomember').value;var consumeintegral=$('consumeintegral').value;var followcontent=$('followcontent').value;if(followcontent.length==0||followcontent=='您可以在这发表您的看法，限1500汉字'){alert('发表内容不能为空！');$('followcontent').focus();return false;}
if(followcontent.length>1500){alert('您要发表的内容太长，请连载发表！');$('followcontent').focus();return false;}
if(donate>consumeintegral){alert('您要赠予的消费积分 <b>不能超过</b> 您拥有的消费积分！');$('donate').focus();return false;}
var url='pl_new01.ashx?action=newfollow_tj&bookid='+bookid;url=url+'&tomember='+escape(tomember);url=url+'&consumeintegral='+escape(consumeintegral);url=url+'&autoid='+autoid;url=url+'&donate='+donate;url=url+'&acttype='+acttype;url=url+'&followcontent='+escape(followcontent);$('newpldiv').innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';getajax(url,'newpldiv','GET');}
function newsubfollow(e,bookid,member,autoid,thisid)
{if(!cklogin()) return;var url='pl_new01.ashx?action=loadreplay&bookid='+bookid+"&tomember="+member+"&autoid="+autoid;if(getc("huiyuan")!=null){getajax(url,thisid);return;}
var w=360;var x=e.offsetLeft;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);$('newpldiv').innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';getajax(url,(function(x,y){return function(m){if(m.toString().indexOf('<div class="bg')!=-1){if($('newpldiv').style.display=='none')showdivs('newpldiv',x,y,w);$('newpldiv').innerHTML=m;}
else if(m.toString().indexOf(' class="')!=-1){hidediv('newpldiv');$('right').innerHTML=m;}
else eval(m);}})(x,y));}
function newsubfollow_tj(subid,subact,pltype)
{var subtype;for(i=0;i<document.getElementsByName('subtype').length;i++)
{if(document.getElementsByName('subtype')[i].checked==true)subtype=document.getElementsByName('subtype')[i].value;}
var subfollowcontent=$('subfollowcontent').value;if(subfollowcontent.length<5){alert('回复内容须不少于5个字！');$('subfollowcontent').focus();return false;}
if(subfollowcontent.length>1500){alert('您要发表的内容太长，请连载发表！');$('subfollowcontent').focus();return false;}
var url='pl_new01.ashx?action=newsubfollow&subid='+subid;if(pltype)url+='&pltype='+pltype;url=url+'&subact='+escape(subact);url=url+'&subtype='+subtype;url=url+'&subfollowcontent='+escape(subfollowcontent);var ex=newsubfollow_tj.caller;var w=360;var x=ex.offsetLeft;var y=ex.offsetTop+20;while(ex=ex.offsetParent){x+=ex.offsetLeft;y+=ex.offsetTop;}
getajax(url,(function(x,y){return function(m){if(m.toString().indexOf('<div class="bg')==-1)eval(m);else{if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);$('newpldiv').innerHTML=m;}}})(x,y),'POST');}
function myd_tj(e)
{if(!cklogin()) return;var subfollowcontent=$('mydt').value;if(subfollowcontent.length==0||subfollowcontent=='：）请在这里填写'){alert('留言不能为空！');$('mydt').focus();return false;}
if(subfollowcontent.length>1500){alert('留言内容太长，请连载发表！');$('mydt').focus();return false;}
var url='pl_new01.ashx?action=addmyd';url=url+'&myd='+escape(subfollowcontent);var w=360;var x=e.offsetLeft+300;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
if($(divid).style.display=='none')showdiv(divid,x,y,w);$(divid).innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';getajax(url,divid,'GET');}
function changezhezhan(v)
{if($(v).innerHTML=="折叠")
{$(v).innerHTML="展开";}
else
{$(v).innerHTML="折叠";}}
function delpl_m(id,o,m)
{document.ondblclick=null;var url='pl_new01.ashx?action=delpl_m&autoid='+id;if(m)url=url+'&m=m';$o=o;var mp=getPos(o);var itb=$('pldiv');var tip=$('tipDiv');var confirm_click=function(){wait(mp,pos1);var bpdiv;var bldiv;if(m){bpdiv=$('bp_m_'+id);bldiv=$('bl_m_'+id);}
else
{bpdiv=$('bp_s_'+id);bldiv=$('bl_s_'+id);}
var removeSucceed=(function(result){prs.e();if(result!=null&&result.Trim()=='OK'){itb.removeChild(bpdiv);itb.removeChild(bldiv);setTips("nodel_ok");showTip(mp,pos3);document.ondblclick=function(){dc();};}
else{if(result.length>30||result.length==0)result="删除失败";tip.innerHTML=cntnt(result+"！");showTip(mp,pos3);document.ondblclick=function(){dc();};}});getajax(url,removeSucceed);}
setTips("delete_confirm");var t=$("delete");if(t!=null)t.onclick=confirm_click;t=$("cancel");if(t!=null)t.onclick=function(){hdl();return;};showTip(mp,pos2);}
function modpl(divid,e,bookid,autoid){var url='pl_new01.ashx?action=modpl_m&bookid='+bookid+'&autoid='+autoid;var w=100;var x=e.offsetLeft-15;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
if($(divid).style.display=='none')showdiv(divid,x,y,w);$(divid).innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';var returnstr=makerequest(url);$(divid).innerHTML=returnstr;var evalstr=returnstr.match(/<script>.+<\/script>/ig)[0];evalstr=evalstr.replace("<script>","");evalstr=evalstr.replace("</script>","");eval(evalstr);}
function modshup_tj(bookid,autoid){var bigs=parseInt($('r_m_bigInt').innerHTML);var smalls=parseInt($('r_m_smallInt').innerHTML.substring(1,2));var score1=parseInt($('r_m_item_2').innerHTML);var score2=parseInt($('r_m_item_4').innerHTML);var score3=parseInt($('r_m_item_3').innerHTML);var score4=parseInt($('r_m_item_6').innerHTML);var score5=parseInt($('r_m_item_5').innerHTML);var score6=parseInt($('r_m_item_7').innerHTML);var duzheleixing
var pltxt=$('pltxt').value;if(isNaN(score1)||isNaN(score2)||isNaN(score3)||isNaN(score4)||isNaN(score5)||isNaN(score6)){alert('Error!!!');return false;}
if(pltxt.length<6||pltxt=='我的书评：(不少于5个汉字)'){alert('书评字数太少！');$('pltxt').focus();return false;}
if(pltxt.length>2500){alert('您要发表的内容太长，请连载发表！');$('pltxt').focus();return false;}
var url='pl_new01.ashx?action=modshup_tj&bookid='+bookid+'&autoid='+autoid;url=url+'&score1='+score1;url=url+'&score2='+score2;url=url+'&score3='+score3;url=url+'&score4='+score4;url=url+'&score5='+score5;url=url+'&score6='+score6;url=url+'&duzheleixing='+duzheleixing;url=url+'&pltxt='+escape(pltxt);$(divid).innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  提交中...';var returnstr=makerequest(url);$(divid).innerHTML=returnstr;if(/成功/.test(returnstr))
{var dd=new Date();$("sp_time_m_"+autoid).innerHTML="该作者修改于："+dd.getYear()+"-"+dd.getMonth()+"-"+dd.getDate()+" "+dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();$("nei_m_"+autoid).innerHTML=pltxt;$("dj_m_"+autoid).innerHTML="评价等级：";if(bigs>0)
{for(var i=1;i<=bigs;i++)
{$("dj_m_"+autoid).innerHTML+="<img src='http://images.学海云端.com/member/bookpinglun/images/star11.gif' vspace='0' align='absmiddle' />";}}
if(smalls>0)$("dj_m_"+autoid).innerHTML+="<img src='http://images.学海云端.com/member/bookpinglun/images/star14.gif' vspace='0' align='absmiddle' />";}}
function mod_follow(e,autoid)
{var url='pl_new01.ashx?action=mod_follow&autoid='+autoid;var w=360;var x=e.offsetLeft-300;var y=e.offsetTop+20;while(e=e.offsetParent){x+=e.offsetLeft;y+=e.offsetTop;}
if($(divid).style.display=='none')showdiv(divid,x,y,w);$(divid).innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  加载中...';getajax(url,divid);}
function mod_follow_tj(autoid)
{var followcontent=$('subfollowcontent').value;var stype;var subtypes=document.getElementsByName("subtype");for(var i=0;i<subtypes.length;i++)
{if(subtypes[i].checked)stype=subtypes[i].value;}
if(followcontent.length==0||followcontent=='您可以在这发表您的看法，限1500汉字'){alert('发表内容不能为空！');$('followcontent').focus();return false;}
if(followcontent.length>1500){alert('您要发表的内容太长，请连载发表！');$('followcontent').focus();return false;}
var url='pl_new01.ashx?action=mod_follow_tj&autoid='+autoid;url=url+'&followcontent='+escape(followcontent)+'&stype='+stype;$(divid).innerHTML='<br /><br />  <img src="../image/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';var returnstr=makerequest(url);$(divid).innerHTML=returnstr;if(/成功/.test(returnstr))
{var dd=new Date();$("sp_time_s_"+autoid).innerHTML="该作者修改于："+dd.getYear()+"-"+dd.getMonth()+"-"+dd.getDate()+" "+dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();$("nei_s_"+autoid).innerHTML=followcontent;}}

function newpop(url,spos){
	
	//logUrlHistory('&fun=newpop');
	
	
	if(ph)clearTimeout(ph);
	var pos = [0,0];
	var tip = $('xtip');
	var mp = [spos.top,spos.left];
	tip.style.display='';
	setpos(tip,mp,pos);
    tip.innerHTML = '<span class="red13">请稍侯……</span>';
	getajax(url,function(p){
	tip.innerHTML=p;	
	ph = setTimeout(function(){
		tip.style.display='none';
	},3000);
	});
}
function winpop(tushubianhao,tg,num){//javascript:伪链接 不能传递事件 e=null

    var ex=winpop.caller;	
    if(ex){
    var w=360;
    var x=ex.offsetLeft;
    var y=ex.offsetTop+20;
    while(ex=ex.offsetParent){
      x+=ex.offsetLeft;
      y+=ex.offsetTop;
      } 
//    if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);
    }

   

	if(tushubianhao==-1){
	if(tg==null)tg=0;
	//cartwin('/cart/view.asp?tg=' + tg + '&' + (new Date()));
	cartwin('#/tcart/cart_j.asp?tg=' + tg + '&' + (new Date()));
		return;
	}
	if(!num)num=1;
	logUrlHistory('&fun=newpop.'+tushubianhao);
	var url='putcar.ashx?num=1&sc=c&typeid=c&isdel=0&tushubianhao='+tushubianhao+'&tg='+tg;
    getajax(url,(function(x,y) {
           return  function (m){
            
                if($('newpldiv').style.display=='none') showdiv('newpldiv',x,y,w); 
                $('newpldiv').innerHTML=m;

          }})(x,y),'GET');
    return;
	newpop('#/cart/putcarx.asp?sc=c&typeid=c&isdel=0&bookid='+parseInt(tushubianhao)+'&num='+num+'&tg='+tg,getspos());
}
function nwinpop(tushubianhao,tg,num){
    var ex=winpop.caller;	
    if(ex){
    var w=360;
    var x=ex.offsetLeft;
    var y=ex.offsetTop+20;
    while(ex=ex.offsetParent){
      x+=ex.offsetLeft;
      y+=ex.offsetTop;
      } 
//    if($('newpldiv').style.display=='none')showdiv('newpldiv',x,y,w);
    }

   

	if(tushubianhao==-1){
	if(tg==null)tg=0;
	//cartwin('/cart/view.asp?tg=' + tg + '&' + (new Date()));
	cartwin('#/tcart/cart_j.asp?tg=' + tg + '&' + (new Date()));
		return;
	}
	if(!num)num=1;
	logUrlHistory('&fun=newpop.'+tushubianhao);
	var url='putcar.ashx?num=1&sc=c&typeid=c&isdel=0&tushubianhao='+tushubianhao+'&tg='+tg;
    getajax(url,(function(x,y) {
           return  function (m){
            
                if($('newpldiv').style.display=='none') showdiv('newpldiv',x,y,w); 
                $('newpldiv').innerHTML=m;

          }})(x,y),'GET');
    return;
	newpop('#/cart/putcarx.asp?sc=c&typeid=c&isdel=0&bookid='+parseInt(tushubianhao)+'&num='+num+'&tg='+tg,getspos());
}
function ntgwinpop(tushubianhao){
    var ex=winpop.caller;	
    if(ex){
    var w=360;
    var x=ex.offsetLeft;
    var y=ex.offsetTop+20;
    while(ex=ex.offsetParent){
      x+=ex.offsetLeft;
      y+=ex.offsetTop;
      } 
    if($(divid).style.display=='none')showdiv(divid,x,y,w);
    }
      //newpop('/member/cart_tg/putcar.asp?tushubianhao='+ tushubianhao +'&typeid=c',getspos());
     nwinpop(tushubianhao,1);
}


