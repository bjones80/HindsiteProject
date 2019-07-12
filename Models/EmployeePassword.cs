﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HindsiteDb.Models
{
    public class EmployeePassword
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public string EmployeeUserName { get; set; }
        public string EmployeePasswords { get; set; }

    }
}
