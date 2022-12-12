using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _0_DTO
{
    
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
