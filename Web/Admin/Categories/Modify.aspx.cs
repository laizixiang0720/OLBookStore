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
namespace OLBookstore.Web.Categories
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
		OLBookstore.BLL.CategoriesManager bll=new OLBookstore.BLL.CategoriesManager();
		OLBookstore.Model.Categories model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.lblName.Text=model.Name;
		this.txtPId.Text=model.PId.ToString();
		this.txtSortNum.Text=model.SortNum.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(!PageValidate.IsNumber(txtPId.Text))
			{
				strErr+="PId格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtSortNum.Text))
			{
				strErr+="SortNum格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int Id=int.Parse(this.lblId.Text);
			string Name=this.lblName.Text;
			int PId=int.Parse(this.txtPId.Text);
			int SortNum=int.Parse(this.txtSortNum.Text);


			OLBookstore.Model.Categories model=new OLBookstore.Model.Categories();
			model.Id=Id;
			model.Name=Name;
			model.PId=PId;
			model.SortNum=SortNum;

			OLBookstore.BLL.CategoriesManager bll=new OLBookstore.BLL.CategoriesManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
