using Entities;

namespace Negocio
{
    public class Movimiento
    {
        public List<Movimiento> VerMovimientos(int idBilletera)
        {
            using (var db = new cryptoDbContext())
            {
                var ListaMovimientos = db.Movimientos.Where(a => a.IdBilleteras == idBilletera).ToList();
                List<Movimiento> result = new List<Movimiento>();

                foreach (Movimiento movimiento in ListaMovimientos)
                {
                    result.Add(movimiento);
                }
                return result;
            }
        }
    }
}