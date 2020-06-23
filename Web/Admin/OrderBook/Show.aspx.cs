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
namespace OLBookstore.Web.OrderBook
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
		OLBookstore.BLL.OrderBookManager bll=new OLBookstore.BLL.OrderBookManager();
		OLBookstore.Model.OrderBook model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.lblOrderID.Text=model.OrderID.ToString();
		this.lblBookID.Text=model.BookID.ToString();
		this.lblQuantity.Text=model.Quantity.ToString();
		this.lblUnitPrice.Text=model.UnitPrice.ToString();

	}


    }
}
