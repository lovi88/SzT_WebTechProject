using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebShop.Models;

namespace WebShopApiTest.Utils
{
    class TestProductTypesDbSet : TestDbSet<ProductType>
    {
        public override ProductType Find(params object[] keyValues)
        {
            return this.SingleOrDefault(prodType => prodType.TypeId == (int)keyValues.Single());
        }


    }
}
