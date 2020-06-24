

function name2(p){
	var nm = 'uname';
	var t = $(nm);
	if( V(t)== ''){
		msg(nm,'姓名不能为空！');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function department2(p){
	var nm = 'department';
	var t = $(nm);
	if( V(t)== ''){
		msg(nm,'所在院系不能为空！');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function zhuanye2(p){
	var nm = 'zhuanye';
	var t = $(nm);
	if( V(t)== ''){
		msg(nm,'专业不能为空！');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function studentyear2(p){
	var nm = 'studentyear';
	var t = $(nm);
	if( V(t)== ''){
		msg(nm,'学级不能为空！');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function address2(p){
	var nm = 'address';
	var t = $(nm);
	if( V(t)== ''){
		msg(nm,'地址不能为空！');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
}
function tel2(p){
	var nm = 'tel';
	var t = $(nm);	
	if( V(t)== ''){
		msg(nm,'电话不能为空！');
		if(p)p++;
		return false;
	}else{$(nm+'_m').innerHTML = r;}
	
}

