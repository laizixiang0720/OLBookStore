/*
author:withtao@126.com
qq:329864068
Copyright 2007 All rights reserved.
*/
function jpg(zcover,width,height){
	if(zcover == null) this.z = 0;
	else this.z = zcover;
	if(width == null) this.width = 0;
	else this.width = width;
	if(height == null) this.height = 0;
	else this.height = height;
	var t = b_t();
	this.finalUrl = 'http://images.学海云端.com/ebook/0001/nocover.gif';
	this.url = ['http://images.学海云端.com']; //'#/computers',
	var c = [['cover.jpg','zcover.jpg'],['zcover.jpg','cover.jpg']];
	//,'cover.gif','zcover.gif','zcover.gif','cover.gif'
	if(this.z == 0)
	this.pic = c[0];
	else
	this.pic = c[1];
	this.oe = function (o){
		var s = o.getAttribute('mysrc')||o.mysrc;
		var n = o.getAttribute('n')||o.n;
		var b = o.getAttribute('s')||o.s;
		var t = this.pic;
		if(b=='1')	this.pic = c[1];
		else 	this.pic = c[0];
		n = parseInt(n) + 1;
		if((s  == null )||n == this.url.length*this.pic.length) {
			o.src = this.finalUrl;
			try{o.onerror = '';}catch(e){}; 
			return;
		}
		try{o.setAttribute('n',n);}catch (e){o.n  = n;}
		o.src = this.url[parseInt(n / this.pic.length)] + s + '/' + this.pic[parseInt(n) % this.pic.length];
		if(t=='op')o.style.display = '';
		this.pic = t;
	}
	this.w = function (o){
		o.style.display = '';
		if(this.height == 0 && this.width != 0)
		{if(parseInt(o.width) > this.width) o.width = this.width;}
		if(this.width == 0 && this.height != 0)
		{if(parseInt(o.height) > this.height) o.height = this.height;}
	}
	this.show = function (o){
		o.style.display = '';
	}
}
function b_t(){var t='';if(document.all) t = 'ie';else t= 'ff';if(navigator.userAgent.indexOf("Opera")!=-1)t = 'op';return t;};