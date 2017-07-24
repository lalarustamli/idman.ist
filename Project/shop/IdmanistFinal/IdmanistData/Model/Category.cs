using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace IdmanistData.Model
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        [Required(ErrorMessage ="{0} boş saxlamayın") ]
        [DisplayName("Kateqoriya adı")]
        public string CategoryName { get; set; }

        public virtual ICollection<Product> Products { get; set; }

    }
}
