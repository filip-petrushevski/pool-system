using System;
using System.ComponentModel.DataAnnotations;

namespace PoolSystem.Models
{
    public class Visit
    {
        [Key]
        public int Id { get; set; }
        public DateTime LeaveDateTime { get; set; }
        public DateTime ArrivalDateTime { get; set; }
        public int CardId { get; set; }
        public int LockerId { get; set; }
    }
}
