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
    public class OrderingsController : ApiController
    {
        private IShopContext db;

        public OrderingsController()
        {
            db = new ShopContext();
        }

        // GET: api/Orderings
        public IQueryable<Ordering> GetOrderings()
        {
            return db.Orderings;
        }

        // GET: api/Orderings/5
        [ResponseType(typeof(Ordering))]
        public IHttpActionResult GetOrdering(int id)
        {
            Ordering ordering = db.Orderings.Find(id);
            if (ordering == null)
            {
                return NotFound();
            }

            return Ok(ordering);
        }

        // PUT: api/Orderings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrdering(int id, Ordering ordering)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ordering.OrderingID)
            {
                return BadRequest();
            }

            db.MarkAsModified(ordering);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderingExists(id))
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

        // POST: api/Orderings
        [ResponseType(typeof(Ordering))]
        public IHttpActionResult PostOrdering(Ordering ordering)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Orderings.Add(ordering);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ordering.OrderingID }, ordering);
        }

        // DELETE: api/Orderings/5
        [ResponseType(typeof(Ordering))]
        public IHttpActionResult DeleteOrdering(int id)
        {
            Ordering ordering = db.Orderings.Find(id);
            if (ordering == null)
            {
                return NotFound();
            }

            db.Orderings.Remove(ordering);
            db.SaveChanges();

            return Ok(ordering);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderingExists(int id)
        {
            return db.Orderings.Count(e => e.OrderingID == id) > 0;
        }
    }
}