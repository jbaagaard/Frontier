using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
        
        public DbSet<Player> Players { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Player>().HasIndex(player => player.Id);
            modelBuilder.Entity<Player>().HasOne(player => player.Inventory);

            
            modelBuilder.Entity<Resource>();

            modelBuilder.Entity<Resource>().HasNoKey();

        }
    }
}