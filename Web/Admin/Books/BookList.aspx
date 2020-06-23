<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookList.aspx.cs" Inherits="OLBookstore.Web.Admin.Books.BookList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <fieldset>
                <legend>图书查询</legend>
                &nbsp;书名：<asp:TextBox ID="txtBookName" runat="server" Width="100px"></asp:TextBox>
                &nbsp;作者:<asp:TextBox ID="txtAuthor" runat="server" Width="60px"></asp:TextBox>
                &nbsp;出版社：<asp:DropDownList ID="ddlPublisher" runat="server" Width="100px" DataTextField="Name" DataValueField="Id"></asp:DropDownList>
                &nbsp;内容简介：<asp:TextBox ID="txtContent" runat="server"></asp:TextBox>
                &nbsp;价格：<asp:TextBox ID="txtPrice1" runat="server" Width="40px"></asp:TextBox>
                -<asp:TextBox ID="txtPrice2" runat="server" Width="40px"></asp:TextBox>元
                &nbsp;分类：<asp:DropDownList ID="ddlCategory" runat="server" DataTextField="Name" DataValueField="Id"></asp:DropDownList>
                <asp:Button ID="btnSearch" runat="server" Text="查 找" OnClick="btnSearch_Click" />

            </fieldset>
        </div>
        <br />
        <br />
        <div>
            <asp:GridView ID="gvBookList" runat="server" AutoGenerateColumns="False" BackColor="White" BorderColor="#999999" BorderStyle="None" BorderWidth="1px" CellPadding="3" GridLines="Vertical" DataKeyNames="Id" OnRowDataBound="gvBookList_RowDataBound" OnRowCommand="gvBookList_RowCommand">
                <AlternatingRowStyle BackColor="#DCDCDC" />
                <Columns>
                    <asp:TemplateField>
                        <ItemTemplate>
                            <asp:CheckBox ID="Modifythis" runat="server" />
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="Title" HeaderText="标题" />
                    <asp:BoundField DataField="Author" HeaderText="作者" />
                    <asp:TemplateField HeaderText="出版社">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("Publishers.Name") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="server" Text='<%# Bind("Publishers.Name") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="PublishDate" HeaderText="出版日期" />
                    <asp:BoundField DataField="ISBN" HeaderText="ISBN" />
                    <asp:BoundField DataField="UnitPrice" HeaderText="单价" />
                    <asp:TemplateField HeaderText="分类">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("Categories.Name") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label2" runat="server" Text='<%# Bind("Categories.Name") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:HyperLinkField DataNavigateUrlFields="Id" DataNavigateUrlFormatString="BookDetail.aspx?Id={0}" HeaderText="详情" Text="详情" />
                    <asp:HyperLinkField DataNavigateUrlFields="Id" DataNavigateUrlFormatString="BookModify.aspx?Id={0}" HeaderText="修改" Text="修改" />
                    <asp:TemplateField HeaderText="删除">
                        <ItemTemplate>
                            <asp:LinkButton ID="lbDel" runat="server" CommandName="Del" CommandArgument='<% #Eval("Id")%>'>删除</asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
                <FooterStyle BackColor="#CCCCCC" ForeColor="Black" />
                <HeaderStyle BackColor="#000084" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
                <RowStyle BackColor="#EEEEEE" ForeColor="Black" />
                <SelectedRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White" />
                <SortedAscendingCellStyle BackColor="#F1F1F1" />
                <SortedAscendingHeaderStyle BackColor="#0000A9" />
                <SortedDescendingCellStyle BackColor="#CAC9C9" />
                <SortedDescendingHeaderStyle BackColor="#000065" />
            </asp:GridView>
            <br />
            <asp:Button ID="btnModify" runat="server" Text="修改选中项的分类为：" OnClick="btnModify_Click" />
            <asp:DropDownList ID="ddlCategory0" runat="server">
            </asp:DropDownList>
        </div>
    </form>
</body>
</html>
