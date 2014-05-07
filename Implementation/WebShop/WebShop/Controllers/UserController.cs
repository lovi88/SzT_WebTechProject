using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebShop.Models;
using WebShop.DataAccessLayer;

namespace WebShop.Controllers
{
    public class UserController : ApiController
    {
        private IShopContext db;

        public UserController() {
            db = new ShopContext();
        }

        public UserController(IShopContext context)
        {
            db = context;
        }

        // GET api/User/Name/PassHash
        public User GetUserByNameAndPass(string Name, string PasswordHash)
        {
            User user = db.Users.
                Where(x => x.Name == Name && x.PasswordHash == PasswordHash).FirstOrDefault();
            
            if (user == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return user;
        }

        // PUT api/User/5
        public HttpResponseMessage PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != user.ID)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.MarkAsModified(user);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/User
        public HttpResponseMessage PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            var u = db.Users.Where(x => x.Email == user.Email).FirstOrDefault();

            if (u != null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "The given Email is in our system");
            }

            db.Users.Add(user);
            db.SaveChanges();

            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, user);
            response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = user.ID }));
            return response;


            CreatedAtRoute
        }

        // DELETE api/User/5
        public HttpResponseMessage DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Users.Remove(user);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, user);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}