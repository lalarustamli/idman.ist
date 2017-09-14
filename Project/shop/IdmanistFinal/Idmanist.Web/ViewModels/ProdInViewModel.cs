using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Idmanist.Web.ViewModels
{
    public class ProdInViewModel
    {
        public Product Product { get; set; }
        public IEnumerable<IdmanistData.Model.Product> RelatedProducts { get; set; }
        public Product PrevProduct { get; set; }
        public Product NextProduct { get; set; }
        public IList<IdmanistData.Model.Category> Categories { get; set; }
        public IEnumerable<IdmanistData.Model.Product> Products { get; set; }
        public IEnumerable<IdmanistData.Model.Product> FeaturedProducts { get; set; }
        public IEnumerable<IdmanistData.Model.Wishes> wishesss { get; set; }
    }
}