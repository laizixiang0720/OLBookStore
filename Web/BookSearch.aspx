<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookSearch.aspx.cs" Inherits="OLBookstore.Web.BookSearch" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style type="text/css">
        ul{
            width:1250px;
        }
        li{
            width:250px;
            float:left;
            list-style:none;
            border-bottom-style:dashed;
            border-bottom-width:1px;
            text-overflow:ellipsis;
            overflow:hidden;
            word-break:keep-all;
            white-space:nowrap;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            请输入书籍名称进行搜索：<asp:TextBox ID="txtSearch" runat="server"></asp:TextBox>
            <asp:Button ID="btnSearch" runat="server" Text="查找" OnClick="btnSearch_Click" />
            <br />
            <asp:Repeater ID="Repeater1" runat="server">
                <HeaderTemplate>
                    <ul>
                        <li>书名</li>
                        <li>作者</li>
                        <li>出版日期</li>
                        <li>出版社</li>
                        <li>价格</li>
                    </ul>
                </HeaderTemplate>
                <ItemTemplate>
                    <ul>
                        <li><%# Eval("Title") %></li>
                        <li><%# Eval("Author") %></li>
                        <li><%# Eval("PublishDate") %></li>
                        <li><%# GetPublisherNameById( Eval("PublisherId").ToString())  %></li>
                        <li>￥<%# Eval("UnitPrice") %></li>
                    </ul>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </form>
</body>
</html>
