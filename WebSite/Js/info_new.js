var newWindow = null;
var icache={};
function CheckXiaZai(){
	var passed = false;
	for ( i=0; i< document.xiazaiform.zhanghao.length; i++){
			if (document.xiazaiform.zhanghao[i].checked ) {	
			    passed = true;break;
			}
	}
	if (!passed){
		alert("请选择您要下载的章节!");return false;
	}
	else{
		document.xiazaiform.submit();return true;
	}
}	

function my8210(id)
{
if($('aspnetForm'))
{
var ac=$('aspnetForm').action;
if(ac.indexOf('info_new.aspx?id=0')!=-1)
{
if(ac.indexOf('8')==-1 && ac.indexOf('9')==-1)
return id=id.toString(8);
else
return parseInt(ac.split('id=')[1],10);
}
}
return id;
}

function windowOpener(loadpos){    
	if (! newWindow || newWindow.closed){
        newWindow = window.open(loadpos,"adddownload","toolbar=no,location=no,directories=no,status=no,menubar=no, scrollbars=yes,resizable=no,copyhistory=no,width=696, height=300,top=100,left=50");
    }else{newWindow.focus();}
}		
function moreup(IDD,shuming,type){
	var url="#/computers/common/Catalog.asp?type="+type+"&IDD="+IDD+"&shuming="+escape(shuming.replace("·","。"));
    var popup = window.open(url,"info","");
    popup.focus();
}
function winpop1(id,flag){
	window.open("#/member/buybook/gwqh.asp?bookid="+my8210(id)+"&typeid="+flag,"");
}
function winpop11(id,flag){
	window.open("#/member/buybook/gwqh_2.asp?bookid="+my8210(id)+"&typeid="+flag,"");
}
function winpop12(id,flag){
	window.open("#/member/buybook/gwqh_1.asp?bookid="+my8210(id)+"&typeid="+flag,"");
}
function MM_openBrWindow(theURL,winName,features) {
	window.open(theURL,winName,features);
}
function button(str,fun){
    var p = [];
    p.push('<a href="javascript:'+fun+'"   class="car-it">'+str+'</a>');
    return p.join('');
}
function sel(name){
	var p = [];
	p.push('<div class="book-num"><span>我要买</span><input type="text" name="'+name+'" id="'+name+'"  value="1" /><span>件</span><span id="xmsg" title="更多数量请在购物车中修改"></span>');   
	p.push('<div style="clear:both"></div></div>');
	return p.join('');
}
function select_video(name, price) {

    var p = [],a=['','1年','永久'];
    p.push('<select name="' + name + '" id="' + name + '" onchange="set_video_price(this.value,'+price+')">');
    for (var i = 1; i <= 2; i++)
    p.push('<option value="' + i + '" selected>' + a[i] + '</option>');
    p.push('</select><span id="xmsg" title="">选择有效期</span>');
    return p.join('');

//---20120515 何胜利修改
//    var p = [], a = ['', '1年', '永久'];
//    p.push('<select name="' + name + '" id="' + name + '" onchange="set_video_price(this.value,' + price + ')">');
//    var myend = 2;
//    if (jsb.id >=3502632) myend = 1;
//    for (var i = 1; i <= myend; i++)
//        p.push('<option value="' + i + '" selected>' + a[i] + '</option>');
//    p.push('</select><span id="xmsg" title="">选择有效期</span>');
//    return p.join('');
}
function set_video_price(exp,price) {
    var a = [0,0.85,1];
    $('jiage').innerHTML = '￥'+(a[exp]*price).rd(2);
}

function set_video_price2(exp, price,b) {
    var a = [0, 0.85, 1];
    for(var i=0;i<b.length;i++)
    $('sj_'+b[i]).innerHTML = '￥' + (a[exp] * price[i]).rd(2);
}

function putmycar(id,num){
	logUrlHistory('&fun=putmycar.'+id);
    $('xmsg').innerHTML = '<span class="red13">请稍侯……</span>';
	getajax('/cart/putcarx.asp?bookid='+my8210(id)+'&num='+num,function(p){
	    $('xmsg').innerHTML=p;
	});
}

