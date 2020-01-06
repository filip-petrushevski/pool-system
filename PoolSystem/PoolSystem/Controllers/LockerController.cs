using Microsoft.AspNetCore.Mvc;
using PoolSystem.DbContexts;
using PoolSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace PoolSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LockerController : Controller
    {
        private readonly PoolSystemContext dbContext;

        public LockerController(PoolSystemContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet()]
        public IEnumerable<Locker> getAllCardInfo()
        {
            return dbContext.Locker.ToList();
        }

        [HttpPost()]
        public Locker addLocker(Locker locker)
        {
            dbContext.Locker.Add(locker);
            dbContext.SaveChanges();
            return locker;
        }

        [HttpDelete("{id}")]
        public ActionResult<Locker> removeLocker(int id)
        {
            Locker lockerToRemove = dbContext.Locker.FirstOrDefault(lo => lo.Id == id);

            if (lockerToRemove == null)
            {
                return NotFound();
            }
            dbContext.Locker.Remove(lockerToRemove);
            dbContext.SaveChanges();
            return lockerToRemove;
        }
    }
}
