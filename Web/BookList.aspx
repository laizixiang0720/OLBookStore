<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookList.aspx.cs" Inherits="OLBookstore.Web.BookList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 600px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:DataList ID="DataList1" runat="server">
                <ItemTemplate>
                    <table class="auto-style1">
                        <tr>
                            <td rowspan="6">
                                <asp:Image ID="imgBook" runat="server" Width="170px" />
                            </td>
                            <td style="width:430px">书名：<%# Eval("Title") %></td>
                        </tr>
                        <tr>
                            <td>作者：<%# Eval("Author") %></td>
                        </tr>
                        <tr>
                            <td>出版社：<%# Eval("PublisherId") %></td>
                        </tr>
                        <tr>
                            <td>出版时间：<%# Eval("PublishDate") %></td>
                        </tr>
                        <tr>
                            <td>书籍类型：<%# Eval("CategoryId") %></td>
                        </tr>
                        <tr>
                            <td>书籍价格：<%# Eval("UnitPrice") %></td>
                        </tr>
                    </table>
                </ItemTemplate>
            </asp:DataList>
        </div>
    </form>
</body>
</html>
