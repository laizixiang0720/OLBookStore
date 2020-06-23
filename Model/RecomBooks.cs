using System;
namespace OLBookstore.Model
{
	/// <summary>
	/// RecomBooks:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class RecomBooks
	{
		public RecomBooks()
		{}
		#region Model
		private int _bookid;
		private int _userid;
		/// <summary>
		/// 
		/// </summary>
		public int BookId
		{
			set{ _bookid=value;}
			get{return _bookid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int UserId
		{
			set{ _userid=value;}
			get{return _userid;}
		}
		#endregion Model

	}
}

