<%@ Page Title="Users" Language="C#" MasterPageFile="../MasterPage.master" AutoEventWireup="true" CodeBehind="List.aspx.cs" Inherits="OLBookstore.Web.Users.List" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script language="javascript" src="/js/CheckBox.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!--Title -->

    <!--Title end -->

    <!--Add  -->

    <!--Add end -->

    <!--Search -->
    <table style="width: 100%;" cellpadding="2" cellspacing="1" class="border">
        <tr>
            <td style="width: 80px" align="right" class="tdbg">
                <b>关键字：</b>
            </td>
            <td class="tdbg">
                <asp:TextBox ID="txtKeyword" runat="server"></asp:TextBox>
                &nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:Button ID="btnSearch" runat="server" Text="查询" OnClick="btnSearch_Click"></asp:Button>

            </td>
            <td class="tdbg"></td>
        </tr>
    </table>
    <!--Search end-->
    <br />
    <asp:GridView ID="gridView" runat="server" AllowPaging="True" Width="100%" CellPadding="3" OnPageIndexChanging="gridView_PageIndexChanging"
        BorderWidth="1px" DataKeyNames="Id" OnRowDataBound="gridView_RowDataBound"
        AutoGenerateColumns="False" RowStyle-HorizontalAlign="Center" OnRowCreated="gridView_OnRowCreated" OnRowCancelingEdit="gridView_RowCancelingEdit" OnRowEditing="gridView_RowEditing" OnRowUpdating="gridView_RowUpdating" OnRowCommand="gridView_RowCommand">
        <Columns>
            <asp:TemplateField ControlStyle-Width="30" HeaderText="选择">
                <ItemTemplate>
                    <asp:CheckBox ID="DeleteThis" onclick="javascript:CCA(this);" runat="server" />
                </ItemTemplate>

                <ControlStyle Width="30px"></ControlStyle>
            </asp:TemplateField>

            <asp:TemplateField HeaderText="登录名" SortExpression="LoginId">
                <EditItemTemplate>
                    <asp:TextBox ID="txtLoginId" runat="server" Text='<%# Bind("LoginId") %>'></asp:TextBox>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label3" runat="server" Text='<%# Bind("LoginId") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="登录密码" SortExpression="LoginPwd">
                <EditItemTemplate>
                    <asp:TextBox ID="txtLoginPwd" runat="server" Text='<%# Bind("LoginPwd") %>'></asp:TextBox>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label4" runat="server" Text='<%# Bind("LoginPwd") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="真实姓名" SortExpression="Name">
                <EditItemTemplate>
                    <asp:TextBox ID="txtName" runat="server" Text='<%# Bind("Name") %>'></asp:TextBox>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label5" runat="server" Text='<%# Bind("Name") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="地址" SortExpression="Address">
                <EditItemTemplate>
                    <asp:TextBox ID="txtAddress" runat="server" Text='<%# Bind("Address") %>'></asp:TextBox>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label6" runat="server" Text='<%# Bind("Address") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="联系方式" SortExpression="Phone">
                <EditItemTemplate>
                    <asp:TextBox ID="txtPhone" runat="server" Text='<%# Bind("Phone") %>'></asp:TextBox>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label7" runat="server" Text='<%# Bind("Phone") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="电子邮箱" SortExpression="Mail">
                <EditItemTemplate>
                    <asp:TextBox ID="txtMail" runat="server" Text='<%# Bind("Mail") %>'></asp:TextBox>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label8" runat="server" Text='<%# Bind("Mail") %>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="用户角色" SortExpression="UserRoleId">
                <EditItemTemplate>

                    <asp:DropDownList ID="ddlUserRole" runat="server">
                    </asp:DropDownList>
                    <asp:HiddenField ID="hfUserRole" runat="server" value='<%# Eval("UserRoleId") %>' />
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label1" runat="server" Text='<%#GetUserRoleNameById( Eval("UserRoleId").ToString())%>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>
            <asp:TemplateField HeaderText="用户状态" SortExpression="UserStateId">
                <EditItemTemplate>
                    <asp:DropDownList ID="ddlUserState" runat="server">
                    </asp:DropDownList>
                    <asp:HiddenField ID="hfUserState" runat="server" value='<%# Eval("UserStateId") %>'/>
                </EditItemTemplate>
                <ItemTemplate>
                    <asp:Label ID="Label2" runat="server" Text='<%# GetUserRoleStateNameById( Eval("UserStateId").ToString() )%>'></asp:Label>
                </ItemTemplate>
                <ItemStyle HorizontalAlign="Center" />
            </asp:TemplateField>

            <asp:HyperLinkField HeaderText="详细" ControlStyle-Width="50" DataNavigateUrlFields="Id" DataNavigateUrlFormatString="Show.aspx?id={0}"
                Text="详细">
                <ControlStyle Width="50px"></ControlStyle>
            </asp:HyperLinkField>
            <asp:HyperLinkField HeaderText="编辑" ControlStyle-Width="50" DataNavigateUrlFields="Id" DataNavigateUrlFormatString="Modify.aspx?id={0}"
                Text="编辑">
                <ControlStyle Width="50px"></ControlStyle>
            </asp:HyperLinkField>
            <asp:TemplateField ControlStyle-Width="50" HeaderText="删除" Visible="false">
                <ItemTemplate>
                    <asp:LinkButton ID="LinkButton1" runat="server" CausesValidation="False" CommandName="Delete"
                        Text="删除"></asp:LinkButton>
                </ItemTemplate>

                <ControlStyle Width="50px"></ControlStyle>
            </asp:TemplateField>
            <asp:CommandField HeaderText="修改" ShowEditButton="True" />
            <asp:TemplateField HeaderText="删除">
                 <ItemTemplate>
                    <asp:LinkButton ID="lbDel" runat="server" CommandName="Del" CommandArgument='<%# Eval("Id") %>'
                        Text="删除"></asp:LinkButton>
                </ItemTemplate>
            </asp:TemplateField>
        </Columns>

        <RowStyle HorizontalAlign="Center"></RowStyle>
    </asp:GridView>
    <table border="0" cellpadding="0" cellspacing="1" style="width: 100%;">
        <tr>
            <td style="width: 1px;"></td>
            <td align="left">
                <asp:Button ID="btnDelete" runat="server" Text="删除" OnClick="btnDelete_Click" />
            </td>
        </tr>
    </table>
</asp:Content>
<%--<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceCheckright" runat="server">
</asp:Content>--%>
