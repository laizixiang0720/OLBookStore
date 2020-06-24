
using OLBookstore.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OLBookstore.Model;
namespace OLBookstore.Web.Controls
{
    public partial class UCLogin : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            string loginId = txtLoginId.Text.Trim();
            string loginPwd = txtLoginPwd.Text.Trim();
            if(loginId.Length>0&&loginPwd.Length>0)
            {
                UsersManager um = new UsersManager();
               Model.Users user  = um.GetModel(loginId);
                if (user != null)
                {
                    if (user.LoginPwd == loginPwd)
                    {
                        lblMess.Text = "用户名或密码错误";
                    }
                    else
                    {
                        Session["User"] = user;
                        Response.Redirect("admin/index.html");
                    }
                }
                else
                {
                    lblMess.Text = "用户名或密码错误";
                }

            }
            else
            {
                lblMess.Text = "用户名或密码为空！";
            }
        }
    }
}