using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebShop.DataAccessLayer;

namespace WebShopApiTest.Utils
{
    class TestShopContext : IShopContext
    {

        public TestShopContext()
        {
            this.Users = new TestUsersDbSet();
            this.Products = new TestProductsDbSet();
            this.ProductTypes = new TestProductTypesDbSet();
            this.Orderings = new TestOrderingsDbSet();
        }

        public DbSet<WebShop.Models.User> Users { get; set; }
        public DbSet<WebShop.Models.Product> Products { get; set; }
        public DbSet<WebShop.Models.ProductType> ProductTypes { get; set; }
        public DbSet<WebShop.Models.Ordering> Orderings { get; set; }

        public int SaveChanges()
        {
            return 0;
        }

        public void MarkAsModified(object modified) { }

        public void Dispose() { }

    }
}
