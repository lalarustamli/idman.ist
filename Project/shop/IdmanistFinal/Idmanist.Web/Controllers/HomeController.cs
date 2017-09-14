using Idmanist.Web.ViewModels;
using IdmanistCore.Infrastructure;
using IdmanistData.DataContext;
using IdmanistData.Model;
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
        private readonly IWishRepository _wishRepository;

        public HomeController(ICategoryRepository categoryRepository,IProductRepository productRepository, ISliderRepository sliderRepository,IWishRepository wishRepository)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _sliderRepository = sliderRepository;
            _wishRepository = wishRepository;
        }
        public ActionResult Index()
        {
            IndexViewModel model = new IndexViewModel();
            model.Categories = _categoryRepository.GetAll().ToList();
            model.Products = _productRepository.GetAll().ToList();
            model.Sliders = _sliderRepository.GetAll().ToList();
            model.FeaturedProducts = _productRepository.GetAll().OrderByDescending(k => k.Product_date).Take(7).ToList();
            model.wishesss = _wishRepository.GetAll().ToList();

            return View(model);
        }
        public string UnlikeThis(int id)
        {
            using (IdmanistDataContext db = new IdmanistDataContext())
            {
                Product prod = db.Product.FirstOrDefault(x => x.ProductId == id);
                if (User.Identity.IsAuthenticated || Session["user"] != null)
                {
                    Customer thisUser = (Customer)(Session["user"]);
                    Customer d = db.Customer.FirstOrDefault(x => x.Email == thisUser.Email);
                    Wishes l = db.Wishes.FirstOrDefault(x => x.product_id == id && x.customer_id == d.UserID);
                    prod.mywishes--;
                    db.Wishes.Remove(l);
                    db.SaveChanges();

                }
                return prod.mywishes.ToString();
            }

        }




    }
}