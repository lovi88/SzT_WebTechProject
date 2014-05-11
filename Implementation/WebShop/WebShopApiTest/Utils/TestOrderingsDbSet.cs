using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebShop.Models;

namespace WebShopApiTest.Utils
{
    class TestOrderingsDbSet : TestDbSet<Ordering>
    {
        public override Ordering Find(params object[] keyValues)
        {
            return this.SingleOrDefault(ordering => ordering.OrderingID == (int)keyValues.Single());
        }

    }
}
