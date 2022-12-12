using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Entities;
using System.Net.Mail;
using Microsoft.AspNetCore.Identity;
using _0_DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace cryptoAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class usuariosController : ControllerBase
    {

     
        [HttpPost]
        public Usuario? Post([FromBody] GetUsuarioDto user)
        {
            using (var db = new cryptoDbContext()) 
            {

                return db.Usuarios.Where(a => a.Mail == user.Mail && a.Contraseña == user.Contraseña)
                    .Include(a => a.Billeteras).FirstOrDefault();
                       
            }
        }

        // POST api/<usuariosController>
        [HttpPost("register")]
        public void Post([FromBody] PostUsuarioDto user)
        {
            using (var db = new cryptoDbContext())
            {
                try
                {
                    Usuario oUsuario = new Usuario();
                    Billetera oBilletera = new Billetera();

                    oUsuario.Apenom = user.Apenom;
                    oUsuario.Mail = user.Mail;
                    oUsuario.Contraseña = user.Contraseña;
                    oUsuario.Nacimiento = user.Fecha;
                    oUsuario.Dni = user.Document;
                    oBilletera.Saldo = 0;
                    oUsuario.Billeteras.Add(oBilletera);

                    db.Usuarios.Add(oUsuario);
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
