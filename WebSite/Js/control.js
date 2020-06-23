var r_m_mouseover_variables=new Array();for(var i=0;i<8;i++) {r_m_mouseover_variables[i] = 1;}
var divid='newpldiv';
var spcache={};
function showdiv(id,x,y,w,h)
{
	var scrollPos;
	if (typeof window.pageYOffset != 'undefined') {
   	scrollPos = window.pageYOffset;
	}
	else if (typeof document.compatMode != 'undefined' &&
	     document.compatMode != 'BackCompat') {
	   scrollPos = document.documentElement.scrollTop;
	}
	else if (typeof document.body != 'undefined') {
	   scrollPos = document.body.scrollTop;
	}
	
	$(id).style.position='absolute';
	$(id).style.zIndex = '999';
	//$(id).style.left=x+'px';
	//$(id).style.top=y+'px';
	//$(id).style.width=w+'px';
	$(id).style.left=(window.screen.availWidth-360)/2+'px';
	$(id).style.top=scrollPos+100+'px';
	$(id).style.display='';
}

function hidediv(id)
{
	$(id).innerHTML='';
	$(id).style.display='none';
}

function shupingdl(bookid)
{
	var username_lxj=$('username_lxj').value;
	var pwd_lxj=$('pwd_lxj').value.md5();
	var yzm_lxj=$('yzm_lxj').value;
	var actionfrom=$('actionfrom').value;
	var act=$('act').value;
	var autoid=$('autoid').value;
	var s_lxj=$('UserLogin_SaveState_lxj').checked?1:0;
	var subid=$('subid').value;
	if(username_lxj==''){alert('请输入用户名！');$('username_lxj').focus();return;}
	if(pwd_lxj==''){alert('请输入密码！');$('pwd_lxj').focus();return;}
	if(yzm_lxj==''){alert('请输入验证码！');$('yzm_lxj').focus();return;}
	//alert(username_lxj+'|'+pwd_lxj+'|'+yzm_lxj+'|'+s_lxj);
	var url='/member/bookpinglun/pl_new01.asp?action=dl&bookid='+bookid;
	url=url+'&username_lxj='+escape(username_lxj);
	url=url+'&pwd_lxj='+escape(pwd_lxj);
	url=url+'&yzm_lxj='+escape(yzm_lxj);
	url=url+'&UserLogin_SaveState_lxj='+escape(s_lxj);
	url=url+'&actionfrom='+escape(actionfrom);
	url=url+'&act='+escape(act);
	url=url+'&autoid='+escape(autoid);
	url=url+'&subid='+escape(subid);
	getajax(url,divid);
}

function newpl(divid,e,bookid){
var url='/member/bookpinglun/pl_new01.asp?action=newpl&bookid='+bookid;
var w=100;
var x=e.offsetLeft-15;
var y=e.offsetTop+20;
while(e=e.offsetParent){
  x+=e.offsetLeft;
  y+=e.offsetTop;
  } 
if($(divid).style.display=='none')showdiv(divid,x,y,w);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  加载中...';
getajax(url,divid);
}

function shuping_tj(bookid){
if(spcache['sppost']==1) return false;
var score1=parseInt($('r_m_item_2').innerHTML);
var score2=parseInt($('r_m_item_4').innerHTML);
var score3=parseInt($('r_m_item_3').innerHTML);
var score4=parseInt($('r_m_item_6').innerHTML);
var score5=parseInt($('r_m_item_5').innerHTML);
var score6=parseInt($('r_m_item_7').innerHTML);
var duzheleixing
for(i=0;i<document.getElementsByName('duzheleixing').length;i++)
{if(document.getElementsByName('duzheleixing')[i].checked==true)duzheleixing=document.getElementsByName('duzheleixing')[i].value;}
var pltxt=$('pltxt').value;
if(isNaN(score1)||isNaN(score2)||isNaN(score3)||isNaN(score4)||isNaN(score5)||isNaN(score6)){alert('Error!!!');return false;}
//if(score1==0 && score2==0 && score3==0 && score4==0 && score5==0 && score6==0){if(!confirm('你确定对该书的评分为0吗？'))return false;}
if(pltxt.length<6||pltxt=='我的书评：(不少于5个汉字)'){alert('书评字数太少！');$('pltxt').focus();return false;}
if(pltxt.length>2500){alert('您要发表的内容太长，请连载发表！');$('pltxt').focus();return false;}
var url='/member/bookpinglun/pl_new01.asp?action=shuping_tj&bookid='+bookid;
	url=url+'&score1='+score1;
	url=url+'&score2='+score2;
	url=url+'&score3='+score3;
	url=url+'&score4='+score4;
	url=url+'&score5='+score5;
	url=url+'&score6='+score6;
	url=url+'&duzheleixing='+duzheleixing;
	//url=url+'&pltxt='+escape(pltxt);
	url=url+'&pltxt='+escape(pltxt).replace(/\+/g,'%2b');
getajax(url,divid,'POST');
spcache['sppost']=1;
}

