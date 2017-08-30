using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IdmanistNews.Controllers
{
    public class HomeController : Controller
    {
        Idmanist_XeberEntities db = new Idmanist_XeberEntities();
        
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
            var videolar = db.News.Where(x => x.typeId == 2 && x.video_Route!= null).OrderByDescending(x => x.publish_date).Take(8);
            return View(videolar);
        }

        public ActionResult Tab_FikirGetir()
        {
            var fikirler = db.Opinions.OrderByDescending(x => x.opinion_date).Take(2);
            return View(fikirler);
        }
        public ActionResult Tab_AnketGetir()
        {
            //if (Session["anketvoted"] != null)
            //{

            //}
            //else
            //{
                HttpCookie anktckie = Request.Cookies["anketler"];
                if (anktckie == null)
                {
                    anktckie = new HttpCookie("anketler");
                }
                string anketcookie = anktckie.Value;
                if (anketcookie == null)
                {
                    anketcookie = "0";
                }
                int[] voted = anketcookie.Split(',').Select(x => Convert.ToInt32(x)).ToArray();
                var anketler = db.Ankets.ToList();
                //anketler = anketler.Where(x => x.isActive == true && x.lastVoteDate <= DateTime.Now && !voted.Contains(x.id)).ToList();
                if (anketler.Any())
                {
                    Random rnd = new Random();
                    return View(anketler[rnd.Next(0, anketler.Count)]);
                }
                return View("BosAnket");
            //}
        }
        public ActionResult Vote(int id)
        {
            int choiceId = Convert.ToInt32(Request.Form["choice"]);
            Anket anket = db.Ankets.FirstOrDefault(x=>x.id==id);
            AnketSecimler anketsecim = db.AnketSecimlers.FirstOrDefault(x => x.id == id);
            anket.votedNum++;
            anketsecim.vote_count++;
            db.SaveChanges();
            HttpCookie anketcookie = Request.Cookies["anketler"];
            if (anketcookie!=null)
            {
                anketcookie.Value += "," + id;

            }
            else
            {
                anketcookie = new HttpCookie("anketler");
                anketcookie.Value = "0";
            }

            anketcookie.Expires = anket.lastVoteDate.AddDays(1);
            HttpContext.Response.Cookies.Add(anketcookie);
            Session["votedanket"] = id;
            return View("Index");  
        }

    }
}