using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        //The "options" is the database connection string which will be dependency injected.
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        //In DbContext, a DbSet is a table.. so essentially this gives us access to the Products table
        public DbSet<Product> Products { get; set; }
    }
}