using IdmanistCore.Infrastructure;
using IdmanistCore.Repository;
using IdmanistData.Model;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace Idmanist.Admin.Controllers
{
    public class ReklamController : Controller
    {

        private readonly IReklamRepository _reklamRepository;

        public ReklamController(IReklamRepository reklamRepository)
        {
            _reklamRepository = reklamRepository;
        }
        // GET: Category
        public ActionResult Index()
        {
            var reklamList = _reklamRepository.GetAll().ToList();
            return View(reklamList);
        }
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Reklam reklam)
        {
            if (!ModelState.IsValid)
            {
                return View(reklam);
            }
            _reklamRepository.Insert(reklam);
            _reklamRepository.Save();
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var reklam = _reklamRepository.GetById(id.Value);

            if (reklam == null)
            {
                return HttpNotFound();
            }

            return View(reklam);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Reklam reklam)
        {
            if (!ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            _reklamRepository.Update(reklam);
            _reklamRepository.Save();
            return View(reklam);

        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var reklam = _reklamRepository.GetById(id.Value);
            if (reklam == null)
            {
                return HttpNotFound();
            }

            return View(reklam);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var reklam = _reklamRepository.GetById(id.Value);
            if (reklam == null)
            {
                return HttpNotFound();
            }

            return View(reklam);
        }

        [HttpPost]
        [ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _reklamRepository.Delete(id);
            _reklamRepository.Save();

            return RedirectToAction("Index");
        }


    }
}