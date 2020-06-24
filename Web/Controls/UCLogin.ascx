<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCLogin.ascx.cs" Inherits="OLBookstore.Web.Controls.UCLogin" %>
<p>
    学海云端网上书店登录系统</p>
<p>
    登录名：<asp:TextBox ID="txtLoginId" runat="server"></asp:TextBox>
</p>
<p>
    密码：<asp:TextBox ID="txtLoginPwd" runat="server" TextMode="Password"></asp:TextBox>
</p>
<p>
    <asp:Label ID="lblMess" runat="server" ForeColor="Red"></asp:Label>
</p>
<p>
    <asp:Button ID="btnLogin" runat="server" OnClick="btnLogin_Click" Text="登录" />
</p>

