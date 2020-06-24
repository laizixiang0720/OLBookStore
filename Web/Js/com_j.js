function Round(a_Num , a_Bit){return( Math.round(a_Num * Math.pow (10 , a_Bit)) / Math.pow(10 , a_Bit));}
Number.prototype.toCurr = function(){
	var t;
    t = Round(this,2).toString();	
    if(/^\d+$/.test(t))  return '£¤'+t+'.00';   
    if(/^\d+\.\d$/.test(t))  return '£¤'+t+'0';	
    return '£¤'+t;
}
String.prototype.toNum = function(){
    if (this == null || this==''){return 0;}
   return parseFloat(this.replace(/[^0-9.]/g,''));}
   
String.prototype.check = function(pattern){var r = new RegExp(pattern, "g");return r.test(this);}
function keydown(fun,c1,c2,c3)
{
	var ev = SearchEvent();
	if(ev!=null)
	{
		if(ev.keyCode==13){fun(c1,c2,c3);return true;}
	}
	else	
	{alert('NULL');}
	return false; 
}

function SearchEvent()
{ 
	if(document.all)
	return window.event;
	var func=SearchEvent.caller; 
	while(func!=null)
	{ //alert(func);
		var arg0=func.arguments[0]; 
		if(arg0) 
		{ //alert(arg0.constructor);
			if(arg0.constructor==Event||arg0.constructor==MouseEvent||arg0.constructor==KeyboardEvent)
			return arg0; 
		} 
		func=func.caller; 
	} 
	return null; 
} 

SearchEvent=function()
{
	if(document.all)return window.event; 
	var e;
	var c=arguments.callee.caller;
	try
	{
		while(c)
		{
			e=c.arguments[0];
			if(e instanceof Event)return e;
			c=c.caller;           
		}
	}
	catch(x){}
	return null;
}
//µÈ´ýÍ¼Æ¬
var loadimg='<img src="http://images.Ñ§º£ÔÆ¶Ë.com/cart/images/load.gif"/>';
//¶ÁÈ¡µÈ´ýÍ¼Æ¬
function load(obj){$(obj).html(loadimg)}

domain=document.domain.split('.').slice(1).join('.');

String.prototype.query = function(){
var a ;
if(this.indexOf("?")!=-1)
a = this.substr(this.indexOf("?") + 1).toLowerCase().split("&"); 
else
{
if(this.indexOf(".asp/")!=-1)
a = this.split('.asp/')[1].toLowerCase().split("/"); 
else
if(this.indexOf(".aspx/")!=-1)
a = this.split('.aspx/')[1].toLowerCase().split("/"); 
else
if(this.indexOf("&")!=-1)
a = this.substr(this.indexOf("&") + 1).toLowerCase().split("&"); 


}

var p = {};
for(var i = 0; i < a.length; i++) { 
var b = a[i].split("="); 
p[b[0]]=b[1];
} 
return p;
}

String.prototype.include = function(s){
var p=false;
for(var i=0;i<s.length;i++){
if(this.indexOf(s[i])!=-1){p=true;break;}
}
return p;
}
//dhtml
if(typeof(HTMLElement)!="undefined"){   
HTMLElement.prototype.contains   =   function(obj){   
while(obj!=null   &&   typeof(obj.tagName)!="undefind"){
if(obj==this)   
return   true;   
obj=obj.parentNode;
}   
return   false;   
};   
} 

function setc(name,value,ms){
var Days = 30;
var exp  = new Date();
exp.setTime(exp.getTime() + ms);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/;domain="+domain;
}


function getc(name){
var arr;
var reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg)) 
return unescape(arr[2]);
else 
return null;
}


function coop(){
    var s = document.location.href.toLowerCase();	 
		var k = ["website_id","eu_id","a_id","cid","source", "cps"];
		
		if (s.include(k)) 
		{
			if (s.include(["cps="])) {
			  
					var p = s.query();
					for (var i = 0; i < k.length; i++) 
					{
						if (p[k[i]] == null)
							p[k[i]] = "";
					}
					p.a_id="";
					p.source = "";
					p.cid = "";
					p.website_id = "";
					p.eu_id = "";
					var reg = /\|/g;
					var a = [p.website_id, p.eu_id, p.a_id.replace(reg, "/"), p.cid.replace(reg, "/"), p.source.replace(reg, "/"), p.cps];
					var d = 86400000;                
					if (a[2] != "")
						d *= 7;
					setc("yqf_20070320", a.join("|"), d);
			}	
			else 
			{
				if(s.include(["chinapub="]))
				 {
					var cp=["eqf","yeedou","linktech","weiyi"];
					if(s.include(cp))
					{
						var p = s.query();
						for(var i=0;i<k.length;i++) if(p[k[i]]==null) p[k[i]]='';
						switch(p["chinapub"])
						{
							case "eqf":
							p.a_id="";
							p.cid="";
							p.source="";
							break;
							case "yeedou":
							p.a_id="";
							p.cid="";
							p.website_id="";
							p.eu_id="";
							break;
							case "linktech":
							p.source="";
							p.cid="";
							p.website_id="";
							p.eu_id="";
							break;
							case "weiyi":
							p.a_id="";
							p.source="";
							p.website_id="";
							p.eu_id="";
							break;
						}
						var reg = /\|/g;
						var a = [p.website_id,p.eu_id,p.a_id.replace(reg,"/"),p.cid.replace(reg,"/"),p.source.replace(reg,"/"),''];
						var d = 1*24*60*60*1000;	
						if(a[2]!='') d *= 7;
						setc("yqf_20070320",a.join('|'),d);		
					}
				}
				else
				{
					
					var lkt1=["a_id"];
					if(s.include(lkt1))
					{
						var p = s.query();
						for(var i=0;i<k.length;i++) if(p[k[i]]==null) p[k[i]]='';
						
							p.source="";
							p.cid="";
							p.website_id="";
							p.eu_id="";						
						var reg = /\|/g;
						var a = [p.website_id,p.eu_id,p.a_id.replace(reg,"/"),p.cid.replace(reg,"/"),p.source.replace(reg,"/"),''];
						var d = 1*24*60*60*1000;	
						if(a[2]!='') d *= 7;
						setc("yqf_20070320",a.join('|'),d);
					
					}
				
				}
			}
		}
		if (s.include(["union_id="]))if(getc('union_id')==null){ setc('union_id',(s.query()).union_id,24*60*60*1000);}
}

//coop();