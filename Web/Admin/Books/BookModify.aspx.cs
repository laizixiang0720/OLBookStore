using Maticsoft.Common;
using OLBookstore.BLL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web.Admin.Books
{
    public partial class BookModify : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Request.Params["id"] != null && Request.Params["id"].Trim() != "")
                {
                    int Id = (Convert.ToInt32(Request.Params["id"]));
                    PublisherDataBind();
                    CategoryDataBind();
                    ShowInfo(Id);
                    
                }
            }
        }

        private void PublisherDataBind()
        {
            DataSet ds = new PublishersManager().GetAllList();
            DataRow dr = ds.Tables[0].NewRow();
            dr["Id"] = 0;
            dr["Name"] = "--请选择--";
            ds.Tables[0].Rows.InsertAt(dr, 0);
            ddlPublisher.DataSource = ds;
            ddlPublisher.DataBind();
        }

        private void CategoryDataBind()
        {
            DataSet ds = new CategoriesManager().GetAllList();
            DataRow dr = ds.Tables[0].NewRow();
            dr["Id"] = 0;
            dr["Name"] = "--请选择--";
            ds.Tables[0].Rows.InsertAt(dr, 0);
            ddlCategory.DataSource = ds;
            ddlCategory.DataBind();
        }
        private void ShowInfo(int Id)
        {
            BLL.BooksManager bll = new OLBookstore.BLL.BooksManager();
            Model.Books model = bll.GetModel(Id);
            this.lblId.Text = model.Id.ToString();
            this.txtTitle.Text = model.Title;
            this.txtAuthor.Text = model.Author;

            ddlCategory.SelectedValue = model.CategoryId.ToString();
            ddlPublisher.SelectedValue = model.PublisherId.ToString();
            this.txtPublishDate.Text = model.PublishDate.ToString();
            this.lblISBN.Text = model.ISBN;
            this.txtUnitPrice.Text = model.UnitPrice.ToString();
            this.txtContentDescription.Text = model.ContentDescription;
            this.txtTOC.Text = model.TOC;
         
            this.txtClicks.Text = model.Clicks.ToString();

        }

        public void btnSave_Click(object sender, EventArgs e)
        {

            string strErr = "";
            if (this.txtTitle.Text.Trim().Length == 0)
            {
                strErr += "Title不能为空！\\n";
            }
            if (this.txtAuthor.Text.Trim().Length == 0)
            {
                strErr += "Author不能为空！\\n";
            }
           
            if (!PageValidate.IsDateTime(txtPublishDate.Text))
            {
                strErr += "PublishDate格式错误！\\n";
            }
            if (!PageValidate.IsDecimal(txtUnitPrice.Text))
            {
                strErr += "UnitPrice格式错误！\\n";
            }
            if (this.txtContentDescription.Text.Trim().Length == 0)
            {
                strErr += "ContentDescription不能为空！\\n";
            }
            if (this.txtTOC.Text.Trim().Length == 0)
            {
                strErr += "TOC不能为空！\\n";
            }
            
            if (!PageValidate.IsNumber(txtClicks.Text))
            {
                strErr += "Clicks格式错误！\\n";
            }

            if (strErr != "")
            {
                MessageBox.Show(this, strErr);
                return;
            }
            int Id = int.Parse(this.lblId.Text);
            string Title = this.txtTitle.Text;
            string Author = this.txtAuthor.Text;
            int PublisherId = int.Parse(ddlPublisher.SelectedValue);
            DateTime PublishDate = DateTime.Parse(this.txtPublishDate.Text);
            string ISBN = this.lblISBN.Text;
            decimal UnitPrice = decimal.Parse(this.txtUnitPrice.Text);
            string ContentDescription = this.txtContentDescription.Text;
            string TOC = this.txtTOC.Text;
            int CategoryId = int.Parse(ddlCategory.SelectedValue);
            int Clicks = int.Parse(this.txtClicks.Text);


            OLBookstore.Model.Books model = new OLBookstore.Model.Books();
            model.Id = Id;
            model.Title = Title;
            model.Author = Author;
            model.PublisherId = PublisherId;
            model.PublishDate = PublishDate;
            model.ISBN = ISBN;
            model.UnitPrice = UnitPrice;
            model.ContentDescription = ContentDescription;
            model.TOC = TOC;
            model.CategoryId = CategoryId;
            model.Clicks = Clicks;

            OLBookstore.BLL.BooksManager bll = new OLBookstore.BLL.BooksManager();
            bll.Update(model);
            Maticsoft.Common.MessageBox.ShowAndRedirect(this, "保存成功！", "BookList.aspx");

        }

        protected void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("BookList.aspx");
        }
    }
}