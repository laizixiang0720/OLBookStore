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
			if(this.txtReaderName.Text.Trim().Length==0)
			{
				strErr+="ReaderName不能为空！\\n";	
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
			int BookId=int.Parse(this.txtBookId.Text);
			string ReaderName=this.txtReaderName.Text;
			string Title=this.txtTitle.Text;
			string Comment=this.txtComment.Text;
			DateTime Date=DateTime.Parse(this.txtDate.Text);

			OLBookstore.Model.ReaderComments model=new OLBookstore.Model.ReaderComments();
			model.BookId=BookId;
			model.ReaderName=ReaderName;
			model.Title=Title;
			model.Comment=Comment;
			model.Date=Date;

			OLBookstore.BLL.ReaderCommentsManager bll=new OLBookstore.BLL.ReaderCommentsManager();
			bll.Add(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","add.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
