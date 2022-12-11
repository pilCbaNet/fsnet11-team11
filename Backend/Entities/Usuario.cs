using System;
using System.Collections.Generic;

namespace Entities
{
    public partial class Usuario
    {
        public Usuario()
        {
            Billeteras = new HashSet<Billetera>();
        }

        public string Apenom { get; set; } = null!;
        public string Mail { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public long Dni { get; set; }
        public DateTime Nacimiento { get; set; }
        public long IdCliente { get; set; }

        public virtual ICollection<Billetera> Billeteras { get; set; }
    }

    public class GetUsuarioDto 
    {
        public string? Mail { get; set; }
        public string? Contraseña { get; set; }
    }

    public class PostUsuarioDto
    {
        public string Mail { get; set; }
        public string Contraseña { get; set; }
        public string Apenom { get; set; }
        public DateTime Fecha { get; set; }
        public long Document { get; set; }
    }
}
