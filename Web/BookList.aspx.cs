using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OLBookstore.BLL;
using OLBookstore.Model;

namespace OLBookstore.Web
{
    public partial class BookList : System.Web.UI.Page
    {
        private int pageSize = 2;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                CurrentPageIndex = 1;
                sortSQL = "";
                BindBookInfo("");
            }
        }
        BLL.BooksManager bb = new BooksManager();
        PublishersManager pm = new PublishersManager();
        CategoriesManager cm = new CategoriesManager();
        
        public int CurrentPageIndex
        {
            get { return Convert.ToInt32(ViewState["CurrentPageIndex"]); }
            set { ViewState["CurrentPageIndex"] = value; }
        }
        public int pageCount
        {
            get { return Convert.ToInt32(ViewState["pageCount"]); }
            set { ViewState["pageCount"] = value; }
        }
        public string sortSQL
        {
            get { return ViewState["sortSQL"].ToString(); }
            set
            {
                ViewState["sortSQL"] = value;
            }
        }
        private void BindBookInfo(string sql)
        {
            PagedDataSource pds = new PagedDataSource();
            pds.AllowPaging = true;
            pds.CurrentPageIndex = CurrentPageIndex - 1;
            pds.DataSource = bb.GetList(sql).Tables[0].DefaultView;
            pds.PageSize = pageSize;
            pageCount = pds.PageCount;
            lblPageInfo.Text = $"第{CurrentPageIndex}页，共{pageCount}页";
            DataList1.DataSource = pds;
            DataList1.DataBind();
            SetPageBtn();
        }
        public string GetImg(string ISBN)
        {
            return @"~/userfiles/" + ISBN.Trim() + ".jpg";
        }
        public string GetPublisherNameById(string Id)
        {
            return pm.GetModel(Convert.ToInt32(Id)).Name;
        }
        public string GetCategoryNameById(string Id)
        {
            return cm.GetModel(Convert.ToInt32(Id)).Name;
        }

        protected void btnCate_Click(object sender, EventArgs e)
        {
            sortSQL = "1=1 order by CategoryId";
            CurrentPageIndex = 1;
            BindBookInfo(sortSQL);
        }

        protected void btnPrice_Click(object sender, EventArgs e)
        {
            sortSQL = "1=1 order by UnitPrice";
            CurrentPageIndex = 1;
            BindBookInfo(sortSQL);
        }
        protected void btnDefault_Click(object sender, EventArgs e)
        {
            sortSQL = "";
            CurrentPageIndex = 1;
            BindBookInfo(sortSQL);
        }
        private void SetPageBtn()
        {
            if (CurrentPageIndex >= pageCount)
            {
                btnNext.Enabled = false;
            }
            else
            {
                btnNext.Enabled = true;
            }
            if (CurrentPageIndex <= 1)
            {
                btnPre.Enabled = false;
            }
            else
            {
                btnPre.Enabled = true;
            }
        }

        protected void btnPre_Click(object sender, EventArgs e)
        {
            CurrentPageIndex--;
            BindBookInfo(sortSQL);
           
        }

        protected void btnNext_Click(object sender, EventArgs e)
        {
            CurrentPageIndex++;
            BindBookInfo(sortSQL);
        }

        
    }
}