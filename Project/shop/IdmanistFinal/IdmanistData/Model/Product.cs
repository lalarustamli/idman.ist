using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
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

        
        public virtual ICollection<ProductImage> ProductImages { get; set; }
        public virtual ICollection<ProductFeature> ProductFeatures { get; set; }

        [Required]
        
        public int CategoryId { get; set; }
        [DisplayName("Kateqoriya adı")]
        public virtual Category Category { get; set; }
    }
}
