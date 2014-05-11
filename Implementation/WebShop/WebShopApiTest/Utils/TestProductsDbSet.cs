using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebShop.Models;

namespace WebShopApiTest.Utils
{
    class TestProductsDbSet: TestDbSet<Product>
    {
        public override Product Find(params object[] keyValues)
        {
            return this.SingleOrDefault(prod => prod.ProductID == (int)keyValues.Single());
        }

    }
}
