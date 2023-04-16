using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Apiauthorize : ControllerBase
    {
        private readonly WebContext _DBContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public Apiauthorize(WebContext dBContext,IHttpContextAccessor httpContextAccessor)
        {
            this._DBContext = dBContext;
            this._httpContextAccessor = httpContextAccessor;
        }
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var item = this._DBContext.TblUsers.ToList();
            return Ok(item);
        }

        
        [HttpGet("Getbyname")]
        public IActionResult Getbyname()
        {
            var httpRequest = _httpContextAccessor.HttpContext.Request;
            var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
            if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
            {
                var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
                var handler = new JwtSecurityTokenHandler();
                var token = handler.ReadJwtToken(tokenString);
                // Access the claims in the token
                var username = token.Payload["unique_name"];
                var item = this._DBContext.TblUsers.FirstOrDefault(o => o.username == username);
                return Ok(item);
            }
            return Ok("no found token");
            
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
        [HttpPost("Edit")]
        public IActionResult Edit(TblUsers temp)
        {
            var item = this._DBContext.TblUsers.FirstOrDefault(o => o.username == temp.username);   
            item.password=temp.password;
            item.email=temp.email;
            item.numberphone=temp.numberphone;
            item.displayname=temp.displayname;
            this._DBContext.TblUsers.Update(item);
            this._DBContext.SaveChanges();
            return Ok("success");
            
        }
    }
}