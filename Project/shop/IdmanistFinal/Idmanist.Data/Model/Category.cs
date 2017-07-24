using System;
using System.Collections.Generic;
using System.Text;

namespace Idmanist.Data.Model
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        public ICollection<Product> Products { get; set; }

    }
}
