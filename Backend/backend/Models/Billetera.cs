using System;
using System.Collections.Generic;

namespace cryptoAppAPI.Models
{
    public partial class Billetera
    {
        public Billetera()
        {
            Movimientos = new HashSet<Movimiento>();
        }

        public long Saldo { get; set; }
        public long IdBilleteras { get; set; }
        public long IdCliente { get; set; }

        public virtual Usuario IdClienteNavigation { get; set; } = null!;
        public virtual ICollection<Movimiento> Movimientos { get; set; }
    }
}
