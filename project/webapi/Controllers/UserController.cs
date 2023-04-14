using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using webapi.Controllers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly WebContext _DBContext;
        private readonly JwtSetting jwtSettings;
        public UserController(WebContext DBContext, IOptions<JwtSetting> options)
        {
            this._DBContext = DBContext;
            this.jwtSettings = options.Value;
        }
        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] UserCred userCred)
        {
            var user = await this._DBContext.TblUsers.FirstOrDefaultAsync(item => item.username == userCred.username && item.password == userCred.password);
            if (user == null)
                return Unauthorized();
            var tokenhandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(this.jwtSettings.securitykey);
            var tokendesc = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[] { new Claim(ClaimTypes.Name, user.username) }
                ),
                Expires = DateTime.Now.AddSeconds(20),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256)
            };
            var token = tokenhandler.CreateToken(tokendesc);
            string finaltoken = tokenhandler.WriteToken(token);
            return Ok(finaltoken);
        }
    }
}