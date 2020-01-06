using Microsoft.AspNetCore.Mvc;
using PoolSystem.DbContexts;
using PoolSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace PoolSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardInfoController : Controller
    {
        private readonly PoolSystemContext dbContext;

        public CardInfoController(PoolSystemContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet()]
        public IEnumerable<CardInfo> getAllCardInfo()
        {
            return dbContext.CardInfo.ToList();
        }

        [HttpPost()]
        public CardInfo addCardInfo(CardInfo cardInfo)
        {
            dbContext.CardInfo.Add(cardInfo);
            dbContext.SaveChanges();
            return cardInfo;
        }

        [HttpDelete("{id}")]
        public ActionResult<CardInfo> removeCardInfo(int id)
        {
            CardInfo ciToRemove = dbContext.CardInfo.FirstOrDefault(ci => ci.Id == id);

            if(ciToRemove == null)
            {
                return NotFound(); 
            }
            dbContext.CardInfo.Remove(ciToRemove);
            dbContext.SaveChanges();
            return ciToRemove;
        }
    }
}
