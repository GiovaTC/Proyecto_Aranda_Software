namespace WebApplication94.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Catalogo")]
    public partial class Catalogo
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string Descripcion { get; set; }

        [Required]
        [StringLength(10)]
        public string Categoria { get; set; }

        public byte[] ImagenProducto { get; set; }
    }
}
