using IdmanistCore.Infrastructure;
using IdmanistCore.Repository;
using IdmanistData.Model;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace Idmanist.Admin.Controllers
{
    public class SliderController : Controller
    {

        private readonly ISliderRepository _sliderRepository;

        public SliderController(ISliderRepository sliderRepository)
        {
            _sliderRepository = sliderRepository;
        }
        // GET: Category
        public ActionResult Index()
        {
            var sliderList = _sliderRepository.GetAll().ToList();
            return View(sliderList);
        }
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(MainSlider slider)
        {
            if (!ModelState.IsValid)
            {
                return View(slider);
            }
            _sliderRepository.Insert(slider);
            _sliderRepository.Save();
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var slider = _sliderRepository.GetById(id.Value);

            if (slider == null)
            {
                return HttpNotFound();
            }

            return View(slider);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(MainSlider slider
            )
        {
            if (!ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            _sliderRepository.Update(slider);
            _sliderRepository.Save();
            return View(slider);

        }

        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var slider = _sliderRepository.GetById(id.Value);
            if (slider == null)
            {
                return HttpNotFound();
            }

            return View(slider);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var slider = _sliderRepository.GetById(id.Value);
            if (slider == null)
            {
                return HttpNotFound();
            }

            return View(slider);
        }

        [HttpPost]
        [ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _sliderRepository.Delete(id);
            _sliderRepository.Save();

            return RedirectToAction("Index");
        }


    }
}