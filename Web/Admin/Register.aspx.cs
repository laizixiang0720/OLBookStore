using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OLBookstore.BLL;
using OLBookstore.Model;
namespace OLBookstore.Web.Admin
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            AuthCode1.Attributes.Add("onkeydown", "return SubmitClick()");
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            if (AuthCode1.IsMatch)
            {
                Model.Users user = new Model.Users();
                user.LoginId = txtLoginId.Text.Trim();
                user.LoginPwd = txtLoginPwd.Text.Trim();
                user.Name = txtName.Text.Trim();
                user.Mail = txtEmail.Text.Trim();
                user.Address = txtAddress.Text.Trim();
                user.Phone = txtPhoneNum.Text.Trim();
                user.UserRoleId = 1;//1为普通用户
                user.UserStateId = 1;//1为无效用户，需要管理员开通
                UsersManager usersManager = new UsersManager();
              int id=  usersManager.Add(user);
                if (id > 0)
                {
                    Response.Redirect("Login.aspx");
                }
            }
            else
            {
                ClientScript.RegisterStartupScript(GetType(), "authResult", "alert(\"验证码输入错误！\")",true);
            }
        }
    }
}