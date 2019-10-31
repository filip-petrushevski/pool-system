using PoolSystem.Enums;
using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class Payment
    {
        public Payment()
        {
            Card = new HashSet<Card>();
            Member = new HashSet<Member>();
        }

        public int Id { get; set; }
        public PaymentType PaymentType { get; set; }
        public DateTime CreatedOn { get; set; }
        public int EmployeeId { get; set; }
        public int MemberId { get; set; }
        public int CardId { get; set; }

        public virtual Card CardNavigation { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Member MemberNavigation { get; set; }
        public virtual ICollection<Card> Card { get; set; }
        public virtual ICollection<Member> Member { get; set; }
    }
}
