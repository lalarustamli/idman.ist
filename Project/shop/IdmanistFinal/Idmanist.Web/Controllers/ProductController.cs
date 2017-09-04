using IdmanistCore.Infrastructure;
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
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var product = _productRepository.GetById(id.Value);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }
    }
}