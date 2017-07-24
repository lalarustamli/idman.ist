using IdmanistCore.Infrastructure;
using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;
using IdmanistData.DataContext;
using System.Data.Entity.Migrations;

namespace IdmanistCore.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.Product.Count();
        }

        public void Delete(int id)
        {
            var product = GetById(id);
            if (product!=null)
            {
                _context.Product.Remove(product);
            }
        }

        public Product Get(Expression<Func<Product, bool>> expression)
        {
            return _context.Product.FirstOrDefault(expression);
        }

        public IEnumerable<Product> GetAll()
        {
            return _context.Product.Select(x => x);
        }

        public Product GetById(int id)
        {
            return _context.Product.FirstOrDefault(x => x.ProductId == id);
        }

        public IQueryable<Product> GetMany(Expression<Func<Product, bool>> expression)
        {
            return _context.Product.Where(expression);
        }

        public void Insert(Product obj)
        {
            _context.Product.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Product obj)
        {
            _context.Product.AddOrUpdate(obj);
        }
    }
}
