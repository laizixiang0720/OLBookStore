using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OLBookstore.Model
{
   public class BooksEx :Books
    {
        public Publishers Publishers{ get; set; }
        public Categories Categories { get; set; }
    }
}
