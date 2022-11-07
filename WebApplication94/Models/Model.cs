using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace WebApplication94.Models
{
    public partial class Model : DbContext
    {
        public Model()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Catalogo> catalogo { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Catalogo>()
                .Property(e => e.Nombre)
                .IsFixedLength();

            modelBuilder.Entity<Catalogo>()
                .Property(e => e.Descripcion)
                .IsFixedLength();

            modelBuilder.Entity<Catalogo>()
                .Property(e => e.Categoria)
                .IsFixedLength();
        }
    }
}
