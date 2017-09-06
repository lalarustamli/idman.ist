using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace IdmanistData.Model
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required(ErrorMessage = "{0} boş saxlamayın")]
        [DisplayName("Məhsul adı")]
        public string ProductName { get; set; }
        [DisplayName("Əlavə oldunduğu tarix")]
        public System.DateTime Product_date { get; set; }
        [DisplayName("Qiyməti")]
        public decimal Product_Price { get; set; }
        [DisplayName("Məlumat")]
        public string ProductInfo { get; set; }
        
        public virtual ICollection<ProductImage> ProductImages { get; set; }
        public virtual ICollection<ProductFeature> ProductFeatures { get; set; }

        [Required]
        
        public int CategoryId { get; set; }
        

        [DisplayName("Kateqoriya adı")]
        public virtual Category Category { get; set; }

        

    }
}
