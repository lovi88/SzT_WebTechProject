using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebShop.Models
{
    public class Ordering
    {
        public Ordering()
        {
            StartDate = DateTime.Now;
            FulfillmentDate = DateTime.Now.AddDays(10);
        }

        [Key]
        public int OrderingID { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime FulfillmentDate { get; set; }

        public List<Product> OrderedProducts { get; set; }

        public int PriceSum { get; set; }


        public User Owner { get; set; }


    }
}