function showhidefollow(autoid)
{
	if($('ul_'+autoid).style.display=='none')
	{
		$('ul_'+autoid).style.display='';
		$('img_'+autoid).src='http://images.学海云端.com/member/bookpinglun/images/close2.gif';
		$('img_'+autoid).alt='点击收回';
	}
	else
	{
		$('ul_'+autoid).style.display='none';
		$('img_'+autoid).src='http://images.学海云端.com/member/bookpinglun/images/open1.gif';
		$('img_'+autoid).alt='点击查看讨论';
	}
}

function newfollow(e,bookid,autoid,act)
{
var url='/member/bookpinglun/pl_new01.asp?action=newfollow&bookid='+bookid+'&autoid='+autoid+'&act='+act;
var w=360;
var x=e.offsetLeft-300;
var y=e.offsetTop+20;
while(e=e.offsetParent){
  x+=e.offsetLeft;
  y+=e.offsetTop;
  } 
if($(divid).style.display=='none')showdiv(divid,x,y,w);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  加载中...';
getajax(url,divid);
}

function newfollow_tj(autoid,acttype)
{
var bookid=$('bookid').value;
var donate=$('donate').value;
var tomember=$('tomember').value;
var consumeintegral=$('consumeintegral').value;
var followcontent=$('followcontent').value;
if(followcontent.length==0||followcontent=='您可以在这发表您的看法，限1500汉字'){alert('发表内容不能为空！');$('followcontent').focus();return false;}
if(followcontent.length>1500){alert('您要发表的内容太长，请连载发表！');$('followcontent').focus();return false;}
if(donate>consumeintegral){alert('您要赠予的消费积分 <b>不能超过</b> 您拥有的消费积分！');$('donate').focus();return false;}
var url='/member/bookpinglun/pl_new01.asp?action=newfollow_tj&bookid='+bookid;
	url=url+'&tomember='+escape(tomember);
	url=url+'&consumeintegral='+escape(consumeintegral);
	url=url+'&autoid='+autoid;
	url=url+'&donate='+donate;
	url=url+'&acttype='+acttype;
	url=url+'&followcontent='+escape(followcontent);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';
getajax(url,divid,'POST');
}

function newsubfollow(e,subid,pltype)
{
var url='/member/bookpinglun/pl_new01.asp?action=newsubfollow&subid='+subid;
if(pltype)url+='&pltype='+pltype;
var w=360;
var x=e.offsetLeft;
var y=e.offsetTop+20;
while(e=e.offsetParent){
  x+=e.offsetLeft;
  y+=e.offsetTop;
  } 
if($(divid).style.display=='none')showdiv(divid,x,y,w);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  加载中...';
getajax(url,divid);
}

function newsubfollow_tj(subid,subact,pltype)
{
var subtype;
for(i=0;i<document.getElementsByName('subtype').length;i++)
{if(document.getElementsByName('subtype')[i].checked==true)subtype=document.getElementsByName('subtype')[i].value;}
var subfollowcontent=$('subfollowcontent').value;
if(subfollowcontent.length==0||subfollowcontent=='您可以在这发表您的看法，限1500汉字'){alert('发表内容不能为空！');$('subfollowcontent').focus();return false;}
if(subfollowcontent.length>1500){alert('您要发表的内容太长，请连载发表！');$('subfollowcontent').focus();return false;}
var url='/member/bookpinglun/pl_new01.asp?action=newsubfollow&subid='+subid;
if(pltype)url+='&pltype='+pltype;
	url=url+'&subact='+escape(subact);
	url=url+'&subtype='+subtype;
	url=url+'&subfollowcontent='+escape(subfollowcontent);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';
getajax(url,divid,'POST');
}

