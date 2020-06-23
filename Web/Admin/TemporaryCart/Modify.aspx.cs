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
namespace OLBookstore.Web.TemporaryCart
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
		OLBookstore.BLL.TemporaryCartManager bll=new OLBookstore.BLL.TemporaryCartManager();
		OLBookstore.Model.TemporaryCart model=bll.GetModel(Id);
		this.txtCreateTime.Text=model.CreateTime.ToString();
		this.txtBookId.Text=model.BookId.ToString();
		this.txtUserId.Text=model.UserId.ToString();
		this.lblId.Text=model.Id.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(!PageValidate.IsDateTime(txtCreateTime.Text))
			{
				strErr+="CreateTime格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtBookId.Text))
			{
				strErr+="BookId格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtUserId.Text))
			{
				strErr+="UserId格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			DateTime CreateTime=DateTime.Parse(this.txtCreateTime.Text);
			int BookId=int.Parse(this.txtBookId.Text);
			int UserId=int.Parse(this.txtUserId.Text);
			int Id=int.Parse(this.lblId.Text);


			OLBookstore.Model.TemporaryCart model=new OLBookstore.Model.TemporaryCart();
			model.CreateTime=CreateTime;
			model.BookId=BookId;
			model.UserId=UserId;
			model.Id=Id;

			OLBookstore.BLL.TemporaryCartManager bll=new OLBookstore.BLL.TemporaryCartManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
