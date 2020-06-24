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
using OLBookstore.BLL;

namespace OLBookstore.Web.Books
{
    public partial class Add : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                PublisherDataBind();
                CategoryDataBind();
            }
        }
        private void PublisherDataBind()
        {
            DataSet ds = new PublishersManager().GetAllList();
            DataRow dr = ds.Tables[0].NewRow();
            dr["Id"] = 0;
            dr["Name"] = "--请选择--";
            ds.Tables[0].Rows.InsertAt(dr, 0);
            ddlPublisher.DataTextField = "Name";
            ddlPublisher.DataValueField = "Id";
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
            ddlCategory.DataTextField = "Name";
            ddlCategory.DataValueField = "Id";
            ddlCategory.DataSource = ds;
            ddlCategory.DataBind();
        }

        protected void btnSave_Click(object sender, EventArgs e)
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
            if (this.txtISBN.Text.Trim().Length == 0)
            {
                strErr += "ISBN不能为空！\\n";
            }
            if (!PageValidate.IsDecimal(txtUnitPrice.Text))
            {
                strErr += "UnitPrice格式错误！\\n";
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
            string Title = this.txtTitle.Text;
            string Author = this.txtAuthor.Text;
            int PublisherId=int.Parse(ddlPublisher.SelectedValue);
            DateTime PublishDate = DateTime.Parse(this.txtPublishDate.Text);
            string ISBN = this.txtISBN.Text;
            decimal UnitPrice = decimal.Parse(this.txtUnitPrice.Text);
            string ContentDescription = this.FCKeditor1.Value;
            string TOC = this.txtTOC.Text;
            int CategoryId=int.Parse(this.ddlCategory.SelectedValue);
            int Clicks = int.Parse(this.txtClicks.Text);

            OLBookstore.Model.Books model = new OLBookstore.Model.Books();
            model.Title = Title;
            model.Author = Author;
            model.PublisherId=PublisherId;
            model.PublishDate = PublishDate;
            model.ISBN = ISBN;
            model.UnitPrice = UnitPrice;
            model.ContentDescription=ContentDescription;
            model.TOC = TOC;
            model.CategoryId=CategoryId;
            model.Clicks = Clicks;

            OLBookstore.BLL.BooksManager bll = new OLBookstore.BLL.BooksManager();
            bll.Add(model);
            Maticsoft.Common.MessageBox.ShowAndRedirect(this, "保存成功！", "List.aspx");

        }


        public void btnCancle_Click(object sender, EventArgs e)
        {
            Response.Redirect("list.aspx");
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            int dot = fuBook.FileName.LastIndexOf('.');
            string fileSuffix = fuBook.FileName.Substring(dot);
            string fileName = txtISBN.Text.Trim() + ".jpg";
            string path = Server.MapPath(@"/userfiles/" + fileName);
            fuBook.SaveAs(path);
            imgBook.ImageUrl = @"~/userfiles/" + fileName;
        }
    }
}
