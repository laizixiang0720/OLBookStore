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
    public partial class Add : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
                       
        }

        		protected void btnSave_Click(object sender, EventArgs e)
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

			OLBookstore.Model.TemporaryCart model=new OLBookstore.Model.TemporaryCart();
			model.CreateTime=CreateTime;
			model.BookId=BookId;
			model.UserId=UserId;

			OLBookstore.BLL.TemporaryCartManager bll=new OLBookstore.BLL.TemporaryCartManager();
			bll.Add(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","add.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
