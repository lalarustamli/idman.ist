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
    public class CategoryRepository : ICategoryRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.Category.Count();
        }

        public void Delete(int id)
        {
            var category = GetById(id);
            if (category!=null)
            {
                _context.Category.Remove(category);
            }
        }

        public Category Get(Expression<Func<Category, bool>> expression)
        {
            return _context.Category.FirstOrDefault(expression);
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Category.Select(x => x);
        }

        public Category GetById(int id)
        {
            return _context.Category.FirstOrDefault(x => x.CategoryId == id);
        }

        public IQueryable<Category> GetMany(Expression<Func<Category, bool>> expression)
        {
            return _context.Category.Where(expression);
        }

        public void Insert(Category obj)
        {
            _context.Category.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Category obj)
        {
            _context.Category.AddOrUpdate(obj);
        }
    }
}
