using Idmanist.Web.ViewModels;
using IdmanistCore.Infrastructure;
using IdmanistData.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Idmanist.Web.Controllers
{
    public class ProductController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IProductRepository _productRepository;
        
        public ProductController(ICategoryRepository categoryRepository, IProductRepository productRepository)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
        }
        // GET: Product
        public ActionResult Index(int? id)
        {
            IdmanistDataContext db = new IdmanistDataContext();
            ProdInViewModel model = new ProdInViewModel();
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var product = _productRepository.GetById(id.Value);

            if (product == null)
            {
                return HttpNotFound();
            }
            model.RelatedProducts = _productRepository.GetAll().Where(o => o.ProductId != id && o.CategoryId == product.CategoryId).Take(8).ToList();
            model.Product = product;
            model.wishesss = db.Wishes.ToList();
            model.NextProduct = _productRepository.GetAll().FirstOrDefault(n => n.ProductId > product.ProductId && n.CategoryId == product.CategoryId);
            model.PrevProduct = _productRepository.GetAll().OrderByDescending(x => x.ProductId).FirstOrDefault(p => p.ProductId < product.ProductId && p.CategoryId == product.CategoryId);
            return View(model);
        }
    }
}