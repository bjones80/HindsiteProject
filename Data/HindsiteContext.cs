using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HindsiteDb.Models;
using Microsoft.EntityFrameworkCore;

namespace HindsiteDb.Data
{
    public class HindsiteContext : DbContext
    {
        public HindsiteContext(DbContextOptions<HindsiteContext> options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<ClientPassword> ClientPasswords { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeePassword> EmployeePasswords { get; set; }
        public DbSet<GpsInfo> GpsInfoes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>().ToTable("Client");
            modelBuilder.Entity<ClientPassword>().ToTable("ClientPassword");
            modelBuilder.Entity<Employee>().ToTable("Employee");
            modelBuilder.Entity<EmployeePassword>().ToTable("EmployeePassword");
            modelBuilder.Entity<GpsInfo>().ToTable("GpsInfo");
        }


    }
}
