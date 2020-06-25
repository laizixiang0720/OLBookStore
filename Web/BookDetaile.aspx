<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookDetaile.aspx.cs" Inherits="OLBookstore.Web.BookDetaile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="Js/main2012.css" rel="stylesheet" type="text/css"/>
<link href="Js/product.css" rel="stylesheet" type="text/css"/>
     <style type="text/css">
         .red14 h1 {
             font-size: 14px;
             line-height: 20px;
             display: inline;
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
            <div class="pro_book">

                <div class="pro_book">
                    <h1>
                        <%=Book.Title %>
                        <img src="image/sf_by.png" border="0" />
                    </h1>
                    <div class="pro_book_img">
                        <dl>
                            <dt class="book_s">

                                <a href="" class="gray12a">
                                    <img src='<%= "userfiles/"+Book.ISBN+".jpg" %>'  border="0"  alt='<%= Book.Title %>' />
                                </a>
     
                            </dt>
                            <dd>

                            </dd>
                        </dl>
                    </div>

                </div>


                <div class="pro_buy_intr">
                    <ul>

                        <li>定价：<span class="pro_buy_pri">￥<%= Book.UnitPrice %></span></li>
                        <li id="xxjg">会员价：<span class="pro_buy_sen">￥<%= Convert.ToDouble(Book.UnitPrice) * 0.75%> (75折)</span></li>

                        <li>校园优惠价：<span class="pro_buy_sen">￥<%= Convert.ToDouble(Book.UnitPrice) * 0.77%> (77折)</span>   <a href="#/STATIC07/0702/zh_songdali1_070209.asp" title="校园优惠价" target="_blank">(马上了解)</a> </li>



                        <li class="pro_buy_star">评分：<a href="#/member/bookpinglun/viewpinglun.asp?id=4898555" target="_blank"><img src="image/star_0.gif" /><img src="image/star_0.gif" /><img src="image/star_0.gif" /><img src="image/star_0.gif" /><img src="image/star_0.gif" /> （已有0条评价）</a></li>
                        <li class="pro_buy_bg">
                            <div style="float:right"><a href="#" target="_blank" rel="nofollow"><img src="image/sf_zxzx.gif" width="80" border="0" height="20" /></a></div>
                            <span class="fLeft">我要买：</span><a class="lower_book_q" onclick="value_up(&#39;0&#39;)"></a><input type="text" value="1" id="booknum" name="booknum" /><a class="add_book_q" onclick="value_up(&#39;1&#39;)"></a><div class="clear"></div>
                            <div class="clear"></div>
                        </li>

                    </ul>
            </div>
            <div class="right_pro_intr">
                <div class="pro_r_t" id="pro_title" style="">

                    <a id="a1" onclick="setTab(&#39;a&#39;,1,3)" class="pro_r_t_hover">商品详情</a>
                    <div style="float:right;width:104px;height:24px; ">
                        <asp:ImageButton ID="imgbtnCart" runat="server" ImageUrl="image/sf_gwc.jpg" OnClick="imgbtnCart_Click" />
                    </div>
                    <div class="clear"></div>
                </div>
                <div id="con_a_1" name="con_a_1" style="display:">
                    <div class="pro_r_deta">
                        <h3>基本信息</h3>
                        <ul>

                            <li>
                                作者：
                                <a href="#" target="_blank"><strong><%=Book.Author %></strong> </a>&nbsp;&nbsp;

                            </li>
                            <li>出版社：<a href="#/love/chubanshe/chubanshe.asp?newid=141" target="_blank"><%= GetPublisherNameById(Book.PublisherId) %></a> </li>
                            <li>ISBN：<strong><%=Book.ISBN %></strong></li>  
                            <li>出版日期：<%=Book.PublishDate.ToString("Y") %></li>
                            <li>
                                <div style="display:block; float:left">所属分类：</div><span style="display:block; float:left">
                                   
                                    <a class="blue13" href="#/1_1_59_0.html"> <%=GetCategoryNameById(Book.CategoryId) %> </a>
                                </span>
                                <div style="clear:both"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="pro_r_deta">
                        <h3 id="nrjj">内容简介</h3><!--更改-->
                        <div>
                            <%=Book.ContentDescription %>
                        </div>

                    </div>
                    <div class="pro_r_deta">
                        <h3 id="ml">目录</h3>
                        <div>
                            <%= Book.TOC%>
                            </div>
                        <div class="clear5px"> </div>

                    </div>
                </div>
                </div>

        </div>
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
    </div>
    </form>
</body>
</html>
