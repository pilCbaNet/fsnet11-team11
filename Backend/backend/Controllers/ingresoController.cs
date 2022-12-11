using cryptoAppAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Numerics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class ingresoController : ControllerBase
    {                
        [HttpPost("NuevoIngreso/{idBilletera}/{monto}")]
        public void NuevoIngreso(int idBilletera, int monto)
        {
            using (var db = new cryptoDbContext())
            {   
                  Movimiento ingreso = new Movimiento();
                  ingreso.IdBilleteras = idBilletera;
                  ingreso.Monto = monto;
                  ingreso.Fecha = DateTime.Now;
                  ingreso.Operacion = "ingreso";

                  Billetera oBilletera = db.Billeteras.FirstOrDefault(a => a.IdBilleteras == idBilletera);
                  oBilletera.Saldo += monto;

                  db.Movimientos.Add(ingreso);

                  db.SaveChanges();                
            }
        }
    }
}
