using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using OLBookstore.BLL;
using OLBookstore.Model;
using System.Data;
using System.Drawing;
using Maticsoft.Common;

namespace OLBookstore.Web.Admin.Books
{
    public partial class BookList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BookDataBind();
                PublisherDataBind();
                CategoryDataBind();
            }
        }
        private void BookDataBind()
        {
            gvBookList.DataSource = new BooksManager().GetAllBooks();
            gvBookList.DataBind();
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

            ddlCategory0.DataTextField = "Name";
            ddlCategory0.DataValueField = "Id";
            ddlCategory0.DataSource = ds;
            ddlCategory0.DataBind();
        }

        protected void btnSearch_Click(object sender, EventArgs e)
        {
            string title = txtBookName.Text.Trim();
            string author = txtAuthor.Text.Trim();
            int pId = int.Parse(ddlPublisher.SelectedValue);
            string content = txtContent.Text.Trim();
            int p1 = string.IsNullOrEmpty(txtPrice1.Text.Trim()) ? 0 : int.Parse(txtPrice1.Text.Trim());
            int p2 = string.IsNullOrEmpty(txtPrice2.Text.Trim()) ? 0 : int.Parse(txtPrice2.Text.Trim());
            int cId = int.Parse(ddlCategory.SelectedValue);

            gvBookList.DataSource = new BooksManager().GetList(title, author, pId, content, p1, p2, cId);
            gvBookList.DataBind();
        }

       private string GetSelIDList()
        {
            string idList = "";
            bool boxChecked = false;
            for(int i=0; i < gvBookList.Rows.Count; i++)
            {
                CheckBox checkBox = (CheckBox)gvBookList.Rows[i].FindControl("Modifythis");
                if (checkBox != null && checkBox.Checked)
                {
                    boxChecked = true;
                    if (gvBookList.DataKeys[i].Value != null)
                    {
                        idList += gvBookList.DataKeys[i].Value.ToString() + ",";
                    }
                }
            }
            if (boxChecked)
            {
                idList = idList.Substring(0, idList.LastIndexOf(","));
            }
            return idList;
        }

        protected void btnModify_Click(object sender, EventArgs e)
        {
            int cId = int.Parse(ddlCategory0.SelectedValue.ToString());
            string idList = GetSelIDList();
            if (idList.Trim().Length == 0)
                return;
            new BooksManager().UpdateList(cId, idList);
            BookDataBind();
        }

        protected void gvBookList_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            BooksEx book = e.Row.DataItem as BooksEx;

            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Attributes.Add("onmouseover", "currentcolor=this.style.backgroundColor;this.style.backgroundColor='#77DD99'");
                e.Row.Attributes.Add("onmouseout", "this.style.backgroundColor=currentcolor");
                LinkButton lbDel = e.Row.FindControl("lbDel") as LinkButton;
                lbDel.Attributes.Add("onclick", $"return confirm(\"你确认要{book.Title}删除吗？\")");
            }
        }

        protected void gvBookList_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Del")
            {
                new BooksManager().Delete(Convert.ToInt32(e.CommandArgument));
                MessageBox.Show(this, "删除成功");
                BookDataBind();
            }

        }
    }
}