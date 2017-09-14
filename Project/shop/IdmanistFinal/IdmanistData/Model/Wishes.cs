using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistData.Model
{
    public class Wishes
    {
        [Key]
        public int id { get; set; }
        public bool wished { get; set; }
        public int product_id { get; set; }
        public int customer_id { get; set; }

        [ForeignKey("product_id")]
        public virtual Product Product { get; set; }
        [ForeignKey("customer_id")]
        public virtual Customer Customer { get; set; }

    }
}
