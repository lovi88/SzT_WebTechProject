using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebShop.Models
{
    public class Address
    {
        public int AId { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string Zip_code { get; set; }

        public string Road_num { get; set; }

        public User User { get; set; }


    }
}
