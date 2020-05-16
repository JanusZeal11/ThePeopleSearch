using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ThePeopleSearch.Models;

namespace ThePeopleSearch.Data
{
    public class PersonDbContext : DbContext
    {
        private bool _isTest = false;

        public DbSet<Person> Persons { get; set; }

        public PersonDbContext(DbContextOptions<PersonDbContext> options, bool isTest = false)
            : base(options)
        {
            this._isTest = isTest;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (!this._isTest)
            {
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 1,
                        IsActive = true,
                        FirstName = "Elmo",
                        LastName = "",
                        Address = "1 Sesame St.",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1234",
                        Email = "elmo@mail.com",
                        ImageName = "Elmo.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\Elmo.jpg")
                    });
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 2,
                        IsActive = true,
                        FirstName = "Cookie",
                        LastName = "Monster",
                        Address = "2 Sesame St.",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1235",
                        Email = "cookie.monster@mail.com",
                        ImageName = "CookieMonster.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\CookieMonster.jpg")
                    });
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 3,
                        IsActive = true,
                        FirstName = "Big",
                        LastName = "Bird",
                        Address = "3 Sesame St.",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1236",
                        Email = "big.bird@mail.com",
                        ImageName = "BigBird.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\BigBird.jpg")
                    });
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 4,
                        IsActive = true,
                        FirstName = "Bert",
                        LastName = "",
                        Address = "4 Sesame St.",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1237",
                        Email = "bert@mail.com",
                        ImageName = "Bert.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\Bert.jpg")
                    });
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 5,
                        IsActive = true,
                        FirstName = "Count",
                        LastName = "von Count",
                        Address = "5 Sesame St.",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1238",
                        Email = "count.von.count@mail.com",
                        ImageName = "CountvonCount.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\CountvonCount.jpg")
                    });
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 6,
                        IsActive = true,
                        FirstName = "Grover",
                        LastName = "",
                        Address = "6 Sesame St.",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1239",
                        Email = "grover@mail.com",
                        ImageName = "Grover.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\Grover.jpg")
                    });
                modelBuilder
                    .Entity<Person>()
                    .HasData(new Person
                    {
                        Id = 7,
                        IsActive = true,
                        FirstName = "Oscar",
                        LastName = "Grouch",
                        Address = "",
                        City = "New York",
                        State = "NY",
                        PostalCode = "12345",
                        Phone = "555-555-1240",
                        Email = "OscarGrouch@mail.com",
                        ImageName = "OscarGrouch.jpg",
                        ImageData = File.ReadAllBytes(@"~\..\Assets\Images\OscarGrouch.jpg")
                    });
            }
        }
    }
}
