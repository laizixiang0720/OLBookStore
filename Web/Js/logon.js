function ck(){
	var p=0;
	nm(p);
	mm(p);	
	yzm(p);
	if(p==0)$('fm1').submit();
}
function nm(p){
	var t;
	t = $('uid');
	if(V(t) == ''){
		$('uid_m').innerHTML = ('�û�������Ϊ�գ�');
		if(p)p++;
		return false;
	}
	/*if(!V(t).check('[0-9a-zA-Z_]+')){
		$('uid_m').innerHTML = ('�û���ֻ����������ĸ�»�����ɣ�');
		if(p)p++;
		return false;
	}*/	
	$('uid_m').innerHTML = '';	
}
function mm(p){
	var t = $('pwd');
	if(V(t) == ''){
		$('pwd_m').innerHTML = ('���벻��Ϊ�գ�');
		if(p)p++;
		return false;
	}
	$('pwd_m').innerHTML = '';
}
function yzm(p){
	var t = $('yzm2')
	var y = V(t);
	if( y == ''){
		$('yzm2_m').innerHTML = ('��֤�벻��Ϊ�գ�');
		if(p)p++;
		return false;
	}
	if( !y.check('^[0-9]{4}$')){
		$('yzm2_m').innerHTML = ('��֤���');
		if(p)p++;
		return false;
	}	
	$('yzm2_m').innerHTML = '';
}
function nm2(p){
	var nm,t;
	nm = 'uid2';
	t = $(nm);
	if( V(t)== ''){
		msg(nm,'�û�������Ϊ�գ�');
		if(p)p++;
		return false;
	}
	if(!V(t).check('^[0-9a-zA-Z_]{1,20}$')){
		$('uid2_m').innerHTML = ('�û���ֻ����������ĸ�»�����ɣ�');
		if(p)p++;
		return false;
	}	
	return true;
}
function mm2(p){
	var nm = 'pwd2';
	var t = $(nm);
	if( V(t)== ''){
		msg(nm,'���벻��Ϊ�գ�');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function mm22(p){
	var nm = 'pwd22';
	var t = $(nm);
	if( V(t)!=''){
	if(V(t)!= $V('pwd2')){
		msg(nm,'�������벻һ����');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
	}
}
function cemail(p){
	var nm = 'email';
	var t = $(nm);
	var em = V(t);
	if(em == ''){
		msg(nm,'EMAIL����Ϊ�գ�');
		if(p)p++;
		return false;
	}
	if(!isMail(em)){
		msg(nm,'EMAIL��ʽ����');
		if(p)p++;
		return false;
	}
	return true;
}
function yzm2(p){
	var nm = 'yzm';
	var t = $(nm);
	var y = V(t);
	if( y == ''){
		msg(nm,'��֤�벻��Ϊ�գ�');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
	if( y.length!=4){
		msg(nm,'��֤���');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}	
	var x = parseInt(y);
	if (x.toString()!=y.toString()){
		msg(nm,'�����֣�');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function ck1(){
	var p=0;
	nm2(p);
	mm2(p);
	mm22(p);
	cemail(p);
	yzm2(p);
	if(p==0)$('fm2').submit();
}

function adde(object,e,fun){
	if(window.addEventListener){ // Mozilla, Netscape, Firefox
		alert(fun);
		object.addEventListener(e, fun, false);
	} else { // IE
		object.attachEvent(e, fun);
	}
}

function chkusername(){
	var id = "uid2";
	var t = $(id).value.Trim();
	var n = $('old'+id);
	if(n.value.Trim()!=t && t.len()>0 && t.len()<=20){
	$(id+'_m').innerHTML = l;
	n.value=t;
	getajax('/cart/ajaxe.asp?c=name&v='+t,getname);
	}
}

function chkemail(){
	var id = "email";
	var n = $('old'+id);
	var t = $(id).value.Trim();
	if(n.value.Trim()!=t){
	$(id+'_m').innerHTML = l;
	n.value=t;
	getajax('/cart/ajaxe.asp?c=email&v='+t,getemail);
	}
}



function getname(p){
	var nm = "uid2";
	//alert(p.Trim());
	switch(p.Trim()){
	case '0':
		msg(nm,'���û����ѱ�ע�ᣡ');break;
	case '1':
		$(nm+'_m').innerHTML = r;break;
	default:msg(nm,'�����ˣ�'+p);break;
	
	}
}

function getemail(p){
	var nm = "email";
	switch(p.Trim()){
	case '0':
		msg(nm,'��Emial�ѱ�ע�ᣡ');break;
	case '1':
		$(nm+'_m').innerHTML = r;break;
	default:msg(nm,'�����ˣ�'+p);break;
	}
}



