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
    public partial class Add : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
                       
        }

        		protected void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(this.txtName.Text.Trim().Length==0)
			{
				strErr+="Name不能为空！\\n";	
			}
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
			string Name=this.txtName.Text;
			int PId=int.Parse(this.txtPId.Text);
			int SortNum=int.Parse(this.txtSortNum.Text);

			OLBookstore.Model.Categories model=new OLBookstore.Model.Categories();
			model.Name=Name;
			model.PId=PId;
			model.SortNum=SortNum;

			OLBookstore.BLL.CategoriesManager bll=new OLBookstore.BLL.CategoriesManager();
			bll.Add(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","add.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
