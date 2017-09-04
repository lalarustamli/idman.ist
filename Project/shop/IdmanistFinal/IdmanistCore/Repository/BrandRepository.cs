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
    public class BrandRepository : IBrandRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.ProductBrand.Count();
        }

        public void Delete(int id)
        {
            var brand = GetById(id);
            if (brand != null)
            {
                _context.ProductBrand.Remove(brand);
            }
        }

        public ProductBrand Get(Expression<Func<ProductBrand, bool>> expression)
        {
            return _context.ProductBrand.FirstOrDefault(expression);
        }

        public IEnumerable<ProductBrand> GetAll()
        {
            return _context.ProductBrand.Select(x => x);
        }

        public ProductBrand GetById(int id)
        {
            return _context.ProductBrand.FirstOrDefault(x => x.ProductBrandId == id);
        }

        public IQueryable<ProductBrand> GetMany(Expression<Func<ProductBrand, bool>> expression)
        {
            return _context.ProductBrand.Where(expression);
        }

            public void Insert(ProductBrand obj)
        {
            _context.ProductBrand.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(ProductBrand obj)
        {
            _context.ProductBrand.AddOrUpdate(obj);
        }
    }
}