function putmycar_video(id,num){
    $('xmsg').innerHTML = '<span class="red13">请稍侯……</span>';
    getajax('/ureader/ecart/ebookajax.asp?act=add&bookids=' + my8210(id) + '&exp=' + num, function(p) {
	    $('xmsg').innerHTML=p;
	});
}
function tg_newwinpop(id,num){
	logUrlHistory('&fun=tg_newwinpop.'+id);
    $('xmsg').innerHTML = '<span class="red13">请稍侯……</span>';
	getajax('/cart/putcarx.asp?tg=1&bookid='+my8210(id)+'&num='+num,function(p){
	    $('xmsg').innerHTML=p;
	});
}








function winpop_tgnew(tushubianhao,tg,num){//javascript:伪链接 不能传递事件 e=null
	if(tushubianhao==-1){
	if(tg==null)tg=0;
		cartwin_tgnew('#/cart/view.asp?bookid='+my8210(tushubianhao)+'&num='+num+'&tg='+tg+'&'+(new Date()));
		return;
	}
	if(!num)num=1;
	logUrlHistory('&fun=winpop_tgnew.'+tushubianhao);
	newpop_new('/cart/putcarx.asp?bookid='+my8210(tushubianhao)+'&num='+num+'&tg='+tg,getspos());
}
function cartwin_tgnew(url){
      var popup = window.open(url,"shoppingcart2008","");
      popup.focus();
}

