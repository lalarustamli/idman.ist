using Idmanist.Admin.ViewModel;
using IdmanistCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Idmanist.Admin.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IProductRepository _productRepository;
        private readonly IProductImageRepository _productImageRepository;
        private readonly IProductFeatureRepository _productFeatureRepository;

        public HomeController(ICategoryRepository categoryRepository, IProductRepository productRepository, IProductImageRepository productImageRepository, IProductFeatureRepository productFeatureRepository)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _productFeatureRepository = productFeatureRepository;
            _productImageRepository = productImageRepository;
        }

        public ActionResult Index()
        {
            var pageModel = new HomePageModel
            {
                CategoryCount = _categoryRepository.Count(),
                ProductCount = _productRepository.Count(),
                ProductFeatureCount = _productFeatureRepository.Count(),
                ProductImageCount = _productImageRepository.Count()

            };

            return View(pageModel);
        }

        
    }
}