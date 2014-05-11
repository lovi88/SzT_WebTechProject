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
    public class UsersController : ApiController
    {
        private IShopContext db;

        public UsersController()
        {
            db = new ShopContext();
        }

        //// GET: api/Users
        //public IQueryable<User> GetUsers()
        //{
        //    return db.Users;
        //}

        //// GET: api/Users/5
        //[ResponseType(typeof(User))]
        //public IHttpActionResult GetUser(int id)
        //{
        //    User user = db.Users.Find(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}


        // GET api/User/Name/PassHash
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUserByNameAndPass(string Name, string PasswordHash)
        {
            User user = db.Users.
                Where(x => x.Name == Name && x.PasswordHash == PasswordHash).FirstOrDefault();

            if (user == null)
            {
                return NotFound();
                //throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Ok(user);
            //return user;
        }


        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.UId)
            {
                return BadRequest();
            }

            db.MarkAsModified(user);
            
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var u = db.Users.Where(x => x.Email == user.Email).FirstOrDefault();
            if (u != null)
            {
                return BadRequest("The given email address is already used by another customer");
            }

            db.Users.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.UId }, user);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.UId == id) > 0;
        }
    }
}