using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistData.Model
{
    public class Reklam
    {
        [Key]
        public int reklamId { get; set; }
        public string reklamAd { get; set; }
        public string reklamLocation { get; set; }
        public string reklamImage { get; set; }
    }
}
