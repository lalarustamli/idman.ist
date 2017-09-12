using IdmanistCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdmanistData.Model;
using System.Linq.Expressions;
using IdmanistData.DataContext;
using System.Data.Entity.Migrations;

namespace IdmanistCore.Repository
{
    public class SliderRepository : ISliderRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.MainSlider.Count();
        }

        public void Delete(int id)
        {
            var slider = GetById(id);
            if (slider != null)
            {
                _context.MainSlider.Remove(slider);
            }
        }

        public MainSlider Get(Expression<Func<MainSlider, bool>> expression)
        {
            return _context.MainSlider.FirstOrDefault(expression);
        }

        public IEnumerable<MainSlider> GetAll()
        {
            return _context.MainSlider.Select(x => x);
        }

        public MainSlider GetById(int id)
        {
            return _context.MainSlider.FirstOrDefault(x => x.slideId == id);
        }

        public IQueryable<MainSlider> GetMany(Expression<Func<MainSlider, bool>> expression)
        {
            return _context.MainSlider.Where(expression);
        }

        public void Insert(MainSlider obj)
        {
            _context.MainSlider.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(MainSlider obj)
        {
            _context.MainSlider.AddOrUpdate(obj);
        }
    }
}
