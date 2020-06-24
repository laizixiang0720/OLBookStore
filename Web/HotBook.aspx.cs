using OLBookstore.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web
{
    public partial class HotBook : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BindHotBook();
            }
        }

        private void BindHotBook()
        {
            BooksManager bm = new BooksManager();
            Repeater1.DataSource = bm.GetList(5,"1=1 "," Clicks desc").Tables[0].DefaultView;
            Repeater1.DataBind();
        }
    }
}