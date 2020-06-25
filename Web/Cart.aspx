<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Cart.aspx.cs" Inherits="OLBookstore.Web.Cart" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta http-equiv="Content-Type" content="text/html; charset=GBK" />
    <title>购物车</title>
    <link href="Js/main2012.css" rel="stylesheet" type="text/css" />
    <link href="Js/my_cp.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        #xtip {
            background-color: #FFFF99;
            position: absolute;
            font-size: 18px;
            border: 1px solid #000000;
            padding: 3px;
            z-index: 500;
        }

        .book_img {
            height: 91px;
        }
    </style>
    <link href="Js/dingdan.css" rel="stylesheet" type="text/css" />

</head>
<body>
    <form id="form1" runat="server">
        <div>


            <table cellpadding="0" cellspacing="0" id="outerX" style="display: none; position: absolute; left: 0px; *margin-left: -1px; top: 0px; z-index: 100;" onmouseout="otX(this);">
                <tbody>
                    <tr>
                        <td id="innerX"></td>
                    </tr>
                </tbody>
            </table>
            <div id="head">
                <div class="head_top">
                    <div class="w1002 mCenter">
                        <div id="logon" class="wlecome"><span class="black">欢迎光临<a href="#">学海云端网上书店</a>　</span>［<a rel="nofollow" href="#">登录</a>］  ［<a href="#?gwc=1">注册</a> ］</div>
                        <div class="fLeft my_help_box">
                            <ul class="head_list">
                                <li>
                                    <div class="help_c">
                                        <a class="head_link" href="" id="help" v="[0,0]">帮助中心</a>
                                    </div>

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
            <div>

                <div id="tipdiv" class="box_window" style="top: 0px; left: 0px; display: none">
                </div>
                <div id="tipdiv3" class="box_window" style="top: 0px; left: 0px; display: none">
                </div>
                <div id="main">
                    <div class="cart_box">
                        <div class="flow_step">
                            <ul class="cols_1">
                                <li class="step_1">1.我的购物车</li>
                                <li class="step_2">2.确认订单信息</li>
                                <li class="step_3">3.成功提交订单</li>
                            </ul>
                        </div>
                        <div class="flow_step_title">
                            <h2 id="mycar">购物车
                            </h2>
                            <label id="tipTag" style="float: left">
                            </label>
                            <div class="clear">
                            </div>
                        </div>

                        <div id="cartbook" class="flow_pro_list">
                            <table border="0" cellpadding="0" cellspacing="0" id="tb">
                                <tbody>
                                    <asp:Repeater ID="Repeater1" runat="server" OnItemCommand="Repeater1_ItemCommand">
                                        <HeaderTemplate>
                                            <tr>
                                                <th width="5%">
                                                    <label style="padding-left: 5px;">
                                                    </label>
                                                </th>
                                                <th width="47%">商品</th>
                                                <th width="8%">定价</th>
                                                <th width="11%">您的价格</th>
                                                <th width="11%">数量</th>
                                                <th width="13%">单品总价</th>
                                                <th width="5%" id="tbac">操作</th>
                                            </tr>
                                            <tr id="order_0">
                                                <td class="pro_order_type" colspan="8">订单类型：<span>纸版书</span>
                                                </td>
                                            </tr>
                                        </HeaderTemplate>
                                        <ItemTemplate>
                                            <tr class="booktr" id="tr_198837">
                                                <td>
                                                    <asp:CheckBox ID="cbBook" runat="server"  OnCheckedChanged="cbBook_CheckedChanged" AutoPostBack="true" />
                                                <td id="td_book_198837" class="0">
                                                    <div class="cart_book">
                                                        <ul>
                                                            <li style="height: 91px;">
                                                                <a target="_blank" href="#/198837?ref=car" >
                                                                    <img src="userfiles/<%# Eval("ISBN")+".jpg" %>" width="65px" height="65px" />
                                                                </a>
                                                            </li>
                                                            <li class="cart_book_name">
                                                                <a id="a_shuming_198837" target="_blank" href="#"><%# Eval("Title") %></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td id="td_dj_198837" class="book_price">￥<%# Eval("UnitPrice") %></td>
                                                <td class="book_dis" id="td_tj_198837">￥<%#Convert.ToDouble( Eval("UnitPrice"))*0.75 %>(75折)</td>
                                                <td id="td_num_198837" class="">
                                                    <a class="lower_book_q"></a>
                                                    <asp:TextBox ID="txtBookAmount" CssClass="book_amount" runat="server" TextMode="Number" min="1" Text="1" OnTextChanged="txtBookAmount_TextChanged" AutoPostBack="true"></asp:TextBox>
                                                    <a class="add_book_q"></a>
                                                </td>
                                                <td id="td_dz_198837">￥<%# Convert.ToDouble( Eval("UnitPrice"))*0.75 %></td>
                                                <td><a href="javascript:void(0)">收藏</a><br />
                                                    <br />
                                                    <asp:LinkButton ID="lbtnDel" runat="server" Text="删除" CommandName="Del" CommandArgument='<%#Eval("Id") %>'></asp:LinkButton>
                                                   </td>
                                            </tr>
                                        </ItemTemplate>
                                    </asp:Repeater>
                                    <tr>
                                        <td colspan="7">
                                            <div class="pro_clear">
                                                共选中<span id="bookce"><asp:Label ID="lblBookItems" runat="server" Text="0"></asp:Label></span>件商品，商品金额共计<span id="total_yuanjia">￥<asp:Label ID="lblOriginalPrice" runat="server" Text="0"></asp:Label></span>，优惠<span id="total_economy">￥<asp:Label ID="lblTotalEconomy" runat="server" Text="0"></asp:Label></span><br />
                                                总计（不含运费）<span id="total_account" class="cart_all_p">￥<asp:Label ID="lblTotalPrice" runat="server" Text="0" CssClass="cart_all_p"></asp:Label></span>
                                            </div>
                                            <div class="pro_choose">
                                                <label>
                                                    <asp:CheckBox ID="chkall" runat="server" OnCheckedChanged="chkall_CheckedChanged"  AutoPostBack="true"/>
                                                    <span>全选</span>
                                                </label>
                                                <a id="pro_fav" class="pro_fav" href="javascript:void(0)">收 藏</a>
                                                <asp:LinkButton ID="lbtnDelSelect" runat="server" CssClass="pro_quit" Text="删除" OnClick="lbtnDelSelect_Click"></asp:LinkButton>
                                            </div>
                                            <div class="clear"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style="width: 100%; float: right;">
                            <span id="yunfeiTip" style="display: none; color: rgb(255, 102, 51); float: right; font-weight: bold; padding-top: 10px;">[全场]运费全免（不含邮政EMS）</span>
                        </div>
                        <asp:Button ID="btnBilling" runat="server" Text="￥去结算" CssClass="flow_clear" BorderWidth="0" OnClick="btnBilling_Click" />
                        <div class="clear">
                        </div>
                        <div id="delbook" class="del_long_ago" style="display: none;">
                            <img src="image/load.gif" />
                        </div>
                    </div>
                </div>
                <div id="addone">
                </div>
            </div>
            <div id="bottom">
                <div class="w1002 mCenter bottom_c">
                    <div id="tesst" class="cp_copyright">
                        <p>
                            <a target="_blank" href="#">首页</a> | <a target="_blank" rel="nofollow" href="#">关于我们
                            </a>| <a target="_blank" rel="nofollow" href="#">诚聘英才
                            </a><a target="_blank" href="#">
                                <img class="vCenter" src="image/weibo_xl.png" />
                            </a>
                            | <a target="_blank" href="#" rel="nofollow">联系我们</a> | <a target="_blank" href="#" rel="nofollow">网站联盟</a> |<a href="http://tongji.baidu.com/hm-web/welcome/ico?s=3d4e3529ee0ff44664489f361edc6693" target="_blank"><img border="0" src="image/21.gif" width="20" height="20" /></a>
                            <a href="http://tongji.baidu.com/hm-web/welcome/ico?s=c68f8a95996223c018465c5143d0bdea" target="_blank">
                                <img border="0" src="image/21.gif" width="20" height="20" /></a>
                            <!-- Google Code for &#36827;&#20837;&#36141;&#29289;&#36710; Conversion Page -->

                        </p>
                        <p>
                            Copyright 2000-2012 学海云端网上书店,All Rights Reserved
                        </p>
                        <div class="clear">
                        </div>
                        <div class="fLeft">
                            <a href="#/view.asp?bianhao=010202001072000126" target="_blank">
                                <img class="beian" src="image/beian.jpg" />
                            </a>
                        </div>
                        <div class="fLeft mLeft10 mTop5">
                            <p>
                                <a target="_blank" href="#">京ICP备06020074号-1 | 北京市公安局西城分局备案编号：110102000441</a>
                            </p>
                            <p>
                                <a target="_blank" href="#">中华人民共和国出版物经营许可证：新出发京批字第直0496号</a>
                            </p>
                        </div>
                        <div class="clear">
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>

        </div>
    </form>
</body>
</html>
