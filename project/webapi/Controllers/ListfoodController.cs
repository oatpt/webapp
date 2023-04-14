using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
namespace webapi.Controllers
{
    //[ApiController]
    [Route("[controller]")]
    public class ListfoodController:ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ListfoodController(IHttpContextAccessor httpContextAccessor)
        {
            
            this._httpContextAccessor = httpContextAccessor;
        }
        [HttpGet("Readtoken")]
        public IActionResult Readtoken()
        {
            
            var httpRequest = _httpContextAccessor.HttpContext.Request;
            var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
            if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("bearer "))
            {
                var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
                var handler = new JwtSecurityTokenHandler();
                var token = handler.ReadJwtToken(tokenString);
                // Access the claims in the token
                var username = token.Payload["unique_name"];
                return Ok(username);
            }
            return Ok("not found");
        }
    }
}