<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HotBook.aspx.cs" Inherits="OLBookstore.Web.HotBook" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style type="text/css">
        ol {
            width: 300px
        }

        li {
            width: 300px;
            float: left;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1>热销书籍排行</h1>
            <ol>
                <asp:Repeater ID="Repeater1" runat="server">
                    <ItemTemplate>
                        <li><%#Eval("Title") %></li>
                    </ItemTemplate>
                </asp:Repeater>
            </ol>
        </div>
    </form>
</body>
</html>
