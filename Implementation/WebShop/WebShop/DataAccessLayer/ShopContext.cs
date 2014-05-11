using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Web;
using WebShop.Models;

namespace WebShop.DataAccessLayer
{
    public class ShopContext: DbContext, IShopContext
    {
        public ShopContext()
        {
            //InitDebugEnvironment();
            

        }


        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Ordering> Orderings { get; set; }

        public void MarkAsModified(object modified)
        {
            Entry(modified).State = EntityState.Modified;
        }

        [Conditional("DEBUG")]
        private void InitDebugEnvironment() {
            DeleteDbIfInDevelopment();
        }

        //teszt Törlöm a db-t, hogy ne keljen szívni a migrációkkal
        [Conditional("DEBUG")]
        private void DeleteDbIfInDevelopment() {
            this.Database.Delete();
        }

    }
}