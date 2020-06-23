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
namespace OLBookstore.Web.RecomBooks
{
    public partial class Show : Page
    {        
        		public string strid=""; 
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
		this.lblBookId.Text=model.BookId.ToString();
		this.lblUserId.Text=model.UserId.ToString();

	}


    }
}
