using System;
namespace OLBookstore.Model
{
	/// <summary>
	/// ReaderComments:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class ReaderComments
	{
		public ReaderComments()
		{}
		#region Model
		private int _id;
		private int _bookid;
		private string _readername;
		private string _title;
		private string _comment;
		private DateTime _date;
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
		public string ReaderName
		{
			set{ _readername=value;}
			get{return _readername;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Title
		{
			set{ _title=value;}
			get{return _title;}
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
		public DateTime Date
		{
			set{ _date=value;}
			get{return _date;}
		}
		#endregion Model

	}
}

