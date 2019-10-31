using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class Visit
    {
        public int Id { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public DateTime LeaveDateTime { get; set; }
        public int CardId { get; set; }
        public int LockerId { get; set; }

        public virtual Card Card { get; set; }
        public virtual Locker Locker { get; set; }
    }
}
