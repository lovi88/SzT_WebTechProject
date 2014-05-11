using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebShop.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public string Description { get; set; }

        public string Caption { get; set; }

        public string Creator { get; set; }

        public string Price { get; set; }

        public string DiscountPrice { get; set; }

        public float Rating { get; set; }

        public string UrlPath { get; set; }

        public string SmallImg { get; set; }

        public string LargeImg { get; set; }

        public List<string> Features { get; set; }

        public int ProductTypeID { get; set; }
        public ProductType ProductType { get; set; }

        

    }
}