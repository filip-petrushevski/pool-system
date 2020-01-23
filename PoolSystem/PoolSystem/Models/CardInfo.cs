using System;
using System.Collections.Generic;

namespace PoolSystem.Models
{
    public partial class CardInfo
    {
        public CardInfo()
        {
            Card = new HashSet<Card>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int DurationInDays { get; set; }
        public int VisitsInWeek { get; set; }
        public int Price { get; set; }
        public string ImageUrl { get; set; }
        public virtual ICollection<Card> Card { get; set; }
    }
}
