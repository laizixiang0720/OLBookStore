using System;
using System.Data;
using System.Collections.Generic;
using Maticsoft.Common;
using OLBookstore.Model;
using System.Text;

namespace OLBookstore.BLL
{
    /// <summary>
    /// BooksManager
    /// </summary>
    public partial class BooksManager
    {
        private readonly OLBookstore.DAL.BooksService dal = new OLBookstore.DAL.BooksService();
        public BooksManager()
        { }
        #region  BasicMethod

        /// <summary>
        /// 得到最大ID
        /// </summary>
        public int GetMaxId()
        {
            return dal.GetMaxId();
        }

        /// <summary>
        /// 是否存在该记录
        /// </summary>
        public bool Exists(string ISBN, int Id)
        {
            return dal.Exists(ISBN, Id);
        }

        /// <summary>
        /// 增加一条数据
        /// </summary>
        public int Add(OLBookstore.Model.Books model)
        {
            return dal.Add(model);
        }

        /// <summary>
        /// 更新一条数据
        /// </summary>
        public bool Update(OLBookstore.Model.Books model)
        {
            return dal.Update(model);
        }

        /// <summary>
        /// 删除一条数据
        /// </summary>
        public bool Delete(int Id)
        {

            return dal.Delete(Id);
        }
        /// <summary>
        /// 删除一条数据
        /// </summary>
        public bool Delete(string ISBN, int Id)
        {

            return dal.Delete(ISBN, Id);
        }
        /// <summary>
        /// 删除一条数据
        /// </summary>
        public bool DeleteList(string Idlist)
        {
            return dal.DeleteList(Idlist);
        }

        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public OLBookstore.Model.Books GetModel(int Id)
        {

            return dal.GetModel(Id);
        }

        /// <summary>
        /// 得到一个对象实体，从缓存中
        /// </summary>
        public OLBookstore.Model.Books GetModelByCache(int Id)
        {

            string CacheKey = "BooksModel-" + Id;
            object objModel = Maticsoft.Common.DataCache.GetCache(CacheKey);
            if (objModel == null)
            {
                try
                {
                    objModel = dal.GetModel(Id);
                    if (objModel != null)
                    {
                        int ModelCache = Maticsoft.Common.ConfigHelper.GetConfigInt("ModelCache");
                        Maticsoft.Common.DataCache.SetCache(CacheKey, objModel, DateTime.Now.AddMinutes(ModelCache), TimeSpan.Zero);
                    }
                }
                catch { }
            }
            return (OLBookstore.Model.Books)objModel;
        }

        /// <summary>
        /// 获得数据列表
        /// </summary>
        public DataSet GetList(string strWhere)
        {
            return dal.GetList(strWhere);
        }
        /// <summary>
        /// 获得前几行数据
        /// </summary>
        public DataSet GetList(int Top, string strWhere, string filedOrder)
        {
            return dal.GetList(Top, strWhere, filedOrder);
        }
        /// <summary>
        /// 获得数据列表
        /// </summary>
        public List<OLBookstore.Model.Books> GetModelList(string strWhere)
        {
            DataSet ds = dal.GetList(strWhere);
            return DataTableToList(ds.Tables[0]);
        }
        /// <summary>
        /// 获得数据列表
        /// </summary>
        public List<OLBookstore.Model.Books> DataTableToList(DataTable dt)
        {
            List<OLBookstore.Model.Books> modelList = new List<OLBookstore.Model.Books>();
            int rowsCount = dt.Rows.Count;
            if (rowsCount > 0)
            {
                OLBookstore.Model.Books model;
                for (int n = 0; n < rowsCount; n++)
                {
                    model = dal.DataRowToModel(dt.Rows[n]);
                    if (model != null)
                    {
                        modelList.Add(model);
                    }
                }
            }
            return modelList;
        }

        /// <summary>
        /// 获得数据列表
        /// </summary>
        public DataSet GetAllList()
        {
            return GetList("");
        }

        /// <summary>
        /// 分页获取数据列表
        /// </summary>
        public int GetRecordCount(string strWhere)
        {
            return dal.GetRecordCount(strWhere);
        }
        /// <summary>
        /// 分页获取数据列表
        /// </summary>
        public DataSet GetListByPage(string strWhere, string orderby, int startIndex, int endIndex)
        {
            return dal.GetListByPage(strWhere, orderby, startIndex, endIndex);
        }
        /// <summary>
        /// 分页获取数据列表
        /// </summary>
        //public DataSet GetList(int PageSize,int PageIndex,string strWhere)
        //{
        //return dal.GetList(PageSize,PageIndex,strWhere);
        //}

        #endregion  BasicMethod
        #region  ExtensionMethod
        public DataSet GetList(string title, string author, int publisherId, string content, int price1, int price2, int categoryId)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("1=1 ");
            if (!string.IsNullOrEmpty(title))
            {
                sb.AppendFormat("and Title like '%{0}%' ", title);
            }
            if (!string.IsNullOrEmpty(author))
            {
                sb.AppendFormat("and Author like '%{0}%' ", author);
            }
            if (publisherId != 0)
            {
                sb.AppendFormat("and PublisherId={0} ", publisherId);
            }
            if (!string.IsNullOrEmpty(content))
            {
                sb.Append($"and ContentDescription like '%{content}%' ");
            }
            if (price1 * price2 != 0)
            {
                int pMin = Math.Min(price1, price2);
                int pMax = Math.Max(price1, price2);
                sb.AppendFormat("and UnitPrice >={0} and UnitPrice <={1} ", pMin, pMax);
            }
            else
            {
                if (price1 != 0 || price2 != 0)
                {
                    int pMax = Math.Max(price1, price2);
                    sb.AppendFormat("and UnitPrice={0} ", pMax);
                }
            }

            if (categoryId != 0)
            {
                sb.AppendFormat("and CategoryId = {0} ", categoryId);
            }
            return GetList(sb.ToString());
        }
        public List<BooksEx> GetAllBooks()
        {
            return dal.GetAllBooks();
        }

        public bool UpdateList(int cId,string idList)
        {
            return dal.UpdateList(cId, idList);
        }

        public BooksEx GetBookById(int Id)
        {
            return dal.GetBookById(Id);
        }
        #endregion  ExtensionMethod
    }
}

