using System;
using System.Collections.Generic;
using System.Text;

namespace Idmanist.Data.Model
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public Category Category { get; set; }

        public ICollection<ProductImage> ProductImages { get; set; }
        public ICollection<ProductFeature> ProductFeatures { get; set; }
    }
}