function newpop_new(url,spos){
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

function button_tgnew(str,fun){
    var p = [];
 
    p.push('<a href="javascript:'+fun+'"  class="tg-it">'+str+'</a>');
   
    return p.join('');
}




function ydinfo(name){
	var p = [];		  
	p.push('<input name="'+name+'" id="'+name+'" size="12" type="text" /> ');  	
	return p.join('');
}


function button_yd(str,fun){
    var p = [];
 
    p.push('<a href="javascript:'+fun+'"   class="yd-it">'+str+'</a>');
   
    return p.join('');
}

function ydit_info(id,mobile,email){
    var d = $('yd_data');
    var i = d.innerHTML;
    var m = $V('mobile');
    var em = $V('email');
    if(em==''){
        $('yemail').innerHTML='Email 必填项';
        return;
    }
   // var bookid = location.href.split('.com/')[1];
    getajax('/computers/bookinfo/getemail.asp?bookid='+my8210(id)+'&typeid=c&mobile='+m+'&email='+em,function(p){
        if(p.indexOf('成功')!=-1)d.innerHTML = '成功,此书出版后我们将在第一时间通知您。';
        else d.innerHTML = i;
    },'POST');
    d.innerHTML = '请稍侯…… ……';
}



function ydit_info(id,mobile,email){
	
	logUrlHistory('&fun=ydit_info.'+id);

    var d = $('yd_data');
    var i = d.innerHTML;
    var m = $V('mobile');
    var em = $V('email');
    if(em==''){
        $('yemail').innerHTML='Email 必填项';
        return;
    }
   // var bookid = location.href.split('.com/')[1];
    getajax('/computers/bookinfo/getemail.asp?bookid='+my8210(id)+'&typeid=c&mobile='+m+'&email='+em,function(p){
        if(p.indexOf('成功')!=-1)d.innerHTML = '成功,此书出版后我们将在第一时间通知您。';
        else d.innerHTML = i;
    },'POST');
    d.innerHTML = '请稍侯…… ……';
}








function showchatu(i,num){
    var c = $('chatu_img');
    c.src = c.src.replace(/_[0-9]+\./g,'_'+i+'.');
    $('chatu_title').innerHTML = '【插图】'+create_index(num,i);
}
function create_index(num,j){
    var s = '';
    for(var i=1;i<=num;i++){
        if(i==j)
            s += i+' ';
        else
            s += '<a href="javascript:showchatu('+i+','+num+')">'+i+'</a>  ';
    }
    return s;
}
function jueban_tj(){
    var a = 'name,num,email,mobile,bookid'.split(',');
    var v = [];
    var t='';
    for(var i=0;i<a.length;i++){
        t = $(a[i]).value;
        if(t==''){
            $('errinfo_jb').innerHTML='必须全填!';
            return;
        }
        v.push(a[i]+'='+escape(t))
    }
    getajax('/book/jueban.aspx?action=post&'+v.join('&'),function(p){
       
        if(p.indexOf('OK')!=-1){
            var a = eval('('+p+')');
            $('jb_title').innerHTML=a.title;
            $('jb_content').innerHTML=a.content;
            $('jb_anniu').innerHTML='';
        }
        else{
            $('errinfo_jb').innerHTML=p;
        }
    });
}

function showhidden(id,i){ 
var select_obj=document.getElementsByTagName("select"); 
if(i==1){ 
document.getElementById(id).style.display=""; 
}else{ 
document.getElementById(id).style.display="none"; 
} 
} 

function ydit(){
	
    var d = $('yd_data');
    var i = d.innerHTML;
    var m = $V('mobile');
    var em = $V('email');
    if(em==''){
        $('yemail').innerHTML='Email 必填项';
        return;
    }
    var bookid = location.href.split('.com/')[1];
    logUrlHistory('&fun=ydit.'+bookid);
    getajax('/computers/bookinfo/getemail.asp?bookid='+my8210(bookid)+'&typeid=c&mobile='+m+'&email='+em,function(p){
        if(p.indexOf('成功')!=-1)d.innerHTML = '成功,此书出版后我们将在第一时间通知您。';
        else d.innerHTML = i;
    },'POST');
    d.innerHTML = '请稍侯…… ……';
}

function getjb(bookid){
    icache['jueban_c']=$('jueban_c').innerHTML;
    getajax('#/book/jueban.aspx?bookid='+my8210(bookid),'jueban_c');
}
function huifu_jb(){
    $('jueban_c').innerHTML=icache['jueban_c'];
}
function gouxuanquanbu(o, nm) {
    if (nm == null) nm = "tuijians";
    var a = $N(nm);
    var v = o.checked;

    for (var i = 0; i < a.length; i++) {
        a[i].checked = v;

    }
}


function winpopx2(nm,url) {
    var a = $N(nm);
    var b = [];
    for (var i = 0; i < a.length; i++)
        if (a[i].checked) b.push(a[i].value);

    if (b.length > 0) {
    	logUrlHistory('&fun=winpopx2.'+b.join(','));

        newpop(url + b.join(','), getspos());
    }
}
function winpopx(){
	winpopx2('tuijians', '/cart/putcarx.asp?bookids=')
}



//xiaoyuantehuijia({id:,dingjia:,zhekou:,starsale:})
function xiaoyuantehuijia(book){
var zhekou=parseFloat(book.zhekou);
if(book.starsale) zhekou -=0.02;

var price='￥'+( parseFloat(book.dingjia)*zhekou).rd(2);
zhekou = (zhekou.rd(2)*100).rd(0);

var a = [];
a.push('校园优惠价 ：<span class="red">'+price+'</span>');
a.push('<span class="gray12italic">('+zhekou+'折)</span>');
a.push('  ');
a.push('<a href="#/STATIC07/0702/zh_songdali1_070209.asp"  title="校园优惠价" target="_blank">(马上了解)</a> <br />');

//a.push('<a href="javascript:void(window.open(\'/JCYDD/book_5.asp?bookid='+book.id+'\',\'信息提示\'))">加入教材预订单</a> ');
//a.push('<span class="nhorange"><sup>new</sup></span>&nbsp;&nbsp; ');
//a.push('<a href="#/STATIC07/0907/zh_jiaocai_090716.asp" target="_blank">（50天教材预留服务）</a><br />');

return a.join('');
}


var onloadquee = {
q:[],
add:function (fun){
	onloadquee.q.push(fun);
},
fire:function(){
	return function(){
		for(var i=0;i<onloadquee.q.length;i++)
		{onloadquee.q[i]();}
	}
}
};
onloadquee.add(function(){
	   document.getElementsByTagName('h1')[0].innerHTML  +='<img src="image/sf_by.png" border=0></img>';
	   
 
jQuery("li.pro_buy_bg").prepend('<div style="float:right"><a href="http://c.学海云端.com/Chat/IM/Chat.aspx?isChild=true" target="_blank" rel="nofollow"><img src="image/sf_zxzx.gif" width="80" border="0" height="20" /></a></div>')


//$C('push')[0].parentNode.parentNode.innerHTML +=
//'<span class="red">全场满48元,运费全免!</span><br/><a href="#/static/zt_mb/zt_huodong_07_secondhandbook.asp/filename=dj090610">低价书，二手书，2折起</a>';

 //if ($C('pro_r_deta')[0].innerHTML.indexOf('#/love/chubanshe/chubanshe.asp?newid=148')!=-1){ 
//	
//	$C('pro_buy_act')[0].innerHTML  =
//'<a target="_blank" href="#/STATIC/zt_mb/zt_huodong_2013_4.asp?filename=2013_qh_20130509">本书参加清华大学出版社满100减10，满200减20活动!</a><br>'+$C('pro_buy_act')[0].innerHTML;
//
//	} else  if ($C('pro_r_deta')[0].innerHTML.indexOf('#/love/chubanshe/chubanshe.asp?newid=141')!=-1){ 
//	
//	$C('pro_buy_act')[0].innerHTML  =
//'<a target="_blank" href="#/STATIC/zt_mb/zt_huodong_2013_4.asp?filename=2013_rydq_20130507">本书参加人民邮电出版社满100减10，满200减20活动!</a><br>'+$C('pro_buy_act')[0].innerHTML;
//
//	} 
//	else  if ($C('pro_r_deta')[0].innerHTML.indexOf('#/love/chubanshe/chubanshe.asp?newid=549')!=-1){ 
//	
//	$C('pro_buy_act')[0].innerHTML  =
//'<a target="_blank" href="#/STATIC/zt_mb/zt_huodong_2013_4.asp?filename=2013_hz_20130509">本书参加华章图书满100减10，满200减20活动!</a><br>'+$C('pro_buy_act')[0].innerHTML;
//
//	} 
//	else  if ($C('pro_r_deta')[0].innerHTML.indexOf('#/love/chubanshe/chubanshe.asp?newid=499')!=-1){ 
//	
//	$C('pro_buy_act')[0].innerHTML  =
//'<a target="_blank" href="#/STATIC/zt_mb/zt_huodong_2013_4.asp?filename=2013_dz_20130509">本书参加电子工业出版社满100减10，满200减20活动!</a><br>'+$C('pro_buy_act')[0].innerHTML;
//
//	} 
	//var t1 = "12/09/2013 00:00:00";
	 if ($('tejiashu_info')){ 
		$('tejiashu_info').innerHTML  ='注：特价书资源有限，售完即止，部分书无光盘等，图书均有盖章或打孔，部分图书页面有轻微折损、书脊磕碰等瑕疵，对品相有要求者慎重购买。'; 
	
		}
	
	
	
	

// 
 
 var tallid=",,191293,191905,";
 

//if (tallid.indexOf(","+jsb.id+",")>0){ 
// $C('pro_buy_act')[0].innerHTML =
// '<a style="color:#f00;font-size: 13px;font-weight: bold;" target="_blank" href="#" title="客户端下载">移动端首单立减5元（POD、预售不参与）<br>只限移动端6折封顶</a>';
// }
 
 
  var tallid2=",,4881695,4886855,4886851,3804271,4881994,4881446,4881963,4886852,4880104,4881993,4887001,4881992,4882039,4886850,4886856,4886950,4887790,4887871,4879791,4886854,4886965,4886968,4887912,4887913,4887914,4881129,4703049,4881796,4886874,4886861,3999845,4880105,4886859,4881970,4875689,4881991,4881968,4881449,4881888,4881239,4881967,4887872,4886950,4882039,4881446,4881963,3804271,4881695,";
  
 
  
 	var t1 = "12/07/2015 00:00:00";
	//var t1 = "04/30/2014 00:00:00";
	var t2 = "12/14/2015 00:00:00";
	var t3=new Date(); 
//if(t1.toDate().dateDiff('s',t3)>=0  && t2.toDate().dateDiff('s',t3)<0 )
 
 
 
 
//if(t1.toDate().dateDiff('s',t3)>0 )
if(t2.toDate().dateDiff('s',t3)<0 )
{
 
	  
		//if ($('zhe_tubiao27')){ 
//		$('zhe_tubiao27').innerHTML  ='<div class="event_mark"><img src="image/4zfd.png" /></div>'; 
//	
//		}
//		

if (jsb.shuming.indexOf('特价书')!=-1 && jsb.sts==1){
	 
	 $C('book_s')[0].innerHTML =
 '<div class="event_mark"><img src="image/12mjtj.png" /></div>'+$C('book_s')[0].innerHTML;
	 
}
 

 if (document.getElementsByTagName('h1')[0].innerHTML.indexOf('../image/pre_sale.gif')!=-1){ 
 
 }
 else if (document.getElementsByTagName('h1')[0].innerHTML.indexOf('../image/out_print.gif')!=-1){ 
 
 }
  else if (document.getElementsByTagName('h1')[0].innerHTML.indexOf('../image/out_stock.gif')!=-1){ 
 
 }
 else if (document.getElementsByTagName('h1')[0].innerHTML.indexOf('../image/pro_pod.gif')!=-1){ 
 
 }
 else if (document.getElementsByTagName('h1')[0].innerHTML.indexOf('../image/pro_sch.gif')!=-1){ 
 
 }
 
 
 else if (tallid2.indexOf(","+jsb.id+",")>0){ 
 
 }
 
 
 
  else if ($('right').innerHTML.indexOf('Ebook价：')!=-1){ 
 
 }
 else if ($('right').innerHTML.indexOf('永久有效')!=-1){ 
  
  
 }
  else if (jsb.dingjia<30){ 
  
  
 }else if (jsb.zhekou>=1){ 
  
  
 }

 else{
	//	 $C('book_s')[0].innerHTML =
// '<div class="event_mark"><img src="image/15s11_tskhj.png" /></div>'+$C('book_s')[0].innerHTML;
}


	 //if ($('zhe_tubiao24')){ 
//		 
//		 zhe_tubiao24.style.display="block";
//	
//		}
}

//var t4 = "04/18/2014 10:00:00";
//var t5 = "04/14/2014 10:00:00";
//var t6=new Date(); 
////if(t4.toDate().dateDiff('s',t6)>0 )
//if(t5.toDate().dateDiff('s',t6)<0 )
//{
//	 if ($('zhe_tubiao8')){ 
//		$('zhe_tubiao8').innerHTML  ='<div class="event_mark"><img src="image/sf_dj.png" /></div>'; 
//	
//		}
//	// if ($('zhe_tubiao6')){ 
//		 
//	//	 zhe_tubiao6.style.display="block";
//	
//	//	}
//}

	
});


onloadquee.add(function(){
    var a = $('ssdiv');
   if(a){
       var b=a.parentNode;
       if(b){
           var newnode = document.createElement('div');
           newnode.setAttribute('style','float: left; width: 172px; ');
           newnode.innerHTML='<a href="#/static07/0901/zh_jueba_090121.asp"><img src="http://images.学海云端.com/images/cuxiao/jsj_jueban_18180.gif"/></a>';
           b.insertBefore(newnode,a);
       
       }
   
   
   }
   
   
});







window.onload=onloadquee.fire();





function showtop(ul,i)
{
	jQuery("#ul_top2_"+ul).find("[id^='li_top_"+ul+"_d_']").hide();
	jQuery("#ul_top2_"+ul).find("[id^='li_top_"+ul+"_t_']").show();
	jQuery("#ul_top2_"+ul).find("#li_top_"+ul+"_d_"+i).show();
	jQuery("#ul_top2_"+ul).find("#li_top_"+ul+"_t_"+i).hide();
}
  


var inner='';
var jp2 = new jpg(0,270,0);
var cp = function(){};
function showhidediv(id,id1){
try{
var sbtitle=document.getElementById(id);
if(sbtitle){
if(sbtitle.style.display=='block'){
sbtitle.style.display='none';
document.getElementById(id1).innerHTML="↓展开全部内容";

}else{
sbtitle.style.display='block';
document.getElementById(id1).innerHTML="↑折  叠";
}
}
}catch(e){}
}



 
 
 



function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("con_"+name+"_"+i);
	  if(name=="a")
	  menu.className=i==cursel?"pro_r_t_hover":"";
	  else
	  menu.className=i==cursel?"click":"";
	  con.style.display=i==cursel?"block":"none";
	}
	 var ccc=  "#con_"+name+"_"+cursel;  
	location.href = ccc;
	 
}



 
var tip={$:function(ele){ 
    if(typeof(ele)=="object") 
        return ele; 
    else if(typeof(ele)=="string"||typeof(ele)=="number") 
        return document.getElementById(ele.toString()); 
        return null; 
    }, 
    mousePos:function(e){ 
        var x,y; 
        var e = e||window.event; 
        return{x:e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,y:e.clientY+document.body.scrollTop+document.documentElement.scrollTop}; 
    }, 
 

    start:function(obj){ 
        var self = this; 
        var t = self.$("mjs:tip"); 
        obj.onmousemove=function(e){ 
            var mouse = self.mousePos(e);     
            t.style.left = mouse.x + 10 + 'px'; 
            t.style.top = mouse.y + 10 + 'px'; 
            t.innerHTML = obj.getAttribute("tips"); 
            t.style.display = ''; 
        } 
        obj.onmouseout=function(){ 
            t.style.display = 'none'; 
        } 
    } 
} 
 



 
 

