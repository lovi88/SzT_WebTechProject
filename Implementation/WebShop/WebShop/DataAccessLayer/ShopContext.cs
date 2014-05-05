using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebShop.Models;

namespace WebShop.DataAccessLayer
{
    public class ShopContext: DbContext
    {

        public DbSet<Class1> MyProperty { get; set; }

    }
}