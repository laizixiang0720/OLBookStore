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
namespace OLBookstore.Web.Orders
{
    public partial class Modify : Page
    {       

        		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
				{
					int Id=(Convert.ToInt32(Request.Params["id"]));
					ShowInfo(Id);
				}
			}
		}
			
	private void ShowInfo(int Id)
	{
		OLBookstore.BLL.OrdersManager bll=new OLBookstore.BLL.OrdersManager();
		OLBookstore.Model.Orders model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.txtOrderDate.Text=model.OrderDate.ToString();
		this.txtUserId.Text=model.UserId.ToString();
		this.txtTotalPrice.Text=model.TotalPrice.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(!PageValidate.IsDateTime(txtOrderDate.Text))
			{
				strErr+="OrderDate格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtUserId.Text))
			{
				strErr+="UserId格式错误！\\n";	
			}
			if(!PageValidate.IsDecimal(txtTotalPrice.Text))
			{
				strErr+="TotalPrice格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int Id=int.Parse(this.lblId.Text);
			DateTime OrderDate=DateTime.Parse(this.txtOrderDate.Text);
			int UserId=int.Parse(this.txtUserId.Text);
			decimal TotalPrice=decimal.Parse(this.txtTotalPrice.Text);


			OLBookstore.Model.Orders model=new OLBookstore.Model.Orders();
			model.Id=Id;
			model.OrderDate=OrderDate;
			model.UserId=UserId;
			model.TotalPrice=TotalPrice;

			OLBookstore.BLL.OrdersManager bll=new OLBookstore.BLL.OrdersManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
