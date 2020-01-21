using PoolSystem.DbContexts;
using PoolSystem.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolSystem.Services
{
    public interface IUserService
    {
        Task<Employee> Authenticate(string username, string password);
        Task<IEnumerable<Employee>> GetAll();
    }

    public class UserService : IUserService
    {
        public UserService(PoolSystemContext context)
        {
            this.context = context;
        }

        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        private List<Employee> _users;
        private readonly PoolSystemContext context;

        public async Task<Employee> Authenticate(string username, string password)
        {
            _users = context.Employee.ToList();
            var user = await Task.Run(() => _users.SingleOrDefault(x => x.Username == username && x.Password == password));

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so return user details without password
            user.Password = null;
            return user;
        }

        public async Task<IEnumerable<Employee>> GetAll()
        {
            // return users without passwords
            return await Task.Run(() => _users.Select(x => {
                x.Password = null;
                return x;
            }));
        }
    }
}