function myd_tj(e)
{
var subfollowcontent=$('mydt').value;	
if(subfollowcontent.length==0||subfollowcontent=='：）请在这里填写'){alert('留言不能为空！');$('mydt').focus();return false;}
if(subfollowcontent.length>1500){alert('留言内容太长，请连载发表！');$('mydt').focus();return false;}
var url='/member/bookpinglun/pl_new01.asp?action=addmyd';
url=url+'&myd='+escape(subfollowcontent);
var w=360;
var x=e.offsetLeft+300;
var y=e.offsetTop+20;
while(e=e.offsetParent){
  x+=e.offsetLeft;
  y+=e.offsetTop;
  } 
if($(divid).style.display=='none')showdiv(divid,x,y,w);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';
getajax(url,divid,'POST');
}

function changezhezhan(v)
{
	if($(v).innerHTML=="折叠")
	{
		$(v).innerHTML="展开";
	}
	else
	{
		$(v).innerHTML="折叠";
	}
	
}


  function delpl_m(id,o,m)
{
document.ondblclick=null;//clear event
	var url='/member/bookpinglun/pl_new01.asp?action=delpl_m&autoid='+id;
	if(m)url=url+'&m=m';
	$o = o;
	var mp = getPos(o);
	var itb = $('pldiv');
	var tip = $('tipDiv');
	var confirm_click =function(){
		wait(mp,pos1);
		var bpdiv;
		var bldiv;
		if(m){
			bpdiv=$('bp_m_'+id);
			bldiv=$('bl_m_'+id);
		}
		else
		{
			bpdiv=$('bp_s_'+id);
			bldiv=$('bl_s_'+id);
		}	    
	    var removeSucceed = (
		    function(result){
		    	prs.e();
                if(result!=null && result.Trim()=='OK'){
                	itb.removeChild(bpdiv);
					itb.removeChild(bldiv);
                	setTips("nodel_ok");
                	showTip(mp,pos3);
					document.ondblclick=function(){dc();};
                }
                else{
					if(result.length>30 || result.length==0)result="删除失败";					
					tip.innerHTML = cntnt(result+"！");
					showTip(mp,pos3);
					document.ondblclick=function(){dc();};
					//location.reload();					
					}
		    }
	    );
		
	    getajax(url,removeSucceed);
	}
	setTips("delete_confirm");
    var t = $("delete");
   	if(t!=null) t.onclick = confirm_click;
   	t = $("cancel");
	if(t!=null) t.onclick = function(){hdl();return;};	
 	showTip(mp,pos2);
}

function modpl(divid,e,bookid,autoid){
var url='/member/bookpinglun/pl_new01.asp?action=modpl_m&bookid='+bookid+'&autoid='+autoid;
var w=100;
var x=e.offsetLeft-15;
var y=e.offsetTop+20;
while(e=e.offsetParent){
  x+=e.offsetLeft;
  y+=e.offsetTop;
  } 
if($(divid).style.display=='none')showdiv(divid,x,y,w);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  加载中...';

//getajax(url,divid);
var returnstr=makerequest(url);
$(divid).innerHTML=returnstr;
var evalstr=returnstr.match(/<script>.+<\/script>/ig)[0];
evalstr=evalstr.replace("<script>","");
evalstr=evalstr.replace("</script>","");
eval(evalstr);
}

