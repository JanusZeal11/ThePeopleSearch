using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThePeopleSearch.Models;

namespace ThePeopleSearch.Data
{
    public class PersonDbContext : DbContext
    {
        public DbSet<Person> Persons { get; set; }

        public PersonDbContext(DbContextOptions<PersonDbContext> options)
            : base(options)
        { }
    }
}
