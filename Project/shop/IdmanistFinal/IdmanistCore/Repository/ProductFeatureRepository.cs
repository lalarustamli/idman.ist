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
    public class ProductFeatureRepository : IProductFeatureRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.ProductFeature.Count();
        }

        public void Delete(int id)
        {
            var productFeature = GetById(id);
            if (productFeature!=null)
            {
                _context.ProductFeature.Remove(productFeature);
            }
        }

        public ProductFeature Get(Expression<Func<ProductFeature, bool>> expression)
        {
            return _context.ProductFeature.FirstOrDefault(expression);
        }

        public IEnumerable<ProductFeature> GetAll()
        {
            return _context.ProductFeature.Select(x => x);
        }

        public ProductFeature GetById(int id)
        {
            return _context.ProductFeature.FirstOrDefault(x => x.ProdcutFeatureId == id);
        }

        public IQueryable<ProductFeature> GetMany(Expression<Func<ProductFeature, bool>> expression)
        {
            return _context.ProductFeature.Where(expression);
        }

        public void Insert(ProductFeature obj)
        {
            _context.ProductFeature.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(ProductFeature obj)
        {
            _context.ProductFeature.AddOrUpdate(obj);
        }
    }
}
