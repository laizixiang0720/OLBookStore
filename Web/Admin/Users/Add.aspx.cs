using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;
using Maticsoft.Common;
using LTP.Accounts.Bus;
namespace OLBookstore.Web.Users
{
    public partial class Add : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BindUserRole();
                BindUserState();
            }
        }
        private void BindUserState()
        {
            BLL.UserStatesManager bs = new BLL.UserStatesManager();
            ddlUserState.DataTextField = "Name";
            ddlUserState.DataValueField = "Id";
            DataSet ds = bs.GetAllList();
            DataRow dr = ds.Tables[0].NewRow();
            dr["Id"] = 0;
            dr["Name"] = "--请选择--";
            ds.Tables[0].Rows.InsertAt(dr, 0);
            ddlUserState.DataSource = ds;
            ddlUserState.DataBind();
        }
        private void BindUserRole()
        {
            BLL.UserRolesManager bu = new BLL.UserRolesManager();
            DataSet ds = bu.GetAllList();
            DataRow dr = ds.Tables[0].NewRow();
            dr["Id"] = 0;
            dr["Name"] = "--请选择--";
            ds.Tables[0].Rows.InsertAt(dr, 0);
            ddlUserRole.DataSource = ds;
            ddlUserRole.DataTextField = "Name";
            ddlUserRole.DataValueField = "Id";
            ddlUserRole.DataBind();
        }
        protected void btnSave_Click(object sender, EventArgs e)
        {

            string strErr = "";
            if (this.txtLoginId.Text.Trim().Length == 0)
            {
                strErr += "登录名不能为空！\\n";
            }
            if (this.txtLoginPwd.Text.Trim().Length == 0)
            {
                strErr += "登录密码不能为空！\\n";
            }
            if (this.txtName.Text.Trim().Length == 0)
            {
                strErr += "真实姓名不能为空！\\n";
            }
            if (this.txtAddress.Text.Trim().Length == 0)
            {
                strErr += "地址不能为空！\\n";
            }
            if (this.txtPhone.Text.Trim().Length == 0)
            {
                strErr += "联系方式不能为空！\\n";
            }
            if (this.txtMail.Text.Trim().Length == 0)
            {
                strErr += "电子邮箱不能为空！\\n";
            }
            if (ddlUserRole.SelectedValue == "0")
            {
                strErr += "用户角色不能为空！\\n";
            }

            if (ddlUserState.SelectedValue == "0")
            {
                strErr += "用户状态不能为空！\\n";
            }
            if (strErr != "")
            {
                MessageBox.Show(this, strErr);
                return;
            }
            if (!AuthCode1.IsMatch)
            {
                MessageBox.Show(this, "验证码有误，请重新输入。");
                return;
            }
            string LoginId = this.txtLoginId.Text;
            string LoginPwd = this.txtLoginPwd.Text;
            string Name = this.txtName.Text;
            string Address = this.txtAddress.Text;
            string Phone = this.txtPhone.Text;
            string Mail = this.txtMail.Text;
            int UserRoleId = int.Parse(ddlUserRole.SelectedValue);
            int UserStateId = int.Parse(ddlUserState.SelectedValue);

            OLBookstore.Model.Users model = new OLBookstore.Model.Users();
            model.LoginId = LoginId;
            model.LoginPwd = LoginPwd;
            model.Name = Name;
            model.Address = Address;
            model.Phone = Phone;
            model.Mail = Mail;
            model.UserRoleId = UserRoleId;
            model.UserStateId = UserStateId;

            OLBookstore.BLL.UsersManager bll = new OLBookstore.BLL.UsersManager();
            bll.Add(model);
            MessageBox.ShowAndRedirect(this, "保存成功！", "add.aspx");

        }


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
