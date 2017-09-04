using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistData.Model
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        [DisplayName("Ad")]
        public string CustomerName { get; set; }
        [DisplayName("Soyad")]
        public string CustomerSurName { get; set; }
        [DisplayName("Email")]
        public string CustomerEmail { get; set; }
        [DisplayName("Telefon nömrəsi")]
        public int CustomerPhone { get; set; }
        [DisplayName("Şifrə")]
        public int CustomerPassword { get; set; }
    }
}
