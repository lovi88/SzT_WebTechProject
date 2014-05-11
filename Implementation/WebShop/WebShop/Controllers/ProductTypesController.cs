using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebShop.DataAccessLayer;
using WebShop.Models;

namespace WebShop.Controllers
{
    public class ProductTypesController : ApiController
    {
        private IShopContext db;

        public ProductTypesController()
        {
            db = new ShopContext();
        }

        // GET: api/ProductTypes
        public IQueryable<ProductType> GetProductTypes()
        {
            return db.ProductTypes;
        }

        // GET: api/ProductTypes/5
        [ResponseType(typeof(ProductType))]
        public IHttpActionResult GetProductType(int id)
        {
            ProductType productType = db.ProductTypes.Find(id);
            if (productType == null)
            {
                return NotFound();
            }

            return Ok(productType);
        }

        // PUT: api/ProductTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductType(int id, ProductType productType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productType.TypeId)
            {
                return BadRequest();
            }

            db.MarkAsModified(productType);
            
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ProductTypes
        [ResponseType(typeof(ProductType))]
        public IHttpActionResult PostProductType(ProductType productType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductTypes.Add(productType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productType.TypeId }, productType);
        }

        // DELETE: api/ProductTypes/5
        [ResponseType(typeof(ProductType))]
        public IHttpActionResult DeleteProductType(int id)
        {
            ProductType productType = db.ProductTypes.Find(id);
            if (productType == null)
            {
                return NotFound();
            }

            db.ProductTypes.Remove(productType);
            db.SaveChanges();

            return Ok(productType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductTypeExists(int id)
        {
            return db.ProductTypes.Count(e => e.TypeId == id) > 0;
        }
    }
}