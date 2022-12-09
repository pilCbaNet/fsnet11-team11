using Microsoft.AspNetCore.Mvc;
using cryptoAppAPI.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace cryptoAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class usuariosController : ControllerBase
    {
        // GET: api/<usuariosController>
        [HttpGet]
        public List<Usuario> Get()
        {
            using (var db = new cryptoDbContext()) 
            {
               return db.Usuarios.ToList();
            }
        }

        // GET api/<usuariosController>/5
        [HttpGet("mail")]
        public Usuario Get(string mail, string contraseña)
        {
            using (var db = new cryptoDbContext()) 
            {
                Usuario user = new Usuario();

                var resp = db.Usuarios.FirstOrDefault(u => u.Mail == mail && u.Contraseña == contraseña);

                if (resp != null) user = resp;

                return user;
            }
        }

        // POST api/<usuariosController>
        [HttpPost]
        public void Post([FromBody] Usuario oUsuario)
        {
            using (var db = new cryptoDbContext())
            {
                db.Usuarios.Add(oUsuario);
                db.SaveChanges();
            }
        }

        // PUT api/<usuariosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<usuariosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
