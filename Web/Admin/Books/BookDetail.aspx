<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookDetail.aspx.cs" Inherits="OLBookstore.Web.Admin.Books.BookDetail" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:DetailsView ID="dvBookDetail" runat="server" AutoGenerateRows="False" BackColor="White" BorderColor="#0000CC" BorderStyle="Solid" BorderWidth="1px" CellPadding="3" DataSourceID="ObjectDataSource1" GridLines="Vertical" >
                <AlternatingRowStyle BackColor="Gainsboro" />
                <EditRowStyle BackColor="#008A8C" Font-Bold="True" ForeColor="White" />
                <Fields>
                    <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" Visible="False" />
                    <asp:BoundField DataField="Title" HeaderText="书名" SortExpression="Title" />
                    <asp:BoundField DataField="Author" HeaderText="作者" SortExpression="Author" />
                    <asp:TemplateField HeaderText="出版社名称" SortExpression="PublisherId">
                          <EditItemTemplate>
                            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("Publishers.Name") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="server" Text='<%# Bind("Publishers.Name") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="PublishDate" HeaderText="出版日期" SortExpression="PublishDate" />
                    <asp:BoundField DataField="ISBN" HeaderText="ISBN" SortExpression="ISBN" />
                    <asp:BoundField DataField="UnitPrice" HeaderText="单价" SortExpression="UnitPrice" />
                    <asp:BoundField DataField="ContentDescription" HeaderText="内容简介" SortExpression="ContentDescription" />
                    <asp:BoundField DataField="TOC" HeaderText="目录" SortExpression="TOC" />
                    <asp:TemplateField HeaderText="分类" SortExpression="CategoryId">
                         <EditItemTemplate>
                            <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("Categories.Name") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label2" runat="server" Text='<%# Bind("Categories.Name") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="Clicks" HeaderText="单击次数" SortExpression="Clicks" />
                </Fields>
                <FooterStyle BackColor="#CCCCCC" ForeColor="Black" />
                <HeaderStyle BackColor="#000084" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
                <RowStyle BackColor="#EEEEEE" ForeColor="Black" />
            </asp:DetailsView>
            <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetBookById" TypeName="OLBookstore.BLL.BooksManager">
                <SelectParameters>
                    <asp:QueryStringParameter Name="Id" QueryStringField="Id" Type="Int32" />
                </SelectParameters>
            </asp:ObjectDataSource>
        </div>
    </form>
</body>
</html>
