using Maticsoft.Common;
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
    public partial class Cart : System.Web.UI.Page
    {
     
        BLL.TemporaryCartManager temporaryCart = new BLL.TemporaryCartManager();
        BLL.OrdersManager ordersM = new BLL.OrdersManager();
        BLL.OrderBookManager orderBookM = new BLL.OrderBookManager();
        public DataSet BookLsitDs
        {
            get { return ViewState["BookList"] as DataSet; }
            set { ViewState["BookList"] = value; }
        }
        public Model.Users user
        {
            get
            { return Session["User"] as Model.Users;}
            set
            { Session["User"] = value;  }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["User"]==null)
                {
                    Response.Redirect("login.aspx");
                }
                else
                {
                    rptCartBinding();
                }
            }
        }

        private void rptCartBinding()
        {
            string sql= " UserId= " + user.Id;
            DataTable cartT= new BLL.TemporaryCartManager().GetList(sql).Tables[0];
            StringBuilder booksql = new StringBuilder();
            booksql.Append("Id in ( ");
            foreach(DataRow row in cartT.Rows)
            {
                booksql.Append(row["BookId"]+",");
            }
            booksql.Append("-1)");
            BookLsitDs = new BLL.BooksManager().GetList(booksql.ToString());
            Repeater1.DataSource = BookLsitDs;
            Repeater1.DataBind();
            Calculate();
        }
        private void Calculate()
        {
            int BookItems=0;
            double OriginalPrice = 0;
            double TotalPrice = 0;
            double TotalEconomy = 0;
            for (int i = 0; i < Repeater1.Items.Count; i++)
            {
                CheckBox chksel = Repeater1.Items[i].FindControl("cbBook") as CheckBox;
                if (chksel.Checked)
                {
                    BookItems++;
                    DataRow dr = BookLsitDs.Tables[0].Rows[i];
                    TextBox txtBookAmount = Repeater1.Items[i].FindControl("txtBookAmount") as TextBox;
                    int bookmun = Convert.ToInt32(txtBookAmount.Text.Trim());
                    OriginalPrice += Convert.ToDouble(dr["UnitPrice"]) * bookmun;
                }
                
            }
            TotalPrice = OriginalPrice * 0.75;
            TotalEconomy = OriginalPrice * 0.25;
            lblBookItems.Text = BookItems.ToString();
            lblOriginalPrice.Text = OriginalPrice.ToString();
            lblTotalPrice.Text = TotalPrice.ToString() ;
            lblTotalEconomy.Text = TotalEconomy.ToString();
        }
        protected void Repeater1_ItemCommand(object source, RepeaterCommandEventArgs e)
        {
            if (e.CommandName == "Del")
            {
                Model.Users user = Session["User"] as Model.Users;
                temporaryCart.Delete(Convert.ToInt32(e.CommandArgument), user.Id);
                MessageBox.Show(this, "删除成功！");
                string sql = " UserId= " + user.Id;
                rptCartBinding();
            }
        }

        protected void txtBookAmount_TextChanged(object sender, EventArgs e)
        {
            Calculate();
        }

        protected void btnBilling_Click(object sender, EventArgs e)
        {
            double OriginalPrice = 0;
            double TotalPrice = 0;
            List<Model.OrderBook> orderBooksLsit = new List<Model.OrderBook>();
            Model.Orders orders = new Model.Orders();
            for (int i = 0; i < Repeater1.Items.Count; i++)
            {
                CheckBox chksel = Repeater1.Items[i].FindControl("cbBook") as CheckBox;
                if (chksel.Checked)
                {
                    Model.OrderBook orderBook = new Model.OrderBook();
                    DataRow BookDr = BookLsitDs.Tables[0].Rows[i];
                    TextBox txtBookAmount = Repeater1.Items[i].FindControl("txtBookAmount") as TextBox;
                    int bookmun = Convert.ToInt32(txtBookAmount.Text.Trim());
                    OriginalPrice += Convert.ToDouble(BookDr["UnitPrice"]) * bookmun;
                    orderBook.Quantity = Convert.ToInt32(txtBookAmount.Text.Trim());
                    orderBook.UnitPrice = Convert.ToDecimal(BookDr["UnitPrice"]);
                    orderBook.BookID = Convert.ToInt32(BookDr["Id"]);
                    orderBooksLsit.Add(orderBook);
                }

            }
            TotalPrice = OriginalPrice * 0.75;
            orders.TotalPrice = Convert.ToDecimal(TotalPrice);
            orders.UserId = user.Id;
            orders.OrderDate = DateTime.Now;
            orders.Id= ordersM.Add(orders);
            foreach(Model.OrderBook order in orderBooksLsit)
            {
                order.OrderID = orders.Id;
                temporaryCart.Delete(order.BookID, user.Id);
                orderBookM.Add(order);
            }
            Session["Order"] = orders;
            MessageBox.ShowAndRedirect(this, "购买成功！","Indent.aspx");
        }

        protected void cbBook_CheckedChanged(object sender, EventArgs e)
        {
            Calculate();
        }

        protected void lbtnDelSelect_Click(object sender, EventArgs e)
        {
            for (int i = 0; i < Repeater1.Items.Count; i++)
            {
                CheckBox chksel = Repeater1.Items[i].FindControl("cbBook") as CheckBox;
                if (chksel.Checked)
                {
                    
                    DataRow dr = BookLsitDs.Tables[0].Rows[i];
                    temporaryCart.Delete(Convert.ToInt32(dr["Id"]), user.Id);
                }
            }
            rptCartBinding();
        }

        protected void chkall_CheckedChanged(object sender, EventArgs e)
        {
                for (int i = 0; i < Repeater1.Items.Count; i++)
                {
                    CheckBox chksel = Repeater1.Items[i].FindControl("cbBook") as CheckBox;
                    chksel.Checked = chkall.Checked;

                }
            Calculate();
        }
    }
}