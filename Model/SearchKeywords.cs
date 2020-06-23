using System;
namespace OLBookstore.Model
{
	/// <summary>
	/// SearchKeywords:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class SearchKeywords
	{
		public SearchKeywords()
		{}
		#region Model
		private int _id;
		private string _keyword;
		private int _searchcount=0;
		/// <summary>
		/// 
		/// </summary>
		public int Id
		{
			set{ _id=value;}
			get{return _id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Keyword
		{
			set{ _keyword=value;}
			get{return _keyword;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int SearchCount
		{
			set{ _searchcount=value;}
			get{return _searchcount;}
		}
		#endregion Model

	}
}

