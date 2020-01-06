using Microsoft.AspNetCore.Mvc;
using PoolSystem.DbContexts;
using PoolSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly PoolSystemContext dbContext;

        public EmployeeController(PoolSystemContext dbContext)
        {
            this.dbContext = dbContext;
        }
        //[HttpPost()]
        //public Employee addNewEmployee(int Id, )
    }
}
