﻿using System;
namespace OLBookstore.Model
{
	/// <summary>
	/// Books:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class Books
	{
		public Books()
		{}
		#region Model
		private int _id;
		private string _title;
		private string _author;
		private int _publisherid;
		private DateTime _publishdate;
		private string _isbn;
		private decimal _unitprice;
		private string _contentdescription;
		private string _toc;
		private int _categoryid;
		private int _clicks=0;
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
		public string Title
		{
			set{ _title=value;}
			get{return _title;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string Author
		{
			set{ _author=value;}
			get{return _author;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int PublisherId
		{
			set{ _publisherid=value;}
			get{return _publisherid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime PublishDate
		{
			set{ _publishdate=value;}
			get{return _publishdate;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ISBN
		{
			set{ _isbn=value;}
			get{return _isbn;}
		}
		/// <summary>
		/// 
		/// </summary>
		public decimal UnitPrice
		{
			set{ _unitprice=value;}
			get{return _unitprice;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ContentDescription
		{
			set{ _contentdescription=value;}
			get{return _contentdescription;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string TOC
		{
			set{ _toc=value;}
			get{return _toc;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int CategoryId
		{
			set{ _categoryid=value;}
			get{return _categoryid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int Clicks
		{
			set{ _clicks=value;}
			get{return _clicks;}
		}
		#endregion Model

	}
}

