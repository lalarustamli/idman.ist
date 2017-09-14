using IdmanistCore.Infrastructure;
using System;
using System.Collections.Generic;
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
using System.Text;
using System.Threading.Tasks;
using IdmanistData.Model;
using System.Linq.Expressions;

namespace IdmanistCore.Repository
{
    public class WishRepository : IWishRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Wishes Get(Expression<Func<Wishes, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Wishes> GetAll()
        {
            // throw new NotImplementedException();
            return _context.Wishes.Select(x => x);
        }

        public Wishes GetById(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Wishes> GetMany(Expression<Func<Wishes, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public void Insert(Wishes obj)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void Update(Wishes obj)
        {
            throw new NotImplementedException();
        }
    }
}
