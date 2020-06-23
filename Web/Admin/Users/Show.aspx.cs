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
namespace OLBookstore.Web.Users
{
    public partial class Show : Page
    {        
        		public string strid=""; 
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
				{
					strid = Request.Params["id"];
					int Id=(Convert.ToInt32(strid));
					ShowInfo(Id);
				}
			}
		}
		
	private void ShowInfo(int Id)
	{
		OLBookstore.BLL.UsersManager bll=new OLBookstore.BLL.UsersManager();
		OLBookstore.Model.Users model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.lblLoginId.Text=model.LoginId;
		this.lblLoginPwd.Text=model.LoginPwd;
		this.lblName.Text=model.Name;
		this.lblAddress.Text=model.Address;
		this.lblPhone.Text=model.Phone;
		this.lblMail.Text=model.Mail;
		this.lblUserRoleId.Text=model.UserRoleId.ToString();
		this.lblUserStateId.Text=model.UserStateId.ToString();

	}


    }
}
