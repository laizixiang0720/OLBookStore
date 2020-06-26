using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web
{
    public partial class Indent : System.Web.UI.Page
    {
        BLL.BooksManager BookM = new BLL.BooksManager();
        public DataSet OrderBookLsitDs
        {
            get { return ViewState["OrderBookLsit"] as DataSet; }
            set { ViewState["OrderBookLsit"] = value; }
        }
        public Model.Users user
        {
            get
            { return Session["User"] as Model.Users; }
            set
            { Session["User"] = value; }
        }
        public Model.Orders orders
        {
            get { return Session["Order"] as Model.Orders; }
            set {  Session["Order"] = value; }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["User"] == null && Session["Order"]==null)
                {
                    Response.Redirect("login.aspx");
                }
                else
                {
                    rptIndentBinding();
                }
            }
        }
        private void rptIndentBinding()
        {
            int BookItems = 0;
            double OriginalPrice = 0;
            double TotalPrice = 0;
            double TotalEconomy = 0;
            string sql = $" OrderId= {orders.Id} ";
            OrderBookLsitDs = new BLL.OrderBookManager().GetList(sql);
            Repeater1.DataSource = OrderBookLsitDs.Tables[0];
            Repeater1.DataBind();
            for (int i = 0; i < Repeater1.Items.Count; i++)
            {
                BookItems++;
                Label lblBookAmount = Repeater1.Items[i].FindControl("lblBookAmount") as Label;
                int bookNum = Convert.ToInt32(OrderBookLsitDs.Tables[0].Rows[i]["Quantity"]);
                double bookPrice = Convert.ToDouble(OrderBookLsitDs.Tables[0].Rows[i]["UnitPrice"]);
                OriginalPrice += bookNum * bookPrice;
                lblBookAmount.Text = bookNum.ToString();
            }
            TotalPrice = OriginalPrice * 0.75;
            TotalEconomy = OriginalPrice * 0.25;
            lblBookItems.Text = BookItems.ToString();
            lblOriginalPrice.Text = OriginalPrice.ToString();
            lblTotalPrice.Text = TotalPrice.ToString();
            lblTotalEconomy.Text = TotalEconomy.ToString();
        }

      public string GetISBNById(string Id)
        {
            return BookM.GetModel(Convert.ToInt32(Id)).ISBN;
        }
        public string GetNameById(string Id)
        {
            return BookM.GetModel(Convert.ToInt32(Id)).Title;
        }

        protected void chkall_CheckedChanged(object sender, EventArgs e)
        {

        }

        protected void lbtnDelSelect_Click(object sender, EventArgs e)
        {

        }

        protected void btnBilling_Click(object sender, EventArgs e)
        {

        }
    }
}