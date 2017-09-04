using IdmanistData.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new IdmanistDataContext();
            var categoryList = context.Category.ToList();

        }
    }
    


}
