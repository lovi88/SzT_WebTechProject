using System.Web;
using System.Web.Optimization;

namespace WebShop
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
            //            "~/Scripts/jquery-ui-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.unobtrusive*",
            //            "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/WebShopHelpers").Include(
              "~/App/core/multilingual/dictionary.js",
              "~/App/core/data/data.js",
              "~/App/core/utils/data_validation_helpers.js",
              "~/App/core/utils/toast_help.js"
              ));


            bundles.Add(new StyleBundle("~/Content/WebShopStyles").Include(
                        "~/Content/ie10mobile.css",
                        "~/Content/SiteLocal/ProcessStatus.css",
                        "~/Content/SiteLocal/SiteMain.css",
                        "~/Content/durandal.css",
                        "~/Content/starterkit.css"
                        ));


            //bundles.Add(new ScriptBundle("~/bundles/WebShopLibs").Include(
            //    "~/Scripts/amplify_1_1_2/amplify.min.js",
            //    "~/Scripts/bootstrap.min.js",
            //    "~/Scripts/knockout-2.3.0.js",
            //    "~/Scripts/toastr.min.js"
            //    ));


            //bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            //bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
            //            "~/Content/themes/base/jquery.ui.core.css",
            //            "~/Content/themes/base/jquery.ui.resizable.css",
            //            "~/Content/themes/base/jquery.ui.selectable.css",
            //            "~/Content/themes/base/jquery.ui.accordion.css",
            //            "~/Content/themes/base/jquery.ui.autocomplete.css",
            //            "~/Content/themes/base/jquery.ui.button.css",
            //            "~/Content/themes/base/jquery.ui.dialog.css",
            //            "~/Content/themes/base/jquery.ui.slider.css",
            //            "~/Content/themes/base/jquery.ui.tabs.css",
            //            "~/Content/themes/base/jquery.ui.datepicker.css",
            //            "~/Content/themes/base/jquery.ui.progressbar.css",
            //            "~/Content/themes/base/jquery.ui.theme.css"));


        }
    }
}