<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="OLBookstore.Web.Admin.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body leftmargin="0" topmargin="0">
    <form id="form1" runat="server">
    <div>
    
        <table border="0" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
                <td colspan="2" height="65" width="100%">
                    <iframe frameborder="0" height="65px" width="100%" runat="server" scrolling="no" src="admin_top.html"></iframe>
                    
                    </td>
            </tr>
            <tr>
                <td width="20%"  height="550px" >
                                       <iframe id="Iframe1" frameborder="0" height="100%" width ="100%"   scrolling="no" src="left.html"></iframe>
</td>
                <td width="80%"  height="550px">
                                        <iframe id="Iframe2" frameborder="0" height="100%" width ="100%"  scrolling="no" src="right.html"></iframe>
</td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
