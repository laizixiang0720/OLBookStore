<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="OLBookstore.Web.Default" %>
<%@ Register src="Controls/UCLogin.ascx" tagname="UCLogin" tagprefix="uc1" %>
<%@ Register src="Controls/UCComm.ascx" tagname="UCComm" tagprefix="uc2" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>动软卓越首页</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
   
        <uc1:UCLogin ID="UCLogin1" runat="server" />
   
    </div>
        <uc2:UCComm ID="UCComm1" runat="server" TypeName="C#"/>
        <uc2:UCComm ID="UCComm2" runat="server" TypeName="其他"/>
    </form>
</body>
</html>
