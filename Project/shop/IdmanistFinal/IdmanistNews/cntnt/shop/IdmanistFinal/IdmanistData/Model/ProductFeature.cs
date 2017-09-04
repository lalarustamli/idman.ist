using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace IdmanistData.Model
{
    public class ProductFeature
    {
        [Key]
        public int ProdcutFeatureId { get; set; }
        [Required(ErrorMessage = "{0} boş saxlamayın")]
        [DisplayName("Xüsusiyyət")]
        public string FeatureName { get; set; }
        [Required(ErrorMessage = "{0} boş saxlamayın")]
        [DisplayName("Xüsusiyyət dəyəri")]
        public string FeatureValue { get; set; }

        [Required]
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
    }
}
