using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebShop.Models;

namespace WebShop.DataAccessLayer
{
    public class ShopContext: DbContext, IShopContext
    {
        public DbSet<User> Users { get; set; }



        public void MarkAsModified(User usr)
        {
            Entry(usr).State = EntityState.Modified;
        }
    }
}