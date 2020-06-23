<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index1.aspx.cs" Inherits="index1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Menu ID="Menu1" runat="server" BackColor="#FFFBD6" DataSourceID="XMLMenu" DynamicHorizontalOffset="2" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#990000" Orientation="Horizontal" StaticDisplayLevels="2" StaticSubMenuIndent="10px">
                <DataBindings>
                    <asp:MenuItemBinding DataMember="siteMapNode" NavigateUrlField="url" TextField="title" />
                </DataBindings>
                <DynamicHoverStyle BackColor="#990000" ForeColor="White" />
                <DynamicMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
                <DynamicMenuStyle BackColor="#FFFBD6" />
                <DynamicSelectedStyle BackColor="#FFCC66" />
                <StaticHoverStyle BackColor="#990000" ForeColor="White" />
                <StaticMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
                <StaticSelectedStyle BackColor="#FFCC66" />
            </asp:Menu>
            <asp:XmlDataSource ID="XMLMenu" runat="server" DataFile="~/XMLMenu.xml"></asp:XmlDataSource>
        </div>
    </form>
</body>
</html>
