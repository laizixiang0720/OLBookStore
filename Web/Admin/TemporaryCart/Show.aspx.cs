﻿using System;
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
namespace OLBookstore.Web.TemporaryCart
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
		OLBookstore.BLL.TemporaryCartManager bll=new OLBookstore.BLL.TemporaryCartManager();
		OLBookstore.Model.TemporaryCart model=bll.GetModel(Id);
		this.lblCreateTime.Text=model.CreateTime.ToString();
		this.lblBookId.Text=model.BookId.ToString();
		this.lblUserId.Text=model.UserId.ToString();
		this.lblId.Text=model.Id.ToString();

	}


    }
}
