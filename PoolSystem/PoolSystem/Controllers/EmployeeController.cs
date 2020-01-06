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
    public class EmployeesController : Controller
    {
        private readonly PoolSystemContext dbContext;

        public EmployeesController(PoolSystemContext dbContext)
        {
            this.dbContext = dbContext;
        }
        //[HttpPost()]
        //public Employee addNewEmployee(int Id, )


        [HttpGet]

        public List<Employee> allEmployees()
        {
            return dbContext.Employee.Where(emp => emp.DeletedOn == null).ToList();

        }
        [HttpDelete]
        public Employee deleteEmployee(int id)
        {
            Employee emp = dbContext.Employee.Find(id);
            emp.DeletedOn = DateTime.Now;
            dbContext.SaveChanges();
            return emp;
        }
        [HttpPost]
        [Route("add")]
        public Employee addEmployee(Employee emp)
        {
            Employee employee = new Employee();
            employee.Address = emp.Address;
            employee.FirstName = emp.FirstName;
            employee.LastName = emp.LastName;
            employee.Phone = emp.Phone;
            employee.Id = emp.Id;
            dbContext.Employee.Add(employee);
            dbContext.SaveChanges();
            return employee;
        }
    }
}
