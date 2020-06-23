using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Data;
using Maticsoft.Common;
using System.Drawing;
using LTP.Accounts.Bus;
using OLBookstore.BLL;

namespace OLBookstore.Web.Users
{
    public partial class List : Page
    {
        
        
        
		OLBookstore.BLL.UsersManager bll = new OLBookstore.BLL.UsersManager();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                gridView.BorderColor = ColorTranslator.FromHtml(Application[Session["Style"].ToString() + "xtable_bordercolorlight"].ToString());
                gridView.HeaderStyle.BackColor = ColorTranslator.FromHtml(Application[Session["Style"].ToString() + "xtable_titlebgcolor"].ToString());
                btnDelete.Attributes.Add("onclick", "return confirm(\"你确认要删除吗？\")");
                BindData();
            }
        }
        public string GetUserRoleNameById(string id)
        {
            BLL.UserRolesManager bu = new BLL.UserRolesManager();
            Model.UserRoles userRoles = bu.GetModel(Convert.ToInt32(id));
            return userRoles.Name;
        }
        public string GetUserRoleStateNameById(string id)
        {
            BLL.UserStatesManager bs = new BLL.UserStatesManager();
            return bs.GetModel(Convert.ToInt32(id)).Name;
        }
        protected void btnSearch_Click(object sender, EventArgs e)
        {
            BindData();
        }
        
        protected void btnDelete_Click(object sender, EventArgs e)
        {
            string idlist = GetSelIDlist();
            if (idlist.Trim().Length == 0) 
                return;
            bll.DeleteList(idlist);
            BindData();
        }
        
        #region gridView
                        
        public void BindData()
        {
            #region
            //if (!Context.User.Identity.IsAuthenticated)
            //{
            //    return;
            //}
            //AccountsPrincipal user = new AccountsPrincipal(Context.User.Identity.Name);
            //if (user.HasPermissionID(PermId_Modify))
            //{
            //    gridView.Columns[6].Visible = true;
            //}
            //if (user.HasPermissionID(PermId_Delete))
            //{
            //    gridView.Columns[7].Visible = true;
            //}
            #endregion

            DataSet ds = new DataSet();
            StringBuilder strWhere = new StringBuilder();
            if (txtKeyword.Text.Trim() != "")
            {      
                #warning 代码生成警告：请修改 keywordField 为需要匹配查询的真实字段名称
                //strWhere.AppendFormat("keywordField like '%{0}%'", txtKeyword.Text.Trim());
            }            
            ds = bll.GetList(strWhere.ToString());            
            gridView.DataSource = ds;
            gridView.DataBind();
        }

        protected void gridView_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            gridView.PageIndex = e.NewPageIndex;
            BindData();
        }
        protected void gridView_OnRowCreated(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.Header)
            {
                //e.Row.Cells[0].Text = "<input id='Checkbox2' type='checkbox' onclick='CheckAll()'/><label></label>";
            }
        }
        protected void gridView_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            e.Row.Attributes.Add("style", "background:#FFF");
            //Model.Users user = e.Row.DataItem as Model.Users;
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                LinkButton linkbtnDel = (LinkButton)e.Row.FindControl("LinkButton1");
                linkbtnDel.Attributes.Add("onclick", "return confirm(\"你确认要删除吗\")");

                //object obj1 = DataBinder.Eval(e.Row.DataItem, "Levels");
                //if ((obj1 != null) && ((obj1.ToString() != "")))
                //{
                //    e.Row.Cells[1].Text = obj1.ToString();
                //}
                LinkButton lbDel = e.Row.FindControl("lbDel") as LinkButton;
                lbDel.Attributes.Add("onclick", "return confirm(\"你确认要删除吗\")");
            }
        }
        
        protected void gridView_RowDeleting(object sender, GridViewDeleteEventArgs e)
        {
            //#warning 代码生成警告：请检查确认真实主键的名称和类型是否正确
            //int ID = (int)gridView.DataKeys[e.RowIndex].Value;
            //bll.Delete(ID);
            //gridView.OnBind();
        }

        private string GetSelIDlist()
        {
            string idlist = "";
            bool BxsChkd = false;
            for (int i = 0; i < gridView.Rows.Count; i++)
            {
                CheckBox ChkBxItem = (CheckBox)gridView.Rows[i].FindControl("DeleteThis");
                if (ChkBxItem != null && ChkBxItem.Checked)
                {
                    BxsChkd = true;
                    //#warning 代码生成警告：请检查确认Cells的列索引是否正确
                    if (gridView.DataKeys[i].Value != null)
                    {                        
                        idlist += gridView.DataKeys[i].Value.ToString() + ",";
                    }
                }
            }
            if (BxsChkd)
            {
                idlist = idlist.Substring(0, idlist.LastIndexOf(","));
            }
            return idlist;
        }





        #endregion

        protected void gridView_RowEditing(object sender, GridViewEditEventArgs e)
        {
            gridView.EditIndex = e.NewEditIndex;
            DropDownList dropDownList = gridView.Rows[e.NewEditIndex].FindControl("ddlUserRole") as DropDownList;
            
            BindData();
            BindUserRole(e.NewEditIndex);
            BindUserState(e.NewEditIndex);
        }

        private void BindUserState(int index)
        {
            DropDownList ddlUserState = gridView.Rows[index].FindControl("ddlUserState") as DropDownList;
            HiddenField hfUserState = gridView.Rows[index].FindControl("hfUserState") as HiddenField;
            BLL.UserStatesManager bu = new BLL.UserStatesManager();
            DataSet ds = bu.GetAllList();
            ddlUserState.DataSource = ds;
            ddlUserState.DataTextField = "Name";
            ddlUserState.DataValueField = "Id";
            ddlUserState.DataBind();
            ddlUserState.SelectedValue = hfUserState.Value;
        }

        private void BindUserRole(int index)
        {
            DropDownList ddlUserRole = gridView.Rows[index].FindControl("ddlUserRole") as DropDownList;
            HiddenField hfUserRole = gridView.Rows[index].FindControl("hfUserRole") as HiddenField;
            BLL.UserRolesManager bu = new BLL.UserRolesManager();
            DataSet ds = bu.GetAllList();
            ddlUserRole.DataSource = ds;
            ddlUserRole.DataTextField = "Name";
            ddlUserRole.DataValueField = "Id";
            ddlUserRole.DataBind();
            ddlUserRole.SelectedValue = hfUserRole.Value;
        }
        protected void gridView_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
        {
            gridView.EditIndex = -1;
            BindData();
        }

        protected void gridView_RowUpdating(object sender, GridViewUpdateEventArgs e)
        {
            Model.Users user = new Model.Users();
            user.Address = (gridView.Rows[e.RowIndex].FindControl("txtAddress") as TextBox).Text;
            user.Id = Convert.ToInt32(gridView.DataKeys[e.RowIndex].Value);
            user.LoginId= (gridView.Rows[e.RowIndex].FindControl("txtLoginId") as TextBox).Text;
            user.LoginPwd= (gridView.Rows[e.RowIndex].FindControl("txtLoginPwd") as TextBox).Text;
            user.Mail= (gridView.Rows[e.RowIndex].FindControl("txtMail") as TextBox).Text;
            user.Name= (gridView.Rows[e.RowIndex].FindControl("txtName") as TextBox).Text;
            user.Phone= (gridView.Rows[e.RowIndex].FindControl("txtPhone") as TextBox).Text;
            user.UserRoleId= Convert.ToInt32((gridView.Rows[e.RowIndex].FindControl("ddlUserRole") as DropDownList).SelectedValue);
            user.UserStateId = Convert.ToInt32((gridView.Rows[e.RowIndex].FindControl("ddlUserState") as DropDownList).SelectedValue);
            BLL.UsersManager usersManager = new BLL.UsersManager();
            usersManager.Update(user);
            MessageBox.Show(this, "编辑成功");
            gridView.EditIndex = -1;
            BindData();
        }

        protected void gridView_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Del")
            {
                new UsersManager().Delete(Convert.ToInt32(e.CommandArgument));
                MessageBox.Show(this, "删除成功");
                BindData();
            }
        }
    }
}
