using System.ComponentModel.DataAnnotations;
namespace webapi.Models
{
    public class TbllShoppingList
    {
        [Key]
        public int id{get;set;}
        public int idreceiver{get;set;}
        public string? order{get;set;}
        public string? shop{get;set;}
        public string? locate{get;set;}
        public string? userreceiver{get;set;}
        public string? displaynamereceiver{get;set;}
        public string? numberphone{get;set;}
        public string? usersender{get;set;}
        public string? displaynamesender{get;set;}
        
    }
}