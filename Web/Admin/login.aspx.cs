using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web.Admin
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            var loginid = txtLoginId.Text.Trim();
            var loginpwd = txtLoginPwd.Text.Trim();
            if(loginid.Length>0&&loginpwd.Length>0)
            {
                var user = new BLL.UsersManager().GetModel(loginid);
                if (user != null)
                {
                    if (user.LoginId == loginid && user.LoginPwd == loginpwd)
                    {
                        lblMess.Text = "登录成功！";
                    }
                    else
                    {
                        lblMess.Text = "用户名或密码错误！";
                    }
                }
                else
                {
                    lblMess.Text = "用户名或密码错误！";
                }
            }
            else
            {
                lblMess.Text = "登录名或密码为空，请重新输入";
            }
        }
    }
}