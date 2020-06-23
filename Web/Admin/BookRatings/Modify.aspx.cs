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
namespace OLBookstore.Web.BookRatings
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
		OLBookstore.BLL.BookRatingsManager bll=new OLBookstore.BLL.BookRatingsManager();
		OLBookstore.Model.BookRatings model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.txtBookId.Text=model.BookId.ToString();
		this.txtUserId.Text=model.UserId.ToString();
		this.txtRating.Text=model.Rating.ToString();
		this.txtComment.Text=model.Comment;
		this.txtCreatedTime.Text=model.CreatedTime.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(!PageValidate.IsNumber(txtBookId.Text))
			{
				strErr+="BookId格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtUserId.Text))
			{
				strErr+="UserId格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtRating.Text))
			{
				strErr+="Rating格式错误！\\n";	
			}
			if(this.txtComment.Text.Trim().Length==0)
			{
				strErr+="Comment不能为空！\\n";	
			}
			if(!PageValidate.IsDateTime(txtCreatedTime.Text))
			{
				strErr+="CreatedTime格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int Id=int.Parse(this.lblId.Text);
			int BookId=int.Parse(this.txtBookId.Text);
			int UserId=int.Parse(this.txtUserId.Text);
			int Rating=int.Parse(this.txtRating.Text);
			string Comment=this.txtComment.Text;
			DateTime CreatedTime=DateTime.Parse(this.txtCreatedTime.Text);


			OLBookstore.Model.BookRatings model=new OLBookstore.Model.BookRatings();
			model.Id=Id;
			model.BookId=BookId;
			model.UserId=UserId;
			model.Rating=Rating;
			model.Comment=Comment;
			model.CreatedTime=CreatedTime;

			OLBookstore.BLL.BookRatingsManager bll=new OLBookstore.BLL.BookRatingsManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
