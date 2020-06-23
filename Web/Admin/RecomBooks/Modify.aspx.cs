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
namespace OLBookstore.Web.RecomBooks
{
    public partial class Modify : Page
    {       

        		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				#warning 代码生成提示：显示页面,请检查确认该语句是否正确
				ShowInfo();
			}
		}
			
	private void ShowInfo()
	{
		OLBookstore.BLL.RecomBooksManager bll=new OLBookstore.BLL.RecomBooksManager();
		OLBookstore.Model.RecomBooks model=bll.GetModel();
		this.txtBookId.Text=model.BookId.ToString();
		this.txtUserId.Text=model.UserId.ToString();

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

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int BookId=int.Parse(this.txtBookId.Text);
			int UserId=int.Parse(this.txtUserId.Text);


			OLBookstore.Model.RecomBooks model=new OLBookstore.Model.RecomBooks();
			model.BookId=BookId;
			model.UserId=UserId;

			OLBookstore.BLL.RecomBooksManager bll=new OLBookstore.BLL.RecomBooksManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
