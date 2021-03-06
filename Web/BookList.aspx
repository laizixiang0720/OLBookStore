﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookList.aspx.cs" Inherits="OLBookstore.Web.BookList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 600px;
        }
    </style>
    <link type="text/css" rel="stylesheet" href="Js/product.css" />
    <link href="Js/main2012.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        #box {
            position: absolute;
            font-size: 18px;
            padding: 3px;
            z-index: 500;
        }

        .red13 {
            background: none repeat scroll 0 0 #FFFF99;
        }
    </style>
</head>
<body>
    <div id="head">
            <div class="head_top" id="header_container">
                <div class="w1002 mCenter">
                    <div class="fRight my_cp_box">
                        <ul class="head_list">
                            <li>
                                <div class="my_cp">
                                    <a class="head_link" href="" id="mycp" v="[0,0]">我的学海云端</a>
                                </div>
                                <div style="display: none" id="mycp_data">
                                    <div class="my_cp_pos">
                                        <ul class="xiala">
                                            <li><a target="_blank" href="#/index.aspx" rel="nofollow">我的学海云端</a></li>

                                        </ul>
                                        <div class="clear">
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="help_c">
                                    <a class="head_link" href="" id="help" v="[0,0]">帮助中心</a>
                                </div>

                            </li>

                        </ul>

                        <div class="clear">
                        </div>
                    </div>
                    <div class="wlecome" id="logon"><span class="black">欢迎光临<a href="#">学海云端网上书店</a>　</span>［<a rel="nofollow" href="#">登录</a>］  ［<a href="#">注册</a> ］</div>
                    <div class="clear">
                    </div>
                </div>
            </div>
            <div class="w1002 mCenter pButtom15">
                <div class="shopCart fRight">
                    <div class="head_cart fLeft">
                        <a class="head_link" id="gwc" v="[-30,187]" onclick="gotoCart();">购物车 <span class="cartAmount" id="cartbooknum">0</span> 件</a>
                    </div>
                    <!--<div class="head_buy fLeft" style="z-index: 105;">
                <a href="javascript:void(0)" onClick="gotoCart();">
                    <span class="cartAmount">去结算 ></span></a></div>-->
                    <div id="gwc_data" style="display: none">
                        <div id="shop_cart_pos" class="shop_cart_pos" style="margin: auto auto auto 0px">
                            <div class="shop_cart_bor">
                            </div>
                            <div id="cartbookarr">
                                <p>您的购物车车内尚未添加任何商品，<a href="#">现在就去抢购吧！</a></p>
                            </div>
                            <div class="clear">
                            </div>
                        </div>
                    </div>
                    <div class="head_buy fLeft" style="display: none">
                        <a target="_blank" href=""><span class="cartAmount">去结算 &gt;</span></a>
                    </div>
                    <div class="clear">
                    </div>
                </div>
                <div class="cp_logo fLeft">
                    <a href="#"></a>
                </div>
                <div class="head_search fLeft">
                    <form id="wg001" style="margin: 0px;" name="wg001" method="post" action="#">
                        <input type="text" name="key" id="key" value="" class="search_text">
                        <input class="search_button" type="submit" value=" ">
                        <input name="kid" type="hidden" id="kid" value="1">
                        <input name="pz" type="hidden" id="pz" value="1">
                    </form>
                    <div class="clear">
                    </div>
                    <div class="hotSearch">
                        热门搜索：<a rel="nofollow" target="_blank" href="#">算法</a>
                        <a rel="nofollow" target="_blank" href="#?key1=python&type=&pz=1">python</a>
                        <a rel="nofollow" target="_blank" href="#"><font color="red">数学分析</font></a>
                        <a rel="nofollow" target="_blank" href="#?key1=android&type=&pz=1">android</a>
                        <a rel="nofollow" target="_blank" href="#?key1=%ce%a2%d0%c5&pz=1&type=57">
                            <font color="red">微信</font></a> <a rel="nofollow" target="_blank" href="#?key1=%c6%fb%b3%b5%b1%a3%d1%f8&type=&pz=1&ordertype=2">
                                <font color="red">汽车保养内幕</font></a>
                    </div>
                </div>
                <div class="advSearch fLeft">
                    <a rel="nofollow" target="_blank" href="#">高级搜索</a>
                </div>
                <div class="clear">
                </div>
            </div>
            <div class="nav_bg">
                <div class="w1002 mCenter" style="position: relative;">


                    <div class="head_nav">
                        <a href="#">首页</a><img class="vCenter mLeft5" src="image/nav_line.jpg"><a target="_blank" href="#"> 手机互动</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#/xinshu/">新书</a><img class="vCenter mLeft5" src="image/nav_line.jpg"><a target="_blank" href="#/sale/"> 特价书</a><img class="vCenter mLeft5" src="image/nav_line.jpg"><a target="_blank" href="#/member/readinghome/probationcenter.aspx"> 赠书</a><img class="vCenter mLeft5" src="image/nav_line.jpg"><a target="_blank" href="#/Textbook/"> 教材</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#/ebook/">电子书</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#">视频教程</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#/pod/">按需印刷</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#/cache/rank3/onlinecenter.html">在线阅读</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#/">排行榜</a><img class="vCenter mLeft5" src="image/nav_line.jpg">
                        <a target="_blank" href="#/member/bookpinglun/pinglun.html">书评</a>

                    </div>
                </div>
            </div>
        </div>
    <form id="form1" runat="server">
        <div id="right">
            单击按钮进行排序：
            <asp:Button ID="btnDefault" runat="server" Text="按书籍默认排序" OnClick="btnDefault_Click" />
            <asp:Button ID="btnCate" runat="server" Text="按书籍类别排序" OnClick="btnCate_Click" />
            <asp:Button ID="btnPrice" runat="server" Text="按书籍价格排序" OnClick="btnPrice_Click" />
            <asp:DataList ID="DataList1" runat="server">
                <ItemTemplate>
                    <table class="auto-style1">
                        <tr>
                            <td rowspan="7">
                               <a href='BookDetaile.aspx?Id=<%# Eval("Id") %>' target="_self"> <asp:Image ID="imgBook" runat="server" ImageUrl='<%# GetImg( Eval("ISBN").ToString()) %>' Width="170px" /></a>
                            </td>
                            <td style="width: 430px">书名：<%# Eval("Title") %></td>
                        </tr>
                        <tr>
                            <td>作者：<%# Eval("Author") %></td>
                        </tr>
                        <tr>
                            <td>出版社：<%# GetPublisherNameById( Eval("PublisherId").ToString()) %></td>
                        </tr>
                        <tr>
                            <td>出版时间：<%# Eval("PublishDate") %></td>
                        </tr>
                        <tr>
                            <td>书籍类型：<%# GetCategoryNameById( Eval("CategoryId").ToString() )%></td>
                        </tr>
                        <tr>
                            <td>书籍价格：<%# Eval("UnitPrice") %></td>
                        </tr>
                        <tr>
                            <td>
                                <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl=' <%# "BookDetaile.aspx?bid="+Eval( "Id") %>'>详情</asp:HyperLink>
                            </td>
                        </tr>
                    </table>
                </ItemTemplate>
                <SeparatorTemplate>
                    <hr />
                </SeparatorTemplate>
            </asp:DataList>
            <asp:Label ID="lblPageInfo" runat="server" Text=""></asp:Label>
            <asp:Button ID="btnPre" runat="server" Text="上一页" OnClick="btnPre_Click" />
            <asp:Button ID="btnNext" runat="server" Text="下一页" OnClick="btnNext_Click" />
        </div>
    <div id="left">
    	<div class="left_t">
        	<h3>图书分类</h3>
            <dl class="search_sort">
            	 
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-05">软件与程序设计</a>(6798)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-08">数据库</a>(907)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-06">软件工程及软件方法学</a>(277)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-07">操作系统</a>(186)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-01">计算机科学理论与基础知识</a>(158)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-18">计算机控制与仿真</a>(136)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-02">计算机组织与体系结构</a>(116)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-12">计算机辅助设计与工程计算</a>(103)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-10">数码/设计</a>(95)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-13">办公软件</a>(95)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-16">考试认证</a>(90)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-22">期刊</a>(47)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-03">计算机网络</a>(45)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-20">电子商务与计算机文化</a>(43)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-26">游戏</a>(40)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-04">安全</a>(17)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-14">专用软件</a>(17)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-15">人工智能</a>(17)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-09">硬件与维护</a>(15)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-19">信息系统</a>(4)</dt>
        
        <dt> <a href="#?key1=%b3%cc%d0%f2&pz=1&type=59-17">工具书</a>(1)</dt>
        
            </dl>
          
        </div>
       
     <div id="llls"><div></div></div>
 
 
    </div>

    </form>
</body>
</html>
