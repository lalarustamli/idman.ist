using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistData.Model
{
    public class ProductBrand
    {
        [Key]
        public int ProductBrandId { get; set; }
        [DisplayName("Brend adı")]
        public string BrandName{ get; set; }
        public string BrandImage { get; set; }

       
    }
}
