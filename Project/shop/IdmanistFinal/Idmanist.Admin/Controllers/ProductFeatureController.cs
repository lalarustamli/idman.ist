using IdmanistCore.Infrastructure;
using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Idmanist.Admin.Controllers
{
    public class ProductFeatureController : Controller
    {
        private IProductRepository _productRepository;
        private IProductFeatureRepository _productFeatureRepository;
        public ProductFeatureController( IProductRepository productRepository, IProductFeatureRepository productFeatureRepository)
        {
            _productRepository = productRepository;
            _productFeatureRepository = productFeatureRepository;
        }
        // GET: ProductFeature
        public ActionResult Index(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var product = GetCurrentProduct(id.Value);
            var productFeatures = product.ProductFeatures;
            ViewBag.SelectedProduct = product;


            return View(productFeatures);

        }

        public ActionResult Create(int ? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var product = _productRepository.GetById(id.Value);
            ViewBag.SelectedProduct = product;

            return View();

        }
        [HttpPost, ValidateAntiForgeryToken]
        public ActionResult Create(int? id, ProductFeature productFeature)
        {
            productFeature.ProductId = id.Value;
            _productFeatureRepository.Insert(productFeature);
            _productFeatureRepository.Save();
            return RedirectToAction("Index", new { id = id.Value });
        }
        private Product GetCurrentProduct(int id)
        {
            var product = _productRepository.GetById(id);
            return product;
        }

        public ActionResult Details(int? id, int? productId)
        {
            if (id == null || productId == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var product = GetCurrentProduct(id.Value);
            ViewBag.SelectedProduct = product;
            var productFeature = _productFeatureRepository.GetById(id.Value);
            if (productFeature == null)
            {
                return HttpNotFound();
            }
            return View(productFeature);
        }

        public ActionResult Edit(int? id, int? productId)
        {
            if (id == null || productId == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var product = _productRepository.GetById(productId.Value);
            ViewBag.SelectedProduct = product;
            var productFeature = _productFeatureRepository.GetById(id.Value);
            if (productFeature == null)
            {
                return HttpNotFound();
            }
            return View(productFeature);
        }


        [HttpPost, ValidateAntiForgeryToken]
        public ActionResult Edit(ProductFeature productFeature)
        {
            if (!ModelState.IsValid)
            {
                return View(productFeature);
            }
            _productFeatureRepository.Update(productFeature);
            _productFeatureRepository.Save();
            return RedirectToAction("Index", new { id = productFeature.ProductId });
        }


        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var productFeature = _productFeatureRepository.GetById(id.Value);
            if (productFeature == null)
            {
                return HttpNotFound();
            }

            return View(productFeature);
        }

        [HttpPost, ValidateAntiForgeryToken, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            _productFeatureRepository.Delete(id);
            _productFeatureRepository.Save();
            return RedirectToAction("Index");
        }
    }
}