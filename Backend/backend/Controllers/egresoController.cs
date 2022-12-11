using cryptoAppAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class egresoController : ControllerBase
    {
        [HttpPost("Egreso/{idBilletera}/{monto}")]
        public void NuevoIngreso(int idBilletera, int monto)
        {
            using (var db = new cryptoDbContext())
            {
                Movimiento egreso = new Movimiento();
                egreso.IdBilleteras = idBilletera;
                egreso.Monto = monto;
                egreso.Fecha = DateTime.Now;
                egreso.Operacion = "egreso";

                Billetera oBilletera = db.Billeteras.FirstOrDefault(a => a.IdBilleteras == idBilletera);
                oBilletera.Saldo -= monto;

                db.Movimientos.Add(egreso);

                db.SaveChanges();

            }
        }
    }
}
