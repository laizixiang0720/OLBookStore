function getit(id){//选择触发事件
	$(id+"_i").innerHTML = $V(id);

	switch(id){
	case 'country'://触发者
		if($V(id)!='')getthis('province',$V(id),'','');
		else clr('province_c');
		clr('city_c');clr('area_c');clr('college_c');
		clr('province_i');clr('city_i');clr('college_i');clr('area_i');
		break;	
		
	case 'province':
		if($V(id)!='')
		getthis('city',$V('country')+'|'+$V(id),'','');
		//getthis('college',$V('country')+'|'+$V(id),'','college');
		else
		clr('city_c');
	
		clr('area_c');clr('college_c');
		clr('city_i');clr('college_i');clr('area_i');
		break;	
		
	case 'city':
		if($V(id)!=''){
		getthis('area',$V('country')+'|'+$V('province')+'|'+$V(id),'','');
		getthis('college',$V('country')+'|'+$V('province')+'|'+$V(id),'','college');
		//$("college_i").innerHTML = $V('college');
		}
		else
			clr('area_c');			
		clr('area_i');clr('college_c');
		break;	
	
	case 'area':
		if($V(id)!=''){
			$("area_m").innerHTML="";	
		//getthis('college',$V('country')+'|'+$V('province')+'|'+$V('city')+'|'+$V(id),'','college');		
		}
		//else
			//clr('college_c');
		break;	
	}
}
//容器为 country_c
function getthis(grade,vl,slt,who){
	if(!who) who = '';
	if($(grade+'_c'))$(grade+'_c').innerHTML = '<img src="/cart/images/load.gif"/>';
	getajax('/cart/addr_ajax_zjs.asp?grade='+grade+'&vl='+escape(vl)+'&slt='+escape(slt)+'&who='+who,
	function(s){
		if($(grade+'_c'))$(grade+'_c').innerHTML = s;
	},'',function(){location.replace(location.href);});
}
function clr(id){
	if($(id))$(id).innerHTML = '';	
}

function ck(){
	var p=0;
	if(!setstr('name','$V("name").len()<1','请填写收货人姓名'))p++;
	if($('country_c')==null){
		getall();return false;
	}
	
	if($N('area').length>0){
		if(!setstr('area','$("area").options.selectedIndex<1','请选择区县'))p++;
	}
	if(!($N("ut")[0].checked||$N("ut")[1].checked)){p++;alert('选择用户类型，高校用户一定要选择所在高校！');return false;}
	if($("college")){
		if(!setstr('ut','$N("ut")[1].checked&&($("college").options.selectedIndex<1)','请选择高校'))
		p++;
	}else{
		if($N('ut').length>0)$N("ut")[0].checked=true;
	}
	if(!setstr('address','$V("address").len()>140','您填写的详细地址太长')) p++;
	if(!setstr('address','$V("address").len()<5','您填写的详细地址太短')) p++;
	if(!setstr('postcode','!$V("postcode").check("^[0-9]{6}$")','您填写的邮编无效，请核实重填'))p++;
	if(!setstr('email','!isMail($V("email"))','您填写的e-mail无效，请核实重填')) p++;
	
	if($V("tel2").Trim()!=''||$V("mobile").Trim()!=''){
		if($V("tel2").Trim()!=''){
			if(!setstr('tel2','!$V("tel2").check("^[0-9]{6,8}$")','您填写的固定电话无效，请核实重填'))p++;
			if(!setstr('tel2','$V("tel1").Trim().len()<1','您尚未填写电话区号')) p++;
		}
		$('mobile_m').innerHTML = '';		
		if($V("mobile").Trim()!=''){
		if(!setstr('mobile','!$V("mobile").check("(^1[0-9]{10}$)|(^106[0-9]{10,12}$)")','您填写的手机电话无效，请核实重填'))p++;
		}
		
	}
	if($V("tel2").Trim()==''&&$V("mobile").Trim()==''){
		$('mobile_m').innerHTML = '固定电话、手机 请务必填写一项';p++
	}

	if(p==0)
		return true;
	else
		return false;

}
