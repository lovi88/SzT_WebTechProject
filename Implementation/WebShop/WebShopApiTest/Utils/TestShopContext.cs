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
        }

        public DbSet<WebShop.Models.User> Users { get; set; }

        public int SaveChanges()
        {
            return 0;
        }

        public void MarkAsModified(WebShop.Models.User usr) { }

        public void Dispose() { }
    }
}
