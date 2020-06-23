<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="OLBookstore.Web.Admin.Register" %>

<%@ Register assembly="Vincent.AutoAuthCode" namespace="Vincent.AutoAuthCode" tagprefix="cc1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 100%;
        }
        .auto-style2 {
            text-align: right;
        }
        .auto-style3 {
            color: #0000FF;
        }
        .auto-style4 {
            text-align: right;
            height: 25px;
        }
        .auto-style5 {
            height: 25px;
        }
    </style>
    <script type="text/javascript">
        function SubmitClick() {
            if (event.keyCode == 13) {
                if (!confirm("确认保存用户信息吗？"))
                    return false;
            }
            event.keyCode = 9;
            event.returnValue = false;
            document.getElementById("btnSave").click();
            true;
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <table class="auto-style1">
            <tr>
                <td>&nbsp;</td>
                <td>加*为必填项目&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="login.aspx">已经有账号，马上登录</a></td>
            </tr>
            <tr>
                <td class="auto-style2">真实姓名：</td>
                <td>
                    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvName" runat="server" ControlToValidate="txtName" Display="Dynamic" ErrorMessage="姓名必填"></asp:RequiredFieldValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style4">账号：</td>
                <td class="auto-style5">
                    <asp:TextBox ID="txtLoginId" runat="server"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvLoginId" runat="server" ControlToValidate="txtLoginId" Display="Dynamic" ErrorMessage="账号必填"></asp:RequiredFieldValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style2">密码：</td>
                <td>
                    <asp:TextBox ID="txtLoginPwd" runat="server" TextMode="Password"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvLoginPwd" runat="server" ControlToValidate="txtLoginPwd" Display="Dynamic" ErrorMessage="密码必填"></asp:RequiredFieldValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style2">确认密码：</td>
                <td>
                    <asp:TextBox ID="txtLoginPwd2" runat="server" TextMode="Password"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvLoginPwd2" runat="server" ControlToValidate="txtLoginPwd2" Display="Dynamic" ErrorMessage="确认密码必填"></asp:RequiredFieldValidator>
                    <asp:CompareValidator ID="cvPwd2" runat="server" ControlToCompare="txtLoginPwd" ControlToValidate="txtLoginPwd2" Display="Dynamic" ErrorMessage="两次密码不一致"></asp:CompareValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style2">地址：</td>
                <td>
                    <asp:TextBox ID="txtAddress" runat="server"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvAddress" runat="server" ControlToValidate="txtAddress" Display="Dynamic" ErrorMessage="地址必填"></asp:RequiredFieldValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style2">电话：</td>
                <td>
                    <asp:TextBox ID="txtPhoneNum" runat="server"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvPhone" runat="server" ControlToValidate="txtPhoneNum" Display="Dynamic" ErrorMessage="电话必填"></asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="revPhone" runat="server" ControlToValidate="txtPhoneNum" Display="Dynamic" ErrorMessage="电话号码格式错误" ValidationExpression="^(?&lt;国家代码&gt;(\+86)|(\(\+86\)))?(?&lt;手机号&gt;((13[0-9]{1})|(15[0-9]{1})|(18[0,5-9]{1}))+\d{8})$"></asp:RegularExpressionValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style2">E-mail：</td>
                <td>
                    <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
                    <span class="auto-style3">*<asp:RequiredFieldValidator ID="rfvEmail" runat="server" ControlToValidate="txtEmail" Display="Dynamic" ErrorMessage="Email必填"></asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="txtEmail" ErrorMessage="电子邮件格式错误" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                    </span></td>
            </tr>
            <tr>
                <td class="auto-style2">验证码：</td>
                <td>
                    <cc1:AuthCode ID="AuthCode1" runat="server" />
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>
                    <asp:Button ID="btnSave" runat="server" Text="注册" OnClick="btnSave_Click" />
                </td>
            </tr>
        </table>
        <div>
        </div>
    </form>
</body>
</html>
