<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="OLBookstore.Web.Admin.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            学海云端网上书店登录系统<br />
            <br />
            登 录 名：<asp:TextBox ID="txtLoginId" runat="server"></asp:TextBox>
            <br />
            <br />
            登录密码：<asp:TextBox ID="txtLoginPwd" runat="server" TextMode="Password"></asp:TextBox>
            <br />
            <br />
            <asp:Label ID="lblMess" runat="server" ForeColor="Red" Text=""></asp:Label>
            <br />
            <br />
            <asp:Button ID="btnLogin" runat="server" OnClick="btnLogin_Click" Text="登录" />
&nbsp;&nbsp;
            <asp:Button ID="btnCancel" runat="server" Text="取消" />
        </div>
    </form>
</body>
</html>
