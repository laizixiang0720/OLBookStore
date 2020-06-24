<%@ Page Language="C#" MasterPageFile="../MasterPage.master" AutoEventWireup="true"
    CodeBehind="Add.aspx.cs" Inherits="OLBookstore.Web.Books.Add" Title="增加页" %>

<%@ Register Assembly="FredCK.FCKeditorV2" Namespace="FredCK.FCKeditorV2" TagPrefix="FCKeditorV2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table style="width: 100%;" cellpadding="2" cellspacing="1" class="border">
        <tr>
            <td class="tdbg">

                <table cellspacing="0" cellpadding="0" width="100%" border="0">
                    <tr>
                        <td height="25" width="30%" align="right">标题：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtTitle" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">作者：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtAuthor" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">出版社：</td>
                        <td height="25" width="*" align="left">
                            <asp:DropDownList ID="ddlPublisher" runat="server">
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">出版时间：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtPublishDate" runat="server" Width="160px" onfocus="setday(this)" TextMode="Date"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">ISBN：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtISBN" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">封面：</td>
                        <td height="25" width="*" align="left">
                            <asp:Image ID="imgBook" runat="server" />
                            <asp:FileUpload ID="fuBook" runat="server" />
                            <asp:Button ID="Button1" runat="server" Text="上传" OnClick="Button1_Click" />
                        </td>
                    </tr>
                    <tr>

                        <td height="25" width="30%" align="right">单价：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtUnitPrice" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">内容描述：</td>
                        <td height="25" width="*" align="left">
                            <FCKeditorV2:FCKeditor ID="FCKeditor1" runat="server">
                            </FCKeditorV2:FCKeditor>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">目录：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtTOC" runat="server" Width="756px" Height="107px" TextMode="MultiLine"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">类别：</td>
                        <td height="25" width="*" align="left">
                            <asp:DropDownList ID="ddlCategory" runat="server">
                            </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" width="30%" align="right">点击次数：</td>
                        <td height="25" width="*" align="left">
                            <asp:TextBox ID="txtClicks" runat="server" Width="200px"></asp:TextBox>
                        </td>
                    </tr>
                </table>
                <script src="/js/calendar1.js" type="text/javascript"></script>

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
