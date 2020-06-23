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
namespace OLBookstore.Web.SearchKeywords
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
		OLBookstore.BLL.SearchKeywordsManager bll=new OLBookstore.BLL.SearchKeywordsManager();
		OLBookstore.Model.SearchKeywords model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.txtKeyword.Text=model.Keyword;
		this.txtSearchCount.Text=model.SearchCount.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(this.txtKeyword.Text.Trim().Length==0)
			{
				strErr+="Keyword不能为空！\\n";	
			}
			if(!PageValidate.IsNumber(txtSearchCount.Text))
			{
				strErr+="SearchCount格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int Id=int.Parse(this.lblId.Text);
			string Keyword=this.txtKeyword.Text;
			int SearchCount=int.Parse(this.txtSearchCount.Text);


			OLBookstore.Model.SearchKeywords model=new OLBookstore.Model.SearchKeywords();
			model.Id=Id;
			model.Keyword=Keyword;
			model.SearchCount=SearchCount;

			OLBookstore.BLL.SearchKeywordsManager bll=new OLBookstore.BLL.SearchKeywordsManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
