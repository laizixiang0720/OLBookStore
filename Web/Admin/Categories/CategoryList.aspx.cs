using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OLBookstore.BLL;
using OLBookstore.Model;
using System.Data;
namespace OLBookstore.Web.Admin.Categories
{
    public partial class CategoryList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                CategoryDataBind();
            }
        }
        private void CategoryDataBind()
        {
            DataSet ds = new CategoriesManager().GetAllList();
            DataRow dr = ds.Tables[0].NewRow();
            dr["Id"] = 0;
            dr["Name"] = "--请选择--";
            ds.Tables[0].Rows.InsertAt(dr, 0);
            ddlCategoryList.DataSource = ds;
            ddlCategoryList.DataBind();
        }
    }
}