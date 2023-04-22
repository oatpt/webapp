using System.ComponentModel.DataAnnotations;
namespace webapi.Models
{
    public class TbllistFood
    {
        [Key]
        public int id{get;set;}
        public string? order{get;set;}
        public string? shop{get;set;}
        public string? locate{get;set;}
        public string? userreceiver{get;set;}
        public string? displaynamereceiver{get;set;}
        public string? numberphone{get;set;}
        public string? senderdisplayname{get;set;}
        public string? sendernumberphone{get;set;}
        public string? status{get;set;}
    }
}