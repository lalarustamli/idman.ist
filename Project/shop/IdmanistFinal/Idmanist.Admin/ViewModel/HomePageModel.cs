using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Idmanist.Admin.ViewModel
{
    public class HomePageModel
    {
        public int CategoryCount { get; set; }
        public int ProductCount { get; set; }
        public int ProductFeatureCount { get; set; }
        public int ProductImageCount { get; set; }
        public Product Product { get; set; }
        public IEnumerable<IdmanistData.Model.Product> RelatedProducts { get; set; }
        public Product PrevProduct { get; set; }
        public Product NextProduct { get; set; }
        public IList<IdmanistData.Model.Category> Categories { get; set; }
        public IEnumerable<IdmanistData.Model.Product> Products { get; set; }
        public IEnumerable<IdmanistData.Model.Product> FeaturedProducts { get; set; }
        public IEnumerable<IdmanistData.Model.Wishes> wishesss { get; set; }
        public IEnumerable<IdmanistData.Model.MainSlider> Sliders { get; set; }
        public IEnumerable<IdmanistData.Model.Reklam> Reklamlar { get; set; }
        public IEnumerable<IdmanistData.Model.Customer> Customers { get; set; }
        public IEnumerable<IdmanistData.Model.ProductBrand> Brands { get; set; }
    }
}