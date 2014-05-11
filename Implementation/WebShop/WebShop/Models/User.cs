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
        public User()
        {
            BirthDate = DateTime.Now;
        }


        [Key]
        public int UId { get; set; }

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

        public string DeliveryZipCode { get; set; }

        public string DeliveryRoadNum { get; set; }

        public string BillingCountry { get; set; }

        public string BillingCity { get; set; }

        public string BillingZipCode { get; set; }

        public string BillingRoadNum { get; set; }

        #endregion

        public string DeliveryMethod { get; set; }

        public string SelectedStore { get; set; }

        public string DeliveryPrice { get; set; }

    }
}