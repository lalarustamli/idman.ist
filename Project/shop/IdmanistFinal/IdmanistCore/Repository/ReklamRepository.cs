using IdmanistCore.Infrastructure;
using IdmanistData.DataContext;
using IdmanistData.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistCore.Repository
{
    public class ReklamRepository :IReklamRepository
    {
        private readonly IdmanistDataContext _context = new IdmanistDataContext();
        public int Count()
        {
            return _context.Reklam.Count();
        }

        public void Delete(int id)
        {
            var reklam = GetById(id);
            if (reklam != null)
            {
                _context.Reklam.Remove(reklam);
            }
        }

        public Reklam Get(Expression<Func<Reklam, bool>> expression)
        {
            return _context.Reklam.FirstOrDefault(expression);
        }

        public IEnumerable<Reklam> GetAll()
        {
            return _context.Reklam.Select(x => x);
        }

        public Reklam GetById(int id)
        {
            return _context.Reklam.FirstOrDefault(x => x.reklamId == id);
        }

        public IQueryable<Reklam> GetMany(Expression<Func<Reklam, bool>> expression)
        {
            return _context.Reklam.Where(expression);
        }

        public void Insert(Reklam obj)
        {
            _context.Reklam.Add(obj);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Update(Reklam obj)
        {
            _context.Reklam.AddOrUpdate(obj);
        }
    }
}
