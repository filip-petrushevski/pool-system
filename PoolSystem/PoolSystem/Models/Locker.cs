using PoolSystem.Enums;
using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class Locker
    {
        public Locker()
        {
            Visit = new HashSet<Visit>();
        }

        public int Id { get; set; }
        public int Number { get; set; }
        public ChangingRoom ChangingRoom { get; set; }

        public virtual ICollection<Visit> Visit { get; set; }
    }
}
