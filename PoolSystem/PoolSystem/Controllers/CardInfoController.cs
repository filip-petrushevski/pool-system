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
    }
}
