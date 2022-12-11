using cryptoAppAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class movimientosController : ControllerBase
    {
        // GET: api/<ingresoController>          
        [HttpGet("VerMovimientos/{idBilletera}")]
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
