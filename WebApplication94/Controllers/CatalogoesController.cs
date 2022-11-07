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
using WebApplication94.Models;
using System.Web.Http.Cors;

namespace WebApplication94.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class CatalogoController : ApiController
    {
        private Model db = new Model();


        // Metodo GET: api/Catalogo y se ordena por nombre alfabeticamente
        public IQueryable<Catalogo> Getcatalogo()
        {
            IEnumerable<Catalogo> query = db.catalogo.OrderBy(Local => Local.Nombre);
            return (IQueryable<Catalogo>)query;
        }

        // Metodo GET: api/Catalogo/5 - Se realiza el request por id o por nombre o por categoria
        [ResponseType(typeof(Catalogo))]
        public IHttpActionResult GetCatalogo(int? id, string nombre, string categoria)
        {
            Catalogo catalogo = db.catalogo.Find(id);

            if(!string.IsNullOrEmpty(nombre) && nombre != "{nombre}")
            {
                var lectura = db.catalogo.Where(p => p.Nombre == nombre);
                return Ok(lectura);
            }
            else if(!string.IsNullOrEmpty(categoria) && categoria != "{categoria}")
            {
                var lectura = db.catalogo.Where(p => p.Categoria == categoria);
                return Ok(lectura);

            }
            
            if (catalogo == null)
            {
                return NotFound();
            }

            return Ok(catalogo);
        }

        // PUT: api/Catalogo/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCatalogo(int id, Catalogo catalogo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != catalogo.Id)
            {
                return BadRequest();
            }

            db.Entry(catalogo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatalogoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.OK);
        }

        // POST: api/Catalogo
        [ResponseType(typeof(Catalogo))]
        public IHttpActionResult PostCatalogo(Catalogo catalogo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.catalogo.Add(catalogo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = catalogo.Id }, catalogo);
        }

        // DELETE: api/Catalogo/5
        [ResponseType(typeof(Catalogo))]
        public IHttpActionResult DeleteCatalogo(int id)
        {
            Catalogo catalogo = db.catalogo.Find(id);
            if (catalogo == null)
            {
                return NotFound();
            }

            db.catalogo.Remove(catalogo);
            db.SaveChanges();

            return Ok(catalogo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CatalogoExists(int id)
        {
            return db.catalogo.Count(e => e.Id == id) > 0;
        }

    }
}