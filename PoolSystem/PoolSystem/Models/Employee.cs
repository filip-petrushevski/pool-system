using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Payment = new HashSet<Payment>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime? DeletedOn { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Payment> Payment { get; set; }
    }
}
