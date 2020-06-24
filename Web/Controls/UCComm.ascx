<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCComm.ascx.cs" Inherits="OLBookstore.Web.Controls.UCComm" %>
<link type="text/css" rel="stylesheet" href="../Js/newbooks.css"/>
<link type="text/css" rel="stylesheet" href="../Js/main2012.css"/>
<div class="remai tszx">
    <h2>
        <asp:Label ID="lblTitle" runat="server" Text="Label"></asp:Label>
        图书资讯</h2>
    <ul>
        <asp:Repeater ID="rptBook" runat="server">
            <ItemTemplate>
                <li><a href="#/machine/article148.shtml" target="_blank">·<%# Eval("Title") %></a></li>
            </ItemTemplate>
        </asp:Repeater>
    </ul>
</div>

