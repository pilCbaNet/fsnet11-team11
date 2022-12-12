using _0_DTO;
using Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class billeteraController : ControllerBase
    {
        // GET api/<billeteraController>/5
        [HttpGet("{id:int}")]
        public long? Get(int id)
        {
            using (var db = new cryptoDbContext()) 
            {
                long? saldo = db.Billeteras.Where(a => a.IdBilleteras == id).FirstOrDefault()?.Saldo;
                return saldo;
            }
        }
                
        // PUT api/<billeteraController>
        [HttpPut("{idBilletera:int}")]
        public void Put(int idBilletera, [FromBody] newMovement mov)
        {
            using (var db = new cryptoDbContext()) 
            {
                Movimiento newMov = new Movimiento();
                newMov.IdBilleteras = mov.IdBilletera;
                newMov.Monto = mov.Monto;
                newMov.Operacion = mov.Operacion;

                try
                {
                    Billetera? billetera = db.Billeteras.FirstOrDefault(a => a.IdBilleteras == idBilletera);

                    if (billetera != null)
                    {
                        if (newMov.Operacion == "ingreso")
                        {
                            billetera.Saldo += newMov.Monto;
                        }
                        else
                        {
                            billetera.Saldo -= newMov.Monto;
                        }

                        billetera.Movimientos.Add(newMov);
                        db.SaveChanges();
                    }
                    else 
                    {
                        throw new Exception("billetera no encontrada");
                    }
                   
                }
                catch (Exception ex) 
                {
                    throw;
                }
               
            }
        }
                
    }
}
