using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class Member
    {
        public Member()
        {
            Payment = new HashSet<Payment>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public int? LastPaymentId { get; set; }

        public virtual Payment LastPayment { get; set; }
        public virtual ICollection<Payment> Payment { get; set; }
    }
}
