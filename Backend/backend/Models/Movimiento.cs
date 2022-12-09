using System;
using System.Collections.Generic;

namespace cryptoAppAPI.Models
{
    public partial class Movimiento
    {
        public long IdMov { get; set; }
        public DateTime Fecha { get; set; }
        public long Monto { get; set; }
        public string Operacion { get; set; } = null!;
        public long IdBilleteras { get; set; }

        public virtual Billetera IdBilleterasNavigation { get; set; } = null!;
    }
}
