using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HindsiteDb.Models;
using HindsiteDb.Data;

namespace HindsiteDb.Data
{
    public static class DbInitializer
    {
        public static void Initialize(HindsiteContext context)
        {
            if (context.Clients.Any())
            {
                return;
            }

            //Clients
            var clients = new Client[]
            {
                new Client
                {
                    CompanyName = "Jonah Energy",
                    Location = "Jonah Energy LLC, 83 Luman Road Pinedale, WY 82941, Boulder, WY 82923"
                },
                new Client
                {
                    CompanyName = "Linn Energy",
                    Location = "E Oklahoma Ave, Ulysses, KS 67880"
                }
            };

            foreach (Client c in clients)
            {
                context.Clients.Add(c);
            }
            context.SaveChanges();

            // Client Password Table 
            var clientPasswords = new ClientPassword[]
            {
                new ClientPassword
                {
                    ClientUserName = "UserName",
                    ClientPasswords = "Password"
                }
            };

            foreach (ClientPassword p in clientPasswords)
            {
                context.ClientPasswords.Add(p);
            }
            context.SaveChanges();

            // Employee's 
            var employees = new Employee[]
            {
                new Employee
                {
                    FirstName = "David",
                    LastName = "Jones"
                },
                new Employee
                {
                    FirstName = "Nolan",
                    LastName = "Jones"
                }
            };

            foreach (Employee e in employees)
            {
                context.Employees.Add(e);
            }
            context.SaveChanges();

            // Employee Passwords Table
            var employeePasswords = new EmployeePassword[]
            {
                new EmployeePassword
                {
                    EmployeeUserName = "UserName",
                    EmployeePasswords = "Password"
                }
            };

            foreach (EmployeePassword ep in employeePasswords)
            {
                context.EmployeePasswords.Add(ep);
            }
            context.SaveChanges();

            // Gps Info table
            var gpsInfos = new GpsInfo[]
            {
                new GpsInfo
                {
                    GpsFile = "file address",
                    Locations = "SHB 101",
                    Date = DateTime.Parse("2019-07-10")
                }
            };
            
            foreach (GpsInfo g in gpsInfos)
            {
                context.GpsInfoes.Add(g);
            }
            context.SaveChanges();



        }
    }
}