function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var openTip = oOpenTip || "";
var shutTip = oShutTip || "";
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = shutTip; 
   }
} else {
   targetObj.style.display="block";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = openTip; 
   }
}
}

 


function bqcopy(v){
 
document.getElementById('wdbiaoqian2').innerHTML = v;
 
}




 
 function qhdingji(id){
     
    var m = $V('qhdjtel');
    var em = $V('qhdjemail');
    if(em!=''){ 
   
        getajax('/computers/bookinfo/getemail_2012.asp?lei=1&bookid='+id+'&typeid=c&mobile='+m+'&email='+em,function(p){
            
            document.getElementById('boxquehuodj_no').style["display"]="none"; 
            
             var zt=p;
                if(zt=="1"){
                 openShutManager(this,'boxquehuodj',false);
                 openShutManager(this,'boxquehuodjok',false,'','')
                }else{
                     document.getElementById('boxquehuodj_no').style["display"]=""; 
                     $("boxquehuodj_no").innerHTML=p; 


                }
            
            
        },'POST');
       
     }else{
     
      document.getElementById('boxquehuodj_no').style["display"]=""; 
     $("boxquehuodj_no").innerHTML="请填写email!"; 
     
     }
     
    
     
}
 function yddingji(id){
     
    var m = $V('ydtel');
    var em = $V('ydemail');
   
    if(em!=''){ 
        getajax('/computers/bookinfo/getemail_2012.asp?bookid='+id+'&typeid=c&mobile='+m+'&email='+em,function(p){
            
            document.getElementById('boxyuding_no').style["display"]="none"; 
            
               var zt=p;
                if(zt=="1"){
                 openShutManager(this,'boxyuding',false);
                 openShutManager(this,'boxyudingok',false,'','')
                }else{
                     document.getElementById('boxyuding_no').style["display"]=""; 
                     $("boxyuding_no").innerHTML=p; 

                }

 

        },'POST');
        
        
        
     }else{
     document.getElementById('boxyuding_no').style["display"]=""; 
     $("boxyuding_no").innerHTML="请填写email!"; 
     }
     
     
}

