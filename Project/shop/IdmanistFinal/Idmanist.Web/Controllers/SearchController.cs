using IdmanistData.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PagedList;

namespace Idmanist.Web.Controllers
{
    public class SearchController : Controller
    {
        // GET: Search
        // GET: Search
        IdmanistDataContext db = new IdmanistDataContext();
        [HttpGet]
        public ActionResult Index(int? id, string searchString)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            int pageNumber = id ?? 1;
            ViewBag.searchStr = searchString;

            if (!String.IsNullOrEmpty(searchString))
            {
                int count = db.Product.Where(b => b.ProductName.Contains(searchString)).Count();
                ViewBag.ResultCount = count;
                if (count != 0)
                {
                    ViewBag.Searching = db.Product.Where(b => b.ProductName.Contains(searchString)).OrderBy(o => o.ProductId).ToPagedList(pageNumber, 12);

                }
                else
                {
                    ViewBag.NoResult = "Belə bir nəticə tapılmadı";
                    id = 1;
                }

            }
            else
            {
                ViewBag.EmptyString = "Axtarış daxil edilmədi";
                id = 1;
            }
            return View();
        }

        [HttpPost]
        public JsonResult LiveSearch(string searchString)
        {
            var blogTitles = db.Product.Where(b => b.ProductName.Contains(searchString)).Select(b => new { ProductID = b.ProductId, ProductNAME = b.ProductName.Substring(0, 20) }).ToList();
            return Json(blogTitles, JsonRequestBehavior.AllowGet);
        }
    }
}