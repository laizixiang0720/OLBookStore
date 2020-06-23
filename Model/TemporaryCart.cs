using System;
namespace OLBookstore.Model
{
	/// <summary>
	/// TemporaryCart:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class TemporaryCart
	{
		public TemporaryCart()
		{}
		#region Model
		private DateTime _createtime= DateTime.Now;
		private int _bookid;
		private int _userid;
		private int _id;
		/// <summary>
		/// 
		/// </summary>
		public DateTime CreateTime
		{
			set{ _createtime=value;}
			get{return _createtime;}
		}
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
		/// <summary>
		/// 
		/// </summary>
		public int Id
		{
			set{ _id=value;}
			get{return _id;}
		}
		#endregion Model

	}
}

