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
namespace OLBookstore.Web.ReaderComments
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
		OLBookstore.BLL.ReaderCommentsManager bll=new OLBookstore.BLL.ReaderCommentsManager();
		OLBookstore.Model.ReaderComments model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.txtBookId.Text=model.BookId.ToString();
		this.lblReaderName.Text=model.ReaderName;
		this.txtTitle.Text=model.Title;
		this.txtComment.Text=model.Comment;
		this.txtDate.Text=model.Date.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(!PageValidate.IsNumber(txtBookId.Text))
			{
				strErr+="BookId格式错误！\\n";	
			}
			if(this.txtTitle.Text.Trim().Length==0)
			{
				strErr+="Title不能为空！\\n";	
			}
			if(this.txtComment.Text.Trim().Length==0)
			{
				strErr+="Comment不能为空！\\n";	
			}
			if(!PageValidate.IsDateTime(txtDate.Text))
			{
				strErr+="Date格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int Id=int.Parse(this.lblId.Text);
			int BookId=int.Parse(this.txtBookId.Text);
			string ReaderName=this.lblReaderName.Text;
			string Title=this.txtTitle.Text;
			string Comment=this.txtComment.Text;
			DateTime Date=DateTime.Parse(this.txtDate.Text);


			OLBookstore.Model.ReaderComments model=new OLBookstore.Model.ReaderComments();
			model.Id=Id;
			model.BookId=BookId;
			model.ReaderName=ReaderName;
			model.Title=Title;
			model.Comment=Comment;
			model.Date=Date;

			OLBookstore.BLL.ReaderCommentsManager bll=new OLBookstore.BLL.ReaderCommentsManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
