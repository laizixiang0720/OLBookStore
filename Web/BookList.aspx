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
            
            单击按钮进行排序：
            <asp:Button ID="btnDefault" runat="server" Text="按书籍默认排序" OnClick="btnDefault_Click" />
            <asp:Button ID="btnCate" runat="server" Text="按书籍类别排序" OnClick="btnCate_Click" />
            <asp:Button ID="btnPrice" runat="server" Text="按书籍价格排序" OnClick="btnPrice_Click" />
            <asp:DataList ID="DataList1" runat="server">
                <ItemTemplate>
                    <table class="auto-style1">
                        <tr>
                            <td rowspan="6">
                                <asp:Image ID="imgBook" runat="server" ImageUrl='<%# GetImg( Eval("ISBN").ToString()) %>' Width="170px" />
                            </td>
                            <td style="width:430px">书名：<%# Eval("Title") %></td>
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
    </form>
</body>
</html>
