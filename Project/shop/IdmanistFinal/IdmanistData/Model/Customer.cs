using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdmanistData.Model
{
    public class Customer
    {
        [Key]
        public int UserID { get; set; }
        //[Required(ErrorMessage = "User name is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        //[Compare("Password", ErrorMessage = "COnfirm password should be same as password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
        //[Required(ErrorMessage = "First name is required")]
        //public string FirstName { get; set; }
        ////[Required(ErrorMessage = "Last name is required")]
        //public string LastName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        //[RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
        // @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
        // @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Please enter the valid email")]
        [EmailAddress]
        public string Email { get; set; }

    }
}
