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
    public partial class Add : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
                       
        }

        		protected void btnSave_Click(object sender, EventArgs e)
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
			int BookId=int.Parse(this.txtBookId.Text);
			int UserId=int.Parse(this.txtUserId.Text);
			int Rating=int.Parse(this.txtRating.Text);
			string Comment=this.txtComment.Text;
			DateTime CreatedTime=DateTime.Parse(this.txtCreatedTime.Text);

			OLBookstore.Model.BookRatings model=new OLBookstore.Model.BookRatings();
			model.BookId=BookId;
			model.UserId=UserId;
			model.Rating=Rating;
			model.Comment=Comment;
			model.CreatedTime=CreatedTime;

			OLBookstore.BLL.BookRatingsManager bll=new OLBookstore.BLL.BookRatingsManager();
			bll.Add(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","add.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
