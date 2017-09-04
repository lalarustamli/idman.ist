using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IdmanistNews.Controllers
{
    public class SearchController : Controller
    {
        // GET: Search
        public ActionResult Axtar(string txtAxtar)
        {
            return View();
        }
    }
}