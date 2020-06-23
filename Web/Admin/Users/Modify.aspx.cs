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
    public partial class Modify : Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
                {
                    int Id = (Convert.ToInt32(Request.Params["id"]));
                    ShowInfo(Id);
                    BindUserState();
                    BindUserRole();
                }
            }
        }
        private void BindUserState()
        {
            BLL.UserStatesManager bs = new BLL.UserStatesManager();
            ddlUserState.DataTextField = "Name";
            ddlUserState.DataValueField = "Id";
            DataSet ds = bs.GetAllList();
            ddlUserState.DataSource = ds;
            ddlUserState.DataBind();
        }
        private void BindUserRole()
        {
            BLL.UserRolesManager bu = new BLL.UserRolesManager();
            DataSet ds = bu.GetAllList();
            ddlUserRole.DataSource = ds;
            ddlUserRole.DataTextField = "Name";
            ddlUserRole.DataValueField = "Id";
            ddlUserRole.DataBind();
        }

        private void ShowInfo(int Id)
        {
            OLBookstore.BLL.UsersManager bll = new OLBookstore.BLL.UsersManager();
            OLBookstore.Model.Users model = bll.GetModel(Id);
            this.lblId.Text = model.Id.ToString();
            this.lblLoginId.Text = model.LoginId;
            this.txtLoginPwd.Text = model.LoginPwd;
            this.txtName.Text = model.Name;
            this.txtAddress.Text = model.Address;
            this.txtPhone.Text = model.Phone;
            this.lblMail.Text = model.Mail;
            this.ddlUserRole.SelectedValue = model.UserRoleId.ToString();
            this.ddlUserState.SelectedValue = model.UserStateId.ToString();

        }

        public void btnSave_Click(object sender, EventArgs e)
        {

            string strErr = "";
            if (this.txtLoginPwd.Text.Trim().Length == 0)
            {
                strErr += "LoginPwd不能为空！\\n";
            }
            if (this.txtName.Text.Trim().Length == 0)
            {
                strErr += "Name不能为空！\\n";
            }
            if (this.txtAddress.Text.Trim().Length == 0)
            {
                strErr += "Address不能为空！\\n";
            }
            if (this.txtPhone.Text.Trim().Length == 0)
            {
                strErr += "Phone不能为空！\\n";
            }
            

            if (strErr != "")
            {
                MessageBox.Show(this, strErr);
                return;
            }
            int Id = int.Parse(this.lblId.Text);
            string LoginId = this.lblLoginId.Text;
            string LoginPwd = this.txtLoginPwd.Text;
            string Name = this.txtName.Text;
            string Address = this.txtAddress.Text;
            string Phone = this.txtPhone.Text;
            string Mail = this.lblMail.Text;
            int UserRoleId = int.Parse(this.ddlUserRole.SelectedValue);
            int UserStateId = int.Parse(this.ddlUserState.SelectedValue);


            OLBookstore.Model.Users model = new OLBookstore.Model.Users();
            model.Id = Id;
            model.LoginId = LoginId;
            model.LoginPwd = LoginPwd;
            model.Name = Name;
            model.Address = Address;
            model.Phone = Phone;
            model.Mail = Mail;
            model.UserRoleId = UserRoleId;
            model.UserStateId = UserStateId;

            OLBookstore.BLL.UsersManager bll = new OLBookstore.BLL.UsersManager();
            bll.Update(model);
            Maticsoft.Common.MessageBox.ShowAndRedirect(this, "保存成功！", "list.aspx");

        }


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
