//using System;
//using System.Collections.Generic;

//namespace Entities;
//    public partial class Usuario
//    {
//        public Usuario()
//        {
//            Billeteras = new HashSet<Billetera>();
//        }

//        public string Apenom { get; set; } = null!;
//        public string Mail { get; set; } = null!;
//        public string Contraseña { get; set; } = null!;
//        public long Dni { get; set; }
//        public DateTime Nacimiento { get; set; }






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
}
