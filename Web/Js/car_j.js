var chkid=0;var xiangouid='31162';function loaddelbook(){load("#delbook");$.ajax({url:"delbook.ashx?action=1",cache:false,success:function(html){if(html!=''){$('#delbook').show();$("#delbook").html(html);}
else $('#delbook').hide();}});}
function setdelbook(){load("#delbook");$.ajax({url:"delbook.ashx?action=0",cache:false,success:function(html){if(html!=''){$('#delbook').show();$("#delbook").html(html);}
else $('#delbook').hide();}});}
function loadhistory(prev){$.ajax({url:"cart_history.ashx?prev="+prev,cache:false,success:function(html){$("#con_a_1").html(html);if(html==''){setTab('a',2,2);document.getElementById('a1').style.display='none';}}});}
function loadrank(prev){$.ajax({url:"cart_history.ashx?type=rank&prev="+prev,cache:false,success:function(html){$("#con_a_2").html(html);}});}
function loadlogin(){$.ajax({url:"login_j.asp",cache:false,success:function(html){$("#logindiv").html(html);}});}
function cartload(){loadcartbook();loaddelbook();loadhistory(0);loadrank(0);}
//function login()
//{window.location.href='#';}
function chklogin()
{var zh=escape($('#zh').val());var mima=escape($('#mima').val());var yzm=escape($('#yzm').val());var UserLogin_SaveState=$('#UserLogin_SaveState').val();$.ajax({url:'chklogin.asp?zh='+zh+'&mima='+mima+'&yzm='+yzm+'&UserLogin_SaveState='+UserLogin_SaveState,cache:false,success:function(html){$("#dl_tishi").html(html);if(html=='正确登录！'){$('#jianyi').overlay().close();location.reload()}}});}
function selectall(o)
{if (o && (o.checked==true || chkid==1))
{ chkid = 0; $("[name='idarray']").attr("checked", 'true');  }
else
{ chkid = 1; $("[name='idarray']").removeAttr("checked");  }
GetMoney(0);}
function getchk()
{var newarrwy=new Array();var sobj=$("[name='idarray']:checked");for(var i=0;i<sobj.length;i++){newarrwy.push(sobj[i].value)}
return newarrwy;}
function getchkTg()
{var newarrwy=new Array();var sobj=$("[name='tgarray']:checked");for(var i=0;i<sobj.length;i++){newarrwy.push(sobj[i].value)}
return newarrwy;}
function cntnt(add,i)
{var cb3='<table  width="100%" border="0" cellspacing="0" cellpadding="0">'+'<tr><td  width="50%" valign="top" ><div class="pp"></div></td>'+'<td width="7px" align="center" valign="top"  id="jiao" height="6px">'+'<div style="width:5px;"></div><div style="width:4px;"></div>'+'<div style="width:3px;"></div><div style="width:2px;"></div>'+'<div style="width:1px;"></div><div style="width:0px;"></div></td>'+'<td  width="50%" valign="top"><div class="pp"></div></td></tr>'+'</table>';return"<div id='tipcontent' class='content'>"+add+"</div>"+cb3;}
function cntnt3(add,i)
{var cb3='<table  width="100%" border="0" cellspacing="0" cellpadding="0">'+'<tr><td  width="80%" valign="top" ><div class="pp"></div></td>'+'<td width="7px" align="center" valign="top"  id="jiao" height="6px">'+'<div style="width:5px;"></div><div style="width:4px;"></div>'+'<div style="width:3px;"></div><div style="width:2px;"></div>'+'<div style="width:1px;"></div><div style="width:0px;"></div></td>'+'<td  width="20%" valign="top"><div class="pp"></div></td></tr>'+'</table>';return"<div id='tipcontent' class='content'>"+add+"</div>"+cb3;}
function showTip(oid,o)
{var x=oid.offset().top;var y=oid.offset().left;if(o){y=y-(o[0].offsetWidth/2);}
else y=y-65;$("#tipdiv").css({position:"absolute",left:y,top:x-50})
$('#tipdiv').show();$('#tipdiv').html(cntnt(loadimg))}
function showTip2(oid)
{var x=oid.offset().top;var y=oid.offset().left;$("#tipdiv").css({position:"absolute",left:y+732,top:x-48})
$('#tipdiv').show();$('#tipdiv').html(cntnt(loadimg))}
function showTip3(oid,o)
{var x=oid.offset().top;var y=oid.offset().left;if(o)
x=o.offset().top-110;$("#tipdiv3").css({position:"absolute",left:y-140,top:x+40});$('#tipdiv3').show();$('#tipdiv3').html(cntnt3(loadimg))}
function showTip4(oid,o)
{var x=oid.offset().top;var y=oid.offset().left;if(o){y=y-(o[0].offsetWidth/2-6);}
else y=y-65;$("#tipdiv").css({position:"absolute",left:y,top:x-70})
$('#tipdiv').show();$('#tipdiv').html(cntnt(loadimg))}
function showTip5(oid,o)
{var x=oid.offset().top;var y=oid.offset().left;if(o)
x=o.offset().top-160;$("#tipdiv3").css({position:"absolute",left:y-140,top:x+40});$('#tipdiv3').show();$('#tipdiv3').html(cntnt3(loadimg))}
function showTip6(oid,o)
{var x=oid.offset().top;var y=oid.offset().left;if(o){y=y-(o[0].offsetWidth/2+54);}
else y=y-65;$("#tipdiv").css({position:"absolute",left:y,top:x-70})
$('#tipdiv').show();$('#tipdiv').html(cntnt(loadimg))}
function hidetip(){$('#tipdiv').hide();}
function autohidetip(){window.setTimeout(hidetip,2000);document.ondblclick=function(){hidetip()};}
function hidetip3(){$('#tipdiv3').hide();}
function autohidetip3(){window.setTimeout(hidetip3,2000);document.ondblclick=function(){hidetip3()};}
function addbookhome(chk, o) {showTip($(o));
var selectarray=getchk();var addhome=(function(result){$('#tipdiv').html(cntnt(result));autohidetip();});if(selectarray.length>0)
{$.ajax({url:'add.ashx?tushubianhao='+selectarray.join()+'&typeid=c',cache:false,success:addhome});}
else
{$('#tipdiv').html(cntnt('您还没有选择书籍！'));autohidetip();}}
function addbooktohome(bookid,o){showTip3($('#tbac'),$(o));var addhome=(function(result){$('#tipdiv3').html(cntnt3(result));autohidetip3();});$.ajax({url:'add.ashx?tushubianhao='+bookid+'&typeid=c',cache:false,success:addhome});}
function getParameter(name){var url=location.href;var start=url.indexOf("?")+1;if(start==0){return"";}
var value="";var queryString=url.substring(start);var paraNames=queryString.split("&");for(var i=0;i<paraNames.length;i++){if(name==getParameterName(paraNames[i])){value=getParameterValue(paraNames[i]);}}
return value;}
function getParameterName(str){var start=str.indexOf("=");if(start==-1){return str;}
return str.substring(0,start);}
function getParameterValue(str){var start=str.indexOf("=");if(start==-1){return"";}
return str.substring(start+1);}
function winpop_new(tushubianhao,o){$.ajax({url:'putcar.ashx?tushubianhao='+tushubianhao+'&typeid=c',cache:false,success:function(html){if(html.indexOf('购物车中已经有相同商品')>-1){var addone=document.getElementById('addone');showdivs(addone,0,0,0);addone.innerHTML=html;}
else if(html.indexOf('成功')==-1){showTip4($(o),$(o));$('#tipdiv').html(cntnt(html));autohidetip();}
else loadcartbook();}});}
function changeTipthis(m){document.getElementById('shop_cart_up').parentNode.innerHTML=m;}
function showdivs(tag,x,y,w,h)
{var scrollPos;if(typeof window.pageYOffset!='undefined'){scrollPos=window.pageYOffset;}
else if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat'){scrollPos=document.documentElement.scrollTop;}
else if(typeof document.body!='undefined'){scrollPos=document.body.scrollTop;}
tag.style.position='absolute';tag.style.zIndex='999';tag.style.left=(window.screen.availWidth-360)/2+'px';tag.style.top=scrollPos+220+'px';tag.style.display='';}
function winpop_del(tushubianhao,o)
{$.ajax({url:'putcar.ashx?isdel=1&tushubianhao='+tushubianhao+'&typeid=c',cache:false,success:function(html){if(html.indexOf('购物车中已经有相同商品')>-1){var addone=document.getElementById('addone');showdivs(addone,0,0,0);addone.innerHTML=html;}
else if(html.indexOf('成功')==-1){showTip6($(o),$(o));$('#tipdiv').html(cntnt(html));autohidetip();}
else
loadcartbook();}});}
function getmoney(gettype)
{var del=false;var carttable=$('#tb tr');var carttr;var num=0,dingjia=0,jiage=0,mayang=0,shiyang=0,sumbook=0,sumzhong=0
var t='',t1=''
var gift=-1,g_td=0;sumzhong=carttable.length-3;for(var i=1;i<sumzhong+1;i++)
{carttr=$(carttable[i]).find("td");dingjia=$(carttr[1]).html().replace('￥','').toNum();jiage=$(carttr[2]).html().replace('￥','').toNum();num=$($(carttr[3]).find('input')[0]).val().toNum();if(gettype==0)
{t1=$(carttr[1]).html()
if(t1.indexOf('赠')>0&&t1.indexOf('满')>0)
{g_td=i;gift++;t=dealgift(t1.replace(/<[^>]*>/g,''));}}
$(carttr[4]).html((jiage*num).toCurr())
mayang+=dingjia*num;shiyang+=jiage*num;sumbook+=num;}
var nodm=mayang,nogift=mayang;if($('#num_'+xiangouid).length>0)nodm-=$('#td_dz_'+xiangouid).html().toNum();if(gettype==0&&gift>-1){nogift-=t[2];}
if(nogift<t[1]){del=true;location.replace('view.asp?uid=1fceb6');return;}
$('#total_economy').html((mayang-shiyang).toCurr())
$('#total_account').html(shiyang.toCurr())
$('#bookzhong').html(sumzhong)
$('#bookce').html(sumbook)
return shiyang.toCurr();}
function GetMoney(gettype)
{var del=false;var carttable=$('.booktr');var carttr;var num=0,dingjia=0,jiage=0,mayang=0,shiyang=0,sumbook=0,sumzhong=0
var t='',t1=''
var gift=-1,g_td=0;sumzhong=carttable.length;var tb='';var bookids='';var start=0;for(var i=0;i<sumzhong;i++) {
    carttr = $(carttable[i]).find("td"); if (carttr[0].children[0].checked == true) {
        var thisBookId = carttr[0].parentNode.id.replace('tr_', '');
        bookids += thisBookId + ',';
        dingjia = $('#td_dj_' + thisBookId).html().replace('￥', '').toNum();
        tb = $('#td_tj_' + thisBookId).html().replace('￥', '');
        start = tb.indexOf('(');
        jiage = tb.substring(0, start).toNum(); 
        tb = tb.substring(start);
        //jiage = $(carttr[4]).html().replace('￥','').toNum();
        num = $('#num_' + thisBookId).val().toNum();
        if (gettype == 0) {
            t1 = $('#a_shuming_' + thisBookId).html()
            if (t1.indexOf('赠') > 0 && t1.indexOf('满') > 0) {
                g_td = i; //gift 's rowindex
                gift++;
                t = dealgift(t1.replace(/<[^>]*>/g, ''));
            }
        }

        $('#td_dz_' + thisBookId).html((jiage * num).toCurr())
        if (dingjia > jiage)
            mayang += dingjia * num;
        else mayang += jiage * num;
        shiyang += jiage * num;
        sumbook += num;
    } 
}
delCookie('tempbookids'); if ($("#chkall").attr('checked')) bookids = "all";  
setCookie('tempbookids',bookids,1);var nodm=mayang,nogift=mayang;if($('#num_'+xiangouid).length>0)nodm-=$('#td_dz_'+xiangouid).html().toNum();if(gettype==0&&gift>-1){nogift-=t[2];}
if(nogift<t[1]){del=true;location.replace('view.asp?uid=1fceb6');return;}
$('#total_economy').html((mayang-shiyang).toCurr())
$('#total_account').html(shiyang.toCurr())
$('#bookzhong').html(sumzhong)
$('#bookce').html(sumbook)
$('#total_yuanjia').html(mayang.toCurr())
if (shiyang < 48) {
    $("#yunfeiTip").css('display', 'inline-block');
}
else {
    $("#yunfeiTip").hide();
}
return shiyang.toCurr();}
function getCookie(objName){var arrStr=document.cookie.split("; ");for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split("=");if(temp[0]==objName)return unescape(temp[1]);}
return'';}
function setCookie(c_name,value,expiredays){var exdate=new Date();exdate.setDate(exdate.getDate()+expiredays);var cookieVal=c_name+"="+escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString());document.cookie=cookieVal;}
function delCookie(name){var date=new Date();date.setTime(date.getTime()-10000);document.cookie=name+"=a; expires="+date.toGMTString();}
function del_chek(chk,o) {
    var selectarray = getchk(); if (selectarray.length == 0) { showTip($(o)); $('#tipdiv').html(cntnt('请先选择需要删除的商品！')); autohidetip(); return false }
var removeSucceed=(function(result)
{if(result!=null&&$.trim(result)!='0') {
    for (var i = 0; i < selectarray.length; i++) {
        var orderType = $('#td_book_' + selectarray[i])[0].className; if (orderType != '' && $('.' + orderType).length == 1) { $('#order_' + orderType).remove(); }
        var hd = $('#td_num_' + selectarray[i])[0].className; if (hd != '' && $('.' + hd).length == 1) { $('#tr_' + hd).remove(); }
$('#tr_'+selectarray[i]).remove();}
SetNoBook();$("#chkall").attr('checked',true);selectall($("#chkall")[0]);var money=GetMoney(1);var endstr="删除成功！<br/>您的商品总金额为"+money+"！";showTip($('#tb'));$('#tipdiv').html(cntnt(endstr));autohidetip();setdelbook();}})
$.ajax({url:'delabook.ashx?act=del&bookid='+selectarray.join(),cache:false,success:removeSucceed});}
function del_fromchek(bookid,o){showTip5($('#tbac'),$(o));var removeSucceed=(function(result)
{if(result!=null&&$.trim(result)!='0') {
    var orderType = $('#td_book_' + bookid)[0].className; if (orderType != '' && $('.' + orderType).length == 1) { $('#order_' + orderType).remove(); }
    var hd = $('#td_num_' + bookid)[0].className; if (hd != '' && $('.' + hd).length == 1) { $('#tr_' + hd).remove(); }
$('#tr_'+bookid).remove();SetNoBook();$("#chkall").attr('checked',true);selectall($("#chkall")[0]);var money=GetMoney(1);var endstr="删除成功！<br/>您的商品总金额为"+money+"！";$('#tipdiv3').html(cntnt3(endstr));autohidetip3();setdelbook();}})
$.ajax({url:'delabook.ashx?act=del&bookid='+bookid,cache:false,success:removeSucceed});}
function SetNoBook(){if($("[name='idarray']").length==0){var nobook="<table  border='0' cellpadding='0' cellspacing='0' id='tb'><tr ><th width='5%'> </th><th width='47%'>商品</th><th width='8%'>类型</th><th width='8%'>定价</th><th width='10%'>您的价格</th><th width='9%'>数量</th><th width='8%'>单品总价</th><th width='5%'  id='tbac'>操作</th></tr><tr><td colspan='8'><div class='flow_cart'><p>您的购物车中没有商品</p><p><a href='#/' >现在就去选购吧！</a></p></div></td></tr></table>";$('#cartbook').html(nobook);document.getElementById('flow_clear').style.display='none';}}
function chkxiangou(id,o)
{var xiangouobj=document.getElementById('num_'+xiangouid);if(xiangouobj&&(id==xiangouobj)&&($.trim(xiangouobj.innerHTML)>5))
{showTip(o);$('#tipdiv').html(cntnt('该商品为限购商品，您最多只能购买<span id="lmt">5</span>件'));xiangouobj.value=$('bnum_'+xiangouid);autohidetip();return false;}
return true;}
function up(id,o)
{var num=$.trim($('#num_'+id).val())
var bnum=$.trim($('#bnum_'+id).val())
if(parseInt(num)<=0||parseInt(num)>32767||!num.check('^[0-9]{1,5}$')){$('#num_'+id).val('1');num=1;}
if(num==bnum)return;if(!chkxiangou(id,o))return;var tj=$('#td_tj_'+id).html().toNum();var upmoney=(function(result)
{switch($.trim(result))
{case"0":break;case"1":	var endstr = '';var money =0;var tejialimit=getc('tejialimit');if(tejialimit=='1'){setc('tejialimit','',0);endstr = "这是特价书，<br/>每个订单仅限5册！";var tag=document.getElementById('num_'+id);tag.value='5';money =GetMoney(0);}else {money =GetMoney(0);endstr = "修改成功！<br/>您的商品总金额为"+money+"！";}showTip2($('#tr_'+id));showTip2($('#tr_'+id));var money =GetMoney(0);$('#tipdiv').html(cntnt(endstr));$('#bnum_'+id).val(num);autohidetip();break;default:var mr=eval($.trim(result));if($.isArray(mr))
{if(mr[0]==2)
{showTip2($('#tr_'+id));var endstr="库存不足！<br/>您最多只能买"+mr[1]+"个！";$('#tipdiv').html(cntnt(endstr));$('#num_'+id).val($('#bnum_'+id).val());autohidetip();}}
break;}})
$.ajax({url:'delabook.ashx?act=up&bookid='+id+'&num='+num,cache:false,success:upmoney});}
function toorder()
{var booknum=$('#bookce').html().toNum();if(booknum==0)
{showTip($('#submitimg'));$('#tipdiv').html(cntnt("您的购物车没有商品！"));autohidetip();}
else
{window.location.href="Order.htm";}}
function desone(bookid){var tag=document.getElementById('num_'+bookid);var now=parseInt(tag.value);now=now-1;if(now<=1)now=1;tag.value=now;up(bookid,tag);}
function addone(bookid){var tag=document.getElementById('num_'+bookid);var now=parseInt(tag.value);now=now+1;if(now<=1)now=1;tag.value=now;up(bookid,tag);}
function changeCheAll() {
    if ($("[name='idarray']").length == $("[name='idarray']:checked").length) { $("#chkall").attr('checked', true); }
    else $("#chkall").removeAttr("checked"); 
}
function loadcartbook(){$.ajax({url:"cartbook_j.ashx?action=0&tg="+getParameter('tg'),cache:false,success:function(html){if(html.indexOf('table')==-1){eval(html);return;}
chkid=0;$("#cartbook").html(html);if(html.indexOf('您的购物车中没有商品')>-1){document.getElementById('flow_clear').style.display='none';}
else{document.getElementById('flow_clear').style.display='';GetMoney(0);}}});}
function ToChoose(){var hy=getCookie('huiyuan');if(hy==''||hy=="undefined"){document.getElementById('flow_clear').href='#?ref=http://member.学海云端.com/Car/cart_j.aspx';document.getElementById('flow_clear').click();return;}
var tempbookids=getCookie('tempbookids');if(tempbookids==''||tempbookids=="undefined"){showTip($('#flow_clear'),$('#flow_clear'));$('#tipdiv').html(cntnt('请选择要结算的商品！'));autohidetip();return;}
document.getElementById('flow_clear').href='choose_order.aspx';document.getElementById('flow_clear').click();return;}
