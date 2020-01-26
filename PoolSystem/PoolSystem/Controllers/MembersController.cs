using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoolSystem.DbContexts;
using PoolSystem.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        [HttpGet("{id}")]
        public Member getMemberById(int id)
        {
            var member = dbContext.Member.Find(id);

            return member;
        }

        [HttpPost()]
        public Member addMember([FromBody]Member member)
        {
            dbContext.Member.Add(member);
            dbContext.SaveChanges();
            return member;
        }

        [HttpPatch("{id}")]
        public Member patchMember([FromRoute]int id, [FromBody]Member member)
        {
            var mem = dbContext.Member.Find(id);

            if (mem != null)
            {
                mem.FirstName = member.FirstName;
                mem.LastName = member.LastName;
                mem.Phone = member.Phone;
                mem.Address = member.Address;
            }

            dbContext.SaveChanges();

            return mem;
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
