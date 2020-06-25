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
        Model.Users user;
        BLL.TemporaryCartManager temporaryCart = new BLL.TemporaryCartManager();
        public DataSet ds
        {
            get { return ViewState["BookList"] as DataSet; }
            set { ViewState["BookList"] = value; }
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
                    user = Session["User"] as Model.Users;
                    string sql = " UserId= " + user.Id;
                    rptCartBinding(sql);
                    Calculate();
                }
            }
        }

        private void rptCartBinding(string sql)
        {
            DataTable cartT= new BLL.TemporaryCartManager().GetList(sql).Tables[0];
            StringBuilder booksql = new StringBuilder();
            booksql.Append("Id in ( ");
            foreach(DataRow row in cartT.Rows)
            {
                booksql.Append(row["BookId"]+",");
            }
            booksql.Append("-1)");
            ds = new BLL.BooksManager().GetList(booksql.ToString());
            Repeater1.DataSource = ds;
            Repeater1.DataBind();
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
                    DataRow dr = ds.Tables[0].Rows[i];
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
                rptCartBinding(sql);
            }
        }

        protected void txtBookAmount_TextChanged(object sender, EventArgs e)
        {
            Calculate();
        }

        protected void btnBilling_Click(object sender, EventArgs e)
        {

        }

        protected void cbBook_CheckedChanged(object sender, EventArgs e)
        {
            Calculate();
        }

        protected void lbtnDelSelect_Click(object sender, EventArgs e)
        {

        }

        protected void chkall_CheckedChanged(object sender, EventArgs e)
        {
            for (int i = 0; i < Repeater1.Items.Count; i++)
            {
                CheckBox chksel = Repeater1.Items[i].FindControl("cbBook") as CheckBox;
                chksel.Checked = true;

            }
            Calculate();
        }
    }
}