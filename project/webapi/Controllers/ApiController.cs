using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace webapi.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly WebContext _DBContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public ApiController(WebContext dBContext,IHttpContextAccessor httpContextAccessor)
        {
            this._DBContext = dBContext;
            this._httpContextAccessor = httpContextAccessor;
        }
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var item = this._DBContext.TbllistFood.ToList();
            return Ok(item);
        }
        [HttpGet("Getbyid/{id}")]
        public IActionResult Getbyid(int id)
        {
            var item = this._DBContext.TbllistFood.FirstOrDefault(o => o.id == id);
            return Ok(item);
        }
        [HttpGet("Take/{id}")]
        public IActionResult Take(int id)
        {
            var httpRequest = _httpContextAccessor.HttpContext.Request;
            var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
            if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
            {
                var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
                var handler = new JwtSecurityTokenHandler();
                var token = handler.ReadJwtToken(tokenString);
                // Access the claims in the token
                var tokensender = token.Payload["unique_name"];
                var orderfood = this._DBContext.TbllistFood.FirstOrDefault(o => o.id == id);
                var sender = this._DBContext.TblUsers.FirstOrDefault(o => o.username == tokensender);
                var item=new TbllShoppingList();
                item.displaynamereceiver=orderfood.displaynamereceiver;
                item.displaynamesender=sender.displayname;
                item.locate=orderfood.locate;
                item.numberphone=orderfood.numberphone;
                item.order=orderfood.order;
                item.shop=orderfood.shop;
                item.userreceiver=orderfood.userreceiver;
                item.usersender=sender.username;
                item.idreceiver=orderfood.id;
                this._DBContext.TbllShoppingList.Add(item);
                orderfood.status="process";
                orderfood.senderdisplayname=item.displaynamesender;
                orderfood.sendernumberphone=item.numberphone;
                this._DBContext.TbllistFood.Update(orderfood);
                this._DBContext.SaveChanges();

                return Ok("success");
            }
            return Ok("no found token");
        }
        [HttpGet("MyOrder")]
        public IActionResult MyOrder()
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
                var Order = this._DBContext.TbllistFood.ToList();
                var MyOrder= new List<TbllistFood>();
                foreach (var item in Order)
                {
                    if (String.Equals(item.userreceiver,username))
                    {
                        MyOrder.Add(item);
                    }
                }
                return Ok(MyOrder);
            }
            return Ok("no found token");
        }
        [HttpGet("MyshoppingList")]
        public IActionResult MyshoppingList()
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
                var ShoppingList = this._DBContext.TbllShoppingList.ToList();
                var MyshoppingList= new List<TbllShoppingList>();
                foreach (var item in ShoppingList)
                {
                    if (String.Equals(item.usersender,username))
                    {
                        MyshoppingList.Add(item);
                    }
                }
                return Ok(MyshoppingList);
            }
            return Ok("no found token");
        }
        [HttpDelete("Delete/{id}")]
        public IActionResult delete(int id)
        {
            var item = this._DBContext.TbllistFood.FirstOrDefault(o => o.id == id);
            if (item != null)
            {
                this._DBContext.Remove(item);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("unsuccess");
        }
        [HttpDelete("Confirm/{id}")]
        public IActionResult confirm(int id)
        {
            var item = this._DBContext.TbllistFood.FirstOrDefault(o => o.id == id);
            if (item != null)
            {
                var sender = this._DBContext.TbllShoppingList.FirstOrDefault(o => o.idreceiver == item.id);
                this._DBContext.Remove(sender);
                this._DBContext.Remove(item);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("unsuccess");
        }
        [HttpDelete("Cancle/{id}")]
        public IActionResult cancle(int id)
        {
            var item = this._DBContext.TbllShoppingList.FirstOrDefault(o => o.id == id);
            if (item != null)
            {
                var order = this._DBContext.TbllistFood.FirstOrDefault(o => o.id == item.idreceiver);
                order.status="ready";
                this._DBContext.TbllistFood.Update(order);
                this._DBContext.TbllShoppingList.Remove(item);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("unsuccess");
        }

        [HttpPost("Add")]
        public IActionResult Add(AddOrder obj)
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
                var temp = this._DBContext.TblUsers.FirstOrDefault(o => o.username == username);
                var item=new TbllistFood();
                item.locate=obj.locate;
                item.displaynamereceiver=temp.displayname;
                item.userreceiver=temp.username;
                item.numberphone=temp.numberphone;
                item.order=obj.order;
                item.shop=obj.shop;
                item.status="ready";
                item.senderdisplayname="...";
                item.sendernumberphone="...";
                this._DBContext.TbllistFood.Add(item);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("no found token");
        }
        
    }
}