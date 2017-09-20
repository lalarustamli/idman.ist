using IdmanistCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using IdmanistData.Model;
using System.Net;

namespace Idmanist.Admin.Controllers
{
    public class BrandController : Controller
    {
        private readonly IBrandRepository _brandRepository;
        public BrandController(IBrandRepository brandRepository)
        {
            _brandRepository = brandRepository;
        }
        // GET: Brand
        public ActionResult Index()
        {
            var brandList = _brandRepository.GetAll().ToList();
            return View(brandList);
        }

        // GET: Brand/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var brand = _brandRepository.GetById(id.Value);
            if (brand == null)
            {
                return HttpNotFound();
            }

            return View(brand);
        }

        // GET: Brand/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Brand/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ProductBrand brand)
        {
            if (!ModelState.IsValid)
            {
                return View(brand);
            }
            _brandRepository.Insert(brand);
            _brandRepository.Save();
            return RedirectToAction("Index");
        }

        // GET: Brand/Edit/5
        public ActionResult Edit(int ? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var brand = _brandRepository.GetById(id.Value);

            if (brand == null)
            {
                return HttpNotFound();
            }

            return View(brand);
        }

        // POST: Brand/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(ProductBrand brand)
        {
            if (!ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            _brandRepository.Update(brand);
            _brandRepository.Save();
            return View(brand);

        }

        // GET: Brand/Delete/5
        public ActionResult Delete(int ? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var brand = _brandRepository.GetById(id.Value);
            if (brand== null)
            {
                return HttpNotFound();
            }

            return View(brand);
        }

        // POST: Brand/Delete/5
        [HttpPost]
        [ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _brandRepository.Delete(id);
            _brandRepository.Save();

            return RedirectToAction("Index");
        }

    }
}
