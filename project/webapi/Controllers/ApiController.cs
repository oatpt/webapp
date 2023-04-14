using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using Microsoft.AspNetCore.Authorization;

namespace webapi.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly WebContext _DBContext;

        public ApiController(WebContext dBContext)
        {
            this._DBContext = dBContext;
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
        [HttpDelete("Remove/{id}")]
        public IActionResult Remove(int id)
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

        [HttpPost("Add")]
        public IActionResult Add(AddOrder obj)
        {
            var item=new TbllistFood();
            item.locate=obj.locate;
            item.user="unknow";
            item.numberphone="unknow";
            item.order=obj.order;
            item.shop=obj.shop;
            item.status="ready";
            this._DBContext.TbllistFood.Add(item);
            this._DBContext.SaveChanges();
            return Ok("success");
        }
    }
}