using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using Microsoft.AspNetCore.Authorization;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Apiauthorize : ControllerBase
    {
        private readonly WebContext _DBContext;

        public Apiauthorize(WebContext dBContext)
        {
            this._DBContext = dBContext;
        }
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var item = this._DBContext.TblUsers.ToList();
            return Ok(item);
        }
        [HttpGet("Getbyname")]
        public IActionResult Getbyid(string username)
        {
            var item = this._DBContext.TblUsers.FirstOrDefault(o => o.username == username);
            return Ok(item);
        }
        [HttpDelete("Remove")]
        public IActionResult Remove(string username)
        {
            var item = this._DBContext.TblUsers.FirstOrDefault(o => o.username == username);
            if (item != null)
            {
                this._DBContext.Remove(item);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("unsuccess");
        }

        [HttpPost("Add")]
        public IActionResult Add(AddUser temp)
        {
            var item = this._DBContext.TblUsers.FirstOrDefault(o => o.username == temp.username);
            if (item == null)
            {
                var obj = new TblUsers();
                obj.username=temp.username;
                obj.password=temp.password;
                obj.email=temp.email;
                obj.numberphone=temp.numberphone;
                obj.displayname=temp.username;
                this._DBContext.TblUsers.Add(obj);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            else
            {
                return Ok("already used");
            }
        }
    }
}