namespace webapi.Models
{
    public class AddUser
    {
       
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string? username{get;set;}
        public string? password{get;set;}
        public string? email{get;set;}
        public string? numberphone{get;set;}
    }
}