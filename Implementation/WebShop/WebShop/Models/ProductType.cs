using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebShop.Models
{
    public class ProductType
    {
        [Key]
        public int TypeId { get; set; }
        public string TypeName { get; set; }
        public long ProductCount { get; set; }


        public virtual ProductType ParenType { get; set; }
        [InverseProperty("ParenType")]
        public virtual ICollection<ProductType> SubTypes { get; set; }


    }
}