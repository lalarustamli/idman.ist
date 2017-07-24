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
    public class ProductImageRepository : IProductImageRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.ProductImage.Count();
        }

        public void Delete(int id)
        {
            var productImage = GetById(id);
            if (productImage!=null)
            {
                _context.ProductImage.Remove(productImage);
            }
        }

        public ProductImage Get(Expression<Func<ProductImage, bool>> expression)
        {
            return _context.ProductImage.FirstOrDefault(expression);
        }

        public IEnumerable<ProductImage> GetAll()
        {
            return _context.ProductImage.Select(x => x);
        }

        public ProductImage GetById(int id)
        {
            return _context.ProductImage.FirstOrDefault(x => x.ImageId == id);
        }

        public IQueryable<ProductImage> GetMany(Expression<Func<ProductImage, bool>> expression)
        {
            return _context.ProductImage.Where(expression);
        }

        public void Insert(ProductImage obj)
        {
            _context.ProductImage.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(ProductImage obj)
        {
            _context.ProductImage.AddOrUpdate(obj);
        }
    }
}
