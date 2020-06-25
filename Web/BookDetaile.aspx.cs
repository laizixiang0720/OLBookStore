using Maticsoft.Common;
using OLBookstore.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web
{
    public partial class BookDetaile : System.Web.UI.Page
    {
        int bid;
        BooksManager bb = new BooksManager();
        PublishersManager pm = new PublishersManager();
        CategoriesManager cm = new CategoriesManager();
        TemporaryCartManager tcm = new TemporaryCartManager();
        public Model.Books Book
        {
            get { return ViewState["book"] as Model.Books; }
            set { ViewState["book"] = value;  }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string sBid = Request.QueryString["bid"];
                if (sBid != null)
                {
                    bid = Convert.ToInt32(sBid);
                    Book = bb.GetModel(bid);
                }
                else
                {
                    Response.Redirect("BookList.aspx");
                }
            }
        }

        protected void imgbtnCart_Click(object sender, ImageClickEventArgs e)
        {
            if (Session["User"] != null)
            {
                Model.Users user = Session["User"] as Model.Users;
                Model.TemporaryCart cart = new Model.TemporaryCart();
                cart.BookId = Book.Id;
                cart.UserId = user.Id;
                cart.CreateTime = DateTime.Now;
                if(tcm.Add(cart) > 0)
                {
                    MessageBox.ShowAndRedirect(this, "该图书已添加到您购物", "Cart.aspx");
                }
                else
                {
                    MessageBox.Show(this, "该图书添加失败");
                }
            }
            else
            {
                MessageBox.ShowAndRedirect(this, "您没有登录系统，不能将图书加入购物车，请先登录后在使用购物车功能！", "login.aspx");
            }
        }

        public string GetPublisherNameById(int Id)
        {
            return pm.GetModel(Id).Name;
        }
        public string GetCategoryNameById(int Id)
        {
            return cm.GetModel(Id).Name;
        }

    }
}