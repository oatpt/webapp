using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;

using Microsoft.EntityFrameworkCore;

namespace webapi.Models
{
    public class TblUsers
    {
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? username{get;set;}
        public string? password{get;set;}
        public string? email{get;set;}
        public string? numberphone{get;set;}
        public string? displayname{get;set;}
    }
}