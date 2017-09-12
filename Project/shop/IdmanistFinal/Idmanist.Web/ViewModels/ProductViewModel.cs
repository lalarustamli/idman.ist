﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Idmanist.Web.ViewModels
{
    public class ProductViewModel
    {
        public IList<IdmanistData.Model.Category> Categories { get; set; }
        public IEnumerable<IdmanistData.Model.Product> Products { get; set; }
        public IEnumerable<IdmanistData.Model.MainSlider> Sliders { get; set; }
    }
}