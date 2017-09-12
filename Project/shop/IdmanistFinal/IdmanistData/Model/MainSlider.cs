using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistData.Model
{
    public class MainSlider
    {
        [Key]
        public int slideId { get; set; }
        public int slideOrder { get; set; }
        public string slideImage { get; set; }
        public string slideTitle { get; set; }
        public string slideDescription { get; set; }
        public string sliderLocation { get; set; }


    }
}
