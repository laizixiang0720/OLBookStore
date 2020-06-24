using OLBookstore.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OLBookstore.Web.Controls
{
    public partial class UCComm : System.Web.UI.UserControl
    {
        
        private string typeName;
        
      
        public string TypeName
        {
            get { return typeName; }
            set { typeName = value; }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                rptBooklistBinding(typeName);
                lblTitle.Text = TypeName;
            }
        }

        private void rptBooklistBinding(string typeName)
        {
            
            int cid=0;
            switch (typeName)
            {
                case ".NET": cid = 25;break;
                case "C#":cid = 1;break;
                case "其他": cid = 28;break;
                default: cid = 0;break;
            }
            string sql;
            if (cid == 0)
            {
                sql = "";
            }
            else
            {
                sql = "CategoryId= " + cid;
            }
            rptBook.DataSource = new BooksManager().GetList(5,sql,"Clicks desc");
            rptBook.DataBind();
        }
    }
}