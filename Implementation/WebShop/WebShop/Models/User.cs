using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace WebShop.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        public bool IsAdmin { get; set; }

        [Required(ErrorMessage = "Name Is Required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Password Is Required")]
        public string PasswordHash { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "E-Mail Is Required")]
        public string Email { get; set; }


        public DateTime BirthDate { get; set; }

        #region Address

        public string DeliveryCountry { get; set; }

        public string DeliveryCity { get; set; }

        public string DeliveryZip_code { get; set; }

        public string DeliveryRoad_num { get; set; }

        public string BillingCountry { get; set; }

        public string BillingCity { get; set; }

        public string BillingZip_code { get; set; }

        public string BillingRoad_num { get; set; }

        #endregion

        public string Delivery_method { get; set; }

        public string SelectedStore { get; set; }

        public string Delivery_price { get; set; }

    }
}