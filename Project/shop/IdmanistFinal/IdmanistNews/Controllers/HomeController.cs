using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IdmanistNews.Controllers
{
    public class HomeController : Controller
    {
        Idmanist_XeberEntities1 db = new Idmanist_XeberEntities1();
        
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SliderGetir()
        {
            var news = db.News.Where(x => x.NewsType.name == "Manset").OrderByDescending(x => x.publish_date).Take(10);
            return View(news);
        }
        public ActionResult EnSonXeberler()
        {
            var news = db.News.OrderByDescending(x => x.publish_date).Take(7);
            return View(news);
        }
        public ActionResult UstTab()
        {
            return View();
        }

        public ActionResult Tab_VideoGetir()
        {
            var videolar = db.News.OrderByDescending(x => x.publish_date).Take(8);
            videolar = videolar.Where(x => x.typeId == 2 && x.VideoRoute != null);
            return View(videolar);
        }
    }
}