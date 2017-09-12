using Idmanist.Web.ViewModels;
using IdmanistCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Idmanist.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IProductRepository _productRepository;
        private readonly ISliderRepository _sliderRepository;

        public HomeController(ICategoryRepository categoryRepository,IProductRepository productRepository, ISliderRepository sliderRepository)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _sliderRepository = sliderRepository;
        }
        public ActionResult Index()
        {
            IndexViewModel model = new IndexViewModel();
            model.Categories = _categoryRepository.GetAll().ToList();
            model.Products = _productRepository.GetAll().ToList();
            model.Sliders = _sliderRepository.GetAll().ToList();
            return View(model);
        }

       



    }
}