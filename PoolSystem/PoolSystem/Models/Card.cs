using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class Card
    {
        public Card()
        {
            PaymentNavigation = new HashSet<Payment>();
            Visit = new HashSet<Visit>();
        }

        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int CardInfoId { get; set; }

        public virtual CardInfo CardInfo { get; set; }
        public virtual Payment Payment { get; set; }
        public virtual ICollection<Payment> PaymentNavigation { get; set; }
        public virtual ICollection<Visit> Visit { get; set; }
    }
}
