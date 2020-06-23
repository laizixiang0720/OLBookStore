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
namespace OLBookstore.Web.OrderBook
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
		OLBookstore.BLL.OrderBookManager bll=new OLBookstore.BLL.OrderBookManager();
		OLBookstore.Model.OrderBook model=bll.GetModel(Id);
		this.lblId.Text=model.Id.ToString();
		this.txtOrderID.Text=model.OrderID.ToString();
		this.txtBookID.Text=model.BookID.ToString();
		this.txtQuantity.Text=model.Quantity.ToString();
		this.txtUnitPrice.Text=model.UnitPrice.ToString();

	}

		public void btnSave_Click(object sender, EventArgs e)
		{
			
			string strErr="";
			if(!PageValidate.IsNumber(txtOrderID.Text))
			{
				strErr+="OrderID格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtBookID.Text))
			{
				strErr+="BookID格式错误！\\n";	
			}
			if(!PageValidate.IsNumber(txtQuantity.Text))
			{
				strErr+="Quantity格式错误！\\n";	
			}
			if(!PageValidate.IsDecimal(txtUnitPrice.Text))
			{
				strErr+="UnitPrice格式错误！\\n";	
			}

			if(strErr!="")
			{
				MessageBox.Show(this,strErr);
				return;
			}
			int Id=int.Parse(this.lblId.Text);
			int OrderID=int.Parse(this.txtOrderID.Text);
			int BookID=int.Parse(this.txtBookID.Text);
			int Quantity=int.Parse(this.txtQuantity.Text);
			decimal UnitPrice=decimal.Parse(this.txtUnitPrice.Text);


			OLBookstore.Model.OrderBook model=new OLBookstore.Model.OrderBook();
			model.Id=Id;
			model.OrderID=OrderID;
			model.BookID=BookID;
			model.Quantity=Quantity;
			model.UnitPrice=UnitPrice;

			OLBookstore.BLL.OrderBookManager bll=new OLBookstore.BLL.OrderBookManager();
			bll.Update(model);
			Maticsoft.Common.MessageBox.ShowAndRedirect(this,"保存成功！","list.aspx");

		}


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }
    }
}
