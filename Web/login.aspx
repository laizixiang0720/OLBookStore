<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="OLBookstore.Web.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>学海云端 会员登录</title>
    <link href="Js/main2012_cs.css" rel="stylesheet" type="text/css">
<style type="text/css">#xtip {background-color:#FFFF99;position:absolute;font-size:18px;border: 1px solid #000000;padding: 3px;z-index: 500;}</style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <span id="xtip" style="top: 414px;left: 761.5px;display:none;"></span>




<table cellpadding="0" cellspacing="0" id="outerX" style="display: none; position: absolute;left: 0px; *margin-left: -1px; top: 0px; z-index: 100;">
    <tbody><tr>
        <td id="innerX">
        </td>
    </tr>
</tbody></table>
<div id="head">
    <div class="head_top">
        <div class="w1002 mCenter">
            <div id="logon" class="wlecome"><span class="black">欢迎光临<a href="#">学海云端网上书店</a>　</span>  ［<a rel="nofollow" href="#">登录</a>］  ［<a href="#">注册</a> ］</div>
            <div class="fLeft my_help_box">
                <ul class="head_list">
                    <li>
                        <div class="help_c">
                            <a class="head_link" href="" id="help" v="[0,0]">帮助中心</a></div>
                    </li>
                </ul>
            </div>
            <div class="clear">
            </div>
        </div>
    </div>
    <div class="w1002 mCenter pButtom15">
        <div class="cp_logo">
            <a href="#"></a>
        </div>
    </div>
</div>


<div id="main">
	<div class="sign">
		<form method="post" name="form1" action="#" onsubmit="return check()">
        <div class="sign_box">
			<div class="item">
            	<span class="float1">用户名：</span>
                <div class="item_inp">
                    <asp:TextBox ID="txtLoginId" Font-Size="16" CssClass="normal" runat="server"></asp:TextBox></div>
                <div class="clear"></div>
            </div>
            <div class="item">
            	<span class="float1">密&nbsp;&nbsp;码：</span>
     <div class="item_inp">
         <asp:TextBox ID="txtLoginPwd" runat="server" CssClass="normal" Font-Size="16" TextMode="Password"></asp:TextBox><span><a target="_blank" href="#">忘记密码？</a></span></div>
            	<div class="clear"></div>
            </div>
				
			
            <div class="item">
                <span class="float2">Cookie：</span>
                <div class="item_inp"><input class="check" type="checkbox" value="1" name="UserLogin_SaveState"><lable>两周内不再登录</lable></div>
                <div class="clear"></div>
                <p class="cookie_ts">如果您在公共场所使用，建议不选择此项</p>
            </div>
            <div class="item t_center" style="position:relative;">
                <asp:ImageButton ID="btnLogin" runat="server" ImageUrl="image/sign.jpg" Height ="37" BorderWidth="0"  style="vertical-align:middle" OnClick="btnLogin_Click" />
            	
                <a style="font-size:13px; margin-left:15px; vertical-align:middle;" href="#">免费注册</a>
            </div>
            <div class="item" style="position:relative;height:60px;">
            	<p class="sign_lh">使用合作网站账号登录学海云端：</p>
                <span><a href="#"><img src="image/sign_qq.jpg"></a></span>
                <span class="mLeft10"><a href="#"><img src="image/sign_db.jpg"></a></span>
                <span class="mLeft10"><a href="#"><img src="image/sign_zfb.jpg"></a></span>
                <span style=" position:absolute; bottom:-5px; right:5px;text-align:center;"> <img src="image/qrcode.png" width="70"><br>
扫我直接进入手机站</span>
                <p class="sign_lh">手机登录m.学海云端.com，享更多优惠<br>关注微信“互动出版网”，每天签到送积分</p>
            </div>
        </div>
       
        <div class="sign_login">
        	
			<a target="_blank" href="#"><img src="image/sdtlms_535230.png" alt="元旦欢乐送 买二送一 买四送二" width="535" border="0"></a>
        </div>
        <div class="clear"></div></form>
    </div>
	
</div>

<div id="bottom">
	<div class="w1002 mCenter bottom_c">
        <div class="cp_copyright">
        	<p><a target="_blank" href="#">首页</a> | 
			<a target="_blank" rel="nofollow" href="#">关于我们</a> | <a target="_blank" rel="nofollow" href="#">诚聘英才</a>
			<a target="_blank" href="#"> 
<img class="vCenter" src="image/weibo_xl.png"></a>  | 
<a target="_blank" href="#" rel="nofollow">联系我们</a> | <a target="_blank" href="#" rel="nofollow">网站联盟</a> | 

<a href="http://tongji.baidu.com/hm-web/welcome/ico?s=3d4e3529ee0ff44664489f361edc6693" target="_blank">
<img border="0" src="image/21.gif" width="20" height="20"></a><script src="Js/h(1).js" type="text/javascript"></script>
<a href="http://tongji.baidu.com/hm-web/welcome/ico?s=c68f8a95996223c018465c5143d0bdea" target="_blank">
<img border="0" src="image/21.gif" width="20" height="20"></a>
			
			</p>
            <p>Copyright 2000-2013 学海云端网上书店,All Rights Reserved</p>
            <div class="clear"></div>
            <div class="fLeft"><a href="#/view.asp?bianhao=010202001072000126" target="_blank"><img class="beian" src="image/beian.jpg"></a></div>
            <div class="fLeft mLeft10 mTop5">
            	<p><a target="_blank" href="">京ICP备06020074号-1 | 北京市公安局西城分局备案编号：110102000441</a></p>
                <p><a target="_blank" href="">中华人民共和国出版物经营许可证：新出发京批字第直0496号</a></p>
        	</div>
            <div class="clear"></div>
    	</div>
    </div>
</div>
        </div>
    </form>
</body>
</html>
