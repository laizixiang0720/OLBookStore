using System;
namespace OLBookstore.Model
{
	/// <summary>
	/// BookRatings:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class BookRatings
	{
		public BookRatings()
		{}
		#region Model
		private int _id;
		private int _bookid;
		private int _userid;
		private int? _rating;
		private string _comment;
		private DateTime _createdtime= DateTime.Now;
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
		public int? Rating
		{
			set{ _rating=value;}
			get{return _rating;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Comment
		{
			set{ _comment=value;}
			get{return _comment;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime CreatedTime
		{
			set{ _createdtime=value;}
			get{return _createdtime;}
		}
		#endregion Model

	}
}

