<%@ Page Language="C#" MasterPageFile="../MasterPage.master" AutoEventWireup="true"
    CodeBehind="Add.aspx.cs" Inherits="OLBookstore.Web.Users.Add" Title="增加页" %>

<%@ Register assembly="Vincent.AutoAuthCode" namespace="Vincent.AutoAuthCode" tagprefix="cc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table style="width: 100%;" cellpadding="2" cellspacing="1" class="border">
        <tr>
            <td class="tdbg">

                <table cellspacing="0" cellpadding="0" width="100%" border="0">
                    <tr>
                        <td height="25" width="30%" align="right">登录名：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtLoginId" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">登录密码：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtLoginPwd" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">真实姓名：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtName" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">地址：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtAddress" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">手机号码：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtPhone" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">电子邮箱：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtMail" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">用户角色：</td>
                        <td height="25" width="*" align="left">
                            <asp:DropDownList ID="ddlUserRole" runat="server">
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">用户状态：</td>
                        <td height="25" width="*" align="left">
                            <asp:DropDownList ID="ddlUserState" runat="server">
                            </asp:DropDownList>
                        </td>
                    </tr>
                     <tr>
                        <td height="25" width="30%" align="right">验证码：</td>
                        <td height="25" width="*" align="left">
                            <cc1:AuthCode ID="AuthCode1" runat="server" />
                            
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
        <tr>
            <td class="tdbg" align="center" valign="bottom">
                <asp:Button ID="btnSave" runat="server" Text="保存"
                    OnClick="btnSave_Click" class="inputbutton" onmouseover="this.className='inputbutton_hover'"
                    onmouseout="this.className='inputbutton'"></asp:Button>
                <asp:Button ID="btnCancle" runat="server" Text="取消"
                    OnClick="btnCancle_Click" class="inputbutton" onmouseover="this.className='inputbutton_hover'"
                    onmouseout="this.className='inputbutton'"></asp:Button>
            </td>
        </tr>
    </table>
    <br />
</asp:Content>
<%--<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceCheckright" runat="server">
</asp:Content>--%>
