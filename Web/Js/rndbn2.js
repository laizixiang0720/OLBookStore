/*
author:withtao@126.com
qq:329864068
Copyright 2007 All rights reserved.
*/
function rndbn()
{
this.oo = null;
var ad_url = "#";
var iurl = "http://images.学海云端.com";
this.show = function(){
    var m = '0 auto';
    if(window.nav=='ie') m = '-20px auto 0';
	document.write('<div  style="clear:both;text-align:center;margin:'+m+'">');
	var num = parseInt((Math.random()*100) % this.oo.length);
    var o = this.oo[num];
	if(o.bg2.indexOf('#')!=-1){
		document.write(mobantb(o));
    }else{
		var w = null,p = 0;
		if(o.bg2 != '') {
			w = '50%';
			p = 1;
		}
		document.write(moban(o,w,p));
		if(w != null) 
		document.write(moban(o,w,p));
		
	}
	document.write('</div>');
}
//0|null 4 right 1 4 left
function moban(o,w,p){
	var pp = new Array('center','right','left');
	if(w == null) w = '100%';	
	var ret = '',ur=o.url;
	if(ur.indexOf('http://')==-1) ur = ad_url+ur;

	ret += ('<div style="float: left;width:'+w+';');
	if(o.bg.indexOf('jpg')>0 || o.bg.indexOf('gif')>0 ){
		ret += ('background:url('+iurl+o.bg+')');
	}
	else{
		ret += ('background-color:'+o.bg);
	}
	ret += (';text-align:'+ pp[p] +';margin:0 auto"><a href="../计算机程序设计艺术 卷1：基本算法（第3版） - 学海云端网上书店_files/'+ur+'" target="_blank">');
	ret += ('<img src="../计算机程序设计艺术 卷1：基本算法（第3版） - 学海云端网上书店_files/'+iurl+o.img+'"  border="0" /></a></div>');
	return ret;
}
function mobantb(o){
	var ret = '',ur=o.url;
	if(ur.indexOf('http://')==-1) ur = ad_url+ur;

	ret += ('<table border="0" cellpadding="0" cellspacing="0"><tr>');
	ret += ('<td style="width:50%;');
	if(o.bg.indexOf('jpg')>0 || o.bg.indexOf('gif')>0 ){
		ret += ('background:url('+iurl+o.bg+')');
	}
	else{
		ret += ('background-color:'+o.bg);
	}
	ret += (';"></td>');
    ret += ('<td align="center"><a href="../计算机程序设计艺术 卷1：基本算法（第3版） - 学海云端网上书店_files/'+ur+'" target="_blank">');
	ret += ('<img src="../计算机程序设计艺术 卷1：基本算法（第3版） - 学海云端网上书店_files/'+iurl+o.img+'"  border="0" /></a></td>');	
	
	ret += ('<td style="width:50%;');
	if(o.bg2.indexOf('jpg')>0 || o.bg2.indexOf('gif')>0 ){
		ret += ('background:url('+iurl+o.bg2+')');
	}
	else{
		ret += ('background-color:'+o.bg2);
	}
	ret += (';"></td></tr></table>');	
	return ret;
}


}