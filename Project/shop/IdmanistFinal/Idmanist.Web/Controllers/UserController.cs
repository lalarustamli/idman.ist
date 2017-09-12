using IdmanistData.DataContext;
using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace Idmanist.Web.Controllers
{
    public class UserController : Controller
    {
        // GET: User

        public ActionResult Index(int? id)
        {

            if (Session["user"] != null)
            {
                return View();

            }
            else
            {
                return RedirectToAction("login");
            }
        }
        public ActionResult Register()
        {
            return View();
        }


        [HttpPost]
        public JsonResult Register(Customer user)
        {
            using (IdmanistDataContext db = new IdmanistDataContext())
            {
                if (user.UserName != null && user.Password == user.ConfirmPassword && user.Email != null)
                {
                    Customer usr = db.Customer.FirstOrDefault(u => u.Email == user.Email);
                    if (usr == null)
                    {
                        user.Password = Crypto.Hash(user.Password, "MD5");
                        user.ConfirmPassword = Crypto.Hash(user.ConfirmPassword, "MD5");
                        db.Customer.Add(user);

                        db.SaveChanges();


                        Session["user"] = true;
                        Session["user"] = new Customer()
                        {
                            UserName = user.UserName,
                            Password = user.Password,
                            Email = user.Email,
                            UserID = user.UserID
                        };
                        var response = true;
                        return Json(response, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        var response = false;
                        return Json(response, JsonRequestBehavior.AllowGet);

                    }

                }
                else
                {
                    var response = false;
                    return Json(response, JsonRequestBehavior.AllowGet);
                }
            }


        }




        public ActionResult Login()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Login(Customer usr)
        {


            using (IdmanistDataContext db = new IdmanistDataContext())
            {

                if (usr.Email != null && usr.Password != null)
                {
                    var pass = Crypto.Hash(usr.Password, "MD5");

                    Customer user = db.Customer.FirstOrDefault(a => a.Email == usr.Email && a.Password == pass);
                    if (user != null)
                    {
                        Session["user"] = true;
                        Session["user"] = new Customer()
                        {
                            UserName = user.UserName,
                            Password = user.Password,
                            Email = user.Email,
                            UserID = user.UserID
                        };
                        return RedirectToAction("index", "user");
                    }
                    else
                    {
                        //@Regex.Replace(Model.FullDescription ?? "", "<[^>]*>", "")
                        Session["error_input"] = "Username ve ya password yalnisdir";
                        return RedirectToAction("login");
                    }
                }
                else
                {
                    Session["error_message"] = "Bosluq buraxma";
                    return RedirectToAction("login");
                }
            }


        }


        [HttpPost]
        public JsonResult checkEmail(string email)
        {
            using (IdmanistDataContext db = new IdmanistDataContext())
            {
                if (email.Length > 0)
                {
                    Customer user = db.Customer.FirstOrDefault(usr => usr.Email == email);
                    if (user != null)
                    {
                        var response = new
                        {
                            valid = false,
                            message = "This email already exists!"
                        };
                        return Json(response, JsonRequestBehavior.AllowGet);

                    }
                    else
                    {
                        var response = new
                        {
                            valid = true,
                        };
                        return Json(response, JsonRequestBehavior.AllowGet);

                    }

                }
                else
                {
                    var response = new
                    {
                        valid = false,
                        message = "Email is required"
                    };
                    return Json(response, JsonRequestBehavior.AllowGet);
                }
            }

        }

        [HttpPost]
        public JsonResult checkPassword(string password, string password1)
        {
            if (password == password1)
            {

                var response = new
                {
                    valid = true,
                    message = "matched"
                };
                return Json(response, JsonRequestBehavior.AllowGet);

            }
            else
            {
                var response = new
                {
                    valid = false,
                    message = "not macthed"
                };
                return Json(response, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        // [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "UserID,UserName,Email")] Customer userrr)
        {
            if (ModelState.IsValid)
            {
                using (IdmanistDataContext db = new IdmanistDataContext())
                {
                    Customer userInDb = db.Customer.Find(userrr.UserID);

                    userInDb.Email = userrr.Email;
                    userInDb.UserName = userrr.UserName;
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }

            }
            return View(userrr);
        }

        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("index", "user");
        }


    }
}