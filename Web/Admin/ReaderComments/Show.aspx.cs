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
namespace OLBookstore.Web.ReaderComments
{
    public partial class Show : Page
    {        
        		public string strid=""; 
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
				{
					strid = Request.Params["id"];
					int Id=(Convert.ToInt32(strid));
					ShowInfo(Id);
				}
			}
		}
		
	private void ShowInfo(int Id)
	{
		OLBookstore.BLL.ReaderCommentsManager bll=new OLBookstore.BLL.ReaderCommentsManager();
		OLBookstore.Model.ReaderComments model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.lblBookId.Text=model.BookId.ToString();
		this.lblReaderName.Text=model.ReaderName;
		this.lblTitle.Text=model.Title;
		this.lblComment.Text=model.Comment;
		this.lblDate.Text=model.Date.ToString();

	}


    }
}
