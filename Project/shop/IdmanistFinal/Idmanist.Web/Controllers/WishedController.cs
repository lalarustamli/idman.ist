using IdmanistData.DataContext;
using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace Idmanist.Web.Controllers
{
    public class WishedController : Controller
    {
        // GET: Wished
        public ActionResult Index()
        {
            using (IdmanistDataContext db = new IdmanistDataContext())
            {
                if (Session["user"] != null)
                {
                    Customer  thisUser = (Customer)(Session["user"]);
                
                    var  mywishes = db.Wishes.Include(w => w.Product).Where(x => x.customer_id == thisUser.UserID).ToList();
                    return View(mywishes);

                }
                else
                {
                    return RedirectToAction("login", "user");
                }
            }
        
        }
    }
}