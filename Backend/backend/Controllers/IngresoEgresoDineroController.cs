using Microsoft.AspNetCore.Mvc;
using Entities;
using Microsoft.EntityFrameworkCore;
using Negocio;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IngresoEgresoDinero.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngresoEgresoDineroController : ControllerBase
    {




        // REGISTRO DE INGRESO EN TABLA MOVIMIENTOS
        [HttpPost]
        [Route("AgregarIngreso")]

        public void Post([FromBody] IngresoMovimientoDto iMovimiento)
        {
            using var db = new cryptoDbContext();
            {
                try
                {
                    Movimiento oMovimiento = new Movimiento();

                    oMovimiento.IdMov = (long)iMovimiento.IdMov;
                    oMovimiento.Fecha = (DateTime)iMovimiento.Fecha;
                    oMovimiento.Monto = (long)iMovimiento.Monto;
                    oMovimiento.Operacion = (string)iMovimiento.Operacion;
                    oMovimiento.IdBilleteras = (long)iMovimiento.IdBilleteras;




                    db.Movimientos.Add(oMovimiento);
                    db.SaveChanges();

                }

                catch (Exception ex)
                {
                    throw;
                }
            }
        }






        // REGISTRO DE EGRESO EN LA TABLA MOVIMIENTOS

        [HttpPost]
        [Route("AgregarEgreso")]

        public void Post([FromBody] EgresoMovimientoDto iMovimiento)
        {
            using var db = new cryptoDbContext();
            {
                try
                {
                    Movimiento oMovimiento = new Movimiento();

                    oMovimiento.IdMov = (long)iMovimiento.IdMov;
                    oMovimiento.Fecha = (DateTime)iMovimiento.Fecha;
                    oMovimiento.Monto = (long)iMovimiento.Monto;
                    oMovimiento.Operacion = (string)iMovimiento.Operacion;
                    oMovimiento.IdBilleteras = (long)iMovimiento.IdBilleteras;




                    db.Movimientos.Add(oMovimiento);
                    db.SaveChanges();

                }

                catch (Exception ex)
                {
                    throw;
                }
            }
        }



    }
}