function modshup_tj(bookid,autoid){
var bigs=parseInt($('r_m_bigInt').innerHTML);
var smalls=parseInt($('r_m_smallInt').innerHTML.substring(1,2));
var score1=parseInt($('r_m_item_2').innerHTML);
var score2=parseInt($('r_m_item_4').innerHTML);
var score3=parseInt($('r_m_item_3').innerHTML);
var score4=parseInt($('r_m_item_6').innerHTML);
var score5=parseInt($('r_m_item_5').innerHTML);
var score6=parseInt($('r_m_item_7').innerHTML);
var duzheleixing
//for(i=0;i<document.getElementsByName('duzheleixing').length;i++)
//{if(document.getElementsByName('duzheleixing')[i].checked==true)duzheleixing=document.getElementsByName('duzheleixing')[i].value;}	
var pltxt=$('pltxt').value;
if(isNaN(score1)||isNaN(score2)||isNaN(score3)||isNaN(score4)||isNaN(score5)||isNaN(score6)){alert('Error!!!');return false;}
//if(score1==0 && score2==0 && score3==0 && score4==0 && score5==0 && score6==0){if(!confirm('你确定对该书的评分为0吗？'))return false;}
if(pltxt.length<6||pltxt=='我的书评：(不少于5个汉字)'){alert('书评字数太少！');$('pltxt').focus();return false;}
if(pltxt.length>2500){alert('您要发表的内容太长，请连载发表！');$('pltxt').focus();return false;}
var url='/member/bookpinglun/pl_new01.asp?action=modshup_tj&bookid='+bookid+'&autoid='+autoid;
	url=url+'&score1='+score1;
	url=url+'&score2='+score2;
	url=url+'&score3='+score3;
	url=url+'&score4='+score4;
	url=url+'&score5='+score5;
	url=url+'&score6='+score6;
	url=url+'&duzheleixing='+duzheleixing;
	url=url+'&pltxt='+escape(pltxt);
	$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  提交中...';

var returnstr=makerequest(url);
$(divid).innerHTML=returnstr;
if(/成功/.test(returnstr))
{
	var dd=new Date();
	$("sp_time_m_"+autoid).innerHTML="该作者修改于："+dd.getYear()+"-"+dd.getMonth()+"-"+dd.getDate()+" "+dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();
	$("nei_m_"+autoid).innerHTML=pltxt;
	$("dj_m_"+autoid).innerHTML="评价等级：";
	if(bigs>0)
	{		
		for(var i=1;i<=bigs;i++)
		{
			$("dj_m_"+autoid).innerHTML+="<img src='http://images.学海云端.com/member/bookpinglun/images/star11.gif' vspace='0' align='absmiddle' />";
		}
	}	
	if(smalls>0)$("dj_m_"+autoid).innerHTML+="<img src='http://images.学海云端.com/member/bookpinglun/images/star14.gif' vspace='0' align='absmiddle' />";
}
}

function mod_follow(e,autoid)
{
var url='/member/bookpinglun/pl_new01.asp?action=mod_follow&autoid='+autoid;
var w=360;
var x=e.offsetLeft-300;
var y=e.offsetTop+20;
while(e=e.offsetParent){
  x+=e.offsetLeft;
  y+=e.offsetTop;
  } 
if($(divid).style.display=='none')showdiv(divid,x,y,w);
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  加载中...';
getajax(url,divid);
}

function mod_follow_tj(autoid)
{
var followcontent=$('subfollowcontent').value;
var stype;
var subtypes=document.getElementsByName("subtype");
for(var i=0;i<subtypes.length;i++)
	{		
		if(subtypes[i].checked)stype=subtypes[i].value;
	}


if(followcontent.length==0||followcontent=='您可以在这发表您的看法，限1500汉字'){alert('发表内容不能为空！');$('followcontent').focus();return false;}
if(followcontent.length>1500){alert('您要发表的内容太长，请连载发表！');$('followcontent').focus();return false;}
var url='/member/bookpinglun/pl_new01.asp?action=mod_follow_tj&autoid='+autoid;
	url=url+'&followcontent='+escape(followcontent)+'&stype='+stype;
$(divid).innerHTML='<br /><br />  <img src="http://images.学海云端.com/member/bookpinglun/images/loading.gif" align="absmiddle" />  评论已经提交，请等待片刻...';

var returnstr=makerequest(url);
$(divid).innerHTML=returnstr;
if(/成功/.test(returnstr))
{
	var dd=new Date();
	$("sp_time_s_"+autoid).innerHTML="该作者修改于："+dd.getYear()+"-"+dd.getMonth()+"-"+dd.getDate()+" "+dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();
	$("nei_s_"+autoid).innerHTML=followcontent;	
}
}

