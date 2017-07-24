using Autofac;
using Autofac.Integration.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IdmanistCore.Repository;
using IdmanistCore.Infrastructure;
using System.Web.Mvc;

namespace Idmanist.Admin
{
    public static class Bootstrapper
    {
        public static void RunConfig()
        {
            BuildAutofac();
        }

        private static void BuildAutofac()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterType<CategoryRepository>().As<ICategoryRepository>();
            builder.RegisterType<ProductRepository>().As<IProductRepository>();
            builder.RegisterType<ProductFeatureRepository>().As<IProductFeatureRepository>();
            builder.RegisterType<ProductImageRepository>().As<IProductImageRepository>();

            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container)); 
        }
    }
}