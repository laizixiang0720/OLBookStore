using OLBookstore.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web
{
    public partial class BookSearch : System.Web.UI.Page
    {
        PublishersManager pm = new PublishersManager();
        BooksManager bm = new BooksManager();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BindBookInfo("");
            }
        }
        private void BindBookInfo(string sql)
        {
            Repeater1.DataSource = bm.GetList(sql).Tables[0].DefaultView;
            Repeater1.DataBind();
        }
        public string GetPublisherNameById(string Id)
        {
            return pm.GetModel(Convert.ToInt32(Id)).Name;
        }

        protected void btnSearch_Click(object sender, EventArgs e)
        {
            string sql = string.Format(" title like '%{0}%'",txtSearch.Text.Trim());
            Repeater1.DataSource = bm.GetList(sql).Tables[0].DefaultView;
            Repeater1.DataBind();
        }
    }
}