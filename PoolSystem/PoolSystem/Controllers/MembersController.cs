using Microsoft.AspNetCore.Mvc;
using PoolSystem.DbContexts;
using PoolSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace PoolSystem.Controllerss
{
    [ApiController]
    [Route("api/[controller]")]
    public class MembersController : Controller
    {
        private readonly PoolSystemContext dbContext;

        public MembersController(PoolSystemContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet()]
        public IEnumerable<Member> getAllMembers()
        {
            return dbContext.Member.ToList();
        }

        [HttpPost()]
        public Member addMember(Member member)
        {
            dbContext.Member.Add(member);
            dbContext.SaveChanges();
            return member;
        }

        [HttpDelete("{id}")]
        public ActionResult<Member> removeMember(int id)
        {
            Member memberToRemove = dbContext.Member.FirstOrDefault(mem => mem.Id == id);

            if (memberToRemove == null)
            {
                return NotFound();
            }
            dbContext.Member.Remove(memberToRemove);
            dbContext.SaveChanges();
            return memberToRemove;
        }
    }
}
