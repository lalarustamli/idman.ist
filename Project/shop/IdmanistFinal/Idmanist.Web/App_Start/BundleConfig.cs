using System.Web;
using System.Web.Optimization;

namespace Idmanist.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/Content/js").Include(
                      "~/Content/js/jquery.js",
                      "~/Content/js/bootstrap.js",
                      "~/Content/js/parallax.js",
                      "~/Content/js/common.js",
                      "~/Content/js/revslider.js",
                      "~/Content/js/owl.carousel.min.js"
                      

                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/css/animate.css",
                      "~/Content/css/bootstrap.min.css",
                      "~/Content/css/style.css",
                      "~/Content/css/revslider.css",
                      "~/Content/css/owl.carousel.css",
                      "~/Content/css/owl.theme.css",
                      "~/Content/css/font-awesome.css"




                      ));
        }
    }
}
